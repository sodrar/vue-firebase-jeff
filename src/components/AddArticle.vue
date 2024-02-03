<template>
    <h2>AJouter un article</h2>
    <form>
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