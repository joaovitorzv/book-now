import React, { createContext, useCallback, useState, useContext } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@booknow:token');
    const user = localStorage.getItem('@booknow:user');

    if (user && token) {
      return { token, user: JSON.parse(token) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(({ email, password }) => {
    // user api session request TODO
    const data = {
      token: 'usertoken123456',
      user: {
        id: '123abc',
        name: 'João vitor',
        email: 'joaovitor@gmail.com',
      }
    }

    const { token, user } = data;

    localStorage.setItem('@booknow:token', token);
    localStorage.setItem('@booknow:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@booknow:token');
    localStorage.removeItem('@booknow:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be user within an AuthProvider');
  }

  return context;
}