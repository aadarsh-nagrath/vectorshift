import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const ProcessNode = ({ id, data }) => {
  const [processName, setProcessName] = useState(data?.processName || 'Process');
  const [processType, setProcessType] = useState(data?.processType || 'Type A');
  const [description, setDescription] = useState(data?.description || '');

 
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`,
      style: { top: '25%' },
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
      style: { top: '25%' },
    },
  ];

  return (
    <BaseNode
      id={id}
      type="Process"
      handles={handles}
      additionalContent={
        <div className="flex flex-col space-y-4 mt-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor={`${id}-processName`}>Process Name:</Label>
            <Input
              id={`${id}-processName`}
              type="text"
              value={processName}
              onChange={(e) => setProcessName(e.target.value)}
              placeholder="Enter process name"
            />
          </div>

          {/* Process Type */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor={`${id}-processType`}>Process Type:</Label>
            <Select 
              value={processType} 
              onValueChange={(value) => setProcessType(value)}
            >
              <SelectTrigger id={`${id}-processType`}>
                <SelectValue placeholder="Select process type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Type A">Type A</SelectItem>
                <SelectItem value="Type B">Type B</SelectItem>
                <SelectItem value="Type C">Type C</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor={`${id}-description`}>Description:</Label>
            <Textarea
              id={`${id}-description`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </div>
        </div>
      }
    />
  );
};
