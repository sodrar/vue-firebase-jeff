<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <router-link to="/articles">Articles</router-link>
      <router-link to="/add">Ajouter</router-link>
    </nav>
    <router-view></router-view>
    <footer>Mon footer</footer>
  </div>
</template>

