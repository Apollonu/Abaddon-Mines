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
        'tfmg:aluminum_axe',
        'tconstruct:broad_axe',
        'tconstruct:hand_axe',
        'tconstruct:mattock'
    ].forEach(individual => {
        event.add(prefix + 'weak_saws', individual)
    })
})