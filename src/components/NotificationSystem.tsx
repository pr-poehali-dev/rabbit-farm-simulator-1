import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface Notification {
  id: string;
  type: "disease" | "vaccination" | "breeding" | "feed";
  message: string;
  severity: "low" | "medium" | "high";
  timestamp: Date;
  rabbitId?: string;
}

const NotificationSystem: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "vaccination",
      message: 'Кролик "Снежок" нуждается в вакцинации против миксоматоза',
      severity: "high",
      timestamp: new Date(),
      rabbitId: "rabbit-1",
    },
    {
      id: "2",
      type: "disease",
      message: 'У кролика "Рыжик" обнаружены симптомы кокцидиоза',
      severity: "high",
      timestamp: new Date(Date.now() - 300000),
      rabbitId: "rabbit-2",
    },
    {
      id: "3",
      type: "breeding",
      message: 'Крольчиха "Белла" готова к спариванию',
      severity: "medium",
      timestamp: new Date(Date.now() - 600000),
      rabbitId: "rabbit-3",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "disease":
        return "AlertTriangle";
      case "vaccination":
        return "Syringe";
      case "breeding":
        return "Heart";
      case "feed":
        return "Apple";
      default:
        return "Bell";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-600 bg-red-50";
      case "medium":
        return "text-yellow-600 bg-yellow-50";
      case "low":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const dismissNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const highPriorityCount = notifications.filter(
    (n) => n.severity === "high",
  ).length;

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <Icon name="Bell" size={20} />
        {highPriorityCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {highPriorityCount}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Уведомления</h3>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                Нет новых уведомлений
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${getSeverityColor(notification.severity)}`}
                >
                  <div className="flex items-start space-x-3">
                    <Icon
                      name={getNotificationIcon(notification.type)}
                      size={16}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {notification.timestamp.toLocaleTimeString("ru-RU")}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => dismissNotification(notification.id)}
                      className="h-6 w-6"
                    >
                      <Icon name="X" size={12} />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationSystem;
