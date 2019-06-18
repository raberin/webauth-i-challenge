const db = require("../dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

//Grabs all the username/password of everything in db
function find() {
  return db("users");
}

//Searches through db with a filter/condition
function findBy(filter) {
  //.where can accept objects {xx:yy} read as (where xx = yy)
  return db("users").where(filter);
}

//Adds a user
function add(user) {
  return db("users").insert(user);
}

//Finds by specific id
function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
