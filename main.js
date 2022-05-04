// const data = "apiKey=1bc973599b551367a6101e6cd43ac18a";

// secret = "e0c7fa1800bfb00a"




// function getPhotos() {
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     // check call response
//     if (this.readyState == 4 && this.status == 200) {
//       let response = xhttp.responseText;
//       console.log(response);
//     }
//   };
//   xhttp.open("GET", url, true);

//   xhttp.send();
  
//   let selectedImg = 'reptile';
//   let selectedImgURL = `https://www.flickr.com/photos/100629421@N07/${selectedImg}/`;
  
//   // let image = document.querySelector('.image');
//   document.getElementById('image').setAttribute('src', selectedImgURL);
// }


// Set Flickr API url

// function getPhoto() {
//   let tag = 'reptile';
//   let apiURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1bc973599b551367a6101e6cd43ac18a&tags=${tag}&format=json&nojsoncallback=1`;
//   console.log(apiURL);
//   async function selectedIMG() {
//     const response = await fetch(apiURL);
//     const data = await response.json();
//     console.log(data);
//     const { photo, id, secret, server, farm } = data[4];
//     console.log(photo);

//     // let image = document.querySelector('.image');
//     document.getElementById('image').setAttribute('src', `https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg`);
//   }
//   selectedIMG();
// };


// let getPhoto = {
//   apiKey: '1bc973599b551367a6101e6cd43ac18a',
//   tag: 'reptile',
//   fetchPhotos: function () {
//     fetch(
//       'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key='
//       + this.apiKey
//       + '&tags='
//       + this.tag
//       + '&format=json&nojsoncallback=1'
//     )
    
//     .then((response) => {
//       return response.json();


//       console.log(response);
//       // console.log(response.photos.photo[4]);
//     })
//     .then((data) => {
//       console.log(data.photos.photo[0])
//       let id = data.photos.photo[0].id;
//       let secret = data.photos.photo[0].secret;
//       let server = data.photos.photo[0].server;

      
//       let img = document.querySelector('img');
//       img.src = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;

//       let getPhoto = function() {

//         document.createElement('img');
//         document.createElement('h3');
//         h3.innerText = data.photos.photo[0].title;
//       }
//     })







      // data.photo.photos.map(function(photo) {
      //   let img = document.createElement('img');
      //   let title = document.createElement('h1');

      //   let id = photo.id;
      //   let secret = photo.secret;
      //   let server = photo.server;

      //   img.src = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
      //   title.innerHTML = `${photos.title}`;
      // })
    // })
    // .then((data) => this.displayPhoto(data));
  // },
  // displayPhoto: function(photos) {
  //   const id = data.photos.photo;
  //   const secret = data.photos.photo;
  //   const server = data.photos.photo;
  //   document.querySelector("#image").src = `https://live.staticflickr.com/${server-id}/${id}_${secret}.jpg`;
  //   photos: this.photos[0],
  //   console.log(photos);
  // }

// };
// getPhoto.fetchPhotos("reptile");



const photoContainer = document.getElementById('img-container');
let apiKey = '1bc973599b551367a6101e6cd43ac18a';
let tag = 'reptile';
let apiURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&format=json&nojsoncallback=1`
let randomPhoto = Math.floor(Math.random() * 30);

async function getData () {
  const response = await fetch(apiURL);
  let data = await response.json();

  let id = data.photos.photo[randomPhoto].id;
  let secret = data.photos.photo[randomPhoto].secret;
  let server = data.photos.photo[randomPhoto].server;
  const image = document.getElementById('image');
  image.src = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;


}
