import { DraggableNode } from './draggableNode';
import {Button} from './components/ui/button';
import {Card} from './components/ui/card';
import {Tooltip} from './components/ui/tooltip';

import { Search} from "lucide-react"

import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SubmitButton from './submit';

export const PipelineToolbar = () => {
    return (
        <Card
            style={{
                padding: '5px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
        >
            <h2
                style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    marginBottom: '16px',
                    color: '#333',
                }}
            >
                Pipeline Tools
                <hr size="7" />
            </h2>


            <div className="w-full max-w-6xl mb-2">
                <div className="flex items-center space-x-4 p-4">
                    <Tabs defaultValue="general">
                        <TabsList>
                            <TabsTrigger value="general">General</TabsTrigger>
                            <TabsTrigger value="llms">LLMs</TabsTrigger>
                            <TabsTrigger value="knowledge-base">Knowledge Base</TabsTrigger>
                            <TabsTrigger value="integrations">Integrations</TabsTrigger>
                            <TabsTrigger value="data-loaders">Data Loaders</TabsTrigger>
                            <TabsTrigger value="multi-modal">Multi-Modal</TabsTrigger>
                            <TabsTrigger value="logic">Logic</TabsTrigger>
                            <TabsTrigger value="chat">Chat</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <div className="relative flex-grow">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input type="search" placeholder="Search..." className="pl-8 pr-4" />
                    </div>
                    <SubmitButton/>
                </div>
            </div>

            <hr/>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '16px',
                    alignItems: 'center'
                }}
            >
                {['customInput', 'llm', 'customOutput', 'text', 'process'].map((type, index) => (
                    <Tooltip key={index} content={`Drag and drop to add a ${type} node`}>
                        <Button variant="outline" size="small">
                            <DraggableNode type={type} label={type.charAt(0).toUpperCase() + type.slice(1)} />
                        </Button>
                    </Tooltip>
                ))}
            </div>
        </Card>
    );
};
