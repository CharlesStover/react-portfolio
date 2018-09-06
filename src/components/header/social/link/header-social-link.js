import { Tooltip } from '@material-ui/core';
import React from 'react';
import createObjectProp from 'react-object-prop';
import withStyles from './header-social-link-styles';
import linkProps from './header-social-link-props';

const SOCIAL_MEDIUMS = 9;

class HeaderSocialLink extends React.PureComponent {

  style = createObjectProp();

  render() {
    const props = linkProps(this.props.medium, this.props.value);

    if (props === null) {
      return null;
    }

    const style = this.style({
      backgroundPosition: (props.index * 100 / (SOCIAL_MEDIUMS - 1)) + '% center'
    });

    return (
      <Tooltip title={props.title}>
        <a
          className={this.props.classes.root}
          href={props.href}
          key={this.props.medium}
          rel="nofollow noopener noreferrer"
          style={style}
          target="_blank"
        >
          <span
            className={this.props.classes.color}
            style={style}
          >
            <span children={props.title} />
          </span>
        </a>
      </Tooltip>
    );
  }
}

export default withStyles(HeaderSocialLink);
