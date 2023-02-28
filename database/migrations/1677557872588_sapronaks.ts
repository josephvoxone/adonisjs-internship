import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sapronaks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).notNullable()
      table.timestamp('date_in', { useTz: true })
      table.timestamp('date_out', { useTz: true })
      table.string('type', 255).notNullable()
      table.integer('amount', 255).notNullable()
      table.string('amount_type', 255).notNullable()
      table.string('status', 255).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.dateTime('deleted_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
