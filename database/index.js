const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  url: {
    type: String,
    unique: true
  },
  id: {
    type: String,
    unique: true
  }
})

const Picture = mongoose.model('Picture', pictureSchema);

const create = (url, cb) => {
  const newPicture = new Picture({url});
  newPicture.save((err, pic) => {
    err ? cb(err) : cb(null, pic);
  })
}

const get = (cb) => {
  Picture.find((err, res) => {
    err ? cb(err) : cb(null, res);
  }).limit(100);
}

const deleteOne = (url, cb) => {
  Picture.deleteOne({url}, (err, data) => {
    err ? cb(err) : cb(null, data);
  })
}


//only run once
// const populateDb = () => {
//   var fileNum = '';
//   for (var i = 1; i <= 100; i++) {
//     fileNum = i;
//     var url = `https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/Images/File${fileNum}.jpg`
//     var newPic = new Picture({url, id: i});
//     newPic.save((err, res) => {
//       if (err) {
//         console.log(err);
//         return;
//       } else {
//         console.log(res);
//       }
//     });
//   }
// }

// populateDb();
module.exports = {create, get, deleteOne};