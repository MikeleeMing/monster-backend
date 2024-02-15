import { getMonsterFromRepository, createMonsterInRepository, updateMonstersInRepository, deleteMonsterFromRepository } from "../repositories/monster.repository.js";

export const getMonsters = async (req, res) => {
    try {
        const monsters = await getMonsterFromRepository();
        res.status(200).send(monsters);
    } catch(e) {
        res.status(500).send(`${e.message} Failed to get a list of monsters.`);
    }
};

export const getMonster = async (req, res) => {
    const { id } = req.params;
    try {
        const monster = await getMonsterFromRepository({id: id });
        res.status(200).send(monster);
    } catch(e) {
        res.status(500).send(`${e.message} Failed to fetch Monster. ${id}`);
    }
};

export const createMonster = async (req, res) => {
    const { body } = req;
    try {
        
        const monster = await createMonsterInRepository(body);
        console.log(monster);
        res.status(200).send(monster);


    } catch (error) {
      res.status(500).send(`${error.message} Failed to fetch Monster.`);
    }
  };

export const updateMonster = async (req, res) => {
const { id } = req.params;
const { body } = req;
try {
    const monster = await updateMonstersInRepository({ id: id }, body);
    res.status(200).send(monster);
} catch (e) {
    res.status(500).send(`${e.message} Failed to fetch Monster: ${id}`);
}
};

export const deleteMonster = async(req, res) => {
    const { id } = req.params;
    try {
        const monster = await deleteMonsterFromRepository({ id: id });
        if (monster) {
            res.status(204).send();
          } else {
            res.status(404).send(`${e.message} Failed to fetch Monster: ${id}`);
          };
        } 
    catch (e) {
        res.status(500).send(`${e.message} Failed to delete monster: ${id}`);
    }
};