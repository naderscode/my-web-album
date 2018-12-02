var SELECTED_IMAGE = '[data-image-role="target"]';
var SELECTED_IMAGE_TITLE = '[data-image-role="title"]';
var SELECTED_IMAGE_LINK = '[data-image-role="trigger"]';

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
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(SELECTED_IMAGE_LINK);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();
