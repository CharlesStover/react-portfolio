import { Tooltip } from '@material-ui/core';
import React from 'react';
import createObjectProp from 'react-object-prop';
import Context from '../../../../context';
import withStyles from './header-social-link-styles';
import linkProps from './header-social-link-props';

const SOCIAL_MEDIUMS = 9;

class HeaderSocialLink extends React.PureComponent {

  state = {
    active: false
  };

  style = createObjectProp();

  activate = () => {
    this.setState({
      active: true
    });
  };

  deactivate = () => {
    this.setState({
      active: false
    });
  };

  get saturate() {
    if (this.state.active) {
      return 100;
    }
    return 0;
  }

  render() {
    const props = linkProps(this.props.medium, this.props.value);

    if (props === null) {
      return null;
    }

    const style = this.style({
      backgroundPosition: (props.index * 100 / (SOCIAL_MEDIUMS - 1)) + '% center',
      filter: 'hue-rotate(' + (this.props.hue * 360) + 'deg) saturate(' + this.saturate + '%)'
    });

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
          style={style}
          target="_blank"
        >
          <span children={props.title} />
        </a>
      </Tooltip>
    );
  }
}

export default Context.with('hue')(withStyles(HeaderSocialLink));
