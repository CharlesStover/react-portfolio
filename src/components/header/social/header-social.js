import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import withContext from 'react-multi-context/withContext';
import youtube from '../../../assets/icons/youtube.ico';
import Context from '../../../context';
import styles from './header-social-styles';

const linkProps = (medium, value) => {
  switch (medium) {
    case 'github':
      return {
      };
    case 'youtube':
      return {
        alt: 'YouTube',
        href: 'https://www.youtube.com/user/' + value,
        src: youtube,
        title: 'YouTube'
      };
    default:
      return null;
  }
};

class HeaderSocial extends React.PureComponent {

  get links() {
    return Object.entries(this.props.social).map(([ medium, value ]) => {
      const props = linkProps(medium, value);
      if (props === null) {
        return null;
      }
      return (
        <a
          className={this.props.classes.link}
          href={props.href}
          key={medium}
          rel="nofollow noopener noreferrer"
          target="_blank"
          title={props.title}
        >
          <img
            alt={props.alt}
            className={this.props.classes.image}
            src={props.src}
          />
        </a>
      );
    });
  }

  render() {

    // If there are no social links, don't render a social bar.
    if (this.props.social.length === 0) {
      return null;
    }

    // If there are social links, render them.
    return (
      <Typography
        className={this.props.classes.root}
        variant="caption"
      >
        <span
          children="Connect with me."
          className={this.props.classes.message}
        />
        {this.links}
      </Typography>
    );
  }
}

export default withStyles(styles)(withContext(Context, [ 'social' ])(HeaderSocial));
