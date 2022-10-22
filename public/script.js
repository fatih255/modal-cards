/*! For license information please see script.js.LICENSE.txt */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('modalCard', [], e)
    : 'object' == typeof exports
    ? (exports.modalCard = e())
    : (t.modalCard = e())
})(self, () =>
  (() => {
    'use strict'
    var t = {
        d: (e, r) => {
          for (var n in r)
            t.o(r, n) &&
              !t.o(e, n) &&
              Object.defineProperty(e, n, { enumerable: !0, get: r[n] })
        },
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      },
      e = {}
    function r() {
      var t = navigator.userAgent,
        e = t.indexOf('Chrome') > -1,
        r = t.indexOf('MSIE') > -1 || t.indexOf('rv:') > -1,
        n = t.indexOf('Firefox') > -1,
        o = t.indexOf('Safari') > -1
      e && o && (o = !1)
      var i = t.indexOf('OP') > -1
      e && i && (e = !1)
      var a = {
          chromeAgent: e,
          IExplorerAgent: r,
          firefoxAgent: n,
          safariAgent: o,
          operaAgent: i,
        },
        c =
          Object.keys(a)[
            Object.values(a).findIndex(function (t) {
              return !0 === t
            })
          ]
      return c.charAt(0).toUpperCase() + c.slice(1).replace('Agent', '')
    }
    function n(t) {
      return (
        (n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              }),
        n(t)
      )
    }
    function o() {
      o = function () {
        return t
      }
      var t = {},
        e = Object.prototype,
        r = e.hasOwnProperty,
        i = 'function' == typeof Symbol ? Symbol : {},
        a = i.iterator || '@@iterator',
        c = i.asyncIterator || '@@asyncIterator',
        u = i.toStringTag || '@@toStringTag'
      function s(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        )
      }
      try {
        s({}, '')
      } catch (t) {
        s = function (t, e, r) {
          return (t[e] = r)
        }
      }
      function l(t, e, r, n) {
        var o = e && e.prototype instanceof h ? e : h,
          i = Object.create(o.prototype),
          a = new S(n || [])
        return (
          (i._invoke = (function (t, e, r) {
            var n = 'suspendedStart'
            return function (o, i) {
              if ('executing' === n)
                throw new Error('Generator is already running')
              if ('completed' === n) {
                if ('throw' === o) throw i
                return { value: void 0, done: !0 }
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate
                if (a) {
                  var c = O(a, r)
                  if (c) {
                    if (c === d) continue
                    return c
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg
                else if ('throw' === r.method) {
                  if ('suspendedStart' === n) throw ((n = 'completed'), r.arg)
                  r.dispatchException(r.arg)
                } else 'return' === r.method && r.abrupt('return', r.arg)
                n = 'executing'
                var u = f(t, e, r)
                if ('normal' === u.type) {
                  if (
                    ((n = r.done ? 'completed' : 'suspendedYield'), u.arg === d)
                  )
                    continue
                  return { value: u.arg, done: r.done }
                }
                'throw' === u.type &&
                  ((n = 'completed'), (r.method = 'throw'), (r.arg = u.arg))
              }
            }
          })(t, r, a)),
          i
        )
      }
      function f(t, e, r) {
        try {
          return { type: 'normal', arg: t.call(e, r) }
        } catch (t) {
          return { type: 'throw', arg: t }
        }
      }
      t.wrap = l
      var d = {}
      function h() {}
      function p() {}
      function v() {}
      var y = {}
      s(y, a, function () {
        return this
      })
      var g = Object.getPrototypeOf,
        m = g && g(g(A([])))
      m && m !== e && r.call(m, a) && (y = m)
      var w = (v.prototype = h.prototype = Object.create(y))
      function b(t) {
        ;['next', 'throw', 'return'].forEach(function (e) {
          s(t, e, function (t) {
            return this._invoke(e, t)
          })
        })
      }
      function x(t, e) {
        function o(i, a, c, u) {
          var s = f(t[i], t, a)
          if ('throw' !== s.type) {
            var l = s.arg,
              d = l.value
            return d && 'object' == n(d) && r.call(d, '__await')
              ? e.resolve(d.__await).then(
                  function (t) {
                    o('next', t, c, u)
                  },
                  function (t) {
                    o('throw', t, c, u)
                  },
                )
              : e.resolve(d).then(
                  function (t) {
                    ;(l.value = t), c(l)
                  },
                  function (t) {
                    return o('throw', t, c, u)
                  },
                )
          }
          u(s.arg)
        }
        var i
        this._invoke = function (t, r) {
          function n() {
            return new e(function (e, n) {
              o(t, r, e, n)
            })
          }
          return (i = i ? i.then(n, n) : n())
        }
      }
      function O(t, e) {
        var r = t.iterator[e.method]
        if (void 0 === r) {
          if (((e.delegate = null), 'throw' === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = 'return'),
              (e.arg = void 0),
              O(t, e),
              'throw' === e.method)
            )
              return d
            ;(e.method = 'throw'),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method",
              ))
          }
          return d
        }
        var n = f(r, t.iterator, e.arg)
        if ('throw' === n.type)
          return (e.method = 'throw'), (e.arg = n.arg), (e.delegate = null), d
        var o = n.arg
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              'return' !== e.method && ((e.method = 'next'), (e.arg = void 0)),
              (e.delegate = null),
              d)
            : o
          : ((e.method = 'throw'),
            (e.arg = new TypeError('iterator result is not an object')),
            (e.delegate = null),
            d)
      }
      function L(t) {
        var e = { tryLoc: t[0] }
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e)
      }
      function E(t) {
        var e = t.completion || {}
        ;(e.type = 'normal'), delete e.arg, (t.completion = e)
      }
      function S(t) {
        ;(this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(L, this),
          this.reset(!0)
      }
      function A(t) {
        if (t) {
          var e = t[a]
          if (e) return e.call(t)
          if ('function' == typeof t.next) return t
          if (!isNaN(t.length)) {
            var n = -1,
              o = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e
                return (e.value = void 0), (e.done = !0), e
              }
            return (o.next = o)
          }
        }
        return { next: j }
      }
      function j() {
        return { value: void 0, done: !0 }
      }
      return (
        (p.prototype = v),
        s(w, 'constructor', v),
        s(v, 'constructor', p),
        (p.displayName = s(v, u, 'GeneratorFunction')),
        (t.isGeneratorFunction = function (t) {
          var e = 'function' == typeof t && t.constructor
          return (
            !!e &&
            (e === p || 'GeneratorFunction' === (e.displayName || e.name))
          )
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, v)
              : ((t.__proto__ = v), s(t, u, 'GeneratorFunction')),
            (t.prototype = Object.create(w)),
            t
          )
        }),
        (t.awrap = function (t) {
          return { __await: t }
        }),
        b(x.prototype),
        s(x.prototype, c, function () {
          return this
        }),
        (t.AsyncIterator = x),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise)
          var a = new x(l(e, r, n, o), i)
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next()
              })
        }),
        b(w),
        s(w, u, 'Generator'),
        s(w, a, function () {
          return this
        }),
        s(w, 'toString', function () {
          return '[object Generator]'
        }),
        (t.keys = function (t) {
          var e = []
          for (var r in t) e.push(r)
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop()
                if (n in t) return (r.value = n), (r.done = !1), r
              }
              return (r.done = !0), r
            }
          )
        }),
        (t.values = A),
        (S.prototype = {
          constructor: S,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = void 0),
              this.tryEntries.forEach(E),
              !t)
            )
              for (var e in this)
                't' === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0)
          },
          stop: function () {
            this.done = !0
            var t = this.tryEntries[0].completion
            if ('throw' === t.type) throw t.arg
            return this.rval
          },
          dispatchException: function (t) {
            if (this.done) throw t
            var e = this
            function n(r, n) {
              return (
                (a.type = 'throw'),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = 'next'), (e.arg = void 0)),
                !!n
              )
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion
              if ('root' === i.tryLoc) return n('end')
              if (i.tryLoc <= this.prev) {
                var c = r.call(i, 'catchLoc'),
                  u = r.call(i, 'finallyLoc')
                if (c && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                } else {
                  if (!u)
                    throw new Error('try statement without catch or finally')
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n]
              if (
                o.tryLoc <= this.prev &&
                r.call(o, 'finallyLoc') &&
                this.prev < o.finallyLoc
              ) {
                var i = o
                break
              }
            }
            i &&
              ('break' === t || 'continue' === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null)
            var a = i ? i.completion : {}
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
                : this.complete(a)
            )
          },
          complete: function (t, e) {
            if ('throw' === t.type) throw t.arg
            return (
              'break' === t.type || 'continue' === t.type
                ? (this.next = t.arg)
                : 'return' === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
              d
            )
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e]
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), E(r), d
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e]
              if (r.tryLoc === t) {
                var n = r.completion
                if ('throw' === n.type) {
                  var o = n.arg
                  E(r)
                }
                return o
              }
            }
            throw new Error('illegal catch attempt')
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: A(t), resultName: e, nextLoc: r }),
              'next' === this.method && (this.arg = void 0),
              d
            )
          },
        }),
        t
      )
    }
    function i(t, e) {
      ;(null == e || e > t.length) && (e = t.length)
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
      return n
    }
    function a(t, e) {
      var r = Object.keys(t)
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t)
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })),
          r.push.apply(r, n)
      }
      return r
    }
    function c(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {}
        e % 2
          ? a(Object(r), !0).forEach(function (e) {
              u(t, e, r[e])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : a(Object(r)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
      }
      return t
    }
    function u(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      )
    }
    function s(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value
      } catch (t) {
        return void r(t)
      }
      c.done ? e(u) : Promise.resolve(u).then(n, o)
    }
    function l(t) {
      return function () {
        var e = this,
          r = arguments
        return new Promise(function (n, o) {
          var i = t.apply(e, r)
          function a(t) {
            s(i, n, o, a, c, 'next', t)
          }
          function c(t) {
            s(i, n, o, a, c, 'throw', t)
          }
          a(void 0)
        })
      }
    }
    function f(t) {
      var e = t.html,
        n = t.settings,
        a = document.getElementsByTagName('head')[0],
        u = document.createElement('link')
      ;(u.id = 'modalCardCSS'),
        (u.rel = 'stylesheet'),
        (u.type = 'text/css'),
        (u.href = 'https://leafy-mermaid-eb53cb.netlify.app/styles/modal.css'),
        (u.media = 'all'),
        a.appendChild(u)
      var s = {},
        f = []
      u.onload = l(
        o().mark(function t() {
          var a, u, l, d, h, p, v, y, g, m, w, b, x, O, L, E, S
          return o().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (
                    ((S = function () {
                      window.removeEventListener('scroll', w),
                        document.removeEventListener('mouseout', b),
                        window.clearTimeout(v)
                    }),
                    (E = function () {
                      var t =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0]
                      d.classList.remove('open'),
                        d.classList.add('close'),
                        t &&
                          (p.forEach(function (t) {
                            return t()
                          }),
                          h.forEach(function (t) {
                            return t()
                          }))
                    }),
                    (L = function () {
                      d.classList.add('open'),
                        sessionStorage.setItem('modalopened', 'true'),
                        S()
                    }),
                    (O = function () {
                      n.webHookUrl &&
                        fetch(n.webHookUrl, {
                          method: 'POST',
                          body: JSON.stringify(m),
                        })
                          .then(function (t) {
                            return t.json()
                          })
                          .then(function (t) {
                            return console.log(t)
                          })
                    }),
                    (x = function (t) {
                      var e = t.target
                      e &&
                        (m.clickedButtons.push(e.innerText),
                        e.removeEventListener('click', x))
                    }),
                    (b = function (t) {
                      t.relatedTarget || L()
                    }),
                    (w = function () {
                      var t =
                        window.scrollY /
                        (document.documentElement.offsetHeight -
                          window.innerHeight)
                      Math.round(100 * t) === Number(n.afterPercentageScroll) &&
                        L()
                    }),
                    (l = function () {
                      var t = document.querySelectorAll('[data-text]')
                      t.length > 0 &&
                        t.forEach(function (t) {
                          var e,
                            r,
                            n = t
                          s.textFields = [].concat(
                            (function (t) {
                              if (Array.isArray(t)) return i(t)
                            })(
                              (r =
                                null !== (e = s.textFields) && void 0 !== e
                                  ? e
                                  : []),
                            ) ||
                              (function (t) {
                                if (
                                  ('undefined' != typeof Symbol &&
                                    null != t[Symbol.iterator]) ||
                                  null != t['@@iterator']
                                )
                                  return Array.from(t)
                              })(r) ||
                              (function (t, e) {
                                if (t) {
                                  if ('string' == typeof t) return i(t, e)
                                  var r = Object.prototype.toString
                                    .call(t)
                                    .slice(8, -1)
                                  return (
                                    'Object' === r &&
                                      t.constructor &&
                                      (r = t.constructor.name),
                                    'Map' === r || 'Set' === r
                                      ? Array.from(t)
                                      : 'Arguments' === r ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          r,
                                        )
                                      ? i(t, e)
                                      : void 0
                                  )
                                }
                              })(r) ||
                              (function () {
                                throw new TypeError(
                                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                )
                              })(),
                            [{ name: n.placeholder, value: n.value }],
                          )
                        })
                    }),
                    document.body.insertAdjacentHTML('beforeend', e),
                    document
                      .querySelectorAll('.close-modal-action')
                      .forEach(function (t) {
                        t.addEventListener('click', function () {
                          E(!1)
                        })
                      }),
                    (a = document.querySelectorAll('button')).length > 0 &&
                      a.forEach(function (t) {
                        t.addEventListener('click', function (e) {
                          f.push(e.target.innerText)
                          var r,
                            n = t.getAttribute('data-post-url'),
                            o = t.getAttribute('data-link'),
                            i = t.getAttribute('data-close-modal'),
                            a = t.getAttribute('data-webhook-post')
                          if (n) {
                            var c = t.getAttribute('data-value')
                            fetch(n, { method: 'POST', body: c })
                              .then(function (t) {
                                return t.json()
                              })
                              .then(function (t) {
                                return console.log(t)
                              }),
                              E()
                          }
                          o &&
                            (window.location.href =
                              null !== (r = t.getAttribute('data-link')) &&
                              void 0 !== r
                                ? r
                                : ''),
                            i && E(!1),
                            a && E()
                        })
                      }),
                    (u = document.querySelectorAll('[data-radio-value]'))
                      .length > 0 &&
                      (u.forEach(function (t) {
                        t.querySelector('.selected-radio') &&
                          (s = c(
                            c({}, s),
                            {},
                            {
                              selectedRadioButtonValue: {
                                name: 'selected-radio',
                                value: t.getAttribute('data-radio-value'),
                              },
                            },
                          ))
                      }),
                      u.forEach(function (t) {
                        t.addEventListener('click', function () {
                          var e = t.querySelector('.radio-eye'),
                            r = document.querySelector('.selected-radio')
                          r &&
                            (r.classList.remove('selected-radio'),
                            null == e || e.classList.remove('scale-[.4]')),
                            t.firstChild &&
                              (t.firstChild.classList.contains(
                                'selected-radio',
                              ) ||
                                (t.firstChild.classList.add('selected-radio'),
                                null == e || e.classList.add('scale-[.4]'),
                                (s = c(
                                  c({}, s),
                                  {},
                                  {
                                    selectedRadioButtonValue: {
                                      name: 'selected-radio',
                                      value: t.getAttribute('data-radio-value'),
                                    },
                                  },
                                ))))
                        })
                      })),
                    (d = document.getElementById('layout')))
                  ) {
                    t.next = 18
                    break
                  }
                  return t.abrupt('return')
                case 18:
                  d.classList.add('for-generated'),
                    (h = []),
                    (p = []),
                    (y = []),
                    (g = sessionStorage.getItem('modalopened')),
                    (m = {
                      dateTime: '',
                      browserLanguage: navigator.languages.filter(function (t) {
                        return t.length > 2
                      }),
                      browserName: r(),
                      operatingSystem:
                        ((o = void 0),
                        (o = 'Unknown'),
                        -1 !=
                          window.navigator.userAgent.indexOf(
                            'Windows NT 10.0',
                          ) && (o = 'Windows 10'),
                        -1 !=
                          window.navigator.userAgent.indexOf(
                            'Windows NT 6.3',
                          ) && (o = 'Windows 8.1'),
                        -1 !=
                          window.navigator.userAgent.indexOf(
                            'Windows NT 6.2',
                          ) && (o = 'Windows 8'),
                        -1 !=
                          window.navigator.userAgent.indexOf(
                            'Windows NT 6.1',
                          ) && (o = 'Windows 7'),
                        -1 !=
                          window.navigator.userAgent.indexOf(
                            'Windows NT 6.0',
                          ) && (o = 'Windows Vista'),
                        -1 !=
                          window.navigator.userAgent.indexOf(
                            'Windows NT 5.1',
                          ) && (o = 'Windows XP'),
                        -1 !=
                          window.navigator.userAgent.indexOf(
                            'Windows NT 5.0',
                          ) && (o = 'Windows 2000'),
                        -1 != window.navigator.userAgent.indexOf('Mac') &&
                          (o = 'Mac/iOS'),
                        -1 != window.navigator.userAgent.indexOf('X11') &&
                          (o = 'UNIX'),
                        -1 != window.navigator.userAgent.indexOf('Linux') &&
                          (o = 'Linux'),
                        o),
                      deviceType: window.matchMedia(
                        'only screen and (max-width: 760px)',
                      ).matches
                        ? 'Mobile'
                        : 'Desktop',
                      clickedButtons: [],
                    }),
                    y.push(!g),
                    y.push(
                      !n.trafficSource || document.referrer === n.trafficSource,
                    ),
                    y.push(
                      !n.browserLanguages ||
                        n.browserLanguages.some(function (t) {
                          return navigator.languages.includes(t)
                        }),
                    ),
                    y.every(function (t) {
                      return t
                    }) &&
                      (n.afterPercentageScroll ||
                        n.exitIntentTargetting ||
                        n.afterXSeconds ||
                        L(),
                      Object.keys(n).forEach(function (t) {
                        switch (t) {
                          case 'afterPercentageScroll':
                            window.addEventListener('scroll', w)
                            break
                          case 'afterXSeconds':
                            v = setTimeout(function () {
                              L()
                            }, 1e3 * Number(n.afterXSeconds))
                            break
                          case 'exitIntentTargetting':
                            void 0 === screen.orientation &&
                              document.addEventListener('mouseout', b)
                            break
                          case 'sendClickData':
                            p.push(function () {
                              return (m.clickedButtons = f)
                            })
                            break
                          case 'sendFormSubmission':
                            p.push(function () {
                              return (m.formData = s)
                            })
                            break
                          case 'webHookUrl':
                            p.push(
                              function () {
                                return l()
                              },
                              function () {
                                return (m.dateTime = new Date(
                                  Date.now(),
                                ).toString())
                              },
                            ),
                              h.push(function () {
                                return O()
                              })
                            break
                          case 'visitorDevice':
                            d.classList.add(n.visitorDevice)
                        }
                      }))
                case 28:
                case 'end':
                  return t.stop()
              }
            var o
          }, t)
        }),
      )
    }
    return t.d(e, { default: () => f }), e.default
  })(),
)
