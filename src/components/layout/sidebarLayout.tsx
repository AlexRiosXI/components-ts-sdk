import { MenuItemType, SideBar } from './sidebar';
import { cn } from '@heroui/react';

type SidebarLayoutProps = {
  menuItems: MenuItemType[];
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const SidebarLayout = ({ menuItems, title, children, className }: SidebarLayoutProps) => {
  return (
    <section className={cn('flex h-screen w-screen', className)}>
      <SideBar menuItems={menuItems} title={title} />
      <div className="bg-primary-500 w-full grow-1 p-4">{children}</div>
    </section>
  );
};
