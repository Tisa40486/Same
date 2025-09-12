import { useState } from 'react';
import PseudoField from "./PseudoField.tsx";
import FirstNameField from "./FirstNameField.tsx";
import LastNameField from "./LastNameField.tsx";

export default function SignupForm() {
    const [pseudo, setPseudo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
        <>
            <h2>SignupForm</h2>
            <PseudoField value={pseudo} onChange={setPseudo} />
            <FirstNameField value={firstName} onChange={setFirstName} />
            <LastNameField value={lastName} onChange={setLastName} />
        </>
    );
}