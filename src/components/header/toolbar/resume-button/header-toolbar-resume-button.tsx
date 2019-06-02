import { Button } from '@material-ui/core';
import React from 'react';
import IContextProps from '../../../../../props';
import Context from '../../../context';
import withStyles from './header-toolbar-resume-button-styles';



interface IProps {
  classes: Record<string, string>;
}



const CONTEXT: Array<keyof IContextProps> = [ 'resume' ];



export default withStyles(
  function Resume({ classes }: IProps): JSX.Element {
    return (
      <Context get={CONTEXT}>
        {(resume: string): JSX.Element =>
          <a
            className={classes.root}
            href={resume}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <Button
              color="secondary"
              variant="contained"
            >
              Download Resume (PDF)
            </Button>
          </a>
        }
      </Context>
    );
  }
);
