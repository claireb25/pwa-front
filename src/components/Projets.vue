<template>
    <div id="projets">
        <div v-bind:key="projet" v-for="projet in projets">
            <h2>{{projet.titre}}</h2>
            <p>{{projet.lieu}}</p>
            <img src="" alt="img_projet" width="100" height="100">
            
        </div>
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
    name : 'projets',
    data () {
        return {
            projets: {}
        }  
    },
    methods: {
        fetchProjets() {
            let self = this
            fetch('http://localhost:3000/projets').then(function(response){
                return response.json()
            })
            .then(function(projets){
                console.log(projets)
                self.projets = projets
            })
        },
    },
    created: function() {
        this.fetchProjets()
    }  
}
</script>
<style lang="scss" scoped>

#projets{
    width: 100vw;
    margin: 0;
    .nav{
        width: 100%;
        margin: 0;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        background-color: white;
        .navlink{
            height: 40px;
        }
    }
}




</style>
