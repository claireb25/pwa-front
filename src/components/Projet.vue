<template>
  <div id="div-projet">
    <div class="triangle"></div>
     <div class="contenu-projet">
        <h1>{{projet.titre}}</h1>
        <img class="image-projet" v-bind:src="`${projet.mainImg}`" alt="">
        <p>réalisé en {{ projet.annee }} pour {{ projet.lieu }}</p>
    
        <div><span v-html="projet.description"></span></div>
        
        <div class="titre-flex"><p class="triangle3"></p>
        <h2>Compétences</h2></div>
        
          <div class="competences">{{projet.skills}}</div>

        <a :href="`${ projet.lien }`" target="_blank"><p class="decouvrir" >Découvrir le projet </p></a>
        <a :href="`${ projet.git }`" target="_blank"> <p class="decouvrir" >Le code sur github </p></a>
    </div>
    <div class="nav">
      <router-link class="navlink" to="/">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          y="0px" width="612.008px" height="612.008px" viewBox="0 0 612.008 612.008" style="enable-background:new 0 0 612.008 612.008;"
          xml:space="preserve">
          <g>
            <g id="Shape_379_1_">
              <g>
                <path d="M609.208,298.575L313.306,3.815c-3.987-3.988-10.445-3.988-14.433,0L2.961,298.575c-3.988,3.988-3.907,10.353,0,14.393
				c1.999,2.06,4.61,3.11,7.201,3.131v0.041h71.441v284.865c0,2.815,1.142,5.335,2.988,7.171c1.846,1.856,4.396,3.009,7.211,3.009
				h142.8c5.63,0,10.2-4.569,10.2-10.18V397.556h122.401v203.449c0,5.6,4.569,10.18,10.2,10.18h142.8c5.63,0,10.2-4.569,10.2-10.18
				V316.14h71.899c2.673,0.051,5.191-1,6.905-3.162C612.676,308.541,613.197,302.563,609.208,298.575z" />
              </g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>
          </g>
          <g>
          </g>
          <g>
          </g>
        </svg>
      </router-link>
      <router-link class="navlink" to="/Projets">Projets</router-link>
      <router-link class="navlink" to="/CV">CV</router-link>
      <router-link class="navlink" to="/Blog">Blog</router-link>
      <router-link class="navlink" to="/Contact">Contact</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Projet',
    data() {
      return {
        projet:{},
        
      }
    },
    props:['id'],
    methods:{
        fetchProjet(id) {
            let self = this
            fetch('https://claireb.sadadou.fr/projets/'+id)
            .then(function(response){
                return response.json()
            })
            .then(function(projet){
            console.log(projet)
            
            self.projet = projet
            })
      },
    },
    created: function(){
    // this.$route.params.id = Number($route.params.id)
    this.id = Number(this.$route.params.id)
    this.fetchProjet(this.id)
  }
   
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $bleuclair: #01717D;
  @font-face {
    font-family: "RobotoReg";
    src: url("/portfolio/static/fonts/Roboto-Regular.ttf")
  }
  @font-face{
    font-family: "RobotoBold";
    src: url("/portfolio/static/fonts/Roboto-Bold.ttf")
  }
  #div-projet {
    width: 100vw;
    margin: 0;
    font-family: 'RobotoReg';
    h1 {
      font-family: 'RobotoReg';
      font-size: 20px;
      text-transform: uppercase;
      position: absolute;
      top: 10px;
      left: 48px;
    }
    .triangle {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 75px 80px 0 47px;
      border-color: #dea90f transparent transparent transparent;
      transform: rotate(-2deg);
      transform-origin: 50% 50%;
      margin-bottom: 40px;
      padding: 0;
    }
    .contenu-projet{
      width:80%;
      margin: auto auto 80px auto;
      font-size: 14px;
      .image-projet{
        width: 100%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
      }
       .titre-flex{
      display:flex;
      align-items: center;
      margin:0;
         .triangle3{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 0 11px 19px;
        border-color: transparent transparent transparent #dea90f;
        margin-right: 10px;
      }
      h2{
        font-size: 16px;
        padding-bottom: 4px;
        // margin-bottom: 10px;
      }
    }
      div.competences{
        // text-transform: uppercase;
        margin-bottom: 25px;
      
      }
      a{
         text-decoration: none;
          text-transform: uppercase;
          color: black;
          display: block;
        .decouvrir{
          border: #01717D 1px solid;
          width: 60%;
          text-align: center;
          padding: 8px;
          margin: 15px auto;
          
        }
      
      }
    }
    .nav{
      font-family: 'RobotoReg';
      background-color: white;
      display: flex;
      justify-content: space-around;
      font-size: 16px;
      text-transform: uppercase;
      border-top: $bleuclair 1px solid;
      line-height: 45px;
      height :45px;
      position: fixed;
      bottom: 0;
      width: 100%;
      .div-contact .nav .navlink[data-v-cf6573c0], .router-link-active[data-v-cf6573c0]{
        color: #01717D;
      }
      .navlink{
        text-decoration: none;
        color: black;
         font-family: 'RobotoReg';
        svg{
          width: 19px;
          height: auto;
          padding-top: 10px;
        }
      }
  } 
  }
</style>