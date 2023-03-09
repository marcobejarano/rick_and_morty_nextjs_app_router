import styles from './page.module.css'
import SearchBar from '../searchBar/page'

const NavBar = (props) => {
	const { onSearch } = props

	return (
		<div className={ styles.navBarContainer }>
			<SearchBar onSearch={ onSearch } />
		</div>
	)
}

export default NavBar