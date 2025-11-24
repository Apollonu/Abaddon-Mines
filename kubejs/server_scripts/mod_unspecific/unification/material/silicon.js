//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: [
            'tfmg:liquid_silicon'
        ]
    }

    //Other Recipe Types
    event.custom({
        'type': 'tconstruct:casting_table',
        'cast': {'tag': 'tconstruct:casts/multi_use/ingot'},
        'cooling_time': 47,
        'fluid': {
            'amount': 90,
            'fluid': 'tfmg:liquid_silicon'
        },
        'result': {'tag': 'forge:ingots/silicon'}
    })

    //Unify Items Function Push
    unify_items (
        data
    )
})