<template>
  <div class="home-page">
    <section class="intro">
      <h1>Movies</h1>
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
      loadedMovies: [
        
      ]
    }
  },
   async asyncData() {
    return axios.get(process.env.baseUrl + '?api_key=657cebadc3a22dde36befcc2e341cf6c')
      .then(res => {
        return {
          loadedMovies: res.data.items
        }
      })
      .catch(e => context.error(e))
  }
}
</script>

<style scoped>

</style>