import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../firebase/config';

type AuthProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  accounts: User | null;
  setAccounts: React.Dispatch<React.SetStateAction<User | null>>;
};

export const AuthContext = createContext<AuthContextType>({
  accounts: null,
  setAccounts: () => null,
});

const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const [accounts, setAccounts] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAccounts(user);
      } else {
        setAccounts(null);
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ accounts, setAccounts }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
