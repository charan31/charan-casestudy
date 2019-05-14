import Request from 'request'
import Boom from 'boom'
import { Log } from '../services/log'
// Wraps the request module in promise
// @public
// @param {string} uri - The absolute URI
// @param {string} method - The http method
// @param {object} json - The payload
// @return {Promise} - returns promise
export default async (uri, method, json = {}) => {
  const headers = { 'content-type': 'application/json' }
  try {
    return new Promise((resolve, reject) => {
      return Request({
        uri,
        method,
        headers,
        json
      }, (err, response, body) => {
        Log.info('Request --> body', body)
        Log.error('Request --> error', err)
        Log.info('Request --> response', response)
        if (err) {
          Log.error('Error in Request --> error', err)
                   
          return reject(Boom.wrap(err, 500))
        }
        const { statusCode } = response
        if (statusCode && statusCode >= 200 && statusCode < 300) {
          return resolve(body)
        }
      })
    })
  } catch (error) {
    Log.error(`ERROR while executing ${uri} : ${error}`);
  }
}
