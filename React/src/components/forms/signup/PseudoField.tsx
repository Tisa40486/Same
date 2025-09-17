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
    const handleBlur = () =>
    {
        const trimmedValue = value.trim();

        // Check if empty first
        if (trimmedValue === "") {
            console.log("Username is required");
            return;
        }

        // Collect all validation errors
        const errors: string[] = [];

        if (!/[a-zA-Z]/.test(value)) {
            errors.push("Username must contain at least one letter");
        }

        if (trimmedValue.length < 3 || trimmedValue.length > 19) {
            if (trimmedValue.length === 20) {
                errors.push("You can't input more char for you username (20 is the max)");
            } else {
                errors.push('Username must have between 3 and 20 characters');
            }
        }

        if (reservedWords.includes(trimmedValue.toLowerCase())) {
            errors.push("Username can not be reserved words (like admin, root,...)");
        }

        if (specialCharsRegex.test(value)) {
            if (/\s/.test(value)) {
                errors.push("Username cannot contain spaces");
            } else {
                errors.push("Username cannot contains others special char then - and _");
            }
        }

        if (/[-_]{2,}/.test(trimmedValue)) {
            errors.push("Username cannot contain successive hyphens or underscores");
        }

        // Log results
        if (errors.length === 0) {
            console.log("Username is valid");
        } else {
            errors.forEach(error => console.log(error));
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        onChange(e.target.value);
        console.clear();
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
                maxLength={20}
            />
        </div>
    );
}