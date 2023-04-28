import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DailyReport from 'App/Models/DailyReport'
import { DateTime } from 'luxon'

export default class DailyReportsController {
    /**
     * Menampilkan semua data dailyreport
     */
    public async index({ response }: HttpContextContract) {
        const dailyreport = await DailyReport.query().whereNull('deleted_at').orderBy('id', 'desc')
        return response.ok(dailyreport)
    }

    /**
    
    Menampilkan detail dailyreport berdasarkan ID
    */
    public async show({ params, response }: HttpContextContract) {
        const dailyreport = await DailyReport.query().where('id', params.id).whereNull('deleted_at').firstOrFail()
        return response.ok(dailyreport)
    }
    /**
    
    Membuat data dailyreport baru
    */
    public async store({ request, response }: HttpContextContract) {
        const data = request.only(['depletion', 'time', 'reason', 'feed_intake', 'avg_bw', 'id_kandang', 'create_by', 'update_by'])
        const dailyreport = new DailyReport()
        dailyreport.depletion = data.depletion
        dailyreport.time = data.time
        dailyreport.id_kandang = data.id_kandang
        dailyreport.reason = data.reason
        dailyreport.feed_intake = data.feed_intake
        dailyreport.avg_bw = data.avg_bw
        dailyreport.create_by = data.create_by
        dailyreport.update_by = data.update_by
        await dailyreport.save()

        return response.created(dailyreport)
    }

    /**
    
    Mengupdate data dailyreport berdasarkan ID
    */
    public async update({ params, request, response }: HttpContextContract) {
        const data = request.only(['depletion', 'time', 'reason', 'feed_intake', 'avg_bw', 'id_kandang', 'create_by', 'update_by'])
        const dailyreport = await DailyReport.findOrFail(params.id)
        dailyreport.reason = data.reason
        dailyreport.time = data.time
        dailyreport.depletion = data.depletion
        dailyreport.id_kandang = data.id_kandang
        dailyreport.feed_intake = data.feed_intake
        dailyreport.avg_bw = data.avg_bw
        dailyreport.create_by = data.create_by
        dailyreport.update_by = data.update_by
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
