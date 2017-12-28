/** DIRECTIONS */
const DIRECTIONS = {
    EAST: "EAST",
    NORTH: "NORTH",
    WEST: "WEST",
    SOUTH: "SOUTH"
};

class Direction {
    constructor(startingDirection) {
        this.direction = startingDirection || DIRECTIONS.EAST;
    }

    get() {
        return this.direction;
    }

    next() {
        let nextDirection;
        switch (this.get()) {
            case DIRECTIONS.EAST:
                nextDirection = DIRECTIONS.NORTH;    
                break;
            case DIRECTIONS.NORTH:
                nextDirection = DIRECTIONS.WEST;
                break;
            case DIRECTIONS.WEST:
                nextDirection = DIRECTIONS.SOUTH;
                break;
            default:
                nextDirection = DIRECTIONS.EAST;
                break;
        };
        return new Direction(nextDirection);
    }
}

module.exports.DIRECTIONS = DIRECTIONS;
module.exports.Direction = Direction;