import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import { findDOMNode } from 'react-dom';
import withContext from 'react-multi-context/withContext';
import createObjectProp from 'react-object-prop';
import Context from '../../../context';
import Tab from '../tab/header-tab';
import withStyles from './header-tabs-styles';

const mapNavToTabs = (props, tabIndex) =>
  <Tab
    tabIndex={tabIndex}
    title={props.title}
    value={props.path}
  />;

class HeaderTabs extends React.PureComponent {

  _nav = null;
  _pathname = '/';
  _previousMousePosition = null;
  _ref = null;
  _tabsChildren = null;
  _tabsClasses = createObjectProp();

  handleMouseDown = e => {
    e.preventDefault();
    this._previousMousePosition = e.pageX;
  }

  handleMouseMove = e => {
    e.preventDefault();
    if (this._previousMousePosition !== null) {
      this._ref.scrollLeft += this._previousMousePosition - e.pageX;
      this._previousMousePosition = e.pageX;
    }
  }

  handleMouseUp = e => {
    e.preventDefault();
    this._previousMousePosition = null;
  }

  handleRef = ref => {
    this._ref = findDOMNode(ref);
    this._ref.scrollLeft = 80;
  }

  get tabsChildren() {
    if (
      this.props.nav !== this._nav ||
      this.props.pathname !== this._pathname
    ) {
      this._nav = this.props.nav;
      this._pathname = this.props.pathname;
      this._tabsChildren = this.props.nav.map(mapNavToTabs);
    }
    return this._tabsChildren;
  }

  get tabsClasses() {
    return this._tabsClasses({
      flexContainer: this.props.classes.flexContainer,
      root: this.props.classes.tabs,
      scroller: this.props.classes.scroller
    });
  }

  get value() {
    if (this.props.nav.findIndex((nav) => nav.path === this.props.pathname) !== -1) {
      return this.props.pathname;
    }
    return false;
  }

  render() {
    return (
      <nav className={this.props.classes.nav}>
        <Tabs
          children={this.tabsChildren}
          classes={this.tabsClasses}
          fullWidth
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
          ref={this.handleRef}
          value={this.value}
        />
      </nav>
    );
  }
}

export default withContext(Context, [ 'nav', 'pathname' ])(withStyles(HeaderTabs));
