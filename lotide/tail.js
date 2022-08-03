function tail (array) {
  if (array.length === 1) {
    return []
  } else {
  return array.slice(1)
}
}


module.exports = tail 