//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Item Tag Unification
ServerEvents.tags('item', event => {

    //Variables
    let unified_individual = 'forge:crafting_tables'
    
    //Vanilla Crafting Table
    event.add(unified_individual, 'minecraft:crafting_table')

    //Oh The Biomes We've Gone Crafting Tables
    let biomeswevegone_crafting_tables = event.get('biomeswevegone:crafting_tables')
    .getObjectIds().forEach(individual => {
        event.add(unified_individual, individual)
    })
})

//Recipe Unification
ServerEvents.recipes(event => {
    
    //Variables
    let unified_individual = '#forge:crafting_tables'
    
    //Crafting Table Unification
    event.replaceInput({input: unified_individual},
        unified_individual,
        unified_individual
    )
})