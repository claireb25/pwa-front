<template>
    <div id="home">
        <!-- <div class="whitebackground">
            <img class="img" src="static/laptop-2557571_1920.jpg" alt="background"/>
        </div> -->
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
            <router-link class="navlink firstlink" to="/Projets"><span>Projets</span></router-link>
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
            fetch('https://claireb.sadadou.fr/presentation').then(function(response){
                return response.json()
            })
            .then(function(presentation){
            console.log(presentation)
            self.presentation = presentation
            })
        }
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
  src: url("/portfolio/static/fonts/Roboto-Regular.ttf")
}


#home{
    height: 100vh;
    // .whitebackground{
    //     .img {
    //         background-image:cover;
    //         transform-origin: 50% 50%;
    //         height: 100%;
            
    //     }
    // }
      .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 189px 169px 170px;
        border-color:  transparent transparent #dea90f transparent ;
        transform: rotate(-4deg);
        transform-origin: 50% 50%;
        margin-bottom: 40px;
        position: absolute;
        padding: 0;
        top:0;
    }
    .triangle2{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 75px 190px 75px 0;
        border-color: transparent rgba(1, 113, 125, 0.289) transparent transparent;
        right: 0px;
        position: absolute;
        top : 105px;
    }
    .dl{
        display: flex;
        align-items: center;
        
        a{
            margin-bottom: 5px;
              font-size: 14px;
        }
        .triangle3{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 7px 0 12px 22px;
        border-color: transparent transparent transparent #01717D;
        margin-right: 10px;
        
        

    }

    }
   
    font-family: "RobotoReg";
    .contenu-home{
        width: 80%;
        margin : 0 auto 200px auto;
        font-size: 14px;
        position : absolute;
        top :15px;
        left: 39px;
        h1{
            margin: 40px auto 0 auto ;
            font-size: 22px;
            
        }
        h2{
            text-transform: uppercase;
            font-size: 29px;
            margin-top : 9px;
            margin-bottom: 0;
        }
        p.description{
           margin: 25x 0 0 0;
            font-size: 13px;
        }
        .downloadlink{
            text-decoration: none;
            text-transform: uppercase;
            color: $bleuclair;
            font-size: 13px;
            sup{
                font-size:9px;
            }
        }
    }
    .nav{
        width: 100%;
        height: 40%;
        position: fixed;
        bottom:0;
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        background-color: white;
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
        // .firstlink::shadow{
        //     border: 0 1px 3px rgba(0, 0, 0, 0.12),
        //     0 1px 2px rgba(0, 0, 0, 0.24);
        // }
      
    }
}

    
</style>