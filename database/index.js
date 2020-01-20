const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repo_id: {type: Number, unique: true}, // make unique
  repo_name: String,
  user: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

//let save = (/* TODO */) => {
//  // TODO: Your code here
//  // This function should save a repo or repos to
//  // the MongoDB
//}
////

//module.exports.save = save;
