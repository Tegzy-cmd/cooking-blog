const mongoose = require('mongoose');
const Category = require('./Category');

const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    ingredients:{
        type: Array,
        required: true,
    },
    category:{
        type: String,
        enum:['Thai','American','Mexican','Chinese','Indian','Spanish'],
        required: true,
    },
    image:{
        type: String,
        required: 'This field is required',
    },
    
});

recipeSchema.index({'name':'text','description':'text'})

module.exports = mongoose.model('Recipe', recipeSchema);