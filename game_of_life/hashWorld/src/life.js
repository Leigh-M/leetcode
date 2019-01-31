function liveLogic(it, ind, World) {
  const world = World;
  function die() {
    world.get(ind).live = false;
    world.get(ind).liveNeighbours = 0;
    return world;
  }
  function survive() {
    world.get(ind).liveNeighbours = 0;
    return world;
  }

  (it.liveNeighbours < 2 || it.liveNeighbours > 3) ? die() : survive();
  return world;
}

function deadLogic(it, ind, World) {
  const world = World;
  if (it.liveNeighbours === 3) {
    world.get(ind).live = true;
    world.get(ind).liveNeighbours = 0;
  }
  if (it.liveNeighbours < 3 || it.liveNeighbours > 3) {
    world.get(ind).liveNeighbours = 0;
  }
  return world;
}

function life(worldHash) {
  const world = worldHash;
  // cycle through cells, check all neighbours for live status -> liveCount++
  world.forEach((item, index) => {
    item.neighbours.forEach((key) => {
      if (world.get(key).live === true) {
        world.get(index).liveNeighbours++;
      }
    });
  });
  world.forEach((itm, ind) => {
    if (itm.live === true) liveLogic(itm, ind, world);
    if (itm.live === false) deadLogic(itm, ind, world);
  });
  return world;
}

module.exports = life;
