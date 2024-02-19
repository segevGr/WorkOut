import { useSelector } from "react-redux";

const getUserId = () => {
  return useSelector((state) => state.userDetails.user._id);
};

export default getUserId;
