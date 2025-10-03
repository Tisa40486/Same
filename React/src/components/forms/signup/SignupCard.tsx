import { Link } from 'react-router-dom'
import SignupForm from './SignupForm';

export default function SignupCard(){
    return (
        <div className={"glass-card"}>
            <h1 className={"card-row"}>Sign Up</h1>
            <SignupForm/>
            <span>
                Already have an account?
                <Link className={"card-line"} to="/login"> <b>Login</b></Link>
            </span>
        </div>
    );
}