import { IdCounter } from "../models/monster.model.js";

export const getNextSequenceValue = async (seqName) => {
    try {
        const idCounter = await IdCounter.findByIdAndUpdate(
            {_id: seqName},
            { $inc: { sequence: 1} },
            {new: true, upsert: true}
        );
        return idCounter.sequence;
    }
    catch (error){
        throw error;
    }
}
export default getNextSequenceValue;