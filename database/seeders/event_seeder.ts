import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { EventFactory } from '#database/factories/event_factory'
export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await EventFactory.createMany(10)  }
}