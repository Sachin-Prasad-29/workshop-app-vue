import Router from 'vue-router';
import AppHome from '../components/AppHome';
import WorkShopsList from '../components/WorkShopsList';
import WorkShopsDetails from '../components/WorkShopsDetails';

// EXERCISE: Set up a component WorkshopDetails that appears on /workshops/1

const router = new Router({
    mode: 'history',
    routes:[
        {
           name:'home',
           path: '/',
           component:AppHome 
        },
        {
            name: 'workshops-list',
            path: '/workshops',
            component: WorkShopsList
        },
        {
            name: 'workshops-details',
            path: '/workshops/1',
            component: WorkShopsDetails
        }

    ]
});

export default router;