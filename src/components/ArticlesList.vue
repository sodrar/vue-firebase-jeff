<template>
    <div class="conatiner">
        <h1>Liste des articles : </h1>
        <div>
            <ul>
                <li></li>
            </ul>
            <button>oui</button>
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */
import ArticleDataService from '@/ArticleDataService';
import ArticleDetails from './Article.vue'
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
}

</script>