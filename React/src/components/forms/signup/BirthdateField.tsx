interface BirthdateFieldProps {
    value: { month: string; day: string; year: string };
    onChange: (value: { month: string; day: string; year: string }) => void;
    label?: string;
}

const months = [
    { value: '1', label: 'Jan' },
    { value: '2', label: 'Feb' },
    { value: '3', label: 'Mar' },
    { value: '4', label: 'Apr' },
    { value: '5', label: 'May' },
    { value: '6', label: 'Jun' },
    { value: '7', label: 'Jul' },
    { value: '8', label: 'Aug' },
    { value: '9', label: 'Sep' },
    { value: '10', label: 'Oct' },
    { value: '11', label: 'Nov' },
    { value: '12', label: 'Dec' }
];

const getDaysInMonth = (month: number, year: number): number => {
    if (month === 2) {
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
    }
    return [4, 6, 9, 11].includes(month) ? 30 : 31;
};

const generateYears = (): number[] => {
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    for (let year = currentYear - 100; year <= currentYear - 13; year++) {
        years.push(year);
    }
    return years.reverse();
};

export default function BirthdateField({ value, onChange, label = "Date of Birth" }: BirthdateFieldProps) {
    const handleBlur = () => {
        const { month, day, year } = value;

        // Check if all fields are filled
        if (!month || !day || !year) {
            console.log("All date fields are required");
            return;
        }

        const errors: string[] = [];
        const monthNum = parseInt(month);
        const dayNum = parseInt(day);
        const yearNum = parseInt(year);

        // Validate date logic
        if (dayNum > getDaysInMonth(monthNum, yearNum)) {
            errors.push("Invalid day for the selected month and year");
        }

        // Age validation (must be 14+ years old)
        const birthDate = new Date(yearNum, monthNum - 1, dayNum);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear() -
            (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);

        if (age < 14) {
            errors.push("You must be at least 14 years old to register");
        }

        // Future date validation
        if (birthDate > today) {
            errors.push("Birth date cannot be in the future");
        }

        // Log results
        if (errors.length === 0) {
            console.log("Date is valid");
        } else {
            errors.forEach(error => console.log(error));
        }
    };

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newMonth = e.target.value;
        let newDay = value.day;

        // Adjust day if current day is invalid for new month
        if (value.year && newDay) {
            const maxDays = getDaysInMonth(parseInt(newMonth), parseInt(value.year));
            if (parseInt(newDay) > maxDays) {
                newDay = maxDays.toString();
            }
        }

        onChange({ ...value, month: newMonth, day: newDay });
        console.clear();
    };

    const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange({ ...value, day: e.target.value });
        console.clear();
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newYear = e.target.value;
        let newDay = value.day;

        // Adjust day if current day is invalid for new year (leap year logic)
        if (value.month && newDay) {
            const maxDays = getDaysInMonth(parseInt(value.month), parseInt(newYear));
            if (parseInt(newDay) > maxDays) {
                newDay = maxDays.toString();
            }
        }

        onChange({ ...value, year: newYear, day: newDay });
        console.clear();
    };

    // Generate days based on selected month/year
    const getDayOptions = () => {
        if (!value.month || !value.year) {
            return Array.from({ length: 31 }, (_, i) => i + 1);
        }
        const maxDays = getDaysInMonth(parseInt(value.month), parseInt(value.year));
        return Array.from({ length: maxDays }, (_, i) => i + 1);
    };

    return (
        <div className={"card-multi-fields-row"}>
            <label>{label}</label>
                <select
                    value={value.month}
                    onChange={handleMonthChange}
                    onBlur={handleBlur}
                    className={"glass-dropdown"}
                >
                    <option value="">Month</option>
                    {months.map(month => (
                        <option className={"glass-dropdown-option"} key={month.value} value={month.value}>
                            {month.label}
                        </option>
                    ))}
                </select>

                <select
                    value={value.day}
                    onChange={handleDayChange}
                    onBlur={handleBlur}
                    className={"glass-dropdown"}
                >
                    <option value="">Day</option>
                    {getDayOptions().map(day => (
                        <option className={"glass-dropdown-option"} key={day} value={day.toString()}>
                            {day}
                        </option>
                    ))}
                </select>

                <select
                    value={value.year}
                    onChange={handleYearChange}
                    onBlur={handleBlur}
                    className={"glass-dropdown"}
                >
                    <option value="">Year</option>
                    {generateYears().map(year => (
                        <option className={"glass-dropdown-option"} key={year} value={year.toString()}>
                            {year}
                        </option>
                    ))}
                </select>
        </div>
    );
}