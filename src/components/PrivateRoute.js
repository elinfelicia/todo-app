import {Navigate} from "react-router-dom";
import { authenticate } from "./helpers";

const PrivateRoute = ({children}) => {
    const auth = authenticate();
    return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;