import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate ();
    const userLoggedIn = localStorage.getItem("user");

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
            <div className="navBar">
                <h1>ToDo App</h1>
                <nav className="nav">
                    {userLoggedIn ? (
                        <button type="button" classname="nav-btn" onClick={handleLogout}>
                            Log Out
                        </button>
                    ) : (
                    <>
                        <button type="button" classname="nav-btn">
                            <Link to="/login">
                                Log in
                            </Link>
                        </button>
                        <button type="button" classname="nav-btn">
                            <Link to="/register">
                                Register
                            </Link>
                        </button>
                    </>
                    )}

                </nav>
            </div>
    );
};

export default Header;