import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface RabbitCardProps {
  rabbit: {
    id: string;
    name: string;
    breed: string;
    age: number;
    gender: "male" | "female";
    health: number;
    genetics: {
      color: string;
      size: string;
      furType: string;
    };
    status: "healthy" | "sick" | "pregnant" | "vaccination_needed";
    image: string;
  };
}

const RabbitCard: React.FC<RabbitCardProps> = ({ rabbit }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "text-green-600 bg-green-50";
      case "sick":
        return "text-red-600 bg-red-50";
      case "pregnant":
        return "text-pink-600 bg-pink-50";
      case "vaccination_needed":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "healthy":
        return "Здоров";
      case "sick":
        return "Болен";
      case "pregnant":
        return "Беременна";
      case "vaccination_needed":
        return "Нужна прививка";
      default:
        return "Неизвестно";
    }
  };

  const getGenderIcon = (gender: string) => {
    return gender === "male" ? "ArrowUp" : "ArrowDown";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
            <Icon
              name="Rabbit"
              size={24}
              className="text-purple-600"
              fallback="Heart"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{rabbit.name}</h3>
            <p className="text-sm text-gray-500">{rabbit.breed}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Icon
            name={getGenderIcon(rabbit.gender)}
            size={16}
            className={
              rabbit.gender === "male" ? "text-blue-500" : "text-pink-500"
            }
          />
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(rabbit.status)}`}
          >
            {getStatusText(rabbit.status)}
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Возраст:</span>
          <span className="text-gray-800">{rabbit.age} мес.</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Здоровье:</span>
          <div className="flex items-center space-x-2">
            <div className="w-16 bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${rabbit.health > 70 ? "bg-green-500" : rabbit.health > 40 ? "bg-yellow-500" : "bg-red-500"}`}
                style={{ width: `${rabbit.health}%` }}
              />
            </div>
            <span className="text-gray-800 text-xs">{rabbit.health}%</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-3">
        <div className="text-xs text-gray-500 mb-2">Генетика:</div>
        <div className="flex flex-wrap gap-1">
          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
            {rabbit.genetics.color}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
            {rabbit.genetics.size}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
            {rabbit.genetics.furType}
          </span>
        </div>
      </div>

      <div className="flex space-x-2 mt-4">
        <Button size="sm" variant="outline" className="flex-1">
          <Icon name="Eye" size={14} className="mr-1" />
          Осмотр
        </Button>
        <Button size="sm" variant="outline" className="flex-1">
          <Icon name="Settings" size={14} className="mr-1" />
          Уход
        </Button>
      </div>
    </div>
  );
};

export default RabbitCard;
