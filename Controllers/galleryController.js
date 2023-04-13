angular.module('myApp').controller('galleryController', function() {
  var vm = this;
  vm.imageData = [
    {
      "id": 1,
      "url": "../images/brush.jpg",
    },
    {
      "id": 2,
      "url": "../images/tools.jpg",
    },
    {
      "id": 3,
      "url": "../images/electbrsh.jpg",
      "title": "Image 3"
    },
    {
      "id": 4,
      "url": "../images/implants.jpg",
      "title": "Image 4"
    },
    {
      "id": 5,
      "url": "../images/dentech.jpg",
      "title": "Image 5"
    },
    {
      "id": 6,
      "url": "../images/prob.jpg",
      "title": "Image 6"
    },
    {
      "id": 7,
      "url": "../images/chk.jpg",
      "title": "Image 7"
    },
    {
      "id": 8,
      "url": "../images/artif.jpg",
      "title": "Image 8"
    },
    {
      "id": 9,
      "url": "../images/story.jpg",
      "title": "Image 9"
    }
  ];
});
