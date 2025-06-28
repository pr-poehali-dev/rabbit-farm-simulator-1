import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface GameClockProps {
  className?: string;
}

const GameClock: React.FC<GameClockProps> = ({ className = "" }) => {
  const [gameTime, setGameTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
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
    });
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Icon name="Clock" size={16} className="text-game-accent" />
      <span className="text-game-text text-sm font-medium">
        {formatGameTime(gameTime)}
      </span>
    </div>
  );
};

export default GameClock;
