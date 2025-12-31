//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
	//Oxugen Gear Recipe
	event.remove('ad_astra:oxygen_gear')
	event.shaped('ad_astra:oxygen_gear', [' C ', 'BEB', 'ADA'], {
        A: '#forge:plates/steel',
        B: '#forge:rods/steel',
		C: 'pneumaticcraft:reinforced_pressure_tube',
        D: 'pneumaticcraft:air_canister',
        E: 'pneumaticcraft:regulator_tube_module'
    })

    //Space Helmet
    event.remove('ad_astra:space_helmet')
    event.shaped('ad_astra:space_helmet', ['BEB', 'ADA', ' C '], {
        A: '#forge:plates/steel',
        B: '#minecraft:wool',
		C: '#forge:glass_panes',
        D: 'immersiveengineering:armor_faraday_helmet',
        E: 'pneumaticcraft:pressure_tube'
    })

    //Space Suit
    event.remove('ad_astra:space_suit')
    event.shaped('ad_astra:space_suit', ['FEF', 'CDC', 'ABA'], {
        A: '#forge:plates/steel',
        B: '#minecraft:wool',
		C: 'ad_astra:gas_tank',
        D: 'ad_astra:oxygen_gear',
        E: 'immersiveengineering:armor_faraday_chestplate',
        F: 'ad_astra:steel_cable'
    })

    //Space Pants
    event.remove('ad_astra:space_pants')
    event.shaped('ad_astra:space_pants', ['ADA', 'BCB', 'A A'], {
        A: '#forge:plates/steel',
        B: '#minecraft:wool',
		C: 'immersiveengineering:armor_faraday_leggings',
        D: 'industrialforegoing:fluid_transporter_type'
    })

    //Space Boots
    event.shaped('ad_astra:space_boots', ['BCB', 'A A'], {
        A: '#forge:plates/steel',
        B: '#minecraft:wool',
		C: 'pneumaticcraft:compressed_iron_boots'
    })

    //Coal Generator Recipe
    event.remove({output: 'ad_astra:coal_generator'})
    event.shaped('ad_astra:coal_generator', ['BCB', 'DAD', 'BCB' ], {
		A: '#forge:furnaces',
		B: '#forge:ingots/steel',
        C: '#forge:plates/osmium',
        D: 'immersiveengineering:cokebrick'
	})

    //Compressor Recipe
    event.remove({output: 'ad_astra:compressor'})
    event.shaped('ad_astra:compressor', ['BDB', 'CAC', 'BDB' ], {
		A: 'industrialforegoing:machine_frame_simple',
        B: '#forge:ingots/steel',
        C: '#forge:plates/osmium',
        D: 'minecraft:piston'
	})
})