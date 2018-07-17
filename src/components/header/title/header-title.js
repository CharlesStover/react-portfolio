import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import Context from '../../../context';
import styles from './header-title-styles';
import Link from './link/header-title-link';

const context = [ 'title' ];

const contextConsumer = (title) =>
  <Link children={title} />;

class HeaderTitle extends React.PureComponent {
  render() {
    return (
      <Typography
        className={this.props.classes.root}
        variant="title"
      >
        <Context
          children={contextConsumer}
          get={context}
        />
      </Typography>
    );
  }
}

export default withStyles(styles)(HeaderTitle);
