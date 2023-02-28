import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DailyLog from 'App/Models/DailyLog'
import { DateTime } from 'luxon'

export default class DailyLogsController {
    /**
     * Menampilkan semua data dailylog
     */
    public async index({ response }: HttpContextContract) {
        const dailylog = await DailyLog.query().whereNull('deleted_at').orderBy('id', 'asc')
        return response.ok(dailylog)
    }

    /**
    
    Menampilkan detail dailylog berdasarkan ID
    */
    public async show({ params, response }: HttpContextContract) {
        const dailylog = await DailyLog.query().where('id', params.id).whereNull('deleted_at').firstOrFail()
        return response.ok(dailylog)
    }
    /**
    
    Membuat data dailylog baru
    */
    public async store({ request, response }: HttpContextContract) {
        const data = request.only(['login', 'logout', 'id_user', 'id_kandang', 'id_mitra', 'reason'])
        const dailylog = new DailyLog()
        dailylog.login = data.login
        dailylog.logout = data.logout
        dailylog.id_user = data.id_user
        dailylog.id_kandang = data.id_kandang
        dailylog.id_mitra = data.id_mitra
        dailylog.reason = data.reason
        await dailylog.save()

        return response.created(dailylog)
    }

    /**
    
    Mengupdate data dailylog berdasarkan ID
    */
    public async update({ params, request, response }: HttpContextContract) {
        const data = request.only(['login', 'logout', 'id_user', 'id_kandang', 'id_mitra', 'reason'])
        const dailylog = await DailyLog.findOrFail(params.id)
        dailylog.login = data.login
        dailylog.logout = data.logout
        dailylog.id_user = data.id_user
        dailylog.id_kandang = data.id_kandang
        dailylog.id_mitra = data.id_mitra
        dailylog.reason = data.reason
        await dailylog.save()

        return response.ok(dailylog)
    }

    /**
    
    Menghapus data dailylog berdasarkan ID (soft delete)
    */
    public async destroy({ params, response }: HttpContextContract) {
        const dailylog = await DailyLog.findOrFail(params.id)
        dailylog.deleted_at = DateTime.local()
        await dailylog.save()
        return response.noContent()
    }
}
