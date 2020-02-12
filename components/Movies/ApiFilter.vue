<template>
<div>
  <div class="filterBox">
      <button class="button--green" @click="filterFromApi('original_title.asc')">Sort By Title (A-Z)</button>            
      <button class="button--green" @click="filterFromApi('original_title.desc')">Sort By Title (Z-A)</button>
      <button class="button--green" @click="filterFromApi('vote_average.desc')">Sort By Highest Votes</button>
      <button class="button--green" @click="filterFromApi('vote_average.asc')">Sort By Lowest Votes</button>
      <button class="button--green" @click="filterFromApi('release_date.desc')">Sort By Latest Release Date</button>
      <button class="button--green" @click="filterFromApi('release_date.asc')">Sort By Oldest Realese Date</button>
      <input class="input" @input="searchFromApi(search)" type="text" v-model="search" placeholder="Search...">
  </div>
      <p class="err" v-if="!$v.search.minLength">Search must be at least 3 characters!</p>
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
          <h1></h1>
          <h1></h1>
          <h1>There are no such movies here!</h1>
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
  computed:{
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
           setTimeout(() => this.filteredMovies = res.data.results ,500)  
        })
        .catch(e => error(e))
    }
  },
  created(){
     this.filterFromApi('vote_average.desc')
  },
}
</script>

<style scoped>
.filterBox {
  margin-left: 6.4%;
  margin-right: 6.4%;
  margin-top: 0.5%;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
}
.input {
  width: 100%;
  border-radius: 3px;
  margin-top: 1px;
  }
.err{
  color: red;
  position: absolute;
  margin-left: 6.5%;
} 
.noresults-thumbnail {
  background-image: url('https://media.giphy.com/media/vupbanYe5f1Xq/giphy.gif');
}
@media (max-width: 768px) {
  .filterBox {
    flex-direction: column;
    margin-top: 4%;
  }
  .input {
    height: 39px;
    width: 100%; 
  }
}
@media (min-width: 760px) {
  .post-preview {
    width: 100%;
    margin: 10px;
    margin-left: 4%;
    margin-right: 4%;
  }
}
@media (min-width: 850px) {
  .post-preview {
    width: 333px;
    margin: 10px;
  }
}
@media (min-width: 1280px) {
  .post-preview {
    width: 355px;
    margin: 10px;
  }
  .input {
    height: 50px; 
  }
}
@media (min-width: 1600px) {
  .post-preview {
    width: 330px;
    margin: 10px;
  }
  .input {
    height: 40px; 
  }
}
@media (min-width: 1620px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}
</style>>

