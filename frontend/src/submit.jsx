import React, { useState } from 'react';
import { useStore } from './store';
import { Button } from './components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Progress } from './components/ui/progress';
import { toast } from "@/components/ui/toast";

const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges
    }));

    const [nodeData, setNodeData] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const submitPipeline = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error('Network response not ok');
            }

            const result = await response.json();
            setNodeData(result);
            setDrawerOpen(true);


            toast({
                title: "Pipeline Analysis",
                description: `Nodes: ${result.num_nodes}, Edges: ${result.num_edges}, Is DAG: ${result.is_dag ? "Yes" : "No"}`,
            });
            alert(`Pipeline Analysis:\nNodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nIs DAG: ${result.is_dag ? "Yes" : "No"}`);

        } catch (error) {
            console.error('There was a problem:', error);
            toast({
                title: "Error",
                description: "Failed to submit pipeline.",
                variant: "destructive"
            });
        }
    };

    return (
        <>
            <Button onClick={submitPipeline} style={buttonStyle}>
                Submit Pipeline
            </Button>

            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} style={{ maxHeight: '80vh' }}>
                <DrawerContent>

                    <div className="mx-auto w-full max-w-md">

                        <DrawerHeader>
                            <DrawerTitle>Pipeline Analysis</DrawerTitle>
                            <DrawerDescription>
                                Analysis of the submitted pipeline structure.
                            </DrawerDescription>
                        </DrawerHeader>

                        <div className="p-4 pb-0">
                            {nodeData ? (
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <strong>Pipeline Details</strong>
                                    </div>
                                    <div>
                                        <strong>Number of Nodes:</strong> {nodeData.num_nodes}
                                    </div>
                                    <Progress value={nodeData.num_nodes} max={100} label="Node Progress" />

                                    <div>
                                        <strong>Number of Edges:</strong> {nodeData.num_edges}
                                    </div>
                                    <Progress value={nodeData.num_edges} max={100} label="Edge Progress" />

                                    <div>
                                        <strong>Is Directed Acyclic Graph (DAG):</strong> {nodeData.is_dag ? "Yes" : "No"}
                                    </div>
                                    <div>
                                        {nodeData.is_dag ? (
                                            <p className="text-green-500">The pipeline forms a valid DAG.</p>
                                        ) : (
                                            <p className="text-red-500">The pipeline does not form a DAG.</p>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <p className="text-center">No data received yet.</p>
                            )}
                        </div>

                        <DrawerFooter>
                            <DrawerClose asChild>
                                <Button variant="destructive">Close</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
};

export default SubmitButton;
