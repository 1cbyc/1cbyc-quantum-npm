class AdvancedErrorCorrection {
  static encode(bit) {
    return [bit, bit, bit]
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
  static run(bit, errorIndex = 0) {
    const encoded = AdvancedErrorCorrection.encode(bit)
    const corrupted = AdvancedErrorCorrection.introduceError(encoded, errorIndex)
    const decoded = AdvancedErrorCorrection.decode(corrupted)
    return { encoded, corrupted, decoded }
  }
}
export default AdvancedErrorCorrection 