import UserAvatar from "../auth/UserAvatar.jsx";

function Header() {
  return (
    <header className="flex items-center justify-end gap-10 border-b border-b-gray-100 bg-white py-2  md:py-3">
      <div className=" -translate-x-1/4 bg-yellow-100 p-4 font-semibold">
        Update and Delete are{" "}
        <span className="text-red-500 underline">not allowed</span> if data is
        not created by you. For more detail, visit this project's &nbsp;
        <a
          target="_blank"
          href="https://github.com/Onurhnf/wheels4u-react-tailwind-reactquery"
          rel="noreferrer"
          className="text-emerald-600 underline"
        >
          GitHub Repository &rarr;
        </a>
      </div>
      <UserAvatar />
    </header>
  );
}

export default Header;
