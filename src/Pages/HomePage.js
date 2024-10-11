import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        <Header />
        <div>
            <div className='py-24'>
            <Blogs />
            </div>
            <Pagination />
        </div>
    </div>
  )
}

export default Home
