import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Karyawan from './Karyawan'
import Kandang from './Kandang'

export default class DailyReport extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public time: string

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

  @belongsTo(() => Karyawan, { foreignKey: 'created_by' })
  public user_created: BelongsTo<typeof Karyawan>;

  @belongsTo(() => Karyawan, { foreignKey: 'updated_by' })
  public user_updated: BelongsTo<typeof Karyawan>;

  @belongsTo(() => Kandang, { foreignKey: 'id_kandang' })
  public kandang: BelongsTo<typeof Kandang>;

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @column.dateTime({ serializeAs: null })
  public deleted_at: DateTime
}
