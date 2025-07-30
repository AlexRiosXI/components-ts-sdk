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
    <section className={cn('flex h-screen', className)}>
      <SideBar menuItems={menuItems} title={title} />
      <section className="flex-1 p-6">{children}</section>
    </section>
  );
};
