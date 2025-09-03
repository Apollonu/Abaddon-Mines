//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modification Event
ItemEvents.modification(event => {

	//Variables
	let tool_variants = [
		'axe',
		'hoe',
		'pickaxe',
		'shovel',
		'sword'
	]

	//Fishing Rods
	event.modify('tide:iron_fishing_rod', item => {
		item.maxDamage = 80
	})
	event.modify('tide:crystal_fishing_rod', item => {
		item.maxDamage = 64
	})

	//Screwdriver
	event.modify('immersiveengineering:screwdriver', item => {
		item.maxDamage = 250
	})

	//Material Types
	let material_types = [
		'wooden_',
		'stone_'
	].forEach(type => {
		tool_variants.forEach(variant => {
			let individual = 'minecraft:' + type + variant
			if (type.includes('wooden_')) {
				event.modify(individual, item => {
					item.maxDamage = 6
				})
			}
			else if (type.includes('stone_')) {
				event.modify(individual, item => {
					item.maxDamage = 32
				})
			}
		})
	})
})