//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Compressed Block Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let data = {
        event: event,
        unified_individual: 'quark:sturdy_stone',
    }

    //Other Recipe Types
    event.recipes.vintage.vibrating(['9x minecraft:cobblestone'], data.unified_individual)

    //Unify Items Function Push
    unify_items (
        data
    )
})