import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['Auth']
};

// Rename the persistReducer to avoid the conflict
const persistedAuthReducer = persistReducer(persistConfig, AuthSlice);

export const store = configureStore({
    reducer: {
        Auth: persistedAuthReducer, // Use the new name here
    }
});

export const persistor = persistStore(store);
