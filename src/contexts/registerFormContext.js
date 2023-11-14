import { createContext } from 'react';
import { useContext } from 'react';

const RegisterFormContext = createContext();


export const useRegisterFormContext = () => {

    return useContext(RegisterFormContext)
}

export default RegisterFormContext

