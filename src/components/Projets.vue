<template>
    <div id="div-projets">
        <!-- <svg class="triangle"
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 64 64'
            width='64' height='64'
            fill='currentcolor'>
            <path d='M72 0 M28 65 L0 4 C72 0 0 4 80 0' />
        </svg> -->
        <div class="triangle"></div>
        <h1>Mes projets</h1>
            <div class="margin-bottom">
                <div v-bind:key="projet" v-for="projet in projets">
                    <router-link v-bind:to="`/Projet/${projet.id}`">
                        <div class="mesprojets">
                            <img class="image-projet" v-bind:src="`${projet.mainImg}`" alt="" width="250" height="250">
                            <div class="content-projets">
                                <h2>{{projet.titre}}</h2>
                                <p>{{projet.lieu}}</p>
                                <!-- <p class="annee">{{projet.annee}}</p> -->
                            </div>
                        </div>
                    </router-link>
                </div>
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
    name : 'projets',
    data () {
        return {
            projets: {}
        }  
    },
    methods: {
        fetchProjets() {
            let self = this
            fetch('https://claireb.sadadou.fr/projets').then(function(response){
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
$bleuclair: #01717D;
@font-face{
  font-family: "RobotoReg";
  src: url("/portfolio/static/fonts/Roboto-Regular.ttf")
}
@font-face{
  font-family: "RobotoBold";
  src: url("/portfolio/static/fonts/Roboto-Bold.ttf")
}
#div-projets{
    width: 100vw;
    margin: 0;
    font-family: 'RobotoReg';
    h1{
        font-size: 20px;
        text-transform: uppercase;
        position : absolute;
        top : 10px;
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
        padding:0;
    }
    .margin-bottom{
        margin-bottom: 70px;
        .mesprojets{
        width: 250px;
        height: 250px;
        position: relative;
        margin: 30px auto;
        .image-projet{
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        
        }
        .content-projets{
            position: absolute;
            top: 0;
            background-color: rgba(0, 0, 0, 0.508);
            color: white;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            .annee{
                margin :0;
            }
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
      .router-link-active{
        color: #01717D;
      }
      .navlink{
        text-decoration: none;
        color: black;
        font-family: "RobotoReg";
        svg{
          width: 19px;
          height: auto;
          padding-top: 10px;
        }
      }
    }
}




</style>
