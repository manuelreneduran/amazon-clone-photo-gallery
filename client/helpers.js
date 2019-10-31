function setPictures(pictures) {
  var id = this.getId();
  var randomNum = this.getRandomNum(2, 20);
  let mainPicture = [];
  let galleryPictures = [];
  for (let picture in pictures) {
    if (pictures[picture].id === id) {
      mainPicture.push(pictures[picture].url)
      galleryPictures.splice(0, 0, pictures[picture].url);
    } else {
      pictures[picture].id % randomNum === 0 ? galleryPictures.push(pictures[picture].url) : null;
    }
  }
  return {
    mainPicture,
    galleryPictures
  };
}

function getRandomNum(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getId() {
  var path = window.location.pathname;
  if (path === '/') {
    path = '1'
  }
  const regex = /[0-9]/g;
  const id = path.match(regex).join('');
  return id;
}

module.exports = { setPictures, getRandomNum, getId };