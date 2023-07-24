function UserAvatar() {
  //   const { user } = useUser();
  //   const { fullName, avatar } = user.user_metadata;

  return (
    <div className="mr-4 flex items-center text-2xl font-medium text-gray-600">
      <img
        className="block w-14 rounded-full object-cover object-center outline outline-2 outline-gray-100"
        src={"" || "default-user.jpg"}
        alt={`Avatar of ${"xdd"}`}
      />
    </div>
  );
}

export default UserAvatar;
