<template>
    <div class="div-contact">
      <div class="triangle"></div>
      <h1>Contactez moi</h1>
      <div id="contact">
        
        <p class="acceuil-contact">{{ msg }}</p>
        <a class="link-email" href="mailto:claire.bourgeois.cb@gmail.com">
          <div class="email" v-bind:key="pres" v-for="pres in presentation"> 
            {{pres.email}}
          </div>
        </a>

        <form class="form" @submit.prevent="onSubmit" method="post" action="">
       
             <label for="lastName"></label>
            <input :class="{ error: $v.lastName.$error}" type="text" id="lastName" v-model.trim="lastName"  placeholder="Nom">
            <div v-if="$v.lastName.$dirty">
               <p class="error-message" v-if="!$v.lastName.required">Veuillez entrer votre nom</p>
          
          </div>
     
                <label for="firstName"></label>
                <input  type="text" id="firstName" v-model.trim="firstName" @input="$v.firstName.$touch()" placeholder="Prénom">
                <div v-if="$v.firstName.$dirty">
        
            </div>
          
                <label for="email"></label>
                <input :class="{ error: $v.email.$error }" type="text" id="email" v-model.trim="email" placeholder="contact@me.com">
                <div v-if="$v.email.$dirty">
                  <p class="error-message" v-if="!$v.email.required">Veuillez saisir une adresse e-mail</p>
                  <p class="error-message" v-if="!$v.email.email">Adresse e-mail non valide</p>
              
            </div>
         
                <label for="message"></label>
                <textarea :class="{ error: $v.message.$error }" type="textarea" id="message" v-model.trim="message" @input="$v.message.$touch()" placeholder="Message"></textarea>
                <div v-if="$v.message.$dirty">
                  <p class="error-message" v-if="!$v.message.required">Veuillez entrer un message</p>
                </div>
           
               <input class="btn" type="submit" @click="validate"  value="Envoyer">
        </form>


     
        <!-- <form id="form">
          <input type="text" name="lastname" id="lastname" placeholder="Nom">
          <input type="text" name="firstname" id="firstname"  placeholder="Prénom">
          <input type="email" name="email" id="email"  placeholder="contact@me.com">
          <textarea name="message" id="message" cols="30" rows="8" placeholder="Message"></textarea>
          <input type="submit" value="Envoyer">
        </form> -->
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
// import Vue from 'vue'
// import Vuelidate from 'vuelidate'
// Vue.use(Vuelidate)
import Vuelidate from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'Contact',
  data () {
    return {
      presentation:{},
      msg: "Lorem ipsum dolor sita amet et delectus accommodare his consul.",
      form: {
        lastName: '',
        firstName: '',
        email: '',
        message: ''
      },
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
          validate () {
            console.log('hihi')
            this.$v.$touch() // it will validate all fields
            if (!this.$v.$invalid) { // invalid, becomes true when a validations return false
            //  you dont have validation error.So do what u want to do here
              console.log(this.lastName)
            }
          },
          onSubmit () {
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
              this.submitStatus = 'ERROR'
            } else {
              // do your submit logic here
              this.submitStatus = 'PENDING'
              setTimeout(() => {
                this.submitStatus = 'OK'
              }, 500)
            }
          }
  },
  validations: {
    lastName: {
      required
    },
    firstName: {
      required
    },
    email: {
      required,
      email
    },
    message: {
      required
    }
  },
    created: function(){
        this.fetchPresentation()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$bleuclair: #01717D;
@font-face{
  font-family: "RobotoReg";
  src: url("/static/fonts/Roboto-Regular.ttf")
}
.div-contact{
  width: 100vw;
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
    margin-bottom: 40px;
  }
  

  #contact{
    width : 80%;
    margin: auto;
    font-family: 'RobotoReg';
  
    .acceuil-contact{
      font-size: 14px;
    }
    .link-email{
      text-decoration: none;
      color:$bleuclair;
      .email{
        font-size: 14px;
        margin-bottom: 20px;
      }
    }
    form{
      display: flex;
      flex-direction: column;
      margin: auto;
      // .input{
        input,textarea{
        resize: none;
        color: $bleuclair;
        border-top: none;
        border-left: none;
        border-right:none;
        border-bottom: 1px solid $bleuclair;
        margin : 14px 0;
        padding: 6px 0;
        font-size: 14px;
      }
      input[type="submit"]{
        border: $bleuclair 1px solid;
        background-color: transparent;
        color: $bleuclair;
        text-transform: uppercase;
        width: 100px;
        height: 30px;
        align-content: right;
        align-self: right;
        margin: 15px 0 70px 0;
        cursor: pointer;
      }
      input::placeholder, textarea::placeholder{
        color : $bleuclair;
        font-family: "RobotoReg";
        font-size: 14px;
      }
      .error-message{
        font-size: 12px;
        color: red;
        margin: 0;
      }
    // }
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
    .router-link-exact-active[data-v-004bdd03]{
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
