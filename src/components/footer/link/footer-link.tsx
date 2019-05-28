import React from 'react';
import withStyles from './footer-link-styles';

interface IProps {
  children: string;
  classes: Record<string, string>;
  href: string;
  title: string;
}

export default withStyles(
  function FooterLink({
    children,
    classes,
    href,
    title,
  }: IProps): JSX.Element {
    return (
      <a
        children={children}
        className={classes.root}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        title={title}
      />
    );
  }
);
