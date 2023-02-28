import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DailyLog extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public login: DateTime

  @column()
  public logout: DateTime

  @column()
  public id_user: number

  @column()
  public id_kandang: number

  @column()
  public id_mitra: number

  @column()
  public reason: string

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @column.dateTime({ serializeAs: null })
  public deleted_at: DateTime
}
