import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { isLoading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!isLoading ? (
        <BiLogOut
          onClick={logout}
          className="w-6 h-6 text-white cursor-pointer"
        ></BiLogOut>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;

// import { BiLogOut } from "react-icons/bi";

// const LogoutButton = () => {
//   return (
//     <div className="mt-auto">
//       <BiLogOut className="w-6 h-6 text-white cursor-pointer"></BiLogOut>
//     </div>
//   );
// };

// export default LogoutButton;
