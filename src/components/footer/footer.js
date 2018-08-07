import Typography from '@material-ui/core/Typography';
import delimiter from 'delimiter';
import React from 'react';
import withContext from 'react-multi-context/withContext';
import Context from '../../context';
import withStyles from './footer-styles';
import Link from './link/footer-link';

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

const year = new Date().getFullYear();



class Footer extends React.PureComponent {

  get links() {
    const props = this.props.footer.concat(defaultLinks);
    props.sort(propsSorts);
    const links = props.map(mapPropsToLinks);
    return delimiter(links);
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

export default withContext(Context, [ 'copyright', 'footer' ])(withStyles(Footer));
