from fastapi import FastAPI, Request

from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# cors
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: List[Dict]

    edges: List[Dict]


@app.post("/pipelines/parse")
async def parse_pipeline(data: PipelineData):
    num_nodes = len(data.nodes)
    num_edges = len(data.edges)
    is_dag = check_if_dag(data.nodes, data.edges)
    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": is_dag}




def check_if_dag(nodes: List[Dict], edges: List[Dict]) -> bool:
    from collections import defaultdict, deque

    graph = defaultdict(list)
    in_degree = defaultdict(int)

    # graph
    for edge in edges:
        source = edge["source"]
        target = edge["target"]

        
        graph[source].append(target)

        in_degree[target] += 1
        if source not in in_degree:
            in_degree[source] = 0

    # Topological sort
    queue = deque([node["id"] for node in nodes if in_degree[node["id"]] == 0])
    visited = 0

    while queue:

        node = queue.popleft()
        visited += 1

        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:

                queue.append(neighbor)

    return visited == len(nodes)
