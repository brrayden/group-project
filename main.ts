let mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........bbbb..........
    ........bbddddbb........
    .......bddbbbbddb.......
    ......bdbbddddbbdb......
    .....bdbbdbbbbdbbdb.....
    .....bdbdbddddbdbdb.....
    .....cdbbdbbbbdbbdc.....
    .....cbdbbddddbbdbc.....
    .....efbddbbbbddbce.....
    .....eeffbddddbccee.....
    .....eeeeffcccceee......
    .....ceeeeeeeeeeee......
    .....ceeeeeeeeeeee......
    .....feeeeeeeeeeee......
    .....cceeeeeeeeeee......
    ......feeeeeeeeeee......
    .....6fceeeeeeeeee6.....
    ....6776eeeeeeeee676....
    ...6777666eeee6666776...
    ..67768e67766777667776..
    ...668ee7768867788666...
    ......ee77eeee77ecee....
    ......ee6eeeeee6eef.....
    ......eeeeeeeeeeeef.....
    ......eeeeeeeeeeeef.....
    ......eeeeeeeeeeecf.....
    ......ceeeeeeeeeecf.....
    ......ceeeeeeeeeeff.....
    ......feeeeeeeeeefe.....
    .....6feeeeeeeeeef6.....
    ....6776eeeeeeeee676....
    ...6777666eeee6667776...
    ..6776ee67777777667776..
    ...668ee7768867788666...
    ......ee77eeee67ee......
    ......ee6eeeeee6ce......
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
for (let index = 0; index < 4; index++) {
    controller.moveSprite(mySprite)
}
