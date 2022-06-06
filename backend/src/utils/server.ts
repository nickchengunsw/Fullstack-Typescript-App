import express from 'express'
import {Express} from 'express-serve-static-core'
import orders from '../routes/orders.route';
export async function createServer(): Promise<Express> {
  const server = express()
  server.get('/', (req, res) => {
    res.send('Hello world!!!')
  })

  server.use('/', orders);
  return server
}