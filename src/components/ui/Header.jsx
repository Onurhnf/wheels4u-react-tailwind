import UserAvatar from "../auth/UserAvatar.jsx";

function Header() {
  return (
    <header className="flex items-center justify-end gap-10 border-b border-gray-200 bg-stone-100 py-2 drop-shadow-sm md:py-4">
      <UserAvatar />
    </header>
  );
}

export default Header;
