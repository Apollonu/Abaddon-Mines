//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
	
	//Hardened Planks Recipe
	event.remove({output: 'tfmg:hardened_planks'})
	event.custom({
		'type': 'create:mixing',
		'ingredients': [{
			'tag': 'minecraft:planks'
			}, {
			'fluidTag': 'forge:creosote',
			'amount': 250
		}],
		'results': [{
			'item': 'tfmg:hardened_planks',
			'count': 1
		}],
		'heatRequirement': 'heated'
	})
})