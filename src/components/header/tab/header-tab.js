import { Tab } from '@material-ui/core';
import React from 'react';
import createObjectProp from 'react-object-prop';
import Link from 'react-router-dom/Link';
import Context from '../../../context';
import withStyles from './header-tab-styles';

class HeaderTab extends React.PureComponent {

  _tabClasses = createObjectProp();

  get label() {
    return (
      <Link
        className={this.props.classes.link}
        to={this.props.value}
      >
        <span children={this.props.title} />
      </Link>
    );
  }

  get tabClasses() {
    return this._tabClasses({
      disabled: this.props.classes.disabled,
      label: this.props.classes.label,
      labelContainer: this.props.classes.labelContainer,
      root: this.props.classes.root,
      selected: this.props.classes.selected,
      textColorInherit: this.props.classes.textColorInherit,
      wrapper: this.props.classes.wrapper
    });
  }

  get tabIndex() {
    if (this.props.tabIndex > 0) {
      return 0;
    }
    return this.props.tabIndex;
  }

  render() {
    return (
      <Tab
        classes={this.tabClasses}
        disabled={this.props.value === this.props.pathname}
        label={this.label}
        tabIndex={this.tabIndex}
        title={this.props.title}
        value={this.props.value}
      />
    );
  }
}

export default withStyles(Context.with('pathname')(HeaderTab));
