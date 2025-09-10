import { useState } from 'react';
import PseudoField from "./PseudoField.tsx";

export default function SignupForm() {
    const [pseudo, setPseudo] = useState('');
    return (
        <>
            <h2>SignupForm</h2>
            <PseudoField value={pseudo} onChange={setPseudo} />
        </>
    );
}