import Stack from "../ui/Stack.jsx";
import { useUser } from "./hooks/useUser.js";

function UserAvatar() {
  const { user } = useUser();
  const { full_name, avatar_url } = user.user_metadata;

  return (
    <Stack
      type={"horizontal"}
      className="mr-5  gap-3 text-base font-medium text-gray-600 md:mr-11"
    >
      <img
        className="block w-11 rounded-full object-cover object-center outline outline-2 outline-gray-200 hover:outline-gray-500"
        src={avatar_url || "default-user.jpg"}
        alt={`Avatar of ${full_name}`}
      />
      <span>{full_name}</span>
    </Stack>
  );
}

export default UserAvatar;
