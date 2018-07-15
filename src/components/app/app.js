import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import createObjectProp from 'react-object-prop';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Context from '../../context';
import Footer from '../footer/footer';
import Header from '../header/header';
import appStyles from './app-styles';

const context = [ 'routes' ];

const contextProp = createObjectProp();

const mapRoutesToSwitch = (props) =>
  <Route
    exact
    sensitive
    strict
    {...props}
  />;

class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this._routes = null;
    this._switch = null;
    this.contextConsumer = this.contextConsumer.bind(this);
  }

  contextConsumer(routes) {
    if (routes !== this._routes) {
      this._routes = routes;
      this._switch = routes.map(mapRoutesToSwitch);
    }
    return <Switch children={this._switch} />;
  }

  render() {
    return (
      <React.Fragment>
        <Context
          set={contextProp({
            pathname: this.props.location.pathname
          })}
        >
          <Header />
        </Context>
        <main className={this.props.classes.main}>
          <Context
            children={this.contextConsumer}
            get={context}
            history={this.props.history}
            location={this.props.location}
            match={this.props.match}
          />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(appStyles)(App);
