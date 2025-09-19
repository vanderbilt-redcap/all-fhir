var qp = {};
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Yn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Be = qp.NODE_ENV !== "production" ? Object.freeze({}) : {}, yo = qp.NODE_ENV !== "production" ? Object.freeze([]) : [], ct = () => {
}, w_ = () => !1, Lr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fi = (e) => e.startsWith("onUpdate:"), Ze = Object.assign, bu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, A_ = Object.prototype.hasOwnProperty, Fe = (e, t) => A_.call(e, t), he = Array.isArray, Ps = (e) => Fr(e) === "[object Map]", la = (e) => Fr(e) === "[object Set]", Oc = (e) => Fr(e) === "[object Date]", be = (e) => typeof e == "function", Ge = (e) => typeof e == "string", an = (e) => typeof e == "symbol", je = (e) => e !== null && typeof e == "object", wu = (e) => (je(e) || be(e)) && be(e.then) && be(e.catch), Yp = Object.prototype.toString, Fr = (e) => Yp.call(e), Au = (e) => Fr(e).slice(8, -1), Xp = (e) => Fr(e) === "[object Object]", Su = (e) => Ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rr = /* @__PURE__ */ Yn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), S_ = /* @__PURE__ */ Yn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ua = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, O_ = /-(\w)/g, vt = ua(
  (e) => e.replace(O_, (t, n) => n ? n.toUpperCase() : "")
), C_ = /\B([A-Z])/g, zn = ua(
  (e) => e.replace(C_, "-$1").toLowerCase()
), Hs = ua((e) => e.charAt(0).toUpperCase() + e.slice(1)), Os = ua(
  (e) => e ? `on${Hs(e)}` : ""
), kt = (e, t) => !Object.is(e, t), uo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, _r = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Bi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, T_ = (e) => {
  const t = Ge(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Cc;
const Br = () => Cc || (Cc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Mt(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Ge(s) ? x_(s) : Mt(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (Ge(e) || je(e))
    return e;
}
const N_ = /;(?![^(]*\))/g, D_ = /:([^]+)/, k_ = /\/\*[^]*?\*\//g;
function x_(e) {
  const t = {};
  return e.replace(k_, "").split(N_).forEach((n) => {
    if (n) {
      const s = n.split(D_);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ue(e) {
  let t = "";
  if (Ge(e))
    t = e;
  else if (he(e))
    for (let n = 0; n < e.length; n++) {
      const s = ue(e[n]);
      s && (t += s + " ");
    }
  else if (je(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function st(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ge(t) && (e.class = ue(t)), n && (e.style = Mt(n)), e;
}
const R_ = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", I_ = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", P_ = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", V_ = /* @__PURE__ */ Yn(R_), M_ = /* @__PURE__ */ Yn(I_), L_ = /* @__PURE__ */ Yn(P_), F_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", B_ = /* @__PURE__ */ Yn(F_);
function Gp(e) {
  return !!e || e === "";
}
function j_(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = wo(e[s], t[s]);
  return n;
}
function wo(e, t) {
  if (e === t) return !0;
  let n = Oc(e), s = Oc(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = an(e), s = an(t), n || s)
    return e === t;
  if (n = he(e), s = he(t), n || s)
    return n && s ? j_(e, t) : !1;
  if (n = je(e), s = je(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (a && !l || !a && l || !wo(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function U_(e, t) {
  return e.findIndex((n) => wo(n, t));
}
const Jp = (e) => !!(e && e.__v_isRef === !0), F = (e) => Ge(e) ? e : e == null ? "" : he(e) || je(e) && (e.toString === Yp || !be(e.toString)) ? Jp(e) ? F(e.value) : JSON.stringify(e, Qp, 2) : String(e), Qp = (e, t) => Jp(t) ? Qp(e, t.value) : Ps(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Ua(s, r) + " =>"] = o, n),
    {}
  )
} : la(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ua(n))
} : an(t) ? Ua(t) : je(t) && !he(t) && !Xp(t) ? String(t) : t, Ua = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    an(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var qe = {};
function Yt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ht;
class Zp {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ht, !t && ht && (this.index = (ht.scopes || (ht.scopes = [])).push(
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
      const n = ht;
      try {
        return ht = this, t();
      } finally {
        ht = n;
      }
    } else qe.NODE_ENV !== "production" && Yt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ht, ht = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ht = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function eh(e) {
  return new Zp(e);
}
function th() {
  return ht;
}
function H_(e, t = !1) {
  ht ? ht.cleanups.push(e) : qe.NODE_ENV !== "production" && !t && Yt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let We;
const Ha = /* @__PURE__ */ new WeakSet();
class nh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ht && ht.active && ht.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ha.has(this) && (Ha.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || oh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Tc(this), rh(this);
    const t = We, n = on;
    We = this, on = !0;
    try {
      return this.fn();
    } finally {
      qe.NODE_ENV !== "production" && We !== this && Yt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ih(this), We = t, on = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Tu(t);
      this.deps = this.depsTail = void 0, Tc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ha.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Tl(this) && this.run();
  }
  get dirty() {
    return Tl(this);
  }
}
let sh = 0, ir, ar;
function oh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ar, ar = e;
    return;
  }
  e.next = ir, ir = e;
}
function Ou() {
  sh++;
}
function Cu() {
  if (--sh > 0)
    return;
  if (ar) {
    let t = ar;
    for (ar = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ir; ) {
    let t = ir;
    for (ir = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function rh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ih(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Tu(s), $_(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Tl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ah(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ah(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === yr) || (e.globalVersion = yr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Tl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = We, s = on;
  We = e, on = !0;
  try {
    rh(e);
    const o = e.fn(e._value);
    (t.version === 0 || kt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    We = n, on = s, ih(e), e.flags &= -3;
  }
}
function Tu(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), qe.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Tu(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function $_(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let on = !0;
const lh = [];
function ln() {
  lh.push(on), on = !1;
}
function un() {
  const e = lh.pop();
  on = e === void 0 ? !0 : e;
}
function Tc(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = We;
    We = void 0;
    try {
      t();
    } finally {
      We = n;
    }
  }
}
let yr = 0;
class W_ {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ca {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, qe.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!We || !on || We === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== We)
      n = this.activeLink = new W_(We, this), We.deps ? (n.prevDep = We.depsTail, We.depsTail.nextDep = n, We.depsTail = n) : We.deps = We.depsTail = n, uh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = We.depsTail, n.nextDep = void 0, We.depsTail.nextDep = n, We.depsTail = n, We.deps === n && (We.deps = s);
    }
    return qe.NODE_ENV !== "production" && We.onTrack && We.onTrack(
      Ze(
        {
          effect: We
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, yr++, this.notify(t);
  }
  notify(t) {
    Ou();
    try {
      if (qe.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Ze(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Cu();
    }
  }
}
function uh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        uh(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), qe.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const ji = /* @__PURE__ */ new WeakMap(), Vs = Symbol(
  qe.NODE_ENV !== "production" ? "Object iterate" : ""
), Nl = Symbol(
  qe.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Er = Symbol(
  qe.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ut(e, t, n) {
  if (on && We) {
    let s = ji.get(e);
    s || ji.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new ca()), o.map = s, o.key = n), qe.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function An(e, t, n, s, o, r) {
  const i = ji.get(e);
  if (!i) {
    yr++;
    return;
  }
  const a = (l) => {
    l && (qe.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: r
    }) : l.trigger());
  };
  if (Ou(), t === "clear")
    i.forEach(a);
  else {
    const l = he(e), f = l && Su(n);
    if (l && n === "length") {
      const u = Number(s);
      i.forEach((d, h) => {
        (h === "length" || h === Er || !an(h) && h >= u) && a(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(Er)), t) {
        case "add":
          l ? f && a(i.get("length")) : (a(i.get(Vs)), Ps(e) && a(i.get(Nl)));
          break;
        case "delete":
          l || (a(i.get(Vs)), Ps(e) && a(i.get(Nl)));
          break;
        case "set":
          Ps(e) && a(i.get(Vs));
          break;
      }
  }
  Cu();
}
function K_(e, t) {
  const n = ji.get(e);
  return n && n.get(t);
}
function no(e) {
  const t = Se(e);
  return t === e ? t : (ut(t, "iterate", Er), St(e) ? t : t.map(pt));
}
function da(e) {
  return ut(e = Se(e), "iterate", Er), e;
}
const z_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return $a(this, Symbol.iterator, pt);
  },
  concat(...e) {
    return no(this).concat(
      ...e.map((t) => he(t) ? no(t) : t)
    );
  },
  entries() {
    return $a(this, "entries", (e) => (e[1] = pt(e[1]), e));
  },
  every(e, t) {
    return Mn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Mn(this, "filter", e, t, (n) => n.map(pt), arguments);
  },
  find(e, t) {
    return Mn(this, "find", e, t, pt, arguments);
  },
  findIndex(e, t) {
    return Mn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Mn(this, "findLast", e, t, pt, arguments);
  },
  findLastIndex(e, t) {
    return Mn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Mn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Wa(this, "includes", e);
  },
  indexOf(...e) {
    return Wa(this, "indexOf", e);
  },
  join(e) {
    return no(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Wa(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Mn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return zo(this, "pop");
  },
  push(...e) {
    return zo(this, "push", e);
  },
  reduce(e, ...t) {
    return Nc(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Nc(this, "reduceRight", e, t);
  },
  shift() {
    return zo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Mn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return zo(this, "splice", e);
  },
  toReversed() {
    return no(this).toReversed();
  },
  toSorted(e) {
    return no(this).toSorted(e);
  },
  toSpliced(...e) {
    return no(this).toSpliced(...e);
  },
  unshift(...e) {
    return zo(this, "unshift", e);
  },
  values() {
    return $a(this, "values", pt);
  }
};
function $a(e, t, n) {
  const s = da(e), o = s[t]();
  return s !== e && !St(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const q_ = Array.prototype;
function Mn(e, t, n, s, o, r) {
  const i = da(e), a = i !== e && !St(e), l = i[t];
  if (l !== q_[t]) {
    const d = l.apply(e, r);
    return a ? pt(d) : d;
  }
  let f = n;
  i !== e && (a ? f = function(d, h) {
    return n.call(this, pt(d), h, e);
  } : n.length > 2 && (f = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const u = l.call(i, f, s);
  return a && o ? o(u) : u;
}
function Nc(e, t, n, s) {
  const o = da(e);
  let r = n;
  return o !== e && (St(e) ? n.length > 3 && (r = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : r = function(i, a, l) {
    return n.call(this, i, pt(a), l, e);
  }), o[t](r, ...s);
}
function Wa(e, t, n) {
  const s = Se(e);
  ut(s, "iterate", Er);
  const o = s[t](...n);
  return (o === -1 || o === !1) && br(n[0]) ? (n[0] = Se(n[0]), s[t](...n)) : o;
}
function zo(e, t, n = []) {
  ln(), Ou();
  const s = Se(e)[t].apply(e, n);
  return Cu(), un(), s;
}
const Y_ = /* @__PURE__ */ Yn("__proto__,__v_isRef,__isVue"), ch = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(an)
);
function X_(e) {
  an(e) || (e = String(e));
  const t = Se(this);
  return ut(t, "has", e), t.hasOwnProperty(e);
}
class dh {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (o ? r ? vh : gh : r ? mh : hh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = he(t);
    if (!o) {
      let l;
      if (i && (l = z_[n]))
        return l;
      if (n === "hasOwnProperty")
        return X_;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ye(t) ? t : s
    );
    return (an(n) ? ch.has(n) : Y_(n)) || (o || ut(t, "get", n), r) ? a : Ye(a) ? i && Su(n) ? a : a.value : je(a) ? o ? yh(a) : cs(a) : a;
  }
}
class fh extends dh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const l = kn(r);
      if (!St(s) && !kn(s) && (r = Se(r), s = Se(s)), !he(t) && Ye(r) && !Ye(s))
        return l ? !1 : (r.value = s, !0);
    }
    const i = he(t) && Su(n) ? Number(n) < t.length : Fe(t, n), a = Reflect.set(
      t,
      n,
      s,
      Ye(t) ? t : o
    );
    return t === Se(o) && (i ? kt(s, r) && An(t, "set", n, s, r) : An(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = Fe(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && An(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!an(n) || !ch.has(n)) && ut(t, "has", n), s;
  }
  ownKeys(t) {
    return ut(
      t,
      "iterate",
      he(t) ? "length" : Vs
    ), Reflect.ownKeys(t);
  }
}
class ph extends dh {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return qe.NODE_ENV !== "production" && Yt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return qe.NODE_ENV !== "production" && Yt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const G_ = /* @__PURE__ */ new fh(), J_ = /* @__PURE__ */ new ph(), Q_ = /* @__PURE__ */ new fh(!0), Z_ = /* @__PURE__ */ new ph(!0), Dl = (e) => e, ti = (e) => Reflect.getPrototypeOf(e);
function ey(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = Se(o), i = Ps(r), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, f = o[e](...s), u = n ? Dl : t ? Ui : pt;
    return !t && ut(
      r,
      "iterate",
      l ? Nl : Vs
    ), {
      // iterator protocol
      next() {
        const { value: d, done: h } = f.next();
        return h ? { value: d, done: h } : {
          value: a ? [u(d[0]), u(d[1])] : u(d),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ni(e) {
  return function(...t) {
    if (qe.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Yt(
        `${Hs(e)} operation ${n}failed: target is readonly.`,
        Se(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ty(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = Se(r), a = Se(o);
      e || (kt(o, a) && ut(i, "get", o), ut(i, "get", a));
      const { has: l } = ti(i), f = t ? Dl : e ? Ui : pt;
      if (l.call(i, o))
        return f(r.get(o));
      if (l.call(i, a))
        return f(r.get(a));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ut(Se(o), "iterate", Vs), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = Se(r), a = Se(o);
      return e || (kt(o, a) && ut(i, "has", o), ut(i, "has", a)), o === a ? r.has(o) : r.has(o) || r.has(a);
    },
    forEach(o, r) {
      const i = this, a = i.__v_raw, l = Se(a), f = t ? Dl : e ? Ui : pt;
      return !e && ut(l, "iterate", Vs), a.forEach((u, d) => o.call(r, f(u), f(d), i));
    }
  };
  return Ze(
    n,
    e ? {
      add: ni("add"),
      set: ni("set"),
      delete: ni("delete"),
      clear: ni("clear")
    } : {
      add(o) {
        !t && !St(o) && !kn(o) && (o = Se(o));
        const r = Se(this);
        return ti(r).has.call(r, o) || (r.add(o), An(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !St(r) && !kn(r) && (r = Se(r));
        const i = Se(this), { has: a, get: l } = ti(i);
        let f = a.call(i, o);
        f ? qe.NODE_ENV !== "production" && Dc(i, a, o) : (o = Se(o), f = a.call(i, o));
        const u = l.call(i, o);
        return i.set(o, r), f ? kt(r, u) && An(i, "set", o, r, u) : An(i, "add", o, r), this;
      },
      delete(o) {
        const r = Se(this), { has: i, get: a } = ti(r);
        let l = i.call(r, o);
        l ? qe.NODE_ENV !== "production" && Dc(r, i, o) : (o = Se(o), l = i.call(r, o));
        const f = a ? a.call(r, o) : void 0, u = r.delete(o);
        return l && An(r, "delete", o, void 0, f), u;
      },
      clear() {
        const o = Se(this), r = o.size !== 0, i = qe.NODE_ENV !== "production" ? Ps(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
        return r && An(
          o,
          "clear",
          void 0,
          void 0,
          i
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = ey(o, e, t);
  }), n;
}
function fa(e, t) {
  const n = ty(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    Fe(n, o) && o in s ? n : s,
    o,
    r
  );
}
const ny = {
  get: /* @__PURE__ */ fa(!1, !1)
}, sy = {
  get: /* @__PURE__ */ fa(!1, !0)
}, oy = {
  get: /* @__PURE__ */ fa(!0, !1)
}, ry = {
  get: /* @__PURE__ */ fa(!0, !0)
};
function Dc(e, t, n) {
  const s = Se(n);
  if (s !== n && t.call(e, s)) {
    const o = Au(e);
    Yt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const hh = /* @__PURE__ */ new WeakMap(), mh = /* @__PURE__ */ new WeakMap(), gh = /* @__PURE__ */ new WeakMap(), vh = /* @__PURE__ */ new WeakMap();
function iy(e) {
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
function ay(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : iy(Au(e));
}
function cs(e) {
  return kn(e) ? e : pa(
    e,
    !1,
    G_,
    ny,
    hh
  );
}
function _h(e) {
  return pa(
    e,
    !1,
    Q_,
    sy,
    mh
  );
}
function yh(e) {
  return pa(
    e,
    !0,
    J_,
    oy,
    gh
  );
}
function On(e) {
  return pa(
    e,
    !0,
    Z_,
    ry,
    vh
  );
}
function pa(e, t, n, s, o) {
  if (!je(e))
    return qe.NODE_ENV !== "production" && Yt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = ay(e);
  if (r === 0)
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const a = new Proxy(
    e,
    r === 2 ? s : n
  );
  return o.set(e, a), a;
}
function rn(e) {
  return kn(e) ? rn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function kn(e) {
  return !!(e && e.__v_isReadonly);
}
function St(e) {
  return !!(e && e.__v_isShallow);
}
function br(e) {
  return e ? !!e.__v_raw : !1;
}
function Se(e) {
  const t = e && e.__v_raw;
  return t ? Se(t) : e;
}
function as(e) {
  return !Fe(e, "__v_skip") && Object.isExtensible(e) && _r(e, "__v_skip", !0), e;
}
const pt = (e) => je(e) ? cs(e) : e, Ui = (e) => je(e) ? yh(e) : e;
function Ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function $(e) {
  return Eh(e, !1);
}
function ly(e) {
  return Eh(e, !0);
}
function Eh(e, t) {
  return Ye(e) ? e : new uy(e, t);
}
class uy {
  constructor(t, n) {
    this.dep = new ca(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Se(t), this._value = n ? t : pt(t), this.__v_isShallow = n;
  }
  get value() {
    return qe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || St(t) || kn(t);
    t = s ? t : Se(t), kt(t, n) && (this._rawValue = t, this._value = s ? t : pt(t), qe.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function H(e) {
  return Ye(e) ? e.value : e;
}
const cy = {
  get: (e, t, n) => t === "__v_raw" ? e : H(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Ye(o) && !Ye(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function bh(e) {
  return rn(e) ? e : new Proxy(e, cy);
}
class dy {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new ca(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function fy(e) {
  return new dy(e);
}
function cn(e) {
  qe.NODE_ENV !== "production" && !br(e) && Yt("toRefs() expects a reactive object but received a plain one.");
  const t = he(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = wh(e, n);
  return t;
}
class py {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return K_(Se(this._object), this._key);
  }
}
class hy {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function _i(e, t, n) {
  return Ye(e) ? e : be(e) ? new hy(e) : je(e) && arguments.length > 1 ? wh(e, t, n) : $(e);
}
function wh(e, t, n) {
  const s = e[t];
  return Ye(s) ? s : new py(e, t, n);
}
class my {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ca(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = yr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    We !== this)
      return oh(this, !0), !0;
  }
  get value() {
    const t = qe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return ah(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : qe.NODE_ENV !== "production" && Yt("Write operation failed: computed value is readonly");
  }
}
function gy(e, t, n = !1) {
  let s, o;
  return be(e) ? s = e : (s = e.get, o = e.set), new my(s, o, n);
}
const si = {}, Hi = /* @__PURE__ */ new WeakMap();
let Cs;
function vy(e, t = !1, n = Cs) {
  if (n) {
    let s = Hi.get(n);
    s || Hi.set(n, s = []), s.push(e);
  } else qe.NODE_ENV !== "production" && !t && Yt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function _y(e, t, n = Be) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: a, call: l } = n, f = (S) => {
    (n.onWarn || Yt)(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (S) => o ? S : St(S) || o === !1 || o === 0 ? Hn(S, 1) : Hn(S);
  let d, h, p, g, m = !1, _ = !1;
  if (Ye(e) ? (h = () => e.value, m = St(e)) : rn(e) ? (h = () => u(e), m = !0) : he(e) ? (_ = !0, m = e.some((S) => rn(S) || St(S)), h = () => e.map((S) => {
    if (Ye(S))
      return S.value;
    if (rn(S))
      return u(S);
    if (be(S))
      return l ? l(S, 2) : S();
    qe.NODE_ENV !== "production" && f(S);
  })) : be(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (p) {
      ln();
      try {
        p();
      } finally {
        un();
      }
    }
    const S = Cs;
    Cs = d;
    try {
      return l ? l(e, 3, [g]) : e(g);
    } finally {
      Cs = S;
    }
  } : (h = ct, qe.NODE_ENV !== "production" && f(e)), t && o) {
    const S = h, k = o === !0 ? 1 / 0 : o;
    h = () => Hn(S(), k);
  }
  const y = th(), b = () => {
    d.stop(), y && y.active && bu(y.effects, d);
  };
  if (r && t) {
    const S = t;
    t = (...k) => {
      S(...k), b();
    };
  }
  let v = _ ? new Array(e.length).fill(si) : si;
  const O = (S) => {
    if (!(!(d.flags & 1) || !d.dirty && !S))
      if (t) {
        const k = d.run();
        if (o || m || (_ ? k.some((R, I) => kt(R, v[I])) : kt(k, v))) {
          p && p();
          const R = Cs;
          Cs = d;
          try {
            const I = [
              k,
              // pass undefined as the old value when it's changed for the first time
              v === si ? void 0 : _ && v[0] === si ? [] : v,
              g
            ];
            v = k, l ? l(t, 3, I) : (
              // @ts-expect-error
              t(...I)
            );
          } finally {
            Cs = R;
          }
        }
      } else
        d.run();
  };
  return a && a(O), d = new nh(h), d.scheduler = i ? () => i(O, !1) : O, g = (S) => vy(S, !1, d), p = d.onStop = () => {
    const S = Hi.get(d);
    if (S) {
      if (l)
        l(S, 4);
      else
        for (const k of S) k();
      Hi.delete(d);
    }
  }, qe.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? s ? O(!0) : v = d.run() : i ? i(O.bind(null, !0), !0) : d.run(), b.pause = d.pause.bind(d), b.resume = d.resume.bind(d), b.stop = b, b;
}
function Hn(e, t = 1 / 0, n) {
  if (t <= 0 || !je(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ye(e))
    Hn(e.value, t, n);
  else if (he(e))
    for (let s = 0; s < e.length; s++)
      Hn(e[s], t, n);
  else if (la(e) || Ps(e))
    e.forEach((s) => {
      Hn(s, t, n);
    });
  else if (Xp(e)) {
    for (const s in e)
      Hn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Hn(e[s], t, n);
  }
  return e;
}
var x = {};
const Ms = [];
function yi(e) {
  Ms.push(e);
}
function Ei() {
  Ms.pop();
}
let Ka = !1;
function Z(e, ...t) {
  if (Ka) return;
  Ka = !0, ln();
  const n = Ms.length ? Ms[Ms.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = yy();
  if (s)
    Mo(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, a;
          return (a = (i = r.toString) == null ? void 0 : i.call(r)) != null ? a : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: r }) => `at <${ba(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Ey(o)), console.warn(...r);
  }
  un(), Ka = !1;
}
function yy() {
  let e = Ms[Ms.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Ey(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...by(n));
  }), t;
}
function by({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${ba(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...wy(e.props), r] : [o + r];
}
function wy(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Ah(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ah(e, t, n) {
  return Ge(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ye(t) ? (t = Ah(e, Se(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : be(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Se(t), n ? t : [`${e}=`, t]);
}
function Ay(e, t) {
  x.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? Z(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && Z(`${t} is NaN - the duration expression might be incorrect.`));
}
const Nu = {
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
function Mo(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    jr(o, t, n);
  }
}
function dn(e, t, n, s) {
  if (be(e)) {
    const o = Mo(e, t, n, s);
    return o && wu(o) && o.catch((r) => {
      jr(r, t, n);
    }), o;
  }
  if (he(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(dn(e[r], t, n, s));
    return o;
  } else x.NODE_ENV !== "production" && Z(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function jr(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Be;
  if (t) {
    let a = t.parent;
    const l = t.proxy, f = x.NODE_ENV !== "production" ? Nu[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, l, f) === !1)
            return;
      }
      a = a.parent;
    }
    if (r) {
      ln(), Mo(r, null, 10, [
        e,
        l,
        f
      ]), un();
      return;
    }
  }
  Sy(e, n, o, s, i);
}
function Sy(e, t, n, s = !0, o = !1) {
  if (x.NODE_ENV !== "production") {
    const r = Nu[t];
    if (n && yi(n), Z(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Ei(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const bt = [];
let wn = -1;
const Eo = [];
let ts = null, co = 0;
const Sh = /* @__PURE__ */ Promise.resolve();
let $i = null;
const Oy = 100;
function $s(e) {
  const t = $i || Sh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Cy(e) {
  let t = wn + 1, n = bt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = bt[s], r = wr(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ha(e) {
  if (!(e.flags & 1)) {
    const t = wr(e), n = bt[bt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= wr(n) ? bt.push(e) : bt.splice(Cy(t), 0, e), e.flags |= 1, Oh();
  }
}
function Oh() {
  $i || ($i = Sh.then(Nh));
}
function Ch(e) {
  he(e) ? Eo.push(...e) : ts && e.id === -1 ? ts.splice(co + 1, 0, e) : e.flags & 1 || (Eo.push(e), e.flags |= 1), Oh();
}
function kc(e, t, n = wn + 1) {
  for (x.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < bt.length; n++) {
    const s = bt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || x.NODE_ENV !== "production" && Du(t, s))
        continue;
      bt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Th(e) {
  if (Eo.length) {
    const t = [...new Set(Eo)].sort(
      (n, s) => wr(n) - wr(s)
    );
    if (Eo.length = 0, ts) {
      ts.push(...t);
      return;
    }
    for (ts = t, x.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), co = 0; co < ts.length; co++) {
      const n = ts[co];
      x.NODE_ENV !== "production" && Du(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ts = null, co = 0;
  }
}
const wr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Nh(e) {
  x.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = x.NODE_ENV !== "production" ? (n) => Du(e, n) : ct;
  try {
    for (wn = 0; wn < bt.length; wn++) {
      const n = bt[wn];
      if (n && !(n.flags & 8)) {
        if (x.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Mo(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; wn < bt.length; wn++) {
      const n = bt[wn];
      n && (n.flags &= -2);
    }
    wn = -1, bt.length = 0, Th(e), $i = null, (bt.length || Eo.length) && Nh(e);
  }
}
function Du(e, t) {
  const n = e.get(t) || 0;
  if (n > Oy) {
    const s = t.i, o = s && Mu(s.type);
    return jr(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let nn = !1;
const bi = /* @__PURE__ */ new Map();
x.NODE_ENV !== "production" && (Br().__VUE_HMR_RUNTIME__ = {
  createRecord: za(Dh),
  rerender: za(Dy),
  reload: za(ky)
});
const Ws = /* @__PURE__ */ new Map();
function Ty(e) {
  const t = e.type.__hmrId;
  let n = Ws.get(t);
  n || (Dh(t, e.type), n = Ws.get(t)), n.instances.add(e);
}
function Ny(e) {
  Ws.get(e.type.__hmrId).instances.delete(e);
}
function Dh(e, t) {
  return Ws.has(e) ? !1 : (Ws.set(e, {
    initialDef: Wi(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Wi(e) {
  return ym(e) ? e.__vccOpts : e;
}
function Dy(e, t) {
  const n = Ws.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Wi(s.type).render = t), s.renderCache = [], nn = !0, s.update(), nn = !1;
  }));
}
function ky(e, t) {
  const n = Ws.get(e);
  if (!n) return;
  t = Wi(t), xc(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = Wi(r.type);
    let a = bi.get(i);
    a || (i !== n.initialDef && xc(i, t), bi.set(i, a = /* @__PURE__ */ new Set())), a.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (a.add(r), r.ceReload(t.styles), a.delete(r)) : r.parent ? ha(() => {
      nn = !0, r.parent.update(), nn = !1, a.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Ch(() => {
    bi.clear();
  });
}
function xc(e, t) {
  Ze(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function za(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Sn, tr = [], kl = !1;
function Ur(e, ...t) {
  Sn ? Sn.emit(e, ...t) : kl || tr.push({ event: e, args: t });
}
function kh(e, t) {
  var n, s;
  Sn = e, Sn ? (Sn.enabled = !0, tr.forEach(({ event: o, args: r }) => Sn.emit(o, ...r)), tr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    kh(r, t);
  }), setTimeout(() => {
    Sn || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, kl = !0, tr = []);
  }, 3e3)) : (kl = !0, tr = []);
}
function xy(e, t) {
  Ur("app:init", e, t, {
    Fragment: Oe,
    Text: Wr,
    Comment: ot,
    Static: cr
  });
}
function Ry(e) {
  Ur("app:unmount", e);
}
const Iy = /* @__PURE__ */ ku(
  "component:added"
  /* COMPONENT_ADDED */
), xh = /* @__PURE__ */ ku(
  "component:updated"
  /* COMPONENT_UPDATED */
), Py = /* @__PURE__ */ ku(
  "component:removed"
  /* COMPONENT_REMOVED */
), Vy = (e) => {
  Sn && typeof Sn.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Sn.cleanupBuffer(e) && Py(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ku(e) {
  return (t) => {
    Ur(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const My = /* @__PURE__ */ Rh(
  "perf:start"
  /* PERFORMANCE_START */
), Ly = /* @__PURE__ */ Rh(
  "perf:end"
  /* PERFORMANCE_END */
);
function Rh(e) {
  return (t, n, s) => {
    Ur(e, t.appContext.app, t.uid, t, n, s);
  };
}
function Fy(e, t, n) {
  Ur(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let tt = null, Ih = null;
function Ki(e) {
  const t = tt;
  return tt = e, Ih = e && e.type.__scopeId || null, t;
}
function me(e, t = tt, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Yc(-1);
    const r = Ki(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Ki(r), s._d && Yc(1);
    }
    return x.NODE_ENV !== "production" && xh(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ph(e) {
  S_(e) && Z("Do not use built-in directive ids as custom directive id: " + e);
}
function At(e, t) {
  if (tt === null)
    return x.NODE_ENV !== "production" && Z("withDirectives can only be used inside render functions."), e;
  const n = Ea(tt), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, a, l = Be] = t[o];
    r && (be(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Hn(i), s.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function bs(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    r && (a.oldValue = r[i].value);
    let l = a.dir[s];
    l && (ln(), dn(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), un());
  }
}
const Vh = Symbol("_vte"), Mh = (e) => e.__isTeleport, Ls = (e) => e && (e.disabled || e.disabled === ""), Rc = (e) => e && (e.defer || e.defer === ""), Ic = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Pc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, xl = (e, t) => {
  const n = e && e.to;
  if (Ge(n))
    if (t) {
      const s = t(n);
      return x.NODE_ENV !== "production" && !s && !Ls(e) && Z(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return x.NODE_ENV !== "production" && Z(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return x.NODE_ENV !== "production" && !n && !Ls(e) && Z(`Invalid Teleport target: ${n}`), n;
}, Lh = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, a, l, f) {
    const {
      mc: u,
      pc: d,
      pbc: h,
      o: { insert: p, querySelector: g, createText: m, createComment: _ }
    } = f, y = Ls(t.props);
    let { shapeFlag: b, children: v, dynamicChildren: O } = t;
    if (x.NODE_ENV !== "production" && nn && (l = !1, O = null), e == null) {
      const S = t.el = x.NODE_ENV !== "production" ? _("teleport start") : m(""), k = t.anchor = x.NODE_ENV !== "production" ? _("teleport end") : m("");
      p(S, n, s), p(k, n, s);
      const R = (P, T) => {
        b & 16 && (o && o.isCE && (o.ce._teleportTarget = P), u(
          v,
          P,
          T,
          o,
          r,
          i,
          a,
          l
        ));
      }, I = () => {
        const P = t.target = xl(t.props, g), T = Fh(P, t, m, p);
        P ? (i !== "svg" && Ic(P) ? i = "svg" : i !== "mathml" && Pc(P) && (i = "mathml"), y || (R(P, T), wi(t, !1))) : x.NODE_ENV !== "production" && !y && Z(
          "Invalid Teleport target on mount:",
          P,
          `(${typeof P})`
        );
      };
      y && (R(n, k), wi(t, !0)), Rc(t.props) ? (t.el.__isMounted = !1, Et(() => {
        I(), delete t.el.__isMounted;
      }, r)) : I();
    } else {
      if (Rc(t.props) && e.el.__isMounted === !1) {
        Et(() => {
          Lh.process(
            e,
            t,
            n,
            s,
            o,
            r,
            i,
            a,
            l,
            f
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const S = t.anchor = e.anchor, k = t.target = e.target, R = t.targetAnchor = e.targetAnchor, I = Ls(e.props), P = I ? n : k, T = I ? S : R;
      if (i === "svg" || Ic(k) ? i = "svg" : (i === "mathml" || Pc(k)) && (i = "mathml"), O ? (h(
        e.dynamicChildren,
        O,
        P,
        o,
        r,
        i,
        a
      ), ur(e, t, x.NODE_ENV === "production")) : l || d(
        e,
        t,
        P,
        T,
        o,
        r,
        i,
        a,
        !1
      ), y)
        I ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : oi(
          t,
          n,
          S,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const N = t.target = xl(
          t.props,
          g
        );
        N ? oi(
          t,
          N,
          null,
          f,
          0
        ) : x.NODE_ENV !== "production" && Z(
          "Invalid Teleport target on update:",
          k,
          `(${typeof k})`
        );
      } else I && oi(
        t,
        k,
        R,
        f,
        1
      );
      wi(t, y);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, r) {
    const {
      shapeFlag: i,
      children: a,
      anchor: l,
      targetStart: f,
      targetAnchor: u,
      target: d,
      props: h
    } = e;
    if (d && (o(f), o(u)), r && o(l), i & 16) {
      const p = r || !Ls(h);
      for (let g = 0; g < a.length; g++) {
        const m = a[g];
        s(
          m,
          t,
          n,
          p,
          !!m.dynamicChildren
        );
      }
    }
  },
  move: oi,
  hydrate: By
};
function oi(e, t, n, { o: { insert: s }, m: o }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: f, props: u } = e, d = r === 2;
  if (d && s(i, t, n), (!d || Ls(u)) && l & 16)
    for (let h = 0; h < f.length; h++)
      o(
        f[h],
        t,
        n,
        2
      );
  d && s(a, t, n);
}
function By(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: a, querySelector: l, insert: f, createText: u }
}, d) {
  const h = t.target = xl(
    t.props,
    l
  );
  if (h) {
    const p = Ls(t.props), g = h._lpa || h.firstChild;
    if (t.shapeFlag & 16)
      if (p)
        t.anchor = d(
          i(e),
          t,
          a(e),
          n,
          s,
          o,
          r
        ), t.targetStart = g, t.targetAnchor = g && i(g);
      else {
        t.anchor = i(e);
        let m = g;
        for (; m; ) {
          if (m && m.nodeType === 8) {
            if (m.data === "teleport start anchor")
              t.targetStart = m;
            else if (m.data === "teleport anchor") {
              t.targetAnchor = m, h._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          m = i(m);
        }
        t.targetAnchor || Fh(h, t, u, f), d(
          g && i(g),
          t,
          h,
          n,
          s,
          o,
          r
        );
      }
    wi(t, p);
  }
  return t.anchor && i(t.anchor);
}
const ma = Lh;
function wi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Fh(e, t, n, s) {
  const o = t.targetStart = n(""), r = t.targetAnchor = n("");
  return o[Vh] = r, e && (s(o, e), s(r, e)), r;
}
const ns = Symbol("_leaveCb"), ri = Symbol("_enterCb");
function jy() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Pt(() => {
    e.isMounted = !0;
  }), zh(() => {
    e.isUnmounting = !0;
  }), e;
}
const Wt = [Function, Array], Bh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Wt,
  onEnter: Wt,
  onAfterEnter: Wt,
  onEnterCancelled: Wt,
  // leave
  onBeforeLeave: Wt,
  onLeave: Wt,
  onAfterLeave: Wt,
  onLeaveCancelled: Wt,
  // appear
  onBeforeAppear: Wt,
  onAppear: Wt,
  onAfterAppear: Wt,
  onAppearCancelled: Wt
}, jh = (e) => {
  const t = e.subTree;
  return t.component ? jh(t.component) : t;
}, Uy = {
  name: "BaseTransition",
  props: Bh,
  setup(e, { slots: t }) {
    const n = Gn(), s = jy();
    return () => {
      const o = t.default && $h(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = Uh(o), i = Se(e), { mode: a } = i;
      if (x.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && Z(`invalid <transition> mode: ${a}`), s.isLeaving)
        return qa(r);
      const l = Vc(r);
      if (!l)
        return qa(r);
      let f = Rl(
        l,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => f = d
      );
      l.type !== ot && Ar(l, f);
      let u = n.subTree && Vc(n.subTree);
      if (u && u.type !== ot && !Ds(l, u) && jh(n).type !== ot) {
        let d = Rl(
          u,
          i,
          s,
          n
        );
        if (Ar(u, d), a === "out-in" && l.type !== ot)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, qa(r);
        a === "in-out" && l.type !== ot ? d.delayLeave = (h, p, g) => {
          const m = Hh(
            s,
            u
          );
          m[String(u.key)] = u, h[ns] = () => {
            p(), h[ns] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            g(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function Uh(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== ot) {
        if (x.NODE_ENV !== "production" && n) {
          Z(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, x.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Hy = Uy;
function Hh(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Rl(e, t, n, s, o) {
  const {
    appear: r,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: f,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: h,
    onLeave: p,
    onAfterLeave: g,
    onLeaveCancelled: m,
    onBeforeAppear: _,
    onAppear: y,
    onAfterAppear: b,
    onAppearCancelled: v
  } = t, O = String(e.key), S = Hh(n, e), k = (P, T) => {
    P && dn(
      P,
      s,
      9,
      T
    );
  }, R = (P, T) => {
    const N = T[1];
    k(P, T), he(P) ? P.every((A) => A.length <= 1) && N() : P.length <= 1 && N();
  }, I = {
    mode: i,
    persisted: a,
    beforeEnter(P) {
      let T = l;
      if (!n.isMounted)
        if (r)
          T = _ || l;
        else
          return;
      P[ns] && P[ns](
        !0
        /* cancelled */
      );
      const N = S[O];
      N && Ds(e, N) && N.el[ns] && N.el[ns](), k(T, [P]);
    },
    enter(P) {
      let T = f, N = u, A = d;
      if (!n.isMounted)
        if (r)
          T = y || f, N = b || u, A = v || d;
        else
          return;
      let Y = !1;
      const fe = P[ri] = (J) => {
        Y || (Y = !0, J ? k(A, [P]) : k(N, [P]), I.delayedLeave && I.delayedLeave(), P[ri] = void 0);
      };
      T ? R(T, [P, fe]) : fe();
    },
    leave(P, T) {
      const N = String(e.key);
      if (P[ri] && P[ri](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return T();
      k(h, [P]);
      let A = !1;
      const Y = P[ns] = (fe) => {
        A || (A = !0, T(), fe ? k(m, [P]) : k(g, [P]), P[ns] = void 0, S[N] === e && delete S[N]);
      };
      S[N] = e, p ? R(p, [P, Y]) : Y();
    },
    clone(P) {
      const T = Rl(
        P,
        t,
        n,
        s,
        o
      );
      return o && o(T), T;
    }
  };
  return I;
}
function qa(e) {
  if (Hr(e))
    return e = xn(e), e.children = null, e;
}
function Vc(e) {
  if (!Hr(e))
    return Mh(e.type) && e.children ? Uh(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && be(n.default))
      return n.default();
  }
}
function Ar(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ar(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function $h(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === Oe ? (i.patchFlag & 128 && o++, s = s.concat(
      $h(i.children, t, a)
    )) : (t || i.type !== ot) && s.push(a != null ? xn(i, { key: a }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  return be(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ze({ name: e.name }, t, { setup: e })
  ) : e;
}
function Wh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const $y = /* @__PURE__ */ new WeakSet();
function lr(e, t, n, s, o = !1) {
  if (he(e)) {
    e.forEach(
      (g, m) => lr(
        g,
        t && (he(t) ? t[m] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (bo(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && lr(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Ea(s.component) : s.el, i = o ? null : r, { i: a, r: l } = e;
  if (x.NODE_ENV !== "production" && !a) {
    Z(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = a.refs === Be ? a.refs = {} : a.refs, d = a.setupState, h = Se(d), p = d === Be ? () => !1 : (g) => x.NODE_ENV !== "production" && (Fe(h, g) && !Ye(h[g]) && Z(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), $y.has(h[g])) ? !1 : Fe(h, g);
  if (f != null && f !== l && (Ge(f) ? (u[f] = null, p(f) && (d[f] = null)) : Ye(f) && (f.value = null)), be(l))
    Mo(l, a, 12, [i, u]);
  else {
    const g = Ge(l), m = Ye(l);
    if (g || m) {
      const _ = () => {
        if (e.f) {
          const y = g ? p(l) ? d[l] : u[l] : l.value;
          o ? he(y) && bu(y, r) : he(y) ? y.includes(r) || y.push(r) : g ? (u[l] = [r], p(l) && (d[l] = u[l])) : (l.value = [r], e.k && (u[e.k] = l.value));
        } else g ? (u[l] = i, p(l) && (d[l] = i)) : m ? (l.value = i, e.k && (u[e.k] = i)) : x.NODE_ENV !== "production" && Z("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (_.id = -1, Et(_, n)) : _();
    } else x.NODE_ENV !== "production" && Z("Invalid template ref type:", l, `(${typeof l})`);
  }
}
Br().requestIdleCallback;
Br().cancelIdleCallback;
const bo = (e) => !!e.type.__asyncLoader, Hr = (e) => e.type.__isKeepAlive;
function Wy(e, t) {
  Kh(e, "a", t);
}
function Ky(e, t) {
  Kh(e, "da", t);
}
function Kh(e, t, n = lt) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ga(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Hr(o.parent.vnode) && zy(s, t, n, o), o = o.parent;
  }
}
function zy(e, t, n, s) {
  const o = ga(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  $r(() => {
    bu(s[t], o);
  }, n);
}
function ga(e, t, n = lt, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      ln();
      const a = Kr(n), l = dn(t, n, e, i);
      return a(), un(), l;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (x.NODE_ENV !== "production") {
    const o = Os(Nu[e].replace(/ hook$/, ""));
    Z(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Xn = (e) => (t, n = lt) => {
  (!Or || e === "sp") && ga(e, (...s) => t(...s), n);
}, qy = Xn("bm"), Pt = Xn("m"), Yy = Xn(
  "bu"
), Xy = Xn("u"), zh = Xn(
  "bum"
), $r = Xn("um"), Gy = Xn(
  "sp"
), Jy = Xn("rtg"), Qy = Xn("rtc");
function Zy(e, t = lt) {
  ga("ec", e, t);
}
const Il = "components", eE = "directives";
function rt(e, t) {
  return qh(Il, e, !0, t) || e;
}
const tE = Symbol.for("v-ndc");
function nE(e) {
  return qh(eE, e);
}
function qh(e, t, n = !0, s = !1) {
  const o = tt || lt;
  if (o) {
    const r = o.type;
    if (e === Il) {
      const a = Mu(
        r,
        !1
      );
      if (a && (a === t || a === vt(t) || a === Hs(vt(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Mc(o[e] || r[e], t) || // global registration
      Mc(o.appContext[e], t)
    );
    if (!i && s)
      return r;
    if (x.NODE_ENV !== "production" && n && !i) {
      const a = e === Il ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      Z(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else x.NODE_ENV !== "production" && Z(
    `resolve${Hs(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Mc(e, t) {
  return e && (e[t] || e[vt(t)] || e[Hs(vt(t))]);
}
function Je(e, t, n, s) {
  let o;
  const r = n, i = he(e);
  if (i || Ge(e)) {
    const a = i && rn(e);
    let l = !1, f = !1;
    a && (l = !St(e), f = kn(e), e = da(e)), o = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      o[u] = t(
        l ? f ? Ui(pt(e[u])) : pt(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    x.NODE_ENV !== "production" && !Number.isInteger(e) && Z(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, r);
  } else if (je(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (a, l) => t(a, l, void 0, r)
      );
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let l = 0, f = a.length; l < f; l++) {
        const u = a[l];
        o[l] = t(e[u], u, l, r);
      }
    }
  else
    o = [];
  return o;
}
function Ne(e, t, n = {}, s, o) {
  if (tt.ce || tt.parent && bo(tt.parent) && tt.parent.ce)
    return t !== "default" && (n.name = t), C(), it(
      Oe,
      null,
      [le("slot", n, s && s())],
      64
    );
  let r = e[t];
  x.NODE_ENV !== "production" && r && r.length > 1 && (Z(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), C();
  const i = r && Yh(r(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = it(
    Oe,
    {
      key: (a && !an(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function Yh(e) {
  return e.some((t) => Ks(t) ? !(t.type === ot || t.type === Oe && !Yh(t.children)) : !0) ? e : null;
}
const Pl = (e) => e ? vm(e) ? Ea(e) : Pl(e.parent) : null, Fs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ze(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => x.NODE_ENV !== "production" ? On(e.props) : e.props,
    $attrs: (e) => x.NODE_ENV !== "production" ? On(e.attrs) : e.attrs,
    $slots: (e) => x.NODE_ENV !== "production" ? On(e.slots) : e.slots,
    $refs: (e) => x.NODE_ENV !== "production" ? On(e.refs) : e.refs,
    $parent: (e) => Pl(e.parent),
    $root: (e) => Pl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Jh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ha(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = $s.bind(e.proxy)),
    $watch: (e) => ME.bind(e)
  })
), xu = (e) => e === "_" || e === "$", Ya = (e, t) => e !== Be && !e.__isScriptSetup && Fe(e, t), Xh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: a, appContext: l } = e;
    if (x.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const p = i[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Ya(s, t))
          return i[t] = 1, s[t];
        if (o !== Be && Fe(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && Fe(f, t)
        )
          return i[t] = 3, r[t];
        if (n !== Be && Fe(n, t))
          return i[t] = 4, n[t];
        Vl && (i[t] = 0);
      }
    }
    const u = Fs[t];
    let d, h;
    if (u)
      return t === "$attrs" ? (ut(e.attrs, "get", ""), x.NODE_ENV !== "production" && Yi()) : x.NODE_ENV !== "production" && t === "$slots" && ut(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Be && Fe(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, Fe(h, t)
    )
      return h[t];
    x.NODE_ENV !== "production" && tt && (!Ge(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Be && xu(t[0]) && Fe(o, t) ? Z(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === tt && Z(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Ya(o, t) ? (o[t] = n, !0) : x.NODE_ENV !== "production" && o.__isScriptSetup && Fe(o, t) ? (Z(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== Be && Fe(s, t) ? (s[t] = n, !0) : Fe(e.props, t) ? (x.NODE_ENV !== "production" && Z(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (x.NODE_ENV !== "production" && Z(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (x.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let a;
    return !!n[i] || e !== Be && Fe(e, i) || Ya(t, i) || (a = r[0]) && Fe(a, i) || Fe(s, i) || Fe(Fs, i) || Fe(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Fe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
x.NODE_ENV !== "production" && (Xh.ownKeys = (e) => (Z(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function sE(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Fs).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Fs[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ct
    });
  }), t;
}
function oE(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: ct
    });
  });
}
function rE(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Se(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (xu(s[0])) {
        Z(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: ct
      });
    }
  });
}
function Lc(e) {
  return he(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function iE() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? Z(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Vl = !0;
function aE(e) {
  const t = Jh(e), n = e.proxy, s = e.ctx;
  Vl = !1, t.beforeCreate && Fc(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: a,
    provide: l,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: h,
    beforeUpdate: p,
    updated: g,
    activated: m,
    deactivated: _,
    beforeDestroy: y,
    beforeUnmount: b,
    destroyed: v,
    unmounted: O,
    render: S,
    renderTracked: k,
    renderTriggered: R,
    errorCaptured: I,
    serverPrefetch: P,
    // public API
    expose: T,
    inheritAttrs: N,
    // assets
    components: A,
    directives: Y,
    filters: fe
  } = t, J = x.NODE_ENV !== "production" ? iE() : null;
  if (x.NODE_ENV !== "production") {
    const [W] = e.propsOptions;
    if (W)
      for (const M in W)
        J("Props", M);
  }
  if (f && lE(f, s, J), i)
    for (const W in i) {
      const M = i[W];
      be(M) ? (x.NODE_ENV !== "production" ? Object.defineProperty(s, W, {
        value: M.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[W] = M.bind(n), x.NODE_ENV !== "production" && J("Methods", W)) : x.NODE_ENV !== "production" && Z(
        `Method "${W}" has type "${typeof M}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    x.NODE_ENV !== "production" && !be(o) && Z(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const W = o.call(n, n);
    if (x.NODE_ENV !== "production" && wu(W) && Z(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !je(W))
      x.NODE_ENV !== "production" && Z("data() should return an object.");
    else if (e.data = cs(W), x.NODE_ENV !== "production")
      for (const M in W)
        J("Data", M), xu(M[0]) || Object.defineProperty(s, M, {
          configurable: !0,
          enumerable: !0,
          get: () => W[M],
          set: ct
        });
  }
  if (Vl = !0, r)
    for (const W in r) {
      const M = r[W], X = be(M) ? M.bind(n, n) : be(M.get) ? M.get.bind(n, n) : ct;
      x.NODE_ENV !== "production" && X === ct && Z(`Computed property "${W}" has no getter.`);
      const _e = !be(M) && be(M.set) ? M.set.bind(n) : x.NODE_ENV !== "production" ? () => {
        Z(
          `Write operation failed: computed property "${W}" is readonly.`
        );
      } : ct, Ee = U({
        get: X,
        set: _e
      });
      Object.defineProperty(s, W, {
        enumerable: !0,
        configurable: !0,
        get: () => Ee.value,
        set: (we) => Ee.value = we
      }), x.NODE_ENV !== "production" && J("Computed", W);
    }
  if (a)
    for (const W in a)
      Gh(a[W], s, n, W);
  if (l) {
    const W = be(l) ? l.call(n) : l;
    Reflect.ownKeys(W).forEach((M) => {
      Ai(M, W[M]);
    });
  }
  u && Fc(u, e, "c");
  function se(W, M) {
    he(M) ? M.forEach((X) => W(X.bind(n))) : M && W(M.bind(n));
  }
  if (se(qy, d), se(Pt, h), se(Yy, p), se(Xy, g), se(Wy, m), se(Ky, _), se(Zy, I), se(Qy, k), se(Jy, R), se(zh, b), se($r, O), se(Gy, P), he(T))
    if (T.length) {
      const W = e.exposed || (e.exposed = {});
      T.forEach((M) => {
        Object.defineProperty(W, M, {
          get: () => n[M],
          set: (X) => n[M] = X
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === ct && (e.render = S), N != null && (e.inheritAttrs = N), A && (e.components = A), Y && (e.directives = Y), P && Wh(e);
}
function lE(e, t, n = ct) {
  he(e) && (e = Ml(e));
  for (const s in e) {
    const o = e[s];
    let r;
    je(o) ? "default" in o ? r = Bt(
      o.from || s,
      o.default,
      !0
    ) : r = Bt(o.from || s) : r = Bt(o), Ye(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, x.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Fc(e, t, n) {
  dn(
    he(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Gh(e, t, n, s) {
  let o = s.includes(".") ? lm(n, s) : () => n[s];
  if (Ge(e)) {
    const r = t[e];
    be(r) ? Ot(o, r) : x.NODE_ENV !== "production" && Z(`Invalid watch handler specified by key "${e}"`, r);
  } else if (be(e))
    Ot(o, e.bind(n));
  else if (je(e))
    if (he(e))
      e.forEach((r) => Gh(r, t, n, s));
    else {
      const r = be(e.handler) ? e.handler.bind(n) : t[e.handler];
      be(r) ? Ot(o, r, e) : x.NODE_ENV !== "production" && Z(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else x.NODE_ENV !== "production" && Z(`Invalid watch option: "${s}"`, e);
}
function Jh(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = r.get(t);
  let l;
  return a ? l = a : !o.length && !n && !s ? l = t : (l = {}, o.length && o.forEach(
    (f) => zi(l, f, i, !0)
  ), zi(l, t, i)), je(t) && r.set(t, l), l;
}
function zi(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && zi(e, r, n, !0), o && o.forEach(
    (i) => zi(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      x.NODE_ENV !== "production" && Z(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = uE[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const uE = {
  data: Bc,
  props: jc,
  emits: jc,
  // objects
  methods: nr,
  computed: nr,
  // lifecycle
  beforeCreate: yt,
  created: yt,
  beforeMount: yt,
  mounted: yt,
  beforeUpdate: yt,
  updated: yt,
  beforeDestroy: yt,
  beforeUnmount: yt,
  destroyed: yt,
  unmounted: yt,
  activated: yt,
  deactivated: yt,
  errorCaptured: yt,
  serverPrefetch: yt,
  // assets
  components: nr,
  directives: nr,
  // watch
  watch: dE,
  // provide / inject
  provide: Bc,
  inject: cE
};
function Bc(e, t) {
  return t ? e ? function() {
    return Ze(
      be(e) ? e.call(this, this) : e,
      be(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cE(e, t) {
  return nr(Ml(e), Ml(t));
}
function Ml(e) {
  if (he(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function yt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function nr(e, t) {
  return e ? Ze(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function jc(e, t) {
  return e ? he(e) && he(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ze(
    /* @__PURE__ */ Object.create(null),
    Lc(e),
    Lc(t ?? {})
  ) : t;
}
function dE(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ze(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = yt(e[s], t[s]);
  return n;
}
function Qh() {
  return {
    app: null,
    config: {
      isNativeTag: w_,
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
let fE = 0;
function pE(e, t) {
  return function(s, o = null) {
    be(s) || (s = Ze({}, s)), o != null && !je(o) && (x.NODE_ENV !== "production" && Z("root props passed to app.mount() must be an object."), o = null);
    const r = Qh(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const f = r.app = {
      _uid: fE++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Zc,
      get config() {
        return r.config;
      },
      set config(u) {
        x.NODE_ENV !== "production" && Z(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...d) {
        return i.has(u) ? x.NODE_ENV !== "production" && Z("Plugin has already been applied to target app.") : u && be(u.install) ? (i.add(u), u.install(f, ...d)) : be(u) ? (i.add(u), u(f, ...d)) : x.NODE_ENV !== "production" && Z(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return r.mixins.includes(u) ? x.NODE_ENV !== "production" && Z(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), f;
      },
      component(u, d) {
        return x.NODE_ENV !== "production" && Ul(u, r.config), d ? (x.NODE_ENV !== "production" && r.components[u] && Z(`Component "${u}" has already been registered in target app.`), r.components[u] = d, f) : r.components[u];
      },
      directive(u, d) {
        return x.NODE_ENV !== "production" && Ph(u), d ? (x.NODE_ENV !== "production" && r.directives[u] && Z(`Directive "${u}" has already been registered in target app.`), r.directives[u] = d, f) : r.directives[u];
      },
      mount(u, d, h) {
        if (l)
          x.NODE_ENV !== "production" && Z(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          x.NODE_ENV !== "production" && u.__vue_app__ && Z(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = f._ceVNode || le(s, o);
          return p.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), x.NODE_ENV !== "production" && (r.reload = () => {
            const g = xn(p);
            g.el = null, e(g, u, h);
          }), e(p, u, h), l = !0, f._container = u, u.__vue_app__ = f, x.NODE_ENV !== "production" && (f._instance = p.component, xy(f, Zc)), Ea(p.component);
        }
      },
      onUnmount(u) {
        x.NODE_ENV !== "production" && typeof u != "function" && Z(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        l ? (dn(
          a,
          f._instance,
          16
        ), e(null, f._container), x.NODE_ENV !== "production" && (f._instance = null, Ry(f)), delete f._container.__vue_app__) : x.NODE_ENV !== "production" && Z("Cannot unmount an app that is not mounted.");
      },
      provide(u, d) {
        return x.NODE_ENV !== "production" && u in r.provides && (Fe(r.provides, u) ? Z(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : Z(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[u] = d, f;
      },
      runWithContext(u) {
        const d = Bs;
        Bs = f;
        try {
          return u();
        } finally {
          Bs = d;
        }
      }
    };
    return f;
  };
}
let Bs = null;
function Ai(e, t) {
  if (!lt)
    x.NODE_ENV !== "production" && Z("provide() can only be used inside setup().");
  else {
    let n = lt.provides;
    const s = lt.parent && lt.parent.provides;
    s === n && (n = lt.provides = Object.create(s)), n[e] = t;
  }
}
function Bt(e, t, n = !1) {
  const s = lt || tt;
  if (s || Bs) {
    let o = Bs ? Bs._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && be(t) ? t.call(s && s.proxy) : t;
    x.NODE_ENV !== "production" && Z(`injection "${String(e)}" not found.`);
  } else x.NODE_ENV !== "production" && Z("inject() can only be used inside setup() or functional components.");
}
function hE() {
  return !!(lt || tt || Bs);
}
const Zh = {}, em = () => Object.create(Zh), tm = (e) => Object.getPrototypeOf(e) === Zh;
function mE(e, t, n, s = !1) {
  const o = {}, r = em();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), nm(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  x.NODE_ENV !== "production" && om(t || {}, o, e), n ? e.props = s ? o : _h(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function gE(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function vE(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, a = Se(o), [l] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(x.NODE_ENV !== "production" && gE(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let h = u[d];
        if (ya(e.emitsOptions, h))
          continue;
        const p = t[h];
        if (l)
          if (Fe(r, h))
            p !== r[h] && (r[h] = p, f = !0);
          else {
            const g = vt(h);
            o[g] = Ll(
              l,
              a,
              g,
              p,
              e,
              !1
            );
          }
        else
          p !== r[h] && (r[h] = p, f = !0);
      }
    }
  } else {
    nm(e, t, o, r) && (f = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !Fe(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = zn(d)) === d || !Fe(t, u))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[d] = Ll(
        l,
        a,
        d,
        void 0,
        e,
        !0
      )) : delete o[d]);
    if (r !== a)
      for (const d in r)
        (!t || !Fe(t, d)) && (delete r[d], f = !0);
  }
  f && An(e.attrs, "set", ""), x.NODE_ENV !== "production" && om(t || {}, o, e);
}
function nm(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (rr(l))
        continue;
      const f = t[l];
      let u;
      o && Fe(o, u = vt(l)) ? !r || !r.includes(u) ? n[u] = f : (a || (a = {}))[u] = f : ya(e.emitsOptions, l) || (!(l in s) || f !== s[l]) && (s[l] = f, i = !0);
    }
  if (r) {
    const l = Se(n), f = a || Be;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = Ll(
        o,
        l,
        d,
        f[d],
        e,
        !Fe(f, d)
      );
    }
  }
  return i;
}
function Ll(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const a = Fe(i, "default");
    if (a && s === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && be(l)) {
        const { propsDefaults: f } = o;
        if (n in f)
          s = f[n];
        else {
          const u = Kr(o);
          s = f[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        s = l;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !a ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === zn(n)) && (s = !0));
  }
  return s;
}
const _E = /* @__PURE__ */ new WeakMap();
function sm(e, t, n = !1) {
  const s = n ? _E : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, a = [];
  let l = !1;
  if (!be(e)) {
    const u = (d) => {
      l = !0;
      const [h, p] = sm(d, t, !0);
      Ze(i, h), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return je(e) && s.set(e, yo), yo;
  if (he(r))
    for (let u = 0; u < r.length; u++) {
      x.NODE_ENV !== "production" && !Ge(r[u]) && Z("props must be strings when using array syntax.", r[u]);
      const d = vt(r[u]);
      Uc(d) && (i[d] = Be);
    }
  else if (r) {
    x.NODE_ENV !== "production" && !je(r) && Z("invalid props options", r);
    for (const u in r) {
      const d = vt(u);
      if (Uc(d)) {
        const h = r[u], p = i[d] = he(h) || be(h) ? { type: h } : Ze({}, h), g = p.type;
        let m = !1, _ = !0;
        if (he(g))
          for (let y = 0; y < g.length; ++y) {
            const b = g[y], v = be(b) && b.name;
            if (v === "Boolean") {
              m = !0;
              break;
            } else v === "String" && (_ = !1);
          }
        else
          m = be(g) && g.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = m, p[
          1
          /* shouldCastTrue */
        ] = _, (m || Fe(p, "default")) && a.push(d);
      }
    }
  }
  const f = [i, a];
  return je(e) && s.set(e, f), f;
}
function Uc(e) {
  return e[0] !== "$" && !rr(e) ? !0 : (x.NODE_ENV !== "production" && Z(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function yE(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function om(e, t, n) {
  const s = Se(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => vt(i));
  for (const i in o) {
    let a = o[i];
    a != null && EE(
      i,
      s[i],
      a,
      x.NODE_ENV !== "production" ? On(s) : s,
      !r.includes(i)
    );
  }
}
function EE(e, t, n, s, o) {
  const { type: r, required: i, validator: a, skipCheck: l } = n;
  if (i && o) {
    Z('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !l) {
      let f = !1;
      const u = he(r) ? r : [r], d = [];
      for (let h = 0; h < u.length && !f; h++) {
        const { valid: p, expectedType: g } = wE(t, u[h]);
        d.push(g || ""), f = p;
      }
      if (!f) {
        Z(AE(e, t, d));
        return;
      }
    }
    a && !a(t, s) && Z('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const bE = /* @__PURE__ */ Yn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function wE(e, t) {
  let n;
  const s = yE(t);
  if (s === "null")
    n = e === null;
  else if (bE(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = je(e) : s === "Array" ? n = he(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function AE(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Hs).join(" | ")}`;
  const o = n[0], r = Au(t), i = Hc(t, o), a = Hc(t, r);
  return n.length === 1 && $c(o) && !SE(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, $c(r) && (s += `with value ${a}.`), s;
}
function Hc(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $c(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function SE(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ru = (e) => e[0] === "_" || e === "$stable", Iu = (e) => he(e) ? e.map(tn) : [tn(e)], OE = (e, t, n) => {
  if (t._n)
    return t;
  const s = me((...o) => (x.NODE_ENV !== "production" && lt && !(n === null && tt) && !(n && n.root !== lt.root) && Z(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Iu(t(...o))), n);
  return s._c = !1, s;
}, rm = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Ru(o)) continue;
    const r = e[o];
    if (be(r))
      t[o] = OE(o, r, s);
    else if (r != null) {
      x.NODE_ENV !== "production" && Z(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Iu(r);
      t[o] = () => i;
    }
  }
}, im = (e, t) => {
  x.NODE_ENV !== "production" && !Hr(e.vnode) && Z(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Iu(t);
  e.slots.default = () => n;
}, Fl = (e, t, n) => {
  for (const s in t)
    (n || !Ru(s)) && (e[s] = t[s]);
}, CE = (e, t, n) => {
  const s = e.slots = em();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && _r(s, "__", o, !0);
    const r = t._;
    r ? (Fl(s, t, n), n && _r(s, "_", r, !0)) : rm(t, s);
  } else t && im(e, t);
}, TE = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = Be;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? x.NODE_ENV !== "production" && nn ? (Fl(o, t, n), An(e, "set", "$slots")) : n && a === 1 ? r = !1 : Fl(o, t, n) : (r = !t.$stable, rm(t, o)), i = t;
  } else t && (im(e, t), i = { default: 1 });
  if (r)
    for (const a in o)
      !Ru(a) && i[a] == null && delete o[a];
};
let qo, rs;
function so(e, t) {
  e.appContext.config.performance && qi() && rs.mark(`vue-${t}-${e.uid}`), x.NODE_ENV !== "production" && My(e, t, qi() ? rs.now() : Date.now());
}
function oo(e, t) {
  if (e.appContext.config.performance && qi()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    rs.mark(s), rs.measure(
      `<${ba(e, e.type)}> ${t}`,
      n,
      s
    ), rs.clearMarks(n), rs.clearMarks(s);
  }
  x.NODE_ENV !== "production" && Ly(e, t, qi() ? rs.now() : Date.now());
}
function qi() {
  return qo !== void 0 || (typeof window < "u" && window.performance ? (qo = !0, rs = window.performance) : qo = !1), qo;
}
function NE() {
  const e = [];
  if (x.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Et = $E;
function DE(e) {
  return kE(e);
}
function kE(e, t) {
  NE();
  const n = Br();
  n.__VUE__ = !0, x.NODE_ENV !== "production" && kh(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: a,
    createComment: l,
    setText: f,
    setElementText: u,
    parentNode: d,
    nextSibling: h,
    setScopeId: p = ct,
    insertStaticContent: g
  } = e, m = (E, w, V, K = null, j = null, z = null, ie = void 0, te = null, ne = x.NODE_ENV !== "production" && nn ? !1 : !!w.dynamicChildren) => {
    if (E === w)
      return;
    E && !Ds(E, w) && (K = re(E), Re(E, j, z, !0), E = null), w.patchFlag === -2 && (ne = !1, w.dynamicChildren = null);
    const { type: Q, ref: ve, shapeFlag: oe } = w;
    switch (Q) {
      case Wr:
        _(E, w, V, K);
        break;
      case ot:
        y(E, w, V, K);
        break;
      case cr:
        E == null ? b(w, V, K, ie) : x.NODE_ENV !== "production" && v(E, w, V, ie);
        break;
      case Oe:
        Y(
          E,
          w,
          V,
          K,
          j,
          z,
          ie,
          te,
          ne
        );
        break;
      default:
        oe & 1 ? k(
          E,
          w,
          V,
          K,
          j,
          z,
          ie,
          te,
          ne
        ) : oe & 6 ? fe(
          E,
          w,
          V,
          K,
          j,
          z,
          ie,
          te,
          ne
        ) : oe & 64 || oe & 128 ? Q.process(
          E,
          w,
          V,
          K,
          j,
          z,
          ie,
          te,
          ne,
          ke
        ) : x.NODE_ENV !== "production" && Z("Invalid VNode type:", Q, `(${typeof Q})`);
    }
    ve != null && j ? lr(ve, E && E.ref, z, w || E, !w) : ve == null && E && E.ref != null && lr(E.ref, null, z, E, !0);
  }, _ = (E, w, V, K) => {
    if (E == null)
      s(
        w.el = a(w.children),
        V,
        K
      );
    else {
      const j = w.el = E.el;
      w.children !== E.children && f(j, w.children);
    }
  }, y = (E, w, V, K) => {
    E == null ? s(
      w.el = l(w.children || ""),
      V,
      K
    ) : w.el = E.el;
  }, b = (E, w, V, K) => {
    [E.el, E.anchor] = g(
      E.children,
      w,
      V,
      K,
      E.el,
      E.anchor
    );
  }, v = (E, w, V, K) => {
    if (w.children !== E.children) {
      const j = h(E.anchor);
      S(E), [w.el, w.anchor] = g(
        w.children,
        V,
        j,
        K
      );
    } else
      w.el = E.el, w.anchor = E.anchor;
  }, O = ({ el: E, anchor: w }, V, K) => {
    let j;
    for (; E && E !== w; )
      j = h(E), s(E, V, K), E = j;
    s(w, V, K);
  }, S = ({ el: E, anchor: w }) => {
    let V;
    for (; E && E !== w; )
      V = h(E), o(E), E = V;
    o(w);
  }, k = (E, w, V, K, j, z, ie, te, ne) => {
    w.type === "svg" ? ie = "svg" : w.type === "math" && (ie = "mathml"), E == null ? R(
      w,
      V,
      K,
      j,
      z,
      ie,
      te,
      ne
    ) : T(
      E,
      w,
      j,
      z,
      ie,
      te,
      ne
    );
  }, R = (E, w, V, K, j, z, ie, te) => {
    let ne, Q;
    const { props: ve, shapeFlag: oe, transition: ge, dirs: Ae } = E;
    if (ne = E.el = i(
      E.type,
      z,
      ve && ve.is,
      ve
    ), oe & 8 ? u(ne, E.children) : oe & 16 && P(
      E.children,
      ne,
      null,
      K,
      j,
      Xa(E, z),
      ie,
      te
    ), Ae && bs(E, null, K, "created"), I(ne, E, E.scopeId, ie, K), ve) {
      for (const $e in ve)
        $e !== "value" && !rr($e) && r(ne, $e, null, ve[$e], z, K);
      "value" in ve && r(ne, "value", null, ve.value, z), (Q = ve.onVnodeBeforeMount) && yn(Q, K, E);
    }
    x.NODE_ENV !== "production" && (_r(ne, "__vnode", E, !0), _r(ne, "__vueParentComponent", K, !0)), Ae && bs(E, null, K, "beforeMount");
    const Ie = xE(j, ge);
    Ie && ge.beforeEnter(ne), s(ne, w, V), ((Q = ve && ve.onVnodeMounted) || Ie || Ae) && Et(() => {
      Q && yn(Q, K, E), Ie && ge.enter(ne), Ae && bs(E, null, K, "mounted");
    }, j);
  }, I = (E, w, V, K, j) => {
    if (V && p(E, V), K)
      for (let z = 0; z < K.length; z++)
        p(E, K[z]);
    if (j) {
      let z = j.subTree;
      if (x.NODE_ENV !== "production" && z.patchFlag > 0 && z.patchFlag & 2048 && (z = Pu(z.children) || z), w === z || fm(z.type) && (z.ssContent === w || z.ssFallback === w)) {
        const ie = j.vnode;
        I(
          E,
          ie,
          ie.scopeId,
          ie.slotScopeIds,
          j.parent
        );
      }
    }
  }, P = (E, w, V, K, j, z, ie, te, ne = 0) => {
    for (let Q = ne; Q < E.length; Q++) {
      const ve = E[Q] = te ? ss(E[Q]) : tn(E[Q]);
      m(
        null,
        ve,
        w,
        V,
        K,
        j,
        z,
        ie,
        te
      );
    }
  }, T = (E, w, V, K, j, z, ie) => {
    const te = w.el = E.el;
    x.NODE_ENV !== "production" && (te.__vnode = w);
    let { patchFlag: ne, dynamicChildren: Q, dirs: ve } = w;
    ne |= E.patchFlag & 16;
    const oe = E.props || Be, ge = w.props || Be;
    let Ae;
    if (V && ws(V, !1), (Ae = ge.onVnodeBeforeUpdate) && yn(Ae, V, w, E), ve && bs(w, E, V, "beforeUpdate"), V && ws(V, !0), x.NODE_ENV !== "production" && nn && (ne = 0, ie = !1, Q = null), (oe.innerHTML && ge.innerHTML == null || oe.textContent && ge.textContent == null) && u(te, ""), Q ? (N(
      E.dynamicChildren,
      Q,
      te,
      V,
      K,
      Xa(w, j),
      z
    ), x.NODE_ENV !== "production" && ur(E, w)) : ie || X(
      E,
      w,
      te,
      null,
      V,
      K,
      Xa(w, j),
      z,
      !1
    ), ne > 0) {
      if (ne & 16)
        A(te, oe, ge, V, j);
      else if (ne & 2 && oe.class !== ge.class && r(te, "class", null, ge.class, j), ne & 4 && r(te, "style", oe.style, ge.style, j), ne & 8) {
        const Ie = w.dynamicProps;
        for (let $e = 0; $e < Ie.length; $e++) {
          const ze = Ie[$e], Nt = oe[ze], Dt = ge[ze];
          (Dt !== Nt || ze === "value") && r(te, ze, Nt, Dt, j, V);
        }
      }
      ne & 1 && E.children !== w.children && u(te, w.children);
    } else !ie && Q == null && A(te, oe, ge, V, j);
    ((Ae = ge.onVnodeUpdated) || ve) && Et(() => {
      Ae && yn(Ae, V, w, E), ve && bs(w, E, V, "updated");
    }, K);
  }, N = (E, w, V, K, j, z, ie) => {
    for (let te = 0; te < w.length; te++) {
      const ne = E[te], Q = w[te], ve = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === Oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ds(ne, Q) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 198) ? d(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          V
        )
      );
      m(
        ne,
        Q,
        ve,
        null,
        K,
        j,
        z,
        ie,
        !0
      );
    }
  }, A = (E, w, V, K, j) => {
    if (w !== V) {
      if (w !== Be)
        for (const z in w)
          !rr(z) && !(z in V) && r(
            E,
            z,
            w[z],
            null,
            j,
            K
          );
      for (const z in V) {
        if (rr(z)) continue;
        const ie = V[z], te = w[z];
        ie !== te && z !== "value" && r(E, z, te, ie, j, K);
      }
      "value" in V && r(E, "value", w.value, V.value, j);
    }
  }, Y = (E, w, V, K, j, z, ie, te, ne) => {
    const Q = w.el = E ? E.el : a(""), ve = w.anchor = E ? E.anchor : a("");
    let { patchFlag: oe, dynamicChildren: ge, slotScopeIds: Ae } = w;
    x.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (nn || oe & 2048) && (oe = 0, ne = !1, ge = null), Ae && (te = te ? te.concat(Ae) : Ae), E == null ? (s(Q, V, K), s(ve, V, K), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      V,
      ve,
      j,
      z,
      ie,
      te,
      ne
    )) : oe > 0 && oe & 64 && ge && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (N(
      E.dynamicChildren,
      ge,
      V,
      j,
      z,
      ie,
      te
    ), x.NODE_ENV !== "production" ? ur(E, w) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (w.key != null || j && w === j.subTree) && ur(
        E,
        w,
        !0
        /* shallow */
      )
    )) : X(
      E,
      w,
      V,
      ve,
      j,
      z,
      ie,
      te,
      ne
    );
  }, fe = (E, w, V, K, j, z, ie, te, ne) => {
    w.slotScopeIds = te, E == null ? w.shapeFlag & 512 ? j.ctx.activate(
      w,
      V,
      K,
      ie,
      ne
    ) : J(
      w,
      V,
      K,
      j,
      z,
      ie,
      ne
    ) : se(E, w, ne);
  }, J = (E, w, V, K, j, z, ie) => {
    const te = E.component = YE(
      E,
      K,
      j
    );
    if (x.NODE_ENV !== "production" && te.type.__hmrId && Ty(te), x.NODE_ENV !== "production" && (yi(E), so(te, "mount")), Hr(E) && (te.ctx.renderer = ke), x.NODE_ENV !== "production" && so(te, "init"), GE(te, !1, ie), x.NODE_ENV !== "production" && oo(te, "init"), x.NODE_ENV !== "production" && nn && (E.el = null), te.asyncDep) {
      if (j && j.registerDep(te, W, ie), !E.el) {
        const ne = te.subTree = le(ot);
        y(null, ne, w, V);
      }
    } else
      W(
        te,
        E,
        w,
        V,
        j,
        z,
        ie
      );
    x.NODE_ENV !== "production" && (Ei(), oo(te, "mount"));
  }, se = (E, w, V) => {
    const K = w.component = E.component;
    if (UE(E, w, V))
      if (K.asyncDep && !K.asyncResolved) {
        x.NODE_ENV !== "production" && yi(w), M(K, w, V), x.NODE_ENV !== "production" && Ei();
        return;
      } else
        K.next = w, K.update();
    else
      w.el = E.el, K.vnode = w;
  }, W = (E, w, V, K, j, z, ie) => {
    const te = () => {
      if (E.isMounted) {
        let { next: oe, bu: ge, u: Ae, parent: Ie, vnode: $e } = E;
        {
          const vn = am(E);
          if (vn) {
            oe && (oe.el = $e.el, M(E, oe, ie)), vn.asyncDep.then(() => {
              E.isUnmounted || te();
            });
            return;
          }
        }
        let ze = oe, Nt;
        x.NODE_ENV !== "production" && yi(oe || E.vnode), ws(E, !1), oe ? (oe.el = $e.el, M(E, oe, ie)) : oe = $e, ge && uo(ge), (Nt = oe.props && oe.props.onVnodeBeforeUpdate) && yn(Nt, Ie, oe, $e), ws(E, !0), x.NODE_ENV !== "production" && so(E, "render");
        const Dt = Kc(E);
        x.NODE_ENV !== "production" && oo(E, "render");
        const gn = E.subTree;
        E.subTree = Dt, x.NODE_ENV !== "production" && so(E, "patch"), m(
          gn,
          Dt,
          // parent may have changed if it's in a teleport
          d(gn.el),
          // anchor may have changed if it's in a fragment
          re(gn),
          E,
          j,
          z
        ), x.NODE_ENV !== "production" && oo(E, "patch"), oe.el = Dt.el, ze === null && HE(E, Dt.el), Ae && Et(Ae, j), (Nt = oe.props && oe.props.onVnodeUpdated) && Et(
          () => yn(Nt, Ie, oe, $e),
          j
        ), x.NODE_ENV !== "production" && xh(E), x.NODE_ENV !== "production" && Ei();
      } else {
        let oe;
        const { el: ge, props: Ae } = w, { bm: Ie, m: $e, parent: ze, root: Nt, type: Dt } = E, gn = bo(w);
        ws(E, !1), Ie && uo(Ie), !gn && (oe = Ae && Ae.onVnodeBeforeMount) && yn(oe, ze, w), ws(E, !0);
        {
          Nt.ce && // @ts-expect-error _def is private
          Nt.ce._def.shadowRoot !== !1 && Nt.ce._injectChildStyle(Dt), x.NODE_ENV !== "production" && so(E, "render");
          const vn = E.subTree = Kc(E);
          x.NODE_ENV !== "production" && oo(E, "render"), x.NODE_ENV !== "production" && so(E, "patch"), m(
            null,
            vn,
            V,
            K,
            E,
            j,
            z
          ), x.NODE_ENV !== "production" && oo(E, "patch"), w.el = vn.el;
        }
        if ($e && Et($e, j), !gn && (oe = Ae && Ae.onVnodeMounted)) {
          const vn = w;
          Et(
            () => yn(oe, ze, vn),
            j
          );
        }
        (w.shapeFlag & 256 || ze && bo(ze.vnode) && ze.vnode.shapeFlag & 256) && E.a && Et(E.a, j), E.isMounted = !0, x.NODE_ENV !== "production" && Iy(E), w = V = K = null;
      }
    };
    E.scope.on();
    const ne = E.effect = new nh(te);
    E.scope.off();
    const Q = E.update = ne.run.bind(ne), ve = E.job = ne.runIfDirty.bind(ne);
    ve.i = E, ve.id = E.uid, ne.scheduler = () => ha(ve), ws(E, !0), x.NODE_ENV !== "production" && (ne.onTrack = E.rtc ? (oe) => uo(E.rtc, oe) : void 0, ne.onTrigger = E.rtg ? (oe) => uo(E.rtg, oe) : void 0), Q();
  }, M = (E, w, V) => {
    w.component = E;
    const K = E.vnode.props;
    E.vnode = w, E.next = null, vE(E, w.props, K, V), TE(E, w.children, V), ln(), kc(E), un();
  }, X = (E, w, V, K, j, z, ie, te, ne = !1) => {
    const Q = E && E.children, ve = E ? E.shapeFlag : 0, oe = w.children, { patchFlag: ge, shapeFlag: Ae } = w;
    if (ge > 0) {
      if (ge & 128) {
        Ee(
          Q,
          oe,
          V,
          K,
          j,
          z,
          ie,
          te,
          ne
        );
        return;
      } else if (ge & 256) {
        _e(
          Q,
          oe,
          V,
          K,
          j,
          z,
          ie,
          te,
          ne
        );
        return;
      }
    }
    Ae & 8 ? (ve & 16 && B(Q, j, z), oe !== Q && u(V, oe)) : ve & 16 ? Ae & 16 ? Ee(
      Q,
      oe,
      V,
      K,
      j,
      z,
      ie,
      te,
      ne
    ) : B(Q, j, z, !0) : (ve & 8 && u(V, ""), Ae & 16 && P(
      oe,
      V,
      K,
      j,
      z,
      ie,
      te,
      ne
    ));
  }, _e = (E, w, V, K, j, z, ie, te, ne) => {
    E = E || yo, w = w || yo;
    const Q = E.length, ve = w.length, oe = Math.min(Q, ve);
    let ge;
    for (ge = 0; ge < oe; ge++) {
      const Ae = w[ge] = ne ? ss(w[ge]) : tn(w[ge]);
      m(
        E[ge],
        Ae,
        V,
        null,
        j,
        z,
        ie,
        te,
        ne
      );
    }
    Q > ve ? B(
      E,
      j,
      z,
      !0,
      !1,
      oe
    ) : P(
      w,
      V,
      K,
      j,
      z,
      ie,
      te,
      ne,
      oe
    );
  }, Ee = (E, w, V, K, j, z, ie, te, ne) => {
    let Q = 0;
    const ve = w.length;
    let oe = E.length - 1, ge = ve - 1;
    for (; Q <= oe && Q <= ge; ) {
      const Ae = E[Q], Ie = w[Q] = ne ? ss(w[Q]) : tn(w[Q]);
      if (Ds(Ae, Ie))
        m(
          Ae,
          Ie,
          V,
          null,
          j,
          z,
          ie,
          te,
          ne
        );
      else
        break;
      Q++;
    }
    for (; Q <= oe && Q <= ge; ) {
      const Ae = E[oe], Ie = w[ge] = ne ? ss(w[ge]) : tn(w[ge]);
      if (Ds(Ae, Ie))
        m(
          Ae,
          Ie,
          V,
          null,
          j,
          z,
          ie,
          te,
          ne
        );
      else
        break;
      oe--, ge--;
    }
    if (Q > oe) {
      if (Q <= ge) {
        const Ae = ge + 1, Ie = Ae < ve ? w[Ae].el : K;
        for (; Q <= ge; )
          m(
            null,
            w[Q] = ne ? ss(w[Q]) : tn(w[Q]),
            V,
            Ie,
            j,
            z,
            ie,
            te,
            ne
          ), Q++;
      }
    } else if (Q > ge)
      for (; Q <= oe; )
        Re(E[Q], j, z, !0), Q++;
    else {
      const Ae = Q, Ie = Q, $e = /* @__PURE__ */ new Map();
      for (Q = Ie; Q <= ge; Q++) {
        const _t = w[Q] = ne ? ss(w[Q]) : tn(w[Q]);
        _t.key != null && (x.NODE_ENV !== "production" && $e.has(_t.key) && Z(
          "Duplicate keys found during update:",
          JSON.stringify(_t.key),
          "Make sure keys are unique."
        ), $e.set(_t.key, Q));
      }
      let ze, Nt = 0;
      const Dt = ge - Ie + 1;
      let gn = !1, vn = 0;
      const Ko = new Array(Dt);
      for (Q = 0; Q < Dt; Q++) Ko[Q] = 0;
      for (Q = Ae; Q <= oe; Q++) {
        const _t = E[Q];
        if (Nt >= Dt) {
          Re(_t, j, z, !0);
          continue;
        }
        let _n;
        if (_t.key != null)
          _n = $e.get(_t.key);
        else
          for (ze = Ie; ze <= ge; ze++)
            if (Ko[ze - Ie] === 0 && Ds(_t, w[ze])) {
              _n = ze;
              break;
            }
        _n === void 0 ? Re(_t, j, z, !0) : (Ko[_n - Ie] = Q + 1, _n >= vn ? vn = _n : gn = !0, m(
          _t,
          w[_n],
          V,
          null,
          j,
          z,
          ie,
          te,
          ne
        ), Nt++);
      }
      const Ac = gn ? RE(Ko) : yo;
      for (ze = Ac.length - 1, Q = Dt - 1; Q >= 0; Q--) {
        const _t = Ie + Q, _n = w[_t], Sc = _t + 1 < ve ? w[_t + 1].el : K;
        Ko[Q] === 0 ? m(
          null,
          _n,
          V,
          Sc,
          j,
          z,
          ie,
          te,
          ne
        ) : gn && (ze < 0 || Q !== Ac[ze] ? we(_n, V, Sc, 2) : ze--);
      }
    }
  }, we = (E, w, V, K, j = null) => {
    const { el: z, type: ie, transition: te, children: ne, shapeFlag: Q } = E;
    if (Q & 6) {
      we(E.component.subTree, w, V, K);
      return;
    }
    if (Q & 128) {
      E.suspense.move(w, V, K);
      return;
    }
    if (Q & 64) {
      ie.move(E, w, V, ke);
      return;
    }
    if (ie === Oe) {
      s(z, w, V);
      for (let oe = 0; oe < ne.length; oe++)
        we(ne[oe], w, V, K);
      s(E.anchor, w, V);
      return;
    }
    if (ie === cr) {
      O(E, w, V);
      return;
    }
    if (K !== 2 && Q & 1 && te)
      if (K === 0)
        te.beforeEnter(z), s(z, w, V), Et(() => te.enter(z), j);
      else {
        const { leave: oe, delayLeave: ge, afterLeave: Ae } = te, Ie = () => {
          E.ctx.isUnmounted ? o(z) : s(z, w, V);
        }, $e = () => {
          oe(z, () => {
            Ie(), Ae && Ae();
          });
        };
        ge ? ge(z, Ie, $e) : $e();
      }
    else
      s(z, w, V);
  }, Re = (E, w, V, K = !1, j = !1) => {
    const {
      type: z,
      props: ie,
      ref: te,
      children: ne,
      dynamicChildren: Q,
      shapeFlag: ve,
      patchFlag: oe,
      dirs: ge,
      cacheIndex: Ae
    } = E;
    if (oe === -2 && (j = !1), te != null && (ln(), lr(te, null, V, E, !0), un()), Ae != null && (w.renderCache[Ae] = void 0), ve & 256) {
      w.ctx.deactivate(E);
      return;
    }
    const Ie = ve & 1 && ge, $e = !bo(E);
    let ze;
    if ($e && (ze = ie && ie.onVnodeBeforeUnmount) && yn(ze, w, E), ve & 6)
      nt(E.component, V, K);
    else {
      if (ve & 128) {
        E.suspense.unmount(V, K);
        return;
      }
      Ie && bs(E, null, w, "beforeUnmount"), ve & 64 ? E.type.remove(
        E,
        w,
        V,
        ke,
        K
      ) : Q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== Oe || oe > 0 && oe & 64) ? B(
        Q,
        w,
        V,
        !1,
        !0
      ) : (z === Oe && oe & 384 || !j && ve & 16) && B(ne, w, V), K && Pe(E);
    }
    ($e && (ze = ie && ie.onVnodeUnmounted) || Ie) && Et(() => {
      ze && yn(ze, w, E), Ie && bs(E, null, w, "unmounted");
    }, V);
  }, Pe = (E) => {
    const { type: w, el: V, anchor: K, transition: j } = E;
    if (w === Oe) {
      x.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && j && !j.persisted ? E.children.forEach((ie) => {
        ie.type === ot ? o(ie.el) : Pe(ie);
      }) : Me(V, K);
      return;
    }
    if (w === cr) {
      S(E);
      return;
    }
    const z = () => {
      o(V), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (E.shapeFlag & 1 && j && !j.persisted) {
      const { leave: ie, delayLeave: te } = j, ne = () => ie(V, z);
      te ? te(E.el, z, ne) : ne();
    } else
      z();
  }, Me = (E, w) => {
    let V;
    for (; E !== w; )
      V = h(E), o(E), E = V;
    o(w);
  }, nt = (E, w, V) => {
    x.NODE_ENV !== "production" && E.type.__hmrId && Ny(E);
    const {
      bum: K,
      scope: j,
      job: z,
      subTree: ie,
      um: te,
      m: ne,
      a: Q,
      parent: ve,
      slots: { __: oe }
    } = E;
    Wc(ne), Wc(Q), K && uo(K), ve && he(oe) && oe.forEach((ge) => {
      ve.renderCache[ge] = void 0;
    }), j.stop(), z && (z.flags |= 8, Re(ie, E, w, V)), te && Et(te, w), Et(() => {
      E.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && E.asyncDep && !E.asyncResolved && E.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve()), x.NODE_ENV !== "production" && Vy(E);
  }, B = (E, w, V, K = !1, j = !1, z = 0) => {
    for (let ie = z; ie < E.length; ie++)
      Re(E[ie], w, V, K, j);
  }, re = (E) => {
    if (E.shapeFlag & 6)
      return re(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const w = h(E.anchor || E.el), V = w && w[Vh];
    return V ? h(V) : w;
  };
  let ae = !1;
  const pe = (E, w, V) => {
    E == null ? w._vnode && Re(w._vnode, null, null, !0) : m(
      w._vnode || null,
      E,
      w,
      null,
      null,
      null,
      V
    ), w._vnode = E, ae || (ae = !0, kc(), Th(), ae = !1);
  }, ke = {
    p: m,
    um: Re,
    m: we,
    r: Pe,
    mt: J,
    mc: P,
    pc: X,
    pbc: N,
    n: re,
    o: e
  };
  return {
    render: pe,
    hydrate: void 0,
    createApp: pE(pe)
  };
}
function Xa({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ws({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function xE(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ur(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (he(s) && he(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let a = o[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[r] = ss(o[r]), a.el = i.el), !n && a.patchFlag !== -2 && ur(i, a)), a.type === Wr && (a.el = i.el), a.type === ot && !a.el && (a.el = i.el), x.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function RE(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, a;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const f = e[s];
    if (f !== 0) {
      if (o = n[n.length - 1], e[o] < f) {
        t[s] = o, n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        a = r + i >> 1, e[n[a]] < f ? r = a + 1 : i = a;
      f < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function am(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : am(t);
}
function Wc(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const IE = Symbol.for("v-scx"), PE = () => {
  {
    const e = Bt(IE);
    return e || x.NODE_ENV !== "production" && Z(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function va(e, t) {
  return _a(e, null, t);
}
function VE(e, t) {
  return _a(
    e,
    null,
    x.NODE_ENV !== "production" ? Ze({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Ot(e, t, n) {
  return x.NODE_ENV !== "production" && !be(t) && Z(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), _a(e, t, n);
}
function _a(e, t, n = Be) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  x.NODE_ENV !== "production" && !t && (s !== void 0 && Z(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && Z(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && Z(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = Ze({}, n);
  x.NODE_ENV !== "production" && (a.onWarn = Z);
  const l = t && s || !t && r !== "post";
  let f;
  if (Or) {
    if (r === "sync") {
      const p = PE();
      f = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = ct, p.resume = ct, p.pause = ct, p;
    }
  }
  const u = lt;
  a.call = (p, g, m) => dn(p, u, g, m);
  let d = !1;
  r === "post" ? a.scheduler = (p) => {
    Et(p, u && u.suspense);
  } : r !== "sync" && (d = !0, a.scheduler = (p, g) => {
    g ? p() : ha(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), d && (p.flags |= 2, u && (p.id = u.uid, p.i = u));
  };
  const h = _y(e, t, a);
  return Or && (f ? f.push(h) : l && h()), h;
}
function ME(e, t, n) {
  const s = this.proxy, o = Ge(e) ? e.includes(".") ? lm(s, e) : () => s[e] : e.bind(s, s);
  let r;
  be(t) ? r = t : (r = t.handler, n = t);
  const i = Kr(this), a = _a(o, r.bind(s), n);
  return i(), a;
}
function lm(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function LE(e, t, n = Be) {
  const s = Gn();
  if (x.NODE_ENV !== "production" && !s)
    return Z("useModel() called without active instance."), $();
  const o = vt(t);
  if (x.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return Z(`useModel() called with prop "${t}" which is not declared.`), $();
  const r = zn(t), i = um(e, o), a = fy((l, f) => {
    let u, d = Be, h;
    return VE(() => {
      const p = e[o];
      kt(u, p) && (u = p, f());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(p) {
        const g = n.set ? n.set(p) : p;
        if (!kt(g, u) && !(d !== Be && kt(p, d)))
          return;
        const m = s.vnode.props;
        m && // check if parent has passed v-model
        (t in m || o in m || r in m) && (`onUpdate:${t}` in m || `onUpdate:${o}` in m || `onUpdate:${r}` in m) || (u = p, f()), s.emit(`update:${t}`, g), kt(p, g) && kt(p, d) && !kt(g, h) && f(), d = p, h = g;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? i || Be : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const um = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${vt(t)}Modifiers`] || e[`${zn(t)}Modifiers`];
function FE(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Be;
  if (x.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(t in u))
        (!d || !(Os(vt(t)) in d)) && Z(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Os(vt(t))}" prop.`
        );
      else {
        const h = u[t];
        be(h) && (h(...n) || Z(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && um(s, t.slice(7));
  if (i && (i.trim && (o = n.map((u) => Ge(u) ? u.trim() : u)), i.number && (o = n.map(Bi))), x.NODE_ENV !== "production" && Fy(e, t, o), x.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && s[Os(u)] && Z(
      `Event "${u}" is emitted in component ${ba(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${zn(
        t
      )}" instead of "${t}".`
    );
  }
  let a, l = s[a = Os(t)] || // also try camelCase event handler (#2249)
  s[a = Os(vt(t))];
  !l && r && (l = s[a = Os(zn(t))]), l && dn(
    l,
    e,
    6,
    o
  );
  const f = s[a + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, dn(
      f,
      e,
      6,
      o
    );
  }
}
function cm(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, a = !1;
  if (!be(e)) {
    const l = (f) => {
      const u = cm(f, t, !0);
      u && (a = !0, Ze(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !a ? (je(e) && s.set(e, null), null) : (he(r) ? r.forEach((l) => i[l] = null) : Ze(i, r), je(e) && s.set(e, i), i);
}
function ya(e, t) {
  return !e || !Lr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Fe(e, t[0].toLowerCase() + t.slice(1)) || Fe(e, zn(t)) || Fe(e, t));
}
let Bl = !1;
function Yi() {
  Bl = !0;
}
function Kc(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [r],
    slots: i,
    attrs: a,
    emit: l,
    render: f,
    renderCache: u,
    props: d,
    data: h,
    setupState: p,
    ctx: g,
    inheritAttrs: m
  } = e, _ = Ki(e);
  let y, b;
  x.NODE_ENV !== "production" && (Bl = !1);
  try {
    if (n.shapeFlag & 4) {
      const S = o || s, k = x.NODE_ENV !== "production" && p.__isScriptSetup ? new Proxy(S, {
        get(R, I, P) {
          return Z(
            `Property '${String(
              I
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(R, I, P);
        }
      }) : S;
      y = tn(
        f.call(
          k,
          S,
          u,
          x.NODE_ENV !== "production" ? On(d) : d,
          p,
          h,
          g
        )
      ), b = a;
    } else {
      const S = t;
      x.NODE_ENV !== "production" && a === d && Yi(), y = tn(
        S.length > 1 ? S(
          x.NODE_ENV !== "production" ? On(d) : d,
          x.NODE_ENV !== "production" ? {
            get attrs() {
              return Yi(), On(a);
            },
            slots: i,
            emit: l
          } : { attrs: a, slots: i, emit: l }
        ) : S(
          x.NODE_ENV !== "production" ? On(d) : d,
          null
        )
      ), b = t.props ? a : BE(a);
    }
  } catch (S) {
    dr.length = 0, jr(S, e, 1), y = le(ot);
  }
  let v = y, O;
  if (x.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([v, O] = dm(y)), b && m !== !1) {
    const S = Object.keys(b), { shapeFlag: k } = v;
    if (S.length) {
      if (k & 7)
        r && S.some(Fi) && (b = jE(
          b,
          r
        )), v = xn(v, b, !1, !0);
      else if (x.NODE_ENV !== "production" && !Bl && v.type !== ot) {
        const R = Object.keys(a), I = [], P = [];
        for (let T = 0, N = R.length; T < N; T++) {
          const A = R[T];
          Lr(A) ? Fi(A) || I.push(A[2].toLowerCase() + A.slice(3)) : P.push(A);
        }
        P.length && Z(
          `Extraneous non-props attributes (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), I.length && Z(
          `Extraneous non-emits event listeners (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (x.NODE_ENV !== "production" && !zc(v) && Z(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), v = xn(v, null, !1, !0), v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs), n.transition && (x.NODE_ENV !== "production" && !zc(v) && Z(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Ar(v, n.transition)), x.NODE_ENV !== "production" && O ? O(v) : y = v, Ki(_), y;
}
const dm = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Pu(t, !1);
  if (s) {
    if (x.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return dm(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (a) => {
    t[o] = a, n && (r > -1 ? n[r] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [tn(s), i];
};
function Pu(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (Ks(o)) {
      if (o.type !== ot || o.children === "v-if") {
        if (n)
          return;
        if (n = o, x.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Pu(n.children);
      }
    } else
      return;
  }
  return n;
}
const BE = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Lr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, jE = (e, t) => {
  const n = {};
  for (const s in e)
    (!Fi(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, zc = (e) => e.shapeFlag & 7 || e.type === ot;
function UE(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: a, patchFlag: l } = t, f = r.emitsOptions;
  if (x.NODE_ENV !== "production" && (o || a) && nn || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? qc(s, i, f) : !!i;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const h = u[d];
        if (i[h] !== s[h] && !ya(f, h))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : s === i ? !1 : s ? i ? qc(s, i, f) : !0 : !!i;
  return !1;
}
function qc(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !ya(n, r))
      return !0;
  }
  return !1;
}
function HE({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const fm = (e) => e.__isSuspense;
function $E(e, t) {
  t && t.pendingBranch ? he(e) ? t.effects.push(...e) : t.effects.push(e) : Ch(e);
}
const Oe = Symbol.for("v-fgt"), Wr = Symbol.for("v-txt"), ot = Symbol.for("v-cmt"), cr = Symbol.for("v-stc"), dr = [];
let Ft = null;
function C(e = !1) {
  dr.push(Ft = e ? null : []);
}
function WE() {
  dr.pop(), Ft = dr[dr.length - 1] || null;
}
let Sr = 1;
function Yc(e, t = !1) {
  Sr += e, e < 0 && Ft && t && (Ft.hasOnce = !0);
}
function pm(e) {
  return e.dynamicChildren = Sr > 0 ? Ft || yo : null, WE(), Sr > 0 && Ft && Ft.push(e), e;
}
function D(e, t, n, s, o, r) {
  return pm(
    c(
      e,
      t,
      n,
      s,
      o,
      r,
      !0
    )
  );
}
function it(e, t, n, s, o) {
  return pm(
    le(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Ks(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ds(e, t) {
  if (x.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = bi.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const KE = (...e) => mm(
  ...e
), hm = ({ key: e }) => e ?? null, Si = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ge(e) || Ye(e) || be(e) ? { i: tt, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, s = 0, o = null, r = e === Oe ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hm(t),
    ref: t && Si(t),
    scopeId: Ih,
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
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: tt
  };
  return a ? (Vu(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ge(n) ? 8 : 16), x.NODE_ENV !== "production" && l.key !== l.key && Z("VNode created with invalid key (NaN). VNode type:", l.type), Sr > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ft && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ft.push(l), l;
}
const le = x.NODE_ENV !== "production" ? KE : mm;
function mm(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === tE) && (x.NODE_ENV !== "production" && !e && Z(`Invalid vnode type when creating vnode: ${e}.`), e = ot), Ks(e)) {
    const a = xn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Vu(a, n), Sr > 0 && !r && Ft && (a.shapeFlag & 6 ? Ft[Ft.indexOf(e)] = a : Ft.push(a)), a.patchFlag = -2, a;
  }
  if (ym(e) && (e = e.__vccOpts), t) {
    t = et(t);
    let { class: a, style: l } = t;
    a && !Ge(a) && (t.class = ue(a)), je(l) && (br(l) && !he(l) && (l = Ze({}, l)), t.style = Mt(l));
  }
  const i = Ge(e) ? 1 : fm(e) ? 128 : Mh(e) ? 64 : je(e) ? 4 : be(e) ? 2 : 0;
  return x.NODE_ENV !== "production" && i & 4 && br(e) && (e = Se(e), Z(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), c(
    e,
    t,
    n,
    s,
    o,
    i,
    r,
    !0
  );
}
function et(e) {
  return e ? br(e) || tm(e) ? Ze({}, e) : e : null;
}
function xn(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: a, transition: l } = e, f = t ? gs(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && hm(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? he(r) ? r.concat(Si(t)) : [r, Si(t)] : Si(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: x.NODE_ENV !== "production" && i === -1 && he(a) ? a.map(gm) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && xn(e.ssContent),
    ssFallback: e.ssFallback && xn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && s && Ar(
    u,
    l.clone(u)
  ), u;
}
function gm(e) {
  const t = xn(e);
  return he(e.children) && (t.children = e.children.map(gm)), t;
}
function ee(e = " ", t = 0) {
  return le(Wr, null, e, t);
}
function Xc(e, t) {
  const n = le(cr, null, e);
  return n.staticCount = t, n;
}
function de(e = "", t = !1) {
  return t ? (C(), it(ot, null, e)) : le(ot, null, e);
}
function tn(e) {
  return e == null || typeof e == "boolean" ? le(ot) : he(e) ? le(
    Oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ks(e) ? ss(e) : le(Wr, null, String(e));
}
function ss(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xn(e);
}
function Vu(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (he(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Vu(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !tm(t) ? t._ctx = tt : o === 3 && tt && (tt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else be(t) ? (t = { default: t, _ctx: tt }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ee(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function gs(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ue([t.class, s.class]));
      else if (o === "style")
        t.style = Mt([t.style, s.style]);
      else if (Lr(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(he(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function yn(e, t, n, s = null) {
  dn(e, t, 7, [
    n,
    s
  ]);
}
const zE = Qh();
let qE = 0;
function YE(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || zE, r = {
    uid: qE++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Zp(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: sm(s, o),
    emitsOptions: cm(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Be,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Be,
    data: Be,
    props: Be,
    attrs: Be,
    slots: Be,
    refs: Be,
    setupState: Be,
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
  return x.NODE_ENV !== "production" ? r.ctx = sE(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = FE.bind(null, r), e.ce && e.ce(r), r;
}
let lt = null;
const Gn = () => lt || tt;
let Xi, jl;
{
  const e = Br(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Xi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => lt = n
  ), jl = t(
    "__VUE_SSR_SETTERS__",
    (n) => Or = n
  );
}
const Kr = (e) => {
  const t = lt;
  return Xi(e), e.scope.on(), () => {
    e.scope.off(), Xi(t);
  };
}, Gc = () => {
  lt && lt.scope.off(), Xi(null);
}, XE = /* @__PURE__ */ Yn("slot,component");
function Ul(e, { isNativeTag: t }) {
  (XE(e) || t(e)) && Z(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function vm(e) {
  return e.vnode.shapeFlag & 4;
}
let Or = !1;
function GE(e, t = !1, n = !1) {
  t && jl(t);
  const { props: s, children: o } = e.vnode, r = vm(e);
  mE(e, s, r, t), CE(e, o, n || t);
  const i = r ? JE(e, t) : void 0;
  return t && jl(!1), i;
}
function JE(e, t) {
  var n;
  const s = e.type;
  if (x.NODE_ENV !== "production") {
    if (s.name && Ul(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        Ul(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        Ph(r[i]);
    }
    s.compilerOptions && QE() && Z(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Xh), x.NODE_ENV !== "production" && oE(e);
  const { setup: o } = s;
  if (o) {
    ln();
    const r = e.setupContext = o.length > 1 ? eb(e) : null, i = Kr(e), a = Mo(
      o,
      e,
      0,
      [
        x.NODE_ENV !== "production" ? On(e.props) : e.props,
        r
      ]
    ), l = wu(a);
    if (un(), i(), (l || e.sp) && !bo(e) && Wh(e), l) {
      if (a.then(Gc, Gc), t)
        return a.then((f) => {
          Jc(e, f, t);
        }).catch((f) => {
          jr(f, e, 0);
        });
      if (e.asyncDep = a, x.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = s.name) != null ? n : "Anonymous";
        Z(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Jc(e, a, t);
  } else
    _m(e, t);
}
function Jc(e, t, n) {
  be(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : je(t) ? (x.NODE_ENV !== "production" && Ks(t) && Z(
    "setup() should not return VNodes directly - return a render function instead."
  ), x.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = bh(t), x.NODE_ENV !== "production" && rE(e)) : x.NODE_ENV !== "production" && t !== void 0 && Z(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), _m(e, n);
}
const QE = () => !0;
function _m(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ct);
  {
    const o = Kr(e);
    ln();
    try {
      aE(e);
    } finally {
      un(), o();
    }
  }
  x.NODE_ENV !== "production" && !s.render && e.render === ct && !t && (s.template ? Z(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : Z("Component is missing template or render function: ", s));
}
const Qc = x.NODE_ENV !== "production" ? {
  get(e, t) {
    return Yi(), ut(e, "get", ""), e[t];
  },
  set() {
    return Z("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return Z("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ut(e, "get", ""), e[t];
  }
};
function ZE(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ut(e, "get", "$slots"), t[n];
    }
  });
}
function eb(e) {
  const t = (n) => {
    if (x.NODE_ENV !== "production" && (e.exposed && Z("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (he(n) ? s = "array" : Ye(n) && (s = "ref")), s !== "object" && Z(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (x.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Qc));
      },
      get slots() {
        return s || (s = ZE(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Qc),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Ea(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bh(as(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Fs)
        return Fs[n](e);
    },
    has(t, n) {
      return n in t || n in Fs;
    }
  })) : e.proxy;
}
const tb = /(?:^|[-_])(\w)/g, nb = (e) => e.replace(tb, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Mu(e, t = !0) {
  return be(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ba(e, t, n = !1) {
  let s = Mu(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    s = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? nb(s) : n ? "App" : "Anonymous";
}
function ym(e) {
  return be(e) && "__vccOpts" in e;
}
const U = (e, t) => {
  const n = gy(e, t, Or);
  if (x.NODE_ENV !== "production") {
    const s = Gn();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Lu(e, t, n) {
  const s = arguments.length;
  return s === 2 ? je(t) && !he(t) ? Ks(t) ? le(e, null, [t]) : le(e, t) : le(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Ks(n) && (n = [n]), le(e, t, n));
}
function sb() {
  if (x.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!je(d))
        return null;
      if (d.__isVue)
        return ["div", e, "VueInstance"];
      if (Ye(d)) {
        ln();
        const h = d.value;
        return un(), [
          "div",
          {},
          ["span", e, u(d)],
          "<",
          a(h),
          ">"
        ];
      } else {
        if (rn(d))
          return [
            "div",
            {},
            ["span", e, St(d) ? "ShallowReactive" : "Reactive"],
            "<",
            a(d),
            `>${kn(d) ? " (readonly)" : ""}`
          ];
        if (kn(d))
          return [
            "div",
            {},
            ["span", e, St(d) ? "ShallowReadonly" : "Readonly"],
            "<",
            a(d),
            ">"
          ];
      }
      return null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...r(d.$)
        ];
    }
  };
  function r(d) {
    const h = [];
    d.type.props && d.props && h.push(i("props", Se(d.props))), d.setupState !== Be && h.push(i("setup", d.setupState)), d.data !== Be && h.push(i("data", Se(d.data)));
    const p = l(d, "computed");
    p && h.push(i("computed", p));
    const g = l(d, "inject");
    return g && h.push(i("injected", g)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), h;
  }
  function i(d, h) {
    return h = Ze({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((p) => [
          "div",
          {},
          ["span", s, p + ": "],
          a(h[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(d, h = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : je(d) ? ["object", { object: h ? Se(d) : d }] : ["span", n, String(d)];
  }
  function l(d, h) {
    const p = d.type;
    if (be(p))
      return;
    const g = {};
    for (const m in d.ctx)
      f(p, m, h) && (g[m] = d.ctx[m]);
    return g;
  }
  function f(d, h, p) {
    const g = d[p];
    if (he(g) && g.includes(h) || je(g) && h in g || d.extends && f(d.extends, h, p) || d.mixins && d.mixins.some((m) => f(m, h, p)))
      return !0;
  }
  function u(d) {
    return St(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Zc = "3.5.17", Cn = x.NODE_ENV !== "production" ? Z : ct;
var Xt = {};
let Hl;
const ed = typeof window < "u" && window.trustedTypes;
if (ed)
  try {
    Hl = /* @__PURE__ */ ed.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Xt.NODE_ENV !== "production" && Cn(`Error creating trusted types policy: ${e}`);
  }
const Em = Hl ? (e) => Hl.createHTML(e) : (e) => e, ob = "http://www.w3.org/2000/svg", rb = "http://www.w3.org/1998/Math/MathML", jn = typeof document < "u" ? document : null, td = jn && /* @__PURE__ */ jn.createElement("template"), ib = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? jn.createElementNS(ob, e) : t === "mathml" ? jn.createElementNS(rb, e) : n ? jn.createElement(e, { is: n }) : jn.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => jn.createTextNode(e),
  createComment: (e) => jn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => jn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === r || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)); )
        ;
    else {
      td.innerHTML = Em(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = td.content;
      if (s === "svg" || s === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Qn = "transition", Yo = "animation", Cr = Symbol("_vtc"), bm = {
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
}, ab = /* @__PURE__ */ Ze(
  {},
  Bh,
  bm
), lb = (e) => (e.displayName = "Transition", e.props = ab, e), ub = /* @__PURE__ */ lb(
  (e, { slots: t }) => Lu(Hy, cb(e), t)
), As = (e, t = []) => {
  he(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, nd = (e) => e ? he(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function cb(e) {
  const t = {};
  for (const A in e)
    A in bm || (t[A] = e[A]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = r,
    appearActiveClass: f = i,
    appearToClass: u = a,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, g = db(o), m = g && g[0], _ = g && g[1], {
    onBeforeEnter: y,
    onEnter: b,
    onEnterCancelled: v,
    onLeave: O,
    onLeaveCancelled: S,
    onBeforeAppear: k = y,
    onAppear: R = b,
    onAppearCancelled: I = v
  } = t, P = (A, Y, fe, J) => {
    A._enterCancelled = J, Ss(A, Y ? u : a), Ss(A, Y ? f : i), fe && fe();
  }, T = (A, Y) => {
    A._isLeaving = !1, Ss(A, d), Ss(A, p), Ss(A, h), Y && Y();
  }, N = (A) => (Y, fe) => {
    const J = A ? R : b, se = () => P(Y, A, fe);
    As(J, [Y, se]), sd(() => {
      Ss(Y, A ? l : r), Ln(Y, A ? u : a), nd(J) || od(Y, s, m, se);
    });
  };
  return Ze(t, {
    onBeforeEnter(A) {
      As(y, [A]), Ln(A, r), Ln(A, i);
    },
    onBeforeAppear(A) {
      As(k, [A]), Ln(A, l), Ln(A, f);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(A, Y) {
      A._isLeaving = !0;
      const fe = () => T(A, Y);
      Ln(A, d), A._enterCancelled ? (Ln(A, h), ad()) : (ad(), Ln(A, h)), sd(() => {
        A._isLeaving && (Ss(A, d), Ln(A, p), nd(O) || od(A, s, _, fe));
      }), As(O, [A, fe]);
    },
    onEnterCancelled(A) {
      P(A, !1, void 0, !0), As(v, [A]);
    },
    onAppearCancelled(A) {
      P(A, !0, void 0, !0), As(I, [A]);
    },
    onLeaveCancelled(A) {
      T(A), As(S, [A]);
    }
  });
}
function db(e) {
  if (e == null)
    return null;
  if (je(e))
    return [Ga(e.enter), Ga(e.leave)];
  {
    const t = Ga(e);
    return [t, t];
  }
}
function Ga(e) {
  const t = T_(e);
  return Xt.NODE_ENV !== "production" && Ay(t, "<transition> explicit duration"), t;
}
function Ln(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Cr] || (e[Cr] = /* @__PURE__ */ new Set())).add(t);
}
function Ss(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Cr];
  n && (n.delete(t), n.size || (e[Cr] = void 0));
}
function sd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let fb = 0;
function od(e, t, n, s) {
  const o = e._endId = ++fb, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: a, propCount: l } = pb(e, t);
  if (!i)
    return s();
  const f = i + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(f, h), r();
  }, h = (p) => {
    p.target === e && ++u >= l && d();
  };
  setTimeout(() => {
    u < l && d();
  }, a + 1), e.addEventListener(f, h);
}
function pb(e, t) {
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), o = s(`${Qn}Delay`), r = s(`${Qn}Duration`), i = rd(o, r), a = s(`${Yo}Delay`), l = s(`${Yo}Duration`), f = rd(a, l);
  let u = null, d = 0, h = 0;
  t === Qn ? i > 0 && (u = Qn, d = i, h = r.length) : t === Yo ? f > 0 && (u = Yo, d = f, h = l.length) : (d = Math.max(i, f), u = d > 0 ? i > f ? Qn : Yo : null, h = u ? u === Qn ? r.length : l.length : 0);
  const p = u === Qn && /\b(transform|all)(,|$)/.test(
    s(`${Qn}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: h,
    hasTransform: p
  };
}
function rd(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => id(n) + id(e[s])));
}
function id(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ad() {
  return document.body.offsetHeight;
}
function hb(e, t, n) {
  const s = e[Cr];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Gi = Symbol("_vod"), wm = Symbol("_vsh"), Am = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Gi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Xo(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Xo(e, !0), s.enter(e)) : s.leave(e, () => {
      Xo(e, !1);
    }) : Xo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Xo(e, t);
  }
};
Xt.NODE_ENV !== "production" && (Am.name = "show");
function Xo(e, t) {
  e.style.display = t ? e[Gi] : "none", e[wm] = !t;
}
const mb = Symbol(Xt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), gb = /(^|;)\s*display\s*:/;
function vb(e, t, n) {
  const s = e.style, o = Ge(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (Ge(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && Oi(s, a, "");
        }
      else
        for (const i in t)
          n[i] == null && Oi(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Oi(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[mb];
      i && (n += ";" + i), s.cssText = n, r = gb.test(n);
    }
  } else t && e.removeAttribute("style");
  Gi in e && (e[Gi] = r ? s.display : "", e[wm] && (s.display = "none"));
}
const _b = /[^\\];\s*$/, ld = /\s*!important$/;
function Oi(e, t, n) {
  if (he(n))
    n.forEach((s) => Oi(e, t, s));
  else if (n == null && (n = ""), Xt.NODE_ENV !== "production" && _b.test(n) && Cn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = yb(e, t);
    ld.test(n) ? e.setProperty(
      zn(s),
      n.replace(ld, ""),
      "important"
    ) : e[s] = n;
  }
}
const ud = ["Webkit", "Moz", "ms"], Ja = {};
function yb(e, t) {
  const n = Ja[t];
  if (n)
    return n;
  let s = vt(t);
  if (s !== "filter" && s in e)
    return Ja[t] = s;
  s = Hs(s);
  for (let o = 0; o < ud.length; o++) {
    const r = ud[o] + s;
    if (r in e)
      return Ja[t] = r;
  }
  return t;
}
const cd = "http://www.w3.org/1999/xlink";
function dd(e, t, n, s, o, r = B_(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(cd, t.slice(6, t.length)) : e.setAttributeNS(cd, t, n) : n == null || r && !Gp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : an(n) ? String(n) : n
  );
}
function fd(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Em(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const a = r === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Gp(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    Xt.NODE_ENV !== "production" && !i && Cn(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  i && e.removeAttribute(o || t);
}
function is(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Eb(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const pd = Symbol("_vei");
function bb(e, t, n, s, o = null) {
  const r = e[pd] || (e[pd] = {}), i = r[t];
  if (s && i)
    i.value = Xt.NODE_ENV !== "production" ? md(s, t) : s;
  else {
    const [a, l] = wb(t);
    if (s) {
      const f = r[t] = Ob(
        Xt.NODE_ENV !== "production" ? md(s, t) : s,
        o
      );
      is(e, a, f, l);
    } else i && (Eb(e, a, i, l), r[t] = void 0);
  }
}
const hd = /(?:Once|Passive|Capture)$/;
function wb(e) {
  let t;
  if (hd.test(e)) {
    t = {};
    let s;
    for (; s = e.match(hd); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : zn(e.slice(2)), t];
}
let Qa = 0;
const Ab = /* @__PURE__ */ Promise.resolve(), Sb = () => Qa || (Ab.then(() => Qa = 0), Qa = Date.now());
function Ob(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    dn(
      Cb(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Sb(), n;
}
function md(e, t) {
  return be(e) || he(e) ? e : (Cn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ct);
}
function Cb(e, t) {
  if (he(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const gd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Tb = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? hb(e, s, i) : t === "style" ? vb(e, n, s) : Lr(t) ? Fi(t) || bb(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nb(e, t, s, i)) ? (fd(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && dd(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ge(s)) ? fd(e, vt(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), dd(e, t, s, i));
};
function Nb(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gd(t) && be(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return gd(t) && Ge(n) ? !1 : t in e;
}
const Ao = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return he(t) ? (n) => uo(t, n) : t;
};
function Db(e) {
  e.target.composing = !0;
}
function vd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const $n = Symbol("_assign"), Ji = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[$n] = Ao(o);
    const r = s || o.props && o.props.type === "number";
    is(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), r && (a = Bi(a)), e[$n](a);
    }), n && is(e, "change", () => {
      e.value = e.value.trim();
    }), t || (is(e, "compositionstart", Db), is(e, "compositionend", vd), is(e, "change", vd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[$n] = Ao(i), e.composing) return;
    const a = (r || e.type === "number") && !/^0\d/.test(e.value) ? Bi(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === l) || (e.value = l));
  }
}, Qi = {
  created(e, { value: t }, n) {
    e.checked = wo(t, n.props.value), e[$n] = Ao(n), is(e, "change", () => {
      e[$n](Tr(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[$n] = Ao(s), t !== n && (e.checked = wo(t, s.props.value));
  }
}, fr = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = la(t);
    is(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Bi(Tr(i)) : Tr(i)
      );
      e[$n](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, $s(() => {
        e._assigning = !1;
      });
    }), e[$n] = Ao(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    _d(e, t);
  },
  beforeUpdate(e, t, n) {
    e[$n] = Ao(n);
  },
  updated(e, { value: t }) {
    e._assigning || _d(e, t);
  }
};
function _d(e, t) {
  const n = e.multiple, s = he(t);
  if (n && !s && !la(t)) {
    Xt.NODE_ENV !== "production" && Cn(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], a = Tr(i);
    if (n)
      if (s) {
        const l = typeof a;
        l === "string" || l === "number" ? i.selected = t.some((f) => String(f) === String(a)) : i.selected = U_(t, a) > -1;
      } else
        i.selected = t.has(a);
    else if (wo(Tr(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Tr(e) {
  return "_value" in e ? e._value : e.value;
}
const kb = ["ctrl", "shift", "alt", "meta"], xb = {
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
  exact: (e, t) => kb.some((n) => e[`${n}Key`] && !t.includes(n))
}, Sm = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const a = xb[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...r);
  });
}, Rb = /* @__PURE__ */ Ze({ patchProp: Tb }, ib);
let yd;
function Ib() {
  return yd || (yd = DE(Rb));
}
const wa = (...e) => {
  const t = Ib().createApp(...e);
  Xt.NODE_ENV !== "production" && (Vb(t), Mb(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Lb(s);
    if (!o) return;
    const r = t._component;
    !be(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Pb(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function Pb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Vb(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => V_(t) || M_(t) || L_(t),
    writable: !1
  });
}
function Mb(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Cn(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Cn(s), n;
      },
      set() {
        Cn(s);
      }
    });
  }
}
function Lb(e) {
  if (Ge(e)) {
    const t = document.querySelector(e);
    return Xt.NODE_ENV !== "production" && !t && Cn(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Xt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Cn(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Fb = {};
function Bb() {
  sb();
}
Fb.NODE_ENV !== "production" && Bb();
var jb = Object.create, Om = Object.defineProperty, Ub = Object.getOwnPropertyDescriptor, Fu = Object.getOwnPropertyNames, Hb = Object.getPrototypeOf, $b = Object.prototype.hasOwnProperty, Wb = (e, t) => function() {
  return e && (t = (0, e[Fu(e)[0]])(e = 0)), t;
}, Kb = (e, t) => function() {
  return t || (0, e[Fu(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, zb = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Fu(t))
      !$b.call(e, o) && o !== n && Om(e, o, { get: () => t[o], enumerable: !(s = Ub(t, o)) || s.enumerable });
  return e;
}, qb = (e, t, n) => (n = e != null ? jb(Hb(e)) : {}, zb(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Om(n, "default", { value: e, enumerable: !0 }),
  e
)), zr = Wb({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Yb = Kb({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    zr(), t.exports = s;
    function n(r) {
      return r instanceof Buffer ? Buffer.from(r) : new r.constructor(r.buffer.slice(), r.byteOffset, r.length);
    }
    function s(r) {
      if (r = r || {}, r.circles) return o(r);
      const i = /* @__PURE__ */ new Map();
      if (i.set(Date, (d) => new Date(d)), i.set(Map, (d, h) => new Map(l(Array.from(d), h))), i.set(Set, (d, h) => new Set(l(Array.from(d), h))), r.constructorHandlers)
        for (const d of r.constructorHandlers)
          i.set(d[0], d[1]);
      let a = null;
      return r.proto ? u : f;
      function l(d, h) {
        const p = Object.keys(d), g = new Array(p.length);
        for (let m = 0; m < p.length; m++) {
          const _ = p[m], y = d[_];
          typeof y != "object" || y === null ? g[_] = y : y.constructor !== Object && (a = i.get(y.constructor)) ? g[_] = a(y, h) : ArrayBuffer.isView(y) ? g[_] = n(y) : g[_] = h(y);
        }
        return g;
      }
      function f(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return l(d, f);
        if (d.constructor !== Object && (a = i.get(d.constructor)))
          return a(d, f);
        const h = {};
        for (const p in d) {
          if (Object.hasOwnProperty.call(d, p) === !1) continue;
          const g = d[p];
          typeof g != "object" || g === null ? h[p] = g : g.constructor !== Object && (a = i.get(g.constructor)) ? h[p] = a(g, f) : ArrayBuffer.isView(g) ? h[p] = n(g) : h[p] = f(g);
        }
        return h;
      }
      function u(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return l(d, u);
        if (d.constructor !== Object && (a = i.get(d.constructor)))
          return a(d, u);
        const h = {};
        for (const p in d) {
          const g = d[p];
          typeof g != "object" || g === null ? h[p] = g : g.constructor !== Object && (a = i.get(g.constructor)) ? h[p] = a(g, u) : ArrayBuffer.isView(g) ? h[p] = n(g) : h[p] = u(g);
        }
        return h;
      }
    }
    function o(r) {
      const i = [], a = [], l = /* @__PURE__ */ new Map();
      if (l.set(Date, (p) => new Date(p)), l.set(Map, (p, g) => new Map(u(Array.from(p), g))), l.set(Set, (p, g) => new Set(u(Array.from(p), g))), r.constructorHandlers)
        for (const p of r.constructorHandlers)
          l.set(p[0], p[1]);
      let f = null;
      return r.proto ? h : d;
      function u(p, g) {
        const m = Object.keys(p), _ = new Array(m.length);
        for (let y = 0; y < m.length; y++) {
          const b = m[y], v = p[b];
          if (typeof v != "object" || v === null)
            _[b] = v;
          else if (v.constructor !== Object && (f = l.get(v.constructor)))
            _[b] = f(v, g);
          else if (ArrayBuffer.isView(v))
            _[b] = n(v);
          else {
            const O = i.indexOf(v);
            O !== -1 ? _[b] = a[O] : _[b] = g(v);
          }
        }
        return _;
      }
      function d(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return u(p, d);
        if (p.constructor !== Object && (f = l.get(p.constructor)))
          return f(p, d);
        const g = {};
        i.push(p), a.push(g);
        for (const m in p) {
          if (Object.hasOwnProperty.call(p, m) === !1) continue;
          const _ = p[m];
          if (typeof _ != "object" || _ === null)
            g[m] = _;
          else if (_.constructor !== Object && (f = l.get(_.constructor)))
            g[m] = f(_, d);
          else if (ArrayBuffer.isView(_))
            g[m] = n(_);
          else {
            const y = i.indexOf(_);
            y !== -1 ? g[m] = a[y] : g[m] = d(_);
          }
        }
        return i.pop(), a.pop(), g;
      }
      function h(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return u(p, h);
        if (p.constructor !== Object && (f = l.get(p.constructor)))
          return f(p, h);
        const g = {};
        i.push(p), a.push(g);
        for (const m in p) {
          const _ = p[m];
          if (typeof _ != "object" || _ === null)
            g[m] = _;
          else if (_.constructor !== Object && (f = l.get(_.constructor)))
            g[m] = f(_, h);
          else if (ArrayBuffer.isView(_))
            g[m] = n(_);
          else {
            const y = i.indexOf(_);
            y !== -1 ? g[m] = a[y] : g[m] = h(_);
          }
        }
        return i.pop(), a.pop(), g;
      }
    }
  }
});
zr();
zr();
zr();
var Cm = typeof navigator < "u", ce = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof ce.chrome < "u" && ce.chrome.devtools;
Cm && (ce.self, ce.top);
var Ed;
typeof navigator < "u" && ((Ed = navigator.userAgent) == null || Ed.toLowerCase().includes("electron"));
zr();
var Xb = qb(Yb()), Gb = /(?:^|[-_/])(\w)/g;
function Jb(e, t) {
  return t ? t.toUpperCase() : "";
}
function Qb(e) {
  return e && `${e}`.replace(Gb, Jb);
}
function Zb(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const s = n.lastIndexOf("/"), o = n.substring(s + 1);
  {
    const r = o.lastIndexOf(t);
    return o.substring(0, r);
  }
}
var bd = (0, Xb.default)({ circles: !0 });
const e0 = {
  trailing: !0
};
function So(e, t = 25, n = {}) {
  if (n = { ...e0, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let s, o, r = [], i, a;
  const l = (f, u) => (i = t0(e, f, u), i.finally(() => {
    if (i = null, n.trailing && a && !o) {
      const d = l(f, a);
      return a = null, d;
    }
  }), i);
  return function(...f) {
    return i ? (n.trailing && (a = f), i) : new Promise((u) => {
      const d = !o && n.leading;
      clearTimeout(o), o = setTimeout(() => {
        o = null;
        const h = n.leading ? s : l(this, f);
        for (const p of r)
          p(h);
        r = [];
      }, t), d ? (s = l(this, f), u(s)) : r.push(u);
    });
  };
}
async function t0(e, t, n) {
  return await e.apply(t, n);
}
function $l(e, t = {}, n) {
  for (const s in e) {
    const o = e[s], r = n ? `${n}:${s}` : s;
    typeof o == "object" && o !== null ? $l(o, t, r) : typeof o == "function" && (t[r] = o);
  }
  return t;
}
const n0 = { run: (e) => e() }, s0 = () => n0, Tm = typeof console.createTask < "u" ? console.createTask : s0;
function o0(e, t) {
  const n = t.shift(), s = Tm(n);
  return e.reduce(
    (o, r) => o.then(() => s.run(() => r(...t))),
    Promise.resolve()
  );
}
function r0(e, t) {
  const n = t.shift(), s = Tm(n);
  return Promise.all(e.map((o) => s.run(() => o(...t))));
}
function Za(e, t) {
  for (const n of [...e])
    n(t);
}
class i0 {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(t, n, s = {}) {
    if (!t || typeof n != "function")
      return () => {
      };
    const o = t;
    let r;
    for (; this._deprecatedHooks[t]; )
      r = this._deprecatedHooks[t], t = r.to;
    if (r && !s.allowDeprecated) {
      let i = r.message;
      i || (i = `${o} hook has been deprecated` + (r.to ? `, please use ${r.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i));
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
    let s, o = (...r) => (typeof s == "function" && s(), s = void 0, o = void 0, n(...r));
    return s = this.hook(t, o), s;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const s = this._hooks[t].indexOf(n);
      s !== -1 && this._hooks[t].splice(s, 1), this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const s = this._hooks[t] || [];
    delete this._hooks[t];
    for (const o of s)
      this.hook(t, o);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t)
      this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = $l(t), s = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of s.splice(0, s.length))
        o();
    };
  }
  removeHooks(t) {
    const n = $l(t);
    for (const s in n)
      this.removeHook(s, n[s]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(o0, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(r0, t, ...n);
  }
  callHookWith(t, n, ...s) {
    const o = this._before || this._after ? { name: n, args: s, context: {} } : void 0;
    this._before && Za(this._before, o);
    const r = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      s
    );
    return r instanceof Promise ? r.finally(() => {
      this._after && o && Za(this._after, o);
    }) : (this._after && o && Za(this._after, o), r);
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
function Nm() {
  return new i0();
}
var a0 = Object.create, Dm = Object.defineProperty, l0 = Object.getOwnPropertyDescriptor, Bu = Object.getOwnPropertyNames, u0 = Object.getPrototypeOf, c0 = Object.prototype.hasOwnProperty, d0 = (e, t) => function() {
  return e && (t = (0, e[Bu(e)[0]])(e = 0)), t;
}, km = (e, t) => function() {
  return t || (0, e[Bu(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, f0 = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Bu(t))
      !c0.call(e, o) && o !== n && Dm(e, o, { get: () => t[o], enumerable: !(s = l0(t, o)) || s.enumerable });
  return e;
}, p0 = (e, t, n) => (n = e != null ? a0(u0(e)) : {}, f0(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Dm(n, "default", { value: e, enumerable: !0 }),
  e
)), q = d0({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), h0 = km({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
    q(), function(n) {
      var s = {
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
      }, o = [
        // burmese
        "်",
        // Dhivehi
        "ް"
      ], r = {
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
      }, i = {
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
      }, l = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), f = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), u = [".", "!", "~", "*", "'", "(", ")"].join(""), d = function(_, y) {
        var b = "-", v = "", O = "", S = !0, k = {}, R, I, P, T, N, A, Y, fe, J, se, W, M, X, _e, Ee = "";
        if (typeof _ != "string")
          return "";
        if (typeof y == "string" && (b = y), Y = a.en, fe = i.en, typeof y == "object") {
          R = y.maintainCase || !1, k = y.custom && typeof y.custom == "object" ? y.custom : k, P = +y.truncate > 1 && y.truncate || !1, T = y.uric || !1, N = y.uricNoSlash || !1, A = y.mark || !1, S = !(y.symbols === !1 || y.lang === !1), b = y.separator || b, T && (Ee += l), N && (Ee += f), A && (Ee += u), Y = y.lang && a[y.lang] && S ? a[y.lang] : S ? a.en : {}, fe = y.lang && i[y.lang] ? i[y.lang] : y.lang === !1 || y.lang === !0 ? {} : i.en, y.titleCase && typeof y.titleCase.length == "number" && Array.prototype.toString.call(y.titleCase) ? (y.titleCase.forEach(function(we) {
            k[we + ""] = we + "";
          }), I = !0) : I = !!y.titleCase, y.custom && typeof y.custom.length == "number" && Array.prototype.toString.call(y.custom) && y.custom.forEach(function(we) {
            k[we + ""] = we + "";
          }), Object.keys(k).forEach(function(we) {
            var Re;
            we.length > 1 ? Re = new RegExp("\\b" + p(we) + "\\b", "gi") : Re = new RegExp(p(we), "gi"), _ = _.replace(Re, k[we]);
          });
          for (W in k)
            Ee += W;
        }
        for (Ee += b, Ee = p(Ee), _ = _.replace(/(^\s+|\s+$)/g, ""), X = !1, _e = !1, se = 0, M = _.length; se < M; se++)
          W = _[se], g(W, k) ? X = !1 : fe[W] ? (W = X && fe[W].match(/[A-Za-z0-9]/) ? " " + fe[W] : fe[W], X = !1) : W in s ? (se + 1 < M && o.indexOf(_[se + 1]) >= 0 ? (O += W, W = "") : _e === !0 ? (W = r[O] + s[W], O = "") : W = X && s[W].match(/[A-Za-z0-9]/) ? " " + s[W] : s[W], X = !1, _e = !1) : W in r ? (O += W, W = "", se === M - 1 && (W = r[O]), _e = !0) : /* process symbol chars */ Y[W] && !(T && l.indexOf(W) !== -1) && !(N && f.indexOf(W) !== -1) ? (W = X || v.substr(-1).match(/[A-Za-z0-9]/) ? b + Y[W] : Y[W], W += _[se + 1] !== void 0 && _[se + 1].match(/[A-Za-z0-9]/) ? b : "", X = !0) : (_e === !0 ? (W = r[O] + W, O = "", _e = !1) : X && (/[A-Za-z0-9]/.test(W) || v.substr(-1).match(/A-Za-z0-9]/)) && (W = " " + W), X = !1), v += W.replace(new RegExp("[^\\w\\s" + Ee + "_-]", "g"), b);
        return I && (v = v.replace(/(\w)(\S*)/g, function(we, Re, Pe) {
          var Me = Re.toUpperCase() + (Pe !== null ? Pe : "");
          return Object.keys(k).indexOf(Me.toLowerCase()) < 0 ? Me : Me.toLowerCase();
        })), v = v.replace(/\s+/g, b).replace(new RegExp("\\" + b + "+", "g"), b).replace(new RegExp("(^\\" + b + "+|\\" + b + "+$)", "g"), ""), P && v.length > P && (J = v.charAt(P) === b, v = v.slice(0, P), J || (v = v.slice(0, v.lastIndexOf(b)))), !R && !I && (v = v.toLowerCase()), v;
      }, h = function(_) {
        return function(b) {
          return d(b, _);
        };
      }, p = function(_) {
        return _.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, g = function(m, _) {
        for (var y in _)
          if (_[y] === m)
            return !0;
      };
      if (typeof t < "u" && t.exports)
        t.exports = d, t.exports.createSlug = h;
      else if (typeof define < "u" && define.amd)
        define([], function() {
          return d;
        });
      else
        try {
          if (n.getSlug || n.createSlug)
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          n.getSlug = d, n.createSlug = h;
        } catch {
        }
    }(e);
  }
}), m0 = km({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    q(), t.exports = h0();
  }
});
q();
q();
q();
q();
q();
q();
q();
q();
function g0(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function v0(e) {
  const t = e.__file;
  if (t)
    return Qb(Zb(t, ".vue"));
}
function wd(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function ju(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function xm(e) {
  var t, n;
  const s = (t = e.subTree) == null ? void 0 : t.type, o = ju(e);
  return o ? ((n = o?.types) == null ? void 0 : n.Fragment) === s : !1;
}
function Aa(e) {
  var t, n, s;
  const o = g0(e?.type || {});
  if (o)
    return o;
  if (e?.root === e)
    return "Root";
  for (const i in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[i] === e?.type)
      return wd(e, i);
  for (const i in (s = e.appContext) == null ? void 0 : s.components)
    if (e.appContext.components[i] === e?.type)
      return wd(e, i);
  const r = v0(e?.type || {});
  return r || "Anonymous Component";
}
function _0(e) {
  var t, n, s;
  const o = (s = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? s : 0, r = e === e?.root ? "root" : e.uid;
  return `${o}:${r}`;
}
function Wl(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function y0() {
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
var ii;
function E0(e) {
  return ii || (ii = document.createRange()), ii.selectNode(e), ii.getBoundingClientRect();
}
function b0(e) {
  const t = y0();
  if (!e.children)
    return t;
  for (let n = 0, s = e.children.length; n < s; n++) {
    const o = e.children[n];
    let r;
    if (o.component)
      r = zs(o.component);
    else if (o.el) {
      const i = o.el;
      i.nodeType === 1 || i.getBoundingClientRect ? r = i.getBoundingClientRect() : i.nodeType === 3 && i.data.trim() && (r = E0(i));
    }
    r && w0(t, r);
  }
  return t;
}
function w0(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Ad = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function zs(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? Ad : xm(e) ? b0(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? zs(e.subTree.component) : Ad;
}
q();
function Uu(e) {
  return xm(e) ? A0(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function A0(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...Uu(n.component)) : n?.el && t.push(n.el);
  }), t;
}
var Rm = "__vue-devtools-component-inspector__", Im = "__vue-devtools-component-inspector__card__", Pm = "__vue-devtools-component-inspector__name__", Vm = "__vue-devtools-component-inspector__indicator__", Mm = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, S0 = {
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
}, O0 = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function Lo() {
  return document.getElementById(Rm);
}
function C0() {
  return document.getElementById(Im);
}
function T0() {
  return document.getElementById(Vm);
}
function N0() {
  return document.getElementById(Pm);
}
function Hu(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function $u(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : Rm, Object.assign(n.style, {
    ...Mm,
    ...Hu(e.bounds),
    ...e.style
  });
  const s = document.createElement("span");
  s.id = Im, Object.assign(s.style, {
    ...S0,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const o = document.createElement("span");
  o.id = Pm, o.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const r = document.createElement("i");
  return r.id = Vm, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(r.style, O0), s.appendChild(o), s.appendChild(r), n.appendChild(s), document.body.appendChild(n), n;
}
function Wu(e) {
  const t = Lo(), n = C0(), s = N0(), o = T0();
  t && (Object.assign(t.style, {
    ...Mm,
    ...Hu(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), s.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function D0(e) {
  const t = zs(e);
  if (!t.width && !t.height)
    return;
  const n = Aa(e);
  Lo() ? Wu({ bounds: t, name: n }) : $u({ bounds: t, name: n });
}
function Lm() {
  const e = Lo();
  e && (e.style.display = "none");
}
var Kl = null;
function zl(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (Kl = n, n.vnode.el)) {
      const o = zs(n), r = Aa(n);
      Lo() ? Wu({ bounds: o, name: r }) : $u({ bounds: o, name: r });
    }
  }
}
function k0(e, t) {
  if (e.preventDefault(), e.stopPropagation(), Kl) {
    const n = _0(Kl);
    t(n);
  }
}
var Zi = null;
function x0() {
  Lm(), window.removeEventListener("mouseover", zl), window.removeEventListener("click", Zi, !0), Zi = null;
}
function R0() {
  return window.addEventListener("mouseover", zl), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), k0(n, (s) => {
        window.removeEventListener("click", t, !0), Zi = null, window.removeEventListener("mouseover", zl);
        const o = Lo();
        o && (o.style.display = "none"), e(JSON.stringify({ id: s }));
      });
    }
    Zi = t, window.addEventListener("click", t, !0);
  });
}
function I0(e) {
  const t = Wl(wt.value, e.id);
  if (t) {
    const [n] = Uu(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const s = zs(t), o = document.createElement("div"), r = {
        ...Hu(s),
        position: "absolute"
      };
      Object.assign(o.style, r), document.body.appendChild(o), o.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(o);
      }, 2e3);
    }
    setTimeout(() => {
      const s = zs(t);
      if (s.width || s.height) {
        const o = Aa(t), r = Lo();
        r ? Wu({ ...e, name: o, bounds: s }) : $u({ ...e, name: o, bounds: s }), setTimeout(() => {
          r && (r.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
q();
var Sd, Od;
(Od = (Sd = ce).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (Sd.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function P0(e) {
  let t = 0;
  const n = setInterval(() => {
    ce.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function V0() {
  const e = ce.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function M0() {
  return new Promise((e) => {
    function t() {
      V0(), e(ce.__VUE_INSPECTOR__);
    }
    ce.__VUE_INSPECTOR__ ? t() : P0(() => {
      t();
    });
  });
}
q();
q();
function L0(e) {
  return !!(e && e.__v_isReadonly);
}
function Fm(e) {
  return L0(e) ? Fm(e.__v_raw) : !!(e && e.__v_isReactive);
}
function el(e) {
  return !!(e && e.__v_isRef === !0);
}
function sr(e) {
  const t = e && e.__v_raw;
  return t ? sr(t) : e;
}
var F0 = class {
  constructor() {
    this.refEditor = new B0();
  }
  set(e, t, n, s) {
    const o = Array.isArray(t) ? t : t.split(".");
    for (; o.length > 1; ) {
      const a = o.shift();
      e instanceof Map ? e = e.get(a) : e instanceof Set ? e = Array.from(e.values())[a] : e = e[a], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    const r = o[0], i = this.refEditor.get(e)[r];
    s ? s(e, r, n) : this.refEditor.isRef(i) ? this.refEditor.set(i, n) : e[r] = n;
  }
  get(e, t) {
    const n = Array.isArray(t) ? t : t.split(".");
    for (let s = 0; s < n.length; s++)
      if (e instanceof Map ? e = e.get(n[s]) : e = e[n[s]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e)
        return;
    return e;
  }
  has(e, t, n = !1) {
    if (typeof e > "u")
      return !1;
    const s = Array.isArray(t) ? t.slice() : t.split("."), o = n ? 2 : 1;
    for (; e && s.length > o; ) {
      const r = s.shift();
      e = e[r], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    return e != null && Object.prototype.hasOwnProperty.call(e, s[0]);
  }
  createDefaultSetCallback(e) {
    return (t, n, s) => {
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : sr(t) instanceof Map ? t.delete(n) : sr(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const o = t[e.newKey || n];
        this.refEditor.isRef(o) ? this.refEditor.set(o, s) : sr(t) instanceof Map ? t.set(e.newKey || n, s) : sr(t) instanceof Set ? t.add(s) : t[e.newKey || n] = s;
      }
    };
  }
}, B0 = class {
  set(e, t) {
    if (el(e))
      e.value = t;
    else {
      if (e instanceof Set && Array.isArray(t)) {
        e.clear(), t.forEach((o) => e.add(o));
        return;
      }
      const n = Object.keys(t);
      if (e instanceof Map) {
        const o = new Set(e.keys());
        n.forEach((r) => {
          e.set(r, Reflect.get(t, r)), o.delete(r);
        }), o.forEach((r) => e.delete(r));
        return;
      }
      const s = new Set(Object.keys(e));
      n.forEach((o) => {
        Reflect.set(e, o, Reflect.get(t, o)), s.delete(o);
      }), s.forEach((o) => Reflect.deleteProperty(e, o));
    }
  }
  get(e) {
    return el(e) ? e.value : e;
  }
  isRef(e) {
    return el(e) || Fm(e);
  }
};
q();
q();
q();
var j0 = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function U0() {
  if (!Cm || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem(j0);
  return e ? JSON.parse(e) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
q();
q();
q();
var Cd, Td;
(Td = (Cd = ce).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Cd.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var H0 = new Proxy(ce.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function $0(e, t) {
  dt.timelineLayersState[t.id] = !1, H0.push({
    ...e,
    descriptorId: t.id,
    appRecord: ju(t.app)
  });
}
var Nd, Dd;
(Dd = (Nd = ce).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Nd.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Ku = new Proxy(ce.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), Bm = So(() => {
  Fo.hooks.callHook("sendInspectorToClient", jm());
});
function W0(e, t) {
  var n, s;
  Ku.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (s = e.stateFilterPlaceholder) != null ? s : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: ju(t.app)
  }), Bm();
}
function jm() {
  return Ku.filter((e) => e.descriptor.app === wt.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
    var t;
    const n = e.descriptor, s = e.options;
    return {
      id: s.id,
      label: s.label,
      logo: n.logo,
      icon: `custom-ic-baseline-${(t = s?.icon) == null ? void 0 : t.replace(/_/g, "-")}`,
      packageName: n.packageName,
      homepage: n.homepage,
      pluginId: n.id
    };
  });
}
function Ci(e, t) {
  return Ku.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function K0() {
  const e = Nm();
  e.hook("addInspector", ({ inspector: s, plugin: o }) => {
    W0(s, o.descriptor);
  });
  const t = So(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || dt.highPerfModeEnabled)
      return;
    const i = Ci(s, o.descriptor.app), a = {
      app: o.descriptor.app,
      inspectorId: s,
      filter: i?.treeFilter || "",
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
          inspectorId: s,
          rootNodes: a.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  e.hook("sendInspectorTree", t);
  const n = So(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || dt.highPerfModeEnabled)
      return;
    const i = Ci(s, o.descriptor.app), a = {
      app: o.descriptor.app,
      inspectorId: s,
      nodeId: i?.selectedNodeId || "",
      state: null
    }, l = {
      currentTab: `custom-inspector:${s}`
    };
    a.nodeId && await new Promise((f) => {
      e.callHookWith(
        async (u) => {
          await Promise.all(u.map((d) => d(a, l))), f();
        },
        "getInspectorState"
        /* GET_INSPECTOR_STATE */
      );
    }), e.callHookWith(
      async (f) => {
        await Promise.all(f.map((u) => u({
          inspectorId: s,
          nodeId: a.nodeId,
          state: a.state
        })));
      },
      "sendInspectorStateToClient"
      /* SEND_INSPECTOR_STATE_TO_CLIENT */
    );
  }, 120);
  return e.hook("sendInspectorState", n), e.hook("customInspectorSelectNode", ({ inspectorId: s, nodeId: o, plugin: r }) => {
    const i = Ci(s, r.descriptor.app);
    i && (i.selectedNodeId = o);
  }), e.hook("timelineLayerAdded", ({ options: s, plugin: o }) => {
    $0(s, o.descriptor);
  }), e.hook("timelineEventAdded", ({ options: s, plugin: o }) => {
    var r;
    const i = ["performance", "component-event", "keyboard", "mouse"];
    dt.highPerfModeEnabled || !((r = dt.timelineLayersState) != null && r[o.descriptor.id]) && !i.includes(s.layerId) || e.callHookWith(
      async (a) => {
        await Promise.all(a.map((l) => l(s)));
      },
      "sendTimelineEventToClient"
      /* SEND_TIMELINE_EVENT_TO_CLIENT */
    );
  }), e.hook("getComponentInstances", async ({ app: s }) => {
    const o = s.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!o)
      return null;
    const r = o.id.toString();
    return [...o.instanceMap].filter(([a]) => a.split(":")[0] === r).map(([, a]) => a);
  }), e.hook("getComponentBounds", async ({ instance: s }) => zs(s)), e.hook("getComponentName", ({ instance: s }) => Aa(s)), e.hook("componentHighlight", ({ uid: s }) => {
    const o = wt.value.instanceMap.get(s);
    o && D0(o);
  }), e.hook("componentUnhighlight", () => {
    Lm();
  }), e;
}
var kd, xd;
(xd = (kd = ce).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (kd.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Rd, Id;
(Id = (Rd = ce).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Rd.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var Pd, Vd;
(Vd = (Pd = ce).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (Pd.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Md, Ld;
(Ld = (Md = ce).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Md.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var Fd, Bd;
(Bd = (Fd = ce).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (Fd.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var ks = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function z0() {
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
    timelineLayersState: U0()
  };
}
var jd, Ud;
(Ud = (jd = ce)[ks]) != null || (jd[ks] = z0());
var q0 = So((e) => {
  Fo.hooks.callHook("devtoolsStateUpdated", { state: e });
});
So((e, t) => {
  Fo.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var Sa = new Proxy(ce.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? ce.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : ce.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), wt = new Proxy(ce.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? ce.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? ce.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : ce.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function Um() {
  q0({
    ...ce[ks],
    appRecords: Sa.value,
    activeAppRecordId: wt.id,
    tabs: ce.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: ce.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function Y0(e) {
  ce.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Um();
}
function X0(e) {
  ce.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Um();
}
var dt = new Proxy(ce[ks], {
  get(e, t) {
    return t === "appRecords" ? Sa : t === "activeAppRecordId" ? wt.id : t === "tabs" ? ce.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? ce.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : ce[ks][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...ce[ks] }, e[t] = n, ce[ks][t] = n, !0;
  }
});
function G0(e = {}) {
  var t, n, s;
  const { file: o, host: r, baseUrl: i = window.location.origin, line: a = 0, column: l = 0 } = e;
  if (o) {
    if (r === "chrome-extension") {
      const f = o.replace(/\\/g, "\\\\"), u = (n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? n : "/";
      fetch(`${u}__open-in-editor?file=${encodeURI(o)}`).then((d) => {
        if (!d.ok) {
          const h = `Opening component ${f} failed`;
          console.log(`%c${h}`, "color:red");
        }
      });
    } else if (dt.vitePluginDetected) {
      const f = (s = ce.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? s : i;
      ce.__VUE_INSPECTOR__.openInEditor(f, o, a, l);
    }
  }
}
q();
q();
q();
q();
q();
var Hd, $d;
($d = (Hd = ce).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (Hd.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var zu = new Proxy(ce.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function ql(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function qu(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function J0(e) {
  var t, n, s;
  const o = (n = (t = zu.find((r) => {
    var i;
    return r[0].id === e && !!((i = r[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (s = o?.settings) != null ? s : null;
}
function Hm(e, t) {
  var n, s, o;
  const r = qu(e);
  if (r) {
    const i = localStorage.getItem(r);
    if (i)
      return JSON.parse(i);
  }
  if (e) {
    const i = (s = (n = zu.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? s : null;
    return ql((o = i?.settings) != null ? o : {});
  }
  return ql(t);
}
function Q0(e, t) {
  const n = qu(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(ql(t)));
}
function Z0(e, t, n) {
  const s = qu(e), o = localStorage.getItem(s), r = JSON.parse(o || "{}"), i = {
    ...r,
    [t]: n
  };
  localStorage.setItem(s, JSON.stringify(i)), Fo.hooks.callHookWith(
    (a) => {
      a.forEach((l) => l({
        pluginId: e,
        key: t,
        oldValue: r[t],
        newValue: n,
        settings: i
      }));
    },
    "setPluginSettings"
    /* SET_PLUGIN_SETTINGS */
  );
}
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
var Wd, Kd, Vt = (Kd = (Wd = ce).__VUE_DEVTOOLS_HOOK) != null ? Kd : Wd.__VUE_DEVTOOLS_HOOK = Nm(), e1 = {
  vueAppInit(e) {
    Vt.hook("app:init", e);
  },
  vueAppUnmount(e) {
    Vt.hook("app:unmount", e);
  },
  vueAppConnected(e) {
    Vt.hook("app:connected", e);
  },
  componentAdded(e) {
    return Vt.hook("component:added", e);
  },
  componentEmit(e) {
    return Vt.hook("component:emit", e);
  },
  componentUpdated(e) {
    return Vt.hook("component:updated", e);
  },
  componentRemoved(e) {
    return Vt.hook("component:removed", e);
  },
  setupDevtoolsPlugin(e) {
    Vt.hook("devtools-plugin:setup", e);
  },
  perfStart(e) {
    return Vt.hook("perf:start", e);
  },
  perfEnd(e) {
    return Vt.hook("perf:end", e);
  }
}, $m = {
  on: e1,
  setupDevToolsPlugin(e, t) {
    return Vt.callHook("devtools-plugin:setup", e, t);
  }
}, t1 = class {
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
    if (dt.highPerfModeEnabled)
      return;
    const n = jm().find((s) => s.packageName === this.plugin.descriptor.packageName);
    if (n?.id) {
      if (e) {
        const s = [
          e.appContext.app,
          e.uid,
          (t = e.parent) == null ? void 0 : t.uid,
          e
        ];
        Vt.callHook("component:updated", ...s);
      } else
        Vt.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: n.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(e) {
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && Q0(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    dt.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    dt.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return dt.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    dt.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
  }
  // settings
  getSettings(e) {
    return Hm(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
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
}, n1 = t1;
q();
q();
q();
q();
var s1 = "__vue_devtool_undefined__", o1 = "__vue_devtool_infinity__", r1 = "__vue_devtool_negative_infinity__", i1 = "__vue_devtool_nan__";
q();
q();
var a1 = {
  [s1]: "undefined",
  [i1]: "NaN",
  [o1]: "Infinity",
  [r1]: "-Infinity"
};
Object.entries(a1).reduce((e, [t, n]) => (e[n] = t, e), {});
q();
q();
q();
q();
q();
var zd, qd;
(qd = (zd = ce).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (zd.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function Wm(e, t) {
  return $m.setupDevToolsPlugin(e, t);
}
function l1(e, t) {
  const [n, s] = e;
  if (n.app !== t)
    return;
  const o = new n1({
    plugin: {
      setupFn: s,
      descriptor: n
    },
    ctx: Fo
  });
  n.packageName === "vuex" && o.on.editInspectorState((r) => {
    o.sendInspectorState(r.inspectorId);
  }), s(o);
}
function Km(e, t) {
  ce.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || dt.highPerfModeEnabled && !t?.inspectingComponent || (ce.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), zu.forEach((n) => {
    l1(n, e);
  }));
}
q();
q();
var Nr = "__VUE_DEVTOOLS_ROUTER__", Oo = "__VUE_DEVTOOLS_ROUTER_INFO__", Yd, Xd;
(Xd = (Yd = ce)[Oo]) != null || (Yd[Oo] = {
  currentRoute: null,
  routes: []
});
var Gd, Jd;
(Jd = (Gd = ce)[Nr]) != null || (Gd[Nr] = {});
new Proxy(ce[Oo], {
  get(e, t) {
    return ce[Oo][t];
  }
});
new Proxy(ce[Nr], {
  get(e, t) {
    if (t === "value")
      return ce[Nr];
  }
});
function u1(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Yu(e) {
  return e.map((t) => {
    let { path: n, name: s, children: o, meta: r } = t;
    return o?.length && (o = Yu(o)), {
      path: n,
      name: s,
      children: o,
      meta: r
    };
  });
}
function c1(e) {
  if (e) {
    const { fullPath: t, hash: n, href: s, path: o, name: r, matched: i, params: a, query: l } = e;
    return {
      fullPath: t,
      hash: n,
      href: s,
      path: o,
      name: r,
      params: a,
      query: l,
      matched: Yu(i)
    };
  }
  return e;
}
function d1(e, t) {
  function n() {
    var s;
    const o = (s = e.app) == null ? void 0 : s.config.globalProperties.$router, r = c1(o?.currentRoute.value), i = Yu(u1(o)), a = console.warn;
    console.warn = () => {
    }, ce[Oo] = {
      currentRoute: r ? bd(r) : {},
      routes: bd(i)
    }, ce[Nr] = o, console.warn = a;
  }
  n(), $m.on.componentUpdated(So(() => {
    var s;
    ((s = t.value) == null ? void 0 : s.app) === e.app && (n(), !dt.highPerfModeEnabled && Fo.hooks.callHook("routerInfoUpdated", { state: ce[Oo] }));
  }, 200));
}
function f1(e) {
  return {
    // get inspector tree
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: wt.value.app,
        rootNodes: []
      };
      return await new Promise((s) => {
        e.callHookWith(
          async (o) => {
            await Promise.all(o.map((r) => r(n))), s();
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
        app: wt.value.app,
        state: null
      }, s = {
        currentTab: `custom-inspector:${t.inspectorId}`
      };
      return await new Promise((o) => {
        e.callHookWith(
          async (r) => {
            await Promise.all(r.map((i) => i(n, s))), o();
          },
          "getInspectorState"
          /* GET_INSPECTOR_STATE */
        );
      }), n.state;
    },
    // edit inspector state
    editInspectorState(t) {
      const n = new F0(), s = {
        ...t,
        app: wt.value.app,
        set: (o, r = t.path, i = t.state.value, a) => {
          n.set(o, r, i, a || n.createDefaultSetCallback(t.state));
        }
      };
      e.callHookWith(
        (o) => {
          o.forEach((r) => r(s));
        },
        "editInspectorState"
        /* EDIT_INSPECTOR_STATE */
      );
    },
    // send inspector state
    sendInspectorState(t) {
      const n = Ci(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return R0();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return x0();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = Wl(wt.value, t);
      if (n)
        return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return I0({ id: t });
    },
    // open in editor
    openInEditor: G0,
    // get vue inspector
    getVueInspector: M0,
    // toggle app
    toggleApp(t, n) {
      const s = Sa.value.find((o) => o.id === t);
      s && (X0(t), Y0(s), d1(s, wt), Bm(), Km(s.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = Wl(wt.value, t);
      if (n) {
        const [s] = Uu(n);
        s && (ce.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = s);
      }
    },
    updatePluginSettings(t, n, s) {
      Z0(t, n, s);
    },
    getPluginSettings(t) {
      return {
        options: J0(t),
        values: Hm(t)
      };
    }
  };
}
q();
var Qd, Zd;
(Zd = (Qd = ce).__VUE_DEVTOOLS_ENV__) != null || (Qd.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var ef = K0(), tf, nf;
(nf = (tf = ce).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (tf.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: ef,
  get state() {
    return {
      ...dt,
      activeAppRecordId: wt.id,
      activeAppRecord: wt.value,
      appRecords: Sa.value
    };
  },
  api: f1(ef)
});
var Fo = ce.__VUE_DEVTOOLS_KIT_CONTEXT__;
q();
p0(m0());
var sf, of;
(of = (sf = ce).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (sf.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
q();
q();
function p1(e) {
  dt.highPerfModeEnabled = e ?? !dt.highPerfModeEnabled, !e && wt.value && Km(wt.value.app);
}
q();
q();
q();
function h1(e) {
  dt.devtoolsClientDetected = {
    ...dt.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(dt.devtoolsClientDetected).some(Boolean);
  p1(!t);
}
var rf, af;
(af = (rf = ce).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (rf.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = h1);
q();
q();
q();
q();
q();
q();
q();
var m1 = class {
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
}, zm = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new m1();
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
}, g1 = class extends zm {
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
q();
q();
function v1(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function _1(e, t) {
  const n = v1(e);
  if ("find" in n)
    return n.find(t);
  const s = n;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t(r))
      return r;
  }
}
function Co(e, t) {
  Object.entries(e).forEach(([n, s]) => t(s, n));
}
function Ti(e, t) {
  return e.indexOf(t) !== -1;
}
function lf(e, t) {
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (t(s))
      return s;
  }
}
var y1 = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return _1(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
q();
q();
var E1 = (e) => Object.prototype.toString.call(e).slice(8, -1), qm = (e) => typeof e > "u", b1 = (e) => e === null, Dr = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Yl = (e) => Dr(e) && Object.keys(e).length === 0, ds = (e) => Array.isArray(e), w1 = (e) => typeof e == "string", A1 = (e) => typeof e == "number" && !isNaN(e), S1 = (e) => typeof e == "boolean", O1 = (e) => e instanceof RegExp, kr = (e) => e instanceof Map, xr = (e) => e instanceof Set, Ym = (e) => E1(e) === "Symbol", C1 = (e) => e instanceof Date && !isNaN(e.valueOf()), T1 = (e) => e instanceof Error, uf = (e) => typeof e == "number" && isNaN(e), N1 = (e) => S1(e) || b1(e) || qm(e) || A1(e) || w1(e) || Ym(e), D1 = (e) => typeof e == "bigint", k1 = (e) => e === 1 / 0 || e === -1 / 0, x1 = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), R1 = (e) => e instanceof URL;
q();
var Xm = (e) => e.replace(/\./g, "\\."), tl = (e) => e.map(String).map(Xm).join("."), pr = (e) => {
  const t = [];
  let n = "";
  for (let o = 0; o < e.length; o++) {
    let r = e.charAt(o);
    if (r === "\\" && e.charAt(o + 1) === ".") {
      n += ".", o++;
      continue;
    }
    if (r === ".") {
      t.push(n), n = "";
      continue;
    }
    n += r;
  }
  const s = n;
  return t.push(s), t;
};
q();
function En(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Gm = [
  En(qm, "undefined", () => null, () => {
  }),
  En(D1, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  En(C1, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  En(T1, "Error", (e, t) => {
    const n = {
      name: e.name,
      message: e.message
    };
    return t.allowedErrorProps.forEach((s) => {
      n[s] = e[s];
    }), n;
  }, (e, t) => {
    const n = new Error(e.message);
    return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((s) => {
      n[s] = e[s];
    }), n;
  }),
  En(O1, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  En(
    xr,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  En(kr, "map", (e) => [...e.entries()], (e) => new Map(e)),
  En((e) => uf(e) || k1(e), "number", (e) => uf(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  En((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  En(R1, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Oa(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Jm = Oa((e, t) => Ym(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const s = n.symbolRegistry.getValue(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown symbol");
  return s;
}), I1 = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Qm = Oa(x1, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = I1[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function Zm(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var eg = Oa(Zm, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
  const n = t.classRegistry.getAllowedProps(e.constructor);
  if (!n)
    return { ...e };
  const s = {};
  return n.forEach((o) => {
    s[o] = e[o];
  }), s;
}, (e, t, n) => {
  const s = n.classRegistry.getValue(t[1]);
  if (!s)
    throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
  return Object.assign(Object.create(s.prototype), e);
}), tg = Oa((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const s = n.customTransformerRegistry.findByName(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown custom value");
  return s.deserialize(e);
}), P1 = [eg, Jm, tg, Qm], cf = (e, t) => {
  const n = lf(P1, (o) => o.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const s = lf(Gm, (o) => o.isApplicable(e, t));
  if (s)
    return {
      value: s.transform(e, t),
      type: s.annotation
    };
}, ng = {};
Gm.forEach((e) => {
  ng[e.annotation] = e;
});
var V1 = (e, t, n) => {
  if (ds(t))
    switch (t[0]) {
      case "symbol":
        return Jm.untransform(e, t, n);
      case "class":
        return eg.untransform(e, t, n);
      case "custom":
        return tg.untransform(e, t, n);
      case "typed-array":
        return Qm.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const s = ng[t];
    if (!s)
      throw new Error("Unknown transformation: " + t);
    return s.untransform(e, n);
  }
};
q();
var mo = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function sg(e) {
  if (Ti(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Ti(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Ti(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var M1 = (e, t) => {
  sg(t);
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (xr(e))
      e = mo(e, +s);
    else if (kr(e)) {
      const o = +s, r = +t[++n] == 0 ? "key" : "value", i = mo(e, o);
      switch (r) {
        case "key":
          e = i;
          break;
        case "value":
          e = e.get(i);
          break;
      }
    } else
      e = e[s];
  }
  return e;
}, Xl = (e, t, n) => {
  if (sg(t), t.length === 0)
    return n(e);
  let s = e;
  for (let r = 0; r < t.length - 1; r++) {
    const i = t[r];
    if (ds(s)) {
      const a = +i;
      s = s[a];
    } else if (Dr(s))
      s = s[i];
    else if (xr(s)) {
      const a = +i;
      s = mo(s, a);
    } else if (kr(s)) {
      if (r === t.length - 2)
        break;
      const l = +i, f = +t[++r] == 0 ? "key" : "value", u = mo(s, l);
      switch (f) {
        case "key":
          s = u;
          break;
        case "value":
          s = s.get(u);
          break;
      }
    }
  }
  const o = t[t.length - 1];
  if (ds(s) ? s[+o] = n(s[+o]) : Dr(s) && (s[o] = n(s[o])), xr(s)) {
    const r = mo(s, +o), i = n(r);
    r !== i && (s.delete(r), s.add(i));
  }
  if (kr(s)) {
    const r = +t[t.length - 2], i = mo(s, r);
    switch (+o == 0 ? "key" : "value") {
      case "key": {
        const l = n(i);
        s.set(l, s.get(i)), l !== i && s.delete(i);
        break;
      }
      case "value": {
        s.set(i, n(s.get(i)));
        break;
      }
    }
  }
  return e;
};
function Gl(e, t, n = []) {
  if (!e)
    return;
  if (!ds(e)) {
    Co(e, (r, i) => Gl(r, t, [...n, ...pr(i)]));
    return;
  }
  const [s, o] = e;
  o && Co(o, (r, i) => {
    Gl(r, t, [...n, ...pr(i)]);
  }), t(s, n);
}
function L1(e, t, n) {
  return Gl(t, (s, o) => {
    e = Xl(e, o, (r) => V1(r, s, n));
  }), e;
}
function F1(e, t) {
  function n(s, o) {
    const r = M1(e, pr(o));
    s.map(pr).forEach((i) => {
      e = Xl(e, i, () => r);
    });
  }
  if (ds(t)) {
    const [s, o] = t;
    s.forEach((r) => {
      e = Xl(e, pr(r), () => e);
    }), o && Co(o, n);
  } else
    Co(t, n);
  return e;
}
var B1 = (e, t) => Dr(e) || ds(e) || kr(e) || xr(e) || Zm(e, t);
function j1(e, t, n) {
  const s = n.get(e);
  s ? s.push(t) : n.set(e, [t]);
}
function U1(e, t) {
  const n = {};
  let s;
  return e.forEach((o) => {
    if (o.length <= 1)
      return;
    t || (o = o.map((a) => a.map(String)).sort((a, l) => a.length - l.length));
    const [r, ...i] = o;
    r.length === 0 ? s = i.map(tl) : n[tl(r)] = i.map(tl);
  }), s ? Yl(n) ? [s] : [s, n] : Yl(n) ? void 0 : n;
}
var og = (e, t, n, s, o = [], r = [], i = /* @__PURE__ */ new Map()) => {
  var a;
  const l = N1(e);
  if (!l) {
    j1(e, o, t);
    const g = i.get(e);
    if (g)
      return s ? {
        transformedValue: null
      } : g;
  }
  if (!B1(e, n)) {
    const g = cf(e, n), m = g ? {
      transformedValue: g.value,
      annotations: [g.type]
    } : {
      transformedValue: e
    };
    return l || i.set(e, m), m;
  }
  if (Ti(r, e))
    return {
      transformedValue: null
    };
  const f = cf(e, n), u = (a = f?.value) != null ? a : e, d = ds(u) ? [] : {}, h = {};
  Co(u, (g, m) => {
    if (m === "__proto__" || m === "constructor" || m === "prototype")
      throw new Error(`Detected property ${m}. This is a prototype pollution risk, please remove it from your object.`);
    const _ = og(g, t, n, s, [...o, m], [...r, e], i);
    d[m] = _.transformedValue, ds(_.annotations) ? h[m] = _.annotations : Dr(_.annotations) && Co(_.annotations, (y, b) => {
      h[Xm(m) + "." + b] = y;
    });
  });
  const p = Yl(h) ? {
    transformedValue: d,
    annotations: f ? [f.type] : void 0
  } : {
    transformedValue: d,
    annotations: f ? [f.type, h] : h
  };
  return l || i.set(e, p), p;
};
q();
q();
function rg(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function df(e) {
  return rg(e) === "Array";
}
function H1(e) {
  if (rg(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function $1(e, t, n, s, o) {
  const r = {}.propertyIsEnumerable.call(s, t) ? "enumerable" : "nonenumerable";
  r === "enumerable" && (e[t] = n), o && r === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Jl(e, t = {}) {
  if (df(e))
    return e.map((o) => Jl(o, t));
  if (!H1(e))
    return e;
  const n = Object.getOwnPropertyNames(e), s = Object.getOwnPropertySymbols(e);
  return [...n, ...s].reduce((o, r) => {
    if (df(t.props) && !t.props.includes(r))
      return o;
    const i = e[r], a = Jl(i, t);
    return $1(o, r, a, e, t.nonenumerable), o;
  }, {});
}
var Xe = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new g1(), this.symbolRegistry = new zm((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new y1(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = og(e, t, this, this.dedupe), s = {
      json: n.transformedValue
    };
    n.annotations && (s.meta = {
      ...s.meta,
      values: n.annotations
    });
    const o = U1(t, this.dedupe);
    return o && (s.meta = {
      ...s.meta,
      referentialEqualities: o
    }), s;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let s = Jl(t);
    return n?.values && (s = L1(s, n.values, this)), n?.referentialEqualities && (s = F1(s, n.referentialEqualities)), s;
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
Xe.defaultInstance = new Xe();
Xe.serialize = Xe.defaultInstance.serialize.bind(Xe.defaultInstance);
Xe.deserialize = Xe.defaultInstance.deserialize.bind(Xe.defaultInstance);
Xe.stringify = Xe.defaultInstance.stringify.bind(Xe.defaultInstance);
Xe.parse = Xe.defaultInstance.parse.bind(Xe.defaultInstance);
Xe.registerClass = Xe.defaultInstance.registerClass.bind(Xe.defaultInstance);
Xe.registerSymbol = Xe.defaultInstance.registerSymbol.bind(Xe.defaultInstance);
Xe.registerCustom = Xe.defaultInstance.registerCustom.bind(Xe.defaultInstance);
Xe.allowErrorProps = Xe.defaultInstance.allowErrorProps.bind(Xe.defaultInstance);
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
q();
var ff, pf;
(pf = (ff = ce).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (ff.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var hf, mf;
(mf = (hf = ce).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (hf.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var gf, vf;
(vf = (gf = ce).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (gf.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var _f, yf;
(yf = (_f = ce).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (_f.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var Ef, bf;
(bf = (Ef = ce).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (Ef.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var wf, Af;
(Af = (wf = ce).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (wf.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
q();
q();
q();
q();
q();
q();
q();
var Le = {};
let or;
const Rr = (e) => or = e, ig = Le.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function qs(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Tn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Tn || (Tn = {}));
const ls = typeof window < "u", Sf = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function W1(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Xu(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    ug(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function ag(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Ni(e) {
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
const Di = typeof navigator == "object" ? navigator : { userAgent: "" }, lg = /Macintosh/.test(Di.userAgent) && /AppleWebKit/.test(Di.userAgent) && !/Safari/.test(Di.userAgent), ug = ls ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !lg ? K1 : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Di ? z1 : (
      // Fallback to using FileReader and a popup
      q1
    )
  )
) : () => {
};
function K1(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? ag(s.href) ? Xu(e, t, n) : (s.target = "_blank", Ni(s)) : Ni(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    Ni(s);
  }, 0));
}
function z1(e, t = "download", n) {
  if (typeof e == "string")
    if (ag(e))
      Xu(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        Ni(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(W1(e, n), t);
}
function q1(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return Xu(e, t, n);
  const o = e.type === "application/octet-stream", r = /constructor/i.test(String(Sf.HTMLElement)) || "safari" in Sf, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || o && r || lg) && typeof FileReader < "u") {
    const a = new FileReader();
    a.onloadend = function() {
      let l = a.result;
      if (typeof l != "string")
        throw s = null, new Error("Wrong reader.result type");
      l = i ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), s ? s.location.href = l : location.assign(l), s = null;
    }, a.readAsDataURL(e);
  } else {
    const a = URL.createObjectURL(e);
    s ? s.location.assign(a) : location.href = a, s = null, setTimeout(function() {
      URL.revokeObjectURL(a);
    }, 4e4);
  }
}
function ft(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Gu(e) {
  return "_a" in e && "install" in e;
}
function cg() {
  if (!("clipboard" in navigator))
    return ft("Your browser doesn't support the Clipboard API", "error"), !0;
}
function dg(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (ft('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Y1(e) {
  if (!cg())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), ft("Global state copied to clipboard.");
    } catch (t) {
      if (dg(t))
        return;
      ft("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function X1(e) {
  if (!cg())
    try {
      fg(e, JSON.parse(await navigator.clipboard.readText())), ft("Global state pasted from clipboard.");
    } catch (t) {
      if (dg(t))
        return;
      ft("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function G1(e) {
  try {
    ug(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    ft("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Fn;
function J1() {
  Fn || (Fn = document.createElement("input"), Fn.type = "file", Fn.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Fn.onchange = async () => {
        const s = Fn.files;
        if (!s)
          return t(null);
        const o = s.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }, Fn.oncancel = () => t(null), Fn.onerror = n, Fn.click();
    });
  }
  return e;
}
async function Q1(e) {
  try {
    const n = await J1()();
    if (!n)
      return;
    const { text: s, file: o } = n;
    fg(e, JSON.parse(s)), ft(`Global state imported from "${o.name}".`);
  } catch (t) {
    ft("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function fg(e, t) {
  for (const n in t) {
    const s = e.state.value[n];
    s ? Object.assign(s, t[n]) : e.state.value[n] = t[n];
  }
}
function en(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const pg = "🍍 Pinia (root)", ki = "_root";
function Z1(e) {
  return Gu(e) ? {
    id: ki,
    label: pg
  } : {
    id: e.$id,
    label: e.$id
  };
}
function ew(e) {
  if (Gu(e)) {
    const n = Array.from(e._s.keys()), s = e._s;
    return {
      state: n.map((r) => ({
        editable: !0,
        key: r,
        value: e.state.value[r]
      })),
      getters: n.filter((r) => s.get(r)._getters).map((r) => {
        const i = s.get(r);
        return {
          editable: !1,
          key: r,
          value: i._getters.reduce((a, l) => (a[l] = i[l], a), {})
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
function tw(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: en(e.type),
    key: en(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function nw(e) {
  switch (e) {
    case Tn.direct:
      return "mutation";
    case Tn.patchFunction:
      return "$patch";
    case Tn.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let go = !0;
const xi = [], Ts = "pinia:mutations", mt = "pinia", { assign: sw } = Object, ea = (e) => "🍍 " + e;
function ow(e, t) {
  Wm({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: xi,
    app: e
  }, (n) => {
    typeof n.now != "function" && ft("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Ts,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: mt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Y1(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await X1(t), n.sendInspectorTree(mt), n.sendInspectorState(mt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            G1(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Q1(t), n.sendInspectorTree(mt), n.sendInspectorState(mt);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (s) => {
            const o = t._s.get(s);
            o ? typeof o.$reset != "function" ? ft(`Cannot reset "${s}" store because it doesn't have a "$reset" method implemented.`, "warn") : (o.$reset(), ft(`Store "${s}" reset.`)) : ft(`Cannot reset "${s}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((s) => {
      const o = s.componentInstance && s.componentInstance.proxy;
      if (o && o._pStores) {
        const r = s.componentInstance.proxy._pStores;
        Object.values(r).forEach((i) => {
          s.instanceData.state.push({
            type: ea(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: Se(i.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => i.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(i.$state).reduce((a, l) => (a[l] = i.$state[l], a), {})
            )
          }), i._getters && i._getters.length && s.instanceData.state.push({
            type: ea(i.$id),
            key: "getters",
            editable: !1,
            value: i._getters.reduce((a, l) => {
              try {
                a[l] = i[l];
              } catch (f) {
                a[l] = f;
              }
              return a;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((s) => {
      if (s.app === e && s.inspectorId === mt) {
        let o = [t];
        o = o.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? o.filter((r) => "$id" in r ? r.$id.toLowerCase().includes(s.filter.toLowerCase()) : pg.toLowerCase().includes(s.filter.toLowerCase())) : o).map(Z1);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === mt) {
        const o = s.nodeId === ki ? t : t._s.get(s.nodeId);
        if (!o)
          return;
        o && (s.nodeId !== ki && (globalThis.$store = Se(o)), s.state = ew(o));
      }
    }), n.on.editInspectorState((s) => {
      if (s.app === e && s.inspectorId === mt) {
        const o = s.nodeId === ki ? t : t._s.get(s.nodeId);
        if (!o)
          return ft(`store "${s.nodeId}" not found`, "error");
        const { path: r } = s;
        Gu(o) ? r.unshift("state") : (r.length !== 1 || !o._customProperties.has(r[0]) || r[0] in o.$state) && r.unshift("$state"), go = !1, s.set(o, r, s.state.value), go = !0;
      }
    }), n.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const o = s.type.replace(/^🍍\s*/, ""), r = t._s.get(o);
        if (!r)
          return ft(`store "${o}" not found`, "error");
        const { path: i } = s;
        if (i[0] !== "state")
          return ft(`Invalid path for store "${o}":
${i}
Only state can be modified.`);
        i[0] = "$state", go = !1, s.set(r, i, s.state.value), go = !0;
      }
    });
  });
}
function rw(e, t) {
  xi.includes(ea(t.$id)) || xi.push(ea(t.$id)), Wm({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: xi,
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
    const s = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: i, onError: a, name: l, args: f }) => {
      const u = hg++;
      n.addTimelineEvent({
        layerId: Ts,
        event: {
          time: s(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: en(t.$id),
            action: en(l),
            args: f
          },
          groupId: u
        }
      }), i((d) => {
        us = void 0, n.addTimelineEvent({
          layerId: Ts,
          event: {
            time: s(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: en(t.$id),
              action: en(l),
              args: f,
              result: d
            },
            groupId: u
          }
        });
      }), a((d) => {
        us = void 0, n.addTimelineEvent({
          layerId: Ts,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: en(t.$id),
              action: en(l),
              args: f,
              error: d
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((i) => {
      Ot(() => H(t[i]), (a, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(mt), go && n.addTimelineEvent({
          layerId: Ts,
          event: {
            time: s(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: a,
              oldValue: l
            },
            groupId: us
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: i, type: a }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(mt), !go)
        return;
      const f = {
        time: s(),
        title: nw(a),
        data: sw({ store: en(t.$id) }, tw(i)),
        groupId: us
      };
      a === Tn.patchFunction ? f.subtitle = "⤵️" : a === Tn.patchObject ? f.subtitle = "🧩" : i && !Array.isArray(i) && (f.subtitle = i.type), i && (f.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: Ts,
        event: f
      });
    }, { detached: !0, flush: "sync" });
    const o = t._hotUpdate;
    t._hotUpdate = as((i) => {
      o(i), n.addTimelineEvent({
        layerId: Ts,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: en(t.$id),
            info: en("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(mt), n.sendInspectorState(mt);
    });
    const { $dispose: r } = t;
    t.$dispose = () => {
      r(), n.notifyComponentUpdate(), n.sendInspectorTree(mt), n.sendInspectorState(mt), n.getSettings().logStoreChanges && ft(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(mt), n.sendInspectorState(mt), n.getSettings().logStoreChanges && ft(`"${t.$id}" store installed 🆕`);
  });
}
let hg = 0, us;
function Of(e, t, n) {
  const s = t.reduce((o, r) => (o[r] = Se(e)[r], o), {});
  for (const o in s)
    e[o] = function() {
      const r = hg, i = n ? new Proxy(e, {
        get(...l) {
          return us = r, Reflect.get(...l);
        },
        set(...l) {
          return us = r, Reflect.set(...l);
        }
      }) : e;
      us = r;
      const a = s[o].apply(i, arguments);
      return us = void 0, a;
    };
}
function iw({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      Of(t, Object.keys(n.actions), t._isOptionsAPI);
      const s = t._hotUpdate;
      Se(t)._hotUpdate = function(o) {
        s.apply(this, arguments), Of(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    rw(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function aw() {
  const e = eh(!0), t = e.run(() => $({}));
  let n = [], s = [];
  const o = as({
    install(r) {
      Rr(o), o._a = r, r.provide(ig, o), r.config.globalProperties.$pinia = o, Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && ls && ow(r, o), s.forEach((i) => n.push(i)), s = [];
    },
    use(r) {
      return this._a ? n.push(r) : s.push(r), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && ls && typeof Proxy < "u" && o.use(iw), o;
}
function mg(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    qs(o) && qs(s) && !Ye(s) && !rn(s) ? e[n] = mg(o, s) : e[n] = s;
  }
  return e;
}
const gg = () => {
};
function Cf(e, t, n, s = gg) {
  e.push(t);
  const o = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), s());
  };
  return !n && th() && H_(o), o;
}
function ro(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const lw = (e) => e(), Tf = Symbol(), nl = Symbol();
function Ql(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    qs(o) && qs(s) && e.hasOwnProperty(n) && !Ye(s) && !rn(s) ? e[n] = Ql(o, s) : e[n] = s;
  }
  return e;
}
const uw = Le.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function cw(e) {
  return !qs(e) || !Object.prototype.hasOwnProperty.call(e, uw);
}
const { assign: zt } = Object;
function Nf(e) {
  return !!(Ye(e) && e.effect);
}
function Df(e, t, n, s) {
  const { state: o, actions: r, getters: i } = t, a = n.state.value[e];
  let l;
  function f() {
    !a && (Le.NODE_ENV === "production" || !s) && (n.state.value[e] = o ? o() : {});
    const u = Le.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      cn($(o ? o() : {}).value)
    ) : cn(n.state.value[e]);
    return zt(u, r, Object.keys(i || {}).reduce((d, h) => (Le.NODE_ENV !== "production" && h in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${e}".`), d[h] = as(U(() => {
      Rr(n);
      const p = n._s.get(e);
      return i[h].call(p, p);
    })), d), {}));
  }
  return l = Zl(e, f, t, n, s, !0), l;
}
function Zl(e, t, n = {}, s, o, r) {
  let i;
  const a = zt({ actions: {} }, n);
  if (Le.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const l = { deep: !0 };
  Le.NODE_ENV !== "production" && (l.onTrigger = (T) => {
    f ? p = T : f == !1 && !R._hotUpdating && (Array.isArray(p) ? p.push(T) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let f, u, d = [], h = [], p;
  const g = s.state.value[e];
  !r && !g && (Le.NODE_ENV === "production" || !o) && (s.state.value[e] = {});
  const m = $({});
  let _;
  function y(T) {
    let N;
    f = u = !1, Le.NODE_ENV !== "production" && (p = []), typeof T == "function" ? (T(s.state.value[e]), N = {
      type: Tn.patchFunction,
      storeId: e,
      events: p
    }) : (Ql(s.state.value[e], T), N = {
      type: Tn.patchObject,
      payload: T,
      storeId: e,
      events: p
    });
    const A = _ = Symbol();
    $s().then(() => {
      _ === A && (f = !0);
    }), u = !0, ro(d, N, s.state.value[e]);
  }
  const b = r ? function() {
    const { state: N } = n, A = N ? N() : {};
    this.$patch((Y) => {
      zt(Y, A);
    });
  } : (
    /* istanbul ignore next */
    Le.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : gg
  );
  function v() {
    i.stop(), d = [], h = [], s._s.delete(e);
  }
  const O = (T, N = "") => {
    if (Tf in T)
      return T[nl] = N, T;
    const A = function() {
      Rr(s);
      const Y = Array.from(arguments), fe = [], J = [];
      function se(X) {
        fe.push(X);
      }
      function W(X) {
        J.push(X);
      }
      ro(h, {
        args: Y,
        name: A[nl],
        store: R,
        after: se,
        onError: W
      });
      let M;
      try {
        M = T.apply(this && this.$id === e ? this : R, Y);
      } catch (X) {
        throw ro(J, X), X;
      }
      return M instanceof Promise ? M.then((X) => (ro(fe, X), X)).catch((X) => (ro(J, X), Promise.reject(X))) : (ro(fe, M), M);
    };
    return A[Tf] = !0, A[nl] = N, A;
  }, S = /* @__PURE__ */ as({
    actions: {},
    getters: {},
    state: [],
    hotState: m
  }), k = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Cf.bind(null, h),
    $patch: y,
    $reset: b,
    $subscribe(T, N = {}) {
      const A = Cf(d, T, N.detached, () => Y()), Y = i.run(() => Ot(() => s.state.value[e], (fe) => {
        (N.flush === "sync" ? u : f) && T({
          storeId: e,
          type: Tn.direct,
          events: p
        }, fe);
      }, zt({}, l, N)));
      return A;
    },
    $dispose: v
  }, R = cs(Le.NODE_ENV !== "production" || Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && ls ? zt(
    {
      _hmrPayload: S,
      _customProperties: as(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    k
    // must be added later
    // setupStore
  ) : k);
  s._s.set(e, R);
  const P = (s._a && s._a.runWithContext || lw)(() => s._e.run(() => (i = eh()).run(() => t({ action: O }))));
  for (const T in P) {
    const N = P[T];
    if (Ye(N) && !Nf(N) || rn(N))
      Le.NODE_ENV !== "production" && o ? m.value[T] = _i(P, T) : r || (g && cw(N) && (Ye(N) ? N.value = g[T] : Ql(N, g[T])), s.state.value[e][T] = N), Le.NODE_ENV !== "production" && S.state.push(T);
    else if (typeof N == "function") {
      const A = Le.NODE_ENV !== "production" && o ? N : O(N, T);
      P[T] = A, Le.NODE_ENV !== "production" && (S.actions[T] = N), a.actions[T] = N;
    } else Le.NODE_ENV !== "production" && Nf(N) && (S.getters[T] = r ? (
      // @ts-expect-error
      n.getters[T]
    ) : N, ls && (P._getters || // @ts-expect-error: same
    (P._getters = as([]))).push(T));
  }
  if (zt(R, P), zt(Se(R), P), Object.defineProperty(R, "$state", {
    get: () => Le.NODE_ENV !== "production" && o ? m.value : s.state.value[e],
    set: (T) => {
      if (Le.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      y((N) => {
        zt(N, T);
      });
    }
  }), Le.NODE_ENV !== "production" && (R._hotUpdate = as((T) => {
    R._hotUpdating = !0, T._hmrPayload.state.forEach((N) => {
      if (N in R.$state) {
        const A = T.$state[N], Y = R.$state[N];
        typeof A == "object" && qs(A) && qs(Y) ? mg(A, Y) : T.$state[N] = Y;
      }
      R[N] = _i(T.$state, N);
    }), Object.keys(R.$state).forEach((N) => {
      N in T.$state || delete R[N];
    }), f = !1, u = !1, s.state.value[e] = _i(T._hmrPayload, "hotState"), u = !0, $s().then(() => {
      f = !0;
    });
    for (const N in T._hmrPayload.actions) {
      const A = T[N];
      R[N] = //
      O(A, N);
    }
    for (const N in T._hmrPayload.getters) {
      const A = T._hmrPayload.getters[N], Y = r ? (
        // special handling of options api
        U(() => (Rr(s), A.call(R, R)))
      ) : A;
      R[N] = //
      Y;
    }
    Object.keys(R._hmrPayload.getters).forEach((N) => {
      N in T._hmrPayload.getters || delete R[N];
    }), Object.keys(R._hmrPayload.actions).forEach((N) => {
      N in T._hmrPayload.actions || delete R[N];
    }), R._hmrPayload = T._hmrPayload, R._getters = T._getters, R._hotUpdating = !1;
  })), Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && ls) {
    const T = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((N) => {
      Object.defineProperty(R, N, zt({ value: R[N] }, T));
    });
  }
  return s._p.forEach((T) => {
    if (Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && ls) {
      const N = i.run(() => T({
        store: R,
        app: s._a,
        pinia: s,
        options: a
      }));
      Object.keys(N || {}).forEach((A) => R._customProperties.add(A)), zt(R, N);
    } else
      zt(R, i.run(() => T({
        store: R,
        app: s._a,
        pinia: s,
        options: a
      })));
  }), Le.NODE_ENV !== "production" && R.$state && typeof R.$state == "object" && typeof R.$state.constructor == "function" && !R.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${R.$id}".`), g && r && n.hydrate && n.hydrate(R.$state, g), f = !0, u = !0, R;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Pn(e, t, n) {
  let s;
  const o = typeof t == "function";
  s = o ? n : t;
  function r(i, a) {
    const l = hE();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (Le.NODE_ENV === "test" && or && or._testing ? null : i) || (l ? Bt(ig, null) : null), i && Rr(i), Le.NODE_ENV !== "production" && !or)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = or, i._s.has(e) || (o ? Zl(e, t, s, i) : Df(e, s, i), Le.NODE_ENV !== "production" && (r._pinia = i));
    const f = i._s.get(e);
    if (Le.NODE_ENV !== "production" && a) {
      const u = "__hot:" + e, d = o ? Zl(u, t, s, i, !0) : Df(u, zt({}, s), i, !0);
      a._hotUpdate(d), delete i.state.value[u], i._s.delete(u);
    }
    if (Le.NODE_ENV !== "production" && ls) {
      const u = Gn();
      if (u && u.proxy && // avoid adding stores that are just built for hot module replacement
      !a) {
        const d = u.proxy, h = "_pStores" in d ? d._pStores : d._pStores = {};
        h[e] = f;
      }
    }
    return f;
  }
  return r.$id = e, r;
}
function fn(e) {
  const t = Se(e), n = {};
  for (const s in t) {
    const o = t[s];
    o.effect ? n[s] = // ...
    U({
      get: () => e[s],
      set(r) {
        e[s] = r;
      }
    }) : (Ye(o) || rn(o)) && (n[s] = // ---
    _i(e, s));
  }
  return n;
}
function dw() {
  return vg().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function vg() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const fw = typeof Proxy == "function", pw = "devtools-plugin:setup", hw = "plugin:settings:set";
let io, eu;
function mw() {
  var e;
  return io !== void 0 || (typeof window < "u" && window.performance ? (io = !0, eu = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (io = !0, eu = globalThis.perf_hooks.performance) : io = !1), io;
}
function gw() {
  return mw() ? eu.now() : Date.now();
}
class vw {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const s = {};
    if (t.settings)
      for (const i in t.settings) {
        const a = t.settings[i];
        s[i] = a.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let r = Object.assign({}, s);
    try {
      const i = localStorage.getItem(o), a = JSON.parse(i);
      Object.assign(r, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return r;
      },
      setSettings(i) {
        try {
          localStorage.setItem(o, JSON.stringify(i));
        } catch {
        }
        r = i;
      },
      now() {
        return gw();
      }
    }, n && n.on(hw, (i, a) => {
      i === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, a) => this.target ? this.target.on[a] : (...l) => {
        this.onQueue.push({
          method: a,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...l) => (this.targetQueue.push({
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
function _w(e, t) {
  const n = e, s = vg(), o = dw(), r = fw && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r))
    o.emit(pw, e, t);
  else {
    const i = r ? new vw(n, o) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
var Te = {};
const Un = typeof document < "u";
function _g(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function yw(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && _g(e.default);
}
const Ue = Object.assign;
function sl(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = jt(o) ? o.map(e) : e(o);
  }
  return n;
}
const hr = () => {
}, jt = Array.isArray;
function xe(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const yg = /#/g, Ew = /&/g, bw = /\//g, ww = /=/g, Aw = /\?/g, Eg = /\+/g, Sw = /%5B/g, Ow = /%5D/g, bg = /%5E/g, Cw = /%60/g, wg = /%7B/g, Tw = /%7C/g, Ag = /%7D/g, Nw = /%20/g;
function Ju(e) {
  return encodeURI("" + e).replace(Tw, "|").replace(Sw, "[").replace(Ow, "]");
}
function Dw(e) {
  return Ju(e).replace(wg, "{").replace(Ag, "}").replace(bg, "^");
}
function tu(e) {
  return Ju(e).replace(Eg, "%2B").replace(Nw, "+").replace(yg, "%23").replace(Ew, "%26").replace(Cw, "`").replace(wg, "{").replace(Ag, "}").replace(bg, "^");
}
function kw(e) {
  return tu(e).replace(ww, "%3D");
}
function xw(e) {
  return Ju(e).replace(yg, "%23").replace(Aw, "%3F");
}
function Rw(e) {
  return e == null ? "" : xw(e).replace(bw, "%2F");
}
function To(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    Te.NODE_ENV !== "production" && xe(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const Iw = /\/$/, Pw = (e) => e.replace(Iw, "");
function ol(e, t, n = "/") {
  let s, o = {}, r = "", i = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return a < l && a >= 0 && (l = -1), l > -1 && (s = t.slice(0, l), r = t.slice(l + 1, a > -1 ? a : t.length), o = e(r)), a > -1 && (s = s || t.slice(0, a), i = t.slice(a, t.length)), s = Lw(s ?? t, n), {
    fullPath: s + (r && "?") + r + i,
    path: s,
    query: o,
    hash: To(i)
  };
}
function Vw(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function kf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function xf(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && fs(t.matched[s], n.matched[o]) && Sg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function fs(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Sg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Mw(e[n], t[n]))
      return !1;
  return !0;
}
function Mw(e, t) {
  return jt(e) ? Rf(e, t) : jt(t) ? Rf(t, e) : e === t;
}
function Rf(e, t) {
  return jt(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Lw(e, t) {
  if (e.startsWith("/"))
    return e;
  if (Te.NODE_ENV !== "production" && !t.startsWith("/"))
    return xe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), s = e.split("/"), o = s[s.length - 1];
  (o === ".." || o === ".") && s.push("");
  let r = n.length - 1, i, a;
  for (i = 0; i < s.length; i++)
    if (a = s[i], a !== ".")
      if (a === "..")
        r > 1 && r--;
      else
        break;
  return n.slice(0, r).join("/") + "/" + s.slice(i).join("/");
}
const Zn = {
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
var Ir;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ir || (Ir = {}));
var mr;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(mr || (mr = {}));
function Fw(e) {
  if (!e)
    if (Un) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Pw(e);
}
const Bw = /^[^#]+#/;
function jw(e, t) {
  return e.replace(Bw, "#") + t;
}
function Uw(e, t) {
  const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  };
}
const Ca = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Hw(e) {
  let t;
  if ("el" in e) {
    const n = e.el, s = typeof n == "string" && n.startsWith("#");
    if (Te.NODE_ENV !== "production" && typeof e.el == "string" && (!s || !document.getElementById(e.el.slice(1))))
      try {
        const r = document.querySelector(e.el);
        if (s && r) {
          xe(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        xe(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      Te.NODE_ENV !== "production" && xe(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Uw(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function If(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const nu = /* @__PURE__ */ new Map();
function $w(e, t) {
  nu.set(e, t);
}
function Ww(e) {
  const t = nu.get(e);
  return nu.delete(e), t;
}
let Kw = () => location.protocol + "//" + location.host;
function Og(e, t) {
  const { pathname: n, search: s, hash: o } = t, r = e.indexOf("#");
  if (r > -1) {
    let a = o.includes(e.slice(r)) ? e.slice(r).length : 1, l = o.slice(a);
    return l[0] !== "/" && (l = "/" + l), kf(l, "");
  }
  return kf(n, e) + s + o;
}
function zw(e, t, n, s) {
  let o = [], r = [], i = null;
  const a = ({ state: h }) => {
    const p = Og(e, location), g = n.value, m = t.value;
    let _ = 0;
    if (h) {
      if (n.value = p, t.value = h, i && i === g) {
        i = null;
        return;
      }
      _ = m ? h.position - m.position : 0;
    } else
      s(p);
    o.forEach((y) => {
      y(n.value, g, {
        delta: _,
        type: Ir.pop,
        direction: _ ? _ > 0 ? mr.forward : mr.back : mr.unknown
      });
    });
  };
  function l() {
    i = n.value;
  }
  function f(h) {
    o.push(h);
    const p = () => {
      const g = o.indexOf(h);
      g > -1 && o.splice(g, 1);
    };
    return r.push(p), p;
  }
  function u() {
    const { history: h } = window;
    h.state && h.replaceState(Ue({}, h.state, { scroll: Ca() }), "");
  }
  function d() {
    for (const h of r)
      h();
    r = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: f,
    destroy: d
  };
}
function Pf(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? Ca() : null
  };
}
function qw(e) {
  const { history: t, location: n } = window, s = {
    value: Og(e, n)
  }, o = { value: t.state };
  o.value || r(s.value, {
    back: null,
    current: s.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function r(l, f, u) {
    const d = e.indexOf("#"), h = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + l : Kw() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](f, "", h), o.value = f;
    } catch (p) {
      Te.NODE_ENV !== "production" ? xe("Error with push/replace State", p) : console.error(p), n[u ? "replace" : "assign"](h);
    }
  }
  function i(l, f) {
    const u = Ue({}, t.state, Pf(
      o.value.back,
      // keep back and forward entries but override current position
      l,
      o.value.forward,
      !0
    ), f, { position: o.value.position });
    r(l, u, !0), s.value = l;
  }
  function a(l, f) {
    const u = Ue(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: l,
        scroll: Ca()
      }
    );
    Te.NODE_ENV !== "production" && !t.state && xe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), r(u.current, u, !0);
    const d = Ue({}, Pf(s.value, l, null), { position: u.position + 1 }, f);
    r(l, d, !1), s.value = l;
  }
  return {
    location: s,
    state: o,
    push: a,
    replace: i
  };
}
function Yw(e) {
  e = Fw(e);
  const t = qw(e), n = zw(e, t.state, t.location, t.replace);
  function s(r, i = !0) {
    i || n.pauseListeners(), history.go(r);
  }
  const o = Ue({
    // it's overridden right after
    location: "",
    base: e,
    go: s,
    createHref: jw.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function Xw(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Te.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && xe(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Yw(e);
}
function ta(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Cg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const su = Symbol(Te.NODE_ENV !== "production" ? "navigation failure" : "");
var Vf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Vf || (Vf = {}));
const Gw = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Qw(t)}" via a navigation guard.`;
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
function No(e, t) {
  return Te.NODE_ENV !== "production" ? Ue(new Error(Gw[e](t)), {
    type: e,
    [su]: !0
  }, t) : Ue(new Error(), {
    type: e,
    [su]: !0
  }, t);
}
function Bn(e, t) {
  return e instanceof Error && su in e && (t == null || !!(e.type & t));
}
const Jw = ["params", "query", "hash"];
function Qw(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of Jw)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Mf = "[^/]+?", Zw = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, eA = /[.+*?^${}()[\]/\\]/g;
function tA(e, t) {
  const n = Ue({}, Zw, t), s = [];
  let o = n.start ? "^" : "";
  const r = [];
  for (const f of e) {
    const u = f.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !f.length && (o += "/");
    for (let d = 0; d < f.length; d++) {
      const h = f[d];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        d || (o += "/"), o += h.value.replace(eA, "\\$&"), p += 40;
      else if (h.type === 1) {
        const { value: g, repeatable: m, optional: _, regexp: y } = h;
        r.push({
          name: g,
          repeatable: m,
          optional: _
        });
        const b = y || Mf;
        if (b !== Mf) {
          p += 10;
          try {
            new RegExp(`(${b})`);
          } catch (O) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${b}): ` + O.message);
          }
        }
        let v = m ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        d || (v = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        _ && f.length < 2 ? `(?:/${v})` : "/" + v), _ && (v += "?"), o += v, p += 20, _ && (p += -8), m && (p += -20), b === ".*" && (p += -50);
      }
      u.push(p);
    }
    s.push(u);
  }
  if (n.strict && n.end) {
    const f = s.length - 1;
    s[f][s[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function a(f) {
    const u = f.match(i), d = {};
    if (!u)
      return null;
    for (let h = 1; h < u.length; h++) {
      const p = u[h] || "", g = r[h - 1];
      d[g.name] = p && g.repeatable ? p.split("/") : p;
    }
    return d;
  }
  function l(f) {
    let u = "", d = !1;
    for (const h of e) {
      (!d || !u.endsWith("/")) && (u += "/"), d = !1;
      for (const p of h)
        if (p.type === 0)
          u += p.value;
        else if (p.type === 1) {
          const { value: g, repeatable: m, optional: _ } = p, y = g in f ? f[g] : "";
          if (jt(y) && !m)
            throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
          const b = jt(y) ? y.join("/") : y;
          if (!b)
            if (_)
              h.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${g}"`);
          u += b;
        }
    }
    return u || "/";
  }
  return {
    re: i,
    score: s,
    keys: r,
    parse: a,
    stringify: l
  };
}
function nA(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s)
      return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Tg(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const r = nA(s[n], o[n]);
    if (r)
      return r;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (Lf(s))
      return 1;
    if (Lf(o))
      return -1;
  }
  return o.length - s.length;
}
function Lf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const sA = {
  type: 0,
  value: ""
}, oA = /[a-zA-Z0-9_]/;
function rA(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[sA]];
  if (!e.startsWith("/"))
    throw new Error(Te.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${f}": ${p}`);
  }
  let n = 0, s = n;
  const o = [];
  let r;
  function i() {
    r && o.push(r), r = [];
  }
  let a = 0, l, f = "", u = "";
  function d() {
    f && (n === 0 ? r.push({
      type: 0,
      value: f
    }) : n === 1 || n === 2 || n === 3 ? (r.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), r.push({
      type: 1,
      value: f,
      regexp: u,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), f = "");
  }
  function h() {
    f += l;
  }
  for (; a < e.length; ) {
    if (l = e[a++], l === "\\" && n !== 2) {
      s = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (f && d(), i()) : l === ":" ? (d(), n = 1) : h();
        break;
      case 4:
        h(), n = s;
        break;
      case 1:
        l === "(" ? n = 2 : oA.test(l) ? h() : (d(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
        break;
      case 3:
        d(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), d(), i(), o;
}
function iA(e, t, n) {
  const s = tA(rA(e.path), n);
  if (Te.NODE_ENV !== "production") {
    const r = /* @__PURE__ */ new Set();
    for (const i of s.keys)
      r.has(i.name) && xe(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), r.add(i.name);
  }
  const o = Ue(s, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function aA(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = Uf({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(d) {
    return s.get(d);
  }
  function r(d, h, p) {
    const g = !p, m = Bf(d);
    Te.NODE_ENV !== "production" && dA(m, h), m.aliasOf = p && p.record;
    const _ = Uf(t, d), y = [m];
    if ("alias" in d) {
      const O = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const S of O)
        y.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          Bf(Ue({}, m, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: p ? p.record.components : m.components,
            path: S,
            // we might be the child of an alias
            aliasOf: p ? p.record : m
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let b, v;
    for (const O of y) {
      const { path: S } = O;
      if (h && S[0] !== "/") {
        const k = h.record.path, R = k[k.length - 1] === "/" ? "" : "/";
        O.path = h.record.path + (S && R + S);
      }
      if (Te.NODE_ENV !== "production" && O.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (b = iA(O, h, _), Te.NODE_ENV !== "production" && h && S[0] === "/" && pA(b, h), p ? (p.alias.push(b), Te.NODE_ENV !== "production" && cA(p, b)) : (v = v || b, v !== b && v.alias.push(b), g && d.name && !jf(b) && (Te.NODE_ENV !== "production" && fA(d, h), i(d.name))), Ng(b) && l(b), m.children) {
        const k = m.children;
        for (let R = 0; R < k.length; R++)
          r(k[R], b, p && p.children[R]);
      }
      p = p || b;
    }
    return v ? () => {
      i(v);
    } : hr;
  }
  function i(d) {
    if (Cg(d)) {
      const h = s.get(d);
      h && (s.delete(d), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i));
    } else {
      const h = n.indexOf(d);
      h > -1 && (n.splice(h, 1), d.record.name && s.delete(d.record.name), d.children.forEach(i), d.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(d) {
    const h = hA(d, n);
    n.splice(h, 0, d), d.record.name && !jf(d) && s.set(d.record.name, d);
  }
  function f(d, h) {
    let p, g = {}, m, _;
    if ("name" in d && d.name) {
      if (p = s.get(d.name), !p)
        throw No(1, {
          location: d
        });
      if (Te.NODE_ENV !== "production") {
        const v = Object.keys(d.params || {}).filter((O) => !p.keys.find((S) => S.name === O));
        v.length && xe(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      _ = p.record.name, g = Ue(
        // paramsFromLocation is a new object
        Ff(
          h.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          p.keys.filter((v) => !v.optional).concat(p.parent ? p.parent.keys.filter((v) => v.optional) : []).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        d.params && Ff(d.params, p.keys.map((v) => v.name))
      ), m = p.stringify(g);
    } else if (d.path != null)
      m = d.path, Te.NODE_ENV !== "production" && !m.startsWith("/") && xe(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), p = n.find((v) => v.re.test(m)), p && (g = p.parse(m), _ = p.record.name);
    else {
      if (p = h.name ? s.get(h.name) : n.find((v) => v.re.test(h.path)), !p)
        throw No(1, {
          location: d,
          currentLocation: h
        });
      _ = p.record.name, g = Ue({}, h.params, d.params), m = p.stringify(g);
    }
    const y = [];
    let b = p;
    for (; b; )
      y.unshift(b.record), b = b.parent;
    return {
      name: _,
      path: m,
      params: g,
      matched: y,
      meta: uA(y)
    };
  }
  e.forEach((d) => r(d));
  function u() {
    n.length = 0, s.clear();
  }
  return {
    addRoute: r,
    resolve: f,
    removeRoute: i,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: o
  };
}
function Ff(e, t) {
  const n = {};
  for (const s of t)
    s in e && (n[s] = e[s]);
  return n;
}
function Bf(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: lA(e),
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
function lA(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const s in e.components)
      t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function jf(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function uA(e) {
  return e.reduce((t, n) => Ue(t, n.meta), {});
}
function Uf(e, t) {
  const n = {};
  for (const s in e)
    n[s] = s in t ? t[s] : e[s];
  return n;
}
function ou(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function cA(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(ou.bind(null, n)))
      return xe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(ou.bind(null, n)))
      return xe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function dA(e, t) {
  t && t.record.name && !e.name && !e.path && xe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function fA(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function pA(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(ou.bind(null, n)))
      return xe(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function hA(e, t) {
  let n = 0, s = t.length;
  for (; n !== s; ) {
    const r = n + s >> 1;
    Tg(e, t[r]) < 0 ? s = r : n = r + 1;
  }
  const o = mA(e);
  return o && (s = t.lastIndexOf(o, s - 1), Te.NODE_ENV !== "production" && s < 0 && xe(`Finding ancestor route "${o.record.path}" failed for "${e.record.path}"`)), s;
}
function mA(e) {
  let t = e;
  for (; t = t.parent; )
    if (Ng(t) && Tg(e, t) === 0)
      return t;
}
function Ng({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function gA(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < s.length; ++o) {
    const r = s[o].replace(Eg, " "), i = r.indexOf("="), a = To(i < 0 ? r : r.slice(0, i)), l = i < 0 ? null : To(r.slice(i + 1));
    if (a in t) {
      let f = t[a];
      jt(f) || (f = t[a] = [f]), f.push(l);
    } else
      t[a] = l;
  }
  return t;
}
function Hf(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = kw(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (jt(s) ? s.map((r) => r && tu(r)) : [s && tu(s)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function vA(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = jt(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const _A = Symbol(Te.NODE_ENV !== "production" ? "router view location matched" : ""), $f = Symbol(Te.NODE_ENV !== "production" ? "router view depth" : ""), Qu = Symbol(Te.NODE_ENV !== "production" ? "router" : ""), Zu = Symbol(Te.NODE_ENV !== "production" ? "route location" : ""), ru = Symbol(Te.NODE_ENV !== "production" ? "router view location" : "");
function Go() {
  let e = [];
  function t(s) {
    return e.push(s), () => {
      const o = e.indexOf(s);
      o > -1 && e.splice(o, 1);
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
function os(e, t, n, s, o, r = (i) => i()) {
  const i = s && // name is defined if record is because of the function overload
  (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
  return () => new Promise((a, l) => {
    const f = (h) => {
      h === !1 ? l(No(4, {
        from: n,
        to: t
      })) : h instanceof Error ? l(h) : ta(h) ? l(No(2, {
        from: t,
        to: h
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === i && typeof h == "function" && i.push(h), a());
    }, u = r(() => e.call(s && s.instances[o], t, n, Te.NODE_ENV !== "production" ? yA(f, t, n) : f));
    let d = Promise.resolve(u);
    if (e.length < 3 && (d = d.then(f)), Te.NODE_ENV !== "production" && e.length > 2) {
      const h = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        d = d.then((p) => f._called ? p : (xe(h), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !f._called) {
        xe(h), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    d.catch((h) => l(h));
  });
}
function yA(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && xe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function rl(e, t, n, s, o = (r) => r()) {
  const r = [];
  for (const i of e) {
    Te.NODE_ENV !== "production" && !i.components && !i.children.length && xe(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in i.components) {
      let l = i.components[a];
      if (Te.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw xe(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          xe(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = l;
          l = () => f;
        } else l.__asyncLoader && // warn only once per component
        !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, xe(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (_g(l)) {
          const u = (l.__vccOpts || l)[t];
          u && r.push(os(u, n, s, i, a, o));
        } else {
          let f = l();
          Te.NODE_ENV !== "production" && !("catch" in f) && (xe(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), r.push(() => f.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
            const d = yw(u) ? u.default : u;
            i.mods[a] = u, i.components[a] = d;
            const p = (d.__vccOpts || d)[t];
            return p && os(p, n, s, i, a, o)();
          }));
        }
    }
  }
  return r;
}
function Wf(e) {
  const t = Bt(Qu), n = Bt(Zu);
  let s = !1, o = null;
  const r = U(() => {
    const u = H(e.to);
    return Te.NODE_ENV !== "production" && (!s || u !== o) && (ta(u) || (s ? xe(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, o, `
- props:`, e) : xe(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), o = u, s = !0), t.resolve(u);
  }), i = U(() => {
    const { matched: u } = r.value, { length: d } = u, h = u[d - 1], p = n.matched;
    if (!h || !p.length)
      return -1;
    const g = p.findIndex(fs.bind(null, h));
    if (g > -1)
      return g;
    const m = Kf(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Kf(h) === m && // avoid comparing the child with its parent
      p[p.length - 1].path !== m ? p.findIndex(fs.bind(null, u[d - 2])) : g
    );
  }), a = U(() => i.value > -1 && SA(n.params, r.value.params)), l = U(() => i.value > -1 && i.value === n.matched.length - 1 && Sg(n.params, r.value.params));
  function f(u = {}) {
    if (AA(u)) {
      const d = t[H(e.replace) ? "replace" : "push"](
        H(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(hr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  if (Te.NODE_ENV !== "production" && Un) {
    const u = Gn();
    if (u) {
      const d = {
        route: r.value,
        isActive: a.value,
        isExactActive: l.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), va(() => {
        d.route = r.value, d.isActive = a.value, d.isExactActive = l.value, d.error = ta(H(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: U(() => r.value.href),
    isActive: a,
    isExactActive: l,
    navigate: f
  };
}
function EA(e) {
  return e.length === 1 ? e[0] : e;
}
const bA = /* @__PURE__ */ Ce({
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
  useLink: Wf,
  setup(e, { slots: t }) {
    const n = cs(Wf(e)), { options: s } = Bt(Qu), o = U(() => ({
      [zf(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [zf(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const r = t.default && EA(t.default(n));
      return e.custom ? r : Lu("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, r);
    };
  }
}), wA = bA;
function AA(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function SA(e, t) {
  for (const n in t) {
    const s = t[n], o = e[n];
    if (typeof s == "string") {
      if (s !== o)
        return !1;
    } else if (!jt(o) || o.length !== s.length || s.some((r, i) => r !== o[i]))
      return !1;
  }
  return !0;
}
function Kf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const zf = (e, t, n) => e ?? t ?? n, OA = /* @__PURE__ */ Ce({
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
    Te.NODE_ENV !== "production" && TA();
    const s = Bt(ru), o = U(() => e.route || s.value), r = Bt($f, 0), i = U(() => {
      let f = H(r);
      const { matched: u } = o.value;
      let d;
      for (; (d = u[f]) && !d.components; )
        f++;
      return f;
    }), a = U(() => o.value.matched[i.value]);
    Ai($f, U(() => i.value + 1)), Ai(_A, a), Ai(ru, o);
    const l = $();
    return Ot(() => [l.value, a.value, e.name], ([f, u, d], [h, p, g]) => {
      u && (u.instances[d] = f, p && p !== u && f && f === h && (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards), u.updateGuards.size || (u.updateGuards = p.updateGuards))), f && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !fs(u, p) || !h) && (u.enterCallbacks[d] || []).forEach((m) => m(f));
    }, { flush: "post" }), () => {
      const f = o.value, u = e.name, d = a.value, h = d && d.components[u];
      if (!h)
        return qf(n.default, { Component: h, route: f });
      const p = d.props[u], g = p ? p === !0 ? f.params : typeof p == "function" ? p(f) : p : null, _ = Lu(h, Ue({}, g, t, {
        onVnodeUnmounted: (y) => {
          y.component.isUnmounted && (d.instances[u] = null);
        },
        ref: l
      }));
      if (Te.NODE_ENV !== "production" && Un && _.ref) {
        const y = {
          depth: i.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (jt(_.ref) ? _.ref.map((v) => v.i) : [_.ref.i]).forEach((v) => {
          v.__vrv_devtools = y;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        qf(n.default, { Component: _, route: f }) || _
      );
    };
  }
});
function qf(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const CA = OA;
function TA() {
  const e = Gn(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const s = t === "KeepAlive" ? "keep-alive" : "transition";
    xe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`);
  }
}
function Jo(e, t) {
  const n = Ue({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((s) => FA(s, ["instances", "children", "aliasOf"]))
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
function ai(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let NA = 0;
function DA(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const s = NA++;
  _w({
    id: "org.vuejs.router" + (s ? "." + s : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (o) => {
    typeof o.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), o.on.inspectComponent((u, d) => {
      u.instanceData && u.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Jo(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: u, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const h = d.__vrv_devtools;
        u.tags.push({
          label: (h.name ? `${h.name.toString()}: ` : "") + h.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Dg
        });
      }
      jt(d.__vrl_devtools) && (d.__devtoolsApi = o, d.__vrl_devtools.forEach((h) => {
        let p = h.route.path, g = Rg, m = "", _ = 0;
        h.error ? (p = h.error, g = PA, _ = VA) : h.isExactActive ? (g = xg, m = "This is exactly active") : h.isActive && (g = kg, m = "This link is active"), u.tags.push({
          label: p,
          textColor: _,
          tooltip: m,
          backgroundColor: g
        });
      }));
    }), Ot(t.currentRoute, () => {
      l(), o.notifyComponentUpdate(), o.sendInspectorTree(a), o.sendInspectorState(a);
    });
    const r = "router:navigations:" + s;
    o.addTimelineLayer({
      id: r,
      label: `Router${s ? " " + s : ""} Navigations`,
      color: 4237508
    }), t.onError((u, d) => {
      o.addTimelineEvent({
        layerId: r,
        event: {
          title: "Error during Navigation",
          subtitle: d.fullPath,
          logType: "error",
          time: o.now(),
          data: { error: u },
          groupId: d.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((u, d) => {
      const h = {
        guard: ai("beforeEach"),
        from: Jo(d, "Current Location during this navigation"),
        to: Jo(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: i++
      }), o.addTimelineEvent({
        layerId: r,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: h,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, d, h) => {
      const p = {
        guard: ai("afterEach")
      };
      h ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: h ? h.message : "",
          tooltip: "Navigation Failure",
          value: h
        }
      }, p.status = ai("❌")) : p.status = ai("✅"), p.from = Jo(d, "Current Location during this navigation"), p.to = Jo(u, "Target location"), o.addTimelineEvent({
        layerId: r,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: o.now(),
          data: p,
          logType: h ? "warning" : "default",
          groupId: u.meta.__navigationId
        }
      });
    });
    const a = "router-inspector:" + s;
    o.addInspector({
      id: a,
      label: "Routes" + (s ? " " + s : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function l() {
      if (!f)
        return;
      const u = f;
      let d = n.getRoutes().filter((h) => !h.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !h.parent.record.components);
      d.forEach(Vg), u.filter && (d = d.filter((h) => (
        // save matches state based on the payload
        iu(h, u.filter.toLowerCase())
      ))), d.forEach((h) => Pg(h, t.currentRoute.value)), u.rootNodes = d.map(Ig);
    }
    let f;
    o.on.getInspectorTree((u) => {
      f = u, u.app === e && u.inspectorId === a && l();
    }), o.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === a) {
        const h = n.getRoutes().find((p) => p.record.__vd_id === u.nodeId);
        h && (u.state = {
          options: xA(h)
        });
      }
    }), o.sendInspectorTree(a), o.sendInspectorState(a);
  });
}
function kA(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function xA(e) {
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
        display: e.keys.map((s) => `${s.name}${kA(s)}`).join(" "),
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
    value: e.alias.map((s) => s.record.path)
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
        display: e.score.map((s) => s.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const Dg = 15485081, kg = 2450411, xg = 8702998, RA = 2282478, Rg = 16486972, IA = 6710886, PA = 16704226, VA = 12131356;
function Ig(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: RA
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Rg
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Dg
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: xg
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: kg
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: IA
  });
  let s = n.__vd_id;
  return s == null && (s = String(MA++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(Ig)
  };
}
let MA = 0;
const LA = /^\/(.*)\/([a-z]*)$/;
function Pg(e, t) {
  const n = t.matched.length && fs(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => fs(s, e.record))), e.children.forEach((s) => Pg(s, t));
}
function Vg(e) {
  e.__vd_match = !1, e.children.forEach(Vg);
}
function iu(e, t) {
  const n = String(e.re).match(LA);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => iu(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), r = To(o);
  return !t.startsWith("/") && (r.includes(t) || o.includes(t)) || r.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => iu(i, t));
}
function FA(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function BA(e) {
  const t = aA(e.routes, e), n = e.parseQuery || gA, s = e.stringifyQuery || Hf, o = e.history;
  if (Te.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const r = Go(), i = Go(), a = Go(), l = ly(Zn);
  let f = Zn;
  Un && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = sl.bind(null, (B) => "" + B), d = sl.bind(null, Rw), h = (
    // @ts-expect-error: intentionally avoid the type check
    sl.bind(null, To)
  );
  function p(B, re) {
    let ae, pe;
    return Cg(B) ? (ae = t.getRecordMatcher(B), Te.NODE_ENV !== "production" && !ae && xe(`Parent route "${String(B)}" not found when adding child route`, re), pe = re) : pe = B, t.addRoute(pe, ae);
  }
  function g(B) {
    const re = t.getRecordMatcher(B);
    re ? t.removeRoute(re) : Te.NODE_ENV !== "production" && xe(`Cannot remove non-existent route "${String(B)}"`);
  }
  function m() {
    return t.getRoutes().map((B) => B.record);
  }
  function _(B) {
    return !!t.getRecordMatcher(B);
  }
  function y(B, re) {
    if (re = Ue({}, re || l.value), typeof B == "string") {
      const w = ol(n, B, re.path), V = t.resolve({ path: w.path }, re), K = o.createHref(w.fullPath);
      return Te.NODE_ENV !== "production" && (K.startsWith("//") ? xe(`Location "${B}" resolved to "${K}". A resolved location cannot start with multiple slashes.`) : V.matched.length || xe(`No match found for location with path "${B}"`)), Ue(w, V, {
        params: h(V.params),
        hash: To(w.hash),
        redirectedFrom: void 0,
        href: K
      });
    }
    if (Te.NODE_ENV !== "production" && !ta(B))
      return xe(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, B), y({});
    let ae;
    if (B.path != null)
      Te.NODE_ENV !== "production" && "params" in B && !("name" in B) && // @ts-expect-error: the type is never
      Object.keys(B.params).length && xe(`Path "${B.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), ae = Ue({}, B, {
        path: ol(n, B.path, re.path).path
      });
    else {
      const w = Ue({}, B.params);
      for (const V in w)
        w[V] == null && delete w[V];
      ae = Ue({}, B, {
        params: d(w)
      }), re.params = d(re.params);
    }
    const pe = t.resolve(ae, re), ke = B.hash || "";
    Te.NODE_ENV !== "production" && ke && !ke.startsWith("#") && xe(`A \`hash\` should always start with the character "#". Replace "${ke}" with "#${ke}".`), pe.params = u(h(pe.params));
    const Qe = Vw(s, Ue({}, B, {
      hash: Dw(ke),
      path: pe.path
    })), E = o.createHref(Qe);
    return Te.NODE_ENV !== "production" && (E.startsWith("//") ? xe(`Location "${B}" resolved to "${E}". A resolved location cannot start with multiple slashes.`) : pe.matched.length || xe(`No match found for location with path "${B.path != null ? B.path : B}"`)), Ue({
      fullPath: Qe,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: ke,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        s === Hf ? vA(B.query) : B.query || {}
      )
    }, pe, {
      redirectedFrom: void 0,
      href: E
    });
  }
  function b(B) {
    return typeof B == "string" ? ol(n, B, l.value.path) : Ue({}, B);
  }
  function v(B, re) {
    if (f !== B)
      return No(8, {
        from: re,
        to: B
      });
  }
  function O(B) {
    return R(B);
  }
  function S(B) {
    return O(Ue(b(B), { replace: !0 }));
  }
  function k(B) {
    const re = B.matched[B.matched.length - 1];
    if (re && re.redirect) {
      const { redirect: ae } = re;
      let pe = typeof ae == "function" ? ae(B) : ae;
      if (typeof pe == "string" && (pe = pe.includes("?") || pe.includes("#") ? pe = b(pe) : (
        // force empty params
        { path: pe }
      ), pe.params = {}), Te.NODE_ENV !== "production" && pe.path == null && !("name" in pe))
        throw xe(`Invalid redirect found:
${JSON.stringify(pe, null, 2)}
 when navigating to "${B.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Ue({
        query: B.query,
        hash: B.hash,
        // avoid transferring params if the redirect has a path
        params: pe.path != null ? {} : B.params
      }, pe);
    }
  }
  function R(B, re) {
    const ae = f = y(B), pe = l.value, ke = B.state, Qe = B.force, E = B.replace === !0, w = k(ae);
    if (w)
      return R(
        Ue(b(w), {
          state: typeof w == "object" ? Ue({}, ke, w.state) : ke,
          force: Qe,
          replace: E
        }),
        // keep original redirectedFrom if it exists
        re || ae
      );
    const V = ae;
    V.redirectedFrom = re;
    let K;
    return !Qe && xf(s, pe, ae) && (K = No(16, { to: V, from: pe }), Ee(
      pe,
      pe,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (K ? Promise.resolve(K) : T(V, pe)).catch((j) => Bn(j) ? (
      // navigation redirects still mark the router as ready
      Bn(
        j,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? j : _e(j)
    ) : (
      // reject any unknown error
      M(j, V, pe)
    )).then((j) => {
      if (j) {
        if (Bn(
          j,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return Te.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          xf(s, y(j.to), V) && // and we have done it a couple of times
          re && // @ts-expect-error: added only in dev
          (re._count = re._count ? (
            // @ts-expect-error
            re._count + 1
          ) : 1) > 30 ? (xe(`Detected a possibly infinite redirection in a navigation guard when going from "${pe.fullPath}" to "${V.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : R(
            // keep options
            Ue({
              // preserve an existing replacement but allow the redirect to override it
              replace: E
            }, b(j.to), {
              state: typeof j.to == "object" ? Ue({}, ke, j.to.state) : ke,
              force: Qe
            }),
            // preserve the original redirectedFrom if any
            re || V
          );
      } else
        j = A(V, pe, !0, E, ke);
      return N(V, pe, j), j;
    });
  }
  function I(B, re) {
    const ae = v(B, re);
    return ae ? Promise.reject(ae) : Promise.resolve();
  }
  function P(B) {
    const re = Pe.values().next().value;
    return re && typeof re.runWithContext == "function" ? re.runWithContext(B) : B();
  }
  function T(B, re) {
    let ae;
    const [pe, ke, Qe] = jA(B, re);
    ae = rl(pe.reverse(), "beforeRouteLeave", B, re);
    for (const w of pe)
      w.leaveGuards.forEach((V) => {
        ae.push(os(V, B, re));
      });
    const E = I.bind(null, B, re);
    return ae.push(E), nt(ae).then(() => {
      ae = [];
      for (const w of r.list())
        ae.push(os(w, B, re));
      return ae.push(E), nt(ae);
    }).then(() => {
      ae = rl(ke, "beforeRouteUpdate", B, re);
      for (const w of ke)
        w.updateGuards.forEach((V) => {
          ae.push(os(V, B, re));
        });
      return ae.push(E), nt(ae);
    }).then(() => {
      ae = [];
      for (const w of Qe)
        if (w.beforeEnter)
          if (jt(w.beforeEnter))
            for (const V of w.beforeEnter)
              ae.push(os(V, B, re));
          else
            ae.push(os(w.beforeEnter, B, re));
      return ae.push(E), nt(ae);
    }).then(() => (B.matched.forEach((w) => w.enterCallbacks = {}), ae = rl(Qe, "beforeRouteEnter", B, re, P), ae.push(E), nt(ae))).then(() => {
      ae = [];
      for (const w of i.list())
        ae.push(os(w, B, re));
      return ae.push(E), nt(ae);
    }).catch((w) => Bn(
      w,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? w : Promise.reject(w));
  }
  function N(B, re, ae) {
    a.list().forEach((pe) => P(() => pe(B, re, ae)));
  }
  function A(B, re, ae, pe, ke) {
    const Qe = v(B, re);
    if (Qe)
      return Qe;
    const E = re === Zn, w = Un ? history.state : {};
    ae && (pe || E ? o.replace(B.fullPath, Ue({
      scroll: E && w && w.scroll
    }, ke)) : o.push(B.fullPath, ke)), l.value = B, Ee(B, re, ae, E), _e();
  }
  let Y;
  function fe() {
    Y || (Y = o.listen((B, re, ae) => {
      if (!Me.listening)
        return;
      const pe = y(B), ke = k(pe);
      if (ke) {
        R(Ue(ke, { replace: !0, force: !0 }), pe).catch(hr);
        return;
      }
      f = pe;
      const Qe = l.value;
      Un && $w(If(Qe.fullPath, ae.delta), Ca()), T(pe, Qe).catch((E) => Bn(
        E,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? E : Bn(
        E,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (R(
        Ue(b(E.to), {
          force: !0
        }),
        pe
        // avoid an uncaught rejection, let push call triggerError
      ).then((w) => {
        Bn(
          w,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !ae.delta && ae.type === Ir.pop && o.go(-1, !1);
      }).catch(hr), Promise.reject()) : (ae.delta && o.go(-ae.delta, !1), M(E, pe, Qe))).then((E) => {
        E = E || A(
          // after navigation, all matched components are resolved
          pe,
          Qe,
          !1
        ), E && (ae.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Bn(
          E,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-ae.delta, !1) : ae.type === Ir.pop && Bn(
          E,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), N(pe, Qe, E);
      }).catch(hr);
    }));
  }
  let J = Go(), se = Go(), W;
  function M(B, re, ae) {
    _e(B);
    const pe = se.list();
    return pe.length ? pe.forEach((ke) => ke(B, re, ae)) : (Te.NODE_ENV !== "production" && xe("uncaught error during route navigation:"), console.error(B)), Promise.reject(B);
  }
  function X() {
    return W && l.value !== Zn ? Promise.resolve() : new Promise((B, re) => {
      J.add([B, re]);
    });
  }
  function _e(B) {
    return W || (W = !B, fe(), J.list().forEach(([re, ae]) => B ? ae(B) : re()), J.reset()), B;
  }
  function Ee(B, re, ae, pe) {
    const { scrollBehavior: ke } = e;
    if (!Un || !ke)
      return Promise.resolve();
    const Qe = !ae && Ww(If(B.fullPath, 0)) || (pe || !ae) && history.state && history.state.scroll || null;
    return $s().then(() => ke(B, re, Qe)).then((E) => E && Hw(E)).catch((E) => M(E, B, re));
  }
  const we = (B) => o.go(B);
  let Re;
  const Pe = /* @__PURE__ */ new Set(), Me = {
    currentRoute: l,
    listening: !0,
    addRoute: p,
    removeRoute: g,
    clearRoutes: t.clearRoutes,
    hasRoute: _,
    getRoutes: m,
    resolve: y,
    options: e,
    push: O,
    replace: S,
    go: we,
    back: () => we(-1),
    forward: () => we(1),
    beforeEach: r.add,
    beforeResolve: i.add,
    afterEach: a.add,
    onError: se.add,
    isReady: X,
    install(B) {
      const re = this;
      B.component("RouterLink", wA), B.component("RouterView", CA), B.config.globalProperties.$router = re, Object.defineProperty(B.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => H(l)
      }), Un && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Re && l.value === Zn && (Re = !0, O(o.location).catch((ke) => {
        Te.NODE_ENV !== "production" && xe("Unexpected error when starting the router:", ke);
      }));
      const ae = {};
      for (const ke in Zn)
        Object.defineProperty(ae, ke, {
          get: () => l.value[ke],
          enumerable: !0
        });
      B.provide(Qu, re), B.provide(Zu, _h(ae)), B.provide(ru, l);
      const pe = B.unmount;
      Pe.add(B), B.unmount = function() {
        Pe.delete(B), Pe.size < 1 && (f = Zn, Y && Y(), Y = null, l.value = Zn, Re = !1, W = !1), pe();
      }, Te.NODE_ENV !== "production" && Un && DA(B, re, t);
    }
  };
  function nt(B) {
    return B.reduce((re, ae) => re.then(() => P(ae)), Promise.resolve());
  }
  return Me;
}
function jA(e, t) {
  const n = [], s = [], o = [], r = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < r; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => fs(f, a)) ? s.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((f) => fs(f, l)) || o.push(l));
  }
  return [n, s, o];
}
function Mg(e) {
  return Bt(Zu);
}
const UA = { class: "nav nav-tabs mb-4" }, HA = { class: "nav-item" }, $A = { class: "nav-item" }, WA = { class: "nav-item" }, KA = { class: "nav-item" }, zA = /* @__PURE__ */ Ce({
  __name: "NavigationMenu",
  setup(e) {
    const t = Mg();
    return (n, s) => {
      const o = rt("router-link");
      return C(), D("ul", UA, [
        c("li", HA, [
          le(o, {
            to: "/",
            class: ue(["nav-link", { active: H(t).name === "home" }]),
            "aria-current": H(t).name === "home" ? "page" : void 0
          }, {
            default: me(() => s[0] || (s[0] = [
              c("i", { class: "fas fa-home me-2" }, null, -1),
              ee(" Home ")
            ])),
            _: 1,
            __: [0]
          }, 8, ["class", "aria-current"])
        ]),
        c("li", $A, [
          le(o, {
            to: "/setup",
            class: ue(["nav-link", { active: H(t).name === "setup" }]),
            "aria-current": H(t).name === "setup" ? "page" : void 0
          }, {
            default: me(() => s[1] || (s[1] = [
              c("i", { class: "fas fa-cogs me-2" }, null, -1),
              ee(" Setup ")
            ])),
            _: 1,
            __: [1]
          }, 8, ["class", "aria-current"])
        ]),
        c("li", WA, [
          le(o, {
            to: "/resources",
            class: ue(["nav-link", { active: H(t).name === "resources" }]),
            "aria-current": H(t).name === "resources" ? "page" : void 0
          }, {
            default: me(() => s[2] || (s[2] = [
              c("i", { class: "fas fa-database me-2" }, null, -1),
              ee(" Resources ")
            ])),
            _: 1,
            __: [2]
          }, 8, ["class", "aria-current"])
        ]),
        c("li", KA, [
          le(o, {
            to: "/tasks",
            class: ue(["nav-link", { active: H(t).name === "tasks" }]),
            "aria-current": H(t).name === "tasks" ? "page" : void 0
          }, {
            default: me(() => s[3] || (s[3] = [
              c("i", { class: "fas fa-tasks me-2" }, null, -1),
              ee(" Tasks ")
            ])),
            _: 1,
            __: [3]
          }, 8, ["class", "aria-current"])
        ])
      ]);
    };
  }
}), Qt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, qA = /* @__PURE__ */ Qt(zA, [["__scopeId", "data-v-131175f8"]]), YA = /* @__PURE__ */ Ce({
  __name: "MainLayout",
  setup(e) {
    return (t, n) => {
      const s = rt("router-view");
      return C(), D("div", null, [
        c("main", null, [
          le(qA),
          le(s)
        ])
      ]);
    };
  }
}), XA = /* @__PURE__ */ Qt(YA, [["__scopeId", "data-v-a42a7003"]]);
function Lg(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: GA } = Object.prototype, { getPrototypeOf: ec } = Object, { iterator: Ta, toStringTag: Fg } = Symbol, Na = /* @__PURE__ */ ((e) => (t) => {
  const n = GA.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), pn = (e) => (e = e.toLowerCase(), (t) => Na(t) === e), Da = (e) => (t) => typeof t === e, { isArray: Bo } = Array, Pr = Da("undefined");
function JA(e) {
  return e !== null && !Pr(e) && e.constructor !== null && !Pr(e.constructor) && Rt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Bg = pn("ArrayBuffer");
function QA(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Bg(e.buffer), t;
}
const ZA = Da("string"), Rt = Da("function"), jg = Da("number"), ka = (e) => e !== null && typeof e == "object", eS = (e) => e === !0 || e === !1, Ri = (e) => {
  if (Na(e) !== "object")
    return !1;
  const t = ec(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Fg in e) && !(Ta in e);
}, tS = pn("Date"), nS = pn("File"), sS = pn("Blob"), oS = pn("FileList"), rS = (e) => ka(e) && Rt(e.pipe), iS = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Rt(e.append) && ((t = Na(e)) === "formdata" || // detect form-data instance
  t === "object" && Rt(e.toString) && e.toString() === "[object FormData]"));
}, aS = pn("URLSearchParams"), [lS, uS, cS, dS] = ["ReadableStream", "Request", "Response", "Headers"].map(pn), fS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function qr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, o;
  if (typeof e != "object" && (e = [e]), Bo(e))
    for (s = 0, o = e.length; s < o; s++)
      t.call(null, e[s], s, e);
  else {
    const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = r.length;
    let a;
    for (s = 0; s < i; s++)
      a = r[s], t.call(null, e[a], a, e);
  }
}
function Ug(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, o;
  for (; s-- > 0; )
    if (o = n[s], t === o.toLowerCase())
      return o;
  return null;
}
const xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Hg = (e) => !Pr(e) && e !== xs;
function au() {
  const { caseless: e } = Hg(this) && this || {}, t = {}, n = (s, o) => {
    const r = e && Ug(t, o) || o;
    Ri(t[r]) && Ri(s) ? t[r] = au(t[r], s) : Ri(s) ? t[r] = au({}, s) : Bo(s) ? t[r] = s.slice() : t[r] = s;
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && qr(arguments[s], n);
  return t;
}
const pS = (e, t, n, { allOwnKeys: s } = {}) => (qr(t, (o, r) => {
  n && Rt(o) ? e[r] = Lg(o, n) : e[r] = o;
}, { allOwnKeys: s }), e), hS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), mS = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, gS = (e, t, n, s) => {
  let o, r, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), r = o.length; r-- > 0; )
      i = o[r], (!s || s(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && ec(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, vS = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, _S = (e) => {
  if (!e) return null;
  if (Bo(e)) return e;
  let t = e.length;
  if (!jg(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, yS = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ec(Uint8Array)), ES = (e, t) => {
  const s = (e && e[Ta]).call(e);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const r = o.value;
    t.call(e, r[0], r[1]);
  }
}, bS = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, wS = pn("HTMLFormElement"), AS = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, o) {
    return s.toUpperCase() + o;
  }
), Yf = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), SS = pn("RegExp"), $g = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  qr(n, (o, r) => {
    let i;
    (i = t(o, r, e)) !== !1 && (s[r] = i || o);
  }), Object.defineProperties(e, s);
}, OS = (e) => {
  $g(e, (t, n) => {
    if (Rt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if (Rt(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, CS = (e, t) => {
  const n = {}, s = (o) => {
    o.forEach((r) => {
      n[r] = !0;
    });
  };
  return Bo(e) ? s(e) : s(String(e).split(t)), n;
}, TS = () => {
}, NS = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function DS(e) {
  return !!(e && Rt(e.append) && e[Fg] === "FormData" && e[Ta]);
}
const kS = (e) => {
  const t = new Array(10), n = (s, o) => {
    if (ka(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[o] = s;
        const r = Bo(s) ? [] : {};
        return qr(s, (i, a) => {
          const l = n(i, o + 1);
          !Pr(l) && (r[a] = l);
        }), t[o] = void 0, r;
      }
    }
    return s;
  };
  return n(e, 0);
}, xS = pn("AsyncFunction"), RS = (e) => e && (ka(e) || Rt(e)) && Rt(e.then) && Rt(e.catch), Wg = ((e, t) => e ? setImmediate : t ? ((n, s) => (xs.addEventListener("message", ({ source: o, data: r }) => {
  o === xs && r === n && s.length && s.shift()();
}, !1), (o) => {
  s.push(o), xs.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Rt(xs.postMessage)
), IS = typeof queueMicrotask < "u" ? queueMicrotask.bind(xs) : typeof process < "u" && process.nextTick || Wg, PS = (e) => e != null && Rt(e[Ta]), L = {
  isArray: Bo,
  isArrayBuffer: Bg,
  isBuffer: JA,
  isFormData: iS,
  isArrayBufferView: QA,
  isString: ZA,
  isNumber: jg,
  isBoolean: eS,
  isObject: ka,
  isPlainObject: Ri,
  isReadableStream: lS,
  isRequest: uS,
  isResponse: cS,
  isHeaders: dS,
  isUndefined: Pr,
  isDate: tS,
  isFile: nS,
  isBlob: sS,
  isRegExp: SS,
  isFunction: Rt,
  isStream: rS,
  isURLSearchParams: aS,
  isTypedArray: yS,
  isFileList: oS,
  forEach: qr,
  merge: au,
  extend: pS,
  trim: fS,
  stripBOM: hS,
  inherits: mS,
  toFlatObject: gS,
  kindOf: Na,
  kindOfTest: pn,
  endsWith: vS,
  toArray: _S,
  forEachEntry: ES,
  matchAll: bS,
  isHTMLForm: wS,
  hasOwnProperty: Yf,
  hasOwnProp: Yf,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $g,
  freezeMethods: OS,
  toObjectSet: CS,
  toCamelCase: AS,
  noop: TS,
  toFiniteNumber: NS,
  findKey: Ug,
  global: xs,
  isContextDefined: Hg,
  isSpecCompliantForm: DS,
  toJSONObject: kS,
  isAsyncFn: xS,
  isThenable: RS,
  setImmediate: Wg,
  asap: IS,
  isIterable: PS
};
function De(e, t, n, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), o && (this.response = o, this.status = o.status ? o.status : null);
}
L.inherits(De, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: L.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Kg = De.prototype, zg = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  zg[e] = { value: e };
});
Object.defineProperties(De, zg);
Object.defineProperty(Kg, "isAxiosError", { value: !0 });
De.from = (e, t, n, s, o, r) => {
  const i = Object.create(Kg);
  return L.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), De.call(i, e.message, t, n, s, o), i.cause = e, i.name = e.name, r && Object.assign(i, r), i;
};
const VS = null;
function lu(e) {
  return L.isPlainObject(e) || L.isArray(e);
}
function qg(e) {
  return L.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Xf(e, t, n) {
  return e ? e.concat(t).map(function(o, r) {
    return o = qg(o), !n && r ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function MS(e) {
  return L.isArray(e) && !e.some(lu);
}
const LS = L.toFlatObject(L, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function xa(e, t, n) {
  if (!L.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = L.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, _) {
    return !L.isUndefined(_[m]);
  });
  const s = n.metaTokens, o = n.visitor || u, r = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(t);
  if (!L.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(g) {
    if (g === null) return "";
    if (L.isDate(g))
      return g.toISOString();
    if (L.isBoolean(g))
      return g.toString();
    if (!l && L.isBlob(g))
      throw new De("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(g) || L.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, m, _) {
    let y = g;
    if (g && !_ && typeof g == "object") {
      if (L.endsWith(m, "{}"))
        m = s ? m : m.slice(0, -2), g = JSON.stringify(g);
      else if (L.isArray(g) && MS(g) || (L.isFileList(g) || L.endsWith(m, "[]")) && (y = L.toArray(g)))
        return m = qg(m), y.forEach(function(v, O) {
          !(L.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Xf([m], O, r) : i === null ? m : m + "[]",
            f(v)
          );
        }), !1;
    }
    return lu(g) ? !0 : (t.append(Xf(_, m, r), f(g)), !1);
  }
  const d = [], h = Object.assign(LS, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: lu
  });
  function p(g, m) {
    if (!L.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(g), L.forEach(g, function(y, b) {
        (!(L.isUndefined(y) || y === null) && o.call(
          t,
          y,
          L.isString(b) ? b.trim() : b,
          m,
          h
        )) === !0 && p(y, m ? m.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!L.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Gf(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
    return t[s];
  });
}
function tc(e, t) {
  this._pairs = [], e && xa(e, this, t);
}
const Yg = tc.prototype;
Yg.append = function(t, n) {
  this._pairs.push([t, n]);
};
Yg.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, Gf);
  } : Gf;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function FS(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xg(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || FS;
  L.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let r;
  if (o ? r = o(t, n) : r = L.isURLSearchParams(t) ? t.toString() : new tc(t, n).toString(s), r) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return e;
}
class Jf {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, s) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    L.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const Gg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, BS = typeof URLSearchParams < "u" ? URLSearchParams : tc, jS = typeof FormData < "u" ? FormData : null, US = typeof Blob < "u" ? Blob : null, HS = {
  isBrowser: !0,
  classes: {
    URLSearchParams: BS,
    FormData: jS,
    Blob: US
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, nc = typeof window < "u" && typeof document < "u", uu = typeof navigator == "object" && navigator || void 0, $S = nc && (!uu || ["ReactNative", "NativeScript", "NS"].indexOf(uu.product) < 0), WS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", KS = nc && window.location.href || "http://localhost", zS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: nc,
  hasStandardBrowserEnv: $S,
  hasStandardBrowserWebWorkerEnv: WS,
  navigator: uu,
  origin: KS
}, Symbol.toStringTag, { value: "Module" })), gt = {
  ...zS,
  ...HS
};
function qS(e, t) {
  return xa(e, new gt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, o, r) {
      return gt.isNode && L.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function YS(e) {
  return L.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function XS(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const o = n.length;
  let r;
  for (s = 0; s < o; s++)
    r = n[s], t[r] = e[r];
  return t;
}
function Jg(e) {
  function t(n, s, o, r) {
    let i = n[r++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = r >= n.length;
    return i = !i && L.isArray(o) ? o.length : i, l ? (L.hasOwnProp(o, i) ? o[i] = [o[i], s] : o[i] = s, !a) : ((!o[i] || !L.isObject(o[i])) && (o[i] = []), t(n, s, o[i], r) && L.isArray(o[i]) && (o[i] = XS(o[i])), !a);
  }
  if (L.isFormData(e) && L.isFunction(e.entries)) {
    const n = {};
    return L.forEachEntry(e, (s, o) => {
      t(YS(s), o, n, 0);
    }), n;
  }
  return null;
}
function GS(e, t, n) {
  if (L.isString(e))
    try {
      return (t || JSON.parse)(e), L.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const Yr = {
  transitional: Gg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", o = s.indexOf("application/json") > -1, r = L.isObject(t);
    if (r && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t))
      return o ? JSON.stringify(Jg(t)) : t;
    if (L.isArrayBuffer(t) || L.isBuffer(t) || L.isStream(t) || L.isFile(t) || L.isBlob(t) || L.isReadableStream(t))
      return t;
    if (L.isArrayBufferView(t))
      return t.buffer;
    if (L.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (r) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return qS(t, this.formSerializer).toString();
      if ((a = L.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return xa(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return r || o ? (n.setContentType("application/json", !1), GS(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Yr.transitional, s = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (L.isResponse(t) || L.isReadableStream(t))
      return t;
    if (t && L.isString(t) && (s && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? De.from(a, De.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: gt.classes.FormData,
    Blob: gt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
L.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Yr.headers[e] = {};
});
const JS = L.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), QS = (e) => {
  const t = {};
  let n, s, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), s = i.substring(o + 1).trim(), !(!n || t[n] && JS[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Qf = Symbol("internals");
function Qo(e) {
  return e && String(e).trim().toLowerCase();
}
function Ii(e) {
  return e === !1 || e == null ? e : L.isArray(e) ? e.map(Ii) : String(e);
}
function ZS(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const eO = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function il(e, t, n, s, o) {
  if (L.isFunction(s))
    return s.call(this, t, n);
  if (o && (t = n), !!L.isString(t)) {
    if (L.isString(s))
      return t.indexOf(s) !== -1;
    if (L.isRegExp(s))
      return s.test(t);
  }
}
function tO(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function nO(e, t) {
  const n = L.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function(o, r, i) {
        return this[s].call(this, t, o, r, i);
      },
      configurable: !0
    });
  });
}
let It = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const o = this;
    function r(a, l, f) {
      const u = Qo(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = L.findKey(o, u);
      (!d || o[d] === void 0 || f === !0 || f === void 0 && o[d] !== !1) && (o[d || l] = Ii(a));
    }
    const i = (a, l) => L.forEach(a, (f, u) => r(f, u, l));
    if (L.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (L.isString(t) && (t = t.trim()) && !eO(t))
      i(QS(t), n);
    else if (L.isObject(t) && L.isIterable(t)) {
      let a = {}, l, f;
      for (const u of t) {
        if (!L.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[f = u[0]] = (l = a[f]) ? L.isArray(l) ? [...l, u[1]] : [l, u[1]] : u[1];
      }
      i(a, n);
    } else
      t != null && r(n, t, s);
    return this;
  }
  get(t, n) {
    if (t = Qo(t), t) {
      const s = L.findKey(this, t);
      if (s) {
        const o = this[s];
        if (!n)
          return o;
        if (n === !0)
          return ZS(o);
        if (L.isFunction(n))
          return n.call(this, o, s);
        if (L.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Qo(t), t) {
      const s = L.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || il(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let o = !1;
    function r(i) {
      if (i = Qo(i), i) {
        const a = L.findKey(s, i);
        a && (!n || il(s, s[a], a, n)) && (delete s[a], o = !0);
      }
    }
    return L.isArray(t) ? t.forEach(r) : r(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, o = !1;
    for (; s--; ) {
      const r = n[s];
      (!t || il(this, this[r], r, t, !0)) && (delete this[r], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, s = {};
    return L.forEach(this, (o, r) => {
      const i = L.findKey(s, r);
      if (i) {
        n[i] = Ii(o), delete n[r];
        return;
      }
      const a = t ? tO(r) : String(r).trim();
      a !== r && delete n[r], n[a] = Ii(o), s[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return L.forEach(this, (s, o) => {
      s != null && s !== !1 && (n[o] = t && L.isArray(s) ? s.join(", ") : s);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((o) => s.set(o)), s;
  }
  static accessor(t) {
    const s = (this[Qf] = this[Qf] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function r(i) {
      const a = Qo(i);
      s[a] || (nO(o, i), s[a] = !0);
    }
    return L.isArray(t) ? t.forEach(r) : r(t), this;
  }
};
It.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(It.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
L.freezeMethods(It);
function al(e, t) {
  const n = this || Yr, s = t || n, o = It.from(s.headers);
  let r = s.data;
  return L.forEach(e, function(a) {
    r = a.call(n, r, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), r;
}
function Qg(e) {
  return !!(e && e.__CANCEL__);
}
function jo(e, t, n) {
  De.call(this, e ?? "canceled", De.ERR_CANCELED, t, n), this.name = "CanceledError";
}
L.inherits(jo, De, {
  __CANCEL__: !0
});
function Zg(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new De(
    "Request failed with status code " + n.status,
    [De.ERR_BAD_REQUEST, De.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function sO(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function oO(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let o = 0, r = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const f = Date.now(), u = s[r];
    i || (i = f), n[o] = l, s[o] = f;
    let d = r, h = 0;
    for (; d !== o; )
      h += n[d++], d = d % e;
    if (o = (o + 1) % e, o === r && (r = (r + 1) % e), f - i < t)
      return;
    const p = u && f - u;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function rO(e, t) {
  let n = 0, s = 1e3 / t, o, r;
  const i = (f, u = Date.now()) => {
    n = u, o = null, r && (clearTimeout(r), r = null), e.apply(null, f);
  };
  return [(...f) => {
    const u = Date.now(), d = u - n;
    d >= s ? i(f, u) : (o = f, r || (r = setTimeout(() => {
      r = null, i(o);
    }, s - d)));
  }, () => o && i(o)];
}
const na = (e, t, n = 3) => {
  let s = 0;
  const o = oO(50, 250);
  return rO((r) => {
    const i = r.loaded, a = r.lengthComputable ? r.total : void 0, l = i - s, f = o(l), u = i <= a;
    s = i;
    const d = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: f || void 0,
      estimated: f && a && u ? (a - i) / f : void 0,
      event: r,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, Zf = (e, t) => {
  const n = e != null;
  return [(s) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: s
  }), t[1]];
}, ep = (e) => (...t) => L.asap(() => e(...t)), iO = gt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, gt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(gt.origin),
  gt.navigator && /(msie|trident)/i.test(gt.navigator.userAgent)
) : () => !0, aO = gt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, s, o, r) {
      const i = [e + "=" + encodeURIComponent(t)];
      L.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), L.isString(s) && i.push("path=" + s), L.isString(o) && i.push("domain=" + o), r === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function lO(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function uO(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ev(e, t, n) {
  let s = !lO(t);
  return e && (s || n == !1) ? uO(e, t) : t;
}
const tp = (e) => e instanceof It ? { ...e } : e;
function Ys(e, t) {
  t = t || {};
  const n = {};
  function s(f, u, d, h) {
    return L.isPlainObject(f) && L.isPlainObject(u) ? L.merge.call({ caseless: h }, f, u) : L.isPlainObject(u) ? L.merge({}, u) : L.isArray(u) ? u.slice() : u;
  }
  function o(f, u, d, h) {
    if (L.isUndefined(u)) {
      if (!L.isUndefined(f))
        return s(void 0, f, d, h);
    } else return s(f, u, d, h);
  }
  function r(f, u) {
    if (!L.isUndefined(u))
      return s(void 0, u);
  }
  function i(f, u) {
    if (L.isUndefined(u)) {
      if (!L.isUndefined(f))
        return s(void 0, f);
    } else return s(void 0, u);
  }
  function a(f, u, d) {
    if (d in t)
      return s(f, u);
    if (d in e)
      return s(void 0, f);
  }
  const l = {
    url: r,
    method: r,
    data: r,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (f, u, d) => o(tp(f), tp(u), d, !0)
  };
  return L.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || o, h = d(e[u], t[u], u);
    L.isUndefined(h) && d !== a || (n[u] = h);
  }), n;
}
const tv = (e) => {
  const t = Ys({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: r, headers: i, auth: a } = t;
  t.headers = i = It.from(i), t.url = Xg(ev(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (L.isFormData(n)) {
    if (gt.hasStandardBrowserEnv || gt.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [f, ...u] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...u].join("; "));
    }
  }
  if (gt.hasStandardBrowserEnv && (s && L.isFunction(s) && (s = s(t)), s || s !== !1 && iO(t.url))) {
    const f = o && r && aO.read(r);
    f && i.set(o, f);
  }
  return t;
}, cO = typeof XMLHttpRequest < "u", dO = cO && function(e) {
  return new Promise(function(n, s) {
    const o = tv(e);
    let r = o.data;
    const i = It.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: f } = o, u, d, h, p, g;
    function m() {
      p && p(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let _ = new XMLHttpRequest();
    _.open(o.method.toUpperCase(), o.url, !0), _.timeout = o.timeout;
    function y() {
      if (!_)
        return;
      const v = It.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), S = {
        data: !a || a === "text" || a === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: v,
        config: e,
        request: _
      };
      Zg(function(R) {
        n(R), m();
      }, function(R) {
        s(R), m();
      }, S), _ = null;
    }
    "onloadend" in _ ? _.onloadend = y : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, _.onabort = function() {
      _ && (s(new De("Request aborted", De.ECONNABORTED, e, _)), _ = null);
    }, _.onerror = function() {
      s(new De("Network Error", De.ERR_NETWORK, e, _)), _ = null;
    }, _.ontimeout = function() {
      let O = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const S = o.transitional || Gg;
      o.timeoutErrorMessage && (O = o.timeoutErrorMessage), s(new De(
        O,
        S.clarifyTimeoutError ? De.ETIMEDOUT : De.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, r === void 0 && i.setContentType(null), "setRequestHeader" in _ && L.forEach(i.toJSON(), function(O, S) {
      _.setRequestHeader(S, O);
    }), L.isUndefined(o.withCredentials) || (_.withCredentials = !!o.withCredentials), a && a !== "json" && (_.responseType = o.responseType), f && ([h, g] = na(f, !0), _.addEventListener("progress", h)), l && _.upload && ([d, p] = na(l), _.upload.addEventListener("progress", d), _.upload.addEventListener("loadend", p)), (o.cancelToken || o.signal) && (u = (v) => {
      _ && (s(!v || v.type ? new jo(null, e, _) : v), _.abort(), _ = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = sO(o.url);
    if (b && gt.protocols.indexOf(b) === -1) {
      s(new De("Unsupported protocol " + b + ":", De.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(r || null);
  });
}, fO = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let s = new AbortController(), o;
    const r = function(f) {
      if (!o) {
        o = !0, a();
        const u = f instanceof Error ? f : this.reason;
        s.abort(u instanceof De ? u : new jo(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, r(new De(`timeout ${t} of ms exceeded`, De.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(r) : f.removeEventListener("abort", r);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", r));
    const { signal: l } = s;
    return l.unsubscribe = () => L.asap(a), l;
  }
}, pO = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, o;
  for (; s < n; )
    o = s + t, yield e.slice(s, o), s = o;
}, hO = async function* (e, t) {
  for await (const n of mO(e))
    yield* pO(n, t);
}, mO = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: s } = await t.read();
      if (n)
        break;
      yield s;
    }
  } finally {
    await t.cancel();
  }
}, np = (e, t, n, s) => {
  const o = hO(e, t);
  let r = 0, i, a = (l) => {
    i || (i = !0, s && s(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: f, value: u } = await o.next();
        if (f) {
          a(), l.close();
          return;
        }
        let d = u.byteLength;
        if (n) {
          let h = r += d;
          n(h);
        }
        l.enqueue(new Uint8Array(u));
      } catch (f) {
        throw a(f), f;
      }
    },
    cancel(l) {
      return a(l), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ra = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", nv = Ra && typeof ReadableStream == "function", gO = Ra && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), sv = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, vO = nv && sv(() => {
  let e = !1;
  const t = new Request(gt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), sp = 64 * 1024, cu = nv && sv(() => L.isReadableStream(new Response("").body)), sa = {
  stream: cu && ((e) => e.body)
};
Ra && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !sa[t] && (sa[t] = L.isFunction(e[t]) ? (n) => n[t]() : (n, s) => {
      throw new De(`Response type '${t}' is not supported`, De.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const _O = async (e) => {
  if (e == null)
    return 0;
  if (L.isBlob(e))
    return e.size;
  if (L.isSpecCompliantForm(e))
    return (await new Request(gt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (L.isArrayBufferView(e) || L.isArrayBuffer(e))
    return e.byteLength;
  if (L.isURLSearchParams(e) && (e = e + ""), L.isString(e))
    return (await gO(e)).byteLength;
}, yO = async (e, t) => {
  const n = L.toFiniteNumber(e.getContentLength());
  return n ?? _O(t);
}, EO = Ra && (async (e) => {
  let {
    url: t,
    method: n,
    data: s,
    signal: o,
    cancelToken: r,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: l,
    responseType: f,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: h
  } = tv(e);
  f = f ? (f + "").toLowerCase() : "text";
  let p = fO([o, r && r.toAbortSignal()], i), g;
  const m = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let _;
  try {
    if (l && vO && n !== "get" && n !== "head" && (_ = await yO(u, s)) !== 0) {
      let S = new Request(t, {
        method: "POST",
        body: s,
        duplex: "half"
      }), k;
      if (L.isFormData(s) && (k = S.headers.get("content-type")) && u.setContentType(k), S.body) {
        const [R, I] = Zf(
          _,
          na(ep(l))
        );
        s = np(S.body, sp, R, I);
      }
    }
    L.isString(d) || (d = d ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    g = new Request(t, {
      ...h,
      signal: p,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: s,
      duplex: "half",
      credentials: y ? d : void 0
    });
    let b = await fetch(g, h);
    const v = cu && (f === "stream" || f === "response");
    if (cu && (a || v && m)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((P) => {
        S[P] = b[P];
      });
      const k = L.toFiniteNumber(b.headers.get("content-length")), [R, I] = a && Zf(
        k,
        na(ep(a), !0)
      ) || [];
      b = new Response(
        np(b.body, sp, R, () => {
          I && I(), m && m();
        }),
        S
      );
    }
    f = f || "text";
    let O = await sa[L.findKey(sa, f) || "text"](b, e);
    return !v && m && m(), await new Promise((S, k) => {
      Zg(S, k, {
        data: O,
        headers: It.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: g
      });
    });
  } catch (y) {
    throw m && m(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new De("Network Error", De.ERR_NETWORK, e, g),
      {
        cause: y.cause || y
      }
    ) : De.from(y, y && y.code, e, g);
  }
}), du = {
  http: VS,
  xhr: dO,
  fetch: EO
};
L.forEach(du, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const op = (e) => `- ${e}`, bO = (e) => L.isFunction(e) || e === null || e === !1, ov = {
  getAdapter: (e) => {
    e = L.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, s;
    const o = {};
    for (let r = 0; r < t; r++) {
      n = e[r];
      let i;
      if (s = n, !bO(n) && (s = du[(i = String(n)).toLowerCase()], s === void 0))
        throw new De(`Unknown adapter '${i}'`);
      if (s)
        break;
      o[i || "#" + r] = s;
    }
    if (!s) {
      const r = Object.entries(o).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? r.length > 1 ? `since :
` + r.map(op).join(`
`) : " " + op(r[0]) : "as no adapter specified";
      throw new De(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: du
};
function ll(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new jo(null, e);
}
function rp(e) {
  return ll(e), e.headers = It.from(e.headers), e.data = al.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ov.getAdapter(e.adapter || Yr.adapter)(e).then(function(s) {
    return ll(e), s.data = al.call(
      e,
      e.transformResponse,
      s
    ), s.headers = It.from(s.headers), s;
  }, function(s) {
    return Qg(s) || (ll(e), s && s.response && (s.response.data = al.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = It.from(s.response.headers))), Promise.reject(s);
  });
}
const rv = "1.10.0", Ia = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ia[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ip = {};
Ia.transitional = function(t, n, s) {
  function o(r, i) {
    return "[Axios v" + rv + "] Transitional option '" + r + "'" + i + (s ? ". " + s : "");
  }
  return (r, i, a) => {
    if (t === !1)
      throw new De(
        o(i, " has been removed" + (n ? " in " + n : "")),
        De.ERR_DEPRECATED
      );
    return n && !ip[i] && (ip[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(r, i, a) : !0;
  };
};
Ia.spelling = function(t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function wO(e, t, n) {
  if (typeof e != "object")
    throw new De("options must be an object", De.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let o = s.length;
  for (; o-- > 0; ) {
    const r = s[o], i = t[r];
    if (i) {
      const a = e[r], l = a === void 0 || i(a, r, e);
      if (l !== !0)
        throw new De("option " + r + " must be " + l, De.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new De("Unknown option " + r, De.ERR_BAD_OPTION);
  }
}
const Pi = {
  assertOptions: wO,
  validators: Ia
}, bn = Pi.validators;
let js = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Jf(),
      response: new Jf()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (s) {
      if (s instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const r = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? r && !String(s.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + r) : s.stack = r;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ys(this.defaults, n);
    const { transitional: s, paramsSerializer: o, headers: r } = n;
    s !== void 0 && Pi.assertOptions(s, {
      silentJSONParsing: bn.transitional(bn.boolean),
      forcedJSONParsing: bn.transitional(bn.boolean),
      clarifyTimeoutError: bn.transitional(bn.boolean)
    }, !1), o != null && (L.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Pi.assertOptions(o, {
      encode: bn.function,
      serialize: bn.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Pi.assertOptions(n, {
      baseUrl: bn.spelling("baseURL"),
      withXsrfToken: bn.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = r && L.merge(
      r.common,
      r[n.method]
    );
    r && L.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete r[g];
      }
    ), n.headers = It.concat(i, r);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(m) {
      f.push(m.fulfilled, m.rejected);
    });
    let u, d = 0, h;
    if (!l) {
      const g = [rp.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, f), h = g.length, u = Promise.resolve(n); d < h; )
        u = u.then(g[d++], g[d++]);
      return u;
    }
    h = a.length;
    let p = n;
    for (d = 0; d < h; ) {
      const g = a[d++], m = a[d++];
      try {
        p = g(p);
      } catch (_) {
        m.call(this, _);
        break;
      }
    }
    try {
      u = rp.call(this, p);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, h = f.length; d < h; )
      u = u.then(f[d++], f[d++]);
    return u;
  }
  getUri(t) {
    t = Ys(this.defaults, t);
    const n = ev(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Xg(n, t.params, t.paramsSerializer);
  }
};
L.forEach(["delete", "get", "head", "options"], function(t) {
  js.prototype[t] = function(n, s) {
    return this.request(Ys(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
L.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(r, i, a) {
      return this.request(Ys(a || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: i
      }));
    };
  }
  js.prototype[t] = n(), js.prototype[t + "Form"] = n(!0);
});
let AO = class iv {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(r) {
      n = r;
    });
    const s = this;
    this.promise.then((o) => {
      if (!s._listeners) return;
      let r = s._listeners.length;
      for (; r-- > 0; )
        s._listeners[r](o);
      s._listeners = null;
    }), this.promise.then = (o) => {
      let r;
      const i = new Promise((a) => {
        s.subscribe(a), r = a;
      }).then(o);
      return i.cancel = function() {
        s.unsubscribe(r);
      }, i;
    }, t(function(r, i, a) {
      s.reason || (s.reason = new jo(r, i, a), n(s.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (s) => {
      t.abort(s);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new iv(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function SO(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function OO(e) {
  return L.isObject(e) && e.isAxiosError === !0;
}
const fu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(fu).forEach(([e, t]) => {
  fu[t] = e;
});
function av(e) {
  const t = new js(e), n = Lg(js.prototype.request, t);
  return L.extend(n, js.prototype, t, { allOwnKeys: !0 }), L.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return av(Ys(e, o));
  }, n;
}
const at = av(Yr);
at.Axios = js;
at.CanceledError = jo;
at.CancelToken = AO;
at.isCancel = Qg;
at.VERSION = rv;
at.toFormData = xa;
at.AxiosError = De;
at.Cancel = at.CanceledError;
at.all = function(t) {
  return Promise.all(t);
};
at.spread = SO;
at.isAxiosError = OO;
at.mergeConfig = Ys;
at.AxiosHeaders = It;
at.formToJSON = (e) => Jg(L.isHTMLForm(e) ? new FormData(e) : e);
at.getAdapter = ov.getAdapter;
at.HttpStatusCode = fu;
at.default = at;
const {
  Axios: M4,
  AxiosError: CO,
  CanceledError: L4,
  isCancel: F4,
  CancelToken: B4,
  VERSION: j4,
  all: U4,
  Cancel: H4,
  isAxiosError: $4,
  spread: W4,
  toFormData: K4,
  AxiosHeaders: z4,
  HttpStatusCode: q4,
  formToJSON: Y4,
  getAdapter: X4,
  mergeConfig: G4
} = at, TO = "all_fhir", NO = "api", DO = () => {
  let n = {
    pid: new URLSearchParams(location.search).get("pid"),
    page: NO,
    // content: "externalModule",
    type: "module",
    prefix: TO
  };
  return window.redcap_csrf_token && (n.redcap_csrf_token = window.redcap_csrf_token), n;
}, kO = () => {
  const e = at.create({
    baseURL: "/api/",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest"
      // set header for REDCap ajax
    }
  });
  return e.interceptors.request.use((t) => {
    const n = DO();
    if (t.params = {
      ...t.params || {},
      ...n
    }, t.method?.toUpperCase() === "POST") {
      const s = window.redcap_csrf_token ?? "no csrf token";
      if (t.headers["Content-Type"] === "application/json")
        t.data = {
          ...t.data || {},
          redcap_csrf_token: s
        };
      else {
        const o = new URLSearchParams(t.data || {});
        o.set("redcap_csrf_token", s), t.data = o;
      }
    }
    return t;
  }), e;
}, He = kO(), Ke = {
  getProjectSettings() {
    const e = { route: "project-settings" };
    return He.get("", { params: e });
  },
  updateFhirSystem(e) {
    const t = { route: "project-settings/fhir-system" };
    return He.put("", { fhir_system: e }, { params: t });
  },
  listMrns(e, t) {
    const n = { route: "mrns" };
    return e && (n._page = e), t && (n._per_page = t), He.get("", { params: n });
  },
  addMrns(e) {
    const t = { route: "mrns" };
    return He.post("", { mrns: e }, { params: t });
  },
  // Enhanced MRN and resource management
  getMrnResources(e) {
    const t = { route: `mrns/${e}/resources` };
    return He.get("", { params: t });
  },
  getProjectSummary() {
    const e = { route: "project-summary" };
    return He.get("", { params: e });
  },
  triggerFetchMrns(e, t) {
    const n = { route: "trigger-fetch" }, s = { mrns: e };
    return t && t.length > 0 && (s.resources = t), He.post("", s, { params: n });
  },
  performFullSync() {
    const e = { route: "perform-full-sync" };
    return He.post("", {}, { params: e });
  },
  retryFailedResource(e, t, n) {
    const s = { route: "retry-failed" };
    return He.post("", {
      mrn: e,
      resource_type: t,
      repeat_instance: n,
      bulk: !1
    }, { params: s });
  },
  bulkRetryFailed(e) {
    const t = { route: "retry-failed" }, n = { bulk: !0 };
    return e && (n.resource_type = e), He.post("", n, { params: t });
  },
  retryFailed(e) {
    const t = { route: "retry-failed" };
    return He.post("", e, { params: t });
  },
  // Task management API methods
  listTasks(e, t, n) {
    const s = { route: "tasks" };
    return e && (s.page = e), t && (s.limit = t), n && Object.assign(s, n), He.get("", { params: s });
  },
  getTaskDetails(e) {
    const t = { route: `tasks/${e}` };
    return He.get("", { params: t });
  },
  performTaskFullSync() {
    const e = { route: "tasks/full-sync" };
    return He.post("", {}, { params: e });
  },
  retryFailedResources(e) {
    const t = { route: "tasks/retry-failed" }, n = e ? { filters: e } : {};
    return He.post("", n, { params: t });
  },
  deleteTask(e) {
    const t = { route: `tasks/${e}` };
    return He.delete("", { params: t });
  },
  // Streaming archive API methods
  streamSelectedArchive(e, t) {
    const n = { route: "archives/stream/selected" }, s = { mrns: e, ...t };
    return He.post("", s, {
      params: n,
      responseType: "blob",
      timeout: 0
      // No timeout for streaming
    });
  },
  streamAllArchive(e) {
    const t = { route: "archives/stream/all" };
    return He.post("", e || {}, {
      params: t,
      responseType: "blob",
      timeout: 0
    });
  },
  // Resource content viewing API method
  getResourceContent(e, t, n, s) {
    const o = { route: `records/${e}/resources/${t}/content/${n}` };
    return s && (o.preview_limit = s), He.get("", { params: o });
  },
  // FHIR access status
  getFhirAccessStatus() {
    const e = { route: "fhir-access/status" };
    return He.get("", { params: e });
  },
  // Endpoint parameter schemas
  getEndpointParamsSchemas() {
    const e = { route: "endpoint-params" };
    return He.get("", { params: e });
  },
  getEndpointParamsFor(e) {
    const t = { route: `endpoint-params/${encodeURIComponent(e)}` };
    return He.get("", { params: t });
  },
  // Mapping resources (route-based management)
  listMappingResources() {
    const e = { route: "mapping-resources" };
    return He.get("", { params: e });
  },
  getMappingResource(e) {
    const t = { route: `mapping-resources/${e}` };
    return He.get("", { params: t });
  },
  createMappingResource(e) {
    const t = { route: "mapping-resources" };
    return He.post("", e, { params: t });
  },
  updateMappingResource(e, t) {
    const n = { route: `mapping-resources/${e}` };
    return He.put("", t, { params: n });
  },
  softDeleteMappingResource(e) {
    const t = { route: `mapping-resources/${e}/soft-delete` };
    return He.post("", {}, { params: t });
  },
  restoreMappingResource(e) {
    const t = { route: `mapping-resources/${e}/restore` };
    return He.post("", {}, { params: t });
  },
  purgeDeletedMappingResource(e) {
    const t = { route: `mapping-resources/${e}/purge-deleted` };
    return He.post("", {}, { params: t });
  },
  deleteMappingResource(e) {
    const t = { route: `mapping-resources/${e}` };
    return He.delete("", { params: t });
  },
  importMappingResources(e) {
    const t = { route: "mapping-resources/import" };
    return He.post("", e, { params: t });
  }
}, Qs = /* @__PURE__ */ Pn("errors", () => {
  const e = $([]);
  return {
    errors: e,
    addError: (s, o) => {
      const r = xO(s);
      e.value.push({
        message: r.message,
        source: o,
        timestamp: /* @__PURE__ */ new Date(),
        raw: s
      });
    },
    resetErrors: () => {
      e.value = [];
    }
  };
});
function xO(e) {
  return e instanceof Error ? e : typeof e == "string" ? new Error(e) : typeof e == "object" && e !== null && "message" in e ? new Error(String(e.message)) : new Error("Unknown error");
}
const Vr = /* @__PURE__ */ Pn("endpointParams", () => {
  const e = Qs(), t = $({}), n = $(!1), s = $(null), o = $({}), r = async () => {
    try {
      const d = (await Ke.getEndpointParamsSchemas()).data?.schemas || {};
      t.value = d, n.value = !0;
    } catch (u) {
      e.addError(u, "endpointParamsStore.fetchSchemas"), t.value = {}, n.value = !1;
    }
  }, i = (u) => t.value?.[u] || [];
  return {
    // state
    schemas: t,
    loaded: n,
    draft: o,
    currentResourceSpec: s,
    // actions
    fetchSchemas: r,
    getSchema: i,
    prepareDraftFor: (u, d) => {
      s.value = u;
      const h = i(u), p = {};
      h.forEach((g) => {
        g.default !== void 0 && (p[g.key] = g.default);
      }), d && Object.assign(p, d), o.value = p;
    },
    updateDraftField: (u, d) => {
      o.value = { ...o.value, [u]: d };
    },
    resetDraft: () => {
      o.value = {}, s.value = null;
    }
  };
});
var Ct = "top", Ut = "bottom", Ht = "right", Tt = "left", Pa = "auto", Uo = [Ct, Ut, Ht, Tt], Xs = "start", Do = "end", lv = "clippingParents", sc = "viewport", fo = "popper", uv = "reference", pu = /* @__PURE__ */ Uo.reduce(function(e, t) {
  return e.concat([t + "-" + Xs, t + "-" + Do]);
}, []), oc = /* @__PURE__ */ [].concat(Uo, [Pa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Xs, t + "-" + Do]);
}, []), cv = "beforeRead", dv = "read", fv = "afterRead", pv = "beforeMain", hv = "main", mv = "afterMain", gv = "beforeWrite", vv = "write", _v = "afterWrite", yv = [cv, dv, fv, pv, hv, mv, gv, vv, _v];
function Rn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function $t(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Gs(e) {
  var t = $t(e).Element;
  return e instanceof t || e instanceof Element;
}
function qt(e) {
  var t = $t(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function rc(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = $t(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function RO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var s = t.styles[n] || {}, o = t.attributes[n] || {}, r = t.elements[n];
    !qt(r) || !Rn(r) || (Object.assign(r.style, s), Object.keys(o).forEach(function(i) {
      var a = o[i];
      a === !1 ? r.removeAttribute(i) : r.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function IO(e) {
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
    Object.keys(t.elements).forEach(function(s) {
      var o = t.elements[s], r = t.attributes[s] || {}, i = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : n[s]), a = i.reduce(function(l, f) {
        return l[f] = "", l;
      }, {});
      !qt(o) || !Rn(o) || (Object.assign(o.style, a), Object.keys(r).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const ic = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: RO,
  effect: IO,
  requires: ["computeStyles"]
};
function Nn(e) {
  return e.split("-")[0];
}
var Us = Math.max, oa = Math.min, ko = Math.round;
function hu() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ev() {
  return !/^((?!chrome|android).)*safari/i.test(hu());
}
function xo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var s = e.getBoundingClientRect(), o = 1, r = 1;
  t && qt(e) && (o = e.offsetWidth > 0 && ko(s.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && ko(s.height) / e.offsetHeight || 1);
  var i = Gs(e) ? $t(e) : window, a = i.visualViewport, l = !Ev() && n, f = (s.left + (l && a ? a.offsetLeft : 0)) / o, u = (s.top + (l && a ? a.offsetTop : 0)) / r, d = s.width / o, h = s.height / r;
  return {
    width: d,
    height: h,
    top: u,
    right: f + d,
    bottom: u + h,
    left: f,
    x: f,
    y: u
  };
}
function ac(e) {
  var t = xo(e), n = e.offsetWidth, s = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: s
  };
}
function bv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && rc(n)) {
    var s = t;
    do {
      if (s && e.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function qn(e) {
  return $t(e).getComputedStyle(e);
}
function PO(e) {
  return ["table", "td", "th"].indexOf(Rn(e)) >= 0;
}
function vs(e) {
  return ((Gs(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Va(e) {
  return Rn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (rc(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    vs(e)
  );
}
function ap(e) {
  return !qt(e) || // https://github.com/popperjs/popper-core/issues/837
  qn(e).position === "fixed" ? null : e.offsetParent;
}
function VO(e) {
  var t = /firefox/i.test(hu()), n = /Trident/i.test(hu());
  if (n && qt(e)) {
    var s = qn(e);
    if (s.position === "fixed")
      return null;
  }
  var o = Va(e);
  for (rc(o) && (o = o.host); qt(o) && ["html", "body"].indexOf(Rn(o)) < 0; ) {
    var r = qn(o);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Xr(e) {
  for (var t = $t(e), n = ap(e); n && PO(n) && qn(n).position === "static"; )
    n = ap(n);
  return n && (Rn(n) === "html" || Rn(n) === "body" && qn(n).position === "static") ? t : n || VO(e) || t;
}
function lc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function gr(e, t, n) {
  return Us(e, oa(t, n));
}
function MO(e, t, n) {
  var s = gr(e, t, n);
  return s > n ? n : s;
}
function wv() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Av(e) {
  return Object.assign({}, wv(), e);
}
function Sv(e, t) {
  return t.reduce(function(n, s) {
    return n[s] = e, n;
  }, {});
}
var LO = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Av(typeof t != "number" ? t : Sv(t, Uo));
};
function FO(e) {
  var t, n = e.state, s = e.name, o = e.options, r = n.elements.arrow, i = n.modifiersData.popperOffsets, a = Nn(n.placement), l = lc(a), f = [Tt, Ht].indexOf(a) >= 0, u = f ? "height" : "width";
  if (!(!r || !i)) {
    var d = LO(o.padding, n), h = ac(r), p = l === "y" ? Ct : Tt, g = l === "y" ? Ut : Ht, m = n.rects.reference[u] + n.rects.reference[l] - i[l] - n.rects.popper[u], _ = i[l] - n.rects.reference[l], y = Xr(r), b = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, v = m / 2 - _ / 2, O = d[p], S = b - h[u] - d[g], k = b / 2 - h[u] / 2 + v, R = gr(O, k, S), I = l;
    n.modifiersData[s] = (t = {}, t[I] = R, t.centerOffset = R - k, t);
  }
}
function BO(e) {
  var t = e.state, n = e.options, s = n.element, o = s === void 0 ? "[data-popper-arrow]" : s;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || bv(t.elements.popper, o) && (t.elements.arrow = o));
}
const Ov = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: FO,
  effect: BO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ro(e) {
  return e.split("-")[1];
}
var jO = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function UO(e, t) {
  var n = e.x, s = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ko(n * o) / o || 0,
    y: ko(s * o) / o || 0
  };
}
function lp(e) {
  var t, n = e.popper, s = e.popperRect, o = e.placement, r = e.variation, i = e.offsets, a = e.position, l = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, d = e.isFixed, h = i.x, p = h === void 0 ? 0 : h, g = i.y, m = g === void 0 ? 0 : g, _ = typeof u == "function" ? u({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = _.x, m = _.y;
  var y = i.hasOwnProperty("x"), b = i.hasOwnProperty("y"), v = Tt, O = Ct, S = window;
  if (f) {
    var k = Xr(n), R = "clientHeight", I = "clientWidth";
    if (k === $t(n) && (k = vs(n), qn(k).position !== "static" && a === "absolute" && (R = "scrollHeight", I = "scrollWidth")), k = k, o === Ct || (o === Tt || o === Ht) && r === Do) {
      O = Ut;
      var P = d && k === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      m -= P - s.height, m *= l ? 1 : -1;
    }
    if (o === Tt || (o === Ct || o === Ut) && r === Do) {
      v = Ht;
      var T = d && k === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[I]
      );
      p -= T - s.width, p *= l ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: a
  }, f && jO), A = u === !0 ? UO({
    x: p,
    y: m
  }, $t(n)) : {
    x: p,
    y: m
  };
  if (p = A.x, m = A.y, l) {
    var Y;
    return Object.assign({}, N, (Y = {}, Y[O] = b ? "0" : "", Y[v] = y ? "0" : "", Y.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", Y));
  }
  return Object.assign({}, N, (t = {}, t[O] = b ? m + "px" : "", t[v] = y ? p + "px" : "", t.transform = "", t));
}
function HO(e) {
  var t = e.state, n = e.options, s = n.gpuAcceleration, o = s === void 0 ? !0 : s, r = n.adaptive, i = r === void 0 ? !0 : r, a = n.roundOffsets, l = a === void 0 ? !0 : a, f = {
    placement: Nn(t.placement),
    variation: Ro(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, lp(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, lp(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const uc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: HO,
  data: {}
};
var li = {
  passive: !0
};
function $O(e) {
  var t = e.state, n = e.instance, s = e.options, o = s.scroll, r = o === void 0 ? !0 : o, i = s.resize, a = i === void 0 ? !0 : i, l = $t(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && f.forEach(function(u) {
    u.addEventListener("scroll", n.update, li);
  }), a && l.addEventListener("resize", n.update, li), function() {
    r && f.forEach(function(u) {
      u.removeEventListener("scroll", n.update, li);
    }), a && l.removeEventListener("resize", n.update, li);
  };
}
const cc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: $O,
  data: {}
};
var WO = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Vi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return WO[t];
  });
}
var KO = {
  start: "end",
  end: "start"
};
function up(e) {
  return e.replace(/start|end/g, function(t) {
    return KO[t];
  });
}
function dc(e) {
  var t = $t(e), n = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: s
  };
}
function fc(e) {
  return xo(vs(e)).left + dc(e).scrollLeft;
}
function zO(e, t) {
  var n = $t(e), s = vs(e), o = n.visualViewport, r = s.clientWidth, i = s.clientHeight, a = 0, l = 0;
  if (o) {
    r = o.width, i = o.height;
    var f = Ev();
    (f || !f && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: r,
    height: i,
    x: a + fc(e),
    y: l
  };
}
function qO(e) {
  var t, n = vs(e), s = dc(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, r = Us(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Us(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -s.scrollLeft + fc(e), l = -s.scrollTop;
  return qn(o || n).direction === "rtl" && (a += Us(n.clientWidth, o ? o.clientWidth : 0) - r), {
    width: r,
    height: i,
    x: a,
    y: l
  };
}
function pc(e) {
  var t = qn(e), n = t.overflow, s = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + s);
}
function Cv(e) {
  return ["html", "body", "#document"].indexOf(Rn(e)) >= 0 ? e.ownerDocument.body : qt(e) && pc(e) ? e : Cv(Va(e));
}
function vr(e, t) {
  var n;
  t === void 0 && (t = []);
  var s = Cv(e), o = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = $t(s), i = o ? [r].concat(r.visualViewport || [], pc(s) ? s : []) : s, a = t.concat(i);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(vr(Va(i)))
  );
}
function mu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function YO(e, t) {
  var n = xo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function cp(e, t, n) {
  return t === sc ? mu(zO(e, n)) : Gs(t) ? YO(t, n) : mu(qO(vs(e)));
}
function XO(e) {
  var t = vr(Va(e)), n = ["absolute", "fixed"].indexOf(qn(e).position) >= 0, s = n && qt(e) ? Xr(e) : e;
  return Gs(s) ? t.filter(function(o) {
    return Gs(o) && bv(o, s) && Rn(o) !== "body";
  }) : [];
}
function GO(e, t, n, s) {
  var o = t === "clippingParents" ? XO(e) : [].concat(t), r = [].concat(o, [n]), i = r[0], a = r.reduce(function(l, f) {
    var u = cp(e, f, s);
    return l.top = Us(u.top, l.top), l.right = oa(u.right, l.right), l.bottom = oa(u.bottom, l.bottom), l.left = Us(u.left, l.left), l;
  }, cp(e, i, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Tv(e) {
  var t = e.reference, n = e.element, s = e.placement, o = s ? Nn(s) : null, r = s ? Ro(s) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Ct:
      l = {
        x: i,
        y: t.y - n.height
      };
      break;
    case Ut:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case Ht:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case Tt:
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
  var f = o ? lc(o) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (r) {
      case Xs:
        l[f] = l[f] - (t[u] / 2 - n[u] / 2);
        break;
      case Do:
        l[f] = l[f] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Io(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = s === void 0 ? e.placement : s, r = n.strategy, i = r === void 0 ? e.strategy : r, a = n.boundary, l = a === void 0 ? lv : a, f = n.rootBoundary, u = f === void 0 ? sc : f, d = n.elementContext, h = d === void 0 ? fo : d, p = n.altBoundary, g = p === void 0 ? !1 : p, m = n.padding, _ = m === void 0 ? 0 : m, y = Av(typeof _ != "number" ? _ : Sv(_, Uo)), b = h === fo ? uv : fo, v = e.rects.popper, O = e.elements[g ? b : h], S = GO(Gs(O) ? O : O.contextElement || vs(e.elements.popper), l, u, i), k = xo(e.elements.reference), R = Tv({
    reference: k,
    element: v,
    placement: o
  }), I = mu(Object.assign({}, v, R)), P = h === fo ? I : k, T = {
    top: S.top - P.top + y.top,
    bottom: P.bottom - S.bottom + y.bottom,
    left: S.left - P.left + y.left,
    right: P.right - S.right + y.right
  }, N = e.modifiersData.offset;
  if (h === fo && N) {
    var A = N[o];
    Object.keys(T).forEach(function(Y) {
      var fe = [Ht, Ut].indexOf(Y) >= 0 ? 1 : -1, J = [Ct, Ut].indexOf(Y) >= 0 ? "y" : "x";
      T[Y] += A[J] * fe;
    });
  }
  return T;
}
function JO(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = n.boundary, r = n.rootBoundary, i = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, f = l === void 0 ? oc : l, u = Ro(s), d = u ? a ? pu : pu.filter(function(g) {
    return Ro(g) === u;
  }) : Uo, h = d.filter(function(g) {
    return f.indexOf(g) >= 0;
  });
  h.length === 0 && (h = d);
  var p = h.reduce(function(g, m) {
    return g[m] = Io(e, {
      placement: m,
      boundary: o,
      rootBoundary: r,
      padding: i
    })[Nn(m)], g;
  }, {});
  return Object.keys(p).sort(function(g, m) {
    return p[g] - p[m];
  });
}
function QO(e) {
  if (Nn(e) === Pa)
    return [];
  var t = Vi(e);
  return [up(e), t, up(t)];
}
function ZO(e) {
  var t = e.state, n = e.options, s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (var o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !0 : i, l = n.fallbackPlacements, f = n.padding, u = n.boundary, d = n.rootBoundary, h = n.altBoundary, p = n.flipVariations, g = p === void 0 ? !0 : p, m = n.allowedAutoPlacements, _ = t.options.placement, y = Nn(_), b = y === _, v = l || (b || !g ? [Vi(_)] : QO(_)), O = [_].concat(v).reduce(function(Pe, Me) {
      return Pe.concat(Nn(Me) === Pa ? JO(t, {
        placement: Me,
        boundary: u,
        rootBoundary: d,
        padding: f,
        flipVariations: g,
        allowedAutoPlacements: m
      }) : Me);
    }, []), S = t.rects.reference, k = t.rects.popper, R = /* @__PURE__ */ new Map(), I = !0, P = O[0], T = 0; T < O.length; T++) {
      var N = O[T], A = Nn(N), Y = Ro(N) === Xs, fe = [Ct, Ut].indexOf(A) >= 0, J = fe ? "width" : "height", se = Io(t, {
        placement: N,
        boundary: u,
        rootBoundary: d,
        altBoundary: h,
        padding: f
      }), W = fe ? Y ? Ht : Tt : Y ? Ut : Ct;
      S[J] > k[J] && (W = Vi(W));
      var M = Vi(W), X = [];
      if (r && X.push(se[A] <= 0), a && X.push(se[W] <= 0, se[M] <= 0), X.every(function(Pe) {
        return Pe;
      })) {
        P = N, I = !1;
        break;
      }
      R.set(N, X);
    }
    if (I)
      for (var _e = g ? 3 : 1, Ee = function(Me) {
        var nt = O.find(function(B) {
          var re = R.get(B);
          if (re)
            return re.slice(0, Me).every(function(ae) {
              return ae;
            });
        });
        if (nt)
          return P = nt, "break";
      }, we = _e; we > 0; we--) {
        var Re = Ee(we);
        if (Re === "break") break;
      }
    t.placement !== P && (t.modifiersData[s]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const Nv = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ZO,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function dp(e, t, n) {
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
function fp(e) {
  return [Ct, Ht, Ut, Tt].some(function(t) {
    return e[t] >= 0;
  });
}
function eC(e) {
  var t = e.state, n = e.name, s = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, i = Io(t, {
    elementContext: "reference"
  }), a = Io(t, {
    altBoundary: !0
  }), l = dp(i, s), f = dp(a, o, r), u = fp(l), d = fp(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: f,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const Dv = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: eC
};
function tC(e, t, n) {
  var s = Nn(e), o = [Tt, Ct].indexOf(s) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = r[0], a = r[1];
  return i = i || 0, a = (a || 0) * o, [Tt, Ht].indexOf(s) >= 0 ? {
    x: a,
    y: i
  } : {
    x: i,
    y: a
  };
}
function nC(e) {
  var t = e.state, n = e.options, s = e.name, o = n.offset, r = o === void 0 ? [0, 0] : o, i = oc.reduce(function(u, d) {
    return u[d] = tC(d, t.rects, r), u;
  }, {}), a = i[t.placement], l = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += f), t.modifiersData[s] = i;
}
const kv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: nC
};
function sC(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Tv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const hc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: sC,
  data: {}
};
function oC(e) {
  return e === "x" ? "y" : "x";
}
function rC(e) {
  var t = e.state, n = e.options, s = e.name, o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !1 : i, l = n.boundary, f = n.rootBoundary, u = n.altBoundary, d = n.padding, h = n.tether, p = h === void 0 ? !0 : h, g = n.tetherOffset, m = g === void 0 ? 0 : g, _ = Io(t, {
    boundary: l,
    rootBoundary: f,
    padding: d,
    altBoundary: u
  }), y = Nn(t.placement), b = Ro(t.placement), v = !b, O = lc(y), S = oC(O), k = t.modifiersData.popperOffsets, R = t.rects.reference, I = t.rects.popper, P = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, T = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (k) {
    if (r) {
      var Y, fe = O === "y" ? Ct : Tt, J = O === "y" ? Ut : Ht, se = O === "y" ? "height" : "width", W = k[O], M = W + _[fe], X = W - _[J], _e = p ? -I[se] / 2 : 0, Ee = b === Xs ? R[se] : I[se], we = b === Xs ? -I[se] : -R[se], Re = t.elements.arrow, Pe = p && Re ? ac(Re) : {
        width: 0,
        height: 0
      }, Me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : wv(), nt = Me[fe], B = Me[J], re = gr(0, R[se], Pe[se]), ae = v ? R[se] / 2 - _e - re - nt - T.mainAxis : Ee - re - nt - T.mainAxis, pe = v ? -R[se] / 2 + _e + re + B + T.mainAxis : we + re + B + T.mainAxis, ke = t.elements.arrow && Xr(t.elements.arrow), Qe = ke ? O === "y" ? ke.clientTop || 0 : ke.clientLeft || 0 : 0, E = (Y = N?.[O]) != null ? Y : 0, w = W + ae - E - Qe, V = W + pe - E, K = gr(p ? oa(M, w) : M, W, p ? Us(X, V) : X);
      k[O] = K, A[O] = K - W;
    }
    if (a) {
      var j, z = O === "x" ? Ct : Tt, ie = O === "x" ? Ut : Ht, te = k[S], ne = S === "y" ? "height" : "width", Q = te + _[z], ve = te - _[ie], oe = [Ct, Tt].indexOf(y) !== -1, ge = (j = N?.[S]) != null ? j : 0, Ae = oe ? Q : te - R[ne] - I[ne] - ge + T.altAxis, Ie = oe ? te + R[ne] + I[ne] - ge - T.altAxis : ve, $e = p && oe ? MO(Ae, te, Ie) : gr(p ? Ae : Q, te, p ? Ie : ve);
      k[S] = $e, A[S] = $e - te;
    }
    t.modifiersData[s] = A;
  }
}
const xv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: rC,
  requiresIfExists: ["offset"]
};
function iC(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function aC(e) {
  return e === $t(e) || !qt(e) ? dc(e) : iC(e);
}
function lC(e) {
  var t = e.getBoundingClientRect(), n = ko(t.width) / e.offsetWidth || 1, s = ko(t.height) / e.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function uC(e, t, n) {
  n === void 0 && (n = !1);
  var s = qt(t), o = qt(t) && lC(t), r = vs(t), i = xo(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (s || !s && !n) && ((Rn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  pc(r)) && (a = aC(t)), qt(t) ? (l = xo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : r && (l.x = fc(r))), {
    x: i.left + a.scrollLeft - l.x,
    y: i.top + a.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function cC(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), s = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function o(r) {
    n.add(r.name);
    var i = [].concat(r.requires || [], r.requiresIfExists || []);
    i.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }), s.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || o(r);
  }), s;
}
function dC(e) {
  var t = cC(e);
  return yv.reduce(function(n, s) {
    return n.concat(t.filter(function(o) {
      return o.phase === s;
    }));
  }, []);
}
function fC(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function pC(e) {
  var t = e.reduce(function(n, s) {
    var o = n[s.name];
    return n[s.name] = o ? Object.assign({}, o, s, {
      options: Object.assign({}, o.options, s.options),
      data: Object.assign({}, o.data, s.data)
    }) : s, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var pp = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function hp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function Ma(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, s = n === void 0 ? [] : n, o = t.defaultOptions, r = o === void 0 ? pp : o;
  return function(a, l, f) {
    f === void 0 && (f = r);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, pp, r),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], h = !1, p = {
      state: u,
      setOptions: function(y) {
        var b = typeof y == "function" ? y(u.options) : y;
        m(), u.options = Object.assign({}, r, u.options, b), u.scrollParents = {
          reference: Gs(a) ? vr(a) : a.contextElement ? vr(a.contextElement) : [],
          popper: vr(l)
        };
        var v = dC(pC([].concat(s, u.options.modifiers)));
        return u.orderedModifiers = v.filter(function(O) {
          return O.enabled;
        }), g(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var y = u.elements, b = y.reference, v = y.popper;
          if (hp(b, v)) {
            u.rects = {
              reference: uC(b, Xr(v), u.options.strategy === "fixed"),
              popper: ac(v)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(T) {
              return u.modifiersData[T.name] = Object.assign({}, T.data);
            });
            for (var O = 0; O < u.orderedModifiers.length; O++) {
              if (u.reset === !0) {
                u.reset = !1, O = -1;
                continue;
              }
              var S = u.orderedModifiers[O], k = S.fn, R = S.options, I = R === void 0 ? {} : R, P = S.name;
              typeof k == "function" && (u = k({
                state: u,
                options: I,
                name: P,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: fC(function() {
        return new Promise(function(_) {
          p.forceUpdate(), _(u);
        });
      }),
      destroy: function() {
        m(), h = !0;
      }
    };
    if (!hp(a, l))
      return p;
    p.setOptions(f).then(function(_) {
      !h && f.onFirstUpdate && f.onFirstUpdate(_);
    });
    function g() {
      u.orderedModifiers.forEach(function(_) {
        var y = _.name, b = _.options, v = b === void 0 ? {} : b, O = _.effect;
        if (typeof O == "function") {
          var S = O({
            state: u,
            name: y,
            instance: p,
            options: v
          }), k = function() {
          };
          d.push(S || k);
        }
      });
    }
    function m() {
      d.forEach(function(_) {
        return _();
      }), d = [];
    }
    return p;
  };
}
var hC = /* @__PURE__ */ Ma(), mC = [cc, hc, uc, ic], gC = /* @__PURE__ */ Ma({
  defaultModifiers: mC
}), vC = [cc, hc, uc, ic, kv, Nv, xv, Ov, Dv], mc = /* @__PURE__ */ Ma({
  defaultModifiers: vC
});
const Rv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: mv,
  afterRead: fv,
  afterWrite: _v,
  applyStyles: ic,
  arrow: Ov,
  auto: Pa,
  basePlacements: Uo,
  beforeMain: pv,
  beforeRead: cv,
  beforeWrite: gv,
  bottom: Ut,
  clippingParents: lv,
  computeStyles: uc,
  createPopper: mc,
  createPopperBase: hC,
  createPopperLite: gC,
  detectOverflow: Io,
  end: Do,
  eventListeners: cc,
  flip: Nv,
  hide: Dv,
  left: Tt,
  main: hv,
  modifierPhases: yv,
  offset: kv,
  placements: oc,
  popper: fo,
  popperGenerator: Ma,
  popperOffsets: hc,
  preventOverflow: xv,
  read: dv,
  reference: uv,
  right: Ht,
  start: Xs,
  top: Ct,
  variationPlacements: pu,
  viewport: sc,
  write: vv
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const es = /* @__PURE__ */ new Map(), ul = {
  set(e, t, n) {
    es.has(e) || es.set(e, /* @__PURE__ */ new Map());
    const s = es.get(e);
    if (!s.has(t) && s.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
      return;
    }
    s.set(t, n);
  },
  get(e, t) {
    return es.has(e) && es.get(e).get(t) || null;
  },
  remove(e, t) {
    if (!es.has(e))
      return;
    const n = es.get(e);
    n.delete(t), n.size === 0 && es.delete(e);
  }
}, _C = 1e6, yC = 1e3, gu = "transitionend", Iv = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)), e), EC = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), bC = (e) => {
  do
    e += Math.floor(Math.random() * _C);
  while (document.getElementById(e));
  return e;
}, wC = (e) => {
  if (!e)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: n
  } = window.getComputedStyle(e);
  const s = Number.parseFloat(t), o = Number.parseFloat(n);
  return !s && !o ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * yC);
}, Pv = (e) => {
  e.dispatchEvent(new Event(gu));
}, Wn = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), ps = (e) => Wn(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(Iv(e)) : null, Ho = (e) => {
  if (!Wn(e) || e.getClientRects().length === 0)
    return !1;
  const t = getComputedStyle(e).getPropertyValue("visibility") === "visible", n = e.closest("details:not([open])");
  if (!n)
    return t;
  if (n !== e) {
    const s = e.closest("summary");
    if (s && s.parentNode !== n || s === null)
      return !1;
  }
  return t;
}, hs = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Vv = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? Vv(e.parentNode) : null;
}, ra = () => {
}, Gr = (e) => {
  e.offsetHeight;
}, Mv = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, cl = [], AC = (e) => {
  document.readyState === "loading" ? (cl.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of cl)
      t();
  }), cl.push(e)) : e();
}, Gt = () => document.documentElement.dir === "rtl", Zt = (e) => {
  AC(() => {
    const t = Mv();
    if (t) {
      const n = e.NAME, s = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = s, e.jQueryInterface);
    }
  });
}, xt = (e, t = [], n = e) => typeof e == "function" ? e.call(...t) : n, Lv = (e, t, n = !0) => {
  if (!n) {
    xt(e);
    return;
  }
  const o = wC(t) + 5;
  let r = !1;
  const i = ({
    target: a
  }) => {
    a === t && (r = !0, t.removeEventListener(gu, i), xt(e));
  };
  t.addEventListener(gu, i), setTimeout(() => {
    r || Pv(t);
  }, o);
}, gc = (e, t, n, s) => {
  const o = e.length;
  let r = e.indexOf(t);
  return r === -1 ? !n && s ? e[o - 1] : e[0] : (r += n ? 1 : -1, s && (r = (r + o) % o), e[Math.max(0, Math.min(r, o - 1))]);
}, SC = /[^.]*(?=\..*)\.|.*/, OC = /\..*/, CC = /::\d+$/, dl = {};
let mp = 1;
const Fv = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, TC = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Bv(e, t) {
  return t && `${t}::${mp++}` || e.uidEvent || mp++;
}
function jv(e) {
  const t = Bv(e);
  return e.uidEvent = t, dl[t] = dl[t] || {}, dl[t];
}
function NC(e, t) {
  return function n(s) {
    return vc(s, {
      delegateTarget: e
    }), n.oneOff && G.off(e, s.type, t), t.apply(e, [s]);
  };
}
function DC(e, t, n) {
  return function s(o) {
    const r = e.querySelectorAll(t);
    for (let {
      target: i
    } = o; i && i !== this; i = i.parentNode)
      for (const a of r)
        if (a === i)
          return vc(o, {
            delegateTarget: i
          }), s.oneOff && G.off(e, o.type, t, n), n.apply(i, [o]);
  };
}
function Uv(e, t, n = null) {
  return Object.values(e).find((s) => s.callable === t && s.delegationSelector === n);
}
function Hv(e, t, n) {
  const s = typeof t == "string", o = s ? n : t || n;
  let r = $v(e);
  return TC.has(r) || (r = e), [s, o, r];
}
function gp(e, t, n, s, o) {
  if (typeof t != "string" || !e)
    return;
  let [r, i, a] = Hv(t, n, s);
  t in Fv && (i = ((g) => function(m) {
    if (!m.relatedTarget || m.relatedTarget !== m.delegateTarget && !m.delegateTarget.contains(m.relatedTarget))
      return g.call(this, m);
  })(i));
  const l = jv(e), f = l[a] || (l[a] = {}), u = Uv(f, i, r ? n : null);
  if (u) {
    u.oneOff = u.oneOff && o;
    return;
  }
  const d = Bv(i, t.replace(SC, "")), h = r ? DC(e, n, i) : NC(e, i);
  h.delegationSelector = r ? n : null, h.callable = i, h.oneOff = o, h.uidEvent = d, f[d] = h, e.addEventListener(a, h, r);
}
function vu(e, t, n, s, o) {
  const r = Uv(t[n], s, o);
  r && (e.removeEventListener(n, r, !!o), delete t[n][r.uidEvent]);
}
function kC(e, t, n, s) {
  const o = t[n] || {};
  for (const [r, i] of Object.entries(o))
    r.includes(s) && vu(e, t, n, i.callable, i.delegationSelector);
}
function $v(e) {
  return e = e.replace(OC, ""), Fv[e] || e;
}
const G = {
  on(e, t, n, s) {
    gp(e, t, n, s, !1);
  },
  one(e, t, n, s) {
    gp(e, t, n, s, !0);
  },
  off(e, t, n, s) {
    if (typeof t != "string" || !e)
      return;
    const [o, r, i] = Hv(t, n, s), a = i !== t, l = jv(e), f = l[i] || {}, u = t.startsWith(".");
    if (typeof r < "u") {
      if (!Object.keys(f).length)
        return;
      vu(e, l, i, r, o ? n : null);
      return;
    }
    if (u)
      for (const d of Object.keys(l))
        kC(e, l, d, t.slice(1));
    for (const [d, h] of Object.entries(f)) {
      const p = d.replace(CC, "");
      (!a || t.includes(p)) && vu(e, l, i, h.callable, h.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const s = Mv(), o = $v(t), r = t !== o;
    let i = null, a = !0, l = !0, f = !1;
    r && s && (i = s.Event(t, n), s(e).trigger(i), a = !i.isPropagationStopped(), l = !i.isImmediatePropagationStopped(), f = i.isDefaultPrevented());
    const u = vc(new Event(t, {
      bubbles: a,
      cancelable: !0
    }), n);
    return f && u.preventDefault(), l && e.dispatchEvent(u), u.defaultPrevented && i && i.preventDefault(), u;
  }
};
function vc(e, t = {}) {
  for (const [n, s] of Object.entries(t))
    try {
      e[n] = s;
    } catch {
      Object.defineProperty(e, n, {
        configurable: !0,
        get() {
          return s;
        }
      });
    }
  return e;
}
function vp(e) {
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
function fl(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Kn = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${fl(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${fl(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {}, n = Object.keys(e.dataset).filter((s) => s.startsWith("bs") && !s.startsWith("bsConfig"));
    for (const s of n) {
      let o = s.replace(/^bs/, "");
      o = o.charAt(0).toLowerCase() + o.slice(1), t[o] = vp(e.dataset[s]);
    }
    return t;
  },
  getDataAttribute(e, t) {
    return vp(e.getAttribute(`data-bs-${fl(t)}`));
  }
};
class Jr {
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
    const s = Wn(n) ? Kn.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof s == "object" ? s : {},
      ...Wn(n) ? Kn.getDataAttributes(n) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [s, o] of Object.entries(n)) {
      const r = t[s], i = Wn(r) ? "element" : EC(r);
      if (!new RegExp(o).test(i))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${i}" but expected type "${o}".`);
    }
  }
}
const xC = "5.3.7";
class hn extends Jr {
  constructor(t, n) {
    super(), t = ps(t), t && (this._element = t, this._config = this._getConfig(n), ul.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    ul.remove(this._element, this.constructor.DATA_KEY), G.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  // Private
  _queueCallback(t, n, s = !0) {
    Lv(t, n, s);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return ul.get(ps(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return xC;
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
const pl = (e) => {
  let t = e.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith("."))
      return null;
    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
  }
  return t ? t.split(",").map((n) => Iv(n)).join(",") : null;
}, ye = {
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
    let s = e.parentNode.closest(t);
    for (; s; )
      n.push(s), s = s.parentNode.closest(t);
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
    return this.find(t, e).filter((n) => !hs(n) && Ho(n));
  },
  getSelectorFromElement(e) {
    const t = pl(e);
    return t && ye.findOne(t) ? t : null;
  },
  getElementFromSelector(e) {
    const t = pl(e);
    return t ? ye.findOne(t) : null;
  },
  getMultipleElementsFromSelector(e) {
    const t = pl(e);
    return t ? ye.find(t) : [];
  }
}, La = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, s = e.NAME;
  G.on(document, n, `[data-bs-dismiss="${s}"]`, function(o) {
    if (["A", "AREA"].includes(this.tagName) && o.preventDefault(), hs(this))
      return;
    const r = ye.getElementFromSelector(this) || this.closest(`.${s}`);
    e.getOrCreateInstance(r)[t]();
  });
}, RC = "alert", IC = "bs.alert", Wv = `.${IC}`, PC = `close${Wv}`, VC = `closed${Wv}`, MC = "fade", LC = "show";
class Fa extends hn {
  // Getters
  static get NAME() {
    return RC;
  }
  // Public
  close() {
    if (G.trigger(this._element, PC).defaultPrevented)
      return;
    this._element.classList.remove(LC);
    const n = this._element.classList.contains(MC);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  // Private
  _destroyElement() {
    this._element.remove(), G.trigger(this._element, VC), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Fa.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
La(Fa, "close");
Zt(Fa);
const FC = "button", BC = "bs.button", jC = `.${BC}`, UC = ".data-api", HC = "active", _p = '[data-bs-toggle="button"]', $C = `click${jC}${UC}`;
class Ba extends hn {
  // Getters
  static get NAME() {
    return FC;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(HC));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ba.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
G.on(document, $C, _p, (e) => {
  e.preventDefault();
  const t = e.target.closest(_p);
  Ba.getOrCreateInstance(t).toggle();
});
Zt(Ba);
const WC = "swipe", $o = ".bs.swipe", KC = `touchstart${$o}`, zC = `touchmove${$o}`, qC = `touchend${$o}`, YC = `pointerdown${$o}`, XC = `pointerup${$o}`, GC = "touch", JC = "pen", QC = "pointer-event", ZC = 40, eT = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, tT = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class ia extends Jr {
  constructor(t, n) {
    super(), this._element = t, !(!t || !ia.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return eT;
  }
  static get DefaultType() {
    return tT;
  }
  static get NAME() {
    return WC;
  }
  // Public
  dispose() {
    G.off(this._element, $o);
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
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), xt(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= ZC)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && xt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (G.on(this._element, YC, (t) => this._start(t)), G.on(this._element, XC, (t) => this._end(t)), this._element.classList.add(QC)) : (G.on(this._element, KC, (t) => this._start(t)), G.on(this._element, zC, (t) => this._move(t)), G.on(this._element, qC, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === JC || t.pointerType === GC);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const nT = "carousel", sT = "bs.carousel", _s = `.${sT}`, Kv = ".data-api", oT = "ArrowLeft", rT = "ArrowRight", iT = 500, Zo = "next", ao = "prev", po = "left", Mi = "right", aT = `slide${_s}`, hl = `slid${_s}`, lT = `keydown${_s}`, uT = `mouseenter${_s}`, cT = `mouseleave${_s}`, dT = `dragstart${_s}`, fT = `load${_s}${Kv}`, pT = `click${_s}${Kv}`, zv = "carousel", ui = "active", hT = "slide", mT = "carousel-item-end", gT = "carousel-item-start", vT = "carousel-item-next", _T = "carousel-item-prev", qv = ".active", Yv = ".carousel-item", yT = qv + Yv, ET = ".carousel-item img", bT = ".carousel-indicators", wT = "[data-bs-slide], [data-bs-slide-to]", AT = '[data-bs-ride="carousel"]', ST = {
  [oT]: Mi,
  [rT]: po
}, OT = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, CT = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class Qr extends hn {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = ye.findOne(bT, this._element), this._addEventListeners(), this._config.ride === zv && this.cycle();
  }
  // Getters
  static get Default() {
    return OT;
  }
  static get DefaultType() {
    return CT;
  }
  static get NAME() {
    return nT;
  }
  // Public
  next() {
    this._slide(Zo);
  }
  nextWhenVisible() {
    !document.hidden && Ho(this._element) && this.next();
  }
  prev() {
    this._slide(ao);
  }
  pause() {
    this._isSliding && Pv(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        G.one(this._element, hl, () => this.cycle());
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
      G.one(this._element, hl, () => this.to(t));
      return;
    }
    const s = this._getItemIndex(this._getActive());
    if (s === t)
      return;
    const o = t > s ? Zo : ao;
    this._slide(o, n[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  // Private
  _configAfterMerge(t) {
    return t.defaultInterval = t.interval, t;
  }
  _addEventListeners() {
    this._config.keyboard && G.on(this._element, lT, (t) => this._keydown(t)), this._config.pause === "hover" && (G.on(this._element, uT, () => this.pause()), G.on(this._element, cT, () => this._maybeEnableCycle())), this._config.touch && ia.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const s of ye.find(ET, this._element))
      G.on(s, dT, (o) => o.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(po)),
      rightCallback: () => this._slide(this._directionToOrder(Mi)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), iT + this._config.interval));
      }
    };
    this._swipeHelper = new ia(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const n = ST[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const n = ye.findOne(qv, this._indicatorsElement);
    n.classList.remove(ui), n.removeAttribute("aria-current");
    const s = ye.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    s && (s.classList.add(ui), s.setAttribute("aria-current", "true"));
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
    const s = this._getActive(), o = t === Zo, r = n || gc(this._getItems(), s, o, this._config.wrap);
    if (r === s)
      return;
    const i = this._getItemIndex(r), a = (p) => G.trigger(this._element, p, {
      relatedTarget: r,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(s),
      to: i
    });
    if (a(aT).defaultPrevented || !s || !r)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(i), this._activeElement = r;
    const u = o ? gT : mT, d = o ? vT : _T;
    r.classList.add(d), Gr(r), s.classList.add(u), r.classList.add(u);
    const h = () => {
      r.classList.remove(u, d), r.classList.add(ui), s.classList.remove(ui, d, u), this._isSliding = !1, a(hl);
    };
    this._queueCallback(h, s, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(hT);
  }
  _getActive() {
    return ye.findOne(yT, this._element);
  }
  _getItems() {
    return ye.find(Yv, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Gt() ? t === po ? ao : Zo : t === po ? Zo : ao;
  }
  _orderToDirection(t) {
    return Gt() ? t === ao ? po : Mi : t === ao ? Mi : po;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Qr.getOrCreateInstance(this, t);
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
G.on(document, pT, wT, function(e) {
  const t = ye.getElementFromSelector(this);
  if (!t || !t.classList.contains(zv))
    return;
  e.preventDefault();
  const n = Qr.getOrCreateInstance(t), s = this.getAttribute("data-bs-slide-to");
  if (s) {
    n.to(s), n._maybeEnableCycle();
    return;
  }
  if (Kn.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
G.on(window, fT, () => {
  const e = ye.find(AT);
  for (const t of e)
    Qr.getOrCreateInstance(t);
});
Zt(Qr);
const TT = "collapse", NT = "bs.collapse", Zr = `.${NT}`, DT = ".data-api", kT = `show${Zr}`, xT = `shown${Zr}`, RT = `hide${Zr}`, IT = `hidden${Zr}`, PT = `click${Zr}${DT}`, ml = "show", vo = "collapse", ci = "collapsing", VT = "collapsed", MT = `:scope .${vo} .${vo}`, LT = "collapse-horizontal", FT = "width", BT = "height", jT = ".collapse.show, .collapse.collapsing", _u = '[data-bs-toggle="collapse"]', UT = {
  parent: null,
  toggle: !0
}, HT = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Mr extends hn {
  constructor(t, n) {
    super(t, n), this._isTransitioning = !1, this._triggerArray = [];
    const s = ye.find(_u);
    for (const o of s) {
      const r = ye.getSelectorFromElement(o), i = ye.find(r).filter((a) => a === this._element);
      r !== null && i.length && this._triggerArray.push(o);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return UT;
  }
  static get DefaultType() {
    return HT;
  }
  static get NAME() {
    return TT;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(jT).filter((a) => a !== this._element).map((a) => Mr.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || G.trigger(this._element, kT).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const s = this._getDimension();
    this._element.classList.remove(vo), this._element.classList.add(ci), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, this._element.classList.remove(ci), this._element.classList.add(vo, ml), this._element.style[s] = "", G.trigger(this._element, xT);
    }, i = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[s] = `${this._element[i]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || G.trigger(this._element, RT).defaultPrevented)
      return;
    const n = this._getDimension();
    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, Gr(this._element), this._element.classList.add(ci), this._element.classList.remove(vo, ml);
    for (const o of this._triggerArray) {
      const r = ye.getElementFromSelector(o);
      r && !this._isShown(r) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      this._isTransitioning = !1, this._element.classList.remove(ci), this._element.classList.add(vo), G.trigger(this._element, IT);
    };
    this._element.style[n] = "", this._queueCallback(s, this._element, !0);
  }
  // Private
  _isShown(t = this._element) {
    return t.classList.contains(ml);
  }
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = ps(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(LT) ? FT : BT;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(_u);
    for (const n of t) {
      const s = ye.getElementFromSelector(n);
      s && this._addAriaAndCollapsedClass([n], this._isShown(s));
    }
  }
  _getFirstLevelChildren(t) {
    const n = ye.find(MT, this._config.parent);
    return ye.find(t, this._config.parent).filter((s) => !n.includes(s));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const s of t)
        s.classList.toggle(VT, !n), s.setAttribute("aria-expanded", n);
  }
  // Static
  static jQueryInterface(t) {
    const n = {};
    return typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
      const s = Mr.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t]();
      }
    });
  }
}
G.on(document, PT, _u, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  for (const t of ye.getMultipleElementsFromSelector(this))
    Mr.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
Zt(Mr);
const yp = "dropdown", $T = "bs.dropdown", Zs = `.${$T}`, _c = ".data-api", WT = "Escape", Ep = "Tab", KT = "ArrowUp", bp = "ArrowDown", zT = 2, qT = `hide${Zs}`, YT = `hidden${Zs}`, XT = `show${Zs}`, GT = `shown${Zs}`, Xv = `click${Zs}${_c}`, Gv = `keydown${Zs}${_c}`, JT = `keyup${Zs}${_c}`, ho = "show", QT = "dropup", ZT = "dropend", eN = "dropstart", tN = "dropup-center", nN = "dropdown-center", Rs = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', sN = `${Rs}.${ho}`, Li = ".dropdown-menu", oN = ".navbar", rN = ".navbar-nav", iN = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", aN = Gt() ? "top-end" : "top-start", lN = Gt() ? "top-start" : "top-end", uN = Gt() ? "bottom-end" : "bottom-start", cN = Gt() ? "bottom-start" : "bottom-end", dN = Gt() ? "left-start" : "right-start", fN = Gt() ? "right-start" : "left-start", pN = "top", hN = "bottom", mN = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, gN = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class Dn extends hn {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = ye.next(this._element, Li)[0] || ye.prev(this._element, Li)[0] || ye.findOne(Li, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return mN;
  }
  static get DefaultType() {
    return gN;
  }
  static get NAME() {
    return yp;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (hs(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!G.trigger(this._element, XT, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(rN))
        for (const s of [].concat(...document.body.children))
          G.on(s, "mouseover", ra);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(ho), this._element.classList.add(ho), G.trigger(this._element, GT, t);
    }
  }
  hide() {
    if (hs(this._element) || !this._isShown())
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
    if (!G.trigger(this._element, qT, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          G.off(s, "mouseover", ra);
      this._popper && this._popper.destroy(), this._menu.classList.remove(ho), this._element.classList.remove(ho), this._element.setAttribute("aria-expanded", "false"), Kn.removeDataAttribute(this._menu, "popper"), G.trigger(this._element, YT, t), this._element.focus();
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !Wn(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${yp.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof Rv > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : Wn(this._config.reference) ? t = ps(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = mc(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(ho);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(ZT))
      return dN;
    if (t.classList.contains(eN))
      return fN;
    if (t.classList.contains(tN))
      return pN;
    if (t.classList.contains(nN))
      return hN;
    const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(QT) ? n ? lN : aN : n ? cN : uN;
  }
  _detectNavbar() {
    return this._element.closest(oN) !== null;
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
    return (this._inNavbar || this._config.display === "static") && (Kn.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...t,
      ...xt(this._config.popperConfig, [void 0, t])
    };
  }
  _selectMenuItem({
    key: t,
    target: n
  }) {
    const s = ye.find(iN, this._menu).filter((o) => Ho(o));
    s.length && gc(s, n, t === bp, !s.includes(n)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Dn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === zT || t.type === "keyup" && t.key !== Ep)
      return;
    const n = ye.find(sN);
    for (const s of n) {
      const o = Dn.getInstance(s);
      if (!o || o._config.autoClose === !1)
        continue;
      const r = t.composedPath(), i = r.includes(o._menu);
      if (r.includes(o._element) || o._config.autoClose === "inside" && !i || o._config.autoClose === "outside" && i || o._menu.contains(t.target) && (t.type === "keyup" && t.key === Ep || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const a = {
        relatedTarget: o._element
      };
      t.type === "click" && (a.clickEvent = t), o._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName), s = t.key === WT, o = [KT, bp].includes(t.key);
    if (!o && !s || n && !s)
      return;
    t.preventDefault();
    const r = this.matches(Rs) ? this : ye.prev(this, Rs)[0] || ye.next(this, Rs)[0] || ye.findOne(Rs, t.delegateTarget.parentNode), i = Dn.getOrCreateInstance(r);
    if (o) {
      t.stopPropagation(), i.show(), i._selectMenuItem(t);
      return;
    }
    i._isShown() && (t.stopPropagation(), i.hide(), r.focus());
  }
}
G.on(document, Gv, Rs, Dn.dataApiKeydownHandler);
G.on(document, Gv, Li, Dn.dataApiKeydownHandler);
G.on(document, Xv, Dn.clearMenus);
G.on(document, JT, Dn.clearMenus);
G.on(document, Xv, Rs, function(e) {
  e.preventDefault(), Dn.getOrCreateInstance(this).toggle();
});
Zt(Dn);
const Jv = "backdrop", vN = "fade", wp = "show", Ap = `mousedown.bs.${Jv}`, _N = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, yN = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Qv extends Jr {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return _N;
  }
  static get DefaultType() {
    return yN;
  }
  static get NAME() {
    return Jv;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      xt(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Gr(n), n.classList.add(wp), this._emulateAnimation(() => {
      xt(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      xt(t);
      return;
    }
    this._getElement().classList.remove(wp), this._emulateAnimation(() => {
      this.dispose(), xt(t);
    });
  }
  dispose() {
    this._isAppended && (G.off(this._element, Ap), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(vN), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = ps(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), G.on(t, Ap, () => {
      xt(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Lv(t, this._getElement(), this._config.isAnimated);
  }
}
const EN = "focustrap", bN = "bs.focustrap", aa = `.${bN}`, wN = `focusin${aa}`, AN = `keydown.tab${aa}`, SN = "Tab", ON = "forward", Sp = "backward", CN = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, TN = {
  autofocus: "boolean",
  trapElement: "element"
};
class Zv extends Jr {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return CN;
  }
  static get DefaultType() {
    return TN;
  }
  static get NAME() {
    return EN;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), G.off(document, aa), G.on(document, wN, (t) => this._handleFocusin(t)), G.on(document, AN, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, G.off(document, aa));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: n
    } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target))
      return;
    const s = ye.focusableChildren(n);
    s.length === 0 ? n.focus() : this._lastTabNavDirection === Sp ? s[s.length - 1].focus() : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === SN && (this._lastTabNavDirection = t.shiftKey ? Sp : ON);
  }
}
const Op = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Cp = ".sticky-top", di = "padding-right", Tp = "margin-right";
class yu {
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
    this._disableOverFlow(), this._setElementAttributes(this._element, di, (n) => n + t), this._setElementAttributes(Op, di, (n) => n + t), this._setElementAttributes(Cp, Tp, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, di), this._resetElementAttributes(Op, di), this._resetElementAttributes(Cp, Tp);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, n, s) {
    const o = this.getWidth(), r = (i) => {
      if (i !== this._element && window.innerWidth > i.clientWidth + o)
        return;
      this._saveInitialAttribute(i, n);
      const a = window.getComputedStyle(i).getPropertyValue(n);
      i.style.setProperty(n, `${s(Number.parseFloat(a))}px`);
    };
    this._applyManipulationCallback(t, r);
  }
  _saveInitialAttribute(t, n) {
    const s = t.style.getPropertyValue(n);
    s && Kn.setDataAttribute(t, n, s);
  }
  _resetElementAttributes(t, n) {
    const s = (o) => {
      const r = Kn.getDataAttribute(o, n);
      if (r === null) {
        o.style.removeProperty(n);
        return;
      }
      Kn.removeDataAttribute(o, n), o.style.setProperty(n, r);
    };
    this._applyManipulationCallback(t, s);
  }
  _applyManipulationCallback(t, n) {
    if (Wn(t)) {
      n(t);
      return;
    }
    for (const s of ye.find(t, this._element))
      n(s);
  }
}
const NN = "modal", DN = "bs.modal", Jt = `.${DN}`, kN = ".data-api", xN = "Escape", RN = `hide${Jt}`, IN = `hidePrevented${Jt}`, e_ = `hidden${Jt}`, t_ = `show${Jt}`, PN = `shown${Jt}`, VN = `resize${Jt}`, MN = `click.dismiss${Jt}`, LN = `mousedown.dismiss${Jt}`, FN = `keydown.dismiss${Jt}`, BN = `click${Jt}${kN}`, Np = "modal-open", jN = "fade", Dp = "show", gl = "modal-static", UN = ".modal.show", HN = ".modal-dialog", $N = ".modal-body", WN = '[data-bs-toggle="modal"]', KN = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, zN = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Js extends hn {
  constructor(t, n) {
    super(t, n), this._dialog = ye.findOne(HN, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new yu(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return KN;
  }
  static get DefaultType() {
    return zN;
  }
  static get NAME() {
    return NN;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || G.trigger(this._element, t_, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Np), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || G.trigger(this._element, RN).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Dp), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    G.off(window, Jt), G.off(this._dialog, Jt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Qv({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new Zv({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const n = ye.findOne($N, this._dialog);
    n && (n.scrollTop = 0), Gr(this._element), this._element.classList.add(Dp);
    const s = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, G.trigger(this._element, PN, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    G.on(this._element, FN, (t) => {
      if (t.key === xN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), G.on(window, VN, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), G.on(this._element, LN, (t) => {
      G.one(this._element, MN, (n) => {
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
      document.body.classList.remove(Np), this._resetAdjustments(), this._scrollBar.reset(), G.trigger(this._element, e_);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(jN);
  }
  _triggerBackdropTransition() {
    if (G.trigger(this._element, IN).defaultPrevented)
      return;
    const n = this._element.scrollHeight > document.documentElement.clientHeight, s = this._element.style.overflowY;
    s === "hidden" || this._element.classList.contains(gl) || (n || (this._element.style.overflowY = "hidden"), this._element.classList.add(gl), this._queueCallback(() => {
      this._element.classList.remove(gl), this._queueCallback(() => {
        this._element.style.overflowY = s;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, n = this._scrollBar.getWidth(), s = n > 0;
    if (s && !t) {
      const o = Gt() ? "paddingLeft" : "paddingRight";
      this._element.style[o] = `${n}px`;
    }
    if (!s && t) {
      const o = Gt() ? "paddingRight" : "paddingLeft";
      this._element.style[o] = `${n}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, n) {
    return this.each(function() {
      const s = Js.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t](n);
      }
    });
  }
}
G.on(document, BN, WN, function(e) {
  const t = ye.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), G.one(t, t_, (o) => {
    o.defaultPrevented || G.one(t, e_, () => {
      Ho(this) && this.focus();
    });
  });
  const n = ye.findOne(UN);
  n && Js.getInstance(n).hide(), Js.getOrCreateInstance(t).toggle(this);
});
La(Js);
Zt(Js);
const qN = "offcanvas", YN = "bs.offcanvas", Jn = `.${YN}`, n_ = ".data-api", XN = `load${Jn}${n_}`, GN = "Escape", kp = "show", xp = "showing", Rp = "hiding", JN = "offcanvas-backdrop", s_ = ".offcanvas.show", QN = `show${Jn}`, ZN = `shown${Jn}`, eD = `hide${Jn}`, Ip = `hidePrevented${Jn}`, o_ = `hidden${Jn}`, tD = `resize${Jn}`, nD = `click${Jn}${n_}`, sD = `keydown.dismiss${Jn}`, oD = '[data-bs-toggle="offcanvas"]', rD = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, iD = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class ms extends hn {
  constructor(t, n) {
    super(t, n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return rD;
  }
  static get DefaultType() {
    return iD;
  }
  static get NAME() {
    return qN;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || G.trigger(this._element, QN, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new yu().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(xp);
    const s = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(kp), this._element.classList.remove(xp), G.trigger(this._element, ZN, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || G.trigger(this._element, eD).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Rp), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(kp, Rp), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new yu().reset(), G.trigger(this._element, o_);
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
        G.trigger(this._element, Ip);
        return;
      }
      this.hide();
    }, n = !!this._config.backdrop;
    return new Qv({
      className: JN,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null
    });
  }
  _initializeFocusTrap() {
    return new Zv({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    G.on(this._element, sD, (t) => {
      if (t.key === GN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        G.trigger(this._element, Ip);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ms.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
G.on(document, nD, oD, function(e) {
  const t = ye.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), hs(this))
    return;
  G.one(t, o_, () => {
    Ho(this) && this.focus();
  });
  const n = ye.findOne(s_);
  n && n !== t && ms.getInstance(n).hide(), ms.getOrCreateInstance(t).toggle(this);
});
G.on(window, XN, () => {
  for (const e of ye.find(s_))
    ms.getOrCreateInstance(e).show();
});
G.on(window, tD, () => {
  for (const e of ye.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && ms.getOrCreateInstance(e).hide();
});
La(ms);
Zt(ms);
const aD = /^aria-[\w-]*$/i, r_ = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", aD],
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
}, lD = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), uD = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, cD = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? lD.has(n) ? !!uD.test(e.nodeValue) : !0 : t.filter((s) => s instanceof RegExp).some((s) => s.test(n));
};
function dD(e, t, n) {
  if (!e.length)
    return e;
  if (n && typeof n == "function")
    return n(e);
  const o = new window.DOMParser().parseFromString(e, "text/html"), r = [].concat(...o.body.querySelectorAll("*"));
  for (const i of r) {
    const a = i.nodeName.toLowerCase();
    if (!Object.keys(t).includes(a)) {
      i.remove();
      continue;
    }
    const l = [].concat(...i.attributes), f = [].concat(t["*"] || [], t[a] || []);
    for (const u of l)
      cD(u, f) || i.removeAttribute(u.nodeName);
  }
  return o.body.innerHTML;
}
const fD = "TemplateFactory", pD = {
  allowList: r_,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, hD = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, mD = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class gD extends Jr {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return pD;
  }
  static get DefaultType() {
    return hD;
  }
  static get NAME() {
    return fD;
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
    for (const [o, r] of Object.entries(this._config.content))
      this._setContent(t, r, o);
    const n = t.children[0], s = this._resolvePossibleFunction(this._config.extraClass);
    return s && n.classList.add(...s.split(" ")), n;
  }
  // Private
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [n, s] of Object.entries(t))
      super._typeCheckConfig({
        selector: n,
        entry: s
      }, mD);
  }
  _setContent(t, n, s) {
    const o = ye.findOne(s, t);
    if (o) {
      if (n = this._resolvePossibleFunction(n), !n) {
        o.remove();
        return;
      }
      if (Wn(n)) {
        this._putElementInTemplate(ps(n), o);
        return;
      }
      if (this._config.html) {
        o.innerHTML = this._maybeSanitize(n);
        return;
      }
      o.textContent = n;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize ? dD(t, this._config.allowList, this._config.sanitizeFn) : t;
  }
  _resolvePossibleFunction(t) {
    return xt(t, [void 0, this]);
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      n.innerHTML = "", n.append(t);
      return;
    }
    n.textContent = t.textContent;
  }
}
const vD = "tooltip", _D = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), vl = "fade", yD = "modal", fi = "show", ED = ".tooltip-inner", Pp = `.${yD}`, Vp = "hide.bs.modal", er = "hover", _l = "focus", yl = "click", bD = "manual", wD = "hide", AD = "hidden", SD = "show", OD = "shown", CD = "inserted", TD = "click", ND = "focusin", DD = "focusout", kD = "mouseenter", xD = "mouseleave", RD = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Gt() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Gt() ? "right" : "left"
}, ID = {
  allowList: r_,
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
}, PD = {
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
class eo extends hn {
  constructor(t, n) {
    if (typeof Rv > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
    super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return ID;
  }
  static get DefaultType() {
    return PD;
  }
  static get NAME() {
    return vD;
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
    clearTimeout(this._timeout), G.off(this._element.closest(Pp), Vp, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = G.trigger(this._element, this.constructor.eventName(SD)), s = (Vv(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !s)
      return;
    this._disposePopper();
    const o = this._getTipElement();
    this._element.setAttribute("aria-describedby", o.getAttribute("id"));
    const {
      container: r
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(o), G.trigger(this._element, this.constructor.eventName(CD))), this._popper = this._createPopper(o), o.classList.add(fi), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        G.on(a, "mouseover", ra);
    const i = () => {
      G.trigger(this._element, this.constructor.eventName(OD)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(i, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || G.trigger(this._element, this.constructor.eventName(wD)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(fi), "ontouchstart" in document.documentElement)
      for (const o of [].concat(...document.body.children))
        G.off(o, "mouseover", ra);
    this._activeTrigger[yl] = !1, this._activeTrigger[_l] = !1, this._activeTrigger[er] = !1, this._isHovered = null;
    const s = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), G.trigger(this._element, this.constructor.eventName(AD)));
    };
    this._queueCallback(s, this.tip, this._isAnimated());
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
    n.classList.remove(vl, fi), n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const s = bC(this.constructor.NAME).toString();
    return n.setAttribute("id", s), this._isAnimated() && n.classList.add(vl), n;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new gD({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [ED]: this._getTitle()
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
    return this._config.animation || this.tip && this.tip.classList.contains(vl);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(fi);
  }
  _createPopper(t) {
    const n = xt(this._config.placement, [this, t, this._element]), s = RD[n.toUpperCase()];
    return mc(this._element, t, this._getPopperConfig(s));
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((n) => Number.parseInt(n, 10)) : typeof t == "function" ? (n) => t(n, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return xt(t, [this._element, this._element]);
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
        fn: (s) => {
          this._getTipElement().setAttribute("data-popper-placement", s.state.placement);
        }
      }]
    };
    return {
      ...n,
      ...xt(this._config.popperConfig, [void 0, n])
    };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const n of t)
      if (n === "click")
        G.on(this._element, this.constructor.eventName(TD), this._config.selector, (s) => {
          const o = this._initializeOnDelegatedTarget(s);
          o._activeTrigger[yl] = !(o._isShown() && o._activeTrigger[yl]), o.toggle();
        });
      else if (n !== bD) {
        const s = n === er ? this.constructor.eventName(kD) : this.constructor.eventName(ND), o = n === er ? this.constructor.eventName(xD) : this.constructor.eventName(DD);
        G.on(this._element, s, this._config.selector, (r) => {
          const i = this._initializeOnDelegatedTarget(r);
          i._activeTrigger[r.type === "focusin" ? _l : er] = !0, i._enter();
        }), G.on(this._element, o, this._config.selector, (r) => {
          const i = this._initializeOnDelegatedTarget(r);
          i._activeTrigger[r.type === "focusout" ? _l : er] = i._element.contains(r.relatedTarget), i._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, G.on(this._element.closest(Pp), Vp, this._hideModalHandler);
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
    const n = Kn.getDataAttributes(this._element);
    for (const s of Object.keys(n))
      _D.has(s) && delete n[s];
    return t = {
      ...n,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : ps(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const [n, s] of Object.entries(this._config))
      this.constructor.Default[n] !== s && (t[n] = s);
    return t.selector = !1, t.trigger = "manual", t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = eo.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Zt(eo);
const VD = "popover", MD = ".popover-header", LD = ".popover-body", FD = {
  ...eo.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, BD = {
  ...eo.DefaultType,
  content: "(null|string|element|function)"
};
class yc extends eo {
  // Getters
  static get Default() {
    return FD;
  }
  static get DefaultType() {
    return BD;
  }
  static get NAME() {
    return VD;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [MD]: this._getTitle(),
      [LD]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = yc.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Zt(yc);
const jD = "scrollspy", UD = "bs.scrollspy", Ec = `.${UD}`, HD = ".data-api", $D = `activate${Ec}`, Mp = `click${Ec}`, WD = `load${Ec}${HD}`, KD = "dropdown-item", lo = "active", zD = '[data-bs-spy="scroll"]', El = "[href]", qD = ".nav, .list-group", Lp = ".nav-link", YD = ".nav-item", XD = ".list-group-item", GD = `${Lp}, ${YD} > ${Lp}, ${XD}`, JD = ".dropdown", QD = ".dropdown-toggle", ZD = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, ek = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class ja extends hn {
  constructor(t, n) {
    super(t, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return ZD;
  }
  static get DefaultType() {
    return ek;
  }
  static get NAME() {
    return jD;
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
    return t.target = ps(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (G.off(this._config.target, Mp), G.on(this._config.target, Mp, El, (t) => {
      const n = this._observableSections.get(t.target.hash);
      if (n) {
        t.preventDefault();
        const s = this._rootElement || window, o = n.offsetTop - this._element.offsetTop;
        if (s.scrollTo) {
          s.scrollTo({
            top: o,
            behavior: "smooth"
          });
          return;
        }
        s.scrollTop = o;
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
    const n = (i) => this._targetLinks.get(`#${i.target.id}`), s = (i) => {
      this._previousScrollData.visibleEntryTop = i.target.offsetTop, this._process(n(i));
    }, o = (this._rootElement || document.documentElement).scrollTop, r = o >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = o;
    for (const i of t) {
      if (!i.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(n(i));
        continue;
      }
      const a = i.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (r && a) {
        if (s(i), !o)
          return;
        continue;
      }
      !r && !a && s(i);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const t = ye.find(El, this._config.target);
    for (const n of t) {
      if (!n.hash || hs(n))
        continue;
      const s = ye.findOne(decodeURI(n.hash), this._element);
      Ho(s) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, s));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(lo), this._activateParents(t), G.trigger(this._element, $D, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(KD)) {
      ye.findOne(QD, t.closest(JD)).classList.add(lo);
      return;
    }
    for (const n of ye.parents(t, qD))
      for (const s of ye.prev(n, GD))
        s.classList.add(lo);
  }
  _clearActiveClass(t) {
    t.classList.remove(lo);
    const n = ye.find(`${El}.${lo}`, t);
    for (const s of n)
      s.classList.remove(lo);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ja.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
G.on(window, WD, () => {
  for (const e of ye.find(zD))
    ja.getOrCreateInstance(e);
});
Zt(ja);
const tk = "tab", nk = "bs.tab", to = `.${nk}`, sk = `hide${to}`, ok = `hidden${to}`, rk = `show${to}`, ik = `shown${to}`, ak = `click${to}`, lk = `keydown${to}`, uk = `load${to}`, ck = "ArrowLeft", Fp = "ArrowRight", dk = "ArrowUp", Bp = "ArrowDown", bl = "Home", jp = "End", Is = "active", Up = "fade", wl = "show", fk = "dropdown", i_ = ".dropdown-toggle", pk = ".dropdown-menu", Al = `:not(${i_})`, hk = '.list-group, .nav, [role="tablist"]', mk = ".nav-item, .list-group-item", gk = `.nav-link${Al}, .list-group-item${Al}, [role="tab"]${Al}`, a_ = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Sl = `${gk}, ${a_}`, vk = `.${Is}[data-bs-toggle="tab"], .${Is}[data-bs-toggle="pill"], .${Is}[data-bs-toggle="list"]`;
class Po extends hn {
  constructor(t) {
    super(t), this._parent = this._element.closest(hk), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), G.on(this._element, lk, (n) => this._keydown(n)));
  }
  // Getters
  static get NAME() {
    return tk;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), s = n ? G.trigger(n, sk, {
      relatedTarget: t
    }) : null;
    G.trigger(t, rk, {
      relatedTarget: n
    }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(n, t), this._activate(t, n));
  }
  // Private
  _activate(t, n) {
    if (!t)
      return;
    t.classList.add(Is), this._activate(ye.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(wl);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), G.trigger(t, ik, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(Up));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(Is), t.blur(), this._deactivate(ye.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(wl);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), G.trigger(t, ok, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(Up));
  }
  _keydown(t) {
    if (![ck, Fp, dk, Bp, bl, jp].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((o) => !hs(o));
    let s;
    if ([bl, jp].includes(t.key))
      s = n[t.key === bl ? 0 : n.length - 1];
    else {
      const o = [Fp, Bp].includes(t.key);
      s = gc(n, t.target, o, !0);
    }
    s && (s.focus({
      preventScroll: !0
    }), Po.getOrCreateInstance(s).show());
  }
  _getChildren() {
    return ye.find(Sl, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, n) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const s of n)
      this._setInitialAttributesOnChild(s);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const n = this._elemIsActive(t), s = this._getOuterElement(t);
    t.setAttribute("aria-selected", n), s !== t && this._setAttributeIfNotExists(s, "role", "presentation"), n || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const n = ye.getElementFromSelector(t);
    n && (this._setAttributeIfNotExists(n, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, n) {
    const s = this._getOuterElement(t);
    if (!s.classList.contains(fk))
      return;
    const o = (r, i) => {
      const a = ye.findOne(r, s);
      a && a.classList.toggle(i, n);
    };
    o(i_, Is), o(pk, wl), s.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, s) {
    t.hasAttribute(n) || t.setAttribute(n, s);
  }
  _elemIsActive(t) {
    return t.classList.contains(Is);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(Sl) ? t : ye.findOne(Sl, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(mk) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Po.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
G.on(document, ak, a_, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !hs(this) && Po.getOrCreateInstance(this).show();
});
G.on(window, uk, () => {
  for (const e of ye.find(vk))
    Po.getOrCreateInstance(e);
});
Zt(Po);
const _k = "toast", yk = "bs.toast", ys = `.${yk}`, Ek = `mouseover${ys}`, bk = `mouseout${ys}`, wk = `focusin${ys}`, Ak = `focusout${ys}`, Sk = `hide${ys}`, Ok = `hidden${ys}`, Ck = `show${ys}`, Tk = `shown${ys}`, Nk = "fade", Hp = "hide", pi = "show", hi = "showing", Dk = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, kk = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class ei extends hn {
  constructor(t, n) {
    super(t, n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return kk;
  }
  static get DefaultType() {
    return Dk;
  }
  static get NAME() {
    return _k;
  }
  // Public
  show() {
    if (G.trigger(this._element, Ck).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(Nk);
    const n = () => {
      this._element.classList.remove(hi), G.trigger(this._element, Tk), this._maybeScheduleHide();
    };
    this._element.classList.remove(Hp), Gr(this._element), this._element.classList.add(pi, hi), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || G.trigger(this._element, Sk).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(Hp), this._element.classList.remove(hi, pi), G.trigger(this._element, Ok);
    };
    this._element.classList.add(hi), this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(pi), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(pi);
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
    const s = t.relatedTarget;
    this._element === s || this._element.contains(s) || this._maybeScheduleHide();
  }
  _setListeners() {
    G.on(this._element, Ek, (t) => this._onInteraction(t, !0)), G.on(this._element, bk, (t) => this._onInteraction(t, !1)), G.on(this._element, wk, (t) => this._onInteraction(t, !0)), G.on(this._element, Ak, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ei.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
La(ei);
Zt(ei);
var xk = Object.defineProperty, Rk = (e, t, n) => t in e ? xk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, sn = (e, t, n) => Rk(e, typeof t != "symbol" ? t + "" : t, n);
const Ik = { class: "toast-header" }, Pk = ["textContent"], Vk = ["textContent"], Mk = { class: "toast-body" }, Lk = ["textContent"], Fk = /* @__PURE__ */ Ce({
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
    const s = e, o = n, { visible: r, animation: i, autohide: a, delay: l } = cn(s), f = $(), u = $();
    Ot(r, (R) => {
      y();
    }, { immediate: !0 });
    function d() {
      f.value.show();
    }
    function h() {
      f.value.hide();
    }
    function p() {
      f.value.dispose();
    }
    function g() {
      f.value.isShown();
    }
    function m() {
      f.value.getOrCreateInstance();
    }
    function _() {
      f.value.getInstance();
    }
    function y() {
      f.value && (r.value === !0 ? d() : h());
    }
    function b() {
      o("hide", f.value);
    }
    function v() {
      o("hidden", f.value);
    }
    function O() {
      o("show", f.value);
    }
    async function S() {
      o("shown", f.value);
    }
    const k = { show: d, hide: h, dispose: p, isShown: g, getOrCreateInstance: m, getInstance: _ };
    return t({ ...k }), Pt(() => {
      u.value.addEventListener("hide.bs.toast", b), u.value.addEventListener("hidden.bs.toast", v), u.value.addEventListener("show.bs.toast", O), u.value.addEventListener("shown.bs.toast", S), f.value = new ei(u.value, {
        animation: i.value,
        autohide: a.value,
        delay: l.value
      }), y();
    }), (R, I) => (C(), D("div", {
      ref_key: "toastRef",
      ref: u,
      class: ue(["toast", [R.variant ? `text-bg-${R.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      Ne(R.$slots, "header", st(et({ ...k })), () => [
        c("div", Ik, [
          Ne(R.$slots, "title", st(et({ ...k })), () => [
            c("strong", {
              class: "me-auto",
              textContent: F(R.title)
            }, null, 8, Pk)
          ], !0),
          Ne(R.$slots, "subtitle", st(et({ ...k })), () => [
            c("small", {
              textContent: F(R.subtitle)
            }, null, 8, Vk)
          ], !0),
          c("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: h
          })
        ])
      ], !0),
      Ne(R.$slots, "body", st(et({ ...k })), () => [
        c("div", Mk, [
          Ne(R.$slots, "default", st(et({ ...k })), () => [
            c("span", {
              textContent: F(R.body)
            }, null, 8, Lk)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), Vn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, l_ = /* @__PURE__ */ Vn(Fk, [["__scopeId", "data-v-c0cdbae8"]]);
function Bk() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16);
  });
}
const jk = { id: "toast-wrapper" };
let $p;
const Uk = /* @__PURE__ */ Ce({
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
    }, s = $(/* @__PURE__ */ new Map());
    $p = (r, i = "top right") => {
      const a = Bk(), l = { ...n, ...r, id: a };
      let f = s.value.get(i);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(l), s.value.set(i, f);
    };
    function o(r, i) {
      const a = s.value.get(r);
      a?.delete(i);
    }
    return t({ toast: $p }), (r, i) => (C(), it(ma, { to: "body" }, [
      c("div", jk, [
        (C(!0), D(Oe, null, Je(s.value, ([a, l]) => (C(), D("div", {
          key: a,
          class: ue(["toast-group", `${a}`])
        }, [
          (C(!0), D(Oe, null, Je(l, (f, u) => (C(), it(l_, gs({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (d) => o(a, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Hk = /* @__PURE__ */ Vn(Uk, [["__scopeId", "data-v-786d1c50"]]), u_ = () => {
  let e = [];
  function t() {
    e = [], document.querySelectorAll("*").forEach((s) => {
      const o = getComputedStyle(s);
      o.position === "sticky" && (e.push({ element: s, originalPosition: o.position }), s.style.position = "relative");
    });
  }
  function n() {
    e.forEach((s) => {
      s.element.style.position = s.originalPosition;
    });
  }
  return { removeStickyElements: t, restoreStickyElements: n };
};
var In = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(In || {});
const Vo = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(In).includes(n) || n == "" ? "" : `${t}${n}`;
}, $k = { class: "modal-content" }, Wk = { class: "modal-header" }, Kk = ["innerHTML"], zk = { class: "modal-body" }, qk = ["innerHTML"], Yk = { class: "modal-footer" }, Xk = ["innerHTML"], Gk = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const Jk = /* @__PURE__ */ Ce({
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
    size: { default: In.STANDARD },
    btnSize: { default: In.SMALL },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["onShown", "onHidden"],
  setup(e, { expose: t, emit: n }) {
    const s = e, {
      backdrop: o,
      keyboard: r,
      focus: i,
      disableOutsideClick: a,
      size: l,
      btnSize: f
    } = cn(s), u = n, d = U(() => Vo(l.value, "modal-")), h = U(() => Vo(f.value, "btn-")), p = $();
    let g;
    const m = Gn(), _ = () => document.querySelectorAll(".modal.show").length, y = () => typeof window < "u" && window._managedModals ? window._managedModals : [], b = 1055, v = $(b), O = () => {
      const se = _();
      v.value = b + se;
    };
    let S;
    const k = u_();
    function R() {
      return new Promise((se, W) => {
        if (!p.value) return;
        k.removeStickyElements(), O(), p.value.classList.add("managed-modal");
        const M = y(), X = M.length + 1, _e = {
          element: p.value,
          priority: X,
          instance: m
        };
        M.push(_e), p.value.addEventListener("shown.bs.modal", () => {
          T();
        }, { once: !0 }), g?.show(), S = se, u("onShown", g);
      });
    }
    function I(se = !0) {
      if (!p.value) return;
      const W = y(), M = W.findIndex((X) => X.element === p.value);
      M > -1 && W.splice(M, 1), p.value.addEventListener("hidden.bs.modal", () => {
        p.value && (p.value.style.display = ""), T();
      }, { once: !0 }), g?.hide(), typeof S == "function" && S(se), u("onHidden", g), k.restoreStickyElements();
    }
    function P() {
      g?.toggle();
    }
    const T = () => {
      const se = y();
      if (se.length === 0) return;
      se.sort((M, X) => M.priority - X.priority);
      const W = se[se.length - 1];
      se.forEach((M) => {
        M.element !== W.element ? M.element.style.opacity = "0" : M.element.style.opacity = "1";
      });
    };
    Pt(() => {
      g = new Js(p.value, {
        backdrop: o?.value,
        keyboard: r.value,
        focus: i.value
      }), p.value.classList.add("managed-modal"), va(() => {
        s?.visible === !0 ? g?.show() : g?.hide();
      });
    });
    function N(se) {
      o?.value !== "static" && I(!1);
    }
    function A() {
      I(!1);
    }
    function Y() {
      I(!1);
    }
    function fe() {
      I(!0);
    }
    t({
      modal: g,
      show: R,
      hide: I,
      toggle: P,
      onHeaderCloseClicked: A,
      onCancelClicked: Y,
      onOkCLicked: fe
    });
    const J = { show: R, hide: I, toggle: P, modal: g };
    return (se, W) => (C(), D("div", gs({
      ref_key: "modalElement",
      ref: p,
      class: "modal fade",
      tabindex: "-1"
    }, { ...se.$attrs }, {
      onClick: Sm(N, ["self"]),
      style: { zIndex: v.value }
    }), [
      c("div", {
        class: ue(["modal-dialog", d.value])
      }, [
        c("div", $k, [
          Ne(se.$slots, "header", st(et({ ...J })), () => [
            c("div", Wk, [
              Ne(se.$slots, "title", st(et({ ...J })), () => [
                c("h5", {
                  class: "modal-title",
                  innerHTML: se.title
                }, null, 8, Kk)
              ], !0),
              Ne(se.$slots, "header-close-button", st(et({ ...J })), () => [
                c("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: A
                })
              ], !0)
            ])
          ], !0),
          c("div", zk, [
            Ne(se.$slots, "default", st(et({ ...J })), () => [
              c("span", { innerHTML: se.body }, null, 8, qk)
            ], !0)
          ]),
          c("div", Yk, [
            Ne(se.$slots, "footer", st(et({ ...J })), () => [
              se.okOnly ? de("", !0) : (C(), D("button", {
                key: 0,
                type: "button",
                class: ue(["btn btn-secondary", h.value]),
                onClick: Y
              }, [
                Ne(se.$slots, "button-cancel", st(et({ ...J })), () => [
                  c("span", { innerHTML: se.textCancel }, null, 8, Xk)
                ], !0)
              ], 2)),
              c("button", {
                type: "button",
                class: ue(["btn btn-primary", h.value]),
                onClick: fe
              }, [
                Ne(se.$slots, "button-ok", st(et({ ...J })), () => [
                  c("span", { innerHTML: se.textOk }, null, 8, Gk)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), c_ = /* @__PURE__ */ Vn(Jk, [["__scopeId", "data-v-b8ba4eaa"]]), Qk = /* @__PURE__ */ Ce({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = $(void 0), s = $({});
    function o(i = {}) {
      var a;
      return i.okOnly = !1, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: o, alert: r }), (i, a) => (C(), it(ma, { to: "body" }, [
      le(c_, gs({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), Zk = {
  "data-header": "",
  class: "border-bottom"
}, ex = { class: "d-flex gap-2 p-2" }, tx = { class: "p-2" }, nx = {
  "data-footer": "",
  class: "border-top p-2"
}, sx = { class: "buttons" }, ox = /* @__PURE__ */ Ce({
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
    size: { default: In.STANDARD },
    btnSize: { default: In.SMALL },
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, { backdrop: s, disableOutsideClick: o, modal: r, size: i, btnSize: a } = cn(n), l = () => document.querySelectorAll("dialog[open]").length, f = 1056, u = $(f), d = $(!1), h = $(!1), p = $(!1), g = $(), m = $(!1), _ = U(() => Vo(i.value, "modal-")), y = U(() => Vo(a.value, "btn-")), b = U(() => ({
      opening: d.value,
      closing: h.value,
      "no-backdrop": s.value === !1,
      static: m.value
    }));
    let v = null;
    const O = () => {
      const A = l();
      u.value = f + A;
    }, S = u_(), k = async () => (O(), S.removeStickyElements(), d.value = !0, g.value.addEventListener(
      "animationend",
      () => {
        d.value = !1, p.value = !0;
      },
      { once: !0 }
    ), r.value === !0 ? g.value.showModal() : g.value.show(), new Promise((A, Y) => {
      v = A;
    })), R = async (A = !1) => {
      h.value = !0, g.value.addEventListener(
        "animationend",
        () => {
          g.value.close(), h.value = !1, p.value = !1, typeof v == "function" && v(A), v = null, S.restoreStickyElements();
        },
        { once: !0 }
      );
    }, I = async () => {
      p.value === !0 ? R() : k();
    }, P = () => {
      m.value = !0, setTimeout(() => {
        m.value = !1;
      }, 200);
    }, T = () => {
      if (s.value === "static" || o.value === !0) {
        P();
        return;
      }
      R(!1);
    };
    if (r.value === !0) {
      let A = function(fe) {
        if (s.value === "static" || o.value === !0) {
          P();
          return;
        }
        fe.target === g.value && R(!1);
      };
      const Y = new AbortController();
      Pt(() => {
        document.addEventListener("click", (fe) => {
          A(fe);
        }, { signal: Y.signal });
      }), $r(() => {
        Y.abort();
      });
    }
    const N = { show: k, hide: R, toggle: I, dialog: g };
    return t({
      show: k,
      hide: R,
      toggle: I
    }), (A, Y) => (C(), D("div", {
      class: "dialog-wrapper",
      style: Mt({ zIndex: u.value })
    }, [
      c("div", {
        class: "backdrop",
        onClick: T
      }),
      c("dialog", {
        ref_key: "dialog",
        ref: g,
        class: ue(b.value)
      }, [
        c("div", {
          class: ue(["content", _.value])
        }, [
          Ne(A.$slots, "header", st(et({ ...N })), () => [
            c("div", Zk, [
              c("div", ex, [
                Ne(A.$slots, "title", st(et({ ...N })), () => [
                  ee(F(A.title), 1)
                ], !0),
                Ne(A.$slots, "header-close-button", {}, () => [
                  c("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: Y[0] || (Y[0] = (fe) => R(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          c("div", tx, [
            Ne(A.$slots, "default", st(et({ ...N })), () => [
              ee(F(A.body), 1)
            ], !0)
          ]),
          Ne(A.$slots, "footer", st(et({ ...N })), () => [
            c("div", nx, [
              c("div", sx, [
                A.okOnly ? de("", !0) : (C(), D("button", {
                  key: 0,
                  type: "button",
                  class: ue(["btn btn-secondary", y.value]),
                  onClick: Y[1] || (Y[1] = (fe) => R(!1))
                }, [
                  Ne(A.$slots, "textCancel", st(et({ ...N })), () => [
                    ee(F(A.textCancel), 1)
                  ], !0)
                ], 2)),
                c("button", {
                  type: "button",
                  class: ue(["btn btn-primary", y.value]),
                  onClick: Y[2] || (Y[2] = (fe) => R(!0))
                }, [
                  Ne(A.$slots, "textOk", st(et({ ...N })), () => [
                    ee(F(A.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), d_ = /* @__PURE__ */ Vn(ox, [["__scopeId", "data-v-0990c791"]]), rx = /* @__PURE__ */ Ce({
  __name: "DialogManager",
  setup(e, { expose: t }) {
    const n = $(void 0), s = $({});
    function o(i = {}) {
      var a;
      return i.okOnly = !1, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: o, alert: r }), (i, a) => (C(), it(ma, { to: "body" }, [
      le(d_, gs({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), ix = { "data-first": "" }, ax = ["disabled", "innerHTML"], lx = { "data-prev": "" }, ux = ["disabled", "innerHTML"], cx = { key: 0 }, dx = ["innerHTML"], fx = ["onClick"], px = { "data-next": "" }, hx = ["disabled", "innerHTML"], mx = { "data-last": "" }, gx = ["disabled", "innerHTML"], vx = /* @__PURE__ */ Ce({
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
    size: { default: In.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    function n(v, O = 0) {
      return [...Array(v).keys()].map((S) => S + O);
    }
    const s = t, o = e, { modelValue: r, maxVisibleButtons: i, hideEllipsis: a } = cn(o), l = Math.floor(i.value / 2), f = U(() => {
      let v = i.value, O = r.value <= l ? 1 : r.value - l;
      return r.value >= h.value - l && (O = h.value - v + 1), O < 1 && (O = 1), h.value < v && (v = h.value), n(v, O);
    }), u = U(() => r.value <= 1), d = U(() => r.value >= h.value), h = U(() => {
      const { perPage: v, totalItems: O } = o;
      return Math.ceil(O / v);
    });
    va(() => {
      h.value > 0 && r.value > h.value && s("update:modelValue", h.value);
    });
    function p(v) {
      const O = i.value - 1;
      return !(a.value === !0 || v === 0 && r.value - l - 1 <= 0 || v === O && r.value + l >= h.value || v > 0 && v < O);
    }
    function g(v) {
      v < 1 && (v = 1), v > h.value && (v = h.value), s("update:modelValue", v);
    }
    function m() {
      s("update:modelValue", 1);
    }
    function _() {
      s("update:modelValue", h.value);
    }
    function y() {
      let v = r.value - 1;
      v < 1 && (v = 1), s("update:modelValue", v);
    }
    function b() {
      let v = r.value + 1;
      v > h.value && (v = h.value), s("update:modelValue", v);
    }
    return (v, O) => (C(), D("ul", {
      class: ue(["pagination", v.size])
    }, [
      c("li", ix, [
        c("button", {
          class: "",
          disabled: u.value,
          innerHTML: v.firstText,
          onClick: m
        }, null, 8, ax)
      ]),
      c("li", lx, [
        c("button", {
          class: "",
          disabled: u.value,
          innerHTML: v.prevText,
          onClick: y
        }, null, 8, ux)
      ]),
      (C(!0), D(Oe, null, Je(f.value, (S, k) => (C(), D(Oe, null, [
        p(k) ? (C(), D("li", cx, [
          c("button", {
            disabled: "",
            class: "",
            innerHTML: v.ellipsisText
          }, null, 8, dx)
        ])) : (C(), D("li", {
          key: 1,
          "data-prev": "",
          class: ue({ active: v.modelValue === S })
        }, [
          c("button", {
            class: "",
            onClick: (R) => g(S)
          }, F(S), 9, fx)
        ], 2))
      ], 64))), 256)),
      c("li", px, [
        c("button", {
          class: "",
          disabled: d.value,
          innerHTML: v.nextText,
          onClick: b
        }, null, 8, hx)
      ]),
      c("li", mx, [
        c("button", {
          class: "",
          disabled: d.value,
          innerHTML: v.lastText,
          onClick: _
        }, null, 8, gx)
      ])
    ], 2));
  }
}), _x = /* @__PURE__ */ Vn(vx, [["__scopeId", "data-v-2bfd7085"]]), yx = { class: "d-inline" }, Ex = { class: "fw-bold" }, bx = /* @__PURE__ */ Ce({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = cn(n), r = U({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => {
      const l = rt("b-dropdown-item"), f = rt("b-dropdown");
      return C(), it(f, gs({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: me(() => [
          c("div", yx, [
            Ne(i.$slots, "default", { selected: r.value }, () => [
              a[0] || (a[0] = c("span", null, "Per page: ", -1)),
              c("span", Ex, F(r.value), 1)
            ])
          ])
        ]),
        default: me(() => [
          (C(!0), D(Oe, null, Je(H(o), (u, d) => (C(), it(l, {
            key: u,
            onClick: (h) => r.value = u,
            active: u === i.modelValue
          }, {
            default: me(() => [
              ee(F(u), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), wx = ["value"], Ax = /* @__PURE__ */ Ce({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = cn(n), r = U({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => At((C(), D("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (l) => r.value = l)
    }, [
      (C(!0), D(Oe, null, Je(H(o), (l, f) => (C(), D("option", {
        key: l,
        value: l
      }, F(l), 9, wx))), 128))
    ], 512)), [
      [fr, r.value]
    ]);
  }
});
var Ns = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(Ns || {});
class Sx {
  constructor(t, n = "ASC", s) {
    sn(this, "key"), sn(this, "direction"), sn(this, "sortFn"), this.key = t, this.direction = n, this.sortFn = s;
  }
}
const Wp = (e, t) => {
  const n = (a, l) => {
    let f = typeof a, u = typeof l;
    return f == "number" && f == u;
  }, s = (a, l) => a - l, o = (a, l) => (a = a ?? "", l = l ?? "", a.localeCompare(l)), r = (a, l) => n(a, l) ? s : o, i = [...t];
  return i.sort((a, l) => {
    let f = 0;
    for (let u of e) {
      let { key: d, direction: h, sortFn: p } = u, g = h === "ASC" ? 1 : -1, m = a[d], _ = l[d];
      if (p = typeof p == "function" ? p : r(m, _), f = p(m, _, a, l, t, u, g) * g, f !== 0) return f;
    }
    return f;
  }), i;
}, Ox = ["onClick"], Cx = { class: "th-wrapper" }, Tx = {
  key: 0,
  "data-sort-indicator": ""
}, Nx = { class: "sort-index" }, Dx = { class: "sort-direction" }, kx = ["onMouseover"], xx = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Rx = ["colspan"], Ix = ["innerHTML"];
class Ol {
  constructor(t = "", n = "", s = !1, o) {
    sn(this, "key"), sn(this, "label"), sn(this, "sortable"), sn(this, "sortFn"), this.key = t, this.label = n, this.sortable = s, this.sortFn = o;
  }
}
const Px = /* @__PURE__ */ Ce({
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
    const n = (m) => {
      let _ = [];
      for (const y of m)
        _ = _.concat(Object.keys(y));
      return _ = _.filter((y, b) => _.indexOf(y) == b), _;
    }, s = t, o = e, r = $([]), { fields: i, items: a } = cn(o), l = U(() => {
      if (o.externalSort || r.value.length == 0) return o.items;
      const m = [...o.items];
      return Wp(r.value, m);
    }), f = U(() => {
      let m = i.value, _ = [];
      return m.length === 0 && (m = n([...a.value])), m.reduce((y, b, v) => {
        if (typeof b == "string")
          y.push(new Ol(b, b));
        else if (b instanceof Ol)
          y.push(b);
        else if (typeof b == "object") {
          const { key: O, label: S, sortable: k, sortFn: R } = b;
          y.push(new Ol(O, S, k, R));
        }
        return y;
      }, _);
    });
    function u(m) {
      const _ = r.value.findIndex((y) => y.key === m.key);
      return _ < 0 ? "" : _ + 1;
    }
    function d(m) {
      const _ = r.value.findIndex((b) => b.key === m.key);
      if (_ < 0) return "fas fa-sort";
      const y = r.value[_];
      return y.direction === Ns.ASC ? "fas fa-sort-up" : y.direction === Ns.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function h(m) {
      const { key: _ } = m, y = r.value.findIndex((b) => b.key === _);
      if (y < 0) {
        const b = new Sx(_, Ns.ASC, m.sortFn);
        r.value.push(b);
      } else {
        const b = r.value[y], v = b.direction;
        v === Ns.ASC ? b.direction = Ns.DESC : v === Ns.DESC && r.value.splice(y, 1);
      }
      s("sort", r.value, Wp);
    }
    function p(m, _, y, b) {
      s("onMouseOverCell", m, _, y, b);
    }
    let g = $(null);
    return Pt(() => {
      g.value = Gn();
    }), (m, _) => (C(), D("table", gs({ ...m.$attrs }, {
      class: { striped: m.striped, hover: m.hover }
    }), [
      c("thead", null, [
        (C(!0), D(Oe, null, Je(f.value, (y) => (C(), D("th", {
          key: `thead-${y.key}`,
          class: ue({ sortable: y.sortable }),
          onClick: (b) => y.sortable && h(y)
        }, [
          c("span", Cx, [
            Ne(m.$slots, `head(${y.key})`, {
              field: y,
              data: H(g),
              value: y.label
            }, () => [
              ee(F(y.label), 1)
            ], !0),
            y.sortable ? (C(), D("span", Tx, [
              c("span", Nx, F(u(y)), 1),
              c("span", Dx, [
                c("i", {
                  class: ue(d(y))
                }, null, 2)
              ])
            ])) : de("", !0)
          ])
        ], 10, Ox))), 128))
      ]),
      c("tbody", null, [
        (C(!0), D(Oe, null, Je(l.value, (y, b) => (C(), D(Oe, {
          key: `trow-${y?.id ?? b}`
        }, [
          Ne(m.$slots, "row", {
            item: y,
            index: b,
            colspan: f.value.length
          }, void 0, !0),
          c("tr", null, [
            (C(!0), D(Oe, null, Je(f.value, (v) => (C(), D("td", {
              key: `tcell-${v.key + (y?.id ?? b)}`,
              class: ue({ [`tcell-${v?.key}`]: !0 }),
              onMouseover: (O) => p(O, y, b, v)
            }, [
              Ne(m.$slots, `cell(${v?.key})`, {
                data: H(g),
                item: y,
                field: v,
                value: y[v?.key]
              }, () => [
                ee(F(y[v?.key]), 1)
              ], !0)
            ], 42, kx))), 128))
          ])
        ], 64))), 128))
      ]),
      c("tfoot", null, [
        Ne(m.$slots, "footer", { data: H(g) }, void 0, !0)
      ]),
      m.showEmpty && l.value.length === 0 ? (C(), D("tr", xx, [
        c("td", {
          colspan: f.value.length
        }, [
          Ne(m.$slots, "empty", {
            items: l.value,
            data: H(g),
            fields: f.value
          }, () => [
            c("span", { innerHTML: m.emptyText }, null, 8, Ix)
          ], !0)
        ], 8, Rx)
      ])) : de("", !0)
    ], 16));
  }
}), Vx = /* @__PURE__ */ Vn(Px, [["__scopeId", "data-v-b1e9b5de"]]);
var f_ = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(f_ || {});
const Mx = { class: "d-inline-block position-relative" }, Lx = ["disabled"], Kp = "data-prevent-close", Fx = /* @__PURE__ */ Ce({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: f_.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    menuEnd: { type: Boolean, default: !1 },
    size: { default: In.STANDARD },
    disabled: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: t, emit: n }) {
    const s = $(), o = e, r = $(), i = $(!1), a = $(o.variant), l = $(o.centered), f = $(o.dropup), u = $(o.dropend), d = $(o.dropstart), h = $(o.menuEnd), p = n, g = U(() => {
      const I = [];
      return a != null && a.value && I.push(`btn-${a.value}`), o.size && I.push(`btn-${o.size}`), I;
    }), m = U(() => {
      const I = [];
      return l != null && l.value && I.push("dropdown-center"), f != null && f.value && I.push("dropup"), d != null && d.value && I.push("dropstart"), !(d != null && d.value) && u != null && u.value && I.push("dropend"), I.length === 0 && I.push("dropdown"), I.unshift("btn-group"), I;
    }), _ = U(() => {
      const I = [];
      return i.value && I.push("show"), h.value && I.push("dropdown-menu-end"), I;
    }), y = () => {
      if (!i.value) return;
      const I = r.value.getBoundingClientRect(), P = s.value.getBoundingClientRect(), T = window.innerHeight - I.bottom, N = I.top, A = window.innerWidth - I.right, Y = I.left;
      f.value = T < P.height && N >= P.height, h.value = A < P.width && Y >= P.width;
    };
    async function b() {
      i.value = !0, await $s(), y();
    }
    function v() {
      i.value = !1;
    }
    function O(I) {
      i.value ? v() : b();
    }
    function S(I) {
      const { target: P } = I;
      P?.closest(`[${Kp}],[${Kp}=true]`) || v();
    }
    function k() {
      i.value && v();
    }
    Ot(i, (I, P) => {
      typeof P > "u" || I !== P && (p("toggle", { show: I }), I === !0 ? p("open", { show: I }) : p("close", { show: I }));
    }, { immediate: !0 });
    const R = {
      show: i,
      disabled: o.disabled,
      buttonClasses: g,
      onButtonClicked: O,
      onMenuClicked: S,
      onClickOutside: k,
      open: b,
      close: v
    };
    return t({
      ...R
    }), (I, P) => {
      const T = nE("click-outside");
      return C(), D("div", {
        ref_key: "dropDownRef",
        ref: r,
        class: ue([m.value, "dropdown-wrapper"])
      }, [
        At((C(), D("div", Mx, [
          Ne(I.$slots, "header", st(et({ ...R })), () => [
            c("button", {
              class: ue(["btn dropdown-toggle", g.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: O,
              disabled: I.disabled
            }, [
              Ne(I.$slots, "button", st(et({ ...R })), () => [
                ee(F(I.text), 1)
              ], !0)
            ], 10, Lx)
          ], !0),
          c("ul", {
            ref_key: "dropDownMenuRef",
            ref: s,
            class: ue(["dropdown-menu", _.value]),
            onClick: S
          }, [
            Ne(I.$slots, "default", st(et({ ...R })), void 0, !0)
          ], 2)
        ])), [
          [T, k]
        ])
      ], 2);
    };
  }
}), Bx = /* @__PURE__ */ Vn(Fx, [["__scopeId", "data-v-4910c394"]]), jx = ["data-prevent-close"], Ux = /* @__PURE__ */ Ce({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = cn(t);
    return (s, o) => (C(), D("li", {
      "data-prevent-close": H(n) ? "" : null
    }, [
      c("span", {
        class: ue(["dropdown-item", { active: s.active }]),
        role: "button",
        tabindex: "0"
      }, [
        Ne(s.$slots, "default")
      ], 2)
    ], 8, jx));
  }
}), Hx = {}, $x = { "data-prevent-close": "" }, Wx = { class: "dropdown-header" };
function Kx(e, t) {
  return C(), D("li", $x, [
    c("h6", Wx, [
      Ne(e.$slots, "default")
    ])
  ]);
}
const zx = /* @__PURE__ */ Vn(Hx, [["render", Kx]]), qx = {};
function Yx(e, t) {
  return C(), D("li", null, t[0] || (t[0] = [
    c("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const Xx = /* @__PURE__ */ Vn(qx, [["render", Yx]]), Gx = {
  mounted(e, t, n, s) {
    new eo(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Jx = (e, t) => {
  function n(r, i) {
    for (; r !== null; ) {
      if (r === i)
        return !0;
      r = r.parentNode;
    }
    return !1;
  }
  const s = new AbortController();
  function o(r, i) {
    document.addEventListener("click", function(a) {
      const l = a.target;
      r && (n(l, r) || i());
    }, { signal: s.signal });
  }
  return o(e, t), s;
}, Qx = {
  mounted(e, t, n, s) {
    const o = t.value;
    Jx(e, o);
  }
};
class Eu {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
sn(Eu, "list", /* @__PURE__ */ new Set());
const Zx = { class: "drawer-content" }, eR = { class: "drawer-header" }, tR = ["innerHTML"], nR = { class: "drawer-body" }, sR = ["innerHTML"], oR = { class: "drawer-footer" }, rR = ["innerHTML"], iR = ["innerHTML"], aR = /* @__PURE__ */ Ce({
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
    size: { default: In.STANDARD },
    btnSize: { default: In.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: s,
      keyboard: o,
      focus: r,
      size: i,
      btnSize: a
    } = cn(n), l = U(() => Vo(i.value, "drawer-")), f = U(() => Vo(a.value, "btn-")), u = $(), d = $(!1), h = Gn();
    let p;
    async function g() {
      return d.value === !0 ? void 0 : new Promise((k, R) => {
        d.value = !0, p = k;
      });
    }
    function m(k = !0) {
      d.value = !1, typeof p == "function" && p(k);
    }
    function _() {
      d.value === !0 ? g() : m(!1);
    }
    function y(k) {
      s?.value !== "static" && m(!1);
    }
    function b() {
      m(!1);
    }
    function v() {
      m(!1);
    }
    function O() {
      m(!0);
    }
    function S() {
      d.value === !0 ? Eu.add(h) : Eu.delete(h);
    }
    return t({
      show: g,
      hide: m,
      toggle: _
    }), (k, R) => (C(), it(ub, {
      onBeforeEnter: S,
      onAfterLeave: S
    }, {
      default: me(() => [
        d.value ? (C(), D("div", gs({
          key: 0,
          ref_key: "drawerElement",
          ref: u,
          class: "drawer",
          tabindex: "-1"
        }, { ...k.$attrs }, {
          onClick: Sm(y, ["self"])
        }), [
          c("div", {
            class: ue(["drawer-dialog", l.value])
          }, [
            c("div", Zx, [
              c("div", eR, [
                Ne(k.$slots, "header", {}, () => [
                  c("h5", {
                    class: "drawer-title",
                    innerHTML: k.title
                  }, null, 8, tR)
                ], !0),
                c("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: b
                })
              ]),
              c("div", nR, [
                Ne(k.$slots, "default", {}, () => [
                  c("span", { innerHTML: k.body }, null, 8, sR)
                ], !0)
              ]),
              c("div", oR, [
                Ne(k.$slots, "footer", {}, () => [
                  k.okOnly ? de("", !0) : (C(), D("button", {
                    key: 0,
                    type: "button",
                    class: ue(["ms-auto btn btn-secondary", f.value]),
                    onClick: v
                  }, [
                    Ne(k.$slots, "button-cancel", {}, () => [
                      c("span", { innerHTML: k.textCancel }, null, 8, rR)
                    ], !0)
                  ], 2)),
                  c("button", {
                    type: "button",
                    class: ue(["btn btn-primary", f.value]),
                    onClick: O
                  }, [
                    Ne(k.$slots, "button-ok", {}, () => [
                      c("span", { innerHTML: k.textOk }, null, 8, iR)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : de("", !0)
      ]),
      _: 3
    }));
  }
}), lR = /* @__PURE__ */ Vn(aR, [["__scopeId", "data-v-2e49e8cb"]]), Kt = "b", p_ = "$toaster", h_ = "$modalManager", uR = "$dialogManager";
class m_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = wa(Qk).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
sn(m_, "component");
class g_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = wa(rx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
sn(g_, "component");
class v_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = wa(Hk).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
sn(v_, "component");
function cR() {
  return Bt(p_);
}
function dR() {
  return Bt(h_);
}
function fR(e) {
  e.component(`${Kt}-drawer`, lR), e.component(`${Kt}-modal`, c_), e.component(`${Kt}-dialog`, d_), e.component(`${Kt}-pagination`, _x), e.component(`${Kt}-pagination-dropdown`, bx), e.component(`${Kt}-pagination-select`, Ax), e.component(`${Kt}-dropdown`, Bx), e.component(`${Kt}-dropdown-item`, Ux), e.component(`${Kt}-dropdown-header`, zx), e.component(`${Kt}-dropdown-divider`, Xx), e.component(`${Kt}-table`, Vx), e.component(`${Kt}-toast`, l_);
}
function pR(e) {
  e.directive("tooltip", Gx), e.directive("click-outside", Qx);
}
const hR = {
  install(e) {
    fR(e), pR(e);
    const t = v_.getComponent(), n = m_.getComponent(), s = g_.getComponent();
    e.provide(p_, t), e.provide(h_, n), e.provide(uR, s);
  }
}, mi = {
  BOTTOM_RIGHT: "bottom right"
}, mn = /* @__PURE__ */ Pn("notifications", () => {
  const e = dR(), t = cR();
  return {
    showSuccess: (f, u = "Success") => {
      t.toast({
        title: u,
        body: f,
        variant: "primary",
        delay: 4e3
      }, mi.BOTTOM_RIGHT);
    },
    showError: (f, u = "Error") => {
      t.toast({
        title: u,
        body: f,
        variant: "danger",
        delay: 6e3
      }, mi.BOTTOM_RIGHT);
    },
    showWarning: (f, u = "Warning") => {
      t.toast({
        title: u,
        body: f,
        variant: "warning",
        delay: 5e3
      }, mi.BOTTOM_RIGHT);
    },
    showInfo: (f, u = "Information") => {
      t.toast({
        title: u,
        body: f,
        variant: "info",
        delay: 4e3
      }, mi.BOTTOM_RIGHT);
    },
    confirmAction: async (f, u) => {
      try {
        return await e.confirm({
          title: f,
          body: u,
          textOk: "Yes",
          textCancel: "Cancel"
        }) === !0;
      } catch {
        return !1;
      }
    },
    alertUser: async (f, u) => {
      try {
        await e.alert({
          title: f,
          body: u,
          textOk: "OK"
        });
      } catch {
      }
    },
    showMrnErrors: async (f, u = "Some MRNs could not be added") => {
      const h = f.map((p) => `${p.mrn} — ${p.error}`).join(`
`);
      try {
        await e.alert({
          title: u,
          body: h,
          textOk: "OK"
        });
      } catch {
      }
    }
  };
}), Wo = /* @__PURE__ */ Pn("settings", () => {
  const e = Qs(), t = mn(), n = "1", s = cs({
    fhir_system: null,
    fhir_systems: [],
    mapping_resources: [],
    selected_mapping_resources: [],
    selected_custom_mapping_resources: []
  }), o = $(null), r = $([]), i = $([]), a = cs({
    fetch: !1,
    save: !1,
    importing: !1
  }), l = async () => {
    try {
      a.fetch = !0;
      const b = Vr(), [v] = await Promise.all([
        Ke.getProjectSettings(),
        b.fetchSchemas().catch(() => null)
      ]), S = v.data ?? {};
      Object.assign(s, S), o.value = s.fhir_system, r.value = [...s.selected_mapping_resources], i.value = [...s.selected_custom_mapping_resources];
    } catch (b) {
      e.addError(b, "settingsStore"), console.error("Failed to load project settings:", b);
    } finally {
      a.fetch = !1;
    }
  };
  return {
    loading: a,
    settings: s,
    selectedFhirSystem: o,
    selectedMappingResources: r,
    selectedCustomMappingResources: i,
    fetchProjectSettings: l,
    addPredefinedResource: async (b, v) => {
      try {
        const O = Vr(), S = O.currentResourceSpec === v ? O.draft || {} : {}, k = await Ke.createMappingResource({ name: b, resourceSpec: v, type: "predefined", params: S });
        return await l(), t.showSuccess(`${b} added`, "Resource added"), k;
      } catch (O) {
        let S = "Error adding the resource";
        O instanceof CO && (S = O.response?.data?.message ?? S), t.showError(`${b} not added: ${S}`, "Error");
      }
    },
    addCustomResource: async (b, v) => {
      const O = await Ke.createMappingResource({ name: b, resourceSpec: v, type: "custom" });
      return await l(), t.showSuccess(`${b} added`, "Resource added"), O;
    },
    softDeleteResource: async (b) => {
      if (!b.id) return;
      const v = b.type === "predefined" ? r.value : i.value, O = v.findIndex((k) => k.id === b.id);
      if (O === -1) return;
      const S = { ...v[O] };
      v[O] = { ...v[O], deleted: !0, deletedAt: (/* @__PURE__ */ new Date()).toISOString() };
      try {
        await Ke.softDeleteMappingResource(b.id), t.showWarning(`${b.name} soft-deleted`, "Resource Deleted");
      } catch (k) {
        throw v[O] = S, e.addError(k, "settingsStore.softDeleteResource"), t.showError(`Failed to soft-delete ${b.name}`), k;
      }
    },
    restoreResource: async (b) => {
      if (!b.id) return;
      const v = b.type === "predefined" ? r.value : i.value, O = v.findIndex((k) => k.id === b.id);
      if (O === -1) return;
      const S = { ...v[O] };
      v[O] = { ...v[O], deleted: !1, deletedAt: null };
      try {
        await Ke.restoreMappingResource(b.id), t.showSuccess(`${b.name} restored`, "Resource Restored");
      } catch (k) {
        throw v[O] = S, e.addError(k, "settingsStore.restoreResource"), t.showError(`Failed to restore ${b.name}`), k;
      }
    },
    deleteResource: async (b) => {
      if (!b.id) return !1;
      const v = b.type === "predefined" ? r.value : i.value, O = v.findIndex((k) => k.id === b.id);
      if (O === -1) return !1;
      const S = { ...v[O] };
      v.splice(O, 1);
      try {
        return await Ke.deleteMappingResource(b.id), t.showSuccess(`${b.name} removed`, "Resource Deleted"), !0;
      } catch (k) {
        return v.splice(O, 0, S), e.addError(k, "settingsStore.deleteResource"), t.showError(`Failed to delete ${b.name}`), !1;
      }
    },
    updateResource: async (b, v) => {
      if (b)
        try {
          const O = await Ke.updateMappingResource(b, v);
          await l();
          const S = O.data?.resource?.name || "Resource", k = O.data?.sync_results?.instances_updated ?? 0;
          return t.showSuccess(`${S} updated`, `Instances marked pending: ${k}`), O;
        } catch (O) {
          throw e.addError(O, "settingsStore.updateResource"), O;
        }
    },
    updateSelectedFhirSystem: async (b) => {
      await Ke.updateFhirSystem(b), o.value = b, s.fhir_system = b, t.showSuccess(
        b === null ? "FHIR system disabled" : "FHIR system changed",
        "FHIR System Updated"
      );
    },
    exportResources: () => {
      const b = [
        ...r.value,
        ...i.value
      ];
      return {
        version: n,
        exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
        items: b
      };
    },
    importResources: async (b, v = {}) => {
      const O = v.mode ?? "merge";
      if (!b || typeof b != "object") throw new Error("Invalid JSON payload");
      const S = b;
      if (!S.version || S.version !== n) throw new Error("Unsupported or missing version");
      if (!Array.isArray(S.items)) throw new Error("Invalid payload: items must be an array");
      a.importing = !0;
      try {
        const R = (await Ke.importMappingResources({ version: n, mode: O, items: S.items })).data?.summary || { added: 0, updated: 0, skipped: 0, total: 0 };
        return await l(), R;
      } finally {
        a.importing = !1;
      }
    }
  };
}), Ve = {
  Pending: "Pending",
  Fetching: "Fetching",
  Completed: "Completed",
  Failed: "Failed",
  Outdated: "Outdated",
  Deleted: "Deleted"
}, Es = /* @__PURE__ */ Pn("monitor", () => {
  const e = Qs(), t = $(!1), n = $([]), s = $([]), o = $(null), r = $(!1), i = 500, a = $({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: !1,
    hasPrevious: !1,
    perPageOptions: [10, 25, 50, 100, 250]
  }), l = async () => {
    try {
      t.value = !0;
      const M = await Ke.listMrns(a.value.page, a.value.limit);
      M.data.data && M.data.pagination ? (n.value = M.data.data, a.value.total = M.data.pagination.total, a.value.totalPages = M.data.pagination.total_pages, a.value.hasNext = M.data.pagination.has_next, a.value.hasPrevious = M.data.pagination.has_previous, M.data.project_summary && (o.value = M.data.project_summary)) : n.value = M.data, s.value = [];
    } catch (M) {
      e.addError(M, "monitorStore"), console.error("Failed to load MRNs:", M), n.value = [];
    } finally {
      t.value = !1;
    }
  }, f = (M) => Array.from(new Set(
    (M || "").split(/[\s,]+/).map((X) => X.trim()).filter(Boolean)
  )), u = (M) => {
    const X = (M || "").length ? (M || "").split(/[\s,]+/) : [], _e = X.map((nt) => nt.trim()), Ee = _e.filter((nt) => !nt).length, we = f(M), Re = we.length, Pe = Math.max(0, _e.filter(Boolean).length - Re), Me = we.slice(0, 10);
    return {
      tokens: X.length,
      unique: Re,
      duplicates: Pe,
      empties: Ee,
      overLimit: Re > i,
      limit: i,
      parsed: we,
      sample: Me
    };
  }, d = async (M) => {
    try {
      r.value = !0;
      const X = await Ke.addMrns(M);
      return await l(), X.data;
    } catch (X) {
      throw e.addError(X, "monitorStore"), console.error("Failed to add MRNs:", X), X;
    } finally {
      r.value = !1;
    }
  }, h = async (M) => {
    const X = f(M);
    if (X.length === 0)
      throw new Error("No MRNs provided");
    return await d(X);
  }, p = async (M) => await d([M]), g = async (M) => {
  }, m = async () => {
    try {
      t.value = !0;
      for (const M of s.value)
        await g(M);
    } catch (M) {
      e.addError(M, "monitorStore"), console.error("Failed to fetch selected MRNs:", M);
    } finally {
      t.value = !1;
    }
  }, _ = U(() => n.value.length > 0 && s.value.length === n.value.length), y = U(() => s.value.length > 0 && s.value.length < n.value.length), b = () => {
    _.value ? s.value = [] : s.value = n.value.map((M) => M.id);
  }, v = (M) => {
    const X = s.value.indexOf(M);
    X === -1 ? s.value.push(M) : s.value.splice(X, 1);
  }, O = (M) => {
    a.value.page = M, l();
  }, S = (M) => {
    a.value.limit = M, a.value.page = 1, l();
  }, k = async (M) => {
    try {
      return (await Ke.getMrnResources(M)).data;
    } catch (X) {
      return e.addError(X, "monitorStore"), console.error(`Failed to get resource status for MRN ${M}:`, X), { mrn: M, resources: [], total_resources: 0 };
    }
  }, R = async () => {
    try {
      const M = await Ke.getProjectSummary();
      return o.value = M.data, M.data;
    } catch (M) {
      return e.addError(M, "monitorStore"), console.error("Failed to get project summary:", M), null;
    }
  }, I = async (M, X) => {
    try {
      r.value = !0;
      const _e = await Ke.triggerFetchMrns(M, X);
      return await l(), _e.data;
    } catch (_e) {
      throw e.addError(_e, "monitorStore"), console.error("Failed to trigger fetch:", _e), _e;
    } finally {
      r.value = !1;
    }
  }, P = async (M) => {
    const X = n.value.filter((_e) => s.value.includes(_e.id)).map((_e) => _e.mrn);
    if (X.length === 0)
      throw new Error("No MRNs selected");
    return await I(X, M);
  }, T = async () => {
    try {
      r.value = !0;
      const M = await Ke.performFullSync();
      return await l(), await R(), M.data;
    } catch (M) {
      throw e.addError(M, "monitorStore"), console.error("Failed to perform full sync:", M), M;
    } finally {
      r.value = !1;
    }
  }, N = async (M, X, _e) => {
    try {
      const Ee = await Ke.retryFailedResource(M, X, _e);
      return await l(), Ee.data;
    } catch (Ee) {
      throw e.addError(Ee, "monitorStore"), console.error("Failed to retry resource:", Ee), Ee;
    }
  }, A = async (M) => {
    try {
      r.value = !0;
      const X = await Ke.bulkRetryFailed(M);
      return await l(), X.data;
    } catch (X) {
      throw e.addError(X, "monitorStore"), console.error("Failed to bulk retry failed resources:", X), X;
    } finally {
      r.value = !1;
    }
  }, Y = (M) => {
    if (M.status_summary)
      return M.status_summary.smart_status_display;
    const X = M.resources.filter((Me) => Me.status !== Ve.Deleted), _e = X.length, Ee = X.filter((Me) => Me.status === Ve.Completed).length;
    if (_e === 0) return "No Resources";
    if (Ee === _e) return "Completed";
    const we = Ee / _e * 100;
    if (we >= 75) return `Mostly Completed (${Math.round(we)}%)`;
    if (we >= 25) return `Mixed Progress (${Math.round(we)}%)`;
    if (we > 0) return `Starting (${Math.round(we)}%)`;
    const Re = {};
    return X.forEach((Me) => {
      Re[Me.status] = (Re[Me.status] || 0) + 1;
    }), Object.keys(Re).reduce((Me, nt) => Re[Me] > Re[nt] ? Me : nt, Ve.Pending);
  }, fe = (M) => {
    if (M.status_summary)
      return M.status_summary.overall_status;
    const X = M.resources.filter((Ee) => Ee.status !== Ve.Deleted);
    if (X.length === 0) return Ve.Pending;
    const _e = {};
    return X.forEach((Ee) => {
      _e[Ee.status] = (_e[Ee.status] || 0) + 1;
    }), Object.keys(_e).reduce((Ee, we) => _e[Ee] > _e[we] ? Ee : we, Ve.Pending);
  }, J = (M) => {
    if (M.status_summary)
      return M.status_summary.progress_bar_config;
    const X = M.resources.filter((Pe) => Pe.status !== Ve.Deleted), _e = X.length;
    if (_e === 0)
      return { segments: [], completion_percentage: 0, total_resources: 0 };
    const Ee = {};
    X.forEach((Pe) => {
      Ee[Pe.status] = (Ee[Pe.status] || 0) + 1;
    });
    const we = Object.entries(Ee).map(([Pe, Me]) => ({
      status: Pe,
      count: Me,
      percentage: Math.round(Me / _e * 100 * 10) / 10,
      color: W(Pe)
    })), Re = Ee[Ve.Completed] || 0;
    return {
      segments: we,
      completion_percentage: Math.round(Re / _e * 100 * 10) / 10,
      total_resources: _e
    };
  }, se = (M, X) => {
    if (M.status_summary?.resource_type_statuses[X])
      return M.status_summary.resource_type_statuses[X];
    const _e = M.resources.filter(
      (Pe) => Pe.name === X && Pe.status !== Ve.Deleted
    );
    if (_e.length === 0) return null;
    const Ee = _e.reduce((Pe, Me) => (Pe[Me.status] = (Pe[Me.status] || 0) + 1, Pe), {}), we = Ee[Ve.Completed] || 0, Re = _e.length;
    return {
      total_count: Re,
      completed_count: we,
      failed_count: Ee[Ve.Failed] || 0,
      pending_count: Ee[Ve.Pending] || 0,
      fetching_count: Ee[Ve.Fetching] || 0,
      outdated_count: Ee[Ve.Outdated] || 0,
      has_completed: we > 0,
      completion_percentage: Re > 0 ? we / Re * 100 : 0,
      is_archivable: we > 0
    };
  }, W = (M) => {
    switch (M) {
      case Ve.Completed:
        return "success";
      case Ve.Failed:
        return "danger";
      case Ve.Fetching:
        return "info";
      case Ve.Pending:
        return "warning";
      case Ve.Outdated:
        return "secondary";
      case Ve.Deleted:
        return "dark";
      default:
        return "secondary";
    }
  };
  return {
    // State
    loading: t,
    mrns: n,
    selectedMrns: s,
    projectSummary: o,
    operationLoading: r,
    pagination: a,
    // Computed
    allSelected: _,
    indeterminate: y,
    // Basic methods
    fetchMrns: l,
    addMrn: p,
    addMrns: d,
    addMrnsFromString: h,
    parseMrnsFromInput: f,
    analyzeMrnInput: u,
    fetchMrn: g,
    fetchSelected: m,
    toggleSelectAll: b,
    toggleSelection: v,
    setPage: O,
    setLimit: S,
    // Enhanced resource management
    getResourceStatus: k,
    getProjectSummary: R,
    triggerFetchMrns: I,
    triggerFetchSelected: P,
    performFullSync: T,
    retryFailedResource: N,
    bulkRetryFailed: A,
    // Enhanced status methods
    getSmartStatusDisplay: Y,
    getStatusForStyling: fe,
    getProgressBarConfig: J,
    getResourceTypeStatus: se,
    getStatusColor: W
  };
}), mR = "data:image/png;base64,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", gR = { class: "d-flex gap-3 align-items-start" }, vR = { class: "feature-icon d-flex align-items-start justify-content-center" }, _R = { class: "d-flex flex-column gap-2 align-items-start" }, yR = { class: "d-flex gap-2" }, ER = { class: "fs-6 fw-bold mb-1" }, bR = { class: "text-muted mb-0" }, wR = /* @__PURE__ */ Ce({
  __name: "FeatureHighlight",
  setup(e) {
    return (t, n) => (C(), D("div", gR, [
      c("div", vR, [
        Ne(t.$slots, "icon", {}, void 0, !0)
      ]),
      c("div", _R, [
        c("div", yR, [
          c("span", ER, [
            Ne(t.$slots, "title", {}, void 0, !0)
          ])
        ]),
        c("p", bR, [
          Ne(t.$slots, "default", {}, void 0, !0)
        ])
      ])
    ]));
  }
}), Cl = /* @__PURE__ */ Qt(wR, [["__scopeId", "data-v-ee9dd710"]]), AR = { class: "card h-100 border-0 shadow-sm bg-light rounded" }, SR = { class: "card-body d-flex align-items-center" }, OR = { class: "step-number me-4" }, CR = { class: "fw-bold" }, TR = { class: "step-content flex-grow-1" }, NR = { class: "mb-1" }, DR = { class: "text-muted mb-2" }, kR = /* @__PURE__ */ Ce({
  __name: "StepCard",
  props: {
    number: {},
    title: {},
    variant: { default: "primary" }
  },
  setup(e) {
    const t = e, n = U(() => `bg-${t.variant}`);
    return (s, o) => (C(), D("div", AR, [
      c("div", SR, [
        c("div", OR, [
          c("div", {
            class: ue(["text-white rounded-circle d-flex align-items-center justify-content-center", n.value])
          }, [
            c("span", CR, F(s.number), 1)
          ], 2)
        ]),
        c("div", TR, [
          c("h5", NR, F(s.title), 1),
          c("p", DR, [
            Ne(s.$slots, "default", {}, void 0, !0)
          ]),
          c("div", null, [
            Ne(s.$slots, "actions", {}, void 0, !0)
          ])
        ])
      ])
    ]));
  }
}), gi = /* @__PURE__ */ Qt(kR, [["__scopeId", "data-v-00ad78d0"]]), xR = { class: "home-page" }, RR = { class: "hero-section text-center mb-5" }, IR = { class: "d-flex flex-column gap-2 align-items-center" }, PR = ["src"], VR = { class: "row g-4 mt-2 text-start" }, MR = { class: "col-md-4" }, LR = { class: "card h-100 border-0 shadow-sm" }, FR = { class: "card-body" }, BR = { class: "col-md-4" }, jR = { class: "card h-100 border-0 shadow-sm" }, UR = { class: "card-body" }, HR = { class: "col-md-4" }, $R = { class: "card h-100 border-0 shadow-sm" }, WR = { class: "card-body" }, KR = { class: "getting-started-section mb-5" }, zR = { class: "row g-4 workflow-steps" }, qR = { class: "col-12 col-lg-6" }, YR = { class: "col-12 col-lg-6" }, XR = { class: "col-12 col-lg-6" }, GR = { class: "col-12 col-lg-6" }, JR = {
  key: 0,
  class: "status-section"
}, QR = { class: "row g-4 mb-4" }, ZR = { class: "col-md-3 col-sm-6" }, e2 = { class: "stat-card card border-0 bg-primary text-white text-center h-100" }, t2 = { class: "card-body" }, n2 = { class: "mb-1" }, s2 = { class: "col-md-3 col-sm-6" }, o2 = { class: "stat-card card border-0 bg-secondary text-white text-center h-100" }, r2 = { class: "card-body" }, i2 = { class: "mb-1" }, a2 = { class: "col-md-3 col-sm-6" }, l2 = { class: "stat-card card border-0 bg-dark text-white text-center h-100" }, u2 = { class: "card-body" }, c2 = { class: "mb-1" }, d2 = { class: "col-md-3 col-sm-6" }, f2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, p2 = { class: "card-body" }, h2 = { class: "mb-1" }, m2 = { class: "row g-4" }, g2 = { class: "col-md-3 col-sm-6" }, v2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, _2 = { class: "card-body" }, y2 = { class: "mb-1" }, E2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, b2 = { class: "col-md-3 col-sm-6" }, w2 = { class: "stat-card card border-0 bg-danger text-white text-center h-100" }, A2 = { class: "card-body" }, S2 = { class: "mb-1" }, O2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, C2 = { class: "col-md-3 col-sm-6" }, T2 = { class: "stat-card card border-0 bg-info text-white text-center h-100" }, N2 = { class: "card-body" }, D2 = { class: "mb-1" }, k2 = { class: "col-md-3 col-sm-6" }, x2 = { class: "stat-card card border-0 bg-warning text-white text-center h-100" }, R2 = { class: "card-body" }, I2 = { class: "mb-1" }, P2 = {
  key: 0,
  class: "mt-4 text-center"
}, V2 = {
  class: "btn-group gap-2",
  role: "group"
}, M2 = {
  key: 1,
  class: "alert alert-info text-center"
}, L2 = /* @__PURE__ */ Ce({
  __name: "HomePage",
  setup(e) {
    const t = Wo(), n = Es(), {
      selectedFhirSystem: s,
      selectedMappingResources: o,
      selectedCustomMappingResources: r
    } = fn(t);
    Pt(async () => {
      try {
        await Promise.all([
          t.fetchProjectSettings(),
          n.getProjectSummary()
        ]);
      } catch (b) {
        console.error("Failed to load dashboard data:", b);
      }
    });
    const i = U(() => s.value && (o.value?.length > 0 || r.value?.length > 0)), a = U(() => i.value && n.projectSummary), l = U(() => n.projectSummary?.total_mrns || 0), f = U(() => {
      const b = o.value?.length || 0, v = r.value?.length || 0;
      return b + v;
    }), u = U(() => n.projectSummary?.overall_status_counts?.completed || 0), d = U(() => n.projectSummary?.overall_status_counts?.pending || 0), h = U(() => n.projectSummary?.overall_status_counts?.fetching || 0), p = U(() => n.projectSummary?.overall_status_counts?.failed || 0), g = U(() => n.projectSummary ? Object.values(n.projectSummary.overall_status_counts).reduce((b, v) => b + v, 0) : 0), m = U(() => {
      if (!n.projectSummary) return 0;
      const b = n.projectSummary.overall_status_counts?.deleted || 0;
      return g.value - b;
    }), _ = U(() => {
      if (!m.value) return 0;
      const b = p.value;
      return Math.round(b / m.value * 100);
    }), y = U(() => {
      if (!m.value) return 0;
      const b = u.value;
      return Math.round(b / m.value * 100);
    });
    return (b, v) => {
      const O = rt("router-link");
      return C(), D("div", xR, [
        c("div", RR, [
          c("div", IR, [
            c("img", {
              src: H(mR),
              title: "ALL FHIR",
              style: { height: "200px" }
            }, null, 8, PR),
            v[0] || (v[0] = c("p", { class: "text-muted mb-4" }, " With this module, FHIR resources for configured MRNs are retrieved in the background. It connects to your specified EHR systems, fetches the payload, and stores it in its original form. When data is ready, it assembles the requested mix of MRNs and resource types into a ZIP tailored to your needs. ", -1))
          ]),
          v[10] || (v[10] = c("div", { class: "text-center mb-2" }, [
            c("h2", null, "Key Features")
          ], -1)),
          c("div", VR, [
            c("div", MR, [
              c("div", LR, [
                c("div", FR, [
                  le(Cl, null, {
                    icon: me(() => v[1] || (v[1] = [
                      c("i", { class: "fas fa-database fa-4x text-success" }, null, -1)
                    ])),
                    title: me(() => v[2] || (v[2] = [
                      ee(" Resources Management ")
                    ])),
                    default: me(() => [
                      v[3] || (v[3] = ee(" Manage patient MRNs and monitor the status of each FHIR resource type as it progresses through pending, fetching, completed, or failed states — all from one place. "))
                    ]),
                    _: 1,
                    __: [3]
                  })
                ])
              ])
            ]),
            c("div", BR, [
              c("div", jR, [
                c("div", UR, [
                  le(Cl, null, {
                    icon: me(() => v[4] || (v[4] = [
                      c("i", { class: "fas fa-robot fa-4x text-primary" }, null, -1)
                    ])),
                    title: me(() => v[5] || (v[5] = [
                      ee(" Background Automation ")
                    ])),
                    default: me(() => [
                      v[6] || (v[6] = ee(" Resource collection runs automatically in the background. New and updated data are fetched on a schedule without manual steps, so downloads are ready on demand with minimal waiting. "))
                    ]),
                    _: 1,
                    __: [6]
                  })
                ])
              ])
            ]),
            c("div", HR, [
              c("div", $R, [
                c("div", WR, [
                  le(Cl, null, {
                    icon: me(() => v[7] || (v[7] = [
                      c("i", { class: "fas fa-file-archive fa-4x text-info" }, null, -1)
                    ])),
                    title: me(() => v[8] || (v[8] = [
                      ee(" Archive Creation ")
                    ])),
                    default: me(() => [
                      v[9] || (v[9] = ee(" Create archives by selecting any combination of MRNs and resource types. Build exactly the package you need as a ZIP file. "))
                    ]),
                    _: 1,
                    __: [9]
                  })
                ])
              ])
            ])
          ])
        ]),
        c("div", KR, [
          v[19] || (v[19] = c("div", { class: "text-center mb-4" }, [
            c("h2", null, "Getting Started"),
            c("p", { class: "text-muted" }, "Follow these steps to fetch and package FHIR resources")
          ], -1)),
          c("div", zR, [
            c("div", qR, [
              le(gi, {
                number: 1,
                title: "Configure Your Setup",
                variant: "primary"
              }, {
                actions: me(() => [
                  le(O, {
                    to: "/setup",
                    class: "btn btn-primary btn-sm"
                  }, {
                    default: me(() => v[11] || (v[11] = [
                      c("i", { class: "fas fa-cogs me-1" }, null, -1),
                      ee(" Go to Setup ")
                    ])),
                    _: 1,
                    __: [11]
                  })
                ]),
                default: me(() => [
                  v[12] || (v[12] = ee(" Select FHIR system and resource types to fetch "))
                ]),
                _: 1,
                __: [12]
              })
            ]),
            c("div", YR, [
              le(gi, {
                number: 2,
                title: "Add Patient MRNs",
                variant: "success"
              }, {
                actions: me(() => [
                  le(O, {
                    to: "/resources",
                    class: "btn btn-success btn-sm"
                  }, {
                    default: me(() => v[13] || (v[13] = [
                      c("i", { class: "fas fa-database me-1" }, null, -1),
                      ee(" Manage MRNs ")
                    ])),
                    _: 1,
                    __: [13]
                  })
                ]),
                default: me(() => [
                  v[14] || (v[14] = ee(" Add patient identifiers to fetch FHIR resources "))
                ]),
                _: 1,
                __: [14]
              })
            ]),
            c("div", XR, [
              le(gi, {
                number: 3,
                title: "Background Fetching",
                variant: "info"
              }, {
                actions: me(() => [
                  le(O, {
                    to: "/tasks",
                    class: "btn btn-info btn-sm"
                  }, {
                    default: me(() => v[15] || (v[15] = [
                      c("i", { class: "fas fa-tasks me-1" }, null, -1),
                      ee(" View Progress ")
                    ])),
                    _: 1,
                    __: [15]
                  })
                ]),
                default: me(() => [
                  v[16] || (v[16] = ee(" Fetching runs automatically in the background. Monitor progress and, if needed, queue manual retries — no manual steps required for routine updates. "))
                ]),
                _: 1,
                __: [16]
              })
            ]),
            c("div", GR, [
              le(gi, {
                number: 4,
                title: "Generate ZIP Archive",
                variant: "warning"
              }, {
                actions: me(() => [
                  le(O, {
                    to: "/resources",
                    class: "btn btn-warning btn-sm"
                  }, {
                    default: me(() => v[17] || (v[17] = [
                      c("i", { class: "fas fa-download me-1" }, null, -1),
                      ee(" Create ZIP ")
                    ])),
                    _: 1,
                    __: [17]
                  })
                ]),
                default: me(() => [
                  v[18] || (v[18] = ee(" Once resources are completed, generate a tailored ZIP file with exactly the MRNs and resource types you want. "))
                ]),
                _: 1,
                __: [18]
              })
            ])
          ])
        ]),
        a.value ? (C(), D("div", JR, [
          v[40] || (v[40] = c("div", { class: "text-center mb-4" }, [
            c("h2", null, "Project Status"),
            c("p", { class: "text-muted" }, "Current overview of your project")
          ], -1)),
          c("div", QR, [
            c("div", ZR, [
              c("div", e2, [
                c("div", t2, [
                  v[20] || (v[20] = c("i", { class: "fas fa-user-injured fa-2x mb-2" }, null, -1)),
                  c("h3", n2, F(l.value), 1),
                  v[21] || (v[21] = c("p", { class: "mb-0 small" }, "Total MRNs", -1))
                ])
              ])
            ]),
            c("div", s2, [
              c("div", o2, [
                c("div", r2, [
                  v[22] || (v[22] = c("i", { class: "fas fa-database fa-2x mb-2" }, null, -1)),
                  c("h3", i2, F(g.value), 1),
                  v[23] || (v[23] = c("p", { class: "mb-0 small" }, "Total Resources", -1)),
                  v[24] || (v[24] = c("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "includes deleted", -1))
                ])
              ])
            ]),
            c("div", a2, [
              c("div", l2, [
                c("div", u2, [
                  v[25] || (v[25] = c("i", { class: "fas fa-play-circle fa-2x mb-2" }, null, -1)),
                  c("h3", c2, F(m.value), 1),
                  v[26] || (v[26] = c("p", { class: "mb-0 small" }, "Active Resources", -1)),
                  v[27] || (v[27] = c("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "excludes deleted", -1))
                ])
              ])
            ]),
            c("div", d2, [
              c("div", f2, [
                c("div", p2, [
                  v[28] || (v[28] = c("i", { class: "fas fa-file-medical fa-2x mb-2" }, null, -1)),
                  c("h3", h2, F(f.value), 1),
                  v[29] || (v[29] = c("p", { class: "mb-0 small" }, "Resource Types", -1))
                ])
              ])
            ])
          ]),
          c("div", m2, [
            c("div", g2, [
              c("div", v2, [
                c("div", _2, [
                  v[30] || (v[30] = c("i", { class: "fas fa-check-circle fa-2x mb-2" }, null, -1)),
                  c("h3", y2, F(u.value), 1),
                  v[31] || (v[31] = c("p", { class: "mb-0 small" }, "Completed", -1)),
                  y.value > 0 ? (C(), D("p", E2, F(y.value) + "% complete", 1)) : de("", !0)
                ])
              ])
            ]),
            c("div", b2, [
              c("div", w2, [
                c("div", A2, [
                  v[32] || (v[32] = c("i", { class: "fas fa-exclamation-circle fa-2x mb-2" }, null, -1)),
                  c("h3", S2, F(p.value), 1),
                  v[33] || (v[33] = c("p", { class: "mb-0 small" }, "Failed", -1)),
                  _.value > 0 ? (C(), D("p", O2, F(_.value) + "% error rate", 1)) : de("", !0)
                ])
              ])
            ]),
            c("div", C2, [
              c("div", T2, [
                c("div", N2, [
                  v[34] || (v[34] = c("i", { class: "fas fa-sync fa-2x mb-2" }, null, -1)),
                  c("h3", D2, F(h.value), 1),
                  v[35] || (v[35] = c("p", { class: "mb-0 small" }, "Fetching", -1))
                ])
              ])
            ]),
            c("div", k2, [
              c("div", x2, [
                c("div", R2, [
                  v[36] || (v[36] = c("i", { class: "fas fa-clock fa-2x mb-2" }, null, -1)),
                  c("h3", I2, F(d.value), 1),
                  v[37] || (v[37] = c("p", { class: "mb-0 small" }, "Pending", -1))
                ])
              ])
            ])
          ]),
          i.value ? (C(), D("div", P2, [
            c("div", V2, [
              le(O, {
                to: "/resources",
                class: "btn btn-primary"
              }, {
                default: me(() => v[38] || (v[38] = [
                  c("i", { class: "fas fa-database me-1" }, null, -1),
                  ee(" Manage Resources ")
                ])),
                _: 1,
                __: [38]
              }),
              le(O, {
                to: "/tasks",
                class: "btn btn-outline-secondary"
              }, {
                default: me(() => v[39] || (v[39] = [
                  c("i", { class: "fas fa-tasks me-1" }, null, -1),
                  ee(" View Tasks ")
                ])),
                _: 1,
                __: [39]
              })
            ])
          ])) : de("", !0)
        ])) : (C(), D("div", M2, [
          v[42] || (v[42] = c("i", { class: "fas fa-info-circle fa-2x mb-3" }, null, -1)),
          v[43] || (v[43] = c("h4", null, "Get Started", -1)),
          v[44] || (v[44] = c("p", { class: "mb-3" }, "Configure your FHIR system and resource types to begin fetching data.", -1)),
          le(O, {
            to: "/setup",
            class: "btn btn-primary"
          }, {
            default: me(() => v[41] || (v[41] = [
              c("i", { class: "fas fa-cogs me-1" }, null, -1),
              ee(" Configure Now ")
            ])),
            _: 1,
            __: [41]
          })
        ]))
      ]);
    };
  }
}), F2 = /* @__PURE__ */ Qt(L2, [["__scopeId", "data-v-cfdeccfe"]]), B2 = ["value"], j2 = ["value"], U2 = /* @__PURE__ */ Ce({
  __name: "FhirSystemDropdown",
  setup(e) {
    const t = Wo(), n = mn(), { settings: s, selectedFhirSystem: o } = fn(t), r = async (i) => {
      const a = i.target, l = a.value, f = l === "" || l === "__disabled__" ? null : parseInt(l), u = s.value.fhir_system;
      if (u === null) {
        await t.updateSelectedFhirSystem(f);
        return;
      }
      if (f !== u) {
        if (!await n.confirmAction(
          "Change FHIR System",
          "Changing the FHIR system may affect future fetches. Continue?"
        )) {
          a.value = u === null ? "" : String(u);
          return;
        }
        await t.updateSelectedFhirSystem(f);
      }
    };
    return (i, a) => (C(), D("div", null, [
      a[2] || (a[2] = c("label", { for: "ehr-dropdown" }, "FHIR Systems", -1)),
      c("select", {
        class: "form-select form-select-sm",
        id: "ehr-dropdown",
        value: H(o) === null ? "__disabled__" : String(H(o)),
        onChange: r
      }, [
        a[0] || (a[0] = c("option", {
          value: "",
          disabled: ""
        }, "Select a FHIR System", -1)),
        a[1] || (a[1] = c("option", { value: "__disabled__" }, "Disabled", -1)),
        (C(!0), D(Oe, null, Je(H(s).fhir_systems, (l) => (C(), D("option", {
          key: l.ehr_id,
          value: l.ehr_id
        }, F(l.ehr_name), 9, j2))), 128))
      ], 40, B2)
    ]));
  }
}), H2 = { class: "mb-3" }, $2 = { class: "form-check" }, W2 = { class: "form-check" }, K2 = { class: "d-flex gap-2 justify-content-end" }, z2 = ["onClick"], q2 = ["onClick"], Y2 = /* @__PURE__ */ Ce({
  __name: "ImportResourcesModal",
  setup(e, { expose: t }) {
    const n = $(null), s = $("merge"), o = async () => (s.value = "merge", await n.value?.show() ? s.value : null), r = (i) => {
      i(!0);
    };
    return t({ show: o }), (i, a) => {
      const l = rt("b-modal");
      return C(), it(l, {
        ref_key: "importModal",
        ref: n
      }, {
        title: me(() => a[2] || (a[2] = [
          ee("Import Resources")
        ])),
        footer: me(({ hide: f }) => [
          c("div", K2, [
            c("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (u) => f(!1)
            }, a[5] || (a[5] = [
              c("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              ee("Cancel ")
            ]), 8, z2),
            c("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (u) => r(f)
            }, a[6] || (a[6] = [
              c("i", { class: "fas fa-file-import fa-fw me-1" }, null, -1),
              ee("Continue ")
            ]), 8, q2)
          ])
        ]),
        default: me(() => [
          c("div", H2, [
            c("div", $2, [
              At(c("input", {
                class: "form-check-input",
                type: "radio",
                name: "import-mode",
                id: "mode-merge",
                value: "merge",
                "onUpdate:modelValue": a[0] || (a[0] = (f) => s.value = f)
              }, null, 512), [
                [Qi, s.value]
              ]),
              a[3] || (a[3] = c("label", {
                class: "form-check-label",
                for: "mode-merge"
              }, [
                c("strong", null, "Merge"),
                c("div", { class: "small text-muted" }, "Adds new resources and updates names when resourceSpec matches. Keeps existing items.")
              ], -1))
            ]),
            c("div", W2, [
              At(c("input", {
                class: "form-check-input",
                type: "radio",
                name: "import-mode",
                id: "mode-replace",
                value: "replace",
                "onUpdate:modelValue": a[1] || (a[1] = (f) => s.value = f)
              }, null, 512), [
                [Qi, s.value]
              ]),
              a[4] || (a[4] = c("label", {
                class: "form-check-label",
                for: "mode-replace"
              }, [
                c("strong", null, "Replace"),
                c("div", { class: "small text-muted" }, "Replaces current selection with the file contents. This will discard your current list.")
              ], -1))
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), Lt = Object.freeze({
  PREDEFINED: "PREDEFINED",
  CUSTOM: "CUSTOM"
}), X2 = {
  key: 0,
  class: "mt-3 border-top pt-3"
}, G2 = { class: "d-flex flex-column gap-2" }, J2 = { class: "form-label mb-1" }, Q2 = {
  key: 0,
  class: "text-danger"
}, Z2 = ["placeholder", "value", "onInput"], eI = ["placeholder", "value", "onInput"], tI = ["value", "onChange"], nI = ["value", "onInput"], sI = ["value", "onChange"], oI = ["value"], rI = {
  key: 5,
  class: "form-text text-muted"
}, iI = {
  key: 6,
  class: "text-danger small"
}, aI = /* @__PURE__ */ Ce({
  __name: "EndpointParamsForm",
  props: {
    resourceSpec: {}
  },
  setup(e) {
    const t = Vr(), { draft: n } = fn(t), s = e, o = U(() => t.getSchema(s.resourceSpec)), r = U(() => ({}));
    function i(a, l) {
      t.updateDraftField(a, l);
    }
    return (a, l) => o.value.length ? (C(), D("div", X2, [
      l[2] || (l[2] = c("div", { class: "mb-2 text-muted small" }, "Endpoint Parameters", -1)),
      c("div", G2, [
        (C(!0), D(Oe, null, Je(o.value, (f) => (C(), D("div", {
          key: f.key
        }, [
          c("label", J2, [
            ee(F(f.label), 1),
            f.required ? (C(), D("span", Q2, " *")) : de("", !0)
          ]),
          f.type === "string" ? (C(), D("input", {
            key: 0,
            class: "form-control form-control-sm",
            type: "text",
            placeholder: f.description || "",
            value: H(n)[f.key] ?? "",
            onInput: (u) => i(f.key, u.target.value)
          }, null, 40, Z2)) : f.type === "number" ? (C(), D("input", {
            key: 1,
            class: "form-control form-control-sm",
            type: "number",
            placeholder: f.description || "",
            value: H(n)[f.key] ?? "",
            onInput: (u) => i(f.key, u.target.valueAsNumber)
          }, null, 40, eI)) : f.type === "boolean" ? (C(), D("select", {
            key: 2,
            class: "form-select form-select-sm",
            value: String(H(n)[f.key] ?? ""),
            onChange: (u) => i(f.key, u.target.value === "true")
          }, l[0] || (l[0] = [
            c("option", { value: "" }, "--", -1),
            c("option", { value: "true" }, "True", -1),
            c("option", { value: "false" }, "False", -1)
          ]), 40, tI)) : f.type === "date" ? (C(), D("input", {
            key: 3,
            class: "form-control form-control-sm",
            type: "date",
            value: H(n)[f.key] ?? "",
            onInput: (u) => i(f.key, u.target.value)
          }, null, 40, nI)) : f.type === "enum" ? (C(), D("select", {
            key: 4,
            class: "form-select form-select-sm",
            value: H(n)[f.key] ?? "",
            onChange: (u) => i(f.key, u.target.value)
          }, [
            l[1] || (l[1] = c("option", { value: "" }, "-- Select --", -1)),
            (C(!0), D(Oe, null, Je(f.enumOptions || [], (u) => (C(), D("option", {
              key: String(u.value),
              value: String(u.value)
            }, F(u.label), 9, oI))), 128))
          ], 40, sI)) : de("", !0),
          f.server_resolved ? (C(), D("div", rI, "Resolved server-side (e.g., to FHIR ResearchStudy ID)")) : de("", !0),
          r.value[f.key] ? (C(), D("div", iI, F(r.value[f.key]), 1)) : de("", !0)
        ]))), 128))
      ])
    ])) : de("", !0);
  }
}), lI = { class: "mb-3" }, uI = ["value"], cI = ["disabled"], dI = ["value"], fI = ["value"], pI = ["disabled"], hI = /* @__PURE__ */ Ce({
  __name: "ResourceForm",
  props: {
    modelValue: { default: () => ({}) },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = Wo(), { settings: n } = fn(t), s = U(() => n.value.mapping_resources), o = LE(e, "modelValue"), r = Vr();
    return Ot(() => o.value.resourceType, (i) => {
      i === Lt.PREDEFINED && (r.loaded || r.fetchSchemas());
    }), Ot(() => o.value.predefinedResource, (i) => {
      o.value.resourceType === Lt.PREDEFINED && i && r.prepareDraftFor(i, o.value.params || {});
    }), (i, a) => (C(), D("div", null, [
      c("form", null, [
        c("div", lI, [
          a[5] || (a[5] = c("label", {
            class: "form-label",
            for: "display-name"
          }, "Display Name", -1)),
          At(c("input", {
            "onUpdate:modelValue": a[0] || (a[0] = (l) => o.value.displayName = l),
            class: "form-control form-control-sm",
            type: "text",
            id: "display-name",
            placeholder: "E.g., Vital Signs, Social History, etc.",
            required: ""
          }, null, 512), [
            [Ji, o.value.displayName]
          ])
        ]),
        c("div", null, [
          At(c("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-predefined",
            value: H(Lt).PREDEFINED,
            "onUpdate:modelValue": a[1] || (a[1] = (l) => o.value.resourceType = l)
          }, null, 8, uI), [
            [Qi, o.value.resourceType]
          ]),
          a[7] || (a[7] = c("label", {
            class: "form-label ms-2",
            for: "resource-type-predefined"
          }, "Predefined Resource", -1)),
          At(c("select", {
            "onUpdate:modelValue": a[2] || (a[2] = (l) => o.value.predefinedResource = l),
            class: "form-select form-select-sm",
            id: "predefined-resource",
            disabled: o.value.resourceType !== H(Lt).PREDEFINED
          }, [
            a[6] || (a[6] = c("option", {
              disabled: "",
              value: ""
            }, "Please Select...", -1)),
            (C(!0), D(Oe, null, Je(s.value, (l) => (C(), D("option", {
              key: l.resourceSpec,
              value: l.resourceSpec
            }, F(l.name), 9, dI))), 128))
          ], 8, cI), [
            [fr, o.value.predefinedResource]
          ]),
          o.value.resourceType === H(Lt).PREDEFINED && o.value.predefinedResource ? (C(), it(aI, {
            key: 0,
            resourceSpec: o.value.predefinedResource
          }, null, 8, ["resourceSpec"])) : de("", !0)
        ]),
        a[9] || (a[9] = c("div", { class: "d-flex justify-start-center my-2" }, [
          c("span", null, "—OR—")
        ], -1)),
        c("div", null, [
          At(c("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-custom",
            value: H(Lt).CUSTOM,
            "onUpdate:modelValue": a[3] || (a[3] = (l) => o.value.resourceType = l)
          }, null, 8, fI), [
            [Qi, o.value.resourceType]
          ]),
          a[8] || (a[8] = c("label", {
            class: "form-label ms-2",
            for: "resource-type-custom"
          }, "Custom Resource", -1)),
          At(c("input", {
            "onUpdate:modelValue": a[4] || (a[4] = (l) => o.value.customResourceSpec = l),
            class: "form-control form-control-sm",
            type: "text",
            id: "custom-resource",
            disabled: o.value.resourceType !== H(Lt).CUSTOM,
            placeholder: "Observation?category=social-history"
          }, null, 8, pI), [
            [Ji, o.value.customResourceSpec]
          ])
        ])
      ])
    ]));
  }
}), mI = { class: "d-flex gap-2 justify-content-end" }, gI = ["onClick"], vI = ["onClick", "disabled"], __ = /* @__PURE__ */ Ce({
  __name: "ResourceFormModal",
  setup(e, { expose: t }) {
    const n = $(null), s = Vr(), { draft: o } = fn(s), r = $("create"), i = () => ({
      displayName: "",
      customResourceSpec: "",
      predefinedResource: "",
      resourceType: Lt.PREDEFINED,
      params: {}
    }), a = $(i()), l = U(() => a.value.displayName.trim() ? a.value.resourceType === Lt.PREDEFINED ? !!a.value.predefinedResource : !!a.value.customResourceSpec.trim() : !1), f = async () => (r.value = "create", a.value = i(), await n.value?.show() ? a.value : null), u = async (h) => (r.value = "edit", a.value = i(), a.value.displayName = h.name, h.type === "predefined" ? (a.value.resourceType = Lt.PREDEFINED, a.value.predefinedResource = h.resourceSpec, a.value.params = h.params || {}, s.prepareDraftFor(h.resourceSpec, h.params || {})) : (a.value.resourceType = Lt.CUSTOM, a.value.customResourceSpec = h.resourceSpec), await n.value?.show() ? a.value : null), d = (h) => {
      l.value && (a.value.resourceType === Lt.PREDEFINED && (a.value.params = { ...o.value || {} }), h(!0));
    };
    return t({ show: f, showEdit: u }), (h, p) => {
      const g = rt("b-modal");
      return C(), it(g, {
        ref_key: "resourceFormModal",
        ref: n
      }, {
        title: me(() => [
          ee(F(r.value === "create" ? "Add Resource" : "Edit Resource"), 1)
        ]),
        footer: me(({ hide: m }) => [
          c("div", mI, [
            c("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (_) => m(!1)
            }, p[1] || (p[1] = [
              c("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              ee("Cancel ")
            ]), 8, gI),
            c("button", {
              type: "button",
              class: "btn btn-sm btn-primary",
              onClick: (_) => d(m),
              disabled: !l.value
            }, [
              c("i", {
                class: ue(`fas fa-fw ${r.value === "create" ? "fa-plus" : "fa-save"} me-1`)
              }, null, 2),
              ee(F(r.value === "create" ? "Add" : "Save"), 1)
            ], 8, vI)
          ])
        ]),
        default: me(() => [
          le(hI, {
            modelValue: a.value,
            "onUpdate:modelValue": p[0] || (p[0] = (m) => a.value = m)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 512);
    };
  }
}), _I = { class: "d-flex align-items-center w-100" }, yI = { class: "ms-auto d-flex align-items-center gap-2" }, EI = ["disabled"], bI = ["disabled"], wI = ["disabled"], AI = ["disabled"], SI = {
  key: 0,
  class: "d-flex align-items-center text-muted small ms-2"
}, OI = "Import resources from JSON. Choose Merge to add/update or Replace to overwrite your current list.", CI = "Export current resources to a JSON file.", TI = "Manage the list of mapping resources. Import/Export uses JSON; Import supports Merge or Replace.", NI = /* @__PURE__ */ Ce({
  __name: "ResourcesToolbar",
  setup(e) {
    const t = Wo(), n = mn(), { loading: s } = fn(t), o = $(null), r = $(null), i = $(null), a = $("merge");
    async function l() {
      if (!o.value) return;
      const p = await o.value.show();
      p && (p.resourceType === Lt.PREDEFINED ? await t.addPredefinedResource(p.displayName, p.predefinedResource) : await t.addCustomResource(p.displayName, p.customResourceSpec));
    }
    async function f() {
      if (!r.value) return;
      const p = await r.value.show();
      p && (p === "replace" && !await n.confirmAction(
        "Replace Resources",
        "This will replace your current resources with the ones from the file. This action will discard your current list. Continue?"
      ) || (a.value = p, i.value?.click()));
    }
    async function u(p) {
      try {
        const g = p.target, m = g.files && g.files[0];
        if (!m) return;
        const _ = await m.text(), y = JSON.parse(_), b = await t.importResources(y, { mode: a.value }), v = "Resources Import Summary", O = `Imported ${b.added} new, updated ${b.updated}, skipped ${b.skipped} (total ${b.total}).`;
        await n.alertUser(v, O);
      } catch (g) {
        console.error("Import failed:", g), n.showError("Failed to import resources. Please check the JSON file.");
      } finally {
        i.value && (i.value.value = ""), a.value = "merge";
      }
    }
    function d() {
      try {
        const p = t.exportResources(), g = new Blob([JSON.stringify(p, null, 2)], { type: "application/json" }), m = window.URL.createObjectURL(g), _ = document.createElement("a"), y = /* @__PURE__ */ new Date(), b = `${y.getFullYear()}${String(y.getMonth() + 1).padStart(2, "0")}${String(y.getDate()).padStart(2, "0")}-${String(y.getHours()).padStart(2, "0")}${String(y.getMinutes()).padStart(2, "0")}`;
        _.href = m, _.download = `resources-${b}.json`, document.body.appendChild(_), _.click(), _.remove(), window.URL.revokeObjectURL(m), n.showSuccess("Exported resources successfully");
      } catch (p) {
        console.error("Export failed:", p), n.showError("Failed to export resources");
      }
    }
    async function h() {
      try {
        await t.fetchProjectSettings(), n.showSuccess("Resources refreshed successfully");
      } catch (p) {
        console.error("Failed to refresh resources:", p), n.showError("Failed to refresh resources");
      }
    }
    return (p, g) => (C(), D("div", _I, [
      c("div", { class: "d-flex align-items-center gap-2" }, [
        g[0] || (g[0] = c("span", null, "Resources", -1)),
        c("i", {
          class: "fas fa-info-circle text-muted",
          title: TI,
          "aria-label": "Resources help",
          role: "img"
        })
      ]),
      c("div", yI, [
        c("button", {
          class: "btn btn-sm btn-primary",
          onClick: f,
          title: OI,
          disabled: H(s).fetch || H(s).importing
        }, g[1] || (g[1] = [
          c("i", { class: "fas fa-upload fa-fw" }, null, -1),
          c("span", null, "Import", -1)
        ]), 8, EI),
        c("button", {
          class: "btn btn-sm btn-primary",
          onClick: d,
          title: CI,
          disabled: H(s).fetch || H(s).importing
        }, g[2] || (g[2] = [
          c("i", { class: "fas fa-download fa-fw" }, null, -1),
          c("span", null, "Export", -1)
        ]), 8, bI),
        c("button", {
          class: "btn btn-sm btn-primary",
          onClick: l,
          disabled: H(s).fetch || H(s).importing
        }, g[3] || (g[3] = [
          c("i", { class: "fas fa-plus fa-fw" }, null, -1),
          c("span", null, "Add", -1)
        ]), 8, wI),
        c("button", {
          class: "btn btn-outline-secondary btn-sm",
          onClick: h,
          disabled: H(s).fetch,
          title: "Refresh resources"
        }, [
          c("i", {
            class: ue(["fas fa-rotate-right fa-fw", { "fa-spin": H(s).fetch }])
          }, null, 2)
        ], 8, AI),
        H(s).importing ? (C(), D("div", SI, g[4] || (g[4] = [
          c("i", { class: "fas fa-spinner fa-spin me-1" }, null, -1),
          ee(" Importing... ")
        ]))) : de("", !0)
      ]),
      c("input", {
        ref_key: "importInput",
        ref: i,
        type: "file",
        accept: "application/json",
        class: "d-none",
        onChange: u
      }, null, 544),
      le(Y2, {
        ref_key: "importModal",
        ref: r
      }, null, 512),
      le(__, {
        ref_key: "resourceFormModal",
        ref: o
      }, null, 512)
    ]));
  }
}), DI = { class: "table table-striped table-hover table-sm border-top" }, kI = {
  key: 0,
  class: "badge bg-info-subtle text-info-emphasis",
  title: "Parameters configured"
}, xI = {
  key: 1,
  class: "text-muted"
}, RI = { class: "d-flex gap-2" }, II = ["onClick", "disabled"], PI = ["onClick", "disabled"], VI = ["onClick", "disabled"], MI = ["onClick", "disabled"], LI = { key: 0 }, FI = /* @__PURE__ */ Ce({
  __name: "ResourcesTable",
  setup(e) {
    const t = Wo(), n = mn(), { selectedMappingResources: s, selectedCustomMappingResources: o } = fn(t), r = U(() => [
      ...s.value,
      ...o.value
    ]), i = cs({}), a = (m) => m.id || `${m.type}::${m.name}::${m.resourceSpec}`, l = (m) => !!i[a(m)], f = (m) => !!(m.params && Object.keys(m.params).length), u = $(null);
    async function d(m) {
      if (!m.id || !u.value) return;
      const _ = await u.value.showEdit(m);
      if (!_) return;
      const y = { name: _.displayName };
      _.resourceType === "PREDEFINED" ? (y.resourceSpec = _.predefinedResource, _.params !== void 0 && (y.params = _.params)) : y.resourceSpec = _.customResourceSpec, await t.updateResource(m.id, y);
    }
    async function h(m) {
      const _ = a(m);
      i[_] = !0;
      try {
        await t.softDeleteResource(m);
      } finally {
        i[_] = !1;
      }
    }
    async function p(m) {
      const _ = a(m);
      i[_] = !0;
      try {
        await t.restoreResource(m);
      } finally {
        i[_] = !1;
      }
    }
    async function g(m) {
      const _ = a(m);
      i[_] = !0;
      try {
        if (!await n.confirmAction(
          "Delete Forever",
          "This will permanently delete all instances marked as Deleted for this resource. This action cannot be undone. Continue?"
        ) || !m.id) return;
        await t.deleteResource(m) && n.showSuccess("Resource removed and deleted items purged");
      } finally {
        i[_] = !1;
      }
    }
    return (m, _) => (C(), D(Oe, null, [
      c("table", DI, [
        _[3] || (_[3] = c("thead", null, [
          c("tr", null, [
            c("th", null, "Name"),
            c("th", null, "Type"),
            c("th", null, "Resource Specification"),
            c("th", null, "Params"),
            c("th", null, "Actions")
          ])
        ], -1)),
        c("tbody", null, [
          (C(!0), D(Oe, null, Je(r.value, (y) => (C(), D("tr", {
            key: y.id || `${y.type}-${y.name}-${y.resourceSpec}`,
            class: ue({ "table-secondary": y.deleted })
          }, [
            c("td", null, [
              c("span", {
                class: ue({ "text-decoration-line-through text-muted": y.deleted })
              }, F(y.name), 3)
            ]),
            c("td", null, F(y.type), 1),
            c("td", null, [
              c("span", {
                class: ue({ "text-decoration-line-through text-muted": y.deleted })
              }, F(y.resourceSpec || "-"), 3)
            ]),
            c("td", null, [
              f(y) ? (C(), D("span", kI, _[0] || (_[0] = [
                c("i", { class: "fas fa-sliders-h me-1" }, null, -1),
                ee("Yes ")
              ]))) : (C(), D("span", xI, "No"))
            ]),
            c("td", null, [
              c("div", RI, [
                y.deleted ? de("", !0) : (C(), D("button", {
                  key: 0,
                  type: "button",
                  class: "btn btn-outline-primary btn-sm btn-icon",
                  onClick: (b) => d(y),
                  disabled: !y.id,
                  title: "Edit"
                }, _[1] || (_[1] = [
                  c("i", { class: "fas fa-pen fa-fw" }, null, -1)
                ]), 8, II)),
                y.deleted ? (C(), D(Oe, { key: 2 }, [
                  c("button", {
                    type: "button",
                    class: "btn btn-outline-success btn-sm btn-icon",
                    onClick: (b) => p(y),
                    disabled: l(y),
                    title: "Restore"
                  }, [
                    c("i", {
                      class: ue(`fas fa-fw ${l(y) ? "fa-spinner fa-spin" : "fa-rotate-left"}`)
                    }, null, 2)
                  ], 8, VI),
                  c("button", {
                    type: "button",
                    class: "btn btn-outline-danger btn-sm btn-icon",
                    onClick: (b) => g(y),
                    disabled: l(y),
                    title: "Delete forever"
                  }, [
                    c("i", {
                      class: ue(`fas fa-fw ${l(y) ? "fa-spinner fa-spin" : "fa-trash-can"}`)
                    }, null, 2)
                  ], 8, MI)
                ], 64)) : (C(), D("button", {
                  key: 1,
                  type: "button",
                  class: "btn btn-outline-danger btn-sm btn-icon",
                  onClick: (b) => h(y),
                  disabled: l(y),
                  title: "Soft delete"
                }, [
                  c("i", {
                    class: ue(`fas fa-fw ${l(y) ? "fa-spinner fa-spin" : "fa-trash-can"}`)
                  }, null, 2)
                ], 8, PI))
              ])
            ])
          ], 2))), 128)),
          r.value.length === 0 ? (C(), D("tr", LI, _[2] || (_[2] = [
            c("td", {
              colspan: "5",
              class: "text-muted text-center"
            }, "No resources configured", -1)
          ]))) : de("", !0)
        ])
      ]),
      le(__, {
        ref_key: "resourceFormModal",
        ref: u
      }, null, 512)
    ], 64));
  }
}), BI = { class: "d-flex flex-column gap-4" }, jI = { class: "card" }, UI = { class: "card-body px-0 py-0" }, HI = { class: "p-2" }, $I = /* @__PURE__ */ Ce({
  __name: "SetupPage",
  setup(e) {
    return (t, n) => (C(), D("div", BI, [
      le(U2),
      c("div", jI, [
        c("div", UI, [
          c("div", HI, [
            le(NI)
          ]),
          le(FI)
        ])
      ])
    ]));
  }
}), y_ = /* @__PURE__ */ Pn("operations", () => {
  const e = $(!1), t = $(null), n = $(!0), s = $({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), o = (p) => {
    e.value = p;
  }, r = (p, g, m, _) => {
    t.value = {
      operation: p,
      success: g,
      message: m,
      data: _,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  }, i = () => {
    n.value = !n.value;
  }, a = (p) => {
    s.value = {
      visible: !0,
      archiveType: "selected",
      selectedMrns: p
    };
  }, l = () => {
    s.value = {
      visible: !0,
      archiveType: "all",
      selectedMrns: []
    };
  }, f = () => {
    s.value.visible = !1;
  }, u = U(() => s.value.visible), d = U(() => s.value.archiveType), h = U(() => s.value.selectedMrns);
  return {
    // State
    loading: e,
    lastOperation: t,
    showSummary: n,
    // Actions
    setLoading: o,
    recordOperation: r,
    toggleSummary: i,
    // Streaming Modal
    streamingModalVisible: u,
    streamingModalType: d,
    streamingModalSelectedMrns: h,
    showStreamingModalSelected: a,
    showStreamingModalAll: l,
    hideStreamingModal: f
  };
}), WI = { class: "mb-3" }, KI = { class: "d-flex flex-wrap gap-2 align-items-center" }, zI = { class: "d-flex gap-2" }, qI = ["disabled"], YI = { key: 0 }, XI = { key: 1 }, GI = ["disabled"], JI = /* @__PURE__ */ Ce({
  __name: "MonitorToolbar",
  emits: ["addMrn"],
  setup(e) {
    const t = Es(), n = y_(), s = mn(), o = U(() => t.selectedMrns.length === 0), r = U(() => t.operationLoading), i = U(() => t.loading), a = async () => {
      try {
        const d = await t.triggerFetchSelected();
        s.showSuccess(`Fetch triggered for ${d.mrns?.length || 0} MRN(s). ${d.tasks_created || 0} tasks created.`);
      } catch (d) {
        console.error("Failed to trigger fetch for selected MRNs:", d), s.showError("Failed to trigger fetch for selected MRNs");
      }
    }, l = async () => {
      try {
        await Promise.all([
          t.fetchMrns(),
          t.getProjectSummary()
        ]), s.showSuccess("Data refreshed successfully");
      } catch (d) {
        console.error("Failed to refresh data:", d), s.showError("Failed to refresh data");
      }
    }, f = () => {
      if (o.value) {
        s.showWarning("No MRNs selected for streaming archive");
        return;
      }
      const d = t.mrns.filter((h) => t.selectedMrns.includes(h.id)).map((h) => h.mrn);
      n.showStreamingModalSelected(d);
    }, u = () => {
      n.showStreamingModalAll();
    };
    return (d, h) => {
      const p = rt("b-dropdown-item"), g = rt("b-dropdown");
      return C(), D("div", WI, [
        c("div", KI, [
          c("div", zI, [
            c("button", {
              class: "btn btn-primary btn-sm",
              onClick: h[0] || (h[0] = (m) => d.$emit("addMrn"))
            }, h[1] || (h[1] = [
              c("i", { class: "fas fa-plus-circle fa-fw" }, null, -1),
              ee(" Add MRN ")
            ])),
            c("button", {
              class: "btn btn-outline-primary btn-sm",
              onClick: a,
              disabled: o.value || r.value,
              title: "Trigger fetch for selected MRNs"
            }, [
              r.value ? (C(), D("span", XI, h[3] || (h[3] = [
                c("span", null, [
                  c("i", { class: "fas fa-spinner fa-spin fa-fw" }),
                  ee(" Fetch Selected")
                ], -1)
              ]))) : (C(), D("span", YI, h[2] || (h[2] = [
                c("i", { class: "fas fa-cloud-arrow-down fa-fw" }, null, -1),
                ee(" Fetch Selected")
              ])))
            ], 8, qI)
          ]),
          le(g, {
            variant: "success",
            title: "Stream download archives",
            size: "sm"
          }, {
            button: me(() => h[4] || (h[4] = [
              c("i", { class: "fas fa-download fa-fw me-1" }, null, -1),
              ee("Download ")
            ])),
            default: me(() => [
              le(p, {
                onClick: f,
                class: ue({ disabled: o.value }),
                "prevent-close": !1
              }, {
                default: me(() => h[5] || (h[5] = [
                  c("i", { class: "fas fa-download me-2" }, null, -1),
                  ee("Download Selected Records ")
                ])),
                _: 1,
                __: [5]
              }, 8, ["class"]),
              le(p, {
                onClick: u,
                "prevent-close": !1
              }, {
                default: me(() => h[6] || (h[6] = [
                  c("i", { class: "fas fa-download me-2" }, null, -1),
                  ee("Download All Records ")
                ])),
                _: 1,
                __: [6]
              })
            ]),
            _: 1
          }),
          c("button", {
            class: "btn btn-outline-secondary btn-sm",
            onClick: l,
            disabled: i.value,
            title: "Refresh data"
          }, [
            c("i", {
              class: ue(["fas fa-rotate-right fa-fw", { "fa-spin": i.value }])
            }, null, 2)
          ], 8, GI)
        ])
      ]);
    };
  }
}), bc = /* @__PURE__ */ Pn("streaming", () => {
  const e = $({
    active: !1,
    filename: "",
    startTime: null
  }), t = U(() => e.value.active), n = U(() => e.value.startTime ? Math.round((Date.now() - e.value.startTime.getTime()) / 1e3) : 0);
  return {
    // State
    streamingProgress: e,
    // Computed
    isStreamingActive: t,
    streamingDuration: n,
    // Actions
    startStreaming: (i) => {
      e.value = {
        active: !0,
        filename: i,
        startTime: /* @__PURE__ */ new Date()
      };
    },
    finishStreaming: () => {
      const i = e.value.startTime ? Date.now() - e.value.startTime.getTime() : 0;
      return e.value = {
        active: !1,
        filename: "",
        startTime: null
      }, Math.round(i / 1e3);
    },
    resetStreaming: () => {
      e.value = {
        active: !1,
        filename: "",
        startTime: null
      };
    }
  };
}), E_ = /* @__PURE__ */ Pn("resourceContent", () => {
  const e = Qs(), t = $(!1), n = $(null), s = $(null), o = async (g, m, _, y) => {
    try {
      t.value = !0;
      const b = await Ke.getResourceContent(g, m, _, y);
      if (b.data.success)
        return n.value = b.data, b.data;
      throw new Error(b.data.error || "Failed to fetch resource content");
    } catch (b) {
      throw e.addError(b, "resourceContentStore"), console.error("Failed to fetch resource content:", b), b;
    } finally {
      t.value = !1;
    }
  }, r = async (g, m, _, y) => await o(g, m, _, y);
  return {
    // State
    loading: t,
    currentContent: n,
    // Actions
    fetchResourceContent: o,
    loadResourceContent: r,
    showResourceContent: async (g, m, _, y) => (await r(g, m, _, y), s.value?.show()),
    setModalRef: (g) => {
      s.value = g;
    },
    hideModal: () => {
      s.value?.hide();
    },
    clearContent: () => {
      n.value = null;
    },
    copyToClipboard: async (g) => {
      try {
        if (navigator.clipboard && window.isSecureContext)
          return await navigator.clipboard.writeText(g), !0;
        {
          const m = document.createElement("textarea");
          m.value = g, m.style.position = "fixed", m.style.left = "-999999px", m.style.top = "-999999px", document.body.appendChild(m), m.focus(), m.select();
          const _ = document.execCommand("copy");
          return document.body.removeChild(m), _;
        }
      } catch (m) {
        return console.error("Failed to copy to clipboard:", m), !1;
      }
    },
    // Getters
    getContentStats: () => {
      if (!n.value) return null;
      const { content: g, metadata: m } = n.value, _ = g.split(`
`).length, y = g.length;
      return {
        lines: _,
        characters: y,
        size_human: m.preview_size_human,
        is_truncated: m.is_truncated,
        full_size_human: m.full_size_human
      };
    },
    isJsonContent: () => n.value?.metadata.is_valid_json || !1,
    getDisplayTitle: () => {
      if (!n.value) return "Resource Content";
      const { mrn: g, resource_name: m, repeat_instance: _ } = n.value;
      return `${m} - ${g} (Instance ${_})`;
    }
  };
}), QI = { class: "align-middle" }, ZI = { class: "d-flex flex-column" }, eP = { class: "text-muted" }, tP = {
  key: 0,
  class: "d-block text-muted"
}, nP = {
  key: 0,
  class: "text-success"
}, sP = {
  key: 1,
  class: "text-muted"
}, oP = {
  key: 0,
  class: "text-danger"
}, rP = ["title"], iP = ["title"], aP = {
  key: 1,
  class: "text-muted"
}, lP = { class: "d-flex gap-2" }, uP = ["disabled"], cP = ["disabled"], dP = ["disabled"], fP = {
  key: 0,
  class: "table-warning"
}, pP = { colspan: "5" }, hP = { class: "p-2" }, mP = { class: "mb-0 mt-1" }, gP = /* @__PURE__ */ Ce({
  __name: "MonitorResourceRow",
  props: {
    resource: {},
    mrn: {},
    recordId: {}
  },
  setup(e) {
    const t = e, n = Es(), s = bc(), o = mn(), r = E_(), i = $(!1), a = $(!1), l = $(!1), f = (m) => {
      const _ = "badge";
      switch (m) {
        case Ve.Pending:
          return `${_} bg-warning text-dark`;
        case Ve.Fetching:
          return `${_} bg-info text-dark`;
        case Ve.Completed:
          return `${_} bg-success`;
        case Ve.Failed:
          return `${_} bg-danger`;
        case Ve.Outdated:
          return `${_} bg-secondary`;
        case Ve.Deleted:
          return `${_} bg-dark`;
        default:
          return `${_} bg-secondary`;
      }
    }, u = (m) => {
      if (!m) return "-";
      try {
        const _ = new Date(m);
        return _.toLocaleDateString() + " " + _.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
      } catch {
        return m;
      }
    }, d = (m) => m ? m.length > 50 ? m.substring(0, 50) + "..." : m : "-", h = async () => {
      try {
        a.value = !0, await n.retryFailedResource(
          t.mrn,
          t.resource.name,
          t.resource.repeat_instance
        );
      } catch (m) {
        console.error("Failed to retry resource:", m);
      } finally {
        a.value = !1;
      }
    }, p = async () => {
      try {
        l.value = !0, await r.showResourceContent(
          t.recordId,
          t.resource.name,
          t.resource.repeat_instance || 1
        );
      } catch (m) {
        console.error("Failed to load resource content:", m), o.showError("Failed to load resource content");
      } finally {
        l.value = !1;
      }
    }, g = async () => {
      try {
        a.value = !0;
        const m = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_"), _ = `${t.mrn}_${t.resource.name}_${m}`;
        s.startStreaming(_), o.showInfo(`Started streaming download: ${_}`);
        const y = {
          mrns: [t.mrn],
          resource_types: [t.resource.name],
          archive_name: _
        }, b = await Ke.streamSelectedArchive([t.mrn], y), v = new Blob([b.data]), O = window.URL.createObjectURL(v), S = document.createElement("a");
        S.href = O, S.download = `${_}.zip`, document.body.appendChild(S), S.click(), document.body.removeChild(S), window.URL.revokeObjectURL(O);
        const k = s.finishStreaming();
        o.showSuccess(`Download completed: ${_} (${k}s)`);
      } catch (m) {
        s.finishStreaming(), o.showError(`Streaming download failed: ${m.message}`), console.error("Failed to stream download resource:", m);
      } finally {
        a.value = !1;
      }
    };
    return (m, _) => (C(), D(Oe, null, [
      c("tr", QI, [
        c("td", null, [
          c("div", ZI, [
            c("strong", null, F(m.resource.name), 1),
            c("small", eP, F(m.resource.mapping_type) + " | " + F(m.resource.resource_spec), 1)
          ])
        ]),
        c("td", null, [
          c("span", {
            class: ue(f(m.resource.status))
          }, F(m.resource.status), 3),
          m.resource.repeat_instance ? (C(), D("small", tP, " Instance #" + F(m.resource.repeat_instance), 1)) : de("", !0)
        ]),
        c("td", null, [
          m.resource.fetch_date ? (C(), D("div", nP, [
            _[1] || (_[1] = c("i", { class: "fas fa-check-circle fa-fw" }, null, -1)),
            ee(" " + F(u(m.resource.fetch_date)), 1)
          ])) : (C(), D("div", sP, "-"))
        ]),
        c("td", null, [
          m.resource.error_message ? (C(), D("div", oP, [
            _[2] || (_[2] = c("i", { class: "fas fa-exclamation-triangle fa-fw" }, null, -1)),
            c("span", {
              title: m.resource.error_message
            }, F(d(m.resource.error_message)), 9, rP),
            m.resource.error_message.length > 50 ? (C(), D("button", {
              key: 0,
              class: "btn btn-link btn-sm p-0 ms-1",
              onClick: _[0] || (_[0] = (y) => i.value = !i.value),
              title: i.value ? "Show less" : "Show more"
            }, [
              c("i", {
                class: ue(`fas fa-chevron-${i.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, iP)) : de("", !0)
          ])) : (C(), D("div", aP, "-"))
        ]),
        c("td", null, [
          c("div", lP, [
            m.resource.status === "Failed" ? (C(), D("button", {
              key: 0,
              class: "btn btn-sm btn-warning btn-icon",
              onClick: h,
              disabled: a.value,
              title: "Retry this resource"
            }, _[3] || (_[3] = [
              c("i", { class: "fas fa-rotate-right fa-fw" }, null, -1)
            ]), 8, uP)) : de("", !0),
            m.resource.status === "Completed" ? (C(), D("button", {
              key: 1,
              class: "btn btn-sm btn-outline-primary btn-icon",
              onClick: p,
              disabled: l.value,
              title: "View resource details"
            }, [
              c("i", {
                class: ue(`fas fa-fw ${l.value ? "fa-spinner fa-spin" : "fa-eye"}`)
              }, null, 2)
            ], 8, cP)) : de("", !0),
            m.resource.status === "Completed" ? (C(), D("button", {
              key: 2,
              class: "btn btn-sm btn-outline-success btn-icon",
              onClick: g,
              disabled: a.value || H(s).isStreamingActive,
              title: "Stream download this resource"
            }, _[4] || (_[4] = [
              c("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 8, dP)) : de("", !0)
          ])
        ])
      ]),
      i.value && m.resource.error_message ? (C(), D("tr", fP, [
        c("td", pP, [
          c("div", hP, [
            _[5] || (_[5] = c("strong", null, "Error Details:", -1)),
            c("pre", mP, F(m.resource.error_message), 1)
          ])
        ])
      ])) : de("", !0)
    ], 64));
  }
}), vP = { class: "align-middle" }, _P = ["checked"], yP = {
  key: 0,
  class: "status-display-smart"
}, EP = ["title"], bP = {
  key: 1,
  class: "status-display-progress"
}, wP = {
  class: "progress position-relative",
  style: { height: "6px" }
}, AP = ["title"], SP = { class: "text-muted" }, OP = {
  key: 2,
  class: "status-display-badges"
}, CP = ["title"], TP = {
  key: 3,
  class: "status-display-legacy"
}, NP = ["title"], DP = {
  key: 0,
  class: "position-absolute bg-dark text-white p-2 rounded shadow-lg",
  style: { "z-index": "1000", top: "100%", left: "0", width: "250px" }
}, kP = { class: "small" }, xP = { class: "d-flex justify-content-between" }, RP = { class: "d-flex justify-content-between" }, IP = { class: "d-flex align-items-center" }, PP = ["aria-expanded"], VP = { class: "d-flex gap-2" }, MP = ["disabled"], LP = {
  key: 0,
  class: "fas fa-cloud-arrow-down fa-fw"
}, FP = {
  key: 1,
  class: "fas fa-spinner fa-spin fa-fw"
}, BP = ["disabled", "title"], jP = {
  key: 0,
  class: "fas fa-redo fa-fw"
}, UP = {
  key: 1,
  class: "fas fa-spinner fa-spin fa-fw"
}, HP = ["disabled", "title"], $P = {
  colspan: "5",
  class: "p-0"
}, WP = { class: "ps-3" }, KP = { class: "table table-sm table-bordered mb-0" }, zP = /* @__PURE__ */ Ce({
  __name: "MonitorTableRow",
  props: {
    item: {},
    selected: { type: Boolean }
  },
  setup(e) {
    const t = Es(), n = bc(), s = mn(), o = e, r = $(!1), i = $(!1), a = $(!1), l = $("progress"), f = () => {
      r.value = !r.value;
    }, u = U(() => {
      const I = o.item.resources.filter((J) => J.status !== Ve.Deleted), P = I.length, T = I.filter((J) => J.status === Ve.Completed).length, N = I.filter((J) => J.status === Ve.Failed).length, A = I.filter((J) => J.status === Ve.Pending).length, Y = I.filter((J) => J.status === Ve.Fetching).length;
      let fe = `${T}/${P} completed`;
      return N > 0 && (fe += `, ${N} failed`), Y > 0 && (fe += `, ${Y} fetching`), A > 0 && (fe += `, ${A} pending`), fe;
    }), d = U(() => t.getProgressBarConfig(o.item)), h = U(() => o.item.resources.some((I) => I.status === Ve.Failed)), p = U(() => !h.value), g = U(() => {
      if (h.value) {
        const I = o.item.resources.filter((P) => P.status === Ve.Failed).length;
        return `Retry ${I} failed resource${I > 1 ? "s" : ""} for this record`;
      } else
        return "No failed resources to retry";
    }), m = U(() => o.item.resources.some((I) => I.status === Ve.Completed)), _ = U(() => !m.value), y = U(() => {
      if (m.value) {
        const I = o.item.resources.filter((P) => P.status === Ve.Completed).length;
        return `Stream download ${I} completed resource${I > 1 ? "s" : ""} for MRN ${o.item.mrn}`;
      } else
        return "No completed resources to stream";
    }), b = () => {
      const I = d.value;
      return I.segments.length === 0 ? "No resources" : `${I.segments.map((T) => `${T.status}: ${T.count}`).join(", ")} | ${Math.round(I.completion_percentage)}% complete`;
    }, v = () => b() + " (hover for details)", O = () => {
      const I = t.getStatusForStyling(o.item);
      return `badge bg-${t.getStatusColor(I)}`;
    }, S = async () => {
      try {
        i.value = !0, await t.triggerFetchMrns([o.item.mrn]);
      } catch (I) {
        console.error("Failed to trigger fetch for MRN:", I);
      } finally {
        i.value = !1;
      }
    }, k = async () => {
      if (h.value)
        try {
          i.value = !0, await Ke.retryFailed({ record_ids: [o.item.id] }), await t.getProjectSummary();
        } catch (I) {
          console.error("Failed to retry failed resources:", I);
        } finally {
          i.value = !1;
        }
    }, R = async () => {
      if (m.value)
        try {
          i.value = !0;
          const I = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_"), P = `${o.item.mrn}_all_resources_${I}`;
          n.startStreaming(P), s.showInfo(`Started streaming download: ${P}`);
          const T = o.item.resources.filter((W) => W.status === Ve.Completed).map((W) => W.name).filter((W, M, X) => X.indexOf(W) === M), N = {
            mrns: [o.item.mrn],
            resource_types: T,
            archive_name: P
          }, A = await Ke.streamSelectedArchive([o.item.mrn], N), Y = new Blob([A.data]), fe = window.URL.createObjectURL(Y), J = document.createElement("a");
          J.href = fe, J.download = `${P}.zip`, document.body.appendChild(J), J.click(), document.body.removeChild(J), window.URL.revokeObjectURL(fe);
          const se = n.finishStreaming();
          s.showSuccess(`Download completed: ${P} (${se}s)`);
        } catch (I) {
          n.finishStreaming(), s.showError(`Streaming download failed: ${I.message}`), console.error("Failed to stream download MRN:", I);
        } finally {
          i.value = !1;
        }
    };
    return (I, P) => (C(), D(Oe, null, [
      c("tr", vP, [
        c("td", null, [
          c("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: I.selected,
            onChange: P[0] || (P[0] = (T) => H(t).toggleSelection(I.item.id))
          }, null, 40, _P)
        ]),
        c("td", null, F(I.item.mrn), 1),
        c("td", null, [
          l.value === "smart" ? (C(), D("div", yP, [
            c("span", {
              class: ue(O()),
              title: b()
            }, F(H(t).getSmartStatusDisplay(I.item)), 11, EP)
          ])) : l.value === "progress" ? (C(), D("div", bP, [
            c("div", wP, [
              (C(!0), D(Oe, null, Je(d.value.segments, (T) => (C(), D("div", {
                key: T.status,
                class: ue(`progress-bar bg-${T.color}`),
                style: Mt({ width: T.percentage + "%" }),
                title: `${T.status}: ${T.count} (${T.percentage}%)`
              }, null, 14, AP))), 128))
            ]),
            c("small", SP, F(Math.round(d.value.completion_percentage)) + "% complete", 1)
          ])) : l.value === "badges" ? (C(), D("div", OP, [
            (C(!0), D(Oe, null, Je(d.value.segments, (T) => (C(), D("span", {
              key: T.status,
              class: ue(`badge bg-${T.color} me-1`),
              title: `${T.status}: ${T.count} resources`,
              style: { "font-size": "0.7em" }
            }, F(T.status.charAt(0).toUpperCase()) + ": " + F(T.count), 11, CP))), 128))
          ])) : (C(), D("div", TP, [
            c("span", {
              class: ue(O()),
              title: v(),
              onMouseenter: P[1] || (P[1] = (T) => a.value = !0),
              onMouseleave: P[2] || (P[2] = (T) => a.value = !1)
            }, F(H(t).getSmartStatusDisplay(I.item)), 43, NP),
            a.value ? (C(), D("div", DP, [
              P[6] || (P[6] = c("div", { class: "fw-bold mb-1" }, "Status Breakdown", -1)),
              c("div", kP, [
                (C(!0), D(Oe, null, Je(d.value.segments, (T) => (C(), D("div", {
                  key: T.status,
                  class: "d-flex justify-content-between"
                }, [
                  c("span", null, F(T.status) + ":", 1),
                  c("span", null, F(T.count) + " (" + F(T.percentage) + "%)", 1)
                ]))), 128)),
                P[5] || (P[5] = c("hr", { class: "my-1" }, null, -1)),
                c("div", xP, [
                  P[3] || (P[3] = c("span", null, "Total Resources:", -1)),
                  c("span", null, F(d.value.total_resources), 1)
                ]),
                c("div", RP, [
                  P[4] || (P[4] = c("span", null, "Completion:", -1)),
                  c("span", null, F(Math.round(d.value.completion_percentage)) + "%", 1)
                ])
              ])
            ])) : de("", !0)
          ]))
        ]),
        c("td", null, [
          c("div", IP, [
            c("span", null, F(u.value), 1),
            c("button", {
              class: "btn btn-sm btn-light ms-2",
              onClick: f,
              "aria-expanded": r.value
            }, [
              c("i", {
                class: ue(`fas fa-chevron-${r.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, PP)
          ])
        ]),
        c("td", null, [
          c("div", VP, [
            c("button", {
              class: "btn btn-sm btn-outline-primary btn-icon",
              onClick: S,
              disabled: i.value,
              title: "Trigger fetch for this MRN"
            }, [
              i.value ? (C(), D("i", FP)) : (C(), D("i", LP))
            ], 8, MP),
            c("button", {
              class: "btn btn-sm btn-outline-warning btn-icon",
              onClick: k,
              disabled: p.value || i.value,
              title: g.value
            }, [
              i.value ? (C(), D("i", UP)) : (C(), D("i", jP))
            ], 8, BP),
            c("button", {
              class: "btn btn-sm btn-outline-success btn-icon",
              disabled: _.value || i.value || H(n).isStreamingActive,
              onClick: R,
              title: y.value
            }, P[7] || (P[7] = [
              c("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 8, HP)
          ])
        ])
      ]),
      At(c("tr", null, [
        c("td", $P, [
          c("div", WP, [
            c("table", KP, [
              P[8] || (P[8] = c("thead", { class: "table-light" }, [
                c("tr", null, [
                  c("th", { scope: "col" }, "Resource"),
                  c("th", { scope: "col" }, "Status"),
                  c("th", { scope: "col" }, "Fetch Date"),
                  c("th", { scope: "col" }, "Error"),
                  c("th", { scope: "col" }, "Actions")
                ])
              ], -1)),
              c("tbody", null, [
                (C(!0), D(Oe, null, Je(I.item.resources, (T) => (C(), it(gP, {
                  key: `${T.name}-${T.repeat_instance}`,
                  resource: T,
                  mrn: I.item.mrn,
                  recordId: I.item.id.toString()
                }, null, 8, ["resource", "mrn", "recordId"]))), 128))
              ])
            ])
          ])
        ])
      ], 512), [
        [Am, r.value]
      ])
    ], 64));
  }
}), qP = /* @__PURE__ */ Qt(zP, [["__scopeId", "data-v-4875f63c"]]), YP = {
  key: 0,
  class: "d-flex justify-content-center"
}, XP = {
  key: 1,
  class: "table table-bordered table-striped table-hover"
}, GP = { class: "table-light" }, JP = { scope: "col" }, QP = ["checked", "indeterminate"], ZP = { key: 0 }, eV = /* @__PURE__ */ Ce({
  __name: "MonitorTable",
  props: {
    items: {},
    loading: { type: Boolean },
    selectedMrns: {},
    allSelected: { type: Boolean },
    indeterminate: { type: Boolean }
  },
  emits: ["toggle-select-all"],
  setup(e) {
    const t = e, n = $(null);
    return Ot(() => t.indeterminate, (s) => {
      n.value && (n.value.indeterminate = s);
    }, { immediate: !0 }), (s, o) => (C(), D("div", null, [
      s.loading ? (C(), D("div", YP, o[1] || (o[1] = [
        c("div", {
          class: "spinner-border",
          role: "status"
        }, [
          c("span", { class: "visually-hidden" }, "Loading...")
        ], -1)
      ]))) : (C(), D("table", XP, [
        c("thead", GP, [
          c("tr", null, [
            c("th", JP, [
              c("input", {
                ref_key: "selectAllCheckbox",
                ref: n,
                class: "form-check-input",
                type: "checkbox",
                checked: s.allSelected,
                indeterminate: s.indeterminate,
                onChange: o[0] || (o[0] = (r) => s.$emit("toggle-select-all"))
              }, null, 40, QP)
            ]),
            o[2] || (o[2] = c("th", { scope: "col" }, "MRN", -1)),
            o[3] || (o[3] = c("th", { scope: "col" }, "Status", -1)),
            o[4] || (o[4] = c("th", { scope: "col" }, "Resources", -1)),
            o[5] || (o[5] = c("th", { scope: "col" }, "Actions", -1))
          ])
        ]),
        c("tbody", null, [
          s.items.length === 0 ? (C(), D("tr", ZP, o[6] || (o[6] = [
            c("td", {
              colspan: "5",
              class: "text-center"
            }, "No MRNs to display.", -1)
          ]))) : (C(!0), D(Oe, { key: 1 }, Je(s.items, (r) => (C(), it(qP, {
            key: r.id,
            item: r,
            selected: s.selectedMrns.includes(r.id)
          }, null, 8, ["item", "selected"]))), 128))
        ])
      ]))
    ]));
  }
}), tV = { class: "mb-3" }, nV = { class: "mt-2 small" }, sV = { key: 0 }, oV = { key: 1 }, rV = {
  key: 0,
  class: "text-danger"
}, iV = {
  key: 1,
  class: "text-muted"
}, aV = { class: "d-flex gap-2 justify-content-end" }, lV = ["onClick"], uV = ["onClick", "disabled"], cV = /* @__PURE__ */ Ce({
  __name: "AddMrnModal",
  setup(e, { expose: t }) {
    const n = $(null), s = $(""), o = Es(), r = U(() => o.analyzeMrnInput(s.value)), i = U(() => r.value.unique === 0 || r.value.overLimit), a = U(() => r.value.unique > 0 ? `Add ${r.value.unique}` : "Add"), l = async () => (s.value = "", await n.value?.show() ? s.value : null), f = (u) => {
      i.value || u(!0);
    };
    return t({ show: l }), (u, d) => {
      const h = rt("b-modal");
      return C(), it(h, {
        ref_key: "addMrnModal",
        ref: n
      }, {
        title: me(() => d[1] || (d[1] = [
          ee("Add MRN")
        ])),
        footer: me(({ hide: p }) => [
          c("div", aV, [
            c("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (g) => p(!1)
            }, d[11] || (d[11] = [
              c("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              ee("Cancel ")
            ]), 8, lV),
            c("button", {
              type: "button",
              class: "btn btn-sm btn-primary",
              onClick: (g) => f(p),
              disabled: i.value
            }, [
              d[12] || (d[12] = c("i", { class: "fas fa-plus fa-fw me-1" }, null, -1)),
              ee(F(a.value), 1)
            ], 8, uV)
          ])
        ]),
        default: me(() => [
          c("div", tV, [
            d[9] || (d[9] = c("label", {
              for: "mrn-input",
              class: "form-label"
            }, "MRN(s)", -1)),
            At(c("textarea", {
              class: "form-control",
              id: "mrn-input",
              "onUpdate:modelValue": d[0] || (d[0] = (p) => s.value = p),
              rows: "6",
              placeholder: "Enter MRNs separated by commas, spaces, or new lines"
            }, null, 512), [
              [Ji, s.value]
            ]),
            d[10] || (d[10] = c("small", { class: "text-muted d-block" }, "Examples: 12345, 67890 or one per line", -1)),
            c("div", nV, [
              c("div", null, [
                d[6] || (d[6] = ee(" Parsed: ")),
                c("strong", null, F(r.value.unique), 1),
                d[7] || (d[7] = ee(" unique ")),
                r.value.duplicates > 0 ? (C(), D("span", sV, [
                  d[2] || (d[2] = ee("(")),
                  c("strong", null, F(r.value.duplicates), 1),
                  d[3] || (d[3] = ee(" duplicates ignored)"))
                ])) : de("", !0),
                r.value.empties > 0 ? (C(), D("span", oV, [
                  d[4] || (d[4] = ee(", ")),
                  c("strong", null, F(r.value.empties), 1),
                  d[5] || (d[5] = ee(" empty tokens"))
                ])) : de("", !0)
              ]),
              r.value.overLimit ? (C(), D("div", rV, " Limit exceeded: " + F(r.value.unique) + " › " + F(r.value.limit) + ". Please reduce the list. ", 1)) : de("", !0),
              r.value.sample.length ? (C(), D("div", iV, [
                d[8] || (d[8] = ee(" Sample: ")),
                c("code", null, F(r.value.sample.join(", ")), 1)
              ])) : de("", !0)
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), dV = { class: "p-0" }, fV = {
  key: 0,
  class: "d-flex justify-content-center align-items-center py-5"
}, pV = {
  key: 1,
  class: "h-100"
}, hV = { class: "bg-light border-bottom p-3" }, mV = { class: "row align-items-center" }, gV = { class: "col-md-8" }, vV = { class: "d-flex flex-wrap gap-3" }, _V = { class: "d-flex align-items-center" }, yV = { class: "text-muted" }, EV = { class: "d-flex align-items-center" }, bV = { class: "text-muted" }, wV = {
  key: 0,
  class: "text-warning"
}, AV = {
  key: 0,
  class: "d-flex align-items-center"
}, SV = { class: "col-md-4 text-end" }, OV = ["disabled"], CV = {
  key: 0,
  class: "alert alert-warning mt-2 mb-0 py-2"
}, TV = { class: "content-display" }, NV = {
  key: 2,
  class: "p-4 text-center"
}, DV = ["onClick"], kV = /* @__PURE__ */ Ce({
  __name: "ResourceContentModal",
  setup(e) {
    const t = E_(), n = mn(), s = $(null), o = $(!1), r = $(!1), i = U(() => t.getContentStats()), a = () => {
    };
    Pt(() => {
      s.value && t.setModalRef(s.value);
    });
    const l = async () => {
      if (t.currentContent) {
        o.value = !0, r.value = !1;
        try {
          await t.copyToClipboard(
            t.currentContent.content
          ) ? (r.value = !0, n.showSuccess("Content copied to clipboard"), setTimeout(() => {
            r.value = !1;
          }, 2e3)) : n.showError("Failed to copy content to clipboard");
        } catch (f) {
          console.error("Copy failed:", f), n.showError("Failed to copy content to clipboard");
        } finally {
          o.value = !1;
        }
      }
    };
    return (f, u) => {
      const d = rt("b-modal");
      return C(), it(d, {
        ref_key: "resourceContentModal",
        ref: s,
        size: "xl",
        onHidden: a
      }, {
        title: me(() => [
          u[0] || (u[0] = c("i", { class: "fas fa-file-alt fa-fw me-2" }, null, -1)),
          ee(" " + F(H(t).getDisplayTitle()), 1)
        ]),
        footer: me(({ hide: h }) => [
          c("button", {
            type: "button",
            class: "btn btn-secondary",
            onClick: (p) => h()
          }, " Close ", 8, DV)
        ]),
        default: me(() => [
          c("div", dV, [
            H(t).loading ? (C(), D("div", fV, u[1] || (u[1] = [
              c("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                c("span", { class: "visually-hidden" }, "Loading content...")
              ], -1),
              c("span", { class: "ms-3" }, "Loading resource content...", -1)
            ]))) : H(t).currentContent ? (C(), D("div", pV, [
              c("div", hV, [
                c("div", mV, [
                  c("div", gV, [
                    c("div", vV, [
                      c("div", _V, [
                        u[2] || (u[2] = c("i", { class: "fas fa-info-circle text-info me-1" }, null, -1)),
                        c("small", yV, F(i.value?.lines || 0) + " lines, " + F(i.value?.characters || 0) + " characters ", 1)
                      ]),
                      c("div", EV, [
                        u[3] || (u[3] = c("i", { class: "fas fa-hdd text-secondary me-1" }, null, -1)),
                        c("small", bV, [
                          ee(F(i.value?.size_human) + " ", 1),
                          i.value?.is_truncated ? (C(), D("span", wV, " of " + F(i.value?.full_size_human) + " (truncated) ", 1)) : de("", !0)
                        ])
                      ]),
                      H(t).isJsonContent() ? (C(), D("div", AV, u[4] || (u[4] = [
                        c("i", { class: "fas fa-check-circle text-success me-1" }, null, -1),
                        c("small", { class: "text-muted" }, "Valid JSON", -1)
                      ]))) : de("", !0)
                    ])
                  ]),
                  c("div", SV, [
                    c("button", {
                      class: "btn btn-outline-secondary btn-sm",
                      onClick: l,
                      disabled: o.value,
                      title: "Copy content to clipboard"
                    }, [
                      c("i", {
                        class: ue(`fas ${o.value ? "fa-spinner fa-spin" : r.value ? "fa-check" : "fa-copy"} fa-fw`)
                      }, null, 2),
                      ee(" " + F(o.value ? "Copying..." : r.value ? "Copied!" : "Copy"), 1)
                    ], 8, OV)
                  ])
                ]),
                i.value?.is_truncated ? (C(), D("div", CV, [
                  u[5] || (u[5] = c("i", { class: "fas fa-exclamation-triangle me-2" }, null, -1)),
                  u[6] || (u[6] = c("strong", null, "Content Truncated:", -1)),
                  ee(" This file is " + F(i.value.full_size_human) + " but only the first " + F(i.value.size_human) + " are shown for performance. The full content is preserved in the system. ", 1)
                ])) : de("", !0)
              ]),
              c("div", TV, [
                c("pre", {
                  class: ue(["content-pre", { "json-content": H(t).isJsonContent() }])
                }, [
                  c("code", null, F(H(t).currentContent.content), 1)
                ], 2)
              ])
            ])) : (C(), D("div", NV, u[7] || (u[7] = [
              c("div", { class: "alert alert-danger" }, [
                c("i", { class: "fas fa-exclamation-circle me-2" }),
                ee(" No content available or failed to load. ")
              ], -1)
            ])))
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), xV = /* @__PURE__ */ Qt(kV, [["__scopeId", "data-v-8148176a"]]), RV = { class: "mb-3" }, IV = ["for"], PV = ["id", "value", "placeholder"], VV = {
  key: 0,
  class: "invalid-feedback"
}, MV = {
  key: 1,
  class: "form-text"
}, LV = /* @__PURE__ */ Ce({
  __name: "ArchiveNameInput",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "archive_name" },
    showHelp: { type: Boolean, default: !0 },
    helpText: { default: "Optional custom name for the archive file (without extension)" },
    inputId: { default: "archive-name" },
    errorMessage: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = U(() => t.errorMessage && t.errorMessage.trim().length > 0);
    return (s, o) => (C(), D("div", RV, [
      c("label", {
        for: s.inputId,
        class: "form-label"
      }, "Archive Name", 8, IV),
      c("input", {
        type: "text",
        class: ue(["form-control", { "is-invalid": n.value }]),
        id: s.inputId,
        value: s.modelValue,
        onInput: o[0] || (o[0] = (r) => s.$emit("update:modelValue", r.target.value)),
        placeholder: s.placeholder,
        maxlength: "100"
      }, null, 42, PV),
      n.value ? (C(), D("div", VV, F(s.errorMessage), 1)) : de("", !0),
      s.showHelp ? (C(), D("div", MV, F(s.helpText), 1)) : de("", !0)
    ]));
  }
}), FV = { class: "mb-3" }, BV = {
  key: 0,
  class: "text-center text-muted py-3"
}, jV = {
  key: 1,
  class: "resource-type-list"
}, UV = {
  key: 0,
  class: "form-check mb-2"
}, HV = ["checked", "indeterminate"], $V = ["value", "checked", "id", "disabled"], WV = ["for"], KV = /* @__PURE__ */ Ce({
  __name: "ResourceTypesSelector",
  props: {
    selectedTypes: {},
    availableTypes: {},
    showSelectAll: { type: Boolean, default: !0 }
  },
  emits: ["update:selectedTypes"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = $(null), r = U(() => {
      const l = n.availableTypes.filter((u) => u.isAvailable).map((u) => u.name);
      if (l.length === 0)
        return { checked: !1, indeterminate: !1 };
      const f = l.filter(
        (u) => n.selectedTypes.includes(u)
      );
      return f.length === 0 ? { checked: !1, indeterminate: !1 } : f.length === l.length ? { checked: !0, indeterminate: !1 } : { checked: !1, indeterminate: !0 };
    });
    Ot(r, (l) => {
      $s(() => {
        o.value && (o.value.indeterminate = l.indeterminate);
      });
    }, { immediate: !0 });
    const i = (l) => {
      if (l.target.checked || r.value.indeterminate) {
        const u = n.availableTypes.filter((d) => d.isAvailable).map((d) => d.name);
        s("update:selectedTypes", u);
      } else
        s("update:selectedTypes", []);
    }, a = (l) => {
      const f = l.target, u = f.value;
      let d = [...n.selectedTypes];
      f.checked ? d.includes(u) || d.push(u) : d = d.filter((h) => h !== u), s("update:selectedTypes", d);
    };
    return Pt(() => {
      if (n.selectedTypes.length === 0 && n.availableTypes.length > 0) {
        const l = n.availableTypes.filter((f) => f.isAvailable).map((f) => f.name);
        l.length > 0 && s("update:selectedTypes", l);
      }
    }), (l, f) => (C(), D("div", FV, [
      f[2] || (f[2] = c("label", { class: "form-label" }, "Resource Types", -1)),
      f[3] || (f[3] = c("div", { class: "form-text mb-2" }, [
        ee(" Select which resource types to include "),
        c("br"),
        c("small", { class: "text-muted" }, "Note: No selection will download all available resources")
      ], -1)),
      l.availableTypes.length === 0 ? (C(), D("div", BV, f[0] || (f[0] = [
        c("i", { class: "fas fa-info-circle me-2" }, null, -1),
        ee(" No resource types found ")
      ]))) : (C(), D("div", jV, [
        l.showSelectAll ? (C(), D("div", UV, [
          c("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: r.value.checked,
            indeterminate: r.value.indeterminate,
            onChange: i,
            id: "select-all-types",
            ref_key: "selectAllCheckbox",
            ref: o
          }, null, 40, HV),
          f[1] || (f[1] = c("label", {
            class: "form-check-label fw-bold",
            for: "select-all-types"
          }, " Select All ", -1))
        ])) : de("", !0),
        (C(!0), D(Oe, null, Je(l.availableTypes, (u) => (C(), D("div", {
          class: "form-check",
          key: u.name
        }, [
          c("input", {
            class: "form-check-input",
            type: "checkbox",
            value: u.name,
            checked: l.selectedTypes.includes(u.name),
            onChange: a,
            id: `resource-${u.name}`,
            disabled: !u.isAvailable
          }, null, 40, $V),
          c("label", {
            class: "form-check-label",
            for: `resource-${u.name}`
          }, F(u.name), 9, WV)
        ]))), 128))
      ]))
    ]));
  }
}), zV = { class: "mb-3" }, qV = { class: "bg-light p-3 rounded" }, YV = { key: 0 }, XV = { class: "small text-muted" }, GV = { key: 0 }, JV = { key: 1 }, QV = { class: "d-flex align-items-center mb-2" }, ZV = { key: 0 }, eM = { class: "mb-2" }, tM = { class: "small text-muted" }, nM = { key: 1 }, sM = { class: "small text-muted" }, oM = { key: 0 }, rM = { key: 1 }, iM = { class: "d-flex align-items-center mb-2" }, aM = { key: 0 }, lM = { class: "mb-2" }, uM = { key: 1 }, cM = { class: "mb-1" }, dM = { key: 0 }, fM = { key: 1 }, pM = { class: "small text-muted" }, hM = { key: 0 }, mM = { class: "d-flex gap-2 justify-content-end" }, gM = ["onClick"], vM = ["onClick", "disabled"], _M = /* @__PURE__ */ Ce({
  __name: "StreamingArchiveModal",
  props: {
    selectedMrns: { default: () => [] },
    archiveType: {}
  },
  setup(e, { expose: t }) {
    const n = e, s = Es(), o = bc(), r = mn(), i = $(null), a = $({
      mrns: [],
      archive_name: "",
      resource_types: []
    }), l = U(() => !!s.projectSummary), f = U(() => s.projectSummary?.overall_status_counts?.completed ?? 0), u = U(() => {
      const O = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set();
      return (n.archiveType === "selected" ? s.mrns.filter((R) => n.selectedMrns.includes(R.mrn)) : s.mrns).forEach((R) => {
        R.status_summary ? Object.entries(R.status_summary.resource_type_statuses).forEach(([I, P]) => {
          O.add(I), P.is_archivable && S.add(I);
        }) : R.resources.forEach((I) => {
          I.status !== "Deleted" && (O.add(I.name), I.status === "Completed" && S.add(I.name));
        });
      }), Array.from(O).sort().map((R) => ({
        name: R,
        isAvailable: S.has(R)
      }));
    }), d = U(() => {
      const O = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_");
      return `streaming_archive_${n.archiveType === "selected" ? "selected" : "all"}_${O}`;
    }), h = U(() => {
      if (n.archiveType === "all")
        return f.value;
      const O = a.value.resource_types || [], S = n.archiveType === "selected" ? s.mrns.filter((R) => n.selectedMrns.includes(R.mrn)) : s.mrns;
      let k = 0;
      return S.forEach((R) => {
        R.status_summary ? Object.entries(R.status_summary.resource_type_statuses).forEach(([I, P]) => {
          O.length === 0 ? P.is_archivable && (k += P.completed_count) : O.includes(I) && P.is_archivable && (k += P.completed_count);
        }) : R.resources.forEach((I) => {
          I.status === "Completed" && (O.length === 0 || O.includes(I.name)) && (k += 1);
        });
      }), k;
    }), p = U(() => {
      const O = u.value.filter((k) => k.isAvailable), S = u.value.length;
      return {
        availableTypes: O.length,
        totalTypes: S
      };
    }), g = U(() => {
      if (!a.value.archive_name)
        return "";
      const O = a.value.archive_name.trim();
      return O.length === 0 || /^[a-zA-Z0-9_-]+$/.test(O) ? "" : "Archive name contains invalid characters. Only letters, numbers, hyphens, and underscores are allowed.";
    }), m = U(() => !(g.value || n.archiveType === "selected" && n.selectedMrns.length === 0)), _ = (O) => {
      a.value.resource_types = O;
    }, y = async () => (a.value = {
      mrns: n.archiveType === "selected" ? n.selectedMrns : [],
      archive_name: "",
      resource_types: []
    }, await i.value?.show() ?? !1), b = () => a.value.archive_name || d.value, v = async (O) => {
      if (!m.value) return;
      const S = b();
      try {
        o.startStreaming(S), r.showInfo(`Started streaming download: ${S}`), O(!0);
        const k = {
          ...a.value,
          mrns: n.archiveType === "selected" ? n.selectedMrns : []
        };
        k.archive_name || delete k.archive_name, k.resource_types?.length || delete k.resource_types;
        let R;
        n.archiveType === "selected" ? R = await Ke.streamSelectedArchive(n.selectedMrns, k) : R = await Ke.streamAllArchive(k);
        const I = new Blob([R.data]), P = window.URL.createObjectURL(I), T = document.createElement("a");
        T.href = P, T.download = `${S}.zip`, document.body.appendChild(T), T.click(), document.body.removeChild(T), window.URL.revokeObjectURL(P);
        const N = o.finishStreaming();
        r.showSuccess(`Download completed: ${S} (${N}s)`);
      } catch (k) {
        o.finishStreaming(), r.showError(`Streaming download failed: ${k.message}`);
      }
    };
    return t({ show: y }), (O, S) => {
      const k = rt("b-modal");
      return C(), it(k, {
        ref_key: "streamingArchiveModal",
        ref: i,
        size: "lg"
      }, {
        title: me(() => S[1] || (S[1] = [
          c("i", { class: "fas fa-download text-primary me-2" }, null, -1),
          ee(" Archive Download ")
        ])),
        footer: me(({ hide: R }) => [
          c("div", mM, [
            c("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (I) => R(!1)
            }, S[12] || (S[12] = [
              c("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              ee("Cancel ")
            ]), 8, gM),
            c("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (I) => v(R),
              disabled: !m.value || H(o).isStreamingActive
            }, [
              S[13] || (S[13] = c("i", { class: "fas fa-download fa-fw me-1" }, null, -1)),
              ee(" " + F(H(o).isStreamingActive ? "Downloading..." : "Download"), 1)
            ], 8, vM)
          ])
        ]),
        default: me(() => [
          c("div", null, [
            S[11] || (S[11] = c("div", { class: "alert alert-info mb-4" }, [
              c("i", { class: "fas fa-info-circle me-2" }),
              c("strong", null, "Download"),
              c("div", { class: "small" }, " Your archive will be generated and downloaded immediately without storing on the server. ")
            ], -1)),
            le(LV, {
              modelValue: a.value.archive_name,
              "onUpdate:modelValue": S[0] || (S[0] = (R) => a.value.archive_name = R),
              placeholder: d.value,
              "show-help": !0,
              "help-text": "Archive will be downloaded immediately as [name].zip",
              "input-id": "streaming-archive-name",
              "error-message": g.value
            }, null, 8, ["modelValue", "placeholder", "error-message"]),
            le(KV, {
              "selected-types": a.value.resource_types || [],
              "available-types": u.value,
              "onUpdate:selectedTypes": _,
              "show-select-all": !0
            }, null, 8, ["selected-types", "available-types"]),
            c("div", zV, [
              S[4] || (S[4] = c("label", { class: "form-label" }, "Selected Records", -1)),
              c("div", qV, [
                O.archiveType === "selected" ? (C(), D("div", YV, [
                  c("strong", null, F(O.selectedMrns.length), 1),
                  S[2] || (S[2] = ee(" selected MRNs ")),
                  c("div", XV, [
                    ee(F(O.selectedMrns.slice(0, 3).join(", ")) + " ", 1),
                    O.selectedMrns.length > 3 ? (C(), D("span", GV, " and " + F(O.selectedMrns.length - 3) + " more... ", 1)) : de("", !0)
                  ])
                ])) : (C(), D("div", JV, S[3] || (S[3] = [
                  c("strong", null, "All project records", -1),
                  c("div", { class: "small text-muted" }, "Complete project dataset", -1)
                ])))
              ])
            ]),
            O.archiveType === "selected" ? (C(), D("div", {
              key: 0,
              class: ue(["alert", h.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              c("div", QV, [
                c("i", {
                  class: ue([h.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                S[5] || (S[5] = c("strong", null, "Streaming Summary", -1))
              ]),
              h.value > 0 ? (C(), D("div", ZV, [
                c("div", eM, [
                  c("strong", null, F(h.value), 1),
                  S[6] || (S[6] = ee(" completed resources will be streamed "))
                ]),
                c("div", tM, F(p.value.availableTypes) + " of " + F(p.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (C(), D("div", nM, [
                S[7] || (S[7] = c("div", { class: "mb-1" }, [
                  c("strong", null, "No resources available for streaming")
                ], -1)),
                c("div", sM, [
                  p.value.totalTypes === 0 ? (C(), D("span", oM, " No resource types found ")) : (C(), D("span", rM, F(p.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)) : (C(), D("div", {
              key: 1,
              class: ue(["alert", f.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              c("div", iM, [
                c("i", {
                  class: ue([f.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                S[8] || (S[8] = c("strong", null, "Streaming Summary (All Records)", -1))
              ]),
              l.value && f.value > 0 ? (C(), D("div", aM, [
                c("div", lM, [
                  c("strong", null, F(f.value), 1),
                  S[9] || (S[9] = ee(" completed resources across the project will be streamed "))
                ]),
                S[10] || (S[10] = c("div", { class: "small text-muted" }, " Estimate derived from project summary. Resource-type filters are not reflected in this estimate. ", -1))
              ])) : (C(), D("div", uM, [
                c("div", cM, [
                  l.value ? (C(), D("strong", dM, "No completed resources available for streaming")) : (C(), D("strong", fM, "Project summary unavailable"))
                ]),
                c("div", pM, [
                  l.value ? de("", !0) : (C(), D("span", hM, " Global counts could not be loaded. The download will still include all project data. "))
                ])
              ]))
            ], 2))
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), yM = {
  key: 0,
  class: "alert alert-warning"
}, EM = { class: "table-responsive" }, bM = { class: "table table-sm align-middle" }, wM = { class: "d-flex justify-content-end" }, AM = ["onClick"], SM = /* @__PURE__ */ Ce({
  __name: "BulkMrnErrorsModal",
  setup(e, { expose: t }) {
    const n = $(null), s = $([]), o = $(null);
    return t({ show: (i, a, l) => {
      s.value = i, o.value = {
        added: a ?? 0,
        failed: l ?? i.length
      }, n.value?.show();
    } }), (i, a) => {
      const l = rt("b-modal");
      return C(), it(l, {
        ref_key: "errorsModal",
        ref: n,
        size: "lg"
      }, {
        title: me(() => a[0] || (a[0] = [
          ee("Some MRNs Could Not Be Added")
        ])),
        footer: me(({ hide: f }) => [
          c("div", wM, [
            c("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (u) => f(!0)
            }, a[3] || (a[3] = [
              c("i", { class: "fas fa-check fa-fw me-1" }, null, -1),
              ee("Close ")
            ]), 8, AM)
          ])
        ]),
        default: me(() => [
          o.value ? (C(), D("div", yM, [
            a[1] || (a[1] = c("strong", null, "Summary:", -1)),
            ee(" " + F(o.value.added) + " added, " + F(o.value.failed) + " failed ", 1)
          ])) : de("", !0),
          c("div", EM, [
            c("table", bM, [
              a[2] || (a[2] = c("thead", null, [
                c("tr", null, [
                  c("th", { style: { width: "35%" } }, "MRN"),
                  c("th", null, "Error")
                ])
              ], -1)),
              c("tbody", null, [
                (C(!0), D(Oe, null, Je(s.value, (f, u) => (C(), D("tr", { key: u }, [
                  c("td", null, [
                    c("code", null, F(f.mrn), 1)
                  ]),
                  c("td", null, F(f.error), 1)
                ]))), 128))
              ])
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), OM = /* @__PURE__ */ Qt(SM, [["__scopeId", "data-v-40a75814"]]), CM = { class: "card" }, TM = { class: "card-header d-flex justify-content-between align-items-center" }, NM = ["disabled"], DM = { class: "card-body" }, kM = {
  key: 0,
  class: "text-center"
}, xM = {
  key: 1,
  class: "row g-3"
}, RM = { class: "col-md-6" }, IM = { class: "border rounded p-3 h-100" }, PM = { class: "row g-2" }, VM = { class: "col-6" }, MM = { class: "text-center" }, LM = { class: "h4 mb-1 text-primary" }, FM = { class: "col-6" }, BM = { class: "text-center" }, jM = { class: "h4 mb-1 text-info" }, UM = { class: "col-md-6" }, HM = { class: "border rounded p-3 h-100" }, $M = { class: "row g-2" }, WM = { class: "text-center" }, KM = { class: "text-muted" }, zM = { class: "col-12" }, qM = { class: "border rounded p-3" }, YM = { class: "mb-2" }, XM = { class: "d-flex justify-content-between align-items-center mb-1" }, GM = { class: "text-muted" }, JM = {
  class: "progress",
  style: { height: "8px" }
}, QM = ["aria-valuenow"], ZM = {
  key: 0,
  class: "mb-2"
}, eL = { class: "d-flex justify-content-between align-items-center mb-1" }, tL = { class: "text-muted" }, nL = {
  class: "progress",
  style: { height: "6px" }
}, sL = ["aria-valuenow"], oL = { class: "mb-2" }, rL = { class: "d-flex justify-content-between align-items-center mb-1" }, iL = { class: "text-muted" }, aL = {
  class: "progress",
  style: { height: "12px" }
}, lL = ["title"], uL = ["title"], cL = ["title"], dL = ["title"], fL = ["title"], pL = {
  class: "d-flex justify-content-start mt-1",
  style: { "font-size": "0.75rem" }
}, hL = {
  key: 0,
  class: "me-3"
}, mL = {
  key: 1,
  class: "me-3"
}, gL = {
  key: 2,
  class: "me-3"
}, vL = {
  key: 3,
  class: "me-3"
}, _L = {
  key: 4,
  class: "me-3"
}, yL = {
  key: 2,
  class: "text-center text-muted"
}, EL = /* @__PURE__ */ Ce({
  __name: "ProjectSummaryWidget",
  setup(e) {
    const t = Es(), n = $(!1), s = U(() => t.projectSummary), o = U(() => s.value ? Object.values(s.value.overall_status_counts).reduce((h, p) => h + p, 0) : 0), r = U(() => {
      if (!s.value) return 0;
      const p = s.value.overall_status_counts.deleted || 0;
      return o.value - p;
    }), i = U(() => {
      if (!s.value || r.value === 0) return 0;
      const h = s.value.overall_status_counts.completed || 0;
      return Math.round(h / r.value * 100);
    }), a = U(() => {
      if (!s.value || r.value === 0) return 0;
      const h = s.value.overall_status_counts.failed || 0;
      return Math.round(h / r.value * 100);
    }), l = U(() => {
      if (!s.value || r.value === 0)
        return {
          completed: 0,
          failed: 0,
          fetching: 0,
          pending: 0,
          outdated: 0
        };
      const h = s.value.overall_status_counts;
      return {
        completed: Math.round((h.completed || 0) / r.value * 100),
        failed: Math.round((h.failed || 0) / r.value * 100),
        fetching: Math.round((h.fetching || 0) / r.value * 100),
        pending: Math.round((h.pending || 0) / r.value * 100),
        outdated: Math.round((h.outdated || 0) / r.value * 100)
      };
    }), f = (h) => {
      switch (h.toLowerCase()) {
        case "completed":
          return "text-success";
        case "failed":
          return "text-danger";
        case "fetching":
          return "text-info";
        case "pending":
          return "text-warning";
        case "outdated":
          return "text-secondary";
        case "deleted":
          return "text-muted";
        default:
          return "text-secondary";
      }
    }, u = (h) => h.charAt(0).toUpperCase() + h.slice(1), d = async () => {
      try {
        n.value = !0, await t.getProjectSummary();
      } catch (h) {
        console.error("Failed to refresh project summary:", h);
      } finally {
        n.value = !1;
      }
    };
    return Pt(() => {
      d();
    }), (h, p) => (C(), D("div", CM, [
      c("div", TM, [
        p[0] || (p[0] = c("h6", { class: "mb-0" }, [
          c("i", { class: "fas fa-chart-bar fa-fw" }),
          ee(" Project Summary ")
        ], -1)),
        c("button", {
          class: "btn btn-sm btn-outline-secondary",
          onClick: d,
          disabled: n.value,
          title: "Refresh summary"
        }, [
          c("i", {
            class: ue(["fas fa-rotate-right fa-fw", { "fa-spin": n.value }])
          }, null, 2)
        ], 8, NM)
      ]),
      c("div", DM, [
        n.value ? (C(), D("div", kM, p[1] || (p[1] = [
          c("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            c("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : s.value ? (C(), D("div", xM, [
          c("div", RM, [
            c("div", IM, [
              p[4] || (p[4] = c("h6", { class: "text-muted mb-3" }, "Overall Statistics", -1)),
              c("div", PM, [
                c("div", VM, [
                  c("div", MM, [
                    c("div", LM, F(s.value.total_mrns), 1),
                    p[2] || (p[2] = c("small", { class: "text-muted" }, "Total MRNs", -1))
                  ])
                ]),
                c("div", FM, [
                  c("div", BM, [
                    c("div", jM, F(o.value), 1),
                    p[3] || (p[3] = c("small", { class: "text-muted" }, "Total Resources", -1))
                  ])
                ])
              ])
            ])
          ]),
          c("div", UM, [
            c("div", HM, [
              p[5] || (p[5] = c("h6", { class: "text-muted mb-3" }, "Resource Status", -1)),
              c("div", $M, [
                (C(!0), D(Oe, null, Je(s.value.overall_status_counts, (g, m) => (C(), D("div", {
                  key: m,
                  class: "col-6"
                }, [
                  c("div", WM, [
                    c("div", {
                      class: ue(["h5 mb-1", f(m)])
                    }, F(g), 3),
                    c("small", KM, F(u(m)), 1)
                  ])
                ]))), 128))
              ])
            ])
          ]),
          c("div", zM, [
            c("div", qM, [
              p[14] || (p[14] = c("h6", { class: "text-muted mb-3" }, "Completion Progress", -1)),
              c("div", YM, [
                c("div", XM, [
                  p[6] || (p[6] = c("small", { class: "text-muted" }, "Overall Completion", -1)),
                  c("small", GM, F(i.value) + "%", 1)
                ]),
                c("div", JM, [
                  c("div", {
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Mt({ width: i.value + "%" }),
                    "aria-valuenow": i.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, QM)
                ])
              ]),
              a.value > 0 ? (C(), D("div", ZM, [
                c("div", eL, [
                  p[7] || (p[7] = c("small", { class: "text-muted" }, "Error Rate", -1)),
                  c("small", tL, F(a.value) + "%", 1)
                ]),
                c("div", nL, [
                  c("div", {
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Mt({ width: a.value + "%" }),
                    "aria-valuenow": a.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, sL)
                ])
              ])) : de("", !0),
              c("div", oL, [
                c("div", rL, [
                  p[8] || (p[8] = c("small", { class: "text-muted" }, "Resource States Breakdown", -1)),
                  c("small", iL, F(r.value) + " active resources", 1)
                ]),
                c("div", aL, [
                  l.value.completed > 0 ? (C(), D("div", {
                    key: 0,
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Mt({ width: l.value.completed + "%" }),
                    title: `Completed: ${s.value?.overall_status_counts.completed || 0} (${l.value.completed}%)`
                  }, null, 12, lL)) : de("", !0),
                  l.value.fetching > 0 ? (C(), D("div", {
                    key: 1,
                    class: "progress-bar bg-info",
                    role: "progressbar",
                    style: Mt({ width: l.value.fetching + "%" }),
                    title: `Fetching: ${s.value?.overall_status_counts.fetching || 0} (${l.value.fetching}%)`
                  }, null, 12, uL)) : de("", !0),
                  l.value.pending > 0 ? (C(), D("div", {
                    key: 2,
                    class: "progress-bar bg-warning",
                    role: "progressbar",
                    style: Mt({ width: l.value.pending + "%" }),
                    title: `Pending: ${s.value?.overall_status_counts.pending || 0} (${l.value.pending}%)`
                  }, null, 12, cL)) : de("", !0),
                  l.value.failed > 0 ? (C(), D("div", {
                    key: 3,
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Mt({ width: l.value.failed + "%" }),
                    title: `Failed: ${s.value?.overall_status_counts.failed || 0} (${l.value.failed}%)`
                  }, null, 12, dL)) : de("", !0),
                  l.value.outdated > 0 ? (C(), D("div", {
                    key: 4,
                    class: "progress-bar bg-secondary",
                    role: "progressbar",
                    style: Mt({ width: l.value.outdated + "%" }),
                    title: `Outdated: ${s.value?.overall_status_counts.outdated || 0} (${l.value.outdated}%)`
                  }, null, 12, fL)) : de("", !0)
                ]),
                c("div", pL, [
                  l.value.completed > 0 ? (C(), D("div", hL, p[9] || (p[9] = [
                    c("span", { class: "badge bg-success me-1" }, "●", -1),
                    ee("Completed ")
                  ]))) : de("", !0),
                  l.value.fetching > 0 ? (C(), D("div", mL, p[10] || (p[10] = [
                    c("span", { class: "badge bg-info me-1" }, "●", -1),
                    ee("Fetching ")
                  ]))) : de("", !0),
                  l.value.pending > 0 ? (C(), D("div", gL, p[11] || (p[11] = [
                    c("span", { class: "badge bg-warning me-1" }, "●", -1),
                    ee("Pending ")
                  ]))) : de("", !0),
                  l.value.failed > 0 ? (C(), D("div", vL, p[12] || (p[12] = [
                    c("span", { class: "badge bg-danger me-1" }, "●", -1),
                    ee("Failed ")
                  ]))) : de("", !0),
                  l.value.outdated > 0 ? (C(), D("div", _L, p[13] || (p[13] = [
                    c("span", { class: "badge bg-secondary me-1" }, "●", -1),
                    ee("Outdated ")
                  ]))) : de("", !0)
                ])
              ])
            ])
          ])
        ])) : (C(), D("div", yL, p[15] || (p[15] = [
          c("i", { class: "fas fa-info-circle fa-fw" }, null, -1),
          ee(" No summary data available ")
        ])))
      ])
    ]));
  }
}), bL = /* @__PURE__ */ Qt(EL, [["__scopeId", "data-v-437ee7dd"]]), wL = { class: "p-0" }, AL = {
  key: 0,
  class: "mb-4"
}, SL = {
  key: 1,
  class: "d-flex justify-content-between align-items-center mt-3"
}, OL = { class: "text-muted" }, CL = { class: "d-flex gap-2" }, TL = /* @__PURE__ */ Ce({
  __name: "ResourcesPage",
  setup(e) {
    const t = Es(), n = y_(), s = mn(), o = $(null), r = $(null), i = $(null);
    Ot(() => n.streamingModalVisible, async (p) => {
      p && (await r.value?.show(), n.hideStreamingModal());
    });
    const a = U({
      get: () => t.pagination.page,
      set: (p) => t.setPage(p)
    }), l = U({
      get: () => t.pagination.limit,
      set: (p) => t.setLimit(p)
    }), f = U(() => t.pagination.total), u = U(() => t.pagination.perPageOptions), d = U(() => {
      const p = t.pagination.total, g = t.pagination.page, m = t.pagination.limit, _ = p === 0 ? 0 : (g - 1) * m + 1, y = Math.min(g * m, p);
      return { start: _, end: y, total: p };
    }), h = async () => {
      if (o.value) {
        const p = await o.value.show();
        if (p)
          try {
            const g = await t.addMrnsFromString(p), m = g.added_count || 0, _ = g.failed_count || 0;
            _ === 0 ? s.showSuccess(`Added ${m} MRN(s).`) : i.value?.show(g.failures, m, _);
          } catch {
            s.showError("Failed to add MRNs");
          }
      }
    };
    return Pt(async () => {
      try {
        await Promise.all([
          t.fetchMrns(),
          t.getProjectSummary()
        ]);
      } catch (p) {
        console.error("Failed to load initial data:", p), s.showError("Failed to load initial data");
      }
    }), (p, g) => {
      const m = rt("b-pagination"), _ = rt("b-pagination-dropdown");
      return C(), D("div", wL, [
        H(n).showSummary ? (C(), D("div", AL, [
          le(bL)
        ])) : de("", !0),
        le(JI, { onAddMrn: h }),
        le(eV, {
          items: H(t).mrns,
          loading: H(t).loading,
          "selected-mrns": H(t).selectedMrns,
          "all-selected": H(t).allSelected,
          indeterminate: H(t).indeterminate,
          onToggleSelectAll: H(t).toggleSelectAll
        }, null, 8, ["items", "loading", "selected-mrns", "all-selected", "indeterminate", "onToggleSelectAll"]),
        H(t).pagination.total > 0 ? (C(), D("div", SL, [
          c("small", OL, " Showing " + F(d.value.start) + "-" + F(d.value.end) + " of " + F(d.value.total) + " MRNs ", 1),
          c("div", CL, [
            le(m, {
              size: "sm",
              perPage: l.value,
              totalItems: f.value,
              modelValue: a.value,
              "onUpdate:modelValue": g[0] || (g[0] = (y) => a.value = y)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            le(_, {
              options: u.value,
              modelValue: l.value,
              "onUpdate:modelValue": g[1] || (g[1] = (y) => l.value = y)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : de("", !0),
        le(cV, {
          ref_key: "addMrnModal",
          ref: o
        }, null, 512),
        le(xV),
        (C(), it(ma, { to: "body" }, [
          le(_M, {
            ref_key: "streamingArchiveModal",
            ref: r,
            "selected-mrns": H(n).streamingModalSelectedMrns,
            "archive-type": H(n).streamingModalType
          }, null, 8, ["selected-mrns", "archive-type"]),
          le(OM, {
            ref_key: "bulkMrnErrorsModal",
            ref: i
          }, null, 512)
        ]))
      ]);
    };
  }
}), b_ = /* @__PURE__ */ Pn("task", () => {
  const e = Qs(), t = $(!1), n = $([]), s = $(!1), o = $(/* @__PURE__ */ new Set()), r = $({
    page: 1,
    limit: 25,
    total: 0,
    total_pages: 0,
    has_next: !1,
    has_previous: !1
  }), i = $({
    status: "",
    task_type: "",
    search_query: ""
  }), a = U(() => {
    let T = n.value;
    if (i.value.status && (T = T.filter((N) => N.status === i.value.status)), i.value.task_type && (T = T.filter((N) => N.key === i.value.task_type)), i.value.search_query) {
      const N = i.value.search_query.toLowerCase();
      T = T.filter(
        (A) => A.id.toLowerCase().includes(N) || A.key.toLowerCase().includes(N)
      );
    }
    return T;
  }), l = U(() => {
    const T = (r.value.page - 1) * r.value.limit, N = T + r.value.limit;
    return a.value.slice(T, N);
  }), f = U(
    () => n.value.filter((T) => T.status === "pending")
  ), u = U(
    () => n.value.filter((T) => T.status === "processing")
  ), d = U(
    () => n.value.filter((T) => T.status === "completed")
  ), h = U(
    () => n.value.filter((T) => T.status === "failed")
  ), p = U(() => ({
    total: n.value.length,
    pending: f.value.length,
    processing: u.value.length,
    completed: d.value.length,
    failed: h.value.length
  })), g = async () => {
    try {
      t.value = !0;
      const N = (await Ke.listTasks(
        r.value.page,
        r.value.limit,
        i.value
      )).data;
      N.success ? (n.value = N.tasks || [], N.pagination && (r.value = { ...r.value, ...N.pagination }), v()) : e.addError({
        message: N.message || "Failed to fetch tasks",
        source: "TaskStore.fetchTasks",
        timestamp: /* @__PURE__ */ new Date()
      });
    } catch (T) {
      e.addError({
        message: `Failed to fetch tasks: ${T}`,
        source: "TaskStore.fetchTasks",
        timestamp: /* @__PURE__ */ new Date()
      });
    } finally {
      t.value = !1;
    }
  }, m = async () => {
    try {
      s.value = !0;
      const N = (await Ke.performTaskFullSync()).data;
      return N.success ? (await g(), N) : (e.addError({
        message: N.message || "Failed to perform full sync",
        source: "TaskStore.performFullSync",
        timestamp: /* @__PURE__ */ new Date()
      }), N);
    } catch (T) {
      return e.addError({
        message: `Failed to perform full sync: ${T}`,
        source: "TaskStore.performFullSync",
        timestamp: /* @__PURE__ */ new Date()
      }), null;
    } finally {
      s.value = !1;
    }
  }, _ = async () => {
    try {
      s.value = !0;
      const N = (await Ke.retryFailedResources()).data;
      return N.success ? (await g(), N) : (e.addError({
        message: N.message || "Failed to retry failed resources",
        source: "TaskStore.retryFailed",
        timestamp: /* @__PURE__ */ new Date()
      }), N);
    } catch (T) {
      return e.addError({
        message: `Failed to retry failed resources: ${T}`,
        source: "TaskStore.retryFailed",
        timestamp: /* @__PURE__ */ new Date()
      }), null;
    } finally {
      s.value = !1;
    }
  }, y = async (T) => {
    try {
      const A = (await Ke.getTaskDetails(T)).data;
      return A.success || e.addError({
        message: A.message || "Failed to get task details",
        source: "TaskStore.getTaskDetails",
        timestamp: /* @__PURE__ */ new Date()
      }), A;
    } catch (N) {
      return e.addError({
        message: `Failed to get task details: ${N}`,
        source: "TaskStore.getTaskDetails",
        timestamp: /* @__PURE__ */ new Date()
      }), null;
    }
  }, b = async (T) => {
    const N = n.value.findIndex((Y) => Y.id === T);
    if (N === -1)
      return e.addError({
        message: "Task not found",
        source: "TaskStore.deleteTask",
        timestamp: /* @__PURE__ */ new Date()
      }), !1;
    const A = n.value[N];
    try {
      o.value.add(T), n.value.splice(N, 1);
      const Y = await Ke.deleteTask(T);
      return Y.data.success ? !0 : (n.value.splice(N, 0, A), e.addError({
        message: Y.data.message || "Failed to delete task",
        source: "TaskStore.deleteTask",
        timestamp: /* @__PURE__ */ new Date()
      }), !1);
    } catch (Y) {
      return n.value.splice(N, 0, A), e.addError({
        message: `Failed to delete task: ${Y}`,
        source: "TaskStore.deleteTask",
        timestamp: /* @__PURE__ */ new Date()
      }), !1;
    } finally {
      o.value.delete(T);
    }
  }, v = () => {
    const T = a.value;
    r.value.total = T.length, r.value.total_pages = Math.ceil(T.length / r.value.limit), r.value.has_next = r.value.page < r.value.total_pages, r.value.has_previous = r.value.page > 1, r.value.page > r.value.total_pages && r.value.total_pages > 0 && (r.value.page = r.value.total_pages);
  };
  return {
    // State
    loading: t,
    tasks: n,
    operationLoading: s,
    deletingTasks: o,
    pagination: r,
    filters: i,
    // Computed
    filteredTasks: a,
    paginatedTasks: l,
    pendingTasks: f,
    processingTasks: u,
    completedTasks: d,
    failedTasks: h,
    taskStatusCounts: p,
    // Actions
    fetchTasks: g,
    performFullSync: m,
    retryFailed: _,
    getTaskDetails: y,
    deleteTask: b,
    refreshTaskStatus: async () => {
      await g();
    },
    updatePagination: v,
    setPage: (T) => {
      T >= 1 && T <= r.value.total_pages && (r.value.page = T);
    },
    setLimit: (T) => {
      r.value.limit = T, r.value.page = 1, v();
    },
    setFilter: (T, N) => {
      i.value[T] = N, r.value.page = 1, v();
    },
    clearFilters: () => {
      i.value.status = "", i.value.task_type = "", i.value.search_query = "", r.value.page = 1, v();
    },
    isTaskDeleting: (T) => o.value.has(T)
  };
}), NL = { class: "card" }, DL = { class: "card-header d-flex justify-content-between align-items-center" }, kL = ["disabled"], xL = { class: "card-body" }, RL = {
  key: 0,
  class: "text-center"
}, IL = {
  key: 1,
  class: "row g-3"
}, PL = { class: "col-md-4" }, VL = { class: "d-flex align-items-center" }, ML = { class: "fw-bold" }, LL = { class: "col-md-4" }, FL = { class: "d-flex align-items-center" }, BL = { class: "fw-bold" }, jL = { class: "col-md-4" }, UL = { class: "d-flex align-items-center" }, HL = { class: "fw-bold" }, $L = { class: "col-12 mt-3" }, WL = { class: "border-top pt-3" }, KL = { class: "row g-3" }, zL = { class: "col-md-3" }, qL = { class: "d-flex align-items-center" }, YL = { class: "fw-bold" }, XL = { class: "col-md-3" }, GL = { class: "d-flex align-items-center" }, JL = { class: "fw-bold" }, QL = { class: "col-md-3" }, ZL = { class: "d-flex align-items-center" }, eF = { class: "fw-bold" }, tF = { class: "col-md-3" }, nF = { class: "d-flex align-items-center" }, sF = { class: "fw-bold" }, oF = /* @__PURE__ */ Ce({
  __name: "QueueStatusWidget",
  setup(e) {
    const t = b_(), n = $(!1), s = U(() => t.taskStatusCounts), o = U(() => {
      const { pending: a, failed: l, processing: f } = s.value;
      return l > 5 ? "Poor" : a + f > 10 ? "Busy" : l > 0 || a > 0 || f > 0 ? "Active" : "Healthy";
    }), r = U(() => {
      const { total: a, completed: l, failed: f } = s.value;
      if (a === 0) return 100;
      const u = l + f;
      return Math.round(l / Math.max(u, 1) * 100);
    }), i = async () => {
      try {
        n.value = !0, await t.fetchTasks();
      } catch (a) {
        console.error("Failed to refresh queue status:", a);
      } finally {
        n.value = !1;
      }
    };
    return Pt(async () => {
      await i();
    }), (a, l) => (C(), D("div", NL, [
      c("div", DL, [
        l[0] || (l[0] = c("h6", { class: "mb-0" }, [
          c("i", { class: "fas fa-clock-rotate-left fa-fw" }),
          ee(" Background Queue Status ")
        ], -1)),
        c("button", {
          class: "btn btn-sm btn-outline-secondary",
          onClick: i,
          disabled: n.value,
          title: "Refresh queue status"
        }, [
          c("i", {
            class: ue(["fas fa-rotate-right fa-fw", { "fa-spin": n.value }])
          }, null, 2)
        ], 8, kL)
      ]),
      c("div", xL, [
        n.value ? (C(), D("div", RL, l[1] || (l[1] = [
          c("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            c("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : (C(), D("div", IL, [
          c("div", PL, [
            c("div", VL, [
              l[3] || (l[3] = c("i", { class: "fas fa-check-circle fa-fw text-success me-2" }, null, -1)),
              c("div", null, [
                c("div", ML, F(o.value), 1),
                l[2] || (l[2] = c("small", { class: "text-muted" }, "Queue Health", -1))
              ])
            ])
          ]),
          c("div", LL, [
            c("div", FL, [
              l[5] || (l[5] = c("i", { class: "fas fa-hourglass-half fa-fw text-warning me-2" }, null, -1)),
              c("div", null, [
                c("div", BL, F(s.value.pending), 1),
                l[4] || (l[4] = c("small", { class: "text-muted" }, "Pending Tasks", -1))
              ])
            ])
          ]),
          c("div", jL, [
            c("div", UL, [
              l[7] || (l[7] = c("i", { class: "fas fa-exclamation-triangle fa-fw text-danger me-2" }, null, -1)),
              c("div", null, [
                c("div", HL, F(s.value.failed), 1),
                l[6] || (l[6] = c("small", { class: "text-muted" }, "Failed Tasks", -1))
              ])
            ])
          ]),
          c("div", $L, [
            c("div", WL, [
              c("div", KL, [
                c("div", zL, [
                  c("div", qL, [
                    l[9] || (l[9] = c("i", { class: "fas fa-list fa-fw text-primary me-2" }, null, -1)),
                    c("div", null, [
                      c("div", YL, F(s.value.total), 1),
                      l[8] || (l[8] = c("small", { class: "text-muted" }, "Total Tasks", -1))
                    ])
                  ])
                ]),
                c("div", XL, [
                  c("div", GL, [
                    l[11] || (l[11] = c("i", { class: "fas fa-play fa-fw text-info me-2" }, null, -1)),
                    c("div", null, [
                      c("div", JL, F(s.value.processing), 1),
                      l[10] || (l[10] = c("small", { class: "text-muted" }, "Processing", -1))
                    ])
                  ])
                ]),
                c("div", QL, [
                  c("div", ZL, [
                    l[13] || (l[13] = c("i", { class: "fas fa-check fa-fw text-success me-2" }, null, -1)),
                    c("div", null, [
                      c("div", eF, F(s.value.completed), 1),
                      l[12] || (l[12] = c("small", { class: "text-muted" }, "Completed", -1))
                    ])
                  ])
                ]),
                c("div", tF, [
                  c("div", nF, [
                    l[15] || (l[15] = c("i", { class: "fas fa-percentage fa-fw text-secondary me-2" }, null, -1)),
                    c("div", null, [
                      c("div", sF, F(r.value) + "%", 1),
                      l[14] || (l[14] = c("small", { class: "text-muted" }, "Success Rate", -1))
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]))
      ])
    ]));
  }
}), rF = /* @__PURE__ */ Qt(oF, [["__scopeId", "data-v-e7530d59"]]), iF = { class: "p-3" }, aF = { class: "d-flex justify-content-between align-items-center mb-4" }, lF = { class: "d-flex gap-2" }, uF = ["disabled"], cF = ["disabled"], dF = ["disabled"], fF = { class: "mb-4" }, pF = { class: "card mb-4" }, hF = { class: "card-body" }, mF = { class: "row g-3" }, gF = { class: "col-md-3" }, vF = { class: "col-md-3" }, _F = { class: "col-md-3" }, yF = { class: "col-md-3" }, EF = ["value"], bF = {
  key: 0,
  class: "row mt-3"
}, wF = { class: "card" }, AF = { class: "card-body p-0" }, SF = {
  key: 0,
  class: "text-center py-5"
}, OF = {
  key: 1,
  class: "d-flex flex-column gap-2 py-5 align-items-center"
}, CF = { class: "" }, TF = { class: "text-muted mb-0" }, NF = { key: 2 }, DF = { class: "table-responsive" }, kF = { class: "table table-hover mb-0" }, xF = { class: "d-flex flex-column" }, RF = { class: "fw-semibold" }, IF = {
  key: 0,
  class: "text-muted"
}, PF = { class: "badge bg-secondary" }, VF = ["title"], MF = ["title"], LF = { class: "text-end" }, FF = { class: "d-flex gap-2" }, BF = ["onClick"], jF = ["disabled", "onClick"], UF = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, HF = { class: "text-muted" }, $F = { class: "d-flex gap-2" }, WF = { class: "modal-dialog modal-lg" }, KF = { class: "modal-content" }, zF = {
  key: 0,
  class: "modal-body"
}, qF = { class: "row" }, YF = { class: "col-md-6" }, XF = { class: "row" }, GF = { class: "col-sm-8" }, JF = { class: "col-sm-8" }, QF = { class: "col-sm-8" }, ZF = { class: "col-sm-8" }, e4 = { class: "col-sm-8" }, t4 = { class: "col-md-6" }, n4 = { class: "bg-light p-3 rounded small" }, s4 = {
  key: 0,
  class: "row mt-3"
}, o4 = { class: "col-12" }, r4 = { class: "bg-light p-3 rounded small" }, i4 = /* @__PURE__ */ Ce({
  __name: "TasksPage",
  setup(e) {
    const t = b_(), n = mn(), s = $(""), o = $(""), r = $(""), i = $(null), a = $(null), l = [10, 25, 50, 100], f = U({
      get: () => t.pagination.page,
      set: (N) => t.setPage(N)
    }), u = U({
      get: () => t.pagination.limit,
      set: (N) => t.setLimit(N)
    }), d = U(() => s.value || o.value || r.value), h = U(() => {
      const N = t.filteredTasks.length, A = (t.pagination.page - 1) * t.pagination.limit + 1, Y = Math.min(A + t.pagination.limit - 1, N);
      return { start: A, end: Y, total: N };
    }), p = async () => {
      try {
        await t.fetchTasks();
      } catch (N) {
        console.error("Failed to refresh tasks:", N), n.showError("Failed to refresh tasks");
      }
    }, g = async () => {
      if (await n.confirmAction(
        "Full Synchronization",
        "Are you sure you want to perform a full synchronization? This will analyze all MRNs and create missing resource instances."
      )) {
        const A = await t.performFullSync();
        A?.success && n.showSuccess(`Full sync initiated successfully. Task ID: ${A.task_id}`);
      }
    }, m = async () => {
      if (await n.confirmAction(
        "Retry Failed Tasks",
        "Are you sure you want to retry all failed tasks? This will mark them as pending for re-processing."
      )) {
        const A = await t.retryFailed();
        A?.success && n.showSuccess(`Retry operation completed. ${A.statistics?.tasks_created || 0} tasks marked for retry.`);
      }
    }, _ = () => {
      t.setFilter("search_query", s.value);
    }, y = () => {
      t.setFilter("status", o.value);
    }, b = () => {
      t.setFilter("task_type", r.value);
    }, v = () => {
      s.value = "", o.value = "", r.value = "", t.clearFilters();
    }, O = async (N) => {
      i.value = N, new window.bootstrap.Modal(a.value).show();
    }, S = async (N) => {
      await n.confirmAction(
        "Delete Task",
        `Are you sure you want to delete task ${N.id}? This action cannot be undone.`
      ) && await t.deleteTask(N.id) && n.showSuccess("Task deleted successfully.");
    }, k = (N) => {
      if (!N) return "Unknown";
      try {
        const A = new Date(N), fe = (/* @__PURE__ */ new Date()).getTime() - A.getTime(), J = Math.floor(fe / 6e4), se = Math.floor(J / 60), W = Math.floor(se / 24);
        return J < 60 ? `${J}m ago` : se < 24 ? `${se}h ago` : W < 7 ? `${W}d ago` : A.toLocaleDateString();
      } catch {
        return N;
      }
    }, R = (N) => {
      if (!N) return "Unknown";
      try {
        return new Date(N).toLocaleString();
      } catch {
        return N;
      }
    }, I = (N) => ({
      fhir_fetch: "FHIR Fetch",
      full_sync: "Full Sync",
      retry_failed: "Retry Failed",
      archive: "Archive",
      cleanup: "Cleanup"
    })[N] || N, P = (N) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[N] || "badge bg-secondary", T = (N) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[N] || "fas fa-question-circle";
    return Pt(async () => {
      await p();
    }), $r(() => {
    }), (N, A) => {
      const Y = rt("b-pagination"), fe = rt("b-pagination-dropdown");
      return C(), D("div", iF, [
        c("div", aF, [
          A[9] || (A[9] = c("div", null, [
            c("h4", { class: "mb-1" }, "Task Management"),
            c("p", { class: "text-muted mb-0" }, "Monitor and manage background processing tasks")
          ], -1)),
          c("div", lF, [
            c("button", {
              class: "btn btn-warning btn-sm",
              onClick: g,
              disabled: H(t).operationLoading
            }, [
              c("i", {
                class: ue(["fas fa-arrows-rotate fa-fw me-1", { "fa-spin": H(t).operationLoading }])
              }, null, 2),
              A[6] || (A[6] = ee(" Full Sync "))
            ], 8, uF),
            c("button", {
              class: "btn btn-outline-warning btn-sm",
              onClick: m,
              disabled: H(t).operationLoading
            }, A[7] || (A[7] = [
              c("i", { class: "fas fa-exclamation-triangle fa-fw me-1" }, null, -1),
              ee(" Retry Failed ")
            ]), 8, cF),
            c("button", {
              class: "btn btn-primary btn-sm",
              onClick: p,
              disabled: H(t).loading
            }, [
              c("i", {
                class: ue(["fas fa-sync-alt fa-fw me-1", { "fa-spin": H(t).loading }])
              }, null, 2),
              A[8] || (A[8] = ee(" Refresh "))
            ], 8, dF)
          ])
        ]),
        c("div", fF, [
          le(rF)
        ]),
        c("div", pF, [
          c("div", hF, [
            c("div", mF, [
              c("div", gF, [
                A[10] || (A[10] = c("label", { class: "form-label" }, "Search Tasks", -1)),
                At(c("input", {
                  type: "text",
                  class: "form-control form-control-sm",
                  placeholder: "Search by ID or type...",
                  "onUpdate:modelValue": A[0] || (A[0] = (J) => s.value = J),
                  onInput: _
                }, null, 544), [
                  [Ji, s.value]
                ])
              ]),
              c("div", vF, [
                A[12] || (A[12] = c("label", { class: "form-label" }, "Status", -1)),
                At(c("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": A[1] || (A[1] = (J) => o.value = J),
                  onChange: y
                }, A[11] || (A[11] = [
                  Xc('<option value="">All Statuses</option><option value="pending">Pending</option><option value="processing">Processing</option><option value="completed">Completed</option><option value="failed">Failed</option>', 5)
                ]), 544), [
                  [fr, o.value]
                ])
              ]),
              c("div", _F, [
                A[14] || (A[14] = c("label", { class: "form-label" }, "Task Type", -1)),
                At(c("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": A[2] || (A[2] = (J) => r.value = J),
                  onChange: b
                }, A[13] || (A[13] = [
                  Xc('<option value="">All Types</option><option value="fhir_fetch">FHIR Fetch</option><option value="full_sync">Full Sync</option><option value="retry_failed">Retry Failed</option><option value="archive">Archive</option><option value="cleanup">Cleanup</option>', 6)
                ]), 544), [
                  [fr, r.value]
                ])
              ]),
              c("div", yF, [
                A[15] || (A[15] = c("label", { class: "form-label" }, "Per Page", -1)),
                At(c("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": A[3] || (A[3] = (J) => u.value = J)
                }, [
                  (C(), D(Oe, null, Je(l, (J) => c("option", {
                    key: J,
                    value: J
                  }, F(J), 9, EF)), 64))
                ], 512), [
                  [fr, u.value]
                ])
              ])
            ]),
            d.value ? (C(), D("div", bF, [
              c("div", { class: "col" }, [
                c("button", {
                  class: "btn btn-outline-secondary btn-sm",
                  onClick: v
                }, A[16] || (A[16] = [
                  c("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                  ee("Clear Filters ")
                ]))
              ])
            ])) : de("", !0)
          ])
        ]),
        c("div", wF, [
          c("div", AF, [
            H(t).loading ? (C(), D("div", SF, A[17] || (A[17] = [
              c("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                c("span", { class: "visually-hidden" }, "Loading tasks...")
              ], -1),
              c("p", { class: "mt-2 mb-0 text-muted" }, "Loading tasks...", -1)
            ]))) : H(t).paginatedTasks.length === 0 ? (C(), D("div", OF, [
              A[18] || (A[18] = c("i", {
                class: "fas fa-tasks text-muted",
                style: { "font-size": "3rem" }
              }, null, -1)),
              c("h6", CF, F(d.value ? "No tasks match your filters" : "No tasks found"), 1),
              c("span", TF, F(d.value ? "Try adjusting your search criteria." : "Tasks will appear here when created."), 1)
            ])) : (C(), D("div", NF, [
              c("div", DF, [
                c("table", kF, [
                  A[20] || (A[20] = c("thead", { class: "table-light" }, [
                    c("tr", null, [
                      c("th", { scope: "col" }, "Task"),
                      c("th", { scope: "col" }, "Status"),
                      c("th", { scope: "col" }, "Type"),
                      c("th", { scope: "col" }, "Created"),
                      c("th", { scope: "col" }, "Updated"),
                      c("th", {
                        scope: "col",
                        class: "text-end"
                      }, "Actions")
                    ])
                  ], -1)),
                  c("tbody", null, [
                    (C(!0), D(Oe, null, Je(H(t).paginatedTasks, (J) => (C(), D("tr", {
                      key: J.id
                    }, [
                      c("td", null, [
                        c("div", xF, [
                          c("span", RF, F(J.id), 1),
                          J.params.mrn ? (C(), D("small", IF, "MRN: " + F(J.params.mrn), 1)) : de("", !0)
                        ])
                      ]),
                      c("td", null, [
                        c("span", {
                          class: ue(P(J.status))
                        }, [
                          c("i", {
                            class: ue([T(J.status), "me-1"])
                          }, null, 2),
                          ee(" " + F(J.status.charAt(0).toUpperCase() + J.status.slice(1)), 1)
                        ], 2)
                      ]),
                      c("td", null, [
                        c("span", PF, F(I(J.key)), 1)
                      ]),
                      c("td", null, [
                        c("span", {
                          title: R(J.created_at)
                        }, F(k(J.created_at)), 9, VF)
                      ]),
                      c("td", null, [
                        c("span", {
                          title: R(J.updated_at)
                        }, F(k(J.updated_at)), 9, MF)
                      ]),
                      c("td", LF, [
                        c("div", FF, [
                          c("button", {
                            class: "btn btn-outline-info btn-sm btn-icon",
                            onClick: (se) => O(J),
                            title: "View Details"
                          }, A[19] || (A[19] = [
                            c("i", { class: "fas fa-info-circle" }, null, -1)
                          ]), 8, BF),
                          c("button", {
                            class: "btn btn-outline-danger btn-sm btn-icon",
                            title: "Delete Task",
                            disabled: J.status === "processing" || H(t).isTaskDeleting(J.id),
                            onClick: (se) => S(J)
                          }, [
                            c("i", {
                              class: ue(["fas", H(t).isTaskDeleting(J.id) ? "fa-spinner fa-spin" : "fa-trash-can"])
                            }, null, 2)
                          ], 8, jF)
                        ])
                      ])
                    ]))), 128))
                  ])
                ])
              ])
            ]))
          ])
        ]),
        H(t).filteredTasks.length > 0 ? (C(), D("div", UF, [
          c("small", HF, " Showing " + F(h.value.start) + "-" + F(h.value.end) + " of " + F(h.value.total) + " tasks ", 1),
          c("div", $F, [
            le(Y, {
              size: "sm",
              perPage: u.value,
              totalItems: H(t).filteredTasks.length,
              modelValue: f.value,
              "onUpdate:modelValue": A[4] || (A[4] = (J) => f.value = J)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            le(fe, {
              options: l,
              modelValue: u.value,
              "onUpdate:modelValue": A[5] || (A[5] = (J) => u.value = J)
            }, null, 8, ["modelValue"])
          ])
        ])) : de("", !0),
        c("div", {
          class: "modal fade",
          id: "taskDetailsModal",
          tabindex: "-1",
          ref_key: "taskDetailsModal",
          ref: a
        }, [
          c("div", WF, [
            c("div", KF, [
              A[29] || (A[29] = c("div", { class: "modal-header" }, [
                c("h5", { class: "modal-title" }, "Task Details"),
                c("button", {
                  type: "button",
                  class: "btn-close",
                  "data-bs-dismiss": "modal"
                })
              ], -1)),
              i.value ? (C(), D("div", zF, [
                c("div", qF, [
                  c("div", YF, [
                    A[26] || (A[26] = c("h6", null, "Basic Information", -1)),
                    c("dl", XF, [
                      A[21] || (A[21] = c("dt", { class: "col-sm-4" }, "ID:", -1)),
                      c("dd", GF, [
                        c("code", null, F(i.value.id), 1)
                      ]),
                      A[22] || (A[22] = c("dt", { class: "col-sm-4" }, "Type:", -1)),
                      c("dd", JF, F(I(i.value.key)), 1),
                      A[23] || (A[23] = c("dt", { class: "col-sm-4" }, "Status:", -1)),
                      c("dd", QF, [
                        c("span", {
                          class: ue(P(i.value.status))
                        }, F(i.value.status.charAt(0).toUpperCase() + i.value.status.slice(1)), 3)
                      ]),
                      A[24] || (A[24] = c("dt", { class: "col-sm-4" }, "Created:", -1)),
                      c("dd", ZF, F(R(i.value.created_at)), 1),
                      A[25] || (A[25] = c("dt", { class: "col-sm-4" }, "Updated:", -1)),
                      c("dd", e4, F(R(i.value.updated_at)), 1)
                    ])
                  ]),
                  c("div", t4, [
                    A[27] || (A[27] = c("h6", null, "Parameters", -1)),
                    c("pre", n4, F(JSON.stringify(i.value.params, null, 2)), 1)
                  ])
                ]),
                Object.keys(i.value.metadata).length > 0 ? (C(), D("div", s4, [
                  c("div", o4, [
                    A[28] || (A[28] = c("h6", null, "Metadata", -1)),
                    c("pre", r4, F(JSON.stringify(i.value.metadata, null, 2)), 1)
                  ])
                ])) : de("", !0)
              ])) : de("", !0),
              A[30] || (A[30] = c("div", { class: "modal-footer" }, [
                c("button", {
                  type: "button",
                  class: "btn btn-secondary",
                  "data-bs-dismiss": "modal"
                }, "Close")
              ], -1))
            ])
          ])
        ], 512)
      ]);
    };
  }
}), a4 = {}, l4 = { class: "error-wrapper" }, u4 = { class: "mt-5" };
function c4(e, t) {
  const n = rt("router-link");
  return C(), D("div", l4, [
    Ne(e.$slots, "title", {}, () => [
      t[0] || (t[0] = c("span", { class: "error-title" }, "Error 404", -1))
    ], !0),
    Ne(e.$slots, "description", {}, () => [
      t[1] || (t[1] = c("span", { class: "error-description" }, "Sorry, we couldn't find this page.", -1))
    ], !0),
    Ne(e.$slots, "subdescription", {}, () => [
      t[2] || (t[2] = c("span", { class: "error-sub-description" }, "But dont worry, you can find plenty of other things on the homepage..", -1))
    ], !0),
    c("div", u4, [
      le(n, {
        to: "/",
        class: "btn btn-sm btn-primary"
      }, {
        default: me(() => t[3] || (t[3] = [
          c("i", { class: "fas fa-arrow-left fa-fw me-1" }, null, -1),
          c("span", null, "Back to Home", -1)
        ])),
        _: 1,
        __: [3]
      })
    ])
  ]);
}
const d4 = /* @__PURE__ */ Qt(a4, [["render", c4], ["__scopeId", "data-v-d4f8fed2"]]), f4 = { class: "card shadow-sm" }, p4 = { class: "card-body" }, h4 = { class: "text-center" }, m4 = {
  key: 0,
  class: "lead text-danger"
}, g4 = {
  key: 1,
  class: "text-muted"
}, v4 = /* @__PURE__ */ Ce({
  __name: "ErrorPage",
  setup(e) {
    const n = Mg().query.message;
    return (s, o) => {
      const r = rt("router-link");
      return C(), D("div", f4, [
        c("div", p4, [
          c("div", h4, [
            o[1] || (o[1] = c("h1", { class: "display-4" }, "Something went wrong", -1)),
            H(n) ? (C(), D("p", m4, "Error: " + F(H(n)), 1)) : (C(), D("p", g4, "We're sorry for the inconvenience. Please try again later.")),
            le(r, {
              to: "/",
              class: "btn btn-primary mt-3"
            }, {
              default: me(() => o[0] || (o[0] = [
                ee("Go back to Home")
              ])),
              _: 1,
              __: [0]
            })
          ])
        ])
      ]);
    };
  }
}), _4 = [
  {
    path: "/",
    component: XA,
    children: [
      { path: "", name: "home", component: F2 },
      { path: "setup", name: "setup", component: $I },
      { path: "resources", name: "resources", component: TL },
      { path: "tasks", name: "tasks", component: i4 },
      { path: "error", name: "error", component: v4 },
      { path: "/:pathMatch(.*)*", component: d4 }
    ]
  }
];
let vi;
const zp = () => vi || (vi = BA({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: Xw(),
  routes: _4
}), vi), _o = {
  HasValidToken: "has_valid_token",
  NoFhirSystem: "no_fhir_system",
  NoValidTokens: "no_valid_tokens"
}, wc = /* @__PURE__ */ Pn("fhirAccess", () => {
  const e = Qs(), t = $(null), n = $(null), s = $(null), o = $(!1), r = $(null), i = $(null), a = $(_o.HasValidToken), l = $(null);
  let f = null;
  const u = U(() => !!t.value?.has_any_valid_token), d = U(() => a.value !== _o.HasValidToken), h = U(() => s.value?.level ?? (u.value ? "info" : "warning")), p = U(() => s.value?.message ?? ""), g = U(() => a.value === _o.NoFhirSystem), m = async () => {
    try {
      o.value = !0;
      const O = (await Ke.getFhirAccessStatus()).data;
      t.value = O.status, s.value = O.banner, a.value = O.state ?? _o.HasValidToken, r.value = O.standalone_launch_url ?? null, l.value = O.setup_route ?? null, n.value = O.counts ?? null, i.value = /* @__PURE__ */ new Date();
    } catch (v) {
      e.addError(v, "fhirAccessStore.fetchStatus");
    } finally {
      o.value = !1;
    }
  }, _ = async () => {
    await m();
  }, y = (v = 6e4) => {
    b(), f = window.setInterval(() => {
      m();
    }, v);
  }, b = () => {
    f !== null && (clearInterval(f), f = null);
  };
  return {
    // state
    status: t,
    counts: n,
    banner: s,
    loading: o,
    lastChecked: i,
    launchUrl: r,
    state: a,
    setupRoute: l,
    // computed
    hasValidToken: u,
    shouldWarn: d,
    level: h,
    message: p,
    isNoFhirSystem: g,
    // actions
    fetchStatus: m,
    refreshNow: _,
    startPolling: y,
    stopPolling: b
  };
}), y4 = {
  key: 0,
  class: "alert alert-danger"
}, E4 = { style: { "word-break": "break-all" } }, b4 = /* @__PURE__ */ Ce({
  __name: "ErrorsVisualizer",
  setup(e) {
    const t = $(), n = Qs(), { errors: s } = fn(n), o = (r) => JSON.stringify(r);
    return va(async () => {
      if (s.value?.length === 0) return;
      const r = t.value;
      r && (await r.show(), n.resetErrors());
    }), (r, i) => {
      const a = rt("b-modal");
      return C(), it(a, {
        ref_key: "modalRef",
        ref: t,
        "ok-only": "",
        size: "xl"
      }, {
        title: me(() => i[0] || (i[0] = [
          c("span", null, "Error", -1)
        ])),
        default: me(() => [
          (C(!0), D(Oe, null, Je(H(s), (l, f) => (C(), D(Oe, { key: f }, [
            l ? (C(), D("div", y4, [
              c("div", E4, F(o(l)), 1)
            ])) : de("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 512);
    };
  }
}), w4 = {
  key: 0,
  class: "text-muted",
  style: { "margin-left": "8px" }
}, A4 = ["disabled"], S4 = /* @__PURE__ */ Ce({
  __name: "TokenStatusBanner",
  setup(e) {
    const t = wc(), { banner: n, status: s, counts: o, shouldWarn: r, message: i, loading: a, lastChecked: l, state: f } = fn(t);
    return (u, d) => H(n) ? (C(), D("div", {
      key: 0,
      class: ue(["alert", H(r) ? "alert-warning" : "alert-info"]),
      role: "alert",
      style: { "margin-bottom": "10px" }
    }, [
      c("i", {
        class: ue(["fas", H(r) ? "fa-exclamation-triangle" : "fa-info-circle"]),
        style: { "margin-right": "8px" }
      }, null, 2),
      c("span", null, F(H(i)), 1),
      H(s) && H(f) !== H(_o).NoFhirSystem ? (C(), D("span", w4, [
        ee(" (Valid: " + F(H(s).valid_count) + " / " + F(H(o)?.project_total ?? H(s).total_project_users ?? H(s).total_users_with_token) + " ", 1),
        H(s).fhir_system_name ? (C(), D(Oe, { key: 0 }, [
          ee(" • System: " + F(H(s).fhir_system_name), 1)
        ], 64)) : de("", !0),
        H(l) ? (C(), D(Oe, { key: 1 }, [
          ee(" • Updated: " + F(H(l).toLocaleTimeString()), 1)
        ], 64)) : de("", !0),
        d[1] || (d[1] = ee(") "))
      ])) : de("", !0),
      c("button", {
        class: "btn btn-xs btn-default",
        style: { "margin-left": "10px" },
        disabled: H(a),
        onClick: d[0] || (d[0] = (h) => u.$emit("refresh")),
        title: "Refresh token status"
      }, [
        c("i", {
          class: ue(H(a) ? "fas fa-spinner fa-spin" : "fas fa-rotate")
        }, null, 2)
      ], 8, A4)
    ], 2)) : de("", !0);
  }
}), O4 = /* @__PURE__ */ Qt(S4, [["__scopeId", "data-v-ab306f96"]]), C4 = {
  key: 0,
  class: "alert alert-warning",
  role: "alert",
  style: { "margin-bottom": "12px" }
}, T4 = { class: "d-flex align-items-end justify-content-start mt-2" }, N4 = ["href"], D4 = {
  key: 1,
  class: "alert alert-info",
  role: "alert",
  style: { "margin-bottom": "12px" }
}, k4 = { class: "d-flex align-items-end justify-content-center mt-2" }, x4 = ["href"], R4 = /* @__PURE__ */ Ce({
  __name: "StandaloneLaunchHelp",
  setup(e) {
    const t = wc(), { shouldWarn: n, launchUrl: s, status: o, state: r, setupRoute: i } = fn(t);
    return (a, l) => H(r) === H(_o).NoFhirSystem ? (C(), D("div", C4, [
      l[1] || (l[1] = c("i", {
        class: "fas fa-exclamation-triangle",
        style: { "margin-right": "8px" }
      }, null, -1)),
      l[2] || (l[2] = c("span", null, " A FHIR system must be configured before users can authorize access or data can be fetched. Open Setup to select a system. ", -1)),
      c("div", T4, [
        H(i) ? (C(), D("a", {
          key: 0,
          href: H(i),
          class: "btn btn-sm btn-primary",
          style: { "margin-left": "10px" }
        }, l[0] || (l[0] = [
          c("i", { class: "fas fa-gear fa-fw" }, null, -1),
          ee(" Open Setup ")
        ]), 8, N4)) : de("", !0)
      ])
    ])) : H(n) && H(s) ? (C(), D("div", D4, [
      l[5] || (l[5] = c("i", {
        class: "fas fa-info-circle",
        style: { "margin-right": "8px" }
      }, null, -1)),
      c("span", null, [
        l[3] || (l[3] = ee(" To enable data fetching, sign in to the EHR and authorize access for this project using Standalone Launch. ")),
        H(o)?.fhir_system_name ? (C(), D(Oe, { key: 0 }, [
          ee(" (System: " + F(H(o).fhir_system_name) + ")", 1)
        ], 64)) : de("", !0)
      ]),
      c("div", k4, [
        c("a", {
          href: H(s),
          class: "btn btn-sm btn-primary text-light",
          style: { "margin-left": "10px" }
        }, l[4] || (l[4] = [
          c("i", { class: "fas fa-rocket fa-fw" }, null, -1),
          ee(" Standalone Launch ")
        ]), 8, x4)
      ])
    ])) : de("", !0);
  }
}), I4 = /* @__PURE__ */ Ce({
  __name: "App",
  setup(e) {
    const t = Wo(), n = wc(), { selectedFhirSystem: s } = fn(t);
    return Pt(async () => {
      await t.fetchProjectSettings(), await n.fetchStatus(), n.startPolling(6e4);
    }), $r(() => {
      n.stopPolling();
    }), Ot(s, async () => {
      await n.refreshNow();
    }), (o, r) => {
      const i = rt("router-view");
      return C(), D("div", null, [
        le(O4, {
          onRefresh: r[0] || (r[0] = (a) => H(n).refreshNow())
        }),
        le(R4),
        le(i),
        le(b4)
      ]);
    };
  }
}), J4 = (e) => {
  const t = wa(I4);
  t.config.errorHandler = (o, r, i) => {
    console.error("💥 Vue Error:", o), console.error("📍 Component:", r), console.error("ℹ️ Info:", i), t.runWithContext(() => {
      o instanceof Error ? zp().push({ name: "error", query: { message: o.message } }) : console.error("Unhandled non-Error exception:", o);
    });
  };
  const n = aw();
  t.use(hR), t.use(n);
  const s = zp();
  return t.use(s), t.mount(e), t;
};
export {
  J4 as default
};
