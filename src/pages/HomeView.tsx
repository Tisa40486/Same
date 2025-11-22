import { Link } from 'react-router-dom'
import HomePage from '../components/home/HomePage';
import HeaderHomePage from '../components/home/HeaderHomePage';
import HomePost from '../components/home/HomePost';

export default function HomeView() {
    return (
        <>
            <HeaderHomePage />
            <div
                style={{
                    width: '100vw',
                    minHeight: 'calc(100dvh - 80px)', 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '2rem',
                }}
            >
                <HomePage />
                <h1>Home</h1>
                <HomePost />
                <Link to="/signup">Link to Signup Page</Link>
            </div>
        </>
    );
}
