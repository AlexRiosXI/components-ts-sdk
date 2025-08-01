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
    <section className={cn('flex h-screen w-screen ', className)}>
      <SideBar menuItems={menuItems} title={title} />
      <div className="p-4 bg-primary-500 grow-1 w-full">{children}</div>
    </section>
  );
};
