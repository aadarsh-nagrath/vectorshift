import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const LoopNode = ({ id, data }) => {
  const [loopName, setLoopName] = useState(data?.loopName || 'Loop');
  const [iterations, setIterations] = useState(data?.iterations || '10');

  return (
    <BaseNode
      id={id}
      type="Loop"
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
              <Label htmlFor={`${id}-loopName`}>Loop Name:</Label>
              <Input
                id={`${id}-loopName`}
                type="text"
                value={loopName}
                onChange={(e) => setLoopName(e.target.value)}

                placeholder="Enter loop name"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <Label htmlFor={`${id}-iterations`}>Iterations:</Label>
              <Input
                id={`${id}-iterations`}
                type="number"
                value={iterations}

                onChange={(e) => setIterations(e.target.value)}
                placeholder="Enter number of iterations"
              />
            </div>
          </div>
        </>
      }
    />
  );
};
