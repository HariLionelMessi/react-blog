import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setReatedBlogs] = useState([])
  const [loading, setLoading] = useState()
  const location = useLocation()
  const navigate = useNavigate()
  const newBaseURL = 'https://codehelp-apis.vercel.app/api/'

  const { blogId } = useParams()
  console.log(blogId)
  console.log("Fuck u")
  async function fetchingData() {
    try {
      setLoading(true)
      const res = await fetch(`${newBaseURL}get-blog?blogId=${blogId}`)
      const data = await res.json()
      console.log(data)
      setBlog(data?.blog)
      setReatedBlogs(data?.relatedBlogs)
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    fetchingData(blogId)
  }, [location.pathname])

  return (
    <div>
      <Header />
      <div className='pt-28 w-11/12 max-w-2xl mx-auto'>
        <button className='border-black cursor-pointer border-2 p-2 rounded-md  font-bold ' onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div className='w-11/12 max-w-2xl mx-auto'>
        {
          loading
            ? (
              "Loading.........."
            ) :
            blog
              ?
              (
                <>
                <div>
                  <BlogDetails post={blog} />
                </div>
                <h2 className='my-5 font-bold'>Related Blogs</h2>
                {
                  relatedBlogs.map((post, index) => {
                    return (
                      <div key={index} className='mb-3'>
                        <BlogDetails post={post} />
                      </div>
                    )
                  })
                }
                </>
              )
              : ("Nopt foutnd")
        }
      </div>
    </div>
  )
}

export default BlogPage
