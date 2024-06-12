/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'


const EventController = () => import('#controllers/events_controller')




router.on('/').render('pages/home').as('homepage')
router.get('/events', [EventController, 'allEvents']).as ('events')
router.on('/contact').render('pages/contact').as('contact')

