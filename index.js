// const { request, response } = require("express");

import  { Db, MongoClient } from "mongodb";
import express, { response } from "express";
import dotenv from 'dotenv';
// import req from "express/lib/request";

dotenv.config();
console.log(process.env);
const MONGO_URL=process.env.MONGO_URL;


const app = express();

 const PORT=9000;
app.use(express.json());
//  const recipes=[ 
//   {
//  id:"100",
// name:"Paradise Biryani",
// chef:" From Ali Hemati",
// cuisine:"Hyderabadi Cuisine",
// picture:"https://paradise-biryani.s3.ap-south-1.amazonaws.com/Biryani.jpg",
// cooktimehours:"2Hours",
// ingredients:"1 Kg meat,1 tbsp salt,1 tbsp ginger garlic paste,1 tbsp red chilli paste,1 tbsp green chilli paste ,(sauteed brown onions to taste)1/2 tbsp cardamom powder,3-4 Cinnamon sticks,1 tbsp cumin seeds,4 ClovesA pinch of maceto taste mint leaves,2 tbsp lemon juice,250 gms curd,4 tbsp clarified butter,750 gms semi cooked rice,1 tsp saffron,1/2 cup water,1/2 cup oilGarnish ingredients:Eggs, boiledCarrots, slicedCucumbers",
// preparation:"This biryani is cooked by dum style where the chicken and rice are let to cook together by placing an airtight lid to the vessel. This is one of the easiest recipe ever. Instead of using fried onions, I microwaved the onions for 20-30 minutes until they caramelized. This saves a lot of calories and oil.",
// },
// {
//   id:"101",
//   name:"Paneer Butter Masala",
//   chef:"From Jay shetty",
//   cuisine:"North-Indian Cuisine",
//   picture:"https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5-500x500.jpg",
//   cooktimehours:"1Hours",
//   ingredients:"Ripe red juicy tomatoes,Cashews,cream,butter,paneer,spice&herbs,tofu,vegan butter or oil,coconut cream",
//   preparation:"First of all, heat 3 tablespoons butter with 1 teaspoon oil in a Kadai,After doing that, add cloves, red chillies, bay leaves, cinnamon, and half of the crushed coriander seeds Once you did that, saute it for 30 seconds The next step is, add onion and stir-fry for half a minute and add garlic paste and ginger paste, After adding them, cook it for more half a minute, Now add tomatoes, coriander powder, and red chilli,Cook it on high heat till oil leaves the masala and puree the mixture Now, heat the remaining butter in a no-stick pan, cook the pureed mixture for 2 minutes. Now add paneer pieces and salt into in it. Add a ½ cup of water and cook it on low heat for the next five minutes. At last, sprinkle kasoori methi and mix it lightly. After doing that, turn off your device and mix in the cream and serve hot by garnishing with coriander spring in front of your family members of friends.",
//     },
//     {
//       id:"102",
//       name:"Crispy Clamari Rings",
//       chef:"From Herald Steve",
//       cuisine:"Continental Cuisine",
//       picture:"https://cdn.kuali.com/wp-content/uploads/2019/06/24145359/sl19_fb_jun03.jpg",
//       cooktimehours:"1hours",
//       ingredients:"110 Squid rings60 Tempura batter1 Lemon (half)1 Parsley sprig20 Thai chilli sauce20 Refined flour5 Garlic confit",
//       preparation:"Dust the squid rings with refined flour.2.Dip in the tempura batter and deep fry it till golden in colour.3.Served with lemon half, garlic confit, Thai chilli sauce and parsley sprig.",
//         },
//         {
//           id:"103",
//           name:"Curry Udon",
         
//          chef:"From Herald Steve",
//           cuisine:"Japanese Cuisine",
//           picture:"https://v1.nitrocdn.com/KQYMGOLIdXGmoAcyJsPOrQDKktgCbwtG/assets/static/optimized/rev-164325c/wp-content/uploads/2020/03/Curry-Udon-2018-I.jpg",
//           cooktimehours:"0.5hours",
//           ingredients:"Sour Cream,Udon noodles,Chuno sauce,soy sauce,mirin,dashi,curry powfer,vegetable paste",
//           preparation:"Sub the pork with chicken, beef, shrimp, tempeh, or any protein you have on hand really. For extra fiber, feel free to throw in some greens.",
//             },
//             {
//               id:"104",
//               name:"Alfredo",
//               chef:"From Alessandro",
//               cuisine:"Italian Cuisine",
//               picture:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg",
//               cooktimehours:"1Hours",
//               ingredients:"¼ cup butter,1 cup heavy cream, 1 clove garlic, crushed, 1 ½ cups freshly grated Parmesan cheese, ¼ cup chopped fresh parsley",
//               preparation:"Melt butter in a medium saucepan over medium low heat. Add cream and simmer for 5 minutes, then add garlic and cheese and whisk quickly, heating through. Stir in parsley and serve"

//                 },
//                 {
//                   id:"105",
//                   name:"Creamy Salmon",
//                   chef:" From Thomas Erwin",
//                   cuisine:"European Cuisine",
//                   picture:"https://i.pinimg.com/originals/c1/4a/86/c14a86b69d01fd2b8c09abb1c77d4be9.jpg",
//                   cooktimehours:"2Hours",
//                   ingredients:"250g baby potatoes , thickly sliced 2 tbsp olive oil 1 leek , halved, washed and sliced 1 garlic clove , crushed 70ml double cream 1 tbsp capers , plus extra to serve1 tbsp chives , plus extr 2 skinless salmon    mixed rocket salad , to serve (optional)",
//                   preparation:" Heat the oven to 200C/180C fan/gas 6. Bring a medium pan of water to the boil. Add the potatoes and cook for 8 mins. Drain and leave to steam-dry in a colander for a few minutes. Toss the potatoes with ½ of the oil and plenty of seasoning in a baking tray. ",
//                     },
//                ];

 const things=[{
                 name:"pencil",
                 use:"used to drwa and write",
               },
              {
                name:"rubber",
                use:"used to erase",

              }];



              
            
// const MONGO_URL = "mongodb+srv://amarmuthu:amarmuthu007@cluster0.7zd6g.mongodb.net";

// const MONGO_URL =   mongodb+srv://<username>:<password>@cluster0.7zd6g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//  const MONGO_URL = "mongodb://localhost";

 async function createConnection() {
   const client = new MongoClient(MONGO_URL);
  await client.connect();
   console.log("Mongodb connected");
   return client;
 }
 const client = await createConnection();


 
 app.get("/",(request,response)=>{
   response.send("Hey amar You Are here  In Buddy 🙋‍♂️🌞🌞🌞🤳");
 });




app.post("/recipes",async(request,response)=>{
  const data =request.body;
  console.log(data);
  const result= await createRecipes(data);
  response.send(result);

});



app.get("/recipes",async (request,response)=>{
  console.log(request.query);

const filter=request.query;
console.log(filter);
 
const filteredRecipes= await getRecipes(filter);
console.log(filteredRecipes);
 
response.send(filteredRecipes);
  }
);







app.get("/recipes/:id",async(request,response)=>{
  console.log(request.params);
 const {id}=request.params;
 const recipe=await getrecipeById(id);
//  const recipe=recipes.find((rcp)=>rcp.id===id);
console.log(recipe);
 recipe
? response.send(recipe)
:response.status(404).send({message:"No Matching recipe🥙🥙 found"})
});




app.put("/recipes/:id", async(request,response)=>{
  console.log(request.params);
  const {id}=request.params;
  const data=request.body;

  const result= await updateRecipeById(id, data);
  const recipe=await getrecipeById(id);

  response.send(recipe);



});






app.delete("/recipes/:id", async(request,response)=>{
  console.log(request.params);
  const {id}=request.params;
  const deletedRecipe = await deleteRecipeById(id);

 deletedRecipe.deletedCount>0
 ?response.send(deletedRecipe)
 :response.status(404).send({message:"No matching recipe 🥙🥙found"})
});












app.get("/things",(request,response)=>{
  response.send(things);
});
app.listen(PORT,()=>console.log("App is stared in",PORT) );







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
