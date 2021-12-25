import PropTypes  from "prop-types"
import Button from "./Button"




const Header = ({title, showTask, showAddTask}) => {
    
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text = {!showAddTask? "Add":"Close"} onClick = {showTask} />
            
        </header>
    )
}

Header.defaultProps  = {
    title:"default",
}

Header.propTypes  = {
    title: PropTypes.string.isRequired,
}

export default Header

