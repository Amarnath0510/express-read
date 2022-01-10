import express from "express";
const router=express.Router();



router.post("/recipes",async(request,response)=>{
    const data =request.body;
    console.log(data);
    const result= await createRecipes(data);
    response.send(result);
  
  });
  

  
  router.get("/recipes",async (request,response)=>{
    console.log(request.query);
  
  const filter=request.query;
  console.log(filter);
   
  const filteredRecipes= await getRecipes(filter);
  console.log(filteredRecipes);
   
  response.send(filteredRecipes);
    }
  );
  
  
  
  
  
  
  
  router.get("/recipes/:id",async(request,response)=>{
    console.log(request.params);
   const {id}=request.params;
   const recipe=await getrecipeById(id);
 
  console.log(recipe);
   recipe
  ? response.send(recipe)
  :response.status(404).send({message:"No Matching recipe🥙🥙 found"})
  });
  
  
  
  
  router.put("/recipes/:id", async(request,response)=>{
    console.log(request.params);
    const {id}=request.params;
    const data=request.body;
  
    const result= await updateRecipeById(id, data);
    const recipe=await getrecipeById(id);
  
    response.send(recipe);
  
  
  
  });
  
  
  
  
  
  
  router.delete("/recipes/:id", async(request,response)=>{
    console.log(request.params);
    const {id}=request.params;
    const deletedRecipe = await deleteRecipeById(id);
  
   deletedRecipe.deletedCount>0
   ?response.send(deletedRecipe)
   :response.status(404).send({message:"No matching recipe 🥙🥙found"})
  });

  export const recipesRouter = router;
  