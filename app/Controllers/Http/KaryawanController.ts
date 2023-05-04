import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DateTime } from 'luxon'
import Karyawan from 'App/Models/Karyawan'
export default class KaryawanController {
  /**
   * Menampilkan semua data karyawan
   */
  public async index({ response }: HttpContextContract) {
    const karyawan = await Karyawan.query().whereNull('deleted_at').orderBy('id', 'desc')
    return response.ok(karyawan)
  }

  /**
    
    Menampilkan detail karyawan berdasarkan ID
    */
  public async show({ params, response }: HttpContextContract) {
    const karyawan = await Karyawan.query()
      .where('id', params.id)
      .whereNull('deleted_at')
      .firstOrFail()
    return response.ok(karyawan)
  }
  /**
    
    Membuat data karyawan baru
    */
  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email', 'role', 'phone', 'gender', 'status', 'password'])
    const karyawan = new Karyawan()
    karyawan.name = data.name
    karyawan.email = data.email
    karyawan.password = data.password
    karyawan.role = data.role
    karyawan.phone = data.phone
    karyawan.gender = data.gender
    karyawan.status = data.status
    await karyawan.save()

    return response.created(karyawan)
  }

  /**
    
    Mengupdate data karyawan berdasarkan ID
    */
  public async update({ params, request, response }: HttpContextContract) {
    const data = request.only(['name', 'email', 'role', 'phone', 'gender', 'status', 'password'])
    const karyawan = await Karyawan.findOrFail(params.id)
    karyawan.name = data.name
    karyawan.email = data.email
    karyawan.password = data.password
    karyawan.role = data.role
    karyawan.phone = data.phone
    karyawan.gender = data.gender
    karyawan.status = data.status
    await karyawan.save()

    return response.ok(karyawan)
  }

  /**
    
    Menghapus data karyawan berdasarkan ID (soft delete)
    */
  public async destroy({ params, response }: HttpContextContract) {
    const karyawan = await Karyawan.findOrFail(params.id)
    karyawan.deleted_at = DateTime.local()
    await karyawan.save()
    return response.noContent()
  }
}
