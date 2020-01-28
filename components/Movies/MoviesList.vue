<template>
    <section class="movies-list">
      <MoviesPreview
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :poster_path="movie.poster_path"
        :title="movie.title"
        :overview="movie.overview"/>
    </section>
</template>

<script>
import MoviesPreview from '@/components/Movies/MoviesPreview'

export default {
  components: {
    MoviesPreview
  },
  props:{
    movies: {
        type: Array,
        required: true
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
</style>>

