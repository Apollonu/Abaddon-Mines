//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Item Tag Event
ServerEvents.tags('item', event => {
    
    //Variables
	let prefix = 'notreepunching:'

    //Individual Axes
    let individual_axes = [
        'everythingcopper:copper_axe',
        'immersiveengineering:axe_steel',
        'oreganized:electrum_axe',
        'silentgear:axe',
        'silentgear:machete',
        'silentgear:mattock',
        'silentgear:paxel',
        'tfmg:aluminum_axe'
    ].forEach(individual => {
        event.add(prefix + 'weak_saws', individual)
    })

    //Individual Saws
    let individual_saws = [
        'silentgear:saw'
    ].forEach(individual => {
        event.add(prefix + 'saws', individual)
    })
})