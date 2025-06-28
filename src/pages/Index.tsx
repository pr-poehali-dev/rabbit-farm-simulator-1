import React, { useState } from "react";
import GameClock from "@/components/GameClock";
import NotificationSystem from "@/components/NotificationSystem";
import PlayerStats from "@/components/PlayerStats";
import NavigationMenu from "@/components/NavigationMenu";
import RabbitCard from "@/components/RabbitCard";
import TutorialPrompt from "@/components/TutorialPrompt";

const Index = () => {
  const [activeSection, setActiveSection] = useState("farm");

  // Примеры данных кроликов
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
    {
      id: "3",
      name: "Белла",
      breed: "Калифорнийский",
      age: 15,
      gender: "female" as const,
      health: 92,
      genetics: {
        color: "Белый с темными отметинами",
        size: "Средний",
        furType: "Плотный",
      },
      status: "pregnant" as const,
      image: "",
    },
    {
      id: "4",
      name: "Дымка",
      breed: "Шиншилла",
      age: 6,
      gender: "female" as const,
      health: 78,
      genetics: {
        color: "Серый",
        size: "Мелкий",
        furType: "Шелковистый",
      },
      status: "healthy" as const,
      image: "",
    },
  ];

  const renderFarmSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Ферма</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">
            Всего кроликов: {rabbits.length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {rabbits.map((rabbit) => (
          <RabbitCard key={rabbit.id} rabbit={rabbit} />
        ))}
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Склад</h2>
            <p className="text-gray-600">Управление кормом и припасами</p>
          </div>
        );
      case "market":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Рынок</h2>
            <p className="text-gray-600">Покупка и продажа кроликов</p>
          </div>
        );
      case "auction":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Аукцион</h2>
            <p className="text-gray-600">Элитные кролики и редкие породы</p>
          </div>
        );
      case "events":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">События</h2>
            <p className="text-gray-600">
              Ярмарки, конкурсы и сезонные события
            </p>
          </div>
        );
      case "achievements":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Достижения
            </h2>
            <p className="text-gray-600">Ваш прогресс и награды</p>
          </div>
        );
      default:
        return renderFarmSection();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Шапка */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🐰</span>
                </div>
                <h1 className="text-xl font-bold text-gray-800">
                  Кроличья Ферма
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <GameClock />
              <NotificationSystem />
            </div>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Левая колонка - Статистика */}
          <div className="lg:col-span-1">
            <PlayerStats className="mb-6" />
          </div>

          {/* Правая колонка - Основной контент */}
          <div className="lg:col-span-3">
            <TutorialPrompt />

            <div className="mb-8">
              <NavigationMenu
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>

            {renderSection()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
