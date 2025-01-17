import factory from '@adonisjs/lucid/factories'
import Event from '#models/event'


export const EventFactory = factory
  .define(Event, async ({ faker }) => {
    return {
      title: faker.lorem.words(4),
      description: faker.lorem.paragraph(),
      startAt: faker.date.future(),
      endAt: faker.date.future(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      country: faker.location.country(),
      online: faker.datatype.boolean(0.5),
      user_id:faker.number.int({
        min:1,
        max:10,
      }),
    }
  })
  .build()