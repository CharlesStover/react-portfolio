import { Typography } from '@material-ui/core';
import React from 'react';
import Context from '../../context';
import withStyles from './header-social-styles';
import Link from './link';

class HeaderSocial extends React.PureComponent {

  get links() {
    return Object.entries(this.props.social).map(
      ([ medium, value ]) =>
        <Link
          key={medium}
          medium={medium}
          value={value}
        />
    );
  }

  render() {

    // If there are no social links, don't render a social bar.
    if (this.props.social.length === 0) {
      return null;
    }

    // If there are social links, render them.
    return (
      <Typography
        className={this.props.classes.root}
        role="navigation"
        variant="caption"
      >
        <span children="Connect with me." />
        <span
          children={this.links}
          className={this.props.classes.links}
        />
      </Typography>
    );
  }
}

export default Context.with('social')(withStyles(HeaderSocial));
