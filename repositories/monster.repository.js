import { Monster } from "../models/monster.model.js";
import getNextSequenceValue from "../autoincrement/autoincrement.js";

export const getMonsterFromRepository = async (query) => {
    try {
        const monsters = await Monster.find(query);
        return monsters;
    } catch (e) {
        throw Error("Error while fetching monsters")
    }
}

export const createMonsterInRepository = async (payload) => {
    try {
      const nextId = await getNextSequenceValue("monsterId");
      if (nextId == null) {
        throw new Error("Error: Failed to make new ID");
      }
      payload.id = nextId;
      const newMonster = new Monster(payload);
      const savedMonster = await newMonster.save();
      return savedMonster;
    } catch (e) {
      throw Error(e + " Error while creating a monster");
    }
  }

  export const updateMonstersInRepository = async (query, update) => {
    try {
      const monster = await Monster.findOneAndUpdate(
        { ...query },
        { ...update },
        { new: true }
      ).lean();
      return monster;
    } catch (e) {
      throw Error("Error while updating Monster");
    } 
  }

  export const deleteMonsterFromRepository = async (query) => {
    try {
        const monster = await Monster.findOneAndDelete({ ...query });
        return monster;
    }
    catch (e) {
        throw Error("Error while deleting Monster");
    }
  }
