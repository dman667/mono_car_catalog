import React, {createContext, useContext} from 'react'
import {useLocalObservable} from 'mobx-react-lite'
import createRootStore from './stores'


const StoreContext = createContext(null);

function StoreProvider({children}){
    const store = useLocalObservable(createRootStore)

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
};


export default StoreProvider;

export const useRootStore = () => useContext(StoreContext);

export const useAuthStore = () => {
    const {authStore} = useContext(StoreContext);
    return authStore;
};