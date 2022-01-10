import { client } from "./index.js";

 async function updateRecipeById(id, data) {
  return await client
    .db("node")
    .collection("recipes")
    .updateOne({ id: id }, { $set: data });
}
 async function createRecipes(data) {
  return await client
    .db("node")
    .collection("recipes")
    .insertMany(data);
}
async function getRecipes(filter) {
  return await client
    .db("node")
    .collection("recipes")
    .find(filter)
    .toArray();
}
 async function deleteRecipeById(id) {
  return await client
    .db("node")
    .collection("recipes")
    .deleteOne({ id: id });
}
async function getrecipeById(id) {
  return await client
    .db("node")
    .collection("recipes")
    .findOne({ id: id });
}

export{
  createRecipes,
   getRecipes,
    getrecipeById, 
    updateRecipeById,
     deleteRecipeById 
};