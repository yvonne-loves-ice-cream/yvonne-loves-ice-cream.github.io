const { MongoClient } = require('mongodb');

async function main(){
  const uri = "mongodb+srv://yvonnesunyy:Ba0624676@cluster0.ymy3o3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri);

  try{
    await client.connect();
    await findOneBlogByName(client,"Yvonne")}
    catch (e){
      console.error(e);
  }finally{
    await  client.close();
  }

  // await listDatabases(client);

  //   await createBlog(client,{
  //     name: "Yvonne",
  //     content: "I love coding"
  //   })
  //   }
  //   catch (e){
  //     console.error(e);
  // }finally{
  //   await  client.close();
  // }



//   await createMultipleBlogs(client,[{
//     name: "Yvonne",
//     content: "I want a job!"
//   },
//   {
//     name: "Yvonne",
//     content: "I miss my cat!"
//   },
// ])
  




}




main().catch(console.error);

// async function createListing(client, newListing){
//   const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
//   console.log(`New listing created with the following id: ${result.insertedId}`);
// }

async function createBlog(client, newBlog){
  const result = await client.db("yvonnesun").collection("Blog").insertOne(newBlog);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function createMultipleBlogs(client,newBlogs){
  const result = await client.db("yvonnesun").collection("Blog").insertMany(newBlogs);
  console.log(`${result.inseredCount} new listings created with the following id:`);
  console.log(result.insertedIds);
}

async function listDatabases(client){
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:")
  databasesList.databases.forEach(db => {
    console.log(`-${db.name}`);
  });
}

async function findOneBlogByName(client,nameofListing){
  const result = await client.db("yvonnesun").collection("Blog").findOne({name: nameofListing});
  if(result){
    console.log(`Found a listing in the collection with the name '${nameofListing}`);
    console.log(result)
  }else{
    console.log(`No listings found with the name '${nameofListing}'`);
  }
}