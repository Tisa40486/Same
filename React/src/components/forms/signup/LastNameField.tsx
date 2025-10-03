import {useState} from "react";

interface LastNameFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export default function LastNameField({ value, onChange }: LastNameFieldProps)
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const valueOnlyLetters = e.target.value.replace(/[^a-zA-ZÀ-ÿ\u0100-\u017F\u0180-\u024F'-]/g, '');
        const uppercaseValue = valueOnlyLetters.toUpperCase();
        onChange(uppercaseValue);
        setErrors([]);
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