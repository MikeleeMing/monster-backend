import axios from "axios";
import mongoose, { connect } from "mongoose";
import getNextSequenceValue from "../autoincrement/autoincrement.js";
import { connectDB } from "../database/database.js";
import { Monster } from "../models/monster.model.js";


/**
 * This function populates the monsterdb with data 
 * from: https://gist.githubusercontent.com/mrchenliang/e438f666d121261b74abcd70a5f938d8/raw/a8f14ee5097fe2ab4f78798307d2dd3dcb0dcd3a/monsters.json
 */

export const fillMonsterdb = async () => {
    try {
        connectDB();
        
        const count = await Monster.countDocuments({});
        if(count === 0) {
            const response = await axios.get(
                'https://gist.githubusercontent.com/mrchenliang/e438f666d121261b74abcd70a5f938d8/raw/a8f14ee5097fe2ab4f78798307d2dd3dcb0dcd3a/monsters.json'
            );
            const monsterData = response.data;
            
            for(const monster of monsterData) {
                const nextId = await getNextSequenceValue("monsterId");
                monster.id = nextId;
    
                const newMonster = new Monster(monster);
                await newMonster.save();
            }
    
        }

    } catch (e) {
        console.log("error: ", e);
    }
};



//fillMonsterdb();