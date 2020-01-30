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
    return axios.get('https://api.themoviedb.org/3/movie/upcoming' + '?api_key=657cebadc3a22dde36befcc2e341cf6c' + '&page=3')
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
.intro {
  height: 250px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('https://cdn.mos.cms.futurecdn.net/LSnvRUxYe64Lg7qrMzCGQd.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(40, 150, 240);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
  text-align: center;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
