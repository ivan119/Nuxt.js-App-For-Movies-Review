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

.post-thumbnail {
  width: auto;
  height: 250px;
  background-position: center;
  background-size: cover;
}

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: whitesmoke;
  width: 50%;
  margin-left: 25%;
  cursor: pointer;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: yellowgreen;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
