import {useState} from "react";

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
];

const specialCharsRegex = /[^a-zA-Z0-9_-]/;

interface UsernameFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export default function Username({ value, onChange }: UsernameFieldProps)
{
    const [errors, setErrors] = useState<string[]>([]);

    const handleBlur = () => {
        const trimmedValue = value.trim();
        const newErrors: string[] = [];

        // Check if empty first
        if (trimmedValue === "") {
            newErrors.push("Required");
            setErrors(newErrors);
            return;
        }

        if (!/[a-zA-Z]/.test(value)) {
            newErrors.push("Must include a letter");
        }

        if (trimmedValue.length < 3 || trimmedValue.length > 20) {
            newErrors.push("3-20 characters");
        }

        if (reservedWords.includes(trimmedValue.toLowerCase())) {
            newErrors.push("Reserved by system");
        }

        if (specialCharsRegex.test(value)) {
            newErrors.push("Letters, numbers, - and _ only");
        }

        if (/-{2,}/.test(trimmedValue) || /_{2,}/.test(trimmedValue)) {
            newErrors.push("No consecutive - or _");
        }
        setErrors(newErrors);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valueNoSpaces = e.target.value.replace(/\s/g, '');
        onChange(valueNoSpaces);
        setErrors([]);
    };

    return (
        <div className="card-row">
            <label>Username</label>
            <input
                id="username-input"
                type="text"
                name="username"
                placeholder="Username"
                required
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={20}
                className={`glass-input ${errors.length > 0 ? "glass-wrong-input" : ""}`}
            />
            {errors.length > 0 && (
                <span>
                {errors.map((err, i) => (
                <div className={"error-messages"} key={i}>{err}</div>
                ))}
                </span>
            )}
        </div>
    );
}