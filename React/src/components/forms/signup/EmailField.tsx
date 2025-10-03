import {useState} from "react";

const edugeEmailRegex = /^[a-zA-Z]+\.[a-zA-Z]+@eduge\.ch$/;

interface EmailFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export default function EmailField({ value, onChange }: EmailFieldProps)
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

        if (!edugeEmailRegex.test(trimmedValue)) {
            newErrors.push("Please enter a valid eduge email");
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
            <label>Email</label>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={50}
                placeholder="Email"
                className={`glass-input ${errors.length > 0 ? "glass-wrong-input" : ""}`}
            />
            {errors.length > 0 && (
                <span>
                    {errors.map((err, i) => (
                        <div className="error-messages" key={i}>{err}</div>
                    ))}
                </span>
            )}
        </div>
    );
}