
// This variable will always hold the "active" photo element (the div)
let activeCard = null;
let timer = null;
// PART 1: Make the showPhoto function work
const showPhoto = (e) => {
    // Hint: figure out which element the user clicked from the event object:
    activeCard = e.target;
    // console.log('the active element is:', activeCard);

    // Hint: figure out what its background image is:
    const imgURL = activeCard.style.backgroundImage;
    console.log('the background image of the active element is:', imgURL);
    document.querySelector('.featured_image').style.backgroundImage = imgURL;
    document.querySelector('.preview').className = 'preview active';
    timer = setInterval(next, 6000);
    document.body.style.overflow = 'hidden';
    // Your turn:
    // 1. set the .featured_image's background image to the imgURL (above), and
    // 2. update the .preview_box's class to include the "active" class.
};

// PART 2: Replace this code with what's commented below.
//         Instead of just applying the event handler to
//         the first .card element, you want to apply it to
//         all of the card elements
// document.querySelector('.card').onclick = showPhoto;
const cards = document.querySelectorAll('.card');
for (card of cards) {
    card.onclick = showPhoto;
}



// PART 3: Close functionality
const close = () => {
  document.querySelector('.preview').className = 'preview';
  clearInterval(timer);
  document.body.style.overflow = 'visible';
};
document.querySelector('#close').onclick = close;
// PART 4: Next functionality:
// a. Modify the “next” function (below) so that that it replaces
//    the “.featured_image” background image to the next image in the list.
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.
const next = () => {
  if (activeCard == document.querySelector('.lastImage')) {
    activeCard = document.querySelector('.firstImage');
    const imgURL = activeCard.style.backgroundImage;
    document.querySelector('.featured_image').style.backgroundImage = imgURL;
    clearInterval(timer);
    timer = setInterval(next, 6000);
  }
  else{
    activeCard = activeCard.nextElementSibling;
    const imgURL = activeCard.style.backgroundImage;
    document.querySelector('.featured_image').style.backgroundImage = imgURL;
    clearInterval(timer);
    timer = setInterval(next, 6000);
}
}
document.querySelector('#next').onclick = next;

// PART 5: Previous functionality:
// a. Create a “previous” function that switches out the
//    “.featured_image” background image to the previous image
//    in the list.
// b. Attach your newly created “previous” function to the onclick
//    event handler of the “.prev” button (in the upper right-hand corner).

const previous = () => {
    // HINTS:
    // 1. update the "activeCard" variable so that it's now the
    //    next card in the list.
    // 2. Then do the same steps as before (in the showPhoto).
    if (activeCard == document.querySelector('.firstImage')) {
      activeCard = document.querySelector('.lastImage');
      const imgURL = activeCard.style.backgroundImage;
      document.querySelector('.featured_image').style.backgroundImage = imgURL;
      clearInterval(timer);
      timer = setInterval(next, 6000);
    }
    else{
    activeCard = activeCard.previousElementSibling;
    const imgURL = activeCard.style.backgroundImage;
    document.querySelector('.featured_image').style.backgroundImage = imgURL;
    clearInterval(timer);
    timer = setInterval(next, 6000);
  }

}
document.querySelector('#prev').onclick = previous;

const addImage = () => {
  let userInput = window.prompt("Enter the url of your image: ")
  if (userInput.match(/\.(jpeg|jpg|gif|png|JPEG|JPG|GIF|PNG)$/) != null){
    let userImage = document.createElement("DIV");
    userImage.style.backgroundImage = 'url(' + userInput + ')';
    document.querySelector('.cards').insertBefore(userImage, document.querySelector('.firstImage'));
      document.querySelector('.firstImage').className = 'card';
    userImage.className = 'card firstImage';
    userImage.onclick = showPhoto;
  }
  else {
    alert("Enter a valid image url.")
  }
}

document.querySelector('.userInput').onclick = addImage;
