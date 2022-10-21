<template>
<div>    
      <router-link to="/">HOME</router-link> <br><br>
      <router-link to="/contact">CONTACT</router-link>  <br><br> 
      <router-link to="/setting">SETTING</router-link><br><br>
   
      <router-view/>
</div>

</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
