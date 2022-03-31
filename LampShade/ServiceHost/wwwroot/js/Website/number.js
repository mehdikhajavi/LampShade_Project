﻿!function (n) { "use strict"; try { new CustomEvent("IE has CustomEvent, but doesn't support constructor") } catch (t) { window.CustomEvent = function (t, e) { let n; return e = e || { bubbles: !1, cancelable: !1, detail: void 0 }, n = document.createEvent("CustomEvent"), n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n }, CustomEvent.prototype = Object.create(window.Event.prototype) } function i(t, e, n) { var i = this; this.input = t, this.sub = e, this.add = n, this._subHandler = function () { i._change(-1), i._changeByTimer(-1) }, this._addHandler = function () { i._change(1), i._changeByTimer(1) }, this.sub.addEventListener("mousedown", this._subHandler, !1), this.add.addEventListener("mousedown", this._addHandler, !1) } i.prototype = { destroy: function () { this.sub.removeEventListener("mousedown", this._subHandler, !1), this.add.removeEventListener("mousedown", this._addHandler, !1) }, _change: function (t) { var e = this._step(), n = this._min(), i = this._max(); let u = this._value() + e * t; null != i && (u = Math.min(i, u)), null != n && (u = Math.max(n, u)); n = this.input.value !== u.toString(); this.input.value = u, n && this.input.dispatchEvent(new CustomEvent("change", { bubbles: !0 })) }, _changeByTimer: function (t) { var e = this; let n; var i = setTimeout(function () { n = setInterval(function () { e._change(t) }, 50) }, 300); const u = function () { clearTimeout(i), clearInterval(n), document.removeEventListener("mouseup", u, !1) }; document.addEventListener("mouseup", u, !1) }, _step: function () { let t = 1; return this.input.hasAttribute("step") && (t = parseFloat(this.input.getAttribute("step")), t = isNaN(t) ? 1 : t), t }, _min: function () { let t = null; return this.input.hasAttribute("min") && (t = parseFloat(this.input.getAttribute("min")), t = isNaN(t) ? null : t), t }, _max: function () { let t = null; return this.input.hasAttribute("max") && (t = parseFloat(this.input.getAttribute("max")), t = isNaN(t) ? null : t), t }, _value: function () { var t = parseFloat(this.input.value); return isNaN(t) ? 0 : t } }, n.fn.customNumber = function (e) { return e = n.extend({ destroy: !1 }, e), this.each(function () { if (n(this).is(".input-number")) { let t = n(this).data("customNumber"); t && e.destroy ? (t.destroy(), n(this).removeData("customNumber")) : t || e.destroy || (t = new i(this.querySelector(".input-number__input"), this.querySelector(".input-number__sub"), this.querySelector(".input-number__add")), n(this).data("customNumber", t)) } }) } }(jQuery);