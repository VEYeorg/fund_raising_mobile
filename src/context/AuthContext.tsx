import React, {ReactNode, createContext, useContext} from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
};

interface AuthContextProviderProps {
  children: ReactNode;
}
export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  let [isLoggedIn, setIsLoggin] = React.useState(false);

  const login = () => {
    // Add your login logic here
    setIsLoggin(true);
  };

  const logout = () => {
    // Add your logout logic here
    setIsLoggin(false);
  };

  const value = {
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
