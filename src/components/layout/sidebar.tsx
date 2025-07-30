import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/react';
import { cn } from '@heroui/react';

export type MenuItemType = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

type SidebarProps = {
  menuItems: MenuItemType[];
  title: string;
};

const SidebarButton = ({ item, isCollapsed }: { item: MenuItemType; isCollapsed: boolean }) => {
  return (
    <Button
      isIconOnly={isCollapsed}
      startContent={item.icon}
      key={item.name}
      color="default"
      variant="light"
      className={cn('flex gap-2', isCollapsed ? 'justify-center' : 'justify-start')}
    >
      {!isCollapsed && <p>{item.name}</p>}
    </Button>
  );
};

export const SideBar = ({ menuItems, title = 'Main Menu' }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`border-r border-gray-200 bg-white shadow-lg transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-80 max-w-[300px]'} flex h-full flex-col`}
    >
      {/* Header */}
      <div
        className={`flex items-center border-b border-gray-200 p-4 ${isCollapsed ? 'justify-center' : 'justify-between'} `}
      >
        {!isCollapsed && (
          <h2 className={`font-semibold text-gray-800 transition-opacity duration-300`}>{title}</h2>
        )}
        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100"
          aria-label={isCollapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
        >
          {isCollapsed ? (
            <Bars3Icon className="h-5 w-5 text-gray-600" />
          ) : (
            <XMarkIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 p-4">
        {menuItems.map(item => (
          <SidebarButton item={item} isCollapsed={isCollapsed} />
        ))}
      </nav>
    </aside>
  );
};
