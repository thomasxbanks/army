"use strict";

// Abilities
const Fighter = (state) => ({
  type: () => state.type || null,
  ability: () => 'fight',
  strength: () => state.strength || 10
})

const Carrier = (state) => ({
  type: () => state.type || null,
  ability: () => 'carry',
  strength: () => state.strength || 1
})

// Movement methods
const Driver = (state) => ({
  type: () => state.type || null,
  movement: () => 'drive',
  speed: () => state.speed || 20
})

const Runner = (state) => ({
  type: () => state.type || null,
  movement: () => 'run',
  speed: () => state.speed || 10
})

const Walker = (state) => ({
  type: () => state.type || null,
  movement: () => 'walk',
  speed: () => state.speed || 5
})

// Build your army!
const cavalry = () => {
  let state = {
      type: 'cavalry soldier'
  }
  return Object.assign(
    {},
    Fighter(state),
    Runner(state)
  )
}

const infantry = () => {
  let state = {
    type: 'infantryman',
  }
  return Object.assign(
    {},
    Fighter(state),
    Walker(state)
  )
}

const messenger = () => {
  let state = {
    type: 'messenger'
  }
  return Object.assign(
    {},
    Carrier(state),
    Walker(state)
  )
}

const mountedMessenger = () => {
  let state = {
    type: 'mounted messenger',
    strength: 2
  }
  return Object.assign(
    {},
    Carrier(state),
    Runner(state)
  )
}

const logistics = () => {
  let state = {
    type: 'logistics truck',
    speed: 40,
    strength: 5
  }
  return Object.assign(
    {},
    Carrier(state),
    Driver(state)
  )
}

const tank = () => {
  let state = {
    type: 'tank',
    strength: 150,
    speed: 10
  }
  return Object.assign(
    {},
    Fighter(state),
    Driver(state)
  )
}
