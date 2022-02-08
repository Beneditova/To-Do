<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style>

body{
  background-color : #437584;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4{
  text-align: center;
    opacity: .5;
    margin: 0;
}

.done{
  text-decoration: line-through;
}

.form-switch .form-check-input:checked {
    background-color: #48c1d1;
    border-color: #48c1d1;
    border: none;
}

</style>
