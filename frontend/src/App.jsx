import { useState } from "react";
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import Navigation from './components/created-comp/Navigation';
import { TooltipProvider } from './components/ui/tooltip'; 

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = (isOpen) => {
    setSidebarOpen(isOpen);
  };

  return (
    <div>
      <Navigation onToggle={handleSidebarToggle} />
      <div
        className={`transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-20"} relative`}
      >
        <TooltipProvider>
            <PipelineToolbar />
        </TooltipProvider>
        <PipelineUI />
      </div>
    </div>
  );
}

export default App;
