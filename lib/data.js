import ms from "ms";
import Prismic from 'prismic-javascript'

export function getApi(repositoryName) {
    return Prismic.getApi(`https://${repositoryName}.cdn.prismic.io/api/v2`)
}

export async function getPostList() {
    const api = await getApi('the-blog')
    const response = await api.query(Prismic.Predicates.at('document.type', 'post'))

    const postList = response.results.map(post => {
        const createdAt = (new Date(post.first_publication_date)).getTime()
        return {
            slug: post.uid,
            title: post.data.title,
            content: post.data.content,
            createdAt
        }
    })

    return postList
}

export async function getPost(slug) {
    const api = await getApi('the-blog')
    const post = await api.getByUID('post', slug)

    const createdAt = (new Date(post.first_publication_date)).getTime()
    return {
        slug: post.uid,
        title: post.data.title,
        content: post.data.content,
        createdAt
    }
}