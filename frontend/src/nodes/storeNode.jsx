import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export const StoreNode = ({ id, data }) => {
  const [storageName, setStorageName] = useState(data?.storageName || 'Storage');
  const [storageType, setStorageType] = useState(data?.storageType || 'Database');

 
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
      type="Store"
      handles={handles}
      additionalContent={
        <div className="flex flex-col space-y-4 mt-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor={`${id}-storageName`}>Storage Name:</Label>
            <Input
              id={`${id}-storageName`}

              type="text"
              value={storageName}

              onChange={(e) => setStorageName(e.target.value)}
              placeholder="Enter storage name"

            />
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor={`${id}-storageType`}>Storage Type:</Label>
            <Select 
              value={storageType} 
              onValueChange={(value) => setStorageType(value)}
            >
              <SelectTrigger id={`${id}-storageType`}>

                <SelectValue placeholder="Select storage type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Database">Database</SelectItem>
                
                <SelectItem value="File System">File System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      }
    />
  );
};
