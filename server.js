require('dotenv').config();
const express = require('express')
const db = require('./config/db')
const path = require("path")
const {connectToRedis, redisClient} = require("./config/redis")

// Routes
const viewRoutes = require("./routes/views")

const main = async() =>{
    const app = express();
    db.connect((err)=>{
        if(err){
        console.log(err);
        process.exit(1);
        }
        console.log('connected to MYSQL Databse.....')
    })
    await connectToRedis();

     // Previous way of getting values from redis
    // redisClient.get('my_key', (err, result) => {
    //     console.log('result');
    // })

    // How to retrieve values now
    // So you will have to make some changes to your code while following this tutorial
    // if you use the current version of redis npm package
    // const value = await redisClient.get('my_key');
    // console.log(value);

    // // Similarly for set and delete
    // await redisClient.set('my_key', 'my_val');
    // await redisClient.del('my_key'); 

    const PORT = process.env.PORT || 6000;





app.set("view engine","ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/", viewRoutes)

app.listen(PORT, () =>{
    console.log(`Server started at http://localhost:${PORT}`)
})
}


main();







