//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Variables
	let prefix = 'ad_astra:'
	let material_variants = [
		'calorite',
		'desh',
		'iron',
		'ostrum',
		'steel'
	]

	//Encased Block Recipes
	material_variants.forEach(variant => {
		event.remove({output: prefix + 'encased_' + variant + '_block'})
		event.shaped('8x ' + prefix + 'encased_' + variant + '_block', ['BBB', 'AAA', 'BBB'], {
			A: '#forge:plates/' + variant,
			B: '#forge:ingots/steel'
		})
	})

	//Factory Block Recipes
	material_variants.forEach(variant => {
		event.remove({output: prefix + variant + '_factory_block'})
		event.shaped('8x ' + prefix + variant + '_factory_block', ['AAA', 'ABA', 'AAA'], {
			A: '#forge:plates/' + variant,
			B: '#forge:ingots/invar'
		})
	})

	//Plateblock Types
	let plateblock_types = [
		'calorite',
		'desh',
		'ostrum'
	].forEach(type => {
		event.remove({output: prefix + type + '_plateblock'})
		event.shaped('4x ' + prefix + type + '_plateblock', [' A ', 'A A', ' A '], {
			A: '#forge:plates/' + type
		})
	})

	//Plating Recipes
	material_variants.forEach(variant => {
		event.remove({output: prefix + variant + '_plating'})
		event.shaped('8x ' + prefix + variant + '_plating', ['BAB', 'A A', 'BAB'], {
			A: '#forge:plates/' + variant,
			B: '#forge:ingots/' + variant
		})
	})
})