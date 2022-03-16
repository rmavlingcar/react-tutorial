import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    
    useEffect(() => {
        //console.log("useEffect hook triggered!");
        fetch('http://localhost:8000/blogs').then(res => { return res.json(); }).then(data => { setBlogs(data); });
    }, []);

    return ( 
    <div className="home">
        {blogs && <BlogList blogs={ blogs } title="All Blogs"></BlogList>}
    </div> 
    );
}
 
export default Home;