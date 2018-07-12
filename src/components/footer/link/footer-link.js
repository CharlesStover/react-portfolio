import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import footerLinkStyles from './footer-link-styles';

export default withStyles(footerLinkStyles)(
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
);
