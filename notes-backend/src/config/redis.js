// const { createClient } = require("redis");

// const redisClient = createClient({
//   password: process.env.REDIS_PASS,
//   socket: {
//     host: process.env.REDIS_HOST,
//     port: process.env.REDIS_PORT
//   }
// });

// module.exports = redisClient;



// const redis = require("redis");

// const redisClient = redis.createClient({
//   socket: {
//     host: process.env.REDIS_HOST,
//     port: Number(process.env.REDIS_PORT),
//     tls: true, // 🔥 REQUIRED for Redis Cloud
//   },
//   password: process.env.REDIS_PASS,
// });

// redisClient.on("error", (err) => {
//   console.error("❌ Redis Error:", err.message);
// });

// module.exports = redisClient;






const redis = require("redis");

const redisClient = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    tls: {}, // ✅ REQUIRED for Redis Cloud
  },
  password: process.env.REDIS_PASS,
});

redisClient.on("connect", () => {
  console.log("✅ Redis connected");
});

redisClient.on("error", (err) => {
  console.error("❌ Redis Error:", err);
});

module.exports = redisClient;


//    host: 'redis-17770.c83.us-east-1-2.ec2.cloud.redislabs.com',
// //         port: 17770

  //  password: '5foMc58SVGFKr1XVRc7bBSkvT5fQ6gmF',


// import { createClient } from 'redis';

// const client = createClient({
//     username: 'default',
//     password: '5foMc58SVGFKr1XVRc7bBSkvT5fQ6gmF',
//     socket: {
//         host: 'redis-17770.c83.us-east-1-2.ec2.cloud.redislabs.com',
//         port: 17770
//     }
// });

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result)  // >>> bar

