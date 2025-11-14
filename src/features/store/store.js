import { configureStore } from "@reduxjs/toolkit";
import { testimonialApi } from "@/features/testimonialApi";
import { propertyApi } from "@/features/propertiesApi";

export const store = configureStore({
  reducer: {
    [testimonialApi.reducerPath]: testimonialApi.reducer,
    [propertyApi.reducerPath]: propertyApi.reducer,

  }
});
