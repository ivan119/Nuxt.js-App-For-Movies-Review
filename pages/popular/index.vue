<template>
  <div class="home-page">
    <section class="intro">
      <h1>Popular Movies</h1>
    </section>
    <MoviesList :movies="loadedMovies" />
  </div>
</template>

<script>
import MoviesList from '@/components/Movies/MoviesList'
import axios from 'axios'

export default {
  components: {
    MoviesList
  },
  data() {
    return {
      loadedMovies: []
    }
  },
/* asyncData(context) {
    return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=657cebadc3a22dde36befcc2e341cf6c')
      .then(res => {
        return {
          loadedMovies: res.data.results
        }
      })
      .catch(e => context.error(e))
  } */
  async asyncData(context) {
    let response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=657cebadc3a22dde36befcc2e341cf6c')
      return {
        loadedMovies: response.data.results
      }
    }
}
</script>

<style scoped>

</style>
