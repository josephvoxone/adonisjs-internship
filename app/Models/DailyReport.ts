import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DailyReport extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public time: number

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
  public create_by: number

  @column()
  public update_by: number

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @column.dateTime({ serializeAs: null })
  public deleted_at: DateTime
}
