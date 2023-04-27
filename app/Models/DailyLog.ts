import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo} from '@ioc:Adonis/Lucid/Orm'
import Karyawan from 'App/Models/Karyawan';
import Kandang from 'App/Models/Kandang';
import Mitra from 'App/Models/Mitra';

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

  @belongsTo(() => Karyawan, { foreignKey: 'id_user' })
  public user: BelongsTo<typeof Karyawan>;

  @belongsTo(() => Kandang, { foreignKey: 'id_kandang' })
  public kandang: BelongsTo<typeof Kandang>;

  @belongsTo(() => Mitra, { foreignKey: 'id_mitra' })
  public mitra: BelongsTo<typeof Mitra>;
  
  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @column.dateTime({ serializeAs: null })
  public deleted_at: DateTime
}
