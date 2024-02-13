import { Link } from "react-router-dom"

function Contact() {
    return (
        <>
            <p className='font-mono text-black text-5xl'>Contact</p>
            <p className='font-mono text-black text-3xl'><Link to='/'>Home</Link></p>
            <p className='font-mono text-black text-3xl'><Link to='/docs'>Docs</Link></p>
        </>
    )
}

export default Contact