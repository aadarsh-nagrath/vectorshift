import React, { useState, useRef, useEffect } from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';
import { Label } from "@/components/ui/label";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [inputHeight, setInputHeight] = useState('auto');
  const [lineHeight, setLineHeight] = useState(1.5);
  const textareaRef = useRef(null);
  const displayRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = `${textareaRef.current.scrollHeight}px`;
      setInputHeight(newHeight);
      textareaRef.current.style.height = newHeight;
      adjustLineHeight(textareaRef.current.scrollHeight);
    }
  }, [currText]);

  const adjustLineHeight = (scrollHeight) => {
    if (scrollHeight > 100 && scrollHeight <= 300) {
      setLineHeight(1.7);
    } else if (scrollHeight > 300 && scrollHeight <= 500) {
      setLineHeight(1.8);
    } else if (scrollHeight > 500) {
      setLineHeight(1.8);
    } else {
      setLineHeight(1.5);
    }
  };

  const formatText = (text) => {
    const parts = text.split(/({{.*?}})/g);
    return parts.map((part, index) => {
      if (part.startsWith('{{') && part.endsWith('}}')) {
        const blockText = part.slice(2, -2);
        return (
          <span
            key={index}
            className="bg-cyan-100 px-1 rounded mr-1 border border-cyan-400 inline-block"
          >
            {blockText}
          </span>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  const handleScroll = (event) => {
    if (displayRef.current) {
      displayRef.current.scrollTop = event.target.scrollTop;
      displayRef.current.scrollLeft = event.target.scrollLeft;
    }
  };

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
      type="Text"
      handles={handles}
      additionalContent={
        <div className="relative flex flex-col space-y-2 mt-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor={`${id}-textArea`}>Text</Label>
            <textarea
              id={`${id}-textArea`}
              value={currText}
              onChange={(e) => setCurrText(e.target.value)}
              placeholder="Type here"
              ref={textareaRef}
              onScroll={handleScroll}
              className="w-full resize-none rounded overflow-auto text-sm border border-gray-300 cursor-none min-h-[100px] bg-transparent text-transparent caret-black absolute top-4 left-0 z-10 box-border spell-check-none leading-${lineHeight}"

              style={{ height: inputHeight }} 
            />
          </div>

          <div
            ref={displayRef}
            className={`border border-gray-300 overflow-auto
              bg-white
              min-h-[100px] mt-2 whitespace-pre-wrap break-words relative w-full box-border z-0 text-base spell-check-none
            `}
            style={{ height: inputHeight }} 
          >
            {formatText(currText)}
          </div>
        </div>
      }
    />
  );
};
