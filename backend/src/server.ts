import express from 'express'
import {Express} from 'express-serve-static-core'
import routes from './routes/index.route';
import cors from 'cors';
import helmet from 'helmet';

export async function createServer(): Promise<Express> {
    const server = express()
    server.use(helmet());
    server.use(cors());
    server.use(express.json());
    server.use('/', routes);
    return server;
}