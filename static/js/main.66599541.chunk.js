(this["webpackJsonp@pancakeswap/interface"] = this["webpackJsonp@pancakeswap/interface"] || []).push([
    [1], {
        154: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        188: function(e) {
            e.exports = JSON.parse('{"name":"Mozart Finance Default List","timestamp":"2021-04-01T09:56:23Z","version":{"major":1,"minor":0,"patch":0},"tags":{},"logoURI":"/images/coins/BNB.png","keywords":["pancake","default"],"tokens":[{"name":"HAPPYeco","symbol":"HAPPY","address":"0xc3cca60bdf643eca0dc1e4943a41296ffbc5d4c8","chainId":56,"decimals":18,"logoURI":"https://i.postimg.cc/L4YB3SCB/KRP.png"},{"name":"WBNB Token","symbol":"WBNB","address":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png"},{"name":"Tether USD","symbol":"USDT","address":"0x55d398326f99059ff775485246999027b3197955","chainId":56,"decimals":18,"logoURI":"https://exchange.pancakeswap.finance/images/coins/0x55d398326f99059ff775485246999027b3197955.png"}]}')
        },
        278: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        279: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        309: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        310: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        311: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
        },
        433: function(e, n) {},
        539: function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t(1),
                a = t(0),
                i = t.n(a),
                c = t(98),
                o = t.n(c),
                s = t(3),
                u = t(9),
                l = t(4);

            function d() {
                var e = Object(u.a)(["\n  body {\n    background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"]);
                return d = function() {
                    return e
                }, e
            }
            var b, p = Object(l.createGlobalStyle)(d(), (function(e) {
                    return e.theme.colors.background
                })),
                f = t(7),
                j = t.n(f),
                h = t(31),
                y = t(10),
                v = t(49),
                m = t(53),
                O = t(298),
                x = t(21),
                g = t(72),
                C = t(158),
                w = t(13),
                k = t(212),
                T = t(159),
                I = t(160),
                N = t(301),
                E = t(178),
                S = t(12),
                R = t(161),
                U = t(11),
                A = t(15),
                B = t(16),
                P = t(163),
                M = t(108),
                L = t(20),
                D = function(e) {
                    Object(A.a)(t, e);
                    var n = Object(B.a)(t);

                    function t(e, r, a) {
                        var i;
                        return Object(U.a)(this, t), (i = n.call(this, e)).code = r, i.data = a, i
                    }
                    return t
                }(Object(P.a)(Error)),
                _ = function e(n, t, r) {
                    var a = this;
                    Object(U.a)(this, e), this.isMetaMask = !1, this.chainId = void 0, this.url = void 0, this.host = void 0, this.path = void 0, this.batchWaitTimeMs = void 0, this.nextId = 1, this.batchTimeoutId = null, this.batch = [], this.clearBatch = Object(h.a)(j.a.mark((function e() {
                        var n, t, r, i, c, o, s, u, l, d, b, p, f, h;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return console.info("Clearing batch", a.batch), n = a.batch, a.batch = [], a.batchTimeoutId = null, e.prev = 4, e.next = 7, fetch(a.url, {
                                        method: "POST",
                                        headers: {
                                            "content-type": "application/json",
                                            accept: "application/json"
                                        },
                                        body: JSON.stringify(n.map((function(e) {
                                            return e.request
                                        })))
                                    });
                                case 7:
                                    t = e.sent, e.next = 14;
                                    break;
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(4), n.forEach((function(e) {
                                        return (0, e.reject)(new Error("Failed to send batch call"))
                                    })), e.abrupt("return");
                                case 14:
                                    if (t.ok) {
                                        e.next = 17;
                                        break
                                    }
                                    return n.forEach((function(e) {
                                        return (0, e.reject)(new D("".concat(t.status, ": ").concat(t.statusText), -32e3))
                                    })), e.abrupt("return");
                                case 17:
                                    return e.prev = 17, e.next = 20, t.json();
                                case 20:
                                    r = e.sent, e.next = 27;
                                    break;
                                case 23:
                                    return e.prev = 23, e.t1 = e.catch(17), n.forEach((function(e) {
                                        return (0, e.reject)(new Error("Failed to parse JSON response"))
                                    })), e.abrupt("return");
                                case 27:
                                    i = n.reduce((function(e, n) {
                                        return e[n.request.id] = n, e
                                    }), {}), c = Object(R.a)(r);
                                    try {
                                        for (c.s(); !(o = c.n()).done;) s = o.value, u = i[s.id], l = u.resolve, d = u.reject, b = u.request.method, l && d && ("error" in s ? d(new D(null === s || void 0 === s || null === (p = s.error) || void 0 === p ? void 0 : p.message, null === s || void 0 === s || null === (f = s.error) || void 0 === f ? void 0 : f.code, null === s || void 0 === s || null === (h = s.error) || void 0 === h ? void 0 : h.data)) : "result" in s ? l(s.result) : d(new D("Received unexpected JSON-RPC response to ".concat(b, " request."), -32e3, s)))
                                    } catch (j) {
                                        c.e(j)
                                    } finally {
                                        c.f()
                                    }
                                case 30:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 10],
                            [17, 23]
                        ])
                    }))), this.sendAsync = function(e, n) {
                        a.request(e.method, e.params).then((function(t) {
                            return n(null, {
                                jsonrpc: "2.0",
                                id: e.id,
                                result: t
                            })
                        })).catch((function(e) {
                            return n(e, null)
                        }))
                    }, this.request = function() {
                        var e = Object(h.a)(j.a.mark((function e(n, t) {
                            var r, i;
                            return j.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("string" === typeof n) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.request(n.method, n.params));
                                    case 2:
                                        if ("eth_chainId" !== n) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", "0x".concat(a.chainId.toString(16)));
                                    case 4:
                                        return i = new Promise((function(e, r) {
                                            a.batch.push({
                                                request: {
                                                    jsonrpc: "2.0",
                                                    id: a.nextId++,
                                                    method: n,
                                                    params: t
                                                },
                                                resolve: e,
                                                reject: r
                                            })
                                        })), a.batchTimeoutId = null !== (r = a.batchTimeoutId) && void 0 !== r ? r : setTimeout(a.clearBatch, a.batchWaitTimeMs), e.abrupt("return", i);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n, t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.chainId = n, this.url = t;
                    var i = new URL(t);
                    this.host = i.host, this.path = i.pathname, this.batchWaitTimeMs = null !== r && void 0 !== r ? r : 50
                },
                Y = function(e) {
                    Object(A.a)(t, e);
                    var n = Object(B.a)(t);

                    function t(e) {
                        var r, a = e.urls,
                            i = e.defaultChainId;
                        return Object(U.a)(this, t), Object(L.a)(i || 1 === Object.keys(a).length, "defaultChainId is a required argument with >1 url"), (r = n.call(this, {
                            supportedChainIds: Object.keys(a).map((function(e) {
                                return Number(e)
                            }))
                        })).providers = void 0, r.currentChainId = void 0, r.currentChainId = i || Number(Object.keys(a)[0]), r.providers = Object.keys(a).reduce((function(e, n) {
                            return e[Number(n)] = new _(Number(n), a[Number(n)]), e
                        }), {}), r
                    }
                    return Object(S.a)(t, [{
                        key: "activate",
                        value: function() {
                            var e = Object(h.a)(j.a.mark((function e() {
                                return j.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", {
                                                provider: this.providers[this.currentChainId],
                                                chainId: this.currentChainId,
                                                account: null
                                            });
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getProvider",
                        value: function() {
                            var e = Object(h.a)(j.a.mark((function e() {
                                return j.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.providers[this.currentChainId]);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getChainId",
                        value: function() {
                            var e = Object(h.a)(j.a.mark((function e() {
                                return j.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.currentChainId);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getAccount",
                        value: function() {
                            var e = Object(h.a)(j.a.mark((function e() {
                                return j.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", null);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "deactivate",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "provider",
                        get: function() {
                            return this.providers[this.currentChainId]
                        }
                    }]), t
                }(M.AbstractConnector),
                z = "https://bsc-dataseed1.defibit.io",
                F = parseInt(("56", "56"));
            var q, V = new Y({
                urls: Object(w.a)({}, F, z)
            });
            var W, H = new T.a({
                    supportedChainIds: [56, 97]
                }),
                G = new E.BscConnector({
                    supportedChainIds: [56]
                }),
                Q = new I.b({
                    rpc: Object(w.a)({}, F, z),
                    bridge: "https://bridge.walletconnect.org",
                    qrcode: !0,
                    pollingInterval: 15e3
                }),
                K = (new N.a({
                    url: z,
                    appName: "Uniswap",
                    appLogoUrl: "https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg"
                }), b = {}, Object(w.a)(b, s.l.Injected, H), Object(w.a)(b, s.l.WalletConnect, Q), Object(w.a)(b, s.l.BSC, G), b),
                J = t(26),
                X = t(14),
                $ = t(5),
                Z = "0x10ED43C718714eb63d5aA57B78B54704E256024E",
                ee = new $.j($.a.MAINNET, "0xc3cca60bdf643eca0dc1e4943a41296ffbc5d4c8", 18, "HAPPY", "HAPPY"),
                ne = new $.j($.a.MAINNET, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18, "WBNB", "Wrapped BNB"),
                te = (new $.j($.a.MAINNET, "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", 18, "DAI", "Dai Stablecoin"), new $.j($.a.MAINNET, "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", 18, "BUSD", "Binance USD")),
                re = new $.j($.a.MAINNET, "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", 18, "BTCB", "Binance BTC"),
                ae = new $.j($.a.MAINNET, "0x55d398326f99059fF775485246999027B3197955", 18, "USDT", "Tether USD"),
                ie = new $.j($.a.MAINNET, "0x23396cF899Ca06c4472205fC903bDB4de249D6fC", 18, "UST", "Wrapped UST Token"),
                ce = new $.j($.a.MAINNET, "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", 18, "ETH", "Binance-Peg Ethereum Token"),
                oe = (W = {}, Object(w.a)(W, $.a.MAINNET, [$.n[$.a.MAINNET]]), Object(w.a)(W, $.a.BSCTESTNET, [$.n[$.a.BSCTESTNET]]), W),
                se = Object(X.a)(Object(X.a)({}, oe), {}, Object(w.a)({}, $.a.MAINNET, [].concat(Object(J.a)(oe[$.a.MAINNET]), [ee, te, re, ae, ie, ce]))),
                ue = Object(w.a)({}, $.a.MAINNET, {}),
                le = Object(X.a)(Object(X.a)({}, oe), {}, Object(w.a)({}, $.a.MAINNET, [].concat(Object(J.a)(oe[$.a.MAINNET]), [ee, te, ae]))),
                de = Object(X.a)(Object(X.a)({}, oe), {}, Object(w.a)({}, $.a.MAINNET, [].concat(Object(J.a)(oe[$.a.MAINNET]), [ee, te, re, ae]))),
                be = Object(w.a)({}, $.a.MAINNET, [
                    [ee, ne],
                    [te, ae],
                    [ee, te]
                ]),
                pe = "NETWORK",
                fe = 80,
                je = 1200,
                he = new $.g($.e.BigInt(1), $.e.BigInt(1e4)),
                ye = $.e.BigInt(1e4),
                ve = new $.g($.e.BigInt(100), ye),
                me = new $.g($.e.BigInt(300), ye),
                Oe = new $.g($.e.BigInt(500), ye),
                xe = new $.g($.e.BigInt(1e3), ye),
                ge = new $.g($.e.BigInt(1500), ye),
                Ce = $.e.exponentiate($.e.BigInt(10), $.e.BigInt(16));

            function we() {
                var e = Object(g.d)(),
                    n = Object(g.d)(pe);
                return e.active ? e : n
            }
            var ke = t(22),
                Te = Object(ke.b)("app/updateBlockNumber"),
                Ie = Object(ke.b)("app/toggleWalletModal"),
                Ne = Object(ke.b)("app/toggleSettingsMenu"),
                Ee = Object(ke.b)("app/addPopup"),
                Se = Object(ke.b)("app/removePopup");

            function Re() {
                var e = we().chainId;
                return Object(x.d)((function(n) {
                    return n.application.blockNumber[null !== e && void 0 !== e ? e : -1]
                }))
            }

            function Ue() {
                var e = Object(x.c)();
                return Object(a.useCallback)((function(n) {
                    e(Se({
                        key: n
                    }))
                }), [e])
            }

            function Ae() {
                var e = Object(u.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"]);
                return Ae = function() {
                    return e
                }, e
            }

            function Be() {
                var e = Object(u.a)(["\n  width: 100%;\n  align-items: center;\n"]);
                return Be = function() {
                    return e
                }, e
            }

            function Pe() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);
                return Pe = function() {
                    return e
                }, e
            }
            var Me = l.default.div(Pe()),
                Le = Object(l.default)(Me)(Be()),
                De = l.default.div(Ae(), (function(e) {
                    var n = e.gap;
                    return ("sm" === n ? "8px" : "md" === n && "12px") || "lg" === n && "24px" || n
                }), (function(e) {
                    var n = e.justify;
                    return n && n
                })),
                _e = Me,
                Ye = t(567),
                ze = t(124),
                Fe = t(84),
                qe = {
                    pending: Object(ke.b)("lists/fetchTokenList/pending"),
                    fulfilled: Object(ke.b)("lists/fetchTokenList/fulfilled"),
                    rejected: Object(ke.b)("lists/fetchTokenList/rejected")
                },
                Ve = Object(ke.b)("lists/acceptListUpdate"),
                We = Object(ke.b)("lists/addList"),
                He = Object(ke.b)("lists/removeList"),
                Ge = Object(ke.b)("lists/selectList");
            Object(ke.b)("lists/rejectVersionUpdate");

            function Qe(e) {
                return "v".concat(e.major, ".").concat(e.minor, ".").concat(e.patch)
            }
            var Ke = t(305);

            function Je() {
                var e = Object(u.a)(["\n  width: fit-content;\n  margin: ", ";\n"]);
                return Je = function() {
                    return e
                }, e
            }

            function Xe() {
                var e = Object(u.a)(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n\n  & > * {\n    margin: ", " !important;\n  }\n"]);
                return Xe = function() {
                    return e
                }, e
            }

            function $e() {
                var e = Object(u.a)(["\n  display: flex;\n  align-items: flex-end;\n"]);
                return $e = function() {
                    return e
                }, e
            }

            function Ze() {
                var e = Object(u.a)(["\n  justify-content: space-between;\n"]);
                return Ze = function() {
                    return e
                }, e
            }

            function en() {
                var e = Object(u.a)(["\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"]);
                return en = function() {
                    return e
                }, e
            }
            var nn = Object(l.default)(Ke.Box)(en(), (function(e) {
                    return e.align || "center"
                }), (function(e) {
                    return e.padding
                }), (function(e) {
                    return e.border
                }), (function(e) {
                    return e.borderRadius
                })),
                tn = Object(l.default)(nn)(Ze()),
                rn = l.default.div($e()),
                an = Object(l.default)(nn)(Xe(), (function(e) {
                    var n = e.gap;
                    return n && "-".concat(n)
                }), (function(e) {
                    var n = e.justify;
                    return n && n
                }), (function(e) {
                    return e.gap
                })),
                cn = Object(l.default)(nn)(Je(), (function(e) {
                    var n = e.gap;
                    return n && "-".concat(n)
                })),
                on = nn;

            function sn(e) {
                var n = e.popKey,
                    t = e.listUrl,
                    c = e.oldList,
                    o = e.newList,
                    u = e.auto,
                    l = Ue(),
                    d = Object(a.useCallback)((function() {
                        return l(n)
                    }), [n, l]),
                    b = Object(x.c)(),
                    p = Object(a.useCallback)((function() {
                        u || (b(Ve(t)), d())
                    }), [u, b, t, d]),
                    f = Object(a.useMemo)((function() {
                        return Object(Fe.b)(c.tokens, o.tokens)
                    }), [o.tokens, c.tokens]),
                    j = f.added,
                    h = f.changed,
                    y = f.removed,
                    v = Object(a.useMemo)((function() {
                        return Object.keys(h).reduce((function(e, n) {
                            return e + Object.keys(h[n]).length
                        }), 0)
                    }), [h]);
                return Object(r.jsx)(an, {
                    children: Object(r.jsx)(De, {
                        style: {
                            flex: "1"
                        },
                        gap: "8px",
                        children: u ? Object(r.jsxs)(s.y, {
                            children: ['The token list "', c.name, '" has been updated to', " ", Object(r.jsx)("strong", {
                                children: Qe(o.version)
                            }), "."]
                        }) : Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsxs)("div", {
                                children: [Object(r.jsxs)(s.y, {
                                    fontSize: "14px",
                                    children: ['An update is available for the token list "', c.name, '" (', Qe(c.version), " to ", Qe(o.version), ")."]
                                }), Object(r.jsxs)("ul", {
                                    children: [j.length > 0 ? Object(r.jsxs)("li", {
                                        children: [j.map((function(e, n) {
                                            return Object(r.jsxs)(i.a.Fragment, {
                                                children: [Object(r.jsx)("strong", {
                                                    title: e.address,
                                                    children: e.symbol
                                                }), n === j.length - 1 ? null : ", "]
                                            }, "".concat(e.chainId, "-").concat(e.address))
                                        })), " ", "added"]
                                    }) : null, y.length > 0 ? Object(r.jsxs)("li", {
                                        children: [y.map((function(e, n) {
                                            return Object(r.jsxs)(i.a.Fragment, {
                                                children: [Object(r.jsx)("strong", {
                                                    title: e.address,
                                                    children: e.symbol
                                                }), n === y.length - 1 ? null : ", "]
                                            }, "".concat(e.chainId, "-").concat(e.address))
                                        })), " ", "removed"]
                                    }) : null, v > 0 ? Object(r.jsxs)("li", {
                                        children: [v, " tokens updated"]
                                    }) : null]
                                })]
                            }), Object(r.jsxs)(an, {
                                children: [Object(r.jsx)("div", {
                                    style: {
                                        flexGrow: 1,
                                        marginRight: 12
                                    },
                                    children: Object(r.jsx)(s.c, {
                                        onClick: p,
                                        children: "Accept update"
                                    })
                                }), Object(r.jsx)("div", {
                                    style: {
                                        flexGrow: 1
                                    },
                                    children: Object(r.jsx)(s.c, {
                                        onClick: d,
                                        children: "Dismiss"
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
            var un = t(565),
                ln = t(566),
                dn = t(89),
                bn = t(29),
                pn = t(213),
                fn = t(27),
                jn = t(306);

            function hn(e) {
                try {
                    return Object(bn.getAddress)(e)
                } catch (n) {
                    return !1
                }
            }
            var yn = {
                56: "",
                97: "testnet."
            };

            function vn(e, n, t) {
                var r = "https://".concat(yn[e] || yn[$.a.MAINNET], "bscscan.com");
                switch (t) {
                    case "transaction":
                        return "".concat(r, "/tx/").concat(n);
                    case "token":
                        return "".concat(r, "/token/").concat(n);
                    case "address":
                    default:
                        return "".concat(r, "/address/").concat(n)
                }
            }

            function mn(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                    t = hn(e);
                if (!t) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return "".concat(t.substring(0, n + 2), "...").concat(t.substring(42 - n))
            }

            function On(e) {
                return e.mul(fn.a.from(1e4).add(fn.a.from(1e3))).div(fn.a.from(1e4))
            }

            function xn(e, n) {
                if (n < 0 || n > 1e4) throw Error("Unexpected slippage value: ".concat(n));
                return [$.e.divide($.e.multiply(e.raw, $.e.BigInt(1e4 - n)), $.e.BigInt(1e4)), $.e.divide($.e.multiply(e.raw, $.e.BigInt(1e4 + n)), $.e.BigInt(1e4))]
            }

            function gn(e, n, t, r) {
                if (!hn(e) || e === pn.a) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return new dn.a(e, n, function(e, n) {
                    return n ? function(e, n) {
                        return e.getSigner(n).connectUnchecked()
                    }(e, n) : e
                }(t, r))
            }

            function Cn(e, n, t) {
                return gn(Z, jn.a, n, t)
            }
            var wn = t(74);

            function kn() {
                var e = Object(u.a)(["\n  animation: 2s ", " linear infinite;\n  width: 16px;\n  height: 16px;\n"]);
                return kn = function() {
                    return e
                }, e
            }

            function Tn() {
                var e = Object(u.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);
                return Tn = function() {
                    return e
                }, e
            }

            function In() {
                var e = Object(u.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]);
                return In = function() {
                    return e
                }, e
            }

            function Nn() {
                var e = Object(u.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]);
                return Nn = function() {
                    return e
                }, e
            }

            function En() {
                var e = Object(u.a)(["\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ", ";\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ", ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ", ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]);
                return En = function() {
                    return e
                }, e
            }
            var Sn = l.default.button(En(), (function(e) {
                    return e.disabled ? "default" : "pointer"
                }), (function(e) {
                    var n = e.theme;
                    return e.disabled ? n.colors.textSubtle : n.colors.primary
                }), (function(e) {
                    return e.disabled ? null : "underline"
                }), (function(e) {
                    return e.disabled ? null : "underline"
                })),
                Rn = Object(l.default)(v.b)(Nn(), (function(e) {
                    return e.theme.colors.primary
                })),
                Un = l.default.a(In(), (function(e) {
                    return e.theme.colors.primary
                }));

            function An(e) {
                var n = e.target,
                    t = void 0 === n ? "_blank" : n,
                    i = e.href,
                    c = e.rel,
                    o = void 0 === c ? "noopener noreferrer" : c,
                    s = Object(wn.a)(e, ["target", "href", "rel"]),
                    u = Object(a.useCallback)((function(e) {
                        "_blank" === t || e.ctrlKey || e.metaKey || e.preventDefault()
                    }), [t]);
                return Object(r.jsx)(Un, Object(X.a)({
                    target: t,
                    rel: o,
                    href: i,
                    onClick: u
                }, s))
            }
            var Bn = Object(l.keyframes)(Tn()),
                Pn = l.default.img(kn(), Bn);

            function Mn() {
                var e = Object(u.a)(["\n  flex-wrap: nowrap;\n"]);
                return Mn = function() {
                    return e
                }, e
            }
            var Ln = Object(l.default)(an)(Mn());

            function Dn(e) {
                var n = e.hash,
                    t = e.success,
                    i = e.summary,
                    c = we().chainId,
                    o = Object(a.useContext)(l.ThemeContext);
                return Object(r.jsxs)(Ln, {
                    children: [Object(r.jsx)("div", {
                        style: {
                            paddingRight: 16
                        },
                        children: t ? Object(r.jsx)(un.a, {
                            color: o.colors.success,
                            size: 24
                        }) : Object(r.jsx)(ln.a, {
                            color: o.colors.failure,
                            size: 24
                        })
                    }), Object(r.jsxs)(De, {
                        gap: "8px",
                        children: [Object(r.jsx)(s.y, {
                            children: null !== i && void 0 !== i ? i : "Hash: ".concat(n.slice(0, 8), "...").concat(n.slice(58, 65))
                        }), c && Object(r.jsx)(An, {
                            href: vn(c, n, "transaction"),
                            children: "View on bscscan"
                        })]
                    })]
                })
            }

            function _n() {
                var e = Object(u.a)(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ", ";\n"]);
                return _n = function() {
                    return e
                }, e
            }

            function Yn() {
                var e = Object(u.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ", ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ", " {\n    min-width: 290px;\n  }\n"]);
                return Yn = function() {
                    return e
                }, e
            }

            function zn() {
                var e = Object(u.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);
                return zn = function() {
                    return e
                }, e
            }
            var Fn = Object(l.default)(Ye.a)(zn()),
                qn = l.default.div(Yn(), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                Vn = l.default.div(_n(), (function(e) {
                    return e.theme.colors.tertiary
                })),
                Wn = Object(ze.a)(Vn);

            function Hn(e) {
                var n = e.removeAfterMs,
                    t = e.content,
                    i = e.popKey,
                    c = Ue(),
                    o = Object(a.useCallback)((function() {
                        return c(i)
                    }), [i, c]);
                Object(a.useEffect)((function() {
                    if (null !== n) {
                        var e = setTimeout((function() {
                            o()
                        }), n);
                        return function() {
                            clearTimeout(e)
                        }
                    }
                }), [n, o]);
                var s, u = Object(a.useContext)(l.ThemeContext);
                if ("txn" in t) {
                    var d = t.txn,
                        b = d.hash,
                        p = d.success,
                        f = d.summary;
                    s = Object(r.jsx)(Dn, {
                        hash: b,
                        success: p,
                        summary: f
                    })
                } else if ("listUpdate" in t) {
                    var j = t.listUpdate,
                        h = j.listUrl,
                        y = j.oldList,
                        v = j.newList,
                        m = j.auto;
                    s = Object(r.jsx)(sn, {
                        popKey: i,
                        listUrl: h,
                        oldList: y,
                        newList: v,
                        auto: m
                    })
                }
                var O = Object(ze.b)({
                    from: {
                        width: "100%"
                    },
                    to: {
                        width: "0%"
                    },
                    config: {
                        duration: null !== n && void 0 !== n ? n : void 0
                    }
                });
                return Object(r.jsxs)(qn, {
                    children: [Object(r.jsx)(Fn, {
                        color: u.colors.textSubtle,
                        onClick: o
                    }), s, null !== n ? Object(r.jsx)(Wn, {
                        style: O
                    }) : null]
                })
            }

            function Gn() {
                var e = Object(u.a)(["\n  position: fixed;\n  top: 64px;\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  ", " {\n    display: none;\n  }\n"]);
                return Gn = function() {
                    return e
                }, e
            }

            function Qn() {
                var e = Object(u.a)(["\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]);
                return Qn = function() {
                    return e
                }, e
            }

            function Kn() {
                var e = Object(u.a)(["\n  position: relative;\n  max-width: 100%;\n  height: ", ";\n  margin: ", ";\n  margin-bottom: ", "};\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"]);
                return Kn = function() {
                    return e
                }, e
            }
            var Jn = l.default.div(Kn(), (function(e) {
                    return e.height
                }), (function(e) {
                    return e.height ? "0 auto;" : 0
                }), (function(e) {
                    return e.height ? "20px" : 0
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                Xn = l.default.div(Qn()),
                $n = Object(l.default)(De)(Gn(), (function(e) {
                    return e.theme.mediaQueries.sm
                }));

            function Zn() {
                var e = function() {
                    var e = Object(x.d)((function(e) {
                        return e.application.popupList
                    }));
                    return Object(a.useMemo)((function() {
                        return e.filter((function(e) {
                            return e.show
                        }))
                    }), [e])
                }();
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)($n, {
                        gap: "20px",
                        children: e.map((function(e) {
                            return Object(r.jsx)(Hn, {
                                content: e.content,
                                popKey: e.key,
                                removeAfterMs: e.removeAfterMs
                            }, e.key)
                        }))
                    }), Object(r.jsx)(Jn, {
                        height: (null === e || void 0 === e ? void 0 : e.length) > 0 ? "fit-content" : 0,
                        children: Object(r.jsx)(Xn, {
                            children: e.slice(0).reverse().map((function(e) {
                                return Object(r.jsx)(Hn, {
                                    content: e.content,
                                    popKey: e.key,
                                    removeAfterMs: e.removeAfterMs
                                }, e.key)
                            }))
                        })
                    })]
                })
            }
            var et = t(139);

            function nt() {
                var e = Object(u.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"]);
                return nt = function() {
                    return e
                }, e
            }

            function tt() {
                var e = Object(u.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);
                return tt = function() {
                    return e
                }, e
            }
            var rt = Object(l.keyframes)(tt()),
                at = l.default.svg(nt(), rt, (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    var n = e.stroke,
                        t = e.theme;
                    return null !== n && void 0 !== n ? n : t.colors.primary
                }));

            function it(e) {
                var n = e.size,
                    t = void 0 === n ? "16px" : n,
                    a = e.stroke,
                    i = Object(wn.a)(e, ["size", "stroke"]);
                return Object(r.jsx)(at, Object(X.a)(Object(X.a)({
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    size: t,
                    stroke: a
                }, i), {}, {
                    children: Object(r.jsx)("path", {
                        d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }))
            }

            function ct() {
                var e = Object(u.a)(["\n  color: ", ";\n"]);
                return ct = function() {
                    return e
                }, e
            }

            function ot() {
                var e = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"]);
                return ot = function() {
                    return e
                }, e
            }
            var st = l.default.div(ot()),
                ut = l.default.h2(ct(), (function(e) {
                    return e.theme.colors.primaryDark
                }));

            function lt(e) {
                var n = e.children,
                    t = Object(et.b)().t,
                    i = Object(g.d)().active,
                    c = Object(g.d)(pe),
                    o = c.active,
                    u = c.error,
                    l = c.activate,
                    d = function() {
                        var e = Object(g.d)(),
                            n = e.activate,
                            t = e.active,
                            r = Object(a.useState)(!1),
                            i = Object(y.a)(r, 2),
                            c = i[0],
                            o = i[1];
                        return Object(a.useEffect)((function() {
                            H.isAuthorized().then((function(e) {
                                var t = window.localStorage.getItem(s.A);
                                e && t || C.isMobile && window.ethereum && t ? n(H, void 0, !0).catch((function() {
                                    o(!0)
                                })) : o(!0)
                            }))
                        }), [n]), Object(a.useEffect)((function() {
                            t && o(!0)
                        }), [t]), c
                    }();
                Object(a.useEffect)((function() {
                        !d || o || u || i || l(V)
                    }), [d, o, u, l, i]),
                    function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            n = Object(g.d)(),
                            t = n.active,
                            r = n.error,
                            i = n.activate;
                        Object(a.useEffect)((function() {
                            var n = window.ethereum;
                            if (n && n.on && !t && !r && !e) {
                                var a = function() {
                                        i(H, void 0, !0).catch((function(e) {
                                            console.error("Failed to activate after chain changed", e)
                                        }))
                                    },
                                    c = function(e) {
                                        e.length > 0 && i(H, void 0, !0).catch((function(e) {
                                            console.error("Failed to activate after accounts changed", e)
                                        }))
                                    };
                                return n.on("chainChanged", a), n.on("accountsChanged", c),
                                    function() {
                                        n.removeListener && (n.removeListener("chainChanged", a), n.removeListener("accountsChanged", c))
                                    }
                            }
                        }), [t, r, e, i])
                    }(!d);
                var b = Object(a.useState)(!1),
                    p = Object(y.a)(b, 2),
                    f = p[0],
                    j = p[1];
                return Object(a.useEffect)((function() {
                    var e = setTimeout((function() {
                        j(!0)
                    }), 600);
                    return function() {
                        clearTimeout(e)
                    }
                }), []), d ? !i && u ? Object(r.jsx)(st, {
                    children: Object(r.jsx)(ut, {
                        children: t("unknownError")
                    })
                }) : i || o ? n : f ? Object(r.jsx)(st, {
                    children: Object(r.jsx)(it, {})
                }) : null : null
            }

            function dt() {
                var e = Object(u.a)(["\n  background-color: ", ";\n"]);
                return dt = function() {
                    return e
                }, e
            }

            function bt() {
                var e = Object(u.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"]);
                return bt = function() {
                    return e
                }, e
            }

            function pt() {
                var e = Object(u.a)(["\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"]);
                return pt = function() {
                    return e
                }, e
            }
            var ft = l.default.div(pt(), (function(e) {
                    return e.padding
                }), (function(e) {
                    return e.border
                }), (function(e) {
                    return e.borderRadius
                })),
                jt = ft,
                ht = Object(l.default)(ft)(bt(), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                })),
                yt = Object(l.default)(ft)(dt(), (function(e) {
                    return e.theme.colors.tertiary
                })),
                vt = t(224),
                mt = (t(456), t(68));

            function Ot() {
                var e = Object(u.a)(["\n        min-height: ", "vh;\n      "]);
                return Ot = function() {
                    return e
                }, e
            }

            function xt() {
                var e = Object(u.a)(["\n        max-height: ", "vh;\n      "]);
                return xt = function() {
                    return e
                }, e
            }

            function gt() {
                var e = Object(u.a)(["\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    border: 1px solid ", ";\n    background-color: ", ";\n    box-shadow: 0 4px 8px 0 ", ";\n    padding: 0px;\n    width: 80%;\n    overflow: hidden;\n\n    align-self: ", ";\n\n    max-width: 420px;\n    ", "\n    ", "\n    display: flex;\n    border-radius: 20px;\n\n    ", " {\n      width: 65vw;\n    }\n    ", " {\n      width: 85vw;\n    }\n  }\n"]);
                return gt = function() {
                    return e
                }, e
            }

            function Ct() {
                var e = Object(u.a)(["\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n"]);
                return Ct = function() {
                    return e
                }, e
            }
            var wt = Object(ze.a)(vt.b),
                kt = Object(l.default)(wt)(Ct()),
                Tt = Object(ze.a)(vt.a),
                It = Object(l.default)((function(e) {
                    e.minHeight, e.maxHeight, e.mobile, e.isOpen;
                    var n = Object(wn.a)(e, ["minHeight", "maxHeight", "mobile", "isOpen"]);
                    return Object(r.jsx)(Tt, Object(X.a)({}, n))
                })).attrs({
                    "aria-label": "dialog"
                })(gt(), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                }), Object(mt.b)(.95, "#191326"), (function(e) {
                    return e.mobile ? "flex-end" : "center"
                }), (function(e) {
                    var n = e.maxHeight;
                    return n && Object(l.css)(xt(), n)
                }), (function(e) {
                    var n = e.minHeight;
                    return n && Object(l.css)(Ot(), n)
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                }));

            function Nt(e) {
                var n = e.isOpen,
                    t = e.onDismiss,
                    a = e.minHeight,
                    i = void 0 !== a && a,
                    c = e.maxHeight,
                    o = void 0 === c ? 50 : c,
                    s = e.initialFocusRef,
                    u = e.children,
                    l = Object(ze.c)(n, null, {
                        config: {
                            duration: 200
                        },
                        from: {
                            opacity: 0
                        },
                        enter: {
                            opacity: 1
                        },
                        leave: {
                            opacity: 0
                        }
                    });
                return Object(r.jsx)(r.Fragment, {
                    children: l.map((function(e) {
                        var n = e.item,
                            a = e.key,
                            c = e.props;
                        return n && Object(r.jsx)(kt, {
                            style: c,
                            onDismiss: t,
                            initialFocusRef: s,
                            children: Object(r.jsxs)(It, {
                                "aria-label": "dialog content",
                                minHeight: i,
                                maxHeight: o,
                                mobile: C.isMobile,
                                children: [!s && C.isMobile ? Object(r.jsx)("div", {
                                    tabIndex: 1
                                }) : null, u]
                            })
                        }, a)
                    }))
                })
            }

            function Et() {
                var e = Object(u.a)(["\n  align-items: center;\n  display: flex;\n\n  & > ", " {\n    flex: 1;\n  }\n"]);
                return Et = function() {
                    return e
                }, e
            }

            function St() {
                var e = Object(u.a)(["\n  background-color: ", ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"]);
                return St = function() {
                    return e
                }, e
            }

            function Rt() {
                var e = Object(u.a)(["\n  padding: 40px 0;\n"]);
                return Rt = function() {
                    return e
                }, e
            }

            function Ut() {
                var e = Object(u.a)(["\n  padding: 24px;\n"]);
                return Ut = function() {
                    return e
                }, e
            }

            function At() {
                var e = Object(u.a)(["\n  width: 100%;\n  overflow-y: auto;\n"]);
                return At = function() {
                    return e
                }, e
            }
            var Bt = l.default.div(At()),
                Pt = Object(l.default)(De)(Ut()),
                Mt = Object(l.default)(Le)(Rt()),
                Lt = Object(l.default)(Pt)(St(), (function(e) {
                    return e.theme.colors.invertedContrast
                })),
                Dt = l.default.div(Et(), s.o),
                _t = function(e) {
                    var n = e.children,
                        t = e.onDismiss;
                    return Object(r.jsxs)(Dt, {
                        children: [Object(r.jsx)(s.o, {
                            children: n
                        }), Object(r.jsx)(s.p, {
                            onClick: t,
                            variant: "text",
                            children: Object(r.jsx)(s.j, {
                                color: "primary"
                            })
                        })]
                    })
                };

            function Yt() {
                var e = Object(u.a)(["\n  height: ", ";\n  width: ", ";\n"]);
                return Yt = function() {
                    return e
                }, e
            }
            var zt = Object(l.default)(Pn)(Yt(), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                })),
                Ft = function(e) {
                    var n = e.onDismiss,
                        t = e.pendingText;
                    return Object(r.jsx)(Bt, {
                        children: Object(r.jsxs)(Pt, {
                            children: [Object(r.jsx)(_t, {
                                onDismiss: n,
                                children: "Waiting for confirmation"
                            }), Object(r.jsx)(Mt, {
                                children: Object(r.jsx)(zt, {
                                    src: "/images/blue-loader.svg",
                                    alt: "loader",
                                    size: "90px"
                                })
                            }), Object(r.jsxs)(De, {
                                gap: "12px",
                                justify: "center",
                                children: [Object(r.jsx)(De, {
                                    gap: "12px",
                                    justify: "center",
                                    children: Object(r.jsx)(s.y, {
                                        fontSize: "14px",
                                        children: Object(r.jsx)("strong", {
                                            children: t
                                        })
                                    })
                                }), Object(r.jsx)(s.y, {
                                    fontSize: "14px",
                                    children: "Confirm this transaction in your wallet"
                                })]
                            })]
                        })
                    })
                },
                qt = t(568),
                Vt = function(e) {
                    var n = e.onDismiss,
                        t = e.chainId,
                        i = e.hash,
                        c = Object(a.useContext)(l.ThemeContext);
                    return Object(r.jsx)(Bt, {
                        children: Object(r.jsxs)(Pt, {
                            children: [Object(r.jsx)(_t, {
                                onDismiss: n,
                                children: "Transaction submitted"
                            }), Object(r.jsx)(Mt, {
                                children: Object(r.jsx)(qt.a, {
                                    strokeWidth: .5,
                                    size: 97,
                                    color: c.colors.primary
                                })
                            }), Object(r.jsxs)(De, {
                                gap: "8px",
                                justify: "center",
                                children: [t && i && Object(r.jsx)(s.r, {
                                    href: vn(t, i, "transaction"),
                                    children: "View on BscScan"
                                }), Object(r.jsx)(s.c, {
                                    onClick: n,
                                    mt: "20px",
                                    children: "Close"
                                })]
                            })]
                        })
                    })
                },
                Wt = function(e) {
                    var n = e.isOpen,
                        t = e.onDismiss,
                        a = e.attemptingTxn,
                        i = e.hash,
                        c = e.pendingText,
                        o = e.content,
                        s = we().chainId;
                    return s ? Object(r.jsx)(Nt, {
                        isOpen: n,
                        onDismiss: t,
                        maxHeight: 90,
                        children: a ? Object(r.jsx)(Ft, {
                            onDismiss: t,
                            pendingText: c
                        }) : i ? Object(r.jsx)(Vt, {
                            chainId: s,
                            hash: i,
                            onDismiss: t
                        }) : o()
                    }) : null
                },
                Ht = function(e) {
                    var n = e.title,
                        t = e.bottomContent,
                        a = e.onDismiss,
                        i = e.topContent;
                    return Object(r.jsxs)(Bt, {
                        children: [Object(r.jsxs)(Pt, {
                            children: [Object(r.jsx)(_t, {
                                onDismiss: a,
                                children: n
                            }), i()]
                        }), Object(r.jsx)(Lt, {
                            gap: "12px",
                            children: t()
                        })]
                    })
                },
                Gt = t(569),
                Qt = function(e) {
                    var n = e.message,
                        t = e.onDismiss,
                        i = Object(a.useContext)(l.ThemeContext);
                    return Object(r.jsxs)(Bt, {
                        children: [Object(r.jsxs)(Pt, {
                            children: [Object(r.jsx)(_t, {
                                onDismiss: t,
                                children: "Error"
                            }), Object(r.jsxs)(De, {
                                style: {
                                    marginTop: 20,
                                    padding: "2rem 0"
                                },
                                gap: "24px",
                                justify: "center",
                                children: [Object(r.jsx)(Gt.a, {
                                    color: i.colors.failure,
                                    style: {
                                        strokeWidth: 1.5
                                    },
                                    size: 64
                                }), Object(r.jsx)(s.y, {
                                    fontSize: "16px",
                                    color: "failure",
                                    style: {
                                        textAlign: "center",
                                        width: "85%"
                                    },
                                    children: n
                                })]
                            })]
                        }), Object(r.jsx)(Lt, {
                            gap: "12px",
                            children: Object(r.jsx)(s.c, {
                                onClick: t,
                                children: "Dismiss"
                            })
                        })]
                    })
                },
                Kt = Wt,
                Jt = {
                    translations: [],
                    setTranslations: function() {}
                },
                Xt = Object(a.createContext)(Jt),
                $t = /%(.*?)%/,
                Zt = function(e, n, t) {
                    var r = e.find((function(e) {
                        return e.data.stringId === n
                    }));
                    if (r) {
                        var a = r.data.text;
                        return a.includes("%") ? function(e, n) {
                            var t = $t.exec(e)[0],
                                r = e.split(" ").indexOf(t),
                                a = n.split(" ")[r];
                            return e.replace(t, a)
                        }(a, t) : a
                    }
                    return t
                },
                er = function(e, n) {
                    var t = Object(a.useContext)(Xt).translations;
                    return "error" === t[0] ? n : t.length > 0 ? Zt(t, e, n) : null
                },
                nr = function() {
                    var e = Object(a.useContext)(Xt).translations;
                    return Object(a.useCallback)((function(n, t) {
                        return "error" === e[0] ? t : e.length > 0 ? Zt(e, n, t) : t
                    }), [e])
                };

            function tr() {
                var e = Object(u.a)(["\n  margin-bottom: 40px;\n"]);
                return tr = function() {
                    return e
                }, e
            }
            var rr = l.default.div(tr());
            var ar, ir = function(e) {
                    var n = e.activeIndex,
                        t = void 0 === n ? 0 : n,
                        a = nr();
                    return Object(r.jsx)(rr, {
                        children: Object(r.jsxs)(s.d, {
                            activeIndex: t,
                            scale: "sm",
                            variant: "subtle",
                            children: [Object(r.jsx)(s.e, {
                                id: "swap-nav-link",
                                to: "/swap",
                                as: v.b,
                                children: a(1142, "Swap")
                            }), Object(r.jsx)(s.e, {
                                id: "pool-nav-link",
                                to: "/pool",
                                as: v.b,
                                children: a(262, "Liquidity")
                            })]
                        })
                    })
                },
                cr = t(147),
                or = t(154),
                sr = t(278),
                ur = new cr.b(or),
                lr = t(201),
                dr = function(e) {
                    Object(A.a)(t, e);
                    var n = Object(B.a)(t);

                    function t(e, r) {
                        var a;
                        return Object(U.a)(this, t), (a = n.call(this, e.chainId, e.address, e.decimals, e.symbol, e.name)).tokenInfo = void 0, a.tags = void 0, a.tokenInfo = e, a.tags = r, a
                    }
                    return Object(S.a)(t, [{
                        key: "logoURI",
                        get: function() {
                            return this.tokenInfo.logoURI
                        }
                    }]), t
                }($.j),
                br = (ar = {}, Object(w.a)(ar, $.a.MAINNET, {}), Object(w.a)(ar, $.a.BSCTESTNET, {}), ar),
                pr = "undefined" !== typeof WeakMap ? new WeakMap : null;

            function fr(e) {
                var n = Object(x.d)((function(e) {
                    return e.lists.byUrl
                }));
                return Object(a.useMemo)((function() {
                    var t;
                    if (!e) return br;
                    var r = null === (t = n[e]) || void 0 === t ? void 0 : t.current;
                    if (!r) return br;
                    try {
                        return function(e) {
                            var n = null === pr || void 0 === pr ? void 0 : pr.get(e);
                            if (n) return n;
                            var t = e.tokens.reduce((function(n, t) {
                                var r, a, i, c = null !== (r = null === (a = t.tags) || void 0 === a || null === (i = a.map((function(n) {
                                        var t;
                                        if (null === (t = e.tags) || void 0 === t ? void 0 : t[n]) return Object(X.a)(Object(X.a)({}, e.tags[n]), {}, {
                                            id: n
                                        })
                                    }))) || void 0 === i ? void 0 : i.filter((function(e) {
                                        return Boolean(e)
                                    }))) && void 0 !== r ? r : [],
                                    o = new dr(t, c);
                                if (void 0 !== n[o.chainId][o.address]) throw Error("Duplicate tokens.");
                                return Object(X.a)(Object(X.a)({}, n), {}, Object(w.a)({}, o.chainId, Object(X.a)(Object(X.a)({}, n[o.chainId]), {}, Object(w.a)({}, o.address, o))))
                            }), Object(X.a)({}, br));
                            return null === pr || void 0 === pr || pr.set(e, t), t
                        }(r)
                    } catch (a) {
                        return console.error("Could not show token list due to error", a), br
                    }
                }), [n, e])
            }

            function jr() {
                return Object(x.d)((function(e) {
                    return e.lists.selectedListUrl
                }))
            }

            function hr() {
                return fr(jr())
            }
            var yr = /^0x[a-fA-F0-9]{40}$/,
                vr = /^0x[a-f0-9]*$/;

            function mr(e) {
                if (!yr.test(e.address)) throw new Error("Invalid address: ".concat(e.address));
                if (!vr.test(e.callData)) throw new Error("Invalid hex: ".concat(e.callData));
                return "".concat(e.address, "-").concat(e.callData)
            }

            function Or(e) {
                var n = e.split("-");
                if (2 !== n.length) throw new Error("Invalid call key: ".concat(e));
                return {
                    address: n[0],
                    callData: n[1]
                }
            }
            var xr = Object(ke.b)("multicall/addMulticallListeners"),
                gr = Object(ke.b)("multicall/removeMulticallListeners"),
                Cr = Object(ke.b)("multicall/fetchingMulticallResults"),
                wr = Object(ke.b)("multicall/errorFetchingMulticallResults"),
                kr = Object(ke.b)("multicall/updateMulticallResults");

            function Tr(e) {
                return -1 !== ["string", "number"].indexOf(typeof e)
            }

            function Ir(e) {
                return void 0 === e || Array.isArray(e) && e.every((function(e) {
                    return Tr(e) || Array.isArray(e) && e.every(Tr)
                }))
            }
            var Nr = {
                    valid: !1,
                    blockNumber: void 0,
                    data: void 0
                },
                Er = {
                    blocksPerFetch: 1 / 0
                };

            function Sr(e, n) {
                var t = we().chainId,
                    r = Object(x.d)((function(e) {
                        return e.multicall.callResults
                    })),
                    i = Object(x.c)(),
                    c = Object(a.useMemo)((function() {
                        var n, t, r;
                        return JSON.stringify(null !== (n = null === e || void 0 === e || null === (t = e.filter((function(e) {
                            return Boolean(e)
                        }))) || void 0 === t || null === (r = t.map(mr)) || void 0 === r ? void 0 : r.sort()) && void 0 !== n ? n : [])
                    }), [e]);
                return Object(a.useEffect)((function() {
                    var e = JSON.parse(c);
                    if (t && 0 !== e.length) {
                        var r = e.map((function(e) {
                            return Or(e)
                        }));
                        return i(xr({
                                chainId: t,
                                calls: r,
                                options: n
                            })),
                            function() {
                                i(gr({
                                    chainId: t,
                                    calls: r,
                                    options: n
                                }))
                            }
                    }
                }), [t, i, n, c]), Object(a.useMemo)((function() {
                    return e.map((function(e) {
                        var n;
                        if (!t || !e) return Nr;
                        var a = null === (n = r[t]) || void 0 === n ? void 0 : n[mr(e)];
                        return {
                            valid: !0,
                            data: (null === a || void 0 === a ? void 0 : a.data) && "0x" !== (null === a || void 0 === a ? void 0 : a.data) ? a.data : null,
                            blockNumber: null === a || void 0 === a ? void 0 : a.blockNumber
                        }
                    }))
                }), [r, e, t])
            }
            var Rr = {
                    valid: !1,
                    result: void 0,
                    loading: !1,
                    syncing: !1,
                    error: !1
                },
                Ur = {
                    valid: !0,
                    result: void 0,
                    loading: !0,
                    syncing: !0,
                    error: !1
                };

            function Ar(e, n, t, r) {
                if (!e) return Rr;
                var a = e.valid,
                    i = e.data,
                    c = e.blockNumber;
                if (!a) return Rr;
                if (a && !c) return Ur;
                if (!n || !t || !r) return Ur;
                var o, s = i && i.length > 2,
                    u = (null !== c && void 0 !== c ? c : 0) < r;
                if (s && i) try {
                    o = n.decodeFunctionResult(t, i)
                } catch (l) {
                    return console.error("Result data parsing failed", t, i), {
                        valid: !0,
                        loading: !1,
                        error: !0,
                        syncing: u,
                        result: o
                    }
                }
                return {
                    valid: !0,
                    loading: !1,
                    syncing: u,
                    result: o,
                    error: !s
                }
            }

            function Br(e, n, t, r, i) {
                var c = Object(a.useMemo)((function() {
                        return n.getFunction(t)
                    }), [n, t]),
                    o = Object(a.useMemo)((function() {
                        return c && Ir(r) ? n.encodeFunctionData(c, r) : void 0
                    }), [r, n, c]),
                    s = Sr(Object(a.useMemo)((function() {
                        return c && e && e.length > 0 && o ? e.map((function(e) {
                            return e && o ? {
                                address: e,
                                callData: o
                            } : void 0
                        })) : []
                    }), [e, o, c]), i),
                    u = Re();
                return Object(a.useMemo)((function() {
                    return s.map((function(e) {
                        return Ar(e, n, c, u)
                    }))
                }), [c, s, n, u])
            }

            function Pr(e, n, t, r) {
                var i = Object(a.useMemo)((function() {
                        var t;
                        return null === e || void 0 === e || null === (t = e.interface) || void 0 === t ? void 0 : t.getFunction(n)
                    }), [e, n]),
                    c = Sr(Object(a.useMemo)((function() {
                        return e && i && Ir(t) ? [{
                            address: e.address,
                            callData: e.interface.encodeFunctionData(i, t)
                        }] : []
                    }), [e, i, t]), r)[0],
                    o = Re();
                return Object(a.useMemo)((function() {
                    return Ar(c, null === e || void 0 === e ? void 0 : e.interface, i, o)
                }), [c, e, i, o])
            }
            var Mr = t(176),
                Lr = t.n(Mr),
                Dr = Object(ke.b)("user/updateMatchesDarkMode"),
                _r = Object(ke.b)("user/updateUserDarkMode"),
                Yr = Object(ke.b)("user/updateUserExpertMode"),
                zr = Object(ke.b)("user/updateUserSlippageTolerance"),
                Fr = Object(ke.b)("user/updateUserDeadline"),
                qr = Object(ke.b)("user/addSerializedToken"),
                Vr = Object(ke.b)("user/removeSerializedToken"),
                Wr = Object(ke.b)("user/addSerializedPair"),
                Hr = Object(ke.b)("user/removeSerializedPair"),
                Gr = Object(ke.b)("user/muteAudio"),
                Qr = Object(ke.b)("user/unmuteAudio"),
                Kr = "IS_DARK";

            function Jr(e) {
                return {
                    chainId: e.chainId,
                    address: e.address,
                    decimals: e.decimals,
                    symbol: e.symbol,
                    name: e.name
                }
            }

            function Xr(e) {
                return new $.j(e.chainId, e.address, e.decimals, e.symbol, e.name)
            }

            function $r() {
                return Object(x.d)((function(e) {
                    return e.user.userExpertMode
                }))
            }

            function Zr() {
                var e = Object(x.c)();
                return [Object(x.d)((function(e) {
                    return e.user.userSlippageTolerance
                })), Object(a.useCallback)((function(n) {
                    e(zr({
                        userSlippageTolerance: n
                    }))
                }), [e])]
            }

            function ea() {
                var e = Object(x.c)();
                return [Object(x.d)((function(e) {
                    return e.user.userDeadline
                })), Object(a.useCallback)((function(n) {
                    e(Fr({
                        userDeadline: n
                    }))
                }), [e])]
            }

            function na() {
                var e = we().chainId,
                    n = Object(x.d)((function(e) {
                        return e.user.tokens
                    }));
                return Object(a.useMemo)((function() {
                    var t;
                    return e ? Object.values(null !== (t = n[e]) && void 0 !== t ? t : {}).map(Xr) : []
                }), [n, e])
            }

            function ta(e) {
                return {
                    token0: Jr(e.token0),
                    token1: Jr(e.token1)
                }
            }

            function ra(e) {
                var n = Object(y.a)(e, 2),
                    t = n[0],
                    r = n[1];
                return new $.j(t.chainId, $.f.getAddress(t, r), 18, "Cake-LP", "Pancake LPs")
            }
            var aa, ia = t(186),
                ca = t(309),
                oa = t(310),
                sa = t(311),
                ua = t(279),
                la = (aa = {}, Object(w.a)(aa, $.a.MAINNET, "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb"), Object(w.a)(aa, $.a.BSCTESTNET, "0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A"), aa);

            function da(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = we(),
                    i = r.library,
                    c = r.account;
                return Object(a.useMemo)((function() {
                    if (!e || !n || !i) return null;
                    try {
                        return gn(e, n, i, t && c ? c : void 0)
                    } catch (r) {
                        return console.error("Failed to get contract", r), null
                    }
                }), [e, n, i, t, c])
            }

            function ba(e, n) {
                return da(e, or, n)
            }

            function pa(e) {
                var n = we().chainId;
                if (n) switch (n) {
                    case $.a.MAINNET:
                    case $.a.BSCTESTNET:
                }
                return da(undefined, ca, e)
            }

            function fa(e, n) {
                return da(e, oa, n)
            }

            function ja() {
                var e = we().chainId;
                return da(e && la[e], ua, !1)
            }

            function ha() {
                var e = we().chainId,
                    n = na(),
                    t = hr();
                return Object(a.useMemo)((function() {
                    return e ? n.reduce((function(e, n) {
                        return e[n.address] = n, e
                    }), Object(X.a)({}, t[e])) : {}
                }), [e, n, t])
            }
            var ya = /^0x[a-fA-F0-9]{64}$/;

            function va(e, n, t) {
                return e && e.length > 0 ? e : n && ya.test(n) ? Object(lr.b)(n) : t
            }

            function ma(e) {
                var n = we().chainId,
                    t = ha(),
                    r = hn(e),
                    i = ba(r || void 0, !1),
                    c = function(e, n) {
                        return da(e, sr, n)
                    }(r || void 0, !1),
                    o = r ? t[r] : void 0,
                    s = Pr(o ? void 0 : i, "name", void 0, Er),
                    u = Pr(o ? void 0 : c, "name", void 0, Er),
                    l = Pr(o ? void 0 : i, "symbol", void 0, Er),
                    d = Pr(o ? void 0 : c, "symbol", void 0, Er),
                    b = Pr(o ? void 0 : i, "decimals", void 0, Er);
                return Object(a.useMemo)((function() {
                    if (o) return o;
                    if (n && r) {
                        if (b.loading || l.loading || s.loading) return null;
                        var e, t, a, i;
                        if (b.result) return new $.j(n, r, b.result[0], va(null === (e = l.result) || void 0 === e ? void 0 : e[0], null === (t = d.result) || void 0 === t ? void 0 : t[0], "UNKNOWN"), va(null === (a = s.result) || void 0 === a ? void 0 : a[0], null === (i = u.result) || void 0 === i ? void 0 : i[0], "Unknown Token"))
                    }
                }), [r, n, b.loading, b.result, l.loading, l.result, d.result, o, s.loading, s.result, u.result])
            }

            function Oa(e) {
                var n = "BNB" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
                    t = ma(n ? void 0 : e);
                return n ? $.d : t
            }

            function xa(e) {
                var n = ja(),
                    t = Object(a.useMemo)((function() {
                        return e ? e.map(hn).filter((function(e) {
                            return !1 !== e
                        })).sort() : []
                    }), [e]),
                    r = function(e, n, t, r) {
                        var i = Object(a.useMemo)((function() {
                                var t;
                                return null === e || void 0 === e || null === (t = e.interface) || void 0 === t ? void 0 : t.getFunction(n)
                            }), [e, n]),
                            c = Sr(Object(a.useMemo)((function() {
                                return e && i && t && t.length > 0 ? t.map((function(n) {
                                    return {
                                        address: e.address,
                                        callData: e.interface.encodeFunctionData(i, n)
                                    }
                                })) : []
                            }), [t, e, i]), r),
                            o = Re();
                        return Object(a.useMemo)((function() {
                            return c.map((function(n) {
                                return Ar(n, null === e || void 0 === e ? void 0 : e.interface, i, o)
                            }))
                        }), [i, e, c, o])
                    }(n, "getEthBalance", t.map((function(e) {
                        return [e]
                    })));
                return Object(a.useMemo)((function() {
                    return t.reduce((function(e, n, t) {
                        var a, i, c = null === r || void 0 === r || null === (a = r[t]) || void 0 === a || null === (i = a.result) || void 0 === i ? void 0 : i[0];
                        return c && (e[n] = $.c.ether($.e.BigInt(c.toString()))), e
                    }), {})
                }), [t, r])
            }

            function ga(e, n) {
                var t = Object(a.useMemo)((function() {
                        var e;
                        return null !== (e = null === n || void 0 === n ? void 0 : n.filter((function(e) {
                            return !1 !== hn(null === e || void 0 === e ? void 0 : e.address)
                        }))) && void 0 !== e ? e : []
                    }), [n]),
                    r = Br(Object(a.useMemo)((function() {
                        return t.map((function(e) {
                            return e.address
                        }))
                    }), [t]), ur, "balanceOf", [e]),
                    i = Object(a.useMemo)((function() {
                        return r.some((function(e) {
                            return e.loading
                        }))
                    }), [r]);
                return [Object(a.useMemo)((function() {
                    return e && t.length > 0 ? t.reduce((function(e, n, t) {
                        var a, i, c = null === r || void 0 === r || null === (a = r[t]) || void 0 === a || null === (i = a.result) || void 0 === i ? void 0 : i[0],
                            o = c ? $.e.BigInt(c.toString()) : void 0;
                        return o && (e[n.address] = new $.k(n, o)), e
                    }), {}) : {}
                }), [e, t, r]), i]
            }

            function Ca(e, n) {
                return ga(e, n)[0]
            }

            function wa(e, n) {
                var t = Ca(e, [n]);
                if (n) return t[n.address]
            }

            function ka(e, n) {
                var t = Object(a.useMemo)((function() {
                        var e;
                        return null !== (e = null === n || void 0 === n ? void 0 : n.filter((function(e) {
                            return e instanceof $.j
                        }))) && void 0 !== e ? e : []
                    }), [n]),
                    r = Ca(e, t),
                    i = xa(Object(a.useMemo)((function() {
                        var e;
                        return null !== (e = null === n || void 0 === n ? void 0 : n.some((function(e) {
                            return e === $.d
                        }))) && void 0 !== e && e
                    }), [n]) ? [e] : []);
                return Object(a.useMemo)((function() {
                    var t;
                    return null !== (t = null === n || void 0 === n ? void 0 : n.map((function(n) {
                        if (e && n) return n instanceof $.j ? r[n.address] : n === $.d ? i[e] : void 0
                    }))) && void 0 !== t ? t : []
                }), [e, n, i, r])
            }

            function Ta(e, n) {
                return ka(e, [n])[0]
            }

            function Ia(e, n) {
                var t = Object(a.useState)(n && n(e) ? e : void 0),
                    r = Object(y.a)(t, 2),
                    i = r[0],
                    c = r[1];
                return Object(a.useEffect)((function() {
                    c((function(t) {
                        return !n || n(e) ? e : t
                    }))
                }), [n, e]), i
            }

            function Na(e) {
                return null !== e && void 0 !== e
            }
            var Ea = t(312),
                Sa = t(221),
                Ra = t.n(Sa),
                Ua = t(162),
                Aa = t(137);
            var Ba = new TextDecoder;

            function Pa(e) {
                var n = function(e) {
                        if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0) throw new Error("hex must have length that is multiple of 2");
                        for (var n = new Uint8Array(e.length / 2), t = 0; t < n.length; t++) n[t] = parseInt(e.substr(2 * t, 2), 16);
                        return n
                    }(e),
                    t = Object(Ua.getCodec)(n);
                switch (t) {
                    case "ipfs-ns":
                        var r = Object(Ua.rmPrefix)(n),
                            a = new Ra.a(r);
                        return "ipfs://".concat(Object(Aa.toB58String)(a.multihash));
                    case "ipns-ns":
                        var i = Object(Ua.rmPrefix)(n),
                            c = new Ra.a(i),
                            o = Object(Aa.decode)(c.multihash);
                        return "identity" === o.name ? "ipns://".concat(Ba.decode(o.digest).trim()) : "ipns://".concat(Object(Aa.toB58String)(c.multihash));
                    default:
                        throw new Error("Unrecognized codec: ".concat(t))
                }
            }
            var Ma = /^(([a-zA-Z0-9]+\.)+)eth(\/.*)?$/;

            function La(e) {
                var n = e.match(Ma);
                if (n) return {
                    ensName: "".concat(n[1].toLowerCase(), "eth"),
                    ensPath: n[3]
                }
            }

            function Da(e) {
                var n, t;
                switch (e.split(":")[0].toLowerCase()) {
                    case "https":
                        return [e];
                    case "http":
                        return ["https".concat(e.substr(4)), e];
                    case "ipfs":
                        var r = null === (n = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === n ? void 0 : n[2];
                        return ["https://cloudflare-ipfs.com/ipfs/".concat(r, "/"), "https://ipfs.io/ipfs/".concat(r, "/")];
                    case "ipns":
                        var a = null === (t = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
                        return ["https://cloudflare-ipfs.com/ipns/".concat(a, "/"), "https://ipfs.io/ipns/".concat(a, "/")];
                    default:
                        return []
                }
            }
            var _a = t(119);

            function Ya(e) {
                return /^0x0*$/.test(e)
            }

            function za(e) {
                var n = Object(a.useMemo)((function() {
                        return e ? La(e) : void 0
                    }), [e]),
                    t = function(e) {
                        var n, t, r, i = Object(a.useMemo)((function() {
                                if (!e) return [void 0];
                                try {
                                    return e ? [Object(_a.namehash)(e)] : [void 0]
                                } catch (n) {
                                    return [void 0]
                                }
                            }), [e]),
                            c = Pr(pa(!1), "resolver", i),
                            o = null === (n = c.result) || void 0 === n ? void 0 : n[0],
                            s = Pr(fa(o && Ya(o) ? void 0 : o, !1), "contenthash", i);
                        return {
                            contenthash: null !== (t = null === (r = s.result) || void 0 === r ? void 0 : r[0]) && void 0 !== t ? t : null,
                            loading: c.loading || s.loading
                        }
                    }(null === n || void 0 === n ? void 0 : n.ensName);
                return Object(a.useMemo)((function() {
                    return n ? t.contenthash ? Da(Pa(t.contenthash)) : [] : e ? Da(e) : []
                }), [n, t.contenthash, e])
            }
            var Fa = t(571),
                qa = {};

            function Va(e) {
                var n = e.srcs,
                    t = e.alt,
                    i = Object(wn.a)(e, ["srcs", "alt"]),
                    c = Object(a.useState)(0),
                    o = Object(y.a)(c, 2)[1],
                    s = n.find((function(e) {
                        return !qa[e]
                    }));
                return s ? Object(r.jsx)("img", Object(X.a)(Object(X.a)({}, i), {}, {
                    alt: t,
                    src: s,
                    onError: function() {
                        s && (qa[s] = !0), o((function(e) {
                            return e + 1
                        }))
                    }
                })) : Object(r.jsx)(Fa.a, Object(X.a)({}, i))
            }

            function Wa() {
                var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
                return Wa = function() {
                    return e
                }, e
            }
            var Ha = Object(l.default)(Va)(Wa(), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }));

            function Ga(e) {
                var n = e.logoURI,
                    t = e.style,
                    a = e.size,
                    i = void 0 === a ? "24px" : a,
                    c = e.alt,
                    o = za(n);
                return Object(r.jsx)(Ha, {
                    alt: c,
                    size: i,
                    srcs: o,
                    style: t
                })
            }
            var Qa = t(583),
                Ka = t(185);

            function Ja(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = Object(a.useRef)();
                Object(a.useEffect)((function() {
                    r.current = e
                }), [e]), Object(a.useEffect)((function() {
                    function e() {
                        var e = r.current;
                        e && e()
                    }
                    if (null !== n) {
                        t && e();
                        var a = setInterval(e, n);
                        return function() {
                            return clearInterval(a)
                        }
                    }
                }), [n, t])
            }

            function Xa() {
                var e = Object(u.a)(["\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ", ";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n"]);
                return Xa = function() {
                    return e
                }, e
            }

            function $a() {
                var e = Object(u.a)(["\n  display: inline-block;\n"]);
                return $a = function() {
                    return e
                }, e
            }

            function Za() {
                var e = Object(u.a)(["\n  z-index: 9999;\n\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0 4px 8px 0 ", ";\n  color: ", ";\n  border-radius: 8px;\n"]);
                return Za = function() {
                    return e
                }, e
            }
            var ei = l.default.div(Za(), (function(e) {
                    return e.show ? "visible" : "hidden"
                }), (function(e) {
                    return e.show ? 1 : 0
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.theme.colors.tertiary
                }), Object(mt.b)(.9, "#2F80ED"), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                ni = l.default.div($a()),
                ti = l.default.div(Xa(), (function(e) {
                    return e.theme.colors.tertiary
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                }));

            function ri(e) {
                var n, t, i = e.content,
                    c = e.show,
                    o = e.children,
                    s = e.placement,
                    u = void 0 === s ? "auto" : s,
                    l = Object(a.useState)(null),
                    d = Object(y.a)(l, 2),
                    b = d[0],
                    p = d[1],
                    f = Object(a.useState)(null),
                    j = Object(y.a)(f, 2),
                    h = j[0],
                    v = j[1],
                    m = Object(a.useState)(null),
                    O = Object(y.a)(m, 2),
                    x = O[0],
                    g = O[1],
                    C = Object(Qa.a)(b, h, {
                        placement: u,
                        strategy: "fixed",
                        modifiers: [{
                            name: "offset",
                            options: {
                                offset: [8, 8]
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: x
                            }
                        }]
                    }),
                    w = C.styles,
                    k = C.update,
                    T = C.attributes;
                return Ja(Object(a.useCallback)((function() {
                    k && k()
                }), [k]), c ? 100 : null), Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(ni, {
                        ref: p,
                        children: o
                    }), Object(r.jsx)(Ka.a, {
                        children: Object(r.jsxs)(ei, Object(X.a)(Object(X.a)({
                            show: c,
                            ref: v,
                            style: w.popper
                        }, T.popper), {}, {
                            children: [i, Object(r.jsx)(ti, Object(X.a)({
                                className: "arrow-".concat(null !== (n = null === (t = T.popper) || void 0 === t ? void 0 : t["data-popper-placement"]) && void 0 !== n ? n : ""),
                                ref: g,
                                style: w.arrow
                            }, T.arrow))]
                        }))
                    })]
                })
            }

            function ai() {
                var e = Object(u.a)(["\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n"]);
                return ai = function() {
                    return e
                }, e
            }
            var ii = l.default.div(ai());

            function ci(e) {
                var n = e.text,
                    t = Object(wn.a)(e, ["text"]);
                return Object(r.jsx)(ri, Object(X.a)({
                    content: Object(r.jsx)(ii, {
                        children: n
                    })
                }, t))
            }

            function oi(e) {
                var n = e.children,
                    t = Object(wn.a)(e, ["children"]),
                    i = Object(a.useState)(!1),
                    c = Object(y.a)(i, 2),
                    o = c[0],
                    s = c[1],
                    u = Object(a.useCallback)((function() {
                        return s(!0)
                    }), [s]),
                    l = Object(a.useCallback)((function() {
                        return s(!1)
                    }), [s]);
                return Object(r.jsx)(ci, Object(X.a)(Object(X.a)({}, t), {}, {
                    show: o,
                    children: Object(r.jsx)("div", {
                        onMouseEnter: u,
                        onMouseLeave: l,
                        children: n
                    })
                }))
            }

            function si() {
                var e = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  background-color: ", ";\n  color: ", ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]);
                return si = function() {
                    return e
                }, e
            }
            var ui = l.default.div(si(), (function(e) {
                return e.theme.colors.invertedContrast
            }), (function(e) {
                return e.theme.colors.textSubtle
            }));

            function li(e) {
                var n = e.text,
                    t = Object(a.useState)(!1),
                    i = Object(y.a)(t, 2),
                    c = i[0],
                    o = i[1],
                    s = Object(a.useCallback)((function() {
                        return o(!0)
                    }), [o]),
                    u = Object(a.useCallback)((function() {
                        return o(!1)
                    }), [o]);
                return Object(r.jsx)("span", {
                    style: {
                        marginLeft: 4
                    },
                    children: Object(r.jsx)(ci, {
                        text: n,
                        show: c,
                        children: Object(r.jsx)(ui, {
                            onClick: s,
                            onMouseEnter: s,
                            onMouseLeave: u,
                            children: Object(r.jsx)(Fa.a, {
                                size: 16
                            })
                        })
                    })
                })
            }

            function di() {
                var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
                return di = function() {
                    return e
                }, e
            }
            var bi = Object(l.default)(Va)(di(), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }));

            function pi() {
                var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
                return pi = function() {
                    return e
                }, e
            }

            function fi() {
                var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n"]);
                return fi = function() {
                    return e
                }, e
            }
            var ji = function(e) {
                    return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(e, "/logo.png")
                },
                hi = l.default.img(fi(), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                })),
                yi = Object(l.default)(Va)(pi(), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }));

            function vi(e) {
                var n, t, i = e.currency,
                    c = e.size,
                    o = void 0 === c ? "24px" : c,
                    s = e.style,
                    u = za(i instanceof dr ? i.logoURI : void 0),
                    l = Object(a.useMemo)((function() {
                        return i === $.d ? [] : i instanceof $.j ? i instanceof dr ? [].concat(Object(J.a)(u), ["/images/coins/".concat(null !== (n = null === i || void 0 === i ? void 0 : i.address) && void 0 !== n ? n : "token", ".png"), ji(i.address)]) : ["/images/coins/".concat(null !== (e = null === i || void 0 === i ? void 0 : i.address) && void 0 !== e ? e : "token", ".png"), ji(i.address)] : [];
                        var e, n
                    }), [i, u]);
                return i === $.d ? Object(r.jsx)(hi, {
                    src: "/images/coins/BNB.png",
                    size: o,
                    style: s
                }) : (null === i || void 0 === i ? void 0 : i.symbol) ? Object(r.jsx)(bi, {
                    size: o,
                    srcs: l,
                    alt: "".concat(null !== (n = null === i || void 0 === i ? void 0 : i.symbol) && void 0 !== n ? n : "token", " logo"),
                    style: s
                }) : Object(r.jsx)(yi, {
                    size: o,
                    srcs: l,
                    alt: "".concat(null !== (t = null === i || void 0 === i ? void 0 : i.symbol) && void 0 !== t ? t : "token", " logo"),
                    style: s
                })
            }

            function mi() {
                var e = Object(u.a)(["\n  border: 1px solid ", ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ", ";\n    background-color: ", ";\n  }\n\n  background-color: ", ";\n  opacity: ", ";\n"]);
                return mi = function() {
                    return e
                }, e
            }
            var Oi = l.default.div(mi(), (function(e) {
                var n = e.theme;
                return e.disable ? "transparent" : n.colors.tertiary
            }), (function(e) {
                return !e.disable && "pointer"
            }), (function(e) {
                var n = e.theme;
                return !e.disable && n.colors.invertedContrast
            }), (function(e) {
                var n = e.theme;
                return e.disable && n.colors.tertiary
            }), (function(e) {
                return e.disable && "0.4"
            }));

            function xi(e) {
                var n = e.chainId,
                    t = e.onSelect,
                    a = e.selectedCurrency,
                    i = nr();
                return Object(r.jsxs)(De, {
                    gap: "md",
                    children: [Object(r.jsxs)(an, {
                        children: [Object(r.jsx)(s.y, {
                            fontSize: "14px",
                            children: "Common bases"
                        }), Object(r.jsx)(li, {
                            text: i(1204, "These tokens are commonly paired with other tokens.")
                        })]
                    }), Object(r.jsxs)(an, {
                        gap: "4px",
                        children: [Object(r.jsxs)(Oi, {
                            onClick: function() {
                                a && Object($.o)(a, $.d) || t($.d)
                            },
                            disable: a === $.d,
                            children: [Object(r.jsx)(vi, {
                                currency: $.d,
                                style: {
                                    marginRight: 8
                                }
                            }), Object(r.jsx)(s.y, {
                                children: "BNB"
                            })]
                        }), (n ? le[n] : []).map((function(e) {
                            var n = a instanceof $.j && a.address === e.address;
                            return Object(r.jsxs)(Oi, {
                                onClick: function() {
                                    return !n && t(e)
                                },
                                disable: n,
                                children: [Object(r.jsx)(vi, {
                                    currency: e,
                                    style: {
                                        marginRight: 8
                                    }
                                }), Object(r.jsx)(s.y, {
                                    children: e.symbol
                                })]
                            }, e.address)
                        }))]
                    })]
                })
            }
            var gi = t(325);

            function Ci() {
                var e = Object(u.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"]);
                return Ci = function() {
                    return e
                }, e
            }

            function wi() {
                var e = Object(u.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"]);
                return wi = function() {
                    return e
                }, e
            }

            function ki() {
                var e = Object(u.a)(["\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ", ";\n  border-style: solid;\n  border: 1px solid ", ";\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ", ";\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n"]);
                return ki = function() {
                    return e
                }, e
            }

            function Ti() {
                var e = Object(u.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ", ";\n  pointer-events: ", ";\n  :hover {\n    background-color: ", ";\n  }\n  opacity: ", ";\n"]);
                return Ti = function() {
                    return e
                }, e
            }

            function Ii() {
                var e = Object(u.a)(["\n  padding: 20px;\n  padding-bottom: 12px;\n"]);
                return Ii = function() {
                    return e
                }, e
            }

            function Ni() {
                var e = Object(u.a)(["\n  color: ", ";\n  font-size: 14px;\n"]);
                return Ni = function() {
                    return e
                }, e
            }
            var Ei = Object(l.default)(cn)(Ni(), (function(e) {
                    return e.theme.colors.primary
                })),
                Si = Object(l.default)(De)(Ii()),
                Ri = Object(l.default)(tn)(Ti(), (function(e) {
                    return !e.disabled && "pointer"
                }), (function(e) {
                    return e.disabled && "none"
                }), (function(e) {
                    var n = e.theme;
                    return !e.disabled && n.colors.invertedContrast
                }), (function(e) {
                    var n = e.disabled,
                        t = e.selected;
                    return n || t ? .5 : 1
                })),
                Ui = l.default.input(ki(), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    return e.theme.colors.tertiary
                }), (function(e) {
                    return e.theme.colors.textDisabled
                }), (function(e) {
                    return e.theme.colors.primary
                })),
                Ai = l.default.div(wi(), (function(e) {
                    return e.theme.colors.invertedContrast
                })),
                Bi = l.default.div(Ci(), (function(e) {
                    return e.theme.colors.tertiary
                }));

            function Pi() {
                var e = Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);
                return Pi = function() {
                    return e
                }, e
            }

            function Mi() {
                var e = Object(u.a)(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n"]);
                return Mi = function() {
                    return e
                }, e
            }

            function Li() {
                var e = Object(u.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"]);
                return Li = function() {
                    return e
                }, e
            }

            function Di(e) {
                return e instanceof $.j ? e.address : e === $.d ? "ETHER" : ""
            }
            var _i = Object(l.default)(s.y)(Li()),
                Yi = l.default.div(Mi(), (function(e) {
                    return e.theme.colors.tertiary
                }), (function(e) {
                    return e.theme.colors.textSubtle
                }));

            function zi(e) {
                var n = e.balance;
                return Object(r.jsx)(_i, {
                    title: n.toExact(),
                    children: n.toSignificant(4)
                })
            }
            var Fi = l.default.div(Pi());

            function qi(e) {
                var n = e.currency;
                if (!(n instanceof dr)) return Object(r.jsx)("span", {});
                var t = n.tags;
                if (!t || 0 === t.length) return Object(r.jsx)("span", {});
                var a = t[0];
                return Object(r.jsxs)(Fi, {
                    children: [Object(r.jsx)(oi, {
                        text: a.description,
                        children: Object(r.jsx)(Yi, {
                            children: a.name
                        }, a.id)
                    }), t.length > 1 ? Object(r.jsx)(oi, {
                        text: t.slice(1).map((function(e) {
                            var n = e.name,
                                t = e.description;
                            return "".concat(n, ": ").concat(t)
                        })).join("; \n"),
                        children: Object(r.jsx)(Yi, {
                            children: "..."
                        })
                    }) : null]
                })
            }

            function Vi(e) {
                var n = e.currency,
                    t = e.onSelect,
                    i = e.isSelected,
                    c = e.otherSelected,
                    o = e.style,
                    u = we(),
                    l = u.account,
                    d = u.chainId,
                    b = Di(n),
                    p = function(e, n) {
                        var t;
                        return n === $.d || Boolean(n instanceof $.j && (null === (t = e[n.chainId]) || void 0 === t ? void 0 : t[n.address]))
                    }(hr(), n),
                    f = function(e) {
                        return !!na().find((function(n) {
                            return Object($.o)(e, n)
                        }))
                    }(n),
                    j = Ta(null !== l && void 0 !== l ? l : void 0, n),
                    h = function() {
                        var e = Object(x.c)();
                        return Object(a.useCallback)((function(n, t) {
                            e(Vr({
                                chainId: n,
                                address: t
                            }))
                        }), [e])
                    }(),
                    y = function() {
                        var e = Object(x.c)();
                        return Object(a.useCallback)((function(n) {
                            e(qr({
                                serializedToken: Jr(n)
                            }))
                        }), [e])
                    }();
                return Object(r.jsxs)(Ri, {
                    style: o,
                    className: "token-item-".concat(b),
                    onClick: function() {
                        return i ? null : t()
                    },
                    disabled: i,
                    selected: c,
                    children: [Object(r.jsx)(vi, {
                        currency: n,
                        size: "24px"
                    }), Object(r.jsxs)(_e, {
                        children: [Object(r.jsx)(s.y, {
                            title: n.name,
                            children: n.symbol
                        }), Object(r.jsxs)(Ei, {
                            children: [p || !f || n instanceof dr ? null : Object(r.jsxs)(s.y, {
                                children: ["Added by user", Object(r.jsx)(Sn, {
                                    onClick: function(e) {
                                        e.stopPropagation(), d && n instanceof $.j && h(d, n.address)
                                    },
                                    children: "(Remove)"
                                })]
                            }), p || f || n instanceof dr ? null : Object(r.jsxs)(s.y, {
                                children: ["Found by address", Object(r.jsx)(Sn, {
                                    onClick: function(e) {
                                        e.stopPropagation(), n instanceof $.j && y(n)
                                    },
                                    children: "(Add)"
                                })]
                            })]
                        })]
                    }), Object(r.jsx)(qi, {
                        currency: n
                    }), Object(r.jsx)(cn, {
                        style: {
                            justifySelf: "flex-end"
                        },
                        children: j ? Object(r.jsx)(zi, {
                            balance: j
                        }) : l ? Object(r.jsx)(it, {}) : null
                    })]
                })
            }

            function Wi(e) {
                var n = e.height,
                    t = e.currencies,
                    i = e.selectedCurrency,
                    c = e.onCurrencySelect,
                    o = e.otherCurrency,
                    s = e.fixedListRef,
                    u = e.showETH,
                    l = Object(a.useMemo)((function() {
                        return u ? [$.b.ETHER].concat(Object(J.a)(t)) : Object(J.a)(t)
                    }), [t, u]),
                    d = Object(a.useCallback)((function(e) {
                        var n = e.data,
                            t = e.index,
                            a = e.style,
                            s = n[t],
                            u = Boolean(i && Object($.o)(i, s)),
                            l = Boolean(o && Object($.o)(o, s));
                        return Object(r.jsx)(Vi, {
                            style: a,
                            currency: s,
                            isSelected: u,
                            onSelect: function() {
                                return c(s)
                            },
                            otherSelected: l
                        })
                    }), [c, o, i]),
                    b = Object(a.useCallback)((function(e, n) {
                        return Di(n[e])
                    }), []);
                return Object(r.jsx)(gi.a, {
                    height: n,
                    ref: s,
                    width: "100%",
                    itemData: l,
                    itemCount: l.length,
                    itemSize: 56,
                    itemKey: b,
                    children: d
                })
            }

            function Hi(e, n) {
                if (0 === n.length) return e;
                var t = hn(n);
                if (t) return e.filter((function(e) {
                    return e.address === t
                }));
                var r = n.toLowerCase().split(/\s+/).filter((function(e) {
                    return e.length > 0
                }));
                if (0 === r.length) return e;
                var a = function(e) {
                    var n = e.toLowerCase().split(/\s+/).filter((function(e) {
                        return e.length > 0
                    }));
                    return r.every((function(e) {
                        return 0 === e.length || n.some((function(n) {
                            return n.startsWith(e) || n.endsWith(e)
                        }))
                    }))
                };
                return e.filter((function(e) {
                    var n = e.symbol,
                        t = e.name;
                    return n && a(n) || t && a(t)
                }))
            }

            function Gi() {
                var e = Object(u.a)(["\n  padding: 8px;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 8px;\n  user-select: none;\n  & > * {\n    user-select: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"]);
                return Gi = function() {
                    return e
                }, e
            }
            var Qi = Object(l.default)(cn)(Gi(), (function(e) {
                return e.theme.colors.invertedContrast
            }), (function(e) {
                return e.theme.colors.text
            }));

            function Ki(e) {
                var n = e.toggleSortOrder,
                    t = e.ascending;
                return Object(r.jsx)(Qi, {
                    onClick: n,
                    children: Object(r.jsx)(s.y, {
                        fontSize: "14px",
                        children: t ? "\u2191" : "\u2193"
                    })
                })
            }

            function Ji(e) {
                var n = function() {
                        var e = we().account,
                            n = ha(),
                            t = Ca(null !== e && void 0 !== e ? e : void 0, Object(a.useMemo)((function() {
                                return Object.values(null !== n && void 0 !== n ? n : {})
                            }), [n]));
                        return null !== t && void 0 !== t ? t : {}
                    }(),
                    t = Object(a.useMemo)((function() {
                        return function(e) {
                            return function(n, t) {
                                var r, a, i = (r = e[n.address], a = e[t.address], r && a ? r.greaterThan(a) ? -1 : r.equalTo(a) ? 0 : 1 : r && r.greaterThan("0") ? -1 : a && a.greaterThan("0") ? 1 : 0);
                                return 0 !== i ? i : n.symbol && t.symbol ? n.symbol.toLowerCase() < t.symbol.toLowerCase() ? -1 : 1 : n.symbol || t.symbol ? -1 : 0
                            }
                        }(null !== n && void 0 !== n ? n : {})
                    }), [n]);
                return Object(a.useMemo)((function() {
                    return e ? function(e, n) {
                        return -1 * t(e, n)
                    } : t
                }), [e, t])
            }

            function Xi(e) {
                var n = e.selectedCurrency,
                    t = e.onCurrencySelect,
                    i = e.otherSelectedCurrency,
                    c = e.showCommonBases,
                    o = e.onDismiss,
                    u = e.isOpen,
                    d = (e.onChangeList, Object(et.b)().t),
                    b = we().chainId,
                    p = (Object(a.useContext)(l.ThemeContext), Object(a.useRef)()),
                    f = Object(a.useState)(""),
                    j = Object(y.a)(f, 2),
                    h = j[0],
                    v = j[1],
                    m = Object(a.useState)(!1),
                    O = Object(y.a)(m, 2),
                    g = O[0],
                    C = O[1],
                    w = ha(),
                    k = hn(h),
                    T = ma(h),
                    I = Object(a.useMemo)((function() {
                        var e = h.toLowerCase().trim();
                        return "" === e || "b" === e || "bn" === e || "bnb" === e
                    }), [h]),
                    N = Ji(g),
                    E = Object(x.d)((function(e) {
                        return e.user.audioPlay
                    })),
                    S = Object(a.useMemo)((function() {
                        return k ? T ? [T] : [] : Hi(Object.values(w), h)
                    }), [k, T, w, h]),
                    R = Object(a.useMemo)((function() {
                        if (T) return [T];
                        var e = S.sort(N),
                            n = h.toLowerCase().split(/\s+/).filter((function(e) {
                                return e.length > 0
                            }));
                        return n.length > 1 ? e : [].concat(Object(J.a)(T ? [T] : []), Object(J.a)(e.filter((function(e) {
                            var t;
                            return (null === (t = e.symbol) || void 0 === t ? void 0 : t.toLowerCase()) === n[0]
                        }))), Object(J.a)(e.filter((function(e) {
                            var t;
                            return (null === (t = e.symbol) || void 0 === t ? void 0 : t.toLowerCase()) !== n[0]
                        }))))
                    }), [S, h, T, N]),
                    U = Object(a.useCallback)((function(e) {
                        if (t(e), o(), E) {
                            var n = document.getElementById("bgMusic");
                            n && n.play()
                        }
                    }), [o, t, E]);
                Object(a.useEffect)((function() {
                    u && v("")
                }), [u]);
                var A = Object(a.useRef)(),
                    B = Object(a.useCallback)((function(e) {
                        var n, t = e.target.value,
                            r = hn(t);
                        v(r || t), null === (n = p.current) || void 0 === n || n.scrollTo(0)
                    }), []),
                    P = Object(a.useCallback)((function(e) {
                        if ("Enter" === e.key)
                            if ("bnb" === h.toLowerCase().trim()) U($.d);
                            else if (R.length > 0) {
                            var n;
                            (null === (n = R[0].symbol) || void 0 === n ? void 0 : n.toLowerCase()) !== h.trim().toLowerCase() && 1 !== R.length || U(R[0])
                        }
                    }), [R, U, h]),
                    M = (function() {
                        var e, n, t = jr(),
                            r = Object(x.d)((function(e) {
                                return e.lists.byUrl
                            })),
                            a = t ? r[t] : void 0;
                        e = null === a || void 0 === a ? void 0 : a.current, n = null === a || void 0 === a ? void 0 : a.pendingUpdate, null === a || void 0 === a || a.loadingRequestId
                    }(), nr());
                return Object(r.jsxs)(_e, {
                    style: {
                        width: "100%",
                        flex: "1 1"
                    },
                    children: [Object(r.jsxs)(Si, {
                        gap: "14px",
                        children: [Object(r.jsxs)(tn, {
                            children: [Object(r.jsxs)(s.y, {
                                children: [M(82, "Select a token"), Object(r.jsx)(li, {
                                    text: M(128, "Find a token by searching for its name or symbol or by pasting its address below.")
                                })]
                            }), Object(r.jsx)(s.j, {
                                onClick: o
                            })]
                        }), Object(r.jsx)(Ui, {
                            type: "text",
                            id: "token-search-input",
                            placeholder: d("tokenSearchPlaceholder"),
                            value: h,
                            ref: A,
                            onChange: B,
                            onKeyDown: P
                        }), c && Object(r.jsx)(xi, {
                            chainId: b,
                            onSelect: U,
                            selectedCurrency: n
                        }), Object(r.jsxs)(tn, {
                            children: [Object(r.jsx)(s.y, {
                                fontSize: "14px",
                                children: M(126, "Token name")
                            }), Object(r.jsx)(Ki, {
                                ascending: g,
                                toggleSortOrder: function() {
                                    return C((function(e) {
                                        return !e
                                    }))
                                }
                            })]
                        })]
                    }), Object(r.jsx)(Ai, {}), Object(r.jsx)("div", {
                        style: {
                            flex: "1"
                        },
                        children: Object(r.jsx)(Ea.a, {
                            disableWidth: !0,
                            children: function(e) {
                                var t = e.height;
                                return Object(r.jsx)(Wi, {
                                    height: t,
                                    showETH: I,
                                    currencies: R,
                                    onCurrencySelect: U,
                                    otherCurrency: i,
                                    selectedCurrency: n,
                                    fixedListRef: p
                                })
                            }
                        })
                    }), null]
                })
            }
            var $i = t(572),
                Zi = t(315),
                ec = t(316),
                nc = t.n(ec),
                tc = "pancakeswap",
                rc = [tc],
                ac = t(188),
                ic = new nc.a({
                    allErrors: !0
                }).compile(Zi);

            function cc(e, n) {
                return oc.apply(this, arguments)
            }

            function oc() {
                return (oc = Object(h.a)(j.a.mark((function e(n, t) {
                    var r, a, i, c, o, s, u, l, d, b, p, f, h;
                    return j.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n !== tc) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", ac);
                            case 2:
                                if (!(r = La(n))) {
                                    e.next = 25;
                                    break
                                }
                                return e.prev = 4, e.next = 7, t(r.ensName);
                            case 7:
                                c = e.sent, e.next = 14;
                                break;
                            case 10:
                                throw e.prev = 10, e.t0 = e.catch(4), console.error("Failed to resolve ENS name: ".concat(r.ensName), e.t0), new Error("Failed to resolve ENS name: ".concat(r.ensName));
                            case 14:
                                e.prev = 14, o = Pa(c), e.next = 22;
                                break;
                            case 18:
                                throw e.prev = 18, e.t1 = e.catch(14), console.error("Failed to translate contenthash to URI", c), new Error("Failed to translate contenthash to URI: ".concat(c));
                            case 22:
                                a = Da("".concat(o).concat(null !== (i = r.ensPath) && void 0 !== i ? i : "")), e.next = 26;
                                break;
                            case 25:
                                a = Da(n);
                            case 26:
                                s = 0;
                            case 27:
                                if (!(s < a.length)) {
                                    e.next = 57;
                                    break
                                }
                                return u = a[s], l = s === a.length - 1, d = void 0, e.prev = 31, e.next = 34, fetch(u);
                            case 34:
                                d = e.sent, e.next = 43;
                                break;
                            case 37:
                                if (e.prev = 37, e.t2 = e.catch(31), console.error("Failed to fetch list", n, e.t2), !l) {
                                    e.next = 42;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(n));
                            case 42:
                                return e.abrupt("continue", 54);
                            case 43:
                                if (d.ok) {
                                    e.next = 47;
                                    break
                                }
                                if (!l) {
                                    e.next = 46;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(n));
                            case 46:
                                return e.abrupt("continue", 54);
                            case 47:
                                return e.next = 49, d.json();
                            case 49:
                                if (b = e.sent, ic(b)) {
                                    e.next = 53;
                                    break
                                }
                                throw h = null !== (p = null === (f = ic.errors) || void 0 === f ? void 0 : f.reduce((function(e, n) {
                                    var t, r = "".concat(n.dataPath, " ").concat(null !== (t = n.message) && void 0 !== t ? t : "");
                                    return e.length > 0 ? "".concat(e, "; ").concat(r) : "".concat(r)
                                }), "")) && void 0 !== p ? p : "unknown error", new Error("Token list failed validation: ".concat(h));
                            case 53:
                                return e.abrupt("return", b);
                            case 54:
                                s++, e.next = 27;
                                break;
                            case 57:
                                throw new Error("Unrecognized list URL protocol.");
                            case 58:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [4, 10],
                        [14, 18],
                        [31, 37]
                    ])
                })))).apply(this, arguments)
            }
            var sc = [{
                    constant: !0,
                    inputs: [{
                        name: "node",
                        type: "bytes32"
                    }],
                    name: "resolver",
                    outputs: [{
                        name: "resolverAddress",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }],
                uc = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                lc = [{
                    constant: !0,
                    inputs: [{
                        internalType: "bytes32",
                        name: "node",
                        type: "bytes32"
                    }],
                    name: "contenthash",
                    outputs: [{
                        internalType: "bytes",
                        name: "",
                        type: "bytes"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }];

            function dc(e, n) {
                return new dn.a(e, lc, n)
            }

            function bc(e, n) {
                return pc.apply(this, arguments)
            }

            function pc() {
                return (pc = Object(h.a)(j.a.mark((function e(n, t) {
                    var r, a, i;
                    return j.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = new dn.a(uc, sc, t), a = Object(_a.namehash)(n), e.next = 4, r.resolver(a);
                            case 4:
                                return i = e.sent, e.abrupt("return", dc(i, t).contenthash(a));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function fc() {
                var e = we(),
                    n = e.chainId,
                    t = e.library,
                    r = Object(x.c)(),
                    i = Object(a.useCallback)((function(e) {
                        if (!t || n !== $.a.MAINNET) {
                            if (F === $.a.MAINNET) {
                                var r = function() {
                                    var e;
                                    return q = null !== (e = q) && void 0 !== e ? e : new k.a(V.provider)
                                }();
                                if (r) return bc(e, r)
                            }
                            throw new Error("Could not construct mainnet ENS resolver")
                        }
                        return bc(e, t)
                    }), [n, t]);
                return Object(a.useCallback)(function() {
                    var e = Object(h.a)(j.a.mark((function e(n) {
                        var t;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(ke.f)(), r(qe.pending({
                                        requestId: t,
                                        url: n
                                    })), e.abrupt("return", cc(n, i).then((function(e) {
                                        return r(qe.fulfilled({
                                            url: n,
                                            tokenList: e,
                                            requestId: t
                                        })), e
                                    })).catch((function(e) {
                                        throw console.error("Failed to get list at url ".concat(n), e), r(qe.rejected({
                                            url: n,
                                            requestId: t,
                                            errorMessage: e.message
                                        })), e
                                    })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(), [r, i])
            }

            function jc(e, n) {
                var t = Object(a.useRef)(n);
                Object(a.useEffect)((function() {
                    t.current = n
                }), [n]), Object(a.useEffect)((function() {
                    var n = function(n) {
                        var r, a;
                        null !== (r = null === (a = e.current) || void 0 === a ? void 0 : a.contains(n.target)) && void 0 !== r && r || t.current && t.current()
                    };
                    return document.addEventListener("mousedown", n),
                        function() {
                            document.removeEventListener("mousedown", n)
                        }
                }), [e])
            }

            function hc() {
                var e = Object(u.a)(["\n  flex: 1;\n  overflow: auto;\n"]);
                return hc = function() {
                    return e
                }, e
            }

            function yc() {
                var e = Object(u.a)(["\n  max-width: 160px;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);
                return yc = function() {
                    return e
                }, e
            }

            function vc() {
                var e = Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n"]);
                return vc = function() {
                    return e
                }, e
            }

            function mc() {
                var e = Object(u.a)(["\n  z-index: 100;\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ", ";\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n"]);
                return mc = function() {
                    return e
                }, e
            }

            function Oc() {
                var e = Object(u.a)(["\n  padding: 0;\n  font-size: 1rem;\n  opacity: ", ";\n"]);
                return Oc = function() {
                    return e
                }, e
            }
            var xc = Object(l.default)(Sn)(Oc(), (function(e) {
                    return e.disabled ? "0.4" : "1"
                })),
                gc = l.default.div(mc(), (function(e) {
                    return e.show ? "visible" : "hidden"
                }), (function(e) {
                    return e.show ? 1 : 0
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.theme.colors.tertiary
                }), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                Cc = l.default.div(vc()),
                wc = l.default.div(yc());

            function kc(e) {
                var n = e.listUrl,
                    t = Object(a.useMemo)((function() {
                        var e;
                        return null === (e = La(n)) || void 0 === e ? void 0 : e.ensName
                    }), [n]),
                    i = Object(a.useMemo)((function() {
                        if (!t) {
                            var e = n.toLowerCase();
                            if (e.startsWith("ipfs://") || e.startsWith("ipns://")) return n;
                            try {
                                return new URL(n).host
                            } catch (r) {
                                return
                            }
                        }
                    }), [n, t]);
                return Object(r.jsx)(r.Fragment, {
                    children: null !== t && void 0 !== t ? t : i
                })
            }

            function Tc(e) {
                return "list-row-".concat(e.replace(/\./g, "-"))
            }
            var Ic = Object(a.memo)((function(e) {
                    var n = e.listUrl,
                        t = e.onBack,
                        i = Object(x.d)((function(e) {
                            return e.lists.byUrl
                        })),
                        c = jr(),
                        o = Object(x.c)(),
                        u = i[n],
                        l = u.current,
                        d = u.pendingUpdate,
                        b = n === c,
                        p = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                n = Object(a.useState)(e),
                                t = Object(y.a)(n, 2),
                                r = t[0],
                                i = t[1],
                                c = Object(a.useCallback)((function() {
                                    return i((function(e) {
                                        return !e
                                    }))
                                }), []);
                            return [r, c]
                        }(!1),
                        f = Object(y.a)(p, 2),
                        j = f[0],
                        h = f[1],
                        v = Object(a.useRef)(),
                        m = Object(a.useState)(),
                        O = Object(y.a)(m, 2),
                        g = O[0],
                        C = O[1],
                        w = Object(a.useState)(),
                        k = Object(y.a)(w, 2),
                        T = k[0],
                        I = k[1],
                        N = Object(Qa.a)(g, T, {
                            placement: "auto",
                            strategy: "fixed",
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: [8, 8]
                                }
                            }]
                        }),
                        E = N.styles,
                        S = N.attributes;
                    jc(v, j ? h : void 0);
                    var R = Object(a.useCallback)((function() {
                            b || (o(Ge(n)), t())
                        }), [o, b, n, t]),
                        U = Object(a.useCallback)((function() {
                            d && o(Ve(n))
                        }), [o, n, d]),
                        A = Object(a.useCallback)((function() {
                            "REMOVE" === window.prompt("Please confirm you would like to remove this list by typing REMOVE") && o(He(n))
                        }), [o, n]),
                        B = nr();
                    return l ? Object(r.jsxs)(on, {
                        align: "center",
                        padding: "16px",
                        id: Tc(n),
                        children: [l.logoURI ? Object(r.jsx)(Ga, {
                            style: {
                                marginRight: "1rem"
                            },
                            logoURI: l.logoURI,
                            alt: "".concat(l.name, " list logo")
                        }) : Object(r.jsx)("div", {
                            style: {
                                width: "24px",
                                height: "24px",
                                marginRight: "1rem"
                            }
                        }), Object(r.jsxs)(_e, {
                            style: {
                                flex: "1"
                            },
                            children: [Object(r.jsx)(on, {
                                children: Object(r.jsx)(s.y, {
                                    bold: b,
                                    fontSize: "16px",
                                    style: {
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    },
                                    children: l.name
                                })
                            }), Object(r.jsx)(on, {
                                style: {
                                    marginTop: "4px"
                                },
                                children: Object(r.jsx)(wc, {
                                    title: n,
                                    children: Object(r.jsx)(kc, {
                                        listUrl: n
                                    })
                                })
                            })]
                        }), Object(r.jsxs)(Cc, {
                            ref: v,
                            children: [Object(r.jsx)("div", {
                                style: {
                                    display: "inline-block"
                                },
                                ref: C,
                                children: Object(r.jsx)(s.c, {
                                    style: {
                                        width: "32px",
                                        marginRight: "8px"
                                    },
                                    onClick: h,
                                    variant: "secondary",
                                    children: Object(r.jsx)(s.i, {})
                                })
                            }), j && Object(r.jsxs)(gc, Object(X.a)(Object(X.a)({
                                show: !0,
                                ref: I,
                                style: E.popper
                            }, S.popper), {}, {
                                children: [Object(r.jsx)("div", {
                                    children: l && Qe(l.version)
                                }), Object(r.jsx)(Bi, {}), Object(r.jsx)(An, {
                                    href: "https://tokenlists.org/token-list?url=".concat(n),
                                    children: B(1206, "View list")
                                }), Object(r.jsx)(xc, {
                                    onClick: A,
                                    disabled: 1 === Object.keys(i).length,
                                    children: "Remove list"
                                }), d && Object(r.jsx)(xc, {
                                    onClick: U,
                                    children: "Update list"
                                })]
                            }))]
                        }), b ? Object(r.jsx)(s.c, {
                            disabled: !0,
                            style: {
                                width: "5rem",
                                minWidth: "5rem"
                            },
                            children: "Selected"
                        }) : Object(r.jsx)(r.Fragment, {
                            children: Object(r.jsx)(s.c, {
                                className: "select-button",
                                style: {
                                    width: "5rem",
                                    minWidth: "4.5rem"
                                },
                                onClick: R,
                                children: "Select"
                            })
                        })]
                    }, n) : null
                })),
                Nc = l.default.div(hc());

            function Ec(e) {
                var n, t = e.onDismiss,
                    i = e.onBack,
                    c = Object(a.useState)(""),
                    o = Object(y.a)(c, 2),
                    u = o[0],
                    l = o[1],
                    d = Object(x.c)(),
                    b = Object(x.d)((function(e) {
                        return e.lists.byUrl
                    })),
                    p = Boolean(null === (n = b[u]) || void 0 === n ? void 0 : n.loadingRequestId),
                    f = Object(a.useState)(null),
                    j = Object(y.a)(f, 2),
                    h = j[0],
                    v = j[1],
                    m = Object(a.useCallback)((function(e) {
                        l(e.target.value), v(null)
                    }), []),
                    O = fc(),
                    g = Object(a.useCallback)((function() {
                        p || (v(null), O(u).then((function() {
                            l("")
                        })).catch((function(e) {
                            v(e.message), d(He(u))
                        })))
                    }), [p, d, O, u]),
                    C = Object(a.useMemo)((function() {
                        return Da(u).length > 0 || Boolean(La(u))
                    }), [u]),
                    w = Object(a.useCallback)((function(e) {
                        C && "Enter" === e.key && g()
                    }), [g, C]),
                    k = Object(a.useMemo)((function() {
                        return Object.keys(b).filter((function(e) {
                            return Boolean(b[e].current)
                        })).sort((function(e, n) {
                            var t = b[e].current,
                                r = b[n].current;
                            return t && r ? t.name.toLowerCase() < r.name.toLowerCase() ? -1 : t.name.toLowerCase() === r.name.toLowerCase() ? 0 : 1 : t ? -1 : r ? 1 : 0
                        }))
                    }), [b]),
                    T = nr();
                return Object(r.jsxs)(_e, {
                    style: {
                        width: "100%",
                        flex: "1 1"
                    },
                    children: [Object(r.jsx)(Si, {
                        children: Object(r.jsxs)(tn, {
                            children: [Object(r.jsx)("div", {
                                children: Object(r.jsx)($i.a, {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: i
                                })
                            }), Object(r.jsx)(s.y, {
                                fontSize: "20px",
                                children: T(1208, "Manage Lists")
                            }), Object(r.jsx)(s.j, {
                                onClick: t
                            })]
                        })
                    }), Object(r.jsx)(Ai, {}), Object(r.jsxs)(Si, {
                        gap: "14px",
                        children: [Object(r.jsxs)(s.y, {
                            bold: !0,
                            children: ["Add a list", " ", Object(r.jsx)(li, {
                                text: T(999, "Token lists are an open specification for lists of BEP20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious BEP20 tokens.")
                            })]
                        }), Object(r.jsxs)(on, {
                            children: [Object(r.jsx)(Ui, {
                                type: "text",
                                id: "list-add-input",
                                placeholder: "https:// or ipfs:// or ENS name",
                                value: u,
                                onChange: m,
                                onKeyDown: w,
                                style: {
                                    height: "2.75rem",
                                    borderRadius: 12,
                                    padding: "12px"
                                }
                            }), Object(r.jsx)(s.c, {
                                onClick: g,
                                style: {
                                    maxWidth: "4em",
                                    marginLeft: "1em"
                                },
                                disabled: !C,
                                children: "Add"
                            })]
                        }), h ? Object(r.jsx)(s.y, {
                            color: "failure",
                            title: h,
                            style: {
                                textOverflow: "ellipsis",
                                overflow: "hidden"
                            },
                            children: h
                        }) : null]
                    }), Object(r.jsx)(Ai, {}), Object(r.jsx)(Nc, {
                        children: k.map((function(e) {
                            return Object(r.jsx)(Ic, {
                                listUrl: e,
                                onBack: i
                            }, e)
                        }))
                    }), Object(r.jsx)(Ai, {}), Object(r.jsx)("div", {
                        style: {
                            padding: "16px",
                            textAlign: "center"
                        },
                        children: Object(r.jsx)(An, {
                            href: "https://tokenlists.org",
                            children: "Browse lists"
                        })
                    })]
                })
            }

            function Sc(e) {
                var n = e.isOpen,
                    t = e.onDismiss,
                    i = e.onCurrencySelect,
                    c = e.selectedCurrency,
                    o = e.otherSelectedCurrency,
                    s = Object(a.useState)(!1),
                    u = Object(y.a)(s, 2),
                    l = u[0],
                    d = u[1],
                    b = Ia(n);
                Object(a.useEffect)((function() {
                    n && !b && d(!1)
                }), [n, b]);
                var p = Object(a.useCallback)((function(e) {
                        i(e), t()
                    }), [t, i]),
                    f = Object(a.useCallback)((function() {
                        d(!0)
                    }), []),
                    j = Object(a.useCallback)((function() {
                        d(!1)
                    }), []),
                    h = !jr();
                return Object(r.jsx)(Nt, {
                    isOpen: n,
                    onDismiss: t,
                    maxHeight: 90,
                    minHeight: l ? 40 : h ? 0 : 80,
                    children: l ? Object(r.jsx)(Ec, {
                        onDismiss: t,
                        onBack: j
                    }) : Object(r.jsx)(Xi, {
                        isOpen: n,
                        onDismiss: t,
                        onCurrencySelect: p,
                        onChangeList: f,
                        selectedCurrency: c,
                        otherSelectedCurrency: o,
                        showCommonBases: !1
                    })
                })
            }

            function Rc() {
                var e = Object(u.a)(["\n  position: absolute;\n  left: ", ";\n"]);
                return Rc = function() {
                    return e
                }, e
            }

            function Uc() {
                var e = Object(u.a)(["\n  z-index: 2;\n"]);
                return Uc = function() {
                    return e
                }, e
            }

            function Ac() {
                var e = Object(u.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ", ";\n"]);
                return Ac = function() {
                    return e
                }, e
            }
            var Bc = l.default.div(Ac(), (function(e) {
                    var n = e.sizeraw;
                    return e.margin && "".concat((n / 3 + 8).toString(), "px")
                })),
                Pc = Object(l.default)(vi)(Uc()),
                Mc = Object(l.default)(vi)(Rc(), (function(e) {
                    var n = e.sizeraw;
                    return "".concat((n / 2).toString(), "px")
                }));

            function Lc(e) {
                var n = e.currency0,
                    t = e.currency1,
                    a = e.size,
                    i = void 0 === a ? 16 : a,
                    c = e.margin,
                    o = void 0 !== c && c;
                return Object(r.jsxs)(Bc, {
                    sizeraw: i,
                    margin: o,
                    children: [n && Object(r.jsx)(Pc, {
                        currency: n,
                        size: "".concat(i.toString(), "px")
                    }), t && Object(r.jsx)(Mc, {
                        currency: t,
                        size: "".concat(i.toString(), "px"),
                        sizeraw: i
                    })]
                })
            }

            function Dc() {
                var e = Object(u.a)(["\n  color: ", ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
                return Dc = function() {
                    return e
                }, e
            }
            var _c = l.default.input(Dc(), (function(e) {
                    var n = e.error,
                        t = e.theme;
                    return n ? t.colors.failure : t.colors.text
                }), (function(e) {
                    var n = e.align;
                    return n && n
                }), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                Yc = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
                zc = i.a.memo((function(e) {
                    var n = e.value,
                        t = e.onUserInput,
                        a = e.placeholder,
                        i = Object(wn.a)(e, ["value", "onUserInput", "placeholder"]);
                    return Object(r.jsx)(_c, Object(X.a)(Object(X.a)({}, i), {}, {
                        value: n,
                        onChange: function(e) {
                            var n;
                            ("" === (n = e.target.value.replace(/,/g, ".")) || Yc.test(n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && t(n)
                        },
                        inputMode: "decimal",
                        title: "Token Amount",
                        autoComplete: "off",
                        autoCorrect: "off",
                        type: "text",
                        pattern: "^[0-9]*[.,]?[0-9]*$",
                        placeholder: a || "0.0",
                        minLength: 1,
                        maxLength: 79,
                        spellCheck: "false"
                    }))
                }));

            function Fc() {
                var e = Object(u.a)(["\n  border-radius: 16px;\n  background-color: ", ";\n  box-shadow: ", ";\n"]);
                return Fc = function() {
                    return e
                }, e
            }

            function qc() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: ", ";\n  background-color: ", ";\n  z-index: 1;\n"]);
                return qc = function() {
                    return e
                }, e
            }

            function Vc() {
                var e = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);
                return Vc = function() {
                    return e
                }, e
            }

            function Wc() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ", ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"]);
                return Wc = function() {
                    return e
                }, e
            }

            function Hc() {
                var e = Object(u.a)(["\n  align-items: center;\n  height: 34px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  color: ", ";\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n  :focus,\n  :hover {\n    background-color: ", ";\n  }\n"]);
                return Hc = function() {
                    return e
                }, e
            }

            function Gc() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ", ";\n"]);
                return Gc = function() {
                    return e
                }, e
            }
            var Qc = l.default.div(Gc(), (function(e) {
                    return e.selected ? "0.75rem 0.5rem 0.75rem 1rem" : "0.75rem 0.75rem 0.75rem 1rem"
                })),
                Kc = l.default.button(Hc(), (function(e) {
                    var n = e.selected,
                        t = e.theme;
                    return n ? t.colors.text : "#FFFFFF"
                }), (function(e) {
                    var n = e.theme;
                    return Object(mt.a)(.05, n.colors.input)
                })),
                Jc = l.default.div(Wc(), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    var n = e.theme;
                    return Object(mt.a)(.2, n.colors.textSubtle)
                })),
                Xc = l.default.span(Vc()),
                $c = l.default.div(qc(), (function(e) {
                    return e.hideInput ? "8px" : "20px"
                }), (function(e) {
                    return e.theme.colors.background
                })),
                Zc = l.default.div(Fc(), (function(e) {
                    return e.theme.colors.input
                }), (function(e) {
                    return e.theme.shadows.inset
                }));

            function eo(e) {
                var n = e.value,
                    t = e.onUserInput,
                    i = e.onMax,
                    c = e.showMaxButton,
                    o = e.label,
                    u = e.onCurrencySelect,
                    l = e.currency,
                    d = e.disableCurrencySelect,
                    b = void 0 !== d && d,
                    p = e.hideBalance,
                    f = void 0 !== p && p,
                    j = e.pair,
                    h = void 0 === j ? null : j,
                    v = e.hideInput,
                    m = void 0 !== v && v,
                    O = e.otherCurrency,
                    x = e.id,
                    g = e.showCommonBases,
                    C = Object(a.useState)(!1),
                    w = Object(y.a)(C, 2),
                    k = w[0],
                    T = w[1],
                    I = we().account,
                    N = Ta(null !== I && void 0 !== I ? I : void 0, null !== l && void 0 !== l ? l : void 0),
                    E = nr(),
                    S = o || E(132, "Input"),
                    R = Object(a.useCallback)((function() {
                        T(!1)
                    }), [T]);
                return Object(r.jsxs)($c, {
                    id: x,
                    children: [Object(r.jsxs)(Zc, {
                        hideInput: m,
                        children: [!m && Object(r.jsx)(Jc, {
                            children: Object(r.jsxs)(tn, {
                                children: [Object(r.jsx)(s.y, {
                                    fontSize: "14px",
                                    children: S
                                }), I && Object(r.jsx)(s.y, {
                                    onClick: i,
                                    fontSize: "14px",
                                    style: {
                                        display: "inline",
                                        cursor: "pointer"
                                    },
                                    children: !f && l && N ? "Balance: ".concat(null === N || void 0 === N ? void 0 : N.toSignificant(6)) : " -"
                                })]
                            })
                        }), Object(r.jsxs)(Qc, {
                            style: m ? {
                                padding: "0",
                                borderRadius: "8px"
                            } : {},
                            selected: b,
                            children: [!m && Object(r.jsxs)(r.Fragment, {
                                children: [Object(r.jsx)(zc, {
                                    className: "token-amount-input",
                                    value: n,
                                    onUserInput: function(e) {
                                        t(e)
                                    }
                                }), I && l && c && "To" !== o && Object(r.jsx)(s.c, {
                                    onClick: i,
                                    scale: "sm",
                                    variant: "text",
                                    children: "MAX"
                                })]
                            }), Object(r.jsx)(Kc, {
                                selected: !!l,
                                className: "open-currency-select-button",
                                onClick: function() {
                                    b || T(!0)
                                },
                                children: Object(r.jsxs)(Xc, {
                                    children: [h ? Object(r.jsx)(Lc, {
                                        currency0: h.token0,
                                        currency1: h.token1,
                                        size: 16,
                                        margin: !0
                                    }) : l ? Object(r.jsx)(vi, {
                                        currency: l,
                                        size: "24px",
                                        style: {
                                            marginRight: "8px"
                                        }
                                    }) : null, h ? Object(r.jsxs)(s.y, {
                                        id: "pair",
                                        children: [null === h || void 0 === h ? void 0 : h.token0.symbol, ":", null === h || void 0 === h ? void 0 : h.token1.symbol]
                                    }) : Object(r.jsx)(s.y, {
                                        id: "pair",
                                        children: (l && l.symbol && l.symbol.length > 20 ? "".concat(l.symbol.slice(0, 4), "...").concat(l.symbol.slice(l.symbol.length - 5, l.symbol.length)) : null === l || void 0 === l ? void 0 : l.symbol) || E(1196, "Select a currency")
                                    }), !b && Object(r.jsx)(s.i, {})]
                                })
                            })]
                        })]
                    }), !b && u && Object(r.jsx)(Sc, {
                        isOpen: k,
                        onDismiss: R,
                        onCurrencySelect: u,
                        selectedCurrency: l,
                        otherSelectedCurrency: O,
                        showCommonBases: g
                    })]
                })
            }

            function no() {
                var e = Object(u.a)(["\n  color: ", ";\n"]);
                return no = function() {
                    return e
                }, e
            }

            function to() {
                var e = Object(u.a)(["\n  font-weight: 500;\n  font-size: 20px;\n"]);
                return to = function() {
                    return e
                }, e
            }

            function ro() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n"]);
                return ro = function() {
                    return e
                }, e
            }
            var ao = l.default.div(ro()),
                io = l.default.div(to()),
                co = Object(l.default)($i.a)(no(), (function(e) {
                    return e.theme.colors.text
                }));

            function oo() {
                var e = nr();
                return Object(r.jsx)(ao, {
                    children: Object(r.jsxs)(tn, {
                        style: {
                            padding: "1rem"
                        },
                        children: [Object(r.jsx)(v.b, {
                            to: "/pool",
                            children: Object(r.jsx)(co, {})
                        }), Object(r.jsx)(io, {
                            children: "Import Pool"
                        }), Object(r.jsx)(li, {
                            text: e(256, "Use this tool to find pairs that do not automatically appear in the interface.")
                        })]
                    })
                })
            }

            function so(e) {
                var n = e.adding,
                    t = nr();
                return Object(r.jsx)(ao, {
                    children: Object(r.jsxs)(tn, {
                        style: {
                            padding: "1rem"
                        },
                        children: [Object(r.jsx)(v.b, {
                            to: "/pool",
                            children: Object(r.jsx)(co, {})
                        }), Object(r.jsxs)(io, {
                            children: [n ? t(258, "Add") : t(260, "Remove"), " Liquidity"]
                        }), Object(r.jsx)(li, {
                            text: n ? t(264, "When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.") : t(266, "Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.")
                        })]
                    })
                })
            }
            var uo = t(573),
                lo = t(574);

            function bo(e) {
                var n, t, r = null === (n = Pr(ba(null === e || void 0 === e ? void 0 : e.address, !1), "totalSupply")) || void 0 === n || null === (t = n.result) || void 0 === t ? void 0 : t[0];
                return e && r ? new $.k(e, r.toString()) : void 0
            }

            function po(e) {
                if (e === $.d) return "BNB";
                if (e instanceof $.j) return e.address;
                throw new Error("invalid currency")
            }

            function fo(e, n) {
                return n && e === $.d ? $.n[n] : e instanceof $.j ? e : void 0
            }

            function jo(e, n) {
                var t = e && n ? fo(e.currency, n) : void 0;
                return t && e ? new $.k(t, e.raw) : void 0
            }

            function ho(e) {
                return e.equals($.n[e.chainId]) ? $.d : e
            }

            function yo() {
                var e = Object(u.a)(["\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"]);
                return yo = function() {
                    return e
                }, e
            }

            function vo() {
                var e = Object(u.a)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"]);
                return vo = function() {
                    return e
                }, e
            }

            function mo() {
                var e = Object(u.a)(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"]);
                return mo = function() {
                    return e
                }, e
            }

            function Oo() {
                var e = Object(u.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]);
                return Oo = function() {
                    return e
                }, e
            }

            function xo() {
                var e = Object(u.a)(["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"]);
                return xo = function() {
                    return e
                }, e
            }

            function go() {
                var e = Object(u.a)(["\n  color: ", ";\n"]);
                return go = function() {
                    return e
                }, e
            }

            function Co() {
                var e = Object(u.a)(["\n  margin-top: 1rem;\n"]);
                return Co = function() {
                    return e
                }, e
            }

            function wo() {
                var e = Object(u.a)(["\n  height: 1px;\n  width: 100%;\n  background-color: ", ";\n"]);
                return wo = function() {
                    return e
                }, e
            }

            function ko() {
                var e = Object(u.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]);
                return ko = function() {
                    return e
                }, e
            }

            function To() {
                var e = Object(u.a)(["\n  padding: 2px;\n\n  ", "\n"]);
                return To = function() {
                    return e
                }, e
            }

            function Io() {
                var e = Object(u.a)(["\n  position: relative;\n"]);
                return Io = function() {
                    return e
                }, e
            }
            var No = l.default.div(Io()),
                Eo = l.default.div(To(), (function(e) {
                    return e.clickable ? Object(l.css)(ko()) : null
                })),
                So = l.default.div(wo(), (function(e) {
                    return e.theme.colors.tertiary
                })),
                Ro = l.default.div(Co()),
                Uo = Object(l.default)(s.y)(go(), (function(e) {
                    var n = e.theme,
                        t = e.severity;
                    return 3 === t || 4 === t ? n.colors.failure : 2 === t ? n.colors.binance : 1 === t ? n.colors.text : n.colors.success
                })),
                Ao = l.default.button(xo(), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.theme.colors.textSubtle
                }), (function(e) {
                    return e.theme.colors.tertiary
                }), (function(e) {
                    return e.theme.colors.tertiary
                })),
                Bo = l.default.span(Oo()),
                Po = l.default.div(mo(), (function(e) {
                    var n = e.theme;
                    return Object(mt.b)(.9, n.colors.failure)
                }), (function(e) {
                    return e.theme.colors.failure
                })),
                Mo = l.default.div(vo(), (function(e) {
                    var n = e.theme;
                    return Object(mt.b)(.9, n.colors.failure)
                }));

            function Lo(e) {
                var n = e.error;
                return Object(r.jsxs)(Po, {
                    children: [Object(r.jsx)(Mo, {
                        children: Object(r.jsx)(Gt.a, {
                            size: 24
                        })
                    }), Object(r.jsx)("p", {
                        children: n
                    })]
                })
            }
            var Do = Object(l.default)(De)(yo(), (function(e) {
                var n = e.theme;
                return Object(mt.b)(.9, n.colors.primary)
            }), (function(e) {
                return e.theme.colors.primary
            }));

            function _o() {
                var e = Object(u.a)(["\n  border: 1px solid ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n"]);
                return _o = function() {
                    return e
                }, e
            }

            function Yo() {
                var e = Object(u.a)(["\n  height: 24px;\n"]);
                return Yo = function() {
                    return e
                }, e
            }
            var zo = Object(l.default)(tn)(Yo()),
                Fo = Object(l.default)(jt)(_o(), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    var n = e.theme;
                    return Object(mt.a)(.06, n.colors.invertedContrast)
                }));

            function qo(e) {
                var n = e.pair,
                    t = e.showUnwrapped,
                    i = void 0 !== t && t,
                    c = we().account,
                    o = i ? n.token0 : ho(n.token0),
                    u = i ? n.token1 : ho(n.token1),
                    l = Object(a.useState)(!1),
                    d = Object(y.a)(l, 2),
                    b = d[0],
                    p = d[1],
                    f = wa(null !== c && void 0 !== c ? c : void 0, n.liquidityToken),
                    j = bo(n.liquidityToken),
                    h = n && j && f && $.e.greaterThanOrEqual(j.raw, f.raw) ? [n.getLiquidityValue(n.token0, j, f, !1), n.getLiquidityValue(n.token1, j, f, !1)] : [void 0, void 0],
                    v = Object(y.a)(h, 2),
                    m = v[0],
                    O = v[1];
                return Object(r.jsx)(r.Fragment, {
                    children: f && Object(r.jsx)(s.f, {
                        children: Object(r.jsx)(s.g, {
                            children: Object(r.jsxs)(De, {
                                gap: "12px",
                                children: [Object(r.jsx)(zo, {
                                    children: Object(r.jsx)(cn, {
                                        children: Object(r.jsx)(s.y, {
                                            style: {
                                                textTransform: "uppercase",
                                                fontWeight: 600
                                            },
                                            fontSize: "14px",
                                            color: "textSubtle",
                                            children: "LP Tokens in your Wallet"
                                        })
                                    })
                                }), Object(r.jsxs)(zo, {
                                    onClick: function() {
                                        return p(!b)
                                    },
                                    children: [Object(r.jsxs)(cn, {
                                        children: [Object(r.jsx)(Lc, {
                                            currency0: o,
                                            currency1: u,
                                            margin: !0,
                                            size: 20
                                        }), Object(r.jsxs)(s.y, {
                                            fontSize: "14px",
                                            children: [o.symbol, "/", u.symbol]
                                        })]
                                    }), Object(r.jsx)(cn, {
                                        children: Object(r.jsx)(s.y, {
                                            fontSize: "14px",
                                            children: f ? f.toSignificant(4) : "-"
                                        })
                                    })]
                                }), Object(r.jsxs)(De, {
                                    gap: "4px",
                                    children: [Object(r.jsxs)(zo, {
                                        children: [Object(r.jsxs)(s.y, {
                                            fontSize: "14px",
                                            children: [o.symbol, ":"]
                                        }), m ? Object(r.jsx)(cn, {
                                            children: Object(r.jsx)(s.y, {
                                                ml: "6px",
                                                fontSize: "14px",
                                                children: null === m || void 0 === m ? void 0 : m.toSignificant(6)
                                            })
                                        }) : "-"]
                                    }), Object(r.jsxs)(zo, {
                                        children: [Object(r.jsxs)(s.y, {
                                            fontSize: "14px",
                                            children: [u.symbol, ":"]
                                        }), O ? Object(r.jsx)(cn, {
                                            children: Object(r.jsx)(s.y, {
                                                ml: "6px",
                                                fontSize: "14px",
                                                children: null === O || void 0 === O ? void 0 : O.toSignificant(6)
                                            })
                                        }) : "-"]
                                    })]
                                })]
                            })
                        })
                    })
                })
            }

            function Vo(e) {
                var n = e.pair,
                    t = we().account,
                    i = ho(n.token0),
                    c = ho(n.token1),
                    o = Object(a.useState)(!1),
                    u = Object(y.a)(o, 2),
                    l = u[0],
                    d = u[1],
                    b = wa(null !== t && void 0 !== t ? t : void 0, n.liquidityToken),
                    p = bo(n.liquidityToken),
                    f = b && p && $.e.greaterThanOrEqual(p.raw, b.raw) ? new $.g(b.raw, p.raw) : void 0,
                    j = n && p && b && $.e.greaterThanOrEqual(p.raw, b.raw) ? [n.getLiquidityValue(n.token0, p, b, !1), n.getLiquidityValue(n.token1, p, b, !1)] : [void 0, void 0],
                    h = Object(y.a)(j, 2),
                    m = h[0],
                    O = h[1];
                return Object(r.jsx)(Fo, {
                    children: Object(r.jsxs)(De, {
                        gap: "12px",
                        children: [Object(r.jsxs)(zo, {
                            onClick: function() {
                                return d(!l)
                            },
                            style: {
                                cursor: "pointer"
                            },
                            children: [Object(r.jsxs)(cn, {
                                children: [Object(r.jsx)(Lc, {
                                    currency0: i,
                                    currency1: c,
                                    margin: !0,
                                    size: 20
                                }), Object(r.jsx)(s.y, {
                                    children: i && c ? "".concat(i.symbol, "/").concat(c.symbol) : Object(r.jsx)(Bo, {
                                        children: "Loading"
                                    })
                                })]
                            }), Object(r.jsx)(cn, {
                                children: l ? Object(r.jsx)(uo.a, {
                                    size: "20",
                                    style: {
                                        marginLeft: "10px"
                                    }
                                }) : Object(r.jsx)(lo.a, {
                                    size: "20",
                                    style: {
                                        marginLeft: "10px"
                                    }
                                })
                            })]
                        }), l && Object(r.jsxs)(De, {
                            gap: "8px",
                            children: [Object(r.jsxs)(zo, {
                                children: [Object(r.jsx)(cn, {
                                    children: Object(r.jsxs)(s.y, {
                                        children: ["Pooled ", i.symbol, ":"]
                                    })
                                }), m ? Object(r.jsxs)(cn, {
                                    children: [Object(r.jsx)(s.y, {
                                        ml: "6px",
                                        children: null === m || void 0 === m ? void 0 : m.toSignificant(6)
                                    }), Object(r.jsx)(vi, {
                                        size: "20px",
                                        style: {
                                            marginLeft: "8px"
                                        },
                                        currency: i
                                    })]
                                }) : "-"]
                            }), Object(r.jsxs)(zo, {
                                children: [Object(r.jsx)(cn, {
                                    children: Object(r.jsxs)(s.y, {
                                        children: ["Pooled ", c.symbol, ":"]
                                    })
                                }), O ? Object(r.jsxs)(cn, {
                                    children: [Object(r.jsx)(s.y, {
                                        ml: "6px",
                                        children: null === O || void 0 === O ? void 0 : O.toSignificant(6)
                                    }), Object(r.jsx)(vi, {
                                        size: "20px",
                                        style: {
                                            marginLeft: "8px"
                                        },
                                        currency: c
                                    })]
                                }) : "-"]
                            }), Object(r.jsxs)(zo, {
                                children: [Object(r.jsx)(s.y, {
                                    children: "Your pool tokens:"
                                }), Object(r.jsx)(s.y, {
                                    children: b ? b.toSignificant(4) : "-"
                                })]
                            }), Object(r.jsxs)(zo, {
                                children: [Object(r.jsx)(s.y, {
                                    children: "Your pool share:"
                                }), Object(r.jsx)(s.y, {
                                    children: f ? "".concat(f.toFixed(2), "%") : "-"
                                })]
                            }), Object(r.jsxs)(tn, {
                                marginTop: "10px",
                                children: [Object(r.jsx)(s.c, {
                                    as: v.b,
                                    to: "/add/".concat(po(i), "/").concat(po(c)),
                                    style: {
                                        width: "48%"
                                    },
                                    children: "Add"
                                }), Object(r.jsx)(s.c, {
                                    as: v.b,
                                    style: {
                                        width: "48%"
                                    },
                                    to: "/remove/".concat(po(i), "/").concat(po(c)),
                                    children: "Remove"
                                })]
                            })]
                        })]
                    })
                })
            }
            var Wo, Ho = new cr.b(ia.a);

            function Go(e) {
                var n = we().chainId,
                    t = Object(a.useMemo)((function() {
                        return e.map((function(e) {
                            var t = Object(y.a)(e, 2),
                                r = t[0],
                                a = t[1];
                            return [fo(r, n), fo(a, n)]
                        }))
                    }), [n, e]),
                    r = Br(Object(a.useMemo)((function() {
                        return t.map((function(e) {
                            var n = Object(y.a)(e, 2),
                                t = n[0],
                                r = n[1];
                            return t && r && !t.equals(r) ? $.f.getAddress(t, r) : void 0
                        }))
                    }), [t]), Ho, "getReserves");
                return Object(a.useMemo)((function() {
                    return r.map((function(e, n) {
                        var r = e.result,
                            a = e.loading,
                            i = t[n][0],
                            c = t[n][1];
                        if (a) return [Wo.LOADING, null];
                        if (!i || !c || i.equals(c)) return [Wo.INVALID, null];
                        if (!r) return [Wo.NOT_EXISTS, null];
                        var o = r.reserve0,
                            s = r.reserve1,
                            u = i.sortsBefore(c) ? [i, c] : [c, i],
                            l = Object(y.a)(u, 2),
                            d = l[0],
                            b = l[1];
                        return [Wo.EXISTS, new $.f(new $.k(d, o.toString()), new $.k(b, s.toString()))]
                    }))
                }), [r, t])
            }

            function Qo(e, n) {
                return Go([
                    [e, n]
                ])[0]
            }! function(e) {
                e[e.LOADING = 0] = "LOADING", e[e.NOT_EXISTS = 1] = "NOT_EXISTS", e[e.EXISTS = 2] = "EXISTS", e[e.INVALID = 3] = "INVALID"
            }(Wo || (Wo = {}));
            var Ko = t(126);

            function Jo(e, n, t) {
                var r = Pr(ba(null === e || void 0 === e ? void 0 : e.address, !1), "allowance", Object(a.useMemo)((function() {
                    return [n, t]
                }), [n, t])).result;
                return Object(a.useMemo)((function() {
                    return e && r ? new $.k(e, r.toString()) : void 0
                }), [e, r])
            }
            var Xo;
            ! function(e) {
                e.INPUT = "INPUT", e.OUTPUT = "OUTPUT"
            }(Xo || (Xo = {}));
            var $o = Object(ke.b)("swap/selectCurrency"),
                Zo = Object(ke.b)("swap/switchCurrencies"),
                es = Object(ke.b)("swap/typeInput"),
                ns = Object(ke.b)("swap/replaceSwapState"),
                ts = Object(ke.b)("swap/setRecipient"),
                rs = Object(ke.b)("transactions/addTransaction"),
                as = Object(ke.b)("transactions/clearAllTransactions"),
                is = Object(ke.b)("transactions/finalizeTransaction"),
                cs = Object(ke.b)("transactions/checkedTransaction");

            function os() {
                var e = we(),
                    n = e.chainId,
                    t = e.account,
                    r = Object(x.c)();
                return Object(a.useCallback)((function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = a.summary,
                        c = a.approval;
                    if (t && n) {
                        var o = e.hash;
                        if (!o) throw Error("No transaction hash found.");
                        r(rs({
                            hash: o,
                            from: t,
                            chainId: n,
                            approval: c,
                            summary: i
                        }))
                    }
                }), [r, n, t])
            }

            function ss() {
                var e, n = we().chainId,
                    t = Object(x.d)((function(e) {
                        return e.transactions
                    }));
                return n && null !== (e = t[n]) && void 0 !== e ? e : {}
            }

            function us(e) {
                return (new Date).getTime() - e.addedTime < 864e5
            }
            var ls, ds, bs = new $.g($.e.BigInt(20), $.e.BigInt(1e4)),
                ps = new $.g($.e.BigInt(1e4), $.e.BigInt(1e4)),
                fs = ps.subtract(bs);

            function js(e) {
                var n = e ? ps.subtract(e.route.pairs.reduce((function(e) {
                        return e.multiply(fs)
                    }), ps)) : void 0,
                    t = e && n ? e.priceImpact.subtract(n) : void 0;
                return {
                    priceImpactWithoutFee: t ? new $.g(null === t || void 0 === t ? void 0 : t.numerator, null === t || void 0 === t ? void 0 : t.denominator) : void 0,
                    realizedLPFee: n && e && (e.inputAmount instanceof $.k ? new $.k(e.inputAmount.token, n.multiply(e.inputAmount.raw).quotient) : $.c.ether(n.multiply(e.inputAmount.raw).quotient))
                }
            }

            function hs(e, n) {
                var t, r, a = (r = n, new $.g($.e.BigInt(Math.floor(r)), $.e.BigInt(1e4)));
                return t = {}, Object(w.a)(t, Xo.INPUT, null === e || void 0 === e ? void 0 : e.maximumAmountIn(a)), Object(w.a)(t, Xo.OUTPUT, null === e || void 0 === e ? void 0 : e.minimumAmountOut(a)), t
            }

            function ys(e) {
                return (null === e || void 0 === e ? void 0 : e.lessThan(ge)) ? (null === e || void 0 === e ? void 0 : e.lessThan(Oe)) ? (null === e || void 0 === e ? void 0 : e.lessThan(me)) ? (null === e || void 0 === e ? void 0 : e.lessThan(ve)) ? 0 : 1 : 2 : 3 : 4
            }

            function vs(e, n) {
                return e ? n ? "".concat(e.executionPrice.invert().toSignificant(6), " ").concat(e.inputAmount.currency.symbol, " / ").concat(e.outputAmount.currency.symbol) : "".concat(e.executionPrice.toSignificant(6), " ").concat(e.outputAmount.currency.symbol, " / ").concat(e.inputAmount.currency.symbol) : ""
            }

            function ms(e, n) {
                var t = we().account,
                    r = e instanceof $.k ? e.token : void 0,
                    i = Jo(r, null !== t && void 0 !== t ? t : void 0, n),
                    c = function(e, n) {
                        var t = ss();
                        return Object(a.useMemo)((function() {
                            return "string" === typeof e && "string" === typeof n && Object.keys(t).some((function(r) {
                                var a = t[r];
                                if (!a) return !1;
                                if (a.receipt) return !1;
                                var i = a.approval;
                                return !!i && i.spender === n && i.tokenAddress === e && us(a)
                            }))
                        }), [t, n, e])
                    }(null === r || void 0 === r ? void 0 : r.address, n),
                    o = Object(a.useMemo)((function() {
                        return e && n ? e.currency === $.d ? ls.APPROVED : i ? i.lessThan(e) ? c ? ls.PENDING : ls.NOT_APPROVED : ls.APPROVED : ls.UNKNOWN : ls.UNKNOWN
                    }), [e, i, c, n]),
                    s = ba(null === r || void 0 === r ? void 0 : r.address),
                    u = os(),
                    l = Object(a.useCallback)(Object(h.a)(j.a.mark((function t() {
                        var a, i;
                        return j.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (o === ls.NOT_APPROVED) {
                                        t.next = 3;
                                        break
                                    }
                                    return console.error("approve was called unnecessarily"), t.abrupt("return");
                                case 3:
                                    if (r) {
                                        t.next = 6;
                                        break
                                    }
                                    return console.error("no token"), t.abrupt("return");
                                case 6:
                                    if (s) {
                                        t.next = 9;
                                        break
                                    }
                                    return console.error("tokenContract is null"), t.abrupt("return");
                                case 9:
                                    if (e) {
                                        t.next = 12;
                                        break
                                    }
                                    return console.error("missing amount to approve"), t.abrupt("return");
                                case 12:
                                    if (n) {
                                        t.next = 15;
                                        break
                                    }
                                    return console.error("no spender"), t.abrupt("return");
                                case 15:
                                    return a = !1, t.next = 18, s.estimateGas.approve(n, Ko.a).catch((function() {
                                        return a = !0, s.estimateGas.approve(n, e.raw.toString())
                                    }));
                                case 18:
                                    return i = t.sent, t.abrupt("return", s.approve(n, a ? e.raw.toString() : Ko.a, {
                                        gasLimit: On(i)
                                    }).then((function(t) {
                                        u(t, {
                                            summary: "Approve ".concat(e.currency.symbol),
                                            approval: {
                                                tokenAddress: r.address,
                                                spender: n
                                            }
                                        })
                                    })).catch((function(e) {
                                        throw console.error("Failed to approve token", e), e
                                    })));
                                case 20:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), [o, r, s, e, n, u]);
                return [o, l]
            }! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.NOT_APPROVED = 1] = "NOT_APPROVED", e[e.PENDING = 2] = "PENDING", e[e.APPROVED = 3] = "APPROVED"
            }(ls || (ls = {})),
            function(e) {
                e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
            }(ds || (ds = {}));
            var Os = Object(ke.b)("mint/typeInputMint"),
                xs = Object(ke.b)("mint/resetMintState"),
                gs = t(105);

            function Cs(e, n) {
                var t = Object(a.useState)(e),
                    r = Object(y.a)(t, 2),
                    i = r[0],
                    c = r[1];
                return Object(a.useEffect)((function() {
                    var t = setTimeout((function() {
                        c(e)
                    }), n);
                    return function() {
                        clearTimeout(t)
                    }
                }), [e, n]), i
            }

            function ws(e) {
                var n = hn(e),
                    t = function(e) {
                        var n, t, r, i = Cs(e, 200),
                            c = Object(a.useMemo)((function() {
                                if (!i || !hn(i)) return [void 0];
                                try {
                                    return i ? [Object(_a.namehash)("".concat(i.toLowerCase().substr(2), ".addr.reverse"))] : [void 0]
                                } catch (e) {
                                    return [void 0]
                                }
                            }), [i]),
                            o = Pr(pa(!1), "resolver", c),
                            s = null === (n = o.result) || void 0 === n ? void 0 : n[0],
                            u = Pr(fa(s && !Ya(s) ? s : void 0, !1), "name", c),
                            l = i !== e;
                        return {
                            ENSName: l ? null : null !== (t = null === (r = u.result) || void 0 === r ? void 0 : r[0]) && void 0 !== t ? t : null,
                            loading: l || o.loading || u.loading
                        }
                    }(n || void 0),
                    r = function(e) {
                        var n, t, r, i = Cs(e, 200),
                            c = Object(a.useMemo)((function() {
                                if (!i) return [void 0];
                                try {
                                    return i ? [Object(_a.namehash)(i)] : [void 0]
                                } catch (e) {
                                    return [void 0]
                                }
                            }), [i]),
                            o = Pr(pa(!1), "resolver", c),
                            s = null === (n = o.result) || void 0 === n ? void 0 : n[0],
                            u = Pr(fa(s && !Ya(s) ? s : void 0, !1), "addr", c),
                            l = i !== e;
                        return {
                            address: l ? null : null !== (t = null === (r = u.result) || void 0 === r ? void 0 : r[0]) && void 0 !== t ? t : null,
                            loading: l || o.loading || u.loading
                        }
                    }(e);
                return {
                    loading: t.loading || r.loading,
                    address: n || r.address,
                    name: t.ENSName ? t.ENSName : !n && r.address && e || null
                }
            }

            function ks(e, n) {
                var t = we().chainId,
                    r = Object(a.useMemo)((function() {
                        return t ? se[t] : []
                    }), [t]),
                    i = Object(a.useMemo)((function() {
                        return Lr()(r, (function(e) {
                            return r.map((function(n) {
                                return [e, n]
                            }))
                        })).filter((function(e) {
                            var n = Object(y.a)(e, 2),
                                t = n[0],
                                r = n[1];
                            return t.address !== r.address
                        }))
                    }), [r]),
                    c = t ? [fo(e, t), fo(n, t)] : [void 0, void 0],
                    o = Object(y.a)(c, 2),
                    s = o[0],
                    u = o[1],
                    l = Go(Object(a.useMemo)((function() {
                        return s && u ? [
                            [s, u]
                        ].concat(Object(J.a)(r.map((function(e) {
                            return [s, e]
                        }))), Object(J.a)(r.map((function(e) {
                            return [u, e]
                        }))), Object(J.a)(i)).filter((function(e) {
                            return Boolean(e[0] && e[1])
                        })).filter((function(e) {
                            var n = Object(y.a)(e, 2),
                                t = n[0],
                                r = n[1];
                            return t.address !== r.address
                        })).filter((function(e) {
                            var n = Object(y.a)(e, 2),
                                r = n[0],
                                a = n[1];
                            if (!t) return !0;
                            var i = ue[t];
                            if (!i) return !0;
                            var c = i[r.address],
                                o = i[a.address];
                            return !c && !o || !(c && !c.find((function(e) {
                                return a.equals(e)
                            }))) && !(o && !o.find((function(e) {
                                return r.equals(e)
                            })))
                        })) : []
                    }), [s, u, r, i, t]));
                return Object(a.useMemo)((function() {
                    return Object.values(l.filter((function(e) {
                        return Boolean(e[0] === Wo.EXISTS && e[1])
                    })).reduce((function(e, n) {
                        var t, r = Object(y.a)(n, 2)[1];
                        return e[r.liquidityToken.address] = null !== (t = e[r.liquidityToken.address]) && void 0 !== t ? t : r, e
                    }), {}))
                }), [l])
            }
            var Ts = t(317);

            function Is() {
                return Object(x.d)((function(e) {
                    return e.swap
                }))
            }

            function Ns(e, n) {
                if (e && n) try {
                    var t = Object(gs.parseUnits)(e, n.decimals).toString();
                    if ("0" !== t) return n instanceof $.j ? new $.k(n, $.e.BigInt(t)) : $.c.ether($.e.BigInt(t))
                } catch (r) {
                    console.info('Failed to parse input amount: "'.concat(e, '"'), r)
                }
            }
            var Es = ["0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73", "0x10ED43C718714eb63d5aA57B78B54704E256024E", "0x10ED43C718714eb63d5aA57B78B54704E256024E"];

            function Ss(e, n) {
                return e.route.path.some((function(e) {
                    return e.address === n
                })) || e.route.pairs.some((function(e) {
                    return e.liquidityToken.address === n
                }))
            }

            function Rs() {
                var e, n, t, r, i, c, o, s = we().account,
                    u = Is(),
                    l = u.independentField,
                    d = u.typedValue,
                    b = u[Xo.INPUT].currencyId,
                    p = u[Xo.OUTPUT].currencyId,
                    f = u.recipient,
                    j = Oa(b),
                    h = Oa(p),
                    v = ws(null !== f && void 0 !== f ? f : void 0),
                    m = null !== (e = null === f ? s : v.address) && void 0 !== e ? e : null,
                    O = ka(null !== s && void 0 !== s ? s : void 0, [null !== j && void 0 !== j ? j : void 0, null !== h && void 0 !== h ? h : void 0]),
                    x = l === Xo.INPUT,
                    g = Ns(d, null !== (n = x ? j : h) && void 0 !== n ? n : void 0),
                    C = function(e, n) {
                        var t = ks(null === e || void 0 === e ? void 0 : e.currency, n);
                        return Object(a.useMemo)((function() {
                            var r;
                            return e && n && t.length > 0 && null !== (r = $.l.bestTradeExactIn(t, e, n, {
                                maxHops: 3,
                                maxNumResults: 1
                            })[0]) && void 0 !== r ? r : null
                        }), [t, e, n])
                    }(x ? g : void 0, null !== h && void 0 !== h ? h : void 0),
                    k = function(e, n) {
                        var t = ks(e, null === n || void 0 === n ? void 0 : n.currency);
                        return Object(a.useMemo)((function() {
                            var r;
                            return e && n && t.length > 0 && null !== (r = $.l.bestTradeExactOut(t, e, n, {
                                maxHops: 3,
                                maxNumResults: 1
                            })[0]) && void 0 !== r ? r : null
                        }), [t, e, n])
                    }(null !== j && void 0 !== j ? j : void 0, x ? void 0 : g),
                    T = x ? C : k,
                    I = (t = {}, Object(w.a)(t, Xo.INPUT, O[0]), Object(w.a)(t, Xo.OUTPUT, O[1]), t),
                    N = (r = {}, Object(w.a)(r, Xo.INPUT, null !== j && void 0 !== j ? j : void 0), Object(w.a)(r, Xo.OUTPUT, null !== h && void 0 !== h ? h : void 0), r);
                (s || (i = "Connect Wallet"), g) || (i = null !== (c = i) && void 0 !== c ? c : "Enter an amount");
                N[Xo.INPUT] && N[Xo.OUTPUT] || (i = null !== (o = i) && void 0 !== o ? o : "Select a token");
                var E, S = hn(m);
                if (m && S) {
                    if (-1 !== Es.indexOf(S) || C && Ss(C, S) || k && Ss(k, S)) {
                        var R;
                        i = null !== (R = i) && void 0 !== R ? R : "Invalid recipient"
                    }
                } else i = null !== (E = i) && void 0 !== E ? E : "Enter a recipient";
                var U = Zr(),
                    A = Object(y.a)(U, 1)[0],
                    B = T && A && hs(T, A),
                    P = [I[Xo.INPUT], B ? B[Xo.INPUT] : null],
                    M = P[0],
                    L = P[1];
                return M && L && M.lessThan(L) && (i = "Insufficient ".concat(L.currency.symbol, " balance")), {
                    currencies: N,
                    currencyBalances: I,
                    parsedAmount: g,
                    v2Trade: null !== T && void 0 !== T ? T : void 0,
                    inputError: i
                }
            }

            function Us(e) {
                if ("string" === typeof e) {
                    var n = hn(e);
                    if (n) return n;
                    if ("BNB" === e.toUpperCase()) return "BNB";
                    if (!1 === n) return "BNB"
                }
                return ""
            }
            var As = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
                Bs = /^0x[a-fA-F0-9]{40}$/;

            function Ps(e) {
                var n, t = Us(e.inputCurrency),
                    r = Us(e.outputCurrency);
                t === r && ("string" === typeof e.outputCurrency ? t = "" : r = "");
                var a, i = function(e) {
                    return "string" !== typeof e ? null : hn(e) || (As.test(e) || Bs.test(e) ? e : null)
                }(e.recipient);
                return n = {}, Object(w.a)(n, Xo.INPUT, {
                    currencyId: t
                }), Object(w.a)(n, Xo.OUTPUT, {
                    currencyId: r
                }), Object(w.a)(n, "typedValue", "string" !== typeof(a = e.exactAmount) || isNaN(parseFloat(a)) ? "" : a), Object(w.a)(n, "independentField", function(e) {
                    return "string" === typeof e && "output" === e.toLowerCase() ? Xo.OUTPUT : Xo.INPUT
                }(e.exactField)), Object(w.a)(n, "recipient", i), n
            }

            function Ms() {
                var e = we().chainId,
                    n = Object(x.c)(),
                    t = function() {
                        var e = Object(m.g)().search;
                        return Object(a.useMemo)((function() {
                            return e && e.length > 1 ? Object(Ts.parse)(e, {
                                parseArrays: !1,
                                ignoreQueryPrefix: !0
                            }) : {}
                        }), [e])
                    }(),
                    r = Object(a.useState)(),
                    i = Object(y.a)(r, 2),
                    c = i[0],
                    o = i[1];
                return Object(a.useEffect)((function() {
                    if (e) {
                        var r = Ps(t);
                        n(ns({
                            typedValue: r.typedValue,
                            field: r.independentField,
                            inputCurrencyId: r[Xo.INPUT].currencyId,
                            outputCurrencyId: r[Xo.OUTPUT].currencyId,
                            recipient: r.recipient
                        })), o({
                            inputCurrencyId: r[Xo.INPUT].currencyId,
                            outputCurrencyId: r[Xo.OUTPUT].currencyId
                        })
                    }
                }), [n, e]), c
            }
            var Ls = $.e.BigInt(0);

            function Ds() {
                return Object(x.d)((function(e) {
                    return e.mint
                }))
            }

            function _s(e) {
                if (e) return e.currency === $.d ? $.e.greaterThan(e.raw, Ce) ? $.c.ether($.e.subtract(e.raw, Ce)) : $.c.ether($.e.BigInt(0)) : e
            }

            function Ys() {
                var e = Object(u.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n  padding: 16px;\n"]);
                return Ys = function() {
                    return e
                }, e
            }
            var zs = l.default.div(Ys(), (function(e) {
                    return e.theme.colors.borderColor
                })),
                Fs = t(165),
                qs = Object(ke.d)({
                    name: "toasts",
                    initialState: {
                        data: []
                    },
                    reducers: {
                        push: function(e, n) {
                            var t = n.payload,
                                r = e.data.findIndex((function(e) {
                                    return e.id === n.payload.id
                                }));
                            r >= 0 && e.data.splice(r, 1), e.data.unshift(t)
                        },
                        remove: function(e, n) {
                            var t = e.data.findIndex((function(e) {
                                return e.id === n.payload
                            }));
                            t >= 0 && e.data.splice(t, 1)
                        },
                        clear: function(e) {
                            e.data = []
                        }
                    }
                }),
                Vs = qs.actions,
                Ws = Vs.clear,
                Hs = Vs.remove,
                Gs = Vs.push,
                Qs = qs.reducer,
                Ks = function() {
                    var e = Object(x.c)();
                    return Object(a.useMemo)((function() {
                        var n = function(n) {
                            return e(Gs(n))
                        };
                        return {
                            toastError: function(e, t) {
                                return n({
                                    id: Object(Fs.kebabCase)(e),
                                    type: s.D.DANGER,
                                    title: e,
                                    description: t
                                })
                            },
                            toastInfo: function(e, t) {
                                return n({
                                    id: Object(Fs.kebabCase)(e),
                                    type: s.D.INFO,
                                    title: e,
                                    description: t
                                })
                            },
                            toastSuccess: function(e, t) {
                                return n({
                                    id: Object(Fs.kebabCase)(e),
                                    type: s.D.SUCCESS,
                                    title: e,
                                    description: t
                                })
                            },
                            toastWarning: function(e, t) {
                                return n({
                                    id: Object(Fs.kebabCase)(e),
                                    type: s.D.WARNING,
                                    title: e,
                                    description: t
                                })
                            },
                            push: n,
                            remove: function(n) {
                                return e(Hs(n))
                            },
                            clear: function() {
                                return e(Ws())
                            }
                        }
                    }), [e])
                },
                Js = function() {
                    var e = Object(g.d)(),
                        n = e.activate,
                        t = e.deactivate,
                        r = Ks().toastError;
                    return {
                        login: Object(a.useCallback)((function(e) {
                            var t = K[e];
                            t ? n(t, function() {
                                var e = Object(h.a)(j.a.mark((function e(n) {
                                    return j.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                window.localStorage.removeItem(s.A), n instanceof g.a ? r("Unsupported Chain Id", "Unsupported Chain Id Error. Check your chain Id.") : n instanceof T.b || n instanceof E.NoBscProviderError ? r("Provider Error", "No provider was found") : n instanceof T.c || n instanceof I.a ? (t instanceof I.b && (t.walletConnectProvider = null), r("Authorization Error", "Please authorize to access your account")) : r(n.name, n.message);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(n) {
                                    return e.apply(this, arguments)
                                }
                            }()) : r("Can't find connector", "The connector config is wrong")
                        }), []),
                        logout: t
                    }
                },
                Xs = function(e) {
                    var n = nr(),
                        t = Js(),
                        a = t.login,
                        i = t.logout,
                        c = Object(s.F)(a, i).onPresentConnectModal;
                    return Object(r.jsx)(s.c, Object(X.a)(Object(X.a)({
                        onClick: c
                    }, e), {}, {
                        children: n(292, "Unlock Wallet")
                    }))
                };

            function $s() {
                var e = Object(u.a)(["\n  position: relative;\n  max-width: 436px;\n  width: 100%;\n  z-index: 5;\n"]);
                return $s = function() {
                    return e
                }, e
            }
            var Zs = Object(l.default)(s.f)($s());

            function eu(e) {
                var n = e.children;
                return Object(r.jsx)(Zs, {
                    children: n
                })
            }

            function nu() {
                var e = Object(u.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]);
                return nu = function() {
                    return e
                }, e
            }

            function tu() {
                var e = Object(u.a)(["\n  :hover {\n    cursor: pointer;\n  }\n  color: ", ";\n"]);
                return tu = function() {
                    return e
                }, e
            }

            function ru() {
                var e = Object(u.a)(["\n  position: relative;\n"]);
                return ru = function() {
                    return e
                }, e
            }
            var au = l.default.div(ru()),
                iu = Object(l.default)(s.y)(tu(), (function(e) {
                    return e.theme.colors.primary
                })),
                cu = l.default.span(nu());

            function ou(e) {
                var n, t, a, i, c, o, u, l, d = e.noLiquidity,
                    b = e.price,
                    p = e.currencies,
                    f = e.parsedAmounts,
                    j = e.poolTokenPercentage,
                    h = e.onAdd;
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsxs)(tn, {
                        children: [Object(r.jsxs)(s.y, {
                            children: [null === (n = p[ds.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol, " Deposited"]
                        }), Object(r.jsxs)(cn, {
                            children: [Object(r.jsx)(vi, {
                                currency: p[ds.CURRENCY_A],
                                style: {
                                    marginRight: "8px"
                                }
                            }), Object(r.jsx)(s.y, {
                                children: null === (t = f[ds.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(6)
                            })]
                        })]
                    }), Object(r.jsxs)(tn, {
                        children: [Object(r.jsxs)(s.y, {
                            children: [null === (a = p[ds.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol, " Deposited"]
                        }), Object(r.jsxs)(cn, {
                            children: [Object(r.jsx)(vi, {
                                currency: p[ds.CURRENCY_B],
                                style: {
                                    marginRight: "8px"
                                }
                            }), Object(r.jsx)(s.y, {
                                children: null === (i = f[ds.CURRENCY_B]) || void 0 === i ? void 0 : i.toSignificant(6)
                            })]
                        })]
                    }), Object(r.jsxs)(tn, {
                        children: [Object(r.jsx)(s.y, {
                            children: "Rates"
                        }), Object(r.jsx)(s.y, {
                            children: "1 ".concat(null === (c = p[ds.CURRENCY_A]) || void 0 === c ? void 0 : c.symbol, " = ").concat(null === b || void 0 === b ? void 0 : b.toSignificant(4), " ").concat(null === (o = p[ds.CURRENCY_B]) || void 0 === o ? void 0 : o.symbol)
                        })]
                    }), Object(r.jsx)(tn, {
                        style: {
                            justifyContent: "flex-end"
                        },
                        children: Object(r.jsx)(s.y, {
                            children: "1 ".concat(null === (u = p[ds.CURRENCY_B]) || void 0 === u ? void 0 : u.symbol, " = ").concat(null === b || void 0 === b ? void 0 : b.invert().toSignificant(4), " ").concat(null === (l = p[ds.CURRENCY_A]) || void 0 === l ? void 0 : l.symbol)
                        })
                    }), Object(r.jsxs)(tn, {
                        children: [Object(r.jsx)(s.y, {
                            children: "Share of Pool:"
                        }), Object(r.jsxs)(s.y, {
                            children: [d ? "100" : null === j || void 0 === j ? void 0 : j.toSignificant(4), "%"]
                        })]
                    }), Object(r.jsx)(s.c, {
                        mt: "20px",
                        onClick: h,
                        children: d ? er(250, "Create Pool & Supply") : er(252, "Confirm Supply")
                    })]
                })
            }

            function su(e) {
                var n, t, a, i, c, o, u, l, d = e.currencies,
                    b = e.noLiquidity,
                    p = e.poolTokenPercentage,
                    f = e.price;
                return Object(r.jsx)(De, {
                    gap: "md",
                    children: Object(r.jsxs)(an, {
                        justify: "space-around",
                        gap: "4px",
                        children: [Object(r.jsxs)(De, {
                            justify: "center",
                            children: [Object(r.jsx)(s.y, {
                                children: null !== (n = null === f || void 0 === f ? void 0 : f.toSignificant(6)) && void 0 !== n ? n : "-"
                            }), Object(r.jsxs)(s.y, {
                                fontSize: "14px",
                                color: "textSubtle",
                                pt: 1,
                                children: [null === (t = d[ds.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol, " per ", null === (a = d[ds.CURRENCY_A]) || void 0 === a ? void 0 : a.symbol]
                            })]
                        }), Object(r.jsxs)(De, {
                            justify: "center",
                            children: [Object(r.jsx)(s.y, {
                                children: null !== (i = null === f || void 0 === f || null === (c = f.invert()) || void 0 === c ? void 0 : c.toSignificant(6)) && void 0 !== i ? i : "-"
                            }), Object(r.jsxs)(s.y, {
                                fontSize: "14px",
                                color: "textSubtle",
                                pt: 1,
                                children: [null === (o = d[ds.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol, " per ", null === (u = d[ds.CURRENCY_B]) || void 0 === u ? void 0 : u.symbol]
                            })]
                        }), Object(r.jsxs)(De, {
                            justify: "center",
                            children: [Object(r.jsxs)(s.y, {
                                children: [b && f ? "100" : null !== (l = (null === p || void 0 === p ? void 0 : p.lessThan(he)) ? "<0.01" : null === p || void 0 === p ? void 0 : p.toFixed(2)) && void 0 !== l ? l : "0", "%"]
                            }), Object(r.jsx)(s.y, {
                                fontSize: "14px",
                                color: "textSubtle",
                                pt: 1,
                                children: "Share of Pool"
                            })]
                        })]
                    })
                })
            }

            function uu(e) {
                var n, t, i, c, o, u, l, d, b, p, f, v = e.match.params,
                    m = v.currencyIdA,
                    O = v.currencyIdB,
                    g = e.history,
                    C = we(),
                    k = C.account,
                    T = C.chainId,
                    I = C.library,
                    N = Oa(m),
                    E = Oa(O),
                    S = nr(),
                    R = Boolean(T && (N && Object($.o)(N, $.n[T]) || E && Object($.o)(E, $.n[T]))),
                    U = $r(),
                    A = Ds(),
                    B = A.independentField,
                    P = A.typedValue,
                    M = A.otherTypedValue,
                    L = function(e, n) {
                        var t, r, i, c, o, s, u, l = we(),
                            d = l.account,
                            b = l.chainId,
                            p = Ds(),
                            f = p.independentField,
                            j = p.typedValue,
                            h = p.otherTypedValue,
                            v = f === ds.CURRENCY_A ? ds.CURRENCY_B : ds.CURRENCY_A,
                            m = Object(a.useMemo)((function() {
                                var t;
                                return t = {}, Object(w.a)(t, ds.CURRENCY_A, null !== e && void 0 !== e ? e : void 0), Object(w.a)(t, ds.CURRENCY_B, null !== n && void 0 !== n ? n : void 0), t
                            }), [e, n]),
                            O = Qo(m[ds.CURRENCY_A], m[ds.CURRENCY_B]),
                            x = Object(y.a)(O, 2),
                            g = x[0],
                            C = x[1],
                            k = bo(null === C || void 0 === C ? void 0 : C.liquidityToken),
                            T = g === Wo.NOT_EXISTS || Boolean(k && $.e.equal(k.raw, Ls)),
                            I = ka(null !== d && void 0 !== d ? d : void 0, [m[ds.CURRENCY_A], m[ds.CURRENCY_B]]),
                            N = (t = {}, Object(w.a)(t, ds.CURRENCY_A, I[0]), Object(w.a)(t, ds.CURRENCY_B, I[1]), t),
                            E = Ns(j, m[f]),
                            S = Object(a.useMemo)((function() {
                                if (T) return h && m[v] ? Ns(h, m[v]) : void 0;
                                if (E) {
                                    var t = jo(E, b),
                                        r = [fo(e, b), fo(n, b)],
                                        a = r[0],
                                        i = r[1];
                                    if (a && i && t && C) {
                                        var c = v === ds.CURRENCY_B ? n : e,
                                            o = v === ds.CURRENCY_B ? C.priceOf(a).quote(t) : C.priceOf(i).quote(t);
                                        return c === $.d ? $.c.ether(o.raw) : o
                                    }
                                }
                            }), [T, h, m, v, E, e, b, n, C]),
                            R = (r = {}, Object(w.a)(r, ds.CURRENCY_A, f === ds.CURRENCY_A ? E : S), Object(w.a)(r, ds.CURRENCY_B, f === ds.CURRENCY_A ? S : E), r),
                            U = Object(a.useMemo)((function() {
                                if (T) {
                                    var n = R[ds.CURRENCY_A],
                                        t = R[ds.CURRENCY_B];
                                    return n && t ? new $.h(n.currency, t.currency, n.raw, t.raw) : void 0
                                }
                                var r = fo(e, b);
                                return C && r ? C.priceOf(r) : void 0
                            }), [b, e, T, C, R]),
                            A = Object(a.useMemo)((function() {
                                var e = R[ds.CURRENCY_A],
                                    n = R[ds.CURRENCY_B],
                                    t = [jo(e, b), jo(n, b)],
                                    r = t[0],
                                    a = t[1];
                                if (C && k && r && a) return C.getLiquidityMinted(k, r, a)
                            }), [R, b, C, k]),
                            B = Object(a.useMemo)((function() {
                                if (A && k) return new $.g(A.raw, k.add(A).raw)
                            }), [A, k]);
                        d || (o = "Connect Wallet"), g === Wo.INVALID && (o = null !== (s = o) && void 0 !== s ? s : er(136, "Invalid pair")), R[ds.CURRENCY_A] && R[ds.CURRENCY_B] || (o = null !== (u = o) && void 0 !== u ? u : er(84, "Enter an amount"));
                        var P, M, L = R[ds.CURRENCY_A],
                            D = R[ds.CURRENCY_B];
                        return L && (null === N || void 0 === N || null === (i = N[ds.CURRENCY_A]) || void 0 === i ? void 0 : i.lessThan(L)) && (o = "Insufficient ".concat(null === (P = m[ds.CURRENCY_A]) || void 0 === P ? void 0 : P.symbol, " balance")), D && (null === N || void 0 === N || null === (c = N[ds.CURRENCY_B]) || void 0 === c ? void 0 : c.lessThan(D)) && (o = "Insufficient ".concat(null === (M = m[ds.CURRENCY_B]) || void 0 === M ? void 0 : M.symbol, " balance")), {
                            dependentField: v,
                            currencies: m,
                            pair: C,
                            pairState: g,
                            currencyBalances: N,
                            parsedAmounts: R,
                            price: U,
                            noLiquidity: T,
                            liquidityMinted: A,
                            poolTokenPercentage: B,
                            error: o
                        }
                    }(null !== N && void 0 !== N ? N : void 0, null !== E && void 0 !== E ? E : void 0),
                    D = L.dependentField,
                    _ = L.currencies,
                    Y = L.pair,
                    z = L.pairState,
                    F = L.currencyBalances,
                    q = L.parsedAmounts,
                    V = L.price,
                    W = L.noLiquidity,
                    H = L.liquidityMinted,
                    G = L.poolTokenPercentage,
                    Q = L.error,
                    K = function(e) {
                        var n = Object(x.c)();
                        return {
                            onFieldAInput: Object(a.useCallback)((function(t) {
                                n(Os({
                                    field: ds.CURRENCY_A,
                                    typedValue: t,
                                    noLiquidity: !0 === e
                                }))
                            }), [n, e]),
                            onFieldBInput: Object(a.useCallback)((function(t) {
                                n(Os({
                                    field: ds.CURRENCY_B,
                                    typedValue: t,
                                    noLiquidity: !0 === e
                                }))
                            }), [n, e])
                        }
                    }(W),
                    ee = K.onFieldAInput,
                    ne = K.onFieldBInput,
                    te = !Q,
                    re = Object(a.useState)(!1),
                    ae = Object(y.a)(re, 2),
                    ie = ae[0],
                    ce = ae[1],
                    oe = Object(a.useState)(!1),
                    se = Object(y.a)(oe, 2),
                    ue = se[0],
                    le = se[1],
                    de = ea(),
                    be = Object(y.a)(de, 1)[0],
                    pe = Zr(),
                    fe = Object(y.a)(pe, 1)[0],
                    je = Object(a.useState)(""),
                    he = Object(y.a)(je, 2),
                    ye = he[0],
                    ve = he[1],
                    me = (i = {}, Object(w.a)(i, B, P), Object(w.a)(i, D, W ? M : null !== (n = null === (t = q[D]) || void 0 === t ? void 0 : t.toSignificant(6)) && void 0 !== n ? n : ""), i),
                    Oe = [ds.CURRENCY_A, ds.CURRENCY_B].reduce((function(e, n) {
                        return Object(X.a)(Object(X.a)({}, e), {}, Object(w.a)({}, n, _s(F[n])))
                    }), {}),
                    xe = [ds.CURRENCY_A, ds.CURRENCY_B].reduce((function(e, n) {
                        var t, r;
                        return Object(X.a)(Object(X.a)({}, e), {}, Object(w.a)({}, n, null === (t = Oe[n]) || void 0 === t ? void 0 : t.equalTo(null !== (r = q[n]) && void 0 !== r ? r : "0")))
                    }), {}),
                    ge = ms(q[ds.CURRENCY_A], Z),
                    Ce = Object(y.a)(ge, 2),
                    ke = Ce[0],
                    Te = Ce[1],
                    Ie = ms(q[ds.CURRENCY_B], Z),
                    Ne = Object(y.a)(Ie, 2),
                    Ee = Ne[0],
                    Se = Ne[1],
                    Re = os();

                function Ue() {
                    return Ae.apply(this, arguments)
                }

                function Ae() {
                    return (Ae = Object(h.a)(j.a.mark((function e() {
                        var n, t, r, a, i, c, o, s, u, l, d, b, p, f, h, y, v;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (T && I && k) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (t = Cn(0, I, k), r = q[ds.CURRENCY_A], a = q[ds.CURRENCY_B], r && a && N && E) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return n = {}, Object(w.a)(n, ds.CURRENCY_A, xn(r, W ? 0 : fe)[0]), Object(w.a)(n, ds.CURRENCY_B, xn(a, W ? 0 : fe)[0]), i = n, c = Math.ceil(Date.now() / 1e3) + be, N === $.d || E === $.d ? (p = E === $.d, o = t.estimateGas.addLiquidityETH, s = t.addLiquidityETH, u = [null !== (d = null === (b = fo(p ? N : E, T)) || void 0 === b ? void 0 : b.address) && void 0 !== d ? d : "", (p ? r : a).raw.toString(), i[p ? ds.CURRENCY_A : ds.CURRENCY_B].toString(), i[p ? ds.CURRENCY_B : ds.CURRENCY_A].toString(), k, c], l = fn.a.from((p ? a : r).raw.toString())) : (o = t.estimateGas.addLiquidity, s = t.addLiquidity, u = [null !== (f = null === (h = fo(N, T)) || void 0 === h ? void 0 : h.address) && void 0 !== f ? f : "", null !== (y = null === (v = fo(E, T)) || void 0 === v ? void 0 : v.address) && void 0 !== y ? y : "", r.raw.toString(), a.raw.toString(), i[ds.CURRENCY_A].toString(), i[ds.CURRENCY_B].toString(), k, c], l = null), le(!0), e.next = 12, o.apply(void 0, Object(J.a)(u).concat([l ? {
                                        value: l
                                    } : {}])).then((function(e) {
                                        return s.apply(void 0, Object(J.a)(u).concat([Object(X.a)(Object(X.a)({}, l ? {
                                            value: l
                                        } : {}), {}, {
                                            gasLimit: On(e)
                                        })])).then((function(e) {
                                            var n, t, r, a;
                                            le(!1), Re(e, {
                                                summary: "Add ".concat(null === (n = q[ds.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(3), " ").concat(null === (t = _[ds.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol, " and ").concat(null === (r = q[ds.CURRENCY_B]) || void 0 === r ? void 0 : r.toSignificant(3), " ").concat(null === (a = _[ds.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol)
                                            }), ve(e.hash)
                                        }))
                                    })).catch((function(e) {
                                        le(!1), 4001 !== (null === e || void 0 === e ? void 0 : e.code) && console.error(e)
                                    }));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var Be = function() {
                        var e, n, t, a;
                        return W ? Object(r.jsx)(De, {
                            gap: "20px",
                            children: Object(r.jsx)(ht, {
                                mt: "20px",
                                borderRadius: "20px",
                                children: Object(r.jsxs)(rn, {
                                    children: [Object(r.jsx)(s.y, {
                                        fontSize: "48px",
                                        mr: "8px",
                                        children: "".concat(null === (e = _[ds.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol, "/").concat(null === (n = _[ds.CURRENCY_B]) || void 0 === n ? void 0 : n.symbol)
                                    }), Object(r.jsx)(Lc, {
                                        currency0: _[ds.CURRENCY_A],
                                        currency1: _[ds.CURRENCY_B],
                                        size: 30
                                    })]
                                })
                            })
                        }) : Object(r.jsxs)(De, {
                            gap: "20px",
                            children: [Object(r.jsxs)(rn, {
                                style: {
                                    marginTop: "20px"
                                },
                                children: [Object(r.jsx)(s.y, {
                                    fontSize: "48px",
                                    mr: "8px",
                                    children: null === H || void 0 === H ? void 0 : H.toSignificant(6)
                                }), Object(r.jsx)(Lc, {
                                    currency0: _[ds.CURRENCY_A],
                                    currency1: _[ds.CURRENCY_B],
                                    size: 30
                                })]
                            }), Object(r.jsx)(on, {
                                children: Object(r.jsx)(s.y, {
                                    fontSize: "24px",
                                    children: "".concat(null === (t = _[ds.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol, "/").concat(null === (a = _[ds.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol, " Pool Tokens")
                                })
                            }), Object(r.jsx)(s.y, {
                                small: !0,
                                textAlign: "left",
                                padding: "8px 0 0 0 ",
                                style: {
                                    fontStyle: "italic"
                                },
                                children: "Output is estimated. If the price changes by more than ".concat(fe / 100, "% your transaction will revert.")
                            })]
                        })
                    },
                    Pe = function() {
                        return Object(r.jsx)(ou, {
                            price: V,
                            currencies: _,
                            parsedAmounts: q,
                            noLiquidity: W,
                            onAdd: Ue,
                            poolTokenPercentage: G
                        })
                    },
                    Me = "Supplying ".concat(null === (c = q[ds.CURRENCY_A]) || void 0 === c ? void 0 : c.toSignificant(6), " ").concat(null === (o = _[ds.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol, " and ").concat(null === (u = q[ds.CURRENCY_B]) || void 0 === u ? void 0 : u.toSignificant(6), " ").concat(null === (l = _[ds.CURRENCY_B]) || void 0 === l ? void 0 : l.symbol),
                    _e = (Object(a.useCallback)((function(e) {
                        var n = po(e);
                        n === O ? g.push("/add/".concat(O, "/").concat(m)) : g.push("/add/".concat(n, "/").concat(O))
                    }), [O, g, m]), Object(a.useCallback)((function(e) {
                        var n = po(e);
                        m === n ? O ? g.push("/add/".concat(O, "/").concat(n)) : g.push("/add/".concat(n)) : g.push("/add/".concat(m || "BNB", "/").concat(n))
                    }), [m, g, O])),
                    Ye = Object(a.useCallback)((function() {
                        ce(!1), ye && ee(""), ve("")
                    }), [ee, ye]);
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(ir, {
                        activeIndex: 1
                    }), Object(r.jsxs)(eu, {
                        children: [Object(r.jsx)(so, {
                            adding: !0
                        }), Object(r.jsxs)(au, {
                            children: [Object(r.jsx)(Kt, {
                                isOpen: ie,
                                onDismiss: Ye,
                                attemptingTxn: ue,
                                hash: ye,
                                content: function() {
                                    return Object(r.jsx)(Ht, {
                                        title: W ? S(1154, "You are creating a pool") : S(1156, "You will receive"),
                                        onDismiss: Ye,
                                        topContent: Be,
                                        bottomContent: Pe
                                    })
                                },
                                pendingText: Me
                            }), Object(r.jsx)(s.g, {
                                children: Object(r.jsxs)(De, {
                                    gap: "20px",
                                    children: [W && Object(r.jsx)(Le, {
                                        children: Object(r.jsx)(zs, {
                                            children: Object(r.jsxs)(De, {
                                                gap: "12px",
                                                children: [Object(r.jsx)(s.y, {
                                                    children: S(1158, "You are the first liquidity provider.")
                                                }), Object(r.jsx)(s.y, {
                                                    children: S(1160, "The ratio of tokens you add will set the price of this pool.")
                                                }), Object(r.jsx)(s.y, {
                                                    children: S(1162, "Once you are happy with the rate click supply to review.")
                                                })]
                                            })
                                        })
                                    }), Object(r.jsx)(eo, {
                                        value: me[ds.CURRENCY_A],
                                        onUserInput: ee,
                                        onMax: function() {
                                            var e, n;
                                            ee(null !== (e = null === (n = Oe[ds.CURRENCY_A]) || void 0 === n ? void 0 : n.toExact()) && void 0 !== e ? e : "")
                                        },
                                        showMaxButton: !xe[ds.CURRENCY_A],
                                        currency: _[ds.CURRENCY_A],
                                        id: "add-liquidity-input-tokena",
                                        showCommonBases: !1
                                    }), Object(r.jsx)(Le, {
                                        children: Object(r.jsx)(s.a, {
                                            color: "textSubtle"
                                        })
                                    }), Object(r.jsx)(eo, {
                                        value: me[ds.CURRENCY_B],
                                        onUserInput: ne,
                                        onCurrencySelect: _e,
                                        onMax: function() {
                                            var e, n;
                                            ne(null !== (e = null === (n = Oe[ds.CURRENCY_B]) || void 0 === n ? void 0 : n.toExact()) && void 0 !== e ? e : "")
                                        },
                                        showMaxButton: !xe[ds.CURRENCY_B],
                                        currency: _[ds.CURRENCY_B],
                                        id: "add-liquidity-input-tokenb",
                                        showCommonBases: !1
                                    }), _[ds.CURRENCY_A] && _[ds.CURRENCY_B] && z !== Wo.INVALID && Object(r.jsxs)("div", {
                                        children: [Object(r.jsx)(s.y, {
                                            style: {
                                                textTransform: "uppercase",
                                                fontWeight: 600
                                            },
                                            color: "textSubtle",
                                            fontSize: "12px",
                                            mb: "2px",
                                            children: W ? S(1164, "Initial prices and pool share") : S(1166, "Prices and pool share")
                                        }), Object(r.jsx)(zs, {
                                            children: Object(r.jsx)(su, {
                                                currencies: _,
                                                poolTokenPercentage: G,
                                                noLiquidity: W,
                                                price: V
                                            })
                                        })]
                                    }), k ? Object(r.jsxs)(De, {
                                        gap: "md",
                                        children: [(ke === ls.NOT_APPROVED || ke === ls.PENDING || Ee === ls.NOT_APPROVED || Ee === ls.PENDING) && te && Object(r.jsxs)(tn, {
                                            children: [ke !== ls.APPROVED && Object(r.jsx)(s.c, {
                                                onClick: Te,
                                                disabled: ke === ls.PENDING,
                                                style: {
                                                    width: Ee !== ls.APPROVED ? "48%" : "100%"
                                                },
                                                children: ke === ls.PENDING ? Object(r.jsxs)(cu, {
                                                    children: ["Approving ", null === (d = _[ds.CURRENCY_A]) || void 0 === d ? void 0 : d.symbol]
                                                }) : "Approve ".concat(null === (b = _[ds.CURRENCY_A]) || void 0 === b ? void 0 : b.symbol)
                                            }), Ee !== ls.APPROVED && Object(r.jsx)(s.c, {
                                                onClick: Se,
                                                disabled: Ee === ls.PENDING,
                                                style: {
                                                    width: ke !== ls.APPROVED ? "48%" : "100%"
                                                },
                                                children: Ee === ls.PENDING ? Object(r.jsxs)(cu, {
                                                    children: ["Approving ", null === (p = _[ds.CURRENCY_B]) || void 0 === p ? void 0 : p.symbol]
                                                }) : "Approve ".concat(null === (f = _[ds.CURRENCY_B]) || void 0 === f ? void 0 : f.symbol)
                                            })]
                                        }), Object(r.jsx)(s.c, {
                                            onClick: function() {
                                                U ? Ue() : ce(!0)
                                            },
                                            disabled: !te || ke !== ls.APPROVED || Ee !== ls.APPROVED,
                                            variant: !te && q[ds.CURRENCY_A] && q[ds.CURRENCY_B] ? "danger" : "primary",
                                            width: "100%",
                                            children: null !== Q && void 0 !== Q ? Q : "Supply"
                                        })]
                                    }) : Object(r.jsx)(Xs, {
                                        width: "100%"
                                    })]
                                })
                            })]
                        })]
                    }), Y && !W && z !== Wo.INVALID ? Object(r.jsx)(De, {
                        style: {
                            minWidth: "20rem",
                            marginTop: "1rem"
                        },
                        children: Object(r.jsx)(qo, {
                            showUnwrapped: R,
                            pair: Y
                        })
                    }) : null]
                })
            }
            var lu = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

            function du(e) {
                var n = e.match.params.currencyIdA.match(lu);
                return (null === n || void 0 === n ? void 0 : n.length) ? Object(r.jsx)(m.a, {
                    to: "/add/".concat(n[1], "/").concat(n[2])
                }) : Object(r.jsx)(uu, Object(X.a)({}, e))
            }

            function bu(e) {
                var n = e.match.params,
                    t = n.currencyIdA,
                    a = n.currencyIdB;
                return t.toLowerCase() === a.toLowerCase() ? Object(r.jsx)(m.a, {
                    to: "/add/".concat(t)
                }) : Object(r.jsx)(uu, Object(X.a)({}, e))
            }
            var pu = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

            function fu(e) {
                var n = e.match.params.tokens;
                if (!pu.test(n)) return Object(r.jsx)(m.a, {
                    to: "/pool"
                });
                var t = n.split("-"),
                    a = Object(y.a)(t, 2),
                    i = a[0],
                    c = a[1];
                return Object(r.jsx)(m.a, {
                    to: "/remove/".concat(i, "/").concat(c)
                })
            }

            function ju() {
                var e = Object(u.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"]);
                return ju = function() {
                    return e
                }, e
            }

            function hu() {
                var e = Object(u.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n\n  ", ":first-child {\n    padding-left: 0;\n  }\n\n  ", ":last-child {\n    padding-right: 0;\n  }\n\n  ", " {\n    flex-direction: row;\n  }\n"]);
                return hu = function() {
                    return e
                }, e
            }

            function yu() {
                var e = Object(u.a)(["\n  padding: 0 4px;\n"]);
                return yu = function() {
                    return e
                }, e
            }

            function vu() {
                var e = Object(u.a)(["\n  margin-bottom: 16px;\n"]);
                return vu = function() {
                    return e
                }, e
            }
            var mu = l.default.div(vu()),
                Ou = l.default.div(yu()),
                xu = l.default.div(hu(), Ou, Ou, (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                gu = l.default.div(ju()),
                Cu = [{
                    label: "0.1%",
                    value: .1
                }, {
                    label: "0.5%",
                    value: .5
                }, {
                    label: "1%",
                    value: 1
                }],
                wu = function(e) {
                    var n = e.translateString,
                        t = Zr(),
                        i = Object(y.a)(t, 2),
                        c = i[0],
                        o = i[1],
                        u = Object(a.useState)(c / 100),
                        l = Object(y.a)(u, 2),
                        d = l[0],
                        b = l[1],
                        p = Object(a.useState)(null),
                        f = Object(y.a)(p, 2),
                        j = f[0],
                        h = f[1];
                    return Object(a.useEffect)((function() {
                        try {
                            var e = 100 * d;
                            !Number.isNaN(e) && e > 0 && e < 5e3 ? (o(e), h(null)) : h(n(1144, "Enter a valid slippage percentage"))
                        } catch (t) {
                            h(n(1144, "Enter a valid slippage percentage"))
                        }
                    }), [d, h, o, n]), Object(a.useEffect)((function() {
                        c < 50 ? h(n(1146, "Your transaction may fail")) : c > 500 && h(n(1148, "Your transaction may be frontrun"))
                    }), [c, h, n]), Object(r.jsxs)(mu, {
                        children: [Object(r.jsxs)(gu, {
                            children: [Object(r.jsx)(s.y, {
                                style: {
                                    fontWeight: 600
                                },
                                children: n(88, "Slippage tolerance")
                            }), Object(r.jsx)(li, {
                                text: n(186, "Your transaction will revert if the price changes unfavorably by more than this percentage.")
                            })]
                        }), Object(r.jsxs)(xu, {
                            children: [Object(r.jsx)(s.n, {
                                mb: ["8px", 0],
                                mr: [0, "8px"],
                                children: Cu.map((function(e) {
                                    var n = e.label,
                                        t = e.value;
                                    return Object(r.jsx)(Ou, {
                                        children: Object(r.jsx)(s.c, {
                                            variant: d === t ? "primary" : "tertiary",
                                            onClick: function() {
                                                return b(t)
                                            },
                                            children: n
                                        })
                                    }, t)
                                }))
                            }), Object(r.jsxs)(s.n, {
                                alignItems: "center",
                                children: [Object(r.jsx)(Ou, {
                                    children: Object(r.jsx)(s.q, {
                                        type: "number",
                                        scale: "lg",
                                        step: .1,
                                        min: .1,
                                        placeholder: "5%",
                                        value: d,
                                        onChange: function(e) {
                                            var n = e.target.value;
                                            b(parseFloat(n))
                                        },
                                        isWarning: null !== j
                                    })
                                }), Object(r.jsx)(Ou, {
                                    children: Object(r.jsx)(s.y, {
                                        fontSize: "18px",
                                        children: "%"
                                    })
                                })]
                            })]
                        }), j && Object(r.jsx)(s.y, {
                            mt: "8px",
                            color: "failure",
                            children: j
                        })]
                    })
                };

            function ku() {
                var e = Object(u.a)(["\n  align-items: center;\n  display: inline-flex;\n\n  & > ", " {\n    max-width: 100px;\n  }\n\n  & > ", " {\n    font-size: 14px;\n    margin-left: 8px;\n  }\n"]);
                return ku = function() {
                    return e
                }, e
            }

            function Tu() {
                var e = Object(u.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"]);
                return Tu = function() {
                    return e
                }, e
            }

            function Iu() {
                var e = Object(u.a)(["\n  margin-bottom: 16px;\n"]);
                return Iu = function() {
                    return e
                }, e
            }
            var Nu = l.default.div(Iu()),
                Eu = l.default.div(Tu()),
                Su = l.default.div(ku(), s.q, s.y),
                Ru = function(e) {
                    var n = e.translateString,
                        t = ea(),
                        i = Object(y.a)(t, 2),
                        c = i[0],
                        o = i[1],
                        u = Object(a.useState)(c / 60),
                        l = Object(y.a)(u, 2),
                        d = l[0],
                        b = l[1],
                        p = Object(a.useState)(null),
                        f = Object(y.a)(p, 2),
                        j = f[0],
                        h = f[1];
                    return Object(a.useEffect)((function() {
                        try {
                            var e = 60 * d;
                            !Number.isNaN(e) && e > 0 ? (o(e), h(null)) : h(n(1150, "Enter a valid deadline"))
                        } catch (t) {
                            h(n(1150, "Enter a valid deadline"))
                        }
                    }), [d, h, o, n]), Object(r.jsxs)(Nu, {
                        children: [Object(r.jsxs)(Eu, {
                            children: [Object(r.jsx)(s.y, {
                                style: {
                                    fontWeight: 600
                                },
                                children: n(90, "Transaction deadline")
                            }), Object(r.jsx)(li, {
                                text: n(188, "Your transaction will revert if it is pending for more than this long.")
                            })]
                        }), Object(r.jsxs)(Su, {
                            children: [Object(r.jsx)(s.q, {
                                type: "number",
                                step: "1",
                                min: "1",
                                value: d,
                                onChange: function(e) {
                                    var n = e.target.value;
                                    b(parseInt(n, 10))
                                }
                            }), Object(r.jsx)(s.y, {
                                children: "Minutes"
                            })]
                        }), j && Object(r.jsx)(s.y, {
                            mt: "8px",
                            color: "failure",
                            children: j
                        })]
                    })
                },
                Uu = function() {
                    return null
                },
                Au = function(e) {
                    var n = e.onDismiss,
                        t = void 0 === n ? Uu : n,
                        a = e.translateString;
                    return Object(r.jsxs)(s.t, {
                        title: a(1200, "Settings"),
                        onDismiss: t,
                        children: [Object(r.jsx)(wu, {
                            translateString: a
                        }), Object(r.jsx)(Ru, {
                            translateString: a
                        })]
                    })
                },
                Bu = function() {
                    return null
                },
                Pu = function(e, n) {
                    return n.addedTime - e.addedTime
                },
                Mu = function(e) {
                    var n = e.onDismiss,
                        t = void 0 === n ? Bu : n,
                        i = e.translateString,
                        c = we(),
                        o = c.account,
                        u = c.chainId,
                        l = ss(),
                        d = Object(a.useMemo)((function() {
                            return Object.values(l).filter(us).sort(Pu)
                        }), [l]);
                    return Object(r.jsxs)(s.t, {
                        title: i(1202, "Recent transactions"),
                        onDismiss: t,
                        children: [!o && Object(r.jsxs)(s.n, {
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            children: [Object(r.jsx)(s.y, {
                                mb: "8px",
                                bold: !0,
                                children: "Please connect your wallet to view your recent transactions"
                            }), Object(r.jsx)(s.c, {
                                variant: "tertiary",
                                scale: "sm",
                                onClick: t,
                                children: "Close"
                            })]
                        }), o && u && 0 === d.length && Object(r.jsxs)(s.n, {
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            children: [Object(r.jsx)(s.y, {
                                mb: "8px",
                                bold: !0,
                                children: "No recent transactions"
                            }), Object(r.jsx)(s.c, {
                                variant: "tertiary",
                                scale: "sm",
                                onClick: t,
                                children: "Close"
                            })]
                        }), o && u && d.map((function(e) {
                            var n = e.hash,
                                t = e.summary,
                                a = function(e) {
                                    var n = e.hash,
                                        t = e.receipt;
                                    return n ? n && 1 === (null === t || void 0 === t ? void 0 : t.status) ? {
                                        icon: Object(r.jsx)(s.h, {
                                            color: "success"
                                        }),
                                        color: "success"
                                    } : {
                                        icon: Object(r.jsx)(s.m, {
                                            color: "failure"
                                        }),
                                        color: "failure"
                                    } : {
                                        icon: Object(r.jsx)(it, {}),
                                        color: "text"
                                    }
                                }(e),
                                i = a.icon,
                                c = a.color;
                            return Object(r.jsx)(r.Fragment, {
                                children: Object(r.jsxs)(s.n, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    mb: "4px",
                                    children: [Object(r.jsx)(s.r, {
                                        href: vn(u, n, "transaction"),
                                        color: c,
                                        children: null !== t && void 0 !== t ? t : n
                                    }), i]
                                }, n)
                            })
                        }))]
                    })
                };

            function Lu() {
                var e = Object(u.a)(["\n  flex: 1;\n"]);
                return Lu = function() {
                    return e
                }, e
            }

            function Du() {
                var e = Object(u.a)(["\n  border-bottom: 1px solid ", ";\n  padding: 24px;\n"]);
                return Du = function() {
                    return e
                }, e
            }
            var _u, Yu = function() {
                    return Object(r.jsx)(s.w, {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        children: Object(r.jsx)("path", {
                            d: "M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z",
                            fill: "currentColor"
                        })
                    })
                },
                zu = l.default.div(Du(), (function(e) {
                    return e.theme.colors.borderColor
                })),
                Fu = l.default.div(Lu()),
                qu = function(e) {
                    var n = e.title,
                        t = e.description,
                        a = e.children,
                        i = nr(),
                        c = Object(s.E)(Object(r.jsx)(Au, {
                            translateString: i
                        })),
                        o = Object(y.a)(c, 1)[0],
                        u = Object(s.E)(Object(r.jsx)(Mu, {
                            translateString: i
                        })),
                        l = Object(y.a)(u, 1)[0];
                    return Object(r.jsxs)(zu, {
                        children: [Object(r.jsxs)(s.n, {
                            alignItems: "center",
                            children: [Object(r.jsxs)(Fu, {
                                children: [Object(r.jsx)(s.o, {
                                    mb: "8px",
                                    children: n
                                }), t && Object(r.jsx)(s.y, {
                                    color: "textSubtle",
                                    fontSize: "14px",
                                    children: t
                                })]
                            }), Object(r.jsx)(s.p, {
                                variant: "text",
                                onClick: o,
                                title: i(1200, "Settings"),
                                children: Object(r.jsx)(s.k, {
                                    width: "24px",
                                    color: "currentColor"
                                })
                            }), Object(r.jsx)(s.p, {
                                variant: "text",
                                onClick: l,
                                title: i(1202, "Recent transactions"),
                                children: Object(r.jsx)(Yu, {})
                            })]
                        }), a && Object(r.jsx)(s.y, {
                            mt: "16px",
                            children: a
                        })]
                    })
                };

            function Vu() {
                var e = Object(a.useContext)(l.ThemeContext),
                    n = we().account,
                    t = nr(),
                    i = function() {
                        var e = we().chainId,
                            n = ha(),
                            t = Object(a.useMemo)((function() {
                                var n;
                                return e && null !== (n = be[e]) && void 0 !== n ? n : []
                            }), [e]),
                            r = Object(a.useMemo)((function() {
                                return e ? Lr()(Object.keys(n), (function(t) {
                                    var r, a = n[t];
                                    return (null !== (r = de[e]) && void 0 !== r ? r : []).map((function(e) {
                                        return e.address === a.address ? null : [e, a]
                                    })).filter((function(e) {
                                        return null !== e
                                    }))
                                })) : []
                            }), [n, e]),
                            i = Object(x.d)((function(e) {
                                return e.user.pairs
                            })),
                            c = Object(a.useMemo)((function() {
                                if (!e || !i) return [];
                                var n = i[e];
                                return n ? Object.keys(n).map((function(e) {
                                    return [Xr(n[e].token0), Xr(n[e].token1)]
                                })) : []
                            }), [i, e]),
                            o = Object(a.useMemo)((function() {
                                return c.concat(r).concat(t)
                            }), [r, t, c]);
                        return Object(a.useMemo)((function() {
                            var e = o.reduce((function(e, n) {
                                var t = Object(y.a)(n, 2),
                                    r = t[0],
                                    a = t[1],
                                    i = r.sortsBefore(a),
                                    c = i ? "".concat(r.address, ":").concat(a.address) : "".concat(a.address, ":").concat(r.address);
                                return e[c] || (e[c] = i ? [r, a] : [a, r]), e
                            }), {});
                            return Object.keys(e).map((function(n) {
                                return e[n]
                            }))
                        }), [o])
                    }(),
                    c = Object(a.useMemo)((function() {
                        return i.map((function(e) {
                            return {
                                liquidityToken: ra(e),
                                tokens: e
                            }
                        }))
                    }), [i]),
                    o = ga(null !== n && void 0 !== n ? n : void 0, Object(a.useMemo)((function() {
                        return c.map((function(e) {
                            return e.liquidityToken
                        }))
                    }), [c])),
                    u = Object(y.a)(o, 2),
                    d = u[0],
                    b = u[1],
                    p = Object(a.useMemo)((function() {
                        return c.filter((function(e) {
                            var n, t = e.liquidityToken;
                            return null === (n = d[t.address]) || void 0 === n ? void 0 : n.greaterThan("0")
                        }))
                    }), [c, d]),
                    f = Go(p.map((function(e) {
                        return e.tokens
                    }))),
                    j = b || (null === f || void 0 === f ? void 0 : f.length) < p.length || (null === f || void 0 === f ? void 0 : f.some((function(e) {
                        return !e
                    }))),
                    h = f.map((function(e) {
                        return Object(y.a)(e, 2)[1]
                    })).filter((function(e) {
                        return Boolean(e)
                    }));
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(ir, {
                        activeIndex: 1
                    }), Object(r.jsxs)(eu, {
                        children: [Object(r.jsx)(qu, {
                            title: t(262, "Liquidity"),
                            description: t(1168, "Add liquidity to receive LP tokens"),
                            children: Object(r.jsx)(s.c, {
                                id: "join-pool-button",
                                as: v.b,
                                to: "/add/0xf06Be7919E41394C7087ac2B2549C9c769d0fb04",
                                children: t(168, "Add Liquidity")
                            })
                        }), Object(r.jsx)(De, {
                            gap: "lg",
                            justify: "center",
                            children: Object(r.jsx)(s.g, {
                                children: Object(r.jsxs)(De, {
                                    gap: "12px",
                                    style: {
                                        width: "100%"
                                    },
                                    children: [Object(r.jsxs)(tn, {
                                        padding: "0 8px",
                                        children: [Object(r.jsx)(s.y, {
                                            color: e.colors.text,
                                            children: t(107, "Your Liquidity")
                                        }), Object(r.jsx)(li, {
                                            text: t(1170, "When you add liquidity, you are given pool tokens that represent your share. If you don\u2019t see a pool you joined in this list, try importing a pool below.")
                                        })]
                                    }), n ? j ? Object(r.jsx)(ht, {
                                        padding: "40px",
                                        children: Object(r.jsx)(s.y, {
                                            color: "textDisabled",
                                            textAlign: "center",
                                            children: Object(r.jsx)(Bo, {
                                                children: "Loading"
                                            })
                                        })
                                    }) : (null === h || void 0 === h ? void 0 : h.length) > 0 ? Object(r.jsx)(r.Fragment, {
                                        children: h.map((function(e) {
                                            return Object(r.jsx)(Vo, {
                                                pair: e
                                            }, e.liquidityToken.address)
                                        }))
                                    }) : Object(r.jsx)(ht, {
                                        padding: "40px",
                                        children: Object(r.jsx)(s.y, {
                                            color: "textDisabled",
                                            textAlign: "center",
                                            children: t(104, "No liquidity found.")
                                        })
                                    }) : Object(r.jsx)(ht, {
                                        padding: "40px",
                                        children: Object(r.jsx)(s.y, {
                                            color: "textDisabled",
                                            textAlign: "center",
                                            children: t(156, "Connect to a wallet to view your liquidity.")
                                        })
                                    }), Object(r.jsxs)("div", {
                                        children: [Object(r.jsxs)(s.y, {
                                            fontSize: "14px",
                                            style: {
                                                padding: ".5rem 0 .5rem 0"
                                            },
                                            children: [t(106, "Don't see a pool you joined?"), " ", Object(r.jsx)(Rn, {
                                                id: "import-pool-link",
                                                to: "/find",
                                                children: t(108, "Import it.")
                                            })]
                                        }), Object(r.jsx)(s.y, {
                                            fontSize: "14px",
                                            style: {
                                                padding: ".5rem 0 .5rem 0"
                                            },
                                            children: t(1172, "Or, if you staked your LP tokens in a farm, unstake them to see them here.")
                                        })]
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }

            function Wu() {
                var e, n = we().account,
                    t = Object(a.useState)(!1),
                    i = Object(y.a)(t, 2),
                    c = i[0],
                    o = i[1],
                    u = Object(a.useState)(_u.TOKEN1),
                    l = Object(y.a)(u, 2),
                    d = l[0],
                    b = l[1],
                    p = Object(a.useState)($.d),
                    f = Object(y.a)(p, 2),
                    j = f[0],
                    h = f[1],
                    v = Object(a.useState)(null),
                    m = Object(y.a)(v, 2),
                    O = m[0],
                    g = m[1],
                    C = Qo(null !== j && void 0 !== j ? j : void 0, null !== O && void 0 !== O ? O : void 0),
                    w = Object(y.a)(C, 2),
                    k = w[0],
                    T = w[1],
                    I = function() {
                        var e = Object(x.c)();
                        return Object(a.useCallback)((function(n) {
                            e(Wr({
                                serializedPair: ta(n)
                            }))
                        }), [e])
                    }(),
                    N = nr();
                Object(a.useEffect)((function() {
                    T && I(T)
                }), [T, I]);
                var E = k === Wo.NOT_EXISTS || Boolean(k === Wo.EXISTS && T && $.e.equal(T.reserve0.raw, $.e.BigInt(0)) && $.e.equal(T.reserve1.raw, $.e.BigInt(0))),
                    S = wa(null !== n && void 0 !== n ? n : void 0, null === T || void 0 === T ? void 0 : T.liquidityToken),
                    R = Boolean(S && $.e.greaterThan(S.raw, $.e.BigInt(0))),
                    U = Object(a.useCallback)((function(e) {
                        d === _u.TOKEN0 ? h(e) : g(e)
                    }), [d]),
                    A = Object(a.useCallback)((function() {
                        o(!1)
                    }), [o]),
                    B = Object(r.jsx)(ht, {
                        padding: "45px 10px",
                        children: Object(r.jsx)(s.y, {
                            style: {
                                textAlign: "center"
                            },
                            children: n ? N(208, "Select a token to find your liquidity.") : N(1174, "Connect to a wallet to find pools")
                        })
                    });
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(ir, {
                        activeIndex: 1
                    }), Object(r.jsxs)(eu, {
                        children: [Object(r.jsx)(oo, {}), Object(r.jsxs)(s.g, {
                            children: [Object(r.jsxs)(De, {
                                gap: "md",
                                children: [Object(r.jsx)(s.c, {
                                    onClick: function() {
                                        o(!0), b(_u.TOKEN0)
                                    },
                                    startIcon: j ? Object(r.jsx)(vi, {
                                        currency: j,
                                        style: {
                                            marginRight: ".5rem"
                                        }
                                    }) : null,
                                    endIcon: Object(r.jsx)(s.i, {
                                        width: "24px",
                                        color: "white"
                                    }),
                                    width: "100%",
                                    children: j ? j.symbol : N(82, "Select a Token")
                                }), Object(r.jsx)(Le, {
                                    children: Object(r.jsx)(s.a, {
                                        color: "textSubtle"
                                    })
                                }), Object(r.jsx)(s.c, {
                                    onClick: function() {
                                        o(!0), b(_u.TOKEN1)
                                    },
                                    startIcon: O ? Object(r.jsx)(vi, {
                                        currency: O,
                                        style: {
                                            marginRight: ".5rem"
                                        }
                                    }) : null,
                                    endIcon: Object(r.jsx)(s.i, {
                                        width: "24px",
                                        color: "white"
                                    }),
                                    width: "100%",
                                    children: O ? O.symbol : N(82, "Select a Token")
                                }), R && Object(r.jsx)(Le, {
                                    style: {
                                        justifyItems: "center",
                                        backgroundColor: "",
                                        padding: "12px 0px",
                                        borderRadius: "12px"
                                    },
                                    children: Object(r.jsx)(s.y, {
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: N(210, "Pool found!")
                                    })
                                }), j && O ? k === Wo.EXISTS ? R && T ? Object(r.jsx)(qo, {
                                    pair: T
                                }) : Object(r.jsx)(ht, {
                                    padding: "45px 10px",
                                    children: Object(r.jsxs)(De, {
                                        gap: "sm",
                                        justify: "center",
                                        children: [Object(r.jsx)(s.y, {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: N(212, "You don\u2019t have liquidity in this pool yet.")
                                        }), Object(r.jsx)(Rn, {
                                            to: "/add/".concat(po(j), "/").concat(po(O)),
                                            children: Object(r.jsx)(s.y, {
                                                style: {
                                                    textAlign: "center"
                                                },
                                                children: N(168, "Add Liquidity")
                                            })
                                        })]
                                    })
                                }) : E ? Object(r.jsx)(ht, {
                                    padding: "45px 10px",
                                    children: Object(r.jsxs)(De, {
                                        gap: "sm",
                                        justify: "center",
                                        children: [Object(r.jsx)(s.y, {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: N(214, "No pool found.")
                                        }), Object(r.jsx)(Rn, {
                                            to: "/add/".concat(po(j), "/").concat(po(O)),
                                            children: "Create pool."
                                        })]
                                    })
                                }) : k === Wo.INVALID ? Object(r.jsx)(ht, {
                                    padding: "45px 10px",
                                    children: Object(r.jsx)(De, {
                                        gap: "sm",
                                        justify: "center",
                                        children: Object(r.jsx)(s.y, {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: N(136, "Invalid pair.")
                                        })
                                    })
                                }) : k === Wo.LOADING ? Object(r.jsx)(ht, {
                                    padding: "45px 10px",
                                    children: Object(r.jsx)(De, {
                                        gap: "sm",
                                        justify: "center",
                                        children: Object(r.jsxs)(s.y, {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: ["Loading", Object(r.jsx)(cu, {})]
                                        })
                                    })
                                }) : null : B]
                            }), Object(r.jsx)(Sc, {
                                isOpen: c,
                                onCurrencySelect: U,
                                onDismiss: A,
                                showCommonBases: !0,
                                selectedCurrency: null !== (e = d === _u.TOKEN0 ? O : j) && void 0 !== e ? e : void 0
                            })]
                        })]
                    })]
                })
            }! function(e) {
                e[e.TOKEN0 = 0] = "TOKEN0", e[e.TOKEN1 = 1] = "TOKEN1"
            }(_u || (_u = {}));
            var Hu = t(2),
                Gu = t(575),
                Qu = t(576);

            function Ku() {
                var e = Object(u.a)(["\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(\n      90deg,\n      ", ",\n      ", "\n    );\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(\n      90deg,\n      ", ",\n      ", "\n    );\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ", ";\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ", ";\n  }\n  &::-ms-fill-upper {\n    background: ", ";\n  }\n"]);
                return Ku = function() {
                    return e
                }, e
            }
            var Ju, Xu = l.default.input(Ku(), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.theme.colors.invertedContrast
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.theme.colors.invertedContrast
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.theme.colors.invertedContrast
            }), (function(e) {
                return e.theme.colors.primaryDark
            }), (function(e) {
                return e.theme.colors.tertiary
            }), (function(e) {
                return e.theme.colors.primaryDark
            }), (function(e) {
                return e.theme.colors.tertiary
            }), (function(e) {
                return e.theme.colors.primaryDark
            }), (function(e) {
                return e.theme.colors.primaryDark
            }), (function(e) {
                return e.theme.colors.tertiary
            }));

            function $u(e) {
                var n = e.value,
                    t = e.onChange,
                    i = e.min,
                    c = void 0 === i ? 0 : i,
                    o = e.step,
                    s = void 0 === o ? 1 : o,
                    u = e.max,
                    l = void 0 === u ? 100 : u,
                    d = e.size,
                    b = void 0 === d ? 28 : d,
                    p = Object(a.useCallback)((function(e) {
                        t(parseInt(e.target.value))
                    }), [t]);
                return Object(r.jsx)(Xu, {
                    size: b,
                    type: "range",
                    value: n,
                    style: {
                        width: "90%",
                        marginLeft: 15,
                        marginRight: 15,
                        padding: "15px 0"
                    },
                    onChange: p,
                    "aria-labelledby": "input slider",
                    step: s,
                    min: c,
                    max: l
                })
            }! function(e) {
                e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT", e.LIQUIDITY = "LIQUIDITY", e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
            }(Ju || (Ju = {}));
            var Zu = Object(ke.b)("burn/typeInputBurn");

            function el() {
                return Object(x.d)((function(e) {
                    return e.burn
                }))
            }

            function nl() {
                var e = Object(u.a)(["\n  padding-left: 24px;\n  padding-right: 24px;\n"]);
                return nl = function() {
                    return e
                }, e
            }

            function tl() {
                var e = Object(u.a)(["\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding: 24px;\n"]);
                return tl = function() {
                    return e
                }, e
            }
            var rl = l.default.div(tl(), (function(e) {
                    return e.theme.colors.borderColor
                })),
                al = l.default.div(nl());

            function il(e) {
                var n, t, i, c, o, u, d, b, p, f, v, m, O, g, C = e.history,
                    k = e.match.params,
                    T = k.currencyIdA,
                    I = k.currencyIdB,
                    N = null !== (n = Oa(T)) && void 0 !== n ? n : void 0,
                    E = null !== (t = Oa(I)) && void 0 !== t ? t : void 0,
                    S = we(),
                    R = S.account,
                    U = S.chainId,
                    A = S.library,
                    B = nr(),
                    P = Object(a.useMemo)((function() {
                        return [fo(N, U), fo(E, U)]
                    }), [N, E, U]),
                    M = Object(y.a)(P, 2),
                    L = M[0],
                    D = M[1],
                    _ = Object(a.useContext)(l.ThemeContext),
                    Y = el(),
                    z = Y.independentField,
                    F = Y.typedValue,
                    q = function(e, n) {
                        var t, r, a, i, c, o = we(),
                            s = o.account,
                            u = o.chainId,
                            l = el(),
                            d = l.independentField,
                            b = l.typedValue,
                            p = Qo(e, n),
                            f = Object(y.a)(p, 2)[1],
                            j = Ca(null !== s && void 0 !== s ? s : void 0, [null === f || void 0 === f ? void 0 : f.liquidityToken]),
                            h = null === j || void 0 === j ? void 0 : j[null !== (t = null === f || void 0 === f || null === (r = f.liquidityToken) || void 0 === r ? void 0 : r.address) && void 0 !== t ? t : ""],
                            v = [fo(e, u), fo(n, u)],
                            m = v[0],
                            O = v[1],
                            x = (a = {}, Object(w.a)(a, Ju.CURRENCY_A, m), Object(w.a)(a, Ju.CURRENCY_B, O), Object(w.a)(a, Ju.LIQUIDITY, null === f || void 0 === f ? void 0 : f.liquidityToken), a),
                            g = bo(null === f || void 0 === f ? void 0 : f.liquidityToken),
                            C = f && g && h && m && $.e.greaterThanOrEqual(g.raw, h.raw) ? new $.k(m, f.getLiquidityValue(m, g, h, !1).raw) : void 0,
                            k = f && g && h && O && $.e.greaterThanOrEqual(g.raw, h.raw) ? new $.k(O, f.getLiquidityValue(O, g, h, !1).raw) : void 0,
                            T = (i = {}, Object(w.a)(i, Ju.CURRENCY_A, C), Object(w.a)(i, Ju.CURRENCY_B, k), i),
                            I = new $.g("0", "100");
                        if (d === Ju.LIQUIDITY_PERCENT) I = new $.g(b, "100");
                        else if (d === Ju.LIQUIDITY) {
                            if (null === f || void 0 === f ? void 0 : f.liquidityToken) {
                                var N = Ns(b, f.liquidityToken);
                                N && h && !N.greaterThan(h) && (I = new $.g(N.raw, h.raw))
                            }
                        } else if (x[d]) {
                            var E = Ns(b, x[d]),
                                S = T[d];
                            E && S && !E.greaterThan(S) && (I = new $.g(E.raw, S.raw))
                        }
                        var R, U, A = (c = {}, Object(w.a)(c, Ju.LIQUIDITY_PERCENT, I), Object(w.a)(c, Ju.LIQUIDITY, h && I && I.greaterThan("0") ? new $.k(h.token, I.multiply(h.raw).quotient) : void 0), Object(w.a)(c, Ju.CURRENCY_A, m && I && I.greaterThan("0") && C ? new $.k(m, I.multiply(C.raw).quotient) : void 0), Object(w.a)(c, Ju.CURRENCY_B, O && I && I.greaterThan("0") && k ? new $.k(O, I.multiply(k.raw).quotient) : void 0), c);
                        return s || (R = "Connect Wallet"), A[Ju.LIQUIDITY] && A[Ju.CURRENCY_A] && A[Ju.CURRENCY_B] || (R = null !== (U = R) && void 0 !== U ? U : "Enter an amount"), {
                            pair: f,
                            parsedAmounts: A,
                            error: R
                        }
                    }(null !== N && void 0 !== N ? N : void 0, null !== E && void 0 !== E ? E : void 0),
                    V = q.pair,
                    W = q.parsedAmounts,
                    H = q.error,
                    G = function() {
                        var e = Object(x.c)();
                        return {
                            onUserInput: Object(a.useCallback)((function(n, t) {
                                e(Zu({
                                    field: n,
                                    typedValue: t
                                }))
                            }), [e])
                        }
                    }().onUserInput,
                    Q = !H,
                    K = Object(a.useState)(!1),
                    X = Object(y.a)(K, 2),
                    ee = X[0],
                    ne = X[1],
                    te = Object(a.useState)(!1),
                    re = Object(y.a)(te, 2),
                    ae = re[0],
                    ie = re[1],
                    ce = Object(a.useState)(!1),
                    oe = Object(y.a)(ce, 2),
                    se = oe[0],
                    ue = oe[1],
                    le = Object(a.useState)(""),
                    de = Object(y.a)(le, 2),
                    be = de[0],
                    pe = de[1],
                    fe = ea(),
                    je = Object(y.a)(fe, 1)[0],
                    he = Zr(),
                    ye = Object(y.a)(he, 1)[0],
                    ve = (p = {}, Object(w.a)(p, Ju.LIQUIDITY_PERCENT, W[Ju.LIQUIDITY_PERCENT].equalTo("0") ? "0" : W[Ju.LIQUIDITY_PERCENT].lessThan(new $.g("1", "100")) ? "<1" : W[Ju.LIQUIDITY_PERCENT].toFixed(0)), Object(w.a)(p, Ju.LIQUIDITY, z === Ju.LIQUIDITY ? F : null !== (i = null === (c = W[Ju.LIQUIDITY]) || void 0 === c ? void 0 : c.toSignificant(6)) && void 0 !== i ? i : ""), Object(w.a)(p, Ju.CURRENCY_A, z === Ju.CURRENCY_A ? F : null !== (o = null === (u = W[Ju.CURRENCY_A]) || void 0 === u ? void 0 : u.toSignificant(6)) && void 0 !== o ? o : ""), Object(w.a)(p, Ju.CURRENCY_B, z === Ju.CURRENCY_B ? F : null !== (d = null === (b = W[Ju.CURRENCY_B]) || void 0 === b ? void 0 : b.toSignificant(6)) && void 0 !== d ? d : ""), p),
                    me = null === (f = W[Ju.LIQUIDITY_PERCENT]) || void 0 === f ? void 0 : f.equalTo(new $.g("1")),
                    Oe = da(null === V || void 0 === V || null === (v = V.liquidityToken) || void 0 === v ? void 0 : v.address, ia.a, g),
                    xe = Object(a.useState)(null),
                    ge = Object(y.a)(xe, 2),
                    Ce = ge[0],
                    ke = ge[1],
                    Te = ms(W[Ju.LIQUIDITY], Z),
                    Ie = Object(y.a)(Te, 2),
                    Ne = Ie[0],
                    Ee = Ie[1];

                function Se() {
                    return (Se = Object(h.a)(j.a.mark((function e() {
                        var n, t, r, a, i, c, o, s;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Oe && V && A) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("missing dependencies");
                                case 2:
                                    if (n = W[Ju.LIQUIDITY]) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("missing liquidity amount");
                                case 5:
                                    return e.next = 7, Oe.nonces(R);
                                case 7:
                                    t = e.sent, r = Math.ceil(Date.now() / 1e3) + je, a = [{
                                        name: "name",
                                        type: "string"
                                    }, {
                                        name: "version",
                                        type: "string"
                                    }, {
                                        name: "chainId",
                                        type: "uint256"
                                    }, {
                                        name: "verifyingContract",
                                        type: "address"
                                    }], i = {
                                        name: "Pancake LPs",
                                        version: "1",
                                        chainId: U,
                                        verifyingContract: V.liquidityToken.address
                                    }, c = [{
                                        name: "owner",
                                        type: "address"
                                    }, {
                                        name: "spender",
                                        type: "address"
                                    }, {
                                        name: "value",
                                        type: "uint256"
                                    }, {
                                        name: "nonce",
                                        type: "uint256"
                                    }, {
                                        name: "deadline",
                                        type: "uint256"
                                    }], o = {
                                        owner: R,
                                        spender: Z,
                                        value: n.raw.toString(),
                                        nonce: t.toHexString(),
                                        deadline: r
                                    }, s = JSON.stringify({
                                        types: {
                                            EIP712Domain: a,
                                            Permit: c
                                        },
                                        domain: i,
                                        primaryType: "Permit",
                                        message: o
                                    }), A.send("eth_signTypedData_v4", [R, s]).then(Hu.splitSignature).then((function(e) {
                                        ke({
                                            v: e.v,
                                            r: e.r,
                                            s: e.s,
                                            deadline: r
                                        })
                                    })).catch((function(e) {
                                        4001 !== (null === e || void 0 === e ? void 0 : e.code) && Ee()
                                    }));
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var Re = Object(a.useCallback)((function(e, n) {
                        return ke(null), G(e, n)
                    }), [G]),
                    Ue = Object(a.useCallback)((function(e) {
                        return Re(Ju.LIQUIDITY, e)
                    }), [Re]),
                    Ae = Object(a.useCallback)((function(e) {
                        return Re(Ju.CURRENCY_A, e)
                    }), [Re]),
                    Be = Object(a.useCallback)((function(e) {
                        return Re(Ju.CURRENCY_B, e)
                    }), [Re]),
                    Pe = os();

                function Me() {
                    return _e.apply(this, arguments)
                }

                function _e() {
                    return (_e = Object(h.a)(j.a.mark((function e() {
                        var n, t, r, a, i, c, o, s, u, l, d, b, p, f, h;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (U && A && R) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("missing dependencies");
                                case 2:
                                    if (t = W[Ju.CURRENCY_A], r = W[Ju.CURRENCY_B], t && r) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("missing currency amounts");
                                case 5:
                                    if (a = Cn(0, A, R), n = {}, Object(w.a)(n, Ju.CURRENCY_A, xn(t, ye)[0]), Object(w.a)(n, Ju.CURRENCY_B, xn(r, ye)[0]), i = n, N && E) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Error("missing tokens");
                                case 9:
                                    if (c = W[Ju.LIQUIDITY]) {
                                        e.next = 12;
                                        break
                                    }
                                    throw new Error("missing liquidity amount");
                                case 12:
                                    if (o = E === $.d, s = N === $.d || o, u = Math.ceil(Date.now() / 1e3) + je, L && D) {
                                        e.next = 17;
                                        break
                                    }
                                    throw new Error("could not wrap");
                                case 17:
                                    if (Ne !== ls.APPROVED) {
                                        e.next = 21;
                                        break
                                    }
                                    s ? (l = ["removeLiquidityETH", "removeLiquidityETHSupportingFeeOnTransferTokens"], d = [o ? L.address : D.address, c.raw.toString(), i[o ? Ju.CURRENCY_A : Ju.CURRENCY_B].toString(), i[o ? Ju.CURRENCY_B : Ju.CURRENCY_A].toString(), R, u]) : (l = ["removeLiquidity"], d = [L.address, D.address, c.raw.toString(), i[Ju.CURRENCY_A].toString(), i[Ju.CURRENCY_B].toString(), R, u]), e.next = 26;
                                    break;
                                case 21:
                                    if (null === Ce) {
                                        e.next = 25;
                                        break
                                    }
                                    s ? (l = ["removeLiquidityETHWithPermit", "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"], d = [o ? L.address : D.address, c.raw.toString(), i[o ? Ju.CURRENCY_A : Ju.CURRENCY_B].toString(), i[o ? Ju.CURRENCY_B : Ju.CURRENCY_A].toString(), R, Ce.deadline, !1, Ce.v, Ce.r, Ce.s]) : (l = ["removeLiquidityWithPermit"], d = [L.address, D.address, c.raw.toString(), i[Ju.CURRENCY_A].toString(), i[Ju.CURRENCY_B].toString(), R, Ce.deadline, !1, Ce.v, Ce.r, Ce.s]), e.next = 26;
                                    break;
                                case 25:
                                    throw new Error("Attempting to confirm without approval or a signature. Please contact support.");
                                case 26:
                                    return e.next = 28, Promise.all(l.map((function(e, n) {
                                        var t;
                                        return (t = a.estimateGas)[e].apply(t, Object(J.a)(d)).then(On).catch((function(t) {
                                            console.error("estimateGas failed", n, e, d, t)
                                        }))
                                    })));
                                case 28:
                                    if (b = e.sent, -1 !== (p = b.findIndex((function(e) {
                                            return fn.a.isBigNumber(e)
                                        })))) {
                                        e.next = 34;
                                        break
                                    }
                                    console.error("This transaction would fail. Please contact support."), e.next = 39;
                                    break;
                                case 34:
                                    return f = l[p], h = b[p], ue(!0), e.next = 39, a[f].apply(a, Object(J.a)(d).concat([{
                                        gasLimit: h
                                    }])).then((function(e) {
                                        var n, t;
                                        ue(!1), Pe(e, {
                                            summary: "Remove ".concat(null === (n = W[Ju.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(3), " ").concat(null === N || void 0 === N ? void 0 : N.symbol, " and ").concat(null === (t = W[Ju.CURRENCY_B]) || void 0 === t ? void 0 : t.toSignificant(3), " ").concat(null === E || void 0 === E ? void 0 : E.symbol)
                                        }), pe(e.hash)
                                    })).catch((function(e) {
                                        ue(!1), console.error(e)
                                    }));
                                case 39:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Ye() {
                    var e, n;
                    return Object(r.jsxs)(De, {
                        gap: "md",
                        style: {
                            marginTop: "20px"
                        },
                        children: [Object(r.jsxs)(tn, {
                            align: "flex-end",
                            children: [Object(r.jsx)(s.y, {
                                fontSize: "24px",
                                children: null === (e = W[Ju.CURRENCY_A]) || void 0 === e ? void 0 : e.toSignificant(6)
                            }), Object(r.jsxs)(cn, {
                                gap: "4px",
                                children: [Object(r.jsx)(vi, {
                                    currency: N,
                                    size: "24px"
                                }), Object(r.jsx)(s.y, {
                                    fontSize: "24px",
                                    style: {
                                        marginLeft: "10px"
                                    },
                                    children: null === N || void 0 === N ? void 0 : N.symbol
                                })]
                            })]
                        }), Object(r.jsx)(cn, {
                            children: Object(r.jsx)(Gu.a, {
                                size: "16",
                                color: _.colors.textSubtle
                            })
                        }), Object(r.jsxs)(tn, {
                            align: "flex-end",
                            children: [Object(r.jsx)(s.y, {
                                fontSize: "24px",
                                children: null === (n = W[Ju.CURRENCY_B]) || void 0 === n ? void 0 : n.toSignificant(6)
                            }), Object(r.jsxs)(cn, {
                                gap: "4px",
                                children: [Object(r.jsx)(vi, {
                                    currency: E,
                                    size: "24px"
                                }), Object(r.jsx)(s.y, {
                                    fontSize: "24px",
                                    style: {
                                        marginLeft: "10px"
                                    },
                                    children: null === E || void 0 === E ? void 0 : E.symbol
                                })]
                            })]
                        }), Object(r.jsx)(s.y, {
                            small: !0,
                            color: "textSubtle",
                            textAlign: "left",
                            padding: "12px 0 0 0",
                            style: {
                                fontStyle: "italic"
                            },
                            children: "Output is estimated. If the price changes by more than ".concat(ye / 100, "% your transaction will revert.")
                        })]
                    })
                }

                function ze() {
                    var e;
                    return Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsxs)(tn, {
                            children: [Object(r.jsxs)(s.y, {
                                color: "textSubtle",
                                children: ["LP ".concat(null === N || void 0 === N ? void 0 : N.symbol, "/").concat(null === E || void 0 === E ? void 0 : E.symbol), " Burned"]
                            }), Object(r.jsxs)(cn, {
                                children: [Object(r.jsx)(Lc, {
                                    currency0: N,
                                    currency1: E,
                                    margin: !0
                                }), Object(r.jsx)(s.y, {
                                    children: null === (e = W[Ju.LIQUIDITY]) || void 0 === e ? void 0 : e.toSignificant(6)
                                })]
                            })]
                        }), V && Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsxs)(tn, {
                                children: [Object(r.jsx)(s.y, {
                                    color: "textSubtle",
                                    children: B(1182, "Price")
                                }), Object(r.jsxs)(s.y, {
                                    children: ["1 ", null === N || void 0 === N ? void 0 : N.symbol, " = ", L ? V.priceOf(L).toSignificant(6) : "-", " ", null === E || void 0 === E ? void 0 : E.symbol]
                                })]
                            }), Object(r.jsxs)(tn, {
                                children: [Object(r.jsx)("div", {}), Object(r.jsxs)(s.y, {
                                    children: ["1 ", null === E || void 0 === E ? void 0 : E.symbol, " = ", D ? V.priceOf(D).toSignificant(6) : "-", " ", null === N || void 0 === N ? void 0 : N.symbol]
                                })]
                            })]
                        }), Object(r.jsx)(s.c, {
                            disabled: !(Ne === ls.APPROVED || null !== Ce),
                            onClick: Me,
                            children: B(1136, "Confirm")
                        })]
                    })
                }
                var Fe = "Removing ".concat(null === (m = W[Ju.CURRENCY_A]) || void 0 === m ? void 0 : m.toSignificant(6), " ").concat(null === N || void 0 === N ? void 0 : N.symbol, " and ").concat(null === (O = W[Ju.CURRENCY_B]) || void 0 === O ? void 0 : O.toSignificant(6), " ").concat(null === E || void 0 === E ? void 0 : E.symbol),
                    qe = Object(a.useCallback)((function(e) {
                        Re(Ju.LIQUIDITY_PERCENT, e.toString())
                    }), [Re]),
                    Ve = N === $.d || E === $.d,
                    We = Boolean(U && (N && Object($.o)($.n[U], N) || E && Object($.o)($.n[U], E))),
                    He = Object(a.useCallback)((function(e) {
                        I && po(e) === I ? C.push("/remove/".concat(po(e), "/").concat(T)) : C.push("/remove/".concat(po(e), "/").concat(I))
                    }), [T, I, C]),
                    Ge = Object(a.useCallback)((function(e) {
                        T && po(e) === T ? C.push("/remove/".concat(I, "/").concat(po(e))) : C.push("/remove/".concat(T, "/").concat(po(e)))
                    }), [T, I, C]),
                    Qe = Object(a.useCallback)((function() {
                        ne(!1), ke(null), be && Re(Ju.LIQUIDITY_PERCENT, "0"), pe("")
                    }), [Re, be]),
                    Ke = function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                            r = Object(a.useState)((function() {
                                return e
                            })),
                            i = Object(y.a)(r, 2),
                            c = i[0],
                            o = i[1],
                            s = Object(a.useRef)(),
                            u = Object(a.useCallback)((function(e) {
                                o(e), s.current && clearTimeout(s.current), s.current = setTimeout((function() {
                                    n(e), s.current = void 0
                                }), t)
                            }), [t, n]);
                        return Object(a.useEffect)((function() {
                            s.current && (clearTimeout(s.current), s.current = void 0), o(e)
                        }), [e]), [c, u]
                    }(Number.parseInt(W[Ju.LIQUIDITY_PERCENT].toFixed(0)), qe),
                    Je = Object(y.a)(Ke, 2),
                    Xe = Je[0],
                    $e = Je[1];
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsxs)(eu, {
                        children: [Object(r.jsx)(so, {
                            adding: !1
                        }), Object(r.jsxs)(au, {
                            children: [Object(r.jsx)(Kt, {
                                isOpen: ee,
                                onDismiss: Qe,
                                attemptingTxn: se,
                                hash: be || "",
                                content: function() {
                                    return Object(r.jsx)(Ht, {
                                        title: B(1156, "You will receive"),
                                        onDismiss: Qe,
                                        topContent: Ye,
                                        bottomContent: ze
                                    })
                                },
                                pendingText: Fe
                            }), Object(r.jsxs)(De, {
                                gap: "md",
                                children: [Object(r.jsx)(al, {
                                    children: Object(r.jsx)(rl, {
                                        children: Object(r.jsxs)(De, {
                                            children: [Object(r.jsxs)(tn, {
                                                children: [Object(r.jsx)(s.y, {
                                                    children: "Amount"
                                                }), Object(r.jsx)(iu, {
                                                    onClick: function() {
                                                        ie(!ae)
                                                    },
                                                    children: ae ? B(1184, "Simple") : B(1186, "Detailed")
                                                })]
                                            }), Object(r.jsx)(s.n, {
                                                justifyContent: "start",
                                                children: Object(r.jsxs)(s.y, {
                                                    fontSize: "64px",
                                                    children: [ve[Ju.LIQUIDITY_PERCENT], "%"]
                                                })
                                            }), !ae && Object(r.jsxs)(r.Fragment, {
                                                children: [Object(r.jsx)(s.n, {
                                                    mb: "8px",
                                                    children: Object(r.jsx)($u, {
                                                        value: Xe,
                                                        onChange: $e
                                                    })
                                                }), Object(r.jsxs)(s.n, {
                                                    justifyContent: "space-around",
                                                    children: [Object(r.jsx)(s.c, {
                                                        variant: "tertiary",
                                                        scale: "sm",
                                                        onClick: function() {
                                                            return Re(Ju.LIQUIDITY_PERCENT, "25")
                                                        },
                                                        children: "25%"
                                                    }), Object(r.jsx)(s.c, {
                                                        variant: "tertiary",
                                                        scale: "sm",
                                                        onClick: function() {
                                                            return Re(Ju.LIQUIDITY_PERCENT, "50")
                                                        },
                                                        children: "50%"
                                                    }), Object(r.jsx)(s.c, {
                                                        variant: "tertiary",
                                                        scale: "sm",
                                                        onClick: function() {
                                                            return Re(Ju.LIQUIDITY_PERCENT, "75")
                                                        },
                                                        children: "75%"
                                                    }), Object(r.jsx)(s.c, {
                                                        variant: "tertiary",
                                                        scale: "sm",
                                                        onClick: function() {
                                                            return Re(Ju.LIQUIDITY_PERCENT, "100")
                                                        },
                                                        children: B(166, "Max")
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                }), !ae && Object(r.jsxs)(r.Fragment, {
                                    children: [Object(r.jsx)(Le, {
                                        children: Object(r.jsx)(Qu.a, {
                                            size: "16",
                                            color: _.colors.textSubtle
                                        })
                                    }), Object(r.jsx)(al, {
                                        children: Object(r.jsx)(rl, {
                                            children: Object(r.jsxs)(De, {
                                                gap: "10px",
                                                children: [Object(r.jsxs)(tn, {
                                                    children: [Object(r.jsx)(s.y, {
                                                        fontSize: "24px",
                                                        children: ve[Ju.CURRENCY_A] || "-"
                                                    }), Object(r.jsxs)(cn, {
                                                        children: [Object(r.jsx)(vi, {
                                                            currency: N,
                                                            style: {
                                                                marginRight: "12px"
                                                            }
                                                        }), Object(r.jsx)(s.y, {
                                                            fontSize: "24px",
                                                            id: "remove-liquidity-tokena-symbol",
                                                            children: null === N || void 0 === N ? void 0 : N.symbol
                                                        })]
                                                    })]
                                                }), Object(r.jsxs)(tn, {
                                                    children: [Object(r.jsx)(s.y, {
                                                        fontSize: "24px",
                                                        children: ve[Ju.CURRENCY_B] || "-"
                                                    }), Object(r.jsxs)(cn, {
                                                        children: [Object(r.jsx)(vi, {
                                                            currency: E,
                                                            style: {
                                                                marginRight: "12px"
                                                            }
                                                        }), Object(r.jsx)(s.y, {
                                                            fontSize: "24px",
                                                            id: "remove-liquidity-tokenb-symbol",
                                                            children: null === E || void 0 === E ? void 0 : E.symbol
                                                        })]
                                                    })]
                                                }), U && (We || Ve) ? Object(r.jsx)(tn, {
                                                    style: {
                                                        justifyContent: "flex-end"
                                                    },
                                                    children: Ve ? Object(r.jsx)(Rn, {
                                                        to: "/remove/".concat(N === $.d ? $.n[U].address : T, "/").concat(E === $.d ? $.n[U].address : I),
                                                        children: B(1188, "Receive WBNB")
                                                    }) : We ? Object(r.jsx)(Rn, {
                                                        to: "/remove/".concat(N && Object($.o)(N, $.n[U]) ? "BNB" : T, "/").concat(E && Object($.o)(E, $.n[U]) ? "BNB" : I),
                                                        children: B(1190, "Receive BNB")
                                                    }) : null
                                                }) : null]
                                            })
                                        })
                                    })]
                                }), Object(r.jsxs)(al, {
                                    style: {
                                        paddingBottom: "24px"
                                    },
                                    children: [ae && Object(r.jsxs)(r.Fragment, {
                                        children: [Object(r.jsx)(eo, {
                                            value: ve[Ju.LIQUIDITY],
                                            onUserInput: Ue,
                                            onMax: function() {
                                                Re(Ju.LIQUIDITY_PERCENT, "100")
                                            },
                                            showMaxButton: !me,
                                            disableCurrencySelect: !0,
                                            currency: null === V || void 0 === V ? void 0 : V.liquidityToken,
                                            pair: V,
                                            id: "liquidity-amount"
                                        }), Object(r.jsx)(Le, {
                                            children: Object(r.jsx)(Qu.a, {
                                                size: "16",
                                                color: _.colors.textSubtle
                                            })
                                        }), Object(r.jsx)(eo, {
                                            hideBalance: !0,
                                            value: ve[Ju.CURRENCY_A],
                                            onUserInput: Ae,
                                            onMax: function() {
                                                return Re(Ju.LIQUIDITY_PERCENT, "100")
                                            },
                                            showMaxButton: !me,
                                            currency: N,
                                            label: "Output",
                                            onCurrencySelect: He,
                                            id: "remove-liquidity-tokena"
                                        }), Object(r.jsx)(Le, {
                                            children: Object(r.jsx)(Gu.a, {
                                                size: "16",
                                                color: _.colors.textSubtle
                                            })
                                        }), Object(r.jsx)(eo, {
                                            hideBalance: !0,
                                            value: ve[Ju.CURRENCY_B],
                                            onUserInput: Be,
                                            onMax: function() {
                                                return Re(Ju.LIQUIDITY_PERCENT, "100")
                                            },
                                            showMaxButton: !me,
                                            currency: E,
                                            label: "Output",
                                            onCurrencySelect: Ge,
                                            id: "remove-liquidity-tokenb"
                                        })]
                                    }), V && Object(r.jsxs)("div", {
                                        style: {
                                            padding: "24px"
                                        },
                                        children: [Object(r.jsxs)(s.n, {
                                            justifyContent: "space-between",
                                            mb: "8px",
                                            children: ["Price:", Object(r.jsxs)("div", {
                                                children: ["1 ", null === N || void 0 === N ? void 0 : N.symbol, " = ", L ? V.priceOf(L).toSignificant(6) : "-", " ", null === E || void 0 === E ? void 0 : E.symbol]
                                            })]
                                        }), Object(r.jsxs)(s.n, {
                                            justifyContent: "space-between",
                                            children: [Object(r.jsx)("div", {}), Object(r.jsxs)("div", {
                                                children: ["1 ", null === E || void 0 === E ? void 0 : E.symbol, " = ", D ? V.priceOf(D).toSignificant(6) : "-", " ", null === N || void 0 === N ? void 0 : N.symbol]
                                            })]
                                        })]
                                    }), Object(r.jsx)("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        children: R ? Object(r.jsxs)(tn, {
                                            children: [Object(r.jsx)(s.c, {
                                                onClick: function() {
                                                    return Se.apply(this, arguments)
                                                },
                                                variant: Ne === ls.APPROVED || null !== Ce ? "success" : "primary",
                                                disabled: Ne !== ls.NOT_APPROVED || null !== Ce,
                                                mr: "8px",
                                                children: Ne === ls.PENDING ? Object(r.jsx)(Bo, {
                                                    children: "Approving"
                                                }) : Ne === ls.APPROVED || null !== Ce ? "Approved" : "Approve"
                                            }), Object(r.jsx)(s.c, {
                                                onClick: function() {
                                                    ne(!0)
                                                },
                                                disabled: !Q || null === Ce && Ne !== ls.APPROVED,
                                                variant: !Q && W[Ju.CURRENCY_A] && W[Ju.CURRENCY_B] ? "danger" : "primary",
                                                children: H || "Remove"
                                            })]
                                        }) : Object(r.jsx)(Xs, {
                                            width: "100%"
                                        })
                                    })]
                                })]
                            })]
                        })]
                    }), V ? Object(r.jsx)(De, {
                        style: {
                            minWidth: "20rem",
                            marginTop: "1rem"
                        },
                        children: Object(r.jsx)(qo, {
                            showUnwrapped: We,
                            pair: V
                        })
                    }) : null]
                })
            }

            function cl() {
                var e = Object(u.a)(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
                return cl = function() {
                    return e
                }, e
            }

            function ol() {
                var e = Object(u.a)(["\n  flex: 1;\n  padding: 1rem;\n"]);
                return ol = function() {
                    return e
                }, e
            }

            function sl() {
                var e = Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"]);
                return sl = function() {
                    return e
                }, e
            }

            function ul() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"]);
                return ul = function() {
                    return e
                }, e
            }
            var ll = l.default.div(ul(), (function(e) {
                    return e.theme.colors.invertedContrast
                })),
                dl = l.default.div(sl(), (function(e) {
                    var n = e.error,
                        t = e.theme;
                    return n ? t.colors.failure : t.colors.invertedContrast
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                })),
                bl = l.default.div(ol()),
                pl = l.default.input(cl(), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    var n = e.error,
                        t = e.theme;
                    return n ? t.colors.failure : t.colors.primary
                }), (function(e) {
                    return e.theme.colors.textDisabled
                }), (function(e) {
                    return e.theme.colors.textDisabled
                }));

            function fl(e) {
                var n = e.id,
                    t = e.value,
                    i = e.onChange,
                    c = we().chainId,
                    o = nr(),
                    u = ws(t),
                    l = u.address,
                    d = u.loading,
                    b = u.name,
                    p = Object(a.useCallback)((function(e) {
                        var n = e.target.value.replace(/\s+/g, "");
                        i(n)
                    }), [i]),
                    f = Boolean(t.length > 0 && !d && !l);
                return Object(r.jsx)(ll, {
                    id: n,
                    children: Object(r.jsx)(dl, {
                        error: f,
                        children: Object(r.jsx)(bl, {
                            children: Object(r.jsxs)(De, {
                                gap: "md",
                                children: [Object(r.jsxs)(tn, {
                                    children: [Object(r.jsx)(s.y, {
                                        color: "textSubtle",
                                        fontWeight: 500,
                                        fontSize: "14px",
                                        children: o(1138, "Recipient")
                                    }), l && c && Object(r.jsx)(An, {
                                        href: vn(c, null !== b && void 0 !== b ? b : l, "address"),
                                        style: {
                                            fontSize: "14px"
                                        },
                                        children: o(116, "(View on BscScan)")
                                    })]
                                }), Object(r.jsx)(pl, {
                                    className: "recipient-address-input",
                                    type: "text",
                                    autoComplete: "off",
                                    autoCorrect: "off",
                                    autoCapitalize: "off",
                                    spellCheck: "false",
                                    placeholder: o(1140, "Wallet Address or ENS name"),
                                    error: f,
                                    pattern: "^(0x[a-fA-F0-9]{40})$",
                                    onChange: p,
                                    value: t
                                })]
                            })
                        })
                    })
                })
            }
            var jl = t(577);

            function hl(e) {
                var n = e.priceImpact;
                return Object(r.jsx)(Uo, {
                    fontSize: "14px",
                    severity: ys(n),
                    children: n ? n.lessThan(he) ? "<0.01%" : "".concat(n.toFixed(2), "%") : "-"
                })
            }

            function yl(e) {
                var n, t, i, c, o = e.trade,
                    u = e.onConfirm,
                    l = e.allowedSlippage,
                    d = e.swapErrorMessage,
                    b = e.disabledConfirm,
                    p = Object(a.useState)(!1),
                    f = Object(y.a)(p, 2),
                    j = f[0],
                    h = f[1],
                    v = Object(a.useMemo)((function() {
                        return hs(o, l)
                    }), [l, o]),
                    m = Object(a.useMemo)((function() {
                        return js(o)
                    }), [o]),
                    O = m.priceImpactWithoutFee,
                    x = m.realizedLPFee,
                    g = ys(O),
                    C = nr();
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsxs)(De, {
                        gap: "0px",
                        children: [Object(r.jsxs)(tn, {
                            align: "center",
                            children: [Object(r.jsx)(s.y, {
                                fontSize: "14px",
                                children: "Price"
                            }), Object(r.jsxs)(s.y, {
                                fontSize: "14px",
                                style: {
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                    textAlign: "right",
                                    paddingLeft: "8px",
                                    fontWeight: 500
                                },
                                children: [vs(o, j), Object(r.jsx)(Ao, {
                                    onClick: function() {
                                        return h(!j)
                                    },
                                    children: Object(r.jsx)(jl.a, {
                                        size: 14
                                    })
                                })]
                            })]
                        }), Object(r.jsxs)(tn, {
                            children: [Object(r.jsxs)(cn, {
                                children: [Object(r.jsx)(s.y, {
                                    fontSize: "14px",
                                    children: o.tradeType === $.m.EXACT_INPUT ? C(1210, "Minimum received") : C(220, "Maximum sold")
                                }), Object(r.jsx)(li, {
                                    text: C(202, "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.")
                                })]
                            }), Object(r.jsxs)(cn, {
                                children: [Object(r.jsx)(s.y, {
                                    fontSize: "14px",
                                    children: o.tradeType === $.m.EXACT_INPUT ? null !== (n = null === (t = v[Xo.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(4)) && void 0 !== n ? n : "-" : null !== (i = null === (c = v[Xo.INPUT]) || void 0 === c ? void 0 : c.toSignificant(4)) && void 0 !== i ? i : "-"
                                }), Object(r.jsx)(s.y, {
                                    fontSize: "14px",
                                    marginLeft: "4px",
                                    children: o.tradeType === $.m.EXACT_INPUT ? o.outputAmount.currency.symbol : o.inputAmount.currency.symbol
                                })]
                            })]
                        }), Object(r.jsxs)(tn, {
                            children: [Object(r.jsxs)(cn, {
                                children: [Object(r.jsx)(s.y, {
                                    fontSize: "14px",
                                    children: C(226, "Price Impact")
                                }), Object(r.jsx)(li, {
                                    text: C(224, "The difference between the market price and your price due to trade size.")
                                })]
                            }), Object(r.jsx)(hl, {
                                priceImpact: O
                            })]
                        }), Object(r.jsxs)(tn, {
                            children: [Object(r.jsxs)(cn, {
                                children: [Object(r.jsx)(s.y, {
                                    fontSize: "14px",
                                    children: C(228, "Liquidity Provider Fee")
                                }), Object(r.jsx)(li, {
                                    text: C(999, "For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the PancakeSwap treasury.")
                                })]
                            }), Object(r.jsx)(s.y, {
                                fontSize: "14px",
                                children: x ? "".concat(null === x || void 0 === x ? void 0 : x.toSignificant(6), " ").concat(o.inputAmount.currency.symbol) : "-"
                            })]
                        })]
                    }), Object(r.jsxs)(an, {
                        children: [Object(r.jsx)(s.c, {
                            onClick: u,
                            disabled: b,
                            variant: g > 2 ? "danger" : "primary",
                            mt: "10px",
                            id: "confirm-swap-or-send",
                            width: "100%",
                            children: g > 2 ? "Swap Anyway" : "Confirm Swap"
                        }), d ? Object(r.jsx)(Lo, {
                            error: d
                        }) : null]
                    })]
                })
            }

            function vl() {
                var e = Object(u.a)(["\n  font-style: italic;\n  line-height: 1.3;\n\n  span {\n    color: ", ";\n    font-weight: 600;\n  }\n"]);
                return vl = function() {
                    return e
                }, e
            }
            var ml = Object(l.default)(s.y)(vl(), (function(e) {
                return e.theme.colors.primary
            }));

            function Ol(e) {
                var n, t, i = e.trade,
                    c = e.allowedSlippage,
                    o = e.recipient,
                    u = e.showAcceptChanges,
                    d = e.onAcceptChanges,
                    b = Object(a.useMemo)((function() {
                        return hs(i, c)
                    }), [i, c]),
                    p = ys(Object(a.useMemo)((function() {
                        return js(i)
                    }), [i]).priceImpactWithoutFee),
                    f = Object(a.useContext)(l.ThemeContext);
                return Object(r.jsxs)(De, {
                    gap: "md",
                    style: {
                        marginTop: "20px"
                    },
                    children: [Object(r.jsxs)(tn, {
                        align: "flex-end",
                        children: [Object(r.jsxs)(cn, {
                            gap: "0px",
                            children: [Object(r.jsx)(vi, {
                                currency: i.inputAmount.currency,
                                size: "24px",
                                style: {
                                    marginRight: "12px"
                                }
                            }), Object(r.jsx)(s.y, {
                                fontSize: "24px",
                                color: u && i.tradeType === $.m.EXACT_OUTPUT ? f.colors.primary : "text",
                                children: i.inputAmount.toSignificant(6)
                            })]
                        }), Object(r.jsx)(cn, {
                            gap: "0px",
                            children: Object(r.jsx)(s.y, {
                                fontSize: "24px",
                                style: {
                                    marginLeft: "10px",
                                    fontWeight: 500
                                },
                                children: i.inputAmount.currency.symbol
                            })
                        })]
                    }), Object(r.jsx)(cn, {
                        children: Object(r.jsx)(Qu.a, {
                            size: "16",
                            color: f.colors.textSubtle,
                            style: {
                                marginLeft: "4px",
                                minWidth: "16px"
                            }
                        })
                    }), Object(r.jsxs)(tn, {
                        align: "flex-end",
                        children: [Object(r.jsxs)(cn, {
                            gap: "0px",
                            children: [Object(r.jsx)(vi, {
                                currency: i.outputAmount.currency,
                                size: "24px",
                                style: {
                                    marginRight: "12px"
                                }
                            }), Object(r.jsx)(s.y, {
                                fontSize: "24px",
                                style: {
                                    marginLeft: "10px",
                                    fontWeight: 500
                                },
                                color: p > 2 ? f.colors.failure : u && i.tradeType === $.m.EXACT_INPUT ? f.colors.primary : "text",
                                children: i.outputAmount.toSignificant(6)
                            })]
                        }), Object(r.jsx)(cn, {
                            gap: "0px",
                            children: Object(r.jsx)(s.y, {
                                fontSize: "24px",
                                style: {
                                    marginLeft: "10px",
                                    fontWeight: 500
                                },
                                children: i.outputAmount.currency.symbol
                            })
                        })]
                    }), u ? Object(r.jsx)(Do, {
                        justify: "flex-start",
                        gap: "0px",
                        children: Object(r.jsxs)(tn, {
                            children: [Object(r.jsxs)(cn, {
                                children: [Object(r.jsx)(Gt.a, {
                                    size: 20,
                                    style: {
                                        marginRight: "8px",
                                        minWidth: 24
                                    }
                                }), Object(r.jsx)(s.y, {
                                    color: "primary",
                                    children: " Price Updated"
                                })]
                            }), Object(r.jsx)(s.c, {
                                onClick: d,
                                children: "Accept"
                            })]
                        })
                    }) : null, Object(r.jsx)(De, {
                        justify: "flex-start",
                        gap: "sm",
                        style: {
                            padding: "16px 0 0"
                        },
                        children: i.tradeType === $.m.EXACT_INPUT ? Object(r.jsxs)(ml, {
                            children: ["Output is estimated. You will receive at least ", Object(r.jsxs)("span", {
                                children: [null === (n = b[Xo.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(6), " ", i.outputAmount.currency.symbol]
                            }), " or the transaction will revert."]
                        }) : Object(r.jsxs)(ml, {
                            children: ["Input is estimated. You will sell at most ", Object(r.jsxs)("span", {
                                children: [null === (t = b[Xo.INPUT]) || void 0 === t ? void 0 : t.toSignificant(6), " ", i.inputAmount.currency.symbol]
                            }), " or the transaction will revert."]
                        })
                    }), null !== o ? Object(r.jsx)(De, {
                        justify: "flex-start",
                        gap: "sm",
                        style: {
                            padding: "16px 0 0"
                        },
                        children: Object(r.jsxs)(s.y, {
                            children: ["Output will be sent to", " ", Object(r.jsx)("b", {
                                title: o,
                                children: hn(o) ? mn(o) : o
                            })]
                        })
                    }) : null]
                })
            }

            function xl(e) {
                var n, t, i, c, o, s, u = e.trade,
                    l = e.originalTrade,
                    d = e.onAcceptChanges,
                    b = e.allowedSlippage,
                    p = e.onConfirm,
                    f = e.onDismiss,
                    j = e.recipient,
                    h = e.swapErrorMessage,
                    y = e.isOpen,
                    v = e.attemptingTxn,
                    m = e.txHash,
                    O = Object(a.useMemo)((function() {
                        return Boolean(u && l && (n = l, (e = u).tradeType !== n.tradeType || !Object($.o)(e.inputAmount.currency, n.inputAmount.currency) || !e.inputAmount.equalTo(n.inputAmount) || !Object($.o)(e.outputAmount.currency, n.outputAmount.currency) || !e.outputAmount.equalTo(n.outputAmount)));
                        var e, n
                    }), [l, u]),
                    x = Object(a.useCallback)((function() {
                        return u ? Object(r.jsx)(Ol, {
                            trade: u,
                            allowedSlippage: b,
                            recipient: j,
                            showAcceptChanges: O,
                            onAcceptChanges: d
                        }) : null
                    }), [b, d, j, O, u]),
                    g = Object(a.useCallback)((function() {
                        return u ? Object(r.jsx)(yl, {
                            onConfirm: p,
                            trade: u,
                            disabledConfirm: O,
                            swapErrorMessage: h,
                            allowedSlippage: b
                        }) : null
                    }), [b, p, O, h, u]),
                    C = "Swapping ".concat(null === u || void 0 === u || null === (n = u.inputAmount) || void 0 === n ? void 0 : n.toSignificant(6), " ").concat(null === u || void 0 === u || null === (t = u.inputAmount) || void 0 === t || null === (i = t.currency) || void 0 === i ? void 0 : i.symbol, " for ").concat(null === u || void 0 === u || null === (c = u.outputAmount) || void 0 === c ? void 0 : c.toSignificant(6), " ").concat(null === u || void 0 === u || null === (o = u.outputAmount) || void 0 === o || null === (s = o.currency) || void 0 === s ? void 0 : s.symbol),
                    w = Object(a.useCallback)((function() {
                        return h ? Object(r.jsx)(Qt, {
                            onDismiss: f,
                            message: h
                        }) : Object(r.jsx)(Ht, {
                            title: "Confirm Swap",
                            onDismiss: f,
                            topContent: x,
                            bottomContent: g
                        })
                    }), [f, g, x, h]);
                return Object(r.jsx)(Kt, {
                    isOpen: y,
                    onDismiss: f,
                    attemptingTxn: v,
                    hash: m,
                    content: w,
                    pendingText: C
                })
            }
            var gl = t(578),
                Cl = Object(a.memo)((function(e) {
                    var n = e.trade,
                        t = Object(a.useContext)(l.ThemeContext);
                    return Object(r.jsx)(s.n, {
                        px: "1rem",
                        py: "0.5rem",
                        my: "0.5rem",
                        style: {
                            border: "1px solid ".concat(t.colors.tertiary),
                            borderRadius: "1rem"
                        },
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        children: n.route.path.map((function(e, n, t) {
                            var i = n === t.length - 1;
                            return Object(r.jsxs)(a.Fragment, {
                                children: [Object(r.jsxs)(s.n, {
                                    my: "0.5rem",
                                    alignItems: "center",
                                    style: {
                                        flexShrink: 0
                                    },
                                    children: [Object(r.jsx)(vi, {
                                        currency: e,
                                        size: "1.5rem"
                                    }), Object(r.jsx)(s.y, {
                                        fontSize: "14px",
                                        color: "text",
                                        ml: "0.5rem",
                                        children: e.symbol
                                    })]
                                }), i ? null : Object(r.jsx)(gl.a, {
                                    color: "textSubtle"
                                })]
                            }, n)
                        }))
                    })
                }));

            function wl(e) {
                var n, t, a, i, c = e.trade,
                    o = e.allowedSlippage,
                    u = js(c),
                    l = u.priceImpactWithoutFee,
                    d = u.realizedLPFee,
                    b = c.tradeType === $.m.EXACT_INPUT,
                    p = hs(c, o),
                    f = nr();
                return Object(r.jsx)(s.f, {
                    children: Object(r.jsxs)(s.g, {
                        children: [Object(r.jsxs)(tn, {
                            children: [Object(r.jsxs)(cn, {
                                children: [Object(r.jsx)(s.y, {
                                    fontSize: "14px",
                                    children: b ? f(1210, "Minimum received") : f(220, "Maximum sold")
                                }), Object(r.jsx)(li, {
                                    text: f(202, "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.")
                                })]
                            }), Object(r.jsx)(cn, {
                                children: Object(r.jsx)(s.y, {
                                    fontSize: "14px",
                                    children: b ? null !== (n = "".concat(null === (t = p[Xo.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(4), " ").concat(c.outputAmount.currency.symbol)) && void 0 !== n ? n : "-" : null !== (a = "".concat(null === (i = p[Xo.INPUT]) || void 0 === i ? void 0 : i.toSignificant(4), " ").concat(c.inputAmount.currency.symbol)) && void 0 !== a ? a : "-"
                                })
                            })]
                        }), Object(r.jsxs)(tn, {
                            children: [Object(r.jsxs)(cn, {
                                children: [Object(r.jsx)(s.y, {
                                    fontSize: "14px",
                                    children: f(226, "Price Impact")
                                }), Object(r.jsx)(li, {
                                    text: f(224, "The difference between the market price and estimated price due to trade size.")
                                })]
                            }), Object(r.jsx)(hl, {
                                priceImpact: l
                            })]
                        }), Object(r.jsxs)(tn, {
                            children: [Object(r.jsxs)(cn, {
                                children: [Object(r.jsx)(s.y, {
                                    fontSize: "14px",
                                    children: f(228, "Liquidity Provider Fee")
                                }), Object(r.jsx)(li, {
                                    text: f(230, "For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the PancakeSwap treasury.")
                                })]
                            }), Object(r.jsx)(s.y, {
                                fontSize: "14px",
                                children: d ? "".concat(d.toSignificant(4), " ").concat(c.inputAmount.currency.symbol) : "-"
                            })]
                        })]
                    })
                })
            }

            function kl(e) {
                var n = e.trade,
                    t = Zr(),
                    a = Object(y.a)(t, 1)[0],
                    i = nr(),
                    c = Boolean(n && n.route.path.length > 2);
                return Object(r.jsx)(De, {
                    gap: "md",
                    children: n && Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)(wl, {
                            trade: n,
                            allowedSlippage: a
                        }), c && Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsx)(So, {}), Object(r.jsxs)(De, {
                                style: {
                                    padding: "0 24px"
                                },
                                children: [Object(r.jsxs)(cn, {
                                    children: [Object(r.jsx)(s.y, {
                                        fontSize: "14px",
                                        children: "Route"
                                    }), Object(r.jsx)(li, {
                                        text: i(999, "Routing through these tokens resulted in the best price for your trade.")
                                    })]
                                }), Object(r.jsx)(Cl, {
                                    trade: n
                                })]
                            })]
                        })]
                    })
                })
            }

            function Tl() {
                var e = Object(u.a)(["\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 20px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ", ";\n  z-index: 1;\n\n  transform: ", ";\n  transition: transform 300ms ease-in-out;\n"]);
                return Tl = function() {
                    return e
                }, e
            }
            var Il = l.default.div(Tl(), (function(e) {
                return e.theme.colors.textSubtle
            }), (function(e) {
                return e.show ? "translateY(0%)" : "translateY(-100%)"
            }));

            function Nl(e) {
                var n, t = e.trade,
                    a = Object(wn.a)(e, ["trade"]),
                    i = Ia(t, Na);
                return Object(r.jsx)(Il, {
                    show: Boolean(t),
                    children: Object(r.jsx)(kl, Object(X.a)(Object(X.a)({}, a), {}, {
                        trade: null !== (n = null !== t && void 0 !== t ? t : i) && void 0 !== n ? n : void 0
                    }))
                })
            }

            function El(e) {
                var n, t, a, i, c, o = e.price,
                    u = e.showInverted,
                    l = e.setShowInverted,
                    d = u ? null === o || void 0 === o ? void 0 : o.toSignificant(6) : null === o || void 0 === o || null === (n = o.invert()) || void 0 === n ? void 0 : n.toSignificant(6),
                    b = Boolean((null === o || void 0 === o ? void 0 : o.baseCurrency) && (null === o || void 0 === o ? void 0 : o.quoteCurrency)),
                    p = u ? "".concat(null === o || void 0 === o || null === (t = o.quoteCurrency) || void 0 === t ? void 0 : t.symbol, " per ").concat(null === o || void 0 === o || null === (a = o.baseCurrency) || void 0 === a ? void 0 : a.symbol) : "".concat(null === o || void 0 === o || null === (i = o.baseCurrency) || void 0 === i ? void 0 : i.symbol, " per ").concat(null === o || void 0 === o || null === (c = o.quoteCurrency) || void 0 === c ? void 0 : c.symbol);
                return Object(r.jsx)(s.y, {
                    fontSize: "14px",
                    style: {
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex"
                    },
                    children: b ? Object(r.jsxs)(r.Fragment, {
                        children: [null !== d && void 0 !== d ? d : "-", " ", p, Object(r.jsx)(Ao, {
                            onClick: function() {
                                return l(!u)
                            },
                            children: Object(r.jsx)(s.x, {
                                width: "20px",
                                color: "primary"
                            })
                        })]
                    }) : "-"
                })
            }

            function Sl() {
                var e = Object(u.a)(["\n  stroke: ", ";\n"]);
                return Sl = function() {
                    return e
                }, e
            }

            function Rl() {
                var e = Object(u.a)(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"]);
                return Rl = function() {
                    return e
                }, e
            }

            function Ul() {
                var e = Object(u.a)(["\n  background: ", ";\n  padding: 0.75rem;\n  border-radius: 20px;\n"]);
                return Ul = function() {
                    return e
                }, e
            }
            var Al = l.default.div(Ul(), (function(e) {
                    var n = e.theme;
                    return Object(mt.b)(.6, n.colors.tertiary)
                })),
                Bl = l.default.div(Rl()),
                Pl = Object(l.default)(Gt.a)(Sl(), (function(e) {
                    return e.theme.colors.failure
                }));

            function Ml(e) {
                var n, t, i, c, o = e.token,
                    u = we().chainId,
                    l = nr(),
                    d = null !== (n = null === o || void 0 === o || null === (t = o.symbol) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== n ? n : "",
                    b = null !== (i = null === o || void 0 === o || null === (c = o.name) || void 0 === c ? void 0 : c.toLowerCase()) && void 0 !== i ? i : "",
                    p = ha(),
                    f = Object(a.useMemo)((function() {
                        return !(!o || !u) && Object.keys(p).some((function(e) {
                            var n, t, r = p[e];
                            return !r.equals(o) && ((null === (n = r.symbol) || void 0 === n ? void 0 : n.toLowerCase()) === d || (null === (t = r.name) || void 0 === t ? void 0 : t.toLowerCase()) === b)
                        }))
                    }), [o, u, p, d, b]);
                return o ? Object(r.jsx)(Al, {
                    error: f,
                    children: Object(r.jsxs)(an, {
                        gap: "6px",
                        children: [Object(r.jsxs)(De, {
                            gap: "24px",
                            children: [Object(r.jsx)(vi, {
                                currency: o,
                                size: "16px"
                            }), Object(r.jsx)("div", {
                                children: " "
                            })]
                        }), Object(r.jsxs)(De, {
                            gap: "10px",
                            justify: "flex-start",
                            children: [Object(r.jsxs)(s.y, {
                                children: [o && o.name && o.symbol && o.name !== o.symbol ? "".concat(o.name, " (").concat(o.symbol, ")") : o.name || o.symbol, " "]
                            }), u && Object(r.jsx)(An, {
                                style: {
                                    fontWeight: 400
                                },
                                href: vn(u, o.address, "token"),
                                children: Object(r.jsxs)(s.y, {
                                    title: o.address,
                                    children: [mn(o.address), " ", l(116, "(View on BscScan)")]
                                })
                            })]
                        })]
                    })
                }) : null
            }

            function Ll(e) {
                var n = e.isOpen,
                    t = e.tokens,
                    i = e.onConfirm,
                    c = Object(a.useState)(!1),
                    o = Object(y.a)(c, 2),
                    u = o[0],
                    l = o[1],
                    d = Object(a.useCallback)((function() {
                        return l((function(e) {
                            return !e
                        }))
                    }), []),
                    b = nr(),
                    p = Object(a.useCallback)((function() {
                        return null
                    }), []);
                return Object(r.jsx)(Nt, {
                    isOpen: n,
                    onDismiss: p,
                    maxHeight: 90,
                    children: Object(r.jsx)(Bl, {
                        className: "token-warning-container",
                        children: Object(r.jsxs)(De, {
                            gap: "lg",
                            children: [Object(r.jsxs)(an, {
                                gap: "6px",
                                children: [Object(r.jsx)(Pl, {}), Object(r.jsx)(s.y, {
                                    color: "failure",
                                    children: b(1128, "Token imported")
                                })]
                            }), Object(r.jsx)(s.y, {
                                children: b(1130, "Anyone can create a BEP20 token on BSC with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.")
                            }), Object(r.jsx)(s.y, {
                                children: b(1132, "This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary BEP20 tokens.")
                            }), Object(r.jsx)(s.y, {
                                children: b(1134, "If you purchase an arbitrary token, you may be unable to sell it back.")
                            }), t.map((function(e) {
                                return Object(r.jsx)(Ml, {
                                    token: e
                                }, e.address)
                            })), Object(r.jsxs)(tn, {
                                children: [Object(r.jsx)("div", {
                                    children: Object(r.jsxs)("label", {
                                        htmlFor: "understand-checkbox",
                                        style: {
                                            cursor: "pointer",
                                            userSelect: "none"
                                        },
                                        children: [Object(r.jsx)("input", {
                                            id: "understand-checkbox",
                                            type: "checkbox",
                                            className: "understand-checkbox",
                                            checked: u,
                                            onChange: d
                                        }), " ", Object(r.jsx)(s.y, {
                                            as: "span",
                                            ml: "4px",
                                            children: b(148, "I understand")
                                        })]
                                    })
                                }), Object(r.jsx)(s.c, {
                                    disabled: !u,
                                    variant: "danger",
                                    style: {
                                        width: "140px"
                                    },
                                    className: "token-dismiss-button",
                                    onClick: function() {
                                        i()
                                    },
                                    children: b(150, "Continue")
                                })]
                            })]
                        })
                    })
                })
            }

            function Dl() {
                var e = Object(u.a)(["\n  stroke: ", ";\n"]);
                return Dl = function() {
                    return e
                }, e
            }

            function _l() {
                var e = Object(u.a)(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"]);
                return _l = function() {
                    return e
                }, e
            }
            var Yl = l.default.div(_l()),
                zl = Object(l.default)(Gt.a)(Dl(), (function(e) {
                    return e.theme.colors.failure
                }));

            function Fl(e) {
                var n = e.isOpen,
                    t = e.transactionType,
                    i = e.onConfirm,
                    c = Object(a.useState)(!1),
                    o = Object(y.a)(c, 2),
                    u = o[0],
                    l = o[1],
                    d = Object(a.useCallback)((function() {
                        return l((function(e) {
                            return !e
                        }))
                    }), []),
                    b = Object(a.useCallback)((function() {
                        return null
                    }), []);
                return Object(r.jsx)(Nt, {
                    isOpen: n,
                    onDismiss: b,
                    maxHeight: 90,
                    children: Object(r.jsx)(Yl, {
                        className: "token-warning-container",
                        children: Object(r.jsxs)(De, {
                            gap: "lg",
                            children: [Object(r.jsxs)(an, {
                                gap: "6px",
                                children: [Object(r.jsx)(zl, {}), Object(r.jsx)(s.y, {
                                    color: "failure",
                                    children: "Syrup Warning"
                                })]
                            }), "" !== t && Object(r.jsxs)(r.Fragment, {
                                children: [Object(r.jsxs)(s.y, {
                                    color: "failure",
                                    children: ["Please be careful when ", Object(r.jsx)("strong", {
                                        children: t
                                    }), " SYRUP."]
                                }), Object(r.jsx)(s.y, {
                                    color: "failure",
                                    children: "Buying" === t ? "You will not receive CAKE rewards for holding purchased SYRUP." : "You will need to buy back the same amount of SYRUP to be able to convert back to CAKE."
                                })]
                            }), Object(r.jsxs)(tn, {
                                children: [Object(r.jsx)("div", {
                                    children: Object(r.jsxs)("label", {
                                        htmlFor: "understand-checkbox",
                                        style: {
                                            cursor: "pointer",
                                            userSelect: "none"
                                        },
                                        children: [Object(r.jsx)("input", {
                                            id: "understand-checkbox",
                                            type: "checkbox",
                                            className: "understand-checkbox",
                                            checked: u,
                                            onChange: d
                                        }), " ", Object(r.jsx)(s.y, {
                                            as: "span",
                                            children: "I understand"
                                        })]
                                    })
                                }), Object(r.jsx)(s.c, {
                                    disabled: !u,
                                    variant: "danger",
                                    style: {
                                        width: "140px"
                                    },
                                    onClick: function() {
                                        l(!1), i()
                                    },
                                    children: "Continue"
                                })]
                            })]
                        })
                    })
                })
            }

            function ql() {
                var e = Object(u.a)(["\n  width: 100%;\n  height: 2px;\n  background-color: ;\n  background: linear-gradient(\n    90deg,\n    ", " 0%,\n    ", " 80%\n  );\n  opacity: 0.6;\n"]);
                return ql = function() {
                    return e
                }, e
            }

            function Vl() {
                var e = Object(u.a)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]);
                return Vl = function() {
                    return e
                }, e
            }

            function Wl() {
                var e = Object(u.a)(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n  color: ", ";\n"]);
                return Wl = function() {
                    return e
                }, e
            }

            function Hl() {
                var e = Object(u.a)(["\n  width: 50%;\n"]);
                return Hl = function() {
                    return e
                }, e
            }

            function Gl() {
                var e = Object(u.a)(["\n  margin-top: 1.25rem;\n"]);
                return Gl = function() {
                    return e
                }, e
            }
            var Ql, Kl = Object(l.default)(De)(Gl()),
                Jl = Object(l.default)(tn)(Hl()),
                Xl = l.default.div(Wl(), (function(e) {
                    var n = e.theme,
                        t = e.confirmed;
                    return e.disabled ? n.colors.backgroundDisabled : t ? n.colors.success : n.colors.primary
                }), (function(e) {
                    var n = e.theme,
                        t = e.confirmed;
                    return e.disabled ? n.colors.text : t ? n.colors.success : "#FFFFFF"
                })),
                $l = l.default.div(Vl()),
                Zl = l.default.div(ql(), (function(e) {
                    var n = e.theme,
                        t = e.prevConfirmed;
                    return Object(mt.b)(.5, t ? n.colors.success : n.colors.primary)
                }), (function(e) {
                    var n = e.theme;
                    return e.prevConfirmed ? n.colors.primary : n.colors.backgroundDisabled
                }));

            function ed(e) {
                var n = e.steps;
                return Object(r.jsx)(Kl, {
                    justify: "center",
                    children: Object(r.jsxs)(Jl, {
                        children: [n.map((function(e, t) {
                            return Object(r.jsxs)($l, {
                                children: [Object(r.jsx)(Xl, {
                                    confirmed: e,
                                    disabled: !n[t - 1] && 0 !== t,
                                    children: e ? "\u2713" : t + 1
                                }), Object(r.jsx)(Zl, {
                                    prevConfirmed: e
                                })]
                            }, t)
                        })), Object(r.jsx)(Xl, {
                            disabled: !n[n.length - 1],
                            children: n.length + 1
                        })]
                    })
                })
            }

            function nd(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fe,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : je,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = we(),
                    c = i.account,
                    o = i.chainId,
                    s = i.library,
                    u = ws(r),
                    l = u.address,
                    d = null === r ? c : l;
                return Object(a.useMemo)((function() {
                    if (!e || !d || !s || !c || !o) return [];
                    var r = Cn(0, s, c);
                    if (!r) return [];
                    var a = [];
                    return a.push($.i.swapCallParameters(e, {
                        feeOnTransfer: !1,
                        allowedSlippage: new $.g($.e.BigInt(Math.floor(n)), ye),
                        recipient: d,
                        ttl: t
                    })), e.tradeType === $.m.EXACT_INPUT && a.push($.i.swapCallParameters(e, {
                        feeOnTransfer: !0,
                        allowedSlippage: new $.g($.e.BigInt(Math.floor(n)), ye),
                        recipient: d,
                        ttl: t
                    })), a.map((function(e) {
                        return {
                            parameters: e,
                            contract: r
                        }
                    }))
                }), [c, n, o, t, s, d, e])
            }

            function td(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fe,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : je,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = we(),
                    c = i.account,
                    o = i.chainId,
                    s = i.library,
                    u = nd(e, n, t, r),
                    l = os(),
                    d = ws(r),
                    b = d.address,
                    p = null === r ? c : b;
                return Object(a.useMemo)((function() {
                    return e && s && c && o ? p ? {
                        state: Ql.VALID,
                        callback: function() {
                            var n = Object(h.a)(j.a.mark((function n() {
                                var t, a, i, o, s, d, b, f, h, y;
                                return j.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, Promise.all(u.map((function(e) {
                                                var n, t = e.parameters,
                                                    r = t.methodName,
                                                    a = t.args,
                                                    i = t.value,
                                                    c = e.contract,
                                                    o = !i || Ya(i) ? {} : {
                                                        value: i
                                                    };
                                                return (n = c.estimateGas)[r].apply(n, Object(J.a)(a).concat([o])).then((function(n) {
                                                    return {
                                                        call: e,
                                                        gasEstimate: n
                                                    }
                                                })).catch((function(n) {
                                                    var t;
                                                    return console.info("Gas estimate failed, trying eth_call to extract error", e), (t = c.callStatic)[r].apply(t, Object(J.a)(a).concat([o])).then((function(t) {
                                                        return console.info("Unexpected successful call after failed estimate gas", e, n, t), {
                                                            call: e,
                                                            error: new Error("Unexpected issue with estimating the gas. Please try again.")
                                                        }
                                                    })).catch((function(n) {
                                                        var t;
                                                        switch (console.info("Call threw error", e, n), n.reason) {
                                                            case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                                                            case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                                                                t = "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
                                                                break;
                                                            default:
                                                                t = "The transaction cannot succeed due to error: ".concat(n.reason, ". This is probably an issue with one of the tokens you are swapping.")
                                                        }
                                                        return {
                                                            call: e,
                                                            error: new Error(t)
                                                        }
                                                    }))
                                                }))
                                            })));
                                        case 2:
                                            if (t = n.sent, a = t.find((function(e, n, t) {
                                                    return "gasEstimate" in e && (n === t.length - 1 || "gasEstimate" in t[n + 1])
                                                }))) {
                                                n.next = 9;
                                                break
                                            }
                                            if (!((i = t.filter((function(e) {
                                                    return "error" in e
                                                }))).length > 0)) {
                                                n.next = 8;
                                                break
                                            }
                                            throw i[i.length - 1].error;
                                        case 8:
                                            throw new Error("Unexpected error. Please contact support: none of the calls threw an error");
                                        case 9:
                                            return o = a.call, s = o.contract, d = o.parameters, b = d.methodName, f = d.args, h = d.value, y = a.gasEstimate, n.abrupt("return", s[b].apply(s, Object(J.a)(f).concat([Object(X.a)({
                                                gasLimit: On(y)
                                            }, h && !Ya(h) ? {
                                                value: h,
                                                from: c
                                            } : {
                                                from: c
                                            })])).then((function(n) {
                                                var t = e.inputAmount.currency.symbol,
                                                    a = e.outputAmount.currency.symbol,
                                                    i = e.inputAmount.toSignificant(3),
                                                    o = e.outputAmount.toSignificant(3),
                                                    s = "Swap ".concat(i, " ").concat(t, " for ").concat(o, " ").concat(a),
                                                    u = p === c ? s : "".concat(s, " to ").concat(r && hn(r) ? mn(r) : r);
                                                return l(n, {
                                                    summary: u
                                                }), n.hash
                                            })).catch((function(e) {
                                                throw 4001 === (null === e || void 0 === e ? void 0 : e.code) ? new Error("Transaction rejected.") : (console.error("Swap failed", e, b, f, h), new Error("Swap failed: ".concat(e.message)))
                                            })));
                                        case 11:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }(),
                        error: null
                    } : null !== r ? {
                        state: Ql.INVALID,
                        callback: null,
                        error: "Invalid recipient"
                    } : {
                        state: Ql.LOADING,
                        callback: null,
                        error: null
                    } : {
                        state: Ql.INVALID,
                        callback: null,
                        error: "Missing dependencies"
                    }
                }), [e, s, c, o, p, r, u, l])
            }! function(e) {
                e[e.INVALID = 0] = "INVALID", e[e.LOADING = 1] = "LOADING", e[e.VALID = 2] = "VALID"
            }(Ql || (Ql = {}));
            var rd;
            ! function(e) {
                e[e.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", e[e.WRAP = 1] = "WRAP", e[e.UNWRAP = 2] = "UNWRAP"
            }(rd || (rd = {}));
            var ad = {
                wrapType: rd.NOT_APPLICABLE
            };

            function id(e, n, t) {
                var r = we(),
                    i = r.chainId,
                    c = r.account,
                    o = function(e) {
                        var n = we().chainId;
                        return da(n ? $.n[n].address : void 0, sa, e)
                    }(),
                    s = Ta(null !== c && void 0 !== c ? c : void 0, e),
                    u = Object(a.useMemo)((function() {
                        return Ns(t, e)
                    }), [e, t]),
                    l = os();
                return Object(a.useMemo)((function() {
                    if (!o || !i || !e || !n) return ad;
                    var t = u && s && !s.lessThan(u);
                    return e === $.d && Object($.o)($.n[i], n) ? {
                        wrapType: rd.WRAP,
                        execute: t && u ? Object(h.a)(j.a.mark((function e() {
                            var n;
                            return j.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, o.deposit({
                                            value: "0x".concat(u.raw.toString(16))
                                        });
                                    case 3:
                                        n = e.sent, l(n, {
                                            summary: "Wrap ".concat(u.toSignificant(6), " BNB to WBNB")
                                        }), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error("Could not deposit", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))) : void 0,
                        inputError: t ? void 0 : "Insufficient BNB balance"
                    } : Object($.o)($.n[i], e) && n === $.d ? {
                        wrapType: rd.UNWRAP,
                        execute: t && u ? Object(h.a)(j.a.mark((function e() {
                            var n;
                            return j.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, o.withdraw("0x".concat(u.raw.toString(16)));
                                    case 3:
                                        n = e.sent, l(n, {
                                            summary: "Unwrap ".concat(u.toSignificant(6), " WBNB to BNB")
                                        }), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error("Could not withdraw", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))) : void 0,
                        inputError: t ? void 0 : "Insufficient WBNB balance"
                    } : ad
                }), [o, i, e, n, u, s, l])
            }
            var cd = function() {
                    var e, n, t, i, c, o, u, d, b, p, f = Ms(),
                        j = nr(),
                        h = [Oa(null === f || void 0 === f ? void 0 : f.inputCurrencyId), Oa(null === f || void 0 === f ? void 0 : f.outputCurrencyId)],
                        v = h[0],
                        m = h[1],
                        O = Object(a.useState)(!1),
                        g = Object(y.a)(O, 2),
                        C = g[0],
                        k = g[1],
                        T = Object(a.useState)(!1),
                        I = Object(y.a)(T, 2),
                        N = I[0],
                        E = I[1],
                        S = Object(a.useState)(""),
                        R = Object(y.a)(S, 2),
                        U = R[0],
                        A = R[1],
                        B = Object(a.useMemo)((function() {
                            var e, n;
                            return null !== (e = null === (n = [v, m]) || void 0 === n ? void 0 : n.filter((function(e) {
                                return e instanceof $.j
                            }))) && void 0 !== e ? e : []
                        }), [v, m]),
                        P = Object(a.useCallback)((function() {
                            k(!0)
                        }), []),
                        M = Object(a.useCallback)((function() {
                            E(!1), A("")
                        }), []),
                        L = we().account,
                        D = Object(a.useContext)(l.ThemeContext),
                        _ = function() {
                            var e = Object(x.c)(),
                                n = $r(),
                                t = Object(a.useCallback)((function() {
                                    e(Yr({
                                        userExpertMode: !n
                                    }))
                                }), [n, e]);
                            return [n, t]
                        }(),
                        Y = Object(y.a)(_, 1)[0],
                        z = ea(),
                        F = Object(y.a)(z, 1)[0],
                        q = Zr(),
                        V = Object(y.a)(q, 1)[0],
                        W = Is(),
                        H = W.independentField,
                        G = W.typedValue,
                        Q = W.recipient,
                        K = Rs(),
                        J = K.v2Trade,
                        ee = K.currencyBalances,
                        ne = K.parsedAmount,
                        te = K.currencies,
                        re = K.inputError,
                        ae = id(te[Xo.INPUT], te[Xo.OUTPUT], G),
                        ie = ae.wrapType,
                        ce = ae.execute,
                        oe = ae.inputError,
                        se = ie !== rd.NOT_APPLICABLE,
                        ue = se ? void 0 : J,
                        le = se ? (e = {}, Object(w.a)(e, Xo.INPUT, ne), Object(w.a)(e, Xo.OUTPUT, ne), e) : (n = {}, Object(w.a)(n, Xo.INPUT, H === Xo.INPUT ? ne : null === ue || void 0 === ue ? void 0 : ue.inputAmount), Object(w.a)(n, Xo.OUTPUT, H === Xo.OUTPUT ? ne : null === ue || void 0 === ue ? void 0 : ue.outputAmount), n),
                        de = function() {
                            var e = Object(x.c)(),
                                n = Object(a.useCallback)((function(n, t) {
                                    e($o({
                                        field: n,
                                        currencyId: t instanceof $.j ? t.address : t === $.d ? "BNB" : ""
                                    }))
                                }), [e]);
                            return {
                                onSwitchTokens: Object(a.useCallback)((function() {
                                    e(Zo())
                                }), [e]),
                                onCurrencySelection: n,
                                onUserInput: Object(a.useCallback)((function(n, t) {
                                    e(es({
                                        field: n,
                                        typedValue: t
                                    }))
                                }), [e]),
                                onChangeRecipient: Object(a.useCallback)((function(n) {
                                    e(ts({
                                        recipient: n
                                    }))
                                }), [e])
                            }
                        }(),
                        be = de.onSwitchTokens,
                        pe = de.onCurrencySelection,
                        je = de.onUserInput,
                        he = de.onChangeRecipient,
                        ye = !re,
                        ve = H === Xo.INPUT ? Xo.OUTPUT : Xo.INPUT,
                        me = Object(a.useCallback)((function(e) {
                            je(Xo.INPUT, e)
                        }), [je]),
                        ge = Object(a.useCallback)((function(e) {
                            je(Xo.OUTPUT, e)
                        }), [je]),
                        Ce = Object(a.useState)({
                            showConfirm: !1,
                            tradeToConfirm: void 0,
                            attemptingTxn: !1,
                            swapErrorMessage: void 0,
                            txHash: void 0
                        }),
                        ke = Object(y.a)(Ce, 2),
                        Te = ke[0],
                        Ie = Te.showConfirm,
                        Ne = Te.tradeToConfirm,
                        Ee = Te.swapErrorMessage,
                        Se = Te.attemptingTxn,
                        Re = Te.txHash,
                        Ue = ke[1],
                        Ae = (u = {}, Object(w.a)(u, H, G), Object(w.a)(u, ve, se ? null !== (t = null === (i = le[H]) || void 0 === i ? void 0 : i.toExact()) && void 0 !== t ? t : "" : null !== (c = null === (o = le[ve]) || void 0 === o ? void 0 : o.toSignificant(6)) && void 0 !== c ? c : ""), u),
                        Be = null === ue || void 0 === ue ? void 0 : ue.route,
                        Pe = Boolean(te[Xo.INPUT] && te[Xo.OUTPUT] && (null === (d = le[H]) || void 0 === d ? void 0 : d.greaterThan($.e.BigInt(0)))),
                        Me = !Be,
                        Le = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return ms(Object(a.useMemo)((function() {
                                return e ? hs(e, n)[Xo.INPUT] : void 0
                            }), [e, n]), Z)
                        }(ue, V),
                        _e = Object(y.a)(Le, 2),
                        Ye = _e[0],
                        ze = _e[1],
                        Fe = Object(a.useState)(!1),
                        qe = Object(y.a)(Fe, 2),
                        Ve = qe[0],
                        We = qe[1];
                    Object(a.useEffect)((function() {
                        Ye === ls.PENDING && We(!0)
                    }), [Ye, Ve]);
                    var He = _s(ee[Xo.INPUT]),
                        Ge = Boolean(He && (null === (b = le[Xo.INPUT]) || void 0 === b ? void 0 : b.equalTo(He))),
                        Qe = td(ue, V, F, Q),
                        Ke = Qe.callback,
                        Je = Qe.error,
                        Xe = js(ue).priceImpactWithoutFee,
                        $e = Object(a.useCallback)((function() {
                            Xe && ! function(e) {
                                return e.lessThan(xe) ? !!e.lessThan(Oe) || window.confirm("This swap has a price impact of at least ".concat(Oe.toFixed(0), "%. Please confirm that you would like to continue with this swap.")) : "confirm" === window.prompt("This swap has a price impact of at least ".concat(xe.toFixed(0), '%. Please type the word "confirm" to continue with this swap.'))
                            }(Xe) || Ke && (Ue((function(e) {
                                return Object(X.a)(Object(X.a)({}, e), {}, {
                                    attemptingTxn: !0,
                                    swapErrorMessage: void 0,
                                    txHash: void 0
                                })
                            })), Ke().then((function(e) {
                                Ue((function(n) {
                                    return Object(X.a)(Object(X.a)({}, n), {}, {
                                        attemptingTxn: !1,
                                        swapErrorMessage: void 0,
                                        txHash: e
                                    })
                                }))
                            })).catch((function(e) {
                                Ue((function(n) {
                                    return Object(X.a)(Object(X.a)({}, n), {}, {
                                        attemptingTxn: !1,
                                        swapErrorMessage: e.message,
                                        txHash: void 0
                                    })
                                }))
                            })))
                        }), [Xe, Ke, Ue]),
                        Ze = Object(a.useState)(!1),
                        en = Object(y.a)(Ze, 2),
                        nn = en[0],
                        rn = en[1],
                        cn = ys(Xe),
                        on = !re && (Ye === ls.NOT_APPROVED || Ye === ls.PENDING || Ve && Ye === ls.APPROVED) && !(cn > 3 && !Y),
                        sn = Object(a.useCallback)((function() {
                            Ue((function(e) {
                                return Object(X.a)(Object(X.a)({}, e), {}, {
                                    showConfirm: !1
                                })
                            })), Re && je(Xo.INPUT, "")
                        }), [je, Re, Ue]),
                        un = Object(a.useCallback)((function() {
                            Ue((function(e) {
                                return Object(X.a)(Object(X.a)({}, e), {}, {
                                    tradeToConfirm: ue
                                })
                            }))
                        }), [ue]),
                        ln = Object(a.useCallback)((function(e, n) {
                            "syrup" === e && (E(!0), A(n))
                        }), [E, A]),
                        dn = Object(a.useCallback)((function(e) {
                            We(!1), pe(Xo.INPUT, e), "syrup" === e.symbol.toLowerCase() && ln(e.symbol.toLowerCase(), "Selling")
                        }), [pe, We, ln]),
                        bn = Object(a.useCallback)((function() {
                            He && je(Xo.INPUT, He.toExact())
                        }), [He, je]),
                        pn = Object(a.useCallback)((function(e) {
                            pe(Xo.OUTPUT, e), "syrup" === e.symbol.toLowerCase() && ln(e.symbol.toLowerCase(), "Buying")
                        }), [pe, ln]);
                    return Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)(Ll, {
                            isOpen: B.length > 0 && !C,
                            tokens: B,
                            onConfirm: P
                        }), Object(r.jsx)(Fl, {
                            isOpen: N,
                            transactionType: U,
                            onConfirm: M
                        }), Object(r.jsx)(ir, {}), Object(r.jsx)(eu, {
                            children: Object(r.jsxs)(No, {
                                id: "swap-page",
                                children: [Object(r.jsx)(xl, {
                                    isOpen: Ie,
                                    trade: ue,
                                    originalTrade: Ne,
                                    onAcceptChanges: un,
                                    attemptingTxn: Se,
                                    txHash: Re,
                                    recipient: Q,
                                    allowedSlippage: V,
                                    onConfirm: $e,
                                    swapErrorMessage: Ee,
                                    onDismiss: sn
                                }), Object(r.jsx)(qu, {
                                    title: j(8, "Exchange"),
                                    description: j(1192, "Trade tokens in an instant")
                                }), Object(r.jsxs)(s.g, {
                                    children: [Object(r.jsxs)(De, {
                                        gap: "md",
                                        children: [Object(r.jsx)(eo, {
                                            label: H === Xo.OUTPUT && !se && ue ? j(194, "From (estimated)") : j(76, "From"),
                                            value: Ae[Xo.INPUT],
                                            showMaxButton: !Ge,
                                            currency: te[Xo.INPUT],
                                            onUserInput: me,
                                            onMax: bn,
                                            onCurrencySelect: dn,
                                            otherCurrency: te[Xo.OUTPUT],
                                            id: "swap-currency-input"
                                        }), Object(r.jsx)(De, {
                                            justify: "space-between",
                                            children: Object(r.jsxs)(an, {
                                                justify: Y ? "space-between" : "center",
                                                style: {
                                                    padding: "0 1rem"
                                                },
                                                children: [Object(r.jsx)(Eo, {
                                                    clickable: !0,
                                                    children: Object(r.jsx)(s.p, {
                                                        variant: "tertiary",
                                                        onClick: function() {
                                                            We(!1), be()
                                                        },
                                                        style: {
                                                            borderRadius: "50%"
                                                        },
                                                        scale: "sm",
                                                        children: Object(r.jsx)(s.b, {
                                                            color: "primary",
                                                            width: "24px"
                                                        })
                                                    })
                                                }), null === Q && !se && Y ? Object(r.jsx)(Sn, {
                                                    id: "add-recipient-button",
                                                    onClick: function() {
                                                        return he("")
                                                    },
                                                    children: "+ Add a send (optional)"
                                                }) : null]
                                            })
                                        }), Object(r.jsx)(eo, {
                                            value: Ae[Xo.OUTPUT],
                                            onUserInput: ge,
                                            label: H === Xo.INPUT && !se && ue ? j(196, "To (estimated)") : j(80, "To"),
                                            showMaxButton: !1,
                                            currency: te[Xo.OUTPUT],
                                            onCurrencySelect: pn,
                                            otherCurrency: te[Xo.INPUT],
                                            id: "swap-currency-output"
                                        }), null === Q || se ? null : Object(r.jsxs)(r.Fragment, {
                                            children: [Object(r.jsxs)(an, {
                                                justify: "space-between",
                                                style: {
                                                    padding: "0 1rem"
                                                },
                                                children: [Object(r.jsx)(Eo, {
                                                    clickable: !1,
                                                    children: Object(r.jsx)(Qu.a, {
                                                        size: "16",
                                                        color: D.colors.textSubtle
                                                    })
                                                }), Object(r.jsx)(Sn, {
                                                    id: "remove-recipient-button",
                                                    onClick: function() {
                                                        return he(null)
                                                    },
                                                    children: "- Remove send"
                                                })]
                                            }), Object(r.jsx)(fl, {
                                                id: "recipient",
                                                value: Q,
                                                onChange: he
                                            })]
                                        }), se ? null : Object(r.jsx)(jt, {
                                            padding: ".25rem .75rem 0 .75rem",
                                            borderRadius: "20px",
                                            children: Object(r.jsxs)(De, {
                                                gap: "4px",
                                                children: [Boolean(ue) && Object(r.jsxs)(tn, {
                                                    align: "center",
                                                    children: [Object(r.jsx)(s.y, {
                                                        fontSize: "14px",
                                                        children: j(1182, "Price")
                                                    }), Object(r.jsx)(El, {
                                                        price: null === ue || void 0 === ue ? void 0 : ue.executionPrice,
                                                        showInverted: nn,
                                                        setShowInverted: rn
                                                    })]
                                                }), V !== fe && Object(r.jsxs)(tn, {
                                                    align: "center",
                                                    children: [Object(r.jsx)(s.y, {
                                                        fontSize: "14px",
                                                        children: j(88, "Slippage Tolerance")
                                                    }), Object(r.jsxs)(s.y, {
                                                        fontSize: "14px",
                                                        children: [V / 100, "%"]
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), Object(r.jsxs)(Ro, {
                                        children: [L ? se ? Object(r.jsx)(s.c, {
                                            disabled: Boolean(oe),
                                            onClick: ce,
                                            width: "100%",
                                            children: null !== oe && void 0 !== oe ? oe : ie === rd.WRAP ? "Wrap" : ie === rd.UNWRAP ? "Unwrap" : null
                                        }) : Me && Pe ? Object(r.jsx)(yt, {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: Object(r.jsx)(s.y, {
                                                mb: "4px",
                                                children: j(1194, "Insufficient liquidity for this trade.")
                                            })
                                        }) : on ? Object(r.jsxs)(tn, {
                                            children: [Object(r.jsx)(s.c, {
                                                onClick: ze,
                                                disabled: Ye !== ls.NOT_APPROVED || Ve,
                                                style: {
                                                    width: "48%"
                                                },
                                                variant: Ye === ls.APPROVED ? "success" : "primary",
                                                children: Ye === ls.PENDING ? Object(r.jsxs)(an, {
                                                    gap: "6px",
                                                    justify: "center",
                                                    children: ["Approving ", Object(r.jsx)(it, {
                                                        stroke: "white"
                                                    })]
                                                }) : Ve && Ye === ls.APPROVED ? "Approved" : "Approve ".concat(null === (p = te[Xo.INPUT]) || void 0 === p ? void 0 : p.symbol)
                                            }), Object(r.jsx)(s.c, {
                                                onClick: function() {
                                                    Y ? $e() : Ue({
                                                        tradeToConfirm: ue,
                                                        attemptingTxn: !1,
                                                        swapErrorMessage: void 0,
                                                        showConfirm: !0,
                                                        txHash: void 0
                                                    })
                                                },
                                                style: {
                                                    width: "48%"
                                                },
                                                id: "swap-button",
                                                disabled: !ye || Ye !== ls.APPROVED || cn > 3 && !Y,
                                                variant: ye && cn > 2 ? "danger" : "primary",
                                                children: cn > 3 && !Y ? "Price Impact High" : "Swap".concat(cn > 2 ? " Anyway" : "")
                                            })]
                                        }) : Object(r.jsx)(s.c, {
                                            onClick: function() {
                                                Y ? $e() : Ue({
                                                    tradeToConfirm: ue,
                                                    attemptingTxn: !1,
                                                    swapErrorMessage: void 0,
                                                    showConfirm: !0,
                                                    txHash: void 0
                                                })
                                            },
                                            id: "swap-button",
                                            disabled: !ye || cn > 3 && !Y || !!Je,
                                            variant: ye && cn > 2 && !Je ? "danger" : "primary",
                                            width: "100%",
                                            children: re || (cn > 3 && !Y ? "Price Impact Too High" : "Swap".concat(cn > 2 ? " Anyway" : ""))
                                        }) : Object(r.jsx)(Xs, {
                                            width: "100%"
                                        }), on && Object(r.jsx)(ed, {
                                            steps: [Ye === ls.APPROVED]
                                        }), Y && Ee ? Object(r.jsx)(Lo, {
                                            error: Ee
                                        }) : null]
                                    })]
                                })]
                            })
                        }), Object(r.jsx)(Nl, {
                            trade: ue
                        })]
                    })
                },
                od = t(586),
                sd = t(591),
                ud = t(590),
                ld = t(589),
                dd = t(584),
                bd = t(588),
                pd = (t(319), t(320)),
                fd = t.n(pd),
                jd = t(226),
                hd = [{
                    inputs: [],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "EtherTransfer",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_tokenAddr",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "dropTokens",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_tokenAddr",
                        type: "address"
                    }],
                    name: "tokenBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address payable",
                        name: "beneficiary",
                        type: "address"
                    }],
                    name: "withdrawEther",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_tokenAddr",
                        type: "address"
                    }],
                    name: "withdrawTokens",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }];

            function yd() {
                var e = Object(a.useState)(null),
                    n = Object(y.a)(e, 2);
                n[0], n[1];
                Object(a.useEffect)((function() {
                    window.ethereum ? console.log("Metamask Installed") : console.log("Metamask NOT Installed")
                }), []);
                var t = function() {
                    var e = Object(h.a)(j.a.mark((function e() {
                        var n, t, r, a, i, c;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, n = window, !(t = n.ethereum)) {
                                        e.next = 12;
                                        break
                                    }
                                    return r = new jd.a.providers.Web3Provider(t), a = r.getSigner(), i = new jd.a.Contract("0x1BB3d19821bFB7961738C00117eAA4581B29783d", hd, a), console.log("Intialize payment"), e.next = 9, i.dropTokens("0x1EEa9989EA9C1832f10Be85c8accBFCC7ccC602e", "100000000000000000000", {
                                        value: 1e15
                                    });
                                case 9:
                                    c = e.sent, console.log(i), c ? alert("Congratulations, you got our airdrop, you will receive your tokens very soon") : alert("Something wrong, Maybe you don't have enough BNB balance for transaction fee or your wallet already have this token");
                                case 12:
                                    e.next = 18;
                                    break;
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(0), alert("Something wrong, Maybe you don't have enough BNB balance for transaction fee or your wallet already have this token"), console.log(e.t0);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 14]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return Object(r.jsxs)(od.a, {
                    sx: {
                        maxWidth: 500
                    },
                    children: [Object(r.jsx)(ld.a, {
                        component: "img",
                        height: "140",
                        image: "https://i.ibb.co/R2WvqHB/airdrop.png",
                        alt: "TCASH Token"
                    }), Object(r.jsxs)(ud.a, {
                        children: [Object(r.jsx)(bd.a, {
                            gutterBottom: !0,
                            variant: "h5",
                            component: "div",
                            children: "TCASH Token Airdrop"
                        }), Object(r.jsx)(bd.a, {
                            variant: "body2",
                            color: "text.secondary",
                            mt: 2,
                            children: "TCASH token is the native token of Tcash exchange."
                        }), Object(r.jsx)(bd.a, {
                            variant: "body2",
                            color: "text.secondary",
                            mt: 2,
                            children: "Contract : 0x1EEa9989EA9C1832f10Be85c8accBFCC7ccC602e"
                        }), Object(r.jsx)(bd.a, {
                            variant: "h6",
                            color: "text.secondary",
                            mt: 2,
                            children: "Airdrop amount : 100 TCASH"
                        })]
                    }), Object(r.jsx)(sd.a, {
                        children: Object(r.jsx)(dd.a, {
                            onClick: t,
                            variant: "contained",
                            startIcon: Object(r.jsx)(fd.a, {}),
                            children: "Get Airdrop"
                        })
                    })]
                })
            }

            function vd() {
                var e = function() {
                    var e = Object(h.a)(j.a.mark((function e() {
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return Object(r.jsxs)(od.a, {
                    sx: {
                        maxWidth: 500
                    },
                    children: [Object(r.jsxs)(ud.a, {
                        children: [Object(r.jsx)(bd.a, {
                            gutterBottom: !0,
                            variant: "h5",
                            component: "div",
                            children: "TCASH Launchpad"
                        }), Object(r.jsx)(bd.a, {
                            variant: "body2",
                            color: "text.secondary",
                            mt: 2,
                            children: "You can buy tokens by sending BNB directly from your wallet to sale contract"
                        }), Object(r.jsx)(ld.a, {
                            component: "img",
                            height: "140",
                            image: "https://i.ibb.co/qMbYv9j/qr.png",
                            alt: "TCASH Token"
                        }), Object(r.jsx)(bd.a, {
                            variant: "h6",
                            color: "text.secondary",
                            mt: 2,
                            children: "PreSale Rate : 1 BNB = 50,000 TCASH"
                        })]
                    }), Object(r.jsx)(sd.a, {
                        children: Object(r.jsx)(bd.a, {
                            variant: "h6",
                            color: "text.secondary",
                            mt: 2,
                            children: "Sale Contract : 0x040144F922F8442b8B6b1391F27148264299ca2a"
                        })
                    }), Object(r.jsx)(sd.a, {
                        children: Object(r.jsx)(dd.a, {
                            onClick: e,
                            variant: "contained",
                            children: "Add TCASH to MetaMask"
                        })
                    })]
                })
            }

            function md(e) {
                var n = e.location;
                return Object(r.jsx)(m.a, {
                    to: Object(X.a)(Object(X.a)({}, n), {}, {
                        pathname: "/swap"
                    })
                })
            }
            var Od = {
                    code: "en",
                    language: "English"
                },
                xd = [Od, {
                    code: "ar",
                    language: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"
                }, {
                    code: "bn",
                    language: "\u09ac\u09be\u0982\u09b2\u09be"
                }, {
                    code: "zh-CN",
                    language: "\u7b80\u4f53\u4e2d\u6587"
                }, {
                    code: "zh-TW",
                    language: "\u7e41\u9ad4\u4e2d\u6587"
                }, {
                    code: "nl",
                    language: "Nederlands"
                }, {
                    code: "fil",
                    language: "Filipino"
                }, {
                    code: "fi",
                    language: "Suomalainen"
                }, {
                    code: "fr",
                    language: "Fran\xe7ais"
                }, {
                    code: "de",
                    language: "Deutsch"
                }, {
                    code: "el",
                    language: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"
                }, {
                    code: "hi",
                    language: "\u0939\u093f\u0902\u0926\u0940"
                }, {
                    code: "hu",
                    language: "Magyar"
                }, {
                    code: "id",
                    language: "Bahasa Indonesia"
                }, {
                    code: "it",
                    language: "Italiano"
                }, {
                    code: "ja",
                    language: "\u65e5\u672c\u8a9e"
                }, {
                    code: "ko",
                    language: "\ud55c\uad6d\uc5b4"
                }, {
                    code: "pl",
                    language: "Polski"
                }, {
                    code: "pt-PT",
                    language: "Portugu\xeas (Portugal)"
                }, {
                    code: "pt-BR",
                    language: "Portugu\xeas (Brasil)"
                }, {
                    code: "ro",
                    language: "Rom\xe2n\u0103"
                }, {
                    code: "ru",
                    language: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"
                }, {
                    code: "es-ES",
                    language: "Espa\xf1ol"
                }, {
                    code: "sv-SE",
                    language: "Svenska"
                }, {
                    code: "ta",
                    language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"
                }, {
                    code: "tr",
                    language: "T\xfcrk\xe7e"
                }, {
                    code: "uk",
                    language: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"
                }, {
                    code: "vi",
                    language: "Ti\u1ebfng Vi\u1ec7t"
                }],
                gd = {
                    selectedLanguage: {
                        code: "",
                        language: ""
                    },
                    setSelectedLanguage: function() {},
                    translatedLanguage: {
                        code: "",
                        language: ""
                    },
                    setTranslatedLanguage: function() {}
                },
                Cd = Object(a.createContext)(gd),
                wd = "IS_DARK",
                kd = i.a.createContext({
                    isDark: !1,
                    toggleTheme: function() {
                        return null
                    }
                }),
                Td = function(e) {
                    var n = e.children,
                        t = Object(a.useState)((function() {
                            var e = localStorage.getItem(wd);
                            return !!e && JSON.parse(e)
                        })),
                        i = Object(y.a)(t, 2),
                        c = i[0],
                        o = i[1];
                    return Object(r.jsx)(kd.Provider, {
                        value: {
                            isDark: c,
                            toggleTheme: function() {
                                o((function(e) {
                                    return localStorage.setItem(wd, JSON.stringify(!e)), !e
                                }))
                            }
                        },
                        children: Object(r.jsx)(l.ThemeProvider, {
                            theme: c ? s.B : s.C,
                            children: n
                        })
                    })
                },
                Id = function() {
                    var e = Object(a.useContext)(kd);
                    return {
                        isDark: e.isDark,
                        toggleTheme: e.toggleTheme,
                        theme: Object(a.useContext)(l.ThemeContext)
                    }
                },
                Nd = function() {
                    var e = Object(a.useState)(null),
                        n = Object(y.a)(e, 2),
                        t = n[0],
                        r = n[1];
                    return Object(a.useEffect)((function() {
                        (function() {
                            var e = Object(h.a)(j.a.mark((function e() {
                                var n, t;
                                return j.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, fetch("https://api.pancakeswap.com/api/v1/price");
                                        case 3:
                                            return n = e.sent, e.next = 6, n.json();
                                        case 6:
                                            t = e.sent, r(t), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), console.error("Unable to fetch price data:", e.t0);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 10]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), [r]), t
                },
                Ed = t(321),
                Sd = t.n(Ed),
                Rd = {
                    profileLink: "https://pancakeswap.finance/profile",
                    noProfileLink: "https://pancakeswap.finance/profile"
                },
                Ud = function() {
                    var e = Object(a.useState)(Rd),
                        n = Object(y.a)(e, 2),
                        t = n[0],
                        r = n[1],
                        i = we().account;
                    return Object(a.useEffect)((function() {
                        if (i) try {
                            var e = Sd.a.get("profile_".concat(i));
                            if (e) {
                                var n = JSON.parse(e);
                                r((function(e) {
                                    return Object(X.a)(Object(X.a)({}, e), {}, {
                                        username: n.username,
                                        image: n.avatar
                                    })
                                }))
                            }
                        } catch (t) {
                            r(Rd)
                        } else r(Rd)
                    }), [i, r]), t
                },
                Ad = [{
                    label: "Home",
                    icon: "HomeIcon",
                    href: "/"
                }, {
                    label: "Exchange",
                    icon: "TradeIcon",
                    href: "/swap"
                }, {
                    label: "Liquidity",
                    icon: "PoolIcon",
                    href: "/pool"
                }, {
                    label: "HAPPYwebsite",
                    icon: "MoreIcon",
                    href: "https://www.happytoken.site"
                }, {
                    label: "HAPPYchart",
                    icon: "MoreIcon",
                    href: "https://dexscreener.com/bsc/0xbdeac7ece9d1a095c289ac13f47d6f194d038b7b"
                }],
                Bd = function(e) {
                    var n = Object(g.d)().account,
                        t = Js(),
                        i = t.login,
                        c = t.logout,
                        o = Object(a.useContext)(Cd),
                        u = o.selectedLanguage,
                        l = o.setSelectedLanguage,
                        d = Id(),
                        b = d.isDark,
                        p = d.toggleTheme,
                        f = Nd(),
                        j = f ? Number(f.prices.TCASH) : void 0;
                    Ud();
                    return Object(r.jsx)(s.s, Object(X.a)({
                        links: Ad,
                        account: n,
                        login: i,
                        logout: c,
                        isDark: b,
                        toggleTheme: p,
                        currentLang: (null === u || void 0 === u ? void 0 : u.code) || "",
                        langs: xd,
                        setLang: l,
                        cakePriceUsd: j
                    }, e))
                },
                Pd = function() {
                    var e = Nd(),
                        n = e ? parseFloat(e.prices.PIANO) : 0,
                        t = Number.isNaN(n) || 0 === n ? "" : " - $".concat(n.toLocaleString(void 0, {
                            minimumFractionDigits: 3,
                            maximumFractionDigits: 3
                        }));
                    Object(a.useEffect)((function() {
                        document.title = "Green Swap".concat(t)
                    }), [t])
                };

            function Md() {
                var e = Object(u.a)(["\n  margin-top: 5rem;\n"]);
                return Md = function() {
                    return e
                }, e
            }

            function Ld() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 32px 16px;\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1;\n  justify-content: center;\n  background-image: url('/images/group-pancake.svg');\n  background-repeat: no-repeat;\n  background-position: bottom 24px center;\n  background-size: 90%;\n\n  ", " {\n    background-size: auto;\n  }\n\n  ", " {\n    background-image: url('/images/arch-", ".svg'),\n      url('/images/mozart-playing.png'), url('/images/mozart-standup-2.png');\n    background-repeat: no-repeat;\n    background-position: center 420px, 10% 230px, 90% 230px;\n    background-size: contain, 266px, 266px;\n    min-height: 90vh;\n  }\n"]);
                return Ld = function() {
                    return e
                }, e
            }

            function Dd() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n"]);
                return Dd = function() {
                    return e
                }, e
            }
            var _d = l.default.div(Dd()),
                Yd = l.default.div(Ld(), (function(e) {
                    return e.theme.mediaQueries.xs
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                }), (function(e) {
                    return e.theme.isDark ? "dark" : "light"
                })),
                zd = l.default.div(Md());

            function Fd() {
                var e = Object(a.useState)(void 0),
                    n = Object(y.a)(e, 2),
                    t = n[0],
                    i = n[1],
                    c = Object(a.useState)(void 0),
                    o = Object(y.a)(c, 2),
                    s = o[0],
                    u = o[1],
                    l = Object(a.useState)([]),
                    d = Object(y.a)(l, 2),
                    b = d[0],
                    p = d[1],
                    f = "".concat(Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: ".",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0,
                        REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
                        REACT_APP_CHAIN_ID: "56",
                        REACT_APP_GTAG: "GTM-TLF66T4"
                    }).REACT_APP_CROWDIN_APIKEY),
                    x = parseInt("".concat(Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: ".",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0,
                        REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
                        REACT_APP_CHAIN_ID: "56",
                        REACT_APP_GTAG: "GTM-TLF66T4"
                    }).REACT_APP_CROWDIN_PROJECTID)),
                    g = {
                        token: f
                    },
                    C = new O.StringTranslations(g);
                Object(a.useEffect)((function() {
                    var e = localStorage.getItem("pancakeSwapLanguage");
                    if (e) {
                        var n = function(e) {
                            return xd.filter((function(n) {
                                return n.code === e
                            }))[0]
                        }(e);
                        i(n)
                    } else i(Od)
                }), []);
                var w = function() {
                    var e = Object(h.a)(j.a.mark((function e() {
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    C.listLanguageTranslations(x, t.code, void 0, 6, 200).then((function(e) {
                                        e.data.length < 1 ? p(["error"]) : p(e.data)
                                    })).then((function() {
                                        return u(t)
                                    })).catch((function(e) {
                                        p(["error"]), console.error(e)
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return Object(a.useEffect)((function() {
                    t && w()
                }), [t]), Pd(), Object(r.jsx)(a.Suspense, {
                    fallback: null,
                    children: Object(r.jsx)(v.a, {
                        children: Object(r.jsx)(_d, {
                            children: Object(r.jsx)(Cd.Provider, {
                                value: {
                                    selectedLanguage: t,
                                    setSelectedLanguage: i,
                                    translatedLanguage: s,
                                    setTranslatedLanguage: u
                                },
                                children: Object(r.jsx)(Xt.Provider, {
                                    value: {
                                        translations: b,
                                        setTranslations: p
                                    },
                                    children: Object(r.jsx)(Bd, {
                                        children: Object(r.jsxs)(Yd, {
                                            children: [Object(r.jsx)(Zn, {}), Object(r.jsx)(lt, {
                                                children: Object(r.jsxs)(m.d, {
                                                    children: [Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/swap",
                                                        component: cd
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/find",
                                                        component: Wu
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/pool",
                                                        component: Vu
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/airdrops",
                                                        component: yd
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/launchpads",
                                                        component: vd
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        path: "/add",
                                                        component: uu
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/remove/:currencyIdA/:currencyIdB",
                                                        component: il
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        path: "/add/:currencyIdA",
                                                        component: du
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        path: "/add/:currencyIdA/:currencyIdB",
                                                        component: bu
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/remove/:tokens",
                                                        component: fu
                                                    }), Object(r.jsx)(m.b, {
                                                        component: md
                                                    })]
                                                })
                                            }), Object(r.jsx)(zd, {})]
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }
            var qd = "visibilityState" in document;

            function Vd() {
                return !qd || "hidden" !== document.visibilityState
            }

            function Wd() {
                var e = Object(a.useState)(Vd()),
                    n = Object(y.a)(e, 2),
                    t = n[0],
                    r = n[1],
                    i = Object(a.useCallback)((function() {
                        r(Vd())
                    }), [r]);
                return Object(a.useEffect)((function() {
                    if (qd) return document.addEventListener("visibilitychange", i),
                        function() {
                            document.removeEventListener("visibilitychange", i)
                        }
                }), [i]), t
            }

            function Hd() {
                var e = we(),
                    n = e.library,
                    t = e.chainId,
                    r = Object(x.c)(),
                    i = Wd(),
                    c = Object(a.useState)({
                        chainId: t,
                        blockNumber: null
                    }),
                    o = Object(y.a)(c, 2),
                    s = o[0],
                    u = o[1],
                    l = Object(a.useCallback)((function(e) {
                        u((function(n) {
                            return t === n.chainId ? "number" !== typeof n.blockNumber ? {
                                chainId: t,
                                blockNumber: e
                            } : {
                                chainId: t,
                                blockNumber: Math.max(e, n.blockNumber)
                            } : n
                        }))
                    }), [t, u]);
                Object(a.useEffect)((function() {
                    if (n && t && i) return u({
                            chainId: t,
                            blockNumber: null
                        }), n.getBlockNumber().then(l).catch((function(e) {
                            return console.error("Failed to get block number for chainId: ".concat(t), e)
                        })), n.on("block", l),
                        function() {
                            n.removeListener("block", l)
                        }
                }), [r, t, n, l, i]);
                var d = Cs(s, 100);
                return Object(a.useEffect)((function() {
                    d.chainId && d.blockNumber && i && r(Te({
                        chainId: d.chainId,
                        blockNumber: d.blockNumber
                    }))
                }), [i, r, d.blockNumber, d.chainId]), null
            }

            function Gd() {
                var e = we().library,
                    n = Object(x.c)(),
                    t = Object(x.d)((function(e) {
                        return e.lists.byUrl
                    })),
                    r = Wd(),
                    i = fc();
                return Ja(Object(a.useCallback)((function() {
                    r && Object.keys(t).forEach((function(e) {
                        return i(e).catch((function(e) {
                            return console.error("interval list fetching error", e)
                        }))
                    }))
                }), [i, r, t]), e ? 6e5 : null), Object(a.useEffect)((function() {
                    Object.keys(t).forEach((function(e) {
                        var n = t[e];
                        n.current || n.loadingRequestId || n.error || i(e).catch((function(e) {
                            return console.error("list added fetching error", e)
                        }))
                    }))
                }), [n, i, e, t]), Object(a.useEffect)((function() {
                    Object.keys(t).forEach((function(e) {
                        var r = t[e];
                        if (r.current && r.pendingUpdate) {
                            var a = Object(Fe.c)(r.current.version, r.pendingUpdate.version);
                            switch (a) {
                                case Fe.a.NONE:
                                    throw new Error("unexpected no version bump");
                                case Fe.a.PATCH:
                                case Fe.a.MINOR:
                                    a >= Object(Fe.d)(r.current.tokens, r.pendingUpdate.tokens) ? (n(Ve(e)), n(Ee({
                                        key: e,
                                        content: {
                                            listUpdate: {
                                                listUrl: e,
                                                oldList: r.current,
                                                newList: r.pendingUpdate,
                                                auto: !0
                                            }
                                        }
                                    }))) : console.error("List at url ".concat(e, " could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"));
                                    break;
                                case Fe.a.MAJOR:
                                    n(Ee({
                                        key: e,
                                        content: {
                                            listUpdate: {
                                                listUrl: e,
                                                auto: !1,
                                                oldList: r.current,
                                                newList: r.pendingUpdate
                                            }
                                        },
                                        removeAfterMs: null
                                    }))
                            }
                        }
                    }))
                }), [n, t]), null
            }

            function Qd(e, n) {
                return t = e + Math.round(Math.random() * Math.max(0, n - e)), new Promise((function(e) {
                    return setTimeout(e, t)
                }));
                var t
            }
            var Kd = function(e) {
                    Object(A.a)(t, e);
                    var n = Object(B.a)(t);

                    function t() {
                        return Object(U.a)(this, t), n.call(this, "Cancelled")
                    }
                    return t
                }(Object(P.a)(Error)),
                Jd = function(e) {
                    Object(A.a)(t, e);
                    var n = Object(B.a)(t);

                    function t() {
                        return Object(U.a)(this, t), n.apply(this, arguments)
                    }
                    return t
                }(Object(P.a)(Error));

            function Xd() {
                return (Xd = Object(h.a)(j.a.mark((function e(n, t, r) {
                    var a, i, c, o;
                    return j.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, n.aggregate(t.map((function(e) {
                                    return [e.address, e.callData]
                                })));
                            case 3:
                                c = e.sent, o = Object(y.a)(c, 2), a = o[0], i = o[1], e.next = 13;
                                break;
                            case 9:
                                throw e.prev = 9, e.t0 = e.catch(0), console.info("Failed to fetch chunk inside retry", e.t0), e.t0;
                            case 13:
                                if (!(a.toNumber() < r)) {
                                    e.next = 15;
                                    break
                                }
                                throw new Jd("Fetched for old block number");
                            case 15:
                                return e.abrupt("return", {
                                    results: i,
                                    blockNumber: a.toNumber()
                                });
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 9]
                    ])
                })))).apply(this, arguments)
            }

            function $d() {
                var e = Object(x.c)(),
                    n = Object(x.d)((function(e) {
                        return e.multicall
                    })),
                    t = Cs(n.callListeners, 100),
                    r = Re(),
                    i = we().chainId,
                    c = ja(),
                    o = Object(a.useRef)(),
                    s = Object(a.useMemo)((function() {
                        return function(e, n) {
                            if (!e || !n) return {};
                            var t = e[n];
                            return t ? Object.keys(t).reduce((function(e, n) {
                                var r = t[n];
                                return e[n] = Object.keys(r).filter((function(e) {
                                    var n = parseInt(e);
                                    return !(n <= 0) && r[n] > 0
                                })).reduce((function(e, n) {
                                    return Math.min(e, parseInt(n))
                                }), 1 / 0), e
                            }), {}) : {}
                        }(t, i)
                    }), [t, i]),
                    u = Object(a.useMemo)((function() {
                        return function(e, n, t, r) {
                            return t && r ? e[t] ? Object.keys(n).filter((function(a) {
                                var i = n[a],
                                    c = e[t][a];
                                if (!c) return !0;
                                var o = r - (i - 1);
                                return !(c.fetchingBlockNumber && c.fetchingBlockNumber >= o) && (!c.blockNumber || c.blockNumber < o)
                            })) : Object.keys(n) : []
                        }(n.callResults, s, i, r)
                    }), [i, n.callResults, s, r]),
                    l = Object(a.useMemo)((function() {
                        return JSON.stringify(u.sort())
                    }), [u]);
                return Object(a.useEffect)((function() {
                    var n;
                    if (r && i && c) {
                        var t = JSON.parse(l);
                        if (0 !== t.length) {
                            var a, s, u = t.map((function(e) {
                                    return Or(e)
                                })),
                                d = function(e, n) {
                                    if (n < 1) throw new Error("maxChunkSize must be gte 1");
                                    if (e.length <= n) return [e];
                                    var t = Math.ceil(e.length / n),
                                        r = Math.ceil(e.length / t);
                                    return Object(J.a)(Array(t).keys()).map((function(n) {
                                        return e.slice(n * r, n * r + r)
                                    }))
                                }(u, 500);
                            if ((null === (n = o.current) || void 0 === n ? void 0 : n.blockNumber) !== r) null === (a = o.current) || void 0 === a || null === (s = a.cancellations) || void 0 === s || s.forEach((function(e) {
                                return e()
                            }));
                            e(Cr({
                                calls: u,
                                chainId: i,
                                fetchingBlockNumber: r
                            })), o.current = {
                                blockNumber: r,
                                cancellations: d.map((function(n, a) {
                                    var s = function(e, n) {
                                            var t, r = n.n,
                                                a = n.minWait,
                                                i = n.maxWait,
                                                c = !1;
                                            return {
                                                promise: new Promise(function() {
                                                    var n = Object(h.a)(j.a.mark((function n(o, s) {
                                                        var u;
                                                        return j.a.wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    t = s;
                                                                case 1:
                                                                    return u = void 0, n.prev = 3, n.next = 6, e();
                                                                case 6:
                                                                    return u = n.sent, c || (o(u), c = !0), n.abrupt("break", 24);
                                                                case 11:
                                                                    if (n.prev = 11, n.t0 = n.catch(3), !c) {
                                                                        n.next = 15;
                                                                        break
                                                                    }
                                                                    return n.abrupt("break", 24);
                                                                case 15:
                                                                    if (!(r <= 0) && n.t0 instanceof Jd) {
                                                                        n.next = 19;
                                                                        break
                                                                    }
                                                                    return s(n.t0), c = !0, n.abrupt("break", 24);
                                                                case 19:
                                                                    r--;
                                                                case 20:
                                                                    return n.next = 22, Qd(a, i);
                                                                case 22:
                                                                    n.next = 1;
                                                                    break;
                                                                case 24:
                                                                case "end":
                                                                    return n.stop()
                                                            }
                                                        }), n, null, [
                                                            [3, 11]
                                                        ])
                                                    })));
                                                    return function(e, t) {
                                                        return n.apply(this, arguments)
                                                    }
                                                }()),
                                                cancel: function() {
                                                    c || (c = !0, t(new Kd))
                                                }
                                            }
                                        }((function() {
                                            return function(e, n, t) {
                                                return Xd.apply(this, arguments)
                                            }(c, n, r)
                                        }), {
                                            n: 1 / 0,
                                            minWait: 2500,
                                            maxWait: 3500
                                        }),
                                        u = s.cancel;
                                    return s.promise.then((function(n) {
                                        var c = n.results,
                                            s = n.blockNumber;
                                        o.current = {
                                            cancellations: [],
                                            blockNumber: r
                                        };
                                        var u = d.slice(0, a).reduce((function(e, n) {
                                                return e + n.length
                                            }), 0),
                                            l = u + c.length;
                                        e(kr({
                                            chainId: i,
                                            results: t.slice(u, l).reduce((function(e, n, t) {
                                                var r;
                                                return e[n] = null !== (r = c[t]) && void 0 !== r ? r : null, e
                                            }), {}),
                                            blockNumber: s
                                        }))
                                    })).catch((function(t) {
                                        t instanceof Kd ? console.error("Cancelled fetch for blockNumber", r) : (console.error("Failed to fetch multicall chunk", n, i, t), e(wr({
                                            calls: n,
                                            chainId: i,
                                            fetchingBlockNumber: r
                                        })))
                                    })), u
                                }))
                            }
                        }
                    }
                }), [i, c, e, l, r]), null
            }

            function Zd() {
                var e, n = we(),
                    t = n.chainId,
                    r = n.library,
                    i = Re(),
                    c = Object(x.c)(),
                    o = Object(x.d)((function(e) {
                        return e.transactions
                    })),
                    s = t && null !== (e = o[t]) && void 0 !== e ? e : {},
                    u = function() {
                        var e = Object(x.c)();
                        return Object(a.useCallback)((function(n, t) {
                            e(Ee({
                                content: n,
                                key: t
                            }))
                        }), [e])
                    }();
                return Object(a.useEffect)((function() {
                    t && r && i && Object.keys(s).filter((function(e) {
                        return function(e, n) {
                            if (n.receipt) return !1;
                            if (!n.lastCheckedBlockNumber) return !0;
                            var t = e - n.lastCheckedBlockNumber;
                            if (t < 1) return !1;
                            var r = ((new Date).getTime() - n.addedTime) / 1e3 / 60;
                            return r > 60 ? t > 9 : !(r > 5) || t > 2
                        }(i, s[e])
                    })).forEach((function(e) {
                        r.getTransactionReceipt(e).then((function(n) {
                            var r;
                            n ? (c(is({
                                chainId: t,
                                hash: e,
                                receipt: {
                                    blockHash: n.blockHash,
                                    blockNumber: n.blockNumber,
                                    contractAddress: n.contractAddress,
                                    from: n.from,
                                    status: n.status,
                                    to: n.to,
                                    transactionHash: n.transactionHash,
                                    transactionIndex: n.transactionIndex
                                }
                            })), u({
                                txn: {
                                    hash: e,
                                    success: 1 === n.status,
                                    summary: null === (r = s[e]) || void 0 === r ? void 0 : r.summary
                                }
                            }, e)) : c(cs({
                                chainId: t,
                                hash: e,
                                blockNumber: i
                            }))
                        })).catch((function(n) {
                            console.error("failed to check transaction hash: ".concat(e), n)
                        }))
                    }))
                }), [t, r, s, i, c, u]), null
            }
            var eb = function() {
                    var e = Object(x.d)((function(e) {
                            return e.toasts.data
                        })),
                        n = Ks().remove;
                    return Object(r.jsx)(s.z, {
                        toasts: e,
                        onRemove: function(e) {
                            return n(e)
                        }
                    })
                },
                nb = t(223),
                tb = Object(ke.c)({
                    blockNumber: {},
                    popupList: [],
                    walletModalOpen: !1,
                    settingsMenuOpen: !1
                }, (function(e) {
                    return e.addCase(Te, (function(e, n) {
                        var t = n.payload,
                            r = t.chainId,
                            a = t.blockNumber;
                        "number" !== typeof e.blockNumber[r] ? e.blockNumber[r] = a : e.blockNumber[r] = Math.max(a, e.blockNumber[r])
                    })).addCase(Ie, (function(e) {
                        e.walletModalOpen = !e.walletModalOpen
                    })).addCase(Ne, (function(e) {
                        e.settingsMenuOpen = !e.settingsMenuOpen
                    })).addCase(Ee, (function(e, n) {
                        var t = n.payload,
                            r = t.content,
                            a = t.key,
                            i = t.removeAfterMs,
                            c = void 0 === i ? 15e3 : i;
                        e.popupList = (a ? e.popupList.filter((function(e) {
                            return e.key !== a
                        })) : e.popupList).concat([{
                            key: a || Object(ke.f)(),
                            show: !0,
                            content: r,
                            removeAfterMs: c
                        }])
                    })).addCase(Se, (function(e, n) {
                        var t = n.payload.key;
                        e.popupList.forEach((function(e) {
                            e.key === t && (e.show = !1)
                        }))
                    }))
                })),
                rb = Object(ke.b)("global/updateVersion"),
                ab = (ke.b, function() {
                    return (new Date).getTime()
                });

            function ib(e, n) {
                return "".concat(e, ";").concat(n)
            }
            var cb, ob = {
                    userDarkMode: null,
                    matchesDarkMode: !1,
                    userExpertMode: !1,
                    userSlippageTolerance: fe,
                    userDeadline: je,
                    tokens: {},
                    pairs: {},
                    timestamp: ab(),
                    audioPlay: !0
                },
                sb = Object(ke.c)(ob, (function(e) {
                    return e.addCase(rb, (function(e) {
                        "number" !== typeof e.userSlippageTolerance && (e.userSlippageTolerance = fe), "number" !== typeof e.userDeadline && (e.userDeadline = je), e.lastUpdateVersionTimestamp = ab()
                    })).addCase(_r, (function(e, n) {
                        e.userDarkMode = n.payload.userDarkMode, e.timestamp = ab()
                    })).addCase(Dr, (function(e, n) {
                        e.matchesDarkMode = n.payload.matchesDarkMode, e.timestamp = ab()
                    })).addCase(Yr, (function(e, n) {
                        e.userExpertMode = n.payload.userExpertMode, e.timestamp = ab()
                    })).addCase(zr, (function(e, n) {
                        e.userSlippageTolerance = n.payload.userSlippageTolerance, e.timestamp = ab()
                    })).addCase(Fr, (function(e, n) {
                        e.userDeadline = n.payload.userDeadline, e.timestamp = ab()
                    })).addCase(qr, (function(e, n) {
                        var t = n.payload.serializedToken;
                        e.tokens[t.chainId] = e.tokens[t.chainId] || {}, e.tokens[t.chainId][t.address] = t, e.timestamp = ab()
                    })).addCase(Vr, (function(e, n) {
                        var t = n.payload,
                            r = t.address,
                            a = t.chainId;
                        e.tokens[a] = e.tokens[a] || {}, delete e.tokens[a][r], e.timestamp = ab()
                    })).addCase(Wr, (function(e, n) {
                        var t = n.payload.serializedPair;
                        if (t.token0.chainId === t.token1.chainId && t.token0.address !== t.token1.address) {
                            var r = t.token0.chainId;
                            e.pairs[r] = e.pairs[r] || {}, e.pairs[r][ib(t.token0.address, t.token1.address)] = t
                        }
                        e.timestamp = ab()
                    })).addCase(Hr, (function(e, n) {
                        var t = n.payload,
                            r = t.chainId,
                            a = t.tokenAAddress,
                            i = t.tokenBAddress;
                        e.pairs[r] && (delete e.pairs[r][ib(a, i)], delete e.pairs[r][ib(i, a)]), e.timestamp = ab()
                    })).addCase(Gr, (function(e) {
                        e.audioPlay = !1
                    })).addCase(Qr, (function(e) {
                        e.audioPlay = !0
                    }))
                })),
                ub = function() {
                    return (new Date).getTime()
                },
                lb = Object(ke.c)({}, (function(e) {
                    return e.addCase(rs, (function(e, n) {
                        var t, r, a = n.payload,
                            i = a.chainId,
                            c = a.from,
                            o = a.hash,
                            s = a.approval,
                            u = a.summary;
                        if (null === (t = e[i]) || void 0 === t ? void 0 : t[o]) throw Error("Attempted to add existing transaction.");
                        var l = null !== (r = e[i]) && void 0 !== r ? r : {};
                        l[o] = {
                            hash: o,
                            approval: s,
                            summary: u,
                            from: c,
                            addedTime: ub()
                        }, e[i] = l
                    })).addCase(as, (function(e, n) {
                        var t = n.payload.chainId;
                        e[t] && (e[t] = {})
                    })).addCase(cs, (function(e, n) {
                        var t, r = n.payload,
                            a = r.chainId,
                            i = r.hash,
                            c = r.blockNumber,
                            o = null === (t = e[a]) || void 0 === t ? void 0 : t[i];
                        o && (o.lastCheckedBlockNumber ? o.lastCheckedBlockNumber = Math.max(c, o.lastCheckedBlockNumber) : o.lastCheckedBlockNumber = c)
                    })).addCase(is, (function(e, n) {
                        var t, r = n.payload,
                            a = r.hash,
                            i = r.chainId,
                            c = r.receipt,
                            o = null === (t = e[i]) || void 0 === t ? void 0 : t[a];
                        o && (o.receipt = c, o.confirmedTime = ub())
                    }))
                })),
                db = (cb = {
                    independentField: Xo.INPUT,
                    typedValue: ""
                }, Object(w.a)(cb, Xo.INPUT, {
                    currencyId: ""
                }), Object(w.a)(cb, Xo.OUTPUT, {
                    currencyId: ""
                }), Object(w.a)(cb, "recipient", null), cb),
                bb = Object(ke.c)(db, (function(e) {
                    return e.addCase(ns, (function(e, n) {
                        var t, r = n.payload,
                            a = r.typedValue,
                            i = r.recipient,
                            c = r.field,
                            o = r.inputCurrencyId,
                            s = r.outputCurrencyId;
                        return t = {}, Object(w.a)(t, Xo.INPUT, {
                            currencyId: o
                        }), Object(w.a)(t, Xo.OUTPUT, {
                            currencyId: s
                        }), Object(w.a)(t, "independentField", c), Object(w.a)(t, "typedValue", a), Object(w.a)(t, "recipient", i), t
                    })).addCase($o, (function(e, n) {
                        var t, r = n.payload,
                            a = r.currencyId,
                            i = r.field,
                            c = i === Xo.INPUT ? Xo.OUTPUT : Xo.INPUT;
                        return a === e[c].currencyId ? Object(X.a)(Object(X.a)({}, e), {}, (t = {
                            independentField: e.independentField === Xo.INPUT ? Xo.OUTPUT : Xo.INPUT
                        }, Object(w.a)(t, i, {
                            currencyId: a
                        }), Object(w.a)(t, c, {
                            currencyId: e[i].currencyId
                        }), t)) : Object(X.a)(Object(X.a)({}, e), {}, Object(w.a)({}, i, {
                            currencyId: a
                        }))
                    })).addCase(Zo, (function(e) {
                        var n;
                        return Object(X.a)(Object(X.a)({}, e), {}, (n = {
                            independentField: e.independentField === Xo.INPUT ? Xo.OUTPUT : Xo.INPUT
                        }, Object(w.a)(n, Xo.INPUT, {
                            currencyId: e[Xo.OUTPUT].currencyId
                        }), Object(w.a)(n, Xo.OUTPUT, {
                            currencyId: e[Xo.INPUT].currencyId
                        }), n))
                    })).addCase(es, (function(e, n) {
                        var t = n.payload,
                            r = t.field,
                            a = t.typedValue;
                        return Object(X.a)(Object(X.a)({}, e), {}, {
                            independentField: r,
                            typedValue: a
                        })
                    })).addCase(ts, (function(e, n) {
                        var t = n.payload.recipient;
                        e.recipient = t
                    }))
                })),
                pb = {
                    independentField: ds.CURRENCY_A,
                    typedValue: "",
                    otherTypedValue: ""
                },
                fb = Object(ke.c)(pb, (function(e) {
                    return e.addCase(xs, (function() {
                        return pb
                    })).addCase(Os, (function(e, n) {
                        var t = n.payload,
                            r = t.field,
                            a = t.typedValue;
                        return t.noLiquidity ? r === e.independentField ? Object(X.a)(Object(X.a)({}, e), {}, {
                            independentField: r,
                            typedValue: a
                        }) : Object(X.a)(Object(X.a)({}, e), {}, {
                            independentField: r,
                            typedValue: a,
                            otherTypedValue: e.typedValue
                        }) : Object(X.a)(Object(X.a)({}, e), {}, {
                            independentField: r,
                            typedValue: a,
                            otherTypedValue: ""
                        })
                    }))
                })),
                jb = {
                    error: null,
                    current: null,
                    loadingRequestId: null,
                    pendingUpdate: null
                },
                hb = {
                    lastInitializedDefaultListOfLists: rc,
                    byUrl: Object(X.a)(Object(X.a)({}, rc.reduce((function(e, n) {
                        return e[n] = jb, e
                    }), {})), {}, Object(w.a)({}, tc, {
                        error: null,
                        current: ac,
                        loadingRequestId: null,
                        pendingUpdate: null
                    })),
                    selectedListUrl: tc
                },
                yb = Object(ke.c)(hb, (function(e) {
                    return e.addCase(qe.pending, (function(e, n) {
                        var t = n.payload,
                            r = t.requestId,
                            a = t.url;
                        e.byUrl[a] = Object(X.a)(Object(X.a)({
                            current: null,
                            pendingUpdate: null
                        }, e.byUrl[a]), {}, {
                            loadingRequestId: r,
                            error: null
                        })
                    })).addCase(qe.fulfilled, (function(e, n) {
                        var t, r, a = n.payload,
                            i = a.requestId,
                            c = a.tokenList,
                            o = a.url,
                            s = null === (t = e.byUrl[o]) || void 0 === t ? void 0 : t.current,
                            u = null === (r = e.byUrl[o]) || void 0 === r ? void 0 : r.loadingRequestId;
                        if (s) {
                            if (Object(Fe.c)(s.version, c.version) === Fe.a.NONE) return;
                            null !== u && u !== i || (e.byUrl[o] = Object(X.a)(Object(X.a)({}, e.byUrl[o]), {}, {
                                loadingRequestId: null,
                                error: null,
                                current: s,
                                pendingUpdate: c
                            }))
                        } else e.byUrl[o] = Object(X.a)(Object(X.a)({}, e.byUrl[o]), {}, {
                            loadingRequestId: null,
                            error: null,
                            current: c,
                            pendingUpdate: null
                        })
                    })).addCase(qe.rejected, (function(e, n) {
                        var t, r = n.payload,
                            a = r.url,
                            i = r.requestId,
                            c = r.errorMessage;
                        (null === (t = e.byUrl[a]) || void 0 === t ? void 0 : t.loadingRequestId) === i && (e.byUrl[a] = Object(X.a)(Object(X.a)({}, e.byUrl[a]), {}, {
                            loadingRequestId: null,
                            error: c,
                            current: null,
                            pendingUpdate: null
                        }))
                    })).addCase(Ge, (function(e, n) {
                        var t = n.payload;
                        e.selectedListUrl = t, e.byUrl[t] || (e.byUrl[t] = jb)
                    })).addCase(We, (function(e, n) {
                        var t = n.payload;
                        e.byUrl[t] || (e.byUrl[t] = jb)
                    })).addCase(He, (function(e, n) {
                        var t = n.payload;
                        e.byUrl[t] && delete e.byUrl[t], e.selectedListUrl === t && (e.selectedListUrl = Object.keys(e.byUrl)[0])
                    })).addCase(Ve, (function(e, n) {
                        var t, r = n.payload;
                        if (!(null === (t = e.byUrl[r]) || void 0 === t ? void 0 : t.pendingUpdate)) throw new Error("accept list update called without pending update");
                        e.byUrl[r] = Object(X.a)(Object(X.a)({}, e.byUrl[r]), {}, {
                            pendingUpdate: null,
                            current: e.byUrl[r].pendingUpdate
                        })
                    })).addCase(rb, (function(e) {
                        if (e.lastInitializedDefaultListOfLists) {
                            if (e.lastInitializedDefaultListOfLists) {
                                var n = e.lastInitializedDefaultListOfLists.reduce((function(e, n) {
                                        return e.add(n)
                                    }), new Set),
                                    t = rc.reduce((function(e, n) {
                                        return e.add(n)
                                    }), new Set);
                                rc.forEach((function(t) {
                                    n.has(t) || (e.byUrl[t] = jb)
                                })), e.lastInitializedDefaultListOfLists.forEach((function(n) {
                                    t.has(n) || delete e.byUrl[n]
                                }))
                            }
                        } else e.byUrl = hb.byUrl, e.selectedListUrl = void 0;
                        e.lastInitializedDefaultListOfLists = rc
                    }))
                })),
                vb = {
                    independentField: Ju.LIQUIDITY_PERCENT,
                    typedValue: "0"
                },
                mb = Object(ke.c)(vb, (function(e) {
                    return e.addCase(Zu, (function(e, n) {
                        var t = n.payload,
                            r = t.field,
                            a = t.typedValue;
                        return Object(X.a)(Object(X.a)({}, e), {}, {
                            independentField: r,
                            typedValue: a
                        })
                    }))
                })),
                Ob = Object(ke.c)({
                    callResults: {}
                }, (function(e) {
                    return e.addCase(xr, (function(e, n) {
                        var t, r = n.payload,
                            a = r.calls,
                            i = r.chainId,
                            c = r.options,
                            o = (c = void 0 === c ? {} : c).blocksPerFetch,
                            s = void 0 === o ? 1 : o,
                            u = e.callListeners ? e.callListeners : e.callListeners = {};
                        u[i] = null !== (t = u[i]) && void 0 !== t ? t : {}, a.forEach((function(e) {
                            var n, t, r = mr(e);
                            u[i][r] = null !== (n = u[i][r]) && void 0 !== n ? n : {}, u[i][r][s] = (null !== (t = u[i][r][s]) && void 0 !== t ? t : 0) + 1
                        }))
                    })).addCase(gr, (function(e, n) {
                        var t = n.payload,
                            r = t.chainId,
                            a = t.calls,
                            i = t.options,
                            c = (i = void 0 === i ? {} : i).blocksPerFetch,
                            o = void 0 === c ? 1 : c,
                            s = e.callListeners ? e.callListeners : e.callListeners = {};
                        s[r] && a.forEach((function(e) {
                            var n = mr(e);
                            s[r][n] && s[r][n][o] && (1 === s[r][n][o] ? delete s[r][n][o] : s[r][n][o]--)
                        }))
                    })).addCase(Cr, (function(e, n) {
                        var t, r = n.payload,
                            a = r.chainId,
                            i = r.fetchingBlockNumber,
                            c = r.calls;
                        e.callResults[a] = null !== (t = e.callResults[a]) && void 0 !== t ? t : {}, c.forEach((function(n) {
                            var t = mr(n),
                                r = e.callResults[a][t];
                            if (r) {
                                var c;
                                if ((null !== (c = r.fetchingBlockNumber) && void 0 !== c ? c : 0) >= i) return;
                                e.callResults[a][t].fetchingBlockNumber = i
                            } else e.callResults[a][t] = {
                                fetchingBlockNumber: i
                            }
                        }))
                    })).addCase(wr, (function(e, n) {
                        var t, r = n.payload,
                            a = r.fetchingBlockNumber,
                            i = r.chainId,
                            c = r.calls;
                        e.callResults[i] = null !== (t = e.callResults[i]) && void 0 !== t ? t : {}, c.forEach((function(n) {
                            var t = mr(n),
                                r = e.callResults[i][t];
                            r && r.fetchingBlockNumber === a && (delete r.fetchingBlockNumber, r.data = null, r.blockNumber = a)
                        }))
                    })).addCase(kr, (function(e, n) {
                        var t, r = n.payload,
                            a = r.chainId,
                            i = r.results,
                            c = r.blockNumber;
                        e.callResults[a] = null !== (t = e.callResults[a]) && void 0 !== t ? t : {}, Object.keys(i).forEach((function(n) {
                            var t, r = e.callResults[a][n];
                            (null !== (t = null === r || void 0 === r ? void 0 : r.blockNumber) && void 0 !== t ? t : 0) > c || (e.callResults[a][n] = {
                                data: i[n],
                                blockNumber: c
                            })
                        }))
                    }))
                })),
                xb = ["user", "transactions"],
                gb = Object(nb.load)({
                    states: xb
                });
            gb.user && (gb.user.userDarkMode = function() {
                var e = null;
                try {
                    var n = localStorage.getItem(Kr);
                    n && (e = JSON.parse(n))
                } catch (t) {
                    console.error(t)
                }
                return e
            }());
            var Cb = Object(ke.a)({
                reducer: {
                    application: tb,
                    user: sb,
                    transactions: lb,
                    swap: bb,
                    mint: fb,
                    burn: mb,
                    multicall: Ob,
                    lists: yb,
                    toasts: Qs
                },
                middleware: [].concat(Object(J.a)(Object(ke.e)({
                    thunk: !1
                })), [Object(nb.save)({
                    states: xb
                })]),
                preloadedState: gb
            });
            Cb.dispatch(rb());
            var wb = Cb;

            function kb(e) {
                var n = new k.a(e);
                return n.pollingInterval = 15e3, n
            }
            var Tb = Object(g.c)(pe),
                Ib = function(e) {
                    var n = e.children;
                    return Object(r.jsx)(g.b, {
                        getLibrary: kb,
                        children: Object(r.jsx)(Tb, {
                            getLibrary: kb,
                            children: Object(r.jsx)(x.a, {
                                store: wb,
                                children: Object(r.jsx)(Td, {
                                    children: Object(r.jsx)(s.u, {
                                        children: n
                                    })
                                })
                            })
                        })
                    })
                },
                Nb = (t(522), t(225)),
                Eb = t(323),
                Sb = t.n(Eb),
                Rb = t(324),
                Ub = t.n(Rb);
            Nb.a.use(Sb.a).use(Ub.a).use(et.a).init({
                backend: {
                    loadPath: "./locales/{{lng}}.json"
                },
                react: {
                    useSuspense: !0
                },
                fallbackLng: "en",
                preload: ["en"],
                keySeparator: !1,
                interpolation: {
                    escapeValue: !1
                }
            });
            Nb.a;
            "ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1), window.addEventListener("error", (function() {
                var e;
                null === (e = localStorage) || void 0 === e || e.removeItem("redux_localstorage_simple_lists")
            })), o.a.render(Object(r.jsx)(a.StrictMode, {
                children: Object(r.jsxs)(Ib, {
                    children: [Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)(Gd, {}), Object(r.jsx)(Hd, {}), Object(r.jsx)(Zd, {}), Object(r.jsx)($d, {}), Object(r.jsx)(eb, {})]
                    }), Object(r.jsx)(s.v, {}), Object(r.jsx)(p, {}), Object(r.jsx)(Fd, {})]
                })
            }), document.getElementById("root"))
        }
    },
    [
        [539, 2, 3]
    ]
]);
//# sourceMappingURL=main.66599541.chunk.js.map