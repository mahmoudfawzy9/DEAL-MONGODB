require('./index');
const mongoose = require('mongoose'),
env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
envConfig = require('./env')[env];
mongoose.Promise = require('bluebird');
mongoose.connect(envConfig.db, { useMongoClient: true, });

mongoose.connection.on('connected', function () {  
  console.log(`Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`);
}); 

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});
const { Author, Article } = require('./src/models');

async function seedAuthors() {
  console.log('Seeding authors to ' + mongoose.connection.name + '...');
  const authors = [
    { name: 'JK Rowling', job_title: 'J.K. Rowling is the author of the much-loved series of seven Harry Potter novels, originally published between 1997 and 2007.' },
    { name: 'Tony Robbins', job_title: 'Tony Robbins is an entrepreneur, best-selling author, philanthropist and the nation\'s #1 Life and Business Strategist.' },
  ];

  for (author of authors) {
    var newAuthor = new Author(author);
    await newAuthor.save();
  }

  const a = await Author.find();
  console.log('authors: ', a);
}

async function seedArticles() {
  console.log('Seeding books to ' + mongoose.connection.name + '...');

  const jkRowling = await Author.findOne({ name: 'JK Rowling' });
  const tonyRobbins = await Author.findOne({ name: 'Tony Robbins' });

  let harryPotter = new Article({ title: 'Harry Potter', author: jkRowling._id });
  let awakenGiant = new Article({ title: 'Awaken the Giant Within', author: tonyRobbins._id });

  await harryPotter.save();
  await awakenGiant.save();

  jkRowling.books.push(harryPotter);
  tonyRobbins.books.push(awakenGiant);

  await jkRowling.save();
  await tonyRobbins.save();
}

seedAuthors();
seedArticles();