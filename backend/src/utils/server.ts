import express from 'express'
import {Express} from 'express-serve-static-core'
import routes from '../routes/index.route';
export async function createServer(): Promise<Express> {
    const server = express()
    server.use('/', routes);
    return server;
}