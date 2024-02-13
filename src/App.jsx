import './css/index.css'
import { useRoutes } from 'react-router-dom';

import Home from './pages/Home'
import Contact from './pages/Contact';
import Docs from './pages/Docs';

function App() {
    let routes = useRoutes([
        {
            path: '/',
            children: [
                {
                    index: true,
                    element: <Home /> 
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path: '/docs',
                    element: <Docs />
                }
            ]
        }
    ])

    return (
        <>
            <div className='w-full min-h-screen'>
                {routes}
            </div>
        </>
    )
}

export default App
