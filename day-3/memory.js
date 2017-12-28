const {Direction, DIRECTIONS} = require('./direction');

/** MEMORY */
class MemoryPosition {
    constructor(x, y, level, direction) {
        this.x = x || 0;
        this.y = y || 0;
        this.level = level || 0;
        this.direction = direction || new Direction();
    }

    get distanceToCenter() {
        return Math.abs(this.x) + Math.abs(this.y);
    }

    next() {
        let nextX = this.x;
        let nextY = this.y;
        let nextLevel = this.level;
        let nextDirection = this.direction;
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
        return new MemoryPosition(nextX, nextY, nextLevel, nextDirection);
    }
}

module.exports.MemoryPosition = MemoryPosition;