export enum Team {
    Blue = "Blue",
    Red = "Red"
}
export class PlayerData {
    name: string;
    team: Team;
    
    constructor(name: string, team: Team) {
        this.name = name;
        this.team = team;
    }
}