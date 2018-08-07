import React from 'react';
import withStyles from './footer-link-styles';

class FooterLink extends React.PureComponent {
  render() {
    return (
      <a
        children={this.props.children}
        className={this.props.classes.root}
        href={this.props.href}
        rel="noopener noreferrer"
        target="_blank"
        title={this.props.title}
      />
    );
  }
}

export default withStyles(FooterLink);
