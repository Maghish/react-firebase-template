import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <p className='font-mono text-black text-5xl'>Home</p>
            <p className='font-mono text-black text-3xl'><Link to="/contact">Contact</Link></p>
            <p className='font-mono text-black text-3xl'><Link to="/docs">Docs</Link></p>
        </>
    )
}

export default Home