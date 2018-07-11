<template>
  <div id="div-blog">
    <div class="triangle"></div>
    <h1>Mes articles</h1>
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
    name: 'Blog',
    data() {
      return {
        msg: "coucou vue Blog"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $bleuclair: #01717D;
  @font-face {
    font-family: "RobotoReg";
    src: url("../assets/fonts/Roboto-Regular.ttf")
  }

  #div-blog {
    width: 100vw;
    margin: 0;
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
    .nav {
      font-family: 'RobotoReg';
      background-color: white;
      display: flex;
      justify-content: space-around;
      font-size: 12px;
      text-transform: uppercase;
      border-top: $bleuclair 1px solid;
      line-height: 40px;
      height: 40px;
      position: fixed;
      bottom: 0;
      width: 100%;
      .router-link-active {
        color: #01717D;
      }
      .navlink {
        text-decoration: none;
        color: black;
        svg {
          width: 19px;
          height: auto;
          padding-top: 10px;
        }
      }
    }
  }
</style>