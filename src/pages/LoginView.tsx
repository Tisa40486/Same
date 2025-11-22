import {Card} from "../components/forms/signup/SignupCard.tsx";
import LoginForm from "../components/forms/login/LoginForm.tsx"

export default function LoginView() {
    return (
        <>
                <div
                    style={{
                        width: '100vw',
                        height: '100dvh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2rem',
                        boxSizing: 'border-box',
                    }}
                >
                    <Card style={{ maxWidth: 480 }}>
                        <h1>Login</h1>
                        <LoginForm />
                    </Card>
                </div>
        </>
    )
}