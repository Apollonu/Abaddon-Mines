//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'pneumaticcraft:'

	//Individual Items
	let individual_items = [
		prefix + 'biodeiesel_bucket',
		prefix + 'copper_nugget',
		prefix + 'diesel_bucket',
		prefix + 'ethanol_bucket',
		prefix + 'gasoline_bucket',
		prefix + 'kerosene_bucket',
		prefix + 'lpg_bucket',
		prefix + 'lubricant_bucket',
		prefix + 'oil_bucket',
		prefix + 'refinery',
		prefix + 'refinery_output',
		prefix + 'vegetable_oil_bucket'
	]
	
	//Remove Items Function Push
	remove_items (
		event,
		individual_items
	)
})

//Recipe Event
ServerEvents.recipes(event => {

	//Variables
	let prefix = 'pneumaticcraft:'

	//Recipe Types
	let recipe_types = [
		prefix + 'refinery'
	].forEach(type => {
		event.remove({type: type})
	})
})