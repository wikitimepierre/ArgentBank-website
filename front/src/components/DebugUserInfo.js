import { useSelector } from "react-redux";
import { userAuth, userInfo } from "../app/features/user/userSlice";

const DebugUserInfo = () => {
  const separator = <span> - </span>;
  const email = useSelector((state) => state.userAuth.email) ?? "";
  const firstName = useSelector((state) => state.userInfo.firstName) ?? "";
  const lastName = useSelector((state) => state.userInfo.lastName) ?? "";
  const userName = useSelector((state) => state.userInfo.userName) ?? "";
  const id = useSelector((state) => state.userInfo.id) ?? "";

  return (
    <span>
      {separator} {email} {separator} {firstName} {separator} {lastName} {separator} {userName} {separator} {id}
    </span>
  );
};

export default DebugUserInfo;