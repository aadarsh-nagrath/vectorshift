import { Search, FileInput, FileOutput, FileText, GitBranch, Wand2, Save, FileEdit } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Toolbar() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex items-center space-x-4 p-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input type="search" placeholder="Search..." className="pl-8 pr-4" />
        </div>
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
      </div>
      <div className="flex items-center space-x-2 p-4 border-t">
        <Button variant="outline" size="icon">
          <FileInput className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <FileOutput className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <FileText className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <GitBranch className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Wand2 className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Save className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <FileEdit className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
