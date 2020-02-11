<template>
    <nuxt-link :to="'/movies/' + id"  class="post-preview">
      <article>
        <div v-if="poster_path === null"
               class="post-thumbnail" 
              :style="{ backgroundImage:'url(http://www.danishdemodungeon.dk/invocator_files/no-cover-copy.png)'}"></div>
        <div v-else 
               class="post-thumbnail" 
              :style="{ backgroundImage:'url(https://image.tmdb.org/t/p/original' + poster_path + ')' }"></div>     
        <div class="post-content">
          <h1>{{ title }}</h1>
          <h1>Average Vote: {{ vote_average }}/10</h1>
          <h1>Date Of Release: {{ release_date }}</h1>
        </div>
      </article>
    </nuxt-link>
</template>

<script>
export default {
   name:'MoviePreview',
   props: {
       id: {},
       title: {},
       overview: {},
       poster_path: {},
       vote_average:{},
       release_date:{}
   },

}
</script>

<style scoped>
</style>

