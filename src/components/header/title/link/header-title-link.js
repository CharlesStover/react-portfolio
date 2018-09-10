import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from './header-title-link-styles';

class HeaderTitleLink extends React.PureComponent {
  render() {
    return (
      <Link
        className={this.props.classes.root}
        to="/"
        {...this.props}
      />
    );
  }
}

export default withStyles(HeaderTitleLink);
