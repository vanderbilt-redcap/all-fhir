var sd = {};
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function gn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ae = sd.NODE_ENV !== "production" ? Object.freeze({}) : {}, Po = sd.NODE_ENV !== "production" ? Object.freeze([]) : [], Ke = () => {
}, J_ = () => !1, zr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fi = (e) => e.startsWith("onUpdate:"), Pe = Object.assign, Ja = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Z_ = Object.prototype.hasOwnProperty, ge = (e, t) => Z_.call(e, t), ee = Array.isArray, no = (e) => Gr(e) === "[object Map]", rs = (e) => Gr(e) === "[object Set]", nu = (e) => Gr(e) === "[object Date]", ie = (e) => typeof e == "function", xe = (e) => typeof e == "string", kt = (e) => typeof e == "symbol", ve = (e) => e !== null && typeof e == "object", Za = (e) => (ve(e) || ie(e)) && ie(e.then) && ie(e.catch), ad = Object.prototype.toString, Gr = (e) => ad.call(e), el = (e) => Gr(e).slice(8, -1), ld = (e) => Gr(e) === "[object Object]", tl = (e) => xe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vr = /* @__PURE__ */ gn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), em = /* @__PURE__ */ gn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), is = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, tm = /-(\w)/g, st = is(
  (e) => e.replace(tm, (t, n) => n ? n.toUpperCase() : "")
), nm = /\B([A-Z])/g, Rn = is(
  (e) => e.replace(nm, "-$1").toLowerCase()
), co = is((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yn = is(
  (e) => e ? `on${co(e)}` : ""
), In = (e, t) => !Object.is(e, t), So = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ir = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, ud = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, om = (e) => {
  const t = xe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ou;
const Yr = () => ou || (ou = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qr(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = xe(o) ? am(o) : qr(o);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (xe(e) || ve(e))
    return e;
}
const rm = /;(?![^(]*\))/g, im = /:([^]+)/, sm = /\/\*[^]*?\*\//g;
function am(e) {
  const t = {};
  return e.replace(sm, "").split(rm).forEach((n) => {
    if (n) {
      const o = n.split(im);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function $e(e) {
  let t = "";
  if (xe(e))
    t = e;
  else if (ee(e))
    for (let n = 0; n < e.length; n++) {
      const o = $e(e[n]);
      o && (t += o + " ");
    }
  else if (ve(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Fe(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !xe(t) && (e.class = $e(t)), n && (e.style = qr(n)), e;
}
const lm = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", um = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", cm = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", fm = /* @__PURE__ */ gn(lm), dm = /* @__PURE__ */ gn(um), pm = /* @__PURE__ */ gn(cm), hm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _m = /* @__PURE__ */ gn(hm);
function cd(e) {
  return !!e || e === "";
}
function mm(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = ss(e[o], t[o]);
  return n;
}
function ss(e, t) {
  if (e === t) return !0;
  let n = nu(e), o = nu(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = kt(e), o = kt(t), n || o)
    return e === t;
  if (n = ee(e), o = ee(t), n || o)
    return n && o ? mm(e, t) : !1;
  if (n = ve(e), o = ve(t), n || o) {
    if (!n || !o)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !ss(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function gm(e, t) {
  return e.findIndex((n) => ss(n, t));
}
const fd = (e) => !!(e && e.__v_isRef === !0), Ze = (e) => xe(e) ? e : e == null ? "" : ee(e) || ve(e) && (e.toString === ad || !ie(e.toString)) ? fd(e) ? Ze(e.value) : JSON.stringify(e, dd, 2) : String(e), dd = (e, t) => fd(t) ? dd(e, t.value) : no(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], i) => (n[Ds(o, i) + " =>"] = r, n),
    {}
  )
} : rs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ds(n))
} : kt(t) ? Ds(t) : ve(t) && !ee(t) && !ld(t) ? String(t) : t, Ds = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    kt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Ce = {};
function Rt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let pt;
class pd {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = pt, !t && pt && (this.index = (pt.scopes || (pt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = pt;
      try {
        return pt = this, t();
      } finally {
        pt = n;
      }
    } else Ce.NODE_ENV !== "production" && Rt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = pt, pt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (pt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Em(e) {
  return new pd(e);
}
function vm() {
  return pt;
}
let be;
const xs = /* @__PURE__ */ new WeakSet();
class hd {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pt && pt.active && pt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, xs.has(this) && (xs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || md(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ru(this), gd(this);
    const t = be, n = $t;
    be = this, $t = !0;
    try {
      return this.fn();
    } finally {
      Ce.NODE_ENV !== "production" && be !== this && Rt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ed(this), be = t, $t = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        rl(t);
      this.deps = this.depsTail = void 0, ru(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? xs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    fa(this) && this.run();
  }
  get dirty() {
    return fa(this);
  }
}
let _d = 0, yr, br;
function md(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = br, br = e;
    return;
  }
  e.next = yr, yr = e;
}
function nl() {
  _d++;
}
function ol() {
  if (--_d > 0)
    return;
  if (br) {
    let t = br;
    for (br = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; yr; ) {
    let t = yr;
    for (yr = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function gd(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ed(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === n && (n = r), rl(o), ym(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = t, e.depsTail = n;
}
function fa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (vd(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function vd(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === $r) || (e.globalVersion = $r, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !fa(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = be, o = $t;
  be = e, $t = !0;
  try {
    gd(e);
    const r = e.fn(e._value);
    (t.version === 0 || In(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    be = n, $t = o, Ed(e), e.flags &= -3;
  }
}
function rl(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), Ce.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      rl(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ym(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let $t = !0;
const yd = [];
function Vt() {
  yd.push($t), $t = !1;
}
function Pt() {
  const e = yd.pop();
  $t = e === void 0 ? !0 : e;
}
function ru(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = be;
    be = void 0;
    try {
      t();
    } finally {
      be = n;
    }
  }
}
let $r = 0;
class bm {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class il {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, Ce.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!be || !$t || be === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== be)
      n = this.activeLink = new bm(be, this), be.deps ? (n.prevDep = be.depsTail, be.depsTail.nextDep = n, be.depsTail = n) : be.deps = be.depsTail = n, bd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = be.depsTail, n.nextDep = void 0, be.depsTail.nextDep = n, be.depsTail = n, be.deps === n && (be.deps = o);
    }
    return Ce.NODE_ENV !== "production" && be.onTrack && be.onTrack(
      Pe(
        {
          effect: be
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, $r++, this.notify(t);
  }
  notify(t) {
    nl();
    try {
      if (Ce.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Pe(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ol();
    }
  }
}
function bd(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        bd(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), Ce.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Bi = /* @__PURE__ */ new WeakMap(), oo = Symbol(
  Ce.NODE_ENV !== "production" ? "Object iterate" : ""
), da = Symbol(
  Ce.NODE_ENV !== "production" ? "Map keys iterate" : ""
), kr = Symbol(
  Ce.NODE_ENV !== "production" ? "Array iterate" : ""
);
function je(e, t, n) {
  if ($t && be) {
    let o = Bi.get(e);
    o || Bi.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || (o.set(n, r = new il()), r.map = o, r.key = n), Ce.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function zt(e, t, n, o, r, i) {
  const s = Bi.get(e);
  if (!s) {
    $r++;
    return;
  }
  const a = (l) => {
    l && (Ce.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: r,
      oldTarget: i
    }) : l.trigger());
  };
  if (nl(), t === "clear")
    s.forEach(a);
  else {
    const l = ee(e), f = l && tl(n);
    if (l && n === "length") {
      const u = Number(o);
      s.forEach((c, d) => {
        (d === "length" || d === kr || !kt(d) && d >= u) && a(c);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), f && a(s.get(kr)), t) {
        case "add":
          l ? f && a(s.get("length")) : (a(s.get(oo)), no(e) && a(s.get(da)));
          break;
        case "delete":
          l || (a(s.get(oo)), no(e) && a(s.get(da)));
          break;
        case "set":
          no(e) && a(s.get(oo));
          break;
      }
  }
  ol();
}
function Om(e, t) {
  const n = Bi.get(e);
  return n && n.get(t);
}
function Oo(e) {
  const t = ae(e);
  return t === e ? t : (je(t, "iterate", kr), at(e) ? t : t.map(Xe));
}
function as(e) {
  return je(e = ae(e), "iterate", kr), e;
}
const Am = {
  __proto__: null,
  [Symbol.iterator]() {
    return Is(this, Symbol.iterator, Xe);
  },
  concat(...e) {
    return Oo(this).concat(
      ...e.map((t) => ee(t) ? Oo(t) : t)
    );
  },
  entries() {
    return Is(this, "entries", (e) => (e[1] = Xe(e[1]), e));
  },
  every(e, t) {
    return rn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return rn(this, "filter", e, t, (n) => n.map(Xe), arguments);
  },
  find(e, t) {
    return rn(this, "find", e, t, Xe, arguments);
  },
  findIndex(e, t) {
    return rn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return rn(this, "findLast", e, t, Xe, arguments);
  },
  findLastIndex(e, t) {
    return rn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return rn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return $s(this, "includes", e);
  },
  indexOf(...e) {
    return $s(this, "indexOf", e);
  },
  join(e) {
    return Oo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return $s(this, "lastIndexOf", e);
  },
  map(e, t) {
    return rn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return lr(this, "pop");
  },
  push(...e) {
    return lr(this, "push", e);
  },
  reduce(e, ...t) {
    return iu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return iu(this, "reduceRight", e, t);
  },
  shift() {
    return lr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return rn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return lr(this, "splice", e);
  },
  toReversed() {
    return Oo(this).toReversed();
  },
  toSorted(e) {
    return Oo(this).toSorted(e);
  },
  toSpliced(...e) {
    return Oo(this).toSpliced(...e);
  },
  unshift(...e) {
    return lr(this, "unshift", e);
  },
  values() {
    return Is(this, "values", Xe);
  }
};
function Is(e, t, n) {
  const o = as(e), r = o[t]();
  return o !== e && !at(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const wm = Array.prototype;
function rn(e, t, n, o, r, i) {
  const s = as(e), a = s !== e && !at(e), l = s[t];
  if (l !== wm[t]) {
    const c = l.apply(e, i);
    return a ? Xe(c) : c;
  }
  let f = n;
  s !== e && (a ? f = function(c, d) {
    return n.call(this, Xe(c), d, e);
  } : n.length > 2 && (f = function(c, d) {
    return n.call(this, c, d, e);
  }));
  const u = l.call(s, f, o);
  return a && r ? r(u) : u;
}
function iu(e, t, n, o) {
  const r = as(e);
  let i = n;
  return r !== e && (at(e) ? n.length > 3 && (i = function(s, a, l) {
    return n.call(this, s, a, l, e);
  }) : i = function(s, a, l) {
    return n.call(this, s, Xe(a), l, e);
  }), r[t](i, ...o);
}
function $s(e, t, n) {
  const o = ae(e);
  je(o, "iterate", kr);
  const r = o[t](...n);
  return (r === -1 || r === !1) && Rr(n[0]) ? (n[0] = ae(n[0]), o[t](...n)) : r;
}
function lr(e, t, n = []) {
  Vt(), nl();
  const o = ae(e)[t].apply(e, n);
  return ol(), Pt(), o;
}
const Tm = /* @__PURE__ */ gn("__proto__,__v_isRef,__isVue"), Od = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(kt)
);
function Nm(e) {
  kt(e) || (e = String(e));
  const t = ae(this);
  return je(t, "has", e), t.hasOwnProperty(e);
}
class Ad {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return o === (r ? i ? Dd : Sd : i ? Cd : Nd).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = ee(t);
    if (!r) {
      let l;
      if (s && (l = Am[n]))
        return l;
      if (n === "hasOwnProperty")
        return Nm;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ue(t) ? t : o
    );
    return (kt(n) ? Od.has(n) : Tm(n)) || (r || je(t, "get", n), i) ? a : Ue(a) ? s && tl(n) ? a : a.value : ve(a) ? r ? Id(a) : us(a) : a;
  }
}
class wd extends Ad {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let i = t[n];
    if (!this._isShallow) {
      const l = Jt(i);
      if (!at(o) && !Jt(o) && (i = ae(i), o = ae(o)), !ee(t) && Ue(i) && !Ue(o))
        return l ? !1 : (i.value = o, !0);
    }
    const s = ee(t) && tl(n) ? Number(n) < t.length : ge(t, n), a = Reflect.set(
      t,
      n,
      o,
      Ue(t) ? t : r
    );
    return t === ae(r) && (s ? In(o, i) && zt(t, "set", n, o, i) : zt(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = ge(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && o && zt(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!kt(n) || !Od.has(n)) && je(t, "has", n), o;
  }
  ownKeys(t) {
    return je(
      t,
      "iterate",
      ee(t) ? "length" : oo
    ), Reflect.ownKeys(t);
  }
}
class Td extends Ad {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Ce.NODE_ENV !== "production" && Rt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Ce.NODE_ENV !== "production" && Rt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Cm = /* @__PURE__ */ new wd(), Sm = /* @__PURE__ */ new Td(), Dm = /* @__PURE__ */ new wd(!0), xm = /* @__PURE__ */ new Td(!0), pa = (e) => e, li = (e) => Reflect.getPrototypeOf(e);
function Im(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = ae(r), s = no(i), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, f = r[e](...o), u = n ? pa : t ? Hi : Xe;
    return !t && je(
      i,
      "iterate",
      l ? da : oo
    ), {
      // iterator protocol
      next() {
        const { value: c, done: d } = f.next();
        return d ? { value: c, done: d } : {
          value: a ? [u(c[0]), u(c[1])] : u(c),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ui(e) {
  return function(...t) {
    if (Ce.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Rt(
        `${co(e)} operation ${n}failed: target is readonly.`,
        ae(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $m(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, s = ae(i), a = ae(r);
      e || (In(r, a) && je(s, "get", r), je(s, "get", a));
      const { has: l } = li(s), f = t ? pa : e ? Hi : Xe;
      if (l.call(s, r))
        return f(i.get(r));
      if (l.call(s, a))
        return f(i.get(a));
      i !== s && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && je(ae(r), "iterate", oo), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, s = ae(i), a = ae(r);
      return e || (In(r, a) && je(s, "has", r), je(s, "has", a)), r === a ? i.has(r) : i.has(r) || i.has(a);
    },
    forEach(r, i) {
      const s = this, a = s.__v_raw, l = ae(a), f = t ? pa : e ? Hi : Xe;
      return !e && je(l, "iterate", oo), a.forEach((u, c) => r.call(i, f(u), f(c), s));
    }
  };
  return Pe(
    n,
    e ? {
      add: ui("add"),
      set: ui("set"),
      delete: ui("delete"),
      clear: ui("clear")
    } : {
      add(r) {
        !t && !at(r) && !Jt(r) && (r = ae(r));
        const i = ae(this);
        return li(i).has.call(i, r) || (i.add(r), zt(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !at(i) && !Jt(i) && (i = ae(i));
        const s = ae(this), { has: a, get: l } = li(s);
        let f = a.call(s, r);
        f ? Ce.NODE_ENV !== "production" && su(s, a, r) : (r = ae(r), f = a.call(s, r));
        const u = l.call(s, r);
        return s.set(r, i), f ? In(i, u) && zt(s, "set", r, i, u) : zt(s, "add", r, i), this;
      },
      delete(r) {
        const i = ae(this), { has: s, get: a } = li(i);
        let l = s.call(i, r);
        l ? Ce.NODE_ENV !== "production" && su(i, s, r) : (r = ae(r), l = s.call(i, r));
        const f = a ? a.call(i, r) : void 0, u = i.delete(r);
        return l && zt(i, "delete", r, void 0, f), u;
      },
      clear() {
        const r = ae(this), i = r.size !== 0, s = Ce.NODE_ENV !== "production" ? no(r) ? new Map(r) : new Set(r) : void 0, a = r.clear();
        return i && zt(
          r,
          "clear",
          void 0,
          void 0,
          s
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Im(r, e, t);
  }), n;
}
function ls(e, t) {
  const n = $m(e, t);
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    ge(n, r) && r in o ? n : o,
    r,
    i
  );
}
const km = {
  get: /* @__PURE__ */ ls(!1, !1)
}, Rm = {
  get: /* @__PURE__ */ ls(!1, !0)
}, Vm = {
  get: /* @__PURE__ */ ls(!0, !1)
}, Pm = {
  get: /* @__PURE__ */ ls(!0, !0)
};
function su(e, t, n) {
  const o = ae(n);
  if (o !== n && t.call(e, o)) {
    const r = el(e);
    Rt(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Nd = /* @__PURE__ */ new WeakMap(), Cd = /* @__PURE__ */ new WeakMap(), Sd = /* @__PURE__ */ new WeakMap(), Dd = /* @__PURE__ */ new WeakMap();
function Lm(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Mm(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Lm(el(e));
}
function us(e) {
  return Jt(e) ? e : cs(
    e,
    !1,
    Cm,
    km,
    Nd
  );
}
function xd(e) {
  return cs(
    e,
    !1,
    Dm,
    Rm,
    Cd
  );
}
function Id(e) {
  return cs(
    e,
    !0,
    Sm,
    Vm,
    Sd
  );
}
function Yt(e) {
  return cs(
    e,
    !0,
    xm,
    Pm,
    Dd
  );
}
function cs(e, t, n, o, r) {
  if (!ve(e))
    return Ce.NODE_ENV !== "production" && Rt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Mm(e);
  if (i === 0)
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const a = new Proxy(
    e,
    i === 2 ? o : n
  );
  return r.set(e, a), a;
}
function ro(e) {
  return Jt(e) ? ro(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Jt(e) {
  return !!(e && e.__v_isReadonly);
}
function at(e) {
  return !!(e && e.__v_isShallow);
}
function Rr(e) {
  return e ? !!e.__v_raw : !1;
}
function ae(e) {
  const t = e && e.__v_raw;
  return t ? ae(t) : e;
}
function sl(e) {
  return !ge(e, "__v_skip") && Object.isExtensible(e) && Ir(e, "__v_skip", !0), e;
}
const Xe = (e) => ve(e) ? us(e) : e, Hi = (e) => ve(e) ? Id(e) : e;
function Ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Oe(e) {
  return $d(e, !1);
}
function Fm(e) {
  return $d(e, !0);
}
function $d(e, t) {
  return Ue(e) ? e : new Bm(e, t);
}
class Bm {
  constructor(t, n) {
    this.dep = new il(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ae(t), this._value = n ? t : Xe(t), this.__v_isShallow = n;
  }
  get value() {
    return Ce.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || at(t) || Jt(t);
    t = o ? t : ae(t), In(t, n) && (this._rawValue = t, this._value = o ? t : Xe(t), Ce.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function it(e) {
  return Ue(e) ? e.value : e;
}
const Hm = {
  get: (e, t, n) => t === "__v_raw" ? e : it(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Ue(r) && !Ue(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function kd(e) {
  return ro(e) ? e : new Proxy(e, Hm);
}
function En(e) {
  Ce.NODE_ENV !== "production" && !Rr(e) && Rt("toRefs() expects a reactive object but received a plain one.");
  const t = ee(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = jm(e, n);
  return t;
}
class Um {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Om(ae(this._object), this._key);
  }
}
function jm(e, t, n) {
  const o = e[t];
  return Ue(o) ? o : new Um(e, t, n);
}
class Km {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new il(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $r - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    be !== this)
      return md(this, !0), !0;
  }
  get value() {
    const t = Ce.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return vd(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Ce.NODE_ENV !== "production" && Rt("Write operation failed: computed value is readonly");
  }
}
function Wm(e, t, n = !1) {
  let o, r;
  return ie(e) ? o = e : (o = e.get, r = e.set), new Km(o, r, n);
}
const ci = {}, Ui = /* @__PURE__ */ new WeakMap();
let qn;
function zm(e, t = !1, n = qn) {
  if (n) {
    let o = Ui.get(n);
    o || Ui.set(n, o = []), o.push(e);
  } else Ce.NODE_ENV !== "production" && !t && Rt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Gm(e, t, n = Ae) {
  const { immediate: o, deep: r, once: i, scheduler: s, augmentJob: a, call: l } = n, f = (T) => {
    (n.onWarn || Rt)(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (T) => r ? T : at(T) || r === !1 || r === 0 ? fn(T, 1) : fn(T);
  let c, d, p, _, g = !1, y = !1;
  if (Ue(e) ? (d = () => e.value, g = at(e)) : ro(e) ? (d = () => u(e), g = !0) : ee(e) ? (y = !0, g = e.some((T) => ro(T) || at(T)), d = () => e.map((T) => {
    if (Ue(T))
      return T.value;
    if (ro(T))
      return u(T);
    if (ie(T))
      return l ? l(T, 2) : T();
    Ce.NODE_ENV !== "production" && f(T);
  })) : ie(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (p) {
      Vt();
      try {
        p();
      } finally {
        Pt();
      }
    }
    const T = qn;
    qn = c;
    try {
      return l ? l(e, 3, [_]) : e(_);
    } finally {
      qn = T;
    }
  } : (d = Ke, Ce.NODE_ENV !== "production" && f(e)), t && r) {
    const T = d, N = r === !0 ? 1 / 0 : r;
    d = () => fn(T(), N);
  }
  const E = vm(), O = () => {
    c.stop(), E && E.active && Ja(E.effects, c);
  };
  if (i && t) {
    const T = t;
    t = (...N) => {
      T(...N), O();
    };
  }
  let v = y ? new Array(e.length).fill(ci) : ci;
  const S = (T) => {
    if (!(!(c.flags & 1) || !c.dirty && !T))
      if (t) {
        const N = c.run();
        if (r || g || (y ? N.some((L, $) => In(L, v[$])) : In(N, v))) {
          p && p();
          const L = qn;
          qn = c;
          try {
            const $ = [
              N,
              // pass undefined as the old value when it's changed for the first time
              v === ci ? void 0 : y && v[0] === ci ? [] : v,
              _
            ];
            v = N, l ? l(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            );
          } finally {
            qn = L;
          }
        }
      } else
        c.run();
  };
  return a && a(S), c = new hd(d), c.scheduler = s ? () => s(S, !1) : S, _ = (T) => zm(T, !1, c), p = c.onStop = () => {
    const T = Ui.get(c);
    if (T) {
      if (l)
        l(T, 4);
      else
        for (const N of T) N();
      Ui.delete(c);
    }
  }, Ce.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? o ? S(!0) : v = c.run() : s ? s(S.bind(null, !0), !0) : c.run(), O.pause = c.pause.bind(c), O.resume = c.resume.bind(c), O.stop = O, O;
}
function fn(e, t = 1 / 0, n) {
  if (t <= 0 || !ve(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ue(e))
    fn(e.value, t, n);
  else if (ee(e))
    for (let o = 0; o < e.length; o++)
      fn(e[o], t, n);
  else if (rs(e) || no(e))
    e.forEach((o) => {
      fn(o, t, n);
    });
  else if (ld(e)) {
    for (const o in e)
      fn(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && fn(e[o], t, n);
  }
  return e;
}
var b = {};
const io = [];
function Ai(e) {
  io.push(e);
}
function wi() {
  io.pop();
}
let ks = !1;
function M(e, ...t) {
  if (ks) return;
  ks = !0, Vt();
  const n = io.length ? io[io.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Ym();
  if (o)
    er(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var s, a;
          return (a = (s = i.toString) == null ? void 0 : s.call(i)) != null ? a : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${ms(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...qm(r)), console.warn(...i);
  }
  Pt(), ks = !1;
}
function Ym() {
  let e = io[io.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function qm(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Xm(n));
  }), t;
}
function Xm({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${ms(
    e.component,
    e.type,
    o
  )}`, i = ">" + n;
  return e.props ? [r, ...Qm(e.props), i] : [r + i];
}
function Qm(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Rd(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Rd(e, t, n) {
  return xe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ue(t) ? (t = Rd(e, ae(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ie(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ae(t), n ? t : [`${e}=`, t]);
}
function Jm(e, t) {
  b.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? M(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && M(`${t} is NaN - the duration expression might be incorrect.`));
}
const al = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function er(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Xr(r, t, n);
  }
}
function Lt(e, t, n, o) {
  if (ie(e)) {
    const r = er(e, t, n, o);
    return r && Za(r) && r.catch((i) => {
      Xr(i, t, n);
    }), r;
  }
  if (ee(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Lt(e[i], t, n, o));
    return r;
  } else b.NODE_ENV !== "production" && M(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Xr(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ae;
  if (t) {
    let a = t.parent;
    const l = t.proxy, f = b.NODE_ENV !== "production" ? al[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let c = 0; c < u.length; c++)
          if (u[c](e, l, f) === !1)
            return;
      }
      a = a.parent;
    }
    if (i) {
      Vt(), er(i, null, 10, [
        e,
        l,
        f
      ]), Pt();
      return;
    }
  }
  Zm(e, n, r, o, s);
}
function Zm(e, t, n, o = !0, r = !1) {
  if (b.NODE_ENV !== "production") {
    const i = al[t];
    if (n && Ai(n), M(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && wi(), o)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const ot = [];
let Wt = -1;
const Lo = [];
let Tn = null, Do = 0;
const Vd = /* @__PURE__ */ Promise.resolve();
let ji = null;
const eg = 100;
function fs(e) {
  const t = ji || Vd;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function tg(e) {
  let t = Wt + 1, n = ot.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = ot[o], i = Vr(r);
    i < e || i === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function ds(e) {
  if (!(e.flags & 1)) {
    const t = Vr(e), n = ot[ot.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Vr(n) ? ot.push(e) : ot.splice(tg(t), 0, e), e.flags |= 1, Pd();
  }
}
function Pd() {
  ji || (ji = Vd.then(Fd));
}
function Ld(e) {
  ee(e) ? Lo.push(...e) : Tn && e.id === -1 ? Tn.splice(Do + 1, 0, e) : e.flags & 1 || (Lo.push(e), e.flags |= 1), Pd();
}
function au(e, t, n = Wt + 1) {
  for (b.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ot.length; n++) {
    const o = ot[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || b.NODE_ENV !== "production" && ll(t, o))
        continue;
      ot.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Md(e) {
  if (Lo.length) {
    const t = [...new Set(Lo)].sort(
      (n, o) => Vr(n) - Vr(o)
    );
    if (Lo.length = 0, Tn) {
      Tn.push(...t);
      return;
    }
    for (Tn = t, b.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Do = 0; Do < Tn.length; Do++) {
      const n = Tn[Do];
      b.NODE_ENV !== "production" && ll(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Tn = null, Do = 0;
  }
}
const Vr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Fd(e) {
  b.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = b.NODE_ENV !== "production" ? (n) => ll(e, n) : Ke;
  try {
    for (Wt = 0; Wt < ot.length; Wt++) {
      const n = ot[Wt];
      if (n && !(n.flags & 8)) {
        if (b.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), er(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Wt < ot.length; Wt++) {
      const n = ot[Wt];
      n && (n.flags &= -2);
    }
    Wt = -1, ot.length = 0, Md(e), ji = null, (ot.length || Lo.length) && Fd(e);
  }
}
function ll(e, t) {
  const n = e.get(t) || 0;
  if (n > eg) {
    const o = t.i, r = o && vl(o.type);
    return Xr(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let xt = !1;
const Ti = /* @__PURE__ */ new Map();
b.NODE_ENV !== "production" && (Yr().__VUE_HMR_RUNTIME__ = {
  createRecord: Rs(Bd),
  rerender: Rs(rg),
  reload: Rs(ig)
});
const fo = /* @__PURE__ */ new Map();
function ng(e) {
  const t = e.type.__hmrId;
  let n = fo.get(t);
  n || (Bd(t, e.type), n = fo.get(t)), n.instances.add(e);
}
function og(e) {
  fo.get(e.type.__hmrId).instances.delete(e);
}
function Bd(e, t) {
  return fo.has(e) ? !1 : (fo.set(e, {
    initialDef: Ki(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ki(e) {
  return xp(e) ? e.__vccOpts : e;
}
function rg(e, t) {
  const n = fo.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Ki(o.type).render = t), o.renderCache = [], xt = !0, o.update(), xt = !1;
  }));
}
function ig(e, t) {
  const n = fo.get(e);
  if (!n) return;
  t = Ki(t), lu(n.initialDef, t);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const i = o[r], s = Ki(i.type);
    let a = Ti.get(s);
    a || (s !== n.initialDef && lu(s, t), Ti.set(s, a = /* @__PURE__ */ new Set())), a.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (a.add(i), i.ceReload(t.styles), a.delete(i)) : i.parent ? ds(() => {
      xt = !0, i.parent.update(), xt = !1, a.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(s);
  }
  Ld(() => {
    Ti.clear();
  });
}
function lu(e, t) {
  Pe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Rs(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Gt, _r = [], ha = !1;
function Qr(e, ...t) {
  Gt ? Gt.emit(e, ...t) : ha || _r.push({ event: e, args: t });
}
function Hd(e, t) {
  var n, o;
  Gt = e, Gt ? (Gt.enabled = !0, _r.forEach(({ event: r, args: i }) => Gt.emit(r, ...i)), _r = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Hd(i, t);
  }), setTimeout(() => {
    Gt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ha = !0, _r = []);
  }, 3e3)) : (ha = !0, _r = []);
}
function sg(e, t) {
  Qr("app:init", e, t, {
    Fragment: Ie,
    Text: Zr,
    Comment: Be,
    Static: wr
  });
}
function ag(e) {
  Qr("app:unmount", e);
}
const lg = /* @__PURE__ */ ul(
  "component:added"
  /* COMPONENT_ADDED */
), Ud = /* @__PURE__ */ ul(
  "component:updated"
  /* COMPONENT_UPDATED */
), ug = /* @__PURE__ */ ul(
  "component:removed"
  /* COMPONENT_REMOVED */
), cg = (e) => {
  Gt && typeof Gt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Gt.cleanupBuffer(e) && ug(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ul(e) {
  return (t) => {
    Qr(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const fg = /* @__PURE__ */ jd(
  "perf:start"
  /* PERFORMANCE_START */
), dg = /* @__PURE__ */ jd(
  "perf:end"
  /* PERFORMANCE_END */
);
function jd(e) {
  return (t, n, o) => {
    Qr(e, t.appContext.app, t.uid, t, n, o);
  };
}
function pg(e, t, n) {
  Qr(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let He = null, Kd = null;
function Wi(e) {
  const t = He;
  return He = e, Kd = e && e.type.__scopeId || null, t;
}
function dn(e, t = He, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Tu(-1);
    const i = Wi(t);
    let s;
    try {
      s = e(...r);
    } finally {
      Wi(i), o._d && Tu(1);
    }
    return b.NODE_ENV !== "production" && Ud(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Wd(e) {
  em(e) && M("Do not use built-in directive ids as custom directive id: " + e);
}
function zd(e, t) {
  if (He === null)
    return b.NODE_ENV !== "production" && M("withDirectives can only be used inside render functions."), e;
  const n = _s(He), o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, s, a, l = Ae] = t[r];
    i && (ie(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && fn(s), o.push({
      dir: i,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function Kn(e, t, n, o) {
  const r = e.dirs, i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    i && (a.oldValue = i[s].value);
    let l = a.dir[o];
    l && (Vt(), Lt(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Pt());
  }
}
const Gd = Symbol("_vte"), Yd = (e) => e.__isTeleport, so = (e) => e && (e.disabled || e.disabled === ""), uu = (e) => e && (e.defer || e.defer === ""), cu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, fu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, _a = (e, t) => {
  const n = e && e.to;
  if (xe(n))
    if (t) {
      const o = t(n);
      return b.NODE_ENV !== "production" && !o && !so(e) && M(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), o;
    } else
      return b.NODE_ENV !== "production" && M(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return b.NODE_ENV !== "production" && !n && !so(e) && M(`Invalid Teleport target: ${n}`), n;
}, qd = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, o, r, i, s, a, l, f) {
    const {
      mc: u,
      pc: c,
      pbc: d,
      o: { insert: p, querySelector: _, createText: g, createComment: y }
    } = f, E = so(t.props);
    let { shapeFlag: O, children: v, dynamicChildren: S } = t;
    if (b.NODE_ENV !== "production" && xt && (l = !1, S = null), e == null) {
      const T = t.el = b.NODE_ENV !== "production" ? y("teleport start") : g(""), N = t.anchor = b.NODE_ENV !== "production" ? y("teleport end") : g("");
      p(T, n, o), p(N, n, o);
      const L = (x, G) => {
        O & 16 && (r && r.isCE && (r.ce._teleportTarget = x), u(
          v,
          x,
          G,
          r,
          i,
          s,
          a,
          l
        ));
      }, $ = () => {
        const x = t.target = _a(t.props, _), G = Xd(x, t, g, p);
        x ? (s !== "svg" && cu(x) ? s = "svg" : s !== "mathml" && fu(x) && (s = "mathml"), E || (L(x, G), Ni(t, !1))) : b.NODE_ENV !== "production" && !E && M(
          "Invalid Teleport target on mount:",
          x,
          `(${typeof x})`
        );
      };
      E && (L(n, N), Ni(t, !0)), uu(t.props) ? (t.el.__isMounted = !1, nt(() => {
        $(), delete t.el.__isMounted;
      }, i)) : $();
    } else {
      if (uu(t.props) && e.el.__isMounted === !1) {
        nt(() => {
          qd.process(
            e,
            t,
            n,
            o,
            r,
            i,
            s,
            a,
            l,
            f
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const T = t.anchor = e.anchor, N = t.target = e.target, L = t.targetAnchor = e.targetAnchor, $ = so(e.props), x = $ ? n : N, G = $ ? T : L;
      if (s === "svg" || cu(N) ? s = "svg" : (s === "mathml" || fu(N)) && (s = "mathml"), S ? (d(
        e.dynamicChildren,
        S,
        x,
        r,
        i,
        s,
        a
      ), Ar(e, t, b.NODE_ENV === "production")) : l || c(
        e,
        t,
        x,
        G,
        r,
        i,
        s,
        a,
        !1
      ), E)
        $ ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : fi(
          t,
          n,
          T,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Q = t.target = _a(
          t.props,
          _
        );
        Q ? fi(
          t,
          Q,
          null,
          f,
          0
        ) : b.NODE_ENV !== "production" && M(
          "Invalid Teleport target on update:",
          N,
          `(${typeof N})`
        );
      } else $ && fi(
        t,
        N,
        L,
        f,
        1
      );
      Ni(t, E);
    }
  },
  remove(e, t, n, { um: o, o: { remove: r } }, i) {
    const {
      shapeFlag: s,
      children: a,
      anchor: l,
      targetStart: f,
      targetAnchor: u,
      target: c,
      props: d
    } = e;
    if (c && (r(f), r(u)), i && r(l), s & 16) {
      const p = i || !so(d);
      for (let _ = 0; _ < a.length; _++) {
        const g = a[_];
        o(
          g,
          t,
          n,
          p,
          !!g.dynamicChildren
        );
      }
    }
  },
  move: fi,
  hydrate: hg
};
function fi(e, t, n, { o: { insert: o }, m: r }, i = 2) {
  i === 0 && o(e.targetAnchor, t, n);
  const { el: s, anchor: a, shapeFlag: l, children: f, props: u } = e, c = i === 2;
  if (c && o(s, t, n), (!c || so(u)) && l & 16)
    for (let d = 0; d < f.length; d++)
      r(
        f[d],
        t,
        n,
        2
      );
  c && o(a, t, n);
}
function hg(e, t, n, o, r, i, {
  o: { nextSibling: s, parentNode: a, querySelector: l, insert: f, createText: u }
}, c) {
  const d = t.target = _a(
    t.props,
    l
  );
  if (d) {
    const p = so(t.props), _ = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (p)
        t.anchor = c(
          s(e),
          t,
          a(e),
          n,
          o,
          r,
          i
        ), t.targetStart = _, t.targetAnchor = _ && s(_);
      else {
        t.anchor = s(e);
        let g = _;
        for (; g; ) {
          if (g && g.nodeType === 8) {
            if (g.data === "teleport start anchor")
              t.targetStart = g;
            else if (g.data === "teleport anchor") {
              t.targetAnchor = g, d._lpa = t.targetAnchor && s(t.targetAnchor);
              break;
            }
          }
          g = s(g);
        }
        t.targetAnchor || Xd(d, t, u, f), c(
          _ && s(_),
          t,
          d,
          n,
          o,
          r,
          i
        );
      }
    Ni(t, p);
  }
  return t.anchor && s(t.anchor);
}
const cl = qd;
function Ni(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let o, r;
    for (t ? (o = e.el, r = e.anchor) : (o = e.targetStart, r = e.targetAnchor); o && o !== r; )
      o.nodeType === 1 && o.setAttribute("data-v-owner", n.uid), o = o.nextSibling;
    n.ut();
  }
}
function Xd(e, t, n, o) {
  const r = t.targetStart = n(""), i = t.targetAnchor = n("");
  return r[Gd] = i, e && (o(r, e), o(i, e)), i;
}
const Nn = Symbol("_leaveCb"), di = Symbol("_enterCb");
function _g() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return tr(() => {
    e.isMounted = !0;
  }), rp(() => {
    e.isUnmounting = !0;
  }), e;
}
const bt = [Function, Array], Qd = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: bt,
  onEnter: bt,
  onAfterEnter: bt,
  onEnterCancelled: bt,
  // leave
  onBeforeLeave: bt,
  onLeave: bt,
  onAfterLeave: bt,
  onLeaveCancelled: bt,
  // appear
  onBeforeAppear: bt,
  onAppear: bt,
  onAfterAppear: bt,
  onAppearCancelled: bt
}, Jd = (e) => {
  const t = e.subTree;
  return t.component ? Jd(t.component) : t;
}, mg = {
  name: "BaseTransition",
  props: Qd,
  setup(e, { slots: t }) {
    const n = Eo(), o = _g();
    return () => {
      const r = t.default && tp(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = Zd(r), s = ae(e), { mode: a } = s;
      if (b.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && M(`invalid <transition> mode: ${a}`), o.isLeaving)
        return Vs(i);
      const l = du(i);
      if (!l)
        return Vs(i);
      let f = ma(
        l,
        s,
        o,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => f = c
      );
      l.type !== Be && Pr(l, f);
      let u = n.subTree && du(n.subTree);
      if (u && u.type !== Be && !Jn(l, u) && Jd(n).type !== Be) {
        let c = ma(
          u,
          s,
          o,
          n
        );
        if (Pr(u, c), a === "out-in" && l.type !== Be)
          return o.isLeaving = !0, c.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, u = void 0;
          }, Vs(i);
        a === "in-out" && l.type !== Be ? c.delayLeave = (d, p, _) => {
          const g = ep(
            o,
            u
          );
          g[String(u.key)] = u, d[Nn] = () => {
            p(), d[Nn] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            _(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function Zd(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const o of e)
      if (o.type !== Be) {
        if (b.NODE_ENV !== "production" && n) {
          M(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = o, n = !0, b.NODE_ENV === "production") break;
      }
  }
  return t;
}
const gg = mg;
function ep(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function ma(e, t, n, o, r) {
  const {
    appear: i,
    mode: s,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: f,
    onAfterEnter: u,
    onEnterCancelled: c,
    onBeforeLeave: d,
    onLeave: p,
    onAfterLeave: _,
    onLeaveCancelled: g,
    onBeforeAppear: y,
    onAppear: E,
    onAfterAppear: O,
    onAppearCancelled: v
  } = t, S = String(e.key), T = ep(n, e), N = (x, G) => {
    x && Lt(
      x,
      o,
      9,
      G
    );
  }, L = (x, G) => {
    const Q = G[1];
    N(x, G), ee(x) ? x.every((D) => D.length <= 1) && Q() : x.length <= 1 && Q();
  }, $ = {
    mode: s,
    persisted: a,
    beforeEnter(x) {
      let G = l;
      if (!n.isMounted)
        if (i)
          G = y || l;
        else
          return;
      x[Nn] && x[Nn](
        !0
        /* cancelled */
      );
      const Q = T[S];
      Q && Jn(e, Q) && Q.el[Nn] && Q.el[Nn](), N(G, [x]);
    },
    enter(x) {
      let G = f, Q = u, D = c;
      if (!n.isMounted)
        if (i)
          G = E || f, Q = O || u, D = v || c;
        else
          return;
      let q = !1;
      const ce = x[di] = (pe) => {
        q || (q = !0, pe ? N(D, [x]) : N(Q, [x]), $.delayedLeave && $.delayedLeave(), x[di] = void 0);
      };
      G ? L(G, [x, ce]) : ce();
    },
    leave(x, G) {
      const Q = String(e.key);
      if (x[di] && x[di](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return G();
      N(d, [x]);
      let D = !1;
      const q = x[Nn] = (ce) => {
        D || (D = !0, G(), ce ? N(g, [x]) : N(_, [x]), x[Nn] = void 0, T[Q] === e && delete T[Q]);
      };
      T[Q] = e, p ? L(p, [x, q]) : q();
    },
    clone(x) {
      const G = ma(
        x,
        t,
        n,
        o,
        r
      );
      return r && r(G), G;
    }
  };
  return $;
}
function Vs(e) {
  if (Jr(e))
    return e = en(e), e.children = null, e;
}
function du(e) {
  if (!Jr(e))
    return Yd(e.type) && e.children ? Zd(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ie(n.default))
      return n.default();
  }
}
function Pr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Pr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function tp(e, t = !1, n) {
  let o = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
    s.type === Ie ? (s.patchFlag & 128 && r++, o = o.concat(
      tp(s.children, t, a)
    )) : (t || s.type !== Be) && o.push(a != null ? en(s, { key: a }) : s);
  }
  if (r > 1)
    for (let i = 0; i < o.length; i++)
      o[i].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qe(e, t) {
  return ie(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Pe({ name: e.name }, t, { setup: e })
  ) : e;
}
function np(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Eg = /* @__PURE__ */ new WeakSet();
function Or(e, t, n, o, r = !1) {
  if (ee(e)) {
    e.forEach(
      (_, g) => Or(
        _,
        t && (ee(t) ? t[g] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (Mo(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Or(e, t, n, o.component.subTree);
    return;
  }
  const i = o.shapeFlag & 4 ? _s(o.component) : o.el, s = r ? null : i, { i: a, r: l } = e;
  if (b.NODE_ENV !== "production" && !a) {
    M(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = a.refs === Ae ? a.refs = {} : a.refs, c = a.setupState, d = ae(c), p = c === Ae ? () => !1 : (_) => b.NODE_ENV !== "production" && (ge(d, _) && !Ue(d[_]) && M(
    `Template ref "${_}" used on a non-ref value. It will not work in the production build.`
  ), Eg.has(d[_])) ? !1 : ge(d, _);
  if (f != null && f !== l && (xe(f) ? (u[f] = null, p(f) && (c[f] = null)) : Ue(f) && (f.value = null)), ie(l))
    er(l, a, 12, [s, u]);
  else {
    const _ = xe(l), g = Ue(l);
    if (_ || g) {
      const y = () => {
        if (e.f) {
          const E = _ ? p(l) ? c[l] : u[l] : l.value;
          r ? ee(E) && Ja(E, i) : ee(E) ? E.includes(i) || E.push(i) : _ ? (u[l] = [i], p(l) && (c[l] = u[l])) : (l.value = [i], e.k && (u[e.k] = l.value));
        } else _ ? (u[l] = s, p(l) && (c[l] = s)) : g ? (l.value = s, e.k && (u[e.k] = s)) : b.NODE_ENV !== "production" && M("Invalid template ref type:", l, `(${typeof l})`);
      };
      s ? (y.id = -1, nt(y, n)) : y();
    } else b.NODE_ENV !== "production" && M("Invalid template ref type:", l, `(${typeof l})`);
  }
}
Yr().requestIdleCallback;
Yr().cancelIdleCallback;
const Mo = (e) => !!e.type.__asyncLoader, Jr = (e) => e.type.__isKeepAlive;
function vg(e, t) {
  op(e, "a", t);
}
function yg(e, t) {
  op(e, "da", t);
}
function op(e, t, n = We) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ps(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Jr(r.parent.vnode) && bg(o, t, n, r), r = r.parent;
  }
}
function bg(e, t, n, o) {
  const r = ps(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  fl(() => {
    Ja(o[t], r);
  }, n);
}
function ps(e, t, n = We, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      Vt();
      const a = ei(n), l = Lt(t, n, e, s);
      return a(), Pt(), l;
    });
    return o ? r.unshift(i) : r.push(i), i;
  } else if (b.NODE_ENV !== "production") {
    const r = Yn(al[e].replace(/ hook$/, ""));
    M(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const vn = (e) => (t, n = We) => {
  (!Mr || e === "sp") && ps(e, (...o) => t(...o), n);
}, Og = vn("bm"), tr = vn("m"), Ag = vn(
  "bu"
), wg = vn("u"), rp = vn(
  "bum"
), fl = vn("um"), Tg = vn(
  "sp"
), Ng = vn("rtg"), Cg = vn("rtc");
function Sg(e, t = We) {
  ps("ec", e, t);
}
const ga = "components", Dg = "directives";
function Bo(e, t) {
  return ip(ga, e, !0, t) || e;
}
const xg = Symbol.for("v-ndc");
function Ig(e) {
  return ip(Dg, e);
}
function ip(e, t, n = !0, o = !1) {
  const r = He || We;
  if (r) {
    const i = r.type;
    if (e === ga) {
      const a = vl(
        i,
        !1
      );
      if (a && (a === t || a === st(t) || a === co(st(t))))
        return i;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      pu(r[e] || i[e], t) || // global registration
      pu(r.appContext[e], t)
    );
    if (!s && o)
      return i;
    if (b.NODE_ENV !== "production" && n && !s) {
      const a = e === ga ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      M(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return s;
  } else b.NODE_ENV !== "production" && M(
    `resolve${co(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function pu(e, t) {
  return e && (e[t] || e[st(t)] || e[co(st(t))]);
}
function $n(e, t, n, o) {
  let r;
  const i = n, s = ee(e);
  if (s || xe(e)) {
    const a = s && ro(e);
    let l = !1, f = !1;
    a && (l = !at(e), f = Jt(e), e = as(e)), r = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      r[u] = t(
        l ? f ? Hi(Xe(e[u])) : Xe(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    b.NODE_ENV !== "production" && !Number.isInteger(e) && M(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let a = 0; a < e; a++)
      r[a] = t(a + 1, a, void 0, i);
  } else if (ve(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (a, l) => t(a, l, void 0, i)
      );
    else {
      const a = Object.keys(e);
      r = new Array(a.length);
      for (let l = 0, f = a.length; l < f; l++) {
        const u = a[l];
        r[l] = t(e[u], u, l, i);
      }
    }
  else
    r = [];
  return r;
}
function he(e, t, n = {}, o, r) {
  if (He.ce || He.parent && Mo(He.parent) && He.parent.ce)
    return t !== "default" && (n.name = t), oe(), Zt(
      Ie,
      null,
      [Se("slot", n, o && o())],
      64
    );
  let i = e[t];
  b.NODE_ENV !== "production" && i && i.length > 1 && (M(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), oe();
  const s = i && sp(i(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  s && s.key, l = Zt(
    Ie,
    {
      key: (a && !kt(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!s && o ? "_fb" : "")
    },
    s || (o ? o() : []),
    s && e._ === 1 ? 64 : -2
  );
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), i && i._c && (i._d = !0), l;
}
function sp(e) {
  return e.some((t) => po(t) ? !(t.type === Be || t.type === Ie && !sp(t.children)) : !0) ? e : null;
}
const Ea = (e) => e ? Sp(e) ? _s(e) : Ea(e.parent) : null, ao = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Pe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => b.NODE_ENV !== "production" ? Yt(e.props) : e.props,
    $attrs: (e) => b.NODE_ENV !== "production" ? Yt(e.attrs) : e.attrs,
    $slots: (e) => b.NODE_ENV !== "production" ? Yt(e.slots) : e.slots,
    $refs: (e) => b.NODE_ENV !== "production" ? Yt(e.refs) : e.refs,
    $parent: (e) => Ea(e.parent),
    $root: (e) => Ea(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => up(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ds(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = fs.bind(e.proxy)),
    $watch: (e) => uE.bind(e)
  })
), dl = (e) => e === "_" || e === "$", Ps = (e, t) => e !== Ae && !e.__isScriptSetup && ge(e, t), ap = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: i, accessCache: s, type: a, appContext: l } = e;
    if (b.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const p = s[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Ps(o, t))
          return s[t] = 1, o[t];
        if (r !== Ae && ge(r, t))
          return s[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && ge(f, t)
        )
          return s[t] = 3, i[t];
        if (n !== Ae && ge(n, t))
          return s[t] = 4, n[t];
        va && (s[t] = 0);
      }
    }
    const u = ao[t];
    let c, d;
    if (u)
      return t === "$attrs" ? (je(e.attrs, "get", ""), b.NODE_ENV !== "production" && Yi()) : b.NODE_ENV !== "production" && t === "$slots" && je(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Ae && ge(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, ge(d, t)
    )
      return d[t];
    b.NODE_ENV !== "production" && He && (!xe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== Ae && dl(t[0]) && ge(r, t) ? M(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === He && M(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: i } = e;
    return Ps(r, t) ? (r[t] = n, !0) : b.NODE_ENV !== "production" && r.__isScriptSetup && ge(r, t) ? (M(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Ae && ge(o, t) ? (o[t] = n, !0) : ge(e.props, t) ? (b.NODE_ENV !== "production" && M(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (b.NODE_ENV !== "production" && M(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (b.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i }
  }, s) {
    let a;
    return !!n[s] || e !== Ae && ge(e, s) || Ps(t, s) || (a = i[0]) && ge(a, s) || ge(o, s) || ge(ao, s) || ge(r.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
b.NODE_ENV !== "production" && (ap.ownKeys = (e) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function $g(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ao).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ao[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Ke
    });
  }), t;
}
function kg(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Ke
    });
  });
}
function Rg(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ae(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (dl(o[0])) {
        M(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Ke
      });
    }
  });
}
function hu(e) {
  return ee(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Vg() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? M(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let va = !0;
function Pg(e) {
  const t = up(e), n = e.proxy, o = e.ctx;
  va = !1, t.beforeCreate && _u(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: s,
    watch: a,
    provide: l,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: c,
    mounted: d,
    beforeUpdate: p,
    updated: _,
    activated: g,
    deactivated: y,
    beforeDestroy: E,
    beforeUnmount: O,
    destroyed: v,
    unmounted: S,
    render: T,
    renderTracked: N,
    renderTriggered: L,
    errorCaptured: $,
    serverPrefetch: x,
    // public API
    expose: G,
    inheritAttrs: Q,
    // assets
    components: D,
    directives: q,
    filters: ce
  } = t, pe = b.NODE_ENV !== "production" ? Vg() : null;
  if (b.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const J in F)
        pe("Props", J);
  }
  if (f && Lg(f, o, pe), s)
    for (const F in s) {
      const J = s[F];
      ie(J) ? (b.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: J.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = J.bind(n), b.NODE_ENV !== "production" && pe("Methods", F)) : b.NODE_ENV !== "production" && M(
        `Method "${F}" has type "${typeof J}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    b.NODE_ENV !== "production" && !ie(r) && M(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = r.call(n, n);
    if (b.NODE_ENV !== "production" && Za(F) && M(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ve(F))
      b.NODE_ENV !== "production" && M("data() should return an object.");
    else if (e.data = us(F), b.NODE_ENV !== "production")
      for (const J in F)
        pe("Data", J), dl(J[0]) || Object.defineProperty(o, J, {
          configurable: !0,
          enumerable: !0,
          get: () => F[J],
          set: Ke
        });
  }
  if (va = !0, i)
    for (const F in i) {
      const J = i[F], _e = ie(J) ? J.bind(n, n) : ie(J.get) ? J.get.bind(n, n) : Ke;
      b.NODE_ENV !== "production" && _e === Ke && M(`Computed property "${F}" has no getter.`);
      const Le = !ie(J) && ie(J.set) ? J.set.bind(n) : b.NODE_ENV !== "production" ? () => {
        M(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : Ke, Me = Te({
        get: _e,
        set: Le
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (Ne) => Me.value = Ne
      }), b.NODE_ENV !== "production" && pe("Computed", F);
    }
  if (a)
    for (const F in a)
      lp(a[F], o, n, F);
  if (l) {
    const F = ie(l) ? l.call(n) : l;
    Reflect.ownKeys(F).forEach((J) => {
      Ci(J, F[J]);
    });
  }
  u && _u(u, e, "c");
  function Y(F, J) {
    ee(J) ? J.forEach((_e) => F(_e.bind(n))) : J && F(J.bind(n));
  }
  if (Y(Og, c), Y(tr, d), Y(Ag, p), Y(wg, _), Y(vg, g), Y(yg, y), Y(Sg, $), Y(Cg, N), Y(Ng, L), Y(rp, O), Y(fl, S), Y(Tg, x), ee(G))
    if (G.length) {
      const F = e.exposed || (e.exposed = {});
      G.forEach((J) => {
        Object.defineProperty(F, J, {
          get: () => n[J],
          set: (_e) => n[J] = _e
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === Ke && (e.render = T), Q != null && (e.inheritAttrs = Q), D && (e.components = D), q && (e.directives = q), x && np(e);
}
function Lg(e, t, n = Ke) {
  ee(e) && (e = ya(e));
  for (const o in e) {
    const r = e[o];
    let i;
    ve(r) ? "default" in r ? i = pn(
      r.from || o,
      r.default,
      !0
    ) : i = pn(r.from || o) : i = pn(r), Ue(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[o] = i, b.NODE_ENV !== "production" && n("Inject", o);
  }
}
function _u(e, t, n) {
  Lt(
    ee(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function lp(e, t, n, o) {
  let r = o.includes(".") ? yp(n, o) : () => n[o];
  if (xe(e)) {
    const i = t[e];
    ie(i) ? kn(r, i) : b.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e}"`, i);
  } else if (ie(e))
    kn(r, e.bind(n));
  else if (ve(e))
    if (ee(e))
      e.forEach((i) => lp(i, t, n, o));
    else {
      const i = ie(e.handler) ? e.handler.bind(n) : t[e.handler];
      ie(i) ? kn(r, i, e) : b.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else b.NODE_ENV !== "production" && M(`Invalid watch option: "${o}"`, e);
}
function up(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = i.get(t);
  let l;
  return a ? l = a : !r.length && !n && !o ? l = t : (l = {}, r.length && r.forEach(
    (f) => zi(l, f, s, !0)
  ), zi(l, t, s)), ve(t) && i.set(t, l), l;
}
function zi(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && zi(e, i, n, !0), r && r.forEach(
    (s) => zi(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      b.NODE_ENV !== "production" && M(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Mg[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Mg = {
  data: mu,
  props: gu,
  emits: gu,
  // objects
  methods: mr,
  computed: mr,
  // lifecycle
  beforeCreate: tt,
  created: tt,
  beforeMount: tt,
  mounted: tt,
  beforeUpdate: tt,
  updated: tt,
  beforeDestroy: tt,
  beforeUnmount: tt,
  destroyed: tt,
  unmounted: tt,
  activated: tt,
  deactivated: tt,
  errorCaptured: tt,
  serverPrefetch: tt,
  // assets
  components: mr,
  directives: mr,
  // watch
  watch: Bg,
  // provide / inject
  provide: mu,
  inject: Fg
};
function mu(e, t) {
  return t ? e ? function() {
    return Pe(
      ie(e) ? e.call(this, this) : e,
      ie(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Fg(e, t) {
  return mr(ya(e), ya(t));
}
function ya(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function tt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function mr(e, t) {
  return e ? Pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function gu(e, t) {
  return e ? ee(e) && ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Pe(
    /* @__PURE__ */ Object.create(null),
    hu(e),
    hu(t ?? {})
  ) : t;
}
function Bg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pe(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = tt(e[o], t[o]);
  return n;
}
function cp() {
  return {
    app: null,
    config: {
      isNativeTag: J_,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Hg = 0;
function Ug(e, t) {
  return function(o, r = null) {
    ie(o) || (o = Pe({}, o)), r != null && !ve(r) && (b.NODE_ENV !== "production" && M("root props passed to app.mount() must be an object."), r = null);
    const i = cp(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const f = i.app = {
      _uid: Hg++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Du,
      get config() {
        return i.config;
      },
      set config(u) {
        b.NODE_ENV !== "production" && M(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...c) {
        return s.has(u) ? b.NODE_ENV !== "production" && M("Plugin has already been applied to target app.") : u && ie(u.install) ? (s.add(u), u.install(f, ...c)) : ie(u) ? (s.add(u), u(f, ...c)) : b.NODE_ENV !== "production" && M(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return i.mixins.includes(u) ? b.NODE_ENV !== "production" && M(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : i.mixins.push(u), f;
      },
      component(u, c) {
        return b.NODE_ENV !== "production" && Ta(u, i.config), c ? (b.NODE_ENV !== "production" && i.components[u] && M(`Component "${u}" has already been registered in target app.`), i.components[u] = c, f) : i.components[u];
      },
      directive(u, c) {
        return b.NODE_ENV !== "production" && Wd(u), c ? (b.NODE_ENV !== "production" && i.directives[u] && M(`Directive "${u}" has already been registered in target app.`), i.directives[u] = c, f) : i.directives[u];
      },
      mount(u, c, d) {
        if (l)
          b.NODE_ENV !== "production" && M(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          b.NODE_ENV !== "production" && u.__vue_app__ && M(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = f._ceVNode || Se(o, r);
          return p.appContext = i, d === !0 ? d = "svg" : d === !1 && (d = void 0), b.NODE_ENV !== "production" && (i.reload = () => {
            const _ = en(p);
            _.el = null, e(_, u, d);
          }), e(p, u, d), l = !0, f._container = u, u.__vue_app__ = f, b.NODE_ENV !== "production" && (f._instance = p.component, sg(f, Du)), _s(p.component);
        }
      },
      onUnmount(u) {
        b.NODE_ENV !== "production" && typeof u != "function" && M(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        l ? (Lt(
          a,
          f._instance,
          16
        ), e(null, f._container), b.NODE_ENV !== "production" && (f._instance = null, ag(f)), delete f._container.__vue_app__) : b.NODE_ENV !== "production" && M("Cannot unmount an app that is not mounted.");
      },
      provide(u, c) {
        return b.NODE_ENV !== "production" && u in i.provides && (ge(i.provides, u) ? M(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : M(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[u] = c, f;
      },
      runWithContext(u) {
        const c = Fo;
        Fo = f;
        try {
          return u();
        } finally {
          Fo = c;
        }
      }
    };
    return f;
  };
}
let Fo = null;
function Ci(e, t) {
  if (!We)
    b.NODE_ENV !== "production" && M("provide() can only be used inside setup().");
  else {
    let n = We.provides;
    const o = We.parent && We.parent.provides;
    o === n && (n = We.provides = Object.create(o)), n[e] = t;
  }
}
function pn(e, t, n = !1) {
  const o = We || He;
  if (o || Fo) {
    let r = Fo ? Fo._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ie(t) ? t.call(o && o.proxy) : t;
    b.NODE_ENV !== "production" && M(`injection "${String(e)}" not found.`);
  } else b.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
const fp = {}, dp = () => Object.create(fp), pp = (e) => Object.getPrototypeOf(e) === fp;
function jg(e, t, n, o = !1) {
  const r = {}, i = dp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), hp(e, t, r, i);
  for (const s in e.propsOptions[0])
    s in r || (r[s] = void 0);
  b.NODE_ENV !== "production" && mp(t || {}, r, e), n ? e.props = o ? r : xd(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Kg(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Wg(e, t, n, o) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, a = ae(r), [l] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(b.NODE_ENV !== "production" && Kg(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        let d = u[c];
        if (hs(e.emitsOptions, d))
          continue;
        const p = t[d];
        if (l)
          if (ge(i, d))
            p !== i[d] && (i[d] = p, f = !0);
          else {
            const _ = st(d);
            r[_] = ba(
              l,
              a,
              _,
              p,
              e,
              !1
            );
          }
        else
          p !== i[d] && (i[d] = p, f = !0);
      }
    }
  } else {
    hp(e, t, r, i) && (f = !0);
    let u;
    for (const c in a)
      (!t || // for camelCase
      !ge(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Rn(c)) === c || !ge(t, u))) && (l ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[c] = ba(
        l,
        a,
        c,
        void 0,
        e,
        !0
      )) : delete r[c]);
    if (i !== a)
      for (const c in i)
        (!t || !ge(t, c)) && (delete i[c], f = !0);
  }
  f && zt(e.attrs, "set", ""), b.NODE_ENV !== "production" && mp(t || {}, r, e);
}
function hp(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (vr(l))
        continue;
      const f = t[l];
      let u;
      r && ge(r, u = st(l)) ? !i || !i.includes(u) ? n[u] = f : (a || (a = {}))[u] = f : hs(e.emitsOptions, l) || (!(l in o) || f !== o[l]) && (o[l] = f, s = !0);
    }
  if (i) {
    const l = ae(n), f = a || Ae;
    for (let u = 0; u < i.length; u++) {
      const c = i[u];
      n[c] = ba(
        r,
        l,
        c,
        f[c],
        e,
        !ge(f, c)
      );
    }
  }
  return s;
}
function ba(e, t, n, o, r, i) {
  const s = e[n];
  if (s != null) {
    const a = ge(s, "default");
    if (a && o === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && ie(l)) {
        const { propsDefaults: f } = r;
        if (n in f)
          o = f[n];
        else {
          const u = ei(r);
          o = f[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        o = l;
      r.ce && r.ce._setProp(n, o);
    }
    s[
      0
      /* shouldCast */
    ] && (i && !a ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Rn(n)) && (o = !0));
  }
  return o;
}
const zg = /* @__PURE__ */ new WeakMap();
function _p(e, t, n = !1) {
  const o = n ? zg : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const i = e.props, s = {}, a = [];
  let l = !1;
  if (!ie(e)) {
    const u = (c) => {
      l = !0;
      const [d, p] = _p(c, t, !0);
      Pe(s, d), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !l)
    return ve(e) && o.set(e, Po), Po;
  if (ee(i))
    for (let u = 0; u < i.length; u++) {
      b.NODE_ENV !== "production" && !xe(i[u]) && M("props must be strings when using array syntax.", i[u]);
      const c = st(i[u]);
      Eu(c) && (s[c] = Ae);
    }
  else if (i) {
    b.NODE_ENV !== "production" && !ve(i) && M("invalid props options", i);
    for (const u in i) {
      const c = st(u);
      if (Eu(c)) {
        const d = i[u], p = s[c] = ee(d) || ie(d) ? { type: d } : Pe({}, d), _ = p.type;
        let g = !1, y = !0;
        if (ee(_))
          for (let E = 0; E < _.length; ++E) {
            const O = _[E], v = ie(O) && O.name;
            if (v === "Boolean") {
              g = !0;
              break;
            } else v === "String" && (y = !1);
          }
        else
          g = ie(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = g, p[
          1
          /* shouldCastTrue */
        ] = y, (g || ge(p, "default")) && a.push(c);
      }
    }
  }
  const f = [s, a];
  return ve(e) && o.set(e, f), f;
}
function Eu(e) {
  return e[0] !== "$" && !vr(e) ? !0 : (b.NODE_ENV !== "production" && M(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Gg(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function mp(e, t, n) {
  const o = ae(t), r = n.propsOptions[0], i = Object.keys(e).map((s) => st(s));
  for (const s in r) {
    let a = r[s];
    a != null && Yg(
      s,
      o[s],
      a,
      b.NODE_ENV !== "production" ? Yt(o) : o,
      !i.includes(s)
    );
  }
}
function Yg(e, t, n, o, r) {
  const { type: i, required: s, validator: a, skipCheck: l } = n;
  if (s && r) {
    M('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (i != null && i !== !0 && !l) {
      let f = !1;
      const u = ee(i) ? i : [i], c = [];
      for (let d = 0; d < u.length && !f; d++) {
        const { valid: p, expectedType: _ } = Xg(t, u[d]);
        c.push(_ || ""), f = p;
      }
      if (!f) {
        M(Qg(e, t, c));
        return;
      }
    }
    a && !a(t, o) && M('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const qg = /* @__PURE__ */ gn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Xg(e, t) {
  let n;
  const o = Gg(t);
  if (o === "null")
    n = e === null;
  else if (qg(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else o === "Object" ? n = ve(e) : o === "Array" ? n = ee(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Qg(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(co).join(" | ")}`;
  const r = n[0], i = el(t), s = vu(t, r), a = vu(t, i);
  return n.length === 1 && yu(r) && !Jg(r, i) && (o += ` with value ${s}`), o += `, got ${i} `, yu(i) && (o += `with value ${a}.`), o;
}
function vu(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function yu(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Jg(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const pl = (e) => e[0] === "_" || e === "$stable", hl = (e) => ee(e) ? e.map(Dt) : [Dt(e)], Zg = (e, t, n) => {
  if (t._n)
    return t;
  const o = dn((...r) => (b.NODE_ENV !== "production" && We && !(n === null && He) && !(n && n.root !== We.root) && M(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), hl(t(...r))), n);
  return o._c = !1, o;
}, gp = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (pl(r)) continue;
    const i = e[r];
    if (ie(i))
      t[r] = Zg(r, i, o);
    else if (i != null) {
      b.NODE_ENV !== "production" && M(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const s = hl(i);
      t[r] = () => s;
    }
  }
}, Ep = (e, t) => {
  b.NODE_ENV !== "production" && !Jr(e.vnode) && M(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = hl(t);
  e.slots.default = () => n;
}, Oa = (e, t, n) => {
  for (const o in t)
    (n || !pl(o)) && (e[o] = t[o]);
}, eE = (e, t, n) => {
  const o = e.slots = dp();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && Ir(o, "__", r, !0);
    const i = t._;
    i ? (Oa(o, t, n), n && Ir(o, "_", i, !0)) : gp(t, o);
  } else t && Ep(e, t);
}, tE = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = !0, s = Ae;
  if (o.shapeFlag & 32) {
    const a = t._;
    a ? b.NODE_ENV !== "production" && xt ? (Oa(r, t, n), zt(e, "set", "$slots")) : n && a === 1 ? i = !1 : Oa(r, t, n) : (i = !t.$stable, gp(t, r)), s = t;
  } else t && (Ep(e, t), s = { default: 1 });
  if (i)
    for (const a in r)
      !pl(a) && s[a] == null && delete r[a];
};
let ur, Dn;
function Ao(e, t) {
  e.appContext.config.performance && Gi() && Dn.mark(`vue-${t}-${e.uid}`), b.NODE_ENV !== "production" && fg(e, t, Gi() ? Dn.now() : Date.now());
}
function wo(e, t) {
  if (e.appContext.config.performance && Gi()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Dn.mark(o), Dn.measure(
      `<${ms(e, e.type)}> ${t}`,
      n,
      o
    ), Dn.clearMarks(n), Dn.clearMarks(o);
  }
  b.NODE_ENV !== "production" && dg(e, t, Gi() ? Dn.now() : Date.now());
}
function Gi() {
  return ur !== void 0 || (typeof window < "u" && window.performance ? (ur = !0, Dn = window.performance) : ur = !1), ur;
}
function nE() {
  const e = [];
  if (b.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const nt = mE;
function oE(e) {
  return rE(e);
}
function rE(e, t) {
  nE();
  const n = Yr();
  n.__VUE__ = !0, b.NODE_ENV !== "production" && Hd(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: i,
    createElement: s,
    createText: a,
    createComment: l,
    setText: f,
    setElementText: u,
    parentNode: c,
    nextSibling: d,
    setScopeId: p = Ke,
    insertStaticContent: _
  } = e, g = (h, m, A, I = null, C = null, k = null, W = void 0, B = null, U = b.NODE_ENV !== "production" && xt ? !1 : !!m.dynamicChildren) => {
    if (h === m)
      return;
    h && !Jn(h, m) && (I = K(h), ke(h, C, k, !0), h = null), m.patchFlag === -2 && (U = !1, m.dynamicChildren = null);
    const { type: P, ref: ne, shapeFlag: j } = m;
    switch (P) {
      case Zr:
        y(h, m, A, I);
        break;
      case Be:
        E(h, m, A, I);
        break;
      case wr:
        h == null ? O(m, A, I, W) : b.NODE_ENV !== "production" && v(h, m, A, W);
        break;
      case Ie:
        q(
          h,
          m,
          A,
          I,
          C,
          k,
          W,
          B,
          U
        );
        break;
      default:
        j & 1 ? N(
          h,
          m,
          A,
          I,
          C,
          k,
          W,
          B,
          U
        ) : j & 6 ? ce(
          h,
          m,
          A,
          I,
          C,
          k,
          W,
          B,
          U
        ) : j & 64 || j & 128 ? P.process(
          h,
          m,
          A,
          I,
          C,
          k,
          W,
          B,
          U,
          fe
        ) : b.NODE_ENV !== "production" && M("Invalid VNode type:", P, `(${typeof P})`);
    }
    ne != null && C ? Or(ne, h && h.ref, k, m || h, !m) : ne == null && h && h.ref != null && Or(h.ref, null, k, h, !0);
  }, y = (h, m, A, I) => {
    if (h == null)
      o(
        m.el = a(m.children),
        A,
        I
      );
    else {
      const C = m.el = h.el;
      m.children !== h.children && f(C, m.children);
    }
  }, E = (h, m, A, I) => {
    h == null ? o(
      m.el = l(m.children || ""),
      A,
      I
    ) : m.el = h.el;
  }, O = (h, m, A, I) => {
    [h.el, h.anchor] = _(
      h.children,
      m,
      A,
      I,
      h.el,
      h.anchor
    );
  }, v = (h, m, A, I) => {
    if (m.children !== h.children) {
      const C = d(h.anchor);
      T(h), [m.el, m.anchor] = _(
        m.children,
        A,
        C,
        I
      );
    } else
      m.el = h.el, m.anchor = h.anchor;
  }, S = ({ el: h, anchor: m }, A, I) => {
    let C;
    for (; h && h !== m; )
      C = d(h), o(h, A, I), h = C;
    o(m, A, I);
  }, T = ({ el: h, anchor: m }) => {
    let A;
    for (; h && h !== m; )
      A = d(h), r(h), h = A;
    r(m);
  }, N = (h, m, A, I, C, k, W, B, U) => {
    m.type === "svg" ? W = "svg" : m.type === "math" && (W = "mathml"), h == null ? L(
      m,
      A,
      I,
      C,
      k,
      W,
      B,
      U
    ) : G(
      h,
      m,
      C,
      k,
      W,
      B,
      U
    );
  }, L = (h, m, A, I, C, k, W, B) => {
    let U, P;
    const { props: ne, shapeFlag: j, transition: te, dirs: se } = h;
    if (U = h.el = s(
      h.type,
      k,
      ne && ne.is,
      ne
    ), j & 8 ? u(U, h.children) : j & 16 && x(
      h.children,
      U,
      null,
      I,
      C,
      Ls(h, k),
      W,
      B
    ), se && Kn(h, null, I, "created"), $(U, h, h.scopeId, W, I), ne) {
      for (const ye in ne)
        ye !== "value" && !vr(ye) && i(U, ye, null, ne[ye], k, I);
      "value" in ne && i(U, "value", null, ne.value, k), (P = ne.onVnodeBeforeMount) && jt(P, I, h);
    }
    b.NODE_ENV !== "production" && (Ir(U, "__vnode", h, !0), Ir(U, "__vueParentComponent", I, !0)), se && Kn(h, null, I, "beforeMount");
    const me = iE(C, te);
    me && te.beforeEnter(U), o(U, m, A), ((P = ne && ne.onVnodeMounted) || me || se) && nt(() => {
      P && jt(P, I, h), me && te.enter(U), se && Kn(h, null, I, "mounted");
    }, C);
  }, $ = (h, m, A, I, C) => {
    if (A && p(h, A), I)
      for (let k = 0; k < I.length; k++)
        p(h, I[k]);
    if (C) {
      let k = C.subTree;
      if (b.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && (k = gl(k.children) || k), m === k || Ap(k.type) && (k.ssContent === m || k.ssFallback === m)) {
        const W = C.vnode;
        $(
          h,
          W,
          W.scopeId,
          W.slotScopeIds,
          C.parent
        );
      }
    }
  }, x = (h, m, A, I, C, k, W, B, U = 0) => {
    for (let P = U; P < h.length; P++) {
      const ne = h[P] = B ? Cn(h[P]) : Dt(h[P]);
      g(
        null,
        ne,
        m,
        A,
        I,
        C,
        k,
        W,
        B
      );
    }
  }, G = (h, m, A, I, C, k, W) => {
    const B = m.el = h.el;
    b.NODE_ENV !== "production" && (B.__vnode = m);
    let { patchFlag: U, dynamicChildren: P, dirs: ne } = m;
    U |= h.patchFlag & 16;
    const j = h.props || Ae, te = m.props || Ae;
    let se;
    if (A && Wn(A, !1), (se = te.onVnodeBeforeUpdate) && jt(se, A, m, h), ne && Kn(m, h, A, "beforeUpdate"), A && Wn(A, !0), b.NODE_ENV !== "production" && xt && (U = 0, W = !1, P = null), (j.innerHTML && te.innerHTML == null || j.textContent && te.textContent == null) && u(B, ""), P ? (Q(
      h.dynamicChildren,
      P,
      B,
      A,
      I,
      Ls(m, C),
      k
    ), b.NODE_ENV !== "production" && Ar(h, m)) : W || _e(
      h,
      m,
      B,
      null,
      A,
      I,
      Ls(m, C),
      k,
      !1
    ), U > 0) {
      if (U & 16)
        D(B, j, te, A, C);
      else if (U & 2 && j.class !== te.class && i(B, "class", null, te.class, C), U & 4 && i(B, "style", j.style, te.style, C), U & 8) {
        const me = m.dynamicProps;
        for (let ye = 0; ye < me.length; ye++) {
          const we = me[ye], ft = j[we], dt = te[we];
          (dt !== ft || we === "value") && i(B, we, ft, dt, C, A);
        }
      }
      U & 1 && h.children !== m.children && u(B, m.children);
    } else !W && P == null && D(B, j, te, A, C);
    ((se = te.onVnodeUpdated) || ne) && nt(() => {
      se && jt(se, A, m, h), ne && Kn(m, h, A, "updated");
    }, I);
  }, Q = (h, m, A, I, C, k, W) => {
    for (let B = 0; B < m.length; B++) {
      const U = h[B], P = m[B], ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        U.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (U.type === Ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jn(U, P) || // - In the case of a component, it could contain anything.
        U.shapeFlag & 198) ? c(U.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      g(
        U,
        P,
        ne,
        null,
        I,
        C,
        k,
        W,
        !0
      );
    }
  }, D = (h, m, A, I, C) => {
    if (m !== A) {
      if (m !== Ae)
        for (const k in m)
          !vr(k) && !(k in A) && i(
            h,
            k,
            m[k],
            null,
            C,
            I
          );
      for (const k in A) {
        if (vr(k)) continue;
        const W = A[k], B = m[k];
        W !== B && k !== "value" && i(h, k, B, W, C, I);
      }
      "value" in A && i(h, "value", m.value, A.value, C);
    }
  }, q = (h, m, A, I, C, k, W, B, U) => {
    const P = m.el = h ? h.el : a(""), ne = m.anchor = h ? h.anchor : a("");
    let { patchFlag: j, dynamicChildren: te, slotScopeIds: se } = m;
    b.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (xt || j & 2048) && (j = 0, U = !1, te = null), se && (B = B ? B.concat(se) : se), h == null ? (o(P, A, I), o(ne, A, I), x(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      A,
      ne,
      C,
      k,
      W,
      B,
      U
    )) : j > 0 && j & 64 && te && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (Q(
      h.dynamicChildren,
      te,
      A,
      C,
      k,
      W,
      B
    ), b.NODE_ENV !== "production" ? Ar(h, m) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (m.key != null || C && m === C.subTree) && Ar(
        h,
        m,
        !0
        /* shallow */
      )
    )) : _e(
      h,
      m,
      A,
      ne,
      C,
      k,
      W,
      B,
      U
    );
  }, ce = (h, m, A, I, C, k, W, B, U) => {
    m.slotScopeIds = B, h == null ? m.shapeFlag & 512 ? C.ctx.activate(
      m,
      A,
      I,
      W,
      U
    ) : pe(
      m,
      A,
      I,
      C,
      k,
      W,
      U
    ) : Y(h, m, U);
  }, pe = (h, m, A, I, C, k, W) => {
    const B = h.component = OE(
      h,
      I,
      C
    );
    if (b.NODE_ENV !== "production" && B.type.__hmrId && ng(B), b.NODE_ENV !== "production" && (Ai(h), Ao(B, "mount")), Jr(h) && (B.ctx.renderer = fe), b.NODE_ENV !== "production" && Ao(B, "init"), wE(B, !1, W), b.NODE_ENV !== "production" && wo(B, "init"), b.NODE_ENV !== "production" && xt && (h.el = null), B.asyncDep) {
      if (C && C.registerDep(B, F, W), !h.el) {
        const U = B.subTree = Se(Be);
        E(null, U, m, A);
      }
    } else
      F(
        B,
        h,
        m,
        A,
        C,
        k,
        W
      );
    b.NODE_ENV !== "production" && (wi(), wo(B, "mount"));
  }, Y = (h, m, A) => {
    const I = m.component = h.component;
    if (hE(h, m, A))
      if (I.asyncDep && !I.asyncResolved) {
        b.NODE_ENV !== "production" && Ai(m), J(I, m, A), b.NODE_ENV !== "production" && wi();
        return;
      } else
        I.next = m, I.update();
    else
      m.el = h.el, I.vnode = m;
  }, F = (h, m, A, I, C, k, W) => {
    const B = () => {
      if (h.isMounted) {
        let { next: j, bu: te, u: se, parent: me, vnode: ye } = h;
        {
          const Ht = vp(h);
          if (Ht) {
            j && (j.el = ye.el, J(h, j, W)), Ht.asyncDep.then(() => {
              h.isUnmounted || B();
            });
            return;
          }
        }
        let we = j, ft;
        b.NODE_ENV !== "production" && Ai(j || h.vnode), Wn(h, !1), j ? (j.el = ye.el, J(h, j, W)) : j = ye, te && So(te), (ft = j.props && j.props.onVnodeBeforeUpdate) && jt(ft, me, j, ye), Wn(h, !0), b.NODE_ENV !== "production" && Ao(h, "render");
        const dt = Ou(h);
        b.NODE_ENV !== "production" && wo(h, "render");
        const Bt = h.subTree;
        h.subTree = dt, b.NODE_ENV !== "production" && Ao(h, "patch"), g(
          Bt,
          dt,
          // parent may have changed if it's in a teleport
          c(Bt.el),
          // anchor may have changed if it's in a fragment
          K(Bt),
          h,
          C,
          k
        ), b.NODE_ENV !== "production" && wo(h, "patch"), j.el = dt.el, we === null && _E(h, dt.el), se && nt(se, C), (ft = j.props && j.props.onVnodeUpdated) && nt(
          () => jt(ft, me, j, ye),
          C
        ), b.NODE_ENV !== "production" && Ud(h), b.NODE_ENV !== "production" && wi();
      } else {
        let j;
        const { el: te, props: se } = m, { bm: me, m: ye, parent: we, root: ft, type: dt } = h, Bt = Mo(m);
        Wn(h, !1), me && So(me), !Bt && (j = se && se.onVnodeBeforeMount) && jt(j, we, m), Wn(h, !0);
        {
          ft.ce && // @ts-expect-error _def is private
          ft.ce._def.shadowRoot !== !1 && ft.ce._injectChildStyle(dt), b.NODE_ENV !== "production" && Ao(h, "render");
          const Ht = h.subTree = Ou(h);
          b.NODE_ENV !== "production" && wo(h, "render"), b.NODE_ENV !== "production" && Ao(h, "patch"), g(
            null,
            Ht,
            A,
            I,
            h,
            C,
            k
          ), b.NODE_ENV !== "production" && wo(h, "patch"), m.el = Ht.el;
        }
        if (ye && nt(ye, C), !Bt && (j = se && se.onVnodeMounted)) {
          const Ht = m;
          nt(
            () => jt(j, we, Ht),
            C
          );
        }
        (m.shapeFlag & 256 || we && Mo(we.vnode) && we.vnode.shapeFlag & 256) && h.a && nt(h.a, C), h.isMounted = !0, b.NODE_ENV !== "production" && lg(h), m = A = I = null;
      }
    };
    h.scope.on();
    const U = h.effect = new hd(B);
    h.scope.off();
    const P = h.update = U.run.bind(U), ne = h.job = U.runIfDirty.bind(U);
    ne.i = h, ne.id = h.uid, U.scheduler = () => ds(ne), Wn(h, !0), b.NODE_ENV !== "production" && (U.onTrack = h.rtc ? (j) => So(h.rtc, j) : void 0, U.onTrigger = h.rtg ? (j) => So(h.rtg, j) : void 0), P();
  }, J = (h, m, A) => {
    m.component = h;
    const I = h.vnode.props;
    h.vnode = m, h.next = null, Wg(h, m.props, I, A), tE(h, m.children, A), Vt(), au(h), Pt();
  }, _e = (h, m, A, I, C, k, W, B, U = !1) => {
    const P = h && h.children, ne = h ? h.shapeFlag : 0, j = m.children, { patchFlag: te, shapeFlag: se } = m;
    if (te > 0) {
      if (te & 128) {
        Me(
          P,
          j,
          A,
          I,
          C,
          k,
          W,
          B,
          U
        );
        return;
      } else if (te & 256) {
        Le(
          P,
          j,
          A,
          I,
          C,
          k,
          W,
          B,
          U
        );
        return;
      }
    }
    se & 8 ? (ne & 16 && w(P, C, k), j !== P && u(A, j)) : ne & 16 ? se & 16 ? Me(
      P,
      j,
      A,
      I,
      C,
      k,
      W,
      B,
      U
    ) : w(P, C, k, !0) : (ne & 8 && u(A, ""), se & 16 && x(
      j,
      A,
      I,
      C,
      k,
      W,
      B,
      U
    ));
  }, Le = (h, m, A, I, C, k, W, B, U) => {
    h = h || Po, m = m || Po;
    const P = h.length, ne = m.length, j = Math.min(P, ne);
    let te;
    for (te = 0; te < j; te++) {
      const se = m[te] = U ? Cn(m[te]) : Dt(m[te]);
      g(
        h[te],
        se,
        A,
        null,
        C,
        k,
        W,
        B,
        U
      );
    }
    P > ne ? w(
      h,
      C,
      k,
      !0,
      !1,
      j
    ) : x(
      m,
      A,
      I,
      C,
      k,
      W,
      B,
      U,
      j
    );
  }, Me = (h, m, A, I, C, k, W, B, U) => {
    let P = 0;
    const ne = m.length;
    let j = h.length - 1, te = ne - 1;
    for (; P <= j && P <= te; ) {
      const se = h[P], me = m[P] = U ? Cn(m[P]) : Dt(m[P]);
      if (Jn(se, me))
        g(
          se,
          me,
          A,
          null,
          C,
          k,
          W,
          B,
          U
        );
      else
        break;
      P++;
    }
    for (; P <= j && P <= te; ) {
      const se = h[j], me = m[te] = U ? Cn(m[te]) : Dt(m[te]);
      if (Jn(se, me))
        g(
          se,
          me,
          A,
          null,
          C,
          k,
          W,
          B,
          U
        );
      else
        break;
      j--, te--;
    }
    if (P > j) {
      if (P <= te) {
        const se = te + 1, me = se < ne ? m[se].el : I;
        for (; P <= te; )
          g(
            null,
            m[P] = U ? Cn(m[P]) : Dt(m[P]),
            A,
            me,
            C,
            k,
            W,
            B,
            U
          ), P++;
      }
    } else if (P > te)
      for (; P <= j; )
        ke(h[P], C, k, !0), P++;
    else {
      const se = P, me = P, ye = /* @__PURE__ */ new Map();
      for (P = me; P <= te; P++) {
        const et = m[P] = U ? Cn(m[P]) : Dt(m[P]);
        et.key != null && (b.NODE_ENV !== "production" && ye.has(et.key) && M(
          "Duplicate keys found during update:",
          JSON.stringify(et.key),
          "Make sure keys are unique."
        ), ye.set(et.key, P));
      }
      let we, ft = 0;
      const dt = te - me + 1;
      let Bt = !1, Ht = 0;
      const ar = new Array(dt);
      for (P = 0; P < dt; P++) ar[P] = 0;
      for (P = se; P <= j; P++) {
        const et = h[P];
        if (ft >= dt) {
          ke(et, C, k, !0);
          continue;
        }
        let Ut;
        if (et.key != null)
          Ut = ye.get(et.key);
        else
          for (we = me; we <= te; we++)
            if (ar[we - me] === 0 && Jn(et, m[we])) {
              Ut = we;
              break;
            }
        Ut === void 0 ? ke(et, C, k, !0) : (ar[Ut - me] = P + 1, Ut >= Ht ? Ht = Ut : Bt = !0, g(
          et,
          m[Ut],
          A,
          null,
          C,
          k,
          W,
          B,
          U
        ), ft++);
      }
      const eu = Bt ? sE(ar) : Po;
      for (we = eu.length - 1, P = dt - 1; P >= 0; P--) {
        const et = me + P, Ut = m[et], tu = et + 1 < ne ? m[et + 1].el : I;
        ar[P] === 0 ? g(
          null,
          Ut,
          A,
          tu,
          C,
          k,
          W,
          B,
          U
        ) : Bt && (we < 0 || P !== eu[we] ? Ne(Ut, A, tu, 2) : we--);
      }
    }
  }, Ne = (h, m, A, I, C = null) => {
    const { el: k, type: W, transition: B, children: U, shapeFlag: P } = h;
    if (P & 6) {
      Ne(h.component.subTree, m, A, I);
      return;
    }
    if (P & 128) {
      h.suspense.move(m, A, I);
      return;
    }
    if (P & 64) {
      W.move(h, m, A, fe);
      return;
    }
    if (W === Ie) {
      o(k, m, A);
      for (let j = 0; j < U.length; j++)
        Ne(U[j], m, A, I);
      o(h.anchor, m, A);
      return;
    }
    if (W === wr) {
      S(h, m, A);
      return;
    }
    if (I !== 2 && P & 1 && B)
      if (I === 0)
        B.beforeEnter(k), o(k, m, A), nt(() => B.enter(k), C);
      else {
        const { leave: j, delayLeave: te, afterLeave: se } = B, me = () => {
          h.ctx.isUnmounted ? r(k) : o(k, m, A);
        }, ye = () => {
          j(k, () => {
            me(), se && se();
          });
        };
        te ? te(k, me, ye) : ye();
      }
    else
      o(k, m, A);
  }, ke = (h, m, A, I = !1, C = !1) => {
    const {
      type: k,
      props: W,
      ref: B,
      children: U,
      dynamicChildren: P,
      shapeFlag: ne,
      patchFlag: j,
      dirs: te,
      cacheIndex: se
    } = h;
    if (j === -2 && (C = !1), B != null && (Vt(), Or(B, null, A, h, !0), Pt()), se != null && (m.renderCache[se] = void 0), ne & 256) {
      m.ctx.deactivate(h);
      return;
    }
    const me = ne & 1 && te, ye = !Mo(h);
    let we;
    if (ye && (we = W && W.onVnodeBeforeUnmount) && jt(we, m, h), ne & 6)
      ct(h.component, A, I);
    else {
      if (ne & 128) {
        h.suspense.unmount(A, I);
        return;
      }
      me && Kn(h, null, m, "beforeUnmount"), ne & 64 ? h.type.remove(
        h,
        m,
        A,
        fe,
        I
      ) : P && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !P.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== Ie || j > 0 && j & 64) ? w(
        P,
        m,
        A,
        !1,
        !0
      ) : (k === Ie && j & 384 || !C && ne & 16) && w(U, m, A), I && Ge(h);
    }
    (ye && (we = W && W.onVnodeUnmounted) || me) && nt(() => {
      we && jt(we, m, h), me && Kn(h, null, m, "unmounted");
    }, A);
  }, Ge = (h) => {
    const { type: m, el: A, anchor: I, transition: C } = h;
    if (m === Ie) {
      b.NODE_ENV !== "production" && h.patchFlag > 0 && h.patchFlag & 2048 && C && !C.persisted ? h.children.forEach((W) => {
        W.type === Be ? r(W.el) : Ge(W);
      }) : qe(A, I);
      return;
    }
    if (m === wr) {
      T(h);
      return;
    }
    const k = () => {
      r(A), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (h.shapeFlag & 1 && C && !C.persisted) {
      const { leave: W, delayLeave: B } = C, U = () => W(A, k);
      B ? B(h.el, k, U) : U();
    } else
      k();
  }, qe = (h, m) => {
    let A;
    for (; h !== m; )
      A = d(h), r(h), h = A;
    r(m);
  }, ct = (h, m, A) => {
    b.NODE_ENV !== "production" && h.type.__hmrId && og(h);
    const {
      bum: I,
      scope: C,
      job: k,
      subTree: W,
      um: B,
      m: U,
      a: P,
      parent: ne,
      slots: { __: j }
    } = h;
    bu(U), bu(P), I && So(I), ne && ee(j) && j.forEach((te) => {
      ne.renderCache[te] = void 0;
    }), C.stop(), k && (k.flags |= 8, ke(W, h, m, A)), B && nt(B, m), nt(() => {
      h.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve()), b.NODE_ENV !== "production" && cg(h);
  }, w = (h, m, A, I = !1, C = !1, k = 0) => {
    for (let W = k; W < h.length; W++)
      ke(h[W], m, A, I, C);
  }, K = (h) => {
    if (h.shapeFlag & 6)
      return K(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const m = d(h.anchor || h.el), A = m && m[Gd];
    return A ? d(A) : m;
  };
  let z = !1;
  const Z = (h, m, A) => {
    h == null ? m._vnode && ke(m._vnode, null, null, !0) : g(
      m._vnode || null,
      h,
      m,
      null,
      null,
      null,
      A
    ), m._vnode = h, z || (z = !0, au(), Md(), z = !1);
  }, fe = {
    p: g,
    um: ke,
    m: Ne,
    r: Ge,
    mt: pe,
    mc: x,
    pc: _e,
    pbc: Q,
    n: K,
    o: e
  };
  return {
    render: Z,
    hydrate: void 0,
    createApp: Ug(Z)
  };
}
function Ls({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Wn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function iE(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ar(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (ee(o) && ee(r))
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let a = r[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[i] = Cn(r[i]), a.el = s.el), !n && a.patchFlag !== -2 && Ar(s, a)), a.type === Zr && (a.el = s.el), a.type === Be && !a.el && (a.el = s.el), b.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function sE(e) {
  const t = e.slice(), n = [0];
  let o, r, i, s, a;
  const l = e.length;
  for (o = 0; o < l; o++) {
    const f = e[o];
    if (f !== 0) {
      if (r = n[n.length - 1], e[r] < f) {
        t[o] = r, n.push(o);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        a = i + s >> 1, e[n[a]] < f ? i = a + 1 : s = a;
      f < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; )
    n[i] = s, s = t[s];
  return n;
}
function vp(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : vp(t);
}
function bu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const aE = Symbol.for("v-scx"), lE = () => {
  {
    const e = pn(aE);
    return e || b.NODE_ENV !== "production" && M(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function _l(e, t) {
  return ml(e, null, t);
}
function kn(e, t, n) {
  return b.NODE_ENV !== "production" && !ie(t) && M(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ml(e, t, n);
}
function ml(e, t, n = Ae) {
  const { immediate: o, deep: r, flush: i, once: s } = n;
  b.NODE_ENV !== "production" && !t && (o !== void 0 && M(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && M(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && M(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = Pe({}, n);
  b.NODE_ENV !== "production" && (a.onWarn = M);
  const l = t && o || !t && i !== "post";
  let f;
  if (Mr) {
    if (i === "sync") {
      const p = lE();
      f = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = Ke, p.resume = Ke, p.pause = Ke, p;
    }
  }
  const u = We;
  a.call = (p, _, g) => Lt(p, u, _, g);
  let c = !1;
  i === "post" ? a.scheduler = (p) => {
    nt(p, u && u.suspense);
  } : i !== "sync" && (c = !0, a.scheduler = (p, _) => {
    _ ? p() : ds(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), c && (p.flags |= 2, u && (p.id = u.uid, p.i = u));
  };
  const d = Gm(e, t, a);
  return Mr && (f ? f.push(d) : l && d()), d;
}
function uE(e, t, n) {
  const o = this.proxy, r = xe(e) ? e.includes(".") ? yp(o, e) : () => o[e] : e.bind(o, o);
  let i;
  ie(t) ? i = t : (i = t.handler, n = t);
  const s = ei(this), a = ml(r, i.bind(o), n);
  return s(), a;
}
function yp(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
const cE = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${st(t)}Modifiers`] || e[`${Rn(t)}Modifiers`];
function fE(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Ae;
  if (b.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [c]
    } = e;
    if (u)
      if (!(t in u))
        (!c || !(Yn(st(t)) in c)) && M(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Yn(st(t))}" prop.`
        );
      else {
        const d = u[t];
        ie(d) && (d(...n) || M(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), s = i && cE(o, t.slice(7));
  if (s && (s.trim && (r = n.map((u) => xe(u) ? u.trim() : u)), s.number && (r = n.map(ud))), b.NODE_ENV !== "production" && pg(e, t, r), b.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && o[Yn(u)] && M(
      `Event "${u}" is emitted in component ${ms(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Rn(
        t
      )}" instead of "${t}".`
    );
  }
  let a, l = o[a = Yn(t)] || // also try camelCase event handler (#2249)
  o[a = Yn(st(t))];
  !l && i && (l = o[a = Yn(Rn(t))]), l && Lt(
    l,
    e,
    6,
    r
  );
  const f = o[a + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Lt(
      f,
      e,
      6,
      r
    );
  }
}
function bp(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let s = {}, a = !1;
  if (!ie(e)) {
    const l = (f) => {
      const u = bp(f, t, !0);
      u && (a = !0, Pe(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !i && !a ? (ve(e) && o.set(e, null), null) : (ee(i) ? i.forEach((l) => s[l] = null) : Pe(s, i), ve(e) && o.set(e, s), s);
}
function hs(e, t) {
  return !e || !zr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, Rn(t)) || ge(e, t));
}
let Aa = !1;
function Yi() {
  Aa = !0;
}
function Ou(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    propsOptions: [i],
    slots: s,
    attrs: a,
    emit: l,
    render: f,
    renderCache: u,
    props: c,
    data: d,
    setupState: p,
    ctx: _,
    inheritAttrs: g
  } = e, y = Wi(e);
  let E, O;
  b.NODE_ENV !== "production" && (Aa = !1);
  try {
    if (n.shapeFlag & 4) {
      const T = r || o, N = b.NODE_ENV !== "production" && p.__isScriptSetup ? new Proxy(T, {
        get(L, $, x) {
          return M(
            `Property '${String(
              $
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(L, $, x);
        }
      }) : T;
      E = Dt(
        f.call(
          N,
          T,
          u,
          b.NODE_ENV !== "production" ? Yt(c) : c,
          p,
          d,
          _
        )
      ), O = a;
    } else {
      const T = t;
      b.NODE_ENV !== "production" && a === c && Yi(), E = Dt(
        T.length > 1 ? T(
          b.NODE_ENV !== "production" ? Yt(c) : c,
          b.NODE_ENV !== "production" ? {
            get attrs() {
              return Yi(), Yt(a);
            },
            slots: s,
            emit: l
          } : { attrs: a, slots: s, emit: l }
        ) : T(
          b.NODE_ENV !== "production" ? Yt(c) : c,
          null
        )
      ), O = t.props ? a : dE(a);
    }
  } catch (T) {
    Tr.length = 0, Xr(T, e, 1), E = Se(Be);
  }
  let v = E, S;
  if (b.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && ([v, S] = Op(E)), O && g !== !1) {
    const T = Object.keys(O), { shapeFlag: N } = v;
    if (T.length) {
      if (N & 7)
        i && T.some(Fi) && (O = pE(
          O,
          i
        )), v = en(v, O, !1, !0);
      else if (b.NODE_ENV !== "production" && !Aa && v.type !== Be) {
        const L = Object.keys(a), $ = [], x = [];
        for (let G = 0, Q = L.length; G < Q; G++) {
          const D = L[G];
          zr(D) ? Fi(D) || $.push(D[2].toLowerCase() + D.slice(3)) : x.push(D);
        }
        x.length && M(
          `Extraneous non-props attributes (${x.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), $.length && M(
          `Extraneous non-emits event listeners (${$.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (b.NODE_ENV !== "production" && !Au(v) && M(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), v = en(v, null, !1, !0), v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs), n.transition && (b.NODE_ENV !== "production" && !Au(v) && M(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Pr(v, n.transition)), b.NODE_ENV !== "production" && S ? S(v) : E = v, Wi(y), E;
}
const Op = (e) => {
  const t = e.children, n = e.dynamicChildren, o = gl(t, !1);
  if (o) {
    if (b.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Op(o);
  } else return [e, void 0];
  const r = t.indexOf(o), i = n ? n.indexOf(o) : -1, s = (a) => {
    t[r] = a, n && (i > -1 ? n[i] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [Dt(o), s];
};
function gl(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (po(r)) {
      if (r.type !== Be || r.children === "v-if") {
        if (n)
          return;
        if (n = r, b.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return gl(n.children);
      }
    } else
      return;
  }
  return n;
}
const dE = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || zr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, pE = (e, t) => {
  const n = {};
  for (const o in e)
    (!Fi(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Au = (e) => e.shapeFlag & 7 || e.type === Be;
function hE(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: s, children: a, patchFlag: l } = t, f = i.emitsOptions;
  if (b.NODE_ENV !== "production" && (r || a) && xt || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return o ? wu(o, s, f) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        const d = u[c];
        if (s[d] !== o[d] && !hs(f, d))
          return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable) ? !0 : o === s ? !1 : o ? s ? wu(o, s, f) : !0 : !!s;
  return !1;
}
function wu(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !hs(n, i))
      return !0;
  }
  return !1;
}
function _E({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ap = (e) => e.__isSuspense;
function mE(e, t) {
  t && t.pendingBranch ? ee(e) ? t.effects.push(...e) : t.effects.push(e) : Ld(e);
}
const Ie = Symbol.for("v-fgt"), Zr = Symbol.for("v-txt"), Be = Symbol.for("v-cmt"), wr = Symbol.for("v-stc"), Tr = [];
let mt = null;
function oe(e = !1) {
  Tr.push(mt = e ? null : []);
}
function gE() {
  Tr.pop(), mt = Tr[Tr.length - 1] || null;
}
let Lr = 1;
function Tu(e, t = !1) {
  Lr += e, e < 0 && mt && t && (mt.hasOnce = !0);
}
function wp(e) {
  return e.dynamicChildren = Lr > 0 ? mt || Po : null, gE(), Lr > 0 && mt && mt.push(e), e;
}
function ue(e, t, n, o, r, i) {
  return wp(
    H(
      e,
      t,
      n,
      o,
      r,
      i,
      !0
    )
  );
}
function Zt(e, t, n, o, r) {
  return wp(
    Se(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function po(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jn(e, t) {
  if (b.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Ti.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const EE = (...e) => Np(
  ...e
), Tp = ({ key: e }) => e ?? null, Si = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? xe(e) || Ue(e) || ie(e) ? { i: He, r: e, k: t, f: !!n } : e : null);
function H(e, t = null, n = null, o = 0, r = null, i = e === Ie ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Tp(t),
    ref: t && Si(t),
    scopeId: Kd,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: He
  };
  return a ? (El(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= xe(n) ? 8 : 16), b.NODE_ENV !== "production" && l.key !== l.key && M("VNode created with invalid key (NaN). VNode type:", l.type), Lr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  mt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && mt.push(l), l;
}
const Se = b.NODE_ENV !== "production" ? EE : Np;
function Np(e, t = null, n = null, o = 0, r = null, i = !1) {
  if ((!e || e === xg) && (b.NODE_ENV !== "production" && !e && M(`Invalid vnode type when creating vnode: ${e}.`), e = Be), po(e)) {
    const a = en(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && El(a, n), Lr > 0 && !i && mt && (a.shapeFlag & 6 ? mt[mt.indexOf(e)] = a : mt.push(a)), a.patchFlag = -2, a;
  }
  if (xp(e) && (e = e.__vccOpts), t) {
    t = Ve(t);
    let { class: a, style: l } = t;
    a && !xe(a) && (t.class = $e(a)), ve(l) && (Rr(l) && !ee(l) && (l = Pe({}, l)), t.style = qr(l));
  }
  const s = xe(e) ? 1 : Ap(e) ? 128 : Yd(e) ? 64 : ve(e) ? 4 : ie(e) ? 2 : 0;
  return b.NODE_ENV !== "production" && s & 4 && Rr(e) && (e = ae(e), M(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), H(
    e,
    t,
    n,
    o,
    r,
    s,
    i,
    !0
  );
}
function Ve(e) {
  return e ? Rr(e) || pp(e) ? Pe({}, e) : e : null;
}
function en(e, t, n = !1, o = !1) {
  const { props: r, ref: i, patchFlag: s, children: a, transition: l } = e, f = t ? Bn(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Tp(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? ee(i) ? i.concat(Si(t)) : [i, Si(t)] : Si(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: b.NODE_ENV !== "production" && s === -1 && ee(a) ? a.map(Cp) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ie ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && en(e.ssContent),
    ssFallback: e.ssFallback && en(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && o && Pr(
    u,
    l.clone(u)
  ), u;
}
function Cp(e) {
  const t = en(e);
  return ee(e.children) && (t.children = e.children.map(Cp)), t;
}
function At(e = " ", t = 0) {
  return Se(Zr, null, e, t);
}
function vE(e, t) {
  const n = Se(wr, null, e);
  return n.staticCount = t, n;
}
function Ho(e = "", t = !1) {
  return t ? (oe(), Zt(Be, null, e)) : Se(Be, null, e);
}
function Dt(e) {
  return e == null || typeof e == "boolean" ? Se(Be) : ee(e) ? Se(
    Ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : po(e) ? Cn(e) : Se(Zr, null, String(e));
}
function Cn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : en(e);
}
function El(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (ee(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), El(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !pp(t) ? t._ctx = He : r === 3 && He && (He.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ie(t) ? (t = { default: t, _ctx: He }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [At(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Bn(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = $e([t.class, o.class]));
      else if (r === "style")
        t.style = qr([t.style, o.style]);
      else if (zr(r)) {
        const i = t[r], s = o[r];
        s && i !== s && !(ee(i) && i.includes(s)) && (t[r] = i ? [].concat(i, s) : s);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function jt(e, t, n, o = null) {
  Lt(e, t, 7, [
    n,
    o
  ]);
}
const yE = cp();
let bE = 0;
function OE(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || yE, i = {
    uid: bE++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new pd(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: _p(o, r),
    emitsOptions: bp(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ae,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: Ae,
    data: Ae,
    props: Ae,
    attrs: Ae,
    slots: Ae,
    refs: Ae,
    setupState: Ae,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return b.NODE_ENV !== "production" ? i.ctx = $g(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = fE.bind(null, i), e.ce && e.ce(i), i;
}
let We = null;
const Eo = () => We || He;
let qi, wa;
{
  const e = Yr(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (i) => {
      r.length > 1 ? r.forEach((s) => s(i)) : r[0](i);
    };
  };
  qi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => We = n
  ), wa = t(
    "__VUE_SSR_SETTERS__",
    (n) => Mr = n
  );
}
const ei = (e) => {
  const t = We;
  return qi(e), e.scope.on(), () => {
    e.scope.off(), qi(t);
  };
}, Nu = () => {
  We && We.scope.off(), qi(null);
}, AE = /* @__PURE__ */ gn("slot,component");
function Ta(e, { isNativeTag: t }) {
  (AE(e) || t(e)) && M(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Sp(e) {
  return e.vnode.shapeFlag & 4;
}
let Mr = !1;
function wE(e, t = !1, n = !1) {
  t && wa(t);
  const { props: o, children: r } = e.vnode, i = Sp(e);
  jg(e, o, i, t), eE(e, r, n || t);
  const s = i ? TE(e, t) : void 0;
  return t && wa(!1), s;
}
function TE(e, t) {
  var n;
  const o = e.type;
  if (b.NODE_ENV !== "production") {
    if (o.name && Ta(o.name, e.appContext.config), o.components) {
      const i = Object.keys(o.components);
      for (let s = 0; s < i.length; s++)
        Ta(i[s], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let s = 0; s < i.length; s++)
        Wd(i[s]);
    }
    o.compilerOptions && NE() && M(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ap), b.NODE_ENV !== "production" && kg(e);
  const { setup: r } = o;
  if (r) {
    Vt();
    const i = e.setupContext = r.length > 1 ? SE(e) : null, s = ei(e), a = er(
      r,
      e,
      0,
      [
        b.NODE_ENV !== "production" ? Yt(e.props) : e.props,
        i
      ]
    ), l = Za(a);
    if (Pt(), s(), (l || e.sp) && !Mo(e) && np(e), l) {
      if (a.then(Nu, Nu), t)
        return a.then((f) => {
          Cu(e, f, t);
        }).catch((f) => {
          Xr(f, e, 0);
        });
      if (e.asyncDep = a, b.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = o.name) != null ? n : "Anonymous";
        M(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Cu(e, a, t);
  } else
    Dp(e, t);
}
function Cu(e, t, n) {
  ie(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ve(t) ? (b.NODE_ENV !== "production" && po(t) && M(
    "setup() should not return VNodes directly - return a render function instead."
  ), b.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = kd(t), b.NODE_ENV !== "production" && Rg(e)) : b.NODE_ENV !== "production" && t !== void 0 && M(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Dp(e, n);
}
const NE = () => !0;
function Dp(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || Ke);
  {
    const r = ei(e);
    Vt();
    try {
      Pg(e);
    } finally {
      Pt(), r();
    }
  }
  b.NODE_ENV !== "production" && !o.render && e.render === Ke && !t && (o.template ? M(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : M("Component is missing template or render function: ", o));
}
const Su = b.NODE_ENV !== "production" ? {
  get(e, t) {
    return Yi(), je(e, "get", ""), e[t];
  },
  set() {
    return M("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return M("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return je(e, "get", ""), e[t];
  }
};
function CE(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return je(e, "get", "$slots"), t[n];
    }
  });
}
function SE(e) {
  const t = (n) => {
    if (b.NODE_ENV !== "production" && (e.exposed && M("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (ee(n) ? o = "array" : Ue(n) && (o = "ref")), o !== "object" && M(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (b.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Su));
      },
      get slots() {
        return o || (o = CE(e));
      },
      get emit() {
        return (r, ...i) => e.emit(r, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Su),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function _s(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(kd(sl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ao)
        return ao[n](e);
    },
    has(t, n) {
      return n in t || n in ao;
    }
  })) : e.proxy;
}
const DE = /(?:^|[-_])(\w)/g, xE = (e) => e.replace(DE, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function vl(e, t = !0) {
  return ie(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ms(e, t, n = !1) {
  let o = vl(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? xE(o) : n ? "App" : "Anonymous";
}
function xp(e) {
  return ie(e) && "__vccOpts" in e;
}
const Te = (e, t) => {
  const n = Wm(e, t, Mr);
  if (b.NODE_ENV !== "production") {
    const o = Eo();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function yl(e, t, n) {
  const o = arguments.length;
  return o === 2 ? ve(t) && !ee(t) ? po(t) ? Se(e, null, [t]) : Se(e, t) : Se(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && po(n) && (n = [n]), Se(e, t, n));
}
function IE() {
  if (b.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!ve(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if (Ue(c)) {
        Vt();
        const d = c.value;
        return Pt(), [
          "div",
          {},
          ["span", e, u(c)],
          "<",
          a(d),
          ">"
        ];
      } else {
        if (ro(c))
          return [
            "div",
            {},
            ["span", e, at(c) ? "ShallowReactive" : "Reactive"],
            "<",
            a(c),
            `>${Jt(c) ? " (readonly)" : ""}`
          ];
        if (Jt(c))
          return [
            "div",
            {},
            ["span", e, at(c) ? "ShallowReadonly" : "Readonly"],
            "<",
            a(c),
            ">"
          ];
      }
      return null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...i(c.$)
        ];
    }
  };
  function i(c) {
    const d = [];
    c.type.props && c.props && d.push(s("props", ae(c.props))), c.setupState !== Ae && d.push(s("setup", c.setupState)), c.data !== Ae && d.push(s("data", ae(c.data)));
    const p = l(c, "computed");
    p && d.push(s("computed", p));
    const _ = l(c, "inject");
    return _ && d.push(s("injected", _)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), d;
  }
  function s(c, d) {
    return d = Pe({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((p) => [
          "div",
          {},
          ["span", o, p + ": "],
          a(d[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, d = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", o, c] : ve(c) ? ["object", { object: d ? ae(c) : c }] : ["span", n, String(c)];
  }
  function l(c, d) {
    const p = c.type;
    if (ie(p))
      return;
    const _ = {};
    for (const g in c.ctx)
      f(p, g, d) && (_[g] = c.ctx[g]);
    return _;
  }
  function f(c, d, p) {
    const _ = c[p];
    if (ee(_) && _.includes(d) || ve(_) && d in _ || c.extends && f(c.extends, d, p) || c.mixins && c.mixins.some((g) => f(g, d, p)))
      return !0;
  }
  function u(c) {
    return at(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Du = "3.5.17", qt = b.NODE_ENV !== "production" ? M : Ke;
var Mt = {};
let Na;
const xu = typeof window < "u" && window.trustedTypes;
if (xu)
  try {
    Na = /* @__PURE__ */ xu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Mt.NODE_ENV !== "production" && qt(`Error creating trusted types policy: ${e}`);
  }
const Ip = Na ? (e) => Na.createHTML(e) : (e) => e, $E = "http://www.w3.org/2000/svg", kE = "http://www.w3.org/1998/Math/MathML", un = typeof document < "u" ? document : null, Iu = un && /* @__PURE__ */ un.createElement("template"), RE = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? un.createElementNS($E, e) : t === "mathml" ? un.createElementNS(kE, e) : n ? un.createElement(e, { is: n }) : un.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => un.createTextNode(e),
  createComment: (e) => un.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => un.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, i) {
    const s = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Iu.innerHTML = Ip(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Iu.content;
      if (o === "svg" || o === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, On = "transition", cr = "animation", Fr = Symbol("_vtc"), $p = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, VE = /* @__PURE__ */ Pe(
  {},
  Qd,
  $p
), PE = (e) => (e.displayName = "Transition", e.props = VE, e), LE = /* @__PURE__ */ PE(
  (e, { slots: t }) => yl(gg, ME(e), t)
), zn = (e, t = []) => {
  ee(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, $u = (e) => e ? ee(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ME(e) {
  const t = {};
  for (const D in e)
    D in $p || (t[D] = e[D]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: r,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: s = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = i,
    appearActiveClass: f = s,
    appearToClass: u = a,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, _ = FE(r), g = _ && _[0], y = _ && _[1], {
    onBeforeEnter: E,
    onEnter: O,
    onEnterCancelled: v,
    onLeave: S,
    onLeaveCancelled: T,
    onBeforeAppear: N = E,
    onAppear: L = O,
    onAppearCancelled: $ = v
  } = t, x = (D, q, ce, pe) => {
    D._enterCancelled = pe, Gn(D, q ? u : a), Gn(D, q ? f : s), ce && ce();
  }, G = (D, q) => {
    D._isLeaving = !1, Gn(D, c), Gn(D, p), Gn(D, d), q && q();
  }, Q = (D) => (q, ce) => {
    const pe = D ? L : O, Y = () => x(q, D, ce);
    zn(pe, [q, Y]), ku(() => {
      Gn(q, D ? l : i), sn(q, D ? u : a), $u(pe) || Ru(q, o, g, Y);
    });
  };
  return Pe(t, {
    onBeforeEnter(D) {
      zn(E, [D]), sn(D, i), sn(D, s);
    },
    onBeforeAppear(D) {
      zn(N, [D]), sn(D, l), sn(D, f);
    },
    onEnter: Q(!1),
    onAppear: Q(!0),
    onLeave(D, q) {
      D._isLeaving = !0;
      const ce = () => G(D, q);
      sn(D, c), D._enterCancelled ? (sn(D, d), Lu()) : (Lu(), sn(D, d)), ku(() => {
        D._isLeaving && (Gn(D, c), sn(D, p), $u(S) || Ru(D, o, y, ce));
      }), zn(S, [D, ce]);
    },
    onEnterCancelled(D) {
      x(D, !1, void 0, !0), zn(v, [D]);
    },
    onAppearCancelled(D) {
      x(D, !0, void 0, !0), zn($, [D]);
    },
    onLeaveCancelled(D) {
      G(D), zn(T, [D]);
    }
  });
}
function FE(e) {
  if (e == null)
    return null;
  if (ve(e))
    return [Ms(e.enter), Ms(e.leave)];
  {
    const t = Ms(e);
    return [t, t];
  }
}
function Ms(e) {
  const t = om(e);
  return Mt.NODE_ENV !== "production" && Jm(t, "<transition> explicit duration"), t;
}
function sn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Fr] || (e[Fr] = /* @__PURE__ */ new Set())).add(t);
}
function Gn(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Fr];
  n && (n.delete(t), n.size || (e[Fr] = void 0));
}
function ku(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let BE = 0;
function Ru(e, t, n, o) {
  const r = e._endId = ++BE, i = () => {
    r === e._endId && o();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: s, timeout: a, propCount: l } = HE(e, t);
  if (!s)
    return o();
  const f = s + "end";
  let u = 0;
  const c = () => {
    e.removeEventListener(f, d), i();
  }, d = (p) => {
    p.target === e && ++u >= l && c();
  };
  setTimeout(() => {
    u < l && c();
  }, a + 1), e.addEventListener(f, d);
}
function HE(e, t) {
  const n = window.getComputedStyle(e), o = (_) => (n[_] || "").split(", "), r = o(`${On}Delay`), i = o(`${On}Duration`), s = Vu(r, i), a = o(`${cr}Delay`), l = o(`${cr}Duration`), f = Vu(a, l);
  let u = null, c = 0, d = 0;
  t === On ? s > 0 && (u = On, c = s, d = i.length) : t === cr ? f > 0 && (u = cr, c = f, d = l.length) : (c = Math.max(s, f), u = c > 0 ? s > f ? On : cr : null, d = u ? u === On ? i.length : l.length : 0);
  const p = u === On && /\b(transform|all)(,|$)/.test(
    o(`${On}Property`).toString()
  );
  return {
    type: u,
    timeout: c,
    propCount: d,
    hasTransform: p
  };
}
function Vu(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Pu(n) + Pu(e[o])));
}
function Pu(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Lu() {
  return document.body.offsetHeight;
}
function UE(e, t, n) {
  const o = e[Fr];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Mu = Symbol("_vod"), jE = Symbol("_vsh"), KE = Symbol(Mt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), WE = /(^|;)\s*display\s*:/;
function zE(e, t, n) {
  const o = e.style, r = xe(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (xe(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          n[a] == null && Di(o, a, "");
        }
      else
        for (const s in t)
          n[s] == null && Di(o, s, "");
    for (const s in n)
      s === "display" && (i = !0), Di(o, s, n[s]);
  } else if (r) {
    if (t !== n) {
      const s = o[KE];
      s && (n += ";" + s), o.cssText = n, i = WE.test(n);
    }
  } else t && e.removeAttribute("style");
  Mu in e && (e[Mu] = i ? o.display : "", e[jE] && (o.display = "none"));
}
const GE = /[^\\];\s*$/, Fu = /\s*!important$/;
function Di(e, t, n) {
  if (ee(n))
    n.forEach((o) => Di(e, t, o));
  else if (n == null && (n = ""), Mt.NODE_ENV !== "production" && GE.test(n) && qt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = YE(e, t);
    Fu.test(n) ? e.setProperty(
      Rn(o),
      n.replace(Fu, ""),
      "important"
    ) : e[o] = n;
  }
}
const Bu = ["Webkit", "Moz", "ms"], Fs = {};
function YE(e, t) {
  const n = Fs[t];
  if (n)
    return n;
  let o = st(t);
  if (o !== "filter" && o in e)
    return Fs[t] = o;
  o = co(o);
  for (let r = 0; r < Bu.length; r++) {
    const i = Bu[r] + o;
    if (i in e)
      return Fs[t] = i;
  }
  return t;
}
const Hu = "http://www.w3.org/1999/xlink";
function Uu(e, t, n, o, r, i = _m(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Hu, t.slice(6, t.length)) : e.setAttributeNS(Hu, t, n) : n == null || i && !cd(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : kt(n) ? String(n) : n
  );
}
function ju(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ip(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = cd(n) : n == null && a === "string" ? (n = "", s = !0) : a === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    Mt.NODE_ENV !== "production" && !s && qt(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  s && e.removeAttribute(r || t);
}
function kp(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function qE(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Ku = Symbol("_vei");
function XE(e, t, n, o, r = null) {
  const i = e[Ku] || (e[Ku] = {}), s = i[t];
  if (o && s)
    s.value = Mt.NODE_ENV !== "production" ? zu(o, t) : o;
  else {
    const [a, l] = QE(t);
    if (o) {
      const f = i[t] = ev(
        Mt.NODE_ENV !== "production" ? zu(o, t) : o,
        r
      );
      kp(e, a, f, l);
    } else s && (qE(e, a, s, l), i[t] = void 0);
  }
}
const Wu = /(?:Once|Passive|Capture)$/;
function QE(e) {
  let t;
  if (Wu.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Wu); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Rn(e.slice(2)), t];
}
let Bs = 0;
const JE = /* @__PURE__ */ Promise.resolve(), ZE = () => Bs || (JE.then(() => Bs = 0), Bs = Date.now());
function ev(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Lt(
      tv(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = ZE(), n;
}
function zu(e, t) {
  return ie(e) || ee(e) ? e : (qt(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Ke);
}
function tv(e, t) {
  if (ee(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const Gu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, nv = (e, t, n, o, r, i) => {
  const s = r === "svg";
  t === "class" ? UE(e, o, s) : t === "style" ? zE(e, n, o) : zr(t) ? Fi(t) || XE(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ov(e, t, o, s)) ? (ju(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Uu(e, t, o, s, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !xe(o)) ? ju(e, st(t), o, i, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Uu(e, t, o, s));
};
function ov(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Gu(t) && ie(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Gu(t) && xe(n) ? !1 : t in e;
}
const Yu = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ee(t) ? (n) => So(t, n) : t;
}, Hs = Symbol("_assign"), rv = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const r = rs(t);
    kp(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => n ? ud(Xi(s)) : Xi(s)
      );
      e[Hs](
        e.multiple ? r ? new Set(i) : i : i[0]
      ), e._assigning = !0, fs(() => {
        e._assigning = !1;
      });
    }), e[Hs] = Yu(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    qu(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Hs] = Yu(n);
  },
  updated(e, { value: t }) {
    e._assigning || qu(e, t);
  }
};
function qu(e, t) {
  const n = e.multiple, o = ee(t);
  if (n && !o && !rs(t)) {
    Mt.NODE_ENV !== "production" && qt(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, i = e.options.length; r < i; r++) {
    const s = e.options[r], a = Xi(s);
    if (n)
      if (o) {
        const l = typeof a;
        l === "string" || l === "number" ? s.selected = t.some((f) => String(f) === String(a)) : s.selected = gm(t, a) > -1;
      } else
        s.selected = t.has(a);
    else if (ss(Xi(s), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Xi(e) {
  return "_value" in e ? e._value : e.value;
}
const iv = ["ctrl", "shift", "alt", "meta"], sv = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => iv.some((n) => e[`${n}Key`] && !t.includes(n))
}, Rp = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...i) => {
    for (let s = 0; s < t.length; s++) {
      const a = sv[t[s]];
      if (a && a(r, t)) return;
    }
    return e(r, ...i);
  });
}, av = /* @__PURE__ */ Pe({ patchProp: nv }, RE);
let Xu;
function lv() {
  return Xu || (Xu = oE(av));
}
const gs = (...e) => {
  const t = lv().createApp(...e);
  Mt.NODE_ENV !== "production" && (cv(t), fv(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = dv(o);
    if (!r) return;
    const i = t._component;
    !ie(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const s = n(r, !1, uv(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), s;
  }, t;
};
function uv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cv(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => fm(t) || dm(t) || pm(t),
    writable: !1
  });
}
function fv(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        qt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return qt(o), n;
      },
      set() {
        qt(o);
      }
    });
  }
}
function dv(e) {
  if (xe(e)) {
    const t = document.querySelector(e);
    return Mt.NODE_ENV !== "production" && !t && qt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Mt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && qt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var pv = {};
function hv() {
  IE();
}
pv.NODE_ENV !== "production" && hv();
var _v = Object.create, Vp = Object.defineProperty, mv = Object.getOwnPropertyDescriptor, bl = Object.getOwnPropertyNames, gv = Object.getPrototypeOf, Ev = Object.prototype.hasOwnProperty, vv = (e, t) => function() {
  return e && (t = (0, e[bl(e)[0]])(e = 0)), t;
}, yv = (e, t) => function() {
  return t || (0, e[bl(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, bv = (e, t, n, o) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of bl(t))
      !Ev.call(e, r) && r !== n && Vp(e, r, { get: () => t[r], enumerable: !(o = mv(t, r)) || o.enumerable });
  return e;
}, Ov = (e, t, n) => (n = e != null ? _v(gv(e)) : {}, bv(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Vp(n, "default", { value: e, enumerable: !0 }),
  e
)), ti = vv({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Av = yv({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    ti(), t.exports = o;
    function n(i) {
      return i instanceof Buffer ? Buffer.from(i) : new i.constructor(i.buffer.slice(), i.byteOffset, i.length);
    }
    function o(i) {
      if (i = i || {}, i.circles) return r(i);
      const s = /* @__PURE__ */ new Map();
      if (s.set(Date, (c) => new Date(c)), s.set(Map, (c, d) => new Map(l(Array.from(c), d))), s.set(Set, (c, d) => new Set(l(Array.from(c), d))), i.constructorHandlers)
        for (const c of i.constructorHandlers)
          s.set(c[0], c[1]);
      let a = null;
      return i.proto ? u : f;
      function l(c, d) {
        const p = Object.keys(c), _ = new Array(p.length);
        for (let g = 0; g < p.length; g++) {
          const y = p[g], E = c[y];
          typeof E != "object" || E === null ? _[y] = E : E.constructor !== Object && (a = s.get(E.constructor)) ? _[y] = a(E, d) : ArrayBuffer.isView(E) ? _[y] = n(E) : _[y] = d(E);
        }
        return _;
      }
      function f(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return l(c, f);
        if (c.constructor !== Object && (a = s.get(c.constructor)))
          return a(c, f);
        const d = {};
        for (const p in c) {
          if (Object.hasOwnProperty.call(c, p) === !1) continue;
          const _ = c[p];
          typeof _ != "object" || _ === null ? d[p] = _ : _.constructor !== Object && (a = s.get(_.constructor)) ? d[p] = a(_, f) : ArrayBuffer.isView(_) ? d[p] = n(_) : d[p] = f(_);
        }
        return d;
      }
      function u(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return l(c, u);
        if (c.constructor !== Object && (a = s.get(c.constructor)))
          return a(c, u);
        const d = {};
        for (const p in c) {
          const _ = c[p];
          typeof _ != "object" || _ === null ? d[p] = _ : _.constructor !== Object && (a = s.get(_.constructor)) ? d[p] = a(_, u) : ArrayBuffer.isView(_) ? d[p] = n(_) : d[p] = u(_);
        }
        return d;
      }
    }
    function r(i) {
      const s = [], a = [], l = /* @__PURE__ */ new Map();
      if (l.set(Date, (p) => new Date(p)), l.set(Map, (p, _) => new Map(u(Array.from(p), _))), l.set(Set, (p, _) => new Set(u(Array.from(p), _))), i.constructorHandlers)
        for (const p of i.constructorHandlers)
          l.set(p[0], p[1]);
      let f = null;
      return i.proto ? d : c;
      function u(p, _) {
        const g = Object.keys(p), y = new Array(g.length);
        for (let E = 0; E < g.length; E++) {
          const O = g[E], v = p[O];
          if (typeof v != "object" || v === null)
            y[O] = v;
          else if (v.constructor !== Object && (f = l.get(v.constructor)))
            y[O] = f(v, _);
          else if (ArrayBuffer.isView(v))
            y[O] = n(v);
          else {
            const S = s.indexOf(v);
            S !== -1 ? y[O] = a[S] : y[O] = _(v);
          }
        }
        return y;
      }
      function c(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return u(p, c);
        if (p.constructor !== Object && (f = l.get(p.constructor)))
          return f(p, c);
        const _ = {};
        s.push(p), a.push(_);
        for (const g in p) {
          if (Object.hasOwnProperty.call(p, g) === !1) continue;
          const y = p[g];
          if (typeof y != "object" || y === null)
            _[g] = y;
          else if (y.constructor !== Object && (f = l.get(y.constructor)))
            _[g] = f(y, c);
          else if (ArrayBuffer.isView(y))
            _[g] = n(y);
          else {
            const E = s.indexOf(y);
            E !== -1 ? _[g] = a[E] : _[g] = c(y);
          }
        }
        return s.pop(), a.pop(), _;
      }
      function d(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return u(p, d);
        if (p.constructor !== Object && (f = l.get(p.constructor)))
          return f(p, d);
        const _ = {};
        s.push(p), a.push(_);
        for (const g in p) {
          const y = p[g];
          if (typeof y != "object" || y === null)
            _[g] = y;
          else if (y.constructor !== Object && (f = l.get(y.constructor)))
            _[g] = f(y, d);
          else if (ArrayBuffer.isView(y))
            _[g] = n(y);
          else {
            const E = s.indexOf(y);
            E !== -1 ? _[g] = a[E] : _[g] = d(y);
          }
        }
        return s.pop(), a.pop(), _;
      }
    }
  }
});
ti();
ti();
ti();
var Pp = typeof navigator < "u", X = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof X.chrome < "u" && X.chrome.devtools;
Pp && (X.self, X.top);
var Qu;
typeof navigator < "u" && ((Qu = navigator.userAgent) == null || Qu.toLowerCase().includes("electron"));
ti();
var wv = Ov(Av()), Tv = /(?:^|[-_/])(\w)/g;
function Nv(e, t) {
  return t ? t.toUpperCase() : "";
}
function Cv(e) {
  return e && `${e}`.replace(Tv, Nv);
}
function Sv(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const o = n.lastIndexOf("/"), r = n.substring(o + 1);
  {
    const i = r.lastIndexOf(t);
    return r.substring(0, i);
  }
}
var Ju = (0, wv.default)({ circles: !0 });
const Dv = {
  trailing: !0
};
function Uo(e, t = 25, n = {}) {
  if (n = { ...Dv, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let o, r, i = [], s, a;
  const l = (f, u) => (s = xv(e, f, u), s.finally(() => {
    if (s = null, n.trailing && a && !r) {
      const c = l(f, a);
      return a = null, c;
    }
  }), s);
  return function(...f) {
    return s ? (n.trailing && (a = f), s) : new Promise((u) => {
      const c = !r && n.leading;
      clearTimeout(r), r = setTimeout(() => {
        r = null;
        const d = n.leading ? o : l(this, f);
        for (const p of i)
          p(d);
        i = [];
      }, t), c ? (o = l(this, f), u(o)) : i.push(u);
    });
  };
}
async function xv(e, t, n) {
  return await e.apply(t, n);
}
function Ca(e, t = {}, n) {
  for (const o in e) {
    const r = e[o], i = n ? `${n}:${o}` : o;
    typeof r == "object" && r !== null ? Ca(r, t, i) : typeof r == "function" && (t[i] = r);
  }
  return t;
}
const Iv = { run: (e) => e() }, $v = () => Iv, Lp = typeof console.createTask < "u" ? console.createTask : $v;
function kv(e, t) {
  const n = t.shift(), o = Lp(n);
  return e.reduce(
    (r, i) => r.then(() => o.run(() => i(...t))),
    Promise.resolve()
  );
}
function Rv(e, t) {
  const n = t.shift(), o = Lp(n);
  return Promise.all(e.map((r) => o.run(() => r(...t))));
}
function Us(e, t) {
  for (const n of [...e])
    n(t);
}
class Vv {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(t, n, o = {}) {
    if (!t || typeof n != "function")
      return () => {
      };
    const r = t;
    let i;
    for (; this._deprecatedHooks[t]; )
      i = this._deprecatedHooks[t], t = i.to;
    if (i && !o.allowDeprecated) {
      let s = i.message;
      s || (s = `${r} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(s) || (console.warn(s), this._deprecatedMessages.add(s));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0
        });
      } catch {
      }
    return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
      n && (this.removeHook(t, n), n = void 0);
    };
  }
  hookOnce(t, n) {
    let o, r = (...i) => (typeof o == "function" && o(), o = void 0, r = void 0, n(...i));
    return o = this.hook(t, r), o;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const o = this._hooks[t].indexOf(n);
      o !== -1 && this._hooks[t].splice(o, 1), this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const o = this._hooks[t] || [];
    delete this._hooks[t];
    for (const r of o)
      this.hook(t, r);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t)
      this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = Ca(t), o = Object.keys(n).map(
      (r) => this.hook(r, n[r])
    );
    return () => {
      for (const r of o.splice(0, o.length))
        r();
    };
  }
  removeHooks(t) {
    const n = Ca(t);
    for (const o in n)
      this.removeHook(o, n[o]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(kv, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(Rv, t, ...n);
  }
  callHookWith(t, n, ...o) {
    const r = this._before || this._after ? { name: n, args: o, context: {} } : void 0;
    this._before && Us(this._before, r);
    const i = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      o
    );
    return i instanceof Promise ? i.finally(() => {
      this._after && r && Us(this._after, r);
    }) : (this._after && r && Us(this._after, r), i);
  }
  beforeEach(t) {
    return this._before = this._before || [], this._before.push(t), () => {
      if (this._before !== void 0) {
        const n = this._before.indexOf(t);
        n !== -1 && this._before.splice(n, 1);
      }
    };
  }
  afterEach(t) {
    return this._after = this._after || [], this._after.push(t), () => {
      if (this._after !== void 0) {
        const n = this._after.indexOf(t);
        n !== -1 && this._after.splice(n, 1);
      }
    };
  }
}
function Mp() {
  return new Vv();
}
var Pv = Object.create, Fp = Object.defineProperty, Lv = Object.getOwnPropertyDescriptor, Ol = Object.getOwnPropertyNames, Mv = Object.getPrototypeOf, Fv = Object.prototype.hasOwnProperty, Bv = (e, t) => function() {
  return e && (t = (0, e[Ol(e)[0]])(e = 0)), t;
}, Bp = (e, t) => function() {
  return t || (0, e[Ol(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Hv = (e, t, n, o) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of Ol(t))
      !Fv.call(e, r) && r !== n && Fp(e, r, { get: () => t[r], enumerable: !(o = Lv(t, r)) || o.enumerable });
  return e;
}, Uv = (e, t, n) => (n = e != null ? Pv(Mv(e)) : {}, Hv(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Fp(n, "default", { value: e, enumerable: !0 }),
  e
)), R = Bv({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), jv = Bp({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
    R(), function(n) {
      var o = {
        // latin
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "Ae",
        Å: "A",
        Æ: "AE",
        Ç: "C",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        Ð: "D",
        Ñ: "N",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "Oe",
        Ő: "O",
        Ø: "O",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "Ue",
        Ű: "U",
        Ý: "Y",
        Þ: "TH",
        ß: "ss",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "ae",
        å: "a",
        æ: "ae",
        ç: "c",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        ð: "d",
        ñ: "n",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "oe",
        ő: "o",
        ø: "o",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "ue",
        ű: "u",
        ý: "y",
        þ: "th",
        ÿ: "y",
        "ẞ": "SS",
        // language specific
        // Arabic
        ا: "a",
        أ: "a",
        إ: "i",
        آ: "aa",
        ؤ: "u",
        ئ: "e",
        ء: "a",
        ب: "b",
        ت: "t",
        ث: "th",
        ج: "j",
        ح: "h",
        خ: "kh",
        د: "d",
        ذ: "th",
        ر: "r",
        ز: "z",
        س: "s",
        ش: "sh",
        ص: "s",
        ض: "dh",
        ط: "t",
        ظ: "z",
        ع: "a",
        غ: "gh",
        ف: "f",
        ق: "q",
        ك: "k",
        ل: "l",
        م: "m",
        ن: "n",
        ه: "h",
        و: "w",
        ي: "y",
        ى: "a",
        ة: "h",
        ﻻ: "la",
        ﻷ: "laa",
        ﻹ: "lai",
        ﻵ: "laa",
        // Persian additional characters than Arabic
        گ: "g",
        چ: "ch",
        پ: "p",
        ژ: "zh",
        ک: "k",
        ی: "y",
        // Arabic diactrics
        "َ": "a",
        "ً": "an",
        "ِ": "e",
        "ٍ": "en",
        "ُ": "u",
        "ٌ": "on",
        "ْ": "",
        // Arabic numbers
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        // Persian numbers
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        // Burmese consonants
        က: "k",
        ခ: "kh",
        ဂ: "g",
        ဃ: "ga",
        င: "ng",
        စ: "s",
        ဆ: "sa",
        ဇ: "z",
        "စျ": "za",
        ည: "ny",
        ဋ: "t",
        ဌ: "ta",
        ဍ: "d",
        ဎ: "da",
        ဏ: "na",
        တ: "t",
        ထ: "ta",
        ဒ: "d",
        ဓ: "da",
        န: "n",
        ပ: "p",
        ဖ: "pa",
        ဗ: "b",
        ဘ: "ba",
        မ: "m",
        ယ: "y",
        ရ: "ya",
        လ: "l",
        ဝ: "w",
        သ: "th",
        ဟ: "h",
        ဠ: "la",
        အ: "a",
        // consonant character combos
        "ြ": "y",
        "ျ": "ya",
        "ွ": "w",
        "ြွ": "yw",
        "ျွ": "ywa",
        "ှ": "h",
        // independent vowels
        ဧ: "e",
        "၏": "-e",
        ဣ: "i",
        ဤ: "-i",
        ဉ: "u",
        ဦ: "-u",
        ဩ: "aw",
        "သြော": "aw",
        ဪ: "aw",
        // numbers
        "၀": "0",
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        // virama and tone marks which are silent in transliteration
        "္": "",
        "့": "",
        "း": "",
        // Czech
        č: "c",
        ď: "d",
        ě: "e",
        ň: "n",
        ř: "r",
        š: "s",
        ť: "t",
        ů: "u",
        ž: "z",
        Č: "C",
        Ď: "D",
        Ě: "E",
        Ň: "N",
        Ř: "R",
        Š: "S",
        Ť: "T",
        Ů: "U",
        Ž: "Z",
        // Dhivehi
        ހ: "h",
        ށ: "sh",
        ނ: "n",
        ރ: "r",
        ބ: "b",
        ޅ: "lh",
        ކ: "k",
        އ: "a",
        ވ: "v",
        މ: "m",
        ފ: "f",
        ދ: "dh",
        ތ: "th",
        ލ: "l",
        ގ: "g",
        ޏ: "gn",
        ސ: "s",
        ޑ: "d",
        ޒ: "z",
        ޓ: "t",
        ޔ: "y",
        ޕ: "p",
        ޖ: "j",
        ޗ: "ch",
        ޘ: "tt",
        ޙ: "hh",
        ޚ: "kh",
        ޛ: "th",
        ޜ: "z",
        ޝ: "sh",
        ޞ: "s",
        ޟ: "d",
        ޠ: "t",
        ޡ: "z",
        ޢ: "a",
        ޣ: "gh",
        ޤ: "q",
        ޥ: "w",
        "ަ": "a",
        "ާ": "aa",
        "ި": "i",
        "ީ": "ee",
        "ު": "u",
        "ޫ": "oo",
        "ެ": "e",
        "ޭ": "ey",
        "ޮ": "o",
        "ޯ": "oa",
        "ް": "",
        // Georgian https://en.wikipedia.org/wiki/Romanization_of_Georgian
        // National system (2002)
        ა: "a",
        ბ: "b",
        გ: "g",
        დ: "d",
        ე: "e",
        ვ: "v",
        ზ: "z",
        თ: "t",
        ი: "i",
        კ: "k",
        ლ: "l",
        მ: "m",
        ნ: "n",
        ო: "o",
        პ: "p",
        ჟ: "zh",
        რ: "r",
        ს: "s",
        ტ: "t",
        უ: "u",
        ფ: "p",
        ქ: "k",
        ღ: "gh",
        ყ: "q",
        შ: "sh",
        ჩ: "ch",
        ც: "ts",
        ძ: "dz",
        წ: "ts",
        ჭ: "ch",
        ხ: "kh",
        ჯ: "j",
        ჰ: "h",
        // Greek
        α: "a",
        β: "v",
        γ: "g",
        δ: "d",
        ε: "e",
        ζ: "z",
        η: "i",
        θ: "th",
        ι: "i",
        κ: "k",
        λ: "l",
        μ: "m",
        ν: "n",
        ξ: "ks",
        ο: "o",
        π: "p",
        ρ: "r",
        σ: "s",
        τ: "t",
        υ: "y",
        φ: "f",
        χ: "x",
        ψ: "ps",
        ω: "o",
        ά: "a",
        έ: "e",
        ί: "i",
        ό: "o",
        ύ: "y",
        ή: "i",
        ώ: "o",
        ς: "s",
        ϊ: "i",
        ΰ: "y",
        ϋ: "y",
        ΐ: "i",
        Α: "A",
        Β: "B",
        Γ: "G",
        Δ: "D",
        Ε: "E",
        Ζ: "Z",
        Η: "I",
        Θ: "TH",
        Ι: "I",
        Κ: "K",
        Λ: "L",
        Μ: "M",
        Ν: "N",
        Ξ: "KS",
        Ο: "O",
        Π: "P",
        Ρ: "R",
        Σ: "S",
        Τ: "T",
        Υ: "Y",
        Φ: "F",
        Χ: "X",
        Ψ: "PS",
        Ω: "O",
        Ά: "A",
        Έ: "E",
        Ί: "I",
        Ό: "O",
        Ύ: "Y",
        Ή: "I",
        Ώ: "O",
        Ϊ: "I",
        Ϋ: "Y",
        // Latvian
        ā: "a",
        // 'č': 'c', // duplicate
        ē: "e",
        ģ: "g",
        ī: "i",
        ķ: "k",
        ļ: "l",
        ņ: "n",
        // 'š': 's', // duplicate
        ū: "u",
        // 'ž': 'z', // duplicate
        Ā: "A",
        // 'Č': 'C', // duplicate
        Ē: "E",
        Ģ: "G",
        Ī: "I",
        Ķ: "k",
        Ļ: "L",
        Ņ: "N",
        // 'Š': 'S', // duplicate
        Ū: "U",
        // 'Ž': 'Z', // duplicate
        // Macedonian
        Ќ: "Kj",
        ќ: "kj",
        Љ: "Lj",
        љ: "lj",
        Њ: "Nj",
        њ: "nj",
        Тс: "Ts",
        тс: "ts",
        // Polish
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        // 'ó': 'o', // duplicate
        ś: "s",
        ź: "z",
        ż: "z",
        Ą: "A",
        Ć: "C",
        Ę: "E",
        Ł: "L",
        Ń: "N",
        Ś: "S",
        Ź: "Z",
        Ż: "Z",
        // Ukranian
        Є: "Ye",
        І: "I",
        Ї: "Yi",
        Ґ: "G",
        є: "ye",
        і: "i",
        ї: "yi",
        ґ: "g",
        // Romanian
        ă: "a",
        Ă: "A",
        ș: "s",
        Ș: "S",
        // 'ş': 's', // duplicate
        // 'Ş': 'S', // duplicate
        ț: "t",
        Ț: "T",
        ţ: "t",
        Ţ: "T",
        // Russian https://en.wikipedia.org/wiki/Romanization_of_Russian
        // ICAO
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "sh",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "Yo",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "I",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "C",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Sh",
        Ъ: "",
        Ы: "Y",
        Ь: "",
        Э: "E",
        Ю: "Yu",
        Я: "Ya",
        // Serbian
        ђ: "dj",
        ј: "j",
        // 'љ': 'lj',  // duplicate
        // 'њ': 'nj', // duplicate
        ћ: "c",
        џ: "dz",
        Ђ: "Dj",
        Ј: "j",
        // 'Љ': 'Lj', // duplicate
        // 'Њ': 'Nj', // duplicate
        Ћ: "C",
        Џ: "Dz",
        // Slovak
        ľ: "l",
        ĺ: "l",
        ŕ: "r",
        Ľ: "L",
        Ĺ: "L",
        Ŕ: "R",
        // Turkish
        ş: "s",
        Ş: "S",
        ı: "i",
        İ: "I",
        // 'ç': 'c', // duplicate
        // 'Ç': 'C', // duplicate
        // 'ü': 'u', // duplicate, see langCharMap
        // 'Ü': 'U', // duplicate, see langCharMap
        // 'ö': 'o', // duplicate, see langCharMap
        // 'Ö': 'O', // duplicate, see langCharMap
        ğ: "g",
        Ğ: "G",
        // Vietnamese
        ả: "a",
        Ả: "A",
        ẳ: "a",
        Ẳ: "A",
        ẩ: "a",
        Ẩ: "A",
        đ: "d",
        Đ: "D",
        ẹ: "e",
        Ẹ: "E",
        ẽ: "e",
        Ẽ: "E",
        ẻ: "e",
        Ẻ: "E",
        ế: "e",
        Ế: "E",
        ề: "e",
        Ề: "E",
        ệ: "e",
        Ệ: "E",
        ễ: "e",
        Ễ: "E",
        ể: "e",
        Ể: "E",
        ỏ: "o",
        ọ: "o",
        Ọ: "o",
        ố: "o",
        Ố: "O",
        ồ: "o",
        Ồ: "O",
        ổ: "o",
        Ổ: "O",
        ộ: "o",
        Ộ: "O",
        ỗ: "o",
        Ỗ: "O",
        ơ: "o",
        Ơ: "O",
        ớ: "o",
        Ớ: "O",
        ờ: "o",
        Ờ: "O",
        ợ: "o",
        Ợ: "O",
        ỡ: "o",
        Ỡ: "O",
        Ở: "o",
        ở: "o",
        ị: "i",
        Ị: "I",
        ĩ: "i",
        Ĩ: "I",
        ỉ: "i",
        Ỉ: "i",
        ủ: "u",
        Ủ: "U",
        ụ: "u",
        Ụ: "U",
        ũ: "u",
        Ũ: "U",
        ư: "u",
        Ư: "U",
        ứ: "u",
        Ứ: "U",
        ừ: "u",
        Ừ: "U",
        ự: "u",
        Ự: "U",
        ữ: "u",
        Ữ: "U",
        ử: "u",
        Ử: "ư",
        ỷ: "y",
        Ỷ: "y",
        ỳ: "y",
        Ỳ: "Y",
        ỵ: "y",
        Ỵ: "Y",
        ỹ: "y",
        Ỹ: "Y",
        ạ: "a",
        Ạ: "A",
        ấ: "a",
        Ấ: "A",
        ầ: "a",
        Ầ: "A",
        ậ: "a",
        Ậ: "A",
        ẫ: "a",
        Ẫ: "A",
        // 'ă': 'a', // duplicate
        // 'Ă': 'A', // duplicate
        ắ: "a",
        Ắ: "A",
        ằ: "a",
        Ằ: "A",
        ặ: "a",
        Ặ: "A",
        ẵ: "a",
        Ẵ: "A",
        "⓪": "0",
        "①": "1",
        "②": "2",
        "③": "3",
        "④": "4",
        "⑤": "5",
        "⑥": "6",
        "⑦": "7",
        "⑧": "8",
        "⑨": "9",
        "⑩": "10",
        "⑪": "11",
        "⑫": "12",
        "⑬": "13",
        "⑭": "14",
        "⑮": "15",
        "⑯": "16",
        "⑰": "17",
        "⑱": "18",
        "⑲": "18",
        "⑳": "18",
        "⓵": "1",
        "⓶": "2",
        "⓷": "3",
        "⓸": "4",
        "⓹": "5",
        "⓺": "6",
        "⓻": "7",
        "⓼": "8",
        "⓽": "9",
        "⓾": "10",
        "⓿": "0",
        "⓫": "11",
        "⓬": "12",
        "⓭": "13",
        "⓮": "14",
        "⓯": "15",
        "⓰": "16",
        "⓱": "17",
        "⓲": "18",
        "⓳": "19",
        "⓴": "20",
        "Ⓐ": "A",
        "Ⓑ": "B",
        "Ⓒ": "C",
        "Ⓓ": "D",
        "Ⓔ": "E",
        "Ⓕ": "F",
        "Ⓖ": "G",
        "Ⓗ": "H",
        "Ⓘ": "I",
        "Ⓙ": "J",
        "Ⓚ": "K",
        "Ⓛ": "L",
        "Ⓜ": "M",
        "Ⓝ": "N",
        "Ⓞ": "O",
        "Ⓟ": "P",
        "Ⓠ": "Q",
        "Ⓡ": "R",
        "Ⓢ": "S",
        "Ⓣ": "T",
        "Ⓤ": "U",
        "Ⓥ": "V",
        "Ⓦ": "W",
        "Ⓧ": "X",
        "Ⓨ": "Y",
        "Ⓩ": "Z",
        "ⓐ": "a",
        "ⓑ": "b",
        "ⓒ": "c",
        "ⓓ": "d",
        "ⓔ": "e",
        "ⓕ": "f",
        "ⓖ": "g",
        "ⓗ": "h",
        "ⓘ": "i",
        "ⓙ": "j",
        "ⓚ": "k",
        "ⓛ": "l",
        "ⓜ": "m",
        "ⓝ": "n",
        "ⓞ": "o",
        "ⓟ": "p",
        "ⓠ": "q",
        "ⓡ": "r",
        "ⓢ": "s",
        "ⓣ": "t",
        "ⓤ": "u",
        "ⓦ": "v",
        "ⓥ": "w",
        "ⓧ": "x",
        "ⓨ": "y",
        "ⓩ": "z",
        // symbols
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'",
        "∂": "d",
        ƒ: "f",
        "™": "(TM)",
        "©": "(C)",
        œ: "oe",
        Œ: "OE",
        "®": "(R)",
        "†": "+",
        "℠": "(SM)",
        "…": "...",
        "˚": "o",
        º: "o",
        ª: "a",
        "•": "*",
        "၊": ",",
        "။": ".",
        // currency
        $: "USD",
        "€": "EUR",
        "₢": "BRN",
        "₣": "FRF",
        "£": "GBP",
        "₤": "ITL",
        "₦": "NGN",
        "₧": "ESP",
        "₩": "KRW",
        "₪": "ILS",
        "₫": "VND",
        "₭": "LAK",
        "₮": "MNT",
        "₯": "GRD",
        "₱": "ARS",
        "₲": "PYG",
        "₳": "ARA",
        "₴": "UAH",
        "₵": "GHS",
        "¢": "cent",
        "¥": "CNY",
        元: "CNY",
        円: "YEN",
        "﷼": "IRR",
        "₠": "EWE",
        "฿": "THB",
        "₨": "INR",
        "₹": "INR",
        "₰": "PF",
        "₺": "TRY",
        "؋": "AFN",
        "₼": "AZN",
        лв: "BGN",
        "៛": "KHR",
        "₡": "CRC",
        "₸": "KZT",
        ден: "MKD",
        zł: "PLN",
        "₽": "RUB",
        "₾": "GEL"
      }, r = [
        // burmese
        "်",
        // Dhivehi
        "ް"
      ], i = {
        // Burmese
        // dependent vowels
        "ာ": "a",
        "ါ": "a",
        "ေ": "e",
        "ဲ": "e",
        "ိ": "i",
        "ီ": "i",
        "ို": "o",
        "ု": "u",
        "ူ": "u",
        "ေါင်": "aung",
        "ော": "aw",
        "ော်": "aw",
        "ေါ": "aw",
        "ေါ်": "aw",
        "်": "်",
        // this is special case but the character will be converted to latin in the code
        "က်": "et",
        "ိုက်": "aik",
        "ောက်": "auk",
        "င်": "in",
        "ိုင်": "aing",
        "ောင်": "aung",
        "စ်": "it",
        "ည်": "i",
        "တ်": "at",
        "ိတ်": "eik",
        "ုတ်": "ok",
        "ွတ်": "ut",
        "ေတ်": "it",
        "ဒ်": "d",
        "ိုဒ်": "ok",
        "ုဒ်": "ait",
        "န်": "an",
        "ာန်": "an",
        "ိန်": "ein",
        "ုန်": "on",
        "ွန်": "un",
        "ပ်": "at",
        "ိပ်": "eik",
        "ုပ်": "ok",
        "ွပ်": "ut",
        "န်ုပ်": "nub",
        "မ်": "an",
        "ိမ်": "ein",
        "ုမ်": "on",
        "ွမ်": "un",
        "ယ်": "e",
        "ိုလ်": "ol",
        "ဉ်": "in",
        "ံ": "an",
        "ိံ": "ein",
        "ုံ": "on",
        // Dhivehi
        "ައް": "ah",
        "ަށް": "ah"
      }, s = {
        en: {},
        // default language
        az: {
          // Azerbaijani
          ç: "c",
          ə: "e",
          ğ: "g",
          ı: "i",
          ö: "o",
          ş: "s",
          ü: "u",
          Ç: "C",
          Ə: "E",
          Ğ: "G",
          İ: "I",
          Ö: "O",
          Ş: "S",
          Ü: "U"
        },
        cs: {
          // Czech
          č: "c",
          ď: "d",
          ě: "e",
          ň: "n",
          ř: "r",
          š: "s",
          ť: "t",
          ů: "u",
          ž: "z",
          Č: "C",
          Ď: "D",
          Ě: "E",
          Ň: "N",
          Ř: "R",
          Š: "S",
          Ť: "T",
          Ů: "U",
          Ž: "Z"
        },
        fi: {
          // Finnish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        hu: {
          // Hungarian
          ä: "a",
          // ok
          Ä: "A",
          // ok
          // 'á': 'a', duplicate see charMap/latin
          // 'Á': 'A', duplicate see charMap/latin
          ö: "o",
          // ok
          Ö: "O",
          // ok
          // 'ő': 'o', duplicate see charMap/latin
          // 'Ő': 'O', duplicate see charMap/latin
          ü: "u",
          Ü: "U",
          ű: "u",
          Ű: "U"
        },
        lt: {
          // Lithuanian
          ą: "a",
          č: "c",
          ę: "e",
          ė: "e",
          į: "i",
          š: "s",
          ų: "u",
          ū: "u",
          ž: "z",
          Ą: "A",
          Č: "C",
          Ę: "E",
          Ė: "E",
          Į: "I",
          Š: "S",
          Ų: "U",
          Ū: "U"
        },
        lv: {
          // Latvian
          ā: "a",
          č: "c",
          ē: "e",
          ģ: "g",
          ī: "i",
          ķ: "k",
          ļ: "l",
          ņ: "n",
          š: "s",
          ū: "u",
          ž: "z",
          Ā: "A",
          Č: "C",
          Ē: "E",
          Ģ: "G",
          Ī: "i",
          Ķ: "k",
          Ļ: "L",
          Ņ: "N",
          Š: "S",
          Ū: "u",
          Ž: "Z"
        },
        pl: {
          // Polish
          ą: "a",
          ć: "c",
          ę: "e",
          ł: "l",
          ń: "n",
          ó: "o",
          ś: "s",
          ź: "z",
          ż: "z",
          Ą: "A",
          Ć: "C",
          Ę: "e",
          Ł: "L",
          Ń: "N",
          Ó: "O",
          Ś: "S",
          Ź: "Z",
          Ż: "Z"
        },
        sv: {
          // Swedish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        sk: {
          // Slovak
          ä: "a",
          Ä: "A"
        },
        sr: {
          // Serbian
          љ: "lj",
          њ: "nj",
          Љ: "Lj",
          Њ: "Nj",
          đ: "dj",
          Đ: "Dj"
        },
        tr: {
          // Turkish
          Ü: "U",
          Ö: "O",
          ü: "u",
          ö: "o"
        }
      }, a = {
        ar: {
          "∆": "delta",
          "∞": "la-nihaya",
          "♥": "hob",
          "&": "wa",
          "|": "aw",
          "<": "aqal-men",
          ">": "akbar-men",
          "∑": "majmou",
          "¤": "omla"
        },
        az: {},
        ca: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "amor",
          "&": "i",
          "|": "o",
          "<": "menys que",
          ">": "mes que",
          "∑": "suma dels",
          "¤": "moneda"
        },
        cs: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "nebo",
          "<": "mensi nez",
          ">": "vetsi nez",
          "∑": "soucet",
          "¤": "mena"
        },
        de: {
          "∆": "delta",
          "∞": "unendlich",
          "♥": "Liebe",
          "&": "und",
          "|": "oder",
          "<": "kleiner als",
          ">": "groesser als",
          "∑": "Summe von",
          "¤": "Waehrung"
        },
        dv: {
          "∆": "delta",
          "∞": "kolunulaa",
          "♥": "loabi",
          "&": "aai",
          "|": "noonee",
          "<": "ah vure kuda",
          ">": "ah vure bodu",
          "∑": "jumula",
          "¤": "faisaa"
        },
        en: {
          "∆": "delta",
          "∞": "infinity",
          "♥": "love",
          "&": "and",
          "|": "or",
          "<": "less than",
          ">": "greater than",
          "∑": "sum",
          "¤": "currency"
        },
        es: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "y",
          "|": "u",
          "<": "menos que",
          ">": "mas que",
          "∑": "suma de los",
          "¤": "moneda"
        },
        fa: {
          "∆": "delta",
          "∞": "bi-nahayat",
          "♥": "eshgh",
          "&": "va",
          "|": "ya",
          "<": "kamtar-az",
          ">": "bishtar-az",
          "∑": "majmooe",
          "¤": "vahed"
        },
        fi: {
          "∆": "delta",
          "∞": "aarettomyys",
          "♥": "rakkaus",
          "&": "ja",
          "|": "tai",
          "<": "pienempi kuin",
          ">": "suurempi kuin",
          "∑": "summa",
          "¤": "valuutta"
        },
        fr: {
          "∆": "delta",
          "∞": "infiniment",
          "♥": "Amour",
          "&": "et",
          "|": "ou",
          "<": "moins que",
          ">": "superieure a",
          "∑": "somme des",
          "¤": "monnaie"
        },
        ge: {
          "∆": "delta",
          "∞": "usasruloba",
          "♥": "siqvaruli",
          "&": "da",
          "|": "an",
          "<": "naklebi",
          ">": "meti",
          "∑": "jami",
          "¤": "valuta"
        },
        gr: {},
        hu: {
          "∆": "delta",
          "∞": "vegtelen",
          "♥": "szerelem",
          "&": "es",
          "|": "vagy",
          "<": "kisebb mint",
          ">": "nagyobb mint",
          "∑": "szumma",
          "¤": "penznem"
        },
        it: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amore",
          "&": "e",
          "|": "o",
          "<": "minore di",
          ">": "maggiore di",
          "∑": "somma",
          "¤": "moneta"
        },
        lt: {
          "∆": "delta",
          "∞": "begalybe",
          "♥": "meile",
          "&": "ir",
          "|": "ar",
          "<": "maziau nei",
          ">": "daugiau nei",
          "∑": "suma",
          "¤": "valiuta"
        },
        lv: {
          "∆": "delta",
          "∞": "bezgaliba",
          "♥": "milestiba",
          "&": "un",
          "|": "vai",
          "<": "mazak neka",
          ">": "lielaks neka",
          "∑": "summa",
          "¤": "valuta"
        },
        my: {
          "∆": "kwahkhyaet",
          "∞": "asaonasme",
          "♥": "akhyait",
          "&": "nhin",
          "|": "tho",
          "<": "ngethaw",
          ">": "kyithaw",
          "∑": "paungld",
          "¤": "ngwekye"
        },
        mk: {},
        nl: {
          "∆": "delta",
          "∞": "oneindig",
          "♥": "liefde",
          "&": "en",
          "|": "of",
          "<": "kleiner dan",
          ">": "groter dan",
          "∑": "som",
          "¤": "valuta"
        },
        pl: {
          "∆": "delta",
          "∞": "nieskonczonosc",
          "♥": "milosc",
          "&": "i",
          "|": "lub",
          "<": "mniejsze niz",
          ">": "wieksze niz",
          "∑": "suma",
          "¤": "waluta"
        },
        pt: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "e",
          "|": "ou",
          "<": "menor que",
          ">": "maior que",
          "∑": "soma",
          "¤": "moeda"
        },
        ro: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "dragoste",
          "&": "si",
          "|": "sau",
          "<": "mai mic ca",
          ">": "mai mare ca",
          "∑": "suma",
          "¤": "valuta"
        },
        ru: {
          "∆": "delta",
          "∞": "beskonechno",
          "♥": "lubov",
          "&": "i",
          "|": "ili",
          "<": "menshe",
          ">": "bolshe",
          "∑": "summa",
          "¤": "valjuta"
        },
        sk: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "alebo",
          "<": "menej ako",
          ">": "viac ako",
          "∑": "sucet",
          "¤": "mena"
        },
        sr: {},
        tr: {
          "∆": "delta",
          "∞": "sonsuzluk",
          "♥": "ask",
          "&": "ve",
          "|": "veya",
          "<": "kucuktur",
          ">": "buyuktur",
          "∑": "toplam",
          "¤": "para birimi"
        },
        uk: {
          "∆": "delta",
          "∞": "bezkinechnist",
          "♥": "lubov",
          "&": "i",
          "|": "abo",
          "<": "menshe",
          ">": "bilshe",
          "∑": "suma",
          "¤": "valjuta"
        },
        vn: {
          "∆": "delta",
          "∞": "vo cuc",
          "♥": "yeu",
          "&": "va",
          "|": "hoac",
          "<": "nho hon",
          ">": "lon hon",
          "∑": "tong",
          "¤": "tien te"
        }
      }, l = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), f = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), u = [".", "!", "~", "*", "'", "(", ")"].join(""), c = function(y, E) {
        var O = "-", v = "", S = "", T = !0, N = {}, L, $, x, G, Q, D, q, ce, pe, Y, F, J, _e, Le, Me = "";
        if (typeof y != "string")
          return "";
        if (typeof E == "string" && (O = E), q = a.en, ce = s.en, typeof E == "object") {
          L = E.maintainCase || !1, N = E.custom && typeof E.custom == "object" ? E.custom : N, x = +E.truncate > 1 && E.truncate || !1, G = E.uric || !1, Q = E.uricNoSlash || !1, D = E.mark || !1, T = !(E.symbols === !1 || E.lang === !1), O = E.separator || O, G && (Me += l), Q && (Me += f), D && (Me += u), q = E.lang && a[E.lang] && T ? a[E.lang] : T ? a.en : {}, ce = E.lang && s[E.lang] ? s[E.lang] : E.lang === !1 || E.lang === !0 ? {} : s.en, E.titleCase && typeof E.titleCase.length == "number" && Array.prototype.toString.call(E.titleCase) ? (E.titleCase.forEach(function(Ne) {
            N[Ne + ""] = Ne + "";
          }), $ = !0) : $ = !!E.titleCase, E.custom && typeof E.custom.length == "number" && Array.prototype.toString.call(E.custom) && E.custom.forEach(function(Ne) {
            N[Ne + ""] = Ne + "";
          }), Object.keys(N).forEach(function(Ne) {
            var ke;
            Ne.length > 1 ? ke = new RegExp("\\b" + p(Ne) + "\\b", "gi") : ke = new RegExp(p(Ne), "gi"), y = y.replace(ke, N[Ne]);
          });
          for (F in N)
            Me += F;
        }
        for (Me += O, Me = p(Me), y = y.replace(/(^\s+|\s+$)/g, ""), _e = !1, Le = !1, Y = 0, J = y.length; Y < J; Y++)
          F = y[Y], _(F, N) ? _e = !1 : ce[F] ? (F = _e && ce[F].match(/[A-Za-z0-9]/) ? " " + ce[F] : ce[F], _e = !1) : F in o ? (Y + 1 < J && r.indexOf(y[Y + 1]) >= 0 ? (S += F, F = "") : Le === !0 ? (F = i[S] + o[F], S = "") : F = _e && o[F].match(/[A-Za-z0-9]/) ? " " + o[F] : o[F], _e = !1, Le = !1) : F in i ? (S += F, F = "", Y === J - 1 && (F = i[S]), Le = !0) : /* process symbol chars */ q[F] && !(G && l.indexOf(F) !== -1) && !(Q && f.indexOf(F) !== -1) ? (F = _e || v.substr(-1).match(/[A-Za-z0-9]/) ? O + q[F] : q[F], F += y[Y + 1] !== void 0 && y[Y + 1].match(/[A-Za-z0-9]/) ? O : "", _e = !0) : (Le === !0 ? (F = i[S] + F, S = "", Le = !1) : _e && (/[A-Za-z0-9]/.test(F) || v.substr(-1).match(/A-Za-z0-9]/)) && (F = " " + F), _e = !1), v += F.replace(new RegExp("[^\\w\\s" + Me + "_-]", "g"), O);
        return $ && (v = v.replace(/(\w)(\S*)/g, function(Ne, ke, Ge) {
          var qe = ke.toUpperCase() + (Ge !== null ? Ge : "");
          return Object.keys(N).indexOf(qe.toLowerCase()) < 0 ? qe : qe.toLowerCase();
        })), v = v.replace(/\s+/g, O).replace(new RegExp("\\" + O + "+", "g"), O).replace(new RegExp("(^\\" + O + "+|\\" + O + "+$)", "g"), ""), x && v.length > x && (pe = v.charAt(x) === O, v = v.slice(0, x), pe || (v = v.slice(0, v.lastIndexOf(O)))), !L && !$ && (v = v.toLowerCase()), v;
      }, d = function(y) {
        return function(O) {
          return c(O, y);
        };
      }, p = function(y) {
        return y.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, _ = function(g, y) {
        for (var E in y)
          if (y[E] === g)
            return !0;
      };
      if (typeof t < "u" && t.exports)
        t.exports = c, t.exports.createSlug = d;
      else if (typeof define < "u" && define.amd)
        define([], function() {
          return c;
        });
      else
        try {
          if (n.getSlug || n.createSlug)
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          n.getSlug = c, n.createSlug = d;
        } catch {
        }
    }(e);
  }
}), Kv = Bp({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    R(), t.exports = jv();
  }
});
R();
R();
R();
R();
R();
R();
R();
R();
function Wv(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function zv(e) {
  const t = e.__file;
  if (t)
    return Cv(Sv(t, ".vue"));
}
function Zu(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Al(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Hp(e) {
  var t, n;
  const o = (t = e.subTree) == null ? void 0 : t.type, r = Al(e);
  return r ? ((n = r?.types) == null ? void 0 : n.Fragment) === o : !1;
}
function Es(e) {
  var t, n, o;
  const r = Wv(e?.type || {});
  if (r)
    return r;
  if (e?.root === e)
    return "Root";
  for (const s in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[s] === e?.type)
      return Zu(e, s);
  for (const s in (o = e.appContext) == null ? void 0 : o.components)
    if (e.appContext.components[s] === e?.type)
      return Zu(e, s);
  const i = zv(e?.type || {});
  return i || "Anonymous Component";
}
function Gv(e) {
  var t, n, o;
  const r = (o = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? o : 0, i = e === e?.root ? "root" : e.uid;
  return `${r}:${i}`;
}
function Sa(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function Yv() {
  const e = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    get width() {
      return e.right - e.left;
    },
    get height() {
      return e.bottom - e.top;
    }
  };
  return e;
}
var pi;
function qv(e) {
  return pi || (pi = document.createRange()), pi.selectNode(e), pi.getBoundingClientRect();
}
function Xv(e) {
  const t = Yv();
  if (!e.children)
    return t;
  for (let n = 0, o = e.children.length; n < o; n++) {
    const r = e.children[n];
    let i;
    if (r.component)
      i = ho(r.component);
    else if (r.el) {
      const s = r.el;
      s.nodeType === 1 || s.getBoundingClientRect ? i = s.getBoundingClientRect() : s.nodeType === 3 && s.data.trim() && (i = qv(s));
    }
    i && Qv(t, i);
  }
  return t;
}
function Qv(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var ec = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function ho(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? ec : Hp(e) ? Xv(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? ho(e.subTree.component) : ec;
}
R();
function wl(e) {
  return Hp(e) ? Jv(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function Jv(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...wl(n.component)) : n?.el && t.push(n.el);
  }), t;
}
var Up = "__vue-devtools-component-inspector__", jp = "__vue-devtools-component-inspector__card__", Kp = "__vue-devtools-component-inspector__name__", Wp = "__vue-devtools-component-inspector__indicator__", zp = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, Zv = {
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "5px 8px",
  borderRadius: "4px",
  textAlign: "left",
  position: "absolute",
  left: 0,
  color: "#e9e9e9",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  backgroundColor: "#42b883",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, ey = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function nr() {
  return document.getElementById(Up);
}
function ty() {
  return document.getElementById(jp);
}
function ny() {
  return document.getElementById(Wp);
}
function oy() {
  return document.getElementById(Kp);
}
function Tl(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function Nl(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : Up, Object.assign(n.style, {
    ...zp,
    ...Tl(e.bounds),
    ...e.style
  });
  const o = document.createElement("span");
  o.id = jp, Object.assign(o.style, {
    ...Zv,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const r = document.createElement("span");
  r.id = Kp, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const i = document.createElement("i");
  return i.id = Wp, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, ey), o.appendChild(r), o.appendChild(i), n.appendChild(o), document.body.appendChild(n), n;
}
function Cl(e) {
  const t = nr(), n = ty(), o = oy(), r = ny();
  t && (Object.assign(t.style, {
    ...zp,
    ...Tl(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), o.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function ry(e) {
  const t = ho(e);
  if (!t.width && !t.height)
    return;
  const n = Es(e);
  nr() ? Cl({ bounds: t, name: n }) : Nl({ bounds: t, name: n });
}
function Gp() {
  const e = nr();
  e && (e.style.display = "none");
}
var Da = null;
function xa(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (Da = n, n.vnode.el)) {
      const r = ho(n), i = Es(n);
      nr() ? Cl({ bounds: r, name: i }) : Nl({ bounds: r, name: i });
    }
  }
}
function iy(e, t) {
  if (e.preventDefault(), e.stopPropagation(), Da) {
    const n = Gv(Da);
    t(n);
  }
}
var Qi = null;
function sy() {
  Gp(), window.removeEventListener("mouseover", xa), window.removeEventListener("click", Qi, !0), Qi = null;
}
function ay() {
  return window.addEventListener("mouseover", xa), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), iy(n, (o) => {
        window.removeEventListener("click", t, !0), Qi = null, window.removeEventListener("mouseover", xa);
        const r = nr();
        r && (r.style.display = "none"), e(JSON.stringify({ id: o }));
      });
    }
    Qi = t, window.addEventListener("click", t, !0);
  });
}
function ly(e) {
  const t = Sa(rt.value, e.id);
  if (t) {
    const [n] = wl(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const o = ho(t), r = document.createElement("div"), i = {
        ...Tl(o),
        position: "absolute"
      };
      Object.assign(r.style, i), document.body.appendChild(r), r.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(r);
      }, 2e3);
    }
    setTimeout(() => {
      const o = ho(t);
      if (o.width || o.height) {
        const r = Es(t), i = nr();
        i ? Cl({ ...e, name: r, bounds: o }) : Nl({ ...e, name: r, bounds: o }), setTimeout(() => {
          i && (i.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
R();
var tc, nc;
(nc = (tc = X).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (tc.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function uy(e) {
  let t = 0;
  const n = setInterval(() => {
    X.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function cy() {
  const e = X.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function fy() {
  return new Promise((e) => {
    function t() {
      cy(), e(X.__VUE_INSPECTOR__);
    }
    X.__VUE_INSPECTOR__ ? t() : uy(() => {
      t();
    });
  });
}
R();
R();
function dy(e) {
  return !!(e && e.__v_isReadonly);
}
function Yp(e) {
  return dy(e) ? Yp(e.__v_raw) : !!(e && e.__v_isReactive);
}
function js(e) {
  return !!(e && e.__v_isRef === !0);
}
function gr(e) {
  const t = e && e.__v_raw;
  return t ? gr(t) : e;
}
var py = class {
  constructor() {
    this.refEditor = new hy();
  }
  set(e, t, n, o) {
    const r = Array.isArray(t) ? t : t.split(".");
    for (; r.length > 1; ) {
      const a = r.shift();
      e instanceof Map ? e = e.get(a) : e instanceof Set ? e = Array.from(e.values())[a] : e = e[a], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    const i = r[0], s = this.refEditor.get(e)[i];
    o ? o(e, i, n) : this.refEditor.isRef(s) ? this.refEditor.set(s, n) : e[i] = n;
  }
  get(e, t) {
    const n = Array.isArray(t) ? t : t.split(".");
    for (let o = 0; o < n.length; o++)
      if (e instanceof Map ? e = e.get(n[o]) : e = e[n[o]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e)
        return;
    return e;
  }
  has(e, t, n = !1) {
    if (typeof e > "u")
      return !1;
    const o = Array.isArray(t) ? t.slice() : t.split("."), r = n ? 2 : 1;
    for (; e && o.length > r; ) {
      const i = o.shift();
      e = e[i], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    return e != null && Object.prototype.hasOwnProperty.call(e, o[0]);
  }
  createDefaultSetCallback(e) {
    return (t, n, o) => {
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : gr(t) instanceof Map ? t.delete(n) : gr(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const r = t[e.newKey || n];
        this.refEditor.isRef(r) ? this.refEditor.set(r, o) : gr(t) instanceof Map ? t.set(e.newKey || n, o) : gr(t) instanceof Set ? t.add(o) : t[e.newKey || n] = o;
      }
    };
  }
}, hy = class {
  set(e, t) {
    if (js(e))
      e.value = t;
    else {
      if (e instanceof Set && Array.isArray(t)) {
        e.clear(), t.forEach((r) => e.add(r));
        return;
      }
      const n = Object.keys(t);
      if (e instanceof Map) {
        const r = new Set(e.keys());
        n.forEach((i) => {
          e.set(i, Reflect.get(t, i)), r.delete(i);
        }), r.forEach((i) => e.delete(i));
        return;
      }
      const o = new Set(Object.keys(e));
      n.forEach((r) => {
        Reflect.set(e, r, Reflect.get(t, r)), o.delete(r);
      }), o.forEach((r) => Reflect.deleteProperty(e, r));
    }
  }
  get(e) {
    return js(e) ? e.value : e;
  }
  isRef(e) {
    return js(e) || Yp(e);
  }
};
R();
R();
R();
var _y = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function my() {
  if (!Pp || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem(_y);
  return e ? JSON.parse(e) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
R();
R();
R();
var oc, rc;
(rc = (oc = X).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (oc.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var gy = new Proxy(X.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function Ey(e, t) {
  ze.timelineLayersState[t.id] = !1, gy.push({
    ...e,
    descriptorId: t.id,
    appRecord: Al(t.app)
  });
}
var ic, sc;
(sc = (ic = X).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (ic.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Sl = new Proxy(X.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), qp = Uo(() => {
  or.hooks.callHook("sendInspectorToClient", Xp());
});
function vy(e, t) {
  var n, o;
  Sl.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (o = e.stateFilterPlaceholder) != null ? o : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Al(t.app)
  }), qp();
}
function Xp() {
  return Sl.filter((e) => e.descriptor.app === rt.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
    var t;
    const n = e.descriptor, o = e.options;
    return {
      id: o.id,
      label: o.label,
      logo: n.logo,
      icon: `custom-ic-baseline-${(t = o?.icon) == null ? void 0 : t.replace(/_/g, "-")}`,
      packageName: n.packageName,
      homepage: n.homepage,
      pluginId: n.id
    };
  });
}
function xi(e, t) {
  return Sl.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function yy() {
  const e = Mp();
  e.hook("addInspector", ({ inspector: o, plugin: r }) => {
    vy(o, r.descriptor);
  });
  const t = Uo(async ({ inspectorId: o, plugin: r }) => {
    var i;
    if (!o || !((i = r?.descriptor) != null && i.app) || ze.highPerfModeEnabled)
      return;
    const s = xi(o, r.descriptor.app), a = {
      app: r.descriptor.app,
      inspectorId: o,
      filter: s?.treeFilter || "",
      rootNodes: []
    };
    await new Promise((l) => {
      e.callHookWith(
        async (f) => {
          await Promise.all(f.map((u) => u(a))), l();
        },
        "getInspectorTree"
        /* GET_INSPECTOR_TREE */
      );
    }), e.callHookWith(
      async (l) => {
        await Promise.all(l.map((f) => f({
          inspectorId: o,
          rootNodes: a.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  e.hook("sendInspectorTree", t);
  const n = Uo(async ({ inspectorId: o, plugin: r }) => {
    var i;
    if (!o || !((i = r?.descriptor) != null && i.app) || ze.highPerfModeEnabled)
      return;
    const s = xi(o, r.descriptor.app), a = {
      app: r.descriptor.app,
      inspectorId: o,
      nodeId: s?.selectedNodeId || "",
      state: null
    }, l = {
      currentTab: `custom-inspector:${o}`
    };
    a.nodeId && await new Promise((f) => {
      e.callHookWith(
        async (u) => {
          await Promise.all(u.map((c) => c(a, l))), f();
        },
        "getInspectorState"
        /* GET_INSPECTOR_STATE */
      );
    }), e.callHookWith(
      async (f) => {
        await Promise.all(f.map((u) => u({
          inspectorId: o,
          nodeId: a.nodeId,
          state: a.state
        })));
      },
      "sendInspectorStateToClient"
      /* SEND_INSPECTOR_STATE_TO_CLIENT */
    );
  }, 120);
  return e.hook("sendInspectorState", n), e.hook("customInspectorSelectNode", ({ inspectorId: o, nodeId: r, plugin: i }) => {
    const s = xi(o, i.descriptor.app);
    s && (s.selectedNodeId = r);
  }), e.hook("timelineLayerAdded", ({ options: o, plugin: r }) => {
    Ey(o, r.descriptor);
  }), e.hook("timelineEventAdded", ({ options: o, plugin: r }) => {
    var i;
    const s = ["performance", "component-event", "keyboard", "mouse"];
    ze.highPerfModeEnabled || !((i = ze.timelineLayersState) != null && i[r.descriptor.id]) && !s.includes(o.layerId) || e.callHookWith(
      async (a) => {
        await Promise.all(a.map((l) => l(o)));
      },
      "sendTimelineEventToClient"
      /* SEND_TIMELINE_EVENT_TO_CLIENT */
    );
  }), e.hook("getComponentInstances", async ({ app: o }) => {
    const r = o.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!r)
      return null;
    const i = r.id.toString();
    return [...r.instanceMap].filter(([a]) => a.split(":")[0] === i).map(([, a]) => a);
  }), e.hook("getComponentBounds", async ({ instance: o }) => ho(o)), e.hook("getComponentName", ({ instance: o }) => Es(o)), e.hook("componentHighlight", ({ uid: o }) => {
    const r = rt.value.instanceMap.get(o);
    r && ry(r);
  }), e.hook("componentUnhighlight", () => {
    Gp();
  }), e;
}
var ac, lc;
(lc = (ac = X).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (ac.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var uc, cc;
(cc = (uc = X).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (uc.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var fc, dc;
(dc = (fc = X).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (fc.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var pc, hc;
(hc = (pc = X).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (pc.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var _c, mc;
(mc = (_c = X).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (_c.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var Zn = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function by() {
  return {
    connected: !1,
    clientConnected: !1,
    vitePluginDetected: !0,
    appRecords: [],
    activeAppRecordId: "",
    tabs: [],
    commands: [],
    highPerfModeEnabled: !0,
    devtoolsClientDetected: {},
    perfUniqueGroupId: 0,
    timelineLayersState: my()
  };
}
var gc, Ec;
(Ec = (gc = X)[Zn]) != null || (gc[Zn] = by());
var Oy = Uo((e) => {
  or.hooks.callHook("devtoolsStateUpdated", { state: e });
});
Uo((e, t) => {
  or.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var vs = new Proxy(X.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? X.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : X.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), rt = new Proxy(X.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? X.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? X.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : X.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function Qp() {
  Oy({
    ...X[Zn],
    appRecords: vs.value,
    activeAppRecordId: rt.id,
    tabs: X.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: X.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function Ay(e) {
  X.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Qp();
}
function wy(e) {
  X.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Qp();
}
var ze = new Proxy(X[Zn], {
  get(e, t) {
    return t === "appRecords" ? vs : t === "activeAppRecordId" ? rt.id : t === "tabs" ? X.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? X.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : X[Zn][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...X[Zn] }, e[t] = n, X[Zn][t] = n, !0;
  }
});
function Ty(e = {}) {
  var t, n, o;
  const { file: r, host: i, baseUrl: s = window.location.origin, line: a = 0, column: l = 0 } = e;
  if (r) {
    if (i === "chrome-extension") {
      const f = r.replace(/\\/g, "\\\\"), u = (n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? n : "/";
      fetch(`${u}__open-in-editor?file=${encodeURI(r)}`).then((c) => {
        if (!c.ok) {
          const d = `Opening component ${f} failed`;
          console.log(`%c${d}`, "color:red");
        }
      });
    } else if (ze.vitePluginDetected) {
      const f = (o = X.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? o : s;
      X.__VUE_INSPECTOR__.openInEditor(f, r, a, l);
    }
  }
}
R();
R();
R();
R();
R();
var vc, yc;
(yc = (vc = X).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (vc.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var Dl = new Proxy(X.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function Ia(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function xl(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Ny(e) {
  var t, n, o;
  const r = (n = (t = Dl.find((i) => {
    var s;
    return i[0].id === e && !!((s = i[0]) != null && s.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (o = r?.settings) != null ? o : null;
}
function Jp(e, t) {
  var n, o, r;
  const i = xl(e);
  if (i) {
    const s = localStorage.getItem(i);
    if (s)
      return JSON.parse(s);
  }
  if (e) {
    const s = (o = (n = Dl.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? o : null;
    return Ia((r = s?.settings) != null ? r : {});
  }
  return Ia(t);
}
function Cy(e, t) {
  const n = xl(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Ia(t)));
}
function Sy(e, t, n) {
  const o = xl(e), r = localStorage.getItem(o), i = JSON.parse(r || "{}"), s = {
    ...i,
    [t]: n
  };
  localStorage.setItem(o, JSON.stringify(s)), or.hooks.callHookWith(
    (a) => {
      a.forEach((l) => l({
        pluginId: e,
        key: t,
        oldValue: i[t],
        newValue: n,
        settings: s
      }));
    },
    "setPluginSettings"
    /* SET_PLUGIN_SETTINGS */
  );
}
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
var bc, Oc, _t = (Oc = (bc = X).__VUE_DEVTOOLS_HOOK) != null ? Oc : bc.__VUE_DEVTOOLS_HOOK = Mp(), Dy = {
  vueAppInit(e) {
    _t.hook("app:init", e);
  },
  vueAppUnmount(e) {
    _t.hook("app:unmount", e);
  },
  vueAppConnected(e) {
    _t.hook("app:connected", e);
  },
  componentAdded(e) {
    return _t.hook("component:added", e);
  },
  componentEmit(e) {
    return _t.hook("component:emit", e);
  },
  componentUpdated(e) {
    return _t.hook("component:updated", e);
  },
  componentRemoved(e) {
    return _t.hook("component:removed", e);
  },
  setupDevtoolsPlugin(e) {
    _t.hook("devtools-plugin:setup", e);
  },
  perfStart(e) {
    return _t.hook("perf:start", e);
  },
  perfEnd(e) {
    return _t.hook("perf:end", e);
  }
}, Zp = {
  on: Dy,
  setupDevToolsPlugin(e, t) {
    return _t.callHook("devtools-plugin:setup", e, t);
  }
}, xy = class {
  constructor({ plugin: e, ctx: t }) {
    this.hooks = t.hooks, this.plugin = e;
  }
  get on() {
    return {
      // component inspector
      visitComponentTree: (e) => {
        this.hooks.hook("visitComponentTree", e);
      },
      inspectComponent: (e) => {
        this.hooks.hook("inspectComponent", e);
      },
      editComponentState: (e) => {
        this.hooks.hook("editComponentState", e);
      },
      // custom inspector
      getInspectorTree: (e) => {
        this.hooks.hook("getInspectorTree", e);
      },
      getInspectorState: (e) => {
        this.hooks.hook("getInspectorState", e);
      },
      editInspectorState: (e) => {
        this.hooks.hook("editInspectorState", e);
      },
      // timeline
      inspectTimelineEvent: (e) => {
        this.hooks.hook("inspectTimelineEvent", e);
      },
      timelineCleared: (e) => {
        this.hooks.hook("timelineCleared", e);
      },
      // settings
      setPluginSettings: (e) => {
        this.hooks.hook("setPluginSettings", e);
      }
    };
  }
  // component inspector
  notifyComponentUpdate(e) {
    var t;
    if (ze.highPerfModeEnabled)
      return;
    const n = Xp().find((o) => o.packageName === this.plugin.descriptor.packageName);
    if (n?.id) {
      if (e) {
        const o = [
          e.appContext.app,
          e.uid,
          (t = e.parent) == null ? void 0 : t.uid,
          e
        ];
        _t.callHook("component:updated", ...o);
      } else
        _t.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: n.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(e) {
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && Cy(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    ze.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    ze.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return ze.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    ze.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
  }
  // settings
  getSettings(e) {
    return Jp(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
  }
  // utilities
  getComponentInstances(e) {
    return this.hooks.callHook("getComponentInstances", { app: e });
  }
  getComponentBounds(e) {
    return this.hooks.callHook("getComponentBounds", { instance: e });
  }
  getComponentName(e) {
    return this.hooks.callHook("getComponentName", { instance: e });
  }
  highlightElement(e) {
    const t = e.__VUE_DEVTOOLS_NEXT_UID__;
    return this.hooks.callHook("componentHighlight", { uid: t });
  }
  unhighlightElement() {
    return this.hooks.callHook(
      "componentUnhighlight"
      /* COMPONENT_UNHIGHLIGHT */
    );
  }
}, Iy = xy;
R();
R();
R();
R();
var $y = "__vue_devtool_undefined__", ky = "__vue_devtool_infinity__", Ry = "__vue_devtool_negative_infinity__", Vy = "__vue_devtool_nan__";
R();
R();
var Py = {
  [$y]: "undefined",
  [Vy]: "NaN",
  [ky]: "Infinity",
  [Ry]: "-Infinity"
};
Object.entries(Py).reduce((e, [t, n]) => (e[n] = t, e), {});
R();
R();
R();
R();
R();
var Ac, wc;
(wc = (Ac = X).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (Ac.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function eh(e, t) {
  return Zp.setupDevToolsPlugin(e, t);
}
function Ly(e, t) {
  const [n, o] = e;
  if (n.app !== t)
    return;
  const r = new Iy({
    plugin: {
      setupFn: o,
      descriptor: n
    },
    ctx: or
  });
  n.packageName === "vuex" && r.on.editInspectorState((i) => {
    r.sendInspectorState(i.inspectorId);
  }), o(r);
}
function th(e, t) {
  X.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || ze.highPerfModeEnabled && !t?.inspectingComponent || (X.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Dl.forEach((n) => {
    Ly(n, e);
  }));
}
R();
R();
var Br = "__VUE_DEVTOOLS_ROUTER__", jo = "__VUE_DEVTOOLS_ROUTER_INFO__", Tc, Nc;
(Nc = (Tc = X)[jo]) != null || (Tc[jo] = {
  currentRoute: null,
  routes: []
});
var Cc, Sc;
(Sc = (Cc = X)[Br]) != null || (Cc[Br] = {});
new Proxy(X[jo], {
  get(e, t) {
    return X[jo][t];
  }
});
new Proxy(X[Br], {
  get(e, t) {
    if (t === "value")
      return X[Br];
  }
});
function My(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Il(e) {
  return e.map((t) => {
    let { path: n, name: o, children: r, meta: i } = t;
    return r?.length && (r = Il(r)), {
      path: n,
      name: o,
      children: r,
      meta: i
    };
  });
}
function Fy(e) {
  if (e) {
    const { fullPath: t, hash: n, href: o, path: r, name: i, matched: s, params: a, query: l } = e;
    return {
      fullPath: t,
      hash: n,
      href: o,
      path: r,
      name: i,
      params: a,
      query: l,
      matched: Il(s)
    };
  }
  return e;
}
function By(e, t) {
  function n() {
    var o;
    const r = (o = e.app) == null ? void 0 : o.config.globalProperties.$router, i = Fy(r?.currentRoute.value), s = Il(My(r)), a = console.warn;
    console.warn = () => {
    }, X[jo] = {
      currentRoute: i ? Ju(i) : {},
      routes: Ju(s)
    }, X[Br] = r, console.warn = a;
  }
  n(), Zp.on.componentUpdated(Uo(() => {
    var o;
    ((o = t.value) == null ? void 0 : o.app) === e.app && (n(), !ze.highPerfModeEnabled && or.hooks.callHook("routerInfoUpdated", { state: X[jo] }));
  }, 200));
}
function Hy(e) {
  return {
    // get inspector tree
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: rt.value.app,
        rootNodes: []
      };
      return await new Promise((o) => {
        e.callHookWith(
          async (r) => {
            await Promise.all(r.map((i) => i(n))), o();
          },
          "getInspectorTree"
          /* GET_INSPECTOR_TREE */
        );
      }), n.rootNodes;
    },
    // get inspector state
    async getInspectorState(t) {
      const n = {
        ...t,
        app: rt.value.app,
        state: null
      }, o = {
        currentTab: `custom-inspector:${t.inspectorId}`
      };
      return await new Promise((r) => {
        e.callHookWith(
          async (i) => {
            await Promise.all(i.map((s) => s(n, o))), r();
          },
          "getInspectorState"
          /* GET_INSPECTOR_STATE */
        );
      }), n.state;
    },
    // edit inspector state
    editInspectorState(t) {
      const n = new py(), o = {
        ...t,
        app: rt.value.app,
        set: (r, i = t.path, s = t.state.value, a) => {
          n.set(r, i, s, a || n.createDefaultSetCallback(t.state));
        }
      };
      e.callHookWith(
        (r) => {
          r.forEach((i) => i(o));
        },
        "editInspectorState"
        /* EDIT_INSPECTOR_STATE */
      );
    },
    // send inspector state
    sendInspectorState(t) {
      const n = xi(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return ay();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return sy();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = Sa(rt.value, t);
      if (n)
        return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return ly({ id: t });
    },
    // open in editor
    openInEditor: Ty,
    // get vue inspector
    getVueInspector: fy,
    // toggle app
    toggleApp(t, n) {
      const o = vs.value.find((r) => r.id === t);
      o && (wy(t), Ay(o), By(o, rt), qp(), th(o.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = Sa(rt.value, t);
      if (n) {
        const [o] = wl(n);
        o && (X.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = o);
      }
    },
    updatePluginSettings(t, n, o) {
      Sy(t, n, o);
    },
    getPluginSettings(t) {
      return {
        options: Ny(t),
        values: Jp(t)
      };
    }
  };
}
R();
var Dc, xc;
(xc = (Dc = X).__VUE_DEVTOOLS_ENV__) != null || (Dc.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var Ic = yy(), $c, kc;
(kc = ($c = X).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || ($c.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: Ic,
  get state() {
    return {
      ...ze,
      activeAppRecordId: rt.id,
      activeAppRecord: rt.value,
      appRecords: vs.value
    };
  },
  api: Hy(Ic)
});
var or = X.__VUE_DEVTOOLS_KIT_CONTEXT__;
R();
Uv(Kv());
var Rc, Vc;
(Vc = (Rc = X).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (Rc.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
R();
R();
function Uy(e) {
  ze.highPerfModeEnabled = e ?? !ze.highPerfModeEnabled, !e && rt.value && th(rt.value.app);
}
R();
R();
R();
function jy(e) {
  ze.devtoolsClientDetected = {
    ...ze.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(ze.devtoolsClientDetected).some(Boolean);
  Uy(!t);
}
var Pc, Lc;
(Lc = (Pc = X).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (Pc.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = jy);
R();
R();
R();
R();
R();
R();
R();
var Ky = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(e, t) {
    this.keyToValue.set(e, t), this.valueToKey.set(t, e);
  }
  getByKey(e) {
    return this.keyToValue.get(e);
  }
  getByValue(e) {
    return this.valueToKey.get(e);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
}, nh = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new Ky();
  }
  register(e, t) {
    this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(e) {
    return this.kv.getByValue(e);
  }
  getValue(e) {
    return this.kv.getByKey(e);
  }
}, Wy = class extends nh {
  constructor() {
    super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(e, t) {
    typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
  }
  getAllowedProps(e) {
    return this.classToAllowedProps.get(e);
  }
};
R();
R();
function zy(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function Gy(e, t) {
  const n = zy(e);
  if ("find" in n)
    return n.find(t);
  const o = n;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t(i))
      return i;
  }
}
function Ko(e, t) {
  Object.entries(e).forEach(([n, o]) => t(o, n));
}
function Ii(e, t) {
  return e.indexOf(t) !== -1;
}
function Mc(e, t) {
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (t(o))
      return o;
  }
}
var Yy = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return Gy(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
R();
R();
var qy = (e) => Object.prototype.toString.call(e).slice(8, -1), oh = (e) => typeof e > "u", Xy = (e) => e === null, Hr = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, $a = (e) => Hr(e) && Object.keys(e).length === 0, Vn = (e) => Array.isArray(e), Qy = (e) => typeof e == "string", Jy = (e) => typeof e == "number" && !isNaN(e), Zy = (e) => typeof e == "boolean", eb = (e) => e instanceof RegExp, Ur = (e) => e instanceof Map, jr = (e) => e instanceof Set, rh = (e) => qy(e) === "Symbol", tb = (e) => e instanceof Date && !isNaN(e.valueOf()), nb = (e) => e instanceof Error, Fc = (e) => typeof e == "number" && isNaN(e), ob = (e) => Zy(e) || Xy(e) || oh(e) || Jy(e) || Qy(e) || rh(e), rb = (e) => typeof e == "bigint", ib = (e) => e === 1 / 0 || e === -1 / 0, sb = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), ab = (e) => e instanceof URL;
R();
var ih = (e) => e.replace(/\./g, "\\."), Ks = (e) => e.map(String).map(ih).join("."), Nr = (e) => {
  const t = [];
  let n = "";
  for (let r = 0; r < e.length; r++) {
    let i = e.charAt(r);
    if (i === "\\" && e.charAt(r + 1) === ".") {
      n += ".", r++;
      continue;
    }
    if (i === ".") {
      t.push(n), n = "";
      continue;
    }
    n += i;
  }
  const o = n;
  return t.push(o), t;
};
R();
function Kt(e, t, n, o) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: o
  };
}
var sh = [
  Kt(oh, "undefined", () => null, () => {
  }),
  Kt(rb, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  Kt(tb, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  Kt(nb, "Error", (e, t) => {
    const n = {
      name: e.name,
      message: e.message
    };
    return t.allowedErrorProps.forEach((o) => {
      n[o] = e[o];
    }), n;
  }, (e, t) => {
    const n = new Error(e.message);
    return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((o) => {
      n[o] = e[o];
    }), n;
  }),
  Kt(eb, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  Kt(
    jr,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  Kt(Ur, "map", (e) => [...e.entries()], (e) => new Map(e)),
  Kt((e) => Fc(e) || ib(e), "number", (e) => Fc(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  Kt((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  Kt(ab, "URL", (e) => e.toString(), (e) => new URL(e))
];
function ys(e, t, n, o) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: o
  };
}
var ah = ys((e, t) => rh(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const o = n.symbolRegistry.getValue(t[1]);
  if (!o)
    throw new Error("Trying to deserialize unknown symbol");
  return o;
}), lb = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), lh = ys(sb, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = lb[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function uh(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var ch = ys(uh, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
  const n = t.classRegistry.getAllowedProps(e.constructor);
  if (!n)
    return { ...e };
  const o = {};
  return n.forEach((r) => {
    o[r] = e[r];
  }), o;
}, (e, t, n) => {
  const o = n.classRegistry.getValue(t[1]);
  if (!o)
    throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
  return Object.assign(Object.create(o.prototype), e);
}), fh = ys((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const o = n.customTransformerRegistry.findByName(t[1]);
  if (!o)
    throw new Error("Trying to deserialize unknown custom value");
  return o.deserialize(e);
}), ub = [ch, ah, fh, lh], Bc = (e, t) => {
  const n = Mc(ub, (r) => r.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const o = Mc(sh, (r) => r.isApplicable(e, t));
  if (o)
    return {
      value: o.transform(e, t),
      type: o.annotation
    };
}, dh = {};
sh.forEach((e) => {
  dh[e.annotation] = e;
});
var cb = (e, t, n) => {
  if (Vn(t))
    switch (t[0]) {
      case "symbol":
        return ah.untransform(e, t, n);
      case "class":
        return ch.untransform(e, t, n);
      case "custom":
        return fh.untransform(e, t, n);
      case "typed-array":
        return lh.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const o = dh[t];
    if (!o)
      throw new Error("Unknown transformation: " + t);
    return o.untransform(e, n);
  }
};
R();
var ko = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function ph(e) {
  if (Ii(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Ii(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Ii(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var fb = (e, t) => {
  ph(t);
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (jr(e))
      e = ko(e, +o);
    else if (Ur(e)) {
      const r = +o, i = +t[++n] == 0 ? "key" : "value", s = ko(e, r);
      switch (i) {
        case "key":
          e = s;
          break;
        case "value":
          e = e.get(s);
          break;
      }
    } else
      e = e[o];
  }
  return e;
}, ka = (e, t, n) => {
  if (ph(t), t.length === 0)
    return n(e);
  let o = e;
  for (let i = 0; i < t.length - 1; i++) {
    const s = t[i];
    if (Vn(o)) {
      const a = +s;
      o = o[a];
    } else if (Hr(o))
      o = o[s];
    else if (jr(o)) {
      const a = +s;
      o = ko(o, a);
    } else if (Ur(o)) {
      if (i === t.length - 2)
        break;
      const l = +s, f = +t[++i] == 0 ? "key" : "value", u = ko(o, l);
      switch (f) {
        case "key":
          o = u;
          break;
        case "value":
          o = o.get(u);
          break;
      }
    }
  }
  const r = t[t.length - 1];
  if (Vn(o) ? o[+r] = n(o[+r]) : Hr(o) && (o[r] = n(o[r])), jr(o)) {
    const i = ko(o, +r), s = n(i);
    i !== s && (o.delete(i), o.add(s));
  }
  if (Ur(o)) {
    const i = +t[t.length - 2], s = ko(o, i);
    switch (+r == 0 ? "key" : "value") {
      case "key": {
        const l = n(s);
        o.set(l, o.get(s)), l !== s && o.delete(s);
        break;
      }
      case "value": {
        o.set(s, n(o.get(s)));
        break;
      }
    }
  }
  return e;
};
function Ra(e, t, n = []) {
  if (!e)
    return;
  if (!Vn(e)) {
    Ko(e, (i, s) => Ra(i, t, [...n, ...Nr(s)]));
    return;
  }
  const [o, r] = e;
  r && Ko(r, (i, s) => {
    Ra(i, t, [...n, ...Nr(s)]);
  }), t(o, n);
}
function db(e, t, n) {
  return Ra(t, (o, r) => {
    e = ka(e, r, (i) => cb(i, o, n));
  }), e;
}
function pb(e, t) {
  function n(o, r) {
    const i = fb(e, Nr(r));
    o.map(Nr).forEach((s) => {
      e = ka(e, s, () => i);
    });
  }
  if (Vn(t)) {
    const [o, r] = t;
    o.forEach((i) => {
      e = ka(e, Nr(i), () => e);
    }), r && Ko(r, n);
  } else
    Ko(t, n);
  return e;
}
var hb = (e, t) => Hr(e) || Vn(e) || Ur(e) || jr(e) || uh(e, t);
function _b(e, t, n) {
  const o = n.get(e);
  o ? o.push(t) : n.set(e, [t]);
}
function mb(e, t) {
  const n = {};
  let o;
  return e.forEach((r) => {
    if (r.length <= 1)
      return;
    t || (r = r.map((a) => a.map(String)).sort((a, l) => a.length - l.length));
    const [i, ...s] = r;
    i.length === 0 ? o = s.map(Ks) : n[Ks(i)] = s.map(Ks);
  }), o ? $a(n) ? [o] : [o, n] : $a(n) ? void 0 : n;
}
var hh = (e, t, n, o, r = [], i = [], s = /* @__PURE__ */ new Map()) => {
  var a;
  const l = ob(e);
  if (!l) {
    _b(e, r, t);
    const _ = s.get(e);
    if (_)
      return o ? {
        transformedValue: null
      } : _;
  }
  if (!hb(e, n)) {
    const _ = Bc(e, n), g = _ ? {
      transformedValue: _.value,
      annotations: [_.type]
    } : {
      transformedValue: e
    };
    return l || s.set(e, g), g;
  }
  if (Ii(i, e))
    return {
      transformedValue: null
    };
  const f = Bc(e, n), u = (a = f?.value) != null ? a : e, c = Vn(u) ? [] : {}, d = {};
  Ko(u, (_, g) => {
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);
    const y = hh(_, t, n, o, [...r, g], [...i, e], s);
    c[g] = y.transformedValue, Vn(y.annotations) ? d[g] = y.annotations : Hr(y.annotations) && Ko(y.annotations, (E, O) => {
      d[ih(g) + "." + O] = E;
    });
  });
  const p = $a(d) ? {
    transformedValue: c,
    annotations: f ? [f.type] : void 0
  } : {
    transformedValue: c,
    annotations: f ? [f.type, d] : d
  };
  return l || s.set(e, p), p;
};
R();
R();
function _h(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Hc(e) {
  return _h(e) === "Array";
}
function gb(e) {
  if (_h(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function Eb(e, t, n, o, r) {
  const i = {}.propertyIsEnumerable.call(o, t) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (e[t] = n), r && i === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Va(e, t = {}) {
  if (Hc(e))
    return e.map((r) => Va(r, t));
  if (!gb(e))
    return e;
  const n = Object.getOwnPropertyNames(e), o = Object.getOwnPropertySymbols(e);
  return [...n, ...o].reduce((r, i) => {
    if (Hc(t.props) && !t.props.includes(i))
      return r;
    const s = e[i], a = Va(s, t);
    return Eb(r, i, a, e, t.nonenumerable), r;
  }, {});
}
var De = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new Wy(), this.symbolRegistry = new nh((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new Yy(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = hh(e, t, this, this.dedupe), o = {
      json: n.transformedValue
    };
    n.annotations && (o.meta = {
      ...o.meta,
      values: n.annotations
    });
    const r = mb(t, this.dedupe);
    return r && (o.meta = {
      ...o.meta,
      referentialEqualities: r
    }), o;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let o = Va(t);
    return n?.values && (o = db(o, n.values, this)), n?.referentialEqualities && (o = pb(o, n.referentialEqualities)), o;
  }
  stringify(e) {
    return JSON.stringify(this.serialize(e));
  }
  parse(e) {
    return this.deserialize(JSON.parse(e));
  }
  registerClass(e, t) {
    this.classRegistry.register(e, t);
  }
  registerSymbol(e, t) {
    this.symbolRegistry.register(e, t);
  }
  registerCustom(e, t) {
    this.customTransformerRegistry.register({
      name: t,
      ...e
    });
  }
  allowErrorProps(...e) {
    this.allowedErrorProps.push(...e);
  }
};
De.defaultInstance = new De();
De.serialize = De.defaultInstance.serialize.bind(De.defaultInstance);
De.deserialize = De.defaultInstance.deserialize.bind(De.defaultInstance);
De.stringify = De.defaultInstance.stringify.bind(De.defaultInstance);
De.parse = De.defaultInstance.parse.bind(De.defaultInstance);
De.registerClass = De.defaultInstance.registerClass.bind(De.defaultInstance);
De.registerSymbol = De.defaultInstance.registerSymbol.bind(De.defaultInstance);
De.registerCustom = De.defaultInstance.registerCustom.bind(De.defaultInstance);
De.allowErrorProps = De.defaultInstance.allowErrorProps.bind(De.defaultInstance);
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
R();
var Uc, jc;
(jc = (Uc = X).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (Uc.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var Kc, Wc;
(Wc = (Kc = X).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (Kc.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var zc, Gc;
(Gc = (zc = X).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (zc.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var Yc, qc;
(qc = (Yc = X).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (Yc.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var Xc, Qc;
(Qc = (Xc = X).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (Xc.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var Jc, Zc;
(Zc = (Jc = X).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (Jc.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
R();
R();
R();
R();
R();
R();
R();
var Er = {};
const vb = Er.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
var lo;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(lo || (lo = {}));
const Pa = typeof window < "u", ef = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function yb(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function $l(e, t, n) {
  const o = new XMLHttpRequest();
  o.open("GET", e), o.responseType = "blob", o.onload = function() {
    Eh(o.response, t, n);
  }, o.onerror = function() {
    console.error("could not download file");
  }, o.send();
}
function mh(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function $i(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = new MouseEvent("click", {
      bubbles: !0,
      cancelable: !0,
      view: window,
      detail: 0,
      screenX: 80,
      screenY: 20,
      clientX: 80,
      clientY: 20,
      ctrlKey: !1,
      altKey: !1,
      shiftKey: !1,
      metaKey: !1,
      button: 0,
      relatedTarget: null
    });
    e.dispatchEvent(n);
  }
}
const ki = typeof navigator == "object" ? navigator : { userAgent: "" }, gh = /Macintosh/.test(ki.userAgent) && /AppleWebKit/.test(ki.userAgent) && !/Safari/.test(ki.userAgent), Eh = Pa ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !gh ? bb : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in ki ? Ob : (
      // Fallback to using FileReader and a popup
      Ab
    )
  )
) : () => {
};
function bb(e, t = "download", n) {
  const o = document.createElement("a");
  o.download = t, o.rel = "noopener", typeof e == "string" ? (o.href = e, o.origin !== location.origin ? mh(o.href) ? $l(e, t, n) : (o.target = "_blank", $i(o)) : $i(o)) : (o.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(o.href);
  }, 4e4), setTimeout(function() {
    $i(o);
  }, 0));
}
function Ob(e, t = "download", n) {
  if (typeof e == "string")
    if (mh(e))
      $l(e, t, n);
    else {
      const o = document.createElement("a");
      o.href = e, o.target = "_blank", setTimeout(function() {
        $i(o);
      });
    }
  else
    navigator.msSaveOrOpenBlob(yb(e, n), t);
}
function Ab(e, t, n, o) {
  if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof e == "string")
    return $l(e, t, n);
  const r = e.type === "application/octet-stream", i = /constructor/i.test(String(ef.HTMLElement)) || "safari" in ef, s = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((s || r && i || gh) && typeof FileReader < "u") {
    const a = new FileReader();
    a.onloadend = function() {
      let l = a.result;
      if (typeof l != "string")
        throw o = null, new Error("Wrong reader.result type");
      l = s ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = l : location.assign(l), o = null;
    }, a.readAsDataURL(e);
  } else {
    const a = URL.createObjectURL(e);
    o ? o.location.assign(a) : location.href = a, o = null, setTimeout(function() {
      URL.revokeObjectURL(a);
    }, 4e4);
  }
}
function Ye(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function kl(e) {
  return "_a" in e && "install" in e;
}
function vh() {
  if (!("clipboard" in navigator))
    return Ye("Your browser doesn't support the Clipboard API", "error"), !0;
}
function yh(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (Ye('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function wb(e) {
  if (!vh())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), Ye("Global state copied to clipboard.");
    } catch (t) {
      if (yh(t))
        return;
      Ye("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Tb(e) {
  if (!vh())
    try {
      bh(e, JSON.parse(await navigator.clipboard.readText())), Ye("Global state pasted from clipboard.");
    } catch (t) {
      if (yh(t))
        return;
      Ye("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Nb(e) {
  try {
    Eh(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    Ye("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let an;
function Cb() {
  an || (an = document.createElement("input"), an.type = "file", an.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      an.onchange = async () => {
        const o = an.files;
        if (!o)
          return t(null);
        const r = o.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, an.oncancel = () => t(null), an.onerror = n, an.click();
    });
  }
  return e;
}
async function Sb(e) {
  try {
    const n = await Cb()();
    if (!n)
      return;
    const { text: o, file: r } = n;
    bh(e, JSON.parse(o)), Ye(`Global state imported from "${r.name}".`);
  } catch (t) {
    Ye("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function bh(e, t) {
  for (const n in t) {
    const o = e.state.value[n];
    o ? Object.assign(o, t[n]) : e.state.value[n] = t[n];
  }
}
function St(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Oh = "🍍 Pinia (root)", Ri = "_root";
function Db(e) {
  return kl(e) ? {
    id: Ri,
    label: Oh
  } : {
    id: e.$id,
    label: e.$id
  };
}
function xb(e) {
  if (kl(e)) {
    const n = Array.from(e._s.keys()), o = e._s;
    return {
      state: n.map((i) => ({
        editable: !0,
        key: i,
        value: e.state.value[i]
      })),
      getters: n.filter((i) => o.get(i)._getters).map((i) => {
        const s = o.get(i);
        return {
          editable: !1,
          key: i,
          value: s._getters.reduce((a, l) => (a[l] = s[l], a), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function Ib(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: St(e.type),
    key: St(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function $b(e) {
  switch (e) {
    case lo.direct:
      return "mutation";
    case lo.patchFunction:
      return "$patch";
    case lo.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Ro = !0;
const Vi = [], Xn = "pinia:mutations", Je = "pinia", { assign: kb } = Object, Ji = (e) => "🍍 " + e;
function Rb(e, t) {
  eh({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Vi,
    app: e
  }, (n) => {
    typeof n.now != "function" && Ye("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Xn,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: Je,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            wb(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Tb(t), n.sendInspectorTree(Je), n.sendInspectorState(Je);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Nb(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Sb(t), n.sendInspectorTree(Je), n.sendInspectorState(Je);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (o) => {
            const r = t._s.get(o);
            r ? typeof r.$reset != "function" ? Ye(`Cannot reset "${o}" store because it doesn't have a "$reset" method implemented.`, "warn") : (r.$reset(), Ye(`Store "${o}" reset.`)) : Ye(`Cannot reset "${o}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((o) => {
      const r = o.componentInstance && o.componentInstance.proxy;
      if (r && r._pStores) {
        const i = o.componentInstance.proxy._pStores;
        Object.values(i).forEach((s) => {
          o.instanceData.state.push({
            type: Ji(s.$id),
            key: "state",
            editable: !0,
            value: s._isOptionsAPI ? {
              _custom: {
                value: ae(s.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => s.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(s.$state).reduce((a, l) => (a[l] = s.$state[l], a), {})
            )
          }), s._getters && s._getters.length && o.instanceData.state.push({
            type: Ji(s.$id),
            key: "getters",
            editable: !1,
            value: s._getters.reduce((a, l) => {
              try {
                a[l] = s[l];
              } catch (f) {
                a[l] = f;
              }
              return a;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((o) => {
      if (o.app === e && o.inspectorId === Je) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), o.rootNodes = (o.filter ? r.filter((i) => "$id" in i ? i.$id.toLowerCase().includes(o.filter.toLowerCase()) : Oh.toLowerCase().includes(o.filter.toLowerCase())) : r).map(Db);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((o) => {
      if (o.app === e && o.inspectorId === Je) {
        const r = o.nodeId === Ri ? t : t._s.get(o.nodeId);
        if (!r)
          return;
        r && (o.nodeId !== Ri && (globalThis.$store = ae(r)), o.state = xb(r));
      }
    }), n.on.editInspectorState((o) => {
      if (o.app === e && o.inspectorId === Je) {
        const r = o.nodeId === Ri ? t : t._s.get(o.nodeId);
        if (!r)
          return Ye(`store "${o.nodeId}" not found`, "error");
        const { path: i } = o;
        kl(r) ? i.unshift("state") : (i.length !== 1 || !r._customProperties.has(i[0]) || i[0] in r.$state) && i.unshift("$state"), Ro = !1, o.set(r, i, o.state.value), Ro = !0;
      }
    }), n.on.editComponentState((o) => {
      if (o.type.startsWith("🍍")) {
        const r = o.type.replace(/^🍍\s*/, ""), i = t._s.get(r);
        if (!i)
          return Ye(`store "${r}" not found`, "error");
        const { path: s } = o;
        if (s[0] !== "state")
          return Ye(`Invalid path for store "${r}":
${s}
Only state can be modified.`);
        s[0] = "$state", Ro = !1, o.set(i, s, o.state.value), Ro = !0;
      }
    });
  });
}
function Vb(e, t) {
  Vi.includes(Ji(t.$id)) || Vi.push(Ji(t.$id)), eh({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Vi,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const o = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: s, onError: a, name: l, args: f }) => {
      const u = Ah++;
      n.addTimelineEvent({
        layerId: Xn,
        event: {
          time: o(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: St(t.$id),
            action: St(l),
            args: f
          },
          groupId: u
        }
      }), s((c) => {
        xn = void 0, n.addTimelineEvent({
          layerId: Xn,
          event: {
            time: o(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: St(t.$id),
              action: St(l),
              args: f,
              result: c
            },
            groupId: u
          }
        });
      }), a((c) => {
        xn = void 0, n.addTimelineEvent({
          layerId: Xn,
          event: {
            time: o(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: St(t.$id),
              action: St(l),
              args: f,
              error: c
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((s) => {
      kn(() => it(t[s]), (a, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(Je), Ro && n.addTimelineEvent({
          layerId: Xn,
          event: {
            time: o(),
            title: "Change",
            subtitle: s,
            data: {
              newValue: a,
              oldValue: l
            },
            groupId: xn
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: s, type: a }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(Je), !Ro)
        return;
      const f = {
        time: o(),
        title: $b(a),
        data: kb({ store: St(t.$id) }, Ib(s)),
        groupId: xn
      };
      a === lo.patchFunction ? f.subtitle = "⤵️" : a === lo.patchObject ? f.subtitle = "🧩" : s && !Array.isArray(s) && (f.subtitle = s.type), s && (f.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: s
        }
      }), n.addTimelineEvent({
        layerId: Xn,
        event: f
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = sl((s) => {
      r(s), n.addTimelineEvent({
        layerId: Xn,
        event: {
          time: o(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: St(t.$id),
            info: St("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(Je), n.sendInspectorState(Je);
    });
    const { $dispose: i } = t;
    t.$dispose = () => {
      i(), n.notifyComponentUpdate(), n.sendInspectorTree(Je), n.sendInspectorState(Je), n.getSettings().logStoreChanges && Ye(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(Je), n.sendInspectorState(Je), n.getSettings().logStoreChanges && Ye(`"${t.$id}" store installed 🆕`);
  });
}
let Ah = 0, xn;
function tf(e, t, n) {
  const o = t.reduce((r, i) => (r[i] = ae(e)[i], r), {});
  for (const r in o)
    e[r] = function() {
      const i = Ah, s = n ? new Proxy(e, {
        get(...l) {
          return xn = i, Reflect.get(...l);
        },
        set(...l) {
          return xn = i, Reflect.set(...l);
        }
      }) : e;
      xn = i;
      const a = o[r].apply(s, arguments);
      return xn = void 0, a;
    };
}
function Pb({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      tf(t, Object.keys(n.actions), t._isOptionsAPI);
      const o = t._hotUpdate;
      ae(t)._hotUpdate = function(r) {
        o.apply(this, arguments), tf(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    Vb(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function Lb() {
  const e = Em(!0), t = e.run(() => Oe({}));
  let n = [], o = [];
  const r = sl({
    install(i) {
      r._a = i, i.provide(vb, r), i.config.globalProperties.$pinia = r, Er.NODE_ENV !== "production" && Er.NODE_ENV !== "test" && Pa && Rb(i, r), o.forEach((s) => n.push(s)), o = [];
    },
    use(i) {
      return this._a ? n.push(i) : o.push(i), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return Er.NODE_ENV !== "production" && Er.NODE_ENV !== "test" && Pa && typeof Proxy < "u" && r.use(Pb), r;
}
function Mb() {
  return wh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function wh() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Fb = typeof Proxy == "function", Bb = "devtools-plugin:setup", Hb = "plugin:settings:set";
let To, La;
function Ub() {
  var e;
  return To !== void 0 || (typeof window < "u" && window.performance ? (To = !0, La = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (To = !0, La = globalThis.perf_hooks.performance) : To = !1), To;
}
function jb() {
  return Ub() ? La.now() : Date.now();
}
class Kb {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const s in t.settings) {
        const a = t.settings[s];
        o[s] = a.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let i = Object.assign({}, o);
    try {
      const s = localStorage.getItem(r), a = JSON.parse(s);
      Object.assign(i, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return i;
      },
      setSettings(s) {
        try {
          localStorage.setItem(r, JSON.stringify(s));
        } catch {
        }
        i = s;
      },
      now() {
        return jb();
      }
    }, n && n.on(Hb, (s, a) => {
      s === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (s, a) => this.target ? this.target.on[a] : (...l) => {
        this.onQueue.push({
          method: a,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (s, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...l) => (this.targetQueue.push({
        method: a,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[a](...l)) : (...l) => new Promise((f) => {
        this.targetQueue.push({
          method: a,
          args: l,
          resolve: f
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Wb(e, t) {
  const n = e, o = wh(), r = Mb(), i = Fb && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i))
    r.emit(Bb, e, t);
  else {
    const s = i ? new Kb(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: s
    }), s && t(s.proxiedTarget);
  }
}
var le = {};
const cn = typeof document < "u";
function Th(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function zb(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && Th(e.default);
}
const Ee = Object.assign;
function Ws(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = gt(r) ? r.map(e) : e(r);
  }
  return n;
}
const Cr = () => {
}, gt = Array.isArray;
function de(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Nh = /#/g, Gb = /&/g, Yb = /\//g, qb = /=/g, Xb = /\?/g, Ch = /\+/g, Qb = /%5B/g, Jb = /%5D/g, Sh = /%5E/g, Zb = /%60/g, Dh = /%7B/g, e0 = /%7C/g, xh = /%7D/g, t0 = /%20/g;
function Rl(e) {
  return encodeURI("" + e).replace(e0, "|").replace(Qb, "[").replace(Jb, "]");
}
function n0(e) {
  return Rl(e).replace(Dh, "{").replace(xh, "}").replace(Sh, "^");
}
function Ma(e) {
  return Rl(e).replace(Ch, "%2B").replace(t0, "+").replace(Nh, "%23").replace(Gb, "%26").replace(Zb, "`").replace(Dh, "{").replace(xh, "}").replace(Sh, "^");
}
function o0(e) {
  return Ma(e).replace(qb, "%3D");
}
function r0(e) {
  return Rl(e).replace(Nh, "%23").replace(Xb, "%3F");
}
function i0(e) {
  return e == null ? "" : r0(e).replace(Yb, "%2F");
}
function Wo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    le.NODE_ENV !== "production" && de(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const s0 = /\/$/, a0 = (e) => e.replace(s0, "");
function zs(e, t, n = "/") {
  let o, r = {}, i = "", s = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return a < l && a >= 0 && (l = -1), l > -1 && (o = t.slice(0, l), i = t.slice(l + 1, a > -1 ? a : t.length), r = e(i)), a > -1 && (o = o || t.slice(0, a), s = t.slice(a, t.length)), o = c0(o ?? t, n), {
    fullPath: o + (i && "?") + i + s,
    path: o,
    query: r,
    hash: Wo(s)
  };
}
function l0(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function nf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function of(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && Pn(t.matched[o], n.matched[r]) && Ih(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Pn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ih(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!u0(e[n], t[n]))
      return !1;
  return !0;
}
function u0(e, t) {
  return gt(e) ? rf(e, t) : gt(t) ? rf(t, e) : e === t;
}
function rf(e, t) {
  return gt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function c0(e, t) {
  if (e.startsWith("/"))
    return e;
  if (le.NODE_ENV !== "production" && !t.startsWith("/"))
    return de(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), r = o[o.length - 1];
  (r === ".." || r === ".") && o.push("");
  let i = n.length - 1, s, a;
  for (s = 0; s < o.length; s++)
    if (a = o[s], a !== ".")
      if (a === "..")
        i > 1 && i--;
      else
        break;
  return n.slice(0, i).join("/") + "/" + o.slice(s).join("/");
}
const An = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var Kr;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Kr || (Kr = {}));
var Sr;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Sr || (Sr = {}));
function f0(e) {
  if (!e)
    if (cn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), a0(e);
}
const d0 = /^[^#]+#/;
function p0(e, t) {
  return e.replace(d0, "#") + t;
}
function h0(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const bs = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function _0(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if (le.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const i = document.querySelector(e.el);
        if (o && i) {
          de(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        de(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) {
      le.NODE_ENV !== "production" && de(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = h0(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function sf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Fa = /* @__PURE__ */ new Map();
function m0(e, t) {
  Fa.set(e, t);
}
function g0(e) {
  const t = Fa.get(e);
  return Fa.delete(e), t;
}
let E0 = () => location.protocol + "//" + location.host;
function $h(e, t) {
  const { pathname: n, search: o, hash: r } = t, i = e.indexOf("#");
  if (i > -1) {
    let a = r.includes(e.slice(i)) ? e.slice(i).length : 1, l = r.slice(a);
    return l[0] !== "/" && (l = "/" + l), nf(l, "");
  }
  return nf(n, e) + o + r;
}
function v0(e, t, n, o) {
  let r = [], i = [], s = null;
  const a = ({ state: d }) => {
    const p = $h(e, location), _ = n.value, g = t.value;
    let y = 0;
    if (d) {
      if (n.value = p, t.value = d, s && s === _) {
        s = null;
        return;
      }
      y = g ? d.position - g.position : 0;
    } else
      o(p);
    r.forEach((E) => {
      E(n.value, _, {
        delta: y,
        type: Kr.pop,
        direction: y ? y > 0 ? Sr.forward : Sr.back : Sr.unknown
      });
    });
  };
  function l() {
    s = n.value;
  }
  function f(d) {
    r.push(d);
    const p = () => {
      const _ = r.indexOf(d);
      _ > -1 && r.splice(_, 1);
    };
    return i.push(p), p;
  }
  function u() {
    const { history: d } = window;
    d.state && d.replaceState(Ee({}, d.state, { scroll: bs() }), "");
  }
  function c() {
    for (const d of i)
      d();
    i = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: f,
    destroy: c
  };
}
function af(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? bs() : null
  };
}
function y0(e) {
  const { history: t, location: n } = window, o = {
    value: $h(e, n)
  }, r = { value: t.state };
  r.value || i(o.value, {
    back: null,
    current: o.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function i(l, f, u) {
    const c = e.indexOf("#"), d = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + l : E0() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](f, "", d), r.value = f;
    } catch (p) {
      le.NODE_ENV !== "production" ? de("Error with push/replace State", p) : console.error(p), n[u ? "replace" : "assign"](d);
    }
  }
  function s(l, f) {
    const u = Ee({}, t.state, af(
      r.value.back,
      // keep back and forward entries but override current position
      l,
      r.value.forward,
      !0
    ), f, { position: r.value.position });
    i(l, u, !0), o.value = l;
  }
  function a(l, f) {
    const u = Ee(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      r.value,
      t.state,
      {
        forward: l,
        scroll: bs()
      }
    );
    le.NODE_ENV !== "production" && !t.state && de(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), i(u.current, u, !0);
    const c = Ee({}, af(o.value, l, null), { position: u.position + 1 }, f);
    i(l, c, !1), o.value = l;
  }
  return {
    location: o,
    state: r,
    push: a,
    replace: s
  };
}
function b0(e) {
  e = f0(e);
  const t = y0(e), n = v0(e, t.state, t.location, t.replace);
  function o(i, s = !0) {
    s || n.pauseListeners(), history.go(i);
  }
  const r = Ee({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: p0.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function O0(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), le.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && de(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), b0(e);
}
function Zi(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function kh(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ba = Symbol(le.NODE_ENV !== "production" ? "navigation failure" : "");
var lf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(lf || (lf = {}));
const A0 = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${T0(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function zo(e, t) {
  return le.NODE_ENV !== "production" ? Ee(new Error(A0[e](t)), {
    type: e,
    [Ba]: !0
  }, t) : Ee(new Error(), {
    type: e,
    [Ba]: !0
  }, t);
}
function ln(e, t) {
  return e instanceof Error && Ba in e && (t == null || !!(e.type & t));
}
const w0 = ["params", "query", "hash"];
function T0(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of w0)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const uf = "[^/]+?", N0 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, C0 = /[.+*?^${}()[\]/\\]/g;
function S0(e, t) {
  const n = Ee({}, N0, t), o = [];
  let r = n.start ? "^" : "";
  const i = [];
  for (const f of e) {
    const u = f.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !f.length && (r += "/");
    for (let c = 0; c < f.length; c++) {
      const d = f[c];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        c || (r += "/"), r += d.value.replace(C0, "\\$&"), p += 40;
      else if (d.type === 1) {
        const { value: _, repeatable: g, optional: y, regexp: E } = d;
        i.push({
          name: _,
          repeatable: g,
          optional: y
        });
        const O = E || uf;
        if (O !== uf) {
          p += 10;
          try {
            new RegExp(`(${O})`);
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${_}" (${O}): ` + S.message);
          }
        }
        let v = g ? `((?:${O})(?:/(?:${O}))*)` : `(${O})`;
        c || (v = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        y && f.length < 2 ? `(?:/${v})` : "/" + v), y && (v += "?"), r += v, p += 20, y && (p += -8), g && (p += -20), O === ".*" && (p += -50);
      }
      u.push(p);
    }
    o.push(u);
  }
  if (n.strict && n.end) {
    const f = o.length - 1;
    o[f][o[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const s = new RegExp(r, n.sensitive ? "" : "i");
  function a(f) {
    const u = f.match(s), c = {};
    if (!u)
      return null;
    for (let d = 1; d < u.length; d++) {
      const p = u[d] || "", _ = i[d - 1];
      c[_.name] = p && _.repeatable ? p.split("/") : p;
    }
    return c;
  }
  function l(f) {
    let u = "", c = !1;
    for (const d of e) {
      (!c || !u.endsWith("/")) && (u += "/"), c = !1;
      for (const p of d)
        if (p.type === 0)
          u += p.value;
        else if (p.type === 1) {
          const { value: _, repeatable: g, optional: y } = p, E = _ in f ? f[_] : "";
          if (gt(E) && !g)
            throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
          const O = gt(E) ? E.join("/") : E;
          if (!O)
            if (y)
              d.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : c = !0);
            else
              throw new Error(`Missing required param "${_}"`);
          u += O;
        }
    }
    return u || "/";
  }
  return {
    re: s,
    score: o,
    keys: i,
    parse: a,
    stringify: l
  };
}
function D0(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Rh(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const i = D0(o[n], r[n]);
    if (i)
      return i;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (cf(o))
      return 1;
    if (cf(r))
      return -1;
  }
  return r.length - o.length;
}
function cf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const x0 = {
  type: 0,
  value: ""
}, I0 = /[a-zA-Z0-9_]/;
function $0(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[x0]];
  if (!e.startsWith("/"))
    throw new Error(le.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${f}": ${p}`);
  }
  let n = 0, o = n;
  const r = [];
  let i;
  function s() {
    i && r.push(i), i = [];
  }
  let a = 0, l, f = "", u = "";
  function c() {
    f && (n === 0 ? i.push({
      type: 0,
      value: f
    }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), i.push({
      type: 1,
      value: f,
      regexp: u,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), f = "");
  }
  function d() {
    f += l;
  }
  for (; a < e.length; ) {
    if (l = e[a++], l === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (f && c(), s()) : l === ":" ? (c(), n = 1) : d();
        break;
      case 4:
        d(), n = o;
        break;
      case 1:
        l === "(" ? n = 2 : I0.test(l) ? d() : (c(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
        break;
      case 3:
        c(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), c(), s(), r;
}
function k0(e, t, n) {
  const o = S0($0(e.path), n);
  if (le.NODE_ENV !== "production") {
    const i = /* @__PURE__ */ new Set();
    for (const s of o.keys)
      i.has(s.name) && de(`Found duplicated params with name "${s.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), i.add(s.name);
  }
  const r = Ee(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function R0(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = hf({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(c) {
    return o.get(c);
  }
  function i(c, d, p) {
    const _ = !p, g = df(c);
    le.NODE_ENV !== "production" && M0(g, d), g.aliasOf = p && p.record;
    const y = hf(t, c), E = [g];
    if ("alias" in c) {
      const S = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const T of S)
        E.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          df(Ee({}, g, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: p ? p.record.components : g.components,
            path: T,
            // we might be the child of an alias
            aliasOf: p ? p.record : g
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let O, v;
    for (const S of E) {
      const { path: T } = S;
      if (d && T[0] !== "/") {
        const N = d.record.path, L = N[N.length - 1] === "/" ? "" : "/";
        S.path = d.record.path + (T && L + T);
      }
      if (le.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (O = k0(S, d, y), le.NODE_ENV !== "production" && d && T[0] === "/" && B0(O, d), p ? (p.alias.push(O), le.NODE_ENV !== "production" && L0(p, O)) : (v = v || O, v !== O && v.alias.push(O), _ && c.name && !pf(O) && (le.NODE_ENV !== "production" && F0(c, d), s(c.name))), Vh(O) && l(O), g.children) {
        const N = g.children;
        for (let L = 0; L < N.length; L++)
          i(N[L], O, p && p.children[L]);
      }
      p = p || O;
    }
    return v ? () => {
      s(v);
    } : Cr;
  }
  function s(c) {
    if (kh(c)) {
      const d = o.get(c);
      d && (o.delete(c), n.splice(n.indexOf(d), 1), d.children.forEach(s), d.alias.forEach(s));
    } else {
      const d = n.indexOf(c);
      d > -1 && (n.splice(d, 1), c.record.name && o.delete(c.record.name), c.children.forEach(s), c.alias.forEach(s));
    }
  }
  function a() {
    return n;
  }
  function l(c) {
    const d = H0(c, n);
    n.splice(d, 0, c), c.record.name && !pf(c) && o.set(c.record.name, c);
  }
  function f(c, d) {
    let p, _ = {}, g, y;
    if ("name" in c && c.name) {
      if (p = o.get(c.name), !p)
        throw zo(1, {
          location: c
        });
      if (le.NODE_ENV !== "production") {
        const v = Object.keys(c.params || {}).filter((S) => !p.keys.find((T) => T.name === S));
        v.length && de(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      y = p.record.name, _ = Ee(
        // paramsFromLocation is a new object
        ff(
          d.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          p.keys.filter((v) => !v.optional).concat(p.parent ? p.parent.keys.filter((v) => v.optional) : []).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        c.params && ff(c.params, p.keys.map((v) => v.name))
      ), g = p.stringify(_);
    } else if (c.path != null)
      g = c.path, le.NODE_ENV !== "production" && !g.startsWith("/") && de(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), p = n.find((v) => v.re.test(g)), p && (_ = p.parse(g), y = p.record.name);
    else {
      if (p = d.name ? o.get(d.name) : n.find((v) => v.re.test(d.path)), !p)
        throw zo(1, {
          location: c,
          currentLocation: d
        });
      y = p.record.name, _ = Ee({}, d.params, c.params), g = p.stringify(_);
    }
    const E = [];
    let O = p;
    for (; O; )
      E.unshift(O.record), O = O.parent;
    return {
      name: y,
      path: g,
      params: _,
      matched: E,
      meta: P0(E)
    };
  }
  e.forEach((c) => i(c));
  function u() {
    n.length = 0, o.clear();
  }
  return {
    addRoute: i,
    resolve: f,
    removeRoute: s,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: r
  };
}
function ff(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function df(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: V0(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", {
    value: {}
  }), t;
}
function V0(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function pf(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function P0(e) {
  return e.reduce((t, n) => Ee(t, n.meta), {});
}
function hf(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Ha(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function L0(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Ha.bind(null, n)))
      return de(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Ha.bind(null, n)))
      return de(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function M0(e, t) {
  t && t.record.name && !e.name && !e.path && de(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function F0(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function B0(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Ha.bind(null, n)))
      return de(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function H0(e, t) {
  let n = 0, o = t.length;
  for (; n !== o; ) {
    const i = n + o >> 1;
    Rh(e, t[i]) < 0 ? o = i : n = i + 1;
  }
  const r = U0(e);
  return r && (o = t.lastIndexOf(r, o - 1), le.NODE_ENV !== "production" && o < 0 && de(`Finding ancestor route "${r.record.path}" failed for "${e.record.path}"`)), o;
}
function U0(e) {
  let t = e;
  for (; t = t.parent; )
    if (Vh(t) && Rh(e, t) === 0)
      return t;
}
function Vh({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function j0(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const i = o[r].replace(Ch, " "), s = i.indexOf("="), a = Wo(s < 0 ? i : i.slice(0, s)), l = s < 0 ? null : Wo(i.slice(s + 1));
    if (a in t) {
      let f = t[a];
      gt(f) || (f = t[a] = [f]), f.push(l);
    } else
      t[a] = l;
  }
  return t;
}
function _f(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = o0(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (gt(o) ? o.map((i) => i && Ma(i)) : [o && Ma(o)]).forEach((i) => {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
    });
  }
  return t;
}
function K0(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = gt(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const W0 = Symbol(le.NODE_ENV !== "production" ? "router view location matched" : ""), mf = Symbol(le.NODE_ENV !== "production" ? "router view depth" : ""), Vl = Symbol(le.NODE_ENV !== "production" ? "router" : ""), Ph = Symbol(le.NODE_ENV !== "production" ? "route location" : ""), Ua = Symbol(le.NODE_ENV !== "production" ? "router view location" : "");
function fr() {
  let e = [];
  function t(o) {
    return e.push(o), () => {
      const r = e.indexOf(o);
      r > -1 && e.splice(r, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function Sn(e, t, n, o, r, i = (s) => s()) {
  const s = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((a, l) => {
    const f = (d) => {
      d === !1 ? l(zo(4, {
        from: n,
        to: t
      })) : d instanceof Error ? l(d) : Zi(d) ? l(zo(2, {
        from: t,
        to: d
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[r] === s && typeof d == "function" && s.push(d), a());
    }, u = i(() => e.call(o && o.instances[r], t, n, le.NODE_ENV !== "production" ? z0(f, t, n) : f));
    let c = Promise.resolve(u);
    if (e.length < 3 && (c = c.then(f)), le.NODE_ENV !== "production" && e.length > 2) {
      const d = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        c = c.then((p) => f._called ? p : (de(d), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !f._called) {
        de(d), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    c.catch((d) => l(d));
  });
}
function z0(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && de(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Gs(e, t, n, o, r = (i) => i()) {
  const i = [];
  for (const s of e) {
    le.NODE_ENV !== "production" && !s.components && !s.children.length && de(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in s.components) {
      let l = s.components[a];
      if (le.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw de(`Component "${a}" in record with path "${s.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          de(`Component "${a}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = l;
          l = () => f;
        } else l.__asyncLoader && // warn only once per component
        !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, de(`Component "${a}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !s.instances[a]))
        if (Th(l)) {
          const u = (l.__vccOpts || l)[t];
          u && i.push(Sn(u, n, o, s, a, r));
        } else {
          let f = l();
          le.NODE_ENV !== "production" && !("catch" in f) && (de(`Component "${a}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), i.push(() => f.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);
            const c = zb(u) ? u.default : u;
            s.mods[a] = u, s.components[a] = c;
            const p = (c.__vccOpts || c)[t];
            return p && Sn(p, n, o, s, a, r)();
          }));
        }
    }
  }
  return i;
}
function gf(e) {
  const t = pn(Vl), n = pn(Ph);
  let o = !1, r = null;
  const i = Te(() => {
    const u = it(e.to);
    return le.NODE_ENV !== "production" && (!o || u !== r) && (Zi(u) || (o ? de(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, r, `
- props:`, e) : de(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), r = u, o = !0), t.resolve(u);
  }), s = Te(() => {
    const { matched: u } = i.value, { length: c } = u, d = u[c - 1], p = n.matched;
    if (!d || !p.length)
      return -1;
    const _ = p.findIndex(Pn.bind(null, d));
    if (_ > -1)
      return _;
    const g = Ef(u[c - 2]);
    return (
      // we are dealing with nested routes
      c > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Ef(d) === g && // avoid comparing the child with its parent
      p[p.length - 1].path !== g ? p.findIndex(Pn.bind(null, u[c - 2])) : _
    );
  }), a = Te(() => s.value > -1 && Q0(n.params, i.value.params)), l = Te(() => s.value > -1 && s.value === n.matched.length - 1 && Ih(n.params, i.value.params));
  function f(u = {}) {
    if (X0(u)) {
      const c = t[it(e.replace) ? "replace" : "push"](
        it(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(Cr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  if (le.NODE_ENV !== "production" && cn) {
    const u = Eo();
    if (u) {
      const c = {
        route: i.value,
        isActive: a.value,
        isExactActive: l.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(c), _l(() => {
        c.route = i.value, c.isActive = a.value, c.isExactActive = l.value, c.error = Zi(it(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: i,
    href: Te(() => i.value.href),
    isActive: a,
    isExactActive: l,
    navigate: f
  };
}
function G0(e) {
  return e.length === 1 ? e[0] : e;
}
const Y0 = /* @__PURE__ */ Qe({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink: gf,
  setup(e, { slots: t }) {
    const n = us(gf(e)), { options: o } = pn(Vl), r = Te(() => ({
      [vf(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [vf(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const i = t.default && G0(t.default(n));
      return e.custom ? i : yl("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: r.value
      }, i);
    };
  }
}), q0 = Y0;
function X0(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Q0(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r)
        return !1;
    } else if (!gt(r) || r.length !== o.length || o.some((i, s) => i !== r[s]))
      return !1;
  }
  return !0;
}
function Ef(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const vf = (e, t, n) => e ?? t ?? n, J0 = /* @__PURE__ */ Qe({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    le.NODE_ENV !== "production" && eO();
    const o = pn(Ua), r = Te(() => e.route || o.value), i = pn(mf, 0), s = Te(() => {
      let f = it(i);
      const { matched: u } = r.value;
      let c;
      for (; (c = u[f]) && !c.components; )
        f++;
      return f;
    }), a = Te(() => r.value.matched[s.value]);
    Ci(mf, Te(() => s.value + 1)), Ci(W0, a), Ci(Ua, r);
    const l = Oe();
    return kn(() => [l.value, a.value, e.name], ([f, u, c], [d, p, _]) => {
      u && (u.instances[c] = f, p && p !== u && f && f === d && (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards), u.updateGuards.size || (u.updateGuards = p.updateGuards))), f && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Pn(u, p) || !d) && (u.enterCallbacks[c] || []).forEach((g) => g(f));
    }, { flush: "post" }), () => {
      const f = r.value, u = e.name, c = a.value, d = c && c.components[u];
      if (!d)
        return yf(n.default, { Component: d, route: f });
      const p = c.props[u], _ = p ? p === !0 ? f.params : typeof p == "function" ? p(f) : p : null, y = yl(d, Ee({}, _, t, {
        onVnodeUnmounted: (E) => {
          E.component.isUnmounted && (c.instances[u] = null);
        },
        ref: l
      }));
      if (le.NODE_ENV !== "production" && cn && y.ref) {
        const E = {
          depth: s.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (gt(y.ref) ? y.ref.map((v) => v.i) : [y.ref.i]).forEach((v) => {
          v.__vrv_devtools = E;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        yf(n.default, { Component: y, route: f }) || y
      );
    };
  }
});
function yf(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Z0 = J0;
function eO() {
  const e = Eo(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    de(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function dr(e, t) {
  const n = Ee({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => fO(o, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function hi(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let tO = 0;
function nO(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = tO++;
  Wb({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (r) => {
    typeof r.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.on.inspectComponent((u, c) => {
      u.instanceData && u.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: dr(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: u, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const d = c.__vrv_devtools;
        u.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Lh
        });
      }
      gt(c.__vrl_devtools) && (c.__devtoolsApi = r, c.__vrl_devtools.forEach((d) => {
        let p = d.route.path, _ = Bh, g = "", y = 0;
        d.error ? (p = d.error, _ = aO, y = lO) : d.isExactActive ? (_ = Fh, g = "This is exactly active") : d.isActive && (_ = Mh, g = "This link is active"), u.tags.push({
          label: p,
          textColor: y,
          tooltip: g,
          backgroundColor: _
        });
      }));
    }), kn(t.currentRoute, () => {
      l(), r.notifyComponentUpdate(), r.sendInspectorTree(a), r.sendInspectorState(a);
    });
    const i = "router:navigations:" + o;
    r.addTimelineLayer({
      id: i,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((u, c) => {
      r.addTimelineEvent({
        layerId: i,
        event: {
          title: "Error during Navigation",
          subtitle: c.fullPath,
          logType: "error",
          time: r.now(),
          data: { error: u },
          groupId: c.meta.__navigationId
        }
      });
    });
    let s = 0;
    t.beforeEach((u, c) => {
      const d = {
        guard: hi("beforeEach"),
        from: dr(c, "Current Location during this navigation"),
        to: dr(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: s++
      }), r.addTimelineEvent({
        layerId: i,
        event: {
          time: r.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: d,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, c, d) => {
      const p = {
        guard: hi("afterEach")
      };
      d ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, p.status = hi("❌")) : p.status = hi("✅"), p.from = dr(c, "Current Location during this navigation"), p.to = dr(u, "Target location"), r.addTimelineEvent({
        layerId: i,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: r.now(),
          data: p,
          logType: d ? "warning" : "default",
          groupId: u.meta.__navigationId
        }
      });
    });
    const a = "router-inspector:" + o;
    r.addInspector({
      id: a,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function l() {
      if (!f)
        return;
      const u = f;
      let c = n.getRoutes().filter((d) => !d.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !d.parent.record.components);
      c.forEach(jh), u.filter && (c = c.filter((d) => (
        // save matches state based on the payload
        ja(d, u.filter.toLowerCase())
      ))), c.forEach((d) => Uh(d, t.currentRoute.value)), u.rootNodes = c.map(Hh);
    }
    let f;
    r.on.getInspectorTree((u) => {
      f = u, u.app === e && u.inspectorId === a && l();
    }), r.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === a) {
        const d = n.getRoutes().find((p) => p.record.__vd_id === u.nodeId);
        d && (u.state = {
          options: rO(d)
        });
      }
    }), r.sendInspectorTree(a), r.sendInspectorState(a);
  });
}
function oO(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function rO(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((o) => `${o.name}${oO(o)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((o) => o.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((o) => o.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const Lh = 15485081, Mh = 2450411, Fh = 8702998, iO = 2282478, Bh = 16486972, sO = 6710886, aO = 16704226, lO = 12131356;
function Hh(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: iO
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Bh
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Lh
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Fh
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Mh
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: sO
  });
  let o = n.__vd_id;
  return o == null && (o = String(uO++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Hh)
  };
}
let uO = 0;
const cO = /^\/(.*)\/([a-z]*)$/;
function Uh(e, t) {
  const n = t.matched.length && Pn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Pn(o, e.record))), e.children.forEach((o) => Uh(o, t));
}
function jh(e) {
  e.__vd_match = !1, e.children.forEach(jh);
}
function ja(e, t) {
  const n = String(e.re).match(cO);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((s) => ja(s, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), i = Wo(r);
  return !t.startsWith("/") && (i.includes(t) || r.includes(t)) || i.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((s) => ja(s, t));
}
function fO(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function dO(e) {
  const t = R0(e.routes, e), n = e.parseQuery || j0, o = e.stringifyQuery || _f, r = e.history;
  if (le.NODE_ENV !== "production" && !r)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const i = fr(), s = fr(), a = fr(), l = Fm(An);
  let f = An;
  cn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = Ws.bind(null, (w) => "" + w), c = Ws.bind(null, i0), d = (
    // @ts-expect-error: intentionally avoid the type check
    Ws.bind(null, Wo)
  );
  function p(w, K) {
    let z, Z;
    return kh(w) ? (z = t.getRecordMatcher(w), le.NODE_ENV !== "production" && !z && de(`Parent route "${String(w)}" not found when adding child route`, K), Z = K) : Z = w, t.addRoute(Z, z);
  }
  function _(w) {
    const K = t.getRecordMatcher(w);
    K ? t.removeRoute(K) : le.NODE_ENV !== "production" && de(`Cannot remove non-existent route "${String(w)}"`);
  }
  function g() {
    return t.getRoutes().map((w) => w.record);
  }
  function y(w) {
    return !!t.getRecordMatcher(w);
  }
  function E(w, K) {
    if (K = Ee({}, K || l.value), typeof w == "string") {
      const m = zs(n, w, K.path), A = t.resolve({ path: m.path }, K), I = r.createHref(m.fullPath);
      return le.NODE_ENV !== "production" && (I.startsWith("//") ? de(`Location "${w}" resolved to "${I}". A resolved location cannot start with multiple slashes.`) : A.matched.length || de(`No match found for location with path "${w}"`)), Ee(m, A, {
        params: d(A.params),
        hash: Wo(m.hash),
        redirectedFrom: void 0,
        href: I
      });
    }
    if (le.NODE_ENV !== "production" && !Zi(w))
      return de(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, w), E({});
    let z;
    if (w.path != null)
      le.NODE_ENV !== "production" && "params" in w && !("name" in w) && // @ts-expect-error: the type is never
      Object.keys(w.params).length && de(`Path "${w.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), z = Ee({}, w, {
        path: zs(n, w.path, K.path).path
      });
    else {
      const m = Ee({}, w.params);
      for (const A in m)
        m[A] == null && delete m[A];
      z = Ee({}, w, {
        params: c(m)
      }), K.params = c(K.params);
    }
    const Z = t.resolve(z, K), fe = w.hash || "";
    le.NODE_ENV !== "production" && fe && !fe.startsWith("#") && de(`A \`hash\` should always start with the character "#". Replace "${fe}" with "#${fe}".`), Z.params = u(d(Z.params));
    const Re = l0(o, Ee({}, w, {
      hash: n0(fe),
      path: Z.path
    })), h = r.createHref(Re);
    return le.NODE_ENV !== "production" && (h.startsWith("//") ? de(`Location "${w}" resolved to "${h}". A resolved location cannot start with multiple slashes.`) : Z.matched.length || de(`No match found for location with path "${w.path != null ? w.path : w}"`)), Ee({
      fullPath: Re,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: fe,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === _f ? K0(w.query) : w.query || {}
      )
    }, Z, {
      redirectedFrom: void 0,
      href: h
    });
  }
  function O(w) {
    return typeof w == "string" ? zs(n, w, l.value.path) : Ee({}, w);
  }
  function v(w, K) {
    if (f !== w)
      return zo(8, {
        from: K,
        to: w
      });
  }
  function S(w) {
    return L(w);
  }
  function T(w) {
    return S(Ee(O(w), { replace: !0 }));
  }
  function N(w) {
    const K = w.matched[w.matched.length - 1];
    if (K && K.redirect) {
      const { redirect: z } = K;
      let Z = typeof z == "function" ? z(w) : z;
      if (typeof Z == "string" && (Z = Z.includes("?") || Z.includes("#") ? Z = O(Z) : (
        // force empty params
        { path: Z }
      ), Z.params = {}), le.NODE_ENV !== "production" && Z.path == null && !("name" in Z))
        throw de(`Invalid redirect found:
${JSON.stringify(Z, null, 2)}
 when navigating to "${w.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Ee({
        query: w.query,
        hash: w.hash,
        // avoid transferring params if the redirect has a path
        params: Z.path != null ? {} : w.params
      }, Z);
    }
  }
  function L(w, K) {
    const z = f = E(w), Z = l.value, fe = w.state, Re = w.force, h = w.replace === !0, m = N(z);
    if (m)
      return L(
        Ee(O(m), {
          state: typeof m == "object" ? Ee({}, fe, m.state) : fe,
          force: Re,
          replace: h
        }),
        // keep original redirectedFrom if it exists
        K || z
      );
    const A = z;
    A.redirectedFrom = K;
    let I;
    return !Re && of(o, Z, z) && (I = zo(16, { to: A, from: Z }), Me(
      Z,
      Z,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (I ? Promise.resolve(I) : G(A, Z)).catch((C) => ln(C) ? (
      // navigation redirects still mark the router as ready
      ln(
        C,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? C : Le(C)
    ) : (
      // reject any unknown error
      J(C, A, Z)
    )).then((C) => {
      if (C) {
        if (ln(
          C,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return le.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          of(o, E(C.to), A) && // and we have done it a couple of times
          K && // @ts-expect-error: added only in dev
          (K._count = K._count ? (
            // @ts-expect-error
            K._count + 1
          ) : 1) > 30 ? (de(`Detected a possibly infinite redirection in a navigation guard when going from "${Z.fullPath}" to "${A.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : L(
            // keep options
            Ee({
              // preserve an existing replacement but allow the redirect to override it
              replace: h
            }, O(C.to), {
              state: typeof C.to == "object" ? Ee({}, fe, C.to.state) : fe,
              force: Re
            }),
            // preserve the original redirectedFrom if any
            K || A
          );
      } else
        C = D(A, Z, !0, h, fe);
      return Q(A, Z, C), C;
    });
  }
  function $(w, K) {
    const z = v(w, K);
    return z ? Promise.reject(z) : Promise.resolve();
  }
  function x(w) {
    const K = Ge.values().next().value;
    return K && typeof K.runWithContext == "function" ? K.runWithContext(w) : w();
  }
  function G(w, K) {
    let z;
    const [Z, fe, Re] = pO(w, K);
    z = Gs(Z.reverse(), "beforeRouteLeave", w, K);
    for (const m of Z)
      m.leaveGuards.forEach((A) => {
        z.push(Sn(A, w, K));
      });
    const h = $.bind(null, w, K);
    return z.push(h), ct(z).then(() => {
      z = [];
      for (const m of i.list())
        z.push(Sn(m, w, K));
      return z.push(h), ct(z);
    }).then(() => {
      z = Gs(fe, "beforeRouteUpdate", w, K);
      for (const m of fe)
        m.updateGuards.forEach((A) => {
          z.push(Sn(A, w, K));
        });
      return z.push(h), ct(z);
    }).then(() => {
      z = [];
      for (const m of Re)
        if (m.beforeEnter)
          if (gt(m.beforeEnter))
            for (const A of m.beforeEnter)
              z.push(Sn(A, w, K));
          else
            z.push(Sn(m.beforeEnter, w, K));
      return z.push(h), ct(z);
    }).then(() => (w.matched.forEach((m) => m.enterCallbacks = {}), z = Gs(Re, "beforeRouteEnter", w, K, x), z.push(h), ct(z))).then(() => {
      z = [];
      for (const m of s.list())
        z.push(Sn(m, w, K));
      return z.push(h), ct(z);
    }).catch((m) => ln(
      m,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? m : Promise.reject(m));
  }
  function Q(w, K, z) {
    a.list().forEach((Z) => x(() => Z(w, K, z)));
  }
  function D(w, K, z, Z, fe) {
    const Re = v(w, K);
    if (Re)
      return Re;
    const h = K === An, m = cn ? history.state : {};
    z && (Z || h ? r.replace(w.fullPath, Ee({
      scroll: h && m && m.scroll
    }, fe)) : r.push(w.fullPath, fe)), l.value = w, Me(w, K, z, h), Le();
  }
  let q;
  function ce() {
    q || (q = r.listen((w, K, z) => {
      if (!qe.listening)
        return;
      const Z = E(w), fe = N(Z);
      if (fe) {
        L(Ee(fe, { replace: !0, force: !0 }), Z).catch(Cr);
        return;
      }
      f = Z;
      const Re = l.value;
      cn && m0(sf(Re.fullPath, z.delta), bs()), G(Z, Re).catch((h) => ln(
        h,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? h : ln(
        h,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (L(
        Ee(O(h.to), {
          force: !0
        }),
        Z
        // avoid an uncaught rejection, let push call triggerError
      ).then((m) => {
        ln(
          m,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !z.delta && z.type === Kr.pop && r.go(-1, !1);
      }).catch(Cr), Promise.reject()) : (z.delta && r.go(-z.delta, !1), J(h, Z, Re))).then((h) => {
        h = h || D(
          // after navigation, all matched components are resolved
          Z,
          Re,
          !1
        ), h && (z.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !ln(
          h,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? r.go(-z.delta, !1) : z.type === Kr.pop && ln(
          h,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), Q(Z, Re, h);
      }).catch(Cr);
    }));
  }
  let pe = fr(), Y = fr(), F;
  function J(w, K, z) {
    Le(w);
    const Z = Y.list();
    return Z.length ? Z.forEach((fe) => fe(w, K, z)) : (le.NODE_ENV !== "production" && de("uncaught error during route navigation:"), console.error(w)), Promise.reject(w);
  }
  function _e() {
    return F && l.value !== An ? Promise.resolve() : new Promise((w, K) => {
      pe.add([w, K]);
    });
  }
  function Le(w) {
    return F || (F = !w, ce(), pe.list().forEach(([K, z]) => w ? z(w) : K()), pe.reset()), w;
  }
  function Me(w, K, z, Z) {
    const { scrollBehavior: fe } = e;
    if (!cn || !fe)
      return Promise.resolve();
    const Re = !z && g0(sf(w.fullPath, 0)) || (Z || !z) && history.state && history.state.scroll || null;
    return fs().then(() => fe(w, K, Re)).then((h) => h && _0(h)).catch((h) => J(h, w, K));
  }
  const Ne = (w) => r.go(w);
  let ke;
  const Ge = /* @__PURE__ */ new Set(), qe = {
    currentRoute: l,
    listening: !0,
    addRoute: p,
    removeRoute: _,
    clearRoutes: t.clearRoutes,
    hasRoute: y,
    getRoutes: g,
    resolve: E,
    options: e,
    push: S,
    replace: T,
    go: Ne,
    back: () => Ne(-1),
    forward: () => Ne(1),
    beforeEach: i.add,
    beforeResolve: s.add,
    afterEach: a.add,
    onError: Y.add,
    isReady: _e,
    install(w) {
      const K = this;
      w.component("RouterLink", q0), w.component("RouterView", Z0), w.config.globalProperties.$router = K, Object.defineProperty(w.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => it(l)
      }), cn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !ke && l.value === An && (ke = !0, S(r.location).catch((fe) => {
        le.NODE_ENV !== "production" && de("Unexpected error when starting the router:", fe);
      }));
      const z = {};
      for (const fe in An)
        Object.defineProperty(z, fe, {
          get: () => l.value[fe],
          enumerable: !0
        });
      w.provide(Vl, K), w.provide(Ph, xd(z)), w.provide(Ua, l);
      const Z = w.unmount;
      Ge.add(w), w.unmount = function() {
        Ge.delete(w), Ge.size < 1 && (f = An, q && q(), q = null, l.value = An, ke = !1, F = !1), Z();
      }, le.NODE_ENV !== "production" && cn && nO(w, K, t);
    }
  };
  function ct(w) {
    return w.reduce((K, z) => K.then(() => x(z)), Promise.resolve());
  }
  return qe;
}
function pO(e, t) {
  const n = [], o = [], r = [], i = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < i; s++) {
    const a = t.matched[s];
    a && (e.matched.find((f) => Pn(f, a)) ? o.push(a) : n.push(a));
    const l = e.matched[s];
    l && (t.matched.find((f) => Pn(f, l)) || r.push(l));
  }
  return [n, o, r];
}
const yn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, hO = {}, _O = { class: "d-flex gap-2" };
function mO(e, t) {
  const n = Bo("router-link");
  return oe(), ue("div", _O, [
    Se(n, { to: "/" }, {
      default: dn(() => t[0] || (t[0] = [
        At("Home")
      ])),
      _: 1,
      __: [0]
    }),
    Se(n, { to: "/setup" }, {
      default: dn(() => t[1] || (t[1] = [
        At("Setup")
      ])),
      _: 1,
      __: [1]
    }),
    Se(n, { to: "/monitor" }, {
      default: dn(() => t[2] || (t[2] = [
        At("Monitor")
      ])),
      _: 1,
      __: [2]
    })
  ]);
}
const gO = /* @__PURE__ */ yn(hO, [["render", mO]]), EO = /* @__PURE__ */ Qe({
  __name: "MainLayout",
  setup(e) {
    return (t, n) => {
      const o = Bo("router-view");
      return oe(), ue("div", null, [
        H("main", null, [
          Se(gO),
          Se(o)
        ])
      ]);
    };
  }
}), vO = /* @__PURE__ */ yn(EO, [["__scopeId", "data-v-a42a7003"]]), yO = {};
function bO(e, t) {
  return oe(), ue("div", null, " home ");
}
const OO = /* @__PURE__ */ yn(yO, [["render", bO]]), AO = {};
function wO(e, t) {
  return oe(), ue("div", null, t[0] || (t[0] = [
    H("label", { for: "ehr-dropdown" }, "FHIR Systems", -1),
    H("select", {
      class: "form-select form-select-sm",
      id: "ehr-dropdown"
    }, [
      H("option", { value: "" })
    ], -1)
  ]));
}
const TO = /* @__PURE__ */ yn(AO, [["render", wO]]), NO = {}, CO = { class: "d-flex" };
function SO(e, t) {
  return oe(), ue("div", CO, t[0] || (t[0] = [
    vE('<div class="me-auto"><span>Resources</span></div><div class="d-flex gap-2"><button class="btn btn-sm btn-primary"><i class="fas fa-upload fa-fw"></i><span>Import</span></button><button class="btn btn-sm btn-primary"><i class="fas fa-download fa-fw"></i><span>Export</span></button><button class="btn btn-sm btn-primary"><i class="fas fa-plus fa-fw"></i><span>Add</span></button></div>', 2)
  ]));
}
const DO = /* @__PURE__ */ yn(NO, [["render", SO]]), xO = {}, IO = { class: "table table-striped table-hover table-sm border-top" };
function $O(e, t) {
  return oe(), ue("table", IO, t[0] || (t[0] = [
    H("thead", null, [
      H("tr", null, [
        H("th", null, "Name"),
        H("th", null, "Type"),
        H("th", null, "Parameters")
      ])
    ], -1),
    H("tbody", null, [
      H("tr", null, [
        H("td", { colspan: "3" }, "nothing to see here")
      ])
    ], -1)
  ]));
}
const kO = /* @__PURE__ */ yn(xO, [["render", $O]]), RO = { class: "card" }, VO = { class: "card-body px-0 py-2" }, PO = { class: "p-2" }, LO = /* @__PURE__ */ Qe({
  __name: "SetupPage",
  setup(e) {
    return (t, n) => (oe(), ue("div", null, [
      Se(TO),
      H("div", RO, [
        H("div", VO, [
          H("div", PO, [
            Se(DO)
          ]),
          Se(kO)
        ])
      ])
    ]));
  }
}), MO = {};
function FO(e, t) {
  return oe(), ue("div", null, " monitor ");
}
const BO = /* @__PURE__ */ yn(MO, [["render", FO]]), HO = {}, UO = { class: "error-wrapper" }, jO = { class: "mt-5" };
function KO(e, t) {
  const n = Bo("router-link");
  return oe(), ue("div", UO, [
    he(e.$slots, "title", {}, () => [
      t[0] || (t[0] = H("span", { class: "error-title" }, "Error 404", -1))
    ], !0),
    he(e.$slots, "description", {}, () => [
      t[1] || (t[1] = H("span", { class: "error-description" }, "Sorry, we couldn't find this page.", -1))
    ], !0),
    he(e.$slots, "subdescription", {}, () => [
      t[2] || (t[2] = H("span", { class: "error-sub-description" }, "But dont worry, you can find plenty of other things on the homepage..", -1))
    ], !0),
    H("div", jO, [
      Se(n, {
        to: "/",
        class: "btn btn-sm btn-primary"
      }, {
        default: dn(() => t[3] || (t[3] = [
          H("i", { class: "fas fa-arrow-left fa-fw me-1" }, null, -1),
          H("span", null, "Back to Home", -1)
        ])),
        _: 1,
        __: [3]
      })
    ])
  ]);
}
const WO = /* @__PURE__ */ yn(HO, [["render", KO], ["__scopeId", "data-v-d4f8fed2"]]), zO = [
  {
    path: "/",
    component: vO,
    children: [
      { path: "", name: "home", component: OO },
      { path: "setup", name: "setup", component: LO },
      { path: "monitor", name: "monitor", component: BO },
      { path: "/:pathMatch(.*)*", component: WO }
    ]
  }
];
let _i;
const GO = () => _i || (_i = dO({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: O0(),
  routes: zO
}), _i), YO = {};
function qO(e, t) {
  const n = Bo("router-view");
  return oe(), ue(Ie, null, [
    t[0] || (t[0] = H("div", { class: "card" }, [
      H("div", { class: "card-body" }, [
        H("p", null, "FHIR Snapshot")
      ])
    ], -1)),
    Se(n)
  ], 64);
}
const XO = /* @__PURE__ */ yn(YO, [["render", qO]]);
var lt = "top", Et = "bottom", vt = "right", ut = "left", Os = "auto", rr = [lt, Et, vt, ut], _o = "start", Go = "end", Kh = "clippingParents", Pl = "viewport", xo = "popper", Wh = "reference", Ka = /* @__PURE__ */ rr.reduce(function(e, t) {
  return e.concat([t + "-" + _o, t + "-" + Go]);
}, []), Ll = /* @__PURE__ */ [].concat(rr, [Os]).reduce(function(e, t) {
  return e.concat([t, t + "-" + _o, t + "-" + Go]);
}, []), zh = "beforeRead", Gh = "read", Yh = "afterRead", qh = "beforeMain", Xh = "main", Qh = "afterMain", Jh = "beforeWrite", Zh = "write", e_ = "afterWrite", t_ = [zh, Gh, Yh, qh, Xh, Qh, Jh, Zh, e_];
function tn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function yt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function mo(e) {
  var t = yt(e).Element;
  return e instanceof t || e instanceof Element;
}
function wt(e) {
  var t = yt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ml(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = yt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function QO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
    !wt(i) || !tn(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(s) {
      var a = r[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function JO(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], i = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = s.reduce(function(l, f) {
        return l[f] = "", l;
      }, {});
      !wt(r) || !tn(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
const Fl = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: QO,
  effect: JO,
  requires: ["computeStyles"]
};
function Xt(e) {
  return e.split("-")[0];
}
var uo = Math.max, es = Math.min, Yo = Math.round;
function Wa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function n_() {
  return !/^((?!chrome|android).)*safari/i.test(Wa());
}
function qo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, i = 1;
  t && wt(e) && (r = e.offsetWidth > 0 && Yo(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Yo(o.height) / e.offsetHeight || 1);
  var s = mo(e) ? yt(e) : window, a = s.visualViewport, l = !n_() && n, f = (o.left + (l && a ? a.offsetLeft : 0)) / r, u = (o.top + (l && a ? a.offsetTop : 0)) / i, c = o.width / r, d = o.height / i;
  return {
    width: c,
    height: d,
    top: u,
    right: f + c,
    bottom: u + d,
    left: f,
    x: f,
    y: u
  };
}
function Bl(e) {
  var t = qo(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function o_(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ml(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function mn(e) {
  return yt(e).getComputedStyle(e);
}
function ZO(e) {
  return ["table", "td", "th"].indexOf(tn(e)) >= 0;
}
function Hn(e) {
  return ((mo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function As(e) {
  return tn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ml(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Hn(e)
  );
}
function bf(e) {
  return !wt(e) || // https://github.com/popperjs/popper-core/issues/837
  mn(e).position === "fixed" ? null : e.offsetParent;
}
function eA(e) {
  var t = /firefox/i.test(Wa()), n = /Trident/i.test(Wa());
  if (n && wt(e)) {
    var o = mn(e);
    if (o.position === "fixed")
      return null;
  }
  var r = As(e);
  for (Ml(r) && (r = r.host); wt(r) && ["html", "body"].indexOf(tn(r)) < 0; ) {
    var i = mn(r);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function ni(e) {
  for (var t = yt(e), n = bf(e); n && ZO(n) && mn(n).position === "static"; )
    n = bf(n);
  return n && (tn(n) === "html" || tn(n) === "body" && mn(n).position === "static") ? t : n || eA(e) || t;
}
function Hl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Dr(e, t, n) {
  return uo(e, es(t, n));
}
function tA(e, t, n) {
  var o = Dr(e, t, n);
  return o > n ? n : o;
}
function r_() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function i_(e) {
  return Object.assign({}, r_(), e);
}
function s_(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var nA = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, i_(typeof t != "number" ? t : s_(t, rr));
};
function oA(e) {
  var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = Xt(n.placement), l = Hl(a), f = [ut, vt].indexOf(a) >= 0, u = f ? "height" : "width";
  if (!(!i || !s)) {
    var c = nA(r.padding, n), d = Bl(i), p = l === "y" ? lt : ut, _ = l === "y" ? Et : vt, g = n.rects.reference[u] + n.rects.reference[l] - s[l] - n.rects.popper[u], y = s[l] - n.rects.reference[l], E = ni(i), O = E ? l === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, v = g / 2 - y / 2, S = c[p], T = O - d[u] - c[_], N = O / 2 - d[u] / 2 + v, L = Dr(S, N, T), $ = l;
    n.modifiersData[o] = (t = {}, t[$] = L, t.centerOffset = L - N, t);
  }
}
function rA(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || o_(t.elements.popper, r) && (t.elements.arrow = r));
}
const a_ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: oA,
  effect: rA,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Xo(e) {
  return e.split("-")[1];
}
var iA = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function sA(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return {
    x: Yo(n * r) / r || 0,
    y: Yo(o * r) / r || 0
  };
}
function Of(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, i = e.variation, s = e.offsets, a = e.position, l = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, c = e.isFixed, d = s.x, p = d === void 0 ? 0 : d, _ = s.y, g = _ === void 0 ? 0 : _, y = typeof u == "function" ? u({
    x: p,
    y: g
  }) : {
    x: p,
    y: g
  };
  p = y.x, g = y.y;
  var E = s.hasOwnProperty("x"), O = s.hasOwnProperty("y"), v = ut, S = lt, T = window;
  if (f) {
    var N = ni(n), L = "clientHeight", $ = "clientWidth";
    if (N === yt(n) && (N = Hn(n), mn(N).position !== "static" && a === "absolute" && (L = "scrollHeight", $ = "scrollWidth")), N = N, r === lt || (r === ut || r === vt) && i === Go) {
      S = Et;
      var x = c && N === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        N[L]
      );
      g -= x - o.height, g *= l ? 1 : -1;
    }
    if (r === ut || (r === lt || r === Et) && i === Go) {
      v = vt;
      var G = c && N === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        N[$]
      );
      p -= G - o.width, p *= l ? 1 : -1;
    }
  }
  var Q = Object.assign({
    position: a
  }, f && iA), D = u === !0 ? sA({
    x: p,
    y: g
  }, yt(n)) : {
    x: p,
    y: g
  };
  if (p = D.x, g = D.y, l) {
    var q;
    return Object.assign({}, Q, (q = {}, q[S] = O ? "0" : "", q[v] = E ? "0" : "", q.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", q));
  }
  return Object.assign({}, Q, (t = {}, t[S] = O ? g + "px" : "", t[v] = E ? p + "px" : "", t.transform = "", t));
}
function aA(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, l = a === void 0 ? !0 : a, f = {
    placement: Xt(t.placement),
    variation: Xo(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: r,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Of(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Of(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Ul = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: aA,
  data: {}
};
var mi = {
  passive: !0
};
function lA(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, i = r === void 0 ? !0 : r, s = o.resize, a = s === void 0 ? !0 : s, l = yt(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(u) {
    u.addEventListener("scroll", n.update, mi);
  }), a && l.addEventListener("resize", n.update, mi), function() {
    i && f.forEach(function(u) {
      u.removeEventListener("scroll", n.update, mi);
    }), a && l.removeEventListener("resize", n.update, mi);
  };
}
const jl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: lA,
  data: {}
};
var uA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return uA[t];
  });
}
var cA = {
  start: "end",
  end: "start"
};
function Af(e) {
  return e.replace(/start|end/g, function(t) {
    return cA[t];
  });
}
function Kl(e) {
  var t = yt(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function Wl(e) {
  return qo(Hn(e)).left + Kl(e).scrollLeft;
}
function fA(e, t) {
  var n = yt(e), o = Hn(e), r = n.visualViewport, i = o.clientWidth, s = o.clientHeight, a = 0, l = 0;
  if (r) {
    i = r.width, s = r.height;
    var f = n_();
    (f || !f && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + Wl(e),
    y: l
  };
}
function dA(e) {
  var t, n = Hn(e), o = Kl(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = uo(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = uo(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + Wl(e), l = -o.scrollTop;
  return mn(r || n).direction === "rtl" && (a += uo(n.clientWidth, r ? r.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function zl(e) {
  var t = mn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function l_(e) {
  return ["html", "body", "#document"].indexOf(tn(e)) >= 0 ? e.ownerDocument.body : wt(e) && zl(e) ? e : l_(As(e));
}
function xr(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = l_(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = yt(o), s = r ? [i].concat(i.visualViewport || [], zl(o) ? o : []) : o, a = t.concat(s);
  return r ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(xr(As(s)))
  );
}
function za(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function pA(e, t) {
  var n = qo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function wf(e, t, n) {
  return t === Pl ? za(fA(e, n)) : mo(t) ? pA(t, n) : za(dA(Hn(e)));
}
function hA(e) {
  var t = xr(As(e)), n = ["absolute", "fixed"].indexOf(mn(e).position) >= 0, o = n && wt(e) ? ni(e) : e;
  return mo(o) ? t.filter(function(r) {
    return mo(r) && o_(r, o) && tn(r) !== "body";
  }) : [];
}
function _A(e, t, n, o) {
  var r = t === "clippingParents" ? hA(e) : [].concat(t), i = [].concat(r, [n]), s = i[0], a = i.reduce(function(l, f) {
    var u = wf(e, f, o);
    return l.top = uo(u.top, l.top), l.right = es(u.right, l.right), l.bottom = es(u.bottom, l.bottom), l.left = uo(u.left, l.left), l;
  }, wf(e, s, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function u_(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Xt(o) : null, i = o ? Xo(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case lt:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Et:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case vt:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case ut:
      l = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var f = r ? Hl(r) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (i) {
      case _o:
        l[f] = l[f] - (t[u] / 2 - n[u] / 2);
        break;
      case Go:
        l[f] = l[f] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Qo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, l = a === void 0 ? Kh : a, f = n.rootBoundary, u = f === void 0 ? Pl : f, c = n.elementContext, d = c === void 0 ? xo : c, p = n.altBoundary, _ = p === void 0 ? !1 : p, g = n.padding, y = g === void 0 ? 0 : g, E = i_(typeof y != "number" ? y : s_(y, rr)), O = d === xo ? Wh : xo, v = e.rects.popper, S = e.elements[_ ? O : d], T = _A(mo(S) ? S : S.contextElement || Hn(e.elements.popper), l, u, s), N = qo(e.elements.reference), L = u_({
    reference: N,
    element: v,
    placement: r
  }), $ = za(Object.assign({}, v, L)), x = d === xo ? $ : N, G = {
    top: T.top - x.top + E.top,
    bottom: x.bottom - T.bottom + E.bottom,
    left: T.left - x.left + E.left,
    right: x.right - T.right + E.right
  }, Q = e.modifiersData.offset;
  if (d === xo && Q) {
    var D = Q[r];
    Object.keys(G).forEach(function(q) {
      var ce = [vt, Et].indexOf(q) >= 0 ? 1 : -1, pe = [lt, Et].indexOf(q) >= 0 ? "y" : "x";
      G[q] += D[pe] * ce;
    });
  }
  return G;
}
function mA(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, f = l === void 0 ? Ll : l, u = Xo(o), c = u ? a ? Ka : Ka.filter(function(_) {
    return Xo(_) === u;
  }) : rr, d = c.filter(function(_) {
    return f.indexOf(_) >= 0;
  });
  d.length === 0 && (d = c);
  var p = d.reduce(function(_, g) {
    return _[g] = Qo(e, {
      placement: g,
      boundary: r,
      rootBoundary: i,
      padding: s
    })[Xt(g)], _;
  }, {});
  return Object.keys(p).sort(function(_, g) {
    return p[_] - p[g];
  });
}
function gA(e) {
  if (Xt(e) === Os)
    return [];
  var t = Pi(e);
  return [Af(e), t, Af(t)];
}
function EA(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, i = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !0 : s, l = n.fallbackPlacements, f = n.padding, u = n.boundary, c = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, _ = p === void 0 ? !0 : p, g = n.allowedAutoPlacements, y = t.options.placement, E = Xt(y), O = E === y, v = l || (O || !_ ? [Pi(y)] : gA(y)), S = [y].concat(v).reduce(function(Ge, qe) {
      return Ge.concat(Xt(qe) === Os ? mA(t, {
        placement: qe,
        boundary: u,
        rootBoundary: c,
        padding: f,
        flipVariations: _,
        allowedAutoPlacements: g
      }) : qe);
    }, []), T = t.rects.reference, N = t.rects.popper, L = /* @__PURE__ */ new Map(), $ = !0, x = S[0], G = 0; G < S.length; G++) {
      var Q = S[G], D = Xt(Q), q = Xo(Q) === _o, ce = [lt, Et].indexOf(D) >= 0, pe = ce ? "width" : "height", Y = Qo(t, {
        placement: Q,
        boundary: u,
        rootBoundary: c,
        altBoundary: d,
        padding: f
      }), F = ce ? q ? vt : ut : q ? Et : lt;
      T[pe] > N[pe] && (F = Pi(F));
      var J = Pi(F), _e = [];
      if (i && _e.push(Y[D] <= 0), a && _e.push(Y[F] <= 0, Y[J] <= 0), _e.every(function(Ge) {
        return Ge;
      })) {
        x = Q, $ = !1;
        break;
      }
      L.set(Q, _e);
    }
    if ($)
      for (var Le = _ ? 3 : 1, Me = function(qe) {
        var ct = S.find(function(w) {
          var K = L.get(w);
          if (K)
            return K.slice(0, qe).every(function(z) {
              return z;
            });
        });
        if (ct)
          return x = ct, "break";
      }, Ne = Le; Ne > 0; Ne--) {
        var ke = Me(Ne);
        if (ke === "break") break;
      }
    t.placement !== x && (t.modifiersData[o]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const c_ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: EA,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Tf(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Nf(e) {
  return [lt, vt, Et, ut].some(function(t) {
    return e[t] >= 0;
  });
}
function vA(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, i = t.modifiersData.preventOverflow, s = Qo(t, {
    elementContext: "reference"
  }), a = Qo(t, {
    altBoundary: !0
  }), l = Tf(s, o), f = Tf(a, r, i), u = Nf(l), c = Nf(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: f,
    isReferenceHidden: u,
    hasPopperEscaped: c
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": c
  });
}
const f_ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: vA
};
function yA(e, t, n) {
  var o = Xt(e), r = [ut, lt].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * r, [ut, vt].indexOf(o) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function bA(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, i = r === void 0 ? [0, 0] : r, s = Ll.reduce(function(u, c) {
    return u[c] = yA(c, t.rects, i), u;
  }, {}), a = s[t.placement], l = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += f), t.modifiersData[o] = s;
}
const d_ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: bA
};
function OA(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = u_({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Gl = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: OA,
  data: {}
};
function AA(e) {
  return e === "x" ? "y" : "x";
}
function wA(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, i = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !1 : s, l = n.boundary, f = n.rootBoundary, u = n.altBoundary, c = n.padding, d = n.tether, p = d === void 0 ? !0 : d, _ = n.tetherOffset, g = _ === void 0 ? 0 : _, y = Qo(t, {
    boundary: l,
    rootBoundary: f,
    padding: c,
    altBoundary: u
  }), E = Xt(t.placement), O = Xo(t.placement), v = !O, S = Hl(E), T = AA(S), N = t.modifiersData.popperOffsets, L = t.rects.reference, $ = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, G = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), Q = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (N) {
    if (i) {
      var q, ce = S === "y" ? lt : ut, pe = S === "y" ? Et : vt, Y = S === "y" ? "height" : "width", F = N[S], J = F + y[ce], _e = F - y[pe], Le = p ? -$[Y] / 2 : 0, Me = O === _o ? L[Y] : $[Y], Ne = O === _o ? -$[Y] : -L[Y], ke = t.elements.arrow, Ge = p && ke ? Bl(ke) : {
        width: 0,
        height: 0
      }, qe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : r_(), ct = qe[ce], w = qe[pe], K = Dr(0, L[Y], Ge[Y]), z = v ? L[Y] / 2 - Le - K - ct - G.mainAxis : Me - K - ct - G.mainAxis, Z = v ? -L[Y] / 2 + Le + K + w + G.mainAxis : Ne + K + w + G.mainAxis, fe = t.elements.arrow && ni(t.elements.arrow), Re = fe ? S === "y" ? fe.clientTop || 0 : fe.clientLeft || 0 : 0, h = (q = Q?.[S]) != null ? q : 0, m = F + z - h - Re, A = F + Z - h, I = Dr(p ? es(J, m) : J, F, p ? uo(_e, A) : _e);
      N[S] = I, D[S] = I - F;
    }
    if (a) {
      var C, k = S === "x" ? lt : ut, W = S === "x" ? Et : vt, B = N[T], U = T === "y" ? "height" : "width", P = B + y[k], ne = B - y[W], j = [lt, ut].indexOf(E) !== -1, te = (C = Q?.[T]) != null ? C : 0, se = j ? P : B - L[U] - $[U] - te + G.altAxis, me = j ? B + L[U] + $[U] - te - G.altAxis : ne, ye = p && j ? tA(se, B, me) : Dr(p ? se : P, B, p ? me : ne);
      N[T] = ye, D[T] = ye - B;
    }
    t.modifiersData[o] = D;
  }
}
const p_ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: wA,
  requiresIfExists: ["offset"]
};
function TA(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function NA(e) {
  return e === yt(e) || !wt(e) ? Kl(e) : TA(e);
}
function CA(e) {
  var t = e.getBoundingClientRect(), n = Yo(t.width) / e.offsetWidth || 1, o = Yo(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function SA(e, t, n) {
  n === void 0 && (n = !1);
  var o = wt(t), r = wt(t) && CA(t), i = Hn(t), s = qo(e, r, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((tn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  zl(i)) && (a = NA(t)), wt(t) ? (l = qo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Wl(i))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function DA(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function r(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && r(l);
      }
    }), o.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || r(i);
  }), o;
}
function xA(e) {
  var t = DA(e);
  return t_.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function IA(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function $A(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, {
      options: Object.assign({}, r.options, o.options),
      data: Object.assign({}, r.data, o.data)
    }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Cf = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Sf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function ws(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, i = r === void 0 ? Cf : r;
  return function(a, l, f) {
    f === void 0 && (f = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Cf, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, c = [], d = !1, p = {
      state: u,
      setOptions: function(E) {
        var O = typeof E == "function" ? E(u.options) : E;
        g(), u.options = Object.assign({}, i, u.options, O), u.scrollParents = {
          reference: mo(a) ? xr(a) : a.contextElement ? xr(a.contextElement) : [],
          popper: xr(l)
        };
        var v = xA($A([].concat(o, u.options.modifiers)));
        return u.orderedModifiers = v.filter(function(S) {
          return S.enabled;
        }), _(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var E = u.elements, O = E.reference, v = E.popper;
          if (Sf(O, v)) {
            u.rects = {
              reference: SA(O, ni(v), u.options.strategy === "fixed"),
              popper: Bl(v)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(G) {
              return u.modifiersData[G.name] = Object.assign({}, G.data);
            });
            for (var S = 0; S < u.orderedModifiers.length; S++) {
              if (u.reset === !0) {
                u.reset = !1, S = -1;
                continue;
              }
              var T = u.orderedModifiers[S], N = T.fn, L = T.options, $ = L === void 0 ? {} : L, x = T.name;
              typeof N == "function" && (u = N({
                state: u,
                options: $,
                name: x,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: IA(function() {
        return new Promise(function(y) {
          p.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        g(), d = !0;
      }
    };
    if (!Sf(a, l))
      return p;
    p.setOptions(f).then(function(y) {
      !d && f.onFirstUpdate && f.onFirstUpdate(y);
    });
    function _() {
      u.orderedModifiers.forEach(function(y) {
        var E = y.name, O = y.options, v = O === void 0 ? {} : O, S = y.effect;
        if (typeof S == "function") {
          var T = S({
            state: u,
            name: E,
            instance: p,
            options: v
          }), N = function() {
          };
          c.push(T || N);
        }
      });
    }
    function g() {
      c.forEach(function(y) {
        return y();
      }), c = [];
    }
    return p;
  };
}
var kA = /* @__PURE__ */ ws(), RA = [jl, Gl, Ul, Fl], VA = /* @__PURE__ */ ws({
  defaultModifiers: RA
}), PA = [jl, Gl, Ul, Fl, d_, c_, p_, a_, f_], Yl = /* @__PURE__ */ ws({
  defaultModifiers: PA
});
const h_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: Qh,
  afterRead: Yh,
  afterWrite: e_,
  applyStyles: Fl,
  arrow: a_,
  auto: Os,
  basePlacements: rr,
  beforeMain: qh,
  beforeRead: zh,
  beforeWrite: Jh,
  bottom: Et,
  clippingParents: Kh,
  computeStyles: Ul,
  createPopper: Yl,
  createPopperBase: kA,
  createPopperLite: VA,
  detectOverflow: Qo,
  end: Go,
  eventListeners: jl,
  flip: c_,
  hide: f_,
  left: ut,
  main: Xh,
  modifierPhases: t_,
  offset: d_,
  placements: Ll,
  popper: xo,
  popperGenerator: ws,
  popperOffsets: Gl,
  preventOverflow: p_,
  read: Gh,
  reference: Wh,
  right: vt,
  start: _o,
  top: lt,
  variationPlacements: Ka,
  viewport: Pl,
  write: Zh
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const wn = /* @__PURE__ */ new Map(), Ys = {
  set(e, t, n) {
    wn.has(e) || wn.set(e, /* @__PURE__ */ new Map());
    const o = wn.get(e);
    if (!o.has(t) && o.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);
      return;
    }
    o.set(t, n);
  },
  get(e, t) {
    return wn.has(e) && wn.get(e).get(t) || null;
  },
  remove(e, t) {
    if (!wn.has(e))
      return;
    const n = wn.get(e);
    n.delete(t), n.size === 0 && wn.delete(e);
  }
}, LA = 1e6, MA = 1e3, Ga = "transitionend", __ = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)), e), FA = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), BA = (e) => {
  do
    e += Math.floor(Math.random() * LA);
  while (document.getElementById(e));
  return e;
}, HA = (e) => {
  if (!e)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: n
  } = window.getComputedStyle(e);
  const o = Number.parseFloat(t), r = Number.parseFloat(n);
  return !o && !r ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * MA);
}, m_ = (e) => {
  e.dispatchEvent(new Event(Ga));
}, hn = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), Ln = (e) => hn(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(__(e)) : null, ir = (e) => {
  if (!hn(e) || e.getClientRects().length === 0)
    return !1;
  const t = getComputedStyle(e).getPropertyValue("visibility") === "visible", n = e.closest("details:not([open])");
  if (!n)
    return t;
  if (n !== e) {
    const o = e.closest("summary");
    if (o && o.parentNode !== n || o === null)
      return !1;
  }
  return t;
}, Mn = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", g_ = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? g_(e.parentNode) : null;
}, ts = () => {
}, oi = (e) => {
  e.offsetHeight;
}, E_ = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, qs = [], UA = (e) => {
  document.readyState === "loading" ? (qs.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of qs)
      t();
  }), qs.push(e)) : e();
}, Tt = () => document.documentElement.dir === "rtl", Ct = (e) => {
  UA(() => {
    const t = E_();
    if (t) {
      const n = e.NAME, o = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = o, e.jQueryInterface);
    }
  });
}, ht = (e, t = [], n = e) => typeof e == "function" ? e.call(...t) : n, v_ = (e, t, n = !0) => {
  if (!n) {
    ht(e);
    return;
  }
  const r = HA(t) + 5;
  let i = !1;
  const s = ({
    target: a
  }) => {
    a === t && (i = !0, t.removeEventListener(Ga, s), ht(e));
  };
  t.addEventListener(Ga, s), setTimeout(() => {
    i || m_(t);
  }, r);
}, ql = (e, t, n, o) => {
  const r = e.length;
  let i = e.indexOf(t);
  return i === -1 ? !n && o ? e[r - 1] : e[0] : (i += n ? 1 : -1, o && (i = (i + r) % r), e[Math.max(0, Math.min(i, r - 1))]);
}, jA = /[^.]*(?=\..*)\.|.*/, KA = /\..*/, WA = /::\d+$/, Xs = {};
let Df = 1;
const y_ = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, zA = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function b_(e, t) {
  return t && `${t}::${Df++}` || e.uidEvent || Df++;
}
function O_(e) {
  const t = b_(e);
  return e.uidEvent = t, Xs[t] = Xs[t] || {}, Xs[t];
}
function GA(e, t) {
  return function n(o) {
    return Xl(o, {
      delegateTarget: e
    }), n.oneOff && V.off(e, o.type, t), t.apply(e, [o]);
  };
}
function YA(e, t, n) {
  return function o(r) {
    const i = e.querySelectorAll(t);
    for (let {
      target: s
    } = r; s && s !== this; s = s.parentNode)
      for (const a of i)
        if (a === s)
          return Xl(r, {
            delegateTarget: s
          }), o.oneOff && V.off(e, r.type, t, n), n.apply(s, [r]);
  };
}
function A_(e, t, n = null) {
  return Object.values(e).find((o) => o.callable === t && o.delegationSelector === n);
}
function w_(e, t, n) {
  const o = typeof t == "string", r = o ? n : t || n;
  let i = T_(e);
  return zA.has(i) || (i = e), [o, r, i];
}
function xf(e, t, n, o, r) {
  if (typeof t != "string" || !e)
    return;
  let [i, s, a] = w_(t, n, o);
  t in y_ && (s = ((_) => function(g) {
    if (!g.relatedTarget || g.relatedTarget !== g.delegateTarget && !g.delegateTarget.contains(g.relatedTarget))
      return _.call(this, g);
  })(s));
  const l = O_(e), f = l[a] || (l[a] = {}), u = A_(f, s, i ? n : null);
  if (u) {
    u.oneOff = u.oneOff && r;
    return;
  }
  const c = b_(s, t.replace(jA, "")), d = i ? YA(e, n, s) : GA(e, s);
  d.delegationSelector = i ? n : null, d.callable = s, d.oneOff = r, d.uidEvent = c, f[c] = d, e.addEventListener(a, d, i);
}
function Ya(e, t, n, o, r) {
  const i = A_(t[n], o, r);
  i && (e.removeEventListener(n, i, !!r), delete t[n][i.uidEvent]);
}
function qA(e, t, n, o) {
  const r = t[n] || {};
  for (const [i, s] of Object.entries(r))
    i.includes(o) && Ya(e, t, n, s.callable, s.delegationSelector);
}
function T_(e) {
  return e = e.replace(KA, ""), y_[e] || e;
}
const V = {
  on(e, t, n, o) {
    xf(e, t, n, o, !1);
  },
  one(e, t, n, o) {
    xf(e, t, n, o, !0);
  },
  off(e, t, n, o) {
    if (typeof t != "string" || !e)
      return;
    const [r, i, s] = w_(t, n, o), a = s !== t, l = O_(e), f = l[s] || {}, u = t.startsWith(".");
    if (typeof i < "u") {
      if (!Object.keys(f).length)
        return;
      Ya(e, l, s, i, r ? n : null);
      return;
    }
    if (u)
      for (const c of Object.keys(l))
        qA(e, l, c, t.slice(1));
    for (const [c, d] of Object.entries(f)) {
      const p = c.replace(WA, "");
      (!a || t.includes(p)) && Ya(e, l, s, d.callable, d.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const o = E_(), r = T_(t), i = t !== r;
    let s = null, a = !0, l = !0, f = !1;
    i && o && (s = o.Event(t, n), o(e).trigger(s), a = !s.isPropagationStopped(), l = !s.isImmediatePropagationStopped(), f = s.isDefaultPrevented());
    const u = Xl(new Event(t, {
      bubbles: a,
      cancelable: !0
    }), n);
    return f && u.preventDefault(), l && e.dispatchEvent(u), u.defaultPrevented && s && s.preventDefault(), u;
  }
};
function Xl(e, t = {}) {
  for (const [n, o] of Object.entries(t))
    try {
      e[n] = o;
    } catch {
      Object.defineProperty(e, n, {
        configurable: !0,
        get() {
          return o;
        }
      });
    }
  return e;
}
function If(e) {
  if (e === "true")
    return !0;
  if (e === "false")
    return !1;
  if (e === Number(e).toString())
    return Number(e);
  if (e === "" || e === "null")
    return null;
  if (typeof e != "string")
    return e;
  try {
    return JSON.parse(decodeURIComponent(e));
  } catch {
    return e;
  }
}
function Qs(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const _n = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${Qs(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${Qs(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {}, n = Object.keys(e.dataset).filter((o) => o.startsWith("bs") && !o.startsWith("bsConfig"));
    for (const o of n) {
      let r = o.replace(/^bs/, "");
      r = r.charAt(0).toLowerCase() + r.slice(1), t[r] = If(e.dataset[o]);
    }
    return t;
  },
  getDataAttribute(e, t) {
    return If(e.getAttribute(`data-bs-${Qs(t)}`));
  }
};
class ri {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t;
  }
  _mergeConfigObj(t, n) {
    const o = hn(n) ? _n.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof o == "object" ? o : {},
      ...hn(n) ? _n.getDataAttributes(n) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [o, r] of Object.entries(n)) {
      const i = t[o], s = hn(i) ? "element" : FA(i);
      if (!new RegExp(r).test(s))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${s}" but expected type "${r}".`);
    }
  }
}
const XA = "5.3.7";
class Ft extends ri {
  constructor(t, n) {
    super(), t = Ln(t), t && (this._element = t, this._config = this._getConfig(n), Ys.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    Ys.remove(this._element, this.constructor.DATA_KEY), V.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  // Private
  _queueCallback(t, n, o = !0) {
    v_(t, n, o);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return Ys.get(Ln(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return XA;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(t) {
    return `${t}${this.EVENT_KEY}`;
  }
}
const Js = (e) => {
  let t = e.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith("."))
      return null;
    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
  }
  return t ? t.split(",").map((n) => __(n)).join(",") : null;
}, re = {
  find(e, t = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(t, e));
  },
  findOne(e, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, e);
  },
  children(e, t) {
    return [].concat(...e.children).filter((n) => n.matches(t));
  },
  parents(e, t) {
    const n = [];
    let o = e.parentNode.closest(t);
    for (; o; )
      n.push(o), o = o.parentNode.closest(t);
    return n;
  },
  prev(e, t) {
    let n = e.previousElementSibling;
    for (; n; ) {
      if (n.matches(t))
        return [n];
      n = n.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(e, t) {
    let n = e.nextElementSibling;
    for (; n; ) {
      if (n.matches(t))
        return [n];
      n = n.nextElementSibling;
    }
    return [];
  },
  focusableChildren(e) {
    const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((n) => `${n}:not([tabindex^="-"])`).join(",");
    return this.find(t, e).filter((n) => !Mn(n) && ir(n));
  },
  getSelectorFromElement(e) {
    const t = Js(e);
    return t && re.findOne(t) ? t : null;
  },
  getElementFromSelector(e) {
    const t = Js(e);
    return t ? re.findOne(t) : null;
  },
  getMultipleElementsFromSelector(e) {
    const t = Js(e);
    return t ? re.find(t) : [];
  }
}, Ts = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, o = e.NAME;
  V.on(document, n, `[data-bs-dismiss="${o}"]`, function(r) {
    if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), Mn(this))
      return;
    const i = re.getElementFromSelector(this) || this.closest(`.${o}`);
    e.getOrCreateInstance(i)[t]();
  });
}, QA = "alert", JA = "bs.alert", N_ = `.${JA}`, ZA = `close${N_}`, ew = `closed${N_}`, tw = "fade", nw = "show";
class Ns extends Ft {
  // Getters
  static get NAME() {
    return QA;
  }
  // Public
  close() {
    if (V.trigger(this._element, ZA).defaultPrevented)
      return;
    this._element.classList.remove(nw);
    const n = this._element.classList.contains(tw);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  // Private
  _destroyElement() {
    this._element.remove(), V.trigger(this._element, ew), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ns.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Ts(Ns, "close");
Ct(Ns);
const ow = "button", rw = "bs.button", iw = `.${rw}`, sw = ".data-api", aw = "active", $f = '[data-bs-toggle="button"]', lw = `click${iw}${sw}`;
class Cs extends Ft {
  // Getters
  static get NAME() {
    return ow;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(aw));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Cs.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
V.on(document, lw, $f, (e) => {
  e.preventDefault();
  const t = e.target.closest($f);
  Cs.getOrCreateInstance(t).toggle();
});
Ct(Cs);
const uw = "swipe", sr = ".bs.swipe", cw = `touchstart${sr}`, fw = `touchmove${sr}`, dw = `touchend${sr}`, pw = `pointerdown${sr}`, hw = `pointerup${sr}`, _w = "touch", mw = "pen", gw = "pointer-event", Ew = 40, vw = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, yw = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class ns extends ri {
  constructor(t, n) {
    super(), this._element = t, !(!t || !ns.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return vw;
  }
  static get DefaultType() {
    return yw;
  }
  static get NAME() {
    return uw;
  }
  // Public
  dispose() {
    V.off(this._element, sr);
  }
  // Private
  _start(t) {
    if (!this._supportPointerEvents) {
      this._deltaX = t.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
  }
  _end(t) {
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), ht(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= Ew)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && ht(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (V.on(this._element, pw, (t) => this._start(t)), V.on(this._element, hw, (t) => this._end(t)), this._element.classList.add(gw)) : (V.on(this._element, cw, (t) => this._start(t)), V.on(this._element, fw, (t) => this._move(t)), V.on(this._element, dw, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === mw || t.pointerType === _w);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const bw = "carousel", Ow = "bs.carousel", Un = `.${Ow}`, C_ = ".data-api", Aw = "ArrowLeft", ww = "ArrowRight", Tw = 500, pr = "next", No = "prev", Io = "left", Li = "right", Nw = `slide${Un}`, Zs = `slid${Un}`, Cw = `keydown${Un}`, Sw = `mouseenter${Un}`, Dw = `mouseleave${Un}`, xw = `dragstart${Un}`, Iw = `load${Un}${C_}`, $w = `click${Un}${C_}`, S_ = "carousel", gi = "active", kw = "slide", Rw = "carousel-item-end", Vw = "carousel-item-start", Pw = "carousel-item-next", Lw = "carousel-item-prev", D_ = ".active", x_ = ".carousel-item", Mw = D_ + x_, Fw = ".carousel-item img", Bw = ".carousel-indicators", Hw = "[data-bs-slide], [data-bs-slide-to]", Uw = '[data-bs-ride="carousel"]', jw = {
  [Aw]: Li,
  [ww]: Io
}, Kw = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, Ww = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class ii extends Ft {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = re.findOne(Bw, this._element), this._addEventListeners(), this._config.ride === S_ && this.cycle();
  }
  // Getters
  static get Default() {
    return Kw;
  }
  static get DefaultType() {
    return Ww;
  }
  static get NAME() {
    return bw;
  }
  // Public
  next() {
    this._slide(pr);
  }
  nextWhenVisible() {
    !document.hidden && ir(this._element) && this.next();
  }
  prev() {
    this._slide(No);
  }
  pause() {
    this._isSliding && m_(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        V.one(this._element, Zs, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(t) {
    const n = this._getItems();
    if (t > n.length - 1 || t < 0)
      return;
    if (this._isSliding) {
      V.one(this._element, Zs, () => this.to(t));
      return;
    }
    const o = this._getItemIndex(this._getActive());
    if (o === t)
      return;
    const r = t > o ? pr : No;
    this._slide(r, n[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  // Private
  _configAfterMerge(t) {
    return t.defaultInterval = t.interval, t;
  }
  _addEventListeners() {
    this._config.keyboard && V.on(this._element, Cw, (t) => this._keydown(t)), this._config.pause === "hover" && (V.on(this._element, Sw, () => this.pause()), V.on(this._element, Dw, () => this._maybeEnableCycle())), this._config.touch && ns.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const o of re.find(Fw, this._element))
      V.on(o, xw, (r) => r.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(Io)),
      rightCallback: () => this._slide(this._directionToOrder(Li)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), Tw + this._config.interval));
      }
    };
    this._swipeHelper = new ns(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const n = jw[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const n = re.findOne(D_, this._indicatorsElement);
    n.classList.remove(gi), n.removeAttribute("aria-current");
    const o = re.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    o && (o.classList.add(gi), o.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const t = this._activeElement || this._getActive();
    if (!t)
      return;
    const n = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
    this._config.interval = n || this._config.defaultInterval;
  }
  _slide(t, n = null) {
    if (this._isSliding)
      return;
    const o = this._getActive(), r = t === pr, i = n || ql(this._getItems(), o, r, this._config.wrap);
    if (i === o)
      return;
    const s = this._getItemIndex(i), a = (p) => V.trigger(this._element, p, {
      relatedTarget: i,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(o),
      to: s
    });
    if (a(Nw).defaultPrevented || !o || !i)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(s), this._activeElement = i;
    const u = r ? Vw : Rw, c = r ? Pw : Lw;
    i.classList.add(c), oi(i), o.classList.add(u), i.classList.add(u);
    const d = () => {
      i.classList.remove(u, c), i.classList.add(gi), o.classList.remove(gi, c, u), this._isSliding = !1, a(Zs);
    };
    this._queueCallback(d, o, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(kw);
  }
  _getActive() {
    return re.findOne(Mw, this._element);
  }
  _getItems() {
    return re.find(x_, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Tt() ? t === Io ? No : pr : t === Io ? pr : No;
  }
  _orderToDirection(t) {
    return Tt() ? t === No ? Io : Li : t === No ? Li : Io;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ii.getOrCreateInstance(this, t);
      if (typeof t == "number") {
        n.to(t);
        return;
      }
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
V.on(document, $w, Hw, function(e) {
  const t = re.getElementFromSelector(this);
  if (!t || !t.classList.contains(S_))
    return;
  e.preventDefault();
  const n = ii.getOrCreateInstance(t), o = this.getAttribute("data-bs-slide-to");
  if (o) {
    n.to(o), n._maybeEnableCycle();
    return;
  }
  if (_n.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
V.on(window, Iw, () => {
  const e = re.find(Uw);
  for (const t of e)
    ii.getOrCreateInstance(t);
});
Ct(ii);
const zw = "collapse", Gw = "bs.collapse", si = `.${Gw}`, Yw = ".data-api", qw = `show${si}`, Xw = `shown${si}`, Qw = `hide${si}`, Jw = `hidden${si}`, Zw = `click${si}${Yw}`, ea = "show", Vo = "collapse", Ei = "collapsing", eT = "collapsed", tT = `:scope .${Vo} .${Vo}`, nT = "collapse-horizontal", oT = "width", rT = "height", iT = ".collapse.show, .collapse.collapsing", qa = '[data-bs-toggle="collapse"]', sT = {
  parent: null,
  toggle: !0
}, aT = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Wr extends Ft {
  constructor(t, n) {
    super(t, n), this._isTransitioning = !1, this._triggerArray = [];
    const o = re.find(qa);
    for (const r of o) {
      const i = re.getSelectorFromElement(r), s = re.find(i).filter((a) => a === this._element);
      i !== null && s.length && this._triggerArray.push(r);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return sT;
  }
  static get DefaultType() {
    return aT;
  }
  static get NAME() {
    return zw;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(iT).filter((a) => a !== this._element).map((a) => Wr.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || V.trigger(this._element, qw).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const o = this._getDimension();
    this._element.classList.remove(Vo), this._element.classList.add(Ei), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const r = () => {
      this._isTransitioning = !1, this._element.classList.remove(Ei), this._element.classList.add(Vo, ea), this._element.style[o] = "", V.trigger(this._element, Xw);
    }, s = `scroll${o[0].toUpperCase() + o.slice(1)}`;
    this._queueCallback(r, this._element, !0), this._element.style[o] = `${this._element[s]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || V.trigger(this._element, Qw).defaultPrevented)
      return;
    const n = this._getDimension();
    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, oi(this._element), this._element.classList.add(Ei), this._element.classList.remove(Vo, ea);
    for (const r of this._triggerArray) {
      const i = re.getElementFromSelector(r);
      i && !this._isShown(i) && this._addAriaAndCollapsedClass([r], !1);
    }
    this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, this._element.classList.remove(Ei), this._element.classList.add(Vo), V.trigger(this._element, Jw);
    };
    this._element.style[n] = "", this._queueCallback(o, this._element, !0);
  }
  // Private
  _isShown(t = this._element) {
    return t.classList.contains(ea);
  }
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = Ln(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(nT) ? oT : rT;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(qa);
    for (const n of t) {
      const o = re.getElementFromSelector(n);
      o && this._addAriaAndCollapsedClass([n], this._isShown(o));
    }
  }
  _getFirstLevelChildren(t) {
    const n = re.find(tT, this._config.parent);
    return re.find(t, this._config.parent).filter((o) => !n.includes(o));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const o of t)
        o.classList.toggle(eT, !n), o.setAttribute("aria-expanded", n);
  }
  // Static
  static jQueryInterface(t) {
    const n = {};
    return typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
      const o = Wr.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof o[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        o[t]();
      }
    });
  }
}
V.on(document, Zw, qa, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  for (const t of re.getMultipleElementsFromSelector(this))
    Wr.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
Ct(Wr);
const kf = "dropdown", lT = "bs.dropdown", vo = `.${lT}`, Ql = ".data-api", uT = "Escape", Rf = "Tab", cT = "ArrowUp", Vf = "ArrowDown", fT = 2, dT = `hide${vo}`, pT = `hidden${vo}`, hT = `show${vo}`, _T = `shown${vo}`, I_ = `click${vo}${Ql}`, $_ = `keydown${vo}${Ql}`, mT = `keyup${vo}${Ql}`, $o = "show", gT = "dropup", ET = "dropend", vT = "dropstart", yT = "dropup-center", bT = "dropdown-center", eo = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', OT = `${eo}.${$o}`, Mi = ".dropdown-menu", AT = ".navbar", wT = ".navbar-nav", TT = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", NT = Tt() ? "top-end" : "top-start", CT = Tt() ? "top-start" : "top-end", ST = Tt() ? "bottom-end" : "bottom-start", DT = Tt() ? "bottom-start" : "bottom-end", xT = Tt() ? "left-start" : "right-start", IT = Tt() ? "right-start" : "left-start", $T = "top", kT = "bottom", RT = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, VT = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class Qt extends Ft {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = re.next(this._element, Mi)[0] || re.prev(this._element, Mi)[0] || re.findOne(Mi, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return RT;
  }
  static get DefaultType() {
    return VT;
  }
  static get NAME() {
    return kf;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (Mn(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!V.trigger(this._element, hT, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(wT))
        for (const o of [].concat(...document.body.children))
          V.on(o, "mouseover", ts);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($o), this._element.classList.add($o), V.trigger(this._element, _T, t);
    }
  }
  hide() {
    if (Mn(this._element) || !this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _completeHide(t) {
    if (!V.trigger(this._element, dT, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const o of [].concat(...document.body.children))
          V.off(o, "mouseover", ts);
      this._popper && this._popper.destroy(), this._menu.classList.remove($o), this._element.classList.remove($o), this._element.setAttribute("aria-expanded", "false"), _n.removeDataAttribute(this._menu, "popper"), V.trigger(this._element, pT, t), this._element.focus();
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !hn(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${kf.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof h_ > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : hn(this._config.reference) ? t = Ln(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = Yl(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains($o);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(ET))
      return xT;
    if (t.classList.contains(vT))
      return IT;
    if (t.classList.contains(yT))
      return $T;
    if (t.classList.contains(bT))
      return kT;
    const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(gT) ? n ? CT : NT : n ? DT : ST;
  }
  _detectNavbar() {
    return this._element.closest(AT) !== null;
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((n) => Number.parseInt(n, 10)) : typeof t == "function" ? (n) => t(n, this._element) : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [{
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }]
    };
    return (this._inNavbar || this._config.display === "static") && (_n.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...t,
      ...ht(this._config.popperConfig, [void 0, t])
    };
  }
  _selectMenuItem({
    key: t,
    target: n
  }) {
    const o = re.find(TT, this._menu).filter((r) => ir(r));
    o.length && ql(o, n, t === Vf, !o.includes(n)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Qt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === fT || t.type === "keyup" && t.key !== Rf)
      return;
    const n = re.find(OT);
    for (const o of n) {
      const r = Qt.getInstance(o);
      if (!r || r._config.autoClose === !1)
        continue;
      const i = t.composedPath(), s = i.includes(r._menu);
      if (i.includes(r._element) || r._config.autoClose === "inside" && !s || r._config.autoClose === "outside" && s || r._menu.contains(t.target) && (t.type === "keyup" && t.key === Rf || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const a = {
        relatedTarget: r._element
      };
      t.type === "click" && (a.clickEvent = t), r._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName), o = t.key === uT, r = [cT, Vf].includes(t.key);
    if (!r && !o || n && !o)
      return;
    t.preventDefault();
    const i = this.matches(eo) ? this : re.prev(this, eo)[0] || re.next(this, eo)[0] || re.findOne(eo, t.delegateTarget.parentNode), s = Qt.getOrCreateInstance(i);
    if (r) {
      t.stopPropagation(), s.show(), s._selectMenuItem(t);
      return;
    }
    s._isShown() && (t.stopPropagation(), s.hide(), i.focus());
  }
}
V.on(document, $_, eo, Qt.dataApiKeydownHandler);
V.on(document, $_, Mi, Qt.dataApiKeydownHandler);
V.on(document, I_, Qt.clearMenus);
V.on(document, mT, Qt.clearMenus);
V.on(document, I_, eo, function(e) {
  e.preventDefault(), Qt.getOrCreateInstance(this).toggle();
});
Ct(Qt);
const k_ = "backdrop", PT = "fade", Pf = "show", Lf = `mousedown.bs.${k_}`, LT = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, MT = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class R_ extends ri {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return LT;
  }
  static get DefaultType() {
    return MT;
  }
  static get NAME() {
    return k_;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      ht(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && oi(n), n.classList.add(Pf), this._emulateAnimation(() => {
      ht(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      ht(t);
      return;
    }
    this._getElement().classList.remove(Pf), this._emulateAnimation(() => {
      this.dispose(), ht(t);
    });
  }
  dispose() {
    this._isAppended && (V.off(this._element, Lf), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(PT), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = Ln(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), V.on(t, Lf, () => {
      ht(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    v_(t, this._getElement(), this._config.isAnimated);
  }
}
const FT = "focustrap", BT = "bs.focustrap", os = `.${BT}`, HT = `focusin${os}`, UT = `keydown.tab${os}`, jT = "Tab", KT = "forward", Mf = "backward", WT = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, zT = {
  autofocus: "boolean",
  trapElement: "element"
};
class V_ extends ri {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return WT;
  }
  static get DefaultType() {
    return zT;
  }
  static get NAME() {
    return FT;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), V.off(document, os), V.on(document, HT, (t) => this._handleFocusin(t)), V.on(document, UT, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, V.off(document, os));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: n
    } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target))
      return;
    const o = re.focusableChildren(n);
    o.length === 0 ? n.focus() : this._lastTabNavDirection === Mf ? o[o.length - 1].focus() : o[0].focus();
  }
  _handleKeydown(t) {
    t.key === jT && (this._lastTabNavDirection = t.shiftKey ? Mf : KT);
  }
}
const Ff = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Bf = ".sticky-top", vi = "padding-right", Hf = "margin-right";
class Xa {
  constructor() {
    this._element = document.body;
  }
  // Public
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(this._element, vi, (n) => n + t), this._setElementAttributes(Ff, vi, (n) => n + t), this._setElementAttributes(Bf, Hf, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, vi), this._resetElementAttributes(Ff, vi), this._resetElementAttributes(Bf, Hf);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, n, o) {
    const r = this.getWidth(), i = (s) => {
      if (s !== this._element && window.innerWidth > s.clientWidth + r)
        return;
      this._saveInitialAttribute(s, n);
      const a = window.getComputedStyle(s).getPropertyValue(n);
      s.style.setProperty(n, `${o(Number.parseFloat(a))}px`);
    };
    this._applyManipulationCallback(t, i);
  }
  _saveInitialAttribute(t, n) {
    const o = t.style.getPropertyValue(n);
    o && _n.setDataAttribute(t, n, o);
  }
  _resetElementAttributes(t, n) {
    const o = (r) => {
      const i = _n.getDataAttribute(r, n);
      if (i === null) {
        r.style.removeProperty(n);
        return;
      }
      _n.removeDataAttribute(r, n), r.style.setProperty(n, i);
    };
    this._applyManipulationCallback(t, o);
  }
  _applyManipulationCallback(t, n) {
    if (hn(t)) {
      n(t);
      return;
    }
    for (const o of re.find(t, this._element))
      n(o);
  }
}
const GT = "modal", YT = "bs.modal", Nt = `.${YT}`, qT = ".data-api", XT = "Escape", QT = `hide${Nt}`, JT = `hidePrevented${Nt}`, P_ = `hidden${Nt}`, L_ = `show${Nt}`, ZT = `shown${Nt}`, e1 = `resize${Nt}`, t1 = `click.dismiss${Nt}`, n1 = `mousedown.dismiss${Nt}`, o1 = `keydown.dismiss${Nt}`, r1 = `click${Nt}${qT}`, Uf = "modal-open", i1 = "fade", jf = "show", ta = "modal-static", s1 = ".modal.show", a1 = ".modal-dialog", l1 = ".modal-body", u1 = '[data-bs-toggle="modal"]', c1 = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, f1 = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class go extends Ft {
  constructor(t, n) {
    super(t, n), this._dialog = re.findOne(a1, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Xa(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return c1;
  }
  static get DefaultType() {
    return f1;
  }
  static get NAME() {
    return GT;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || V.trigger(this._element, L_, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Uf), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || V.trigger(this._element, QT).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(jf), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    V.off(window, Nt), V.off(this._dialog, Nt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new R_({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new V_({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const n = re.findOne(l1, this._dialog);
    n && (n.scrollTop = 0), oi(this._element), this._element.classList.add(jf);
    const o = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, V.trigger(this._element, ZT, {
        relatedTarget: t
      });
    };
    this._queueCallback(o, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    V.on(this._element, o1, (t) => {
      if (t.key === XT) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), V.on(window, e1, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), V.on(this._element, n1, (t) => {
      V.one(this._element, t1, (n) => {
        if (!(this._element !== t.target || this._element !== n.target)) {
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          this._config.backdrop && this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
      document.body.classList.remove(Uf), this._resetAdjustments(), this._scrollBar.reset(), V.trigger(this._element, P_);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(i1);
  }
  _triggerBackdropTransition() {
    if (V.trigger(this._element, JT).defaultPrevented)
      return;
    const n = this._element.scrollHeight > document.documentElement.clientHeight, o = this._element.style.overflowY;
    o === "hidden" || this._element.classList.contains(ta) || (n || (this._element.style.overflowY = "hidden"), this._element.classList.add(ta), this._queueCallback(() => {
      this._element.classList.remove(ta), this._queueCallback(() => {
        this._element.style.overflowY = o;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, n = this._scrollBar.getWidth(), o = n > 0;
    if (o && !t) {
      const r = Tt() ? "paddingLeft" : "paddingRight";
      this._element.style[r] = `${n}px`;
    }
    if (!o && t) {
      const r = Tt() ? "paddingRight" : "paddingLeft";
      this._element.style[r] = `${n}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, n) {
    return this.each(function() {
      const o = go.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof o[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        o[t](n);
      }
    });
  }
}
V.on(document, r1, u1, function(e) {
  const t = re.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), V.one(t, L_, (r) => {
    r.defaultPrevented || V.one(t, P_, () => {
      ir(this) && this.focus();
    });
  });
  const n = re.findOne(s1);
  n && go.getInstance(n).hide(), go.getOrCreateInstance(t).toggle(this);
});
Ts(go);
Ct(go);
const d1 = "offcanvas", p1 = "bs.offcanvas", bn = `.${p1}`, M_ = ".data-api", h1 = `load${bn}${M_}`, _1 = "Escape", Kf = "show", Wf = "showing", zf = "hiding", m1 = "offcanvas-backdrop", F_ = ".offcanvas.show", g1 = `show${bn}`, E1 = `shown${bn}`, v1 = `hide${bn}`, Gf = `hidePrevented${bn}`, B_ = `hidden${bn}`, y1 = `resize${bn}`, b1 = `click${bn}${M_}`, O1 = `keydown.dismiss${bn}`, A1 = '[data-bs-toggle="offcanvas"]', w1 = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, T1 = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class Fn extends Ft {
  constructor(t, n) {
    super(t, n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return w1;
  }
  static get DefaultType() {
    return T1;
  }
  static get NAME() {
    return d1;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || V.trigger(this._element, g1, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new Xa().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Wf);
    const o = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Kf), this._element.classList.remove(Wf), V.trigger(this._element, E1, {
        relatedTarget: t
      });
    };
    this._queueCallback(o, this._element, !0);
  }
  hide() {
    if (!this._isShown || V.trigger(this._element, v1).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(zf), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(Kf, zf), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Xa().reset(), V.trigger(this._element, B_);
    };
    this._queueCallback(n, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  // Private
  _initializeBackDrop() {
    const t = () => {
      if (this._config.backdrop === "static") {
        V.trigger(this._element, Gf);
        return;
      }
      this.hide();
    }, n = !!this._config.backdrop;
    return new R_({
      className: m1,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null
    });
  }
  _initializeFocusTrap() {
    return new V_({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    V.on(this._element, O1, (t) => {
      if (t.key === _1) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        V.trigger(this._element, Gf);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Fn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
V.on(document, b1, A1, function(e) {
  const t = re.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), Mn(this))
    return;
  V.one(t, B_, () => {
    ir(this) && this.focus();
  });
  const n = re.findOne(F_);
  n && n !== t && Fn.getInstance(n).hide(), Fn.getOrCreateInstance(t).toggle(this);
});
V.on(window, h1, () => {
  for (const e of re.find(F_))
    Fn.getOrCreateInstance(e).show();
});
V.on(window, y1, () => {
  for (const e of re.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && Fn.getOrCreateInstance(e).hide();
});
Ts(Fn);
Ct(Fn);
const N1 = /^aria-[\w-]*$/i, H_ = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", N1],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  dd: [],
  div: [],
  dl: [],
  dt: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}, C1 = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), S1 = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, D1 = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? C1.has(n) ? !!S1.test(e.nodeValue) : !0 : t.filter((o) => o instanceof RegExp).some((o) => o.test(n));
};
function x1(e, t, n) {
  if (!e.length)
    return e;
  if (n && typeof n == "function")
    return n(e);
  const r = new window.DOMParser().parseFromString(e, "text/html"), i = [].concat(...r.body.querySelectorAll("*"));
  for (const s of i) {
    const a = s.nodeName.toLowerCase();
    if (!Object.keys(t).includes(a)) {
      s.remove();
      continue;
    }
    const l = [].concat(...s.attributes), f = [].concat(t["*"] || [], t[a] || []);
    for (const u of l)
      D1(u, f) || s.removeAttribute(u.nodeName);
  }
  return r.body.innerHTML;
}
const I1 = "TemplateFactory", $1 = {
  allowList: H_,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, k1 = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, R1 = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class V1 extends ri {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return $1;
  }
  static get DefaultType() {
    return k1;
  }
  static get NAME() {
    return I1;
  }
  // Public
  getContent() {
    return Object.values(this._config.content).map((t) => this._resolvePossibleFunction(t)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(t) {
    return this._checkContent(t), this._config.content = {
      ...this._config.content,
      ...t
    }, this;
  }
  toHtml() {
    const t = document.createElement("div");
    t.innerHTML = this._maybeSanitize(this._config.template);
    for (const [r, i] of Object.entries(this._config.content))
      this._setContent(t, i, r);
    const n = t.children[0], o = this._resolvePossibleFunction(this._config.extraClass);
    return o && n.classList.add(...o.split(" ")), n;
  }
  // Private
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [n, o] of Object.entries(t))
      super._typeCheckConfig({
        selector: n,
        entry: o
      }, R1);
  }
  _setContent(t, n, o) {
    const r = re.findOne(o, t);
    if (r) {
      if (n = this._resolvePossibleFunction(n), !n) {
        r.remove();
        return;
      }
      if (hn(n)) {
        this._putElementInTemplate(Ln(n), r);
        return;
      }
      if (this._config.html) {
        r.innerHTML = this._maybeSanitize(n);
        return;
      }
      r.textContent = n;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize ? x1(t, this._config.allowList, this._config.sanitizeFn) : t;
  }
  _resolvePossibleFunction(t) {
    return ht(t, [void 0, this]);
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      n.innerHTML = "", n.append(t);
      return;
    }
    n.textContent = t.textContent;
  }
}
const P1 = "tooltip", L1 = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), na = "fade", M1 = "modal", yi = "show", F1 = ".tooltip-inner", Yf = `.${M1}`, qf = "hide.bs.modal", hr = "hover", oa = "focus", ra = "click", B1 = "manual", H1 = "hide", U1 = "hidden", j1 = "show", K1 = "shown", W1 = "inserted", z1 = "click", G1 = "focusin", Y1 = "focusout", q1 = "mouseenter", X1 = "mouseleave", Q1 = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Tt() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Tt() ? "right" : "left"
}, J1 = {
  allowList: H_,
  animation: !0,
  boundary: "clippingParents",
  container: !1,
  customClass: "",
  delay: 0,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  html: !1,
  offset: [0, 6],
  placement: "top",
  popperConfig: null,
  sanitize: !0,
  sanitizeFn: null,
  selector: !1,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  title: "",
  trigger: "hover focus"
}, Z1 = {
  allowList: "object",
  animation: "boolean",
  boundary: "(string|element)",
  container: "(string|element|boolean)",
  customClass: "(string|function)",
  delay: "(number|object)",
  fallbackPlacements: "array",
  html: "boolean",
  offset: "(array|string|function)",
  placement: "(string|function)",
  popperConfig: "(null|object|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  selector: "(string|boolean)",
  template: "string",
  title: "(string|element|function)",
  trigger: "string"
};
class yo extends Ft {
  constructor(t, n) {
    if (typeof h_ > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
    super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return J1;
  }
  static get DefaultType() {
    return Z1;
  }
  static get NAME() {
    return P1;
  }
  // Public
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (this._isEnabled) {
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    clearTimeout(this._timeout), V.off(this._element.closest(Yf), qf, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = V.trigger(this._element, this.constructor.eventName(j1)), o = (g_(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !o)
      return;
    this._disposePopper();
    const r = this._getTipElement();
    this._element.setAttribute("aria-describedby", r.getAttribute("id"));
    const {
      container: i
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(r), V.trigger(this._element, this.constructor.eventName(W1))), this._popper = this._createPopper(r), r.classList.add(yi), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        V.on(a, "mouseover", ts);
    const s = () => {
      V.trigger(this._element, this.constructor.eventName(K1)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(s, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || V.trigger(this._element, this.constructor.eventName(H1)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(yi), "ontouchstart" in document.documentElement)
      for (const r of [].concat(...document.body.children))
        V.off(r, "mouseover", ts);
    this._activeTrigger[ra] = !1, this._activeTrigger[oa] = !1, this._activeTrigger[hr] = !1, this._isHovered = null;
    const o = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), V.trigger(this._element, this.constructor.eventName(U1)));
    };
    this._queueCallback(o, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  // Protected
  _isWithContent() {
    return !!this._getTitle();
  }
  _getTipElement() {
    return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
  }
  _createTipElement(t) {
    const n = this._getTemplateFactory(t).toHtml();
    if (!n)
      return null;
    n.classList.remove(na, yi), n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const o = BA(this.constructor.NAME).toString();
    return n.setAttribute("id", o), this._isAnimated() && n.classList.add(na), n;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new V1({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [F1]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  // Private
  _initializeOnDelegatedTarget(t) {
    return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(na);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(yi);
  }
  _createPopper(t) {
    const n = ht(this._config.placement, [this, t, this._element]), o = Q1[n.toUpperCase()];
    return Yl(this._element, t, this._getPopperConfig(o));
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((n) => Number.parseInt(n, 10)) : typeof t == "function" ? (n) => t(n, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return ht(t, [this._element, this._element]);
  }
  _getPopperConfig(t) {
    const n = {
      placement: t,
      modifiers: [{
        name: "flip",
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }, {
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "arrow",
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: "preSetPlacement",
        enabled: !0,
        phase: "beforeMain",
        fn: (o) => {
          this._getTipElement().setAttribute("data-popper-placement", o.state.placement);
        }
      }]
    };
    return {
      ...n,
      ...ht(this._config.popperConfig, [void 0, n])
    };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const n of t)
      if (n === "click")
        V.on(this._element, this.constructor.eventName(z1), this._config.selector, (o) => {
          const r = this._initializeOnDelegatedTarget(o);
          r._activeTrigger[ra] = !(r._isShown() && r._activeTrigger[ra]), r.toggle();
        });
      else if (n !== B1) {
        const o = n === hr ? this.constructor.eventName(q1) : this.constructor.eventName(G1), r = n === hr ? this.constructor.eventName(X1) : this.constructor.eventName(Y1);
        V.on(this._element, o, this._config.selector, (i) => {
          const s = this._initializeOnDelegatedTarget(i);
          s._activeTrigger[i.type === "focusin" ? oa : hr] = !0, s._enter();
        }), V.on(this._element, r, this._config.selector, (i) => {
          const s = this._initializeOnDelegatedTarget(i);
          s._activeTrigger[i.type === "focusout" ? oa : hr] = s._element.contains(i.relatedTarget), s._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, V.on(this._element.closest(Yf), qf, this._hideModalHandler);
  }
  _fixTitle() {
    const t = this._element.getAttribute("title");
    t && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    this._isHovered = !0, this._setTimeout(() => {
      this._isHovered && this.show();
    }, this._config.delay.show);
  }
  _leave() {
    this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
      this._isHovered || this.hide();
    }, this._config.delay.hide));
  }
  _setTimeout(t, n) {
    clearTimeout(this._timeout), this._timeout = setTimeout(t, n);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(t) {
    const n = _n.getDataAttributes(this._element);
    for (const o of Object.keys(n))
      L1.has(o) && delete n[o];
    return t = {
      ...n,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : Ln(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const [n, o] of Object.entries(this._config))
      this.constructor.Default[n] !== o && (t[n] = o);
    return t.selector = !1, t.trigger = "manual", t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = yo.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Ct(yo);
const eN = "popover", tN = ".popover-header", nN = ".popover-body", oN = {
  ...yo.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, rN = {
  ...yo.DefaultType,
  content: "(null|string|element|function)"
};
class Jl extends yo {
  // Getters
  static get Default() {
    return oN;
  }
  static get DefaultType() {
    return rN;
  }
  static get NAME() {
    return eN;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [tN]: this._getTitle(),
      [nN]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Jl.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Ct(Jl);
const iN = "scrollspy", sN = "bs.scrollspy", Zl = `.${sN}`, aN = ".data-api", lN = `activate${Zl}`, Xf = `click${Zl}`, uN = `load${Zl}${aN}`, cN = "dropdown-item", Co = "active", fN = '[data-bs-spy="scroll"]', ia = "[href]", dN = ".nav, .list-group", Qf = ".nav-link", pN = ".nav-item", hN = ".list-group-item", _N = `${Qf}, ${pN} > ${Qf}, ${hN}`, mN = ".dropdown", gN = ".dropdown-toggle", EN = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, vN = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class Ss extends Ft {
  constructor(t, n) {
    super(t, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return EN;
  }
  static get DefaultType() {
    return vN;
  }
  static get NAME() {
    return iN;
  }
  // Public
  refresh() {
    this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
    for (const t of this._observableSections.values())
      this._observer.observe(t);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  // Private
  _configAfterMerge(t) {
    return t.target = Ln(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (V.off(this._config.target, Xf), V.on(this._config.target, Xf, ia, (t) => {
      const n = this._observableSections.get(t.target.hash);
      if (n) {
        t.preventDefault();
        const o = this._rootElement || window, r = n.offsetTop - this._element.offsetTop;
        if (o.scrollTo) {
          o.scrollTo({
            top: r,
            behavior: "smooth"
          });
          return;
        }
        o.scrollTop = r;
      }
    }));
  }
  _getNewObserver() {
    const t = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((n) => this._observerCallback(n), t);
  }
  // The logic of selection
  _observerCallback(t) {
    const n = (s) => this._targetLinks.get(`#${s.target.id}`), o = (s) => {
      this._previousScrollData.visibleEntryTop = s.target.offsetTop, this._process(n(s));
    }, r = (this._rootElement || document.documentElement).scrollTop, i = r >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = r;
    for (const s of t) {
      if (!s.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(n(s));
        continue;
      }
      const a = s.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (i && a) {
        if (o(s), !r)
          return;
        continue;
      }
      !i && !a && o(s);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const t = re.find(ia, this._config.target);
    for (const n of t) {
      if (!n.hash || Mn(n))
        continue;
      const o = re.findOne(decodeURI(n.hash), this._element);
      ir(o) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, o));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Co), this._activateParents(t), V.trigger(this._element, lN, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(cN)) {
      re.findOne(gN, t.closest(mN)).classList.add(Co);
      return;
    }
    for (const n of re.parents(t, dN))
      for (const o of re.prev(n, _N))
        o.classList.add(Co);
  }
  _clearActiveClass(t) {
    t.classList.remove(Co);
    const n = re.find(`${ia}.${Co}`, t);
    for (const o of n)
      o.classList.remove(Co);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ss.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
V.on(window, uN, () => {
  for (const e of re.find(fN))
    Ss.getOrCreateInstance(e);
});
Ct(Ss);
const yN = "tab", bN = "bs.tab", bo = `.${bN}`, ON = `hide${bo}`, AN = `hidden${bo}`, wN = `show${bo}`, TN = `shown${bo}`, NN = `click${bo}`, CN = `keydown${bo}`, SN = `load${bo}`, DN = "ArrowLeft", Jf = "ArrowRight", xN = "ArrowUp", Zf = "ArrowDown", sa = "Home", ed = "End", to = "active", td = "fade", aa = "show", IN = "dropdown", U_ = ".dropdown-toggle", $N = ".dropdown-menu", la = `:not(${U_})`, kN = '.list-group, .nav, [role="tablist"]', RN = ".nav-item, .list-group-item", VN = `.nav-link${la}, .list-group-item${la}, [role="tab"]${la}`, j_ = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', ua = `${VN}, ${j_}`, PN = `.${to}[data-bs-toggle="tab"], .${to}[data-bs-toggle="pill"], .${to}[data-bs-toggle="list"]`;
class Jo extends Ft {
  constructor(t) {
    super(t), this._parent = this._element.closest(kN), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), V.on(this._element, CN, (n) => this._keydown(n)));
  }
  // Getters
  static get NAME() {
    return yN;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), o = n ? V.trigger(n, ON, {
      relatedTarget: t
    }) : null;
    V.trigger(t, wN, {
      relatedTarget: n
    }).defaultPrevented || o && o.defaultPrevented || (this._deactivate(n, t), this._activate(t, n));
  }
  // Private
  _activate(t, n) {
    if (!t)
      return;
    t.classList.add(to), this._activate(re.getElementFromSelector(t));
    const o = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(aa);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), V.trigger(t, TN, {
        relatedTarget: n
      });
    };
    this._queueCallback(o, t, t.classList.contains(td));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(to), t.blur(), this._deactivate(re.getElementFromSelector(t));
    const o = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(aa);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), V.trigger(t, AN, {
        relatedTarget: n
      });
    };
    this._queueCallback(o, t, t.classList.contains(td));
  }
  _keydown(t) {
    if (![DN, Jf, xN, Zf, sa, ed].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((r) => !Mn(r));
    let o;
    if ([sa, ed].includes(t.key))
      o = n[t.key === sa ? 0 : n.length - 1];
    else {
      const r = [Jf, Zf].includes(t.key);
      o = ql(n, t.target, r, !0);
    }
    o && (o.focus({
      preventScroll: !0
    }), Jo.getOrCreateInstance(o).show());
  }
  _getChildren() {
    return re.find(ua, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, n) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const o of n)
      this._setInitialAttributesOnChild(o);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const n = this._elemIsActive(t), o = this._getOuterElement(t);
    t.setAttribute("aria-selected", n), o !== t && this._setAttributeIfNotExists(o, "role", "presentation"), n || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const n = re.getElementFromSelector(t);
    n && (this._setAttributeIfNotExists(n, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, n) {
    const o = this._getOuterElement(t);
    if (!o.classList.contains(IN))
      return;
    const r = (i, s) => {
      const a = re.findOne(i, o);
      a && a.classList.toggle(s, n);
    };
    r(U_, to), r($N, aa), o.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, o) {
    t.hasAttribute(n) || t.setAttribute(n, o);
  }
  _elemIsActive(t) {
    return t.classList.contains(to);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(ua) ? t : re.findOne(ua, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(RN) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Jo.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
V.on(document, NN, j_, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !Mn(this) && Jo.getOrCreateInstance(this).show();
});
V.on(window, SN, () => {
  for (const e of re.find(PN))
    Jo.getOrCreateInstance(e);
});
Ct(Jo);
const LN = "toast", MN = "bs.toast", jn = `.${MN}`, FN = `mouseover${jn}`, BN = `mouseout${jn}`, HN = `focusin${jn}`, UN = `focusout${jn}`, jN = `hide${jn}`, KN = `hidden${jn}`, WN = `show${jn}`, zN = `shown${jn}`, GN = "fade", nd = "hide", bi = "show", Oi = "showing", YN = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, qN = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class ai extends Ft {
  constructor(t, n) {
    super(t, n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return qN;
  }
  static get DefaultType() {
    return YN;
  }
  static get NAME() {
    return LN;
  }
  // Public
  show() {
    if (V.trigger(this._element, WN).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(GN);
    const n = () => {
      this._element.classList.remove(Oi), V.trigger(this._element, zN), this._maybeScheduleHide();
    };
    this._element.classList.remove(nd), oi(this._element), this._element.classList.add(bi, Oi), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || V.trigger(this._element, jN).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(nd), this._element.classList.remove(Oi, bi), V.trigger(this._element, KN);
    };
    this._element.classList.add(Oi), this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(bi), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(bi);
  }
  // Private
  _maybeScheduleHide() {
    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay)));
  }
  _onInteraction(t, n) {
    switch (t.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = n;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = n;
        break;
      }
    }
    if (n) {
      this._clearTimeout();
      return;
    }
    const o = t.relatedTarget;
    this._element === o || this._element.contains(o) || this._maybeScheduleHide();
  }
  _setListeners() {
    V.on(this._element, FN, (t) => this._onInteraction(t, !0)), V.on(this._element, BN, (t) => this._onInteraction(t, !1)), V.on(this._element, HN, (t) => this._onInteraction(t, !0)), V.on(this._element, UN, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ai.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Ts(ai);
Ct(ai);
var XN = Object.defineProperty, QN = (e, t, n) => t in e ? XN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, It = (e, t, n) => QN(e, typeof t != "symbol" ? t + "" : t, n);
const JN = { class: "toast-header" }, ZN = ["textContent"], eC = ["textContent"], tC = { class: "toast-body" }, nC = ["textContent"], oC = /* @__PURE__ */ Qe({
  __name: "Toast",
  props: {
    visible: { type: Boolean, default: !1 },
    title: { default: "" },
    subtitle: { default: "" },
    body: { default: "" },
    animation: { type: Boolean, default: !0 },
    autohide: { type: Boolean, default: !0 },
    delay: { default: 15e3 },
    variant: {}
  },
  emits: ["hide", "hidden", "show", "shown"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, { visible: i, animation: s, autohide: a, delay: l } = En(o), f = Oe(), u = Oe();
    kn(i, (L) => {
      E();
    }, { immediate: !0 });
    function c() {
      f.value.show();
    }
    function d() {
      f.value.hide();
    }
    function p() {
      f.value.dispose();
    }
    function _() {
      f.value.isShown();
    }
    function g() {
      f.value.getOrCreateInstance();
    }
    function y() {
      f.value.getInstance();
    }
    function E() {
      f.value && (i.value === !0 ? c() : d());
    }
    function O() {
      r("hide", f.value);
    }
    function v() {
      r("hidden", f.value);
    }
    function S() {
      r("show", f.value);
    }
    async function T() {
      r("shown", f.value);
    }
    const N = { show: c, hide: d, dispose: p, isShown: _, getOrCreateInstance: g, getInstance: y };
    return t({ ...N }), tr(() => {
      u.value.addEventListener("hide.bs.toast", O), u.value.addEventListener("hidden.bs.toast", v), u.value.addEventListener("show.bs.toast", S), u.value.addEventListener("shown.bs.toast", T), f.value = new ai(u.value, {
        animation: s.value,
        autohide: a.value,
        delay: l.value
      }), E();
    }), (L, $) => (oe(), ue("div", {
      ref_key: "toastRef",
      ref: u,
      class: $e(["toast", [L.variant ? `text-bg-${L.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      he(L.$slots, "header", Fe(Ve({ ...N })), () => [
        H("div", JN, [
          he(L.$slots, "title", Fe(Ve({ ...N })), () => [
            H("strong", {
              class: "me-auto",
              textContent: Ze(L.title)
            }, null, 8, ZN)
          ], !0),
          he(L.$slots, "subtitle", Fe(Ve({ ...N })), () => [
            H("small", {
              textContent: Ze(L.subtitle)
            }, null, 8, eC)
          ], !0),
          H("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: d
          })
        ])
      ], !0),
      he(L.$slots, "body", Fe(Ve({ ...N })), () => [
        H("div", tC, [
          he(L.$slots, "default", Fe(Ve({ ...N })), () => [
            H("span", {
              textContent: Ze(L.body)
            }, null, 8, nC)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), on = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, K_ = /* @__PURE__ */ on(oC, [["__scopeId", "data-v-c0cdbae8"]]);
function rC() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16);
  });
}
const iC = { id: "toast-wrapper" };
let od;
const sC = /* @__PURE__ */ Qe({
  __name: "Toaster",
  setup(e, { expose: t }) {
    const n = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, o = Oe(/* @__PURE__ */ new Map());
    od = (i, s = "top right") => {
      const a = rC(), l = { ...n, ...i, id: a };
      let f = o.value.get(s);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(l), o.value.set(s, f);
    };
    function r(i, s) {
      const a = o.value.get(i);
      a?.delete(s);
    }
    return t({ toast: od }), (i, s) => (oe(), Zt(cl, { to: "body" }, [
      H("div", iC, [
        (oe(!0), ue(Ie, null, $n(o.value, ([a, l]) => (oe(), ue("div", {
          key: a,
          class: $e(["toast-group", `${a}`])
        }, [
          (oe(!0), ue(Ie, null, $n(l, (f, u) => (oe(), Zt(K_, Bn({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (c) => r(a, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), aC = /* @__PURE__ */ on(sC, [["__scopeId", "data-v-786d1c50"]]), W_ = () => {
  let e = [];
  function t() {
    e = [], document.querySelectorAll("*").forEach((o) => {
      const r = getComputedStyle(o);
      r.position === "sticky" && (e.push({ element: o, originalPosition: r.position }), o.style.position = "relative");
    });
  }
  function n() {
    e.forEach((o) => {
      o.element.style.position = o.originalPosition;
    });
  }
  return { removeStickyElements: t, restoreStickyElements: n };
};
var nn = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(nn || {});
const Zo = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(nn).includes(n) || n == "" ? "" : `${t}${n}`;
}, lC = { class: "modal-content" }, uC = { class: "modal-header" }, cC = ["innerHTML"], fC = { class: "modal-body" }, dC = ["innerHTML"], pC = { class: "modal-footer" }, hC = ["innerHTML"], _C = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const mC = /* @__PURE__ */ Qe({
  __name: "Modal",
  props: {
    title: { default: "" },
    body: { default: "" },
    textCancel: { default: "Cancel" },
    textOk: { type: [String, Boolean], default: "Ok" },
    backdrop: { type: [Boolean, String], default: !0 },
    keyboard: { type: Boolean, default: !0 },
    focus: { type: Boolean, default: !0 },
    disableOutsideClick: { type: Boolean, default: !1 },
    okOnly: { type: Boolean, default: !1 },
    size: { default: nn.STANDARD },
    btnSize: { default: nn.SMALL },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["onShown", "onHidden"],
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      backdrop: r,
      keyboard: i,
      focus: s,
      disableOutsideClick: a,
      size: l,
      btnSize: f
    } = En(o), u = n, c = Te(() => Zo(l.value, "modal-")), d = Te(() => Zo(f.value, "btn-")), p = Oe();
    let _;
    const g = Eo(), y = () => document.querySelectorAll(".modal.show").length, E = () => typeof window < "u" && window._managedModals ? window._managedModals : [], O = 1055, v = Oe(O), S = () => {
      const Y = y();
      v.value = O + Y;
    };
    let T;
    const N = W_();
    function L() {
      return new Promise((Y, F) => {
        if (!p.value) return;
        N.removeStickyElements(), S(), p.value.classList.add("managed-modal");
        const J = E(), _e = J.length + 1, Le = {
          element: p.value,
          priority: _e,
          instance: g
        };
        J.push(Le), p.value.addEventListener("shown.bs.modal", () => {
          G();
        }, { once: !0 }), _?.show(), T = Y, u("onShown", _);
      });
    }
    function $(Y = !0) {
      if (!p.value) return;
      const F = E(), J = F.findIndex((_e) => _e.element === p.value);
      J > -1 && F.splice(J, 1), p.value.addEventListener("hidden.bs.modal", () => {
        p.value && (p.value.style.display = ""), G();
      }, { once: !0 }), _?.hide(), typeof T == "function" && T(Y), u("onHidden", _), N.restoreStickyElements();
    }
    function x() {
      _?.toggle();
    }
    const G = () => {
      const Y = E();
      if (Y.length === 0) return;
      Y.sort((J, _e) => J.priority - _e.priority);
      const F = Y[Y.length - 1];
      Y.forEach((J) => {
        J.element !== F.element ? J.element.style.opacity = "0" : J.element.style.opacity = "1";
      });
    };
    tr(() => {
      _ = new go(p.value, {
        backdrop: r?.value,
        keyboard: i.value,
        focus: s.value
      }), p.value.classList.add("managed-modal"), _l(() => {
        o?.visible === !0 ? _?.show() : _?.hide();
      });
    });
    function Q(Y) {
      r?.value !== "static" && $(!1);
    }
    function D() {
      $(!1);
    }
    function q() {
      $(!1);
    }
    function ce() {
      $(!0);
    }
    t({
      modal: _,
      show: L,
      hide: $,
      toggle: x,
      onHeaderCloseClicked: D,
      onCancelClicked: q,
      onOkCLicked: ce
    });
    const pe = { show: L, hide: $, toggle: x, modal: _ };
    return (Y, F) => (oe(), ue("div", Bn({
      ref_key: "modalElement",
      ref: p,
      class: "modal fade",
      tabindex: "-1"
    }, { ...Y.$attrs }, {
      onClick: Rp(Q, ["self"]),
      style: { zIndex: v.value }
    }), [
      H("div", {
        class: $e(["modal-dialog", c.value])
      }, [
        H("div", lC, [
          he(Y.$slots, "header", Fe(Ve({ ...pe })), () => [
            H("div", uC, [
              he(Y.$slots, "title", Fe(Ve({ ...pe })), () => [
                H("h5", {
                  class: "modal-title",
                  innerHTML: Y.title
                }, null, 8, cC)
              ], !0),
              he(Y.$slots, "header-close-button", Fe(Ve({ ...pe })), () => [
                H("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: D
                })
              ], !0)
            ])
          ], !0),
          H("div", fC, [
            he(Y.$slots, "default", Fe(Ve({ ...pe })), () => [
              H("span", { innerHTML: Y.body }, null, 8, dC)
            ], !0)
          ]),
          H("div", pC, [
            he(Y.$slots, "footer", Fe(Ve({ ...pe })), () => [
              Y.okOnly ? Ho("", !0) : (oe(), ue("button", {
                key: 0,
                type: "button",
                class: $e(["btn btn-secondary", d.value]),
                onClick: q
              }, [
                he(Y.$slots, "button-cancel", Fe(Ve({ ...pe })), () => [
                  H("span", { innerHTML: Y.textCancel }, null, 8, hC)
                ], !0)
              ], 2)),
              H("button", {
                type: "button",
                class: $e(["btn btn-primary", d.value]),
                onClick: ce
              }, [
                he(Y.$slots, "button-ok", Fe(Ve({ ...pe })), () => [
                  H("span", { innerHTML: Y.textOk }, null, 8, _C)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), z_ = /* @__PURE__ */ on(mC, [["__scopeId", "data-v-b8ba4eaa"]]), gC = /* @__PURE__ */ Qe({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = Oe(void 0), o = Oe({});
    function r(s = {}) {
      var a;
      return s.okOnly = !1, o.value = s, (a = n.value) == null ? void 0 : a.show();
    }
    function i(s = {}) {
      var a;
      return s.okOnly = !0, o.value = s, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: r, alert: i }), (s, a) => (oe(), Zt(cl, { to: "body" }, [
      Se(z_, Bn({
        ref_key: "modalRef",
        ref: n
      }, { ...o.value }), null, 16)
    ]));
  }
}), EC = {
  "data-header": "",
  class: "border-bottom"
}, vC = { class: "d-flex gap-2 p-2" }, yC = { class: "p-2" }, bC = {
  "data-footer": "",
  class: "border-top p-2"
}, OC = { class: "buttons" }, AC = /* @__PURE__ */ Qe({
  __name: "DialogBox",
  props: {
    title: { default: "" },
    body: { default: "" },
    textCancel: { default: "Cancel" },
    textOk: { type: [String, Boolean], default: "Ok" },
    backdrop: { type: [Boolean, String], default: !0 },
    keyboard: { type: Boolean, default: !0 },
    focus: { type: Boolean, default: !0 },
    disableOutsideClick: { type: Boolean, default: !1 },
    okOnly: { type: Boolean, default: !1 },
    size: { default: nn.STANDARD },
    btnSize: { default: nn.SMALL },
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, { backdrop: o, disableOutsideClick: r, modal: i, size: s, btnSize: a } = En(n), l = () => document.querySelectorAll("dialog[open]").length, f = 1056, u = Oe(f), c = Oe(!1), d = Oe(!1), p = Oe(!1), _ = Oe(), g = Oe(!1), y = Te(() => Zo(s.value, "modal-")), E = Te(() => Zo(a.value, "btn-")), O = Te(() => ({
      opening: c.value,
      closing: d.value,
      "no-backdrop": o.value === !1,
      static: g.value
    }));
    let v = null;
    const S = () => {
      const D = l();
      u.value = f + D;
    }, T = W_(), N = async () => (S(), T.removeStickyElements(), c.value = !0, _.value.addEventListener(
      "animationend",
      () => {
        c.value = !1, p.value = !0;
      },
      { once: !0 }
    ), i.value === !0 ? _.value.showModal() : _.value.show(), new Promise((D, q) => {
      v = D;
    })), L = async (D = !1) => {
      d.value = !0, _.value.addEventListener(
        "animationend",
        () => {
          _.value.close(), d.value = !1, p.value = !1, typeof v == "function" && v(D), v = null, T.restoreStickyElements();
        },
        { once: !0 }
      );
    }, $ = async () => {
      p.value === !0 ? L() : N();
    }, x = () => {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 200);
    }, G = () => {
      if (o.value === "static" || r.value === !0) {
        x();
        return;
      }
      L(!1);
    };
    if (i.value === !0) {
      let D = function(ce) {
        if (o.value === "static" || r.value === !0) {
          x();
          return;
        }
        ce.target === _.value && L(!1);
      };
      const q = new AbortController();
      tr(() => {
        document.addEventListener("click", (ce) => {
          D(ce);
        }, { signal: q.signal });
      }), fl(() => {
        q.abort();
      });
    }
    const Q = { show: N, hide: L, toggle: $, dialog: _ };
    return t({
      show: N,
      hide: L,
      toggle: $
    }), (D, q) => (oe(), ue("div", {
      class: "dialog-wrapper",
      style: qr({ zIndex: u.value })
    }, [
      H("div", {
        class: "backdrop",
        onClick: G
      }),
      H("dialog", {
        ref_key: "dialog",
        ref: _,
        class: $e(O.value)
      }, [
        H("div", {
          class: $e(["content", y.value])
        }, [
          he(D.$slots, "header", Fe(Ve({ ...Q })), () => [
            H("div", EC, [
              H("div", vC, [
                he(D.$slots, "title", Fe(Ve({ ...Q })), () => [
                  At(Ze(D.title), 1)
                ], !0),
                he(D.$slots, "header-close-button", {}, () => [
                  H("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: q[0] || (q[0] = (ce) => L(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          H("div", yC, [
            he(D.$slots, "default", Fe(Ve({ ...Q })), () => [
              At(Ze(D.body), 1)
            ], !0)
          ]),
          he(D.$slots, "footer", Fe(Ve({ ...Q })), () => [
            H("div", bC, [
              H("div", OC, [
                D.okOnly ? Ho("", !0) : (oe(), ue("button", {
                  key: 0,
                  type: "button",
                  class: $e(["btn btn-secondary", E.value]),
                  onClick: q[1] || (q[1] = (ce) => L(!1))
                }, [
                  he(D.$slots, "textCancel", Fe(Ve({ ...Q })), () => [
                    At(Ze(D.textCancel), 1)
                  ], !0)
                ], 2)),
                H("button", {
                  type: "button",
                  class: $e(["btn btn-primary", E.value]),
                  onClick: q[2] || (q[2] = (ce) => L(!0))
                }, [
                  he(D.$slots, "textOk", Fe(Ve({ ...Q })), () => [
                    At(Ze(D.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), G_ = /* @__PURE__ */ on(AC, [["__scopeId", "data-v-0990c791"]]), wC = /* @__PURE__ */ Qe({
  __name: "DialogManager",
  setup(e, { expose: t }) {
    const n = Oe(void 0), o = Oe({});
    function r(s = {}) {
      var a;
      return s.okOnly = !1, o.value = s, (a = n.value) == null ? void 0 : a.show();
    }
    function i(s = {}) {
      var a;
      return s.okOnly = !0, o.value = s, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: r, alert: i }), (s, a) => (oe(), Zt(cl, { to: "body" }, [
      Se(G_, Bn({
        ref_key: "modalRef",
        ref: n
      }, { ...o.value }), null, 16)
    ]));
  }
}), TC = { "data-first": "" }, NC = ["disabled", "innerHTML"], CC = { "data-prev": "" }, SC = ["disabled", "innerHTML"], DC = { key: 0 }, xC = ["innerHTML"], IC = ["onClick"], $C = { "data-next": "" }, kC = ["disabled", "innerHTML"], RC = { "data-last": "" }, VC = ["disabled", "innerHTML"], PC = /* @__PURE__ */ Qe({
  __name: "Pagination",
  props: {
    modelValue: { default: 1 },
    perPage: { default: 5 },
    maxVisibleButtons: { default: 5 },
    totalItems: { default: 0 },
    hideEllipsis: { type: Boolean, default: !1 },
    hideGotoEndButtons: { type: Boolean, default: !1 },
    firstText: { default: "«" },
    prevText: { default: "‹" },
    nextText: { default: "›" },
    lastText: { default: "»" },
    ellipsisText: { default: "…" },
    size: { default: nn.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    function n(v, S = 0) {
      return [...Array(v).keys()].map((T) => T + S);
    }
    const o = t, r = e, { modelValue: i, maxVisibleButtons: s, hideEllipsis: a } = En(r), l = Math.floor(s.value / 2), f = Te(() => {
      let v = s.value, S = i.value <= l ? 1 : i.value - l;
      return i.value >= d.value - l && (S = d.value - v + 1), S < 1 && (S = 1), d.value < v && (v = d.value), n(v, S);
    }), u = Te(() => i.value <= 1), c = Te(() => i.value >= d.value), d = Te(() => {
      const { perPage: v, totalItems: S } = r;
      return Math.ceil(S / v);
    });
    _l(() => {
      d.value > 0 && i.value > d.value && o("update:modelValue", d.value);
    });
    function p(v) {
      const S = s.value - 1;
      return !(a.value === !0 || v === 0 && i.value - l - 1 <= 0 || v === S && i.value + l >= d.value || v > 0 && v < S);
    }
    function _(v) {
      v < 1 && (v = 1), v > d.value && (v = d.value), o("update:modelValue", v);
    }
    function g() {
      o("update:modelValue", 1);
    }
    function y() {
      o("update:modelValue", d.value);
    }
    function E() {
      let v = i.value - 1;
      v < 1 && (v = 1), o("update:modelValue", v);
    }
    function O() {
      let v = i.value + 1;
      v > d.value && (v = d.value), o("update:modelValue", v);
    }
    return (v, S) => (oe(), ue("ul", {
      class: $e(["pagination", v.size])
    }, [
      H("li", TC, [
        H("button", {
          class: "",
          disabled: u.value,
          innerHTML: v.firstText,
          onClick: g
        }, null, 8, NC)
      ]),
      H("li", CC, [
        H("button", {
          class: "",
          disabled: u.value,
          innerHTML: v.prevText,
          onClick: E
        }, null, 8, SC)
      ]),
      (oe(!0), ue(Ie, null, $n(f.value, (T, N) => (oe(), ue(Ie, null, [
        p(N) ? (oe(), ue("li", DC, [
          H("button", {
            disabled: "",
            class: "",
            innerHTML: v.ellipsisText
          }, null, 8, xC)
        ])) : (oe(), ue("li", {
          key: 1,
          "data-prev": "",
          class: $e({ active: v.modelValue === T })
        }, [
          H("button", {
            class: "",
            onClick: (L) => _(T)
          }, Ze(T), 9, IC)
        ], 2))
      ], 64))), 256)),
      H("li", $C, [
        H("button", {
          class: "",
          disabled: c.value,
          innerHTML: v.nextText,
          onClick: O
        }, null, 8, kC)
      ]),
      H("li", RC, [
        H("button", {
          class: "",
          disabled: c.value,
          innerHTML: v.lastText,
          onClick: y
        }, null, 8, VC)
      ])
    ], 2));
  }
}), LC = /* @__PURE__ */ on(PC, [["__scopeId", "data-v-2bfd7085"]]), MC = { class: "d-inline" }, FC = { class: "fw-bold" }, BC = /* @__PURE__ */ Qe({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { options: r } = En(n), i = Te({
      get: () => n.modelValue,
      set: (s) => o("update:modelValue", s)
    });
    return (s, a) => {
      const l = Bo("b-dropdown-item"), f = Bo("b-dropdown");
      return oe(), Zt(f, Bn({
        variant: "outline-primary",
        size: "sm"
      }, { ...s.$attrs }), {
        button: dn(() => [
          H("div", MC, [
            he(s.$slots, "default", { selected: i.value }, () => [
              a[0] || (a[0] = H("span", null, "Per page: ", -1)),
              H("span", FC, Ze(i.value), 1)
            ])
          ])
        ]),
        default: dn(() => [
          (oe(!0), ue(Ie, null, $n(it(r), (u, c) => (oe(), Zt(l, {
            key: u,
            onClick: (d) => i.value = u,
            active: u === s.modelValue
          }, {
            default: dn(() => [
              At(Ze(u), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), HC = ["value"], UC = /* @__PURE__ */ Qe({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { options: r } = En(n), i = Te({
      get: () => n.modelValue,
      set: (s) => o("update:modelValue", s)
    });
    return (s, a) => zd((oe(), ue("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (l) => i.value = l)
    }, [
      (oe(!0), ue(Ie, null, $n(it(r), (l, f) => (oe(), ue("option", {
        key: l,
        value: l
      }, Ze(l), 9, HC))), 128))
    ], 512)), [
      [rv, i.value]
    ]);
  }
});
var Qn = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(Qn || {});
class jC {
  constructor(t, n = "ASC", o) {
    It(this, "key"), It(this, "direction"), It(this, "sortFn"), this.key = t, this.direction = n, this.sortFn = o;
  }
}
const rd = (e, t) => {
  const n = (a, l) => {
    let f = typeof a, u = typeof l;
    return f == "number" && f == u;
  }, o = (a, l) => a - l, r = (a, l) => (a = a ?? "", l = l ?? "", a.localeCompare(l)), i = (a, l) => n(a, l) ? o : r, s = [...t];
  return s.sort((a, l) => {
    let f = 0;
    for (let u of e) {
      let { key: c, direction: d, sortFn: p } = u, _ = d === "ASC" ? 1 : -1, g = a[c], y = l[c];
      if (p = typeof p == "function" ? p : i(g, y), f = p(g, y, a, l, t, u, _) * _, f !== 0) return f;
    }
    return f;
  }), s;
}, KC = ["onClick"], WC = { class: "th-wrapper" }, zC = {
  key: 0,
  "data-sort-indicator": ""
}, GC = { class: "sort-index" }, YC = { class: "sort-direction" }, qC = ["onMouseover"], XC = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, QC = ["colspan"], JC = ["innerHTML"];
class ca {
  constructor(t = "", n = "", o = !1, r) {
    It(this, "key"), It(this, "label"), It(this, "sortable"), It(this, "sortFn"), this.key = t, this.label = n, this.sortable = o, this.sortFn = r;
  }
}
const ZC = /* @__PURE__ */ Qe({
  __name: "Table",
  props: {
    fields: { default: () => [] },
    items: { default: () => [] },
    striped: { type: Boolean, default: !1 },
    hover: { type: Boolean, default: !0 },
    externalSort: { type: Boolean, default: !1 },
    showEmpty: { type: Boolean, default: !1 },
    emptyText: { default: "nothing to display" }
  },
  emits: ["sort", "onMouseOverCell"],
  setup(e, { emit: t }) {
    const n = (g) => {
      let y = [];
      for (const E of g)
        y = y.concat(Object.keys(E));
      return y = y.filter((E, O) => y.indexOf(E) == O), y;
    }, o = t, r = e, i = Oe([]), { fields: s, items: a } = En(r), l = Te(() => {
      if (r.externalSort || i.value.length == 0) return r.items;
      const g = [...r.items];
      return rd(i.value, g);
    }), f = Te(() => {
      let g = s.value, y = [];
      return g.length === 0 && (g = n([...a.value])), g.reduce((E, O, v) => {
        if (typeof O == "string")
          E.push(new ca(O, O));
        else if (O instanceof ca)
          E.push(O);
        else if (typeof O == "object") {
          const { key: S, label: T, sortable: N, sortFn: L } = O;
          E.push(new ca(S, T, N, L));
        }
        return E;
      }, y);
    });
    function u(g) {
      const y = i.value.findIndex((E) => E.key === g.key);
      return y < 0 ? "" : y + 1;
    }
    function c(g) {
      const y = i.value.findIndex((O) => O.key === g.key);
      if (y < 0) return "fas fa-sort";
      const E = i.value[y];
      return E.direction === Qn.ASC ? "fas fa-sort-up" : E.direction === Qn.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function d(g) {
      const { key: y } = g, E = i.value.findIndex((O) => O.key === y);
      if (E < 0) {
        const O = new jC(y, Qn.ASC, g.sortFn);
        i.value.push(O);
      } else {
        const O = i.value[E], v = O.direction;
        v === Qn.ASC ? O.direction = Qn.DESC : v === Qn.DESC && i.value.splice(E, 1);
      }
      o("sort", i.value, rd);
    }
    function p(g, y, E, O) {
      o("onMouseOverCell", g, y, E, O);
    }
    let _ = Oe(null);
    return tr(() => {
      _.value = Eo();
    }), (g, y) => (oe(), ue("table", Bn({ ...g.$attrs }, {
      class: { striped: g.striped, hover: g.hover }
    }), [
      H("thead", null, [
        (oe(!0), ue(Ie, null, $n(f.value, (E) => (oe(), ue("th", {
          key: `thead-${E.key}`,
          class: $e({ sortable: E.sortable }),
          onClick: (O) => E.sortable && d(E)
        }, [
          H("span", WC, [
            he(g.$slots, `head(${E.key})`, {
              field: E,
              data: it(_),
              value: E.label
            }, () => [
              At(Ze(E.label), 1)
            ], !0),
            E.sortable ? (oe(), ue("span", zC, [
              H("span", GC, Ze(u(E)), 1),
              H("span", YC, [
                H("i", {
                  class: $e(c(E))
                }, null, 2)
              ])
            ])) : Ho("", !0)
          ])
        ], 10, KC))), 128))
      ]),
      H("tbody", null, [
        (oe(!0), ue(Ie, null, $n(l.value, (E, O) => (oe(), ue(Ie, {
          key: `trow-${E?.id ?? O}`
        }, [
          he(g.$slots, "row", {
            item: E,
            index: O,
            colspan: f.value.length
          }, void 0, !0),
          H("tr", null, [
            (oe(!0), ue(Ie, null, $n(f.value, (v) => (oe(), ue("td", {
              key: `tcell-${v.key + (E?.id ?? O)}`,
              class: $e({ [`tcell-${v?.key}`]: !0 }),
              onMouseover: (S) => p(S, E, O, v)
            }, [
              he(g.$slots, `cell(${v?.key})`, {
                data: it(_),
                item: E,
                field: v,
                value: E[v?.key]
              }, () => [
                At(Ze(E[v?.key]), 1)
              ], !0)
            ], 42, qC))), 128))
          ])
        ], 64))), 128))
      ]),
      H("tfoot", null, [
        he(g.$slots, "footer", { data: it(_) }, void 0, !0)
      ]),
      g.showEmpty && l.value.length === 0 ? (oe(), ue("tr", XC, [
        H("td", {
          colspan: f.value.length
        }, [
          he(g.$slots, "empty", {
            items: l.value,
            data: it(_),
            fields: f.value
          }, () => [
            H("span", { innerHTML: g.emptyText }, null, 8, JC)
          ], !0)
        ], 8, QC)
      ])) : Ho("", !0)
    ], 16));
  }
}), eS = /* @__PURE__ */ on(ZC, [["__scopeId", "data-v-b1e9b5de"]]);
var Y_ = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(Y_ || {});
const tS = { class: "d-inline-block position-relative" }, nS = ["disabled"], id = "data-prevent-close", oS = /* @__PURE__ */ Qe({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: Y_.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    menuEnd: { type: Boolean, default: !1 },
    size: { default: nn.STANDARD },
    disabled: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: t, emit: n }) {
    const o = Oe(), r = e, i = Oe(), s = Oe(!1), a = Oe(r.variant), l = Oe(r.centered), f = Oe(r.dropup), u = Oe(r.dropend), c = Oe(r.dropstart), d = Oe(r.menuEnd), p = n, _ = Te(() => {
      const $ = [];
      return a != null && a.value && $.push(`btn-${a.value}`), r.size && $.push(`btn-${r.size}`), $;
    }), g = Te(() => {
      const $ = [];
      return l != null && l.value && $.push("dropdown-center"), f != null && f.value && $.push("dropup"), c != null && c.value && $.push("dropstart"), !(c != null && c.value) && u != null && u.value && $.push("dropend"), $.length === 0 && $.push("dropdown"), $.unshift("btn-group"), $;
    }), y = Te(() => {
      const $ = [];
      return s.value && $.push("show"), d.value && $.push("dropdown-menu-end"), $;
    }), E = () => {
      if (!s.value) return;
      const $ = i.value.getBoundingClientRect(), x = o.value.getBoundingClientRect(), G = window.innerHeight - $.bottom, Q = $.top, D = window.innerWidth - $.right, q = $.left;
      f.value = G < x.height && Q >= x.height, d.value = D < x.width && q >= x.width;
    };
    async function O() {
      s.value = !0, await fs(), E();
    }
    function v() {
      s.value = !1;
    }
    function S($) {
      s.value ? v() : O();
    }
    function T($) {
      const { target: x } = $;
      x?.closest(`[${id}],[${id}=true]`) || v();
    }
    function N() {
      s.value && v();
    }
    kn(s, ($, x) => {
      typeof x > "u" || $ !== x && (p("toggle", { show: $ }), $ === !0 ? p("open", { show: $ }) : p("close", { show: $ }));
    }, { immediate: !0 });
    const L = {
      show: s,
      disabled: r.disabled,
      buttonClasses: _,
      onButtonClicked: S,
      onMenuClicked: T,
      onClickOutside: N,
      open: O,
      close: v
    };
    return t({
      ...L
    }), ($, x) => {
      const G = Ig("click-outside");
      return oe(), ue("div", {
        ref_key: "dropDownRef",
        ref: i,
        class: $e([g.value, "dropdown-wrapper"])
      }, [
        zd((oe(), ue("div", tS, [
          he($.$slots, "header", Fe(Ve({ ...L })), () => [
            H("button", {
              class: $e(["btn dropdown-toggle", _.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: S,
              disabled: $.disabled
            }, [
              he($.$slots, "button", Fe(Ve({ ...L })), () => [
                At(Ze($.text), 1)
              ], !0)
            ], 10, nS)
          ], !0),
          H("ul", {
            ref_key: "dropDownMenuRef",
            ref: o,
            class: $e(["dropdown-menu", y.value]),
            onClick: T
          }, [
            he($.$slots, "default", Fe(Ve({ ...L })), void 0, !0)
          ], 2)
        ])), [
          [G, N]
        ])
      ], 2);
    };
  }
}), rS = /* @__PURE__ */ on(oS, [["__scopeId", "data-v-4910c394"]]), iS = ["data-prevent-close"], sS = /* @__PURE__ */ Qe({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = En(t);
    return (o, r) => (oe(), ue("li", {
      "data-prevent-close": it(n) ? "" : null
    }, [
      H("span", {
        class: $e(["dropdown-item", { active: o.active }]),
        role: "button",
        tabindex: "0"
      }, [
        he(o.$slots, "default")
      ], 2)
    ], 8, iS));
  }
}), aS = {}, lS = { "data-prevent-close": "" }, uS = { class: "dropdown-header" };
function cS(e, t) {
  return oe(), ue("li", lS, [
    H("h6", uS, [
      he(e.$slots, "default")
    ])
  ]);
}
const fS = /* @__PURE__ */ on(aS, [["render", cS]]), dS = {};
function pS(e, t) {
  return oe(), ue("li", null, t[0] || (t[0] = [
    H("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const hS = /* @__PURE__ */ on(dS, [["render", pS]]), _S = {
  mounted(e, t, n, o) {
    new yo(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, mS = (e, t) => {
  function n(i, s) {
    for (; i !== null; ) {
      if (i === s)
        return !0;
      i = i.parentNode;
    }
    return !1;
  }
  const o = new AbortController();
  function r(i, s) {
    document.addEventListener("click", function(a) {
      const l = a.target;
      i && (n(l, i) || s());
    }, { signal: o.signal });
  }
  return r(e, t), o;
}, gS = {
  mounted(e, t, n, o) {
    const r = t.value;
    mS(e, r);
  }
};
class Qa {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
It(Qa, "list", /* @__PURE__ */ new Set());
const ES = { class: "drawer-content" }, vS = { class: "drawer-header" }, yS = ["innerHTML"], bS = { class: "drawer-body" }, OS = ["innerHTML"], AS = { class: "drawer-footer" }, wS = ["innerHTML"], TS = ["innerHTML"], NS = /* @__PURE__ */ Qe({
  __name: "Drawer",
  props: {
    title: { default: "" },
    body: { default: "" },
    textCancel: { default: "Cancel" },
    textOk: { type: [String, Boolean], default: "Ok" },
    backdrop: { type: [Boolean, String], default: "static" },
    keyboard: { type: Boolean, default: !0 },
    focus: { type: Boolean, default: !0 },
    disableOutsideClick: { type: Boolean },
    okOnly: { type: Boolean, default: !1 },
    size: { default: nn.STANDARD },
    btnSize: { default: nn.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: o,
      keyboard: r,
      focus: i,
      size: s,
      btnSize: a
    } = En(n), l = Te(() => Zo(s.value, "drawer-")), f = Te(() => Zo(a.value, "btn-")), u = Oe(), c = Oe(!1), d = Eo();
    let p;
    async function _() {
      return c.value === !0 ? void 0 : new Promise((N, L) => {
        c.value = !0, p = N;
      });
    }
    function g(N = !0) {
      c.value = !1, typeof p == "function" && p(N);
    }
    function y() {
      c.value === !0 ? _() : g(!1);
    }
    function E(N) {
      o?.value !== "static" && g(!1);
    }
    function O() {
      g(!1);
    }
    function v() {
      g(!1);
    }
    function S() {
      g(!0);
    }
    function T() {
      c.value === !0 ? Qa.add(d) : Qa.delete(d);
    }
    return t({
      show: _,
      hide: g,
      toggle: y
    }), (N, L) => (oe(), Zt(LE, {
      onBeforeEnter: T,
      onAfterLeave: T
    }, {
      default: dn(() => [
        c.value ? (oe(), ue("div", Bn({
          key: 0,
          ref_key: "drawerElement",
          ref: u,
          class: "drawer",
          tabindex: "-1"
        }, { ...N.$attrs }, {
          onClick: Rp(E, ["self"])
        }), [
          H("div", {
            class: $e(["drawer-dialog", l.value])
          }, [
            H("div", ES, [
              H("div", vS, [
                he(N.$slots, "header", {}, () => [
                  H("h5", {
                    class: "drawer-title",
                    innerHTML: N.title
                  }, null, 8, yS)
                ], !0),
                H("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: O
                })
              ]),
              H("div", bS, [
                he(N.$slots, "default", {}, () => [
                  H("span", { innerHTML: N.body }, null, 8, OS)
                ], !0)
              ]),
              H("div", AS, [
                he(N.$slots, "footer", {}, () => [
                  N.okOnly ? Ho("", !0) : (oe(), ue("button", {
                    key: 0,
                    type: "button",
                    class: $e(["ms-auto btn btn-secondary", f.value]),
                    onClick: v
                  }, [
                    he(N.$slots, "button-cancel", {}, () => [
                      H("span", { innerHTML: N.textCancel }, null, 8, wS)
                    ], !0)
                  ], 2)),
                  H("button", {
                    type: "button",
                    class: $e(["btn btn-primary", f.value]),
                    onClick: S
                  }, [
                    he(N.$slots, "button-ok", {}, () => [
                      H("span", { innerHTML: N.textOk }, null, 8, TS)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : Ho("", !0)
      ]),
      _: 3
    }));
  }
}), CS = /* @__PURE__ */ on(NS, [["__scopeId", "data-v-2e49e8cb"]]), Ot = "b", SS = "$toaster", DS = "$modalManager", xS = "$dialogManager";
class q_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = gs(gC).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
It(q_, "component");
class X_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = gs(wC).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
It(X_, "component");
class Q_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = gs(aC).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
It(Q_, "component");
function IS(e) {
  e.component(`${Ot}-drawer`, CS), e.component(`${Ot}-modal`, z_), e.component(`${Ot}-dialog`, G_), e.component(`${Ot}-pagination`, LC), e.component(`${Ot}-pagination-dropdown`, BC), e.component(`${Ot}-pagination-select`, UC), e.component(`${Ot}-dropdown`, rS), e.component(`${Ot}-dropdown-item`, sS), e.component(`${Ot}-dropdown-header`, fS), e.component(`${Ot}-dropdown-divider`, hS), e.component(`${Ot}-table`, eS), e.component(`${Ot}-toast`, K_);
}
function $S(e) {
  e.directive("tooltip", _S), e.directive("click-outside", gS);
}
const kS = {
  install(e) {
    IS(e), $S(e);
    const t = Q_.getComponent(), n = q_.getComponent(), o = X_.getComponent();
    e.provide(SS, t), e.provide(DS, n), e.provide(xS, o);
  }
}, RS = (e) => {
  const t = gs(XO), n = Lb();
  t.use(kS), t.use(n);
  const o = GO();
  return t.use(o), t.mount(e), t;
};
export {
  RS as default
};
