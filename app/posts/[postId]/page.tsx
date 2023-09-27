
type Props= {
  params:{postId:string}
}

export async function generateStaticParams() {
 // faire un fetch pour obtenir des posts
 //Retourner un tableau mapé de postId
}
 
function Post({params:{postId}}:Props) {
//fetch post by name 
//
  return (
    <div>Post page</div>
  )
}

export default Post