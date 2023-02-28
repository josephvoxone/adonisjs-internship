import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mitra from 'App/Models/Mitra'
import { DateTime } from 'luxon'

export default class MitraController {
    /**
     * Menampilkan semua data mitra
     */
    public async index({ response }: HttpContextContract) {
        const mitra = await Mitra.query().whereNull('deleted_at').orderBy('id', 'asc')
        return response.ok(mitra)
    }

    /**
    
    Menampilkan detail mitra berdasarkan ID
    */
    public async show({ params, response }: HttpContextContract) {
        const mitra = await Mitra.query().where('id', params.id).whereNull('deleted_at').firstOrFail()
        return response.ok(mitra)
    }
    /**
    
    Membuat data mitra baru
    */
    public async store({ request, response }: HttpContextContract) {
        const data = request.only(['name', 'phone', 'address', 'city'])
        const mitra = new Mitra()
        mitra.name = data.name
        mitra.phone = data.phone
        mitra.address = data.address
        mitra.city = data.city
        await mitra.save()

        return response.created(mitra)
    }

    /**
    
    Mengupdate data karyawan berdasarkan ID
    */
    public async update({ params, request, response }: HttpContextContract) {
        const data = request.only(['name', 'phone', 'address', 'city'])
        const mitra = await Mitra.findOrFail(params.id)
        mitra.name = data.name
        mitra.phone = data.phone
        mitra.address = data.address
        mitra.city = data.city
        await mitra.save()

        return response.ok(mitra)
    }

    /**
    
    Menghapus data mitra berdasarkan ID (soft delete)
    */
    public async destroy({ params, response }: HttpContextContract) {
        const mitra = await Mitra.findOrFail(params.id)
        mitra.deleted_at = DateTime.local()
        await mitra.save()
        return response.noContent()
    }
}
