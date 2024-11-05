import { IoSearchSharp } from "react-icons/io5";
const SearchInputComponent = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button className=" btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none"></IoSearchSharp>
      </button>
    </form>
  );
};

export default SearchInputComponent;

// starter code

// import { IoSearchSharp } from "react-icons/io5";
// const SearchInputComponent = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input input-bordered rounded-full"
//       />
//       <button className=" btn btn-circle bg-sky-500 text-white">
//         <IoSearchSharp className="w-6 h-6 outline-none"></IoSearchSharp>
//       </button>
//     </form>
//   );
// };

// export default SearchInputComponent;