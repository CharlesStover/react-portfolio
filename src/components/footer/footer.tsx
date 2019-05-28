import { Typography } from '@material-ui/core';
import delimiter from 'delimiter';
import React from 'react';
import Context from '../context';
import withStyles from './footer-styles';
import Link from './link';
import Year from './year';

const defaultLinks = [
  {
    children: 'Charles Stover',
    href: 'https://charlesstover.com/',
    title: 'CharlesStover.com'
  }
];

const mapPropsToLinks = (props) =>
  <Link
    key={props.children}
    {...props}
  />;

const propsSorts = ({ children: child1 }, { children: child2 }) =>
  child1 < child2 ?
    -1 :
    1;

class Footer extends React.PureComponent {

  get links() {
    const props = this.props.footer.concat(defaultLinks);
    props.sort(propsSorts);
    const links = props.map(mapPropsToLinks);
    return delimiter(links);
  }

  get year() {
  }

  render() {
    return (
      <Typography
        className={this.props.classes.root}
        component="footer"
        variant="caption"
      >
        &copy; <Year />{' '}
        {this.links}
      </Typography>
    );
  }
}

export default Context.with('footer')(withStyles(Footer));
