import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="default">
      <NavLink exact="true" activeclassname="active" to="/login">
        <b>Login</b>
      </NavLink>
    </div>
  );
};
export default Home;
