import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  return ( 
    <div 
        className="todo-card"
        style={{
            backgroundColor: reverse ? "#fff" : "#1c1c1c",
            color: reverse ? "#000" : "#fff",
        }}
    >
        {children}
    </div>
  );
};

Card.defaultProps = {
    reverse: false,
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
};

export default Card;
