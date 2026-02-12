//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Item Tag Event
ServerEvents.tags('item', event => {

	//Flint Block Tag
	event.add('forge:storage_blocks/flint', 'supplementaries:flint_block')

	//Brick Types
	let brick_types = [
		'notreepunching:clay_brick',
		'tfmg:cinderblock',
		'tfmg:cinderflourblock',
		'tfmg:fireproof_brick'
	].forEach(individual => {
		event.add('supplementaries:throwable_bricks', individual)
	})
})