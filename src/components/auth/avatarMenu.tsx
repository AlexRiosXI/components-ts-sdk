import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@heroui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type AvatarMenuProps = {
  name: string;
  avatar: string;
  items: AvatarMenuItem[];
};

type AvatarMenuItem = {
  label: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  danger?: boolean;
};

export const AvatarMenu = ({
  name = '',
  avatar = 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  items = [],
}: AvatarMenuProps) => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button variant="light" className="flex h-auto min-w-0 items-center gap-2 p-2">
          <p className="text-foreground-500 text-sm">{name}</p>
          <Avatar size="sm" src={avatar} name={name} className="flex-shrink-0" />
          <ChevronDownIcon className="h-4 w-4 text-gray-500" />
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="User menu" className="w-56">
        {items.map(item => (
          <DropdownItem
            key={item.label}
            startContent={item.icon}
            className={`h-12 gap-2 ${item.danger ? 'text-danger' : ''}`}
            onClick={item.onClick}
            color={item.danger ? 'danger' : 'default'}
          >
            <div className="flex flex-col">
              <p className="font-semibold">{item.label}</p>
              <p className="text-tiny text-default-400">{item.description}</p>
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
