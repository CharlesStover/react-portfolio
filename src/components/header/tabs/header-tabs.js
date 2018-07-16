import withStyles from '@material-ui/core/styles/withStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import withContext from 'react-multi-context/withContext';
import createObjectProp from 'react-object-prop';
import Link from 'react-router-dom/Link';
import Context from '../../../context';
import headerTabsStyles from './header-tabs-styles';

const tabClasses = createObjectProp();
const tabsClasses = createObjectProp();

class HeaderTabs extends React.PureComponent {

  constructor(props) {
    super(props);
    this._nav = null;
    this._pathname = '/';
    this._tabsChildren = null;
    this.mapNavToTabs = this.mapNavToTabs.bind(this);
  }

  mapNavToTabs(props, tabIndex) {
    return (
      <Tab
        classes={this.tabClasses}
        disabled={props.path === this.props.pathname}
        label={
          <Link
            className={this.props.classes.link}
            to={props.path}
          >
            <span children={props.title} />
          </Link>
        }
        tabIndex={tabIndex}
        value={props.path}
      />
    );
  }

  get tabClasses() {
    return tabClasses({
      label: this.props.classes.label,
      labelContainer: this.props.classes.labelContainer,
      root: this.props.classes.tab,
      selected: this.props.classes.selected,
      wrapper: this.props.classes.wrapper
    });
  }

  get tabsChildren() {
    if (
      this.props.nav !== this._nav ||
      this.props.pathname !== this._pathname
    ) {
      this._nav = this.props.nav;
      this._pathname = this.props.pathname;
      this._tabsChildren = this.props.nav.map(this.mapNavToTabs);
    }
    return this._tabsChildren;
  }

  get tabsClasses() {
    return tabsClasses({
      flexContainer: this.props.classes.flexContainer,
      indicator: this.props.classes.indicator,
      root: this.props.classes.tabs,
      scroller: this.props.classes.scroller
    });
  }

  render() {
    return (
      <nav className={this.props.classes.nav}>
        <Tabs
          centered
          children={this.tabsChildren}
          classes={this.tabsClasses}
          fullWidth
          value={this.props.pathname}
        />
      </nav>
    );
  }
}

export default withStyles(headerTabsStyles)(withContext(Context, [ 'nav', 'pathname' ])(HeaderTabs));
