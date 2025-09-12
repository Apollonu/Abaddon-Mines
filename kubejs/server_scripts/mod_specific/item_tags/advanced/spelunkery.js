//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Item Tag Event
ServerEvents.tags('item', event => {
	
	//Variables
	let prefix = 'spelunkery:'

	//Dust Types
	let dust_types = [
		'saltpeter',
		'sulfur'
	].forEach(type => {
		let individual = prefix + type
		event.add('forge:dusts', individual)
		event.add('forge:dusts/' + type, individual)
	})

	//Niter Dust Tag
	event.add('forge:dusts/niter', prefix + 'saltpeter')

	//Cinnabar Tags
	event.add('forge:gems', prefix + 'cinnabar')
	event.add('forge:gems/cinnabar', prefix + 'cinnabar')
})