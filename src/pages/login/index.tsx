import Input from "@shared/components/Input"
import { useLoginPage } from "./hook"

const LoginPage = () =>  {
    const {} = useLoginPage()

    return (
        <div>
            <h1>Login</h1>
            <Input />
            <Input />
        </div>
    )
}

export default LoginPage