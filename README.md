# 1cbyc-quantum-npm

A sophisticated, modular quantum computing simulator for real-world algorithm prototyping, state management, and quantum research.

## Installation

```
npm install 1cbyc-quantum-npm
```

## Usage

```js
import {
  QuantumState,
  QuantumGate,
  QuantumCircuit,
  QuantumAlgorithm,
  QuantumTeleportation,
  QuantumErrorConnection,
  QuantumEntanglement,
  QuantumCommunication,
  QuantumAnimator
} from '1cbyc-quantum-npm'

const state = new QuantumState(1)
const circuit = new QuantumCircuit(1)
circuit.addGate(QuantumGate.H, [0])
circuit.run(state)
```

## Modules

- **QuantumState**: Represents and manipulates quantum states
- **QuantumGate**: Standard quantum gates (I, X, Y, Z, H, S, T, CNOT)
- **QuantumCircuit**: Build and simulate quantum circuits
- **QuantumAlgorithm**: Abstract base for quantum algorithms
- **QuantumTeleportation**: Implements the quantum teleportation protocol
- **QuantumErrorConnection**: Simulates quantum error correction
- **QuantumEntanglement**: Create and verify entangled states
- **QuantumCommunication**: Simulate quantum communication protocols
- **QuantumAnimator**: Visualize quantum states and circuits

## Documentation

See `docs/explanation.md` for architecture and design details.
See `docs/whats-next.md` for roadmap and future features.

## Testing

Run the test suite:

```
node test/index.js
```

## Contributing

Contributions are welcome. Please open issues or pull requests on GitHub.

## License

MIT