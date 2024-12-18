import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";
import searchReducer from "../features/searchSlice";
import weatherReducer from "../features/weatherData";
const store = configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
    weatherData: weatherReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
