<template>
    <form>
        <h2>Ajouter un article 💸</h2>
        <label>Titre de l'article</label>
        <input type="text" name="title" id="title">
        <label>Description de l'article</label>
        <input type="text" name="description" id="description">
        <button type="submit" id="submit-form-add">Envoyer</button>
    </form>
</template>

<script setup>
/* eslint-disable */
import ArticleDataService from '@/ArticleDataService'
import { ref } from 'vue'

const name = ref('add-article')
const submitted = ref(false)
const article = ref({
    title: '',
    published: false
})
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
    border: solid 1px coral;
    padding: 25px;
    margin-top: 110px;
    border-radius: 5px;
}

label {
    margin-top: 15px;
    margin-bottom: 5px;
}

#submit-form-add {
    width: 240px;
    margin: auto;
    margin-top: 15px;
    background-color: white;
}
</style>