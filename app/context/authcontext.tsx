
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

type UserContexttype ={
    user: FirebaseAuthTypes.User | null;
}

const UserAuthContext = createContext<UserContexttype>({user:null});

export const useUser = () => useContext(UserAuthContext);




export const AuthcontextProvider = ({ children }: { children: ReactNode }) => {

    const [user, setuser] = useState<null | FirebaseAuthTypes.User>(null);
useEffect(() => {
    const loged = onAuthStateChanged(getAuth(),setuser);
    return loged;
  },[]);

  return (
    <UserAuthContext.Provider value={{user}}>
        {children}
    </UserAuthContext.Provider>
  );
};
