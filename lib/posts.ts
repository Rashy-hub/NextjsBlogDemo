type FileTree = {
    tree: [{ path: string }]
}

export async function getPostByName(
    filename: string
): Promise<string | undefined> {
    const res = await fetch(
        `https://raw.githubusercontent.com/Rashy-hub/blogpost-davegray/main/${filename}`,
        {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                'X-GitHub-Api-Version': '2022-11-28',
            },
        }
    )

    if (!res.ok) return undefined
    const rawMDX = await res.text()
    return rawMDX
}
export async function getPostsMeta() {
    const res = await fetch(
        'https://api.github.com/repos/Rashy-Hub/blogpost-davegray/git/trees/main?recursive=1',
        {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                'X-GitHub-Api-Version': '2022-11-28',
            },
        }
    )

    if (!res.ok) return undefined
    const JsonTrees: FileTree = await res.json()

    const fileNames = JsonTrees.tree.map((file) => {
        return file.path
    })
    for (const filename of fileNames) {
        const
    }
    return fileNames
}
