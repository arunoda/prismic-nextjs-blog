import Link from 'next/link'

export default function createLink(type, element, content, children, index) {
    if (element.data.type === 'post') {
        return (
            <Link href='/post/[slug]' as={`/post/${element.data.uid}`}>
                <a>{content}</a>
            </Link>
        )
    }

    if (element.data.link_type === 'Web') {
        return (
            <a href={element.data.url} target="_blank">{content}</a>
        )
    }

    return null
}