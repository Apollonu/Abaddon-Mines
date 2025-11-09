//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Item Tag Unification
ServerEvents.tags('item', event => {
	
	//Tag Removal
	event.remove('supplementaries:altimeters', 'supplementaries:altimeter')
})
