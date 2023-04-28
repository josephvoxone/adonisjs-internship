import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Karyawan extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public role: string

  @column()
  public phone: string

  @column()
  public gender: number

  @column()
  public status: boolean

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @column.dateTime({ serializeAs: null })
  public deleted_at: DateTime

  // Metode untuk menghapus password dari data pengguna
  public toJSON() {
    const { password, deleted_at, ...attributes } = this.$attributes
    return attributes
  }
}
