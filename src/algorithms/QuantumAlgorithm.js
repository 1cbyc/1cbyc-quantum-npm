class QuantumAlgorithm {
  constructor(circuit) {
    this.circuit = circuit
  }
  run() {
    throw new Error('run() must be implemented by subclass')
  }
}
export default QuantumAlgorithm