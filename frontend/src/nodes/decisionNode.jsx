import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export const DecisionNode = ({ id, data }) => {
  const [decisionName, setDecisionName] = useState(data?.decisionName || 'Decision');
  const [condition, setCondition] = useState(data?.condition || 'Condition A');

 
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      style: { top: '25%' },
    },
    {
      type: 'source',
      position: Position.Right,
      style: { top: '25%' },
    },
    {
      type: 'source',
      position: Position.Right,
      style: { top: '50%' },
    },
  ];

  return (
    <BaseNode
      id={id}
      type="Decision"
      handles={handles}
      additionalContent={
        <div className="flex flex-col space-y-4 mt-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor={`${id}-decisionName`}>Decision Name:</Label>
            <Input
              id={`${id}-decisionName`}
              type="text"
              value={decisionName}
              onChange={(e) => setDecisionName(e.target.value)}
              placeholder="Enter decision name"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor={`${id}-condition`}>Condition:</Label>
            <Select 
              value={condition} 
              onValueChange={(value) => setCondition(value)}
            >
              <SelectTrigger id={`${id}-condition`}>
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Condition A">Condition A</SelectItem>
                
                <SelectItem value="Condition B">Condition B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      }
    />
  );
};
