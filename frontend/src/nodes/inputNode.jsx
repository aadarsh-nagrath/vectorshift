import BaseNode from './BaseNode';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      type="Input"
      additionalHandles={
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              type="text" 
              value={currName} 
              onChange={(e) => setCurrName(e.target.value)} 
              placeholder="Enter input name" 
            />
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="inputType">Type</Label>
            <Select value={inputType} onValueChange={(value) => setInputType(value)}>
              <SelectTrigger id="inputType">
                <SelectValue placeholder="Select input type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Text">Text</SelectItem>
                <SelectItem value="File">File</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      }
    />
  );
};
