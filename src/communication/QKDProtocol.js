class QKDProtocol {
  static randomBit() {
    return Math.random() < 0.5 ? 0 : 1
  }
  static randomBasis() {
    return Math.random() < 0.5 ? 'Z' : 'X'
  }
  static encodeBit(bit, basis) {
    if (basis === 'Z') return bit
    return QKDProtocol.randomBit()
  }
  static measureBit(encoded, basis) {
    if (basis === 'Z') return encoded
    return QKDProtocol.randomBit()
  }
  static run(numBits = 16) {
    const aliceBits = Array.from({ length: numBits }, QKDProtocol.randomBit)
    const aliceBases = Array.from({ length: numBits }, QKDProtocol.randomBasis)
    const bobBases = Array.from({ length: numBits }, QKDProtocol.randomBasis)
    const encoded = aliceBits.map((bit, i) => QKDProtocol.encodeBit(bit, aliceBases[i]))
    const bobBits = encoded.map((enc, i) => QKDProtocol.measureBit(enc, bobBases[i]))
    const sifted = []
    for (let i = 0; i < numBits; i++) {
      if (aliceBases[i] === bobBases[i]) sifted.push([aliceBits[i], bobBits[i]])
    }
    const aliceKey = sifted.map(x => x[0]).join('')
    const bobKey = sifted.map(x => x[1]).join('')
    return { aliceKey, bobKey, matches: aliceKey === bobKey }
  }
}
export default QKDProtocol 