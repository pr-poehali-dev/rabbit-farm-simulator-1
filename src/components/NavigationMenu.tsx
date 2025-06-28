import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface NavigationItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
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
      name: "Ферма",
      icon: "Barn",
      description: "Управление кроликами",
      color: "bg-green-500",
    },
    {
      id: "warehouse",
      name: "Склад",
      icon: "Package",
      description: "Корм и припасы",
      color: "bg-blue-500",
    },
    {
      id: "market",
      name: "Рынок",
      icon: "ShoppingCart",
      description: "Покупка и продажа",
      color: "bg-yellow-500",
    },
    {
      id: "auction",
      name: "Аукцион",
      icon: "Gavel",
      description: "Элитные кролики",
      color: "bg-purple-500",
    },
    {
      id: "events",
      name: "События",
      icon: "Calendar",
      description: "Ярмарки и конкурсы",
      color: "bg-red-500",
    },
    {
      id: "achievements",
      name: "Достижения",
      icon: "Award",
      description: "Прогресс и награды",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {navigationItems.map((item) => (
        <Button
          key={item.id}
          variant={activeSection === item.id ? "default" : "outline"}
          className={`h-24 flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform ${
            activeSection === item.id
              ? "bg-purple-600 text-white"
              : "hover:bg-gray-50"
          }`}
          onClick={() => onSectionChange(item.id)}
        >
          <div
            className={`p-2 rounded-lg ${item.color} ${activeSection === item.id ? "bg-white/20" : ""}`}
          >
            <Icon
              name={item.icon}
              size={20}
              className={
                activeSection === item.id ? "text-white" : "text-white"
              }
              fallback="Square"
            />
          </div>
          <div className="text-center">
            <div className="font-semibold text-sm">{item.name}</div>
            <div className="text-xs opacity-75">{item.description}</div>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default NavigationMenu;
