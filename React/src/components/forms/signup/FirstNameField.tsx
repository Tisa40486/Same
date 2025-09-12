interface FirstNameFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export default function FirstNameField({ value, onChange }: FirstNameFieldProps)
{
    // const [error, setError] = useState('');
    const handleBlur = () =>
    {
        if (value.trim() == null || value.trim() == "") {
            console.log("First name is required")
        }
        if (value.trim().length == 50) {
                console.log("You cannot input more chars (max name length = 50)")
        }
        if (!/^[a-zA-Z]+$/.test(value) && !(value.trim() == null || value.trim() == "")) {
            console.log("First Name can only contain letters")
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
            <label>First Name</label>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={"border-2"}
                maxLength={50}
            />
            {/*{error && <p>{error}</p>}*/}
        </div>
    );
}