function addToData(data, location, item) {
  if (location === 'us') {
    if (item.toLowerCase().includes('tee')) data.usa.tees++;
    if (item.toLowerCase().includes('hoodie')) data.usa.hoodies++;
    if (item.toLowerCase().includes('long sleeve')) data.usa.longsleeves++;
    if (item.toLowerCase().includes('crewneck')) data.usa.crewnecks++;
    if (item.toLowerCase().includes('facemask')) data.usa.masks++;
  } else if (location === 'ca') {
    if (item.toLowerCase().includes('tee')) data.cad.tees++;
    if (item.toLowerCase().includes('hoodie')) data.cad.hoodies++;
    if (item.toLowerCase().includes('long sleeve')) data.cad.longsleeves++;
    if (item.toLowerCase().includes('crewneck')) data.cad.crewnecks++;
    if (item.toLowerCase().includes('facemask')) data.cad.masks++;
  } else {
    if (item.toLowerCase().includes('tee')) data.world.tees++;
    if (item.toLowerCase().includes('hoodie')) data.world.hoodies++;
    if (item.toLowerCase().includes('long sleeve')) data.world.longsleeves++;
    if (item.toLowerCase().includes('crewneck')) data.world.crewnecks++;
    if (item.toLowerCase().includes('facemask')) data.world.masks++;
  }
}

module.exports = addToData;
