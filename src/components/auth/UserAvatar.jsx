function UserAvatar() {
  //   const { user } = useUser();
  //   const { fullName, avatar } = user.user_metadata;

  return (
    <div className="mr-5 flex items-center text-2xl font-medium text-gray-600 md:mr-11">
      <img
        className="block w-12 rounded-full object-cover object-center outline outline-2 outline-gray-200 hover:outline-gray-500"
        src={"" || "default-user.jpg"}
        alt={`Avatar of ${"xdd"}`}
      />
    </div>
  );
}

export default UserAvatar;
