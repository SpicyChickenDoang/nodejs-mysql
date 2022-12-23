const redis = require('redis')
const client = redis.createClient()

const AUTH_TOKEN = 'AUTH_TOKEN'

client.on('error', (err) => console.log('Is Redis Client Error', err))
client.on('connect', () => console.log('Is Redis Client Connect'))

exports.setUserToken = async (email, token) => {
    
    const userEmail = email
    const userToken = token
    try {
        await client.connect()
        await client.HSET(AUTH_TOKEN, userEmail, userToken)
        // let reply = await client.HGETALL(AUTH_TOKEN, userEmail)
        // console.log(reply);
    } catch (error) {
        console.log(error.message);
    }

    await client.disconnect()


}

exports.deleteUserToken = async (userEmail) => {

    try {
        await client.connect()
        const reply = await client.HDEL(AUTH_TOKEN, userEmail)
        console.log(reply)


    } catch (error) {
        console.log(error.message);
    }

    await client.disconnect()

}