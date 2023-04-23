import { Button } from "@chakra-ui/react"

interface buttonProps {
    variant: string;
    color: string;
    backgroundColor: string;
    width: string;
    height: string;
    action: () => void;
    children: React.ReactNode;
}
export const BTN :React.FC<buttonProps> = (props:buttonProps) => {
    return (
        <Button variant={props.variant} w={props.width} h={props.height} color={props.color} background={props.backgroundColor} onClick={props.action} >
            {props.children}
        </Button>
    )
}