import { Link } from "react-router-dom"

function SubHeading(props) {
    return (
        <p className='font-mono text-black text-2xl'><Link to={props.linkTo}>{props.subHeading}</Link></p>
    )
}

export default SubHeading