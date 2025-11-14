import {Card} from "../components/forms/signup/SignupCard.tsx";
import LoginForm from "../components/forms/login/LoginForm.tsx"

export default function LoginView() {
    return (
        <>
            <Card>
                <h1>Login</h1>
                <LoginForm />
            </Card>
        </>
    )
}