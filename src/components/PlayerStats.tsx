import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface PlayerStatsProps {
  className?: string;
}

const PlayerStats: React.FC<PlayerStatsProps> = ({ className = "" }) => {
  const stats = {
    level: 1,
    experience: 0,
    experienceToNext: 1000,
    rabbits: 0,
    freeSlots: 5,
  };

  return (
    <div
      className={`w-80 bg-game-panel border-l border-gray-700 h-full ${className}`}
    >
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-game-text font-semibold">Мои Ангары</h3>
          <Button
            size="sm"
            className="bg-game-accent hover:bg-game-accent-hover text-white"
          >
            + Получить Морковь
          </Button>
        </div>

        <div className="text-sm text-game-text-muted mb-2">
          Уровень: {stats.level} | Опыт: {stats.experience}/
          {stats.experienceToNext}
        </div>

        <div className="text-sm text-game-text-muted">
          Всего кроликов: {stats.rabbits}
        </div>
        <div className="text-sm text-game-text-muted">
          Свободных клеток: {stats.freeSlots}
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-game-card rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-game-text font-medium">Стартовый Ангар</span>
            <Button size="sm" variant="outline" className="text-xs">
              + Новый Ангар (Уровень 5)
            </Button>
          </div>
          <div className="text-sm text-game-text-muted mb-2">
            Начальный уровень
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-game-text-muted">Вместимость</span>
              <span className="text-game-text">0/50 клеток</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-game-text-muted">Обычные клетки</div>
                <div className="text-game-text">2/2 установлено</div>
              </div>
              <div>
                <div className="text-game-text-muted">Откормочные клетки</div>
                <div className="text-game-text">3/3 установлено</div>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <Icon
                name="Rabbit"
                size={16}
                className="text-game-accent"
                fallback="Circle"
              />
              <span className="text-game-text-muted">0 кроликов</span>
              <Button size="sm" variant="outline" className="ml-auto text-xs">
                Управлять
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
