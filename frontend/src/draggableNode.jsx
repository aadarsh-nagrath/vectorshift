import React from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const DraggableNode = ({ type, label, imageUrl, name }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Card
      className="w-[120px] h-[80px] flex flex-col items-center justify-center rounded-lg bg-gray-400 text-white cursor-grab transition-transform transform hover:scale-105 hover:shadow-xl p-2 border border-blue-500"
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <div className="flex items-center justify-center w-full mb-1">
        <img src={imageUrl} alt={label} className="w-14 h-14 rounded-full object-cover border border-blue-400" />
      </div>
      <CardHeader className="flex flex-col items-center justify-center w-full">
        <CardTitle className="text-white text-xs mb-1">{label}</CardTitle>
        <p className="text-xxs text-gray-400">{name}</p>
      </CardHeader>
    </Card>
  );
};
