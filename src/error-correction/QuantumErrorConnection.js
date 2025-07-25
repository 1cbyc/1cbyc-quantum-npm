class QuantumErrorConnection {
  static encode(state) {
    return [state, state, state]
  }
  static introduceError(encoded, errorIndex = 0) {
    const corrupted = encoded.slice()
    corrupted[errorIndex] = corrupted[errorIndex] === 0 ? 1 : 0
    return corrupted
  }
  static decode(encoded) {
    const sum = encoded[0] + encoded[1] + encoded[2]
    return sum > 1 ? 1 : 0
  }
}
export default QuantumErrorConnection