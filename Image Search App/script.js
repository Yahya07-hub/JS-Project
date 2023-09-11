const access_key = 'uazH3xhof6xmk5gZ5pFA3XMqT76uw7DKinJ6qB5ma_4'

const formEl = document.frm;
const input = document.getElementById('search-input');

const searchResults = document.querySelector('.search-results')
const showMore = document.get('show-more-btn')

let inputData = ''
let defaultPage = 1;

// async = searchImages = () => {
//     inputData = input.value;
//     const url = `https://api.unsplash.com/search/photos?page=${defaultPage}&query=${inputData}&client_id=${access_key}`

//     const response = await fetch(url)
//     let data = await response.json()

//     let results = data.results
    
//     if(defaultpage === 1){
//         searchResults.innerHTML = ''
  
//     }
// }

searchImages = () => {
    inputData = input.value;
    const url = ``
}

