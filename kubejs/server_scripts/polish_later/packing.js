//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

ServerEvents.recipes(event => {
	
	//Thermal Ingot Types
	let thermal_ingot_types = [
		'aluminum',
		'amethyst_bronze',
		'andesite_alloy',
		'brass',
		'calorite',
		'cast_iron',
		'cinderslime',
		'cobalt',
		'compressed_iron',
		'desh',
		'hepatizon',
		'lithium',
		'manyullyn',
		'osmium',
		'ostrum',
		'pig_iron',
		'queens_slime',
		'slimesteel',
		'refined_glowstone',
		'refined_obsidian',
		'refined_osmium',
		'rose_gold',
		'steel',
		'uranium',
		'zinc'
	].forEach(type => {
		event.recipes.thermal.press('#forge:storage_blocks/' + type, ['9x #forge:ingots/' + type, 'thermal:press_unpacking_die'])
		event.recipes.thermal.press('9x #forge:ingots/' + type, ['#forge:storage_blocks/' + type, 'thermal:press_unpacking_die'])
	})

	//Thermal Raw Types
	let thermal_raw_types = [
		'aluminum',
		'calorite',
		'cobalt',
		'desh',
		'osmium',
		'ostrum',
		'uranium',
		'zinc'
	].forEach(type => {
		event.recipes.thermal.press('#forge:storage_blocks/raw_' + type, ['9x #forge:raw_materials/' + type, 'thermal:press_unpacking_die'])
		event.recipes.thermal.press('9x #forge:raw_materials/' + type, ['#forge:storage_blocks/raw_' + type, 'thermal:press_unpacking_die'])
	})

	//Vanilla Types
	let vanilla_types = [
		'chorus_fruit',
		'cocoa_beans',
		'glow_berries',
		'golden_apple',
		'golden_carrot',
		'leather',
		'nether_wart',
		'rabbit_hide',
		'stick',
		'sweet_berries'
	].forEach(type => {
		event.recipes.thermal.press('#forge:storage_blocks/' + type, ['9x minecraft:' + type, 'thermal:press_unpacking_die'])
		event.recipes.thermal.press('9x minecraft:' + type, ['#forge:storage_blocks/' + type, 'thermal:press_unpacking_die'])
	})
})