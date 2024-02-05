/* import firebase from "./firebase"

const db = firebase.ref('/articles')

class ArticleDataService {
    getAll() {
        return db
    }

    create(article) {
        return db.push(article)
    }

    update(key, value) {
        db.child(key).update(value)
    }

    delete(key) {
        db.child(key).remove()
    }

    deleteAll() {
        db.remove()
    }
}

export default ArticleDataService */