import { Card, CardHeader, CardBody } from "@heroui/react";
import { ReactNode } from "react";

type FormContainerProps = {
    children: ReactNode;
    title: string;
    description: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    spaceY?: number;
    className?: string;
}

export const FormContainer = ({children, title, description, onSubmit, spaceY = 4, className}: FormContainerProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit?.(e);
    }
    return (
        <Card>
            <CardHeader
            className="flex flex-col items-start "
            >
            <h3
            className="text-lg text-start font-bold"
            >{title}</h3>
            <p
            className="text-sm text-gray-500"
            >{description}</p>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit}
                className={`space-y-${spaceY} ${className}`}
                >
                    {children}

                </form>
                
            </CardBody>
        </Card>
      );
}