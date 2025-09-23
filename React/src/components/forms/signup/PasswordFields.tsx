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

        // Check if empty first
        if (trimmedValue === "") {
            console.log("Password is required");
            return;
        }

        // Collect all validation errors
        const errors: string[] = [];

        if (trimmedValue.length < 16) {
            errors.push('Password must be at least 16 characters long');
        }

        if (!/[a-z]/.test(passwordValue)) {
            errors.push("Password must contain at least one lowercase letter");
        }

        if (!/[A-Z]/.test(passwordValue)) {
            errors.push("Password must contain at least one uppercase letter");
        }

        if (!/[0-9]/.test(passwordValue)) {
            errors.push("Password must contain at least one number");
        }

        if (!specialCharsRegex.test(passwordValue)) {
            errors.push("Password must contain at least one special character");
        }

        if (/\s/.test(passwordValue)) {
            errors.push("Password cannot contain spaces");
        }

        if (checkConsecutiveRepeated(passwordValue)) {
            errors.push("Password cannot contain 3 or more consecutive repeated characters (like 'aaa' or '111')");
        }

        if (checkSequentialChars(passwordValue)) {
            errors.push("Password cannot contain sequential characters (like 'abc', '123', or 'qwerty')");
        }

        const personalInfoViolations = checkContainsPersonalInfo(passwordValue);
        if (personalInfoViolations.length > 0) {
            errors.push(`Password cannot contain your ${personalInfoViolations.join(', ')}`);
        }

        // Log results
        if (errors.length === 0) {
            console.log("Password is valid");
        } else {
            errors.forEach(error => console.log(error));
        }
    }

    const handleConfirmBlur = () =>
    {
        const trimmedValue = confirmValue.trim();

        // Check if empty first
        if (trimmedValue === "" && passwordValue.trim().length > 0) {
            console.log('Please confirm your password');
            return;
        }

        // Collect all validation errors
        const errors: string[] = [];

        if (trimmedValue.length > 0 && trimmedValue !== passwordValue) {
            errors.push('Passwords do not match - the two passwords must be identical');
        }

        // Log results
        if (errors.length === 0 && trimmedValue.length > 0) {
            console.log("Password confirmation is valid");
        } else if (errors.length > 0) {
            errors.forEach(error => console.log(error));
        }
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        onPasswordChange(e.target.value);
        console.clear();
    };

    const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        onConfirmChange(e.target.value);
        console.clear();
    };

    return (
        <div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                    placeholder="Enter your password (min. 16 characters)"
                />
            </div>

            <div>
                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmValue}
                    onChange={handleConfirmChange}
                    onBlur={handleConfirmBlur}
                    placeholder="Confirm your password"
                />
            </div>
        </div>
    );
}