import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
    
    useEffect(() => {
        //console.log("useEffect hook triggered!");
        fetch('http://localhost:8000/blogs').then(res => { 
            if(!res.ok){
                throw('Error: Could not fetch data for that resource.')
            }
            return res.json(); 
        }).then(data => { 
            setBlogs(data);
            setIsPending(false);
            setError(null);
        }).catch(e => {
            setIsPending(false);
            setError(e.message);
        });
    }, []);

    return ( 
    <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div>}
        { blogs && <BlogList blogs={ blogs } title="All Blogs"></BlogList> }
    </div> 
    );
}
 
export default Home;