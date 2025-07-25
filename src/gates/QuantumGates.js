class QuantumGates {
  static I = [
    [1, 0],
    [0, 1]
  ]
  static X = [
    [0, 1],
    [1, 0]
  ]
  static Y = [
    [0, [0, -1]],
    [[0, 1], 0]
  ]
  static Z = [
    [1, 0],
    [0, -1]
  ]
  static H = [
    [1 / Math.sqrt(2), 1 / Math.sqrt(2)],
    [1 / Math.sqrt(2), -1 / Math.sqrt(2)]
  ]
  static S = [
    [1, 0],
    [0, [0, 1]]
  ]
  static T = [
    [1, 0],
    [0, [Math.cos(Math.PI / 4), Math.sin(Math.PI / 4)]]
  ]
  static CNOT(state) {
    if (state.length !== 4) throw new Error('CNOT expects 2 qubits')
    return [state[0], state[1], state[3], state[2]]
  }
  static expandSingleQubitGate(gate, target, numQubits) {
    function kron(a, b) {
      const m = a.length, n = a[0].length, p = b.length, q = b[0].length
      const result = Array(m * p).fill(0).map(() => Array(n * q).fill(0))
      for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) for (let k = 0; k < p; k++) for (let l = 0; l < q; l++) result[i * p + k][j * q + l] = a[i][j] * b[k][l]
      return result
    }
    let op = 1
    for (let i = 0; i < numQubits; i++) {
      if (i === target) op = kron(op === 1 ? [[1]] : op, gate)
      else op = kron(op === 1 ? [[1]] : op, QuantumGates.I)
    }
    return op
  }
}
export default QuantumGates