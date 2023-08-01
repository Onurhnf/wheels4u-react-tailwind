import UserAvatar from "../auth/UserAvatar.jsx";

function Header() {
  return (
    <header className="flex items-center justify-end gap-10 border-b border-b-gray-100 bg-white py-2  md:py-3">
      <UserAvatar />
    </header>
  );
}

export default Header;
