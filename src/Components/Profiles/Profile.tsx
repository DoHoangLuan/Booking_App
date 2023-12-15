import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MyButton from "../Button/Button";
import { NavLink } from "react-router-dom";
interface User {
  icon: React.ReactNode;
  title: string;
  to: string;
}
interface BasciMenu {
  children: React.ReactNode;
  className: string;
  profileUser: User[];
}

const BasicMenu: React.FC<BasciMenu> = ({
  children,
  className,
  profileUser,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={className}>
      <MyButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {children}
      </MyButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {profileUser.map((user, index) => {
          return (
            <MenuItem
              key={index}
              onClick={handleClose}
              className="flex flex-row gap-5 justify-around w-full"
            >
              <span className="text-[21px] font-bold">{user.icon}</span>
              <NavLink  to={user.to}>{user.title}</NavLink>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};
export default BasicMenu;
