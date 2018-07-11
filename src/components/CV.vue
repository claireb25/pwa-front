<template>
<div>
  <h1>Mon CV</h1>
  <h2>Compétences</h2>
    <div v-bind:key="skill" v-for="skill in skills">
      <li>{{ skill.skill }}</li>
    </div>
  <h2>Experiences</h2>
  <ul v-bind:key="experience" v-for="experience in experiences">
    <li>{{ experience.debut }} - {{experience.fin}} {{experience.poste}} {{experience.entreprise}} {{experience.ville}}, {{experience.pays}} {{experience.missions}}</li>
  </ul>
  <h2>Formation</h2>
   <ul v-bind:key="formation" v-for="formation in formations">
    <li>{{ formation.debut }} - {{formation.fin}} {{formation.diplome}} {{formation.ecole}} {{formation.ville}}</li>
  </ul>
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
      skills:{},
      experiences:{},
      formations:{}
    }
  },
  methods:{
    fetchExperience() {
        let self = this
        fetch('http://localhost:3000/experiences').then(function(response){
            return response.json()
        })
        .then(function(experiences){
          console.log(experiences)
          self.experiences = experiences
        })
    },
    fetchSkills() {
        let self = this
        fetch('http://localhost:3000/competences').then(function(response){
            return response.json()
        })
        .then(function(skills){
          console.log(skills)
          self.skills= skills
        })
    },
    fetchFormations() {
        let self = this
        fetch('http://localhost:3000/formations').then(function(response){
            return response.json()
        })
        .then(function(formations){
          console.log(formations)
          self.formations= formations
        })
    },
  },
  created: function(){
    this.fetchExperience()
    this.fetchSkills()
    this.fetchFormations()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
