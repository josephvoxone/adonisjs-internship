import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sapronak from 'App/Models/Sapronak';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Sapronak.createMany([
      {
        name: 'contoh',
        type: 'contoh',
        amount: 10,
        amount_type: 'contoh',
        status: 'contoh',
         },
       {
        name: 'contoh',
        type: 'contoh',
        amount: 10,
        amount_type: 'contoh',
        status: 'contoh',
         },
        {
        name: 'contoh',
        type: 'contoh',
        amount: 10,
        amount_type: 'contoh',
        status: 'contoh',
         },
         {
        name: 'contoh',
        type: 'contoh',
        amount: 10,
        amount_type: 'contoh',
        status: 'contoh',
         },
     ])
  }
}
