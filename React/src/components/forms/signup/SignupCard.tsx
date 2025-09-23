import { Link } from 'react-router-dom'
import SignupForm from './SignupForm';

export default function SignupCard(){
    return (
        <div className={"glass-card"}>
            {/*<div className="glass-filter"></div>*/}
            {/*<div className="glass-overlay"></div>*/}
            {/*<div className="glass-specular"></div>*/}
            <h3>Signup</h3>
            <SignupForm/>
            <span>
                Already have an account?
                <Link to="/login">Login</Link>
            </span>
        </div>
    );
}