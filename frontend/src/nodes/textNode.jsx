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
            style={{
              backgroundColor: '#e0f7fa',
              padding: '0px 0px',
              borderRadius: '4px',
              marginRight: '2px',
              border: '1px solid #00acc1',
              display: 'inline-block',
            }}
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
              style={{ 
                width: '100%', 
                height: inputHeight,
                resize: 'none', 
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '15px',
                lineHeight: lineHeight,
                border: '1px solid #ccc',
                cursor: 'none',
                minHeight: '100px',
                backgroundColor: 'transparent',
                color: 'transparent',
                caretColor: 'black',
                position: 'absolute',
                top: 18,
                left: 0,
                zIndex: 2,
                boxSizing: 'border-box',
                spellCheck: 'false',
              }}
            />
          </div>

          <div
            ref={displayRef}
            style={{
              border: '1px solid #ccc',
              overflow: 'auto',
              backgroundColor: '#fff',
              minHeight: '100px',
              marginTop: '10px',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              position: 'relative',
              width: '100%',
              height: inputHeight,
              boxSizing: 'border-box',
              zIndex: 1,
              fontSize: '16px',
              spellCheck: 'false',
            }}
          >
            {formatText(currText)}
          </div>
        </div>
      }
    />
  );
};
