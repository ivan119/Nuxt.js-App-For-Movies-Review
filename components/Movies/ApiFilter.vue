<template>
<div>
  <div class="filterBox">
      <button class="button--green" @click="filterFromApi('original_title.asc')">Sort By Title (A-Z)</button>            
      <button class="button--green" @click="filterFromApi('original_title.desc')">Sort By Title (Z-A)</button>
      <button class="button--green" @click="filterFromApi('vote_average.desc')">Sort By Highest Votes</button>
      <button class="button--green" @click="filterFromApi('vote_average.asc')">Sort By Lowest Votes</button>
      <button class="button--green" @click="filterFromApi('release_date.desc')">Sort By Latest Release Date</button>
      <button class="button--green" @click="filterFromApi('release_date.asc')">Sort By Oldest Realese Date</button>
      <input class="input" @input="searchFromApi()" type="text" v-model="search" placeholder="Search...">
      <p class="err" v-if="!$v.search.minLength">Search must be at least 3 characters!</p>
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
    <div class="noresults" v-if="filteredMovies == 0">
        <article>
        <div class="noresults-thumbnail"></div>
        <div class="noresults-content">
          <h1>There are no such a movies here!</h1>
        </div>
      </article>
    </div>
 </div>   
</template>

<script>
import {minLength} from 'vuelidate/lib/validators'
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
  validations:{
    search:{
      minLength: minLength(3),
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
      if(this.search.length > 2)
       await axios.get('https://api.themoviedb.org/3/search/movie?api_key=657cebadc3a22dde36befcc2e341cf6c&language=en-US&query='+ this.search +'&page=1&include_adult=false')
        .then((res)=>{
          this.filteredMovies = res.data.results
        })
        .catch(e => error(e))
    }
  },
  created(){
    if(this.search.length >= 0)
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
  width: 100%;
  border-radius: 2px;
  }
.err{
  color: red;
}
.noresults{
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: rgb(180, 175, 175);
  width: 50%;
  margin-left: 25%;
  text-align: center;
}
.noresults-thumbnail {
  width: 100%;
  height: 250px;
  background-image: url('https://media.giphy.com/media/vupbanYe5f1Xq/giphy.gif');
  background-position: center;
  background-size: cover;
}
.noresults-content{
  margin-top: 2%;
  margin-bottom: 2%;
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

