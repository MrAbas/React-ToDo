import { Link, Outlet } from "react-router-dom";

export default function ProfilePages() {
  const profiles = [1, 2, 3];
  // const paths = ["ToDoList1", "CommentsRequest", "ToDoListRequest"];  TODO
  return (
    <div>
      {profiles.map((profile) => (
        <Link key={profile} to={`/ProfilePages/${profile}`}>
          Page {profile}
        </Link>
      ))}
      <Outlet />
    </div>
  );
}
