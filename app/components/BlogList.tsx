import { getPostsMeta } from '@/lib/posts'

async function BlogList() {
    const rawMeta = await getPostsMeta()
    console.log(rawMeta)

    return <div>{JSON.stringify(rawMeta)}</div>
}

export default BlogList
