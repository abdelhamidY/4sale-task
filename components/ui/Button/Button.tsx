import { Button as FlowbiteButton } from "flowbite-react/components/Button";

interface PropsButton extends React.HTMLAttributes<HTMLButtonElement> {}
const Button = ({ children, ...props }: PropsButton) => {
  return <FlowbiteButton {...props}>{children}</FlowbiteButton>;
};
export default Button;
