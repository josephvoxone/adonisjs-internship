import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import DailyReport from 'App/Models/DailyReport';

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await DailyReport.createMany([
      {
        reason: "door error",
        depletion: 100,
        feed_intake: 250,
        avg_bw: 10,
      },
      {
        reason: "door error",
        depletion: 200,
        feed_intake: 20,
        avg_bw: 5,
      },
      {
        reason: "door error",
        depletion: 80,
        feed_intake: 30,
        avg_bw: 8,
      },
      {
        reason: "door error",
        depletion: 330,
        feed_intake: 180,
        avg_bw: 7,
      },
    ])
  }
}
