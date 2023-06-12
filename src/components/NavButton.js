import PropTypes from "prop-types";

const NavButton = ({children, type, isDisabled}) =>{
    return (
        <button type={type} disabled={isDisabled} className="nav-btn">
            {children}
        </button>
    )
};

NavButton.defaultProps = {
    type: "button",
    isDisabled: false,
}

NavButton.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default NavButton;