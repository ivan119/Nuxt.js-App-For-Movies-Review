<template>
<div>
 <!--Single movie details by ID -->
  <div v-if="loadedMovies.backdrop_path === null" class="post-background" :style="{ backgroundImage:'url(http://1.bp.blogspot.com/-MTEE09qZbTU/VQM_hO_-fkI/AAAAAAAAAko/S0suQsrGcQQ/s1600/No-wallpaper-download-besplatne-pozadine-za-desktop-1920-x-1080-HDTV-1080p.jpg)' }"></div>
  <div v-else class="post-background" :style="{ backgroundImage:'url(https://image.tmdb.org/t/p/original' + loadedMovies.backdrop_path + ')' }"></div> 
    <div class="single-post-page">
     <article class="post-preview">
       <div v-if="loadedMovies.poster_path === null"
              class="post-thumbnail" 
              :style="{ backgroundImage:'url(http://www.danishdemodungeon.dk/invocator_files/no-cover-copy.png)' }"></div>
       <div v-else
              class="post-thumbnail" 
              :style="{ backgroundImage:'url(https://image.tmdb.org/t/p/original' + loadedMovies.poster_path + ')' }"></div>
        <div class="post-content">
          <h1>{{ loadedMovies.title }}</h1>
          <hr>
          <h3>Average Vote: {{ loadedMovies.vote_average }}/10</h3>
          <hr>
          <h3>Date Of Release: {{ loadedMovies.release_date }}</h3>
          <hr>
          <h3>Overview:</h3>
          <h4>{{ loadedMovies.overview }}</h4>
          <hr>
          <br>
           <button v-if="!this.$store.state.movies.map(i =>i.id).includes(this.loadedMovies.id)" @click="add()" class="button--green">Add To Favourites</button>
        </div>
      </article>
    </div>
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
      loadedMovies:{
        id:{
          type:Number
        }
      }
    }
  },
  methods:{
    add () {
        this.$store.commit('addedMovies', this.loadedMovies)
        alert('Added to favourites')
      }
  },
  /* async asyncData ({ params }) {
    return axios.get(`https://api.themoviedb.org/3/movie/${params.id}` + '?api_key=657cebadc3a22dde36befcc2e341cf6c')
      .then((res) => {
        return { loadedMovies: res.data }
      })
  } */
  async asyncData({params}) {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}` + '?api_key=657cebadc3a22dde36befcc2e341cf6c')
      return {
        loadedMovies: response.data
      }
    }
}
</script>

<style scoped>

.post-background {
  width: 100%;
  height: 250px;
  background-size: cover;
}
.single-post-page {
  padding: 30px;
  padding-left: 20;
  text-align: center;
  box-sizing: border-box;
  margin-top: 2.5%;
}
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: whitesmoke;
  cursor: pointer;
  display: flex;
  width: 80%;
  margin-left: 10%;
}
.post-thumbnail {
  min-width: 40%;
  height: 500px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.post-content {
  padding: 10px;
  text-align: center;
  margin-top: 8%;
  margin-right: 8%;
  width: 60%;
}
@media (max-width: 1300px){
  .post-content{
    margin-right: 3%;
  }
}
@media (max-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
  .post-preview {
    flex-direction: column;
  }
  .post-details {
    flex-direction: row;
  }
  .post-thumbnail {
  width: 100%;
  height: 355px;
  }
  .post-content {
    margin-top: 0%;
    margin-right: 0%;
    width: 100%;
  }
}
</style>
