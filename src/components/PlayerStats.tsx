import React from "react";
import Icon from "@/components/ui/icon";

interface PlayerStatsProps {
  className?: string;
}

const PlayerStats: React.FC<PlayerStatsProps> = ({ className = "" }) => {
  const stats = {
    level: 5,
    experience: 1250,
    experienceToNext: 500,
    money: 15420,
    rabbits: 23,
    reputation: 87,
  };

  const experiencePercentage =
    (stats.experience / (stats.experience + stats.experienceToNext)) * 100;

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Статистика игрока</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Уровень</span>
          <span className="font-bold text-lg text-purple-600">
            {stats.level}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Опыт */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Опыт</span>
            <span className="text-gray-800">
              {stats.experience}/{stats.experience + stats.experienceToNext}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${experiencePercentage}%` }}
            />
          </div>
        </div>

        {/* Статистики */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Icon name="Coins" size={16} className="text-yellow-500" />
            <div>
              <div className="text-sm text-gray-500">Деньги</div>
              <div className="font-semibold text-gray-800">
                {stats.money.toLocaleString("ru-RU")} ₽
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Icon
              name="Rabbit"
              size={16}
              className="text-pink-500"
              fallback="Heart"
            />
            <div>
              <div className="text-sm text-gray-500">Кролики</div>
              <div className="font-semibold text-gray-800">{stats.rabbits}</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Icon name="Star" size={16} className="text-blue-500" />
            <div>
              <div className="text-sm text-gray-500">Репутация</div>
              <div className="font-semibold text-gray-800">
                {stats.reputation}/100
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Icon name="Trophy" size={16} className="text-orange-500" />
            <div>
              <div className="text-sm text-gray-500">Достижения</div>
              <div className="font-semibold text-gray-800">7/25</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
