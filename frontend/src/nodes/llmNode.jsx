import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';
import { Label } from "@/components/ui/label";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      type="LLM"
      additionalHandles={
        <>
          {/* left */}
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-system`}
            style={{ top: `${100 / 3}%` }}
          />
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-prompt`}
            style={{ top: `${200 / 3}%` }}
          />

          {/* right */}

          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-response`}
          />

          <div className="mt-4">
            <Label>This is an LLM node.</Label>
          </div>
        </>
      }
    />
  );
}
