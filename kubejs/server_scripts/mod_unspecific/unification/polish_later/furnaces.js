//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Item Tag Unification
ServerEvents.tags('item', event => {

    //Variables
    let unified_individual = 'forge:furnaces'

    //Furnaces
    let furnaces = [
        'minecraft:furnace',
        'quark:deepslate_furnace',
        'quark:blackstone_furnace'
    ].forEach(individual => {
        event.add(unified_individual, individual)
    })
})

//Recipe Unification
ServerEvents.recipes(event => {

    //Variables
    let unified_individual = '#forge:furnaces'

    //Quark Furnaces
    event.remove({input: 'quark:blackstone_furnace'})
    event.remove({input: 'quark:deepslate_furnace'})

    //Furnace Unification
    event.replaceInput({input: unified_individual},
        unified_individual,
        unified_individual
    )
})