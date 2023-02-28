import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'daily_logs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.timestamp('login', { useTz: true })
      table.timestamp('logout', { useTz: true })
      table.integer('id_user', 255).notNullable()
      table.integer('id_kandang', 255).notNullable()
      table.integer('id_mitra', 255).notNullable()
      table.string('reason', 255).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.dateTime('deleted_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
