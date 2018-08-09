import Tab from '@material-ui/core/Tab';
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
      label: this.props.classes.label,
      labelContainer: this.props.classes.labelContainer,
      root: this.props.classes.root,
      selected: this.props.classes.selected,
      wrapper: this.props.classes.wrapper
    });
  }

  render() {
    return (
      <Tab
        classes={this.tabClasses}
        disabled={this.props.value === this.props.pathname}
        label={this.label}
        tabIndex={this.props.tabIndex}
        title={this.props.title}
        value={this.props.value}
      />
    );
  }
}

export default withStyles(Context.with('pathname')(HeaderTab));
