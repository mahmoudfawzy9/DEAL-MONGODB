const mongoose = require('mongoose');

const authorModel = mongoose.Schema({
  name: { 
  	type: String, 
  	required: '{PATH} is required!'
  },
  job_title: {
  	type: String
  },

  articles: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Author', authorModel);