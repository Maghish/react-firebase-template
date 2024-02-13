import { Link } from "react-router-dom"

function Docs() {
    return (
        <>
            <p className='font-mono text-black text-5xl'>Docs</p>
            <p className='font-mono text-black text-3xl'><Link to='/'>Home</Link></p>
            <p className='font-mono text-black text-3xl'><Link to='/contact'>Contact</Link></p>
        </>
    )
}

export default Docs