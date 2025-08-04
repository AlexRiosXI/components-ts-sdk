type ModuleContainerProps = {
  children: React.ReactNode;
};

export const ModuleContainer = ({ children }: ModuleContainerProps) => {
  return <div className="h-full w-full">{children}</div>;
};
