<template>
    <nuxt-link :to="'/movies/' + id"  class="post-preview">
      <article>
         <div class="post-thumbnail" 
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
       id: {
           type: Number,
           required: true
       },
       title: {
           type: String,
           required: true
       },
       overview: {
           type: String,
           required: true
       },
       poster_path: {
           type: String,
           required: true
       },
       vote_average:{
         type: Number,
         required: true
       },
       release_date:{
         type: String,
         required: true
       }
   }
}
</script>


<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: whitesmoke;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

.post-thumbnail {
  width: 100%;
  height: 250px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
@media (min-width: 850px) {
  .post-preview {
    width: 350px;
    margin: 10px;
  }
}
@media (min-width: 1280px) {
  .post-preview {
    width: 316px;
    margin: 10px;
  }
}

@media (min-width: 1600px) {
  .post-preview {
    width: 325px;
    margin: 10px;
  }
}
@media (min-width: 1620px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}
</style>