import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Ricky', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Robin', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Ricky', id: 3 },
        { title: 'Automation of aggregating 2D images online with python', body: 'lorem ipsum...', author: 'Shaun', id: 4 },
        { title: 'Why Miss Fortune is the only champion you should play', body: 'lorem ipsum...', author: 'Joe', id: 5 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id);
        setBlogs(newBlogs);
    }

    return ( 
    <div className="home">
        <BlogList blogs={ blogs } title="All Blogs" handleDelete={ handleDelete }></BlogList>
        <BlogList blogs={ blogs.filter((blog) => blog.author === 'Ricky')} title="Ricky's Blogs" handleDelete={ handleDelete }></BlogList>
    </div> 
    );
}
 
export default Home;