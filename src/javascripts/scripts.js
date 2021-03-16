class Card {
	constructor(id, author, description, img) {
		this.id = id;
		this.author = author;
		this.description = description;
		this.img = img;
		document.body.addEventListener('click', this.cardClick, false );
		document.body.addEventListener('click', this.deleteCard, false );

	}

	cardClick(el) {
		el.stopPropagation();
		if(el.target.className === 'card') {
			
			return alert(`Card Has Been Click!`)
		};
	}
	deleteCard(el) {
		if(el.target.className === 'x-out') {
			el.target.parentElement.remove();
		}
	}
}


class CardGrid {	
	addCardToGrid(card) {
		const card_container = document.querySelector('.card-container');
		const card_element = document.createElement('div');
		card_element.className = 'card';
		card_element.innerHTML = `
			<div class="x-out">X</div>
			<div class="card__img">
				<div class="card__img--bgimg" style="background-image:url(${card.img})"></div>
			</div>

			<div class="card__description">
				<h2>${card.author}</h2>
				<p>${card.description}</p>
			</div>
		`
		card_container.append(card_element);
	}
}

const card_grid = new CardGrid;

// Get dummy JSON data
fetch('/json/data.json')
  .then(response => response.json())
  .then(data => {
  	data.cards.map((card, i) => {
  		const { id, author, description, img } = card;
  		let new_card = new Card(id, author, description, img);
  		card_grid.addCardToGrid(new_card);
  	})
  });