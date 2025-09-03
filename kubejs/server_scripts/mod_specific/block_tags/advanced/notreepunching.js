//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Variables
	let prefix = 'notreepunching:'
	const always_breakable = []
	const unbreakable = []
	const always_drops = []
	const no_drops = []

	//Breakable Individual
	let breakable_individual = [
		
	].forEach(individual => {
		always_breakable.push(individual)
	})
	
	//Breakable Tags
	let breakable_tags = [
		'minecraft:mineable/axe',
		'minecraft:mineable/hoe',
		'minecraft:mineable/pickaxe',
		'minecraft:mineable/shovel'
	].forEach(tag => {
		event.get(tag)
		.getObjectIds().forEach(individual => {
			always_breakable.push(individual)
		})
	})
	
	//Breakable Push
	always_breakable.forEach(individual => {
		event.add(prefix + 'always_breakable', individual)
	})

	//Unbreakable Individual
	let unbreakable_individual = [

	].forEach(individual => {
		unbreakable.push(individual)
	})
	
	//Unbreakable Tags
	let unbreakable_tags = [
		'hltweaker:needs_compressed_iron_tool',
		'hltweaker:needs_steel_tool',
		'hltweaker:needs_osmium_tool',
		'minecraft:needs_diamond_tool',
		'minecraft:needs_netherite_tool'
	].forEach(tag => {
		event.get(tag)
		.getObjectIds().forEach(individual => {
			unbreakable.push(individual)
		})
	})
	
	//Unbreakable Push
	unbreakable.forEach(individual => {
		event.remove(prefix + 'always_breakable', individual)
	})

	//Drops Individual
	let drops_individual = [
		'biomeswevegone:sandy_farmland',
		'biomeswevegone:lush_farmland',
		'biomeswevegone:lush_dirt_path',
		'biomeswevegone:sandy_dirt_path',

		'farmersdelight:rich_soil_farmland',
		'farmersdelight:cutting_board',

		'minecraft:bamboo',
		'minecraft:dirt',
		'minecraft:dirt_path',
		'minecraft:farmland',
		'minecraft:soul_sand',
		'minecraft:soul_soil',
		'minecraft:vine',

		'netherexp:soul_path'
	].forEach(individual => {
		always_drops.push(individual)
	})
	
	//Drops Tags
	let drops_tags = [
		'biomeswevegone:crafting_tables',

		'forge:workbenches',

		'minecraft:all_signs',
		'minecraft:wooden_buttons'
	].forEach(tag => {
		event.get(tag)
		.getObjectIds().forEach(individual => {
			always_drops.push(individual)
		})
	})
	
	//Drops Push
	always_drops.forEach(individual => {
		event.add(prefix + 'always_drops', individual)
	})
})