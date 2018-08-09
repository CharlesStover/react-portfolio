import memoizeOne from 'memoize-one';
import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Context from '../../context';
import withStyles from './main-styles';

const mapRoutesToSwitch = routes =>
  routes.map(props =>
    <Route
      exact
      sensitive
      strict
      {...props}
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
