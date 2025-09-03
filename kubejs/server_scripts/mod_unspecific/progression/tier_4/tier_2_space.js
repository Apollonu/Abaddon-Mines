//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
    //Variables
    let plate_variants = [
        'calorite',
        'desh',
        'ostrum'
    ]

    //Etrionic Blast Furnace Recipe
    event.remove({output: 'ad_astra:etrionic_blast_furnace'})
    event.shaped('ad_astra:etrionic_blast_furnace', ['BBB', 'DAD', 'BCB' ], {
		A: 'industrialforegoing:machine_frame_simple',
        B: '#forge:plates/steel',
        C: '#forge:circuits/elite',
        D: 'immersiveengineering:wirecoil_redstone'
	})

    //Plate Types
    let plate_types = [
        'create:pressing',
        'minecraft:crafting_shapeless'
    ].forEach(type => {
        plate_variants.forEach(variant => {
            event.remove({output: '#forge:plates/' + variant, type: type})
        })
    })
})