import Router from 'vue-router';
import AppHome from '../components/AppHome';
import WorkshopsList from '../components/WorkshopsList';
import WorkshopDetails from '../components/WorkshopDetails';
import SessionsList from '../components/SessionsList';
import AddSession from '../components/AddSession';

// EXERCISE: Set up a component WorkshopDetails that appears on /workshops/1
const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: AppHome,
    },
    {
      name: 'workshops-list',
      path: '/workshops',
      component: WorkshopsList,
    },
    {
      name: 'workshop-details',
      path: '/workshops/:id',
      component: WorkshopDetails,
      children: [
        {
          name: 'sessions-list',
          path: '', // whatever comes after parent route (here nothing)
          component: SessionsList,
        },
        {
          name: 'add-session',
          path: 'add', // whatever comes after parent route (here nothing)
          component: AddSession,
        },
      ],
    },
  ],
});

export default router;
