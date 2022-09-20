import axios from 'axios'

const pokeAki = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export default pokeAki;