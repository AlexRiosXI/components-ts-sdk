import { cn } from '@heroui/react';

interface BlurLightBackgroundProps {
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
}

export const BlurLightBackground = ({
  className,
  primaryColor = 'primary-300',
  secondaryColor = 'secondary-300',
  accentColor = 'accent-300',
}: BlurLightBackgroundProps) => {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <div
        className={`absolute -top-40 -right-40 h-80 w-80 bg-${primaryColor} animate-blob rounded-full opacity-70 mix-blend-multiply blur-xl filter`}
      ></div>
      <div
        className={`absolute -bottom-40 -left-40 h-80 w-80 bg-${secondaryColor} animate-blob animation-delay-2000 rounded-full opacity-70 mix-blend-multiply blur-xl filter`}
      ></div>
      <div
        className={`absolute top-40 left-40 h-80 w-80 bg-${accentColor} animate-blob animation-delay-4000 rounded-full opacity-70 mix-blend-multiply blur-xl filter`}
      ></div>
    </div>
  );
};
