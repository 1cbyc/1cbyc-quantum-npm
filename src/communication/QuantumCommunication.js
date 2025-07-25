class QuantumCommunication {
  static send(state, channel) {
    channel.push(state)
  }
  static receive(channel) {
    return channel.shift()
  }
}
export default QuantumCommunication 