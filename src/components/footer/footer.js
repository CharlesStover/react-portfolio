import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import withContext from 'react-multi-context/withContext';
import Context from '../../context';
import styles from './footer-styles';
import Link from './link/footer-link';

const defaultLinks = [
  {
    children: 'Charles Stover',
    href: 'https://charlesstover.com/',
    title: 'CharlesStover.com'
  }
];

const linksReducer = (accumulator, current, index, links) => {
  accumulator.push(current);
  const linksLength = links.length;
  if (index < linksLength - 1) {
    accumulator.push(
      index === linksLength - 2 ?
        linksLength === 2 ?
          ' and ' :
          ', and ' :
        ', '
    );
  }
  return accumulator;
};

const mapPropsToLinks = (props) =>
  <Link
    key={props.children}
    {...props}
  />;

const propsSorts = ({ children: child1 }, { children: child2 }) =>
  child1 < child2 ?
    -1 :
    1;

const year = new Date().getFullYear();



class Footer extends React.PureComponent {

  get links() {
    const props = this.props.footer.concat(defaultLinks);
    props.sort(propsSorts);
    const links = props.map(mapPropsToLinks);
    return links.reduce(linksReducer, []);
  }

  get year() {
    if (this.props.copyright === year) {
      return year;
    }
    return this.props.copyright + '-' + year;
  }

  render() {
    return (
      <Typography
        className={this.props.classes.root}
        component="footer"
        variant="caption"
      >
        &copy; {this.year}{' '}
        {this.links}
      </Typography>
    );
  }
}

const FooterContext = withContext(Context, [ 'copyright', 'footer' ])(Footer);

export default withStyles(styles)(FooterContext);
