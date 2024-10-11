import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
    const navigate = useNavigate();
  function navigateBack() {
    navigate(-1)
  }

  const {tagId} = useParams()
  const location = useLocation()
  const categories = location.pathname.split('/').at(-1)
  return (
    <div>
      <Header />
      <div className='pt-20 w-11/12  max-w-2xl mx-auto'>
        <button className='border-black cursor-pointer border-2 p-2 rounded-md  font-bold ' onClick={navigateBack}>
          Back
        </button>
        <h2>Category: {categories}</h2>
      </div>
      <div className='pb-24'>
      <Blogs />
      </div>
      <Pagination />
    </div>
  )
}

export default CategoryPage
