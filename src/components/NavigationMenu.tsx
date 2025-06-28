import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface NavigationItem {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface NavigationMenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const navigationItems: NavigationItem[] = [
    {
      id: "farm",
      name: "Моя Ферма",
      icon: "Home",
      description: "Управление фермой",
    },
    {
      id: "warehouse",
      name: "Склад",
      icon: "Package",
      description: "Корм и припасы",
    },
    {
      id: "market",
      name: "Рынок",
      icon: "ShoppingCart",
      description: "Торговля",
    },
    {
      id: "auction",
      name: "Аукцион",
      icon: "Gavel",
      description: "Элитные кролики",
    },
    {
      id: "events",
      name: "События",
      icon: "Calendar",
      description: "Мероприятия",
    },
  ];

  return (
    <div className="w-64 bg-game-panel border-r border-gray-700 h-full">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-game-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">🐰</span>
          </div>
          <div>
            <h1 className="text-game-text font-semibold">ЛОГО</h1>
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-game-accent">💰 12,450</span>
              <span className="text-game-text-muted">⭕ 78</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className={`w-full justify-start text-left px-3 py-2 h-auto hover:bg-game-card ${
              activeSection === item.id
                ? "bg-game-accent text-white hover:bg-game-accent-hover"
                : "text-game-text-muted hover:text-game-text"
            }`}
            onClick={() => onSectionChange(item.id)}
          >
            <Icon
              name={item.icon}
              size={18}
              className="mr-3 flex-shrink-0"
              fallback="Square"
            />
            <div>
              <div className="font-medium">{item.name}</div>
              <div className="text-xs opacity-75">{item.description}</div>
            </div>
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default NavigationMenu;
