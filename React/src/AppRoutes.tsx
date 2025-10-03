import { Routes, Route } from 'react-router-dom'
import HomeView from './pages/HomeView.tsx'
import SignupView from './pages/SignupView.tsx'
import LoginView from './pages/LoginView.tsx'

export const AppRoutes = () => {
    const initRoutes = () => [
        {
            index: true,
            element: <HomeView />,
            path: '',
            key: 'home'
        },
        {
            element: <HomeView />,
            path: '*',
            key: 'notfound'
        },
        {
            element: <SignupView />,
            path: '/signup',
            key: 'signup'
        },
        {
            element: <LoginView />,
            path: '/login',
            key: 'login'
        }
    ]
    return (
        <Routes>
            {initRoutes().map(({ key, ...routeConfig }) => (
                <Route key={key} {...routeConfig} />
            ))}
        </Routes>
    )
}

export default AppRoutes