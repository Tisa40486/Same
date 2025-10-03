import styled from '@emotion/styled'

const FieldRow = styled.div`
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    display: flex;
    justify-content: space-between;
`

const StyledSelect = styled.select`
    background-color: ${({ theme }) => theme.glass.bg};
    border: solid 1px ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    height: ${({ theme }) => theme.input.height};
    padding: 0 18px;
    transition: all ${({ theme }) => theme.transition.fast};
    color: ${({ theme }) => theme.colors.textWhite};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    width: ${({ theme }) => theme.input.widthThird};
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 12px center;
    background-repeat: no-repeat;
    background-size: 16px;
    cursor: pointer;

    option {
        color: #333;
    }

    &:focus {
        background-color: ${({ theme }) => theme.glass.bgHover};
        border-color: ${({ theme }) => theme.glass.borderHover};
        box-shadow: ${({ theme }) => theme.glass.focusShadow};
    }
`

interface BirthdateFieldProps {
    value: { month: string; day: string; year: string }
    onChange: (value: { month: string; day: string; year: string }) => void
    label?: string
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
]

const getDaysInMonth = (month: number, year: number): number => {
    if (month === 2) {
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28
    }
    return [4, 6, 9, 11].includes(month) ? 30 : 31
}

const generateYears = (): number[] => {
    const currentYear = new Date().getFullYear()
    const years: number[] = []
    for (let year = currentYear - 100; year <= currentYear - 13; year++) {
        years.push(year)
    }
    return years.reverse()
}

export default function BirthdateField({ value, onChange, label = "Date of Birth" }: BirthdateFieldProps) {
    const handleBlur = () => {
        const { month, day, year } = value

        if (!month || !day || !year) {
            console.log("All date fields are required")
            return
        }

        const errors: string[] = []
        const monthNum = parseInt(month)
        const dayNum = parseInt(day)
        const yearNum = parseInt(year)

        if (dayNum > getDaysInMonth(monthNum, yearNum)) {
            errors.push("Invalid day for the selected month and year")
        }

        const birthDate = new Date(yearNum, monthNum - 1, dayNum)
        const today = new Date()
        const age = today.getFullYear() - birthDate.getFullYear() -
            (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0)

        if (age < 14) {
            errors.push("You must be at least 14 years old to register")
        }

        if (birthDate > today) {
            errors.push("Birth date cannot be in the future")
        }

        if (errors.length === 0) {
            console.log("Date is valid")
        } else {
            errors.forEach(error => console.log(error))
        }
    }

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newMonth = e.target.value
        let newDay = value.day

        if (value.year && newDay) {
            const maxDays = getDaysInMonth(parseInt(newMonth), parseInt(value.year))
            if (parseInt(newDay) > maxDays) {
                newDay = maxDays.toString()
            }
        }

        onChange({ ...value, month: newMonth, day: newDay })
        console.clear()
    }

    const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange({ ...value, day: e.target.value })
        console.clear()
    }

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newYear = e.target.value
        let newDay = value.day

        if (value.month && newDay) {
            const maxDays = getDaysInMonth(parseInt(value.month), parseInt(newYear))
            if (parseInt(newDay) > maxDays) {
                newDay = maxDays.toString()
            }
        }

        onChange({ ...value, year: newYear, day: newDay })
        console.clear()
    }

    const getDayOptions = () => {
        if (!value.month || !value.year) {
            return Array.from({ length: 31 }, (_, i) => i + 1)
        }
        const maxDays = getDaysInMonth(parseInt(value.month), parseInt(value.year))
        return Array.from({ length: maxDays }, (_, i) => i + 1)
    }

    return (
        <FieldRow>
            <label>{label}</label>
            <StyledSelect
                value={value.month}
                onChange={handleMonthChange}
                onBlur={handleBlur}
            >
                <option value="">Month</option>
                {months.map(month => (
                    <option key={month.value} value={month.value}>
                        {month.label}
                    </option>
                ))}
            </StyledSelect>

            <StyledSelect
                value={value.day}
                onChange={handleDayChange}
                onBlur={handleBlur}
            >
                <option value="">Day</option>
                {getDayOptions().map(day => (
                    <option key={day} value={day.toString()}>
                        {day}
                    </option>
                ))}
            </StyledSelect>

            <StyledSelect
                value={value.year}
                onChange={handleYearChange}
                onBlur={handleBlur}
            >
                <option value="">Year</option>
                {generateYears().map(year => (
                    <option key={year} value={year.toString()}>
                        {year}
                    </option>
                ))}
            </StyledSelect>
        </FieldRow>
    )
}