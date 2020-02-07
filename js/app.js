// GLOBAL VARIABLES

var body = document.querySelector("body");
var imageDiv = document.querySelector("#div_img");
var select = document.querySelector("select");
var breed = select.value;

select.addEventListener("change", selectBreed);

// FUNCTION FOR CHANGING SELECT VALUE

function selectBreed() {

  breed = select.value;

  if (select.options.length === 6) {
    select.removeChild(select.options[0]);
  }

  request();
}

// XMLHttp REQUEST AND CALLING FUNCTION 

function request() {

  var newRequest = new XMLHttpRequest();

  newRequest.open(
    "GET",
    "https://dog.ceo/api/breed/" + breed + "/images/random"
  );

  newRequest.onload = function() {

    var imgSrc = JSON.parse(newRequest.responseText).message;
    var imgs = imageDiv.childNodes.length;

    if (imgs === 0) {

      createImg(imgSrc);

    } else {

      replaceImg(imgSrc);
      
    }
  };

  newRequest.send();
}

// FUNCTIONS FOR CREATING AND CHANGING IMAGES

function createImg(imgSrc) {

  var img = document.createElement("img");
  img.setAttribute("src", imgSrc);

  imageDiv.appendChild(img);
}

function replaceImg(imgSrc) {

  imageDiv.querySelector("img").removeAttribute("src");
  imageDiv.querySelector("img").setAttribute("src", imgSrc);
}

request();
setInterval(request, 5000);