//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Item Tag Event
ServerEvents.tags('item', event => {

    //Variables
	let prefix = 'ad_astra:'

    //Venus Sandstone Tags
    event.add('forge:sandstone', prefix + 'venus_sandstone')
    event.add('forge:sandstone/venus_sandstone', prefix + 'venus_sandstone')
    event.add(prefix + 'venus_sandstone', prefix + 'venus_sandstone')
})