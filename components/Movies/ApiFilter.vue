<template>
<div>
  <div class="filterBox">
      <button class="button--green" @click="filterFromApi('original_title.asc')">Sort By Title (A-Z)</button>            
      <button class="button--green" @click="filterFromApi('original_title.desc')">Sort By Title (Z-A)</button>
      <button class="button--green" @click="filterFromApi('vote_average.desc')">Sort By Highest Votes</button>
      <button class="button--green" @click="filterFromApi('vote_average.asc')">Sort By Lowest Votes</button>
      <button class="button--green" @click="filterFromApi('release_date.desc')">Sort By Latest Release Date</button>
      <button class="button--green" @click="filterFromApi('release_date.asc')">Sort By Oldest Realese Date</button>
      <input class="input" type="text" v-model="search" placeholder="Search...">
      <button class="button--grey" @click="searchFromApi()">Search</button>
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
import axios from 'axios'
import MoviesPreview from '@/components/Movies/MoviesPreview'

export default {
  components: {
    MoviesPreview
  },
  data() {
    return {
      search:'',
      filteredMovies:{}
    }
  },  
  methods:{
    /* API Sort Filter */
    async filterFromApi(prop){
      await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=657cebadc3a22dde36befcc2e341cf6c&language=en-US&sort_by='+ prop +'&include_adult=false&include_video=false&page=8')
        .then((res)=>{
          this.filteredMovies = res.data.results
        })
        .catch(e => error(e))
    },
    /* API Search Filter */
    async searchFromApi(){
      await axios.get('https://api.themoviedb.org/3/search/movie?api_key=657cebadc3a22dde36befcc2e341cf6c&language=en-US&query='+ this.search +'&page=1&include_adult=false')
        .then((res)=>{
          this.filteredMovies = res.data.results
        })
        .catch(e => error(e))
    }
  },
  mounted(){
    this.filterFromApi('original_title.asc')
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
  width: 80%;
  border-radius: 2px;
  }

@media (min-width: 1601px) {
  .input {
    height: 40px; 
  }
}
@media (max-width: 768px) {
  .filterBox {
    flex-direction: column;
  }
  .input {
    height: 39px;
    width: 100%; 
  }
}
</style>>

