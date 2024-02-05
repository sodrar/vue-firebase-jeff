<template>
    <!-- <div class="container">
        <h1>Liste des articles : </h1>
        <div>
            <ul>
                <li v-for="(unArticle, index) in articles" :key="index" v-on:click="setActiveArticle(unArticle, index)">
                    {{ unArticle.title }}
                </li>
            </ul>
            <button v-on:click="removeAllArticle()" >Tout supprimer</button>
        </div>
    </div>
    <div class="details">
        <div v-if="currentArticle != null">
            <article-details :article="currentArticle" @refreshList="refreshList()"></article-details>
        </div>
        <div v-else>
            <p>Veuillez sélectionner un article.</p>
        </div>
    </div> -->
    <h1>LIste de tous les articles :</h1>
</template>

<script setup>
import ArticleDataService from '@/ArticleDataService';
import { onMounted, ref } from 'vue';

const articles = ref([])

function onDataChange(items) {
    let _articles = []

    items.forEach(item => {
        let key = item.key
        let data = item.val
        _articles.push({
            key: key,
            title: data.title,
            description: data.description,
            published: data.published
        })})
    articles.value = _articles
    console.log(articles.value)
    }

    onMounted(() => {
        ArticleDataService.getAll().on('value', onDataChange)
    })


/* import ArticleDataService from '@/ArticleDataService';
import ArticleDetails from './uArticle.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue';

const name = ref('article-list')
const articles = ref([])
const currentArticle = ref(null)
const currentIndex = ref(-1)

function onDataChange(items) {
    let _articles = []

    items.forEach(item => {
        let key = item.key
        let data = item.val
        _articles.push({
            key: item.key,
            title: data.title,
            description: data.description,
            published: data.published
        })
    })

    articles.value = _articles

    function refreshList() {
        currentArticle.value = null
        currentIndex.value = -1
    }

    function setActiveArticle(article, index) {
        currentArticle.value = article
        currentIndex.value = index
    }

    function removeAllArticle() {
        ArticleDataService.deleteAll()
            .then(() => {
                refreshList()
            })
            .catch(error => {
                console.log(error)
            })
    }

    onMounted(() => {
        ArticleDataService.getAll().on(value, onDataChange)
    })

    onBeforeUnmount(() => {
        ArticleDataService.getAll().off(value, onDataChange)
    }) 
}*/

</script>