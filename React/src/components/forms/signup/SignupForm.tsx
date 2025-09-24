import { useState } from 'react';
// import { useForm } from 'react-hook-form'
import Username from "./Username.tsx";
import EmailField from "./EmailField.tsx";
import FirstNameField from "./FirstNameField.tsx";
import LastNameField from "./LastNameField.tsx";
import BirthdateField from "./BirthdateField.tsx";
import PasswordFields from "./PasswordFields.tsx";

export default function SignupForm() {
    // const form = useForm()
    // const { handleSubmit } = form

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState({ month: '', day: '', year: '' });
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <form className={""} method="post">
            <Username value={username} onChange={setUsername}/>
            <EmailField value={email} onChange={setEmail}/>
            <fieldset className={"card-line"}>
                <FirstNameField value={firstName} onChange={setFirstName}/>
                <LastNameField value={lastName} onChange={setLastName}/>
            </fieldset>
            <BirthdateField value={birthdate} onChange={setBirthdate}/>
            <PasswordFields
                passwordValue={password}
                confirmValue={confirmPassword}
                onPasswordChange={setPassword}
                onConfirmChange={setConfirmPassword}
                username={username}
                firstName={firstName}
                lastName={lastName}
                email={email}
                birthdate={birthdate}
            />
            <button className={"card-line"} type="submit">Submit</button>
        </form>
    );
}