var database = require('./database');

//Insert
async function insert(){
    try{
        var query = await database.insert({name: "1984", author: "George Orwell", theme: "Dystopia"}).into('books');
        console.log(query.toQuery());
    }
    catch(err){
        console.log(err);
    }
}

//Select
database.select("*").table("users").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//Delete
database.where({id: 2}).delete().table("books");

//Update
var query = database.where({id: 5}).update({author: "Tolkien"}).table("books");
console.log(query.toQuery());