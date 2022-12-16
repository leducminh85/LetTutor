import React, {useContext} from "react";

export const AuthContext = useContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    const login = ()=>{
        setUserToken('s');
        setIsLoading(false);
    }

    const logout = ()=>{
        setUserToken(null);
        setIsLoading(false);
    }

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken }}>
            {children}
        </AuthContext.Provider>
    )
}