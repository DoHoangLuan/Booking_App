import { Button, ButtonProps } from "@mui/material";

type Props = {
  
} & ButtonProps;

const MyButton: React.FC<Props> = ({
  ...restProps
}) => {
  const { title, className, children } = restProps;
  return (
    <Button
      className={className}
      {...restProps}  
    >
      {children}
      {title}
    </Button>
  );
};

export default MyButton;
