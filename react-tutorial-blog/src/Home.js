import { useState } from 'react';

const Home = () => {

    //let name = 'Ricky';
    const [name, setName] = useState('Ricky');
    const [age, setAge] = useState('25');

    const handleClick = (e) => {
        setName('Robin');
        setAge('24');
    }

    return ( 
    <div className="home">
        <h2>Homepage</h2>
        <p>{ name } is { age } years old.</p>
        <button onClick={handleClick}>Click Me</button>
    </div> 
    );
}
 
export default Home;