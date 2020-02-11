const state = () => ({
    movies:[]
})
const getters = {
    allMovies: state => state.movies
}
const actions = {}
const mutations = {
    addedMovies(state,movies) {
        state.movies.push(movies)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}