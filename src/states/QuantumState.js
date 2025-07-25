class QuantumState {
  constructor(size = 1) {
    this.size = size
    this.state = new Array(2 ** size).fill(0)
    this.state[0] = 1
  }
  setState(vector) {
    if (vector.length !== 2 ** this.size) throw new Error('Invalid state vector size')
    this.state = vector.slice()
  }
  getState() {
    return this.state.slice()
  }
  applyOperator(operator) {
    if (operator.length !== this.state.length) throw new Error('Operator size mismatch')
    const result = new Array(this.state.length).fill(0)
    for (let i = 0; i < operator.length; i++) {
      for (let j = 0; j < operator.length; j++) {
        result[i] += operator[i][j] * this.state[j]
      }
    }
    this.state = result
  }
  measure() {
    const probabilities = this.state.map(x => Math.abs(x) ** 2)
    let r = Math.random()
    let acc = 0
    for (let i = 0; i < probabilities.length; i++) {
      acc += probabilities[i]
      if (r < acc) return i
    }
    return probabilities.length - 1
  }
}
export default QuantumState 