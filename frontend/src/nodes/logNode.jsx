import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export const LogNode = ({ id, data }) => {
  const [loggerName, setLoggerName] = useState(data?.loggerName || 'Logger');
  
  const [logLevel, setLogLevel] = useState(data?.logLevel || 'Info');
  const [message, setMessage] = useState(data?.message || 'Log message');

  return (
    <BaseNode
      id={id}
      type="Log"
      additionalHandles={
        <>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-input`}

            style={{ top: '25%' }}
          />
          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-output`}

            style={{ top: '25%' }}
          />
          <div className="flex flex-col space-y-4 mt-4">

            <div className="flex flex-col space-y-2">
              <Label htmlFor={`${id}-loggerName`}>Logger Name:</Label>
              <Input
                id={`${id}-loggerName`}
                type="text"

                value={loggerName}
                onChange={(e) => setLoggerName(e.target.value)}
                placeholder="Enter logger name"
              />
            </div>

            <div className="flex flex-col space-y-2">

              <Label htmlFor={`${id}-logLevel`}>Log Level:</Label>
              <Select 
                value={logLevel} 
                onValueChange={(value) => setLogLevel(value)}
              >
                <SelectTrigger id={`${id}-logLevel`}>

                  <SelectValue placeholder="Select log level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Info">Info</SelectItem>
                  <SelectItem value="Warning">Warning</SelectItem>

                  <SelectItem value="Error">Error</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor={`${id}-message`}>Message:</Label>
              <Input
                id={`${id}-message`}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}

                placeholder="Enter log message"
              />
            </div>
          </div>
        </>
      }
    />
  );
};
