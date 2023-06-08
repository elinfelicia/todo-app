import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const checkUser = (users) => {
        const user = users.find(
            (user) => user.email === email && user.password === password);
            console.log(user);
        if (user.email === email && user.password === password) return user;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("All fields are required!");
        }

        const user = await axios
        .get("http://localhost:6001/users")
        .then((res) => checkUser(res.data, email, password))
        .catch((error) => {
            console.log(error);
        })

        if (user) {
            navigate("/");

            localStorage.setItem("user", JSON.stringify(user.id));
        } 
        setEmail("");
        setPassword("");

    };

    return (
        <div className="container">
            <Card>
                <form className="form-container">
                    <h1>Log in</h1>
                    <label>                            
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </label>
                    <label>
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </label>
                    <button className="btn" type="submit" onClick={handleSubmit}>
                        <p>Log in</p>                        
                    </button>
                </form>
            </Card>
        </div>
    );
};

export default Login;