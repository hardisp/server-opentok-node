const OpenTok = require("opentok")
const opentok = new OpenTok(process.env.apiKey, process.env.apiSecret)

const getSession = () => {
  return new Promise((resolve, reject) => {
    opentok.createSession({ mediaMode: "routed" }, function(err, session) {
      console.log("Generate a valid session from opentok...")
      if (err) {
        reject(err)
      }
      resolve(session)
    })
  })
}

const getToken = sessionId => {
  return new Promise(resolve => {
    console.log("Get token...")

    resolve(opentok.generateToken(sessionId))
  })
}

const getClientCredential = async () => {
  const response = {
    apiKey: null,
    sessionId: null,
    token: null
  }
  try {
    const session = await getSession()
    // console.log(session)

    const token = await getToken(session.sessionId)

    response.apiKey = process.env.apiKey
    response.sessionId = session.sessionId
    response.token = token

    return response
  } catch (err) {
    console.log("Error Generate:", err.message)

    return response
  }
}

module.exports = getClientCredential
