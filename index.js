// const { request, response } = require("express");

import  { Db, MongoClient } from "mongodb";
import express, { response } from "express";
import dotenv from 'dotenv';
import { createRecipes, getRecipes, getrecipeById, updateRecipeById, deleteRecipeById } from "./helper.js";
// import req from "express/lib/request";

dotenv.config();
console.log(process.env);
const MONGO_URL=process.env.MONGO_URL;


const app = express();

 const PORT=9000;
app.use(express.json());

 const things=[{
                 name:"pencil",
                 use:"used to drwa and write",
               },
              {
                name:"rubber",
                use:"used to erase",

              }];



              
            


 async function createConnection() {
   const client = new MongoClient(MONGO_URL);
  await client.connect();
   console.log("Mongodb connected");
   return client;
 }
 export const client = await createConnection();


 
 app.get("/",(request,response)=>{
   response.send("Hey amar You Are here  In Buddy 🙋‍♂️🌞🌞🌞🤳");
 });

app.use("/recipes",recipesRouter);


// app.post("/recipes",async(request,response)=>{
//   const data =request.body;
//   console.log(data);
//   const result= await createRecipes(data);
//   response.send(result);

// });



// app.get("/recipes",async (request,response)=>{
//   console.log(request.query);

// const filter=request.query;
// console.log(filter);
 
// const filteredRecipes= await getRecipes(filter);
// console.log(filteredRecipes);
 
// response.send(filteredRecipes);
//   }
// );







// app.get("/recipes/:id",async(request,response)=>{
//   console.log(request.params);
//  const {id}=request.params;
//  const recipe=await getrecipeById(id);
// //  const recipe=recipes.find((rcp)=>rcp.id===id);
// console.log(recipe);
//  recipe
// ? response.send(recipe)
// :response.status(404).send({message:"No Matching recipe🥙🥙 found"})
// });




// app.put("/recipes/:id", async(request,response)=>{
//   console.log(request.params);
//   const {id}=request.params;
//   const data=request.body;

//   const result= await updateRecipeById(id, data);
//   const recipe=await getrecipeById(id);

//   response.send(recipe);



// });






// app.delete("/recipes/:id", async(request,response)=>{
//   console.log(request.params);
//   const {id}=request.params;
//   const deletedRecipe = await deleteRecipeById(id);

//  deletedRecipe.deletedCount>0
//  ?response.send(deletedRecipe)
//  :response.status(404).send({message:"No matching recipe 🥙🥙found"})
// });












app.get("/things",(request,response)=>{
  response.send(things);
});
app.listen(PORT,()=>console.log("App is stared in",PORT) );








