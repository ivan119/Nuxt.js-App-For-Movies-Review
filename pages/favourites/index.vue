<template>
    <div>
    <section class="intro">
      <h1>Your Favourite Movies</h1>
    </section>
      <section class="movies-list">
      <!--Loop for all movies from store  -->    
      <nuxt-link v-for="movie in this.$store.state.movies" :key="movie.id" :to="'/movies/' + movie.id"  class="post-preview">
      <article>
        <div v-if="movie.poster_path === null"
               class="post-thumbnail" 
              :style="{ backgroundImage:'url(http://www.danishdemodungeon.dk/invocator_files/no-cover-copy.png)'}"></div>
        <div v-else 
               class="post-thumbnail" 
              :style="{ backgroundImage:'url(https://image.tmdb.org/t/p/original' + movie.poster_path + ')' }"></div>     
        <div class="post-content">
          <h1>{{ movie.title }}</h1>
          <h1>Average Vote: {{ movie.vote_average }}/10</h1>
          <h1>Date Of Release: {{ movie.release_date }}</h1>
        </div>
      </article>
    </nuxt-link>
      </section>
        <div class="noresults" v-if="this.$store.state.movies == 0">
            <article>
                <div class="noresults-thumbnail"></div>
                <div class="noresults-content">
                <h1>You don't have any favourite movies yet!</h1>
                <h3>Be sure to chose some and then come back :) </h3>
                </div>
           </article>
        </div>
    </div>
</template>

<script>

export default { 

}
</script>


<style scoped>
.noresults{
  margin-top: 1%;
  margin-bottom: 5%;
}
.noresults-thumbnail {
  background-image: url('https://images.wallpapersden.com/image/download/missing-link-2019_64458_5120x2880.jpg');
}
</style>