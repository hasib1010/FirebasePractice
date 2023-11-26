import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../components/Login Modules/Login';
import Registration from '../components/Login Modules/Registration';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
        ]
    }
])

export default routes;
