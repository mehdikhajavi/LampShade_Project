﻿!function (r) { "use strict"; let a = !1; try { var t = Object.defineProperty({}, "passive", { get: function () { a = !0 } }); window.addEventListener("test", null, t) } catch (t) { } let e = null; function l() { return "rtl" === (null === e && (e = getComputedStyle(document.body).direction), e) } r(function () { r(".input-number").customNumber() }), r(function () { r(".product-tabs").each(function (t, o) { const i = r(".product-tabs__list", o); i.on("click", ".product-tabs__item", function (t) { t.preventDefault(); const e = r(this), i = r(".product-tabs__pane" + r(this).attr("href"), o); r(o).is(".product-tabs--stuck") && window.scrollTo(0, r(o).find(".product-tabs__content").offset().top - r(o).find(".product-tabs__list-body").outerHeight() + 2), i.length && (r(".product-tabs__item").removeClass("product-tabs__item--active"), e.addClass("product-tabs__item--active"), r(".product-tabs__pane").removeClass("product-tabs__pane--active"), i.addClass("product-tabs__pane--active")) }); const e = r(".product-tabs__item--active", o), s = r(".product-tabs__item:first", o); if ((e.length ? e : s).trigger("click"), r(o).is(".product-tabs--sticky")) { let t = null, e = null; function n() { null !== t && null !== e || (t = i.offset().top + i.outerHeight(), e = r(o).find(".product-tabs__content").offset().top - r(o).find(".product-tabs__list-body").outerHeight() + 2), window.pageYOffset >= t ? r(o).addClass("product-tabs--stuck") : window.pageYOffset < e && (r(o).removeClass("product-tabs--stuck"), r(o).removeClass("product-tabs--header-stuck-hidden")) } window.addEventListener("scroll", n, !!a && { passive: !0 }), r(document).on("stroyka.header.sticky.show", function () { r(o).addClass("product-tabs--header-stuck"), r(o).removeClass("product-tabs--header-stuck-hidden") }), r(document).on("stroyka.header.sticky.hide", function () { r(o).removeClass("product-tabs--header-stuck"), r(o).is(".product-tabs--stuck") && r(o).addClass("product-tabs--header-stuck-hidden") }), r(window).on("resize", function () { t = null, e = null }), n() } }) }), r(function () { r(".block-slideshow .owl-carousel").owlCarousel({ items: 1, autoplay: !0, nav: !1, dots: !0, loop: !0, rtl: l() }) }), r(function () { r(".block-brands__slider .owl-carousel").owlCarousel({ nav: !1, dots: !1, autoplay: !0, loop: !0, rtl: l(), responsive: { 1200: { items: 6 }, 992: { items: 5 }, 768: { items: 4 }, 576: { items: 3 }, 0: { items: 2 } } }) }), r(function () { r(".block-posts").each(function () { var t = r(this).data("layout"), e = { margin: 30, nav: !1, dots: !1, loop: !0, autoplay: !0, rtl: l() }; const i = r(".block-posts__slider .owl-carousel"), o = r.extend({}, e, { "grid-3": { responsive: { 992: { items: 3 }, 768: { items: 2 } } }, "grid-4": { responsive: { 1200: { items: 4, margin: 20 }, 992: { items: 3, margin: 24 }, 768: { items: 2, margin: 20 }, 460: { items: 2, margin: 20 } } }, list: { responsive: { 992: { items: 2 }, 0: { items: 1 } } } }[t]); if (/^grid-/.test(t)) { let t = {}; t = 2 === parseFloat(r(this).data("mobile-columns")) ? { 460: { items: 2, margin: 20 }, 400: { items: 2, margin: 16 }, 320: { items: 2, margin: 12 } } : { 0: { items: 1 } }, o.responsive = r.extend({}, o.responsive, t) } i.owlCarousel(o), r(this).find(".block-header__arrow--left").on("click", function () { i.trigger("prev.owl.carousel", [500]) }), r(this).find(".block-header__arrow--right").on("click", function () { i.trigger("next.owl.carousel", [500]) }) }) }), r(function () { r(".teammates .owl-carousel").owlCarousel({ nav: !1, dots: !0, rtl: l(), responsive: { 768: { items: 3, margin: 32 }, 380: { items: 2, margin: 24 }, 0: { items: 1 } } }) }); const n = { cancelPreviousModal: function () { }, clickHandler: function () { const e = r("#quickview-modal"), i = r(this); var t = i.is(".product-card__quickview--preload"); if (n.cancelPreviousModal(), !t) { i.addClass("product-card__quickview--preload"); let t = null; var o = setTimeout(function () { t = r.ajax({ url: "quickview.html", success: function (t) { n.cancelPreviousModal = function () { }, i.removeClass("product-card__quickview--preload"), e.find(".modal-content").html(t), e.find(".quickview__close").on("click", function () { e.modal("hide") }), e.modal("show") } }) }, 1e3); n.cancelPreviousModal = function () { i.removeClass("product-card__quickview--preload"), t && t.abort(), clearTimeout(o) } } } }; r(function () { const t = r("#quickview-modal"); t.on("shown.bs.modal", function () { t.find(".product").each(function () { var t = r(this).find(".product-gallery"); 0 < t.length && i(t[0], r(this).data("layout")) }), r(".input-number", t).customNumber() }), r(".product-card__quickview").on("click", function () { n.clickHandler.apply(this, arguments) }) }), r(function () { r(".block-products-carousel").each(function () { var t = r(this).data("layout"), e = { items: 4, margin: 14, nav: !1, autoplay: !0, dots: !1, loop: !0, stagePadding: 1, rtl: l() }; const i = r(".owl-carousel", this); let o = function () { }; const s = r.extend({}, e, { "grid-4": { responsive: { 1200: { items: 4, margin: 14 }, 992: { items: 4, margin: 10 }, 768: { items: 3, margin: 10 } } }, "grid-4-sm": { responsive: { 1200: { items: 4, margin: 14 }, 992: { items: 3, margin: 10 }, 768: { items: 3, margin: 10 } } }, "grid-5": { responsive: { 1200: { items: 5, margin: 12 }, 992: { items: 4, margin: 10 }, 768: { items: 3, margin: 10 } } }, horizontal: { items: 3, responsive: { 1200: { items: 3, margin: 14 }, 992: { items: 3, margin: 10 }, 768: { items: 2, margin: 10 }, 576: { items: 1 }, 475: { items: 1 }, 0: { items: 1 } } } }[t]); if (/^grid-/.test(t)) { let t; t = 2 === parseFloat(r(this).data("mobile-grid-columns")) ? { 420: { items: 2, margin: 10 }, 320: { items: 2, margin: 0 }, 0: { items: 1 } } : { 475: { items: 2, margin: 10 }, 0: { items: 1 } }, s.responsive = r.extend({}, s.responsive, t) } i.owlCarousel(s), r(this).find(".block-header__group").on("click", function (t) { const s = r(this).closest(".block-products-carousel"); if (t.preventDefault(), !r(this).is(".block-header__group--active")) { o(), s.addClass("block-products-carousel--loading"), r(this).closest(".block-header__groups-list").find(".block-header__group--active").removeClass("block-header__group--active"), r(this).addClass("block-header__group--active"); let t; t = setTimeout(function () { let t = s.find('.owl-carousel .owl-item:not(".cloned") .block-products-carousel__column'); const e = t.get(), i = []; for (; 0 < e.length;) { var o = Math.floor(Math.random() * e.length), o = e.splice(o, 1)[0]; i.push(o) } t = r(i), s.find(".owl-carousel").trigger("replace.owl.carousel", [t]).trigger("refresh.owl.carousel").trigger("to.owl.carousel", [0, 0]), r(".product-card__quickview", s).on("click", function () { n.clickHandler.apply(this, arguments) }), s.removeClass("block-products-carousel--loading") }, 1e3), o = function () { clearTimeout(t), o = function () { } } } }), r(this).find(".block-header__arrow--left").on("click", function () { i.trigger("prev.owl.carousel", [500]) }), r(this).find(".block-header__arrow--right").on("click", function () { i.trigger("next.owl.carousel", [500]) }) }) }); const i = function (t, e) { e = void 0 !== e ? e : "standard"; var i = { dots: !1, margin: 10, rtl: l() }; const o = r(t), s = o.find(".product-gallery__featured .owl-carousel"), n = o.find(".product-gallery__carousel .owl-carousel"); function a(t) { return l() ? s.find(".owl-item img").length - 1 - t : t } function c(t) { const e = s.find(".owl-item a").toArray().map(function (t) { var e = r(t).find("img")[0], i = r(t).data("width") || e.naturalWidth, e = r(t).data("height") || e.naturalHeight; return { src: t.href, msrc: t.href, w: i, h: e } }); l() && e.reverse(); t = { getThumbBoundsFn: function (t) { var e = s.find(".owl-item img").toArray(), t = a(t); if (!e[t]) return null; const i = e[t]; e = window.pageYOffset || document.documentElement.scrollTop, t = i.getBoundingClientRect(); return { x: t.left, y: t.top + e, w: t.width } }, index: a(t), bgOpacity: .9, history: !1 }; const i = new PhotoSwipe(r(".pswp")[0], PhotoSwipeUI_Default, e, t); i.listen("beforeChange", function () { s.data("owl.carousel").to(a(i.getCurrentIndex()), 0, !0) }), i.init() } s.owlCarousel({ items: 1, dots: !1, rtl: l() }).on("changed.owl.carousel", function (t) { var e = t.item.index; n.find(".product-gallery__carousel-item").removeClass("product-gallery__carousel-item--active").eq(e).addClass("product-gallery__carousel-item--active"); var i = n.find(".owl-item.active").length - 1, o = n.find(".owl-item.active").first().index(), t = n.find(".owl-item.active").last().index(); t < e && n.data("owl.carousel").to(e, 100, !0); e < o && n.data("owl.carousel").to(e - i, 100, !0) }), n.on("initialized.owl.carousel", function () { n.find(".product-gallery__carousel-item").eq(0).addClass("product-gallery__carousel-item--active") }).owlCarousel(r.extend({}, i, { standard: { responsive: { 1200: { items: 5 }, 992: { items: 4 }, 768: { items: 3 }, 480: { items: 5 }, 380: { items: 4 }, 0: { items: 3 } } }, sidebar: { responsive: { 768: { items: 4 }, 480: { items: 5 }, 380: { items: 4 }, 0: { items: 3 } } }, columnar: { responsive: { 768: { items: 4 }, 480: { items: 5 }, 380: { items: 4 }, 0: { items: 3 } } }, quickview: { responsive: { 1200: { items: 5 }, 768: { items: 4 }, 480: { items: 5 }, 380: { items: 4 }, 0: { items: 3 } } } }[e])), n.on("click", ".owl-item", function (t) { t.preventDefault(), s.data("owl.carousel").to(r(this).index(), 300, !0) }), o.find(".product-gallery__zoom").on("click", function () { c(s.find(".owl-item.active").index()) }), s.on("click", ".owl-item a", function (t) { t.preventDefault(), c(r(this).closest(".owl-item").index()) }) }; r(function () { r(".product").each(function () { var t = r(this).find(".product-gallery"); 0 < t.length && i(t[0], r(this).data("layout")) }) }), r(function () { r('[name="checkout_payment_method"]').on("change", function () { var n = r(this).closest(".payment-methods__item"); r(this).closest(".payment-methods__list").find(".payment-methods__item").each(function (t, e) { const i = r(e), o = i.find(".payment-methods__item-container"); var s; e !== n[0] ? (s = o.height(), o.css("height", s + "px"), i.removeClass("payment-methods__item--active"), o.height(), o.css("height", "")) : (e = o.height(), i.addClass("payment-methods__item--active"), s = o.height(), o.css("height", e + "px"), o.height(), o.css("height", s + "px")) }) }), r(".payment-methods__item-container").on("transitionend", function (t) { "height" === t.originalEvent.propertyName && r(this).css("height", "") }) }), r(function () { r("[data-collapse]").each(function (t, e) { var n = e; r("[data-collapse-trigger]", n).on("click", function () { var t, e = r(this).closest("[data-collapse-opened-class]").data("collapse-opened-class"); const i = r(this).closest("[data-collapse-item]"), o = i.children("[data-collapse-content]"), s = i.parents(); s.slice(0, s.index(n) + 1).filter("[data-collapse-item]").css("height", ""), i.is("." + e) ? (t = o.height(), o.css("height", t + "px"), i.removeClass(e), o.height(), o.css("height", "")) : (t = o.height(), i.addClass(e), e = o.height(), o.css("height", t + "px"), o.height(), o.css("height", e + "px")) }), r("[data-collapse-content]", n).on("transitionend", function (t) { "height" === t.originalEvent.propertyName && r(this).css("height", "") }) }) }), r(function () { r(".filter-price").each(function (t, e) { var i = r(e).data("min"), o = r(e).data("max"), s = r(e).data("from"), n = r(e).data("to"); const a = e.querySelector(".filter-price__slider"); noUiSlider.create(a, { start: [s, n], connect: !0, direction: l() ? "rtl" : "ltr", range: { min: i, max: o } }); const c = [r(e).find(".filter-price__min-value")[0], r(e).find(".filter-price__max-value")[0]]; a.noUiSlider.on("update", function (t, e) { c[e].innerHTML = t[e] }) }) }), r(function () { const e = r("body"), i = r(".mobilemenu"); i.length && (r(".mobile-header__menu-button").on("click", function () { var t; t = e.width(), e.css("overflow", "hidden"), e.css("paddingRight", e.width() - t + "px"), i.addClass("mobilemenu--open") }), r(".mobilemenu__backdrop, .mobilemenu__close").on("click", function () { e.css("overflow", ""), e.css("paddingRight", ""), i.removeClass("mobilemenu--open") })) }), r(function () { r('[data-toggle="tooltip"]').tooltip({ trigger: "hover" }) }), r(function () { r(".layout-switcher__button").on("click", function () { const t = r(this).closest(".layout-switcher"), e = r(this).closest(".products-view"), i = e.find(".products-list"); t.find(".layout-switcher__button").removeClass("layout-switcher__button--active"), r(this).addClass("layout-switcher__button--active"), i.attr("data-layout", r(this).attr("data-layout")), i.attr("data-with-features", r(this).attr("data-with-features")) }) }), r(function () { const e = r("body"), i = r(".block-sidebar"), o = matchMedia("(max-width: 991px)"); var t, s; i.length && (t = function () { e.css("overflow", ""), e.css("paddingRight", ""), i.removeClass("block-sidebar--open") }, s = function () { i.is(".block-sidebar--open.block-sidebar--offcanvas--mobile") && !o.matches && t() }, r(".filters-button").on("click", function () { var t; i.is(".block-sidebar--offcanvas--mobile") && !o.matches || (t = e.width(), e.css("overflow", "hidden"), e.css("paddingRight", e.width() - t + "px"), i.addClass("block-sidebar--open")) }), r(".block-sidebar__backdrop, .block-sidebar__close").on("click", function () { t() }), o.addEventListener ? o.addEventListener("change", s) : o.addListener(s)) }), r(function () { r(".block-finder__select").on("change", function () { const t = r(this).closest(".block-finder__form-item"); "none" !== r(this).val() ? (t.find("~ .block-finder__form-item:eq(0) .block-finder__select").prop("disabled", !1).val("none"), t.find("~ .block-finder__form-item:gt(0) .block-finder__select").prop("disabled", !0).val("none")) : t.find("~ .block-finder__form-item .block-finder__select").prop("disabled", !0).val("none"), t.find("~ .block-finder__form-item .block-finder__select").trigger("change.select2") }) }), r(function () { r(".form-control-select2, .block-finder__select").select2({ width: "" }) }), r(function () { let t = !1; r(".totop__button").on("click", function () { r("html, body").animate({ scrollTop: 0 }, "300") }); window.addEventListener("scroll", function () { 300 <= window.pageYOffset ? t || (t = !0, r(".totop").addClass("totop--show")) : t && (t = !1, r(".totop").removeClass("totop--show")) }, !!a && { passive: !0 }) }), setInterval(function () { var t = r(window).height(); r(window).height(t - 200), r(window).height(t) }, 500), r(window).on("load", function () { r(".preloader").fadeOut(), r(".preloader-area").addClass("preloader-deactivate") }) }(jQuery);