//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Block Tags Function
function block_tags (event, material, individual_blocks, individual_tags) {
	
	//Variables
	const blocks = []
	let mining_level_tags = [
		'minecraft:needs_diamond_tool',
		'minecraft:needs_iron_tool',
		'minecraft:needs_stone_tool'
	]
	let mining_level_stone = [
		'flint'
	]
	let mining_level_flint = [
		'andesite_alloy',
		'copper',
		'tin'
	]
	let mining_level_copper = [
		//'bronze',
		'zinc'
	]
	let mining_level_bronze = [
		'brass',
		'deepslate',
		'iron'
	]
	let mining_level_iron = [
		'emerald',
		'fluorite',
		'gold',
		'nahuatl',
		'redstone'
		//'steel'
	]
	let mining_level_compressed_iron = [
		'cobalt',
		'obsidian'
	]
	let mining_level_steel = [
		'osmium'
	]
	let mining_level_osmium = [
		'diamond'
	]
	let mining_level_diamond = [
		
	]

	//Individual Blocks Push
	individual_blocks.forEach(individual => {
		blocks.push(individual)
	})

	//Individual Tags Push
	individual_tags.forEach(tag => {
		tag = event.get(tag)
		.getObjectIds().forEach(individual => {
			blocks.push(individual)
		})
	})

	//Mining Level Logic
	blocks.forEach(individual => {
		mining_level_tags.forEach(tag => {
			event.remove(tag, individual)
		})
		mining_level_stone.forEach(type => {
			if (type == material) {
				event.add('minecraft:needs_stone_tool', individual)
			}
		})
		mining_level_flint.forEach(type => {
			if (type == material) {
				event.add('hltweaker:needs_flint_tool', individual)
			}
		})
		mining_level_copper.forEach(type => {
			if (type == material) {
				event.add('hltweaker:needs_copper_tool', individual)
			}
		})
		mining_level_bronze.forEach(type => {
			if (type == material) {
				event.add('hltweaker:needs_bronze_tool', individual)
			}
		})
		mining_level_iron.forEach(type => {
			if (type == material) {
				event.add('minecraft:needs_iron_tool', individual)
			}
		})
		mining_level_compressed_iron.forEach(type => {
			if (type == material) {
				event.add('hltweaker:needs_compressed_iron_tool', individual)
			}
		})
		mining_level_steel.forEach(type => {
			if (type == material) {
				event.add('hltweaker:needs_steel_tool', individual)
			}
		})
		mining_level_osmium.forEach(type => {
			if (type == material) {
				event.add('hltweaker:needs_osmium_tool', individual)
			}
		})
		mining_level_diamond.forEach(type => {
			if (type == material) {
				event.add('minecraft:needs_diamond_tool', individual)
			}
		})
	})
}