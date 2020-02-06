<template>
  <div class="home-page">
    <section class="intro">
      <h1>Upcoming Movies</h1>
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
   asyncData(context) {
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=657cebadc3a22dde36befcc2e341cf6c&page=3')
      .then(res => {
        return {
          loadedMovies: res.data.results
        }
      })
      .catch(e => context.error(e))
  }
}
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
