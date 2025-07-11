//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.
//priority: 3

//Recipe Event
ServerEvents.recipes(event => {

    //Variables
    let unified_individual = 'quark:limestone'

    //Blasting Recipe
    event.recipes.create.compacting('create:limestone', unified_individual).heated()

    //Mechanical Extruder Recipe
    event.custom({
        'type': 'create_mechanical_extruder:extruding',
        'ingredients': [
            {
                'amount': 1000,
                'fluid': 'minecraft:lava',
                'nbt': {}
            }, {
                'amount': 1000,
                'fluid': 'create:honey',
                'nbt': {}
            }
        ],
        'result': {
            'item': 'quark:limestone'
        }
    })

    //Igneous Extruder Recipe
    event.custom(
        {
            type: 'thermal:rock_gen',
            adjacent: 'create:honey',
            result: {item: unified_individual}
        }
    )
})