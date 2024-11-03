// components/Posts.js
import React, { useEffect, useState } from 'react'
import client from './sanityClient'

const News = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // GROQ Query to fetch posts
    const query = `*[_type == "post"]{
      _id,
      title,
      slug,
      date,
      modified,
      status,
      content,
      excerpt,
      featuredMedia {
        asset->{
          _id,
          url
        }
      },
      sticky,
      author-> {
        name
      },
      categories[]-> {
        title
      },
      tags[]-> {
        title
      }
    }`

    client.fetch(query)
      .then((data) =>{ setPosts(data)
        console.log(data)
      })
      .catch(console.error)
  }, [])

  return (
    <>
   
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center overflow-x-auto max-w-full py-4 px-5 mt-18">
  {posts.slice(702, 2500).map((post) => (
    <div
      key={post.id}
      className="bg-white rounded-lg h-[250px] w-full sm:w-[250px] flex-shrink-0 flex border border-gray-600 flex-col justify-between hover:scale-105 hover:shadow-[0_6px_15px_rgba(0,0,0,0.9)] transition duration-300 ease-in-out"
    >
      <div className="w-full h-[150px] overflow-hidden rounded-t-lg">
        {post.featuredMedia?.asset?.url && (
          <img
            src={post.featuredMedia.asset.url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      <p className="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
        {post.title}
      </p>
    </div>
  ))}
</div>

    </>
  )
}

export default News
