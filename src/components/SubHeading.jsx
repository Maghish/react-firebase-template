import { Link } from "react-router-dom"

function SubHeading() {
    return (
        <p className='font-mono text-black text-3xl'><Link to={props.linkTo}>{props.subHeading}</Link></p>
    )
}

export default SubHeading