const mongoose = require('mongoose');

const bookModel = mongoose.Schema({
  name: { 
  	type: String, 
  	required: '{PATH} is required!'
  },
  job_title: {
  	type: String
  },
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Author' 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Article', articleModel);