import "./App.css";
import HomePage from "./Pages/HomePage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import BlogPage from "./Pages/BlogPage";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { useContext, useEffect } from "react";


 function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    // // Fetch the inital Blogposts data
    // fetchBlogPosts();
    // // eslint-disable-next-line react-hooks/exhaustive-deps

    // searchparams.get returns string value. thats why changing the type to int
    const page = searchParams.get('page') ?? 1;
    if(location.pathname.includes("tags")){
      // Tag Page 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page))
    }

  }, [location.pathname,location.search]);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/blog/:blogId" element={<BlogPage />} />
        <Route exact path="/tags/:tagId" element={<TagPage />} />
        <Route exact path="/categories/:categoryId" element={<CategoryPage />} />
      </Routes>
    </>
  );
}


export default App;