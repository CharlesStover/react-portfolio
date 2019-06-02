import { Typography } from '@material-ui/core';
import React from 'react';
import { Social } from '../../../../props';
import Context from '../../context';
import withStyles from './header-social-styles';
import Link from './link';

interface IProps {
  classes: Record<string, string>;
  social: Social;
}

const mapSocialToLinks = ([ medium, value ]: [ string, string ]) =>
  <Link
    key={medium}
    medium={medium}
    value={value}
  />;

export default withStyles(Context.with('social')(
  function HeaderSocial({ classes, social }: IProps): JSX.Element | null {

    const socialEntries: [ string, string ][] = Object.entries(social);

    // If there are no social links, don't render a social bar.
    if (socialEntries.length === 0) {
      return null;
    }

    // If there are social links, render them.
    return (
      <Typography
        className={classes.root}
        role="navigation"
        variant="caption"
      >
        <span>Connect with me.</span>
        <span className={classes.links}>
          {socialEntries.map(mapSocialToLinks)}
        </span>
      </Typography>
    );
  }
));
