import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./database/database.js";
import monsters from "./routes/monster.route.js";
import { fillMonsterdb } from "./populatedb/populatedb.js";

const app = express();
const port = 8000;

fillMonsterdb();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/monsters", monsters);

app.listen(port, function(){
    console.log(`🚀 Fire app listening on port ${port}!`)
});