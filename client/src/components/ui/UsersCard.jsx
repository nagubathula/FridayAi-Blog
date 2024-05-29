/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";

const UsersCard = ({ data }) => {
  return (
    <div className="">
    <div className="flex flex-col border w-full px-4  h-32 rounded-md items-center justify-center backdrop-blur-sm">
      <div className="flex gap-4">
        <img
          src={data.profileImg.url}
          alt="profile pic"
          className="size-16 rounded-full aspect-square object-cover"
        />
        <div className="w-48 space-y-1">
          <Link
            className="hover:underline underline-offset-4"
            to={`/users/${data.username}`}
          >
            @{data.username}
          </Link>
          <p className="line-clamp-2 text-zinc-200 text-xs">{data.bio}</p>
          <span className="flex items-center gap-1 text-zinc-400 opacity-75 text-xs">
            <FaRegCalendarAlt /> Date joined: {data.createdAt.substring(0, 10)}
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UsersCard;
