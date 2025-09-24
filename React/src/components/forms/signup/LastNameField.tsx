interface LastNameFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export default function LastNameField({ value, onChange }: LastNameFieldProps)
{
    // const [error, setError] = useState('');
    const handleBlur = () =>
    {
        const trimmedValue = value.trim();

        // Check if empty first
        if (trimmedValue === "") {
            console.log("Last name is required");
            return;
        }

        // Collect all validation errors
        const errors: string[] = [];

        if (trimmedValue.length < 2 || trimmedValue.length > 49) {
            if (trimmedValue.length === 20) {
                errors.push("You can't input more char for you last name (50 is the max)");
            } else {
                errors.push('Last name must have between 2 and 50 characters');
            }
        }

        if (!/^[a-zA-Z]+$/.test(value) && !(value.trim() == null || value.trim() == "")) {
            errors.push("Last name can only contain letters")
        }

        // Log results
        if (errors.length === 0) {
            console.log("Last name is valid");
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
            <label>Last Name</label>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={50}
                placeholder={"Last Name"}
                className={"glass-input half-input"}
            />
        </div>
    );
}