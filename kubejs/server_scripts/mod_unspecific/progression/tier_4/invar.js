//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
	//Invar Alloying Recipe
    event.custom({
        'type': 'tconstruct:alloy',
        'conditions': [{
            'type': 'mantle:tag_filled',
            'tag': 'forge:ingots/nickel'
        }],
        'inputs': [{
            'amount': 540,
            'tag': 'forge:molten_iron'
            }, {
            'amount': 270,
            'tag': 'forge:molten_nickel'
            }, {
            'amount': 90,
            'tag': 'forge:molten_osmium'
        }],
        'result': {
            'amount': 540,
            'tag': 'forge:molten_invar'
        },
        'temperature': 1050
    })
})