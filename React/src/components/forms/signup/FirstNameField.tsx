import {useState} from "react";

interface FirstNameFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export default function FirstNameField({ value, onChange }: FirstNameFieldProps)
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

        if (trimmedValue.length < 2 || trimmedValue.length > 50) {
            newErrors.push("2-50 characters");
        }
        setErrors(newErrors);
    };

    const capitalizeFirstLetter = (str: string): string => {
        if (str.length === 0) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const valueOnlyLetters = e.target.value.replace(/[^a-zA-ZÀ-ÿ\u0100-\u017F\u0180-\u024F'-]/g, '');
        const capitalizedValue = capitalizeFirstLetter(valueOnlyLetters);
        onChange(capitalizedValue);
        setErrors([]);
    };

    return (
        <div>
            <label>First Name</label>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={50}
                placeholder={"First Name"}
                className={`glass-input half-input ${errors.length > 0 ? "glass-wrong-input" : ""}`}
            />
            {errors.length > 0 && (
                <span>
                {errors.map((err, i) => (
                    <div className={"error-messages error-messages-half"} key={i}>{err}</div>
                ))}
                </span>
            )}
        </div>
    );
}