const edugeEmailRegex = /^[a-zA-Z]+\.[a-zA-Z]+@eduge\.ch$/

interface EmailFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export default function EmailField({ value, onChange }: EmailFieldProps)
{
    // const [error, setError] = useState('');
    const handleBlur = () =>
    {
        const trimmedValue = value.trim();

        // Check if empty first
        if (trimmedValue === "") {
            console.log("Email is required");
            return;
        }

        // Collect all validation errors
        const errors: string[] = [];

        if (!edugeEmailRegex.test(value)) {
            errors.push("Please enter a valid eduge email")
        }

        // Log results
        if (errors.length === 0) {
            console.log("Email is valid");
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
        <div className={"card-row"}>
            <label>Email</label>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={50}
                placeholder={"Email"}
                className={"glass-input"}
            />
        </div>
    );
}