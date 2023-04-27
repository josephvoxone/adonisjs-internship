import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Karyawan from 'App/Models/Karyawan';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Karyawan.createMany([
      {
        name: 'Allen Walker',
        password: 'admin',
        role: true,
        phone:'087771312756',
        gender: true,
        status: true,
         },
       {
        name: 'Alison Middleford',
        password: 'admin',
        role: true,
        phone:'084441312756',
        gender: true,
        status: true,
         },
       {
        name: 'Alhaitham',
        password: 'admin',
        role: true,
        phone:'083331312756',
        gender: true,
        status: true,
       },
       {
        name: 'Lu Guang',
        password: 'admin',
        role: true,
        phone:'089991312756',
        gender: true,
        status: true,
         },
     ])
  }
}
