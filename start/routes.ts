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
