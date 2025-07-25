class QuantumEntanglement {
  static createBellPair() {
    return [1 / Math.sqrt(2), 0, 0, 1 / Math.sqrt(2)]
  }
  static isEntangled(state) {
    return Math.abs(state[0]) === Math.abs(state[3]) && state[1] === 0 && state[2] === 0
  }
}
export default QuantumEntanglement