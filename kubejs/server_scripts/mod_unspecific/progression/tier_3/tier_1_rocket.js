//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
	//Launchpad Recipe
    event.remove({output: 'ad_astra:launch_pad'})
    event.recipes.createMechanicalCrafting('ad_astra:launch_pad', [
        ' CCC ', 'CADAC', 'CDBDC', 'CADAC', ' CCC '
    ], {
        A: '#forge:storage_blocks/steel',
        B: 'immersiveengineering:rs_engineering',
        C: '#forge:plates/steel',
        D: '#forge:rods/steel'
    })

    //Fuel Refinery Recipe
    event.remove('ad_astra:fuel_refinery')
    event.shaped('ad_astra:fuel_refinery', ['BEB', 'CAC', 'BDB'], {
        A: 'industrialforegoing:machine_frame_pity',
        B: '#forge:plates/steel',
        C: '#forge:buckets/empty',
        D: 'tfmg:steel_distillation_output',
        E: '#forge:gears/iron'
    })

	//Rocket Fins Recipe
    event.remove({output: 'ad_astra:rocket_fin'})
	event.recipes.create.sequenced_assembly(['ad_astra:rocket_fin'], '#forge:plates/steel', [
		event.recipes.createDeploying('kubejs:incomplete_rocket_fin', ['kubejs:incomplete_rocket_fin', '#forge:plates/steel']),
		event.recipes.createDeploying('kubejs:incomplete_rocket_fin', ['kubejs:incomplete_rocket_fin', '#forge:plates/steel']),
		event.recipes.vintage.curving('kubejs:incomplete_rocket_fin', 'kubejs:incomplete_rocket_fin').mode(2).headDamage(40),
		event.recipes.create.pressing('kubejs:incomplete_rocket_fin', 'kubejs:incomplete_rocket_fin'),
		event.recipes.create.pressing('kubejs:incomplete_rocket_fin', 'kubejs:incomplete_rocket_fin')
	]).transitionalItem('kubejs:incomplete_rocket_fin').loops(1)

	//Engine Frame Recipe
    event.remove('ad_astra:engine_frame')
    event.shaped('ad_astra:engine_frame', ['CBC', 'BAB', 'CBC'], {
        A: 'immersiveengineering:light_engineering',
        B: '#forge:plates/steel',
        C: '#forge:rods/steel'
    })

	//Gas Tank Recipe
    //event.remove('ad_astra:gas_tank')
    event.shaped('ad_astra:gas_tank', ['B ', 'CA', 'AA'], {
        A: '#forge:plates/aluminum',
        B: '#forge:rods/iron',
		C: 'pneumaticcraft:air_canister'
    })

	//Steel Tank Recipe
	event.remove('ad_astra:steel_tank')
	event.shaped('ad_astra:steel_tank', ['AAC', 'ABD', 'AA '], {
        A: '#forge:plates/steel',
        B: 'ad_astra:gas_tank',
		C: '#forge:rods/steel',
		D: 'pneumaticcraft:regulator_tube_module'
    })

    //Tier 1 Rocket Recipe
    event.recipes.createMechanicalCrafting('ad_astra:tier_1_rocket', [
        '  E  ', '  I  ', ' AGA ', ' AGA ', ' HGH ', 'CBFBC', 'C D C'
    ], {
        A: '#forge:storage_blocks/steel',
        B: 'ad_astra:steel_tank',
        C: 'ad_astra:rocket_fin',
        D: 'ad_astra:steel_engine',
        E: 'ad_astra:rocket_nose_cone',
        F: 'immersiveengineering:heavy_engineering',
        G: 'immersiveengineering:steel_scaffolding_standard',
        H: 'ad_astra:cable_duct',
        I: 'immersiveengineering:sheetmetal_steel'
    })
})