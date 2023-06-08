import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <Button className="btn" onClick={handleLogout}>
            Log Out
        </Button>
    );
};

export default Logout;