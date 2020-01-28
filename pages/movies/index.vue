<template>
    <div class="post-page">
      <MoviesList :movies="loadedMovies"/>
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
   asyncData(context) {
    return axios.get(process.env.baseUrl + '?api_key=657cebadc3a22dde36befcc2e341cf6c')
      .then(res => {
        return {
          loadedMovies: res.data.items
        }
      })
      .catch(e => context.error(e))
  }

  /* 
   created() {
     axios.get(
       process.env.baseUrl + 'api_key=657cebadc3a22dde36befcc2e341cf6c')
      .then(res => {
        this.loadedMovies = res.data.items
      })
  }   
   */
   
}
</script>

<style scoped>
.post-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>