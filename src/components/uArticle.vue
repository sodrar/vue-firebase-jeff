<template>
    <div class="edition">
        <label for="title">Titre</label>
        <input type="text" placeholder="AAA" name="title" id="title">
        <label for="desc">Description</label>
        <textarea placeholder="AAA" name="desc" id="desc"></textarea>
        <p><strong>Status:</strong></p>
    </div>
    <div class="act-btns">
        <button class="btn btn-outline-dark">Dépublier</button>
        <button class="btn btn-success">Mettre à jour</button>
        <button class="btn btn-danger">Supprimer</button>
    </div>
</template>

<script>
import ArticleDataService from '../ArticleDataService';

export default {
    name: 'un-article',
    props: ['article'],
    data() {
        return {
            currentArticle: null,
            message: ''
        }
    },
    watch: {
        article(article) {
            this.currentArticle = { ...article }
            this.message = ''
        }
    },
    methods: {
        updatePublished(status) {
            ArticleDataService.update(this.currentArticle.key, { published: status })
                .then(() => {
                    this.currentArticle.published = status
                    this.message = 'Le statut a bien été MAJ'
                })
                .catch(e => console.log(e))
        },
        updateArticle() {
            const data = {
                title: this.currentArticle.title,
                description: this.currentArticle.description
            }
            ArticleDataService.update(this.currentArticle.key, data)
                .then(() => {
                    this.message = "L'article a bien été MAJ !"
                })
                .catch(e => console.log(e))
        }
    },
    mounted() {
        this.message = ''
        this.currentArticle = {...this.article}
    }
}
</script>

<style scoped>
    .edition {
        display: flex;
        flex-direction: column;
        width: 60%;
    }

    label {
        margin-bottom: 5px;
    }

    input {
        margin-bottom: 10px;
    }
    .act-btns {
        display: inline-flex;
        gap: 15px;
    }

</style>
