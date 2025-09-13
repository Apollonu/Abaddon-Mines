//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Variables
const individual_logs = []

//Item Tag Event
ServerEvents.tags('item', event => {

	//Logs Push
	event.get('minecraft:logs')
	.getObjectIds().forEach(individual => {
		individual = individual.toString()
		if (individual.indexOf('stripped_') == -1 && individual.indexOf('_wood') == -1 && individual.indexOf('_hyphae') == -1 && individual.indexOf('glowing') == -1) {
			individual = individual + 's'
			individual_logs.push(individual)
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
})