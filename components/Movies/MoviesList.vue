<template>
<div>
  <div class="box"> 
    <input class="input" type="text" v-model="search" placeholder="Search...">
   </div> 
    <section class="movies-list">
      <!--Loop for all movies fetched from server -->
      <MoviesPreview
        v-for="movie in filteredMovies"
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
import MoviesPreview from '@/components/Movies/MoviesPreview'

export default {
  components: {
    MoviesPreview
  },
  data() {
    return {
      search:''
    }
  },
  props:{
    movies: {
        type: Array,
        required: true
    }
  },
  computed: {
    filteredMovies: function(){
      return this.movies.filter((movie) =>{
        return movie.title.match(this.search)
      })
    }
  }

}
</script>

<style scoped>
.movies-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.box{
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: whitesmoke;
  width: 87.3%;
  margin-top: 2%;
  margin-left: 6.4%; 
  height: 50px;
}
.input {
  width: 50%;
  height: 50px;
  border-radius: 2px;
  font: 900;
  }
</style>>

