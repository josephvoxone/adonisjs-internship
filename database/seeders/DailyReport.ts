import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import DailyReport from 'App/Models/DailyReport';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await DailyReport.createMany([
      {
        id_kandang: 2,
        depletion: 100,
        feed_intake: 250,
        avg_bw: 10,
         },
       {
        id_kandang: 4,
        depletion: 200,
        feed_intake: 20,
        avg_bw: 5,
         },
        {
        id_kandang: 3,
        depletion: 80,
        feed_intake: 30,
        avg_bw: 8,
         },
         {
        id_kandang: 4,
        depletion: 330,
        feed_intake: 180,
        avg_bw: 7,
         },
     ])
  }
}
