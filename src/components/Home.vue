<template>
    <div id="home">
        <h1>Portfolio</h1>
        {{ msg }}
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
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
            msg: "Claire Bourgeois"
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav{
        display: flex;
        flex-direction: column;
    }
    .navlink{
        height:80px;
        text-decoration: none;
        text-transform: uppercase;
    }
</style>