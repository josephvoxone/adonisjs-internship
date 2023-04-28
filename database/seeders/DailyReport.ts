import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import DailyReport from 'App/Models/DailyReport';

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await DailyReport.createMany([
      {
        reason: "mass depletion",
        time: 3/28/2023,
        id_kandang: 2,
        depletion: 100,
        feed_intake: 250,
        avg_bw: 10,
        create_by: 2,
        update_by: 2
      },
      {
        reason: "door error",
        time: 4/09/2023,
        id_kandang: 1,
        depletion: 200,
        feed_intake: 20,
        avg_bw: 5,
        create_by: 1,
        update_by: 3
      },
      {
        reason: "post-pandemic care",
        time: 4/12/2023,
        id_kandang: 3,
        depletion: 80,
        feed_intake: 30,
        avg_bw: 8,
        create_by: 3,
        update_by: 4
      },
      {
        reason: "Cannibalism amongs chickens",
        time: 4/23/2023,
        id_kandang: 2,
        depletion: 330,
        feed_intake: 180,
        avg_bw: 7,
        create_by: 4,
        update_by: 1
      },
    ])
  }
}
