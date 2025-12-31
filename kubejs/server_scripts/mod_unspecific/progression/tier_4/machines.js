//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //Basic Universal Cable Recipe
    event.remove({output: 'mekanism:basic_universal_cable'})
    event.shaped('8x mekanism:basic_universal_cable', [' B ', 'ACA', ' B ' ], {
		A: '#forge:ingots/osmium',
        B: 'thermal:cured_rubber',
        C: '#forge:dusts/redstone'
	})

    //Igneous Extruder Recipe
    event.remove({output: 'thermal:device_rock_gen'})
    event.shaped('thermal:device_rock_gen', ['ABA', 'CEC', 'ADA' ], {
        A: '#forge:ingots/invar',
        B: 'minecraft:piston',
        C: '#forge:glass',
        D: '#forge:gears/constantan',
        E: 'thermal:machine_frame'
    })

    //Machine Frame Recipe
    event.remove({output: 'thermal:machine_frame'})
    event.recipes.industrialforegoing.dissolution_chamber(
        [
            '#forge:plates/invar',
            '#industrialforegoing:machine_frame/simple',
            '#forge:plates/invar',
            'mekanism:structural_glass',
            'mekanism:structural_glass',
            '#forge:gears/invar',
            'mekanism:structural_glass',
            '#forge:gears/invar'
        ],
        Fluid.of('tconstruct:molten_aluminum', 500),
        'thermal:machine_frame',
        100
    )

    //Steel Casing Recipe
    event.remove({output: 'mekanism:steel_casing'})
    event.recipes.industrialforegoing.dissolution_chamber(
        [
            '#forge:rods/steel',
            '#forge:ingots/osmium',
            '#forge:rods/steel',
            'mekanism:structural_glass',
            'mekanism:structural_glass',
            '#forge:plates/steel',
            'mekanism:basic_universal_cable',
            '#forge:plates/steel'
        ],
        Fluid.of('tconstruct:molten_osmium', 500),
        'mekanism:steel_casing',
        100
    )
})
