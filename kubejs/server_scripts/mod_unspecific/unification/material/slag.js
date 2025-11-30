//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'thermal:slag',
        unified_variants: [
            'tfmg:slag'
        ],
        output_recipe_types: [
            'create:crushing'
        ],
        input_recipe_types: [
            'create:mixing'
        ]
    }

    //Other Recipe Types
    event.remove({type: 'minecraft:smelting', output: 'thermal:white_rockwool'})

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Block Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'tfmg:slag_block'
    }

    //Other Recipe Types
    event.shaped(data.unified_individual, ['AA','AA'], {A: '#forge:slag'})

    //Unify Items Function Push
    unify_items (
        data
    )
})

//Fluid Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'tfmg:molten_slag'
    }

    //Other Recipe Types
    event.custom({
        'type': 'tconstruct:casting_table',
        'cooling_time': 68,
        'fluid': {
            'amount': 100,
            'fluid': data.unified_individual
        },
        'result': {'item': 'thermal:slag'}
    })
    event.custom({
        'type': 'tconstruct:casting_basin',
        'cooling_time': 137,
        'fluid': {
            'amount': 400,
            'fluid': data.unified_individual
        },
        'result': {'item': 'tfmg:slag_block'}
    })

    //Unify Items Function Push
    unify_items (
        data
    )
})