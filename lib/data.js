import ms from "ms";

export async function getPostList() {
    return [
        {
            title: 'Hello Next.js',
            slug: 'Hello-Next',
            createdAt: Date.now() - ms('1d')
        },
        {
            title: 'Hello World',
            slug: 'Hello-World',
            createdAt: Date.now() - ms('2d')
        }
    ]
}

export async function getPost(slug) {
    const title = slug.split('-').join(' ')
    return {
        slug,
        title,
        content: `This is about ${title}.`,
        createdAt: Date.now() - ms('1d')
    }
}