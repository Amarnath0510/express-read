import express from "express";

import{ createRecipes, getRecipes, getrecipeById, updateRecipeById, deleteRecipeById } from "../helper.js";
const router=express.Router();


router
.route("/")
.post(async (request,response)=>{
    const data =request.body;
    console.log(data);
    const result= await createRecipes(data);
    response.send(result);
  
  })
.get(async (request,response)=>{
    console.log(request.query);
  
  const filter=request.query;
  console.log(filter);
   
  const filteredRecipes= await getRecipes(filter);
  console.log(filteredRecipes);
   
  response.send(filteredRecipes);
    }
  );
  router
  .route("/:id")
  .get(async(request,response)=>{
    console.log(request.params);
   const {id}=request.params;
   const recipe=await getrecipeById(id);
 
  console.log(recipe);
   recipe
  ? response.send(recipe)
  :response.status(404).send({message:"No Matching recipe🥙🥙 found"})
  })
   .put( async(request,response)=>{
    console.log(request.params);
    const {id}=request.params;
    const data=request.body;
  
    const result= await updateRecipeById(id, data);
    const recipe=await getrecipeById(id);
  
    response.send(recipe);
  
  
  
  })
   .delete( async(request,response)=>{
    console.log(request.params);
    const {id}=request.params;
    const deletedRecipe = await deleteRecipeById(id);
  
   deletedRecipe.deletedCount>0
   ?response.send(deletedRecipe)
   :response.status(404).send({message:"No matching recipe 🥙🥙found"})
  });

  export const recipesRouter= router;
  