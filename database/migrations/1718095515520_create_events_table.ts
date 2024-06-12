import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.string('description')
      table.dateTime('startAt')
      table.dateTime('endAt')
      table.string('address')
      table.string('city')
      table.string('country')
      table.boolean('online')
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at')
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}