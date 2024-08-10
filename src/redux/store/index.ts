import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import createUserData from '../reducer/userData';
import storeZkProof from '../reducer/zkProof';
export const store = configureStore({
    reducer: {
        [createUserData.name]: createUserData.reducer,
        [storeZkProof.name]: storeZkProof.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: { warnAfter: 128 },
            serializableCheck: { warnAfter: 128 },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
