var SELECTED_IMAGE = '[data-image-role="target"]';
var SELECTED_IMAGE_TITLE = '[data-image-role="title"]';
var SELECTED_IMAGE_LINK = '[data-image-role="trigger"]';
var SELECTED_IMAGE_FRAME = '[data-image-role="frame"]';
var SELECTED_HIDDEN_CLASS = 'selected-hidden';
var SMALL_EFFECT_CLASS = 'is-small';
var ESC_KEY = 27;

function setSelectedImage(imgUrl, titleTxt) {
  'use strict';

  var selectedImage = document.querySelector(SELECTED_IMAGE);
  selectedImage.setAttribute('src', imgUrl);

  var selectedTitle = document.querySelector(SELECTED_IMAGE_TITLE);
  selectedTitle.textContent = titleTxt;
}

function imageFromThumb(thumb) {
  'use strict';
  return thumb.getAttribute('data-image-url');
}

function titleFromThumb(thumb) {
  'use strict';
  return thumb.getAttribute('data-image-title');
}

function setSelectedImageFromThumb(thumb) {
  'use strict';
  setSelectedImage(imageFromThumb(thumb), titleFromThumb(thumb));
}

function addThumbClickHandler(thumbnail) {
  'use strict';
  thumbnail.addEventListener('click', function(event) {
    event.preventDefault();
    setSelectedImageFromThumb(thumbnail);
    showSelected();
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(SELECTED_IMAGE_LINK);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideSelected() {
  'use strict';
  document.body.classList.add(SELECTED_HIDDEN_CLASS);
}

function showSelected() {
  'use strict';
  var frame = document.querySelector(SELECTED_IMAGE_FRAME);
  document.body.classList.remove(SELECTED_HIDDEN_CLASS);
  frame.classList.add(SMALL_EFFECT_CLASS);
  setTimeout(function() {
    frame.classList.remove(SMALL_EFFECT_CLASS);
  }, 50);
}

function addKeyPressHandler() {
  'use strict';
  document.body.addEventListener('keyup', function(event) {
    event.preventDefault();
    //console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) {
      hideSelected();
    }
  });
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

initializeEvents();
