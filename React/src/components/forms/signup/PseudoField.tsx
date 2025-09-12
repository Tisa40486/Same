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
        if (value.trim() == null || value.trim() == "") {
            console.log("Username is required")
        }
        if (value.trim().length > 0 && value.trim().length < 3 || value.trim().length > 19) {
            if (value.trim().length == 20) {
                console.log("You can't input more char for you username (20 is the max)")
            } else {
                // setError('Username must habe between 3 and 20 characters');
                console.log('Username must habe between 3 and 20 characters')
            }
        }
        if (reservedWords.includes(value.trim().toLowerCase())) {
            // setError("Username can not be reserved words (like admin, root,...)");
            console.log("Username can not be reserved words (like admin, root,...)")
        }
        if (!/[a-zA-Z]/.test(value)) {
            console.log("Username must contain at least one letter")
        }
        if (specialCharsRegex.test(value)) {
            if (/\s/.test(value)) {
                // setError("Username can not contains spaces");
                console.log("Username cannot contain spaces")
            } else {
                console.log("Username cannot contains others special char then - and _");
            }
        }
        if (/[-_]{2,}/.test(value.trim())) {
            console.log("Username cannot contain successive hyphens or underscores");
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
                maxLength={20}
            />
            {/*{error && <p>{error}</p>}*/}
        </div>
    );
}