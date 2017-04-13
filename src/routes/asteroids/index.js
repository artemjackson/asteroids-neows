import Asteroids from 'asteroids';
import details from './details';

export default {
  childRoutes: [
    details, {
    path: '(list)',
    component: Asteroids
  }]
};
