//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

	//Fermentation Station Recipe
	event.remove({output: 'industrialforegoing:fermentation_station'})
	event.shaped('industrialforegoing:fermentation_station', ['ABA','BCB','ADA'], {
		A: '#forge:plastic',
		B: '#minecraft:logs',
		C: '#forge:gears/gold',
		D: '#industrialforegoing:machine_frame/advanced'
	})
    
	//Mechanical Dirt Recipe
   	event.remove({output: 'industrialforegoing:mechanical_dirt'})
	event.recipes.industrialforegoing.dissolution_chamber(
		[
			'#minecraft:dirt',
			'#minecraft:dirt',
			'minecraft:rotten_flesh',
			'minecraft:rotten_flesh',
			'#industrialforegoing:machine_frame/advanced'
		],
        Fluid.of('industrialforegoing:meat', 1000),
        'industrialforegoing:mechanical_dirt',
        100
    )
})
