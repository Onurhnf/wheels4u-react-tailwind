import UserAvatar from "../auth/UserAvatar.jsx";

function Header() {
  return (
    <header className="flex items-center justify-end gap-10 border-b border-gray-200 bg-gray-100 py-3 md:py-5">
      <UserAvatar />
    </header>
  );
}

export default Header;
