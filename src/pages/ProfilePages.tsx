import { Link, Outlet } from "react-router-dom";

export default function ProfilePages() {
  // const profiles = ["todo", 2, 3];
  // const paths = ["ToDoList1", "CommentsRequest", "ToDoListRequest"];
  return (
    <div>
      <div>Навигация</div>
      <div>
        <Link to={`/`} style={{ marginRight: "20px" }}>
          Home
        </Link>
        <Link to={`/todo`} style={{ marginRight: "20px" }}>
          Todo
        </Link>
        <Link to={`/comments`} style={{ marginRight: "20px" }}>
          Comments
        </Link>
      </div>
      {/*     {profiles.map((profile) => (
        <Link key={profile} to={`/ProfilePages/${profile}`}>
          {profile}
        </Link>
      ))} */}
      <Outlet />
    </div>
  );
}
