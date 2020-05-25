import { Card } from "../Game/Card";
import { Player, Team } from "./Player";

export default class ProfileStore {
    static teamKey: string = "team";
    static playerKey: string = "player";
    static getFromLocalStorage = (key: string) => {
        return window.localStorage.getItem(key);
    }

    static storeInLocalStorage = (key: string, value: string) => {
        return window.localStorage.setItem(key, value);
    }

    static removeItem = (key: string) => {
        window.localStorage.removeItem(key);
    }

    static readPlayerFromLocalStorage = () => {
        return ProfileStore.getFromLocalStorage(ProfileStore.playerKey);
    }

    static readPlayerTeamFromLocalStorage = () => {
        return ProfileStore.getFromLocalStorage(ProfileStore.teamKey) as Team | null;
    }

    static storePlayerInLocalStorage = (name: string, team: Team) => {
        ProfileStore.storeInLocalStorage(ProfileStore.playerKey, name);
        if (team) {
            ProfileStore.storeInLocalStorage(ProfileStore.teamKey, team);
        }
    }

    static resetPlayer = () => {
        ProfileStore.removeItem(ProfileStore.playerKey);
    }

    static resetTeam = () => {
        ProfileStore.removeItem(ProfileStore.teamKey);
    }
}