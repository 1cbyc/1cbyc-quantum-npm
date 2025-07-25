import QuantumState from '../states/QuantumState.js'
class QuantumAnimator {
  static animateState(state) {
    return state.getState().map(x => Math.abs(x) ** 2)
  }
  static animateCircuit(circuit, state) {
    const snapshots = []
    let current = state.getState().slice()
    for (const { gate, targets } of circuit.gates) {
      if (typeof gate === 'function') {
        current = gate(current, targets)
      } else {
        const tempState = new QuantumState(state.size)
        tempState.setState(current.slice())
        tempState.applyOperator(gate)
        current = tempState.getState()
      }
      snapshots.push(current.slice())
    }
    return snapshots
  }
}
export default QuantumAnimator