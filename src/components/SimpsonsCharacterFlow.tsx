import { useState } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    BackgroundVariant,
    Node,
    Edge
} from '@xyflow/react';
import { simpsonsNodes } from '../utils/simpsonsNodes';
import SimpsonsCustomNode from './SimpsonsCustomNode';
import simpsonsData from '../data/the-simpsons.json'

import '@xyflow/react/dist/style.css';

const nodeTypes = {
    customNode: SimpsonsCustomNode
}

const defaultViewport = {
    x: 50,
    y: 50,
    zoom: 1.2
}

function SimpsonsCharacterFlow() {
    const [nodes, , onNodesChange] = useNodesState(simpsonsNodes);
    const [edges, setEdges] = useState<Edge[]>([])

    const handleNodeClick = (_event: React.MouseEvent, node: Node) => {
        const character = simpsonsData.characters.find(character => character.id === node.id)

        if (!character) return;

        const relatedEdges: Edge[] = character.relationships.map(relationship => ({
            id: `${node.id}-${relationship}`,
            source: node.id,
            target: relationship
        }))

        setEdges(relatedEdges)
    }

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                nodeTypes={nodeTypes}
                onNodeClick={handleNodeClick}
                onNodesChange={onNodesChange}
                edges={edges}
                defaultViewport={defaultViewport}
            >
                <Controls />
                <MiniMap />
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
        </div>
    );
}

export default SimpsonsCharacterFlow;
