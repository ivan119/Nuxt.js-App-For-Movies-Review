<template>
  <div class="home-page">
    <section class="intro">
      <h1>Best Movies Reviews</h1>
    </section>
    <ApiFilter />

  </div>
</template>

<script>
import ApiFilter from '@/components/Movies/ApiFilter'
export default {
  components: {
    ApiFilter,
  }
}
</script>

<style scoped>
.intro h1 {
  background-color: #CC0000;
}
</style>
