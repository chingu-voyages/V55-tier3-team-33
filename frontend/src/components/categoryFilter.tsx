"use client";

import React from "react";
import { Badge } from "@components/ui/badge";
import { CategoryContext } from "@context/categoryContext";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
}

export default function CategoryFilter(
  CategoryFilterProps: CategoryFilterProps
) {
  const { state, dispatch } = React.useContext(CategoryContext);

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    type: string
  ) => {
    e.preventDefault();
    dispatch({ type: "SELECTED_CATEGORY", payload: type });
  };

  return (
    <div className="my-12">
      Categories:
      <Badge
        variant="outline"
        className={`m-2 p-1.5 text-xs cursor-pointer ${state.selectedCategory === "" ? "bg-[var(--color-accent)] text-white" : "bg-white text-dark"}`}
        onClick={() => dispatch({ type: "SELECTED_CATEGORY", payload: "" })}
      >
        All
      </Badge>
      {CategoryFilterProps.categories.map((type: string, id) => (
        <Badge
          variant="outline"
          key={`${type}-${id}`}
          className={`text-xs mr-2 p-1.5 cursor-pointer ${state.selectedCategory === type
            ? "bg-[var(--color-accent)] text-white"
            : "bg-white text-black hover:bg-[var(--color-dark)] hover:text-white"
            }`}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleOnClick(e, type)
          }
        >
          {type}
        </Badge>
      ))}
    </div>
  );
}
