/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

// API Karyawan
// Route.group(() => {
// Menampilkan semua data karyawan
Route.get('/karyawan', 'KaryawanController.index')

// Menampilkan detail data karyawan berdasarkan ID
Route.get('/karyawan/:id', 'KaryawanController.show')

// Menambahkan data karyawan baru
Route.post('/karyawan', 'KaryawanController.store')

// Mengupdate data karyawan berdasarkan ID
Route.put('/karyawan/:id', 'KaryawanController.update')

// Menghapus data karyawan berdasarkan ID (soft delete)
Route.delete('/karyawan/:id', 'KaryawanController.destroy')
// }).middleware('auth')

// API Mitra
// Route.group(() => {
// Menampilkan semua data mitra
Route.get('/mitra', 'MitraController.index')

// Menampilkan detail data mitra berdasarkan ID
Route.get('/mitra/:id', 'MitraController.show')

// Menambahkan data mitra baru
Route.post('/mitra', 'MitraController.store')

// Mengupdate data mitra berdasarkan ID
Route.put('/mitra/:id', 'MitraController.update')

// Menghapus data mitra berdasarkan ID (soft delete)
Route.delete('/mitra/:id', 'MitraController.destroy')
// }).middleware('auth')

// API Kandang
// Route.group(() => {
// Menampilkan semua data kandang
Route.get('/kandang', 'KandangsController.index')

// Menampilkan detail data kandang berdasarkan ID
Route.get('/kandang/:id', 'KandangCsontroller.show')

// Menambahkan data kandang baru
Route.post('/kandang', 'KandangsController.store')

// Mengupdate data kandang berdasarkan ID
Route.put('/kandang/:id', 'KandangsController.update')

// Menghapus data kandang berdasarkan ID (soft delete)
Route.delete('/kandang/:id', 'KandangsController.destroy')
// }).middleware('auth')

// API Daily_Report
// Route.group(() => {
// Menampilkan semua data daily_report
Route.get('/daily_report', 'DailyReportsController.index')

// Menampilkan detail data daily_report berdasarkan ID
Route.get('/daily_report/:id', 'DailyReportsController.show')

// Menambahkan data daily_report baru
Route.post('/daily_report', 'DailyReportsController.store')

// Mengupdate data daily_report berdasarkan ID
Route.put('/daily_report/:id', 'DailyReportsController.update')

// Menghapus data daily_report berdasarkan ID (soft delete)
Route.delete('/daily_report/:id', 'DailyReportsController.destroy')
// }).middleware('auth')

// API Sapronak
// Route.group(() => {
// Menampilkan semua data sapronak
Route.get('/sapronak', 'SapronaksController.index')

// Menampilkan detail data sapronak berdasarkan ID
Route.get('/sapronak/:id', 'SapronaksController.show')

// Menambahkan data sapronak baru
Route.post('/sapronak', 'SapronaksController.store')

// Mengupdate data sapronak berdasarkan ID
Route.put('/sapronak/:id', 'SapronaksController.update')

// Menghapus data sapronak berdasarkan ID (soft delete)
Route.delete('/sapronak/:id', 'SapronaksController.destroy')
// }).middleware('auth')

// API Daily_Log
// Route.group(() => {
// Menampilkan semua data daily_log
Route.get('/daily_log', 'DailyLogsController.index')

// Menampilkan detail data daily_log berdasarkan ID
Route.get('/daily_log/:id', 'DailyLogsController.show')

// Menambahkan data daily_log baru
Route.post('/daily_log', 'DailyLogsController.store')

// Mengupdate data daily_log berdasarkan ID
Route.put('/daily_log/:id', 'DailyLogsController.update')

// Menghapus data daily_log berdasarkan ID (soft delete)
Route.delete('/daily_log/:id', 'DailyLogsController.destroy')
// }).middleware('auth')
