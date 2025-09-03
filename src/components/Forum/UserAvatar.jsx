import { Link } from "react-router-dom";

export default function UserAvatar({ user, size = "medium" }) {
  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "w-8 h-8 text-sm";
      case "large":
        return "w-12 h-12 text-lg";
      case "medium":
      default:
        return "w-10 h-10 text-base";
    }
  };

  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : "U";
  };

  const getColor = (str) => {
    let hash = 0;
    for (let i = 0; i < (str || "").length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }
    return color;
  };

  return (
    <Link to={`/community/profile/${user.authorId || user.id}`}>
      <div
        className={`${getSizeClass()} rounded-full flex items-center justify-center text-white font-bold shadow-md`}
        style={{
          backgroundColor: getColor(user.author || user.name || "User"),
        }}
      >
        {getInitials(user.author || user.name)}
      </div>
    </Link>
  );
}
