// import React, { useState } from 'react';

const reservedWords = [
    'admin',
    'root',
    'user',
    'guest',
    'anonymous',
    'moderator',
    'administrator',
    'system',
    'null',
    'undefined'
    // Add more
];

const specialCharsRegex = /[^a-zA-Z0-9_-]/;

interface PseudoFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export default function PseudoField({ value, onChange }: PseudoFieldProps)
{
    // const [error, setError] = useState('');
    const handleBlur = () =>
    {
        if (value.trim().length > 0 && value.trim().length < 3 || value.trim().length > 20) {
            // setError('Username must habe between 3 and 20 characters');
            console.log('Username must habe between 3 and 20 characters')
        }
        if (reservedWords.includes(value.trim().toLowerCase())) {
            // setError("Username can not be reserved words (like admin, root,...)");
            console.log("Username can not be reserved words (like admin, root,...)")
        }
        if (/\s/.test(value)) {
            // setError("Username can not contains spaces");
            console.log("Username can not contains spaces")
        }
        if (!/[a-zA-Z]/.test(value)) {
            console.log("Username must contain at least one letter")
        }
        if (specialCharsRegex.test(value)) {
            console.log("Username can only contain letters, numbers, underscores (_), and hyphens (-)");
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        onChange(e.target.value);
        console.clear();
        // setError(''); // Clear error when user types
    };

    return (
        <div>
            <label>Pseudo</label>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={"border-2"}
            />
            {/*{error && <p>{error}</p>}*/}
        </div>
    );
}