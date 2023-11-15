import { createContext } from 'react';
import { useContext } from 'react';

const AccountContext = createContext();


export const useAccountContext = () => {

    return useContext(AccountContext)
}

export default AccountContext