import { reactive } from "vue"

export const store = reactive({
    items: [],
    apiURL: "https://rickandmortyapi.com/api/character",
    status: ""
})