import { Tooltip } from '@material-ui/core';
import React from 'react';
import withStyles from './header-social-link-styles';
import linkProps from './header-social-link-props';

class HeaderSocialLink extends React.PureComponent {
  render() {
    const props = linkProps(this.props.medium, this.props.value);

    if (props === null) {
      return null;
    }

    return (
      <Tooltip title={props.title}>
        <a
          className={this.props.classes.root}
          href={props.href}
          key={props.medium}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            alt={props.alt}
            className={this.props.classes.image}
            src={props.src}
          />
        </a>
      </Tooltip>
    );
  }
}

export default withStyles(HeaderSocialLink);
