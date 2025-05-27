import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
  const { token } = useSelector((state) => state.auth);
  var user;
  if(token) user = jwtDecode(token);
  return {
    token,
    user
  }
}
