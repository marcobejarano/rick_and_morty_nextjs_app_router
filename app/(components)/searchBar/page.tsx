import { useState } from 'react';
import styles from './page.module.css'

const SearchBar = (props) => {
	const [characterId, setCharacterId] = useState(null)

	const { onSearch } = props

	const handleSearch = (e) => {
		e.preventDefault()
		onSearch(characterId)
	}

	const handleCharacterIdChange = (e) => {
		setCharacterId(e.target.value)
	}

	const handleRandomSearch = () => {
		onSearch(Math.floor(Math.random() * 826) + 1)
	}

	return (
		<div>
			<form onSubmit={ handleSearch } className={ styles.searchBarContainer }>
			    <input 
			        type='text' 
			        name='search' 
			        className={ styles.searchBar__input } 
			        onChange={ handleCharacterIdChange }
			    />
			    <button 
			        type='submit' 
			        className={ styles.searchBar__button }
			    >
			        Agregar
			    </button>
			    <button
			        type='button'
			    	onClick={ handleRandomSearch }
			    	className={ styles.searchBar__button }
			    >
			    	Buscar Random
			    </button>
			</form>
		</div>
	)
}

export default SearchBar;