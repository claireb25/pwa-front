<template>
<div>{{ msg }}
  <div class="nav">
      <router-link class="navlink" to="/">Accueil</router-link>
      <router-link class="navlink" to="/Projets">Projets</router-link>
      <router-link class="navlink" to="/CV">CV</router-link>
      <router-link class="navlink" to="/Blog">Blog</router-link>
      <router-link class="navlink" to="/Contact">Contact</router-link>
    </div>
</div>
</template>

<script>
export default {
  name: 'CV',
  data () {
    return {
      msg: "coucou vue CV"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
