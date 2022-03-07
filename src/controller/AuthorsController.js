const { Author } = require('./src/models');

const AuthorsController = {
  async index(req, res){
  	const authors = await Author.find().populate('articles');
  	res.send(authors);
  },
  async show(req, res){
  	const author = await Author.findById(req.params.id).populate(`articles`);
  	res.send(author);
  }
};

module.exports = AuthorsController;