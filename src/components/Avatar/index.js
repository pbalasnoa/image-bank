import "./styles.css";

export default function Avatar({ name, profile_image }) {
  return (
    <img
      loading="lazy"
      src={profile_image.small}
      className="avatar-img"
      alt={name}
    />
  );
}
