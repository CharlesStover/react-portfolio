import { Tooltip } from '@material-ui/core';
import React from 'react';
import Context from '../../../context';
import withStyles from './header-social-link-styles';
import linkProps from './header-social-link-props';

const SOCIAL_MEDIUMS = 9;

class HeaderSocialLink extends React.PureComponent {

  state = {
    active: false
  };

  activate = () => {
    this.setState({
      active: true
    });
  };

  backgroundPosition(index) {
    return (index * 100 / (SOCIAL_MEDIUMS - 1)) + '% center';
  }

  deactivate = () => {
    this.setState({
      active: false
    });
  };

  get filter() {
    return this.hueRotate + ' ' + this.saturate + ' brightness(175%)';
  }

  get hueRotate() {
    return 'hue-rotate(' + (this.props.hue * 360) + 'deg)';
  }

  get saturate() {
    if (this.state.active) {
      return 'saturate(100%)';
    }
    return 'saturate(0)';
  }

  style(index) {
    return {
      backgroundPosition: this.backgroundPosition(index),
      filter: this.filter
    };
  }

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
          key={this.props.medium}
          onBlur={this.deactivate}
          onFocus={this.activate}
          onMouseOut={this.deactivate}
          onMouseOver={this.activate}
          rel="nofollow noopener noreferrer"
          style={this.style(props.index)}
          target="_blank"
        >
          <span children={props.title} />
        </a>
      </Tooltip>
    );
  }
}

export default Context.with('hue')(withStyles(HeaderSocialLink));
