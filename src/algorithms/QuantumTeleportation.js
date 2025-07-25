import QuantumAlgorithm from './QuantumAlgorithm.js'
import QuantumGates from '../gates/QuantumGates.js'
class QuantumTeleportation extends QuantumAlgorithm {
  constructor(circuit, state) {
    super(circuit)
    this.state = state
  }
  run() {
    this.circuit.addGate(QuantumGates.H, [0])
    this.circuit.addGate((s) => QuantumGates.CNOT(s), [0, 1])
    this.circuit.run(this.state)
    const m0 = this.state.measure()
    const m1 = this.state.measure()
    if (m1 === 1) this.state.applyOperator(QuantumGates.X)
    if (m0 === 1) this.state.applyOperator(QuantumGates.Z)
    return this.state.getState()
  }
}
export default QuantumTeleportation
