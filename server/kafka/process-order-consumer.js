// https://github.com/SOHU-Co/kafka-node#readme
let kafka = require('kafka-node')

class KafkaConsumer {
  init() {
    // TODO: initialize kafkaConsumer
    // by using kafka.ConsumerGroup API
  }

  onConsume(fnCallback) {
    // TODO: execute fnCallback with consumed message
    setTimeout(() => fnCallback({foo: 'bar'}), 5000)
  }
}

let kafkaConsumer = new KafkaConsumer()
kafkaConsumer.init()

module.exports = kafkaConsumer