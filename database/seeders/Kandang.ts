import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Kandang from 'App/Models/Kandang';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Kandang.createMany([
      {
        name: 'Kandang Ayam',
        password: 'admin',
        type:'open',
        status: true,
        address: 'ketintang',
        city: 'Surabaya',
         },
       {
        name: 'Niwatori',
        password: 'admin',
        type:'closed',
        status: true,
        address: 'Wonocolo',
        city: 'Surabaya',
         },
        {
        name: 'Best DOC',
        password: 'admin',
        type:'closed',
        status: false,
        address: 'Ohio',
        city: 'Sukabumi',
         },
         {
        name: 'Citadel Center',
        password: 'admin',
        type:'open',
        status: false,
        address: 'Maria Wall',
        city: 'Paradis',
         },
     ])
  }
}
