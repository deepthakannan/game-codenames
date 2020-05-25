import React from 'react';
import { Player, Team } from './Player'
import { FormControl, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import ProfileStore from './ProfileStore';

type ProfileEditorStateType = {
    team: Team;
    name: string;
    currentProfile: {
        name: string | null;
        team: Team | null;
    };
};

type ProfileEditorPropType = {
    onSaveSuccess: (player: Player) => void;
};

class ProfileEditor extends React.Component<ProfileEditorPropType, ProfileEditorStateType> {
    constructor(props) {
       super(props);
       this.state = {
           team: ProfileStore.readPlayerTeamFromLocalStorage() || Team.Blue,
           name: ProfileStore.readPlayerFromLocalStorage() || "",
           currentProfile: {
               name: ProfileStore.readPlayerFromLocalStorage(),
               team: ProfileStore.readPlayerTeamFromLocalStorage()
           }
       }
    }

    handleTeamChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        console.log(value);
        this.setState({
            team: value as Team
        });
    }

    handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: event.target.value
        });
    }

    onSave = () => {
        ProfileStore.storePlayerInLocalStorage(this.state.name, this.state.team);
        this.props.onSaveSuccess(new Player(this.state.name, this.state.team));
    }

    render() {
        return <FormControl component="fieldset">
                    <TextField id="profile-name" label="Name" variant="outlined" required={true} onChange={this.handleNameChange}/>
                    <RadioGroup aria-label="team" name="Team" value={this.state.team} onChange={this.handleTeamChange}>
                        <FormControlLabel value={Team.Blue} control={<Radio />} label="Blue Agent" />
                        <FormControlLabel value={Team.Red} control={<Radio />} label="Red Agent" />
                    </RadioGroup>
                    <Button variant="contained" color="primary" onClick={this.onSave}>Looks good to me !</Button>
            </FormControl>;
    }
}

export default ProfileEditor;