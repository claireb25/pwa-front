<template>
    <div id="home">
        <div class="contenu-home">
            <div v-bind:key="pres" v-for="pres in presentation"> 
                <h1>{{pres.nom}}</h1>
                <h2>Développeuse Web Junior</h2>
                <p class="description">{{pres.description}}</p>
                <a class="downloadlink" href="src/assets/Claire_Bourgeois_CV.pdf" download="cv_claire_bourgeois.pdf">Téléchargez mon CV <sup>PDF</sup></a>
            </div>
        </div>
        <div class="nav">
            <router-link class="navlink" to="/Projets"><span>Projets</span></router-link>
            <router-link class="navlink" to="/CV"><span>CV</span></router-link>
            <router-link class="navlink" to="/Blog"><span>Blog</span></router-link>
            <router-link class="navlink linklast" to="/Contact"><span>Contact</span></router-link>
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
$bleuclair: #01717D;
@font-face{
  font-family: "RobotoReg";
  src: url("../assets/fonts/Roboto-Regular.ttf")
}
#home{
    font-family: "RobotoReg";
    .contenu-home{
        width: 80%;
        margin: auto;
        font-size: 14px;
        h1{
            margin-bottom: 0;
            font-size: 20px;
            
        }
        h2{
            text-transform: uppercase;
            font-size: 20px;
            margin: 0;
        }
        .description{
            font-size: 12px;
        }
        .downloadlink{
            text-decoration: none;
            text-transform: uppercase;
            color: black;
            sup{
                font-size:9px;
            }
        }
    }
    .nav{
        width: 100%;
        height: 50%;
        position: fixed;
        bottom:0;
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        .navlink{
            display: flex;
            border-top: 1px solid black;
            height: 25%;
            text-decoration: none;
            text-transform: uppercase;
            color: black;
            span{
                margin: auto 39px ;
            }
        }
      
    }
}

    
</style>