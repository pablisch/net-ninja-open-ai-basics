// WARNING: This code is old and ONLY works with the old OpenAI API.
// This works with "openai": "^3.2.1" but not with the current at time of writing "openai": "^4.4.0"
// Using "openai": "^4.4.0" will result in the following error:

// /Users/pablojoyce/projects/openai-test-app/config/openaiConfig.js:4
// const configuration = new Configuration({
//                       ^

// TypeError: Configuration is not a constructor
//     at Object.<anonymous> (/Users/pablojoyce/projects/openai-test-app/config/openaiConfig.js:4:23)
//     at Module._compile (node:internal/modules/cjs/loader:1257:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//     at Module.load (node:internal/modules/cjs/loader:1115:32)
//     at Module._load (node:internal/modules/cjs/loader:962:12)
//     at Module.require (node:internal/modules/cjs/loader:1139:19)
//     at require (node:internal/modules/helpers:121:18)
//     at Object.<anonymous> (/Users/pablojoyce/projects/openai-test-app/controllers/openaiController.js:1:16)
//     at Module._compile (node:internal/modules/cjs/loader:1257:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)

// Node.js v20.3.1

// NOTE: openaiConfig.js:4 refers to line 28 in this file.

const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
})

const openai = new OpenAIApi(configuration)

module.exports = openai