import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import bind from 'bind-decorator';
import React from 'react';
import Link from 'react-router-dom/Link';
import headerTitleStyles from './header-title-styles';
import { Context } from '../../../index';

const context = [ 'title' ];

class HeaderTitle extends React.PureComponent {

  @bind
  contextConsumer(title) {
    return (
      <Link
        children={title}
        className={this.props.classes.link}
        to="/"
      />
    );
  }

  render() {
    return (
      <Typography
        className={this.props.classes.root}
        variant="title"
      >
        <Context
          children={this.contextConsumer}
          get={context}
        />
      </Typography>
    );
  }
}

export default withStyles(headerTitleStyles)(HeaderTitle);
