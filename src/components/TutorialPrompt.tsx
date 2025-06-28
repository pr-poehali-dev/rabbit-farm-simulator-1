import React, { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const TutorialPrompt: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4 mb-6">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <Icon name="Lightbulb" size={20} className="text-purple-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-purple-800 mb-1">
            Добро пожаловать в мир кролиководства! 🐰
          </h3>
          <p className="text-sm text-purple-700 mb-3">
            Вы начинающий фермер. Изучите основы ухода за кроликами, следите за
            их здоровьем и развивайте свою ферму.
          </p>
          <div className="flex space-x-2">
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              <Icon name="Play" size={14} className="mr-1" />
              Начать обучение
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsVisible(false)}
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              Пропустить
            </Button>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 h-6 w-6 text-purple-600"
        >
          <Icon name="X" size={14} />
        </Button>
      </div>
    </div>
  );
};

export default TutorialPrompt;
