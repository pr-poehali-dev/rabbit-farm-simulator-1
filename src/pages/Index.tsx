import React, { useState } from "react";
import GameClock from "@/components/GameClock";
import NotificationSystem from "@/components/NotificationSystem";
import PlayerStats from "@/components/PlayerStats";
import NavigationMenu from "@/components/NavigationMenu";
import RabbitCard from "@/components/RabbitCard";
import TutorialPrompt from "@/components/TutorialPrompt";

const Index = () => {
  const [activeSection, setActiveSection] = useState("farm");

  const rabbits = [
    {
      id: "1",
      name: "Снежок",
      breed: "Белый великан",
      age: 8,
      gender: "male" as const,
      health: 85,
      genetics: {
        color: "Белый",
        size: "Крупный",
        furType: "Густой",
      },
      status: "vaccination_needed" as const,
      image: "",
    },
    {
      id: "2",
      name: "Рыжик",
      breed: "Новозеландский красный",
      age: 12,
      gender: "male" as const,
      health: 45,
      genetics: {
        color: "Рыжий",
        size: "Средний",
        furType: "Мягкий",
      },
      status: "sick" as const,
      image: "",
    },
  ];

  const renderFarmSection = () => (
    <div className="space-y-6">
      {/* Ангары */}
      <div className="space-y-4">
        {/* Стартовый Ангар */}
        <div className="bg-game-card rounded-lg overflow-hidden">
          <div
            className="h-48 bg-cover bg-center relative"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544942503-7ad535b9a78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Стартовый Ангар</h3>
              <p className="text-sm opacity-75">Начальный уровень</p>
            </div>
          </div>

          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-game-text-muted text-sm">Вместимость</span>
              <span className="text-game-text text-sm">0/50 клеток</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
              <div>
                <div className="text-game-text-muted">Обычные клетки</div>
                <div className="text-game-text">2/2 установлено</div>
              </div>
              <div>
                <div className="text-game-text-muted">Откормочные клетки</div>
                <div className="text-game-text">3/3 установлено</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-game-text-muted text-sm">
                🐰 0 кроликов
              </span>
              <button className="px-3 py-1 bg-game-accent hover:bg-game-accent-hover text-white text-sm rounded">
                Управлять
              </button>
            </div>
          </div>
        </div>

        {/* Ангар Альфа */}
        <div className="bg-game-card rounded-lg overflow-hidden">
          <div
            className="h-48 bg-cover bg-center relative"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1516315210627-87afcf1dd079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Ангар Альфа</h3>
              <p className="text-sm opacity-75">Продвинутый Питомник</p>
            </div>
          </div>

          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-game-text-muted text-sm">Вместимость</span>
              <span className="text-game-text text-sm">18/24 клеток</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
              <div
                className="bg-game-accent h-2 rounded-full"
                style={{ width: "75%" }}
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-game-text-muted text-sm">
                🐰 18 кроликов
              </span>
              <button className="px-3 py-1 bg-game-accent hover:bg-game-accent-hover text-white text-sm rounded">
                Управлять
              </button>
            </div>
          </div>
        </div>

        {/* Ангар Бета */}
        <div className="bg-game-card rounded-lg overflow-hidden">
          <div
            className="h-48 bg-cover bg-center relative"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Ангар Бета</h3>
              <p className="text-sm opacity-75">Стандартный Питомник</p>
            </div>
          </div>

          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-game-text-muted text-sm">Вместимость</span>
              <span className="text-game-text text-sm">Скоро...</span>
            </div>

            <div className="text-center py-4">
              <p className="text-game-text-muted text-sm mb-2">
                Ангар в разработке
              </p>
              <button className="px-4 py-2 bg-gray-600 text-gray-400 text-sm rounded cursor-not-allowed">
                Недоступно
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "farm":
        return renderFarmSection();
      case "warehouse":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-game-text mb-4">Склад</h2>
            <p className="text-game-text-muted">
              Управление кормом и припасами
            </p>
          </div>
        );
      case "market":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-game-text mb-4">Рынок</h2>
            <p className="text-game-text-muted">Покупка и продажа кроликов</p>
          </div>
        );
      case "auction":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-game-text mb-4">Аукцион</h2>
            <p className="text-game-text-muted">
              Элитные кролики и редкие породы
            </p>
          </div>
        );
      case "events":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-game-text mb-4">События</h2>
            <p className="text-game-text-muted">
              Ярмарки, конкурсы и сезонные события
            </p>
          </div>
        );
      default:
        return renderFarmSection();
    }
  };

  return (
    <div className="min-h-screen bg-game-bg">
      {/* Шапка */}
      <header className="bg-game-panel border-b border-gray-700 sticky top-0 z-40">
        <div className="flex items-center justfy-between h-16 px-4">
          <div className="flex items-center space-x-4">
            <GameClock />
            <NotificationSystem />
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Левая панель навигации */}
        <NavigationMenu
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Центральная область */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            <TutorialPrompt />
            {renderSection()}
          </div>
        </main>

        {/* Правая панель статистики */}
        <PlayerStats />
      </div>
    </div>
  );
};

export default Index;
