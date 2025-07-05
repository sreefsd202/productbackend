const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vssreelakshmi05:sreeammu05@cluster0.ihvhv.mongodb.net/vimala?retryWrites=true&w=majority&appName=cluster0')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err))