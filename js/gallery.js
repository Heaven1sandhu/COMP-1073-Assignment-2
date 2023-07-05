window.addEventListener('DOMContentLoaded', function () {
  // Get references to the figure and list elements
  var figure = document.querySelector('figure');
  var listItems = document.querySelectorAll('ul li');

  // Hide images in the figure element and their corresponding figcaptions
  var figureImages = figure.getElementsByTagName('img');
  var figureCaptions = figure.getElementsByTagName('figcaption');
  for (var i = 0; i < figureImages.length; i++) {
    figureImages[i].style.display = 'none';
    figureCaptions[i].style.display = 'none';
  }

  // Show images in the list items and attach click event listeners
  for (var j = 0; j < listItems.length; j++) {
    var listItemImage = listItems[j].getElementsByTagName('img')[0];
    listItemImage.style.display = 'block';
    listItemImage.addEventListener('click', showLargeImage.bind(null, j));
  }

  // Function to show the large image and its figcaption
  function showLargeImage(index, event) {
    var smallImageSrc = event.target.getAttribute('src');
    var largeImageSrc = smallImageSrc.replace('-small.jpg', '-large.jpg');

    // Create an overlay div and attach a click event listener to it
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.addEventListener('click', minimizeImage);
    document.body.appendChild(overlay);

    // Create the large image element and set its attributes
    var largeImage = document.createElement('img');
    largeImage.setAttribute('src', largeImageSrc);
    largeImage.setAttribute('alt', '');

    // Create the figcaption element and set its text content
    var figcaption = document.createElement('figcaption');
    figcaption.textContent = figureCaptions[index].textContent;

    // Append the large image and figcaption to the overlay
    overlay.appendChild(largeImage);
    overlay.appendChild(figcaption);
  }

  // Function to minimize the large image
  function minimizeImage(event) {
    event.currentTarget.remove(); // Remove the overlay when clicked
  }
});
