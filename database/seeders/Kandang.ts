import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Kandang from 'App/Models/Kandang';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Kandang.createMany([
      {
        name: 'Kandang Ayam',
        type:'terbuka',
        status: true,
        address: 'ketintang',
        city: 'Surabaya',
         },
       {
        name: 'Niwatori',
        type:'tertutup',
        status: true,
        address: 'Wonocolo',
        city: 'Surabaya',
         },
        {
        name: 'Best DOC',
        type:'tertutup',
        status: false,
        address: 'Ohio',
        city: 'Sukabumi',
         },
         {
        name: 'Citadel Center',
        type:'terbuka',
        status: false,
        address: 'Maria Wall',
        city: 'Paradis',
         },
     ])
  }
}
