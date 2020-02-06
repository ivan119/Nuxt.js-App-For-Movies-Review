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
  },
  computed: {
    /* Local Search Filter
    filteredMovies(){
      return this.movies.filter((movie) =>{
        return movie.title.toLowerCase().match(this.search.toLowerCase())
      })
    }*/
  },  
  methods:{
    /* Local Sort Filter Asc 
    sortByAscending(prop){
      this.movies.sort((a,b) => a[prop] < b[prop] ? -1 : 1);
      this.bool = !this.bool  
    },                          */
    /* Local Sort Filter Desc 
    sortByDescending(prop) {
      this.movies.sort((a,b) => a[prop] < b[prop] ?  1 : -1);
      this.bool = !this.bool
    },                         */
  }
}
</script>

<style scoped>

</style>>

