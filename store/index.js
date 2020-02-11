const state = () => ({
    movies:[]
})
const getters = {
    allMovies: state => state.movies
}
const actions = {}
const mutations = {
    addedMovies(state,movies) {
        state.movies.unshift(movies)
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}