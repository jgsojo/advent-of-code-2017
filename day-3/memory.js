const {Direction, DIRECTIONS} = require('./direction');

/** MEMORY */
class MemoryPosition {
    constructor(memory, x, y, level, direction, value) {
        this.x = x || 0;
        this.y = y || 0;
        this.level = level || 0;
        this.direction = direction || new Direction();
        this.value = value || 1;
        this.memory = memory;
    }

    get distanceToCenter() {
        return Math.abs(this.x) + Math.abs(this.y);
    }

    get coordinates() {
        return {
            x: this.x, 
            y: this.y
        };
    }

    get adjacentSum() {
        let sum = 0;

        return sum || 1;
    }

    next() {
        let nextX = this.x;
        let nextY = this.y;
        let nextLevel = this.level;
        let nextDirection = this.direction;
        let nextMemory = this.memory.set(this.coordinates, this);
        let nextValue = this.value + 1;
        switch (this.direction.get()) {
            case DIRECTIONS.EAST:
                nextX++;
                if (nextX > nextLevel) {
                    nextLevel++;
                    nextDirection = nextDirection.next();
                }
                break;
            case DIRECTIONS.NORTH:
                nextY++;
                if (nextY === nextLevel) {
                    nextDirection = nextDirection.next();
                }
                break;
            case DIRECTIONS.WEST:
                nextX--;
                if (nextX === -nextLevel) {
                    nextDirection = nextDirection.next();
                }
                break;
            default:
                nextY--;
                if (nextY === -nextLevel) {
                    nextDirection = nextDirection.next();
                }
                break;
        };
        return new MemoryPosition(nextMemory, nextX, nextY, nextLevel, nextDirection, nextValue);
    }
}

module.exports.MemoryPosition = MemoryPosition;