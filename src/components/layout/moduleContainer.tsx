
type ModuleContainerProps = {
    children: React.ReactNode;
}

export const ModuleContainer = ({ children }: ModuleContainerProps) => {
    return (  
        <div className="w-full h-full">
            {children}
        </div>

    );
}
 
