// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level0":
            case "level6":return tiles.createTilemap(hex`0d001000020606060606060606060606030902060606060606060606030a09040e0e0e0e0e0e190e0e050a090c0e190e1110110e0e0e0d0a090a161616161616161616090a090a161717171717171716090a090a161717171717171516090a090a161616171717161616090a0907060316171717160206080a0902030a16171717160902030a0904050a16171718160904050a040e0e050f1616160f040e0e05120b0b0b0b12121212121212120113121214011b01010101011a0101010101010101011b010101011a01011b0101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . . 2 2 
2 2 . . . . . . . . . 2 2 
2 2 . . . . . . . . . 2 2 
2 2 . . . . . . . . . 2 2 
2 2 . . . . . . . . . 2 2 
2 2 2 2 . . . . . 2 2 2 2 
2 2 2 2 . . . . . 2 2 2 2 
2 2 2 2 . . . . . 2 2 2 2 
. . . . 2 . . . 2 . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
. . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.castle.tilePath5,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.hazardSpike,sprites.dungeon.doorOpenNorth,sprites.dungeon.greenOuterNorth2,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.dungeon.floorDark3,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.greenOuterNorth1,sprites.castle.tileGrass2,sprites.castle.tileGrass3], TileScale.Sixteen);
            case "level5":
            case "level4":return tiles.createTilemap(hex`0b000900070808080c100c080808060b030303030303030303090b030303121212030303090f0303121201121203030e11030312010201120303090f0303121302121203030e0b030303121212030303090b03030303030303031409040a0a0a0d0a0d0a0a0a05`, img`
2 2 2 2 2 . 2 2 2 2 2 
2 . . . . . . . . . 2 
2 . . . . . . . . . 2 
2 . . . . 2 . . . . 2 
. . . . 2 2 2 . . . 2 
2 . . . . 2 . . . . 2 
2 . . . . . . . . . 2 
2 . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.hazardWater,myTiles.tile1,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenWest,sprites.dungeon.floorLight2,sprites.dungeon.floorLight5,sprites.dungeon.floorLight4], TileScale.Sixteen);
            case "level2":
            case "level1":return tiles.createTilemap(hex`0a0008000305021102110205150b040a08080a0809080d0c0408010804080a080e0f040a08090607090a0a0f04080a0804070a080e0f0608090a080701080d10120d0d0d0d0d0d0d0d1302020202020202021402`, img`
2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . 2 
2 . . . 2 . . . . 2 
2 . . . 2 . . . . 2 
2 . . . 2 . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 . 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark3,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.floorDark5,sprites.dungeon.floorDark0,sprites.dungeon.floorDark4,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast1,sprites.dungeon.floorDark2,sprites.dungeon.floorLight5,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.stairSouth,sprites.dungeon.stairNorth], TileScale.Sixteen);
            case "Boss Level":
            case "level7":return tiles.createTilemap(hex`0a0008000e0e0e0e0e0a1718191a0e21210e0e0a1b1c1d1e0e0e0e0e0e0a1f201e180e0e0e0e0107061d1e1f0b0b0e0b0208050a090a210e0e21030d041514130e210e21210a16160c120e0e0e2121090f101011`, img`
. . . . . . . . . . 
. 2 2 . . . . . . . 
. . . . . . . . . . 
. . . . 2 2 2 . . . 
. . . . 2 2 2 . . . 
. . . . 2 2 2 . . . 
. 2 . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.floorDark3,sprites.dungeon.floorDark1,sprites.dungeon.floorMixed,sprites.dungeon.chestOpen,sprites.dungeon.purpleSwitchDown,sprites.dungeon.hazardLava0,sprites.skillmap.islandTile6,sprites.skillmap.islandTile7,sprites.skillmap.islandTile8,sprites.skillmap.islandTile5,sprites.skillmap.islandTile2,sprites.skillmap.islandTile1,sprites.skillmap.islandTile0,sprites.skillmap.islandTile4,sprites.builtin.crowd0,sprites.builtin.crowd1,sprites.builtin.crowd2,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd7,sprites.builtin.crowd8,sprites.builtin.crowd9,sprites.dungeon.floorLightMoss], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`0a0008000808080808080808080808080106060606060604080805060408080808070106030805060606040707080808070808080707070808080708080807070206060603080808020308080808080808080808`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . 2 2 2 2 . 
. . . 2 . . . . . . 
. 2 2 2 . . . . . . 
. 2 2 2 . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection2,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.dungeon.hazardLava1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "myTile5":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
