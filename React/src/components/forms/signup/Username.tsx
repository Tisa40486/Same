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
    // Add more
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
            newErrors.push("Username is required");
            setErrors(newErrors);
            return;
        }

        if (!/[a-zA-Z]/.test(value)) {
            newErrors.push("Username must contain at least one letter");
        }

        if (trimmedValue.length < 3 || trimmedValue.length > 19) {
            if (trimmedValue.length === 20) {
                newErrors.push("You can't input more char for your username (20 is the max)");
            } else {
                newErrors.push("Username must have between 3 and 20 characters");
            }
        }

        if (reservedWords.includes(trimmedValue.toLowerCase())) {
            newErrors.push("Username cannot be a reserved word (like admin, root, …)");
        }

        if (specialCharsRegex.test(value)) {
            if (/\s/.test(value)) {
                newErrors.push("Username cannot contain spaces");
            } else {
                newErrors.push("Username cannot contain other special chars than - and _");
            }
        }

        if (/[-_]{2,}/.test(trimmedValue)) {
            newErrors.push("Username cannot contain successive hyphens or underscores");
        }

        setErrors(newErrors);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
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
                <span className="error-messages">
          {errors.map((err, i) => (
              <div key={i}>{err}</div>
          ))}
        </span>
            )}
        </div>
    );
}