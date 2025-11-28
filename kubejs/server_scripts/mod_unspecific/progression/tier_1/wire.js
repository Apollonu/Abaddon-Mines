//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //Spool Recipe
    event.remove({output: 'createaddition:spool'})
    event.shaped('2x createaddition:spool', [' A', ' B', ' A' ], {
		A: '#minecraft:wooden_slabs',
		B: '#forge:rods/wooden'
	})
    
    //Coil Types
    let coil_types = [
        'copper',
        'electrum',
        'redstone',
        'steel',
        'structure_rope'
    ].forEach(type => {
        event.replaceInput({output: 'immersiveengineering:wirecoil_' + type},
            '#forge:rods/wooden',
            'createaddition:spool'
        )
    })
})