import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sapronak from 'App/Models/Sapronak'
import { DateTime } from 'luxon'

export default class SapronaksController {
    /**
     * Menampilkan semua data sapronak
     */
    public async index({ response }: HttpContextContract) {
        const sapronak = await Sapronak.query().whereNull('deleted_at').orderBy('id', 'desc')
        return response.ok(sapronak)
    }

    /**
    
    Menampilkan detail sapronak berdasarkan ID
    */
    public async show({ params, response }: HttpContextContract) {
        const sapronak = await Sapronak.query().where('id', params.id).whereNull('deleted_at').firstOrFail()
        return response.ok(sapronak)
    }
    /**
    
    Membuat data sapronak baru
    */
    public async store({ request, response }: HttpContextContract) {
        const data = request.only(['name', 'date_in', 'date_out', 'type', 'amount', 'amount_type', 'status'])
        const sapronak = new Sapronak()
        sapronak.name = data.name
        sapronak.date_in = data.date_in
        sapronak.date_out = data.date_out
        sapronak.type = data.type
        sapronak.amount = data.amount
        sapronak.amount_type = data.amount_type
        sapronak.status = data.status
        await sapronak.save()

        return response.created(sapronak)
    }

    /**
    
    Mengupdate data sapronak berdasarkan ID
    */
    public async update({ params, request, response }: HttpContextContract) {
        const data = request.only(['name', 'date_in', 'date_out', 'type', 'amount', 'amount_type', 'status'])
        const sapronak = await Sapronak.findOrFail(params.id)
        sapronak.name = data.name
        sapronak.date_in = data.date_in
        sapronak.date_out = data.date_out
        sapronak.type = data.type
        sapronak.amount = data.amount
        sapronak.amount_type = data.amount_type
        sapronak.status = data.status
        await sapronak.save()

        return response.ok(sapronak)
    }

    /**
    
    Menghapus data sapronak berdasarkan ID (soft delete)
    */
    public async destroy({ params, response }: HttpContextContract) {
        const sapronak = await Sapronak.findOrFail(params.id)
        sapronak.deleted_at = DateTime.local()
        await sapronak.save()
        return response.noContent()
    }
}
