import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Kandang extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public password: string

  @column()
  public type: string

  @column()
  public status: boolean

  @column()
  public address: string

  @column()
  public city: string

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @column.dateTime({ serializeAs: null })
  public deleted_at: DateTime
}
