import { useState } from "react"
import styled from '@emotion/styled'

const edugeEmailRegex = /^[a-zA-Z]+\.[a-zA-Z]+@eduge\.ch$/

const FieldWrapper = styled.div`
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.md};
`

const StyledInput = styled.input<{ hasError: boolean }>`
    background-color: ${({ theme, hasError }) =>
    hasError ? theme.colors.bgError : theme.glass.bg};
    border: solid 1px ${({ theme, hasError }) =>
    hasError ? theme.colors.borderError : theme.glass.border};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    height: ${({ theme }) => theme.input.height};
    padding: 0 18px;
    transition: all ${({ theme }) => theme.transition.fast};
    width: ${({ theme }) => theme.input.width};
    color: ${({ theme }) => theme.colors.textWhite};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    box-shadow: ${({ hasError, theme }) =>
    hasError ? `0 0 0 5px ${theme.colors.errorBoxShadow}` : 'none'};

    &::placeholder {
        color: ${({ theme }) => theme.colors.textPlaceholder};
    }

    &:focus {
        background-color: ${({ theme }) => theme.glass.bgHover};
        border-color: ${({ theme }) => theme.glass.borderHover};
        box-shadow: ${({ theme }) => theme.glass.focusShadow};
    }
`

const ErrorContainer = styled.span`
    display: block;
`

const ErrorMessage = styled.div`
    color: ${({ theme }) => theme.colors.textError};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    width: ${({ theme }) => theme.input.width};
    padding-left: 5px;
`

interface EmailFieldProps {
    value: string
    onChange: (value: string) => void
}

export default function EmailField({ value, onChange }: EmailFieldProps) {
    const [errors, setErrors] = useState<string[]>([])

    const handleBlur = () => {
        const trimmedValue = value.trim()
        const newErrors: string[] = []

        if (trimmedValue === "") {
            newErrors.push("Required")
            setErrors(newErrors)
            return
        }

        if (!edugeEmailRegex.test(trimmedValue)) {
            newErrors.push("Please enter a valid eduge email")
        }

        setErrors(newErrors)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valueNoSpaces = e.target.value.replace(/\s/g, '')
        onChange(valueNoSpaces)
        setErrors([])
    }

    return (
        <FieldWrapper>
            <label>Email</label>
            <StyledInput
                type="text"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={50}
                placeholder="Email"
                hasError={errors.length > 0}
            />
            {errors.length > 0 && (
                <ErrorContainer>
                    {errors.map((err, i) => (
                        <ErrorMessage key={i}>{err}</ErrorMessage>
                    ))}
                </ErrorContainer>
            )}
        </FieldWrapper>
    )
}