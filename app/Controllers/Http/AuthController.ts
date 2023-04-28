import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Karyawan from 'App/Models/Karyawan'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  /**
   * Login karyawan
   */
  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])
    // Mencari user berdasarkan email
    const user = await Karyawan.query().where('email', email).whereNull('deleted_at').first()
    // Jika user tidak ditemukan
    if (!user) {
      return response.status(401).json({ message: 'Invalid email or password' })
    }

    // Membandingkan password yang dimasukkan dengan password yang tersimpan dalam database
    const passwordVerified = await Hash.verify(user.password, password)

    // Jika password tidak cocok
    if (!passwordVerified) {
      return response.status(401).json({ message: 'Invalid email or password' })
    }

    // Membuat token JWT
    const token = await auth.use('jwt').generate(user)

    return response.json({ token })
  }

  public async me({ auth, response }: HttpContextContract) {
    return response.json(auth.user)
  }
}
