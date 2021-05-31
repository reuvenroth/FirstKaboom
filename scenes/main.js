const player = add([
  sprite('ezeh'),
  scale(0.5),
  pos(20,20),
  body()
])
const MOVE_SPEED = 200

keyDown('right', () => {
  player.move(MOVE_SPEED,0)
})
keyDown('left', () => {
  player.move(-MOVE_SPEED,0)
})
keyDown('up', () => {
  player.move(0,-MOVE_SPEED*1.5)
})
keyDown('down', () => {
  player.move(
    0,MOVE_SPEED)
})
addLevel([
  '     ',
  '  @  ',
  '     ',
  'xxxxx',
], {
  width: 40,
  height: 40,
  'x' : [sprite('ground'), solid()],
  '@' : [sprite('yh'), scale(0.5), body(), 'dangerous']
})

player.collides('dangerous', () => {
  destroy(player)
})