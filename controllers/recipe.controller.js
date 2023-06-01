import query from "../db/utils.js";

const findAll = async () => {
  return query("SELECT ID, RECIPE_NAMES, INGREDIENTS Title FROM TOTK_RECIPES");
};

const findOne = async (id) => {
  return query("SELECT ID, RECIPE_NAMES, INGREDIENTS Title FROM TOTK_RECIPES WHERE ID = ?", [
    id
  ]);
};

const addOne = async (recipe) => {
  return await query("INSERT INTO TOTK_RECIPES SET ?", [recipe]);
};

const updateOne = async (id, recipe) => {
  return await query("UPDATE TOTK_RECIPES SET ? WHERE ID = ?", [
    recipe,
    id,
  ]);
};

const removeOne = async (id) => {
  return await query("DELETE FROM TOTK_RECIPES WHERE ID = ?", [id]);
};

export default {
  findAll,
  findOne,
  addOne,
  updateOne,
  removeOne,
};