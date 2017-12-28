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
        this.sum = this.adjacentSum;
    }

    get distanceToCenter() {
        return Math.abs(this.x) + Math.abs(this.y);
    }

    get key() {
        return `${this.x},${this.y}`;
    }

    get adjacentSum() {
        let sum = 0;
        this.adjacentKeys.forEach(key => {
            if (this.memory.has(key)) {
                sum += this.memory.get(key).sum;
            }
        }, this);
        return sum || 1;
    }

    get adjacentKeys() {
        return [
            this.topRightKey,
            this.topKey,
            this.topLeftKey,
            this.leftKey,
            this.bottomLeftKey,
            this.bottomKey,
            this.bottomRightKey,
            this.rightKey
        ];
    }

    get topKey() {
        return `${this.x},${this.y + 1}`;
    }

    get topLeftKey() {
        return `${this.x - 1},${this.y + 1}`;
    }

    get topRightKey() {
        return `${this.x + 1},${this.y + 1}`;
    }

    get bottomKey() {
        return `${this.x},${this.y - 1}`;
    }

    get bottomRightKey() {
        return `${this.x + 1},${this.y - 1}`;
    }

    get bottomLeftKey() {
        return `${this.x - 1},${this.y - 1}`;
    }

    get rightKey() {
        return `${this.x + 1},${this.y}`;
    }

    get leftKey() {
        return `${this.x - 1},${this.y}`;
    }

    next() {
        let nextX = this.x;
        let nextY = this.y;
        let nextLevel = this.level;
        let nextDirection = this.direction;
        let nextMemory = this.memory.set(this.key, this);
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