import { Tabs } from '@material-ui/core';
import memoizeOne from 'memoize-one';
import React from 'react';
import { findDOMNode } from 'react-dom';
import createObjectProp from 'react-object-prop';
import Context from '../../../context';
import Tab from '../tab/header-tab';
import withStyles from './header-tabs-styles';

const handleMouseDown = e => {
  e.preventDefault();
  previousMousePosition = e.pageX;
};

const handleMouseUp = e => {
  e.preventDefault();
  previousMousePosition = null;
};

const mapNavToTabs = nav =>
  nav.map((props, tabIndex) =>
    <Tab
      tabIndex={tabIndex}
      title={props.title}
      value={props.path}
    />
  );

let previousMousePosition = null;

class HeaderTabs extends React.PureComponent {

  mapNavToTabs = memoizeOne(mapNavToTabs);
  tabsClassesProp = createObjectProp();
  tabsRef = null;

  findPathname = arr =>
    arr.path === this.props.pathname;

  handleMouseMove = e => {
    e.preventDefault();
    if (previousMousePosition !== null) {
      this.tabsRef.scrollLeft += previousMousePosition - e.pageX;
      previousMousePosition = e.pageX;
    }
  };

  handleTabsRef = tabsRef => {
    this.tabsRef = findDOMNode(tabsRef);
  };

  get tabsClasses() {
    return this.tabsClassesProp({
      flexContainer: this.props.classes.flexContainer,
      root: this.props.classes.tabs,
      scroller: this.props.classes.scroller
    });
  }

  get value() {
    if (this.props.nav.findIndex(this.findPathname) !== -1) {
      return this.props.pathname;
    }
    return false;
  }

  render() {
    if (this.props.nav.length === 0) {
      return null;
    }
    return (
      <nav className={this.props.classes.nav}>
        <Tabs
          children={this.mapNavToTabs(this.props.nav)}
          classes={this.tabsClasses}
          fullWidth
          onMouseDown={handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={handleMouseUp}
          ref={this.handleTabsRef}
          value={this.value}
        />
      </nav>
    );
  }
}

export default Context.with('nav', 'pathname')(withStyles(HeaderTabs));
