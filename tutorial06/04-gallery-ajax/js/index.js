// gets the URLs for each element

const photosURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/flowers.json';
const bikesURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/bikes.json';
const carsURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/cars.json';

// function that creates a card for every photo at the selected URL
const loadCards = (photos) => {
    document.querySelector('.cards').innerHTML = '';
    for (photo of photos) {
        const template = `
            <div class="card" style="background-image:url('${photo}')"></div>`;
        document.querySelector('.cards').innerHTML += template;
    }
    initCarousel();
};

// query the data from the server:
// Loads the JSON information found at the URL
fetch(bikesURL)
    .then((response) => {
        return response.json();
    })
    .then(loadCards); // invokes a function to process the data
