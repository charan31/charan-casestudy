import express from 'express'
import Parser from 'body-parser'
import boom from 'express-boom'


import { Log, LogMiddleware } from './services'

const app = express()

app.use(Parser.json({ limit: '50mb' }))

app.use(Parser.urlencoded({ limit: '50mb',
  extended: true }))
app.use(boom())
app.use(LogMiddleware)


app.use((req, res, next) => {
  res.set('Content-Type', 'application/json')
  next()
})

const port = 8000;

let server = app.listen(port, () => {
    Log.info('Server started')
    console.log('server started listening on ' + port);
  });



// Add The Routes
require('./routes')(app)


export default app
