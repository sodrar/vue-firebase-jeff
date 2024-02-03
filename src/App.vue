<template>
  <div id="app">
    <div class="nav-container">
      <nav class="menu">
        <p class="alien">👽</p>
        <RouterLink to="/">Home</RouterLink>
        <router-link to="/articles">Articles</router-link>
        <router-link to="/add">Ajouter</router-link>
        <p class="alien">👽</p>
        <p class="project-name">🔥 VUE 🔥 Firebase Project 🔥</p>
      </nav>
    </div>
    <router-view></router-view>
    <footer>Mon footer</footer>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  gap: 25px;
  padding-top: 15px;
  justify-content: center;
  align-self: center;
}
.alien {
  font-size: 18px;
}
.nav-container {
  border-bottom: 1px solid #86D72F;
  box-shadow: 0px 8px 11px 0px #86D72F;
  margin-bottom: 20px;
}
.project-name {
  text-decoration: underline;
}
</style>

