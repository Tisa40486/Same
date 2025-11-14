import { Link } from 'react-router-dom'

export default function NotFoundView() {
    return (
        <>
            <h1>404 not found</h1>
            <Link to="/home">Link to home</Link>
        </>
    );
}