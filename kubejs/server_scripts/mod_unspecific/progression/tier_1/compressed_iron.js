//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

	//Variables
	let prefix = 'tconstruct:'

	//Tinkers Types
	let tinkers_types = [
		'adze_head',
		'bow_limb',
		'bow_grip',
		'broad_axe_head',
		'broad_blade',
		'hammer_head',
		'large_plate',
		'maille',
		'pick_head',
		'repair_kit',
		'small_axe_head',
		'small_blade',
		'tool_binding',
		'tool_handle',
		'tough_binding',
		'tough_handle'
	].forEach(type => {
		event.custom({
			'type': 'pneumaticcraft:pressure_chamber',
			'inputs': [Item.of(prefix + type, '{Material:"' + prefix + 'iron"}').strongNBT()],
			'pressure': 2.0,
			'results': [{'item': (prefix + type), 'nbt': '{Material: "kubejs:compressed_iron"}'}]
		})
	})
})