//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Loaded Event
ServerEvents.loaded(event => {

    //Gamerules
    event.server.runCommandSilent('/gamerule announceAdvancements false')
    event.server.runCommandSilent('/gamerule playersSleepingPercentage 65')
    event.server.runCommandSilent('/gamerule spawnRadius 1024')
})