// let access_key = 'II1iO_XgTriY1Abush_pW9N8LjQS3rFyCWSM6EcZ24w'

// getData = async () => {
//     const url = await fetch(`https://api.unsplash.com/search/photos?query=dog &per_page=28&P=1 age&client_id=${access_key}`)
//     const data = await url.json()
//     console.log(data)
// }
// getData()

const formEl = document.frm;
const input = document.getElementById('search-input');

const searchResults = document.querySelector('.search-results')
const showMore = document.get('show-more-btn')

let inputData = ''
let defaultPage = 1;

searchImages = async () => {
    inputData = input.value;
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${inputData} &page=${defaultPage}&per_page=12&client_id=${access_key}`)
    const data = await response.json();
    console.log(data);

    let results = data.results

    if (defaultPage === 1) {
        searchResults.innerHTML = ''

    }

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classlist.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "blank";
        imagelink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imagelink);
        imageWrapper.appendChild(imageWrapper);
    });
    page++;
    if (page > 1) {
        showMore.style.display = "block";
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    searchImages();
});





// const accessKey = 'uazH3xhof6xmk5gZ5pFA3XMqT76uw7DKinJ6qB5ma_4';

// const formEl = document.getElementById('frm');
// const inputEl = document.getElementById('search-input');
// const searchResultsEl = document.querySelector('.search-results');
// const showMoreBtnEl = document.getElementById('show-more-btn');

// let inputData = '';
// let defaultPage = 1;

// const searchImages = async (e) => {
//   e.preventDefault();
//   inputData = inputEl.value.trim(); // trim to remove whitespace
//   if (!inputData) return; // exit if input is empty

//   try {
//     const response = await fetch(`https://api.unsplash.com/search/photos?query=${inputData}&page=${defaultPage}&per_page=12&client_id=${accessKey}`);
//     const data = await response.json();
//     console.log(data);

//     const results = data.results;
//     if (defaultPage === 1) {
//       searchResultsEl.innerHTML = ''; // clear previous results
//     }

//     // render search results
//     results.forEach((result) => {
//       const resultHTML = `
//         <img src="${result.urls.small}" alt="${result.alt_description}">
//         <p>${result.description}</p>
//       `;
//       searchResultsEl.innerHTML += resultHTML;
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// formEl.addEventListener('submit', searchImages);


// const searchInput = document.getElementById('search-input');
// const searchButton = document.getElementById('search-btn');
// const imageGallery = document.querySelector('.image-gallery');
// const loadMoreButton = document.getElementById('load-more-btn');

// let currentPage = 1;
// let searchTerm = '';

// searchButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   searchTerm = searchInput.value.trim();
//   currentPage = 1;
//   fetchImages();
// });

// loadMoreButton.addEventListener('click', () => {
//   currentPage++;
//   fetchImages();
// });

// fetchImages = () => {
//   const apiKey = 'II1iO_XgTriY1Abush_pW9N8LjQS3rFyCWSM6EcZ24w';
//   const apiUrl = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${searchTerm}&client_id=${apiKey}`;

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       const images = data.results;
//       images.forEach(image => {
//         const imageElement = document.createElement('img');
//         imageElement.src = image.urls.small;
//         imageElement.alt = image.alt_description;
//         imageGallery.appendChild(imageElement);
//       });
//     })
//     .catch(error => console.error(error));
// }