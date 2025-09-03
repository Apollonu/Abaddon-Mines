//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Recipe Event
ServerEvents.recipes(event => {
    
    //Nugget Types
    let nugget_types = [
        'copper',
        'gold',
        'iron',
        'lead',
        'silver',
        'zinc'
    ].forEach(type => {
        event.remove({input: 'spelunkery:raw_' + type + '_nugget', type: 'minecraft:blasting'})
        event.remove({input: 'spelunkery:raw_' + type + '_nugget', type: 'minecraft:smelting'})
    })
})