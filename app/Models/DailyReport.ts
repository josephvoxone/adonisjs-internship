import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DailyReport extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public depletion: string

  @column()
  public feed_intake: number

  @column()
  public avg_bw: number

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @column.dateTime({ serializeAs: null })
  public deleted_at: DateTime
}
