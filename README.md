# Learned

1. useNavigate from React Router Dom
2. Routers in react
3. Context Hook and how it helps to avoid Prop Drilling 
4. USESEARCHPARAMS and its uses (implemented like useState hook where the variable contains method such as get to get the variable which has ? infront of it. Set function is used to manipulate

eg: setSearchParams({page: `${page}`}))
output = ?page=1

5. useLocation hook - location.pathname (returns string)

6. Extensive implementation of useEffect hook so that most of the fetch calls done with single piece of code. 
    (Because whenever the url changes, the page need to fetch data, utilizing useEffect when dependency array variable changes helps to solve this thing. otherwise, there will be a need of multiple fetch functions inbetween components)

7. normal export and default export