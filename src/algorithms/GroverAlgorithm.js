import QuantumAlgorithm from './QuantumAlgorithm.js'
import QuantumGates from '../gates/QuantumGates.js'
class GroverAlgorithm extends QuantumAlgorithm {
  constructor(circuit, state, oracle) {
    super(circuit)
    this.state = state
    this.oracle = oracle
  }
  run(iterations = 1) {
    for (let i = 0; i < this.state.size; i++) {
      this.circuit.addGate(QuantumGates.H, [i])
    }
    for (let i = 0; i < iterations; i++) {
      this.circuit.addGate(this.oracle, null)
      for (let j = 0; j < this.state.size; j++) {
        this.circuit.addGate(QuantumGates.H, [j])
        this.circuit.addGate(QuantumGates.X, [j])
      }
      this.circuit.addGate((s) => QuantumGates.CNOT(s), [0, 1])
      for (let j = 0; j < this.state.size; j++) {
        this.circuit.addGate(QuantumGates.X, [j])
        this.circuit.addGate(QuantumGates.H, [j])
      }
    }
    this.circuit.run(this.state)
    return this.state.getState()
  }
}
export default GroverAlgorithm 