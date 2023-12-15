import Avatar from "@mui/material/Avatar";
interface AvatarProps {
  alt: string;
  src: string;
  className: string;
}
const MyAvatar: React.FC<AvatarProps> = ({ alt, src,className }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
    />
  );
};
export default MyAvatar;
