import React from 'react';
import withStyles from './header-social-message-styles';

class HeaderSocialMessage extends React.PureComponent {
  render() {
    return (
      <span
        children="Connect with me."
        className={this.props.classes.root}
      />
    );
  }
}

export default withStyles(HeaderSocialMessage);
