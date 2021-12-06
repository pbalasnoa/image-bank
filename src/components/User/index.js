import Avatar from "../Avatar";
import "./styles.css";

export default function User({ name, username, profile_image }) {
  return (
    <div className="user-container">
      <Avatar name={name} profile_image={profile_image} />
      <div className="user-data">
        <h2 className="user-name">{name}</h2>
        <span className="user-username">@{username}</span>
      </div>
    </div>
  );
}
