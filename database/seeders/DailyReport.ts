import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import DailyReport from 'App/Models/DailyReport'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await DailyReport.createMany([
      {
        reason: 'door error',
        id_kandang: 2,
        depletion: 100,
        feed_intake: 250,
        avg_bw: 10,
        date: DateTime.fromISO('2023-04-28T15:30:00.000Z'),
        updated_by: 1,
        created_by: 1,
      },
      {
        reason: 'door error',
        id_kandang: 1,
        depletion: 200,
        feed_intake: 20,
        avg_bw: 5,
        date: DateTime.fromISO('2023-04-28T15:30:00.000Z'),
        updated_by: 1,
        created_by: 1,
      },
      {
        reason: 'door error',
        id_kandang: 3,
        depletion: 80,
        feed_intake: 30,
        avg_bw: 8,
        date: DateTime.fromISO('2023-04-28T15:30:00.000Z'),
        updated_by: 1,
        created_by: 1,
      },
      {
        reason: 'door error',
        id_kandang: 2,
        depletion: 330,
        feed_intake: 180,
        avg_bw: 7,
        date: DateTime.fromISO('2023-04-28T15:30:00.000Z'),
        updated_by: 1,
        created_by: 1,
      },
    ])
  }
}
