const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var schema = mongoose.Schema({ name: String })

schema.methods.shlyop = function(){
console.log(this.name + " отбился от пола")
}

const Ball = mongoose.model('Ball', schema);
const auto = new Ball({ name: 'Баскетбольный мяч' });
auto.save().then(() => auto.shlyop());