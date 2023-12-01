class Point {
    private readonly x: number;
    private readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    // Méthode pour calculer la distance de Manhattan par rapport à un autre point
    manhattanDistance(other: Point): number {
        // Comme les propriétés sont privées, elles sont accessibles ici
        return Math.abs(this.x - other.x) + Math.abs(this.y - other.y);
    }
}

// Utilisation
const point1 = new Point(3, 4);
const point2 = new Point(1, 1);

const distance = point1.manhattanDistance(point2);
console.log(distance); // Affichera la distance de Manhattan entre point1 et point2
