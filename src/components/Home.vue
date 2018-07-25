<template>
    <div id="home">
        <div class="triangle"></div>
        <div class="triangle2"></div>
        <div class="contenu-home">
            <div v-bind:key="pres" v-for="pres in presentation"> 
                <h1>{{pres.nom}}</h1>
                <h2>Développeuse Web Junior</h2>
                <p class="description">{{pres.description}}</p>
                <div class="dl">
                <p class="triangle3"></p>
                <a class="downloadlink" v-bind:href=" `${pres.cv}` " download="CV_Claire_Bourgeois" target="_blank">Téléchargez mon CV <sup>PDF</sup></a>
                </div>
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
  src: url("/static/fonts/Roboto-Regular.ttf")
}
#home{
      .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 189px 200px 180px;
        border-color:  transparent transparent #dea90f transparent ;
        transform: rotate(-4deg);
        transform-origin: 50% 50%;
        margin-bottom: 40px;
        position: absolute;
        padding: 0;
    }
    .triangle2{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 75px 190px 75px 0;
        border-color: transparent rgba(1, 113, 125, 0.289) transparent transparent;
        right: 0px;
        position: absolute;
        top : 150px;
    }
    .dl{
        display: flex;
        
        align-items: center;
        a{
            margin-bottom: 5px;
        }
        .triangle3{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px 0 14px 25px;
        border-color: transparent transparent transparent #01717D;
        margin-right: 15px;
        
        

    }

    }
   
    font-family: "RobotoReg";
    .contenu-home{
        width: 80%;
        margin: auto;
        font-size: 14px;
        position : absolute;
        top :15px;
        left: 39px;
        h1{
            margin: 25px auto 0 auto ;
            font-size: 20px;
            
        }
        h2{
            text-transform: uppercase;
            font-size: 20px;
            margin: 0;
        }
        .description{
            font-size: 14px;
        }
        .downloadlink{
            text-decoration: none;
            text-transform: uppercase;
            color: $bleuclair;
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
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
            span{
                margin: auto 39px ;
            }
        }
      
    }
}

    
</style>