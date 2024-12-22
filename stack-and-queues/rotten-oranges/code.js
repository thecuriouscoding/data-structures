
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    if (!grid || grid.length === 0) return 0;
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let countFresh = 0;

    // Put the position of all rotten oranges in the queue
    // Count the number of fresh oranges
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
            if (grid[i][j] !== 0) {
                countFresh++;
            }
        }
    }

    if (countFresh === 0) return 0;

    let countMin = 0, countProcessed = 0;
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    // BFS starting from initially rotten oranges
    while (queue.length > 0) {
        const size = queue.length;
        countProcessed += size;

        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift();
            for (let j = 0; j < 4; j++) {
                const nx = x + dx[j];
                const ny = y + dy[j];

                if (
                    nx < 0 || ny < 0 || nx >= rows || ny >= cols || 
                    grid[nx][ny] === 0 || grid[nx][ny] === 2
                ) {
                    continue;
                }

                grid[nx][ny] = 2;
                queue.push([nx, ny]);
            }
        }

        if (queue.length > 0) {
            countMin++;
        }
    }

    return countFresh === countProcessed ? countMin : -1;
};