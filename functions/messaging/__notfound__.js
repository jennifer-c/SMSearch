const lib = require('lib')({ token: process.env.STDLIB_TOKEN })
const send = require('../../helpers/send.js')

/**
* Not found handler - handles all SMS that don't match a command
*   (i.e. "more" = functions/messaging/more.js)
* @param {string} sender The phone number that sent the text to be handled
* @param {string} receiver The StdLib phone number that received the SMS
* @param {string} message The contents of the SMS
* @param {string} createdDatetime Datetime when the SMS was sent
* @returns {any}
*/
var async = require("async");
var waAnswer = "5";
module.exports = async (sender = '', receiver = '', message = '', createdDatetime = '', context) => {
  const WolframAlphaAPI = require('wolfram-alpha-api');
  const waApi = WolframAlphaAPI('LK9TLV-2JWH4EJ7WL');
  const formatAnswer = answer => `${answer}`;
  waAnswer = await waApi.getShort(message);
  return send(
    receiver,
    sender,
    waAnswer
  )
}
