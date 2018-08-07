import Tab from '@material-ui/core/Tab';
import React from 'react';
import withContext from 'react-multi-context/withContext';
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
    const props = {...this.props};
    delete props.pathname;
    return (
      <Tab
        {...props}
        classes={this.tabClasses}
        disabled={this.props.value === this.props.pathname}
        label={this.label}
      />
    );
  }
}

export default withContext(Context, [ 'pathname' ])(withStyles(HeaderTab));
