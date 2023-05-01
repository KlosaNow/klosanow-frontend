import { Button } from "@chakra-ui/react"

interface buttonProps {
    variant: string;
    color: string;
    backgroundColor: string;
    width: string;
    paddingY: string;
    action: () => void;
    children: React.ReactNode;
}
export const BUTTON :React.FC<buttonProps> = (props:buttonProps) => {
    return (
        <Button variant={props.variant} w={props.width} paddingY={props.paddingY} color={props.color} background={props.backgroundColor} onClick={props.action} >
            {props.children}
        </Button>
    )
}