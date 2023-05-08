import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DailyReport from 'App/Models/DailyReport'
import { DateTime } from 'luxon'

export default class DailyReportsController {
  /**
   * Menampilkan semua data dailyreport
   */
  public async index({ response }: HttpContextContract) {
    const dailyreport = await DailyReport.query()
      .preload('user_created')
      .preload('user_updated')
      .preload('kandang')
      .whereNull('deleted_at')
      .orderBy('id', 'desc')
    return response.ok(dailyreport)
  }

  /**
    Menampilkan detail dailyreport berdasarkan ID
    */
  public async show({ params, response }: HttpContextContract) {
    const dailyreport = await DailyReport.query()
      .where('id', params.id)
      .preload('user_created')
      .preload('user_updated')
      .preload('kandang')
      .whereNull('deleted_at')
      .firstOrFail()
    return response.ok(dailyreport)
  }

  /**
    Menampilkan detail dailyreport berdasarkan ID
    */
  public async indexByKandang({ params, response }: HttpContextContract) {
    console.log('indexByKandang', params)
    const dailyreport = await DailyReport.query()
      .where('id_kandang', params.id)
      .preload('user_created')
      .preload('user_updated')
      .preload('kandang')
      .whereNull('deleted_at')
    return response.ok(dailyreport)
  }
  /**
     * 
    Menampilkan stats dailyreport berdasarkan ID
    */
  public async stats({ params, response }: HttpContextContract) {
    const today = DateTime.local().plus({ days: 1 }).setZone('Asia/Jakarta').toISODate()
    const threeDaysAgo = DateTime.local().minus({ days: 30 }).setZone('Asia/Jakarta').toISODate()

    const dailyReports = await DailyReport.query()
      .whereBetween('date', [threeDaysAgo, today])
      .where('id_kandang', params.id)
      .whereNull('deleted_at')
      .orderBy('date', 'desc')
      .limit(30)

    const data: any = {
      'Deplesi': [],
      'Feed Intake': [],
      'Avg. BW': [],
    }

    dailyReports.forEach((report: any) => {
      data['Deplesi'].push([report.date, report.depletion])
      data['Feed Intake'].push([report.date, report.feed_intake])
      data['Avg. BW'].push([report.date, report.avg_bw])
    })

    const chartData = Object.keys(data).map((key) => {
      return {
        name: key,
        data: data[key],
      }
    })

    return response.ok(chartData)
  }

  /**
    
    Membuat data dailyreport baru
    */
  public async store({ request, response }: HttpContextContract) {
    const data = request.only([
      'depletion',
      'reason',
      'feed_intake',
      'avg_bw',
      'id_kandang',
      'date',
    ])
    const identifier: any = request.header('Identifier')
    const dailyreport = new DailyReport()
    dailyreport.date = data.date
    dailyreport.depletion = data.depletion
    dailyreport.id_kandang = data.id_kandang
    dailyreport.reason = data.reason
    dailyreport.feed_intake = data.feed_intake
    dailyreport.avg_bw = data.avg_bw
    dailyreport.updated_by = identifier
    dailyreport.created_by = identifier
    await dailyreport.save()

    return response.created(dailyreport)
  }

  /**
    
    Mengupdate data dailyreport berdasarkan ID
    */
  public async update({ params, request, response }: HttpContextContract) {
    const data = request.only([
      'depletion',
      'date',
      'reason',
      'feed_intake',
      'avg_bw',
      'id_kandang',
      'create_by',
      'update_by',
    ])
    const dailyreport = await DailyReport.findOrFail(params.id)
    const identifier: any = request.header('Identifier')
    dailyreport.reason = data.reason
    dailyreport.date = data.date
    dailyreport.depletion = data.depletion
    dailyreport.id_kandang = data.id_kandang
    dailyreport.feed_intake = data.feed_intake
    dailyreport.avg_bw = data.avg_bw
    dailyreport.created_by = identifier
    await dailyreport.save()

    return response.ok(dailyreport)
  }

  /**
    
    Menghapus data dailyreport berdasarkan ID (soft delete)
    */
  public async destroy({ params, response }: HttpContextContract) {
    const dailyreport = await DailyReport.findOrFail(params.id)
    dailyreport.deleted_at = DateTime.local()
    await dailyreport.save()
    return response.noContent()
  }
}
