<template>
    <div>
        <h2>Ajouter un article 💸</h2>
        <label>Titre de l'article</label>
        <input v-model="article.title" type="text" name="title" id="title">
        <label>Description de l'article</label>
        <input v-model="article.description" type="text" name="description" id="description">
        <button @click="saveArticle()" type="submit" id="submit-form-add">Envoyer</button>
    </div>
</template>

<script setup>
/* eslint-disable */
import ArticleDataService from '@/ArticleDataService';
import { ref } from 'vue'

const name = ref('add-article')
const submitted = ref(false)
const article = ref({
    title: '',
    description: '',
    published: false
})

function saveArticle() {
    let data = {
        title: article.value.title,
        description: article.value.description,
        published: false
    }

    ArticleDataService.create(data)
        .then(() => {
            submitted.value = true
            console.log('article créé')
        })
        .catch(error => {
            console.log(error)
        })
}
</script>

<style scoped>
div {
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