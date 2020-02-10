<template>
<div>
    <section class="movies-list">
      <!--Loop for all movies fetched from server -->
      <MoviesPreview
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :poster_path="movie.poster_path"
        :title="movie.title"
        :vote_average="movie.vote_average"
        :release_date="movie.release_date"
        :overview="movie.overview"/>
    </section>
 </div>   
</template>

<script>
import axios from 'axios'
import MoviesPreview from '@/components/Movies/MoviesPreview'

export default {
  components: {
    MoviesPreview
  },
  data() {
    return {
      search:'',
      bool:{
        type: Boolean
      }
    }
  },
  props:{
    movies:{}
  }
}
</script>

<style scoped>

</style>>

