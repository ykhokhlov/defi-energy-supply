/*! For license information please see main.js.LICENSE.txt */
(() => {
  var e = {
      424: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { default: () => i });
        var a = n(81),
          r = n.n(a),
          s = n(645),
          o = n.n(s)()(r());
        o.push([
          e.id,
          '@import url(https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap);',
        ]),
          o.push([e.id, "\nhtml,\nbody {\n  font-family: 'Source Code Pro', monospace;\n}\n", '']);
        const i = o;
      },
      645: e => {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  a = void 0 !== t[5];
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  a && (n += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                  (n += e(t)),
                  a && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (t.i = function (e, n, a, r, s) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var o = {};
              if (a)
                for (var i = 0; i < this.length; i++) {
                  var u = this[i][0];
                  null != u && (o[u] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var d = [].concat(e[l]);
                (a && o[d[0]]) ||
                  (void 0 !== s &&
                    (void 0 === d[5] ||
                      (d[1] = '@layer'.concat(d[5].length > 0 ? ' '.concat(d[5]) : '', ' {').concat(d[1], '}')),
                    (d[5] = s)),
                  n && (d[2] ? ((d[1] = '@media '.concat(d[2], ' {').concat(d[1], '}')), (d[2] = n)) : (d[2] = n)),
                  r &&
                    (d[4]
                      ? ((d[1] = '@supports ('.concat(d[4], ') {').concat(d[1], '}')), (d[4] = r))
                      : (d[4] = ''.concat(r))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      81: e => {
        'use strict';
        e.exports = function (e) {
          return e[1];
        };
      },
      838: (e, t, n) => {
        var a = n(424);
        a.__esModule && (a = a.default),
          'string' == typeof a && (a = [[e.id, a, '']]),
          a.locals && (e.exports = a.locals),
          (0, n(346).Z)('20211576', a, !1, {});
      },
      346: (e, t, n) => {
        'use strict';
        function a(e, t) {
          for (var n = [], a = {}, r = 0; r < t.length; r++) {
            var s = t[r],
              o = s[0],
              i = { id: e + ':' + r, css: s[1], media: s[2], sourceMap: s[3] };
            a[o] ? a[o].parts.push(i) : n.push((a[o] = { id: o, parts: [i] }));
          }
          return n;
        }
        n.d(t, { Z: () => m });
        var r = 'undefined' != typeof document;
        if ('undefined' != typeof DEBUG && DEBUG && !r)
          throw new Error(
            "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
          );
        var s = {},
          o = r && (document.head || document.getElementsByTagName('head')[0]),
          i = null,
          u = 0,
          l = !1,
          d = function () {},
          p = null,
          c = 'data-vue-ssr-id',
          y = 'undefined' != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function m(e, t, n, r) {
          (l = n), (p = r || {});
          var o = a(e, t);
          return (
            f(o),
            function (t) {
              for (var n = [], r = 0; r < o.length; r++) {
                var i = o[r];
                (u = s[i.id]).refs--, n.push(u);
              }
              for (t ? f((o = a(e, t))) : (o = []), r = 0; r < n.length; r++) {
                var u;
                if (0 === (u = n[r]).refs) {
                  for (var l = 0; l < u.parts.length; l++) u.parts[l]();
                  delete s[u.id];
                }
              }
            }
          );
        }
        function f(e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t],
              a = s[n.id];
            if (a) {
              a.refs++;
              for (var r = 0; r < a.parts.length; r++) a.parts[r](n.parts[r]);
              for (; r < n.parts.length; r++) a.parts.push(h(n.parts[r]));
              a.parts.length > n.parts.length && (a.parts.length = n.parts.length);
            } else {
              var o = [];
              for (r = 0; r < n.parts.length; r++) o.push(h(n.parts[r]));
              s[n.id] = { id: n.id, refs: 1, parts: o };
            }
          }
        }
        function v() {
          var e = document.createElement('style');
          return (e.type = 'text/css'), o.appendChild(e), e;
        }
        function h(e) {
          var t,
            n,
            a = document.querySelector('style[' + c + '~="' + e.id + '"]');
          if (a) {
            if (l) return d;
            a.parentNode.removeChild(a);
          }
          if (y) {
            var r = u++;
            (a = i || (i = v())), (t = R.bind(null, a, r, !1)), (n = R.bind(null, a, r, !0));
          } else
            (a = v()),
              (t = T.bind(null, a)),
              (n = function () {
                a.parentNode.removeChild(a);
              });
          return (
            t(e),
            function (a) {
              if (a) {
                if (a.css === e.css && a.media === e.media && a.sourceMap === e.sourceMap) return;
                t((e = a));
              } else n();
            }
          );
        }
        var b,
          g =
            ((b = []),
            function (e, t) {
              return (b[e] = t), b.filter(Boolean).join('\n');
            });
        function R(e, t, n, a) {
          var r = n ? '' : a.css;
          if (e.styleSheet) e.styleSheet.cssText = g(t, r);
          else {
            var s = document.createTextNode(r),
              o = e.childNodes;
            o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(s, o[t]) : e.appendChild(s);
          }
        }
        function T(e, t) {
          var n = t.css,
            a = t.media,
            r = t.sourceMap;
          if (
            (a && e.setAttribute('media', a),
            p.ssrId && e.setAttribute(c, t.id),
            r &&
              ((n += '\n/*# sourceURL=' + r.sources[0] + ' */'),
              (n +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                ' */')),
            e.styleSheet)
          )
            e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        }
      },
    },
    t = {};
  function n(a) {
    var r = t[a];
    if (void 0 !== r) return r.exports;
    var s = (t[a] = { id: a, exports: {} });
    return e[a](s, s.exports, n), s.exports;
  }
  (n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      'use strict';
      var e = Object.freeze({}),
        t = Array.isArray;
      function a(e) {
        return null == e;
      }
      function r(e) {
        return null != e;
      }
      function s(e) {
        return !0 === e;
      }
      function o(e) {
        return 'string' == typeof e || 'number' == typeof e || 'symbol' == typeof e || 'boolean' == typeof e;
      }
      function i(e) {
        return 'function' == typeof e;
      }
      function u(e) {
        return null !== e && 'object' == typeof e;
      }
      var l = Object.prototype.toString;
      function d(e) {
        return '[object Object]' === l.call(e);
      }
      function p(e) {
        var t = parseFloat(String(e));
        return t >= 0 && Math.floor(t) === t && isFinite(e);
      }
      function c(e) {
        return r(e) && 'function' == typeof e.then && 'function' == typeof e.catch;
      }
      function y(e) {
        return null == e ? '' : Array.isArray(e) || (d(e) && e.toString === l) ? JSON.stringify(e, null, 2) : String(e);
      }
      function m(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t;
      }
      function f(e, t) {
        for (var n = Object.create(null), a = e.split(','), r = 0; r < a.length; r++) n[a[r]] = !0;
        return t
          ? function (e) {
              return n[e.toLowerCase()];
            }
          : function (e) {
              return n[e];
            };
      }
      var v = f('slot,component', !0),
        h = f('key,ref,slot,slot-scope,is');
      function b(e, t) {
        var n = e.length;
        if (n) {
          if (t === e[n - 1]) return void (e.length = n - 1);
          var a = e.indexOf(t);
          if (a > -1) return e.splice(a, 1);
        }
      }
      var g = Object.prototype.hasOwnProperty;
      function R(e, t) {
        return g.call(e, t);
      }
      function T(e) {
        var t = Object.create(null);
        return function (n) {
          return t[n] || (t[n] = e(n));
        };
      }
      var _ = /-(\w)/g,
        w = T(function (e) {
          return e.replace(_, function (e, t) {
            return t ? t.toUpperCase() : '';
          });
        }),
        k = T(function (e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }),
        E = /\B([A-Z])/g,
        A = T(function (e) {
          return e.replace(E, '-$1').toLowerCase();
        }),
        x = Function.prototype.bind
          ? function (e, t) {
              return e.bind(t);
            }
          : function (e, t) {
              function n(n) {
                var a = arguments.length;
                return a ? (a > 1 ? e.apply(t, arguments) : e.call(t, n)) : e.call(t);
              }
              return (n._length = e.length), n;
            };
      function I(e, t) {
        t = t || 0;
        for (var n = e.length - t, a = new Array(n); n--; ) a[n] = e[n + t];
        return a;
      }
      function C(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function M(e) {
        for (var t = {}, n = 0; n < e.length; n++) e[n] && C(t, e[n]);
        return t;
      }
      function S(e, t, n) {}
      var O = function (e, t, n) {
          return !1;
        },
        $ = function (e) {
          return e;
        };
      function L(e, t) {
        if (e === t) return !0;
        var n = u(e),
          a = u(t);
        if (!n || !a) return !n && !a && String(e) === String(t);
        try {
          var r = Array.isArray(e),
            s = Array.isArray(t);
          if (r && s)
            return (
              e.length === t.length &&
              e.every(function (e, n) {
                return L(e, t[n]);
              })
            );
          if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
          if (r || s) return !1;
          var o = Object.keys(e),
            i = Object.keys(t);
          return (
            o.length === i.length &&
            o.every(function (n) {
              return L(e[n], t[n]);
            })
          );
        } catch (e) {
          return !1;
        }
      }
      function N(e, t) {
        for (var n = 0; n < e.length; n++) if (L(e[n], t)) return n;
        return -1;
      }
      function F(e) {
        var t = !1;
        return function () {
          t || ((t = !0), e.apply(this, arguments));
        };
      }
      var j = 'data-server-rendered',
        G = ['component', 'directive', 'filter'],
        D = [
          'beforeCreate',
          'created',
          'beforeMount',
          'mounted',
          'beforeUpdate',
          'updated',
          'beforeDestroy',
          'destroyed',
          'activated',
          'deactivated',
          'errorCaptured',
          'serverPrefetch',
          'renderTracked',
          'renderTriggered',
        ],
        U = {
          optionMergeStrategies: Object.create(null),
          silent: !1,
          productionTip: !1,
          devtools: !1,
          performance: !1,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: Object.create(null),
          isReservedTag: O,
          isReservedAttr: O,
          isUnknownElement: O,
          getTagNamespace: S,
          parsePlatformTagName: $,
          mustUseProp: O,
          async: !0,
          _lifecycleHooks: D,
        },
        P =
          /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
      function q(e) {
        var t = (e + '').charCodeAt(0);
        return 36 === t || 95 === t;
      }
      function B(e, t, n, a) {
        Object.defineProperty(e, t, { value: n, enumerable: !!a, writable: !0, configurable: !0 });
      }
      var V = new RegExp('[^'.concat(P.source, '.$_\\d]')),
        z = '__proto__' in {},
        H = 'undefined' != typeof window,
        K = H && window.navigator.userAgent.toLowerCase(),
        W = K && /msie|trident/.test(K),
        J = K && K.indexOf('msie 9.0') > 0,
        Z = K && K.indexOf('edge/') > 0;
      K && K.indexOf('android');
      var Y = K && /iphone|ipad|ipod|ios/.test(K);
      K && /chrome\/\d+/.test(K), K && /phantomjs/.test(K);
      var X,
        Q = K && K.match(/firefox\/(\d+)/),
        ee = {}.watch,
        te = !1;
      if (H)
        try {
          var ne = {};
          Object.defineProperty(ne, 'passive', {
            get: function () {
              te = !0;
            },
          }),
            window.addEventListener('test-passive', null, ne);
        } catch (e) {}
      var ae = function () {
          return void 0 === X && (X = !H && void 0 !== n.g && n.g.process && 'server' === n.g.process.env.VUE_ENV), X;
        },
        re = H && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
      function se(e) {
        return 'function' == typeof e && /native code/.test(e.toString());
      }
      var oe,
        ie = 'undefined' != typeof Symbol && se(Symbol) && 'undefined' != typeof Reflect && se(Reflect.ownKeys);
      oe =
        'undefined' != typeof Set && se(Set)
          ? Set
          : (function () {
              function e() {
                this.set = Object.create(null);
              }
              return (
                (e.prototype.has = function (e) {
                  return !0 === this.set[e];
                }),
                (e.prototype.add = function (e) {
                  this.set[e] = !0;
                }),
                (e.prototype.clear = function () {
                  this.set = Object.create(null);
                }),
                e
              );
            })();
      var ue = null;
      function le(e) {
        void 0 === e && (e = null), e || (ue && ue._scope.off()), (ue = e), e && e._scope.on();
      }
      var de = (function () {
          function e(e, t, n, a, r, s, o, i) {
            (this.tag = e),
              (this.data = t),
              (this.children = n),
              (this.text = a),
              (this.elm = r),
              (this.ns = void 0),
              (this.context = s),
              (this.fnContext = void 0),
              (this.fnOptions = void 0),
              (this.fnScopeId = void 0),
              (this.key = t && t.key),
              (this.componentOptions = o),
              (this.componentInstance = void 0),
              (this.parent = void 0),
              (this.raw = !1),
              (this.isStatic = !1),
              (this.isRootInsert = !0),
              (this.isComment = !1),
              (this.isCloned = !1),
              (this.isOnce = !1),
              (this.asyncFactory = i),
              (this.asyncMeta = void 0),
              (this.isAsyncPlaceholder = !1);
          }
          return (
            Object.defineProperty(e.prototype, 'child', {
              get: function () {
                return this.componentInstance;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        pe = function (e) {
          void 0 === e && (e = '');
          var t = new de();
          return (t.text = e), (t.isComment = !0), t;
        };
      function ce(e) {
        return new de(void 0, void 0, void 0, String(e));
      }
      function ye(e) {
        var t = new de(
          e.tag,
          e.data,
          e.children && e.children.slice(),
          e.text,
          e.elm,
          e.context,
          e.componentOptions,
          e.asyncFactory,
        );
        return (
          (t.ns = e.ns),
          (t.isStatic = e.isStatic),
          (t.key = e.key),
          (t.isComment = e.isComment),
          (t.fnContext = e.fnContext),
          (t.fnOptions = e.fnOptions),
          (t.fnScopeId = e.fnScopeId),
          (t.asyncMeta = e.asyncMeta),
          (t.isCloned = !0),
          t
        );
      }
      var me = 0,
        fe = [],
        ve = function () {
          for (var e = 0; e < fe.length; e++) {
            var t = fe[e];
            (t.subs = t.subs.filter(function (e) {
              return e;
            })),
              (t._pending = !1);
          }
          fe.length = 0;
        },
        he = (function () {
          function e() {
            (this._pending = !1), (this.id = me++), (this.subs = []);
          }
          return (
            (e.prototype.addSub = function (e) {
              this.subs.push(e);
            }),
            (e.prototype.removeSub = function (e) {
              (this.subs[this.subs.indexOf(e)] = null), this._pending || ((this._pending = !0), fe.push(this));
            }),
            (e.prototype.depend = function (t) {
              e.target && e.target.addDep(this);
            }),
            (e.prototype.notify = function (e) {
              for (
                var t = this.subs.filter(function (e) {
                    return e;
                  }),
                  n = 0,
                  a = t.length;
                n < a;
                n++
              )
                t[n].update();
            }),
            e
          );
        })();
      he.target = null;
      var be = [];
      function ge(e) {
        be.push(e), (he.target = e);
      }
      function Re() {
        be.pop(), (he.target = be[be.length - 1]);
      }
      var Te = Array.prototype,
        _e = Object.create(Te);
      ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (e) {
        var t = Te[e];
        B(_e, e, function () {
          for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
          var r,
            s = t.apply(this, n),
            o = this.__ob__;
          switch (e) {
            case 'push':
            case 'unshift':
              r = n;
              break;
            case 'splice':
              r = n.slice(2);
          }
          return r && o.observeArray(r), o.dep.notify(), s;
        });
      });
      var we = Object.getOwnPropertyNames(_e),
        ke = {},
        Ee = !0;
      function Ae(e) {
        Ee = e;
      }
      var xe = { notify: S, depend: S, addSub: S, removeSub: S },
        Ie = (function () {
          function e(e, n, a) {
            if (
              (void 0 === n && (n = !1),
              void 0 === a && (a = !1),
              (this.value = e),
              (this.shallow = n),
              (this.mock = a),
              (this.dep = a ? xe : new he()),
              (this.vmCount = 0),
              B(e, '__ob__', this),
              t(e))
            ) {
              if (!a)
                if (z) e.__proto__ = _e;
                else for (var r = 0, s = we.length; r < s; r++) B(e, (i = we[r]), _e[i]);
              n || this.observeArray(e);
            } else {
              var o = Object.keys(e);
              for (r = 0; r < o.length; r++) {
                var i;
                Me(e, (i = o[r]), ke, void 0, n, a);
              }
            }
          }
          return (
            (e.prototype.observeArray = function (e) {
              for (var t = 0, n = e.length; t < n; t++) Ce(e[t], !1, this.mock);
            }),
            e
          );
        })();
      function Ce(e, n, a) {
        return e && R(e, '__ob__') && e.__ob__ instanceof Ie
          ? e.__ob__
          : !Ee || (!a && ae()) || (!t(e) && !d(e)) || !Object.isExtensible(e) || e.__v_skip || Fe(e) || e instanceof de
          ? void 0
          : new Ie(e, n, a);
      }
      function Me(e, n, a, r, s, o) {
        var i = new he(),
          u = Object.getOwnPropertyDescriptor(e, n);
        if (!u || !1 !== u.configurable) {
          var l = u && u.get,
            d = u && u.set;
          (l && !d) || (a !== ke && 2 !== arguments.length) || (a = e[n]);
          var p = !s && Ce(a, !1, o);
          return (
            Object.defineProperty(e, n, {
              enumerable: !0,
              configurable: !0,
              get: function () {
                var n = l ? l.call(e) : a;
                return he.target && (i.depend(), p && (p.dep.depend(), t(n) && $e(n))), Fe(n) && !s ? n.value : n;
              },
              set: function (t) {
                var n,
                  r,
                  u = l ? l.call(e) : a;
                if ((n = u) === (r = t) ? 0 === n && 1 / n != 1 / r : n == n || r == r) {
                  if (d) d.call(e, t);
                  else {
                    if (l) return;
                    if (!s && Fe(u) && !Fe(t)) return void (u.value = t);
                    a = t;
                  }
                  (p = !s && Ce(t, !1, o)), i.notify();
                }
              },
            }),
            i
          );
        }
      }
      function Se(e, n, a) {
        if (!Ne(e)) {
          var r = e.__ob__;
          return t(e) && p(n)
            ? ((e.length = Math.max(e.length, n)), e.splice(n, 1, a), r && !r.shallow && r.mock && Ce(a, !1, !0), a)
            : n in e && !(n in Object.prototype)
            ? ((e[n] = a), a)
            : e._isVue || (r && r.vmCount)
            ? a
            : r
            ? (Me(r.value, n, a, void 0, r.shallow, r.mock), r.dep.notify(), a)
            : ((e[n] = a), a);
        }
      }
      function Oe(e, n) {
        if (t(e) && p(n)) e.splice(n, 1);
        else {
          var a = e.__ob__;
          e._isVue || (a && a.vmCount) || Ne(e) || (R(e, n) && (delete e[n], a && a.dep.notify()));
        }
      }
      function $e(e) {
        for (var n = void 0, a = 0, r = e.length; a < r; a++)
          (n = e[a]) && n.__ob__ && n.__ob__.dep.depend(), t(n) && $e(n);
      }
      function Le(e) {
        return (
          (function (e, t) {
            Ne(e) || Ce(e, t, ae());
          })(e, !0),
          B(e, '__v_isShallow', !0),
          e
        );
      }
      function Ne(e) {
        return !(!e || !e.__v_isReadonly);
      }
      function Fe(e) {
        return !(!e || !0 !== e.__v_isRef);
      }
      function je(e, t, n) {
        Object.defineProperty(e, n, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            var e = t[n];
            if (Fe(e)) return e.value;
            var a = e && e.__ob__;
            return a && a.dep.depend(), e;
          },
          set: function (e) {
            var a = t[n];
            Fe(a) && !Fe(e) ? (a.value = e) : (t[n] = e);
          },
        });
      }
      var Ge = T(function (e) {
        var t = '&' === e.charAt(0),
          n = '~' === (e = t ? e.slice(1) : e).charAt(0),
          a = '!' === (e = n ? e.slice(1) : e).charAt(0);
        return { name: (e = a ? e.slice(1) : e), once: n, capture: a, passive: t };
      });
      function De(e, n) {
        function a() {
          var e = a.fns;
          if (!t(e)) return Jt(e, null, arguments, n, 'v-on handler');
          for (var r = e.slice(), s = 0; s < r.length; s++) Jt(r[s], null, arguments, n, 'v-on handler');
        }
        return (a.fns = e), a;
      }
      function Ue(e, t, n, r, o, i) {
        var u, l, d, p;
        for (u in e)
          (l = e[u]),
            (d = t[u]),
            (p = Ge(u)),
            a(l) ||
              (a(d)
                ? (a(l.fns) && (l = e[u] = De(l, i)),
                  s(p.once) && (l = e[u] = o(p.name, l, p.capture)),
                  n(p.name, l, p.capture, p.passive, p.params))
                : l !== d && ((d.fns = l), (e[u] = d)));
        for (u in t) a(e[u]) && r((p = Ge(u)).name, t[u], p.capture);
      }
      function Pe(e, t, n) {
        var o;
        e instanceof de && (e = e.data.hook || (e.data.hook = {}));
        var i = e[t];
        function u() {
          n.apply(this, arguments), b(o.fns, u);
        }
        a(i) ? (o = De([u])) : r(i.fns) && s(i.merged) ? (o = i).fns.push(u) : (o = De([i, u])),
          (o.merged = !0),
          (e[t] = o);
      }
      function qe(e, t, n, a, s) {
        if (r(t)) {
          if (R(t, n)) return (e[n] = t[n]), s || delete t[n], !0;
          if (R(t, a)) return (e[n] = t[a]), s || delete t[a], !0;
        }
        return !1;
      }
      function Be(e) {
        return o(e) ? [ce(e)] : t(e) ? ze(e) : void 0;
      }
      function Ve(e) {
        return r(e) && r(e.text) && !1 === e.isComment;
      }
      function ze(e, n) {
        var i,
          u,
          l,
          d,
          p = [];
        for (i = 0; i < e.length; i++)
          a((u = e[i])) ||
            'boolean' == typeof u ||
            ((d = p[(l = p.length - 1)]),
            t(u)
              ? u.length > 0 &&
                (Ve((u = ze(u, ''.concat(n || '', '_').concat(i)))[0]) &&
                  Ve(d) &&
                  ((p[l] = ce(d.text + u[0].text)), u.shift()),
                p.push.apply(p, u))
              : o(u)
              ? Ve(d)
                ? (p[l] = ce(d.text + u))
                : '' !== u && p.push(ce(u))
              : Ve(u) && Ve(d)
              ? (p[l] = ce(d.text + u.text))
              : (s(e._isVList) && r(u.tag) && a(u.key) && r(n) && (u.key = '__vlist'.concat(n, '_').concat(i, '__')),
                p.push(u)));
        return p;
      }
      var He = 1,
        Ke = 2;
      function We(e, n, a, l, d, p) {
        return (
          (t(a) || o(a)) && ((d = l), (l = a), (a = void 0)),
          s(p) && (d = Ke),
          (function (e, n, a, s, o) {
            if (r(a) && r(a.__ob__)) return pe();
            if ((r(a) && r(a.is) && (n = a.is), !n)) return pe();
            var l, d;
            if (
              (t(s) && i(s[0]) && (((a = a || {}).scopedSlots = { default: s[0] }), (s.length = 0)),
              o === Ke
                ? (s = Be(s))
                : o === He &&
                  (s = (function (e) {
                    for (var n = 0; n < e.length; n++) if (t(e[n])) return Array.prototype.concat.apply([], e);
                    return e;
                  })(s)),
              'string' == typeof n)
            ) {
              var p = void 0;
              (d = (e.$vnode && e.$vnode.ns) || U.getTagNamespace(n)),
                (l = U.isReservedTag(n)
                  ? new de(U.parsePlatformTagName(n), a, s, void 0, void 0, e)
                  : (a && a.pre) || !r((p = qn(e.$options, 'components', n)))
                  ? new de(n, a, s, void 0, void 0, e)
                  : On(p, a, e, s, n));
            } else l = On(n, a, e, s);
            return t(l)
              ? l
              : r(l)
              ? (r(d) && Je(l, d),
                r(a) &&
                  (function (e) {
                    u(e.style) && pn(e.style), u(e.class) && pn(e.class);
                  })(a),
                l)
              : pe();
          })(e, n, a, l, d)
        );
      }
      function Je(e, t, n) {
        if (((e.ns = t), 'foreignObject' === e.tag && ((t = void 0), (n = !0)), r(e.children)))
          for (var o = 0, i = e.children.length; o < i; o++) {
            var u = e.children[o];
            r(u.tag) && (a(u.ns) || (s(n) && 'svg' !== u.tag)) && Je(u, t, n);
          }
      }
      function Ze(e, n) {
        var a,
          s,
          o,
          i,
          l = null;
        if (t(e) || 'string' == typeof e)
          for (l = new Array(e.length), a = 0, s = e.length; a < s; a++) l[a] = n(e[a], a);
        else if ('number' == typeof e) for (l = new Array(e), a = 0; a < e; a++) l[a] = n(a + 1, a);
        else if (u(e))
          if (ie && e[Symbol.iterator]) {
            l = [];
            for (var d = e[Symbol.iterator](), p = d.next(); !p.done; ) l.push(n(p.value, l.length)), (p = d.next());
          } else
            for (o = Object.keys(e), l = new Array(o.length), a = 0, s = o.length; a < s; a++)
              (i = o[a]), (l[a] = n(e[i], i, a));
        return r(l) || (l = []), (l._isVList = !0), l;
      }
      function Ye(e, t, n, a) {
        var r,
          s = this.$scopedSlots[e];
        s
          ? ((n = n || {}), a && (n = C(C({}, a), n)), (r = s(n) || (i(t) ? t() : t)))
          : (r = this.$slots[e] || (i(t) ? t() : t));
        var o = n && n.slot;
        return o ? this.$createElement('template', { slot: o }, r) : r;
      }
      function Xe(e) {
        return qn(this.$options, 'filters', e) || $;
      }
      function Qe(e, n) {
        return t(e) ? -1 === e.indexOf(n) : e !== n;
      }
      function et(e, t, n, a, r) {
        var s = U.keyCodes[t] || n;
        return r && a && !U.keyCodes[t] ? Qe(r, a) : s ? Qe(s, e) : a ? A(a) !== t : void 0 === e;
      }
      function tt(e, n, a, r, s) {
        if (a && u(a)) {
          t(a) && (a = M(a));
          var o = void 0,
            i = function (t) {
              if ('class' === t || 'style' === t || h(t)) o = e;
              else {
                var i = e.attrs && e.attrs.type;
                o = r || U.mustUseProp(n, i, t) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
              }
              var u = w(t),
                l = A(t);
              u in o ||
                l in o ||
                ((o[t] = a[t]),
                s &&
                  ((e.on || (e.on = {}))['update:'.concat(t)] = function (e) {
                    a[t] = e;
                  }));
            };
          for (var l in a) i(l);
        }
        return e;
      }
      function nt(e, t) {
        var n = this._staticTrees || (this._staticTrees = []),
          a = n[e];
        return (
          (a && !t) ||
            rt(
              (a = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, this._c, this)),
              '__static__'.concat(e),
              !1,
            ),
          a
        );
      }
      function at(e, t, n) {
        return rt(e, '__once__'.concat(t).concat(n ? '_'.concat(n) : ''), !0), e;
      }
      function rt(e, n, a) {
        if (t(e))
          for (var r = 0; r < e.length; r++)
            e[r] && 'string' != typeof e[r] && st(e[r], ''.concat(n, '_').concat(r), a);
        else st(e, n, a);
      }
      function st(e, t, n) {
        (e.isStatic = !0), (e.key = t), (e.isOnce = n);
      }
      function ot(e, t) {
        if (t && d(t)) {
          var n = (e.on = e.on ? C({}, e.on) : {});
          for (var a in t) {
            var r = n[a],
              s = t[a];
            n[a] = r ? [].concat(r, s) : s;
          }
        }
        return e;
      }
      function it(e, n, a, r) {
        n = n || { $stable: !a };
        for (var s = 0; s < e.length; s++) {
          var o = e[s];
          t(o) ? it(o, n, a) : o && (o.proxy && (o.fn.proxy = !0), (n[o.key] = o.fn));
        }
        return r && (n.$key = r), n;
      }
      function ut(e, t) {
        for (var n = 0; n < t.length; n += 2) {
          var a = t[n];
          'string' == typeof a && a && (e[t[n]] = t[n + 1]);
        }
        return e;
      }
      function lt(e, t) {
        return 'string' == typeof e ? t + e : e;
      }
      function dt(e) {
        (e._o = at),
          (e._n = m),
          (e._s = y),
          (e._l = Ze),
          (e._t = Ye),
          (e._q = L),
          (e._i = N),
          (e._m = nt),
          (e._f = Xe),
          (e._k = et),
          (e._b = tt),
          (e._v = ce),
          (e._e = pe),
          (e._u = it),
          (e._g = ot),
          (e._d = ut),
          (e._p = lt);
      }
      function pt(e, t) {
        if (!e || !e.length) return {};
        for (var n = {}, a = 0, r = e.length; a < r; a++) {
          var s = e[a],
            o = s.data;
          if (
            (o && o.attrs && o.attrs.slot && delete o.attrs.slot,
            (s.context !== t && s.fnContext !== t) || !o || null == o.slot)
          )
            (n.default || (n.default = [])).push(s);
          else {
            var i = o.slot,
              u = n[i] || (n[i] = []);
            'template' === s.tag ? u.push.apply(u, s.children || []) : u.push(s);
          }
        }
        for (var l in n) n[l].every(ct) && delete n[l];
        return n;
      }
      function ct(e) {
        return (e.isComment && !e.asyncFactory) || ' ' === e.text;
      }
      function yt(e) {
        return e.isComment && e.asyncFactory;
      }
      function mt(t, n, a, r) {
        var s,
          o = Object.keys(a).length > 0,
          i = n ? !!n.$stable : !o,
          u = n && n.$key;
        if (n) {
          if (n._normalized) return n._normalized;
          if (i && r && r !== e && u === r.$key && !o && !r.$hasNormal) return r;
          for (var l in ((s = {}), n)) n[l] && '$' !== l[0] && (s[l] = ft(t, a, l, n[l]));
        } else s = {};
        for (var d in a) d in s || (s[d] = vt(a, d));
        return (
          n && Object.isExtensible(n) && (n._normalized = s),
          B(s, '$stable', i),
          B(s, '$key', u),
          B(s, '$hasNormal', o),
          s
        );
      }
      function ft(e, n, a, r) {
        var s = function () {
          var n = ue;
          le(e);
          var a = arguments.length ? r.apply(null, arguments) : r({}),
            s = (a = a && 'object' == typeof a && !t(a) ? [a] : Be(a)) && a[0];
          return le(n), a && (!s || (1 === a.length && s.isComment && !yt(s))) ? void 0 : a;
        };
        return r.proxy && Object.defineProperty(n, a, { get: s, enumerable: !0, configurable: !0 }), s;
      }
      function vt(e, t) {
        return function () {
          return e[t];
        };
      }
      function ht(e, t, n, a, r) {
        var s = !1;
        for (var o in t) o in e ? t[o] !== n[o] && (s = !0) : ((s = !0), bt(e, o, a, r));
        for (var o in e) o in t || ((s = !0), delete e[o]);
        return s;
      }
      function bt(e, t, n, a) {
        Object.defineProperty(e, t, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return n[a][t];
          },
        });
      }
      function gt(e, t) {
        for (var n in t) e[n] = t[n];
        for (var n in e) n in t || delete e[n];
      }
      var Rt,
        Tt = null;
      function _t(e, t) {
        return (e.__esModule || (ie && 'Module' === e[Symbol.toStringTag])) && (e = e.default), u(e) ? t.extend(e) : e;
      }
      function wt(e) {
        if (t(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            if (r(a) && (r(a.componentOptions) || yt(a))) return a;
          }
      }
      function kt(e, t) {
        Rt.$on(e, t);
      }
      function Et(e, t) {
        Rt.$off(e, t);
      }
      function At(e, t) {
        var n = Rt;
        return function a() {
          null !== t.apply(null, arguments) && n.$off(e, a);
        };
      }
      function xt(e, t, n) {
        (Rt = e), Ue(t, n || {}, kt, Et, At, e), (Rt = void 0);
      }
      var It = null;
      function Ct(e) {
        var t = It;
        return (
          (It = e),
          function () {
            It = t;
          }
        );
      }
      function Mt(e) {
        for (; e && (e = e.$parent); ) if (e._inactive) return !0;
        return !1;
      }
      function St(e, t) {
        if (t) {
          if (((e._directInactive = !1), Mt(e))) return;
        } else if (e._directInactive) return;
        if (e._inactive || null === e._inactive) {
          e._inactive = !1;
          for (var n = 0; n < e.$children.length; n++) St(e.$children[n]);
          $t(e, 'activated');
        }
      }
      function Ot(e, t) {
        if (!((t && ((e._directInactive = !0), Mt(e))) || e._inactive)) {
          e._inactive = !0;
          for (var n = 0; n < e.$children.length; n++) Ot(e.$children[n]);
          $t(e, 'deactivated');
        }
      }
      function $t(e, t, n, a) {
        void 0 === a && (a = !0), ge();
        var r = ue;
        a && le(e);
        var s = e.$options[t],
          o = ''.concat(t, ' hook');
        if (s) for (var i = 0, u = s.length; i < u; i++) Jt(s[i], e, n || null, e, o);
        e._hasHookEvent && e.$emit('hook:' + t), a && le(r), Re();
      }
      var Lt = [],
        Nt = [],
        Ft = {},
        jt = !1,
        Gt = !1,
        Dt = 0,
        Ut = 0,
        Pt = Date.now;
      if (H && !W) {
        var qt = window.performance;
        qt &&
          'function' == typeof qt.now &&
          Pt() > document.createEvent('Event').timeStamp &&
          (Pt = function () {
            return qt.now();
          });
      }
      var Bt = function (e, t) {
        if (e.post) {
          if (!t.post) return 1;
        } else if (t.post) return -1;
        return e.id - t.id;
      };
      function Vt() {
        var e, t;
        for (Ut = Pt(), Gt = !0, Lt.sort(Bt), Dt = 0; Dt < Lt.length; Dt++)
          (e = Lt[Dt]).before && e.before(), (t = e.id), (Ft[t] = null), e.run();
        var n = Nt.slice(),
          a = Lt.slice();
        (Dt = Lt.length = Nt.length = 0),
          (Ft = {}),
          (jt = Gt = !1),
          (function (e) {
            for (var t = 0; t < e.length; t++) (e[t]._inactive = !0), St(e[t], !0);
          })(n),
          (function (e) {
            for (var t = e.length; t--; ) {
              var n = e[t],
                a = n.vm;
              a && a._watcher === n && a._isMounted && !a._isDestroyed && $t(a, 'updated');
            }
          })(a),
          ve(),
          re && U.devtools && re.emit('flush');
      }
      var zt,
        Ht = 'watcher';
      ''.concat(Ht, ' callback'), ''.concat(Ht, ' getter'), ''.concat(Ht, ' cleanup');
      var Kt = (function () {
        function e(e) {
          void 0 === e && (e = !1),
            (this.detached = e),
            (this.active = !0),
            (this.effects = []),
            (this.cleanups = []),
            (this.parent = zt),
            !e && zt && (this.index = (zt.scopes || (zt.scopes = [])).push(this) - 1);
        }
        return (
          (e.prototype.run = function (e) {
            if (this.active) {
              var t = zt;
              try {
                return (zt = this), e();
              } finally {
                zt = t;
              }
            }
          }),
          (e.prototype.on = function () {
            zt = this;
          }),
          (e.prototype.off = function () {
            zt = this.parent;
          }),
          (e.prototype.stop = function (e) {
            if (this.active) {
              var t = void 0,
                n = void 0;
              for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].teardown();
              for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
              if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
              if (!this.detached && this.parent && !e) {
                var a = this.parent.scopes.pop();
                a && a !== this && ((this.parent.scopes[this.index] = a), (a.index = this.index));
              }
              (this.parent = void 0), (this.active = !1);
            }
          }),
          e
        );
      })();
      function Wt(e, t, n) {
        ge();
        try {
          if (t)
            for (var a = t; (a = a.$parent); ) {
              var r = a.$options.errorCaptured;
              if (r)
                for (var s = 0; s < r.length; s++)
                  try {
                    if (!1 === r[s].call(a, e, t, n)) return;
                  } catch (e) {
                    Zt(e, a, 'errorCaptured hook');
                  }
            }
          Zt(e, t, n);
        } finally {
          Re();
        }
      }
      function Jt(e, t, n, a, r) {
        var s;
        try {
          (s = n ? e.apply(t, n) : e.call(t)) &&
            !s._isVue &&
            c(s) &&
            !s._handled &&
            (s.catch(function (e) {
              return Wt(e, a, r + ' (Promise/async)');
            }),
            (s._handled = !0));
        } catch (e) {
          Wt(e, a, r);
        }
        return s;
      }
      function Zt(e, t, n) {
        if (U.errorHandler)
          try {
            return U.errorHandler.call(null, e, t, n);
          } catch (t) {
            t !== e && Yt(t);
          }
        Yt(e);
      }
      function Yt(e, t, n) {
        if (!H || 'undefined' == typeof console) throw e;
        console.error(e);
      }
      var Xt,
        Qt = !1,
        en = [],
        tn = !1;
      function nn() {
        tn = !1;
        var e = en.slice(0);
        en.length = 0;
        for (var t = 0; t < e.length; t++) e[t]();
      }
      if ('undefined' != typeof Promise && se(Promise)) {
        var an = Promise.resolve();
        (Xt = function () {
          an.then(nn), Y && setTimeout(S);
        }),
          (Qt = !0);
      } else if (
        W ||
        'undefined' == typeof MutationObserver ||
        (!se(MutationObserver) && '[object MutationObserverConstructor]' !== MutationObserver.toString())
      )
        Xt =
          'undefined' != typeof setImmediate && se(setImmediate)
            ? function () {
                setImmediate(nn);
              }
            : function () {
                setTimeout(nn, 0);
              };
      else {
        var rn = 1,
          sn = new MutationObserver(nn),
          on = document.createTextNode(String(rn));
        sn.observe(on, { characterData: !0 }),
          (Xt = function () {
            (rn = (rn + 1) % 2), (on.data = String(rn));
          }),
          (Qt = !0);
      }
      function un(e, t) {
        var n;
        if (
          (en.push(function () {
            if (e)
              try {
                e.call(t);
              } catch (e) {
                Wt(e, t, 'nextTick');
              }
            else n && n(t);
          }),
          tn || ((tn = !0), Xt()),
          !e && 'undefined' != typeof Promise)
        )
          return new Promise(function (e) {
            n = e;
          });
      }
      function ln(e) {
        return function (t, n) {
          if ((void 0 === n && (n = ue), n))
            return (function (e, t, n) {
              var a = e.$options;
              a[t] = Gn(a[t], n);
            })(n, e, t);
        };
      }
      ln('beforeMount'),
        ln('mounted'),
        ln('beforeUpdate'),
        ln('updated'),
        ln('beforeDestroy'),
        ln('destroyed'),
        ln('activated'),
        ln('deactivated'),
        ln('serverPrefetch'),
        ln('renderTracked'),
        ln('renderTriggered'),
        ln('errorCaptured');
      var dn = new oe();
      function pn(e) {
        return cn(e, dn), dn.clear(), e;
      }
      function cn(e, n) {
        var a,
          r,
          s = t(e);
        if (!((!s && !u(e)) || e.__v_skip || Object.isFrozen(e) || e instanceof de)) {
          if (e.__ob__) {
            var o = e.__ob__.dep.id;
            if (n.has(o)) return;
            n.add(o);
          }
          if (s) for (a = e.length; a--; ) cn(e[a], n);
          else if (Fe(e)) cn(e.value, n);
          else for (a = (r = Object.keys(e)).length; a--; ) cn(e[r[a]], n);
        }
      }
      var yn = 0,
        mn = (function () {
          function e(e, t, n, a, r) {
            var s;
            void 0 === (s = zt && !zt._vm ? zt : e ? e._scope : void 0) && (s = zt),
              s && s.active && s.effects.push(this),
              (this.vm = e) && r && (e._watcher = this),
              a
                ? ((this.deep = !!a.deep),
                  (this.user = !!a.user),
                  (this.lazy = !!a.lazy),
                  (this.sync = !!a.sync),
                  (this.before = a.before))
                : (this.deep = this.user = this.lazy = this.sync = !1),
              (this.cb = n),
              (this.id = ++yn),
              (this.active = !0),
              (this.post = !1),
              (this.dirty = this.lazy),
              (this.deps = []),
              (this.newDeps = []),
              (this.depIds = new oe()),
              (this.newDepIds = new oe()),
              (this.expression = ''),
              i(t)
                ? (this.getter = t)
                : ((this.getter = (function (e) {
                    if (!V.test(e)) {
                      var t = e.split('.');
                      return function (e) {
                        for (var n = 0; n < t.length; n++) {
                          if (!e) return;
                          e = e[t[n]];
                        }
                        return e;
                      };
                    }
                  })(t)),
                  this.getter || (this.getter = S)),
              (this.value = this.lazy ? void 0 : this.get());
          }
          return (
            (e.prototype.get = function () {
              var e;
              ge(this);
              var t = this.vm;
              try {
                e = this.getter.call(t, t);
              } catch (e) {
                if (!this.user) throw e;
                Wt(e, t, 'getter for watcher "'.concat(this.expression, '"'));
              } finally {
                this.deep && pn(e), Re(), this.cleanupDeps();
              }
              return e;
            }),
            (e.prototype.addDep = function (e) {
              var t = e.id;
              this.newDepIds.has(t) ||
                (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
            }),
            (e.prototype.cleanupDeps = function () {
              for (var e = this.deps.length; e--; ) {
                var t = this.deps[e];
                this.newDepIds.has(t.id) || t.removeSub(this);
              }
              var n = this.depIds;
              (this.depIds = this.newDepIds),
                (this.newDepIds = n),
                this.newDepIds.clear(),
                (n = this.deps),
                (this.deps = this.newDeps),
                (this.newDeps = n),
                (this.newDeps.length = 0);
            }),
            (e.prototype.update = function () {
              this.lazy
                ? (this.dirty = !0)
                : this.sync
                ? this.run()
                : (function (e) {
                    var t = e.id;
                    if (null == Ft[t] && (e !== he.target || !e.noRecurse)) {
                      if (((Ft[t] = !0), Gt)) {
                        for (var n = Lt.length - 1; n > Dt && Lt[n].id > e.id; ) n--;
                        Lt.splice(n + 1, 0, e);
                      } else Lt.push(e);
                      jt || ((jt = !0), un(Vt));
                    }
                  })(this);
            }),
            (e.prototype.run = function () {
              if (this.active) {
                var e = this.get();
                if (e !== this.value || u(e) || this.deep) {
                  var t = this.value;
                  if (((this.value = e), this.user)) {
                    var n = 'callback for watcher "'.concat(this.expression, '"');
                    Jt(this.cb, this.vm, [e, t], this.vm, n);
                  } else this.cb.call(this.vm, e, t);
                }
              }
            }),
            (e.prototype.evaluate = function () {
              (this.value = this.get()), (this.dirty = !1);
            }),
            (e.prototype.depend = function () {
              for (var e = this.deps.length; e--; ) this.deps[e].depend();
            }),
            (e.prototype.teardown = function () {
              if ((this.vm && !this.vm._isBeingDestroyed && b(this.vm._scope.effects, this), this.active)) {
                for (var e = this.deps.length; e--; ) this.deps[e].removeSub(this);
                (this.active = !1), this.onStop && this.onStop();
              }
            }),
            e
          );
        })(),
        fn = { enumerable: !0, configurable: !0, get: S, set: S };
      function vn(e, t, n) {
        (fn.get = function () {
          return this[t][n];
        }),
          (fn.set = function (e) {
            this[t][n] = e;
          }),
          Object.defineProperty(e, n, fn);
      }
      function hn(n) {
        var a = n.$options;
        if (
          (a.props &&
            (function (e, t) {
              var n = e.$options.propsData || {},
                a = (e._props = Le({})),
                r = (e.$options._propKeys = []);
              !e.$parent || Ae(!1);
              var s = function (s) {
                r.push(s);
                var o = Bn(s, t, n, e);
                Me(a, s, o), s in e || vn(e, '_props', s);
              };
              for (var o in t) s(o);
              Ae(!0);
            })(n, a.props),
          (function (t) {
            var n = t.$options,
              a = n.setup;
            if (a) {
              var r = (t._setupContext = (function (t) {
                return {
                  get attrs() {
                    if (!t._attrsProxy) {
                      var n = (t._attrsProxy = {});
                      B(n, '_v_attr_proxy', !0), ht(n, t.$attrs, e, t, '$attrs');
                    }
                    return t._attrsProxy;
                  },
                  get listeners() {
                    return (
                      t._listenersProxy || ht((t._listenersProxy = {}), t.$listeners, e, t, '$listeners'),
                      t._listenersProxy
                    );
                  },
                  get slots() {
                    return (function (e) {
                      return e._slotsProxy || gt((e._slotsProxy = {}), e.$scopedSlots), e._slotsProxy;
                    })(t);
                  },
                  emit: x(t.$emit, t),
                  expose: function (e) {
                    e &&
                      Object.keys(e).forEach(function (n) {
                        return je(t, e, n);
                      });
                  },
                };
              })(t));
              le(t), ge();
              var s = Jt(a, null, [t._props || Le({}), r], t, 'setup');
              if ((Re(), le(), i(s))) n.render = s;
              else if (u(s))
                if (((t._setupState = s), s.__sfc)) {
                  var o = (t._setupProxy = {});
                  for (var l in s) '__sfc' !== l && je(o, s, l);
                } else for (var l in s) q(l) || je(t, s, l);
            }
          })(n),
          a.methods &&
            (function (e, t) {
              for (var n in (e.$options.props, t)) e[n] = 'function' != typeof t[n] ? S : x(t[n], e);
            })(n, a.methods),
          a.data)
        )
          !(function (e) {
            var t = e.$options.data;
            d(
              (t = e._data =
                i(t)
                  ? (function (e, t) {
                      ge();
                      try {
                        return e.call(t, t);
                      } catch (e) {
                        return Wt(e, t, 'data()'), {};
                      } finally {
                        Re();
                      }
                    })(t, e)
                  : t || {}),
            ) || (t = {});
            for (var n = Object.keys(t), a = e.$options.props, r = (e.$options.methods, n.length); r--; ) {
              var s = n[r];
              (a && R(a, s)) || q(s) || vn(e, '_data', s);
            }
            var o = Ce(t);
            o && o.vmCount++;
          })(n);
        else {
          var r = Ce((n._data = {}));
          r && r.vmCount++;
        }
        a.computed &&
          (function (e, t) {
            var n = (e._computedWatchers = Object.create(null)),
              a = ae();
            for (var r in t) {
              var s = t[r],
                o = i(s) ? s : s.get;
              a || (n[r] = new mn(e, o || S, S, bn)), r in e || gn(e, r, s);
            }
          })(n, a.computed),
          a.watch &&
            a.watch !== ee &&
            (function (e, n) {
              for (var a in n) {
                var r = n[a];
                if (t(r)) for (var s = 0; s < r.length; s++) _n(e, a, r[s]);
                else _n(e, a, r);
              }
            })(n, a.watch);
      }
      var bn = { lazy: !0 };
      function gn(e, t, n) {
        var a = !ae();
        i(n)
          ? ((fn.get = a ? Rn(t) : Tn(n)), (fn.set = S))
          : ((fn.get = n.get ? (a && !1 !== n.cache ? Rn(t) : Tn(n.get)) : S), (fn.set = n.set || S)),
          Object.defineProperty(e, t, fn);
      }
      function Rn(e) {
        return function () {
          var t = this._computedWatchers && this._computedWatchers[e];
          if (t) return t.dirty && t.evaluate(), he.target && t.depend(), t.value;
        };
      }
      function Tn(e) {
        return function () {
          return e.call(this, this);
        };
      }
      function _n(e, t, n, a) {
        return d(n) && ((a = n), (n = n.handler)), 'string' == typeof n && (n = e[n]), e.$watch(t, n, a);
      }
      function wn(e, t) {
        if (e) {
          for (var n = Object.create(null), a = ie ? Reflect.ownKeys(e) : Object.keys(e), r = 0; r < a.length; r++) {
            var s = a[r];
            if ('__ob__' !== s) {
              var o = e[s].from;
              if (o in t._provided) n[s] = t._provided[o];
              else if ('default' in e[s]) {
                var u = e[s].default;
                n[s] = i(u) ? u.call(t) : u;
              }
            }
          }
          return n;
        }
      }
      var kn = 0;
      function En(e) {
        var t = e.options;
        if (e.super) {
          var n = En(e.super);
          if (n !== e.superOptions) {
            e.superOptions = n;
            var a = (function (e) {
              var t,
                n = e.options,
                a = e.sealedOptions;
              for (var r in n) n[r] !== a[r] && (t || (t = {}), (t[r] = n[r]));
              return t;
            })(e);
            a && C(e.extendOptions, a), (t = e.options = Pn(n, e.extendOptions)).name && (t.components[t.name] = e);
          }
        }
        return t;
      }
      function An(n, a, r, o, i) {
        var u,
          l = this,
          d = i.options;
        R(o, '_uid') ? ((u = Object.create(o))._original = o) : ((u = o), (o = o._original));
        var p = s(d._compiled),
          c = !p;
        (this.data = n),
          (this.props = a),
          (this.children = r),
          (this.parent = o),
          (this.listeners = n.on || e),
          (this.injections = wn(d.inject, o)),
          (this.slots = function () {
            return l.$slots || mt(o, n.scopedSlots, (l.$slots = pt(r, o))), l.$slots;
          }),
          Object.defineProperty(this, 'scopedSlots', {
            enumerable: !0,
            get: function () {
              return mt(o, n.scopedSlots, this.slots());
            },
          }),
          p &&
            ((this.$options = d),
            (this.$slots = this.slots()),
            (this.$scopedSlots = mt(o, n.scopedSlots, this.$slots))),
          d._scopeId
            ? (this._c = function (e, n, a, r) {
                var s = We(u, e, n, a, r, c);
                return s && !t(s) && ((s.fnScopeId = d._scopeId), (s.fnContext = o)), s;
              })
            : (this._c = function (e, t, n, a) {
                return We(u, e, t, n, a, c);
              });
      }
      function xn(e, t, n, a, r) {
        var s = ye(e);
        return (s.fnContext = n), (s.fnOptions = a), t.slot && ((s.data || (s.data = {})).slot = t.slot), s;
      }
      function In(e, t) {
        for (var n in t) e[w(n)] = t[n];
      }
      function Cn(e) {
        return e.name || e.__name || e._componentTag;
      }
      dt(An.prototype);
      var Mn = {
          init: function (e, t) {
            if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
              var n = e;
              Mn.prepatch(n, n);
            } else
              (e.componentInstance = (function (e, t) {
                var n = { _isComponent: !0, _parentVnode: e, parent: t },
                  a = e.data.inlineTemplate;
                return (
                  r(a) && ((n.render = a.render), (n.staticRenderFns = a.staticRenderFns)),
                  new e.componentOptions.Ctor(n)
                );
              })(e, It)).$mount(t ? e.elm : void 0, t);
          },
          prepatch: function (t, n) {
            var a = n.componentOptions;
            !(function (t, n, a, r, s) {
              var o = r.data.scopedSlots,
                i = t.$scopedSlots,
                u = !!(
                  (o && !o.$stable) ||
                  (i !== e && !i.$stable) ||
                  (o && t.$scopedSlots.$key !== o.$key) ||
                  (!o && t.$scopedSlots.$key)
                ),
                l = !!(s || t.$options._renderChildren || u),
                d = t.$vnode;
              (t.$options._parentVnode = r),
                (t.$vnode = r),
                t._vnode && (t._vnode.parent = r),
                (t.$options._renderChildren = s);
              var p = r.data.attrs || e;
              t._attrsProxy && ht(t._attrsProxy, p, (d.data && d.data.attrs) || e, t, '$attrs') && (l = !0),
                (t.$attrs = p),
                (a = a || e);
              var c = t.$options._parentListeners;
              if (
                (t._listenersProxy && ht(t._listenersProxy, a, c || e, t, '$listeners'),
                (t.$listeners = t.$options._parentListeners = a),
                xt(t, a, c),
                n && t.$options.props)
              ) {
                Ae(!1);
                for (var y = t._props, m = t.$options._propKeys || [], f = 0; f < m.length; f++) {
                  var v = m[f],
                    h = t.$options.props;
                  y[v] = Bn(v, h, n, t);
                }
                Ae(!0), (t.$options.propsData = n);
              }
              l && ((t.$slots = pt(s, r.context)), t.$forceUpdate());
            })((n.componentInstance = t.componentInstance), a.propsData, a.listeners, n, a.children);
          },
          insert: function (e) {
            var t,
              n = e.context,
              a = e.componentInstance;
            a._isMounted || ((a._isMounted = !0), $t(a, 'mounted')),
              e.data.keepAlive && (n._isMounted ? (((t = a)._inactive = !1), Nt.push(t)) : St(a, !0));
          },
          destroy: function (e) {
            var t = e.componentInstance;
            t._isDestroyed || (e.data.keepAlive ? Ot(t, !0) : t.$destroy());
          },
        },
        Sn = Object.keys(Mn);
      function On(n, o, i, l, d) {
        if (!a(n)) {
          var p = i.$options._base;
          if ((u(n) && (n = p.extend(n)), 'function' == typeof n)) {
            var y;
            if (
              a(n.cid) &&
              ((n = (function (e, t) {
                if (s(e.error) && r(e.errorComp)) return e.errorComp;
                if (r(e.resolved)) return e.resolved;
                var n = Tt;
                if (
                  (n && r(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), s(e.loading) && r(e.loadingComp))
                )
                  return e.loadingComp;
                if (n && !r(e.owners)) {
                  var o = (e.owners = [n]),
                    i = !0,
                    l = null,
                    d = null;
                  n.$on('hook:destroyed', function () {
                    return b(o, n);
                  });
                  var p = function (e) {
                      for (var t = 0, n = o.length; t < n; t++) o[t].$forceUpdate();
                      e &&
                        ((o.length = 0),
                        null !== l && (clearTimeout(l), (l = null)),
                        null !== d && (clearTimeout(d), (d = null)));
                    },
                    y = F(function (n) {
                      (e.resolved = _t(n, t)), i ? (o.length = 0) : p(!0);
                    }),
                    m = F(function (t) {
                      r(e.errorComp) && ((e.error = !0), p(!0));
                    }),
                    f = e(y, m);
                  return (
                    u(f) &&
                      (c(f)
                        ? a(e.resolved) && f.then(y, m)
                        : c(f.component) &&
                          (f.component.then(y, m),
                          r(f.error) && (e.errorComp = _t(f.error, t)),
                          r(f.loading) &&
                            ((e.loadingComp = _t(f.loading, t)),
                            0 === f.delay
                              ? (e.loading = !0)
                              : (l = setTimeout(function () {
                                  (l = null), a(e.resolved) && a(e.error) && ((e.loading = !0), p(!1));
                                }, f.delay || 200))),
                          r(f.timeout) &&
                            (d = setTimeout(function () {
                              (d = null), a(e.resolved) && m(null);
                            }, f.timeout)))),
                    (i = !1),
                    e.loading ? e.loadingComp : e.resolved
                  );
                }
              })((y = n), p)),
              void 0 === n)
            )
              return (function (e, t, n, a, r) {
                var s = pe();
                return (s.asyncFactory = e), (s.asyncMeta = { data: t, context: n, children: a, tag: r }), s;
              })(y, o, i, l, d);
            (o = o || {}),
              En(n),
              r(o.model) &&
                (function (e, n) {
                  var a = (e.model && e.model.prop) || 'value',
                    s = (e.model && e.model.event) || 'input';
                  (n.attrs || (n.attrs = {}))[a] = n.model.value;
                  var o = n.on || (n.on = {}),
                    i = o[s],
                    u = n.model.callback;
                  r(i) ? (t(i) ? -1 === i.indexOf(u) : i !== u) && (o[s] = [u].concat(i)) : (o[s] = u);
                })(n.options, o);
            var m = (function (e, t, n) {
              var s = t.options.props;
              if (!a(s)) {
                var o = {},
                  i = e.attrs,
                  u = e.props;
                if (r(i) || r(u))
                  for (var l in s) {
                    var d = A(l);
                    qe(o, u, l, d, !0) || qe(o, i, l, d, !1);
                  }
                return o;
              }
            })(o, n);
            if (s(n.options.functional))
              return (function (n, a, s, o, i) {
                var u = n.options,
                  l = {},
                  d = u.props;
                if (r(d)) for (var p in d) l[p] = Bn(p, d, a || e);
                else r(s.attrs) && In(l, s.attrs), r(s.props) && In(l, s.props);
                var c = new An(s, l, i, o, n),
                  y = u.render.call(null, c._c, c);
                if (y instanceof de) return xn(y, s, c.parent, u);
                if (t(y)) {
                  for (var m = Be(y) || [], f = new Array(m.length), v = 0; v < m.length; v++)
                    f[v] = xn(m[v], s, c.parent, u);
                  return f;
                }
              })(n, m, o, i, l);
            var f = o.on;
            if (((o.on = o.nativeOn), s(n.options.abstract))) {
              var v = o.slot;
              (o = {}), v && (o.slot = v);
            }
            !(function (e) {
              for (var t = e.hook || (e.hook = {}), n = 0; n < Sn.length; n++) {
                var a = Sn[n],
                  r = t[a],
                  s = Mn[a];
                r === s || (r && r._merged) || (t[a] = r ? $n(s, r) : s);
              }
            })(o);
            var h = Cn(n.options) || d;
            return new de(
              'vue-component-'.concat(n.cid).concat(h ? '-'.concat(h) : ''),
              o,
              void 0,
              void 0,
              void 0,
              i,
              { Ctor: n, propsData: m, listeners: f, tag: d, children: l },
              y,
            );
          }
        }
      }
      function $n(e, t) {
        var n = function (n, a) {
          e(n, a), t(n, a);
        };
        return (n._merged = !0), n;
      }
      var Ln = S,
        Nn = U.optionMergeStrategies;
      function Fn(e, t, n) {
        if ((void 0 === n && (n = !0), !t)) return e;
        for (var a, r, s, o = ie ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < o.length; i++)
          '__ob__' !== (a = o[i]) &&
            ((r = e[a]), (s = t[a]), n && R(e, a) ? r !== s && d(r) && d(s) && Fn(r, s) : Se(e, a, s));
        return e;
      }
      function jn(e, t, n) {
        return n
          ? function () {
              var a = i(t) ? t.call(n, n) : t,
                r = i(e) ? e.call(n, n) : e;
              return a ? Fn(a, r) : r;
            }
          : t
          ? e
            ? function () {
                return Fn(i(t) ? t.call(this, this) : t, i(e) ? e.call(this, this) : e);
              }
            : t
          : e;
      }
      function Gn(e, n) {
        var a = n ? (e ? e.concat(n) : t(n) ? n : [n]) : e;
        return a
          ? (function (e) {
              for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
              return t;
            })(a)
          : a;
      }
      function Dn(e, t, n, a) {
        var r = Object.create(e || null);
        return t ? C(r, t) : r;
      }
      (Nn.data = function (e, t, n) {
        return n ? jn(e, t, n) : t && 'function' != typeof t ? e : jn(e, t);
      }),
        D.forEach(function (e) {
          Nn[e] = Gn;
        }),
        G.forEach(function (e) {
          Nn[e + 's'] = Dn;
        }),
        (Nn.watch = function (e, n, a, r) {
          if ((e === ee && (e = void 0), n === ee && (n = void 0), !n)) return Object.create(e || null);
          if (!e) return n;
          var s = {};
          for (var o in (C(s, e), n)) {
            var i = s[o],
              u = n[o];
            i && !t(i) && (i = [i]), (s[o] = i ? i.concat(u) : t(u) ? u : [u]);
          }
          return s;
        }),
        (Nn.props =
          Nn.methods =
          Nn.inject =
          Nn.computed =
            function (e, t, n, a) {
              if (!e) return t;
              var r = Object.create(null);
              return C(r, e), t && C(r, t), r;
            }),
        (Nn.provide = function (e, t) {
          return e
            ? function () {
                var n = Object.create(null);
                return Fn(n, i(e) ? e.call(this) : e), t && Fn(n, i(t) ? t.call(this) : t, !1), n;
              }
            : t;
        });
      var Un = function (e, t) {
        return void 0 === t ? e : t;
      };
      function Pn(e, n, a) {
        if (
          (i(n) && (n = n.options),
          (function (e, n) {
            var a = e.props;
            if (a) {
              var r,
                s,
                o = {};
              if (t(a)) for (r = a.length; r--; ) 'string' == typeof (s = a[r]) && (o[w(s)] = { type: null });
              else if (d(a)) for (var i in a) (s = a[i]), (o[w(i)] = d(s) ? s : { type: s });
              e.props = o;
            }
          })(n),
          (function (e, n) {
            var a = e.inject;
            if (a) {
              var r = (e.inject = {});
              if (t(a)) for (var s = 0; s < a.length; s++) r[a[s]] = { from: a[s] };
              else if (d(a))
                for (var o in a) {
                  var i = a[o];
                  r[o] = d(i) ? C({ from: o }, i) : { from: i };
                }
            }
          })(n),
          (function (e) {
            var t = e.directives;
            if (t)
              for (var n in t) {
                var a = t[n];
                i(a) && (t[n] = { bind: a, update: a });
              }
          })(n),
          !n._base && (n.extends && (e = Pn(e, n.extends, a)), n.mixins))
        )
          for (var r = 0, s = n.mixins.length; r < s; r++) e = Pn(e, n.mixins[r], a);
        var o,
          u = {};
        for (o in e) l(o);
        for (o in n) R(e, o) || l(o);
        function l(t) {
          var r = Nn[t] || Un;
          u[t] = r(e[t], n[t], a, t);
        }
        return u;
      }
      function qn(e, t, n, a) {
        if ('string' == typeof n) {
          var r = e[t];
          if (R(r, n)) return r[n];
          var s = w(n);
          if (R(r, s)) return r[s];
          var o = k(s);
          return R(r, o) ? r[o] : r[n] || r[s] || r[o];
        }
      }
      function Bn(e, t, n, a) {
        var r = t[e],
          s = !R(n, e),
          o = n[e],
          u = Kn(Boolean, r.type);
        if (u > -1)
          if (s && !R(r, 'default')) o = !1;
          else if ('' === o || o === A(e)) {
            var l = Kn(String, r.type);
            (l < 0 || u < l) && (o = !0);
          }
        if (void 0 === o) {
          o = (function (e, t, n) {
            if (R(t, 'default')) {
              var a = t.default;
              return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]
                ? e._props[n]
                : i(a) && 'Function' !== zn(t.type)
                ? a.call(e)
                : a;
            }
          })(a, r, e);
          var d = Ee;
          Ae(!0), Ce(o), Ae(d);
        }
        return o;
      }
      var Vn = /^\s*function (\w+)/;
      function zn(e) {
        var t = e && e.toString().match(Vn);
        return t ? t[1] : '';
      }
      function Hn(e, t) {
        return zn(e) === zn(t);
      }
      function Kn(e, n) {
        if (!t(n)) return Hn(n, e) ? 0 : -1;
        for (var a = 0, r = n.length; a < r; a++) if (Hn(n[a], e)) return a;
        return -1;
      }
      function Wn(e) {
        this._init(e);
      }
      function Jn(e) {
        return e && (Cn(e.Ctor.options) || e.tag);
      }
      function Zn(e, n) {
        return t(e)
          ? e.indexOf(n) > -1
          : 'string' == typeof e
          ? e.split(',').indexOf(n) > -1
          : ((a = e), !('[object RegExp]' !== l.call(a)) && e.test(n));
        var a;
      }
      function Yn(e, t) {
        var n = e.cache,
          a = e.keys,
          r = e._vnode;
        for (var s in n) {
          var o = n[s];
          if (o) {
            var i = o.name;
            i && !t(i) && Xn(n, s, a, r);
          }
        }
      }
      function Xn(e, t, n, a) {
        var r = e[t];
        !r || (a && r.tag === a.tag) || r.componentInstance.$destroy(), (e[t] = null), b(n, t);
      }
      !(function (t) {
        t.prototype._init = function (t) {
          var n = this;
          (n._uid = kn++),
            (n._isVue = !0),
            (n.__v_skip = !0),
            (n._scope = new Kt(!0)),
            (n._scope._vm = !0),
            t && t._isComponent
              ? (function (e, t) {
                  var n = (e.$options = Object.create(e.constructor.options)),
                    a = t._parentVnode;
                  (n.parent = t.parent), (n._parentVnode = a);
                  var r = a.componentOptions;
                  (n.propsData = r.propsData),
                    (n._parentListeners = r.listeners),
                    (n._renderChildren = r.children),
                    (n._componentTag = r.tag),
                    t.render && ((n.render = t.render), (n.staticRenderFns = t.staticRenderFns));
                })(n, t)
              : (n.$options = Pn(En(n.constructor), t || {}, n)),
            (n._renderProxy = n),
            (n._self = n),
            (function (e) {
              var t = e.$options,
                n = t.parent;
              if (n && !t.abstract) {
                for (; n.$options.abstract && n.$parent; ) n = n.$parent;
                n.$children.push(e);
              }
              (e.$parent = n),
                (e.$root = n ? n.$root : e),
                (e.$children = []),
                (e.$refs = {}),
                (e._provided = n ? n._provided : Object.create(null)),
                (e._watcher = null),
                (e._inactive = null),
                (e._directInactive = !1),
                (e._isMounted = !1),
                (e._isDestroyed = !1),
                (e._isBeingDestroyed = !1);
            })(n),
            (function (e) {
              (e._events = Object.create(null)), (e._hasHookEvent = !1);
              var t = e.$options._parentListeners;
              t && xt(e, t);
            })(n),
            (function (t) {
              (t._vnode = null), (t._staticTrees = null);
              var n = t.$options,
                a = (t.$vnode = n._parentVnode),
                r = a && a.context;
              (t.$slots = pt(n._renderChildren, r)),
                (t.$scopedSlots = a ? mt(t.$parent, a.data.scopedSlots, t.$slots) : e),
                (t._c = function (e, n, a, r) {
                  return We(t, e, n, a, r, !1);
                }),
                (t.$createElement = function (e, n, a, r) {
                  return We(t, e, n, a, r, !0);
                });
              var s = a && a.data;
              Me(t, '$attrs', (s && s.attrs) || e, null, !0), Me(t, '$listeners', n._parentListeners || e, null, !0);
            })(n),
            $t(n, 'beforeCreate', void 0, !1),
            (function (e) {
              var t = wn(e.$options.inject, e);
              t &&
                (Ae(!1),
                Object.keys(t).forEach(function (n) {
                  Me(e, n, t[n]);
                }),
                Ae(!0));
            })(n),
            hn(n),
            (function (e) {
              var t = e.$options.provide;
              if (t) {
                var n = i(t) ? t.call(e) : t;
                if (!u(n)) return;
                for (
                  var a = (function (e) {
                      var t = e._provided,
                        n = e.$parent && e.$parent._provided;
                      return n === t ? (e._provided = Object.create(n)) : t;
                    })(e),
                    r = ie ? Reflect.ownKeys(n) : Object.keys(n),
                    s = 0;
                  s < r.length;
                  s++
                ) {
                  var o = r[s];
                  Object.defineProperty(a, o, Object.getOwnPropertyDescriptor(n, o));
                }
              }
            })(n),
            $t(n, 'created'),
            n.$options.el && n.$mount(n.$options.el);
        };
      })(Wn),
        (function (e) {
          Object.defineProperty(e.prototype, '$data', {
            get: function () {
              return this._data;
            },
          }),
            Object.defineProperty(e.prototype, '$props', {
              get: function () {
                return this._props;
              },
            }),
            (e.prototype.$set = Se),
            (e.prototype.$delete = Oe),
            (e.prototype.$watch = function (e, t, n) {
              var a = this;
              if (d(t)) return _n(a, e, t, n);
              (n = n || {}).user = !0;
              var r = new mn(a, e, t, n);
              if (n.immediate) {
                var s = 'callback for immediate watcher "'.concat(r.expression, '"');
                ge(), Jt(t, a, [r.value], a, s), Re();
              }
              return function () {
                r.teardown();
              };
            });
        })(Wn),
        (function (e) {
          var n = /^hook:/;
          (e.prototype.$on = function (e, a) {
            var r = this;
            if (t(e)) for (var s = 0, o = e.length; s < o; s++) r.$on(e[s], a);
            else (r._events[e] || (r._events[e] = [])).push(a), n.test(e) && (r._hasHookEvent = !0);
            return r;
          }),
            (e.prototype.$once = function (e, t) {
              var n = this;
              function a() {
                n.$off(e, a), t.apply(n, arguments);
              }
              return (a.fn = t), n.$on(e, a), n;
            }),
            (e.prototype.$off = function (e, n) {
              var a = this;
              if (!arguments.length) return (a._events = Object.create(null)), a;
              if (t(e)) {
                for (var r = 0, s = e.length; r < s; r++) a.$off(e[r], n);
                return a;
              }
              var o,
                i = a._events[e];
              if (!i) return a;
              if (!n) return (a._events[e] = null), a;
              for (var u = i.length; u--; )
                if ((o = i[u]) === n || o.fn === n) {
                  i.splice(u, 1);
                  break;
                }
              return a;
            }),
            (e.prototype.$emit = function (e) {
              var t = this,
                n = t._events[e];
              if (n) {
                n = n.length > 1 ? I(n) : n;
                for (var a = I(arguments, 1), r = 'event handler for "'.concat(e, '"'), s = 0, o = n.length; s < o; s++)
                  Jt(n[s], t, a, t, r);
              }
              return t;
            });
        })(Wn),
        (function (e) {
          (e.prototype._update = function (e, t) {
            var n = this,
              a = n.$el,
              r = n._vnode,
              s = Ct(n);
            (n._vnode = e),
              (n.$el = r ? n.__patch__(r, e) : n.__patch__(n.$el, e, t, !1)),
              s(),
              a && (a.__vue__ = null),
              n.$el && (n.$el.__vue__ = n);
            for (var o = n; o && o.$vnode && o.$parent && o.$vnode === o.$parent._vnode; )
              (o.$parent.$el = o.$el), (o = o.$parent);
          }),
            (e.prototype.$forceUpdate = function () {
              this._watcher && this._watcher.update();
            }),
            (e.prototype.$destroy = function () {
              var e = this;
              if (!e._isBeingDestroyed) {
                $t(e, 'beforeDestroy'), (e._isBeingDestroyed = !0);
                var t = e.$parent;
                !t || t._isBeingDestroyed || e.$options.abstract || b(t.$children, e),
                  e._scope.stop(),
                  e._data.__ob__ && e._data.__ob__.vmCount--,
                  (e._isDestroyed = !0),
                  e.__patch__(e._vnode, null),
                  $t(e, 'destroyed'),
                  e.$off(),
                  e.$el && (e.$el.__vue__ = null),
                  e.$vnode && (e.$vnode.parent = null);
              }
            });
        })(Wn),
        (function (e) {
          dt(e.prototype),
            (e.prototype.$nextTick = function (e) {
              return un(e, this);
            }),
            (e.prototype._render = function () {
              var e,
                n = this,
                a = n.$options,
                r = a.render,
                s = a._parentVnode;
              s &&
                n._isMounted &&
                ((n.$scopedSlots = mt(n.$parent, s.data.scopedSlots, n.$slots, n.$scopedSlots)),
                n._slotsProxy && gt(n._slotsProxy, n.$scopedSlots)),
                (n.$vnode = s);
              try {
                le(n), (Tt = n), (e = r.call(n._renderProxy, n.$createElement));
              } catch (t) {
                Wt(t, n, 'render'), (e = n._vnode);
              } finally {
                (Tt = null), le();
              }
              return t(e) && 1 === e.length && (e = e[0]), e instanceof de || (e = pe()), (e.parent = s), e;
            });
        })(Wn);
      var Qn = [String, RegExp, Array],
        ea = {
          KeepAlive: {
            name: 'keep-alive',
            abstract: !0,
            props: { include: Qn, exclude: Qn, max: [String, Number] },
            methods: {
              cacheVNode: function () {
                var e = this,
                  t = e.cache,
                  n = e.keys,
                  a = e.vnodeToCache,
                  r = e.keyToCache;
                if (a) {
                  var s = a.tag,
                    o = a.componentInstance,
                    i = a.componentOptions;
                  (t[r] = { name: Jn(i), tag: s, componentInstance: o }),
                    n.push(r),
                    this.max && n.length > parseInt(this.max) && Xn(t, n[0], n, this._vnode),
                    (this.vnodeToCache = null);
                }
              },
            },
            created: function () {
              (this.cache = Object.create(null)), (this.keys = []);
            },
            destroyed: function () {
              for (var e in this.cache) Xn(this.cache, e, this.keys);
            },
            mounted: function () {
              var e = this;
              this.cacheVNode(),
                this.$watch('include', function (t) {
                  Yn(e, function (e) {
                    return Zn(t, e);
                  });
                }),
                this.$watch('exclude', function (t) {
                  Yn(e, function (e) {
                    return !Zn(t, e);
                  });
                });
            },
            updated: function () {
              this.cacheVNode();
            },
            render: function () {
              var e = this.$slots.default,
                t = wt(e),
                n = t && t.componentOptions;
              if (n) {
                var a = Jn(n),
                  r = this.include,
                  s = this.exclude;
                if ((r && (!a || !Zn(r, a))) || (s && a && Zn(s, a))) return t;
                var o = this.cache,
                  i = this.keys,
                  u = null == t.key ? n.Ctor.cid + (n.tag ? '::'.concat(n.tag) : '') : t.key;
                o[u]
                  ? ((t.componentInstance = o[u].componentInstance), b(i, u), i.push(u))
                  : ((this.vnodeToCache = t), (this.keyToCache = u)),
                  (t.data.keepAlive = !0);
              }
              return t || (e && e[0]);
            },
          },
        };
      !(function (e) {
        var t = {
          get: function () {
            return U;
          },
        };
        Object.defineProperty(e, 'config', t),
          (e.util = { warn: Ln, extend: C, mergeOptions: Pn, defineReactive: Me }),
          (e.set = Se),
          (e.delete = Oe),
          (e.nextTick = un),
          (e.observable = function (e) {
            return Ce(e), e;
          }),
          (e.options = Object.create(null)),
          G.forEach(function (t) {
            e.options[t + 's'] = Object.create(null);
          }),
          (e.options._base = e),
          C(e.options.components, ea),
          (function (e) {
            e.use = function (e) {
              var t = this._installedPlugins || (this._installedPlugins = []);
              if (t.indexOf(e) > -1) return this;
              var n = I(arguments, 1);
              return n.unshift(this), i(e.install) ? e.install.apply(e, n) : i(e) && e.apply(null, n), t.push(e), this;
            };
          })(e),
          (function (e) {
            e.mixin = function (e) {
              return (this.options = Pn(this.options, e)), this;
            };
          })(e),
          (function (e) {
            e.cid = 0;
            var t = 1;
            e.extend = function (e) {
              e = e || {};
              var n = this,
                a = n.cid,
                r = e._Ctor || (e._Ctor = {});
              if (r[a]) return r[a];
              var s = Cn(e) || Cn(n.options),
                o = function (e) {
                  this._init(e);
                };
              return (
                ((o.prototype = Object.create(n.prototype)).constructor = o),
                (o.cid = t++),
                (o.options = Pn(n.options, e)),
                (o.super = n),
                o.options.props &&
                  (function (e) {
                    var t = e.options.props;
                    for (var n in t) vn(e.prototype, '_props', n);
                  })(o),
                o.options.computed &&
                  (function (e) {
                    var t = e.options.computed;
                    for (var n in t) gn(e.prototype, n, t[n]);
                  })(o),
                (o.extend = n.extend),
                (o.mixin = n.mixin),
                (o.use = n.use),
                G.forEach(function (e) {
                  o[e] = n[e];
                }),
                s && (o.options.components[s] = o),
                (o.superOptions = n.options),
                (o.extendOptions = e),
                (o.sealedOptions = C({}, o.options)),
                (r[a] = o),
                o
              );
            };
          })(e),
          (function (e) {
            G.forEach(function (t) {
              e[t] = function (e, n) {
                return n
                  ? ('component' === t && d(n) && ((n.name = n.name || e), (n = this.options._base.extend(n))),
                    'directive' === t && i(n) && (n = { bind: n, update: n }),
                    (this.options[t + 's'][e] = n),
                    n)
                  : this.options[t + 's'][e];
              };
            });
          })(e);
      })(Wn),
        Object.defineProperty(Wn.prototype, '$isServer', { get: ae }),
        Object.defineProperty(Wn.prototype, '$ssrContext', {
          get: function () {
            return this.$vnode && this.$vnode.ssrContext;
          },
        }),
        Object.defineProperty(Wn, 'FunctionalRenderContext', { value: An }),
        (Wn.version = '2.7.14');
      var ta = f('style,class'),
        na = f('input,textarea,option,select,progress'),
        aa = function (e, t, n) {
          return (
            ('value' === n && na(e) && 'button' !== t) ||
            ('selected' === n && 'option' === e) ||
            ('checked' === n && 'input' === e) ||
            ('muted' === n && 'video' === e)
          );
        },
        ra = f('contenteditable,draggable,spellcheck'),
        sa = f('events,caret,typing,plaintext-only'),
        oa = function (e, t) {
          return pa(t) || 'false' === t ? 'false' : 'contenteditable' === e && sa(t) ? t : 'true';
        },
        ia = f(
          'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible',
        ),
        ua = 'http://www.w3.org/1999/xlink',
        la = function (e) {
          return ':' === e.charAt(5) && 'xlink' === e.slice(0, 5);
        },
        da = function (e) {
          return la(e) ? e.slice(6, e.length) : '';
        },
        pa = function (e) {
          return null == e || !1 === e;
        };
      function ca(e, t) {
        return { staticClass: ya(e.staticClass, t.staticClass), class: r(e.class) ? [e.class, t.class] : t.class };
      }
      function ya(e, t) {
        return e ? (t ? e + ' ' + t : e) : t || '';
      }
      function ma(e) {
        return Array.isArray(e)
          ? (function (e) {
              for (var t, n = '', a = 0, s = e.length; a < s; a++)
                r((t = ma(e[a]))) && '' !== t && (n && (n += ' '), (n += t));
              return n;
            })(e)
          : u(e)
          ? (function (e) {
              var t = '';
              for (var n in e) e[n] && (t && (t += ' '), (t += n));
              return t;
            })(e)
          : 'string' == typeof e
          ? e
          : '';
      }
      var fa = { svg: 'http://www.w3.org/2000/svg', math: 'http://www.w3.org/1998/Math/MathML' },
        va = f(
          'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot',
        ),
        ha = f(
          'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
          !0,
        ),
        ba = function (e) {
          return va(e) || ha(e);
        };
      function ga(e) {
        return ha(e) ? 'svg' : 'math' === e ? 'math' : void 0;
      }
      var Ra = Object.create(null),
        Ta = f('text,number,password,search,email,tel,url');
      function _a(e) {
        return 'string' == typeof e ? document.querySelector(e) || document.createElement('div') : e;
      }
      var wa = Object.freeze({
          __proto__: null,
          createElement: function (e, t) {
            var n = document.createElement(e);
            return (
              'select' !== e ||
                (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute('multiple', 'multiple')),
              n
            );
          },
          createElementNS: function (e, t) {
            return document.createElementNS(fa[e], t);
          },
          createTextNode: function (e) {
            return document.createTextNode(e);
          },
          createComment: function (e) {
            return document.createComment(e);
          },
          insertBefore: function (e, t, n) {
            e.insertBefore(t, n);
          },
          removeChild: function (e, t) {
            e.removeChild(t);
          },
          appendChild: function (e, t) {
            e.appendChild(t);
          },
          parentNode: function (e) {
            return e.parentNode;
          },
          nextSibling: function (e) {
            return e.nextSibling;
          },
          tagName: function (e) {
            return e.tagName;
          },
          setTextContent: function (e, t) {
            e.textContent = t;
          },
          setStyleScope: function (e, t) {
            e.setAttribute(t, '');
          },
        }),
        ka = {
          create: function (e, t) {
            Ea(t);
          },
          update: function (e, t) {
            e.data.ref !== t.data.ref && (Ea(e, !0), Ea(t));
          },
          destroy: function (e) {
            Ea(e, !0);
          },
        };
      function Ea(e, n) {
        var a = e.data.ref;
        if (r(a)) {
          var s = e.context,
            o = e.componentInstance || e.elm,
            u = n ? null : o,
            l = n ? void 0 : o;
          if (i(a)) Jt(a, s, [u], s, 'template ref function');
          else {
            var d = e.data.refInFor,
              p = 'string' == typeof a || 'number' == typeof a,
              c = Fe(a),
              y = s.$refs;
            if (p || c)
              if (d) {
                var m = p ? y[a] : a.value;
                n
                  ? t(m) && b(m, o)
                  : t(m)
                  ? m.includes(o) || m.push(o)
                  : p
                  ? ((y[a] = [o]), Aa(s, a, y[a]))
                  : (a.value = [o]);
              } else if (p) {
                if (n && y[a] !== o) return;
                (y[a] = l), Aa(s, a, u);
              } else if (c) {
                if (n && a.value !== o) return;
                a.value = u;
              }
          }
        }
      }
      function Aa(e, t, n) {
        var a = e._setupState;
        a && R(a, t) && (Fe(a[t]) ? (a[t].value = n) : (a[t] = n));
      }
      var xa = new de('', {}, []),
        Ia = ['create', 'activate', 'update', 'remove', 'destroy'];
      function Ca(e, t) {
        return (
          e.key === t.key &&
          e.asyncFactory === t.asyncFactory &&
          ((e.tag === t.tag &&
            e.isComment === t.isComment &&
            r(e.data) === r(t.data) &&
            (function (e, t) {
              if ('input' !== e.tag) return !0;
              var n,
                a = r((n = e.data)) && r((n = n.attrs)) && n.type,
                s = r((n = t.data)) && r((n = n.attrs)) && n.type;
              return a === s || (Ta(a) && Ta(s));
            })(e, t)) ||
            (s(e.isAsyncPlaceholder) && a(t.asyncFactory.error)))
        );
      }
      function Ma(e, t, n) {
        var a,
          s,
          o = {};
        for (a = t; a <= n; ++a) r((s = e[a].key)) && (o[s] = a);
        return o;
      }
      var Sa = {
        create: Oa,
        update: Oa,
        destroy: function (e) {
          Oa(e, xa);
        },
      };
      function Oa(e, t) {
        (e.data.directives || t.data.directives) &&
          (function (e, t) {
            var n,
              a,
              r,
              s = e === xa,
              o = t === xa,
              i = La(e.data.directives, e.context),
              u = La(t.data.directives, t.context),
              l = [],
              d = [];
            for (n in u)
              (a = i[n]),
                (r = u[n]),
                a
                  ? ((r.oldValue = a.value),
                    (r.oldArg = a.arg),
                    Fa(r, 'update', t, e),
                    r.def && r.def.componentUpdated && d.push(r))
                  : (Fa(r, 'bind', t, e), r.def && r.def.inserted && l.push(r));
            if (l.length) {
              var p = function () {
                for (var n = 0; n < l.length; n++) Fa(l[n], 'inserted', t, e);
              };
              s ? Pe(t, 'insert', p) : p();
            }
            if (
              (d.length &&
                Pe(t, 'postpatch', function () {
                  for (var n = 0; n < d.length; n++) Fa(d[n], 'componentUpdated', t, e);
                }),
              !s)
            )
              for (n in i) u[n] || Fa(i[n], 'unbind', e, e, o);
          })(e, t);
      }
      var $a = Object.create(null);
      function La(e, t) {
        var n,
          a,
          r = Object.create(null);
        if (!e) return r;
        for (n = 0; n < e.length; n++) {
          if (((a = e[n]).modifiers || (a.modifiers = $a), (r[Na(a)] = a), t._setupState && t._setupState.__sfc)) {
            var s = a.def || qn(t, '_setupState', 'v-' + a.name);
            a.def = 'function' == typeof s ? { bind: s, update: s } : s;
          }
          a.def = a.def || qn(t.$options, 'directives', a.name);
        }
        return r;
      }
      function Na(e) {
        return e.rawName || ''.concat(e.name, '.').concat(Object.keys(e.modifiers || {}).join('.'));
      }
      function Fa(e, t, n, a, r) {
        var s = e.def && e.def[t];
        if (s)
          try {
            s(n.elm, e, n, a, r);
          } catch (a) {
            Wt(a, n.context, 'directive '.concat(e.name, ' ').concat(t, ' hook'));
          }
      }
      var ja = [ka, Sa];
      function Ga(e, t) {
        var n = t.componentOptions;
        if (!((r(n) && !1 === n.Ctor.options.inheritAttrs) || (a(e.data.attrs) && a(t.data.attrs)))) {
          var o,
            i,
            u = t.elm,
            l = e.data.attrs || {},
            d = t.data.attrs || {};
          for (o in ((r(d.__ob__) || s(d._v_attr_proxy)) && (d = t.data.attrs = C({}, d)), d))
            (i = d[o]), l[o] !== i && Da(u, o, i, t.data.pre);
          for (o in ((W || Z) && d.value !== l.value && Da(u, 'value', d.value), l))
            a(d[o]) && (la(o) ? u.removeAttributeNS(ua, da(o)) : ra(o) || u.removeAttribute(o));
        }
      }
      function Da(e, t, n, a) {
        a || e.tagName.indexOf('-') > -1
          ? Ua(e, t, n)
          : ia(t)
          ? pa(n)
            ? e.removeAttribute(t)
            : ((n = 'allowfullscreen' === t && 'EMBED' === e.tagName ? 'true' : t), e.setAttribute(t, n))
          : ra(t)
          ? e.setAttribute(t, oa(t, n))
          : la(t)
          ? pa(n)
            ? e.removeAttributeNS(ua, da(t))
            : e.setAttributeNS(ua, t, n)
          : Ua(e, t, n);
      }
      function Ua(e, t, n) {
        if (pa(n)) e.removeAttribute(t);
        else {
          if (W && !J && 'TEXTAREA' === e.tagName && 'placeholder' === t && '' !== n && !e.__ieph) {
            var a = function (t) {
              t.stopImmediatePropagation(), e.removeEventListener('input', a);
            };
            e.addEventListener('input', a), (e.__ieph = !0);
          }
          e.setAttribute(t, n);
        }
      }
      var Pa = { create: Ga, update: Ga };
      function qa(e, t) {
        var n = t.elm,
          s = t.data,
          o = e.data;
        if (!(a(s.staticClass) && a(s.class) && (a(o) || (a(o.staticClass) && a(o.class))))) {
          var i = (function (e) {
              for (var t = e.data, n = e, a = e; r(a.componentInstance); )
                (a = a.componentInstance._vnode) && a.data && (t = ca(a.data, t));
              for (; r((n = n.parent)); ) n && n.data && (t = ca(t, n.data));
              return (s = t.staticClass), (o = t.class), r(s) || r(o) ? ya(s, ma(o)) : '';
              var s, o;
            })(t),
            u = n._transitionClasses;
          r(u) && (i = ya(i, ma(u))), i !== n._prevClass && (n.setAttribute('class', i), (n._prevClass = i));
        }
      }
      var Ba,
        Va,
        za,
        Ha,
        Ka,
        Wa,
        Ja = { create: qa, update: qa },
        Za = /[\w).+\-_$\]]/;
      function Ya(e) {
        var t,
          n,
          a,
          r,
          s,
          o = !1,
          i = !1,
          u = !1,
          l = !1,
          d = 0,
          p = 0,
          c = 0,
          y = 0;
        for (a = 0; a < e.length; a++)
          if (((n = t), (t = e.charCodeAt(a)), o)) 39 === t && 92 !== n && (o = !1);
          else if (i) 34 === t && 92 !== n && (i = !1);
          else if (u) 96 === t && 92 !== n && (u = !1);
          else if (l) 47 === t && 92 !== n && (l = !1);
          else if (124 !== t || 124 === e.charCodeAt(a + 1) || 124 === e.charCodeAt(a - 1) || d || p || c) {
            switch (t) {
              case 34:
                i = !0;
                break;
              case 39:
                o = !0;
                break;
              case 96:
                u = !0;
                break;
              case 40:
                c++;
                break;
              case 41:
                c--;
                break;
              case 91:
                p++;
                break;
              case 93:
                p--;
                break;
              case 123:
                d++;
                break;
              case 125:
                d--;
            }
            if (47 === t) {
              for (var m = a - 1, f = void 0; m >= 0 && ' ' === (f = e.charAt(m)); m--);
              (f && Za.test(f)) || (l = !0);
            }
          } else void 0 === r ? ((y = a + 1), (r = e.slice(0, a).trim())) : v();
        function v() {
          (s || (s = [])).push(e.slice(y, a).trim()), (y = a + 1);
        }
        if ((void 0 === r ? (r = e.slice(0, a).trim()) : 0 !== y && v(), s))
          for (a = 0; a < s.length; a++) r = Xa(r, s[a]);
        return r;
      }
      function Xa(e, t) {
        var n = t.indexOf('(');
        if (n < 0) return '_f("'.concat(t, '")(').concat(e, ')');
        var a = t.slice(0, n),
          r = t.slice(n + 1);
        return '_f("'
          .concat(a, '")(')
          .concat(e)
          .concat(')' !== r ? ',' + r : r);
      }
      function Qa(e, t) {
        console.error('[Vue compiler]: '.concat(e));
      }
      function er(e, t) {
        return e
          ? e
              .map(function (e) {
                return e[t];
              })
              .filter(function (e) {
                return e;
              })
          : [];
      }
      function tr(e, t, n, a, r) {
        (e.props || (e.props = [])).push(dr({ name: t, value: n, dynamic: r }, a)), (e.plain = !1);
      }
      function nr(e, t, n, a, r) {
        (r ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(
          dr({ name: t, value: n, dynamic: r }, a),
        ),
          (e.plain = !1);
      }
      function ar(e, t, n, a) {
        (e.attrsMap[t] = n), e.attrsList.push(dr({ name: t, value: n }, a));
      }
      function rr(e, t, n, a, r, s, o, i) {
        (e.directives || (e.directives = [])).push(
          dr({ name: t, rawName: n, value: a, arg: r, isDynamicArg: s, modifiers: o }, i),
        ),
          (e.plain = !1);
      }
      function sr(e, t, n) {
        return n ? '_p('.concat(t, ',"').concat(e, '")') : e + t;
      }
      function or(t, n, a, r, s, o, i, u) {
        var l;
        (r = r || e).right
          ? u
            ? (n = '('.concat(n, ")==='click'?'contextmenu':(").concat(n, ')'))
            : 'click' === n && ((n = 'contextmenu'), delete r.right)
          : r.middle &&
            (u ? (n = '('.concat(n, ")==='click'?'mouseup':(").concat(n, ')')) : 'click' === n && (n = 'mouseup')),
          r.capture && (delete r.capture, (n = sr('!', n, u))),
          r.once && (delete r.once, (n = sr('~', n, u))),
          r.passive && (delete r.passive, (n = sr('&', n, u))),
          r.native
            ? (delete r.native, (l = t.nativeEvents || (t.nativeEvents = {})))
            : (l = t.events || (t.events = {}));
        var d = dr({ value: a.trim(), dynamic: u }, i);
        r !== e && (d.modifiers = r);
        var p = l[n];
        Array.isArray(p) ? (s ? p.unshift(d) : p.push(d)) : (l[n] = p ? (s ? [d, p] : [p, d]) : d), (t.plain = !1);
      }
      function ir(e, t, n) {
        var a = ur(e, ':' + t) || ur(e, 'v-bind:' + t);
        if (null != a) return Ya(a);
        if (!1 !== n) {
          var r = ur(e, t);
          if (null != r) return JSON.stringify(r);
        }
      }
      function ur(e, t, n) {
        var a;
        if (null != (a = e.attrsMap[t]))
          for (var r = e.attrsList, s = 0, o = r.length; s < o; s++)
            if (r[s].name === t) {
              r.splice(s, 1);
              break;
            }
        return n && delete e.attrsMap[t], a;
      }
      function lr(e, t) {
        for (var n = e.attrsList, a = 0, r = n.length; a < r; a++) {
          var s = n[a];
          if (t.test(s.name)) return n.splice(a, 1), s;
        }
      }
      function dr(e, t) {
        return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e;
      }
      function pr(e, t, n) {
        var a = n || {},
          r = a.number,
          s = '$$v',
          o = s;
        a.trim && (o = '(typeof '.concat(s, " === 'string'") + '? '.concat(s, '.trim()') + ': '.concat(s, ')')),
          r && (o = '_n('.concat(o, ')'));
        var i = cr(t, o);
        e.model = {
          value: '('.concat(t, ')'),
          expression: JSON.stringify(t),
          callback: 'function ('.concat(s, ') {').concat(i, '}'),
        };
      }
      function cr(e, t) {
        var n = (function (e) {
          if (((e = e.trim()), (Ba = e.length), e.indexOf('[') < 0 || e.lastIndexOf(']') < Ba - 1))
            return (Ha = e.lastIndexOf('.')) > -1
              ? { exp: e.slice(0, Ha), key: '"' + e.slice(Ha + 1) + '"' }
              : { exp: e, key: null };
          for (Va = e, Ha = Ka = Wa = 0; !mr(); ) fr((za = yr())) ? hr(za) : 91 === za && vr(za);
          return { exp: e.slice(0, Ka), key: e.slice(Ka + 1, Wa) };
        })(e);
        return null === n.key
          ? ''.concat(e, '=').concat(t)
          : '$set('.concat(n.exp, ', ').concat(n.key, ', ').concat(t, ')');
      }
      function yr() {
        return Va.charCodeAt(++Ha);
      }
      function mr() {
        return Ha >= Ba;
      }
      function fr(e) {
        return 34 === e || 39 === e;
      }
      function vr(e) {
        var t = 1;
        for (Ka = Ha; !mr(); )
          if (fr((e = yr()))) hr(e);
          else if ((91 === e && t++, 93 === e && t--, 0 === t)) {
            Wa = Ha;
            break;
          }
      }
      function hr(e) {
        for (var t = e; !mr() && (e = yr()) !== t; );
      }
      var br,
        gr = '__r',
        Rr = '__c';
      function Tr(e, t, n) {
        var a = br;
        return function r() {
          null !== t.apply(null, arguments) && kr(e, r, n, a);
        };
      }
      var _r = Qt && !(Q && Number(Q[1]) <= 53);
      function wr(e, t, n, a) {
        if (_r) {
          var r = Ut,
            s = t;
          t = s._wrapper = function (e) {
            if (
              e.target === e.currentTarget ||
              e.timeStamp >= r ||
              e.timeStamp <= 0 ||
              e.target.ownerDocument !== document
            )
              return s.apply(this, arguments);
          };
        }
        br.addEventListener(e, t, te ? { capture: n, passive: a } : n);
      }
      function kr(e, t, n, a) {
        (a || br).removeEventListener(e, t._wrapper || t, n);
      }
      function Er(e, t) {
        if (!a(e.data.on) || !a(t.data.on)) {
          var n = t.data.on || {},
            s = e.data.on || {};
          (br = t.elm || e.elm),
            (function (e) {
              if (r(e[gr])) {
                var t = W ? 'change' : 'input';
                (e[t] = [].concat(e[gr], e[t] || [])), delete e[gr];
              }
              r(e[Rr]) && ((e.change = [].concat(e[Rr], e.change || [])), delete e[Rr]);
            })(n),
            Ue(n, s, wr, kr, Tr, t.context),
            (br = void 0);
        }
      }
      var Ar,
        xr = {
          create: Er,
          update: Er,
          destroy: function (e) {
            return Er(e, xa);
          },
        };
      function Ir(e, t) {
        if (!a(e.data.domProps) || !a(t.data.domProps)) {
          var n,
            o,
            i = t.elm,
            u = e.data.domProps || {},
            l = t.data.domProps || {};
          for (n in ((r(l.__ob__) || s(l._v_attr_proxy)) && (l = t.data.domProps = C({}, l)), u)) n in l || (i[n] = '');
          for (n in l) {
            if (((o = l[n]), 'textContent' === n || 'innerHTML' === n)) {
              if ((t.children && (t.children.length = 0), o === u[n])) continue;
              1 === i.childNodes.length && i.removeChild(i.childNodes[0]);
            }
            if ('value' === n && 'PROGRESS' !== i.tagName) {
              i._value = o;
              var d = a(o) ? '' : String(o);
              Cr(i, d) && (i.value = d);
            } else if ('innerHTML' === n && ha(i.tagName) && a(i.innerHTML)) {
              (Ar = Ar || document.createElement('div')).innerHTML = '<svg>'.concat(o, '</svg>');
              for (var p = Ar.firstChild; i.firstChild; ) i.removeChild(i.firstChild);
              for (; p.firstChild; ) i.appendChild(p.firstChild);
            } else if (o !== u[n])
              try {
                i[n] = o;
              } catch (e) {}
          }
        }
      }
      function Cr(e, t) {
        return (
          !e.composing &&
          ('OPTION' === e.tagName ||
            (function (e, t) {
              var n = !0;
              try {
                n = document.activeElement !== e;
              } catch (e) {}
              return n && e.value !== t;
            })(e, t) ||
            (function (e, t) {
              var n = e.value,
                a = e._vModifiers;
              if (r(a)) {
                if (a.number) return m(n) !== m(t);
                if (a.trim) return n.trim() !== t.trim();
              }
              return n !== t;
            })(e, t))
        );
      }
      var Mr = { create: Ir, update: Ir },
        Sr = T(function (e) {
          var t = {},
            n = /:(.+)/;
          return (
            e.split(/;(?![^(]*\))/g).forEach(function (e) {
              if (e) {
                var a = e.split(n);
                a.length > 1 && (t[a[0].trim()] = a[1].trim());
              }
            }),
            t
          );
        });
      function Or(e) {
        var t = $r(e.style);
        return e.staticStyle ? C(e.staticStyle, t) : t;
      }
      function $r(e) {
        return Array.isArray(e) ? M(e) : 'string' == typeof e ? Sr(e) : e;
      }
      var Lr,
        Nr = /^--/,
        Fr = /\s*!important$/,
        jr = function (e, t, n) {
          if (Nr.test(t)) e.style.setProperty(t, n);
          else if (Fr.test(n)) e.style.setProperty(A(t), n.replace(Fr, ''), 'important');
          else {
            var a = Dr(t);
            if (Array.isArray(n)) for (var r = 0, s = n.length; r < s; r++) e.style[a] = n[r];
            else e.style[a] = n;
          }
        },
        Gr = ['Webkit', 'Moz', 'ms'],
        Dr = T(function (e) {
          if (((Lr = Lr || document.createElement('div').style), 'filter' !== (e = w(e)) && e in Lr)) return e;
          for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Gr.length; n++) {
            var a = Gr[n] + t;
            if (a in Lr) return a;
          }
        });
      function Ur(e, t) {
        var n = t.data,
          s = e.data;
        if (!(a(n.staticStyle) && a(n.style) && a(s.staticStyle) && a(s.style))) {
          var o,
            i,
            u = t.elm,
            l = s.staticStyle,
            d = s.normalizedStyle || s.style || {},
            p = l || d,
            c = $r(t.data.style) || {};
          t.data.normalizedStyle = r(c.__ob__) ? C({}, c) : c;
          var y = (function (e, t) {
            for (var n, a = {}, r = e; r.componentInstance; )
              (r = r.componentInstance._vnode) && r.data && (n = Or(r.data)) && C(a, n);
            (n = Or(e.data)) && C(a, n);
            for (var s = e; (s = s.parent); ) s.data && (n = Or(s.data)) && C(a, n);
            return a;
          })(t);
          for (i in p) a(y[i]) && jr(u, i, '');
          for (i in y) (o = y[i]) !== p[i] && jr(u, i, null == o ? '' : o);
        }
      }
      var Pr = { create: Ur, update: Ur },
        qr = /\s+/;
      function Br(e, t) {
        if (t && (t = t.trim()))
          if (e.classList)
            t.indexOf(' ') > -1
              ? t.split(qr).forEach(function (t) {
                  return e.classList.add(t);
                })
              : e.classList.add(t);
          else {
            var n = ' '.concat(e.getAttribute('class') || '', ' ');
            n.indexOf(' ' + t + ' ') < 0 && e.setAttribute('class', (n + t).trim());
          }
      }
      function Vr(e, t) {
        if (t && (t = t.trim()))
          if (e.classList)
            t.indexOf(' ') > -1
              ? t.split(qr).forEach(function (t) {
                  return e.classList.remove(t);
                })
              : e.classList.remove(t),
              e.classList.length || e.removeAttribute('class');
          else {
            for (var n = ' '.concat(e.getAttribute('class') || '', ' '), a = ' ' + t + ' '; n.indexOf(a) >= 0; )
              n = n.replace(a, ' ');
            (n = n.trim()) ? e.setAttribute('class', n) : e.removeAttribute('class');
          }
      }
      function zr(e) {
        if (e) {
          if ('object' == typeof e) {
            var t = {};
            return !1 !== e.css && C(t, Hr(e.name || 'v')), C(t, e), t;
          }
          return 'string' == typeof e ? Hr(e) : void 0;
        }
      }
      var Hr = T(function (e) {
          return {
            enterClass: ''.concat(e, '-enter'),
            enterToClass: ''.concat(e, '-enter-to'),
            enterActiveClass: ''.concat(e, '-enter-active'),
            leaveClass: ''.concat(e, '-leave'),
            leaveToClass: ''.concat(e, '-leave-to'),
            leaveActiveClass: ''.concat(e, '-leave-active'),
          };
        }),
        Kr = H && !J,
        Wr = 'transition',
        Jr = 'animation',
        Zr = 'transition',
        Yr = 'transitionend',
        Xr = 'animation',
        Qr = 'animationend';
      Kr &&
        (void 0 === window.ontransitionend &&
          void 0 !== window.onwebkittransitionend &&
          ((Zr = 'WebkitTransition'), (Yr = 'webkitTransitionEnd')),
        void 0 === window.onanimationend &&
          void 0 !== window.onwebkitanimationend &&
          ((Xr = 'WebkitAnimation'), (Qr = 'webkitAnimationEnd')));
      var es = H
        ? window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : setTimeout
        : function (e) {
            return e();
          };
      function ts(e) {
        es(function () {
          es(e);
        });
      }
      function ns(e, t) {
        var n = e._transitionClasses || (e._transitionClasses = []);
        n.indexOf(t) < 0 && (n.push(t), Br(e, t));
      }
      function as(e, t) {
        e._transitionClasses && b(e._transitionClasses, t), Vr(e, t);
      }
      function rs(e, t, n) {
        var a = os(e, t),
          r = a.type,
          s = a.timeout,
          o = a.propCount;
        if (!r) return n();
        var i = r === Wr ? Yr : Qr,
          u = 0,
          l = function () {
            e.removeEventListener(i, d), n();
          },
          d = function (t) {
            t.target === e && ++u >= o && l();
          };
        setTimeout(function () {
          u < o && l();
        }, s + 1),
          e.addEventListener(i, d);
      }
      var ss = /\b(transform|all)(,|$)/;
      function os(e, t) {
        var n,
          a = window.getComputedStyle(e),
          r = (a[Zr + 'Delay'] || '').split(', '),
          s = (a[Zr + 'Duration'] || '').split(', '),
          o = is(r, s),
          i = (a[Xr + 'Delay'] || '').split(', '),
          u = (a[Xr + 'Duration'] || '').split(', '),
          l = is(i, u),
          d = 0,
          p = 0;
        return (
          t === Wr
            ? o > 0 && ((n = Wr), (d = o), (p = s.length))
            : t === Jr
            ? l > 0 && ((n = Jr), (d = l), (p = u.length))
            : (p = (n = (d = Math.max(o, l)) > 0 ? (o > l ? Wr : Jr) : null) ? (n === Wr ? s.length : u.length) : 0),
          { type: n, timeout: d, propCount: p, hasTransform: n === Wr && ss.test(a[Zr + 'Property']) }
        );
      }
      function is(e, t) {
        for (; e.length < t.length; ) e = e.concat(e);
        return Math.max.apply(
          null,
          t.map(function (t, n) {
            return us(t) + us(e[n]);
          }),
        );
      }
      function us(e) {
        return 1e3 * Number(e.slice(0, -1).replace(',', '.'));
      }
      function ls(e, t) {
        var n = e.elm;
        r(n._leaveCb) && ((n._leaveCb.cancelled = !0), n._leaveCb());
        var s = zr(e.data.transition);
        if (!a(s) && !r(n._enterCb) && 1 === n.nodeType) {
          for (
            var o = s.css,
              l = s.type,
              d = s.enterClass,
              p = s.enterToClass,
              c = s.enterActiveClass,
              y = s.appearClass,
              f = s.appearToClass,
              v = s.appearActiveClass,
              h = s.beforeEnter,
              b = s.enter,
              g = s.afterEnter,
              R = s.enterCancelled,
              T = s.beforeAppear,
              _ = s.appear,
              w = s.afterAppear,
              k = s.appearCancelled,
              E = s.duration,
              A = It,
              x = It.$vnode;
            x && x.parent;

          )
            (A = x.context), (x = x.parent);
          var I = !A._isMounted || !e.isRootInsert;
          if (!I || _ || '' === _) {
            var C = I && y ? y : d,
              M = I && v ? v : c,
              S = I && f ? f : p,
              O = (I && T) || h,
              $ = I && i(_) ? _ : b,
              L = (I && w) || g,
              N = (I && k) || R,
              j = m(u(E) ? E.enter : E),
              G = !1 !== o && !J,
              D = cs($),
              U = (n._enterCb = F(function () {
                G && (as(n, S), as(n, M)), U.cancelled ? (G && as(n, C), N && N(n)) : L && L(n), (n._enterCb = null);
              }));
            e.data.show ||
              Pe(e, 'insert', function () {
                var t = n.parentNode,
                  a = t && t._pending && t._pending[e.key];
                a && a.tag === e.tag && a.elm._leaveCb && a.elm._leaveCb(), $ && $(n, U);
              }),
              O && O(n),
              G &&
                (ns(n, C),
                ns(n, M),
                ts(function () {
                  as(n, C), U.cancelled || (ns(n, S), D || (ps(j) ? setTimeout(U, j) : rs(n, l, U)));
                })),
              e.data.show && (t && t(), $ && $(n, U)),
              G || D || U();
          }
        }
      }
      function ds(e, t) {
        var n = e.elm;
        r(n._enterCb) && ((n._enterCb.cancelled = !0), n._enterCb());
        var s = zr(e.data.transition);
        if (a(s) || 1 !== n.nodeType) return t();
        if (!r(n._leaveCb)) {
          var o = s.css,
            i = s.type,
            l = s.leaveClass,
            d = s.leaveToClass,
            p = s.leaveActiveClass,
            c = s.beforeLeave,
            y = s.leave,
            f = s.afterLeave,
            v = s.leaveCancelled,
            h = s.delayLeave,
            b = s.duration,
            g = !1 !== o && !J,
            R = cs(y),
            T = m(u(b) ? b.leave : b),
            _ = (n._leaveCb = F(function () {
              n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null),
                g && (as(n, d), as(n, p)),
                _.cancelled ? (g && as(n, l), v && v(n)) : (t(), f && f(n)),
                (n._leaveCb = null);
            }));
          h ? h(w) : w();
        }
        function w() {
          _.cancelled ||
            (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e),
            c && c(n),
            g &&
              (ns(n, l),
              ns(n, p),
              ts(function () {
                as(n, l), _.cancelled || (ns(n, d), R || (ps(T) ? setTimeout(_, T) : rs(n, i, _)));
              })),
            y && y(n, _),
            g || R || _());
        }
      }
      function ps(e) {
        return 'number' == typeof e && !isNaN(e);
      }
      function cs(e) {
        if (a(e)) return !1;
        var t = e.fns;
        return r(t) ? cs(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
      }
      function ys(e, t) {
        !0 !== t.data.show && ls(t);
      }
      var ms = (function (e) {
        var n,
          i,
          u = {},
          l = e.modules,
          d = e.nodeOps;
        for (n = 0; n < Ia.length; ++n)
          for (u[Ia[n]] = [], i = 0; i < l.length; ++i) r(l[i][Ia[n]]) && u[Ia[n]].push(l[i][Ia[n]]);
        function p(e) {
          var t = d.parentNode(e);
          r(t) && d.removeChild(t, e);
        }
        function c(e, t, n, a, o, i, l) {
          if (
            (r(e.elm) && r(i) && (e = i[l] = ye(e)),
            (e.isRootInsert = !o),
            !(function (e, t, n, a) {
              var o = e.data;
              if (r(o)) {
                var i = r(e.componentInstance) && o.keepAlive;
                if ((r((o = o.hook)) && r((o = o.init)) && o(e, !1), r(e.componentInstance)))
                  return (
                    y(e, t),
                    m(n, e.elm, a),
                    s(i) &&
                      (function (e, t, n, a) {
                        for (var s, o = e; o.componentInstance; )
                          if (r((s = (o = o.componentInstance._vnode).data)) && r((s = s.transition))) {
                            for (s = 0; s < u.activate.length; ++s) u.activate[s](xa, o);
                            t.push(o);
                            break;
                          }
                        m(n, e.elm, a);
                      })(e, t, n, a),
                    !0
                  );
              }
            })(e, t, n, a))
          ) {
            var p = e.data,
              c = e.children,
              f = e.tag;
            r(f)
              ? ((e.elm = e.ns ? d.createElementNS(e.ns, f) : d.createElement(f, e)),
                g(e),
                v(e, c, t),
                r(p) && b(e, t),
                m(n, e.elm, a))
              : s(e.isComment)
              ? ((e.elm = d.createComment(e.text)), m(n, e.elm, a))
              : ((e.elm = d.createTextNode(e.text)), m(n, e.elm, a));
          }
        }
        function y(e, t) {
          r(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), (e.data.pendingInsert = null)),
            (e.elm = e.componentInstance.$el),
            h(e) ? (b(e, t), g(e)) : (Ea(e), t.push(e));
        }
        function m(e, t, n) {
          r(e) && (r(n) ? d.parentNode(n) === e && d.insertBefore(e, t, n) : d.appendChild(e, t));
        }
        function v(e, n, a) {
          if (t(n)) for (var r = 0; r < n.length; ++r) c(n[r], a, e.elm, null, !0, n, r);
          else o(e.text) && d.appendChild(e.elm, d.createTextNode(String(e.text)));
        }
        function h(e) {
          for (; e.componentInstance; ) e = e.componentInstance._vnode;
          return r(e.tag);
        }
        function b(e, t) {
          for (var a = 0; a < u.create.length; ++a) u.create[a](xa, e);
          r((n = e.data.hook)) && (r(n.create) && n.create(xa, e), r(n.insert) && t.push(e));
        }
        function g(e) {
          var t;
          if (r((t = e.fnScopeId))) d.setStyleScope(e.elm, t);
          else
            for (var n = e; n; )
              r((t = n.context)) && r((t = t.$options._scopeId)) && d.setStyleScope(e.elm, t), (n = n.parent);
          r((t = It)) &&
            t !== e.context &&
            t !== e.fnContext &&
            r((t = t.$options._scopeId)) &&
            d.setStyleScope(e.elm, t);
        }
        function R(e, t, n, a, r, s) {
          for (; a <= r; ++a) c(n[a], s, e, t, !1, n, a);
        }
        function T(e) {
          var t,
            n,
            a = e.data;
          if (r(a))
            for (r((t = a.hook)) && r((t = t.destroy)) && t(e), t = 0; t < u.destroy.length; ++t) u.destroy[t](e);
          if (r((t = e.children))) for (n = 0; n < e.children.length; ++n) T(e.children[n]);
        }
        function _(e, t, n) {
          for (; t <= n; ++t) {
            var a = e[t];
            r(a) && (r(a.tag) ? (w(a), T(a)) : p(a.elm));
          }
        }
        function w(e, t) {
          if (r(t) || r(e.data)) {
            var n,
              a = u.remove.length + 1;
            for (
              r(t)
                ? (t.listeners += a)
                : (t = (function (e, t) {
                    function n() {
                      0 == --n.listeners && p(e);
                    }
                    return (n.listeners = t), n;
                  })(e.elm, a)),
                r((n = e.componentInstance)) && r((n = n._vnode)) && r(n.data) && w(n, t),
                n = 0;
              n < u.remove.length;
              ++n
            )
              u.remove[n](e, t);
            r((n = e.data.hook)) && r((n = n.remove)) ? n(e, t) : t();
          } else p(e.elm);
        }
        function k(e, t, n, a) {
          for (var s = n; s < a; s++) {
            var o = t[s];
            if (r(o) && Ca(e, o)) return s;
          }
        }
        function E(e, t, n, o, i, l) {
          if (e !== t) {
            r(t.elm) && r(o) && (t = o[i] = ye(t));
            var p = (t.elm = e.elm);
            if (s(e.isAsyncPlaceholder)) r(t.asyncFactory.resolved) ? I(e.elm, t, n) : (t.isAsyncPlaceholder = !0);
            else if (s(t.isStatic) && s(e.isStatic) && t.key === e.key && (s(t.isCloned) || s(t.isOnce)))
              t.componentInstance = e.componentInstance;
            else {
              var y,
                m = t.data;
              r(m) && r((y = m.hook)) && r((y = y.prepatch)) && y(e, t);
              var f = e.children,
                v = t.children;
              if (r(m) && h(t)) {
                for (y = 0; y < u.update.length; ++y) u.update[y](e, t);
                r((y = m.hook)) && r((y = y.update)) && y(e, t);
              }
              a(t.text)
                ? r(f) && r(v)
                  ? f !== v &&
                    (function (e, t, n, s, o) {
                      for (
                        var i,
                          u,
                          l,
                          p = 0,
                          y = 0,
                          m = t.length - 1,
                          f = t[0],
                          v = t[m],
                          h = n.length - 1,
                          b = n[0],
                          g = n[h],
                          T = !o;
                        p <= m && y <= h;

                      )
                        a(f)
                          ? (f = t[++p])
                          : a(v)
                          ? (v = t[--m])
                          : Ca(f, b)
                          ? (E(f, b, s, n, y), (f = t[++p]), (b = n[++y]))
                          : Ca(v, g)
                          ? (E(v, g, s, n, h), (v = t[--m]), (g = n[--h]))
                          : Ca(f, g)
                          ? (E(f, g, s, n, h),
                            T && d.insertBefore(e, f.elm, d.nextSibling(v.elm)),
                            (f = t[++p]),
                            (g = n[--h]))
                          : Ca(v, b)
                          ? (E(v, b, s, n, y), T && d.insertBefore(e, v.elm, f.elm), (v = t[--m]), (b = n[++y]))
                          : (a(i) && (i = Ma(t, p, m)),
                            a((u = r(b.key) ? i[b.key] : k(b, t, p, m)))
                              ? c(b, s, e, f.elm, !1, n, y)
                              : Ca((l = t[u]), b)
                              ? (E(l, b, s, n, y), (t[u] = void 0), T && d.insertBefore(e, l.elm, f.elm))
                              : c(b, s, e, f.elm, !1, n, y),
                            (b = n[++y]));
                      p > m ? R(e, a(n[h + 1]) ? null : n[h + 1].elm, n, y, h, s) : y > h && _(t, p, m);
                    })(p, f, v, n, l)
                  : r(v)
                  ? (r(e.text) && d.setTextContent(p, ''), R(p, null, v, 0, v.length - 1, n))
                  : r(f)
                  ? _(f, 0, f.length - 1)
                  : r(e.text) && d.setTextContent(p, '')
                : e.text !== t.text && d.setTextContent(p, t.text),
                r(m) && r((y = m.hook)) && r((y = y.postpatch)) && y(e, t);
            }
          }
        }
        function A(e, t, n) {
          if (s(n) && r(e.parent)) e.parent.data.pendingInsert = t;
          else for (var a = 0; a < t.length; ++a) t[a].data.hook.insert(t[a]);
        }
        var x = f('attrs,class,staticClass,staticStyle,key');
        function I(e, t, n, a) {
          var o,
            i = t.tag,
            u = t.data,
            l = t.children;
          if (((a = a || (u && u.pre)), (t.elm = e), s(t.isComment) && r(t.asyncFactory)))
            return (t.isAsyncPlaceholder = !0), !0;
          if (r(u) && (r((o = u.hook)) && r((o = o.init)) && o(t, !0), r((o = t.componentInstance))))
            return y(t, n), !0;
          if (r(i)) {
            if (r(l))
              if (e.hasChildNodes())
                if (r((o = u)) && r((o = o.domProps)) && r((o = o.innerHTML))) {
                  if (o !== e.innerHTML) return !1;
                } else {
                  for (var d = !0, p = e.firstChild, c = 0; c < l.length; c++) {
                    if (!p || !I(p, l[c], n, a)) {
                      d = !1;
                      break;
                    }
                    p = p.nextSibling;
                  }
                  if (!d || p) return !1;
                }
              else v(t, l, n);
            if (r(u)) {
              var m = !1;
              for (var f in u)
                if (!x(f)) {
                  (m = !0), b(t, n);
                  break;
                }
              !m && u.class && pn(u.class);
            }
          } else e.data !== t.text && (e.data = t.text);
          return !0;
        }
        return function (e, t, n, o) {
          if (!a(t)) {
            var i,
              l = !1,
              p = [];
            if (a(e)) (l = !0), c(t, p);
            else {
              var y = r(e.nodeType);
              if (!y && Ca(e, t)) E(e, t, p, null, null, o);
              else {
                if (y) {
                  if ((1 === e.nodeType && e.hasAttribute(j) && (e.removeAttribute(j), (n = !0)), s(n) && I(e, t, p)))
                    return A(t, p, !0), e;
                  (i = e), (e = new de(d.tagName(i).toLowerCase(), {}, [], void 0, i));
                }
                var m = e.elm,
                  f = d.parentNode(m);
                if ((c(t, p, m._leaveCb ? null : f, d.nextSibling(m)), r(t.parent)))
                  for (var v = t.parent, b = h(t); v; ) {
                    for (var g = 0; g < u.destroy.length; ++g) u.destroy[g](v);
                    if (((v.elm = t.elm), b)) {
                      for (var R = 0; R < u.create.length; ++R) u.create[R](xa, v);
                      var w = v.data.hook.insert;
                      if (w.merged) for (var k = 1; k < w.fns.length; k++) w.fns[k]();
                    } else Ea(v);
                    v = v.parent;
                  }
                r(f) ? _([e], 0, 0) : r(e.tag) && T(e);
              }
            }
            return A(t, p, l), t.elm;
          }
          r(e) && T(e);
        };
      })({
        nodeOps: wa,
        modules: [
          Pa,
          Ja,
          xr,
          Mr,
          Pr,
          H
            ? {
                create: ys,
                activate: ys,
                remove: function (e, t) {
                  !0 !== e.data.show ? ds(e, t) : t();
                },
              }
            : {},
        ].concat(ja),
      });
      J &&
        document.addEventListener('selectionchange', function () {
          var e = document.activeElement;
          e && e.vmodel && _s(e, 'input');
        });
      var fs = {
        inserted: function (e, t, n, a) {
          'select' === n.tag
            ? (a.elm && !a.elm._vOptions
                ? Pe(n, 'postpatch', function () {
                    fs.componentUpdated(e, t, n);
                  })
                : vs(e, t, n.context),
              (e._vOptions = [].map.call(e.options, gs)))
            : ('textarea' === n.tag || Ta(e.type)) &&
              ((e._vModifiers = t.modifiers),
              t.modifiers.lazy ||
                (e.addEventListener('compositionstart', Rs),
                e.addEventListener('compositionend', Ts),
                e.addEventListener('change', Ts),
                J && (e.vmodel = !0)));
        },
        componentUpdated: function (e, t, n) {
          if ('select' === n.tag) {
            vs(e, t, n.context);
            var a = e._vOptions,
              r = (e._vOptions = [].map.call(e.options, gs));
            r.some(function (e, t) {
              return !L(e, a[t]);
            }) &&
              (e.multiple
                ? t.value.some(function (e) {
                    return bs(e, r);
                  })
                : t.value !== t.oldValue && bs(t.value, r)) &&
              _s(e, 'change');
          }
        },
      };
      function vs(e, t, n) {
        hs(e, t),
          (W || Z) &&
            setTimeout(function () {
              hs(e, t);
            }, 0);
      }
      function hs(e, t, n) {
        var a = t.value,
          r = e.multiple;
        if (!r || Array.isArray(a)) {
          for (var s, o, i = 0, u = e.options.length; i < u; i++)
            if (((o = e.options[i]), r)) (s = N(a, gs(o)) > -1), o.selected !== s && (o.selected = s);
            else if (L(gs(o), a)) return void (e.selectedIndex !== i && (e.selectedIndex = i));
          r || (e.selectedIndex = -1);
        }
      }
      function bs(e, t) {
        return t.every(function (t) {
          return !L(t, e);
        });
      }
      function gs(e) {
        return '_value' in e ? e._value : e.value;
      }
      function Rs(e) {
        e.target.composing = !0;
      }
      function Ts(e) {
        e.target.composing && ((e.target.composing = !1), _s(e.target, 'input'));
      }
      function _s(e, t) {
        var n = document.createEvent('HTMLEvents');
        n.initEvent(t, !0, !0), e.dispatchEvent(n);
      }
      function ws(e) {
        return !e.componentInstance || (e.data && e.data.transition) ? e : ws(e.componentInstance._vnode);
      }
      var ks = {
          model: fs,
          show: {
            bind: function (e, t, n) {
              var a = t.value,
                r = (n = ws(n)).data && n.data.transition,
                s = (e.__vOriginalDisplay = 'none' === e.style.display ? '' : e.style.display);
              a && r
                ? ((n.data.show = !0),
                  ls(n, function () {
                    e.style.display = s;
                  }))
                : (e.style.display = a ? s : 'none');
            },
            update: function (e, t, n) {
              var a = t.value;
              !a != !t.oldValue &&
                ((n = ws(n)).data && n.data.transition
                  ? ((n.data.show = !0),
                    a
                      ? ls(n, function () {
                          e.style.display = e.__vOriginalDisplay;
                        })
                      : ds(n, function () {
                          e.style.display = 'none';
                        }))
                  : (e.style.display = a ? e.__vOriginalDisplay : 'none'));
            },
            unbind: function (e, t, n, a, r) {
              r || (e.style.display = e.__vOriginalDisplay);
            },
          },
        },
        Es = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object],
        };
      function As(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options.abstract ? As(wt(t.children)) : e;
      }
      function xs(e) {
        var t = {},
          n = e.$options;
        for (var a in n.propsData) t[a] = e[a];
        var r = n._parentListeners;
        for (var a in r) t[w(a)] = r[a];
        return t;
      }
      function Is(e, t) {
        if (/\d-keep-alive$/.test(t.tag)) return e('keep-alive', { props: t.componentOptions.propsData });
      }
      var Cs = function (e) {
          return e.tag || yt(e);
        },
        Ms = function (e) {
          return 'show' === e.name;
        },
        Ss = {
          name: 'transition',
          props: Es,
          abstract: !0,
          render: function (e) {
            var t = this,
              n = this.$slots.default;
            if (n && (n = n.filter(Cs)).length) {
              var a = this.mode,
                r = n[0];
              if (
                (function (e) {
                  for (; (e = e.parent); ) if (e.data.transition) return !0;
                })(this.$vnode)
              )
                return r;
              var s = As(r);
              if (!s) return r;
              if (this._leaving) return Is(e, r);
              var i = '__transition-'.concat(this._uid, '-');
              s.key =
                null == s.key
                  ? s.isComment
                    ? i + 'comment'
                    : i + s.tag
                  : o(s.key)
                  ? 0 === String(s.key).indexOf(i)
                    ? s.key
                    : i + s.key
                  : s.key;
              var u = ((s.data || (s.data = {})).transition = xs(this)),
                l = this._vnode,
                d = As(l);
              if (
                (s.data.directives && s.data.directives.some(Ms) && (s.data.show = !0),
                d &&
                  d.data &&
                  !(function (e, t) {
                    return t.key === e.key && t.tag === e.tag;
                  })(s, d) &&
                  !yt(d) &&
                  (!d.componentInstance || !d.componentInstance._vnode.isComment))
              ) {
                var p = (d.data.transition = C({}, u));
                if ('out-in' === a)
                  return (
                    (this._leaving = !0),
                    Pe(p, 'afterLeave', function () {
                      (t._leaving = !1), t.$forceUpdate();
                    }),
                    Is(e, r)
                  );
                if ('in-out' === a) {
                  if (yt(s)) return l;
                  var c,
                    y = function () {
                      c();
                    };
                  Pe(u, 'afterEnter', y),
                    Pe(u, 'enterCancelled', y),
                    Pe(p, 'delayLeave', function (e) {
                      c = e;
                    });
                }
              }
              return r;
            }
          },
        },
        Os = C({ tag: String, moveClass: String }, Es);
      delete Os.mode;
      var $s = {
        props: Os,
        beforeMount: function () {
          var e = this,
            t = this._update;
          this._update = function (n, a) {
            var r = Ct(e);
            e.__patch__(e._vnode, e.kept, !1, !0), (e._vnode = e.kept), r(), t.call(e, n, a);
          };
        },
        render: function (e) {
          for (
            var t = this.tag || this.$vnode.data.tag || 'span',
              n = Object.create(null),
              a = (this.prevChildren = this.children),
              r = this.$slots.default || [],
              s = (this.children = []),
              o = xs(this),
              i = 0;
            i < r.length;
            i++
          )
            (d = r[i]).tag &&
              null != d.key &&
              0 !== String(d.key).indexOf('__vlist') &&
              (s.push(d), (n[d.key] = d), ((d.data || (d.data = {})).transition = o));
          if (a) {
            var u = [],
              l = [];
            for (i = 0; i < a.length; i++) {
              var d;
              ((d = a[i]).data.transition = o),
                (d.data.pos = d.elm.getBoundingClientRect()),
                n[d.key] ? u.push(d) : l.push(d);
            }
            (this.kept = e(t, null, u)), (this.removed = l);
          }
          return e(t, null, s);
        },
        updated: function () {
          var e = this.prevChildren,
            t = this.moveClass || (this.name || 'v') + '-move';
          e.length &&
            this.hasMove(e[0].elm, t) &&
            (e.forEach(Ls),
            e.forEach(Ns),
            e.forEach(Fs),
            (this._reflow = document.body.offsetHeight),
            e.forEach(function (e) {
              if (e.data.moved) {
                var n = e.elm,
                  a = n.style;
                ns(n, t),
                  (a.transform = a.WebkitTransform = a.transitionDuration = ''),
                  n.addEventListener(
                    Yr,
                    (n._moveCb = function e(a) {
                      (a && a.target !== n) ||
                        (a && !/transform$/.test(a.propertyName)) ||
                        (n.removeEventListener(Yr, e), (n._moveCb = null), as(n, t));
                    }),
                  );
              }
            }));
        },
        methods: {
          hasMove: function (e, t) {
            if (!Kr) return !1;
            if (this._hasMove) return this._hasMove;
            var n = e.cloneNode();
            e._transitionClasses &&
              e._transitionClasses.forEach(function (e) {
                Vr(n, e);
              }),
              Br(n, t),
              (n.style.display = 'none'),
              this.$el.appendChild(n);
            var a = os(n);
            return this.$el.removeChild(n), (this._hasMove = a.hasTransform);
          },
        },
      };
      function Ls(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
      }
      function Ns(e) {
        e.data.newPos = e.elm.getBoundingClientRect();
      }
      function Fs(e) {
        var t = e.data.pos,
          n = e.data.newPos,
          a = t.left - n.left,
          r = t.top - n.top;
        if (a || r) {
          e.data.moved = !0;
          var s = e.elm.style;
          (s.transform = s.WebkitTransform = 'translate('.concat(a, 'px,').concat(r, 'px)')),
            (s.transitionDuration = '0s');
        }
      }
      var js = { Transition: Ss, TransitionGroup: $s };
      (Wn.config.mustUseProp = aa),
        (Wn.config.isReservedTag = ba),
        (Wn.config.isReservedAttr = ta),
        (Wn.config.getTagNamespace = ga),
        (Wn.config.isUnknownElement = function (e) {
          if (!H) return !0;
          if (ba(e)) return !1;
          if (((e = e.toLowerCase()), null != Ra[e])) return Ra[e];
          var t = document.createElement(e);
          return e.indexOf('-') > -1
            ? (Ra[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement)
            : (Ra[e] = /HTMLUnknownElement/.test(t.toString()));
        }),
        C(Wn.options.directives, ks),
        C(Wn.options.components, js),
        (Wn.prototype.__patch__ = H ? ms : S),
        (Wn.prototype.$mount = function (e, t) {
          return (function (e, t, n) {
            var a;
            (e.$el = t),
              e.$options.render || (e.$options.render = pe),
              $t(e, 'beforeMount'),
              (a = function () {
                e._update(e._render(), n);
              }),
              new mn(
                e,
                a,
                S,
                {
                  before: function () {
                    e._isMounted && !e._isDestroyed && $t(e, 'beforeUpdate');
                  },
                },
                !0,
              ),
              (n = !1);
            var r = e._preWatchers;
            if (r) for (var s = 0; s < r.length; s++) r[s].run();
            return null == e.$vnode && ((e._isMounted = !0), $t(e, 'mounted')), e;
          })(this, (e = e && H ? _a(e) : void 0), t);
        }),
        H &&
          setTimeout(function () {
            U.devtools && re && re.emit('init', Wn);
          }, 0);
      var Gs,
        Ds = /\{\{((?:.|\r?\n)+?)\}\}/g,
        Us = /[-.*+?^${}()|[\]\/\\]/g,
        Ps = T(function (e) {
          var t = e[0].replace(Us, '\\$&'),
            n = e[1].replace(Us, '\\$&');
          return new RegExp(t + '((?:.|\\n)+?)' + n, 'g');
        }),
        qs = {
          staticKeys: ['staticClass'],
          transformNode: function (e, t) {
            t.warn;
            var n = ur(e, 'class');
            n && (e.staticClass = JSON.stringify(n.replace(/\s+/g, ' ').trim()));
            var a = ir(e, 'class', !1);
            a && (e.classBinding = a);
          },
          genData: function (e) {
            var t = '';
            return (
              e.staticClass && (t += 'staticClass:'.concat(e.staticClass, ',')),
              e.classBinding && (t += 'class:'.concat(e.classBinding, ',')),
              t
            );
          },
        },
        Bs = {
          staticKeys: ['staticStyle'],
          transformNode: function (e, t) {
            t.warn;
            var n = ur(e, 'style');
            n && (e.staticStyle = JSON.stringify(Sr(n)));
            var a = ir(e, 'style', !1);
            a && (e.styleBinding = a);
          },
          genData: function (e) {
            var t = '';
            return (
              e.staticStyle && (t += 'staticStyle:'.concat(e.staticStyle, ',')),
              e.styleBinding && (t += 'style:('.concat(e.styleBinding, '),')),
              t
            );
          },
        },
        Vs = f('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr'),
        zs = f('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'),
        Hs = f(
          'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track',
        ),
        Ks = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Ws = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Js = '[a-zA-Z_][\\-\\.0-9_a-zA-Z'.concat(P.source, ']*'),
        Zs = '((?:'.concat(Js, '\\:)?').concat(Js, ')'),
        Ys = new RegExp('^<'.concat(Zs)),
        Xs = /^\s*(\/?)>/,
        Qs = new RegExp('^<\\/'.concat(Zs, '[^>]*>')),
        eo = /^<!DOCTYPE [^>]+>/i,
        to = /^<!\--/,
        no = /^<!\[/,
        ao = f('script,style,textarea', !0),
        ro = {},
        so = { '&lt;': '<', '&gt;': '>', '&quot;': '"', '&amp;': '&', '&#10;': '\n', '&#9;': '\t', '&#39;': "'" },
        oo = /&(?:lt|gt|quot|amp|#39);/g,
        io = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        uo = f('pre,textarea', !0),
        lo = function (e, t) {
          return e && uo(e) && '\n' === t[0];
        };
      function po(e, t) {
        var n = t ? io : oo;
        return e.replace(n, function (e) {
          return so[e];
        });
      }
      var co,
        yo,
        mo,
        fo,
        vo,
        ho,
        bo,
        go,
        Ro = /^@|^v-on:/,
        To = /^v-|^@|^:|^#/,
        _o = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        wo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        ko = /^\(|\)$/g,
        Eo = /^\[.*\]$/,
        Ao = /:(.*)$/,
        xo = /^:|^\.|^v-bind:/,
        Io = /\.[^.\]]+(?=[^\]]*$)/g,
        Co = /^v-slot(:|$)|^#/,
        Mo = /[\r\n]/,
        So = /[ \f\t\r\n]+/g,
        Oo = T(function (e) {
          return ((Gs = Gs || document.createElement('div')).innerHTML = e), Gs.textContent;
        }),
        $o = '_empty_';
      function Lo(e, t, n) {
        return { type: 1, tag: e, attrsList: t, attrsMap: Po(t), rawAttrsMap: {}, parent: n, children: [] };
      }
      function No(e, t) {
        (co = t.warn || Qa), (ho = t.isPreTag || O), (bo = t.mustUseProp || O), (go = t.getTagNamespace || O);
        t.isReservedTag;
        (mo = er(t.modules, 'transformNode')),
          (fo = er(t.modules, 'preTransformNode')),
          (vo = er(t.modules, 'postTransformNode')),
          (yo = t.delimiters);
        var n,
          a,
          r = [],
          s = !1 !== t.preserveWhitespace,
          o = t.whitespace,
          i = !1,
          u = !1;
        function l(e) {
          if (
            (d(e),
            i || e.processed || (e = Fo(e, t)),
            r.length || e === n || (n.if && (e.elseif || e.else) && Go(n, { exp: e.elseif, block: e })),
            a && !e.forbidden)
          )
            if (e.elseif || e.else)
              (o = e),
                (l = (function (e) {
                  for (var t = e.length; t--; ) {
                    if (1 === e[t].type) return e[t];
                    e.pop();
                  }
                })(a.children)),
                l && l.if && Go(l, { exp: o.elseif, block: o });
            else {
              if (e.slotScope) {
                var s = e.slotTarget || '"default"';
                (a.scopedSlots || (a.scopedSlots = {}))[s] = e;
              }
              a.children.push(e), (e.parent = a);
            }
          var o, l;
          (e.children = e.children.filter(function (e) {
            return !e.slotScope;
          })),
            d(e),
            e.pre && (i = !1),
            ho(e.tag) && (u = !1);
          for (var p = 0; p < vo.length; p++) vo[p](e, t);
        }
        function d(e) {
          if (!u)
            for (var t = void 0; (t = e.children[e.children.length - 1]) && 3 === t.type && ' ' === t.text; )
              e.children.pop();
        }
        return (
          (function (e, t) {
            for (
              var n,
                a,
                r = [],
                s = t.expectHTML,
                o = t.isUnaryTag || O,
                i = t.canBeLeftOpenTag || O,
                u = 0,
                l = function () {
                  if (((n = e), a && ao(a))) {
                    var l = 0,
                      c = a.toLowerCase(),
                      y = ro[c] || (ro[c] = new RegExp('([\\s\\S]*?)(</' + c + '[^>]*>)', 'i'));
                    (_ = e.replace(y, function (e, n, a) {
                      return (
                        (l = a.length),
                        ao(c) ||
                          'noscript' === c ||
                          (n = n.replace(/<!\--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1')),
                        lo(c, n) && (n = n.slice(1)),
                        t.chars && t.chars(n),
                        ''
                      );
                    })),
                      (u += e.length - _.length),
                      (e = _),
                      p(c, u - l, u);
                  } else {
                    var m = e.indexOf('<');
                    if (0 === m) {
                      if (to.test(e)) {
                        var f = e.indexOf('--\x3e');
                        if (f >= 0)
                          return (
                            t.shouldKeepComment && t.comment && t.comment(e.substring(4, f), u, u + f + 3),
                            d(f + 3),
                            'continue'
                          );
                      }
                      if (no.test(e)) {
                        var v = e.indexOf(']>');
                        if (v >= 0) return d(v + 2), 'continue';
                      }
                      var h = e.match(eo);
                      if (h) return d(h[0].length), 'continue';
                      var b = e.match(Qs);
                      if (b) {
                        var g = u;
                        return d(b[0].length), p(b[1], g, u), 'continue';
                      }
                      var R = (function () {
                        var t = e.match(Ys);
                        if (t) {
                          var n = { tagName: t[1], attrs: [], start: u };
                          d(t[0].length);
                          for (var a = void 0, r = void 0; !(a = e.match(Xs)) && (r = e.match(Ws) || e.match(Ks)); )
                            (r.start = u), d(r[0].length), (r.end = u), n.attrs.push(r);
                          if (a) return (n.unarySlash = a[1]), d(a[0].length), (n.end = u), n;
                        }
                      })();
                      if (R)
                        return (
                          (function (e) {
                            var n = e.tagName,
                              u = e.unarySlash;
                            s && ('p' === a && Hs(n) && p(a), i(n) && a === n && p(n));
                            for (var l = o(n) || !!u, d = e.attrs.length, c = new Array(d), y = 0; y < d; y++) {
                              var m = e.attrs[y],
                                f = m[3] || m[4] || m[5] || '',
                                v =
                                  'a' === n && 'href' === m[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                              c[y] = { name: m[1], value: po(f, v) };
                            }
                            l ||
                              (r.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: c, start: e.start, end: e.end }),
                              (a = n)),
                              t.start && t.start(n, c, l, e.start, e.end);
                          })(R),
                          lo(R.tagName, e) && d(1),
                          'continue'
                        );
                    }
                    var T = void 0,
                      _ = void 0,
                      w = void 0;
                    if (m >= 0) {
                      for (
                        _ = e.slice(m);
                        !(Qs.test(_) || Ys.test(_) || to.test(_) || no.test(_) || (w = _.indexOf('<', 1)) < 0);

                      )
                        (m += w), (_ = e.slice(m));
                      T = e.substring(0, m);
                    }
                    m < 0 && (T = e), T && d(T.length), t.chars && T && t.chars(T, u - T.length, u);
                  }
                  if (e === n) return t.chars && t.chars(e), 'break';
                };
              e && 'break' !== l();

            );
            function d(t) {
              (u += t), (e = e.substring(t));
            }
            function p(e, n, s) {
              var o, i;
              if ((null == n && (n = u), null == s && (s = u), e))
                for (i = e.toLowerCase(), o = r.length - 1; o >= 0 && r[o].lowerCasedTag !== i; o--);
              else o = 0;
              if (o >= 0) {
                for (var l = r.length - 1; l >= o; l--) t.end && t.end(r[l].tag, n, s);
                (r.length = o), (a = o && r[o - 1].tag);
              } else
                'br' === i
                  ? t.start && t.start(e, [], !0, n, s)
                  : 'p' === i && (t.start && t.start(e, [], !1, n, s), t.end && t.end(e, n, s));
            }
            p();
          })(e, {
            warn: co,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
            shouldKeepComment: t.comments,
            outputSourceRange: t.outputSourceRange,
            start: function (e, s, o, d, p) {
              var c = (a && a.ns) || go(e);
              W &&
                'svg' === c &&
                (s = (function (e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var a = e[n];
                    qo.test(a.name) || ((a.name = a.name.replace(Bo, '')), t.push(a));
                  }
                  return t;
                })(s));
              var y,
                m = Lo(e, s, a);
              c && (m.ns = c),
                ('style' !== (y = m).tag &&
                  ('script' !== y.tag || (y.attrsMap.type && 'text/javascript' !== y.attrsMap.type))) ||
                  ae() ||
                  (m.forbidden = !0);
              for (var f = 0; f < fo.length; f++) m = fo[f](m, t) || m;
              i ||
                ((function (e) {
                  null != ur(e, 'v-pre') && (e.pre = !0);
                })(m),
                m.pre && (i = !0)),
                ho(m.tag) && (u = !0),
                i
                  ? (function (e) {
                      var t = e.attrsList,
                        n = t.length;
                      if (n)
                        for (var a = (e.attrs = new Array(n)), r = 0; r < n; r++)
                          (a[r] = { name: t[r].name, value: JSON.stringify(t[r].value) }),
                            null != t[r].start && ((a[r].start = t[r].start), (a[r].end = t[r].end));
                      else e.pre || (e.plain = !0);
                    })(m)
                  : m.processed ||
                    (jo(m),
                    (function (e) {
                      var t = ur(e, 'v-if');
                      if (t) (e.if = t), Go(e, { exp: t, block: e });
                      else {
                        null != ur(e, 'v-else') && (e.else = !0);
                        var n = ur(e, 'v-else-if');
                        n && (e.elseif = n);
                      }
                    })(m),
                    (function (e) {
                      null != ur(e, 'v-once') && (e.once = !0);
                    })(m)),
                n || (n = m),
                o ? l(m) : ((a = m), r.push(m));
            },
            end: function (e, t, n) {
              var s = r[r.length - 1];
              (r.length -= 1), (a = r[r.length - 1]), l(s);
            },
            chars: function (e, t, n) {
              if (a && (!W || 'textarea' !== a.tag || a.attrsMap.placeholder !== e)) {
                var r,
                  l = a.children;
                if (
                  (e =
                    u || e.trim()
                      ? 'script' === (r = a).tag || 'style' === r.tag
                        ? e
                        : Oo(e)
                      : l.length
                      ? o
                        ? 'condense' === o && Mo.test(e)
                          ? ''
                          : ' '
                        : s
                        ? ' '
                        : ''
                      : '')
                ) {
                  u || 'condense' !== o || (e = e.replace(So, ' '));
                  var d = void 0,
                    p = void 0;
                  !i &&
                  ' ' !== e &&
                  (d = (function (e, t) {
                    var n = t ? Ps(t) : Ds;
                    if (n.test(e)) {
                      for (var a, r, s, o = [], i = [], u = (n.lastIndex = 0); (a = n.exec(e)); ) {
                        (r = a.index) > u && (i.push((s = e.slice(u, r))), o.push(JSON.stringify(s)));
                        var l = Ya(a[1].trim());
                        o.push('_s('.concat(l, ')')), i.push({ '@binding': l }), (u = r + a[0].length);
                      }
                      return (
                        u < e.length && (i.push((s = e.slice(u))), o.push(JSON.stringify(s))),
                        { expression: o.join('+'), tokens: i }
                      );
                    }
                  })(e, yo))
                    ? (p = { type: 2, expression: d.expression, tokens: d.tokens, text: e })
                    : (' ' === e && l.length && ' ' === l[l.length - 1].text) || (p = { type: 3, text: e }),
                    p && l.push(p);
                }
              }
            },
            comment: function (e, t, n) {
              if (a) {
                var r = { type: 3, text: e, isComment: !0 };
                a.children.push(r);
              }
            },
          }),
          n
        );
      }
      function Fo(e, t) {
        var n;
        !(function (e) {
          var t = ir(e, 'key');
          t && (e.key = t);
        })(e),
          (e.plain = !e.key && !e.scopedSlots && !e.attrsList.length),
          (function (e) {
            var t = ir(e, 'ref');
            t &&
              ((e.ref = t),
              (e.refInFor = (function (e) {
                for (var t = e; t; ) {
                  if (void 0 !== t.for) return !0;
                  t = t.parent;
                }
                return !1;
              })(e)));
          })(e),
          (function (e) {
            var t;
            'template' === e.tag
              ? ((t = ur(e, 'scope')), (e.slotScope = t || ur(e, 'slot-scope')))
              : (t = ur(e, 'slot-scope')) && (e.slotScope = t);
            var n,
              a = ir(e, 'slot');
            if (
              (a &&
                ((e.slotTarget = '""' === a ? '"default"' : a),
                (e.slotTargetDynamic = !(!e.attrsMap[':slot'] && !e.attrsMap['v-bind:slot'])),
                'template' === e.tag ||
                  e.slotScope ||
                  nr(
                    e,
                    'slot',
                    a,
                    (function (e, t) {
                      return e.rawAttrsMap[':' + t] || e.rawAttrsMap['v-bind:' + t] || e.rawAttrsMap[t];
                    })(e, 'slot'),
                  )),
              'template' === e.tag)
            ) {
              if ((n = lr(e, Co))) {
                var r = Do(n),
                  s = r.name,
                  o = r.dynamic;
                (e.slotTarget = s), (e.slotTargetDynamic = o), (e.slotScope = n.value || $o);
              }
            } else if ((n = lr(e, Co))) {
              var i = e.scopedSlots || (e.scopedSlots = {}),
                u = Do(n),
                l = u.name,
                d = ((o = u.dynamic), (i[l] = Lo('template', [], e)));
              (d.slotTarget = l),
                (d.slotTargetDynamic = o),
                (d.children = e.children.filter(function (e) {
                  if (!e.slotScope) return (e.parent = d), !0;
                })),
                (d.slotScope = n.value || $o),
                (e.children = []),
                (e.plain = !1);
            }
          })(e),
          'slot' === (n = e).tag && (n.slotName = ir(n, 'name')),
          (function (e) {
            var t;
            (t = ir(e, 'is')) && (e.component = t), null != ur(e, 'inline-template') && (e.inlineTemplate = !0);
          })(e);
        for (var a = 0; a < mo.length; a++) e = mo[a](e, t) || e;
        return (
          (function (e) {
            var t,
              n,
              a,
              r,
              s,
              o,
              i,
              u,
              l = e.attrsList;
            for (t = 0, n = l.length; t < n; t++)
              if (((a = r = l[t].name), (s = l[t].value), To.test(a)))
                if (((e.hasBindings = !0), (o = Uo(a.replace(To, ''))) && (a = a.replace(Io, '')), xo.test(a)))
                  (a = a.replace(xo, '')),
                    (s = Ya(s)),
                    (u = Eo.test(a)) && (a = a.slice(1, -1)),
                    o &&
                      (o.prop && !u && 'innerHtml' === (a = w(a)) && (a = 'innerHTML'),
                      o.camel && !u && (a = w(a)),
                      o.sync &&
                        ((i = cr(s, '$event')),
                        u
                          ? or(e, '"update:"+('.concat(a, ')'), i, null, !1, 0, l[t], !0)
                          : (or(e, 'update:'.concat(w(a)), i, null, !1, 0, l[t]),
                            A(a) !== w(a) && or(e, 'update:'.concat(A(a)), i, null, !1, 0, l[t])))),
                    (o && o.prop) || (!e.component && bo(e.tag, e.attrsMap.type, a))
                      ? tr(e, a, s, l[t], u)
                      : nr(e, a, s, l[t], u);
                else if (Ro.test(a))
                  (a = a.replace(Ro, '')), (u = Eo.test(a)) && (a = a.slice(1, -1)), or(e, a, s, o, !1, 0, l[t], u);
                else {
                  var d = (a = a.replace(To, '')).match(Ao),
                    p = d && d[1];
                  (u = !1),
                    p && ((a = a.slice(0, -(p.length + 1))), Eo.test(p) && ((p = p.slice(1, -1)), (u = !0))),
                    rr(e, a, r, s, p, u, o, l[t]);
                }
              else
                nr(e, a, JSON.stringify(s), l[t]),
                  !e.component && 'muted' === a && bo(e.tag, e.attrsMap.type, a) && tr(e, a, 'true', l[t]);
          })(e),
          e
        );
      }
      function jo(e) {
        var t;
        if ((t = ur(e, 'v-for'))) {
          var n = (function (e) {
            var t = e.match(_o);
            if (t) {
              var n = {};
              n.for = t[2].trim();
              var a = t[1].trim().replace(ko, ''),
                r = a.match(wo);
              return (
                r
                  ? ((n.alias = a.replace(wo, '').trim()),
                    (n.iterator1 = r[1].trim()),
                    r[2] && (n.iterator2 = r[2].trim()))
                  : (n.alias = a),
                n
              );
            }
          })(t);
          n && C(e, n);
        }
      }
      function Go(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
      }
      function Do(e) {
        var t = e.name.replace(Co, '');
        return (
          t || ('#' !== e.name[0] && (t = 'default')),
          Eo.test(t) ? { name: t.slice(1, -1), dynamic: !0 } : { name: '"'.concat(t, '"'), dynamic: !1 }
        );
      }
      function Uo(e) {
        var t = e.match(Io);
        if (t) {
          var n = {};
          return (
            t.forEach(function (e) {
              n[e.slice(1)] = !0;
            }),
            n
          );
        }
      }
      function Po(e) {
        for (var t = {}, n = 0, a = e.length; n < a; n++) t[e[n].name] = e[n].value;
        return t;
      }
      var qo = /^xmlns:NS\d+/,
        Bo = /^NS\d+:/;
      function Vo(e) {
        return Lo(e.tag, e.attrsList.slice(), e.parent);
      }
      var zo,
        Ho,
        Ko = [
          qs,
          Bs,
          {
            preTransformNode: function (e, t) {
              if ('input' === e.tag) {
                var n = e.attrsMap;
                if (!n['v-model']) return;
                var a = void 0;
                if (
                  ((n[':type'] || n['v-bind:type']) && (a = ir(e, 'type')),
                  n.type || a || !n['v-bind'] || (a = '('.concat(n['v-bind'], ').type')),
                  a)
                ) {
                  var r = ur(e, 'v-if', !0),
                    s = r ? '&&('.concat(r, ')') : '',
                    o = null != ur(e, 'v-else', !0),
                    i = ur(e, 'v-else-if', !0),
                    u = Vo(e);
                  jo(u),
                    ar(u, 'type', 'checkbox'),
                    Fo(u, t),
                    (u.processed = !0),
                    (u.if = '('.concat(a, ")==='checkbox'") + s),
                    Go(u, { exp: u.if, block: u });
                  var l = Vo(e);
                  ur(l, 'v-for', !0),
                    ar(l, 'type', 'radio'),
                    Fo(l, t),
                    Go(u, { exp: '('.concat(a, ")==='radio'") + s, block: l });
                  var d = Vo(e);
                  return (
                    ur(d, 'v-for', !0),
                    ar(d, ':type', a),
                    Fo(d, t),
                    Go(u, { exp: r, block: d }),
                    o ? (u.else = !0) : i && (u.elseif = i),
                    u
                  );
                }
              }
            },
          },
        ],
        Wo = {
          expectHTML: !0,
          modules: Ko,
          directives: {
            model: function (e, t, n) {
              var a = t.value,
                r = t.modifiers,
                s = e.tag,
                o = e.attrsMap.type;
              if (e.component) return pr(e, a, r), !1;
              if ('select' === s)
                !(function (e, t, n) {
                  var a = n && n.number,
                    r =
                      'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;' +
                      'return '.concat(a ? '_n(val)' : 'val', '})'),
                    s = 'var $$selectedVal = '.concat(r, ';');
                  or(
                    e,
                    'change',
                    (s = ''.concat(s, ' ').concat(cr(t, '$event.target.multiple ? $$selectedVal : $$selectedVal[0]'))),
                    null,
                    !0,
                  );
                })(e, a, r);
              else if ('input' === s && 'checkbox' === o)
                !(function (e, t, n) {
                  var a = n && n.number,
                    r = ir(e, 'value') || 'null',
                    s = ir(e, 'true-value') || 'true',
                    o = ir(e, 'false-value') || 'false';
                  tr(
                    e,
                    'checked',
                    'Array.isArray('.concat(t, ')') +
                      '?_i('.concat(t, ',').concat(r, ')>-1') +
                      ('true' === s ? ':('.concat(t, ')') : ':_q('.concat(t, ',').concat(s, ')')),
                  ),
                    or(
                      e,
                      'change',
                      'var $$a='.concat(t, ',') +
                        '$$el=$event.target,' +
                        '$$c=$$el.checked?('.concat(s, '):(').concat(o, ');') +
                        'if(Array.isArray($$a)){' +
                        'var $$v='.concat(a ? '_n(' + r + ')' : r, ',') +
                        '$$i=_i($$a,$$v);' +
                        'if($$el.checked){$$i<0&&('.concat(cr(t, '$$a.concat([$$v])'), ')}') +
                        'else{$$i>-1&&('.concat(cr(t, '$$a.slice(0,$$i).concat($$a.slice($$i+1))'), ')}') +
                        '}else{'.concat(cr(t, '$$c'), '}'),
                      null,
                      !0,
                    );
                })(e, a, r);
              else if ('input' === s && 'radio' === o)
                !(function (e, t, n) {
                  var a = n && n.number,
                    r = ir(e, 'value') || 'null';
                  (r = a ? '_n('.concat(r, ')') : r),
                    tr(e, 'checked', '_q('.concat(t, ',').concat(r, ')')),
                    or(e, 'change', cr(t, r), null, !0);
                })(e, a, r);
              else if ('input' === s || 'textarea' === s)
                !(function (e, t, n) {
                  var a = e.attrsMap.type,
                    r = n || {},
                    s = r.lazy,
                    o = r.number,
                    i = r.trim,
                    u = !s && 'range' !== a,
                    l = s ? 'change' : 'range' === a ? gr : 'input',
                    d = '$event.target.value';
                  i && (d = '$event.target.value.trim()'), o && (d = '_n('.concat(d, ')'));
                  var p = cr(t, d);
                  u && (p = 'if($event.target.composing)return;'.concat(p)),
                    tr(e, 'value', '('.concat(t, ')')),
                    or(e, l, p, null, !0),
                    (i || o) && or(e, 'blur', '$forceUpdate()');
                })(e, a, r);
              else if (!U.isReservedTag(s)) return pr(e, a, r), !1;
              return !0;
            },
            text: function (e, t) {
              t.value && tr(e, 'textContent', '_s('.concat(t.value, ')'), t);
            },
            html: function (e, t) {
              t.value && tr(e, 'innerHTML', '_s('.concat(t.value, ')'), t);
            },
          },
          isPreTag: function (e) {
            return 'pre' === e;
          },
          isUnaryTag: Vs,
          mustUseProp: aa,
          canBeLeftOpenTag: zs,
          isReservedTag: ba,
          getTagNamespace: ga,
          staticKeys: (function (e) {
            return e
              .reduce(function (e, t) {
                return e.concat(t.staticKeys || []);
              }, [])
              .join(',');
          })(Ko),
        },
        Jo = T(function (e) {
          return f(
            'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' + (e ? ',' + e : ''),
          );
        });
      function Zo(e, t) {
        e && ((zo = Jo(t.staticKeys || '')), (Ho = t.isReservedTag || O), Yo(e), Xo(e, !1));
      }
      function Yo(e) {
        if (
          ((e.static = (function (e) {
            return (
              2 !== e.type &&
              (3 === e.type ||
                !(
                  !e.pre &&
                  (e.hasBindings ||
                    e.if ||
                    e.for ||
                    v(e.tag) ||
                    !Ho(e.tag) ||
                    (function (e) {
                      for (; e.parent; ) {
                        if ('template' !== (e = e.parent).tag) return !1;
                        if (e.for) return !0;
                      }
                      return !1;
                    })(e) ||
                    !Object.keys(e).every(zo))
                ))
            );
          })(e)),
          1 === e.type)
        ) {
          if (!Ho(e.tag) && 'slot' !== e.tag && null == e.attrsMap['inline-template']) return;
          for (var t = 0, n = e.children.length; t < n; t++) {
            var a = e.children[t];
            Yo(a), a.static || (e.static = !1);
          }
          if (e.ifConditions)
            for (t = 1, n = e.ifConditions.length; t < n; t++) {
              var r = e.ifConditions[t].block;
              Yo(r), r.static || (e.static = !1);
            }
        }
      }
      function Xo(e, t) {
        if (1 === e.type) {
          if (
            ((e.static || e.once) && (e.staticInFor = t),
            e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type))
          )
            return void (e.staticRoot = !0);
          if (((e.staticRoot = !1), e.children))
            for (var n = 0, a = e.children.length; n < a; n++) Xo(e.children[n], t || !!e.for);
          if (e.ifConditions) for (n = 1, a = e.ifConditions.length; n < a; n++) Xo(e.ifConditions[n].block, t);
        }
      }
      var Qo = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
        ei = /\([^)]*?\);*$/,
        ti = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        ni = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
        ai = {
          esc: ['Esc', 'Escape'],
          tab: 'Tab',
          enter: 'Enter',
          space: [' ', 'Spacebar'],
          up: ['Up', 'ArrowUp'],
          left: ['Left', 'ArrowLeft'],
          right: ['Right', 'ArrowRight'],
          down: ['Down', 'ArrowDown'],
          delete: ['Backspace', 'Delete', 'Del'],
        },
        ri = function (e) {
          return 'if('.concat(e, ')return null;');
        },
        si = {
          stop: '$event.stopPropagation();',
          prevent: '$event.preventDefault();',
          self: ri('$event.target !== $event.currentTarget'),
          ctrl: ri('!$event.ctrlKey'),
          shift: ri('!$event.shiftKey'),
          alt: ri('!$event.altKey'),
          meta: ri('!$event.metaKey'),
          left: ri("'button' in $event && $event.button !== 0"),
          middle: ri("'button' in $event && $event.button !== 1"),
          right: ri("'button' in $event && $event.button !== 2"),
        };
      function oi(e, t) {
        var n = t ? 'nativeOn:' : 'on:',
          a = '',
          r = '';
        for (var s in e) {
          var o = ii(e[s]);
          e[s] && e[s].dynamic ? (r += ''.concat(s, ',').concat(o, ',')) : (a += '"'.concat(s, '":').concat(o, ','));
        }
        return (
          (a = '{'.concat(a.slice(0, -1), '}')), r ? n + '_d('.concat(a, ',[').concat(r.slice(0, -1), '])') : n + a
        );
      }
      function ii(e) {
        if (!e) return 'function(){}';
        if (Array.isArray(e))
          return '['.concat(
            e
              .map(function (e) {
                return ii(e);
              })
              .join(','),
            ']',
          );
        var t = ti.test(e.value),
          n = Qo.test(e.value),
          a = ti.test(e.value.replace(ei, ''));
        if (e.modifiers) {
          var r = '',
            s = '',
            o = [],
            i = function (t) {
              if (si[t]) (s += si[t]), ni[t] && o.push(t);
              else if ('exact' === t) {
                var n = e.modifiers;
                s += ri(
                  ['ctrl', 'shift', 'alt', 'meta']
                    .filter(function (e) {
                      return !n[e];
                    })
                    .map(function (e) {
                      return '$event.'.concat(e, 'Key');
                    })
                    .join('||'),
                );
              } else o.push(t);
            };
          for (var u in e.modifiers) i(u);
          o.length &&
            (r += (function (e) {
              return "if(!$event.type.indexOf('key')&&" + ''.concat(e.map(ui).join('&&'), ')return null;');
            })(o)),
            s && (r += s);
          var l = t
            ? 'return '.concat(e.value, '.apply(null, arguments)')
            : n
            ? 'return ('.concat(e.value, ').apply(null, arguments)')
            : a
            ? 'return '.concat(e.value)
            : e.value;
          return 'function($event){'.concat(r).concat(l, '}');
        }
        return t || n ? e.value : 'function($event){'.concat(a ? 'return '.concat(e.value) : e.value, '}');
      }
      function ui(e) {
        var t = parseInt(e, 10);
        if (t) return '$event.keyCode!=='.concat(t);
        var n = ni[e],
          a = ai[e];
        return (
          '_k($event.keyCode,' +
          ''.concat(JSON.stringify(e), ',') +
          ''.concat(JSON.stringify(n), ',') +
          '$event.key,' +
          ''.concat(JSON.stringify(a)) +
          ')'
        );
      }
      var li = {
          on: function (e, t) {
            e.wrapListeners = function (e) {
              return '_g('.concat(e, ',').concat(t.value, ')');
            };
          },
          bind: function (e, t) {
            e.wrapData = function (n) {
              return '_b('
                .concat(n, ",'")
                .concat(e.tag, "',")
                .concat(t.value, ',')
                .concat(t.modifiers && t.modifiers.prop ? 'true' : 'false')
                .concat(t.modifiers && t.modifiers.sync ? ',true' : '', ')');
            };
          },
          cloak: S,
        },
        di = function (e) {
          (this.options = e),
            (this.warn = e.warn || Qa),
            (this.transforms = er(e.modules, 'transformCode')),
            (this.dataGenFns = er(e.modules, 'genData')),
            (this.directives = C(C({}, li), e.directives));
          var t = e.isReservedTag || O;
          (this.maybeComponent = function (e) {
            return !!e.component || !t(e.tag);
          }),
            (this.onceId = 0),
            (this.staticRenderFns = []),
            (this.pre = !1);
        };
      function pi(e, t) {
        var n = new di(t),
          a = e ? ('script' === e.tag ? 'null' : ci(e, n)) : '_c("div")';
        return { render: 'with(this){return '.concat(a, '}'), staticRenderFns: n.staticRenderFns };
      }
      function ci(e, t) {
        if ((e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed)) return yi(e, t);
        if (e.once && !e.onceProcessed) return mi(e, t);
        if (e.for && !e.forProcessed) return hi(e, t);
        if (e.if && !e.ifProcessed) return fi(e, t);
        if ('template' !== e.tag || e.slotTarget || t.pre) {
          if ('slot' === e.tag)
            return (function (e, t) {
              var n = e.slotName || '"default"',
                a = Ti(e, t),
                r = '_t('.concat(n).concat(a ? ',function(){return '.concat(a, '}') : ''),
                s =
                  e.attrs || e.dynamicAttrs
                    ? ki(
                        (e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
                          return { name: w(e.name), value: e.value, dynamic: e.dynamic };
                        }),
                      )
                    : null,
                o = e.attrsMap['v-bind'];
              return (
                (!s && !o) || a || (r += ',null'),
                s && (r += ','.concat(s)),
                o && (r += ''.concat(s ? '' : ',null', ',').concat(o)),
                r + ')'
              );
            })(e, t);
          var n = void 0;
          if (e.component)
            n = (function (e, t, n) {
              var a = t.inlineTemplate ? null : Ti(t, n, !0);
              return '_c('
                .concat(e, ',')
                .concat(bi(t, n))
                .concat(a ? ','.concat(a) : '', ')');
            })(e.component, e, t);
          else {
            var a = void 0,
              r = t.maybeComponent(e);
            (!e.plain || (e.pre && r)) && (a = bi(e, t));
            var s = void 0,
              o = t.options.bindings;
            r &&
              o &&
              !1 !== o.__isScriptSetup &&
              (s = (function (e, t) {
                var n = w(t),
                  a = k(n),
                  r = function (r) {
                    return e[t] === r ? t : e[n] === r ? n : e[a] === r ? a : void 0;
                  },
                  s = r('setup-const') || r('setup-reactive-const');
                if (s) return s;
                var o = r('setup-let') || r('setup-ref') || r('setup-maybe-ref');
                return o || void 0;
              })(o, e.tag)),
              s || (s = "'".concat(e.tag, "'"));
            var i = e.inlineTemplate ? null : Ti(e, t, !0);
            n = '_c('
              .concat(s)
              .concat(a ? ','.concat(a) : '')
              .concat(i ? ','.concat(i) : '', ')');
          }
          for (var u = 0; u < t.transforms.length; u++) n = t.transforms[u](e, n);
          return n;
        }
        return Ti(e, t) || 'void 0';
      }
      function yi(e, t) {
        e.staticProcessed = !0;
        var n = t.pre;
        return (
          e.pre && (t.pre = e.pre),
          t.staticRenderFns.push('with(this){return '.concat(ci(e, t), '}')),
          (t.pre = n),
          '_m('.concat(t.staticRenderFns.length - 1).concat(e.staticInFor ? ',true' : '', ')')
        );
      }
      function mi(e, t) {
        if (((e.onceProcessed = !0), e.if && !e.ifProcessed)) return fi(e, t);
        if (e.staticInFor) {
          for (var n = '', a = e.parent; a; ) {
            if (a.for) {
              n = a.key;
              break;
            }
            a = a.parent;
          }
          return n ? '_o('.concat(ci(e, t), ',').concat(t.onceId++, ',').concat(n, ')') : ci(e, t);
        }
        return yi(e, t);
      }
      function fi(e, t, n, a) {
        return (e.ifProcessed = !0), vi(e.ifConditions.slice(), t, n, a);
      }
      function vi(e, t, n, a) {
        if (!e.length) return a || '_e()';
        var r = e.shift();
        return r.exp ? '('.concat(r.exp, ')?').concat(s(r.block), ':').concat(vi(e, t, n, a)) : ''.concat(s(r.block));
        function s(e) {
          return n ? n(e, t) : e.once ? mi(e, t) : ci(e, t);
        }
      }
      function hi(e, t, n, a) {
        var r = e.for,
          s = e.alias,
          o = e.iterator1 ? ','.concat(e.iterator1) : '',
          i = e.iterator2 ? ','.concat(e.iterator2) : '';
        return (
          (e.forProcessed = !0),
          ''.concat(a || '_l', '((').concat(r, '),') +
            'function('.concat(s).concat(o).concat(i, '){') +
            'return '.concat((n || ci)(e, t)) +
            '})'
        );
      }
      function bi(e, t) {
        var n = '{',
          a = (function (e, t) {
            var n = e.directives;
            if (n) {
              var a,
                r,
                s,
                o,
                i = 'directives:[',
                u = !1;
              for (a = 0, r = n.length; a < r; a++) {
                (s = n[a]), (o = !0);
                var l = t.directives[s.name];
                l && (o = !!l(e, s, t.warn)),
                  o &&
                    ((u = !0),
                    (i += '{name:"'
                      .concat(s.name, '",rawName:"')
                      .concat(s.rawName, '"')
                      .concat(
                        s.value ? ',value:('.concat(s.value, '),expression:').concat(JSON.stringify(s.value)) : '',
                      )
                      .concat(s.arg ? ',arg:'.concat(s.isDynamicArg ? s.arg : '"'.concat(s.arg, '"')) : '')
                      .concat(s.modifiers ? ',modifiers:'.concat(JSON.stringify(s.modifiers)) : '', '},')));
              }
              return u ? i.slice(0, -1) + ']' : void 0;
            }
          })(e, t);
        a && (n += a + ','),
          e.key && (n += 'key:'.concat(e.key, ',')),
          e.ref && (n += 'ref:'.concat(e.ref, ',')),
          e.refInFor && (n += 'refInFor:true,'),
          e.pre && (n += 'pre:true,'),
          e.component && (n += 'tag:"'.concat(e.tag, '",'));
        for (var r = 0; r < t.dataGenFns.length; r++) n += t.dataGenFns[r](e);
        if (
          (e.attrs && (n += 'attrs:'.concat(ki(e.attrs), ',')),
          e.props && (n += 'domProps:'.concat(ki(e.props), ',')),
          e.events && (n += ''.concat(oi(e.events, !1), ',')),
          e.nativeEvents && (n += ''.concat(oi(e.nativeEvents, !0), ',')),
          e.slotTarget && !e.slotScope && (n += 'slot:'.concat(e.slotTarget, ',')),
          e.scopedSlots &&
            (n += ''.concat(
              (function (e, t, n) {
                var a =
                    e.for ||
                    Object.keys(t).some(function (e) {
                      var n = t[e];
                      return n.slotTargetDynamic || n.if || n.for || gi(n);
                    }),
                  r = !!e.if;
                if (!a)
                  for (var s = e.parent; s; ) {
                    if ((s.slotScope && s.slotScope !== $o) || s.for) {
                      a = !0;
                      break;
                    }
                    s.if && (r = !0), (s = s.parent);
                  }
                var o = Object.keys(t)
                  .map(function (e) {
                    return Ri(t[e], n);
                  })
                  .join(',');
                return 'scopedSlots:_u(['
                  .concat(o, ']')
                  .concat(a ? ',null,true' : '')
                  .concat(
                    !a && r
                      ? ',null,false,'.concat(
                          (function (e) {
                            for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
                            return t >>> 0;
                          })(o),
                        )
                      : '',
                    ')',
                  );
              })(e, e.scopedSlots, t),
              ',',
            )),
          e.model &&
            (n += 'model:{value:'
              .concat(e.model.value, ',callback:')
              .concat(e.model.callback, ',expression:')
              .concat(e.model.expression, '},')),
          e.inlineTemplate)
        ) {
          var s = (function (e, t) {
            var n = e.children[0];
            if (n && 1 === n.type) {
              var a = pi(n, t.options);
              return 'inlineTemplate:{render:function(){'.concat(a.render, '},staticRenderFns:[').concat(
                a.staticRenderFns
                  .map(function (e) {
                    return 'function(){'.concat(e, '}');
                  })
                  .join(','),
                ']}',
              );
            }
          })(e, t);
          s && (n += ''.concat(s, ','));
        }
        return (
          (n = n.replace(/,$/, '') + '}'),
          e.dynamicAttrs && (n = '_b('.concat(n, ',"').concat(e.tag, '",').concat(ki(e.dynamicAttrs), ')')),
          e.wrapData && (n = e.wrapData(n)),
          e.wrapListeners && (n = e.wrapListeners(n)),
          n
        );
      }
      function gi(e) {
        return 1 === e.type && ('slot' === e.tag || e.children.some(gi));
      }
      function Ri(e, t) {
        var n = e.attrsMap['slot-scope'];
        if (e.if && !e.ifProcessed && !n) return fi(e, t, Ri, 'null');
        if (e.for && !e.forProcessed) return hi(e, t, Ri);
        var a = e.slotScope === $o ? '' : String(e.slotScope),
          r =
            'function('.concat(a, '){') +
            'return '.concat(
              'template' === e.tag
                ? e.if && n
                  ? '('.concat(e.if, ')?').concat(Ti(e, t) || 'undefined', ':undefined')
                  : Ti(e, t) || 'undefined'
                : ci(e, t),
              '}',
            ),
          s = a ? '' : ',proxy:true';
        return '{key:'
          .concat(e.slotTarget || '"default"', ',fn:')
          .concat(r)
          .concat(s, '}');
      }
      function Ti(e, t, n, a, r) {
        var s = e.children;
        if (s.length) {
          var o = s[0];
          if (1 === s.length && o.for && 'template' !== o.tag && 'slot' !== o.tag) {
            var i = n ? (t.maybeComponent(o) ? ',1' : ',0') : '';
            return ''.concat((a || ci)(o, t)).concat(i);
          }
          var u = n
              ? (function (e, t) {
                  for (var n = 0, a = 0; a < e.length; a++) {
                    var r = e[a];
                    if (1 === r.type) {
                      if (
                        _i(r) ||
                        (r.ifConditions &&
                          r.ifConditions.some(function (e) {
                            return _i(e.block);
                          }))
                      ) {
                        n = 2;
                        break;
                      }
                      (t(r) ||
                        (r.ifConditions &&
                          r.ifConditions.some(function (e) {
                            return t(e.block);
                          }))) &&
                        (n = 1);
                    }
                  }
                  return n;
                })(s, t.maybeComponent)
              : 0,
            l = r || wi;
          return '['
            .concat(
              s
                .map(function (e) {
                  return l(e, t);
                })
                .join(','),
              ']',
            )
            .concat(u ? ','.concat(u) : '');
        }
      }
      function _i(e) {
        return void 0 !== e.for || 'template' === e.tag || 'slot' === e.tag;
      }
      function wi(e, t) {
        return 1 === e.type
          ? ci(e, t)
          : 3 === e.type && e.isComment
          ? (function (e) {
              return '_e('.concat(JSON.stringify(e.text), ')');
            })(e)
          : '_v('.concat(2 === (n = e).type ? n.expression : Ei(JSON.stringify(n.text)), ')');
        var n;
      }
      function ki(e) {
        for (var t = '', n = '', a = 0; a < e.length; a++) {
          var r = e[a],
            s = Ei(r.value);
          r.dynamic ? (n += ''.concat(r.name, ',').concat(s, ',')) : (t += '"'.concat(r.name, '":').concat(s, ','));
        }
        return (t = '{'.concat(t.slice(0, -1), '}')), n ? '_d('.concat(t, ',[').concat(n.slice(0, -1), '])') : t;
      }
      function Ei(e) {
        return e.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
      }
      function Ai(e, t) {
        try {
          return new Function(e);
        } catch (n) {
          return t.push({ err: n, code: e }), S;
        }
      }
      function xi(e) {
        var t = Object.create(null);
        return function (n, a, r) {
          (a = C({}, a)).warn, delete a.warn;
          var s = a.delimiters ? String(a.delimiters) + n : n;
          if (t[s]) return t[s];
          var o = e(n, a),
            i = {},
            u = [];
          return (
            (i.render = Ai(o.render, u)),
            (i.staticRenderFns = o.staticRenderFns.map(function (e) {
              return Ai(e, u);
            })),
            (t[s] = i)
          );
        };
      }
      new RegExp(
        '\\b' +
          'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments'
            .split(',')
            .join('\\b|\\b') +
          '\\b',
      ),
        new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');
      var Ii,
        Ci,
        Mi =
          ((Ii = function (e, t) {
            var n = No(e.trim(), t);
            !1 !== t.optimize && Zo(n, t);
            var a = pi(n, t);
            return { ast: n, render: a.render, staticRenderFns: a.staticRenderFns };
          }),
          function (e) {
            function t(t, n) {
              var a = Object.create(e),
                r = [],
                s = [];
              if (n)
                for (var o in (n.modules && (a.modules = (e.modules || []).concat(n.modules)),
                n.directives && (a.directives = C(Object.create(e.directives || null), n.directives)),
                n))
                  'modules' !== o && 'directives' !== o && (a[o] = n[o]);
              a.warn = function (e, t, n) {
                (n ? s : r).push(e);
              };
              var i = Ii(t.trim(), a);
              return (i.errors = r), (i.tips = s), i;
            }
            return { compile: t, compileToFunctions: xi(t) };
          }),
        Si = Mi(Wo).compileToFunctions;
      function Oi(e) {
        return (
          ((Ci = Ci || document.createElement('div')).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>'),
          Ci.innerHTML.indexOf('&#10;') > 0
        );
      }
      var $i = !!H && Oi(!1),
        Li = !!H && Oi(!0),
        Ni = T(function (e) {
          var t = _a(e);
          return t && t.innerHTML;
        }),
        Fi = Wn.prototype.$mount;
      function ji(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      (Wn.prototype.$mount = function (e, t) {
        if ((e = e && _a(e)) === document.body || e === document.documentElement) return this;
        var n = this.$options;
        if (!n.render) {
          var a = n.template;
          if (a)
            if ('string' == typeof a) '#' === a.charAt(0) && (a = Ni(a));
            else {
              if (!a.nodeType) return this;
              a = a.innerHTML;
            }
          else
            e &&
              (a = (function (e) {
                if (e.outerHTML) return e.outerHTML;
                var t = document.createElement('div');
                return t.appendChild(e.cloneNode(!0)), t.innerHTML;
              })(e));
          if (a) {
            var r = Si(
                a,
                {
                  outputSourceRange: !1,
                  shouldDecodeNewlines: $i,
                  shouldDecodeNewlinesForHref: Li,
                  delimiters: n.delimiters,
                  comments: n.comments,
                },
                this,
              ),
              s = r.render,
              o = r.staticRenderFns;
            (n.render = s), (n.staticRenderFns = o);
          }
        }
        return Fi.call(this, e, t);
      }),
        (Wn.compile = Si);
      var Gi = /[!'()*]/g,
        Di = function (e) {
          return '%' + e.charCodeAt(0).toString(16);
        },
        Ui = /%2C/g,
        Pi = function (e) {
          return encodeURIComponent(e).replace(Gi, Di).replace(Ui, ',');
        };
      function qi(e) {
        try {
          return decodeURIComponent(e);
        } catch (e) {}
        return e;
      }
      var Bi = function (e) {
        return null == e || 'object' == typeof e ? e : String(e);
      };
      function Vi(e) {
        var t = {};
        return (e = e.trim().replace(/^(\?|#|&)/, ''))
          ? (e.split('&').forEach(function (e) {
              var n = e.replace(/\+/g, ' ').split('='),
                a = qi(n.shift()),
                r = n.length > 0 ? qi(n.join('=')) : null;
              void 0 === t[a] ? (t[a] = r) : Array.isArray(t[a]) ? t[a].push(r) : (t[a] = [t[a], r]);
            }),
            t)
          : t;
      }
      function zi(e) {
        var t = e
          ? Object.keys(e)
              .map(function (t) {
                var n = e[t];
                if (void 0 === n) return '';
                if (null === n) return Pi(t);
                if (Array.isArray(n)) {
                  var a = [];
                  return (
                    n.forEach(function (e) {
                      void 0 !== e && (null === e ? a.push(Pi(t)) : a.push(Pi(t) + '=' + Pi(e)));
                    }),
                    a.join('&')
                  );
                }
                return Pi(t) + '=' + Pi(n);
              })
              .filter(function (e) {
                return e.length > 0;
              })
              .join('&')
          : null;
        return t ? '?' + t : '';
      }
      var Hi = /\/?$/;
      function Ki(e, t, n, a) {
        var r = a && a.options.stringifyQuery,
          s = t.query || {};
        try {
          s = Wi(s);
        } catch (e) {}
        var o = {
          name: t.name || (e && e.name),
          meta: (e && e.meta) || {},
          path: t.path || '/',
          hash: t.hash || '',
          query: s,
          params: t.params || {},
          fullPath: Yi(t, r),
          matched: e ? Zi(e) : [],
        };
        return n && (o.redirectedFrom = Yi(n, r)), Object.freeze(o);
      }
      function Wi(e) {
        if (Array.isArray(e)) return e.map(Wi);
        if (e && 'object' == typeof e) {
          var t = {};
          for (var n in e) t[n] = Wi(e[n]);
          return t;
        }
        return e;
      }
      var Ji = Ki(null, { path: '/' });
      function Zi(e) {
        for (var t = []; e; ) t.unshift(e), (e = e.parent);
        return t;
      }
      function Yi(e, t) {
        var n = e.path,
          a = e.query;
        void 0 === a && (a = {});
        var r = e.hash;
        return void 0 === r && (r = ''), (n || '/') + (t || zi)(a) + r;
      }
      function Xi(e, t, n) {
        return t === Ji
          ? e === t
          : !!t &&
              (e.path && t.path
                ? e.path.replace(Hi, '') === t.path.replace(Hi, '') &&
                  (n || (e.hash === t.hash && Qi(e.query, t.query)))
                : !(!e.name || !t.name) &&
                  e.name === t.name &&
                  (n || (e.hash === t.hash && Qi(e.query, t.query) && Qi(e.params, t.params))));
      }
      function Qi(e, t) {
        if ((void 0 === e && (e = {}), void 0 === t && (t = {}), !e || !t)) return e === t;
        var n = Object.keys(e).sort(),
          a = Object.keys(t).sort();
        return (
          n.length === a.length &&
          n.every(function (n, r) {
            var s = e[n];
            if (a[r] !== n) return !1;
            var o = t[n];
            return null == s || null == o
              ? s === o
              : 'object' == typeof s && 'object' == typeof o
              ? Qi(s, o)
              : String(s) === String(o);
          })
        );
      }
      function eu(e) {
        for (var t = 0; t < e.matched.length; t++) {
          var n = e.matched[t];
          for (var a in n.instances) {
            var r = n.instances[a],
              s = n.enteredCbs[a];
            if (r && s) {
              delete n.enteredCbs[a];
              for (var o = 0; o < s.length; o++) r._isBeingDestroyed || s[o](r);
            }
          }
        }
      }
      var tu = {
        name: 'RouterView',
        functional: !0,
        props: { name: { type: String, default: 'default' } },
        render: function (e, t) {
          var n = t.props,
            a = t.children,
            r = t.parent,
            s = t.data;
          s.routerView = !0;
          for (
            var o = r.$createElement,
              i = n.name,
              u = r.$route,
              l = r._routerViewCache || (r._routerViewCache = {}),
              d = 0,
              p = !1;
            r && r._routerRoot !== r;

          ) {
            var c = r.$vnode ? r.$vnode.data : {};
            c.routerView && d++, c.keepAlive && r._directInactive && r._inactive && (p = !0), (r = r.$parent);
          }
          if (((s.routerViewDepth = d), p)) {
            var y = l[i],
              m = y && y.component;
            return m ? (y.configProps && nu(m, s, y.route, y.configProps), o(m, s, a)) : o();
          }
          var f = u.matched[d],
            v = f && f.components[i];
          if (!f || !v) return (l[i] = null), o();
          (l[i] = { component: v }),
            (s.registerRouteInstance = function (e, t) {
              var n = f.instances[i];
              ((t && n !== e) || (!t && n === e)) && (f.instances[i] = t);
            }),
            ((s.hook || (s.hook = {})).prepatch = function (e, t) {
              f.instances[i] = t.componentInstance;
            }),
            (s.hook.init = function (e) {
              e.data.keepAlive &&
                e.componentInstance &&
                e.componentInstance !== f.instances[i] &&
                (f.instances[i] = e.componentInstance),
                eu(u);
            });
          var h = f.props && f.props[i];
          return h && (ji(l[i], { route: u, configProps: h }), nu(v, s, u, h)), o(v, s, a);
        },
      };
      function nu(e, t, n, a) {
        var r = (t.props = (function (e, t) {
          switch (typeof t) {
            case 'undefined':
              return;
            case 'object':
              return t;
            case 'function':
              return t(e);
            case 'boolean':
              return t ? e.params : void 0;
          }
        })(n, a));
        if (r) {
          r = t.props = ji({}, r);
          var s = (t.attrs = t.attrs || {});
          for (var o in r) (e.props && o in e.props) || ((s[o] = r[o]), delete r[o]);
        }
      }
      function au(e, t, n) {
        var a = e.charAt(0);
        if ('/' === a) return e;
        if ('?' === a || '#' === a) return t + e;
        var r = t.split('/');
        (n && r[r.length - 1]) || r.pop();
        for (var s = e.replace(/^\//, '').split('/'), o = 0; o < s.length; o++) {
          var i = s[o];
          '..' === i ? r.pop() : '.' !== i && r.push(i);
        }
        return '' !== r[0] && r.unshift(''), r.join('/');
      }
      function ru(e) {
        return e.replace(/\/(?:\s*\/)+/g, '/');
      }
      var su =
          Array.isArray ||
          function (e) {
            return '[object Array]' == Object.prototype.toString.call(e);
          },
        ou = function e(t, n, a) {
          return (
            su(n) || ((a = n || a), (n = [])),
            (a = a || {}),
            t instanceof RegExp
              ? (function (e, t) {
                  var n = e.source.match(/\((?!\?)/g);
                  if (n)
                    for (var a = 0; a < n.length; a++)
                      t.push({
                        name: a,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        partial: !1,
                        asterisk: !1,
                        pattern: null,
                      });
                  return hu(e, t);
                })(t, n)
              : su(t)
              ? (function (t, n, a) {
                  for (var r = [], s = 0; s < t.length; s++) r.push(e(t[s], n, a).source);
                  return hu(new RegExp('(?:' + r.join('|') + ')', bu(a)), n);
                })(t, n, a)
              : (function (e, t, n) {
                  return gu(pu(e, n), t, n);
                })(t, n, a)
          );
        },
        iu = pu,
        uu = mu,
        lu = gu,
        du = new RegExp(
          [
            '(\\\\.)',
            '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
          ].join('|'),
          'g',
        );
      function pu(e, t) {
        for (var n, a = [], r = 0, s = 0, o = '', i = (t && t.delimiter) || '/'; null != (n = du.exec(e)); ) {
          var u = n[0],
            l = n[1],
            d = n.index;
          if (((o += e.slice(s, d)), (s = d + u.length), l)) o += l[1];
          else {
            var p = e[s],
              c = n[2],
              y = n[3],
              m = n[4],
              f = n[5],
              v = n[6],
              h = n[7];
            o && (a.push(o), (o = ''));
            var b = null != c && null != p && p !== c,
              g = '+' === v || '*' === v,
              R = '?' === v || '*' === v,
              T = n[2] || i,
              _ = m || f;
            a.push({
              name: y || r++,
              prefix: c || '',
              delimiter: T,
              optional: R,
              repeat: g,
              partial: b,
              asterisk: !!h,
              pattern: _ ? vu(_) : h ? '.*' : '[^' + fu(T) + ']+?',
            });
          }
        }
        return s < e.length && (o += e.substr(s)), o && a.push(o), a;
      }
      function cu(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return '%' + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function yu(e) {
        return encodeURI(e).replace(/[?#]/g, function (e) {
          return '%' + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function mu(e, t) {
        for (var n = new Array(e.length), a = 0; a < e.length; a++)
          'object' == typeof e[a] && (n[a] = new RegExp('^(?:' + e[a].pattern + ')$', bu(t)));
        return function (t, a) {
          for (var r = '', s = t || {}, o = (a || {}).pretty ? cu : encodeURIComponent, i = 0; i < e.length; i++) {
            var u = e[i];
            if ('string' != typeof u) {
              var l,
                d = s[u.name];
              if (null == d) {
                if (u.optional) {
                  u.partial && (r += u.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + u.name + '" to be defined');
              }
              if (su(d)) {
                if (!u.repeat)
                  throw new TypeError(
                    'Expected "' + u.name + '" to not repeat, but received `' + JSON.stringify(d) + '`',
                  );
                if (0 === d.length) {
                  if (u.optional) continue;
                  throw new TypeError('Expected "' + u.name + '" to not be empty');
                }
                for (var p = 0; p < d.length; p++) {
                  if (((l = o(d[p])), !n[i].test(l)))
                    throw new TypeError(
                      'Expected all "' +
                        u.name +
                        '" to match "' +
                        u.pattern +
                        '", but received `' +
                        JSON.stringify(l) +
                        '`',
                    );
                  r += (0 === p ? u.prefix : u.delimiter) + l;
                }
              } else {
                if (((l = u.asterisk ? yu(d) : o(d)), !n[i].test(l)))
                  throw new TypeError(
                    'Expected "' + u.name + '" to match "' + u.pattern + '", but received "' + l + '"',
                  );
                r += u.prefix + l;
              }
            } else r += u;
          }
          return r;
        };
      }
      function fu(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
      }
      function vu(e) {
        return e.replace(/([=!:$\/()])/g, '\\$1');
      }
      function hu(e, t) {
        return (e.keys = t), e;
      }
      function bu(e) {
        return e && e.sensitive ? '' : 'i';
      }
      function gu(e, t, n) {
        su(t) || ((n = t || n), (t = []));
        for (var a = (n = n || {}).strict, r = !1 !== n.end, s = '', o = 0; o < e.length; o++) {
          var i = e[o];
          if ('string' == typeof i) s += fu(i);
          else {
            var u = fu(i.prefix),
              l = '(?:' + i.pattern + ')';
            t.push(i),
              i.repeat && (l += '(?:' + u + l + ')*'),
              (s += l =
                i.optional ? (i.partial ? u + '(' + l + ')?' : '(?:' + u + '(' + l + '))?') : u + '(' + l + ')');
          }
        }
        var d = fu(n.delimiter || '/'),
          p = s.slice(-d.length) === d;
        return (
          a || (s = (p ? s.slice(0, -d.length) : s) + '(?:' + d + '(?=$))?'),
          (s += r ? '$' : a && p ? '' : '(?=' + d + '|$)'),
          hu(new RegExp('^' + s, bu(n)), t)
        );
      }
      (ou.parse = iu),
        (ou.compile = function (e, t) {
          return mu(pu(e, t), t);
        }),
        (ou.tokensToFunction = uu),
        (ou.tokensToRegExp = lu);
      var Ru = Object.create(null);
      function Tu(e, t, n) {
        t = t || {};
        try {
          var a = Ru[e] || (Ru[e] = ou.compile(e));
          return 'string' == typeof t.pathMatch && (t[0] = t.pathMatch), a(t, { pretty: !0 });
        } catch (e) {
          return '';
        } finally {
          delete t[0];
        }
      }
      function _u(e, t, n, a) {
        var r = 'string' == typeof e ? { path: e } : e;
        if (r._normalized) return r;
        if (r.name) {
          var s = (r = ji({}, e)).params;
          return s && 'object' == typeof s && (r.params = ji({}, s)), r;
        }
        if (!r.path && r.params && t) {
          (r = ji({}, r))._normalized = !0;
          var o = ji(ji({}, t.params), r.params);
          if (t.name) (r.name = t.name), (r.params = o);
          else if (t.matched.length) {
            var i = t.matched[t.matched.length - 1].path;
            r.path = Tu(i, o, t.path);
          }
          return r;
        }
        var u = (function (e) {
            var t = '',
              n = '',
              a = e.indexOf('#');
            a >= 0 && ((t = e.slice(a)), (e = e.slice(0, a)));
            var r = e.indexOf('?');
            return r >= 0 && ((n = e.slice(r + 1)), (e = e.slice(0, r))), { path: e, query: n, hash: t };
          })(r.path || ''),
          l = (t && t.path) || '/',
          d = u.path ? au(u.path, l, n || r.append) : l,
          p = (function (e, t, n) {
            void 0 === t && (t = {});
            var a,
              r = n || Vi;
            try {
              a = r(e || '');
            } catch (e) {
              a = {};
            }
            for (var s in t) {
              var o = t[s];
              a[s] = Array.isArray(o) ? o.map(Bi) : Bi(o);
            }
            return a;
          })(u.query, r.query, a && a.options.parseQuery),
          c = r.hash || u.hash;
        return c && '#' !== c.charAt(0) && (c = '#' + c), { _normalized: !0, path: d, query: p, hash: c };
      }
      var wu,
        ku = function () {},
        Eu = {
          name: 'RouterLink',
          props: {
            to: { type: [String, Object], required: !0 },
            tag: { type: String, default: 'a' },
            custom: Boolean,
            exact: Boolean,
            exactPath: Boolean,
            append: Boolean,
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            ariaCurrentValue: { type: String, default: 'page' },
            event: { type: [String, Array], default: 'click' },
          },
          render: function (e) {
            var t = this,
              n = this.$router,
              a = this.$route,
              r = n.resolve(this.to, a, this.append),
              s = r.location,
              o = r.route,
              i = r.href,
              u = {},
              l = n.options.linkActiveClass,
              d = n.options.linkExactActiveClass,
              p = null == l ? 'router-link-active' : l,
              c = null == d ? 'router-link-exact-active' : d,
              y = null == this.activeClass ? p : this.activeClass,
              m = null == this.exactActiveClass ? c : this.exactActiveClass,
              f = o.redirectedFrom ? Ki(null, _u(o.redirectedFrom), null, n) : o;
            (u[m] = Xi(a, f, this.exactPath)),
              (u[y] =
                this.exact || this.exactPath
                  ? u[m]
                  : (function (e, t) {
                      return (
                        0 === e.path.replace(Hi, '/').indexOf(t.path.replace(Hi, '/')) &&
                        (!t.hash || e.hash === t.hash) &&
                        (function (e, t) {
                          for (var n in t) if (!(n in e)) return !1;
                          return !0;
                        })(e.query, t.query)
                      );
                    })(a, f));
            var v = u[m] ? this.ariaCurrentValue : null,
              h = function (e) {
                Au(e) && (t.replace ? n.replace(s, ku) : n.push(s, ku));
              },
              b = { click: Au };
            Array.isArray(this.event)
              ? this.event.forEach(function (e) {
                  b[e] = h;
                })
              : (b[this.event] = h);
            var g = { class: u },
              R =
                !this.$scopedSlots.$hasNormal &&
                this.$scopedSlots.default &&
                this.$scopedSlots.default({ href: i, route: o, navigate: h, isActive: u[y], isExactActive: u[m] });
            if (R) {
              if (1 === R.length) return R[0];
              if (R.length > 1 || !R.length) return 0 === R.length ? e() : e('span', {}, R);
            }
            if ('a' === this.tag) (g.on = b), (g.attrs = { href: i, 'aria-current': v });
            else {
              var T = xu(this.$slots.default);
              if (T) {
                T.isStatic = !1;
                var _ = (T.data = ji({}, T.data));
                for (var w in ((_.on = _.on || {}), _.on)) {
                  var k = _.on[w];
                  w in b && (_.on[w] = Array.isArray(k) ? k : [k]);
                }
                for (var E in b) E in _.on ? _.on[E].push(b[E]) : (_.on[E] = h);
                var A = (T.data.attrs = ji({}, T.data.attrs));
                (A.href = i), (A['aria-current'] = v);
              } else g.on = b;
            }
            return e(this.tag, g, this.$slots.default);
          },
        };
      function Au(e) {
        if (
          !(
            e.metaKey ||
            e.altKey ||
            e.ctrlKey ||
            e.shiftKey ||
            e.defaultPrevented ||
            (void 0 !== e.button && 0 !== e.button)
          )
        ) {
          if (e.currentTarget && e.currentTarget.getAttribute) {
            var t = e.currentTarget.getAttribute('target');
            if (/\b_blank\b/i.test(t)) return;
          }
          return e.preventDefault && e.preventDefault(), !0;
        }
      }
      function xu(e) {
        if (e)
          for (var t, n = 0; n < e.length; n++) {
            if ('a' === (t = e[n]).tag) return t;
            if (t.children && (t = xu(t.children))) return t;
          }
      }
      var Iu = 'undefined' != typeof window;
      function Cu(e, t, n, a, r) {
        var s = t || [],
          o = n || Object.create(null),
          i = a || Object.create(null);
        e.forEach(function (e) {
          Mu(s, o, i, e, r);
        });
        for (var u = 0, l = s.length; u < l; u++) '*' === s[u] && (s.push(s.splice(u, 1)[0]), l--, u--);
        return { pathList: s, pathMap: o, nameMap: i };
      }
      function Mu(e, t, n, a, r, s) {
        var o = a.path,
          i = a.name,
          u = a.pathToRegexpOptions || {},
          l = (function (e, t, n) {
            return n || (e = e.replace(/\/$/, '')), '/' === e[0] || null == t ? e : ru(t.path + '/' + e);
          })(o, r, u.strict);
        'boolean' == typeof a.caseSensitive && (u.sensitive = a.caseSensitive);
        var d = {
          path: l,
          regex: Su(l, u),
          components: a.components || { default: a.component },
          alias: a.alias ? ('string' == typeof a.alias ? [a.alias] : a.alias) : [],
          instances: {},
          enteredCbs: {},
          name: i,
          parent: r,
          matchAs: s,
          redirect: a.redirect,
          beforeEnter: a.beforeEnter,
          meta: a.meta || {},
          props: null == a.props ? {} : a.components ? a.props : { default: a.props },
        };
        if (
          (a.children &&
            a.children.forEach(function (a) {
              var r = s ? ru(s + '/' + a.path) : void 0;
              Mu(e, t, n, a, d, r);
            }),
          t[d.path] || (e.push(d.path), (t[d.path] = d)),
          void 0 !== a.alias)
        )
          for (var p = Array.isArray(a.alias) ? a.alias : [a.alias], c = 0; c < p.length; ++c) {
            var y = { path: p[c], children: a.children };
            Mu(e, t, n, y, r, d.path || '/');
          }
        i && (n[i] || (n[i] = d));
      }
      function Su(e, t) {
        return ou(e, [], t);
      }
      function Ou(e, t) {
        var n = Cu(e),
          a = n.pathList,
          r = n.pathMap,
          s = n.nameMap;
        function o(e, n, o) {
          var u = _u(e, n, !1, t),
            l = u.name;
          if (l) {
            var d = s[l];
            if (!d) return i(null, u);
            var p = d.regex.keys
              .filter(function (e) {
                return !e.optional;
              })
              .map(function (e) {
                return e.name;
              });
            if (('object' != typeof u.params && (u.params = {}), n && 'object' == typeof n.params))
              for (var c in n.params) !(c in u.params) && p.indexOf(c) > -1 && (u.params[c] = n.params[c]);
            return (u.path = Tu(d.path, u.params)), i(d, u, o);
          }
          if (u.path) {
            u.params = {};
            for (var y = 0; y < a.length; y++) {
              var m = a[y],
                f = r[m];
              if ($u(f.regex, u.path, u.params)) return i(f, u, o);
            }
          }
          return i(null, u);
        }
        function i(e, n, a) {
          return e && e.redirect
            ? (function (e, n) {
                var a = e.redirect,
                  r = 'function' == typeof a ? a(Ki(e, n, null, t)) : a;
                if (('string' == typeof r && (r = { path: r }), !r || 'object' != typeof r)) return i(null, n);
                var u = r,
                  l = u.name,
                  d = u.path,
                  p = n.query,
                  c = n.hash,
                  y = n.params;
                if (
                  ((p = u.hasOwnProperty('query') ? u.query : p),
                  (c = u.hasOwnProperty('hash') ? u.hash : c),
                  (y = u.hasOwnProperty('params') ? u.params : y),
                  l)
                )
                  return s[l], o({ _normalized: !0, name: l, query: p, hash: c, params: y }, void 0, n);
                if (d) {
                  var m = (function (e, t) {
                    return au(e, t.parent ? t.parent.path : '/', !0);
                  })(d, e);
                  return o({ _normalized: !0, path: Tu(m, y), query: p, hash: c }, void 0, n);
                }
                return i(null, n);
              })(e, a || n)
            : e && e.matchAs
            ? (function (e, t, n) {
                var a = o({ _normalized: !0, path: Tu(n, t.params) });
                if (a) {
                  var r = a.matched,
                    s = r[r.length - 1];
                  return (t.params = a.params), i(s, t);
                }
                return i(null, t);
              })(0, n, e.matchAs)
            : Ki(e, n, a, t);
        }
        return {
          match: o,
          addRoute: function (e, t) {
            var n = 'object' != typeof e ? s[e] : void 0;
            Cu([t || e], a, r, s, n),
              n &&
                n.alias.length &&
                Cu(
                  n.alias.map(function (e) {
                    return { path: e, children: [t] };
                  }),
                  a,
                  r,
                  s,
                  n,
                );
          },
          getRoutes: function () {
            return a.map(function (e) {
              return r[e];
            });
          },
          addRoutes: function (e) {
            Cu(e, a, r, s);
          },
        };
      }
      function $u(e, t, n) {
        var a = t.match(e);
        if (!a) return !1;
        if (!n) return !0;
        for (var r = 1, s = a.length; r < s; ++r) {
          var o = e.keys[r - 1];
          o && (n[o.name || 'pathMatch'] = 'string' == typeof a[r] ? qi(a[r]) : a[r]);
        }
        return !0;
      }
      var Lu = Iu && window.performance && window.performance.now ? window.performance : Date;
      function Nu() {
        return Lu.now().toFixed(3);
      }
      var Fu = Nu();
      function ju() {
        return Fu;
      }
      function Gu(e) {
        return (Fu = e);
      }
      var Du = Object.create(null);
      function Uu() {
        'scrollRestoration' in window.history && (window.history.scrollRestoration = 'manual');
        var e = window.location.protocol + '//' + window.location.host,
          t = window.location.href.replace(e, ''),
          n = ji({}, window.history.state);
        return (
          (n.key = ju()),
          window.history.replaceState(n, '', t),
          window.addEventListener('popstate', Bu),
          function () {
            window.removeEventListener('popstate', Bu);
          }
        );
      }
      function Pu(e, t, n, a) {
        if (e.app) {
          var r = e.options.scrollBehavior;
          r &&
            e.app.$nextTick(function () {
              var s = (function () {
                  var e = ju();
                  if (e) return Du[e];
                })(),
                o = r.call(e, t, n, a ? s : null);
              o &&
                ('function' == typeof o.then
                  ? o
                      .then(function (e) {
                        Wu(e, s);
                      })
                      .catch(function (e) {})
                  : Wu(o, s));
            });
        }
      }
      function qu() {
        var e = ju();
        e && (Du[e] = { x: window.pageXOffset, y: window.pageYOffset });
      }
      function Bu(e) {
        qu(), e.state && e.state.key && Gu(e.state.key);
      }
      function Vu(e) {
        return Hu(e.x) || Hu(e.y);
      }
      function zu(e) {
        return { x: Hu(e.x) ? e.x : window.pageXOffset, y: Hu(e.y) ? e.y : window.pageYOffset };
      }
      function Hu(e) {
        return 'number' == typeof e;
      }
      var Ku = /^#\d/;
      function Wu(e, t) {
        var n,
          a = 'object' == typeof e;
        if (a && 'string' == typeof e.selector) {
          var r = Ku.test(e.selector)
            ? document.getElementById(e.selector.slice(1))
            : document.querySelector(e.selector);
          if (r) {
            var s = e.offset && 'object' == typeof e.offset ? e.offset : {};
            t = (function (e, t) {
              var n = document.documentElement.getBoundingClientRect(),
                a = e.getBoundingClientRect();
              return { x: a.left - n.left - t.x, y: a.top - n.top - t.y };
            })(r, (s = { x: Hu((n = s).x) ? n.x : 0, y: Hu(n.y) ? n.y : 0 }));
          } else Vu(e) && (t = zu(e));
        } else a && Vu(e) && (t = zu(e));
        t &&
          ('scrollBehavior' in document.documentElement.style
            ? window.scrollTo({ left: t.x, top: t.y, behavior: e.behavior })
            : window.scrollTo(t.x, t.y));
      }
      var Ju,
        Zu =
          Iu &&
          ((-1 === (Ju = window.navigator.userAgent).indexOf('Android 2.') && -1 === Ju.indexOf('Android 4.0')) ||
            -1 === Ju.indexOf('Mobile Safari') ||
            -1 !== Ju.indexOf('Chrome') ||
            -1 !== Ju.indexOf('Windows Phone')) &&
          window.history &&
          'function' == typeof window.history.pushState;
      function Yu(e, t) {
        qu();
        var n = window.history;
        try {
          if (t) {
            var a = ji({}, n.state);
            (a.key = ju()), n.replaceState(a, '', e);
          } else n.pushState({ key: Gu(Nu()) }, '', e);
        } catch (n) {
          window.location[t ? 'replace' : 'assign'](e);
        }
      }
      function Xu(e) {
        Yu(e, !0);
      }
      var Qu = { redirected: 2, aborted: 4, cancelled: 8, duplicated: 16 };
      function el(e, t) {
        return tl(
          e,
          t,
          Qu.cancelled,
          'Navigation cancelled from "' + e.fullPath + '" to "' + t.fullPath + '" with a new navigation.',
        );
      }
      function tl(e, t, n, a) {
        var r = new Error(a);
        return (r._isRouter = !0), (r.from = e), (r.to = t), (r.type = n), r;
      }
      var nl = ['params', 'query', 'hash'];
      function al(e) {
        return Object.prototype.toString.call(e).indexOf('Error') > -1;
      }
      function rl(e, t) {
        return al(e) && e._isRouter && (null == t || e.type === t);
      }
      function sl(e, t, n) {
        var a = function (r) {
          r >= e.length
            ? n()
            : e[r]
            ? t(e[r], function () {
                a(r + 1);
              })
            : a(r + 1);
        };
        a(0);
      }
      function ol(e, t) {
        return il(
          e.map(function (e) {
            return Object.keys(e.components).map(function (n) {
              return t(e.components[n], e.instances[n], e, n);
            });
          }),
        );
      }
      function il(e) {
        return Array.prototype.concat.apply([], e);
      }
      var ul = 'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag;
      function ll(e) {
        var t = !1;
        return function () {
          for (var n = [], a = arguments.length; a--; ) n[a] = arguments[a];
          if (!t) return (t = !0), e.apply(this, n);
        };
      }
      var dl = function (e, t) {
        (this.router = e),
          (this.base = (function (e) {
            if (!e)
              if (Iu) {
                var t = document.querySelector('base');
                e = (e = (t && t.getAttribute('href')) || '/').replace(/^https?:\/\/[^\/]+/, '');
              } else e = '/';
            return '/' !== e.charAt(0) && (e = '/' + e), e.replace(/\/$/, '');
          })(t)),
          (this.current = Ji),
          (this.pending = null),
          (this.ready = !1),
          (this.readyCbs = []),
          (this.readyErrorCbs = []),
          (this.errorCbs = []),
          (this.listeners = []);
      };
      function pl(e, t, n, a) {
        var r = ol(e, function (e, a, r, s) {
          var o = (function (e, t) {
            return 'function' != typeof e && (e = wu.extend(e)), e.options[t];
          })(e, t);
          if (o)
            return Array.isArray(o)
              ? o.map(function (e) {
                  return n(e, a, r, s);
                })
              : n(o, a, r, s);
        });
        return il(a ? r.reverse() : r);
      }
      function cl(e, t) {
        if (t)
          return function () {
            return e.apply(t, arguments);
          };
      }
      (dl.prototype.listen = function (e) {
        this.cb = e;
      }),
        (dl.prototype.onReady = function (e, t) {
          this.ready ? e() : (this.readyCbs.push(e), t && this.readyErrorCbs.push(t));
        }),
        (dl.prototype.onError = function (e) {
          this.errorCbs.push(e);
        }),
        (dl.prototype.transitionTo = function (e, t, n) {
          var a,
            r = this;
          try {
            a = this.router.match(e, this.current);
          } catch (e) {
            throw (
              (this.errorCbs.forEach(function (t) {
                t(e);
              }),
              e)
            );
          }
          var s = this.current;
          this.confirmTransition(
            a,
            function () {
              r.updateRoute(a),
                t && t(a),
                r.ensureURL(),
                r.router.afterHooks.forEach(function (e) {
                  e && e(a, s);
                }),
                r.ready ||
                  ((r.ready = !0),
                  r.readyCbs.forEach(function (e) {
                    e(a);
                  }));
            },
            function (e) {
              n && n(e),
                e &&
                  !r.ready &&
                  ((rl(e, Qu.redirected) && s === Ji) ||
                    ((r.ready = !0),
                    r.readyErrorCbs.forEach(function (t) {
                      t(e);
                    })));
            },
          );
        }),
        (dl.prototype.confirmTransition = function (e, t, n) {
          var a = this,
            r = this.current;
          this.pending = e;
          var s,
            o,
            i = function (e) {
              !rl(e) &&
                al(e) &&
                (a.errorCbs.length
                  ? a.errorCbs.forEach(function (t) {
                      t(e);
                    })
                  : console.error(e)),
                n && n(e);
            },
            u = e.matched.length - 1,
            l = r.matched.length - 1;
          if (Xi(e, r) && u === l && e.matched[u] === r.matched[l])
            return (
              this.ensureURL(),
              e.hash && Pu(this.router, r, e, !1),
              i(
                (((o = tl(
                  (s = r),
                  e,
                  Qu.duplicated,
                  'Avoided redundant navigation to current location: "' + s.fullPath + '".',
                )).name = 'NavigationDuplicated'),
                o),
              )
            );
          var d,
            p = (function (e, t) {
              var n,
                a = Math.max(e.length, t.length);
              for (n = 0; n < a && e[n] === t[n]; n++);
              return { updated: t.slice(0, n), activated: t.slice(n), deactivated: e.slice(n) };
            })(this.current.matched, e.matched),
            c = p.updated,
            y = p.deactivated,
            m = p.activated,
            f = [].concat(
              (function (e) {
                return pl(e, 'beforeRouteLeave', cl, !0);
              })(y),
              this.router.beforeHooks,
              (function (e) {
                return pl(e, 'beforeRouteUpdate', cl);
              })(c),
              m.map(function (e) {
                return e.beforeEnter;
              }),
              ((d = m),
              function (e, t, n) {
                var a = !1,
                  r = 0,
                  s = null;
                ol(d, function (e, t, o, i) {
                  if ('function' == typeof e && void 0 === e.cid) {
                    (a = !0), r++;
                    var u,
                      l = ll(function (t) {
                        var a;
                        ((a = t).__esModule || (ul && 'Module' === a[Symbol.toStringTag])) && (t = t.default),
                          (e.resolved = 'function' == typeof t ? t : wu.extend(t)),
                          (o.components[i] = t),
                          --r <= 0 && n();
                      }),
                      d = ll(function (e) {
                        var t = 'Failed to resolve async component ' + i + ': ' + e;
                        s || ((s = al(e) ? e : new Error(t)), n(s));
                      });
                    try {
                      u = e(l, d);
                    } catch (e) {
                      d(e);
                    }
                    if (u)
                      if ('function' == typeof u.then) u.then(l, d);
                      else {
                        var p = u.component;
                        p && 'function' == typeof p.then && p.then(l, d);
                      }
                  }
                }),
                  a || n();
              }),
            ),
            v = function (t, n) {
              if (a.pending !== e) return i(el(r, e));
              try {
                t(e, r, function (t) {
                  !1 === t
                    ? (a.ensureURL(!0),
                      i(
                        (function (e, t) {
                          return tl(
                            e,
                            t,
                            Qu.aborted,
                            'Navigation aborted from "' +
                              e.fullPath +
                              '" to "' +
                              t.fullPath +
                              '" via a navigation guard.',
                          );
                        })(r, e),
                      ))
                    : al(t)
                    ? (a.ensureURL(!0), i(t))
                    : 'string' == typeof t ||
                      ('object' == typeof t && ('string' == typeof t.path || 'string' == typeof t.name))
                    ? (i(
                        (function (e, t) {
                          return tl(
                            e,
                            t,
                            Qu.redirected,
                            'Redirected when going from "' +
                              e.fullPath +
                              '" to "' +
                              (function (e) {
                                if ('string' == typeof e) return e;
                                if ('path' in e) return e.path;
                                var t = {};
                                return (
                                  nl.forEach(function (n) {
                                    n in e && (t[n] = e[n]);
                                  }),
                                  JSON.stringify(t, null, 2)
                                );
                              })(t) +
                              '" via a navigation guard.',
                          );
                        })(r, e),
                      ),
                      'object' == typeof t && t.replace ? a.replace(t) : a.push(t))
                    : n(t);
                });
              } catch (e) {
                i(e);
              }
            };
          sl(f, v, function () {
            var n = (function (e) {
              return pl(e, 'beforeRouteEnter', function (e, t, n, a) {
                return (function (e, t, n) {
                  return function (a, r, s) {
                    return e(a, r, function (e) {
                      'function' == typeof e && (t.enteredCbs[n] || (t.enteredCbs[n] = []), t.enteredCbs[n].push(e)),
                        s(e);
                    });
                  };
                })(e, n, a);
              });
            })(m);
            sl(n.concat(a.router.resolveHooks), v, function () {
              if (a.pending !== e) return i(el(r, e));
              (a.pending = null),
                t(e),
                a.router.app &&
                  a.router.app.$nextTick(function () {
                    eu(e);
                  });
            });
          });
        }),
        (dl.prototype.updateRoute = function (e) {
          (this.current = e), this.cb && this.cb(e);
        }),
        (dl.prototype.setupListeners = function () {}),
        (dl.prototype.teardown = function () {
          this.listeners.forEach(function (e) {
            e();
          }),
            (this.listeners = []),
            (this.current = Ji),
            (this.pending = null);
        });
      var yl = (function (e) {
        function t(t, n) {
          e.call(this, t, n), (this._startLocation = ml(this.base));
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.setupListeners = function () {
            var e = this;
            if (!(this.listeners.length > 0)) {
              var t = this.router,
                n = t.options.scrollBehavior,
                a = Zu && n;
              a && this.listeners.push(Uu());
              var r = function () {
                var n = e.current,
                  r = ml(e.base);
                (e.current === Ji && r === e._startLocation) ||
                  e.transitionTo(r, function (e) {
                    a && Pu(t, e, n, !0);
                  });
              };
              window.addEventListener('popstate', r),
                this.listeners.push(function () {
                  window.removeEventListener('popstate', r);
                });
            }
          }),
          (t.prototype.go = function (e) {
            window.history.go(e);
          }),
          (t.prototype.push = function (e, t, n) {
            var a = this,
              r = this.current;
            this.transitionTo(
              e,
              function (e) {
                Yu(ru(a.base + e.fullPath)), Pu(a.router, e, r, !1), t && t(e);
              },
              n,
            );
          }),
          (t.prototype.replace = function (e, t, n) {
            var a = this,
              r = this.current;
            this.transitionTo(
              e,
              function (e) {
                Xu(ru(a.base + e.fullPath)), Pu(a.router, e, r, !1), t && t(e);
              },
              n,
            );
          }),
          (t.prototype.ensureURL = function (e) {
            if (ml(this.base) !== this.current.fullPath) {
              var t = ru(this.base + this.current.fullPath);
              e ? Yu(t) : Xu(t);
            }
          }),
          (t.prototype.getCurrentLocation = function () {
            return ml(this.base);
          }),
          t
        );
      })(dl);
      function ml(e) {
        var t = window.location.pathname,
          n = t.toLowerCase(),
          a = e.toLowerCase();
        return (
          !e || (n !== a && 0 !== n.indexOf(ru(a + '/'))) || (t = t.slice(e.length)),
          (t || '/') + window.location.search + window.location.hash
        );
      }
      var fl = (function (e) {
        function t(t, n, a) {
          e.call(this, t, n),
            (a &&
              (function (e) {
                var t = ml(e);
                if (!/^\/#/.test(t)) return window.location.replace(ru(e + '/#' + t)), !0;
              })(this.base)) ||
              vl();
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.setupListeners = function () {
            var e = this;
            if (!(this.listeners.length > 0)) {
              var t = this.router.options.scrollBehavior,
                n = Zu && t;
              n && this.listeners.push(Uu());
              var a = function () {
                  var t = e.current;
                  vl() &&
                    e.transitionTo(hl(), function (a) {
                      n && Pu(e.router, a, t, !0), Zu || Rl(a.fullPath);
                    });
                },
                r = Zu ? 'popstate' : 'hashchange';
              window.addEventListener(r, a),
                this.listeners.push(function () {
                  window.removeEventListener(r, a);
                });
            }
          }),
          (t.prototype.push = function (e, t, n) {
            var a = this,
              r = this.current;
            this.transitionTo(
              e,
              function (e) {
                gl(e.fullPath), Pu(a.router, e, r, !1), t && t(e);
              },
              n,
            );
          }),
          (t.prototype.replace = function (e, t, n) {
            var a = this,
              r = this.current;
            this.transitionTo(
              e,
              function (e) {
                Rl(e.fullPath), Pu(a.router, e, r, !1), t && t(e);
              },
              n,
            );
          }),
          (t.prototype.go = function (e) {
            window.history.go(e);
          }),
          (t.prototype.ensureURL = function (e) {
            var t = this.current.fullPath;
            hl() !== t && (e ? gl(t) : Rl(t));
          }),
          (t.prototype.getCurrentLocation = function () {
            return hl();
          }),
          t
        );
      })(dl);
      function vl() {
        var e = hl();
        return '/' === e.charAt(0) || (Rl('/' + e), !1);
      }
      function hl() {
        var e = window.location.href,
          t = e.indexOf('#');
        return t < 0 ? '' : (e = e.slice(t + 1));
      }
      function bl(e) {
        var t = window.location.href,
          n = t.indexOf('#');
        return (n >= 0 ? t.slice(0, n) : t) + '#' + e;
      }
      function gl(e) {
        Zu ? Yu(bl(e)) : (window.location.hash = e);
      }
      function Rl(e) {
        Zu ? Xu(bl(e)) : window.location.replace(bl(e));
      }
      var Tl = (function (e) {
          function t(t, n) {
            e.call(this, t, n), (this.stack = []), (this.index = -1);
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.push = function (e, t, n) {
              var a = this;
              this.transitionTo(
                e,
                function (e) {
                  (a.stack = a.stack.slice(0, a.index + 1).concat(e)), a.index++, t && t(e);
                },
                n,
              );
            }),
            (t.prototype.replace = function (e, t, n) {
              var a = this;
              this.transitionTo(
                e,
                function (e) {
                  (a.stack = a.stack.slice(0, a.index).concat(e)), t && t(e);
                },
                n,
              );
            }),
            (t.prototype.go = function (e) {
              var t = this,
                n = this.index + e;
              if (!(n < 0 || n >= this.stack.length)) {
                var a = this.stack[n];
                this.confirmTransition(
                  a,
                  function () {
                    var e = t.current;
                    (t.index = n),
                      t.updateRoute(a),
                      t.router.afterHooks.forEach(function (t) {
                        t && t(a, e);
                      });
                  },
                  function (e) {
                    rl(e, Qu.duplicated) && (t.index = n);
                  },
                );
              }
            }),
            (t.prototype.getCurrentLocation = function () {
              var e = this.stack[this.stack.length - 1];
              return e ? e.fullPath : '/';
            }),
            (t.prototype.ensureURL = function () {}),
            t
          );
        })(dl),
        _l = function (e) {
          void 0 === e && (e = {}),
            (this.app = null),
            (this.apps = []),
            (this.options = e),
            (this.beforeHooks = []),
            (this.resolveHooks = []),
            (this.afterHooks = []),
            (this.matcher = Ou(e.routes || [], this));
          var t = e.mode || 'hash';
          switch (
            ((this.fallback = 'history' === t && !Zu && !1 !== e.fallback),
            this.fallback && (t = 'hash'),
            Iu || (t = 'abstract'),
            (this.mode = t),
            t)
          ) {
            case 'history':
              this.history = new yl(this, e.base);
              break;
            case 'hash':
              this.history = new fl(this, e.base, this.fallback);
              break;
            case 'abstract':
              this.history = new Tl(this, e.base);
          }
        },
        wl = { currentRoute: { configurable: !0 } };
      (_l.prototype.match = function (e, t, n) {
        return this.matcher.match(e, t, n);
      }),
        (wl.currentRoute.get = function () {
          return this.history && this.history.current;
        }),
        (_l.prototype.init = function (e) {
          var t = this;
          if (
            (this.apps.push(e),
            e.$once('hook:destroyed', function () {
              var n = t.apps.indexOf(e);
              n > -1 && t.apps.splice(n, 1), t.app === e && (t.app = t.apps[0] || null), t.app || t.history.teardown();
            }),
            !this.app)
          ) {
            this.app = e;
            var n = this.history;
            if (n instanceof yl || n instanceof fl) {
              var a = function (e) {
                n.setupListeners(),
                  (function (e) {
                    var a = n.current,
                      r = t.options.scrollBehavior;
                    Zu && r && 'fullPath' in e && Pu(t, e, a, !1);
                  })(e);
              };
              n.transitionTo(n.getCurrentLocation(), a, a);
            }
            n.listen(function (e) {
              t.apps.forEach(function (t) {
                t._route = e;
              });
            });
          }
        }),
        (_l.prototype.beforeEach = function (e) {
          return El(this.beforeHooks, e);
        }),
        (_l.prototype.beforeResolve = function (e) {
          return El(this.resolveHooks, e);
        }),
        (_l.prototype.afterEach = function (e) {
          return El(this.afterHooks, e);
        }),
        (_l.prototype.onReady = function (e, t) {
          this.history.onReady(e, t);
        }),
        (_l.prototype.onError = function (e) {
          this.history.onError(e);
        }),
        (_l.prototype.push = function (e, t, n) {
          var a = this;
          if (!t && !n && 'undefined' != typeof Promise)
            return new Promise(function (t, n) {
              a.history.push(e, t, n);
            });
          this.history.push(e, t, n);
        }),
        (_l.prototype.replace = function (e, t, n) {
          var a = this;
          if (!t && !n && 'undefined' != typeof Promise)
            return new Promise(function (t, n) {
              a.history.replace(e, t, n);
            });
          this.history.replace(e, t, n);
        }),
        (_l.prototype.go = function (e) {
          this.history.go(e);
        }),
        (_l.prototype.back = function () {
          this.go(-1);
        }),
        (_l.prototype.forward = function () {
          this.go(1);
        }),
        (_l.prototype.getMatchedComponents = function (e) {
          var t = e ? (e.matched ? e : this.resolve(e).route) : this.currentRoute;
          return t
            ? [].concat.apply(
                [],
                t.matched.map(function (e) {
                  return Object.keys(e.components).map(function (t) {
                    return e.components[t];
                  });
                }),
              )
            : [];
        }),
        (_l.prototype.resolve = function (e, t, n) {
          var a = _u(e, (t = t || this.history.current), n, this),
            r = this.match(a, t),
            s = r.redirectedFrom || r.fullPath,
            o = (function (e, t, n) {
              var a = 'hash' === n ? '#' + t : t;
              return e ? ru(e + '/' + a) : a;
            })(this.history.base, s, this.mode);
          return { location: a, route: r, href: o, normalizedTo: a, resolved: r };
        }),
        (_l.prototype.getRoutes = function () {
          return this.matcher.getRoutes();
        }),
        (_l.prototype.addRoute = function (e, t) {
          this.matcher.addRoute(e, t),
            this.history.current !== Ji && this.history.transitionTo(this.history.getCurrentLocation());
        }),
        (_l.prototype.addRoutes = function (e) {
          this.matcher.addRoutes(e),
            this.history.current !== Ji && this.history.transitionTo(this.history.getCurrentLocation());
        }),
        Object.defineProperties(_l.prototype, wl);
      var kl = _l;
      function El(e, t) {
        return (
          e.push(t),
          function () {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1);
          }
        );
      }
      (_l.install = function e(t) {
        if (!e.installed || wu !== t) {
          (e.installed = !0), (wu = t);
          var n = function (e) {
              return void 0 !== e;
            },
            a = function (e, t) {
              var a = e.$options._parentVnode;
              n(a) && n((a = a.data)) && n((a = a.registerRouteInstance)) && a(e, t);
            };
          t.mixin({
            beforeCreate: function () {
              n(this.$options.router)
                ? ((this._routerRoot = this),
                  (this._router = this.$options.router),
                  this._router.init(this),
                  t.util.defineReactive(this, '_route', this._router.history.current))
                : (this._routerRoot = (this.$parent && this.$parent._routerRoot) || this),
                a(this, this);
            },
            destroyed: function () {
              a(this);
            },
          }),
            Object.defineProperty(t.prototype, '$router', {
              get: function () {
                return this._routerRoot._router;
              },
            }),
            Object.defineProperty(t.prototype, '$route', {
              get: function () {
                return this._routerRoot._route;
              },
            }),
            t.component('RouterView', tu),
            t.component('RouterLink', Eu);
          var r = t.config.optionMergeStrategies;
          r.beforeRouteEnter = r.beforeRouteLeave = r.beforeRouteUpdate = r.created;
        }
      }),
        (_l.version = '3.6.5'),
        (_l.isNavigationFailure = rl),
        (_l.NavigationFailureType = Qu),
        (_l.START_LOCATION = Ji),
        Iu && window.Vue && window.Vue.use(_l);
      var Al = function () {
        var e = this._self._c;
        return e('div', { staticClass: 'min-h-screen bg-gray-100 px-4 pt-6' }, [e('router-view')], 1);
      };
      function xl(e, t, n, a, r, s, o, i) {
        var u,
          l = 'function' == typeof e ? e.options : e;
        if (
          (t && ((l.render = t), (l.staticRenderFns = n), (l._compiled = !0)),
          a && (l.functional = !0),
          s && (l._scopeId = 'data-v-' + s),
          o
            ? ((u = function (e) {
                (e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  r && r.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(o);
              }),
              (l._ssrRegister = u))
            : r &&
              (u = i
                ? function () {
                    r.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : r),
          u)
        )
          if (l.functional) {
            l._injectStyles = u;
            var d = l.render;
            l.render = function (e, t) {
              return u.call(t), d(e, t);
            };
          } else {
            var p = l.beforeCreate;
            l.beforeCreate = p ? [].concat(p, u) : [u];
          }
        return { exports: e, options: l };
      }
      (Al._withStripped = !0), n(838);
      const Il = xl({}, Al, [], !1, null, null, null).exports;
      var Cl = function () {
        var e = this,
          t = e._self._c;
        return t(
          'div',
          { staticClass: 'w-full space-y-10 md:max-w-screen-sm lg:max-w-screen-md mx-auto' },
          [
            t('HeaderBar'),
            e._v(' '),
            t(
              'div',
              { staticClass: 'pb-32' },
              [
                t('div', { staticClass: 'space-y-4' }, [
                  t('span', { staticClass: 'text-lg' }, [e._v('\n        ' + e._s(e.json.source) + '\n      ')]),
                  e._v(' '),
                  t('h1', { staticClass: 'text-xl' }, [e._v('\n        ' + e._s(e.json.name) + '\n      ')]),
                  e._v(' '),
                  t('h2', { staticClass: 'text-lg' }, [e._v('\n        ' + e._s(e.json.title) + '\n      ')]),
                  e._v(' '),
                  t('h2', { staticClass: 'text-lg' }, [e._v('\n        ' + e._s(e.json.author) + '\n      ')]),
                  e._v(' '),
                  t('p', [e._v(e._s(e.json.notice))]),
                  e._v(' '),
                  t('p', [e._v(e._s(e.json.details))]),
                ]),
                e._v(' '),
                t(
                  'div',
                  { staticClass: 'mt-8' },
                  [
                    e.json.hasOwnProperty('constructor')
                      ? t('Member', { attrs: { json: e.json.constructor } })
                      : e._e(),
                  ],
                  1,
                ),
                e._v(' '),
                t(
                  'div',
                  { staticClass: 'mt-8' },
                  [e.json.receive ? t('Member', { attrs: { json: e.json.receive } }) : e._e()],
                  1,
                ),
                e._v(' '),
                t(
                  'div',
                  { staticClass: 'mt-8' },
                  [e.json.fallback ? t('Member', { attrs: { json: e.json.fallback } }) : e._e()],
                  1,
                ),
                e._v(' '),
                e.json.events ? t('MemberSet', { attrs: { title: 'Events', json: e.json.events } }) : e._e(),
                e._v(' '),
                e.json.stateVariables
                  ? t('MemberSet', { attrs: { title: 'State Variables', json: e.json.stateVariables } })
                  : e._e(),
                e._v(' '),
                e.json.methods ? t('MemberSet', { attrs: { title: 'Methods', json: e.json.methods } }) : e._e(),
              ],
              1,
            ),
            e._v(' '),
            t('FooterBar'),
          ],
          1,
        );
      };
      Cl._withStripped = !0;
      var Ml = function () {
        var e = this,
          t = e._self._c;
        return t(
          'div',
          { staticClass: 'bg-gray-100 fixed bottom-0 right-0 w-full border-t border-dashed border-gray-300' },
          [
            t('div', { staticClass: 'w-full text-center py-2 md:max-w-screen-sm lg:max-w-screen-md mx-auto' }, [
              t(
                'button',
                {
                  staticClass: 'py-1 px-2 text-gray-500',
                  on: {
                    click: function (t) {
                      return e.openLink(e.repository);
                    },
                  },
                },
                [e._v('\n      built with ' + e._s(e.name) + '\n    ')],
              ),
            ]),
          ],
        );
      };
      Ml._withStripped = !0;
      const Sl = JSON.parse('{"u2":"hardhat-docgen","cj":"https://github.com/ItsNickBarry/hardhat-docgen"}'),
        Ol = xl(
          {
            data: function () {
              return { repository: Sl.cj, name: Sl.u2 };
            },
            methods: {
              openLink(e) {
                window.open(e, '_blank');
              },
            },
          },
          Ml,
          [],
          !1,
          null,
          null,
          null,
        ).exports;
      var $l = function () {
        var e = this._self._c;
        return e(
          'div',
          { staticClass: 'w-full border-b border-dashed py-2 border-gray-300' },
          [
            e('router-link', { staticClass: 'py-2 text-gray-500', attrs: { to: '/' } }, [
              this._v('\n    <- Go back\n  '),
            ]),
          ],
          1,
        );
      };
      $l._withStripped = !0;
      const Ll = xl({}, $l, [], !1, null, null, null).exports;
      var Nl = function () {
        var e = this,
          t = e._self._c;
        return t('div', { staticClass: 'border-2 border-gray-400 border-dashed w-full p-2' }, [
          t('h3', { staticClass: 'text-lg pb-2 mb-2 border-b-2 border-gray-400 border-dashed' }, [
            e._v('\n    ' + e._s(e.name) + ' ' + e._s(e.keywords) + ' ' + e._s(e.inputSignature) + '\n  '),
          ]),
          e._v(' '),
          t(
            'div',
            { staticClass: 'space-y-3' },
            [
              t('p', [e._v(e._s(e.json.notice))]),
              e._v(' '),
              t('p', [e._v(e._s(e.json.details))]),
              e._v(' '),
              t('MemberSection', { attrs: { name: 'Parameters', items: e.inputs } }),
              e._v(' '),
              t('MemberSection', { attrs: { name: 'Return Values', items: e.outputs } }),
            ],
            1,
          ),
        ]);
      };
      Nl._withStripped = !0;
      var Fl = function () {
        var e = this,
          t = e._self._c;
        return e.items.length > 0
          ? t(
              'ul',
              [
                t('h4', { staticClass: 'text-lg' }, [e._v('\n    ' + e._s(e.name) + '\n  ')]),
                e._v(' '),
                e._l(e.items, function (n, a) {
                  return t('li', { key: a }, [
                    t('span', { staticClass: 'bg-gray-300' }, [e._v(e._s(n.type))]),
                    e._v(' '),
                    t('b', [e._v(e._s(n.name || `_${a}`))]),
                    n.desc ? t('span', [e._v(': '), t('i', [e._v(e._s(n.desc))])]) : e._e(),
                  ]);
                }),
              ],
              2,
            )
          : e._e();
      };
      Fl._withStripped = !0;
      const jl = {
          components: {
            MemberSection: xl(
              { props: { name: { type: String, default: '' }, items: { type: Array, default: () => new Array() } } },
              Fl,
              [],
              !1,
              null,
              null,
              null,
            ).exports,
          },
          props: { json: { type: Object, default: () => new Object() } },
          computed: {
            name: function () {
              return this.json.name || this.json.type;
            },
            keywords: function () {
              let e = [];
              return (
                this.json.stateMutability && e.push(this.json.stateMutability),
                'true' === this.json.anonymous && e.push('anonymous'),
                e.join(' ')
              );
            },
            params: function () {
              return this.json.params || {};
            },
            returns: function () {
              return this.json.returns || {};
            },
            inputs: function () {
              return (this.json.inputs || []).map(e => ({ ...e, desc: this.params[e.name] }));
            },
            inputSignature: function () {
              return `(${this.inputs.map(e => e.type).join(',')})`;
            },
            outputs: function () {
              return (this.json.outputs || []).map((e, t) => ({ ...e, desc: this.returns[e.name || `_${t}`] }));
            },
            outputSignature: function () {
              return `(${this.outputs.map(e => e.type).join(',')})`;
            },
          },
        },
        Gl = xl(jl, Nl, [], !1, null, null, null).exports;
      var Dl = function () {
        var e = this,
          t = e._self._c;
        return t(
          'div',
          { staticClass: 'w-full mt-8' },
          [
            t('h2', { staticClass: 'text-lg' }, [e._v(e._s(e.title))]),
            e._v(' '),
            e._l(Object.keys(e.json), function (n) {
              return t('Member', { key: n, staticClass: 'mt-3', attrs: { json: e.json[n] } });
            }),
          ],
          2,
        );
      };
      Dl._withStripped = !0;
      var Ul = xl(
        {
          components: { Member: Gl },
          props: { title: { type: String, default: '' }, json: { type: Object, default: () => new Object() } },
        },
        Dl,
        [],
        !1,
        null,
        null,
        null,
      );
      const Pl = xl(
        {
          components: { Member: Gl, MemberSet: Ul.exports, HeaderBar: Ll, FooterBar: Ol },
          props: { json: { type: Object, default: () => new Object() } },
        },
        Cl,
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      var ql = function () {
        var e = this,
          t = e._self._c;
        return t(
          'div',
          { staticClass: 'w-full space-y-10 md:max-w-screen-sm lg:max-w-screen-md mx-auto pb-32' },
          [
            t('Branch', { attrs: { json: e.trees, name: 'Sources:' } }),
            e._v(' '),
            t('FooterBar', { staticClass: 'mt-20' }),
          ],
          1,
        );
      };
      ql._withStripped = !0;
      var Bl = function () {
        var e = this,
          t = e._self._c;
        return t('div', [
          e._v('\n  ' + e._s(e.name) + '\n  '),
          Array.isArray(e.json)
            ? t(
                'div',
                { staticClass: 'pl-5' },
                e._l(e.json, function (n, a) {
                  return t(
                    'div',
                    { key: a },
                    [
                      t('router-link', { attrs: { to: `${n.source}:${n.name}` } }, [
                        e._v('\n        ' + e._s(n.name) + '\n      '),
                      ]),
                    ],
                    1,
                  );
                }),
                0,
              )
            : t(
                'div',
                { staticClass: 'pl-5' },
                e._l(Object.keys(e.json), function (n) {
                  return t('div', { key: n }, [t('Branch', { attrs: { json: e.json[n], name: n } })], 1);
                }),
                0,
              ),
        ]);
      };
      Bl._withStripped = !0;
      var Vl = xl(
        {
          name: 'Branch',
          props: {
            name: { type: String, default: null },
            json: { type: [Object, Array], default: () => new Object() },
          },
        },
        Bl,
        [],
        !1,
        null,
        null,
        null,
      );
      const zl = xl(
        {
          components: { Branch: Vl.exports, FooterBar: Ol },
          props: { json: { type: Object, default: () => new Object() } },
          computed: {
            trees: function () {
              let e = {};
              for (let t in this.json)
                t.replace('/', '//')
                  .split(/\/(?=[^\/])/)
                  .reduce(
                    function (e, n) {
                      if (!n.includes(':')) return (e[n] = e[n] || {}), e[n];
                      {
                        let [a] = n.split(':');
                        (e[a] = e[a] || []), e[a].push(this.json[t]);
                      }
                    }.bind(this),
                    e,
                  );
              return e;
            },
          },
        },
        ql,
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      Wn.use(kl);
      const Hl = {
        'contracts/escrow/Escrow.sol:Escrow': {
          source: 'contracts/escrow/Escrow.sol',
          name: 'Escrow',
          constructor: {
            inputs: [{ internalType: 'contract IManager', name: '_manager', type: 'address' }],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          events: {
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
              details:
                "Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._",
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
              details:
                'Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
              details:
                'Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)',
            },
          },
          stateVariables: {
            'ESCROW_MANAGER_ROLE()': {
              inputs: [],
              name: 'ESCROW_MANAGER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Keccak256 hashed `ESCROW_MANAGER_ROLE` string',
            },
          },
          methods: {
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.",
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC165-supportsInterface}.',
            },
          },
        },
        'contracts/manager/Manager.sol:Manager': {
          source: 'contracts/manager/Manager.sol',
          name: 'Manager',
          title: 'Manager contract for contracts management',
          author: 'Bohdan',
          constructor: {
            inputs: [
              { internalType: 'contract IMCGR', name: '_MCGR', type: 'address' },
              { internalType: 'contract IELU', name: '_ELU', type: 'address' },
              { internalType: 'contract INRGS', name: '_NRGS', type: 'address' },
              { internalType: 'uint256', name: '_rewardAmount', type: 'uint256' },
              { internalType: 'uint256', name: '_tolerance', type: 'uint256' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          events: {
            'ELUchanged(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !1, internalType: 'contract IELU', name: 'newELU', type: 'address' },
              ],
              name: 'ELUchanged',
              type: 'event',
              details: 'Emitted when a manager has changed the `ELU` link to another contract',
            },
            'MCGRchanged(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !1, internalType: 'contract IMCGR', name: 'newMCGR', type: 'address' },
              ],
              name: 'MCGRchanged',
              type: 'event',
              details: 'Emitted when a manager has changed the `MCGR` link to another contract',
            },
            'NRGSchanged(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !1, internalType: 'contract INRGS', name: 'newNRGS', type: 'address' },
              ],
              name: 'NRGSchanged',
              type: 'event',
              details: 'Emitted when a manager has changed the `NRGS` link to another contract',
            },
            'OracleChanged(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !1, internalType: 'contract IEnergyOracle', name: 'oracle', type: 'address' },
              ],
              name: 'OracleChanged',
              type: 'event',
              details: 'Emitted when a manager has changed the `oracle` link to another contract',
            },
            'RegisterChanged(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !1, internalType: 'contract IRegister', name: 'register', type: 'address' },
              ],
              name: 'RegisterChanged',
              type: 'event',
              details: 'Emitted when a manager has changed the `register` link to another contract',
            },
            'RewardAmountChanged(address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'newRewardAmount', type: 'uint256' },
              ],
              name: 'RewardAmountChanged',
              type: 'event',
              details: 'Emitted when a manager has changed the `rewardAmount`',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
              details:
                "Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._",
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
              details:
                'Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
              details:
                'Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)',
            },
            'StakingChanged(address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !1, internalType: 'contract IStakingReward', name: 'staking', type: 'address' },
              ],
              name: 'StakingChanged',
              type: 'event',
              details: 'Emitted when a manager has changed the `staking` link to another contract',
            },
            'ToleranceChanged(address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'newTolerance', type: 'uint256' },
              ],
              name: 'ToleranceChanged',
              type: 'event',
              details: 'Emitted when a manager has changed the `tolerance`',
            },
          },
          stateVariables: {
            'ELU()': {
              inputs: [],
              name: 'ELU',
              outputs: [{ internalType: 'contract IELU', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Electricity user NFT token',
            },
            'MANAGER_ROLE()': {
              inputs: [],
              name: 'MANAGER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Keccak256 hashed `MANAGER_ROLE` string',
            },
            'MCGR()': {
              inputs: [],
              name: 'MCGR',
              outputs: [{ internalType: 'contract IMCGR', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Reward token',
            },
            'NRGS()': {
              inputs: [],
              name: 'NRGS',
              outputs: [{ internalType: 'contract INRGS', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Energy Supplier NFT token',
            },
            'oracle()': {
              inputs: [],
              name: 'oracle',
              outputs: [{ internalType: 'contract IEnergyOracle', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Oracle contract',
            },
            'register()': {
              inputs: [],
              name: 'register',
              outputs: [{ internalType: 'contract IRegister', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Register contract',
            },
            'rewardAmount()': {
              inputs: [],
              name: 'rewardAmount',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Amount of rewards to suppliers',
            },
            'staking()': {
              inputs: [],
              name: 'staking',
              outputs: [{ internalType: 'contract IStakingReward', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Staking contract',
            },
            'tolerance()': {
              inputs: [],
              name: 'tolerance',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Tolerance for equality',
            },
          },
          methods: {
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'changeELU(address)': {
              inputs: [{ internalType: 'contract IELU', name: '_ELU', type: 'address' }],
              name: 'changeELU',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _ELU: 'IELU' },
              returns: { _0: 'bool' },
              notice: 'Changes ELU link to another contract. Requirements: - `msg.sender` must have `MANAGER_ROLE`',
            },
            'changeMCGR(address)': {
              inputs: [{ internalType: 'contract IMCGR', name: '_MCGR', type: 'address' }],
              name: 'changeMCGR',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _MCGR: 'IMCGR' },
              returns: { _0: 'bool' },
              notice: 'Changes MCGR link to another contract. Requirements: - `msg.sender` must have `MANAGER_ROLE`',
            },
            'changeNRGS(address)': {
              inputs: [{ internalType: 'contract INRGS', name: '_NRGS', type: 'address' }],
              name: 'changeNRGS',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _NRGS: 'INRGS' },
              returns: { _0: 'bool' },
              notice: 'Changes NRGS link to another contract. Requirements: - `msg.sender` must have `MANAGER_ROLE`',
            },
            'changeOracle(address)': {
              inputs: [{ internalType: 'contract IEnergyOracle', name: '_oracle', type: 'address' }],
              name: 'changeOracle',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _oracle: 'IEnergyOracle' },
              returns: { _0: 'bool' },
              notice:
                'Changes `oracle` link to another contract. Requirements: - `msg.sender` must have `MANAGER_ROLE`',
            },
            'changeRegister(address)': {
              inputs: [{ internalType: 'contract IRegister', name: '_register', type: 'address' }],
              name: 'changeRegister',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _register: 'IRegister' },
              returns: { _0: 'bool' },
              notice:
                'Changes `register` link to another contract. Requirements: - `msg.sender` must have `MANAGER_ROLE`',
            },
            'changeRewardAmount(uint256)': {
              inputs: [{ internalType: 'uint256', name: '_newRewardAmount', type: 'uint256' }],
              name: 'changeRewardAmount',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _newRewardAmount: 'uint256' },
              returns: { _0: 'bool' },
              notice: 'Changes reward amount to another amount. Requirements: - `msg.sender` must have `MANAGER_ROLE`',
            },
            'changeStakingContract(address)': {
              inputs: [{ internalType: 'contract IStakingReward', name: '_staking', type: 'address' }],
              name: 'changeStakingContract',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _staking: 'IStakingReward' },
              returns: { _0: 'bool' },
              notice:
                'Changes `staking` link to another contract. Requirements: - `msg.sender` must have `MANAGER_ROLE`',
            },
            'changeTolerance(uint256)': {
              inputs: [{ internalType: 'uint256', name: '_newTolerance', type: 'uint256' }],
              name: 'changeTolerance',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { _newTolerance: 'uint256' },
              returns: { _0: 'bool' },
              notice:
                'Changes tolerance amount to another amount. Requirements: - `msg.sender` must have `MANAGER_ROLE`',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.",
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC165-supportsInterface}.',
            },
          },
        },
        'contracts/manager/interfaces/IManager.sol:IManager': {
          source: 'contracts/manager/interfaces/IManager.sol',
          name: 'IManager',
          methods: {
            'ELU()': {
              inputs: [],
              name: 'ELU',
              outputs: [{ internalType: 'contract IELU', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Electricity user NFT token',
            },
            'MCGR()': {
              inputs: [],
              name: 'MCGR',
              outputs: [{ internalType: 'contract IMCGR', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Reward token',
            },
            'NRGS()': {
              inputs: [],
              name: 'NRGS',
              outputs: [{ internalType: 'contract INRGS', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Energy Supplier NFT token',
            },
            'oracle()': {
              inputs: [],
              name: 'oracle',
              outputs: [{ internalType: 'contract IEnergyOracle', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Staking contract',
            },
            'register()': {
              inputs: [],
              name: 'register',
              outputs: [{ internalType: 'contract IRegister', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Register contract',
            },
            'rewardAmount()': {
              inputs: [],
              name: 'rewardAmount',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Amount of rewards to suppliers',
            },
            'staking()': {
              inputs: [],
              name: 'staking',
              outputs: [{ internalType: 'contract IStakingReward', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Staking contract',
            },
            'tolerance()': {
              inputs: [],
              name: 'tolerance',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Tolerance for equality',
            },
          },
        },
        'contracts/math/FixedPointMath.sol:FixedPointMath': {
          source: 'contracts/math/FixedPointMath.sol',
          name: 'FixedPointMath',
          details: 'Library for Fixed Points',
          methods: {
            'mulDiv(uint256,uint256,uint256)': {
              inputs: [
                { internalType: 'uint256', name: 'x', type: 'uint256' },
                { internalType: 'uint256', name: 'y', type: 'uint256' },
                { internalType: 'uint256', name: 'denominator', type: 'uint256' },
              ],
              name: 'mulDiv',
              outputs: [{ internalType: 'uint256', name: 'result', type: 'uint256' }],
              stateMutability: 'pure',
              type: 'function',
              'custom:smtchecker': 'abstract-function-nondet',
              details:
                'Credits to Remco Bloemen under MIT license https://xn--2-umb.com/21/muldiv. Notes: - The result is rounded down. Requirements: - The denominator must not be zero. - The result must fit in uint256.',
              params: {
                denominator: 'The divisor as a uint256.',
                x: 'The multiplicand as a uint256.',
                y: 'The multiplier as a uint256.',
              },
              returns: { result: 'The result as a uint256.' },
              notice: 'Calculates floor(x*y÷denominator) with 512-bit precision.',
            },
          },
        },
        'contracts/mocks/EscrowMock.sol:EscrowMock': {
          source: 'contracts/mocks/EscrowMock.sol',
          name: 'EscrowMock',
          constructor: {
            inputs: [{ internalType: 'contract IEnergyOracle', name: '_oracle', type: 'address' }],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          methods: {
            'consumption()': {
              inputs: [],
              name: 'consumption',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
            },
            'oracle()': {
              inputs: [],
              name: 'oracle',
              outputs: [{ internalType: 'contract IEnergyOracle', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
            },
            'read(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'user', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'read',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
            },
          },
        },
        'contracts/oracle/Oracle.sol:EnergyOracle': {
          source: 'contracts/oracle/Oracle.sol',
          name: 'EnergyOracle',
          title: 'Oracle contract to record indicators of consumed energy from the source',
          author: 'Bohdan',
          details:
            'This contract allows recording and retrieving energy consumption data for users and tokens. The contract is managed by an Oracle Provider who can record energy consumption and an Energy Oracle Manager who can retrieve the consumption data.',
          constructor: {
            inputs: [{ internalType: 'contract IManager', name: '_manager', type: 'address' }],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          events: {
            'EnergyConsumptionRecorded(address,address,uint256,uint256,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'user', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { indexed: !1, internalType: 'uint256', name: 'timestamp', type: 'uint256' },
                { indexed: !1, internalType: 'uint256', name: 'consumption', type: 'uint256' },
              ],
              name: 'EnergyConsumptionRecorded',
              type: 'event',
              details: 'Emmited when an Oracle provider',
            },
            'EnergyConsumptionSent(address,address,uint256,uint256,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'user', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { indexed: !1, internalType: 'uint256', name: 'timestamp', type: 'uint256' },
                { indexed: !1, internalType: 'uint256', name: 'consumption', type: 'uint256' },
              ],
              name: 'EnergyConsumptionSent',
              type: 'event',
              details: 'Emmited when called getEnergyConsumption()',
            },
            'OutlierDetected(address,address,uint256,uint256,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'user', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { indexed: !1, internalType: 'uint256', name: 'timestamp', type: 'uint256' },
                { indexed: !1, internalType: 'uint256', name: 'consumption', type: 'uint256' },
              ],
              name: 'OutlierDetected',
              type: 'event',
              details: 'Emmited when an Outlier values provided',
            },
            'Paused(address)': {
              anonymous: !1,
              inputs: [{ indexed: !1, internalType: 'address', name: 'account', type: 'address' }],
              name: 'Paused',
              type: 'event',
              details: 'Emitted when the pause is triggered by `account`.',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
              details:
                "Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._",
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
              details:
                'Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
              details:
                'Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)',
            },
            'Unpaused(address)': {
              anonymous: !1,
              inputs: [{ indexed: !1, internalType: 'address', name: 'account', type: 'address' }],
              name: 'Unpaused',
              type: 'event',
              details: 'Emitted when the pause is lifted by `account`.',
            },
          },
          stateVariables: {
            'ENERGY_ORACLE_MANAGER_ROLE()': {
              inputs: [],
              name: 'ENERGY_ORACLE_MANAGER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Keccak256 hashed `ENERGY_ORACLE_MANAGER_ROLE` string',
            },
            'ESCROW()': {
              inputs: [],
              name: 'ESCROW',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Keccak256 hashed `ESCROW` string',
            },
            'ORACLE_PROVIDER_ROLE()': {
              inputs: [],
              name: 'ORACLE_PROVIDER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Keccak256 hashed `ORACLE_PROVIDER_ROLE` string',
            },
            'manager()': {
              inputs: [],
              name: 'manager',
              outputs: [{ internalType: 'contract IManager', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Manager contract',
            },
          },
          methods: {
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'energyConsumptions(address,uint256,uint256)': {
              inputs: [
                { internalType: 'address', name: 'user', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'uint256', name: 'id', type: 'uint256' },
              ],
              name: 'energyConsumptions',
              outputs: [
                { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
                { internalType: 'uint256', name: 'consumption', type: 'uint256' },
              ],
              stateMutability: 'view',
              type: 'function',
            },
            'getEnergyConsumption(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'user', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'getEnergyConsumption',
              outputs: [{ internalType: 'uint256', name: 'consumption', type: 'uint256' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { tokenId: 'The token ID', user: 'The user address' },
              returns: { consumption: 'The energy consumption value' },
              notice:
                'Gets the energy consumption for a user, token Requirements: `msg.sender` must have ORACLE_PROVIDER_ROLE',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'pause()': {
              inputs: [],
              name: 'pause',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Requirements: - `msg.sender` must have ENERGY_ORACLE_MANAGER_ROLE',
              notice: 'Pauses the contract',
            },
            'paused()': {
              inputs: [],
              name: 'paused',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns true if the contract is paused, and false otherwise.',
            },
            'recordEnergyConsumption(address,uint256,uint256,uint256)': {
              inputs: [
                { internalType: 'address', name: 'user', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
                { internalType: 'uint256', name: 'consumption', type: 'uint256' },
              ],
              name: 'recordEnergyConsumption',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Requirements: - `msg.sender` must have ORACLE_PROVIDER_ROLE - `user` must have token with `tokenId` - `timestamp` must be equal to 21:00',
              params: {
                consumption: 'The energy consumption value',
                timestamp: 'The timestamp for the energy consumption',
                tokenId: 'The token ID',
                user: 'The user address',
              },
              notice: 'Records the energy consumption for a user and token at a specific timestamp.',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.",
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC165-supportsInterface}.',
            },
            'unpause()': {
              inputs: [],
              name: 'unpause',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Requirements: - `msg.sender` must have ENERGY_ORACLE_MANAGER_ROLE',
              notice: 'Unpauses the contract',
            },
          },
        },
        'contracts/oracle/interfaces/IOracle.sol:IEnergyOracle': {
          source: 'contracts/oracle/interfaces/IOracle.sol',
          name: 'IEnergyOracle',
          title: 'Interface for oracle contract to record indicators of consumed energy from the source',
          author: 'Bohdan',
          details:
            'This contract allows recording and retrieving energy consumption data for users and tokens. The contract is managed by an Oracle Provider who can record energy consumption and an Energy Oracle Manager who can retrieve the consumption data.',
          methods: {
            'getEnergyConsumption(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'user', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'getEnergyConsumption',
              outputs: [{ internalType: 'uint256', name: 'consumption', type: 'uint256' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { tokenId: 'The token ID', user: 'The user address' },
              returns: { consumption: 'The energy consumption value' },
              notice:
                'Gets the energy consumption for a user, token Requirements: `msg.sender` must have ORACLE_PROVIDER_ROLE',
            },
            'recordEnergyConsumption(address,uint256,uint256,uint256)': {
              inputs: [
                { internalType: 'address', name: 'user', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
                { internalType: 'uint256', name: 'consumption', type: 'uint256' },
              ],
              name: 'recordEnergyConsumption',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Requirements: - `msg.sender` must have ORACLE_PROVIDER_ROLE - `user` must have token with `tokenId` - `timestamp` must be arrived',
              params: {
                consumption: 'The energy consumption value',
                timestamp: 'The timestamp for the energy consumption',
                tokenId: 'The token ID',
                user: 'The user address',
              },
              notice: 'Records the energy consumption for a user and token at a specific timestamp.',
            },
          },
        },
        'contracts/register/Register.sol:Register': {
          source: 'contracts/register/Register.sol',
          name: 'Register',
          title: 'Contract for registration of suppliers and users',
          author: 'Bohdan',
          constructor: {
            inputs: [{ internalType: 'contract IManager', name: '_manager', type: 'address' }],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          events: {
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
              details:
                "Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._",
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
              details:
                'Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
              details:
                'Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)',
            },
            'SupplierRegistered(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'supplier', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'timestamp', type: 'uint256' },
              ],
              name: 'SupplierRegistered',
              type: 'event',
              details: 'Emmited when a user registers as an Energy supplier',
            },
            'SupplierUnregistered(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'supplier', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'timestamp', type: 'uint256' },
              ],
              name: 'SupplierUnregistered',
              type: 'event',
              details: 'Emmited when a user unregisters as an Energy supplier',
            },
            'UserRegistered(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'user', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'timestamp', type: 'uint256' },
              ],
              name: 'UserRegistered',
              type: 'event',
              details: 'Emmited when a user registers as an Electricity user',
            },
            'UserUnregistered(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'user', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'timestamp', type: 'uint256' },
              ],
              name: 'UserUnregistered',
              type: 'event',
              details: 'Emmited when a user unregisters as an Electricity user',
            },
          },
          stateVariables: {
            'REGISTER_MANAGER_ROLE()': {
              inputs: [],
              name: 'REGISTER_MANAGER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Keccak256 hashed `REGISTER_MANAGER_ROLE` string',
            },
            'manager()': {
              inputs: [],
              name: 'manager',
              outputs: [{ internalType: 'contract IManager', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Manager contract',
            },
          },
          methods: {
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'registerElectricityUser(address,uint256,address)': {
              inputs: [
                { internalType: 'address', name: 'user', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'address', name: 'supplier', type: 'address' },
              ],
              name: 'registerElectricityUser',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { tokenId: 'uint256', user: 'address' },
              returns: { _0: 'bool' },
              notice:
                'Registers Electricity user. Requirements: - `msg.sender` must have REGISTER_MANAGER_ROLE - `user` must not be address 0 - `user` must have NRGS token',
            },
            'registerSupplier(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'supplier', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'registerSupplier',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { supplier: 'address', tokenId: 'uint256' },
              returns: { _0: 'bool' },
              notice:
                'Registers Energy supplier. Requirements: - `msg.sender` must have REGISTER_MANAGER_ROLE - `supplier` must not be address 0 - `supplier` must have NRGS token',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.",
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC165-supportsInterface}.',
            },
            'unRegisterElectricityUser(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'user', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'unRegisterElectricityUser',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { tokenId: 'uint256', user: 'address' },
              returns: { _0: 'bool' },
              notice:
                'Unregisters Electricity user. Requirements: - `msg.sender` must have REGISTER_MANAGER_ROLE - `user` must not be address 0 - `user` must have ELU token',
            },
            'unRegisterSupplier(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'supplier', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'unRegisterSupplier',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { supplier: 'address', tokenId: 'uint256' },
              returns: { _0: 'bool' },
              notice:
                'Unregisters Energy supplier. Requirements: - `msg.sender` must have REGISTER_MANAGER_ROLE - `supplier` must not be address 0 - `supplier` must have NRGS token',
            },
          },
        },
        'contracts/register/interfaces/IRegister.sol:IRegister': {
          source: 'contracts/register/interfaces/IRegister.sol',
          name: 'IRegister',
          title: 'Interface for contract for registration of suppliers and users',
          author: 'Bohdan',
          methods: {
            'registerElectricityUser(address,uint256,address)': {
              inputs: [
                { internalType: 'address', name: 'user', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'address', name: 'supplier', type: 'address' },
              ],
              name: 'registerElectricityUser',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { tokenId: 'uint256', user: 'address' },
              returns: { _0: 'bool' },
              notice:
                'Registers Electricity user. Requirements: - `msg.sender` must have REGISTER_MANAGER_ROLE - `user` must not be address 0 - `user` must have NRGS token',
            },
            'registerSupplier(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'supplier', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'registerSupplier',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { supplier: 'address', tokenId: 'uint256' },
              returns: { _0: 'bool' },
              notice:
                'Registers Energy supplier. Requirements: - `msg.sender` must have REGISTER_MANAGER_ROLE - `supplier` must not be address 0 - `supplier` must have NRGS token',
            },
            'unRegisterElectricityUser(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'user', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'unRegisterElectricityUser',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { tokenId: 'uint256', user: 'address' },
              returns: { _0: 'bool' },
              notice:
                'Unregisters Electricity user. Requirements: - `msg.sender` must have REGISTER_MANAGER_ROLE - `user` must not be address 0 - `user` must have ELU token',
            },
            'unRegisterSupplier(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'supplier', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'unRegisterSupplier',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { supplier: 'address', tokenId: 'uint256' },
              returns: { _0: 'bool' },
              notice:
                'Unregisters Energy supplier. Requirements: - `msg.sender` must have REGISTER_MANAGER_ROLE - `supplier` must not be address 0 - `supplier` must have NRGS token',
            },
          },
        },
        'contracts/staking/StakingReward.sol:StakingReward': {
          source: 'contracts/staking/StakingReward.sol',
          name: 'StakingReward',
          title: 'StakingReward contract for rewards management',
          author: 'Bohdan',
          constructor: {
            inputs: [{ internalType: 'contract IManager', name: '_manager', type: 'address' }],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          events: {
            'EnterStaking(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'supplier', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'timestamp', type: 'uint256' },
              ],
              name: 'EnterStaking',
              type: 'event',
              details: 'Emmited when a user registers as an Energy supplier',
            },
            'ExitStaking(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'supplier', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'timestamp', type: 'uint256' },
              ],
              name: 'ExitStaking',
              type: 'event',
              details: 'Emmited when a user unregisters as an Energy supplier',
            },
            'RewardSent(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'RewardSent',
              type: 'event',
              details: 'Emitted when a supplier withdraws some amount of rewards from `StakingReward`',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
              details:
                "Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._",
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
              details:
                'Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
              details:
                'Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)',
            },
          },
          stateVariables: {
            'STAKING_MANAGER_ROLE()': {
              inputs: [],
              name: 'STAKING_MANAGER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Keccak256 hashed `STAKING_MANAGER_ROLE` string',
            },
            'manager()': {
              inputs: [],
              name: 'manager',
              outputs: [{ internalType: 'contract IManager', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Manager contract',
            },
            'totalSuppliers()': {
              inputs: [],
              name: 'totalSuppliers',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Total suppliers',
            },
          },
          methods: {
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'enterStaking(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'supplier', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'enterStaking',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { supplier: 'address', tokenId: 'uint256' },
              returns: { _0: 'bool' },
              notice:
                'Enters staking process. Requirements: - `msg.sender` must have STAKING_MANAGER_ROLE - `supplier` must not be address 0 - `supplier` must have NRGS token',
            },
            'exitStaking(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'supplier', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'exitStaking',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { supplier: 'address', tokenId: 'uint256' },
              returns: { _0: 'bool' },
              notice:
                'Exits staking. Requirements: - `msg.sender` must have STAKING_MANAGER_ROLE - `supplier` must be in staking',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.",
            },
            'sendRewards(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'supplier', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'sendRewards',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { supplier: 'address', tokenId: 'uint256' },
              returns: { _0: 'bool' },
              notice:
                'Sends rewards to suppliers. Requirements: - `msg.sender` must have STAKING_MANAGER_ROLE - `supplier` must be in staking',
            },
            'suppliers(address,uint256)': {
              inputs: [
                { internalType: 'address', name: '', type: 'address' },
                { internalType: 'uint256', name: '', type: 'uint256' },
              ],
              name: 'suppliers',
              outputs: [
                { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
                { internalType: 'uint256', name: 'pendingReward', type: 'uint256' },
              ],
              stateMutability: 'view',
              type: 'function',
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC165-supportsInterface}.',
            },
            'updateRewards(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'supplier', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'updateRewards',
              outputs: [
                {
                  components: [
                    { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
                    { internalType: 'uint256', name: 'pendingReward', type: 'uint256' },
                  ],
                  internalType: 'struct StakingReward.Supplier',
                  name: '',
                  type: 'tuple',
                },
              ],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { supplier: 'address', tokenId: 'uint256' },
              returns: { _0: 'Supplier memory' },
              notice: 'Updates rewards for `supplier`. Requirements: - `supplier` must be in staking',
            },
          },
        },
        'contracts/staking/interfaces/IStakingReward.sol:IStakingReward': {
          source: 'contracts/staking/interfaces/IStakingReward.sol',
          name: 'IStakingReward',
          title: 'Interface for StakingReward contract',
          author: 'Bohdan',
          methods: {
            'enterStaking(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'supplier', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'enterStaking',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { supplier: 'address', tokenId: 'uint256' },
              returns: { _0: 'bool' },
              notice:
                'Enters staking process. Requirements: - `msg.sender` must have STAKING_MANAGER_ROLE - `supplier` must not be address 0 - `supplier` must have NRGS token',
            },
            'exitStaking(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'supplier', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'exitStaking',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { supplier: 'address', tokenId: 'uint256' },
              returns: { _0: 'bool' },
              notice:
                'Exits staking. Requirements: - `msg.sender` must have STAKING_MANAGER_ROLE - `supplier` must be in staking',
            },
            'sendRewards(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'supplier', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'sendRewards',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { supplier: 'address', tokenId: 'uint256' },
              returns: { _0: 'bool' },
              notice:
                'Sends rewards to suppliers. Requirements: - `msg.sender` must have STAKING_MANAGER_ROLE - `supplier` must be in staking',
            },
            'suppliers(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'supplier', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'suppliers',
              outputs: [
                {
                  components: [
                    { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
                    { internalType: 'uint256', name: 'pendingReward', type: 'uint256' },
                  ],
                  internalType: 'struct IStakingReward.Supplier',
                  name: '',
                  type: 'tuple',
                },
              ],
              stateMutability: 'view',
              type: 'function',
              details: 'Address to supplier',
            },
            'updateRewards(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'supplier', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'updateRewards',
              outputs: [
                {
                  components: [
                    { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
                    { internalType: 'uint256', name: 'pendingReward', type: 'uint256' },
                  ],
                  internalType: 'struct IStakingReward.Supplier',
                  name: '',
                  type: 'tuple',
                },
              ],
              stateMutability: 'nonpayable',
              type: 'function',
              params: { supplier: 'address', tokenId: 'uint256' },
              returns: { _0: 'Supplier memory' },
              notice: 'Updates rewards for `supplier`. Requirements: - `supplier` must be in staking',
            },
          },
        },
        'contracts/tokens/ERC20/MCGR.sol:MCGR': {
          source: 'contracts/tokens/ERC20/MCGR.sol',
          name: 'MCGR',
          title: 'MCGR token contract Can be used as staking reward token, or rewards for Oracle makers.',
          author: 'Bohdan',
          constructor: { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
          events: {
            'Approval(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'spender', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'value', type: 'uint256' },
              ],
              name: 'Approval',
              type: 'event',
              details:
                'Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
              details:
                "Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._",
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
              details:
                'Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
              details:
                'Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)',
            },
            'Transfer(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
                { indexed: !1, internalType: 'uint256', name: 'value', type: 'uint256' },
              ],
              name: 'Transfer',
              type: 'event',
              details:
                'Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.',
            },
          },
          methods: {
            'BURNER_ROLE()': {
              inputs: [],
              name: 'BURNER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'MINTER_ROLE()': {
              inputs: [],
              name: 'MINTER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'allowance(address,address)': {
              inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'spender', type: 'address' },
              ],
              name: 'allowance',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC20-allowance}.',
            },
            'approve(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'approve',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.',
            },
            'balanceOf(address)': {
              inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
              name: 'balanceOf',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC20-balanceOf}.',
            },
            'burn(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'burn',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Burns `from` address some `amount` of tokens Requirements: - only `BURNER_ROLE`',
              params: { amount: 'of tokens to burn', from: 'address to mint' },
            },
            'decimals()': {
              inputs: [],
              name: 'decimals',
              outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.',
            },
            'decreaseAllowance(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
              ],
              name: 'decreaseAllowance',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'increaseAllowance(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
              ],
              name: 'increaseAllowance',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.',
            },
            'mint(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'mint',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Mints `to` address some `amount` of tokens Requirements: - only `MINTER_ROLE`',
              params: { amount: 'of tokens to mint', to: 'address to mint' },
            },
            'name()': {
              inputs: [],
              name: 'name',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns the name of the token.',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.",
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC165-supportsInterface}.',
            },
            'symbol()': {
              inputs: [],
              name: 'symbol',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns the symbol of the token, usually a shorter version of the name.',
            },
            'totalSupply()': {
              inputs: [],
              name: 'totalSupply',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC20-totalSupply}.',
            },
            'transfer(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'transfer',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.',
            },
            'transferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'transferFrom',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.",
            },
          },
        },
        'contracts/tokens/ERC20/interfaces/IMCGR.sol:IMCGR': {
          source: 'contracts/tokens/ERC20/interfaces/IMCGR.sol',
          name: 'IMCGR',
          title: 'IMCGR interface of MCGR contract Can be used as staking reward token, or rewards for Oracle makers.',
          author: 'Bohdan',
          methods: {
            'burn(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'burn',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Burns `from` address some `amount` of tokens Requirements: - only `BURNER_ROLE`',
              params: { amount: 'of tokens to burn', from: 'address to mint' },
            },
            'mint(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
              ],
              name: 'mint',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Mints `to` address some `amount` of tokens Requirements: - only `MINTER_ROLE`',
              params: { amount: 'of tokens to mint', to: 'address to mint' },
            },
          },
        },
        'contracts/tokens/ERC721/ELU.sol:ELU': {
          source: 'contracts/tokens/ERC721/ELU.sol',
          name: 'ELU',
          title: 'Electricity user token contract (ERC721 standard).',
          author: 'Bohdan',
          constructor: { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
          events: {
            'Approval(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'approved', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'Approval',
              type: 'event',
              details: 'Emitted when `owner` enables `approved` to manage the `tokenId` token.',
            },
            'ApprovalForAll(address,address,bool)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'operator', type: 'address' },
                { indexed: !1, internalType: 'bool', name: 'approved', type: 'bool' },
              ],
              name: 'ApprovalForAll',
              type: 'event',
              details: 'Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
              details:
                "Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._",
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
              details:
                'Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
              details:
                'Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)',
            },
            'Transfer(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'Transfer',
              type: 'event',
              details: 'Emitted when `tokenId` token is transferred from `from` to `to`.',
            },
          },
          methods: {
            'BURNER_ROLE()': {
              inputs: [],
              name: 'BURNER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'MINTER_ROLE()': {
              inputs: [],
              name: 'MINTER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'approve(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'approve',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-approve}.',
            },
            'balanceOf(address)': {
              inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
              name: 'balanceOf',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721-balanceOf}.',
            },
            'burn(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'burn',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Burns `from` address ELU token',
              params: { tokenId: 'uint256' },
            },
            'getApproved(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'getApproved',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721-getApproved}.',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'isApprovedForAll(address,address)': {
              inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'operator', type: 'address' },
              ],
              name: 'isApprovedForAll',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721-isApprovedForAll}.',
            },
            'mint(address,uint256,address)': {
              inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'address', name: 'supplier', type: 'address' },
              ],
              name: 'mint',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Mints `to` address ELU token',
              params: { to: 'address to mint' },
            },
            'name()': {
              inputs: [],
              name: 'name',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721Metadata-name}.',
            },
            'ownerOf(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'ownerOf',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721-ownerOf}.',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.",
            },
            'safeTransferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'safeTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-safeTransferFrom}.',
            },
            'safeTransferFrom(address,address,uint256,bytes)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'bytes', name: 'data', type: 'bytes' },
              ],
              name: 'safeTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-safeTransferFrom}.',
            },
            'setApprovalForAll(address,bool)': {
              inputs: [
                { internalType: 'address', name: 'operator', type: 'address' },
                { internalType: 'bool', name: 'approved', type: 'bool' },
              ],
              name: 'setApprovalForAll',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-setApprovalForAll}.',
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC165-supportsInterface}.',
            },
            'symbol()': {
              inputs: [],
              name: 'symbol',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721Metadata-symbol}.',
            },
            'tokenURI(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'tokenURI',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721Metadata-tokenURI}.',
            },
            'transferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'transferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-transferFrom}.',
            },
            'userToSupplier(address)': {
              inputs: [{ internalType: 'address', name: '', type: 'address' }],
              name: 'userToSupplier',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
            },
          },
        },
        'contracts/tokens/ERC721/NFTTemplate.sol:NFTTemplate': {
          source: 'contracts/tokens/ERC721/NFTTemplate.sol',
          name: 'NFTTemplate',
          title: 'Template for NFT tokens',
          author: 'Bohdan',
          constructor: {
            inputs: [
              { internalType: 'string', name: '_name', type: 'string' },
              { internalType: 'string', name: '_symbol', type: 'string' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          events: {
            'Approval(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'approved', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'Approval',
              type: 'event',
              details: 'Emitted when `owner` enables `approved` to manage the `tokenId` token.',
            },
            'ApprovalForAll(address,address,bool)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'operator', type: 'address' },
                { indexed: !1, internalType: 'bool', name: 'approved', type: 'bool' },
              ],
              name: 'ApprovalForAll',
              type: 'event',
              details: 'Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
              details:
                "Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._",
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
              details:
                'Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
              details:
                'Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)',
            },
            'Transfer(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'Transfer',
              type: 'event',
              details: 'Emitted when `tokenId` token is transferred from `from` to `to`.',
            },
          },
          methods: {
            'BURNER_ROLE()': {
              inputs: [],
              name: 'BURNER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'MINTER_ROLE()': {
              inputs: [],
              name: 'MINTER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'approve(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'approve',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-approve}.',
            },
            'balanceOf(address)': {
              inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
              name: 'balanceOf',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721-balanceOf}.',
            },
            'getApproved(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'getApproved',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721-getApproved}.',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'isApprovedForAll(address,address)': {
              inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'operator', type: 'address' },
              ],
              name: 'isApprovedForAll',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721-isApprovedForAll}.',
            },
            'name()': {
              inputs: [],
              name: 'name',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721Metadata-name}.',
            },
            'ownerOf(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'ownerOf',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721-ownerOf}.',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.",
            },
            'safeTransferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'safeTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-safeTransferFrom}.',
            },
            'safeTransferFrom(address,address,uint256,bytes)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'bytes', name: 'data', type: 'bytes' },
              ],
              name: 'safeTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-safeTransferFrom}.',
            },
            'setApprovalForAll(address,bool)': {
              inputs: [
                { internalType: 'address', name: 'operator', type: 'address' },
                { internalType: 'bool', name: 'approved', type: 'bool' },
              ],
              name: 'setApprovalForAll',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-setApprovalForAll}.',
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC165-supportsInterface}.',
            },
            'symbol()': {
              inputs: [],
              name: 'symbol',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721Metadata-symbol}.',
            },
            'tokenURI(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'tokenURI',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721Metadata-tokenURI}.',
            },
            'transferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'transferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-transferFrom}.',
            },
          },
        },
        'contracts/tokens/ERC721/NRGS.sol:NRGS': {
          source: 'contracts/tokens/ERC721/NRGS.sol',
          name: 'NRGS',
          title: 'Energy Supply token contract (ERC721 standard)',
          author: 'Bohdan',
          constructor: { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
          events: {
            'Approval(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'approved', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'Approval',
              type: 'event',
              details: 'Emitted when `owner` enables `approved` to manage the `tokenId` token.',
            },
            'ApprovalForAll(address,address,bool)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'operator', type: 'address' },
                { indexed: !1, internalType: 'bool', name: 'approved', type: 'bool' },
              ],
              name: 'ApprovalForAll',
              type: 'event',
              details: 'Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.',
            },
            'RoleAdminChanged(bytes32,bytes32,bytes32)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
                { indexed: !0, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
              ],
              name: 'RoleAdminChanged',
              type: 'event',
              details:
                "Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this. _Available since v3.1._",
            },
            'RoleGranted(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleGranted',
              type: 'event',
              details:
                'Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.',
            },
            'RoleRevoked(bytes32,address,address)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { indexed: !0, internalType: 'address', name: 'account', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'sender', type: 'address' },
              ],
              name: 'RoleRevoked',
              type: 'event',
              details:
                'Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)',
            },
            'Transfer(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'Transfer',
              type: 'event',
              details: 'Emitted when `tokenId` token is transferred from `from` to `to`.',
            },
          },
          methods: {
            'BURNER_ROLE()': {
              inputs: [],
              name: 'BURNER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'DEFAULT_ADMIN_ROLE()': {
              inputs: [],
              name: 'DEFAULT_ADMIN_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'MINTER_ROLE()': {
              inputs: [],
              name: 'MINTER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
            },
            'approve(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'approve',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-approve}.',
            },
            'balanceOf(address)': {
              inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
              name: 'balanceOf',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721-balanceOf}.',
            },
            'burn(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'burn',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Burns `from` address NRGS token',
              params: { tokenId: 'uint256' },
            },
            'getApproved(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'getApproved',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721-getApproved}.',
            },
            'getRoleAdmin(bytes32)': {
              inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
              name: 'getRoleAdmin',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'function',
              details:
                "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.",
            },
            'grantRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'grantRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.",
            },
            'hasRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'hasRole',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns `true` if `account` has been granted `role`.',
            },
            'isApprovedForAll(address,address)': {
              inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'operator', type: 'address' },
              ],
              name: 'isApprovedForAll',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721-isApprovedForAll}.',
            },
            'mint(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'mint',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Mints `to` address NRGS token',
              params: { to: 'address to mint' },
            },
            'name()': {
              inputs: [],
              name: 'name',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721Metadata-name}.',
            },
            'ownerOf(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'ownerOf',
              outputs: [{ internalType: 'address', name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721-ownerOf}.',
            },
            'renounceRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'renounceRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.",
            },
            'revokeRole(bytes32,address)': {
              inputs: [
                { internalType: 'bytes32', name: 'role', type: 'bytes32' },
                { internalType: 'address', name: 'account', type: 'address' },
              ],
              name: 'revokeRole',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.",
            },
            'safeTransferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'safeTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-safeTransferFrom}.',
            },
            'safeTransferFrom(address,address,uint256,bytes)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'bytes', name: 'data', type: 'bytes' },
              ],
              name: 'safeTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-safeTransferFrom}.',
            },
            'setApprovalForAll(address,bool)': {
              inputs: [
                { internalType: 'address', name: 'operator', type: 'address' },
                { internalType: 'bool', name: 'approved', type: 'bool' },
              ],
              name: 'setApprovalForAll',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-setApprovalForAll}.',
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC165-supportsInterface}.',
            },
            'symbol()': {
              inputs: [],
              name: 'symbol',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721Metadata-symbol}.',
            },
            'tokenURI(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'tokenURI',
              outputs: [{ internalType: 'string', name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
              details: 'See {IERC721Metadata-tokenURI}.',
            },
            'transferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'transferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'See {IERC721-transferFrom}.',
            },
          },
        },
        'contracts/tokens/ERC721/interfaces/IELU.sol:IELU': {
          source: 'contracts/tokens/ERC721/interfaces/IELU.sol',
          name: 'IELU',
          title: 'Interface for Electricity user token contract (ERC721 standard).',
          author: 'Bohdan',
          events: {
            'Approval(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'approved', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'Approval',
              type: 'event',
              details: 'Emitted when `owner` enables `approved` to manage the `tokenId` token.',
            },
            'ApprovalForAll(address,address,bool)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'operator', type: 'address' },
                { indexed: !1, internalType: 'bool', name: 'approved', type: 'bool' },
              ],
              name: 'ApprovalForAll',
              type: 'event',
              details: 'Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.',
            },
            'Transfer(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'Transfer',
              type: 'event',
              details: 'Emitted when `tokenId` token is transferred from `from` to `to`.',
            },
          },
          methods: {
            'approve(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'approve',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.',
            },
            'balanceOf(address)': {
              inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
              name: 'balanceOf',
              outputs: [{ internalType: 'uint256', name: 'balance', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: "Returns the number of tokens in ``owner``'s account.",
            },
            'burn(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'burn',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Burns `from` address ELU token',
              params: { tokenId: 'uint256' },
            },
            'getApproved(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'getApproved',
              outputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.',
            },
            'isApprovedForAll(address,address)': {
              inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'operator', type: 'address' },
              ],
              name: 'isApprovedForAll',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}',
            },
            'mint(address,uint256,address)': {
              inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'address', name: 'supplier', type: 'address' },
              ],
              name: 'mint',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Mints `to` address ELU token',
              params: { to: 'address to mint' },
            },
            'ownerOf(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'ownerOf',
              outputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.',
            },
            'safeTransferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'safeTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.',
            },
            'safeTransferFrom(address,address,uint256,bytes)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'bytes', name: 'data', type: 'bytes' },
              ],
              name: 'safeTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.',
            },
            'setApprovalForAll(address,bool)': {
              inputs: [
                { internalType: 'address', name: 'operator', type: 'address' },
                { internalType: 'bool', name: '_approved', type: 'bool' },
              ],
              name: 'setApprovalForAll',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.',
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.',
            },
            'totalTokens()': {
              inputs: [],
              name: 'totalTokens',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Total amount of tokens',
            },
            'transferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'transferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Transfers `tokenId` token from `from` to `to`. WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC721 or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must understand this adds an external call which potentially creates a reentrancy vulnerability. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.',
            },
          },
        },
        'contracts/tokens/ERC721/interfaces/INFTTemplate.sol:INFTTemplate': {
          source: 'contracts/tokens/ERC721/interfaces/INFTTemplate.sol',
          name: 'INFTTemplate',
          title: 'Interface for Template for NFT tokens contract',
          author: 'Bohdan',
          events: {
            'Approval(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'approved', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'Approval',
              type: 'event',
              details: 'Emitted when `owner` enables `approved` to manage the `tokenId` token.',
            },
            'ApprovalForAll(address,address,bool)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'operator', type: 'address' },
                { indexed: !1, internalType: 'bool', name: 'approved', type: 'bool' },
              ],
              name: 'ApprovalForAll',
              type: 'event',
              details: 'Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.',
            },
            'Transfer(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'Transfer',
              type: 'event',
              details: 'Emitted when `tokenId` token is transferred from `from` to `to`.',
            },
          },
          methods: {
            'approve(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'approve',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.',
            },
            'balanceOf(address)': {
              inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
              name: 'balanceOf',
              outputs: [{ internalType: 'uint256', name: 'balance', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: "Returns the number of tokens in ``owner``'s account.",
            },
            'getApproved(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'getApproved',
              outputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.',
            },
            'isApprovedForAll(address,address)': {
              inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'operator', type: 'address' },
              ],
              name: 'isApprovedForAll',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}',
            },
            'ownerOf(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'ownerOf',
              outputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.',
            },
            'safeTransferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'safeTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.',
            },
            'safeTransferFrom(address,address,uint256,bytes)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'bytes', name: 'data', type: 'bytes' },
              ],
              name: 'safeTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.',
            },
            'setApprovalForAll(address,bool)': {
              inputs: [
                { internalType: 'address', name: 'operator', type: 'address' },
                { internalType: 'bool', name: '_approved', type: 'bool' },
              ],
              name: 'setApprovalForAll',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.',
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.',
            },
            'totalTokens()': {
              inputs: [],
              name: 'totalTokens',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Total amount of tokens',
            },
            'transferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'transferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Transfers `tokenId` token from `from` to `to`. WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC721 or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must understand this adds an external call which potentially creates a reentrancy vulnerability. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.',
            },
          },
        },
        'contracts/tokens/ERC721/interfaces/INRGS.sol:INRGS': {
          source: 'contracts/tokens/ERC721/interfaces/INRGS.sol',
          name: 'INRGS',
          title: 'Interface for Energy Supply token contract (ERC721 standard)',
          author: 'Bohdan',
          events: {
            'Approval(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'approved', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'Approval',
              type: 'event',
              details: 'Emitted when `owner` enables `approved` to manage the `tokenId` token.',
            },
            'ApprovalForAll(address,address,bool)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'operator', type: 'address' },
                { indexed: !1, internalType: 'bool', name: 'approved', type: 'bool' },
              ],
              name: 'ApprovalForAll',
              type: 'event',
              details: 'Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.',
            },
            'Transfer(address,address,uint256)': {
              anonymous: !1,
              inputs: [
                { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
                { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
                { indexed: !0, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'Transfer',
              type: 'event',
              details: 'Emitted when `tokenId` token is transferred from `from` to `to`.',
            },
          },
          methods: {
            'approve(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'approve',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.',
            },
            'balanceOf(address)': {
              inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
              name: 'balanceOf',
              outputs: [{ internalType: 'uint256', name: 'balance', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: "Returns the number of tokens in ``owner``'s account.",
            },
            'burn(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'burn',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Burns `from` address NRGS token',
              params: { tokenId: 'uint256' },
            },
            'getApproved(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'getApproved',
              outputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.',
            },
            'isApprovedForAll(address,address)': {
              inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'operator', type: 'address' },
              ],
              name: 'isApprovedForAll',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}',
            },
            'mint(address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'mint',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details: 'Mints `to` address NRGS token',
              params: { to: 'address to mint' },
            },
            'ownerOf(uint256)': {
              inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
              name: 'ownerOf',
              outputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.',
            },
            'safeTransferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'safeTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.',
            },
            'safeTransferFrom(address,address,uint256,bytes)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                { internalType: 'bytes', name: 'data', type: 'bytes' },
              ],
              name: 'safeTransferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.',
            },
            'setApprovalForAll(address,bool)': {
              inputs: [
                { internalType: 'address', name: 'operator', type: 'address' },
                { internalType: 'bool', name: '_approved', type: 'bool' },
              ],
              name: 'setApprovalForAll',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.',
            },
            'supportsInterface(bytes4)': {
              inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
              name: 'supportsInterface',
              outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
              stateMutability: 'view',
              type: 'function',
              details:
                'Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.',
            },
            'totalTokens()': {
              inputs: [],
              name: 'totalTokens',
              outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
              stateMutability: 'view',
              type: 'function',
              details: 'Total amount of tokens',
            },
            'transferFrom(address,address,uint256)': {
              inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              ],
              name: 'transferFrom',
              outputs: [],
              stateMutability: 'nonpayable',
              type: 'function',
              details:
                'Transfers `tokenId` token from `from` to `to`. WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC721 or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must understand this adds an external call which potentially creates a reentrancy vulnerability. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.',
            },
          },
        },
        'contracts/tokens/TokenRoles.sol:TokenRoles': {
          source: 'contracts/tokens/TokenRoles.sol',
          name: 'TokenRoles',
          title: "Abstract contract for tokens' roles",
          author: 'Bohdan',
          stateVariables: {
            'BURNER_ROLE()': {
              inputs: [],
              name: 'BURNER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Keccak256 hashed `BURNER_ROLE` string',
            },
            'MINTER_ROLE()': {
              inputs: [],
              name: 'MINTER_ROLE',
              outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
              stateMutability: 'view',
              type: 'stateVariable',
              details: 'Keccak256 hashed `MINTER_ROLE` string',
            },
          },
        },
      };
      new Wn({
        el: '#app',
        router: new kl({
          routes: [
            { path: '/', component: zl, props: () => ({ json: Hl }) },
            { path: '*', component: Pl, props: e => ({ json: Hl[e.path.slice(1)] }) },
          ],
        }),
        mounted() {
          document.dispatchEvent(new Event('render-event'));
        },
        render: e => e(Il),
      });
    })();
})();
