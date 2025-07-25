import { QuantumState, QuantumCircuit, GroverAlgorithm } from '../index.js'

function oracle(state) {
  const result = state.slice()
  result[3] *= -1
  return result
}

const state = new QuantumState(2)
const circuit = new QuantumCircuit(2)
const grover = new GroverAlgorithm(circuit, state, oracle)
const result = grover.run(1)
console.log('Grover result state:', result) 