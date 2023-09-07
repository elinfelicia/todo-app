import { useNavigate } from "react-router-dom";
import NavButton from "./NavButton";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <NavButton onClick={handleLogout}>
            Log Out
        </NavButton>
    );
};

export default Logout;