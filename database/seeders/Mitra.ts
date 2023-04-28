import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Mitra from 'App/Models/Mitra';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Mitra.createMany([
      {
        name: 'Lenalee Lee',
        phone:'087771312756',
        address: 'Ketintang',
        city: 'Surabaya',
         },
       {
        name: 'Joe Biden',
        phone:'087771312756',
        address: 'Wonocolo',
        city: 'Surabaya',
         },
        {
        name: 'Sam Smith',
        phone:'087771312756',
        address: 'Ohio',
        city: 'Sukabumi',
         },
         {
        name: 'Eren Yeager',
        phone:'087771312756',
        address: 'Maria Wall',
        city: 'Isekai',
         },
     ])
  }
}
