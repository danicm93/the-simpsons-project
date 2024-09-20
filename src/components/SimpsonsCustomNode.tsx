import { Handle, Position } from "@xyflow/react"
import { Character } from "../types/simpsonsType"

interface SimpsonsCustomNodeProps {
    data: Character
}

function SimpsonsCustomNode({ data }: SimpsonsCustomNodeProps) {
    return (
        <div className="rounded-md border-2 border-stone-400 bg-white px-4 py-2 shadow-md">
            <Handle type="target" position={Position.Top} className="size-2 bg-yellow-300" />

            <div className="flex">
                <div className="flex size-12 items-center justify-center rounded-full bg-gray-100">
                    <img
                        src={`/assets/images/${data.image}`}
                        alt={data.name}
                        className="size-12 rounded-full"
                    />
                </div>
                <div className="ml-2">
                    <div className="text-lg font-bold">
                        {data.name}
                    </div>
                </div>
            </div>

            <Handle type="source" position={Position.Bottom} className="size-2 bg-yellow-300" />
        </div>
    )
}

export default SimpsonsCustomNode
