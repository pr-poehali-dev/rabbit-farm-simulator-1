import React from "react";

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
  return (
    <div className="bg-game-card rounded-lg p-4 border border-gray-700 hover:border-game-accent transition-colors">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 bg-game-accent rounded-full flex items-center justify-center">
          <span className="text-white">🐰</span>
        </div>
        <div>
          <h3 className="text-game-text font-medium">{rabbit.name}</h3>
          <p className="text-game-text-muted text-sm">{rabbit.breed}</p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-game-text-muted">Возраст:</span>
          <span className="text-game-text">{rabbit.age} мес.</span>
        </div>

        <div className="flex justify-between">
          <span className="text-game-text-muted">Здоровье:</span>
          <div className="flex items-center space-x-2">
            <div className="w-12 bg-gray-700 rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full ${rabbit.health > 70 ? "bg-green-500" : rabbit.health > 40 ? "bg-yellow-500" : "bg-red-500"}`}
                style={{ width: `${rabbit.health}%` }}
              />
            </div>
            <span className="text-game-text text-xs">{rabbit.health}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RabbitCard;
