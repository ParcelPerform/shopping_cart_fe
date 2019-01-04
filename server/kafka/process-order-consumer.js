// https://github.com/SOHU-Co/kafka-node#readme
let kafka = require('kafka-node')

const TOPIC_NAME = 'order_shipped'

class KafkaConsumer {
  init() {
    this.consumer = new kafka.ConsumerGroup({
      kafkaHost: 'kafka:9092',
      groupId: 'fe-process-order-consumer',
      protocol: ['roundrobin'],
    }, TOPIC_NAME);

    this.consumer.on('error', err => {
      console.log("error!!")
      console.log(err)
    })
  }

  onConsume(fnCallback) {
    console.log("regsiterred!")

    this.consumer.on('message', message => {
      console.log("on message")
      fnCallback(message)
    })
  }
}

let kafkaConsumer = new KafkaConsumer()
kafkaConsumer.init()

module.exports = kafkaConsumer