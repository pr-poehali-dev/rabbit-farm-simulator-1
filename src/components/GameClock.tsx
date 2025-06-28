import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface GameClockProps {
  className?: string;
}

const GameClock: React.FC<GameClockProps> = ({ className = "" }) => {
  const [gameTime, setGameTime] = useState(new Date());
  const [realTime, setRealTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setRealTime(now);

      // 3 реальных часа = 1 игровой день (ускорение в 8 раз)
      const gameSpeed = 8;
      const gameTimestamp = now.getTime() * gameSpeed;
      setGameTime(new Date(gameTimestamp));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatGameTime = (date: Date) => {
    return date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatGameDate = (date: Date) => {
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
        <Icon name="Clock" size={18} className="text-purple-600" />
        <div className="text-sm">
          <div className="font-semibold text-gray-800">
            {formatGameTime(gameTime)}
          </div>
          <div className="text-xs text-gray-500">
            {formatGameDate(gameTime)}
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-400">Игровое время</div>
    </div>
  );
};

export default GameClock;
