//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'minecraft:flint',
    }

    //Other Recipe Types
    event.remove({output: data.unified_individual, input: 'minecraft:gravel', type: 'minecraft:crafting_shapeless'})
    event.shapeless('2x ' + data.unified_individual, [
        'minecraft:gravel',
        'minecraft:gravel',
        'minecraft:gravel'
    ])

    //Unify Items Function Push
    unify_items (
        data
    )
})