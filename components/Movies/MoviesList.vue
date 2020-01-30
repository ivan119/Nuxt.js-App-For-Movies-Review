<template>
<div>
  <div class="filterBox">
      <input class="input" type="text" v-model="search" placeholder="Search...">
      <button class="button--green" @click="bool ? sortByDescending('title') : sortByAscending('title')">Sort By Name</button>
      <button class="button--green" @click="bool ? sortByDescending('vote_average') : sortByAscending('vote_average')">Sort By Votes</button>
      <button class="button--green" @click="bool ? sortByDescending('release_date') : sortByAscending('release_date')">Sort By Release Date</button>
      <button class="button--green">Popular</button>
      <button class="button--green">Upcoming</button>
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
        return movie.title.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
  methods:{
    sortByAscending(prop){
      this.movies.sort((a,b) => a[prop] < b[prop] ? -1 : 1);
      this.bool = !this.bool
    },
    sortByDescending(prop) {
      this.movies.sort((a,b) => a[prop] < b[prop] ?  1 : -1);
      this.bool = !this.bool
    }
  }
}
</script>

<style scoped>

.filterBox {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: whitesmoke;
  margin-left: 6.4%;
  margin-right: 6.4%;
  margin-top: 1%;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
}
.input {
  width: 60%;
  height: 36px;
  border-radius: 2px;
  }
.movies-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


</style>>

