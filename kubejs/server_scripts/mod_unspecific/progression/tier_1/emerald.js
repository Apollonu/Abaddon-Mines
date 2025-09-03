//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {

    //Jukebox Recipe
    event.replaceInput({output: 'minecraft:jukebox'},
        '#forge:gems/diamond',
        '#forge:gems/emerald'
    )

    //Etching Table Recipe
    event.replaceInput({output: 'etched:etching_table'},
        '#forge:gems/diamond',
        '#forge:gems/emerald'
    )

    //Precision Sawmill Recipe
    event.replaceOutput({input: 'minecraft:jukebox'},
        '#forge:gems/diamond',
        '#forge:gems/emerald'
    )

    //Melting Recipe
    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {'item': 'minecraft:jukebox'},
        'result': {
            'amount': 100,
            'fluid': 'tconstruct:molten_emerald'
        },
        'temperature': 1450,
        'time': 83
    })
})