import { useState } from "react"
import styled from '@emotion/styled'

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
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
    width: ${({ theme }) => theme.input.widthHalf};
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
    width: ${({ theme }) => theme.input.widthHalf};
    padding-left: 5px;
`

interface LastNameFieldProps {
    value: string
    onChange: (value: string) => void
}

export default function LastNameField({ value, onChange }: LastNameFieldProps) {
    const [errors, setErrors] = useState<string[]>([])

    const handleBlur = () => {
        const trimmedValue = value.trim()
        const newErrors: string[] = []

        if (trimmedValue === "") {
            newErrors.push("Required")
            setErrors(newErrors)
            return
        }

        if (trimmedValue.length < 2 || trimmedValue.length > 50) {
            newErrors.push("2-50 characters")
        }
        setErrors(newErrors)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valueOnlyLetters = e.target.value.replace(/[^a-zA-ZÀ-ÿ\u0100-\u017F\u0180-\u024F'-]/g, '')
        const uppercaseValue = valueOnlyLetters.toUpperCase()
        onChange(uppercaseValue)
        setErrors([])
    }

    return (
        <FieldWrapper>
            <label>Last Name</label>
            <StyledInput
                type="text"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={50}
                placeholder="Last Name"
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