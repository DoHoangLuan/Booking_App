import { NavLink } from "react-router-dom";
interface MyLinkProps {
  className: string;
  to: string;
  children: React.ReactNode;
}
const MyLink: React.FC<MyLinkProps> = ({ to, children, className }) => {
  return (
    <a className={className}>
      <NavLink to={to}>{children}</NavLink>
    </a>
  );
};
export default MyLink;
