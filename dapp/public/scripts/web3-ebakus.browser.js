/*!
 * Web3 module to add transaction PoW for Ebakus. v1.0.0
 *
 * @author Chris Ziogas <chris@ebakus.com>
 * @website https://www.ebakus.com/
 *
 * @copyright Ebakus 2019
 * @license MIT
 */
!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports['web3-ebakus'] = t())
    : (e.Web3Ebakus = t())
})(window, function() {
  return (function(e) {
    var t = {}
    function n(U) {
      if (t[U]) return t[U].exports
      var r = (t[U] = { i: U, l: !1, exports: {} })
      return e[U].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, U) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: U })
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var U = Object.create(null)
        if (
          (n.r(U),
          Object.defineProperty(U, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var r in e)
            n.d(
              U,
              r,
              function(t) {
                return e[t]
              }.bind(null, r)
            )
        return U
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = 167))
    )
  })([
    function(e, t) {
      'function' == typeof Object.create
        ? (e.exports = function(e, t) {
            ;(e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }))
          })
        : (e.exports = function(e, t) {
            e.super_ = t
            var n = function() {}
            ;(n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e)
          })
    },
    function(e, t, n) {
      var U = n(3),
        r = U.Buffer
      function d(e, t) {
        for (var n in e) t[n] = e[n]
      }
      function i(e, t, n) {
        return r(e, t, n)
      }
      r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow
        ? (e.exports = U)
        : (d(U, t), (t.Buffer = i)),
        d(r, i),
        (i.from = function(e, t, n) {
          if ('number' == typeof e)
            throw new TypeError('Argument must not be a number')
          return r(e, t, n)
        }),
        (i.alloc = function(e, t, n) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number')
          var U = r(e)
          return (
            void 0 !== t
              ? 'string' == typeof n
                ? U.fill(t, n)
                : U.fill(t)
              : U.fill(0),
            U
          )
        }),
        (i.allocUnsafe = function(e) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number')
          return r(e)
        }),
        (i.allocUnsafeSlow = function(e) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number')
          return U.SlowBuffer(e)
        })
    },
    function(e, t, n) {
      ;(function(e) {
        !(function(e, t) {
          'use strict'
          function U(e, t) {
            if (!e) throw new Error(t || 'Assertion failed')
          }
          function r(e, t) {
            e.super_ = t
            var n = function() {}
            ;(n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e)
          }
          function d(e, t, n) {
            if (d.isBN(e)) return e
            ;(this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== e &&
                (('le' !== t && 'be' !== t) || ((n = t), (t = 10)),
                this._init(e || 0, t || 10, n || 'be'))
          }
          var i
          'object' == typeof e ? (e.exports = d) : (t.BN = d),
            (d.BN = d),
            (d.wordSize = 26)
          try {
            i = n(119).Buffer
          } catch (e) {}
          function F(e, t, n) {
            for (var U = 0, r = Math.min(e.length, n), d = t; d < r; d++) {
              var i = e.charCodeAt(d) - 48
              ;(U <<= 4),
                (U |=
                  i >= 49 && i <= 54
                    ? i - 49 + 10
                    : i >= 17 && i <= 22
                    ? i - 17 + 10
                    : 15 & i)
            }
            return U
          }
          function l(e, t, n, U) {
            for (var r = 0, d = Math.min(e.length, n), i = t; i < d; i++) {
              var F = e.charCodeAt(i) - 48
              ;(r *= U),
                (r += F >= 49 ? F - 49 + 10 : F >= 17 ? F - 17 + 10 : F)
            }
            return r
          }
          ;(d.isBN = function(e) {
            return (
              e instanceof d ||
              (null !== e &&
                'object' == typeof e &&
                e.constructor.wordSize === d.wordSize &&
                Array.isArray(e.words))
            )
          }),
            (d.max = function(e, t) {
              return e.cmp(t) > 0 ? e : t
            }),
            (d.min = function(e, t) {
              return e.cmp(t) < 0 ? e : t
            }),
            (d.prototype._init = function(e, t, n) {
              if ('number' == typeof e) return this._initNumber(e, t, n)
              if ('object' == typeof e) return this._initArray(e, t, n)
              'hex' === t && (t = 16), U(t === (0 | t) && t >= 2 && t <= 36)
              var r = 0
              '-' === (e = e.toString().replace(/\s+/g, ''))[0] && r++,
                16 === t ? this._parseHex(e, r) : this._parseBase(e, t, r),
                '-' === e[0] && (this.negative = 1),
                this.strip(),
                'le' === n && this._initArray(this.toArray(), t, n)
            }),
            (d.prototype._initNumber = function(e, t, n) {
              e < 0 && ((this.negative = 1), (e = -e)),
                e < 67108864
                  ? ((this.words = [67108863 & e]), (this.length = 1))
                  : e < 4503599627370496
                  ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                    (this.length = 2))
                  : (U(e < 9007199254740992),
                    (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                'le' === n && this._initArray(this.toArray(), t, n)
            }),
            (d.prototype._initArray = function(e, t, n) {
              if ((U('number' == typeof e.length), e.length <= 0))
                return (this.words = [0]), (this.length = 1), this
              ;(this.length = Math.ceil(e.length / 3)),
                (this.words = new Array(this.length))
              for (var r = 0; r < this.length; r++) this.words[r] = 0
              var d,
                i,
                F = 0
              if ('be' === n)
                for (r = e.length - 1, d = 0; r >= 0; r -= 3)
                  (i = e[r] | (e[r - 1] << 8) | (e[r - 2] << 16)),
                    (this.words[d] |= (i << F) & 67108863),
                    (this.words[d + 1] = (i >>> (26 - F)) & 67108863),
                    (F += 24) >= 26 && ((F -= 26), d++)
              else if ('le' === n)
                for (r = 0, d = 0; r < e.length; r += 3)
                  (i = e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)),
                    (this.words[d] |= (i << F) & 67108863),
                    (this.words[d + 1] = (i >>> (26 - F)) & 67108863),
                    (F += 24) >= 26 && ((F -= 26), d++)
              return this.strip()
            }),
            (d.prototype._parseHex = function(e, t) {
              ;(this.length = Math.ceil((e.length - t) / 6)),
                (this.words = new Array(this.length))
              for (var n = 0; n < this.length; n++) this.words[n] = 0
              var U,
                r,
                d = 0
              for (n = e.length - 6, U = 0; n >= t; n -= 6)
                (r = F(e, n, n + 6)),
                  (this.words[U] |= (r << d) & 67108863),
                  (this.words[U + 1] |= (r >>> (26 - d)) & 4194303),
                  (d += 24) >= 26 && ((d -= 26), U++)
              n + 6 !== t &&
                ((r = F(e, t, n + 6)),
                (this.words[U] |= (r << d) & 67108863),
                (this.words[U + 1] |= (r >>> (26 - d)) & 4194303)),
                this.strip()
            }),
            (d.prototype._parseBase = function(e, t, n) {
              ;(this.words = [0]), (this.length = 1)
              for (var U = 0, r = 1; r <= 67108863; r *= t) U++
              U--, (r = (r / t) | 0)
              for (
                var d = e.length - n,
                  i = d % U,
                  F = Math.min(d, d - i) + n,
                  a = 0,
                  Q = n;
                Q < F;
                Q += U
              )
                (a = l(e, Q, Q + U, t)),
                  this.imuln(r),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a)
              if (0 !== i) {
                var o = 1
                for (a = l(e, Q, e.length, t), Q = 0; Q < i; Q++) o *= t
                this.imuln(o),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a)
              }
            }),
            (d.prototype.copy = function(e) {
              e.words = new Array(this.length)
              for (var t = 0; t < this.length; t++) e.words[t] = this.words[t]
              ;(e.length = this.length),
                (e.negative = this.negative),
                (e.red = this.red)
            }),
            (d.prototype.clone = function() {
              var e = new d(null)
              return this.copy(e), e
            }),
            (d.prototype._expand = function(e) {
              for (; this.length < e; ) this.words[this.length++] = 0
              return this
            }),
            (d.prototype.strip = function() {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                this.length--
              return this._normSign()
            }),
            (d.prototype._normSign = function() {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              )
            }),
            (d.prototype.inspect = function() {
              return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
            })
          var a = [
              '',
              '0',
              '00',
              '000',
              '0000',
              '00000',
              '000000',
              '0000000',
              '00000000',
              '000000000',
              '0000000000',
              '00000000000',
              '000000000000',
              '0000000000000',
              '00000000000000',
              '000000000000000',
              '0000000000000000',
              '00000000000000000',
              '000000000000000000',
              '0000000000000000000',
              '00000000000000000000',
              '000000000000000000000',
              '0000000000000000000000',
              '00000000000000000000000',
              '000000000000000000000000',
              '0000000000000000000000000',
            ],
            Q = [
              0,
              0,
              25,
              16,
              12,
              11,
              10,
              9,
              8,
              8,
              7,
              7,
              7,
              7,
              6,
              6,
              6,
              6,
              6,
              6,
              6,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
            ],
            o = [
              0,
              0,
              33554432,
              43046721,
              16777216,
              48828125,
              60466176,
              40353607,
              16777216,
              43046721,
              1e7,
              19487171,
              35831808,
              62748517,
              7529536,
              11390625,
              16777216,
              24137569,
              34012224,
              47045881,
              64e6,
              4084101,
              5153632,
              6436343,
              7962624,
              9765625,
              11881376,
              14348907,
              17210368,
              20511149,
              243e5,
              28629151,
              33554432,
              39135393,
              45435424,
              52521875,
              60466176,
            ]
          function h(e, t, n) {
            n.negative = t.negative ^ e.negative
            var U = (e.length + t.length) | 0
            ;(n.length = U), (U = (U - 1) | 0)
            var r = 0 | e.words[0],
              d = 0 | t.words[0],
              i = r * d,
              F = 67108863 & i,
              l = (i / 67108864) | 0
            n.words[0] = F
            for (var a = 1; a < U; a++) {
              for (
                var Q = l >>> 26,
                  o = 67108863 & l,
                  h = Math.min(a, t.length - 1),
                  c = Math.max(0, a - e.length + 1);
                c <= h;
                c++
              ) {
                var B = (a - c) | 0
                ;(Q +=
                  ((i = (r = 0 | e.words[B]) * (d = 0 | t.words[c]) + o) /
                    67108864) |
                  0),
                  (o = 67108863 & i)
              }
              ;(n.words[a] = 0 | o), (l = 0 | Q)
            }
            return 0 !== l ? (n.words[a] = 0 | l) : n.length--, n.strip()
          }
          ;(d.prototype.toString = function(e, t) {
            var n
            if (((t = 0 | t || 1), 16 === (e = e || 10) || 'hex' === e)) {
              n = ''
              for (var r = 0, d = 0, i = 0; i < this.length; i++) {
                var F = this.words[i],
                  l = (16777215 & ((F << r) | d)).toString(16)
                ;(n =
                  0 != (d = (F >>> (24 - r)) & 16777215) ||
                  i !== this.length - 1
                    ? a[6 - l.length] + l + n
                    : l + n),
                  (r += 2) >= 26 && ((r -= 26), i--)
              }
              for (0 !== d && (n = d.toString(16) + n); n.length % t != 0; )
                n = '0' + n
              return 0 !== this.negative && (n = '-' + n), n
            }
            if (e === (0 | e) && e >= 2 && e <= 36) {
              var h = Q[e],
                c = o[e]
              n = ''
              var B = this.clone()
              for (B.negative = 0; !B.isZero(); ) {
                var s = B.modn(c).toString(e)
                n = (B = B.idivn(c)).isZero() ? s + n : a[h - s.length] + s + n
              }
              for (this.isZero() && (n = '0' + n); n.length % t != 0; )
                n = '0' + n
              return 0 !== this.negative && (n = '-' + n), n
            }
            U(!1, 'Base should be between 2 and 36')
          }),
            (d.prototype.toNumber = function() {
              var e = this.words[0]
              return (
                2 === this.length
                  ? (e += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (e += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    U(!1, 'Number can only safely store up to 53 bits'),
                0 !== this.negative ? -e : e
              )
            }),
            (d.prototype.toJSON = function() {
              return this.toString(16)
            }),
            (d.prototype.toBuffer = function(e, t) {
              return U(void 0 !== i), this.toArrayLike(i, e, t)
            }),
            (d.prototype.toArray = function(e, t) {
              return this.toArrayLike(Array, e, t)
            }),
            (d.prototype.toArrayLike = function(e, t, n) {
              var r = this.byteLength(),
                d = n || Math.max(1, r)
              U(r <= d, 'byte array longer than desired length'),
                U(d > 0, 'Requested array length <= 0'),
                this.strip()
              var i,
                F,
                l = 'le' === t,
                a = new e(d),
                Q = this.clone()
              if (l) {
                for (F = 0; !Q.isZero(); F++)
                  (i = Q.andln(255)), Q.iushrn(8), (a[F] = i)
                for (; F < d; F++) a[F] = 0
              } else {
                for (F = 0; F < d - r; F++) a[F] = 0
                for (F = 0; !Q.isZero(); F++)
                  (i = Q.andln(255)), Q.iushrn(8), (a[d - F - 1] = i)
              }
              return a
            }),
            Math.clz32
              ? (d.prototype._countBits = function(e) {
                  return 32 - Math.clz32(e)
                })
              : (d.prototype._countBits = function(e) {
                  var t = e,
                    n = 0
                  return (
                    t >= 4096 && ((n += 13), (t >>>= 13)),
                    t >= 64 && ((n += 7), (t >>>= 7)),
                    t >= 8 && ((n += 4), (t >>>= 4)),
                    t >= 2 && ((n += 2), (t >>>= 2)),
                    n + t
                  )
                }),
            (d.prototype._zeroBits = function(e) {
              if (0 === e) return 26
              var t = e,
                n = 0
              return (
                0 == (8191 & t) && ((n += 13), (t >>>= 13)),
                0 == (127 & t) && ((n += 7), (t >>>= 7)),
                0 == (15 & t) && ((n += 4), (t >>>= 4)),
                0 == (3 & t) && ((n += 2), (t >>>= 2)),
                0 == (1 & t) && n++,
                n
              )
            }),
            (d.prototype.bitLength = function() {
              var e = this.words[this.length - 1],
                t = this._countBits(e)
              return 26 * (this.length - 1) + t
            }),
            (d.prototype.zeroBits = function() {
              if (this.isZero()) return 0
              for (var e = 0, t = 0; t < this.length; t++) {
                var n = this._zeroBits(this.words[t])
                if (((e += n), 26 !== n)) break
              }
              return e
            }),
            (d.prototype.byteLength = function() {
              return Math.ceil(this.bitLength() / 8)
            }),
            (d.prototype.toTwos = function(e) {
              return 0 !== this.negative
                ? this.abs()
                    .inotn(e)
                    .iaddn(1)
                : this.clone()
            }),
            (d.prototype.fromTwos = function(e) {
              return this.testn(e - 1)
                ? this.notn(e)
                    .iaddn(1)
                    .ineg()
                : this.clone()
            }),
            (d.prototype.isNeg = function() {
              return 0 !== this.negative
            }),
            (d.prototype.neg = function() {
              return this.clone().ineg()
            }),
            (d.prototype.ineg = function() {
              return this.isZero() || (this.negative ^= 1), this
            }),
            (d.prototype.iuor = function(e) {
              for (; this.length < e.length; ) this.words[this.length++] = 0
              for (var t = 0; t < e.length; t++)
                this.words[t] = this.words[t] | e.words[t]
              return this.strip()
            }),
            (d.prototype.ior = function(e) {
              return U(0 == (this.negative | e.negative)), this.iuor(e)
            }),
            (d.prototype.or = function(e) {
              return this.length > e.length
                ? this.clone().ior(e)
                : e.clone().ior(this)
            }),
            (d.prototype.uor = function(e) {
              return this.length > e.length
                ? this.clone().iuor(e)
                : e.clone().iuor(this)
            }),
            (d.prototype.iuand = function(e) {
              var t
              t = this.length > e.length ? e : this
              for (var n = 0; n < t.length; n++)
                this.words[n] = this.words[n] & e.words[n]
              return (this.length = t.length), this.strip()
            }),
            (d.prototype.iand = function(e) {
              return U(0 == (this.negative | e.negative)), this.iuand(e)
            }),
            (d.prototype.and = function(e) {
              return this.length > e.length
                ? this.clone().iand(e)
                : e.clone().iand(this)
            }),
            (d.prototype.uand = function(e) {
              return this.length > e.length
                ? this.clone().iuand(e)
                : e.clone().iuand(this)
            }),
            (d.prototype.iuxor = function(e) {
              var t, n
              this.length > e.length
                ? ((t = this), (n = e))
                : ((t = e), (n = this))
              for (var U = 0; U < n.length; U++)
                this.words[U] = t.words[U] ^ n.words[U]
              if (this !== t)
                for (; U < t.length; U++) this.words[U] = t.words[U]
              return (this.length = t.length), this.strip()
            }),
            (d.prototype.ixor = function(e) {
              return U(0 == (this.negative | e.negative)), this.iuxor(e)
            }),
            (d.prototype.xor = function(e) {
              return this.length > e.length
                ? this.clone().ixor(e)
                : e.clone().ixor(this)
            }),
            (d.prototype.uxor = function(e) {
              return this.length > e.length
                ? this.clone().iuxor(e)
                : e.clone().iuxor(this)
            }),
            (d.prototype.inotn = function(e) {
              U('number' == typeof e && e >= 0)
              var t = 0 | Math.ceil(e / 26),
                n = e % 26
              this._expand(t), n > 0 && t--
              for (var r = 0; r < t; r++)
                this.words[r] = 67108863 & ~this.words[r]
              return (
                n > 0 &&
                  (this.words[r] = ~this.words[r] & (67108863 >> (26 - n))),
                this.strip()
              )
            }),
            (d.prototype.notn = function(e) {
              return this.clone().inotn(e)
            }),
            (d.prototype.setn = function(e, t) {
              U('number' == typeof e && e >= 0)
              var n = (e / 26) | 0,
                r = e % 26
              return (
                this._expand(n + 1),
                (this.words[n] = t
                  ? this.words[n] | (1 << r)
                  : this.words[n] & ~(1 << r)),
                this.strip()
              )
            }),
            (d.prototype.iadd = function(e) {
              var t, n, U
              if (0 !== this.negative && 0 === e.negative)
                return (
                  (this.negative = 0),
                  (t = this.isub(e)),
                  (this.negative ^= 1),
                  this._normSign()
                )
              if (0 === this.negative && 0 !== e.negative)
                return (
                  (e.negative = 0),
                  (t = this.isub(e)),
                  (e.negative = 1),
                  t._normSign()
                )
              this.length > e.length
                ? ((n = this), (U = e))
                : ((n = e), (U = this))
              for (var r = 0, d = 0; d < U.length; d++)
                (t = (0 | n.words[d]) + (0 | U.words[d]) + r),
                  (this.words[d] = 67108863 & t),
                  (r = t >>> 26)
              for (; 0 !== r && d < n.length; d++)
                (t = (0 | n.words[d]) + r),
                  (this.words[d] = 67108863 & t),
                  (r = t >>> 26)
              if (((this.length = n.length), 0 !== r))
                (this.words[this.length] = r), this.length++
              else if (n !== this)
                for (; d < n.length; d++) this.words[d] = n.words[d]
              return this
            }),
            (d.prototype.add = function(e) {
              var t
              return 0 !== e.negative && 0 === this.negative
                ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
                : 0 === e.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (t = e.sub(this)),
                  (this.negative = 1),
                  t)
                : this.length > e.length
                ? this.clone().iadd(e)
                : e.clone().iadd(this)
            }),
            (d.prototype.isub = function(e) {
              if (0 !== e.negative) {
                e.negative = 0
                var t = this.iadd(e)
                return (e.negative = 1), t._normSign()
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(e),
                  (this.negative = 1),
                  this._normSign()
                )
              var n,
                U,
                r = this.cmp(e)
              if (0 === r)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                )
              r > 0 ? ((n = this), (U = e)) : ((n = e), (U = this))
              for (var d = 0, i = 0; i < U.length; i++)
                (d = (t = (0 | n.words[i]) - (0 | U.words[i]) + d) >> 26),
                  (this.words[i] = 67108863 & t)
              for (; 0 !== d && i < n.length; i++)
                (d = (t = (0 | n.words[i]) + d) >> 26),
                  (this.words[i] = 67108863 & t)
              if (0 === d && i < n.length && n !== this)
                for (; i < n.length; i++) this.words[i] = n.words[i]
              return (
                (this.length = Math.max(this.length, i)),
                n !== this && (this.negative = 1),
                this.strip()
              )
            }),
            (d.prototype.sub = function(e) {
              return this.clone().isub(e)
            })
          var c = function(e, t, n) {
            var U,
              r,
              d,
              i = e.words,
              F = t.words,
              l = n.words,
              a = 0,
              Q = 0 | i[0],
              o = 8191 & Q,
              h = Q >>> 13,
              c = 0 | i[1],
              B = 8191 & c,
              s = c >>> 13,
              f = 0 | i[2],
              R = 8191 & f,
              V = f >>> 13,
              u = 0 | i[3],
              S = 8191 & u,
              p = u >>> 13,
              W = 0 | i[4],
              Z = 8191 & W,
              J = W >>> 13,
              b = 0 | i[5],
              N = 8191 & b,
              g = b >>> 13,
              m = 0 | i[6],
              E = 8191 & m,
              I = m >>> 13,
              k = 0 | i[7],
              C = 8191 & k,
              T = k >>> 13,
              y = 0 | i[8],
              v = 8191 & y,
              D = y >>> 13,
              w = 0 | i[9],
              M = 8191 & w,
              G = w >>> 13,
              A = 0 | F[0],
              Y = 8191 & A,
              X = A >>> 13,
              H = 0 | F[1],
              x = 8191 & H,
              j = H >>> 13,
              O = 0 | F[2],
              K = 8191 & O,
              z = O >>> 13,
              _ = 0 | F[3],
              L = 8191 & _,
              P = _ >>> 13,
              q = 0 | F[4],
              $ = 8191 & q,
              ee = q >>> 13,
              te = 0 | F[5],
              ne = 8191 & te,
              Ue = te >>> 13,
              re = 0 | F[6],
              de = 8191 & re,
              ie = re >>> 13,
              Fe = 0 | F[7],
              le = 8191 & Fe,
              ae = Fe >>> 13,
              Qe = 0 | F[8],
              oe = 8191 & Qe,
              he = Qe >>> 13,
              ce = 0 | F[9],
              Be = 8191 & ce,
              se = ce >>> 13
            ;(n.negative = e.negative ^ t.negative), (n.length = 19)
            var fe =
              (((a + (U = Math.imul(o, Y))) | 0) +
                ((8191 & (r = ((r = Math.imul(o, X)) + Math.imul(h, Y)) | 0)) <<
                  13)) |
              0
            ;(a =
              ((((d = Math.imul(h, X)) + (r >>> 13)) | 0) + (fe >>> 26)) | 0),
              (fe &= 67108863),
              (U = Math.imul(B, Y)),
              (r = ((r = Math.imul(B, X)) + Math.imul(s, Y)) | 0),
              (d = Math.imul(s, X))
            var Re =
              (((a + (U = (U + Math.imul(o, x)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(o, j)) | 0) + Math.imul(h, x)) | 0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(h, j)) | 0) + (r >>> 13)) | 0) +
                (Re >>> 26)) |
              0),
              (Re &= 67108863),
              (U = Math.imul(R, Y)),
              (r = ((r = Math.imul(R, X)) + Math.imul(V, Y)) | 0),
              (d = Math.imul(V, X)),
              (U = (U + Math.imul(B, x)) | 0),
              (r = ((r = (r + Math.imul(B, j)) | 0) + Math.imul(s, x)) | 0),
              (d = (d + Math.imul(s, j)) | 0)
            var Ve =
              (((a + (U = (U + Math.imul(o, K)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(o, z)) | 0) + Math.imul(h, K)) | 0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(h, z)) | 0) + (r >>> 13)) | 0) +
                (Ve >>> 26)) |
              0),
              (Ve &= 67108863),
              (U = Math.imul(S, Y)),
              (r = ((r = Math.imul(S, X)) + Math.imul(p, Y)) | 0),
              (d = Math.imul(p, X)),
              (U = (U + Math.imul(R, x)) | 0),
              (r = ((r = (r + Math.imul(R, j)) | 0) + Math.imul(V, x)) | 0),
              (d = (d + Math.imul(V, j)) | 0),
              (U = (U + Math.imul(B, K)) | 0),
              (r = ((r = (r + Math.imul(B, z)) | 0) + Math.imul(s, K)) | 0),
              (d = (d + Math.imul(s, z)) | 0)
            var ue =
              (((a + (U = (U + Math.imul(o, L)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(o, P)) | 0) + Math.imul(h, L)) | 0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(h, P)) | 0) + (r >>> 13)) | 0) +
                (ue >>> 26)) |
              0),
              (ue &= 67108863),
              (U = Math.imul(Z, Y)),
              (r = ((r = Math.imul(Z, X)) + Math.imul(J, Y)) | 0),
              (d = Math.imul(J, X)),
              (U = (U + Math.imul(S, x)) | 0),
              (r = ((r = (r + Math.imul(S, j)) | 0) + Math.imul(p, x)) | 0),
              (d = (d + Math.imul(p, j)) | 0),
              (U = (U + Math.imul(R, K)) | 0),
              (r = ((r = (r + Math.imul(R, z)) | 0) + Math.imul(V, K)) | 0),
              (d = (d + Math.imul(V, z)) | 0),
              (U = (U + Math.imul(B, L)) | 0),
              (r = ((r = (r + Math.imul(B, P)) | 0) + Math.imul(s, L)) | 0),
              (d = (d + Math.imul(s, P)) | 0)
            var Se =
              (((a + (U = (U + Math.imul(o, $)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(o, ee)) | 0) + Math.imul(h, $)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(h, ee)) | 0) + (r >>> 13)) | 0) +
                (Se >>> 26)) |
              0),
              (Se &= 67108863),
              (U = Math.imul(N, Y)),
              (r = ((r = Math.imul(N, X)) + Math.imul(g, Y)) | 0),
              (d = Math.imul(g, X)),
              (U = (U + Math.imul(Z, x)) | 0),
              (r = ((r = (r + Math.imul(Z, j)) | 0) + Math.imul(J, x)) | 0),
              (d = (d + Math.imul(J, j)) | 0),
              (U = (U + Math.imul(S, K)) | 0),
              (r = ((r = (r + Math.imul(S, z)) | 0) + Math.imul(p, K)) | 0),
              (d = (d + Math.imul(p, z)) | 0),
              (U = (U + Math.imul(R, L)) | 0),
              (r = ((r = (r + Math.imul(R, P)) | 0) + Math.imul(V, L)) | 0),
              (d = (d + Math.imul(V, P)) | 0),
              (U = (U + Math.imul(B, $)) | 0),
              (r = ((r = (r + Math.imul(B, ee)) | 0) + Math.imul(s, $)) | 0),
              (d = (d + Math.imul(s, ee)) | 0)
            var pe =
              (((a + (U = (U + Math.imul(o, ne)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(o, Ue)) | 0) + Math.imul(h, ne)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(h, Ue)) | 0) + (r >>> 13)) | 0) +
                (pe >>> 26)) |
              0),
              (pe &= 67108863),
              (U = Math.imul(E, Y)),
              (r = ((r = Math.imul(E, X)) + Math.imul(I, Y)) | 0),
              (d = Math.imul(I, X)),
              (U = (U + Math.imul(N, x)) | 0),
              (r = ((r = (r + Math.imul(N, j)) | 0) + Math.imul(g, x)) | 0),
              (d = (d + Math.imul(g, j)) | 0),
              (U = (U + Math.imul(Z, K)) | 0),
              (r = ((r = (r + Math.imul(Z, z)) | 0) + Math.imul(J, K)) | 0),
              (d = (d + Math.imul(J, z)) | 0),
              (U = (U + Math.imul(S, L)) | 0),
              (r = ((r = (r + Math.imul(S, P)) | 0) + Math.imul(p, L)) | 0),
              (d = (d + Math.imul(p, P)) | 0),
              (U = (U + Math.imul(R, $)) | 0),
              (r = ((r = (r + Math.imul(R, ee)) | 0) + Math.imul(V, $)) | 0),
              (d = (d + Math.imul(V, ee)) | 0),
              (U = (U + Math.imul(B, ne)) | 0),
              (r = ((r = (r + Math.imul(B, Ue)) | 0) + Math.imul(s, ne)) | 0),
              (d = (d + Math.imul(s, Ue)) | 0)
            var We =
              (((a + (U = (U + Math.imul(o, de)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(o, ie)) | 0) + Math.imul(h, de)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(h, ie)) | 0) + (r >>> 13)) | 0) +
                (We >>> 26)) |
              0),
              (We &= 67108863),
              (U = Math.imul(C, Y)),
              (r = ((r = Math.imul(C, X)) + Math.imul(T, Y)) | 0),
              (d = Math.imul(T, X)),
              (U = (U + Math.imul(E, x)) | 0),
              (r = ((r = (r + Math.imul(E, j)) | 0) + Math.imul(I, x)) | 0),
              (d = (d + Math.imul(I, j)) | 0),
              (U = (U + Math.imul(N, K)) | 0),
              (r = ((r = (r + Math.imul(N, z)) | 0) + Math.imul(g, K)) | 0),
              (d = (d + Math.imul(g, z)) | 0),
              (U = (U + Math.imul(Z, L)) | 0),
              (r = ((r = (r + Math.imul(Z, P)) | 0) + Math.imul(J, L)) | 0),
              (d = (d + Math.imul(J, P)) | 0),
              (U = (U + Math.imul(S, $)) | 0),
              (r = ((r = (r + Math.imul(S, ee)) | 0) + Math.imul(p, $)) | 0),
              (d = (d + Math.imul(p, ee)) | 0),
              (U = (U + Math.imul(R, ne)) | 0),
              (r = ((r = (r + Math.imul(R, Ue)) | 0) + Math.imul(V, ne)) | 0),
              (d = (d + Math.imul(V, Ue)) | 0),
              (U = (U + Math.imul(B, de)) | 0),
              (r = ((r = (r + Math.imul(B, ie)) | 0) + Math.imul(s, de)) | 0),
              (d = (d + Math.imul(s, ie)) | 0)
            var Ze =
              (((a + (U = (U + Math.imul(o, le)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(o, ae)) | 0) + Math.imul(h, le)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(h, ae)) | 0) + (r >>> 13)) | 0) +
                (Ze >>> 26)) |
              0),
              (Ze &= 67108863),
              (U = Math.imul(v, Y)),
              (r = ((r = Math.imul(v, X)) + Math.imul(D, Y)) | 0),
              (d = Math.imul(D, X)),
              (U = (U + Math.imul(C, x)) | 0),
              (r = ((r = (r + Math.imul(C, j)) | 0) + Math.imul(T, x)) | 0),
              (d = (d + Math.imul(T, j)) | 0),
              (U = (U + Math.imul(E, K)) | 0),
              (r = ((r = (r + Math.imul(E, z)) | 0) + Math.imul(I, K)) | 0),
              (d = (d + Math.imul(I, z)) | 0),
              (U = (U + Math.imul(N, L)) | 0),
              (r = ((r = (r + Math.imul(N, P)) | 0) + Math.imul(g, L)) | 0),
              (d = (d + Math.imul(g, P)) | 0),
              (U = (U + Math.imul(Z, $)) | 0),
              (r = ((r = (r + Math.imul(Z, ee)) | 0) + Math.imul(J, $)) | 0),
              (d = (d + Math.imul(J, ee)) | 0),
              (U = (U + Math.imul(S, ne)) | 0),
              (r = ((r = (r + Math.imul(S, Ue)) | 0) + Math.imul(p, ne)) | 0),
              (d = (d + Math.imul(p, Ue)) | 0),
              (U = (U + Math.imul(R, de)) | 0),
              (r = ((r = (r + Math.imul(R, ie)) | 0) + Math.imul(V, de)) | 0),
              (d = (d + Math.imul(V, ie)) | 0),
              (U = (U + Math.imul(B, le)) | 0),
              (r = ((r = (r + Math.imul(B, ae)) | 0) + Math.imul(s, le)) | 0),
              (d = (d + Math.imul(s, ae)) | 0)
            var Je =
              (((a + (U = (U + Math.imul(o, oe)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(o, he)) | 0) + Math.imul(h, oe)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(h, he)) | 0) + (r >>> 13)) | 0) +
                (Je >>> 26)) |
              0),
              (Je &= 67108863),
              (U = Math.imul(M, Y)),
              (r = ((r = Math.imul(M, X)) + Math.imul(G, Y)) | 0),
              (d = Math.imul(G, X)),
              (U = (U + Math.imul(v, x)) | 0),
              (r = ((r = (r + Math.imul(v, j)) | 0) + Math.imul(D, x)) | 0),
              (d = (d + Math.imul(D, j)) | 0),
              (U = (U + Math.imul(C, K)) | 0),
              (r = ((r = (r + Math.imul(C, z)) | 0) + Math.imul(T, K)) | 0),
              (d = (d + Math.imul(T, z)) | 0),
              (U = (U + Math.imul(E, L)) | 0),
              (r = ((r = (r + Math.imul(E, P)) | 0) + Math.imul(I, L)) | 0),
              (d = (d + Math.imul(I, P)) | 0),
              (U = (U + Math.imul(N, $)) | 0),
              (r = ((r = (r + Math.imul(N, ee)) | 0) + Math.imul(g, $)) | 0),
              (d = (d + Math.imul(g, ee)) | 0),
              (U = (U + Math.imul(Z, ne)) | 0),
              (r = ((r = (r + Math.imul(Z, Ue)) | 0) + Math.imul(J, ne)) | 0),
              (d = (d + Math.imul(J, Ue)) | 0),
              (U = (U + Math.imul(S, de)) | 0),
              (r = ((r = (r + Math.imul(S, ie)) | 0) + Math.imul(p, de)) | 0),
              (d = (d + Math.imul(p, ie)) | 0),
              (U = (U + Math.imul(R, le)) | 0),
              (r = ((r = (r + Math.imul(R, ae)) | 0) + Math.imul(V, le)) | 0),
              (d = (d + Math.imul(V, ae)) | 0),
              (U = (U + Math.imul(B, oe)) | 0),
              (r = ((r = (r + Math.imul(B, he)) | 0) + Math.imul(s, oe)) | 0),
              (d = (d + Math.imul(s, he)) | 0)
            var be =
              (((a + (U = (U + Math.imul(o, Be)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(o, se)) | 0) + Math.imul(h, Be)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(h, se)) | 0) + (r >>> 13)) | 0) +
                (be >>> 26)) |
              0),
              (be &= 67108863),
              (U = Math.imul(M, x)),
              (r = ((r = Math.imul(M, j)) + Math.imul(G, x)) | 0),
              (d = Math.imul(G, j)),
              (U = (U + Math.imul(v, K)) | 0),
              (r = ((r = (r + Math.imul(v, z)) | 0) + Math.imul(D, K)) | 0),
              (d = (d + Math.imul(D, z)) | 0),
              (U = (U + Math.imul(C, L)) | 0),
              (r = ((r = (r + Math.imul(C, P)) | 0) + Math.imul(T, L)) | 0),
              (d = (d + Math.imul(T, P)) | 0),
              (U = (U + Math.imul(E, $)) | 0),
              (r = ((r = (r + Math.imul(E, ee)) | 0) + Math.imul(I, $)) | 0),
              (d = (d + Math.imul(I, ee)) | 0),
              (U = (U + Math.imul(N, ne)) | 0),
              (r = ((r = (r + Math.imul(N, Ue)) | 0) + Math.imul(g, ne)) | 0),
              (d = (d + Math.imul(g, Ue)) | 0),
              (U = (U + Math.imul(Z, de)) | 0),
              (r = ((r = (r + Math.imul(Z, ie)) | 0) + Math.imul(J, de)) | 0),
              (d = (d + Math.imul(J, ie)) | 0),
              (U = (U + Math.imul(S, le)) | 0),
              (r = ((r = (r + Math.imul(S, ae)) | 0) + Math.imul(p, le)) | 0),
              (d = (d + Math.imul(p, ae)) | 0),
              (U = (U + Math.imul(R, oe)) | 0),
              (r = ((r = (r + Math.imul(R, he)) | 0) + Math.imul(V, oe)) | 0),
              (d = (d + Math.imul(V, he)) | 0)
            var Ne =
              (((a + (U = (U + Math.imul(B, Be)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(B, se)) | 0) + Math.imul(s, Be)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(s, se)) | 0) + (r >>> 13)) | 0) +
                (Ne >>> 26)) |
              0),
              (Ne &= 67108863),
              (U = Math.imul(M, K)),
              (r = ((r = Math.imul(M, z)) + Math.imul(G, K)) | 0),
              (d = Math.imul(G, z)),
              (U = (U + Math.imul(v, L)) | 0),
              (r = ((r = (r + Math.imul(v, P)) | 0) + Math.imul(D, L)) | 0),
              (d = (d + Math.imul(D, P)) | 0),
              (U = (U + Math.imul(C, $)) | 0),
              (r = ((r = (r + Math.imul(C, ee)) | 0) + Math.imul(T, $)) | 0),
              (d = (d + Math.imul(T, ee)) | 0),
              (U = (U + Math.imul(E, ne)) | 0),
              (r = ((r = (r + Math.imul(E, Ue)) | 0) + Math.imul(I, ne)) | 0),
              (d = (d + Math.imul(I, Ue)) | 0),
              (U = (U + Math.imul(N, de)) | 0),
              (r = ((r = (r + Math.imul(N, ie)) | 0) + Math.imul(g, de)) | 0),
              (d = (d + Math.imul(g, ie)) | 0),
              (U = (U + Math.imul(Z, le)) | 0),
              (r = ((r = (r + Math.imul(Z, ae)) | 0) + Math.imul(J, le)) | 0),
              (d = (d + Math.imul(J, ae)) | 0),
              (U = (U + Math.imul(S, oe)) | 0),
              (r = ((r = (r + Math.imul(S, he)) | 0) + Math.imul(p, oe)) | 0),
              (d = (d + Math.imul(p, he)) | 0)
            var ge =
              (((a + (U = (U + Math.imul(R, Be)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(R, se)) | 0) + Math.imul(V, Be)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(V, se)) | 0) + (r >>> 13)) | 0) +
                (ge >>> 26)) |
              0),
              (ge &= 67108863),
              (U = Math.imul(M, L)),
              (r = ((r = Math.imul(M, P)) + Math.imul(G, L)) | 0),
              (d = Math.imul(G, P)),
              (U = (U + Math.imul(v, $)) | 0),
              (r = ((r = (r + Math.imul(v, ee)) | 0) + Math.imul(D, $)) | 0),
              (d = (d + Math.imul(D, ee)) | 0),
              (U = (U + Math.imul(C, ne)) | 0),
              (r = ((r = (r + Math.imul(C, Ue)) | 0) + Math.imul(T, ne)) | 0),
              (d = (d + Math.imul(T, Ue)) | 0),
              (U = (U + Math.imul(E, de)) | 0),
              (r = ((r = (r + Math.imul(E, ie)) | 0) + Math.imul(I, de)) | 0),
              (d = (d + Math.imul(I, ie)) | 0),
              (U = (U + Math.imul(N, le)) | 0),
              (r = ((r = (r + Math.imul(N, ae)) | 0) + Math.imul(g, le)) | 0),
              (d = (d + Math.imul(g, ae)) | 0),
              (U = (U + Math.imul(Z, oe)) | 0),
              (r = ((r = (r + Math.imul(Z, he)) | 0) + Math.imul(J, oe)) | 0),
              (d = (d + Math.imul(J, he)) | 0)
            var me =
              (((a + (U = (U + Math.imul(S, Be)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(S, se)) | 0) + Math.imul(p, Be)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(p, se)) | 0) + (r >>> 13)) | 0) +
                (me >>> 26)) |
              0),
              (me &= 67108863),
              (U = Math.imul(M, $)),
              (r = ((r = Math.imul(M, ee)) + Math.imul(G, $)) | 0),
              (d = Math.imul(G, ee)),
              (U = (U + Math.imul(v, ne)) | 0),
              (r = ((r = (r + Math.imul(v, Ue)) | 0) + Math.imul(D, ne)) | 0),
              (d = (d + Math.imul(D, Ue)) | 0),
              (U = (U + Math.imul(C, de)) | 0),
              (r = ((r = (r + Math.imul(C, ie)) | 0) + Math.imul(T, de)) | 0),
              (d = (d + Math.imul(T, ie)) | 0),
              (U = (U + Math.imul(E, le)) | 0),
              (r = ((r = (r + Math.imul(E, ae)) | 0) + Math.imul(I, le)) | 0),
              (d = (d + Math.imul(I, ae)) | 0),
              (U = (U + Math.imul(N, oe)) | 0),
              (r = ((r = (r + Math.imul(N, he)) | 0) + Math.imul(g, oe)) | 0),
              (d = (d + Math.imul(g, he)) | 0)
            var Ee =
              (((a + (U = (U + Math.imul(Z, Be)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(Z, se)) | 0) + Math.imul(J, Be)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(J, se)) | 0) + (r >>> 13)) | 0) +
                (Ee >>> 26)) |
              0),
              (Ee &= 67108863),
              (U = Math.imul(M, ne)),
              (r = ((r = Math.imul(M, Ue)) + Math.imul(G, ne)) | 0),
              (d = Math.imul(G, Ue)),
              (U = (U + Math.imul(v, de)) | 0),
              (r = ((r = (r + Math.imul(v, ie)) | 0) + Math.imul(D, de)) | 0),
              (d = (d + Math.imul(D, ie)) | 0),
              (U = (U + Math.imul(C, le)) | 0),
              (r = ((r = (r + Math.imul(C, ae)) | 0) + Math.imul(T, le)) | 0),
              (d = (d + Math.imul(T, ae)) | 0),
              (U = (U + Math.imul(E, oe)) | 0),
              (r = ((r = (r + Math.imul(E, he)) | 0) + Math.imul(I, oe)) | 0),
              (d = (d + Math.imul(I, he)) | 0)
            var Ie =
              (((a + (U = (U + Math.imul(N, Be)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(N, se)) | 0) + Math.imul(g, Be)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(g, se)) | 0) + (r >>> 13)) | 0) +
                (Ie >>> 26)) |
              0),
              (Ie &= 67108863),
              (U = Math.imul(M, de)),
              (r = ((r = Math.imul(M, ie)) + Math.imul(G, de)) | 0),
              (d = Math.imul(G, ie)),
              (U = (U + Math.imul(v, le)) | 0),
              (r = ((r = (r + Math.imul(v, ae)) | 0) + Math.imul(D, le)) | 0),
              (d = (d + Math.imul(D, ae)) | 0),
              (U = (U + Math.imul(C, oe)) | 0),
              (r = ((r = (r + Math.imul(C, he)) | 0) + Math.imul(T, oe)) | 0),
              (d = (d + Math.imul(T, he)) | 0)
            var ke =
              (((a + (U = (U + Math.imul(E, Be)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(E, se)) | 0) + Math.imul(I, Be)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(I, se)) | 0) + (r >>> 13)) | 0) +
                (ke >>> 26)) |
              0),
              (ke &= 67108863),
              (U = Math.imul(M, le)),
              (r = ((r = Math.imul(M, ae)) + Math.imul(G, le)) | 0),
              (d = Math.imul(G, ae)),
              (U = (U + Math.imul(v, oe)) | 0),
              (r = ((r = (r + Math.imul(v, he)) | 0) + Math.imul(D, oe)) | 0),
              (d = (d + Math.imul(D, he)) | 0)
            var Ce =
              (((a + (U = (U + Math.imul(C, Be)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(C, se)) | 0) + Math.imul(T, Be)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(T, se)) | 0) + (r >>> 13)) | 0) +
                (Ce >>> 26)) |
              0),
              (Ce &= 67108863),
              (U = Math.imul(M, oe)),
              (r = ((r = Math.imul(M, he)) + Math.imul(G, oe)) | 0),
              (d = Math.imul(G, he))
            var Te =
              (((a + (U = (U + Math.imul(v, Be)) | 0)) | 0) +
                ((8191 &
                  (r =
                    ((r = (r + Math.imul(v, se)) | 0) + Math.imul(D, Be)) |
                    0)) <<
                  13)) |
              0
            ;(a =
              ((((d = (d + Math.imul(D, se)) | 0) + (r >>> 13)) | 0) +
                (Te >>> 26)) |
              0),
              (Te &= 67108863)
            var ye =
              (((a + (U = Math.imul(M, Be))) | 0) +
                ((8191 &
                  (r = ((r = Math.imul(M, se)) + Math.imul(G, Be)) | 0)) <<
                  13)) |
              0
            return (
              (a =
                ((((d = Math.imul(G, se)) + (r >>> 13)) | 0) + (ye >>> 26)) |
                0),
              (ye &= 67108863),
              (l[0] = fe),
              (l[1] = Re),
              (l[2] = Ve),
              (l[3] = ue),
              (l[4] = Se),
              (l[5] = pe),
              (l[6] = We),
              (l[7] = Ze),
              (l[8] = Je),
              (l[9] = be),
              (l[10] = Ne),
              (l[11] = ge),
              (l[12] = me),
              (l[13] = Ee),
              (l[14] = Ie),
              (l[15] = ke),
              (l[16] = Ce),
              (l[17] = Te),
              (l[18] = ye),
              0 !== a && ((l[19] = a), n.length++),
              n
            )
          }
          function B(e, t, n) {
            return new s().mulp(e, t, n)
          }
          function s(e, t) {
            ;(this.x = e), (this.y = t)
          }
          Math.imul || (c = h),
            (d.prototype.mulTo = function(e, t) {
              var n = this.length + e.length
              return 10 === this.length && 10 === e.length
                ? c(this, e, t)
                : n < 63
                ? h(this, e, t)
                : n < 1024
                ? (function(e, t, n) {
                    ;(n.negative = t.negative ^ e.negative),
                      (n.length = e.length + t.length)
                    for (var U = 0, r = 0, d = 0; d < n.length - 1; d++) {
                      var i = r
                      r = 0
                      for (
                        var F = 67108863 & U,
                          l = Math.min(d, t.length - 1),
                          a = Math.max(0, d - e.length + 1);
                        a <= l;
                        a++
                      ) {
                        var Q = d - a,
                          o = (0 | e.words[Q]) * (0 | t.words[a]),
                          h = 67108863 & o
                        ;(F = 67108863 & (h = (h + F) | 0)),
                          (r +=
                            (i =
                              ((i = (i + ((o / 67108864) | 0)) | 0) +
                                (h >>> 26)) |
                              0) >>> 26),
                          (i &= 67108863)
                      }
                      ;(n.words[d] = F), (U = i), (i = r)
                    }
                    return 0 !== U ? (n.words[d] = U) : n.length--, n.strip()
                  })(this, e, t)
                : B(this, e, t)
            }),
            (s.prototype.makeRBT = function(e) {
              for (
                var t = new Array(e), n = d.prototype._countBits(e) - 1, U = 0;
                U < e;
                U++
              )
                t[U] = this.revBin(U, n, e)
              return t
            }),
            (s.prototype.revBin = function(e, t, n) {
              if (0 === e || e === n - 1) return e
              for (var U = 0, r = 0; r < t; r++)
                (U |= (1 & e) << (t - r - 1)), (e >>= 1)
              return U
            }),
            (s.prototype.permute = function(e, t, n, U, r, d) {
              for (var i = 0; i < d; i++) (U[i] = t[e[i]]), (r[i] = n[e[i]])
            }),
            (s.prototype.transform = function(e, t, n, U, r, d) {
              this.permute(d, e, t, n, U, r)
              for (var i = 1; i < r; i <<= 1)
                for (
                  var F = i << 1,
                    l = Math.cos((2 * Math.PI) / F),
                    a = Math.sin((2 * Math.PI) / F),
                    Q = 0;
                  Q < r;
                  Q += F
                )
                  for (var o = l, h = a, c = 0; c < i; c++) {
                    var B = n[Q + c],
                      s = U[Q + c],
                      f = n[Q + c + i],
                      R = U[Q + c + i],
                      V = o * f - h * R
                    ;(R = o * R + h * f),
                      (f = V),
                      (n[Q + c] = B + f),
                      (U[Q + c] = s + R),
                      (n[Q + c + i] = B - f),
                      (U[Q + c + i] = s - R),
                      c !== F &&
                        ((V = l * o - a * h), (h = l * h + a * o), (o = V))
                  }
            }),
            (s.prototype.guessLen13b = function(e, t) {
              var n = 1 | Math.max(t, e),
                U = 1 & n,
                r = 0
              for (n = (n / 2) | 0; n; n >>>= 1) r++
              return 1 << (r + 1 + U)
            }),
            (s.prototype.conjugate = function(e, t, n) {
              if (!(n <= 1))
                for (var U = 0; U < n / 2; U++) {
                  var r = e[U]
                  ;(e[U] = e[n - U - 1]),
                    (e[n - U - 1] = r),
                    (r = t[U]),
                    (t[U] = -t[n - U - 1]),
                    (t[n - U - 1] = -r)
                }
            }),
            (s.prototype.normalize13b = function(e, t) {
              for (var n = 0, U = 0; U < t / 2; U++) {
                var r =
                  8192 * Math.round(e[2 * U + 1] / t) +
                  Math.round(e[2 * U] / t) +
                  n
                ;(e[U] = 67108863 & r),
                  (n = r < 67108864 ? 0 : (r / 67108864) | 0)
              }
              return e
            }),
            (s.prototype.convert13b = function(e, t, n, r) {
              for (var d = 0, i = 0; i < t; i++)
                (d += 0 | e[i]),
                  (n[2 * i] = 8191 & d),
                  (d >>>= 13),
                  (n[2 * i + 1] = 8191 & d),
                  (d >>>= 13)
              for (i = 2 * t; i < r; ++i) n[i] = 0
              U(0 === d), U(0 == (-8192 & d))
            }),
            (s.prototype.stub = function(e) {
              for (var t = new Array(e), n = 0; n < e; n++) t[n] = 0
              return t
            }),
            (s.prototype.mulp = function(e, t, n) {
              var U = 2 * this.guessLen13b(e.length, t.length),
                r = this.makeRBT(U),
                d = this.stub(U),
                i = new Array(U),
                F = new Array(U),
                l = new Array(U),
                a = new Array(U),
                Q = new Array(U),
                o = new Array(U),
                h = n.words
              ;(h.length = U),
                this.convert13b(e.words, e.length, i, U),
                this.convert13b(t.words, t.length, a, U),
                this.transform(i, d, F, l, U, r),
                this.transform(a, d, Q, o, U, r)
              for (var c = 0; c < U; c++) {
                var B = F[c] * Q[c] - l[c] * o[c]
                ;(l[c] = F[c] * o[c] + l[c] * Q[c]), (F[c] = B)
              }
              return (
                this.conjugate(F, l, U),
                this.transform(F, l, h, d, U, r),
                this.conjugate(h, d, U),
                this.normalize13b(h, U),
                (n.negative = e.negative ^ t.negative),
                (n.length = e.length + t.length),
                n.strip()
              )
            }),
            (d.prototype.mul = function(e) {
              var t = new d(null)
              return (
                (t.words = new Array(this.length + e.length)), this.mulTo(e, t)
              )
            }),
            (d.prototype.mulf = function(e) {
              var t = new d(null)
              return (
                (t.words = new Array(this.length + e.length)), B(this, e, t)
              )
            }),
            (d.prototype.imul = function(e) {
              return this.clone().mulTo(e, this)
            }),
            (d.prototype.imuln = function(e) {
              U('number' == typeof e), U(e < 67108864)
              for (var t = 0, n = 0; n < this.length; n++) {
                var r = (0 | this.words[n]) * e,
                  d = (67108863 & r) + (67108863 & t)
                ;(t >>= 26),
                  (t += (r / 67108864) | 0),
                  (t += d >>> 26),
                  (this.words[n] = 67108863 & d)
              }
              return 0 !== t && ((this.words[n] = t), this.length++), this
            }),
            (d.prototype.muln = function(e) {
              return this.clone().imuln(e)
            }),
            (d.prototype.sqr = function() {
              return this.mul(this)
            }),
            (d.prototype.isqr = function() {
              return this.imul(this.clone())
            }),
            (d.prototype.pow = function(e) {
              var t = (function(e) {
                for (
                  var t = new Array(e.bitLength()), n = 0;
                  n < t.length;
                  n++
                ) {
                  var U = (n / 26) | 0,
                    r = n % 26
                  t[n] = (e.words[U] & (1 << r)) >>> r
                }
                return t
              })(e)
              if (0 === t.length) return new d(1)
              for (
                var n = this, U = 0;
                U < t.length && 0 === t[U];
                U++, n = n.sqr()
              );
              if (++U < t.length)
                for (var r = n.sqr(); U < t.length; U++, r = r.sqr())
                  0 !== t[U] && (n = n.mul(r))
              return n
            }),
            (d.prototype.iushln = function(e) {
              U('number' == typeof e && e >= 0)
              var t,
                n = e % 26,
                r = (e - n) / 26,
                d = (67108863 >>> (26 - n)) << (26 - n)
              if (0 !== n) {
                var i = 0
                for (t = 0; t < this.length; t++) {
                  var F = this.words[t] & d,
                    l = ((0 | this.words[t]) - F) << n
                  ;(this.words[t] = l | i), (i = F >>> (26 - n))
                }
                i && ((this.words[t] = i), this.length++)
              }
              if (0 !== r) {
                for (t = this.length - 1; t >= 0; t--)
                  this.words[t + r] = this.words[t]
                for (t = 0; t < r; t++) this.words[t] = 0
                this.length += r
              }
              return this.strip()
            }),
            (d.prototype.ishln = function(e) {
              return U(0 === this.negative), this.iushln(e)
            }),
            (d.prototype.iushrn = function(e, t, n) {
              var r
              U('number' == typeof e && e >= 0),
                (r = t ? (t - (t % 26)) / 26 : 0)
              var d = e % 26,
                i = Math.min((e - d) / 26, this.length),
                F = 67108863 ^ ((67108863 >>> d) << d),
                l = n
              if (((r -= i), (r = Math.max(0, r)), l)) {
                for (var a = 0; a < i; a++) l.words[a] = this.words[a]
                l.length = i
              }
              if (0 === i);
              else if (this.length > i)
                for (this.length -= i, a = 0; a < this.length; a++)
                  this.words[a] = this.words[a + i]
              else (this.words[0] = 0), (this.length = 1)
              var Q = 0
              for (a = this.length - 1; a >= 0 && (0 !== Q || a >= r); a--) {
                var o = 0 | this.words[a]
                ;(this.words[a] = (Q << (26 - d)) | (o >>> d)), (Q = o & F)
              }
              return (
                l && 0 !== Q && (l.words[l.length++] = Q),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this.strip()
              )
            }),
            (d.prototype.ishrn = function(e, t, n) {
              return U(0 === this.negative), this.iushrn(e, t, n)
            }),
            (d.prototype.shln = function(e) {
              return this.clone().ishln(e)
            }),
            (d.prototype.ushln = function(e) {
              return this.clone().iushln(e)
            }),
            (d.prototype.shrn = function(e) {
              return this.clone().ishrn(e)
            }),
            (d.prototype.ushrn = function(e) {
              return this.clone().iushrn(e)
            }),
            (d.prototype.testn = function(e) {
              U('number' == typeof e && e >= 0)
              var t = e % 26,
                n = (e - t) / 26,
                r = 1 << t
              return !(this.length <= n || !(this.words[n] & r))
            }),
            (d.prototype.imaskn = function(e) {
              U('number' == typeof e && e >= 0)
              var t = e % 26,
                n = (e - t) / 26
              if (
                (U(
                  0 === this.negative,
                  'imaskn works only with positive numbers'
                ),
                this.length <= n)
              )
                return this
              if (
                (0 !== t && n++,
                (this.length = Math.min(n, this.length)),
                0 !== t)
              ) {
                var r = 67108863 ^ ((67108863 >>> t) << t)
                this.words[this.length - 1] &= r
              }
              return this.strip()
            }),
            (d.prototype.maskn = function(e) {
              return this.clone().imaskn(e)
            }),
            (d.prototype.iaddn = function(e) {
              return (
                U('number' == typeof e),
                U(e < 67108864),
                e < 0
                  ? this.isubn(-e)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) < e
                    ? ((this.words[0] = e - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(e),
                      (this.negative = 1),
                      this)
                  : this._iaddn(e)
              )
            }),
            (d.prototype._iaddn = function(e) {
              this.words[0] += e
              for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                (this.words[t] -= 67108864),
                  t === this.length - 1
                    ? (this.words[t + 1] = 1)
                    : this.words[t + 1]++
              return (this.length = Math.max(this.length, t + 1)), this
            }),
            (d.prototype.isubn = function(e) {
              if ((U('number' == typeof e), U(e < 67108864), e < 0))
                return this.iaddn(-e)
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iaddn(e), (this.negative = 1), this
                )
              if (
                ((this.words[0] -= e), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1)
              else
                for (var t = 0; t < this.length && this.words[t] < 0; t++)
                  (this.words[t] += 67108864), (this.words[t + 1] -= 1)
              return this.strip()
            }),
            (d.prototype.addn = function(e) {
              return this.clone().iaddn(e)
            }),
            (d.prototype.subn = function(e) {
              return this.clone().isubn(e)
            }),
            (d.prototype.iabs = function() {
              return (this.negative = 0), this
            }),
            (d.prototype.abs = function() {
              return this.clone().iabs()
            }),
            (d.prototype._ishlnsubmul = function(e, t, n) {
              var r,
                d,
                i = e.length + n
              this._expand(i)
              var F = 0
              for (r = 0; r < e.length; r++) {
                d = (0 | this.words[r + n]) + F
                var l = (0 | e.words[r]) * t
                ;(F = ((d -= 67108863 & l) >> 26) - ((l / 67108864) | 0)),
                  (this.words[r + n] = 67108863 & d)
              }
              for (; r < this.length - n; r++)
                (F = (d = (0 | this.words[r + n]) + F) >> 26),
                  (this.words[r + n] = 67108863 & d)
              if (0 === F) return this.strip()
              for (U(-1 === F), F = 0, r = 0; r < this.length; r++)
                (F = (d = -(0 | this.words[r]) + F) >> 26),
                  (this.words[r] = 67108863 & d)
              return (this.negative = 1), this.strip()
            }),
            (d.prototype._wordDiv = function(e, t) {
              var n = (this.length, e.length),
                U = this.clone(),
                r = e,
                i = 0 | r.words[r.length - 1]
              0 != (n = 26 - this._countBits(i)) &&
                ((r = r.ushln(n)), U.iushln(n), (i = 0 | r.words[r.length - 1]))
              var F,
                l = U.length - r.length
              if ('mod' !== t) {
                ;((F = new d(null)).length = l + 1),
                  (F.words = new Array(F.length))
                for (var a = 0; a < F.length; a++) F.words[a] = 0
              }
              var Q = U.clone()._ishlnsubmul(r, 1, l)
              0 === Q.negative && ((U = Q), F && (F.words[l] = 1))
              for (var o = l - 1; o >= 0; o--) {
                var h =
                  67108864 * (0 | U.words[r.length + o]) +
                  (0 | U.words[r.length + o - 1])
                for (
                  h = Math.min((h / i) | 0, 67108863), U._ishlnsubmul(r, h, o);
                  0 !== U.negative;

                )
                  h--,
                    (U.negative = 0),
                    U._ishlnsubmul(r, 1, o),
                    U.isZero() || (U.negative ^= 1)
                F && (F.words[o] = h)
              }
              return (
                F && F.strip(),
                U.strip(),
                'div' !== t && 0 !== n && U.iushrn(n),
                { div: F || null, mod: U }
              )
            }),
            (d.prototype.divmod = function(e, t, n) {
              return (
                U(!e.isZero()),
                this.isZero()
                  ? { div: new d(0), mod: new d(0) }
                  : 0 !== this.negative && 0 === e.negative
                  ? ((F = this.neg().divmod(e, t)),
                    'mod' !== t && (r = F.div.neg()),
                    'div' !== t &&
                      ((i = F.mod.neg()), n && 0 !== i.negative && i.iadd(e)),
                    { div: r, mod: i })
                  : 0 === this.negative && 0 !== e.negative
                  ? ((F = this.divmod(e.neg(), t)),
                    'mod' !== t && (r = F.div.neg()),
                    { div: r, mod: F.mod })
                  : 0 != (this.negative & e.negative)
                  ? ((F = this.neg().divmod(e.neg(), t)),
                    'div' !== t &&
                      ((i = F.mod.neg()), n && 0 !== i.negative && i.isub(e)),
                    { div: F.div, mod: i })
                  : e.length > this.length || this.cmp(e) < 0
                  ? { div: new d(0), mod: this }
                  : 1 === e.length
                  ? 'div' === t
                    ? { div: this.divn(e.words[0]), mod: null }
                    : 'mod' === t
                    ? { div: null, mod: new d(this.modn(e.words[0])) }
                    : {
                        div: this.divn(e.words[0]),
                        mod: new d(this.modn(e.words[0])),
                      }
                  : this._wordDiv(e, t)
              )
              var r, i, F
            }),
            (d.prototype.div = function(e) {
              return this.divmod(e, 'div', !1).div
            }),
            (d.prototype.mod = function(e) {
              return this.divmod(e, 'mod', !1).mod
            }),
            (d.prototype.umod = function(e) {
              return this.divmod(e, 'mod', !0).mod
            }),
            (d.prototype.divRound = function(e) {
              var t = this.divmod(e)
              if (t.mod.isZero()) return t.div
              var n = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                U = e.ushrn(1),
                r = e.andln(1),
                d = n.cmp(U)
              return d < 0 || (1 === r && 0 === d)
                ? t.div
                : 0 !== t.div.negative
                ? t.div.isubn(1)
                : t.div.iaddn(1)
            }),
            (d.prototype.modn = function(e) {
              U(e <= 67108863)
              for (
                var t = (1 << 26) % e, n = 0, r = this.length - 1;
                r >= 0;
                r--
              )
                n = (t * n + (0 | this.words[r])) % e
              return n
            }),
            (d.prototype.idivn = function(e) {
              U(e <= 67108863)
              for (var t = 0, n = this.length - 1; n >= 0; n--) {
                var r = (0 | this.words[n]) + 67108864 * t
                ;(this.words[n] = (r / e) | 0), (t = r % e)
              }
              return this.strip()
            }),
            (d.prototype.divn = function(e) {
              return this.clone().idivn(e)
            }),
            (d.prototype.egcd = function(e) {
              U(0 === e.negative), U(!e.isZero())
              var t = this,
                n = e.clone()
              t = 0 !== t.negative ? t.umod(e) : t.clone()
              for (
                var r = new d(1),
                  i = new d(0),
                  F = new d(0),
                  l = new d(1),
                  a = 0;
                t.isEven() && n.isEven();

              )
                t.iushrn(1), n.iushrn(1), ++a
              for (var Q = n.clone(), o = t.clone(); !t.isZero(); ) {
                for (
                  var h = 0, c = 1;
                  0 == (t.words[0] & c) && h < 26;
                  ++h, c <<= 1
                );
                if (h > 0)
                  for (t.iushrn(h); h-- > 0; )
                    (r.isOdd() || i.isOdd()) && (r.iadd(Q), i.isub(o)),
                      r.iushrn(1),
                      i.iushrn(1)
                for (
                  var B = 0, s = 1;
                  0 == (n.words[0] & s) && B < 26;
                  ++B, s <<= 1
                );
                if (B > 0)
                  for (n.iushrn(B); B-- > 0; )
                    (F.isOdd() || l.isOdd()) && (F.iadd(Q), l.isub(o)),
                      F.iushrn(1),
                      l.iushrn(1)
                t.cmp(n) >= 0
                  ? (t.isub(n), r.isub(F), i.isub(l))
                  : (n.isub(t), F.isub(r), l.isub(i))
              }
              return { a: F, b: l, gcd: n.iushln(a) }
            }),
            (d.prototype._invmp = function(e) {
              U(0 === e.negative), U(!e.isZero())
              var t = this,
                n = e.clone()
              t = 0 !== t.negative ? t.umod(e) : t.clone()
              for (
                var r, i = new d(1), F = new d(0), l = n.clone();
                t.cmpn(1) > 0 && n.cmpn(1) > 0;

              ) {
                for (
                  var a = 0, Q = 1;
                  0 == (t.words[0] & Q) && a < 26;
                  ++a, Q <<= 1
                );
                if (a > 0)
                  for (t.iushrn(a); a-- > 0; )
                    i.isOdd() && i.iadd(l), i.iushrn(1)
                for (
                  var o = 0, h = 1;
                  0 == (n.words[0] & h) && o < 26;
                  ++o, h <<= 1
                );
                if (o > 0)
                  for (n.iushrn(o); o-- > 0; )
                    F.isOdd() && F.iadd(l), F.iushrn(1)
                t.cmp(n) >= 0 ? (t.isub(n), i.isub(F)) : (n.isub(t), F.isub(i))
              }
              return (r = 0 === t.cmpn(1) ? i : F).cmpn(0) < 0 && r.iadd(e), r
            }),
            (d.prototype.gcd = function(e) {
              if (this.isZero()) return e.abs()
              if (e.isZero()) return this.abs()
              var t = this.clone(),
                n = e.clone()
              ;(t.negative = 0), (n.negative = 0)
              for (var U = 0; t.isEven() && n.isEven(); U++)
                t.iushrn(1), n.iushrn(1)
              for (;;) {
                for (; t.isEven(); ) t.iushrn(1)
                for (; n.isEven(); ) n.iushrn(1)
                var r = t.cmp(n)
                if (r < 0) {
                  var d = t
                  ;(t = n), (n = d)
                } else if (0 === r || 0 === n.cmpn(1)) break
                t.isub(n)
              }
              return n.iushln(U)
            }),
            (d.prototype.invm = function(e) {
              return this.egcd(e).a.umod(e)
            }),
            (d.prototype.isEven = function() {
              return 0 == (1 & this.words[0])
            }),
            (d.prototype.isOdd = function() {
              return 1 == (1 & this.words[0])
            }),
            (d.prototype.andln = function(e) {
              return this.words[0] & e
            }),
            (d.prototype.bincn = function(e) {
              U('number' == typeof e)
              var t = e % 26,
                n = (e - t) / 26,
                r = 1 << t
              if (this.length <= n)
                return this._expand(n + 1), (this.words[n] |= r), this
              for (var d = r, i = n; 0 !== d && i < this.length; i++) {
                var F = 0 | this.words[i]
                ;(d = (F += d) >>> 26), (F &= 67108863), (this.words[i] = F)
              }
              return 0 !== d && ((this.words[i] = d), this.length++), this
            }),
            (d.prototype.isZero = function() {
              return 1 === this.length && 0 === this.words[0]
            }),
            (d.prototype.cmpn = function(e) {
              var t,
                n = e < 0
              if (0 !== this.negative && !n) return -1
              if (0 === this.negative && n) return 1
              if ((this.strip(), this.length > 1)) t = 1
              else {
                n && (e = -e), U(e <= 67108863, 'Number is too big')
                var r = 0 | this.words[0]
                t = r === e ? 0 : r < e ? -1 : 1
              }
              return 0 !== this.negative ? 0 | -t : t
            }),
            (d.prototype.cmp = function(e) {
              if (0 !== this.negative && 0 === e.negative) return -1
              if (0 === this.negative && 0 !== e.negative) return 1
              var t = this.ucmp(e)
              return 0 !== this.negative ? 0 | -t : t
            }),
            (d.prototype.ucmp = function(e) {
              if (this.length > e.length) return 1
              if (this.length < e.length) return -1
              for (var t = 0, n = this.length - 1; n >= 0; n--) {
                var U = 0 | this.words[n],
                  r = 0 | e.words[n]
                if (U !== r) {
                  U < r ? (t = -1) : U > r && (t = 1)
                  break
                }
              }
              return t
            }),
            (d.prototype.gtn = function(e) {
              return 1 === this.cmpn(e)
            }),
            (d.prototype.gt = function(e) {
              return 1 === this.cmp(e)
            }),
            (d.prototype.gten = function(e) {
              return this.cmpn(e) >= 0
            }),
            (d.prototype.gte = function(e) {
              return this.cmp(e) >= 0
            }),
            (d.prototype.ltn = function(e) {
              return -1 === this.cmpn(e)
            }),
            (d.prototype.lt = function(e) {
              return -1 === this.cmp(e)
            }),
            (d.prototype.lten = function(e) {
              return this.cmpn(e) <= 0
            }),
            (d.prototype.lte = function(e) {
              return this.cmp(e) <= 0
            }),
            (d.prototype.eqn = function(e) {
              return 0 === this.cmpn(e)
            }),
            (d.prototype.eq = function(e) {
              return 0 === this.cmp(e)
            }),
            (d.red = function(e) {
              return new W(e)
            }),
            (d.prototype.toRed = function(e) {
              return (
                U(!this.red, 'Already a number in reduction context'),
                U(0 === this.negative, 'red works only with positives'),
                e.convertTo(this)._forceRed(e)
              )
            }),
            (d.prototype.fromRed = function() {
              return (
                U(
                  this.red,
                  'fromRed works only with numbers in reduction context'
                ),
                this.red.convertFrom(this)
              )
            }),
            (d.prototype._forceRed = function(e) {
              return (this.red = e), this
            }),
            (d.prototype.forceRed = function(e) {
              return (
                U(!this.red, 'Already a number in reduction context'),
                this._forceRed(e)
              )
            }),
            (d.prototype.redAdd = function(e) {
              return (
                U(this.red, 'redAdd works only with red numbers'),
                this.red.add(this, e)
              )
            }),
            (d.prototype.redIAdd = function(e) {
              return (
                U(this.red, 'redIAdd works only with red numbers'),
                this.red.iadd(this, e)
              )
            }),
            (d.prototype.redSub = function(e) {
              return (
                U(this.red, 'redSub works only with red numbers'),
                this.red.sub(this, e)
              )
            }),
            (d.prototype.redISub = function(e) {
              return (
                U(this.red, 'redISub works only with red numbers'),
                this.red.isub(this, e)
              )
            }),
            (d.prototype.redShl = function(e) {
              return (
                U(this.red, 'redShl works only with red numbers'),
                this.red.shl(this, e)
              )
            }),
            (d.prototype.redMul = function(e) {
              return (
                U(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, e),
                this.red.mul(this, e)
              )
            }),
            (d.prototype.redIMul = function(e) {
              return (
                U(this.red, 'redMul works only with red numbers'),
                this.red._verify2(this, e),
                this.red.imul(this, e)
              )
            }),
            (d.prototype.redSqr = function() {
              return (
                U(this.red, 'redSqr works only with red numbers'),
                this.red._verify1(this),
                this.red.sqr(this)
              )
            }),
            (d.prototype.redISqr = function() {
              return (
                U(this.red, 'redISqr works only with red numbers'),
                this.red._verify1(this),
                this.red.isqr(this)
              )
            }),
            (d.prototype.redSqrt = function() {
              return (
                U(this.red, 'redSqrt works only with red numbers'),
                this.red._verify1(this),
                this.red.sqrt(this)
              )
            }),
            (d.prototype.redInvm = function() {
              return (
                U(this.red, 'redInvm works only with red numbers'),
                this.red._verify1(this),
                this.red.invm(this)
              )
            }),
            (d.prototype.redNeg = function() {
              return (
                U(this.red, 'redNeg works only with red numbers'),
                this.red._verify1(this),
                this.red.neg(this)
              )
            }),
            (d.prototype.redPow = function(e) {
              return (
                U(this.red && !e.red, 'redPow(normalNum)'),
                this.red._verify1(this),
                this.red.pow(this, e)
              )
            })
          var f = { k256: null, p224: null, p192: null, p25519: null }
          function R(e, t) {
            ;(this.name = e),
              (this.p = new d(t, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new d(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp())
          }
          function V() {
            R.call(
              this,
              'k256',
              'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
            )
          }
          function u() {
            R.call(
              this,
              'p224',
              'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
            )
          }
          function S() {
            R.call(
              this,
              'p192',
              'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
            )
          }
          function p() {
            R.call(
              this,
              '25519',
              '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
            )
          }
          function W(e) {
            if ('string' == typeof e) {
              var t = d._prime(e)
              ;(this.m = t.p), (this.prime = t)
            } else
              U(e.gtn(1), 'modulus must be greater than 1'),
                (this.m = e),
                (this.prime = null)
          }
          function Z(e) {
            W.call(this, e),
              (this.shift = this.m.bitLength()),
              this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new d(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv
                .mul(this.r)
                .isubn(1)
                .div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv))
          }
          ;(R.prototype._tmp = function() {
            var e = new d(null)
            return (e.words = new Array(Math.ceil(this.n / 13))), e
          }),
            (R.prototype.ireduce = function(e) {
              var t,
                n = e
              do {
                this.split(n, this.tmp),
                  (t = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength())
              } while (t > this.n)
              var U = t < this.n ? -1 : n.ucmp(this.p)
              return (
                0 === U
                  ? ((n.words[0] = 0), (n.length = 1))
                  : U > 0
                  ? n.isub(this.p)
                  : n.strip(),
                n
              )
            }),
            (R.prototype.split = function(e, t) {
              e.iushrn(this.n, 0, t)
            }),
            (R.prototype.imulK = function(e) {
              return e.imul(this.k)
            }),
            r(V, R),
            (V.prototype.split = function(e, t) {
              for (var n = Math.min(e.length, 9), U = 0; U < n; U++)
                t.words[U] = e.words[U]
              if (((t.length = n), e.length <= 9))
                return (e.words[0] = 0), void (e.length = 1)
              var r = e.words[9]
              for (
                t.words[t.length++] = 4194303 & r, U = 10;
                U < e.length;
                U++
              ) {
                var d = 0 | e.words[U]
                ;(e.words[U - 10] = ((4194303 & d) << 4) | (r >>> 22)), (r = d)
              }
              ;(r >>>= 22),
                (e.words[U - 10] = r),
                0 === r && e.length > 10 ? (e.length -= 10) : (e.length -= 9)
            }),
            (V.prototype.imulK = function(e) {
              ;(e.words[e.length] = 0),
                (e.words[e.length + 1] = 0),
                (e.length += 2)
              for (var t = 0, n = 0; n < e.length; n++) {
                var U = 0 | e.words[n]
                ;(t += 977 * U),
                  (e.words[n] = 67108863 & t),
                  (t = 64 * U + ((t / 67108864) | 0))
              }
              return (
                0 === e.words[e.length - 1] &&
                  (e.length--, 0 === e.words[e.length - 1] && e.length--),
                e
              )
            }),
            r(u, R),
            r(S, R),
            r(p, R),
            (p.prototype.imulK = function(e) {
              for (var t = 0, n = 0; n < e.length; n++) {
                var U = 19 * (0 | e.words[n]) + t,
                  r = 67108863 & U
                ;(U >>>= 26), (e.words[n] = r), (t = U)
              }
              return 0 !== t && (e.words[e.length++] = t), e
            }),
            (d._prime = function(e) {
              if (f[e]) return f[e]
              var t
              if ('k256' === e) t = new V()
              else if ('p224' === e) t = new u()
              else if ('p192' === e) t = new S()
              else {
                if ('p25519' !== e) throw new Error('Unknown prime ' + e)
                t = new p()
              }
              return (f[e] = t), t
            }),
            (W.prototype._verify1 = function(e) {
              U(0 === e.negative, 'red works only with positives'),
                U(e.red, 'red works only with red numbers')
            }),
            (W.prototype._verify2 = function(e, t) {
              U(
                0 == (e.negative | t.negative),
                'red works only with positives'
              ),
                U(e.red && e.red === t.red, 'red works only with red numbers')
            }),
            (W.prototype.imod = function(e) {
              return this.prime
                ? this.prime.ireduce(e)._forceRed(this)
                : e.umod(this.m)._forceRed(this)
            }),
            (W.prototype.neg = function(e) {
              return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
            }),
            (W.prototype.add = function(e, t) {
              this._verify2(e, t)
              var n = e.add(t)
              return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this)
            }),
            (W.prototype.iadd = function(e, t) {
              this._verify2(e, t)
              var n = e.iadd(t)
              return n.cmp(this.m) >= 0 && n.isub(this.m), n
            }),
            (W.prototype.sub = function(e, t) {
              this._verify2(e, t)
              var n = e.sub(t)
              return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this)
            }),
            (W.prototype.isub = function(e, t) {
              this._verify2(e, t)
              var n = e.isub(t)
              return n.cmpn(0) < 0 && n.iadd(this.m), n
            }),
            (W.prototype.shl = function(e, t) {
              return this._verify1(e), this.imod(e.ushln(t))
            }),
            (W.prototype.imul = function(e, t) {
              return this._verify2(e, t), this.imod(e.imul(t))
            }),
            (W.prototype.mul = function(e, t) {
              return this._verify2(e, t), this.imod(e.mul(t))
            }),
            (W.prototype.isqr = function(e) {
              return this.imul(e, e.clone())
            }),
            (W.prototype.sqr = function(e) {
              return this.mul(e, e)
            }),
            (W.prototype.sqrt = function(e) {
              if (e.isZero()) return e.clone()
              var t = this.m.andln(3)
              if ((U(t % 2 == 1), 3 === t)) {
                var n = this.m.add(new d(1)).iushrn(2)
                return this.pow(e, n)
              }
              for (
                var r = this.m.subn(1), i = 0;
                !r.isZero() && 0 === r.andln(1);

              )
                i++, r.iushrn(1)
              U(!r.isZero())
              var F = new d(1).toRed(this),
                l = F.redNeg(),
                a = this.m.subn(1).iushrn(1),
                Q = this.m.bitLength()
              for (
                Q = new d(2 * Q * Q).toRed(this);
                0 !== this.pow(Q, a).cmp(l);

              )
                Q.redIAdd(l)
              for (
                var o = this.pow(Q, r),
                  h = this.pow(e, r.addn(1).iushrn(1)),
                  c = this.pow(e, r),
                  B = i;
                0 !== c.cmp(F);

              ) {
                for (var s = c, f = 0; 0 !== s.cmp(F); f++) s = s.redSqr()
                U(f < B)
                var R = this.pow(o, new d(1).iushln(B - f - 1))
                ;(h = h.redMul(R)), (o = R.redSqr()), (c = c.redMul(o)), (B = f)
              }
              return h
            }),
            (W.prototype.invm = function(e) {
              var t = e._invmp(this.m)
              return 0 !== t.negative
                ? ((t.negative = 0), this.imod(t).redNeg())
                : this.imod(t)
            }),
            (W.prototype.pow = function(e, t) {
              if (t.isZero()) return new d(1).toRed(this)
              if (0 === t.cmpn(1)) return e.clone()
              var n = new Array(16)
              ;(n[0] = new d(1).toRed(this)), (n[1] = e)
              for (var U = 2; U < n.length; U++) n[U] = this.mul(n[U - 1], e)
              var r = n[0],
                i = 0,
                F = 0,
                l = t.bitLength() % 26
              for (0 === l && (l = 26), U = t.length - 1; U >= 0; U--) {
                for (var a = t.words[U], Q = l - 1; Q >= 0; Q--) {
                  var o = (a >> Q) & 1
                  r !== n[0] && (r = this.sqr(r)),
                    0 !== o || 0 !== i
                      ? ((i <<= 1),
                        (i |= o),
                        (4 == ++F || (0 === U && 0 === Q)) &&
                          ((r = this.mul(r, n[i])), (F = 0), (i = 0)))
                      : (F = 0)
                }
                l = 26
              }
              return r
            }),
            (W.prototype.convertTo = function(e) {
              var t = e.umod(this.m)
              return t === e ? t.clone() : t
            }),
            (W.prototype.convertFrom = function(e) {
              var t = e.clone()
              return (t.red = null), t
            }),
            (d.mont = function(e) {
              return new Z(e)
            }),
            r(Z, W),
            (Z.prototype.convertTo = function(e) {
              return this.imod(e.ushln(this.shift))
            }),
            (Z.prototype.convertFrom = function(e) {
              var t = this.imod(e.mul(this.rinv))
              return (t.red = null), t
            }),
            (Z.prototype.imul = function(e, t) {
              if (e.isZero() || t.isZero())
                return (e.words[0] = 0), (e.length = 1), e
              var n = e.imul(t),
                U = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                r = n.isub(U).iushrn(this.shift),
                d = r
              return (
                r.cmp(this.m) >= 0
                  ? (d = r.isub(this.m))
                  : r.cmpn(0) < 0 && (d = r.iadd(this.m)),
                d._forceRed(this)
              )
            }),
            (Z.prototype.mul = function(e, t) {
              if (e.isZero() || t.isZero()) return new d(0)._forceRed(this)
              var n = e.mul(t),
                U = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                r = n.isub(U).iushrn(this.shift),
                i = r
              return (
                r.cmp(this.m) >= 0
                  ? (i = r.isub(this.m))
                  : r.cmpn(0) < 0 && (i = r.iadd(this.m)),
                i._forceRed(this)
              )
            }),
            (Z.prototype.invm = function(e) {
              return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
            })
        })(e, this)
      }.call(this, n(118)(e)))
    },
    function(e, t, n) {
      'use strict'
      ;(function(e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var U = n(80),
          r = n(81),
          d = n(42)
        function i() {
          return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function F(e, t) {
          if (i() < t) throw new RangeError('Invalid typed array length')
          return (
            l.TYPED_ARRAY_SUPPORT
              ? ((e = new Uint8Array(t)).__proto__ = l.prototype)
              : (null === e && (e = new l(t)), (e.length = t)),
            e
          )
        }
        function l(e, t, n) {
          if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l))
            return new l(e, t, n)
          if ('number' == typeof e) {
            if ('string' == typeof t)
              throw new Error(
                'If encoding is specified then the first argument must be a string'
              )
            return o(this, e)
          }
          return a(this, e, t, n)
        }
        function a(e, t, n, U) {
          if ('number' == typeof t)
            throw new TypeError('"value" argument must not be a number')
          return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer
            ? (function(e, t, n, U) {
                if ((t.byteLength, n < 0 || t.byteLength < n))
                  throw new RangeError("'offset' is out of bounds")
                if (t.byteLength < n + (U || 0))
                  throw new RangeError("'length' is out of bounds")
                return (
                  (t =
                    void 0 === n && void 0 === U
                      ? new Uint8Array(t)
                      : void 0 === U
                      ? new Uint8Array(t, n)
                      : new Uint8Array(t, n, U)),
                  l.TYPED_ARRAY_SUPPORT
                    ? ((e = t).__proto__ = l.prototype)
                    : (e = h(e, t)),
                  e
                )
              })(e, t, n, U)
            : 'string' == typeof t
            ? (function(e, t, n) {
                if (
                  (('string' == typeof n && '' !== n) || (n = 'utf8'),
                  !l.isEncoding(n))
                )
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  )
                var U = 0 | B(t, n),
                  r = (e = F(e, U)).write(t, n)
                return r !== U && (e = e.slice(0, r)), e
              })(e, t, n)
            : (function(e, t) {
                if (l.isBuffer(t)) {
                  var n = 0 | c(t.length)
                  return 0 === (e = F(e, n)).length
                    ? e
                    : (t.copy(e, 0, 0, n), e)
                }
                if (t) {
                  if (
                    ('undefined' != typeof ArrayBuffer &&
                      t.buffer instanceof ArrayBuffer) ||
                    'length' in t
                  )
                    return 'number' != typeof t.length || (U = t.length) != U
                      ? F(e, 0)
                      : h(e, t)
                  if ('Buffer' === t.type && d(t.data)) return h(e, t.data)
                }
                var U
                throw new TypeError(
                  'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
                )
              })(e, t)
        }
        function Q(e) {
          if ('number' != typeof e)
            throw new TypeError('"size" argument must be a number')
          if (e < 0)
            throw new RangeError('"size" argument must not be negative')
        }
        function o(e, t) {
          if ((Q(t), (e = F(e, t < 0 ? 0 : 0 | c(t))), !l.TYPED_ARRAY_SUPPORT))
            for (var n = 0; n < t; ++n) e[n] = 0
          return e
        }
        function h(e, t) {
          var n = t.length < 0 ? 0 : 0 | c(t.length)
          e = F(e, n)
          for (var U = 0; U < n; U += 1) e[U] = 255 & t[U]
          return e
        }
        function c(e) {
          if (e >= i())
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' +
                i().toString(16) +
                ' bytes'
            )
          return 0 | e
        }
        function B(e, t) {
          if (l.isBuffer(e)) return e.length
          if (
            'undefined' != typeof ArrayBuffer &&
            'function' == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
          )
            return e.byteLength
          'string' != typeof e && (e = '' + e)
          var n = e.length
          if (0 === n) return 0
          for (var U = !1; ; )
            switch (t) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return n
              case 'utf8':
              case 'utf-8':
              case void 0:
                return G(e).length
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return 2 * n
              case 'hex':
                return n >>> 1
              case 'base64':
                return A(e).length
              default:
                if (U) return G(e).length
                ;(t = ('' + t).toLowerCase()), (U = !0)
            }
        }
        function s(e, t, n) {
          var U = e[t]
          ;(e[t] = e[n]), (e[n] = U)
        }
        function f(e, t, n, U, r) {
          if (0 === e.length) return -1
          if (
            ('string' == typeof n
              ? ((U = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = r ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length)
          ) {
            if (r) return -1
            n = e.length - 1
          } else if (n < 0) {
            if (!r) return -1
            n = 0
          }
          if (('string' == typeof t && (t = l.from(t, U)), l.isBuffer(t)))
            return 0 === t.length ? -1 : R(e, t, n, U, r)
          if ('number' == typeof t)
            return (
              (t &= 255),
              l.TYPED_ARRAY_SUPPORT &&
              'function' == typeof Uint8Array.prototype.indexOf
                ? r
                  ? Uint8Array.prototype.indexOf.call(e, t, n)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                : R(e, [t], n, U, r)
            )
          throw new TypeError('val must be string, number or Buffer')
        }
        function R(e, t, n, U, r) {
          var d,
            i = 1,
            F = e.length,
            l = t.length
          if (
            void 0 !== U &&
            ('ucs2' === (U = String(U).toLowerCase()) ||
              'ucs-2' === U ||
              'utf16le' === U ||
              'utf-16le' === U)
          ) {
            if (e.length < 2 || t.length < 2) return -1
            ;(i = 2), (F /= 2), (l /= 2), (n /= 2)
          }
          function a(e, t) {
            return 1 === i ? e[t] : e.readUInt16BE(t * i)
          }
          if (r) {
            var Q = -1
            for (d = n; d < F; d++)
              if (a(e, d) === a(t, -1 === Q ? 0 : d - Q)) {
                if ((-1 === Q && (Q = d), d - Q + 1 === l)) return Q * i
              } else -1 !== Q && (d -= d - Q), (Q = -1)
          } else
            for (n + l > F && (n = F - l), d = n; d >= 0; d--) {
              for (var o = !0, h = 0; h < l; h++)
                if (a(e, d + h) !== a(t, h)) {
                  o = !1
                  break
                }
              if (o) return d
            }
          return -1
        }
        function V(e, t, n, U) {
          n = Number(n) || 0
          var r = e.length - n
          U ? (U = Number(U)) > r && (U = r) : (U = r)
          var d = t.length
          if (d % 2 != 0) throw new TypeError('Invalid hex string')
          U > d / 2 && (U = d / 2)
          for (var i = 0; i < U; ++i) {
            var F = parseInt(t.substr(2 * i, 2), 16)
            if (isNaN(F)) return i
            e[n + i] = F
          }
          return i
        }
        function u(e, t, n, U) {
          return Y(G(t, e.length - n), e, n, U)
        }
        function S(e, t, n, U) {
          return Y(
            (function(e) {
              for (var t = [], n = 0; n < e.length; ++n)
                t.push(255 & e.charCodeAt(n))
              return t
            })(t),
            e,
            n,
            U
          )
        }
        function p(e, t, n, U) {
          return S(e, t, n, U)
        }
        function W(e, t, n, U) {
          return Y(A(t), e, n, U)
        }
        function Z(e, t, n, U) {
          return Y(
            (function(e, t) {
              for (
                var n, U, r, d = [], i = 0;
                i < e.length && !((t -= 2) < 0);
                ++i
              )
                (U = (n = e.charCodeAt(i)) >> 8),
                  (r = n % 256),
                  d.push(r),
                  d.push(U)
              return d
            })(t, e.length - n),
            e,
            n,
            U
          )
        }
        function J(e, t, n) {
          return 0 === t && n === e.length
            ? U.fromByteArray(e)
            : U.fromByteArray(e.slice(t, n))
        }
        function b(e, t, n) {
          n = Math.min(e.length, n)
          for (var U = [], r = t; r < n; ) {
            var d,
              i,
              F,
              l,
              a = e[r],
              Q = null,
              o = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1
            if (r + o <= n)
              switch (o) {
                case 1:
                  a < 128 && (Q = a)
                  break
                case 2:
                  128 == (192 & (d = e[r + 1])) &&
                    (l = ((31 & a) << 6) | (63 & d)) > 127 &&
                    (Q = l)
                  break
                case 3:
                  ;(d = e[r + 1]),
                    (i = e[r + 2]),
                    128 == (192 & d) &&
                      128 == (192 & i) &&
                      (l = ((15 & a) << 12) | ((63 & d) << 6) | (63 & i)) >
                        2047 &&
                      (l < 55296 || l > 57343) &&
                      (Q = l)
                  break
                case 4:
                  ;(d = e[r + 1]),
                    (i = e[r + 2]),
                    (F = e[r + 3]),
                    128 == (192 & d) &&
                      128 == (192 & i) &&
                      128 == (192 & F) &&
                      (l =
                        ((15 & a) << 18) |
                        ((63 & d) << 12) |
                        ((63 & i) << 6) |
                        (63 & F)) > 65535 &&
                      l < 1114112 &&
                      (Q = l)
              }
            null === Q
              ? ((Q = 65533), (o = 1))
              : Q > 65535 &&
                ((Q -= 65536),
                U.push(((Q >>> 10) & 1023) | 55296),
                (Q = 56320 | (1023 & Q))),
              U.push(Q),
              (r += o)
          }
          return (function(e) {
            var t = e.length
            if (t <= N) return String.fromCharCode.apply(String, e)
            for (var n = '', U = 0; U < t; )
              n += String.fromCharCode.apply(String, e.slice(U, (U += N)))
            return n
          })(U)
        }
        ;(t.Buffer = l),
          (t.SlowBuffer = function(e) {
            return +e != e && (e = 0), l.alloc(+e)
          }),
          (t.INSPECT_MAX_BYTES = 50),
          (l.TYPED_ARRAY_SUPPORT =
            void 0 !== e.TYPED_ARRAY_SUPPORT
              ? e.TYPED_ARRAY_SUPPORT
              : (function() {
                  try {
                    var e = new Uint8Array(1)
                    return (
                      (e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                          return 42
                        },
                      }),
                      42 === e.foo() &&
                        'function' == typeof e.subarray &&
                        0 === e.subarray(1, 1).byteLength
                    )
                  } catch (e) {
                    return !1
                  }
                })()),
          (t.kMaxLength = i()),
          (l.poolSize = 8192),
          (l._augment = function(e) {
            return (e.__proto__ = l.prototype), e
          }),
          (l.from = function(e, t, n) {
            return a(null, e, t, n)
          }),
          l.TYPED_ARRAY_SUPPORT &&
            ((l.prototype.__proto__ = Uint8Array.prototype),
            (l.__proto__ = Uint8Array),
            'undefined' != typeof Symbol &&
              Symbol.species &&
              l[Symbol.species] === l &&
              Object.defineProperty(l, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (l.alloc = function(e, t, n) {
            return (function(e, t, n, U) {
              return (
                Q(t),
                t <= 0
                  ? F(null, t)
                  : void 0 !== n
                  ? 'string' == typeof U
                    ? F(null, t).fill(n, U)
                    : F(null, t).fill(n)
                  : F(null, t)
              )
            })(0, e, t, n)
          }),
          (l.allocUnsafe = function(e) {
            return o(null, e)
          }),
          (l.allocUnsafeSlow = function(e) {
            return o(null, e)
          }),
          (l.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
          }),
          (l.compare = function(e, t) {
            if (!l.isBuffer(e) || !l.isBuffer(t))
              throw new TypeError('Arguments must be Buffers')
            if (e === t) return 0
            for (
              var n = e.length, U = t.length, r = 0, d = Math.min(n, U);
              r < d;
              ++r
            )
              if (e[r] !== t[r]) {
                ;(n = e[r]), (U = t[r])
                break
              }
            return n < U ? -1 : U < n ? 1 : 0
          }),
          (l.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0
              default:
                return !1
            }
          }),
          (l.concat = function(e, t) {
            if (!d(e))
              throw new TypeError('"list" argument must be an Array of Buffers')
            if (0 === e.length) return l.alloc(0)
            var n
            if (void 0 === t)
              for (t = 0, n = 0; n < e.length; ++n) t += e[n].length
            var U = l.allocUnsafe(t),
              r = 0
            for (n = 0; n < e.length; ++n) {
              var i = e[n]
              if (!l.isBuffer(i))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                )
              i.copy(U, r), (r += i.length)
            }
            return U
          }),
          (l.byteLength = B),
          (l.prototype._isBuffer = !0),
          (l.prototype.swap16 = function() {
            var e = this.length
            if (e % 2 != 0)
              throw new RangeError('Buffer size must be a multiple of 16-bits')
            for (var t = 0; t < e; t += 2) s(this, t, t + 1)
            return this
          }),
          (l.prototype.swap32 = function() {
            var e = this.length
            if (e % 4 != 0)
              throw new RangeError('Buffer size must be a multiple of 32-bits')
            for (var t = 0; t < e; t += 4)
              s(this, t, t + 3), s(this, t + 1, t + 2)
            return this
          }),
          (l.prototype.swap64 = function() {
            var e = this.length
            if (e % 8 != 0)
              throw new RangeError('Buffer size must be a multiple of 64-bits')
            for (var t = 0; t < e; t += 8)
              s(this, t, t + 7),
                s(this, t + 1, t + 6),
                s(this, t + 2, t + 5),
                s(this, t + 3, t + 4)
            return this
          }),
          (l.prototype.toString = function() {
            var e = 0 | this.length
            return 0 === e
              ? ''
              : 0 === arguments.length
              ? b(this, 0, e)
              : function(e, t, n) {
                  var U = !1
                  if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                    return ''
                  if (
                    ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0)
                  )
                    return ''
                  if ((n >>>= 0) <= (t >>>= 0)) return ''
                  for (e || (e = 'utf8'); ; )
                    switch (e) {
                      case 'hex':
                        return E(this, t, n)
                      case 'utf8':
                      case 'utf-8':
                        return b(this, t, n)
                      case 'ascii':
                        return g(this, t, n)
                      case 'latin1':
                      case 'binary':
                        return m(this, t, n)
                      case 'base64':
                        return J(this, t, n)
                      case 'ucs2':
                      case 'ucs-2':
                      case 'utf16le':
                      case 'utf-16le':
                        return I(this, t, n)
                      default:
                        if (U) throw new TypeError('Unknown encoding: ' + e)
                        ;(e = (e + '').toLowerCase()), (U = !0)
                    }
                }.apply(this, arguments)
          }),
          (l.prototype.equals = function(e) {
            if (!l.isBuffer(e)) throw new TypeError('Argument must be a Buffer')
            return this === e || 0 === l.compare(this, e)
          }),
          (l.prototype.inspect = function() {
            var e = '',
              n = t.INSPECT_MAX_BYTES
            return (
              this.length > 0 &&
                ((e = this.toString('hex', 0, n)
                  .match(/.{2}/g)
                  .join(' ')),
                this.length > n && (e += ' ... ')),
              '<Buffer ' + e + '>'
            )
          }),
          (l.prototype.compare = function(e, t, n, U, r) {
            if (!l.isBuffer(e)) throw new TypeError('Argument must be a Buffer')
            if (
              (void 0 === t && (t = 0),
              void 0 === n && (n = e ? e.length : 0),
              void 0 === U && (U = 0),
              void 0 === r && (r = this.length),
              t < 0 || n > e.length || U < 0 || r > this.length)
            )
              throw new RangeError('out of range index')
            if (U >= r && t >= n) return 0
            if (U >= r) return -1
            if (t >= n) return 1
            if (this === e) return 0
            for (
              var d = (r >>>= 0) - (U >>>= 0),
                i = (n >>>= 0) - (t >>>= 0),
                F = Math.min(d, i),
                a = this.slice(U, r),
                Q = e.slice(t, n),
                o = 0;
              o < F;
              ++o
            )
              if (a[o] !== Q[o]) {
                ;(d = a[o]), (i = Q[o])
                break
              }
            return d < i ? -1 : i < d ? 1 : 0
          }),
          (l.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
          }),
          (l.prototype.indexOf = function(e, t, n) {
            return f(this, e, t, n, !0)
          }),
          (l.prototype.lastIndexOf = function(e, t, n) {
            return f(this, e, t, n, !1)
          }),
          (l.prototype.write = function(e, t, n, U) {
            if (void 0 === t) (U = 'utf8'), (n = this.length), (t = 0)
            else if (void 0 === n && 'string' == typeof t)
              (U = t), (n = this.length), (t = 0)
            else {
              if (!isFinite(t))
                throw new Error(
                  'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                )
              ;(t |= 0),
                isFinite(n)
                  ? ((n |= 0), void 0 === U && (U = 'utf8'))
                  : ((U = n), (n = void 0))
            }
            var r = this.length - t
            if (
              ((void 0 === n || n > r) && (n = r),
              (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError('Attempt to write outside buffer bounds')
            U || (U = 'utf8')
            for (var d = !1; ; )
              switch (U) {
                case 'hex':
                  return V(this, e, t, n)
                case 'utf8':
                case 'utf-8':
                  return u(this, e, t, n)
                case 'ascii':
                  return S(this, e, t, n)
                case 'latin1':
                case 'binary':
                  return p(this, e, t, n)
                case 'base64':
                  return W(this, e, t, n)
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return Z(this, e, t, n)
                default:
                  if (d) throw new TypeError('Unknown encoding: ' + U)
                  ;(U = ('' + U).toLowerCase()), (d = !0)
              }
          }),
          (l.prototype.toJSON = function() {
            return {
              type: 'Buffer',
              data: Array.prototype.slice.call(this._arr || this, 0),
            }
          })
        var N = 4096
        function g(e, t, n) {
          var U = ''
          n = Math.min(e.length, n)
          for (var r = t; r < n; ++r) U += String.fromCharCode(127 & e[r])
          return U
        }
        function m(e, t, n) {
          var U = ''
          n = Math.min(e.length, n)
          for (var r = t; r < n; ++r) U += String.fromCharCode(e[r])
          return U
        }
        function E(e, t, n) {
          var U,
            r = e.length
          ;(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r)
          for (var d = '', i = t; i < n; ++i)
            d += (U = e[i]) < 16 ? '0' + U.toString(16) : U.toString(16)
          return d
        }
        function I(e, t, n) {
          for (var U = e.slice(t, n), r = '', d = 0; d < U.length; d += 2)
            r += String.fromCharCode(U[d] + 256 * U[d + 1])
          return r
        }
        function k(e, t, n) {
          if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint')
          if (e + t > n)
            throw new RangeError('Trying to access beyond buffer length')
        }
        function C(e, t, n, U, r, d) {
          if (!l.isBuffer(e))
            throw new TypeError('"buffer" argument must be a Buffer instance')
          if (t > r || t < d)
            throw new RangeError('"value" argument is out of bounds')
          if (n + U > e.length) throw new RangeError('Index out of range')
        }
        function T(e, t, n, U) {
          t < 0 && (t = 65535 + t + 1)
          for (var r = 0, d = Math.min(e.length - n, 2); r < d; ++r)
            e[n + r] =
              (t & (255 << (8 * (U ? r : 1 - r)))) >>> (8 * (U ? r : 1 - r))
        }
        function y(e, t, n, U) {
          t < 0 && (t = 4294967295 + t + 1)
          for (var r = 0, d = Math.min(e.length - n, 4); r < d; ++r)
            e[n + r] = (t >>> (8 * (U ? r : 3 - r))) & 255
        }
        function v(e, t, n, U, r, d) {
          if (n + U > e.length) throw new RangeError('Index out of range')
          if (n < 0) throw new RangeError('Index out of range')
        }
        function D(e, t, n, U, d) {
          return d || v(e, 0, n, 4), r.write(e, t, n, U, 23, 4), n + 4
        }
        function w(e, t, n, U, d) {
          return d || v(e, 0, n, 8), r.write(e, t, n, U, 52, 8), n + 8
        }
        ;(l.prototype.slice = function(e, t) {
          var n,
            U = this.length
          if (
            ((e = ~~e) < 0 ? (e += U) < 0 && (e = 0) : e > U && (e = U),
            (t = void 0 === t ? U : ~~t) < 0
              ? (t += U) < 0 && (t = 0)
              : t > U && (t = U),
            t < e && (t = e),
            l.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(e, t)).__proto__ = l.prototype
          else {
            var r = t - e
            n = new l(r, void 0)
            for (var d = 0; d < r; ++d) n[d] = this[d + e]
          }
          return n
        }),
          (l.prototype.readUIntLE = function(e, t, n) {
            ;(e |= 0), (t |= 0), n || k(e, t, this.length)
            for (var U = this[e], r = 1, d = 0; ++d < t && (r *= 256); )
              U += this[e + d] * r
            return U
          }),
          (l.prototype.readUIntBE = function(e, t, n) {
            ;(e |= 0), (t |= 0), n || k(e, t, this.length)
            for (var U = this[e + --t], r = 1; t > 0 && (r *= 256); )
              U += this[e + --t] * r
            return U
          }),
          (l.prototype.readUInt8 = function(e, t) {
            return t || k(e, 1, this.length), this[e]
          }),
          (l.prototype.readUInt16LE = function(e, t) {
            return t || k(e, 2, this.length), this[e] | (this[e + 1] << 8)
          }),
          (l.prototype.readUInt16BE = function(e, t) {
            return t || k(e, 2, this.length), (this[e] << 8) | this[e + 1]
          }),
          (l.prototype.readUInt32LE = function(e, t) {
            return (
              t || k(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            )
          }),
          (l.prototype.readUInt32BE = function(e, t) {
            return (
              t || k(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            )
          }),
          (l.prototype.readIntLE = function(e, t, n) {
            ;(e |= 0), (t |= 0), n || k(e, t, this.length)
            for (var U = this[e], r = 1, d = 0; ++d < t && (r *= 256); )
              U += this[e + d] * r
            return U >= (r *= 128) && (U -= Math.pow(2, 8 * t)), U
          }),
          (l.prototype.readIntBE = function(e, t, n) {
            ;(e |= 0), (t |= 0), n || k(e, t, this.length)
            for (var U = t, r = 1, d = this[e + --U]; U > 0 && (r *= 256); )
              d += this[e + --U] * r
            return d >= (r *= 128) && (d -= Math.pow(2, 8 * t)), d
          }),
          (l.prototype.readInt8 = function(e, t) {
            return (
              t || k(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            )
          }),
          (l.prototype.readInt16LE = function(e, t) {
            t || k(e, 2, this.length)
            var n = this[e] | (this[e + 1] << 8)
            return 32768 & n ? 4294901760 | n : n
          }),
          (l.prototype.readInt16BE = function(e, t) {
            t || k(e, 2, this.length)
            var n = this[e + 1] | (this[e] << 8)
            return 32768 & n ? 4294901760 | n : n
          }),
          (l.prototype.readInt32LE = function(e, t) {
            return (
              t || k(e, 4, this.length),
              this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
            )
          }),
          (l.prototype.readInt32BE = function(e, t) {
            return (
              t || k(e, 4, this.length),
              (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
            )
          }),
          (l.prototype.readFloatLE = function(e, t) {
            return t || k(e, 4, this.length), r.read(this, e, !0, 23, 4)
          }),
          (l.prototype.readFloatBE = function(e, t) {
            return t || k(e, 4, this.length), r.read(this, e, !1, 23, 4)
          }),
          (l.prototype.readDoubleLE = function(e, t) {
            return t || k(e, 8, this.length), r.read(this, e, !0, 52, 8)
          }),
          (l.prototype.readDoubleBE = function(e, t) {
            return t || k(e, 8, this.length), r.read(this, e, !1, 52, 8)
          }),
          (l.prototype.writeUIntLE = function(e, t, n, U) {
            ;(e = +e),
              (t |= 0),
              (n |= 0),
              U || C(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
            var r = 1,
              d = 0
            for (this[t] = 255 & e; ++d < n && (r *= 256); )
              this[t + d] = (e / r) & 255
            return t + n
          }),
          (l.prototype.writeUIntBE = function(e, t, n, U) {
            ;(e = +e),
              (t |= 0),
              (n |= 0),
              U || C(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
            var r = n - 1,
              d = 1
            for (this[t + r] = 255 & e; --r >= 0 && (d *= 256); )
              this[t + r] = (e / d) & 255
            return t + n
          }),
          (l.prototype.writeUInt8 = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || C(this, e, t, 1, 255, 0),
              l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              (this[t] = 255 & e),
              t + 1
            )
          }),
          (l.prototype.writeUInt16LE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || C(this, e, t, 2, 65535, 0),
              l.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : T(this, e, t, !0),
              t + 2
            )
          }),
          (l.prototype.writeUInt16BE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || C(this, e, t, 2, 65535, 0),
              l.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : T(this, e, t, !1),
              t + 2
            )
          }),
          (l.prototype.writeUInt32LE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || C(this, e, t, 4, 4294967295, 0),
              l.TYPED_ARRAY_SUPPORT
                ? ((this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e))
                : y(this, e, t, !0),
              t + 4
            )
          }),
          (l.prototype.writeUInt32BE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || C(this, e, t, 4, 4294967295, 0),
              l.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : y(this, e, t, !1),
              t + 4
            )
          }),
          (l.prototype.writeIntLE = function(e, t, n, U) {
            if (((e = +e), (t |= 0), !U)) {
              var r = Math.pow(2, 8 * n - 1)
              C(this, e, t, n, r - 1, -r)
            }
            var d = 0,
              i = 1,
              F = 0
            for (this[t] = 255 & e; ++d < n && (i *= 256); )
              e < 0 && 0 === F && 0 !== this[t + d - 1] && (F = 1),
                (this[t + d] = (((e / i) >> 0) - F) & 255)
            return t + n
          }),
          (l.prototype.writeIntBE = function(e, t, n, U) {
            if (((e = +e), (t |= 0), !U)) {
              var r = Math.pow(2, 8 * n - 1)
              C(this, e, t, n, r - 1, -r)
            }
            var d = n - 1,
              i = 1,
              F = 0
            for (this[t + d] = 255 & e; --d >= 0 && (i *= 256); )
              e < 0 && 0 === F && 0 !== this[t + d + 1] && (F = 1),
                (this[t + d] = (((e / i) >> 0) - F) & 255)
            return t + n
          }),
          (l.prototype.writeInt8 = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || C(this, e, t, 1, 127, -128),
              l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            )
          }),
          (l.prototype.writeInt16LE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || C(this, e, t, 2, 32767, -32768),
              l.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : T(this, e, t, !0),
              t + 2
            )
          }),
          (l.prototype.writeInt16BE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || C(this, e, t, 2, 32767, -32768),
              l.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : T(this, e, t, !1),
              t + 2
            )
          }),
          (l.prototype.writeInt32LE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || C(this, e, t, 4, 2147483647, -2147483648),
              l.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  (this[t + 2] = e >>> 16),
                  (this[t + 3] = e >>> 24))
                : y(this, e, t, !0),
              t + 4
            )
          }),
          (l.prototype.writeInt32BE = function(e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || C(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              l.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : y(this, e, t, !1),
              t + 4
            )
          }),
          (l.prototype.writeFloatLE = function(e, t, n) {
            return D(this, e, t, !0, n)
          }),
          (l.prototype.writeFloatBE = function(e, t, n) {
            return D(this, e, t, !1, n)
          }),
          (l.prototype.writeDoubleLE = function(e, t, n) {
            return w(this, e, t, !0, n)
          }),
          (l.prototype.writeDoubleBE = function(e, t, n) {
            return w(this, e, t, !1, n)
          }),
          (l.prototype.copy = function(e, t, n, U) {
            if (
              (n || (n = 0),
              U || 0 === U || (U = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              U > 0 && U < n && (U = n),
              U === n)
            )
              return 0
            if (0 === e.length || 0 === this.length) return 0
            if (t < 0) throw new RangeError('targetStart out of bounds')
            if (n < 0 || n >= this.length)
              throw new RangeError('sourceStart out of bounds')
            if (U < 0) throw new RangeError('sourceEnd out of bounds')
            U > this.length && (U = this.length),
              e.length - t < U - n && (U = e.length - t + n)
            var r,
              d = U - n
            if (this === e && n < t && t < U)
              for (r = d - 1; r >= 0; --r) e[r + t] = this[r + n]
            else if (d < 1e3 || !l.TYPED_ARRAY_SUPPORT)
              for (r = 0; r < d; ++r) e[r + t] = this[r + n]
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + d), t)
            return d
          }),
          (l.prototype.fill = function(e, t, n, U) {
            if ('string' == typeof e) {
              if (
                ('string' == typeof t
                  ? ((U = t), (t = 0), (n = this.length))
                  : 'string' == typeof n && ((U = n), (n = this.length)),
                1 === e.length)
              ) {
                var r = e.charCodeAt(0)
                r < 256 && (e = r)
              }
              if (void 0 !== U && 'string' != typeof U)
                throw new TypeError('encoding must be a string')
              if ('string' == typeof U && !l.isEncoding(U))
                throw new TypeError('Unknown encoding: ' + U)
            } else 'number' == typeof e && (e &= 255)
            if (t < 0 || this.length < t || this.length < n)
              throw new RangeError('Out of range index')
            if (n <= t) return this
            var d
            if (
              ((t >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              e || (e = 0),
              'number' == typeof e)
            )
              for (d = t; d < n; ++d) this[d] = e
            else {
              var i = l.isBuffer(e) ? e : G(new l(e, U).toString()),
                F = i.length
              for (d = 0; d < n - t; ++d) this[d + t] = i[d % F]
            }
            return this
          })
        var M = /[^+\/0-9A-Za-z-_]/g
        function G(e, t) {
          var n
          t = t || 1 / 0
          for (var U = e.length, r = null, d = [], i = 0; i < U; ++i) {
            if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
              if (!r) {
                if (n > 56319) {
                  ;(t -= 3) > -1 && d.push(239, 191, 189)
                  continue
                }
                if (i + 1 === U) {
                  ;(t -= 3) > -1 && d.push(239, 191, 189)
                  continue
                }
                r = n
                continue
              }
              if (n < 56320) {
                ;(t -= 3) > -1 && d.push(239, 191, 189), (r = n)
                continue
              }
              n = 65536 + (((r - 55296) << 10) | (n - 56320))
            } else r && (t -= 3) > -1 && d.push(239, 191, 189)
            if (((r = null), n < 128)) {
              if ((t -= 1) < 0) break
              d.push(n)
            } else if (n < 2048) {
              if ((t -= 2) < 0) break
              d.push((n >> 6) | 192, (63 & n) | 128)
            } else if (n < 65536) {
              if ((t -= 3) < 0) break
              d.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128)
            } else {
              if (!(n < 1114112)) throw new Error('Invalid code point')
              if ((t -= 4) < 0) break
              d.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128
              )
            }
          }
          return d
        }
        function A(e) {
          return U.toByteArray(
            (function(e) {
              if (
                (e = (function(e) {
                  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '')
                })(e).replace(M, '')).length < 2
              )
                return ''
              for (; e.length % 4 != 0; ) e += '='
              return e
            })(e)
          )
        }
        function Y(e, t, n, U) {
          for (var r = 0; r < U && !(r + n >= t.length || r >= e.length); ++r)
            t[r + n] = e[r]
          return r
        }
      }.call(this, n(8)))
    },
    function(e, t, n) {
      'use strict'
      var U = t
      ;(U.version = n(125).version),
        (U.utils = n(126)),
        (U.rand = n(64)),
        (U.curve = n(24)),
        (U.curves = n(131)),
        (U.ec = n(139)),
        (U.eddsa = n(143))
    },
    function(e, t, n) {
      n(78)
      const U = (e, t) => parseInt(e.slice(2 * t + 2, 2 * t + 4), 16),
        r = e => (e.length - 2) / 2,
        d = (e, t) => (t.length === 2 * e + 2 ? t : d(e, '0x0' + t.slice(2))),
        i = (e, t) => (t.length === 2 * e + 2 ? t : i(e, t + '0')),
        F = e => {
          let t = []
          for (let n = 2, U = e.length; n < U; n += 2)
            t.push(parseInt(e.slice(n, n + 2), 16))
          return t
        },
        l = e => {
          let t = '0x'
          for (let n = 0, U = e.length; n < U; ++n) {
            let U = e[n]
            t += (U < 16 ? '0' : '') + U.toString(16)
          }
          return t
        }
      e.exports = {
        random: e => {
          let t
          t =
            'undefined' != typeof window &&
            window.crypto &&
            window.crypto.getRandomValues
              ? window.crypto.getRandomValues(new Uint8Array(e))
              : n(79).randomBytes(e)
          let U = '0x'
          for (let n = 0; n < e; ++n) U += ('00' + t[n].toString(16)).slice(-2)
          return U
        },
        length: r,
        concat: (e, t) => e.concat(t.slice(2)),
        flatten: e => '0x' + e.reduce((e, t) => e + t.slice(2), ''),
        slice: (e, t, n) => '0x' + n.slice(2 * e + 2, 2 * t + 2),
        reverse: e => {
          let t = '0x'
          for (let n = 0, U = r(e); n < U; ++n)
            t += e.slice(2 * (U - n), 2 * (U - n + 1))
          return t
        },
        pad: d,
        padRight: i,
        fromAscii: e => {
          let t = '0x'
          for (let n = 0; n < e.length; ++n)
            t += ('00' + e.charCodeAt(n).toString(16)).slice(-2)
          return t
        },
        toAscii: e => {
          let t = ''
          for (let n = 2; n < e.length; n += 2)
            t += String.fromCharCode(parseInt(e.slice(n, n + 2), 16))
          return t
        },
        fromString: e => {
          const t = e => {
            const t = e.toString(16)
            return t.length < 2 ? '0' + t : t
          }
          let n = '0x'
          for (let U = 0; U != e.length; U++) {
            let r = e.charCodeAt(U)
            if (r < 128) n += t(r)
            else {
              if (r < 2048) n += t((r >> 6) | 192)
              else {
                if (r > 55295 && r < 56320) {
                  if (++U == e.length) return null
                  let d = e.charCodeAt(U)
                  if (d < 56320 || d > 57343) return null
                  ;(n += t(
                    ((r = 65536 + ((1023 & r) << 10) + (1023 & d)) >> 18) | 240
                  )),
                    (n += t(((r >> 12) & 63) | 128))
                } else n += t((r >> 12) | 224)
                n += t(((r >> 6) & 63) | 128)
              }
              n += t((63 & r) | 128)
            }
          }
          return n
        },
        toString: e => {
          let t = '',
            n = 0,
            d = r(e)
          for (; n < d; ) {
            let r = U(e, n++)
            if (r > 127) {
              if (r > 191 && r < 224) {
                if (n >= d) return null
                r = ((31 & r) << 6) | (63 & U(e, n))
              } else if (r > 223 && r < 240) {
                if (n + 1 >= d) return null
                r = ((15 & r) << 12) | ((63 & U(e, n)) << 6) | (63 & U(e, ++n))
              } else {
                if (!(r > 239 && r < 248)) return null
                if (n + 2 >= d) return null
                r =
                  ((7 & r) << 18) |
                  ((63 & U(e, n)) << 12) |
                  ((63 & U(e, ++n)) << 6) |
                  (63 & U(e, ++n))
              }
              ++n
            }
            if (r <= 65535) t += String.fromCharCode(r)
            else {
              if (!(r <= 1114111)) return null
              ;(r -= 65536),
                (t += String.fromCharCode((r >> 10) | 55296)),
                (t += String.fromCharCode((1023 & r) | 56320))
            }
          }
          return t
        },
        fromNumber: e => {
          let t = e.toString(16)
          return t.length % 2 == 0 ? '0x' + t : '0x0' + t
        },
        toNumber: e => parseInt(e.slice(2), 16),
        fromNat: e =>
          '0x0' === e ? '0x' : e.length % 2 == 0 ? e : '0x0' + e.slice(2),
        toNat: e => ('0' === e[2] ? '0x' + e.slice(3) : e),
        fromArray: l,
        toArray: F,
        fromUint8Array: e => l([].slice.call(e, 0)),
        toUint8Array: e => new Uint8Array(F(e)),
      }
    },
    function(e, t) {
      function n(e, t) {
        if (!e) throw new Error(t || 'Assertion failed')
      }
      ;(e.exports = n),
        (n.equal = function(e, t, n) {
          if (e != t)
            throw new Error(n || 'Assertion failed: ' + e + ' != ' + t)
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(6),
        r = n(0)
      function d(e, t) {
        return (
          55296 == (64512 & e.charCodeAt(t)) &&
          !(t < 0 || t + 1 >= e.length) &&
          56320 == (64512 & e.charCodeAt(t + 1))
        )
      }
      function i(e) {
        return (
          ((e >>> 24) |
            ((e >>> 8) & 65280) |
            ((e << 8) & 16711680) |
            ((255 & e) << 24)) >>>
          0
        )
      }
      function F(e) {
        return 1 === e.length ? '0' + e : e
      }
      function l(e) {
        return 7 === e.length
          ? '0' + e
          : 6 === e.length
          ? '00' + e
          : 5 === e.length
          ? '000' + e
          : 4 === e.length
          ? '0000' + e
          : 3 === e.length
          ? '00000' + e
          : 2 === e.length
          ? '000000' + e
          : 1 === e.length
          ? '0000000' + e
          : e
      }
      ;(t.inherits = r),
        (t.toArray = function(e, t) {
          if (Array.isArray(e)) return e.slice()
          if (!e) return []
          var n = []
          if ('string' == typeof e)
            if (t) {
              if ('hex' === t)
                for (
                  (e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 &&
                    (e = '0' + e),
                    r = 0;
                  r < e.length;
                  r += 2
                )
                  n.push(parseInt(e[r] + e[r + 1], 16))
            } else
              for (var U = 0, r = 0; r < e.length; r++) {
                var i = e.charCodeAt(r)
                i < 128
                  ? (n[U++] = i)
                  : i < 2048
                  ? ((n[U++] = (i >> 6) | 192), (n[U++] = (63 & i) | 128))
                  : d(e, r)
                  ? ((i =
                      65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r))),
                    (n[U++] = (i >> 18) | 240),
                    (n[U++] = ((i >> 12) & 63) | 128),
                    (n[U++] = ((i >> 6) & 63) | 128),
                    (n[U++] = (63 & i) | 128))
                  : ((n[U++] = (i >> 12) | 224),
                    (n[U++] = ((i >> 6) & 63) | 128),
                    (n[U++] = (63 & i) | 128))
              }
          else for (r = 0; r < e.length; r++) n[r] = 0 | e[r]
          return n
        }),
        (t.toHex = function(e) {
          for (var t = '', n = 0; n < e.length; n++) t += F(e[n].toString(16))
          return t
        }),
        (t.htonl = i),
        (t.toHex32 = function(e, t) {
          for (var n = '', U = 0; U < e.length; U++) {
            var r = e[U]
            'little' === t && (r = i(r)), (n += l(r.toString(16)))
          }
          return n
        }),
        (t.zero2 = F),
        (t.zero8 = l),
        (t.join32 = function(e, t, n, r) {
          var d = n - t
          U(d % 4 == 0)
          for (
            var i = new Array(d / 4), F = 0, l = t;
            F < i.length;
            F++, l += 4
          ) {
            var a
            ;(a =
              'big' === r
                ? (e[l] << 24) | (e[l + 1] << 16) | (e[l + 2] << 8) | e[l + 3]
                : (e[l + 3] << 24) | (e[l + 2] << 16) | (e[l + 1] << 8) | e[l]),
              (i[F] = a >>> 0)
          }
          return i
        }),
        (t.split32 = function(e, t) {
          for (
            var n = new Array(4 * e.length), U = 0, r = 0;
            U < e.length;
            U++, r += 4
          ) {
            var d = e[U]
            'big' === t
              ? ((n[r] = d >>> 24),
                (n[r + 1] = (d >>> 16) & 255),
                (n[r + 2] = (d >>> 8) & 255),
                (n[r + 3] = 255 & d))
              : ((n[r + 3] = d >>> 24),
                (n[r + 2] = (d >>> 16) & 255),
                (n[r + 1] = (d >>> 8) & 255),
                (n[r] = 255 & d))
          }
          return n
        }),
        (t.rotr32 = function(e, t) {
          return (e >>> t) | (e << (32 - t))
        }),
        (t.rotl32 = function(e, t) {
          return (e << t) | (e >>> (32 - t))
        }),
        (t.sum32 = function(e, t) {
          return (e + t) >>> 0
        }),
        (t.sum32_3 = function(e, t, n) {
          return (e + t + n) >>> 0
        }),
        (t.sum32_4 = function(e, t, n, U) {
          return (e + t + n + U) >>> 0
        }),
        (t.sum32_5 = function(e, t, n, U, r) {
          return (e + t + n + U + r) >>> 0
        }),
        (t.sum64 = function(e, t, n, U) {
          var r = e[t],
            d = (U + e[t + 1]) >>> 0,
            i = (d < U ? 1 : 0) + n + r
          ;(e[t] = i >>> 0), (e[t + 1] = d)
        }),
        (t.sum64_hi = function(e, t, n, U) {
          return (((t + U) >>> 0 < t ? 1 : 0) + e + n) >>> 0
        }),
        (t.sum64_lo = function(e, t, n, U) {
          return (t + U) >>> 0
        }),
        (t.sum64_4_hi = function(e, t, n, U, r, d, i, F) {
          var l = 0,
            a = t
          return (
            (l += (a = (a + U) >>> 0) < t ? 1 : 0),
            (l += (a = (a + d) >>> 0) < d ? 1 : 0),
            (e + n + r + i + (l += (a = (a + F) >>> 0) < F ? 1 : 0)) >>> 0
          )
        }),
        (t.sum64_4_lo = function(e, t, n, U, r, d, i, F) {
          return (t + U + d + F) >>> 0
        }),
        (t.sum64_5_hi = function(e, t, n, U, r, d, i, F, l, a) {
          var Q = 0,
            o = t
          return (
            (Q += (o = (o + U) >>> 0) < t ? 1 : 0),
            (Q += (o = (o + d) >>> 0) < d ? 1 : 0),
            (Q += (o = (o + F) >>> 0) < F ? 1 : 0),
            (e + n + r + i + l + (Q += (o = (o + a) >>> 0) < a ? 1 : 0)) >>> 0
          )
        }),
        (t.sum64_5_lo = function(e, t, n, U, r, d, i, F, l, a) {
          return (t + U + d + F + a) >>> 0
        }),
        (t.rotr64_hi = function(e, t, n) {
          return ((t << (32 - n)) | (e >>> n)) >>> 0
        }),
        (t.rotr64_lo = function(e, t, n) {
          return ((e << (32 - n)) | (t >>> n)) >>> 0
        }),
        (t.shr64_hi = function(e, t, n) {
          return e >>> n
        }),
        (t.shr64_lo = function(e, t, n) {
          return ((e << (32 - n)) | (t >>> n)) >>> 0
        })
    },
    function(e, t) {
      var n
      n = (function() {
        return this
      })()
      try {
        n = n || new Function('return this')()
      } catch (e) {
        'object' == typeof window && (n = window)
      }
      e.exports = n
    },
    function(e, t) {
      var n,
        U,
        r = (e.exports = {})
      function d() {
        throw new Error('setTimeout has not been defined')
      }
      function i() {
        throw new Error('clearTimeout has not been defined')
      }
      function F(e) {
        if (n === setTimeout) return setTimeout(e, 0)
        if ((n === d || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0)
        try {
          return n(e, 0)
        } catch (t) {
          try {
            return n.call(null, e, 0)
          } catch (t) {
            return n.call(this, e, 0)
          }
        }
      }
      !(function() {
        try {
          n = 'function' == typeof setTimeout ? setTimeout : d
        } catch (e) {
          n = d
        }
        try {
          U = 'function' == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
          U = i
        }
      })()
      var l,
        a = [],
        Q = !1,
        o = -1
      function h() {
        Q &&
          l &&
          ((Q = !1), l.length ? (a = l.concat(a)) : (o = -1), a.length && c())
      }
      function c() {
        if (!Q) {
          var e = F(h)
          Q = !0
          for (var t = a.length; t; ) {
            for (l = a, a = []; ++o < t; ) l && l[o].run()
            ;(o = -1), (t = a.length)
          }
          ;(l = null),
            (Q = !1),
            (function(e) {
              if (U === clearTimeout) return clearTimeout(e)
              if ((U === i || !U) && clearTimeout)
                return (U = clearTimeout), clearTimeout(e)
              try {
                U(e)
              } catch (t) {
                try {
                  return U.call(null, e)
                } catch (t) {
                  return U.call(this, e)
                }
              }
            })(e)
        }
      }
      function B(e, t) {
        ;(this.fun = e), (this.array = t)
      }
      function s() {}
      ;(r.nextTick = function(e) {
        var t = new Array(arguments.length - 1)
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        a.push(new B(e, t)), 1 !== a.length || Q || F(c)
      }),
        (B.prototype.run = function() {
          this.fun.apply(null, this.array)
        }),
        (r.title = 'browser'),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ''),
        (r.versions = {}),
        (r.on = s),
        (r.addListener = s),
        (r.once = s),
        (r.off = s),
        (r.removeListener = s),
        (r.removeAllListeners = s),
        (r.emit = s),
        (r.prependListener = s),
        (r.prependOnceListener = s),
        (r.listeners = function(e) {
          return []
        }),
        (r.binding = function(e) {
          throw new Error('process.binding is not supported')
        }),
        (r.cwd = function() {
          return '/'
        }),
        (r.chdir = function(e) {
          throw new Error('process.chdir is not supported')
        }),
        (r.umask = function() {
          return 0
        })
    },
    function(e, t, n) {
      var U = n(1).Buffer,
        r = n(28).Transform,
        d = n(32).StringDecoder
      function i(e) {
        r.call(this),
          (this.hashMode = 'string' == typeof e),
          this.hashMode
            ? (this[e] = this._finalOrDigest)
            : (this.final = this._finalOrDigest),
          this._final && ((this.__final = this._final), (this._final = null)),
          (this._decoder = null),
          (this._encoding = null)
      }
      n(0)(i, r),
        (i.prototype.update = function(e, t, n) {
          'string' == typeof e && (e = U.from(e, t))
          var r = this._update(e)
          return this.hashMode ? this : (n && (r = this._toString(r, n)), r)
        }),
        (i.prototype.setAutoPadding = function() {}),
        (i.prototype.getAuthTag = function() {
          throw new Error('trying to get auth tag in unsupported state')
        }),
        (i.prototype.setAuthTag = function() {
          throw new Error('trying to set auth tag in unsupported state')
        }),
        (i.prototype.setAAD = function() {
          throw new Error('trying to set aad in unsupported state')
        }),
        (i.prototype._transform = function(e, t, n) {
          var U
          try {
            this.hashMode ? this._update(e) : this.push(this._update(e))
          } catch (e) {
            U = e
          } finally {
            n(U)
          }
        }),
        (i.prototype._flush = function(e) {
          var t
          try {
            this.push(this.__final())
          } catch (e) {
            t = e
          }
          e(t)
        }),
        (i.prototype._finalOrDigest = function(e) {
          var t = this.__final() || U.alloc(0)
          return e && (t = this._toString(t, e, !0)), t
        }),
        (i.prototype._toString = function(e, t, n) {
          if (
            (this._decoder ||
              ((this._decoder = new d(t)), (this._encoding = t)),
            this._encoding !== t)
          )
            throw new Error("can't switch encodings")
          var U = this._decoder.write(e)
          return n && (U += this._decoder.end()), U
        }),
        (e.exports = i)
    },
    function(e, t) {
      e.exports = {
        encode: e => {
          const t = e =>
              (e => (e.length % 2 == 0 ? e : '0' + e))(e.toString(16)),
            n = (e, n) =>
              e < 56 ? t(n + e) : t(n + t(e).length / 2 + 55) + t(e),
            U = e => {
              if ('string' == typeof e) {
                const t = e.slice(2)
                return (
                  (2 != t.length || t >= '80' ? n(t.length / 2, 128) : '') + t
                )
              }
              {
                const t = e.map(U).join('')
                return n(t.length / 2, 192) + t
              }
            }
          return '0x' + U(e)
        },
        decode: e => {
          let t = 2
          const n = () => {
              if (t >= e.length) throw ''
              const n = e.slice(t, t + 2)
              return n < '80' ? ((t += 2), '0x' + n) : n < 'c0' ? r() : d()
            },
            U = () => {
              const n = parseInt(e.slice(t, (t += 2)), 16) % 64
              return n < 56 ? n : parseInt(e.slice(t, (t += 2 * (n - 55))), 16)
            },
            r = () => {
              const n = U()
              return '0x' + e.slice(t, (t += 2 * n))
            },
            d = () => {
              const e = 2 * U() + t
              let r = []
              for (; t < e; ) r.push(n())
              return r
            }
          try {
            return n()
          } catch (e) {
            return []
          }
        },
      }
    },
    function(e, t, n) {
      'use strict'
      var U = n(21),
        r =
          Object.keys ||
          function(e) {
            var t = []
            for (var n in e) t.push(n)
            return t
          }
      e.exports = o
      var d = n(16)
      d.inherits = n(0)
      var i = n(44),
        F = n(31)
      d.inherits(o, i)
      for (var l = r(F.prototype), a = 0; a < l.length; a++) {
        var Q = l[a]
        o.prototype[Q] || (o.prototype[Q] = F.prototype[Q])
      }
      function o(e) {
        if (!(this instanceof o)) return new o(e)
        i.call(this, e),
          F.call(this, e),
          e && !1 === e.readable && (this.readable = !1),
          e && !1 === e.writable && (this.writable = !1),
          (this.allowHalfOpen = !0),
          e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
          this.once('end', h)
      }
      function h() {
        this.allowHalfOpen || this._writableState.ended || U.nextTick(c, this)
      }
      function c(e) {
        e.end()
      }
      Object.defineProperty(o.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function() {
          return this._writableState.highWaterMark
        },
      }),
        Object.defineProperty(o.prototype, 'destroyed', {
          get: function() {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            )
          },
          set: function(e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e))
          },
        }),
        (o.prototype._destroy = function(e, t) {
          this.push(null), this.end(), U.nextTick(t, e)
        })
    },
    function(e, t, n) {
      'use strict'
      ;(function(t, U) {
        var r = n(1).Buffer,
          d = t.crypto || t.msCrypto
        d && d.getRandomValues
          ? (e.exports = function(e, n) {
              if (e > 65536) throw new Error('requested too many random bytes')
              var i = new t.Uint8Array(e)
              e > 0 && d.getRandomValues(i)
              var F = r.from(i.buffer)
              return 'function' == typeof n
                ? U.nextTick(function() {
                    n(null, F)
                  })
                : F
            })
          : (e.exports = function() {
              throw new Error(
                'Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11'
              )
            })
      }.call(this, n(8), n(9)))
    },
    function(e, t, n) {
      var U = n(1).Buffer
      function r(e, t) {
        ;(this._block = U.alloc(e)),
          (this._finalSize = t),
          (this._blockSize = e),
          (this._len = 0)
      }
      ;(r.prototype.update = function(e, t) {
        'string' == typeof e && ((t = t || 'utf8'), (e = U.from(e, t)))
        for (
          var n = this._block,
            r = this._blockSize,
            d = e.length,
            i = this._len,
            F = 0;
          F < d;

        ) {
          for (var l = i % r, a = Math.min(d - F, r - l), Q = 0; Q < a; Q++)
            n[l + Q] = e[F + Q]
          ;(F += a), (i += a) % r == 0 && this._update(n)
        }
        return (this._len += d), this
      }),
        (r.prototype.digest = function(e) {
          var t = this._len % this._blockSize
          ;(this._block[t] = 128),
            this._block.fill(0, t + 1),
            t >= this._finalSize &&
              (this._update(this._block), this._block.fill(0))
          var n = 8 * this._len
          if (n <= 4294967295) this._block.writeUInt32BE(n, this._blockSize - 4)
          else {
            var U = (4294967295 & n) >>> 0,
              r = (n - U) / 4294967296
            this._block.writeUInt32BE(r, this._blockSize - 8),
              this._block.writeUInt32BE(U, this._blockSize - 4)
          }
          this._update(this._block)
          var d = this._hash()
          return e ? d.toString(e) : d
        }),
        (r.prototype._update = function() {
          throw new Error('_update must be implemented by subclass')
        }),
        (e.exports = r)
    },
    function(e, t, n) {
      'use strict'
      var U = n(0),
        r = n(27),
        d = n(33),
        i = n(34),
        F = n(10)
      function l(e) {
        F.call(this, 'digest'), (this._hash = e)
      }
      U(l, F),
        (l.prototype._update = function(e) {
          this._hash.update(e)
        }),
        (l.prototype._final = function() {
          return this._hash.digest()
        }),
        (e.exports = function(e) {
          return 'md5' === (e = e.toLowerCase())
            ? new r()
            : 'rmd160' === e || 'ripemd160' === e
            ? new d()
            : new l(i(e))
        })
    },
    function(e, t, n) {
      ;(function(e) {
        function n(e) {
          return Object.prototype.toString.call(e)
        }
        ;(t.isArray = function(e) {
          return Array.isArray ? Array.isArray(e) : '[object Array]' === n(e)
        }),
          (t.isBoolean = function(e) {
            return 'boolean' == typeof e
          }),
          (t.isNull = function(e) {
            return null === e
          }),
          (t.isNullOrUndefined = function(e) {
            return null == e
          }),
          (t.isNumber = function(e) {
            return 'number' == typeof e
          }),
          (t.isString = function(e) {
            return 'string' == typeof e
          }),
          (t.isSymbol = function(e) {
            return 'symbol' == typeof e
          }),
          (t.isUndefined = function(e) {
            return void 0 === e
          }),
          (t.isRegExp = function(e) {
            return '[object RegExp]' === n(e)
          }),
          (t.isObject = function(e) {
            return 'object' == typeof e && null !== e
          }),
          (t.isDate = function(e) {
            return '[object Date]' === n(e)
          }),
          (t.isError = function(e) {
            return '[object Error]' === n(e) || e instanceof Error
          }),
          (t.isFunction = function(e) {
            return 'function' == typeof e
          }),
          (t.isPrimitive = function(e) {
            return (
              null === e ||
              'boolean' == typeof e ||
              'number' == typeof e ||
              'string' == typeof e ||
              'symbol' == typeof e ||
              void 0 === e
            )
          }),
          (t.isBuffer = e.isBuffer)
      }.call(this, n(3).Buffer))
    },
    function(e, t, n) {
      ;(function(t) {
        e.exports = function(e, n) {
          for (
            var U = Math.min(e.length, n.length), r = new t(U), d = 0;
            d < U;
            ++d
          )
            r[d] = e[d] ^ n[d]
          return r
        }
      }.call(this, n(3).Buffer))
    },
    function(e, t, n) {
      'use strict'
      var U = n(7),
        r = n(6)
      function d() {
        ;(this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = 'big'),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32)
      }
      ;(t.BlockHash = d),
        (d.prototype.update = function(e, t) {
          if (
            ((e = U.toArray(e, t)),
            this.pending
              ? (this.pending = this.pending.concat(e))
              : (this.pending = e),
            (this.pendingTotal += e.length),
            this.pending.length >= this._delta8)
          ) {
            var n = (e = this.pending).length % this._delta8
            ;(this.pending = e.slice(e.length - n, e.length)),
              0 === this.pending.length && (this.pending = null),
              (e = U.join32(e, 0, e.length - n, this.endian))
            for (var r = 0; r < e.length; r += this._delta32)
              this._update(e, r, r + this._delta32)
          }
          return this
        }),
        (d.prototype.digest = function(e) {
          return (
            this.update(this._pad()), r(null === this.pending), this._digest(e)
          )
        }),
        (d.prototype._pad = function() {
          var e = this.pendingTotal,
            t = this._delta8,
            n = t - ((e + this.padLength) % t),
            U = new Array(n + this.padLength)
          U[0] = 128
          for (var r = 1; r < n; r++) U[r] = 0
          if (((e <<= 3), 'big' === this.endian)) {
            for (var d = 8; d < this.padLength; d++) U[r++] = 0
            ;(U[r++] = 0),
              (U[r++] = 0),
              (U[r++] = 0),
              (U[r++] = 0),
              (U[r++] = (e >>> 24) & 255),
              (U[r++] = (e >>> 16) & 255),
              (U[r++] = (e >>> 8) & 255),
              (U[r++] = 255 & e)
          } else
            for (
              U[r++] = 255 & e,
                U[r++] = (e >>> 8) & 255,
                U[r++] = (e >>> 16) & 255,
                U[r++] = (e >>> 24) & 255,
                U[r++] = 0,
                U[r++] = 0,
                U[r++] = 0,
                U[r++] = 0,
                d = 8;
              d < this.padLength;
              d++
            )
              U[r++] = 0
          return U
        })
    },
    function(e, t, n) {
      var U = t
      ;(U.bignum = n(2)),
        (U.define = n(147).define),
        (U.base = n(20)),
        (U.constants = n(70)),
        (U.decoders = n(153)),
        (U.encoders = n(155))
    },
    function(e, t, n) {
      var U = t
      ;(U.Reporter = n(150).Reporter),
        (U.DecoderBuffer = n(69).DecoderBuffer),
        (U.EncoderBuffer = n(69).EncoderBuffer),
        (U.Node = n(151))
    },
    function(e, t, n) {
      'use strict'
      ;(function(t) {
        !t.version ||
        0 === t.version.indexOf('v0.') ||
        (0 === t.version.indexOf('v1.') && 0 !== t.version.indexOf('v1.8.'))
          ? (e.exports = {
              nextTick: function(e, n, U, r) {
                if ('function' != typeof e)
                  throw new TypeError('"callback" argument must be a function')
                var d,
                  i,
                  F = arguments.length
                switch (F) {
                  case 0:
                  case 1:
                    return t.nextTick(e)
                  case 2:
                    return t.nextTick(function() {
                      e.call(null, n)
                    })
                  case 3:
                    return t.nextTick(function() {
                      e.call(null, n, U)
                    })
                  case 4:
                    return t.nextTick(function() {
                      e.call(null, n, U, r)
                    })
                  default:
                    for (d = new Array(F - 1), i = 0; i < d.length; )
                      d[i++] = arguments[i]
                    return t.nextTick(function() {
                      e.apply(null, d)
                    })
                }
              },
            })
          : (e.exports = t)
      }.call(this, n(9)))
    },
    function(e, t, n) {
      var U = n(1).Buffer
      function r(e) {
        U.isBuffer(e) || (e = U.from(e))
        for (var t = (e.length / 4) | 0, n = new Array(t), r = 0; r < t; r++)
          n[r] = e.readUInt32BE(4 * r)
        return n
      }
      function d(e) {
        for (; 0 < e.length; e++) e[0] = 0
      }
      function i(e, t, n, U, r) {
        for (
          var d,
            i,
            F,
            l,
            a = n[0],
            Q = n[1],
            o = n[2],
            h = n[3],
            c = e[0] ^ t[0],
            B = e[1] ^ t[1],
            s = e[2] ^ t[2],
            f = e[3] ^ t[3],
            R = 4,
            V = 1;
          V < r;
          V++
        )
          (d =
            a[c >>> 24] ^
            Q[(B >>> 16) & 255] ^
            o[(s >>> 8) & 255] ^
            h[255 & f] ^
            t[R++]),
            (i =
              a[B >>> 24] ^
              Q[(s >>> 16) & 255] ^
              o[(f >>> 8) & 255] ^
              h[255 & c] ^
              t[R++]),
            (F =
              a[s >>> 24] ^
              Q[(f >>> 16) & 255] ^
              o[(c >>> 8) & 255] ^
              h[255 & B] ^
              t[R++]),
            (l =
              a[f >>> 24] ^
              Q[(c >>> 16) & 255] ^
              o[(B >>> 8) & 255] ^
              h[255 & s] ^
              t[R++]),
            (c = d),
            (B = i),
            (s = F),
            (f = l)
        return (
          (d =
            ((U[c >>> 24] << 24) |
              (U[(B >>> 16) & 255] << 16) |
              (U[(s >>> 8) & 255] << 8) |
              U[255 & f]) ^
            t[R++]),
          (i =
            ((U[B >>> 24] << 24) |
              (U[(s >>> 16) & 255] << 16) |
              (U[(f >>> 8) & 255] << 8) |
              U[255 & c]) ^
            t[R++]),
          (F =
            ((U[s >>> 24] << 24) |
              (U[(f >>> 16) & 255] << 16) |
              (U[(c >>> 8) & 255] << 8) |
              U[255 & B]) ^
            t[R++]),
          (l =
            ((U[f >>> 24] << 24) |
              (U[(c >>> 16) & 255] << 16) |
              (U[(B >>> 8) & 255] << 8) |
              U[255 & s]) ^
            t[R++]),
          [(d >>>= 0), (i >>>= 0), (F >>>= 0), (l >>>= 0)]
        )
      }
      var F = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        l = (function() {
          for (var e = new Array(256), t = 0; t < 256; t++)
            e[t] = t < 128 ? t << 1 : (t << 1) ^ 283
          for (
            var n = [],
              U = [],
              r = [[], [], [], []],
              d = [[], [], [], []],
              i = 0,
              F = 0,
              l = 0;
            l < 256;
            ++l
          ) {
            var a = F ^ (F << 1) ^ (F << 2) ^ (F << 3) ^ (F << 4)
            ;(a = (a >>> 8) ^ (255 & a) ^ 99), (n[i] = a), (U[a] = i)
            var Q = e[i],
              o = e[Q],
              h = e[o],
              c = (257 * e[a]) ^ (16843008 * a)
            ;(r[0][i] = (c << 24) | (c >>> 8)),
              (r[1][i] = (c << 16) | (c >>> 16)),
              (r[2][i] = (c << 8) | (c >>> 24)),
              (r[3][i] = c),
              (c = (16843009 * h) ^ (65537 * o) ^ (257 * Q) ^ (16843008 * i)),
              (d[0][a] = (c << 24) | (c >>> 8)),
              (d[1][a] = (c << 16) | (c >>> 16)),
              (d[2][a] = (c << 8) | (c >>> 24)),
              (d[3][a] = c),
              0 === i ? (i = F = 1) : ((i = Q ^ e[e[e[h ^ Q]]]), (F ^= e[e[F]]))
          }
          return { SBOX: n, INV_SBOX: U, SUB_MIX: r, INV_SUB_MIX: d }
        })()
      function a(e) {
        ;(this._key = r(e)), this._reset()
      }
      ;(a.blockSize = 16),
        (a.keySize = 32),
        (a.prototype.blockSize = a.blockSize),
        (a.prototype.keySize = a.keySize),
        (a.prototype._reset = function() {
          for (
            var e = this._key,
              t = e.length,
              n = t + 6,
              U = 4 * (n + 1),
              r = [],
              d = 0;
            d < t;
            d++
          )
            r[d] = e[d]
          for (d = t; d < U; d++) {
            var i = r[d - 1]
            d % t == 0
              ? ((i = (i << 8) | (i >>> 24)),
                (i =
                  (l.SBOX[i >>> 24] << 24) |
                  (l.SBOX[(i >>> 16) & 255] << 16) |
                  (l.SBOX[(i >>> 8) & 255] << 8) |
                  l.SBOX[255 & i]),
                (i ^= F[(d / t) | 0] << 24))
              : t > 6 &&
                d % t == 4 &&
                (i =
                  (l.SBOX[i >>> 24] << 24) |
                  (l.SBOX[(i >>> 16) & 255] << 16) |
                  (l.SBOX[(i >>> 8) & 255] << 8) |
                  l.SBOX[255 & i]),
              (r[d] = r[d - t] ^ i)
          }
          for (var a = [], Q = 0; Q < U; Q++) {
            var o = U - Q,
              h = r[o - (Q % 4 ? 0 : 4)]
            a[Q] =
              Q < 4 || o <= 4
                ? h
                : l.INV_SUB_MIX[0][l.SBOX[h >>> 24]] ^
                  l.INV_SUB_MIX[1][l.SBOX[(h >>> 16) & 255]] ^
                  l.INV_SUB_MIX[2][l.SBOX[(h >>> 8) & 255]] ^
                  l.INV_SUB_MIX[3][l.SBOX[255 & h]]
          }
          ;(this._nRounds = n),
            (this._keySchedule = r),
            (this._invKeySchedule = a)
        }),
        (a.prototype.encryptBlockRaw = function(e) {
          return i(
            (e = r(e)),
            this._keySchedule,
            l.SUB_MIX,
            l.SBOX,
            this._nRounds
          )
        }),
        (a.prototype.encryptBlock = function(e) {
          var t = this.encryptBlockRaw(e),
            n = U.allocUnsafe(16)
          return (
            n.writeUInt32BE(t[0], 0),
            n.writeUInt32BE(t[1], 4),
            n.writeUInt32BE(t[2], 8),
            n.writeUInt32BE(t[3], 12),
            n
          )
        }),
        (a.prototype.decryptBlock = function(e) {
          var t = (e = r(e))[1]
          ;(e[1] = e[3]), (e[3] = t)
          var n = i(
              e,
              this._invKeySchedule,
              l.INV_SUB_MIX,
              l.INV_SBOX,
              this._nRounds
            ),
            d = U.allocUnsafe(16)
          return (
            d.writeUInt32BE(n[0], 0),
            d.writeUInt32BE(n[3], 4),
            d.writeUInt32BE(n[2], 8),
            d.writeUInt32BE(n[1], 12),
            d
          )
        }),
        (a.prototype.scrub = function() {
          d(this._keySchedule), d(this._invKeySchedule), d(this._key)
        }),
        (e.exports.AES = a)
    },
    function(e, t, n) {
      var U = n(1).Buffer,
        r = n(27)
      e.exports = function(e, t, n, d) {
        if (
          (U.isBuffer(e) || (e = U.from(e, 'binary')),
          t && (U.isBuffer(t) || (t = U.from(t, 'binary')), 8 !== t.length))
        )
          throw new RangeError('salt should be Buffer with 8 byte length')
        for (
          var i = n / 8, F = U.alloc(i), l = U.alloc(d || 0), a = U.alloc(0);
          i > 0 || d > 0;

        ) {
          var Q = new r()
          Q.update(a), Q.update(e), t && Q.update(t), (a = Q.digest())
          var o = 0
          if (i > 0) {
            var h = F.length - i
            ;(o = Math.min(i, a.length)), a.copy(F, h, 0, o), (i -= o)
          }
          if (o < a.length && d > 0) {
            var c = l.length - d,
              B = Math.min(d, a.length - o)
            a.copy(l, c, o, o + B), (d -= B)
          }
        }
        return a.fill(0), { key: F, iv: l }
      }
    },
    function(e, t, n) {
      'use strict'
      var U = t
      ;(U.base = n(127)),
        (U.short = n(128)),
        (U.mont = n(129)),
        (U.edwards = n(130))
    },
    function(e, t, n) {
      ;(function(t) {
        var U = n(146),
          r = n(158),
          d = n(159),
          i = n(36),
          F = n(53)
        function l(e) {
          var n
          'object' != typeof e ||
            t.isBuffer(e) ||
            ((n = e.passphrase), (e = e.key)),
            'string' == typeof e && (e = new t(e))
          var l,
            a,
            Q = d(e, n),
            o = Q.tag,
            h = Q.data
          switch (o) {
            case 'CERTIFICATE':
              a = U.certificate.decode(h, 'der').tbsCertificate
                .subjectPublicKeyInfo
            case 'PUBLIC KEY':
              switch (
                (a || (a = U.PublicKey.decode(h, 'der')),
                (l = a.algorithm.algorithm.join('.')))
              ) {
                case '1.2.840.113549.1.1.1':
                  return U.RSAPublicKey.decode(a.subjectPublicKey.data, 'der')
                case '1.2.840.10045.2.1':
                  return (
                    (a.subjectPrivateKey = a.subjectPublicKey),
                    { type: 'ec', data: a }
                  )
                case '1.2.840.10040.4.1':
                  return (
                    (a.algorithm.params.pub_key = U.DSAparam.decode(
                      a.subjectPublicKey.data,
                      'der'
                    )),
                    { type: 'dsa', data: a.algorithm.params }
                  )
                default:
                  throw new Error('unknown key id ' + l)
              }
              throw new Error('unknown key type ' + o)
            case 'ENCRYPTED PRIVATE KEY':
              h = (function(e, n) {
                var U = e.algorithm.decrypt.kde.kdeparams.salt,
                  d = parseInt(
                    e.algorithm.decrypt.kde.kdeparams.iters.toString(),
                    10
                  ),
                  l = r[e.algorithm.decrypt.cipher.algo.join('.')],
                  a = e.algorithm.decrypt.cipher.iv,
                  Q = e.subjectPrivateKey,
                  o = parseInt(l.split('-')[1], 10) / 8,
                  h = F.pbkdf2Sync(n, U, d, o),
                  c = i.createDecipheriv(l, h, a),
                  B = []
                return B.push(c.update(Q)), B.push(c.final()), t.concat(B)
              })((h = U.EncryptedPrivateKey.decode(h, 'der')), n)
            case 'PRIVATE KEY':
              switch (
                (l = (a = U.PrivateKey.decode(
                  h,
                  'der'
                )).algorithm.algorithm.join('.'))
              ) {
                case '1.2.840.113549.1.1.1':
                  return U.RSAPrivateKey.decode(a.subjectPrivateKey, 'der')
                case '1.2.840.10045.2.1':
                  return {
                    curve: a.algorithm.curve,
                    privateKey: U.ECPrivateKey.decode(
                      a.subjectPrivateKey,
                      'der'
                    ).privateKey,
                  }
                case '1.2.840.10040.4.1':
                  return (
                    (a.algorithm.params.priv_key = U.DSAparam.decode(
                      a.subjectPrivateKey,
                      'der'
                    )),
                    { type: 'dsa', params: a.algorithm.params }
                  )
                default:
                  throw new Error('unknown key id ' + l)
              }
              throw new Error('unknown key type ' + o)
            case 'RSA PUBLIC KEY':
              return U.RSAPublicKey.decode(h, 'der')
            case 'RSA PRIVATE KEY':
              return U.RSAPrivateKey.decode(h, 'der')
            case 'DSA PRIVATE KEY':
              return { type: 'dsa', params: U.DSAPrivateKey.decode(h, 'der') }
            case 'EC PRIVATE KEY':
              return {
                curve: (h = U.ECPrivateKey.decode(h, 'der')).parameters.value,
                privateKey: h.privateKey,
              }
            default:
              throw new Error('unknown key type ' + o)
          }
        }
        ;(e.exports = l), (l.signature = U.signature)
      }.call(this, n(3).Buffer))
    },
    function(e, t) {
      const n = '0123456789abcdef'.split(''),
        U = [1, 256, 65536, 16777216],
        r = [0, 8, 16, 24],
        d = [
          1,
          0,
          32898,
          0,
          32906,
          2147483648,
          2147516416,
          2147483648,
          32907,
          0,
          2147483649,
          0,
          2147516545,
          2147483648,
          32777,
          2147483648,
          138,
          0,
          136,
          0,
          2147516425,
          0,
          2147483658,
          0,
          2147516555,
          0,
          139,
          2147483648,
          32905,
          2147483648,
          32771,
          2147483648,
          32770,
          2147483648,
          128,
          2147483648,
          32778,
          0,
          2147483658,
          2147483648,
          2147516545,
          2147483648,
          32896,
          2147483648,
          2147483649,
          0,
          2147516424,
          2147483648,
        ],
        i = e => {
          var t,
            n,
            U,
            r,
            i,
            F,
            l,
            a,
            Q,
            o,
            h,
            c,
            B,
            s,
            f,
            R,
            V,
            u,
            S,
            p,
            W,
            Z,
            J,
            b,
            N,
            g,
            m,
            E,
            I,
            k,
            C,
            T,
            y,
            v,
            D,
            w,
            M,
            G,
            A,
            Y,
            X,
            H,
            x,
            j,
            O,
            K,
            z,
            _,
            L,
            P,
            q,
            $,
            ee,
            te,
            ne,
            Ue,
            re,
            de,
            ie,
            Fe,
            le,
            ae,
            Qe
          for (U = 0; U < 48; U += 2)
            (r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
              (i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
              (F = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
              (l = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
              (a = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
              (Q = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
              (o = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
              (h = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
              (t =
                (c = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^
                ((F << 1) | (l >>> 31))),
              (n =
                (B = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^
                ((l << 1) | (F >>> 31))),
              (e[0] ^= t),
              (e[1] ^= n),
              (e[10] ^= t),
              (e[11] ^= n),
              (e[20] ^= t),
              (e[21] ^= n),
              (e[30] ^= t),
              (e[31] ^= n),
              (e[40] ^= t),
              (e[41] ^= n),
              (t = r ^ ((a << 1) | (Q >>> 31))),
              (n = i ^ ((Q << 1) | (a >>> 31))),
              (e[2] ^= t),
              (e[3] ^= n),
              (e[12] ^= t),
              (e[13] ^= n),
              (e[22] ^= t),
              (e[23] ^= n),
              (e[32] ^= t),
              (e[33] ^= n),
              (e[42] ^= t),
              (e[43] ^= n),
              (t = F ^ ((o << 1) | (h >>> 31))),
              (n = l ^ ((h << 1) | (o >>> 31))),
              (e[4] ^= t),
              (e[5] ^= n),
              (e[14] ^= t),
              (e[15] ^= n),
              (e[24] ^= t),
              (e[25] ^= n),
              (e[34] ^= t),
              (e[35] ^= n),
              (e[44] ^= t),
              (e[45] ^= n),
              (t = a ^ ((c << 1) | (B >>> 31))),
              (n = Q ^ ((B << 1) | (c >>> 31))),
              (e[6] ^= t),
              (e[7] ^= n),
              (e[16] ^= t),
              (e[17] ^= n),
              (e[26] ^= t),
              (e[27] ^= n),
              (e[36] ^= t),
              (e[37] ^= n),
              (e[46] ^= t),
              (e[47] ^= n),
              (t = o ^ ((r << 1) | (i >>> 31))),
              (n = h ^ ((i << 1) | (r >>> 31))),
              (e[8] ^= t),
              (e[9] ^= n),
              (e[18] ^= t),
              (e[19] ^= n),
              (e[28] ^= t),
              (e[29] ^= n),
              (e[38] ^= t),
              (e[39] ^= n),
              (e[48] ^= t),
              (e[49] ^= n),
              (s = e[0]),
              (f = e[1]),
              (K = (e[11] << 4) | (e[10] >>> 28)),
              (z = (e[10] << 4) | (e[11] >>> 28)),
              (E = (e[20] << 3) | (e[21] >>> 29)),
              (I = (e[21] << 3) | (e[20] >>> 29)),
              (Fe = (e[31] << 9) | (e[30] >>> 23)),
              (le = (e[30] << 9) | (e[31] >>> 23)),
              (H = (e[40] << 18) | (e[41] >>> 14)),
              (x = (e[41] << 18) | (e[40] >>> 14)),
              (v = (e[2] << 1) | (e[3] >>> 31)),
              (D = (e[3] << 1) | (e[2] >>> 31)),
              (R = (e[13] << 12) | (e[12] >>> 20)),
              (V = (e[12] << 12) | (e[13] >>> 20)),
              (_ = (e[22] << 10) | (e[23] >>> 22)),
              (L = (e[23] << 10) | (e[22] >>> 22)),
              (k = (e[33] << 13) | (e[32] >>> 19)),
              (C = (e[32] << 13) | (e[33] >>> 19)),
              (ae = (e[42] << 2) | (e[43] >>> 30)),
              (Qe = (e[43] << 2) | (e[42] >>> 30)),
              (te = (e[5] << 30) | (e[4] >>> 2)),
              (ne = (e[4] << 30) | (e[5] >>> 2)),
              (w = (e[14] << 6) | (e[15] >>> 26)),
              (M = (e[15] << 6) | (e[14] >>> 26)),
              (u = (e[25] << 11) | (e[24] >>> 21)),
              (S = (e[24] << 11) | (e[25] >>> 21)),
              (P = (e[34] << 15) | (e[35] >>> 17)),
              (q = (e[35] << 15) | (e[34] >>> 17)),
              (T = (e[45] << 29) | (e[44] >>> 3)),
              (y = (e[44] << 29) | (e[45] >>> 3)),
              (b = (e[6] << 28) | (e[7] >>> 4)),
              (N = (e[7] << 28) | (e[6] >>> 4)),
              (Ue = (e[17] << 23) | (e[16] >>> 9)),
              (re = (e[16] << 23) | (e[17] >>> 9)),
              (G = (e[26] << 25) | (e[27] >>> 7)),
              (A = (e[27] << 25) | (e[26] >>> 7)),
              (p = (e[36] << 21) | (e[37] >>> 11)),
              (W = (e[37] << 21) | (e[36] >>> 11)),
              ($ = (e[47] << 24) | (e[46] >>> 8)),
              (ee = (e[46] << 24) | (e[47] >>> 8)),
              (j = (e[8] << 27) | (e[9] >>> 5)),
              (O = (e[9] << 27) | (e[8] >>> 5)),
              (g = (e[18] << 20) | (e[19] >>> 12)),
              (m = (e[19] << 20) | (e[18] >>> 12)),
              (de = (e[29] << 7) | (e[28] >>> 25)),
              (ie = (e[28] << 7) | (e[29] >>> 25)),
              (Y = (e[38] << 8) | (e[39] >>> 24)),
              (X = (e[39] << 8) | (e[38] >>> 24)),
              (Z = (e[48] << 14) | (e[49] >>> 18)),
              (J = (e[49] << 14) | (e[48] >>> 18)),
              (e[0] = s ^ (~R & u)),
              (e[1] = f ^ (~V & S)),
              (e[10] = b ^ (~g & E)),
              (e[11] = N ^ (~m & I)),
              (e[20] = v ^ (~w & G)),
              (e[21] = D ^ (~M & A)),
              (e[30] = j ^ (~K & _)),
              (e[31] = O ^ (~z & L)),
              (e[40] = te ^ (~Ue & de)),
              (e[41] = ne ^ (~re & ie)),
              (e[2] = R ^ (~u & p)),
              (e[3] = V ^ (~S & W)),
              (e[12] = g ^ (~E & k)),
              (e[13] = m ^ (~I & C)),
              (e[22] = w ^ (~G & Y)),
              (e[23] = M ^ (~A & X)),
              (e[32] = K ^ (~_ & P)),
              (e[33] = z ^ (~L & q)),
              (e[42] = Ue ^ (~de & Fe)),
              (e[43] = re ^ (~ie & le)),
              (e[4] = u ^ (~p & Z)),
              (e[5] = S ^ (~W & J)),
              (e[14] = E ^ (~k & T)),
              (e[15] = I ^ (~C & y)),
              (e[24] = G ^ (~Y & H)),
              (e[25] = A ^ (~X & x)),
              (e[34] = _ ^ (~P & $)),
              (e[35] = L ^ (~q & ee)),
              (e[44] = de ^ (~Fe & ae)),
              (e[45] = ie ^ (~le & Qe)),
              (e[6] = p ^ (~Z & s)),
              (e[7] = W ^ (~J & f)),
              (e[16] = k ^ (~T & b)),
              (e[17] = C ^ (~y & N)),
              (e[26] = Y ^ (~H & v)),
              (e[27] = X ^ (~x & D)),
              (e[36] = P ^ (~$ & j)),
              (e[37] = q ^ (~ee & O)),
              (e[46] = Fe ^ (~ae & te)),
              (e[47] = le ^ (~Qe & ne)),
              (e[8] = Z ^ (~s & R)),
              (e[9] = J ^ (~f & V)),
              (e[18] = T ^ (~b & g)),
              (e[19] = y ^ (~N & m)),
              (e[28] = H ^ (~v & w)),
              (e[29] = x ^ (~D & M)),
              (e[38] = $ ^ (~j & K)),
              (e[39] = ee ^ (~O & z)),
              (e[48] = ae ^ (~te & Ue)),
              (e[49] = Qe ^ (~ne & re)),
              (e[0] ^= d[U]),
              (e[1] ^= d[U + 1])
        },
        F = e => t => {
          var d
          if ('0x' === t.slice(0, 2)) {
            d = []
            for (var F = 2, l = t.length; F < l; F += 2)
              d.push(parseInt(t.slice(F, F + 2), 16))
          } else d = t
          return ((e, t) => {
            for (
              var d,
                F = t.length,
                l = e.blocks,
                a = e.blockCount << 2,
                Q = e.blockCount,
                o = e.outputBlocks,
                h = e.s,
                c = 0;
              c < F;

            ) {
              if (e.reset)
                for (e.reset = !1, l[0] = e.block, f = 1; f < Q + 1; ++f)
                  l[f] = 0
              if ('string' != typeof t)
                for (f = e.start; c < F && f < a; ++c)
                  l[f >> 2] |= t[c] << r[3 & f++]
              else
                for (f = e.start; c < F && f < a; ++c)
                  (d = t.charCodeAt(c)) < 128
                    ? (l[f >> 2] |= d << r[3 & f++])
                    : d < 2048
                    ? ((l[f >> 2] |= (192 | (d >> 6)) << r[3 & f++]),
                      (l[f >> 2] |= (128 | (63 & d)) << r[3 & f++]))
                    : d < 55296 || d >= 57344
                    ? ((l[f >> 2] |= (224 | (d >> 12)) << r[3 & f++]),
                      (l[f >> 2] |= (128 | ((d >> 6) & 63)) << r[3 & f++]),
                      (l[f >> 2] |= (128 | (63 & d)) << r[3 & f++]))
                    : ((d =
                        65536 +
                        (((1023 & d) << 10) | (1023 & t.charCodeAt(++c)))),
                      (l[f >> 2] |= (240 | (d >> 18)) << r[3 & f++]),
                      (l[f >> 2] |= (128 | ((d >> 12) & 63)) << r[3 & f++]),
                      (l[f >> 2] |= (128 | ((d >> 6) & 63)) << r[3 & f++]),
                      (l[f >> 2] |= (128 | (63 & d)) << r[3 & f++]))
              if (((e.lastByteIndex = f), f >= a)) {
                for (e.start = f - a, e.block = l[Q], f = 0; f < Q; ++f)
                  h[f] ^= l[f]
                i(h), (e.reset = !0)
              } else e.start = f
            }
            if (
              ((l[(f = e.lastByteIndex) >> 2] |= U[3 & f]),
              e.lastByteIndex === a)
            )
              for (l[0] = l[Q], f = 1; f < Q + 1; ++f) l[f] = 0
            for (l[Q - 1] |= 2147483648, f = 0; f < Q; ++f) h[f] ^= l[f]
            i(h)
            for (var B, s = '', f = 0, R = 0; R < o; ) {
              for (f = 0; f < Q && R < o; ++f, ++R)
                (B = h[f]),
                  (s +=
                    n[(B >> 4) & 15] +
                    n[15 & B] +
                    n[(B >> 12) & 15] +
                    n[(B >> 8) & 15] +
                    n[(B >> 20) & 15] +
                    n[(B >> 16) & 15] +
                    n[(B >> 28) & 15] +
                    n[(B >> 24) & 15])
              R % Q == 0 && (i(h), (f = 0))
            }
            return '0x' + s
          })(
            (e => ({
              blocks: [],
              reset: !0,
              block: 0,
              start: 0,
              blockCount: (1600 - (e << 1)) >> 5,
              outputBlocks: e >> 5,
              s: (e => [].concat(e, e, e, e, e))([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
              ]),
            }))(e),
            d
          )
        }
      e.exports = {
        keccak256: F(256),
        keccak512: F(512),
        keccak256s: F(256),
        keccak512s: F(512),
      }
    },
    function(e, t, n) {
      'use strict'
      var U = n(0),
        r = n(43),
        d = n(1).Buffer,
        i = new Array(16)
      function F() {
        r.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878)
      }
      function l(e, t) {
        return (e << t) | (e >>> (32 - t))
      }
      function a(e, t, n, U, r, d, i) {
        return (l((e + ((t & n) | (~t & U)) + r + d) | 0, i) + t) | 0
      }
      function Q(e, t, n, U, r, d, i) {
        return (l((e + ((t & U) | (n & ~U)) + r + d) | 0, i) + t) | 0
      }
      function o(e, t, n, U, r, d, i) {
        return (l((e + (t ^ n ^ U) + r + d) | 0, i) + t) | 0
      }
      function h(e, t, n, U, r, d, i) {
        return (l((e + (n ^ (t | ~U)) + r + d) | 0, i) + t) | 0
      }
      U(F, r),
        (F.prototype._update = function() {
          for (var e = i, t = 0; t < 16; ++t)
            e[t] = this._block.readInt32LE(4 * t)
          var n = this._a,
            U = this._b,
            r = this._c,
            d = this._d
          ;(n = a(n, U, r, d, e[0], 3614090360, 7)),
            (d = a(d, n, U, r, e[1], 3905402710, 12)),
            (r = a(r, d, n, U, e[2], 606105819, 17)),
            (U = a(U, r, d, n, e[3], 3250441966, 22)),
            (n = a(n, U, r, d, e[4], 4118548399, 7)),
            (d = a(d, n, U, r, e[5], 1200080426, 12)),
            (r = a(r, d, n, U, e[6], 2821735955, 17)),
            (U = a(U, r, d, n, e[7], 4249261313, 22)),
            (n = a(n, U, r, d, e[8], 1770035416, 7)),
            (d = a(d, n, U, r, e[9], 2336552879, 12)),
            (r = a(r, d, n, U, e[10], 4294925233, 17)),
            (U = a(U, r, d, n, e[11], 2304563134, 22)),
            (n = a(n, U, r, d, e[12], 1804603682, 7)),
            (d = a(d, n, U, r, e[13], 4254626195, 12)),
            (r = a(r, d, n, U, e[14], 2792965006, 17)),
            (n = Q(
              n,
              (U = a(U, r, d, n, e[15], 1236535329, 22)),
              r,
              d,
              e[1],
              4129170786,
              5
            )),
            (d = Q(d, n, U, r, e[6], 3225465664, 9)),
            (r = Q(r, d, n, U, e[11], 643717713, 14)),
            (U = Q(U, r, d, n, e[0], 3921069994, 20)),
            (n = Q(n, U, r, d, e[5], 3593408605, 5)),
            (d = Q(d, n, U, r, e[10], 38016083, 9)),
            (r = Q(r, d, n, U, e[15], 3634488961, 14)),
            (U = Q(U, r, d, n, e[4], 3889429448, 20)),
            (n = Q(n, U, r, d, e[9], 568446438, 5)),
            (d = Q(d, n, U, r, e[14], 3275163606, 9)),
            (r = Q(r, d, n, U, e[3], 4107603335, 14)),
            (U = Q(U, r, d, n, e[8], 1163531501, 20)),
            (n = Q(n, U, r, d, e[13], 2850285829, 5)),
            (d = Q(d, n, U, r, e[2], 4243563512, 9)),
            (r = Q(r, d, n, U, e[7], 1735328473, 14)),
            (n = o(
              n,
              (U = Q(U, r, d, n, e[12], 2368359562, 20)),
              r,
              d,
              e[5],
              4294588738,
              4
            )),
            (d = o(d, n, U, r, e[8], 2272392833, 11)),
            (r = o(r, d, n, U, e[11], 1839030562, 16)),
            (U = o(U, r, d, n, e[14], 4259657740, 23)),
            (n = o(n, U, r, d, e[1], 2763975236, 4)),
            (d = o(d, n, U, r, e[4], 1272893353, 11)),
            (r = o(r, d, n, U, e[7], 4139469664, 16)),
            (U = o(U, r, d, n, e[10], 3200236656, 23)),
            (n = o(n, U, r, d, e[13], 681279174, 4)),
            (d = o(d, n, U, r, e[0], 3936430074, 11)),
            (r = o(r, d, n, U, e[3], 3572445317, 16)),
            (U = o(U, r, d, n, e[6], 76029189, 23)),
            (n = o(n, U, r, d, e[9], 3654602809, 4)),
            (d = o(d, n, U, r, e[12], 3873151461, 11)),
            (r = o(r, d, n, U, e[15], 530742520, 16)),
            (n = h(
              n,
              (U = o(U, r, d, n, e[2], 3299628645, 23)),
              r,
              d,
              e[0],
              4096336452,
              6
            )),
            (d = h(d, n, U, r, e[7], 1126891415, 10)),
            (r = h(r, d, n, U, e[14], 2878612391, 15)),
            (U = h(U, r, d, n, e[5], 4237533241, 21)),
            (n = h(n, U, r, d, e[12], 1700485571, 6)),
            (d = h(d, n, U, r, e[3], 2399980690, 10)),
            (r = h(r, d, n, U, e[10], 4293915773, 15)),
            (U = h(U, r, d, n, e[1], 2240044497, 21)),
            (n = h(n, U, r, d, e[8], 1873313359, 6)),
            (d = h(d, n, U, r, e[15], 4264355552, 10)),
            (r = h(r, d, n, U, e[6], 2734768916, 15)),
            (U = h(U, r, d, n, e[13], 1309151649, 21)),
            (n = h(n, U, r, d, e[4], 4149444226, 6)),
            (d = h(d, n, U, r, e[11], 3174756917, 10)),
            (r = h(r, d, n, U, e[2], 718787259, 15)),
            (U = h(U, r, d, n, e[9], 3951481745, 21)),
            (this._a = (this._a + n) | 0),
            (this._b = (this._b + U) | 0),
            (this._c = (this._c + r) | 0),
            (this._d = (this._d + d) | 0)
        }),
        (F.prototype._digest = function() {
          ;(this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update()
          var e = d.allocUnsafe(16)
          return (
            e.writeInt32LE(this._a, 0),
            e.writeInt32LE(this._b, 4),
            e.writeInt32LE(this._c, 8),
            e.writeInt32LE(this._d, 12),
            e
          )
        }),
        (e.exports = F)
    },
    function(e, t, n) {
      e.exports = r
      var U = n(29).EventEmitter
      function r() {
        U.call(this)
      }
      n(0)(r, U),
        (r.Readable = n(30)),
        (r.Writable = n(89)),
        (r.Duplex = n(90)),
        (r.Transform = n(91)),
        (r.PassThrough = n(92)),
        (r.Stream = r),
        (r.prototype.pipe = function(e, t) {
          var n = this
          function r(t) {
            e.writable && !1 === e.write(t) && n.pause && n.pause()
          }
          function d() {
            n.readable && n.resume && n.resume()
          }
          n.on('data', r),
            e.on('drain', d),
            e._isStdio ||
              (t && !1 === t.end) ||
              (n.on('end', F), n.on('close', l))
          var i = !1
          function F() {
            i || ((i = !0), e.end())
          }
          function l() {
            i || ((i = !0), 'function' == typeof e.destroy && e.destroy())
          }
          function a(e) {
            if ((Q(), 0 === U.listenerCount(this, 'error'))) throw e
          }
          function Q() {
            n.removeListener('data', r),
              e.removeListener('drain', d),
              n.removeListener('end', F),
              n.removeListener('close', l),
              n.removeListener('error', a),
              e.removeListener('error', a),
              n.removeListener('end', Q),
              n.removeListener('close', Q),
              e.removeListener('close', Q)
          }
          return (
            n.on('error', a),
            e.on('error', a),
            n.on('end', Q),
            n.on('close', Q),
            e.on('close', Q),
            e.emit('pipe', n),
            e
          )
        })
    },
    function(e, t) {
      function n() {
        ;(this._events = this._events || {}),
          (this._maxListeners = this._maxListeners || void 0)
      }
      function U(e) {
        return 'function' == typeof e
      }
      function r(e) {
        return 'object' == typeof e && null !== e
      }
      function d(e) {
        return void 0 === e
      }
      ;(e.exports = n),
        (n.EventEmitter = n),
        (n.prototype._events = void 0),
        (n.prototype._maxListeners = void 0),
        (n.defaultMaxListeners = 10),
        (n.prototype.setMaxListeners = function(e) {
          if ('number' != typeof e || e < 0 || isNaN(e))
            throw TypeError('n must be a positive number')
          return (this._maxListeners = e), this
        }),
        (n.prototype.emit = function(e) {
          var t, n, i, F, l, a
          if (
            (this._events || (this._events = {}),
            'error' === e &&
              (!this._events.error ||
                (r(this._events.error) && !this._events.error.length)))
          ) {
            if ((t = arguments[1]) instanceof Error) throw t
            var Q = new Error(
              'Uncaught, unspecified "error" event. (' + t + ')'
            )
            throw ((Q.context = t), Q)
          }
          if (d((n = this._events[e]))) return !1
          if (U(n))
            switch (arguments.length) {
              case 1:
                n.call(this)
                break
              case 2:
                n.call(this, arguments[1])
                break
              case 3:
                n.call(this, arguments[1], arguments[2])
                break
              default:
                ;(F = Array.prototype.slice.call(arguments, 1)),
                  n.apply(this, F)
            }
          else if (r(n))
            for (
              F = Array.prototype.slice.call(arguments, 1),
                i = (a = n.slice()).length,
                l = 0;
              l < i;
              l++
            )
              a[l].apply(this, F)
          return !0
        }),
        (n.prototype.addListener = function(e, t) {
          var i
          if (!U(t)) throw TypeError('listener must be a function')
          return (
            this._events || (this._events = {}),
            this._events.newListener &&
              this.emit('newListener', e, U(t.listener) ? t.listener : t),
            this._events[e]
              ? r(this._events[e])
                ? this._events[e].push(t)
                : (this._events[e] = [this._events[e], t])
              : (this._events[e] = t),
            r(this._events[e]) &&
              !this._events[e].warned &&
              (i = d(this._maxListeners)
                ? n.defaultMaxListeners
                : this._maxListeners) &&
              i > 0 &&
              this._events[e].length > i &&
              ((this._events[e].warned = !0), console.trace),
            this
          )
        }),
        (n.prototype.on = n.prototype.addListener),
        (n.prototype.once = function(e, t) {
          if (!U(t)) throw TypeError('listener must be a function')
          var n = !1
          function r() {
            this.removeListener(e, r), n || ((n = !0), t.apply(this, arguments))
          }
          return (r.listener = t), this.on(e, r), this
        }),
        (n.prototype.removeListener = function(e, t) {
          var n, d, i, F
          if (!U(t)) throw TypeError('listener must be a function')
          if (!this._events || !this._events[e]) return this
          if (
            ((i = (n = this._events[e]).length),
            (d = -1),
            n === t || (U(n.listener) && n.listener === t))
          )
            delete this._events[e],
              this._events.removeListener && this.emit('removeListener', e, t)
          else if (r(n)) {
            for (F = i; F-- > 0; )
              if (n[F] === t || (n[F].listener && n[F].listener === t)) {
                d = F
                break
              }
            if (d < 0) return this
            1 === n.length
              ? ((n.length = 0), delete this._events[e])
              : n.splice(d, 1),
              this._events.removeListener && this.emit('removeListener', e, t)
          }
          return this
        }),
        (n.prototype.removeAllListeners = function(e) {
          var t, n
          if (!this._events) return this
          if (!this._events.removeListener)
            return (
              0 === arguments.length
                ? (this._events = {})
                : this._events[e] && delete this._events[e],
              this
            )
          if (0 === arguments.length) {
            for (t in this._events)
              'removeListener' !== t && this.removeAllListeners(t)
            return (
              this.removeAllListeners('removeListener'),
              (this._events = {}),
              this
            )
          }
          if (U((n = this._events[e]))) this.removeListener(e, n)
          else if (n) for (; n.length; ) this.removeListener(e, n[n.length - 1])
          return delete this._events[e], this
        }),
        (n.prototype.listeners = function(e) {
          return this._events && this._events[e]
            ? U(this._events[e])
              ? [this._events[e]]
              : this._events[e].slice()
            : []
        }),
        (n.prototype.listenerCount = function(e) {
          if (this._events) {
            var t = this._events[e]
            if (U(t)) return 1
            if (t) return t.length
          }
          return 0
        }),
        (n.listenerCount = function(e, t) {
          return e.listenerCount(t)
        })
    },
    function(e, t, n) {
      ;((t = e.exports = n(44)).Stream = t),
        (t.Readable = t),
        (t.Writable = n(31)),
        (t.Duplex = n(12)),
        (t.Transform = n(47)),
        (t.PassThrough = n(88))
    },
    function(e, t, n) {
      'use strict'
      ;(function(t, U, r) {
        var d = n(21)
        function i(e) {
          var t = this
          ;(this.next = null),
            (this.entry = null),
            (this.finish = function() {
              !(function(e, t, n) {
                var U = e.entry
                for (e.entry = null; U; ) {
                  var r = U.callback
                  t.pendingcb--, r(void 0), (U = U.next)
                }
                t.corkedRequestsFree
                  ? (t.corkedRequestsFree.next = e)
                  : (t.corkedRequestsFree = e)
              })(t, e)
            })
        }
        e.exports = V
        var F,
          l =
            !t.browser && ['v0.10', 'v0.9.'].indexOf(t.version.slice(0, 5)) > -1
              ? U
              : d.nextTick
        V.WritableState = R
        var a = n(16)
        a.inherits = n(0)
        var Q,
          o = { deprecate: n(87) },
          h = n(45),
          c = n(1).Buffer,
          B = r.Uint8Array || function() {},
          s = n(46)
        function f() {}
        function R(e, t) {
          ;(F = F || n(12)), (e = e || {})
          var U = t instanceof F
          ;(this.objectMode = !!e.objectMode),
            U && (this.objectMode = this.objectMode || !!e.writableObjectMode)
          var r = e.highWaterMark,
            a = e.writableHighWaterMark,
            Q = this.objectMode ? 16 : 16384
          ;(this.highWaterMark =
            r || 0 === r ? r : U && (a || 0 === a) ? a : Q),
            (this.highWaterMark = Math.floor(this.highWaterMark)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1)
          var o = !1 === e.decodeStrings
          ;(this.decodeStrings = !o),
            (this.defaultEncoding = e.defaultEncoding || 'utf8'),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function(e) {
              !(function(e, t) {
                var n = e._writableState,
                  U = n.sync,
                  r = n.writecb
                if (
                  ((function(e) {
                    ;(e.writing = !1),
                      (e.writecb = null),
                      (e.length -= e.writelen),
                      (e.writelen = 0)
                  })(n),
                  t)
                )
                  !(function(e, t, n, U, r) {
                    --t.pendingcb,
                      n
                        ? (d.nextTick(r, U),
                          d.nextTick(J, e, t),
                          (e._writableState.errorEmitted = !0),
                          e.emit('error', U))
                        : (r(U),
                          (e._writableState.errorEmitted = !0),
                          e.emit('error', U),
                          J(e, t))
                  })(e, n, U, t, r)
                else {
                  var i = W(n)
                  i ||
                    n.corked ||
                    n.bufferProcessing ||
                    !n.bufferedRequest ||
                    p(e, n),
                    U ? l(S, e, n, i, r) : S(e, n, i, r)
                }
              })(t, e)
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new i(this))
        }
        function V(e) {
          if (((F = F || n(12)), !(Q.call(V, this) || this instanceof F)))
            return new V(e)
          ;(this._writableState = new R(e, this)),
            (this.writable = !0),
            e &&
              ('function' == typeof e.write && (this._write = e.write),
              'function' == typeof e.writev && (this._writev = e.writev),
              'function' == typeof e.destroy && (this._destroy = e.destroy),
              'function' == typeof e.final && (this._final = e.final)),
            h.call(this)
        }
        function u(e, t, n, U, r, d, i) {
          ;(t.writelen = U),
            (t.writecb = i),
            (t.writing = !0),
            (t.sync = !0),
            n ? e._writev(r, t.onwrite) : e._write(r, d, t.onwrite),
            (t.sync = !1)
        }
        function S(e, t, n, U) {
          n ||
            (function(e, t) {
              0 === t.length &&
                t.needDrain &&
                ((t.needDrain = !1), e.emit('drain'))
            })(e, t),
            t.pendingcb--,
            U(),
            J(e, t)
        }
        function p(e, t) {
          t.bufferProcessing = !0
          var n = t.bufferedRequest
          if (e._writev && n && n.next) {
            var U = t.bufferedRequestCount,
              r = new Array(U),
              d = t.corkedRequestsFree
            d.entry = n
            for (var F = 0, l = !0; n; )
              (r[F] = n), n.isBuf || (l = !1), (n = n.next), (F += 1)
            ;(r.allBuffers = l),
              u(e, t, !0, t.length, r, '', d.finish),
              t.pendingcb++,
              (t.lastBufferedRequest = null),
              d.next
                ? ((t.corkedRequestsFree = d.next), (d.next = null))
                : (t.corkedRequestsFree = new i(t)),
              (t.bufferedRequestCount = 0)
          } else {
            for (; n; ) {
              var a = n.chunk,
                Q = n.encoding,
                o = n.callback
              if (
                (u(e, t, !1, t.objectMode ? 1 : a.length, a, Q, o),
                (n = n.next),
                t.bufferedRequestCount--,
                t.writing)
              )
                break
            }
            null === n && (t.lastBufferedRequest = null)
          }
          ;(t.bufferedRequest = n), (t.bufferProcessing = !1)
        }
        function W(e) {
          return (
            e.ending &&
            0 === e.length &&
            null === e.bufferedRequest &&
            !e.finished &&
            !e.writing
          )
        }
        function Z(e, t) {
          e._final(function(n) {
            t.pendingcb--,
              n && e.emit('error', n),
              (t.prefinished = !0),
              e.emit('prefinish'),
              J(e, t)
          })
        }
        function J(e, t) {
          var n = W(t)
          return (
            n &&
              ((function(e, t) {
                t.prefinished ||
                  t.finalCalled ||
                  ('function' == typeof e._final
                    ? (t.pendingcb++, (t.finalCalled = !0), d.nextTick(Z, e, t))
                    : ((t.prefinished = !0), e.emit('prefinish')))
              })(e, t),
              0 === t.pendingcb && ((t.finished = !0), e.emit('finish'))),
            n
          )
        }
        a.inherits(V, h),
          (R.prototype.getBuffer = function() {
            for (var e = this.bufferedRequest, t = []; e; )
              t.push(e), (e = e.next)
            return t
          }),
          (function() {
            try {
              Object.defineProperty(R.prototype, 'buffer', {
                get: o.deprecate(
                  function() {
                    return this.getBuffer()
                  },
                  '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                  'DEP0003'
                ),
              })
            } catch (e) {}
          })(),
          'function' == typeof Symbol &&
          Symbol.hasInstance &&
          'function' == typeof Function.prototype[Symbol.hasInstance]
            ? ((Q = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(V, Symbol.hasInstance, {
                value: function(e) {
                  return (
                    !!Q.call(this, e) ||
                    (this === V && e && e._writableState instanceof R)
                  )
                },
              }))
            : (Q = function(e) {
                return e instanceof this
              }),
          (V.prototype.pipe = function() {
            this.emit('error', new Error('Cannot pipe, not readable'))
          }),
          (V.prototype.write = function(e, t, n) {
            var U,
              r = this._writableState,
              i = !1,
              F = !r.objectMode && ((U = e), c.isBuffer(U) || U instanceof B)
            return (
              F &&
                !c.isBuffer(e) &&
                (e = (function(e) {
                  return c.from(e)
                })(e)),
              'function' == typeof t && ((n = t), (t = null)),
              F ? (t = 'buffer') : t || (t = r.defaultEncoding),
              'function' != typeof n && (n = f),
              r.ended
                ? (function(e, t) {
                    var n = new Error('write after end')
                    e.emit('error', n), d.nextTick(t, n)
                  })(this, n)
                : (F ||
                    (function(e, t, n, U) {
                      var r = !0,
                        i = !1
                      return (
                        null === n
                          ? (i = new TypeError(
                              'May not write null values to stream'
                            ))
                          : 'string' == typeof n ||
                            void 0 === n ||
                            t.objectMode ||
                            (i = new TypeError(
                              'Invalid non-string/buffer chunk'
                            )),
                        i && (e.emit('error', i), d.nextTick(U, i), (r = !1)),
                        r
                      )
                    })(this, r, e, n)) &&
                  (r.pendingcb++,
                  (i = (function(e, t, n, U, r, d) {
                    if (!n) {
                      var i = (function(e, t, n) {
                        return (
                          e.objectMode ||
                            !1 === e.decodeStrings ||
                            'string' != typeof t ||
                            (t = c.from(t, n)),
                          t
                        )
                      })(t, U, r)
                      U !== i && ((n = !0), (r = 'buffer'), (U = i))
                    }
                    var F = t.objectMode ? 1 : U.length
                    t.length += F
                    var l = t.length < t.highWaterMark
                    if ((l || (t.needDrain = !0), t.writing || t.corked)) {
                      var a = t.lastBufferedRequest
                      ;(t.lastBufferedRequest = {
                        chunk: U,
                        encoding: r,
                        isBuf: n,
                        callback: d,
                        next: null,
                      }),
                        a
                          ? (a.next = t.lastBufferedRequest)
                          : (t.bufferedRequest = t.lastBufferedRequest),
                        (t.bufferedRequestCount += 1)
                    } else u(e, t, !1, F, U, r, d)
                    return l
                  })(this, r, F, e, t, n))),
              i
            )
          }),
          (V.prototype.cork = function() {
            this._writableState.corked++
          }),
          (V.prototype.uncork = function() {
            var e = this._writableState
            e.corked &&
              (e.corked--,
              e.writing ||
                e.corked ||
                e.finished ||
                e.bufferProcessing ||
                !e.bufferedRequest ||
                p(this, e))
          }),
          (V.prototype.setDefaultEncoding = function(e) {
            if (
              ('string' == typeof e && (e = e.toLowerCase()),
              !(
                [
                  'hex',
                  'utf8',
                  'utf-8',
                  'ascii',
                  'binary',
                  'base64',
                  'ucs2',
                  'ucs-2',
                  'utf16le',
                  'utf-16le',
                  'raw',
                ].indexOf((e + '').toLowerCase()) > -1
              ))
            )
              throw new TypeError('Unknown encoding: ' + e)
            return (this._writableState.defaultEncoding = e), this
          }),
          Object.defineProperty(V.prototype, 'writableHighWaterMark', {
            enumerable: !1,
            get: function() {
              return this._writableState.highWaterMark
            },
          }),
          (V.prototype._write = function(e, t, n) {
            n(new Error('_write() is not implemented'))
          }),
          (V.prototype._writev = null),
          (V.prototype.end = function(e, t, n) {
            var U = this._writableState
            'function' == typeof e
              ? ((n = e), (e = null), (t = null))
              : 'function' == typeof t && ((n = t), (t = null)),
              null != e && this.write(e, t),
              U.corked && ((U.corked = 1), this.uncork()),
              U.ending ||
                U.finished ||
                (function(e, t, n) {
                  ;(t.ending = !0),
                    J(e, t),
                    n && (t.finished ? d.nextTick(n) : e.once('finish', n)),
                    (t.ended = !0),
                    (e.writable = !1)
                })(this, U, n)
          }),
          Object.defineProperty(V.prototype, 'destroyed', {
            get: function() {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              )
            },
            set: function(e) {
              this._writableState && (this._writableState.destroyed = e)
            },
          }),
          (V.prototype.destroy = s.destroy),
          (V.prototype._undestroy = s.undestroy),
          (V.prototype._destroy = function(e, t) {
            this.end(), t(e)
          })
      }.call(this, n(9), n(85).setImmediate, n(8)))
    },
    function(e, t, n) {
      'use strict'
      var U = n(1).Buffer,
        r =
          U.isEncoding ||
          function(e) {
            switch ((e = '' + e) && e.toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
              case 'raw':
                return !0
              default:
                return !1
            }
          }
      function d(e) {
        var t
        switch (
          ((this.encoding = (function(e) {
            var t = (function(e) {
              if (!e) return 'utf8'
              for (var t; ; )
                switch (e) {
                  case 'utf8':
                  case 'utf-8':
                    return 'utf8'
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 'utf16le'
                  case 'latin1':
                  case 'binary':
                    return 'latin1'
                  case 'base64':
                  case 'ascii':
                  case 'hex':
                    return e
                  default:
                    if (t) return
                    ;(e = ('' + e).toLowerCase()), (t = !0)
                }
            })(e)
            if ('string' != typeof t && (U.isEncoding === r || !r(e)))
              throw new Error('Unknown encoding: ' + e)
            return t || e
          })(e)),
          this.encoding)
        ) {
          case 'utf16le':
            ;(this.text = l), (this.end = a), (t = 4)
            break
          case 'utf8':
            ;(this.fillLast = F), (t = 4)
            break
          case 'base64':
            ;(this.text = Q), (this.end = o), (t = 3)
            break
          default:
            return (this.write = h), void (this.end = c)
        }
        ;(this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = U.allocUnsafe(t))
      }
      function i(e) {
        return e <= 127
          ? 0
          : e >> 5 == 6
          ? 2
          : e >> 4 == 14
          ? 3
          : e >> 3 == 30
          ? 4
          : e >> 6 == 2
          ? -1
          : -2
      }
      function F(e) {
        var t = this.lastTotal - this.lastNeed,
          n = (function(e, t, n) {
            if (128 != (192 & t[0])) return (e.lastNeed = 0), '�'
            if (e.lastNeed > 1 && t.length > 1) {
              if (128 != (192 & t[1])) return (e.lastNeed = 1), '�'
              if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                return (e.lastNeed = 2), '�'
            }
          })(this, e)
        return void 0 !== n
          ? n
          : this.lastNeed <= e.length
          ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (e.copy(this.lastChar, t, 0, e.length),
            void (this.lastNeed -= e.length))
      }
      function l(e, t) {
        if ((e.length - t) % 2 == 0) {
          var n = e.toString('utf16le', t)
          if (n) {
            var U = n.charCodeAt(n.length - 1)
            if (U >= 55296 && U <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1]),
                n.slice(0, -1)
              )
          }
          return n
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = e[e.length - 1]),
          e.toString('utf16le', t, e.length - 1)
        )
      }
      function a(e) {
        var t = e && e.length ? this.write(e) : ''
        if (this.lastNeed) {
          var n = this.lastTotal - this.lastNeed
          return t + this.lastChar.toString('utf16le', 0, n)
        }
        return t
      }
      function Q(e, t) {
        var n = (e.length - t) % 3
        return 0 === n
          ? e.toString('base64', t)
          : ((this.lastNeed = 3 - n),
            (this.lastTotal = 3),
            1 === n
              ? (this.lastChar[0] = e[e.length - 1])
              : ((this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1])),
            e.toString('base64', t, e.length - n))
      }
      function o(e) {
        var t = e && e.length ? this.write(e) : ''
        return this.lastNeed
          ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
          : t
      }
      function h(e) {
        return e.toString(this.encoding)
      }
      function c(e) {
        return e && e.length ? this.write(e) : ''
      }
      ;(t.StringDecoder = d),
        (d.prototype.write = function(e) {
          if (0 === e.length) return ''
          var t, n
          if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e))) return ''
            ;(n = this.lastNeed), (this.lastNeed = 0)
          } else n = 0
          return n < e.length
            ? t
              ? t + this.text(e, n)
              : this.text(e, n)
            : t || ''
        }),
        (d.prototype.end = function(e) {
          var t = e && e.length ? this.write(e) : ''
          return this.lastNeed ? t + '�' : t
        }),
        (d.prototype.text = function(e, t) {
          var n = (function(e, t, n) {
            var U = t.length - 1
            if (U < n) return 0
            var r = i(t[U])
            return r >= 0
              ? (r > 0 && (e.lastNeed = r - 1), r)
              : --U < n || -2 === r
              ? 0
              : (r = i(t[U])) >= 0
              ? (r > 0 && (e.lastNeed = r - 2), r)
              : --U < n || -2 === r
              ? 0
              : (r = i(t[U])) >= 0
              ? (r > 0 && (2 === r ? (r = 0) : (e.lastNeed = r - 3)), r)
              : 0
          })(this, e, t)
          if (!this.lastNeed) return e.toString('utf8', t)
          this.lastTotal = n
          var U = e.length - (n - this.lastNeed)
          return e.copy(this.lastChar, 0, U), e.toString('utf8', t, U)
        }),
        (d.prototype.fillLast = function(e) {
          if (this.lastNeed <= e.length)
            return (
              e.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            )
          e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            (this.lastNeed -= e.length)
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(3).Buffer,
        r = n(0),
        d = n(43),
        i = new Array(16),
        F = [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13,
        ],
        l = [
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11,
        ],
        a = [
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6,
        ],
        Q = [
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11,
        ],
        o = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        h = [1352829926, 1548603684, 1836072691, 2053994217, 0]
      function c() {
        d.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878),
          (this._e = 3285377520)
      }
      function B(e, t) {
        return (e << t) | (e >>> (32 - t))
      }
      function s(e, t, n, U, r, d, i, F) {
        return (B((e + (t ^ n ^ U) + d + i) | 0, F) + r) | 0
      }
      function f(e, t, n, U, r, d, i, F) {
        return (B((e + ((t & n) | (~t & U)) + d + i) | 0, F) + r) | 0
      }
      function R(e, t, n, U, r, d, i, F) {
        return (B((e + ((t | ~n) ^ U) + d + i) | 0, F) + r) | 0
      }
      function V(e, t, n, U, r, d, i, F) {
        return (B((e + ((t & U) | (n & ~U)) + d + i) | 0, F) + r) | 0
      }
      function u(e, t, n, U, r, d, i, F) {
        return (B((e + (t ^ (n | ~U)) + d + i) | 0, F) + r) | 0
      }
      r(c, d),
        (c.prototype._update = function() {
          for (var e = i, t = 0; t < 16; ++t)
            e[t] = this._block.readInt32LE(4 * t)
          for (
            var n = 0 | this._a,
              U = 0 | this._b,
              r = 0 | this._c,
              d = 0 | this._d,
              c = 0 | this._e,
              S = 0 | this._a,
              p = 0 | this._b,
              W = 0 | this._c,
              Z = 0 | this._d,
              J = 0 | this._e,
              b = 0;
            b < 80;
            b += 1
          ) {
            var N, g
            b < 16
              ? ((N = s(n, U, r, d, c, e[F[b]], o[0], a[b])),
                (g = u(S, p, W, Z, J, e[l[b]], h[0], Q[b])))
              : b < 32
              ? ((N = f(n, U, r, d, c, e[F[b]], o[1], a[b])),
                (g = V(S, p, W, Z, J, e[l[b]], h[1], Q[b])))
              : b < 48
              ? ((N = R(n, U, r, d, c, e[F[b]], o[2], a[b])),
                (g = R(S, p, W, Z, J, e[l[b]], h[2], Q[b])))
              : b < 64
              ? ((N = V(n, U, r, d, c, e[F[b]], o[3], a[b])),
                (g = f(S, p, W, Z, J, e[l[b]], h[3], Q[b])))
              : ((N = u(n, U, r, d, c, e[F[b]], o[4], a[b])),
                (g = s(S, p, W, Z, J, e[l[b]], h[4], Q[b]))),
              (n = c),
              (c = d),
              (d = B(r, 10)),
              (r = U),
              (U = N),
              (S = J),
              (J = Z),
              (Z = B(W, 10)),
              (W = p),
              (p = g)
          }
          var m = (this._b + r + Z) | 0
          ;(this._b = (this._c + d + J) | 0),
            (this._c = (this._d + c + S) | 0),
            (this._d = (this._e + n + p) | 0),
            (this._e = (this._a + U + W) | 0),
            (this._a = m)
        }),
        (c.prototype._digest = function() {
          ;(this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update()
          var e = U.alloc ? U.alloc(20) : new U(20)
          return (
            e.writeInt32LE(this._a, 0),
            e.writeInt32LE(this._b, 4),
            e.writeInt32LE(this._c, 8),
            e.writeInt32LE(this._d, 12),
            e.writeInt32LE(this._e, 16),
            e
          )
        }),
        (e.exports = c)
    },
    function(e, t, n) {
      ;((t = e.exports = function(e) {
        e = e.toLowerCase()
        var n = t[e]
        if (!n)
          throw new Error(e + ' is not supported (we accept pull requests)')
        return new n()
      }).sha = n(93)),
        (t.sha1 = n(94)),
        (t.sha224 = n(95)),
        (t.sha256 = n(48)),
        (t.sha384 = n(96)),
        (t.sha512 = n(49))
    },
    function(e, t, n) {
      'use strict'
      ;(t.utils = n(102)),
        (t.Cipher = n(103)),
        (t.DES = n(104)),
        (t.CBC = n(105)),
        (t.EDE = n(106))
    },
    function(e, t, n) {
      var U = n(107),
        r = n(115),
        d = n(59)
      ;(t.createCipher = t.Cipher = U.createCipher),
        (t.createCipheriv = t.Cipheriv = U.createCipheriv),
        (t.createDecipher = t.Decipher = r.createDecipher),
        (t.createDecipheriv = t.Decipheriv = r.createDecipheriv),
        (t.listCiphers = t.getCiphers = function() {
          return Object.keys(d)
        })
    },
    function(e, t, n) {
      var U = {
          ECB: n(108),
          CBC: n(109),
          CFB: n(110),
          CFB8: n(111),
          CFB1: n(112),
          OFB: n(113),
          CTR: n(57),
          GCM: n(57),
        },
        r = n(59)
      for (var d in r) r[d].module = U[r[d].mode]
      e.exports = r
    },
    function(e, t, n) {
      ;(function(t) {
        var U = n(2),
          r = n(13)
        function d(e, n) {
          var r = (function(e) {
              var t = i(e)
              return {
                blinder: t
                  .toRed(U.mont(e.modulus))
                  .redPow(new U(e.publicExponent))
                  .fromRed(),
                unblinder: t.invm(e.modulus),
              }
            })(n),
            d = n.modulus.byteLength(),
            F = (U.mont(n.modulus), new U(e).mul(r.blinder).umod(n.modulus)),
            l = F.toRed(U.mont(n.prime1)),
            a = F.toRed(U.mont(n.prime2)),
            Q = n.coefficient,
            o = n.prime1,
            h = n.prime2,
            c = l.redPow(n.exponent1),
            B = a.redPow(n.exponent2)
          ;(c = c.fromRed()), (B = B.fromRed())
          var s = c
            .isub(B)
            .imul(Q)
            .umod(o)
          return (
            s.imul(h),
            B.iadd(s),
            new t(
              B.imul(r.unblinder)
                .umod(n.modulus)
                .toArray(!1, d)
            )
          )
        }
        function i(e) {
          for (
            var t = e.modulus.byteLength(), n = new U(r(t));
            n.cmp(e.modulus) >= 0 || !n.umod(e.prime1) || !n.umod(e.prime2);

          )
            n = new U(r(t))
          return n
        }
        ;(e.exports = d), (d.getr = i)
      }.call(this, n(3).Buffer))
    },
    function(e, t, n) {
      var U = t
      ;(U.utils = n(7)),
        (U.common = n(18)),
        (U.sha = n(132)),
        (U.ripemd = n(136)),
        (U.hmac = n(137)),
        (U.sha1 = U.sha.sha1),
        (U.sha256 = U.sha.sha256),
        (U.sha224 = U.sha.sha224),
        (U.sha384 = U.sha.sha384),
        (U.sha512 = U.sha.sha512),
        (U.ripemd160 = U.ripemd.ripemd160)
    },
    function(e, t, n) {
      const U = n(2),
        r = n(5),
        d = e => new U(e.slice(2), 16),
        i = e => {
          const t =
            '0x' +
            ('0x' === e.slice(0, 2)
              ? new U(e.slice(2), 16)
              : new U(e, 10)
            ).toString('hex')
          return '0x0' === t ? '0x' : t
        },
        F = e =>
          'string' == typeof e
            ? /^0x/.test(e)
              ? e
              : '0x' + e
            : '0x' + new U(e).toString('hex'),
        l = e => d(e).toNumber(),
        a = e => (t, n) => (e => '0x' + e.toString('hex'))(d(t)[e](d(n))),
        Q = a('add'),
        o = a('mul'),
        h = a('div'),
        c = a('sub')
      e.exports = {
        toString: e => d(e).toString(10),
        fromString: i,
        toNumber: l,
        fromNumber: F,
        toEther: e => l(h(e, i('10000000000'))) / 1e8,
        fromEther: e => o(F(Math.floor(1e8 * e)), i('10000000000')),
        toUint256: e => r.pad(32, e),
        add: Q,
        mul: o,
        div: h,
        sub: c,
      }
    },
    function(e, t, n) {
      ;(function(t) {
        const U = n(5),
          r = n(40),
          d = n(4),
          i = (n(11), new d.ec('secp256k1')),
          { keccak256: F, keccak256s: l } = n(26),
          a = e => {
            const t = l(e.slice(2))
            let n = '0x'
            for (let U = 0; U < 40; U++)
              n +=
                parseInt(t[U + 2], 16) > 7 ? e[U + 2].toUpperCase() : e[U + 2]
            return n
          },
          Q = e => {
            const n = new t(e.slice(2), 'hex'),
              U =
                '0x' +
                i
                  .keyFromPrivate(n)
                  .getPublic(!1, 'hex')
                  .slice(2),
              r = F(U)
            return { address: a('0x' + r.slice(-40)), privateKey: e }
          },
          o = ([e, t, n]) => U.flatten([t, n, e]),
          h = e => [
            U.slice(64, U.length(e), e),
            U.slice(0, 32, e),
            U.slice(32, 64, e),
          ],
          c = e => (n, d) => {
            const F = i
              .keyFromPrivate(new t(d.slice(2), 'hex'))
              .sign(new t(n.slice(2), 'hex'), { canonical: !0 })
            return o([
              r.fromString(U.fromNumber(e + F.recoveryParam)),
              U.pad(32, U.fromNat('0x' + F.r.toString(16))),
              U.pad(32, U.fromNat('0x' + F.s.toString(16))),
            ])
          },
          B = c(27)
        e.exports = {
          create: e => {
            const t = F(U.concat(U.random(32), e || U.random(32))),
              n = U.concat(U.concat(U.random(32), t), U.random(32)),
              r = F(n)
            return Q(r)
          },
          toChecksum: a,
          fromPrivate: Q,
          sign: B,
          makeSigner: c,
          recover: (e, n) => {
            const r = h(n),
              d = { v: U.toNumber(r[0]), r: r[1].slice(2), s: r[2].slice(2) },
              l =
                '0x' +
                i
                  .recoverPubKey(
                    new t(e.slice(2), 'hex'),
                    d,
                    d.v < 2 ? d.v : 1 - (d.v % 2)
                  )
                  .encode('hex', !1)
                  .slice(2),
              Q = F(l)
            return a('0x' + Q.slice(-40))
          },
          encodeSignature: o,
          decodeSignature: h,
        }
      }.call(this, n(3).Buffer))
    },
    function(e, t) {
      var n = {}.toString
      e.exports =
        Array.isArray ||
        function(e) {
          return '[object Array]' == n.call(e)
        }
    },
    function(e, t, n) {
      'use strict'
      var U = n(1).Buffer,
        r = n(28).Transform
      function d(e) {
        r.call(this),
          (this._block = U.allocUnsafe(e)),
          (this._blockSize = e),
          (this._blockOffset = 0),
          (this._length = [0, 0, 0, 0]),
          (this._finalized = !1)
      }
      n(0)(d, r),
        (d.prototype._transform = function(e, t, n) {
          var U = null
          try {
            this.update(e, t)
          } catch (e) {
            U = e
          }
          n(U)
        }),
        (d.prototype._flush = function(e) {
          var t = null
          try {
            this.push(this.digest())
          } catch (e) {
            t = e
          }
          e(t)
        }),
        (d.prototype.update = function(e, t) {
          if (
            ((function(e, t) {
              if (!U.isBuffer(e) && 'string' != typeof e)
                throw new TypeError('Data must be a string or a buffer')
            })(e),
            this._finalized)
          )
            throw new Error('Digest already called')
          U.isBuffer(e) || (e = U.from(e, t))
          for (
            var n = this._block, r = 0;
            this._blockOffset + e.length - r >= this._blockSize;

          ) {
            for (var d = this._blockOffset; d < this._blockSize; )
              n[d++] = e[r++]
            this._update(), (this._blockOffset = 0)
          }
          for (; r < e.length; ) n[this._blockOffset++] = e[r++]
          for (var i = 0, F = 8 * e.length; F > 0; ++i)
            (this._length[i] += F),
              (F = (this._length[i] / 4294967296) | 0) > 0 &&
                (this._length[i] -= 4294967296 * F)
          return this
        }),
        (d.prototype._update = function() {
          throw new Error('_update is not implemented')
        }),
        (d.prototype.digest = function(e) {
          if (this._finalized) throw new Error('Digest already called')
          this._finalized = !0
          var t = this._digest()
          void 0 !== e && (t = t.toString(e)),
            this._block.fill(0),
            (this._blockOffset = 0)
          for (var n = 0; n < 4; ++n) this._length[n] = 0
          return t
        }),
        (d.prototype._digest = function() {
          throw new Error('_digest is not implemented')
        }),
        (e.exports = d)
    },
    function(e, t, n) {
      'use strict'
      ;(function(t, U) {
        var r = n(21)
        e.exports = u
        var d,
          i = n(42)
        ;(u.ReadableState = V), n(29).EventEmitter
        var F = function(e, t) {
            return e.listeners(t).length
          },
          l = n(45),
          a = n(1).Buffer,
          Q = t.Uint8Array || function() {},
          o = n(16)
        o.inherits = n(0)
        var h = n(82),
          c = void 0
        c = h && h.debuglog ? h.debuglog('stream') : function() {}
        var B,
          s = n(83),
          f = n(46)
        o.inherits(u, l)
        var R = ['error', 'close', 'destroy', 'pause', 'resume']
        function V(e, t) {
          e = e || {}
          var U = t instanceof (d = d || n(12))
          ;(this.objectMode = !!e.objectMode),
            U && (this.objectMode = this.objectMode || !!e.readableObjectMode)
          var r = e.highWaterMark,
            i = e.readableHighWaterMark,
            F = this.objectMode ? 16 : 16384
          ;(this.highWaterMark =
            r || 0 === r ? r : U && (i || 0 === i) ? i : F),
            (this.highWaterMark = Math.floor(this.highWaterMark)),
            (this.buffer = new s()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.destroyed = !1),
            (this.defaultEncoding = e.defaultEncoding || 'utf8'),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            e.encoding &&
              (B || (B = n(32).StringDecoder),
              (this.decoder = new B(e.encoding)),
              (this.encoding = e.encoding))
        }
        function u(e) {
          if (((d = d || n(12)), !(this instanceof u))) return new u(e)
          ;(this._readableState = new V(e, this)),
            (this.readable = !0),
            e &&
              ('function' == typeof e.read && (this._read = e.read),
              'function' == typeof e.destroy && (this._destroy = e.destroy)),
            l.call(this)
        }
        function S(e, t, n, U, r) {
          var d,
            i = e._readableState
          return (
            null === t
              ? ((i.reading = !1),
                (function(e, t) {
                  if (!t.ended) {
                    if (t.decoder) {
                      var n = t.decoder.end()
                      n &&
                        n.length &&
                        (t.buffer.push(n),
                        (t.length += t.objectMode ? 1 : n.length))
                    }
                    ;(t.ended = !0), J(e)
                  }
                })(e, i))
              : (r ||
                  (d = (function(e, t) {
                    var n, U
                    return (
                      (U = t),
                      a.isBuffer(U) ||
                        U instanceof Q ||
                        'string' == typeof t ||
                        void 0 === t ||
                        e.objectMode ||
                        (n = new TypeError('Invalid non-string/buffer chunk')),
                      n
                    )
                  })(i, t)),
                d
                  ? e.emit('error', d)
                  : i.objectMode || (t && t.length > 0)
                  ? ('string' == typeof t ||
                      i.objectMode ||
                      Object.getPrototypeOf(t) === a.prototype ||
                      (t = (function(e) {
                        return a.from(e)
                      })(t)),
                    U
                      ? i.endEmitted
                        ? e.emit(
                            'error',
                            new Error('stream.unshift() after end event')
                          )
                        : p(e, i, t, !0)
                      : i.ended
                      ? e.emit('error', new Error('stream.push() after EOF'))
                      : ((i.reading = !1),
                        i.decoder && !n
                          ? ((t = i.decoder.write(t)),
                            i.objectMode || 0 !== t.length
                              ? p(e, i, t, !1)
                              : N(e, i))
                          : p(e, i, t, !1)))
                  : U || (i.reading = !1)),
            (function(e) {
              return (
                !e.ended &&
                (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
              )
            })(i)
          )
        }
        function p(e, t, n, U) {
          t.flowing && 0 === t.length && !t.sync
            ? (e.emit('data', n), e.read(0))
            : ((t.length += t.objectMode ? 1 : n.length),
              U ? t.buffer.unshift(n) : t.buffer.push(n),
              t.needReadable && J(e)),
            N(e, t)
        }
        Object.defineProperty(u.prototype, 'destroyed', {
          get: function() {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            )
          },
          set: function(e) {
            this._readableState && (this._readableState.destroyed = e)
          },
        }),
          (u.prototype.destroy = f.destroy),
          (u.prototype._undestroy = f.undestroy),
          (u.prototype._destroy = function(e, t) {
            this.push(null), t(e)
          }),
          (u.prototype.push = function(e, t) {
            var n,
              U = this._readableState
            return (
              U.objectMode
                ? (n = !0)
                : 'string' == typeof e &&
                  ((t = t || U.defaultEncoding) !== U.encoding &&
                    ((e = a.from(e, t)), (t = '')),
                  (n = !0)),
              S(this, e, t, !1, n)
            )
          }),
          (u.prototype.unshift = function(e) {
            return S(this, e, null, !0, !1)
          }),
          (u.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
          }),
          (u.prototype.setEncoding = function(e) {
            return (
              B || (B = n(32).StringDecoder),
              (this._readableState.decoder = new B(e)),
              (this._readableState.encoding = e),
              this
            )
          })
        var W = 8388608
        function Z(e, t) {
          return e <= 0 || (0 === t.length && t.ended)
            ? 0
            : t.objectMode
            ? 1
            : e != e
            ? t.flowing && t.length
              ? t.buffer.head.data.length
              : t.length
            : (e > t.highWaterMark &&
                (t.highWaterMark = (function(e) {
                  return (
                    e >= W
                      ? (e = W)
                      : (e--,
                        (e |= e >>> 1),
                        (e |= e >>> 2),
                        (e |= e >>> 4),
                        (e |= e >>> 8),
                        (e |= e >>> 16),
                        e++),
                    e
                  )
                })(e)),
              e <= t.length
                ? e
                : t.ended
                ? t.length
                : ((t.needReadable = !0), 0))
        }
        function J(e) {
          var t = e._readableState
          ;(t.needReadable = !1),
            t.emittedReadable ||
              (c('emitReadable', t.flowing),
              (t.emittedReadable = !0),
              t.sync ? r.nextTick(b, e) : b(e))
        }
        function b(e) {
          c('emit readable'), e.emit('readable'), I(e)
        }
        function N(e, t) {
          t.readingMore || ((t.readingMore = !0), r.nextTick(g, e, t))
        }
        function g(e, t) {
          for (
            var n = t.length;
            !t.reading &&
            !t.flowing &&
            !t.ended &&
            t.length < t.highWaterMark &&
            (c('maybeReadMore read 0'), e.read(0), n !== t.length);

          )
            n = t.length
          t.readingMore = !1
        }
        function m(e) {
          c('readable nexttick read 0'), e.read(0)
        }
        function E(e, t) {
          t.reading || (c('resume read 0'), e.read(0)),
            (t.resumeScheduled = !1),
            (t.awaitDrain = 0),
            e.emit('resume'),
            I(e),
            t.flowing && !t.reading && e.read(0)
        }
        function I(e) {
          var t = e._readableState
          for (c('flow', t.flowing); t.flowing && null !== e.read(); );
        }
        function k(e, t) {
          return 0 === t.length
            ? null
            : (t.objectMode
                ? (n = t.buffer.shift())
                : !e || e >= t.length
                ? ((n = t.decoder
                    ? t.buffer.join('')
                    : 1 === t.buffer.length
                    ? t.buffer.head.data
                    : t.buffer.concat(t.length)),
                  t.buffer.clear())
                : (n = (function(e, t, n) {
                    var U
                    return (
                      e < t.head.data.length
                        ? ((U = t.head.data.slice(0, e)),
                          (t.head.data = t.head.data.slice(e)))
                        : (U =
                            e === t.head.data.length
                              ? t.shift()
                              : n
                              ? (function(e, t) {
                                  var n = t.head,
                                    U = 1,
                                    r = n.data
                                  for (e -= r.length; (n = n.next); ) {
                                    var d = n.data,
                                      i = e > d.length ? d.length : e
                                    if (
                                      (i === d.length
                                        ? (r += d)
                                        : (r += d.slice(0, e)),
                                      0 == (e -= i))
                                    ) {
                                      i === d.length
                                        ? (++U,
                                          n.next
                                            ? (t.head = n.next)
                                            : (t.head = t.tail = null))
                                        : ((t.head = n), (n.data = d.slice(i)))
                                      break
                                    }
                                    ++U
                                  }
                                  return (t.length -= U), r
                                })(e, t)
                              : (function(e, t) {
                                  var n = a.allocUnsafe(e),
                                    U = t.head,
                                    r = 1
                                  for (
                                    U.data.copy(n), e -= U.data.length;
                                    (U = U.next);

                                  ) {
                                    var d = U.data,
                                      i = e > d.length ? d.length : e
                                    if (
                                      (d.copy(n, n.length - e, 0, i),
                                      0 == (e -= i))
                                    ) {
                                      i === d.length
                                        ? (++r,
                                          U.next
                                            ? (t.head = U.next)
                                            : (t.head = t.tail = null))
                                        : ((t.head = U), (U.data = d.slice(i)))
                                      break
                                    }
                                    ++r
                                  }
                                  return (t.length -= r), n
                                })(e, t)),
                      U
                    )
                  })(e, t.buffer, t.decoder)),
              n)
          var n
        }
        function C(e) {
          var t = e._readableState
          if (t.length > 0)
            throw new Error('"endReadable()" called on non-empty stream')
          t.endEmitted || ((t.ended = !0), r.nextTick(T, t, e))
        }
        function T(e, t) {
          e.endEmitted ||
            0 !== e.length ||
            ((e.endEmitted = !0), (t.readable = !1), t.emit('end'))
        }
        function y(e, t) {
          for (var n = 0, U = e.length; n < U; n++) if (e[n] === t) return n
          return -1
        }
        ;(u.prototype.read = function(e) {
          c('read', e), (e = parseInt(e, 10))
          var t = this._readableState,
            n = e
          if (
            (0 !== e && (t.emittedReadable = !1),
            0 === e &&
              t.needReadable &&
              (t.length >= t.highWaterMark || t.ended))
          )
            return (
              c('read: emitReadable', t.length, t.ended),
              0 === t.length && t.ended ? C(this) : J(this),
              null
            )
          if (0 === (e = Z(e, t)) && t.ended)
            return 0 === t.length && C(this), null
          var U,
            r = t.needReadable
          return (
            c('need readable', r),
            (0 === t.length || t.length - e < t.highWaterMark) &&
              c('length less than watermark', (r = !0)),
            t.ended || t.reading
              ? c('reading or ended', (r = !1))
              : r &&
                (c('do read'),
                (t.reading = !0),
                (t.sync = !0),
                0 === t.length && (t.needReadable = !0),
                this._read(t.highWaterMark),
                (t.sync = !1),
                t.reading || (e = Z(n, t))),
            null === (U = e > 0 ? k(e, t) : null)
              ? ((t.needReadable = !0), (e = 0))
              : (t.length -= e),
            0 === t.length &&
              (t.ended || (t.needReadable = !0), n !== e && t.ended && C(this)),
            null !== U && this.emit('data', U),
            U
          )
        }),
          (u.prototype._read = function(e) {
            this.emit('error', new Error('_read() is not implemented'))
          }),
          (u.prototype.pipe = function(e, t) {
            var n = this,
              d = this._readableState
            switch (d.pipesCount) {
              case 0:
                d.pipes = e
                break
              case 1:
                d.pipes = [d.pipes, e]
                break
              default:
                d.pipes.push(e)
            }
            ;(d.pipesCount += 1), c('pipe count=%d opts=%j', d.pipesCount, t)
            var l =
              (t && !1 === t.end) || e === U.stdout || e === U.stderr ? V : a
            function a() {
              c('onend'), e.end()
            }
            d.endEmitted ? r.nextTick(l) : n.once('end', l),
              e.on('unpipe', function t(U, r) {
                c('onunpipe'),
                  U === n &&
                    r &&
                    !1 === r.hasUnpiped &&
                    ((r.hasUnpiped = !0),
                    c('cleanup'),
                    e.removeListener('close', f),
                    e.removeListener('finish', R),
                    e.removeListener('drain', Q),
                    e.removeListener('error', s),
                    e.removeListener('unpipe', t),
                    n.removeListener('end', a),
                    n.removeListener('end', V),
                    n.removeListener('data', B),
                    (o = !0),
                    !d.awaitDrain ||
                      (e._writableState && !e._writableState.needDrain) ||
                      Q())
              })
            var Q = (function(e) {
              return function() {
                var t = e._readableState
                c('pipeOnDrain', t.awaitDrain),
                  t.awaitDrain && t.awaitDrain--,
                  0 === t.awaitDrain && F(e, 'data') && ((t.flowing = !0), I(e))
              }
            })(n)
            e.on('drain', Q)
            var o = !1,
              h = !1
            function B(t) {
              c('ondata'),
                (h = !1),
                !1 !== e.write(t) ||
                  h ||
                  (((1 === d.pipesCount && d.pipes === e) ||
                    (d.pipesCount > 1 && -1 !== y(d.pipes, e))) &&
                    !o &&
                    (c(
                      'false write response, pause',
                      n._readableState.awaitDrain
                    ),
                    n._readableState.awaitDrain++,
                    (h = !0)),
                  n.pause())
            }
            function s(t) {
              c('onerror', t),
                V(),
                e.removeListener('error', s),
                0 === F(e, 'error') && e.emit('error', t)
            }
            function f() {
              e.removeListener('finish', R), V()
            }
            function R() {
              c('onfinish'), e.removeListener('close', f), V()
            }
            function V() {
              c('unpipe'), n.unpipe(e)
            }
            return (
              n.on('data', B),
              (function(e, t, n) {
                if ('function' == typeof e.prependListener)
                  return e.prependListener('error', n)
                e._events && e._events.error
                  ? i(e._events.error)
                    ? e._events.error.unshift(n)
                    : (e._events.error = [n, e._events.error])
                  : e.on('error', n)
              })(e, 0, s),
              e.once('close', f),
              e.once('finish', R),
              e.emit('pipe', n),
              d.flowing || (c('pipe resume'), n.resume()),
              e
            )
          }),
          (u.prototype.unpipe = function(e) {
            var t = this._readableState,
              n = { hasUnpiped: !1 }
            if (0 === t.pipesCount) return this
            if (1 === t.pipesCount)
              return e && e !== t.pipes
                ? this
                : (e || (e = t.pipes),
                  (t.pipes = null),
                  (t.pipesCount = 0),
                  (t.flowing = !1),
                  e && e.emit('unpipe', this, n),
                  this)
            if (!e) {
              var U = t.pipes,
                r = t.pipesCount
              ;(t.pipes = null), (t.pipesCount = 0), (t.flowing = !1)
              for (var d = 0; d < r; d++) U[d].emit('unpipe', this, n)
              return this
            }
            var i = y(t.pipes, e)
            return -1 === i
              ? this
              : (t.pipes.splice(i, 1),
                (t.pipesCount -= 1),
                1 === t.pipesCount && (t.pipes = t.pipes[0]),
                e.emit('unpipe', this, n),
                this)
          }),
          (u.prototype.on = function(e, t) {
            var n = l.prototype.on.call(this, e, t)
            if ('data' === e)
              !1 !== this._readableState.flowing && this.resume()
            else if ('readable' === e) {
              var U = this._readableState
              U.endEmitted ||
                U.readableListening ||
                ((U.readableListening = U.needReadable = !0),
                (U.emittedReadable = !1),
                U.reading ? U.length && J(this) : r.nextTick(m, this))
            }
            return n
          }),
          (u.prototype.addListener = u.prototype.on),
          (u.prototype.resume = function() {
            var e = this._readableState
            return (
              e.flowing ||
                (c('resume'),
                (e.flowing = !0),
                (function(e, t) {
                  t.resumeScheduled ||
                    ((t.resumeScheduled = !0), r.nextTick(E, e, t))
                })(this, e)),
              this
            )
          }),
          (u.prototype.pause = function() {
            return (
              c('call pause flowing=%j', this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (c('pause'),
                (this._readableState.flowing = !1),
                this.emit('pause')),
              this
            )
          }),
          (u.prototype.wrap = function(e) {
            var t = this,
              n = this._readableState,
              U = !1
            for (var r in (e.on('end', function() {
              if ((c('wrapped end'), n.decoder && !n.ended)) {
                var e = n.decoder.end()
                e && e.length && t.push(e)
              }
              t.push(null)
            }),
            e.on('data', function(r) {
              c('wrapped data'),
                n.decoder && (r = n.decoder.write(r)),
                (n.objectMode && null == r) ||
                  ((n.objectMode || (r && r.length)) &&
                    (t.push(r) || ((U = !0), e.pause())))
            }),
            e))
              void 0 === this[r] &&
                'function' == typeof e[r] &&
                (this[r] = (function(t) {
                  return function() {
                    return e[t].apply(e, arguments)
                  }
                })(r))
            for (var d = 0; d < R.length; d++)
              e.on(R[d], this.emit.bind(this, R[d]))
            return (
              (this._read = function(t) {
                c('wrapped _read', t), U && ((U = !1), e.resume())
              }),
              this
            )
          }),
          Object.defineProperty(u.prototype, 'readableHighWaterMark', {
            enumerable: !1,
            get: function() {
              return this._readableState.highWaterMark
            },
          }),
          (u._fromList = k)
      }.call(this, n(8), n(9)))
    },
    function(e, t, n) {
      e.exports = n(29).EventEmitter
    },
    function(e, t, n) {
      'use strict'
      var U = n(21)
      function r(e, t) {
        e.emit('error', t)
      }
      e.exports = {
        destroy: function(e, t) {
          var n = this,
            d = this._readableState && this._readableState.destroyed,
            i = this._writableState && this._writableState.destroyed
          return d || i
            ? (t
                ? t(e)
                : !e ||
                  (this._writableState && this._writableState.errorEmitted) ||
                  U.nextTick(r, this, e),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function(e) {
                !t && e
                  ? (U.nextTick(r, n, e),
                    n._writableState && (n._writableState.errorEmitted = !0))
                  : t && t(e)
              }),
              this)
        },
        undestroy: function() {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1))
        },
      }
    },
    function(e, t, n) {
      'use strict'
      e.exports = i
      var U = n(12),
        r = n(16)
      function d(e, t) {
        var n = this._transformState
        n.transforming = !1
        var U = n.writecb
        if (!U)
          return this.emit(
            'error',
            new Error('write callback called multiple times')
          )
        ;(n.writechunk = null),
          (n.writecb = null),
          null != t && this.push(t),
          U(e)
        var r = this._readableState
        ;(r.reading = !1),
          (r.needReadable || r.length < r.highWaterMark) &&
            this._read(r.highWaterMark)
      }
      function i(e) {
        if (!(this instanceof i)) return new i(e)
        U.call(this, e),
          (this._transformState = {
            afterTransform: d.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ('function' == typeof e.transform &&
              (this._transform = e.transform),
            'function' == typeof e.flush && (this._flush = e.flush)),
          this.on('prefinish', F)
      }
      function F() {
        var e = this
        'function' == typeof this._flush
          ? this._flush(function(t, n) {
              l(e, t, n)
            })
          : l(this, null, null)
      }
      function l(e, t, n) {
        if (t) return e.emit('error', t)
        if ((null != n && e.push(n), e._writableState.length))
          throw new Error('Calling transform done when ws.length != 0')
        if (e._transformState.transforming)
          throw new Error('Calling transform done when still transforming')
        return e.push(null)
      }
      ;(r.inherits = n(0)),
        r.inherits(i, U),
        (i.prototype.push = function(e, t) {
          return (
            (this._transformState.needTransform = !1),
            U.prototype.push.call(this, e, t)
          )
        }),
        (i.prototype._transform = function(e, t, n) {
          throw new Error('_transform() is not implemented')
        }),
        (i.prototype._write = function(e, t, n) {
          var U = this._transformState
          if (
            ((U.writecb = n),
            (U.writechunk = e),
            (U.writeencoding = t),
            !U.transforming)
          ) {
            var r = this._readableState
            ;(U.needTransform ||
              r.needReadable ||
              r.length < r.highWaterMark) &&
              this._read(r.highWaterMark)
          }
        }),
        (i.prototype._read = function(e) {
          var t = this._transformState
          null !== t.writechunk && t.writecb && !t.transforming
            ? ((t.transforming = !0),
              this._transform(t.writechunk, t.writeencoding, t.afterTransform))
            : (t.needTransform = !0)
        }),
        (i.prototype._destroy = function(e, t) {
          var n = this
          U.prototype._destroy.call(this, e, function(e) {
            t(e), n.emit('close')
          })
        })
    },
    function(e, t, n) {
      var U = n(0),
        r = n(14),
        d = n(1).Buffer,
        i = [
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298,
        ],
        F = new Array(64)
      function l() {
        this.init(), (this._w = F), r.call(this, 64, 56)
      }
      function a(e, t, n) {
        return n ^ (e & (t ^ n))
      }
      function Q(e, t, n) {
        return (e & t) | (n & (e | t))
      }
      function o(e) {
        return (
          ((e >>> 2) | (e << 30)) ^
          ((e >>> 13) | (e << 19)) ^
          ((e >>> 22) | (e << 10))
        )
      }
      function h(e) {
        return (
          ((e >>> 6) | (e << 26)) ^
          ((e >>> 11) | (e << 21)) ^
          ((e >>> 25) | (e << 7))
        )
      }
      function c(e) {
        return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3)
      }
      U(l, r),
        (l.prototype.init = function() {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          )
        }),
        (l.prototype._update = function(e) {
          for (
            var t,
              n = this._w,
              U = 0 | this._a,
              r = 0 | this._b,
              d = 0 | this._c,
              F = 0 | this._d,
              l = 0 | this._e,
              B = 0 | this._f,
              s = 0 | this._g,
              f = 0 | this._h,
              R = 0;
            R < 16;
            ++R
          )
            n[R] = e.readInt32BE(4 * R)
          for (; R < 64; ++R)
            n[R] =
              0 |
              (((((t = n[R - 2]) >>> 17) | (t << 15)) ^
                ((t >>> 19) | (t << 13)) ^
                (t >>> 10)) +
                n[R - 7] +
                c(n[R - 15]) +
                n[R - 16])
          for (var V = 0; V < 64; ++V) {
            var u = (f + h(l) + a(l, B, s) + i[V] + n[V]) | 0,
              S = (o(U) + Q(U, r, d)) | 0
            ;(f = s),
              (s = B),
              (B = l),
              (l = (F + u) | 0),
              (F = d),
              (d = r),
              (r = U),
              (U = (u + S) | 0)
          }
          ;(this._a = (U + this._a) | 0),
            (this._b = (r + this._b) | 0),
            (this._c = (d + this._c) | 0),
            (this._d = (F + this._d) | 0),
            (this._e = (l + this._e) | 0),
            (this._f = (B + this._f) | 0),
            (this._g = (s + this._g) | 0),
            (this._h = (f + this._h) | 0)
        }),
        (l.prototype._hash = function() {
          var e = d.allocUnsafe(32)
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e.writeInt32BE(this._h, 28),
            e
          )
        }),
        (e.exports = l)
    },
    function(e, t, n) {
      var U = n(0),
        r = n(14),
        d = n(1).Buffer,
        i = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591,
        ],
        F = new Array(160)
      function l() {
        this.init(), (this._w = F), r.call(this, 128, 112)
      }
      function a(e, t, n) {
        return n ^ (e & (t ^ n))
      }
      function Q(e, t, n) {
        return (e & t) | (n & (e | t))
      }
      function o(e, t) {
        return (
          ((e >>> 28) | (t << 4)) ^
          ((t >>> 2) | (e << 30)) ^
          ((t >>> 7) | (e << 25))
        )
      }
      function h(e, t) {
        return (
          ((e >>> 14) | (t << 18)) ^
          ((e >>> 18) | (t << 14)) ^
          ((t >>> 9) | (e << 23))
        )
      }
      function c(e, t) {
        return ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7)
      }
      function B(e, t) {
        return (
          ((e >>> 1) | (t << 31)) ^
          ((e >>> 8) | (t << 24)) ^
          ((e >>> 7) | (t << 25))
        )
      }
      function s(e, t) {
        return ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6)
      }
      function f(e, t) {
        return (
          ((e >>> 19) | (t << 13)) ^
          ((t >>> 29) | (e << 3)) ^
          ((e >>> 6) | (t << 26))
        )
      }
      function R(e, t) {
        return e >>> 0 < t >>> 0 ? 1 : 0
      }
      U(l, r),
        (l.prototype.init = function() {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          )
        }),
        (l.prototype._update = function(e) {
          for (
            var t = this._w,
              n = 0 | this._ah,
              U = 0 | this._bh,
              r = 0 | this._ch,
              d = 0 | this._dh,
              F = 0 | this._eh,
              l = 0 | this._fh,
              V = 0 | this._gh,
              u = 0 | this._hh,
              S = 0 | this._al,
              p = 0 | this._bl,
              W = 0 | this._cl,
              Z = 0 | this._dl,
              J = 0 | this._el,
              b = 0 | this._fl,
              N = 0 | this._gl,
              g = 0 | this._hl,
              m = 0;
            m < 32;
            m += 2
          )
            (t[m] = e.readInt32BE(4 * m)), (t[m + 1] = e.readInt32BE(4 * m + 4))
          for (; m < 160; m += 2) {
            var E = t[m - 30],
              I = t[m - 30 + 1],
              k = c(E, I),
              C = B(I, E),
              T = s((E = t[m - 4]), (I = t[m - 4 + 1])),
              y = f(I, E),
              v = t[m - 14],
              D = t[m - 14 + 1],
              w = t[m - 32],
              M = t[m - 32 + 1],
              G = (C + D) | 0,
              A = (k + v + R(G, C)) | 0
            ;(A =
              ((A = (A + T + R((G = (G + y) | 0), y)) | 0) +
                w +
                R((G = (G + M) | 0), M)) |
              0),
              (t[m] = A),
              (t[m + 1] = G)
          }
          for (var Y = 0; Y < 160; Y += 2) {
            ;(A = t[Y]), (G = t[Y + 1])
            var X = Q(n, U, r),
              H = Q(S, p, W),
              x = o(n, S),
              j = o(S, n),
              O = h(F, J),
              K = h(J, F),
              z = i[Y],
              _ = i[Y + 1],
              L = a(F, l, V),
              P = a(J, b, N),
              q = (g + K) | 0,
              $ = (u + O + R(q, g)) | 0
            $ =
              (($ =
                (($ = ($ + L + R((q = (q + P) | 0), P)) | 0) +
                  z +
                  R((q = (q + _) | 0), _)) |
                0) +
                A +
                R((q = (q + G) | 0), G)) |
              0
            var ee = (j + H) | 0,
              te = (x + X + R(ee, j)) | 0
            ;(u = V),
              (g = N),
              (V = l),
              (N = b),
              (l = F),
              (b = J),
              (F = (d + $ + R((J = (Z + q) | 0), Z)) | 0),
              (d = r),
              (Z = W),
              (r = U),
              (W = p),
              (U = n),
              (p = S),
              (n = ($ + te + R((S = (q + ee) | 0), q)) | 0)
          }
          ;(this._al = (this._al + S) | 0),
            (this._bl = (this._bl + p) | 0),
            (this._cl = (this._cl + W) | 0),
            (this._dl = (this._dl + Z) | 0),
            (this._el = (this._el + J) | 0),
            (this._fl = (this._fl + b) | 0),
            (this._gl = (this._gl + N) | 0),
            (this._hl = (this._hl + g) | 0),
            (this._ah = (this._ah + n + R(this._al, S)) | 0),
            (this._bh = (this._bh + U + R(this._bl, p)) | 0),
            (this._ch = (this._ch + r + R(this._cl, W)) | 0),
            (this._dh = (this._dh + d + R(this._dl, Z)) | 0),
            (this._eh = (this._eh + F + R(this._el, J)) | 0),
            (this._fh = (this._fh + l + R(this._fl, b)) | 0),
            (this._gh = (this._gh + V + R(this._gl, N)) | 0),
            (this._hh = (this._hh + u + R(this._hl, g)) | 0)
        }),
        (l.prototype._hash = function() {
          var e = d.allocUnsafe(64)
          function t(t, n, U) {
            e.writeInt32BE(t, U), e.writeInt32BE(n, U + 4)
          }
          return (
            t(this._ah, this._al, 0),
            t(this._bh, this._bl, 8),
            t(this._ch, this._cl, 16),
            t(this._dh, this._dl, 24),
            t(this._eh, this._el, 32),
            t(this._fh, this._fl, 40),
            t(this._gh, this._gl, 48),
            t(this._hh, this._hl, 56),
            e
          )
        }),
        (e.exports = l)
    },
    function(e, t, n) {
      'use strict'
      var U = n(0),
        r = n(97),
        d = n(10),
        i = n(1).Buffer,
        F = n(51),
        l = n(33),
        a = n(34),
        Q = i.alloc(128)
      function o(e, t) {
        d.call(this, 'digest'), 'string' == typeof t && (t = i.from(t))
        var n = 'sha512' === e || 'sha384' === e ? 128 : 64
        ;(this._alg = e),
          (this._key = t),
          t.length > n
            ? (t = ('rmd160' === e ? new l() : a(e)).update(t).digest())
            : t.length < n && (t = i.concat([t, Q], n))
        for (
          var U = (this._ipad = i.allocUnsafe(n)),
            r = (this._opad = i.allocUnsafe(n)),
            F = 0;
          F < n;
          F++
        )
          (U[F] = 54 ^ t[F]), (r[F] = 92 ^ t[F])
        ;(this._hash = 'rmd160' === e ? new l() : a(e)), this._hash.update(U)
      }
      U(o, d),
        (o.prototype._update = function(e) {
          this._hash.update(e)
        }),
        (o.prototype._final = function() {
          var e = this._hash.digest()
          return ('rmd160' === this._alg ? new l() : a(this._alg))
            .update(this._opad)
            .update(e)
            .digest()
        }),
        (e.exports = function(e, t) {
          return 'rmd160' === (e = e.toLowerCase()) || 'ripemd160' === e
            ? new o('rmd160', t)
            : 'md5' === e
            ? new r(F, t)
            : new o(e, t)
        })
    },
    function(e, t, n) {
      var U = n(27)
      e.exports = function(e) {
        return new U().update(e).digest()
      }
    },
    function(e) {
      e.exports = {
        sha224WithRSAEncryption: {
          sign: 'rsa',
          hash: 'sha224',
          id: '302d300d06096086480165030402040500041c',
        },
        'RSA-SHA224': {
          sign: 'ecdsa/rsa',
          hash: 'sha224',
          id: '302d300d06096086480165030402040500041c',
        },
        sha256WithRSAEncryption: {
          sign: 'rsa',
          hash: 'sha256',
          id: '3031300d060960864801650304020105000420',
        },
        'RSA-SHA256': {
          sign: 'ecdsa/rsa',
          hash: 'sha256',
          id: '3031300d060960864801650304020105000420',
        },
        sha384WithRSAEncryption: {
          sign: 'rsa',
          hash: 'sha384',
          id: '3041300d060960864801650304020205000430',
        },
        'RSA-SHA384': {
          sign: 'ecdsa/rsa',
          hash: 'sha384',
          id: '3041300d060960864801650304020205000430',
        },
        sha512WithRSAEncryption: {
          sign: 'rsa',
          hash: 'sha512',
          id: '3051300d060960864801650304020305000440',
        },
        'RSA-SHA512': {
          sign: 'ecdsa/rsa',
          hash: 'sha512',
          id: '3051300d060960864801650304020305000440',
        },
        'RSA-SHA1': {
          sign: 'rsa',
          hash: 'sha1',
          id: '3021300906052b0e03021a05000414',
        },
        'ecdsa-with-SHA1': { sign: 'ecdsa', hash: 'sha1', id: '' },
        sha256: { sign: 'ecdsa', hash: 'sha256', id: '' },
        sha224: { sign: 'ecdsa', hash: 'sha224', id: '' },
        sha384: { sign: 'ecdsa', hash: 'sha384', id: '' },
        sha512: { sign: 'ecdsa', hash: 'sha512', id: '' },
        'DSA-SHA': { sign: 'dsa', hash: 'sha1', id: '' },
        'DSA-SHA1': { sign: 'dsa', hash: 'sha1', id: '' },
        DSA: { sign: 'dsa', hash: 'sha1', id: '' },
        'DSA-WITH-SHA224': { sign: 'dsa', hash: 'sha224', id: '' },
        'DSA-SHA224': { sign: 'dsa', hash: 'sha224', id: '' },
        'DSA-WITH-SHA256': { sign: 'dsa', hash: 'sha256', id: '' },
        'DSA-SHA256': { sign: 'dsa', hash: 'sha256', id: '' },
        'DSA-WITH-SHA384': { sign: 'dsa', hash: 'sha384', id: '' },
        'DSA-SHA384': { sign: 'dsa', hash: 'sha384', id: '' },
        'DSA-WITH-SHA512': { sign: 'dsa', hash: 'sha512', id: '' },
        'DSA-SHA512': { sign: 'dsa', hash: 'sha512', id: '' },
        'DSA-RIPEMD160': { sign: 'dsa', hash: 'rmd160', id: '' },
        ripemd160WithRSA: {
          sign: 'rsa',
          hash: 'rmd160',
          id: '3021300906052b2403020105000414',
        },
        'RSA-RIPEMD160': {
          sign: 'rsa',
          hash: 'rmd160',
          id: '3021300906052b2403020105000414',
        },
        md5WithRSAEncryption: {
          sign: 'rsa',
          hash: 'md5',
          id: '3020300c06082a864886f70d020505000410',
        },
        'RSA-MD5': {
          sign: 'rsa',
          hash: 'md5',
          id: '3020300c06082a864886f70d020505000410',
        },
      }
    },
    function(e, t, n) {
      ;(t.pbkdf2 = n(99)), (t.pbkdf2Sync = n(56))
    },
    function(e, t, n) {
      ;(function(t) {
        var n = Math.pow(2, 30) - 1
        function U(e, n) {
          if ('string' != typeof e && !t.isBuffer(e))
            throw new TypeError(n + ' must be a buffer or string')
        }
        e.exports = function(e, t, r, d) {
          if ((U(e, 'Password'), U(t, 'Salt'), 'number' != typeof r))
            throw new TypeError('Iterations not a number')
          if (r < 0) throw new TypeError('Bad iterations')
          if ('number' != typeof d)
            throw new TypeError('Key length not a number')
          if (d < 0 || d > n || d != d) throw new TypeError('Bad key length')
        }
      }.call(this, n(3).Buffer))
    },
    function(e, t, n) {
      ;(function(t) {
        var n
        ;(n = t.browser
          ? 'utf-8'
          : parseInt(t.version.split('.')[0].slice(1), 10) >= 6
          ? 'utf-8'
          : 'binary'),
          (e.exports = n)
      }.call(this, n(9)))
    },
    function(e, t, n) {
      var U = n(51),
        r = n(33),
        d = n(34),
        i = n(54),
        F = n(55),
        l = n(1).Buffer,
        a = l.alloc(128),
        Q = {
          md5: 16,
          sha1: 20,
          sha224: 28,
          sha256: 32,
          sha384: 48,
          sha512: 64,
          rmd160: 20,
          ripemd160: 20,
        }
      function o(e, t, n) {
        var i = (function(e) {
            return 'rmd160' === e || 'ripemd160' === e
              ? function(e) {
                  return new r().update(e).digest()
                }
              : 'md5' === e
              ? U
              : function(t) {
                  return d(e)
                    .update(t)
                    .digest()
                }
          })(e),
          F = 'sha512' === e || 'sha384' === e ? 128 : 64
        t.length > F ? (t = i(t)) : t.length < F && (t = l.concat([t, a], F))
        for (
          var o = l.allocUnsafe(F + Q[e]), h = l.allocUnsafe(F + Q[e]), c = 0;
          c < F;
          c++
        )
          (o[c] = 54 ^ t[c]), (h[c] = 92 ^ t[c])
        var B = l.allocUnsafe(F + n + 4)
        o.copy(B, 0, 0, F),
          (this.ipad1 = B),
          (this.ipad2 = o),
          (this.opad = h),
          (this.alg = e),
          (this.blocksize = F),
          (this.hash = i),
          (this.size = Q[e])
      }
      ;(o.prototype.run = function(e, t) {
        return (
          e.copy(t, this.blocksize),
          this.hash(t).copy(this.opad, this.blocksize),
          this.hash(this.opad)
        )
      }),
        (e.exports = function(e, t, n, U, r) {
          i(e, t, n, U),
            l.isBuffer(e) || (e = l.from(e, F)),
            l.isBuffer(t) || (t = l.from(t, F))
          var d = new o((r = r || 'sha1'), e, t.length),
            a = l.allocUnsafe(U),
            h = l.allocUnsafe(t.length + 4)
          t.copy(h, 0, 0, t.length)
          for (var c = 0, B = Q[r], s = Math.ceil(U / B), f = 1; f <= s; f++) {
            h.writeUInt32BE(f, t.length)
            for (var R = d.run(h, d.ipad1), V = R, u = 1; u < n; u++) {
              V = d.run(V, d.ipad2)
              for (var S = 0; S < B; S++) R[S] ^= V[S]
            }
            R.copy(a, c), (c += B)
          }
          return a
        })
    },
    function(e, t, n) {
      var U = n(17),
        r = n(1).Buffer,
        d = n(58)
      function i(e) {
        var t = e._cipher.encryptBlockRaw(e._prev)
        return d(e._prev), t
      }
      t.encrypt = function(e, t) {
        var n = Math.ceil(t.length / 16),
          d = e._cache.length
        e._cache = r.concat([e._cache, r.allocUnsafe(16 * n)])
        for (var F = 0; F < n; F++) {
          var l = i(e),
            a = d + 16 * F
          e._cache.writeUInt32BE(l[0], a + 0),
            e._cache.writeUInt32BE(l[1], a + 4),
            e._cache.writeUInt32BE(l[2], a + 8),
            e._cache.writeUInt32BE(l[3], a + 12)
        }
        var Q = e._cache.slice(0, t.length)
        return (e._cache = e._cache.slice(t.length)), U(t, Q)
      }
    },
    function(e, t) {
      e.exports = function(e) {
        for (var t, n = e.length; n--; ) {
          if (255 !== (t = e.readUInt8(n))) {
            t++, e.writeUInt8(t, n)
            break
          }
          e.writeUInt8(0, n)
        }
      }
    },
    function(e) {
      e.exports = {
        'aes-128-ecb': {
          cipher: 'AES',
          key: 128,
          iv: 0,
          mode: 'ECB',
          type: 'block',
        },
        'aes-192-ecb': {
          cipher: 'AES',
          key: 192,
          iv: 0,
          mode: 'ECB',
          type: 'block',
        },
        'aes-256-ecb': {
          cipher: 'AES',
          key: 256,
          iv: 0,
          mode: 'ECB',
          type: 'block',
        },
        'aes-128-cbc': {
          cipher: 'AES',
          key: 128,
          iv: 16,
          mode: 'CBC',
          type: 'block',
        },
        'aes-192-cbc': {
          cipher: 'AES',
          key: 192,
          iv: 16,
          mode: 'CBC',
          type: 'block',
        },
        'aes-256-cbc': {
          cipher: 'AES',
          key: 256,
          iv: 16,
          mode: 'CBC',
          type: 'block',
        },
        aes128: { cipher: 'AES', key: 128, iv: 16, mode: 'CBC', type: 'block' },
        aes192: { cipher: 'AES', key: 192, iv: 16, mode: 'CBC', type: 'block' },
        aes256: { cipher: 'AES', key: 256, iv: 16, mode: 'CBC', type: 'block' },
        'aes-128-cfb': {
          cipher: 'AES',
          key: 128,
          iv: 16,
          mode: 'CFB',
          type: 'stream',
        },
        'aes-192-cfb': {
          cipher: 'AES',
          key: 192,
          iv: 16,
          mode: 'CFB',
          type: 'stream',
        },
        'aes-256-cfb': {
          cipher: 'AES',
          key: 256,
          iv: 16,
          mode: 'CFB',
          type: 'stream',
        },
        'aes-128-cfb8': {
          cipher: 'AES',
          key: 128,
          iv: 16,
          mode: 'CFB8',
          type: 'stream',
        },
        'aes-192-cfb8': {
          cipher: 'AES',
          key: 192,
          iv: 16,
          mode: 'CFB8',
          type: 'stream',
        },
        'aes-256-cfb8': {
          cipher: 'AES',
          key: 256,
          iv: 16,
          mode: 'CFB8',
          type: 'stream',
        },
        'aes-128-cfb1': {
          cipher: 'AES',
          key: 128,
          iv: 16,
          mode: 'CFB1',
          type: 'stream',
        },
        'aes-192-cfb1': {
          cipher: 'AES',
          key: 192,
          iv: 16,
          mode: 'CFB1',
          type: 'stream',
        },
        'aes-256-cfb1': {
          cipher: 'AES',
          key: 256,
          iv: 16,
          mode: 'CFB1',
          type: 'stream',
        },
        'aes-128-ofb': {
          cipher: 'AES',
          key: 128,
          iv: 16,
          mode: 'OFB',
          type: 'stream',
        },
        'aes-192-ofb': {
          cipher: 'AES',
          key: 192,
          iv: 16,
          mode: 'OFB',
          type: 'stream',
        },
        'aes-256-ofb': {
          cipher: 'AES',
          key: 256,
          iv: 16,
          mode: 'OFB',
          type: 'stream',
        },
        'aes-128-ctr': {
          cipher: 'AES',
          key: 128,
          iv: 16,
          mode: 'CTR',
          type: 'stream',
        },
        'aes-192-ctr': {
          cipher: 'AES',
          key: 192,
          iv: 16,
          mode: 'CTR',
          type: 'stream',
        },
        'aes-256-ctr': {
          cipher: 'AES',
          key: 256,
          iv: 16,
          mode: 'CTR',
          type: 'stream',
        },
        'aes-128-gcm': {
          cipher: 'AES',
          key: 128,
          iv: 12,
          mode: 'GCM',
          type: 'auth',
        },
        'aes-192-gcm': {
          cipher: 'AES',
          key: 192,
          iv: 12,
          mode: 'GCM',
          type: 'auth',
        },
        'aes-256-gcm': {
          cipher: 'AES',
          key: 256,
          iv: 12,
          mode: 'GCM',
          type: 'auth',
        },
      }
    },
    function(e, t, n) {
      var U = n(22),
        r = n(1).Buffer,
        d = n(10),
        i = n(0),
        F = n(114),
        l = n(17),
        a = n(58)
      function Q(e, t, n, i) {
        d.call(this)
        var l = r.alloc(4, 0)
        this._cipher = new U.AES(t)
        var Q = this._cipher.encryptBlock(l)
        ;(this._ghash = new F(Q)),
          (n = (function(e, t, n) {
            if (12 === t.length)
              return (
                (e._finID = r.concat([t, r.from([0, 0, 0, 1])])),
                r.concat([t, r.from([0, 0, 0, 2])])
              )
            var U = new F(n),
              d = t.length,
              i = d % 16
            U.update(t),
              i && ((i = 16 - i), U.update(r.alloc(i, 0))),
              U.update(r.alloc(8, 0))
            var l = 8 * d,
              Q = r.alloc(8)
            Q.writeUIntBE(l, 0, 8), U.update(Q), (e._finID = U.state)
            var o = r.from(e._finID)
            return a(o), o
          })(this, n, Q)),
          (this._prev = r.from(n)),
          (this._cache = r.allocUnsafe(0)),
          (this._secCache = r.allocUnsafe(0)),
          (this._decrypt = i),
          (this._alen = 0),
          (this._len = 0),
          (this._mode = e),
          (this._authTag = null),
          (this._called = !1)
      }
      i(Q, d),
        (Q.prototype._update = function(e) {
          if (!this._called && this._alen) {
            var t = 16 - (this._alen % 16)
            t < 16 && ((t = r.alloc(t, 0)), this._ghash.update(t))
          }
          this._called = !0
          var n = this._mode.encrypt(this, e)
          return (
            this._decrypt ? this._ghash.update(e) : this._ghash.update(n),
            (this._len += e.length),
            n
          )
        }),
        (Q.prototype._final = function() {
          if (this._decrypt && !this._authTag)
            throw new Error('Unsupported state or unable to authenticate data')
          var e = l(
            this._ghash.final(8 * this._alen, 8 * this._len),
            this._cipher.encryptBlock(this._finID)
          )
          if (
            this._decrypt &&
            (function(e, t) {
              var n = 0
              e.length !== t.length && n++
              for (var U = Math.min(e.length, t.length), r = 0; r < U; ++r)
                n += e[r] ^ t[r]
              return n
            })(e, this._authTag)
          )
            throw new Error('Unsupported state or unable to authenticate data')
          ;(this._authTag = e), this._cipher.scrub()
        }),
        (Q.prototype.getAuthTag = function() {
          if (this._decrypt || !r.isBuffer(this._authTag))
            throw new Error('Attempting to get auth tag in unsupported state')
          return this._authTag
        }),
        (Q.prototype.setAuthTag = function(e) {
          if (!this._decrypt)
            throw new Error('Attempting to set auth tag in unsupported state')
          this._authTag = e
        }),
        (Q.prototype.setAAD = function(e) {
          if (this._called)
            throw new Error('Attempting to set AAD in unsupported state')
          this._ghash.update(e), (this._alen += e.length)
        }),
        (e.exports = Q)
    },
    function(e, t, n) {
      var U = n(22),
        r = n(1).Buffer,
        d = n(10)
      function i(e, t, n, i) {
        d.call(this),
          (this._cipher = new U.AES(t)),
          (this._prev = r.from(n)),
          (this._cache = r.allocUnsafe(0)),
          (this._secCache = r.allocUnsafe(0)),
          (this._decrypt = i),
          (this._mode = e)
      }
      n(0)(i, d),
        (i.prototype._update = function(e) {
          return this._mode.encrypt(this, e, this._decrypt)
        }),
        (i.prototype._final = function() {
          this._cipher.scrub()
        }),
        (e.exports = i)
    },
    function(e, t, n) {
      var U = n(13)
      ;(e.exports = V), (V.simpleSieve = f), (V.fermatTest = R)
      var r = n(2),
        d = new r(24),
        i = new (n(63))(),
        F = new r(1),
        l = new r(2),
        a = new r(5),
        Q = (new r(16), new r(8), new r(10)),
        o = new r(3),
        h = (new r(7), new r(11)),
        c = new r(4),
        B = (new r(12), null)
      function s() {
        if (null !== B) return B
        var e = []
        e[0] = 2
        for (var t = 1, n = 3; n < 1048576; n += 2) {
          for (
            var U = Math.ceil(Math.sqrt(n)), r = 0;
            r < t && e[r] <= U && n % e[r] != 0;
            r++
          );
          ;(t !== r && e[r] <= U) || (e[t++] = n)
        }
        return (B = e), e
      }
      function f(e) {
        for (var t = s(), n = 0; n < t.length; n++)
          if (0 === e.modn(t[n])) return 0 === e.cmpn(t[n])
        return !0
      }
      function R(e) {
        var t = r.mont(e)
        return (
          0 ===
          l
            .toRed(t)
            .redPow(e.subn(1))
            .fromRed()
            .cmpn(1)
        )
      }
      function V(e, t) {
        if (e < 16) return new r(2 === t || 5 === t ? [140, 123] : [140, 39])
        var n, B
        for (t = new r(t); ; ) {
          for (n = new r(U(Math.ceil(e / 8))); n.bitLength() > e; ) n.ishrn(1)
          if ((n.isEven() && n.iadd(F), n.testn(1) || n.iadd(l), t.cmp(l))) {
            if (!t.cmp(a)) for (; n.mod(Q).cmp(o); ) n.iadd(c)
          } else for (; n.mod(d).cmp(h); ) n.iadd(c)
          if (
            f((B = n.shrn(1))) &&
            f(n) &&
            R(B) &&
            R(n) &&
            i.test(B) &&
            i.test(n)
          )
            return n
        }
      }
    },
    function(e, t, n) {
      var U = n(2),
        r = n(64)
      function d(e) {
        this.rand = e || new r.Rand()
      }
      ;(e.exports = d),
        (d.create = function(e) {
          return new d(e)
        }),
        (d.prototype._randbelow = function(e) {
          var t = e.bitLength(),
            n = Math.ceil(t / 8)
          do {
            var r = new U(this.rand.generate(n))
          } while (r.cmp(e) >= 0)
          return r
        }),
        (d.prototype._randrange = function(e, t) {
          var n = t.sub(e)
          return e.add(this._randbelow(n))
        }),
        (d.prototype.test = function(e, t, n) {
          var r = e.bitLength(),
            d = U.mont(e),
            i = new U(1).toRed(d)
          t || (t = Math.max(1, (r / 48) | 0))
          for (var F = e.subn(1), l = 0; !F.testn(l); l++);
          for (var a = e.shrn(l), Q = F.toRed(d); t > 0; t--) {
            var o = this._randrange(new U(2), F)
            n && n(o)
            var h = o.toRed(d).redPow(a)
            if (0 !== h.cmp(i) && 0 !== h.cmp(Q)) {
              for (var c = 1; c < l; c++) {
                if (0 === (h = h.redSqr()).cmp(i)) return !1
                if (0 === h.cmp(Q)) break
              }
              if (c === l) return !1
            }
          }
          return !0
        }),
        (d.prototype.getDivisor = function(e, t) {
          var n = e.bitLength(),
            r = U.mont(e),
            d = new U(1).toRed(r)
          t || (t = Math.max(1, (n / 48) | 0))
          for (var i = e.subn(1), F = 0; !i.testn(F); F++);
          for (var l = e.shrn(F), a = i.toRed(r); t > 0; t--) {
            var Q = this._randrange(new U(2), i),
              o = e.gcd(Q)
            if (0 !== o.cmpn(1)) return o
            var h = Q.toRed(r).redPow(l)
            if (0 !== h.cmp(d) && 0 !== h.cmp(a)) {
              for (var c = 1; c < F; c++) {
                if (0 === (h = h.redSqr()).cmp(d))
                  return h
                    .fromRed()
                    .subn(1)
                    .gcd(e)
                if (0 === h.cmp(a)) break
              }
              if (c === F)
                return (h = h.redSqr())
                  .fromRed()
                  .subn(1)
                  .gcd(e)
            }
          }
          return !1
        })
    },
    function(e, t, n) {
      var U
      function r(e) {
        this.rand = e
      }
      if (
        ((e.exports = function(e) {
          return U || (U = new r(null)), U.generate(e)
        }),
        (e.exports.Rand = r),
        (r.prototype.generate = function(e) {
          return this._rand(e)
        }),
        (r.prototype._rand = function(e) {
          if (this.rand.getBytes) return this.rand.getBytes(e)
          for (var t = new Uint8Array(e), n = 0; n < t.length; n++)
            t[n] = this.rand.getByte()
          return t
        }),
        'object' == typeof self)
      )
        self.crypto && self.crypto.getRandomValues
          ? (r.prototype._rand = function(e) {
              var t = new Uint8Array(e)
              return self.crypto.getRandomValues(t), t
            })
          : self.msCrypto && self.msCrypto.getRandomValues
          ? (r.prototype._rand = function(e) {
              var t = new Uint8Array(e)
              return self.msCrypto.getRandomValues(t), t
            })
          : 'object' == typeof window &&
            (r.prototype._rand = function() {
              throw new Error('Not implemented yet')
            })
      else
        try {
          var d = n(120)
          if ('function' != typeof d.randomBytes)
            throw new Error('Not supported')
          r.prototype._rand = function(e) {
            return d.randomBytes(e)
          }
        } catch (e) {}
    },
    function(e, t, n) {
      'use strict'
      var U = t
      function r(e) {
        return 1 === e.length ? '0' + e : e
      }
      function d(e) {
        for (var t = '', n = 0; n < e.length; n++) t += r(e[n].toString(16))
        return t
      }
      ;(U.toArray = function(e, t) {
        if (Array.isArray(e)) return e.slice()
        if (!e) return []
        var n = []
        if ('string' != typeof e) {
          for (var U = 0; U < e.length; U++) n[U] = 0 | e[U]
          return n
        }
        if ('hex' === t)
          for (
            (e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 &&
              (e = '0' + e),
              U = 0;
            U < e.length;
            U += 2
          )
            n.push(parseInt(e[U] + e[U + 1], 16))
        else
          for (U = 0; U < e.length; U++) {
            var r = e.charCodeAt(U),
              d = r >> 8,
              i = 255 & r
            d ? n.push(d, i) : n.push(i)
          }
        return n
      }),
        (U.zero2 = r),
        (U.toHex = d),
        (U.encode = function(e, t) {
          return 'hex' === t ? d(e) : e
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(7).rotr32
      function r(e, t, n) {
        return (e & t) ^ (~e & n)
      }
      function d(e, t, n) {
        return (e & t) ^ (e & n) ^ (t & n)
      }
      function i(e, t, n) {
        return e ^ t ^ n
      }
      ;(t.ft_1 = function(e, t, n, U) {
        return 0 === e
          ? r(t, n, U)
          : 1 === e || 3 === e
          ? i(t, n, U)
          : 2 === e
          ? d(t, n, U)
          : void 0
      }),
        (t.ch32 = r),
        (t.maj32 = d),
        (t.p32 = i),
        (t.s0_256 = function(e) {
          return U(e, 2) ^ U(e, 13) ^ U(e, 22)
        }),
        (t.s1_256 = function(e) {
          return U(e, 6) ^ U(e, 11) ^ U(e, 25)
        }),
        (t.g0_256 = function(e) {
          return U(e, 7) ^ U(e, 18) ^ (e >>> 3)
        }),
        (t.g1_256 = function(e) {
          return U(e, 17) ^ U(e, 19) ^ (e >>> 10)
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(7),
        r = n(18),
        d = n(66),
        i = n(6),
        F = U.sum32,
        l = U.sum32_4,
        a = U.sum32_5,
        Q = d.ch32,
        o = d.maj32,
        h = d.s0_256,
        c = d.s1_256,
        B = d.g0_256,
        s = d.g1_256,
        f = r.BlockHash,
        R = [
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298,
        ]
      function V() {
        if (!(this instanceof V)) return new V()
        f.call(this),
          (this.h = [
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225,
          ]),
          (this.k = R),
          (this.W = new Array(64))
      }
      U.inherits(V, f),
        (e.exports = V),
        (V.blockSize = 512),
        (V.outSize = 256),
        (V.hmacStrength = 192),
        (V.padLength = 64),
        (V.prototype._update = function(e, t) {
          for (var n = this.W, U = 0; U < 16; U++) n[U] = e[t + U]
          for (; U < n.length; U++)
            n[U] = l(s(n[U - 2]), n[U - 7], B(n[U - 15]), n[U - 16])
          var r = this.h[0],
            d = this.h[1],
            f = this.h[2],
            R = this.h[3],
            V = this.h[4],
            u = this.h[5],
            S = this.h[6],
            p = this.h[7]
          for (i(this.k.length === n.length), U = 0; U < n.length; U++) {
            var W = a(p, c(V), Q(V, u, S), this.k[U], n[U]),
              Z = F(h(r), o(r, d, f))
            ;(p = S),
              (S = u),
              (u = V),
              (V = F(R, W)),
              (R = f),
              (f = d),
              (d = r),
              (r = F(W, Z))
          }
          ;(this.h[0] = F(this.h[0], r)),
            (this.h[1] = F(this.h[1], d)),
            (this.h[2] = F(this.h[2], f)),
            (this.h[3] = F(this.h[3], R)),
            (this.h[4] = F(this.h[4], V)),
            (this.h[5] = F(this.h[5], u)),
            (this.h[6] = F(this.h[6], S)),
            (this.h[7] = F(this.h[7], p))
        }),
        (V.prototype._digest = function(e) {
          return 'hex' === e
            ? U.toHex32(this.h, 'big')
            : U.split32(this.h, 'big')
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(7),
        r = n(18),
        d = n(6),
        i = U.rotr64_hi,
        F = U.rotr64_lo,
        l = U.shr64_hi,
        a = U.shr64_lo,
        Q = U.sum64,
        o = U.sum64_hi,
        h = U.sum64_lo,
        c = U.sum64_4_hi,
        B = U.sum64_4_lo,
        s = U.sum64_5_hi,
        f = U.sum64_5_lo,
        R = r.BlockHash,
        V = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591,
        ]
      function u() {
        if (!(this instanceof u)) return new u()
        R.call(this),
          (this.h = [
            1779033703,
            4089235720,
            3144134277,
            2227873595,
            1013904242,
            4271175723,
            2773480762,
            1595750129,
            1359893119,
            2917565137,
            2600822924,
            725511199,
            528734635,
            4215389547,
            1541459225,
            327033209,
          ]),
          (this.k = V),
          (this.W = new Array(160))
      }
      function S(e, t, n, U, r) {
        var d = (e & n) ^ (~e & r)
        return d < 0 && (d += 4294967296), d
      }
      function p(e, t, n, U, r, d) {
        var i = (t & U) ^ (~t & d)
        return i < 0 && (i += 4294967296), i
      }
      function W(e, t, n, U, r) {
        var d = (e & n) ^ (e & r) ^ (n & r)
        return d < 0 && (d += 4294967296), d
      }
      function Z(e, t, n, U, r, d) {
        var i = (t & U) ^ (t & d) ^ (U & d)
        return i < 0 && (i += 4294967296), i
      }
      function J(e, t) {
        var n = i(e, t, 28) ^ i(t, e, 2) ^ i(t, e, 7)
        return n < 0 && (n += 4294967296), n
      }
      function b(e, t) {
        var n = F(e, t, 28) ^ F(t, e, 2) ^ F(t, e, 7)
        return n < 0 && (n += 4294967296), n
      }
      function N(e, t) {
        var n = F(e, t, 14) ^ F(e, t, 18) ^ F(t, e, 9)
        return n < 0 && (n += 4294967296), n
      }
      function g(e, t) {
        var n = i(e, t, 1) ^ i(e, t, 8) ^ l(e, t, 7)
        return n < 0 && (n += 4294967296), n
      }
      function m(e, t) {
        var n = F(e, t, 1) ^ F(e, t, 8) ^ a(e, t, 7)
        return n < 0 && (n += 4294967296), n
      }
      function E(e, t) {
        var n = F(e, t, 19) ^ F(t, e, 29) ^ a(e, t, 6)
        return n < 0 && (n += 4294967296), n
      }
      U.inherits(u, R),
        (e.exports = u),
        (u.blockSize = 1024),
        (u.outSize = 512),
        (u.hmacStrength = 192),
        (u.padLength = 128),
        (u.prototype._prepareBlock = function(e, t) {
          for (var n = this.W, U = 0; U < 32; U++) n[U] = e[t + U]
          for (; U < n.length; U += 2) {
            var r = ((f = n[U - 4]),
              (R = n[U - 3]),
              (V = void 0),
              (V = i(f, R, 19) ^ i(R, f, 29) ^ l(f, R, 6)) < 0 &&
                (V += 4294967296),
              V),
              d = E(n[U - 4], n[U - 3]),
              F = n[U - 14],
              a = n[U - 13],
              Q = g(n[U - 30], n[U - 29]),
              o = m(n[U - 30], n[U - 29]),
              h = n[U - 32],
              s = n[U - 31]
            ;(n[U] = c(r, d, F, a, Q, o, h, s)),
              (n[U + 1] = B(r, d, F, a, Q, o, h, s))
          }
          var f, R, V
        }),
        (u.prototype._update = function(e, t) {
          this._prepareBlock(e, t)
          var n,
            U,
            r,
            F = this.W,
            l = this.h[0],
            a = this.h[1],
            c = this.h[2],
            B = this.h[3],
            R = this.h[4],
            V = this.h[5],
            u = this.h[6],
            g = this.h[7],
            m = this.h[8],
            E = this.h[9],
            I = this.h[10],
            k = this.h[11],
            C = this.h[12],
            T = this.h[13],
            y = this.h[14],
            v = this.h[15]
          d(this.k.length === F.length)
          for (var D = 0; D < F.length; D += 2) {
            var w = y,
              M = v,
              G = ((r = void 0),
              (r = i((n = m), (U = E), 14) ^ i(n, U, 18) ^ i(U, n, 9)) < 0 &&
                (r += 4294967296),
              r),
              A = N(m, E),
              Y = S(m, 0, I, 0, C),
              X = p(0, E, 0, k, 0, T),
              H = this.k[D],
              x = this.k[D + 1],
              j = F[D],
              O = F[D + 1],
              K = s(w, M, G, A, Y, X, H, x, j, O),
              z = f(w, M, G, A, Y, X, H, x, j, O)
            ;(w = J(l, a)),
              (M = b(l, a)),
              (G = W(l, 0, c, 0, R)),
              (A = Z(0, a, 0, B, 0, V))
            var _ = o(w, M, G, A),
              L = h(w, M, G, A)
            ;(y = C),
              (v = T),
              (C = I),
              (T = k),
              (I = m),
              (k = E),
              (m = o(u, g, K, z)),
              (E = h(g, g, K, z)),
              (u = R),
              (g = V),
              (R = c),
              (V = B),
              (c = l),
              (B = a),
              (l = o(K, z, _, L)),
              (a = h(K, z, _, L))
          }
          Q(this.h, 0, l, a),
            Q(this.h, 2, c, B),
            Q(this.h, 4, R, V),
            Q(this.h, 6, u, g),
            Q(this.h, 8, m, E),
            Q(this.h, 10, I, k),
            Q(this.h, 12, C, T),
            Q(this.h, 14, y, v)
        }),
        (u.prototype._digest = function(e) {
          return 'hex' === e
            ? U.toHex32(this.h, 'big')
            : U.split32(this.h, 'big')
        })
    },
    function(e, t, n) {
      var U = n(0),
        r = n(20).Reporter,
        d = n(3).Buffer
      function i(e, t) {
        r.call(this, t),
          d.isBuffer(e)
            ? ((this.base = e), (this.offset = 0), (this.length = e.length))
            : this.error('Input not Buffer')
      }
      function F(e, t) {
        if (Array.isArray(e))
          (this.length = 0),
            (this.value = e.map(function(e) {
              return (
                e instanceof F || (e = new F(e, t)),
                (this.length += e.length),
                e
              )
            }, this))
        else if ('number' == typeof e) {
          if (!(0 <= e && e <= 255))
            return t.error('non-byte EncoderBuffer value')
          ;(this.value = e), (this.length = 1)
        } else if ('string' == typeof e)
          (this.value = e), (this.length = d.byteLength(e))
        else {
          if (!d.isBuffer(e)) return t.error('Unsupported type: ' + typeof e)
          ;(this.value = e), (this.length = e.length)
        }
      }
      U(i, r),
        (t.DecoderBuffer = i),
        (i.prototype.save = function() {
          return { offset: this.offset, reporter: r.prototype.save.call(this) }
        }),
        (i.prototype.restore = function(e) {
          var t = new i(this.base)
          return (
            (t.offset = e.offset),
            (t.length = this.offset),
            (this.offset = e.offset),
            r.prototype.restore.call(this, e.reporter),
            t
          )
        }),
        (i.prototype.isEmpty = function() {
          return this.offset === this.length
        }),
        (i.prototype.readUInt8 = function(e) {
          return this.offset + 1 <= this.length
            ? this.base.readUInt8(this.offset++, !0)
            : this.error(e || 'DecoderBuffer overrun')
        }),
        (i.prototype.skip = function(e, t) {
          if (!(this.offset + e <= this.length))
            return this.error(t || 'DecoderBuffer overrun')
          var n = new i(this.base)
          return (
            (n._reporterState = this._reporterState),
            (n.offset = this.offset),
            (n.length = this.offset + e),
            (this.offset += e),
            n
          )
        }),
        (i.prototype.raw = function(e) {
          return this.base.slice(e ? e.offset : this.offset, this.length)
        }),
        (t.EncoderBuffer = F),
        (F.prototype.join = function(e, t) {
          return (
            e || (e = new d(this.length)),
            t || (t = 0),
            0 === this.length
              ? e
              : (Array.isArray(this.value)
                  ? this.value.forEach(function(n) {
                      n.join(e, t), (t += n.length)
                    })
                  : ('number' == typeof this.value
                      ? (e[t] = this.value)
                      : 'string' == typeof this.value
                      ? e.write(this.value, t)
                      : d.isBuffer(this.value) && this.value.copy(e, t),
                    (t += this.length)),
                e)
          )
        })
    },
    function(e, t, n) {
      var U = t
      ;(U._reverse = function(e) {
        var t = {}
        return (
          Object.keys(e).forEach(function(n) {
            ;(0 | n) == n && (n |= 0)
            var U = e[n]
            t[U] = n
          }),
          t
        )
      }),
        (U.der = n(152))
    },
    function(e, t, n) {
      var U = n(0),
        r = n(19),
        d = r.base,
        i = r.bignum,
        F = r.constants.der
      function l(e) {
        ;(this.enc = 'der'),
          (this.name = e.name),
          (this.entity = e),
          (this.tree = new a()),
          this.tree._init(e.body)
      }
      function a(e) {
        d.Node.call(this, 'der', e)
      }
      function Q(e, t) {
        var n = e.readUInt8(t)
        if (e.isError(n)) return n
        var U = F.tagClass[n >> 6],
          r = 0 == (32 & n)
        if (31 == (31 & n)) {
          var d = n
          for (n = 0; 128 == (128 & d); ) {
            if (((d = e.readUInt8(t)), e.isError(d))) return d
            ;(n <<= 7), (n |= 127 & d)
          }
        } else n &= 31
        return { cls: U, primitive: r, tag: n, tagStr: F.tag[n] }
      }
      function o(e, t, n) {
        var U = e.readUInt8(n)
        if (e.isError(U)) return U
        if (!t && 128 === U) return null
        if (0 == (128 & U)) return U
        var r = 127 & U
        if (r > 4) return e.error('length octect is too long')
        U = 0
        for (var d = 0; d < r; d++) {
          U <<= 8
          var i = e.readUInt8(n)
          if (e.isError(i)) return i
          U |= i
        }
        return U
      }
      ;(e.exports = l),
        (l.prototype.decode = function(e, t) {
          return (
            e instanceof d.DecoderBuffer || (e = new d.DecoderBuffer(e, t)),
            this.tree._decode(e, t)
          )
        }),
        U(a, d.Node),
        (a.prototype._peekTag = function(e, t, n) {
          if (e.isEmpty()) return !1
          var U = e.save(),
            r = Q(e, 'Failed to peek tag: "' + t + '"')
          return e.isError(r)
            ? r
            : (e.restore(U),
              r.tag === t || r.tagStr === t || r.tagStr + 'of' === t || n)
        }),
        (a.prototype._decodeTag = function(e, t, n) {
          var U = Q(e, 'Failed to decode tag of "' + t + '"')
          if (e.isError(U)) return U
          var r = o(e, U.primitive, 'Failed to get length of "' + t + '"')
          if (e.isError(r)) return r
          if (!n && U.tag !== t && U.tagStr !== t && U.tagStr + 'of' !== t)
            return e.error('Failed to match tag: "' + t + '"')
          if (U.primitive || null !== r)
            return e.skip(r, 'Failed to match body of: "' + t + '"')
          var d = e.save(),
            i = this._skipUntilEnd(
              e,
              'Failed to skip indefinite length body: "' + this.tag + '"'
            )
          return e.isError(i)
            ? i
            : ((r = e.offset - d.offset),
              e.restore(d),
              e.skip(r, 'Failed to match body of: "' + t + '"'))
        }),
        (a.prototype._skipUntilEnd = function(e, t) {
          for (;;) {
            var n = Q(e, t)
            if (e.isError(n)) return n
            var U,
              r = o(e, n.primitive, t)
            if (e.isError(r)) return r
            if (
              ((U =
                n.primitive || null !== r
                  ? e.skip(r)
                  : this._skipUntilEnd(e, t)),
              e.isError(U))
            )
              return U
            if ('end' === n.tagStr) break
          }
        }),
        (a.prototype._decodeList = function(e, t, n, U) {
          for (var r = []; !e.isEmpty(); ) {
            var d = this._peekTag(e, 'end')
            if (e.isError(d)) return d
            var i = n.decode(e, 'der', U)
            if (e.isError(i) && d) break
            r.push(i)
          }
          return r
        }),
        (a.prototype._decodeStr = function(e, t) {
          if ('bitstr' === t) {
            var n = e.readUInt8()
            return e.isError(n) ? n : { unused: n, data: e.raw() }
          }
          if ('bmpstr' === t) {
            var U = e.raw()
            if (U.length % 2 == 1)
              return e.error('Decoding of string type: bmpstr length mismatch')
            for (var r = '', d = 0; d < U.length / 2; d++)
              r += String.fromCharCode(U.readUInt16BE(2 * d))
            return r
          }
          if ('numstr' === t) {
            var i = e.raw().toString('ascii')
            return this._isNumstr(i)
              ? i
              : e.error(
                  'Decoding of string type: numstr unsupported characters'
                )
          }
          if ('octstr' === t) return e.raw()
          if ('objDesc' === t) return e.raw()
          if ('printstr' === t) {
            var F = e.raw().toString('ascii')
            return this._isPrintstr(F)
              ? F
              : e.error(
                  'Decoding of string type: printstr unsupported characters'
                )
          }
          return /str$/.test(t)
            ? e.raw().toString()
            : e.error('Decoding of string type: ' + t + ' unsupported')
        }),
        (a.prototype._decodeObjid = function(e, t, n) {
          for (var U, r = [], d = 0; !e.isEmpty(); ) {
            var i = e.readUInt8()
            ;(d <<= 7), (d |= 127 & i), 0 == (128 & i) && (r.push(d), (d = 0))
          }
          128 & i && r.push(d)
          var F = (r[0] / 40) | 0,
            l = r[0] % 40
          if (((U = n ? r : [F, l].concat(r.slice(1))), t)) {
            var a = t[U.join(' ')]
            void 0 === a && (a = t[U.join('.')]), void 0 !== a && (U = a)
          }
          return U
        }),
        (a.prototype._decodeTime = function(e, t) {
          var n = e.raw().toString()
          if ('gentime' === t)
            var U = 0 | n.slice(0, 4),
              r = 0 | n.slice(4, 6),
              d = 0 | n.slice(6, 8),
              i = 0 | n.slice(8, 10),
              F = 0 | n.slice(10, 12),
              l = 0 | n.slice(12, 14)
          else {
            if ('utctime' !== t)
              return e.error('Decoding ' + t + ' time is not supported yet')
            ;(U = 0 | n.slice(0, 2)),
              (r = 0 | n.slice(2, 4)),
              (d = 0 | n.slice(4, 6)),
              (i = 0 | n.slice(6, 8)),
              (F = 0 | n.slice(8, 10)),
              (l = 0 | n.slice(10, 12)),
              (U = U < 70 ? 2e3 + U : 1900 + U)
          }
          return Date.UTC(U, r - 1, d, i, F, l, 0)
        }),
        (a.prototype._decodeNull = function(e) {
          return null
        }),
        (a.prototype._decodeBool = function(e) {
          var t = e.readUInt8()
          return e.isError(t) ? t : 0 !== t
        }),
        (a.prototype._decodeInt = function(e, t) {
          var n = e.raw(),
            U = new i(n)
          return t && (U = t[U.toString(10)] || U), U
        }),
        (a.prototype._use = function(e, t) {
          return 'function' == typeof e && (e = e(t)), e._getDecoder('der').tree
        })
    },
    function(e, t, n) {
      var U = n(0),
        r = n(3).Buffer,
        d = n(19),
        i = d.base,
        F = d.constants.der
      function l(e) {
        ;(this.enc = 'der'),
          (this.name = e.name),
          (this.entity = e),
          (this.tree = new a()),
          this.tree._init(e.body)
      }
      function a(e) {
        i.Node.call(this, 'der', e)
      }
      function Q(e) {
        return e < 10 ? '0' + e : e
      }
      ;(e.exports = l),
        (l.prototype.encode = function(e, t) {
          return this.tree._encode(e, t).join()
        }),
        U(a, i.Node),
        (a.prototype._encodeComposite = function(e, t, n, U) {
          var d,
            i = (function(e, t, n, U) {
              var r
              if (
                ('seqof' === e ? (e = 'seq') : 'setof' === e && (e = 'set'),
                F.tagByName.hasOwnProperty(e))
              )
                r = F.tagByName[e]
              else {
                if ('number' != typeof e || (0 | e) !== e)
                  return U.error('Unknown tag: ' + e)
                r = e
              }
              return r >= 31
                ? U.error('Multi-octet tag encoding unsupported')
                : (t || (r |= 32),
                  r | (F.tagClassByName[n || 'universal'] << 6))
            })(e, t, n, this.reporter)
          if (U.length < 128)
            return (
              ((d = new r(2))[0] = i),
              (d[1] = U.length),
              this._createEncoderBuffer([d, U])
            )
          for (var l = 1, a = U.length; a >= 256; a >>= 8) l++
          ;((d = new r(2 + l))[0] = i), (d[1] = 128 | l), (a = 1 + l)
          for (var Q = U.length; Q > 0; a--, Q >>= 8) d[a] = 255 & Q
          return this._createEncoderBuffer([d, U])
        }),
        (a.prototype._encodeStr = function(e, t) {
          if ('bitstr' === t)
            return this._createEncoderBuffer([0 | e.unused, e.data])
          if ('bmpstr' === t) {
            for (var n = new r(2 * e.length), U = 0; U < e.length; U++)
              n.writeUInt16BE(e.charCodeAt(U), 2 * U)
            return this._createEncoderBuffer(n)
          }
          return 'numstr' === t
            ? this._isNumstr(e)
              ? this._createEncoderBuffer(e)
              : this.reporter.error(
                  'Encoding of string type: numstr supports only digits and space'
                )
            : 'printstr' === t
            ? this._isPrintstr(e)
              ? this._createEncoderBuffer(e)
              : this.reporter.error(
                  'Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark'
                )
            : /str$/.test(t)
            ? this._createEncoderBuffer(e)
            : 'objDesc' === t
            ? this._createEncoderBuffer(e)
            : this.reporter.error(
                'Encoding of string type: ' + t + ' unsupported'
              )
        }),
        (a.prototype._encodeObjid = function(e, t, n) {
          if ('string' == typeof e) {
            if (!t)
              return this.reporter.error(
                'string objid given, but no values map found'
              )
            if (!t.hasOwnProperty(e))
              return this.reporter.error('objid not found in values map')
            e = t[e].split(/[\s\.]+/g)
            for (var U = 0; U < e.length; U++) e[U] |= 0
          } else if (Array.isArray(e))
            for (e = e.slice(), U = 0; U < e.length; U++) e[U] |= 0
          if (!Array.isArray(e))
            return this.reporter.error(
              'objid() should be either array or string, got: ' +
                JSON.stringify(e)
            )
          if (!n) {
            if (e[1] >= 40)
              return this.reporter.error('Second objid identifier OOB')
            e.splice(0, 2, 40 * e[0] + e[1])
          }
          var d = 0
          for (U = 0; U < e.length; U++) {
            var i = e[U]
            for (d++; i >= 128; i >>= 7) d++
          }
          var F = new r(d),
            l = F.length - 1
          for (U = e.length - 1; U >= 0; U--)
            for (i = e[U], F[l--] = 127 & i; (i >>= 7) > 0; )
              F[l--] = 128 | (127 & i)
          return this._createEncoderBuffer(F)
        }),
        (a.prototype._encodeTime = function(e, t) {
          var n,
            U = new Date(e)
          return (
            'gentime' === t
              ? (n = [
                  Q(U.getFullYear()),
                  Q(U.getUTCMonth() + 1),
                  Q(U.getUTCDate()),
                  Q(U.getUTCHours()),
                  Q(U.getUTCMinutes()),
                  Q(U.getUTCSeconds()),
                  'Z',
                ].join(''))
              : 'utctime' === t
              ? (n = [
                  Q(U.getFullYear() % 100),
                  Q(U.getUTCMonth() + 1),
                  Q(U.getUTCDate()),
                  Q(U.getUTCHours()),
                  Q(U.getUTCMinutes()),
                  Q(U.getUTCSeconds()),
                  'Z',
                ].join(''))
              : this.reporter.error(
                  'Encoding ' + t + ' time is not supported yet'
                ),
            this._encodeStr(n, 'octstr')
          )
        }),
        (a.prototype._encodeNull = function() {
          return this._createEncoderBuffer('')
        }),
        (a.prototype._encodeInt = function(e, t) {
          if ('string' == typeof e) {
            if (!t)
              return this.reporter.error(
                'String int or enum given, but no values map'
              )
            if (!t.hasOwnProperty(e))
              return this.reporter.error(
                "Values map doesn't contain: " + JSON.stringify(e)
              )
            e = t[e]
          }
          if ('number' != typeof e && !r.isBuffer(e)) {
            var n = e.toArray()
            !e.sign && 128 & n[0] && n.unshift(0), (e = new r(n))
          }
          if (r.isBuffer(e)) {
            var U = e.length
            0 === e.length && U++
            var d = new r(U)
            return (
              e.copy(d),
              0 === e.length && (d[0] = 0),
              this._createEncoderBuffer(d)
            )
          }
          if (e < 128) return this._createEncoderBuffer(e)
          if (e < 256) return this._createEncoderBuffer([0, e])
          U = 1
          for (var i = e; i >= 256; i >>= 8) U++
          for (i = (d = new Array(U)).length - 1; i >= 0; i--)
            (d[i] = 255 & e), (e >>= 8)
          return 128 & d[0] && d.unshift(0), this._createEncoderBuffer(new r(d))
        }),
        (a.prototype._encodeBool = function(e) {
          return this._createEncoderBuffer(e ? 255 : 0)
        }),
        (a.prototype._use = function(e, t) {
          return 'function' == typeof e && (e = e(t)), e._getEncoder('der').tree
        }),
        (a.prototype._skipDefault = function(e, t, n) {
          var U,
            r = this._baseState
          if (null === r.default) return !1
          var d = e.join()
          if (
            (void 0 === r.defaultBuffer &&
              (r.defaultBuffer = this._encodeValue(r.default, t, n).join()),
            d.length !== r.defaultBuffer.length)
          )
            return !1
          for (U = 0; U < d.length; U++)
            if (d[U] !== r.defaultBuffer[U]) return !1
          return !0
        })
    },
    function(e) {
      e.exports = {
        '1.3.132.0.10': 'secp256k1',
        '1.3.132.0.33': 'p224',
        '1.2.840.10045.3.1.1': 'p192',
        '1.2.840.10045.3.1.7': 'p256',
        '1.3.132.0.34': 'p384',
        '1.3.132.0.35': 'p521',
      }
    },
    function(e, t, n) {
      var U = n(15),
        r = n(1).Buffer
      function d(e) {
        var t = r.allocUnsafe(4)
        return t.writeUInt32BE(e, 0), t
      }
      e.exports = function(e, t) {
        for (var n, i = r.alloc(0), F = 0; i.length < t; )
          (n = d(F++)),
            (i = r.concat([
              i,
              U('sha1')
                .update(e)
                .update(n)
                .digest(),
            ]))
        return i.slice(0, t)
      }
    },
    function(e, t) {
      e.exports = function(e, t) {
        for (var n = e.length, U = -1; ++U < n; ) e[U] ^= t[U]
        return e
      }
    },
    function(e, t, n) {
      var U = n(2),
        r = n(1).Buffer
      e.exports = function(e, t) {
        return r.from(
          e
            .toRed(U.mont(t.modulus))
            .redPow(new U(t.publicExponent))
            .fromRed()
            .toArray()
        )
      }
    },
    function(e, t, n) {
      e.exports = function() {
        return n(166)(
          '/*!\n * Web3 module to add transaction PoW for Ebakus. v1.0.0\n * \n * @author Chris Ziogas <chris@ebakus.com>\n * @website https://www.ebakus.com/\n * \n * @copyright Ebakus 2019\n * @license MIT\n */!function(U){var F={};function Q(B){if(F[B])return F[B].exports;var R=F[B]={i:B,l:!1,exports:{}};return U[B].call(R.exports,R,R.exports,Q),R.l=!0,R.exports}Q.m=U,Q.c=F,Q.d=function(U,F,B){Q.o(U,F)||Object.defineProperty(U,F,{enumerable:!0,get:B})},Q.r=function(U){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(U,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(U,"__esModule",{value:!0})},Q.t=function(U,F){if(1&F&&(U=Q(U)),8&F)return U;if(4&F&&"object"==typeof U&&U&&U.__esModule)return U;var B=Object.create(null);if(Q.r(B),Object.defineProperty(B,"default",{enumerable:!0,value:U}),2&F&&"string"!=typeof U)for(var R in U)Q.d(B,R,function(F){return U[F]}.bind(null,R));return B},Q.n=function(U){var F=U&&U.__esModule?function(){return U.default}:function(){return U};return Q.d(F,"a",F),F},Q.o=function(U,F){return Object.prototype.hasOwnProperty.call(U,F)},Q.p="",Q(Q.s=2)}([function(U,F){U.exports=function(U){for(var F=0,Q=0;Q<U.length;Q++,F+=8)if(0!==U[Q]){F+=Math.clz32(U[Q])-24;break}return F}},function(U,F){U.exports="data:application/javascript;base64,ZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICJmdW5jdGlvbiIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gInN5bWJvbCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSAiZnVuY3Rpb24iICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/ICJzeW1ib2wiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9Cgp2YXIgTW9kdWxlID0gdHlwZW9mIE1vZHVsZSAhPT0gInVuZGVmaW5lZCIgPyBNb2R1bGUgOiB7fTsKdmFyIG1vZHVsZU92ZXJyaWRlcyA9IHt9Owp2YXIga2V5OwoKZm9yIChrZXkgaW4gTW9kdWxlKSB7CiAgaWYgKE1vZHVsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7CiAgICBtb2R1bGVPdmVycmlkZXNba2V5XSA9IE1vZHVsZVtrZXldOwogIH0KfQoKTW9kdWxlWyJhcmd1bWVudHMiXSA9IFtdOwpNb2R1bGVbInRoaXNQcm9ncmFtIl0gPSAiLi90aGlzLnByb2dyYW0iOwoKTW9kdWxlWyJxdWl0Il0gPSBmdW5jdGlvbiAoc3RhdHVzLCB0b1Rocm93KSB7CiAgdGhyb3cgdG9UaHJvdzsKfTsKCk1vZHVsZVsicHJlUnVuIl0gPSBbXTsKTW9kdWxlWyJwb3N0UnVuIl0gPSBbXTsKdmFyIEVOVklST05NRU5UX0lTX1dFQiA9IGZhbHNlOwp2YXIgRU5WSVJPTk1FTlRfSVNfV09SS0VSID0gZmFsc2U7CnZhciBFTlZJUk9OTUVOVF9JU19OT0RFID0gZmFsc2U7CnZhciBFTlZJUk9OTUVOVF9JU19TSEVMTCA9IGZhbHNlOwpFTlZJUk9OTUVOVF9JU19XRUIgPSAodHlwZW9mIHdpbmRvdyA9PT0gInVuZGVmaW5lZCIgPyAidW5kZWZpbmVkIiA6IF90eXBlb2Yod2luZG93KSkgPT09ICJvYmplY3QiOwpFTlZJUk9OTUVOVF9JU19XT1JLRVIgPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PT0gImZ1bmN0aW9uIjsKRU5WSVJPTk1FTlRfSVNfTk9ERSA9ICh0eXBlb2YgcHJvY2VzcyA9PT0gInVuZGVmaW5lZCIgPyAidW5kZWZpbmVkIiA6IF90eXBlb2YocHJvY2VzcykpID09PSAib2JqZWN0IiAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gImZ1bmN0aW9uIiAmJiAhRU5WSVJPTk1FTlRfSVNfV0VCICYmICFFTlZJUk9OTUVOVF9JU19XT1JLRVI7CkVOVklST05NRU5UX0lTX1NIRUxMID0gIUVOVklST05NRU5UX0lTX1dFQiAmJiAhRU5WSVJPTk1FTlRfSVNfTk9ERSAmJiAhRU5WSVJPTk1FTlRfSVNfV09SS0VSOwp2YXIgc2NyaXB0RGlyZWN0b3J5ID0gIiI7CgpmdW5jdGlvbiBsb2NhdGVGaWxlKHBhdGgpIHsKICBpZiAoTW9kdWxlWyJsb2NhdGVGaWxlIl0pIHsKICAgIHJldHVybiBNb2R1bGVbImxvY2F0ZUZpbGUiXShwYXRoLCBzY3JpcHREaXJlY3RvcnkpOwogIH0gZWxzZSB7CiAgICByZXR1cm4gc2NyaXB0RGlyZWN0b3J5ICsgcGF0aDsKICB9Cn0KCmlmIChFTlZJUk9OTUVOVF9JU19OT0RFKSB7CiAgc2NyaXB0RGlyZWN0b3J5ID0gX19kaXJuYW1lICsgIi8iOwogIHZhciBub2RlRlM7CiAgdmFyIG5vZGVQYXRoOwoKICBNb2R1bGVbInJlYWQiXSA9IGZ1bmN0aW9uIHNoZWxsX3JlYWQoZmlsZW5hbWUsIGJpbmFyeSkgewogICAgdmFyIHJldDsKICAgIHJldCA9IHRyeVBhcnNlQXNEYXRhVVJJKGZpbGVuYW1lKTsKCiAgICBpZiAoIXJldCkgewogICAgICBpZiAoIW5vZGVGUykgbm9kZUZTID0gcmVxdWlyZSgiZnMiKTsKICAgICAgaWYgKCFub2RlUGF0aCkgbm9kZVBhdGggPSByZXF1aXJlKCJwYXRoIik7CiAgICAgIGZpbGVuYW1lID0gbm9kZVBhdGhbIm5vcm1hbGl6ZSJdKGZpbGVuYW1lKTsKICAgICAgcmV0ID0gbm9kZUZTWyJyZWFkRmlsZVN5bmMiXShmaWxlbmFtZSk7CiAgICB9CgogICAgcmV0dXJuIGJpbmFyeSA/IHJldCA6IHJldC50b1N0cmluZygpOwogIH07CgogIE1vZHVsZVsicmVhZEJpbmFyeSJdID0gZnVuY3Rpb24gcmVhZEJpbmFyeShmaWxlbmFtZSkgewogICAgdmFyIHJldCA9IE1vZHVsZVsicmVhZCJdKGZpbGVuYW1lLCB0cnVlKTsKCiAgICBpZiAoIXJldC5idWZmZXIpIHsKICAgICAgcmV0ID0gbmV3IFVpbnQ4QXJyYXkocmV0KTsKICAgIH0KCiAgICBhc3NlcnQocmV0LmJ1ZmZlcik7CiAgICByZXR1cm4gcmV0OwogIH07CgogIGlmIChwcm9jZXNzWyJhcmd2Il0ubGVuZ3RoID4gMSkgewogICAgTW9kdWxlWyJ0aGlzUHJvZ3JhbSJdID0gcHJvY2Vzc1siYXJndiJdWzFdLnJlcGxhY2UoL1xcL2csICIvIik7CiAgfQoKICBNb2R1bGVbImFyZ3VtZW50cyJdID0gcHJvY2Vzc1siYXJndiJdLnNsaWNlKDIpOwoKICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gInVuZGVmaW5lZCIpIHsKICAgIG1vZHVsZVsiZXhwb3J0cyJdID0gTW9kdWxlOwogIH0KCiAgcHJvY2Vzc1sib24iXSgidW5jYXVnaHRFeGNlcHRpb24iLCBmdW5jdGlvbiAoZXgpIHsKICAgIGlmICghKGV4IGluc3RhbmNlb2YgRXhpdFN0YXR1cykpIHsKICAgICAgdGhyb3cgZXg7CiAgICB9CiAgfSk7CiAgcHJvY2Vzc1sib24iXSgidW5oYW5kbGVkUmVqZWN0aW9uIiwgYWJvcnQpOwoKICBNb2R1bGVbInF1aXQiXSA9IGZ1bmN0aW9uIChzdGF0dXMpIHsKICAgIHByb2Nlc3NbImV4aXQiXShzdGF0dXMpOwogIH07CgogIE1vZHVsZVsiaW5zcGVjdCJdID0gZnVuY3Rpb24gKCkgewogICAgcmV0dXJuICJbRW1zY3JpcHRlbiBNb2R1bGUgb2JqZWN0XSI7CiAgfTsKfSBlbHNlIGlmIChFTlZJUk9OTUVOVF9JU19TSEVMTCkgewogIGlmICh0eXBlb2YgcmVhZCAhPSAidW5kZWZpbmVkIikgewogICAgTW9kdWxlWyJyZWFkIl0gPSBmdW5jdGlvbiBzaGVsbF9yZWFkKGYpIHsKICAgICAgdmFyIGRhdGEgPSB0cnlQYXJzZUFzRGF0YVVSSShmKTsKCiAgICAgIGlmIChkYXRhKSB7CiAgICAgICAgcmV0dXJuIGludEFycmF5VG9TdHJpbmcoZGF0YSk7CiAgICAgIH0KCiAgICAgIHJldHVybiByZWFkKGYpOwogICAgfTsKICB9CgogIE1vZHVsZVsicmVhZEJpbmFyeSJdID0gZnVuY3Rpb24gcmVhZEJpbmFyeShmKSB7CiAgICB2YXIgZGF0YTsKICAgIGRhdGEgPSB0cnlQYXJzZUFzRGF0YVVSSShmKTsKCiAgICBpZiAoZGF0YSkgewogICAgICByZXR1cm4gZGF0YTsKICAgIH0KCiAgICBpZiAodHlwZW9mIHJlYWRidWZmZXIgPT09ICJmdW5jdGlvbiIpIHsKICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHJlYWRidWZmZXIoZikpOwogICAgfQoKICAgIGRhdGEgPSByZWFkKGYsICJiaW5hcnkiKTsKICAgIGFzc2VydChfdHlwZW9mKGRhdGEpID09PSAib2JqZWN0Iik7CiAgICByZXR1cm4gZGF0YTsKICB9OwoKICBpZiAodHlwZW9mIHNjcmlwdEFyZ3MgIT0gInVuZGVmaW5lZCIpIHsKICAgIE1vZHVsZVsiYXJndW1lbnRzIl0gPSBzY3JpcHRBcmdzOwogIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50cyAhPSAidW5kZWZpbmVkIikgewogICAgTW9kdWxlWyJhcmd1bWVudHMiXSA9IGFyZ3VtZW50czsKICB9CgogIGlmICh0eXBlb2YgcXVpdCA9PT0gImZ1bmN0aW9uIikgewogICAgTW9kdWxlWyJxdWl0Il0gPSBmdW5jdGlvbiAoc3RhdHVzKSB7CiAgICAgIHF1aXQoc3RhdHVzKTsKICAgIH07CiAgfQp9IGVsc2UgaWYgKEVOVklST05NRU5UX0lTX1dFQiB8fCBFTlZJUk9OTUVOVF9JU19XT1JLRVIpIHsKICBpZiAoRU5WSVJPTk1FTlRfSVNfV09SS0VSKSB7CiAgICBzY3JpcHREaXJlY3RvcnkgPSBzZWxmLmxvY2F0aW9uLmhyZWY7CiAgfSBlbHNlIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7CiAgICBzY3JpcHREaXJlY3RvcnkgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYzsKICB9CgogIGlmIChzY3JpcHREaXJlY3RvcnkuaW5kZXhPZigiYmxvYjoiKSAhPT0gMCkgewogICAgc2NyaXB0RGlyZWN0b3J5ID0gc2NyaXB0RGlyZWN0b3J5LnN1YnN0cigwLCBzY3JpcHREaXJlY3RvcnkubGFzdEluZGV4T2YoIi8iKSArIDEpOwogIH0gZWxzZSB7CiAgICBzY3JpcHREaXJlY3RvcnkgPSAiIjsKICB9CgogIE1vZHVsZVsicmVhZCJdID0gZnVuY3Rpb24gc2hlbGxfcmVhZCh1cmwpIHsKICAgIHRyeSB7CiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgeGhyLm9wZW4oIkdFVCIsIHVybCwgZmFsc2UpOwogICAgICB4aHIuc2VuZChudWxsKTsKICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVRleHQ7CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgdmFyIGRhdGEgPSB0cnlQYXJzZUFzRGF0YVVSSSh1cmwpOwoKICAgICAgaWYgKGRhdGEpIHsKICAgICAgICByZXR1cm4gaW50QXJyYXlUb1N0cmluZyhkYXRhKTsKICAgICAgfQoKICAgICAgdGhyb3cgZXJyOwogICAgfQogIH07CgogIGlmIChFTlZJUk9OTUVOVF9JU19XT1JLRVIpIHsKICAgIE1vZHVsZVsicmVhZEJpbmFyeSJdID0gZnVuY3Rpb24gcmVhZEJpbmFyeSh1cmwpIHsKICAgICAgdHJ5IHsKICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgICAgeGhyLm9wZW4oIkdFVCIsIHVybCwgZmFsc2UpOwogICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAiYXJyYXlidWZmZXIiOwogICAgICAgIHhoci5zZW5kKG51bGwpOwogICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh4aHIucmVzcG9uc2UpOwogICAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgICB2YXIgZGF0YSA9IHRyeVBhcnNlQXNEYXRhVVJJKHVybCk7CgogICAgICAgIGlmIChkYXRhKSB7CiAgICAgICAgICByZXR1cm4gZGF0YTsKICAgICAgICB9CgogICAgICAgIHRocm93IGVycjsKICAgICAgfQogICAgfTsKICB9CgogIE1vZHVsZVsicmVhZEFzeW5jIl0gPSBmdW5jdGlvbiByZWFkQXN5bmModXJsLCBvbmxvYWQsIG9uZXJyb3IpIHsKICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgIHhoci5vcGVuKCJHRVQiLCB1cmwsIHRydWUpOwogICAgeGhyLnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciI7CgogICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIHhocl9vbmxvYWQoKSB7CiAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCB8fCB4aHIuc3RhdHVzID09IDAgJiYgeGhyLnJlc3BvbnNlKSB7CiAgICAgICAgb25sb2FkKHhoci5yZXNwb25zZSk7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICB2YXIgZGF0YSA9IHRyeVBhcnNlQXNEYXRhVVJJKHVybCk7CgogICAgICBpZiAoZGF0YSkgewogICAgICAgIG9ubG9hZChkYXRhLmJ1ZmZlcik7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBvbmVycm9yKCk7CiAgICB9OwoKICAgIHhoci5vbmVycm9yID0gb25lcnJvcjsKICAgIHhoci5zZW5kKG51bGwpOwogIH07CgogIE1vZHVsZVsic2V0V2luZG93VGl0bGUiXSA9IGZ1bmN0aW9uICh0aXRsZSkgewogICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTsKICB9Owp9IGVsc2Uge30KCnZhciBvdXQgPSBNb2R1bGVbInByaW50Il0gfHwgKHR5cGVvZiBjb25zb2xlICE9PSAidW5kZWZpbmVkIiA/IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSkgOiB0eXBlb2YgcHJpbnQgIT09ICJ1bmRlZmluZWQiID8gcHJpbnQgOiBudWxsKTsKdmFyIGVyciA9IE1vZHVsZVsicHJpbnRFcnIiXSB8fCAodHlwZW9mIHByaW50RXJyICE9PSAidW5kZWZpbmVkIiA/IHByaW50RXJyIDogdHlwZW9mIGNvbnNvbGUgIT09ICJ1bmRlZmluZWQiICYmIGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpIHx8IG91dCk7Cgpmb3IgKGtleSBpbiBtb2R1bGVPdmVycmlkZXMpIHsKICBpZiAobW9kdWxlT3ZlcnJpZGVzLmhhc093blByb3BlcnR5KGtleSkpIHsKICAgIE1vZHVsZVtrZXldID0gbW9kdWxlT3ZlcnJpZGVzW2tleV07CiAgfQp9Cgptb2R1bGVPdmVycmlkZXMgPSB1bmRlZmluZWQ7CnZhciBTVEFDS19BTElHTiA9IDE2OwoKZnVuY3Rpb24gc3RhdGljQWxsb2Moc2l6ZSkgewogIHZhciByZXQgPSBTVEFUSUNUT1A7CiAgU1RBVElDVE9QID0gU1RBVElDVE9QICsgc2l6ZSArIDE1ICYgLTE2OwogIHJldHVybiByZXQ7Cn0KCmZ1bmN0aW9uIGR5bmFtaWNBbGxvYyhzaXplKSB7CiAgdmFyIHJldCA9IEhFQVAzMltEWU5BTUlDVE9QX1BUUiA+PiAyXTsKICB2YXIgZW5kID0gcmV0ICsgc2l6ZSArIDE1ICYgLTE2OwogIEhFQVAzMltEWU5BTUlDVE9QX1BUUiA+PiAyXSA9IGVuZDsKCiAgaWYgKGVuZCA+PSBUT1RBTF9NRU1PUlkpIHsKICAgIHZhciBzdWNjZXNzID0gZW5sYXJnZU1lbW9yeSgpOwoKICAgIGlmICghc3VjY2VzcykgewogICAgICBIRUFQMzJbRFlOQU1JQ1RPUF9QVFIgPj4gMl0gPSByZXQ7CiAgICAgIHJldHVybiAwOwogICAgfQogIH0KCiAgcmV0dXJuIHJldDsKfQoKZnVuY3Rpb24gYWxpZ25NZW1vcnkoc2l6ZSwgZmFjdG9yKSB7CiAgaWYgKCFmYWN0b3IpIGZhY3RvciA9IFNUQUNLX0FMSUdOOwogIHZhciByZXQgPSBzaXplID0gTWF0aC5jZWlsKHNpemUgLyBmYWN0b3IpICogZmFjdG9yOwogIHJldHVybiByZXQ7Cn0KCmZ1bmN0aW9uIGdldE5hdGl2ZVR5cGVTaXplKHR5cGUpIHsKICBzd2l0Y2ggKHR5cGUpIHsKICAgIGNhc2UgImkxIjoKICAgIGNhc2UgImk4IjoKICAgICAgcmV0dXJuIDE7CgogICAgY2FzZSAiaTE2IjoKICAgICAgcmV0dXJuIDI7CgogICAgY2FzZSAiaTMyIjoKICAgICAgcmV0dXJuIDQ7CgogICAgY2FzZSAiaTY0IjoKICAgICAgcmV0dXJuIDg7CgogICAgY2FzZSAiZmxvYXQiOgogICAgICByZXR1cm4gNDsKCiAgICBjYXNlICJkb3VibGUiOgogICAgICByZXR1cm4gODsKCiAgICBkZWZhdWx0OgogICAgICB7CiAgICAgICAgaWYgKHR5cGVbdHlwZS5sZW5ndGggLSAxXSA9PT0gIioiKSB7CiAgICAgICAgICByZXR1cm4gNDsKICAgICAgICB9IGVsc2UgaWYgKHR5cGVbMF0gPT09ICJpIikgewogICAgICAgICAgdmFyIGJpdHMgPSBwYXJzZUludCh0eXBlLnN1YnN0cigxKSk7CiAgICAgICAgICBhc3NlcnQoYml0cyAlIDggPT09IDApOwogICAgICAgICAgcmV0dXJuIGJpdHMgLyA4OwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICB9CiAgICAgIH0KICB9Cn0KCnZhciBhc20yd2FzbUltcG9ydHMgPSB7CiAgImY2NC1yZW0iOiBmdW5jdGlvbiBmNjRSZW0oeCwgeSkgewogICAgcmV0dXJuIHggJSB5OwogIH0sCiAgImRlYnVnZ2VyIjogZnVuY3Rpb24gX2RlYnVnZ2VyKCkgewogICAgZGVidWdnZXI7CiAgfSwKICAiZjY0LXRvLWludCI6IGZ1bmN0aW9uIGY2NFRvSW50KHgpIHsKICAgIHJldHVybiB4IHwgMDsKICB9LAogICJpMzJzLWRpdiI6IGZ1bmN0aW9uIGkzMnNEaXYoeCwgeSkgewogICAgcmV0dXJuICh4IHwgMCkgLyAoeSB8IDApIHwgMDsKICB9LAogICJpMzJ1LWRpdiI6IGZ1bmN0aW9uIGkzMnVEaXYoeCwgeSkgewogICAgcmV0dXJuICh4ID4+PiAwKSAvICh5ID4+PiAwKSA+Pj4gMDsKICB9LAogICJpMzJzLXJlbSI6IGZ1bmN0aW9uIGkzMnNSZW0oeCwgeSkgewogICAgcmV0dXJuICh4IHwgMCkgJSAoeSB8IDApIHwgMDsKICB9LAogICJpMzJ1LXJlbSI6IGZ1bmN0aW9uIGkzMnVSZW0oeCwgeSkgewogICAgcmV0dXJuICh4ID4+PiAwKSAlICh5ID4+PiAwKSA+Pj4gMDsKICB9Cn07CnZhciBmdW5jdGlvblBvaW50ZXJzID0gbmV3IEFycmF5KDApOwp2YXIgR0xPQkFMX0JBU0UgPSAxMDI0Owp2YXIgQUJPUlQgPSBmYWxzZTsKdmFyIEVYSVRTVEFUVVMgPSAwOwoKZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgdGV4dCkgewogIGlmICghY29uZGl0aW9uKSB7CiAgICBhYm9ydCgiQXNzZXJ0aW9uIGZhaWxlZDogIiArIHRleHQpOwogIH0KfQoKZnVuY3Rpb24gZ2V0Q0Z1bmMoaWRlbnQpIHsKICB2YXIgZnVuYyA9IE1vZHVsZVsiXyIgKyBpZGVudF07CiAgYXNzZXJ0KGZ1bmMsICJDYW5ub3QgY2FsbCB1bmtub3duIGZ1bmN0aW9uICIgKyBpZGVudCArICIsIG1ha2Ugc3VyZSBpdCBpcyBleHBvcnRlZCIpOwogIHJldHVybiBmdW5jOwp9Cgp2YXIgSlNmdW5jcyA9IHsKICAic3RhY2tTYXZlIjogZnVuY3Rpb24gc3RhY2tTYXZlKCkgewogICAgX3N0YWNrU2F2ZSgpOwogIH0sCiAgInN0YWNrUmVzdG9yZSI6IGZ1bmN0aW9uIHN0YWNrUmVzdG9yZSgpIHsKICAgIF9zdGFja1Jlc3RvcmUoKTsKICB9LAogICJhcnJheVRvQyI6IGZ1bmN0aW9uIGFycmF5VG9DKGFycikgewogICAgdmFyIHJldCA9IHN0YWNrQWxsb2MoYXJyLmxlbmd0aCk7CiAgICB3cml0ZUFycmF5VG9NZW1vcnkoYXJyLCByZXQpOwogICAgcmV0dXJuIHJldDsKICB9LAogICJzdHJpbmdUb0MiOiBmdW5jdGlvbiBzdHJpbmdUb0Moc3RyKSB7CiAgICB2YXIgcmV0ID0gMDsKCiAgICBpZiAoc3RyICE9PSBudWxsICYmIHN0ciAhPT0gdW5kZWZpbmVkICYmIHN0ciAhPT0gMCkgewogICAgICB2YXIgbGVuID0gKHN0ci5sZW5ndGggPDwgMikgKyAxOwogICAgICByZXQgPSBzdGFja0FsbG9jKGxlbik7CiAgICAgIHN0cmluZ1RvVVRGOChzdHIsIHJldCwgbGVuKTsKICAgIH0KCiAgICByZXR1cm4gcmV0OwogIH0KfTsKdmFyIHRvQyA9IHsKICAic3RyaW5nIjogSlNmdW5jc1sic3RyaW5nVG9DIl0sCiAgImFycmF5IjogSlNmdW5jc1siYXJyYXlUb0MiXQp9OwoKZnVuY3Rpb24gY2NhbGwoaWRlbnQsIHJldHVyblR5cGUsIGFyZ1R5cGVzLCBhcmdzLCBvcHRzKSB7CiAgZnVuY3Rpb24gY29udmVydFJldHVyblZhbHVlKHJldCkgewogICAgaWYgKHJldHVyblR5cGUgPT09ICJzdHJpbmciKSByZXR1cm4gUG9pbnRlcl9zdHJpbmdpZnkocmV0KTsKICAgIGlmIChyZXR1cm5UeXBlID09PSAiYm9vbGVhbiIpIHJldHVybiBCb29sZWFuKHJldCk7CiAgICByZXR1cm4gcmV0OwogIH0KCiAgdmFyIGZ1bmMgPSBnZXRDRnVuYyhpZGVudCk7CiAgdmFyIGNBcmdzID0gW107CiAgdmFyIHN0YWNrID0gMDsKCiAgaWYgKGFyZ3MpIHsKICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykgewogICAgICB2YXIgY29udmVydGVyID0gdG9DW2FyZ1R5cGVzW2ldXTsKCiAgICAgIGlmIChjb252ZXJ0ZXIpIHsKICAgICAgICBpZiAoc3RhY2sgPT09IDApIHN0YWNrID0gX3N0YWNrU2F2ZSgpOwogICAgICAgIGNBcmdzW2ldID0gY29udmVydGVyKGFyZ3NbaV0pOwogICAgICB9IGVsc2UgewogICAgICAgIGNBcmdzW2ldID0gYXJnc1tpXTsKICAgICAgfQogICAgfQogIH0KCiAgdmFyIHJldCA9IGZ1bmMuYXBwbHkobnVsbCwgY0FyZ3MpOwogIHJldCA9IGNvbnZlcnRSZXR1cm5WYWx1ZShyZXQpOwogIGlmIChzdGFjayAhPT0gMCkgX3N0YWNrUmVzdG9yZShzdGFjayk7CiAgcmV0dXJuIHJldDsKfQoKZnVuY3Rpb24gY3dyYXAoaWRlbnQsIHJldHVyblR5cGUsIGFyZ1R5cGVzLCBvcHRzKSB7CiAgYXJnVHlwZXMgPSBhcmdUeXBlcyB8fCBbXTsKICB2YXIgbnVtZXJpY0FyZ3MgPSBhcmdUeXBlcy5ldmVyeShmdW5jdGlvbiAodHlwZSkgewogICAgcmV0dXJuIHR5cGUgPT09ICJudW1iZXIiOwogIH0pOwogIHZhciBudW1lcmljUmV0ID0gcmV0dXJuVHlwZSAhPT0gInN0cmluZyI7CgogIGlmIChudW1lcmljUmV0ICYmIG51bWVyaWNBcmdzICYmICFvcHRzKSB7CiAgICByZXR1cm4gZ2V0Q0Z1bmMoaWRlbnQpOwogIH0KCiAgcmV0dXJuIGZ1bmN0aW9uICgpIHsKICAgIHJldHVybiBjY2FsbChpZGVudCwgcmV0dXJuVHlwZSwgYXJnVHlwZXMsIGFyZ3VtZW50cywgb3B0cyk7CiAgfTsKfQoKZnVuY3Rpb24gc2V0VmFsdWUocHRyLCB2YWx1ZSwgdHlwZSwgbm9TYWZlKSB7CiAgdHlwZSA9IHR5cGUgfHwgImk4IjsKICBpZiAodHlwZS5jaGFyQXQodHlwZS5sZW5ndGggLSAxKSA9PT0gIioiKSB0eXBlID0gImkzMiI7CgogIHN3aXRjaCAodHlwZSkgewogICAgY2FzZSAiaTEiOgogICAgICBIRUFQOFtwdHIgPj4gMF0gPSB2YWx1ZTsKICAgICAgYnJlYWs7CgogICAgY2FzZSAiaTgiOgogICAgICBIRUFQOFtwdHIgPj4gMF0gPSB2YWx1ZTsKICAgICAgYnJlYWs7CgogICAgY2FzZSAiaTE2IjoKICAgICAgSEVBUDE2W3B0ciA+PiAxXSA9IHZhbHVlOwogICAgICBicmVhazsKCiAgICBjYXNlICJpMzIiOgogICAgICBIRUFQMzJbcHRyID4+IDJdID0gdmFsdWU7CiAgICAgIGJyZWFrOwoKICAgIGNhc2UgImk2NCI6CiAgICAgIHRlbXBJNjQgPSBbdmFsdWUgPj4+IDAsICh0ZW1wRG91YmxlID0gdmFsdWUsICtNYXRoX2Ficyh0ZW1wRG91YmxlKSA+PSAxID8gdGVtcERvdWJsZSA+IDAgPyAoTWF0aF9taW4oK01hdGhfZmxvb3IodGVtcERvdWJsZSAvIDQyOTQ5NjcyOTYpLCA0Mjk0OTY3Mjk1KSB8IDApID4+PiAwIDogfn4rTWF0aF9jZWlsKCh0ZW1wRG91YmxlIC0gKyh+fnRlbXBEb3VibGUgPj4+IDApKSAvIDQyOTQ5NjcyOTYpID4+PiAwIDogMCldLCBIRUFQMzJbcHRyID4+IDJdID0gdGVtcEk2NFswXSwgSEVBUDMyW3B0ciArIDQgPj4gMl0gPSB0ZW1wSTY0WzFdOwogICAgICBicmVhazsKCiAgICBjYXNlICJmbG9hdCI6CiAgICAgIEhFQVBGMzJbcHRyID4+IDJdID0gdmFsdWU7CiAgICAgIGJyZWFrOwoKICAgIGNhc2UgImRvdWJsZSI6CiAgICAgIEhFQVBGNjRbcHRyID4+IDNdID0gdmFsdWU7CiAgICAgIGJyZWFrOwoKICAgIGRlZmF1bHQ6CiAgICAgIGFib3J0KCJpbnZhbGlkIHR5cGUgZm9yIHNldFZhbHVlOiAiICsgdHlwZSk7CiAgfQp9Cgp2YXIgQUxMT0NfU1RBVElDID0gMjsKdmFyIEFMTE9DX05PTkUgPSA0OwoKZnVuY3Rpb24gYWxsb2NhdGUoc2xhYiwgdHlwZXMsIGFsbG9jYXRvciwgcHRyKSB7CiAgdmFyIHplcm9pbml0LCBzaXplOwoKICBpZiAodHlwZW9mIHNsYWIgPT09ICJudW1iZXIiKSB7CiAgICB6ZXJvaW5pdCA9IHRydWU7CiAgICBzaXplID0gc2xhYjsKICB9IGVsc2UgewogICAgemVyb2luaXQgPSBmYWxzZTsKICAgIHNpemUgPSBzbGFiLmxlbmd0aDsKICB9CgogIHZhciBzaW5nbGVUeXBlID0gdHlwZW9mIHR5cGVzID09PSAic3RyaW5nIiA/IHR5cGVzIDogbnVsbDsKICB2YXIgcmV0OwoKICBpZiAoYWxsb2NhdG9yID09IEFMTE9DX05PTkUpIHsKICAgIHJldCA9IHB0cjsKICB9IGVsc2UgewogICAgcmV0ID0gW3R5cGVvZiBfbWFsbG9jID09PSAiZnVuY3Rpb24iID8gX21hbGxvYyA6IHN0YXRpY0FsbG9jLCBzdGFja0FsbG9jLCBzdGF0aWNBbGxvYywgZHluYW1pY0FsbG9jXVthbGxvY2F0b3IgPT09IHVuZGVmaW5lZCA/IEFMTE9DX1NUQVRJQyA6IGFsbG9jYXRvcl0oTWF0aC5tYXgoc2l6ZSwgc2luZ2xlVHlwZSA/IDEgOiB0eXBlcy5sZW5ndGgpKTsKICB9CgogIGlmICh6ZXJvaW5pdCkgewogICAgdmFyIHN0b3A7CiAgICBwdHIgPSByZXQ7CiAgICBhc3NlcnQoKHJldCAmIDMpID09IDApOwogICAgc3RvcCA9IHJldCArIChzaXplICYgfjMpOwoKICAgIGZvciAoOyBwdHIgPCBzdG9wOyBwdHIgKz0gNCkgewogICAgICBIRUFQMzJbcHRyID4+IDJdID0gMDsKICAgIH0KCiAgICBzdG9wID0gcmV0ICsgc2l6ZTsKCiAgICB3aGlsZSAocHRyIDwgc3RvcCkgewogICAgICBIRUFQOFtwdHIrKyA+PiAwXSA9IDA7CiAgICB9CgogICAgcmV0dXJuIHJldDsKICB9CgogIGlmIChzaW5nbGVUeXBlID09PSAiaTgiKSB7CiAgICBpZiAoc2xhYi5zdWJhcnJheSB8fCBzbGFiLnNsaWNlKSB7CiAgICAgIEhFQVBVOC5zZXQoc2xhYiwgcmV0KTsKICAgIH0gZWxzZSB7CiAgICAgIEhFQVBVOC5zZXQobmV3IFVpbnQ4QXJyYXkoc2xhYiksIHJldCk7CiAgICB9CgogICAgcmV0dXJuIHJldDsKICB9CgogIHZhciBpID0gMCwKICAgICAgdHlwZSwKICAgICAgdHlwZVNpemUsCiAgICAgIHByZXZpb3VzVHlwZTsKCiAgd2hpbGUgKGkgPCBzaXplKSB7CiAgICB2YXIgY3VyciA9IHNsYWJbaV07CiAgICB0eXBlID0gc2luZ2xlVHlwZSB8fCB0eXBlc1tpXTsKCiAgICBpZiAodHlwZSA9PT0gMCkgewogICAgICBpKys7CiAgICAgIGNvbnRpbnVlOwogICAgfQoKICAgIGlmICh0eXBlID09ICJpNjQiKSB0eXBlID0gImkzMiI7CiAgICBzZXRWYWx1ZShyZXQgKyBpLCBjdXJyLCB0eXBlKTsKCiAgICBpZiAocHJldmlvdXNUeXBlICE9PSB0eXBlKSB7CiAgICAgIHR5cGVTaXplID0gZ2V0TmF0aXZlVHlwZVNpemUodHlwZSk7CiAgICAgIHByZXZpb3VzVHlwZSA9IHR5cGU7CiAgICB9CgogICAgaSArPSB0eXBlU2l6ZTsKICB9CgogIHJldHVybiByZXQ7Cn0KCmZ1bmN0aW9uIFBvaW50ZXJfc3RyaW5naWZ5KHB0ciwgbGVuZ3RoKSB7CiAgaWYgKGxlbmd0aCA9PT0gMCB8fCAhcHRyKSByZXR1cm4gIiI7CiAgdmFyIGhhc1V0ZiA9IDA7CiAgdmFyIHQ7CiAgdmFyIGkgPSAwOwoKICB3aGlsZSAoMSkgewogICAgdCA9IEhFQVBVOFtwdHIgKyBpID4+IDBdOwogICAgaGFzVXRmIHw9IHQ7CiAgICBpZiAodCA9PSAwICYmICFsZW5ndGgpIGJyZWFrOwogICAgaSsrOwogICAgaWYgKGxlbmd0aCAmJiBpID09IGxlbmd0aCkgYnJlYWs7CiAgfQoKICBpZiAoIWxlbmd0aCkgbGVuZ3RoID0gaTsKICB2YXIgcmV0ID0gIiI7CgogIGlmIChoYXNVdGYgPCAxMjgpIHsKICAgIHZhciBNQVhfQ0hVTksgPSAxMDI0OwogICAgdmFyIGN1cnI7CgogICAgd2hpbGUgKGxlbmd0aCA+IDApIHsKICAgICAgY3VyciA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBIRUFQVTguc3ViYXJyYXkocHRyLCBwdHIgKyBNYXRoLm1pbihsZW5ndGgsIE1BWF9DSFVOSykpKTsKICAgICAgcmV0ID0gcmV0ID8gcmV0ICsgY3VyciA6IGN1cnI7CiAgICAgIHB0ciArPSBNQVhfQ0hVTks7CiAgICAgIGxlbmd0aCAtPSBNQVhfQ0hVTks7CiAgICB9CgogICAgcmV0dXJuIHJldDsKICB9CgogIHJldHVybiBVVEY4VG9TdHJpbmcocHRyKTsKfQoKdmFyIFVURjhEZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyICE9PSAidW5kZWZpbmVkIiA/IG5ldyBUZXh0RGVjb2RlcigidXRmOCIpIDogdW5kZWZpbmVkOwoKZnVuY3Rpb24gVVRGOEFycmF5VG9TdHJpbmcodThBcnJheSwgaWR4KSB7CiAgdmFyIGVuZFB0ciA9IGlkeDsKCiAgd2hpbGUgKHU4QXJyYXlbZW5kUHRyXSkgewogICAgKytlbmRQdHI7CiAgfQoKICBpZiAoZW5kUHRyIC0gaWR4ID4gMTYgJiYgdThBcnJheS5zdWJhcnJheSAmJiBVVEY4RGVjb2RlcikgewogICAgcmV0dXJuIFVURjhEZWNvZGVyLmRlY29kZSh1OEFycmF5LnN1YmFycmF5KGlkeCwgZW5kUHRyKSk7CiAgfSBlbHNlIHsKICAgIHZhciB1MCwgdTEsIHUyLCB1MywgdTQsIHU1OwogICAgdmFyIHN0ciA9ICIiOwoKICAgIHdoaWxlICgxKSB7CiAgICAgIHUwID0gdThBcnJheVtpZHgrK107CiAgICAgIGlmICghdTApIHJldHVybiBzdHI7CgogICAgICBpZiAoISh1MCAmIDEyOCkpIHsKICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh1MCk7CiAgICAgICAgY29udGludWU7CiAgICAgIH0KCiAgICAgIHUxID0gdThBcnJheVtpZHgrK10gJiA2MzsKCiAgICAgIGlmICgodTAgJiAyMjQpID09IDE5MikgewogICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCh1MCAmIDMxKSA8PCA2IHwgdTEpOwogICAgICAgIGNvbnRpbnVlOwogICAgICB9CgogICAgICB1MiA9IHU4QXJyYXlbaWR4KytdICYgNjM7CgogICAgICBpZiAoKHUwICYgMjQwKSA9PSAyMjQpIHsKICAgICAgICB1MCA9ICh1MCAmIDE1KSA8PCAxMiB8IHUxIDw8IDYgfCB1MjsKICAgICAgfSBlbHNlIHsKICAgICAgICB1MyA9IHU4QXJyYXlbaWR4KytdICYgNjM7CgogICAgICAgIGlmICgodTAgJiAyNDgpID09IDI0MCkgewogICAgICAgICAgdTAgPSAodTAgJiA3KSA8PCAxOCB8IHUxIDw8IDEyIHwgdTIgPDwgNiB8IHUzOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICB1NCA9IHU4QXJyYXlbaWR4KytdICYgNjM7CgogICAgICAgICAgaWYgKCh1MCAmIDI1MikgPT0gMjQ4KSB7CiAgICAgICAgICAgIHUwID0gKHUwICYgMykgPDwgMjQgfCB1MSA8PCAxOCB8IHUyIDw8IDEyIHwgdTMgPDwgNiB8IHU0OwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgdTUgPSB1OEFycmF5W2lkeCsrXSAmIDYzOwogICAgICAgICAgICB1MCA9ICh1MCAmIDEpIDw8IDMwIHwgdTEgPDwgMjQgfCB1MiA8PCAxOCB8IHUzIDw8IDEyIHwgdTQgPDwgNiB8IHU1OwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfQoKICAgICAgaWYgKHUwIDwgNjU1MzYpIHsKICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh1MCk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgdmFyIGNoID0gdTAgLSA2NTUzNjsKICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGNoID4+IDEwLCA1NjMyMCB8IGNoICYgMTAyMyk7CiAgICAgIH0KICAgIH0KICB9Cn0KCmZ1bmN0aW9uIFVURjhUb1N0cmluZyhwdHIpIHsKICByZXR1cm4gVVRGOEFycmF5VG9TdHJpbmcoSEVBUFU4LCBwdHIpOwp9CgpmdW5jdGlvbiBzdHJpbmdUb1VURjhBcnJheShzdHIsIG91dFU4QXJyYXksIG91dElkeCwgbWF4Qnl0ZXNUb1dyaXRlKSB7CiAgaWYgKCEobWF4Qnl0ZXNUb1dyaXRlID4gMCkpIHJldHVybiAwOwogIHZhciBzdGFydElkeCA9IG91dElkeDsKICB2YXIgZW5kSWR4ID0gb3V0SWR4ICsgbWF4Qnl0ZXNUb1dyaXRlIC0gMTsKCiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHsKICAgIHZhciB1ID0gc3RyLmNoYXJDb2RlQXQoaSk7CgogICAgaWYgKHUgPj0gNTUyOTYgJiYgdSA8PSA1NzM0MykgewogICAgICB2YXIgdTEgPSBzdHIuY2hhckNvZGVBdCgrK2kpOwogICAgICB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCB1MSAmIDEwMjM7CiAgICB9CgogICAgaWYgKHUgPD0gMTI3KSB7CiAgICAgIGlmIChvdXRJZHggPj0gZW5kSWR4KSBicmVhazsKICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSB1OwogICAgfSBlbHNlIGlmICh1IDw9IDIwNDcpIHsKICAgICAgaWYgKG91dElkeCArIDEgPj0gZW5kSWR4KSBicmVhazsKICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAxOTIgfCB1ID4+IDY7CiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMTI4IHwgdSAmIDYzOwogICAgfSBlbHNlIGlmICh1IDw9IDY1NTM1KSB7CiAgICAgIGlmIChvdXRJZHggKyAyID49IGVuZElkeCkgYnJlYWs7CiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMjI0IHwgdSA+PiAxMjsKICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAxMjggfCB1ID4+IDYgJiA2MzsKICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAxMjggfCB1ICYgNjM7CiAgICB9IGVsc2UgaWYgKHUgPD0gMjA5NzE1MSkgewogICAgICBpZiAob3V0SWR4ICsgMyA+PSBlbmRJZHgpIGJyZWFrOwogICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDI0MCB8IHUgPj4gMTg7CiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMTI4IHwgdSA+PiAxMiAmIDYzOwogICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDEyOCB8IHUgPj4gNiAmIDYzOwogICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDEyOCB8IHUgJiA2MzsKICAgIH0gZWxzZSBpZiAodSA8PSA2NzEwODg2MykgewogICAgICBpZiAob3V0SWR4ICsgNCA+PSBlbmRJZHgpIGJyZWFrOwogICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDI0OCB8IHUgPj4gMjQ7CiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMTI4IHwgdSA+PiAxOCAmIDYzOwogICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDEyOCB8IHUgPj4gMTIgJiA2MzsKICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAxMjggfCB1ID4+IDYgJiA2MzsKICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAxMjggfCB1ICYgNjM7CiAgICB9IGVsc2UgewogICAgICBpZiAob3V0SWR4ICsgNSA+PSBlbmRJZHgpIGJyZWFrOwogICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDI1MiB8IHUgPj4gMzA7CiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMTI4IHwgdSA+PiAyNCAmIDYzOwogICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDEyOCB8IHUgPj4gMTggJiA2MzsKICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAxMjggfCB1ID4+IDEyICYgNjM7CiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMTI4IHwgdSA+PiA2ICYgNjM7CiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMTI4IHwgdSAmIDYzOwogICAgfQogIH0KCiAgb3V0VThBcnJheVtvdXRJZHhdID0gMDsKICByZXR1cm4gb3V0SWR4IC0gc3RhcnRJZHg7Cn0KCmZ1bmN0aW9uIHN0cmluZ1RvVVRGOChzdHIsIG91dFB0ciwgbWF4Qnl0ZXNUb1dyaXRlKSB7CiAgcmV0dXJuIHN0cmluZ1RvVVRGOEFycmF5KHN0ciwgSEVBUFU4LCBvdXRQdHIsIG1heEJ5dGVzVG9Xcml0ZSk7Cn0KCmZ1bmN0aW9uIGxlbmd0aEJ5dGVzVVRGOChzdHIpIHsKICB2YXIgbGVuID0gMDsKCiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHsKICAgIHZhciB1ID0gc3RyLmNoYXJDb2RlQXQoaSk7CiAgICBpZiAodSA+PSA1NTI5NiAmJiB1IDw9IDU3MzQzKSB1ID0gNjU1MzYgKyAoKHUgJiAxMDIzKSA8PCAxMCkgfCBzdHIuY2hhckNvZGVBdCgrK2kpICYgMTAyMzsKCiAgICBpZiAodSA8PSAxMjcpIHsKICAgICAgKytsZW47CiAgICB9IGVsc2UgaWYgKHUgPD0gMjA0NykgewogICAgICBsZW4gKz0gMjsKICAgIH0gZWxzZSBpZiAodSA8PSA2NTUzNSkgewogICAgICBsZW4gKz0gMzsKICAgIH0gZWxzZSBpZiAodSA8PSAyMDk3MTUxKSB7CiAgICAgIGxlbiArPSA0OwogICAgfSBlbHNlIGlmICh1IDw9IDY3MTA4ODYzKSB7CiAgICAgIGxlbiArPSA1OwogICAgfSBlbHNlIHsKICAgICAgbGVuICs9IDY7CiAgICB9CiAgfQoKICByZXR1cm4gbGVuOwp9Cgp2YXIgVVRGMTZEZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyICE9PSAidW5kZWZpbmVkIiA/IG5ldyBUZXh0RGVjb2RlcigidXRmLTE2bGUiKSA6IHVuZGVmaW5lZDsKdmFyIFdBU01fUEFHRV9TSVpFID0gNjU1MzY7CnZhciBBU01KU19QQUdFX1NJWkUgPSAxNjc3NzIxNjsKCmZ1bmN0aW9uIGFsaWduVXAoeCwgbXVsdGlwbGUpIHsKICBpZiAoeCAlIG11bHRpcGxlID4gMCkgewogICAgeCArPSBtdWx0aXBsZSAtIHggJSBtdWx0aXBsZTsKICB9CgogIHJldHVybiB4Owp9Cgp2YXIgYnVmZmVyLCBIRUFQOCwgSEVBUFU4LCBIRUFQMTYsIEhFQVBVMTYsIEhFQVAzMiwgSEVBUFUzMiwgSEVBUEYzMiwgSEVBUEY2NDsKCmZ1bmN0aW9uIHVwZGF0ZUdsb2JhbEJ1ZmZlcihidWYpIHsKICBNb2R1bGVbImJ1ZmZlciJdID0gYnVmZmVyID0gYnVmOwp9CgpmdW5jdGlvbiB1cGRhdGVHbG9iYWxCdWZmZXJWaWV3cygpIHsKICBNb2R1bGVbIkhFQVA4Il0gPSBIRUFQOCA9IG5ldyBJbnQ4QXJyYXkoYnVmZmVyKTsKICBNb2R1bGVbIkhFQVAxNiJdID0gSEVBUDE2ID0gbmV3IEludDE2QXJyYXkoYnVmZmVyKTsKICBNb2R1bGVbIkhFQVAzMiJdID0gSEVBUDMyID0gbmV3IEludDMyQXJyYXkoYnVmZmVyKTsKICBNb2R1bGVbIkhFQVBVOCJdID0gSEVBUFU4ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTsKICBNb2R1bGVbIkhFQVBVMTYiXSA9IEhFQVBVMTYgPSBuZXcgVWludDE2QXJyYXkoYnVmZmVyKTsKICBNb2R1bGVbIkhFQVBVMzIiXSA9IEhFQVBVMzIgPSBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTsKICBNb2R1bGVbIkhFQVBGMzIiXSA9IEhFQVBGMzIgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcik7CiAgTW9kdWxlWyJIRUFQRjY0Il0gPSBIRUFQRjY0ID0gbmV3IEZsb2F0NjRBcnJheShidWZmZXIpOwp9Cgp2YXIgU1RBVElDX0JBU0UsIFNUQVRJQ1RPUCwgc3RhdGljU2VhbGVkOwp2YXIgU1RBQ0tfQkFTRSwgU1RBQ0tUT1AsIFNUQUNLX01BWDsKdmFyIERZTkFNSUNfQkFTRSwgRFlOQU1JQ1RPUF9QVFI7ClNUQVRJQ19CQVNFID0gU1RBVElDVE9QID0gU1RBQ0tfQkFTRSA9IFNUQUNLVE9QID0gU1RBQ0tfTUFYID0gRFlOQU1JQ19CQVNFID0gRFlOQU1JQ1RPUF9QVFIgPSAwOwpzdGF0aWNTZWFsZWQgPSBmYWxzZTsKCmZ1bmN0aW9uIGFib3J0T25DYW5ub3RHcm93TWVtb3J5KCkgewogIGFib3J0KCJDYW5ub3QgZW5sYXJnZSBtZW1vcnkgYXJyYXlzLiBFaXRoZXIgKDEpIGNvbXBpbGUgd2l0aCAgLXMgVE9UQUxfTUVNT1JZPVggIHdpdGggWCBoaWdoZXIgdGhhbiB0aGUgY3VycmVudCB2YWx1ZSAiICsgVE9UQUxfTUVNT1JZICsgIiwgKDIpIGNvbXBpbGUgd2l0aCAgLXMgQUxMT1dfTUVNT1JZX0dST1dUSD0xICB3aGljaCBhbGxvd3MgaW5jcmVhc2luZyB0aGUgc2l6ZSBhdCBydW50aW1lLCBvciAoMykgaWYgeW91IHdhbnQgbWFsbG9jIHRvIHJldHVybiBOVUxMICgwKSBpbnN0ZWFkIG9mIHRoaXMgYWJvcnQsIGNvbXBpbGUgd2l0aCAgLXMgQUJPUlRJTkdfTUFMTE9DPTAgIik7Cn0KCmZ1bmN0aW9uIGVubGFyZ2VNZW1vcnkoKSB7CiAgYWJvcnRPbkNhbm5vdEdyb3dNZW1vcnkoKTsKfQoKdmFyIFRPVEFMX1NUQUNLID0gTW9kdWxlWyJUT1RBTF9TVEFDSyJdIHx8IDUyNDI4ODA7CnZhciBUT1RBTF9NRU1PUlkgPSBNb2R1bGVbIlRPVEFMX01FTU9SWSJdIHx8IDY3MTA4ODY0OwppZiAoVE9UQUxfTUVNT1JZIDwgVE9UQUxfU1RBQ0spIGVycigiVE9UQUxfTUVNT1JZIHNob3VsZCBiZSBsYXJnZXIgdGhhbiBUT1RBTF9TVEFDSywgd2FzICIgKyBUT1RBTF9NRU1PUlkgKyAiISAoVE9UQUxfU1RBQ0s9IiArIFRPVEFMX1NUQUNLICsgIikiKTsKCmlmIChNb2R1bGVbImJ1ZmZlciJdKSB7CiAgYnVmZmVyID0gTW9kdWxlWyJidWZmZXIiXTsKfSBlbHNlIHsKICBpZiAoKHR5cGVvZiBXZWJBc3NlbWJseSA9PT0gInVuZGVmaW5lZCIgPyAidW5kZWZpbmVkIiA6IF90eXBlb2YoV2ViQXNzZW1ibHkpKSA9PT0gIm9iamVjdCIgJiYgdHlwZW9mIFdlYkFzc2VtYmx5Lk1lbW9yeSA9PT0gImZ1bmN0aW9uIikgewogICAgTW9kdWxlWyJ3YXNtTWVtb3J5Il0gPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsKICAgICAgImluaXRpYWwiOiBUT1RBTF9NRU1PUlkgLyBXQVNNX1BBR0VfU0laRSwKICAgICAgIm1heGltdW0iOiBUT1RBTF9NRU1PUlkgLyBXQVNNX1BBR0VfU0laRQogICAgfSk7CiAgICBidWZmZXIgPSBNb2R1bGVbIndhc21NZW1vcnkiXS5idWZmZXI7CiAgfSBlbHNlIHsKICAgIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihUT1RBTF9NRU1PUlkpOwogIH0KCiAgTW9kdWxlWyJidWZmZXIiXSA9IGJ1ZmZlcjsKfQoKdXBkYXRlR2xvYmFsQnVmZmVyVmlld3MoKTsKCmZ1bmN0aW9uIGdldFRvdGFsTWVtb3J5KCkgewogIHJldHVybiBUT1RBTF9NRU1PUlk7Cn0KCmZ1bmN0aW9uIGNhbGxSdW50aW1lQ2FsbGJhY2tzKGNhbGxiYWNrcykgewogIHdoaWxlIChjYWxsYmFja3MubGVuZ3RoID4gMCkgewogICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzLnNoaWZ0KCk7CgogICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAiZnVuY3Rpb24iKSB7CiAgICAgIGNhbGxiYWNrKCk7CiAgICAgIGNvbnRpbnVlOwogICAgfQoKICAgIHZhciBmdW5jID0gY2FsbGJhY2suZnVuYzsKCiAgICBpZiAodHlwZW9mIGZ1bmMgPT09ICJudW1iZXIiKSB7CiAgICAgIGlmIChjYWxsYmFjay5hcmcgPT09IHVuZGVmaW5lZCkgewogICAgICAgIE1vZHVsZVsiZHluQ2FsbF92Il0oZnVuYyk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgTW9kdWxlWyJkeW5DYWxsX3ZpIl0oZnVuYywgY2FsbGJhY2suYXJnKTsKICAgICAgfQogICAgfSBlbHNlIHsKICAgICAgZnVuYyhjYWxsYmFjay5hcmcgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjYWxsYmFjay5hcmcpOwogICAgfQogIH0KfQoKdmFyIF9fQVRQUkVSVU5fXyA9IFtdOwp2YXIgX19BVElOSVRfXyA9IFtdOwp2YXIgX19BVE1BSU5fXyA9IFtdOwp2YXIgX19BVFBPU1RSVU5fXyA9IFtdOwp2YXIgcnVudGltZUluaXRpYWxpemVkID0gZmFsc2U7CgpmdW5jdGlvbiBwcmVSdW4oKSB7CiAgaWYgKE1vZHVsZVsicHJlUnVuIl0pIHsKICAgIGlmICh0eXBlb2YgTW9kdWxlWyJwcmVSdW4iXSA9PSAiZnVuY3Rpb24iKSBNb2R1bGVbInByZVJ1biJdID0gW01vZHVsZVsicHJlUnVuIl1dOwoKICAgIHdoaWxlIChNb2R1bGVbInByZVJ1biJdLmxlbmd0aCkgewogICAgICBhZGRPblByZVJ1bihNb2R1bGVbInByZVJ1biJdLnNoaWZ0KCkpOwogICAgfQogIH0KCiAgY2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBSRVJVTl9fKTsKfQoKZnVuY3Rpb24gZW5zdXJlSW5pdFJ1bnRpbWUoKSB7CiAgaWYgKHJ1bnRpbWVJbml0aWFsaXplZCkgcmV0dXJuOwogIHJ1bnRpbWVJbml0aWFsaXplZCA9IHRydWU7CiAgY2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVElOSVRfXyk7Cn0KCmZ1bmN0aW9uIHByZU1haW4oKSB7CiAgY2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVE1BSU5fXyk7Cn0KCmZ1bmN0aW9uIHBvc3RSdW4oKSB7CiAgaWYgKE1vZHVsZVsicG9zdFJ1biJdKSB7CiAgICBpZiAodHlwZW9mIE1vZHVsZVsicG9zdFJ1biJdID09ICJmdW5jdGlvbiIpIE1vZHVsZVsicG9zdFJ1biJdID0gW01vZHVsZVsicG9zdFJ1biJdXTsKCiAgICB3aGlsZSAoTW9kdWxlWyJwb3N0UnVuIl0ubGVuZ3RoKSB7CiAgICAgIGFkZE9uUG9zdFJ1bihNb2R1bGVbInBvc3RSdW4iXS5zaGlmdCgpKTsKICAgIH0KICB9CgogIGNhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRQT1NUUlVOX18pOwp9CgpmdW5jdGlvbiBhZGRPblByZVJ1bihjYikgewogIF9fQVRQUkVSVU5fXy51bnNoaWZ0KGNiKTsKfQoKZnVuY3Rpb24gYWRkT25Qb3N0UnVuKGNiKSB7CiAgX19BVFBPU1RSVU5fXy51bnNoaWZ0KGNiKTsKfQoKZnVuY3Rpb24gd3JpdGVBcnJheVRvTWVtb3J5KGFycmF5LCBidWZmZXIpIHsKICBIRUFQOC5zZXQoYXJyYXksIGJ1ZmZlcik7Cn0KCnZhciBNYXRoX2FicyA9IE1hdGguYWJzOwp2YXIgTWF0aF9jZWlsID0gTWF0aC5jZWlsOwp2YXIgTWF0aF9mbG9vciA9IE1hdGguZmxvb3I7CnZhciBNYXRoX21pbiA9IE1hdGgubWluOwp2YXIgcnVuRGVwZW5kZW5jaWVzID0gMDsKdmFyIHJ1bkRlcGVuZGVuY3lXYXRjaGVyID0gbnVsbDsKdmFyIGRlcGVuZGVuY2llc0Z1bGZpbGxlZCA9IG51bGw7CgpmdW5jdGlvbiBhZGRSdW5EZXBlbmRlbmN5KGlkKSB7CiAgcnVuRGVwZW5kZW5jaWVzKys7CgogIGlmIChNb2R1bGVbIm1vbml0b3JSdW5EZXBlbmRlbmNpZXMiXSkgewogICAgTW9kdWxlWyJtb25pdG9yUnVuRGVwZW5kZW5jaWVzIl0ocnVuRGVwZW5kZW5jaWVzKTsKICB9Cn0KCmZ1bmN0aW9uIHJlbW92ZVJ1bkRlcGVuZGVuY3koaWQpIHsKICBydW5EZXBlbmRlbmNpZXMtLTsKCiAgaWYgKE1vZHVsZVsibW9uaXRvclJ1bkRlcGVuZGVuY2llcyJdKSB7CiAgICBNb2R1bGVbIm1vbml0b3JSdW5EZXBlbmRlbmNpZXMiXShydW5EZXBlbmRlbmNpZXMpOwogIH0KCiAgaWYgKHJ1bkRlcGVuZGVuY2llcyA9PSAwKSB7CiAgICBpZiAocnVuRGVwZW5kZW5jeVdhdGNoZXIgIT09IG51bGwpIHsKICAgICAgY2xlYXJJbnRlcnZhbChydW5EZXBlbmRlbmN5V2F0Y2hlcik7CiAgICAgIHJ1bkRlcGVuZGVuY3lXYXRjaGVyID0gbnVsbDsKICAgIH0KCiAgICBpZiAoZGVwZW5kZW5jaWVzRnVsZmlsbGVkKSB7CiAgICAgIHZhciBjYWxsYmFjayA9IGRlcGVuZGVuY2llc0Z1bGZpbGxlZDsKICAgICAgZGVwZW5kZW5jaWVzRnVsZmlsbGVkID0gbnVsbDsKICAgICAgY2FsbGJhY2soKTsKICAgIH0KICB9Cn0KCk1vZHVsZVsicHJlbG9hZGVkSW1hZ2VzIl0gPSB7fTsKTW9kdWxlWyJwcmVsb2FkZWRBdWRpb3MiXSA9IHt9Owp2YXIgZGF0YVVSSVByZWZpeCA9ICJkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsIjsKCmZ1bmN0aW9uIGlzRGF0YVVSSShmaWxlbmFtZSkgewogIHJldHVybiBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPyBmaWxlbmFtZS5zdGFydHNXaXRoKGRhdGFVUklQcmVmaXgpIDogZmlsZW5hbWUuaW5kZXhPZihkYXRhVVJJUHJlZml4KSA9PT0gMDsKfQoKZnVuY3Rpb24gaW50ZWdyYXRlV2FzbUpTKCkgewogIHZhciB3YXNtVGV4dEZpbGUgPSAiIjsKICB2YXIgd2FzbUJpbmFyeUZpbGUgPSAiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LEFHRnpiUUVBQUFBQlRBMWdBMzkvZndCZ0FYOEFZQUFCZjJBQ2YzOEJmMkFEZjM5L0FYOWdBWDhCZjJBQ2YzOEFZQU4vZjM0QVlBTi9mbjhBWUFKK2ZnRitZQUY4QVg1Z0JYOS9mMzkvQUdBRWYzOS9md0FDandFT0EyVnVkZ0ZqQUFFRFpXNTJBV1FBQlFObGJuWUJaUUFGQTJWdWRnRm1BQVFEWlc1MkFXY0FBd05sYm5ZQmFBQUNBMlZ1ZGdGcEFBSURaVzUyQVdvQUFnTmxibllCYXdBQkEyVnVkZ3hmWDNSaFlteGxYMkpoYzJVRGZ3QURaVzUyQVdFRGZ3QURaVzUyQVdJRGZ3QURaVzUyQm0xbGJXOXllUUlCZ0FpQUNBTmxibllGZEdGaWJHVUJjQUVJQ0FNc0t3QUNCQUFFQndVQkRBTUFCUUVDQmdFS0NRRUFCZ0FBQXdBQUNBWUVBQUVCQUFFSUN3c0xBQUFBQWdVR0N3Si9BU01CQzM4Qkl3SUxCeFVGQVd3QUxBRnRBQlFCYmdBekFXOEFLZ0Z3QURJSkRnRUFJd0FMQ0JNaU1UQXZFeE1UQ3VqbEJDdXJIUUVWZnlBQUlBSWdBQ2dDQUhNaUJqWUNBQ0FBUVFocUlnb29BZ0FnQWtFUWMzTWhCU0FLSUFVMkFnQWdBRUVRYWlJSEtBSUFJQUpCSUhOeklRTWdCeUFETmdJQUlBQkJHR29pRENnQ0FDQUNRVEJ6Y3lFRUlBd2dCRFlDQUNBQVFTQnFJaEFnRUNnQ0FDQUNRY0FBYzNNMkFnQWdBRUVvYWlJUklCRW9BZ0FnQWtIUUFITnpOZ0lBSUFCQk1Hb2lGQ0FVS0FJQUlBSkI0QUJ6Y3pZQ0FDQUFRVGhxSWhVZ0ZTZ0NBQ0FDUWZBQWMzTTJBZ0FnQlVFSGRrSCtBM0VpQ0VFQ2RFSHdLbW9vQWdBaEFpQURRUTkyUWY0RGNTSUpRUUowUWZBcWFpZ0NBQ0VGSUFSQkdIWkJBWFFpQkVFQ2RFSHdLbW9vQWdBaEF5QUFMUUEvUVFGMEloTkJBblJCOENwcUtBSUFJaFpCR0hRZ0UwRUJja0VDZEVId0ttb29BZ0FpRTBFSWRuSWdBQzBBTmtFQmRDSVBRUUowUWZBcWFpZ0NBQ0lTUVJCMElBOUJBWEpCQW5SQjhDcHFLQUlBSWc5QkVIWnlJQUF0QUMxQkFYUWlDMEVDZEVId0ttb29BZ0FpRFVFSWRDQUxRUUZ5UVFKMFFmQXFhaWdDQUNJTFFSaDJjaUFBTFFBa1FRRjBJZzVCQW5SQjhDcHFLQUlBSUFSQkFYSkJBblJCOENwcUtBSUFJZ1JCR0hRZ0EwRUlkbklnQ1VFQmNrRUNkRUh3S21vb0FnQWlDVUVRZENBRlFSQjJjaUFHUVFGMFFmNERjU0lHUVFGeVFRSjBRZkFxYWlnQ0FDQUlRUUZ5UVFKMFFmQXFhaWdDQUNJSVFRaDBJQUpCR0haeWMzTnpjM056Y3lFWElBRWdFMEVZZENBV1FRaDJjaUFQUVJCMElCSkJFSFp5SUF0QkNIUWdEVUVZZG5JZ0RrRUJja0VDZEVId0ttb29BZ0FnQTBFWWRDQUVRUWgyY2lBRlFSQjBJQWxCRUhaeUlBWkJBblJCOENwcUtBSUFJQUpCQ0hRZ0NFRVlkbkp6YzNOemMzTnpOZ0lBSUFFZ0Z6WUNCQ0FBTFFBUlFRRjBJZ1JCQW5SQjhDcHFLQUlBSVFJZ0FDMEFHa0VCZENJR1FRSjBRZkFxYWlnQ0FDRUZJQUF0QUNOQkFYUWlDRUVDZEVId0ttb29BZ0FoQXlBQUxRQUhRUUYwSWhKQkFuUkI4Q3BxS0FJQUloTkJHSFFnRWtFQmNrRUNkRUh3S21vb0FnQWlFa0VJZG5JZ0FDMEFQa0VCZENJT1FRSjBRZkFxYWlnQ0FDSVBRUkIwSUE1QkFYSkJBblJCOENwcUtBSUFJZzVCRUhaeUlBQXRBRFZCQVhRaUMwRUNkRUh3S21vb0FnQWlEVUVJZENBTFFRRnlRUUowUWZBcWFpZ0NBQ0lMUVJoMmNpQUFMUUFzUVFGMElnbEJBblJCOENwcUtBSUFJQWhCQVhKQkFuUkI4Q3BxS0FJQUlnaEJHSFFnQTBFSWRuSWdCa0VCY2tFQ2RFSHdLbW9vQWdBaUJrRVFkQ0FGUVJCMmNpQUtMUUFBUVFGMElncEJBWEpCQW5SQjhDcHFLQUlBSUFSQkFYSkJBblJCOENwcUtBSUFJZ1JCQ0hRZ0FrRVlkbkp6YzNOemMzTnpJUllnQVNBU1FSaDBJQk5CQ0haeUlBNUJFSFFnRDBFUWRuSWdDMEVJZENBTlFSaDJjaUFKUVFGeVFRSjBRZkFxYWlnQ0FDQURRUmgwSUFoQkNIWnlJQVZCRUhRZ0JrRVFkbklnQ2tFQ2RFSHdLbW9vQWdBZ0FrRUlkQ0FFUVJoMmNuTnpjM056YzNNMkFnZ2dBU0FXTmdJTUlBQXRBQmxCQVhRaUEwRUNkRUh3S21vb0FnQWhBaUFBTFFBaVFRRjBJZ1JCQW5SQjhDcHFLQUlBSVFvZ0FDMEFLMEVCZENJR1FRSjBRZkFxYWlnQ0FDRUZJQUF0QUE5QkFYUWlEMEVDZEVId0ttb29BZ0FpRWtFWWRDQVBRUUZ5UVFKMFFmQXFhaWdDQUNJUFFRaDJjaUFBTFFBR1FRRjBJZzFCQW5SQjhDcHFLQUlBSWc1QkVIUWdEVUVCY2tFQ2RFSHdLbW9vQWdBaURVRVFkbklnQUMwQVBVRUJkQ0lKUVFKMFFmQXFhaWdDQUNJTFFRaDBJQWxCQVhKQkFuUkI4Q3BxS0FJQUlnbEJHSFp5SUFBdEFEUkJBWFFpQ0VFQ2RFSHdLbW9vQWdBZ0JrRUJja0VDZEVId0ttb29BZ0FpQmtFWWRDQUZRUWgyY2lBRVFRRnlRUUowUWZBcWFpZ0NBQ0lFUVJCMElBcEJFSFp5SUFjdEFBQkJBWFFpQjBFQmNrRUNkRUh3S21vb0FnQWdBMEVCY2tFQ2RFSHdLbW9vQWdBaUEwRUlkQ0FDUVJoMmNuTnpjM056YzNNaEV5QUJJQTlCR0hRZ0VrRUlkbklnRFVFUWRDQU9RUkIyY2lBSlFRaDBJQXRCR0haeUlBaEJBWEpCQW5SQjhDcHFLQUlBSUFWQkdIUWdCa0VJZG5JZ0NrRVFkQ0FFUVJCMmNpQUhRUUowUWZBcWFpZ0NBQ0FDUVFoMElBTkJHSFp5YzNOemMzTnpjellDRUNBQklCTTJBaFFnQUMwQUlVRUJkQ0lIUVFKMFFmQXFhaWdDQUNFQ0lBQXRBQ3BCQVhRaUEwRUNkRUh3S21vb0FnQWhDaUFBTFFBelFRRjBJZ1JCQW5SQjhDcHFLQUlBSVFVZ0FDMEFGMEVCZENJT1FRSjBRZkFxYWlnQ0FDSVBRUmgwSUE1QkFYSkJBblJCOENwcUtBSUFJZzVCQ0haeUlBQXRBQTVCQVhRaUMwRUNkRUh3S21vb0FnQWlEVUVRZENBTFFRRnlRUUowUWZBcWFpZ0NBQ0lMUVJCMmNpQUFMUUFGUVFGMElnaEJBblJCOENwcUtBSUFJZ2xCQ0hRZ0NFRUJja0VDZEVId0ttb29BZ0FpQ0VFWWRuSWdBQzBBUEVFQmRDSUdRUUowUWZBcWFpZ0NBQ0FFUVFGeVFRSjBRZkFxYWlnQ0FDSUVRUmgwSUFWQkNIWnlJQU5CQVhKQkFuUkI4Q3BxS0FJQUlnTkJFSFFnQ2tFUWRuSWdEQzBBQUVFQmRDSU1RUUZ5UVFKMFFmQXFhaWdDQUNBSFFRRnlRUUowUWZBcWFpZ0NBQ0lIUVFoMElBSkJHSFp5YzNOemMzTnpjeUVTSUFFZ0RrRVlkQ0FQUVFoMmNpQUxRUkIwSUExQkVIWnlJQWhCQ0hRZ0NVRVlkbklnQmtFQmNrRUNkRUh3S21vb0FnQWdCVUVZZENBRVFRaDJjaUFLUVJCMElBTkJFSFp5SUF4QkFuUkI4Q3BxS0FJQUlBSkJDSFFnQjBFWWRuSnpjM056YzNOek5nSVlJQUVnRWpZQ0hDQUFMUUFwUVFGMElnZEJBblJCOENwcUtBSUFJUUlnQUMwQU1rRUJkQ0lEUVFKMFFmQXFhaWdDQUNFS0lBQXRBRHRCQVhRaURFRUNkRUh3S21vb0FnQWhCU0FBTFFBZlFRRjBJZzFCQW5SQjhDcHFLQUlBSWc1QkdIUWdEVUVCY2tFQ2RFSHdLbW9vQWdBaURVRUlkbklnQUMwQUZrRUJkQ0lKUVFKMFFmQXFhaWdDQUNJTFFSQjBJQWxCQVhKQkFuUkI4Q3BxS0FJQUlnbEJFSFp5SUFBdEFBMUJBWFFpQmtFQ2RFSHdLbW9vQWdBaUNFRUlkQ0FHUVFGeVFRSjBRZkFxYWlnQ0FDSUdRUmgyY2lBTVFRRnlRUUowUWZBcWFpZ0NBQ0lNUVJoMElBVkJDSFp5SUFOQkFYSkJBblJCOENwcUtBSUFJZ05CRUhRZ0NrRVFkbklnRUMwQUFFRUJkQ0lFUVFGeVFRSjBRZkFxYWlnQ0FDQUhRUUZ5UVFKMFFmQXFhaWdDQUNJSFFRaDBJQUpCR0haeWMzTnpJQUF0QUFSQkFYUWlFRUVDZEVId0ttb29BZ0J6YzNOeklROGdBU0FOUVJoMElBNUJDSFp5SUFsQkVIUWdDMEVRZG5JZ0JrRUlkQ0FJUVJoMmNpQVFRUUZ5UVFKMFFmQXFhaWdDQUNBRlFSaDBJQXhCQ0haeUlBcEJFSFFnQTBFUWRuSWdCRUVDZEVId0ttb29BZ0FnQWtFSWRDQUhRUmgyY25OemMzTnpjM00yQWlBZ0FTQVBOZ0lrSUFBdEFERkJBWFFpQjBFQ2RFSHdLbW9vQWdBaEFpQUFMUUE2UVFGMElnTkJBblJCOENwcUtBSUFJUW9nQUMwQUEwRUJkQ0lNUVFKMFFmQXFhaWdDQUNFRklBQXRBQ2RCQVhRaUMwRUNkRUh3S21vb0FnQWlEVUVZZENBTFFRRnlRUUowUWZBcWFpZ0NBQ0lMUVFoMmNpQUFMUUFlUVFGMElnaEJBblJCOENwcUtBSUFJZ2xCRUhRZ0NFRUJja0VDZEVId0ttb29BZ0FpQ0VFUWRuSWdBQzBBREVFQmRDSVFRUUowUWZBcWFpZ0NBQ0FNUVFGeVFRSjBRZkFxYWlnQ0FDSU1RUmgwSUFWQkNIWnlJQU5CQVhKQkFuUkI4Q3BxS0FJQUlnTkJFSFFnQ2tFUWRuSWdFUzBBQUVFQmRDSUVRUUZ5UVFKMFFmQXFhaWdDQUNBSFFRRnlRUUowUWZBcWFpZ0NBQ0lIUVFoMElBSkJHSFp5YzNOemN5QUFMUUFWUVFGMEloRkJBblJCOENwcUtBSUFJZ1pCQ0hRZ0VVRUJja0VDZEVId0ttb29BZ0FpRVVFWWRuSnpjM01oRGlBQklBdEJHSFFnRFVFSWRuSWdDRUVRZENBSlFSQjJjaUFSUVFoMElBWkJHSFp5SUJCQkFYSkJBblJCOENwcUtBSUFJQVZCR0hRZ0RFRUlkbklnQ2tFUWRDQURRUkIyY2lBRVFRSjBRZkFxYWlnQ0FDQUNRUWgwSUFkQkdIWnljM056YzNOemN6WUNLQ0FCSUE0MkFpd2dBQzBBT1VFQmRDSUhRUUowUWZBcWFpZ0NBQ0VDSUFBdEFBSkJBWFFpQTBFQ2RFSHdLbW9vQWdBaENpQUFMUUFMUVFGMElneEJBblJCOENwcUtBSUFJUVVnQUMwQUwwRUJkQ0lKUVFKMFFmQXFhaWdDQUNJTFFSaDBJQWxCQVhKQkFuUkI4Q3BxS0FJQUlnbEJDSFp5SUFBdEFDWkJBWFFpQmtFQ2RFSHdLbW9vQWdBaUNFRVFkQ0FHUVFGeVFRSjBRZkFxYWlnQ0FDSUdRUkIyY2lBQUxRQVVRUUYwSWhCQkFuUkI4Q3BxS0FJQUlBeEJBWEpCQW5SQjhDcHFLQUlBSWd4QkdIUWdCVUVJZG5JZ0EwRUJja0VDZEVId0ttb29BZ0FpQTBFUWRDQUtRUkIyY2lBVUxRQUFRUUYwSWdSQkFYSkJBblJCOENwcUtBSUFJQWRCQVhKQkFuUkI4Q3BxS0FJQUlnZEJDSFFnQWtFWWRuSnpjM056SUFBdEFCMUJBWFFpRVVFQ2RFSHdLbW9vQWdBaUZFRUlkQ0FSUVFGeVFRSjBRZkFxYWlnQ0FDSVJRUmgyY25OemN5RU5JQUVnQ1VFWWRDQUxRUWgyY2lBR1FSQjBJQWhCRUhaeUlCRkJDSFFnRkVFWWRuSWdFRUVCY2tFQ2RFSHdLbW9vQWdBZ0JVRVlkQ0FNUVFoMmNpQUtRUkIwSUFOQkVIWnlJQVJCQW5SQjhDcHFLQUlBSUFKQkNIUWdCMEVZZG5KemMzTnpjM056TmdJd0lBRWdEVFlDTkNBQUxRQUJRUUYwSWdOQkFuUkI4Q3BxS0FJQUlRSWdBQzBBQ2tFQmRDSU1RUUowUWZBcWFpZ0NBQ0VLSUFBdEFCTkJBWFFpQkVFQ2RFSHdLbW9vQWdBaEJTQUFMUUEzUVFGMEloQkJBblJCOENwcUtBSUFJUWNnQjBFWWRDQVFRUUZ5UVFKMFFmQXFhaWdDQUNJUVFRaDJjaUFBTFFBY1FRRjBJaFJCQW5SQjhDcHFLQUlBSUFSQkFYSkJBblJCOENwcUtBSUFJZ1JCR0hRZ0JVRUlkbklnREVFQmNrRUNkRUh3S21vb0FnQWlERUVRZENBS1FSQjJjaUFWTFFBQVFRRjBJaEZCQVhKQkFuUkI4Q3BxS0FJQUlBTkJBWEpCQW5SQjhDcHFLQUlBSWdOQkNIUWdBa0VZZG5KemMzTnpJQUF0QUNWQkFYUWlGVUVDZEVId0ttb29BZ0FpQmtFSWRDQVZRUUZ5UVFKMFFmQXFhaWdDQUNJVlFSaDJjbk1nQUMwQUxrRUJkQ0lBUVFKMFFmQXFhaWdDQUNJSVFSQjBJQUJCQVhKQkFuUkI4Q3BxS0FJQUlnQkJFSFp5YzNNaENTQUJJQkJCR0hRZ0IwRUlkbklnQUVFUWRDQUlRUkIyY2lBVlFRaDBJQVpCR0haeUlCUkJBWEpCQW5SQjhDcHFLQUlBSUFWQkdIUWdCRUVJZG5JZ0NrRVFkQ0FNUVJCMmNpQVJRUUowUWZBcWFpZ0NBQ0FDUVFoMElBTkJHSFp5YzNOemMzTnpjellDT0NBQklBazJBandMS1FFQmZrR0F6QUJCZ013QUtRTUFRcTMrMWVUVWhmMm8yQUIrUWdGOElnQTNBd0FnQUVJaGlLY0x3d01CQTM4Z0FrR0F3QUJPQkVBZ0FDQUJJQUlRQXc4TElBQWhCQ0FBSUFKcUlRTWdBRUVEY1NBQlFRTnhSZ1JBQTBBZ0FFRURjUVJBSUFKRkJFQWdCQThMSUFBZ0FTd0FBRG9BQUNBQVFRRnFJUUFnQVVFQmFpRUJJQUpCQVdzaEFnd0JDd3NnQTBGOGNTSUNRVUJxSVFVRFFDQUFJQVZNQkVBZ0FDQUJLQUlBTmdJQUlBQWdBU2dDQkRZQ0JDQUFJQUVvQWdnMkFnZ2dBQ0FCS0FJTU5nSU1JQUFnQVNnQ0VEWUNFQ0FBSUFFb0FoUTJBaFFnQUNBQktBSVlOZ0lZSUFBZ0FTZ0NIRFlDSENBQUlBRW9BaUEyQWlBZ0FDQUJLQUlrTmdJa0lBQWdBU2dDS0RZQ0tDQUFJQUVvQWl3MkFpd2dBQ0FCS0FJd05nSXdJQUFnQVNnQ05EWUNOQ0FBSUFFb0FqZzJBamdnQUNBQktBSThOZ0k4SUFCQlFHc2hBQ0FCUVVCcklRRU1BUXNMQTBBZ0FDQUNTQVJBSUFBZ0FTZ0NBRFlDQUNBQVFRUnFJUUFnQVVFRWFpRUJEQUVMQ3dVZ0EwRUVheUVDQTBBZ0FDQUNTQVJBSUFBZ0FTd0FBRG9BQUNBQUlBRXNBQUU2QUFFZ0FDQUJMQUFDT2dBQ0lBQWdBU3dBQXpvQUF5QUFRUVJxSVFBZ0FVRUVhaUVCREFFTEN3c0RRQ0FBSUFOSUJFQWdBQ0FCTEFBQU9nQUFJQUJCQVdvaEFDQUJRUUZxSVFFTUFRc0xJQVFMMkI0QkczOGdBQ0FBS0FJQVFYOXpOZ0lBSUFCQkJHb2lCaUFHS0FJQUlBSkJmM056TmdJQUlBQkJDR29pQkNnQ0FFRi9jeUVISUFRZ0J6WUNBQ0FBUVF4cUlnUWdCQ2dDQUNBQ1FmLy8vLzkrYzNNMkFnQWdBRUVRYWlJRklBVW9BZ0JCZjNNMkFnQWdBRUVVYWlJSklBa29BZ0FnQWtILy8vLy9mWE56TmdJQUlBQkJHR29pRFNnQ0FFRi9jeUVJSUEwZ0NEWUNBQ0FBUVJ4cUlnb2dDaWdDQUNBQ1FmLy8vLzk4YzNNMkFnQWdBRUVnYWlJUUlCQW9BZ0JCZjNNMkFnQWdBRUVrYWlJTElBc29BZ0FnQWtILy8vLy9lM056TmdJQUlBQkJLR29pRVNnQ0FFRi9jeUVESUJFZ0F6WUNBQ0FBUVN4cUloUWdGQ2dDQUNBQ1FmLy8vLzk2YzNNMkFnQWdBRUV3YWlJVklCVW9BZ0JCZjNNMkFnQWdBRUUwYWlJWklCa29BZ0FnQWtILy8vLy9lWE56TmdJQUlBQkJPR29pR2lnQ0FFRi9jeUVPSUJvZ0RqWUNBQ0FBUVR4cUloc2dHeWdDQUNBQ1FmLy8vLzk0YzNNMkFnQWdDRUVIZGtIK0EzRWlERUVDZEVId0ttb29BZ0FoQWlBRFFROTJRZjREY1NJU1FRSjBRZkFxYWlnQ0FDRUlJQTVCR0haQkFYUWlEa0VDZEVId0ttb29BZ0FoQXlBQUxRQTNRUUYwSWhkQkFuUkI4Q3BxS0FJQUloeEJHSFFnRjBFQmNrRUNkRUh3S21vb0FnQWlGMEVJZG5JZ0FDMEFKa0VCZENJVFFRSjBRZkFxYWlnQ0FDSVlRUkIwSUJOQkFYSkJBblJCOENwcUtBSUFJaE5CRUhaeUlBQXRBQlZCQVhRaUQwRUNkRUh3S21vb0FnQWlGa0VJZENBUFFRRnlRUUowUWZBcWFpZ0NBQ0lQUVJoMmNpQUdMUUFBUVFGMElnWkJBblJCOENwcUtBSUFJQTVCQVhKQkFuUkI4Q3BxS0FJQUlnNUJHSFFnQTBFSWRuSWdFa0VCY2tFQ2RFSHdLbW9vQWdBaUVrRVFkQ0FJUVJCMmNpQUhRUUYwUWY0RGNTSUhRUUZ5UVFKMFFmQXFhaWdDQUNBTVFRRnlRUUowUWZBcWFpZ0NBQ0lNUVFoMElBSkJHSFp5YzNOemMzTnpjeUVkSUFFZ0YwRVlkQ0FjUVFoMmNpQVRRUkIwSUJoQkVIWnlJQTlCQ0hRZ0ZrRVlkbklnQmtFQmNrRUNkRUh3S21vb0FnQWdBMEVZZENBT1FRaDJjaUFJUVJCMElCSkJFSFp5SUFkQkFuUkI4Q3BxS0FJQUlBSkJDSFFnREVFWWRuSnpjM056YzNOek5nSUFJQUVnSFRZQ0JDQUFMUUFoUVFGMElnaEJBblJCOENwcUtBSUFJUUlnQUMwQU1rRUJkQ0lEUVFKMFFmQXFhaWdDQUNFR0lBQXRBQU5CQVhRaURrRUNkRUh3S21vb0FnQWhCeUFBTFFBL1FRRjBJaE5CQW5SQjhDcHFLQUlBSWhoQkdIUWdFMEVCY2tFQ2RFSHdLbW9vQWdBaUUwRUlkbklnQUMwQUxrRUJkQ0lQUVFKMFFmQXFhaWdDQUNJV1FSQjBJQTlCQVhKQkFuUkI4Q3BxS0FJQUlnOUJFSFp5SUFBdEFCMUJBWFFpREVFQ2RFSHdLbW9vQWdBaUVrRUlkQ0FNUVFGeVFRSjBRZkFxYWlnQ0FDSU1RUmgyY2lBRUxRQUFRUUYwSWdSQkFuUkI4Q3BxS0FJQUlBNUJBWEpCQW5SQjhDcHFLQUlBSWc1QkdIUWdCMEVJZG5JZ0EwRUJja0VDZEVId0ttb29BZ0FpQTBFUWRDQUdRUkIyY2lBRkxRQUFRUUYwSWdWQkFYSkJBblJCOENwcUtBSUFJQWhCQVhKQkFuUkI4Q3BxS0FJQUlnaEJDSFFnQWtFWWRuSnpjM056YzNOeklSY2dBU0FUUVJoMElCaEJDSFp5SUE5QkVIUWdGa0VRZG5JZ0RFRUlkQ0FTUVJoMmNpQUVRUUZ5UVFKMFFmQXFhaWdDQUNBSFFSaDBJQTVCQ0haeUlBWkJFSFFnQTBFUWRuSWdCVUVDZEVId0ttb29BZ0FnQWtFSWRDQUlRUmgyY25OemMzTnpjM00yQWdnZ0FTQVhOZ0lNSUFBdEFDbEJBWFFpQkVFQ2RFSHdLbW9vQWdBaEFpQUFMUUE2UVFGMElnVkJBblJCOENwcUtBSUFJUVlnQUMwQUMwRUJkQ0lJUVFKMFFmQXFhaWdDQUNFSElBQXRBQWRCQVhRaUQwRUNkRUh3S21vb0FnQWlGa0VZZENBUFFRRnlRUUowUWZBcWFpZ0NBQ0lQUVFoMmNpQUFMUUEyUVFGMElneEJBblJCOENwcUtBSUFJaEpCRUhRZ0RFRUJja0VDZEVId0ttb29BZ0FpREVFUWRuSWdBQzBBSlVFQmRDSURRUUowUWZBcWFpZ0NBQ0lPUVFoMElBTkJBWEpCQW5SQjhDcHFLQUlBSWdOQkdIWnlJQWt0QUFCQkFYUWlDVUVDZEVId0ttb29BZ0FnQ0VFQmNrRUNkRUh3S21vb0FnQWlDRUVZZENBSFFRaDJjaUFGUVFGeVFRSjBRZkFxYWlnQ0FDSUZRUkIwSUFaQkVIWnlJQTB0QUFCQkFYUWlEVUVCY2tFQ2RFSHdLbW9vQWdBZ0JFRUJja0VDZEVId0ttb29BZ0FpQkVFSWRDQUNRUmgyY25OemMzTnpjM01oRXlBQklBOUJHSFFnRmtFSWRuSWdERUVRZENBU1FSQjJjaUFEUVFoMElBNUJHSFp5SUFsQkFYSkJBblJCOENwcUtBSUFJQWRCR0hRZ0NFRUlkbklnQmtFUWRDQUZRUkIyY2lBTlFRSjBRZkFxYWlnQ0FDQUNRUWgwSUFSQkdIWnljM056YzNOemN6WUNFQ0FCSUJNMkFoUWdBQzBBTVVFQmRDSUVRUUowUWZBcWFpZ0NBQ0VDSUFBdEFBSkJBWFFpQlVFQ2RFSHdLbW9vQWdBaEJpQUFMUUFUUVFGMElnbEJBblJCOENwcUtBSUFJUWNnQUMwQUQwRUJkQ0lNUVFKMFFmQXFhaWdDQUNJU1FSaDBJQXhCQVhKQkFuUkI4Q3BxS0FJQUlneEJDSFp5SUFBdEFENUJBWFFpQTBFQ2RFSHdLbW9vQWdBaURrRVFkQ0FEUVFGeVFRSjBRZkFxYWlnQ0FDSURRUkIyY2lBS0xRQUFRUUYwSWdoQkFuUkI4Q3BxS0FJQUlBbEJBWEpCQW5SQjhDcHFLQUlBSWdsQkdIUWdCMEVJZG5JZ0JVRUJja0VDZEVId0ttb29BZ0FpQlVFUWRDQUdRUkIyY2lBUUxRQUFRUUYwSWcxQkFYSkJBblJCOENwcUtBSUFJQVJCQVhKQkFuUkI4Q3BxS0FJQUlnUkJDSFFnQWtFWWRuSnpjM056SUFBdEFDMUJBWFFpQ2tFQ2RFSHdLbW9vQWdBaUVFRUlkQ0FLUVFGeVFRSjBRZkFxYWlnQ0FDSUtRUmgyY25OemN5RVBJQUVnREVFWWRDQVNRUWgyY2lBRFFSQjBJQTVCRUhaeUlBcEJDSFFnRUVFWWRuSWdDRUVCY2tFQ2RFSHdLbW9vQWdBZ0IwRVlkQ0FKUVFoMmNpQUdRUkIwSUFWQkVIWnlJQTFCQW5SQjhDcHFLQUlBSUFKQkNIUWdCRUVZZG5KemMzTnpjM056TmdJWUlBRWdEellDSENBQUxRQTVRUUYwSWdSQkFuUkI4Q3BxS0FJQUlRSWdBQzBBQ2tFQmRDSUZRUUowUWZBcWFpZ0NBQ0VHSUFBdEFCdEJBWFFpQ1VFQ2RFSHdLbW9vQWdBaEJ5QUFMUUFYUVFGMElnTkJBblJCOENwcUtBSUFJZzVCR0hRZ0EwRUJja0VDZEVId0ttb29BZ0FpQTBFSWRuSWdBQzBBTlVFQmRDSUtRUUowUWZBcWFpZ0NBQ0lRUVFoMElBcEJBWEpCQW5SQjhDcHFLQUlBSWdwQkdIWnlJQXN0QUFCQkFYUWlDRUVDZEVId0ttb29BZ0FnQ1VFQmNrRUNkRUh3S21vb0FnQWlDVUVZZENBSFFRaDJjaUFGUVFGeVFRSjBRZkFxYWlnQ0FDSUZRUkIwSUFaQkVIWnlJQkV0QUFCQkFYUWlEVUVCY2tFQ2RFSHdLbW9vQWdBZ0JFRUJja0VDZEVId0ttb29BZ0FpQkVFSWRDQUNRUmgyY25OemMzTnpJQUF0QUFaQkFYUWlDMEVDZEVId0ttb29BZ0FpRVVFUWRDQUxRUUZ5UVFKMFFmQXFhaWdDQUNJTFFSQjJjbk56SVF3Z0FTQURRUmgwSUE1QkNIWnlJQXRCRUhRZ0VVRVFkbklnQ2tFSWRDQVFRUmgyY2lBSVFRRnlRUUowUWZBcWFpZ0NBQ0FIUVJoMElBbEJDSFp5SUFaQkVIUWdCVUVRZG5JZ0RVRUNkRUh3S21vb0FnQWdBa0VJZENBRVFSaDJjbk56YzNOemMzTTJBaUFnQVNBTU5nSWtJQUF0QUFGQkFYUWlCRUVDZEVId0ttb29BZ0FoQWlBQUxRQVNRUUYwSWdWQkFuUkI4Q3BxS0FJQUlRWWdBQzBBSTBFQmRDSUpRUUowUWZBcWFpZ0NBQ0VISUFBdEFBNUJBWFFpQzBFQ2RFSHdLbW9vQWdBaUVVRVFkQ0FMUVFGeVFRSjBRZkFxYWlnQ0FDSUxRUkIyY2lBQUxRQTlRUUYwSWdwQkFuUkI4Q3BxS0FJQUloQkJDSFFnQ2tFQmNrRUNkRUh3S21vb0FnQWlDa0VZZG5JZ0ZDMEFBRUVCZENJSVFRSjBRZkFxYWlnQ0FDQUpRUUZ5UVFKMFFmQXFhaWdDQUNJSlFSaDBJQWRCQ0haeUlBVkJBWEpCQW5SQjhDcHFLQUlBSWdWQkVIUWdCa0VRZG5JZ0ZTMEFBRUVCZENJTlFRRnlRUUowUWZBcWFpZ0NBQ0FFUVFGeVFRSjBRZkFxYWlnQ0FDSUVRUWgwSUFKQkdIWnljM056YzNOeklBQXRBQjlCQVhRaUEwRUNkRUh3S21vb0FnQWlGRUVZZENBRFFRRnlRUUowUWZBcWFpZ0NBQ0lEUVFoMmNuTWhGU0FCSUFOQkdIUWdGRUVJZG5JZ0MwRVFkQ0FSUVJCMmNpQUtRUWgwSUJCQkdIWnlJQWhCQVhKQkFuUkI4Q3BxS0FJQUlBZEJHSFFnQ1VFSWRuSWdCa0VRZENBRlFSQjJjaUFOUVFKMFFmQXFhaWdDQUNBQ1FRaDBJQVJCR0haeWMzTnpjM056Y3pZQ0tDQUJJQlUyQWl3Z0FDMEFDVUVCZENJRVFRSjBRZkFxYWlnQ0FDRUNJQUF0QUJwQkFYUWlCVUVDZEVId0ttb29BZ0FoQmlBQUxRQXJRUUYwSWdsQkFuUkI4Q3BxS0FJQUlRY2dBQzBBSjBFQmRDSURRUUowUWZBcWFpZ0NBQ0lVUVJoMElBTkJBWEpCQW5SQjhDcHFLQUlBSWdOQkNIWnlJQUF0QUJaQkFYUWlDMEVDZEVId0ttb29BZ0FpRVVFUWRDQUxRUUZ5UVFKMFFmQXFhaWdDQUNJTFFSQjJjaUFBTFFBRlFRRjBJZ3BCQW5SQjhDcHFLQUlBSWhCQkNIUWdDa0VCY2tFQ2RFSHdLbW9vQWdBaUNrRVlkbklnR1MwQUFFRUJkQ0lJUVFKMFFmQXFhaWdDQUNBSlFRRnlRUUowUWZBcWFpZ0NBQ0lKUVJoMElBZEJDSFp5SUFWQkFYSkJBblJCOENwcUtBSUFJZ1ZCRUhRZ0JrRVFkbklnR2kwQUFFRUJkQ0lOUVFGeVFRSjBRZkFxYWlnQ0FDQUVRUUZ5UVFKMFFmQXFhaWdDQUNJRVFRaDBJQUpCR0haeWMzTnpjM056Y3lFVklBRWdBMEVZZENBVVFRaDJjaUFMUVJCMElCRkJFSFp5SUFwQkNIUWdFRUVZZG5JZ0NFRUJja0VDZEVId0ttb29BZ0FnQjBFWWRDQUpRUWgyY2lBR1FSQjBJQVZCRUhaeUlBMUJBblJCOENwcUtBSUFJQUpCQ0hRZ0JFRVlkbkp6YzNOemMzTnpOZ0l3SUFFZ0ZUWUNOQ0FBTFFBUlFRRjBJZ1ZCQW5SQjhDcHFLQUlBSVFJZ0FDMEFJa0VCZENJSlFRSjBRZkFxYWlnQ0FDRUdJQUF0QUROQkFYUWlEVUVDZEVId0ttb29BZ0FoQnlBQUxRQWVRUUYwSWdoQkFuUkI4Q3BxS0FJQUlRUWdCRUVRZENBSVFRRnlRUUowUWZBcWFpZ0NBQ0lJUVJCMmNpQUFMUUFOUVFGMElndEJBblJCOENwcUtBSUFJaEZCQ0hRZ0MwRUJja0VDZEVId0ttb29BZ0FpQzBFWWRuSWdHeTBBQUVFQmRDSVFRUUowUWZBcWFpZ0NBQ0FOUVFGeVFRSjBRZkFxYWlnQ0FDSU5RUmgwSUFkQkNIWnlJQWxCQVhKQkFuUkI4Q3BxS0FJQUlnbEJFSFFnQmtFUWRuSWdBQzBBQUVFQmRDSUtRUUZ5UVFKMFFmQXFhaWdDQUNBRlFRRnlRUUowUWZBcWFpZ0NBQ0lGUVFoMElBSkJHSFp5YzNOemMzTnpJQUF0QUM5QkFYUWlBRUVDZEVId0ttb29BZ0FpQTBFWWRDQUFRUUZ5UVFKMFFmQXFhaWdDQUNJQVFRaDJjbk1oRkNBQklBQkJHSFFnQTBFSWRuSWdDRUVRZENBRVFSQjJjaUFMUVFoMElCRkJHSFp5SUJCQkFYSkJBblJCOENwcUtBSUFJQWRCR0hRZ0RVRUlkbklnQmtFUWRDQUpRUkIyY2lBS1FRSjBRZkFxYWlnQ0FDQUNRUWgwSUFWQkdIWnljM056YzNOemN6WUNPQ0FCSUJRMkFqd0xtQUlCQkg4Z0FDQUNhaUVFSUFGQi93RnhJUUVnQWtIREFFNEVRQU5BSUFCQkEzRUVRQ0FBSUFFNkFBQWdBRUVCYWlFQURBRUxDeUFFUVh4eElnVkJRR29oQmlBQlFRaDBJQUZ5SUFGQkVIUnlJQUZCR0hSeUlRTURRQ0FBSUFaTUJFQWdBQ0FETmdJQUlBQWdBellDQkNBQUlBTTJBZ2dnQUNBRE5nSU1JQUFnQXpZQ0VDQUFJQU0yQWhRZ0FDQUROZ0lZSUFBZ0F6WUNIQ0FBSUFNMkFpQWdBQ0FETmdJa0lBQWdBellDS0NBQUlBTTJBaXdnQUNBRE5nSXdJQUFnQXpZQ05DQUFJQU0yQWpnZ0FDQUROZ0k4SUFCQlFHc2hBQXdCQ3dzRFFDQUFJQVZJQkVBZ0FDQUROZ0lBSUFCQkJHb2hBQXdCQ3dzTEEwQWdBQ0FFU0FSQUlBQWdBVG9BQUNBQVFRRnFJUUFNQVFzTElBUWdBbXNMbUFJQkJYOUJ3QUFnQUVFNGFpSUdLQUlBUVFOMUlnTnJJUVFnQXdSQUlBSkNBNGhDUDRNZ0JLMWFCRUFnQXlBQVFVQnJhaUFCSUFRUUN4b2dBRUV3YWlJRktBSUFRWUFFYWlFRElBVWdBellDQUNBRFJRUkFJQUJCTkdvaUF5QURLQUlBUVFGcU5nSUFDeUFBSUFCQlFHc1FIU0FCSUFScUlRRkJBQ0VESUFJZ0JFRURkS3g5SVFJTEJVRUFJUU1MSUFKQy93TldCRUFnQUVFd2FpRUVJQUJCTkdvaEJRTkFJQVFnQkNnQ0FFR0FCR29pQnpZQ0FDQUhSUVJBSUFVZ0JTZ0NBRUVCYWpZQ0FBc2dBQ0FCRUIwZ0FVRkFheUVCSUFKQ2dIeDhJZ0pDL3dOV0RRQUxDeUFDUWdCUkJFQWdCa0VBTmdJQUR3c2dBeUFBUVVCcmFpQUJJQUpDQTRpbkVBc2FJQVlnQXFjZ0EwRURkR28yQWdBTFVRRUNmeUFBSXdNb0FnQWlBV29pQWlBQlNDQUFRUUJLY1NBQ1FRQkljZ1JBRUFVYVFRd1FBRUYvRHdzakF5QUNOZ0lBSUFJUUJrb0VRQkFIUlFSQUl3TWdBVFlDQUVFTUVBQkJmdzhMQ3lBQkMrSU5BUWwvSUFCRkJFQVBDMEdZekFBb0FnQWhCQ0FBUVhocUlnTWdBRUY4YWlnQ0FDSUNRWGh4SWdCcUlRVWdBa0VCY1FSL0lBTUZBbjhnQXlnQ0FDRUJJQUpCQTNGRkJFQVBDeUFESUFGcklnTWdCRWtFUUE4TElBQWdBV29oQUNBRFFaek1BQ2dDQUVZRVFDQURJQVZCQkdvaUFTZ0NBQ0lDUVFOeFFRTkhEUUVhUVpETUFDQUFOZ0lBSUFFZ0FrRitjVFlDQUNBRElBQkJBWEkyQWdRZ0FDQURhaUFBTmdJQUR3c2dBVUVEZGlFRUlBRkJnQUpKQkVBZ0F5Z0NDQ0lCSUFNb0Fnd2lBa1lFUUVHSXpBQkJpTXdBS0FJQVFRRWdCSFJCZjNOeE5nSUFCU0FCSUFJMkFnd2dBaUFCTmdJSUN5QUREQUVMSUFNb0FoZ2hCeUFESUFNb0Fnd2lBVVlFUUFKQUlBTkJFR29pQWtFRWFpSUVLQUlBSWdFRVFDQUVJUUlGSUFJb0FnQWlBVVVFUUVFQUlRRU1BZ3NMQTBBQ1FDQUJRUlJxSWdRb0FnQWlCa1VFUUNBQlFSQnFJZ1FvQWdBaUJrVU5BUXNnQkNFQ0lBWWhBUXdCQ3dzZ0FrRUFOZ0lBQ3dVZ0F5Z0NDQ0lDSUFFMkFnd2dBU0FDTmdJSUN5QUhCSDhnQXlBREtBSWNJZ0pCQW5SQnVNNEFhaUlFS0FJQVJnUkFJQVFnQVRZQ0FDQUJSUVJBUVl6TUFFR016QUFvQWdCQkFTQUNkRUYvYzNFMkFnQWdBd3dEQ3dVZ0IwRVFhaUlDSUFkQkZHb2dBeUFDS0FJQVJoc2dBVFlDQUNBRElBRkZEUUlhQ3lBQklBYzJBaGdnQTBFUWFpSUVLQUlBSWdJRVFDQUJJQUkyQWhBZ0FpQUJOZ0lZQ3lBRUtBSUVJZ0lFUUNBQklBSTJBaFFnQWlBQk5nSVlDeUFEQlNBREN3c0xJZ2NnQlU4RVFBOExJQVZCQkdvaUFTZ0NBQ0lJUVFGeFJRUkFEd3NnQ0VFQ2NRUkFJQUVnQ0VGK2NUWUNBQ0FESUFCQkFYSTJBZ1FnQUNBSGFpQUFOZ0lBSUFBaEFnVWdCVUdnekFBb0FnQkdCRUJCbE13QUlBQkJsTXdBS0FJQWFpSUFOZ0lBUWFETUFDQUROZ0lBSUFNZ0FFRUJjallDQkVHY3pBQW9BZ0FnQTBjRVFBOExRWnpNQUVFQU5nSUFRWkRNQUVFQU5nSUFEd3RCbk13QUtBSUFJQVZHQkVCQmtNd0FJQUJCa013QUtBSUFhaUlBTmdJQVFaek1BQ0FITmdJQUlBTWdBRUVCY2pZQ0JDQUFJQWRxSUFBMkFnQVBDeUFJUVFOMklRUWdDRUdBQWtrRVFDQUZLQUlJSWdFZ0JTZ0NEQ0lDUmdSQVFZak1BRUdJekFBb0FnQkJBU0FFZEVGL2MzRTJBZ0FGSUFFZ0FqWUNEQ0FDSUFFMkFnZ0xCUUpBSUFVb0FoZ2hDU0FGS0FJTUlnRWdCVVlFUUFKQUlBVkJFR29pQWtFRWFpSUVLQUlBSWdFRVFDQUVJUUlGSUFJb0FnQWlBVVVFUUVFQUlRRU1BZ3NMQTBBQ1FDQUJRUlJxSWdRb0FnQWlCa1VFUUNBQlFSQnFJZ1FvQWdBaUJrVU5BUXNnQkNFQ0lBWWhBUXdCQ3dzZ0FrRUFOZ0lBQ3dVZ0JTZ0NDQ0lDSUFFMkFnd2dBU0FDTmdJSUN5QUpCRUFnQlNnQ0hDSUNRUUowUWJqT0FHb2lCQ2dDQUNBRlJnUkFJQVFnQVRZQ0FDQUJSUVJBUVl6TUFFR016QUFvQWdCQkFTQUNkRUYvYzNFMkFnQU1Bd3NGSUFsQkVHb2lBaUFKUVJScUlBSW9BZ0FnQlVZYklBRTJBZ0FnQVVVTkFnc2dBU0FKTmdJWUlBVkJFR29pQkNnQ0FDSUNCRUFnQVNBQ05nSVFJQUlnQVRZQ0dBc2dCQ2dDQkNJQ0JFQWdBU0FDTmdJVUlBSWdBVFlDR0FzTEN3c2dBeUFBSUFoQmVIRnFJZ0pCQVhJMkFnUWdBaUFIYWlBQ05nSUFJQU5Cbk13QUtBSUFSZ1JBUVpETUFDQUNOZ0lBRHdzTElBSkJBM1loQVNBQ1FZQUNTUVJBSUFGQkEzUkJzTXdBYWlFQVFZak1BQ2dDQUNJQ1FRRWdBWFFpQVhFRWZ5QUFRUWhxSWdJb0FnQUZRWWpNQUNBQklBSnlOZ0lBSUFCQkNHb2hBaUFBQ3lFQklBSWdBellDQUNBQklBTTJBZ3dnQXlBQk5nSUlJQU1nQURZQ0RBOExJQUpCQ0hZaUFBUi9JQUpCLy8vL0Iwc0VmMEVmQlNBQUlBQkJnUDQvYWtFUWRrRUljU0lCZENJRVFZRGdIMnBCRUhaQkJIRWhBRUVPSUFBZ0FYSWdCQ0FBZENJQVFZQ0FEMnBCRUhaQkFuRWlBWEpySUFBZ0FYUkJEM1pxSWdCQkFYUWdBaUFBUVFkcWRrRUJjWElMQlVFQUN5SUJRUUowUWJqT0FHb2hBQ0FESUFFMkFod2dBMEVBTmdJVUlBTkJBRFlDRUVHTXpBQW9BZ0FpQkVFQklBRjBJZ1p4QkVBQ1FDQUNJQUFvQWdBaUFDZ0NCRUY0Y1VZRVFDQUFJUUVGQWtBZ0FrRUFRUmtnQVVFQmRtc2dBVUVmUmh0MElRUURRQ0FBUVJCcUlBUkJIM1pCQW5ScUlnWW9BZ0FpQVFSQUlBUkJBWFFoQkNBQ0lBRW9BZ1JCZUhGR0RRSWdBU0VBREFFTEN5QUdJQU0yQWdBZ0F5QUFOZ0lZSUFNZ0F6WUNEQ0FESUFNMkFnZ01BZ3NMSUFGQkNHb2lBQ2dDQUNJQ0lBTTJBZ3dnQUNBRE5nSUFJQU1nQWpZQ0NDQURJQUUyQWd3Z0EwRUFOZ0lZQ3dWQmpNd0FJQVFnQm5JMkFnQWdBQ0FETmdJQUlBTWdBRFlDR0NBRElBTTJBZ3dnQXlBRE5nSUlDMEdvekFCQnFNd0FLQUlBUVg5cUlnQTJBZ0FnQUFSQUR3dEIwTThBSVFBRFFDQUFLQUlBSWdOQkNHb2hBQ0FERFFBTFFhak1BRUYvTmdJQUM2MDVBZ2wvSzM0Z0E2MGhMaUFDUVg5cXJVSUJmQ0V2SUFCQkNHb2lCQ2tEQUNJd0lTUWdBRUVRYWlJRktRTUFJU0lnQUVFWWFpSUdLUU1BSVJvZ0FFRWdhaUlIS1FNQUlSc2dBRUVvYWlJSUtRTUFJUndnQUVFd2FpSUpLUU1BSVIwZ0FFRTRhaUlLS1FNQUlSNGdBRUZBYXlJTEtRTUFJUmdnQUVISUFHb2lEQ2tEQUNFWklBQkIwQUJxSWdNcEF3QWhId05BSUNJZ0pDQXVmQ0lraFNFaklBRkJRR3NoQUNBQkxRQVlyU0FCTFFBWnJVSUlob1FnQVMwQUdxMUNFSWFFSUFFdEFCdXRRaGlHaENBQkxRQWNyVUlnaG9RZ0FTMEFIYTFDS0lhRUlBRXRBQjZ0UWpDR2ZDQUJMUUFmclVJNGhud2lNaUFkZkNJTklBRXRBQkN0SUFFdEFCR3RRZ2lHaENBQkxRQVNyVUlRaG9RZ0FTMEFFNjFDR0lhRUlBRXRBQlN0UWlDR2hDQUJMUUFWclVJb2hvUWdBUzBBRnExQ01JWjhJQUV0QUJldFFqaUdmQ0l4SUJ4OGZDSVFJQTFDSklZZ0RVSWNpSVNGSVJFZ0FTMEFLSzBnQVMwQUthMUNDSWFFSUFFdEFDcXRRaENHaENBQkxRQXJyVUlZaG9RZ0FTMEFMSzFDSUlhRUlBRXRBQzJ0UWlpR2hDQUJMUUF1clVJd2hud2dBUzBBTDYxQ09JWjhJalFnR0NBa2ZDSWxmQ0lTSUFFdEFDQ3RJQUV0QUNHdFFnaUdoQ0FCTFFBaXJVSVFob1FnQVMwQUk2MUNHSWFFSUFFdEFDU3RRaUNHaENBQkxRQWxyVUlvaG9RZ0FTMEFKcTFDTUlaOElBRXRBQ2V0UWppR2ZDSXpJQjU4ZkNJTklCSkNFNFlnRWtJdGlJU0ZJUk1nQVMwQUNLMGdBUzBBQ2ExQ0NJYUVJQUV0QUFxdFFoQ0doQ0FCTFFBTHJVSVlob1FnQVMwQURLMUNJSWFFSUFFdEFBMnRRaWlHaENBQkxRQU9yVUl3aG53Z0FTMEFENjFDT0laOElqWWdHM3dpRHlBYUlBRXRBQUN0SUFFdEFBR3RRZ2lHaENBQkxRQUNyVUlRaG9RZ0FTMEFBNjFDR0lhRUlBRXRBQVN0UWlDR2hDQUJMUUFGclVJb2hvUWdBUzBBQnExQ01JWjhJQUV0QUFldFFqaUdmQ0kxZkh3aUVpQVBRaTZHSUE5Q0VvaUVoU0ltSUJCOElnOGdKa0loaGlBbVFoK0loSVVoRmlBTklBRXRBRGl0SUFFdEFEbXRRZ2lHaENBQkxRQTZyVUlRaG9RZ0FTMEFPNjFDR0lhRUlBRXRBRHl0UWlDR2hDQUJMUUE5clVJb2hvUWdBUzBBUHExQ01JWjhJQUV0QUQrdFFqaUdmQ0kzSUI5OEloQWdBUzBBTUswZ0FTMEFNYTFDQ0lhRUlBRXRBREt0UWhDR2hDQUJMUUF6clVJWWhvUWdBUzBBTksxQ0lJYUVJQUV0QURXdFFpaUdoQ0FCTFFBMnJVSXdobndnQVMwQU42MUNPSVo4SWlZZ0dTQWlmQ0luZkh3aURTQVFRaVdHSUJCQ0c0aUVoU0lPZkNJUUlBNUNHNFlnRGtJbGlJU0ZJUlVnRFNBVGZDSU5JQk5DRG9ZZ0UwSXlpSVNGSVJNZ0RTQVJJQko4SWcwZ0VVSXFoaUFSUWhhSWhJVWlEbndpRWlBT1FqR0dJQTVDRDRpRWhTRVVJQTBnRTN3aURTQVRRaVNHSUJOQ0hJaUVoU0VSSUJBZ0Zud2lFQ0FXUWhHR0lCWkNMNGlFaFNJT0lCSjhJUllnRFNBUElCVjhJZzBnRlVJbmhpQVZRaG1JaElVaUZYd2hFeUFuSUEwZ0VYd2lEU0FSUWphR0lCRkNDb2lFaFh3aER5QU5JQjE4SUI0Z0VDQVVmQ0lOSUJSQ09JWWdGRUlJaUlTRmZDSVNmQ0lRSUJKQ0hvWWdFa0lpaUlTRklSUWdEU0FZZkNBUGZDSU5JQTlDSW9ZZ0QwSWVpSVNGSVJFZ0hDQVdJQTVDTElZZ0RrSVVpSVNGZkNJUElCTWdHM3g4SWhJZ0QwSW5oaUFQUWhtSWhJVWlEaUFRZkNJUElBNUNEWVlnRGtJemlJU0ZJUmNnRFNBYVFxSzA4TStxKzhib0c0VWdHNFVnSElVZ0hZVWdIb1VnR0lVZ0dZVWdINFVpSUVJQmZDQVRJQlZDQ1lZZ0ZVSTNpSVNGZkNJUUlCWWdIeUFqZkNJb2ZId2lEU0FRUWhpR0lCQkNLSWlFaFNJT2ZDSVFJQTVDTW9ZZ0RrSU9pSVNGSVJVZ0RTQVJmQ0lOSUJGQ0NvWWdFVUkyaUlTRklSTWdEU0FTSUJSOElnMGdGRUlSaGlBVVFpK0loSVVpRG53aUVpQU9RaDJHSUE1Q0k0aUVoU0VVSUEwZ0Uzd2lEU0FUUWllR0lCTkNHWWlFaFNFUklCQWdGM3dpRUNBWFFobUdJQmRDSjRpRWhTSU9JQko4SVJZZ0RTQVBJQlY4SWcwZ0ZVSXJoaUFWUWhXSWhJVWlGWHdoRXlBb0lBMGdFWHdpRFNBUlFqaUdJQkZDQ0lpRWhYd2hEeUFOSUI1OElCZ2dFQ0FVZkNJTklCUkNGb1lnRkVJcWlJU0ZmQ0lTZkNJUUlCSkNKSVlnRWtJY2lJU0ZJUlFnRFNBWmZDQVBmQ0lOSUE5Q0U0WWdEMEl0aUlTRklSRWdIU0FXSUE1Q0NJWWdEa0k0aUlTRmZDSVBJQk1nSEh4OEloSWdEMEl1aGlBUFFoS0loSVVpRGlBUWZDSVBJQTVDSVlZZ0RrSWZpSVNGSVJjZ0RTQWFRZ0o4SUJNZ0ZVSWpoaUFWUWgySWhJVjhJaEFnRmlBZ0lDUjhJaWw4ZkNJTklCQkNKWVlnRUVJYmlJU0ZJZzU4SWhBZ0RrSWJoaUFPUWlXSWhJVWhGU0FOSUJGOElnMGdFVUlPaGlBUlFqS0loSVVoRXlBTklCSWdGSHdpRFNBVVFpcUdJQlJDRm9pRWhTSU9mQ0lTSUE1Q01ZWWdEa0lQaUlTRklSUWdEU0FUZkNJTklCTkNKSVlnRTBJY2lJU0ZJUkVnRUNBWGZDSVFJQmRDRVlZZ0YwSXZpSVNGSWc0Z0Vud2hGaUFOSUE4Z0ZYd2lEU0FWUWllR0lCVkNHWWlFaFNJVmZDRVRJQ2tnRFNBUmZDSU5JQkZDTm9ZZ0VVSUtpSVNGZkNFUElBMGdHSHdnR1NBUUlCUjhJZzBnRkVJNGhpQVVRZ2lJaElWOEloSjhJaEFnRWtJZWhpQVNRaUtJaElVaEZDQU5JQjk4SUE5OElnMGdEMElpaGlBUFFoNkloSVVoRVNBZUlCWWdEa0lzaGlBT1FoU0loSVY4SWc4Z0V5QWRmSHdpRWlBUFFpZUdJQTlDR1lpRWhTSU9JQkI4SWc4Z0RrSU5oaUFPUWpPSWhJVWhGeUFOSUJ0Q0Ezd2dFeUFWUWdtR0lCVkNONGlFaFh3aUVDQVdJQm9nSW53aUtueDhJZzBnRUVJWWhpQVFRaWlJaElVaURud2lFQ0FPUWpLR0lBNUNEb2lFaFNFVklBMGdFWHdpRFNBUlFncUdJQkZDTm9pRWhTRVRJQTBnRWlBVWZDSU5JQlJDRVlZZ0ZFSXZpSVNGSWc1OEloSWdEa0lkaGlBT1FpT0loSVVoRkNBTklCTjhJZzBnRTBJbmhpQVRRaG1JaElVaEVTQVFJQmQ4SWhBZ0YwSVpoaUFYUWllSWhJVWlEaUFTZkNFV0lBMGdEeUFWZkNJTklCVkNLNFlnRlVJVmlJU0ZJaFY4SVJNZ0tpQU5JQkY4SWcwZ0VVSTRoaUFSUWdpSWhJVjhJUThnRFNBWmZDQWZJQkFnRkh3aURTQVVRaGFHSUJSQ0tvaUVoWHdpRW53aUVDQVNRaVNHSUJKQ0hJaUVoU0VVSUEwZ0lId2dEM3dpRFNBUFFoT0dJQTlDTFlpRWhTRVJJQmdnRmlBT1FnaUdJQTVDT0lpRWhYd2lEeUFUSUI1OGZDSVNJQTlDTG9ZZ0QwSVNpSVNGSWc0Z0VId2lEeUFPUWlHR0lBNUNINGlFaFNFWElBMGdIRUlFZkNBVElCVkNJNFlnRlVJZGlJU0ZmQ0lRSUJZZ0d5QWpmQ0lyZkh3aURTQVFRaVdHSUJCQ0c0aUVoU0lPZkNJUUlBNUNHNFlnRGtJbGlJU0ZJUlVnRFNBUmZDSU5JQkZDRG9ZZ0VVSXlpSVNGSVJNZ0RTQVNJQlI4SWcwZ0ZFSXFoaUFVUWhhSWhJVWlEbndpRWlBT1FqR0dJQTVDRDRpRWhTRVVJQTBnRTN3aURTQVRRaVNHSUJOQ0hJaUVoU0VSSUJBZ0Yzd2lFQ0FYUWhHR0lCZENMNGlFaFNJT0lCSjhJUllnRFNBUElCVjhJZzBnRlVJbmhpQVZRaG1JaElVaUZYd2hFeUFySUEwZ0VYd2lEU0FSUWphR0lCRkNDb2lFaFh3aER5QU5JQjk4SUNBZ0VDQVVmQ0lOSUJSQ09JWWdGRUlJaUlTRmZDSVNmQ0lRSUJKQ0hvWWdFa0lpaUlTRklSUWdEU0FhZkNBUGZDSU5JQTlDSW9ZZ0QwSWVpSVNGSVJFZ0dTQVdJQTVDTElZZ0RrSVVpSVNGZkNJUElCTWdHSHg4SWhJZ0QwSW5oaUFQUWhtSWhJVWlEaUFRZkNJUElBNUNEWVlnRGtJemlJU0ZJUmNnRFNBZFFnVjhJQk1nRlVJSmhpQVZRamVJaElWOEloQWdGaUFjSUNSOElpeDhmQ0lOSUJCQ0dJWWdFRUlvaUlTRklnNThJaEFnRGtJeWhpQU9RZzZJaElVaEZTQU5JQkY4SWcwZ0VVSUtoaUFSUWphSWhJVWhFeUFOSUJJZ0ZId2lEU0FVUWhHR0lCUkNMNGlFaFNJT2ZDSVNJQTVDSFlZZ0RrSWppSVNGSVJRZ0RTQVRmQ0lOSUJOQ0o0WWdFMElaaUlTRklSRWdFQ0FYZkNJUUlCZENHWVlnRjBJbmlJU0ZJZzRnRW53aEZpQU5JQThnRlh3aURTQVZRaXVHSUJWQ0ZZaUVoU0lWZkNFVElDd2dEU0FSZkNJTklCRkNPSVlnRVVJSWlJU0ZmQ0VQSUEwZ0lId2dHaUFRSUJSOElnMGdGRUlXaGlBVVFpcUloSVY4SWhKOEloQWdFa0lraGlBU1FoeUloSVVoSVNBTklCdDhJQTk4SWcwZ0QwSVRoaUFQUWkySWhJVWhGeUFmSUJZZ0RrSUloaUFPUWppSWhJVjhJZzhnRXlBWmZId2lFaUFQUWk2R0lBOUNFb2lFaFNJT0lCQjhJZzhnRGtJaGhpQU9RaCtJaElVaEVTQU5JQjVDQm53Z0V5QVZRaU9HSUJWQ0hZaUVoWHdpRUNBV0lCMGdJbndpTFh4OElnMGdFRUlsaGlBUVFodUloSVVpRG53aUVDQU9RaHVHSUE1Q0pZaUVoU0VVSUEwZ0Yzd2lEU0FYUWc2R0lCZENNb2lFaFNFVElBMGdFaUFoZkNJTklDRkNLb1lnSVVJV2lJU0ZJZzU4SWhJZ0RrSXhoaUFPUWcrSWhJVWhGU0FOSUJOOElnMGdFMElraGlBVFFoeUloSVVoRXlBUUlCRjhJaEFnRVVJUmhpQVJRaStJaElVaUVTQVNmQ0VXSUEwZ0R5QVVmQ0lOSUJSQ0o0WWdGRUlaaUlTRklnNThJUThnTFNBTklCTjhJZzBnRTBJMmhpQVRRZ3FJaElWOElSTWdEU0FhZkNBYklCQWdGWHdpRFNBVlFqaUdJQlZDQ0lpRWhYd2lFbndpRUNBU1FoNkdJQkpDSW9pRWhTRVhJQTBnSEh3Z0Uzd2lEU0FUUWlLR0lCTkNIb2lFaFNFVUlCaENCM3dnRHlBT1FnbUdJQTVDTjRpRWhYd2lGU0FXSUI0Z0kzd2lJM3g4SVJNZ0R5QWZmQ0FnSUJZZ0VVSXNoaUFSUWhTSWhJVjhJZzk4SWhJZ0QwSW5oaUFQUWhtSWhJVWlEaUFRZkNJUElBNUNEWVlnRGtJemlJU0ZJUllnRlVJWWhpQVZRaWlJaENBVGhTSU9JQTE4SWhBZ0RrSXloaUFPUWc2SWhJVWhGU0FUSUJSOElnMGdGRUlLaGlBVVFqYUloSVVoRXlBTklCSWdGM3dpRFNBWFFoR0dJQmRDTDRpRWhTSU9mQ0lTSUE1Q0hZWWdEa0lqaUlTRklSUWdEU0FUZkNJTklCTkNKNFlnRTBJWmlJU0ZJUkVnRUNBV2ZDSVFJQlpDR1lZZ0ZrSW5pSVNGSWc0Z0Vud2hGaUFOSUE4Z0ZYd2lEU0FWUWl1R0lCVkNGWWlFaFNJVmZDRVRJQTBnRVh3aURTQVJRamlHSUJGQ0NJaUVoU0FqZkNFUElBMGdHM3dnRUNBVWZDSU5JQlJDRm9ZZ0ZFSXFpSVNGSUJ4OEloSjhJaEFnRWtJa2hpQVNRaHlJaElVaEZDQU5JQjE4SUE5OElnMGdEMElUaGlBUFFpMkloSVVoRVNBV0lBNUNDSVlnRGtJNGlJU0ZJQnA4SWc4Z0V5QWdmSHdpRWlBUFFpNkdJQTlDRW9pRWhTSU9JQkI4SWc4Z0RrSWhoaUFPUWgrSWhJVWhGeUFOSUJsQ0NId2dFeUFWUWlPR0lCVkNIWWlFaFh3aUVDQVdJQ1Y4ZkNJTklCQkNKWVlnRUVJYmlJU0ZJZzU4SWhBZ0RrSWJoaUFPUWlXSWhJVWhGU0FOSUJGOElnMGdFVUlPaGlBUlFqS0loSVVoRXlBTklCSWdGSHdpRFNBVVFpcUdJQlJDRm9pRWhTSU9mQ0lTSUE1Q01ZWWdEa0lQaUlTRklSUWdEU0FUZkNJTklCTkNKSVlnRTBJY2lJU0ZJUkVnRUNBWGZDSVFJQmRDRVlZZ0YwSXZpSVNGSWc0Z0Vud2hGaUFOSUE4Z0ZYd2lEU0FWUWllR0lCVkNHWWlFaFNJVmZDRVRJQTBnRVh3aURTQVJRamFHSUJGQ0NvaUVoU0FsZkNFUElBMGdISHdnRUNBVWZDSU5JQlJDT0lZZ0ZFSUlpSVNGSUIxOEloSjhJaEFnRWtJZWhpQVNRaUtJaElVaEZDQU5JQjU4SUE5OElnMGdEMElpaGlBUFFoNkloSVVoRVNBV0lBNUNMSVlnRGtJVWlJU0ZJQnQ4SWc4Z0V5QWFmSHdpRWlBUFFpZUdJQTlDR1lpRWhTSU9JQkI4SWc4Z0RrSU5oaUFPUWpPSWhJVWhGeUFOSUI5Q0NYd2dFeUFWUWdtR0lCVkNONGlFaFh3aUVDQVdJQ2Q4ZkNJTklCQkNHSVlnRUVJb2lJU0ZJZzU4SWhBZ0RrSXloaUFPUWc2SWhJVWhGU0FOSUJGOElnMGdFVUlLaGlBUlFqYUloSVVoRXlBTklCSWdGSHdpRFNBVVFoR0dJQlJDTDRpRWhTSU9mQ0lTSUE1Q0hZWWdEa0lqaUlTRklSUWdEU0FUZkNJTklCTkNKNFlnRTBJWmlJU0ZJUkVnRUNBWGZDSVFJQmRDR1lZZ0YwSW5pSVNGSWc0Z0Vud2hGaUFOSUE4Z0ZYd2lEU0FWUWl1R0lCVkNGWWlFaFNJVmZDRVRJQTBnRVh3aURTQVJRamlHSUJGQ0NJaUVoU0FuZkNFUElBMGdIWHdnRUNBVWZDSU5JQlJDRm9ZZ0ZFSXFpSVNGSUI1OEloSjhJaEFnRWtJa2hpQVNRaHlJaElVaEZDQU5JQmg4SUE5OElnMGdEMElUaGlBUFFpMkloSVVoRVNBV0lBNUNDSVlnRGtJNGlJU0ZJQng4SWc4Z0V5QWJmSHdpRWlBUFFpNkdJQTlDRW9pRWhTSU9JQkI4SWc4Z0RrSWhoaUFPUWgrSWhJVWhGeUFOSUNCQ0Nud2dFeUFWUWlPR0lCVkNIWWlFaFh3aUVDQVdJQ2g4ZkNJTklCQkNKWVlnRUVJYmlJU0ZJZzU4SWhBZ0RrSWJoaUFPUWlXSWhJVWhGU0FOSUJGOElnMGdFVUlPaGlBUlFqS0loSVVoRXlBTklCSWdGSHdpRFNBVVFpcUdJQlJDRm9pRWhTSU9mQ0lTSUE1Q01ZWWdEa0lQaUlTRklSUWdEU0FUZkNJTklCTkNKSVlnRTBJY2lJU0ZJUkVnRUNBWGZDSVFJQmRDRVlZZ0YwSXZpSVNGSWc0Z0Vud2hGaUFOSUE4Z0ZYd2lEU0FWUWllR0lCVkNHWWlFaFNJVmZDRVRJQTBnRVh3aURTQVJRamFHSUJGQ0NvaUVoU0FvZkNFUElBMGdIbndnRUNBVWZDSU5JQlJDT0lZZ0ZFSUlpSVNGSUJoOEloSjhJaEFnRWtJZWhpQVNRaUtJaElVaEZDQU5JQmw4SUE5OElnMGdEMElpaGlBUFFoNkloSVVoRVNBV0lBNUNMSVlnRGtJVWlJU0ZJQjE4SWc4Z0V5QWNmSHdpRWlBUFFpZUdJQTlDR1lpRWhTSU9JQkI4SWc4Z0RrSU5oaUFPUWpPSWhJVWhGeUFOSUJwQ0Mzd2dFeUFWUWdtR0lCVkNONGlFaFh3aUVDQVdJQ2w4ZkNJTklCQkNHSVlnRUVJb2lJU0ZJZzU4SWhBZ0RrSXloaUFPUWc2SWhJVWhGU0FOSUJGOElnMGdFVUlLaGlBUlFqYUloSVVoRXlBTklCSWdGSHdpRFNBVVFoR0dJQlJDTDRpRWhTSU9mQ0lTSUE1Q0hZWWdEa0lqaUlTRklSUWdEU0FUZkNJTklCTkNKNFlnRTBJWmlJU0ZJUkVnRUNBWGZDSVFJQmRDR1lZZ0YwSW5pSVNGSWc0Z0Vud2hGaUFOSUE4Z0ZYd2lEU0FWUWl1R0lCVkNGWWlFaFNJVmZDRVRJQTBnRVh3aURTQVJRamlHSUJGQ0NJaUVoU0FwZkNFUElBMGdHSHdnRUNBVWZDSU5JQlJDRm9ZZ0ZFSXFpSVNGSUJsOEloSjhJaEFnRWtJa2hpQVNRaHlJaElVaEZDQU5JQjk4SUE5OElnMGdEMElUaGlBUFFpMkloSVVoRVNBV0lBNUNDSVlnRGtJNGlJU0ZJQjU4SWc4Z0V5QWRmSHdpRWlBUFFpNkdJQTlDRW9pRWhTSU9JQkI4SWc4Z0RrSWhoaUFPUWgrSWhJVWhGeUFOSUJ0Q0RId2dFeUFWUWlPR0lCVkNIWWlFaFh3aUVDQVdJQ3A4ZkNJTklCQkNKWVlnRUVJYmlJU0ZJZzU4SWhBZ0RrSWJoaUFPUWlXSWhJVWhGU0FOSUJGOElnMGdFVUlPaGlBUlFqS0loSVVoRXlBTklCSWdGSHdpRFNBVVFpcUdJQlJDRm9pRWhTSU9mQ0lTSUE1Q01ZWWdEa0lQaUlTRklSUWdEU0FUZkNJTklCTkNKSVlnRTBJY2lJU0ZJUkVnRUNBWGZDSVFJQmRDRVlZZ0YwSXZpSVNGSWc0Z0Vud2hGaUFOSUE4Z0ZYd2lEU0FWUWllR0lCVkNHWWlFaFNJVmZDRVRJQTBnRVh3aURTQVJRamFHSUJGQ0NvaUVoU0FxZkNFUElBMGdHWHdnRUNBVWZDSU5JQlJDT0lZZ0ZFSUlpSVNGSUI5OEloSjhJaEFnRWtJZWhpQVNRaUtJaElVaEZDQU5JQ0I4SUE5OElnMGdEMElpaGlBUFFoNkloSVVoRVNBV0lBNUNMSVlnRGtJVWlJU0ZJQmg4SWc4Z0V5QWVmSHdpRWlBUFFpZUdJQTlDR1lpRWhTSU9JQkI4SWc4Z0RrSU5oaUFPUWpPSWhJVWhGeUFOSUJ4Q0RYd2dFeUFWUWdtR0lCVkNONGlFaFh3aUVDQVdJQ3Q4ZkNJTklCQkNHSVlnRUVJb2lJU0ZJZzU4SWhBZ0RrSXloaUFPUWc2SWhJVWhGU0FOSUJGOElnMGdFVUlLaGlBUlFqYUloSVVoRXlBTklCSWdGSHdpRFNBVVFoR0dJQlJDTDRpRWhTSU9mQ0lTSUE1Q0hZWWdEa0lqaUlTRklSUWdEU0FUZkNJTklCTkNKNFlnRTBJWmlJU0ZJUkVnRUNBWGZDSVFJQmRDR1lZZ0YwSW5pSVNGSWc0Z0Vud2hGaUFOSUE4Z0ZYd2lEU0FWUWl1R0lCVkNGWWlFaFNJVmZDRVRJQTBnRVh3aURTQVJRamlHSUJGQ0NJaUVoU0FyZkNFUElBMGdIM3dnRUNBVWZDSU5JQlJDRm9ZZ0ZFSXFpSVNGSUNCOEloSjhJaEFnRWtJa2hpQVNRaHlJaElVaEZDQU5JQnA4SUE5OElnMGdEMElUaGlBUFFpMkloSVVoRVNBV0lBNUNDSVlnRGtJNGlJU0ZJQmw4SWc4Z0V5QVlmSHdpRWlBUFFpNkdJQTlDRW9pRWhTSU9JQkI4SWc4Z0RrSWhoaUFPUWgrSWhJVWhGeUFOSUIxQ0Rud2dFeUFWUWlPR0lCVkNIWWlFaFh3aUVDQVdJQ3g4ZkNJTklCQkNKWVlnRUVJYmlJU0ZJZzU4SWhBZ0RrSWJoaUFPUWlXSWhJVWhGU0FOSUJGOElnMGdFVUlPaGlBUlFqS0loSVVoRXlBTklCSWdGSHdpRFNBVVFpcUdJQlJDRm9pRWhTSU9mQ0lTSUE1Q01ZWWdEa0lQaUlTRklSUWdEU0FUZkNJTklCTkNKSVlnRTBJY2lJU0ZJUkVnRUNBWGZDSVFJQmRDRVlZZ0YwSXZpSVNGSWc0Z0Vud2hGaUFOSUE4Z0ZYd2lEU0FWUWllR0lCVkNHWWlFaFNJVmZDRVRJQTBnRVh3aURTQVJRamFHSUJGQ0NvaUVoU0FzZkNFUElBMGdJSHdnRUNBVWZDSU5JQlJDT0lZZ0ZFSUlpSVNGSUJwOEloSjhJaEFnRWtJZWhpQVNRaUtJaElVaEZDQU5JQnQ4SUE5OElnMGdEMElpaGlBUFFoNkloSVVoRVNBV0lBNUNMSVlnRGtJVWlJU0ZJQjk4SWc4Z0V5QVpmSHdpRWlBUFFpZUdJQTlDR1lpRWhTSU9JQkI4SWc4Z0RrSU5oaUFPUWpPSWhJVWhJU0FOSUI1Q0Qzd2dFeUFWUWdtR0lCVkNONGlFaFh3aUVDQVdJQzE4ZkNJTklCQkNHSVlnRUVJb2lJU0ZJZzU4SWhBZ0RrSXloaUFPUWc2SWhJVWhGeUFOSUJGOElnMGdFVUlLaGlBUlFqYUloSVVoRXlBTklCSWdGSHdpRFNBVVFoR0dJQlJDTDRpRWhTSU9mQ0lTSUE1Q0hZWWdEa0lqaUlTRklSUWdEU0FUZkNJTklCTkNKNFlnRTBJWmlJU0ZJUkVnRUNBaGZDSVFJQ0ZDR1lZZ0lVSW5pSVNGSWhZZ0Vud2hGU0FOSUE4Z0Yzd2lEU0FYUWl1R0lCZENGWWlFaFNJVGZDRU9JQTBnRVh3aURTQVJRamlHSUJGQ0NJaUVoU0F0ZkNFUElBMGdHbndnRUNBVWZDSU5JQlJDRm9ZZ0ZFSXFpSVNGSUJ0OEloQjhJaElnRUVJa2hpQVFRaHlJaElVaElTQU5JQng4SUE5OElnMGdEMElUaGlBUFFpMkloSVVoRVNBVklCWkNDSVlnRmtJNGlJU0ZJQ0I4SWc4Z0RpQWZmSHdpRUNBUFFpNkdJQTlDRW9pRWhTSVBJQko4SWhJZ0QwSWhoaUFQUWgrSWhJVWhGeUFOSUJoQ0VId2dEaUFUUWlPR0lCTkNIWWlFaFh3aURTQVZJQ044ZkNJWUlBMUNKWVlnRFVJYmlJU0ZJZzk4SWcwZ0QwSWJoaUFQUWlXSWhJVWhGQ0FSSUJoOEloZ2dFVUlPaGlBUlFqS0loSVVoRGlBWUlCQWdJWHdpR0NBaFFpcUdJQ0ZDRm9pRWhTSVBmQ0lRSUE5Q01ZWWdEMElQaUlTRklSRWdEaUFZZkNJWUlBNUNKSVlnRGtJY2lJU0ZJUllnRFNBWGZDSU5JQmRDRVlZZ0YwSXZpSVNGSWhVZ0VId2hFeUFZSUJJZ0ZId2lHQ0FVUWllR0lCUkNHWWlFaFNJT2ZDRVBJQllnR0h3aUdDQVdRamFHSUJaQ0NvaUVoU0FqZkNFU0lBMGdFWHdpRFNBUlFqaUdJQkZDQ0lpRWhTQWNmQ0lRSUJnZ0czeDhJaGdnRUVJZWhpQVFRaUtJaElVaEZDQU5JQjE4SUJKOEloQWdFa0lpaGlBU1FoNkloSVVoRVNBVElCVkNMSVlnRlVJVWlJU0ZJQnA4SWhJZ0R5QWdmSHdpRFNBU1FpZUdJQkpDR1lpRWhTSVNJQmg4SWhnZ0VrSU5oaUFTUWpPSWhJVWhGaUFRSUJsQ0VYd2dEeUFPUWdtR0lBNUNONGlFaFh3aUVDQVRJQ1Y4ZkNJWklCQkNHSVlnRUVJb2lJU0ZJaEI4SWhJZ0VFSXloaUFRUWc2SWhJVWhGU0FSSUJsOEloa2dFVUlLaGlBUlFqYUloSVVoRHlBWklBMGdGSHdpR1NBVVFoR0dJQlJDTDRpRWhTSVFmQ0lOSUJCQ0hZWWdFRUlqaUlTRklSTWdEeUFaZkNJWklBOUNKNFlnRDBJWmlJU0ZJUTRnQmlBWklCVWdHSHdpR0NBVlFpdUdJQlZDRllpRWhTSVBmQ0lRSUJwOElEV0ZJaG8zQXdBZ0J5QTJJQklnRm53aUdTQVdRaG1HSUJaQ0o0aUVoU0lTSUExOElnMGdFa0lJaGlBU1FqaUloSVVnRzN5RkloczNBd0FnQ0NBeElBNGdHSHdpR0NBY2ZJVWlIRGNEQUNBSklESWdFeUFaZkNJWklCTkNGb1lnRTBJcWlJU0ZJQjE4aFNJZE53TUFJQW9nR1NBZWZDQXpoU0llTndNQUlBc2dHQ0FPUWppR0lBNUNDSWlFaFNBbGZDQTBoU0lZTndNQUlBd2dEU0FuZkNBbWhTSVpOd01BSUFNZ0gwSVNmQ0FRSUE5Q0k0WWdEMElkaUlTRmZDQTNoU0lmTndNQUlDSkMvLy8vLy8vLy8vKy9mNE1oSWlBQ1FYOXFJZ0lFUUNBQUlRRU1BUXNMSUFRZ0xpQXZmaUF3ZkRjREFDQUZJQ0kzQXdBTFVnRUJmeUFBSUFGc0lRSWdBQ0FCY2tILy93TkxCRUFnQWtGL0lBSWdBQkFnSUFGR0d5RUNDeUFDRUJRaUFFVUVRQ0FBRHdzZ0FFRjhhaWdDQUVFRGNVVUVRQ0FBRHdzZ0FFRUFJQUlRRFJvZ0FBc0dBRUVBRUFnTDRqWUJEWDhqQkNFS0l3UkJFR29rQkNBQVFmVUJTUVIvUVlqTUFDZ0NBQ0lGUVJBZ0FFRUxha0Y0Y1NBQVFRdEpHeUlDUVFOMklnQjJJZ0ZCQTNFRVFDQUJRUUZ4UVFGeklBQnFJZ0ZCQTNSQnNNd0FhaUlDUVFocUlnUW9BZ0FpQTBFSWFpSUdLQUlBSVFBZ0FDQUNSZ1JBUVlqTUFFRUJJQUYwUVg5eklBVnhOZ0lBQlNBQUlBSTJBZ3dnQkNBQU5nSUFDeUFESUFGQkEzUWlBRUVEY2pZQ0JDQUFJQU5xUVFScUlnQWdBQ2dDQUVFQmNqWUNBQ0FLSkFRZ0JnOExJQUpCa013QUtBSUFJZ2RMQkg4Z0FRUkFJQUVnQUhSQkFpQUFkQ0lBUVFBZ0FHdHljU0lBUVFBZ0FHdHhRWDlxSWdCQkRIWkJFSEVpQVNBQUlBRjJJZ0JCQlhaQkNIRWlBWElnQUNBQmRpSUFRUUoyUVFSeElnRnlJQUFnQVhZaUFFRUJka0VDY1NJQmNpQUFJQUYySWdCQkFYWkJBWEVpQVhJZ0FDQUJkbW9pQTBFRGRFR3d6QUJxSWdSQkNHb2lCaWdDQUNJQlFRaHFJZ2dvQWdBaEFDQUFJQVJHQkVCQmlNd0FRUUVnQTNSQmYzTWdCWEVpQURZQ0FBVWdBQ0FFTmdJTUlBWWdBRFlDQUNBRklRQUxJQUVnQWtFRGNqWUNCQ0FCSUFKcUlnUWdBMEVEZENJRElBSnJJZ1ZCQVhJMkFnUWdBU0FEYWlBRk5nSUFJQWNFUUVHY3pBQW9BZ0FoQXlBSFFRTjJJZ0pCQTNSQnNNd0FhaUVCUVFFZ0FuUWlBaUFBY1FSL0lBRkJDR29pQWlnQ0FBVkJpTXdBSUFBZ0FuSTJBZ0FnQVVFSWFpRUNJQUVMSVFBZ0FpQUROZ0lBSUFBZ0F6WUNEQ0FESUFBMkFnZ2dBeUFCTmdJTUMwR1F6QUFnQlRZQ0FFR2N6QUFnQkRZQ0FDQUtKQVFnQ0E4TFFZek1BQ2dDQUNJTEJIOUJBQ0FMYXlBTGNVRi9haUlBUVF4MlFSQnhJZ0VnQUNBQmRpSUFRUVYyUVFoeElnRnlJQUFnQVhZaUFFRUNka0VFY1NJQmNpQUFJQUYySWdCQkFYWkJBbkVpQVhJZ0FDQUJkaUlBUVFGMlFRRnhJZ0Z5SUFBZ0FYWnFRUUowUWJqT0FHb29BZ0FpQXlFQklBTW9BZ1JCZUhFZ0Ftc2hDQU5BQWtBZ0FTZ0NFQ0lBUlFSQUlBRW9BaFFpQUVVTkFRc2dBQ0lCSUFNZ0FTZ0NCRUY0Y1NBQ2F5SUFJQWhKSWdRYklRTWdBQ0FJSUFRYklRZ01BUXNMSUFJZ0Eyb2lEQ0FEU3dSL0lBTW9BaGdoQ1NBRElBTW9BZ3dpQUVZRVFBSkFJQU5CRkdvaUFTZ0NBQ0lBUlFSQUlBTkJFR29pQVNnQ0FDSUFSUVJBUVFBaEFBd0NDd3NEUUFKQUlBQkJGR29pQkNnQ0FDSUdSUVJBSUFCQkVHb2lCQ2dDQUNJR1JRMEJDeUFFSVFFZ0JpRUFEQUVMQ3lBQlFRQTJBZ0FMQlNBREtBSUlJZ0VnQURZQ0RDQUFJQUUyQWdnTElBa0VRQUpBSUFNZ0F5Z0NIQ0lCUVFKMFFiak9BR29pQkNnQ0FFWUVRQ0FFSUFBMkFnQWdBRVVFUUVHTXpBQkJBU0FCZEVGL2N5QUxjVFlDQUF3Q0N3VWdDVUVRYWlJQklBbEJGR29nQXlBQktBSUFSaHNnQURZQ0FDQUFSUTBCQ3lBQUlBazJBaGdnQXlnQ0VDSUJCRUFnQUNBQk5nSVFJQUVnQURZQ0dBc2dBeWdDRkNJQkJFQWdBQ0FCTmdJVUlBRWdBRFlDR0FzTEN5QUlRUkJKQkVBZ0F5QUNJQWhxSWdCQkEzSTJBZ1FnQUNBRGFrRUVhaUlBSUFBb0FnQkJBWEkyQWdBRklBTWdBa0VEY2pZQ0JDQU1JQWhCQVhJMkFnUWdDQ0FNYWlBSU5nSUFJQWNFUUVHY3pBQW9BZ0FoQkNBSFFRTjJJZ0ZCQTNSQnNNd0FhaUVBUVFFZ0FYUWlBU0FGY1FSL0lBQkJDR29pQWlnQ0FBVkJpTXdBSUFFZ0JYSTJBZ0FnQUVFSWFpRUNJQUFMSVFFZ0FpQUVOZ0lBSUFFZ0JEWUNEQ0FFSUFFMkFnZ2dCQ0FBTmdJTUMwR1F6QUFnQ0RZQ0FFR2N6QUFnRERZQ0FBc2dDaVFFSUFOQkNHb1BCU0FDQ3dVZ0Fnc0ZJQUlMQlNBQVFiOS9Td1IvUVg4RkFuOGdBRUVMYWlJQVFYaHhJUUZCak13QUtBSUFJZ1VFZnlBQVFRaDJJZ0FFZnlBQlFmLy8vd2RMQkg5Qkh3VWdBQ0FBUVlEK1AycEJFSFpCQ0hFaUFuUWlBMEdBNEI5cVFSQjJRUVJ4SVFCQkRpQUFJQUp5SUFNZ0FIUWlBRUdBZ0E5cVFSQjJRUUp4SWdKeWF5QUFJQUowUVE5MmFpSUFRUUYwSUFFZ0FFRUhhblpCQVhGeUN3VkJBQXNoQjBFQUlBRnJJUU1DUUFKQUlBZEJBblJCdU00QWFpZ0NBQ0lBQkVCQkFDRUNJQUZCQUVFWklBZEJBWFpySUFkQkgwWWJkQ0VHQTBBZ0FDZ0NCRUY0Y1NBQmF5SUlJQU5KQkVBZ0NBUi9JQWdoQXlBQUJTQUFJUUpCQUNFRERBUUxJUUlMSUFRZ0FDZ0NGQ0lFSUFSRklBUWdBRUVRYWlBR1FSOTJRUUowYWlnQ0FDSUFSbkliSVFRZ0JrRUJkQ0VHSUFBTkFBc2dBaUVBQlVFQUlRQUxJQUFnQkhKRkJFQWdBU0FGUVFJZ0IzUWlBRUVBSUFCcmNuRWlBa1VOQkJwQkFDRUFJQUpCQUNBQ2EzRkJmMm9pQWtFTWRrRVFjU0lFSUFJZ0JIWWlBa0VGZGtFSWNTSUVjaUFDSUFSMklnSkJBblpCQkhFaUJISWdBaUFFZGlJQ1FRRjJRUUp4SWdSeUlBSWdCSFlpQWtFQmRrRUJjU0lFY2lBQ0lBUjJha0VDZEVHNHpnQnFLQUlBSVFRTElBUUVmeUFBSVFJZ0JDRUFEQUVGSUFBTElRUU1BUXNnQWlFRUlBTWhBZ05BQW44Z0FDZ0NCQ0VOSUFBb0FoQWlBMFVFUUNBQUtBSVVJUU1MSUEwTFFYaHhJQUZySWdnZ0Fra2hCaUFJSUFJZ0Joc2hBaUFBSUFRZ0Joc2hCQ0FEQkg4Z0F5RUFEQUVGSUFJTElRTUxDeUFFQkg4Z0EwR1F6QUFvQWdBZ0FXdEpCSDhnQVNBRWFpSUhJQVJMQkg4Z0JDZ0NHQ0VKSUFRZ0JDZ0NEQ0lBUmdSQUFrQWdCRUVVYWlJQ0tBSUFJZ0JGQkVBZ0JFRVFhaUlDS0FJQUlnQkZCRUJCQUNFQURBSUxDd05BQWtBZ0FFRVVhaUlHS0FJQUlnaEZCRUFnQUVFUWFpSUdLQUlBSWdoRkRRRUxJQVloQWlBSUlRQU1BUXNMSUFKQkFEWUNBQXNGSUFRb0FnZ2lBaUFBTmdJTUlBQWdBallDQ0FzZ0NRUkFBa0FnQkNBRUtBSWNJZ0pCQW5SQnVNNEFhaUlHS0FJQVJnUkFJQVlnQURZQ0FDQUFSUVJBUVl6TUFDQUZRUUVnQW5SQmYzTnhJZ0EyQWdBTUFnc0ZJQWxCRUdvaUFpQUpRUlJxSUFRZ0FpZ0NBRVliSUFBMkFnQWdBRVVFUUNBRklRQU1BZ3NMSUFBZ0NUWUNHQ0FFS0FJUUlnSUVRQ0FBSUFJMkFoQWdBaUFBTmdJWUN5QUVLQUlVSWdJRVFDQUFJQUkyQWhRZ0FpQUFOZ0lZQ3lBRklRQUxCU0FGSVFBTElBTkJFRWtFUUNBRUlBRWdBMm9pQUVFRGNqWUNCQ0FBSUFScVFRUnFJZ0FnQUNnQ0FFRUJjallDQUFVQ1FDQUVJQUZCQTNJMkFnUWdCeUFEUVFGeU5nSUVJQU1nQjJvZ0F6WUNBQ0FEUVFOMklRRWdBMEdBQWtrRVFDQUJRUU4wUWJETUFHb2hBRUdJekFBb0FnQWlBa0VCSUFGMElnRnhCSDhnQUVFSWFpSUNLQUlBQlVHSXpBQWdBU0FDY2pZQ0FDQUFRUWhxSVFJZ0FBc2hBU0FDSUFjMkFnQWdBU0FITmdJTUlBY2dBVFlDQ0NBSElBQTJBZ3dNQVFzZ0EwRUlkaUlCQkg4Z0EwSC8vLzhIU3dSL1FSOEZJQUVnQVVHQS9qOXFRUkIyUVFoeElnSjBJZ1ZCZ09BZmFrRVFka0VFY1NFQlFRNGdBU0FDY2lBRklBRjBJZ0ZCZ0lBUGFrRVFka0VDY1NJQ2Ntc2dBU0FDZEVFUGRtb2lBVUVCZENBRElBRkJCMnAyUVFGeGNnc0ZRUUFMSWdGQkFuUkJ1TTRBYWlFQ0lBY2dBVFlDSENBSFFSQnFJZ1ZCQURZQ0JDQUZRUUEyQWdCQkFTQUJkQ0lGSUFCeFJRUkFRWXpNQUNBQUlBVnlOZ0lBSUFJZ0J6WUNBQ0FISUFJMkFoZ2dCeUFITmdJTUlBY2dCellDQ0F3QkN5QURJQUlvQWdBaUFDZ0NCRUY0Y1VZRVFDQUFJUUVGQWtBZ0EwRUFRUmtnQVVFQmRtc2dBVUVmUmh0MElRSURRQ0FBUVJCcUlBSkJIM1pCQW5ScUlnVW9BZ0FpQVFSQUlBSkJBWFFoQWlBRElBRW9BZ1JCZUhGR0RRSWdBU0VBREFFTEN5QUZJQWMyQWdBZ0J5QUFOZ0lZSUFjZ0J6WUNEQ0FISUFjMkFnZ01BZ3NMSUFGQkNHb2lBQ2dDQUNJQ0lBYzJBZ3dnQUNBSE5nSUFJQWNnQWpZQ0NDQUhJQUUyQWd3Z0IwRUFOZ0lZQ3dzZ0NpUUVJQVJCQ0dvUEJTQUJDd1VnQVFzRklBRUxCU0FCQ3dzTEN5RUFBa0JCa013QUtBSUFJZ0lnQUU4RVFFR2N6QUFvQWdBaEFTQUNJQUJySWdOQkQwc0VRRUdjekFBZ0FDQUJhaUlGTmdJQVFaRE1BQ0FETmdJQUlBVWdBMEVCY2pZQ0JDQUJJQUpxSUFNMkFnQWdBU0FBUVFOeU5nSUVCVUdRekFCQkFEWUNBRUdjekFCQkFEWUNBQ0FCSUFKQkEzSTJBZ1FnQVNBQ2FrRUVhaUlBSUFBb0FnQkJBWEkyQWdBTERBRUxRWlRNQUNnQ0FDSUNJQUJMQkVCQmxNd0FJQUlnQUdzaUFqWUNBRUdnekFBZ0FFR2d6QUFvQWdBaUFXb2lBellDQUNBRElBSkJBWEkyQWdRZ0FTQUFRUU55TmdJRURBRUxJQW9oQVFKQUlBQkJMMm9pQkVIZ3p3QW9BZ0FFZjBIb3p3QW9BZ0FGUWVqUEFFR0FJRFlDQUVIa3p3QkJnQ0EyQWdCQjdNOEFRWDgyQWdCQjhNOEFRWDgyQWdCQjlNOEFRUUEyQWdCQnhNOEFRUUEyQWdCQjRNOEFJQUZCY0hGQjJLclZxZ1Z6TmdJQVFZQWdDeUlCYWlJR1FRQWdBV3NpQ0hFaUJTQUFUUTBBUWNEUEFDZ0NBQ0lCQkVBZ0JVRzR6d0FvQWdBaUEyb2lCeUFEVFNBSElBRkxjZzBCQ3lBQVFUQnFJUWNDUUFKQVFjVFBBQ2dDQUVFRWNRUkFRUUFoQWd3QkJRSkFBa0FDUUFKQVFhRE1BQ2dDQUNJQlJRMEFRY2pQQUNFREEwQUNRQ0FES0FJQUlna2dBVTBFUUNBSklBTkJCR29pQ1NnQ0FHb2dBVXNOQVFzZ0F5Z0NDQ0lERFFFTUFnc0xJQWdnQmlBQ2EzRWlBa0gvLy8vL0Iwa0VRQ0FDRUE4aUFTQURLQUlBSUFrb0FnQnFSZ1JBSUFGQmYwY05CUVVNQXdzRlFRQWhBZ3NNQWd0QkFCQVBJZ0ZCZjBZRWYwRUFCVUc0endBb0FnQWlCaUFGSUFGQjVNOEFLQUlBSWdKQmYyb2lBMnBCQUNBQ2EzRWdBV3RCQUNBQklBTnhHMm9pQW1vaEF5QUNRZi8vLy84SFNTQUNJQUJMY1FSL1FjRFBBQ2dDQUNJSUJFQWdBeUFHVFNBRElBaExjZ1JBUVFBaEFnd0ZDd3NnQVNBQ0VBOGlBMFlOQkNBRElRRU1BZ1ZCQUFzTElRSU1BUXNnQVVGL1J5QUNRZi8vLy84SFNYRWdCeUFDUzNGRkJFQWdBVUYvUmdSQVFRQWhBZ3dDQlF3REN3QUxRZWpQQUNnQ0FDSURJQVFnQW10cVFRQWdBMnR4SWdOQi8vLy8vd2RQRFFGQkFDQUNheUVFSUFNUUQwRi9SZ1IvSUFRUUR4cEJBQVVnQWlBRGFpRUNEQUlMSVFJTFFjVFBBRUhFendBb0FnQkJCSEkyQWdBTUFnc0xEQUVMSUFWQi8vLy8vd2RQRFFFZ0JSQVBJUUZCQUJBUElnTWdBV3NpQkNBQVFTaHFTeUVGSUFRZ0FpQUZHeUVDSUFWQkFYTWdBVUYvUm5JZ0FVRi9SeUFEUVg5SGNTQUJJQU5KY1VFQmMzSU5BUXRCdU04QUlBSkJ1TThBS0FJQWFpSUROZ0lBSUFOQnZNOEFLQUlBU3dSQVFielBBQ0FETmdJQUMwR2d6QUFvQWdBaUJRUkFBa0JCeU04QUlRTUNRQUpBQTBBZ0FTQURLQUlBSWdRZ0EwRUVhaUlHS0FJQUlnaHFSZzBCSUFNb0FnZ2lBdzBBQ3d3QkN5QURLQUlNUVFoeFJRUkFJQVFnQlUwZ0FTQUZTM0VFUUNBR0lBSWdDR28yQWdBZ0JVRUFJQVZCQ0dvaUFXdEJCM0ZCQUNBQlFRZHhHeUlEYWlFQklBSkJsTXdBS0FJQWFpSUVJQU5ySVFKQm9Nd0FJQUUyQWdCQmxNd0FJQUkyQWdBZ0FTQUNRUUZ5TmdJRUlBUWdCV3BCS0RZQ0JFR2t6QUJCOE04QUtBSUFOZ0lBREFNTEN3c2dBVUdZekFBb0FnQkpCRUJCbU13QUlBRTJBZ0FMSUFFZ0Ftb2hCRUhJendBaEF3SkFBa0FEUUNBRUlBTW9BZ0JHRFFFZ0F5Z0NDQ0lERFFBTERBRUxJQU1vQWd4QkNIRkZCRUFnQXlBQk5nSUFJQU5CQkdvaUF5QUNJQU1vQWdCcU5nSUFJQUFnQVVFQUlBRkJDR29pQVd0QkIzRkJBQ0FCUVFkeEcyb2lCMm9oQmlBRVFRQWdCRUVJYWlJQmEwRUhjVUVBSUFGQkIzRWJhaUlDSUFkcklBQnJJUU1nQnlBQVFRTnlOZ0lFSUFJZ0JVWUVRRUdVekFBZ0EwR1V6QUFvQWdCcUlnQTJBZ0JCb013QUlBWTJBZ0FnQmlBQVFRRnlOZ0lFQlFKQUlBSkJuTXdBS0FJQVJnUkFRWkRNQUNBRFFaRE1BQ2dDQUdvaUFEWUNBRUdjekFBZ0JqWUNBQ0FHSUFCQkFYSTJBZ1FnQUNBR2FpQUFOZ0lBREFFTElBSW9BZ1FpQ1VFRGNVRUJSZ1JBSUFsQkEzWWhCU0FKUVlBQ1NRUkFJQUlvQWdnaUFDQUNLQUlNSWdGR0JFQkJpTXdBUVlqTUFDZ0NBRUVCSUFWMFFYOXpjVFlDQUFVZ0FDQUJOZ0lNSUFFZ0FEWUNDQXNGQWtBZ0FpZ0NHQ0VJSUFJZ0FpZ0NEQ0lBUmdSQUFrQWdBa0VRYWlJQlFRUnFJZ1VvQWdBaUFBUkFJQVVoQVFVZ0FTZ0NBQ0lBUlFSQVFRQWhBQXdDQ3dzRFFBSkFJQUJCRkdvaUJTZ0NBQ0lFUlFSQUlBQkJFR29pQlNnQ0FDSUVSUTBCQ3lBRklRRWdCQ0VBREFFTEN5QUJRUUEyQWdBTEJTQUNLQUlJSWdFZ0FEWUNEQ0FBSUFFMkFnZ0xJQWhGRFFBZ0FpQUNLQUljSWdGQkFuUkJ1TTRBYWlJRktBSUFSZ1JBQWtBZ0JTQUFOZ0lBSUFBTkFFR016QUJCak13QUtBSUFRUUVnQVhSQmYzTnhOZ0lBREFJTEJTQUlRUkJxSWdFZ0NFRVVhaUFDSUFFb0FnQkdHeUFBTmdJQUlBQkZEUUVMSUFBZ0NEWUNHQ0FDUVJCcUlnVW9BZ0FpQVFSQUlBQWdBVFlDRUNBQklBQTJBaGdMSUFVb0FnUWlBVVVOQUNBQUlBRTJBaFFnQVNBQU5nSVlDd3NnQWlBSlFYaHhJZ0JxSVFJZ0FDQURhaUVEQ3lBQ1FRUnFJZ0FnQUNnQ0FFRitjVFlDQUNBR0lBTkJBWEkyQWdRZ0F5QUdhaUFETmdJQUlBTkJBM1loQVNBRFFZQUNTUVJBSUFGQkEzUkJzTXdBYWlFQVFZak1BQ2dDQUNJQ1FRRWdBWFFpQVhFRWZ5QUFRUWhxSWdJb0FnQUZRWWpNQUNBQklBSnlOZ0lBSUFCQkNHb2hBaUFBQ3lFQklBSWdCallDQUNBQklBWTJBZ3dnQmlBQk5nSUlJQVlnQURZQ0RBd0JDeUFEUVFoMklnQUVmeUFEUWYvLy93ZExCSDlCSHdVZ0FDQUFRWUQrUDJwQkVIWkJDSEVpQVhRaUFrR0E0QjlxUVJCMlFRUnhJUUJCRGlBQUlBRnlJQUlnQUhRaUFFR0FnQTlxUVJCMlFRSnhJZ0Z5YXlBQUlBRjBRUTkyYWlJQVFRRjBJQU1nQUVFSGFuWkJBWEZ5Q3dWQkFBc2lBVUVDZEVHNHpnQnFJUUFnQmlBQk5nSWNJQVpCRUdvaUFrRUFOZ0lFSUFKQkFEWUNBRUdNekFBb0FnQWlBa0VCSUFGMElnVnhSUVJBUVl6TUFDQUNJQVZ5TmdJQUlBQWdCallDQUNBR0lBQTJBaGdnQmlBR05nSU1JQVlnQmpZQ0NBd0JDeUFESUFBb0FnQWlBQ2dDQkVGNGNVWUVRQ0FBSVFFRkFrQWdBMEVBUVJrZ0FVRUJkbXNnQVVFZlJodDBJUUlEUUNBQVFSQnFJQUpCSDNaQkFuUnFJZ1VvQWdBaUFRUkFJQUpCQVhRaEFpQURJQUVvQWdSQmVIRkdEUUlnQVNFQURBRUxDeUFGSUFZMkFnQWdCaUFBTmdJWUlBWWdCallDRENBR0lBWTJBZ2dNQWdzTElBRkJDR29pQUNnQ0FDSUNJQVkyQWd3Z0FDQUdOZ0lBSUFZZ0FqWUNDQ0FHSUFFMkFnd2dCa0VBTmdJWUN3c2dDaVFFSUFkQkNHb1BDd3RCeU04QUlRTURRQUpBSUFNb0FnQWlCQ0FGVFFSQUlBUWdBeWdDQkdvaUJpQUZTdzBCQ3lBREtBSUlJUU1NQVFzTElBWkJVV29pQkVFSWFpRURJQVVnQkVFQUlBTnJRUWR4UVFBZ0EwRUhjUnRxSWdNZ0F5QUZRUkJxSWdkSkd5SURRUWhxSVFSQm9Nd0FJQUZCQUNBQlFRaHFJZ2hyUVFkeFFRQWdDRUVIY1JzaUNHb2lDVFlDQUVHVXpBQWdBa0ZZYWlJTElBaHJJZ2cyQWdBZ0NTQUlRUUZ5TmdJRUlBRWdDMnBCS0RZQ0JFR2t6QUJCOE04QUtBSUFOZ0lBSUFOQkJHb2lDRUViTmdJQUlBUkJ5TThBS1FJQU53SUFJQVJCME04QUtRSUFOd0lJUWNqUEFDQUJOZ0lBUWN6UEFDQUNOZ0lBUWRUUEFFRUFOZ0lBUWREUEFDQUVOZ0lBSUFOQkdHb2hBUU5BSUFGQkJHb2lBa0VITmdJQUlBRkJDR29nQmtrRVFDQUNJUUVNQVFzTElBTWdCVWNFUUNBSUlBZ29BZ0JCZm5FMkFnQWdCU0FESUFWcklnUkJBWEkyQWdRZ0F5QUVOZ0lBSUFSQkEzWWhBaUFFUVlBQ1NRUkFJQUpCQTNSQnNNd0FhaUVCUVlqTUFDZ0NBQ0lEUVFFZ0FuUWlBbkVFZnlBQlFRaHFJZ01vQWdBRlFZak1BQ0FDSUFOeU5nSUFJQUZCQ0dvaEF5QUJDeUVDSUFNZ0JUWUNBQ0FDSUFVMkFnd2dCU0FDTmdJSUlBVWdBVFlDREF3Q0N5QUVRUWgySWdFRWZ5QUVRZi8vL3dkTEJIOUJId1VnQVNBQlFZRCtQMnBCRUhaQkNIRWlBblFpQTBHQTRCOXFRUkIyUVFSeElRRkJEaUFCSUFKeUlBTWdBWFFpQVVHQWdBOXFRUkIyUVFKeElnSnlheUFCSUFKMFFROTJhaUlCUVFGMElBUWdBVUVIYW5aQkFYRnlDd1ZCQUFzaUFrRUNkRUc0emdCcUlRRWdCU0FDTmdJY0lBVkJBRFlDRkNBSFFRQTJBZ0JCak13QUtBSUFJZ05CQVNBQ2RDSUdjVVVFUUVHTXpBQWdBeUFHY2pZQ0FDQUJJQVUyQWdBZ0JTQUJOZ0lZSUFVZ0JUWUNEQ0FGSUFVMkFnZ01BZ3NnQkNBQktBSUFJZ0VvQWdSQmVIRkdCRUFnQVNFQ0JRSkFJQVJCQUVFWklBSkJBWFpySUFKQkgwWWJkQ0VEQTBBZ0FVRVFhaUFEUVI5MlFRSjBhaUlHS0FJQUlnSUVRQ0FEUVFGMElRTWdCQ0FDS0FJRVFYaHhSZzBDSUFJaEFRd0JDd3NnQmlBRk5nSUFJQVVnQVRZQ0dDQUZJQVUyQWd3Z0JTQUZOZ0lJREFNTEN5QUNRUWhxSWdFb0FnQWlBeUFGTmdJTUlBRWdCVFlDQUNBRklBTTJBZ2dnQlNBQ05nSU1JQVZCQURZQ0dBc0xCVUdZekFBb0FnQWlBMFVnQVNBRFNYSUVRRUdZekFBZ0FUWUNBQXRCeU04QUlBRTJBZ0JCek04QUlBSTJBZ0JCMU04QVFRQTJBZ0JCck13QVFlRFBBQ2dDQURZQ0FFR296QUJCZnpZQ0FFRzh6QUJCc013QU5nSUFRYmpNQUVHd3pBQTJBZ0JCeE13QVFiak1BRFlDQUVIQXpBQkJ1TXdBTmdJQVFjek1BRUhBekFBMkFnQkJ5TXdBUWNETUFEWUNBRUhVekFCQnlNd0FOZ0lBUWRETUFFSEl6QUEyQWdCQjNNd0FRZERNQURZQ0FFSFl6QUJCME13QU5nSUFRZVRNQUVIWXpBQTJBZ0JCNE13QVFkak1BRFlDQUVIc3pBQkI0TXdBTmdJQVFlak1BRUhnekFBMkFnQkI5TXdBUWVqTUFEWUNBRUh3ekFCQjZNd0FOZ0lBUWZ6TUFFSHd6QUEyQWdCQitNd0FRZkRNQURZQ0FFR0V6UUJCK013QU5nSUFRWUROQUVINHpBQTJBZ0JCak0wQVFZRE5BRFlDQUVHSXpRQkJnTTBBTmdJQVFaVE5BRUdJelFBMkFnQkJrTTBBUVlqTkFEWUNBRUdjelFCQmtNMEFOZ0lBUVpqTkFFR1F6UUEyQWdCQnBNMEFRWmpOQURZQ0FFR2d6UUJCbU0wQU5nSUFRYXpOQUVHZ3pRQTJBZ0JCcU0wQVFhRE5BRFlDQUVHMHpRQkJxTTBBTmdJQVFiRE5BRUdvelFBMkFnQkJ2TTBBUWJETkFEWUNBRUc0elFCQnNNMEFOZ0lBUWNUTkFFRzR6UUEyQWdCQndNMEFRYmpOQURZQ0FFSE16UUJCd00wQU5nSUFRY2pOQUVIQXpRQTJBZ0JCMU0wQVFjak5BRFlDQUVIUXpRQkJ5TTBBTmdJQVFkek5BRUhRelFBMkFnQkIyTTBBUWRETkFEWUNBRUhrelFCQjJNMEFOZ0lBUWVETkFFSFl6UUEyQWdCQjdNMEFRZUROQURZQ0FFSG96UUJCNE0wQU5nSUFRZlROQUVIb3pRQTJBZ0JCOE0wQVFlak5BRFlDQUVIOHpRQkI4TTBBTmdJQVFmak5BRUh3elFBMkFnQkJoTTRBUWZqTkFEWUNBRUdBemdCQitNMEFOZ0lBUVl6T0FFR0F6Z0EyQWdCQmlNNEFRWURPQURZQ0FFR1V6Z0JCaU00QU5nSUFRWkRPQUVHSXpnQTJBZ0JCbk00QVFaRE9BRFlDQUVHWXpnQkJrTTRBTmdJQVFhVE9BRUdZemdBMkFnQkJvTTRBUVpqT0FEWUNBRUdzemdCQm9NNEFOZ0lBUWFqT0FFR2d6Z0EyQWdCQnRNNEFRYWpPQURZQ0FFR3d6Z0JCcU00QU5nSUFRYURNQUNBQlFRQWdBVUVJYWlJRGEwRUhjVUVBSUFOQkIzRWJJZ05xSWdVMkFnQkJsTXdBSUFKQldHb2lBaUFEYXlJRE5nSUFJQVVnQTBFQmNqWUNCQ0FCSUFKcVFTZzJBZ1JCcE13QVFmRFBBQ2dDQURZQ0FBdEJsTXdBS0FJQUlnRWdBRTBOQUVHVXpBQWdBU0FBYXlJQ05nSUFRYURNQUNBQVFhRE1BQ2dDQUNJQmFpSUROZ0lBSUFNZ0FrRUJjallDQkNBQklBQkJBM0kyQWdRZ0NpUUVJQUZCQ0dvUEN5QUtKQVJCQUE4TElBb2tCQ0FCUVFocUMzd0JBMzhnQUVVRVFBOExJQUFvQWdBaUFVVUVRQThMSUFFb0FnQWlBZ1JBSUFJb0FnUWlBd1JBSUFNUUVDQUJLQUlBUVFBMkFnUWdBU2dDQUNFQ0N5QUNLQUlNSWdNRVFDQURFQkFnQVNnQ0FFRUFOZ0lNSUFFb0FnQWhBZ3NnQWhBUUlBRkJBRFlDQUNBQUtBSUFJUUVMSUFFUUVDQUFRUUEyQWdBTHhRRUJEWDhqQkNFQkl3UkJFR29rQkVFWVFRRVFFaUlEUlFSQUlBRWtCRUVBRHdzZ0FSQUNHaUFCRUFFaEFFRUJJQUV2QVFRaUJSQVNJUVFnQUNnQ0ZDRUdJQUFvQWhBaEJ5QUFLQUlNSVFnZ0FDZ0NDQ0VKSUFBb0FnUWhDaUFBS0FJQUlRQWpCQ0VDSXdSQkVHb2tCQUovUVJRZ0FoQUVJUXdnQWlRRUlBd0xJUUlnQkFSQUlBUVFFQXRCZ013QUlBSWdBQ0FLSUFrZ0NDQUVJQVZxSUFjZ0JTQUdhbXBxYW1wcWFtcEI3QTVxclRjREFDQURRUUEyQWdBZ0F4QW5JQUVrQkNBREMxRUJBWDhnQUVFWVFRRVFFaUlDTmdJQUlBSkJJRFlDQUNBQ1FTQkJBUkFTSWdJMkFnUWdBaUFCS1FBQU53QUFJQUlnQVNrQUNEY0FDQ0FDSUFFcEFCQTNBQkFnQWlBQktRQVlOd0FZSUFBUUtBdWVDd0liZnhwK0lBQkJLR29oQVNBQVFRaHFJUUlnQUVFUWFpRURJQUJCR0dvaEJDQUFRU0JxSVFVZ0FDa0RBQ0VkSUFCQjBBQnFJZ3dwQXdBaEhDQUFRZmdBYWlJTktRTUFJUjhnQUVHZ0FXb2lEaWtEQUNFZUlBQkJNR29pRHlrREFDRWpJQUJCMkFCcUloQXBBd0FoSkNBQVFZQUJhaUlSS1FNQUlTVWdBRUdvQVdvaUVpa0RBQ0VnSUFCQk9Hb2lFeWtEQUNFc0lBQkI0QUJxSWhRcEF3QWhMU0FBUVlnQmFpSVZLUU1BSVNZZ0FFR3dBV29pRmlrREFDRWhJQUJCUUdzaUZ5a0RBQ0V1SUFCQjZBQnFJaGdwQXdBaEx5QUFRWkFCYWlJWktRTUFJVEFnQUVHNEFXb2lCaWtEQUNFbklBQkJ5QUJxSWhvcEF3QWhNU0FBUWZBQWFpSUhLUU1BSVNvZ0FFR1lBV29pQ0NrREFDRXJJQUJCd0FGcUlna3BBd0FoSWdOQUlBRXBBd0FpTWlBZGhTQWNoU0FmaFNBZWhTRW9JQU1wQXdBaU15QXNoU0F0aFNBbWhTQWhoU0VwSUFRcEF3QWlOQ0F1aFNBdmhTQXdoU0FuaFNFbklBQWdIU0FGS1FNQUlqVWdNWVVnS29VZ0s0VWdJb1VpS2lBQ0tRTUFJaUlnSTRVZ0pJVWdKWVVnSUlVaUswSUJoaUFyUWorSWhJVWlIWVUzQXdBZ0FTQWRJREtGTndNQUlBd2dIQ0FkaFRjREFDQU5JQjBnSDRVM0F3QWdEaUFkSUI2Rk53TUFJQUlnSWlBb0lDbENBWVlnS1VJL2lJU0ZJaHlGSWgwM0F3QWdEeUFjSUNPRk53TUFJQkFnSENBa2hUY0RBQ0FSSUJ3Z0pZVTNBd0FnRWlBY0lDQ0ZOd01BSUFNZ015QXJJQ2RDQVlZZ0owSS9pSVNGSWh5Rk53TUFJQk1nSENBc2hUY0RBQ0FVSUJ3Z0xZVTNBd0FnRlNBY0lDYUZOd01BSUJZZ0hDQWhoVGNEQUNBRUlDa2dLa0lCaGlBcVFqK0loSVVpSENBMGhUY0RBQ0FYSUJ3Z0xvVTNBd0FnR0NBY0lDK0ZOd01BSUJrZ0hDQXdoVGNEQUNBR0lCd2dCaWtEQUlVM0F3QWdCU0FvUWdHR0lDaENQNGlFSUNlRklod2dOWVUzQXdBZ0dpQWNJREdGTndNQUlBY2dIQ0FIS1FNQWhUY0RBQ0FJSUJ3Z0NDa0RBSVUzQXdBZ0NTQWNJQWtwQXdDRk53TUFRUUFoQ2dOQUlBcEJBblJCME1nQWFpZ0NBRUVEZENBQWFpSWJLUU1BSVJ3Z0d5QWRJQXBCQW5SQjhNY0FhaWdDQUNJYnJZWWdIVUhBQUNBYmE2MkloRGNEQUNBS1FRRnFJZ3BCR0VjRVFDQWNJUjBNQVFzTElBUXBBd0FoSFNBRktRTUFJUndnQUNBQUtRTUFJaDhnQXlrREFDSWVJQUlwQXdBaUkwSi9oWU9GTndNQUlBSWdJeUFkSUI1Q2Y0V0RoVGNEQUNBRElCNGdIQ0FkUW4rRmc0VTNBd0FnQkNBZElCOGdIRUovaFlPRk53TUFJQVVnSENBaklCOUNmNFdEaFRjREFDQVhLUU1BSVIwZ0dpa0RBQ0VjSUFFZ0FTa0RBQ0lmSUJNcEF3QWlIaUFQS1FNQUlpUkNmNFdEaFRjREFDQVBJQ1FnSFNBZVFuK0ZnNFVpSXpjREFDQVRJQjRnSENBZFFuK0ZnNFVpTERjREFDQVhJQjBnSHlBY1FuK0ZnNFVpTGpjREFDQWFJQndnSkNBZlFuK0ZnNFVpTVRjREFDQVlLUU1BSVIwZ0J5a0RBQ0VmSUF3Z0RDa0RBQ0llSUJRcEF3QWlKU0FRS1FNQUlpQkNmNFdEaFNJY053TUFJQkFnSUNBZElDVkNmNFdEaFNJa053TUFJQlFnSlNBZklCMUNmNFdEaFNJdE53TUFJQmdnSFNBZUlCOUNmNFdEaFNJdk53TUFJQWNnSHlBZ0lCNUNmNFdEaFNJcU53TUFJQmtwQXdBaEhTQUlLUU1BSVI0Z0RTQU5LUU1BSWlBZ0ZTa0RBQ0ltSUJFcEF3QWlJVUovaFlPRkloODNBd0FnRVNBaElCMGdKa0ovaFlPRklpVTNBd0FnRlNBbUlCNGdIVUovaFlPRklpWTNBd0FnR1NBZElDQWdIa0ovaFlPRklqQTNBd0FnQ0NBZUlDRWdJRUovaFlPRklpczNBd0FnQmlrREFDRWRJQWtwQXdBaElpQU9JQTRwQXdBaUtDQVdLUU1BSWlFZ0Vpa0RBQ0lwUW4rRmc0VWlIamNEQUNBU0lDa2dIU0FoUW4rRmc0VWlJRGNEQUNBV0lDRWdJaUFkUW4rRmc0VWlJVGNEQUNBR0lCMGdLQ0FpUW4rRmc0VWlKemNEQUNBSklDSWdLU0FvUW4rRmc0VWlJamNEQUNBQUlBdEJBM1JCc01ZQWFpa0RBQ0FBS1FNQWhTSWROd01BSUF0QkFXb2lDMEVZUncwQUN3czBBQ0FBSUFCaUJINUNBQVVnQUVRQUFBQUFBQUR3UTJZRWZrSUFCU0FBUkFBQUFBQUFBUEMvWlFSK1FnQUZJQUN4Q3dzTEN4QUFJQUZRQkg1Q0FBVWdBQ0FCZ0FzTCtTc0NHWDhnZmlBQVFhQUJhaUlLS1FNQUlBQkJJR29pQWlrREFJVWhIeUFDSUI4M0F3QWdBRUdvQVdvaUN5a0RBQ0FBUVNocUlnTXBBd0NGSVNRZ0F5QWtOd01BSUFCQnNBRnFJZ3dwQXdBZ0FFRXdhaUlFS1FNQWhTRWVJQVFnSGpjREFDQUFRYmdCYWlJTktRTUFJQUJCT0dvaUJTa0RBSVVoSlNBRklDVTNBd0FnQUVIQUFXb2lEaWtEQUNBQVFVQnJJZ1lwQXdDRklTSWdCaUFpTndNQUlBQkJ5QUZxSWc4cEF3QWdBRUhJQUdvaUJ5a0RBSVVoR2lBSElCbzNBd0FnQUVIUUFXb2lFQ2tEQUNBQVFkQUFhaUlJS1FNQWhTRWNJQWdnSERjREFDQUFRZGdCYWlJUktRTUFJQUJCMkFCcUlna3BBd0NGSVJzZ0NTQWJOd01BSUFCQmlBRnFJaElwQXdBaEp5QUFRWmdCYWlJVEtRTUFJU2dnQUVIb0FHb2lGQ2tEQUNFaklBQkIrQUJxSWhVcEF3QWhJU0FBUVlBQmFpSVdLUU1BSVNZZ0FFR1FBV29pRnlrREFDRXFJQUJCNEFCcUloZ3BBd0FoSFNBQVFmQUFhaUlaS1FNQUlTQURRQ0E0cHlJQVFRVjBRZkE3YWlrREFDSXJJQjFDZjRXRElCK0ZJaThnSmtKL2hTSWZJQjJEaFNJcElCOGdIU0FpUW4rRmd5SXNoU0l1SUNJZ0hTQXBnNFVpTFlTRklSOGdMaUF0SUIwZ0tTQW1JQ3lGZzRVaUxJT0ZJU1lnS3lBaUlDK0RoU0lySUIrRElDMkZJaTBnQUVFRmRFR0FQR29wQXdBaUx5QWdRbitGZ3lBZWhTSWVJQ3BDZjRVaUlpQWdnNFVpSFNBaUlDQWdIRUovaFlNaUxvVWlNU0FjSUIwZ0lJT0ZJaW1FaFNJd2hTRWlJQzhnSENBZWc0VWlIQ0F3Z3lBcklDeUZJaXNnS1lXRklSNGdIQ0FnSUIwZ0tpQXVoWU9GSWkrRklCK0ZJQ2FGSVIwZ0FFRUZkRUg0TzJvcEF3QWlMQ0FqUW4rRmd5QWtoU0l1SUNkQ2Y0VWlIQ0FqZzRVaUpDQWNJQ01nR2tKL2hZTWlLb1VpTUNBYUlDTWdKSU9GSWlDRWhTRWNJREFnSUNBaklDUWdKeUFxaFlPRklpT0RoU0VuSUFCQkJYUkJpRHhxS1FNQUlqQWdJVUovaFlNZ0pZVWlKU0FvUW4rRklpb2dJWU9GSWlRZ0tpQWhJQnRDZjRXRElqS0ZJak1nR3lBaElDU0RoU0lxaElVaU5DQWdJQ3dnR2lBdWc0VWlJQ0FjZzRVaUxJVWhHaUF3SUJzZ0pZT0ZJaHNnTklNZ0tpQWdJQ09GSWk2RmhTRWpJQ2NnSENBYklDRWdKQ0FvSURLRmc0VWlNSVdGaFNFaElBQkJBV29pQVVFRmRFSHdPMm9wQXdBaUtDQWlJQ3NnSHlBeElDa2dMNE9GaFNJbGhZVWlHMEovaFlNZ0hpQWZoWVVoSHlBQlFRVjBRWUE4YWlrREFDSXBJQjFDQVlaQ3F0V3ExYXJWcXRXcWY0TWdIVUlCaUVMVnF0V3ExYXJWcXRVQWc0UWlKRUovaFlNZ0lrSUJoa0txMWFyVnF0V3ExYXAvZ3lBaVFnR0lRdFdxMWFyVnF0V3ExUUNEaElVaElDQW9JQjBnTFlVaUhTQWZnNFVoS0NBcElCNUNBWVpDcXRXcTFhclZxdFdxZjRNZ0hrSUJpRUxWcXRXcTFhclZxdFVBZzRRaUhpQWdnNFVoS1NBZklCc2dJaUFtaFNJdFFuK0ZJaUtEaFNJZklDSWdHeUFkUW4rRmd5SXJoU0l2SUIwZ0d5QWZnNFVpSFlTRklTSWdJQ0FrSUNWQ0FZWkNxdFdxMWFyVnF0V3FmNE1nSlVJQmlFTFZxdFdxMWFyVnF0VUFnNFFpTVVKL2hTSWxnNFVpSUNBbElDUWdIa0ovaFlNaU1vVWlOQ0FlSUNBZ0pJT0ZJaWFFaFNJMUlCMGdJaUFvZzRVaU5vVWhKU0F2SUIwZ0d5QWZJQ3NnTFlXRGhTSXRnNFVpS3lBaUlDa2dKQ0FnSURFZ01vV0RoU0l2aFlXRklSOGdBVUVGZEVINE8yb3BBd0FpSUNBYUlDNGdIQ0F6SUNvZ01JT0ZoU0lraFlVaUcwSi9oWU1nSENBamhZVWhIaUFCUVFWMFFZZzhhaWtEQUNJcUlDRkNBWVpDcXRXcTFhclZxdFdxZjRNZ0lVSUJpRUxWcXRXcTFhclZxdFVBZzRRaUhFSi9oWU1nR2tJQmhrS3ExYXJWcXRXcTFhcC9neUFhUWdHSVF0V3ExYXJWcXRXcTFRQ0RoSVVoSFNBZ0lDRWdMSVVpSVNBZWc0VWhJQ0FxSUNOQ0FZWkNxdFdxMWFyVnF0V3FmNE1nSTBJQmlFTFZxdFdxMWFyVnF0VUFnNFFpSXlBZGc0VWhLaUFlSUJzZ0dpQW5oU0luUW4rRklocURoU0llSUJvZ0d5QWhRbitGZ3lJc2hTSXVJQ0VnR3lBZWc0VWlJWVNGSVJvZ0hTQWNJQ1JDQVlaQ3F0V3ExYXJWcXRXcWY0TWdKRUlCaUVMVnF0V3ExYXJWcXRVQWc0UWlNVUovaFNJa2c0VWlIU0FrSUJ3Z0kwSi9oWU1pTUlVaU1pQWpJQndnSFlPRklpT0VoU0l6SUNFZ0dpQWdnNFVpTjRVaEpDQXVJQ0VnR3lBZUlDY2dMSVdEaFNJc2c0VWlMaUFhSUNvZ0hDQWRJREFnTVlXRGhTSXhoWVdGSVI0Z0lpQXBJRFdESUNZZ0tDQXRoU0liaFlVaUhJVWdBRUVDYWlJQlFRVjBRZkE3YWlrREFDSW9JQ1VnR3lBaUlEUWdKaUF2ZzRXRklpR0ZoU0liUW4rRmc0VWhIU0FCUVFWMFFZQThhaWtEQUNJbUlCOUNBb1pDekptejVzeVpzK1pNZ3lBZlFnS0lRclBtekptejVzeVpNNE9FSWlKQ2Y0V0RJQ1ZDQW9aQ3pKbXo1c3lacytaTWd5QWxRZ0tJUXJQbXpKbXo1c3laTTRPRWhTRW5JQ2dnSHlBMmhTSWZJQjJEaFNFb0lDWWdIRUlDaGtMTW1iUG16Sm16NWt5RElCeENBb2hDcytiTW1iUG16Smt6ZzRRaUppQW5nNFVoS1NBZElCc2dKU0FyaFNJdFFuK0ZJaHlEaFNJZElCd2dHeUFmUW4rRmd5SXJoU0l2SUI4Z0d5QWRnNFVpSDRTRklSd2dKeUFpSUNGQ0FvWkN6Sm16NXN5WnMrWk1neUFoUWdLSVFyUG16Sm16NXN5Wk00T0VJakJDZjRVaUpZT0ZJaUVnSlNBaUlDWkNmNFdESWpTRklqVWdKaUFoSUNLRGhTSW5oSVVpTmlBZklCd2dLSU9GSWptRklTVWdMeUFmSUJzZ0hTQXJJQzJGZzRVaUxZT0ZJaXNnSENBcElDSWdJU0F3SURTRmc0VWlMNFdGaFNFZklCb2dLaUF6Z3lBaklDQWdMSVVpRzRXRklpS0ZJQUZCQlhSQitEdHFLUU1BSWlBZ0pDQWJJQm9nTWlBaklER0RoWVVpSTRXRklocENmNFdEaFNFaElBRkJCWFJCaUR4cUtRTUFJaVlnSGtJQ2hrTE1tYlBtekptejVreURJQjVDQW9oQ3MrYk1tYlBtekpremc0UWlHMEovaFlNZ0pFSUNoa0xNbWJQbXpKbXo1a3lESUNSQ0FvaENzK2JNbWJQbXpKa3pnNFNGSVIwZ0lDQWVJRGVGSWg0Z0lZT0ZJU0FnSmlBaVFnS0dRc3lacytiTW1iUG1USU1nSWtJQ2lFS3o1c3lacytiTW1UT0RoQ0ltSUIyRGhTRXFJQ0VnR2lBa0lDNkZJaXhDZjRVaUlvT0ZJaUVnSWlBYUlCNUNmNFdESWk2RklqRWdIaUFhSUNHRGhTSWVoSVVoSWlBZElCc2dJMElDaGtMTW1iUG16Sm16NWt5RElDTkNBb2hDcytiTW1iUG16Smt6ZzRRaU1FSi9oU0lrZzRVaUl5QWtJQnNnSmtKL2hZTWlNb1VpTXlBbUlCc2dJNE9GSWgyRWhTSTBJQjRnSUNBaWc0VWlONFVoSkNBeElCNGdHaUFoSUN3Z0xvV0RoU0lzZzRVaUxpQWlJQ29nR3lBaklEQWdNb1dEaFNJeGhZV0ZJUjRnSENBcElEYURJQ2NnS0NBdGhTSWFoWVVpSTRVZ0FFRURhaUlCUVFWMFFmQTdhaWtEQUNJb0lDVWdHaUFjSURVZ0p5QXZnNFdGSWlHRmhTSWFRbitGZzRVaEhDQUJRUVYwUVlBOGFpa0RBQ0ltSUI5Q0JJWkM4T0hEaDQrZXZQaHdneUFmUWdTSVFvK2V2UGp3NGNPSEQ0T0VJaHRDZjRXRElDVkNCSVpDOE9IRGg0K2V2UGh3Z3lBbFFnU0lRbytldlBqdzRjT0hENE9FaFNFbklDZ2dIeUE1aFNJZklCeURoU0VvSUNZZ0kwSUVoa0x3NGNPSGo1NjgrSENESUNOQ0JJaENqNTY4K1BEaHc0Y1BnNFFpSXlBbmc0VWhKaUFjSUJvZ0pTQXJoU0l0UW4rRkloeURoU0lwSUJ3Z0dpQWZRbitGZ3lJcmhTSXZJQjhnR2lBcGc0VWlINFNGSVJ3Z0p5QWJJQ0ZDQklaQzhPSERoNCtldlBod2d5QWhRZ1NJUW8rZXZQanc0Y09IRDRPRUlpZENmNFVpSllPRklpRWdKU0FiSUNOQ2Y0V0RJakNGSWpJZ0l5QWJJQ0dEaFNJamhJVWlOU0FmSUJ3Z0tJT0ZJamFGSVNVZ0x5QWZJQm9nS1NBcklDMkZnNFVpTFlPRklpc2dIQ0FtSUJzZ0lTQW5JRENGZzRVaUw0V0ZoU0VmSUNJZ0tpQTBneUFkSUNBZ0xJVWlHb1dGSWlHRklBRkJCWFJCK0R0cUtRTUFJaWNnSkNBYUlDSWdNeUFkSURHRGhZVWlIWVdGSWhwQ2Y0V0RoU0VpSUFGQkJYUkJpRHhxS1FNQUlpb2dIa0lFaGtMdzRjT0hqNTY4K0hDRElCNUNCSWhDajU2OCtQRGh3NGNQZzRRaUcwSi9oWU1nSkVJRWhrTHc0Y09IajU2OCtIQ0RJQ1JDQkloQ2o1NjgrUERodzRjUGc0U0ZJU0FnSnlBZUlEZUZJaDRnSW9PRklTY2dLaUFoUWdTR1F2RGh3NGVQbnJ6NGNJTWdJVUlFaUVLUG5yejQ4T0hEaHcrRGhDSWhJQ0NEaFNFcUlDSWdHaUFrSUM2RklpeENmNFVpSW9PRklpa2dJaUFhSUI1Q2Y0V0RJaTZGSWpFZ0hpQWFJQ21EaFNJZWhJVWhJaUFnSUJzZ0hVSUVoa0x3NGNPSGo1NjgrSENESUIxQ0JJaENqNTY4K1BEaHc0Y1BnNFFpSUVKL2hTSWtnNFVpSFNBa0lCc2dJVUovaFlNaU1JVWlNeUFoSUJzZ0hZT0ZJaUdFaFNJMElCNGdJaUFuZzRVaU40VWhKQ0F4SUI0Z0dpQXBJQ3dnTG9XRGhTSXNnNFVpTGlBaUlDb2dHeUFkSUNBZ01JV0RoU0l4aFlXRklSNGdIQ0FtSURXRElDTWdLQ0F0aFNJYWhZVWlIWVVnQUVFRWFpSUJRUVYwUWZBN2Fpa0RBQ0lvSUNVZ0dpQWNJRElnSXlBdmc0V0ZJaU9GaFNJYVFuK0ZnNFVoSENBQlFRVjBRWUE4YWlrREFDSW1JQjlDQ0laQ2dQNkQrSS9ndjRCL2d5QWZRZ2lJUXYrQi9JZnduOEQvQUlPRUlodENmNFdESUNWQ0NJWkNnUDZEK0kvZ3Y0Qi9neUFsUWdpSVF2K0IvSWZ3bjhEL0FJT0VoU0VnSUNnZ0h5QTJoU0lmSUJ5RGhTRW9JQ1lnSFVJSWhrS0Evb1A0aitDL2dIK0RJQjFDQ0loQy80SDhoL0Nmd1A4QWc0UWlIU0FnZzRVaEppQWNJQm9nSlNBcmhTSXRRbitGSWh5RGhTSXBJQndnR2lBZlFuK0ZneUlyaFNJdklCOGdHaUFwZzRVaUg0U0ZJUndnSUNBYklDTkNDSVpDZ1A2RCtJL2d2NEIvZ3lBalFnaUlRditCL0lmd244RC9BSU9FSWlCQ2Y0VWlKWU9GSWlNZ0pTQWJJQjFDZjRXRElqQ0ZJaklnSFNBYklDT0RoU0lkaElVaU5TQWZJQndnS0lPRklqYUZJU1VnTHlBZklCb2dLU0FySUMyRmc0VWlMWU9GSWlzZ0hDQW1JQnNnSXlBZ0lEQ0ZnNFVpTDRXRmhTRWZJQ0lnS2lBMGd5QWhJQ2NnTElVaUdvV0ZJaU9GSUFGQkJYUkIrRHRxS1FNQUlpY2dKQ0FhSUNJZ015QWhJREdEaFlVaUlZV0ZJaHBDZjRXRGhTRWlJQUZCQlhSQmlEeHFLUU1BSWlvZ0hrSUloa0tBL29QNGorQy9nSCtESUI1Q0NJaEMvNEg4aC9DZndQOEFnNFFpRzBKL2hZTWdKRUlJaGtLQS9vUDRqK0MvZ0grRElDUkNDSWhDLzRIOGgvQ2Z3UDhBZzRTRklTQWdKeUFlSURlRkloNGdJb09GSVNjZ0tpQWpRZ2lHUW9EK2cvaVA0TCtBZjRNZ0kwSUlpRUwvZ2Z5SDhKL0Evd0NEaENJaklDQ0RoU0VxSUNJZ0dpQWtJQzZGSWl4Q2Y0VWlJb09GSWlrZ0lpQWFJQjVDZjRXRElpNkZJakVnSGlBYUlDbURoU0llaElVaElpQWdJQnNnSVVJSWhrS0Evb1A0aitDL2dIK0RJQ0ZDQ0loQy80SDhoL0Nmd1A4QWc0UWlJRUovaFNJa2c0VWlJU0FrSUJzZ0kwSi9oWU1pTUlVaU15QWpJQnNnSVlPRklpT0VoU0kwSUI0Z0lpQW5nNFVpTjRVaEpDQXhJQjRnR2lBcElDd2dMb1dEaFNJc2c0VWlMaUFpSUNvZ0d5QWhJQ0FnTUlXRGhTSXhoWVdGSVI0Z0hDQW1JRFdESUIwZ0tDQXRoU0lhaFlVaUlZVWdBRUVGYWlJQlFRVjBRZkE3YWlrREFDSW9JQ1VnR2lBY0lESWdIU0F2ZzRXRkloMkZoU0lhUW4rRmc0VWhIQ0FCUVFWMFFZQThhaWtEQUNJbUlCOUNFSVpDZ0lEOC80K0FRSU1nSDBJUWlFTC8vNE9BOFA4L2c0UWlHMEovaFlNZ0pVSVFoa0tBZ1B6L2o0QkFneUFsUWhDSVF2Ly9nNER3L3orRGhJVWhJQ0FvSUI4Z05vVWlIeUFjZzRVaEtDQW1JQ0ZDRUlaQ2dJRDgvNCtBUUlNZ0lVSVFpRUwvLzRPQThQOC9nNFFpSVNBZ2c0VWhKaUFjSUJvZ0pTQXJoU0lwUW4rRkloeURoU0lsSUJ3Z0dpQWZRbitGZ3lJdGhTSXJJQjhnR2lBbGc0VWlINFNGSVJ3Z0t5QWZJQm9nSlNBcElDMkZnNFVpSllPRklTa2dJQ0FiSUIxQ0VJWkNnSUQ4LzQrQVFJTWdIVUlRaUVMLy80T0E4UDgvZzRRaUlFSi9oU0lhZzRVaUhTQWFJQnNnSVVKL2hZTWlMWVVpS3lBaElCc2dIWU9GSWlHRWhTSXZJQjhnSENBb2c0VWlNSVVoR2lBbUlDK0RJQ0VnSlNBb2hTSXZoWVVoSlNBcElCd2dKaUFiSUIwZ0lDQXRoWU9GSWkyRmhZVWhIeUFpSUNvZ05JTWdJeUFuSUN5RklodUZoU0lkaFNBQlFRVjBRZmc3YWlrREFDSW9JQ1FnR3lBaUlETWdJeUF4ZzRXRklpT0ZoU0liUW4rRmc0VWhJQ0FCUVFWMFFZZzhhaWtEQUNJbUlCNUNFSVpDZ0lEOC80K0FRSU1nSGtJUWlFTC8vNE9BOFA4L2c0UWlJa0ovaFlNZ0pFSVFoa0tBZ1B6L2o0QkFneUFrUWhDSVF2Ly9nNER3L3orRGhJVWhKeUFvSUI0Z040VWlIaUFnZzRVaEtDQW1JQjFDRUlaQ2dJRDgvNCtBUUlNZ0hVSVFpRUwvLzRPQThQOC9nNFFpSFNBbmc0VWhKaUFnSUJzZ0pDQXVoU0lxUW4rRklpU0RoU0lnSUNRZ0d5QWVRbitGZ3lJc2hTSXVJQjRnR3lBZ2c0VWlIb1NGSVNRZ0xpQWVJQnNnSUNBcUlDeUZnNFVpSUlPRklTb2dKeUFpSUNOQ0VJWkNnSUQ4LzQrQVFJTWdJMElRaUVMLy80T0E4UDgvZzRRaUxFSi9oU0lqZzRVaUd5QWpJQ0lnSFVKL2hZTWlMb1VpTVNBZElCc2dJb09GSWllRWhTSWpJQjRnSkNBb2c0VWlNb1VoSGlBaklDYURJQ2NnSUNBb2hTSXpoWVVoSXlBcUlDUWdKaUFpSUJzZ0xDQXVoWU9GSWl5RmhZVWhJQ0FBUVFacUlnQkJCWFJCOER0cUtRTUFJaWdnR2lBdklCd2dLeUFoSUMyRGhZVWlJWVdGSWh0Q2Y0V0RJQndnSllXRklSd2dBRUVGZEVHQVBHb3BBd0FpSmlBZlFpQ0dJQjlDSUlpRUlpSkNmNFdESUJwQ0lJWWdHa0lnaUlTRklSMGdLQ0FjSUI4Z01JVWlINE9GSVNnZ0ppQWRJQ1ZDSUlZZ0pVSWdpSVFpSllPRklTWWdIQ0FhSUNtRklpbENmNFVpR2lBYmc0VWlIQ0FhSUI5Q2Y0VWdHNE1pTFlVaUt5QWJJQnlESUIrRkloK0VoU0VhSUIwZ0lVSWdoaUFoUWlDSWhDSXZRbitGSWgwZ0lvT0ZJaUVnSFNBbFFuK0ZJQ0tESWk2RklqQWdJU0FpZ3lBbGhTSWRoSVVpTkNBZklCb2dLSU9GSWpXRklTVWdLeUFmSUJ3Z0tTQXRoWU1nRzRVaUc0T0ZJaHdnR2lBbUlDRWdMaUF2aFlNZ0lvVWlLWVdGaFNFaElCb2dKaUEwZ3lBZElCc2dLSVVpS0lXRklodUZJUjhnSVNBMWhTRWlJQ1VnS0NBYUlEQWdIU0FwZzRXRklpaUZoU0VkSUJ3Z0pZVWhKaUFBUVFWMFFmZzdhaWtEQUNJdElCNGdNeUFrSURFZ0p5QXNnNFdGSWllRmhTSWFRbitGZ3lBaklDU0ZoU0VrSUFCQkJYUkJpRHhxS1FNQUlpc2dJRUlnaGlBZ1FpQ0loQ0ljUW4rRmd5QWVRaUNHSUI1Q0lJaUVoU0VwSUMwZ0pDQWdJREtGSWlDRGhTRXRJQ3NnSTBJZ2hpQWpRaUNJaENJcklDbURoU0V2SUNRZ0hpQXFoU0lzUW4rRkloNGdHb09GSWlRZ0hpQWdRbitGSUJxRElpNkZJakVnR2lBa2d5QWdoU0lnaElVaEl5QXBJQndnSjBJZ2hpQW5RaUNJaENJcFFuK0ZJaDZEaFNJbklCNGdIQ0FyUW4rRmd5SXdoU0l5SUNzZ0hDQW5nNFVpS29TRklpc2dJQ0FqSUMyRGhTSXpoU0VlSURFZ0lDQWtJQ3dnTG9XRElCcUZJaHFEaFNJc0lDTWdMeUFjSUNjZ0tTQXdoWU9GSWllRmhZVWhJQ0FqSUNzZ0w0TWdLaUFhSUMyRklpbUZoU0ljaFNFa0lDQWdNNFVoR2lBZUlDa2dJeUF5SUNjZ0tvT0ZoU0lxaFlVaEl5QWVJQ3lGSVNjZ09FSUhmQ0k0UWlwVURRQUxJQUlnSHpjREFDQUdJQ0kzQXdBZ0JDQWVOd01BSUFnZ0hEY0RBQ0FESUNRM0F3QWdCU0FsTndNQUlBY2dHamNEQUNBSklCczNBd0FnR0NBZElBb3BBd0NGTndNQUlCUWdJeUFMS1FNQWhUY0RBQ0FaSUNBZ0RDa0RBSVUzQXdBZ0ZTQWhJQTBwQXdDRk53TUFJQllnSmlBT0tRTUFoVGNEQUNBU0lDY2dEeWtEQUlVM0F3QWdGeUFxSUJBcEF3Q0ZOd01BSUJNZ0tDQVJLUU1BaFRjREFBdnJDZ0ZFZnlNRUlRY2pCRUdBQW1va0JDQUNRVDlNQkVBZ0J5UUVEd3NnQjBGQWF5RUVJQWNpQTBIQUFXb2lCVUVFYWlFSklBVkJDR29oQ2lBRlFReHFJUXNnQlVFUWFpRU1JQVZCRkdvaERTQUZRUmhxSVE0Z0JVRWNhaUVQSUFWQklHb2hFQ0FGUVNScUlSRWdCVUVvYWlFU0lBVkJMR29oRXlBRlFUQnFJUlFnQlVFMGFpRVZJQVZCT0dvaEZpQUZRVHhxSVJjZ0EwR0FBV29pQmtFRWFpRTRJQVpCQ0dvaE9TQUdRUXhxSVRvZ0JrRVFhaUU3SUFaQkZHb2hQQ0FHUVJocUlUMGdCa0VjYWlFK0lBWkJJR29oUHlBR1FTUnFJVUFnQmtFb2FpRkJJQVpCTEdvaFFpQUdRVEJxSVVNZ0JrRTBhaUZFSUFaQk9Hb2hSU0FHUVR4cUlVWWdBRUZBYXlFWUlBQkJ4QUJxSVJrZ0FFRXNhaUlhS0FJQUlSc2dBRUV3YWlJY0tBSUFJUjBnQUVFMGFpSWVLQUlBSVI4Z0FFRTRhaUlnS0FJQUlTRWdBRUU4YWlJaUtBSUFJU01nQUVFRWFpSWtLQUlBSVNVZ0FFRUlhaUltS0FJQUlTY2dBRUVNYWlJb0tBSUFJU2tnQUVFUWFpSXFLQUlBSVNzZ0FFRVVhaUlzS0FJQUlTMGdBRUVZYWlJdUtBSUFJUzhnQUVFY2FpSXdLQUlBSVRFZ0FFRWdhaUl5S0FJQUlUTWdBRUVrYWlJMEtBSUFJVFVnQUVFb2FpSTJLQUlBSVRjRFFDQURJQUVwQWdBM0FnQWdBeUFCS1FJSU53SUlJQU1nQVNrQ0VEY0NFQ0FESUFFcEFoZzNBaGdnQXlBQktRSWdOd0lnSUFNZ0FTa0NLRGNDS0NBRElBRXBBakEzQWpBZ0F5QUJLUUk0TndJNElBVWdBU2dDQUNBQUtBSUFjellDQUNBSklBRW9BZ1FnSlhNMkFnQWdDaUFCS0FJSUlDZHpOZ0lBSUFzZ0FTZ0NEQ0FwY3pZQ0FDQU1JQUVvQWhBZ0szTTJBZ0FnRFNBQktBSVVJQzF6TmdJQUlBNGdBU2dDR0NBdmN6WUNBQ0FQSUFFb0Fod2dNWE0yQWdBZ0VDQUJLQUlnSUROek5nSUFJQkVnQVNnQ0pDQTFjellDQUNBU0lBRW9BaWdnTjNNMkFnQWdFeUFiSUFFb0FpeHpOZ0lBSUJRZ0FTZ0NNQ0FkY3pZQ0FDQVZJQUVvQWpRZ0gzTTJBZ0FnRmlBQktBSTRJQ0Z6TmdJQUlCY2dBU2dDUENBamN6WUNBQ0FESUFSQkFCQU1JQVFnQTBHQWdJQUlFQXdnQXlBRVFZQ0FnQkFRRENBRUlBTkJnSUNBR0JBTUlBTWdCRUdBZ0lBZ0VBd2dCQ0FEUVlDQWdDZ1FEQ0FESUFSQmdJQ0FNQkFNSUFRZ0EwR0FnSUE0RUF3Z0F5QUVRWUNBZ01BQUVBd2dCQ0FHUVlDQWdNZ0FFQXdnQlNBRVFRQVFDU0FFSUFOQkFSQUpJQU1nQkVFQ0VBa2dCQ0FEUVFNUUNTQURJQVJCQkJBSklBUWdBMEVGRUFrZ0F5QUVRUVlRQ1NBRUlBTkJCeEFKSUFNZ0JFRUlFQWtnQkNBRlFRa1FDU0FBSUFBb0FnQWdCU2dDQUNBR0tBSUFjM00yQWdBZ0pDQWtLQUlBSUFrb0FnQWdPQ2dDQUhOeklpVTJBZ0FnSmlBbUtBSUFJQW9vQWdBZ09TZ0NBSE56SWljMkFnQWdLQ0FvS0FJQUlBc29BZ0FnT2lnQ0FITnpJaWsyQWdBZ0tpQXFLQUlBSUF3b0FnQWdPeWdDQUhOeklpczJBZ0FnTENBc0tBSUFJQTBvQWdBZ1BDZ0NBSE56SWkwMkFnQWdMaUF1S0FJQUlBNG9BZ0FnUFNnQ0FITnpJaTgyQWdBZ01DQXdLQUlBSUE4b0FnQWdQaWdDQUhOeklqRTJBZ0FnTWlBeUtBSUFJQkFvQWdBZ1B5Z0NBSE56SWpNMkFnQWdOQ0EwS0FJQUlCRW9BZ0FnUUNnQ0FITnpJalUyQWdBZ05pQTJLQUlBSUJJb0FnQWdRU2dDQUhOeklqYzJBZ0FnR2lBYUtBSUFJQk1vQWdBZ1FpZ0NBSE56SWhzMkFnQWdIQ0FjS0FJQUlCUW9BZ0FnUXlnQ0FITnpJaDAyQWdBZ0hpQWVLQUlBSUJVb0FnQWdSQ2dDQUhOekloODJBZ0FnSUNBZ0tBSUFJQllvQWdBZ1JTZ0NBSE56SWlFMkFnQWdJaUFpS0FJQUlCY29BZ0FnUmlnQ0FITnpJaU0yQWdBZ0dDQVlLQUlBUVFGcUlnZzJBZ0FnQ0VVRVFDQVpJQmtvQWdCQkFXbzJBZ0FMSUFKQlFHb2hDQ0FCUVVCcklRRWdBa0gvQUVvRVFDQUlJUUlNQVFzTElBY2tCQXZqRWdFaGZ5TUVJUllqQkVGQWF5UUVJQllpQWlBQkxRQURJQUV0QUFCQkdIUWdBUzBBQVVFUWRISWdBUzBBQWtFSWRISnlOZ0lBSUFJZ0FTMEFCeUFCTFFBRVFSaDBJQUV0QUFWQkVIUnlJQUV0QUFaQkNIUnljallDQkNBQ0lBRXRBQXNnQVMwQUNFRVlkQ0FCTFFBSlFSQjBjaUFCTFFBS1FRaDBjbkkyQWdnZ0FpQUJMUUFQSUFFdEFBeEJHSFFnQVMwQURVRVFkSElnQVMwQURrRUlkSEp5TmdJTUlBSWdBUzBBRXlBQkxRQVFRUmgwSUFFdEFCRkJFSFJ5SUFFdEFCSkJDSFJ5Y2pZQ0VDQUNJQUV0QUJjZ0FTMEFGVUVRZENBQkxRQVVRUmgwY2lBQkxRQVdRUWgwY25JMkFoUWdBaUFCTFFBYklBRXRBQmhCR0hRZ0FTMEFHVUVRZEhJZ0FTMEFHa0VJZEhKeU5nSVlJQUlnQVMwQUh5QUJMUUFjUVJoMElBRXRBQjFCRUhSeUlBRXRBQjVCQ0hSeWNqWUNIQ0FDSUFFdEFDTWdBUzBBSUVFWWRDQUJMUUFoUVJCMGNpQUJMUUFpUVFoMGNuSTJBaUFnQWlBQkxRQW5JQUV0QUNSQkdIUWdBUzBBSlVFUWRISWdBUzBBSmtFSWRISnlOZ0lrSUFJZ0FTMEFLeUFCTFFBb1FSaDBJQUV0QUNsQkVIUnlJQUV0QUNwQkNIUnljallDS0NBQ0lBRXRBQzhnQVMwQUxFRVlkQ0FCTFFBdFFSQjBjaUFCTFFBdVFRaDBjbkkyQWl3Z0FpQUJMUUF6SUFFdEFEQkJHSFFnQVMwQU1VRVFkSElnQVMwQU1rRUlkSEp5TmdJd0lBSWdBUzBBTnlBQkxRQTBRUmgwSUFFdEFEVkJFSFJ5SUFFdEFEWkJDSFJ5Y2pZQ05DQUNJQUV0QURzZ0FTMEFPRUVZZENBQkxRQTVRUkIwY2lBQkxRQTZRUWgwY25JMkFqZ2dBaUFCTFFBL0lBRXRBRHhCR0hRZ0FTMEFQVUVRZEhJZ0FTMEFQa0VJZEhKeU5nSThJQUFvQWdBaENpQUFRUVJxSWhjb0FnQWhBeUFBUVFocUloZ29BZ0FoQ3lBQVFReHFJaGtvQWdBaEZDQUFRUkJxSWhvb0FnQWhBU0FBUVJScUloc29BZ0FoQkNBQVFSaHFJaHdvQWdBaEJTQUFRUnhxSWgwb0FnQWhCZ0ovSUFCQklHb2lIaWdDQUNFaUlBQkJKR29pSHlnQ0FDRU1JQUJCS0dvaUlDZ0NBQ0VQSUFCQkxHb2lJU2dDQUNFUUlBQW9BandFZjBHaThLU2dlaUVOUVpqMXU4RUFJUkpCaWRtNTRuNGhFVUhRNC96TUFnVWdBQ2dDTUNJVFFhTHdwS0I2Y3lFTklBQW9BalFpRVVHWTlidkJBSE1oRWlBUlFZblp1ZUorY3lFUklCTkIwT1A4ekFKekN5RVRJQ0lMUVlqVi9hRUNjeUVPSUF4QjA1R01yWGh6SVF3Z0QwR3VsT2FZQVhNaER5QVFRY1Rtd1J0eklSQURRQ0FFSUFkQkJIUkJnZ2hxTFFBQUlnaEJBblFnQW1vb0FnQWdCMEVFZEVHRENHb3RBQUFpQ1VFQ2RFSGdDV29vQWdCeklBUnFJQU5xSWdRZ0UzTWlBMEVRZENBRFFSQjJjaUlESUF4cUloTnpJZ3hCRkhRZ0RFRU1kbklpRENBVElBTWdCQ0FNYWlBSlFRSjBJQUpxS0FJQUlBaEJBblJCNEFscUtBSUFjMm9pREhNaUJFRVlkQ0FFUVFoMmNpSVRhaUlJY3lJRVFSbDBJQVJCQjNaeUlRUWdCU0FIUVFSMFFZUUlhaTBBQUNJRFFRSjBJQUpxS0FJQUlBZEJCSFJCaFFocUxRQUFJZ2xCQW5SQjRBbHFLQUlBY3lBRmFpQUxhaUlGSUJKeklndEJFSFFnQzBFUWRuSWlDeUFQYWlJU2N5SVBRUlIwSUE5QkRIWnlJZzhnRWlBTElBVWdEMm9nQ1VFQ2RDQUNhaWdDQUNBRFFRSjBRZUFKYWlnQ0FITnFJZ3R6SWdWQkdIUWdCVUVJZG5JaUJXb2lEM01pQTBFWmRDQURRUWQyY2lFRElBWWdCMEVFZEVHR0NHb3RBQUFpRWtFQ2RDQUNhaWdDQUNBSFFRUjBRWWNJYWkwQUFDSUpRUUowUWVBSmFpZ0NBSE1nQm1vZ0ZHb2lCaUFSY3lJVVFSQjBJQlJCRUhaeUloUWdFR29pRVhNaUVFRVVkQ0FRUVF4MmNpSVFJQkVnRkNBR0lCQnFJQWxCQW5RZ0Ftb29BZ0FnRWtFQ2RFSGdDV29vQWdCemFpSVNjeUlHUVJoMElBWkJDSFp5SWhGcUloQnpJZ1pCR1hRZ0JrRUhkbkloQmlBSUlBVWdBU0FIUVFSMFFZQUlhaTBBQUNJSVFRSjBJQUpxS0FJQUlBZEJCSFJCZ1FocUxRQUFJZ2xCQW5SQjRBbHFLQUlBY3lBQmFpQUthaUlCSUExeklncEJFSFFnQ2tFUWRuSWlDaUFPYWlJTmN5SU9RUlIwSUE1QkRIWnlJZzRnRFNBS0lBRWdEbW9nQ1VFQ2RDQUNhaWdDQUNBSVFRSjBRZUFKYWlnQ0FITnFJZ3B6SWdGQkdIUWdBVUVJZG5JaURXb2lEbk1pQVVFWmRDQUJRUWQyY2lJQklCSnFJQWRCQkhSQmpnaHFMUUFBSWdWQkFuUWdBbW9vQWdBZ0IwRUVkRUdQQ0dvdEFBQWlGRUVDZEVIZ0NXb29BZ0J6YWlJU2N5SUlRUkIwSUFoQkVIWnlJZ2hxSWdrZ0NDQUJJQWx6SWdGQkZIUWdBVUVNZG5JaUFTQVNJQlJCQW5RZ0Ftb29BZ0FnQlVFQ2RFSGdDV29vQWdCemFtb2lGSE1pQlVFWWRDQUZRUWgyY2lJU2FpRUZJQUVnQlhNaUFVRVpkQ0FCUVFkMmNpRUJJQVlnRGlBVElBWWdDMm9nQjBFRWRFR01DR290QUFBaUUwRUNkQ0FDYWlnQ0FDQUhRUVIwUVkwSWFpMEFBQ0lPUVFKMFFlQUphaWdDQUhOcUlnWnpJZ3RCRUhRZ0MwRVFkbklpQ0dvaUNYTWlDMEVVZENBTFFReDJjaUlWSUFZZ0RrRUNkQ0FDYWlnQ0FDQVRRUUowUWVBSmFpZ0NBSE5xYWlFTElCVWdDU0FJSUF0eklnWkJHSFFnQmtFSWRuSWlFMm9pRG5NaUJrRVpkQ0FHUVFkMmNpRUdJQVFnRHlBUklBUWdDbW9nQjBFRWRFR0lDR290QUFBaUVVRUNkQ0FDYWlnQ0FDQUhRUVIwUVlrSWFpMEFBQ0lQUVFKMFFlQUphaWdDQUhOcUlnUnpJZ3BCRUhRZ0NrRVFkbklpQ0dvaUNYTWlDa0VVZENBS1FReDJjaUlWSUFRZ0QwRUNkQ0FDYWlnQ0FDQVJRUUowUWVBSmFpZ0NBSE5xYWlFS0lCVWdDU0FJSUFweklnUkJHSFFnQkVFSWRuSWlFV29pRDNNaUJFRVpkQ0FFUVFkMmNpRUVJQU1nRUNBTklBTWdER29nQjBFRWRFR0tDR290QUFBaURVRUNkQ0FDYWlnQ0FDQUhRUVIwUVlzSWFpMEFBQ0lRUVFKMFFlQUphaWdDQUhOcUlnTnpJZ3hCRUhRZ0RFRVFkbklpREdvaUNITWlDVUVVZENBSlFReDJjaUlKSUFNZ0VFRUNkQ0FDYWlnQ0FDQU5RUUowUWVBSmFpZ0NBSE5xYWlFRElBa2dDQ0FESUF4eklnMUJHSFFnRFVFSWRuSWlEV29pRUhNaURFRVpkQ0FNUVFkMmNpRUlJQWRCQVdvaUIwRU9Sd1JBSUFVaERDQUlJUVVNQVFzTElBVWdBeUFYS0FJQWMzTWhCU0FQSUFzZ0dDZ0NBSE56SVFNZ0VDQVVJQmtvQWdCemN5RUxJQTBnQVNBYUtBSUFjM01oQVNBVElBUWdHeWdDQUhOeklRUWdFaUFJSUJ3b0FnQnpjeUVOSUJFZ0JpQWRLQUlBYzNNaEJpQUFJQTRnQ2lBQUtBSUFjM01nSGlnQ0FDSUFjellDQUNBWElBVWdIeWdDQUNJRmN6WUNBQ0FZSUFNZ0lDZ0NBQ0lLY3pZQ0FDQVpJQXNnSVNnQ0FDSURjellDQUNBYUlBQWdBWE0yQWdBZ0d5QUVJQVZ6TmdJQUlCd2dDaUFOY3pZQ0FDQWRJQU1nQm5NMkFnQWdGaVFFQzVzZEFnWi9HWDVCQVNFRElBS3RJUnNnQUVFSWFpSUVLUU1BSWgwaEZTQUFRUkJxSWdVcEF3QWhFeUFBUVJocUlnWXBBd0FoRUNBQVFTQnFJZ2NwQXdBaEVpQUFRU2hxSWdncEF3QWhEeUFBUVRCcUlnSXBBd0FoRVFOQUlCTWdGU0FiZkNJVmhTRVhJQUZCSUdvaEFDQVNJQlY4SWhZZ0FTMEFDSzBnQVMwQUNhMUNDSWFFSUFFdEFBcXRRaENHaENBQkxRQUxyVUlZaG9RZ0FTMEFESzFDSUlhRUlBRXRBQTJ0UWlpR2hDQUJMUUFPclVJd2hud2dBUzBBRDYxQ09JWjhJaDU4SWcwZ0VDQUJMUUFBclNBQkxRQUJyVUlJaG9RZ0FTMEFBcTFDRUlhRUlBRXRBQU90UWhpR2hDQUJMUUFFclVJZ2hvUWdBUzBBQmExQ0tJYUVJQUV0QUFhdFFqQ0dmQ0FCTFFBSHJVSTRobndpSDN4OElna2dEVUlPaGlBTlFqS0loSVVoQ3lBSklBRXRBQml0SUFFdEFCbXRRZ2lHaENBQkxRQWFyVUlRaG9RZ0FTMEFHNjFDR0lhRUlBRXRBQnl0UWlDR2hDQUJMUUFkclVJb2hvUWdBUzBBSHExQ01JWjhJQUV0QUIrdFFqaUdmQ0lnSUJGOElna2dBUzBBRUswZ0FTMEFFYTFDQ0lhRUlBRXRBQkt0UWhDR2hDQUJMUUFUclVJWWhvUWdBUzBBRksxQ0lJYUVJQUV0QUJXdFFpaUdoQ0FCTFFBV3JVSXdobndnQVMwQUY2MUNPSVo4SWlFZ0R5QVRmQ0lZZkh3aURTQUpRaENHSUFsQ01JaUVoU0lLZkNJSklBcENOSVlnQ2tJTWlJU0ZJUXdnQ1NBTElBMThJZzBnQzBJNWhpQUxRZ2VJaElVaUNud2lDU0FLUWhlR0lBcENLWWlFaFNFTElCSWdDU0FNSUExOElna2dERUlvaGlBTVFoaUloSVVpREh3aUNud2dHQ0FKSUF0OElnMGdDMElsaGlBTFFodUloSVY4SWd0OElna2dDMElaaGlBTFFpZUloSVVoQ3lBSklCQkNvclR3ejZyN3h1Z2JoU0FTaFNBUGhTQVJoU0lVUWdGOElBb2dERUlGaGlBTVFqdUloSVY4SWdrZ0RTQVJJQmQ4SWhsOGZDSU5JQWxDSVlZZ0NVSWZpSVNGSWdwOElna2dDa0l1aGlBS1FoS0loSVVoRENBSklBc2dEWHdpRFNBTFFneUdJQXRDTklpRWhTSUtmQ0lKSUFwQ09vWWdDa0lHaUlTRklRc2dEeUFKSUF3Z0RYd2lDU0FNUWhhR0lBeENLb2lFaFNJTWZDSUtmQ0FaSUFrZ0Mzd2lEU0FMUWlDR0lBdENJSWlFaFh3aUMzd2lDU0FMUWc2R0lBdENNb2lFaFNFTElBa2dFRUlDZkNBS0lBeENJSVlnREVJZ2lJU0ZmQ0lKSUEwZ0ZDQVZmQ0lhZkh3aURTQUpRaENHSUFsQ01JaUVoU0lLZkNJSklBcENOSVlnQ2tJTWlJU0ZJUXdnQ1NBTElBMThJZzBnQzBJNWhpQUxRZ2VJaElVaUNud2lDU0FLUWhlR0lBcENLWWlFaFNFTElCRWdDU0FNSUExOElna2dERUlvaGlBTVFoaUloSVVpREh3aUNud2dHaUFKSUF0OElnMGdDMElsaGlBTFFodUloSVY4SWd0OElna2dDMElaaGlBTFFpZUloSVVoQ3lBSklCSkNBM3dnQ2lBTVFnV0dJQXhDTzRpRWhYd2lDU0FOSUJBZ0Uzd2lISHg4SWcwZ0NVSWhoaUFKUWgrSWhJVWlDbndpQ1NBS1FpNkdJQXBDRW9pRWhTRU1JQWtnQ3lBTmZDSU5JQXRDRElZZ0MwSTBpSVNGSWdwOElna2dDa0k2aGlBS1FnYUloSVVoQ3lBVUlBa2dEQ0FOZkNJSklBeENGb1lnREVJcWlJU0ZJZ3g4SWdwOElCd2dDU0FMZkNJTklBdENJSVlnQzBJZ2lJU0ZmQ0lMZkNJSklBdENEb1lnQzBJeWlJU0ZJUTRnQ1NBUFFnUjhJQW9nREVJZ2hpQU1RaUNJaElWOElna2dEU0FTSUJkOElndDhmQ0lOSUFsQ0VJWWdDVUl3aUlTRklncDhJZ2tnQ2tJMGhpQUtRZ3lJaElVaERDQUpJQTBnRG53aURTQU9Ram1HSUE1Q0I0aUVoU0lLZkNJSklBcENGNFlnQ2tJcGlJU0ZJUTRnRUNBSklBd2dEWHdpQ1NBTVFpaUdJQXhDR0lpRWhTSU1mQ0lLZkNBTElBa2dEbndpRFNBT1FpV0dJQTVDRzRpRWhYd2lDM3dpQ1NBTFFobUdJQXRDSjRpRWhTRU9JQWtnRVVJRmZDQUtJQXhDQllZZ0RFSTdpSVNGZkNJSklBMGdEeUFWZkNJTGZId2lEU0FKUWlHR0lBbENINGlFaFNJS2ZDSUpJQXBDTG9ZZ0NrSVNpSVNGSVF3Z0NTQU5JQTU4SWcwZ0RrSU1oaUFPUWpTSWhJVWlDbndpQ1NBS1FqcUdJQXBDQm9pRWhTRU9JQklnQ1NBTUlBMThJZ2tnREVJV2hpQU1RaXFJaElVaURId2lDbndnQ3lBSklBNThJZzBnRGtJZ2hpQU9RaUNJaElWOElndDhJZ2tnQzBJT2hpQUxRaktJaElVaERpQUpJQlJDQm53Z0NpQU1RaUNHSUF4Q0lJaUVoWHdpQ1NBTklCRWdFM3dpQzN4OElnMGdDVUlRaGlBSlFqQ0loSVVpQ253aUNTQUtRalNHSUFwQ0RJaUVoU0VNSUFrZ0RTQU9mQ0lOSUE1Q09ZWWdEa0lIaUlTRklncDhJZ2tnQ2tJWGhpQUtRaW1JaElVaERpQVBJQWtnRENBTmZDSUpJQXhDS0lZZ0RFSVlpSVNGSWd4OElncDhJQXNnQ1NBT2ZDSU5JQTVDSllZZ0RrSWJpSVNGZkNJTGZDSUpJQXRDR1lZZ0MwSW5pSVNGSVE0Z0NTQVFRZ2Q4SUFvZ0RFSUZoaUFNUWp1SWhJVjhJZ2tnRFNBVUlCZDhJZ3Q4ZkNJTklBbENJWVlnQ1VJZmlJU0ZJZ3A4SWdrZ0NrSXVoaUFLUWhLSWhJVWhEQ0FKSUEwZ0Rud2lEU0FPUWd5R0lBNUNOSWlFaFNJS2ZDSUpJQXBDT29ZZ0NrSUdpSVNGSVE0Z0VTQUpJQXdnRFh3aUNTQU1RaGFHSUF4Q0tvaUVoU0lNZkNJS2ZDQUxJQWtnRG53aURTQU9RaUNHSUE1Q0lJaUVoWHdpQzN3aUNTQUxRZzZHSUF0Q01vaUVoU0VPSUFrZ0VrSUlmQ0FLSUF4Q0lJWWdERUlnaUlTRmZDSUpJQTBnRUNBVmZDSUxmSHdpRFNBSlFoQ0dJQWxDTUlpRWhTSUtmQ0lKSUFwQ05JWWdDa0lNaUlTRklRd2dDU0FOSUE1OElnMGdEa0k1aGlBT1FnZUloSVVpQ253aUNTQUtRaGVHSUFwQ0tZaUVoU0VPSUJRZ0NTQU1JQTE4SWdrZ0RFSW9oaUFNUWhpSWhJVWlESHdpQ253Z0N5QUpJQTU4SWcwZ0RrSWxoaUFPUWh1SWhJVjhJZ3Q4SWdrZ0MwSVpoaUFMUWllSWhJVWhEaUFKSUE5Q0NYd2dDaUFNUWdXR0lBeENPNGlFaFh3aUNTQU5JQklnRTN3aUMzeDhJZzBnQ1VJaGhpQUpRaCtJaElVaUNud2lDU0FLUWk2R0lBcENFb2lFaFNFTUlBa2dEU0FPZkNJTklBNUNESVlnRGtJMGlJU0ZJZ3A4SWdrZ0NrSTZoaUFLUWdhSWhJVWhEaUFRSUFrZ0RDQU5mQ0lKSUF4Q0ZvWWdERUlxaUlTRklneDhJZ3A4SUFzZ0NTQU9mQ0lOSUE1Q0lJWWdEa0lnaUlTRmZDSUxmQ0lKSUF0Q0RvWWdDMEl5aUlTRklRNGdDU0FSUWdwOElBb2dERUlnaGlBTVFpQ0loSVY4SWdrZ0RTQVBJQmQ4SWd0OGZDSU5JQWxDRUlZZ0NVSXdpSVNGSWdwOElna2dDa0kwaGlBS1FneUloSVVoRENBSklBMGdEbndpRFNBT1FqbUdJQTVDQjRpRWhTSUtmQ0lKSUFwQ0Y0WWdDa0lwaUlTRklRNGdFaUFKSUF3Z0RYd2lDU0FNUWlpR0lBeENHSWlFaFNJTWZDSUtmQ0FMSUFrZ0Rud2lEU0FPUWlXR0lBNUNHNGlFaFh3aUMzd2lDU0FMUWhtR0lBdENKNGlFaFNFT0lBa2dGRUlMZkNBS0lBeENCWVlnREVJN2lJU0ZmQ0lKSUEwZ0VTQVZmQ0lMZkh3aURTQUpRaUdHSUFsQ0g0aUVoU0lLZkNJSklBcENMb1lnQ2tJU2lJU0ZJUXdnQ1NBTklBNThJZzBnRGtJTWhpQU9RalNJaElVaUNud2lDU0FLUWpxR0lBcENCb2lFaFNFT0lBOGdDU0FNSUExOElna2dERUlXaGlBTVFpcUloSVVpREh3aUNud2dDeUFKSUE1OElnMGdEa0lnaGlBT1FpQ0loSVY4SWd0OElna2dDMElPaGlBTFFqS0loSVVoRGlBSklCQkNESHdnQ2lBTVFpQ0dJQXhDSUlpRWhYd2lDU0FOSUJNZ0ZId2lDM3g4SWcwZ0NVSVFoaUFKUWpDSWhJVWlDbndpQ1NBS1FqU0dJQXBDRElpRWhTRU1JQWtnRFNBT2ZDSU5JQTVDT1lZZ0RrSUhpSVNGSWdwOElna2dDa0lYaGlBS1FpbUloSVVoRGlBUklBa2dEQ0FOZkNJSklBeENLSVlnREVJWWlJU0ZJZ3g4SWdwOElBc2dDU0FPZkNJTklBNUNKWVlnRGtJYmlJU0ZmQ0lMZkNJSklBdENHWVlnQzBJbmlJU0ZJUTRnQ1NBU1FnMThJQW9nREVJRmhpQU1RanVJaElWOElna2dEU0FRSUJkOElndDhmQ0lOSUFsQ0lZWWdDVUlmaUlTRklncDhJZ2tnQ2tJdWhpQUtRaEtJaElVaERDQUpJQTBnRG53aURTQU9RZ3lHSUE1Q05JaUVoU0lLZkNJSklBcENPb1lnQ2tJR2lJU0ZJUTRnRkNBSklBd2dEWHdpQ1NBTVFoYUdJQXhDS29pRWhTSU1mQ0lLZkNBTElBa2dEbndpRFNBT1FpQ0dJQTVDSUlpRWhYd2lDM3dpQ1NBTFFnNkdJQXRDTW9pRWhTRUxJQWtnRDBJT2ZDQUtJQXhDSUlZZ0RFSWdpSVNGZkNJSklBMGdGbng4SWcwZ0NVSVFoaUFKUWpDSWhJVWlDbndpQ1NBS1FqU0dJQXBDRElpRWhTRU1JQWtnQ3lBTmZDSU5JQXRDT1lZZ0MwSUhpSVNGSWdwOElna2dDa0lYaGlBS1FpbUloSVVoQ3lBUUlBa2dEQ0FOZkNJSklBeENLSVlnREVJWWlJU0ZJZ3g4SWdwOElCWWdDU0FMZkNJTklBdENKWVlnQzBJYmlJU0ZmQ0lMZkNJSklBdENHWVlnQzBJbmlJU0ZJUXNnQ1NBUlFnOThJQW9nREVJRmhpQU1RanVJaElWOElna2dEU0FZZkh3aURTQUpRaUdHSUFsQ0g0aUVoU0lLZkNJSklBcENMb1lnQ2tJU2lJU0ZJUXdnQ1NBTElBMThJZzBnQzBJTWhpQUxRalNJaElVaUNud2lDU0FLUWpxR0lBcENCb2lFaFNFTElCSWdDU0FNSUExOElna2dERUlXaGlBTVFpcUloSVVpREh3aUNud2dHQ0FKSUF0OElnMGdDMElnaGlBTFFpQ0loSVY4SWd0OElna2dDMElPaGlBTFFqS0loSVVoRmlBSklCUkNFSHdnQ2lBTVFpQ0dJQXhDSUlpRWhYd2lDU0FOSUJsOGZDSU5JQWxDRUlZZ0NVSXdpSVNGSWdwOElna2dDa0kwaGlBS1FneUloSVVoQ3lBSklBMGdGbndpRFNBV1FqbUdJQlpDQjRpRWhTSUtmQ0lKSUFwQ0Y0WWdDa0lwaUlTRklRb2dEeUFKSUFzZ0RYd2lEeUFMUWlpR0lBdENHSWlFaFNJTGZDSU5mQ0FaSUFvZ0Qzd2lDU0FLUWlXR0lBcENHNGlFaFh3aUNud2lEeUFLUWhtR0lBcENKNGlFaFNFS0lBOGdFRUlSZkNBTklBdENCWVlnQzBJN2lJU0ZmQ0lQSUFrZ0dueDhJZ2tnRDBJaGhpQVBRaCtJaElVaUVId2lEeUFRUWk2R0lCQkNFb2lFaFNFTklBOGdDU0FLZkNJSklBcENESVlnQ2tJMGlJU0ZJaEI4SWc4Z0VFSTZoaUFRUWdhSWhJVWhDeUFHSUJFZ0R5QUpJQTE4SWhFZ0RVSVdoaUFOUWlxSWhJVWlDbndpRFh3Z0g0VWlFRGNEQUNBSElBc2dFWHdpRVNBTFFpQ0dJQXRDSUlpRWhTQWFmQ0FlaFNJSk53TUFJQWdnRVNBY2ZDQWhoU0lQTndNQUlBSWdFa0lTZkNBTklBcENJSVlnQ2tJZ2lJU0ZmQ0FnaFNJUk53TUFJQk5DLy8vLy8vLy8vLysvZjRNaEV5QURRWDlxSWdNRVFDQUFJUUVnQ1NFU0RBRUxDeUFFSUJzZ0hYdzNBd0FnQlNBVE53TUFDL0FZQWpwL1BINUJBU0VJSXdRaEJpTUVRY0FEYWlRRUlBWkJnQUZxSWdNZ0FFRUlhaUlLS1FNQUlqNDNBd0FnQTBFSWFpSUpJQUJCRUdvaUN5a0RBQ0k5TndNQUlBS3RJV1FnQTBFWWFpRUVJQU5CSUdvaERDQURRU2hxSVEwZ0EwRXdhaUVPSUFOQk9Hb2hEeUFEUVVCcklSQWdBMEhJQUdvaEVTQURRZEFBYWlFU0lBTkIyQUJxSVJNZ0EwSGdBR29oRkNBRFFlZ0FhaUVWSUFOQjhBQnFJUllnQTBINEFHb2hGeUFEUVlBQmFpRVlJQU5CaUFGcUlSa2dBMEdRQVdvaEdpQURRWmdCYWlFYklBTkJFR29oSENBR0lnVkJDR29oSFNBRlFSQnFJUjRnQlVFWWFpRWZJQVZCSUdvaElDQUZRU2hxSVNFZ0JVRXdhaUVpSUFWQk9Hb2hJeUFGUVVCcklTUWdCVUhJQUdvaEpTQUZRZEFBYWlFbUlBVkIyQUJxSVNjZ0JVSGdBR29oS0NBRlFlZ0FhaUVwSUFWQjhBQnFJU29nQlVINEFHb2hLeUFCSVFJZ1BpRlBJQUJCR0dvaUxDa0RBQ0ZESUFCQklHb2lMU2tEQUNGRUlBQkJLR29pTGlrREFDRkpJQUJCTUdvaUx5a0RBQ0ZHSUFCQk9Hb2lNQ2tEQUNGTElBQkJRR3NpTVNrREFDRkhJQUJCeUFCcUlqSXBBd0FoVGlBQVFkQUFhaUl6S1FNQUlVRWdBRUhZQUdvaU5Da0RBQ0ZNSUFCQjRBQnFJalVwQXdBaFFpQUFRZWdBYWlJMktRTUFJVTBnQUVId0FHb2lOeWtEQUNGRklBQkIrQUJxSWpncEF3QWhRQ0FBUVlBQmFpSTVLUU1BSVQ4Z0FFR0lBV29pT2lrREFDRStJQUJCa0FGcUlqc3BBd0FoU2dOQUlBTWdUeUJrZkNKSU53TUFJQVFnUXpjREFDQU1JRVEzQXdBZ0RTQkpOd01BSUE0Z1JqY0RBQ0FQSUVzM0F3QWdFQ0JITndNQUlCRWdUamNEQUNBU0lFRTNBd0FnRXlCTU53TUFJQlFnUWpjREFDQVZJRTAzQXdBZ0ZpQkZOd01BSUJjZ1FEY0RBQ0FZSUQ4M0F3QWdHU0ErTndNQUlCb2dTamNEQUNBYklFb2dQaUEvSUVBZ1JTQk5JRUlnVENCQklFNGdSeUJMSUVZZ1NTQkVJRU5Db3JUd3o2cjd4dWdiaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoVGNEQUNBY0lEMGdTSVUzQXdCQkFDRUFBMEFnQUVFRGRrRURkQ0FGYWlBQUlBSnFMUUFBclNBQ0lBQkJBWEpxTFFBQXJVSUlob1FnQWlBQVFRSnlhaTBBQUsxQ0VJYUVJQUlnQUVFRGNtb3RBQUN0UWhpR2hDQUNJQUJCQkhKcUxRQUFyVUlnaG9RZ0FpQUFRUVZ5YWkwQUFLMUNLSWFFSUFJZ0FFRUdjbW90QUFDdFFqQ0dmQ0FDSUFCQkIzSnFMUUFBclVJNGhudzNBd0FnQUVFSWFpSUFRWUFCU1EwQUN5QXFLUU1BSW1VZ1BTQStmSHdoUGlBcEtRTUFJbVlnUHlCSWZId2hQeUFvS1FNQUltY2dRSHdoUUNBbktRTUFJbWdnUlh3aFJTQW1LUU1BSW1rZ1RYd2hUU0FsS1FNQUltb2dRbndoUWlBa0tRTUFJbXNnVEh3aFRDQWpLUU1BSW13Z1FYd2hRU0FpS1FNQUltMGdUbndoVGlBaEtRTUFJbTRnUjN3aFJ5QWdLUU1BSW04Z1Mzd2hTeUFmS1FNQUluQWdSbndoUmlBZUtRTUFJbkVnU1h3aFNTQWRLUU1BSW5JZ1JId2hSQ0FGS1FNQUluTWdRM3doUTBFQklRRWdLeWtEQUNKMElFcDhJVDBEUUNCRElFUjhJa01nUkVJWWhpQkVRaWlJaElVaFdDQkdJRWw4SWtrZ1JrSU5oaUJHUWpPSWhJVWhUeUJISUV0OElrWWdSMElJaGlCSFFqaUloSVVoU2lCQklFNThJa3NnUVVJdmhpQkJRaEdJaElVaFNDQkRJRUlnVEh3aVJ5QkNRZ2lHSUVKQ09JaUVoU0pDZkNKTUlFSkNKb1lnUWtJYWlJU0ZJVmtnU1NBL0lFQjhJazRnUDBJV2hpQS9RaXFJaElVaVAzd2lRaUEvUWhPR0lEOUNMWWlFaFNGRUlFc2dSU0JOZkNJL0lFVkNFWVlnUlVJdmlJU0ZJa0I4SWtFZ1FFSUtoaUJBUWphSWhJVWhTU0JHSUQwZ1Bud2lQaUE5UWlXR0lEMUNHNGlFaFNKQWZDSTlJRUJDTjRZZ1FFSUppSVNGSVVZZ1RDQS9JRWg4SWt3Z1NFSXhoaUJJUWcrSWhJVWlQM3dpUUNBL1FpR0dJRDlDSDRpRWhTRmFJRUlnUGlCS2ZDSkNJRXBDRjRZZ1NrSXBpSVNGSWo1OElrMGdQa0lFaGlBK1FqeUloSVVoV3lBOUlFNGdUM3dpUHlCUFFoS0dJRTlDTG9pRWhTSTlmQ0pGSUQxQ000WWdQVUlOaUlTRklVc2dRU0JISUZoOElqNGdXRUkwaGlCWVFneUloSVVpUVh3aVBTQkJRZzJHSUVGQ000aUVoU0ZISUVBZ1B5QkdmQ0pBSUVaQ0lvWWdSa0llaUlTRklrOThJVkVnVFNBK0lFbDhJajhnU1VJN2hpQkpRZ1dJaElVaVNud2hTQ0E5SUVJZ1JId2lQaUJFUWltR0lFUkNGNGlFaFNKRGZDRkVJRVVnVENCWmZDSTlJRmxDRVlZZ1dVSXZpSVNGSWs1OElVRWdBVUVEZENBRWFpa0RBQ0ZkSUFGQkFXb2lCMEVEZENBRWFpa0RBQ0pHSUQ0Z1Izd2lUQ0JIUWkrR0lFZENFWWlFaFh3aFVDQUJRUUpxSWdCQkEzUWdCR29wQXdBaFNTQTlJRXQ4SWtJZ1MwSVFoaUJMUWpDSWhJVWdBVUVEYWlJOFFRTjBJQVJxS1FNQUlrdDhJVDRnQVVFRWFrRURkQ0FFYWlrREFDRmVJQUZCQldwQkEzUWdCR29wQXdBaVJ5QS9JRnQ4SWswZ1cwSWNoaUJiUWlTSWhJVjhJVDBnQVVFR2FrRURkQ0FFYWlrREFDRmZJQUZCQjJwQkEzUWdCR29wQXdBaWRTQkFJRnA4SWtVZ1drSVpoaUJhUWllSWhJVjhJVklnQVVFSWFrRURkQ0FFYWlrREFDRmdJQUZCQ1dwQkEzUWdCR29wQXdBaWRpQkJJRTVDS1lZZ1RrSVhpSVNGZkNGVElBRkJDbXBCQTNRZ0JHb3BBd0FoWVNBQlFRdHFRUU4wSUFScUtRTUFJbmNnU0NCS1FoU0dJRXBDTElpRWhYd2hWQ0FCUVF4cVFRTjBJQVJxS1FNQUlXSWdBVUVEZENBRGFpa0RBQ0o0SUFGQkRXcEJBM1FnQkdvcEF3QWlXQ0JFSUVOQ01JWWdRMElRaUlTRmZId2hReUFCUVE1cVFRTjBJQVJxS1FNQUlBZEJBM1FnQTJvcEF3QjhJV01nQVVFUGFrRURkQ0FFYWlrREFDSlpJQUd0SWxvZ1VTQlBRZ1dHSUU5Q080aUVoWHg4SVZVZ0FVRVFha0VEZENBRWFpQUJRWDlxSWdkQkEzUWdCR29wQXdBaVd6Y0RBQ0FBUVFOMElBTnFJQWRCQTNRZ0Eyb3BBd0FpVHpjREFDQlJJRjE4SUZCOElrQWdVRUlwaGlCUVFoZUloSVVoVmlCSUlFbDhJRDU4SWo4Z1BrSUpoaUErUWplSWhJVWhWeUJCSUY1OElEMThJajRnUFVJbGhpQTlRaHVJaElVaFVDQkVJRjk4SUZKOElqMGdVa0lmaGlCU1FpR0loSVVoU2lCQUlFMGdZSHdnVTN3aVRpQlRRZ3lHSUZOQ05JaUVoU0pBZkNKTklFQkNFSVlnUUVJd2lJU0ZJVWdnUHlCRklHSjhJRU44SWtFZ1EwSXNoaUJEUWhTSWhJVWlQM3dpUlNBL1FpS0dJRDlDSG9pRWhTRkRJRDBnUWlCaGZDQlVmQ0pBSUZSQ0w0WWdWRUlSaUlTRklqMThJajhnUFVJNGhpQTlRZ2lJaElVaFVTQStJRXdnWTN3Z1ZYd2lQaUJWUWg2R0lGVkNJb2lFaFNKQ2ZDSTlJRUpDTTRZZ1FrSU5pSVNGSVVRZ1RTQkFJRXA4SWt3Z1NrSUVoaUJLUWp5SWhJVWlRSHdpUWlCQVFoK0dJRUJDSVlpRWhTRmNJRVVnUGlCUWZDSkZJRkJDS29ZZ1VFSVdpSVNGSWo1OElrMGdQa0lzaGlBK1FoU0loSVVoVWlBOUlFRWdWM3dpUUNCWFFqV0dJRmRDQzRpRWhTSTlmQ0krSUQxQ0w0WWdQVUlSaUlTRklWTWdQeUJPSUZaOElqOGdWa0lwaGlCV1FoZUloSVVpUVh3aVBTQkJRaTZHSUVGQ0VvaUVoU0ZCSUQwZ1F5QkZmQ0k5SUVOQ0tvWWdRMElXaUlTRklsUjhJVlVnUGlCSUlFeDhJajRnU0VJWmhpQklRaWVJaElVaVZud2hWeUJHSUVJZ1FDQkVmQ0pGSUVSQ0U0WWdSRUl0aUlTRklsQjhJa3A4SVVNZ1NTQTlJRUY4SWtnZ1FVSVhoaUJCUWltSWhJVjhJVVFnU3lCTklEOGdVWHdpUFNCUlFpeUdJRkZDRklpRWhTSlJmQ0pBZkNGSklGNGdQaUJUZkNJL0lGTkNKWVlnVTBJYmlJU0ZmQ0ZHSUVjZ1Yzd2hTeUJmSUQwZ1Vud2lQaUJTUWgrR0lGSkNJWWlFaFh3aFJ5QlZJSFY4SVU0Z1lDQkZJRng4SWowZ1hFSVVoaUJjUWl5SWhJVjhJVUVnUGlCMmZDRk1JR0VnVnlCV1FqU0dJRlpDRElpRWhYd2hRaUEvSUhkOElVMGdZaUJBSUZGQ01JWWdVVUlRaUlTRmZDRkZJRDBnV0h3aFFDQmpJRlVnVkVJamhpQlVRaDJJaElWOElUOGdTQ0JQSUZsOGZDRStJRnNnV2tJQmZId2dTaUJRUWdtR0lGQkNONGlFaFh3aFBTQUJRUkZxUVFOMElBUnFJRjAzQXdBZ1BFRURkQ0FEYWlCNE53TUFJQUJCRlVrRVFDQUFJUUVNQVFzTElDd2dReUJ6aFNKRE53TUFJQzBnUkNCeWhTSkVOd01BSUM0Z1NTQnhoU0pKTndNQUlDOGdSaUJ3aFNKR053TUFJREFnU3lCdmhTSkxOd01BSURFZ1J5QnVoU0pITndNQUlESWdUaUJ0aFNKT053TUFJRE1nUVNCc2hTSkJOd01BSURRZ1RDQnJoU0pNTndNQUlEVWdRaUJxaFNKQ053TUFJRFlnVFNCcGhTSk5Od01BSURjZ1JTQm9oU0pGTndNQUlEZ2dRQ0JuaFNKQU53TUFJRGtnUHlCbWhTSS9Od01BSURvZ1BpQmxoU0krTndNQUlEc2dQU0IwaFNJOU53TUFJQWtnQ1NrREFFTC8vLy8vLy8vLy83OS9neUpJTndNQUlBaEJmMm9pQ0FSQUlBSkJnQUZxSVFJZ0F5a0RBQ0ZQSUQwaFNpQklJVDBNQVFzTElBb2dBeWtEQURjREFDQUxJRWczQXdBZ0JpUUVDdzhBSUFFRWZ5QUFJQUZ1QlVFQUN3djNCZ0VEZnlNRUlRUWpCRUhnQW1va0JDQUVRWkFCYWlJRFFRQkJ5QUVRRFJvZ0FVR0lBVTRFUUNBQklRVURRQ0FESUFBcEF3QWdBeWtEQUlVM0F3QWdBMEVJYWlJQklBQXBBd2dnQVNrREFJVTNBd0FnQTBFUWFpSUJJQUFwQXhBZ0FTa0RBSVUzQXdBZ0EwRVlhaUlCSUFBcEF4Z2dBU2tEQUlVM0F3QWdBMEVnYWlJQklBQXBBeUFnQVNrREFJVTNBd0FnQTBFb2FpSUJJQUFwQXlnZ0FTa0RBSVUzQXdBZ0EwRXdhaUlCSUFBcEF6QWdBU2tEQUlVM0F3QWdBMEU0YWlJQklBQXBBemdnQVNrREFJVTNBd0FnQTBGQWF5SUJJQUJCUUdzcEF3QWdBU2tEQUlVM0F3QWdBMEhJQUdvaUFTQUFLUU5JSUFFcEF3Q0ZOd01BSUFOQjBBQnFJZ0VnQUNrRFVDQUJLUU1BaFRjREFDQURRZGdBYWlJQklBQXBBMWdnQVNrREFJVTNBd0FnQTBIZ0FHb2lBU0FBS1FOZ0lBRXBBd0NGTndNQUlBTkI2QUJxSWdFZ0FDa0RhQ0FCS1FNQWhUY0RBQ0FEUWZBQWFpSUJJQUFwQTNBZ0FTa0RBSVUzQXdBZ0EwSDRBR29pQVNBQUtRTjRJQUVwQXdDRk53TUFJQU5CZ0FGcUlnRWdBQ2tEZ0FFZ0FTa0RBSVUzQXdBZ0F4QVlJQVZCK0g1cUlRRWdBRUdJQVdvaEFDQUZRWkFDVGdSQUlBRWhCUXdCQ3dzTElBUWdBQ0FCRUFzYUlBRWdCR3BCQVRvQUFDQUVJQUZCQVdwcVFRQkJod0VnQVdzUURSb2dCRUdIQVdvaUFDQUFMQUFBUVlCL2Nqb0FBQ0FESUFNcEF3QWdCQ2tEQUlVM0F3QWdBMEVJYWlJQUlBUXBBd2dnQUNrREFJVTNBd0FnQTBFUWFpSUFJQVFwQXhBZ0FDa0RBSVUzQXdBZ0EwRVlhaUlBSUFRcEF4Z2dBQ2tEQUlVM0F3QWdBMEVnYWlJQUlBUXBBeUFnQUNrREFJVTNBd0FnQTBFb2FpSUFJQVFwQXlnZ0FDa0RBSVUzQXdBZ0EwRXdhaUlBSUFRcEF6QWdBQ2tEQUlVM0F3QWdBMEU0YWlJQUlBUXBBemdnQUNrREFJVTNBd0FnQTBGQWF5SUFJQVJCUUdzcEF3QWdBQ2tEQUlVM0F3QWdBMEhJQUdvaUFDQUVLUU5JSUFBcEF3Q0ZOd01BSUFOQjBBQnFJZ0FnQkNrRFVDQUFLUU1BaFRjREFDQURRZGdBYWlJQUlBUXBBMWdnQUNrREFJVTNBd0FnQTBIZ0FHb2lBQ0FFS1FOZ0lBQXBBd0NGTndNQUlBTkI2QUJxSWdBZ0JDa0RhQ0FBS1FNQWhUY0RBQ0FEUWZBQWFpSUFJQVFwQTNBZ0FDa0RBSVUzQXdBZ0EwSDRBR29pQUNBRUtRTjRJQUFwQXdDRk53TUFJQU5CZ0FGcUlnQWdCQ2tEZ0FFZ0FDa0RBSVUzQXdBZ0F4QVlJQUlnQTBISUFSQUxHaUFFSkFRTEN3QWdBQ0FCclNBQ0VDTUxuZ0VCQW44akJDRURJd1JCZ0FGcUpBUWdBMEhuektmUUJqWUNBQ0FEUVlYZG50dDdOZ0lFSUFOQjh1YTc0d00yQWdnZ0EwRzY2citxZWpZQ0RDQURRZitrdVlnRk5nSVFJQU5Cak5HVjJIazJBaFFnQTBHcnM0LzhBVFlDR0NBRFFabWFnOThGTmdJY0lBTkJJR29pQkVJQU53SUFJQVJDQURjQ0NDQUVRZ0EzQWhBZ0JFSUFOd0lZSUFNZ0FDQUJRZ09HRUE0Z0F5QUNFQ1FnQXlRRUMvY0ZBUWwvSXdRaEJ5TUVRUkJxSkFRZ0IwRUJhaUlKUVlGL09nQUFJQWNpQWtFQk9nQUFJQUpCQ0dvaUJDQUFLQUkwSUFCQk1Hb2lBeWdDQUNJS0lBQW9BamdpQldvaUJpQUZTV29pQ0VFWWRqb0FBQ0FFSUFoQkVIWTZBQUVnQkNBSVFRaDJPZ0FDSUFRZ0NEb0FBeUFFSUFaQkdIWTZBQVFnQkNBR1FSQjJPZ0FGSUFRZ0JrRUlkam9BQmlBRUlBWTZBQWNnQlVHNEEwWUVRQ0FESUFwQmVHbzJBZ0FnQUNBSlFnZ1FEaUFES0FJQUlRSUZJQVZCdUFOSUJFQWdCVVVFUUNBQVFRRTJBandMSUFNZ0JrSElmR28yQWdBZ0FFR2dDa0c0QXlBRmE2d1FEZ1VnQXlBR1FZQjhhallDQUNBQVFhQUtRWUFFSUFWcnJCQU9JQU1nQXlnQ0FFSElmR28yQWdBZ0FFR2hDa0s0QXhBT0lBQkJBVFlDUEFzZ0FDQUNRZ2dRRGlBRElBTW9BZ0JCZUdvaUFqWUNBQXNnQXlBQ1FVQnFOZ0lBSUFBZ0JFTEFBQkFPSUFFZ0FDZ0NBRUVZZGpvQUFDQUJJQUFvQWdCQkVIWTZBQUVnQVNBQUtBSUFRUWgyT2dBQ0lBRWdBQ2dDQURvQUF5QUJJQUJCQkdvaUFpZ0NBRUVZZGpvQUJDQUJJQUlvQWdCQkVIWTZBQVVnQVNBQ0tBSUFRUWgyT2dBR0lBRWdBaWdDQURvQUJ5QUJJQUJCQ0dvaUFpZ0NBRUVZZGpvQUNDQUJJQUlvQWdCQkVIWTZBQWtnQVNBQ0tBSUFRUWgyT2dBS0lBRWdBaWdDQURvQUN5QUJJQUJCREdvaUFpZ0NBRUVZZGpvQURDQUJJQUlvQWdCQkVIWTZBQTBnQVNBQ0tBSUFRUWgyT2dBT0lBRWdBaWdDQURvQUR5QUJJQUJCRUdvaUFpZ0NBRUVZZGpvQUVDQUJJQUlvQWdCQkVIWTZBQkVnQVNBQ0tBSUFRUWgyT2dBU0lBRWdBaWdDQURvQUV5QUJJQUJCRkdvaUFpZ0NBRUVZZGpvQUZDQUJJQUlvQWdCQkVIWTZBQlVnQVNBQ0tBSUFRUWgyT2dBV0lBRWdBaWdDQURvQUZ5QUJJQUJCR0dvaUFpZ0NBRUVZZGpvQUdDQUJJQUlvQWdCQkVIWTZBQmtnQVNBQ0tBSUFRUWgyT2dBYUlBRWdBaWdDQURvQUd5QUJJQUJCSEdvaUFDZ0NBRUVZZGpvQUhDQUJJQUFvQWdCQkVIWTZBQjBnQVNBQUtBSUFRUWgyT2dBZUlBRWdBQ2dDQURvQUh5QUhKQVFMWWdFQ2Z5QUJJQUJJSUFBZ0FTQUNha2h4QkVBQ2Z5QUFJUVFnQVNBQ2FpRUJJQUFnQW1vaEFBTkFJQUpCQUVvRVFDQUNRUUZySVFJZ0FFRUJheUlBSUFGQkFXc2lBU3dBQURvQUFBd0JDd3NnQkFzaEFBVWdBQ0FCSUFJUUN4b0xJQUFMOEJJQ0RYOEJmaU1FSVE0akJFR2dBMm9rQkNBT0lnUkJnQUZxSWdaQmdBUTJBZ0FnQmtHQUFqWUNDQ0FHUVNCcUlnTkJzTXNBS1FNQU53TUFJQU5CdU1zQUtRTUFOd01JSUFOQndNc0FLUU1BTndNUUlBTkJ5TXNBS1FNQU53TVlJQU5CME1zQUtRTUFOd01nSUFOQjJNc0FLUU1BTndNb0lBTkI0TXNBS1FNQU53TXdJQU5CNk1zQUtRTUFOd000SUFaQkVHb2lEMElBTndNQUlBWkJHR29pRFVLQWdJQ0FnSUNBZ1BBQU53TUFJQVpCREdvaUMwRUFOZ0lBSUFGQkIzRWlCUVJBSUFSQkFTQUZRUWR6ZENJSElBQWdBVUVEZGlJRmFpMEFBRUVBSUFkcmNYSTZBQUFnQmtFSWFpRUlJQUZCaHdSTEJIOGdCVUYvYWlJQlFVQnhJUXdnQ0NBQUlBRkJCblpCd0FBUUVTQUZJQXhySVFjZ0N5Z0NBQ0VGSUFBZ0RHb0ZJQVVoQjBFQUlRVWdBQXNoQVNBRklBZHFJUUFnQndSQUlBVWdDRUhZQUdwcUlBRWdCeEFMR2lBTElBQTJBZ0FGSUFVaEFBc0NRQUpBSUFCQkFXb2lCVUhBQUVzRVFFSEFBQ0FBYXlJQkJIOGdBQ0FJUWRnQWFtb2dCQ0FCRUFzYUlBdEJ3QUEyQWdCQkFTQUJheUVBSUFFZ0JHb0ZRUUVoQUNBRUN5RUJJQWdnQmtIZ0FHcEJBVUhBQUJBUklBdEJBRFlDQUNBQVFYOXFJZ1ZCUUhFaEJ5QUFRY0FBU3dSQUlBZ2dBU0FGUVFaMlFjQUFFQkVnQUNBSGF5RUFJQUVnQjJvaEFRc2dBQVJBSUFBaEJ5QUFJQXNvQWdBaUFHb2hCUXdDQ3dWQkFTRUhJQVFoQVF3QkN3d0JDeUFBSUFoQjJBQnFhaUFCSUFjUUN4b2dDeUFGTmdJQUN5QU5JQTBwQXdCQ2dJQ0FnSUNBZ01BQWhEY0RBQVVnQmtFSWFpRU1JQUZCQTNZaEJTQUJRWWNFU3dSQUlBVkJmMm9pQVVGQWNTRUhJQXdnQUNBQlFRWjJRY0FBRUJFZ0JTQUhheUVGSUFBZ0Iyb2hBQXNnQlFSQUlBc29BZ0FpQVNBTVFkZ0FhbW9nQUNBRkVBc2FJQXNnQVNBRmFqWUNBQXNMQWtBQ1FBSkFBa0FnQmlnQ0FFRUlka0VEY1E0REFnRUFBd3NnQmtFSWFpRUtJQTBnRFNrREFFS0FnSUNBZ0lDQWdJQi9oRGNEQUNBTEtBSUFJZ0JCd0FCSkJFQWdBQ0FLUWRnQWFtcEJBRUhBQUNBQWF4QU5HZ3NnQ2lBR1FlQUFhaUlHUVFFZ0FCQVJJQW9vQWdCQkIycEJBM1loQ0NBR1FnQTNBd0FnQmtJQU53TUlJQVpDQURjREVDQUdRZ0EzQXhnZ0JrSUFOd01nSUFaQ0FEY0RLQ0FHUWdBM0F6QWdCa0lBTndNNElBUWdBeWtEQURjREFDQUVJQU1wQXdnM0F3Z2dCQ0FES1FNUU53TVFJQVFnQXlrREdEY0RHQ0FFSUFNcEF5QTNBeUFnQkNBREtRTW9Od01vSUFRZ0F5a0RNRGNETUNBRUlBTXBBemczQXpnZ0NBUkFJQWhCZjJwQkJuWWhERUVBSVFWQkFDRUFBMEFnQmlBRnJTSVFRamlHSUJCQ0tJWkNnSUNBZ0lDQXdQOEFnNFFnRUVJWWhrS0FnSUNBZ09BL2c0UWdFRUlZaUVJZ2hvUTNBd0FnRDBJQU53TUFJQTFDZ0lDQWdJQ0FnSUIvTndNQUlBdEJBRFlDQUNBS0lBWkJBVUVJRUJFZ0FDQUNhaUVISUFnZ0FHc2lBRUhBQUNBQVFjQUFTUnNpQVFSQVFRQWhBQU5BSUFBZ0Iyb2dDa0VZYWlBQVFRTjJRUU4wYWlrREFDQUFRUU4wUVRoeHJZZzhBQUFnQVNBQVFRRnFJZ0JIRFFBTEN5QURJQVFwQXdBM0F3QWdBeUFFS1FNSU53TUlJQU1nQkNrREVEY0RFQ0FESUFRcEF4ZzNBeGdnQXlBRUtRTWdOd01nSUFNZ0JDa0RLRGNES0NBRElBUXBBekEzQXpBZ0F5QUVLUU00TndNNElBVkJBV29pQVVFR2RDRUFJQVVnREVjRVFDQUJJUVVNQVFzTEN5QU9KQVFQQ3lBR1FRaHFJUWdnRFNBTktRTUFRb0NBZ0lDQWdJQ0FnSCtFTndNQUlBc29BZ0FpQUVFZ1NRUkFJQUFnQ0VFNGFtcEJBRUVnSUFCckVBMGFDeUFJSUFaQlFHc2lDaUFBRUI0Z0NDZ0NBRUVIYWtFRGRpRU1JQXBDQURjREFDQUtRZ0EzQXdnZ0NrSUFOd01RSUFwQ0FEY0RHQ0FFSUFNcEF3QTNBd0FnQkNBREtRTUlOd01JSUFRZ0F5a0RFRGNERUNBRUlBTXBBeGczQXhnZ0RBUkFRUUFoQVFOQUlBb2dBYTBpRUVJNGhpQVFRaWlHUW9DQWdJQ0FnTUQvQUlPRUlCQkNHSVpDZ0lDQWdJRGdQNE9FSUJCQ0dJaENJSWFFTndNQUlBOUNBRGNEQUNBTlFvQ0FnSUNBZ0lDQWZ6Y0RBQ0FMUVFBMkFnQWdDQ0FLUVFnUUhpQUJJQUpxSVFjZ0RDQUJheUlBUVNBZ0FFRWdTUnNpQlFSQVFRQWhBQU5BSUFBZ0Iyb2dDRUVZYWlBQVFRTjJRUU4wYWlrREFDQUFRUU4wUVRoeHJZZzhBQUFnQlNBQVFRRnFJZ0JIRFFBTEN5QURJQVFwQXdBM0F3QWdBeUFFS1FNSU53TUlJQU1nQkNrREVEY0RFQ0FESUFRcEF4ZzNBeGdnRENBQlFTQnFJZ0JMQkVBZ0FDRUJEQUVMQ3dzZ0RpUUVEd3NnRFNBTktRTUFRb0NBZ0lDQWdJQ0FnSCtFTndNQUlBc29BZ0FpQUVHQUFVa0VRQ0FBSUFaQm9BRnFha0VBUVlBQklBQnJFQTBhQ3lBR1FRaHFJZ2dnQmtHZ0FXb2lDU0FBRUI4Z0NDZ0NBRUVIYWtFRGRpRUtJQWxDQURjREFDQUpRZ0EzQXdnZ0NVSUFOd01RSUFsQ0FEY0RHQ0FKUWdBM0F5QWdDVUlBTndNb0lBbENBRGNETUNBSlFnQTNBemdnQ1VGQWEwSUFOd01BSUFsQ0FEY0RTQ0FKUWdBM0ExQWdDVUlBTndOWUlBbENBRGNEWUNBSlFnQTNBMmdnQ1VJQU53TndJQWxDQURjRGVDQUVJQU1wQXdBM0F3QWdCQ0FES1FNSU53TUlJQVFnQXlrREVEY0RFQ0FFSUFNcEF4ZzNBeGdnQkNBREtRTWdOd01nSUFRZ0F5a0RLRGNES0NBRUlBTXBBekEzQXpBZ0JDQURLUU00TndNNElBUkJRR3NnQTBGQWF5a0RBRGNEQUNBRUlBTXBBMGczQTBnZ0JDQURLUU5RTndOUUlBUWdBeWtEV0RjRFdDQUVJQU1wQTJBM0EyQWdCQ0FES1FOb053Tm9JQVFnQXlrRGNEY0RjQ0FFSUFNcEEzZzNBM2dnQ2dSQUlBcEJmMnBCQjNZaERFRUFJUVZCQUNFQUEwQWdDU0FGclNJUVFqaUdJQkJDS0laQ2dJQ0FnSUNBd1A4QWc0UWdFRUlZaGtLQWdJQ0FnT0EvZzRRZ0VFSVlpRUlnaG9RM0F3QWdEMElBTndNQUlBMUNnSUNBZ0lDQWdJQi9Od01BSUF0QkFEWUNBQ0FJSUFsQkNCQWZJQUFnQW1vaEJ5QUtJQUJySWdCQmdBRWdBRUdBQVVrYklnRUVRRUVBSVFBRFFDQUFJQWRxSUFaQklHb2dBRUVEZGtFRGRHb3BBd0FnQUVFRGRFRTRjYTJJUEFBQUlBRWdBRUVCYWlJQVJ3MEFDd3NnQXlBRUtRTUFOd01BSUFNZ0JDa0RDRGNEQ0NBRElBUXBBeEEzQXhBZ0F5QUVLUU1ZTndNWUlBTWdCQ2tESURjRElDQURJQVFwQXlnM0F5Z2dBeUFFS1FNd053TXdJQU1nQkNrRE9EY0RPQ0FEUVVCcklBUkJRR3NwQXdBM0F3QWdBeUFFS1FOSU53TklJQU1nQkNrRFVEY0RVQ0FESUFRcEExZzNBMWdnQXlBRUtRTmdOd05nSUFNZ0JDa0RhRGNEYUNBRElBUXBBM0EzQTNBZ0F5QUVLUU40TndONElBVkJBV29pQVVFSGRDRUFJQVVnREVjRVFDQUJJUVVNQVFzTEN5QU9KQVFQQ3lBT0pBUUxtZ0VCQVg4Z0FFVUVRQThMSUFCQkJHb2lBU0FCTGdFQVFYNXhPd0VBSUFBUUNqb0FCaUFBRUFvNkFBY2dBQkFLT2dBSUlBQVFDam9BQ1NBQUVBbzZBQW9nQUJBS09nQUxJQUFRQ2pvQURDQUFFQW82QUEwZ0FCQUtPZ0FPSUFBUUNqb0FEeUFBRUFvNkFCQWdBQkFLT2dBUklBQVFDam9BRWlBQUVBbzZBQk1nQUJBS09nQVVJQUFRQ2pvQUZTQUJJQUV1QVFCQkFuSTdBUUFMdUFVQkUzOGpCQ0VNSXdSQkVHb2tCQ0FBS0FJQUlnRkJDRFlDRkNBQlFRODJBaEFnQVVId0FUWUNDQ0FCUWZBQlFRRVFFaUlDTmdJTUlBSWdBU2dDQkNBQktBSUFFQXNhSUF3aUJrRUJhaUVKSUFaQkFtb2hDeUFHUVFOcUlRMUJDQ0VFQTBBZ0JpQUJLQUlNSWc0Z0JFRUNkQ0lLUVh4cWFpZ0FBQ0lETmdJQUlBTkJDSFloRHlBRFFSQjJJUkFnQTBFWWRpRVJJQVJCQjNFRVFDQVJJUUlnRUVIL0FYRWhDQ0FQUWY4QmNTRUhJQU5CL3dGeElRVWdCQ0VTSUFFb0FoUWlBU0lUQkg4Z0VpQVRjQVZCQUF0QkJFWUVRQ0FHSUFOQkJIWkJEM0ZCQkhSQnNNa0FhaUFEUVE5eGFpd0FBQ0lGT2dBQUlBa2dBMEVNZGtFUGNVRUVkRUd3eVFCcUlBOUJEM0ZxTEFBQUlnYzZBQUFnQ3lBRFFSUjJRUTl4UVFSMFFiREpBR29nRUVFUGNXb3NBQUFpQ0RvQUFDQU5JQU5CSEhaQkJIUkJzTWtBYWlBUlFROXhhaXdBQUNJQ09nQUFDd1VnQmlBSlFRTVFKUm9nQmkwQUFDSUNRUTl4SUFKQkJIWkJCSFJCc01rQWFtb3NBQUFoQlNBSklBa3RBQUFpQWtFUGNTQUNRUVIyUVFSMFFiREpBR3BxTEFBQUlnYzZBQUFnQ3lBTExRQUFJZ0pCRDNFZ0FrRUVka0VFZEVHd3lRQnFhaXdBQUNJSU9nQUFJQTBnQTBFRWRrRVBjVUVFZEVHd3lRQnFJQU5CRDNGcUxBQUFJZ0k2QUFBZ0JpQUZJQVFnQVNnQ0ZDSUJFQ0JCNzhzQWFpd0FBSE1pQlRvQUFBc2dDaUFPYWlBT0lBUWdBV3RCQW5ScUxBQUFJQVZ6T2dBQUlBQW9BZ0FpQVNnQ0RDSUZJQXBCQVhKcUlBVWdCQ0FCS0FJVWEwRUNkRUVCY21vc0FBQWdCM002QUFBZ0FDZ0NBQ0lGS0FJTUlnY2dDa0VDY21vZ0J5QUVJQVVvQWhSclFRSjBRUUp5YWl3QUFDQUljem9BQUNBQUtBSUFJZ2NvQWd3aUNDQUtRUU55YWlBSUlBUWdCeWdDRkd0QkFuUkJBM0pxTEFBQUlBSnpPZ0FBSUFSQkFXb2lBa0U4UndSQUlBSWhCQ0FBS0FJQUlRRU1BUXNMSUF3a0JBdndDQUlGZndKK0l3UWhCU01FUWVBQmFpUUVJQVVpQTBFSWFpSUdRZ0EzQXdnZ0EwR0FBallDQUNBRFFTQnFJZ1JCOERvcEF3QTNBd0FnQkVINE9pa0RBRGNEQ0NBRVFZQTdLUU1BTndNUUlBUkJpRHNwQXdBM0F4Z2dCRUdRT3lrREFEY0RJQ0FFUVpnN0tRTUFOd01vSUFSQm9Ec3BBd0EzQXpBZ0JFR29PeWtEQURjRE9DQUVRVUJyUWJBN0tRTUFOd01BSUFSQnVEc3BBd0EzQTBnZ0JFSEFPeWtEQURjRFVDQUVRY2c3S1FNQU53TllJQVJCMERzcEF3QTNBMkFnQkVIWU95a0RBRGNEYUNBRVFlQTdLUU1BTndOd0lBUkI2RHNwQXdBM0EzZ2dCaUFCclNJSU53TUFJQUZCL3dOTEJIOGdBMEdnQVdvaEFRTkFJQUVnQUNBSnAyb2lCQ2tBQURjQUFDQUJJQVFwQUFnM0FBZ2dBU0FFS1FBUU53QVFJQUVnQkNrQUdEY0FHQ0FCSUFRcEFDQTNBQ0FnQVNBRUtRQW9Od0FvSUFFZ0JDa0FNRGNBTUNBQklBUXBBRGczQURnZ0F4QWJJQWxDUUgwaENTQUlRb0I4ZkNJSVF2OERWZzBBQ3lBSnB3VkJBQXNoQVNBRFFSQnFJUVFnQ0VJQVVnUkFJQU5Cb0FGcUlRY2dBQ0FCYWlFQUlBaENBNGluUVQ5eElRRWdDRUlIZzBJQVVRUi9JQWNnQUNBQkVBc0ZJQWNnQUNBQlFRRnFFQXNMR2lBRUlBZzNBd0FMSUFZcEF3QWlDRUwvQTRNaUNVSUFVUVJBSUFOQm9BRnFJZ0JDQURjREFDQUFRZ0EzQXdnZ0FFSUFOd01RSUFCQ0FEY0RHQ0FBUWdBM0F5QWdBRUlBTndNb0lBQkNBRGNETUNBQVFnQTNBemdnQUVHQWZ6b0FBQ0FESUFnOEFOOEJCU0FKUWdPSXB5RUFJQVFwQXdCQ0I0TkNBRkVFUUNBRElBQkJvQUZxYWtFQVFjQUFJQUJyRUEwYUJTQUFRUUZxUWNBQVNRUkFJQU1nQUVHaEFXcHFRUUFnQUVFL2N4QU5HZ3NMSUFOQm9BRnFJQWhDQTRpblFUOXhhaUlBSUFBdEFBQkJBU0FJcDBFSGNVRUhjM1J5T2dBQUlBTVFHeUFEUWFBQmFpSUFRZ0EzQXdBZ0FFSUFOd01JSUFCQ0FEY0RFQ0FBUWdBM0F4Z2dBRUlBTndNZ0lBQkNBRGNES0NBQVFnQTNBekFnQUVJQU53TTRJQU1nQmlrREFDSUlQQURmQVFzZ0F5QUlRZ2lJUEFEZUFTQURJQWhDRUlnOEFOMEJJQU1nQ0VJWWlEd0EzQUVnQXlBSVFpQ0lQQURiQVNBRElBaENLSWc4QU5vQklBTWdDRUl3aUR3QTJRRWdBeUFJUWppSVBBRFlBU0FERUJzQ1FBSkFBa0FDUUFKQUFrQWdBeWdDQUVHZ2Ztb2lBRUVGZGlBQVFSdDBjZzRLQUFFRUJBUUNCQVFFQXdRTElBSWdBMEdFQVdvaUFDa0FBRGNBQUNBQ0lBQXBBQWczQUFnZ0FpQUFLUUFRTndBUUlBSWdBQ2dBR0RZQUdBd0VDeUFDSUFOQmdBRnFJZ0FwQUFBM0FBQWdBaUFBS1FBSU53QUlJQUlnQUNrQUVEY0FFQ0FDSUFBcEFCZzNBQmdNQXdzZ0FpQURRZkFBYWlJQUtRQUFOd0FBSUFJZ0FDa0FDRGNBQ0NBQ0lBQXBBQkEzQUJBZ0FpQUFLUUFZTndBWUlBSWdBQ2tBSURjQUlDQUNJQUFwQUNnM0FDZ01BZ3NnQWlBRFFlQUFhaUlBS1FBQU53QUFJQUlnQUNrQUNEY0FDQ0FDSUFBcEFCQTNBQkFnQWlBQUtRQVlOd0FZSUFJZ0FDa0FJRGNBSUNBQ0lBQXBBQ2czQUNnZ0FpQUFLUUF3TndBd0lBSWdBQ2tBT0RjQU9Bd0JDeUFGSkFRUEN5QUZKQVFMQmdBZ0FDUUVDNXNNQVF0L0l3UWhCeU1FUWRBQ2FpUUVJQWRCd0FGcUlnTkNBRGNDQUNBRFFnQTNBZ2dnQTBJQU53SVFJQU5DQURjQ0dDQURRZ0EzQWlBZ0EwSUFOd0lvSUFOQ0FEY0NNQ0FEUVFBMkFqZ2dBMEU4YWlJTlFZQ0FCRFlDQUNBRFFZZ0JhaUlHUVFBMkFnQWdBMEZBYXlJS1FRQTJBZ0FnQTBIRUFHb2lCRUVBTmdJQUlBTkJqQUZxSWdsQkFEWUNBQ0FESUFBZ0FVSURpS2NpQ0JBY0lBaEJ3QUJ0UVFaMElnVWdDRWdFUUFOQUlBQWdCV29zQUFBaEN5QUdJQVlvQWdBaURFRUJhallDQUNBTUlBTkJ5QUJxYWlBTE9nQUFJQVZCQVdvaUJTQUlTQTBBSUFnaEJRc0xJQUduUVFkeElnZ0VRQ0FKSUFnMkFnQWdBQ0FGYWl3QUFDRUZJQVlnQmlnQ0FDSUFRUUZxTmdJQUlBQWdBMEhJQUdwcUlBVTZBQUFMSUFrb0FnQWlCUVJBSUFNZ0JpZ0NBR3BCeHdCcUlnQWdBQzBBQUVFQklBVjBRWDlxUVFnZ0JXdDBjVG9BQUNBRElBWW9BZ0JxUWNjQWFpSUFJQUF0QUFCQkFVRUhJQWtvQWdCcmRITTZBQUFnQ1VFQU5nSUFCU0FHSUFZb0FnQWlBRUVCYWpZQ0FDQUFJQU5CeUFCcWFrR0Fmem9BQUFzQ1FBSkFJQVlvQWdBaUFFRTRTZ1JBSUFCQndBQklCRUFEUUNBR0lBQkJBV28yQWdBZ0FDQURRY2dBYW1wQkFEb0FBQ0FHS0FJQUlnQkJ3QUJJRFFBTEN5QURJQU5CeUFCcVFjQUFFQndnQmtFQU5nSUFRUUFoQUF3QkJTQUFRVGhIRFFFTERBRUxBMEFnQmlBQVFRRnFOZ0lBSUFBZ0EwSElBR3BxUVFBNkFBQWdCaWdDQUNJQVFUaElEUUFMQ3lBS0lBb29BZ0JCQVdvaUJUWUNBQ0FGUlFSQUlBUWdCQ2dDQUVFQmFqWUNBQXNnQmtIQUFEWUNBRUhBQUNFQUEwQWdCaUFBUVg5cUlnQTJBZ0FnQUNBRFFjZ0FhbW9nQlRvQUFDQUZRUWgySVFVZ0JpZ0NBQ0lBUVR4S0RRQUxJQW9nQlRZQ0FDQUFRVGhLQkVBZ0JDZ0NBQ0VGQTBBZ0JpQUFRWDlxSWdBMkFnQWdBQ0FEUWNnQWFtb2dCVG9BQUNBRlFRaDJJUVVnQmlnQ0FDSUFRVGhLRFFBTElBUWdCVFlDQUFzZ0F5QURRY2dBYWtIQUFCQWNJQWRCZ0FGcUlnUWdBeWtDQURjQ0FDQUVJQU1wQWdnM0FnZ2dCQ0FES1FJUU53SVFJQVFnQXlrQ0dEY0NHQ0FFSUFNcEFpQTNBaUFnQkNBREtRSW9Od0lvSUFRZ0F5a0NNRGNDTUNBRUlBTXBBamczQWpnZ0JDQUhRVUJySWdCQkFCQUpJQUFnQjBFQkVBa2dCeUFBUVFJUUNTQUFJQWRCQXhBSklBY2dBRUVFRUFrZ0FDQUhRUVVRQ1NBSElBQkJCaEFKSUFBZ0IwRUhFQWtnQnlBQVFRZ1FDU0FBSUFSQkNSQUpJQU1nQkNnQ0FDQURLQUlBY3pZQ0FDQURRUVJxSWdBZ0FDZ0NBQ0FFS0FJRWN6WUNBQ0FEUVFocUlnQWdCQ2dDQ0NBQUtBSUFjellDQUNBRFFReHFJZ0FnQkNnQ0RDQUFLQUlBY3pZQ0FDQURRUkJxSWdBZ0JDZ0NFQ0FBS0FJQWN6WUNBQ0FEUVJScUlnQWdCQ2dDRkNBQUtBSUFjellDQUNBRFFSaHFJZ0FnQkNnQ0dDQUFLQUlBY3pZQ0FDQURRUnhxSWdBZ0JDZ0NIQ0FBS0FJQWN6WUNBQ0FFS0FJZ0lBTkJJR29pQUNnQ0FITWhDU0FBSUFrMkFnQWdCQ2dDSkNBRFFTUnFJZ0FvQWdCeklRb2dBQ0FLTmdJQUlBUW9BaWdnQTBFb2FpSUFLQUlBY3lFTElBQWdDellDQUNBRUtBSXNJQU5CTEdvaUFDZ0NBSE1oRENBQUlBdzJBZ0FnQkNnQ01DQURRVEJxSWdBb0FnQnpJUWdnQUNBSU5nSUFJQVFvQWpRZ0EwRTBhaUlBS0FJQWN5RUZJQUFnQlRZQ0FDQURRVGhxSWdBZ0JDZ0NPQ0FBS0FJQWN6WUNBQ0FOSUFRb0Fqd2dEU2dDQUhNMkFnQWdBaUFKT2dBQUlBSWdDVUVJZGpvQUFTQUNJQWxCRUhZNkFBSWdBaUFKUVJoMk9nQURJQUlnQ2pvQUJDQUNJQXBCQ0hZNkFBVWdBaUFLUVJCMk9nQUdJQUlnQ2tFWWRqb0FCeUFDSUFzNkFBZ2dBaUFMUVFoMk9nQUpJQUlnQzBFUWRqb0FDaUFDSUF0QkdIWTZBQXNnQWlBTU9nQU1JQUlnREVFSWRqb0FEU0FDSUF4QkVIWTZBQTRnQWlBTVFSaDJPZ0FQSUFJZ0NEb0FFQ0FDSUFoQkNIWTZBQkVnQWlBSVFSQjJPZ0FTSUFJZ0NFRVlkam9BRXlBQ0lBVTZBQlFnQWlBRlFRaDJPZ0FWSUFJZ0F5d0FOam9BRmlBQ0lBTXNBRGM2QUJjZ0FpQUFMQUFBT2dBWUlBSWdBeXdBT1RvQUdTQUNJQU1zQURvNkFCb2dBaUFETEFBN09nQWJJQUlnRFN3QUFEb0FIQ0FDSUFNc0FEMDZBQjBnQWlBRExBQStPZ0FlSUFJZ0F5d0FQem9BSHlBSEpBUUxNZ0FnQXdSQUlBQWdBU0FDUWJDRHdBQVFGQ0lBSUFRUUxRVWdBQ0FCSUFKQnNJT0FBUkFVSWdBZ0JCQXVDeUFBRUJBTG9Xb0NtQUYvQzM0Z0EwR2dnOEFBYWlJVkVCWTJBZ0FnQVNBQ0lBTkJnSUJBYXlJbUVDRWdBMEhRZ2NBQWFpSUdJQU5Cd0lEQUFHb2lCeWtEQURjREFDQUdJQWNwQXdnM0F3Z2dCaUFIS1FNUU53TVFJQVlnQnlrREdEY0RHQ0FHSUFjcEF5QTNBeUFnQmlBSEtRTW9Od01vSUFZZ0J5a0RNRGNETUNBR0lBY3BBemczQXpnZ0JrRkFheUFIUVVCcktRTUFOd01BSUFZZ0J5a0RTRGNEU0NBR0lBY3BBMUEzQTFBZ0JpQUhLUU5ZTndOWUlBWWdCeWtEWURjRFlDQUdJQWNwQTJnM0EyZ2dCaUFIS1FOd053TndJQVlnQnlrRGVEY0RlQ0FFUVFGR0lnMEVmaUFCS1FNaklBTkJ3SUhBQUdvcEF3Q0ZJWjhCUWdBRklBUkJBVW9FZmlBRFFZQ0R3QUJxSUFjcEF3QWdBMEhRZ01BQWFpa0RBSVUzQXdBZ0EwR0lnOEFBYWlBRFFjaUF3QUJxS1FNQUlBTkIySURBQUdvcEF3Q0ZOd01BSUFOQjRJREFBR29wQXdBaG5RRWdBMEhvZ01BQWFpa0RBQVZDQUFzTElaNEJJQlVvQWdBZ0poQVhJQU5CMDRIQUFHb2hOeUFEUWRLQndBQnFJVGdnQTBIWGdjQUFhaUU1SUFOQjBZSEFBR29oT2lBRFFkYUJ3QUJxSVRzZ0EwSGJnY0FBYWlFOElBTkIxWUhBQUdvaFBTQURRZHFCd0FCcUlUNGdBMEhmZ2NBQWFpRS9JQU5CMUlIQUFHb2hKeUFEUWRtQndBQnFJVUFnQTBIZWdjQUFhaUZCSUFOQjJJSEFBR29oRmlBRFFkMkJ3QUJxSVVJZ0EwSGNnY0FBYWlFb0lBTkI0SUhBQUdvaEZ5QURRZU9Cd0FCcUlVTWdBMEhpZ2NBQWFpRkVJQU5CNTRIQUFHb2hSU0FEUWVHQndBQnFJVVlnQTBIbWdjQUFhaUZISUFOQjY0SEFBR29oU0NBRFFlV0J3QUJxSVVrZ0EwSHFnY0FBYWlGS0lBTkI3NEhBQUdvaFN5QURRZVNCd0FCcUlTa2dBMEhwZ2NBQWFpRk1JQU5CN29IQUFHb2hUU0FEUWVpQndBQnFJUmdnQTBIdGdjQUFhaUZPSUFOQjdJSEFBR29oS2lBRFFmQ0J3QUJxSVJrZ0EwSHpnY0FBYWlGUElBTkI4b0hBQUdvaFVDQURRZmVCd0FCcUlWRWdBMEh4Z2NBQWFpRlNJQU5COW9IQUFHb2hVeUFEUWZ1QndBQnFJVlFnQTBIMWdjQUFhaUZWSUFOQitvSEFBR29oVmlBRFFmK0J3QUJxSVZjZ0EwSDBnY0FBYWlFcklBTkIrWUhBQUdvaFdDQURRZjZCd0FCcUlWa2dBMEg0Z2NBQWFpRWFJQU5CL1lIQUFHb2hXaUFEUWZ5QndBQnFJU3dnQTBHQWdzQUFhaUViSUFOQmc0TEFBR29oV3lBRFFZS0N3QUJxSVZ3Z0EwR0hnc0FBYWlGZElBTkJnWUxBQUdvaFhpQURRWWFDd0FCcUlWOGdBMEdMZ3NBQWFpRmdJQU5CaFlMQUFHb2hZU0FEUVlxQ3dBQnFJV0lnQTBHUGdzQUFhaUZqSUFOQmhJTEFBR29oTFNBRFFZbUN3QUJxSVdRZ0EwR09nc0FBYWlGbElBTkJpSUxBQUdvaEhDQURRWTJDd0FCcUlXWWdBMEdNZ3NBQWFpRXVJQU5Ca0lMQUFHb2hIU0FEUVpPQ3dBQnFJV2NnQTBHU2dzQUFhaUZvSUFOQmw0TEFBR29oYVNBRFFaR0N3QUJxSVdvZ0EwR1dnc0FBYWlGcklBTkJtNExBQUdvaGJDQURRWldDd0FCcUlXMGdBMEdhZ3NBQWFpRnVJQU5CbjRMQUFHb2hieUFEUVpTQ3dBQnFJUzhnQTBHWmdzQUFhaUZ3SUFOQm5vTEFBR29oY1NBRFFaaUN3QUJxSVI0Z0EwR2Rnc0FBYWlGeUlBTkJuSUxBQUdvaE1DQURRYUNDd0FCcUlSOGdBMEdqZ3NBQWFpRnpJQU5Cb29MQUFHb2hkQ0FEUWFlQ3dBQnFJWFVnQTBHaGdzQUFhaUYySUFOQnBvTEFBR29oZHlBRFFhdUN3QUJxSVhnZ0EwR2xnc0FBYWlGNUlBTkJxb0xBQUdvaGVpQURRYStDd0FCcUlYc2dBMEdrZ3NBQWFpRXhJQU5CcVlMQUFHb2hmQ0FEUWE2Q3dBQnFJWDBnQTBHb2dzQUFhaUVnSUFOQnJZTEFBR29oZmlBRFFheUN3QUJxSVRJZ0EwR3dnc0FBYWlFaElBTkJzNExBQUdvaGZ5QURRYktDd0FCcUlZQUJJQU5CdDRMQUFHb2hnUUVnQTBHeGdzQUFhaUdDQVNBRFFiYUN3QUJxSVlNQklBTkJ1NExBQUdvaGhBRWdBMEcxZ3NBQWFpR0ZBU0FEUWJxQ3dBQnFJWVlCSUFOQnY0TEFBR29oaHdFZ0EwRzBnc0FBYWlFeklBTkJ1WUxBQUdvaGlBRWdBMEcrZ3NBQWFpR0pBU0FEUWJpQ3dBQnFJU0lnQTBHOWdzQUFhaUdLQVNBRFFieUN3QUJxSVRRZ0EwSEFnc0FBYWlFaklBTkJ3NExBQUdvaGl3RWdBMEhDZ3NBQWFpR01BU0FEUWNlQ3dBQnFJWTBCSUFOQndZTEFBR29oamdFZ0EwSEdnc0FBYWlHUEFTQURRY3VDd0FCcUlaQUJJQU5CeFlMQUFHb2hrUUVnQTBIS2dzQUFhaUdTQVNBRFFjK0N3QUJxSVpNQklBTkJ4SUxBQUdvaE5TQURRY21Dd0FCcUlaUUJJQU5Cem9MQUFHb2hsUUVnQTBISWdzQUFhaUVrSUFOQnpZTEFBR29obGdFZ0EwSE1nc0FBYWlFMlFRQWhBUU5BUVFBaEFnTkFJRGN0QUFBaERpQTRMUUFBSVE4Z09TMEFBQ0VMSURvdEFBQWhDQ0E3TFFBQUlRa2dQQzBBQUNFS0lBWWdGU2dDQUNnQ0FDZ0NEQ0FDUVFSMGFpSUZLQUlBSUQ4dEFBQkJBblJCOENKcUtBSUFJRDR0QUFCQkFuUkI4QnBxS0FJQUlBWXRBQUJCQW5SQjhBcHFLQUlBSUQwdEFBQkJBblJCOEJKcUtBSUFjM056Y3pZQ0FDQW5JRUV0QUFCQkFuUkI4QnBxS0FJQUlFQXRBQUJCQW5SQjhCSnFLQUlBSUE1Qi93RnhRUUowUWZBaWFpZ0NBQ0FuTFFBQVFRSjBRZkFLYWlnQ0FITnpjeUFGUVFScUlnNG9BZ0J6TmdJQUlCWWdRaTBBQUVFQ2RFSHdFbW9vQWdBZ0ZpMEFBRUVDZEVId0Ntb29BZ0FnRDBIL0FYRkJBblJCOEJwcUtBSUFJQXRCL3dGeFFRSjBRZkFpYWlnQ0FITnpjeUFGUVFocUlnOG9BZ0J6TmdJQUlDZ2dCVUVNYWlJTEtBSUFJQ2d0QUFCQkFuUkI4QXBxS0FJQUlBcEIvd0Z4UVFKMFFmQWlhaWdDQUNBSVFmOEJjVUVDZEVId0Vtb29BZ0FnQ1VIL0FYRkJBblJCOEJwcUtBSUFjM056Y3pZQ0FDQkRMUUFBSVFnZ1JDMEFBQ0VKSUVVdEFBQWhDaUJHTFFBQUlRd2dSeTBBQUNFUUlFZ3RBQUFoRWlBWElBVW9BZ0FnU3kwQUFFRUNkRUh3SW1vb0FnQWdTaTBBQUVFQ2RFSHdHbW9vQWdBZ0Z5MEFBRUVDZEVId0Ntb29BZ0FnU1MwQUFFRUNkRUh3RW1vb0FnQnpjM056TmdJQUlDa2dEaWdDQUNCTkxRQUFRUUowUWZBYWFpZ0NBQ0JNTFFBQVFRSjBRZkFTYWlnQ0FDQUlRZjhCY1VFQ2RFSHdJbW9vQWdBZ0tTMEFBRUVDZEVId0Ntb29BZ0J6YzNOek5nSUFJQmdnRHlnQ0FDQk9MUUFBUVFKMFFmQVNhaWdDQUNBWUxRQUFRUUowUWZBS2FpZ0NBQ0FKUWY4QmNVRUNkRUh3R21vb0FnQWdDa0gvQVhGQkFuUkI4Q0pxS0FJQWMzTnpjellDQUNBcUlBc29BZ0FnS2kwQUFFRUNkRUh3Q21vb0FnQWdFa0gvQVhGQkFuUkI4Q0pxS0FJQUlBeEIvd0Z4UVFKMFFmQVNhaWdDQUNBUVFmOEJjVUVDZEVId0dtb29BZ0J6YzNOek5nSUFJRTh0QUFBaENDQlFMUUFBSVFrZ1VTMEFBQ0VLSUZJdEFBQWhEQ0JUTFFBQUlSQWdWQzBBQUNFU0lCa2dCU2dDQUNCWExRQUFRUUowUWZBaWFpZ0NBQ0JXTFFBQVFRSjBRZkFhYWlnQ0FDQVpMUUFBUVFKMFFmQUthaWdDQUNCVkxRQUFRUUowUWZBU2FpZ0NBSE56YzNNMkFnQWdLeUFPS0FJQUlGa3RBQUJCQW5SQjhCcHFLQUlBSUZndEFBQkJBblJCOEJKcUtBSUFJQWhCL3dGeFFRSjBRZkFpYWlnQ0FDQXJMUUFBUVFKMFFmQUthaWdDQUhOemMzTTJBZ0FnR2lBUEtBSUFJRm90QUFCQkFuUkI4QkpxS0FJQUlCb3RBQUJCQW5SQjhBcHFLQUlBSUFsQi93RnhRUUowUWZBYWFpZ0NBQ0FLUWY4QmNVRUNkRUh3SW1vb0FnQnpjM056TmdJQUlDd2dDeWdDQUNBc0xRQUFRUUowUWZBS2FpZ0NBQ0FTUWY4QmNVRUNkRUh3SW1vb0FnQWdERUgvQVhGQkFuUkI4QkpxS0FJQUlCQkIvd0Z4UVFKMFFmQWFhaWdDQUhOemMzTTJBZ0FnV3kwQUFDRUlJRnd0QUFBaENTQmRMUUFBSVFvZ1hpMEFBQ0VNSUY4dEFBQWhFQ0JnTFFBQUlSSWdHeUFGS0FJQUlHTXRBQUJCQW5SQjhDSnFLQUlBSUdJdEFBQkJBblJCOEJwcUtBSUFJQnN0QUFCQkFuUkI4QXBxS0FJQUlHRXRBQUJCQW5SQjhCSnFLQUlBYzNOemN6WUNBQ0F0SUE0b0FnQWdaUzBBQUVFQ2RFSHdHbW9vQWdBZ1pDMEFBRUVDZEVId0Vtb29BZ0FnQ0VIL0FYRkJBblJCOENKcUtBSUFJQzB0QUFCQkFuUkI4QXBxS0FJQWMzTnpjellDQUNBY0lBOG9BZ0FnWmkwQUFFRUNkRUh3RW1vb0FnQWdIQzBBQUVFQ2RFSHdDbW9vQWdBZ0NVSC9BWEZCQW5SQjhCcHFLQUlBSUFwQi93RnhRUUowUWZBaWFpZ0NBSE56YzNNMkFnQWdMaUFMS0FJQUlDNHRBQUJCQW5SQjhBcHFLQUlBSUJKQi93RnhRUUowUWZBaWFpZ0NBQ0FNUWY4QmNVRUNkRUh3RW1vb0FnQWdFRUgvQVhGQkFuUkI4QnBxS0FJQWMzTnpjellDQUNCbkxRQUFJUWdnYUMwQUFDRUpJR2t0QUFBaENpQnFMUUFBSVF3Z2F5MEFBQ0VRSUd3dEFBQWhFaUFkSUFVb0FnQWdieTBBQUVFQ2RFSHdJbW9vQWdBZ2JpMEFBRUVDZEVId0dtb29BZ0FnSFMwQUFFRUNkRUh3Q21vb0FnQWdiUzBBQUVFQ2RFSHdFbW9vQWdCemMzTnpOZ0lBSUM4Z0RpZ0NBQ0J4TFFBQVFRSjBRZkFhYWlnQ0FDQndMUUFBUVFKMFFmQVNhaWdDQUNBSVFmOEJjVUVDZEVId0ltb29BZ0FnTHkwQUFFRUNkRUh3Q21vb0FnQnpjM056TmdJQUlCNGdEeWdDQUNCeUxRQUFRUUowUWZBU2FpZ0NBQ0FlTFFBQVFRSjBRZkFLYWlnQ0FDQUpRZjhCY1VFQ2RFSHdHbW9vQWdBZ0NrSC9BWEZCQW5SQjhDSnFLQUlBYzNOemN6WUNBQ0F3SUFzb0FnQWdNQzBBQUVFQ2RFSHdDbW9vQWdBZ0VrSC9BWEZCQW5SQjhDSnFLQUlBSUF4Qi93RnhRUUowUWZBU2FpZ0NBQ0FRUWY4QmNVRUNkRUh3R21vb0FnQnpjM056TmdJQUlITXRBQUFoQ0NCMExRQUFJUWtnZFMwQUFDRUtJSFl0QUFBaERDQjNMUUFBSVJBZ2VDMEFBQ0VTSUI4Z0JTZ0NBQ0I3TFFBQVFRSjBRZkFpYWlnQ0FDQjZMUUFBUVFKMFFmQWFhaWdDQUNBZkxRQUFRUUowUWZBS2FpZ0NBQ0I1TFFBQVFRSjBRZkFTYWlnQ0FITnpjM00yQWdBZ01TQU9LQUlBSUgwdEFBQkJBblJCOEJwcUtBSUFJSHd0QUFCQkFuUkI4QkpxS0FJQUlBaEIvd0Z4UVFKMFFmQWlhaWdDQUNBeExRQUFRUUowUWZBS2FpZ0NBSE56YzNNMkFnQWdJQ0FQS0FJQUlINHRBQUJCQW5SQjhCSnFLQUlBSUNBdEFBQkJBblJCOEFwcUtBSUFJQWxCL3dGeFFRSjBRZkFhYWlnQ0FDQUtRZjhCY1VFQ2RFSHdJbW9vQWdCemMzTnpOZ0lBSURJZ0N5Z0NBQ0F5TFFBQVFRSjBRZkFLYWlnQ0FDQVNRZjhCY1VFQ2RFSHdJbW9vQWdBZ0RFSC9BWEZCQW5SQjhCSnFLQUlBSUJCQi93RnhRUUowUWZBYWFpZ0NBSE56YzNNMkFnQWdmeTBBQUNFSUlJQUJMUUFBSVFrZ2dRRXRBQUFoQ2lDQ0FTMEFBQ0VNSUlNQkxRQUFJUkFnaEFFdEFBQWhFaUFoSUFVb0FnQWdod0V0QUFCQkFuUkI4Q0pxS0FJQUlJWUJMUUFBUVFKMFFmQWFhaWdDQUNBaExRQUFRUUowUWZBS2FpZ0NBQ0NGQVMwQUFFRUNkRUh3RW1vb0FnQnpjM056TmdJQUlETWdEaWdDQUNDSkFTMEFBRUVDZEVId0dtb29BZ0FnaUFFdEFBQkJBblJCOEJKcUtBSUFJQWhCL3dGeFFRSjBRZkFpYWlnQ0FDQXpMUUFBUVFKMFFmQUthaWdDQUhOemMzTTJBZ0FnSWlBUEtBSUFJSW9CTFFBQVFRSjBRZkFTYWlnQ0FDQWlMUUFBUVFKMFFmQUthaWdDQUNBSlFmOEJjVUVDZEVId0dtb29BZ0FnQ2tIL0FYRkJBblJCOENKcUtBSUFjM056Y3pZQ0FDQTBJQXNvQWdBZ05DMEFBRUVDZEVId0Ntb29BZ0FnRWtIL0FYRkJBblJCOENKcUtBSUFJQXhCL3dGeFFRSjBRZkFTYWlnQ0FDQVFRZjhCY1VFQ2RFSHdHbW9vQWdCemMzTnpOZ0lBSUlzQkxRQUFJUWdnakFFdEFBQWhDU0NOQVMwQUFDRUtJSTRCTFFBQUlRd2dqd0V0QUFBaEVDQ1FBUzBBQUNFU0lDTWdCU2dDQUNDVEFTMEFBRUVDZEVId0ltb29BZ0Fna2dFdEFBQkJBblJCOEJwcUtBSUFJQ010QUFCQkFuUkI4QXBxS0FJQUlKRUJMUUFBUVFKMFFmQVNhaWdDQUhOemMzTTJBZ0FnTlNBT0tBSUFJSlVCTFFBQVFRSjBRZkFhYWlnQ0FDQ1VBUzBBQUVFQ2RFSHdFbW9vQWdBZ0NFSC9BWEZCQW5SQjhDSnFLQUlBSURVdEFBQkJBblJCOEFwcUtBSUFjM056Y3pZQ0FDQWtJQThvQWdBZ2xnRXRBQUJCQW5SQjhCSnFLQUlBSUNRdEFBQkJBblJCOEFwcUtBSUFJQWxCL3dGeFFRSjBRZkFhYWlnQ0FDQUtRZjhCY1VFQ2RFSHdJbW9vQWdCemMzTnpOZ0lBSURZZ0N5Z0NBQ0EyTFFBQVFRSjBRZkFLYWlnQ0FDQVNRZjhCY1VFQ2RFSHdJbW9vQWdBZ0RFSC9BWEZCQW5SQjhCSnFLQUlBSUJCQi93RnhRUUowUWZBYWFpZ0NBSE56YzNNMkFnQWdBa0VCYWlJQ1FRcEhEUUFMSUFFZ0Eyb2lBaUFHS1FBQU53QUFJQUlnQmlrQUNEY0FDQ0FDSUFZcEFCQTNBQkFnQWlBR0tRQVlOd0FZSUFJZ0Jpa0FJRGNBSUNBQ0lBWXBBQ2czQUNnZ0FpQUdLUUF3TndBd0lBSWdCaWtBT0RjQU9DQUNRVUJySUFaQlFHc3BBQUEzQUFBZ0FpQUdLUUJJTndCSUlBSWdCaWtBVURjQVVDQUNJQVlwQUZnM0FGZ2dBaUFHS1FCZ053QmdJQUlnQmlrQWFEY0FhQ0FDSUFZcEFIQTNBSEFnQWlBR0tRQjROd0I0SUFGQmdBRnFJZ0ZCZ0lEQUFFa05BQXNnQTBIUWdzQUFhaUlQSUFOQmdJQkFheWtEQUNBRFFhQ0F3QUJxSXBjQktRTUFoU0tnQVRjREFDQURRZUNDd0FCcUlnc2dBMEdRZ01BQWFpa0RBQ0FEUWJDQXdBQnFLUU1BaFRjREFDQURRZGlDd0FCcUlnZ2dBMEdJZ01BQWFpa0RBQ0FEUWFpQXdBQnFLUU1BaFNLaEFUY0RBQ0FEUWVpQ3dBQnFJZ2tnQTBHWWdNQUFhaWtEQUNBRFFiaUF3QUJxS1FNQWhUY0RBQ0NnQWFjaEFTQ2dBVUlnaUtjaEFpQ2hBYWNoQlNBRUJFQWdEUVJBSUFOQjhJTEFBR29oRFNBRFFmU0N3QUJxSVJFZ0EwSDRnc0FBYWlFS0lBTkIzSUxBQUdvaERDQURRZnlDd0FCcUlSTWdBMEdRZzhBQWFpRVFJQU5CbUlQQUFHb2hFaUFEUWVTQ3dBQnFJU1VnQTBIc2dzQUFhaUVVUVFBaERpQUZJUVFEUUNBTklBTWdBVUh3L3o5eGFpSUZMUUFQUVFKMFFmQWlhaWdDQUNBRkxRQUtRUUowUWZBYWFpZ0NBQ0FGTFFBRlFRSjBRZkFTYWlnQ0FDQUJJQVV0QUFCQkFuUkI4QXBxS0FJQWMzTnpjellDQUNBUklBVXRBQTVCQW5SQjhCcHFLQUlBSUFVdEFBbEJBblJCOEJKcUtBSUFJQVV0QUFOQkFuUkI4Q0pxS0FJQUlBVXRBQVJCQW5SQjhBcHFLQUlBYzNOeklBSnpOZ0lBSUFvZ0JTMEFEVUVDZEVId0Vtb29BZ0FnQlVFSWFpSUJMUUFBUVFKMFFmQUthaWdDQUNBRkxRQUNRUUowUWZBYWFpZ0NBQ0FGTFFBSFFRSjBRZkFpYWlnQ0FITnpjeUFFY3pZQ0FDQVRJQXdvQWdBZ0JTMEFERUVDZEVId0Ntb29BZ0FnQlVFTGFpSUNMUUFBUVFKMFFmQWlhaWdDQUNBRkxRQUJRUUowUWZBU2FpZ0NBQ0FGTFFBR1FRSjBRZkFhYWlnQ0FITnpjM00yQWdBZ0JTQU5LUU1BSUFzcEF3Q0ZOd01BSUFFZ0Npa0RBQ0FKS1FNQWhTS2VBVGNEQUNBQ0lKNEJRaGlJcHlJQlFaQ21IU0NlQVVJYmlLZEJCbkVnQVVFQmNYSkJBWFIyUVRCeGN6b0FBQ0FRSUEwcEF3QWluZ0ZDLy8vLy93K0RJcDBCSUFNZ0RTZ0NBRUh3L3o5eGFpSUJLUU1BSXFBQlF2Ly8vLzhQZ3lLaEFYNGlvZ0ZDSUlnZ29RRWduZ0ZDSUlnaW5nRitmQ0toQVVMLy8vLy9ENE1nblFFZ29BRkNJSWdpblFGK2ZDS2dBVUlnaUNDZEFTQ2VBWDRnb1FGQ0lJaDhmQ0tkQVRjREFDQVNJS0lCUXYvLy8vOFBneUNnQVVJZ2hvUWluZ0UzQXdBZ25nRWdDQ2tEQUh3aG5nRWdEeUNkQVNBUEtRTUFmQ0tnQVNBQktRTUFoU0tkQVRjREFDQUlJSjRCSUFGQkNHb2lBaWtEQUlVaW9RRTNBd0FnQVNDZ0FUY0RBQ0FDSUo0QklKOEJoVGNEQUNBTElBTWduUUduSWdKQjhQOC9jV29pQVMwQUQwRUNkRUh3SW1vb0FnQWdBUzBBQ2tFQ2RFSHdHbW9vQWdBZ0FTMEFCVUVDZEVId0Vtb29BZ0FnQWlBQkxRQUFRUUowUWZBS2FpZ0NBSE56YzNNMkFnQWdKU0NkQVVJZ2lLY2dBUzBBRGtFQ2RFSHdHbW9vQWdBZ0FTMEFDVUVDZEVId0Vtb29BZ0FnQVMwQUEwRUNkRUh3SW1vb0FnQWdBUzBBQkVFQ2RFSHdDbW9vQWdCemMzTnpOZ0lBSUFrZ29RR25JQUV0QUExQkFuUkI4QkpxS0FJQUlBRkJDR29pQWkwQUFFRUNkRUh3Q21vb0FnQWdBUzBBQWtFQ2RFSHdHbW9vQWdBZ0FTMEFCMEVDZEVId0ltb29BZ0J6YzNOek5nSUFJQlFnRENnQ0FDQUJMUUFNUVFKMFFmQUthaWdDQUNBQlFRdHFJZ1F0QUFCQkFuUkI4Q0pxS0FJQUlBRXRBQUZCQW5SQjhCSnFLQUlBSUFFdEFBWkJBblJCOEJwcUtBSUFjM056Y3pZQ0FDQUJJQXNwQXdBZ0RTa0RBSVUzQXdBZ0FpQUpLUU1BSUFvcEF3Q0ZJcDRCTndNQUlBUWduZ0ZDR0lpbklnRkJrS1lkSUo0QlFodUlwMEVHY1NBQlFRRnhja0VCZEhaQk1IRnpPZ0FBSUJBZ0N5a0RBQ0tlQVVMLy8vLy9ENE1pblFFZ0F5QUxLQUlBUWZEL1AzRnFJZ0VwQXdBaW9BRkMvLy8vL3crRElxRUJmaUtpQVVJZ2lDQ2hBU0NlQVVJZ2lDS2VBWDU4SXFFQlF2Ly8vLzhQZ3lDZEFTQ2dBVUlnaUNLZEFYNThJcUFCUWlDSUlKMEJJSjRCZmlDaEFVSWdpSHg4SXAwQk53TUFJQklnb2dGQy8vLy8vdytESUtBQlFpQ0doQ0tlQVRjREFDQ2VBU0FJS1FNQWZDR2VBU0FQSUowQklBOHBBd0I4SXFBQklBRXBBd0NGSXAwQk53TUFJQWdnbmdFZ0FVRUlhaUlDS1FNQWhTS2hBVGNEQUNBQklLQUJOd01BSUFJZ25nRWdud0dGTndNQUlKMEJweUVCSUowQlFpQ0lweUVDSUtFQnB5RUVJQTVCQVdvaURrR0FnQWhIRFFBTEJTQURRWWlEd0FCcUlSQWdBMEh3Z3NBQWFpRUtJQU5CMUlMQUFHb2htQUVnQTBIMGdzQUFhaUdaQVNBRFFmaUN3QUJxSVF3Z0EwSGNnc0FBYWlFbElBTkIvSUxBQUdvaG1nRWdBMEdRZzhBQWFpRU5JQU5CbUlQQUFHb2hEaUFEUWVTQ3dBQnFJWnNCSUFOQjdJTEFBR29obkFGQkFDRUVJQU5CZ0lQQUFHb2lFaWtEQUNHZkFRTkFJQU1nQVVIdy96OXhJZ1ZCRUhOcUloRXBBd0Fob0FFZ0VVRUlhaUlUS1FNQUlhRUJJQkVnQXlBRlFUQnphaUlSS1FNQUlKOEJmRGNEQUNBVElCRkJDR29pRXlrREFDQVFLUU1BZkRjREFDQVJJQU1nQlVFZ2Myb2lFU2tEQUNBUEtRTUFmRGNEQUNBVElBZ3BBd0FpbndFZ0VVRUlhaUlUS1FNQWZEY0RBQ0FSSUtBQklBc3BBd0I4TndNQUlCTWdvUUVnQ1NrREFIdzNBd0FnQ2lBRElBVnFJZ1V0QUE5QkFuUkI4Q0pxS0FJQUlBVXRBQXBCQW5SQjhCcHFLQUlBSUFVdEFBVkJBblJCOEJKcUtBSUFJQUVnQlMwQUFFRUNkRUh3Q21vb0FnQnpjM056SWdFMkFnQWdtUUVnQlMwQURrRUNkRUh3R21vb0FnQWdCUzBBQ1VFQ2RFSHdFbW9vQWdBZ0JTMEFBMEVDZEVId0ltb29BZ0FnQlMwQUJFRUNkRUh3Q21vb0FnQnpjM01nQW5NMkFnQWdEQ0NmQWFjZ0JTMEFEVUVDZEVId0Vtb29BZ0FnQlVFSWFpSUNMUUFBUVFKMFFmQUthaWdDQUNBRkxRQUNRUUowUWZBYWFpZ0NBQ0FGTFFBSFFRSjBRZkFpYWlnQ0FITnpjM00yQWdBZ21nRWdKU2dDQUNBRkxRQU1RUUowUWZBS2FpZ0NBQ0FGTFFBTFFRSjBRZkFpYWlnQ0FDQUZMUUFCUVFKMFFmQVNhaWdDQUNBRkxRQUdRUUowUWZBYWFpZ0NBSE56YzNNMkFnQWdCU0FLS1FNQUlBc3BBd0NGTndNQUlBSWdEQ2tEQUNBSktRTUFoVGNEQUNBRElBRkI4UDgvY1NJRmFpSUJLUUFBSUowQklKNEJRaUNHaFlVaG5RRWdBU0NkQVRjQUFDQU1LUU1BSXFBQklBb3BBd0FpbndFZ25nRkNBWVo4cDBHQmdJQ0FlSEt0SXA0QkVCb2lvUUZDLy8vLy93K0RJS0FCSUo0QklLRUJmbjFDSUlhRUlhQUJJSjhCSUtBQmZDS2hBYnBFQUFBQUFBQUE4RU9nbjBRQUFBQUFBQUFBUUtKRUFBQUFBQUFBQU1LZ0VCa2luZ0ZDQVlnaW9nRWdvZ0VnbmdGQ0FZTWlwUUY4ZmlDZUFVSWdobndob3dFZ0RTQ2ZBVUwvLy8vL0Q0TWlwQUVnblFGQy8vLy8vdytESXFZQmZpS25BVUlnaUNDbUFTQ2ZBVUlnaUNLZkFYNThJcVlCUXYvLy8vOFBneUNrQVNDZEFVSWdpQ0tkQVg1OElxUUJRaUNJSUowQklKOEJmaUNtQVVJZ2lIeDhJcDBCTndNQUlBNGdwd0ZDLy8vLy93K0RJS1FCUWlDR2hEY0RBQ0FESUFWQkVITnFJZ0lnblFFZ0Fpa0RBSVUzQXdBZ0FrRUlhaUlSSUE0cEF3QWdFU2tEQUlVM0F3QWdEU0FESUFWQklITnFJaE1wQXdBZ0RTa0RBSVUzQXdBZ0RpQVRRUWhxSWhRcEF3QWdEaWtEQUlVM0F3QWdBaWtEQUNHZEFTQVJLUU1BSVo4QklBSWdBeUFGUVRCemFpSUNLUU1BSUJJcEF3QjhOd01BSUJFZ0FrRUlhaUlGS1FNQUlCQXBBd0I4TndNQUlBSWdFeWtEQUNBUEtRTUFmRGNEQUNBRklCUXBBd0FnQ0NrREFIdzNBd0FnRXlDZEFTQUxLUU1BZkRjREFDQVVJSjhCSUFrcEF3QjhOd01BSUE0cEF3QWdDQ2tEQUh3aG5RRWdEeUFOS1FNQUlBOHBBd0I4SXA4QklBRXBBd0NGSXFRQk53TUFJQWdnblFFZ0FVRUlhaUlDS1FNQWhUY0RBQ0FCSUo4Qk53TUFJQUlnblFFM0F3QWdFaUFMS1FNQUlwMEJOd01BSUJBZ0NTa0RBRGNEQUNBRElLUUJweUlGUWZEL1AzRWlBVUVRYzJvaUFpa0RBQ0dmQVNBQ1FRaHFJaEVwQXdBaHBBRWdBaUNkQVNBRElBRkJNSE5xSWdJcEF3QjhOd01BSUJFZ0FrRUlhaUlSS1FNQUlCQXBBd0I4TndNQUlBSWdBeUFCUVNCemFpSUNLUU1BSUE4cEF3QjhOd01BSUJFZ0NDa0RBQ0tkQVNBQ1FRaHFJaEVwQXdCOE53TUFJQUlnbndFZ0Npa0RBSHczQXdBZ0VTQ2tBU0FNS1FNQWZEY0RBQ0FMSUFFZ0Eyb2lBUzBBRDBFQ2RFSHdJbW9vQWdBZ0FTMEFDa0VDZEVId0dtb29BZ0FnQVMwQUJVRUNkRUh3RW1vb0FnQWdCU0FCTFFBQVFRSjBRZkFLYWlnQ0FITnpjM01pQWpZQ0FDQ2JBU0NZQVNnQ0FDQUJMUUFPUVFKMFFmQWFhaWdDQUNBQkxRQUpRUUowUWZBU2FpZ0NBQ0FCTFFBRFFRSjBRZkFpYWlnQ0FDQUJMUUFFUVFKMFFmQUthaWdDQUhOemMzTTJBZ0FnQ1NDZEFhY2dBUzBBRFVFQ2RFSHdFbW9vQWdBZ0FVRUlhaUlGTFFBQVFRSjBRZkFLYWlnQ0FDQUJMUUFDUVFKMFFmQWFhaWdDQUNBQkxRQUhRUUowUWZBaWFpZ0NBSE56YzNNMkFnQWduQUVnSlNnQ0FDQUJMUUFNUVFKMFFmQUthaWdDQUNBQkxRQUxRUUowUWZBaWFpZ0NBQ0FCTFFBQlFRSjBRZkFTYWlnQ0FDQUJMUUFHUVFKMFFmQWFhaWdDQUhOemMzTTJBZ0FnQVNBTEtRTUFJQW9wQXdDRk53TUFJQVVnQ1NrREFDQU1LUU1BaFRjREFDQURJQUpCOFA4L2NTSUZhaUlCS1FBQUlLQUJJSjRCSUtNQklLVUJmQ0NoQVZaQkgzUkJIM1Vnb3dGQ2dJQ0FnQkI4SUtFQklLSUJmVlJxckh3aW5nRkNJSWFGaFNHZkFTQUJJSjhCTndBQUlBa3BBd0FpblFFZ0N5a0RBQ0tnQVNDZUFVSUJobnluUVlHQWdJQjRjcTBpbmdFUUdpS2hBVUwvLy8vL0Q0TWduUUVnbmdFZ29RRitmVUlnaG9RaG5RRWduUUVnb0FGOElxRUJ1a1FBQUFBQUFBRHdRNkNmUkFBQUFBQUFBQUJBb2tRQUFBQUFBQUFBd3FBUUdTS2VBVUlCaUNLaUFTQ2lBU0NlQVVJQmd5S2xBWHgrSUo0QlFpQ0dmQ0dqQVNDZUFTQ2pBU0NsQVh3Z29RRldRUjkwUVI5MUlLTUJRb0NBZ0lBUWZDQ2hBU0NpQVgxVWFxeDhJWjRCSUEwZ29BRkMvLy8vL3crRElxRUJJSjhCUXYvLy8vOFBneUtpQVg0aW93RkNJSWdnb2dFZ29BRkNJSWdpb0FGK2ZDS2lBVUwvLy8vL0Q0TWdvUUVnbndGQ0lJZ2lud0YrZkNLaEFVSWdpQ0NmQVNDZ0FYNGdvZ0ZDSUloOGZDS2ZBVGNEQUNBT0lLTUJRdi8vLy84UGd5Q2hBVUlnaG9RM0F3QWdBeUFGUVJCemFpSUNJSjhCSUFJcEF3Q0ZOd01BSUFKQkNHb2lFU0FPS1FNQUlCRXBBd0NGTndNQUlBMGdBeUFGUVNCemFpSVRLUU1BSUEwcEF3Q0ZOd01BSUE0Z0UwRUlhaUlVS1FNQUlBNHBBd0NGTndNQUlBSXBBd0FobndFZ0VTa0RBQ0dnQVNBQ0lBTWdCVUV3YzJvaUFpa0RBQ0FTS1FNQWZEY0RBQ0FSSUFKQkNHb2lCU2tEQUNBUUtRTUFmRGNEQUNBQ0lCTXBBd0FnRHlrREFIdzNBd0FnQlNBVUtRTUFJQWdwQXdCOE53TUFJQk1nbndFZ0Npa0RBSHczQXdBZ0ZDQ2dBU0FNS1FNQWZEY0RBQ0FPS1FNQUlBZ3BBd0I4SVo4QklBOGdEU2tEQUNBUEtRTUFmQ0toQVNBQktRTUFoU0tnQVRjREFDQUlJSjhCSUFGQkNHb2lBaWtEQUlVM0F3QWdBU0NoQVRjREFDQUNJSjhCTndNQUlCSWdDaWtEQUNLZkFUY0RBQ0FRSUF3cEF3QTNBd0Fnb0FHbklRRWdvQUZDSUlpbklRSWdCRUVCYWlJRVFZQ0FDRWNOQUFzTEJTQURRZkNDd0FCcUlRMGdBMEgwZ3NBQWFpRVJJQU5CK0lMQUFHb2hDaUFEUWR5Q3dBQnFJUXdnQTBIOGdzQUFhaUVUSUFOQmtJUEFBR29oRUNBRFFaaUR3QUJxSVJJZ0EwSGtnc0FBYWlFbElBTkI3SUxBQUdvaEZFRUFJUTRnQlNFRUEwQWdEU0FESUFGQjhQOC9jV29pQlMwQUQwRUNkRUh3SW1vb0FnQWdCUzBBQ2tFQ2RFSHdHbW9vQWdBZ0JTMEFCVUVDZEVId0Vtb29BZ0FnQVNBRkxRQUFRUUowUWZBS2FpZ0NBSE56YzNNaUFUWUNBQ0FSSUFVdEFBNUJBblJCOEJwcUtBSUFJQVV0QUFsQkFuUkI4QkpxS0FJQUlBVXRBQU5CQW5SQjhDSnFLQUlBSUFVdEFBUkJBblJCOEFwcUtBSUFjM056SUFKek5nSUFJQW9nQlMwQURVRUNkRUh3RW1vb0FnQWdCVUVJYWlJQ0xRQUFRUUowUWZBS2FpZ0NBQ0FGTFFBQ1FRSjBRZkFhYWlnQ0FDQUZMUUFIUVFKMFFmQWlhaWdDQUhOemN5QUVjellDQUNBVElBd29BZ0FnQlMwQURFRUNkRUh3Q21vb0FnQWdCUzBBQzBFQ2RFSHdJbW9vQWdBZ0JTMEFBVUVDZEVId0Vtb29BZ0FnQlMwQUJrRUNkRUh3R21vb0FnQnpjM056TmdJQUlBVWdEU2tEQUNBTEtRTUFoVGNEQUNBQ0lBb3BBd0FnQ1NrREFJVTNBd0FnRFNrREFDS2RBVUwvLy8vL0Q0TWlud0VnQXlBQlFmRC9QM0ZxSWdFcEF3QWlvQUZDLy8vLy93K0RJcUVCZmlHZUFTQVFJS0FCUWlDSUlxQUJJSjhCZmlDaEFTQ2RBVUlnaUNLZEFYNGduZ0ZDSUloOElxRUJRdi8vLy84UGczd2lud0ZDSUlnZ25RRWdvQUYrSUtFQlFpQ0lmSHdpblFFM0F3QWdFaUNlQVVMLy8vLy9ENE1nbndGQ0lJYUVJcDRCTndNQUlKNEJJQWdwQXdCOElaNEJJQThnblFFZ0R5a0RBSHdpbndFZ0FTa0RBSVVpblFFM0F3QWdDQ0NlQVNBQlFRaHFJZ0lwQXdDRklxQUJOd01BSUFFZ253RTNBd0FnQWlDZUFUY0RBQ0FMSUFNZ25RR25JZ0pCOFA4L2NXb2lBUzBBRDBFQ2RFSHdJbW9vQWdBZ0FTMEFDa0VDZEVId0dtb29BZ0FnQVMwQUJVRUNkRUh3RW1vb0FnQWdBaUFCTFFBQVFRSjBRZkFLYWlnQ0FITnpjM01pQWpZQ0FDQWxJSjBCUWlDSXB5QUJMUUFPUVFKMFFmQWFhaWdDQUNBQkxRQUpRUUowUWZBU2FpZ0NBQ0FCTFFBRFFRSjBRZkFpYWlnQ0FDQUJMUUFFUVFKMFFmQUthaWdDQUhOemMzTTJBZ0FnQ1NDZ0FhY2dBUzBBRFVFQ2RFSHdFbW9vQWdBZ0FVRUlhaUlFTFFBQVFRSjBRZkFLYWlnQ0FDQUJMUUFDUVFKMFFmQWFhaWdDQUNBQkxRQUhRUUowUWZBaWFpZ0NBSE56YzNNMkFnQWdGQ0FNS0FJQUlBRXRBQXhCQW5SQjhBcHFLQUlBSUFFdEFBdEJBblJCOENKcUtBSUFJQUV0QUFGQkFuUkI4QkpxS0FJQUlBRXRBQVpCQW5SQjhCcHFLQUlBYzNOemN6WUNBQ0FCSUFzcEF3QWdEU2tEQUlVM0F3QWdCQ0FKS1FNQUlBb3BBd0NGTndNQUlCQWdDeWtEQUNLZUFVTC8vLy8vRDRNaW5RRWdBeUFDUWZEL1AzRnFJZ0VwQXdBaW53RkMvLy8vL3crRElxQUJmaUtoQVVJZ2lDQ2dBU0NlQVVJZ2lDS2VBWDU4SXFBQlF2Ly8vLzhQZ3lDZEFTQ2ZBVUlnaUNLZEFYNThJcDhCUWlDSUlKMEJJSjRCZmlDZ0FVSWdpSHg4SXAwQk53TUFJQklnb1FGQy8vLy8vdytESUo4QlFpQ0doQ0tlQVRjREFDQ2VBU0FJS1FNQWZDR2VBU0FQSUowQklBOHBBd0I4SXA4QklBRXBBd0NGSXAwQk53TUFJQWdnbmdFZ0FVRUlhaUlDS1FNQWhTS2dBVGNEQUNBQklKOEJOd01BSUFJZ25nRTNBd0FnblFHbklRRWduUUZDSUlpbklRSWdvQUduSVFRZ0RrRUJhaUlPUVlDQUNFY05BQXNMSUFZZ0J5a0RBRGNEQUNBR0lBY3BBd2czQXdnZ0JpQUhLUU1RTndNUUlBWWdCeWtER0RjREdDQUdJQWNwQXlBM0F5QWdCaUFIS1FNb053TW9JQVlnQnlrRE1EY0RNQ0FHSUFjcEF6ZzNBemdnQmtGQWF5QUhRVUJyS1FNQU53TUFJQVlnQnlrRFNEY0RTQ0FHSUFjcEExQTNBMUFnQmlBSEtRTllOd05ZSUFZZ0J5a0RZRGNEWUNBR0lBY3BBMmczQTJnZ0JpQUhLUU53TndOd0lBWWdCeWtEZURjRGVDQVZFQlVnRlJBV0lnRTJBZ0FnQVNDWEFSQVhRUUFoQVFOQUlBWWdBU0FEYWlJQ0tRTUFJQVlwQXdDRklwMEJOd01BSUJZZ0Fpa0RDQ0FXS1FNQWhTS2VBVGNEQUNBWElBTWdBVUVRY21vaUFpa0RBQ0FYS1FNQWhUY0RBQ0FZSUFJcEF3Z2dHQ2tEQUlVM0F3QWdHU0FESUFGQklISnFJZ0lwQXdBZ0dTa0RBSVUzQXdBZ0dpQUNLUU1JSUJvcEF3Q0ZOd01BSUJzZ0F5QUJRVEJ5YWlJQ0tRTUFJQnNwQXdDRk53TUFJQndnQWlrRENDQWNLUU1BaFRjREFDQWRJQU1nQVVIQUFISnFJZ0lwQXdBZ0hTa0RBSVUzQXdBZ0hpQUNLUU1JSUI0cEF3Q0ZOd01BSUI4Z0F5QUJRZEFBY21vaUFpa0RBQ0FmS1FNQWhUY0RBQ0FnSUFJcEF3Z2dJQ2tEQUlVM0F3QWdJU0FESUFGQjRBQnlhaUlDS1FNQUlDRXBBd0NGTndNQUlDSWdBaWtEQ0NBaUtRTUFoVGNEQUNBaklBTWdBVUh3QUhKcUlnSXBBd0FnSXlrREFJVTNBd0FnSkNBQ0tRTUlJQ1FwQXdDRk53TUFRUUFoQWlDZUFVSVFpS2RCL3dGeElRUWduZ0ZDT0lpblFmOEJjU0VGSUowQlFoaUlwMEgvQVhFaERpQ2VBVUlZaUtkQi93RnhJUThEUUNBNExRQUFJUXNnT1MwQUFDRUlJRG90QUFBaENTQTdMUUFBSVEwZ0JpQUZRZjhCY1VFQ2RFSHdJbW9vQWdBZ0JFSC9BWEZCQW5SQjhCcHFLQUlBSUFZdEFBQkJBblJCOEFwcUtBSUFJRDB0QUFCQkFuUkI4QkpxS0FJQWMzTnpJQlVvQWdBb0FnQW9BZ3dnQWtFRWRHb2lCQ2dDQUhNMkFnQWdKeUFFUVFScUlnVW9BZ0FnUVMwQUFFRUNkRUh3R21vb0FnQWdRQzBBQUVFQ2RFSHdFbW9vQWdBZ0RrSC9BWEZCQW5SQjhDSnFLQUlBSUNjdEFBQkJBblJCOEFwcUtBSUFjM056Y3pZQ0FDQVdJQVJCQ0dvaURpZ0NBQ0JDTFFBQVFRSjBRZkFTYWlnQ0FDQVdMUUFBUVFKMFFmQUthaWdDQUNBTFFmOEJjVUVDZEVId0dtb29BZ0FnQ0VIL0FYRkJBblJCOENKcUtBSUFjM056Y3pZQ0FDQW9JQ2d0QUFCQkFuUkI4QXBxS0FJQUlBOUIvd0Z4UVFKMFFmQWlhaWdDQUNBSlFmOEJjVUVDZEVId0Vtb29BZ0FnRFVIL0FYRkJBblJCOEJwcUtBSUFjM056SUFSQkRHb2lEeWdDQUhNMkFnQWdReTBBQUNFTElFUXRBQUFoQ0NCRkxRQUFJUWtnUmkwQUFDRU5JRWN0QUFBaENpQklMUUFBSVF3Z0Z5QUVLQUlBSUVzdEFBQkJBblJCOENKcUtBSUFJRW90QUFCQkFuUkI4QnBxS0FJQUlCY3RBQUJCQW5SQjhBcHFLQUlBSUVrdEFBQkJBblJCOEJKcUtBSUFjM056Y3pZQ0FDQXBJQVVvQWdBZ1RTMEFBRUVDZEVId0dtb29BZ0FnVEMwQUFFRUNkRUh3RW1vb0FnQWdDMEgvQVhGQkFuUkI4Q0pxS0FJQUlDa3RBQUJCQW5SQjhBcHFLQUlBYzNOemN6WUNBQ0FZSUE0b0FnQWdUaTBBQUVFQ2RFSHdFbW9vQWdBZ0dDMEFBRUVDZEVId0Ntb29BZ0FnQ0VIL0FYRkJBblJCOEJwcUtBSUFJQWxCL3dGeFFRSjBRZkFpYWlnQ0FITnpjM00yQWdBZ0tpQVBLQUlBSUNvdEFBQkJBblJCOEFwcUtBSUFJQXhCL3dGeFFRSjBRZkFpYWlnQ0FDQU5RZjhCY1VFQ2RFSHdFbW9vQWdBZ0NrSC9BWEZCQW5SQjhCcHFLQUlBYzNOemN6WUNBQ0JQTFFBQUlRc2dVQzBBQUNFSUlGRXRBQUFoQ1NCU0xRQUFJUTBnVXkwQUFDRUtJRlF0QUFBaERDQVpJQVFvQWdBZ1Z5MEFBRUVDZEVId0ltb29BZ0FnVmkwQUFFRUNkRUh3R21vb0FnQWdHUzBBQUVFQ2RFSHdDbW9vQWdBZ1ZTMEFBRUVDZEVId0Vtb29BZ0J6YzNOek5nSUFJQ3NnQlNnQ0FDQlpMUUFBUVFKMFFmQWFhaWdDQUNCWUxRQUFRUUowUWZBU2FpZ0NBQ0FMUWY4QmNVRUNkRUh3SW1vb0FnQWdLeTBBQUVFQ2RFSHdDbW9vQWdCemMzTnpOZ0lBSUJvZ0RpZ0NBQ0JhTFFBQVFRSjBRZkFTYWlnQ0FDQWFMUUFBUVFKMFFmQUthaWdDQUNBSVFmOEJjVUVDZEVId0dtb29BZ0FnQ1VIL0FYRkJBblJCOENKcUtBSUFjM056Y3pZQ0FDQXNJQThvQWdBZ0xDMEFBRUVDZEVId0Ntb29BZ0FnREVIL0FYRkJBblJCOENKcUtBSUFJQTFCL3dGeFFRSjBRZkFTYWlnQ0FDQUtRZjhCY1VFQ2RFSHdHbW9vQWdCemMzTnpOZ0lBSUZzdEFBQWhDeUJjTFFBQUlRZ2dYUzBBQUNFSklGNHRBQUFoRFNCZkxRQUFJUW9nWUMwQUFDRU1JQnNnQkNnQ0FDQmpMUUFBUVFKMFFmQWlhaWdDQUNCaUxRQUFRUUowUWZBYWFpZ0NBQ0FiTFFBQVFRSjBRZkFLYWlnQ0FDQmhMUUFBUVFKMFFmQVNhaWdDQUhOemMzTTJBZ0FnTFNBRktBSUFJR1V0QUFCQkFuUkI4QnBxS0FJQUlHUXRBQUJCQW5SQjhCSnFLQUlBSUF0Qi93RnhRUUowUWZBaWFpZ0NBQ0F0TFFBQVFRSjBRZkFLYWlnQ0FITnpjM00yQWdBZ0hDQU9LQUlBSUdZdEFBQkJBblJCOEJKcUtBSUFJQnd0QUFCQkFuUkI4QXBxS0FJQUlBaEIvd0Z4UVFKMFFmQWFhaWdDQUNBSlFmOEJjVUVDZEVId0ltb29BZ0J6YzNOek5nSUFJQzRnRHlnQ0FDQXVMUUFBUVFKMFFmQUthaWdDQUNBTVFmOEJjVUVDZEVId0ltb29BZ0FnRFVIL0FYRkJBblJCOEJKcUtBSUFJQXBCL3dGeFFRSjBRZkFhYWlnQ0FITnpjM00yQWdBZ1p5MEFBQ0VMSUdndEFBQWhDQ0JwTFFBQUlRa2dhaTBBQUNFTklHc3RBQUFoQ2lCc0xRQUFJUXdnSFNBRUtBSUFJRzh0QUFCQkFuUkI4Q0pxS0FJQUlHNHRBQUJCQW5SQjhCcHFLQUlBSUIwdEFBQkJBblJCOEFwcUtBSUFJRzB0QUFCQkFuUkI4QkpxS0FJQWMzTnpjellDQUNBdklBVW9BZ0FnY1MwQUFFRUNkRUh3R21vb0FnQWdjQzBBQUVFQ2RFSHdFbW9vQWdBZ0MwSC9BWEZCQW5SQjhDSnFLQUlBSUM4dEFBQkJBblJCOEFwcUtBSUFjM056Y3pZQ0FDQWVJQTRvQWdBZ2NpMEFBRUVDZEVId0Vtb29BZ0FnSGkwQUFFRUNkRUh3Q21vb0FnQWdDRUgvQVhGQkFuUkI4QnBxS0FJQUlBbEIvd0Z4UVFKMFFmQWlhaWdDQUhOemMzTTJBZ0FnTUNBUEtBSUFJREF0QUFCQkFuUkI4QXBxS0FJQUlBeEIvd0Z4UVFKMFFmQWlhaWdDQUNBTlFmOEJjVUVDZEVId0Vtb29BZ0FnQ2tIL0FYRkJBblJCOEJwcUtBSUFjM056Y3pZQ0FDQnpMUUFBSVFzZ2RDMEFBQ0VJSUhVdEFBQWhDU0IyTFFBQUlRMGdkeTBBQUNFS0lIZ3RBQUFoRENBZklBUW9BZ0FnZXkwQUFFRUNkRUh3SW1vb0FnQWdlaTBBQUVFQ2RFSHdHbW9vQWdBZ0h5MEFBRUVDZEVId0Ntb29BZ0FnZVMwQUFFRUNkRUh3RW1vb0FnQnpjM056TmdJQUlERWdCU2dDQUNCOUxRQUFRUUowUWZBYWFpZ0NBQ0I4TFFBQVFRSjBRZkFTYWlnQ0FDQUxRZjhCY1VFQ2RFSHdJbW9vQWdBZ01TMEFBRUVDZEVId0Ntb29BZ0J6YzNOek5nSUFJQ0FnRGlnQ0FDQitMUUFBUVFKMFFmQVNhaWdDQUNBZ0xRQUFRUUowUWZBS2FpZ0NBQ0FJUWY4QmNVRUNkRUh3R21vb0FnQWdDVUgvQVhGQkFuUkI4Q0pxS0FJQWMzTnpjellDQUNBeUlBOG9BZ0FnTWkwQUFFRUNkRUh3Q21vb0FnQWdERUgvQVhGQkFuUkI4Q0pxS0FJQUlBMUIvd0Z4UVFKMFFmQVNhaWdDQUNBS1FmOEJjVUVDZEVId0dtb29BZ0J6YzNOek5nSUFJSDh0QUFBaEN5Q0FBUzBBQUNFSUlJRUJMUUFBSVFrZ2dnRXRBQUFoRFNDREFTMEFBQ0VLSUlRQkxRQUFJUXdnSVNBRUtBSUFJSWNCTFFBQVFRSjBRZkFpYWlnQ0FDQ0dBUzBBQUVFQ2RFSHdHbW9vQWdBZ0lTMEFBRUVDZEVId0Ntb29BZ0FnaFFFdEFBQkJBblJCOEJKcUtBSUFjM056Y3pZQ0FDQXpJQVVvQWdBZ2lRRXRBQUJCQW5SQjhCcHFLQUlBSUlnQkxRQUFRUUowUWZBU2FpZ0NBQ0FMUWY4QmNVRUNkRUh3SW1vb0FnQWdNeTBBQUVFQ2RFSHdDbW9vQWdCemMzTnpOZ0lBSUNJZ0RpZ0NBQ0NLQVMwQUFFRUNkRUh3RW1vb0FnQWdJaTBBQUVFQ2RFSHdDbW9vQWdBZ0NFSC9BWEZCQW5SQjhCcHFLQUlBSUFsQi93RnhRUUowUWZBaWFpZ0NBSE56YzNNMkFnQWdOQ0FQS0FJQUlEUXRBQUJCQW5SQjhBcHFLQUlBSUF4Qi93RnhRUUowUWZBaWFpZ0NBQ0FOUWY4QmNVRUNkRUh3RW1vb0FnQWdDa0gvQVhGQkFuUkI4QnBxS0FJQWMzTnpjellDQUNDTEFTMEFBQ0VMSUl3QkxRQUFJUWdnalFFdEFBQWhDU0NPQVMwQUFDRU5JSThCTFFBQUlRb2drQUV0QUFBaERDQWpJQVFvQWdBZ2t3RXRBQUJCQW5SQjhDSnFLQUlBSUpJQkxRQUFRUUowUWZBYWFpZ0NBQ0FqTFFBQVFRSjBRZkFLYWlnQ0FDQ1JBUzBBQUVFQ2RFSHdFbW9vQWdCemMzTnpOZ0lBSURVZ0JTZ0NBQ0NWQVMwQUFFRUNkRUh3R21vb0FnQWdsQUV0QUFCQkFuUkI4QkpxS0FJQUlBdEIvd0Z4UVFKMFFmQWlhaWdDQUNBMUxRQUFRUUowUWZBS2FpZ0NBSE56YzNNMkFnQWdKQ0FPS0FJQUlKWUJMUUFBUVFKMFFmQVNhaWdDQUNBa0xRQUFRUUowUWZBS2FpZ0NBQ0FJUWY4QmNVRUNkRUh3R21vb0FnQWdDVUgvQVhGQkFuUkI4Q0pxS0FJQWMzTnpjellDQUNBMklBOG9BZ0FnTmkwQUFFRUNkRUh3Q21vb0FnQWdERUgvQVhGQkFuUkI4Q0pxS0FJQUlBMUIvd0Z4UVFKMFFmQVNhaWdDQUNBS1FmOEJjVUVDZEVId0dtb29BZ0J6YzNOek5nSUFJQUpCQVdvaUFrRUtSd1JBSUQ0c0FBQWhCQ0EvTEFBQUlRVWdOeXdBQUNFT0lEd3NBQUFoRHd3QkN3c2dBVUdBQVdvaUFVR0FnTUFBU1EwQUN5QUhJQVlwQXdBM0F3QWdCeUFHS1FNSU53TUlJQWNnQmlrREVEY0RFQ0FISUFZcEF4ZzNBeGdnQnlBR0tRTWdOd01nSUFjZ0Jpa0RLRGNES0NBSElBWXBBekEzQXpBZ0J5QUdLUU00TndNNElBZEJRR3NnQmtGQWF5a0RBRGNEQUNBSElBWXBBMGczQTBnZ0J5QUdLUU5RTndOUUlBY2dCaWtEV0RjRFdDQUhJQVlwQTJBM0EyQWdCeUFHS1FOb053Tm9JQWNnQmlrRGNEY0RjQ0FISUFZcEEzZzNBM2dnSmhBWUlDWXNBQUJCQTNGQkFuUkI0QXBxS0FJQUlRRWdKa0hJQVNBQUlBRkJCM0VSQUFBZ0ZSQVZDNjlxQXBnQmZ3dCtJQU5Cb0lPQUFXb2lGUkFXTmdJQUlBRWdBaUFEUVlDQWdBRnFJaVlRSVNBRFFkQ0JnQUZxSWdZZ0EwSEFnSUFCYWlJSEtRTUFOd01BSUFZZ0J5a0RDRGNEQ0NBR0lBY3BBeEEzQXhBZ0JpQUhLUU1ZTndNWUlBWWdCeWtESURjRElDQUdJQWNwQXlnM0F5Z2dCaUFIS1FNd053TXdJQVlnQnlrRE9EY0RPQ0FHUVVCcklBZEJRR3NwQXdBM0F3QWdCaUFIS1FOSU53TklJQVlnQnlrRFVEY0RVQ0FHSUFjcEExZzNBMWdnQmlBSEtRTmdOd05nSUFZZ0J5a0RhRGNEYUNBR0lBY3BBM0EzQTNBZ0JpQUhLUU40TndONElBUkJBVVlpRFFSK0lBRXBBeU1nQTBIQWdZQUJhaWtEQUlVaG53RkNBQVVnQkVFQlNnUitJQU5CZ0lPQUFXb2dCeWtEQUNBRFFkQ0FnQUZxS1FNQWhUY0RBQ0FEUVlpRGdBRnFJQU5CeUlDQUFXb3BBd0FnQTBIWWdJQUJhaWtEQUlVM0F3QWdBMEhnZ0lBQmFpa0RBQ0dkQVNBRFFlaUFnQUZxS1FNQUJVSUFDd3NobmdFZ0ZTZ0NBQ0FtRUJjZ0EwSFRnWUFCYWlFM0lBTkIwb0dBQVdvaE9DQURRZGVCZ0FGcUlUa2dBMEhSZ1lBQmFpRTZJQU5CMW9HQUFXb2hPeUFEUWR1QmdBRnFJVHdnQTBIVmdZQUJhaUU5SUFOQjJvR0FBV29oUGlBRFFkK0JnQUZxSVQ4Z0EwSFVnWUFCYWlFbklBTkIyWUdBQVdvaFFDQURRZDZCZ0FGcUlVRWdBMEhZZ1lBQmFpRVdJQU5CM1lHQUFXb2hRaUFEUWR5QmdBRnFJU2dnQTBIZ2dZQUJhaUVYSUFOQjQ0R0FBV29oUXlBRFFlS0JnQUZxSVVRZ0EwSG5nWUFCYWlGRklBTkI0WUdBQVdvaFJpQURRZWFCZ0FGcUlVY2dBMEhyZ1lBQmFpRklJQU5CNVlHQUFXb2hTU0FEUWVxQmdBRnFJVW9nQTBIdmdZQUJhaUZMSUFOQjVJR0FBV29oS1NBRFFlbUJnQUZxSVV3Z0EwSHVnWUFCYWlGTklBTkI2SUdBQVdvaEdDQURRZTJCZ0FGcUlVNGdBMEhzZ1lBQmFpRXFJQU5COElHQUFXb2hHU0FEUWZPQmdBRnFJVThnQTBIeWdZQUJhaUZRSUFOQjk0R0FBV29oVVNBRFFmR0JnQUZxSVZJZ0EwSDJnWUFCYWlGVElBTkIrNEdBQVdvaFZDQURRZldCZ0FGcUlWVWdBMEg2Z1lBQmFpRldJQU5CLzRHQUFXb2hWeUFEUWZTQmdBRnFJU3NnQTBINWdZQUJhaUZZSUFOQi9vR0FBV29oV1NBRFFmaUJnQUZxSVJvZ0EwSDlnWUFCYWlGYUlBTkIvSUdBQVdvaExDQURRWUNDZ0FGcUlSc2dBMEdEZ29BQmFpRmJJQU5CZ29LQUFXb2hYQ0FEUVllQ2dBRnFJVjBnQTBHQmdvQUJhaUZlSUFOQmhvS0FBV29oWHlBRFFZdUNnQUZxSVdBZ0EwR0Znb0FCYWlGaElBTkJpb0tBQVdvaFlpQURRWStDZ0FGcUlXTWdBMEdFZ29BQmFpRXRJQU5CaVlLQUFXb2haQ0FEUVk2Q2dBRnFJV1VnQTBHSWdvQUJhaUVjSUFOQmpZS0FBV29oWmlBRFFZeUNnQUZxSVM0Z0EwR1Fnb0FCYWlFZElBTkJrNEtBQVdvaFp5QURRWktDZ0FGcUlXZ2dBMEdYZ29BQmFpRnBJQU5Ca1lLQUFXb2hhaUFEUVphQ2dBRnFJV3NnQTBHYmdvQUJhaUZzSUFOQmxZS0FBV29oYlNBRFFacUNnQUZxSVc0Z0EwR2Znb0FCYWlGdklBTkJsSUtBQVdvaEx5QURRWm1DZ0FGcUlYQWdBMEdlZ29BQmFpRnhJQU5CbUlLQUFXb2hIaUFEUVoyQ2dBRnFJWElnQTBHY2dvQUJhaUV3SUFOQm9JS0FBV29oSHlBRFFhT0NnQUZxSVhNZ0EwR2lnb0FCYWlGMElBTkJwNEtBQVdvaGRTQURRYUdDZ0FGcUlYWWdBMEdtZ29BQmFpRjNJQU5CcTRLQUFXb2hlQ0FEUWFXQ2dBRnFJWGtnQTBHcWdvQUJhaUY2SUFOQnI0S0FBV29oZXlBRFFhU0NnQUZxSVRFZ0EwR3Bnb0FCYWlGOElBTkJyb0tBQVdvaGZTQURRYWlDZ0FGcUlTQWdBMEd0Z29BQmFpRitJQU5CcklLQUFXb2hNaUFEUWJDQ2dBRnFJU0VnQTBHemdvQUJhaUYvSUFOQnNvS0FBV29oZ0FFZ0EwRzNnb0FCYWlHQkFTQURRYkdDZ0FGcUlZSUJJQU5CdG9LQUFXb2hnd0VnQTBHN2dvQUJhaUdFQVNBRFFiV0NnQUZxSVlVQklBTkJ1b0tBQVdvaGhnRWdBMEcvZ29BQmFpR0hBU0FEUWJTQ2dBRnFJVE1nQTBHNWdvQUJhaUdJQVNBRFFiNkNnQUZxSVlrQklBTkJ1SUtBQVdvaElpQURRYjJDZ0FGcUlZb0JJQU5CdklLQUFXb2hOQ0FEUWNDQ2dBRnFJU01nQTBIRGdvQUJhaUdMQVNBRFFjS0NnQUZxSVl3QklBTkJ4NEtBQVdvaGpRRWdBMEhCZ29BQmFpR09BU0FEUWNhQ2dBRnFJWThCSUFOQnk0S0FBV29oa0FFZ0EwSEZnb0FCYWlHUkFTQURRY3FDZ0FGcUlaSUJJQU5CejRLQUFXb2hrd0VnQTBIRWdvQUJhaUUxSUFOQnlZS0FBV29obEFFZ0EwSE9nb0FCYWlHVkFTQURRY2lDZ0FGcUlTUWdBMEhOZ29BQmFpR1dBU0FEUWN5Q2dBRnFJVFpCQUNFQkEwQkJBQ0VDQTBBZ055MEFBQ0VPSURndEFBQWhEeUE1TFFBQUlRc2dPaTBBQUNFSUlEc3RBQUFoQ1NBOExRQUFJUW9nQmlBVktBSUFLQUlBS0FJTUlBSkJCSFJxSWdVb0FnQWdQeTBBQUVFQ2RFSHdJbW9vQWdBZ1BpMEFBRUVDZEVId0dtb29BZ0FnQmkwQUFFRUNkRUh3Q21vb0FnQWdQUzBBQUVFQ2RFSHdFbW9vQWdCemMzTnpOZ0lBSUNjZ1FTMEFBRUVDZEVId0dtb29BZ0FnUUMwQUFFRUNkRUh3RW1vb0FnQWdEa0gvQVhGQkFuUkI4Q0pxS0FJQUlDY3RBQUJCQW5SQjhBcHFLQUlBYzNOeklBVkJCR29pRGlnQ0FITTJBZ0FnRmlCQ0xRQUFRUUowUWZBU2FpZ0NBQ0FXTFFBQVFRSjBRZkFLYWlnQ0FDQVBRZjhCY1VFQ2RFSHdHbW9vQWdBZ0MwSC9BWEZCQW5SQjhDSnFLQUlBYzNOeklBVkJDR29pRHlnQ0FITTJBZ0FnS0NBRlFReHFJZ3NvQWdBZ0tDMEFBRUVDZEVId0Ntb29BZ0FnQ2tIL0FYRkJBblJCOENKcUtBSUFJQWhCL3dGeFFRSjBRZkFTYWlnQ0FDQUpRZjhCY1VFQ2RFSHdHbW9vQWdCemMzTnpOZ0lBSUVNdEFBQWhDQ0JFTFFBQUlRa2dSUzBBQUNFS0lFWXRBQUFoRENCSExRQUFJUkFnU0MwQUFDRVNJQmNnQlNnQ0FDQkxMUUFBUVFKMFFmQWlhaWdDQUNCS0xRQUFRUUowUWZBYWFpZ0NBQ0FYTFFBQVFRSjBRZkFLYWlnQ0FDQkpMUUFBUVFKMFFmQVNhaWdDQUhOemMzTTJBZ0FnS1NBT0tBSUFJRTB0QUFCQkFuUkI4QnBxS0FJQUlFd3RBQUJCQW5SQjhCSnFLQUlBSUFoQi93RnhRUUowUWZBaWFpZ0NBQ0FwTFFBQVFRSjBRZkFLYWlnQ0FITnpjM00yQWdBZ0dDQVBLQUlBSUU0dEFBQkJBblJCOEJKcUtBSUFJQmd0QUFCQkFuUkI4QXBxS0FJQUlBbEIvd0Z4UVFKMFFmQWFhaWdDQUNBS1FmOEJjVUVDZEVId0ltb29BZ0J6YzNOek5nSUFJQ29nQ3lnQ0FDQXFMUUFBUVFKMFFmQUthaWdDQUNBU1FmOEJjVUVDZEVId0ltb29BZ0FnREVIL0FYRkJBblJCOEJKcUtBSUFJQkJCL3dGeFFRSjBRZkFhYWlnQ0FITnpjM00yQWdBZ1R5MEFBQ0VJSUZBdEFBQWhDU0JSTFFBQUlRb2dVaTBBQUNFTUlGTXRBQUFoRUNCVUxRQUFJUklnR1NBRktBSUFJRmN0QUFCQkFuUkI4Q0pxS0FJQUlGWXRBQUJCQW5SQjhCcHFLQUlBSUJrdEFBQkJBblJCOEFwcUtBSUFJRlV0QUFCQkFuUkI4QkpxS0FJQWMzTnpjellDQUNBcklBNG9BZ0FnV1MwQUFFRUNkRUh3R21vb0FnQWdXQzBBQUVFQ2RFSHdFbW9vQWdBZ0NFSC9BWEZCQW5SQjhDSnFLQUlBSUNzdEFBQkJBblJCOEFwcUtBSUFjM056Y3pZQ0FDQWFJQThvQWdBZ1dpMEFBRUVDZEVId0Vtb29BZ0FnR2kwQUFFRUNkRUh3Q21vb0FnQWdDVUgvQVhGQkFuUkI4QnBxS0FJQUlBcEIvd0Z4UVFKMFFmQWlhaWdDQUhOemMzTTJBZ0FnTENBTEtBSUFJQ3d0QUFCQkFuUkI4QXBxS0FJQUlCSkIvd0Z4UVFKMFFmQWlhaWdDQUNBTVFmOEJjVUVDZEVId0Vtb29BZ0FnRUVIL0FYRkJBblJCOEJwcUtBSUFjM056Y3pZQ0FDQmJMUUFBSVFnZ1hDMEFBQ0VKSUYwdEFBQWhDaUJlTFFBQUlRd2dYeTBBQUNFUUlHQXRBQUFoRWlBYklBVW9BZ0FnWXkwQUFFRUNkRUh3SW1vb0FnQWdZaTBBQUVFQ2RFSHdHbW9vQWdBZ0d5MEFBRUVDZEVId0Ntb29BZ0FnWVMwQUFFRUNkRUh3RW1vb0FnQnpjM056TmdJQUlDMGdEaWdDQUNCbExRQUFRUUowUWZBYWFpZ0NBQ0JrTFFBQVFRSjBRZkFTYWlnQ0FDQUlRZjhCY1VFQ2RFSHdJbW9vQWdBZ0xTMEFBRUVDZEVId0Ntb29BZ0J6YzNOek5nSUFJQndnRHlnQ0FDQm1MUUFBUVFKMFFmQVNhaWdDQUNBY0xRQUFRUUowUWZBS2FpZ0NBQ0FKUWY4QmNVRUNkRUh3R21vb0FnQWdDa0gvQVhGQkFuUkI4Q0pxS0FJQWMzTnpjellDQUNBdUlBc29BZ0FnTGkwQUFFRUNkRUh3Q21vb0FnQWdFa0gvQVhGQkFuUkI4Q0pxS0FJQUlBeEIvd0Z4UVFKMFFmQVNhaWdDQUNBUVFmOEJjVUVDZEVId0dtb29BZ0J6YzNOek5nSUFJR2N0QUFBaENDQm9MUUFBSVFrZ2FTMEFBQ0VLSUdvdEFBQWhEQ0JyTFFBQUlSQWdiQzBBQUNFU0lCMGdCU2dDQUNCdkxRQUFRUUowUWZBaWFpZ0NBQ0J1TFFBQVFRSjBRZkFhYWlnQ0FDQWRMUUFBUVFKMFFmQUthaWdDQUNCdExRQUFRUUowUWZBU2FpZ0NBSE56YzNNMkFnQWdMeUFPS0FJQUlIRXRBQUJCQW5SQjhCcHFLQUlBSUhBdEFBQkJBblJCOEJKcUtBSUFJQWhCL3dGeFFRSjBRZkFpYWlnQ0FDQXZMUUFBUVFKMFFmQUthaWdDQUhOemMzTTJBZ0FnSGlBUEtBSUFJSEl0QUFCQkFuUkI4QkpxS0FJQUlCNHRBQUJCQW5SQjhBcHFLQUlBSUFsQi93RnhRUUowUWZBYWFpZ0NBQ0FLUWY4QmNVRUNkRUh3SW1vb0FnQnpjM056TmdJQUlEQWdDeWdDQUNBd0xRQUFRUUowUWZBS2FpZ0NBQ0FTUWY4QmNVRUNkRUh3SW1vb0FnQWdERUgvQVhGQkFuUkI4QkpxS0FJQUlCQkIvd0Z4UVFKMFFmQWFhaWdDQUhOemMzTTJBZ0FnY3kwQUFDRUlJSFF0QUFBaENTQjFMUUFBSVFvZ2RpMEFBQ0VNSUhjdEFBQWhFQ0I0TFFBQUlSSWdIeUFGS0FJQUlIc3RBQUJCQW5SQjhDSnFLQUlBSUhvdEFBQkJBblJCOEJwcUtBSUFJQjh0QUFCQkFuUkI4QXBxS0FJQUlIa3RBQUJCQW5SQjhCSnFLQUlBYzNOemN6WUNBQ0F4SUE0b0FnQWdmUzBBQUVFQ2RFSHdHbW9vQWdBZ2ZDMEFBRUVDZEVId0Vtb29BZ0FnQ0VIL0FYRkJBblJCOENKcUtBSUFJREV0QUFCQkFuUkI4QXBxS0FJQWMzTnpjellDQUNBZ0lBOG9BZ0FnZmkwQUFFRUNkRUh3RW1vb0FnQWdJQzBBQUVFQ2RFSHdDbW9vQWdBZ0NVSC9BWEZCQW5SQjhCcHFLQUlBSUFwQi93RnhRUUowUWZBaWFpZ0NBSE56YzNNMkFnQWdNaUFMS0FJQUlESXRBQUJCQW5SQjhBcHFLQUlBSUJKQi93RnhRUUowUWZBaWFpZ0NBQ0FNUWY4QmNVRUNkRUh3RW1vb0FnQWdFRUgvQVhGQkFuUkI4QnBxS0FJQWMzTnpjellDQUNCL0xRQUFJUWdnZ0FFdEFBQWhDU0NCQVMwQUFDRUtJSUlCTFFBQUlRd2dnd0V0QUFBaEVDQ0VBUzBBQUNFU0lDRWdCU2dDQUNDSEFTMEFBRUVDZEVId0ltb29BZ0FnaGdFdEFBQkJBblJCOEJwcUtBSUFJQ0V0QUFCQkFuUkI4QXBxS0FJQUlJVUJMUUFBUVFKMFFmQVNhaWdDQUhOemMzTTJBZ0FnTXlBT0tBSUFJSWtCTFFBQVFRSjBRZkFhYWlnQ0FDQ0lBUzBBQUVFQ2RFSHdFbW9vQWdBZ0NFSC9BWEZCQW5SQjhDSnFLQUlBSURNdEFBQkJBblJCOEFwcUtBSUFjM056Y3pZQ0FDQWlJQThvQWdBZ2lnRXRBQUJCQW5SQjhCSnFLQUlBSUNJdEFBQkJBblJCOEFwcUtBSUFJQWxCL3dGeFFRSjBRZkFhYWlnQ0FDQUtRZjhCY1VFQ2RFSHdJbW9vQWdCemMzTnpOZ0lBSURRZ0N5Z0NBQ0EwTFFBQVFRSjBRZkFLYWlnQ0FDQVNRZjhCY1VFQ2RFSHdJbW9vQWdBZ0RFSC9BWEZCQW5SQjhCSnFLQUlBSUJCQi93RnhRUUowUWZBYWFpZ0NBSE56YzNNMkFnQWdpd0V0QUFBaENDQ01BUzBBQUNFSklJMEJMUUFBSVFvZ2pnRXRBQUFoRENDUEFTMEFBQ0VRSUpBQkxRQUFJUklnSXlBRktBSUFJSk1CTFFBQVFRSjBRZkFpYWlnQ0FDQ1NBUzBBQUVFQ2RFSHdHbW9vQWdBZ0l5MEFBRUVDZEVId0Ntb29BZ0Fna1FFdEFBQkJBblJCOEJKcUtBSUFjM056Y3pZQ0FDQTFJQTRvQWdBZ2xRRXRBQUJCQW5SQjhCcHFLQUlBSUpRQkxRQUFRUUowUWZBU2FpZ0NBQ0FJUWY4QmNVRUNkRUh3SW1vb0FnQWdOUzBBQUVFQ2RFSHdDbW9vQWdCemMzTnpOZ0lBSUNRZ0R5Z0NBQ0NXQVMwQUFFRUNkRUh3RW1vb0FnQWdKQzBBQUVFQ2RFSHdDbW9vQWdBZ0NVSC9BWEZCQW5SQjhCcHFLQUlBSUFwQi93RnhRUUowUWZBaWFpZ0NBSE56YzNNMkFnQWdOaUFMS0FJQUlEWXRBQUJCQW5SQjhBcHFLQUlBSUJKQi93RnhRUUowUWZBaWFpZ0NBQ0FNUWY4QmNVRUNkRUh3RW1vb0FnQWdFRUgvQVhGQkFuUkI4QnBxS0FJQWMzTnpjellDQUNBQ1FRRnFJZ0pCQ2tjTkFBc2dBU0FEYWlJQ0lBWXBBQUEzQUFBZ0FpQUdLUUFJTndBSUlBSWdCaWtBRURjQUVDQUNJQVlwQUJnM0FCZ2dBaUFHS1FBZ053QWdJQUlnQmlrQUtEY0FLQ0FDSUFZcEFEQTNBREFnQWlBR0tRQTROd0E0SUFKQlFHc2dCa0ZBYXlrQUFEY0FBQ0FDSUFZcEFFZzNBRWdnQWlBR0tRQlFOd0JRSUFJZ0Jpa0FXRGNBV0NBQ0lBWXBBR0EzQUdBZ0FpQUdLUUJvTndCb0lBSWdCaWtBY0RjQWNDQUNJQVlwQUhnM0FIZ2dBVUdBQVdvaUFVR0FnSUFCU1EwQUN5QURRZENDZ0FGcUlnOGdBMEdBZ0lBQmFpa0RBQ0FEUWFDQWdBRnFJcGNCS1FNQWhTS2dBVGNEQUNBRFFlQ0NnQUZxSWdzZ0EwR1FnSUFCYWlrREFDQURRYkNBZ0FGcUtRTUFoVGNEQUNBRFFkaUNnQUZxSWdnZ0EwR0lnSUFCYWlrREFDQURRYWlBZ0FGcUtRTUFoU0toQVRjREFDQURRZWlDZ0FGcUlna2dBMEdZZ0lBQmFpa0RBQ0FEUWJpQWdBRnFLUU1BaFRjREFDQ2dBYWNoQVNDZ0FVSWdpS2NoQWlDaEFhY2hCU0FFQkVBZ0RRUkFJQU5COElLQUFXb2hEU0FEUWZTQ2dBRnFJUkVnQTBINGdvQUJhaUVLSUFOQjNJS0FBV29oRENBRFFmeUNnQUZxSVJNZ0EwR1FnNEFCYWlFUUlBTkJtSU9BQVdvaEVpQURRZVNDZ0FGcUlTVWdBMEhzZ29BQmFpRVVRUUFoRGlBRklRUURRQ0FOSUFNZ0FVSHcvLzhBY1dvaUJTMEFEMEVDZEVId0ltb29BZ0FnQlMwQUNrRUNkRUh3R21vb0FnQWdCUzBBQlVFQ2RFSHdFbW9vQWdBZ0FTQUZMUUFBUVFKMFFmQUthaWdDQUhOemMzTTJBZ0FnRVNBRkxRQU9RUUowUWZBYWFpZ0NBQ0FGTFFBSlFRSjBRZkFTYWlnQ0FDQUZMUUFEUVFKMFFmQWlhaWdDQUNBRkxRQUVRUUowUWZBS2FpZ0NBSE56Y3lBQ2N6WUNBQ0FLSUFVdEFBMUJBblJCOEJKcUtBSUFJQVZCQ0dvaUFTMEFBRUVDZEVId0Ntb29BZ0FnQlMwQUFrRUNkRUh3R21vb0FnQWdCUzBBQjBFQ2RFSHdJbW9vQWdCemMzTWdCSE0yQWdBZ0V5QU1LQUlBSUFVdEFBeEJBblJCOEFwcUtBSUFJQVZCQzJvaUFpMEFBRUVDZEVId0ltb29BZ0FnQlMwQUFVRUNkRUh3RW1vb0FnQWdCUzBBQmtFQ2RFSHdHbW9vQWdCemMzTnpOZ0lBSUFVZ0RTa0RBQ0FMS1FNQWhUY0RBQ0FCSUFvcEF3QWdDU2tEQUlVaW5nRTNBd0FnQWlDZUFVSVlpS2NpQVVHUXBoMGduZ0ZDRzRpblFRWnhJQUZCQVhGeVFRRjBka0V3Y1hNNkFBQWdFQ0FOS1FNQUlwNEJRdi8vLy84UGd5S2RBU0FESUEwb0FnQkI4UC8vQUhGcUlnRXBBd0Fpb0FGQy8vLy8vdytESXFFQmZpS2lBVUlnaUNDaEFTQ2VBVUlnaUNLZUFYNThJcUVCUXYvLy8vOFBneUNkQVNDZ0FVSWdpQ0tkQVg1OElxQUJRaUNJSUowQklKNEJmaUNoQVVJZ2lIeDhJcDBCTndNQUlCSWdvZ0ZDLy8vLy93K0RJS0FCUWlDR2hDS2VBVGNEQUNDZUFTQUlLUU1BZkNHZUFTQVBJSjBCSUE4cEF3QjhJcUFCSUFFcEF3Q0ZJcDBCTndNQUlBZ2duZ0VnQVVFSWFpSUNLUU1BaFNLaEFUY0RBQ0FCSUtBQk53TUFJQUlnbmdFZ253R0ZOd01BSUFzZ0F5Q2RBYWNpQWtIdy8vOEFjV29pQVMwQUQwRUNkRUh3SW1vb0FnQWdBUzBBQ2tFQ2RFSHdHbW9vQWdBZ0FTMEFCVUVDZEVId0Vtb29BZ0FnQWlBQkxRQUFRUUowUWZBS2FpZ0NBSE56YzNNMkFnQWdKU0NkQVVJZ2lLY2dBUzBBRGtFQ2RFSHdHbW9vQWdBZ0FTMEFDVUVDZEVId0Vtb29BZ0FnQVMwQUEwRUNkRUh3SW1vb0FnQWdBUzBBQkVFQ2RFSHdDbW9vQWdCemMzTnpOZ0lBSUFrZ29RR25JQUV0QUExQkFuUkI4QkpxS0FJQUlBRkJDR29pQWkwQUFFRUNkRUh3Q21vb0FnQWdBUzBBQWtFQ2RFSHdHbW9vQWdBZ0FTMEFCMEVDZEVId0ltb29BZ0J6YzNOek5nSUFJQlFnRENnQ0FDQUJMUUFNUVFKMFFmQUthaWdDQUNBQlFRdHFJZ1F0QUFCQkFuUkI4Q0pxS0FJQUlBRXRBQUZCQW5SQjhCSnFLQUlBSUFFdEFBWkJBblJCOEJwcUtBSUFjM056Y3pZQ0FDQUJJQXNwQXdBZ0RTa0RBSVUzQXdBZ0FpQUpLUU1BSUFvcEF3Q0ZJcDRCTndNQUlBUWduZ0ZDR0lpbklnRkJrS1lkSUo0QlFodUlwMEVHY1NBQlFRRnhja0VCZEhaQk1IRnpPZ0FBSUJBZ0N5a0RBQ0tlQVVMLy8vLy9ENE1pblFFZ0F5QUxLQUlBUWZELy93QnhhaUlCS1FNQUlxQUJRdi8vLy84UGd5S2hBWDRpb2dGQ0lJZ2dvUUVnbmdGQ0lJZ2luZ0YrZkNLaEFVTC8vLy8vRDRNZ25RRWdvQUZDSUlnaW5RRitmQ0tnQVVJZ2lDQ2RBU0NlQVg0Z29RRkNJSWg4ZkNLZEFUY0RBQ0FTSUtJQlF2Ly8vLzhQZ3lDZ0FVSWdob1FpbmdFM0F3QWduZ0VnQ0NrREFId2huZ0VnRHlDZEFTQVBLUU1BZkNLZ0FTQUJLUU1BaFNLZEFUY0RBQ0FJSUo0QklBRkJDR29pQWlrREFJVWlvUUUzQXdBZ0FTQ2dBVGNEQUNBQ0lKNEJJSjhCaFRjREFDQ2RBYWNoQVNDZEFVSWdpS2NoQWlDaEFhY2hCQ0FPUVFGcUlnNUJnSUFRUncwQUN3VWdBMEdJZzRBQmFpRVFJQU5COElLQUFXb2hDaUFEUWRTQ2dBRnFJWmdCSUFOQjlJS0FBV29obVFFZ0EwSDRnb0FCYWlFTUlBTkIzSUtBQVdvaEpTQURRZnlDZ0FGcUlab0JJQU5Ca0lPQUFXb2hEU0FEUVppRGdBRnFJUTRnQTBIa2dvQUJhaUdiQVNBRFFleUNnQUZxSVp3QlFRQWhCQ0FEUVlDRGdBRnFJaElwQXdBaG53RURRQ0FESUFGQjhQLy9BSEVpQlVFUWMyb2lFU2tEQUNHZ0FTQVJRUWhxSWhNcEF3QWhvUUVnRVNBRElBVkJNSE5xSWhFcEF3QWdud0Y4TndNQUlCTWdFVUVJYWlJVEtRTUFJQkFwQXdCOE53TUFJQkVnQXlBRlFTQnphaUlSS1FNQUlBOHBBd0I4TndNQUlCTWdDQ2tEQUNLZkFTQVJRUWhxSWhNcEF3QjhOd01BSUJFZ29BRWdDeWtEQUh3M0F3QWdFeUNoQVNBSktRTUFmRGNEQUNBS0lBTWdCV29pQlMwQUQwRUNkRUh3SW1vb0FnQWdCUzBBQ2tFQ2RFSHdHbW9vQWdBZ0JTMEFCVUVDZEVId0Vtb29BZ0FnQVNBRkxRQUFRUUowUWZBS2FpZ0NBSE56YzNNaUFUWUNBQ0NaQVNBRkxRQU9RUUowUWZBYWFpZ0NBQ0FGTFFBSlFRSjBRZkFTYWlnQ0FDQUZMUUFEUVFKMFFmQWlhaWdDQUNBRkxRQUVRUUowUWZBS2FpZ0NBSE56Y3lBQ2N6WUNBQ0FNSUo4QnB5QUZMUUFOUVFKMFFmQVNhaWdDQUNBRlFRaHFJZ0l0QUFCQkFuUkI4QXBxS0FJQUlBVXRBQUpCQW5SQjhCcHFLQUlBSUFVdEFBZEJBblJCOENKcUtBSUFjM056Y3pZQ0FDQ2FBU0FsS0FJQUlBVXRBQXhCQW5SQjhBcHFLQUlBSUFVdEFBdEJBblJCOENKcUtBSUFJQVV0QUFGQkFuUkI4QkpxS0FJQUlBVXRBQVpCQW5SQjhCcHFLQUlBYzNOemN6WUNBQ0FGSUFvcEF3QWdDeWtEQUlVM0F3QWdBaUFNS1FNQUlBa3BBd0NGTndNQUlBTWdBVUh3Ly84QWNTSUZhaUlCS1FBQUlKMEJJSjRCUWlDR2hZVWhuUUVnQVNDZEFUY0FBQ0FNS1FNQUlxQUJJQW9wQXdBaW53RWduZ0ZDQVlaOHAwR0JnSUNBZUhLdElwNEJFQm9pb1FGQy8vLy8vdytESUtBQklKNEJJS0VCZm4xQ0lJYUVJYUFCSUo4QklLQUJmQ0toQWJwRUFBQUFBQUFBOEVPZ24wUUFBQUFBQUFBQVFLSkVBQUFBQUFBQUFNS2dFQmtpbmdGQ0FZZ2lvZ0Vnb2dFZ25nRkNBWU1pcFFGOGZpQ2VBVUlnaG53aG93RWdEU0NmQVVMLy8vLy9ENE1pcEFFZ25RRkMvLy8vL3crRElxWUJmaUtuQVVJZ2lDQ21BU0NmQVVJZ2lDS2ZBWDU4SXFZQlF2Ly8vLzhQZ3lDa0FTQ2RBVUlnaUNLZEFYNThJcVFCUWlDSUlKMEJJSjhCZmlDbUFVSWdpSHg4SXAwQk53TUFJQTRncHdGQy8vLy8vdytESUtRQlFpQ0doRGNEQUNBRElBVkJFSE5xSWdJZ25RRWdBaWtEQUlVM0F3QWdBa0VJYWlJUklBNHBBd0FnRVNrREFJVTNBd0FnRFNBRElBVkJJSE5xSWhNcEF3QWdEU2tEQUlVM0F3QWdEaUFUUVFocUloUXBBd0FnRGlrREFJVTNBd0FnQWlrREFDR2RBU0FSS1FNQUlaOEJJQUlnQXlBRlFUQnphaUlDS1FNQUlCSXBBd0I4TndNQUlCRWdBa0VJYWlJRktRTUFJQkFwQXdCOE53TUFJQUlnRXlrREFDQVBLUU1BZkRjREFDQUZJQlFwQXdBZ0NDa0RBSHczQXdBZ0V5Q2RBU0FMS1FNQWZEY0RBQ0FVSUo4QklBa3BBd0I4TndNQUlBNHBBd0FnQ0NrREFId2huUUVnRHlBTktRTUFJQThwQXdCOElwOEJJQUVwQXdDRklxUUJOd01BSUFnZ25RRWdBVUVJYWlJQ0tRTUFoVGNEQUNBQklKOEJOd01BSUFJZ25RRTNBd0FnRWlBTEtRTUFJcDBCTndNQUlCQWdDU2tEQURjREFDQURJS1FCcHlJRlFmRC8vd0J4SWdGQkVITnFJZ0lwQXdBaG53RWdBa0VJYWlJUktRTUFJYVFCSUFJZ25RRWdBeUFCUVRCemFpSUNLUU1BZkRjREFDQVJJQUpCQ0dvaUVTa0RBQ0FRS1FNQWZEY0RBQ0FDSUFNZ0FVRWdjMm9pQWlrREFDQVBLUU1BZkRjREFDQVJJQWdwQXdBaW5RRWdBa0VJYWlJUktRTUFmRGNEQUNBQ0lKOEJJQW9wQXdCOE53TUFJQkVncEFFZ0RDa0RBSHczQXdBZ0N5QUJJQU5xSWdFdEFBOUJBblJCOENKcUtBSUFJQUV0QUFwQkFuUkI4QnBxS0FJQUlBRXRBQVZCQW5SQjhCSnFLQUlBSUFVZ0FTMEFBRUVDZEVId0Ntb29BZ0J6YzNOeklnSTJBZ0FnbXdFZ21BRW9BZ0FnQVMwQURrRUNkRUh3R21vb0FnQWdBUzBBQ1VFQ2RFSHdFbW9vQWdBZ0FTMEFBMEVDZEVId0ltb29BZ0FnQVMwQUJFRUNkRUh3Q21vb0FnQnpjM056TmdJQUlBa2duUUduSUFFdEFBMUJBblJCOEJKcUtBSUFJQUZCQ0dvaUJTMEFBRUVDZEVId0Ntb29BZ0FnQVMwQUFrRUNkRUh3R21vb0FnQWdBUzBBQjBFQ2RFSHdJbW9vQWdCemMzTnpOZ0lBSUp3QklDVW9BZ0FnQVMwQURFRUNkRUh3Q21vb0FnQWdBUzBBQzBFQ2RFSHdJbW9vQWdBZ0FTMEFBVUVDZEVId0Vtb29BZ0FnQVMwQUJrRUNkRUh3R21vb0FnQnpjM056TmdJQUlBRWdDeWtEQUNBS0tRTUFoVGNEQUNBRklBa3BBd0FnRENrREFJVTNBd0FnQXlBQ1FmRC8vd0J4SWdWcUlnRXBBQUFnb0FFZ25nRWdvd0VncFFGOElLRUJWa0VmZEVFZmRTQ2pBVUtBZ0lDQUVId2dvUUVnb2dGOVZHcXNmQ0tlQVVJZ2hvV0ZJWjhCSUFFZ253RTNBQUFnQ1NrREFDS2RBU0FMS1FNQUlxQUJJSjRCUWdHR2ZLZEJnWUNBZ0hoeXJTS2VBUkFhSXFFQlF2Ly8vLzhQZ3lDZEFTQ2VBU0NoQVg1OVFpQ0doQ0dkQVNDZEFTQ2dBWHdpb1FHNlJBQUFBQUFBQVBCRG9KOUVBQUFBQUFBQUFFQ2lSQUFBQUFBQUFBRENvQkFaSXA0QlFnR0lJcUlCSUtJQklKNEJRZ0dESXFVQmZINGduZ0ZDSUlaOElhTUJJSjRCSUtNQklLVUJmQ0NoQVZaQkgzUkJIM1Vnb3dGQ2dJQ0FnQkI4SUtFQklLSUJmVlJxckh3aG5nRWdEU0NnQVVMLy8vLy9ENE1pb1FFZ253RkMvLy8vL3crRElxSUJmaUtqQVVJZ2lDQ2lBU0NnQVVJZ2lDS2dBWDU4SXFJQlF2Ly8vLzhQZ3lDaEFTQ2ZBVUlnaUNLZkFYNThJcUVCUWlDSUlKOEJJS0FCZmlDaUFVSWdpSHg4SXA4Qk53TUFJQTRnb3dGQy8vLy8vdytESUtFQlFpQ0doRGNEQUNBRElBVkJFSE5xSWdJZ253RWdBaWtEQUlVM0F3QWdBa0VJYWlJUklBNHBBd0FnRVNrREFJVTNBd0FnRFNBRElBVkJJSE5xSWhNcEF3QWdEU2tEQUlVM0F3QWdEaUFUUVFocUloUXBBd0FnRGlrREFJVTNBd0FnQWlrREFDR2ZBU0FSS1FNQUlhQUJJQUlnQXlBRlFUQnphaUlDS1FNQUlCSXBBd0I4TndNQUlCRWdBa0VJYWlJRktRTUFJQkFwQXdCOE53TUFJQUlnRXlrREFDQVBLUU1BZkRjREFDQUZJQlFwQXdBZ0NDa0RBSHczQXdBZ0V5Q2ZBU0FLS1FNQWZEY0RBQ0FVSUtBQklBd3BBd0I4TndNQUlBNHBBd0FnQ0NrREFId2hud0VnRHlBTktRTUFJQThwQXdCOElxRUJJQUVwQXdDRklxQUJOd01BSUFnZ253RWdBVUVJYWlJQ0tRTUFoVGNEQUNBQklLRUJOd01BSUFJZ253RTNBd0FnRWlBS0tRTUFJcDhCTndNQUlCQWdEQ2tEQURjREFDQ2dBYWNoQVNDZ0FVSWdpS2NoQWlBRVFRRnFJZ1JCZ0lBUVJ3MEFDd3NGSUFOQjhJS0FBV29oRFNBRFFmU0NnQUZxSVJFZ0EwSDRnb0FCYWlFS0lBTkIzSUtBQVdvaERDQURRZnlDZ0FGcUlSTWdBMEdRZzRBQmFpRVFJQU5CbUlPQUFXb2hFaUFEUWVTQ2dBRnFJU1VnQTBIc2dvQUJhaUVVUVFBaERpQUZJUVFEUUNBTklBTWdBVUh3Ly84QWNXb2lCUzBBRDBFQ2RFSHdJbW9vQWdBZ0JTMEFDa0VDZEVId0dtb29BZ0FnQlMwQUJVRUNkRUh3RW1vb0FnQWdBU0FGTFFBQVFRSjBRZkFLYWlnQ0FITnpjM01pQVRZQ0FDQVJJQVV0QUE1QkFuUkI4QnBxS0FJQUlBVXRBQWxCQW5SQjhCSnFLQUlBSUFVdEFBTkJBblJCOENKcUtBSUFJQVV0QUFSQkFuUkI4QXBxS0FJQWMzTnpJQUp6TmdJQUlBb2dCUzBBRFVFQ2RFSHdFbW9vQWdBZ0JVRUlhaUlDTFFBQVFRSjBRZkFLYWlnQ0FDQUZMUUFDUVFKMFFmQWFhaWdDQUNBRkxRQUhRUUowUWZBaWFpZ0NBSE56Y3lBRWN6WUNBQ0FUSUF3b0FnQWdCUzBBREVFQ2RFSHdDbW9vQWdBZ0JTMEFDMEVDZEVId0ltb29BZ0FnQlMwQUFVRUNkRUh3RW1vb0FnQWdCUzBBQmtFQ2RFSHdHbW9vQWdCemMzTnpOZ0lBSUFVZ0RTa0RBQ0FMS1FNQWhUY0RBQ0FDSUFvcEF3QWdDU2tEQUlVM0F3QWdEU2tEQUNLZEFVTC8vLy8vRDRNaW53RWdBeUFCUWZELy93QnhhaUlCS1FNQUlxQUJRdi8vLy84UGd5S2hBWDRobmdFZ0VDQ2dBVUlnaUNLZ0FTQ2ZBWDRnb1FFZ25RRkNJSWdpblFGK0lKNEJRaUNJZkNLaEFVTC8vLy8vRDROOElwOEJRaUNJSUowQklLQUJmaUNoQVVJZ2lIeDhJcDBCTndNQUlCSWduZ0ZDLy8vLy93K0RJSjhCUWlDR2hDS2VBVGNEQUNDZUFTQUlLUU1BZkNHZUFTQVBJSjBCSUE4cEF3QjhJcDhCSUFFcEF3Q0ZJcDBCTndNQUlBZ2duZ0VnQVVFSWFpSUNLUU1BaFNLZ0FUY0RBQ0FCSUo4Qk53TUFJQUlnbmdFM0F3QWdDeUFESUowQnB5SUNRZkQvL3dCeGFpSUJMUUFQUVFKMFFmQWlhaWdDQUNBQkxRQUtRUUowUWZBYWFpZ0NBQ0FCTFFBRlFRSjBRZkFTYWlnQ0FDQUNJQUV0QUFCQkFuUkI4QXBxS0FJQWMzTnpjeUlDTmdJQUlDVWduUUZDSUlpbklBRXRBQTVCQW5SQjhCcHFLQUlBSUFFdEFBbEJBblJCOEJKcUtBSUFJQUV0QUFOQkFuUkI4Q0pxS0FJQUlBRXRBQVJCQW5SQjhBcHFLQUlBYzNOemN6WUNBQ0FKSUtBQnB5QUJMUUFOUVFKMFFmQVNhaWdDQUNBQlFRaHFJZ1F0QUFCQkFuUkI4QXBxS0FJQUlBRXRBQUpCQW5SQjhCcHFLQUlBSUFFdEFBZEJBblJCOENKcUtBSUFjM056Y3pZQ0FDQVVJQXdvQWdBZ0FTMEFERUVDZEVId0Ntb29BZ0FnQVMwQUMwRUNkRUh3SW1vb0FnQWdBUzBBQVVFQ2RFSHdFbW9vQWdBZ0FTMEFCa0VDZEVId0dtb29BZ0J6YzNOek5nSUFJQUVnQ3lrREFDQU5LUU1BaFRjREFDQUVJQWtwQXdBZ0Npa0RBSVUzQXdBZ0VDQUxLUU1BSXA0QlF2Ly8vLzhQZ3lLZEFTQURJQUpCOFAvL0FIRnFJZ0VwQXdBaW53RkMvLy8vL3crRElxQUJmaUtoQVVJZ2lDQ2dBU0NlQVVJZ2lDS2VBWDU4SXFBQlF2Ly8vLzhQZ3lDZEFTQ2ZBVUlnaUNLZEFYNThJcDhCUWlDSUlKMEJJSjRCZmlDZ0FVSWdpSHg4SXAwQk53TUFJQklnb1FGQy8vLy8vdytESUo4QlFpQ0doQ0tlQVRjREFDQ2VBU0FJS1FNQWZDR2VBU0FQSUowQklBOHBBd0I4SXA4QklBRXBBd0NGSXAwQk53TUFJQWdnbmdFZ0FVRUlhaUlDS1FNQWhTS2dBVGNEQUNBQklKOEJOd01BSUFJZ25nRTNBd0FnblFHbklRRWduUUZDSUlpbklRSWdvQUduSVFRZ0RrRUJhaUlPUVlDQUVFY05BQXNMSUFZZ0J5a0RBRGNEQUNBR0lBY3BBd2czQXdnZ0JpQUhLUU1RTndNUUlBWWdCeWtER0RjREdDQUdJQWNwQXlBM0F5QWdCaUFIS1FNb053TW9JQVlnQnlrRE1EY0RNQ0FHSUFjcEF6ZzNBemdnQmtGQWF5QUhRVUJyS1FNQU53TUFJQVlnQnlrRFNEY0RTQ0FHSUFjcEExQTNBMUFnQmlBSEtRTllOd05ZSUFZZ0J5a0RZRGNEWUNBR0lBY3BBMmczQTJnZ0JpQUhLUU53TndOd0lBWWdCeWtEZURjRGVDQVZFQlVnRlJBV0lnRTJBZ0FnQVNDWEFSQVhRUUFoQVFOQUlBWWdBU0FEYWlJQ0tRTUFJQVlwQXdDRklwMEJOd01BSUJZZ0Fpa0RDQ0FXS1FNQWhTS2VBVGNEQUNBWElBTWdBVUVRY21vaUFpa0RBQ0FYS1FNQWhUY0RBQ0FZSUFJcEF3Z2dHQ2tEQUlVM0F3QWdHU0FESUFGQklISnFJZ0lwQXdBZ0dTa0RBSVUzQXdBZ0dpQUNLUU1JSUJvcEF3Q0ZOd01BSUJzZ0F5QUJRVEJ5YWlJQ0tRTUFJQnNwQXdDRk53TUFJQndnQWlrRENDQWNLUU1BaFRjREFDQWRJQU1nQVVIQUFISnFJZ0lwQXdBZ0hTa0RBSVUzQXdBZ0hpQUNLUU1JSUI0cEF3Q0ZOd01BSUI4Z0F5QUJRZEFBY21vaUFpa0RBQ0FmS1FNQWhUY0RBQ0FnSUFJcEF3Z2dJQ2tEQUlVM0F3QWdJU0FESUFGQjRBQnlhaUlDS1FNQUlDRXBBd0NGTndNQUlDSWdBaWtEQ0NBaUtRTUFoVGNEQUNBaklBTWdBVUh3QUhKcUlnSXBBd0FnSXlrREFJVTNBd0FnSkNBQ0tRTUlJQ1FwQXdDRk53TUFRUUFoQWlDZUFVSVFpS2RCL3dGeElRUWduZ0ZDT0lpblFmOEJjU0VGSUowQlFoaUlwMEgvQVhFaERpQ2VBVUlZaUtkQi93RnhJUThEUUNBNExRQUFJUXNnT1MwQUFDRUlJRG90QUFBaENTQTdMUUFBSVEwZ0JpQUZRZjhCY1VFQ2RFSHdJbW9vQWdBZ0JFSC9BWEZCQW5SQjhCcHFLQUlBSUFZdEFBQkJBblJCOEFwcUtBSUFJRDB0QUFCQkFuUkI4QkpxS0FJQWMzTnpJQlVvQWdBb0FnQW9BZ3dnQWtFRWRHb2lCQ2dDQUhNMkFnQWdKeUFFUVFScUlnVW9BZ0FnUVMwQUFFRUNkRUh3R21vb0FnQWdRQzBBQUVFQ2RFSHdFbW9vQWdBZ0RrSC9BWEZCQW5SQjhDSnFLQUlBSUNjdEFBQkJBblJCOEFwcUtBSUFjM056Y3pZQ0FDQVdJQVJCQ0dvaURpZ0NBQ0JDTFFBQVFRSjBRZkFTYWlnQ0FDQVdMUUFBUVFKMFFmQUthaWdDQUNBTFFmOEJjVUVDZEVId0dtb29BZ0FnQ0VIL0FYRkJBblJCOENKcUtBSUFjM056Y3pZQ0FDQW9JQ2d0QUFCQkFuUkI4QXBxS0FJQUlBOUIvd0Z4UVFKMFFmQWlhaWdDQUNBSlFmOEJjVUVDZEVId0Vtb29BZ0FnRFVIL0FYRkJBblJCOEJwcUtBSUFjM056SUFSQkRHb2lEeWdDQUhNMkFnQWdReTBBQUNFTElFUXRBQUFoQ0NCRkxRQUFJUWtnUmkwQUFDRU5JRWN0QUFBaENpQklMUUFBSVF3Z0Z5QUVLQUlBSUVzdEFBQkJBblJCOENKcUtBSUFJRW90QUFCQkFuUkI4QnBxS0FJQUlCY3RBQUJCQW5SQjhBcHFLQUlBSUVrdEFBQkJBblJCOEJKcUtBSUFjM056Y3pZQ0FDQXBJQVVvQWdBZ1RTMEFBRUVDZEVId0dtb29BZ0FnVEMwQUFFRUNkRUh3RW1vb0FnQWdDMEgvQVhGQkFuUkI4Q0pxS0FJQUlDa3RBQUJCQW5SQjhBcHFLQUlBYzNOemN6WUNBQ0FZSUE0b0FnQWdUaTBBQUVFQ2RFSHdFbW9vQWdBZ0dDMEFBRUVDZEVId0Ntb29BZ0FnQ0VIL0FYRkJBblJCOEJwcUtBSUFJQWxCL3dGeFFRSjBRZkFpYWlnQ0FITnpjM00yQWdBZ0tpQVBLQUlBSUNvdEFBQkJBblJCOEFwcUtBSUFJQXhCL3dGeFFRSjBRZkFpYWlnQ0FDQU5RZjhCY1VFQ2RFSHdFbW9vQWdBZ0NrSC9BWEZCQW5SQjhCcHFLQUlBYzNOemN6WUNBQ0JQTFFBQUlRc2dVQzBBQUNFSUlGRXRBQUFoQ1NCU0xRQUFJUTBnVXkwQUFDRUtJRlF0QUFBaERDQVpJQVFvQWdBZ1Z5MEFBRUVDZEVId0ltb29BZ0FnVmkwQUFFRUNkRUh3R21vb0FnQWdHUzBBQUVFQ2RFSHdDbW9vQWdBZ1ZTMEFBRUVDZEVId0Vtb29BZ0J6YzNOek5nSUFJQ3NnQlNnQ0FDQlpMUUFBUVFKMFFmQWFhaWdDQUNCWUxRQUFRUUowUWZBU2FpZ0NBQ0FMUWY4QmNVRUNkRUh3SW1vb0FnQWdLeTBBQUVFQ2RFSHdDbW9vQWdCemMzTnpOZ0lBSUJvZ0RpZ0NBQ0JhTFFBQVFRSjBRZkFTYWlnQ0FDQWFMUUFBUVFKMFFmQUthaWdDQUNBSVFmOEJjVUVDZEVId0dtb29BZ0FnQ1VIL0FYRkJBblJCOENKcUtBSUFjM056Y3pZQ0FDQXNJQThvQWdBZ0xDMEFBRUVDZEVId0Ntb29BZ0FnREVIL0FYRkJBblJCOENKcUtBSUFJQTFCL3dGeFFRSjBRZkFTYWlnQ0FDQUtRZjhCY1VFQ2RFSHdHbW9vQWdCemMzTnpOZ0lBSUZzdEFBQWhDeUJjTFFBQUlRZ2dYUzBBQUNFSklGNHRBQUFoRFNCZkxRQUFJUW9nWUMwQUFDRU1JQnNnQkNnQ0FDQmpMUUFBUVFKMFFmQWlhaWdDQUNCaUxRQUFRUUowUWZBYWFpZ0NBQ0FiTFFBQVFRSjBRZkFLYWlnQ0FDQmhMUUFBUVFKMFFmQVNhaWdDQUhOemMzTTJBZ0FnTFNBRktBSUFJR1V0QUFCQkFuUkI4QnBxS0FJQUlHUXRBQUJCQW5SQjhCSnFLQUlBSUF0Qi93RnhRUUowUWZBaWFpZ0NBQ0F0TFFBQVFRSjBRZkFLYWlnQ0FITnpjM00yQWdBZ0hDQU9LQUlBSUdZdEFBQkJBblJCOEJKcUtBSUFJQnd0QUFCQkFuUkI4QXBxS0FJQUlBaEIvd0Z4UVFKMFFmQWFhaWdDQUNBSlFmOEJjVUVDZEVId0ltb29BZ0J6YzNOek5nSUFJQzRnRHlnQ0FDQXVMUUFBUVFKMFFmQUthaWdDQUNBTVFmOEJjVUVDZEVId0ltb29BZ0FnRFVIL0FYRkJBblJCOEJKcUtBSUFJQXBCL3dGeFFRSjBRZkFhYWlnQ0FITnpjM00yQWdBZ1p5MEFBQ0VMSUdndEFBQWhDQ0JwTFFBQUlRa2dhaTBBQUNFTklHc3RBQUFoQ2lCc0xRQUFJUXdnSFNBRUtBSUFJRzh0QUFCQkFuUkI4Q0pxS0FJQUlHNHRBQUJCQW5SQjhCcHFLQUlBSUIwdEFBQkJBblJCOEFwcUtBSUFJRzB0QUFCQkFuUkI4QkpxS0FJQWMzTnpjellDQUNBdklBVW9BZ0FnY1MwQUFFRUNkRUh3R21vb0FnQWdjQzBBQUVFQ2RFSHdFbW9vQWdBZ0MwSC9BWEZCQW5SQjhDSnFLQUlBSUM4dEFBQkJBblJCOEFwcUtBSUFjM056Y3pZQ0FDQWVJQTRvQWdBZ2NpMEFBRUVDZEVId0Vtb29BZ0FnSGkwQUFFRUNkRUh3Q21vb0FnQWdDRUgvQVhGQkFuUkI4QnBxS0FJQUlBbEIvd0Z4UVFKMFFmQWlhaWdDQUhOemMzTTJBZ0FnTUNBUEtBSUFJREF0QUFCQkFuUkI4QXBxS0FJQUlBeEIvd0Z4UVFKMFFmQWlhaWdDQUNBTlFmOEJjVUVDZEVId0Vtb29BZ0FnQ2tIL0FYRkJBblJCOEJwcUtBSUFjM056Y3pZQ0FDQnpMUUFBSVFzZ2RDMEFBQ0VJSUhVdEFBQWhDU0IyTFFBQUlRMGdkeTBBQUNFS0lIZ3RBQUFoRENBZklBUW9BZ0FnZXkwQUFFRUNkRUh3SW1vb0FnQWdlaTBBQUVFQ2RFSHdHbW9vQWdBZ0h5MEFBRUVDZEVId0Ntb29BZ0FnZVMwQUFFRUNkRUh3RW1vb0FnQnpjM056TmdJQUlERWdCU2dDQUNCOUxRQUFRUUowUWZBYWFpZ0NBQ0I4TFFBQVFRSjBRZkFTYWlnQ0FDQUxRZjhCY1VFQ2RFSHdJbW9vQWdBZ01TMEFBRUVDZEVId0Ntb29BZ0J6YzNOek5nSUFJQ0FnRGlnQ0FDQitMUUFBUVFKMFFmQVNhaWdDQUNBZ0xRQUFRUUowUWZBS2FpZ0NBQ0FJUWY4QmNVRUNkRUh3R21vb0FnQWdDVUgvQVhGQkFuUkI4Q0pxS0FJQWMzTnpjellDQUNBeUlBOG9BZ0FnTWkwQUFFRUNkRUh3Q21vb0FnQWdERUgvQVhGQkFuUkI4Q0pxS0FJQUlBMUIvd0Z4UVFKMFFmQVNhaWdDQUNBS1FmOEJjVUVDZEVId0dtb29BZ0J6YzNOek5nSUFJSDh0QUFBaEN5Q0FBUzBBQUNFSUlJRUJMUUFBSVFrZ2dnRXRBQUFoRFNDREFTMEFBQ0VLSUlRQkxRQUFJUXdnSVNBRUtBSUFJSWNCTFFBQVFRSjBRZkFpYWlnQ0FDQ0dBUzBBQUVFQ2RFSHdHbW9vQWdBZ0lTMEFBRUVDZEVId0Ntb29BZ0FnaFFFdEFBQkJBblJCOEJKcUtBSUFjM056Y3pZQ0FDQXpJQVVvQWdBZ2lRRXRBQUJCQW5SQjhCcHFLQUlBSUlnQkxRQUFRUUowUWZBU2FpZ0NBQ0FMUWY4QmNVRUNkRUh3SW1vb0FnQWdNeTBBQUVFQ2RFSHdDbW9vQWdCemMzTnpOZ0lBSUNJZ0RpZ0NBQ0NLQVMwQUFFRUNkRUh3RW1vb0FnQWdJaTBBQUVFQ2RFSHdDbW9vQWdBZ0NFSC9BWEZCQW5SQjhCcHFLQUlBSUFsQi93RnhRUUowUWZBaWFpZ0NBSE56YzNNMkFnQWdOQ0FQS0FJQUlEUXRBQUJCQW5SQjhBcHFLQUlBSUF4Qi93RnhRUUowUWZBaWFpZ0NBQ0FOUWY4QmNVRUNkRUh3RW1vb0FnQWdDa0gvQVhGQkFuUkI4QnBxS0FJQWMzTnpjellDQUNDTEFTMEFBQ0VMSUl3QkxRQUFJUWdnalFFdEFBQWhDU0NPQVMwQUFDRU5JSThCTFFBQUlRb2drQUV0QUFBaERDQWpJQVFvQWdBZ2t3RXRBQUJCQW5SQjhDSnFLQUlBSUpJQkxRQUFRUUowUWZBYWFpZ0NBQ0FqTFFBQVFRSjBRZkFLYWlnQ0FDQ1JBUzBBQUVFQ2RFSHdFbW9vQWdCemMzTnpOZ0lBSURVZ0JTZ0NBQ0NWQVMwQUFFRUNkRUh3R21vb0FnQWdsQUV0QUFCQkFuUkI4QkpxS0FJQUlBdEIvd0Z4UVFKMFFmQWlhaWdDQUNBMUxRQUFRUUowUWZBS2FpZ0NBSE56YzNNMkFnQWdKQ0FPS0FJQUlKWUJMUUFBUVFKMFFmQVNhaWdDQUNBa0xRQUFRUUowUWZBS2FpZ0NBQ0FJUWY4QmNVRUNkRUh3R21vb0FnQWdDVUgvQVhGQkFuUkI4Q0pxS0FJQWMzTnpjellDQUNBMklBOG9BZ0FnTmkwQUFFRUNkRUh3Q21vb0FnQWdERUgvQVhGQkFuUkI4Q0pxS0FJQUlBMUIvd0Z4UVFKMFFmQVNhaWdDQUNBS1FmOEJjVUVDZEVId0dtb29BZ0J6YzNOek5nSUFJQUpCQVdvaUFrRUtSd1JBSUQ0c0FBQWhCQ0EvTEFBQUlRVWdOeXdBQUNFT0lEd3NBQUFoRHd3QkN3c2dBVUdBQVdvaUFVR0FnSUFCU1EwQUN5QUhJQVlwQXdBM0F3QWdCeUFHS1FNSU53TUlJQWNnQmlrREVEY0RFQ0FISUFZcEF4ZzNBeGdnQnlBR0tRTWdOd01nSUFjZ0Jpa0RLRGNES0NBSElBWXBBekEzQXpBZ0J5QUdLUU00TndNNElBZEJRR3NnQmtGQWF5a0RBRGNEQUNBSElBWXBBMGczQTBnZ0J5QUdLUU5RTndOUUlBY2dCaWtEV0RjRFdDQUhJQVlwQTJBM0EyQWdCeUFHS1FOb053Tm9JQWNnQmlrRGNEY0RjQ0FISUFZcEEzZzNBM2dnSmhBWUlDWXNBQUJCQTNGQkFuUkI0QXBxS0FJQUlRRWdKa0hJQVNBQUlBRkJCM0VSQUFBZ0ZSQVZDdzBBSUFBZ0FVRURkQ0FDRUNZTERRQWdBQ0FCUVFOMElBSVFLUXNPQUNBQUlBRkJBM1N0SUFJUUt3c0VBQ01FQ3hzQkFuOGpCQ0VDSUFBakJHb2tCQ01FUVE5cVFYQnhKQVFnQWdzTHlFTURBRUdCQ0F1Z0FnRUNBd1FGQmdjSUNRb0xEQTBPRHc0S0JBZ0pEdzBHQVF3QUFnc0hCUU1MQ0F3QUJRSVBEUW9PQXdZSEFRa0VCd2tEQVEwTUN3NENCZ1VLQkFBUENBa0FCUWNDQkFvUERnRUxEQVlJQXcwQ0RBWUtBQXNJQXdRTkJ3VVBEZ0VKREFVQkR3NE5CQW9BQndZRENRSUlDdzBMQnc0TUFRTUpCUUFQQkFnR0Fnb0dEdzRKQ3dNQUNBd0NEUWNCQkFvRkNnSUlCQWNHQVFVUEN3a09Bd3dOQUFBQkFnTUVCUVlIQ0FrS0N3d05EZzhPQ2dRSUNROE5CZ0VNQUFJTEJ3VURDd2dNQUFVQ0R3MEtEZ01HQndFSkJBY0pBd0VOREFzT0FnWUZDZ1FBRHdpSWFqOGswd2lqaFM2S0dSTkVjM0FESWpnSnBOQXhueW1ZK2k0SWlXeE83T1loS0VWM0U5QTR6MlpVdm13TTZUUzNLYXpBM1ZCOHliWFZoRDhYQ1VlMWdBQkI0QW9Mb0NVQkFBQUFBZ0FBQUFNQUFBQUVBQUFBeG1OanBmaDhmSVR1ZDNlWjludDdqZi95OGczV2EydTkzbTl2c1pIRnhWUmdNREJRQWdFQkE4NW5aNmxXS3l0OTUvNytHYlhYMTJKTnE2dm03SFoybW8vS3lrVWZnb0tkaWNuSlFQcDlmWWZ2K3ZvVnNsbFo2NDVIUjhuNzhQQUxRYTJ0N0xQVTFHZGZvcUw5UmErdjZpT2NuTDlUcEtUMzVISnlscHZBd0Z0MXQ3ZkM0ZjM5SEQyVGs2NU1KaVpxYkRZMlduNC9QMEgxOS9jQ2c4ek1UMmcwTkZ4UnBhWDAwZVhsTlBueDhRamljWEdUcTlqWWMySXhNVk1xRlJVL0NBUUVESlhIeDFKR0l5TmxuY1BEWGpBWUdDZzNscGFoQ2dVRkR5K2FtclVPQndjSkpCSVNOaHVBZ0p2ZjR1STl6ZXZySms0bkoybC9zckxONm5WMW54SUpDUnNkZzRPZVdDd3NkRFFhR2k0Mkd4c3QzRzV1c3JSYVd1NWJvS0Q3cEZKUzluWTdPMDIzMXRaaGZiT3p6bElwS1h2ZDQrTStYaTh2Y1JPRWhKZW1VMVAxdWRIUmFBQUFBQURCN2Uwc1FDQWdZT1A4L0I5NXNiSEl0bHRiN2RScWFyNk55OHRHWjc2KzJYSTVPVXVVU2tyZW1FeE0xTEJZV09pRno4OUt1OURRYThYdjd5cFBxcXJsN2Z2N0ZvWkRROFdhVFUzWFpqTXpWUkdGaFpTS1JVWFA2Zm41RUFRQ0FnYitmMytCb0ZCUThIZzhQRVFsbjUrNlM2aW80NkpSVWZOZG82UCtnRUJBd0FXUGo0by9rcEt0SVoyZHZIQTRPRWp4OWZVRVk3eTgzM2UydHNHdjJ0cDFRaUVoWXlBUUVERGwvLzhhL2ZQekRyL1MwbTJCemMxTUdBd01GQ1lURXpYRDdPd3Z2bDlmNFRXWGw2S0lSRVRNTGhjWE9aUEV4RmRWcDZmeS9INStnbm85UFVmSVpHU3N1bDFkNXpJWkdTdm1jM09Wd0dCZ29CbUJnWmllVDAvUm85emNmMFFpSW1aVUtpcCtPNUNRcXd1SWlJT01Sa2JLeCs3dUtXdTR1Tk1vRkJROHA5N2VlYnhlWHVJV0N3c2RyZHZiZHR2ZzREdGtNakpXZERvNlRoUUtDaDZTU1VuYkRBWUdDa2drSkd5NFhGemtuOExDWGIzVDAyNURyS3p2eEdKaXBqbVJrYWd4bFpXazArVGtOL0o1ZVl2VjUrY3lpOGpJUTI0M04xbmFiVzIzQVkyTmpMSFYxV1NjVGs3U1NhbXA0TmhzYkxTc1ZsYjY4L1QwQjgvcTZpWEtaV1d2OUhwNmprZXVydWtRQ0FnWWI3cTYxZkI0ZUloS0pTVnZYQzR1Y2pnY0hDUlhwcWJ4YzdTMHg1Zkd4bEhMNk9nam9kM2RmT2gwZEp3K0h4OGhsa3RMM1dHOXZkd05pNHVHRDRxS2hlQndjSkI4UGo1Q2NiVzF4TXhtWnFxUVNFallCZ01EQmZmMjlnRWNEZzRTd21GaG8ybzFOVit1VjFmNWFibTUwQmVHaHBHWndjRllPaDBkSnllZW5yblo0ZUU0Ni9qNEV5dVltTE1pRVJFejBtbHB1Nm5aMlhBSGpvNkpNNVNVcHkyYm03WThIaDRpRlllSGtzbnA2U0NIenM1SnFsVlYvMUFvS0hpbDM5OTZBNHlNajFtaG9mZ0ppWW1BR2cwTkYyVy92OXJYNXVZeGhFSkN4dEJvYUxpQ1FVSERLWm1ac0ZvdExYY2VEdzhSZTdDd3k2aFVWUHh0dTd2V0xCWVdPcVhHWTJPRStIeDhtZTUzZDQzMmUzc04vL0x5dmRacmE3SGViMjlVa2NYRlVHQXdNQU1DQVFHcHptZG5mVllyS3hubi92NWl0ZGZYNWsycnE1cnNkblpGajhyS25SK0Nna0NKeWNtSCtuMTlGZS82K3V1eVdWbkpqa2RIQy92dzhPeEJyYTFuczlUVS9WK2lvdXBGcjYrL0k1eWM5MU9rcEpia2NuSmJtOERBd25XM3R4emgvZjJ1UFpPVGFrd21KbHBzTmpaQmZqOC9BdlgzOTArRHpNeGNhRFEwOUZHbHBUVFI1ZVVJK2ZIeGsrSnhjWE9yMk5oVFlqRXhQeW9WRlF3SUJBUlNsY2ZIWlVZakkxNmR3OE1vTUJnWW9UZVdsZzhLQlFXMUw1cWFDUTRIQnpZa0VoS2JHNENBUGQvaTRpYk42K3RwVGljbnpYK3lzcC9xZFhVYkVna0puaDJEZzNSWUxDd3VOQm9hTFRZYkc3TGNibTd1dEZwYSsxdWdvUGFrVWxKTmRqczdZYmZXMXM1OXM3TjdVaWtwUHQzajQzRmVMeStYRTRTRTlhWlRVMmk1MGRFQUFBQUFMTUh0N1dCQUlDQWY0L3o4eUhteHNlMjJXMXUrMUdwcVJvM0x5OWxudnI1TGNqazUzcFJLU3RTWVRFem9zRmhZU29YUHoydTcwTkFxeGUvdjVVK3FxaGJ0Ky92RmhrTkQxNXBOVFZWbU16T1VFWVdGejRwRlJSRHArZmtHQkFJQ2dmNS9mL0NnVUZCRWVEdzh1aVdmbitOTHFLanpvbEZSL2wyam84Q0FRRUNLQlkrUHJUK1NrcndobloxSWNEZzRCUEgxOWQ5anZMekJkN2EyZGEvYTJtTkNJU0V3SUJBUUd1WC8vdzc5OC9OdHY5TFNUSUhOelJRWURBdzFKaE1UTDhQczdPRytYMStpTlplWHpJaEVSRGt1RnhkWGs4VEU4bFducDRMOGZuNUhlajA5ck1oa1pPZTZYVjByTWhrWmxlWnpjNkRBWUdDWUdZR0IwWjVQVDMrajNOeG1SQ0lpZmxRcUtxczdrSkNEQzRpSXlveEdSaW5IN3U3VGE3aTRQQ2dVRkhtbjN0N2l2RjVlSFJZTEMzYXQyOXM3MitEZ1ZtUXlNazUwT2pvZUZBb0syNUpKU1FvTUJnWnNTQ1FrNUxoY1hGMmZ3c0p1dmRQVDcwT3NyS2JFWW1Lb09aR1JwREdWbFRmVDVPU0w4bmw1TXRYbjUwT0x5TWhaYmpjM3Q5cHRiWXdCalkxa3NkWFYwcHhPVHVCSnFhbTAyR3hzK3F4V1ZnZno5UFFseitycXI4cGxaWTcwZW5ycFI2NnVHQkFJQ05WdnVycUk4SGg0YjBvbEpYSmNMaTRrT0J3YzhWZW1wc2R6dExSUmw4YkdJOHZvNkh5aDNkMmM2SFIwSVQ0Zkg5MldTMHZjWWIyOWhnMkxpNFVQaW9xUTRIQndRbncrUHNSeHRiV3F6R1ptMkpCSVNBVUdBd01COS9iMkVod09EcVBDWVdGZmFqVTErYTVYVjlCcHVibVJGNGFHV0puQndTYzZIUjI1SjU2ZU9Obmg0UlByK1Bpeks1aVlNeUlSRWJ2U2FXbHdxZG5aaVFlT2pxY3psSlMyTFp1Yklqd2VIcElWaDRjZ3llbnBTWWZPenYrcVZWVjRVQ2dvZXFYZjM0OERqSXo0V2FHaGdBbUppUmNhRFEzYVpiKy9NZGZtNXNhRVFrSzQwR2hvdzRKQlFiQXBtWmwzV2kwdEVSNFBEOHQ3c0xEOHFGUlUxbTI3dXpvc0ZoWmpwY1pqZklUNGZIZVo3bmQ3amZaNzhnMy84bXU5MW10dnNkNXZ4VlNSeFRCUVlEQUJBd0lCWjZuT1p5dDlWaXYrR2VmKzEySzExNnZtVGF0Mm11eDJ5a1dQeW9LZEg0TEpRSW5KZllmNmZmb1Y3L3BaNjdKWlI4bU9SL0FMKy9DdDdFR3QxR2V6MUtMOVg2S3Y2a1d2bkw4am5LVDNVNlJ5bHVSeXdGdWJ3TGZDZGJmOUhPSDlrNjQ5a3lacVRDWTJXbXcyUDBGK1AvY0M5ZmZNVDRQTU5GeG9OS1gwVWFYbE5OSGw4UWo1OFhHVDRuSFljNnZZTVZOaU1SVS9LaFVFREFnRXgxS1Z4eU5sUmlQRFhwM0RHQ2d3R0phaE41WUZEd29GbXJVdm1nY0pEZ2NTTmlRU2dKc2JnT0k5MytMckpzM3JKMmxPSjdMTmY3SjFuK3AxQ1JzU0NZT2VIWU1zZEZnc0dpNDBHaHN0Tmh0dXN0eHVXdTYwV3FEN1c2QlM5cVJTTzAxMk85Wmh0OWF6em4yektYdFNLZU0rM2VNdmNWNHZoSmNUaEZQMXBsUFJhTG5SQUFBQUFPMHN3ZTBnWUVBZy9CL2ovTEhJZWJGYjdiWmJhcjdVYXN0R2pjdSsyV2UrT1V0eU9VcmVsRXBNMUpoTVdPaXdXTTlLaGMvUWE3dlE3eXJGNzZybFQ2cjdGdTM3UThXR1EwM1htazB6VldZemhaUVJoVVhQaWtYNUVPbjVBZ1lFQW4rQi9uOVE4S0JRUEVSNFBKKzZKWitvNDB1b1VmT2lVYVArWGFOQXdJQkFqNG9GajVLdFA1S2R2Q0dkT0Vod09QVUU4Zlc4MzJPOHRzRjN0dHAxcjlvaFkwSWhFREFnRVA4YTVmL3pEdjN6MG0yLzBzMU1nYzBNRkJnTUV6VW1FK3d2dyt4ZjRiNWZsNkkxbDBUTWlFUVhPUzRYeEZlVHhLZnlWYWQrZ3Z4K1BVZDZQV1NzeUdSZDU3cGRHU3N5R1hPVjVuTmdvTUJnZ1pnWmdVL1Juay9jZjZQY0ltWkVJaXArVkNxUXF6dVFpSU1MaUViS2pFYnVLY2Z1dU5OcnVCUThLQlRlZWFmZVh1SzhYZ3NkRmd2YmRxM2I0RHZiNERKV1pESTZUblE2Q2g0VUNrbmJra2tHQ2d3R0pHeElKRnprdUZ6Q1haL0MwMjY5MDZ6dlE2eGlwc1Jpa2FnNWtaV2tNWlhrTjlQa2VZdnllZWN5MWVmSVE0dklOMWx1TjIyMzJtMk5qQUdOMVdTeDFVN1NuRTZwNEVtcGJMVFliRmI2ckZiMEIvUDA2aVhQNm1XdnltVjZqdlI2cnVsSHJnZ1lFQWk2MVcrNmVJandlQ1Z2U2lVdWNsd3VIQ1E0SEtieFY2YTB4M08weGxHWHh1Z2p5K2pkZktIZGRKem9kQjhoUGg5TDNaWkx2ZHhodll1R0RZdUtoUStLY0pEZ2NENUNmRDYxeEhHMVpxck1aa2pZa0VnREJRWUQ5Z0gzOWc0U0hBNWhvOEpoTlY5cU5WZjVybGU1MEdtNWhwRVhoc0ZZbWNFZEp6b2RucmtubnVFNDJlSDRFK3Y0bUxNcm1CRXpJaEZwdTlKcDJYQ3AyWTZKQjQ2VXB6T1VtN1l0bXg0aVBCNkhraFdINlNESjZjNUpoODVWLzZwVktIaFFLTjk2cGQrTWp3T01vZmhab1ltQUNZa05GeG9OdjlwbHYrWXgxK1pDeG9SQ2FMalFhRUhEZ2tHWnNDbVpMWGRhTFE4UkhnK3d5M3V3VlB5b1ZMdldiYnNXT2l3V1kyT2x4bng4aFBoM2Q1bnVlM3VOOXZMeURmOXJhNzNXYjIreDNzWEZWSkV3TUZCZ0FRRURBbWRucWM0ckszMVcvdjRaNTlmWFlyV3JxK1pOZG5hYTdNcktSWStDZ3AwZnljbEFpWDE5aC9yNitoWHZXVm5yc2tkSHlZN3c4QXY3cmEzc1FkVFVaN09pb3YxZnI2L3FSWnljdnlPa3BQZFRjbktXNU1EQVc1dTN0OEoxL2YwYzRaT1RyajBtSm1wTU5qWmFiRDgvUVg3Mzl3TDF6TXhQZ3pRMFhHaWxwZlJSNWVVMDBmSHhDUGx4Y1pQaTJOaHpxekV4VTJJVkZUOHFCQVFNQ01mSFVwVWpJMlZHdzhOZW5SZ1lLRENXbHFFM0JRVVBDcHFhdFM4SEJ3a09FaEkySklDQW14dmk0ajNmNitzbXpTY25hVTZ5c3MxL2RYV2Y2Z2tKR3hLRGc1NGRMQ3gwV0JvYUxqUWJHeTAyYm02eTNGcGE3clNnb1B0YlVsTDJwRHM3VFhiVzFtRzNzN1BPZlNrcGUxTGo0ejdkTHk5eFhvU0VseE5UVS9XbTBkRm91UUFBQUFEdDdTekJJQ0JnUVB6OEgrT3hzY2g1VzF2dHRtcHF2dFRMeTBhTnZyN1paems1UzNKS1N0NlVURXpVbUZoWTZMRFB6MHFGME5CcnUrL3ZLc1dxcXVWUCsvc1c3VU5EeFlaTlRkZWFNek5WWm9XRmxCRkZSYytLK2ZrUTZRSUNCZ1IvZjRIK1VGRHdvRHc4UkhpZm43b2xxS2pqUzFGUjg2S2pvLzVkUUVEQWdJK1BpZ1dTa3EwL25aMjhJVGc0U0hEMTlRVHh2THpmWTdhMndYZmEybld2SVNGalFoQVFNQ0QvL3hybDgvTU8vZExTYmIvTnpVeUJEQXdVR0JNVE5TYnM3Qy9EWDEvaHZwZVhvalZFUk15SUZ4YzVMc1RFVjVPbnAvSlZmbjZDL0QwOVIzcGtaS3pJWFYzbnVoa1pLekp6YzVYbVlHQ2d3SUdCbUJsUFQ5R2UzTngvb3lJaVprUXFLbjVVa0pDck80aUlnd3RHUnNxTTd1NHB4N2k0MDJzVUZEd28zdDU1cDE1ZTRyd0xDeDBXMjl0MnJlRGdPOXN5TWxaa09qcE9kQW9LSGhSSlNkdVNCZ1lLRENRa2JFaGNYT1M0d3NKZG45UFRicjJzck85RFltS214SkdScURtVmxhUXg1T1EzMDNsNWkvTG41ekxWeU1oRGl6YzNXVzV0YmJmYWpZMk1BZFhWWkxGT1R0S2NxYW5nU1d4c3ROaFdWdnFzOVBRSDgrcnFKYzlsWmEvS2VucU85SzZ1NlVjSUNCZ1F1cnJWYjNoNGlQQWxKVzlLTGk1eVhCd2NKRGltcHZGWHRMVEhjOGJHVVpmbzZDUEwzZDE4b1hSMG5PZ2ZIeUUrUzB2ZGxyMjkzR0dMaTRZTmlvcUZEM0J3a09BK1BrSjh0YlhFY1dabXFzeElTTmlRQXdNRkJ2YjJBZmNPRGhJY1lXR2p3alUxWDJwWFYvbXV1Ym5RYVlhR2tSZkJ3VmlaSFIwbk9wNmV1U2ZoNFRqWitQZ1Q2NWlZc3lzUkVUTWlhV203MHRuWmNLbU9qb2tIbEpTbk01dWJ0aTBlSGlJOGg0ZVNGZW5wSU1uT3prbUhWVlgvcWlnb2VGRGYzM3Fsakl5UEE2R2grRm1KaVlBSkRRMFhHcisvMm1YbTVqSFhRa0xHaEdob3VOQkJRY09DbVptd0tTMHRkMW9QRHhFZXNMRExlMVJVL0tpN3U5WnRGaFk2TE1ZeTlLWDBsNlhHK0crWGhKZnJoUGp1WHJDWnNNZVo3dlo2akkyTTk0MzIvK2dYRFJmbERmL1dDdHk5M0xlOTF0NFd5TEhJcDdIZWtXMzhWUHc1VkpGZ2tQQlE4TUJRWUFJSEJRTUZCQU1Demk3Z3FlQ0hxYzVXMFlkOWg2eDlWdWZNS3hrcjFSbm50Uk9tWXFaeFlyVk5mREhtTVpybVRleFp0WnExdzVyc2owRFBSYzhGUlk4Zm83eWR2RDZkSDRsSndFREFDVUNKK21pU2g1THZoL3J2MEQ4VlA4VVY3N0tVSnVzbWYrdXlqczVBeVVBSHlZNzc1aDBMSGUwTCswRnVMK3d2Z3V4QnN4cXBaNmw5WjdOZlF4ejlITDc5WDBWZ0plb2xpdXBGSS9uYXY5cEd2eU5UVVFMM0FxYjNVK1JGb1phaDA1YmttM2J0VyswdFc1dDFLRjNDWGVyQ2RlSEZKQndrMlJ6aFBkVHBydWw2cmoxTThyNXF2cGhxVEd5QzdscnUyRnBzZnIzRFFjUDhRWDcxOHdZQ0J2RUM5WU5TMFUvUkhVK0RhSXprWE9UUVhHaFJWZ2YwQjZMMFVkR05YRFJjdVRUUitlRVlDQmpwQ1BuaVRLNlRydCtUNHFzK2xYT1ZUWE9yWXBmMVUvWEVVMklxYTBFL1FWUS9LZ2djRkF3VUVBd0lsV1AyVXZZeFVwVkc2YTlscjR4bFJwMS80bDdpSVY2ZE1FaDRLSGhnS0RBM3ovaWgrRzZoTndvYkVROFJGQThLTCt2RXRjUmV0UzhPRlJzSkd4d0pEaVIrV2paYVNEWWtHNjIybTdZMm14dmZtRWM5UjZVOTM4Mm5haVpxZ1NiTlR2VzdhYnVjYVU1L00wek5UUDdOZitwUXVwKzZ6NS9xRWo4dEd5MGtHeElkcExtZXVUcWVIVmpFbkhTY3NIUllORVp5TG5Kb0xqUTJRWGN0ZDJ3dE50d1J6YkxObzdMY3RKMHA3aWx6N3JSYlRSYjdGcmI3VzZTbEFmWUJVL2FrZHFIWFRkZnNUWGEzRktOaG8zVmh0MzAwU2M1SitzNTlVdCtOZTQya2UxTGRuMEkrUXFFKzNWN05rM0dUdkhGZUU3R2lsNkltbHhPbW9nVDFCRmYxcHJrQnVHaTRhV2k1QUVHSU1BdnlHOEcxZEN4MG1TekJRT0NnWUtDQVlFRGp3aUVmSWQwZjQzazZROGhEOHNoNXRwb3M3U3gzN2JiVURkbSsyYk8rMUkxSHlrYktBVWFOWnhkdzJYRE8yV2R5cjkxTDNlUkxjcFR0ZWQ1NU05NlVtUDluMUdjcjFKaXdreVBvSTN2b3NJVmIza3JlRVVxRnV3YTlhNzF0YTd2RnUzNHFmcEVxeFU5N05PVTBudVZQN2RjNkZqckJGdTJHMGxURlZCZkZocHI0WXRkaUw5ZWFacG4vVmYvTVZXWVJ0cWVVcHlLVUVZckFTczlLRDgrSzZka3dFRERKRU9rRURnb0dDZ2dHQlA1bW1JR1k1NEgrb0tzTDhBdGI4S0I0dE14RXpQQkVlQ1h3MWJyVlNyb2xTM1UrNHo2VzQwdWlyQTd6RGwvem9sMUVHZjRadXY1ZGdOdGJ3RnNid0lBRmdJV0toUXFLQlQvVDdLM3NmcTAvSWY3ZnZOOUN2Q0Z3cU5oSTJPQkljUEg5REFRTStRVHhZeGw2MzNyRzMyTjNMMWpCV083QmQ2OHduM1dmUlhXdlF1ZWxZNldFWTBJZ2NGQXdVRUF3SU9YTExob3UwUnJsL2U4U0RoTGhEdjIvQ0xkdHQyVnR2NEZWMUV6VUdVeUJHQ1E4RkR3d0ZCZ21lVjgxWDB3MUpzT3ljUzl4blMvRHZvWTQ0VGhuNGI0MXlQMmkvV3FpTllqSFQ4eFBDOHlJTG1WTE9VdGNPUzZUYXZsWCtUMVhrMVZZRGZJTnF2SlYvR0dkZ3Azamd2eDZzOGxIeWZSSGVzZ243Nnp2aTZ6SXVvZ3k1ekp2NTdveVQzMHJmV1FyTXVaQ3BKV2sxNVhtd0R2N29QdWJvTUFacXJPWXN6S1lHWjcyYU5Gb0o5R2VveUtCZjRGZGY2TkU3cXBtcW9obVJGVFdnbjZDcUg1VU85M21xK1oycXpzTGxaNkRuaGFEQzR6SlJjcEZBOHFNeDd4N0tYdVZLY2RyQlc3VGJ0YlRheWhzUkR4RVVEd29weXlMZVl0VmVhZThnVDNpUFdQaXZCWXhKeDBuTEIwV3JUZWFkcHBCZHEzYmxrMDdUYTA3MjJTZStsYjZ5RlprZEtiU1R0TG9UblFVTmlJZUlpZ2VGSkxrZHR0MlA5dVNEQkllQ2g0WUNneEkvTFJzdEpCc1NMaVBOK1EzYStTNG4zam5YZWNsWForOUQ3SnVzbUZ1dlVOcEt1OHFodTlEeERYeHB2R1Rwc1E1MnVPbzQzS29PVEhHOTZUM1lxUXgwNHBaTjFtOU45UHlkSWFMaHYrTDh0V0RWakpXc1RMVmkwN0ZROFVOUTR0dWhldFo2OXhaYnRvWXdyZkNyN2ZhQVk2UGpJOENqQUd4SGF4a3JIbGtzWnp4YmRKdEk5S2NTWEk3NER1UzRFbllIOGUweDZ1MDJLeTVGZm9WUS9xczgvb0pCd245Qi9QUG9HOGxiNFVsejhvZzZxL3FqNi9LOUgySmpvbnpqdlJIWnlEcElJN3BSeEE0S0Jnb0lCZ1Fid3RrMVdUZTFXL3djNE9JZy91SThFcjdzVyt4bEc5S1hNcVdjcGE0Y2x3NFZHd2tiSEFrT0ZkZkNQRUlydkZYY3lGU3gxTG14M09YWlBOUjh6VlJsOHV1WlNObGpTUExvU1dFZklSWmZLSG9WNytjdjh1YzZENWRZeUZqZkNFK2x1cDgzWHczM1paaEhuL2NmOExjWVEyY2tZYVJHb1lORDV1VWhaUWVoUS9nUzZ1UXE5dVE0SHk2eGtMRytFSjhjU1pYeEZmaXhISE1LZVdxNVlPcXpKRGpjOWh6TzlpUUJna1BCUThNQlFiMzlBTUJBL1VCOXh3cU5oSTJPQkljd2p6K28vNmZvOEpxaStGZjRkUmZhcTYrRVBrUVIvbXVhUUpyMEd2UzBHa1h2NmlScUM2UkY1bHg2RmpvS1ZpWk9sTnBKMmwwSnpvbjk5QzUwRTY1SjltUlNEaElxVGpaNjk0MUV6WE5FK3NyNWM2enpsYXpLeUozVlROVlJETWkwZ1RXdTlhL3U5S3BPWkJ3a0Vsd3FRZUhnSW1BRG9rSE04SHlwL0ptcHpNdDdNRzJ3VnEyTFR4YVppSm1lQ0k4RmJpdGtxMHFraFhKcVdBZ1lJa2d5WWRjMjBuYkZVbUhxckFhL3hwUC82cFEySWg0aUtCNFVLVXJqbnFPVVhxbEE0bUtqNG9HandOWlNoUDRFN0w0V1FtU200Q2JFb0FKR2lNNUZ6azBGeHBsRUhYYWRjcmFaZGVFVXpGVHRUSFhoTlZSeGxFVHhvVFFBOU80MDd1NDBJTGNYc05lSDhPQ0tlTExzTXRTc0NsYXc1bDNtYlIzV2g0dE14RXpQQkVlZXoxR3kwYjJ5M3VvdHgvOEgwdjhxRzBNWWRaaDJ0WnRMR0pPT2s1WU9penJtS05CTENEVDY1TE52bnVjc2tYQkhKTlJrV0RVeC9vbUFJTFdmbENLQTZRam5pWjNKcmxGNFBzYVNOUWFsSGZOdGFzbUFtc1hlbGJ3SkVJUC95K29jYU9XaVg4dVRYVWRGRWtJOTMzaVlpZDJsZmQySkkrVWg5VzJWMGVBS1d4Y1hpY3RySTROYkZHRVVNWlhCWG9QZStUVFozQWtFdXFKNDZzVDB4elhhWExWM3FMZkZmaG5lNFFWQ3JjakZWZUJxOWFRVFZxSDlrNmZUOFhEMFN0QTZwZzY0RnhGK3B3RHhkS1packtabW1ZQ2xyVHl1MU9LdFZZVUdvamJvakVEbzFwY21oa08yMEEvc2dxSHdVUVFIQVVaZ0lTZWxSMXZNK3V0WHVmTjNCQzZFNUlDdjJ0QjNIaGxGZmU3SjlBS0xJRTVONnA0VUQ4YXY5SkJBSkhUUWkxYURmYk1mcERkWXArY2tzQ1h6aGhjcHd2SEswU3MwZDlsMW1QRy9DT1hibXdEbnVDNEdpRUZSWDVFYk95bzd2RUR1MTJPWWZyOWxwZXlsSU9CbDBxT2hUZmJBekF2S21lTkxmdWZhcFdLL25PQitMaHBiSXJIY2tiQWYwSVV4ZlFWajczSFhzUjFSRytuanhHN2dGTGVkYmV1NUlpOGdyZ0FIcGltby9TTzlJOHpxYU5qRmFwZlZpVFZ0L21KdHZIdElIeGE0UDAyeXVsYUJrSXNOczRwTlVOTy9wZzlVenI1ZEhPYVM2ZlE5UjlaYjA2QmhnNmRyWUd2MkZxZnB3VUdaKzQwWW1xTEN5aSticmtYSjBkMEJ5YkdnQkEvNEtCK2I4WitTSHNOVlFxbFN2aWt3SkhqNTUrWGp2R2Voblp5Z1ZCZ2pkUitubHBCOCtXd1l2eWZIK3hBVkNCNjQrUWFBTTcweVlSUDE1VDFuZnFWMkZVdWZoRWt3MVNsVzk5eUtMMytiaWg0OVgvaUQ2WEVzZ1dKZk8vdVNkTXVSSDZUaGVzb1dYOXdYMmszc3lReFNsNkdLUEVkMXVSbHh4dDNCRkc1SU9kMC9rUG9JOVNIaW4wcDZLT1NkcFR5M2N0NkNac3cyY0VkR3pEN1c5d2I0Tm9rU1UveW5JSy9wT2U2TWJSd3YvOE5Na1FGM3ZpOFNEdXUvREpUdTlNNVJaL0R3ZUFwaTZEbHlRWDk5NjRKRDVSd05CSkNrUEUwb25HM0FlTkU3WlhwTzQ0MlR5K1lTb2hBSFdPZ2JQWVZSOEZFUzRkU3IvOSt1MHJ4NGdyR01FWnd0c1hNYm96bXBOV2tWcjFQeWdEYW5ZUkx5RDRZcm5OWHprVXdaTkd0NktiT2FCUmNKV2VqMm96eXl3N2hGalBwQmxpYWxKbWFIMkN5SU1KdmhIdlJ6cXgvb05HRkdESlpXNkdOM1JuVFVKb2N3S3FsdEVhZlBXTm41QVJydXZiS0dhc0xWdTUrSDdGNTZxa29JWFRwdmZjMU96WlI3aDFYckZwMVVOTjJPa2JDL3FOOWNBSDNOY0d2bUtUWVFuanQ3Q0NlYTJkNVFZTmpGZW82MjZqNnd6dE5Nb01zZzZkQU94OGNKMGZ6V1VEd05MY3RkcHJuUGs1czBpRlAvYmo5alRuY1YxbnZqWnNNU1N0SjY5cGJvdGRKYVBOd0RYMDdydEI2alZXRTlhWHA4T1Q0am1XZ3VLTDBOaEE3VXd5b0I1NTFQdXhha1dpVWtsYm9pRTlic0Z4VitMcThUT083TzVuemg1UjdkZHIwMW5KckhGMWtycXdvM0RTemJXdzBwVkM0S050eCtHSGk4aENOVVNyajIyUXpXZDExL0J5c3ZQRkR6aitpWjd2UlBBTG9RN0F6Q2x2S2lDbWhkWDgwR1UyMEZsTmNranVVd3c1NVRSNTVkSFhYdHU2dlArcW8xUGUrR2praFhQUitDVXdqSjFFbW95UlR1akk4MGtTakYwcHRwdFd0dFIwK3BxL3l5UWlEV1QyWWtXczhWa3o0ZktGeWhtQk5SdUkrekFodXgvWXZtRE96c2J4MlhpdldacVh2eE9ZcUJ2UzI2TDdCMURaMDdvSVZ2TzhoWS8zQlRnMzBVOGxwcDMxYXhBWllXQ1ord1JRV0J1RDZGbjZRcnowb1k1MC8wc255NHdDYjBneGZxczR3dDlRTU1IUXFVUmJ5NERLWURlc3cyT1BPK0pwTHhaNTd0ZkY1a3Y5UjVtNEVobWpUbXlOTlYrYVdaekhNNXFiekZ3cDFCYkYyZ2RrVE1tek9QQmRTaFBnRm9tTDBLOHV6ZUVjVlIvOUdWSUlqazJwSU9OOVlCMDVlWldYeS9IeUovSVpRampGd0xrVFFDOHFHOEVBSm9qQjRSMDVsb080NTBmYzRnL2RlNlRma0xEcTlJWmV5SmdFVCtHK2pSTzNSNzUvZTU0dWczeFYySlpMWlBJWDM5aExjUXI3WXAreDhxeWV3ZmxPTmZkcXFQcWplcWlYT2s3MENhZGhhOWtQOUduTUkrY0JmNzlvWFNobWxsMDFtTTB6OUlXbzF0Smd4MjBFVmNPb2VEN3Z0elZTYm10QmpvVkdYUUhMMmRaMi9rVWR2NGdFQUFBQUFBQUFBZ29BQUFBQUFBQUNLZ0FBQUFBQUFnQUNBQUlBQUFBQ0FpNEFBQUFBQUFBQUJBQUNBQUFBQUFJR0FBSUFBQUFDQUNZQUFBQUFBQUlDS0FBQUFBQUFBQUlnQUFBQUFBQUFBQ1lBQWdBQUFBQUFLQUFDQUFBQUFBSXVBQUlBQUFBQUFpd0FBQUFBQUFJQ0pnQUFBQUFBQWdBT0FBQUFBQUFDQUFvQUFBQUFBQUlDQUFBQUFBQUFBZ0FxQUFBQUFBQUFBQ2dBQWdBQUFBSUNCZ0FDQUFBQUFnSUNBQUFBQUFBQ0FBUUFBZ0FBQUFBQUlnQUNBQUFBQWdBRUFBQUFEQUFBQUJnQUFBQW9BQUFBUEFBQUFGUUFBQUJ3QUFBQWtBQUFBTFFBQUFEY0FBQUFDQUFBQURnQUFBQnNBQUFBcEFBQUFPQUFBQUFnQUFBQVpBQUFBS3dBQUFENEFBQUFTQUFBQUp3QUFBRDBBQUFBVUFBQUFMQUFBQUFvQUFBQUhBQUFBQ3dBQUFCRUFBQUFTQUFBQUF3QUFBQVVBQUFBUUFBQUFDQUFBQUJVQUFBQVlBQUFBQkFBQUFBOEFBQUFYQUFBQUV3QUFBQTBBQUFBTUFBQUFBZ0FBQUJRQUFBQU9BQUFBRmdBQUFBa0FBQUFHQUFBQUFRQUFBR044ZDN2eWEyL0ZNQUZuSy83WHEzYktnc2w5K2xsSDhLM1VvcStjcEhMQXQvMlRKalkvOTh3MHBlWHhjZGd4RlFUSEk4TVlsZ1dhQnhLQTR1c25zblVKZ3l3YUcyNWFvRkk3MXJNcDR5K0VVOUVBN1NEOHNWdHF5NzQ1U2t4WXo5RHZxdnREVFRPRlJma0NmMUE4bjZoUm8wQ1BrcDA0OWJ5MjJpRVEvL1BTelF3VDdGK1hSQmZFcDM0OVpGMFpjMkNCVDl3aUtwQ0lSdTY0Rk41ZUM5dmdNam9LU1FZa1hNTFRyR0tSbGVSNTU4ZzNiWTNWVHFsc1Z2VHFaWHF1Q0xwNEpTNGNwclRHNk4xMEgwdTlpNHB3UHJWbVNBUDJEbUUxVjdtR3dSMmU0ZmlZRVduWmpwU2JIb2ZwemxVbzM0eWhpUTIvNWtKb1Faa3REN0JVdXhZVFB0c3ZvVVRRek91cGVSb3drRFhvYjI2QlQyR2dybFhibEp1dXBHY25Lb04yM1hSZUFnYnNVV0oweE0wMnBPZUYwVG81K2Jwdnd4UDg3VE1ZdXUwK0FRSUVDQkFnUUlBYk5nPT0iOwogIHZhciBhc21qc0NvZGVGaWxlID0gIiI7CgogIGlmICghaXNEYXRhVVJJKHdhc21UZXh0RmlsZSkpIHsKICAgIHdhc21UZXh0RmlsZSA9IGxvY2F0ZUZpbGUod2FzbVRleHRGaWxlKTsKICB9CgogIGlmICghaXNEYXRhVVJJKHdhc21CaW5hcnlGaWxlKSkgewogICAgd2FzbUJpbmFyeUZpbGUgPSBsb2NhdGVGaWxlKHdhc21CaW5hcnlGaWxlKTsKICB9CgogIGlmICghaXNEYXRhVVJJKGFzbWpzQ29kZUZpbGUpKSB7CiAgICBhc21qc0NvZGVGaWxlID0gbG9jYXRlRmlsZShhc21qc0NvZGVGaWxlKTsKICB9CgogIHZhciB3YXNtUGFnZVNpemUgPSA2NCAqIDEwMjQ7CiAgdmFyIGluZm8gPSB7CiAgICAiZ2xvYmFsIjogbnVsbCwKICAgICJlbnYiOiBudWxsLAogICAgImFzbTJ3YXNtIjogYXNtMndhc21JbXBvcnRzLAogICAgInBhcmVudCI6IE1vZHVsZQogIH07CiAgdmFyIGV4cG9ydHMgPSBudWxsOwoKICBmdW5jdGlvbiBtZXJnZU1lbW9yeShuZXdCdWZmZXIpIHsKICAgIHZhciBvbGRCdWZmZXIgPSBNb2R1bGVbImJ1ZmZlciJdOwoKICAgIGlmIChuZXdCdWZmZXIuYnl0ZUxlbmd0aCA8IG9sZEJ1ZmZlci5ieXRlTGVuZ3RoKSB7CiAgICAgIGVycigidGhlIG5ldyBidWZmZXIgaW4gbWVyZ2VNZW1vcnkgaXMgc21hbGxlciB0aGFuIHRoZSBwcmV2aW91cyBvbmUuIGluIG5hdGl2ZSB3YXNtLCB3ZSBzaG91bGQgZ3JvdyBtZW1vcnkgaGVyZSIpOwogICAgfQoKICAgIHZhciBvbGRWaWV3ID0gbmV3IEludDhBcnJheShvbGRCdWZmZXIpOwogICAgdmFyIG5ld1ZpZXcgPSBuZXcgSW50OEFycmF5KG5ld0J1ZmZlcik7CiAgICBuZXdWaWV3LnNldChvbGRWaWV3KTsKICAgIHVwZGF0ZUdsb2JhbEJ1ZmZlcihuZXdCdWZmZXIpOwogICAgdXBkYXRlR2xvYmFsQnVmZmVyVmlld3MoKTsKICB9CgogIGZ1bmN0aW9uIGdldEJpbmFyeSgpIHsKICAgIHRyeSB7CiAgICAgIGlmIChNb2R1bGVbIndhc21CaW5hcnkiXSkgewogICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShNb2R1bGVbIndhc21CaW5hcnkiXSk7CiAgICAgIH0KCiAgICAgIHZhciBiaW5hcnkgPSB0cnlQYXJzZUFzRGF0YVVSSSh3YXNtQmluYXJ5RmlsZSk7CgogICAgICBpZiAoYmluYXJ5KSB7CiAgICAgICAgcmV0dXJuIGJpbmFyeTsKICAgICAgfQoKICAgICAgaWYgKE1vZHVsZVsicmVhZEJpbmFyeSJdKSB7CiAgICAgICAgcmV0dXJuIE1vZHVsZVsicmVhZEJpbmFyeSJdKHdhc21CaW5hcnlGaWxlKTsKICAgICAgfSBlbHNlIHsKICAgICAgICB0aHJvdyAiYm90aCBhc3luYyBhbmQgc3luYyBmZXRjaGluZyBvZiB0aGUgd2FzbSBmYWlsZWQiOwogICAgICB9CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgYWJvcnQoZXJyKTsKICAgIH0KICB9CgogIGZ1bmN0aW9uIGdldEJpbmFyeVByb21pc2UoKSB7CiAgICBpZiAoIU1vZHVsZVsid2FzbUJpbmFyeSJdICYmIChFTlZJUk9OTUVOVF9JU19XRUIgfHwgRU5WSVJPTk1FTlRfSVNfV09SS0VSKSAmJiB0eXBlb2YgZmV0Y2ggPT09ICJmdW5jdGlvbiIpIHsKICAgICAgcmV0dXJuIGZldGNoKHdhc21CaW5hcnlGaWxlLCB7CiAgICAgICAgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIKICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsKICAgICAgICBpZiAoIXJlc3BvbnNlWyJvayJdKSB7CiAgICAgICAgICB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArIHdhc21CaW5hcnlGaWxlICsgIiciOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHJlc3BvbnNlWyJhcnJheUJ1ZmZlciJdKCk7CiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHsKICAgICAgICByZXR1cm4gZ2V0QmluYXJ5KCk7CiAgICAgIH0pOwogICAgfQoKICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7CiAgICAgIHJlc29sdmUoZ2V0QmluYXJ5KCkpOwogICAgfSk7CiAgfQoKICBmdW5jdGlvbiBkb05hdGl2ZVdhc20oZ2xvYmFsLCBlbnYsIHByb3ZpZGVkQnVmZmVyKSB7CiAgICBpZiAoKHR5cGVvZiBXZWJBc3NlbWJseSA9PT0gInVuZGVmaW5lZCIgPyAidW5kZWZpbmVkIiA6IF90eXBlb2YoV2ViQXNzZW1ibHkpKSAhPT0gIm9iamVjdCIpIHsKICAgICAgZXJyKCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkIik7CiAgICAgIHJldHVybiBmYWxzZTsKICAgIH0KCiAgICBpZiAoIShNb2R1bGVbIndhc21NZW1vcnkiXSBpbnN0YW5jZW9mIFdlYkFzc2VtYmx5Lk1lbW9yeSkpIHsKICAgICAgZXJyKCJubyBuYXRpdmUgd2FzbSBNZW1vcnkgaW4gdXNlIik7CiAgICAgIHJldHVybiBmYWxzZTsKICAgIH0KCiAgICBlbnZbIm1lbW9yeSJdID0gTW9kdWxlWyJ3YXNtTWVtb3J5Il07CiAgICBpbmZvWyJnbG9iYWwiXSA9IHsKICAgICAgIk5hTiI6IE5hTiwKICAgICAgIkluZmluaXR5IjogSW5maW5pdHkKICAgIH07CiAgICBpbmZvWyJnbG9iYWwuTWF0aCJdID0gTWF0aDsKICAgIGluZm9bImVudiJdID0gZW52OwoKICAgIGZ1bmN0aW9uIHJlY2VpdmVJbnN0YW5jZShpbnN0YW5jZSwgbW9kdWxlKSB7CiAgICAgIGV4cG9ydHMgPSBpbnN0YW5jZS5leHBvcnRzOwogICAgICBpZiAoZXhwb3J0cy5tZW1vcnkpIG1lcmdlTWVtb3J5KGV4cG9ydHMubWVtb3J5KTsKICAgICAgTW9kdWxlWyJhc20iXSA9IGV4cG9ydHM7CiAgICAgIE1vZHVsZVsidXNpbmdXYXNtIl0gPSB0cnVlOwogICAgICByZW1vdmVSdW5EZXBlbmRlbmN5KCJ3YXNtLWluc3RhbnRpYXRlIik7CiAgICB9CgogICAgYWRkUnVuRGVwZW5kZW5jeSgid2FzbS1pbnN0YW50aWF0ZSIpOwoKICAgIGlmIChNb2R1bGVbImluc3RhbnRpYXRlV2FzbSJdKSB7CiAgICAgIHRyeSB7CiAgICAgICAgcmV0dXJuIE1vZHVsZVsiaW5zdGFudGlhdGVXYXNtIl0oaW5mbywgcmVjZWl2ZUluc3RhbmNlKTsKICAgICAgfSBjYXRjaCAoZSkgewogICAgICAgIGVycigiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogIiArIGUpOwogICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHJlY2VpdmVJbnN0YW50aWF0ZWRTb3VyY2Uob3V0cHV0KSB7CiAgICAgIHJlY2VpdmVJbnN0YW5jZShvdXRwdXRbImluc3RhbmNlIl0sIG91dHB1dFsibW9kdWxlIl0pOwogICAgfQoKICAgIGZ1bmN0aW9uIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIocmVjZWl2ZXIpIHsKICAgICAgZ2V0QmluYXJ5UHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKGJpbmFyeSkgewogICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShiaW5hcnksIGluZm8pOwogICAgICB9KS50aGVuKHJlY2VpdmVyLCBmdW5jdGlvbiAocmVhc29uKSB7CiAgICAgICAgZXJyKCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAiICsgcmVhc29uKTsKICAgICAgICBhYm9ydChyZWFzb24pOwogICAgICB9KTsKICAgIH0KCiAgICBpZiAoIU1vZHVsZVsid2FzbUJpbmFyeSJdICYmIHR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyA9PT0gImZ1bmN0aW9uIiAmJiAhaXNEYXRhVVJJKHdhc21CaW5hcnlGaWxlKSAmJiB0eXBlb2YgZmV0Y2ggPT09ICJmdW5jdGlvbiIpIHsKICAgICAgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcoZmV0Y2god2FzbUJpbmFyeUZpbGUsIHsKICAgICAgICBjcmVkZW50aWFsczogInNhbWUtb3JpZ2luIgogICAgICB9KSwgaW5mbykudGhlbihyZWNlaXZlSW5zdGFudGlhdGVkU291cmNlLCBmdW5jdGlvbiAocmVhc29uKSB7CiAgICAgICAgZXJyKCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogIiArIHJlYXNvbik7CiAgICAgICAgZXJyKCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvbiIpOwogICAgICAgIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIocmVjZWl2ZUluc3RhbnRpYXRlZFNvdXJjZSk7CiAgICAgIH0pOwogICAgfSBlbHNlIHsKICAgICAgaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihyZWNlaXZlSW5zdGFudGlhdGVkU291cmNlKTsKICAgIH0KCiAgICByZXR1cm4ge307CiAgfQoKICBNb2R1bGVbImFzbVByZWxvYWQiXSA9IE1vZHVsZVsiYXNtIl07CiAgdmFyIGFzbWpzUmVhbGxvY0J1ZmZlciA9IE1vZHVsZVsicmVhbGxvY0J1ZmZlciJdOwoKICB2YXIgd2FzbVJlYWxsb2NCdWZmZXIgPSBmdW5jdGlvbiB3YXNtUmVhbGxvY0J1ZmZlcihzaXplKSB7CiAgICB2YXIgUEFHRV9NVUxUSVBMRSA9IE1vZHVsZVsidXNpbmdXYXNtIl0gPyBXQVNNX1BBR0VfU0laRSA6IEFTTUpTX1BBR0VfU0laRTsKICAgIHNpemUgPSBhbGlnblVwKHNpemUsIFBBR0VfTVVMVElQTEUpOwogICAgdmFyIG9sZCA9IE1vZHVsZVsiYnVmZmVyIl07CiAgICB2YXIgb2xkU2l6ZSA9IG9sZC5ieXRlTGVuZ3RoOwoKICAgIGlmIChNb2R1bGVbInVzaW5nV2FzbSJdKSB7CiAgICAgIHRyeSB7CiAgICAgICAgdmFyIHJlc3VsdCA9IE1vZHVsZVsid2FzbU1lbW9yeSJdLmdyb3coKHNpemUgLSBvbGRTaXplKSAvIHdhc21QYWdlU2l6ZSk7CgogICAgICAgIGlmIChyZXN1bHQgIT09ICgtMSB8IDApKSB7CiAgICAgICAgICByZXR1cm4gTW9kdWxlWyJidWZmZXIiXSA9IE1vZHVsZVsid2FzbU1lbW9yeSJdLmJ1ZmZlcjsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgICAgfQogICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgIH0KICAgIH0KICB9OwoKICBNb2R1bGVbInJlYWxsb2NCdWZmZXIiXSA9IGZ1bmN0aW9uIChzaXplKSB7CiAgICBpZiAoZmluYWxNZXRob2QgPT09ICJhc21qcyIpIHsKICAgICAgcmV0dXJuIGFzbWpzUmVhbGxvY0J1ZmZlcihzaXplKTsKICAgIH0gZWxzZSB7CiAgICAgIHJldHVybiB3YXNtUmVhbGxvY0J1ZmZlcihzaXplKTsKICAgIH0KICB9OwoKICB2YXIgZmluYWxNZXRob2QgPSAiIjsKCiAgTW9kdWxlWyJhc20iXSA9IGZ1bmN0aW9uIChnbG9iYWwsIGVudiwgcHJvdmlkZWRCdWZmZXIpIHsKICAgIGlmICghZW52WyJ0YWJsZSJdKSB7CiAgICAgIHZhciBUQUJMRV9TSVpFID0gTW9kdWxlWyJ3YXNtVGFibGVTaXplIl07CiAgICAgIGlmIChUQUJMRV9TSVpFID09PSB1bmRlZmluZWQpIFRBQkxFX1NJWkUgPSAxMDI0OwogICAgICB2YXIgTUFYX1RBQkxFX1NJWkUgPSBNb2R1bGVbIndhc21NYXhUYWJsZVNpemUiXTsKCiAgICAgIGlmICgodHlwZW9mIFdlYkFzc2VtYmx5ID09PSAidW5kZWZpbmVkIiA/ICJ1bmRlZmluZWQiIDogX3R5cGVvZihXZWJBc3NlbWJseSkpID09PSAib2JqZWN0IiAmJiB0eXBlb2YgV2ViQXNzZW1ibHkuVGFibGUgPT09ICJmdW5jdGlvbiIpIHsKICAgICAgICBpZiAoTUFYX1RBQkxFX1NJWkUgIT09IHVuZGVmaW5lZCkgewogICAgICAgICAgZW52WyJ0YWJsZSJdID0gbmV3IFdlYkFzc2VtYmx5LlRhYmxlKHsKICAgICAgICAgICAgImluaXRpYWwiOiBUQUJMRV9TSVpFLAogICAgICAgICAgICAibWF4aW11bSI6IE1BWF9UQUJMRV9TSVpFLAogICAgICAgICAgICAiZWxlbWVudCI6ICJhbnlmdW5jIgogICAgICAgICAgfSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIGVudlsidGFibGUiXSA9IG5ldyBXZWJBc3NlbWJseS5UYWJsZSh7CiAgICAgICAgICAgICJpbml0aWFsIjogVEFCTEVfU0laRSwKICAgICAgICAgICAgZWxlbWVudDogImFueWZ1bmMiCiAgICAgICAgICB9KTsKICAgICAgICB9CiAgICAgIH0gZWxzZSB7CiAgICAgICAgZW52WyJ0YWJsZSJdID0gbmV3IEFycmF5KFRBQkxFX1NJWkUpOwogICAgICB9CgogICAgICBNb2R1bGVbIndhc21UYWJsZSJdID0gZW52WyJ0YWJsZSJdOwogICAgfQoKICAgIGlmICghZW52WyJfX21lbW9yeV9iYXNlIl0pIHsKICAgICAgZW52WyJfX21lbW9yeV9iYXNlIl0gPSBNb2R1bGVbIlNUQVRJQ19CQVNFIl07CiAgICB9CgogICAgaWYgKCFlbnZbIl9fdGFibGVfYmFzZSJdKSB7CiAgICAgIGVudlsiX190YWJsZV9iYXNlIl0gPSAwOwogICAgfQoKICAgIHZhciBleHBvcnRzOwogICAgZXhwb3J0cyA9IGRvTmF0aXZlV2FzbShnbG9iYWwsIGVudiwgcHJvdmlkZWRCdWZmZXIpOwogICAgYXNzZXJ0KGV4cG9ydHMsICJubyBiaW5hcnllbiBtZXRob2Qgc3VjY2VlZGVkLiIpOwogICAgcmV0dXJuIGV4cG9ydHM7CiAgfTsKfQoKaW50ZWdyYXRlV2FzbUpTKCk7ClNUQVRJQ19CQVNFID0gR0xPQkFMX0JBU0U7ClNUQVRJQ1RPUCA9IFNUQVRJQ19CQVNFICsgMTAyNDA7CgpfX0FUSU5JVF9fLnB1c2goKTsKCnZhciBTVEFUSUNfQlVNUCA9IDEwMjQwOwpNb2R1bGVbIlNUQVRJQ19CQVNFIl0gPSBTVEFUSUNfQkFTRTsKTW9kdWxlWyJTVEFUSUNfQlVNUCJdID0gU1RBVElDX0JVTVA7ClNUQVRJQ1RPUCArPSAxNjsKdmFyIFBST0NJTkZPID0gewogIHBwaWQ6IDEsCiAgcGlkOiA0MiwKICBzaWQ6IDQyLAogIHBnaWQ6IDQyCn07CnZhciBTWVNDQUxMUyA9IHsKICBidWZmZXJzOiBbbnVsbCwgW10sIFtdXSwKICBwcmludENoYXI6IGZ1bmN0aW9uIHByaW50Q2hhcihzdHJlYW0sIGN1cnIpIHsKICAgIHZhciBidWZmZXIgPSBTWVNDQUxMUy5idWZmZXJzW3N0cmVhbV07CiAgICBhc3NlcnQoYnVmZmVyKTsKCiAgICBpZiAoY3VyciA9PT0gMCB8fCBjdXJyID09PSAxMCkgewogICAgICAoc3RyZWFtID09PSAxID8gb3V0IDogZXJyKShVVEY4QXJyYXlUb1N0cmluZyhidWZmZXIsIDApKTsKICAgICAgYnVmZmVyLmxlbmd0aCA9IDA7CiAgICB9IGVsc2UgewogICAgICBidWZmZXIucHVzaChjdXJyKTsKICAgIH0KICB9LAogIHZhcmFyZ3M6IDAsCiAgZ2V0OiBmdW5jdGlvbiBnZXQodmFyYXJncykgewogICAgU1lTQ0FMTFMudmFyYXJncyArPSA0OwogICAgdmFyIHJldCA9IEhFQVAzMltTWVNDQUxMUy52YXJhcmdzIC0gNCA+PiAyXTsKICAgIHJldHVybiByZXQ7CiAgfSwKICBnZXRTdHI6IGZ1bmN0aW9uIGdldFN0cigpIHsKICAgIHZhciByZXQgPSBQb2ludGVyX3N0cmluZ2lmeShTWVNDQUxMUy5nZXQoKSk7CiAgICByZXR1cm4gcmV0OwogIH0sCiAgZ2V0NjQ6IGZ1bmN0aW9uIGdldDY0KCkgewogICAgdmFyIGxvdyA9IFNZU0NBTExTLmdldCgpLAogICAgICAgIGhpZ2ggPSBTWVNDQUxMUy5nZXQoKTsKICAgIGlmIChsb3cgPj0gMCkgYXNzZXJ0KGhpZ2ggPT09IDApO2Vsc2UgYXNzZXJ0KGhpZ2ggPT09IC0xKTsKICAgIHJldHVybiBsb3c7CiAgfSwKICBnZXRaZXJvOiBmdW5jdGlvbiBnZXRaZXJvKCkgewogICAgYXNzZXJ0KFNZU0NBTExTLmdldCgpID09PSAwKTsKICB9Cn07CgpmdW5jdGlvbiBfX19zeXNjYWxsMjAod2hpY2gsIHZhcmFyZ3MpIHsKICBTWVNDQUxMUy52YXJhcmdzID0gdmFyYXJnczsKCiAgdHJ5IHsKICAgIHJldHVybiBQUk9DSU5GTy5waWQ7CiAgfSBjYXRjaCAoZSkgewogICAgaWYgKHR5cGVvZiBGUyA9PT0gInVuZGVmaW5lZCIgfHwgIShlIGluc3RhbmNlb2YgRlMuRXJybm9FcnJvcikpIGFib3J0KGUpOwogICAgcmV0dXJuIC1lLmVycm5vOwogIH0KfQoKZnVuY3Rpb24gX2Z0aW1lKHApIHsKICB2YXIgbWlsbGlzID0gRGF0ZS5ub3coKTsKICBIRUFQMzJbcCA+PiAyXSA9IG1pbGxpcyAvIDFlMyB8IDA7CiAgSEVBUDE2W3AgKyA0ID4+IDFdID0gbWlsbGlzICUgMWUzOwogIEhFQVAxNltwICsgNiA+PiAxXSA9IDA7CiAgSEVBUDE2W3AgKyA4ID4+IDFdID0gMDsKICByZXR1cm4gMDsKfQoKdmFyIF9fX3RtX2N1cnJlbnQgPSBTVEFUSUNUT1A7ClNUQVRJQ1RPUCArPSA0ODsKCnZhciBfX190bV90aW1lem9uZSA9IGFsbG9jYXRlKGludEFycmF5RnJvbVN0cmluZygiR01UIiksICJpOCIsIEFMTE9DX1NUQVRJQyk7CgpmdW5jdGlvbiBfZ210aW1lX3IodGltZSwgdG1QdHIpIHsKICB2YXIgZGF0ZSA9IG5ldyBEYXRlKEhFQVAzMlt0aW1lID4+IDJdICogMWUzKTsKICBIRUFQMzJbdG1QdHIgPj4gMl0gPSBkYXRlLmdldFVUQ1NlY29uZHMoKTsKICBIRUFQMzJbdG1QdHIgKyA0ID4+IDJdID0gZGF0ZS5nZXRVVENNaW51dGVzKCk7CiAgSEVBUDMyW3RtUHRyICsgOCA+PiAyXSA9IGRhdGUuZ2V0VVRDSG91cnMoKTsKICBIRUFQMzJbdG1QdHIgKyAxMiA+PiAyXSA9IGRhdGUuZ2V0VVRDRGF0ZSgpOwogIEhFQVAzMlt0bVB0ciArIDE2ID4+IDJdID0gZGF0ZS5nZXRVVENNb250aCgpOwogIEhFQVAzMlt0bVB0ciArIDIwID4+IDJdID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpIC0gMTkwMDsKICBIRUFQMzJbdG1QdHIgKyAyNCA+PiAyXSA9IGRhdGUuZ2V0VVRDRGF5KCk7CiAgSEVBUDMyW3RtUHRyICsgMzYgPj4gMl0gPSAwOwogIEhFQVAzMlt0bVB0ciArIDMyID4+IDJdID0gMDsKICB2YXIgc3RhcnQgPSBEYXRlLlVUQyhkYXRlLmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEsIDAsIDAsIDAsIDApOwogIHZhciB5ZGF5ID0gKGRhdGUuZ2V0VGltZSgpIC0gc3RhcnQpIC8gKDFlMyAqIDYwICogNjAgKiAyNCkgfCAwOwogIEhFQVAzMlt0bVB0ciArIDI4ID4+IDJdID0geWRheTsKICBIRUFQMzJbdG1QdHIgKyA0MCA+PiAyXSA9IF9fX3RtX3RpbWV6b25lOwogIHJldHVybiB0bVB0cjsKfQoKZnVuY3Rpb24gX2dtdGltZSh0aW1lKSB7CiAgcmV0dXJuIF9nbXRpbWVfcih0aW1lLCBfX190bV9jdXJyZW50KTsKfQoKZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZyhkZXN0LCBzcmMsIG51bSkgewogIEhFQVBVOC5zZXQoSEVBUFU4LnN1YmFycmF5KHNyYywgc3JjICsgbnVtKSwgZGVzdCk7CiAgcmV0dXJuIGRlc3Q7Cn0KCmZ1bmN0aW9uIF9fX3NldEVyck5vKHZhbHVlKSB7CiAgaWYgKE1vZHVsZVsiX19fZXJybm9fbG9jYXRpb24iXSkgSEVBUDMyW01vZHVsZVsiX19fZXJybm9fbG9jYXRpb24iXSgpID4+IDJdID0gdmFsdWU7CiAgcmV0dXJuIHZhbHVlOwp9CgpEWU5BTUlDVE9QX1BUUiA9IHN0YXRpY0FsbG9jKDQpOwpTVEFDS19CQVNFID0gU1RBQ0tUT1AgPSBhbGlnbk1lbW9yeShTVEFUSUNUT1ApOwpTVEFDS19NQVggPSBTVEFDS19CQVNFICsgVE9UQUxfU1RBQ0s7CkRZTkFNSUNfQkFTRSA9IGFsaWduTWVtb3J5KFNUQUNLX01BWCk7CkhFQVAzMltEWU5BTUlDVE9QX1BUUiA+PiAyXSA9IERZTkFNSUNfQkFTRTsKc3RhdGljU2VhbGVkID0gdHJ1ZTsKdmFyIEFTU0VSVElPTlMgPSBmYWxzZTsKCmZ1bmN0aW9uIGludEFycmF5RnJvbVN0cmluZyhzdHJpbmd5LCBkb250QWRkTnVsbCwgbGVuZ3RoKSB7CiAgdmFyIGxlbiA9IGxlbmd0aCA+IDAgPyBsZW5ndGggOiBsZW5ndGhCeXRlc1VURjgoc3RyaW5neSkgKyAxOwogIHZhciB1OGFycmF5ID0gbmV3IEFycmF5KGxlbik7CiAgdmFyIG51bUJ5dGVzV3JpdHRlbiA9IHN0cmluZ1RvVVRGOEFycmF5KHN0cmluZ3ksIHU4YXJyYXksIDAsIHU4YXJyYXkubGVuZ3RoKTsKICBpZiAoZG9udEFkZE51bGwpIHU4YXJyYXkubGVuZ3RoID0gbnVtQnl0ZXNXcml0dGVuOwogIHJldHVybiB1OGFycmF5Owp9CgpmdW5jdGlvbiBpbnRBcnJheVRvU3RyaW5nKGFycmF5KSB7CiAgdmFyIHJldCA9IFtdOwoKICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7CiAgICB2YXIgY2hyID0gYXJyYXlbaV07CgogICAgaWYgKGNociA+IDI1NSkgewogICAgICBpZiAoQVNTRVJUSU9OUykgewogICAgICAgIGFzc2VydChmYWxzZSwgIkNoYXJhY3RlciBjb2RlICIgKyBjaHIgKyAiICgiICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpICsgIikgIGF0IG9mZnNldCAiICsgaSArICIgbm90IGluIDB4MDAtMHhGRi4iKTsKICAgICAgfQoKICAgICAgY2hyICY9IDI1NTsKICAgIH0KCiAgICByZXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNocikpOwogIH0KCiAgcmV0dXJuIHJldC5qb2luKCIiKTsKfQoKdmFyIGRlY29kZUJhc2U2NCA9IHR5cGVvZiBhdG9iID09PSAiZnVuY3Rpb24iID8gYXRvYiA6IGZ1bmN0aW9uIChpbnB1dCkgewogIHZhciBrZXlTdHIgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0iOwogIHZhciBvdXRwdXQgPSAiIjsKICB2YXIgY2hyMSwgY2hyMiwgY2hyMzsKICB2YXIgZW5jMSwgZW5jMiwgZW5jMywgZW5jNDsKICB2YXIgaSA9IDA7CiAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVwrXC9cPV0vZywgIiIpOwoKICBkbyB7CiAgICBlbmMxID0ga2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpOwogICAgZW5jMiA9IGtleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTsKICAgIGVuYzMgPSBrZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7CiAgICBlbmM0ID0ga2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpOwogICAgY2hyMSA9IGVuYzEgPDwgMiB8IGVuYzIgPj4gNDsKICAgIGNocjIgPSAoZW5jMiAmIDE1KSA8PCA0IHwgZW5jMyA+PiAyOwogICAgY2hyMyA9IChlbmMzICYgMykgPDwgNiB8IGVuYzQ7CiAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjEpOwoKICAgIGlmIChlbmMzICE9PSA2NCkgewogICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpOwogICAgfQoKICAgIGlmIChlbmM0ICE9PSA2NCkgewogICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpOwogICAgfQogIH0gd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpOwoKICByZXR1cm4gb3V0cHV0Owp9OwoKZnVuY3Rpb24gaW50QXJyYXlGcm9tQmFzZTY0KHMpIHsKICBpZiAodHlwZW9mIEVOVklST05NRU5UX0lTX05PREUgPT09ICJib29sZWFuIiAmJiBFTlZJUk9OTUVOVF9JU19OT0RFKSB7CiAgICB2YXIgYnVmOwoKICAgIHRyeSB7CiAgICAgIGJ1ZiA9IEJ1ZmZlci5mcm9tKHMsICJiYXNlNjQiKTsKICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgYnVmID0gbmV3IEJ1ZmZlcihzLCAiYmFzZTY0Iik7CiAgICB9CgogICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1Zi5idWZmZXIsIGJ1Zi5ieXRlT2Zmc2V0LCBidWYuYnl0ZUxlbmd0aCk7CiAgfQoKICB0cnkgewogICAgdmFyIGRlY29kZWQgPSBkZWNvZGVCYXNlNjQocyk7CiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShkZWNvZGVkLmxlbmd0aCk7CgogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWNvZGVkLmxlbmd0aDsgKytpKSB7CiAgICAgIGJ5dGVzW2ldID0gZGVjb2RlZC5jaGFyQ29kZUF0KGkpOwogICAgfQoKICAgIHJldHVybiBieXRlczsKICB9IGNhdGNoIChfKSB7CiAgICB0aHJvdyBuZXcgRXJyb3IoIkNvbnZlcnRpbmcgYmFzZTY0IHN0cmluZyB0byBieXRlcyBmYWlsZWQuIik7CiAgfQp9CgpmdW5jdGlvbiB0cnlQYXJzZUFzRGF0YVVSSShmaWxlbmFtZSkgewogIGlmICghaXNEYXRhVVJJKGZpbGVuYW1lKSkgewogICAgcmV0dXJuOwogIH0KCiAgcmV0dXJuIGludEFycmF5RnJvbUJhc2U2NChmaWxlbmFtZS5zbGljZShkYXRhVVJJUHJlZml4Lmxlbmd0aCkpOwp9CgpNb2R1bGVbIndhc21UYWJsZVNpemUiXSA9IDg7Ck1vZHVsZVsid2FzbU1heFRhYmxlU2l6ZSJdID0gODsKTW9kdWxlLmFzbUdsb2JhbEFyZyA9IHt9OwpNb2R1bGUuYXNtTGlicmFyeUFyZyA9IHsKICAiayI6IGFib3J0LAogICJqIjogZW5sYXJnZU1lbW9yeSwKICAiaSI6IGdldFRvdGFsTWVtb3J5LAogICJoIjogYWJvcnRPbkNhbm5vdEdyb3dNZW1vcnksCiAgImMiOiBfX19zZXRFcnJObywKICAiZyI6IF9fX3N5c2NhbGwyMCwKICAiZiI6IF9lbXNjcmlwdGVuX21lbWNweV9iaWcsCiAgImUiOiBfZnRpbWUsCiAgImQiOiBfZ210aW1lLAogICJhIjogRFlOQU1JQ1RPUF9QVFIsCiAgImIiOiBTVEFDS1RPUAp9Owp2YXIgYXNtID0gTW9kdWxlWyJhc20iXShNb2R1bGUuYXNtR2xvYmFsQXJnLCBNb2R1bGUuYXNtTGlicmFyeUFyZywgYnVmZmVyKTsKTW9kdWxlWyJhc20iXSA9IGFzbTsKCnZhciBfY3J5cHRvbmlnaHQgPSBNb2R1bGVbIl9jcnlwdG9uaWdodCJdID0gZnVuY3Rpb24gKCkgewogIHJldHVybiBNb2R1bGVbImFzbSJdWyJsIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKfTsKCnZhciBfbWFsbG9jID0gTW9kdWxlWyJfbWFsbG9jIl0gPSBmdW5jdGlvbiAoKSB7CiAgcmV0dXJuIE1vZHVsZVsiYXNtIl1bIm0iXS5hcHBseShudWxsLCBhcmd1bWVudHMpOwp9OwoKdmFyIHN0YWNrQWxsb2MgPSBNb2R1bGVbInN0YWNrQWxsb2MiXSA9IGZ1bmN0aW9uICgpIHsKICByZXR1cm4gTW9kdWxlWyJhc20iXVsibiJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7Cn07Cgp2YXIgX3N0YWNrUmVzdG9yZSA9IE1vZHVsZVsic3RhY2tSZXN0b3JlIl0gPSBmdW5jdGlvbiAoKSB7CiAgcmV0dXJuIE1vZHVsZVsiYXNtIl1bIm8iXS5hcHBseShudWxsLCBhcmd1bWVudHMpOwp9OwoKdmFyIF9zdGFja1NhdmUgPSBNb2R1bGVbInN0YWNrU2F2ZSJdID0gZnVuY3Rpb24gKCkgewogIHJldHVybiBNb2R1bGVbImFzbSJdWyJwIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKfTsKCk1vZHVsZVsiYXNtIl0gPSBhc207Ck1vZHVsZVsiY3dyYXAiXSA9IGN3cmFwOwoKZnVuY3Rpb24gRXhpdFN0YXR1cyhzdGF0dXMpIHsKICB0aGlzLm5hbWUgPSAiRXhpdFN0YXR1cyI7CiAgdGhpcy5tZXNzYWdlID0gIlByb2dyYW0gdGVybWluYXRlZCB3aXRoIGV4aXQoIiArIHN0YXR1cyArICIpIjsKICB0aGlzLnN0YXR1cyA9IHN0YXR1czsKfQoKRXhpdFN0YXR1cy5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTsKRXhpdFN0YXR1cy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFeGl0U3RhdHVzOwoKZGVwZW5kZW5jaWVzRnVsZmlsbGVkID0gZnVuY3Rpb24gcnVuQ2FsbGVyKCkgewogIGlmICghTW9kdWxlWyJjYWxsZWRSdW4iXSkgcnVuKCk7CiAgaWYgKCFNb2R1bGVbImNhbGxlZFJ1biJdKSBkZXBlbmRlbmNpZXNGdWxmaWxsZWQgPSBydW5DYWxsZXI7Cn07CgpmdW5jdGlvbiBydW4oYXJncykgewogIGFyZ3MgPSBhcmdzIHx8IE1vZHVsZVsiYXJndW1lbnRzIl07CgogIGlmIChydW5EZXBlbmRlbmNpZXMgPiAwKSB7CiAgICByZXR1cm47CiAgfQoKICBwcmVSdW4oKTsKICBpZiAocnVuRGVwZW5kZW5jaWVzID4gMCkgcmV0dXJuOwogIGlmIChNb2R1bGVbImNhbGxlZFJ1biJdKSByZXR1cm47CgogIGZ1bmN0aW9uIGRvUnVuKCkgewogICAgaWYgKE1vZHVsZVsiY2FsbGVkUnVuIl0pIHJldHVybjsKICAgIE1vZHVsZVsiY2FsbGVkUnVuIl0gPSB0cnVlOwogICAgaWYgKEFCT1JUKSByZXR1cm47CiAgICBlbnN1cmVJbml0UnVudGltZSgpOwogICAgcHJlTWFpbigpOwogICAgaWYgKE1vZHVsZVsib25SdW50aW1lSW5pdGlhbGl6ZWQiXSkgTW9kdWxlWyJvblJ1bnRpbWVJbml0aWFsaXplZCJdKCk7CiAgICBwb3N0UnVuKCk7CiAgfQoKICBpZiAoTW9kdWxlWyJzZXRTdGF0dXMiXSkgewogICAgTW9kdWxlWyJzZXRTdGF0dXMiXSgiUnVubmluZy4uLiIpOwogICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7CiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgewogICAgICAgIE1vZHVsZVsic2V0U3RhdHVzIl0oIiIpOwogICAgICB9LCAxKTsKICAgICAgZG9SdW4oKTsKICAgIH0sIDEpOwogIH0gZWxzZSB7CiAgICBkb1J1bigpOwogIH0KfQoKTW9kdWxlWyJydW4iXSA9IHJ1bjsKCmZ1bmN0aW9uIGFib3J0KHdoYXQpIHsKICBpZiAoTW9kdWxlWyJvbkFib3J0Il0pIHsKICAgIE1vZHVsZVsib25BYm9ydCJdKHdoYXQpOwogIH0KCiAgaWYgKHdoYXQgIT09IHVuZGVmaW5lZCkgewogICAgb3V0KHdoYXQpOwogICAgZXJyKHdoYXQpOwogICAgd2hhdCA9IEpTT04uc3RyaW5naWZ5KHdoYXQpOwogIH0gZWxzZSB7CiAgICB3aGF0ID0gIiI7CiAgfQoKICBBQk9SVCA9IHRydWU7CiAgRVhJVFNUQVRVUyA9IDE7CiAgdGhyb3cgImFib3J0KCIgKyB3aGF0ICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIjsKfQoKTW9kdWxlWyJhYm9ydCJdID0gYWJvcnQ7CgppZiAoTW9kdWxlWyJwcmVJbml0Il0pIHsKICBpZiAodHlwZW9mIE1vZHVsZVsicHJlSW5pdCJdID09ICJmdW5jdGlvbiIpIE1vZHVsZVsicHJlSW5pdCJdID0gW01vZHVsZVsicHJlSW5pdCJdXTsKCiAgd2hpbGUgKE1vZHVsZVsicHJlSW5pdCJdLmxlbmd0aCA+IDApIHsKICAgIE1vZHVsZVsicHJlSW5pdCJdLnBvcCgpKCk7CiAgfQp9CgpNb2R1bGVbIm5vRXhpdFJ1bnRpbWUiXSA9IHRydWU7CnJ1bigpOwpNb2R1bGVbInJlYWR5Il0gPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7CiAgZGVsZXRlIE1vZHVsZVsidGhlbiJdOwoKICBNb2R1bGVbIm9uQWJvcnQiXSA9IGZ1bmN0aW9uICh3aGF0KSB7CiAgICByZWplY3Qod2hhdCk7CiAgfTsKCiAgYWRkT25Qb3N0UnVuKGZ1bmN0aW9uICgpIHsKICAgIE1vZHVsZVsiY3J5cHRvbmlnaHQiXSA9IE1vZHVsZS5jd3JhcCgiY3J5cHRvbmlnaHQiLCAiIiwgW10pOwogICAgTW9kdWxlWyJNYWxsb2MiXSA9IE1vZHVsZS5fbWFsbG9jOwogICAgcmVzb2x2ZShNb2R1bGUpOwogIH0pOwp9KTs="},function(U,F,Q){"use strict";Q.r(F);var B=Q(0),R=Q.n(B),l=Q(1),V=Q.n(l);function W(U){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(U){return typeof U}:function(U){return U&&"function"==typeof Symbol&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U})(U)}!function(){try{if("object"===("undefined"==typeof WebAssembly?"undefined":W(WebAssembly))&&"function"==typeof WebAssembly.instantiate){var U=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(U instanceof WebAssembly.Module)new WebAssembly.Instance(U),WebAssembly.Instance}}catch(U){}}();importScripts(V.a);var Z=Module.cwrap("cryptonight","",[]),J=function(U,F){Z(F.byteOffset,U.byteOffset,U.byteLength,0,2),F.reverse()};onmessage=function(U){var F,Q,B=U.data,l=B.hash,V=B.targetDifficulty,W=0,Z=(500,F=function(){postMessage({cmd:"current",workNonce:W})},Q=0,function(){var U=(new Date).getTime();if(!(U-Q<500))return Q=U,F.apply(void 0,arguments)});!function(){var U=Math.log2(V),F=U=Math.ceil(U),Q=Module.HEAPU8.buffer,B=new Uint8Array(Q,Module._malloc(64),64),d=function(U,F,Q){for(var B=new Uint8Array(U,Q(F.length/2),F.length/2),R=0;R<F.length/2;R++)B[R]=parseInt(F.substr(2*R,2),16);return B}(Q,l,Module._malloc),S=new Uint8Array(Q,Module._malloc(32),32);J(d,S),B.set(S,0);var N=new DataView(Q,B.byteOffset,B.byteLength),E=Module._malloc(32),C=0;do{N.setUint32(60,W);var I=new Uint8Array(Q,E,32);J(B,I);var k=R()(I);if(k>C&&(C=k)>=F)break;W++,Z()}while(C<=F)}(),postMessage({cmd:"finished",workNonce:W})},Module.onRuntimeInitialized=function(){postMessage({cmd:"ready"})}}]);',
          n.p + 'calculateWorkNonce.worker.js'
        )
      }
    },
    function(e, t) {
      const n = (e, t) => {
        let n = []
        for (var U = 0; U < e; ++U) n.push(t(U))
        return n
      }
      e.exports = {
        generate: n,
        replicate: (e, t) => n(e, () => t),
        concat: (e, t) => e.concat(t),
        flatten: e => {
          let t = []
          for (let n = 0, U = e.length; n < U; ++n)
            for (let U = 0, r = e[n].length; U < r; ++U) t.push(e[n][U])
          return t
        },
        chunksOf: (e, t) => {
          let n = []
          for (let U = 0, r = t.length; U < r; U += e) n.push(t.slice(U, U + e))
          return n
        },
      }
    },
    function(e, t, n) {
      'use strict'
      ;(t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = n(13)),
        (t.createHash = t.Hash = n(15)),
        (t.createHmac = t.Hmac = n(50))
      var U = n(98),
        r = Object.keys(U),
        d = [
          'sha1',
          'sha224',
          'sha256',
          'sha384',
          'sha512',
          'md5',
          'rmd160',
        ].concat(r)
      t.getHashes = function() {
        return d
      }
      var i = n(53)
      ;(t.pbkdf2 = i.pbkdf2), (t.pbkdf2Sync = i.pbkdf2Sync)
      var F = n(100)
      ;(t.Cipher = F.Cipher),
        (t.createCipher = F.createCipher),
        (t.Cipheriv = F.Cipheriv),
        (t.createCipheriv = F.createCipheriv),
        (t.Decipher = F.Decipher),
        (t.createDecipher = F.createDecipher),
        (t.Decipheriv = F.Decipheriv),
        (t.createDecipheriv = F.createDecipheriv),
        (t.getCiphers = F.getCiphers),
        (t.listCiphers = F.listCiphers)
      var l = n(117)
      ;(t.DiffieHellmanGroup = l.DiffieHellmanGroup),
        (t.createDiffieHellmanGroup = l.createDiffieHellmanGroup),
        (t.getDiffieHellman = l.getDiffieHellman),
        (t.createDiffieHellman = l.createDiffieHellman),
        (t.DiffieHellman = l.DiffieHellman)
      var a = n(123)
      ;(t.createSign = a.createSign),
        (t.Sign = a.Sign),
        (t.createVerify = a.createVerify),
        (t.Verify = a.Verify),
        (t.createECDH = n(161))
      var Q = n(162)
      ;(t.publicEncrypt = Q.publicEncrypt),
        (t.privateEncrypt = Q.privateEncrypt),
        (t.publicDecrypt = Q.publicDecrypt),
        (t.privateDecrypt = Q.privateDecrypt)
      var o = n(165)
      ;(t.randomFill = o.randomFill),
        (t.randomFillSync = o.randomFillSync),
        (t.createCredentials = function() {
          throw new Error(
            [
              'sorry, createCredentials is not implemented yet',
              'we accept pull requests',
              'https://github.com/crypto-browserify/crypto-browserify',
            ].join('\n')
          )
        }),
        (t.constants = {
          DH_CHECK_P_NOT_SAFE_PRIME: 2,
          DH_CHECK_P_NOT_PRIME: 1,
          DH_UNABLE_TO_CHECK_GENERATOR: 4,
          DH_NOT_SUITABLE_GENERATOR: 8,
          NPN_ENABLED: 1,
          ALPN_ENABLED: 1,
          RSA_PKCS1_PADDING: 1,
          RSA_SSLV23_PADDING: 2,
          RSA_NO_PADDING: 3,
          RSA_PKCS1_OAEP_PADDING: 4,
          RSA_X931_PADDING: 5,
          RSA_PKCS1_PSS_PADDING: 6,
          POINT_CONVERSION_COMPRESSED: 2,
          POINT_CONVERSION_UNCOMPRESSED: 4,
          POINT_CONVERSION_HYBRID: 6,
        })
    },
    function(e, t, n) {
      'use strict'
      ;(t.byteLength = function(e) {
        var t = a(e),
          n = t[0],
          U = t[1]
        return (3 * (n + U)) / 4 - U
      }),
        (t.toByteArray = function(e) {
          for (
            var t,
              n = a(e),
              U = n[0],
              i = n[1],
              F = new d(
                (function(e, t, n) {
                  return (3 * (t + n)) / 4 - n
                })(0, U, i)
              ),
              l = 0,
              Q = i > 0 ? U - 4 : U,
              o = 0;
            o < Q;
            o += 4
          )
            (t =
              (r[e.charCodeAt(o)] << 18) |
              (r[e.charCodeAt(o + 1)] << 12) |
              (r[e.charCodeAt(o + 2)] << 6) |
              r[e.charCodeAt(o + 3)]),
              (F[l++] = (t >> 16) & 255),
              (F[l++] = (t >> 8) & 255),
              (F[l++] = 255 & t)
          return (
            2 === i &&
              ((t = (r[e.charCodeAt(o)] << 2) | (r[e.charCodeAt(o + 1)] >> 4)),
              (F[l++] = 255 & t)),
            1 === i &&
              ((t =
                (r[e.charCodeAt(o)] << 10) |
                (r[e.charCodeAt(o + 1)] << 4) |
                (r[e.charCodeAt(o + 2)] >> 2)),
              (F[l++] = (t >> 8) & 255),
              (F[l++] = 255 & t)),
            F
          )
        }),
        (t.fromByteArray = function(e) {
          for (
            var t, n = e.length, r = n % 3, d = [], i = 0, F = n - r;
            i < F;
            i += 16383
          )
            d.push(Q(e, i, i + 16383 > F ? F : i + 16383))
          return (
            1 === r
              ? ((t = e[n - 1]), d.push(U[t >> 2] + U[(t << 4) & 63] + '=='))
              : 2 === r &&
                ((t = (e[n - 2] << 8) + e[n - 1]),
                d.push(U[t >> 10] + U[(t >> 4) & 63] + U[(t << 2) & 63] + '=')),
            d.join('')
          )
        })
      for (
        var U = [],
          r = [],
          d = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          i =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          F = 0,
          l = i.length;
        F < l;
        ++F
      )
        (U[F] = i[F]), (r[i.charCodeAt(F)] = F)
      function a(e) {
        var t = e.length
        if (t % 4 > 0)
          throw new Error('Invalid string. Length must be a multiple of 4')
        var n = e.indexOf('=')
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)]
      }
      function Q(e, t, n) {
        for (var r, d, i = [], F = t; F < n; F += 3)
          (r =
            ((e[F] << 16) & 16711680) +
            ((e[F + 1] << 8) & 65280) +
            (255 & e[F + 2])),
            i.push(
              U[((d = r) >> 18) & 63] +
                U[(d >> 12) & 63] +
                U[(d >> 6) & 63] +
                U[63 & d]
            )
        return i.join('')
      }
      ;(r['-'.charCodeAt(0)] = 62), (r['_'.charCodeAt(0)] = 63)
    },
    function(e, t) {
      ;(t.read = function(e, t, n, U, r) {
        var d,
          i,
          F = 8 * r - U - 1,
          l = (1 << F) - 1,
          a = l >> 1,
          Q = -7,
          o = n ? r - 1 : 0,
          h = n ? -1 : 1,
          c = e[t + o]
        for (
          o += h, d = c & ((1 << -Q) - 1), c >>= -Q, Q += F;
          Q > 0;
          d = 256 * d + e[t + o], o += h, Q -= 8
        );
        for (
          i = d & ((1 << -Q) - 1), d >>= -Q, Q += U;
          Q > 0;
          i = 256 * i + e[t + o], o += h, Q -= 8
        );
        if (0 === d) d = 1 - a
        else {
          if (d === l) return i ? NaN : (1 / 0) * (c ? -1 : 1)
          ;(i += Math.pow(2, U)), (d -= a)
        }
        return (c ? -1 : 1) * i * Math.pow(2, d - U)
      }),
        (t.write = function(e, t, n, U, r, d) {
          var i,
            F,
            l,
            a = 8 * d - r - 1,
            Q = (1 << a) - 1,
            o = Q >> 1,
            h = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            c = U ? 0 : d - 1,
            B = U ? 1 : -1,
            s = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((F = isNaN(t) ? 1 : 0), (i = Q))
                : ((i = Math.floor(Math.log(t) / Math.LN2)),
                  t * (l = Math.pow(2, -i)) < 1 && (i--, (l *= 2)),
                  (t += i + o >= 1 ? h / l : h * Math.pow(2, 1 - o)) * l >= 2 &&
                    (i++, (l /= 2)),
                  i + o >= Q
                    ? ((F = 0), (i = Q))
                    : i + o >= 1
                    ? ((F = (t * l - 1) * Math.pow(2, r)), (i += o))
                    : ((F = t * Math.pow(2, o - 1) * Math.pow(2, r)), (i = 0)));
            r >= 8;
            e[n + c] = 255 & F, c += B, F /= 256, r -= 8
          );
          for (
            i = (i << r) | F, a += r;
            a > 0;
            e[n + c] = 255 & i, c += B, i /= 256, a -= 8
          );
          e[n + c - B] |= 128 * s
        })
    },
    function(e, t) {},
    function(e, t, n) {
      'use strict'
      var U = n(1).Buffer,
        r = n(84)
      ;(e.exports = (function() {
        function e() {
          !(function(t, n) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function')
          })(this),
            (this.head = null),
            (this.tail = null),
            (this.length = 0)
        }
        return (
          (e.prototype.push = function(e) {
            var t = { data: e, next: null }
            this.length > 0 ? (this.tail.next = t) : (this.head = t),
              (this.tail = t),
              ++this.length
          }),
          (e.prototype.unshift = function(e) {
            var t = { data: e, next: this.head }
            0 === this.length && (this.tail = t), (this.head = t), ++this.length
          }),
          (e.prototype.shift = function() {
            if (0 !== this.length) {
              var e = this.head.data
              return (
                1 === this.length
                  ? (this.head = this.tail = null)
                  : (this.head = this.head.next),
                --this.length,
                e
              )
            }
          }),
          (e.prototype.clear = function() {
            ;(this.head = this.tail = null), (this.length = 0)
          }),
          (e.prototype.join = function(e) {
            if (0 === this.length) return ''
            for (var t = this.head, n = '' + t.data; (t = t.next); )
              n += e + t.data
            return n
          }),
          (e.prototype.concat = function(e) {
            if (0 === this.length) return U.alloc(0)
            if (1 === this.length) return this.head.data
            for (
              var t, n, r = U.allocUnsafe(e >>> 0), d = this.head, i = 0;
              d;

            )
              (t = r),
                (n = i),
                d.data.copy(t, n),
                (i += d.data.length),
                (d = d.next)
            return r
          }),
          e
        )
      })()),
        r &&
          r.inspect &&
          r.inspect.custom &&
          (e.exports.prototype[r.inspect.custom] = function() {
            var e = r.inspect({ length: this.length })
            return this.constructor.name + ' ' + e
          })
    },
    function(e, t) {},
    function(e, t, n) {
      ;(function(e) {
        var U =
            (void 0 !== e && e) ||
            ('undefined' != typeof self && self) ||
            window,
          r = Function.prototype.apply
        function d(e, t) {
          ;(this._id = e), (this._clearFn = t)
        }
        ;(t.setTimeout = function() {
          return new d(r.call(setTimeout, U, arguments), clearTimeout)
        }),
          (t.setInterval = function() {
            return new d(r.call(setInterval, U, arguments), clearInterval)
          }),
          (t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
          }),
          (d.prototype.unref = d.prototype.ref = function() {}),
          (d.prototype.close = function() {
            this._clearFn.call(U, this._id)
          }),
          (t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = t)
          }),
          (t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1)
          }),
          (t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId)
            var t = e._idleTimeout
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
              }, t))
          }),
          n(86),
          (t.setImmediate =
            ('undefined' != typeof self && self.setImmediate) ||
            (void 0 !== e && e.setImmediate) ||
            (this && this.setImmediate)),
          (t.clearImmediate =
            ('undefined' != typeof self && self.clearImmediate) ||
            (void 0 !== e && e.clearImmediate) ||
            (this && this.clearImmediate))
      }.call(this, n(8)))
    },
    function(e, t, n) {
      ;(function(e, t) {
        !(function(e, n) {
          'use strict'
          if (!e.setImmediate) {
            var U,
              r,
              d,
              i,
              F,
              l = 1,
              a = {},
              Q = !1,
              o = e.document,
              h = Object.getPrototypeOf && Object.getPrototypeOf(e)
            ;(h = h && h.setTimeout ? h : e),
              '[object process]' === {}.toString.call(e.process)
                ? (U = function(e) {
                    t.nextTick(function() {
                      B(e)
                    })
                  })
                : (function() {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        n = e.onmessage
                      return (
                        (e.onmessage = function() {
                          t = !1
                        }),
                        e.postMessage('', '*'),
                        (e.onmessage = n),
                        t
                      )
                    }
                  })()
                ? ((i = 'setImmediate$' + Math.random() + '$'),
                  (F = function(t) {
                    t.source === e &&
                      'string' == typeof t.data &&
                      0 === t.data.indexOf(i) &&
                      B(+t.data.slice(i.length))
                  }),
                  e.addEventListener
                    ? e.addEventListener('message', F, !1)
                    : e.attachEvent('onmessage', F),
                  (U = function(t) {
                    e.postMessage(i + t, '*')
                  }))
                : e.MessageChannel
                ? (((d = new MessageChannel()).port1.onmessage = function(e) {
                    B(e.data)
                  }),
                  (U = function(e) {
                    d.port2.postMessage(e)
                  }))
                : o && 'onreadystatechange' in o.createElement('script')
                ? ((r = o.documentElement),
                  (U = function(e) {
                    var t = o.createElement('script')
                    ;(t.onreadystatechange = function() {
                      B(e),
                        (t.onreadystatechange = null),
                        r.removeChild(t),
                        (t = null)
                    }),
                      r.appendChild(t)
                  }))
                : (U = function(e) {
                    setTimeout(B, 0, e)
                  }),
              (h.setImmediate = function(e) {
                'function' != typeof e && (e = new Function('' + e))
                for (
                  var t = new Array(arguments.length - 1), n = 0;
                  n < t.length;
                  n++
                )
                  t[n] = arguments[n + 1]
                var r = { callback: e, args: t }
                return (a[l] = r), U(l), l++
              }),
              (h.clearImmediate = c)
          }
          function c(e) {
            delete a[e]
          }
          function B(e) {
            if (Q) setTimeout(B, 0, e)
            else {
              var t = a[e]
              if (t) {
                Q = !0
                try {
                  !(function(e) {
                    var t = e.callback,
                      U = e.args
                    switch (U.length) {
                      case 0:
                        t()
                        break
                      case 1:
                        t(U[0])
                        break
                      case 2:
                        t(U[0], U[1])
                        break
                      case 3:
                        t(U[0], U[1], U[2])
                        break
                      default:
                        t.apply(n, U)
                    }
                  })(t)
                } finally {
                  c(e), (Q = !1)
                }
              }
            }
          }
        })('undefined' == typeof self ? (void 0 === e ? this : e) : self)
      }.call(this, n(8), n(9)))
    },
    function(e, t, n) {
      ;(function(t) {
        function n(e) {
          try {
            if (!t.localStorage) return !1
          } catch (e) {
            return !1
          }
          var n = t.localStorage[e]
          return null != n && 'true' === String(n).toLowerCase()
        }
        e.exports = function(e, t) {
          if (n('noDeprecation')) return e
          var U = !1
          return function() {
            if (!U) {
              if (n('throwDeprecation')) throw new Error(t)
              n('traceDeprecation'), (U = !0)
            }
            return e.apply(this, arguments)
          }
        }
      }.call(this, n(8)))
    },
    function(e, t, n) {
      'use strict'
      e.exports = d
      var U = n(47),
        r = n(16)
      function d(e) {
        if (!(this instanceof d)) return new d(e)
        U.call(this, e)
      }
      ;(r.inherits = n(0)),
        r.inherits(d, U),
        (d.prototype._transform = function(e, t, n) {
          n(null, e)
        })
    },
    function(e, t, n) {
      e.exports = n(31)
    },
    function(e, t, n) {
      e.exports = n(12)
    },
    function(e, t, n) {
      e.exports = n(30).Transform
    },
    function(e, t, n) {
      e.exports = n(30).PassThrough
    },
    function(e, t, n) {
      var U = n(0),
        r = n(14),
        d = n(1).Buffer,
        i = [1518500249, 1859775393, -1894007588, -899497514],
        F = new Array(80)
      function l() {
        this.init(), (this._w = F), r.call(this, 64, 56)
      }
      function a(e) {
        return (e << 30) | (e >>> 2)
      }
      function Q(e, t, n, U) {
        return 0 === e
          ? (t & n) | (~t & U)
          : 2 === e
          ? (t & n) | (t & U) | (n & U)
          : t ^ n ^ U
      }
      U(l, r),
        (l.prototype.init = function() {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          )
        }),
        (l.prototype._update = function(e) {
          for (
            var t,
              n = this._w,
              U = 0 | this._a,
              r = 0 | this._b,
              d = 0 | this._c,
              F = 0 | this._d,
              l = 0 | this._e,
              o = 0;
            o < 16;
            ++o
          )
            n[o] = e.readInt32BE(4 * o)
          for (; o < 80; ++o) n[o] = n[o - 3] ^ n[o - 8] ^ n[o - 14] ^ n[o - 16]
          for (var h = 0; h < 80; ++h) {
            var c = ~~(h / 20),
              B =
                0 |
                ((((t = U) << 5) | (t >>> 27)) +
                  Q(c, r, d, F) +
                  l +
                  n[h] +
                  i[c])
            ;(l = F), (F = d), (d = a(r)), (r = U), (U = B)
          }
          ;(this._a = (U + this._a) | 0),
            (this._b = (r + this._b) | 0),
            (this._c = (d + this._c) | 0),
            (this._d = (F + this._d) | 0),
            (this._e = (l + this._e) | 0)
        }),
        (l.prototype._hash = function() {
          var e = d.allocUnsafe(20)
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          )
        }),
        (e.exports = l)
    },
    function(e, t, n) {
      var U = n(0),
        r = n(14),
        d = n(1).Buffer,
        i = [1518500249, 1859775393, -1894007588, -899497514],
        F = new Array(80)
      function l() {
        this.init(), (this._w = F), r.call(this, 64, 56)
      }
      function a(e) {
        return (e << 5) | (e >>> 27)
      }
      function Q(e) {
        return (e << 30) | (e >>> 2)
      }
      function o(e, t, n, U) {
        return 0 === e
          ? (t & n) | (~t & U)
          : 2 === e
          ? (t & n) | (t & U) | (n & U)
          : t ^ n ^ U
      }
      U(l, r),
        (l.prototype.init = function() {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          )
        }),
        (l.prototype._update = function(e) {
          for (
            var t,
              n = this._w,
              U = 0 | this._a,
              r = 0 | this._b,
              d = 0 | this._c,
              F = 0 | this._d,
              l = 0 | this._e,
              h = 0;
            h < 16;
            ++h
          )
            n[h] = e.readInt32BE(4 * h)
          for (; h < 80; ++h)
            n[h] =
              ((t = n[h - 3] ^ n[h - 8] ^ n[h - 14] ^ n[h - 16]) << 1) |
              (t >>> 31)
          for (var c = 0; c < 80; ++c) {
            var B = ~~(c / 20),
              s = (a(U) + o(B, r, d, F) + l + n[c] + i[B]) | 0
            ;(l = F), (F = d), (d = Q(r)), (r = U), (U = s)
          }
          ;(this._a = (U + this._a) | 0),
            (this._b = (r + this._b) | 0),
            (this._c = (d + this._c) | 0),
            (this._d = (F + this._d) | 0),
            (this._e = (l + this._e) | 0)
        }),
        (l.prototype._hash = function() {
          var e = d.allocUnsafe(20)
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          )
        }),
        (e.exports = l)
    },
    function(e, t, n) {
      var U = n(0),
        r = n(48),
        d = n(14),
        i = n(1).Buffer,
        F = new Array(64)
      function l() {
        this.init(), (this._w = F), d.call(this, 64, 56)
      }
      U(l, r),
        (l.prototype.init = function() {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          )
        }),
        (l.prototype._hash = function() {
          var e = i.allocUnsafe(28)
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e
          )
        }),
        (e.exports = l)
    },
    function(e, t, n) {
      var U = n(0),
        r = n(49),
        d = n(14),
        i = n(1).Buffer,
        F = new Array(160)
      function l() {
        this.init(), (this._w = F), d.call(this, 128, 112)
      }
      U(l, r),
        (l.prototype.init = function() {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          )
        }),
        (l.prototype._hash = function() {
          var e = i.allocUnsafe(48)
          function t(t, n, U) {
            e.writeInt32BE(t, U), e.writeInt32BE(n, U + 4)
          }
          return (
            t(this._ah, this._al, 0),
            t(this._bh, this._bl, 8),
            t(this._ch, this._cl, 16),
            t(this._dh, this._dl, 24),
            t(this._eh, this._el, 32),
            t(this._fh, this._fl, 40),
            e
          )
        }),
        (e.exports = l)
    },
    function(e, t, n) {
      'use strict'
      var U = n(0),
        r = n(1).Buffer,
        d = n(10),
        i = r.alloc(128),
        F = 64
      function l(e, t) {
        d.call(this, 'digest'),
          'string' == typeof t && (t = r.from(t)),
          (this._alg = e),
          (this._key = t),
          t.length > F ? (t = e(t)) : t.length < F && (t = r.concat([t, i], F))
        for (
          var n = (this._ipad = r.allocUnsafe(F)),
            U = (this._opad = r.allocUnsafe(F)),
            l = 0;
          l < F;
          l++
        )
          (n[l] = 54 ^ t[l]), (U[l] = 92 ^ t[l])
        this._hash = [n]
      }
      U(l, d),
        (l.prototype._update = function(e) {
          this._hash.push(e)
        }),
        (l.prototype._final = function() {
          var e = this._alg(r.concat(this._hash))
          return this._alg(r.concat([this._opad, e]))
        }),
        (e.exports = l)
    },
    function(e, t, n) {
      e.exports = n(52)
    },
    function(e, t, n) {
      ;(function(t, U) {
        var r,
          d = n(54),
          i = n(55),
          F = n(56),
          l = n(1).Buffer,
          a = t.crypto && t.crypto.subtle,
          Q = {
            sha: 'SHA-1',
            'sha-1': 'SHA-1',
            sha1: 'SHA-1',
            sha256: 'SHA-256',
            'sha-256': 'SHA-256',
            sha384: 'SHA-384',
            'sha-384': 'SHA-384',
            'sha-512': 'SHA-512',
            sha512: 'SHA-512',
          },
          o = []
        function h(e, t, n, U, r) {
          return a
            .importKey('raw', e, { name: 'PBKDF2' }, !1, ['deriveBits'])
            .then(function(e) {
              return a.deriveBits(
                { name: 'PBKDF2', salt: t, iterations: n, hash: { name: r } },
                e,
                U << 3
              )
            })
            .then(function(e) {
              return l.from(e)
            })
        }
        e.exports = function(e, n, c, B, s, f) {
          'function' == typeof s && ((f = s), (s = void 0))
          var R = Q[(s = s || 'sha1').toLowerCase()]
          if (!R || 'function' != typeof t.Promise)
            return U.nextTick(function() {
              var t
              try {
                t = F(e, n, c, B, s)
              } catch (e) {
                return f(e)
              }
              f(null, t)
            })
          if ((d(e, n, c, B), 'function' != typeof f))
            throw new Error('No callback provided to pbkdf2')
          l.isBuffer(e) || (e = l.from(e, i)),
            l.isBuffer(n) || (n = l.from(n, i)),
            (function(e, t) {
              e.then(
                function(e) {
                  U.nextTick(function() {
                    t(null, e)
                  })
                },
                function(e) {
                  U.nextTick(function() {
                    t(e)
                  })
                }
              )
            })(
              (function(e) {
                if (t.process && !t.process.browser) return Promise.resolve(!1)
                if (!a || !a.importKey || !a.deriveBits)
                  return Promise.resolve(!1)
                if (void 0 !== o[e]) return o[e]
                var n = h((r = r || l.alloc(8)), r, 10, 128, e)
                  .then(function() {
                    return !0
                  })
                  .catch(function() {
                    return !1
                  })
                return (o[e] = n), n
              })(R).then(function(t) {
                return t ? h(e, n, c, B, R) : F(e, n, c, B, s)
              }),
              f
            )
        }
      }.call(this, n(8), n(9)))
    },
    function(e, t, n) {
      var U = n(101),
        r = n(36),
        d = n(37),
        i = n(116),
        F = n(23)
      function l(e, t, n) {
        if (((e = e.toLowerCase()), d[e])) return r.createCipheriv(e, t, n)
        if (i[e]) return new U({ key: t, iv: n, mode: e })
        throw new TypeError('invalid suite type')
      }
      function a(e, t, n) {
        if (((e = e.toLowerCase()), d[e])) return r.createDecipheriv(e, t, n)
        if (i[e]) return new U({ key: t, iv: n, mode: e, decrypt: !0 })
        throw new TypeError('invalid suite type')
      }
      ;(t.createCipher = t.Cipher = function(e, t) {
        var n, U
        if (((e = e.toLowerCase()), d[e])) (n = d[e].key), (U = d[e].iv)
        else {
          if (!i[e]) throw new TypeError('invalid suite type')
          ;(n = 8 * i[e].key), (U = i[e].iv)
        }
        var r = F(t, !1, n, U)
        return l(e, r.key, r.iv)
      }),
        (t.createCipheriv = t.Cipheriv = l),
        (t.createDecipher = t.Decipher = function(e, t) {
          var n, U
          if (((e = e.toLowerCase()), d[e])) (n = d[e].key), (U = d[e].iv)
          else {
            if (!i[e]) throw new TypeError('invalid suite type')
            ;(n = 8 * i[e].key), (U = i[e].iv)
          }
          var r = F(t, !1, n, U)
          return a(e, r.key, r.iv)
        }),
        (t.createDecipheriv = t.Decipheriv = a),
        (t.listCiphers = t.getCiphers = function() {
          return Object.keys(i).concat(r.getCiphers())
        })
    },
    function(e, t, n) {
      var U = n(10),
        r = n(35),
        d = n(0),
        i = n(1).Buffer,
        F = {
          'des-ede3-cbc': r.CBC.instantiate(r.EDE),
          'des-ede3': r.EDE,
          'des-ede-cbc': r.CBC.instantiate(r.EDE),
          'des-ede': r.EDE,
          'des-cbc': r.CBC.instantiate(r.DES),
          'des-ecb': r.DES,
        }
      function l(e) {
        U.call(this)
        var t,
          n = e.mode.toLowerCase(),
          r = F[n]
        t = e.decrypt ? 'decrypt' : 'encrypt'
        var d = e.key
        i.isBuffer(d) || (d = i.from(d)),
          ('des-ede' !== n && 'des-ede-cbc' !== n) ||
            (d = i.concat([d, d.slice(0, 8)]))
        var l = e.iv
        i.isBuffer(l) || (l = i.from(l)),
          (this._des = r.create({ key: d, iv: l, type: t }))
      }
      ;(F.des = F['des-cbc']),
        (F.des3 = F['des-ede3-cbc']),
        (e.exports = l),
        d(l, U),
        (l.prototype._update = function(e) {
          return i.from(this._des.update(e))
        }),
        (l.prototype._final = function() {
          return i.from(this._des.final())
        })
    },
    function(e, t, n) {
      'use strict'
      ;(t.readUInt32BE = function(e, t) {
        return (
          ((e[0 + t] << 24) | (e[1 + t] << 16) | (e[2 + t] << 8) | e[3 + t]) >>>
          0
        )
      }),
        (t.writeUInt32BE = function(e, t, n) {
          ;(e[0 + n] = t >>> 24),
            (e[1 + n] = (t >>> 16) & 255),
            (e[2 + n] = (t >>> 8) & 255),
            (e[3 + n] = 255 & t)
        }),
        (t.ip = function(e, t, n, U) {
          for (var r = 0, d = 0, i = 6; i >= 0; i -= 2) {
            for (var F = 0; F <= 24; F += 8)
              (r <<= 1), (r |= (t >>> (F + i)) & 1)
            for (F = 0; F <= 24; F += 8) (r <<= 1), (r |= (e >>> (F + i)) & 1)
          }
          for (i = 6; i >= 0; i -= 2) {
            for (F = 1; F <= 25; F += 8) (d <<= 1), (d |= (t >>> (F + i)) & 1)
            for (F = 1; F <= 25; F += 8) (d <<= 1), (d |= (e >>> (F + i)) & 1)
          }
          ;(n[U + 0] = r >>> 0), (n[U + 1] = d >>> 0)
        }),
        (t.rip = function(e, t, n, U) {
          for (var r = 0, d = 0, i = 0; i < 4; i++)
            for (var F = 24; F >= 0; F -= 8)
              (r <<= 1),
                (r |= (t >>> (F + i)) & 1),
                (r <<= 1),
                (r |= (e >>> (F + i)) & 1)
          for (i = 4; i < 8; i++)
            for (F = 24; F >= 0; F -= 8)
              (d <<= 1),
                (d |= (t >>> (F + i)) & 1),
                (d <<= 1),
                (d |= (e >>> (F + i)) & 1)
          ;(n[U + 0] = r >>> 0), (n[U + 1] = d >>> 0)
        }),
        (t.pc1 = function(e, t, n, U) {
          for (var r = 0, d = 0, i = 7; i >= 5; i--) {
            for (var F = 0; F <= 24; F += 8)
              (r <<= 1), (r |= (t >> (F + i)) & 1)
            for (F = 0; F <= 24; F += 8) (r <<= 1), (r |= (e >> (F + i)) & 1)
          }
          for (F = 0; F <= 24; F += 8) (r <<= 1), (r |= (t >> (F + i)) & 1)
          for (i = 1; i <= 3; i++) {
            for (F = 0; F <= 24; F += 8) (d <<= 1), (d |= (t >> (F + i)) & 1)
            for (F = 0; F <= 24; F += 8) (d <<= 1), (d |= (e >> (F + i)) & 1)
          }
          for (F = 0; F <= 24; F += 8) (d <<= 1), (d |= (e >> (F + i)) & 1)
          ;(n[U + 0] = r >>> 0), (n[U + 1] = d >>> 0)
        }),
        (t.r28shl = function(e, t) {
          return ((e << t) & 268435455) | (e >>> (28 - t))
        })
      var U = [
        14,
        11,
        17,
        4,
        27,
        23,
        25,
        0,
        13,
        22,
        7,
        18,
        5,
        9,
        16,
        24,
        2,
        20,
        12,
        21,
        1,
        8,
        15,
        26,
        15,
        4,
        25,
        19,
        9,
        1,
        26,
        16,
        5,
        11,
        23,
        8,
        12,
        7,
        17,
        0,
        22,
        3,
        10,
        14,
        6,
        20,
        27,
        24,
      ]
      ;(t.pc2 = function(e, t, n, r) {
        for (var d = 0, i = 0, F = U.length >>> 1, l = 0; l < F; l++)
          (d <<= 1), (d |= (e >>> U[l]) & 1)
        for (l = F; l < U.length; l++) (i <<= 1), (i |= (t >>> U[l]) & 1)
        ;(n[r + 0] = d >>> 0), (n[r + 1] = i >>> 0)
      }),
        (t.expand = function(e, t, n) {
          var U = 0,
            r = 0
          U = ((1 & e) << 5) | (e >>> 27)
          for (var d = 23; d >= 15; d -= 4) (U <<= 6), (U |= (e >>> d) & 63)
          for (d = 11; d >= 3; d -= 4) (r |= (e >>> d) & 63), (r <<= 6)
          ;(r |= ((31 & e) << 1) | (e >>> 31)),
            (t[n + 0] = U >>> 0),
            (t[n + 1] = r >>> 0)
        })
      var r = [
        14,
        0,
        4,
        15,
        13,
        7,
        1,
        4,
        2,
        14,
        15,
        2,
        11,
        13,
        8,
        1,
        3,
        10,
        10,
        6,
        6,
        12,
        12,
        11,
        5,
        9,
        9,
        5,
        0,
        3,
        7,
        8,
        4,
        15,
        1,
        12,
        14,
        8,
        8,
        2,
        13,
        4,
        6,
        9,
        2,
        1,
        11,
        7,
        15,
        5,
        12,
        11,
        9,
        3,
        7,
        14,
        3,
        10,
        10,
        0,
        5,
        6,
        0,
        13,
        15,
        3,
        1,
        13,
        8,
        4,
        14,
        7,
        6,
        15,
        11,
        2,
        3,
        8,
        4,
        14,
        9,
        12,
        7,
        0,
        2,
        1,
        13,
        10,
        12,
        6,
        0,
        9,
        5,
        11,
        10,
        5,
        0,
        13,
        14,
        8,
        7,
        10,
        11,
        1,
        10,
        3,
        4,
        15,
        13,
        4,
        1,
        2,
        5,
        11,
        8,
        6,
        12,
        7,
        6,
        12,
        9,
        0,
        3,
        5,
        2,
        14,
        15,
        9,
        10,
        13,
        0,
        7,
        9,
        0,
        14,
        9,
        6,
        3,
        3,
        4,
        15,
        6,
        5,
        10,
        1,
        2,
        13,
        8,
        12,
        5,
        7,
        14,
        11,
        12,
        4,
        11,
        2,
        15,
        8,
        1,
        13,
        1,
        6,
        10,
        4,
        13,
        9,
        0,
        8,
        6,
        15,
        9,
        3,
        8,
        0,
        7,
        11,
        4,
        1,
        15,
        2,
        14,
        12,
        3,
        5,
        11,
        10,
        5,
        14,
        2,
        7,
        12,
        7,
        13,
        13,
        8,
        14,
        11,
        3,
        5,
        0,
        6,
        6,
        15,
        9,
        0,
        10,
        3,
        1,
        4,
        2,
        7,
        8,
        2,
        5,
        12,
        11,
        1,
        12,
        10,
        4,
        14,
        15,
        9,
        10,
        3,
        6,
        15,
        9,
        0,
        0,
        6,
        12,
        10,
        11,
        1,
        7,
        13,
        13,
        8,
        15,
        9,
        1,
        4,
        3,
        5,
        14,
        11,
        5,
        12,
        2,
        7,
        8,
        2,
        4,
        14,
        2,
        14,
        12,
        11,
        4,
        2,
        1,
        12,
        7,
        4,
        10,
        7,
        11,
        13,
        6,
        1,
        8,
        5,
        5,
        0,
        3,
        15,
        15,
        10,
        13,
        3,
        0,
        9,
        14,
        8,
        9,
        6,
        4,
        11,
        2,
        8,
        1,
        12,
        11,
        7,
        10,
        1,
        13,
        14,
        7,
        2,
        8,
        13,
        15,
        6,
        9,
        15,
        12,
        0,
        5,
        9,
        6,
        10,
        3,
        4,
        0,
        5,
        14,
        3,
        12,
        10,
        1,
        15,
        10,
        4,
        15,
        2,
        9,
        7,
        2,
        12,
        6,
        9,
        8,
        5,
        0,
        6,
        13,
        1,
        3,
        13,
        4,
        14,
        14,
        0,
        7,
        11,
        5,
        3,
        11,
        8,
        9,
        4,
        14,
        3,
        15,
        2,
        5,
        12,
        2,
        9,
        8,
        5,
        12,
        15,
        3,
        10,
        7,
        11,
        0,
        14,
        4,
        1,
        10,
        7,
        1,
        6,
        13,
        0,
        11,
        8,
        6,
        13,
        4,
        13,
        11,
        0,
        2,
        11,
        14,
        7,
        15,
        4,
        0,
        9,
        8,
        1,
        13,
        10,
        3,
        14,
        12,
        3,
        9,
        5,
        7,
        12,
        5,
        2,
        10,
        15,
        6,
        8,
        1,
        6,
        1,
        6,
        4,
        11,
        11,
        13,
        13,
        8,
        12,
        1,
        3,
        4,
        7,
        10,
        14,
        7,
        10,
        9,
        15,
        5,
        6,
        0,
        8,
        15,
        0,
        14,
        5,
        2,
        9,
        3,
        2,
        12,
        13,
        1,
        2,
        15,
        8,
        13,
        4,
        8,
        6,
        10,
        15,
        3,
        11,
        7,
        1,
        4,
        10,
        12,
        9,
        5,
        3,
        6,
        14,
        11,
        5,
        0,
        0,
        14,
        12,
        9,
        7,
        2,
        7,
        2,
        11,
        1,
        4,
        14,
        1,
        7,
        9,
        4,
        12,
        10,
        14,
        8,
        2,
        13,
        0,
        15,
        6,
        12,
        10,
        9,
        13,
        0,
        15,
        3,
        3,
        5,
        5,
        6,
        8,
        11,
      ]
      t.substitute = function(e, t) {
        for (var n = 0, U = 0; U < 4; U++)
          (n <<= 4), (n |= r[64 * U + ((e >>> (18 - 6 * U)) & 63)])
        for (U = 0; U < 4; U++)
          (n <<= 4), (n |= r[256 + 64 * U + ((t >>> (18 - 6 * U)) & 63)])
        return n >>> 0
      }
      var d = [
        16,
        25,
        12,
        11,
        3,
        20,
        4,
        15,
        31,
        17,
        9,
        6,
        27,
        14,
        1,
        22,
        30,
        24,
        8,
        18,
        0,
        5,
        29,
        23,
        13,
        19,
        2,
        26,
        10,
        21,
        28,
        7,
      ]
      ;(t.permute = function(e) {
        for (var t = 0, n = 0; n < d.length; n++)
          (t <<= 1), (t |= (e >>> d[n]) & 1)
        return t >>> 0
      }),
        (t.padSplit = function(e, t, n) {
          for (var U = e.toString(2); U.length < t; ) U = '0' + U
          for (var r = [], d = 0; d < t; d += n) r.push(U.slice(d, d + n))
          return r.join(' ')
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(6)
      function r(e) {
        ;(this.options = e),
          (this.type = this.options.type),
          (this.blockSize = 8),
          this._init(),
          (this.buffer = new Array(this.blockSize)),
          (this.bufferOff = 0)
      }
      ;(e.exports = r),
        (r.prototype._init = function() {}),
        (r.prototype.update = function(e) {
          return 0 === e.length
            ? []
            : 'decrypt' === this.type
            ? this._updateDecrypt(e)
            : this._updateEncrypt(e)
        }),
        (r.prototype._buffer = function(e, t) {
          for (
            var n = Math.min(this.buffer.length - this.bufferOff, e.length - t),
              U = 0;
            U < n;
            U++
          )
            this.buffer[this.bufferOff + U] = e[t + U]
          return (this.bufferOff += n), n
        }),
        (r.prototype._flushBuffer = function(e, t) {
          return (
            this._update(this.buffer, 0, e, t),
            (this.bufferOff = 0),
            this.blockSize
          )
        }),
        (r.prototype._updateEncrypt = function(e) {
          var t = 0,
            n = 0,
            U = ((this.bufferOff + e.length) / this.blockSize) | 0,
            r = new Array(U * this.blockSize)
          0 !== this.bufferOff &&
            ((t += this._buffer(e, t)),
            this.bufferOff === this.buffer.length &&
              (n += this._flushBuffer(r, n)))
          for (
            var d = e.length - ((e.length - t) % this.blockSize);
            t < d;
            t += this.blockSize
          )
            this._update(e, t, r, n), (n += this.blockSize)
          for (; t < e.length; t++, this.bufferOff++)
            this.buffer[this.bufferOff] = e[t]
          return r
        }),
        (r.prototype._updateDecrypt = function(e) {
          for (
            var t = 0,
              n = 0,
              U = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1,
              r = new Array(U * this.blockSize);
            U > 0;
            U--
          )
            (t += this._buffer(e, t)), (n += this._flushBuffer(r, n))
          return (t += this._buffer(e, t)), r
        }),
        (r.prototype.final = function(e) {
          var t, n
          return (
            e && (t = this.update(e)),
            (n =
              'encrypt' === this.type
                ? this._finalEncrypt()
                : this._finalDecrypt()),
            t ? t.concat(n) : n
          )
        }),
        (r.prototype._pad = function(e, t) {
          if (0 === t) return !1
          for (; t < e.length; ) e[t++] = 0
          return !0
        }),
        (r.prototype._finalEncrypt = function() {
          if (!this._pad(this.buffer, this.bufferOff)) return []
          var e = new Array(this.blockSize)
          return this._update(this.buffer, 0, e, 0), e
        }),
        (r.prototype._unpad = function(e) {
          return e
        }),
        (r.prototype._finalDecrypt = function() {
          U.equal(this.bufferOff, this.blockSize, 'Not enough data to decrypt')
          var e = new Array(this.blockSize)
          return this._flushBuffer(e, 0), this._unpad(e)
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(6),
        r = n(0),
        d = n(35),
        i = d.utils,
        F = d.Cipher
      function l() {
        ;(this.tmp = new Array(2)), (this.keys = null)
      }
      function a(e) {
        F.call(this, e)
        var t = new l()
        ;(this._desState = t), this.deriveKeys(t, e.key)
      }
      r(a, F),
        (e.exports = a),
        (a.create = function(e) {
          return new a(e)
        })
      var Q = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1]
      ;(a.prototype.deriveKeys = function(e, t) {
        ;(e.keys = new Array(32)),
          U.equal(t.length, this.blockSize, 'Invalid key length')
        var n = i.readUInt32BE(t, 0),
          r = i.readUInt32BE(t, 4)
        i.pc1(n, r, e.tmp, 0), (n = e.tmp[0]), (r = e.tmp[1])
        for (var d = 0; d < e.keys.length; d += 2) {
          var F = Q[d >>> 1]
          ;(n = i.r28shl(n, F)), (r = i.r28shl(r, F)), i.pc2(n, r, e.keys, d)
        }
      }),
        (a.prototype._update = function(e, t, n, U) {
          var r = this._desState,
            d = i.readUInt32BE(e, t),
            F = i.readUInt32BE(e, t + 4)
          i.ip(d, F, r.tmp, 0),
            (d = r.tmp[0]),
            (F = r.tmp[1]),
            'encrypt' === this.type
              ? this._encrypt(r, d, F, r.tmp, 0)
              : this._decrypt(r, d, F, r.tmp, 0),
            (d = r.tmp[0]),
            (F = r.tmp[1]),
            i.writeUInt32BE(n, d, U),
            i.writeUInt32BE(n, F, U + 4)
        }),
        (a.prototype._pad = function(e, t) {
          for (var n = e.length - t, U = t; U < e.length; U++) e[U] = n
          return !0
        }),
        (a.prototype._unpad = function(e) {
          for (var t = e[e.length - 1], n = e.length - t; n < e.length; n++)
            U.equal(e[n], t)
          return e.slice(0, e.length - t)
        }),
        (a.prototype._encrypt = function(e, t, n, U, r) {
          for (var d = t, F = n, l = 0; l < e.keys.length; l += 2) {
            var a = e.keys[l],
              Q = e.keys[l + 1]
            i.expand(F, e.tmp, 0), (a ^= e.tmp[0]), (Q ^= e.tmp[1])
            var o = i.substitute(a, Q),
              h = F
            ;(F = (d ^ i.permute(o)) >>> 0), (d = h)
          }
          i.rip(F, d, U, r)
        }),
        (a.prototype._decrypt = function(e, t, n, U, r) {
          for (var d = n, F = t, l = e.keys.length - 2; l >= 0; l -= 2) {
            var a = e.keys[l],
              Q = e.keys[l + 1]
            i.expand(d, e.tmp, 0), (a ^= e.tmp[0]), (Q ^= e.tmp[1])
            var o = i.substitute(a, Q),
              h = d
            ;(d = (F ^ i.permute(o)) >>> 0), (F = h)
          }
          i.rip(d, F, U, r)
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(6),
        r = n(0),
        d = {}
      function i(e) {
        U.equal(e.length, 8, 'Invalid IV length'), (this.iv = new Array(8))
        for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t]
      }
      ;(t.instantiate = function(e) {
        function t(t) {
          e.call(this, t), this._cbcInit()
        }
        r(t, e)
        for (var n = Object.keys(d), U = 0; U < n.length; U++) {
          var i = n[U]
          t.prototype[i] = d[i]
        }
        return (
          (t.create = function(e) {
            return new t(e)
          }),
          t
        )
      }),
        (d._cbcInit = function() {
          var e = new i(this.options.iv)
          this._cbcState = e
        }),
        (d._update = function(e, t, n, U) {
          var r = this._cbcState,
            d = this.constructor.super_.prototype,
            i = r.iv
          if ('encrypt' === this.type) {
            for (var F = 0; F < this.blockSize; F++) i[F] ^= e[t + F]
            for (
              d._update.call(this, i, 0, n, U), F = 0;
              F < this.blockSize;
              F++
            )
              i[F] = n[U + F]
          } else {
            for (
              d._update.call(this, e, t, n, U), F = 0;
              F < this.blockSize;
              F++
            )
              n[U + F] ^= i[F]
            for (F = 0; F < this.blockSize; F++) i[F] = e[t + F]
          }
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(6),
        r = n(0),
        d = n(35),
        i = d.Cipher,
        F = d.DES
      function l(e, t) {
        U.equal(t.length, 24, 'Invalid key length')
        var n = t.slice(0, 8),
          r = t.slice(8, 16),
          d = t.slice(16, 24)
        this.ciphers =
          'encrypt' === e
            ? [
                F.create({ type: 'encrypt', key: n }),
                F.create({ type: 'decrypt', key: r }),
                F.create({ type: 'encrypt', key: d }),
              ]
            : [
                F.create({ type: 'decrypt', key: d }),
                F.create({ type: 'encrypt', key: r }),
                F.create({ type: 'decrypt', key: n }),
              ]
      }
      function a(e) {
        i.call(this, e)
        var t = new l(this.type, this.options.key)
        this._edeState = t
      }
      r(a, i),
        (e.exports = a),
        (a.create = function(e) {
          return new a(e)
        }),
        (a.prototype._update = function(e, t, n, U) {
          var r = this._edeState
          r.ciphers[0]._update(e, t, n, U),
            r.ciphers[1]._update(n, U, n, U),
            r.ciphers[2]._update(n, U, n, U)
        }),
        (a.prototype._pad = F.prototype._pad),
        (a.prototype._unpad = F.prototype._unpad)
    },
    function(e, t, n) {
      var U = n(37),
        r = n(60),
        d = n(1).Buffer,
        i = n(61),
        F = n(10),
        l = n(22),
        a = n(23)
      function Q(e, t, n) {
        F.call(this),
          (this._cache = new h()),
          (this._cipher = new l.AES(t)),
          (this._prev = d.from(n)),
          (this._mode = e),
          (this._autopadding = !0)
      }
      n(0)(Q, F),
        (Q.prototype._update = function(e) {
          var t, n
          this._cache.add(e)
          for (var U = []; (t = this._cache.get()); )
            (n = this._mode.encrypt(this, t)), U.push(n)
          return d.concat(U)
        })
      var o = d.alloc(16, 16)
      function h() {
        this.cache = d.allocUnsafe(0)
      }
      function c(e, t, n) {
        var F = U[e.toLowerCase()]
        if (!F) throw new TypeError('invalid suite type')
        if (('string' == typeof t && (t = d.from(t)), t.length !== F.key / 8))
          throw new TypeError('invalid key length ' + t.length)
        if (
          ('string' == typeof n && (n = d.from(n)),
          'GCM' !== F.mode && n.length !== F.iv)
        )
          throw new TypeError('invalid iv length ' + n.length)
        return 'stream' === F.type
          ? new i(F.module, t, n)
          : 'auth' === F.type
          ? new r(F.module, t, n)
          : new Q(F.module, t, n)
      }
      ;(Q.prototype._final = function() {
        var e = this._cache.flush()
        if (this._autopadding)
          return (e = this._mode.encrypt(this, e)), this._cipher.scrub(), e
        if (!e.equals(o))
          throw (this._cipher.scrub(),
          new Error('data not multiple of block length'))
      }),
        (Q.prototype.setAutoPadding = function(e) {
          return (this._autopadding = !!e), this
        }),
        (h.prototype.add = function(e) {
          this.cache = d.concat([this.cache, e])
        }),
        (h.prototype.get = function() {
          if (this.cache.length > 15) {
            var e = this.cache.slice(0, 16)
            return (this.cache = this.cache.slice(16)), e
          }
          return null
        }),
        (h.prototype.flush = function() {
          for (
            var e = 16 - this.cache.length, t = d.allocUnsafe(e), n = -1;
            ++n < e;

          )
            t.writeUInt8(e, n)
          return d.concat([this.cache, t])
        }),
        (t.createCipheriv = c),
        (t.createCipher = function(e, t) {
          var n = U[e.toLowerCase()]
          if (!n) throw new TypeError('invalid suite type')
          var r = a(t, !1, n.key, n.iv)
          return c(e, r.key, r.iv)
        })
    },
    function(e, t) {
      ;(t.encrypt = function(e, t) {
        return e._cipher.encryptBlock(t)
      }),
        (t.decrypt = function(e, t) {
          return e._cipher.decryptBlock(t)
        })
    },
    function(e, t, n) {
      var U = n(17)
      ;(t.encrypt = function(e, t) {
        var n = U(t, e._prev)
        return (e._prev = e._cipher.encryptBlock(n)), e._prev
      }),
        (t.decrypt = function(e, t) {
          var n = e._prev
          e._prev = t
          var r = e._cipher.decryptBlock(t)
          return U(r, n)
        })
    },
    function(e, t, n) {
      var U = n(1).Buffer,
        r = n(17)
      function d(e, t, n) {
        var d = t.length,
          i = r(t, e._cache)
        return (
          (e._cache = e._cache.slice(d)),
          (e._prev = U.concat([e._prev, n ? t : i])),
          i
        )
      }
      t.encrypt = function(e, t, n) {
        for (var r, i = U.allocUnsafe(0); t.length; ) {
          if (
            (0 === e._cache.length &&
              ((e._cache = e._cipher.encryptBlock(e._prev)),
              (e._prev = U.allocUnsafe(0))),
            !(e._cache.length <= t.length))
          ) {
            i = U.concat([i, d(e, t, n)])
            break
          }
          ;(r = e._cache.length),
            (i = U.concat([i, d(e, t.slice(0, r), n)])),
            (t = t.slice(r))
        }
        return i
      }
    },
    function(e, t, n) {
      var U = n(1).Buffer
      function r(e, t, n) {
        var r = e._cipher.encryptBlock(e._prev)[0] ^ t
        return (e._prev = U.concat([e._prev.slice(1), U.from([n ? t : r])])), r
      }
      t.encrypt = function(e, t, n) {
        for (var d = t.length, i = U.allocUnsafe(d), F = -1; ++F < d; )
          i[F] = r(e, t[F], n)
        return i
      }
    },
    function(e, t, n) {
      var U = n(1).Buffer
      function r(e, t, n) {
        for (var U, r, i = -1, F = 0; ++i < 8; )
          (U = t & (1 << (7 - i)) ? 128 : 0),
            (F +=
              (128 & (r = e._cipher.encryptBlock(e._prev)[0] ^ U)) >> i % 8),
            (e._prev = d(e._prev, n ? U : r))
        return F
      }
      function d(e, t) {
        var n = e.length,
          r = -1,
          d = U.allocUnsafe(e.length)
        for (e = U.concat([e, U.from([t])]); ++r < n; )
          d[r] = (e[r] << 1) | (e[r + 1] >> 7)
        return d
      }
      t.encrypt = function(e, t, n) {
        for (var d = t.length, i = U.allocUnsafe(d), F = -1; ++F < d; )
          i[F] = r(e, t[F], n)
        return i
      }
    },
    function(e, t, n) {
      ;(function(e) {
        var U = n(17)
        function r(e) {
          return (e._prev = e._cipher.encryptBlock(e._prev)), e._prev
        }
        t.encrypt = function(t, n) {
          for (; t._cache.length < n.length; )
            t._cache = e.concat([t._cache, r(t)])
          var d = t._cache.slice(0, n.length)
          return (t._cache = t._cache.slice(n.length)), U(n, d)
        }
      }.call(this, n(3).Buffer))
    },
    function(e, t, n) {
      var U = n(1).Buffer,
        r = U.alloc(16, 0)
      function d(e) {
        var t = U.allocUnsafe(16)
        return (
          t.writeUInt32BE(e[0] >>> 0, 0),
          t.writeUInt32BE(e[1] >>> 0, 4),
          t.writeUInt32BE(e[2] >>> 0, 8),
          t.writeUInt32BE(e[3] >>> 0, 12),
          t
        )
      }
      function i(e) {
        ;(this.h = e),
          (this.state = U.alloc(16, 0)),
          (this.cache = U.allocUnsafe(0))
      }
      ;(i.prototype.ghash = function(e) {
        for (var t = -1; ++t < e.length; ) this.state[t] ^= e[t]
        this._multiply()
      }),
        (i.prototype._multiply = function() {
          for (
            var e,
              t,
              n,
              U = [
                (e = this.h).readUInt32BE(0),
                e.readUInt32BE(4),
                e.readUInt32BE(8),
                e.readUInt32BE(12),
              ],
              r = [0, 0, 0, 0],
              i = -1;
            ++i < 128;

          ) {
            for (
              0 != (this.state[~~(i / 8)] & (1 << (7 - (i % 8)))) &&
                ((r[0] ^= U[0]),
                (r[1] ^= U[1]),
                (r[2] ^= U[2]),
                (r[3] ^= U[3])),
                n = 0 != (1 & U[3]),
                t = 3;
              t > 0;
              t--
            )
              U[t] = (U[t] >>> 1) | ((1 & U[t - 1]) << 31)
            ;(U[0] = U[0] >>> 1), n && (U[0] = U[0] ^ (225 << 24))
          }
          this.state = d(r)
        }),
        (i.prototype.update = function(e) {
          var t
          for (
            this.cache = U.concat([this.cache, e]);
            this.cache.length >= 16;

          )
            (t = this.cache.slice(0, 16)),
              (this.cache = this.cache.slice(16)),
              this.ghash(t)
        }),
        (i.prototype.final = function(e, t) {
          return (
            this.cache.length && this.ghash(U.concat([this.cache, r], 16)),
            this.ghash(d([0, e, 0, t])),
            this.state
          )
        }),
        (e.exports = i)
    },
    function(e, t, n) {
      var U = n(60),
        r = n(1).Buffer,
        d = n(37),
        i = n(61),
        F = n(10),
        l = n(22),
        a = n(23)
      function Q(e, t, n) {
        F.call(this),
          (this._cache = new o()),
          (this._last = void 0),
          (this._cipher = new l.AES(t)),
          (this._prev = r.from(n)),
          (this._mode = e),
          (this._autopadding = !0)
      }
      function o() {
        this.cache = r.allocUnsafe(0)
      }
      function h(e, t, n) {
        var F = d[e.toLowerCase()]
        if (!F) throw new TypeError('invalid suite type')
        if (
          ('string' == typeof n && (n = r.from(n)),
          'GCM' !== F.mode && n.length !== F.iv)
        )
          throw new TypeError('invalid iv length ' + n.length)
        if (('string' == typeof t && (t = r.from(t)), t.length !== F.key / 8))
          throw new TypeError('invalid key length ' + t.length)
        return 'stream' === F.type
          ? new i(F.module, t, n, !0)
          : 'auth' === F.type
          ? new U(F.module, t, n, !0)
          : new Q(F.module, t, n)
      }
      n(0)(Q, F),
        (Q.prototype._update = function(e) {
          var t, n
          this._cache.add(e)
          for (var U = []; (t = this._cache.get(this._autopadding)); )
            (n = this._mode.decrypt(this, t)), U.push(n)
          return r.concat(U)
        }),
        (Q.prototype._final = function() {
          var e = this._cache.flush()
          if (this._autopadding)
            return (function(e) {
              var t = e[15]
              if (t < 1 || t > 16) throw new Error('unable to decrypt data')
              for (var n = -1; ++n < t; )
                if (e[n + (16 - t)] !== t)
                  throw new Error('unable to decrypt data')
              if (16 !== t) return e.slice(0, 16 - t)
            })(this._mode.decrypt(this, e))
          if (e) throw new Error('data not multiple of block length')
        }),
        (Q.prototype.setAutoPadding = function(e) {
          return (this._autopadding = !!e), this
        }),
        (o.prototype.add = function(e) {
          this.cache = r.concat([this.cache, e])
        }),
        (o.prototype.get = function(e) {
          var t
          if (e) {
            if (this.cache.length > 16)
              return (
                (t = this.cache.slice(0, 16)),
                (this.cache = this.cache.slice(16)),
                t
              )
          } else if (this.cache.length >= 16)
            return (
              (t = this.cache.slice(0, 16)),
              (this.cache = this.cache.slice(16)),
              t
            )
          return null
        }),
        (o.prototype.flush = function() {
          if (this.cache.length) return this.cache
        }),
        (t.createDecipher = function(e, t) {
          var n = d[e.toLowerCase()]
          if (!n) throw new TypeError('invalid suite type')
          var U = a(t, !1, n.key, n.iv)
          return h(e, U.key, U.iv)
        }),
        (t.createDecipheriv = h)
    },
    function(e, t) {
      ;(t['des-ecb'] = { key: 8, iv: 0 }),
        (t['des-cbc'] = t.des = { key: 8, iv: 8 }),
        (t['des-ede3-cbc'] = t.des3 = { key: 24, iv: 8 }),
        (t['des-ede3'] = { key: 24, iv: 0 }),
        (t['des-ede-cbc'] = { key: 16, iv: 8 }),
        (t['des-ede'] = { key: 16, iv: 0 })
    },
    function(e, t, n) {
      ;(function(e) {
        var U = n(62),
          r = n(121),
          d = n(122),
          i = { binary: !0, hex: !0, base64: !0 }
        ;(t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = function(
          t
        ) {
          var n = new e(r[t].prime, 'hex'),
            U = new e(r[t].gen, 'hex')
          return new d(n, U)
        }),
          (t.createDiffieHellman = t.DiffieHellman = function t(n, r, F, l) {
            return e.isBuffer(r) || void 0 === i[r]
              ? t(n, 'binary', r, F)
              : ((r = r || 'binary'),
                (l = l || 'binary'),
                (F = F || new e([2])),
                e.isBuffer(F) || (F = new e(F, l)),
                'number' == typeof n
                  ? new d(U(n, F), F, !0)
                  : (e.isBuffer(n) || (n = new e(n, r)), new d(n, F, !0)))
          })
      }.call(this, n(3).Buffer))
    },
    function(e, t) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function() {
                return e.l
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function() {
                return e.i
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        )
      }
    },
    function(e, t) {},
    function(e, t) {},
    function(e) {
      e.exports = {
        modp1: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff',
        },
        modp2: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff',
        },
        modp5: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff',
        },
        modp14: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff',
        },
        modp15: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff',
        },
        modp16: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff',
        },
        modp17: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff',
        },
        modp18: {
          gen: '02',
          prime:
            'ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff',
        },
      }
    },
    function(e, t, n) {
      ;(function(t) {
        var U = n(2),
          r = new (n(63))(),
          d = new U(24),
          i = new U(11),
          F = new U(10),
          l = new U(3),
          a = new U(7),
          Q = n(62),
          o = n(13)
        function h(e, n) {
          return (
            (n = n || 'utf8'),
            t.isBuffer(e) || (e = new t(e, n)),
            (this._pub = new U(e)),
            this
          )
        }
        function c(e, n) {
          return (
            (n = n || 'utf8'),
            t.isBuffer(e) || (e = new t(e, n)),
            (this._priv = new U(e)),
            this
          )
        }
        e.exports = s
        var B = {}
        function s(e, t, n) {
          this.setGenerator(t),
            (this.__prime = new U(e)),
            (this._prime = U.mont(this.__prime)),
            (this._primeLen = e.length),
            (this._pub = void 0),
            (this._priv = void 0),
            (this._primeCode = void 0),
            n
              ? ((this.setPublicKey = h), (this.setPrivateKey = c))
              : (this._primeCode = 8)
        }
        function f(e, n) {
          var U = new t(e.toArray())
          return n ? U.toString(n) : U
        }
        Object.defineProperty(s.prototype, 'verifyError', {
          enumerable: !0,
          get: function() {
            return (
              'number' != typeof this._primeCode &&
                (this._primeCode = (function(e, t) {
                  var n = t.toString('hex'),
                    U = [n, e.toString(16)].join('_')
                  if (U in B) return B[U]
                  var o,
                    h = 0
                  if (
                    e.isEven() ||
                    !Q.simpleSieve ||
                    !Q.fermatTest(e) ||
                    !r.test(e)
                  )
                    return (
                      (h += 1),
                      (h += '02' === n || '05' === n ? 8 : 4),
                      (B[U] = h),
                      h
                    )
                  switch ((r.test(e.shrn(1)) || (h += 2), n)) {
                    case '02':
                      e.mod(d).cmp(i) && (h += 8)
                      break
                    case '05':
                      ;(o = e.mod(F)).cmp(l) && o.cmp(a) && (h += 8)
                      break
                    default:
                      h += 4
                  }
                  return (B[U] = h), h
                })(this.__prime, this.__gen)),
              this._primeCode
            )
          },
        }),
          (s.prototype.generateKeys = function() {
            return (
              this._priv || (this._priv = new U(o(this._primeLen))),
              (this._pub = this._gen
                .toRed(this._prime)
                .redPow(this._priv)
                .fromRed()),
              this.getPublicKey()
            )
          }),
          (s.prototype.computeSecret = function(e) {
            var n = (e = (e = new U(e)).toRed(this._prime))
                .redPow(this._priv)
                .fromRed(),
              r = new t(n.toArray()),
              d = this.getPrime()
            if (r.length < d.length) {
              var i = new t(d.length - r.length)
              i.fill(0), (r = t.concat([i, r]))
            }
            return r
          }),
          (s.prototype.getPublicKey = function(e) {
            return f(this._pub, e)
          }),
          (s.prototype.getPrivateKey = function(e) {
            return f(this._priv, e)
          }),
          (s.prototype.getPrime = function(e) {
            return f(this.__prime, e)
          }),
          (s.prototype.getGenerator = function(e) {
            return f(this._gen, e)
          }),
          (s.prototype.setGenerator = function(e, n) {
            return (
              (n = n || 'utf8'),
              t.isBuffer(e) || (e = new t(e, n)),
              (this.__gen = e),
              (this._gen = new U(e)),
              this
            )
          })
      }.call(this, n(3).Buffer))
    },
    function(e, t, n) {
      ;(function(t) {
        var U = n(15),
          r = n(28),
          d = n(0),
          i = n(124),
          F = n(160),
          l = n(52)
        function a(e) {
          r.Writable.call(this)
          var t = l[e]
          if (!t) throw new Error('Unknown message digest')
          ;(this._hashType = t.hash),
            (this._hash = U(t.hash)),
            (this._tag = t.id),
            (this._signType = t.sign)
        }
        function Q(e) {
          r.Writable.call(this)
          var t = l[e]
          if (!t) throw new Error('Unknown message digest')
          ;(this._hash = U(t.hash)),
            (this._tag = t.id),
            (this._signType = t.sign)
        }
        function o(e) {
          return new a(e)
        }
        function h(e) {
          return new Q(e)
        }
        Object.keys(l).forEach(function(e) {
          ;(l[e].id = new t(l[e].id, 'hex')), (l[e.toLowerCase()] = l[e])
        }),
          d(a, r.Writable),
          (a.prototype._write = function(e, t, n) {
            this._hash.update(e), n()
          }),
          (a.prototype.update = function(e, n) {
            return (
              'string' == typeof e && (e = new t(e, n)),
              this._hash.update(e),
              this
            )
          }),
          (a.prototype.sign = function(e, t) {
            this.end()
            var n = this._hash.digest(),
              U = i(n, e, this._hashType, this._signType, this._tag)
            return t ? U.toString(t) : U
          }),
          d(Q, r.Writable),
          (Q.prototype._write = function(e, t, n) {
            this._hash.update(e), n()
          }),
          (Q.prototype.update = function(e, n) {
            return (
              'string' == typeof e && (e = new t(e, n)),
              this._hash.update(e),
              this
            )
          }),
          (Q.prototype.verify = function(e, n, U) {
            'string' == typeof n && (n = new t(n, U)), this.end()
            var r = this._hash.digest()
            return F(n, r, e, this._signType, this._tag)
          }),
          (e.exports = { Sign: o, Verify: h, createSign: o, createVerify: h })
      }.call(this, n(3).Buffer))
    },
    function(e, t, n) {
      ;(function(t) {
        var U = n(50),
          r = n(38),
          d = n(4).ec,
          i = n(2),
          F = n(25),
          l = n(73)
        function a(e, n, r, d) {
          if ((e = new t(e.toArray())).length < n.byteLength()) {
            var i = new t(n.byteLength() - e.length)
            i.fill(0), (e = t.concat([i, e]))
          }
          var F = r.length,
            l = (function(e, n) {
              e = (e = Q(e, n)).mod(n)
              var U = new t(e.toArray())
              if (U.length < n.byteLength()) {
                var r = new t(n.byteLength() - U.length)
                r.fill(0), (U = t.concat([r, U]))
              }
              return U
            })(r, n),
            a = new t(F)
          a.fill(1)
          var o = new t(F)
          return (
            o.fill(0),
            (o = U(d, o)
              .update(a)
              .update(new t([0]))
              .update(e)
              .update(l)
              .digest()),
            (a = U(d, o)
              .update(a)
              .digest()),
            {
              k: (o = U(d, o)
                .update(a)
                .update(new t([1]))
                .update(e)
                .update(l)
                .digest()),
              v: (a = U(d, o)
                .update(a)
                .digest()),
            }
          )
        }
        function Q(e, t) {
          var n = new i(e),
            U = (e.length << 3) - t.bitLength()
          return U > 0 && n.ishrn(U), n
        }
        function o(e, n, r) {
          var d, i
          do {
            for (d = new t(0); 8 * d.length < e.bitLength(); )
              (n.v = U(r, n.k)
                .update(n.v)
                .digest()),
                (d = t.concat([d, n.v]))
            ;(i = Q(d, e)),
              (n.k = U(r, n.k)
                .update(n.v)
                .update(new t([0]))
                .digest()),
              (n.v = U(r, n.k)
                .update(n.v)
                .digest())
          } while (-1 !== i.cmp(e))
          return i
        }
        function h(e, t, n, U) {
          return e
            .toRed(i.mont(n))
            .redPow(t)
            .fromRed()
            .mod(U)
        }
        ;(e.exports = function(e, n, U, c, B) {
          var s = F(n)
          if (s.curve) {
            if ('ecdsa' !== c && 'ecdsa/rsa' !== c)
              throw new Error('wrong private key type')
            return (function(e, n) {
              var U = l[n.curve.join('.')]
              if (!U) throw new Error('unknown curve ' + n.curve.join('.'))
              var r = new d(U).keyFromPrivate(n.privateKey).sign(e)
              return new t(r.toDER())
            })(e, s)
          }
          if ('dsa' === s.type) {
            if ('dsa' !== c) throw new Error('wrong private key type')
            return (function(e, n, U) {
              for (
                var r,
                  d = n.params.priv_key,
                  F = n.params.p,
                  l = n.params.q,
                  c = n.params.g,
                  B = new i(0),
                  s = Q(e, l).mod(l),
                  f = !1,
                  R = a(d, l, e, U);
                !1 === f;

              )
                (B = h(c, (r = o(l, R, U)), F, l)),
                  0 ===
                    (f = r
                      .invm(l)
                      .imul(s.add(d.mul(B)))
                      .mod(l)).cmpn(0) && ((f = !1), (B = new i(0)))
              return (function(e, n) {
                ;(e = e.toArray()),
                  (n = n.toArray()),
                  128 & e[0] && (e = [0].concat(e)),
                  128 & n[0] && (n = [0].concat(n))
                var U = [48, e.length + n.length + 4, 2, e.length]
                return (U = U.concat(e, [2, n.length], n)), new t(U)
              })(B, f)
            })(e, s, U)
          }
          if ('rsa' !== c && 'ecdsa/rsa' !== c)
            throw new Error('wrong private key type')
          e = t.concat([B, e])
          for (
            var f = s.modulus.byteLength(), R = [0, 1];
            e.length + R.length + 1 < f;

          )
            R.push(255)
          R.push(0)
          for (var V = -1; ++V < e.length; ) R.push(e[V])
          return r(R, s)
        }),
          (e.exports.getKey = a),
          (e.exports.makeKey = o)
      }.call(this, n(3).Buffer))
    },
    function(e) {
      e.exports = {
        name: 'elliptic',
        version: '6.4.1',
        description: 'EC cryptography',
        main: 'lib/elliptic.js',
        files: ['lib'],
        scripts: {
          jscs:
            'jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js',
          jshint:
            'jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js',
          lint: 'npm run jscs && npm run jshint',
          unit: 'istanbul test _mocha --reporter=spec test/index.js',
          test: 'npm run lint && npm run unit',
          version: 'grunt dist && git add dist/',
        },
        repository: { type: 'git', url: 'git@github.com:indutny/elliptic' },
        keywords: ['EC', 'Elliptic', 'curve', 'Cryptography'],
        author: 'Fedor Indutny <fedor@indutny.com>',
        license: 'MIT',
        bugs: { url: 'https://github.com/indutny/elliptic/issues' },
        homepage: 'https://github.com/indutny/elliptic',
        devDependencies: {
          brfs: '^1.4.3',
          coveralls: '^2.11.3',
          grunt: '^0.4.5',
          'grunt-browserify': '^5.0.0',
          'grunt-cli': '^1.2.0',
          'grunt-contrib-connect': '^1.0.0',
          'grunt-contrib-copy': '^1.0.0',
          'grunt-contrib-uglify': '^1.0.1',
          'grunt-mocha-istanbul': '^3.0.1',
          'grunt-saucelabs': '^8.6.2',
          istanbul: '^0.4.2',
          jscs: '^2.9.0',
          jshint: '^2.6.0',
          mocha: '^2.1.0',
        },
        dependencies: {
          'bn.js': '^4.4.0',
          brorand: '^1.0.1',
          'hash.js': '^1.0.0',
          'hmac-drbg': '^1.0.0',
          inherits: '^2.0.1',
          'minimalistic-assert': '^1.0.0',
          'minimalistic-crypto-utils': '^1.0.0',
        },
      }
    },
    function(e, t, n) {
      'use strict'
      var U = t,
        r = n(2),
        d = n(6),
        i = n(65)
      ;(U.assert = d),
        (U.toArray = i.toArray),
        (U.zero2 = i.zero2),
        (U.toHex = i.toHex),
        (U.encode = i.encode),
        (U.getNAF = function(e, t) {
          for (var n = [], U = 1 << (t + 1), r = e.clone(); r.cmpn(1) >= 0; ) {
            var d
            if (r.isOdd()) {
              var i = r.andln(U - 1)
              ;(d = i > (U >> 1) - 1 ? (U >> 1) - i : i), r.isubn(d)
            } else d = 0
            n.push(d)
            for (
              var F = 0 !== r.cmpn(0) && 0 === r.andln(U - 1) ? t + 1 : 1,
                l = 1;
              l < F;
              l++
            )
              n.push(0)
            r.iushrn(F)
          }
          return n
        }),
        (U.getJSF = function(e, t) {
          var n = [[], []]
          ;(e = e.clone()), (t = t.clone())
          for (var U = 0, r = 0; e.cmpn(-U) > 0 || t.cmpn(-r) > 0; ) {
            var d,
              i,
              F,
              l = (e.andln(3) + U) & 3,
              a = (t.andln(3) + r) & 3
            3 === l && (l = -1),
              3 === a && (a = -1),
              (d =
                0 == (1 & l)
                  ? 0
                  : (3 != (F = (e.andln(7) + U) & 7) && 5 !== F) || 2 !== a
                  ? l
                  : -l),
              n[0].push(d),
              (i =
                0 == (1 & a)
                  ? 0
                  : (3 != (F = (t.andln(7) + r) & 7) && 5 !== F) || 2 !== l
                  ? a
                  : -a),
              n[1].push(i),
              2 * U === d + 1 && (U = 1 - U),
              2 * r === i + 1 && (r = 1 - r),
              e.iushrn(1),
              t.iushrn(1)
          }
          return n
        }),
        (U.cachedProperty = function(e, t, n) {
          var U = '_' + t
          e.prototype[t] = function() {
            return void 0 !== this[U] ? this[U] : (this[U] = n.call(this))
          }
        }),
        (U.parseBytes = function(e) {
          return 'string' == typeof e ? U.toArray(e, 'hex') : e
        }),
        (U.intFromLE = function(e) {
          return new r(e, 'hex', 'le')
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(2),
        r = n(4).utils,
        d = r.getNAF,
        i = r.getJSF,
        F = r.assert
      function l(e, t) {
        ;(this.type = e),
          (this.p = new U(t.p, 16)),
          (this.red = t.prime ? U.red(t.prime) : U.mont(this.p)),
          (this.zero = new U(0).toRed(this.red)),
          (this.one = new U(1).toRed(this.red)),
          (this.two = new U(2).toRed(this.red)),
          (this.n = t.n && new U(t.n, 16)),
          (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4))
        var n = this.n && this.p.div(this.n)
        !n || n.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)))
      }
      function a(e, t) {
        ;(this.curve = e), (this.type = t), (this.precomputed = null)
      }
      ;(e.exports = l),
        (l.prototype.point = function() {
          throw new Error('Not implemented')
        }),
        (l.prototype.validate = function() {
          throw new Error('Not implemented')
        }),
        (l.prototype._fixedNafMul = function(e, t) {
          F(e.precomputed)
          var n = e._getDoubles(),
            U = d(t, 1),
            r = (1 << (n.step + 1)) - (n.step % 2 == 0 ? 2 : 1)
          r /= 3
          for (var i = [], l = 0; l < U.length; l += n.step) {
            var a = 0
            for (t = l + n.step - 1; t >= l; t--) a = (a << 1) + U[t]
            i.push(a)
          }
          for (
            var Q = this.jpoint(null, null, null),
              o = this.jpoint(null, null, null),
              h = r;
            h > 0;
            h--
          ) {
            for (l = 0; l < i.length; l++)
              (a = i[l]) === h
                ? (o = o.mixedAdd(n.points[l]))
                : a === -h && (o = o.mixedAdd(n.points[l].neg()))
            Q = Q.add(o)
          }
          return Q.toP()
        }),
        (l.prototype._wnafMul = function(e, t) {
          var n = 4,
            U = e._getNAFPoints(n)
          n = U.wnd
          for (
            var r = U.points,
              i = d(t, n),
              l = this.jpoint(null, null, null),
              a = i.length - 1;
            a >= 0;
            a--
          ) {
            for (t = 0; a >= 0 && 0 === i[a]; a--) t++
            if ((a >= 0 && t++, (l = l.dblp(t)), a < 0)) break
            var Q = i[a]
            F(0 !== Q),
              (l =
                'affine' === e.type
                  ? Q > 0
                    ? l.mixedAdd(r[(Q - 1) >> 1])
                    : l.mixedAdd(r[(-Q - 1) >> 1].neg())
                  : Q > 0
                  ? l.add(r[(Q - 1) >> 1])
                  : l.add(r[(-Q - 1) >> 1].neg()))
          }
          return 'affine' === e.type ? l.toP() : l
        }),
        (l.prototype._wnafMulAdd = function(e, t, n, U, r) {
          for (
            var F = this._wnafT1,
              l = this._wnafT2,
              a = this._wnafT3,
              Q = 0,
              o = 0;
            o < U;
            o++
          ) {
            var h = (b = t[o])._getNAFPoints(e)
            ;(F[o] = h.wnd), (l[o] = h.points)
          }
          for (o = U - 1; o >= 1; o -= 2) {
            var c = o - 1,
              B = o
            if (1 === F[c] && 1 === F[B]) {
              var s = [t[c], null, null, t[B]]
              0 === t[c].y.cmp(t[B].y)
                ? ((s[1] = t[c].add(t[B])),
                  (s[2] = t[c].toJ().mixedAdd(t[B].neg())))
                : 0 === t[c].y.cmp(t[B].y.redNeg())
                ? ((s[1] = t[c].toJ().mixedAdd(t[B])),
                  (s[2] = t[c].add(t[B].neg())))
                : ((s[1] = t[c].toJ().mixedAdd(t[B])),
                  (s[2] = t[c].toJ().mixedAdd(t[B].neg())))
              var f = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                R = i(n[c], n[B])
              ;(Q = Math.max(R[0].length, Q)),
                (a[c] = new Array(Q)),
                (a[B] = new Array(Q))
              for (var V = 0; V < Q; V++) {
                var u = 0 | R[0][V],
                  S = 0 | R[1][V]
                ;(a[c][V] = f[3 * (u + 1) + (S + 1)]), (a[B][V] = 0), (l[c] = s)
              }
            } else
              (a[c] = d(n[c], F[c])),
                (a[B] = d(n[B], F[B])),
                (Q = Math.max(a[c].length, Q)),
                (Q = Math.max(a[B].length, Q))
          }
          var p = this.jpoint(null, null, null),
            W = this._wnafT4
          for (o = Q; o >= 0; o--) {
            for (var Z = 0; o >= 0; ) {
              var J = !0
              for (V = 0; V < U; V++)
                (W[V] = 0 | a[V][o]), 0 !== W[V] && (J = !1)
              if (!J) break
              Z++, o--
            }
            if ((o >= 0 && Z++, (p = p.dblp(Z)), o < 0)) break
            for (V = 0; V < U; V++) {
              var b,
                N = W[V]
              0 !== N &&
                (N > 0
                  ? (b = l[V][(N - 1) >> 1])
                  : N < 0 && (b = l[V][(-N - 1) >> 1].neg()),
                (p = 'affine' === b.type ? p.mixedAdd(b) : p.add(b)))
            }
          }
          for (o = 0; o < U; o++) l[o] = null
          return r ? p : p.toP()
        }),
        (l.BasePoint = a),
        (a.prototype.eq = function() {
          throw new Error('Not implemented')
        }),
        (a.prototype.validate = function() {
          return this.curve.validate(this)
        }),
        (l.prototype.decodePoint = function(e, t) {
          e = r.toArray(e, t)
          var n = this.p.byteLength()
          if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * n)
            return (
              6 === e[0]
                ? F(e[e.length - 1] % 2 == 0)
                : 7 === e[0] && F(e[e.length - 1] % 2 == 1),
              this.point(e.slice(1, 1 + n), e.slice(1 + n, 1 + 2 * n))
            )
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === n)
            return this.pointFromX(e.slice(1, 1 + n), 3 === e[0])
          throw new Error('Unknown point format')
        }),
        (a.prototype.encodeCompressed = function(e) {
          return this.encode(e, !0)
        }),
        (a.prototype._encode = function(e) {
          var t = this.curve.p.byteLength(),
            n = this.getX().toArray('be', t)
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(n)
            : [4].concat(n, this.getY().toArray('be', t))
        }),
        (a.prototype.encode = function(e, t) {
          return r.encode(this._encode(t), e)
        }),
        (a.prototype.precompute = function(e) {
          if (this.precomputed) return this
          var t = { doubles: null, naf: null, beta: null }
          return (
            (t.naf = this._getNAFPoints(8)),
            (t.doubles = this._getDoubles(4, e)),
            (t.beta = this._getBeta()),
            (this.precomputed = t),
            this
          )
        }),
        (a.prototype._hasDoubles = function(e) {
          if (!this.precomputed) return !1
          var t = this.precomputed.doubles
          return (
            !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
          )
        }),
        (a.prototype._getDoubles = function(e, t) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles
          for (var n = [this], U = this, r = 0; r < t; r += e) {
            for (var d = 0; d < e; d++) U = U.dbl()
            n.push(U)
          }
          return { step: e, points: n }
        }),
        (a.prototype._getNAFPoints = function(e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf
          for (
            var t = [this],
              n = (1 << e) - 1,
              U = 1 === n ? null : this.dbl(),
              r = 1;
            r < n;
            r++
          )
            t[r] = t[r - 1].add(U)
          return { wnd: e, points: t }
        }),
        (a.prototype._getBeta = function() {
          return null
        }),
        (a.prototype.dblp = function(e) {
          for (var t = this, n = 0; n < e; n++) t = t.dbl()
          return t
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(24),
        r = n(4),
        d = n(2),
        i = n(0),
        F = U.base,
        l = r.utils.assert
      function a(e) {
        F.call(this, 'short', e),
          (this.a = new d(e.a, 16).toRed(this.red)),
          (this.b = new d(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA =
            0 ===
            this.a
              .fromRed()
              .sub(this.p)
              .cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4))
      }
      function Q(e, t, n, U) {
        F.BasePoint.call(this, e, 'affine'),
          null === t && null === n
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new d(t, 16)),
              (this.y = new d(n, 16)),
              U &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1))
      }
      function o(e, t, n, U) {
        F.BasePoint.call(this, e, 'jacobian'),
          null === t && null === n && null === U
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new d(0)))
            : ((this.x = new d(t, 16)),
              (this.y = new d(n, 16)),
              (this.z = new d(U, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one)
      }
      i(a, F),
        (e.exports = a),
        (a.prototype._getEndomorphism = function(e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, n
            if (e.beta) t = new d(e.beta, 16).toRed(this.red)
            else {
              var U = this._getEndoRoots(this.p)
              t = (t = U[0].cmp(U[1]) < 0 ? U[0] : U[1]).toRed(this.red)
            }
            if (e.lambda) n = new d(e.lambda, 16)
            else {
              var r = this._getEndoRoots(this.n)
              0 === this.g.mul(r[0]).x.cmp(this.g.x.redMul(t))
                ? (n = r[0])
                : ((n = r[1]), l(0 === this.g.mul(n).x.cmp(this.g.x.redMul(t))))
            }
            return {
              beta: t,
              lambda: n,
              basis: e.basis
                ? e.basis.map(function(e) {
                    return { a: new d(e.a, 16), b: new d(e.b, 16) }
                  })
                : this._getEndoBasis(n),
            }
          }
        }),
        (a.prototype._getEndoRoots = function(e) {
          var t = e === this.p ? this.red : d.mont(e),
            n = new d(2).toRed(t).redInvm(),
            U = n.redNeg(),
            r = new d(3)
              .toRed(t)
              .redNeg()
              .redSqrt()
              .redMul(n)
          return [U.redAdd(r).fromRed(), U.redSub(r).fromRed()]
        }),
        (a.prototype._getEndoBasis = function(e) {
          for (
            var t,
              n,
              U,
              r,
              i,
              F,
              l,
              a,
              Q,
              o = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              h = e,
              c = this.n.clone(),
              B = new d(1),
              s = new d(0),
              f = new d(0),
              R = new d(1),
              V = 0;
            0 !== h.cmpn(0);

          ) {
            var u = c.div(h)
            ;(a = c.sub(u.mul(h))), (Q = f.sub(u.mul(B)))
            var S = R.sub(u.mul(s))
            if (!U && a.cmp(o) < 0)
              (t = l.neg()), (n = B), (U = a.neg()), (r = Q)
            else if (U && 2 == ++V) break
            ;(l = a), (c = h), (h = a), (f = B), (B = Q), (R = s), (s = S)
          }
          ;(i = a.neg()), (F = Q)
          var p = U.sqr().add(r.sqr())
          return (
            i
              .sqr()
              .add(F.sqr())
              .cmp(p) >= 0 && ((i = t), (F = n)),
            U.negative && ((U = U.neg()), (r = r.neg())),
            i.negative && ((i = i.neg()), (F = F.neg())),
            [{ a: U, b: r }, { a: i, b: F }]
          )
        }),
        (a.prototype._endoSplit = function(e) {
          var t = this.endo.basis,
            n = t[0],
            U = t[1],
            r = U.b.mul(e).divRound(this.n),
            d = n.b
              .neg()
              .mul(e)
              .divRound(this.n),
            i = r.mul(n.a),
            F = d.mul(U.a),
            l = r.mul(n.b),
            a = d.mul(U.b)
          return { k1: e.sub(i).sub(F), k2: l.add(a).neg() }
        }),
        (a.prototype.pointFromX = function(e, t) {
          ;(e = new d(e, 16)).red || (e = e.toRed(this.red))
          var n = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            U = n.redSqrt()
          if (
            0 !==
            U.redSqr()
              .redSub(n)
              .cmp(this.zero)
          )
            throw new Error('invalid point')
          var r = U.fromRed().isOdd()
          return ((t && !r) || (!t && r)) && (U = U.redNeg()), this.point(e, U)
        }),
        (a.prototype.validate = function(e) {
          if (e.inf) return !0
          var t = e.x,
            n = e.y,
            U = this.a.redMul(t),
            r = t
              .redSqr()
              .redMul(t)
              .redIAdd(U)
              .redIAdd(this.b)
          return (
            0 ===
            n
              .redSqr()
              .redISub(r)
              .cmpn(0)
          )
        }),
        (a.prototype._endoWnafMulAdd = function(e, t, n) {
          for (
            var U = this._endoWnafT1, r = this._endoWnafT2, d = 0;
            d < e.length;
            d++
          ) {
            var i = this._endoSplit(t[d]),
              F = e[d],
              l = F._getBeta()
            i.k1.negative && (i.k1.ineg(), (F = F.neg(!0))),
              i.k2.negative && (i.k2.ineg(), (l = l.neg(!0))),
              (U[2 * d] = F),
              (U[2 * d + 1] = l),
              (r[2 * d] = i.k1),
              (r[2 * d + 1] = i.k2)
          }
          for (
            var a = this._wnafMulAdd(1, U, r, 2 * d, n), Q = 0;
            Q < 2 * d;
            Q++
          )
            (U[Q] = null), (r[Q] = null)
          return a
        }),
        i(Q, F.BasePoint),
        (a.prototype.point = function(e, t, n) {
          return new Q(this, e, t, n)
        }),
        (a.prototype.pointFromJSON = function(e, t) {
          return Q.fromJSON(this, e, t)
        }),
        (Q.prototype._getBeta = function() {
          if (this.curve.endo) {
            var e = this.precomputed
            if (e && e.beta) return e.beta
            var t = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            )
            if (e) {
              var n = this.curve,
                U = function(e) {
                  return n.point(e.x.redMul(n.endo.beta), e.y)
                }
              ;(e.beta = t),
                (t.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(U) },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(U),
                  },
                })
            }
            return t
          }
        }),
        (Q.prototype.toJSON = function() {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y]
        }),
        (Q.fromJSON = function(e, t, n) {
          'string' == typeof t && (t = JSON.parse(t))
          var U = e.point(t[0], t[1], n)
          if (!t[2]) return U
          function r(t) {
            return e.point(t[0], t[1], n)
          }
          var d = t[2]
          return (
            (U.precomputed = {
              beta: null,
              doubles: d.doubles && {
                step: d.doubles.step,
                points: [U].concat(d.doubles.points.map(r)),
              },
              naf: d.naf && {
                wnd: d.naf.wnd,
                points: [U].concat(d.naf.points.map(r)),
              },
            }),
            U
          )
        }),
        (Q.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                '>'
        }),
        (Q.prototype.isInfinity = function() {
          return this.inf
        }),
        (Q.prototype.add = function(e) {
          if (this.inf) return e
          if (e.inf) return this
          if (this.eq(e)) return this.dbl()
          if (this.neg().eq(e)) return this.curve.point(null, null)
          if (0 === this.x.cmp(e.x)) return this.curve.point(null, null)
          var t = this.y.redSub(e.y)
          0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()))
          var n = t
              .redSqr()
              .redISub(this.x)
              .redISub(e.x),
            U = t.redMul(this.x.redSub(n)).redISub(this.y)
          return this.curve.point(n, U)
        }),
        (Q.prototype.dbl = function() {
          if (this.inf) return this
          var e = this.y.redAdd(this.y)
          if (0 === e.cmpn(0)) return this.curve.point(null, null)
          var t = this.curve.a,
            n = this.x.redSqr(),
            U = e.redInvm(),
            r = n
              .redAdd(n)
              .redIAdd(n)
              .redIAdd(t)
              .redMul(U),
            d = r.redSqr().redISub(this.x.redAdd(this.x)),
            i = r.redMul(this.x.redSub(d)).redISub(this.y)
          return this.curve.point(d, i)
        }),
        (Q.prototype.getX = function() {
          return this.x.fromRed()
        }),
        (Q.prototype.getY = function() {
          return this.y.fromRed()
        }),
        (Q.prototype.mul = function(e) {
          return (
            (e = new d(e, 16)),
            this._hasDoubles(e)
              ? this.curve._fixedNafMul(this, e)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [e])
              : this.curve._wnafMul(this, e)
          )
        }),
        (Q.prototype.mulAdd = function(e, t, n) {
          var U = [this, t],
            r = [e, n]
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(U, r)
            : this.curve._wnafMulAdd(1, U, r, 2)
        }),
        (Q.prototype.jmulAdd = function(e, t, n) {
          var U = [this, t],
            r = [e, n]
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(U, r, !0)
            : this.curve._wnafMulAdd(1, U, r, 2, !0)
        }),
        (Q.prototype.eq = function(e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          )
        }),
        (Q.prototype.neg = function(e) {
          if (this.inf) return this
          var t = this.curve.point(this.x, this.y.redNeg())
          if (e && this.precomputed) {
            var n = this.precomputed,
              U = function(e) {
                return e.neg()
              }
            t.precomputed = {
              naf: n.naf && { wnd: n.naf.wnd, points: n.naf.points.map(U) },
              doubles: n.doubles && {
                step: n.doubles.step,
                points: n.doubles.points.map(U),
              },
            }
          }
          return t
        }),
        (Q.prototype.toJ = function() {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one)
        }),
        i(o, F.BasePoint),
        (a.prototype.jpoint = function(e, t, n) {
          return new o(this, e, t, n)
        }),
        (o.prototype.toP = function() {
          if (this.isInfinity()) return this.curve.point(null, null)
          var e = this.z.redInvm(),
            t = e.redSqr(),
            n = this.x.redMul(t),
            U = this.y.redMul(t).redMul(e)
          return this.curve.point(n, U)
        }),
        (o.prototype.neg = function() {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }),
        (o.prototype.add = function(e) {
          if (this.isInfinity()) return e
          if (e.isInfinity()) return this
          var t = e.z.redSqr(),
            n = this.z.redSqr(),
            U = this.x.redMul(t),
            r = e.x.redMul(n),
            d = this.y.redMul(t.redMul(e.z)),
            i = e.y.redMul(n.redMul(this.z)),
            F = U.redSub(r),
            l = d.redSub(i)
          if (0 === F.cmpn(0))
            return 0 !== l.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl()
          var a = F.redSqr(),
            Q = a.redMul(F),
            o = U.redMul(a),
            h = l
              .redSqr()
              .redIAdd(Q)
              .redISub(o)
              .redISub(o),
            c = l.redMul(o.redISub(h)).redISub(d.redMul(Q)),
            B = this.z.redMul(e.z).redMul(F)
          return this.curve.jpoint(h, c, B)
        }),
        (o.prototype.mixedAdd = function(e) {
          if (this.isInfinity()) return e.toJ()
          if (e.isInfinity()) return this
          var t = this.z.redSqr(),
            n = this.x,
            U = e.x.redMul(t),
            r = this.y,
            d = e.y.redMul(t).redMul(this.z),
            i = n.redSub(U),
            F = r.redSub(d)
          if (0 === i.cmpn(0))
            return 0 !== F.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl()
          var l = i.redSqr(),
            a = l.redMul(i),
            Q = n.redMul(l),
            o = F.redSqr()
              .redIAdd(a)
              .redISub(Q)
              .redISub(Q),
            h = F.redMul(Q.redISub(o)).redISub(r.redMul(a)),
            c = this.z.redMul(i)
          return this.curve.jpoint(o, h, c)
        }),
        (o.prototype.dblp = function(e) {
          if (0 === e) return this
          if (this.isInfinity()) return this
          if (!e) return this.dbl()
          if (this.curve.zeroA || this.curve.threeA) {
            for (var t = this, n = 0; n < e; n++) t = t.dbl()
            return t
          }
          var U = this.curve.a,
            r = this.curve.tinv,
            d = this.x,
            i = this.y,
            F = this.z,
            l = F.redSqr().redSqr(),
            a = i.redAdd(i)
          for (n = 0; n < e; n++) {
            var Q = d.redSqr(),
              o = a.redSqr(),
              h = o.redSqr(),
              c = Q.redAdd(Q)
                .redIAdd(Q)
                .redIAdd(U.redMul(l)),
              B = d.redMul(o),
              s = c.redSqr().redISub(B.redAdd(B)),
              f = B.redISub(s),
              R = c.redMul(f)
            R = R.redIAdd(R).redISub(h)
            var V = a.redMul(F)
            n + 1 < e && (l = l.redMul(h)), (d = s), (F = V), (a = R)
          }
          return this.curve.jpoint(d, a.redMul(r), F)
        }),
        (o.prototype.dbl = function() {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl()
        }),
        (o.prototype._zeroDbl = function() {
          var e, t, n
          if (this.zOne) {
            var U = this.x.redSqr(),
              r = this.y.redSqr(),
              d = r.redSqr(),
              i = this.x
                .redAdd(r)
                .redSqr()
                .redISub(U)
                .redISub(d)
            i = i.redIAdd(i)
            var F = U.redAdd(U).redIAdd(U),
              l = F.redSqr()
                .redISub(i)
                .redISub(i),
              a = d.redIAdd(d)
            ;(a = (a = a.redIAdd(a)).redIAdd(a)),
              (e = l),
              (t = F.redMul(i.redISub(l)).redISub(a)),
              (n = this.y.redAdd(this.y))
          } else {
            var Q = this.x.redSqr(),
              o = this.y.redSqr(),
              h = o.redSqr(),
              c = this.x
                .redAdd(o)
                .redSqr()
                .redISub(Q)
                .redISub(h)
            c = c.redIAdd(c)
            var B = Q.redAdd(Q).redIAdd(Q),
              s = B.redSqr(),
              f = h.redIAdd(h)
            ;(f = (f = f.redIAdd(f)).redIAdd(f)),
              (e = s.redISub(c).redISub(c)),
              (t = B.redMul(c.redISub(e)).redISub(f)),
              (n = (n = this.y.redMul(this.z)).redIAdd(n))
          }
          return this.curve.jpoint(e, t, n)
        }),
        (o.prototype._threeDbl = function() {
          var e, t, n
          if (this.zOne) {
            var U = this.x.redSqr(),
              r = this.y.redSqr(),
              d = r.redSqr(),
              i = this.x
                .redAdd(r)
                .redSqr()
                .redISub(U)
                .redISub(d)
            i = i.redIAdd(i)
            var F = U.redAdd(U)
                .redIAdd(U)
                .redIAdd(this.curve.a),
              l = F.redSqr()
                .redISub(i)
                .redISub(i)
            e = l
            var a = d.redIAdd(d)
            ;(a = (a = a.redIAdd(a)).redIAdd(a)),
              (t = F.redMul(i.redISub(l)).redISub(a)),
              (n = this.y.redAdd(this.y))
          } else {
            var Q = this.z.redSqr(),
              o = this.y.redSqr(),
              h = this.x.redMul(o),
              c = this.x.redSub(Q).redMul(this.x.redAdd(Q))
            c = c.redAdd(c).redIAdd(c)
            var B = h.redIAdd(h),
              s = (B = B.redIAdd(B)).redAdd(B)
            ;(e = c.redSqr().redISub(s)),
              (n = this.y
                .redAdd(this.z)
                .redSqr()
                .redISub(o)
                .redISub(Q))
            var f = o.redSqr()
            ;(f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f)),
              (t = c.redMul(B.redISub(e)).redISub(f))
          }
          return this.curve.jpoint(e, t, n)
        }),
        (o.prototype._dbl = function() {
          var e = this.curve.a,
            t = this.x,
            n = this.y,
            U = this.z,
            r = U.redSqr().redSqr(),
            d = t.redSqr(),
            i = n.redSqr(),
            F = d
              .redAdd(d)
              .redIAdd(d)
              .redIAdd(e.redMul(r)),
            l = t.redAdd(t),
            a = (l = l.redIAdd(l)).redMul(i),
            Q = F.redSqr().redISub(a.redAdd(a)),
            o = a.redISub(Q),
            h = i.redSqr()
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h)
          var c = F.redMul(o).redISub(h),
            B = n.redAdd(n).redMul(U)
          return this.curve.jpoint(Q, c, B)
        }),
        (o.prototype.trpl = function() {
          if (!this.curve.zeroA) return this.dbl().add(this)
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr(),
            U = t.redSqr(),
            r = e.redAdd(e).redIAdd(e),
            d = r.redSqr(),
            i = this.x
              .redAdd(t)
              .redSqr()
              .redISub(e)
              .redISub(U),
            F = (i = (i = (i = i.redIAdd(i)).redAdd(i).redIAdd(i)).redISub(
              d
            )).redSqr(),
            l = U.redIAdd(U)
          l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l)
          var a = r
              .redIAdd(i)
              .redSqr()
              .redISub(d)
              .redISub(F)
              .redISub(l),
            Q = t.redMul(a)
          Q = (Q = Q.redIAdd(Q)).redIAdd(Q)
          var o = this.x.redMul(F).redISub(Q)
          o = (o = o.redIAdd(o)).redIAdd(o)
          var h = this.y.redMul(a.redMul(l.redISub(a)).redISub(i.redMul(F)))
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h)
          var c = this.z
            .redAdd(i)
            .redSqr()
            .redISub(n)
            .redISub(F)
          return this.curve.jpoint(o, h, c)
        }),
        (o.prototype.mul = function(e, t) {
          return (e = new d(e, t)), this.curve._wnafMul(this, e)
        }),
        (o.prototype.eq = function(e) {
          if ('affine' === e.type) return this.eq(e.toJ())
          if (this === e) return !0
          var t = this.z.redSqr(),
            n = e.z.redSqr()
          if (
            0 !==
            this.x
              .redMul(n)
              .redISub(e.x.redMul(t))
              .cmpn(0)
          )
            return !1
          var U = t.redMul(this.z),
            r = n.redMul(e.z)
          return (
            0 ===
            this.y
              .redMul(r)
              .redISub(e.y.redMul(U))
              .cmpn(0)
          )
        }),
        (o.prototype.eqXToP = function(e) {
          var t = this.z.redSqr(),
            n = e.toRed(this.curve.red).redMul(t)
          if (0 === this.x.cmp(n)) return !0
          for (var U = e.clone(), r = this.curve.redN.redMul(t); ; ) {
            if ((U.iadd(this.curve.n), U.cmp(this.curve.p) >= 0)) return !1
            if ((n.redIAdd(r), 0 === this.x.cmp(n))) return !0
          }
        }),
        (o.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC JPoint Infinity>'
            : '<EC JPoint x: ' +
                this.x.toString(16, 2) +
                ' y: ' +
                this.y.toString(16, 2) +
                ' z: ' +
                this.z.toString(16, 2) +
                '>'
        }),
        (o.prototype.isInfinity = function() {
          return 0 === this.z.cmpn(0)
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(24),
        r = n(2),
        d = n(0),
        i = U.base,
        F = n(4).utils
      function l(e) {
        i.call(this, 'mont', e),
          (this.a = new r(e.a, 16).toRed(this.red)),
          (this.b = new r(e.b, 16).toRed(this.red)),
          (this.i4 = new r(4).toRed(this.red).redInvm()),
          (this.two = new r(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two)))
      }
      function a(e, t, n) {
        i.BasePoint.call(this, e, 'projective'),
          null === t && null === n
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new r(t, 16)),
              (this.z = new r(n, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)))
      }
      d(l, i),
        (e.exports = l),
        (l.prototype.validate = function(e) {
          var t = e.normalize().x,
            n = t.redSqr(),
            U = n
              .redMul(t)
              .redAdd(n.redMul(this.a))
              .redAdd(t)
          return (
            0 ===
            U.redSqrt()
              .redSqr()
              .cmp(U)
          )
        }),
        d(a, i.BasePoint),
        (l.prototype.decodePoint = function(e, t) {
          return this.point(F.toArray(e, t), 1)
        }),
        (l.prototype.point = function(e, t) {
          return new a(this, e, t)
        }),
        (l.prototype.pointFromJSON = function(e) {
          return a.fromJSON(this, e)
        }),
        (a.prototype.precompute = function() {}),
        (a.prototype._encode = function() {
          return this.getX().toArray('be', this.curve.p.byteLength())
        }),
        (a.fromJSON = function(e, t) {
          return new a(e, t[0], t[1] || e.one)
        }),
        (a.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' z: ' +
                this.z.fromRed().toString(16, 2) +
                '>'
        }),
        (a.prototype.isInfinity = function() {
          return 0 === this.z.cmpn(0)
        }),
        (a.prototype.dbl = function() {
          var e = this.x.redAdd(this.z).redSqr(),
            t = this.x.redSub(this.z).redSqr(),
            n = e.redSub(t),
            U = e.redMul(t),
            r = n.redMul(t.redAdd(this.curve.a24.redMul(n)))
          return this.curve.point(U, r)
        }),
        (a.prototype.add = function() {
          throw new Error('Not supported on Montgomery curve')
        }),
        (a.prototype.diffAdd = function(e, t) {
          var n = this.x.redAdd(this.z),
            U = this.x.redSub(this.z),
            r = e.x.redAdd(e.z),
            d = e.x.redSub(e.z).redMul(n),
            i = r.redMul(U),
            F = t.z.redMul(d.redAdd(i).redSqr()),
            l = t.x.redMul(d.redISub(i).redSqr())
          return this.curve.point(F, l)
        }),
        (a.prototype.mul = function(e) {
          for (
            var t = e.clone(),
              n = this,
              U = this.curve.point(null, null),
              r = [];
            0 !== t.cmpn(0);
            t.iushrn(1)
          )
            r.push(t.andln(1))
          for (var d = r.length - 1; d >= 0; d--)
            0 === r[d]
              ? ((n = n.diffAdd(U, this)), (U = U.dbl()))
              : ((U = n.diffAdd(U, this)), (n = n.dbl()))
          return U
        }),
        (a.prototype.mulAdd = function() {
          throw new Error('Not supported on Montgomery curve')
        }),
        (a.prototype.jumlAdd = function() {
          throw new Error('Not supported on Montgomery curve')
        }),
        (a.prototype.eq = function(e) {
          return 0 === this.getX().cmp(e.getX())
        }),
        (a.prototype.normalize = function() {
          return (
            (this.x = this.x.redMul(this.z.redInvm())),
            (this.z = this.curve.one),
            this
          )
        }),
        (a.prototype.getX = function() {
          return this.normalize(), this.x.fromRed()
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(24),
        r = n(4),
        d = n(2),
        i = n(0),
        F = U.base,
        l = r.utils.assert
      function a(e) {
        ;(this.twisted = 1 != (0 | e.a)),
          (this.mOneA = this.twisted && -1 == (0 | e.a)),
          (this.extended = this.mOneA),
          F.call(this, 'edwards', e),
          (this.a = new d(e.a, 16).umod(this.red.m)),
          (this.a = this.a.toRed(this.red)),
          (this.c = new d(e.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new d(e.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          l(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = 1 == (0 | e.c))
      }
      function Q(e, t, n, U, r) {
        F.BasePoint.call(this, e, 'projective'),
          null === t && null === n && null === U
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new d(t, 16)),
              (this.y = new d(n, 16)),
              (this.z = U ? new d(U, 16) : this.curve.one),
              (this.t = r && new d(r, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              this.curve.extended &&
                !this.t &&
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
      }
      i(a, F),
        (e.exports = a),
        (a.prototype._mulA = function(e) {
          return this.mOneA ? e.redNeg() : this.a.redMul(e)
        }),
        (a.prototype._mulC = function(e) {
          return this.oneC ? e : this.c.redMul(e)
        }),
        (a.prototype.jpoint = function(e, t, n, U) {
          return this.point(e, t, n, U)
        }),
        (a.prototype.pointFromX = function(e, t) {
          ;(e = new d(e, 16)).red || (e = e.toRed(this.red))
          var n = e.redSqr(),
            U = this.c2.redSub(this.a.redMul(n)),
            r = this.one.redSub(this.c2.redMul(this.d).redMul(n)),
            i = U.redMul(r.redInvm()),
            F = i.redSqrt()
          if (
            0 !==
            F.redSqr()
              .redSub(i)
              .cmp(this.zero)
          )
            throw new Error('invalid point')
          var l = F.fromRed().isOdd()
          return ((t && !l) || (!t && l)) && (F = F.redNeg()), this.point(e, F)
        }),
        (a.prototype.pointFromY = function(e, t) {
          ;(e = new d(e, 16)).red || (e = e.toRed(this.red))
          var n = e.redSqr(),
            U = n.redSub(this.c2),
            r = n
              .redMul(this.d)
              .redMul(this.c2)
              .redSub(this.a),
            i = U.redMul(r.redInvm())
          if (0 === i.cmp(this.zero)) {
            if (t) throw new Error('invalid point')
            return this.point(this.zero, e)
          }
          var F = i.redSqrt()
          if (
            0 !==
            F.redSqr()
              .redSub(i)
              .cmp(this.zero)
          )
            throw new Error('invalid point')
          return F.fromRed().isOdd() !== t && (F = F.redNeg()), this.point(F, e)
        }),
        (a.prototype.validate = function(e) {
          if (e.isInfinity()) return !0
          e.normalize()
          var t = e.x.redSqr(),
            n = e.y.redSqr(),
            U = t.redMul(this.a).redAdd(n),
            r = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(n)))
          return 0 === U.cmp(r)
        }),
        i(Q, F.BasePoint),
        (a.prototype.pointFromJSON = function(e) {
          return Q.fromJSON(this, e)
        }),
        (a.prototype.point = function(e, t, n, U) {
          return new Q(this, e, t, n, U)
        }),
        (Q.fromJSON = function(e, t) {
          return new Q(e, t[0], t[1], t[2])
        }),
        (Q.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                ' z: ' +
                this.z.fromRed().toString(16, 2) +
                '>'
        }),
        (Q.prototype.isInfinity = function() {
          return (
            0 === this.x.cmpn(0) &&
            (0 === this.y.cmp(this.z) ||
              (this.zOne && 0 === this.y.cmp(this.curve.c)))
          )
        }),
        (Q.prototype._extDbl = function() {
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr()
          n = n.redIAdd(n)
          var U = this.curve._mulA(e),
            r = this.x
              .redAdd(this.y)
              .redSqr()
              .redISub(e)
              .redISub(t),
            d = U.redAdd(t),
            i = d.redSub(n),
            F = U.redSub(t),
            l = r.redMul(i),
            a = d.redMul(F),
            Q = r.redMul(F),
            o = i.redMul(d)
          return this.curve.point(l, a, o, Q)
        }),
        (Q.prototype._projDbl = function() {
          var e,
            t,
            n,
            U = this.x.redAdd(this.y).redSqr(),
            r = this.x.redSqr(),
            d = this.y.redSqr()
          if (this.curve.twisted) {
            var i = (a = this.curve._mulA(r)).redAdd(d)
            if (this.zOne)
              (e = U.redSub(r)
                .redSub(d)
                .redMul(i.redSub(this.curve.two))),
                (t = i.redMul(a.redSub(d))),
                (n = i
                  .redSqr()
                  .redSub(i)
                  .redSub(i))
            else {
              var F = this.z.redSqr(),
                l = i.redSub(F).redISub(F)
              ;(e = U.redSub(r)
                .redISub(d)
                .redMul(l)),
                (t = i.redMul(a.redSub(d))),
                (n = i.redMul(l))
            }
          } else {
            var a = r.redAdd(d)
            ;(F = this.curve._mulC(this.z).redSqr()),
              (l = a.redSub(F).redSub(F)),
              (e = this.curve._mulC(U.redISub(a)).redMul(l)),
              (t = this.curve._mulC(a).redMul(r.redISub(d))),
              (n = a.redMul(l))
          }
          return this.curve.point(e, t, n)
        }),
        (Q.prototype.dbl = function() {
          return this.isInfinity()
            ? this
            : this.curve.extended
            ? this._extDbl()
            : this._projDbl()
        }),
        (Q.prototype._extAdd = function(e) {
          var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            n = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            U = this.t.redMul(this.curve.dd).redMul(e.t),
            r = this.z.redMul(e.z.redAdd(e.z)),
            d = n.redSub(t),
            i = r.redSub(U),
            F = r.redAdd(U),
            l = n.redAdd(t),
            a = d.redMul(i),
            Q = F.redMul(l),
            o = d.redMul(l),
            h = i.redMul(F)
          return this.curve.point(a, Q, h, o)
        }),
        (Q.prototype._projAdd = function(e) {
          var t,
            n,
            U = this.z.redMul(e.z),
            r = U.redSqr(),
            d = this.x.redMul(e.x),
            i = this.y.redMul(e.y),
            F = this.curve.d.redMul(d).redMul(i),
            l = r.redSub(F),
            a = r.redAdd(F),
            Q = this.x
              .redAdd(this.y)
              .redMul(e.x.redAdd(e.y))
              .redISub(d)
              .redISub(i),
            o = U.redMul(l).redMul(Q)
          return (
            this.curve.twisted
              ? ((t = U.redMul(a).redMul(i.redSub(this.curve._mulA(d)))),
                (n = l.redMul(a)))
              : ((t = U.redMul(a).redMul(i.redSub(d))),
                (n = this.curve._mulC(l).redMul(a))),
            this.curve.point(o, t, n)
          )
        }),
        (Q.prototype.add = function(e) {
          return this.isInfinity()
            ? e
            : e.isInfinity()
            ? this
            : this.curve.extended
            ? this._extAdd(e)
            : this._projAdd(e)
        }),
        (Q.prototype.mul = function(e) {
          return this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve._wnafMul(this, e)
        }),
        (Q.prototype.mulAdd = function(e, t, n) {
          return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !1)
        }),
        (Q.prototype.jmulAdd = function(e, t, n) {
          return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !0)
        }),
        (Q.prototype.normalize = function() {
          if (this.zOne) return this
          var e = this.z.redInvm()
          return (
            (this.x = this.x.redMul(e)),
            (this.y = this.y.redMul(e)),
            this.t && (this.t = this.t.redMul(e)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          )
        }),
        (Q.prototype.neg = function() {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg()
          )
        }),
        (Q.prototype.getX = function() {
          return this.normalize(), this.x.fromRed()
        }),
        (Q.prototype.getY = function() {
          return this.normalize(), this.y.fromRed()
        }),
        (Q.prototype.eq = function(e) {
          return (
            this === e ||
            (0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()))
          )
        }),
        (Q.prototype.eqXToP = function(e) {
          var t = e.toRed(this.curve.red).redMul(this.z)
          if (0 === this.x.cmp(t)) return !0
          for (var n = e.clone(), U = this.curve.redN.redMul(this.z); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1
            if ((t.redIAdd(U), 0 === this.x.cmp(t))) return !0
          }
        }),
        (Q.prototype.toP = Q.prototype.normalize),
        (Q.prototype.mixedAdd = Q.prototype.add)
    },
    function(e, t, n) {
      'use strict'
      var U,
        r = t,
        d = n(39),
        i = n(4),
        F = i.utils.assert
      function l(e) {
        'short' === e.type
          ? (this.curve = new i.curve.short(e))
          : 'edwards' === e.type
          ? (this.curve = new i.curve.edwards(e))
          : (this.curve = new i.curve.mont(e)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = e.hash),
          F(this.g.validate(), 'Invalid curve'),
          F(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O')
      }
      function a(e, t) {
        Object.defineProperty(r, e, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            var n = new l(t)
            return (
              Object.defineProperty(r, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
              }),
              n
            )
          },
        })
      }
      ;(r.PresetCurve = l),
        a('p192', {
          type: 'short',
          prime: 'p192',
          p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
          a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
          b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
          n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
          hash: d.sha256,
          gRed: !1,
          g: [
            '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
            '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811',
          ],
        }),
        a('p224', {
          type: 'short',
          prime: 'p224',
          p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
          a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
          b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
          n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
          hash: d.sha256,
          gRed: !1,
          g: [
            'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
            'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34',
          ],
        }),
        a('p256', {
          type: 'short',
          prime: null,
          p:
            'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
          a:
            'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
          b:
            '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
          n:
            'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
          hash: d.sha256,
          gRed: !1,
          g: [
            '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
            '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5',
          ],
        }),
        a('p384', {
          type: 'short',
          prime: null,
          p:
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff',
          a:
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc',
          b:
            'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
          n:
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
          hash: d.sha384,
          gRed: !1,
          g: [
            'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7',
            '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f',
          ],
        }),
        a('p521', {
          type: 'short',
          prime: null,
          p:
            '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff',
          a:
            '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc',
          b:
            '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
          n:
            '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
          hash: d.sha512,
          gRed: !1,
          g: [
            '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
            '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650',
          ],
        }),
        a('curve25519', {
          type: 'mont',
          prime: 'p25519',
          p:
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
          a: '76d06',
          b: '1',
          n:
            '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
          hash: d.sha256,
          gRed: !1,
          g: ['9'],
        }),
        a('ed25519', {
          type: 'edwards',
          prime: 'p25519',
          p:
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
          a: '-1',
          c: '1',
          d:
            '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
          n:
            '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
          hash: d.sha256,
          gRed: !1,
          g: [
            '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',
            '6666666666666666666666666666666666666666666666666666666666666658',
          ],
        })
      try {
        U = n(138)
      } catch (e) {
        U = void 0
      }
      a('secp256k1', {
        type: 'short',
        prime: 'k256',
        p:
          'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
        a: '0',
        b: '7',
        n:
          'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
        h: '1',
        hash: d.sha256,
        beta:
          '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
        lambda:
          '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
        basis: [
          {
            a: '3086d221a7d46bcde86c90e49284eb15',
            b: '-e4437ed6010e88286f547fa90abfe4c3',
          },
          {
            a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
            b: '3086d221a7d46bcde86c90e49284eb15',
          },
        ],
        gRed: !1,
        g: [
          '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
          '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
          U,
        ],
      })
    },
    function(e, t, n) {
      'use strict'
      ;(t.sha1 = n(133)),
        (t.sha224 = n(134)),
        (t.sha256 = n(67)),
        (t.sha384 = n(135)),
        (t.sha512 = n(68))
    },
    function(e, t, n) {
      'use strict'
      var U = n(7),
        r = n(18),
        d = n(66),
        i = U.rotl32,
        F = U.sum32,
        l = U.sum32_5,
        a = d.ft_1,
        Q = r.BlockHash,
        o = [1518500249, 1859775393, 2400959708, 3395469782]
      function h() {
        if (!(this instanceof h)) return new h()
        Q.call(this),
          (this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520,
          ]),
          (this.W = new Array(80))
      }
      U.inherits(h, Q),
        (e.exports = h),
        (h.blockSize = 512),
        (h.outSize = 160),
        (h.hmacStrength = 80),
        (h.padLength = 64),
        (h.prototype._update = function(e, t) {
          for (var n = this.W, U = 0; U < 16; U++) n[U] = e[t + U]
          for (; U < n.length; U++)
            n[U] = i(n[U - 3] ^ n[U - 8] ^ n[U - 14] ^ n[U - 16], 1)
          var r = this.h[0],
            d = this.h[1],
            Q = this.h[2],
            h = this.h[3],
            c = this.h[4]
          for (U = 0; U < n.length; U++) {
            var B = ~~(U / 20),
              s = l(i(r, 5), a(B, d, Q, h), c, n[U], o[B])
            ;(c = h), (h = Q), (Q = i(d, 30)), (d = r), (r = s)
          }
          ;(this.h[0] = F(this.h[0], r)),
            (this.h[1] = F(this.h[1], d)),
            (this.h[2] = F(this.h[2], Q)),
            (this.h[3] = F(this.h[3], h)),
            (this.h[4] = F(this.h[4], c))
        }),
        (h.prototype._digest = function(e) {
          return 'hex' === e
            ? U.toHex32(this.h, 'big')
            : U.split32(this.h, 'big')
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(7),
        r = n(67)
      function d() {
        if (!(this instanceof d)) return new d()
        r.call(this),
          (this.h = [
            3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428,
          ])
      }
      U.inherits(d, r),
        (e.exports = d),
        (d.blockSize = 512),
        (d.outSize = 224),
        (d.hmacStrength = 192),
        (d.padLength = 64),
        (d.prototype._digest = function(e) {
          return 'hex' === e
            ? U.toHex32(this.h.slice(0, 7), 'big')
            : U.split32(this.h.slice(0, 7), 'big')
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(7),
        r = n(68)
      function d() {
        if (!(this instanceof d)) return new d()
        r.call(this),
          (this.h = [
            3418070365,
            3238371032,
            1654270250,
            914150663,
            2438529370,
            812702999,
            355462360,
            4144912697,
            1731405415,
            4290775857,
            2394180231,
            1750603025,
            3675008525,
            1694076839,
            1203062813,
            3204075428,
          ])
      }
      U.inherits(d, r),
        (e.exports = d),
        (d.blockSize = 1024),
        (d.outSize = 384),
        (d.hmacStrength = 192),
        (d.padLength = 128),
        (d.prototype._digest = function(e) {
          return 'hex' === e
            ? U.toHex32(this.h.slice(0, 12), 'big')
            : U.split32(this.h.slice(0, 12), 'big')
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(7),
        r = n(18),
        d = U.rotl32,
        i = U.sum32,
        F = U.sum32_3,
        l = U.sum32_4,
        a = r.BlockHash
      function Q() {
        if (!(this instanceof Q)) return new Q()
        a.call(this),
          (this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520,
          ]),
          (this.endian = 'little')
      }
      function o(e, t, n, U) {
        return e <= 15
          ? t ^ n ^ U
          : e <= 31
          ? (t & n) | (~t & U)
          : e <= 47
          ? (t | ~n) ^ U
          : e <= 63
          ? (t & U) | (n & ~U)
          : t ^ (n | ~U)
      }
      function h(e) {
        return e <= 15
          ? 0
          : e <= 31
          ? 1518500249
          : e <= 47
          ? 1859775393
          : e <= 63
          ? 2400959708
          : 2840853838
      }
      function c(e) {
        return e <= 15
          ? 1352829926
          : e <= 31
          ? 1548603684
          : e <= 47
          ? 1836072691
          : e <= 63
          ? 2053994217
          : 0
      }
      U.inherits(Q, a),
        (t.ripemd160 = Q),
        (Q.blockSize = 512),
        (Q.outSize = 160),
        (Q.hmacStrength = 192),
        (Q.padLength = 64),
        (Q.prototype._update = function(e, t) {
          for (
            var n = this.h[0],
              U = this.h[1],
              r = this.h[2],
              a = this.h[3],
              Q = this.h[4],
              V = n,
              u = U,
              S = r,
              p = a,
              W = Q,
              Z = 0;
            Z < 80;
            Z++
          ) {
            var J = i(d(l(n, o(Z, U, r, a), e[B[Z] + t], h(Z)), f[Z]), Q)
            ;(n = Q),
              (Q = a),
              (a = d(r, 10)),
              (r = U),
              (U = J),
              (J = i(d(l(V, o(79 - Z, u, S, p), e[s[Z] + t], c(Z)), R[Z]), W)),
              (V = W),
              (W = p),
              (p = d(S, 10)),
              (S = u),
              (u = J)
          }
          ;(J = F(this.h[1], r, p)),
            (this.h[1] = F(this.h[2], a, W)),
            (this.h[2] = F(this.h[3], Q, V)),
            (this.h[3] = F(this.h[4], n, u)),
            (this.h[4] = F(this.h[0], U, S)),
            (this.h[0] = J)
        }),
        (Q.prototype._digest = function(e) {
          return 'hex' === e
            ? U.toHex32(this.h, 'little')
            : U.split32(this.h, 'little')
        })
      var B = [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13,
        ],
        s = [
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11,
        ],
        f = [
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6,
        ],
        R = [
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11,
        ]
    },
    function(e, t, n) {
      'use strict'
      var U = n(7),
        r = n(6)
      function d(e, t, n) {
        if (!(this instanceof d)) return new d(e, t, n)
        ;(this.Hash = e),
          (this.blockSize = e.blockSize / 8),
          (this.outSize = e.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(U.toArray(t, n))
      }
      ;(e.exports = d),
        (d.prototype._init = function(e) {
          e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
            r(e.length <= this.blockSize)
          for (var t = e.length; t < this.blockSize; t++) e.push(0)
          for (t = 0; t < e.length; t++) e[t] ^= 54
          for (this.inner = new this.Hash().update(e), t = 0; t < e.length; t++)
            e[t] ^= 106
          this.outer = new this.Hash().update(e)
        }),
        (d.prototype.update = function(e, t) {
          return this.inner.update(e, t), this
        }),
        (d.prototype.digest = function(e) {
          return this.outer.update(this.inner.digest()), this.outer.digest(e)
        })
    },
    function(e, t) {
      e.exports = {
        doubles: {
          step: 4,
          points: [
            [
              'e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a',
              'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821',
            ],
            [
              '8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508',
              '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf',
            ],
            [
              '175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739',
              'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695',
            ],
            [
              '363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640',
              '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9',
            ],
            [
              '8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c',
              '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36',
            ],
            [
              '723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda',
              '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f',
            ],
            [
              'eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa',
              '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999',
            ],
            [
              '100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0',
              'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09',
            ],
            [
              'e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d',
              '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d',
            ],
            [
              'feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d',
              'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088',
            ],
            [
              'da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1',
              '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d',
            ],
            [
              '53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0',
              '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8',
            ],
            [
              '8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047',
              '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a',
            ],
            [
              '385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862',
              '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453',
            ],
            [
              '6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7',
              '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160',
            ],
            [
              '3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd',
              '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0',
            ],
            [
              '85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83',
              '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6',
            ],
            [
              '948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a',
              '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589',
            ],
            [
              '6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8',
              'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17',
            ],
            [
              'e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d',
              '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda',
            ],
            [
              'e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725',
              '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd',
            ],
            [
              '213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754',
              '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2',
            ],
            [
              '4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c',
              '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6',
            ],
            [
              'fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6',
              '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f',
            ],
            [
              '76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39',
              'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01',
            ],
            [
              'c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891',
              '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3',
            ],
            [
              'd895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b',
              'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f',
            ],
            [
              'b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03',
              '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7',
            ],
            [
              'e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d',
              'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78',
            ],
            [
              'a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070',
              '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1',
            ],
            [
              '90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4',
              'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150',
            ],
            [
              '8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da',
              '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82',
            ],
            [
              'e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11',
              '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc',
            ],
            [
              '8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e',
              'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b',
            ],
            [
              'e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41',
              '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51',
            ],
            [
              'b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef',
              '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45',
            ],
            [
              'd68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8',
              'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120',
            ],
            [
              '324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d',
              '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84',
            ],
            [
              '4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96',
              '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d',
            ],
            [
              '9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd',
              'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d',
            ],
            [
              '6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5',
              '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8',
            ],
            [
              'a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266',
              '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8',
            ],
            [
              '7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71',
              '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac',
            ],
            [
              '928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac',
              'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f',
            ],
            [
              '85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751',
              '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962',
            ],
            [
              'ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e',
              '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907',
            ],
            [
              '827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241',
              'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec',
            ],
            [
              'eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3',
              'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d',
            ],
            [
              'e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f',
              '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414',
            ],
            [
              '1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19',
              'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd',
            ],
            [
              '146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be',
              'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0',
            ],
            [
              'fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9',
              '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811',
            ],
            [
              'da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2',
              '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1',
            ],
            [
              'a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13',
              '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c',
            ],
            [
              '174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c',
              'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73',
            ],
            [
              '959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba',
              '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd',
            ],
            [
              'd2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151',
              'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405',
            ],
            [
              '64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073',
              'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589',
            ],
            [
              '8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458',
              '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e',
            ],
            [
              '13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b',
              '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27',
            ],
            [
              'bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366',
              'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1',
            ],
            [
              '8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa',
              '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482',
            ],
            [
              '8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0',
              '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945',
            ],
            [
              'dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787',
              '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573',
            ],
            [
              'f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e',
              'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82',
            ],
          ],
        },
        naf: {
          wnd: 7,
          points: [
            [
              'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
              '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672',
            ],
            [
              '2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4',
              'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6',
            ],
            [
              '5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc',
              '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da',
            ],
            [
              'acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe',
              'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37',
            ],
            [
              '774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb',
              'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b',
            ],
            [
              'f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8',
              'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81',
            ],
            [
              'd7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e',
              '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58',
            ],
            [
              'defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34',
              '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77',
            ],
            [
              '2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c',
              '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a',
            ],
            [
              '352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5',
              '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c',
            ],
            [
              '2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f',
              '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67',
            ],
            [
              '9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714',
              '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402',
            ],
            [
              'daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729',
              'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55',
            ],
            [
              'c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db',
              '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482',
            ],
            [
              '6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4',
              'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82',
            ],
            [
              '1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5',
              'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396',
            ],
            [
              '605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479',
              '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49',
            ],
            [
              '62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d',
              '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf',
            ],
            [
              '80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f',
              '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a',
            ],
            [
              '7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb',
              'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7',
            ],
            [
              'd528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9',
              'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933',
            ],
            [
              '49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963',
              '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a',
            ],
            [
              '77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74',
              '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6',
            ],
            [
              'f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530',
              'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37',
            ],
            [
              '463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b',
              '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e',
            ],
            [
              'f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247',
              'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6',
            ],
            [
              'caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1',
              'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476',
            ],
            [
              '2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120',
              '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40',
            ],
            [
              '7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435',
              '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61',
            ],
            [
              '754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18',
              '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683',
            ],
            [
              'e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8',
              '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5',
            ],
            [
              '186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb',
              '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b',
            ],
            [
              'df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f',
              '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417',
            ],
            [
              '5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143',
              'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868',
            ],
            [
              '290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba',
              'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a',
            ],
            [
              'af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45',
              'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6',
            ],
            [
              '766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a',
              '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996',
            ],
            [
              '59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e',
              'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e',
            ],
            [
              'f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8',
              'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d',
            ],
            [
              '7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c',
              '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2',
            ],
            [
              '948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519',
              'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e',
            ],
            [
              '7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab',
              '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437',
            ],
            [
              '3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca',
              'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311',
            ],
            [
              'd3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf',
              '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4',
            ],
            [
              '1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610',
              '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575',
            ],
            [
              '733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4',
              'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d',
            ],
            [
              '15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c',
              'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d',
            ],
            [
              'a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940',
              'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629',
            ],
            [
              'e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980',
              'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06',
            ],
            [
              '311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3',
              '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374',
            ],
            [
              '34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf',
              '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee',
            ],
            [
              'f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63',
              '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1',
            ],
            [
              'd7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448',
              'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b',
            ],
            [
              '32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf',
              '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661',
            ],
            [
              '7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5',
              '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6',
            ],
            [
              'ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6',
              '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e',
            ],
            [
              '16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5',
              '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d',
            ],
            [
              'eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99',
              'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc',
            ],
            [
              '78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51',
              'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4',
            ],
            [
              '494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5',
              '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c',
            ],
            [
              'a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5',
              '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b',
            ],
            [
              'c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997',
              '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913',
            ],
            [
              '841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881',
              '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154',
            ],
            [
              '5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5',
              '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865',
            ],
            [
              '36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66',
              'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc',
            ],
            [
              '336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726',
              'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224',
            ],
            [
              '8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede',
              '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e',
            ],
            [
              '1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94',
              '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6',
            ],
            [
              '85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31',
              '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511',
            ],
            [
              '29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51',
              'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b',
            ],
            [
              'a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252',
              'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2',
            ],
            [
              '4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5',
              'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c',
            ],
            [
              'd24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b',
              '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3',
            ],
            [
              'ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4',
              '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d',
            ],
            [
              'af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f',
              '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700',
            ],
            [
              'e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889',
              '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4',
            ],
            [
              '591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246',
              'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196',
            ],
            [
              '11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984',
              '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4',
            ],
            [
              '3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a',
              'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257',
            ],
            [
              'cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030',
              'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13',
            ],
            [
              'c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197',
              '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096',
            ],
            [
              'c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593',
              'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38',
            ],
            [
              'a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef',
              '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f',
            ],
            [
              '347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38',
              '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448',
            ],
            [
              'da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a',
              '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a',
            ],
            [
              'c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111',
              '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4',
            ],
            [
              '4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502',
              '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437',
            ],
            [
              '3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea',
              'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7',
            ],
            [
              'cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26',
              '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d',
            ],
            [
              'b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986',
              '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a',
            ],
            [
              'd4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e',
              '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54',
            ],
            [
              '48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4',
              '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77',
            ],
            [
              'dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda',
              'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517',
            ],
            [
              '6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859',
              'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10',
            ],
            [
              'e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f',
              'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125',
            ],
            [
              'eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c',
              '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e',
            ],
            [
              '13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942',
              'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1',
            ],
            [
              'ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a',
              '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2',
            ],
            [
              'b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80',
              '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423',
            ],
            [
              'ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d',
              '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8',
            ],
            [
              '8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1',
              'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758',
            ],
            [
              '52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63',
              'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375',
            ],
            [
              'e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352',
              '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d',
            ],
            [
              '7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193',
              'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec',
            ],
            [
              '5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00',
              '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0',
            ],
            [
              '32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58',
              'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c',
            ],
            [
              'e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7',
              'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4',
            ],
            [
              '8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8',
              'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f',
            ],
            [
              '4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e',
              '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649',
            ],
            [
              '3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d',
              'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826',
            ],
            [
              '674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b',
              '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5',
            ],
            [
              'd32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f',
              'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87',
            ],
            [
              '30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6',
              '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b',
            ],
            [
              'be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297',
              '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc',
            ],
            [
              '93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a',
              '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c',
            ],
            [
              'b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c',
              'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f',
            ],
            [
              'd5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52',
              '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a',
            ],
            [
              'd3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb',
              'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46',
            ],
            [
              '463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065',
              'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f',
            ],
            [
              '7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917',
              '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03',
            ],
            [
              '74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9',
              'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08',
            ],
            [
              '30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3',
              '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8',
            ],
            [
              '9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57',
              '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373',
            ],
            [
              '176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66',
              'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3',
            ],
            [
              '75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8',
              '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8',
            ],
            [
              '809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721',
              '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1',
            ],
            [
              '1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180',
              '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9',
            ],
          ],
        },
      }
    },
    function(e, t, n) {
      'use strict'
      var U = n(2),
        r = n(140),
        d = n(4),
        i = d.utils.assert,
        F = n(141),
        l = n(142)
      function a(e) {
        if (!(this instanceof a)) return new a(e)
        'string' == typeof e &&
          (i(d.curves.hasOwnProperty(e), 'Unknown curve ' + e),
          (e = d.curves[e])),
          e instanceof d.curves.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash)
      }
      ;(e.exports = a),
        (a.prototype.keyPair = function(e) {
          return new F(this, e)
        }),
        (a.prototype.keyFromPrivate = function(e, t) {
          return F.fromPrivate(this, e, t)
        }),
        (a.prototype.keyFromPublic = function(e, t) {
          return F.fromPublic(this, e, t)
        }),
        (a.prototype.genKeyPair = function(e) {
          e || (e = {})
          for (
            var t = new r({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || 'utf8',
                entropy: e.entropy || d.rand(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || 'utf8',
                nonce: this.n.toArray(),
              }),
              n = this.n.byteLength(),
              i = this.n.sub(new U(2));
            ;

          ) {
            var F = new U(t.generate(n))
            if (!(F.cmp(i) > 0)) return F.iaddn(1), this.keyFromPrivate(F)
          }
        }),
        (a.prototype._truncateToN = function(e, t) {
          var n = 8 * e.byteLength() - this.n.bitLength()
          return (
            n > 0 && (e = e.ushrn(n)),
            !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
          )
        }),
        (a.prototype.sign = function(e, t, n, d) {
          'object' == typeof n && ((d = n), (n = null)),
            d || (d = {}),
            (t = this.keyFromPrivate(t, n)),
            (e = this._truncateToN(new U(e, 16)))
          for (
            var i = this.n.byteLength(),
              F = t.getPrivate().toArray('be', i),
              a = e.toArray('be', i),
              Q = new r({
                hash: this.hash,
                entropy: F,
                nonce: a,
                pers: d.pers,
                persEnc: d.persEnc || 'utf8',
              }),
              o = this.n.sub(new U(1)),
              h = 0;
            ;
            h++
          ) {
            var c = d.k ? d.k(h) : new U(Q.generate(this.n.byteLength()))
            if (
              !((c = this._truncateToN(c, !0)).cmpn(1) <= 0 || c.cmp(o) >= 0)
            ) {
              var B = this.g.mul(c)
              if (!B.isInfinity()) {
                var s = B.getX(),
                  f = s.umod(this.n)
                if (0 !== f.cmpn(0)) {
                  var R = c.invm(this.n).mul(f.mul(t.getPrivate()).iadd(e))
                  if (0 !== (R = R.umod(this.n)).cmpn(0)) {
                    var V =
                      (B.getY().isOdd() ? 1 : 0) | (0 !== s.cmp(f) ? 2 : 0)
                    return (
                      d.canonical &&
                        R.cmp(this.nh) > 0 &&
                        ((R = this.n.sub(R)), (V ^= 1)),
                      new l({ r: f, s: R, recoveryParam: V })
                    )
                  }
                }
              }
            }
          }
        }),
        (a.prototype.verify = function(e, t, n, r) {
          ;(e = this._truncateToN(new U(e, 16))), (n = this.keyFromPublic(n, r))
          var d = (t = new l(t, 'hex')).r,
            i = t.s
          if (d.cmpn(1) < 0 || d.cmp(this.n) >= 0) return !1
          if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0) return !1
          var F,
            a = i.invm(this.n),
            Q = a.mul(e).umod(this.n),
            o = a.mul(d).umod(this.n)
          return this.curve._maxwellTrick
            ? !(F = this.g.jmulAdd(Q, n.getPublic(), o)).isInfinity() &&
                F.eqXToP(d)
            : !(F = this.g.mulAdd(Q, n.getPublic(), o)).isInfinity() &&
                0 ===
                  F.getX()
                    .umod(this.n)
                    .cmp(d)
        }),
        (a.prototype.recoverPubKey = function(e, t, n, r) {
          i((3 & n) === n, 'The recovery param is more than two bits'),
            (t = new l(t, r))
          var d = this.n,
            F = new U(e),
            a = t.r,
            Q = t.s,
            o = 1 & n,
            h = n >> 1
          if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
            throw new Error('Unable to find sencond key candinate')
          a = h
            ? this.curve.pointFromX(a.add(this.curve.n), o)
            : this.curve.pointFromX(a, o)
          var c = t.r.invm(d),
            B = d
              .sub(F)
              .mul(c)
              .umod(d),
            s = Q.mul(c).umod(d)
          return this.g.mulAdd(B, a, s)
        }),
        (a.prototype.getKeyRecoveryParam = function(e, t, n, U) {
          if (null !== (t = new l(t, U)).recoveryParam) return t.recoveryParam
          for (var r = 0; r < 4; r++) {
            var d
            try {
              d = this.recoverPubKey(e, t, r)
            } catch (e) {
              continue
            }
            if (d.eq(n)) return r
          }
          throw new Error('Unable to find valid recovery factor')
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(39),
        r = n(65),
        d = n(6)
      function i(e) {
        if (!(this instanceof i)) return new i(e)
        ;(this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null)
        var t = r.toArray(e.entropy, e.entropyEnc || 'hex'),
          n = r.toArray(e.nonce, e.nonceEnc || 'hex'),
          U = r.toArray(e.pers, e.persEnc || 'hex')
        d(
          t.length >= this.minEntropy / 8,
          'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
        ),
          this._init(t, n, U)
      }
      ;(e.exports = i),
        (i.prototype._init = function(e, t, n) {
          var U = e.concat(t).concat(n)
          ;(this.K = new Array(this.outLen / 8)),
            (this.V = new Array(this.outLen / 8))
          for (var r = 0; r < this.V.length; r++)
            (this.K[r] = 0), (this.V[r] = 1)
          this._update(U),
            (this._reseed = 1),
            (this.reseedInterval = 281474976710656)
        }),
        (i.prototype._hmac = function() {
          return new U.hmac(this.hash, this.K)
        }),
        (i.prototype._update = function(e) {
          var t = this._hmac()
            .update(this.V)
            .update([0])
          e && (t = t.update(e)),
            (this.K = t.digest()),
            (this.V = this._hmac()
              .update(this.V)
              .digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac()
                .update(this.V)
                .digest()))
        }),
        (i.prototype.reseed = function(e, t, n, U) {
          'string' != typeof t && ((U = n), (n = t), (t = null)),
            (e = r.toArray(e, t)),
            (n = r.toArray(n, U)),
            d(
              e.length >= this.minEntropy / 8,
              'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
            ),
            this._update(e.concat(n || [])),
            (this._reseed = 1)
        }),
        (i.prototype.generate = function(e, t, n, U) {
          if (this._reseed > this.reseedInterval)
            throw new Error('Reseed is required')
          'string' != typeof t && ((U = n), (n = t), (t = null)),
            n && ((n = r.toArray(n, U || 'hex')), this._update(n))
          for (var d = []; d.length < e; )
            (this.V = this._hmac()
              .update(this.V)
              .digest()),
              (d = d.concat(this.V))
          var i = d.slice(0, e)
          return this._update(n), this._reseed++, r.encode(i, t)
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(2),
        r = n(4).utils.assert
      function d(e, t) {
        ;(this.ec = e),
          (this.priv = null),
          (this.pub = null),
          t.priv && this._importPrivate(t.priv, t.privEnc),
          t.pub && this._importPublic(t.pub, t.pubEnc)
      }
      ;(e.exports = d),
        (d.fromPublic = function(e, t, n) {
          return t instanceof d ? t : new d(e, { pub: t, pubEnc: n })
        }),
        (d.fromPrivate = function(e, t, n) {
          return t instanceof d ? t : new d(e, { priv: t, privEnc: n })
        }),
        (d.prototype.validate = function() {
          var e = this.getPublic()
          return e.isInfinity()
            ? { result: !1, reason: 'Invalid public key' }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: 'Public key * N != O' }
            : { result: !1, reason: 'Public key is not a point' }
        }),
        (d.prototype.getPublic = function(e, t) {
          return (
            'string' == typeof e && ((t = e), (e = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            t ? this.pub.encode(t, e) : this.pub
          )
        }),
        (d.prototype.getPrivate = function(e) {
          return 'hex' === e ? this.priv.toString(16, 2) : this.priv
        }),
        (d.prototype._importPrivate = function(e, t) {
          ;(this.priv = new U(e, t || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n))
        }),
        (d.prototype._importPublic = function(e, t) {
          if (e.x || e.y)
            return (
              'mont' === this.ec.curve.type
                ? r(e.x, 'Need x coordinate')
                : ('short' !== this.ec.curve.type &&
                    'edwards' !== this.ec.curve.type) ||
                  r(e.x && e.y, 'Need both x and y coordinate'),
              void (this.pub = this.ec.curve.point(e.x, e.y))
            )
          this.pub = this.ec.curve.decodePoint(e, t)
        }),
        (d.prototype.derive = function(e) {
          return e.mul(this.priv).getX()
        }),
        (d.prototype.sign = function(e, t, n) {
          return this.ec.sign(e, this, t, n)
        }),
        (d.prototype.verify = function(e, t) {
          return this.ec.verify(e, t, this)
        }),
        (d.prototype.inspect = function() {
          return (
            '<Key priv: ' +
            (this.priv && this.priv.toString(16, 2)) +
            ' pub: ' +
            (this.pub && this.pub.inspect()) +
            ' >'
          )
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(2),
        r = n(4).utils,
        d = r.assert
      function i(e, t) {
        if (e instanceof i) return e
        this._importDER(e, t) ||
          (d(e.r && e.s, 'Signature without r or s'),
          (this.r = new U(e.r, 16)),
          (this.s = new U(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam))
      }
      function F() {
        this.place = 0
      }
      function l(e, t) {
        var n = e[t.place++]
        if (!(128 & n)) return n
        for (var U = 15 & n, r = 0, d = 0, i = t.place; d < U; d++, i++)
          (r <<= 8), (r |= e[i])
        return (t.place = i), r
      }
      function a(e) {
        for (var t = 0, n = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < n; )
          t++
        return 0 === t ? e : e.slice(t)
      }
      function Q(e, t) {
        if (t < 128) e.push(t)
        else {
          var n = 1 + ((Math.log(t) / Math.LN2) >>> 3)
          for (e.push(128 | n); --n; ) e.push((t >>> (n << 3)) & 255)
          e.push(t)
        }
      }
      ;(e.exports = i),
        (i.prototype._importDER = function(e, t) {
          e = r.toArray(e, t)
          var n = new F()
          if (48 !== e[n.place++]) return !1
          if (l(e, n) + n.place !== e.length) return !1
          if (2 !== e[n.place++]) return !1
          var d = l(e, n),
            i = e.slice(n.place, d + n.place)
          if (((n.place += d), 2 !== e[n.place++])) return !1
          var a = l(e, n)
          if (e.length !== a + n.place) return !1
          var Q = e.slice(n.place, a + n.place)
          return (
            0 === i[0] && 128 & i[1] && (i = i.slice(1)),
            0 === Q[0] && 128 & Q[1] && (Q = Q.slice(1)),
            (this.r = new U(i)),
            (this.s = new U(Q)),
            (this.recoveryParam = null),
            !0
          )
        }),
        (i.prototype.toDER = function(e) {
          var t = this.r.toArray(),
            n = this.s.toArray()
          for (
            128 & t[0] && (t = [0].concat(t)),
              128 & n[0] && (n = [0].concat(n)),
              t = a(t),
              n = a(n);
            !(n[0] || 128 & n[1]);

          )
            n = n.slice(1)
          var U = [2]
          Q(U, t.length), (U = U.concat(t)).push(2), Q(U, n.length)
          var d = U.concat(n),
            i = [48]
          return Q(i, d.length), (i = i.concat(d)), r.encode(i, e)
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(39),
        r = n(4),
        d = r.utils,
        i = d.assert,
        F = d.parseBytes,
        l = n(144),
        a = n(145)
      function Q(e) {
        if (
          (i('ed25519' === e, 'only tested with ed25519 so far'),
          !(this instanceof Q))
        )
          return new Q(e)
        ;(e = r.curves[e].curve),
          (this.curve = e),
          (this.g = e.g),
          this.g.precompute(e.n.bitLength() + 1),
          (this.pointClass = e.point().constructor),
          (this.encodingLength = Math.ceil(e.n.bitLength() / 8)),
          (this.hash = U.sha512)
      }
      ;(e.exports = Q),
        (Q.prototype.sign = function(e, t) {
          e = F(e)
          var n = this.keyFromSecret(t),
            U = this.hashInt(n.messagePrefix(), e),
            r = this.g.mul(U),
            d = this.encodePoint(r),
            i = this.hashInt(d, n.pubBytes(), e).mul(n.priv()),
            l = U.add(i).umod(this.curve.n)
          return this.makeSignature({ R: r, S: l, Rencoded: d })
        }),
        (Q.prototype.verify = function(e, t, n) {
          ;(e = F(e)), (t = this.makeSignature(t))
          var U = this.keyFromPublic(n),
            r = this.hashInt(t.Rencoded(), U.pubBytes(), e),
            d = this.g.mul(t.S())
          return t
            .R()
            .add(U.pub().mul(r))
            .eq(d)
        }),
        (Q.prototype.hashInt = function() {
          for (var e = this.hash(), t = 0; t < arguments.length; t++)
            e.update(arguments[t])
          return d.intFromLE(e.digest()).umod(this.curve.n)
        }),
        (Q.prototype.keyFromPublic = function(e) {
          return l.fromPublic(this, e)
        }),
        (Q.prototype.keyFromSecret = function(e) {
          return l.fromSecret(this, e)
        }),
        (Q.prototype.makeSignature = function(e) {
          return e instanceof a ? e : new a(this, e)
        }),
        (Q.prototype.encodePoint = function(e) {
          var t = e.getY().toArray('le', this.encodingLength)
          return (t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), t
        }),
        (Q.prototype.decodePoint = function(e) {
          var t = (e = d.parseBytes(e)).length - 1,
            n = e.slice(0, t).concat(-129 & e[t]),
            U = 0 != (128 & e[t]),
            r = d.intFromLE(n)
          return this.curve.pointFromY(r, U)
        }),
        (Q.prototype.encodeInt = function(e) {
          return e.toArray('le', this.encodingLength)
        }),
        (Q.prototype.decodeInt = function(e) {
          return d.intFromLE(e)
        }),
        (Q.prototype.isPoint = function(e) {
          return e instanceof this.pointClass
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(4).utils,
        r = U.assert,
        d = U.parseBytes,
        i = U.cachedProperty
      function F(e, t) {
        ;(this.eddsa = e),
          (this._secret = d(t.secret)),
          e.isPoint(t.pub) ? (this._pub = t.pub) : (this._pubBytes = d(t.pub))
      }
      ;(F.fromPublic = function(e, t) {
        return t instanceof F ? t : new F(e, { pub: t })
      }),
        (F.fromSecret = function(e, t) {
          return t instanceof F ? t : new F(e, { secret: t })
        }),
        (F.prototype.secret = function() {
          return this._secret
        }),
        i(F, 'pubBytes', function() {
          return this.eddsa.encodePoint(this.pub())
        }),
        i(F, 'pub', function() {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv())
        }),
        i(F, 'privBytes', function() {
          var e = this.eddsa,
            t = this.hash(),
            n = e.encodingLength - 1,
            U = t.slice(0, e.encodingLength)
          return (U[0] &= 248), (U[n] &= 127), (U[n] |= 64), U
        }),
        i(F, 'priv', function() {
          return this.eddsa.decodeInt(this.privBytes())
        }),
        i(F, 'hash', function() {
          return this.eddsa
            .hash()
            .update(this.secret())
            .digest()
        }),
        i(F, 'messagePrefix', function() {
          return this.hash().slice(this.eddsa.encodingLength)
        }),
        (F.prototype.sign = function(e) {
          return (
            r(this._secret, 'KeyPair can only verify'), this.eddsa.sign(e, this)
          )
        }),
        (F.prototype.verify = function(e, t) {
          return this.eddsa.verify(e, t, this)
        }),
        (F.prototype.getSecret = function(e) {
          return (
            r(this._secret, 'KeyPair is public only'),
            U.encode(this.secret(), e)
          )
        }),
        (F.prototype.getPublic = function(e) {
          return U.encode(this.pubBytes(), e)
        }),
        (e.exports = F)
    },
    function(e, t, n) {
      'use strict'
      var U = n(2),
        r = n(4).utils,
        d = r.assert,
        i = r.cachedProperty,
        F = r.parseBytes
      function l(e, t) {
        ;(this.eddsa = e),
          'object' != typeof t && (t = F(t)),
          Array.isArray(t) &&
            (t = {
              R: t.slice(0, e.encodingLength),
              S: t.slice(e.encodingLength),
            }),
          d(t.R && t.S, 'Signature without R or S'),
          e.isPoint(t.R) && (this._R = t.R),
          t.S instanceof U && (this._S = t.S),
          (this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded),
          (this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded)
      }
      i(l, 'S', function() {
        return this.eddsa.decodeInt(this.Sencoded())
      }),
        i(l, 'R', function() {
          return this.eddsa.decodePoint(this.Rencoded())
        }),
        i(l, 'Rencoded', function() {
          return this.eddsa.encodePoint(this.R())
        }),
        i(l, 'Sencoded', function() {
          return this.eddsa.encodeInt(this.S())
        }),
        (l.prototype.toBytes = function() {
          return this.Rencoded().concat(this.Sencoded())
        }),
        (l.prototype.toHex = function() {
          return r.encode(this.toBytes(), 'hex').toUpperCase()
        }),
        (e.exports = l)
    },
    function(e, t, n) {
      'use strict'
      var U = n(19)
      t.certificate = n(157)
      var r = U.define('RSAPrivateKey', function() {
        this.seq().obj(
          this.key('version').int(),
          this.key('modulus').int(),
          this.key('publicExponent').int(),
          this.key('privateExponent').int(),
          this.key('prime1').int(),
          this.key('prime2').int(),
          this.key('exponent1').int(),
          this.key('exponent2').int(),
          this.key('coefficient').int()
        )
      })
      t.RSAPrivateKey = r
      var d = U.define('RSAPublicKey', function() {
        this.seq().obj(
          this.key('modulus').int(),
          this.key('publicExponent').int()
        )
      })
      t.RSAPublicKey = d
      var i = U.define('SubjectPublicKeyInfo', function() {
        this.seq().obj(
          this.key('algorithm').use(F),
          this.key('subjectPublicKey').bitstr()
        )
      })
      t.PublicKey = i
      var F = U.define('AlgorithmIdentifier', function() {
          this.seq().obj(
            this.key('algorithm').objid(),
            this.key('none')
              .null_()
              .optional(),
            this.key('curve')
              .objid()
              .optional(),
            this.key('params')
              .seq()
              .obj(
                this.key('p').int(),
                this.key('q').int(),
                this.key('g').int()
              )
              .optional()
          )
        }),
        l = U.define('PrivateKeyInfo', function() {
          this.seq().obj(
            this.key('version').int(),
            this.key('algorithm').use(F),
            this.key('subjectPrivateKey').octstr()
          )
        })
      t.PrivateKey = l
      var a = U.define('EncryptedPrivateKeyInfo', function() {
        this.seq().obj(
          this.key('algorithm')
            .seq()
            .obj(
              this.key('id').objid(),
              this.key('decrypt')
                .seq()
                .obj(
                  this.key('kde')
                    .seq()
                    .obj(
                      this.key('id').objid(),
                      this.key('kdeparams')
                        .seq()
                        .obj(this.key('salt').octstr(), this.key('iters').int())
                    ),
                  this.key('cipher')
                    .seq()
                    .obj(this.key('algo').objid(), this.key('iv').octstr())
                )
            ),
          this.key('subjectPrivateKey').octstr()
        )
      })
      t.EncryptedPrivateKey = a
      var Q = U.define('DSAPrivateKey', function() {
        this.seq().obj(
          this.key('version').int(),
          this.key('p').int(),
          this.key('q').int(),
          this.key('g').int(),
          this.key('pub_key').int(),
          this.key('priv_key').int()
        )
      })
      ;(t.DSAPrivateKey = Q),
        (t.DSAparam = U.define('DSAparam', function() {
          this.int()
        }))
      var o = U.define('ECPrivateKey', function() {
        this.seq().obj(
          this.key('version').int(),
          this.key('privateKey').octstr(),
          this.key('parameters')
            .optional()
            .explicit(0)
            .use(h),
          this.key('publicKey')
            .optional()
            .explicit(1)
            .bitstr()
        )
      })
      t.ECPrivateKey = o
      var h = U.define('ECParameters', function() {
        this.choice({ namedCurve: this.objid() })
      })
      t.signature = U.define('signature', function() {
        this.seq().obj(this.key('r').int(), this.key('s').int())
      })
    },
    function(e, t, n) {
      var U = n(19),
        r = n(0)
      function d(e, t) {
        ;(this.name = e),
          (this.body = t),
          (this.decoders = {}),
          (this.encoders = {})
      }
      ;(t.define = function(e, t) {
        return new d(e, t)
      }),
        (d.prototype._createNamed = function(e) {
          var t
          try {
            t = n(148).runInThisContext(
              '(function ' +
                this.name +
                '(entity) {\n  this._initNamed(entity);\n})'
            )
          } catch (e) {
            t = function(e) {
              this._initNamed(e)
            }
          }
          return (
            r(t, e),
            (t.prototype._initNamed = function(t) {
              e.call(this, t)
            }),
            new t(this)
          )
        }),
        (d.prototype._getDecoder = function(e) {
          return (
            (e = e || 'der'),
            this.decoders.hasOwnProperty(e) ||
              (this.decoders[e] = this._createNamed(U.decoders[e])),
            this.decoders[e]
          )
        }),
        (d.prototype.decode = function(e, t, n) {
          return this._getDecoder(t).decode(e, n)
        }),
        (d.prototype._getEncoder = function(e) {
          return (
            (e = e || 'der'),
            this.encoders.hasOwnProperty(e) ||
              (this.encoders[e] = this._createNamed(U.encoders[e])),
            this.encoders[e]
          )
        }),
        (d.prototype.encode = function(e, t, n) {
          return this._getEncoder(t).encode(e, n)
        })
    },
    function(module, exports, __webpack_require__) {
      var indexOf = __webpack_require__(149),
        Object_keys = function(e) {
          if (Object.keys) return Object.keys(e)
          var t = []
          for (var n in e) t.push(n)
          return t
        },
        forEach = function(e, t) {
          if (e.forEach) return e.forEach(t)
          for (var n = 0; n < e.length; n++) t(e[n], n, e)
        },
        defineProp = (function() {
          try {
            return (
              Object.defineProperty({}, '_', {}),
              function(e, t, n) {
                Object.defineProperty(e, t, {
                  writable: !0,
                  enumerable: !1,
                  configurable: !0,
                  value: n,
                })
              }
            )
          } catch (e) {
            return function(e, t, n) {
              e[t] = n
            }
          }
        })(),
        globals = [
          'Array',
          'Boolean',
          'Date',
          'Error',
          'EvalError',
          'Function',
          'Infinity',
          'JSON',
          'Math',
          'NaN',
          'Number',
          'Object',
          'RangeError',
          'ReferenceError',
          'RegExp',
          'String',
          'SyntaxError',
          'TypeError',
          'URIError',
          'decodeURI',
          'decodeURIComponent',
          'encodeURI',
          'encodeURIComponent',
          'escape',
          'eval',
          'isFinite',
          'isNaN',
          'parseFloat',
          'parseInt',
          'undefined',
          'unescape',
        ]
      function Context() {}
      Context.prototype = {}
      var Script = (exports.Script = function(e) {
        if (!(this instanceof Script)) return new Script(e)
        this.code = e
      })
      ;(Script.prototype.runInContext = function(e) {
        if (!(e instanceof Context))
          throw new TypeError("needs a 'context' argument.")
        var t = document.createElement('iframe')
        t.style || (t.style = {}),
          (t.style.display = 'none'),
          document.body.appendChild(t)
        var n = t.contentWindow,
          U = n.eval,
          r = n.execScript
        !U && r && (r.call(n, 'null'), (U = n.eval)),
          forEach(Object_keys(e), function(t) {
            n[t] = e[t]
          }),
          forEach(globals, function(t) {
            e[t] && (n[t] = e[t])
          })
        var d = Object_keys(n),
          i = U.call(n, this.code)
        return (
          forEach(Object_keys(n), function(t) {
            ;(t in e || -1 === indexOf(d, t)) && (e[t] = n[t])
          }),
          forEach(globals, function(t) {
            t in e || defineProp(e, t, n[t])
          }),
          document.body.removeChild(t),
          i
        )
      }),
        (Script.prototype.runInThisContext = function() {
          return eval(this.code)
        }),
        (Script.prototype.runInNewContext = function(e) {
          var t = Script.createContext(e),
            n = this.runInContext(t)
          return (
            forEach(Object_keys(t), function(n) {
              e[n] = t[n]
            }),
            n
          )
        }),
        forEach(Object_keys(Script.prototype), function(e) {
          exports[e] = Script[e] = function(t) {
            var n = Script(t)
            return n[e].apply(n, [].slice.call(arguments, 1))
          }
        }),
        (exports.createScript = function(e) {
          return exports.Script(e)
        }),
        (exports.createContext = Script.createContext = function(e) {
          var t = new Context()
          return (
            'object' == typeof e &&
              forEach(Object_keys(e), function(n) {
                t[n] = e[n]
              }),
            t
          )
        })
    },
    function(e, t) {
      var n = [].indexOf
      e.exports = function(e, t) {
        if (n) return e.indexOf(t)
        for (var U = 0; U < e.length; ++U) if (e[U] === t) return U
        return -1
      }
    },
    function(e, t, n) {
      var U = n(0)
      function r(e) {
        this._reporterState = {
          obj: null,
          path: [],
          options: e || {},
          errors: [],
        }
      }
      function d(e, t) {
        ;(this.path = e), this.rethrow(t)
      }
      ;(t.Reporter = r),
        (r.prototype.isError = function(e) {
          return e instanceof d
        }),
        (r.prototype.save = function() {
          var e = this._reporterState
          return { obj: e.obj, pathLen: e.path.length }
        }),
        (r.prototype.restore = function(e) {
          var t = this._reporterState
          ;(t.obj = e.obj), (t.path = t.path.slice(0, e.pathLen))
        }),
        (r.prototype.enterKey = function(e) {
          return this._reporterState.path.push(e)
        }),
        (r.prototype.exitKey = function(e) {
          var t = this._reporterState
          t.path = t.path.slice(0, e - 1)
        }),
        (r.prototype.leaveKey = function(e, t, n) {
          var U = this._reporterState
          this.exitKey(e), null !== U.obj && (U.obj[t] = n)
        }),
        (r.prototype.path = function() {
          return this._reporterState.path.join('/')
        }),
        (r.prototype.enterObject = function() {
          var e = this._reporterState,
            t = e.obj
          return (e.obj = {}), t
        }),
        (r.prototype.leaveObject = function(e) {
          var t = this._reporterState,
            n = t.obj
          return (t.obj = e), n
        }),
        (r.prototype.error = function(e) {
          var t,
            n = this._reporterState,
            U = e instanceof d
          if (
            ((t = U
              ? e
              : new d(
                  n.path
                    .map(function(e) {
                      return '[' + JSON.stringify(e) + ']'
                    })
                    .join(''),
                  e.message || e,
                  e.stack
                )),
            !n.options.partial)
          )
            throw t
          return U || n.errors.push(t), t
        }),
        (r.prototype.wrapResult = function(e) {
          var t = this._reporterState
          return t.options.partial
            ? { result: this.isError(e) ? null : e, errors: t.errors }
            : e
        }),
        U(d, Error),
        (d.prototype.rethrow = function(e) {
          if (
            ((this.message = e + ' at: ' + (this.path || '(shallow)')),
            Error.captureStackTrace && Error.captureStackTrace(this, d),
            !this.stack)
          )
            try {
              throw new Error(this.message)
            } catch (e) {
              this.stack = e.stack
            }
          return this
        })
    },
    function(e, t, n) {
      var U = n(20).Reporter,
        r = n(20).EncoderBuffer,
        d = n(20).DecoderBuffer,
        i = n(6),
        F = [
          'seq',
          'seqof',
          'set',
          'setof',
          'objid',
          'bool',
          'gentime',
          'utctime',
          'null_',
          'enum',
          'int',
          'objDesc',
          'bitstr',
          'bmpstr',
          'charstr',
          'genstr',
          'graphstr',
          'ia5str',
          'iso646str',
          'numstr',
          'octstr',
          'printstr',
          't61str',
          'unistr',
          'utf8str',
          'videostr',
        ],
        l = [
          'key',
          'obj',
          'use',
          'optional',
          'explicit',
          'implicit',
          'def',
          'choice',
          'any',
          'contains',
        ].concat(F)
      function a(e, t) {
        var n = {}
        ;(this._baseState = n),
          (n.enc = e),
          (n.parent = t || null),
          (n.children = null),
          (n.tag = null),
          (n.args = null),
          (n.reverseArgs = null),
          (n.choice = null),
          (n.optional = !1),
          (n.any = !1),
          (n.obj = !1),
          (n.use = null),
          (n.useDecoder = null),
          (n.key = null),
          (n.default = null),
          (n.explicit = null),
          (n.implicit = null),
          (n.contains = null),
          n.parent || ((n.children = []), this._wrap())
      }
      e.exports = a
      var Q = [
        'enc',
        'parent',
        'children',
        'tag',
        'args',
        'reverseArgs',
        'choice',
        'optional',
        'any',
        'obj',
        'use',
        'alteredUse',
        'key',
        'default',
        'explicit',
        'implicit',
        'contains',
      ]
      ;(a.prototype.clone = function() {
        var e = this._baseState,
          t = {}
        Q.forEach(function(n) {
          t[n] = e[n]
        })
        var n = new this.constructor(t.parent)
        return (n._baseState = t), n
      }),
        (a.prototype._wrap = function() {
          var e = this._baseState
          l.forEach(function(t) {
            this[t] = function() {
              var n = new this.constructor(this)
              return e.children.push(n), n[t].apply(n, arguments)
            }
          }, this)
        }),
        (a.prototype._init = function(e) {
          var t = this._baseState
          i(null === t.parent),
            e.call(this),
            (t.children = t.children.filter(function(e) {
              return e._baseState.parent === this
            }, this)),
            i.equal(t.children.length, 1, 'Root node can have only one child')
        }),
        (a.prototype._useArgs = function(e) {
          var t = this._baseState,
            n = e.filter(function(e) {
              return e instanceof this.constructor
            }, this)
          ;(e = e.filter(function(e) {
            return !(e instanceof this.constructor)
          }, this)),
            0 !== n.length &&
              (i(null === t.children),
              (t.children = n),
              n.forEach(function(e) {
                e._baseState.parent = this
              }, this)),
            0 !== e.length &&
              (i(null === t.args),
              (t.args = e),
              (t.reverseArgs = e.map(function(e) {
                if ('object' != typeof e || e.constructor !== Object) return e
                var t = {}
                return (
                  Object.keys(e).forEach(function(n) {
                    n == (0 | n) && (n |= 0)
                    var U = e[n]
                    t[U] = n
                  }),
                  t
                )
              })))
        }),
        [
          '_peekTag',
          '_decodeTag',
          '_use',
          '_decodeStr',
          '_decodeObjid',
          '_decodeTime',
          '_decodeNull',
          '_decodeInt',
          '_decodeBool',
          '_decodeList',
          '_encodeComposite',
          '_encodeStr',
          '_encodeObjid',
          '_encodeTime',
          '_encodeNull',
          '_encodeInt',
          '_encodeBool',
        ].forEach(function(e) {
          a.prototype[e] = function() {
            var t = this._baseState
            throw new Error(e + ' not implemented for encoding: ' + t.enc)
          }
        }),
        F.forEach(function(e) {
          a.prototype[e] = function() {
            var t = this._baseState,
              n = Array.prototype.slice.call(arguments)
            return i(null === t.tag), (t.tag = e), this._useArgs(n), this
          }
        }),
        (a.prototype.use = function(e) {
          i(e)
          var t = this._baseState
          return i(null === t.use), (t.use = e), this
        }),
        (a.prototype.optional = function() {
          return (this._baseState.optional = !0), this
        }),
        (a.prototype.def = function(e) {
          var t = this._baseState
          return i(null === t.default), (t.default = e), (t.optional = !0), this
        }),
        (a.prototype.explicit = function(e) {
          var t = this._baseState
          return (
            i(null === t.explicit && null === t.implicit),
            (t.explicit = e),
            this
          )
        }),
        (a.prototype.implicit = function(e) {
          var t = this._baseState
          return (
            i(null === t.explicit && null === t.implicit),
            (t.implicit = e),
            this
          )
        }),
        (a.prototype.obj = function() {
          var e = this._baseState,
            t = Array.prototype.slice.call(arguments)
          return (e.obj = !0), 0 !== t.length && this._useArgs(t), this
        }),
        (a.prototype.key = function(e) {
          var t = this._baseState
          return i(null === t.key), (t.key = e), this
        }),
        (a.prototype.any = function() {
          return (this._baseState.any = !0), this
        }),
        (a.prototype.choice = function(e) {
          var t = this._baseState
          return (
            i(null === t.choice),
            (t.choice = e),
            this._useArgs(
              Object.keys(e).map(function(t) {
                return e[t]
              })
            ),
            this
          )
        }),
        (a.prototype.contains = function(e) {
          var t = this._baseState
          return i(null === t.use), (t.contains = e), this
        }),
        (a.prototype._decode = function(e, t) {
          var n = this._baseState
          if (null === n.parent)
            return e.wrapResult(n.children[0]._decode(e, t))
          var U,
            r = n.default,
            i = !0,
            F = null
          if ((null !== n.key && (F = e.enterKey(n.key)), n.optional)) {
            var l = null
            if (
              (null !== n.explicit
                ? (l = n.explicit)
                : null !== n.implicit
                ? (l = n.implicit)
                : null !== n.tag && (l = n.tag),
              null !== l || n.any)
            ) {
              if (((i = this._peekTag(e, l, n.any)), e.isError(i))) return i
            } else {
              var a = e.save()
              try {
                null === n.choice
                  ? this._decodeGeneric(n.tag, e, t)
                  : this._decodeChoice(e, t),
                  (i = !0)
              } catch (e) {
                i = !1
              }
              e.restore(a)
            }
          }
          if ((n.obj && i && (U = e.enterObject()), i)) {
            if (null !== n.explicit) {
              var Q = this._decodeTag(e, n.explicit)
              if (e.isError(Q)) return Q
              e = Q
            }
            var o = e.offset
            if (null === n.use && null === n.choice) {
              n.any && (a = e.save())
              var h = this._decodeTag(
                e,
                null !== n.implicit ? n.implicit : n.tag,
                n.any
              )
              if (e.isError(h)) return h
              n.any ? (r = e.raw(a)) : (e = h)
            }
            if (
              (t &&
                t.track &&
                null !== n.tag &&
                t.track(e.path(), o, e.length, 'tagged'),
              t &&
                t.track &&
                null !== n.tag &&
                t.track(e.path(), e.offset, e.length, 'content'),
              (r = n.any
                ? r
                : null === n.choice
                ? this._decodeGeneric(n.tag, e, t)
                : this._decodeChoice(e, t)),
              e.isError(r))
            )
              return r
            if (
              (n.any ||
                null !== n.choice ||
                null === n.children ||
                n.children.forEach(function(n) {
                  n._decode(e, t)
                }),
              n.contains && ('octstr' === n.tag || 'bitstr' === n.tag))
            ) {
              var c = new d(r)
              r = this._getUse(n.contains, e._reporterState.obj)._decode(c, t)
            }
          }
          return (
            n.obj && i && (r = e.leaveObject(U)),
            null === n.key || (null === r && !0 !== i)
              ? null !== F && e.exitKey(F)
              : e.leaveKey(F, n.key, r),
            r
          )
        }),
        (a.prototype._decodeGeneric = function(e, t, n) {
          var U = this._baseState
          return 'seq' === e || 'set' === e
            ? null
            : 'seqof' === e || 'setof' === e
            ? this._decodeList(t, e, U.args[0], n)
            : /str$/.test(e)
            ? this._decodeStr(t, e, n)
            : 'objid' === e && U.args
            ? this._decodeObjid(t, U.args[0], U.args[1], n)
            : 'objid' === e
            ? this._decodeObjid(t, null, null, n)
            : 'gentime' === e || 'utctime' === e
            ? this._decodeTime(t, e, n)
            : 'null_' === e
            ? this._decodeNull(t, n)
            : 'bool' === e
            ? this._decodeBool(t, n)
            : 'objDesc' === e
            ? this._decodeStr(t, e, n)
            : 'int' === e || 'enum' === e
            ? this._decodeInt(t, U.args && U.args[0], n)
            : null !== U.use
            ? this._getUse(U.use, t._reporterState.obj)._decode(t, n)
            : t.error('unknown tag: ' + e)
        }),
        (a.prototype._getUse = function(e, t) {
          var n = this._baseState
          return (
            (n.useDecoder = this._use(e, t)),
            i(null === n.useDecoder._baseState.parent),
            (n.useDecoder = n.useDecoder._baseState.children[0]),
            n.implicit !== n.useDecoder._baseState.implicit &&
              ((n.useDecoder = n.useDecoder.clone()),
              (n.useDecoder._baseState.implicit = n.implicit)),
            n.useDecoder
          )
        }),
        (a.prototype._decodeChoice = function(e, t) {
          var n = this._baseState,
            U = null,
            r = !1
          return (
            Object.keys(n.choice).some(function(d) {
              var i = e.save(),
                F = n.choice[d]
              try {
                var l = F._decode(e, t)
                if (e.isError(l)) return !1
                ;(U = { type: d, value: l }), (r = !0)
              } catch (t) {
                return e.restore(i), !1
              }
              return !0
            }, this),
            r ? U : e.error('Choice not matched')
          )
        }),
        (a.prototype._createEncoderBuffer = function(e) {
          return new r(e, this.reporter)
        }),
        (a.prototype._encode = function(e, t, n) {
          var U = this._baseState
          if (null === U.default || U.default !== e) {
            var r = this._encodeValue(e, t, n)
            if (void 0 !== r && !this._skipDefault(r, t, n)) return r
          }
        }),
        (a.prototype._encodeValue = function(e, t, n) {
          var r = this._baseState
          if (null === r.parent) return r.children[0]._encode(e, t || new U())
          var d = null
          if (((this.reporter = t), r.optional && void 0 === e)) {
            if (null === r.default) return
            e = r.default
          }
          var i = null,
            F = !1
          if (r.any) d = this._createEncoderBuffer(e)
          else if (r.choice) d = this._encodeChoice(e, t)
          else if (r.contains)
            (i = this._getUse(r.contains, n)._encode(e, t)), (F = !0)
          else if (r.children)
            (i = r.children
              .map(function(n) {
                if ('null_' === n._baseState.tag) return n._encode(null, t, e)
                if (null === n._baseState.key)
                  return t.error('Child should have a key')
                var U = t.enterKey(n._baseState.key)
                if ('object' != typeof e)
                  return t.error('Child expected, but input is not object')
                var r = n._encode(e[n._baseState.key], t, e)
                return t.leaveKey(U), r
              }, this)
              .filter(function(e) {
                return e
              })),
              (i = this._createEncoderBuffer(i))
          else if ('seqof' === r.tag || 'setof' === r.tag) {
            if (!r.args || 1 !== r.args.length)
              return t.error('Too many args for : ' + r.tag)
            if (!Array.isArray(e))
              return t.error('seqof/setof, but data is not Array')
            var l = this.clone()
            ;(l._baseState.implicit = null),
              (i = this._createEncoderBuffer(
                e.map(function(n) {
                  var U = this._baseState
                  return this._getUse(U.args[0], e)._encode(n, t)
                }, l)
              ))
          } else
            null !== r.use
              ? (d = this._getUse(r.use, n)._encode(e, t))
              : ((i = this._encodePrimitive(r.tag, e)), (F = !0))
          if (!r.any && null === r.choice) {
            var a = null !== r.implicit ? r.implicit : r.tag,
              Q = null === r.implicit ? 'universal' : 'context'
            null === a
              ? null === r.use &&
                t.error('Tag could be omitted only for .use()')
              : null === r.use && (d = this._encodeComposite(a, F, Q, i))
          }
          return (
            null !== r.explicit &&
              (d = this._encodeComposite(r.explicit, !1, 'context', d)),
            d
          )
        }),
        (a.prototype._encodeChoice = function(e, t) {
          var n = this._baseState,
            U = n.choice[e.type]
          return (
            U ||
              i(
                !1,
                e.type +
                  ' not found in ' +
                  JSON.stringify(Object.keys(n.choice))
              ),
            U._encode(e.value, t)
          )
        }),
        (a.prototype._encodePrimitive = function(e, t) {
          var n = this._baseState
          if (/str$/.test(e)) return this._encodeStr(t, e)
          if ('objid' === e && n.args)
            return this._encodeObjid(t, n.reverseArgs[0], n.args[1])
          if ('objid' === e) return this._encodeObjid(t, null, null)
          if ('gentime' === e || 'utctime' === e) return this._encodeTime(t, e)
          if ('null_' === e) return this._encodeNull()
          if ('int' === e || 'enum' === e)
            return this._encodeInt(t, n.args && n.reverseArgs[0])
          if ('bool' === e) return this._encodeBool(t)
          if ('objDesc' === e) return this._encodeStr(t, e)
          throw new Error('Unsupported tag: ' + e)
        }),
        (a.prototype._isNumstr = function(e) {
          return /^[0-9 ]*$/.test(e)
        }),
        (a.prototype._isPrintstr = function(e) {
          return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e)
        })
    },
    function(e, t, n) {
      var U = n(70)
      ;(t.tagClass = {
        0: 'universal',
        1: 'application',
        2: 'context',
        3: 'private',
      }),
        (t.tagClassByName = U._reverse(t.tagClass)),
        (t.tag = {
          0: 'end',
          1: 'bool',
          2: 'int',
          3: 'bitstr',
          4: 'octstr',
          5: 'null_',
          6: 'objid',
          7: 'objDesc',
          8: 'external',
          9: 'real',
          10: 'enum',
          11: 'embed',
          12: 'utf8str',
          13: 'relativeOid',
          16: 'seq',
          17: 'set',
          18: 'numstr',
          19: 'printstr',
          20: 't61str',
          21: 'videostr',
          22: 'ia5str',
          23: 'utctime',
          24: 'gentime',
          25: 'graphstr',
          26: 'iso646str',
          27: 'genstr',
          28: 'unistr',
          29: 'charstr',
          30: 'bmpstr',
        }),
        (t.tagByName = U._reverse(t.tag))
    },
    function(e, t, n) {
      var U = t
      ;(U.der = n(71)), (U.pem = n(154))
    },
    function(e, t, n) {
      var U = n(0),
        r = n(3).Buffer,
        d = n(71)
      function i(e) {
        d.call(this, e), (this.enc = 'pem')
      }
      U(i, d),
        (e.exports = i),
        (i.prototype.decode = function(e, t) {
          for (
            var n = e.toString().split(/[\r\n]+/g),
              U = t.label.toUpperCase(),
              i = /^-----(BEGIN|END) ([^-]+)-----$/,
              F = -1,
              l = -1,
              a = 0;
            a < n.length;
            a++
          ) {
            var Q = n[a].match(i)
            if (null !== Q && Q[2] === U) {
              if (-1 !== F) {
                if ('END' !== Q[1]) break
                l = a
                break
              }
              if ('BEGIN' !== Q[1]) break
              F = a
            }
          }
          if (-1 === F || -1 === l)
            throw new Error('PEM section not found for: ' + U)
          var o = n.slice(F + 1, l).join('')
          o.replace(/[^a-z0-9\+\/=]+/gi, '')
          var h = new r(o, 'base64')
          return d.prototype.decode.call(this, h, t)
        })
    },
    function(e, t, n) {
      var U = t
      ;(U.der = n(72)), (U.pem = n(156))
    },
    function(e, t, n) {
      var U = n(0),
        r = n(72)
      function d(e) {
        r.call(this, e), (this.enc = 'pem')
      }
      U(d, r),
        (e.exports = d),
        (d.prototype.encode = function(e, t) {
          for (
            var n = r.prototype.encode.call(this, e).toString('base64'),
              U = ['-----BEGIN ' + t.label + '-----'],
              d = 0;
            d < n.length;
            d += 64
          )
            U.push(n.slice(d, d + 64))
          return U.push('-----END ' + t.label + '-----'), U.join('\n')
        })
    },
    function(e, t, n) {
      'use strict'
      var U = n(19),
        r = U.define('Time', function() {
          this.choice({ utcTime: this.utctime(), generalTime: this.gentime() })
        }),
        d = U.define('AttributeTypeValue', function() {
          this.seq().obj(this.key('type').objid(), this.key('value').any())
        }),
        i = U.define('AlgorithmIdentifier', function() {
          this.seq().obj(
            this.key('algorithm').objid(),
            this.key('parameters').optional()
          )
        }),
        F = U.define('SubjectPublicKeyInfo', function() {
          this.seq().obj(
            this.key('algorithm').use(i),
            this.key('subjectPublicKey').bitstr()
          )
        }),
        l = U.define('RelativeDistinguishedName', function() {
          this.setof(d)
        }),
        a = U.define('RDNSequence', function() {
          this.seqof(l)
        }),
        Q = U.define('Name', function() {
          this.choice({ rdnSequence: this.use(a) })
        }),
        o = U.define('Validity', function() {
          this.seq().obj(
            this.key('notBefore').use(r),
            this.key('notAfter').use(r)
          )
        }),
        h = U.define('Extension', function() {
          this.seq().obj(
            this.key('extnID').objid(),
            this.key('critical')
              .bool()
              .def(!1),
            this.key('extnValue').octstr()
          )
        }),
        c = U.define('TBSCertificate', function() {
          this.seq().obj(
            this.key('version')
              .explicit(0)
              .int(),
            this.key('serialNumber').int(),
            this.key('signature').use(i),
            this.key('issuer').use(Q),
            this.key('validity').use(o),
            this.key('subject').use(Q),
            this.key('subjectPublicKeyInfo').use(F),
            this.key('issuerUniqueID')
              .implicit(1)
              .bitstr()
              .optional(),
            this.key('subjectUniqueID')
              .implicit(2)
              .bitstr()
              .optional(),
            this.key('extensions')
              .explicit(3)
              .seqof(h)
              .optional()
          )
        }),
        B = U.define('X509Certificate', function() {
          this.seq().obj(
            this.key('tbsCertificate').use(c),
            this.key('signatureAlgorithm').use(i),
            this.key('signatureValue').bitstr()
          )
        })
      e.exports = B
    },
    function(e) {
      e.exports = {
        '2.16.840.1.101.3.4.1.1': 'aes-128-ecb',
        '2.16.840.1.101.3.4.1.2': 'aes-128-cbc',
        '2.16.840.1.101.3.4.1.3': 'aes-128-ofb',
        '2.16.840.1.101.3.4.1.4': 'aes-128-cfb',
        '2.16.840.1.101.3.4.1.21': 'aes-192-ecb',
        '2.16.840.1.101.3.4.1.22': 'aes-192-cbc',
        '2.16.840.1.101.3.4.1.23': 'aes-192-ofb',
        '2.16.840.1.101.3.4.1.24': 'aes-192-cfb',
        '2.16.840.1.101.3.4.1.41': 'aes-256-ecb',
        '2.16.840.1.101.3.4.1.42': 'aes-256-cbc',
        '2.16.840.1.101.3.4.1.43': 'aes-256-ofb',
        '2.16.840.1.101.3.4.1.44': 'aes-256-cfb',
      }
    },
    function(e, t, n) {
      ;(function(t) {
        var U = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m,
          r = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----/m,
          d = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m,
          i = n(23),
          F = n(36)
        e.exports = function(e, n) {
          var l,
            a = e.toString(),
            Q = a.match(U)
          if (Q) {
            var o = 'aes' + Q[1],
              h = new t(Q[2], 'hex'),
              c = new t(Q[3].replace(/[\r\n]/g, ''), 'base64'),
              B = i(n, h.slice(0, 8), parseInt(Q[1], 10)).key,
              s = [],
              f = F.createDecipheriv(o, B, h)
            s.push(f.update(c)), s.push(f.final()), (l = t.concat(s))
          } else {
            var R = a.match(d)
            l = new t(R[2].replace(/[\r\n]/g, ''), 'base64')
          }
          return { tag: a.match(r)[1], data: l }
        }
      }.call(this, n(3).Buffer))
    },
    function(e, t, n) {
      ;(function(t) {
        var U = n(2),
          r = n(4).ec,
          d = n(25),
          i = n(73)
        function F(e, t) {
          if (e.cmpn(0) <= 0) throw new Error('invalid sig')
          if (e.cmp(t) >= t) throw new Error('invalid sig')
        }
        e.exports = function(e, n, l, a, Q) {
          var o = d(l)
          if ('ec' === o.type) {
            if ('ecdsa' !== a && 'ecdsa/rsa' !== a)
              throw new Error('wrong public key type')
            return (function(e, t, n) {
              var U = i[n.data.algorithm.curve.join('.')]
              if (!U)
                throw new Error(
                  'unknown curve ' + n.data.algorithm.curve.join('.')
                )
              var d = new r(U),
                F = n.data.subjectPrivateKey.data
              return d.verify(t, e, F)
            })(e, n, o)
          }
          if ('dsa' === o.type) {
            if ('dsa' !== a) throw new Error('wrong public key type')
            return (function(e, t, n) {
              var r = n.data.p,
                i = n.data.q,
                l = n.data.g,
                a = n.data.pub_key,
                Q = d.signature.decode(e, 'der'),
                o = Q.s,
                h = Q.r
              F(o, i), F(h, i)
              var c = U.mont(r),
                B = o.invm(i)
              return (
                0 ===
                l
                  .toRed(c)
                  .redPow(new U(t).mul(B).mod(i))
                  .fromRed()
                  .mul(
                    a
                      .toRed(c)
                      .redPow(h.mul(B).mod(i))
                      .fromRed()
                  )
                  .mod(r)
                  .mod(i)
                  .cmp(h)
              )
            })(e, n, o)
          }
          if ('rsa' !== a && 'ecdsa/rsa' !== a)
            throw new Error('wrong public key type')
          n = t.concat([Q, n])
          for (
            var h = o.modulus.byteLength(), c = [1], B = 0;
            n.length + c.length + 2 < h;

          )
            c.push(255), B++
          c.push(0)
          for (var s = -1; ++s < n.length; ) c.push(n[s])
          c = new t(c)
          var f = U.mont(o.modulus)
          ;(e = (e = new U(e).toRed(f)).redPow(new U(o.publicExponent))),
            (e = new t(e.fromRed().toArray()))
          var R = B < 8 ? 1 : 0
          for (
            h = Math.min(e.length, c.length),
              e.length !== c.length && (R = 1),
              s = -1;
            ++s < h;

          )
            R |= e[s] ^ c[s]
          return 0 === R
        }
      }.call(this, n(3).Buffer))
    },
    function(e, t, n) {
      ;(function(t) {
        var U = n(4),
          r = n(2)
        e.exports = function(e) {
          return new i(e)
        }
        var d = {
          secp256k1: { name: 'secp256k1', byteLength: 32 },
          secp224r1: { name: 'p224', byteLength: 28 },
          prime256v1: { name: 'p256', byteLength: 32 },
          prime192v1: { name: 'p192', byteLength: 24 },
          ed25519: { name: 'ed25519', byteLength: 32 },
          secp384r1: { name: 'p384', byteLength: 48 },
          secp521r1: { name: 'p521', byteLength: 66 },
        }
        function i(e) {
          ;(this.curveType = d[e]),
            this.curveType || (this.curveType = { name: e }),
            (this.curve = new U.ec(this.curveType.name)),
            (this.keys = void 0)
        }
        function F(e, n, U) {
          Array.isArray(e) || (e = e.toArray())
          var r = new t(e)
          if (U && r.length < U) {
            var d = new t(U - r.length)
            d.fill(0), (r = t.concat([d, r]))
          }
          return n ? r.toString(n) : r
        }
        ;(d.p224 = d.secp224r1),
          (d.p256 = d.secp256r1 = d.prime256v1),
          (d.p192 = d.secp192r1 = d.prime192v1),
          (d.p384 = d.secp384r1),
          (d.p521 = d.secp521r1),
          (i.prototype.generateKeys = function(e, t) {
            return (
              (this.keys = this.curve.genKeyPair()), this.getPublicKey(e, t)
            )
          }),
          (i.prototype.computeSecret = function(e, n, U) {
            return (
              (n = n || 'utf8'),
              t.isBuffer(e) || (e = new t(e, n)),
              F(
                this.curve
                  .keyFromPublic(e)
                  .getPublic()
                  .mul(this.keys.getPrivate())
                  .getX(),
                U,
                this.curveType.byteLength
              )
            )
          }),
          (i.prototype.getPublicKey = function(e, t) {
            var n = this.keys.getPublic('compressed' === t, !0)
            return (
              'hybrid' === t && (n[n.length - 1] % 2 ? (n[0] = 7) : (n[0] = 6)),
              F(n, e)
            )
          }),
          (i.prototype.getPrivateKey = function(e) {
            return F(this.keys.getPrivate(), e)
          }),
          (i.prototype.setPublicKey = function(e, n) {
            return (
              (n = n || 'utf8'),
              t.isBuffer(e) || (e = new t(e, n)),
              this.keys._importPublic(e),
              this
            )
          }),
          (i.prototype.setPrivateKey = function(e, n) {
            ;(n = n || 'utf8'), t.isBuffer(e) || (e = new t(e, n))
            var U = new r(e)
            return (
              (U = U.toString(16)),
              (this.keys = this.curve.genKeyPair()),
              this.keys._importPrivate(U),
              this
            )
          })
      }.call(this, n(3).Buffer))
    },
    function(e, t, n) {
      ;(t.publicEncrypt = n(163)),
        (t.privateDecrypt = n(164)),
        (t.privateEncrypt = function(e, n) {
          return t.publicEncrypt(e, n, !0)
        }),
        (t.publicDecrypt = function(e, n) {
          return t.privateDecrypt(e, n, !0)
        })
    },
    function(e, t, n) {
      var U = n(25),
        r = n(13),
        d = n(15),
        i = n(74),
        F = n(75),
        l = n(2),
        a = n(76),
        Q = n(38),
        o = n(1).Buffer
      e.exports = function(e, t, n) {
        var h
        h = e.padding ? e.padding : n ? 1 : 4
        var c,
          B = U(e)
        if (4 === h)
          c = (function(e, t) {
            var n = e.modulus.byteLength(),
              U = t.length,
              a = d('sha1')
                .update(o.alloc(0))
                .digest(),
              Q = a.length,
              h = 2 * Q
            if (U > n - h - 2) throw new Error('message too long')
            var c = o.alloc(n - U - h - 2),
              B = n - Q - 1,
              s = r(Q),
              f = F(o.concat([a, c, o.alloc(1, 1), t], B), i(s, B)),
              R = F(s, i(f, Q))
            return new l(o.concat([o.alloc(1), R, f], n))
          })(B, t)
        else if (1 === h)
          c = (function(e, t, n) {
            var U,
              d = t.length,
              i = e.modulus.byteLength()
            if (d > i - 11) throw new Error('message too long')
            return (
              (U = n
                ? o.alloc(i - d - 3, 255)
                : (function(e) {
                    for (
                      var t, n = o.allocUnsafe(e), U = 0, d = r(2 * e), i = 0;
                      U < e;

                    )
                      i === d.length && ((d = r(2 * e)), (i = 0)),
                        (t = d[i++]) && (n[U++] = t)
                    return n
                  })(i - d - 3)),
              new l(o.concat([o.from([0, n ? 1 : 2]), U, o.alloc(1), t], i))
            )
          })(B, t, n)
        else {
          if (3 !== h) throw new Error('unknown padding')
          if ((c = new l(t)).cmp(B.modulus) >= 0)
            throw new Error('data too long for modulus')
        }
        return n ? Q(c, B) : a(c, B)
      }
    },
    function(e, t, n) {
      var U = n(25),
        r = n(74),
        d = n(75),
        i = n(2),
        F = n(38),
        l = n(15),
        a = n(76),
        Q = n(1).Buffer
      e.exports = function(e, t, n) {
        var o
        o = e.padding ? e.padding : n ? 1 : 4
        var h,
          c = U(e),
          B = c.modulus.byteLength()
        if (t.length > B || new i(t).cmp(c.modulus) >= 0)
          throw new Error('decryption error')
        h = n ? a(new i(t), c) : F(t, c)
        var s = Q.alloc(B - h.length)
        if (((h = Q.concat([s, h], B)), 4 === o))
          return (function(e, t) {
            var n = e.modulus.byteLength(),
              U = l('sha1')
                .update(Q.alloc(0))
                .digest(),
              i = U.length
            if (0 !== t[0]) throw new Error('decryption error')
            var F = t.slice(1, i + 1),
              a = t.slice(i + 1),
              o = d(F, r(a, i)),
              h = d(a, r(o, n - i - 1))
            if (
              (function(e, t) {
                ;(e = Q.from(e)), (t = Q.from(t))
                var n = 0,
                  U = e.length
                e.length !== t.length &&
                  (n++, (U = Math.min(e.length, t.length)))
                for (var r = -1; ++r < U; ) n += e[r] ^ t[r]
                return n
              })(U, h.slice(0, i))
            )
              throw new Error('decryption error')
            for (var c = i; 0 === h[c]; ) c++
            if (1 !== h[c++]) throw new Error('decryption error')
            return h.slice(c)
          })(c, h)
        if (1 === o)
          return (function(e, t, n) {
            for (var U = t.slice(0, 2), r = 2, d = 0; 0 !== t[r++]; )
              if (r >= t.length) {
                d++
                break
              }
            var i = t.slice(2, r - 1)
            if (
              ((('0002' !== U.toString('hex') && !n) ||
                ('0001' !== U.toString('hex') && n)) &&
                d++,
              i.length < 8 && d++,
              d)
            )
              throw new Error('decryption error')
            return t.slice(r)
          })(0, h, n)
        if (3 === o) return h
        throw new Error('unknown padding')
      }
    },
    function(e, t, n) {
      'use strict'
      ;(function(e, U) {
        function r() {
          throw new Error(
            'secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11'
          )
        }
        var d = n(1),
          i = n(13),
          F = d.Buffer,
          l = d.kMaxLength,
          a = e.crypto || e.msCrypto,
          Q = Math.pow(2, 32) - 1
        function o(e, t) {
          if ('number' != typeof e || e != e)
            throw new TypeError('offset must be a number')
          if (e > Q || e < 0) throw new TypeError('offset must be a uint32')
          if (e > l || e > t) throw new RangeError('offset out of range')
        }
        function h(e, t, n) {
          if ('number' != typeof e || e != e)
            throw new TypeError('size must be a number')
          if (e > Q || e < 0) throw new TypeError('size must be a uint32')
          if (e + t > n || e > l) throw new RangeError('buffer too small')
        }
        function c(e, t, n, r) {
          if (U.browser) {
            var d = e.buffer,
              F = new Uint8Array(d, t, n)
            return (
              a.getRandomValues(F),
              r
                ? void U.nextTick(function() {
                    r(null, e)
                  })
                : e
            )
          }
          if (!r) return i(n).copy(e, t), e
          i(n, function(n, U) {
            if (n) return r(n)
            U.copy(e, t), r(null, e)
          })
        }
        ;(a && a.getRandomValues) || !U.browser
          ? ((t.randomFill = function(t, n, U, r) {
              if (!(F.isBuffer(t) || t instanceof e.Uint8Array))
                throw new TypeError(
                  '"buf" argument must be a Buffer or Uint8Array'
                )
              if ('function' == typeof n) (r = n), (n = 0), (U = t.length)
              else if ('function' == typeof U) (r = U), (U = t.length - n)
              else if ('function' != typeof r)
                throw new TypeError('"cb" argument must be a function')
              return o(n, t.length), h(U, n, t.length), c(t, n, U, r)
            }),
            (t.randomFillSync = function(t, n, U) {
              if (
                (void 0 === n && (n = 0),
                !(F.isBuffer(t) || t instanceof e.Uint8Array))
              )
                throw new TypeError(
                  '"buf" argument must be a Buffer or Uint8Array'
                )
              return (
                o(n, t.length),
                void 0 === U && (U = t.length - n),
                h(U, n, t.length),
                c(t, n, U)
              )
            }))
          : ((t.randomFill = r), (t.randomFillSync = r))
      }.call(this, n(8), n(9)))
    },
    function(e, t, n) {
      'use strict'
      var U = window.URL || window.webkitURL
      e.exports = function(e, t) {
        try {
          try {
            var n
            try {
              ;(n = new (window.BlobBuilder ||
                window.WebKitBlobBuilder ||
                window.MozBlobBuilder ||
                window.MSBlobBuilder)()).append(e),
                (n = n.getBlob())
            } catch (t) {
              n = new Blob([e])
            }
            return new Worker(U.createObjectURL(n))
          } catch (t) {
            return new Worker(
              'data:application/javascript,' + encodeURIComponent(e)
            )
          }
        } catch (e) {
          if (!t) throw Error('Inline worker is not supported')
          return new Worker(t)
        }
      }
    },
    function(e, t, n) {
      'use strict'
      n.r(t)
      var U = n(5),
        r = n.n(U),
        d = n(11),
        i = n.n(d),
        F = n(77),
        l = n.n(F),
        a = n(41),
        Q = n.n(a),
        o = n(26),
        h = n.n(o),
        c = n(40),
        B = n.n(c),
        s = function(e) {
          return null == e
        },
        f = function(e) {
          for (; e && e.startsWith('0x0'); ) e = '0x'.concat(e.slice(3))
          return e
        },
        R = function(e) {
          return e.length % 2 == 1 && (e = e.replace('0x', '0x0')), e
        },
        V = function(e, t, n) {
          var U,
            d = !1
          if (((n = n || function() {}), !e))
            return (
              (d = new Error('No transaction object given!')),
              n(d),
              Promise.reject(d)
            )
          function F(e) {
            if (
              (e.gas || e.gasLimit || (d = new Error('gas is missing')),
              (e.nonce < 0 || e.gas < 0 || e.workNonce < 0 || e.chainId < 0) &&
                (d = new Error(
                  'Gas, gasPrice, nonce or chainId is lower than 0'
                )),
              d)
            )
              return n(d), Promise.reject(d)
            try {
              var F = (e = web3.extend.formatters.inputCallFormatter(e))
              ;(F.to = e.to || '0x'),
                (F.data = e.data || '0x'),
                (F.value = e.value || '0x'),
                (F.chainId = web3.utils.numberToHex(e.chainId))
              var l = i.a.encode([
                  r.a.fromNat(F.nonce),
                  r.a.fromNat(F.workNonce || '0x'),
                  r.a.fromNat(F.gas),
                  F.to.toLowerCase(),
                  r.a.fromNat(F.value),
                  F.data,
                  r.a.fromNat(F.chainId || '0x1'),
                  '0x',
                  '0x',
                ]),
                a = h.a.keccak256(l),
                o = Q.a.makeSigner(2 * B.a.toNumber(F.chainId || '0x1') + 35)(
                  h.a.keccak256(l),
                  t
                ),
                c = i.a
                  .decode(l)
                  .slice(0, 6)
                  .concat(Q.a.decodeSignature(o))
              ;(c[6] = R(f(c[6]))), (c[7] = R(f(c[7]))), (c[8] = R(f(c[8])))
              var s = i.a.encode(c),
                V = i.a.decode(s)
              U = {
                messageHash: a,
                v: f(V[6]),
                r: f(V[7]),
                s: f(V[8]),
                rawTransaction: s,
              }
            } catch (e) {
              return n(e), Promise.reject(e)
            }
            return n(null, U), U
          }
          return void 0 !== e.nonce && void 0 !== e.chainId
            ? Promise.resolve(F(e))
            : Promise.all([
                s(e.chainId) ? web3.eth.net.getId.getId() : e.chainId,
                s(e.nonce)
                  ? web3.eth.getTransactionCount(
                      web3.eth.accounts.privateKeyToAccount(t).address
                    )
                  : e.nonce,
              ]).then(function(t) {
                if (s(t[0]) || s(t[1]) || s(t[2]))
                  throw new Error(
                    "One of the values 'chainId', 'gasPrice', or 'nonce' couldn't be fetched: ".concat(
                      JSON.stringify(t)
                    )
                  )
                return F(
                  extend(e, { chainId: t[0], gasPrice: t[1], nonce: t[2] })
                )
              })
        }
      function u(e) {
        return (u =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      var S = (function() {
        try {
          if (
            'object' ===
              ('undefined' == typeof WebAssembly
                ? 'undefined'
                : u(WebAssembly)) &&
            'function' == typeof WebAssembly.instantiate
          ) {
            var e = new WebAssembly.Module(
              Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
            )
            if (e instanceof WebAssembly.Module)
              return new WebAssembly.Instance(e) instanceof WebAssembly.Instance
          }
        } catch (e) {}
        return !1
      })()
      function p(e) {
        return (p =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      t.default = function(e) {
        ;(e.eth.calculateWorkForTransaction = function(t, n, U, d) {
          var F = !1
          return (
            (d = d || function() {}),
            S
              ? t
                ? Promise.resolve(
                    (function(t) {
                      if (
                        (n || (F = new Error('"targetDifficulty" is missing')),
                        t.gas || (F = new Error('"gas" is missing')),
                        (t.nonce < 0 || t.gas < 0 || t.chainId < 0) &&
                          (F = new Error(
                            'Gas, nonce or chainId is lower than 0'
                          )),
                        F)
                      )
                        return d(F), Promise.reject(F)
                      try {
                        t = e.extend.formatters.inputCallFormatter(t)
                        var a = {
                          hash: i.a.encode([
                            r.a.fromNat(t.nonce),
                            r.a.fromNat('0x'),
                            r.a.fromNat(t.gas),
                            t.to ? t.to.toLowerCase() : '',
                            r.a.fromNat(t.value || '0x'),
                            t.data || '0x',
                            r.a.fromNat(
                              e.utils.numberToHex(t.chainId) || '0x1'
                            ),
                            '0x',
                            '0x',
                          ]),
                          targetDifficulty: n,
                        }
                        return new Promise(function(n, r) {
                          var i = 0,
                            F = !1,
                            Q = new l.a()
                          ;(Q.onmessage = function(U) {
                            var r = U.target,
                              l = U.data,
                              o = l.cmd,
                              h = l.workNonce
                            switch (o) {
                              case 'ready':
                                ;(F = !0), Q.postMessage(a)
                                break
                              case 'current':
                                i = h
                                break
                              case 'finished':
                                ;(t.workNonce = e.utils.numberToHex(h)),
                                  (F = !1),
                                  r.terminate(),
                                  d(null, t),
                                  n(t)
                            }
                          }),
                            'object' === p(U) &&
                              ((U.isRunning = function() {
                                return F
                              }),
                              (U.getCurrentWorkNonce = function() {
                                return i
                              }),
                              (U.kill = function() {
                                ;(F = !1),
                                  (i = 0),
                                  Q.terminate(),
                                  r('Worker terminated by user')
                              }))
                        })
                      } catch (e) {
                        return d(e), Promise.reject(e)
                      }
                    })(t)
                  )
                : ((F = new Error('No transaction object given!')),
                  d(F),
                  Promise.reject(F))
              : ((F = new Error(
                  "Wasm is not supported by browser. CryptoNight can't load."
                )),
                d(F),
                Promise.reject(F))
          )
        }),
          e.eth.extend({
            methods: [
              {
                name: 'suggestDifficulty',
                call: 'eth_suggestDifficulty',
                outputFormatter: e.utils.toFloat,
              },
            ],
          })
        var t = e.eth.accounts._addAccountFunctions
        return (
          (e.eth.accounts._addAccountFunctions = function(n) {
            return (
              ((n = t.call(this, n)).signTransaction = function(e, t) {
                return V(e, n.privateKey, t)
              }),
              (n.calculateWorkForTransaction =
                e.eth.calculateWorkForTransaction),
              n
            )
          }),
          e
        )
      }
    },
  ]).default
})
