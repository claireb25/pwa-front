<template>
<div class="div-cv">
  <div class="triangle"></div>
  <h1>Mon CV</h1>
  <div class="contenu-cv">
     <div v-bind:key="pres" v-for="pres in presentation">
    <a class="downloadlink" v-bind:href=" `${pres.cv}` " download="CV_Claire_Bourgeois" target="_blank">Téléchargez mon CV <sup>PDF</sup></a>
    </div>
    <div class="titre-flex">
      <p class="triangle3"></p>
      <h2>Compétences</h2>
    </div>
    <div class="competences">
      <div v-bind:key="skill" v-for="skill in skills">
      <p class="skill"> {{ skill.skill }}, </p>
      </div>
    </div>
    <div class="titre-flex">
    <p class="triangle3"></p>
    <h2>Experiences</h2></div>
    <div v-bind:key="experience" v-for="experience in experiences">
      <div class="contenu-exp">
        <div class="date">
          <p>{{ experience.debut }}</p>
          <p>{{experience.fin}}</p>
        </div>
        <div class="poste-entreprise">
          <p>{{experience.poste}}</p>
          <p> {{experience.entreprise}}</p>
          <p>{{experience.ville}}</p>
        </div>
      </div>
    </div>
    <div class="formation">
      <div class="titre-flex">
        <p class="triangle3"></p>
      <h2>Formation</h2></div>
      <div v-bind:key="formation" v-for="formation in formations">
        <div class="contenu-formation">
          <div class="date">
            <p>{{ formation.debut }}</p> <p>{{formation.fin}} </p>
          </div>
          <div class="ecole-diplome">
            <p>{{formation.diplome}} </p>
            <p>{{formation.ecole}}, {{formation.ville}}</p>
          </div>
        </div>
      
      </div>
    </div>
   </div>
    <div class="nav">
          <router-link class="navlink" to="/"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="612.008px" height="612.008px" viewBox="0 0 612.008 612.008" style="enable-background:new 0 0 612.008 612.008;"
	 xml:space="preserve">
<g>
	<g id="Shape_379_1_">
		<g>
			<path d="M609.208,298.575L313.306,3.815c-3.987-3.988-10.445-3.988-14.433,0L2.961,298.575c-3.988,3.988-3.907,10.353,0,14.393
				c1.999,2.06,4.61,3.11,7.201,3.131v0.041h71.441v284.865c0,2.815,1.142,5.335,2.988,7.171c1.846,1.856,4.396,3.009,7.211,3.009
				h142.8c5.63,0,10.2-4.569,10.2-10.18V397.556h122.401v203.449c0,5.6,4.569,10.18,10.2,10.18h142.8c5.63,0,10.2-4.569,10.2-10.18
				V316.14h71.899c2.673,0.051,5.191-1,6.905-3.162C612.676,308.541,613.197,302.563,609.208,298.575z"/>
		</g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
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
  name: 'CV',
  data () {
    return {
      skills:{},
      experiences:{},
      formations:{},
      presentation:{}
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
    this.fetchExperience()
    this.fetchSkills()
    this.fetchFormations()
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
.div-cv{
  width: 100vw;
  font-family: "RobotoReg";
  h1{
    font-family: 'RobotoReg';
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
    margin-bottom: 30px;
    padding:0;
  }
 
  .contenu-cv{
    width: 80%;
    margin: auto;
    font-size: 12px;
    div{
      margin-bottom: 10px;
    .downloadlink{
      text-decoration: none;
      text-transform: uppercase;
      color: $bleuclair;
      font-size: 14px;
      margin: auto;
      
      sup{
        
          font-size:9px;
      }
    }
    }
    .competences{
      line-height: 25px;
      text-transform: uppercase;
      .skill{
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 3px;
      }
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
        padding-bottom: 4px
        // margin-bottom: 10px;
      }
    }
    .contenu-exp{
      display: flex;
      align-content: center;

      .poste-entreprise{
        margin-bottom:15px;
        p{
          margin: 0 0 0 10px;
        }
      }
      .date{
        p{
          color : #dea90f;
          margin: 0;
        }
      }
    }
    .contenu-formation{
      display: flex;
      align-content: center;

      .ecole-diplome{
        margin-bottom:15px;
        p{
          margin: 0 0 0 10px;
        }
      }
      .date{
        p{
          color : #dea90f;
          margin: 0;
        }
      }
    }
    .formation{
      margin-bottom: 70px;
    }
  }
  .nav{
      font-family: 'RobotoReg';
      background-color: white;
      display: flex;
      justify-content: space-around;
      font-size: 12px;
      text-transform: uppercase;
      border-top: $bleuclair 1px solid;
      line-height: 40px;
      height :40px;
      position: fixed;
      bottom: 0;
      width: 100%;
      .div-contact .nav .navlink[data-v-cf6573c0], .router-link-active[data-v-cf6573c0]{
        color: #01717D;
      }
      .navlink{
        text-decoration: none;
        color: black;
        svg{
          width: 19px;
          height: auto;
          padding-top: 10px;
        }
      }
  } 
  
}
  
</style>

