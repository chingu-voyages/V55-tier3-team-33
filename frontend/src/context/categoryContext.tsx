"use client"

import React from "react"

type State = {
    selectedCategory: string
}

export const initialState: State = {
    selectedCategory: ""
}

type ActionType = {
    type: "SELECTED_CATEGORY",
    payload: string
}

export const categoryReducer = (state: State = initialState, { type, payload }: ActionType) => {
    switch (type) {
        case "SELECTED_CATEGORY":
            return {
                ...state,
                selectedCategory: payload
            }
        default:
            return state
    }
}

export const CategoryContext = React.createContext<{
    state: State,
    dispatch: React.Dispatch<ActionType>
}>({
    state: initialState,
    dispatch: () => null
})