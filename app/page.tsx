'use client'

import characters, { Rick } from './api/characters'
import Card from './(components)/card/page'
import Cards from './(components)/cards/page'
import SearchBar from './(components)/searchBar/page'

const App = () => {
	const onClose = () => {
		window.alert('Emulamos que se cierra la card')
	}

	const onSearch = (characterId) => {
		window.alert(characterId)
	}

	return (
		<div>
		    <Card 
	    	    name={ Rick.name }
	    	    species={ Rick.species }
	    	    gender={ Rick.gender }
	    	    image={ Rick.image }
	    	    onClose={ onClose }
	    	/>
	    	<hr />
	    	<Cards characters={ characters } onClose={ onClose } />
	    	<hr />
	    	<SearchBar onSearch={ onSearch } />
		</div>
	)
}

export default App