import memoizeOne from 'memoize-one';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import Context from '../../context';
import withStyles from './main-styles';

const mapRoutesToSwitch = routes =>
  routes.map(route =>
    <Route
      exact
      path={route.path}
      render={props => {
        const Component = route.component;
        return (
          <React.Fragment>
            <Helmet>
              {route.description ? <meta name="description" value={route.description} /> : null}
              {route.keywords ? <meta name="keywords" value={route.keywords.join(', ')} /> : null}
              {route.title ? <title children={route.title} /> : null}
            </Helmet>
            <Component {...props} />
          </React.Fragment>
        );
      }}
      sensitive
      strict
    />
  );

class Main extends React.PureComponent {

  mapRoutesToSwitch = memoizeOne(mapRoutesToSwitch);

  render() {
    return (
      <main className={this.props.classes.root}>
        <Switch children={this.mapRoutesToSwitch(this.props.routes)} />
      </main>
    );
  }
}

export default Context.with('pathname', 'routes')(withStyles(Main));
