let fetchURL = 'https://www.loc.gov/audio/?q=dogs&fo=json'

let formatAvailable = ['maps', 'audio', 'photos', 'manuscripts', 'newspapers', 'film-and-videos', 'notated-music', 'websites']


let test1 = {
    image: "/static/collections/groups-of-images/images/featured-naacp.jpg",
    title: "NAACP photographs of civil rights marches, demonstrations, and lobbying activities to promote civil rights legislation at the national and local levels",
    url: "/item/95516562/"
}

let test2 = {
image: "/static/collections/groups-of-images/images/featured-naacp.jpg",
title: "NAACP photographs of civil rights marches, demonstrations, and lobbying activities to promote civil rights legislation at the national and local levels",
url: "/item/95516562/"
}

let test3 = {
image: "/static/images/original-format/sound-recording.png",
title: "Horned Owl",
url: "/item/flwpa000349/"
}

// takes in a string and formats for url pass
let queryParam = (query) => {
    return `q=${query}`
}



var tasks = [test1, test2, test3];

let cardContainer;

let createTaskCard = (task) => {

let card = document.createElement('div');
card.className = 'card shadow cursor-pointer';

let cardBody = document.createElement('div');
cardBody.className = 'card-body';

let title = document.createElement('h5');
title.innerText = task.title;
title.className = 'card-title';

let image = document.createElement('img');
image.src = 'https://www.loc.gov' + task.image;
image.classList = 'card-image';

let hr = document.createElement('hr')

let link = document.createElement('a');
link.href = 'https://www.loc.gov' + task.url;
link.textContent = 'Link'
link.className = 'card-link';


cardBody.appendChild(title);
cardBody.appendChild(image);
cardBody.appendChild(hr)
cardBody.appendChild(link);
card.appendChild(cardBody);
cardContainer.appendChild(card);

}

let initListOfTasks = () => {
if (cardContainer) {
    document.getElementById('card-container').replaceWith(cardContainer);
    return;
}

cardContainer = document.getElementById('card-container');
tasks.forEach((task) => {
    createTaskCard(task);
});
};

initListOfTasks();

// fetch(fetchURL, {
//   // The browser fetches the resource from the remote server without first looking in the cache.
//   // The browser will then update the cache with the downloaded resource.
//   cache: 'reload',
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data.featured_items);
//   });

