import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handle, Position } from 'reactflow';

const BaseNode = ({ id, type, handles, additionalContent }) => {
  return (
    <Card
      className="
        w-[250px] 
        h-auto rounded-lg 
        p-4 
        bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] 
        shadow-lg 
        transition-transform 
        hover:scale-105 
        hover:shadow-2xl 
        border-[#9025ff] 
        border-2 
        animate-in
      "
    >
      <CardHeader>
        <CardTitle className="text-lg font-bold text-[#9025ff]">
          {type.charAt(0).toUpperCase() + type.slice(1)} Node
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {handles.map((handle, index) => (
          <Handle
            key={index}
            type={handle.type}
            position={handle.position}
            id={`${id}-${handle.type}-${index}`}
            style={{
              top: handle.style?.top || '25%',
              width: '15px',
              height: '15px',
              backgroundColor: '#7402e2',
              borderRadius: '50%',
              ...handle.style,
            }}
          />
        ))}
        {additionalContent}
      </CardContent>
    </Card>
  );
};

export default BaseNode;
