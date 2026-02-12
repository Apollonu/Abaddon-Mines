//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {

    //Variables
	let prefix = 'netherexp:'

    //Log Tags
    event.get(prefix + 'claret_stems')
    .getObjectIds().forEach(individual => {
        event.add('minecraft:logs', individual)
    })
})