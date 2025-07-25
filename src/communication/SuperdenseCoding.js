import QuantumEntanglement from '../entanglement/QuantumEntanglement.js'
import QuantumGates from '../gates/QuantumGates.js'
class SuperdenseCoding {
  static encode(bits) {
    let state = QuantumEntanglement.createBellPair()
    if (bits[0] === 1) state = QuantumGates.X.map((row, i) => row.map((v, j) => v * state[j]))[0]
    if (bits[1] === 1) state = QuantumGates.Z.map((row, i) => row.map((v, j) => v * state[j]))[0]
    return state
  }
  static decode(state) {
    return [state[0] === 0 ? 1 : 0, state[3] === 0 ? 1 : 0]
  }
  static run(bits) {
    const encoded = SuperdenseCoding.encode(bits)
    const decoded = SuperdenseCoding.decode(encoded)
    return { encoded, decoded }
  }
}
export default SuperdenseCoding 