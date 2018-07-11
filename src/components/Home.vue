<template>
    <div id="home">
        <div v-bind:key="pres" v-for="pres in presentation"> 
            <h1>{{pres.nom}}</h1>
            <h2>Développeuse Web Junior</h2>
            <p>{{pres.description}}</p>
            <a class="downloadlink" href="src/assets/Claire_Bourgeois_CV.pdf" download="cv_claire_bourgeois.pdf">Téléchargez mon CV <sup>PDF</sup></a>
        </div>
      
        <div class="nav">
            <router-link class="navlink" to="/Projets">Projets</router-link>
            <router-link class="navlink" to="/CV">CV</router-link>
            <router-link class="navlink" to="/Blog">Blog</router-link>
            <router-link class="navlink" to="/Contact">Contact</router-link>
        </div>
    </div>    
</template>

<script>

export default {
    name: 'Home',
    data () {
        return{
            presentation:{}
        }
    },
    methods: {
        fetchPresentation() {
            let self = this
            fetch('http://localhost:3000/presentation')
            .then(function(response){
                return response.json()
            })
            .then(function(presentation){
            console.log(presentation)
            self.presentation = presentation
            })
        },
    },
    created: function(){
        this.fetchPresentation()
    }
}
</script>

<style lang="scss" scoped>
    .downloadlink{
        text-decoration: none;
        text-transform: uppercase;
        sup{
            font-size: 10px;
        }
    }
    .nav{
        display: flex;
        flex-direction: column;
        .navlink{
            height:80px;
            text-decoration: none;
            text-transform: uppercase;
        }
    }
    
</style>