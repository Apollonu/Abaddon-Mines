//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'mekanismtools:'
	let tool_variants = ['lapis_lazuli', 'refined_glowstone', 'steel']
	let armor_variants = ['refined_glowstone']
	const all_individual_items = []

	//Individual Items
	let individual_items = [
	]

	//Armor Types
	let armor_types = [
		'_boots',
		'_chestplate',
		'_helmet',
		'_leggings'
	].forEach(type => {
		armor_variants.forEach(variant => {
			let individual = prefix + variant + type
			all_individual_items.push(individual)
		})
	})

	//Paxel Types
	let paxel_types = [
		'bronze',
		'diamond',
		'gold',
		'iron',
		'lapis_lazuli',
		'netherite',
		'osmium',
		'refined_glowstone',
		'refined_obsidian',
		'steel',
		'stone',
		'wood'
	].forEach(type => {
		let individual = prefix + type + '_paxel'
		all_individual_items.push(individual)
	})

	//Shield Types
	let shield_types = [
		'lapis_lazuli',
		'refined_glowstone'
	].forEach(type => {
		let individual = prefix + type + '_shield'
		all_individual_items.push(individual)
	})

	//Tool Types
	let tool_types = [
		'_axe',
		'_hoe',
		'_pickaxe',
		'_shovel',
		'_sword'
	].forEach(type => {
		tool_variants.forEach(variant => {
			let individual = prefix + variant + type
			all_individual_items.push(individual)
		})
	})
	
	//Remove Items Function Push
	remove_items (
		event,
		all_individual_items
	)
})