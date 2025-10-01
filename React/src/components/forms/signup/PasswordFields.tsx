import {useState} from "react";

const sequences = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789',
    'qwertyuiopasdfghjklzxcvbnm', // QWERTY keyboard layout
    'QWERTYUIOPASDFGHJKLZXCVBNM'
];

const specialCharsRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`]/;

interface PasswordFieldsProps {
    passwordValue: string;
    confirmValue: string;
    onPasswordChange: (value: string) => void;
    onConfirmChange: (value: string) => void;
    // User context for validation
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    birthdate?: { month: string; day: string; year: string };
}

export default function PasswordFields({
                                           passwordValue,
                                           confirmValue,
                                           onPasswordChange,
                                           onConfirmChange,
                                           username = '',
                                           firstName = '',
                                           lastName = '',
                                           email = '',
                                           birthdate = { month: '', day: '', year: '' }
                                       }: PasswordFieldsProps)
{
    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
    const [confirmErrors, setConfirmErrors] = useState<string[]>([]);

    const checkConsecutiveRepeated = (password: string): boolean =>
    {
        for (let i = 0; i < password.length - 2; i++) {
            if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
                return true;
            }
        }
        return false;
    };

    const checkSequentialChars = (password: string): boolean =>
    {
        for (const sequence of sequences) {
            for (let i = 0; i < sequence.length - 2; i++) {
                const subSeq = sequence.substring(i, i + 3);
                const reverseSeq = subSeq.split('').reverse().join('');
                if (password.toLowerCase().includes(subSeq.toLowerCase()) ||
                    password.toLowerCase().includes(reverseSeq.toLowerCase())) {
                    return true;
                }
            }
        }
        return false;
    };

    const checkContainsPersonalInfo = (password: string): string[] =>
    {
        const violations = [];
        const lowerPassword = password.toLowerCase();

        if (username && username.length >= 3 && lowerPassword.includes(username.toLowerCase())) {
            violations.push("user's name");
        }
        if (firstName && firstName.length >= 3 && lowerPassword.includes(firstName.toLowerCase())) {
            violations.push("firstName");
        }
        if (lastName && lastName.length >= 3 && lowerPassword.includes(lastName.toLowerCase())) {
            violations.push("lastName");
        }
        if (email && email.length >= 3) {
            const emailParts = email.toLowerCase().split('@');
            if (emailParts[0].length >= 3 && lowerPassword.includes(emailParts[0])) {
                violations.push("email address");
            }
        }
        if (birthdate && (birthdate.year || birthdate.month || birthdate.day)) {
            const { year, month, day } = birthdate;
            if (year && month && day) {
                if (year && lowerPassword.includes(year)) violations.push("birthdate (year)");
                if (month && lowerPassword.includes(month.padStart(2, '0'))) violations.push("birthdate (month)");
                if (day && lowerPassword.includes(day.padStart(2, '0'))) violations.push("birthdate (day)");
            }
        }

        return violations;
    };

    const handlePasswordBlur = () =>
    {
        const trimmedValue = passwordValue.trim();
        const newErrors: string[] = [];

        // Check if empty first
        if (trimmedValue === "") {
            newErrors.push("Required");
            setPasswordErrors(newErrors);
            return;
        }

        if (trimmedValue.length < 16) {
            newErrors.push('Min. 16 characters');
        }

        if (!/[a-z]/.test(passwordValue)) {
            newErrors.push("Must include lowercase");
        }

        if (!/[A-Z]/.test(passwordValue)) {
            newErrors.push("Must include uppercase");
        }

        if (!/[0-9]/.test(passwordValue)) {
            newErrors.push("Must include number");
        }

        if (!specialCharsRegex.test(passwordValue)) {
            newErrors.push("Must include special character");
        }

        if (/\s/.test(passwordValue)) {
            newErrors.push("No spaces allowed");
        }

        if (checkConsecutiveRepeated(passwordValue)) {
            newErrors.push("No 3+ repeated characters");
        }

        if (checkSequentialChars(passwordValue)) {
            newErrors.push("No sequential characters");
        }

        const personalInfoViolations = checkContainsPersonalInfo(passwordValue);
        if (personalInfoViolations.length > 0) {
            newErrors.push(`No personal info (${personalInfoViolations.join(', ')})`);
        }

        setPasswordErrors(newErrors);
    }

    const handleConfirmBlur = () =>
    {
        const trimmedValue = confirmValue.trim();
        const newErrors: string[] = [];

        // Check if empty first
        if (trimmedValue === "" && passwordValue.trim().length > 0) {
            newErrors.push('Required');
            setConfirmErrors(newErrors);
            return;
        }

        if (trimmedValue.length > 0 && trimmedValue !== passwordValue) {
            newErrors.push('Passwords must match');
        }

        setConfirmErrors(newErrors);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        onPasswordChange(e.target.value);
        setPasswordErrors([]);
    };

    const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        onConfirmChange(e.target.value);
        setConfirmErrors([]);
    };

    return (
        <>
            <div className={"card-row"}>
                <label>Password</label>
                <input
                    type="password"
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                    placeholder="Enter your password (min. 16 characters)"
                    className={`glass-input ${passwordErrors.length > 0 ? "glass-wrong-input" : ""}`}
                />
                {passwordErrors.length > 0 && (
                    <span>
                        {passwordErrors.map((err, i) => (
                            <div className={"error-messages"} key={i}>{err}</div>
                        ))}
                    </span>
                )}
            </div>

            <div className={"card-row"}>
                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmValue}
                    onChange={handleConfirmChange}
                    onBlur={handleConfirmBlur}
                    placeholder="Confirm your password"
                    className={`glass-input ${confirmErrors.length > 0 ? "glass-wrong-input" : ""}`}
                />
                {confirmErrors.length > 0 && (
                    <span>
                        {confirmErrors.map((err, i) => (
                            <div className={"error-messages"} key={i}>{err}</div>
                        ))}
                    </span>
                )}
            </div>
        </>
    );
}