import { Link, useNavigate } from "react-router-dom";
import NavButton from "./NavButton";
import Logout from "./Logout";

const Header = () => {
    const navigate = useNavigate ();
    const userLoggedIn = localStorage.getItem("user");

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
            <div className="navbar">
                <h1>ToDo App</h1>
                <nav className="nav">
                    {userLoggedIn ? (
                        <Logout type="button" classname="nav-btn" onClick={handleLogout}>
                             {/* <Logout className="nav-btn"/> */}
                        </Logout>
                    ) : (
                    <>
                        <NavButton type="button" classname="nav-btn">
                            <Link to="/login" className="nav-link">
                                Log in
                            </Link>
                        </NavButton>
                        <NavButton type="button" classname="nav-btn">
                            <Link to="/register" className="nav-link" >
                                Register
                            </Link>
                        </NavButton>
                    </>
                    )}

                </nav>
            </div>
    );
};

export default Header;