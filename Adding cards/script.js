// console.log("script Loading")

// const addBtn = document.querySelector('.addCard')
// const removeBtn = document.querySelector('.removeBtn')
// const container = document.querySelector('.container')

// function createCard(thumbnail, duration, title, cName, views, monthOld ) {
//     this.thumbnail = document.querySelector('.cardImg img')
//     this.duration = document.querySelector('.duration')
//     this.title = document.querySelector('.title')
//     this.cName = document.querySelector('.cName')
//     this.views = document.querySelector('.views')
//     this.monthOld = document.querySelector('.monthsOld')
//     this.thumbnail.src = thumbnail
//     this.duration.innerHTML = duration
//     this.title.innerHTML = title
//     this.cName.innerHTML = cName
//     this.views.innerHTML = views
//     this.monthOld.innerHTML = monthOld

// }

// addBtn.addEventListener('click', () => {

//     const cardOne = new createCard('https://plus.unsplash.com/premium_photo-1714229505550-3518d761d549?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '12:20', 'JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73', 'codewithharry', `${120}K views`, '10 days ago')



// })


console.log("script Loading");

const addBtn = document.querySelector('.addCard');
const removeBtn = document.querySelector('.removeCard');
const container = document.querySelector('.container');
const card = document.querySelector('.card')
let cardCount = 0

function createCard(thumbnail, duration, title, cName, views, monthOld) {
  let loadingCard = `<div class="card loading">
    <div class="cardImg">
      <img src="" alt="">
    </div>
    <div class="cardInfo">
      <div class="title">
        <h4>Loading...</h4>
      </div>
      <div class="description">
        <div class="cName">Loading...</div>
        <div class="views">Loading...</div>
        <div class="monthsOld">Loading...</div>
      </div>
    </div>
  </div>`

  container.innerHTML += loadingCard;

  // Update the card with actual data after a short delay
  setTimeout(() => {
    const card = container.querySelector('.card.loading');
    card.innerHTML = `
      <div class="cardImg">
        <img src="${thumbnail}" alt="">
        <span class="duration">${duration}</span>
      </div>
      <div class="cardInfo">
        <div class="title">
          <h4>${title}</h4>
        </div>
        <div class="description">
          <div class="cName">${cName}</div>
          <div class="views">${views}</div>
          <div class="monthsOld">${monthOld}</div>
        </div>
      </div>
    `;
    card.classList.remove('loading');
  }, 1500); // Update after 1500ms

  cardCount++;
}

addBtn.addEventListener('click', () => {

  createCard('https://plus.unsplash.com/premium_photo-1714229505550-3518d761d549?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '12:20', 'JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73', 'codewithharry', `${120}K views`, '10 days ago');

});


removeBtn.addEventListener('click', () => {
  if (cardCount > 1) {
    const lastCard = container.querySelector(`.card:last-child`);
    container.removeChild(lastCard);
    cardCount--;
  }
});

