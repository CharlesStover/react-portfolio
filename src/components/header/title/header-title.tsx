import { Typography } from '@material-ui/core';
import React from 'react';
import ContextProps from '../../../../props';
import Context from '../../context';
import withStyles from './header-title-styles';
import Link from './link';

interface IProps {
  classes: Record<string, string>;
}

const context: Array<keyof ContextProps> = [ 'title' ];

export default withStyles(
  function HeaderTitle({ classes }: IProps): JSX.Element {
    return (
      <Typography
        className={classes.root}
        variant="h1"
      >
        <Context get={context}>
          {(title: string): JSX.Element =>
            <Link children={title} />
          }
        </Context>
      </Typography>
    );
  }
);
