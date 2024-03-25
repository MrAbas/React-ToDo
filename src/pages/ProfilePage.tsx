import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const params = useParams<{ profileId: string }>();
  return (
    <div>
      <h1>Profile Page {params.profileId} ss</h1>
    </div>
  );
}
