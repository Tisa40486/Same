import React, { useState } from 'react';

interface PseudoFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export default function PseudoField({ value, onChange }: PseudoFieldProps) {
    const [error, setError] = useState('');

    const handleBlur = () => {
        if (value.trim().length > 0 && value.trim().length < 3) {
            setError('Username must have at least 3 characters');
        } else {
            setError('');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        setError(''); // Clear error when user types
    };

    return (
        <div>
            <label>Pseudo</label>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {error && <p>{error}</p>}
        </div>
    );
}