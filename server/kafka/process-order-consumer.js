// https://github.com/SOHU-Co/kafka-node#readme
let kafka = require('kafka-node')

class KafkaConsumer {
  init() {
    // TODO: connect to kafka server
  }

  onConsume(fnCallback) {
    // TODO: implement event handler
    setTimeout(() => fnCallback({foo: 'bar'}), 5000)
  }
}

let kafkaConsumer = new KafkaConsumer()
kafkaConsumer.init()

module.exports = kafkaConsumer