import { Tooltip } from '@material-ui/core';
import React from 'react';
import Context from '../../../context';
import withStyles from './header-social-link-styles';
import linkProps from './header-social-link-props';

interface IProps {
  classes: Record<string, string>;
  medium: string;
  saturation: number;
  secondary: number;
  value: string;
}

interface IState {
  active: boolean;
}

const SOCIAL_MEDIUMS: number = 9;

class HeaderSocialLink extends React.Component<IProps, IState> {

  state = {
    active: false
  };

  activate = () => {
    this.setState({
      active: true
    });
  };

  backgroundPosition(index: number) {
    return (index * 100 / (SOCIAL_MEDIUMS - 1)) + '% center';
  }

  deactivate = (): void => {
    this.setState({
      active: false
    });
  };

  get filter(): string {
    return this.hueRotate + ' ' + this.saturate + ' brightness(175%)';
  }

  get hueRotate(): string {
    return 'hue-rotate(' + (this.props.secondary * 360) + 'deg)';
  }

  get saturate(): string {
    if (this.state.active) {
      return `saturate(${this.props.saturation * 100}%)`;
    }
    return 'saturate(0)';
  }

  style(index: number): React.CSSProperties {
    return {
      backgroundPosition: this.backgroundPosition(index),
      filter: this.filter,
    };
  }

  render(): JSX.Element | null {
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

export default withStyles(Context.with('saturation', 'secondary')(HeaderSocialLink));
