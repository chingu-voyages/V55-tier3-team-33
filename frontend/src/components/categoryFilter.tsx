"use client";

import React from "react";
import { Badge } from "@components/ui/badge";
import { CategoryContext } from "@context/categoryContext";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
}

function CategoryFilter(CategoryFilterProps: CategoryFilterProps) {
  const { state, dispatch } = React.useContext(CategoryContext);

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    type: string
  ) => {
    e.preventDefault();
    dispatch({ type: "SELECTED_CATEGORY", payload: type });
    console.log("cat", state.selectedCategory);
  };

  return (
    <div className="my-12">
      Categories:
      <Badge className="bg-[var(--color-accent)] m-2 p-1.5 text-xs">All</Badge>
      {CategoryFilterProps.categories.map((type: string, id) => (
        <Badge
          variant="outline"
          key={`${type}-${id}`}
          className="
                    text-xs
                        bg-white cursor-pointer
                        text-black
                        mr-2
                        p-1.5
                        hover:bg-[var(--color-dark)]
                        hover:text-white
                         cursor-pointer
                        "
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

export default CategoryFilter;
