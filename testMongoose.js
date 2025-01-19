const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Ball = mongoose.model('Ball', { name: String });
const auto = new Ball({ name: 'Баскетбольный мяч' });
auto.save().then(() => console.log('Шлёп'));