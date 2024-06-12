import type { HttpContext } from '@adonisjs/core/http'
import Event from '#models/event'
export default class EventsController {
    async allEvents(ctx: HttpContext) {

        const events = await Event.all()
        return ctx.view.render('events/all', {
            "events": events
        })
    }
}





