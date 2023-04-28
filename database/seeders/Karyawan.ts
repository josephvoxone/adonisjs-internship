import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Karyawan from 'App/Models/Karyawan';
import Hash from '@ioc:Adonis/Core/Hash'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    const password = await Hash.make('secret')

    const names = [
      'Joseph', 'Farraz', 'Andara', 'Dedi', 'Eka', 'Fauzi', 'Gita', 'Hendra',
      'Indra', 'Joko', 'Kusuma', 'Lina', 'Mega', 'Nia', 'Oscar', 'Putra',
      'Rina', 'Sari', 'Tina', 'Umar', 'Vina', 'Wawan', 'Xander', 'Yani', 'Zaki'
    ]

    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'mail.com']

    await Promise.all(names.map(async (name) => {
      const email = `${name.toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`
      const phone = `+628${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}`
      const gender = Math.random() >= 0.5 ? 1 : 0
      const status = Math.random() >= 0.5 ? true : false

      await Karyawan
        .create({
          email,
          password,
          name,
          role: 'ppl',
          phone,
          gender,
          status,
        })
    }))


  }
}
