//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 2

//Variables
const removals = []

//Remove Items Function
function remove_items (event, individual_items) {

	//Item Tag Logic
	individual_items.forEach(individual => {
		event.removeAllTagsFrom(individual)
		let tags = [
			'c:hidden_from_recipe_viewers',
			'kubejs:removals'
		].forEach(tag => {
			event.add(tag, individual)
		})
		removals.push(individual)
	})
}

//Recipe Event
ServerEvents.recipes(event => {

	//Recipe Logic
	removals.forEach(individual => {
		event.remove({output: individual})
		event.remove({input: individual})
	})
})