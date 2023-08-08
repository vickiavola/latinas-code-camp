import PropTypes from 'prop-types';
const MainWrapper = ({ children }) => {
     return <main>{children}</main>;
};

MainWrapper.propTypes = {
     children: PropTypes.node.isRequired,
}

export default MainWrapper;