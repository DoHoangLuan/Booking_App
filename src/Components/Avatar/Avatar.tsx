import Avatar from "@mui/material/Avatar";
interface AvatarProps {
  alt: string;
  src: string;
  className: string;
}
const MyAvatar: React.FC<AvatarProps> = ({ alt, src,className }) => {
  return (
    <img
      style={{width: "50px", height:"50px", borderRadius:"50%", objectFit:"cover"}}
      className={className}
      src={src}
      alt={alt}
    />
  );
};
export default MyAvatar;
