"use client";

import { useReducer } from "react";
import {
  CategoryContext,
  categoryReducer,
  initialState,
} from "./categoryContext";

export default function RecipeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(categoryReducer, initialState);
  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
}
