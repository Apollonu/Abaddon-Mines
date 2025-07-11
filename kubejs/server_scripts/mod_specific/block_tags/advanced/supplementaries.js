//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 2

//Block Tag Event
ServerEvents.tags('block', event => {
	
	//Flint Block Tag
	event.add('forge:storage_blocks/flint', 'supplementaries:flint_block')
})