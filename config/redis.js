const redis = require('redis')


// const host = process.env.REDIS_HOST || "locahost"

const redisClient = redis.createClient();

const connectToRedis = async() =>{
    try{
     await redisClient.connect();
     console.log('connected to Redis');

    }catch(err){
       console.error(err.message);
       process.exit(1);
    }
}

module.exports = {connectToRedis, redisClient};