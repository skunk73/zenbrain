module.exports = function container (get, set) {
  return get('db.createCollection')('run_states')
}