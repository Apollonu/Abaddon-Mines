//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Variables
const individual_logs = []
const individual_stripped_logs = []

//Item Tag Event
ServerEvents.tags('item', event => {

	//Logs Push
	event.get('minecraft:logs').getObjectIds().forEach(individual => {
		individual = individual.toString()
		if (
			individual.indexOf('stripped_') == -1 && individual.indexOf('_wood') == -1 &&
			individual.indexOf('_hyphae') == -1 &&
			individual.indexOf('glowing_poise') == -1 && individual.indexOf('sappy_maple') == -1 &&
			individual.indexOf('watchful_aspen') == -1 && individual.indexOf('crustose') == -1 &&
			individual != 'atmospheric:rosewood' && individual != 'atmospheric:grimwood'
			//&& individual != 'upgrade_aquatic:driftwood'
		) {
			individual = individual + 's'
			//console.log(individual)
			individual_logs.push(individual)
		}
		if (
			individual.includes('stripped_') || individual == 'autumnity:sappy_maple_log' ||
			individual == 'autumnity:sappy_maple_wood'
		) {
			console.log(individual)
			individual_stripped_logs.push(individual)
		}
	})
})

//Recipe Event
ServerEvents.recipes(event => {

	//Stick Recipes
	event.remove({output: 'minecraft:stick', input: '#minecraft:logs', type: 'notreepunching:tool_damaging_shaped'})
	event.remove({output: 'minecraft:stick', input: '#minecraft:planks', type: 'notreepunching:tool_damaging_shaped'})
	event.shaped('4x minecraft:stick', ['A', 'A'], {
		A: '#minecraft:planks'
	})
	event.shaped('8x minecraft:stick', ['A', 'A'], {
		A: '#minecraft:logs'
	})

	//Chopping Recipes
	individual_logs.forEach(individual => {
		if (individual.includes('cerebrage_')) individual = individual.replace('cerebrage_', '')
		let plank = individual.replace('_log', '_plank')
		plank = plank.replace('_stem', '_plank')
		individual = '#' + individual
		if (individual.includes('palo_verde')) plank = 'minecraft:birch_planks'
		if (individual.includes('florus')) individual = '#biomeswevegone:florus_logs'
		if (individual.includes('rubberwood')) individual = '#forge:rubberwood_logs'
		
		event.remove({output: plank, input: individual, type: 'minecraft:crafting_shapeless'})
		event.shapeless('2x ' + plank, [individual])
	})

	//Sawing Recipes
	individual_stripped_logs.forEach(individual => {
		let plank = individual.replace('stripped_', '')
		plank = plank.replace('sappy_', '')
		let suffix_variants = [
			'_hyphae',
			'_log',
			'_stem',
			'_wood'
		].forEach(variant => {
			plank = plank.replace(variant, '_planks')
		})
		if (individual == 'atmospheric:stripped_rosewood') plank = plank + '_planks'
		if (individual.includes('palo_verde')) plank = 'minecraft:birch_planks'
		
		console.log('/// Plank: ' + plank)
		console.log('/// Input: ' + individual)

		event.remove({output: plank, input: individual, type: 'create:cutting'})
		event.recipes.create.cutting('4x ' + plank, individual)
	})
})