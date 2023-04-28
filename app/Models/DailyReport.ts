import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DailyReport extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_kandang: number

  @column()
  public reason: string

  @column()
  public depletion: number

  @column()
  public feed_intake: number

  @column()
  public avg_bw: number

  @column()
  public created_by: number

  @column()
  public updated_by: number

  @column()
  public date: DateTime

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @column.dateTime({ serializeAs: null })
  public deleted_at: DateTime
}
