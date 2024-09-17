import BaseNode from './BaseNode';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <BaseNode 
      id={id}
      type="Output"
      additionalHandles={
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor={`${id}-name`}>Name:</Label>
            <Input 
              id={`${id}-name`} 
              type="text" 
              value={currName} 
              onChange={(e) => setCurrName(e.target.value)} 
              placeholder="Enter output name" 
            />
          </div>

          {/* Type Select */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor={`${id}-type`}>Type:</Label>
            <Select 
              value={outputType} 
              onValueChange={(value) => setOutputType(value)}
            >
              <SelectTrigger id={`${id}-type`}>
                <SelectValue placeholder="Select output type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Text">Text</SelectItem>
                <SelectItem value="Image">Image</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      }
    />
  );
}
