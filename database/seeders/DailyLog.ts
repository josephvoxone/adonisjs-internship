import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import DailyLog from 'App/Models/DailyLog';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await DailyLog.createMany([
      {
        id_user: 1,
        id_kandang: 2,
        id_mitra: 1,
        reason : 'Checking DOC'
         },
       {
        id_user: 2,
        id_kandang: 1,
        id_mitra: 4,
        reason : 'Solve stable placement error'
         },
        {
        id_user: 4,
        id_kandang: 2,
        id_mitra: 3,
        reason : 'Health Check'
         },
         {
        id_user: 3,
        id_kandang: 4,
        id_mitra: 4,
        reason : 'Depletion Control'
         },
     ])
  }}