'use strict';
const profile = {
    username: `Player1`,
    playTime: 0,
    changeUserName (newName){
        this.username = newName;
    },
    updatePlayTime (hours){
        this.playTime += hours;
    },
    getInfo(){
        return `Username: ${this.username}, Playtime: ${this.playTime} hours`;  
    }
}
console.log(profile.getInfo()); // Username: Player1, Play time: 0 hours

profile.changeUsername('ShadowHunter');
profile.updatePlayTime(5);

console.log(profile.getInfo()); // Username: ShadowHunter, Play time: 5 hours