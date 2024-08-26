'use client'
import { Provider } from 'react-redux';
import { store, persistor } from "@/redux/store.js";
import { PersistGate } from "redux-persist/integration/react";




const ReduxProvider = ({children}) => {
  return (
    <PersistGate persistor={persistor}>
    <Provider store={store}>
      {children}
    </Provider>
    </PersistGate>
  )
}

export default ReduxProvider
