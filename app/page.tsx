'use client'

import { useState } from 'react'
import Card from './(components)/card/page'
import Cards from './(components)/cards/page'
import NavBar from './(components)/navBar/page'

const App = () => {
	const [characters, setCharacters] = useState([]);

	const onClose = (id) => {
		setCharacters(characters.filter(character => character.id !== id))
	}

	const onSearch = (characterId) => {
		fetch(`https://rickandmortyapi.com/api/character/${ characterId }`)
		    .then(response => response.json())
		    .then(data => {
		    	if (characters.some(character => character.id === data.id)) {
		    		window.alert('Ese personaje ya está agregado')
		    	} else {
			    	if (data.name) {
			    		setCharacters(oldCharacters => [...oldCharacters, data])
			    	} else {
			    		window.alert('No hay personajes con ese Id')
			    	}
			    }
		    })
		    .catch(err => {
		    	console.log(err);
		    	window.alert('Hubo un error al buscar el personaje')
		    })
	}

	return (
		<div>
		    <NavBar onSearch={ onSearch }  />
	    	<Cards characters={ characters } onClose={ onClose } />
		</div>
	)
}

export default App