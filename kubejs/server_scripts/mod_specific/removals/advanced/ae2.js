//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 1

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'ae2:'
	
	//Individual Items
	let individual_items = [
		prefix + 'inscriber'
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
	let prefix = 'ae2:'

	//Recipe Types
	let recipe_types = [
		prefix + 'inscriber'
	].forEach(type => {
		event.remove({type: type})
	})
})
