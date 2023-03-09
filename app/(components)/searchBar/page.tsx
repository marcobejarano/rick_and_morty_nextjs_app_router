import styles from './page.module.css'

const SearchBar = (props) => {
	const { onSearch } = props

	const handleSearch = (e) => {
		e.preventDefault();
		const characterId = e.target.search.value
		onSearch(characterId)
	}
	
	return (
		<div>
			<form onSubmit={ handleSearch } className={ styles.searchBarContainer }>
			    <input 
			        type='text' 
			        name='search' 
			        className={ styles.searchBar__input } 
			    />
			    <button 
			        type='submit' 
			        className={ styles.searchBar__button }
			    >
			        Agregar
			    </button>
			</form>
		</div>
	)
}

export default SearchBar;