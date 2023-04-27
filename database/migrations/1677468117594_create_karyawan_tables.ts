import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'karyawans'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).notNullable()
      table.string('password', 255).notNullable()
      table.boolean('role').notNullable()
      table.string('phone', 255).notNullable()
      table.boolean('gender').notNullable()
      table.boolean('status').notNullable()
      table.dateTime('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.dateTime('updated_at', { useTz: true })
      table.dateTime('deleted_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
