import styles from './page.module.css'
import Card from '../card/page'

const Cards = (props) => {
	const { characters, onClose } = props

	return (
		<div className={ styles.cards }>
		    { characters.map(character => (
		    	<Card 
		    	    key={ character.id } 
		    	    id={ character.id } 
		    	    name={ character.name }
		    	    specied={ character.species } 
		    	    gender={ character.gender }
		    	    image={ character.image } 
		    	    onClose={ () => onClose(character.id) }
		    	/>
		    ))}
		</div>
	)
}

export default Cards