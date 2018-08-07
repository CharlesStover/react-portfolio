import React from 'react';
import withRouter from 'react-router/withRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Context from '../../context';
import mainStyles from './main-styles';

const context = [ 'routes' ];

const mapRoutesToSwitch = (props) =>
  <Route
    exact
    sensitive
    strict
    {...props}
  />;

class Main extends React.PureComponent {

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
      <main className={this.props.classes.root}>
        <Context
          children={this.contextConsumer}
          get={context}
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
        />
      </main>
    );
  }
}

export default withRouter(mainStyles(Main));
