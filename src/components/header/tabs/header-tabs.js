import withStyles from '@material-ui/core/styles/withStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import createObjectProp from 'react-object-prop';
import Link from 'react-router-dom/Link';
import headerTabsStyles from './header-tabs-styles';

const tabClasses = createObjectProp();
const tabsClasses = createObjectProp();

class HeaderTabs extends React.PureComponent {

  link(to, children) {
    return (
      <Link
        className={this.props.classes.link}
        to={to}
      >
        <span children={children} />
      </Link>
    );
  }

  get tabClasses() {
    return tabClasses({
      label: this.props.classes.label,
      labelContainer: this.props.classes.labelContainer,
      root: this.props.classes.tab,
      selected: this.props.classes.selected,
      wrapper: this.props.classes.tabWrapper
    });
  }

  get tabsClasses() {
    return tabsClasses({
      flexContainer: this.props.classes.tabsFlexContainer,
      indicator: this.props.classes.indicator,
      root: this.props.classes.tabs,
      scroller: this.props.classes.scroller
    });
  }

  render() {
    return (
      <nav className={this.props.classes.root}>
        <Tabs
          centered
          classes={this.tabsClasses}
          fullWidth
          value={this.props.page || false}
        >
          <Tab
            classes={this.tabClasses}
            disabled={this.props.page === 'gallery'}
            label={this.link('/', 'Gallery')}
            tabIndex={1}
            value="gallery"
          />
          <Tab
            classes={this.tabClasses}
            disabled={this.props.page === 'contact'}
            label={this.link('/contact', 'Contact')}
            tabIndex={2}
            value="contact"
          />
        </Tabs>
      </nav>
    );
  }
}

export default withStyles(headerTabsStyles)(HeaderTabs);
