const tape = require('tape')
const params = require('expanse-common')
const utils = require('expansejs-util')
const Header = require('../header.js')

tape('[Block]: Header functions', function (t) {
  t.test('should create with default constructor', function (st) {
    var header = new Header()
    st.deepEqual(header.parentHash, utils.zeros(32))
    st.equal(header.uncleHash.toString('hex'), utils.SHA3_RLP_ARRAY_S)
    st.deepEqual(header.coinbase, utils.zeros(20))
    st.deepEqual(header.stateRoot, utils.zeros(32))
    st.equal(header.transactionsTrie.toString('hex'), utils.SHA3_RLP_S)
    st.equal(header.receiptTrie.toString('hex'), utils.SHA3_RLP_S)
    st.deepEqual(header.bloom, utils.zeros(256))
    st.deepEqual(header.difficulty, new Buffer([]))
    st.deepEqual(header.number, utils.intToBuffer(params.homeSteadForkNumber.v))
    st.deepEqual(header.gasLimit, new Buffer('ffffffffffffff', 'hex'))
    st.deepEqual(header.gasUsed, new Buffer([]))
    st.deepEqual(header.timestamp, new Buffer([]))
    st.deepEqual(header.extraData, new Buffer([]))
    st.deepEqual(header.mixHash, utils.zeros(32))
    st.deepEqual(header.nonce, new Buffer([]))

    st.end()
  })

  t.test('should be true for isGenesis', function (st) {
    var header = new Header()
    st.equal(header.isGenesis(), false)
    header.number = new Buffer([])
    st.equal(header.isGenesis(), true)
    st.end()
  })
})
