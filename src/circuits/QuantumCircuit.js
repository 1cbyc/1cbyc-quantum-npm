import QuantumGates from '../gates/QuantumGates.js'
class QuantumCircuit {
  constructor(size = 1) {
    this.size = size
    this.gates = []
  }
  addGate(gate, targets) {
    this.gates.push({ gate, targets })
  }
  run(state) {
    let current = state.getState()
    for (const { gate, targets } of this.gates) {
      if (typeof gate === 'function') {
        current = gate(current, targets)
      } else if (Array.isArray(gate) && gate.length === 2 && state.size > 1 && targets && targets.length === 1) {
        const op = QuantumGates.expandSingleQubitGate(gate, targets[0], state.size)
        state.applyOperator(op)
        current = state.getState()
      } else {
        state.applyOperator(gate)
        current = state.getState()
      }
    }
    state.setState(current)
    return state
  }
  clear() {
    this.gates = []
  }
}
export default QuantumCircuit
