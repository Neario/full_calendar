export class AireRectangle {
    /**
     * 
     * @param {int} longueur: int
     * @param {int} largeur 
     */
    constructor(longueur, largeur) {
        this.longueur = longueur;
        this.largeur = largeur;
    }

    get Area() {
        return console.log(`${this.longueur}`*`${this.largeur}`);
    }
}