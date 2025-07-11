//All Rights Reserved to Apollo, this is not allowed to be used in public packs not released by Apollo.

//Modification Event
ItemEvents.modification(event => {

	//Copper Armor
	event.modify('everythingcopper:copper_chestplate', item => {
		item.armorKnockbackResistance = 0.1
		item.armorProtection = 4
	})
	event.modify('everythingcopper:copper_leggings', item => {
		item.armorKnockbackResistance = 0.1
		item.armorProtection = 3
	})
	event.modify('everythingcopper:copper_boots', item => {
		item.armorKnockbackResistance = 0.1
		item.armorProtection = 1
	})
})