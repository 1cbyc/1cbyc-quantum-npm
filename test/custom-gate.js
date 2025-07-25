import { QuantumState, QuantumCircuit, QuantumGate } from '../index.js'

const customMatrix = [
  [0, 1],
  [1, 0]
]
const state = new QuantumState(1)
const circuit = new QuantumCircuit(1)
circuit.addGate(QuantumGate.custom(customMatrix), [0])
circuit.run(state)
console.log('Custom gate result:', state.getState()) 