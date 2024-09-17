import React from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Card
      className="min-w-[80px] h-[60px] flex items-center justify-center rounded-lg bg-[#1C2536] text-white cursor-grab transition-all hover:scale-105 hover:shadow-lg hover:bg-[#28303e]"
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <CardHeader className="flex flex-col items-center justify-center">
        <CardTitle className="text-white text-sm">{label}</CardTitle>
      </CardHeader>
    </Card>
  );
};
