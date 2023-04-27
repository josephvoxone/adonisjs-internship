import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Kandang from 'App/Models/Kandang'
import { DateTime } from 'luxon'

export default class KandangsController {
    /**
     * Menampilkan semua data kandang
     */
    public async index({ response }: HttpContextContract) {
        const kandang = await Kandang.query().whereNull('deleted_at').orderBy('id', 'desc')
        return response.ok(kandang)
    }

    /**
    
    Menampilkan detail kandang berdasarkan ID
    */
    public async show({ params, response }: HttpContextContract) {
        const kandang = await Kandang.query().where('id', params.id).whereNull('deleted_at').firstOrFail()
        return response.ok(kandang)
    }
    /**
    
    Membuat data kandang baru
    */
    public async store({ request, response }: HttpContextContract) {
        const data = request.only(['name', 'type', 'status', 'address', 'city'])
        const kandang = new Kandang()
        kandang.name = data.name
        kandang.type = data.type
        kandang.status = data.status
        kandang.address = data.address
        kandang.city = data.city
        await kandang.save()

        return response.created(kandang)
    }

    /**
    
    Mengupdate data kandang berdasarkan ID
    */
    public async update({ params, request, response }: HttpContextContract) {
        const data = request.only(['name', 'type', 'status', 'address', 'city'])
        const kandang = await Kandang.findOrFail(params.id)
        kandang.name = data.name
        kandang.type = data.type
        kandang.status = data.status
        kandang.address = data.address
        kandang.city = data.city
        await kandang.save()

        return response.ok(kandang)
    }

    /**
    
    Menghapus data kandang berdasarkan ID (soft delete)
    */
    public async destroy({ params, response }: HttpContextContract) {
        const kandang = await Kandang.findOrFail(params.id)
        kandang.deleted_at = DateTime.local()
        await kandang.save()
        return response.noContent()
    }
}
