import { getPostByName, getPostsMeta } from '@/lib/posts'
import NotFound from './not-found'
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'

type Props = {
    params: {
        postId: string
    }
}
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const result: Meta[] | undefined = await getPostsMeta()
    if (!result) return []

    return result.map((post) => {
        return {
            postId: post.id,
        }
    })
}

export async function generateMetadata({ params: { postId } }: Props) {
    const post = await getPostByName(`${postId}.mdx`) //deduped!

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: post.meta.title,
    }
}
export default async function Post({ params: { postId } }: Props) {
    const path = postId.concat('.mdx')
    const post = await getPostByName(path)
    let pubDate = ''
    let tags: JSX.Element[]
    if (!post) NotFound()
    else {
        pubDate = getFormattedDate(post.meta.date)
    }

    tags = post?.meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>
            {tag}
        </Link>
    )) as JSX.Element[]

    return (
        <main className="bg-neutral-300 flex-grow px-4 md:px-6 prose prose-xl  dark:prose-invert mx-auto">
            <h2 className="text-3xl mt-4 mb-0 ">{post?.meta.title}</h2>
            <p className="mt-0 text-sm">{pubDate}</p>
            <article>{post?.content}</article>
            <section>
                <h3>Related:</h3>
                <div className="flex flex-row gap-4">{tags}</div>
            </section>
            <p className="mb-10">
                <Link href="/">← Back to home</Link>
            </p>
        </main>
    )
}
