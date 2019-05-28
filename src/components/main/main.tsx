import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { Route as RouteProp } from '../../../props';
import Context from '../context';
import withStyles from './main-styles';

interface IProps {
  classes: Record<string, string>;
  pathname: string;
  routes: RouteProp[];
}

export default Context.with('routes')(withStyles(
  function Main({ classes, pathname, routes }: IProps): JSX.Element {
    return (
      <main className={classes.root}>
        <Switch>
          {routes.map((route: Prop) =>
            <Route
              exact
              key={route.path}
              path={route.path}
              render={(props: any): JSX.Element => {
                const Component = route.component;
                return (
                  <>
                    <Helmet>
                      {
                        route.description &&
                        <meta
                          name="description"
                          value={route.description}
                        />
                      }
                      {
                        route.keywords &&
                        <meta
                          name="keywords"
                          value={route.keywords.join(', ')}
                        />
                      }
                      {
                        route.title &&
                        <title>{route.title}</title>
                      }
                    </Helmet>
                    <Component {...props} />
                  </>
                );
              }}
              sensitive
              strict
            />
          )}
        </Switch>
      </main>
    );
  }
));
