const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repo_id: {type: Number, unique: true}, // make unique
  repo_name: String,
  user: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  console.log(data[0]);
}

module.exports.save = save;
