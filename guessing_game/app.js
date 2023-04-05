const cardArray = [
    {
        name: 'fries',
        img: './assets/fries.png',
    },
    {
        name: 'cheeseburger',
        img: './assets/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: './assets/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: './assets/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: './assets/milkshake.png'
    },
    {
        name: 'pizza',
        img: './assets/pizza.png'
    },
    {
        name: 'fries',
        img: './assets/fries.png',
    },
    {
        name: 'cheeseburger',
        img: './assets/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: './assets/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: './assets/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: './assets/milkshake.png'
    },
    {
        name: 'pizza',
        img: './assets/pizza.png'
    }
]

//randomizes array
cardArray.sort(() => 0.5 - Math.random())



const grid = document.querySelector('#grid')
const cardsChosen = []
const cardsChosenIds = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)

    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')

    console.log('check for match!')
    if (cardsChesen[0] == cardsChosen[1]) {
        console.log('ITS A MATCH')
        cards[]
    }
}

function flipCard() {
    console.log(cardArray)
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosen.push(cardsId)
    console.log('clicked', cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}