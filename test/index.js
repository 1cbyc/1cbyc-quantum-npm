import { QuantumState, QuantumGate, QuantumCircuit, QuantumAlgorithm, QuantumTeleportation, QuantumErrorConnection, QuantumEntanglement, QuantumCommunication, QuantumAnimator } from '../index.js'

function assert(cond, msg) {
  if (!cond) throw new Error(msg)
}

const state = new QuantumState(1)
assert(state.getState()[0] === 1, 'QuantumState initialization failed')

state.applyOperator(QuantumGate.X)
assert(state.getState()[1] !== 0, 'QuantumGate X failed')

const circuit = new QuantumCircuit(1)
circuit.addGate(QuantumGate.H, [0])
circuit.run(state)

const algo = new QuantumAlgorithm(circuit)
try { algo.run() } catch (e) { assert(e instanceof Error, 'QuantumAlgorithm abstract run failed') }

const teleportState = new QuantumState(2)
const teleportCircuit = new QuantumCircuit(2)
const teleport = new QuantumTeleportation(teleportCircuit, teleportState)
teleport.run()

const encoded = QuantumErrorConnection.encode(1)
const corrupted = QuantumErrorConnection.introduceError(encoded, 1)
const decoded = QuantumErrorConnection.decode(corrupted)
assert(decoded === 1, 'QuantumErrorConnection failed')

const bell = QuantumEntanglement.createBellPair()
assert(QuantumEntanglement.isEntangled(bell), 'QuantumEntanglement failed')

const channel = []
QuantumCommunication.send(1, channel)
assert(QuantumCommunication.receive(channel) === 1, 'QuantumCommunication failed')

QuantumAnimator.animateState(state)
QuantumAnimator.animateCircuit(circuit, state)

console.log('All tests passed') 