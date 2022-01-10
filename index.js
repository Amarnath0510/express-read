// const { request, response } = require("express");

import  { Db, MongoClient } from "mongodb";
import express, { response } from "express";
import dotenv from 'dotenv';
import { createRecipes, getRecipes, getrecipeById, updateRecipeById, deleteRecipeById } from "./helper.js";
import {recipesRouter} from "./routes/recipes.js";

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













// app.get("/things",(request,response)=>{
//   response.send(things);
// });
app.listen(PORT,()=>console.log("App is stared in",PORT) );








