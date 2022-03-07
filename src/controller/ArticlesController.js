const { Article } = require('./src/models');

const ArticlesController = {
  async index(req, res){
  	const articles = await Article.find().populate('articles');
  	res.send(articles);
  },
  async show(req, res){
  	const article = await Article.findById(req.params.id).populate(`articles`);
  	res.send(article);
  }
};

module.exports = ArticlesController;