<template>
<div>
 <!--Single movie details by ID -->
  <div class="post-background" :style="{ backgroundImage:'url(https://image.tmdb.org/t/p/original' + loadedMovies.backdrop_path + ')' }"></div> 
    <div class="single-post-page">
     <article class="post-preview">
         <div class="post-thumbnail" 
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
      loadedMovies: []
    }
  },
   asyncData ({ params }) {
    return axios.get(`https://api.themoviedb.org/3/movie/popular/${params.id}` + '?api_key=657cebadc3a22dde36befcc2e341cf6c')
      .then((res) => {
        return { loadedMovies: res.data.results }
      })
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
}
.post-thumbnail {
  min-width: 40%;
  height: auto;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding: 10px;
  text-align: center;
  margin-top: 4%;
}
@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
  .post-preview {
    width: 80%;
    margin-left: 10%;
  }
  .post-details {
    flex-direction: row;
  }
}
</style>
