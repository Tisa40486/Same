import { useState } from 'react'
import styled from '@emotion/styled'
import Username from "../signup/Username.tsx"
import PasswordFields from "./PasswordField.tsx"
import {PostUser, type PostUserProps} from '../../../api/User.ts'

const StyledForm = styled.form`
    width: 100%;
`

const SubmitButton = styled.button`
    background-color: ${({ theme }) => theme.glass.bg};
    border: solid 1px ${({ theme }) => theme.glass.border};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    height: ${({ theme }) => theme.input.height};
    padding: 0 18px;
    transition: all ${({ theme }) => theme.transition.fast};
    width: ${({ theme }) => theme.input.width};
    color: ${({ theme }) => theme.colors.textWhite};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};

    &:hover, &:focus {
        background-color: ${({ theme }) => theme.glass.bgHover};
        transform: translateY(-1px);
        box-shadow: ${({ theme }) => theme.shadow.md};
    }

    &:active {
        transform: translateY(0);
    }
`

export default function LoginForm() {
    // const form = useForm()
    // const { handleSubmit } = form

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
        // try {
        //     await PostUser(User)
        // }
        // catch (e) {
        //     console.error(e)
        // }

return (
        <StyledForm method="post">
            <Username value={username} onChange={setUsername} isLogin={true}/>
            <PasswordFields
                passwordValue={password}
                onPasswordChange={setPassword}
            />
            <SubmitButton type="submit">Submit</SubmitButton>
        </StyledForm>
    )
}