import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import client from './sanityClient'
import { PortableText } from '@portabletext/react'

const PostDetail = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null) // Set initial post to null

  useEffect(() => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      date,
      content,
      featuredMedia {
        asset->{
          _id,
          url
        }
      },
      author-> {
        name
      }
    }`

    client.fetch(query, { slug })
      .then((data) => {
        setPost(data)
        console.log(data)
      })
      .catch(console.error)
  }, [slug])

  if (!post) return <p>Loading...</p>

  return (
    <div className="container mx-auto py-4 px-5 max-w-screen-lg">
    <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">{post.title}</h1>
    
    {post.featuredMedia?.asset?.url && (
      <img
        src={post.featuredMedia.asset.url}
        alt={post.title}
        className="w-full h-auto mt-4 rounded-md object-cover sm:mt-6"
      />
    )}
    
    <div className="mt-4 text-gray-700 text-sm sm:text-base">
      <PortableText value={post.content} />
    </div>
    
    <p className="text-xs sm:text-sm text-gray-500 mt-2 text-center sm:text-left">
      By {post.author?.name}
    </p>
  </div>
  
  )
}

export default PostDetail
