<template>
    <div>
      <div id="contact">
        <h1>Contactez moi</h1>
        <p class="acceuil-contact">{{ msg }}</p>
        <a class="link-email" href="mailto:claire.bourgeois.cb@gmail.com">
          <div class="email" v-bind:key="pres" v-for="pres in presentation"> 
            {{pres.email}}
          </div>
        </a>
        <form>
          <input type="text" name="nom" id="name" placeholder="Nom">
          <input type="text" name="prenom" id="firstname" placeholder="Prénom">
          <input type="text" name="email" id="e-mail" placeholder="contact@me.com">
          <textarea name="message" id="mymessage" cols="30" rows="8" placeholder="Message"></textarea>
          <input type="submit" value="Envoyer">
        </form>
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
  name: 'Contact',
  data () {
    return {
      presentation:{},
      msg: "Lorem ipsum dolor sita amet et delectus accommodare his consul."
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$bleuclair: #01717D;
@font-face{
  font-family: "RobotoReg";
  src: url("/assets/fonts/Roboto-Regular.ttf") format("True Type Fonts"),
}

#contact{
  width : 70vw;
  margin: auto;
  h1{
    font-size: 18px;
    text-transform: uppercase;
  }
  .acceuil-contact{
    font-size: 14px;
  }
  .link-email{
    text-decoration: none;
    color:$bleuclair;
    .email{
      font-size: 14px;
    }
  }
  form{
    display: flex;
    flex-direction: column;
  
    margin: auto;
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
      border: $bleuclair 2px solid;
      background-color: transparent;
      color: $bleuclair;
      text-transform: uppercase;
      width: 100px;
      height: 30px;
      align-content: right;
      align-self: right;
      margin: 15px 0;
    }
  }
}
.nav{
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  text-transform: uppercase;
  border-top: $bleuclair 1px solid;
  height: 40px;
  line-height: 40px;
  .navlink{
    text-decoration: none;
    color: black;
  }
}

</style>
