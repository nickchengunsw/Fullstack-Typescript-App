import {createServer} from './server'

const app = createServer().then(server => {
    server.listen(3000, () => {
        console.info(`Listening on http://localhost:3000`)
    })
})
    .catch(err => {
        console.error(`Error: ${err}`)
    })

export default app;