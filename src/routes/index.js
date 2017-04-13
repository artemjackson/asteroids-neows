import { Layout, NotFound } from 'app';
import Asteroids from 'asteroids';
import asteroids from './asteroids';

export default {
  path: '/',
  component: Layout,
  indexRoute: { component: Asteroids },
  childRoutes: [
    asteroids,
    {
      path: '*',
      component: NotFound
    }
  ]  
};
