// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level1":return tiles.createTilemap(hex`10001000051002020202020202020202020202130508020302020214020203020202020205080202020202020202020202020202051002020a070609060609060609060405080302051002020202020202020f05050802020508020203020202020202050510020205080202020202020202020a05080202051002020209090909020305050802020508020202050c0b08020205051002020508020202050e0d0802020a050802020508020202050a1008020205050802020909020302050a1008020205051002020202020202050a100802020a050802020302020202050a1008030205050802010202020202050a10080202050510031111111111031506061512020a`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.chestOpen,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark3,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenSwitchUp,sprites.dungeon.greenOuterWest2,sprites.dungeon.floorDark5,sprites.dungeon.stairSouth,sprites.dungeon.doorOpenNorth,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenSwitchDown], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
