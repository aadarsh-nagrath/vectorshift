import React from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';
import { Label } from "@/components/ui/label";

export const LLMNode = ({ id }) => {
 
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-system`,
      style: { top: '33%' }, // Positioned at 33% from the top
    },
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-prompt`,
      style: { top: '66%' }, // Positioned at 66% from the top
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-response`,
      style: { top: '50%' }, // Centered on the right
    },
  ];

  return (
    <BaseNode
      id={id}
      type="LLM"
      handles={handles}
      additionalContent={
        <div className="mt-4">
          <Label>This is an LLM node.</Label>
        </div>
      }
    />
  );
};
