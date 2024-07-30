import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function registerUser(ev) {
        ev.preventDefault(); // Prevent default form submission
    
        try {
            const response = await axios.get('/test');
            console.log(response.data); // Log the response data
        } catch (error) {
            console.error('Error fetching data:', error.message); // Log the error message
        }

        axios.post('/register', {
            name,
            email,
            password,
        });

    }
    

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mt-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input
                        type="text"
                        placeholder="Jane Smith"
                        value={name}
                        onChange={ev => setName(ev.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                    <button className="primary" type="submit">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
