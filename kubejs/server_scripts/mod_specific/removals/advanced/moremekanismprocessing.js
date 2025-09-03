//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'moremekanismprocessing:'
	const all_individual_items = []
	let processing_variants = ['clump_', 'crystal_', 'dirty_dust_', 'dust_', 'shard_']
	let ingot_variants = ['_ingot', '_nugget']
	let gem_variants = ['clump_', 'crystal_', 'dirty_dust_', 'dust_', 'gem_', 'shard_']

	//Individual Items
	let individual_items = [
		prefix + 'dust_nickel',
		prefix + 'dust_silver'
	]

	//Processing Types
	let processing_types = [
		//'amethyst',
		'azure_silver',
		'bismuth',
		'crimson_iron',
		'diamond',
		'draconium',
		'iridium',
		//'lithium',
		'platinum',
		'titanium',
		'tungsten',

		'coal',
		'diamond',
		'emerald',
		'electrotine',
		'lapis',
		'quartz',
		'redstone',
		//'sulfur'
	].forEach(type => {
		processing_variants.forEach(variant => {
			let individual = prefix + variant + type
			all_individual_items.push(individual)
		})
	})	
	
	//Ingot Types
	let ingot_types = [
		'aluminum',
		'azure_silver',
		'bismuth',
		'calorite',
		'cobalt',
		'crimson_iron',
		'desh',
		'draconium',
		'iridium',
		'lithium',
		'nickel',
		'ostrum',
		'platinum',
		'silver',
		'titanium',
		'tungsten',
		'zinc'
	].forEach(type => {
		ingot_variants.forEach(variant => {
			let individual = prefix + type + variant
			all_individual_items.push(individual)
		})
	})

	//Gem Types
	let gem_types = [
		'apatite',
		'bort',
		'cinnabar',
		'dilithium',
		'green_sapphire',
		'niter',
		'peridot',
		'ruby',
		'sapphire'
	].forEach(type => {
		gem_variants.forEach(variant => {
			let individual = prefix + variant + type
			all_individual_items.push(individual)
		})
	})

	//Individual Combine
	individual_items.forEach(individual => {
		all_individual_items.push(individual)
	})
	
	//Remove Items Function Push
	remove_items (
		event,
		all_individual_items
	)
})