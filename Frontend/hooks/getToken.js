import { useSelector } from "react-redux";

const getUserToken = () => {
  return useSelector((state) => state.userDetails.token);
};

export default getUserToken;
