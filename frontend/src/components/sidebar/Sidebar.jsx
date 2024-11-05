import React from "react";
import SearchInputComponent from "./SearchInput";
import Conversation from "./Conversation";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r flex flex-col p-4 border-slate-500">
      <SearchInputComponent></SearchInputComponent>
      <div className="divider px-3"></div>
      <Conversation></Conversation>
      <LogoutButton></LogoutButton>
    </div>
  );
};

export default Sidebar;





// import React from "react";
// import SearchInputComponent from "./SearchInput";
// import Conversation from "./Conversation";
// import LogoutButton from "./LogoutButton";

// const Sidebar = () => {
//   return (
//     <div className="border-r flex flex-col p-4 border-slate-500">
//       <SearchInputComponent></SearchInputComponent>
//       <div className="divider px-3"></div>
//       <Conversation></Conversation>
//       <LogoutButton></LogoutButton>
//     </div>
//   );
// };

// export default Sidebar;
