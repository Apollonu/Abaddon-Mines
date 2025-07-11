//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

ServerEvents.recipes(event => {
	
	//Variables
	let smeltable_variants = [
		'#create:crushed_raw_materials/',
		'#forge:dusts/'
	]

	//Easy Types
	let easy_types = [
		'copper',
		'gold',
		'iron',
		'lead',
		'nickel',
		'silver',
		'tin',
		'zinc'
	].forEach(type => {
		let xp
		event.remove({output: '#forge:ingots/' + type, type: 'minecraft:smelting'})
		event.remove({output: '#forge:ingots/' + type, type: 'minecraft:blasting'})
		smeltable_variants.forEach(variant => {
			if (variant.includes('dust')) xp = 0.35
			if (variant.includes('raw')) xp = 0.1
			event.blasting('#forge:ingots/' + type, variant + type).xp(xp)
			event.smelting('#forge:ingots/' + type, variant + type).xp(xp)
		})
	})

	//Medium Types
	let medium_types = [
		'aluminum',
		'desh',
		'calorite',
		'osmium',
		'ostrum',
		'uranium'
	].forEach(type => {
		event.remove({output: '#forge:ingots/' + type, type: 'minecraft:smelting'})
		event.remove({output: '#forge:ingots/' + type, type: 'minecraft:blasting'})
		event.remove({output: '#forge:ingots/' + type, type: 'immersiveengineering:arc_furnace'})
		smeltable_variants.forEach(variant => {
			event.recipes.immersiveengineering.arc_furnace(['#forge:ingots/' + type], variant + type, [])
			event.recipes.mekanism.enriching('#forge:ingots/' + type, variant + type)
			let thermal_individual = variant.replace('#', '') + type
			event.custom({
				'type': 'thermal:smelter',
				'ingredients': [
					{
						'value': [{'tag': thermal_individual}],
						'count': 1
					}
				],
				'result': [{
					'tag': 'forge:ingots/' + type,
					'count': 1
				}],
				'energy': 3000
			})
		})
	})
})