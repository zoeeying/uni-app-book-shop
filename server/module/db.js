/**
 * DB类库
 */
const { MongoClient, ObjectID } = require('mongodb')
const Config = require('./config')

class DB {
  // 单例模式，可以实现多次实例化实例共享
  static getInstance() {
    if (!DB.instance) {
      DB.instance = new DB()
    }
    return DB.instance
  }
  constructor() {
    this.dbClient = null
    this.connect() // 实例化的时候连接数据库
  }
  connect() {
    return new Promise((resolve, reject) => {
      // 数据库长连接，解决数据库多次连接的问题
      if (!this.dbClient) {
        MongoClient.connect(Config.dbUrl, (err, client) => {
          if (err) {
            reject(err)
            return
          }
          this.dbClient = client.db(Config.dbName)
          resolve(this.dbClient)
        })
      } else {
        resolve(this.dbClient)
      }
    })
  }
  find(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then(db => {
        const result = db.collection(collectionName).find(json)
        result.toArray((err, docs) => {
          if (err) {
            reject(err)
            return
          }
          resolve(docs)
        })
      })
    })
  }
  insert(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then(db => {
        db.collection(collectionName).insertOne(json, (err, result) => {
          if (err) {
            reject(err)
            return
          }
          resolve(result)
        })
      })
    })
  }
  update(collectionName, json1, json2) {
    return new Promise((resolve, reject) => {
      this.connect().then(db => {
        db.collection(collectionName).updateOne(
          json1,
          { $set: json2 },
          (err, result) => {
            if (err) {
              reject(err)
              return
            }
            resolve(result)
          }
        )
      })
    })
  }
  delete(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then(db => {
        db.collection(collectionName).removeOne(json, (err, result) => {
          if (err) {
            reject(err)
            return
          }
          resolve(result)
        })
      })
    })
  }
  getObjectId(id) {
    // 把字符串id转换成对象id，用于根据_id查询文档
    return new ObjectID(id)
  }
}

module.exports = DB.getInstance()
