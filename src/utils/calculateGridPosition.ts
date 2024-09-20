export const calculateGridPosition = (
    index: number,
    totalNodes: number,
    gridSize: number = 250
) => {
    const columns = Math.ceil(Math.sqrt(totalNodes))

    return {
        x: (index % columns) * gridSize,
        y: Math.floor(index / columns) * gridSize
    }
}
