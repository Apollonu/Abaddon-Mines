//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Invar Dust
	event.remove({output: '#forge:dusts/invar', type: 'minecraft:crafting_shapeless'})
	event.remove({input: '#forge:dusts/invar', type: 'thermal:centrifuge'})
	event.recipes.create.mixing('6x #forge:dusts/invar', [
		'6x #forge:dusts/iron',
		'3x #forge:dusts/nickel',
		'#forge:dusts/osmium'
	])
	event.custom({
		'type': 'thermal:centrifuge',
		'ingredient': {
			'tag': 'forge:dusts/invar',
			'count': 6
		},
		'result': [
			{
				'tag': 'forge:dusts/iron',
				'count': 6
			}, {
				'tag': 'forge:dusts/nickel',
				'count': 3
			}, {
				'tag': 'forge:dusts/osmium'
			}
		],
		'energy': 3000
	})
	
	//Invar Ingot
	event.remove({output: '#forge:ingots/invar', input: '#forge:ingots/iron', type: 'immersiveengineering:arc_furnace'})
	event.remove({output: '#forge:ingots/invar', input: 'minecraft:fire_charge', type: 'minecraft:crafting_shapeless'})
	event.remove({output: '#forge:ingots/invar', input: '#forge:ingots', type: 'thermal:smelter'})
	let crafting_types = [
		'immersiveengineering:alloy',
		'minecraft:blasting',
		'minecraft:smelting'
	].forEach(type => {
		event.remove({output: '#forge:ingots/invar', type: type})
	})

	event.recipes.immersiveengineering.arc_furnace(['6x #forge:ingots/invar'], '6x #forge:ingots/iron', [
		'3x #forge:ingots/nickel',
		'#forge:ingots/osmium'
	])
	event.recipes.mekanism.enriching('thermal:invar_ingot', '#forge:dusts/invar')
	event.custom({
		'type': 'thermal:smelter',
		'ingredients': [
			{
				'value': [
					{
					'tag': 'forge:ingots/iron'
					}, {
					'tag': 'forge:dusts/iron'
					}
				],
				'count': 6
			},
			{
				'value': [
					{
					'tag': 'forge:ingots/nickel'
					}, {
					'tag': 'forge:dusts/nickel'
					}
				],
				'count': 3
			},
			{
				'value': [
					{
					'tag': 'forge:ingots/osmium'
					}, {
					'tag': 'forge:dusts/osmium'
					}
				],
				'count': 1
			}
		],
		'result': [{
			'tag': 'forge:ingots/invar',
			'count': 6
		}],
		'energy': 3000
	})
})