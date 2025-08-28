var Wp = {};
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function $n(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Pe = Wp.NODE_ENV !== "production" ? Object.freeze({}) : {}, ho = Wp.NODE_ENV !== "production" ? Object.freeze([]) : [], it = () => {
}, g_ = () => !1, Vr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ii = (e) => e.startsWith("onUpdate:"), Xe = Object.assign, gc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, v_ = Object.prototype.hasOwnProperty, Ve = (e, t) => v_.call(e, t), ce = Array.isArray, Ns = (e) => Lr(e) === "[object Map]", Io = (e) => Lr(e) === "[object Set]", bu = (e) => Lr(e) === "[object Date]", ve = (e) => typeof e == "function", ze = (e) => typeof e == "string", sn = (e) => typeof e == "symbol", Me = (e) => e !== null && typeof e == "object", vc = (e) => (Me(e) || ve(e)) && ve(e.then) && ve(e.catch), $p = Object.prototype.toString, Lr = (e) => $p.call(e), _c = (e) => Lr(e).slice(8, -1), Kp = (e) => Lr(e) === "[object Object]", Ec = (e) => ze(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rr = /* @__PURE__ */ $n(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), __ = /* @__PURE__ */ $n(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), na = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, E_ = /-(\w)/g, mt = na(
  (e) => e.replace(E_, (t, n) => n ? n.toUpperCase() : "")
), y_ = /\B([A-Z])/g, Cn = na(
  (e) => e.replace(y_, "-$1").toLowerCase()
), Ls = na((e) => e.charAt(0).toUpperCase() + e.slice(1)), Es = na(
  (e) => e ? `on${Ls(e)}` : ""
), xt = (e, t) => !Object.is(e, t), oo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, vr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Pi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, b_ = (e) => {
  const t = ze(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let wu;
const Mr = () => wu || (wu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function os(e) {
  if (ce(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ze(s) ? S_(s) : os(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (ze(e) || Me(e))
    return e;
}
const w_ = /;(?![^(]*\))/g, A_ = /:([^]+)/, O_ = /\/\*[^]*?\*\//g;
function S_(e) {
  const t = {};
  return e.replace(O_, "").split(w_).forEach((n) => {
    if (n) {
      const s = n.split(A_);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function me(e) {
  let t = "";
  if (ze(e))
    t = e;
  else if (ce(e))
    for (let n = 0; n < e.length; n++) {
      const s = me(e[n]);
      s && (t += s + " ");
    }
  else if (Me(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ze(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !ze(t) && (e.class = me(t)), n && (e.style = os(n)), e;
}
const C_ = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", T_ = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", N_ = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", D_ = /* @__PURE__ */ $n(C_), x_ = /* @__PURE__ */ $n(T_), k_ = /* @__PURE__ */ $n(N_), R_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", I_ = /* @__PURE__ */ $n(R_);
function zp(e) {
  return !!e || e === "";
}
function P_(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Ms(e[s], t[s]);
  return n;
}
function Ms(e, t) {
  if (e === t) return !0;
  let n = bu(e), s = bu(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = sn(e), s = sn(t), n || s)
    return e === t;
  if (n = ce(e), s = ce(t), n || s)
    return n && s ? P_(e, t) : !1;
  if (n = Me(e), s = Me(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (a && !l || !a && l || !Ms(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function yc(e, t) {
  return e.findIndex((n) => Ms(n, t));
}
const qp = (e) => !!(e && e.__v_isRef === !0), z = (e) => ze(e) ? e : e == null ? "" : ce(e) || Me(e) && (e.toString === $p || !ve(e.toString)) ? qp(e) ? z(e.value) : JSON.stringify(e, Xp, 2) : String(e), Xp = (e, t) => qp(t) ? Xp(e, t.value) : Ns(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[La(s, r) + " =>"] = o, n),
    {}
  )
} : Io(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => La(n))
} : sn(t) ? La(t) : Me(t) && !ce(t) && !Kp(t) ? String(t) : t, La = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    sn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var We = {};
function zt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ft;
class Yp {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ft, !t && ft && (this.index = (ft.scopes || (ft.scopes = [])).push(
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
      const n = ft;
      try {
        return ft = this, t();
      } finally {
        ft = n;
      }
    } else We.NODE_ENV !== "production" && zt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ft, ft = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ft = this.prevScope, this.prevScope = void 0);
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
function Gp(e) {
  return new Yp(e);
}
function Qp() {
  return ft;
}
function V_(e, t = !1) {
  ft ? ft.cleanups.push(e) : We.NODE_ENV !== "production" && !t && zt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Ue;
const Ma = /* @__PURE__ */ new WeakSet();
class Jp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ft && ft.active && ft.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ma.has(this) && (Ma.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || eh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Au(this), th(this);
    const t = Ue, n = tn;
    Ue = this, tn = !0;
    try {
      return this.fn();
    } finally {
      We.NODE_ENV !== "production" && Ue !== this && zt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), nh(this), Ue = t, tn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ac(t);
      this.deps = this.depsTail = void 0, Au(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ma.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    bl(this) && this.run();
  }
  get dirty() {
    return bl(this);
  }
}
let Zp = 0, ir, ar;
function eh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ar, ar = e;
    return;
  }
  e.next = ir, ir = e;
}
function bc() {
  Zp++;
}
function wc() {
  if (--Zp > 0)
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
function th(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function nh(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Ac(s), L_(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function bl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (sh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function sh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === _r) || (e.globalVersion = _r, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !bl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ue, s = tn;
  Ue = e, tn = !0;
  try {
    th(e);
    const o = e.fn(e._value);
    (t.version === 0 || xt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Ue = n, tn = s, nh(e), e.flags &= -3;
  }
}
function Ac(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), We.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Ac(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function L_(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let tn = !0;
const oh = [];
function on() {
  oh.push(tn), tn = !1;
}
function rn() {
  const e = oh.pop();
  tn = e === void 0 ? !0 : e;
}
function Au(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ue;
    Ue = void 0;
    try {
      t();
    } finally {
      Ue = n;
    }
  }
}
let _r = 0;
class M_ {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class sa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, We.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Ue || !tn || Ue === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ue)
      n = this.activeLink = new M_(Ue, this), Ue.deps ? (n.prevDep = Ue.depsTail, Ue.depsTail.nextDep = n, Ue.depsTail = n) : Ue.deps = Ue.depsTail = n, rh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Ue.depsTail, n.nextDep = void 0, Ue.depsTail.nextDep = n, Ue.depsTail = n, Ue.deps === n && (Ue.deps = s);
    }
    return We.NODE_ENV !== "production" && Ue.onTrack && Ue.onTrack(
      Xe(
        {
          effect: Ue
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, _r++, this.notify(t);
  }
  notify(t) {
    bc();
    try {
      if (We.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Xe(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      wc();
    }
  }
}
function rh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        rh(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), We.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Vi = /* @__PURE__ */ new WeakMap(), Ds = Symbol(
  We.NODE_ENV !== "production" ? "Object iterate" : ""
), wl = Symbol(
  We.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Er = Symbol(
  We.NODE_ENV !== "production" ? "Array iterate" : ""
);
function rt(e, t, n) {
  if (tn && Ue) {
    let s = Vi.get(e);
    s || Vi.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new sa()), o.map = s, o.key = n), We.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function En(e, t, n, s, o, r) {
  const i = Vi.get(e);
  if (!i) {
    _r++;
    return;
  }
  const a = (l) => {
    l && (We.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: r
    }) : l.trigger());
  };
  if (bc(), t === "clear")
    i.forEach(a);
  else {
    const l = ce(e), f = l && Ec(n);
    if (l && n === "length") {
      const c = Number(s);
      i.forEach((d, h) => {
        (h === "length" || h === Er || !sn(h) && h >= c) && a(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(Er)), t) {
        case "add":
          l ? f && a(i.get("length")) : (a(i.get(Ds)), Ns(e) && a(i.get(wl)));
          break;
        case "delete":
          l || (a(i.get(Ds)), Ns(e) && a(i.get(wl)));
          break;
        case "set":
          Ns(e) && a(i.get(Ds));
          break;
      }
  }
  wc();
}
function F_(e, t) {
  const n = Vi.get(e);
  return n && n.get(t);
}
function Qs(e) {
  const t = Ee(e);
  return t === e ? t : (rt(t, "iterate", Er), At(e) ? t : t.map(dt));
}
function oa(e) {
  return rt(e = Ee(e), "iterate", Er), e;
}
const B_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return Fa(this, Symbol.iterator, dt);
  },
  concat(...e) {
    return Qs(this).concat(
      ...e.map((t) => ce(t) ? Qs(t) : t)
    );
  },
  entries() {
    return Fa(this, "entries", (e) => (e[1] = dt(e[1]), e));
  },
  every(e, t) {
    return In(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return In(this, "filter", e, t, (n) => n.map(dt), arguments);
  },
  find(e, t) {
    return In(this, "find", e, t, dt, arguments);
  },
  findIndex(e, t) {
    return In(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return In(this, "findLast", e, t, dt, arguments);
  },
  findLastIndex(e, t) {
    return In(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return In(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ba(this, "includes", e);
  },
  indexOf(...e) {
    return Ba(this, "indexOf", e);
  },
  join(e) {
    return Qs(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ba(this, "lastIndexOf", e);
  },
  map(e, t) {
    return In(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return zo(this, "pop");
  },
  push(...e) {
    return zo(this, "push", e);
  },
  reduce(e, ...t) {
    return Ou(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ou(this, "reduceRight", e, t);
  },
  shift() {
    return zo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return In(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return zo(this, "splice", e);
  },
  toReversed() {
    return Qs(this).toReversed();
  },
  toSorted(e) {
    return Qs(this).toSorted(e);
  },
  toSpliced(...e) {
    return Qs(this).toSpliced(...e);
  },
  unshift(...e) {
    return zo(this, "unshift", e);
  },
  values() {
    return Fa(this, "values", dt);
  }
};
function Fa(e, t, n) {
  const s = oa(e), o = s[t]();
  return s !== e && !At(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const j_ = Array.prototype;
function In(e, t, n, s, o, r) {
  const i = oa(e), a = i !== e && !At(e), l = i[t];
  if (l !== j_[t]) {
    const d = l.apply(e, r);
    return a ? dt(d) : d;
  }
  let f = n;
  i !== e && (a ? f = function(d, h) {
    return n.call(this, dt(d), h, e);
  } : n.length > 2 && (f = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const c = l.call(i, f, s);
  return a && o ? o(c) : c;
}
function Ou(e, t, n, s) {
  const o = oa(e);
  let r = n;
  return o !== e && (At(e) ? n.length > 3 && (r = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : r = function(i, a, l) {
    return n.call(this, i, dt(a), l, e);
  }), o[t](r, ...s);
}
function Ba(e, t, n) {
  const s = Ee(e);
  rt(s, "iterate", Er);
  const o = s[t](...n);
  return (o === -1 || o === !1) && yr(n[0]) ? (n[0] = Ee(n[0]), s[t](...n)) : o;
}
function zo(e, t, n = []) {
  on(), bc();
  const s = Ee(e)[t].apply(e, n);
  return wc(), rn(), s;
}
const U_ = /* @__PURE__ */ $n("__proto__,__v_isRef,__isVue"), ih = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(sn)
);
function H_(e) {
  sn(e) || (e = String(e));
  const t = Ee(this);
  return rt(t, "has", e), t.hasOwnProperty(e);
}
class ah {
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
      return s === (o ? r ? ph : fh : r ? dh : uh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = ce(t);
    if (!o) {
      let l;
      if (i && (l = B_[n]))
        return l;
      if (n === "hasOwnProperty")
        return H_;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $e(t) ? t : s
    );
    return (sn(n) ? ih.has(n) : U_(n)) || (o || rt(t, "get", n), r) ? a : $e(a) ? i && Ec(n) ? a : a.value : Me(a) ? o ? Oc(a) : Fs(a) : a;
  }
}
class lh extends ah {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const l = Tn(r);
      if (!At(s) && !Tn(s) && (r = Ee(r), s = Ee(s)), !ce(t) && $e(r) && !$e(s))
        return l ? !1 : (r.value = s, !0);
    }
    const i = ce(t) && Ec(n) ? Number(n) < t.length : Ve(t, n), a = Reflect.set(
      t,
      n,
      s,
      $e(t) ? t : o
    );
    return t === Ee(o) && (i ? xt(s, r) && En(t, "set", n, s, r) : En(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = Ve(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && En(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!sn(n) || !ih.has(n)) && rt(t, "has", n), s;
  }
  ownKeys(t) {
    return rt(
      t,
      "iterate",
      ce(t) ? "length" : Ds
    ), Reflect.ownKeys(t);
  }
}
class ch extends ah {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return We.NODE_ENV !== "production" && zt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return We.NODE_ENV !== "production" && zt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const W_ = /* @__PURE__ */ new lh(), $_ = /* @__PURE__ */ new ch(), K_ = /* @__PURE__ */ new lh(!0), z_ = /* @__PURE__ */ new ch(!0), Al = (e) => e, Zr = (e) => Reflect.getPrototypeOf(e);
function q_(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = Ee(o), i = Ns(r), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, f = o[e](...s), c = n ? Al : t ? Li : dt;
    return !t && rt(
      r,
      "iterate",
      l ? wl : Ds
    ), {
      // iterator protocol
      next() {
        const { value: d, done: h } = f.next();
        return h ? { value: d, done: h } : {
          value: a ? [c(d[0]), c(d[1])] : c(d),
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
function ei(e) {
  return function(...t) {
    if (We.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      zt(
        `${Ls(e)} operation ${n}failed: target is readonly.`,
        Ee(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function X_(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = Ee(r), a = Ee(o);
      e || (xt(o, a) && rt(i, "get", o), rt(i, "get", a));
      const { has: l } = Zr(i), f = t ? Al : e ? Li : dt;
      if (l.call(i, o))
        return f(r.get(o));
      if (l.call(i, a))
        return f(r.get(a));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && rt(Ee(o), "iterate", Ds), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = Ee(r), a = Ee(o);
      return e || (xt(o, a) && rt(i, "has", o), rt(i, "has", a)), o === a ? r.has(o) : r.has(o) || r.has(a);
    },
    forEach(o, r) {
      const i = this, a = i.__v_raw, l = Ee(a), f = t ? Al : e ? Li : dt;
      return !e && rt(l, "iterate", Ds), a.forEach((c, d) => o.call(r, f(c), f(d), i));
    }
  };
  return Xe(
    n,
    e ? {
      add: ei("add"),
      set: ei("set"),
      delete: ei("delete"),
      clear: ei("clear")
    } : {
      add(o) {
        !t && !At(o) && !Tn(o) && (o = Ee(o));
        const r = Ee(this);
        return Zr(r).has.call(r, o) || (r.add(o), En(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !At(r) && !Tn(r) && (r = Ee(r));
        const i = Ee(this), { has: a, get: l } = Zr(i);
        let f = a.call(i, o);
        f ? We.NODE_ENV !== "production" && Su(i, a, o) : (o = Ee(o), f = a.call(i, o));
        const c = l.call(i, o);
        return i.set(o, r), f ? xt(r, c) && En(i, "set", o, r, c) : En(i, "add", o, r), this;
      },
      delete(o) {
        const r = Ee(this), { has: i, get: a } = Zr(r);
        let l = i.call(r, o);
        l ? We.NODE_ENV !== "production" && Su(r, i, o) : (o = Ee(o), l = i.call(r, o));
        const f = a ? a.call(r, o) : void 0, c = r.delete(o);
        return l && En(r, "delete", o, void 0, f), c;
      },
      clear() {
        const o = Ee(this), r = o.size !== 0, i = We.NODE_ENV !== "production" ? Ns(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
        return r && En(
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
    n[o] = q_(o, e, t);
  }), n;
}
function ra(e, t) {
  const n = X_(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    Ve(n, o) && o in s ? n : s,
    o,
    r
  );
}
const Y_ = {
  get: /* @__PURE__ */ ra(!1, !1)
}, G_ = {
  get: /* @__PURE__ */ ra(!1, !0)
}, Q_ = {
  get: /* @__PURE__ */ ra(!0, !1)
}, J_ = {
  get: /* @__PURE__ */ ra(!0, !0)
};
function Su(e, t, n) {
  const s = Ee(n);
  if (s !== n && t.call(e, s)) {
    const o = _c(e);
    zt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const uh = /* @__PURE__ */ new WeakMap(), dh = /* @__PURE__ */ new WeakMap(), fh = /* @__PURE__ */ new WeakMap(), ph = /* @__PURE__ */ new WeakMap();
function Z_(e) {
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
function eE(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Z_(_c(e));
}
function Fs(e) {
  return Tn(e) ? e : ia(
    e,
    !1,
    W_,
    Y_,
    uh
  );
}
function hh(e) {
  return ia(
    e,
    !1,
    K_,
    G_,
    dh
  );
}
function Oc(e) {
  return ia(
    e,
    !0,
    $_,
    Q_,
    fh
  );
}
function bn(e) {
  return ia(
    e,
    !0,
    z_,
    J_,
    ph
  );
}
function ia(e, t, n, s, o) {
  if (!Me(e))
    return We.NODE_ENV !== "production" && zt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = eE(e);
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
function nn(e) {
  return Tn(e) ? nn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Tn(e) {
  return !!(e && e.__v_isReadonly);
}
function At(e) {
  return !!(e && e.__v_isShallow);
}
function yr(e) {
  return e ? !!e.__v_raw : !1;
}
function Ee(e) {
  const t = e && e.__v_raw;
  return t ? Ee(t) : e;
}
function ts(e) {
  return !Ve(e, "__v_skip") && Object.isExtensible(e) && vr(e, "__v_skip", !0), e;
}
const dt = (e) => Me(e) ? Fs(e) : e, Li = (e) => Me(e) ? Oc(e) : e;
function $e(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ee(e) {
  return gh(e, !1);
}
function mh(e) {
  return gh(e, !0);
}
function gh(e, t) {
  return $e(e) ? e : new tE(e, t);
}
class tE {
  constructor(t, n) {
    this.dep = new sa(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Ee(t), this._value = n ? t : dt(t), this.__v_isShallow = n;
  }
  get value() {
    return We.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || At(t) || Tn(t);
    t = s ? t : Ee(t), xt(t, n) && (this._rawValue = t, this._value = s ? t : dt(t), We.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ie(e) {
  return $e(e) ? e.value : e;
}
const nE = {
  get: (e, t, n) => t === "__v_raw" ? e : ie(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return $e(o) && !$e(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function vh(e) {
  return nn(e) ? e : new Proxy(e, nE);
}
class sE {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new sa(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function oE(e) {
  return new sE(e);
}
function an(e) {
  We.NODE_ENV !== "production" && !yr(e) && zt("toRefs() expects a reactive object but received a plain one.");
  const t = ce(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = _h(e, n);
  return t;
}
class rE {
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
    return F_(Ee(this._object), this._key);
  }
}
class iE {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function hi(e, t, n) {
  return $e(e) ? e : ve(e) ? new iE(e) : Me(e) && arguments.length > 1 ? _h(e, t, n) : ee(e);
}
function _h(e, t, n) {
  const s = e[t];
  return $e(s) ? s : new rE(e, t, n);
}
class aE {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new sa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = _r - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ue !== this)
      return eh(this, !0), !0;
  }
  get value() {
    const t = We.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return sh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : We.NODE_ENV !== "production" && zt("Write operation failed: computed value is readonly");
  }
}
function lE(e, t, n = !1) {
  let s, o;
  return ve(e) ? s = e : (s = e.get, o = e.set), new aE(s, o, n);
}
const ti = {}, Mi = /* @__PURE__ */ new WeakMap();
let ys;
function cE(e, t = !1, n = ys) {
  if (n) {
    let s = Mi.get(n);
    s || Mi.set(n, s = []), s.push(e);
  } else We.NODE_ENV !== "production" && !t && zt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function uE(e, t, n = Pe) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: a, call: l } = n, f = (O) => {
    (n.onWarn || zt)(
      "Invalid watch source: ",
      O,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = (O) => o ? O : At(O) || o === !1 || o === 0 ? Bn(O, 1) : Bn(O);
  let d, h, p, m, g = !1, v = !1;
  if ($e(e) ? (h = () => e.value, g = At(e)) : nn(e) ? (h = () => c(e), g = !0) : ce(e) ? (v = !0, g = e.some((O) => nn(O) || At(O)), h = () => e.map((O) => {
    if ($e(O))
      return O.value;
    if (nn(O))
      return c(O);
    if (ve(O))
      return l ? l(O, 2) : O();
    We.NODE_ENV !== "production" && f(O);
  })) : ve(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (p) {
      on();
      try {
        p();
      } finally {
        rn();
      }
    }
    const O = ys;
    ys = d;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      ys = O;
    }
  } : (h = it, We.NODE_ENV !== "production" && f(e)), t && o) {
    const O = h, T = o === !0 ? 1 / 0 : o;
    h = () => Bn(O(), T);
  }
  const E = Qp(), b = () => {
    d.stop(), E && E.active && gc(E.effects, d);
  };
  if (r && t) {
    const O = t;
    t = (...T) => {
      O(...T), b();
    };
  }
  let y = v ? new Array(e.length).fill(ti) : ti;
  const A = (O) => {
    if (!(!(d.flags & 1) || !d.dirty && !O))
      if (t) {
        const T = d.run();
        if (o || g || (v ? T.some((x, j) => xt(x, y[j])) : xt(T, y))) {
          p && p();
          const x = ys;
          ys = d;
          try {
            const j = [
              T,
              // pass undefined as the old value when it's changed for the first time
              y === ti ? void 0 : v && y[0] === ti ? [] : y,
              m
            ];
            y = T, l ? l(t, 3, j) : (
              // @ts-expect-error
              t(...j)
            );
          } finally {
            ys = x;
          }
        }
      } else
        d.run();
  };
  return a && a(A), d = new Jp(h), d.scheduler = i ? () => i(A, !1) : A, m = (O) => cE(O, !1, d), p = d.onStop = () => {
    const O = Mi.get(d);
    if (O) {
      if (l)
        l(O, 4);
      else
        for (const T of O) T();
      Mi.delete(d);
    }
  }, We.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? s ? A(!0) : y = d.run() : i ? i(A.bind(null, !0), !0) : d.run(), b.pause = d.pause.bind(d), b.resume = d.resume.bind(d), b.stop = b, b;
}
function Bn(e, t = 1 / 0, n) {
  if (t <= 0 || !Me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, $e(e))
    Bn(e.value, t, n);
  else if (ce(e))
    for (let s = 0; s < e.length; s++)
      Bn(e[s], t, n);
  else if (Io(e) || Ns(e))
    e.forEach((s) => {
      Bn(s, t, n);
    });
  else if (Kp(e)) {
    for (const s in e)
      Bn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Bn(e[s], t, n);
  }
  return e;
}
var S = {};
const xs = [];
function mi(e) {
  xs.push(e);
}
function gi() {
  xs.pop();
}
let ja = !1;
function q(e, ...t) {
  if (ja) return;
  ja = !0, on();
  const n = xs.length ? xs[xs.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = dE();
  if (s)
    Po(
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
          ({ vnode: r }) => `at <${ha(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...fE(o)), console.warn(...r);
  }
  rn(), ja = !1;
}
function dE() {
  let e = xs[xs.length - 1];
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
function fE(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...pE(n));
  }), t;
}
function pE({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${ha(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...hE(e.props), r] : [o + r];
}
function hE(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Eh(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Eh(e, t, n) {
  return ze(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : $e(t) ? (t = Eh(e, Ee(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ve(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Ee(t), n ? t : [`${e}=`, t]);
}
function mE(e, t) {
  S.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? q(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && q(`${t} is NaN - the duration expression might be incorrect.`));
}
const Sc = {
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
function Po(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Fr(o, t, n);
  }
}
function ln(e, t, n, s) {
  if (ve(e)) {
    const o = Po(e, t, n, s);
    return o && vc(o) && o.catch((r) => {
      Fr(r, t, n);
    }), o;
  }
  if (ce(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(ln(e[r], t, n, s));
    return o;
  } else S.NODE_ENV !== "production" && q(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Fr(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Pe;
  if (t) {
    let a = t.parent;
    const l = t.proxy, f = S.NODE_ENV !== "production" ? Sc[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, l, f) === !1)
            return;
      }
      a = a.parent;
    }
    if (r) {
      on(), Po(r, null, 10, [
        e,
        l,
        f
      ]), rn();
      return;
    }
  }
  gE(e, n, o, s, i);
}
function gE(e, t, n, s = !0, o = !1) {
  if (S.NODE_ENV !== "production") {
    const r = Sc[t];
    if (n && mi(n), q(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && gi(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const bt = [];
let _n = -1;
const mo = [];
let Gn = null, ro = 0;
const yh = /* @__PURE__ */ Promise.resolve();
let Fi = null;
const vE = 100;
function Eo(e) {
  const t = Fi || yh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function _E(e) {
  let t = _n + 1, n = bt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = bt[s], r = br(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function aa(e) {
  if (!(e.flags & 1)) {
    const t = br(e), n = bt[bt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= br(n) ? bt.push(e) : bt.splice(_E(t), 0, e), e.flags |= 1, bh();
  }
}
function bh() {
  Fi || (Fi = yh.then(Oh));
}
function wh(e) {
  ce(e) ? mo.push(...e) : Gn && e.id === -1 ? Gn.splice(ro + 1, 0, e) : e.flags & 1 || (mo.push(e), e.flags |= 1), bh();
}
function Cu(e, t, n = _n + 1) {
  for (S.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < bt.length; n++) {
    const s = bt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || S.NODE_ENV !== "production" && Cc(t, s))
        continue;
      bt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ah(e) {
  if (mo.length) {
    const t = [...new Set(mo)].sort(
      (n, s) => br(n) - br(s)
    );
    if (mo.length = 0, Gn) {
      Gn.push(...t);
      return;
    }
    for (Gn = t, S.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ro = 0; ro < Gn.length; ro++) {
      const n = Gn[ro];
      S.NODE_ENV !== "production" && Cc(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Gn = null, ro = 0;
  }
}
const br = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Oh(e) {
  S.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = S.NODE_ENV !== "production" ? (n) => Cc(e, n) : it;
  try {
    for (_n = 0; _n < bt.length; _n++) {
      const n = bt[_n];
      if (n && !(n.flags & 8)) {
        if (S.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Po(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; _n < bt.length; _n++) {
      const n = bt[_n];
      n && (n.flags &= -2);
    }
    _n = -1, bt.length = 0, Ah(e), Fi = null, (bt.length || mo.length) && Oh(e);
  }
}
function Cc(e, t) {
  const n = e.get(t) || 0;
  if (n > vE) {
    const s = t.i, o = s && Ic(s.type);
    return Fr(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Zt = !1;
const vi = /* @__PURE__ */ new Map();
S.NODE_ENV !== "production" && (Mr().__VUE_HMR_RUNTIME__ = {
  createRecord: Ua(Sh),
  rerender: Ua(bE),
  reload: Ua(wE)
});
const Bs = /* @__PURE__ */ new Map();
function EE(e) {
  const t = e.type.__hmrId;
  let n = Bs.get(t);
  n || (Sh(t, e.type), n = Bs.get(t)), n.instances.add(e);
}
function yE(e) {
  Bs.get(e.type.__hmrId).instances.delete(e);
}
function Sh(e, t) {
  return Bs.has(e) ? !1 : (Bs.set(e, {
    initialDef: Bi(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Bi(e) {
  return gm(e) ? e.__vccOpts : e;
}
function bE(e, t) {
  const n = Bs.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Bi(s.type).render = t), s.renderCache = [], Zt = !0, s.update(), Zt = !1;
  }));
}
function wE(e, t) {
  const n = Bs.get(e);
  if (!n) return;
  t = Bi(t), Tu(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = Bi(r.type);
    let a = vi.get(i);
    a || (i !== n.initialDef && Tu(i, t), vi.set(i, a = /* @__PURE__ */ new Set())), a.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (a.add(r), r.ceReload(t.styles), a.delete(r)) : r.parent ? aa(() => {
      Zt = !0, r.parent.update(), Zt = !1, a.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  wh(() => {
    vi.clear();
  });
}
function Tu(e, t) {
  Xe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ua(e) {
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
let yn, tr = [], Ol = !1;
function Br(e, ...t) {
  yn ? yn.emit(e, ...t) : Ol || tr.push({ event: e, args: t });
}
function Ch(e, t) {
  var n, s;
  yn = e, yn ? (yn.enabled = !0, tr.forEach(({ event: o, args: r }) => yn.emit(o, ...r)), tr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Ch(r, t);
  }), setTimeout(() => {
    yn || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ol = !0, tr = []);
  }, 3e3)) : (Ol = !0, tr = []);
}
function AE(e, t) {
  Br("app:init", e, t, {
    Fragment: Oe,
    Text: Ur,
    Comment: et,
    Static: ur
  });
}
function OE(e) {
  Br("app:unmount", e);
}
const SE = /* @__PURE__ */ Tc(
  "component:added"
  /* COMPONENT_ADDED */
), Th = /* @__PURE__ */ Tc(
  "component:updated"
  /* COMPONENT_UPDATED */
), CE = /* @__PURE__ */ Tc(
  "component:removed"
  /* COMPONENT_REMOVED */
), TE = (e) => {
  yn && typeof yn.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !yn.cleanupBuffer(e) && CE(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Tc(e) {
  return (t) => {
    Br(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const NE = /* @__PURE__ */ Nh(
  "perf:start"
  /* PERFORMANCE_START */
), DE = /* @__PURE__ */ Nh(
  "perf:end"
  /* PERFORMANCE_END */
);
function Nh(e) {
  return (t, n, s) => {
    Br(e, t.appContext.app, t.uid, t, n, s);
  };
}
function xE(e, t, n) {
  Br(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ge = null, Dh = null;
function ji(e) {
  const t = Ge;
  return Ge = e, Dh = e && e.type.__scopeId || null, t;
}
function xe(e, t = Ge, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && $u(-1);
    const r = ji(t);
    let i;
    try {
      i = e(...o);
    } finally {
      ji(r), s._d && $u(1);
    }
    return S.NODE_ENV !== "production" && Th(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function xh(e) {
  __(e) && q("Do not use built-in directive ids as custom directive id: " + e);
}
function ct(e, t) {
  if (Ge === null)
    return S.NODE_ENV !== "production" && q("withDirectives can only be used inside render functions."), e;
  const n = pa(Ge), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, a, l = Pe] = t[o];
    r && (ve(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Bn(i), s.push({
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
function ms(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    r && (a.oldValue = r[i].value);
    let l = a.dir[s];
    l && (on(), ln(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), rn());
  }
}
const kh = Symbol("_vte"), Rh = (e) => e.__isTeleport, ks = (e) => e && (e.disabled || e.disabled === ""), Nu = (e) => e && (e.defer || e.defer === ""), Du = (e) => typeof SVGElement < "u" && e instanceof SVGElement, xu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Sl = (e, t) => {
  const n = e && e.to;
  if (ze(n))
    if (t) {
      const s = t(n);
      return S.NODE_ENV !== "production" && !s && !ks(e) && q(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return S.NODE_ENV !== "production" && q(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return S.NODE_ENV !== "production" && !n && !ks(e) && q(`Invalid Teleport target: ${n}`), n;
}, Ih = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, a, l, f) {
    const {
      mc: c,
      pc: d,
      pbc: h,
      o: { insert: p, querySelector: m, createText: g, createComment: v }
    } = f, E = ks(t.props);
    let { shapeFlag: b, children: y, dynamicChildren: A } = t;
    if (S.NODE_ENV !== "production" && Zt && (l = !1, A = null), e == null) {
      const O = t.el = S.NODE_ENV !== "production" ? v("teleport start") : g(""), T = t.anchor = S.NODE_ENV !== "production" ? v("teleport end") : g("");
      p(O, n, s), p(T, n, s);
      const x = (L, F) => {
        b & 16 && (o && o.isCE && (o.ce._teleportTarget = L), c(
          y,
          L,
          F,
          o,
          r,
          i,
          a,
          l
        ));
      }, j = () => {
        const L = t.target = Sl(t.props, m), F = Ph(L, t, g, p);
        L ? (i !== "svg" && Du(L) ? i = "svg" : i !== "mathml" && xu(L) && (i = "mathml"), E || (x(L, F), _i(t, !1))) : S.NODE_ENV !== "production" && !E && q(
          "Invalid Teleport target on mount:",
          L,
          `(${typeof L})`
        );
      };
      E && (x(n, T), _i(t, !0)), Nu(t.props) ? (t.el.__isMounted = !1, Et(() => {
        j(), delete t.el.__isMounted;
      }, r)) : j();
    } else {
      if (Nu(t.props) && e.el.__isMounted === !1) {
        Et(() => {
          Ih.process(
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
      const O = t.anchor = e.anchor, T = t.target = e.target, x = t.targetAnchor = e.targetAnchor, j = ks(e.props), L = j ? n : T, F = j ? O : x;
      if (i === "svg" || Du(T) ? i = "svg" : (i === "mathml" || xu(T)) && (i = "mathml"), A ? (h(
        e.dynamicChildren,
        A,
        L,
        o,
        r,
        i,
        a
      ), cr(e, t, S.NODE_ENV === "production")) : l || d(
        e,
        t,
        L,
        F,
        o,
        r,
        i,
        a,
        !1
      ), E)
        j ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ni(
          t,
          n,
          O,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const B = t.target = Sl(
          t.props,
          m
        );
        B ? ni(
          t,
          B,
          null,
          f,
          0
        ) : S.NODE_ENV !== "production" && q(
          "Invalid Teleport target on update:",
          T,
          `(${typeof T})`
        );
      } else j && ni(
        t,
        T,
        x,
        f,
        1
      );
      _i(t, E);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, r) {
    const {
      shapeFlag: i,
      children: a,
      anchor: l,
      targetStart: f,
      targetAnchor: c,
      target: d,
      props: h
    } = e;
    if (d && (o(f), o(c)), r && o(l), i & 16) {
      const p = r || !ks(h);
      for (let m = 0; m < a.length; m++) {
        const g = a[m];
        s(
          g,
          t,
          n,
          p,
          !!g.dynamicChildren
        );
      }
    }
  },
  move: ni,
  hydrate: kE
};
function ni(e, t, n, { o: { insert: s }, m: o }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: f, props: c } = e, d = r === 2;
  if (d && s(i, t, n), (!d || ks(c)) && l & 16)
    for (let h = 0; h < f.length; h++)
      o(
        f[h],
        t,
        n,
        2
      );
  d && s(a, t, n);
}
function kE(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: a, querySelector: l, insert: f, createText: c }
}, d) {
  const h = t.target = Sl(
    t.props,
    l
  );
  if (h) {
    const p = ks(t.props), m = h._lpa || h.firstChild;
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
        ), t.targetStart = m, t.targetAnchor = m && i(m);
      else {
        t.anchor = i(e);
        let g = m;
        for (; g; ) {
          if (g && g.nodeType === 8) {
            if (g.data === "teleport start anchor")
              t.targetStart = g;
            else if (g.data === "teleport anchor") {
              t.targetAnchor = g, h._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          g = i(g);
        }
        t.targetAnchor || Ph(h, t, c, f), d(
          m && i(m),
          t,
          h,
          n,
          s,
          o,
          r
        );
      }
    _i(t, p);
  }
  return t.anchor && i(t.anchor);
}
const Vo = Ih;
function _i(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Ph(e, t, n, s) {
  const o = t.targetStart = n(""), r = t.targetAnchor = n("");
  return o[kh] = r, e && (s(o, e), s(r, e)), r;
}
const Qn = Symbol("_leaveCb"), si = Symbol("_enterCb");
function RE() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return cn(() => {
    e.isMounted = !0;
  }), Wh(() => {
    e.isUnmounting = !0;
  }), e;
}
const jt = [Function, Array], Vh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: jt,
  onEnter: jt,
  onAfterEnter: jt,
  onEnterCancelled: jt,
  // leave
  onBeforeLeave: jt,
  onLeave: jt,
  onAfterLeave: jt,
  onLeaveCancelled: jt,
  // appear
  onBeforeAppear: jt,
  onAppear: jt,
  onAfterAppear: jt,
  onAppearCancelled: jt
}, Lh = (e) => {
  const t = e.subTree;
  return t.component ? Lh(t.component) : t;
}, IE = {
  name: "BaseTransition",
  props: Vh,
  setup(e, { slots: t }) {
    const n = kn(), s = RE();
    return () => {
      const o = t.default && Bh(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = Mh(o), i = Ee(e), { mode: a } = i;
      if (S.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && q(`invalid <transition> mode: ${a}`), s.isLeaving)
        return Ha(r);
      const l = ku(r);
      if (!l)
        return Ha(r);
      let f = Cl(
        l,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => f = d
      );
      l.type !== et && wr(l, f);
      let c = n.subTree && ku(n.subTree);
      if (c && c.type !== et && !As(l, c) && Lh(n).type !== et) {
        let d = Cl(
          c,
          i,
          s,
          n
        );
        if (wr(c, d), a === "out-in" && l.type !== et)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, Ha(r);
        a === "in-out" && l.type !== et ? d.delayLeave = (h, p, m) => {
          const g = Fh(
            s,
            c
          );
          g[String(c.key)] = c, h[Qn] = () => {
            p(), h[Qn] = void 0, delete f.delayedLeave, c = void 0;
          }, f.delayedLeave = () => {
            m(), delete f.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return r;
    };
  }
};
function Mh(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== et) {
        if (S.NODE_ENV !== "production" && n) {
          q(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, S.NODE_ENV === "production") break;
      }
  }
  return t;
}
const PE = IE;
function Fh(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Cl(e, t, n, s, o) {
  const {
    appear: r,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: f,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: h,
    onLeave: p,
    onAfterLeave: m,
    onLeaveCancelled: g,
    onBeforeAppear: v,
    onAppear: E,
    onAfterAppear: b,
    onAppearCancelled: y
  } = t, A = String(e.key), O = Fh(n, e), T = (L, F) => {
    L && ln(
      L,
      s,
      9,
      F
    );
  }, x = (L, F) => {
    const B = F[1];
    T(L, F), ce(L) ? L.every((C) => C.length <= 1) && B() : L.length <= 1 && B();
  }, j = {
    mode: i,
    persisted: a,
    beforeEnter(L) {
      let F = l;
      if (!n.isMounted)
        if (r)
          F = v || l;
        else
          return;
      L[Qn] && L[Qn](
        !0
        /* cancelled */
      );
      const B = O[A];
      B && As(e, B) && B.el[Qn] && B.el[Qn](), T(F, [L]);
    },
    enter(L) {
      let F = f, B = c, C = d;
      if (!n.isMounted)
        if (r)
          F = E || f, B = b || c, C = y || d;
        else
          return;
      let I = !1;
      const Y = L[si] = (pe) => {
        I || (I = !0, pe ? T(C, [L]) : T(B, [L]), j.delayedLeave && j.delayedLeave(), L[si] = void 0);
      };
      F ? x(F, [L, Y]) : Y();
    },
    leave(L, F) {
      const B = String(e.key);
      if (L[si] && L[si](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return F();
      T(h, [L]);
      let C = !1;
      const I = L[Qn] = (Y) => {
        C || (C = !0, F(), Y ? T(g, [L]) : T(m, [L]), L[Qn] = void 0, O[B] === e && delete O[B]);
      };
      O[B] = e, p ? x(p, [L, I]) : I();
    },
    clone(L) {
      const F = Cl(
        L,
        t,
        n,
        s,
        o
      );
      return o && o(F), F;
    }
  };
  return j;
}
function Ha(e) {
  if (jr(e))
    return e = Nn(e), e.children = null, e;
}
function ku(e) {
  if (!jr(e))
    return Rh(e.type) && e.children ? Mh(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ve(n.default))
      return n.default();
  }
}
function wr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, wr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Bh(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === Oe ? (i.patchFlag & 128 && o++, s = s.concat(
      Bh(i.children, t, a)
    )) : (t || i.type !== et) && s.push(a != null ? Nn(i, { key: a }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ke(e, t) {
  return ve(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Xe({ name: e.name }, t, { setup: e })
  ) : e;
}
function jh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Uh = /* @__PURE__ */ new WeakSet();
function VE(e) {
  const t = kn(), n = mh(null);
  if (t) {
    const o = t.refs === Pe ? t.refs = {} : t.refs;
    let r;
    S.NODE_ENV !== "production" && (r = Object.getOwnPropertyDescriptor(o, e)) && !r.configurable ? q(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else S.NODE_ENV !== "production" && q(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = S.NODE_ENV !== "production" ? Oc(n) : n;
  return S.NODE_ENV !== "production" && Uh.add(s), s;
}
function lr(e, t, n, s, o = !1) {
  if (ce(e)) {
    e.forEach(
      (m, g) => lr(
        m,
        t && (ce(t) ? t[g] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (go(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && lr(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? pa(s.component) : s.el, i = o ? null : r, { i: a, r: l } = e;
  if (S.NODE_ENV !== "production" && !a) {
    q(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, c = a.refs === Pe ? a.refs = {} : a.refs, d = a.setupState, h = Ee(d), p = d === Pe ? () => !1 : (m) => S.NODE_ENV !== "production" && (Ve(h, m) && !$e(h[m]) && q(
    `Template ref "${m}" used on a non-ref value. It will not work in the production build.`
  ), Uh.has(h[m])) ? !1 : Ve(h, m);
  if (f != null && f !== l && (ze(f) ? (c[f] = null, p(f) && (d[f] = null)) : $e(f) && (f.value = null)), ve(l))
    Po(l, a, 12, [i, c]);
  else {
    const m = ze(l), g = $e(l);
    if (m || g) {
      const v = () => {
        if (e.f) {
          const E = m ? p(l) ? d[l] : c[l] : l.value;
          o ? ce(E) && gc(E, r) : ce(E) ? E.includes(r) || E.push(r) : m ? (c[l] = [r], p(l) && (d[l] = c[l])) : (l.value = [r], e.k && (c[e.k] = l.value));
        } else m ? (c[l] = i, p(l) && (d[l] = i)) : g ? (l.value = i, e.k && (c[e.k] = i)) : S.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (v.id = -1, Et(v, n)) : v();
    } else S.NODE_ENV !== "production" && q("Invalid template ref type:", l, `(${typeof l})`);
  }
}
Mr().requestIdleCallback;
Mr().cancelIdleCallback;
const go = (e) => !!e.type.__asyncLoader, jr = (e) => e.type.__isKeepAlive;
function LE(e, t) {
  Hh(e, "a", t);
}
function ME(e, t) {
  Hh(e, "da", t);
}
function Hh(e, t, n = st) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (la(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      jr(o.parent.vnode) && FE(s, t, n, o), o = o.parent;
  }
}
function FE(e, t, n, s) {
  const o = la(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  ca(() => {
    gc(s[t], o);
  }, n);
}
function la(e, t, n = st, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      on();
      const a = Hr(n), l = ln(t, n, e, i);
      return a(), rn(), l;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (S.NODE_ENV !== "production") {
    const o = Es(Sc[e].replace(/ hook$/, ""));
    q(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Kn = (e) => (t, n = st) => {
  (!Or || e === "sp") && la(e, (...s) => t(...s), n);
}, BE = Kn("bm"), cn = Kn("m"), jE = Kn(
  "bu"
), UE = Kn("u"), Wh = Kn(
  "bum"
), ca = Kn("um"), HE = Kn(
  "sp"
), WE = Kn("rtg"), $E = Kn("rtc");
function KE(e, t = st) {
  la("ec", e, t);
}
const Tl = "components", zE = "directives";
function gt(e, t) {
  return $h(Tl, e, !0, t) || e;
}
const qE = Symbol.for("v-ndc");
function XE(e) {
  return $h(zE, e);
}
function $h(e, t, n = !0, s = !1) {
  const o = Ge || st;
  if (o) {
    const r = o.type;
    if (e === Tl) {
      const a = Ic(
        r,
        !1
      );
      if (a && (a === t || a === mt(t) || a === Ls(mt(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ru(o[e] || r[e], t) || // global registration
      Ru(o.appContext[e], t)
    );
    if (!i && s)
      return r;
    if (S.NODE_ENV !== "production" && n && !i) {
      const a = e === Tl ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      q(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else S.NODE_ENV !== "production" && q(
    `resolve${Ls(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Ru(e, t) {
  return e && (e[t] || e[mt(t)] || e[Ls(mt(t))]);
}
function Qe(e, t, n, s) {
  let o;
  const r = n, i = ce(e);
  if (i || ze(e)) {
    const a = i && nn(e);
    let l = !1, f = !1;
    a && (l = !At(e), f = Tn(e), e = oa(e)), o = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++)
      o[c] = t(
        l ? f ? Li(dt(e[c])) : dt(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    S.NODE_ENV !== "production" && !Number.isInteger(e) && q(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, r);
  } else if (Me(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (a, l) => t(a, l, void 0, r)
      );
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let l = 0, f = a.length; l < f; l++) {
        const c = a[l];
        o[l] = t(e[c], c, l, r);
      }
    }
  else
    o = [];
  return o;
}
function Ne(e, t, n = {}, s, o) {
  if (Ge.ce || Ge.parent && go(Ge.parent) && Ge.parent.ce)
    return t !== "default" && (n.name = t), N(), ot(
      Oe,
      null,
      [ge("slot", n, s && s())],
      64
    );
  let r = e[t];
  S.NODE_ENV !== "production" && r && r.length > 1 && (q(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), N();
  const i = r && Kh(r(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = ot(
    Oe,
    {
      key: (a && !sn(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function Kh(e) {
  return e.some((t) => js(t) ? !(t.type === et || t.type === Oe && !Kh(t.children)) : !0) ? e : null;
}
const Nl = (e) => e ? hm(e) ? pa(e) : Nl(e.parent) : null, Rs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Xe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => S.NODE_ENV !== "production" ? bn(e.props) : e.props,
    $attrs: (e) => S.NODE_ENV !== "production" ? bn(e.attrs) : e.attrs,
    $slots: (e) => S.NODE_ENV !== "production" ? bn(e.slots) : e.slots,
    $refs: (e) => S.NODE_ENV !== "production" ? bn(e.refs) : e.refs,
    $parent: (e) => Nl(e.parent),
    $root: (e) => Nl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Xh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      aa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Eo.bind(e.proxy)),
    $watch: (e) => Ny.bind(e)
  })
), Nc = (e) => e === "_" || e === "$", Wa = (e, t) => e !== Pe && !e.__isScriptSetup && Ve(e, t), zh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: a, appContext: l } = e;
    if (S.NODE_ENV !== "production" && t === "__isVue")
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
        if (Wa(s, t))
          return i[t] = 1, s[t];
        if (o !== Pe && Ve(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && Ve(f, t)
        )
          return i[t] = 3, r[t];
        if (n !== Pe && Ve(n, t))
          return i[t] = 4, n[t];
        Dl && (i[t] = 0);
      }
    }
    const c = Rs[t];
    let d, h;
    if (c)
      return t === "$attrs" ? (rt(e.attrs, "get", ""), S.NODE_ENV !== "production" && Wi()) : S.NODE_ENV !== "production" && t === "$slots" && rt(e, "get", t), c(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Pe && Ve(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, Ve(h, t)
    )
      return h[t];
    S.NODE_ENV !== "production" && Ge && (!ze(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Pe && Nc(t[0]) && Ve(o, t) ? q(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ge && q(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Wa(o, t) ? (o[t] = n, !0) : S.NODE_ENV !== "production" && o.__isScriptSetup && Ve(o, t) ? (q(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== Pe && Ve(s, t) ? (s[t] = n, !0) : Ve(e.props, t) ? (S.NODE_ENV !== "production" && q(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (S.NODE_ENV !== "production" && q(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (S.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let a;
    return !!n[i] || e !== Pe && Ve(e, i) || Wa(t, i) || (a = r[0]) && Ve(a, i) || Ve(s, i) || Ve(Rs, i) || Ve(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
S.NODE_ENV !== "production" && (zh.ownKeys = (e) => (q(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function YE(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Rs).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Rs[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: it
    });
  }), t;
}
function GE(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: it
    });
  });
}
function QE(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Ee(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Nc(s[0])) {
        q(
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
        set: it
      });
    }
  });
}
function Iu(e) {
  return ce(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function JE() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? q(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Dl = !0;
function ZE(e) {
  const t = Xh(e), n = e.proxy, s = e.ctx;
  Dl = !1, t.beforeCreate && Pu(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: a,
    provide: l,
    inject: f,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: h,
    beforeUpdate: p,
    updated: m,
    activated: g,
    deactivated: v,
    beforeDestroy: E,
    beforeUnmount: b,
    destroyed: y,
    unmounted: A,
    render: O,
    renderTracked: T,
    renderTriggered: x,
    errorCaptured: j,
    serverPrefetch: L,
    // public API
    expose: F,
    inheritAttrs: B,
    // assets
    components: C,
    directives: I,
    filters: Y
  } = t, pe = S.NODE_ENV !== "production" ? JE() : null;
  if (S.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const H in R)
        pe("Props", H);
  }
  if (f && ey(f, s, pe), i)
    for (const R in i) {
      const H = i[R];
      ve(H) ? (S.NODE_ENV !== "production" ? Object.defineProperty(s, R, {
        value: H.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[R] = H.bind(n), S.NODE_ENV !== "production" && pe("Methods", R)) : S.NODE_ENV !== "production" && q(
        `Method "${R}" has type "${typeof H}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    S.NODE_ENV !== "production" && !ve(o) && q(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const R = o.call(n, n);
    if (S.NODE_ENV !== "production" && vc(R) && q(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Me(R))
      S.NODE_ENV !== "production" && q("data() should return an object.");
    else if (e.data = Fs(R), S.NODE_ENV !== "production")
      for (const H in R)
        pe("Data", H), Nc(H[0]) || Object.defineProperty(s, H, {
          configurable: !0,
          enumerable: !0,
          get: () => R[H],
          set: it
        });
  }
  if (Dl = !0, r)
    for (const R in r) {
      const H = r[R], te = ve(H) ? H.bind(n, n) : ve(H.get) ? H.get.bind(n, n) : it;
      S.NODE_ENV !== "production" && te === it && q(`Computed property "${R}" has no getter.`);
      const we = !ve(H) && ve(H.set) ? H.set.bind(n) : S.NODE_ENV !== "production" ? () => {
        q(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      } : it, Le = re({
        get: te,
        set: we
      });
      Object.defineProperty(s, R, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (be) => Le.value = be
      }), S.NODE_ENV !== "production" && pe("Computed", R);
    }
  if (a)
    for (const R in a)
      qh(a[R], s, n, R);
  if (l) {
    const R = ve(l) ? l.call(n) : l;
    Reflect.ownKeys(R).forEach((H) => {
      vo(H, R[H]);
    });
  }
  c && Pu(c, e, "c");
  function D(R, H) {
    ce(H) ? H.forEach((te) => R(te.bind(n))) : H && R(H.bind(n));
  }
  if (D(BE, d), D(cn, h), D(jE, p), D(UE, m), D(LE, g), D(ME, v), D(KE, j), D($E, T), D(WE, x), D(Wh, b), D(ca, A), D(HE, L), ce(F))
    if (F.length) {
      const R = e.exposed || (e.exposed = {});
      F.forEach((H) => {
        Object.defineProperty(R, H, {
          get: () => n[H],
          set: (te) => n[H] = te
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === it && (e.render = O), B != null && (e.inheritAttrs = B), C && (e.components = C), I && (e.directives = I), L && jh(e);
}
function ey(e, t, n = it) {
  ce(e) && (e = xl(e));
  for (const s in e) {
    const o = e[s];
    let r;
    Me(o) ? "default" in o ? r = Ot(
      o.from || s,
      o.default,
      !0
    ) : r = Ot(o.from || s) : r = Ot(o), $e(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, S.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Pu(e, t, n) {
  ln(
    ce(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function qh(e, t, n, s) {
  let o = s.includes(".") ? rm(n, s) : () => n[s];
  if (ze(e)) {
    const r = t[e];
    ve(r) ? Wt(o, r) : S.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${e}"`, r);
  } else if (ve(e))
    Wt(o, e.bind(n));
  else if (Me(e))
    if (ce(e))
      e.forEach((r) => qh(r, t, n, s));
    else {
      const r = ve(e.handler) ? e.handler.bind(n) : t[e.handler];
      ve(r) ? Wt(o, r, e) : S.NODE_ENV !== "production" && q(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else S.NODE_ENV !== "production" && q(`Invalid watch option: "${s}"`, e);
}
function Xh(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = r.get(t);
  let l;
  return a ? l = a : !o.length && !n && !s ? l = t : (l = {}, o.length && o.forEach(
    (f) => Ui(l, f, i, !0)
  ), Ui(l, t, i)), Me(t) && r.set(t, l), l;
}
function Ui(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Ui(e, r, n, !0), o && o.forEach(
    (i) => Ui(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      S.NODE_ENV !== "production" && q(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = ty[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const ty = {
  data: Vu,
  props: Lu,
  emits: Lu,
  // objects
  methods: nr,
  computed: nr,
  // lifecycle
  beforeCreate: _t,
  created: _t,
  beforeMount: _t,
  mounted: _t,
  beforeUpdate: _t,
  updated: _t,
  beforeDestroy: _t,
  beforeUnmount: _t,
  destroyed: _t,
  unmounted: _t,
  activated: _t,
  deactivated: _t,
  errorCaptured: _t,
  serverPrefetch: _t,
  // assets
  components: nr,
  directives: nr,
  // watch
  watch: sy,
  // provide / inject
  provide: Vu,
  inject: ny
};
function Vu(e, t) {
  return t ? e ? function() {
    return Xe(
      ve(e) ? e.call(this, this) : e,
      ve(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ny(e, t) {
  return nr(xl(e), xl(t));
}
function xl(e) {
  if (ce(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function _t(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function nr(e, t) {
  return e ? Xe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Lu(e, t) {
  return e ? ce(e) && ce(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Xe(
    /* @__PURE__ */ Object.create(null),
    Iu(e),
    Iu(t ?? {})
  ) : t;
}
function sy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Xe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = _t(e[s], t[s]);
  return n;
}
function Yh() {
  return {
    app: null,
    config: {
      isNativeTag: g_,
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
let oy = 0;
function ry(e, t) {
  return function(s, o = null) {
    ve(s) || (s = Xe({}, s)), o != null && !Me(o) && (S.NODE_ENV !== "production" && q("root props passed to app.mount() must be an object."), o = null);
    const r = Yh(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const f = r.app = {
      _uid: oy++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Xu,
      get config() {
        return r.config;
      },
      set config(c) {
        S.NODE_ENV !== "production" && q(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...d) {
        return i.has(c) ? S.NODE_ENV !== "production" && q("Plugin has already been applied to target app.") : c && ve(c.install) ? (i.add(c), c.install(f, ...d)) : ve(c) ? (i.add(c), c(f, ...d)) : S.NODE_ENV !== "production" && q(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(c) {
        return r.mixins.includes(c) ? S.NODE_ENV !== "production" && q(
          "Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")
        ) : r.mixins.push(c), f;
      },
      component(c, d) {
        return S.NODE_ENV !== "production" && Ll(c, r.config), d ? (S.NODE_ENV !== "production" && r.components[c] && q(`Component "${c}" has already been registered in target app.`), r.components[c] = d, f) : r.components[c];
      },
      directive(c, d) {
        return S.NODE_ENV !== "production" && xh(c), d ? (S.NODE_ENV !== "production" && r.directives[c] && q(`Directive "${c}" has already been registered in target app.`), r.directives[c] = d, f) : r.directives[c];
      },
      mount(c, d, h) {
        if (l)
          S.NODE_ENV !== "production" && q(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          S.NODE_ENV !== "production" && c.__vue_app__ && q(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = f._ceVNode || ge(s, o);
          return p.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), S.NODE_ENV !== "production" && (r.reload = () => {
            const m = Nn(p);
            m.el = null, e(m, c, h);
          }), e(p, c, h), l = !0, f._container = c, c.__vue_app__ = f, S.NODE_ENV !== "production" && (f._instance = p.component, AE(f, Xu)), pa(p.component);
        }
      },
      onUnmount(c) {
        S.NODE_ENV !== "production" && typeof c != "function" && q(
          `Expected function as first argument to app.onUnmount(), but got ${typeof c}`
        ), a.push(c);
      },
      unmount() {
        l ? (ln(
          a,
          f._instance,
          16
        ), e(null, f._container), S.NODE_ENV !== "production" && (f._instance = null, OE(f)), delete f._container.__vue_app__) : S.NODE_ENV !== "production" && q("Cannot unmount an app that is not mounted.");
      },
      provide(c, d) {
        return S.NODE_ENV !== "production" && c in r.provides && (Ve(r.provides, c) ? q(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ) : q(
          `App already provides property with key "${String(c)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[c] = d, f;
      },
      runWithContext(c) {
        const d = Is;
        Is = f;
        try {
          return c();
        } finally {
          Is = d;
        }
      }
    };
    return f;
  };
}
let Is = null;
function vo(e, t) {
  if (!st)
    S.NODE_ENV !== "production" && q("provide() can only be used inside setup().");
  else {
    let n = st.provides;
    const s = st.parent && st.parent.provides;
    s === n && (n = st.provides = Object.create(s)), n[e] = t;
  }
}
function Ot(e, t, n = !1) {
  const s = st || Ge;
  if (s || Is) {
    let o = Is ? Is._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ve(t) ? t.call(s && s.proxy) : t;
    S.NODE_ENV !== "production" && q(`injection "${String(e)}" not found.`);
  } else S.NODE_ENV !== "production" && q("inject() can only be used inside setup() or functional components.");
}
function iy() {
  return !!(st || Ge || Is);
}
const Gh = {}, Qh = () => Object.create(Gh), Jh = (e) => Object.getPrototypeOf(e) === Gh;
function ay(e, t, n, s = !1) {
  const o = {}, r = Qh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Zh(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  S.NODE_ENV !== "production" && tm(t || {}, o, e), n ? e.props = s ? o : hh(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function ly(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function cy(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, a = Ee(o), [l] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(S.NODE_ENV !== "production" && ly(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let h = c[d];
        if (fa(e.emitsOptions, h))
          continue;
        const p = t[h];
        if (l)
          if (Ve(r, h))
            p !== r[h] && (r[h] = p, f = !0);
          else {
            const m = mt(h);
            o[m] = kl(
              l,
              a,
              m,
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
    Zh(e, t, o, r) && (f = !0);
    let c;
    for (const d in a)
      (!t || // for camelCase
      !Ve(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Cn(d)) === d || !Ve(t, c))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[d] = kl(
        l,
        a,
        d,
        void 0,
        e,
        !0
      )) : delete o[d]);
    if (r !== a)
      for (const d in r)
        (!t || !Ve(t, d)) && (delete r[d], f = !0);
  }
  f && En(e.attrs, "set", ""), S.NODE_ENV !== "production" && tm(t || {}, o, e);
}
function Zh(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (rr(l))
        continue;
      const f = t[l];
      let c;
      o && Ve(o, c = mt(l)) ? !r || !r.includes(c) ? n[c] = f : (a || (a = {}))[c] = f : fa(e.emitsOptions, l) || (!(l in s) || f !== s[l]) && (s[l] = f, i = !0);
    }
  if (r) {
    const l = Ee(n), f = a || Pe;
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      n[d] = kl(
        o,
        l,
        d,
        f[d],
        e,
        !Ve(f, d)
      );
    }
  }
  return i;
}
function kl(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const a = Ve(i, "default");
    if (a && s === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ve(l)) {
        const { propsDefaults: f } = o;
        if (n in f)
          s = f[n];
        else {
          const c = Hr(o);
          s = f[n] = l.call(
            null,
            t
          ), c();
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
    ] && (s === "" || s === Cn(n)) && (s = !0));
  }
  return s;
}
const uy = /* @__PURE__ */ new WeakMap();
function em(e, t, n = !1) {
  const s = n ? uy : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, a = [];
  let l = !1;
  if (!ve(e)) {
    const c = (d) => {
      l = !0;
      const [h, p] = em(d, t, !0);
      Xe(i, h), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !l)
    return Me(e) && s.set(e, ho), ho;
  if (ce(r))
    for (let c = 0; c < r.length; c++) {
      S.NODE_ENV !== "production" && !ze(r[c]) && q("props must be strings when using array syntax.", r[c]);
      const d = mt(r[c]);
      Mu(d) && (i[d] = Pe);
    }
  else if (r) {
    S.NODE_ENV !== "production" && !Me(r) && q("invalid props options", r);
    for (const c in r) {
      const d = mt(c);
      if (Mu(d)) {
        const h = r[c], p = i[d] = ce(h) || ve(h) ? { type: h } : Xe({}, h), m = p.type;
        let g = !1, v = !0;
        if (ce(m))
          for (let E = 0; E < m.length; ++E) {
            const b = m[E], y = ve(b) && b.name;
            if (y === "Boolean") {
              g = !0;
              break;
            } else y === "String" && (v = !1);
          }
        else
          g = ve(m) && m.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = g, p[
          1
          /* shouldCastTrue */
        ] = v, (g || Ve(p, "default")) && a.push(d);
      }
    }
  }
  const f = [i, a];
  return Me(e) && s.set(e, f), f;
}
function Mu(e) {
  return e[0] !== "$" && !rr(e) ? !0 : (S.NODE_ENV !== "production" && q(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function dy(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function tm(e, t, n) {
  const s = Ee(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => mt(i));
  for (const i in o) {
    let a = o[i];
    a != null && fy(
      i,
      s[i],
      a,
      S.NODE_ENV !== "production" ? bn(s) : s,
      !r.includes(i)
    );
  }
}
function fy(e, t, n, s, o) {
  const { type: r, required: i, validator: a, skipCheck: l } = n;
  if (i && o) {
    q('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !l) {
      let f = !1;
      const c = ce(r) ? r : [r], d = [];
      for (let h = 0; h < c.length && !f; h++) {
        const { valid: p, expectedType: m } = hy(t, c[h]);
        d.push(m || ""), f = p;
      }
      if (!f) {
        q(my(e, t, d));
        return;
      }
    }
    a && !a(t, s) && q('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const py = /* @__PURE__ */ $n(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function hy(e, t) {
  let n;
  const s = dy(t);
  if (s === "null")
    n = e === null;
  else if (py(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = Me(e) : s === "Array" ? n = ce(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function my(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Ls).join(" | ")}`;
  const o = n[0], r = _c(t), i = Fu(t, o), a = Fu(t, r);
  return n.length === 1 && Bu(o) && !gy(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, Bu(r) && (s += `with value ${a}.`), s;
}
function Fu(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Bu(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function gy(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Dc = (e) => e[0] === "_" || e === "$stable", xc = (e) => ce(e) ? e.map(Jt) : [Jt(e)], vy = (e, t, n) => {
  if (t._n)
    return t;
  const s = xe((...o) => (S.NODE_ENV !== "production" && st && !(n === null && Ge) && !(n && n.root !== st.root) && q(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), xc(t(...o))), n);
  return s._c = !1, s;
}, nm = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Dc(o)) continue;
    const r = e[o];
    if (ve(r))
      t[o] = vy(o, r, s);
    else if (r != null) {
      S.NODE_ENV !== "production" && q(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = xc(r);
      t[o] = () => i;
    }
  }
}, sm = (e, t) => {
  S.NODE_ENV !== "production" && !jr(e.vnode) && q(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = xc(t);
  e.slots.default = () => n;
}, Rl = (e, t, n) => {
  for (const s in t)
    (n || !Dc(s)) && (e[s] = t[s]);
}, _y = (e, t, n) => {
  const s = e.slots = Qh();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && vr(s, "__", o, !0);
    const r = t._;
    r ? (Rl(s, t, n), n && vr(s, "_", r, !0)) : nm(t, s);
  } else t && sm(e, t);
}, Ey = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = Pe;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? S.NODE_ENV !== "production" && Zt ? (Rl(o, t, n), En(e, "set", "$slots")) : n && a === 1 ? r = !1 : Rl(o, t, n) : (r = !t.$stable, nm(t, o)), i = t;
  } else t && (sm(e, t), i = { default: 1 });
  if (r)
    for (const a in o)
      !Dc(a) && i[a] == null && delete o[a];
};
let qo, es;
function Js(e, t) {
  e.appContext.config.performance && Hi() && es.mark(`vue-${t}-${e.uid}`), S.NODE_ENV !== "production" && NE(e, t, Hi() ? es.now() : Date.now());
}
function Zs(e, t) {
  if (e.appContext.config.performance && Hi()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    es.mark(s), es.measure(
      `<${ha(e, e.type)}> ${t}`,
      n,
      s
    ), es.clearMarks(n), es.clearMarks(s);
  }
  S.NODE_ENV !== "production" && DE(e, t, Hi() ? es.now() : Date.now());
}
function Hi() {
  return qo !== void 0 || (typeof window < "u" && window.performance ? (qo = !0, es = window.performance) : qo = !1), qo;
}
function yy() {
  const e = [];
  if (S.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Et = Vy;
function by(e) {
  return wy(e);
}
function wy(e, t) {
  yy();
  const n = Mr();
  n.__VUE__ = !0, S.NODE_ENV !== "production" && Ch(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: a,
    createComment: l,
    setText: f,
    setElementText: c,
    parentNode: d,
    nextSibling: h,
    setScopeId: p = it,
    insertStaticContent: m
  } = e, g = (_, w, k, W = null, U = null, $ = null, se = void 0, Q = null, J = S.NODE_ENV !== "production" && Zt ? !1 : !!w.dynamicChildren) => {
    if (_ === w)
      return;
    _ && !As(_, w) && (W = ne(_), Te(_, U, $, !0), _ = null), w.patchFlag === -2 && (J = !1, w.dynamicChildren = null);
    const { type: G, ref: fe, shapeFlag: Z } = w;
    switch (G) {
      case Ur:
        v(_, w, k, W);
        break;
      case et:
        E(_, w, k, W);
        break;
      case ur:
        _ == null ? b(w, k, W, se) : S.NODE_ENV !== "production" && y(_, w, k, se);
        break;
      case Oe:
        I(
          _,
          w,
          k,
          W,
          U,
          $,
          se,
          Q,
          J
        );
        break;
      default:
        Z & 1 ? T(
          _,
          w,
          k,
          W,
          U,
          $,
          se,
          Q,
          J
        ) : Z & 6 ? Y(
          _,
          w,
          k,
          W,
          U,
          $,
          se,
          Q,
          J
        ) : Z & 64 || Z & 128 ? G.process(
          _,
          w,
          k,
          W,
          U,
          $,
          se,
          Q,
          J,
          Se
        ) : S.NODE_ENV !== "production" && q("Invalid VNode type:", G, `(${typeof G})`);
    }
    fe != null && U ? lr(fe, _ && _.ref, $, w || _, !w) : fe == null && _ && _.ref != null && lr(_.ref, null, $, _, !0);
  }, v = (_, w, k, W) => {
    if (_ == null)
      s(
        w.el = a(w.children),
        k,
        W
      );
    else {
      const U = w.el = _.el;
      w.children !== _.children && f(U, w.children);
    }
  }, E = (_, w, k, W) => {
    _ == null ? s(
      w.el = l(w.children || ""),
      k,
      W
    ) : w.el = _.el;
  }, b = (_, w, k, W) => {
    [_.el, _.anchor] = m(
      _.children,
      w,
      k,
      W,
      _.el,
      _.anchor
    );
  }, y = (_, w, k, W) => {
    if (w.children !== _.children) {
      const U = h(_.anchor);
      O(_), [w.el, w.anchor] = m(
        w.children,
        k,
        U,
        W
      );
    } else
      w.el = _.el, w.anchor = _.anchor;
  }, A = ({ el: _, anchor: w }, k, W) => {
    let U;
    for (; _ && _ !== w; )
      U = h(_), s(_, k, W), _ = U;
    s(w, k, W);
  }, O = ({ el: _, anchor: w }) => {
    let k;
    for (; _ && _ !== w; )
      k = h(_), o(_), _ = k;
    o(w);
  }, T = (_, w, k, W, U, $, se, Q, J) => {
    w.type === "svg" ? se = "svg" : w.type === "math" && (se = "mathml"), _ == null ? x(
      w,
      k,
      W,
      U,
      $,
      se,
      Q,
      J
    ) : F(
      _,
      w,
      U,
      $,
      se,
      Q,
      J
    );
  }, x = (_, w, k, W, U, $, se, Q) => {
    let J, G;
    const { props: fe, shapeFlag: Z, transition: de, dirs: _e } = _;
    if (J = _.el = i(
      _.type,
      $,
      fe && fe.is,
      fe
    ), Z & 8 ? c(J, _.children) : Z & 16 && L(
      _.children,
      J,
      null,
      W,
      U,
      $a(_, $),
      se,
      Q
    ), _e && ms(_, null, W, "created"), j(J, _, _.scopeId, se, W), fe) {
      for (const je in fe)
        je !== "value" && !rr(je) && r(J, je, null, fe[je], $, W);
      "value" in fe && r(J, "value", null, fe.value, $), (G = fe.onVnodeBeforeMount) && mn(G, W, _);
    }
    S.NODE_ENV !== "production" && (vr(J, "__vnode", _, !0), vr(J, "__vueParentComponent", W, !0)), _e && ms(_, null, W, "beforeMount");
    const De = Ay(U, de);
    De && de.beforeEnter(J), s(J, w, k), ((G = fe && fe.onVnodeMounted) || De || _e) && Et(() => {
      G && mn(G, W, _), De && de.enter(J), _e && ms(_, null, W, "mounted");
    }, U);
  }, j = (_, w, k, W, U) => {
    if (k && p(_, k), W)
      for (let $ = 0; $ < W.length; $++)
        p(_, W[$]);
    if (U) {
      let $ = U.subTree;
      if (S.NODE_ENV !== "production" && $.patchFlag > 0 && $.patchFlag & 2048 && ($ = kc($.children) || $), w === $ || cm($.type) && ($.ssContent === w || $.ssFallback === w)) {
        const se = U.vnode;
        j(
          _,
          se,
          se.scopeId,
          se.slotScopeIds,
          U.parent
        );
      }
    }
  }, L = (_, w, k, W, U, $, se, Q, J = 0) => {
    for (let G = J; G < _.length; G++) {
      const fe = _[G] = Q ? Jn(_[G]) : Jt(_[G]);
      g(
        null,
        fe,
        w,
        k,
        W,
        U,
        $,
        se,
        Q
      );
    }
  }, F = (_, w, k, W, U, $, se) => {
    const Q = w.el = _.el;
    S.NODE_ENV !== "production" && (Q.__vnode = w);
    let { patchFlag: J, dynamicChildren: G, dirs: fe } = w;
    J |= _.patchFlag & 16;
    const Z = _.props || Pe, de = w.props || Pe;
    let _e;
    if (k && gs(k, !1), (_e = de.onVnodeBeforeUpdate) && mn(_e, k, w, _), fe && ms(w, _, k, "beforeUpdate"), k && gs(k, !0), S.NODE_ENV !== "production" && Zt && (J = 0, se = !1, G = null), (Z.innerHTML && de.innerHTML == null || Z.textContent && de.textContent == null) && c(Q, ""), G ? (B(
      _.dynamicChildren,
      G,
      Q,
      k,
      W,
      $a(w, U),
      $
    ), S.NODE_ENV !== "production" && cr(_, w)) : se || te(
      _,
      w,
      Q,
      null,
      k,
      W,
      $a(w, U),
      $,
      !1
    ), J > 0) {
      if (J & 16)
        C(Q, Z, de, k, U);
      else if (J & 2 && Z.class !== de.class && r(Q, "class", null, de.class, U), J & 4 && r(Q, "style", Z.style, de.style, U), J & 8) {
        const De = w.dynamicProps;
        for (let je = 0; je < De.length; je++) {
          const He = De[je], Nt = Z[He], Dt = de[He];
          (Dt !== Nt || He === "value") && r(Q, He, Nt, Dt, U, k);
        }
      }
      J & 1 && _.children !== w.children && c(Q, w.children);
    } else !se && G == null && C(Q, Z, de, k, U);
    ((_e = de.onVnodeUpdated) || fe) && Et(() => {
      _e && mn(_e, k, w, _), fe && ms(w, _, k, "updated");
    }, W);
  }, B = (_, w, k, W, U, $, se) => {
    for (let Q = 0; Q < w.length; Q++) {
      const J = _[Q], G = w[Q], fe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        J.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (J.type === Oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !As(J, G) || // - In the case of a component, it could contain anything.
        J.shapeFlag & 198) ? d(J.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      g(
        J,
        G,
        fe,
        null,
        W,
        U,
        $,
        se,
        !0
      );
    }
  }, C = (_, w, k, W, U) => {
    if (w !== k) {
      if (w !== Pe)
        for (const $ in w)
          !rr($) && !($ in k) && r(
            _,
            $,
            w[$],
            null,
            U,
            W
          );
      for (const $ in k) {
        if (rr($)) continue;
        const se = k[$], Q = w[$];
        se !== Q && $ !== "value" && r(_, $, Q, se, U, W);
      }
      "value" in k && r(_, "value", w.value, k.value, U);
    }
  }, I = (_, w, k, W, U, $, se, Q, J) => {
    const G = w.el = _ ? _.el : a(""), fe = w.anchor = _ ? _.anchor : a("");
    let { patchFlag: Z, dynamicChildren: de, slotScopeIds: _e } = w;
    S.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Zt || Z & 2048) && (Z = 0, J = !1, de = null), _e && (Q = Q ? Q.concat(_e) : _e), _ == null ? (s(G, k, W), s(fe, k, W), L(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      k,
      fe,
      U,
      $,
      se,
      Q,
      J
    )) : Z > 0 && Z & 64 && de && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren ? (B(
      _.dynamicChildren,
      de,
      k,
      U,
      $,
      se,
      Q
    ), S.NODE_ENV !== "production" ? cr(_, w) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (w.key != null || U && w === U.subTree) && cr(
        _,
        w,
        !0
        /* shallow */
      )
    )) : te(
      _,
      w,
      k,
      fe,
      U,
      $,
      se,
      Q,
      J
    );
  }, Y = (_, w, k, W, U, $, se, Q, J) => {
    w.slotScopeIds = Q, _ == null ? w.shapeFlag & 512 ? U.ctx.activate(
      w,
      k,
      W,
      se,
      J
    ) : pe(
      w,
      k,
      W,
      U,
      $,
      se,
      J
    ) : D(_, w, J);
  }, pe = (_, w, k, W, U, $, se) => {
    const Q = _.component = jy(
      _,
      W,
      U
    );
    if (S.NODE_ENV !== "production" && Q.type.__hmrId && EE(Q), S.NODE_ENV !== "production" && (mi(_), Js(Q, "mount")), jr(_) && (Q.ctx.renderer = Se), S.NODE_ENV !== "production" && Js(Q, "init"), Hy(Q, !1, se), S.NODE_ENV !== "production" && Zs(Q, "init"), S.NODE_ENV !== "production" && Zt && (_.el = null), Q.asyncDep) {
      if (U && U.registerDep(Q, R, se), !_.el) {
        const J = Q.subTree = ge(et);
        E(null, J, w, k);
      }
    } else
      R(
        Q,
        _,
        w,
        k,
        U,
        $,
        se
      );
    S.NODE_ENV !== "production" && (gi(), Zs(Q, "mount"));
  }, D = (_, w, k) => {
    const W = w.component = _.component;
    if (Iy(_, w, k))
      if (W.asyncDep && !W.asyncResolved) {
        S.NODE_ENV !== "production" && mi(w), H(W, w, k), S.NODE_ENV !== "production" && gi();
        return;
      } else
        W.next = w, W.update();
    else
      w.el = _.el, W.vnode = w;
  }, R = (_, w, k, W, U, $, se) => {
    const Q = () => {
      if (_.isMounted) {
        let { next: Z, bu: de, u: _e, parent: De, vnode: je } = _;
        {
          const pn = om(_);
          if (pn) {
            Z && (Z.el = je.el, H(_, Z, se)), pn.asyncDep.then(() => {
              _.isUnmounted || Q();
            });
            return;
          }
        }
        let He = Z, Nt;
        S.NODE_ENV !== "production" && mi(Z || _.vnode), gs(_, !1), Z ? (Z.el = je.el, H(_, Z, se)) : Z = je, de && oo(de), (Nt = Z.props && Z.props.onVnodeBeforeUpdate) && mn(Nt, De, Z, je), gs(_, !0), S.NODE_ENV !== "production" && Js(_, "render");
        const Dt = Uu(_);
        S.NODE_ENV !== "production" && Zs(_, "render");
        const fn = _.subTree;
        _.subTree = Dt, S.NODE_ENV !== "production" && Js(_, "patch"), g(
          fn,
          Dt,
          // parent may have changed if it's in a teleport
          d(fn.el),
          // anchor may have changed if it's in a fragment
          ne(fn),
          _,
          U,
          $
        ), S.NODE_ENV !== "production" && Zs(_, "patch"), Z.el = Dt.el, He === null && Py(_, Dt.el), _e && Et(_e, U), (Nt = Z.props && Z.props.onVnodeUpdated) && Et(
          () => mn(Nt, De, Z, je),
          U
        ), S.NODE_ENV !== "production" && Th(_), S.NODE_ENV !== "production" && gi();
      } else {
        let Z;
        const { el: de, props: _e } = w, { bm: De, m: je, parent: He, root: Nt, type: Dt } = _, fn = go(w);
        gs(_, !1), De && oo(De), !fn && (Z = _e && _e.onVnodeBeforeMount) && mn(Z, He, w), gs(_, !0);
        {
          Nt.ce && // @ts-expect-error _def is private
          Nt.ce._def.shadowRoot !== !1 && Nt.ce._injectChildStyle(Dt), S.NODE_ENV !== "production" && Js(_, "render");
          const pn = _.subTree = Uu(_);
          S.NODE_ENV !== "production" && Zs(_, "render"), S.NODE_ENV !== "production" && Js(_, "patch"), g(
            null,
            pn,
            k,
            W,
            _,
            U,
            $
          ), S.NODE_ENV !== "production" && Zs(_, "patch"), w.el = pn.el;
        }
        if (je && Et(je, U), !fn && (Z = _e && _e.onVnodeMounted)) {
          const pn = w;
          Et(
            () => mn(Z, He, pn),
            U
          );
        }
        (w.shapeFlag & 256 || He && go(He.vnode) && He.vnode.shapeFlag & 256) && _.a && Et(_.a, U), _.isMounted = !0, S.NODE_ENV !== "production" && SE(_), w = k = W = null;
      }
    };
    _.scope.on();
    const J = _.effect = new Jp(Q);
    _.scope.off();
    const G = _.update = J.run.bind(J), fe = _.job = J.runIfDirty.bind(J);
    fe.i = _, fe.id = _.uid, J.scheduler = () => aa(fe), gs(_, !0), S.NODE_ENV !== "production" && (J.onTrack = _.rtc ? (Z) => oo(_.rtc, Z) : void 0, J.onTrigger = _.rtg ? (Z) => oo(_.rtg, Z) : void 0), G();
  }, H = (_, w, k) => {
    w.component = _;
    const W = _.vnode.props;
    _.vnode = w, _.next = null, cy(_, w.props, W, k), Ey(_, w.children, k), on(), Cu(_), rn();
  }, te = (_, w, k, W, U, $, se, Q, J = !1) => {
    const G = _ && _.children, fe = _ ? _.shapeFlag : 0, Z = w.children, { patchFlag: de, shapeFlag: _e } = w;
    if (de > 0) {
      if (de & 128) {
        Le(
          G,
          Z,
          k,
          W,
          U,
          $,
          se,
          Q,
          J
        );
        return;
      } else if (de & 256) {
        we(
          G,
          Z,
          k,
          W,
          U,
          $,
          se,
          Q,
          J
        );
        return;
      }
    }
    _e & 8 ? (fe & 16 && M(G, U, $), Z !== G && c(k, Z)) : fe & 16 ? _e & 16 ? Le(
      G,
      Z,
      k,
      W,
      U,
      $,
      se,
      Q,
      J
    ) : M(G, U, $, !0) : (fe & 8 && c(k, ""), _e & 16 && L(
      Z,
      k,
      W,
      U,
      $,
      se,
      Q,
      J
    ));
  }, we = (_, w, k, W, U, $, se, Q, J) => {
    _ = _ || ho, w = w || ho;
    const G = _.length, fe = w.length, Z = Math.min(G, fe);
    let de;
    for (de = 0; de < Z; de++) {
      const _e = w[de] = J ? Jn(w[de]) : Jt(w[de]);
      g(
        _[de],
        _e,
        k,
        null,
        U,
        $,
        se,
        Q,
        J
      );
    }
    G > fe ? M(
      _,
      U,
      $,
      !0,
      !1,
      Z
    ) : L(
      w,
      k,
      W,
      U,
      $,
      se,
      Q,
      J,
      Z
    );
  }, Le = (_, w, k, W, U, $, se, Q, J) => {
    let G = 0;
    const fe = w.length;
    let Z = _.length - 1, de = fe - 1;
    for (; G <= Z && G <= de; ) {
      const _e = _[G], De = w[G] = J ? Jn(w[G]) : Jt(w[G]);
      if (As(_e, De))
        g(
          _e,
          De,
          k,
          null,
          U,
          $,
          se,
          Q,
          J
        );
      else
        break;
      G++;
    }
    for (; G <= Z && G <= de; ) {
      const _e = _[Z], De = w[de] = J ? Jn(w[de]) : Jt(w[de]);
      if (As(_e, De))
        g(
          _e,
          De,
          k,
          null,
          U,
          $,
          se,
          Q,
          J
        );
      else
        break;
      Z--, de--;
    }
    if (G > Z) {
      if (G <= de) {
        const _e = de + 1, De = _e < fe ? w[_e].el : W;
        for (; G <= de; )
          g(
            null,
            w[G] = J ? Jn(w[G]) : Jt(w[G]),
            k,
            De,
            U,
            $,
            se,
            Q,
            J
          ), G++;
      }
    } else if (G > de)
      for (; G <= Z; )
        Te(_[G], U, $, !0), G++;
    else {
      const _e = G, De = G, je = /* @__PURE__ */ new Map();
      for (G = De; G <= de; G++) {
        const vt = w[G] = J ? Jn(w[G]) : Jt(w[G]);
        vt.key != null && (S.NODE_ENV !== "production" && je.has(vt.key) && q(
          "Duplicate keys found during update:",
          JSON.stringify(vt.key),
          "Make sure keys are unique."
        ), je.set(vt.key, G));
      }
      let He, Nt = 0;
      const Dt = de - De + 1;
      let fn = !1, pn = 0;
      const Ko = new Array(Dt);
      for (G = 0; G < Dt; G++) Ko[G] = 0;
      for (G = _e; G <= Z; G++) {
        const vt = _[G];
        if (Nt >= Dt) {
          Te(vt, U, $, !0);
          continue;
        }
        let hn;
        if (vt.key != null)
          hn = je.get(vt.key);
        else
          for (He = De; He <= de; He++)
            if (Ko[He - De] === 0 && As(vt, w[He])) {
              hn = He;
              break;
            }
        hn === void 0 ? Te(vt, U, $, !0) : (Ko[hn - De] = G + 1, hn >= pn ? pn = hn : fn = !0, g(
          vt,
          w[hn],
          k,
          null,
          U,
          $,
          se,
          Q,
          J
        ), Nt++);
      }
      const Eu = fn ? Oy(Ko) : ho;
      for (He = Eu.length - 1, G = Dt - 1; G >= 0; G--) {
        const vt = De + G, hn = w[vt], yu = vt + 1 < fe ? w[vt + 1].el : W;
        Ko[G] === 0 ? g(
          null,
          hn,
          k,
          yu,
          U,
          $,
          se,
          Q,
          J
        ) : fn && (He < 0 || G !== Eu[He] ? be(hn, k, yu, 2) : He--);
      }
    }
  }, be = (_, w, k, W, U = null) => {
    const { el: $, type: se, transition: Q, children: J, shapeFlag: G } = _;
    if (G & 6) {
      be(_.component.subTree, w, k, W);
      return;
    }
    if (G & 128) {
      _.suspense.move(w, k, W);
      return;
    }
    if (G & 64) {
      se.move(_, w, k, Se);
      return;
    }
    if (se === Oe) {
      s($, w, k);
      for (let Z = 0; Z < J.length; Z++)
        be(J[Z], w, k, W);
      s(_.anchor, w, k);
      return;
    }
    if (se === ur) {
      A(_, w, k);
      return;
    }
    if (W !== 2 && G & 1 && Q)
      if (W === 0)
        Q.beforeEnter($), s($, w, k), Et(() => Q.enter($), U);
      else {
        const { leave: Z, delayLeave: de, afterLeave: _e } = Q, De = () => {
          _.ctx.isUnmounted ? o($) : s($, w, k);
        }, je = () => {
          Z($, () => {
            De(), _e && _e();
          });
        };
        de ? de($, De, je) : je();
      }
    else
      s($, w, k);
  }, Te = (_, w, k, W = !1, U = !1) => {
    const {
      type: $,
      props: se,
      ref: Q,
      children: J,
      dynamicChildren: G,
      shapeFlag: fe,
      patchFlag: Z,
      dirs: de,
      cacheIndex: _e
    } = _;
    if (Z === -2 && (U = !1), Q != null && (on(), lr(Q, null, k, _, !0), rn()), _e != null && (w.renderCache[_e] = void 0), fe & 256) {
      w.ctx.deactivate(_);
      return;
    }
    const De = fe & 1 && de, je = !go(_);
    let He;
    if (je && (He = se && se.onVnodeBeforeUnmount) && mn(He, w, _), fe & 6)
      Tt(_.component, k, W);
    else {
      if (fe & 128) {
        _.suspense.unmount(k, W);
        return;
      }
      De && ms(_, null, w, "beforeUnmount"), fe & 64 ? _.type.remove(
        _,
        w,
        k,
        Se,
        W
      ) : G && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !G.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($ !== Oe || Z > 0 && Z & 64) ? M(
        G,
        w,
        k,
        !1,
        !0
      ) : ($ === Oe && Z & 384 || !U && fe & 16) && M(J, w, k), W && Je(_);
    }
    (je && (He = se && se.onVnodeUnmounted) || De) && Et(() => {
      He && mn(He, w, _), De && ms(_, null, w, "unmounted");
    }, k);
  }, Je = (_) => {
    const { type: w, el: k, anchor: W, transition: U } = _;
    if (w === Oe) {
      S.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && U && !U.persisted ? _.children.forEach((se) => {
        se.type === et ? o(se.el) : Je(se);
      }) : ut(k, W);
      return;
    }
    if (w === ur) {
      O(_);
      return;
    }
    const $ = () => {
      o(k), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (_.shapeFlag & 1 && U && !U.persisted) {
      const { leave: se, delayLeave: Q } = U, J = () => se(k, $);
      Q ? Q(_.el, $, J) : J();
    } else
      $();
  }, ut = (_, w) => {
    let k;
    for (; _ !== w; )
      k = h(_), o(_), _ = k;
    o(w);
  }, Tt = (_, w, k) => {
    S.NODE_ENV !== "production" && _.type.__hmrId && yE(_);
    const {
      bum: W,
      scope: U,
      job: $,
      subTree: se,
      um: Q,
      m: J,
      a: G,
      parent: fe,
      slots: { __: Z }
    } = _;
    ju(J), ju(G), W && oo(W), fe && ce(Z) && Z.forEach((de) => {
      fe.renderCache[de] = void 0;
    }), U.stop(), $ && ($.flags |= 8, Te(se, _, w, k)), Q && Et(Q, w), Et(() => {
      _.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve()), S.NODE_ENV !== "production" && TE(_);
  }, M = (_, w, k, W = !1, U = !1, $ = 0) => {
    for (let se = $; se < _.length; se++)
      Te(_[se], w, k, W, U);
  }, ne = (_) => {
    if (_.shapeFlag & 6)
      return ne(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const w = h(_.anchor || _.el), k = w && w[kh];
    return k ? h(k) : w;
  };
  let oe = !1;
  const ue = (_, w, k) => {
    _ == null ? w._vnode && Te(w._vnode, null, null, !0) : g(
      w._vnode || null,
      _,
      w,
      null,
      null,
      null,
      k
    ), w._vnode = _, oe || (oe = !0, Cu(), Ah(), oe = !1);
  }, Se = {
    p: g,
    um: Te,
    m: be,
    r: Je,
    mt: pe,
    mc: L,
    pc: te,
    pbc: B,
    n: ne,
    o: e
  };
  return {
    render: ue,
    hydrate: void 0,
    createApp: ry(ue)
  };
}
function $a({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function gs({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ay(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function cr(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (ce(s) && ce(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let a = o[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[r] = Jn(o[r]), a.el = i.el), !n && a.patchFlag !== -2 && cr(i, a)), a.type === Ur && (a.el = i.el), a.type === et && !a.el && (a.el = i.el), S.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function Oy(e) {
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
function om(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : om(t);
}
function ju(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Sy = Symbol.for("v-scx"), Cy = () => {
  {
    const e = Ot(Sy);
    return e || S.NODE_ENV !== "production" && q(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ua(e, t) {
  return da(e, null, t);
}
function Ty(e, t) {
  return da(
    e,
    null,
    S.NODE_ENV !== "production" ? Xe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Wt(e, t, n) {
  return S.NODE_ENV !== "production" && !ve(t) && q(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), da(e, t, n);
}
function da(e, t, n = Pe) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  S.NODE_ENV !== "production" && !t && (s !== void 0 && q(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && q(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && q(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = Xe({}, n);
  S.NODE_ENV !== "production" && (a.onWarn = q);
  const l = t && s || !t && r !== "post";
  let f;
  if (Or) {
    if (r === "sync") {
      const p = Cy();
      f = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = it, p.resume = it, p.pause = it, p;
    }
  }
  const c = st;
  a.call = (p, m, g) => ln(p, c, m, g);
  let d = !1;
  r === "post" ? a.scheduler = (p) => {
    Et(p, c && c.suspense);
  } : r !== "sync" && (d = !0, a.scheduler = (p, m) => {
    m ? p() : aa(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), d && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
  };
  const h = uE(e, t, a);
  return Or && (f ? f.push(h) : l && h()), h;
}
function Ny(e, t, n) {
  const s = this.proxy, o = ze(e) ? e.includes(".") ? rm(s, e) : () => s[e] : e.bind(s, s);
  let r;
  ve(t) ? r = t : (r = t.handler, n = t);
  const i = Hr(this), a = da(o, r.bind(s), n);
  return i(), a;
}
function rm(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Dy(e, t, n = Pe) {
  const s = kn();
  if (S.NODE_ENV !== "production" && !s)
    return q("useModel() called without active instance."), ee();
  const o = mt(t);
  if (S.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return q(`useModel() called with prop "${t}" which is not declared.`), ee();
  const r = Cn(t), i = im(e, o), a = oE((l, f) => {
    let c, d = Pe, h;
    return Ty(() => {
      const p = e[o];
      xt(c, p) && (c = p, f());
    }), {
      get() {
        return l(), n.get ? n.get(c) : c;
      },
      set(p) {
        const m = n.set ? n.set(p) : p;
        if (!xt(m, c) && !(d !== Pe && xt(p, d)))
          return;
        const g = s.vnode.props;
        g && // check if parent has passed v-model
        (t in g || o in g || r in g) && (`onUpdate:${t}` in g || `onUpdate:${o}` in g || `onUpdate:${r}` in g) || (c = p, f()), s.emit(`update:${t}`, m), xt(p, m) && xt(p, d) && !xt(m, h) && f(), d = p, h = m;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? i || Pe : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const im = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${mt(t)}Modifiers`] || e[`${Cn(t)}Modifiers`];
function xy(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Pe;
  if (S.NODE_ENV !== "production") {
    const {
      emitsOptions: c,
      propsOptions: [d]
    } = e;
    if (c)
      if (!(t in c))
        (!d || !(Es(mt(t)) in d)) && q(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Es(mt(t))}" prop.`
        );
      else {
        const h = c[t];
        ve(h) && (h(...n) || q(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && im(s, t.slice(7));
  if (i && (i.trim && (o = n.map((c) => ze(c) ? c.trim() : c)), i.number && (o = n.map(Pi))), S.NODE_ENV !== "production" && xE(e, t, o), S.NODE_ENV !== "production") {
    const c = t.toLowerCase();
    c !== t && s[Es(c)] && q(
      `Event "${c}" is emitted in component ${ha(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Cn(
        t
      )}" instead of "${t}".`
    );
  }
  let a, l = s[a = Es(t)] || // also try camelCase event handler (#2249)
  s[a = Es(mt(t))];
  !l && r && (l = s[a = Es(Cn(t))]), l && ln(
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
    e.emitted[a] = !0, ln(
      f,
      e,
      6,
      o
    );
  }
}
function am(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, a = !1;
  if (!ve(e)) {
    const l = (f) => {
      const c = am(f, t, !0);
      c && (a = !0, Xe(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !a ? (Me(e) && s.set(e, null), null) : (ce(r) ? r.forEach((l) => i[l] = null) : Xe(i, r), Me(e) && s.set(e, i), i);
}
function fa(e, t) {
  return !e || !Vr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ve(e, t[0].toLowerCase() + t.slice(1)) || Ve(e, Cn(t)) || Ve(e, t));
}
let Il = !1;
function Wi() {
  Il = !0;
}
function Uu(e) {
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
    renderCache: c,
    props: d,
    data: h,
    setupState: p,
    ctx: m,
    inheritAttrs: g
  } = e, v = ji(e);
  let E, b;
  S.NODE_ENV !== "production" && (Il = !1);
  try {
    if (n.shapeFlag & 4) {
      const O = o || s, T = S.NODE_ENV !== "production" && p.__isScriptSetup ? new Proxy(O, {
        get(x, j, L) {
          return q(
            `Property '${String(
              j
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(x, j, L);
        }
      }) : O;
      E = Jt(
        f.call(
          T,
          O,
          c,
          S.NODE_ENV !== "production" ? bn(d) : d,
          p,
          h,
          m
        )
      ), b = a;
    } else {
      const O = t;
      S.NODE_ENV !== "production" && a === d && Wi(), E = Jt(
        O.length > 1 ? O(
          S.NODE_ENV !== "production" ? bn(d) : d,
          S.NODE_ENV !== "production" ? {
            get attrs() {
              return Wi(), bn(a);
            },
            slots: i,
            emit: l
          } : { attrs: a, slots: i, emit: l }
        ) : O(
          S.NODE_ENV !== "production" ? bn(d) : d,
          null
        )
      ), b = t.props ? a : ky(a);
    }
  } catch (O) {
    dr.length = 0, Fr(O, e, 1), E = ge(et);
  }
  let y = E, A;
  if (S.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && ([y, A] = lm(E)), b && g !== !1) {
    const O = Object.keys(b), { shapeFlag: T } = y;
    if (O.length) {
      if (T & 7)
        r && O.some(Ii) && (b = Ry(
          b,
          r
        )), y = Nn(y, b, !1, !0);
      else if (S.NODE_ENV !== "production" && !Il && y.type !== et) {
        const x = Object.keys(a), j = [], L = [];
        for (let F = 0, B = x.length; F < B; F++) {
          const C = x[F];
          Vr(C) ? Ii(C) || j.push(C[2].toLowerCase() + C.slice(3)) : L.push(C);
        }
        L.length && q(
          `Extraneous non-props attributes (${L.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), j.length && q(
          `Extraneous non-emits event listeners (${j.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (S.NODE_ENV !== "production" && !Hu(y) && q(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), y = Nn(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && (S.NODE_ENV !== "production" && !Hu(y) && q(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), wr(y, n.transition)), S.NODE_ENV !== "production" && A ? A(y) : E = y, ji(v), E;
}
const lm = (e) => {
  const t = e.children, n = e.dynamicChildren, s = kc(t, !1);
  if (s) {
    if (S.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return lm(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (a) => {
    t[o] = a, n && (r > -1 ? n[r] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [Jt(s), i];
};
function kc(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (js(o)) {
      if (o.type !== et || o.children === "v-if") {
        if (n)
          return;
        if (n = o, S.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return kc(n.children);
      }
    } else
      return;
  }
  return n;
}
const ky = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Vr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ry = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ii(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Hu = (e) => e.shapeFlag & 7 || e.type === et;
function Iy(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: a, patchFlag: l } = t, f = r.emitsOptions;
  if (S.NODE_ENV !== "production" && (o || a) && Zt || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? Wu(s, i, f) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const h = c[d];
        if (i[h] !== s[h] && !fa(f, h))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : s === i ? !1 : s ? i ? Wu(s, i, f) : !0 : !!i;
  return !1;
}
function Wu(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !fa(n, r))
      return !0;
  }
  return !1;
}
function Py({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const cm = (e) => e.__isSuspense;
function Vy(e, t) {
  t && t.pendingBranch ? ce(e) ? t.effects.push(...e) : t.effects.push(e) : wh(e);
}
const Oe = Symbol.for("v-fgt"), Ur = Symbol.for("v-txt"), et = Symbol.for("v-cmt"), ur = Symbol.for("v-stc"), dr = [];
let Vt = null;
function N(e = !1) {
  dr.push(Vt = e ? null : []);
}
function Ly() {
  dr.pop(), Vt = dr[dr.length - 1] || null;
}
let Ar = 1;
function $u(e, t = !1) {
  Ar += e, e < 0 && Vt && t && (Vt.hasOnce = !0);
}
function um(e) {
  return e.dynamicChildren = Ar > 0 ? Vt || ho : null, Ly(), Ar > 0 && Vt && Vt.push(e), e;
}
function P(e, t, n, s, o, r) {
  return um(
    u(
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
function ot(e, t, n, s, o) {
  return um(
    ge(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function js(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function As(e, t) {
  if (S.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = vi.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const My = (...e) => fm(
  ...e
), dm = ({ key: e }) => e ?? null, Ei = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ze(e) || $e(e) || ve(e) ? { i: Ge, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, o = null, r = e === Oe ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && dm(t),
    ref: t && Ei(t),
    scopeId: Dh,
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
    ctx: Ge
  };
  return a ? (Rc(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= ze(n) ? 8 : 16), S.NODE_ENV !== "production" && l.key !== l.key && q("VNode created with invalid key (NaN). VNode type:", l.type), Ar > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Vt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Vt.push(l), l;
}
const ge = S.NODE_ENV !== "production" ? My : fm;
function fm(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === qE) && (S.NODE_ENV !== "production" && !e && q(`Invalid vnode type when creating vnode: ${e}.`), e = et), js(e)) {
    const a = Nn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Rc(a, n), Ar > 0 && !r && Vt && (a.shapeFlag & 6 ? Vt[Vt.indexOf(e)] = a : Vt.push(a)), a.patchFlag = -2, a;
  }
  if (gm(e) && (e = e.__vccOpts), t) {
    t = Ye(t);
    let { class: a, style: l } = t;
    a && !ze(a) && (t.class = me(a)), Me(l) && (yr(l) && !ce(l) && (l = Xe({}, l)), t.style = os(l));
  }
  const i = ze(e) ? 1 : cm(e) ? 128 : Rh(e) ? 64 : Me(e) ? 4 : ve(e) ? 2 : 0;
  return S.NODE_ENV !== "production" && i & 4 && yr(e) && (e = Ee(e), q(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), u(
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
function Ye(e) {
  return e ? yr(e) || Jh(e) ? Xe({}, e) : e : null;
}
function Nn(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: a, transition: l } = e, f = t ? ds(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && dm(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? ce(r) ? r.concat(Ei(t)) : [r, Ei(t)] : Ei(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: S.NODE_ENV !== "production" && i === -1 && ce(a) ? a.map(pm) : a,
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
    ssContent: e.ssContent && Nn(e.ssContent),
    ssFallback: e.ssFallback && Nn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && s && wr(
    c,
    l.clone(c)
  ), c;
}
function pm(e) {
  const t = Nn(e);
  return ce(e.children) && (t.children = e.children.map(pm)), t;
}
function ae(e = " ", t = 0) {
  return ge(Ur, null, e, t);
}
function Pl(e, t) {
  const n = ge(ur, null, e);
  return n.staticCount = t, n;
}
function Be(e = "", t = !1) {
  return t ? (N(), ot(et, null, e)) : ge(et, null, e);
}
function Jt(e) {
  return e == null || typeof e == "boolean" ? ge(et) : ce(e) ? ge(
    Oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : js(e) ? Jn(e) : ge(Ur, null, String(e));
}
function Jn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nn(e);
}
function Rc(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (ce(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Rc(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Jh(t) ? t._ctx = Ge : o === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ve(t) ? (t = { default: t, _ctx: Ge }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ae(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ds(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = me([t.class, s.class]));
      else if (o === "style")
        t.style = os([t.style, s.style]);
      else if (Vr(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(ce(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function mn(e, t, n, s = null) {
  ln(e, t, 7, [
    n,
    s
  ]);
}
const Fy = Yh();
let By = 0;
function jy(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Fy, r = {
    uid: By++,
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
    scope: new Yp(
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
    propsOptions: em(s, o),
    emitsOptions: am(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Pe,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Pe,
    data: Pe,
    props: Pe,
    attrs: Pe,
    slots: Pe,
    refs: Pe,
    setupState: Pe,
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
  return S.NODE_ENV !== "production" ? r.ctx = YE(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = xy.bind(null, r), e.ce && e.ce(r), r;
}
let st = null;
const kn = () => st || Ge;
let $i, Vl;
{
  const e = Mr(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  $i = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => st = n
  ), Vl = t(
    "__VUE_SSR_SETTERS__",
    (n) => Or = n
  );
}
const Hr = (e) => {
  const t = st;
  return $i(e), e.scope.on(), () => {
    e.scope.off(), $i(t);
  };
}, Ku = () => {
  st && st.scope.off(), $i(null);
}, Uy = /* @__PURE__ */ $n("slot,component");
function Ll(e, { isNativeTag: t }) {
  (Uy(e) || t(e)) && q(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function hm(e) {
  return e.vnode.shapeFlag & 4;
}
let Or = !1;
function Hy(e, t = !1, n = !1) {
  t && Vl(t);
  const { props: s, children: o } = e.vnode, r = hm(e);
  ay(e, s, r, t), _y(e, o, n || t);
  const i = r ? Wy(e, t) : void 0;
  return t && Vl(!1), i;
}
function Wy(e, t) {
  var n;
  const s = e.type;
  if (S.NODE_ENV !== "production") {
    if (s.name && Ll(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        Ll(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        xh(r[i]);
    }
    s.compilerOptions && $y() && q(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, zh), S.NODE_ENV !== "production" && GE(e);
  const { setup: o } = s;
  if (o) {
    on();
    const r = e.setupContext = o.length > 1 ? zy(e) : null, i = Hr(e), a = Po(
      o,
      e,
      0,
      [
        S.NODE_ENV !== "production" ? bn(e.props) : e.props,
        r
      ]
    ), l = vc(a);
    if (rn(), i(), (l || e.sp) && !go(e) && jh(e), l) {
      if (a.then(Ku, Ku), t)
        return a.then((f) => {
          zu(e, f, t);
        }).catch((f) => {
          Fr(f, e, 0);
        });
      if (e.asyncDep = a, S.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = s.name) != null ? n : "Anonymous";
        q(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      zu(e, a, t);
  } else
    mm(e, t);
}
function zu(e, t, n) {
  ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Me(t) ? (S.NODE_ENV !== "production" && js(t) && q(
    "setup() should not return VNodes directly - return a render function instead."
  ), S.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = vh(t), S.NODE_ENV !== "production" && QE(e)) : S.NODE_ENV !== "production" && t !== void 0 && q(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), mm(e, n);
}
const $y = () => !0;
function mm(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || it);
  {
    const o = Hr(e);
    on();
    try {
      ZE(e);
    } finally {
      rn(), o();
    }
  }
  S.NODE_ENV !== "production" && !s.render && e.render === it && !t && (s.template ? q(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : q("Component is missing template or render function: ", s));
}
const qu = S.NODE_ENV !== "production" ? {
  get(e, t) {
    return Wi(), rt(e, "get", ""), e[t];
  },
  set() {
    return q("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return q("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return rt(e, "get", ""), e[t];
  }
};
function Ky(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return rt(e, "get", "$slots"), t[n];
    }
  });
}
function zy(e) {
  const t = (n) => {
    if (S.NODE_ENV !== "production" && (e.exposed && q("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (ce(n) ? s = "array" : $e(n) && (s = "ref")), s !== "object" && q(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (S.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, qu));
      },
      get slots() {
        return s || (s = Ky(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, qu),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function pa(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vh(ts(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Rs)
        return Rs[n](e);
    },
    has(t, n) {
      return n in t || n in Rs;
    }
  })) : e.proxy;
}
const qy = /(?:^|[-_])(\w)/g, Xy = (e) => e.replace(qy, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ic(e, t = !0) {
  return ve(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ha(e, t, n = !1) {
  let s = Ic(t);
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
  return s ? Xy(s) : n ? "App" : "Anonymous";
}
function gm(e) {
  return ve(e) && "__vccOpts" in e;
}
const re = (e, t) => {
  const n = lE(e, t, Or);
  if (S.NODE_ENV !== "production") {
    const s = kn();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Pc(e, t, n) {
  const s = arguments.length;
  return s === 2 ? Me(t) && !ce(t) ? js(t) ? ge(e, null, [t]) : ge(e, t) : ge(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && js(n) && (n = [n]), ge(e, t, n));
}
function Yy() {
  if (S.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!Me(d))
        return null;
      if (d.__isVue)
        return ["div", e, "VueInstance"];
      if ($e(d)) {
        on();
        const h = d.value;
        return rn(), [
          "div",
          {},
          ["span", e, c(d)],
          "<",
          a(h),
          ">"
        ];
      } else {
        if (nn(d))
          return [
            "div",
            {},
            ["span", e, At(d) ? "ShallowReactive" : "Reactive"],
            "<",
            a(d),
            `>${Tn(d) ? " (readonly)" : ""}`
          ];
        if (Tn(d))
          return [
            "div",
            {},
            ["span", e, At(d) ? "ShallowReadonly" : "Readonly"],
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
    d.type.props && d.props && h.push(i("props", Ee(d.props))), d.setupState !== Pe && h.push(i("setup", d.setupState)), d.data !== Pe && h.push(i("data", Ee(d.data)));
    const p = l(d, "computed");
    p && h.push(i("computed", p));
    const m = l(d, "inject");
    return m && h.push(i("injected", m)), h.push([
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
    return h = Xe({}, h), Object.keys(h).length ? [
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
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : Me(d) ? ["object", { object: h ? Ee(d) : d }] : ["span", n, String(d)];
  }
  function l(d, h) {
    const p = d.type;
    if (ve(p))
      return;
    const m = {};
    for (const g in d.ctx)
      f(p, g, h) && (m[g] = d.ctx[g]);
    return m;
  }
  function f(d, h, p) {
    const m = d[p];
    if (ce(m) && m.includes(h) || Me(m) && h in m || d.extends && f(d.extends, h, p) || d.mixins && d.mixins.some((g) => f(g, h, p)))
      return !0;
  }
  function c(d) {
    return At(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Xu = "3.5.17", wn = S.NODE_ENV !== "production" ? q : it;
var qt = {};
let Ml;
const Yu = typeof window < "u" && window.trustedTypes;
if (Yu)
  try {
    Ml = /* @__PURE__ */ Yu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    qt.NODE_ENV !== "production" && wn(`Error creating trusted types policy: ${e}`);
  }
const vm = Ml ? (e) => Ml.createHTML(e) : (e) => e, Gy = "http://www.w3.org/2000/svg", Qy = "http://www.w3.org/1998/Math/MathML", Mn = typeof document < "u" ? document : null, Gu = Mn && /* @__PURE__ */ Mn.createElement("template"), Jy = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Mn.createElementNS(Gy, e) : t === "mathml" ? Mn.createElementNS(Qy, e) : n ? Mn.createElement(e, { is: n }) : Mn.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Mn.createTextNode(e),
  createComment: (e) => Mn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Mn.querySelector(e),
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
      Gu.innerHTML = vm(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Gu.content;
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
}, qn = "transition", Xo = "animation", Sr = Symbol("_vtc"), _m = {
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
}, Zy = /* @__PURE__ */ Xe(
  {},
  Vh,
  _m
), eb = (e) => (e.displayName = "Transition", e.props = Zy, e), tb = /* @__PURE__ */ eb(
  (e, { slots: t }) => Pc(PE, nb(e), t)
), vs = (e, t = []) => {
  ce(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Qu = (e) => e ? ce(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function nb(e) {
  const t = {};
  for (const C in e)
    C in _m || (t[C] = e[C]);
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
    appearToClass: c = a,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, m = sb(o), g = m && m[0], v = m && m[1], {
    onBeforeEnter: E,
    onEnter: b,
    onEnterCancelled: y,
    onLeave: A,
    onLeaveCancelled: O,
    onBeforeAppear: T = E,
    onAppear: x = b,
    onAppearCancelled: j = y
  } = t, L = (C, I, Y, pe) => {
    C._enterCancelled = pe, _s(C, I ? c : a), _s(C, I ? f : i), Y && Y();
  }, F = (C, I) => {
    C._isLeaving = !1, _s(C, d), _s(C, p), _s(C, h), I && I();
  }, B = (C) => (I, Y) => {
    const pe = C ? x : b, D = () => L(I, C, Y);
    vs(pe, [I, D]), Ju(() => {
      _s(I, C ? l : r), Pn(I, C ? c : a), Qu(pe) || Zu(I, s, g, D);
    });
  };
  return Xe(t, {
    onBeforeEnter(C) {
      vs(E, [C]), Pn(C, r), Pn(C, i);
    },
    onBeforeAppear(C) {
      vs(T, [C]), Pn(C, l), Pn(C, f);
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(C, I) {
      C._isLeaving = !0;
      const Y = () => F(C, I);
      Pn(C, d), C._enterCancelled ? (Pn(C, h), nd()) : (nd(), Pn(C, h)), Ju(() => {
        C._isLeaving && (_s(C, d), Pn(C, p), Qu(A) || Zu(C, s, v, Y));
      }), vs(A, [C, Y]);
    },
    onEnterCancelled(C) {
      L(C, !1, void 0, !0), vs(y, [C]);
    },
    onAppearCancelled(C) {
      L(C, !0, void 0, !0), vs(j, [C]);
    },
    onLeaveCancelled(C) {
      F(C), vs(O, [C]);
    }
  });
}
function sb(e) {
  if (e == null)
    return null;
  if (Me(e))
    return [Ka(e.enter), Ka(e.leave)];
  {
    const t = Ka(e);
    return [t, t];
  }
}
function Ka(e) {
  const t = b_(e);
  return qt.NODE_ENV !== "production" && mE(t, "<transition> explicit duration"), t;
}
function Pn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Sr] || (e[Sr] = /* @__PURE__ */ new Set())).add(t);
}
function _s(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Sr];
  n && (n.delete(t), n.size || (e[Sr] = void 0));
}
function Ju(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ob = 0;
function Zu(e, t, n, s) {
  const o = e._endId = ++ob, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: a, propCount: l } = rb(e, t);
  if (!i)
    return s();
  const f = i + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(f, h), r();
  }, h = (p) => {
    p.target === e && ++c >= l && d();
  };
  setTimeout(() => {
    c < l && d();
  }, a + 1), e.addEventListener(f, h);
}
function rb(e, t) {
  const n = window.getComputedStyle(e), s = (m) => (n[m] || "").split(", "), o = s(`${qn}Delay`), r = s(`${qn}Duration`), i = ed(o, r), a = s(`${Xo}Delay`), l = s(`${Xo}Duration`), f = ed(a, l);
  let c = null, d = 0, h = 0;
  t === qn ? i > 0 && (c = qn, d = i, h = r.length) : t === Xo ? f > 0 && (c = Xo, d = f, h = l.length) : (d = Math.max(i, f), c = d > 0 ? i > f ? qn : Xo : null, h = c ? c === qn ? r.length : l.length : 0);
  const p = c === qn && /\b(transform|all)(,|$)/.test(
    s(`${qn}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: h,
    hasTransform: p
  };
}
function ed(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => td(n) + td(e[s])));
}
function td(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function nd() {
  return document.body.offsetHeight;
}
function ib(e, t, n) {
  const s = e[Sr];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ki = Symbol("_vod"), Em = Symbol("_vsh"), ym = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ki] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Yo(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Yo(e, !0), s.enter(e)) : s.leave(e, () => {
      Yo(e, !1);
    }) : Yo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Yo(e, t);
  }
};
qt.NODE_ENV !== "production" && (ym.name = "show");
function Yo(e, t) {
  e.style.display = t ? e[Ki] : "none", e[Em] = !t;
}
const ab = Symbol(qt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), lb = /(^|;)\s*display\s*:/;
function cb(e, t, n) {
  const s = e.style, o = ze(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (ze(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && yi(s, a, "");
        }
      else
        for (const i in t)
          n[i] == null && yi(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), yi(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[ab];
      i && (n += ";" + i), s.cssText = n, r = lb.test(n);
    }
  } else t && e.removeAttribute("style");
  Ki in e && (e[Ki] = r ? s.display : "", e[Em] && (s.display = "none"));
}
const ub = /[^\\];\s*$/, sd = /\s*!important$/;
function yi(e, t, n) {
  if (ce(n))
    n.forEach((s) => yi(e, t, s));
  else if (n == null && (n = ""), qt.NODE_ENV !== "production" && ub.test(n) && wn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = db(e, t);
    sd.test(n) ? e.setProperty(
      Cn(s),
      n.replace(sd, ""),
      "important"
    ) : e[s] = n;
  }
}
const od = ["Webkit", "Moz", "ms"], za = {};
function db(e, t) {
  const n = za[t];
  if (n)
    return n;
  let s = mt(t);
  if (s !== "filter" && s in e)
    return za[t] = s;
  s = Ls(s);
  for (let o = 0; o < od.length; o++) {
    const r = od[o] + s;
    if (r in e)
      return za[t] = r;
  }
  return t;
}
const rd = "http://www.w3.org/1999/xlink";
function id(e, t, n, s, o, r = I_(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(rd, t.slice(6, t.length)) : e.setAttributeNS(rd, t, n) : n == null || r && !zp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : sn(n) ? String(n) : n
  );
}
function ad(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? vm(n) : n);
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
    a === "boolean" ? n = zp(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    qt.NODE_ENV !== "production" && !i && wn(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  i && e.removeAttribute(o || t);
}
function jn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function fb(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ld = Symbol("_vei");
function pb(e, t, n, s, o = null) {
  const r = e[ld] || (e[ld] = {}), i = r[t];
  if (s && i)
    i.value = qt.NODE_ENV !== "production" ? ud(s, t) : s;
  else {
    const [a, l] = hb(t);
    if (s) {
      const f = r[t] = vb(
        qt.NODE_ENV !== "production" ? ud(s, t) : s,
        o
      );
      jn(e, a, f, l);
    } else i && (fb(e, a, i, l), r[t] = void 0);
  }
}
const cd = /(?:Once|Passive|Capture)$/;
function hb(e) {
  let t;
  if (cd.test(e)) {
    t = {};
    let s;
    for (; s = e.match(cd); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Cn(e.slice(2)), t];
}
let qa = 0;
const mb = /* @__PURE__ */ Promise.resolve(), gb = () => qa || (mb.then(() => qa = 0), qa = Date.now());
function vb(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ln(
      _b(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = gb(), n;
}
function ud(e, t) {
  return ve(e) || ce(e) ? e : (wn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), it);
}
function _b(e, t) {
  if (ce(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const dd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Eb = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? ib(e, s, i) : t === "style" ? cb(e, n, s) : Vr(t) ? Ii(t) || pb(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : yb(e, t, s, i)) ? (ad(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && id(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ze(s)) ? ad(e, mt(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), id(e, t, s, i));
};
function yb(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && dd(t) && ve(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return dd(t) && ze(n) ? !1 : t in e;
}
const rs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ce(t) ? (n) => oo(t, n) : t;
};
function bb(e) {
  e.target.composing = !0;
}
function fd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const $t = Symbol("_assign"), Cr = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[$t] = rs(o);
    const r = s || o.props && o.props.type === "number";
    jn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), r && (a = Pi(a)), e[$t](a);
    }), n && jn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (jn(e, "compositionstart", bb), jn(e, "compositionend", fd), jn(e, "change", fd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[$t] = rs(i), e.composing) return;
    const a = (r || e.type === "number") && !/^0\d/.test(e.value) ? Pi(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === l) || (e.value = l));
  }
}, wb = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[$t] = rs(n), jn(e, "change", () => {
      const s = e._modelValue, o = yo(e), r = e.checked, i = e[$t];
      if (ce(s)) {
        const a = yc(s, o), l = a !== -1;
        if (r && !l)
          i(s.concat(o));
        else if (!r && l) {
          const f = [...s];
          f.splice(a, 1), i(f);
        }
      } else if (Io(s)) {
        const a = new Set(s);
        r ? a.add(o) : a.delete(o), i(a);
      } else
        i(bm(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: pd,
  beforeUpdate(e, t, n) {
    e[$t] = rs(n), pd(e, t, n);
  }
};
function pd(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (ce(t))
    o = yc(t, s.props.value) > -1;
  else if (Io(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = Ms(t, bm(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const zi = {
  created(e, { value: t }, n) {
    e.checked = Ms(t, n.props.value), e[$t] = rs(n), jn(e, "change", () => {
      e[$t](yo(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[$t] = rs(s), t !== n && (e.checked = Ms(t, s.props.value));
  }
}, _o = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Io(t);
    jn(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Pi(yo(i)) : yo(i)
      );
      e[$t](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, Eo(() => {
        e._assigning = !1;
      });
    }), e[$t] = rs(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    hd(e, t);
  },
  beforeUpdate(e, t, n) {
    e[$t] = rs(n);
  },
  updated(e, { value: t }) {
    e._assigning || hd(e, t);
  }
};
function hd(e, t) {
  const n = e.multiple, s = ce(t);
  if (n && !s && !Io(t)) {
    qt.NODE_ENV !== "production" && wn(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], a = yo(i);
    if (n)
      if (s) {
        const l = typeof a;
        l === "string" || l === "number" ? i.selected = t.some((f) => String(f) === String(a)) : i.selected = yc(t, a) > -1;
      } else
        i.selected = t.has(a);
    else if (Ms(yo(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function yo(e) {
  return "_value" in e ? e._value : e.value;
}
function bm(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Ab = ["ctrl", "shift", "alt", "meta"], Ob = {
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
  exact: (e, t) => Ab.some((n) => e[`${n}Key`] && !t.includes(n))
}, wm = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const a = Ob[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...r);
  });
}, Sb = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Cb = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const r = Cn(o.key);
    if (t.some(
      (i) => i === r || Sb[i] === r
    ))
      return e(o);
  });
}, Tb = /* @__PURE__ */ Xe({ patchProp: Eb }, Jy);
let md;
function Nb() {
  return md || (md = by(Tb));
}
const ma = (...e) => {
  const t = Nb().createApp(...e);
  qt.NODE_ENV !== "production" && (xb(t), kb(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Rb(s);
    if (!o) return;
    const r = t._component;
    !ve(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Db(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function Db(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function xb(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => D_(t) || x_(t) || k_(t),
    writable: !1
  });
}
function kb(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        wn(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return wn(s), n;
      },
      set() {
        wn(s);
      }
    });
  }
}
function Rb(e) {
  if (ze(e)) {
    const t = document.querySelector(e);
    return qt.NODE_ENV !== "production" && !t && wn(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return qt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && wn(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Ib = {};
function Pb() {
  Yy();
}
Ib.NODE_ENV !== "production" && Pb();
var Vb = Object.create, Am = Object.defineProperty, Lb = Object.getOwnPropertyDescriptor, Vc = Object.getOwnPropertyNames, Mb = Object.getPrototypeOf, Fb = Object.prototype.hasOwnProperty, Bb = (e, t) => function() {
  return e && (t = (0, e[Vc(e)[0]])(e = 0)), t;
}, jb = (e, t) => function() {
  return t || (0, e[Vc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Ub = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Vc(t))
      !Fb.call(e, o) && o !== n && Am(e, o, { get: () => t[o], enumerable: !(s = Lb(t, o)) || s.enumerable });
  return e;
}, Hb = (e, t, n) => (n = e != null ? Vb(Mb(e)) : {}, Ub(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Am(n, "default", { value: e, enumerable: !0 }),
  e
)), Wr = Bb({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Wb = jb({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    Wr(), t.exports = s;
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
      return r.proto ? c : f;
      function l(d, h) {
        const p = Object.keys(d), m = new Array(p.length);
        for (let g = 0; g < p.length; g++) {
          const v = p[g], E = d[v];
          typeof E != "object" || E === null ? m[v] = E : E.constructor !== Object && (a = i.get(E.constructor)) ? m[v] = a(E, h) : ArrayBuffer.isView(E) ? m[v] = n(E) : m[v] = h(E);
        }
        return m;
      }
      function f(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return l(d, f);
        if (d.constructor !== Object && (a = i.get(d.constructor)))
          return a(d, f);
        const h = {};
        for (const p in d) {
          if (Object.hasOwnProperty.call(d, p) === !1) continue;
          const m = d[p];
          typeof m != "object" || m === null ? h[p] = m : m.constructor !== Object && (a = i.get(m.constructor)) ? h[p] = a(m, f) : ArrayBuffer.isView(m) ? h[p] = n(m) : h[p] = f(m);
        }
        return h;
      }
      function c(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return l(d, c);
        if (d.constructor !== Object && (a = i.get(d.constructor)))
          return a(d, c);
        const h = {};
        for (const p in d) {
          const m = d[p];
          typeof m != "object" || m === null ? h[p] = m : m.constructor !== Object && (a = i.get(m.constructor)) ? h[p] = a(m, c) : ArrayBuffer.isView(m) ? h[p] = n(m) : h[p] = c(m);
        }
        return h;
      }
    }
    function o(r) {
      const i = [], a = [], l = /* @__PURE__ */ new Map();
      if (l.set(Date, (p) => new Date(p)), l.set(Map, (p, m) => new Map(c(Array.from(p), m))), l.set(Set, (p, m) => new Set(c(Array.from(p), m))), r.constructorHandlers)
        for (const p of r.constructorHandlers)
          l.set(p[0], p[1]);
      let f = null;
      return r.proto ? h : d;
      function c(p, m) {
        const g = Object.keys(p), v = new Array(g.length);
        for (let E = 0; E < g.length; E++) {
          const b = g[E], y = p[b];
          if (typeof y != "object" || y === null)
            v[b] = y;
          else if (y.constructor !== Object && (f = l.get(y.constructor)))
            v[b] = f(y, m);
          else if (ArrayBuffer.isView(y))
            v[b] = n(y);
          else {
            const A = i.indexOf(y);
            A !== -1 ? v[b] = a[A] : v[b] = m(y);
          }
        }
        return v;
      }
      function d(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return c(p, d);
        if (p.constructor !== Object && (f = l.get(p.constructor)))
          return f(p, d);
        const m = {};
        i.push(p), a.push(m);
        for (const g in p) {
          if (Object.hasOwnProperty.call(p, g) === !1) continue;
          const v = p[g];
          if (typeof v != "object" || v === null)
            m[g] = v;
          else if (v.constructor !== Object && (f = l.get(v.constructor)))
            m[g] = f(v, d);
          else if (ArrayBuffer.isView(v))
            m[g] = n(v);
          else {
            const E = i.indexOf(v);
            E !== -1 ? m[g] = a[E] : m[g] = d(v);
          }
        }
        return i.pop(), a.pop(), m;
      }
      function h(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return c(p, h);
        if (p.constructor !== Object && (f = l.get(p.constructor)))
          return f(p, h);
        const m = {};
        i.push(p), a.push(m);
        for (const g in p) {
          const v = p[g];
          if (typeof v != "object" || v === null)
            m[g] = v;
          else if (v.constructor !== Object && (f = l.get(v.constructor)))
            m[g] = f(v, h);
          else if (ArrayBuffer.isView(v))
            m[g] = n(v);
          else {
            const E = i.indexOf(v);
            E !== -1 ? m[g] = a[E] : m[g] = h(v);
          }
        }
        return i.pop(), a.pop(), m;
      }
    }
  }
});
Wr();
Wr();
Wr();
var Om = typeof navigator < "u", le = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof le.chrome < "u" && le.chrome.devtools;
Om && (le.self, le.top);
var gd;
typeof navigator < "u" && ((gd = navigator.userAgent) == null || gd.toLowerCase().includes("electron"));
Wr();
var $b = Hb(Wb()), Kb = /(?:^|[-_/])(\w)/g;
function zb(e, t) {
  return t ? t.toUpperCase() : "";
}
function qb(e) {
  return e && `${e}`.replace(Kb, zb);
}
function Xb(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const s = n.lastIndexOf("/"), o = n.substring(s + 1);
  {
    const r = o.lastIndexOf(t);
    return o.substring(0, r);
  }
}
var vd = (0, $b.default)({ circles: !0 });
const Yb = {
  trailing: !0
};
function bo(e, t = 25, n = {}) {
  if (n = { ...Yb, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let s, o, r = [], i, a;
  const l = (f, c) => (i = Gb(e, f, c), i.finally(() => {
    if (i = null, n.trailing && a && !o) {
      const d = l(f, a);
      return a = null, d;
    }
  }), i);
  return function(...f) {
    return i ? (n.trailing && (a = f), i) : new Promise((c) => {
      const d = !o && n.leading;
      clearTimeout(o), o = setTimeout(() => {
        o = null;
        const h = n.leading ? s : l(this, f);
        for (const p of r)
          p(h);
        r = [];
      }, t), d ? (s = l(this, f), c(s)) : r.push(c);
    });
  };
}
async function Gb(e, t, n) {
  return await e.apply(t, n);
}
function Fl(e, t = {}, n) {
  for (const s in e) {
    const o = e[s], r = n ? `${n}:${s}` : s;
    typeof o == "object" && o !== null ? Fl(o, t, r) : typeof o == "function" && (t[r] = o);
  }
  return t;
}
const Qb = { run: (e) => e() }, Jb = () => Qb, Sm = typeof console.createTask < "u" ? console.createTask : Jb;
function Zb(e, t) {
  const n = t.shift(), s = Sm(n);
  return e.reduce(
    (o, r) => o.then(() => s.run(() => r(...t))),
    Promise.resolve()
  );
}
function e1(e, t) {
  const n = t.shift(), s = Sm(n);
  return Promise.all(e.map((o) => s.run(() => o(...t))));
}
function Xa(e, t) {
  for (const n of [...e])
    n(t);
}
class t1 {
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
    const n = Fl(t), s = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of s.splice(0, s.length))
        o();
    };
  }
  removeHooks(t) {
    const n = Fl(t);
    for (const s in n)
      this.removeHook(s, n[s]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(Zb, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(e1, t, ...n);
  }
  callHookWith(t, n, ...s) {
    const o = this._before || this._after ? { name: n, args: s, context: {} } : void 0;
    this._before && Xa(this._before, o);
    const r = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      s
    );
    return r instanceof Promise ? r.finally(() => {
      this._after && o && Xa(this._after, o);
    }) : (this._after && o && Xa(this._after, o), r);
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
function Cm() {
  return new t1();
}
var n1 = Object.create, Tm = Object.defineProperty, s1 = Object.getOwnPropertyDescriptor, Lc = Object.getOwnPropertyNames, o1 = Object.getPrototypeOf, r1 = Object.prototype.hasOwnProperty, i1 = (e, t) => function() {
  return e && (t = (0, e[Lc(e)[0]])(e = 0)), t;
}, Nm = (e, t) => function() {
  return t || (0, e[Lc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, a1 = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Lc(t))
      !r1.call(e, o) && o !== n && Tm(e, o, { get: () => t[o], enumerable: !(s = s1(t, o)) || s.enumerable });
  return e;
}, l1 = (e, t, n) => (n = e != null ? n1(o1(e)) : {}, a1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Tm(n, "default", { value: e, enumerable: !0 }),
  e
)), K = i1({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), c1 = Nm({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
    K(), function(n) {
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
      }, l = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), f = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), c = [".", "!", "~", "*", "'", "(", ")"].join(""), d = function(v, E) {
        var b = "-", y = "", A = "", O = !0, T = {}, x, j, L, F, B, C, I, Y, pe, D, R, H, te, we, Le = "";
        if (typeof v != "string")
          return "";
        if (typeof E == "string" && (b = E), I = a.en, Y = i.en, typeof E == "object") {
          x = E.maintainCase || !1, T = E.custom && typeof E.custom == "object" ? E.custom : T, L = +E.truncate > 1 && E.truncate || !1, F = E.uric || !1, B = E.uricNoSlash || !1, C = E.mark || !1, O = !(E.symbols === !1 || E.lang === !1), b = E.separator || b, F && (Le += l), B && (Le += f), C && (Le += c), I = E.lang && a[E.lang] && O ? a[E.lang] : O ? a.en : {}, Y = E.lang && i[E.lang] ? i[E.lang] : E.lang === !1 || E.lang === !0 ? {} : i.en, E.titleCase && typeof E.titleCase.length == "number" && Array.prototype.toString.call(E.titleCase) ? (E.titleCase.forEach(function(be) {
            T[be + ""] = be + "";
          }), j = !0) : j = !!E.titleCase, E.custom && typeof E.custom.length == "number" && Array.prototype.toString.call(E.custom) && E.custom.forEach(function(be) {
            T[be + ""] = be + "";
          }), Object.keys(T).forEach(function(be) {
            var Te;
            be.length > 1 ? Te = new RegExp("\\b" + p(be) + "\\b", "gi") : Te = new RegExp(p(be), "gi"), v = v.replace(Te, T[be]);
          });
          for (R in T)
            Le += R;
        }
        for (Le += b, Le = p(Le), v = v.replace(/(^\s+|\s+$)/g, ""), te = !1, we = !1, D = 0, H = v.length; D < H; D++)
          R = v[D], m(R, T) ? te = !1 : Y[R] ? (R = te && Y[R].match(/[A-Za-z0-9]/) ? " " + Y[R] : Y[R], te = !1) : R in s ? (D + 1 < H && o.indexOf(v[D + 1]) >= 0 ? (A += R, R = "") : we === !0 ? (R = r[A] + s[R], A = "") : R = te && s[R].match(/[A-Za-z0-9]/) ? " " + s[R] : s[R], te = !1, we = !1) : R in r ? (A += R, R = "", D === H - 1 && (R = r[A]), we = !0) : /* process symbol chars */ I[R] && !(F && l.indexOf(R) !== -1) && !(B && f.indexOf(R) !== -1) ? (R = te || y.substr(-1).match(/[A-Za-z0-9]/) ? b + I[R] : I[R], R += v[D + 1] !== void 0 && v[D + 1].match(/[A-Za-z0-9]/) ? b : "", te = !0) : (we === !0 ? (R = r[A] + R, A = "", we = !1) : te && (/[A-Za-z0-9]/.test(R) || y.substr(-1).match(/A-Za-z0-9]/)) && (R = " " + R), te = !1), y += R.replace(new RegExp("[^\\w\\s" + Le + "_-]", "g"), b);
        return j && (y = y.replace(/(\w)(\S*)/g, function(be, Te, Je) {
          var ut = Te.toUpperCase() + (Je !== null ? Je : "");
          return Object.keys(T).indexOf(ut.toLowerCase()) < 0 ? ut : ut.toLowerCase();
        })), y = y.replace(/\s+/g, b).replace(new RegExp("\\" + b + "+", "g"), b).replace(new RegExp("(^\\" + b + "+|\\" + b + "+$)", "g"), ""), L && y.length > L && (pe = y.charAt(L) === b, y = y.slice(0, L), pe || (y = y.slice(0, y.lastIndexOf(b)))), !x && !j && (y = y.toLowerCase()), y;
      }, h = function(v) {
        return function(b) {
          return d(b, v);
        };
      }, p = function(v) {
        return v.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, m = function(g, v) {
        for (var E in v)
          if (v[E] === g)
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
}), u1 = Nm({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    K(), t.exports = c1();
  }
});
K();
K();
K();
K();
K();
K();
K();
K();
function d1(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function f1(e) {
  const t = e.__file;
  if (t)
    return qb(Xb(t, ".vue"));
}
function _d(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Mc(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Dm(e) {
  var t, n;
  const s = (t = e.subTree) == null ? void 0 : t.type, o = Mc(e);
  return o ? ((n = o?.types) == null ? void 0 : n.Fragment) === s : !1;
}
function ga(e) {
  var t, n, s;
  const o = d1(e?.type || {});
  if (o)
    return o;
  if (e?.root === e)
    return "Root";
  for (const i in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[i] === e?.type)
      return _d(e, i);
  for (const i in (s = e.appContext) == null ? void 0 : s.components)
    if (e.appContext.components[i] === e?.type)
      return _d(e, i);
  const r = f1(e?.type || {});
  return r || "Anonymous Component";
}
function p1(e) {
  var t, n, s;
  const o = (s = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? s : 0, r = e === e?.root ? "root" : e.uid;
  return `${o}:${r}`;
}
function Bl(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function h1() {
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
var oi;
function m1(e) {
  return oi || (oi = document.createRange()), oi.selectNode(e), oi.getBoundingClientRect();
}
function g1(e) {
  const t = h1();
  if (!e.children)
    return t;
  for (let n = 0, s = e.children.length; n < s; n++) {
    const o = e.children[n];
    let r;
    if (o.component)
      r = Us(o.component);
    else if (o.el) {
      const i = o.el;
      i.nodeType === 1 || i.getBoundingClientRect ? r = i.getBoundingClientRect() : i.nodeType === 3 && i.data.trim() && (r = m1(i));
    }
    r && v1(t, r);
  }
  return t;
}
function v1(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Ed = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function Us(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? Ed : Dm(e) ? g1(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? Us(e.subTree.component) : Ed;
}
K();
function Fc(e) {
  return Dm(e) ? _1(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function _1(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...Fc(n.component)) : n?.el && t.push(n.el);
  }), t;
}
var xm = "__vue-devtools-component-inspector__", km = "__vue-devtools-component-inspector__card__", Rm = "__vue-devtools-component-inspector__name__", Im = "__vue-devtools-component-inspector__indicator__", Pm = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, E1 = {
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
}, y1 = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function Lo() {
  return document.getElementById(xm);
}
function b1() {
  return document.getElementById(km);
}
function w1() {
  return document.getElementById(Im);
}
function A1() {
  return document.getElementById(Rm);
}
function Bc(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function jc(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : xm, Object.assign(n.style, {
    ...Pm,
    ...Bc(e.bounds),
    ...e.style
  });
  const s = document.createElement("span");
  s.id = km, Object.assign(s.style, {
    ...E1,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const o = document.createElement("span");
  o.id = Rm, o.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const r = document.createElement("i");
  return r.id = Im, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(r.style, y1), s.appendChild(o), s.appendChild(r), n.appendChild(s), document.body.appendChild(n), n;
}
function Uc(e) {
  const t = Lo(), n = b1(), s = A1(), o = w1();
  t && (Object.assign(t.style, {
    ...Pm,
    ...Bc(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), s.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function O1(e) {
  const t = Us(e);
  if (!t.width && !t.height)
    return;
  const n = ga(e);
  Lo() ? Uc({ bounds: t, name: n }) : jc({ bounds: t, name: n });
}
function Vm() {
  const e = Lo();
  e && (e.style.display = "none");
}
var jl = null;
function Ul(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (jl = n, n.vnode.el)) {
      const o = Us(n), r = ga(n);
      Lo() ? Uc({ bounds: o, name: r }) : jc({ bounds: o, name: r });
    }
  }
}
function S1(e, t) {
  if (e.preventDefault(), e.stopPropagation(), jl) {
    const n = p1(jl);
    t(n);
  }
}
var qi = null;
function C1() {
  Vm(), window.removeEventListener("mouseover", Ul), window.removeEventListener("click", qi, !0), qi = null;
}
function T1() {
  return window.addEventListener("mouseover", Ul), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), S1(n, (s) => {
        window.removeEventListener("click", t, !0), qi = null, window.removeEventListener("mouseover", Ul);
        const o = Lo();
        o && (o.style.display = "none"), e(JSON.stringify({ id: s }));
      });
    }
    qi = t, window.addEventListener("click", t, !0);
  });
}
function N1(e) {
  const t = Bl(wt.value, e.id);
  if (t) {
    const [n] = Fc(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const s = Us(t), o = document.createElement("div"), r = {
        ...Bc(s),
        position: "absolute"
      };
      Object.assign(o.style, r), document.body.appendChild(o), o.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(o);
      }, 2e3);
    }
    setTimeout(() => {
      const s = Us(t);
      if (s.width || s.height) {
        const o = ga(t), r = Lo();
        r ? Uc({ ...e, name: o, bounds: s }) : jc({ ...e, name: o, bounds: s }), setTimeout(() => {
          r && (r.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
K();
var yd, bd;
(bd = (yd = le).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (yd.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function D1(e) {
  let t = 0;
  const n = setInterval(() => {
    le.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function x1() {
  const e = le.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function k1() {
  return new Promise((e) => {
    function t() {
      x1(), e(le.__VUE_INSPECTOR__);
    }
    le.__VUE_INSPECTOR__ ? t() : D1(() => {
      t();
    });
  });
}
K();
K();
function R1(e) {
  return !!(e && e.__v_isReadonly);
}
function Lm(e) {
  return R1(e) ? Lm(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ya(e) {
  return !!(e && e.__v_isRef === !0);
}
function sr(e) {
  const t = e && e.__v_raw;
  return t ? sr(t) : e;
}
var I1 = class {
  constructor() {
    this.refEditor = new P1();
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
}, P1 = class {
  set(e, t) {
    if (Ya(e))
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
    return Ya(e) ? e.value : e;
  }
  isRef(e) {
    return Ya(e) || Lm(e);
  }
};
K();
K();
K();
var V1 = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function L1() {
  if (!Om || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem(V1);
  return e ? JSON.parse(e) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
K();
K();
K();
var wd, Ad;
(Ad = (wd = le).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (wd.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var M1 = new Proxy(le.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function F1(e, t) {
  at.timelineLayersState[t.id] = !1, M1.push({
    ...e,
    descriptorId: t.id,
    appRecord: Mc(t.app)
  });
}
var Od, Sd;
(Sd = (Od = le).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Od.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Hc = new Proxy(le.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), Mm = bo(() => {
  Mo.hooks.callHook("sendInspectorToClient", Fm());
});
function B1(e, t) {
  var n, s;
  Hc.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (s = e.stateFilterPlaceholder) != null ? s : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Mc(t.app)
  }), Mm();
}
function Fm() {
  return Hc.filter((e) => e.descriptor.app === wt.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
function bi(e, t) {
  return Hc.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function j1() {
  const e = Cm();
  e.hook("addInspector", ({ inspector: s, plugin: o }) => {
    B1(s, o.descriptor);
  });
  const t = bo(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || at.highPerfModeEnabled)
      return;
    const i = bi(s, o.descriptor.app), a = {
      app: o.descriptor.app,
      inspectorId: s,
      filter: i?.treeFilter || "",
      rootNodes: []
    };
    await new Promise((l) => {
      e.callHookWith(
        async (f) => {
          await Promise.all(f.map((c) => c(a))), l();
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
  const n = bo(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || at.highPerfModeEnabled)
      return;
    const i = bi(s, o.descriptor.app), a = {
      app: o.descriptor.app,
      inspectorId: s,
      nodeId: i?.selectedNodeId || "",
      state: null
    }, l = {
      currentTab: `custom-inspector:${s}`
    };
    a.nodeId && await new Promise((f) => {
      e.callHookWith(
        async (c) => {
          await Promise.all(c.map((d) => d(a, l))), f();
        },
        "getInspectorState"
        /* GET_INSPECTOR_STATE */
      );
    }), e.callHookWith(
      async (f) => {
        await Promise.all(f.map((c) => c({
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
    const i = bi(s, r.descriptor.app);
    i && (i.selectedNodeId = o);
  }), e.hook("timelineLayerAdded", ({ options: s, plugin: o }) => {
    F1(s, o.descriptor);
  }), e.hook("timelineEventAdded", ({ options: s, plugin: o }) => {
    var r;
    const i = ["performance", "component-event", "keyboard", "mouse"];
    at.highPerfModeEnabled || !((r = at.timelineLayersState) != null && r[o.descriptor.id]) && !i.includes(s.layerId) || e.callHookWith(
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
  }), e.hook("getComponentBounds", async ({ instance: s }) => Us(s)), e.hook("getComponentName", ({ instance: s }) => ga(s)), e.hook("componentHighlight", ({ uid: s }) => {
    const o = wt.value.instanceMap.get(s);
    o && O1(o);
  }), e.hook("componentUnhighlight", () => {
    Vm();
  }), e;
}
var Cd, Td;
(Td = (Cd = le).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (Cd.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Nd, Dd;
(Dd = (Nd = le).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Nd.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var xd, kd;
(kd = (xd = le).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (xd.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Rd, Id;
(Id = (Rd = le).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Rd.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var Pd, Vd;
(Vd = (Pd = le).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (Pd.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var Os = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function U1() {
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
    timelineLayersState: L1()
  };
}
var Ld, Md;
(Md = (Ld = le)[Os]) != null || (Ld[Os] = U1());
var H1 = bo((e) => {
  Mo.hooks.callHook("devtoolsStateUpdated", { state: e });
});
bo((e, t) => {
  Mo.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var va = new Proxy(le.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? le.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : le.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), wt = new Proxy(le.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? le.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? le.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : le.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function Bm() {
  H1({
    ...le[Os],
    appRecords: va.value,
    activeAppRecordId: wt.id,
    tabs: le.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: le.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function W1(e) {
  le.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Bm();
}
function $1(e) {
  le.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Bm();
}
var at = new Proxy(le[Os], {
  get(e, t) {
    return t === "appRecords" ? va : t === "activeAppRecordId" ? wt.id : t === "tabs" ? le.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? le.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : le[Os][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...le[Os] }, e[t] = n, le[Os][t] = n, !0;
  }
});
function K1(e = {}) {
  var t, n, s;
  const { file: o, host: r, baseUrl: i = window.location.origin, line: a = 0, column: l = 0 } = e;
  if (o) {
    if (r === "chrome-extension") {
      const f = o.replace(/\\/g, "\\\\"), c = (n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? n : "/";
      fetch(`${c}__open-in-editor?file=${encodeURI(o)}`).then((d) => {
        if (!d.ok) {
          const h = `Opening component ${f} failed`;
          console.log(`%c${h}`, "color:red");
        }
      });
    } else if (at.vitePluginDetected) {
      const f = (s = le.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? s : i;
      le.__VUE_INSPECTOR__.openInEditor(f, o, a, l);
    }
  }
}
K();
K();
K();
K();
K();
var Fd, Bd;
(Bd = (Fd = le).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (Fd.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var Wc = new Proxy(le.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function Hl(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function $c(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function z1(e) {
  var t, n, s;
  const o = (n = (t = Wc.find((r) => {
    var i;
    return r[0].id === e && !!((i = r[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (s = o?.settings) != null ? s : null;
}
function jm(e, t) {
  var n, s, o;
  const r = $c(e);
  if (r) {
    const i = localStorage.getItem(r);
    if (i)
      return JSON.parse(i);
  }
  if (e) {
    const i = (s = (n = Wc.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? s : null;
    return Hl((o = i?.settings) != null ? o : {});
  }
  return Hl(t);
}
function q1(e, t) {
  const n = $c(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Hl(t)));
}
function X1(e, t, n) {
  const s = $c(e), o = localStorage.getItem(s), r = JSON.parse(o || "{}"), i = {
    ...r,
    [t]: n
  };
  localStorage.setItem(s, JSON.stringify(i)), Mo.hooks.callHookWith(
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
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
var jd, Ud, Pt = (Ud = (jd = le).__VUE_DEVTOOLS_HOOK) != null ? Ud : jd.__VUE_DEVTOOLS_HOOK = Cm(), Y1 = {
  vueAppInit(e) {
    Pt.hook("app:init", e);
  },
  vueAppUnmount(e) {
    Pt.hook("app:unmount", e);
  },
  vueAppConnected(e) {
    Pt.hook("app:connected", e);
  },
  componentAdded(e) {
    return Pt.hook("component:added", e);
  },
  componentEmit(e) {
    return Pt.hook("component:emit", e);
  },
  componentUpdated(e) {
    return Pt.hook("component:updated", e);
  },
  componentRemoved(e) {
    return Pt.hook("component:removed", e);
  },
  setupDevtoolsPlugin(e) {
    Pt.hook("devtools-plugin:setup", e);
  },
  perfStart(e) {
    return Pt.hook("perf:start", e);
  },
  perfEnd(e) {
    return Pt.hook("perf:end", e);
  }
}, Um = {
  on: Y1,
  setupDevToolsPlugin(e, t) {
    return Pt.callHook("devtools-plugin:setup", e, t);
  }
}, G1 = class {
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
    if (at.highPerfModeEnabled)
      return;
    const n = Fm().find((s) => s.packageName === this.plugin.descriptor.packageName);
    if (n?.id) {
      if (e) {
        const s = [
          e.appContext.app,
          e.uid,
          (t = e.parent) == null ? void 0 : t.uid,
          e
        ];
        Pt.callHook("component:updated", ...s);
      } else
        Pt.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: n.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(e) {
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && q1(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    at.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    at.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return at.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    at.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
  }
  // settings
  getSettings(e) {
    return jm(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
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
}, Q1 = G1;
K();
K();
K();
K();
var J1 = "__vue_devtool_undefined__", Z1 = "__vue_devtool_infinity__", e0 = "__vue_devtool_negative_infinity__", t0 = "__vue_devtool_nan__";
K();
K();
var n0 = {
  [J1]: "undefined",
  [t0]: "NaN",
  [Z1]: "Infinity",
  [e0]: "-Infinity"
};
Object.entries(n0).reduce((e, [t, n]) => (e[n] = t, e), {});
K();
K();
K();
K();
K();
var Hd, Wd;
(Wd = (Hd = le).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (Hd.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function Hm(e, t) {
  return Um.setupDevToolsPlugin(e, t);
}
function s0(e, t) {
  const [n, s] = e;
  if (n.app !== t)
    return;
  const o = new Q1({
    plugin: {
      setupFn: s,
      descriptor: n
    },
    ctx: Mo
  });
  n.packageName === "vuex" && o.on.editInspectorState((r) => {
    o.sendInspectorState(r.inspectorId);
  }), s(o);
}
function Wm(e, t) {
  le.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || at.highPerfModeEnabled && !t?.inspectingComponent || (le.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Wc.forEach((n) => {
    s0(n, e);
  }));
}
K();
K();
var Tr = "__VUE_DEVTOOLS_ROUTER__", wo = "__VUE_DEVTOOLS_ROUTER_INFO__", $d, Kd;
(Kd = ($d = le)[wo]) != null || ($d[wo] = {
  currentRoute: null,
  routes: []
});
var zd, qd;
(qd = (zd = le)[Tr]) != null || (zd[Tr] = {});
new Proxy(le[wo], {
  get(e, t) {
    return le[wo][t];
  }
});
new Proxy(le[Tr], {
  get(e, t) {
    if (t === "value")
      return le[Tr];
  }
});
function o0(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Kc(e) {
  return e.map((t) => {
    let { path: n, name: s, children: o, meta: r } = t;
    return o?.length && (o = Kc(o)), {
      path: n,
      name: s,
      children: o,
      meta: r
    };
  });
}
function r0(e) {
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
      matched: Kc(i)
    };
  }
  return e;
}
function i0(e, t) {
  function n() {
    var s;
    const o = (s = e.app) == null ? void 0 : s.config.globalProperties.$router, r = r0(o?.currentRoute.value), i = Kc(o0(o)), a = console.warn;
    console.warn = () => {
    }, le[wo] = {
      currentRoute: r ? vd(r) : {},
      routes: vd(i)
    }, le[Tr] = o, console.warn = a;
  }
  n(), Um.on.componentUpdated(bo(() => {
    var s;
    ((s = t.value) == null ? void 0 : s.app) === e.app && (n(), !at.highPerfModeEnabled && Mo.hooks.callHook("routerInfoUpdated", { state: le[wo] }));
  }, 200));
}
function a0(e) {
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
      const n = new I1(), s = {
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
      const n = bi(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return T1();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return C1();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = Bl(wt.value, t);
      if (n)
        return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return N1({ id: t });
    },
    // open in editor
    openInEditor: K1,
    // get vue inspector
    getVueInspector: k1,
    // toggle app
    toggleApp(t, n) {
      const s = va.value.find((o) => o.id === t);
      s && ($1(t), W1(s), i0(s, wt), Mm(), Wm(s.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = Bl(wt.value, t);
      if (n) {
        const [s] = Fc(n);
        s && (le.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = s);
      }
    },
    updatePluginSettings(t, n, s) {
      X1(t, n, s);
    },
    getPluginSettings(t) {
      return {
        options: z1(t),
        values: jm(t)
      };
    }
  };
}
K();
var Xd, Yd;
(Yd = (Xd = le).__VUE_DEVTOOLS_ENV__) != null || (Xd.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var Gd = j1(), Qd, Jd;
(Jd = (Qd = le).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (Qd.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: Gd,
  get state() {
    return {
      ...at,
      activeAppRecordId: wt.id,
      activeAppRecord: wt.value,
      appRecords: va.value
    };
  },
  api: a0(Gd)
});
var Mo = le.__VUE_DEVTOOLS_KIT_CONTEXT__;
K();
l1(u1());
var Zd, ef;
(ef = (Zd = le).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (Zd.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
K();
K();
function l0(e) {
  at.highPerfModeEnabled = e ?? !at.highPerfModeEnabled, !e && wt.value && Wm(wt.value.app);
}
K();
K();
K();
function c0(e) {
  at.devtoolsClientDetected = {
    ...at.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(at.devtoolsClientDetected).some(Boolean);
  l0(!t);
}
var tf, nf;
(nf = (tf = le).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (tf.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = c0);
K();
K();
K();
K();
K();
K();
K();
var u0 = class {
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
}, $m = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new u0();
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
}, d0 = class extends $m {
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
K();
K();
function f0(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function p0(e, t) {
  const n = f0(e);
  if ("find" in n)
    return n.find(t);
  const s = n;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t(r))
      return r;
  }
}
function Ao(e, t) {
  Object.entries(e).forEach(([n, s]) => t(s, n));
}
function wi(e, t) {
  return e.indexOf(t) !== -1;
}
function sf(e, t) {
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (t(s))
      return s;
  }
}
var h0 = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return p0(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
K();
K();
var m0 = (e) => Object.prototype.toString.call(e).slice(8, -1), Km = (e) => typeof e > "u", g0 = (e) => e === null, Nr = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Wl = (e) => Nr(e) && Object.keys(e).length === 0, is = (e) => Array.isArray(e), v0 = (e) => typeof e == "string", _0 = (e) => typeof e == "number" && !isNaN(e), E0 = (e) => typeof e == "boolean", y0 = (e) => e instanceof RegExp, Dr = (e) => e instanceof Map, xr = (e) => e instanceof Set, zm = (e) => m0(e) === "Symbol", b0 = (e) => e instanceof Date && !isNaN(e.valueOf()), w0 = (e) => e instanceof Error, of = (e) => typeof e == "number" && isNaN(e), A0 = (e) => E0(e) || g0(e) || Km(e) || _0(e) || v0(e) || zm(e), O0 = (e) => typeof e == "bigint", S0 = (e) => e === 1 / 0 || e === -1 / 0, C0 = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), T0 = (e) => e instanceof URL;
K();
var qm = (e) => e.replace(/\./g, "\\."), Ga = (e) => e.map(String).map(qm).join("."), fr = (e) => {
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
K();
function gn(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Xm = [
  gn(Km, "undefined", () => null, () => {
  }),
  gn(O0, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  gn(b0, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  gn(w0, "Error", (e, t) => {
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
  gn(y0, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  gn(
    xr,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  gn(Dr, "map", (e) => [...e.entries()], (e) => new Map(e)),
  gn((e) => of(e) || S0(e), "number", (e) => of(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  gn((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  gn(T0, "URL", (e) => e.toString(), (e) => new URL(e))
];
function _a(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Ym = _a((e, t) => zm(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const s = n.symbolRegistry.getValue(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown symbol");
  return s;
}), N0 = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Gm = _a(C0, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = N0[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function Qm(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var Jm = _a(Qm, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), Zm = _a((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const s = n.customTransformerRegistry.findByName(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown custom value");
  return s.deserialize(e);
}), D0 = [Jm, Ym, Zm, Gm], rf = (e, t) => {
  const n = sf(D0, (o) => o.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const s = sf(Xm, (o) => o.isApplicable(e, t));
  if (s)
    return {
      value: s.transform(e, t),
      type: s.annotation
    };
}, eg = {};
Xm.forEach((e) => {
  eg[e.annotation] = e;
});
var x0 = (e, t, n) => {
  if (is(t))
    switch (t[0]) {
      case "symbol":
        return Ym.untransform(e, t, n);
      case "class":
        return Jm.untransform(e, t, n);
      case "custom":
        return Zm.untransform(e, t, n);
      case "typed-array":
        return Gm.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const s = eg[t];
    if (!s)
      throw new Error("Unknown transformation: " + t);
    return s.untransform(e, n);
  }
};
K();
var co = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function tg(e) {
  if (wi(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (wi(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (wi(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var k0 = (e, t) => {
  tg(t);
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (xr(e))
      e = co(e, +s);
    else if (Dr(e)) {
      const o = +s, r = +t[++n] == 0 ? "key" : "value", i = co(e, o);
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
}, $l = (e, t, n) => {
  if (tg(t), t.length === 0)
    return n(e);
  let s = e;
  for (let r = 0; r < t.length - 1; r++) {
    const i = t[r];
    if (is(s)) {
      const a = +i;
      s = s[a];
    } else if (Nr(s))
      s = s[i];
    else if (xr(s)) {
      const a = +i;
      s = co(s, a);
    } else if (Dr(s)) {
      if (r === t.length - 2)
        break;
      const l = +i, f = +t[++r] == 0 ? "key" : "value", c = co(s, l);
      switch (f) {
        case "key":
          s = c;
          break;
        case "value":
          s = s.get(c);
          break;
      }
    }
  }
  const o = t[t.length - 1];
  if (is(s) ? s[+o] = n(s[+o]) : Nr(s) && (s[o] = n(s[o])), xr(s)) {
    const r = co(s, +o), i = n(r);
    r !== i && (s.delete(r), s.add(i));
  }
  if (Dr(s)) {
    const r = +t[t.length - 2], i = co(s, r);
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
function Kl(e, t, n = []) {
  if (!e)
    return;
  if (!is(e)) {
    Ao(e, (r, i) => Kl(r, t, [...n, ...fr(i)]));
    return;
  }
  const [s, o] = e;
  o && Ao(o, (r, i) => {
    Kl(r, t, [...n, ...fr(i)]);
  }), t(s, n);
}
function R0(e, t, n) {
  return Kl(t, (s, o) => {
    e = $l(e, o, (r) => x0(r, s, n));
  }), e;
}
function I0(e, t) {
  function n(s, o) {
    const r = k0(e, fr(o));
    s.map(fr).forEach((i) => {
      e = $l(e, i, () => r);
    });
  }
  if (is(t)) {
    const [s, o] = t;
    s.forEach((r) => {
      e = $l(e, fr(r), () => e);
    }), o && Ao(o, n);
  } else
    Ao(t, n);
  return e;
}
var P0 = (e, t) => Nr(e) || is(e) || Dr(e) || xr(e) || Qm(e, t);
function V0(e, t, n) {
  const s = n.get(e);
  s ? s.push(t) : n.set(e, [t]);
}
function L0(e, t) {
  const n = {};
  let s;
  return e.forEach((o) => {
    if (o.length <= 1)
      return;
    t || (o = o.map((a) => a.map(String)).sort((a, l) => a.length - l.length));
    const [r, ...i] = o;
    r.length === 0 ? s = i.map(Ga) : n[Ga(r)] = i.map(Ga);
  }), s ? Wl(n) ? [s] : [s, n] : Wl(n) ? void 0 : n;
}
var ng = (e, t, n, s, o = [], r = [], i = /* @__PURE__ */ new Map()) => {
  var a;
  const l = A0(e);
  if (!l) {
    V0(e, o, t);
    const m = i.get(e);
    if (m)
      return s ? {
        transformedValue: null
      } : m;
  }
  if (!P0(e, n)) {
    const m = rf(e, n), g = m ? {
      transformedValue: m.value,
      annotations: [m.type]
    } : {
      transformedValue: e
    };
    return l || i.set(e, g), g;
  }
  if (wi(r, e))
    return {
      transformedValue: null
    };
  const f = rf(e, n), c = (a = f?.value) != null ? a : e, d = is(c) ? [] : {}, h = {};
  Ao(c, (m, g) => {
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);
    const v = ng(m, t, n, s, [...o, g], [...r, e], i);
    d[g] = v.transformedValue, is(v.annotations) ? h[g] = v.annotations : Nr(v.annotations) && Ao(v.annotations, (E, b) => {
      h[qm(g) + "." + b] = E;
    });
  });
  const p = Wl(h) ? {
    transformedValue: d,
    annotations: f ? [f.type] : void 0
  } : {
    transformedValue: d,
    annotations: f ? [f.type, h] : h
  };
  return l || i.set(e, p), p;
};
K();
K();
function sg(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function af(e) {
  return sg(e) === "Array";
}
function M0(e) {
  if (sg(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function F0(e, t, n, s, o) {
  const r = {}.propertyIsEnumerable.call(s, t) ? "enumerable" : "nonenumerable";
  r === "enumerable" && (e[t] = n), o && r === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function zl(e, t = {}) {
  if (af(e))
    return e.map((o) => zl(o, t));
  if (!M0(e))
    return e;
  const n = Object.getOwnPropertyNames(e), s = Object.getOwnPropertySymbols(e);
  return [...n, ...s].reduce((o, r) => {
    if (af(t.props) && !t.props.includes(r))
      return o;
    const i = e[r], a = zl(i, t);
    return F0(o, r, a, e, t.nonenumerable), o;
  }, {});
}
var Ke = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new d0(), this.symbolRegistry = new $m((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new h0(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = ng(e, t, this, this.dedupe), s = {
      json: n.transformedValue
    };
    n.annotations && (s.meta = {
      ...s.meta,
      values: n.annotations
    });
    const o = L0(t, this.dedupe);
    return o && (s.meta = {
      ...s.meta,
      referentialEqualities: o
    }), s;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let s = zl(t);
    return n?.values && (s = R0(s, n.values, this)), n?.referentialEqualities && (s = I0(s, n.referentialEqualities)), s;
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
Ke.defaultInstance = new Ke();
Ke.serialize = Ke.defaultInstance.serialize.bind(Ke.defaultInstance);
Ke.deserialize = Ke.defaultInstance.deserialize.bind(Ke.defaultInstance);
Ke.stringify = Ke.defaultInstance.stringify.bind(Ke.defaultInstance);
Ke.parse = Ke.defaultInstance.parse.bind(Ke.defaultInstance);
Ke.registerClass = Ke.defaultInstance.registerClass.bind(Ke.defaultInstance);
Ke.registerSymbol = Ke.defaultInstance.registerSymbol.bind(Ke.defaultInstance);
Ke.registerCustom = Ke.defaultInstance.registerCustom.bind(Ke.defaultInstance);
Ke.allowErrorProps = Ke.defaultInstance.allowErrorProps.bind(Ke.defaultInstance);
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
K();
var lf, cf;
(cf = (lf = le).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (lf.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var uf, df;
(df = (uf = le).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (uf.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var ff, pf;
(pf = (ff = le).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (ff.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var hf, mf;
(mf = (hf = le).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (hf.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var gf, vf;
(vf = (gf = le).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (gf.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var _f, Ef;
(Ef = (_f = le).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (_f.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
K();
K();
K();
K();
K();
K();
K();
var Ie = {};
let or;
const kr = (e) => or = e, og = Ie.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Hs(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var An;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(An || (An = {}));
const ns = typeof window < "u", yf = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function B0(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function zc(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    ag(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function rg(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Ai(e) {
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
const Oi = typeof navigator == "object" ? navigator : { userAgent: "" }, ig = /Macintosh/.test(Oi.userAgent) && /AppleWebKit/.test(Oi.userAgent) && !/Safari/.test(Oi.userAgent), ag = ns ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ig ? j0 : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Oi ? U0 : (
      // Fallback to using FileReader and a popup
      H0
    )
  )
) : () => {
};
function j0(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? rg(s.href) ? zc(e, t, n) : (s.target = "_blank", Ai(s)) : Ai(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    Ai(s);
  }, 0));
}
function U0(e, t = "download", n) {
  if (typeof e == "string")
    if (rg(e))
      zc(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        Ai(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(B0(e, n), t);
}
function H0(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return zc(e, t, n);
  const o = e.type === "application/octet-stream", r = /constructor/i.test(String(yf.HTMLElement)) || "safari" in yf, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || o && r || ig) && typeof FileReader < "u") {
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
function lt(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function qc(e) {
  return "_a" in e && "install" in e;
}
function lg() {
  if (!("clipboard" in navigator))
    return lt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function cg(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (lt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function W0(e) {
  if (!lg())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), lt("Global state copied to clipboard.");
    } catch (t) {
      if (cg(t))
        return;
      lt("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function $0(e) {
  if (!lg())
    try {
      ug(e, JSON.parse(await navigator.clipboard.readText())), lt("Global state pasted from clipboard.");
    } catch (t) {
      if (cg(t))
        return;
      lt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function K0(e) {
  try {
    ag(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    lt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Vn;
function z0() {
  Vn || (Vn = document.createElement("input"), Vn.type = "file", Vn.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Vn.onchange = async () => {
        const s = Vn.files;
        if (!s)
          return t(null);
        const o = s.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }, Vn.oncancel = () => t(null), Vn.onerror = n, Vn.click();
    });
  }
  return e;
}
async function q0(e) {
  try {
    const n = await z0()();
    if (!n)
      return;
    const { text: s, file: o } = n;
    ug(e, JSON.parse(s)), lt(`Global state imported from "${o.name}".`);
  } catch (t) {
    lt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function ug(e, t) {
  for (const n in t) {
    const s = e.state.value[n];
    s ? Object.assign(s, t[n]) : e.state.value[n] = t[n];
  }
}
function Qt(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const dg = "🍍 Pinia (root)", Si = "_root";
function X0(e) {
  return qc(e) ? {
    id: Si,
    label: dg
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Y0(e) {
  if (qc(e)) {
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
function G0(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Qt(e.type),
    key: Qt(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Q0(e) {
  switch (e) {
    case An.direct:
      return "mutation";
    case An.patchFunction:
      return "$patch";
    case An.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let uo = !0;
const Ci = [], bs = "pinia:mutations", pt = "pinia", { assign: J0 } = Object, Xi = (e) => "🍍 " + e;
function Z0(e, t) {
  Hm({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Ci,
    app: e
  }, (n) => {
    typeof n.now != "function" && lt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: bs,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: pt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            W0(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await $0(t), n.sendInspectorTree(pt), n.sendInspectorState(pt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            K0(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await q0(t), n.sendInspectorTree(pt), n.sendInspectorState(pt);
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
            o ? typeof o.$reset != "function" ? lt(`Cannot reset "${s}" store because it doesn't have a "$reset" method implemented.`, "warn") : (o.$reset(), lt(`Store "${s}" reset.`)) : lt(`Cannot reset "${s}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((s) => {
      const o = s.componentInstance && s.componentInstance.proxy;
      if (o && o._pStores) {
        const r = s.componentInstance.proxy._pStores;
        Object.values(r).forEach((i) => {
          s.instanceData.state.push({
            type: Xi(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: Ee(i.$state),
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
            type: Xi(i.$id),
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
      if (s.app === e && s.inspectorId === pt) {
        let o = [t];
        o = o.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? o.filter((r) => "$id" in r ? r.$id.toLowerCase().includes(s.filter.toLowerCase()) : dg.toLowerCase().includes(s.filter.toLowerCase())) : o).map(X0);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === pt) {
        const o = s.nodeId === Si ? t : t._s.get(s.nodeId);
        if (!o)
          return;
        o && (s.nodeId !== Si && (globalThis.$store = Ee(o)), s.state = Y0(o));
      }
    }), n.on.editInspectorState((s) => {
      if (s.app === e && s.inspectorId === pt) {
        const o = s.nodeId === Si ? t : t._s.get(s.nodeId);
        if (!o)
          return lt(`store "${s.nodeId}" not found`, "error");
        const { path: r } = s;
        qc(o) ? r.unshift("state") : (r.length !== 1 || !o._customProperties.has(r[0]) || r[0] in o.$state) && r.unshift("$state"), uo = !1, s.set(o, r, s.state.value), uo = !0;
      }
    }), n.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const o = s.type.replace(/^🍍\s*/, ""), r = t._s.get(o);
        if (!r)
          return lt(`store "${o}" not found`, "error");
        const { path: i } = s;
        if (i[0] !== "state")
          return lt(`Invalid path for store "${o}":
${i}
Only state can be modified.`);
        i[0] = "$state", uo = !1, s.set(r, i, s.state.value), uo = !0;
      }
    });
  });
}
function ew(e, t) {
  Ci.includes(Xi(t.$id)) || Ci.push(Xi(t.$id)), Hm({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Ci,
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
      const c = fg++;
      n.addTimelineEvent({
        layerId: bs,
        event: {
          time: s(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: Qt(t.$id),
            action: Qt(l),
            args: f
          },
          groupId: c
        }
      }), i((d) => {
        ss = void 0, n.addTimelineEvent({
          layerId: bs,
          event: {
            time: s(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: Qt(t.$id),
              action: Qt(l),
              args: f,
              result: d
            },
            groupId: c
          }
        });
      }), a((d) => {
        ss = void 0, n.addTimelineEvent({
          layerId: bs,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: Qt(t.$id),
              action: Qt(l),
              args: f,
              error: d
            },
            groupId: c
          }
        });
      });
    }, !0), t._customProperties.forEach((i) => {
      Wt(() => ie(t[i]), (a, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(pt), uo && n.addTimelineEvent({
          layerId: bs,
          event: {
            time: s(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: a,
              oldValue: l
            },
            groupId: ss
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: i, type: a }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(pt), !uo)
        return;
      const f = {
        time: s(),
        title: Q0(a),
        data: J0({ store: Qt(t.$id) }, G0(i)),
        groupId: ss
      };
      a === An.patchFunction ? f.subtitle = "⤵️" : a === An.patchObject ? f.subtitle = "🧩" : i && !Array.isArray(i) && (f.subtitle = i.type), i && (f.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: bs,
        event: f
      });
    }, { detached: !0, flush: "sync" });
    const o = t._hotUpdate;
    t._hotUpdate = ts((i) => {
      o(i), n.addTimelineEvent({
        layerId: bs,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: Qt(t.$id),
            info: Qt("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(pt), n.sendInspectorState(pt);
    });
    const { $dispose: r } = t;
    t.$dispose = () => {
      r(), n.notifyComponentUpdate(), n.sendInspectorTree(pt), n.sendInspectorState(pt), n.getSettings().logStoreChanges && lt(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(pt), n.sendInspectorState(pt), n.getSettings().logStoreChanges && lt(`"${t.$id}" store installed 🆕`);
  });
}
let fg = 0, ss;
function bf(e, t, n) {
  const s = t.reduce((o, r) => (o[r] = Ee(e)[r], o), {});
  for (const o in s)
    e[o] = function() {
      const r = fg, i = n ? new Proxy(e, {
        get(...l) {
          return ss = r, Reflect.get(...l);
        },
        set(...l) {
          return ss = r, Reflect.set(...l);
        }
      }) : e;
      ss = r;
      const a = s[o].apply(i, arguments);
      return ss = void 0, a;
    };
}
function tw({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      bf(t, Object.keys(n.actions), t._isOptionsAPI);
      const s = t._hotUpdate;
      Ee(t)._hotUpdate = function(o) {
        s.apply(this, arguments), bf(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    ew(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function nw() {
  const e = Gp(!0), t = e.run(() => ee({}));
  let n = [], s = [];
  const o = ts({
    install(r) {
      kr(o), o._a = r, r.provide(og, o), r.config.globalProperties.$pinia = o, Ie.NODE_ENV !== "production" && Ie.NODE_ENV !== "test" && ns && Z0(r, o), s.forEach((i) => n.push(i)), s = [];
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
  return Ie.NODE_ENV !== "production" && Ie.NODE_ENV !== "test" && ns && typeof Proxy < "u" && o.use(tw), o;
}
function pg(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    Hs(o) && Hs(s) && !$e(s) && !nn(s) ? e[n] = pg(o, s) : e[n] = s;
  }
  return e;
}
const hg = () => {
};
function wf(e, t, n, s = hg) {
  e.push(t);
  const o = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), s());
  };
  return !n && Qp() && V_(o), o;
}
function eo(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const sw = (e) => e(), Af = Symbol(), Qa = Symbol();
function ql(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    Hs(o) && Hs(s) && e.hasOwnProperty(n) && !$e(s) && !nn(s) ? e[n] = ql(o, s) : e[n] = s;
  }
  return e;
}
const ow = Ie.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function rw(e) {
  return !Hs(e) || !Object.prototype.hasOwnProperty.call(e, ow);
}
const { assign: Ht } = Object;
function Of(e) {
  return !!($e(e) && e.effect);
}
function Sf(e, t, n, s) {
  const { state: o, actions: r, getters: i } = t, a = n.state.value[e];
  let l;
  function f() {
    !a && (Ie.NODE_ENV === "production" || !s) && (n.state.value[e] = o ? o() : {});
    const c = Ie.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      an(ee(o ? o() : {}).value)
    ) : an(n.state.value[e]);
    return Ht(c, r, Object.keys(i || {}).reduce((d, h) => (Ie.NODE_ENV !== "production" && h in c && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${e}".`), d[h] = ts(re(() => {
      kr(n);
      const p = n._s.get(e);
      return i[h].call(p, p);
    })), d), {}));
  }
  return l = Xl(e, f, t, n, s, !0), l;
}
function Xl(e, t, n = {}, s, o, r) {
  let i;
  const a = Ht({ actions: {} }, n);
  if (Ie.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const l = { deep: !0 };
  Ie.NODE_ENV !== "production" && (l.onTrigger = (F) => {
    f ? p = F : f == !1 && !x._hotUpdating && (Array.isArray(p) ? p.push(F) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let f, c, d = [], h = [], p;
  const m = s.state.value[e];
  !r && !m && (Ie.NODE_ENV === "production" || !o) && (s.state.value[e] = {});
  const g = ee({});
  let v;
  function E(F) {
    let B;
    f = c = !1, Ie.NODE_ENV !== "production" && (p = []), typeof F == "function" ? (F(s.state.value[e]), B = {
      type: An.patchFunction,
      storeId: e,
      events: p
    }) : (ql(s.state.value[e], F), B = {
      type: An.patchObject,
      payload: F,
      storeId: e,
      events: p
    });
    const C = v = Symbol();
    Eo().then(() => {
      v === C && (f = !0);
    }), c = !0, eo(d, B, s.state.value[e]);
  }
  const b = r ? function() {
    const { state: B } = n, C = B ? B() : {};
    this.$patch((I) => {
      Ht(I, C);
    });
  } : (
    /* istanbul ignore next */
    Ie.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : hg
  );
  function y() {
    i.stop(), d = [], h = [], s._s.delete(e);
  }
  const A = (F, B = "") => {
    if (Af in F)
      return F[Qa] = B, F;
    const C = function() {
      kr(s);
      const I = Array.from(arguments), Y = [], pe = [];
      function D(te) {
        Y.push(te);
      }
      function R(te) {
        pe.push(te);
      }
      eo(h, {
        args: I,
        name: C[Qa],
        store: x,
        after: D,
        onError: R
      });
      let H;
      try {
        H = F.apply(this && this.$id === e ? this : x, I);
      } catch (te) {
        throw eo(pe, te), te;
      }
      return H instanceof Promise ? H.then((te) => (eo(Y, te), te)).catch((te) => (eo(pe, te), Promise.reject(te))) : (eo(Y, H), H);
    };
    return C[Af] = !0, C[Qa] = B, C;
  }, O = /* @__PURE__ */ ts({
    actions: {},
    getters: {},
    state: [],
    hotState: g
  }), T = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: wf.bind(null, h),
    $patch: E,
    $reset: b,
    $subscribe(F, B = {}) {
      const C = wf(d, F, B.detached, () => I()), I = i.run(() => Wt(() => s.state.value[e], (Y) => {
        (B.flush === "sync" ? c : f) && F({
          storeId: e,
          type: An.direct,
          events: p
        }, Y);
      }, Ht({}, l, B)));
      return C;
    },
    $dispose: y
  }, x = Fs(Ie.NODE_ENV !== "production" || Ie.NODE_ENV !== "production" && Ie.NODE_ENV !== "test" && ns ? Ht(
    {
      _hmrPayload: O,
      _customProperties: ts(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    T
    // must be added later
    // setupStore
  ) : T);
  s._s.set(e, x);
  const L = (s._a && s._a.runWithContext || sw)(() => s._e.run(() => (i = Gp()).run(() => t({ action: A }))));
  for (const F in L) {
    const B = L[F];
    if ($e(B) && !Of(B) || nn(B))
      Ie.NODE_ENV !== "production" && o ? g.value[F] = hi(L, F) : r || (m && rw(B) && ($e(B) ? B.value = m[F] : ql(B, m[F])), s.state.value[e][F] = B), Ie.NODE_ENV !== "production" && O.state.push(F);
    else if (typeof B == "function") {
      const C = Ie.NODE_ENV !== "production" && o ? B : A(B, F);
      L[F] = C, Ie.NODE_ENV !== "production" && (O.actions[F] = B), a.actions[F] = B;
    } else Ie.NODE_ENV !== "production" && Of(B) && (O.getters[F] = r ? (
      // @ts-expect-error
      n.getters[F]
    ) : B, ns && (L._getters || // @ts-expect-error: same
    (L._getters = ts([]))).push(F));
  }
  if (Ht(x, L), Ht(Ee(x), L), Object.defineProperty(x, "$state", {
    get: () => Ie.NODE_ENV !== "production" && o ? g.value : s.state.value[e],
    set: (F) => {
      if (Ie.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      E((B) => {
        Ht(B, F);
      });
    }
  }), Ie.NODE_ENV !== "production" && (x._hotUpdate = ts((F) => {
    x._hotUpdating = !0, F._hmrPayload.state.forEach((B) => {
      if (B in x.$state) {
        const C = F.$state[B], I = x.$state[B];
        typeof C == "object" && Hs(C) && Hs(I) ? pg(C, I) : F.$state[B] = I;
      }
      x[B] = hi(F.$state, B);
    }), Object.keys(x.$state).forEach((B) => {
      B in F.$state || delete x[B];
    }), f = !1, c = !1, s.state.value[e] = hi(F._hmrPayload, "hotState"), c = !0, Eo().then(() => {
      f = !0;
    });
    for (const B in F._hmrPayload.actions) {
      const C = F[B];
      x[B] = //
      A(C, B);
    }
    for (const B in F._hmrPayload.getters) {
      const C = F._hmrPayload.getters[B], I = r ? (
        // special handling of options api
        re(() => (kr(s), C.call(x, x)))
      ) : C;
      x[B] = //
      I;
    }
    Object.keys(x._hmrPayload.getters).forEach((B) => {
      B in F._hmrPayload.getters || delete x[B];
    }), Object.keys(x._hmrPayload.actions).forEach((B) => {
      B in F._hmrPayload.actions || delete x[B];
    }), x._hmrPayload = F._hmrPayload, x._getters = F._getters, x._hotUpdating = !1;
  })), Ie.NODE_ENV !== "production" && Ie.NODE_ENV !== "test" && ns) {
    const F = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((B) => {
      Object.defineProperty(x, B, Ht({ value: x[B] }, F));
    });
  }
  return s._p.forEach((F) => {
    if (Ie.NODE_ENV !== "production" && Ie.NODE_ENV !== "test" && ns) {
      const B = i.run(() => F({
        store: x,
        app: s._a,
        pinia: s,
        options: a
      }));
      Object.keys(B || {}).forEach((C) => x._customProperties.add(C)), Ht(x, B);
    } else
      Ht(x, i.run(() => F({
        store: x,
        app: s._a,
        pinia: s,
        options: a
      })));
  }), Ie.NODE_ENV !== "production" && x.$state && typeof x.$state == "object" && typeof x.$state.constructor == "function" && !x.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${x.$id}".`), m && r && n.hydrate && n.hydrate(x.$state, m), f = !0, c = !0, x;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function $r(e, t, n) {
  let s;
  const o = typeof t == "function";
  s = o ? n : t;
  function r(i, a) {
    const l = iy();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (Ie.NODE_ENV === "test" && or && or._testing ? null : i) || (l ? Ot(og, null) : null), i && kr(i), Ie.NODE_ENV !== "production" && !or)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = or, i._s.has(e) || (o ? Xl(e, t, s, i) : Sf(e, s, i), Ie.NODE_ENV !== "production" && (r._pinia = i));
    const f = i._s.get(e);
    if (Ie.NODE_ENV !== "production" && a) {
      const c = "__hot:" + e, d = o ? Xl(c, t, s, i, !0) : Sf(c, Ht({}, s), i, !0);
      a._hotUpdate(d), delete i.state.value[c], i._s.delete(c);
    }
    if (Ie.NODE_ENV !== "production" && ns) {
      const c = kn();
      if (c && c.proxy && // avoid adding stores that are just built for hot module replacement
      !a) {
        const d = c.proxy, h = "_pStores" in d ? d._pStores : d._pStores = {};
        h[e] = f;
      }
    }
    return f;
  }
  return r.$id = e, r;
}
function Ea(e) {
  const t = Ee(e), n = {};
  for (const s in t) {
    const o = t[s];
    o.effect ? n[s] = // ...
    re({
      get: () => e[s],
      set(r) {
        e[s] = r;
      }
    }) : ($e(o) || nn(o)) && (n[s] = // ---
    hi(e, s));
  }
  return n;
}
function iw() {
  return mg().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function mg() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const aw = typeof Proxy == "function", lw = "devtools-plugin:setup", cw = "plugin:settings:set";
let to, Yl;
function uw() {
  var e;
  return to !== void 0 || (typeof window < "u" && window.performance ? (to = !0, Yl = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (to = !0, Yl = globalThis.perf_hooks.performance) : to = !1), to;
}
function dw() {
  return uw() ? Yl.now() : Date.now();
}
class fw {
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
        return dw();
      }
    }, n && n.on(cw, (i, a) => {
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
function pw(e, t) {
  const n = e, s = mg(), o = iw(), r = aw && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r))
    o.emit(lw, e, t);
  else {
    const i = r ? new fw(n, o) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
var ye = {};
const Fn = typeof document < "u";
function gg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function hw(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && gg(e.default);
}
const Fe = Object.assign;
function Ja(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = Lt(o) ? o.map(e) : e(o);
  }
  return n;
}
const pr = () => {
}, Lt = Array.isArray;
function Ce(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const vg = /#/g, mw = /&/g, gw = /\//g, vw = /=/g, _w = /\?/g, _g = /\+/g, Ew = /%5B/g, yw = /%5D/g, Eg = /%5E/g, bw = /%60/g, yg = /%7B/g, ww = /%7C/g, bg = /%7D/g, Aw = /%20/g;
function Xc(e) {
  return encodeURI("" + e).replace(ww, "|").replace(Ew, "[").replace(yw, "]");
}
function Ow(e) {
  return Xc(e).replace(yg, "{").replace(bg, "}").replace(Eg, "^");
}
function Gl(e) {
  return Xc(e).replace(_g, "%2B").replace(Aw, "+").replace(vg, "%23").replace(mw, "%26").replace(bw, "`").replace(yg, "{").replace(bg, "}").replace(Eg, "^");
}
function Sw(e) {
  return Gl(e).replace(vw, "%3D");
}
function Cw(e) {
  return Xc(e).replace(vg, "%23").replace(_w, "%3F");
}
function Tw(e) {
  return e == null ? "" : Cw(e).replace(gw, "%2F");
}
function Oo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    ye.NODE_ENV !== "production" && Ce(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const Nw = /\/$/, Dw = (e) => e.replace(Nw, "");
function Za(e, t, n = "/") {
  let s, o = {}, r = "", i = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return a < l && a >= 0 && (l = -1), l > -1 && (s = t.slice(0, l), r = t.slice(l + 1, a > -1 ? a : t.length), o = e(r)), a > -1 && (s = s || t.slice(0, a), i = t.slice(a, t.length)), s = Rw(s ?? t, n), {
    fullPath: s + (r && "?") + r + i,
    path: s,
    query: o,
    hash: Oo(i)
  };
}
function xw(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Cf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Tf(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && as(t.matched[s], n.matched[o]) && wg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function as(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function wg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!kw(e[n], t[n]))
      return !1;
  return !0;
}
function kw(e, t) {
  return Lt(e) ? Nf(e, t) : Lt(t) ? Nf(t, e) : e === t;
}
function Nf(e, t) {
  return Lt(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Rw(e, t) {
  if (e.startsWith("/"))
    return e;
  if (ye.NODE_ENV !== "production" && !t.startsWith("/"))
    return Ce(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
const Xn = {
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
var Rr;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Rr || (Rr = {}));
var hr;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(hr || (hr = {}));
function Iw(e) {
  if (!e)
    if (Fn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Dw(e);
}
const Pw = /^[^#]+#/;
function Vw(e, t) {
  return e.replace(Pw, "#") + t;
}
function Lw(e, t) {
  const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  };
}
const ya = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Mw(e) {
  let t;
  if ("el" in e) {
    const n = e.el, s = typeof n == "string" && n.startsWith("#");
    if (ye.NODE_ENV !== "production" && typeof e.el == "string" && (!s || !document.getElementById(e.el.slice(1))))
      try {
        const r = document.querySelector(e.el);
        if (s && r) {
          Ce(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        Ce(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      ye.NODE_ENV !== "production" && Ce(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Lw(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Df(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ql = /* @__PURE__ */ new Map();
function Fw(e, t) {
  Ql.set(e, t);
}
function Bw(e) {
  const t = Ql.get(e);
  return Ql.delete(e), t;
}
let jw = () => location.protocol + "//" + location.host;
function Ag(e, t) {
  const { pathname: n, search: s, hash: o } = t, r = e.indexOf("#");
  if (r > -1) {
    let a = o.includes(e.slice(r)) ? e.slice(r).length : 1, l = o.slice(a);
    return l[0] !== "/" && (l = "/" + l), Cf(l, "");
  }
  return Cf(n, e) + s + o;
}
function Uw(e, t, n, s) {
  let o = [], r = [], i = null;
  const a = ({ state: h }) => {
    const p = Ag(e, location), m = n.value, g = t.value;
    let v = 0;
    if (h) {
      if (n.value = p, t.value = h, i && i === m) {
        i = null;
        return;
      }
      v = g ? h.position - g.position : 0;
    } else
      s(p);
    o.forEach((E) => {
      E(n.value, m, {
        delta: v,
        type: Rr.pop,
        direction: v ? v > 0 ? hr.forward : hr.back : hr.unknown
      });
    });
  };
  function l() {
    i = n.value;
  }
  function f(h) {
    o.push(h);
    const p = () => {
      const m = o.indexOf(h);
      m > -1 && o.splice(m, 1);
    };
    return r.push(p), p;
  }
  function c() {
    const { history: h } = window;
    h.state && h.replaceState(Fe({}, h.state, { scroll: ya() }), "");
  }
  function d() {
    for (const h of r)
      h();
    r = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", c);
  }
  return window.addEventListener("popstate", a), window.addEventListener("beforeunload", c, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: f,
    destroy: d
  };
}
function xf(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? ya() : null
  };
}
function Hw(e) {
  const { history: t, location: n } = window, s = {
    value: Ag(e, n)
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
  function r(l, f, c) {
    const d = e.indexOf("#"), h = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + l : jw() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](f, "", h), o.value = f;
    } catch (p) {
      ye.NODE_ENV !== "production" ? Ce("Error with push/replace State", p) : console.error(p), n[c ? "replace" : "assign"](h);
    }
  }
  function i(l, f) {
    const c = Fe({}, t.state, xf(
      o.value.back,
      // keep back and forward entries but override current position
      l,
      o.value.forward,
      !0
    ), f, { position: o.value.position });
    r(l, c, !0), s.value = l;
  }
  function a(l, f) {
    const c = Fe(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: l,
        scroll: ya()
      }
    );
    ye.NODE_ENV !== "production" && !t.state && Ce(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), r(c.current, c, !0);
    const d = Fe({}, xf(s.value, l, null), { position: c.position + 1 }, f);
    r(l, d, !1), s.value = l;
  }
  return {
    location: s,
    state: o,
    push: a,
    replace: i
  };
}
function Ww(e) {
  e = Iw(e);
  const t = Hw(e), n = Uw(e, t.state, t.location, t.replace);
  function s(r, i = !0) {
    i || n.pauseListeners(), history.go(r);
  }
  const o = Fe({
    // it's overridden right after
    location: "",
    base: e,
    go: s,
    createHref: Vw.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function $w(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), ye.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Ce(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Ww(e);
}
function Yi(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Og(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Jl = Symbol(ye.NODE_ENV !== "production" ? "navigation failure" : "");
var kf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(kf || (kf = {}));
const Kw = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${qw(t)}" via a navigation guard.`;
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
function So(e, t) {
  return ye.NODE_ENV !== "production" ? Fe(new Error(Kw[e](t)), {
    type: e,
    [Jl]: !0
  }, t) : Fe(new Error(), {
    type: e,
    [Jl]: !0
  }, t);
}
function Ln(e, t) {
  return e instanceof Error && Jl in e && (t == null || !!(e.type & t));
}
const zw = ["params", "query", "hash"];
function qw(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of zw)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Rf = "[^/]+?", Xw = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Yw = /[.+*?^${}()[\]/\\]/g;
function Gw(e, t) {
  const n = Fe({}, Xw, t), s = [];
  let o = n.start ? "^" : "";
  const r = [];
  for (const f of e) {
    const c = f.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !f.length && (o += "/");
    for (let d = 0; d < f.length; d++) {
      const h = f[d];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        d || (o += "/"), o += h.value.replace(Yw, "\\$&"), p += 40;
      else if (h.type === 1) {
        const { value: m, repeatable: g, optional: v, regexp: E } = h;
        r.push({
          name: m,
          repeatable: g,
          optional: v
        });
        const b = E || Rf;
        if (b !== Rf) {
          p += 10;
          try {
            new RegExp(`(${b})`);
          } catch (A) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${b}): ` + A.message);
          }
        }
        let y = g ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        d || (y = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        v && f.length < 2 ? `(?:/${y})` : "/" + y), v && (y += "?"), o += y, p += 20, v && (p += -8), g && (p += -20), b === ".*" && (p += -50);
      }
      c.push(p);
    }
    s.push(c);
  }
  if (n.strict && n.end) {
    const f = s.length - 1;
    s[f][s[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function a(f) {
    const c = f.match(i), d = {};
    if (!c)
      return null;
    for (let h = 1; h < c.length; h++) {
      const p = c[h] || "", m = r[h - 1];
      d[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return d;
  }
  function l(f) {
    let c = "", d = !1;
    for (const h of e) {
      (!d || !c.endsWith("/")) && (c += "/"), d = !1;
      for (const p of h)
        if (p.type === 0)
          c += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: g, optional: v } = p, E = m in f ? f[m] : "";
          if (Lt(E) && !g)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const b = Lt(E) ? E.join("/") : E;
          if (!b)
            if (v)
              h.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${m}"`);
          c += b;
        }
    }
    return c || "/";
  }
  return {
    re: i,
    score: s,
    keys: r,
    parse: a,
    stringify: l
  };
}
function Qw(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s)
      return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Sg(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const r = Qw(s[n], o[n]);
    if (r)
      return r;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (If(s))
      return 1;
    if (If(o))
      return -1;
  }
  return o.length - s.length;
}
function If(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Jw = {
  type: 0,
  value: ""
}, Zw = /[a-zA-Z0-9_]/;
function eA(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Jw]];
  if (!e.startsWith("/"))
    throw new Error(ye.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${f}": ${p}`);
  }
  let n = 0, s = n;
  const o = [];
  let r;
  function i() {
    r && o.push(r), r = [];
  }
  let a = 0, l, f = "", c = "";
  function d() {
    f && (n === 0 ? r.push({
      type: 0,
      value: f
    }) : n === 1 || n === 2 || n === 3 ? (r.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), r.push({
      type: 1,
      value: f,
      regexp: c,
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
        l === "(" ? n = 2 : Zw.test(l) ? h() : (d(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
        break;
      case 3:
        d(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--, c = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), d(), i(), o;
}
function tA(e, t, n) {
  const s = Gw(eA(e.path), n);
  if (ye.NODE_ENV !== "production") {
    const r = /* @__PURE__ */ new Set();
    for (const i of s.keys)
      r.has(i.name) && Ce(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), r.add(i.name);
  }
  const o = Fe(s, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function nA(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = Mf({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(d) {
    return s.get(d);
  }
  function r(d, h, p) {
    const m = !p, g = Vf(d);
    ye.NODE_ENV !== "production" && iA(g, h), g.aliasOf = p && p.record;
    const v = Mf(t, d), E = [g];
    if ("alias" in d) {
      const A = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const O of A)
        E.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          Vf(Fe({}, g, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: p ? p.record.components : g.components,
            path: O,
            // we might be the child of an alias
            aliasOf: p ? p.record : g
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let b, y;
    for (const A of E) {
      const { path: O } = A;
      if (h && O[0] !== "/") {
        const T = h.record.path, x = T[T.length - 1] === "/" ? "" : "/";
        A.path = h.record.path + (O && x + O);
      }
      if (ye.NODE_ENV !== "production" && A.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (b = tA(A, h, v), ye.NODE_ENV !== "production" && h && O[0] === "/" && lA(b, h), p ? (p.alias.push(b), ye.NODE_ENV !== "production" && rA(p, b)) : (y = y || b, y !== b && y.alias.push(b), m && d.name && !Lf(b) && (ye.NODE_ENV !== "production" && aA(d, h), i(d.name))), Cg(b) && l(b), g.children) {
        const T = g.children;
        for (let x = 0; x < T.length; x++)
          r(T[x], b, p && p.children[x]);
      }
      p = p || b;
    }
    return y ? () => {
      i(y);
    } : pr;
  }
  function i(d) {
    if (Og(d)) {
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
    const h = cA(d, n);
    n.splice(h, 0, d), d.record.name && !Lf(d) && s.set(d.record.name, d);
  }
  function f(d, h) {
    let p, m = {}, g, v;
    if ("name" in d && d.name) {
      if (p = s.get(d.name), !p)
        throw So(1, {
          location: d
        });
      if (ye.NODE_ENV !== "production") {
        const y = Object.keys(d.params || {}).filter((A) => !p.keys.find((O) => O.name === A));
        y.length && Ce(`Discarded invalid param(s) "${y.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      v = p.record.name, m = Fe(
        // paramsFromLocation is a new object
        Pf(
          h.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          p.keys.filter((y) => !y.optional).concat(p.parent ? p.parent.keys.filter((y) => y.optional) : []).map((y) => y.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        d.params && Pf(d.params, p.keys.map((y) => y.name))
      ), g = p.stringify(m);
    } else if (d.path != null)
      g = d.path, ye.NODE_ENV !== "production" && !g.startsWith("/") && Ce(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), p = n.find((y) => y.re.test(g)), p && (m = p.parse(g), v = p.record.name);
    else {
      if (p = h.name ? s.get(h.name) : n.find((y) => y.re.test(h.path)), !p)
        throw So(1, {
          location: d,
          currentLocation: h
        });
      v = p.record.name, m = Fe({}, h.params, d.params), g = p.stringify(m);
    }
    const E = [];
    let b = p;
    for (; b; )
      E.unshift(b.record), b = b.parent;
    return {
      name: v,
      path: g,
      params: m,
      matched: E,
      meta: oA(E)
    };
  }
  e.forEach((d) => r(d));
  function c() {
    n.length = 0, s.clear();
  }
  return {
    addRoute: r,
    resolve: f,
    removeRoute: i,
    clearRoutes: c,
    getRoutes: a,
    getRecordMatcher: o
  };
}
function Pf(e, t) {
  const n = {};
  for (const s of t)
    s in e && (n[s] = e[s]);
  return n;
}
function Vf(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: sA(e),
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
function sA(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const s in e.components)
      t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function Lf(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function oA(e) {
  return e.reduce((t, n) => Fe(t, n.meta), {});
}
function Mf(e, t) {
  const n = {};
  for (const s in e)
    n[s] = s in t ? t[s] : e[s];
  return n;
}
function Zl(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function rA(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Zl.bind(null, n)))
      return Ce(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Zl.bind(null, n)))
      return Ce(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function iA(e, t) {
  t && t.record.name && !e.name && !e.path && Ce(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function aA(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function lA(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Zl.bind(null, n)))
      return Ce(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function cA(e, t) {
  let n = 0, s = t.length;
  for (; n !== s; ) {
    const r = n + s >> 1;
    Sg(e, t[r]) < 0 ? s = r : n = r + 1;
  }
  const o = uA(e);
  return o && (s = t.lastIndexOf(o, s - 1), ye.NODE_ENV !== "production" && s < 0 && Ce(`Finding ancestor route "${o.record.path}" failed for "${e.record.path}"`)), s;
}
function uA(e) {
  let t = e;
  for (; t = t.parent; )
    if (Cg(t) && Sg(e, t) === 0)
      return t;
}
function Cg({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function dA(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < s.length; ++o) {
    const r = s[o].replace(_g, " "), i = r.indexOf("="), a = Oo(i < 0 ? r : r.slice(0, i)), l = i < 0 ? null : Oo(r.slice(i + 1));
    if (a in t) {
      let f = t[a];
      Lt(f) || (f = t[a] = [f]), f.push(l);
    } else
      t[a] = l;
  }
  return t;
}
function Ff(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = Sw(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Lt(s) ? s.map((r) => r && Gl(r)) : [s && Gl(s)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function fA(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = Lt(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const pA = Symbol(ye.NODE_ENV !== "production" ? "router view location matched" : ""), Bf = Symbol(ye.NODE_ENV !== "production" ? "router view depth" : ""), Yc = Symbol(ye.NODE_ENV !== "production" ? "router" : ""), Gc = Symbol(ye.NODE_ENV !== "production" ? "route location" : ""), ec = Symbol(ye.NODE_ENV !== "production" ? "router view location" : "");
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
function Zn(e, t, n, s, o, r = (i) => i()) {
  const i = s && // name is defined if record is because of the function overload
  (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
  return () => new Promise((a, l) => {
    const f = (h) => {
      h === !1 ? l(So(4, {
        from: n,
        to: t
      })) : h instanceof Error ? l(h) : Yi(h) ? l(So(2, {
        from: t,
        to: h
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === i && typeof h == "function" && i.push(h), a());
    }, c = r(() => e.call(s && s.instances[o], t, n, ye.NODE_ENV !== "production" ? hA(f, t, n) : f));
    let d = Promise.resolve(c);
    if (e.length < 3 && (d = d.then(f)), ye.NODE_ENV !== "production" && e.length > 2) {
      const h = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof c == "object" && "then" in c)
        d = d.then((p) => f._called ? p : (Ce(h), Promise.reject(new Error("Invalid navigation guard"))));
      else if (c !== void 0 && !f._called) {
        Ce(h), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    d.catch((h) => l(h));
  });
}
function hA(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && Ce(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function el(e, t, n, s, o = (r) => r()) {
  const r = [];
  for (const i of e) {
    ye.NODE_ENV !== "production" && !i.components && !i.children.length && Ce(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in i.components) {
      let l = i.components[a];
      if (ye.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw Ce(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          Ce(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = l;
          l = () => f;
        } else l.__asyncLoader && // warn only once per component
        !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, Ce(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (gg(l)) {
          const c = (l.__vccOpts || l)[t];
          c && r.push(Zn(c, n, s, i, a, o));
        } else {
          let f = l();
          ye.NODE_ENV !== "production" && !("catch" in f) && (Ce(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), r.push(() => f.then((c) => {
            if (!c)
              throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
            const d = hw(c) ? c.default : c;
            i.mods[a] = c, i.components[a] = d;
            const p = (d.__vccOpts || d)[t];
            return p && Zn(p, n, s, i, a, o)();
          }));
        }
    }
  }
  return r;
}
function jf(e) {
  const t = Ot(Yc), n = Ot(Gc);
  let s = !1, o = null;
  const r = re(() => {
    const c = ie(e.to);
    return ye.NODE_ENV !== "production" && (!s || c !== o) && (Yi(c) || (s ? Ce(`Invalid value for prop "to" in useLink()
- to:`, c, `
- previous to:`, o, `
- props:`, e) : Ce(`Invalid value for prop "to" in useLink()
- to:`, c, `
- props:`, e)), o = c, s = !0), t.resolve(c);
  }), i = re(() => {
    const { matched: c } = r.value, { length: d } = c, h = c[d - 1], p = n.matched;
    if (!h || !p.length)
      return -1;
    const m = p.findIndex(as.bind(null, h));
    if (m > -1)
      return m;
    const g = Uf(c[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Uf(h) === g && // avoid comparing the child with its parent
      p[p.length - 1].path !== g ? p.findIndex(as.bind(null, c[d - 2])) : m
    );
  }), a = re(() => i.value > -1 && EA(n.params, r.value.params)), l = re(() => i.value > -1 && i.value === n.matched.length - 1 && wg(n.params, r.value.params));
  function f(c = {}) {
    if (_A(c)) {
      const d = t[ie(e.replace) ? "replace" : "push"](
        ie(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(pr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  if (ye.NODE_ENV !== "production" && Fn) {
    const c = kn();
    if (c) {
      const d = {
        route: r.value,
        isActive: a.value,
        isExactActive: l.value,
        error: null
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(d), ua(() => {
        d.route = r.value, d.isActive = a.value, d.isExactActive = l.value, d.error = Yi(ie(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: re(() => r.value.href),
    isActive: a,
    isExactActive: l,
    navigate: f
  };
}
function mA(e) {
  return e.length === 1 ? e[0] : e;
}
const gA = /* @__PURE__ */ ke({
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
  useLink: jf,
  setup(e, { slots: t }) {
    const n = Fs(jf(e)), { options: s } = Ot(Yc), o = re(() => ({
      [Hf(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Hf(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const r = t.default && mA(t.default(n));
      return e.custom ? r : Pc("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, r);
    };
  }
}), vA = gA;
function _A(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function EA(e, t) {
  for (const n in t) {
    const s = t[n], o = e[n];
    if (typeof s == "string") {
      if (s !== o)
        return !1;
    } else if (!Lt(o) || o.length !== s.length || s.some((r, i) => r !== o[i]))
      return !1;
  }
  return !0;
}
function Uf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Hf = (e, t, n) => e ?? t ?? n, yA = /* @__PURE__ */ ke({
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
    ye.NODE_ENV !== "production" && wA();
    const s = Ot(ec), o = re(() => e.route || s.value), r = Ot(Bf, 0), i = re(() => {
      let f = ie(r);
      const { matched: c } = o.value;
      let d;
      for (; (d = c[f]) && !d.components; )
        f++;
      return f;
    }), a = re(() => o.value.matched[i.value]);
    vo(Bf, re(() => i.value + 1)), vo(pA, a), vo(ec, o);
    const l = ee();
    return Wt(() => [l.value, a.value, e.name], ([f, c, d], [h, p, m]) => {
      c && (c.instances[d] = f, p && p !== c && f && f === h && (c.leaveGuards.size || (c.leaveGuards = p.leaveGuards), c.updateGuards.size || (c.updateGuards = p.updateGuards))), f && c && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !as(c, p) || !h) && (c.enterCallbacks[d] || []).forEach((g) => g(f));
    }, { flush: "post" }), () => {
      const f = o.value, c = e.name, d = a.value, h = d && d.components[c];
      if (!h)
        return Wf(n.default, { Component: h, route: f });
      const p = d.props[c], m = p ? p === !0 ? f.params : typeof p == "function" ? p(f) : p : null, v = Pc(h, Fe({}, m, t, {
        onVnodeUnmounted: (E) => {
          E.component.isUnmounted && (d.instances[c] = null);
        },
        ref: l
      }));
      if (ye.NODE_ENV !== "production" && Fn && v.ref) {
        const E = {
          depth: i.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (Lt(v.ref) ? v.ref.map((y) => y.i) : [v.ref.i]).forEach((y) => {
          y.__vrv_devtools = E;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Wf(n.default, { Component: v, route: f }) || v
      );
    };
  }
});
function Wf(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const bA = yA;
function wA() {
  const e = kn(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const s = t === "KeepAlive" ? "keep-alive" : "transition";
    Ce(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`);
  }
}
function Qo(e, t) {
  const n = Fe({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((s) => IA(s, ["instances", "children", "aliasOf"]))
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
function ri(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let AA = 0;
function OA(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const s = AA++;
  pw({
    id: "org.vuejs.router" + (s ? "." + s : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (o) => {
    typeof o.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), o.on.inspectComponent((c, d) => {
      c.instanceData && c.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Qo(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: c, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const h = d.__vrv_devtools;
        c.tags.push({
          label: (h.name ? `${h.name.toString()}: ` : "") + h.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Tg
        });
      }
      Lt(d.__vrl_devtools) && (d.__devtoolsApi = o, d.__vrl_devtools.forEach((h) => {
        let p = h.route.path, m = xg, g = "", v = 0;
        h.error ? (p = h.error, m = DA, v = xA) : h.isExactActive ? (m = Dg, g = "This is exactly active") : h.isActive && (m = Ng, g = "This link is active"), c.tags.push({
          label: p,
          textColor: v,
          tooltip: g,
          backgroundColor: m
        });
      }));
    }), Wt(t.currentRoute, () => {
      l(), o.notifyComponentUpdate(), o.sendInspectorTree(a), o.sendInspectorState(a);
    });
    const r = "router:navigations:" + s;
    o.addTimelineLayer({
      id: r,
      label: `Router${s ? " " + s : ""} Navigations`,
      color: 4237508
    }), t.onError((c, d) => {
      o.addTimelineEvent({
        layerId: r,
        event: {
          title: "Error during Navigation",
          subtitle: d.fullPath,
          logType: "error",
          time: o.now(),
          data: { error: c },
          groupId: d.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((c, d) => {
      const h = {
        guard: ri("beforeEach"),
        from: Qo(d, "Current Location during this navigation"),
        to: Qo(c, "Target location")
      };
      Object.defineProperty(c.meta, "__navigationId", {
        value: i++
      }), o.addTimelineEvent({
        layerId: r,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: c.fullPath,
          data: h,
          groupId: c.meta.__navigationId
        }
      });
    }), t.afterEach((c, d, h) => {
      const p = {
        guard: ri("afterEach")
      };
      h ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: h ? h.message : "",
          tooltip: "Navigation Failure",
          value: h
        }
      }, p.status = ri("❌")) : p.status = ri("✅"), p.from = Qo(d, "Current Location during this navigation"), p.to = Qo(c, "Target location"), o.addTimelineEvent({
        layerId: r,
        event: {
          title: "End of navigation",
          subtitle: c.fullPath,
          time: o.now(),
          data: p,
          logType: h ? "warning" : "default",
          groupId: c.meta.__navigationId
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
      const c = f;
      let d = n.getRoutes().filter((h) => !h.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !h.parent.record.components);
      d.forEach(Ig), c.filter && (d = d.filter((h) => (
        // save matches state based on the payload
        tc(h, c.filter.toLowerCase())
      ))), d.forEach((h) => Rg(h, t.currentRoute.value)), c.rootNodes = d.map(kg);
    }
    let f;
    o.on.getInspectorTree((c) => {
      f = c, c.app === e && c.inspectorId === a && l();
    }), o.on.getInspectorState((c) => {
      if (c.app === e && c.inspectorId === a) {
        const h = n.getRoutes().find((p) => p.record.__vd_id === c.nodeId);
        h && (c.state = {
          options: CA(h)
        });
      }
    }), o.sendInspectorTree(a), o.sendInspectorState(a);
  });
}
function SA(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function CA(e) {
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
        display: e.keys.map((s) => `${s.name}${SA(s)}`).join(" "),
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
const Tg = 15485081, Ng = 2450411, Dg = 8702998, TA = 2282478, xg = 16486972, NA = 6710886, DA = 16704226, xA = 12131356;
function kg(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: TA
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: xg
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Tg
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Dg
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Ng
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: NA
  });
  let s = n.__vd_id;
  return s == null && (s = String(kA++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(kg)
  };
}
let kA = 0;
const RA = /^\/(.*)\/([a-z]*)$/;
function Rg(e, t) {
  const n = t.matched.length && as(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => as(s, e.record))), e.children.forEach((s) => Rg(s, t));
}
function Ig(e) {
  e.__vd_match = !1, e.children.forEach(Ig);
}
function tc(e, t) {
  const n = String(e.re).match(RA);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => tc(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), r = Oo(o);
  return !t.startsWith("/") && (r.includes(t) || o.includes(t)) || r.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => tc(i, t));
}
function IA(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function PA(e) {
  const t = nA(e.routes, e), n = e.parseQuery || dA, s = e.stringifyQuery || Ff, o = e.history;
  if (ye.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const r = Go(), i = Go(), a = Go(), l = mh(Xn);
  let f = Xn;
  Fn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = Ja.bind(null, (M) => "" + M), d = Ja.bind(null, Tw), h = (
    // @ts-expect-error: intentionally avoid the type check
    Ja.bind(null, Oo)
  );
  function p(M, ne) {
    let oe, ue;
    return Og(M) ? (oe = t.getRecordMatcher(M), ye.NODE_ENV !== "production" && !oe && Ce(`Parent route "${String(M)}" not found when adding child route`, ne), ue = ne) : ue = M, t.addRoute(ue, oe);
  }
  function m(M) {
    const ne = t.getRecordMatcher(M);
    ne ? t.removeRoute(ne) : ye.NODE_ENV !== "production" && Ce(`Cannot remove non-existent route "${String(M)}"`);
  }
  function g() {
    return t.getRoutes().map((M) => M.record);
  }
  function v(M) {
    return !!t.getRecordMatcher(M);
  }
  function E(M, ne) {
    if (ne = Fe({}, ne || l.value), typeof M == "string") {
      const w = Za(n, M, ne.path), k = t.resolve({ path: w.path }, ne), W = o.createHref(w.fullPath);
      return ye.NODE_ENV !== "production" && (W.startsWith("//") ? Ce(`Location "${M}" resolved to "${W}". A resolved location cannot start with multiple slashes.`) : k.matched.length || Ce(`No match found for location with path "${M}"`)), Fe(w, k, {
        params: h(k.params),
        hash: Oo(w.hash),
        redirectedFrom: void 0,
        href: W
      });
    }
    if (ye.NODE_ENV !== "production" && !Yi(M))
      return Ce(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, M), E({});
    let oe;
    if (M.path != null)
      ye.NODE_ENV !== "production" && "params" in M && !("name" in M) && // @ts-expect-error: the type is never
      Object.keys(M.params).length && Ce(`Path "${M.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), oe = Fe({}, M, {
        path: Za(n, M.path, ne.path).path
      });
    else {
      const w = Fe({}, M.params);
      for (const k in w)
        w[k] == null && delete w[k];
      oe = Fe({}, M, {
        params: d(w)
      }), ne.params = d(ne.params);
    }
    const ue = t.resolve(oe, ne), Se = M.hash || "";
    ye.NODE_ENV !== "production" && Se && !Se.startsWith("#") && Ce(`A \`hash\` should always start with the character "#". Replace "${Se}" with "#${Se}".`), ue.params = c(h(ue.params));
    const qe = xw(s, Fe({}, M, {
      hash: Ow(Se),
      path: ue.path
    })), _ = o.createHref(qe);
    return ye.NODE_ENV !== "production" && (_.startsWith("//") ? Ce(`Location "${M}" resolved to "${_}". A resolved location cannot start with multiple slashes.`) : ue.matched.length || Ce(`No match found for location with path "${M.path != null ? M.path : M}"`)), Fe({
      fullPath: qe,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: Se,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        s === Ff ? fA(M.query) : M.query || {}
      )
    }, ue, {
      redirectedFrom: void 0,
      href: _
    });
  }
  function b(M) {
    return typeof M == "string" ? Za(n, M, l.value.path) : Fe({}, M);
  }
  function y(M, ne) {
    if (f !== M)
      return So(8, {
        from: ne,
        to: M
      });
  }
  function A(M) {
    return x(M);
  }
  function O(M) {
    return A(Fe(b(M), { replace: !0 }));
  }
  function T(M) {
    const ne = M.matched[M.matched.length - 1];
    if (ne && ne.redirect) {
      const { redirect: oe } = ne;
      let ue = typeof oe == "function" ? oe(M) : oe;
      if (typeof ue == "string" && (ue = ue.includes("?") || ue.includes("#") ? ue = b(ue) : (
        // force empty params
        { path: ue }
      ), ue.params = {}), ye.NODE_ENV !== "production" && ue.path == null && !("name" in ue))
        throw Ce(`Invalid redirect found:
${JSON.stringify(ue, null, 2)}
 when navigating to "${M.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Fe({
        query: M.query,
        hash: M.hash,
        // avoid transferring params if the redirect has a path
        params: ue.path != null ? {} : M.params
      }, ue);
    }
  }
  function x(M, ne) {
    const oe = f = E(M), ue = l.value, Se = M.state, qe = M.force, _ = M.replace === !0, w = T(oe);
    if (w)
      return x(
        Fe(b(w), {
          state: typeof w == "object" ? Fe({}, Se, w.state) : Se,
          force: qe,
          replace: _
        }),
        // keep original redirectedFrom if it exists
        ne || oe
      );
    const k = oe;
    k.redirectedFrom = ne;
    let W;
    return !qe && Tf(s, ue, oe) && (W = So(16, { to: k, from: ue }), Le(
      ue,
      ue,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (W ? Promise.resolve(W) : F(k, ue)).catch((U) => Ln(U) ? (
      // navigation redirects still mark the router as ready
      Ln(
        U,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? U : we(U)
    ) : (
      // reject any unknown error
      H(U, k, ue)
    )).then((U) => {
      if (U) {
        if (Ln(
          U,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return ye.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Tf(s, E(U.to), k) && // and we have done it a couple of times
          ne && // @ts-expect-error: added only in dev
          (ne._count = ne._count ? (
            // @ts-expect-error
            ne._count + 1
          ) : 1) > 30 ? (Ce(`Detected a possibly infinite redirection in a navigation guard when going from "${ue.fullPath}" to "${k.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : x(
            // keep options
            Fe({
              // preserve an existing replacement but allow the redirect to override it
              replace: _
            }, b(U.to), {
              state: typeof U.to == "object" ? Fe({}, Se, U.to.state) : Se,
              force: qe
            }),
            // preserve the original redirectedFrom if any
            ne || k
          );
      } else
        U = C(k, ue, !0, _, Se);
      return B(k, ue, U), U;
    });
  }
  function j(M, ne) {
    const oe = y(M, ne);
    return oe ? Promise.reject(oe) : Promise.resolve();
  }
  function L(M) {
    const ne = Je.values().next().value;
    return ne && typeof ne.runWithContext == "function" ? ne.runWithContext(M) : M();
  }
  function F(M, ne) {
    let oe;
    const [ue, Se, qe] = VA(M, ne);
    oe = el(ue.reverse(), "beforeRouteLeave", M, ne);
    for (const w of ue)
      w.leaveGuards.forEach((k) => {
        oe.push(Zn(k, M, ne));
      });
    const _ = j.bind(null, M, ne);
    return oe.push(_), Tt(oe).then(() => {
      oe = [];
      for (const w of r.list())
        oe.push(Zn(w, M, ne));
      return oe.push(_), Tt(oe);
    }).then(() => {
      oe = el(Se, "beforeRouteUpdate", M, ne);
      for (const w of Se)
        w.updateGuards.forEach((k) => {
          oe.push(Zn(k, M, ne));
        });
      return oe.push(_), Tt(oe);
    }).then(() => {
      oe = [];
      for (const w of qe)
        if (w.beforeEnter)
          if (Lt(w.beforeEnter))
            for (const k of w.beforeEnter)
              oe.push(Zn(k, M, ne));
          else
            oe.push(Zn(w.beforeEnter, M, ne));
      return oe.push(_), Tt(oe);
    }).then(() => (M.matched.forEach((w) => w.enterCallbacks = {}), oe = el(qe, "beforeRouteEnter", M, ne, L), oe.push(_), Tt(oe))).then(() => {
      oe = [];
      for (const w of i.list())
        oe.push(Zn(w, M, ne));
      return oe.push(_), Tt(oe);
    }).catch((w) => Ln(
      w,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? w : Promise.reject(w));
  }
  function B(M, ne, oe) {
    a.list().forEach((ue) => L(() => ue(M, ne, oe)));
  }
  function C(M, ne, oe, ue, Se) {
    const qe = y(M, ne);
    if (qe)
      return qe;
    const _ = ne === Xn, w = Fn ? history.state : {};
    oe && (ue || _ ? o.replace(M.fullPath, Fe({
      scroll: _ && w && w.scroll
    }, Se)) : o.push(M.fullPath, Se)), l.value = M, Le(M, ne, oe, _), we();
  }
  let I;
  function Y() {
    I || (I = o.listen((M, ne, oe) => {
      if (!ut.listening)
        return;
      const ue = E(M), Se = T(ue);
      if (Se) {
        x(Fe(Se, { replace: !0, force: !0 }), ue).catch(pr);
        return;
      }
      f = ue;
      const qe = l.value;
      Fn && Fw(Df(qe.fullPath, oe.delta), ya()), F(ue, qe).catch((_) => Ln(
        _,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? _ : Ln(
        _,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (x(
        Fe(b(_.to), {
          force: !0
        }),
        ue
        // avoid an uncaught rejection, let push call triggerError
      ).then((w) => {
        Ln(
          w,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !oe.delta && oe.type === Rr.pop && o.go(-1, !1);
      }).catch(pr), Promise.reject()) : (oe.delta && o.go(-oe.delta, !1), H(_, ue, qe))).then((_) => {
        _ = _ || C(
          // after navigation, all matched components are resolved
          ue,
          qe,
          !1
        ), _ && (oe.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Ln(
          _,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-oe.delta, !1) : oe.type === Rr.pop && Ln(
          _,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), B(ue, qe, _);
      }).catch(pr);
    }));
  }
  let pe = Go(), D = Go(), R;
  function H(M, ne, oe) {
    we(M);
    const ue = D.list();
    return ue.length ? ue.forEach((Se) => Se(M, ne, oe)) : (ye.NODE_ENV !== "production" && Ce("uncaught error during route navigation:"), console.error(M)), Promise.reject(M);
  }
  function te() {
    return R && l.value !== Xn ? Promise.resolve() : new Promise((M, ne) => {
      pe.add([M, ne]);
    });
  }
  function we(M) {
    return R || (R = !M, Y(), pe.list().forEach(([ne, oe]) => M ? oe(M) : ne()), pe.reset()), M;
  }
  function Le(M, ne, oe, ue) {
    const { scrollBehavior: Se } = e;
    if (!Fn || !Se)
      return Promise.resolve();
    const qe = !oe && Bw(Df(M.fullPath, 0)) || (ue || !oe) && history.state && history.state.scroll || null;
    return Eo().then(() => Se(M, ne, qe)).then((_) => _ && Mw(_)).catch((_) => H(_, M, ne));
  }
  const be = (M) => o.go(M);
  let Te;
  const Je = /* @__PURE__ */ new Set(), ut = {
    currentRoute: l,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    clearRoutes: t.clearRoutes,
    hasRoute: v,
    getRoutes: g,
    resolve: E,
    options: e,
    push: A,
    replace: O,
    go: be,
    back: () => be(-1),
    forward: () => be(1),
    beforeEach: r.add,
    beforeResolve: i.add,
    afterEach: a.add,
    onError: D.add,
    isReady: te,
    install(M) {
      const ne = this;
      M.component("RouterLink", vA), M.component("RouterView", bA), M.config.globalProperties.$router = ne, Object.defineProperty(M.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ie(l)
      }), Fn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Te && l.value === Xn && (Te = !0, A(o.location).catch((Se) => {
        ye.NODE_ENV !== "production" && Ce("Unexpected error when starting the router:", Se);
      }));
      const oe = {};
      for (const Se in Xn)
        Object.defineProperty(oe, Se, {
          get: () => l.value[Se],
          enumerable: !0
        });
      M.provide(Yc, ne), M.provide(Gc, hh(oe)), M.provide(ec, l);
      const ue = M.unmount;
      Je.add(M), M.unmount = function() {
        Je.delete(M), Je.size < 1 && (f = Xn, I && I(), I = null, l.value = Xn, Te = !1, R = !1), ue();
      }, ye.NODE_ENV !== "production" && Fn && OA(M, ne, t);
    }
  };
  function Tt(M) {
    return M.reduce((ne, oe) => ne.then(() => L(oe)), Promise.resolve());
  }
  return ut;
}
function VA(e, t) {
  const n = [], s = [], o = [], r = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < r; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => as(f, a)) ? s.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((f) => as(f, l)) || o.push(l));
  }
  return [n, s, o];
}
function Pg(e) {
  return Ot(Gc);
}
const LA = { class: "nav nav-tabs mb-4" }, MA = { class: "nav-item" }, FA = { class: "nav-item" }, BA = { class: "nav-item" }, jA = { class: "nav-item" }, UA = /* @__PURE__ */ ke({
  __name: "NavigationMenu",
  setup(e) {
    const t = Pg();
    return (n, s) => {
      const o = gt("router-link");
      return N(), P("ul", LA, [
        u("li", MA, [
          ge(o, {
            to: "/",
            class: me(["nav-link", { active: ie(t).name === "home" }]),
            "aria-current": ie(t).name === "home" ? "page" : void 0
          }, {
            default: xe(() => s[0] || (s[0] = [
              u("i", { class: "fas fa-home me-2" }, null, -1),
              ae(" Home ")
            ])),
            _: 1,
            __: [0]
          }, 8, ["class", "aria-current"])
        ]),
        u("li", FA, [
          ge(o, {
            to: "/setup",
            class: me(["nav-link", { active: ie(t).name === "setup" }]),
            "aria-current": ie(t).name === "setup" ? "page" : void 0
          }, {
            default: xe(() => s[1] || (s[1] = [
              u("i", { class: "fas fa-cogs me-2" }, null, -1),
              ae(" Setup ")
            ])),
            _: 1,
            __: [1]
          }, 8, ["class", "aria-current"])
        ]),
        u("li", BA, [
          ge(o, {
            to: "/monitor",
            class: me(["nav-link", { active: ie(t).name === "monitor" }]),
            "aria-current": ie(t).name === "monitor" ? "page" : void 0
          }, {
            default: xe(() => s[2] || (s[2] = [
              u("i", { class: "fas fa-search me-2" }, null, -1),
              ae(" Monitor ")
            ])),
            _: 1,
            __: [2]
          }, 8, ["class", "aria-current"])
        ]),
        u("li", jA, [
          ge(o, {
            to: "/archives",
            class: me(["nav-link", { active: ie(t).name === "archives" }]),
            "aria-current": ie(t).name === "archives" ? "page" : void 0
          }, {
            default: xe(() => s[3] || (s[3] = [
              u("i", { class: "fas fa-archive me-2" }, null, -1),
              ae(" Archives ")
            ])),
            _: 1,
            __: [3]
          }, 8, ["class", "aria-current"])
        ])
      ]);
    };
  }
}), Fo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, HA = /* @__PURE__ */ Fo(UA, [["__scopeId", "data-v-1f24af5d"]]), WA = /* @__PURE__ */ ke({
  __name: "MainLayout",
  setup(e) {
    return (t, n) => {
      const s = gt("router-view");
      return N(), P("div", null, [
        u("main", null, [
          ge(HA),
          ge(s)
        ])
      ]);
    };
  }
}), $A = /* @__PURE__ */ Fo(WA, [["__scopeId", "data-v-a42a7003"]]);
function Vg(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: KA } = Object.prototype, { getPrototypeOf: Qc } = Object, { iterator: ba, toStringTag: Lg } = Symbol, wa = /* @__PURE__ */ ((e) => (t) => {
  const n = KA.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), un = (e) => (e = e.toLowerCase(), (t) => wa(t) === e), Aa = (e) => (t) => typeof t === e, { isArray: Bo } = Array, Ir = Aa("undefined");
function zA(e) {
  return e !== null && !Ir(e) && e.constructor !== null && !Ir(e.constructor) && Rt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Mg = un("ArrayBuffer");
function qA(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Mg(e.buffer), t;
}
const XA = Aa("string"), Rt = Aa("function"), Fg = Aa("number"), Oa = (e) => e !== null && typeof e == "object", YA = (e) => e === !0 || e === !1, Ti = (e) => {
  if (wa(e) !== "object")
    return !1;
  const t = Qc(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Lg in e) && !(ba in e);
}, GA = un("Date"), QA = un("File"), JA = un("Blob"), ZA = un("FileList"), eO = (e) => Oa(e) && Rt(e.pipe), tO = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Rt(e.append) && ((t = wa(e)) === "formdata" || // detect form-data instance
  t === "object" && Rt(e.toString) && e.toString() === "[object FormData]"));
}, nO = un("URLSearchParams"), [sO, oO, rO, iO] = ["ReadableStream", "Request", "Response", "Headers"].map(un), aO = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Kr(e, t, { allOwnKeys: n = !1 } = {}) {
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
function Bg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, o;
  for (; s-- > 0; )
    if (o = n[s], t === o.toLowerCase())
      return o;
  return null;
}
const Ss = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, jg = (e) => !Ir(e) && e !== Ss;
function nc() {
  const { caseless: e } = jg(this) && this || {}, t = {}, n = (s, o) => {
    const r = e && Bg(t, o) || o;
    Ti(t[r]) && Ti(s) ? t[r] = nc(t[r], s) : Ti(s) ? t[r] = nc({}, s) : Bo(s) ? t[r] = s.slice() : t[r] = s;
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && Kr(arguments[s], n);
  return t;
}
const lO = (e, t, n, { allOwnKeys: s } = {}) => (Kr(t, (o, r) => {
  n && Rt(o) ? e[r] = Vg(o, n) : e[r] = o;
}, { allOwnKeys: s }), e), cO = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), uO = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, dO = (e, t, n, s) => {
  let o, r, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), r = o.length; r-- > 0; )
      i = o[r], (!s || s(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Qc(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, fO = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, pO = (e) => {
  if (!e) return null;
  if (Bo(e)) return e;
  let t = e.length;
  if (!Fg(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, hO = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Qc(Uint8Array)), mO = (e, t) => {
  const s = (e && e[ba]).call(e);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const r = o.value;
    t.call(e, r[0], r[1]);
  }
}, gO = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, vO = un("HTMLFormElement"), _O = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, o) {
    return s.toUpperCase() + o;
  }
), $f = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), EO = un("RegExp"), Ug = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  Kr(n, (o, r) => {
    let i;
    (i = t(o, r, e)) !== !1 && (s[r] = i || o);
  }), Object.defineProperties(e, s);
}, yO = (e) => {
  Ug(e, (t, n) => {
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
}, bO = (e, t) => {
  const n = {}, s = (o) => {
    o.forEach((r) => {
      n[r] = !0;
    });
  };
  return Bo(e) ? s(e) : s(String(e).split(t)), n;
}, wO = () => {
}, AO = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function OO(e) {
  return !!(e && Rt(e.append) && e[Lg] === "FormData" && e[ba]);
}
const SO = (e) => {
  const t = new Array(10), n = (s, o) => {
    if (Oa(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[o] = s;
        const r = Bo(s) ? [] : {};
        return Kr(s, (i, a) => {
          const l = n(i, o + 1);
          !Ir(l) && (r[a] = l);
        }), t[o] = void 0, r;
      }
    }
    return s;
  };
  return n(e, 0);
}, CO = un("AsyncFunction"), TO = (e) => e && (Oa(e) || Rt(e)) && Rt(e.then) && Rt(e.catch), Hg = ((e, t) => e ? setImmediate : t ? ((n, s) => (Ss.addEventListener("message", ({ source: o, data: r }) => {
  o === Ss && r === n && s.length && s.shift()();
}, !1), (o) => {
  s.push(o), Ss.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Rt(Ss.postMessage)
), NO = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ss) : typeof process < "u" && process.nextTick || Hg, DO = (e) => e != null && Rt(e[ba]), V = {
  isArray: Bo,
  isArrayBuffer: Mg,
  isBuffer: zA,
  isFormData: tO,
  isArrayBufferView: qA,
  isString: XA,
  isNumber: Fg,
  isBoolean: YA,
  isObject: Oa,
  isPlainObject: Ti,
  isReadableStream: sO,
  isRequest: oO,
  isResponse: rO,
  isHeaders: iO,
  isUndefined: Ir,
  isDate: GA,
  isFile: QA,
  isBlob: JA,
  isRegExp: EO,
  isFunction: Rt,
  isStream: eO,
  isURLSearchParams: nO,
  isTypedArray: hO,
  isFileList: ZA,
  forEach: Kr,
  merge: nc,
  extend: lO,
  trim: aO,
  stripBOM: cO,
  inherits: uO,
  toFlatObject: dO,
  kindOf: wa,
  kindOfTest: un,
  endsWith: fO,
  toArray: pO,
  forEachEntry: mO,
  matchAll: gO,
  isHTMLForm: vO,
  hasOwnProperty: $f,
  hasOwnProp: $f,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ug,
  freezeMethods: yO,
  toObjectSet: bO,
  toCamelCase: _O,
  noop: wO,
  toFiniteNumber: AO,
  findKey: Bg,
  global: Ss,
  isContextDefined: jg,
  isSpecCompliantForm: OO,
  toJSONObject: SO,
  isAsyncFn: CO,
  isThenable: TO,
  setImmediate: Hg,
  asap: NO,
  isIterable: DO
};
function Ae(e, t, n, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), o && (this.response = o, this.status = o.status ? o.status : null);
}
V.inherits(Ae, Error, {
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
      config: V.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Wg = Ae.prototype, $g = {};
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
  $g[e] = { value: e };
});
Object.defineProperties(Ae, $g);
Object.defineProperty(Wg, "isAxiosError", { value: !0 });
Ae.from = (e, t, n, s, o, r) => {
  const i = Object.create(Wg);
  return V.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Ae.call(i, e.message, t, n, s, o), i.cause = e, i.name = e.name, r && Object.assign(i, r), i;
};
const xO = null;
function sc(e) {
  return V.isPlainObject(e) || V.isArray(e);
}
function Kg(e) {
  return V.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Kf(e, t, n) {
  return e ? e.concat(t).map(function(o, r) {
    return o = Kg(o), !n && r ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function kO(e) {
  return V.isArray(e) && !e.some(sc);
}
const RO = V.toFlatObject(V, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Sa(e, t, n) {
  if (!V.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = V.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, v) {
    return !V.isUndefined(v[g]);
  });
  const s = n.metaTokens, o = n.visitor || c, r = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && V.isSpecCompliantForm(t);
  if (!V.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(m) {
    if (m === null) return "";
    if (V.isDate(m))
      return m.toISOString();
    if (V.isBoolean(m))
      return m.toString();
    if (!l && V.isBlob(m))
      throw new Ae("Blob is not supported. Use a Buffer instead.");
    return V.isArrayBuffer(m) || V.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function c(m, g, v) {
    let E = m;
    if (m && !v && typeof m == "object") {
      if (V.endsWith(g, "{}"))
        g = s ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (V.isArray(m) && kO(m) || (V.isFileList(m) || V.endsWith(g, "[]")) && (E = V.toArray(m)))
        return g = Kg(g), E.forEach(function(y, A) {
          !(V.isUndefined(y) || y === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Kf([g], A, r) : i === null ? g : g + "[]",
            f(y)
          );
        }), !1;
    }
    return sc(m) ? !0 : (t.append(Kf(v, g, r), f(m)), !1);
  }
  const d = [], h = Object.assign(RO, {
    defaultVisitor: c,
    convertValue: f,
    isVisitable: sc
  });
  function p(m, g) {
    if (!V.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(m), V.forEach(m, function(E, b) {
        (!(V.isUndefined(E) || E === null) && o.call(
          t,
          E,
          V.isString(b) ? b.trim() : b,
          g,
          h
        )) === !0 && p(E, g ? g.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!V.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function zf(e) {
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
function Jc(e, t) {
  this._pairs = [], e && Sa(e, this, t);
}
const zg = Jc.prototype;
zg.append = function(t, n) {
  this._pairs.push([t, n]);
};
zg.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, zf);
  } : zf;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function IO(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function qg(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || IO;
  V.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let r;
  if (o ? r = o(t, n) : r = V.isURLSearchParams(t) ? t.toString() : new Jc(t, n).toString(s), r) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return e;
}
class qf {
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
    V.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const Xg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, PO = typeof URLSearchParams < "u" ? URLSearchParams : Jc, VO = typeof FormData < "u" ? FormData : null, LO = typeof Blob < "u" ? Blob : null, MO = {
  isBrowser: !0,
  classes: {
    URLSearchParams: PO,
    FormData: VO,
    Blob: LO
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Zc = typeof window < "u" && typeof document < "u", oc = typeof navigator == "object" && navigator || void 0, FO = Zc && (!oc || ["ReactNative", "NativeScript", "NS"].indexOf(oc.product) < 0), BO = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", jO = Zc && window.location.href || "http://localhost", UO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Zc,
  hasStandardBrowserEnv: FO,
  hasStandardBrowserWebWorkerEnv: BO,
  navigator: oc,
  origin: jO
}, Symbol.toStringTag, { value: "Module" })), ht = {
  ...UO,
  ...MO
};
function HO(e, t) {
  return Sa(e, new ht.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, o, r) {
      return ht.isNode && V.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function WO(e) {
  return V.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function $O(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const o = n.length;
  let r;
  for (s = 0; s < o; s++)
    r = n[s], t[r] = e[r];
  return t;
}
function Yg(e) {
  function t(n, s, o, r) {
    let i = n[r++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = r >= n.length;
    return i = !i && V.isArray(o) ? o.length : i, l ? (V.hasOwnProp(o, i) ? o[i] = [o[i], s] : o[i] = s, !a) : ((!o[i] || !V.isObject(o[i])) && (o[i] = []), t(n, s, o[i], r) && V.isArray(o[i]) && (o[i] = $O(o[i])), !a);
  }
  if (V.isFormData(e) && V.isFunction(e.entries)) {
    const n = {};
    return V.forEachEntry(e, (s, o) => {
      t(WO(s), o, n, 0);
    }), n;
  }
  return null;
}
function KO(e, t, n) {
  if (V.isString(e))
    try {
      return (t || JSON.parse)(e), V.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const zr = {
  transitional: Xg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", o = s.indexOf("application/json") > -1, r = V.isObject(t);
    if (r && V.isHTMLForm(t) && (t = new FormData(t)), V.isFormData(t))
      return o ? JSON.stringify(Yg(t)) : t;
    if (V.isArrayBuffer(t) || V.isBuffer(t) || V.isStream(t) || V.isFile(t) || V.isBlob(t) || V.isReadableStream(t))
      return t;
    if (V.isArrayBufferView(t))
      return t.buffer;
    if (V.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (r) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return HO(t, this.formSerializer).toString();
      if ((a = V.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Sa(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return r || o ? (n.setContentType("application/json", !1), KO(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || zr.transitional, s = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (V.isResponse(t) || V.isReadableStream(t))
      return t;
    if (t && V.isString(t) && (s && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? Ae.from(a, Ae.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: ht.classes.FormData,
    Blob: ht.classes.Blob
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
V.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  zr.headers[e] = {};
});
const zO = V.toObjectSet([
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
]), qO = (e) => {
  const t = {};
  let n, s, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), s = i.substring(o + 1).trim(), !(!n || t[n] && zO[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Xf = Symbol("internals");
function Jo(e) {
  return e && String(e).trim().toLowerCase();
}
function Ni(e) {
  return e === !1 || e == null ? e : V.isArray(e) ? e.map(Ni) : String(e);
}
function XO(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const YO = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function tl(e, t, n, s, o) {
  if (V.isFunction(s))
    return s.call(this, t, n);
  if (o && (t = n), !!V.isString(t)) {
    if (V.isString(s))
      return t.indexOf(s) !== -1;
    if (V.isRegExp(s))
      return s.test(t);
  }
}
function GO(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function QO(e, t) {
  const n = V.toCamelCase(" " + t);
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
      const c = Jo(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const d = V.findKey(o, c);
      (!d || o[d] === void 0 || f === !0 || f === void 0 && o[d] !== !1) && (o[d || l] = Ni(a));
    }
    const i = (a, l) => V.forEach(a, (f, c) => r(f, c, l));
    if (V.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (V.isString(t) && (t = t.trim()) && !YO(t))
      i(qO(t), n);
    else if (V.isObject(t) && V.isIterable(t)) {
      let a = {}, l, f;
      for (const c of t) {
        if (!V.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        a[f = c[0]] = (l = a[f]) ? V.isArray(l) ? [...l, c[1]] : [l, c[1]] : c[1];
      }
      i(a, n);
    } else
      t != null && r(n, t, s);
    return this;
  }
  get(t, n) {
    if (t = Jo(t), t) {
      const s = V.findKey(this, t);
      if (s) {
        const o = this[s];
        if (!n)
          return o;
        if (n === !0)
          return XO(o);
        if (V.isFunction(n))
          return n.call(this, o, s);
        if (V.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Jo(t), t) {
      const s = V.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || tl(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let o = !1;
    function r(i) {
      if (i = Jo(i), i) {
        const a = V.findKey(s, i);
        a && (!n || tl(s, s[a], a, n)) && (delete s[a], o = !0);
      }
    }
    return V.isArray(t) ? t.forEach(r) : r(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, o = !1;
    for (; s--; ) {
      const r = n[s];
      (!t || tl(this, this[r], r, t, !0)) && (delete this[r], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, s = {};
    return V.forEach(this, (o, r) => {
      const i = V.findKey(s, r);
      if (i) {
        n[i] = Ni(o), delete n[r];
        return;
      }
      const a = t ? GO(r) : String(r).trim();
      a !== r && delete n[r], n[a] = Ni(o), s[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return V.forEach(this, (s, o) => {
      s != null && s !== !1 && (n[o] = t && V.isArray(s) ? s.join(", ") : s);
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
    const s = (this[Xf] = this[Xf] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function r(i) {
      const a = Jo(i);
      s[a] || (QO(o, i), s[a] = !0);
    }
    return V.isArray(t) ? t.forEach(r) : r(t), this;
  }
};
It.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
V.reduceDescriptors(It.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
V.freezeMethods(It);
function nl(e, t) {
  const n = this || zr, s = t || n, o = It.from(s.headers);
  let r = s.data;
  return V.forEach(e, function(a) {
    r = a.call(n, r, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), r;
}
function Gg(e) {
  return !!(e && e.__CANCEL__);
}
function jo(e, t, n) {
  Ae.call(this, e ?? "canceled", Ae.ERR_CANCELED, t, n), this.name = "CanceledError";
}
V.inherits(jo, Ae, {
  __CANCEL__: !0
});
function Qg(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new Ae(
    "Request failed with status code " + n.status,
    [Ae.ERR_BAD_REQUEST, Ae.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function JO(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ZO(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let o = 0, r = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const f = Date.now(), c = s[r];
    i || (i = f), n[o] = l, s[o] = f;
    let d = r, h = 0;
    for (; d !== o; )
      h += n[d++], d = d % e;
    if (o = (o + 1) % e, o === r && (r = (r + 1) % e), f - i < t)
      return;
    const p = c && f - c;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function eS(e, t) {
  let n = 0, s = 1e3 / t, o, r;
  const i = (f, c = Date.now()) => {
    n = c, o = null, r && (clearTimeout(r), r = null), e.apply(null, f);
  };
  return [(...f) => {
    const c = Date.now(), d = c - n;
    d >= s ? i(f, c) : (o = f, r || (r = setTimeout(() => {
      r = null, i(o);
    }, s - d)));
  }, () => o && i(o)];
}
const Gi = (e, t, n = 3) => {
  let s = 0;
  const o = ZO(50, 250);
  return eS((r) => {
    const i = r.loaded, a = r.lengthComputable ? r.total : void 0, l = i - s, f = o(l), c = i <= a;
    s = i;
    const d = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: f || void 0,
      estimated: f && a && c ? (a - i) / f : void 0,
      event: r,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, Yf = (e, t) => {
  const n = e != null;
  return [(s) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: s
  }), t[1]];
}, Gf = (e) => (...t) => V.asap(() => e(...t)), tS = ht.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ht.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ht.origin),
  ht.navigator && /(msie|trident)/i.test(ht.navigator.userAgent)
) : () => !0, nS = ht.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, s, o, r) {
      const i = [e + "=" + encodeURIComponent(t)];
      V.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), V.isString(s) && i.push("path=" + s), V.isString(o) && i.push("domain=" + o), r === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function sS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function oS(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Jg(e, t, n) {
  let s = !sS(t);
  return e && (s || n == !1) ? oS(e, t) : t;
}
const Qf = (e) => e instanceof It ? { ...e } : e;
function Ws(e, t) {
  t = t || {};
  const n = {};
  function s(f, c, d, h) {
    return V.isPlainObject(f) && V.isPlainObject(c) ? V.merge.call({ caseless: h }, f, c) : V.isPlainObject(c) ? V.merge({}, c) : V.isArray(c) ? c.slice() : c;
  }
  function o(f, c, d, h) {
    if (V.isUndefined(c)) {
      if (!V.isUndefined(f))
        return s(void 0, f, d, h);
    } else return s(f, c, d, h);
  }
  function r(f, c) {
    if (!V.isUndefined(c))
      return s(void 0, c);
  }
  function i(f, c) {
    if (V.isUndefined(c)) {
      if (!V.isUndefined(f))
        return s(void 0, f);
    } else return s(void 0, c);
  }
  function a(f, c, d) {
    if (d in t)
      return s(f, c);
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
    headers: (f, c, d) => o(Qf(f), Qf(c), d, !0)
  };
  return V.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const d = l[c] || o, h = d(e[c], t[c], c);
    V.isUndefined(h) && d !== a || (n[c] = h);
  }), n;
}
const Zg = (e) => {
  const t = Ws({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: r, headers: i, auth: a } = t;
  t.headers = i = It.from(i), t.url = qg(Jg(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (V.isFormData(n)) {
    if (ht.hasStandardBrowserEnv || ht.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [f, ...c] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...c].join("; "));
    }
  }
  if (ht.hasStandardBrowserEnv && (s && V.isFunction(s) && (s = s(t)), s || s !== !1 && tS(t.url))) {
    const f = o && r && nS.read(r);
    f && i.set(o, f);
  }
  return t;
}, rS = typeof XMLHttpRequest < "u", iS = rS && function(e) {
  return new Promise(function(n, s) {
    const o = Zg(e);
    let r = o.data;
    const i = It.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: f } = o, c, d, h, p, m;
    function g() {
      p && p(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let v = new XMLHttpRequest();
    v.open(o.method.toUpperCase(), o.url, !0), v.timeout = o.timeout;
    function E() {
      if (!v)
        return;
      const y = It.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), O = {
        data: !a || a === "text" || a === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: y,
        config: e,
        request: v
      };
      Qg(function(x) {
        n(x), g();
      }, function(x) {
        s(x), g();
      }, O), v = null;
    }
    "onloadend" in v ? v.onloadend = E : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, v.onabort = function() {
      v && (s(new Ae("Request aborted", Ae.ECONNABORTED, e, v)), v = null);
    }, v.onerror = function() {
      s(new Ae("Network Error", Ae.ERR_NETWORK, e, v)), v = null;
    }, v.ontimeout = function() {
      let A = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const O = o.transitional || Xg;
      o.timeoutErrorMessage && (A = o.timeoutErrorMessage), s(new Ae(
        A,
        O.clarifyTimeoutError ? Ae.ETIMEDOUT : Ae.ECONNABORTED,
        e,
        v
      )), v = null;
    }, r === void 0 && i.setContentType(null), "setRequestHeader" in v && V.forEach(i.toJSON(), function(A, O) {
      v.setRequestHeader(O, A);
    }), V.isUndefined(o.withCredentials) || (v.withCredentials = !!o.withCredentials), a && a !== "json" && (v.responseType = o.responseType), f && ([h, m] = Gi(f, !0), v.addEventListener("progress", h)), l && v.upload && ([d, p] = Gi(l), v.upload.addEventListener("progress", d), v.upload.addEventListener("loadend", p)), (o.cancelToken || o.signal) && (c = (y) => {
      v && (s(!y || y.type ? new jo(null, e, v) : y), v.abort(), v = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const b = JO(o.url);
    if (b && ht.protocols.indexOf(b) === -1) {
      s(new Ae("Unsupported protocol " + b + ":", Ae.ERR_BAD_REQUEST, e));
      return;
    }
    v.send(r || null);
  });
}, aS = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let s = new AbortController(), o;
    const r = function(f) {
      if (!o) {
        o = !0, a();
        const c = f instanceof Error ? f : this.reason;
        s.abort(c instanceof Ae ? c : new jo(c instanceof Error ? c.message : c));
      }
    };
    let i = t && setTimeout(() => {
      i = null, r(new Ae(`timeout ${t} of ms exceeded`, Ae.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(r) : f.removeEventListener("abort", r);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", r));
    const { signal: l } = s;
    return l.unsubscribe = () => V.asap(a), l;
  }
}, lS = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, o;
  for (; s < n; )
    o = s + t, yield e.slice(s, o), s = o;
}, cS = async function* (e, t) {
  for await (const n of uS(e))
    yield* lS(n, t);
}, uS = async function* (e) {
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
}, Jf = (e, t, n, s) => {
  const o = cS(e, t);
  let r = 0, i, a = (l) => {
    i || (i = !0, s && s(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: f, value: c } = await o.next();
        if (f) {
          a(), l.close();
          return;
        }
        let d = c.byteLength;
        if (n) {
          let h = r += d;
          n(h);
        }
        l.enqueue(new Uint8Array(c));
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
}, Ca = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ev = Ca && typeof ReadableStream == "function", dS = Ca && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), tv = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, fS = ev && tv(() => {
  let e = !1;
  const t = new Request(ht.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Zf = 64 * 1024, rc = ev && tv(() => V.isReadableStream(new Response("").body)), Qi = {
  stream: rc && ((e) => e.body)
};
Ca && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Qi[t] && (Qi[t] = V.isFunction(e[t]) ? (n) => n[t]() : (n, s) => {
      throw new Ae(`Response type '${t}' is not supported`, Ae.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const pS = async (e) => {
  if (e == null)
    return 0;
  if (V.isBlob(e))
    return e.size;
  if (V.isSpecCompliantForm(e))
    return (await new Request(ht.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (V.isArrayBufferView(e) || V.isArrayBuffer(e))
    return e.byteLength;
  if (V.isURLSearchParams(e) && (e = e + ""), V.isString(e))
    return (await dS(e)).byteLength;
}, hS = async (e, t) => {
  const n = V.toFiniteNumber(e.getContentLength());
  return n ?? pS(t);
}, mS = Ca && (async (e) => {
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
    headers: c,
    withCredentials: d = "same-origin",
    fetchOptions: h
  } = Zg(e);
  f = f ? (f + "").toLowerCase() : "text";
  let p = aS([o, r && r.toAbortSignal()], i), m;
  const g = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let v;
  try {
    if (l && fS && n !== "get" && n !== "head" && (v = await hS(c, s)) !== 0) {
      let O = new Request(t, {
        method: "POST",
        body: s,
        duplex: "half"
      }), T;
      if (V.isFormData(s) && (T = O.headers.get("content-type")) && c.setContentType(T), O.body) {
        const [x, j] = Yf(
          v,
          Gi(Gf(l))
        );
        s = Jf(O.body, Zf, x, j);
      }
    }
    V.isString(d) || (d = d ? "include" : "omit");
    const E = "credentials" in Request.prototype;
    m = new Request(t, {
      ...h,
      signal: p,
      method: n.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: s,
      duplex: "half",
      credentials: E ? d : void 0
    });
    let b = await fetch(m, h);
    const y = rc && (f === "stream" || f === "response");
    if (rc && (a || y && g)) {
      const O = {};
      ["status", "statusText", "headers"].forEach((L) => {
        O[L] = b[L];
      });
      const T = V.toFiniteNumber(b.headers.get("content-length")), [x, j] = a && Yf(
        T,
        Gi(Gf(a), !0)
      ) || [];
      b = new Response(
        Jf(b.body, Zf, x, () => {
          j && j(), g && g();
        }),
        O
      );
    }
    f = f || "text";
    let A = await Qi[V.findKey(Qi, f) || "text"](b, e);
    return !y && g && g(), await new Promise((O, T) => {
      Qg(O, T, {
        data: A,
        headers: It.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: m
      });
    });
  } catch (E) {
    throw g && g(), E && E.name === "TypeError" && /Load failed|fetch/i.test(E.message) ? Object.assign(
      new Ae("Network Error", Ae.ERR_NETWORK, e, m),
      {
        cause: E.cause || E
      }
    ) : Ae.from(E, E && E.code, e, m);
  }
}), ic = {
  http: xO,
  xhr: iS,
  fetch: mS
};
V.forEach(ic, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ep = (e) => `- ${e}`, gS = (e) => V.isFunction(e) || e === null || e === !1, nv = {
  getAdapter: (e) => {
    e = V.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, s;
    const o = {};
    for (let r = 0; r < t; r++) {
      n = e[r];
      let i;
      if (s = n, !gS(n) && (s = ic[(i = String(n)).toLowerCase()], s === void 0))
        throw new Ae(`Unknown adapter '${i}'`);
      if (s)
        break;
      o[i || "#" + r] = s;
    }
    if (!s) {
      const r = Object.entries(o).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? r.length > 1 ? `since :
` + r.map(ep).join(`
`) : " " + ep(r[0]) : "as no adapter specified";
      throw new Ae(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: ic
};
function sl(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new jo(null, e);
}
function tp(e) {
  return sl(e), e.headers = It.from(e.headers), e.data = nl.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), nv.getAdapter(e.adapter || zr.adapter)(e).then(function(s) {
    return sl(e), s.data = nl.call(
      e,
      e.transformResponse,
      s
    ), s.headers = It.from(s.headers), s;
  }, function(s) {
    return Gg(s) || (sl(e), s && s.response && (s.response.data = nl.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = It.from(s.response.headers))), Promise.reject(s);
  });
}
const sv = "1.10.0", Ta = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ta[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const np = {};
Ta.transitional = function(t, n, s) {
  function o(r, i) {
    return "[Axios v" + sv + "] Transitional option '" + r + "'" + i + (s ? ". " + s : "");
  }
  return (r, i, a) => {
    if (t === !1)
      throw new Ae(
        o(i, " has been removed" + (n ? " in " + n : "")),
        Ae.ERR_DEPRECATED
      );
    return n && !np[i] && (np[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(r, i, a) : !0;
  };
};
Ta.spelling = function(t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function vS(e, t, n) {
  if (typeof e != "object")
    throw new Ae("options must be an object", Ae.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let o = s.length;
  for (; o-- > 0; ) {
    const r = s[o], i = t[r];
    if (i) {
      const a = e[r], l = a === void 0 || i(a, r, e);
      if (l !== !0)
        throw new Ae("option " + r + " must be " + l, Ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Ae("Unknown option " + r, Ae.ERR_BAD_OPTION);
  }
}
const Di = {
  assertOptions: vS,
  validators: Ta
}, vn = Di.validators;
let Ps = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new qf(),
      response: new qf()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ws(this.defaults, n);
    const { transitional: s, paramsSerializer: o, headers: r } = n;
    s !== void 0 && Di.assertOptions(s, {
      silentJSONParsing: vn.transitional(vn.boolean),
      forcedJSONParsing: vn.transitional(vn.boolean),
      clarifyTimeoutError: vn.transitional(vn.boolean)
    }, !1), o != null && (V.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Di.assertOptions(o, {
      encode: vn.function,
      serialize: vn.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Di.assertOptions(n, {
      baseUrl: vn.spelling("baseURL"),
      withXsrfToken: vn.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = r && V.merge(
      r.common,
      r[n.method]
    );
    r && V.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete r[m];
      }
    ), n.headers = It.concat(i, r);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(g) {
      f.push(g.fulfilled, g.rejected);
    });
    let c, d = 0, h;
    if (!l) {
      const m = [tp.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, f), h = m.length, c = Promise.resolve(n); d < h; )
        c = c.then(m[d++], m[d++]);
      return c;
    }
    h = a.length;
    let p = n;
    for (d = 0; d < h; ) {
      const m = a[d++], g = a[d++];
      try {
        p = m(p);
      } catch (v) {
        g.call(this, v);
        break;
      }
    }
    try {
      c = tp.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, h = f.length; d < h; )
      c = c.then(f[d++], f[d++]);
    return c;
  }
  getUri(t) {
    t = Ws(this.defaults, t);
    const n = Jg(t.baseURL, t.url, t.allowAbsoluteUrls);
    return qg(n, t.params, t.paramsSerializer);
  }
};
V.forEach(["delete", "get", "head", "options"], function(t) {
  Ps.prototype[t] = function(n, s) {
    return this.request(Ws(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
V.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(r, i, a) {
      return this.request(Ws(a || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: i
      }));
    };
  }
  Ps.prototype[t] = n(), Ps.prototype[t + "Form"] = n(!0);
});
let _S = class ov {
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
      token: new ov(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function ES(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function yS(e) {
  return V.isObject(e) && e.isAxiosError === !0;
}
const ac = {
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
Object.entries(ac).forEach(([e, t]) => {
  ac[t] = e;
});
function rv(e) {
  const t = new Ps(e), n = Vg(Ps.prototype.request, t);
  return V.extend(n, Ps.prototype, t, { allOwnKeys: !0 }), V.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return rv(Ws(e, o));
  }, n;
}
const tt = rv(zr);
tt.Axios = Ps;
tt.CanceledError = jo;
tt.CancelToken = _S;
tt.isCancel = Gg;
tt.VERSION = sv;
tt.toFormData = Sa;
tt.AxiosError = Ae;
tt.Cancel = tt.CanceledError;
tt.all = function(t) {
  return Promise.all(t);
};
tt.spread = ES;
tt.isAxiosError = yS;
tt.mergeConfig = Ws;
tt.AxiosHeaders = It;
tt.formToJSON = (e) => Yg(V.isHTMLForm(e) ? new FormData(e) : e);
tt.getAdapter = nv.getAdapter;
tt.HttpStatusCode = ac;
tt.default = tt;
const {
  Axios: yM,
  AxiosError: bM,
  CanceledError: wM,
  isCancel: AM,
  CancelToken: OM,
  VERSION: SM,
  all: CM,
  Cancel: TM,
  isAxiosError: NM,
  spread: DM,
  toFormData: xM,
  AxiosHeaders: kM,
  HttpStatusCode: RM,
  formToJSON: IM,
  getAdapter: PM,
  mergeConfig: VM
} = tt, bS = "fhir_snapshot", wS = "api", AS = () => {
  let n = {
    pid: new URLSearchParams(location.search).get("pid"),
    page: wS,
    // content: "externalModule",
    type: "module",
    prefix: bS
  };
  return window.redcap_csrf_token && (n.redcap_csrf_token = window.redcap_csrf_token), n;
}, OS = () => {
  const e = tt.create({
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
    const n = AS();
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
}, nt = OS(), yt = {
  getProjectSettings() {
    const e = { route: "project-settings" };
    return nt.get("", { params: e });
  },
  updateProjectSettings(e) {
    const t = { route: "project-settings" };
    return nt.put("", e, { params: t });
  },
  listMrns(e, t) {
    const n = { route: "mrns" };
    return e && (n._page = e), t && (n._per_page = t), nt.get("", { params: n });
  },
  addMrn(e) {
    const t = { route: "mrns" };
    return nt.post("", { mrn: e }, { params: t });
  },
  removeMrn(e) {
    const t = { route: `mrns/${e}` };
    return nt.delete("", { params: t, data: e });
  },
  triggerFetch(e, t) {
    const n = { route: "trigger-fetch" };
    return nt.post("", { mrns: e, resources: t }, { params: n });
  },
  getFetchStatus() {
    const e = { route: "fetch-status" };
    return nt.get("", { params: e });
  },
  createZipArchive(e) {
    const t = { route: "create-zip-archive" };
    return nt.post("", { mrns: e }, { params: t });
  },
  downloadZip(e) {
    const t = { route: "download-zip", zip_id: e };
    return nt.get("", { params: t, responseType: "blob" });
  },
  // Archive management API methods
  listArchives() {
    const e = { route: "archives" };
    return nt.get("", { params: e });
  },
  createArchiveSelected(e, t) {
    const n = { route: "archives/selected" }, s = { mrns: e };
    return t && Object.assign(s, t), nt.post("", s, { params: n });
  },
  createArchiveAll(e) {
    const t = { route: "archives/all" }, n = e || {};
    return nt.post("", n, { params: t });
  },
  downloadArchive(e) {
    const t = { route: `archives/${e}/download` };
    return nt.get("", { params: t, responseType: "blob" });
  },
  deleteArchive(e) {
    const t = { route: `archives/${e}` };
    return nt.delete("", { params: t });
  },
  // Enhanced MRN and resource management
  getMrnResources(e) {
    const t = { route: `mrns/${e}/resources` };
    return nt.get("", { params: t });
  },
  getProjectSummary() {
    const e = { route: "project-summary" };
    return nt.get("", { params: e });
  },
  triggerFetchMrns(e, t) {
    const n = { route: "trigger-fetch" }, s = { mrns: e };
    return t && t.length > 0 && (s.resources = t), nt.post("", s, { params: n });
  },
  performFullSync() {
    const e = { route: "perform-full-sync" };
    return nt.post("", {}, { params: e });
  },
  retryFailedResource(e, t, n) {
    const s = { route: "retry-failed" };
    return nt.post("", {
      mrn: e,
      resource_type: t,
      repeat_instance: n,
      bulk: !1
    }, { params: s });
  },
  bulkRetryFailed(e) {
    const t = { route: "retry-failed" }, n = { bulk: !0 };
    return e && (n.resource_type = e), nt.post("", n, { params: t });
  }
}, Na = /* @__PURE__ */ $r("errors", () => {
  const e = ee([]);
  return {
    errors: e,
    addError: (s, o) => {
      const r = SS(s);
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
function SS(e) {
  return e instanceof Error ? e : typeof e == "string" ? new Error(e) : typeof e == "object" && e !== null && "message" in e ? new Error(String(e.message)) : new Error("Unknown error");
}
var St = "top", Mt = "bottom", Ft = "right", Ct = "left", Da = "auto", Uo = [St, Mt, Ft, Ct], $s = "start", Co = "end", iv = "clippingParents", eu = "viewport", io = "popper", av = "reference", lc = /* @__PURE__ */ Uo.reduce(function(e, t) {
  return e.concat([t + "-" + $s, t + "-" + Co]);
}, []), tu = /* @__PURE__ */ [].concat(Uo, [Da]).reduce(function(e, t) {
  return e.concat([t, t + "-" + $s, t + "-" + Co]);
}, []), lv = "beforeRead", cv = "read", uv = "afterRead", dv = "beforeMain", fv = "main", pv = "afterMain", hv = "beforeWrite", mv = "write", gv = "afterWrite", vv = [lv, cv, uv, dv, fv, pv, hv, mv, gv];
function Dn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Bt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ks(e) {
  var t = Bt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Kt(e) {
  var t = Bt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function nu(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Bt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function CS(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var s = t.styles[n] || {}, o = t.attributes[n] || {}, r = t.elements[n];
    !Kt(r) || !Dn(r) || (Object.assign(r.style, s), Object.keys(o).forEach(function(i) {
      var a = o[i];
      a === !1 ? r.removeAttribute(i) : r.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function TS(e) {
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
      !Kt(o) || !Dn(o) || (Object.assign(o.style, a), Object.keys(r).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const su = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: CS,
  effect: TS,
  requires: ["computeStyles"]
};
function On(e) {
  return e.split("-")[0];
}
var Vs = Math.max, Ji = Math.min, To = Math.round;
function cc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function _v() {
  return !/^((?!chrome|android).)*safari/i.test(cc());
}
function No(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var s = e.getBoundingClientRect(), o = 1, r = 1;
  t && Kt(e) && (o = e.offsetWidth > 0 && To(s.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && To(s.height) / e.offsetHeight || 1);
  var i = Ks(e) ? Bt(e) : window, a = i.visualViewport, l = !_v() && n, f = (s.left + (l && a ? a.offsetLeft : 0)) / o, c = (s.top + (l && a ? a.offsetTop : 0)) / r, d = s.width / o, h = s.height / r;
  return {
    width: d,
    height: h,
    top: c,
    right: f + d,
    bottom: c + h,
    left: f,
    x: f,
    y: c
  };
}
function ou(e) {
  var t = No(e), n = e.offsetWidth, s = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: s
  };
}
function Ev(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && nu(n)) {
    var s = t;
    do {
      if (s && e.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function Wn(e) {
  return Bt(e).getComputedStyle(e);
}
function NS(e) {
  return ["table", "td", "th"].indexOf(Dn(e)) >= 0;
}
function fs(e) {
  return ((Ks(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function xa(e) {
  return Dn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (nu(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    fs(e)
  );
}
function sp(e) {
  return !Kt(e) || // https://github.com/popperjs/popper-core/issues/837
  Wn(e).position === "fixed" ? null : e.offsetParent;
}
function DS(e) {
  var t = /firefox/i.test(cc()), n = /Trident/i.test(cc());
  if (n && Kt(e)) {
    var s = Wn(e);
    if (s.position === "fixed")
      return null;
  }
  var o = xa(e);
  for (nu(o) && (o = o.host); Kt(o) && ["html", "body"].indexOf(Dn(o)) < 0; ) {
    var r = Wn(o);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function qr(e) {
  for (var t = Bt(e), n = sp(e); n && NS(n) && Wn(n).position === "static"; )
    n = sp(n);
  return n && (Dn(n) === "html" || Dn(n) === "body" && Wn(n).position === "static") ? t : n || DS(e) || t;
}
function ru(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function mr(e, t, n) {
  return Vs(e, Ji(t, n));
}
function xS(e, t, n) {
  var s = mr(e, t, n);
  return s > n ? n : s;
}
function yv() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function bv(e) {
  return Object.assign({}, yv(), e);
}
function wv(e, t) {
  return t.reduce(function(n, s) {
    return n[s] = e, n;
  }, {});
}
var kS = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, bv(typeof t != "number" ? t : wv(t, Uo));
};
function RS(e) {
  var t, n = e.state, s = e.name, o = e.options, r = n.elements.arrow, i = n.modifiersData.popperOffsets, a = On(n.placement), l = ru(a), f = [Ct, Ft].indexOf(a) >= 0, c = f ? "height" : "width";
  if (!(!r || !i)) {
    var d = kS(o.padding, n), h = ou(r), p = l === "y" ? St : Ct, m = l === "y" ? Mt : Ft, g = n.rects.reference[c] + n.rects.reference[l] - i[l] - n.rects.popper[c], v = i[l] - n.rects.reference[l], E = qr(r), b = E ? l === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, y = g / 2 - v / 2, A = d[p], O = b - h[c] - d[m], T = b / 2 - h[c] / 2 + y, x = mr(A, T, O), j = l;
    n.modifiersData[s] = (t = {}, t[j] = x, t.centerOffset = x - T, t);
  }
}
function IS(e) {
  var t = e.state, n = e.options, s = n.element, o = s === void 0 ? "[data-popper-arrow]" : s;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ev(t.elements.popper, o) && (t.elements.arrow = o));
}
const Av = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: RS,
  effect: IS,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Do(e) {
  return e.split("-")[1];
}
var PS = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function VS(e, t) {
  var n = e.x, s = e.y, o = t.devicePixelRatio || 1;
  return {
    x: To(n * o) / o || 0,
    y: To(s * o) / o || 0
  };
}
function op(e) {
  var t, n = e.popper, s = e.popperRect, o = e.placement, r = e.variation, i = e.offsets, a = e.position, l = e.gpuAcceleration, f = e.adaptive, c = e.roundOffsets, d = e.isFixed, h = i.x, p = h === void 0 ? 0 : h, m = i.y, g = m === void 0 ? 0 : m, v = typeof c == "function" ? c({
    x: p,
    y: g
  }) : {
    x: p,
    y: g
  };
  p = v.x, g = v.y;
  var E = i.hasOwnProperty("x"), b = i.hasOwnProperty("y"), y = Ct, A = St, O = window;
  if (f) {
    var T = qr(n), x = "clientHeight", j = "clientWidth";
    if (T === Bt(n) && (T = fs(n), Wn(T).position !== "static" && a === "absolute" && (x = "scrollHeight", j = "scrollWidth")), T = T, o === St || (o === Ct || o === Ft) && r === Co) {
      A = Mt;
      var L = d && T === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[x]
      );
      g -= L - s.height, g *= l ? 1 : -1;
    }
    if (o === Ct || (o === St || o === Mt) && r === Co) {
      y = Ft;
      var F = d && T === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[j]
      );
      p -= F - s.width, p *= l ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: a
  }, f && PS), C = c === !0 ? VS({
    x: p,
    y: g
  }, Bt(n)) : {
    x: p,
    y: g
  };
  if (p = C.x, g = C.y, l) {
    var I;
    return Object.assign({}, B, (I = {}, I[A] = b ? "0" : "", I[y] = E ? "0" : "", I.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", I));
  }
  return Object.assign({}, B, (t = {}, t[A] = b ? g + "px" : "", t[y] = E ? p + "px" : "", t.transform = "", t));
}
function LS(e) {
  var t = e.state, n = e.options, s = n.gpuAcceleration, o = s === void 0 ? !0 : s, r = n.adaptive, i = r === void 0 ? !0 : r, a = n.roundOffsets, l = a === void 0 ? !0 : a, f = {
    placement: On(t.placement),
    variation: Do(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, op(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, op(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const iu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: LS,
  data: {}
};
var ii = {
  passive: !0
};
function MS(e) {
  var t = e.state, n = e.instance, s = e.options, o = s.scroll, r = o === void 0 ? !0 : o, i = s.resize, a = i === void 0 ? !0 : i, l = Bt(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && f.forEach(function(c) {
    c.addEventListener("scroll", n.update, ii);
  }), a && l.addEventListener("resize", n.update, ii), function() {
    r && f.forEach(function(c) {
      c.removeEventListener("scroll", n.update, ii);
    }), a && l.removeEventListener("resize", n.update, ii);
  };
}
const au = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: MS,
  data: {}
};
var FS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return FS[t];
  });
}
var BS = {
  start: "end",
  end: "start"
};
function rp(e) {
  return e.replace(/start|end/g, function(t) {
    return BS[t];
  });
}
function lu(e) {
  var t = Bt(e), n = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: s
  };
}
function cu(e) {
  return No(fs(e)).left + lu(e).scrollLeft;
}
function jS(e, t) {
  var n = Bt(e), s = fs(e), o = n.visualViewport, r = s.clientWidth, i = s.clientHeight, a = 0, l = 0;
  if (o) {
    r = o.width, i = o.height;
    var f = _v();
    (f || !f && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: r,
    height: i,
    x: a + cu(e),
    y: l
  };
}
function US(e) {
  var t, n = fs(e), s = lu(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, r = Vs(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Vs(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -s.scrollLeft + cu(e), l = -s.scrollTop;
  return Wn(o || n).direction === "rtl" && (a += Vs(n.clientWidth, o ? o.clientWidth : 0) - r), {
    width: r,
    height: i,
    x: a,
    y: l
  };
}
function uu(e) {
  var t = Wn(e), n = t.overflow, s = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + s);
}
function Ov(e) {
  return ["html", "body", "#document"].indexOf(Dn(e)) >= 0 ? e.ownerDocument.body : Kt(e) && uu(e) ? e : Ov(xa(e));
}
function gr(e, t) {
  var n;
  t === void 0 && (t = []);
  var s = Ov(e), o = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Bt(s), i = o ? [r].concat(r.visualViewport || [], uu(s) ? s : []) : s, a = t.concat(i);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(gr(xa(i)))
  );
}
function uc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function HS(e, t) {
  var n = No(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ip(e, t, n) {
  return t === eu ? uc(jS(e, n)) : Ks(t) ? HS(t, n) : uc(US(fs(e)));
}
function WS(e) {
  var t = gr(xa(e)), n = ["absolute", "fixed"].indexOf(Wn(e).position) >= 0, s = n && Kt(e) ? qr(e) : e;
  return Ks(s) ? t.filter(function(o) {
    return Ks(o) && Ev(o, s) && Dn(o) !== "body";
  }) : [];
}
function $S(e, t, n, s) {
  var o = t === "clippingParents" ? WS(e) : [].concat(t), r = [].concat(o, [n]), i = r[0], a = r.reduce(function(l, f) {
    var c = ip(e, f, s);
    return l.top = Vs(c.top, l.top), l.right = Ji(c.right, l.right), l.bottom = Ji(c.bottom, l.bottom), l.left = Vs(c.left, l.left), l;
  }, ip(e, i, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Sv(e) {
  var t = e.reference, n = e.element, s = e.placement, o = s ? On(s) : null, r = s ? Do(s) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case St:
      l = {
        x: i,
        y: t.y - n.height
      };
      break;
    case Mt:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case Ft:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case Ct:
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
  var f = o ? ru(o) : null;
  if (f != null) {
    var c = f === "y" ? "height" : "width";
    switch (r) {
      case $s:
        l[f] = l[f] - (t[c] / 2 - n[c] / 2);
        break;
      case Co:
        l[f] = l[f] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function xo(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = s === void 0 ? e.placement : s, r = n.strategy, i = r === void 0 ? e.strategy : r, a = n.boundary, l = a === void 0 ? iv : a, f = n.rootBoundary, c = f === void 0 ? eu : f, d = n.elementContext, h = d === void 0 ? io : d, p = n.altBoundary, m = p === void 0 ? !1 : p, g = n.padding, v = g === void 0 ? 0 : g, E = bv(typeof v != "number" ? v : wv(v, Uo)), b = h === io ? av : io, y = e.rects.popper, A = e.elements[m ? b : h], O = $S(Ks(A) ? A : A.contextElement || fs(e.elements.popper), l, c, i), T = No(e.elements.reference), x = Sv({
    reference: T,
    element: y,
    placement: o
  }), j = uc(Object.assign({}, y, x)), L = h === io ? j : T, F = {
    top: O.top - L.top + E.top,
    bottom: L.bottom - O.bottom + E.bottom,
    left: O.left - L.left + E.left,
    right: L.right - O.right + E.right
  }, B = e.modifiersData.offset;
  if (h === io && B) {
    var C = B[o];
    Object.keys(F).forEach(function(I) {
      var Y = [Ft, Mt].indexOf(I) >= 0 ? 1 : -1, pe = [St, Mt].indexOf(I) >= 0 ? "y" : "x";
      F[I] += C[pe] * Y;
    });
  }
  return F;
}
function KS(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = n.boundary, r = n.rootBoundary, i = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, f = l === void 0 ? tu : l, c = Do(s), d = c ? a ? lc : lc.filter(function(m) {
    return Do(m) === c;
  }) : Uo, h = d.filter(function(m) {
    return f.indexOf(m) >= 0;
  });
  h.length === 0 && (h = d);
  var p = h.reduce(function(m, g) {
    return m[g] = xo(e, {
      placement: g,
      boundary: o,
      rootBoundary: r,
      padding: i
    })[On(g)], m;
  }, {});
  return Object.keys(p).sort(function(m, g) {
    return p[m] - p[g];
  });
}
function zS(e) {
  if (On(e) === Da)
    return [];
  var t = xi(e);
  return [rp(e), t, rp(t)];
}
function qS(e) {
  var t = e.state, n = e.options, s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (var o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !0 : i, l = n.fallbackPlacements, f = n.padding, c = n.boundary, d = n.rootBoundary, h = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, g = n.allowedAutoPlacements, v = t.options.placement, E = On(v), b = E === v, y = l || (b || !m ? [xi(v)] : zS(v)), A = [v].concat(y).reduce(function(Je, ut) {
      return Je.concat(On(ut) === Da ? KS(t, {
        placement: ut,
        boundary: c,
        rootBoundary: d,
        padding: f,
        flipVariations: m,
        allowedAutoPlacements: g
      }) : ut);
    }, []), O = t.rects.reference, T = t.rects.popper, x = /* @__PURE__ */ new Map(), j = !0, L = A[0], F = 0; F < A.length; F++) {
      var B = A[F], C = On(B), I = Do(B) === $s, Y = [St, Mt].indexOf(C) >= 0, pe = Y ? "width" : "height", D = xo(t, {
        placement: B,
        boundary: c,
        rootBoundary: d,
        altBoundary: h,
        padding: f
      }), R = Y ? I ? Ft : Ct : I ? Mt : St;
      O[pe] > T[pe] && (R = xi(R));
      var H = xi(R), te = [];
      if (r && te.push(D[C] <= 0), a && te.push(D[R] <= 0, D[H] <= 0), te.every(function(Je) {
        return Je;
      })) {
        L = B, j = !1;
        break;
      }
      x.set(B, te);
    }
    if (j)
      for (var we = m ? 3 : 1, Le = function(ut) {
        var Tt = A.find(function(M) {
          var ne = x.get(M);
          if (ne)
            return ne.slice(0, ut).every(function(oe) {
              return oe;
            });
        });
        if (Tt)
          return L = Tt, "break";
      }, be = we; be > 0; be--) {
        var Te = Le(be);
        if (Te === "break") break;
      }
    t.placement !== L && (t.modifiersData[s]._skip = !0, t.placement = L, t.reset = !0);
  }
}
const Cv = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: qS,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ap(e, t, n) {
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
function lp(e) {
  return [St, Ft, Mt, Ct].some(function(t) {
    return e[t] >= 0;
  });
}
function XS(e) {
  var t = e.state, n = e.name, s = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, i = xo(t, {
    elementContext: "reference"
  }), a = xo(t, {
    altBoundary: !0
  }), l = ap(i, s), f = ap(a, o, r), c = lp(l), d = lp(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: f,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const Tv = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: XS
};
function YS(e, t, n) {
  var s = On(e), o = [Ct, St].indexOf(s) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = r[0], a = r[1];
  return i = i || 0, a = (a || 0) * o, [Ct, Ft].indexOf(s) >= 0 ? {
    x: a,
    y: i
  } : {
    x: i,
    y: a
  };
}
function GS(e) {
  var t = e.state, n = e.options, s = e.name, o = n.offset, r = o === void 0 ? [0, 0] : o, i = tu.reduce(function(c, d) {
    return c[d] = YS(d, t.rects, r), c;
  }, {}), a = i[t.placement], l = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += f), t.modifiersData[s] = i;
}
const Nv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: GS
};
function QS(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Sv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const du = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: QS,
  data: {}
};
function JS(e) {
  return e === "x" ? "y" : "x";
}
function ZS(e) {
  var t = e.state, n = e.options, s = e.name, o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !1 : i, l = n.boundary, f = n.rootBoundary, c = n.altBoundary, d = n.padding, h = n.tether, p = h === void 0 ? !0 : h, m = n.tetherOffset, g = m === void 0 ? 0 : m, v = xo(t, {
    boundary: l,
    rootBoundary: f,
    padding: d,
    altBoundary: c
  }), E = On(t.placement), b = Do(t.placement), y = !b, A = ru(E), O = JS(A), T = t.modifiersData.popperOffsets, x = t.rects.reference, j = t.rects.popper, L = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, F = typeof L == "number" ? {
    mainAxis: L,
    altAxis: L
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, L), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, C = {
    x: 0,
    y: 0
  };
  if (T) {
    if (r) {
      var I, Y = A === "y" ? St : Ct, pe = A === "y" ? Mt : Ft, D = A === "y" ? "height" : "width", R = T[A], H = R + v[Y], te = R - v[pe], we = p ? -j[D] / 2 : 0, Le = b === $s ? x[D] : j[D], be = b === $s ? -j[D] : -x[D], Te = t.elements.arrow, Je = p && Te ? ou(Te) : {
        width: 0,
        height: 0
      }, ut = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : yv(), Tt = ut[Y], M = ut[pe], ne = mr(0, x[D], Je[D]), oe = y ? x[D] / 2 - we - ne - Tt - F.mainAxis : Le - ne - Tt - F.mainAxis, ue = y ? -x[D] / 2 + we + ne + M + F.mainAxis : be + ne + M + F.mainAxis, Se = t.elements.arrow && qr(t.elements.arrow), qe = Se ? A === "y" ? Se.clientTop || 0 : Se.clientLeft || 0 : 0, _ = (I = B?.[A]) != null ? I : 0, w = R + oe - _ - qe, k = R + ue - _, W = mr(p ? Ji(H, w) : H, R, p ? Vs(te, k) : te);
      T[A] = W, C[A] = W - R;
    }
    if (a) {
      var U, $ = A === "x" ? St : Ct, se = A === "x" ? Mt : Ft, Q = T[O], J = O === "y" ? "height" : "width", G = Q + v[$], fe = Q - v[se], Z = [St, Ct].indexOf(E) !== -1, de = (U = B?.[O]) != null ? U : 0, _e = Z ? G : Q - x[J] - j[J] - de + F.altAxis, De = Z ? Q + x[J] + j[J] - de - F.altAxis : fe, je = p && Z ? xS(_e, Q, De) : mr(p ? _e : G, Q, p ? De : fe);
      T[O] = je, C[O] = je - Q;
    }
    t.modifiersData[s] = C;
  }
}
const Dv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ZS,
  requiresIfExists: ["offset"]
};
function eC(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function tC(e) {
  return e === Bt(e) || !Kt(e) ? lu(e) : eC(e);
}
function nC(e) {
  var t = e.getBoundingClientRect(), n = To(t.width) / e.offsetWidth || 1, s = To(t.height) / e.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function sC(e, t, n) {
  n === void 0 && (n = !1);
  var s = Kt(t), o = Kt(t) && nC(t), r = fs(t), i = No(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (s || !s && !n) && ((Dn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  uu(r)) && (a = tC(t)), Kt(t) ? (l = No(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : r && (l.x = cu(r))), {
    x: i.left + a.scrollLeft - l.x,
    y: i.top + a.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function oC(e) {
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
function rC(e) {
  var t = oC(e);
  return vv.reduce(function(n, s) {
    return n.concat(t.filter(function(o) {
      return o.phase === s;
    }));
  }, []);
}
function iC(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function aC(e) {
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
var cp = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function up() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function ka(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, s = n === void 0 ? [] : n, o = t.defaultOptions, r = o === void 0 ? cp : o;
  return function(a, l, f) {
    f === void 0 && (f = r);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, cp, r),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], h = !1, p = {
      state: c,
      setOptions: function(E) {
        var b = typeof E == "function" ? E(c.options) : E;
        g(), c.options = Object.assign({}, r, c.options, b), c.scrollParents = {
          reference: Ks(a) ? gr(a) : a.contextElement ? gr(a.contextElement) : [],
          popper: gr(l)
        };
        var y = rC(aC([].concat(s, c.options.modifiers)));
        return c.orderedModifiers = y.filter(function(A) {
          return A.enabled;
        }), m(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var E = c.elements, b = E.reference, y = E.popper;
          if (up(b, y)) {
            c.rects = {
              reference: sC(b, qr(y), c.options.strategy === "fixed"),
              popper: ou(y)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(F) {
              return c.modifiersData[F.name] = Object.assign({}, F.data);
            });
            for (var A = 0; A < c.orderedModifiers.length; A++) {
              if (c.reset === !0) {
                c.reset = !1, A = -1;
                continue;
              }
              var O = c.orderedModifiers[A], T = O.fn, x = O.options, j = x === void 0 ? {} : x, L = O.name;
              typeof T == "function" && (c = T({
                state: c,
                options: j,
                name: L,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: iC(function() {
        return new Promise(function(v) {
          p.forceUpdate(), v(c);
        });
      }),
      destroy: function() {
        g(), h = !0;
      }
    };
    if (!up(a, l))
      return p;
    p.setOptions(f).then(function(v) {
      !h && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function m() {
      c.orderedModifiers.forEach(function(v) {
        var E = v.name, b = v.options, y = b === void 0 ? {} : b, A = v.effect;
        if (typeof A == "function") {
          var O = A({
            state: c,
            name: E,
            instance: p,
            options: y
          }), T = function() {
          };
          d.push(O || T);
        }
      });
    }
    function g() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return p;
  };
}
var lC = /* @__PURE__ */ ka(), cC = [au, du, iu, su], uC = /* @__PURE__ */ ka({
  defaultModifiers: cC
}), dC = [au, du, iu, su, Nv, Cv, Dv, Av, Tv], fu = /* @__PURE__ */ ka({
  defaultModifiers: dC
});
const xv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: pv,
  afterRead: uv,
  afterWrite: gv,
  applyStyles: su,
  arrow: Av,
  auto: Da,
  basePlacements: Uo,
  beforeMain: dv,
  beforeRead: lv,
  beforeWrite: hv,
  bottom: Mt,
  clippingParents: iv,
  computeStyles: iu,
  createPopper: fu,
  createPopperBase: lC,
  createPopperLite: uC,
  detectOverflow: xo,
  end: Co,
  eventListeners: au,
  flip: Cv,
  hide: Tv,
  left: Ct,
  main: fv,
  modifierPhases: vv,
  offset: Nv,
  placements: tu,
  popper: io,
  popperGenerator: ka,
  popperOffsets: du,
  preventOverflow: Dv,
  read: cv,
  reference: av,
  right: Ft,
  start: $s,
  top: St,
  variationPlacements: lc,
  viewport: eu,
  write: mv
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const Yn = /* @__PURE__ */ new Map(), ol = {
  set(e, t, n) {
    Yn.has(e) || Yn.set(e, /* @__PURE__ */ new Map());
    const s = Yn.get(e);
    if (!s.has(t) && s.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
      return;
    }
    s.set(t, n);
  },
  get(e, t) {
    return Yn.has(e) && Yn.get(e).get(t) || null;
  },
  remove(e, t) {
    if (!Yn.has(e))
      return;
    const n = Yn.get(e);
    n.delete(t), n.size === 0 && Yn.delete(e);
  }
}, fC = 1e6, pC = 1e3, dc = "transitionend", kv = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)), e), hC = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), mC = (e) => {
  do
    e += Math.floor(Math.random() * fC);
  while (document.getElementById(e));
  return e;
}, gC = (e) => {
  if (!e)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: n
  } = window.getComputedStyle(e);
  const s = Number.parseFloat(t), o = Number.parseFloat(n);
  return !s && !o ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * pC);
}, Rv = (e) => {
  e.dispatchEvent(new Event(dc));
}, Un = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), ls = (e) => Un(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(kv(e)) : null, Ho = (e) => {
  if (!Un(e) || e.getClientRects().length === 0)
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
}, cs = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Iv = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? Iv(e.parentNode) : null;
}, Zi = () => {
}, Xr = (e) => {
  e.offsetHeight;
}, Pv = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, rl = [], vC = (e) => {
  document.readyState === "loading" ? (rl.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of rl)
      t();
  }), rl.push(e)) : e();
}, Xt = () => document.documentElement.dir === "rtl", Gt = (e) => {
  vC(() => {
    const t = Pv();
    if (t) {
      const n = e.NAME, s = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = s, e.jQueryInterface);
    }
  });
}, kt = (e, t = [], n = e) => typeof e == "function" ? e.call(...t) : n, Vv = (e, t, n = !0) => {
  if (!n) {
    kt(e);
    return;
  }
  const o = gC(t) + 5;
  let r = !1;
  const i = ({
    target: a
  }) => {
    a === t && (r = !0, t.removeEventListener(dc, i), kt(e));
  };
  t.addEventListener(dc, i), setTimeout(() => {
    r || Rv(t);
  }, o);
}, pu = (e, t, n, s) => {
  const o = e.length;
  let r = e.indexOf(t);
  return r === -1 ? !n && s ? e[o - 1] : e[0] : (r += n ? 1 : -1, s && (r = (r + o) % o), e[Math.max(0, Math.min(r, o - 1))]);
}, _C = /[^.]*(?=\..*)\.|.*/, EC = /\..*/, yC = /::\d+$/, il = {};
let dp = 1;
const Lv = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, bC = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Mv(e, t) {
  return t && `${t}::${dp++}` || e.uidEvent || dp++;
}
function Fv(e) {
  const t = Mv(e);
  return e.uidEvent = t, il[t] = il[t] || {}, il[t];
}
function wC(e, t) {
  return function n(s) {
    return hu(s, {
      delegateTarget: e
    }), n.oneOff && X.off(e, s.type, t), t.apply(e, [s]);
  };
}
function AC(e, t, n) {
  return function s(o) {
    const r = e.querySelectorAll(t);
    for (let {
      target: i
    } = o; i && i !== this; i = i.parentNode)
      for (const a of r)
        if (a === i)
          return hu(o, {
            delegateTarget: i
          }), s.oneOff && X.off(e, o.type, t, n), n.apply(i, [o]);
  };
}
function Bv(e, t, n = null) {
  return Object.values(e).find((s) => s.callable === t && s.delegationSelector === n);
}
function jv(e, t, n) {
  const s = typeof t == "string", o = s ? n : t || n;
  let r = Uv(e);
  return bC.has(r) || (r = e), [s, o, r];
}
function fp(e, t, n, s, o) {
  if (typeof t != "string" || !e)
    return;
  let [r, i, a] = jv(t, n, s);
  t in Lv && (i = ((m) => function(g) {
    if (!g.relatedTarget || g.relatedTarget !== g.delegateTarget && !g.delegateTarget.contains(g.relatedTarget))
      return m.call(this, g);
  })(i));
  const l = Fv(e), f = l[a] || (l[a] = {}), c = Bv(f, i, r ? n : null);
  if (c) {
    c.oneOff = c.oneOff && o;
    return;
  }
  const d = Mv(i, t.replace(_C, "")), h = r ? AC(e, n, i) : wC(e, i);
  h.delegationSelector = r ? n : null, h.callable = i, h.oneOff = o, h.uidEvent = d, f[d] = h, e.addEventListener(a, h, r);
}
function fc(e, t, n, s, o) {
  const r = Bv(t[n], s, o);
  r && (e.removeEventListener(n, r, !!o), delete t[n][r.uidEvent]);
}
function OC(e, t, n, s) {
  const o = t[n] || {};
  for (const [r, i] of Object.entries(o))
    r.includes(s) && fc(e, t, n, i.callable, i.delegationSelector);
}
function Uv(e) {
  return e = e.replace(EC, ""), Lv[e] || e;
}
const X = {
  on(e, t, n, s) {
    fp(e, t, n, s, !1);
  },
  one(e, t, n, s) {
    fp(e, t, n, s, !0);
  },
  off(e, t, n, s) {
    if (typeof t != "string" || !e)
      return;
    const [o, r, i] = jv(t, n, s), a = i !== t, l = Fv(e), f = l[i] || {}, c = t.startsWith(".");
    if (typeof r < "u") {
      if (!Object.keys(f).length)
        return;
      fc(e, l, i, r, o ? n : null);
      return;
    }
    if (c)
      for (const d of Object.keys(l))
        OC(e, l, d, t.slice(1));
    for (const [d, h] of Object.entries(f)) {
      const p = d.replace(yC, "");
      (!a || t.includes(p)) && fc(e, l, i, h.callable, h.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const s = Pv(), o = Uv(t), r = t !== o;
    let i = null, a = !0, l = !0, f = !1;
    r && s && (i = s.Event(t, n), s(e).trigger(i), a = !i.isPropagationStopped(), l = !i.isImmediatePropagationStopped(), f = i.isDefaultPrevented());
    const c = hu(new Event(t, {
      bubbles: a,
      cancelable: !0
    }), n);
    return f && c.preventDefault(), l && e.dispatchEvent(c), c.defaultPrevented && i && i.preventDefault(), c;
  }
};
function hu(e, t = {}) {
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
function pp(e) {
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
function al(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Hn = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${al(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${al(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {}, n = Object.keys(e.dataset).filter((s) => s.startsWith("bs") && !s.startsWith("bsConfig"));
    for (const s of n) {
      let o = s.replace(/^bs/, "");
      o = o.charAt(0).toLowerCase() + o.slice(1), t[o] = pp(e.dataset[s]);
    }
    return t;
  },
  getDataAttribute(e, t) {
    return pp(e.getAttribute(`data-bs-${al(t)}`));
  }
};
class Yr {
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
    const s = Un(n) ? Hn.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof s == "object" ? s : {},
      ...Un(n) ? Hn.getDataAttributes(n) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [s, o] of Object.entries(n)) {
      const r = t[s], i = Un(r) ? "element" : hC(r);
      if (!new RegExp(o).test(i))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${i}" but expected type "${o}".`);
    }
  }
}
const SC = "5.3.7";
class dn extends Yr {
  constructor(t, n) {
    super(), t = ls(t), t && (this._element = t, this._config = this._getConfig(n), ol.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    ol.remove(this._element, this.constructor.DATA_KEY), X.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  // Private
  _queueCallback(t, n, s = !0) {
    Vv(t, n, s);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return ol.get(ls(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return SC;
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
const ll = (e) => {
  let t = e.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith("."))
      return null;
    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
  }
  return t ? t.split(",").map((n) => kv(n)).join(",") : null;
}, he = {
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
    return this.find(t, e).filter((n) => !cs(n) && Ho(n));
  },
  getSelectorFromElement(e) {
    const t = ll(e);
    return t && he.findOne(t) ? t : null;
  },
  getElementFromSelector(e) {
    const t = ll(e);
    return t ? he.findOne(t) : null;
  },
  getMultipleElementsFromSelector(e) {
    const t = ll(e);
    return t ? he.find(t) : [];
  }
}, Ra = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, s = e.NAME;
  X.on(document, n, `[data-bs-dismiss="${s}"]`, function(o) {
    if (["A", "AREA"].includes(this.tagName) && o.preventDefault(), cs(this))
      return;
    const r = he.getElementFromSelector(this) || this.closest(`.${s}`);
    e.getOrCreateInstance(r)[t]();
  });
}, CC = "alert", TC = "bs.alert", Hv = `.${TC}`, NC = `close${Hv}`, DC = `closed${Hv}`, xC = "fade", kC = "show";
class Ia extends dn {
  // Getters
  static get NAME() {
    return CC;
  }
  // Public
  close() {
    if (X.trigger(this._element, NC).defaultPrevented)
      return;
    this._element.classList.remove(kC);
    const n = this._element.classList.contains(xC);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  // Private
  _destroyElement() {
    this._element.remove(), X.trigger(this._element, DC), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ia.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Ra(Ia, "close");
Gt(Ia);
const RC = "button", IC = "bs.button", PC = `.${IC}`, VC = ".data-api", LC = "active", hp = '[data-bs-toggle="button"]', MC = `click${PC}${VC}`;
class Pa extends dn {
  // Getters
  static get NAME() {
    return RC;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(LC));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Pa.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
X.on(document, MC, hp, (e) => {
  e.preventDefault();
  const t = e.target.closest(hp);
  Pa.getOrCreateInstance(t).toggle();
});
Gt(Pa);
const FC = "swipe", Wo = ".bs.swipe", BC = `touchstart${Wo}`, jC = `touchmove${Wo}`, UC = `touchend${Wo}`, HC = `pointerdown${Wo}`, WC = `pointerup${Wo}`, $C = "touch", KC = "pen", zC = "pointer-event", qC = 40, XC = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, YC = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class ea extends Yr {
  constructor(t, n) {
    super(), this._element = t, !(!t || !ea.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return XC;
  }
  static get DefaultType() {
    return YC;
  }
  static get NAME() {
    return FC;
  }
  // Public
  dispose() {
    X.off(this._element, Wo);
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
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), kt(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= qC)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && kt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (X.on(this._element, HC, (t) => this._start(t)), X.on(this._element, WC, (t) => this._end(t)), this._element.classList.add(zC)) : (X.on(this._element, BC, (t) => this._start(t)), X.on(this._element, jC, (t) => this._move(t)), X.on(this._element, UC, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === KC || t.pointerType === $C);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const GC = "carousel", QC = "bs.carousel", ps = `.${QC}`, Wv = ".data-api", JC = "ArrowLeft", ZC = "ArrowRight", eT = 500, Zo = "next", no = "prev", ao = "left", ki = "right", tT = `slide${ps}`, cl = `slid${ps}`, nT = `keydown${ps}`, sT = `mouseenter${ps}`, oT = `mouseleave${ps}`, rT = `dragstart${ps}`, iT = `load${ps}${Wv}`, aT = `click${ps}${Wv}`, $v = "carousel", ai = "active", lT = "slide", cT = "carousel-item-end", uT = "carousel-item-start", dT = "carousel-item-next", fT = "carousel-item-prev", Kv = ".active", zv = ".carousel-item", pT = Kv + zv, hT = ".carousel-item img", mT = ".carousel-indicators", gT = "[data-bs-slide], [data-bs-slide-to]", vT = '[data-bs-ride="carousel"]', _T = {
  [JC]: ki,
  [ZC]: ao
}, ET = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, yT = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class Gr extends dn {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = he.findOne(mT, this._element), this._addEventListeners(), this._config.ride === $v && this.cycle();
  }
  // Getters
  static get Default() {
    return ET;
  }
  static get DefaultType() {
    return yT;
  }
  static get NAME() {
    return GC;
  }
  // Public
  next() {
    this._slide(Zo);
  }
  nextWhenVisible() {
    !document.hidden && Ho(this._element) && this.next();
  }
  prev() {
    this._slide(no);
  }
  pause() {
    this._isSliding && Rv(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        X.one(this._element, cl, () => this.cycle());
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
      X.one(this._element, cl, () => this.to(t));
      return;
    }
    const s = this._getItemIndex(this._getActive());
    if (s === t)
      return;
    const o = t > s ? Zo : no;
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
    this._config.keyboard && X.on(this._element, nT, (t) => this._keydown(t)), this._config.pause === "hover" && (X.on(this._element, sT, () => this.pause()), X.on(this._element, oT, () => this._maybeEnableCycle())), this._config.touch && ea.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const s of he.find(hT, this._element))
      X.on(s, rT, (o) => o.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(ao)),
      rightCallback: () => this._slide(this._directionToOrder(ki)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), eT + this._config.interval));
      }
    };
    this._swipeHelper = new ea(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const n = _T[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const n = he.findOne(Kv, this._indicatorsElement);
    n.classList.remove(ai), n.removeAttribute("aria-current");
    const s = he.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    s && (s.classList.add(ai), s.setAttribute("aria-current", "true"));
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
    const s = this._getActive(), o = t === Zo, r = n || pu(this._getItems(), s, o, this._config.wrap);
    if (r === s)
      return;
    const i = this._getItemIndex(r), a = (p) => X.trigger(this._element, p, {
      relatedTarget: r,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(s),
      to: i
    });
    if (a(tT).defaultPrevented || !s || !r)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(i), this._activeElement = r;
    const c = o ? uT : cT, d = o ? dT : fT;
    r.classList.add(d), Xr(r), s.classList.add(c), r.classList.add(c);
    const h = () => {
      r.classList.remove(c, d), r.classList.add(ai), s.classList.remove(ai, d, c), this._isSliding = !1, a(cl);
    };
    this._queueCallback(h, s, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(lT);
  }
  _getActive() {
    return he.findOne(pT, this._element);
  }
  _getItems() {
    return he.find(zv, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Xt() ? t === ao ? no : Zo : t === ao ? Zo : no;
  }
  _orderToDirection(t) {
    return Xt() ? t === no ? ao : ki : t === no ? ki : ao;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Gr.getOrCreateInstance(this, t);
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
X.on(document, aT, gT, function(e) {
  const t = he.getElementFromSelector(this);
  if (!t || !t.classList.contains($v))
    return;
  e.preventDefault();
  const n = Gr.getOrCreateInstance(t), s = this.getAttribute("data-bs-slide-to");
  if (s) {
    n.to(s), n._maybeEnableCycle();
    return;
  }
  if (Hn.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
X.on(window, iT, () => {
  const e = he.find(vT);
  for (const t of e)
    Gr.getOrCreateInstance(t);
});
Gt(Gr);
const bT = "collapse", wT = "bs.collapse", Qr = `.${wT}`, AT = ".data-api", OT = `show${Qr}`, ST = `shown${Qr}`, CT = `hide${Qr}`, TT = `hidden${Qr}`, NT = `click${Qr}${AT}`, ul = "show", fo = "collapse", li = "collapsing", DT = "collapsed", xT = `:scope .${fo} .${fo}`, kT = "collapse-horizontal", RT = "width", IT = "height", PT = ".collapse.show, .collapse.collapsing", pc = '[data-bs-toggle="collapse"]', VT = {
  parent: null,
  toggle: !0
}, LT = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Pr extends dn {
  constructor(t, n) {
    super(t, n), this._isTransitioning = !1, this._triggerArray = [];
    const s = he.find(pc);
    for (const o of s) {
      const r = he.getSelectorFromElement(o), i = he.find(r).filter((a) => a === this._element);
      r !== null && i.length && this._triggerArray.push(o);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return VT;
  }
  static get DefaultType() {
    return LT;
  }
  static get NAME() {
    return bT;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(PT).filter((a) => a !== this._element).map((a) => Pr.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || X.trigger(this._element, OT).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const s = this._getDimension();
    this._element.classList.remove(fo), this._element.classList.add(li), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, this._element.classList.remove(li), this._element.classList.add(fo, ul), this._element.style[s] = "", X.trigger(this._element, ST);
    }, i = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[s] = `${this._element[i]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || X.trigger(this._element, CT).defaultPrevented)
      return;
    const n = this._getDimension();
    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, Xr(this._element), this._element.classList.add(li), this._element.classList.remove(fo, ul);
    for (const o of this._triggerArray) {
      const r = he.getElementFromSelector(o);
      r && !this._isShown(r) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      this._isTransitioning = !1, this._element.classList.remove(li), this._element.classList.add(fo), X.trigger(this._element, TT);
    };
    this._element.style[n] = "", this._queueCallback(s, this._element, !0);
  }
  // Private
  _isShown(t = this._element) {
    return t.classList.contains(ul);
  }
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = ls(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(kT) ? RT : IT;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(pc);
    for (const n of t) {
      const s = he.getElementFromSelector(n);
      s && this._addAriaAndCollapsedClass([n], this._isShown(s));
    }
  }
  _getFirstLevelChildren(t) {
    const n = he.find(xT, this._config.parent);
    return he.find(t, this._config.parent).filter((s) => !n.includes(s));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const s of t)
        s.classList.toggle(DT, !n), s.setAttribute("aria-expanded", n);
  }
  // Static
  static jQueryInterface(t) {
    const n = {};
    return typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
      const s = Pr.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t]();
      }
    });
  }
}
X.on(document, NT, pc, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  for (const t of he.getMultipleElementsFromSelector(this))
    Pr.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
Gt(Pr);
const mp = "dropdown", MT = "bs.dropdown", qs = `.${MT}`, mu = ".data-api", FT = "Escape", gp = "Tab", BT = "ArrowUp", vp = "ArrowDown", jT = 2, UT = `hide${qs}`, HT = `hidden${qs}`, WT = `show${qs}`, $T = `shown${qs}`, qv = `click${qs}${mu}`, Xv = `keydown${qs}${mu}`, KT = `keyup${qs}${mu}`, lo = "show", zT = "dropup", qT = "dropend", XT = "dropstart", YT = "dropup-center", GT = "dropdown-center", Cs = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', QT = `${Cs}.${lo}`, Ri = ".dropdown-menu", JT = ".navbar", ZT = ".navbar-nav", eN = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", tN = Xt() ? "top-end" : "top-start", nN = Xt() ? "top-start" : "top-end", sN = Xt() ? "bottom-end" : "bottom-start", oN = Xt() ? "bottom-start" : "bottom-end", rN = Xt() ? "left-start" : "right-start", iN = Xt() ? "right-start" : "left-start", aN = "top", lN = "bottom", cN = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, uN = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class Sn extends dn {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = he.next(this._element, Ri)[0] || he.prev(this._element, Ri)[0] || he.findOne(Ri, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return cN;
  }
  static get DefaultType() {
    return uN;
  }
  static get NAME() {
    return mp;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (cs(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!X.trigger(this._element, WT, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(ZT))
        for (const s of [].concat(...document.body.children))
          X.on(s, "mouseover", Zi);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(lo), this._element.classList.add(lo), X.trigger(this._element, $T, t);
    }
  }
  hide() {
    if (cs(this._element) || !this._isShown())
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
    if (!X.trigger(this._element, UT, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          X.off(s, "mouseover", Zi);
      this._popper && this._popper.destroy(), this._menu.classList.remove(lo), this._element.classList.remove(lo), this._element.setAttribute("aria-expanded", "false"), Hn.removeDataAttribute(this._menu, "popper"), X.trigger(this._element, HT, t), this._element.focus();
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !Un(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${mp.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof xv > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : Un(this._config.reference) ? t = ls(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = fu(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(lo);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(qT))
      return rN;
    if (t.classList.contains(XT))
      return iN;
    if (t.classList.contains(YT))
      return aN;
    if (t.classList.contains(GT))
      return lN;
    const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(zT) ? n ? nN : tN : n ? oN : sN;
  }
  _detectNavbar() {
    return this._element.closest(JT) !== null;
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
    return (this._inNavbar || this._config.display === "static") && (Hn.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...t,
      ...kt(this._config.popperConfig, [void 0, t])
    };
  }
  _selectMenuItem({
    key: t,
    target: n
  }) {
    const s = he.find(eN, this._menu).filter((o) => Ho(o));
    s.length && pu(s, n, t === vp, !s.includes(n)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Sn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === jT || t.type === "keyup" && t.key !== gp)
      return;
    const n = he.find(QT);
    for (const s of n) {
      const o = Sn.getInstance(s);
      if (!o || o._config.autoClose === !1)
        continue;
      const r = t.composedPath(), i = r.includes(o._menu);
      if (r.includes(o._element) || o._config.autoClose === "inside" && !i || o._config.autoClose === "outside" && i || o._menu.contains(t.target) && (t.type === "keyup" && t.key === gp || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const a = {
        relatedTarget: o._element
      };
      t.type === "click" && (a.clickEvent = t), o._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName), s = t.key === FT, o = [BT, vp].includes(t.key);
    if (!o && !s || n && !s)
      return;
    t.preventDefault();
    const r = this.matches(Cs) ? this : he.prev(this, Cs)[0] || he.next(this, Cs)[0] || he.findOne(Cs, t.delegateTarget.parentNode), i = Sn.getOrCreateInstance(r);
    if (o) {
      t.stopPropagation(), i.show(), i._selectMenuItem(t);
      return;
    }
    i._isShown() && (t.stopPropagation(), i.hide(), r.focus());
  }
}
X.on(document, Xv, Cs, Sn.dataApiKeydownHandler);
X.on(document, Xv, Ri, Sn.dataApiKeydownHandler);
X.on(document, qv, Sn.clearMenus);
X.on(document, KT, Sn.clearMenus);
X.on(document, qv, Cs, function(e) {
  e.preventDefault(), Sn.getOrCreateInstance(this).toggle();
});
Gt(Sn);
const Yv = "backdrop", dN = "fade", _p = "show", Ep = `mousedown.bs.${Yv}`, fN = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, pN = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Gv extends Yr {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return fN;
  }
  static get DefaultType() {
    return pN;
  }
  static get NAME() {
    return Yv;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      kt(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Xr(n), n.classList.add(_p), this._emulateAnimation(() => {
      kt(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      kt(t);
      return;
    }
    this._getElement().classList.remove(_p), this._emulateAnimation(() => {
      this.dispose(), kt(t);
    });
  }
  dispose() {
    this._isAppended && (X.off(this._element, Ep), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(dN), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = ls(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), X.on(t, Ep, () => {
      kt(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Vv(t, this._getElement(), this._config.isAnimated);
  }
}
const hN = "focustrap", mN = "bs.focustrap", ta = `.${mN}`, gN = `focusin${ta}`, vN = `keydown.tab${ta}`, _N = "Tab", EN = "forward", yp = "backward", yN = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, bN = {
  autofocus: "boolean",
  trapElement: "element"
};
class Qv extends Yr {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return yN;
  }
  static get DefaultType() {
    return bN;
  }
  static get NAME() {
    return hN;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), X.off(document, ta), X.on(document, gN, (t) => this._handleFocusin(t)), X.on(document, vN, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, X.off(document, ta));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: n
    } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target))
      return;
    const s = he.focusableChildren(n);
    s.length === 0 ? n.focus() : this._lastTabNavDirection === yp ? s[s.length - 1].focus() : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === _N && (this._lastTabNavDirection = t.shiftKey ? yp : EN);
  }
}
const bp = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", wp = ".sticky-top", ci = "padding-right", Ap = "margin-right";
class hc {
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
    this._disableOverFlow(), this._setElementAttributes(this._element, ci, (n) => n + t), this._setElementAttributes(bp, ci, (n) => n + t), this._setElementAttributes(wp, Ap, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, ci), this._resetElementAttributes(bp, ci), this._resetElementAttributes(wp, Ap);
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
    s && Hn.setDataAttribute(t, n, s);
  }
  _resetElementAttributes(t, n) {
    const s = (o) => {
      const r = Hn.getDataAttribute(o, n);
      if (r === null) {
        o.style.removeProperty(n);
        return;
      }
      Hn.removeDataAttribute(o, n), o.style.setProperty(n, r);
    };
    this._applyManipulationCallback(t, s);
  }
  _applyManipulationCallback(t, n) {
    if (Un(t)) {
      n(t);
      return;
    }
    for (const s of he.find(t, this._element))
      n(s);
  }
}
const wN = "modal", AN = "bs.modal", Yt = `.${AN}`, ON = ".data-api", SN = "Escape", CN = `hide${Yt}`, TN = `hidePrevented${Yt}`, Jv = `hidden${Yt}`, Zv = `show${Yt}`, NN = `shown${Yt}`, DN = `resize${Yt}`, xN = `click.dismiss${Yt}`, kN = `mousedown.dismiss${Yt}`, RN = `keydown.dismiss${Yt}`, IN = `click${Yt}${ON}`, Op = "modal-open", PN = "fade", Sp = "show", dl = "modal-static", VN = ".modal.show", LN = ".modal-dialog", MN = ".modal-body", FN = '[data-bs-toggle="modal"]', BN = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, jN = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class zs extends dn {
  constructor(t, n) {
    super(t, n), this._dialog = he.findOne(LN, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new hc(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return BN;
  }
  static get DefaultType() {
    return jN;
  }
  static get NAME() {
    return wN;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || X.trigger(this._element, Zv, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Op), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || X.trigger(this._element, CN).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Sp), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    X.off(window, Yt), X.off(this._dialog, Yt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Gv({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new Qv({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const n = he.findOne(MN, this._dialog);
    n && (n.scrollTop = 0), Xr(this._element), this._element.classList.add(Sp);
    const s = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, X.trigger(this._element, NN, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    X.on(this._element, RN, (t) => {
      if (t.key === SN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), X.on(window, DN, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), X.on(this._element, kN, (t) => {
      X.one(this._element, xN, (n) => {
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
      document.body.classList.remove(Op), this._resetAdjustments(), this._scrollBar.reset(), X.trigger(this._element, Jv);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(PN);
  }
  _triggerBackdropTransition() {
    if (X.trigger(this._element, TN).defaultPrevented)
      return;
    const n = this._element.scrollHeight > document.documentElement.clientHeight, s = this._element.style.overflowY;
    s === "hidden" || this._element.classList.contains(dl) || (n || (this._element.style.overflowY = "hidden"), this._element.classList.add(dl), this._queueCallback(() => {
      this._element.classList.remove(dl), this._queueCallback(() => {
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
      const o = Xt() ? "paddingLeft" : "paddingRight";
      this._element.style[o] = `${n}px`;
    }
    if (!s && t) {
      const o = Xt() ? "paddingRight" : "paddingLeft";
      this._element.style[o] = `${n}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, n) {
    return this.each(function() {
      const s = zs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t](n);
      }
    });
  }
}
X.on(document, IN, FN, function(e) {
  const t = he.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), X.one(t, Zv, (o) => {
    o.defaultPrevented || X.one(t, Jv, () => {
      Ho(this) && this.focus();
    });
  });
  const n = he.findOne(VN);
  n && zs.getInstance(n).hide(), zs.getOrCreateInstance(t).toggle(this);
});
Ra(zs);
Gt(zs);
const UN = "offcanvas", HN = "bs.offcanvas", zn = `.${HN}`, e_ = ".data-api", WN = `load${zn}${e_}`, $N = "Escape", Cp = "show", Tp = "showing", Np = "hiding", KN = "offcanvas-backdrop", t_ = ".offcanvas.show", zN = `show${zn}`, qN = `shown${zn}`, XN = `hide${zn}`, Dp = `hidePrevented${zn}`, n_ = `hidden${zn}`, YN = `resize${zn}`, GN = `click${zn}${e_}`, QN = `keydown.dismiss${zn}`, JN = '[data-bs-toggle="offcanvas"]', ZN = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, eD = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class us extends dn {
  constructor(t, n) {
    super(t, n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return ZN;
  }
  static get DefaultType() {
    return eD;
  }
  static get NAME() {
    return UN;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || X.trigger(this._element, zN, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new hc().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Tp);
    const s = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Cp), this._element.classList.remove(Tp), X.trigger(this._element, qN, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || X.trigger(this._element, XN).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Np), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(Cp, Np), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new hc().reset(), X.trigger(this._element, n_);
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
        X.trigger(this._element, Dp);
        return;
      }
      this.hide();
    }, n = !!this._config.backdrop;
    return new Gv({
      className: KN,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null
    });
  }
  _initializeFocusTrap() {
    return new Qv({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    X.on(this._element, QN, (t) => {
      if (t.key === $N) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        X.trigger(this._element, Dp);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = us.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
X.on(document, GN, JN, function(e) {
  const t = he.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), cs(this))
    return;
  X.one(t, n_, () => {
    Ho(this) && this.focus();
  });
  const n = he.findOne(t_);
  n && n !== t && us.getInstance(n).hide(), us.getOrCreateInstance(t).toggle(this);
});
X.on(window, WN, () => {
  for (const e of he.find(t_))
    us.getOrCreateInstance(e).show();
});
X.on(window, YN, () => {
  for (const e of he.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && us.getOrCreateInstance(e).hide();
});
Ra(us);
Gt(us);
const tD = /^aria-[\w-]*$/i, s_ = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", tD],
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
}, nD = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), sD = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, oD = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? nD.has(n) ? !!sD.test(e.nodeValue) : !0 : t.filter((s) => s instanceof RegExp).some((s) => s.test(n));
};
function rD(e, t, n) {
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
    for (const c of l)
      oD(c, f) || i.removeAttribute(c.nodeName);
  }
  return o.body.innerHTML;
}
const iD = "TemplateFactory", aD = {
  allowList: s_,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, lD = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, cD = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class uD extends Yr {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return aD;
  }
  static get DefaultType() {
    return lD;
  }
  static get NAME() {
    return iD;
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
      }, cD);
  }
  _setContent(t, n, s) {
    const o = he.findOne(s, t);
    if (o) {
      if (n = this._resolvePossibleFunction(n), !n) {
        o.remove();
        return;
      }
      if (Un(n)) {
        this._putElementInTemplate(ls(n), o);
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
    return this._config.sanitize ? rD(t, this._config.allowList, this._config.sanitizeFn) : t;
  }
  _resolvePossibleFunction(t) {
    return kt(t, [void 0, this]);
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      n.innerHTML = "", n.append(t);
      return;
    }
    n.textContent = t.textContent;
  }
}
const dD = "tooltip", fD = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), fl = "fade", pD = "modal", ui = "show", hD = ".tooltip-inner", xp = `.${pD}`, kp = "hide.bs.modal", er = "hover", pl = "focus", hl = "click", mD = "manual", gD = "hide", vD = "hidden", _D = "show", ED = "shown", yD = "inserted", bD = "click", wD = "focusin", AD = "focusout", OD = "mouseenter", SD = "mouseleave", CD = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Xt() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Xt() ? "right" : "left"
}, TD = {
  allowList: s_,
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
}, ND = {
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
class Xs extends dn {
  constructor(t, n) {
    if (typeof xv > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
    super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return TD;
  }
  static get DefaultType() {
    return ND;
  }
  static get NAME() {
    return dD;
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
    clearTimeout(this._timeout), X.off(this._element.closest(xp), kp, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = X.trigger(this._element, this.constructor.eventName(_D)), s = (Iv(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !s)
      return;
    this._disposePopper();
    const o = this._getTipElement();
    this._element.setAttribute("aria-describedby", o.getAttribute("id"));
    const {
      container: r
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(o), X.trigger(this._element, this.constructor.eventName(yD))), this._popper = this._createPopper(o), o.classList.add(ui), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        X.on(a, "mouseover", Zi);
    const i = () => {
      X.trigger(this._element, this.constructor.eventName(ED)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(i, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || X.trigger(this._element, this.constructor.eventName(gD)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(ui), "ontouchstart" in document.documentElement)
      for (const o of [].concat(...document.body.children))
        X.off(o, "mouseover", Zi);
    this._activeTrigger[hl] = !1, this._activeTrigger[pl] = !1, this._activeTrigger[er] = !1, this._isHovered = null;
    const s = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), X.trigger(this._element, this.constructor.eventName(vD)));
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
    n.classList.remove(fl, ui), n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const s = mC(this.constructor.NAME).toString();
    return n.setAttribute("id", s), this._isAnimated() && n.classList.add(fl), n;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new uD({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [hD]: this._getTitle()
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
    return this._config.animation || this.tip && this.tip.classList.contains(fl);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(ui);
  }
  _createPopper(t) {
    const n = kt(this._config.placement, [this, t, this._element]), s = CD[n.toUpperCase()];
    return fu(this._element, t, this._getPopperConfig(s));
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((n) => Number.parseInt(n, 10)) : typeof t == "function" ? (n) => t(n, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return kt(t, [this._element, this._element]);
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
      ...kt(this._config.popperConfig, [void 0, n])
    };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const n of t)
      if (n === "click")
        X.on(this._element, this.constructor.eventName(bD), this._config.selector, (s) => {
          const o = this._initializeOnDelegatedTarget(s);
          o._activeTrigger[hl] = !(o._isShown() && o._activeTrigger[hl]), o.toggle();
        });
      else if (n !== mD) {
        const s = n === er ? this.constructor.eventName(OD) : this.constructor.eventName(wD), o = n === er ? this.constructor.eventName(SD) : this.constructor.eventName(AD);
        X.on(this._element, s, this._config.selector, (r) => {
          const i = this._initializeOnDelegatedTarget(r);
          i._activeTrigger[r.type === "focusin" ? pl : er] = !0, i._enter();
        }), X.on(this._element, o, this._config.selector, (r) => {
          const i = this._initializeOnDelegatedTarget(r);
          i._activeTrigger[r.type === "focusout" ? pl : er] = i._element.contains(r.relatedTarget), i._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, X.on(this._element.closest(xp), kp, this._hideModalHandler);
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
    const n = Hn.getDataAttributes(this._element);
    for (const s of Object.keys(n))
      fD.has(s) && delete n[s];
    return t = {
      ...n,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : ls(t.container), typeof t.delay == "number" && (t.delay = {
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
      const n = Xs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Gt(Xs);
const DD = "popover", xD = ".popover-header", kD = ".popover-body", RD = {
  ...Xs.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, ID = {
  ...Xs.DefaultType,
  content: "(null|string|element|function)"
};
class gu extends Xs {
  // Getters
  static get Default() {
    return RD;
  }
  static get DefaultType() {
    return ID;
  }
  static get NAME() {
    return DD;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [xD]: this._getTitle(),
      [kD]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = gu.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Gt(gu);
const PD = "scrollspy", VD = "bs.scrollspy", vu = `.${VD}`, LD = ".data-api", MD = `activate${vu}`, Rp = `click${vu}`, FD = `load${vu}${LD}`, BD = "dropdown-item", so = "active", jD = '[data-bs-spy="scroll"]', ml = "[href]", UD = ".nav, .list-group", Ip = ".nav-link", HD = ".nav-item", WD = ".list-group-item", $D = `${Ip}, ${HD} > ${Ip}, ${WD}`, KD = ".dropdown", zD = ".dropdown-toggle", qD = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, XD = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class Va extends dn {
  constructor(t, n) {
    super(t, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return qD;
  }
  static get DefaultType() {
    return XD;
  }
  static get NAME() {
    return PD;
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
    return t.target = ls(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (X.off(this._config.target, Rp), X.on(this._config.target, Rp, ml, (t) => {
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
    const t = he.find(ml, this._config.target);
    for (const n of t) {
      if (!n.hash || cs(n))
        continue;
      const s = he.findOne(decodeURI(n.hash), this._element);
      Ho(s) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, s));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(so), this._activateParents(t), X.trigger(this._element, MD, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(BD)) {
      he.findOne(zD, t.closest(KD)).classList.add(so);
      return;
    }
    for (const n of he.parents(t, UD))
      for (const s of he.prev(n, $D))
        s.classList.add(so);
  }
  _clearActiveClass(t) {
    t.classList.remove(so);
    const n = he.find(`${ml}.${so}`, t);
    for (const s of n)
      s.classList.remove(so);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Va.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
X.on(window, FD, () => {
  for (const e of he.find(jD))
    Va.getOrCreateInstance(e);
});
Gt(Va);
const YD = "tab", GD = "bs.tab", Ys = `.${GD}`, QD = `hide${Ys}`, JD = `hidden${Ys}`, ZD = `show${Ys}`, ex = `shown${Ys}`, tx = `click${Ys}`, nx = `keydown${Ys}`, sx = `load${Ys}`, ox = "ArrowLeft", Pp = "ArrowRight", rx = "ArrowUp", Vp = "ArrowDown", gl = "Home", Lp = "End", Ts = "active", Mp = "fade", vl = "show", ix = "dropdown", o_ = ".dropdown-toggle", ax = ".dropdown-menu", _l = `:not(${o_})`, lx = '.list-group, .nav, [role="tablist"]', cx = ".nav-item, .list-group-item", ux = `.nav-link${_l}, .list-group-item${_l}, [role="tab"]${_l}`, r_ = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', El = `${ux}, ${r_}`, dx = `.${Ts}[data-bs-toggle="tab"], .${Ts}[data-bs-toggle="pill"], .${Ts}[data-bs-toggle="list"]`;
class ko extends dn {
  constructor(t) {
    super(t), this._parent = this._element.closest(lx), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), X.on(this._element, nx, (n) => this._keydown(n)));
  }
  // Getters
  static get NAME() {
    return YD;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), s = n ? X.trigger(n, QD, {
      relatedTarget: t
    }) : null;
    X.trigger(t, ZD, {
      relatedTarget: n
    }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(n, t), this._activate(t, n));
  }
  // Private
  _activate(t, n) {
    if (!t)
      return;
    t.classList.add(Ts), this._activate(he.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(vl);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), X.trigger(t, ex, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(Mp));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(Ts), t.blur(), this._deactivate(he.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(vl);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), X.trigger(t, JD, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(Mp));
  }
  _keydown(t) {
    if (![ox, Pp, rx, Vp, gl, Lp].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((o) => !cs(o));
    let s;
    if ([gl, Lp].includes(t.key))
      s = n[t.key === gl ? 0 : n.length - 1];
    else {
      const o = [Pp, Vp].includes(t.key);
      s = pu(n, t.target, o, !0);
    }
    s && (s.focus({
      preventScroll: !0
    }), ko.getOrCreateInstance(s).show());
  }
  _getChildren() {
    return he.find(El, this._parent);
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
    const n = he.getElementFromSelector(t);
    n && (this._setAttributeIfNotExists(n, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, n) {
    const s = this._getOuterElement(t);
    if (!s.classList.contains(ix))
      return;
    const o = (r, i) => {
      const a = he.findOne(r, s);
      a && a.classList.toggle(i, n);
    };
    o(o_, Ts), o(ax, vl), s.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, s) {
    t.hasAttribute(n) || t.setAttribute(n, s);
  }
  _elemIsActive(t) {
    return t.classList.contains(Ts);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(El) ? t : he.findOne(El, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(cx) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ko.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
X.on(document, tx, r_, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !cs(this) && ko.getOrCreateInstance(this).show();
});
X.on(window, sx, () => {
  for (const e of he.find(dx))
    ko.getOrCreateInstance(e);
});
Gt(ko);
const fx = "toast", px = "bs.toast", hs = `.${px}`, hx = `mouseover${hs}`, mx = `mouseout${hs}`, gx = `focusin${hs}`, vx = `focusout${hs}`, _x = `hide${hs}`, Ex = `hidden${hs}`, yx = `show${hs}`, bx = `shown${hs}`, wx = "fade", Fp = "hide", di = "show", fi = "showing", Ax = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Ox = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class Jr extends dn {
  constructor(t, n) {
    super(t, n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return Ox;
  }
  static get DefaultType() {
    return Ax;
  }
  static get NAME() {
    return fx;
  }
  // Public
  show() {
    if (X.trigger(this._element, yx).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(wx);
    const n = () => {
      this._element.classList.remove(fi), X.trigger(this._element, bx), this._maybeScheduleHide();
    };
    this._element.classList.remove(Fp), Xr(this._element), this._element.classList.add(di, fi), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || X.trigger(this._element, _x).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(Fp), this._element.classList.remove(fi, di), X.trigger(this._element, Ex);
    };
    this._element.classList.add(fi), this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(di), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(di);
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
    X.on(this._element, hx, (t) => this._onInteraction(t, !0)), X.on(this._element, mx, (t) => this._onInteraction(t, !1)), X.on(this._element, gx, (t) => this._onInteraction(t, !0)), X.on(this._element, vx, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Jr.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Ra(Jr);
Gt(Jr);
var Sx = Object.defineProperty, Cx = (e, t, n) => t in e ? Sx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, en = (e, t, n) => Cx(e, typeof t != "symbol" ? t + "" : t, n);
const Tx = { class: "toast-header" }, Nx = ["textContent"], Dx = ["textContent"], xx = { class: "toast-body" }, kx = ["textContent"], Rx = /* @__PURE__ */ ke({
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
    const s = e, o = n, { visible: r, animation: i, autohide: a, delay: l } = an(s), f = ee(), c = ee();
    Wt(r, (x) => {
      E();
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
    function m() {
      f.value.isShown();
    }
    function g() {
      f.value.getOrCreateInstance();
    }
    function v() {
      f.value.getInstance();
    }
    function E() {
      f.value && (r.value === !0 ? d() : h());
    }
    function b() {
      o("hide", f.value);
    }
    function y() {
      o("hidden", f.value);
    }
    function A() {
      o("show", f.value);
    }
    async function O() {
      o("shown", f.value);
    }
    const T = { show: d, hide: h, dispose: p, isShown: m, getOrCreateInstance: g, getInstance: v };
    return t({ ...T }), cn(() => {
      c.value.addEventListener("hide.bs.toast", b), c.value.addEventListener("hidden.bs.toast", y), c.value.addEventListener("show.bs.toast", A), c.value.addEventListener("shown.bs.toast", O), f.value = new Jr(c.value, {
        animation: i.value,
        autohide: a.value,
        delay: l.value
      }), E();
    }), (x, j) => (N(), P("div", {
      ref_key: "toastRef",
      ref: c,
      class: me(["toast", [x.variant ? `text-bg-${x.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      Ne(x.$slots, "header", Ze(Ye({ ...T })), () => [
        u("div", Tx, [
          Ne(x.$slots, "title", Ze(Ye({ ...T })), () => [
            u("strong", {
              class: "me-auto",
              textContent: z(x.title)
            }, null, 8, Nx)
          ], !0),
          Ne(x.$slots, "subtitle", Ze(Ye({ ...T })), () => [
            u("small", {
              textContent: z(x.subtitle)
            }, null, 8, Dx)
          ], !0),
          u("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: h
          })
        ])
      ], !0),
      Ne(x.$slots, "body", Ze(Ye({ ...T })), () => [
        u("div", xx, [
          Ne(x.$slots, "default", Ze(Ye({ ...T })), () => [
            u("span", {
              textContent: z(x.body)
            }, null, 8, kx)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), Rn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, i_ = /* @__PURE__ */ Rn(Rx, [["__scopeId", "data-v-c0cdbae8"]]);
function Ix() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16);
  });
}
const Px = { id: "toast-wrapper" };
let Bp;
const Vx = /* @__PURE__ */ ke({
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
    }, s = ee(/* @__PURE__ */ new Map());
    Bp = (r, i = "top right") => {
      const a = Ix(), l = { ...n, ...r, id: a };
      let f = s.value.get(i);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(l), s.value.set(i, f);
    };
    function o(r, i) {
      const a = s.value.get(r);
      a?.delete(i);
    }
    return t({ toast: Bp }), (r, i) => (N(), ot(Vo, { to: "body" }, [
      u("div", Px, [
        (N(!0), P(Oe, null, Qe(s.value, ([a, l]) => (N(), P("div", {
          key: a,
          class: me(["toast-group", `${a}`])
        }, [
          (N(!0), P(Oe, null, Qe(l, (f, c) => (N(), ot(i_, ds({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (d) => o(a, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Lx = /* @__PURE__ */ Rn(Vx, [["__scopeId", "data-v-786d1c50"]]), a_ = () => {
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
var xn = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(xn || {});
const Ro = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(xn).includes(n) || n == "" ? "" : `${t}${n}`;
}, Mx = { class: "modal-content" }, Fx = { class: "modal-header" }, Bx = ["innerHTML"], jx = { class: "modal-body" }, Ux = ["innerHTML"], Hx = { class: "modal-footer" }, Wx = ["innerHTML"], $x = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const Kx = /* @__PURE__ */ ke({
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
    size: { default: xn.STANDARD },
    btnSize: { default: xn.SMALL },
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
    } = an(s), c = n, d = re(() => Ro(l.value, "modal-")), h = re(() => Ro(f.value, "btn-")), p = ee();
    let m;
    const g = kn(), v = () => document.querySelectorAll(".modal.show").length, E = () => typeof window < "u" && window._managedModals ? window._managedModals : [], b = 1055, y = ee(b), A = () => {
      const D = v();
      y.value = b + D;
    };
    let O;
    const T = a_();
    function x() {
      return new Promise((D, R) => {
        if (!p.value) return;
        T.removeStickyElements(), A(), p.value.classList.add("managed-modal");
        const H = E(), te = H.length + 1, we = {
          element: p.value,
          priority: te,
          instance: g
        };
        H.push(we), p.value.addEventListener("shown.bs.modal", () => {
          F();
        }, { once: !0 }), m?.show(), O = D, c("onShown", m);
      });
    }
    function j(D = !0) {
      if (!p.value) return;
      const R = E(), H = R.findIndex((te) => te.element === p.value);
      H > -1 && R.splice(H, 1), p.value.addEventListener("hidden.bs.modal", () => {
        p.value && (p.value.style.display = ""), F();
      }, { once: !0 }), m?.hide(), typeof O == "function" && O(D), c("onHidden", m), T.restoreStickyElements();
    }
    function L() {
      m?.toggle();
    }
    const F = () => {
      const D = E();
      if (D.length === 0) return;
      D.sort((H, te) => H.priority - te.priority);
      const R = D[D.length - 1];
      D.forEach((H) => {
        H.element !== R.element ? H.element.style.opacity = "0" : H.element.style.opacity = "1";
      });
    };
    cn(() => {
      m = new zs(p.value, {
        backdrop: o?.value,
        keyboard: r.value,
        focus: i.value
      }), p.value.classList.add("managed-modal"), ua(() => {
        s?.visible === !0 ? m?.show() : m?.hide();
      });
    });
    function B(D) {
      o?.value !== "static" && j(!1);
    }
    function C() {
      j(!1);
    }
    function I() {
      j(!1);
    }
    function Y() {
      j(!0);
    }
    t({
      modal: m,
      show: x,
      hide: j,
      toggle: L,
      onHeaderCloseClicked: C,
      onCancelClicked: I,
      onOkCLicked: Y
    });
    const pe = { show: x, hide: j, toggle: L, modal: m };
    return (D, R) => (N(), P("div", ds({
      ref_key: "modalElement",
      ref: p,
      class: "modal fade",
      tabindex: "-1"
    }, { ...D.$attrs }, {
      onClick: wm(B, ["self"]),
      style: { zIndex: y.value }
    }), [
      u("div", {
        class: me(["modal-dialog", d.value])
      }, [
        u("div", Mx, [
          Ne(D.$slots, "header", Ze(Ye({ ...pe })), () => [
            u("div", Fx, [
              Ne(D.$slots, "title", Ze(Ye({ ...pe })), () => [
                u("h5", {
                  class: "modal-title",
                  innerHTML: D.title
                }, null, 8, Bx)
              ], !0),
              Ne(D.$slots, "header-close-button", Ze(Ye({ ...pe })), () => [
                u("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: C
                })
              ], !0)
            ])
          ], !0),
          u("div", jx, [
            Ne(D.$slots, "default", Ze(Ye({ ...pe })), () => [
              u("span", { innerHTML: D.body }, null, 8, Ux)
            ], !0)
          ]),
          u("div", Hx, [
            Ne(D.$slots, "footer", Ze(Ye({ ...pe })), () => [
              D.okOnly ? Be("", !0) : (N(), P("button", {
                key: 0,
                type: "button",
                class: me(["btn btn-secondary", h.value]),
                onClick: I
              }, [
                Ne(D.$slots, "button-cancel", Ze(Ye({ ...pe })), () => [
                  u("span", { innerHTML: D.textCancel }, null, 8, Wx)
                ], !0)
              ], 2)),
              u("button", {
                type: "button",
                class: me(["btn btn-primary", h.value]),
                onClick: Y
              }, [
                Ne(D.$slots, "button-ok", Ze(Ye({ ...pe })), () => [
                  u("span", { innerHTML: D.textOk }, null, 8, $x)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), l_ = /* @__PURE__ */ Rn(Kx, [["__scopeId", "data-v-b8ba4eaa"]]), zx = /* @__PURE__ */ ke({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = ee(void 0), s = ee({});
    function o(i = {}) {
      var a;
      return i.okOnly = !1, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: o, alert: r }), (i, a) => (N(), ot(Vo, { to: "body" }, [
      ge(l_, ds({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), qx = {
  "data-header": "",
  class: "border-bottom"
}, Xx = { class: "d-flex gap-2 p-2" }, Yx = { class: "p-2" }, Gx = {
  "data-footer": "",
  class: "border-top p-2"
}, Qx = { class: "buttons" }, Jx = /* @__PURE__ */ ke({
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
    size: { default: xn.STANDARD },
    btnSize: { default: xn.SMALL },
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, { backdrop: s, disableOutsideClick: o, modal: r, size: i, btnSize: a } = an(n), l = () => document.querySelectorAll("dialog[open]").length, f = 1056, c = ee(f), d = ee(!1), h = ee(!1), p = ee(!1), m = ee(), g = ee(!1), v = re(() => Ro(i.value, "modal-")), E = re(() => Ro(a.value, "btn-")), b = re(() => ({
      opening: d.value,
      closing: h.value,
      "no-backdrop": s.value === !1,
      static: g.value
    }));
    let y = null;
    const A = () => {
      const C = l();
      c.value = f + C;
    }, O = a_(), T = async () => (A(), O.removeStickyElements(), d.value = !0, m.value.addEventListener(
      "animationend",
      () => {
        d.value = !1, p.value = !0;
      },
      { once: !0 }
    ), r.value === !0 ? m.value.showModal() : m.value.show(), new Promise((C, I) => {
      y = C;
    })), x = async (C = !1) => {
      h.value = !0, m.value.addEventListener(
        "animationend",
        () => {
          m.value.close(), h.value = !1, p.value = !1, typeof y == "function" && y(C), y = null, O.restoreStickyElements();
        },
        { once: !0 }
      );
    }, j = async () => {
      p.value === !0 ? x() : T();
    }, L = () => {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 200);
    }, F = () => {
      if (s.value === "static" || o.value === !0) {
        L();
        return;
      }
      x(!1);
    };
    if (r.value === !0) {
      let C = function(Y) {
        if (s.value === "static" || o.value === !0) {
          L();
          return;
        }
        Y.target === m.value && x(!1);
      };
      const I = new AbortController();
      cn(() => {
        document.addEventListener("click", (Y) => {
          C(Y);
        }, { signal: I.signal });
      }), ca(() => {
        I.abort();
      });
    }
    const B = { show: T, hide: x, toggle: j, dialog: m };
    return t({
      show: T,
      hide: x,
      toggle: j
    }), (C, I) => (N(), P("div", {
      class: "dialog-wrapper",
      style: os({ zIndex: c.value })
    }, [
      u("div", {
        class: "backdrop",
        onClick: F
      }),
      u("dialog", {
        ref_key: "dialog",
        ref: m,
        class: me(b.value)
      }, [
        u("div", {
          class: me(["content", v.value])
        }, [
          Ne(C.$slots, "header", Ze(Ye({ ...B })), () => [
            u("div", qx, [
              u("div", Xx, [
                Ne(C.$slots, "title", Ze(Ye({ ...B })), () => [
                  ae(z(C.title), 1)
                ], !0),
                Ne(C.$slots, "header-close-button", {}, () => [
                  u("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: I[0] || (I[0] = (Y) => x(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          u("div", Yx, [
            Ne(C.$slots, "default", Ze(Ye({ ...B })), () => [
              ae(z(C.body), 1)
            ], !0)
          ]),
          Ne(C.$slots, "footer", Ze(Ye({ ...B })), () => [
            u("div", Gx, [
              u("div", Qx, [
                C.okOnly ? Be("", !0) : (N(), P("button", {
                  key: 0,
                  type: "button",
                  class: me(["btn btn-secondary", E.value]),
                  onClick: I[1] || (I[1] = (Y) => x(!1))
                }, [
                  Ne(C.$slots, "textCancel", Ze(Ye({ ...B })), () => [
                    ae(z(C.textCancel), 1)
                  ], !0)
                ], 2)),
                u("button", {
                  type: "button",
                  class: me(["btn btn-primary", E.value]),
                  onClick: I[2] || (I[2] = (Y) => x(!0))
                }, [
                  Ne(C.$slots, "textOk", Ze(Ye({ ...B })), () => [
                    ae(z(C.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), c_ = /* @__PURE__ */ Rn(Jx, [["__scopeId", "data-v-0990c791"]]), Zx = /* @__PURE__ */ ke({
  __name: "DialogManager",
  setup(e, { expose: t }) {
    const n = ee(void 0), s = ee({});
    function o(i = {}) {
      var a;
      return i.okOnly = !1, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: o, alert: r }), (i, a) => (N(), ot(Vo, { to: "body" }, [
      ge(c_, ds({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), ek = { "data-first": "" }, tk = ["disabled", "innerHTML"], nk = { "data-prev": "" }, sk = ["disabled", "innerHTML"], ok = { key: 0 }, rk = ["innerHTML"], ik = ["onClick"], ak = { "data-next": "" }, lk = ["disabled", "innerHTML"], ck = { "data-last": "" }, uk = ["disabled", "innerHTML"], dk = /* @__PURE__ */ ke({
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
    size: { default: xn.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    function n(y, A = 0) {
      return [...Array(y).keys()].map((O) => O + A);
    }
    const s = t, o = e, { modelValue: r, maxVisibleButtons: i, hideEllipsis: a } = an(o), l = Math.floor(i.value / 2), f = re(() => {
      let y = i.value, A = r.value <= l ? 1 : r.value - l;
      return r.value >= h.value - l && (A = h.value - y + 1), A < 1 && (A = 1), h.value < y && (y = h.value), n(y, A);
    }), c = re(() => r.value <= 1), d = re(() => r.value >= h.value), h = re(() => {
      const { perPage: y, totalItems: A } = o;
      return Math.ceil(A / y);
    });
    ua(() => {
      h.value > 0 && r.value > h.value && s("update:modelValue", h.value);
    });
    function p(y) {
      const A = i.value - 1;
      return !(a.value === !0 || y === 0 && r.value - l - 1 <= 0 || y === A && r.value + l >= h.value || y > 0 && y < A);
    }
    function m(y) {
      y < 1 && (y = 1), y > h.value && (y = h.value), s("update:modelValue", y);
    }
    function g() {
      s("update:modelValue", 1);
    }
    function v() {
      s("update:modelValue", h.value);
    }
    function E() {
      let y = r.value - 1;
      y < 1 && (y = 1), s("update:modelValue", y);
    }
    function b() {
      let y = r.value + 1;
      y > h.value && (y = h.value), s("update:modelValue", y);
    }
    return (y, A) => (N(), P("ul", {
      class: me(["pagination", y.size])
    }, [
      u("li", ek, [
        u("button", {
          class: "",
          disabled: c.value,
          innerHTML: y.firstText,
          onClick: g
        }, null, 8, tk)
      ]),
      u("li", nk, [
        u("button", {
          class: "",
          disabled: c.value,
          innerHTML: y.prevText,
          onClick: E
        }, null, 8, sk)
      ]),
      (N(!0), P(Oe, null, Qe(f.value, (O, T) => (N(), P(Oe, null, [
        p(T) ? (N(), P("li", ok, [
          u("button", {
            disabled: "",
            class: "",
            innerHTML: y.ellipsisText
          }, null, 8, rk)
        ])) : (N(), P("li", {
          key: 1,
          "data-prev": "",
          class: me({ active: y.modelValue === O })
        }, [
          u("button", {
            class: "",
            onClick: (x) => m(O)
          }, z(O), 9, ik)
        ], 2))
      ], 64))), 256)),
      u("li", ak, [
        u("button", {
          class: "",
          disabled: d.value,
          innerHTML: y.nextText,
          onClick: b
        }, null, 8, lk)
      ]),
      u("li", ck, [
        u("button", {
          class: "",
          disabled: d.value,
          innerHTML: y.lastText,
          onClick: v
        }, null, 8, uk)
      ])
    ], 2));
  }
}), fk = /* @__PURE__ */ Rn(dk, [["__scopeId", "data-v-2bfd7085"]]), pk = { class: "d-inline" }, hk = { class: "fw-bold" }, mk = /* @__PURE__ */ ke({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = an(n), r = re({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => {
      const l = gt("b-dropdown-item"), f = gt("b-dropdown");
      return N(), ot(f, ds({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: xe(() => [
          u("div", pk, [
            Ne(i.$slots, "default", { selected: r.value }, () => [
              a[0] || (a[0] = u("span", null, "Per page: ", -1)),
              u("span", hk, z(r.value), 1)
            ])
          ])
        ]),
        default: xe(() => [
          (N(!0), P(Oe, null, Qe(ie(o), (c, d) => (N(), ot(l, {
            key: c,
            onClick: (h) => r.value = c,
            active: c === i.modelValue
          }, {
            default: xe(() => [
              ae(z(c), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), gk = ["value"], vk = /* @__PURE__ */ ke({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = an(n), r = re({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => ct((N(), P("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (l) => r.value = l)
    }, [
      (N(!0), P(Oe, null, Qe(ie(o), (l, f) => (N(), P("option", {
        key: l,
        value: l
      }, z(l), 9, gk))), 128))
    ], 512)), [
      [_o, r.value]
    ]);
  }
});
var ws = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(ws || {});
class _k {
  constructor(t, n = "ASC", s) {
    en(this, "key"), en(this, "direction"), en(this, "sortFn"), this.key = t, this.direction = n, this.sortFn = s;
  }
}
const jp = (e, t) => {
  const n = (a, l) => {
    let f = typeof a, c = typeof l;
    return f == "number" && f == c;
  }, s = (a, l) => a - l, o = (a, l) => (a = a ?? "", l = l ?? "", a.localeCompare(l)), r = (a, l) => n(a, l) ? s : o, i = [...t];
  return i.sort((a, l) => {
    let f = 0;
    for (let c of e) {
      let { key: d, direction: h, sortFn: p } = c, m = h === "ASC" ? 1 : -1, g = a[d], v = l[d];
      if (p = typeof p == "function" ? p : r(g, v), f = p(g, v, a, l, t, c, m) * m, f !== 0) return f;
    }
    return f;
  }), i;
}, Ek = ["onClick"], yk = { class: "th-wrapper" }, bk = {
  key: 0,
  "data-sort-indicator": ""
}, wk = { class: "sort-index" }, Ak = { class: "sort-direction" }, Ok = ["onMouseover"], Sk = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Ck = ["colspan"], Tk = ["innerHTML"];
class yl {
  constructor(t = "", n = "", s = !1, o) {
    en(this, "key"), en(this, "label"), en(this, "sortable"), en(this, "sortFn"), this.key = t, this.label = n, this.sortable = s, this.sortFn = o;
  }
}
const Nk = /* @__PURE__ */ ke({
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
      let v = [];
      for (const E of g)
        v = v.concat(Object.keys(E));
      return v = v.filter((E, b) => v.indexOf(E) == b), v;
    }, s = t, o = e, r = ee([]), { fields: i, items: a } = an(o), l = re(() => {
      if (o.externalSort || r.value.length == 0) return o.items;
      const g = [...o.items];
      return jp(r.value, g);
    }), f = re(() => {
      let g = i.value, v = [];
      return g.length === 0 && (g = n([...a.value])), g.reduce((E, b, y) => {
        if (typeof b == "string")
          E.push(new yl(b, b));
        else if (b instanceof yl)
          E.push(b);
        else if (typeof b == "object") {
          const { key: A, label: O, sortable: T, sortFn: x } = b;
          E.push(new yl(A, O, T, x));
        }
        return E;
      }, v);
    });
    function c(g) {
      const v = r.value.findIndex((E) => E.key === g.key);
      return v < 0 ? "" : v + 1;
    }
    function d(g) {
      const v = r.value.findIndex((b) => b.key === g.key);
      if (v < 0) return "fas fa-sort";
      const E = r.value[v];
      return E.direction === ws.ASC ? "fas fa-sort-up" : E.direction === ws.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function h(g) {
      const { key: v } = g, E = r.value.findIndex((b) => b.key === v);
      if (E < 0) {
        const b = new _k(v, ws.ASC, g.sortFn);
        r.value.push(b);
      } else {
        const b = r.value[E], y = b.direction;
        y === ws.ASC ? b.direction = ws.DESC : y === ws.DESC && r.value.splice(E, 1);
      }
      s("sort", r.value, jp);
    }
    function p(g, v, E, b) {
      s("onMouseOverCell", g, v, E, b);
    }
    let m = ee(null);
    return cn(() => {
      m.value = kn();
    }), (g, v) => (N(), P("table", ds({ ...g.$attrs }, {
      class: { striped: g.striped, hover: g.hover }
    }), [
      u("thead", null, [
        (N(!0), P(Oe, null, Qe(f.value, (E) => (N(), P("th", {
          key: `thead-${E.key}`,
          class: me({ sortable: E.sortable }),
          onClick: (b) => E.sortable && h(E)
        }, [
          u("span", yk, [
            Ne(g.$slots, `head(${E.key})`, {
              field: E,
              data: ie(m),
              value: E.label
            }, () => [
              ae(z(E.label), 1)
            ], !0),
            E.sortable ? (N(), P("span", bk, [
              u("span", wk, z(c(E)), 1),
              u("span", Ak, [
                u("i", {
                  class: me(d(E))
                }, null, 2)
              ])
            ])) : Be("", !0)
          ])
        ], 10, Ek))), 128))
      ]),
      u("tbody", null, [
        (N(!0), P(Oe, null, Qe(l.value, (E, b) => (N(), P(Oe, {
          key: `trow-${E?.id ?? b}`
        }, [
          Ne(g.$slots, "row", {
            item: E,
            index: b,
            colspan: f.value.length
          }, void 0, !0),
          u("tr", null, [
            (N(!0), P(Oe, null, Qe(f.value, (y) => (N(), P("td", {
              key: `tcell-${y.key + (E?.id ?? b)}`,
              class: me({ [`tcell-${y?.key}`]: !0 }),
              onMouseover: (A) => p(A, E, b, y)
            }, [
              Ne(g.$slots, `cell(${y?.key})`, {
                data: ie(m),
                item: E,
                field: y,
                value: E[y?.key]
              }, () => [
                ae(z(E[y?.key]), 1)
              ], !0)
            ], 42, Ok))), 128))
          ])
        ], 64))), 128))
      ]),
      u("tfoot", null, [
        Ne(g.$slots, "footer", { data: ie(m) }, void 0, !0)
      ]),
      g.showEmpty && l.value.length === 0 ? (N(), P("tr", Sk, [
        u("td", {
          colspan: f.value.length
        }, [
          Ne(g.$slots, "empty", {
            items: l.value,
            data: ie(m),
            fields: f.value
          }, () => [
            u("span", { innerHTML: g.emptyText }, null, 8, Tk)
          ], !0)
        ], 8, Ck)
      ])) : Be("", !0)
    ], 16));
  }
}), Dk = /* @__PURE__ */ Rn(Nk, [["__scopeId", "data-v-b1e9b5de"]]);
var u_ = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(u_ || {});
const xk = { class: "d-inline-block position-relative" }, kk = ["disabled"], Up = "data-prevent-close", Rk = /* @__PURE__ */ ke({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: u_.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    menuEnd: { type: Boolean, default: !1 },
    size: { default: xn.STANDARD },
    disabled: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: t, emit: n }) {
    const s = ee(), o = e, r = ee(), i = ee(!1), a = ee(o.variant), l = ee(o.centered), f = ee(o.dropup), c = ee(o.dropend), d = ee(o.dropstart), h = ee(o.menuEnd), p = n, m = re(() => {
      const j = [];
      return a != null && a.value && j.push(`btn-${a.value}`), o.size && j.push(`btn-${o.size}`), j;
    }), g = re(() => {
      const j = [];
      return l != null && l.value && j.push("dropdown-center"), f != null && f.value && j.push("dropup"), d != null && d.value && j.push("dropstart"), !(d != null && d.value) && c != null && c.value && j.push("dropend"), j.length === 0 && j.push("dropdown"), j.unshift("btn-group"), j;
    }), v = re(() => {
      const j = [];
      return i.value && j.push("show"), h.value && j.push("dropdown-menu-end"), j;
    }), E = () => {
      if (!i.value) return;
      const j = r.value.getBoundingClientRect(), L = s.value.getBoundingClientRect(), F = window.innerHeight - j.bottom, B = j.top, C = window.innerWidth - j.right, I = j.left;
      f.value = F < L.height && B >= L.height, h.value = C < L.width && I >= L.width;
    };
    async function b() {
      i.value = !0, await Eo(), E();
    }
    function y() {
      i.value = !1;
    }
    function A(j) {
      i.value ? y() : b();
    }
    function O(j) {
      const { target: L } = j;
      L?.closest(`[${Up}],[${Up}=true]`) || y();
    }
    function T() {
      i.value && y();
    }
    Wt(i, (j, L) => {
      typeof L > "u" || j !== L && (p("toggle", { show: j }), j === !0 ? p("open", { show: j }) : p("close", { show: j }));
    }, { immediate: !0 });
    const x = {
      show: i,
      disabled: o.disabled,
      buttonClasses: m,
      onButtonClicked: A,
      onMenuClicked: O,
      onClickOutside: T,
      open: b,
      close: y
    };
    return t({
      ...x
    }), (j, L) => {
      const F = XE("click-outside");
      return N(), P("div", {
        ref_key: "dropDownRef",
        ref: r,
        class: me([g.value, "dropdown-wrapper"])
      }, [
        ct((N(), P("div", xk, [
          Ne(j.$slots, "header", Ze(Ye({ ...x })), () => [
            u("button", {
              class: me(["btn dropdown-toggle", m.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: A,
              disabled: j.disabled
            }, [
              Ne(j.$slots, "button", Ze(Ye({ ...x })), () => [
                ae(z(j.text), 1)
              ], !0)
            ], 10, kk)
          ], !0),
          u("ul", {
            ref_key: "dropDownMenuRef",
            ref: s,
            class: me(["dropdown-menu", v.value]),
            onClick: O
          }, [
            Ne(j.$slots, "default", Ze(Ye({ ...x })), void 0, !0)
          ], 2)
        ])), [
          [F, T]
        ])
      ], 2);
    };
  }
}), Ik = /* @__PURE__ */ Rn(Rk, [["__scopeId", "data-v-4910c394"]]), Pk = ["data-prevent-close"], Vk = /* @__PURE__ */ ke({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = an(t);
    return (s, o) => (N(), P("li", {
      "data-prevent-close": ie(n) ? "" : null
    }, [
      u("span", {
        class: me(["dropdown-item", { active: s.active }]),
        role: "button",
        tabindex: "0"
      }, [
        Ne(s.$slots, "default")
      ], 2)
    ], 8, Pk));
  }
}), Lk = {}, Mk = { "data-prevent-close": "" }, Fk = { class: "dropdown-header" };
function Bk(e, t) {
  return N(), P("li", Mk, [
    u("h6", Fk, [
      Ne(e.$slots, "default")
    ])
  ]);
}
const jk = /* @__PURE__ */ Rn(Lk, [["render", Bk]]), Uk = {};
function Hk(e, t) {
  return N(), P("li", null, t[0] || (t[0] = [
    u("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const Wk = /* @__PURE__ */ Rn(Uk, [["render", Hk]]), $k = {
  mounted(e, t, n, s) {
    new Xs(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Kk = (e, t) => {
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
}, zk = {
  mounted(e, t, n, s) {
    const o = t.value;
    Kk(e, o);
  }
};
class mc {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
en(mc, "list", /* @__PURE__ */ new Set());
const qk = { class: "drawer-content" }, Xk = { class: "drawer-header" }, Yk = ["innerHTML"], Gk = { class: "drawer-body" }, Qk = ["innerHTML"], Jk = { class: "drawer-footer" }, Zk = ["innerHTML"], eR = ["innerHTML"], tR = /* @__PURE__ */ ke({
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
    size: { default: xn.STANDARD },
    btnSize: { default: xn.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: s,
      keyboard: o,
      focus: r,
      size: i,
      btnSize: a
    } = an(n), l = re(() => Ro(i.value, "drawer-")), f = re(() => Ro(a.value, "btn-")), c = ee(), d = ee(!1), h = kn();
    let p;
    async function m() {
      return d.value === !0 ? void 0 : new Promise((T, x) => {
        d.value = !0, p = T;
      });
    }
    function g(T = !0) {
      d.value = !1, typeof p == "function" && p(T);
    }
    function v() {
      d.value === !0 ? m() : g(!1);
    }
    function E(T) {
      s?.value !== "static" && g(!1);
    }
    function b() {
      g(!1);
    }
    function y() {
      g(!1);
    }
    function A() {
      g(!0);
    }
    function O() {
      d.value === !0 ? mc.add(h) : mc.delete(h);
    }
    return t({
      show: m,
      hide: g,
      toggle: v
    }), (T, x) => (N(), ot(tb, {
      onBeforeEnter: O,
      onAfterLeave: O
    }, {
      default: xe(() => [
        d.value ? (N(), P("div", ds({
          key: 0,
          ref_key: "drawerElement",
          ref: c,
          class: "drawer",
          tabindex: "-1"
        }, { ...T.$attrs }, {
          onClick: wm(E, ["self"])
        }), [
          u("div", {
            class: me(["drawer-dialog", l.value])
          }, [
            u("div", qk, [
              u("div", Xk, [
                Ne(T.$slots, "header", {}, () => [
                  u("h5", {
                    class: "drawer-title",
                    innerHTML: T.title
                  }, null, 8, Yk)
                ], !0),
                u("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: b
                })
              ]),
              u("div", Gk, [
                Ne(T.$slots, "default", {}, () => [
                  u("span", { innerHTML: T.body }, null, 8, Qk)
                ], !0)
              ]),
              u("div", Jk, [
                Ne(T.$slots, "footer", {}, () => [
                  T.okOnly ? Be("", !0) : (N(), P("button", {
                    key: 0,
                    type: "button",
                    class: me(["ms-auto btn btn-secondary", f.value]),
                    onClick: y
                  }, [
                    Ne(T.$slots, "button-cancel", {}, () => [
                      u("span", { innerHTML: T.textCancel }, null, 8, Zk)
                    ], !0)
                  ], 2)),
                  u("button", {
                    type: "button",
                    class: me(["btn btn-primary", f.value]),
                    onClick: A
                  }, [
                    Ne(T.$slots, "button-ok", {}, () => [
                      u("span", { innerHTML: T.textOk }, null, 8, eR)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : Be("", !0)
      ]),
      _: 3
    }));
  }
}), nR = /* @__PURE__ */ Rn(tR, [["__scopeId", "data-v-2e49e8cb"]]), Ut = "b", d_ = "$toaster", sR = "$modalManager", oR = "$dialogManager";
class f_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ma(zx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
en(f_, "component");
class p_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ma(Zx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
en(p_, "component");
class h_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ma(Lx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
en(h_, "component");
function rR() {
  return Ot(d_);
}
function iR(e) {
  e.component(`${Ut}-drawer`, nR), e.component(`${Ut}-modal`, l_), e.component(`${Ut}-dialog`, c_), e.component(`${Ut}-pagination`, fk), e.component(`${Ut}-pagination-dropdown`, mk), e.component(`${Ut}-pagination-select`, vk), e.component(`${Ut}-dropdown`, Ik), e.component(`${Ut}-dropdown-item`, Vk), e.component(`${Ut}-dropdown-header`, jk), e.component(`${Ut}-dropdown-divider`, Wk), e.component(`${Ut}-table`, Dk), e.component(`${Ut}-toast`, i_);
}
function aR(e) {
  e.directive("tooltip", $k), e.directive("click-outside", zk);
}
const lR = {
  install(e) {
    iR(e), aR(e);
    const t = h_.getComponent(), n = f_.getComponent(), s = p_.getComponent();
    e.provide(d_, t), e.provide(sR, n), e.provide(oR, s);
  }
}, $o = /* @__PURE__ */ $r("settings", () => {
  const e = Na(), t = rR(), n = Fs({
    fhir_system: null,
    fhir_systems: [],
    mapping_resources: [],
    selected_mapping_resources: [],
    selected_custom_mapping_resources: []
  }), s = ee(null), o = ee([]), r = ee([]), i = Fs({
    fetch: !1,
    save: !1
  }), a = async () => {
    try {
      i.fetch = !0;
      const g = (await yt.getProjectSettings()).data ?? {};
      Object.assign(n, g), s.value = n.fhir_system, o.value = [...n.selected_mapping_resources], r.value = [...n.selected_custom_mapping_resources];
    } catch (m) {
      e.addError(m, "settingsStore"), console.error("Failed to load project settings:", m);
    } finally {
      i.fetch = !1;
    }
  }, l = (m, g) => {
    const v = { name: m, resourceSpec: g, type: "predefined" };
    o.value.push(v);
  }, f = (m, g) => {
    const v = {
      name: m,
      resourceSpec: g,
      type: "custom"
    };
    r.value.push(v);
  }, c = (m, g) => {
    if (g === "predefined") {
      const v = o.value.findIndex((E) => E.name === m.name && E.resourceSpec === m.resourceSpec);
      v > -1 && o.value.splice(v, 1);
    } else {
      const v = r.value.findIndex((E) => E.name === m.name && E.resourceSpec === m.resourceSpec);
      v > -1 && r.value.splice(v, 1);
    }
  }, d = (m) => {
    s.value = m;
  }, h = async () => {
    try {
      i.save = !0;
      const m = {
        fhir_system: s.value,
        selected_mapping_resources: o.value,
        selected_custom_mapping_resources: r.value
      }, g = await yt.updateProjectSettings(m);
      g.data.sync_results && p(g.data.sync_results), await a();
    } catch (m) {
      throw e.addError(m, "settingsStore"), console.error("Failed to save project settings:", m), m;
    } finally {
      i.save = !1;
    }
  }, p = (m) => {
    const {
      resources_added: g,
      resources_modified: v,
      resources_removed: E,
      tasks_created: b,
      total_mrns: y,
      error: A
    } = m;
    if (A) {
      t.toast({
        title: "Sync Warning",
        body: `Settings saved but sync failed: ${A}`,
        variant: "warning",
        delay: 8e3
      });
      return;
    }
    if (g + v + E === 0)
      return;
    const T = [];
    g > 0 && T.push(`${g} added`), v > 0 && T.push(`${v} modified`), E > 0 && T.push(`${E} removed`);
    const x = "Resources Synchronized", j = `${T.join(", ")}. Created ${b} tasks for ${y} patients.`;
    t.toast({
      title: x,
      body: j,
      variant: "success",
      delay: 6e3
    });
  };
  return {
    loading: i,
    settings: n,
    selectedFhirSystem: s,
    selectedMappingResources: o,
    selectedCustomMappingResources: r,
    fetchProjectSettings: a,
    addPredefinedResource: l,
    addCustomResource: f,
    removeResource: c,
    updateSelectedFhirSystem: d,
    saveProjectSettings: h
  };
}), Re = {
  Pending: "Pending",
  Fetching: "Fetching",
  Completed: "Completed",
  Failed: "Failed",
  Outdated: "Outdated",
  Deleted: "Deleted"
}, Gs = /* @__PURE__ */ $r("monitor", () => {
  const e = Na(), t = ee(!1), n = ee([]), s = ee([]), o = ee(null), r = ee(!1), i = ee({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: !1,
    hasPrevious: !1,
    perPageOptions: [10, 25, 50, 100, 250]
  }), a = async () => {
    try {
      t.value = !0;
      const D = await yt.listMrns(i.value.page, i.value.limit);
      D.data.data && D.data.pagination ? (n.value = D.data.data, i.value.total = D.data.pagination.total, i.value.totalPages = D.data.pagination.total_pages, i.value.hasNext = D.data.pagination.has_next, i.value.hasPrevious = D.data.pagination.has_previous, D.data.project_summary && (o.value = D.data.project_summary)) : n.value = D.data, s.value = [];
    } catch (D) {
      e.addError(D, "monitorStore"), console.error("Failed to load MRNs:", D), n.value = [];
    } finally {
      t.value = !1;
    }
  }, l = async (D) => {
    try {
      await yt.addMrn(D), await a();
    } catch (R) {
      e.addError(R, "monitorStore"), console.error("Failed to add MRN:", R);
    }
  }, f = async (D) => {
  }, c = async () => {
    try {
      t.value = !0;
      for (const D of s.value)
        await f(D);
    } catch (D) {
      e.addError(D, "monitorStore"), console.error("Failed to fetch selected MRNs:", D);
    } finally {
      t.value = !1;
    }
  }, d = re(() => n.value.length > 0 && s.value.length === n.value.length), h = re(() => s.value.length > 0 && s.value.length < n.value.length), p = () => {
    d.value ? s.value = [] : s.value = n.value.map((D) => D.id);
  }, m = (D) => {
    const R = s.value.indexOf(D);
    R === -1 ? s.value.push(D) : s.value.splice(R, 1);
  }, g = (D) => {
    i.value.page = D, a();
  }, v = (D) => {
    i.value.limit = D, i.value.page = 1, a();
  }, E = async (D) => {
    try {
      return (await yt.getMrnResources(D)).data;
    } catch (R) {
      return e.addError(R, "monitorStore"), console.error(`Failed to get resource status for MRN ${D}:`, R), { mrn: D, resources: [], total_resources: 0 };
    }
  }, b = async () => {
    try {
      const D = await yt.getProjectSummary();
      return o.value = D.data, D.data;
    } catch (D) {
      return e.addError(D, "monitorStore"), console.error("Failed to get project summary:", D), null;
    }
  }, y = async (D, R) => {
    try {
      r.value = !0;
      const H = await yt.triggerFetchMrns(D, R);
      return await a(), H.data;
    } catch (H) {
      throw e.addError(H, "monitorStore"), console.error("Failed to trigger fetch:", H), H;
    } finally {
      r.value = !1;
    }
  }, A = async (D) => {
    const R = n.value.filter((H) => s.value.includes(H.id)).map((H) => H.mrn);
    if (R.length === 0)
      throw new Error("No MRNs selected");
    return await y(R, D);
  }, O = async () => {
    try {
      r.value = !0;
      const D = await yt.performFullSync();
      return await a(), await b(), D.data;
    } catch (D) {
      throw e.addError(D, "monitorStore"), console.error("Failed to perform full sync:", D), D;
    } finally {
      r.value = !1;
    }
  }, T = async (D, R, H) => {
    try {
      const te = await yt.retryFailedResource(D, R, H);
      return await a(), te.data;
    } catch (te) {
      throw e.addError(te, "monitorStore"), console.error("Failed to retry resource:", te), te;
    }
  }, x = async (D) => {
    try {
      r.value = !0;
      const R = await yt.bulkRetryFailed(D);
      return await a(), R.data;
    } catch (R) {
      throw e.addError(R, "monitorStore"), console.error("Failed to bulk retry failed resources:", R), R;
    } finally {
      r.value = !1;
    }
  }, j = (D) => {
    if (D.status_summary)
      return D.status_summary.smart_status_display;
    const R = D.resources.filter((Te) => Te.status !== Re.Deleted), H = R.length, te = R.filter((Te) => Te.status === Re.Completed).length;
    if (H === 0) return "No Resources";
    if (te === H) return "Completed";
    const we = te / H * 100;
    if (we >= 75) return `Mostly Completed (${Math.round(we)}%)`;
    if (we >= 25) return `Mixed Progress (${Math.round(we)}%)`;
    if (we > 0) return `Starting (${Math.round(we)}%)`;
    const Le = {};
    return R.forEach((Te) => {
      Le[Te.status] = (Le[Te.status] || 0) + 1;
    }), Object.keys(Le).reduce((Te, Je) => Le[Te] > Le[Je] ? Te : Je, Re.Pending);
  }, L = (D) => {
    if (D.status_summary)
      return D.status_summary.overall_status;
    const R = D.resources.filter((te) => te.status !== Re.Deleted);
    if (R.length === 0) return Re.Pending;
    const H = {};
    return R.forEach((te) => {
      H[te.status] = (H[te.status] || 0) + 1;
    }), Object.keys(H).reduce((te, we) => H[te] > H[we] ? te : we, Re.Pending);
  }, F = (D) => {
    if (D.status_summary)
      return D.status_summary.archive_button_config;
    const R = D.resources.filter((we) => we.status !== Re.Deleted), H = R.filter((we) => we.status === Re.Completed).length, te = R.length;
    return H === 0 ? {
      variant: "secondary",
      disabled: !0,
      tooltip: "No completed resources to archive",
      text: "Archive"
    } : H === te ? {
      variant: "success",
      disabled: !1,
      tooltip: `Archive all ${H} completed resources`,
      text: "Archive All"
    } : {
      variant: "outline-success",
      disabled: !1,
      tooltip: `Archive ${H} of ${te} completed resources`,
      text: "Archive Available"
    };
  }, B = (D) => D.status_summary ? D.status_summary.has_archivable_resources : D.resources.some((R) => R.status === Re.Completed), C = (D) => {
    if (D.status_summary)
      return D.status_summary.progress_bar_config;
    const R = D.resources.filter((be) => be.status !== Re.Deleted), H = R.length;
    if (H === 0)
      return { segments: [], completion_percentage: 0, total_resources: 0 };
    const te = {};
    R.forEach((be) => {
      te[be.status] = (te[be.status] || 0) + 1;
    });
    const we = Object.entries(te).map(([be, Te]) => ({
      status: be,
      count: Te,
      percentage: Math.round(Te / H * 100 * 10) / 10,
      color: pe(be)
    })), Le = te[Re.Completed] || 0;
    return {
      segments: we,
      completion_percentage: Math.round(Le / H * 100 * 10) / 10,
      total_resources: H
    };
  }, I = (D) => {
    if (D.status_summary)
      return D.status_summary.available_resource_types;
    const R = /* @__PURE__ */ new Set();
    return D.resources.filter((H) => H.status === Re.Completed).forEach((H) => R.add(H.name)), Array.from(R).sort();
  }, Y = (D, R) => {
    if (D.status_summary?.resource_type_statuses[R])
      return D.status_summary.resource_type_statuses[R];
    const H = D.resources.filter(
      (be) => be.name === R && be.status !== Re.Deleted
    );
    if (H.length === 0) return null;
    const te = H.reduce((be, Te) => (be[Te.status] = (be[Te.status] || 0) + 1, be), {}), we = te[Re.Completed] || 0, Le = H.length;
    return {
      total_count: Le,
      completed_count: we,
      failed_count: te[Re.Failed] || 0,
      pending_count: te[Re.Pending] || 0,
      fetching_count: te[Re.Fetching] || 0,
      outdated_count: te[Re.Outdated] || 0,
      has_completed: we > 0,
      completion_percentage: Le > 0 ? we / Le * 100 : 0,
      is_archivable: we > 0
    };
  }, pe = (D) => {
    switch (D) {
      case Re.Completed:
        return "success";
      case Re.Failed:
        return "danger";
      case Re.Fetching:
        return "info";
      case Re.Pending:
        return "warning";
      case Re.Outdated:
        return "secondary";
      case Re.Deleted:
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
    pagination: i,
    // Computed
    allSelected: d,
    indeterminate: h,
    // Basic methods
    fetchMrns: a,
    addMrn: l,
    fetchMrn: f,
    fetchSelected: c,
    toggleSelectAll: p,
    toggleSelection: m,
    setPage: g,
    setLimit: v,
    // Enhanced resource management
    getResourceStatus: E,
    getProjectSummary: b,
    triggerFetchMrns: y,
    triggerFetchSelected: A,
    performFullSync: O,
    retryFailedResource: T,
    bulkRetryFailed: x,
    // Enhanced status methods
    getSmartStatusDisplay: j,
    getStatusForStyling: L,
    getArchiveButtonConfig: F,
    hasArchivableResources: B,
    getProgressBarConfig: C,
    getAvailableResourceTypesForArchive: I,
    getResourceTypeStatus: Y,
    getStatusColor: pe
  };
}), cR = "data:image/png;base64,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", uR = { class: "home-page" }, dR = { class: "hero-section text-center mb-5" }, fR = { class: "d-flex flex-column gap-2 align-items-center" }, pR = ["src"], hR = { class: "features-section mb-5" }, mR = { class: "row g-4" }, gR = { class: "col-md-6 col-lg-3" }, vR = { class: "card h-100 border-0 shadow-sm" }, _R = { class: "card-body text-center d-flex flex-column" }, ER = { class: "col-md-6 col-lg-3" }, yR = { class: "card h-100 border-0 shadow-sm" }, bR = { class: "card-body text-center d-flex flex-column" }, wR = { class: "col-md-6 col-lg-3" }, AR = { class: "card h-100 border-0 shadow-sm" }, OR = { class: "card-body text-center d-flex flex-column" }, SR = { class: "getting-started-section mb-5" }, CR = { class: "row align-items-center" }, TR = { class: "col-lg-8 mx-auto" }, NR = { class: "workflow-steps" }, DR = { class: "step d-flex align-items-center mb-4" }, xR = { class: "step-content flex-grow-1" }, kR = { class: "step d-flex align-items-center mb-4" }, RR = { class: "step-content flex-grow-1" }, IR = { class: "step d-flex align-items-center mb-4" }, PR = { class: "step-content flex-grow-1" }, VR = { class: "step d-flex align-items-center" }, LR = { class: "step-content flex-grow-1" }, MR = {
  key: 0,
  class: "status-section"
}, FR = { class: "row g-4" }, BR = { class: "col-md-3 col-sm-6" }, jR = { class: "stat-card card border-0 bg-primary text-white text-center h-100" }, UR = { class: "card-body" }, HR = { class: "mb-1" }, WR = { class: "col-md-3 col-sm-6" }, $R = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, KR = { class: "card-body" }, zR = { class: "mb-1" }, qR = { class: "col-md-3 col-sm-6" }, XR = { class: "stat-card card border-0 bg-info text-white text-center h-100" }, YR = { class: "card-body" }, GR = { class: "mb-1" }, QR = { class: "col-md-3 col-sm-6" }, JR = { class: "stat-card card border-0 bg-warning text-white text-center h-100" }, ZR = { class: "card-body" }, e2 = { class: "mb-1" }, t2 = {
  key: 0,
  class: "mt-4 text-center"
}, n2 = {
  class: "btn-group gap-2",
  role: "group"
}, s2 = {
  key: 1,
  class: "alert alert-info text-center"
}, o2 = /* @__PURE__ */ ke({
  __name: "HomePage",
  setup(e) {
    const t = $o(), n = Gs(), {
      selectedFhirSystem: s,
      selectedMappingResources: o,
      selectedCustomMappingResources: r
    } = Ea(t);
    cn(async () => {
      try {
        await Promise.all([
          t.fetchProjectSettings(),
          n.getProjectSummary()
        ]);
      } catch (h) {
        console.error("Failed to load dashboard data:", h);
      }
    });
    const i = re(() => s.value && (o.value?.length > 0 || r.value?.length > 0)), a = re(() => i.value && n.projectSummary), l = re(() => n.projectSummary?.total_mrns || 0), f = re(() => {
      const h = o.value?.length || 0, p = r.value?.length || 0;
      return h + p;
    }), c = re(() => n.projectSummary?.overall_status_counts?.Completed || 0), d = re(() => {
      const h = n.projectSummary?.overall_status_counts?.Pending || 0, p = n.projectSummary?.overall_status_counts?.Fetching || 0;
      return h + p;
    });
    return (h, p) => {
      const m = gt("router-link");
      return N(), P("div", uR, [
        u("div", dR, [
          u("div", fR, [
            u("img", {
              src: ie(cR),
              title: "ALL FHIR",
              style: { height: "200px" }
            }, null, 8, pR),
            p[0] || (p[0] = u("p", { class: "text-muted mb-4" }, " Fetch, archive, and download FHIR resources from your configured healthcare systems ", -1))
          ]),
          p[1] || (p[1] = Pl('<div class="row justify-content-center" data-v-77176938><div class="col-md-8" data-v-77176938><div class="bg-light p-4 rounded" data-v-77176938><div class="row text-center" data-v-77176938><div class="col-md-4" data-v-77176938><div class="d-flex gap-2 align-items-start" data-v-77176938><i class="fas fa-cloud-download-alt fa-2x text-success mb-2" data-v-77176938></i><h6 data-v-77176938>Background Processing</h6></div><small class="text-muted" data-v-77176938>Reliable queue-based fetching</small></div><div class="col-md-4" data-v-77176938><div class="d-flex gap-2 align-items-start" data-v-77176938><i class="fas fa-shield-alt fa-2x text-info mb-2" data-v-77176938></i><h6 data-v-77176938>Secure Storage</h6></div><small class="text-muted" data-v-77176938>REDCap-native data security</small></div><div class="col-md-4" data-v-77176938><div class="d-flex gap-2 align-items-start" data-v-77176938><i class="fas fa-file-archive fa-2x text-warning mb-2" data-v-77176938></i><h6 data-v-77176938>Easy Downloads</h6></div><small class="text-muted" data-v-77176938>ZIP archives for research</small></div></div></div></div></div>', 1))
        ]),
        u("div", hR, [
          p[15] || (p[15] = u("h2", { class: "text-center mb-4" }, "Key Features", -1)),
          u("div", mR, [
            u("div", gR, [
              u("div", vR, [
                u("div", _R, [
                  p[3] || (p[3] = u("div", { class: "feature-icon mb-3" }, [
                    u("i", { class: "fas fa-cogs fa-3x text-primary" })
                  ], -1)),
                  p[4] || (p[4] = u("h5", { class: "card-title" }, "Setup & Configuration", -1)),
                  p[5] || (p[5] = u("p", { class: "card-text text-muted" }, " Select your FHIR system and configure which resource types to fetch from predefined options or custom queries. ", -1)),
                  ge(m, {
                    to: "/setup",
                    class: "btn btn-outline-primary btn-sm mt-auto"
                  }, {
                    default: xe(() => p[2] || (p[2] = [
                      u("i", { class: "fas fa-arrow-right me-1" }, null, -1),
                      ae(" Configure ")
                    ])),
                    _: 1,
                    __: [2]
                  })
                ])
              ])
            ]),
            u("div", ER, [
              u("div", yR, [
                u("div", bR, [
                  p[7] || (p[7] = u("div", { class: "feature-icon mb-3" }, [
                    u("i", { class: "fas fa-search fa-3x text-success" })
                  ], -1)),
                  p[8] || (p[8] = u("h5", { class: "card-title" }, "Monitor & Track", -1)),
                  p[9] || (p[9] = u("p", { class: "card-text text-muted" }, " Add MRNs, trigger fetches, and monitor real-time status per resource with detailed progress tracking. ", -1)),
                  ge(m, {
                    to: "/monitor",
                    class: "btn btn-outline-success btn-sm mt-auto"
                  }, {
                    default: xe(() => p[6] || (p[6] = [
                      u("i", { class: "fas fa-arrow-right me-1" }, null, -1),
                      ae(" Monitor ")
                    ])),
                    _: 1,
                    __: [6]
                  })
                ])
              ])
            ]),
            u("div", wR, [
              u("div", AR, [
                u("div", OR, [
                  p[11] || (p[11] = u("div", { class: "feature-icon mb-3" }, [
                    u("i", { class: "fas fa-archive fa-3x text-warning" })
                  ], -1)),
                  p[12] || (p[12] = u("h5", { class: "card-title" }, "Archive & Download", -1)),
                  p[13] || (p[13] = u("p", { class: "card-text text-muted" }, " Create ZIP archives of completed FHIR resources with flexible filtering and background processing options. ", -1)),
                  ge(m, {
                    to: "/archives",
                    class: "btn btn-outline-warning btn-sm mt-auto"
                  }, {
                    default: xe(() => p[10] || (p[10] = [
                      u("i", { class: "fas fa-arrow-right me-1" }, null, -1),
                      ae(" Archives ")
                    ])),
                    _: 1,
                    __: [10]
                  })
                ])
              ])
            ]),
            p[14] || (p[14] = Pl('<div class="col-md-6 col-lg-3" data-v-77176938><div class="card h-100 border-0 shadow-sm" data-v-77176938><div class="card-body text-center d-flex flex-column" data-v-77176938><div class="feature-icon mb-3" data-v-77176938><i class="fas fa-tasks fa-3x text-info" data-v-77176938></i></div><h5 class="card-title" data-v-77176938>Background Processing</h5><p class="card-text text-muted" data-v-77176938> Robust queue-based system handles large-scale FHIR fetching with automatic retry and resource management. </p><div class="text-muted small" data-v-77176938><i class="fas fa-info-circle me-1" data-v-77176938></i> Automatic Operation </div></div></div></div>', 1))
          ])
        ]),
        u("div", SR, [
          p[35] || (p[35] = u("div", { class: "text-center mb-4" }, [
            u("h2", null, "Getting Started"),
            u("p", { class: "text-muted" }, "Follow these simple steps to start fetching and archiving FHIR resources")
          ], -1)),
          u("div", CR, [
            u("div", TR, [
              u("div", NR, [
                u("div", DR, [
                  p[19] || (p[19] = u("div", { class: "step-number me-4" }, [
                    u("div", { class: "bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      u("span", { class: "fw-bold" }, "1")
                    ])
                  ], -1)),
                  u("div", xR, [
                    p[17] || (p[17] = u("h5", null, "Configure Your Setup", -1)),
                    p[18] || (p[18] = u("p", { class: "text-muted mb-2" }, "Select your FHIR system and choose which resource types to fetch", -1)),
                    ge(m, {
                      to: "/setup",
                      class: "btn btn-primary btn-sm"
                    }, {
                      default: xe(() => p[16] || (p[16] = [
                        u("i", { class: "fas fa-cogs me-1" }, null, -1),
                        ae(" Go to Setup ")
                      ])),
                      _: 1,
                      __: [16]
                    })
                  ]),
                  p[20] || (p[20] = u("div", { class: "step-icon ms-3" }, [
                    u("i", { class: "fas fa-arrow-right text-muted fa-2x d-none d-md-block" })
                  ], -1))
                ]),
                u("div", kR, [
                  p[24] || (p[24] = u("div", { class: "step-number me-4" }, [
                    u("div", { class: "bg-success text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      u("span", { class: "fw-bold" }, "2")
                    ])
                  ], -1)),
                  u("div", RR, [
                    p[22] || (p[22] = u("h5", null, "Add Patient MRNs", -1)),
                    p[23] || (p[23] = u("p", { class: "text-muted mb-2" }, "Input the patient identifiers you want to fetch FHIR data for", -1)),
                    ge(m, {
                      to: "/monitor",
                      class: "btn btn-success btn-sm"
                    }, {
                      default: xe(() => p[21] || (p[21] = [
                        u("i", { class: "fas fa-plus me-1" }, null, -1),
                        ae(" Add MRNs ")
                      ])),
                      _: 1,
                      __: [21]
                    })
                  ]),
                  p[25] || (p[25] = u("div", { class: "step-icon ms-3" }, [
                    u("i", { class: "fas fa-arrow-right text-muted fa-2x d-none d-md-block" })
                  ], -1))
                ]),
                u("div", IR, [
                  p[29] || (p[29] = u("div", { class: "step-number me-4" }, [
                    u("div", { class: "bg-info text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      u("span", { class: "fw-bold" }, "3")
                    ])
                  ], -1)),
                  u("div", PR, [
                    p[27] || (p[27] = u("h5", null, "Trigger Data Fetch", -1)),
                    p[28] || (p[28] = u("p", { class: "text-muted mb-2" }, "Start the background processing to retrieve FHIR resources", -1)),
                    ge(m, {
                      to: "/monitor",
                      class: "btn btn-info btn-sm"
                    }, {
                      default: xe(() => p[26] || (p[26] = [
                        u("i", { class: "fas fa-play me-1" }, null, -1),
                        ae(" Start Fetch ")
                      ])),
                      _: 1,
                      __: [26]
                    })
                  ]),
                  p[30] || (p[30] = u("div", { class: "step-icon ms-3" }, [
                    u("i", { class: "fas fa-arrow-right text-muted fa-2x d-none d-md-block" })
                  ], -1))
                ]),
                u("div", VR, [
                  p[34] || (p[34] = u("div", { class: "step-number me-4" }, [
                    u("div", { class: "bg-warning text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      u("span", { class: "fw-bold" }, "4")
                    ])
                  ], -1)),
                  u("div", LR, [
                    p[32] || (p[32] = u("h5", null, "Download Archives", -1)),
                    p[33] || (p[33] = u("p", { class: "text-muted mb-2" }, "Create and download ZIP files containing your FHIR resources", -1)),
                    ge(m, {
                      to: "/archives",
                      class: "btn btn-warning btn-sm"
                    }, {
                      default: xe(() => p[31] || (p[31] = [
                        u("i", { class: "fas fa-download me-1" }, null, -1),
                        ae(" View Archives ")
                      ])),
                      _: 1,
                      __: [31]
                    })
                  ])
                ])
              ])
            ])
          ])
        ]),
        a.value ? (N(), P("div", MR, [
          p[46] || (p[46] = u("div", { class: "text-center mb-4" }, [
            u("h2", null, "Project Status"),
            u("p", { class: "text-muted" }, "Current overview of your FHIR snapshot project")
          ], -1)),
          u("div", FR, [
            u("div", BR, [
              u("div", jR, [
                u("div", UR, [
                  p[36] || (p[36] = u("i", { class: "fas fa-user-injured fa-2x mb-2" }, null, -1)),
                  u("h3", HR, z(l.value), 1),
                  p[37] || (p[37] = u("p", { class: "mb-0 small" }, "Total MRNs", -1))
                ])
              ])
            ]),
            u("div", WR, [
              u("div", $R, [
                u("div", KR, [
                  p[38] || (p[38] = u("i", { class: "fas fa-file-medical fa-2x mb-2" }, null, -1)),
                  u("h3", zR, z(f.value), 1),
                  p[39] || (p[39] = u("p", { class: "mb-0 small" }, "Resource Types", -1))
                ])
              ])
            ]),
            u("div", qR, [
              u("div", XR, [
                u("div", YR, [
                  p[40] || (p[40] = u("i", { class: "fas fa-check-circle fa-2x mb-2" }, null, -1)),
                  u("h3", GR, z(c.value), 1),
                  p[41] || (p[41] = u("p", { class: "mb-0 small" }, "Completed", -1))
                ])
              ])
            ]),
            u("div", QR, [
              u("div", JR, [
                u("div", ZR, [
                  p[42] || (p[42] = u("i", { class: "fas fa-clock fa-2x mb-2" }, null, -1)),
                  u("h3", e2, z(d.value), 1),
                  p[43] || (p[43] = u("p", { class: "mb-0 small" }, "Pending", -1))
                ])
              ])
            ])
          ]),
          i.value ? (N(), P("div", t2, [
            u("div", n2, [
              ge(m, {
                to: "/monitor",
                class: "btn btn-primary"
              }, {
                default: xe(() => p[44] || (p[44] = [
                  u("i", { class: "fas fa-plus me-1" }, null, -1),
                  ae(" Add MRNs ")
                ])),
                _: 1,
                __: [44]
              }),
              ge(m, {
                to: "/archives",
                class: "btn btn-outline-primary"
              }, {
                default: xe(() => p[45] || (p[45] = [
                  u("i", { class: "fas fa-archive me-1" }, null, -1),
                  ae(" View Archives ")
                ])),
                _: 1,
                __: [45]
              })
            ])
          ])) : Be("", !0)
        ])) : (N(), P("div", s2, [
          p[48] || (p[48] = u("i", { class: "fas fa-info-circle fa-2x mb-3" }, null, -1)),
          p[49] || (p[49] = u("h4", null, "Get Started", -1)),
          p[50] || (p[50] = u("p", { class: "mb-3" }, "Configure your FHIR system and resource types to begin fetching data.", -1)),
          ge(m, {
            to: "/setup",
            class: "btn btn-primary"
          }, {
            default: xe(() => p[47] || (p[47] = [
              u("i", { class: "fas fa-cogs me-1" }, null, -1),
              ae(" Configure Now ")
            ])),
            _: 1,
            __: [47]
          })
        ]))
      ]);
    };
  }
}), r2 = /* @__PURE__ */ Fo(o2, [["__scopeId", "data-v-77176938"]]), i2 = ["value"], a2 = ["value"], l2 = /* @__PURE__ */ ke({
  __name: "FhirSystemDropdown",
  setup(e) {
    const t = Ot("settings"), n = Ot("draftResources"), s = $o(), o = (r) => {
      const i = r.target, a = parseInt(i.value);
      s.updateSelectedFhirSystem(a);
    };
    return (r, i) => (N(), P("div", null, [
      i[1] || (i[1] = u("label", { for: "ehr-dropdown" }, "FHIR Systems", -1)),
      u("select", {
        class: "form-select form-select-sm",
        id: "ehr-dropdown",
        value: ie(n)?.selectedFhirSystem.value || "",
        onChange: o
      }, [
        i[0] || (i[0] = u("option", { value: "" }, "Select a FHIR System", -1)),
        (N(!0), P(Oe, null, Qe(ie(t).fhir_systems, (a) => (N(), P("option", {
          key: a.ehr_id,
          value: a.ehr_id
        }, z(a.ehr_name), 9, a2))), 128))
      ], 40, i2)
    ]));
  }
}), c2 = { class: "d-flex" }, u2 = { class: "d-flex gap-2" }, d2 = /* @__PURE__ */ ke({
  __name: "ResourcesToolbar",
  emits: ["import", "export", "add"],
  setup(e, { emit: t }) {
    const n = t;
    return (s, o) => (N(), P("div", c2, [
      o[6] || (o[6] = u("div", { class: "me-auto" }, [
        u("span", null, "Resources")
      ], -1)),
      u("div", u2, [
        u("button", {
          class: "btn btn-sm btn-primary",
          onClick: o[0] || (o[0] = (r) => n("import"))
        }, o[3] || (o[3] = [
          u("i", { class: "fas fa-upload fa-fw" }, null, -1),
          u("span", null, "Import", -1)
        ])),
        u("button", {
          class: "btn btn-sm btn-primary",
          onClick: o[1] || (o[1] = (r) => n("export"))
        }, o[4] || (o[4] = [
          u("i", { class: "fas fa-download fa-fw" }, null, -1),
          u("span", null, "Export", -1)
        ])),
        u("button", {
          class: "btn btn-sm btn-primary",
          onClick: o[2] || (o[2] = (r) => n("add"))
        }, o[5] || (o[5] = [
          u("i", { class: "fas fa-plus fa-fw" }, null, -1),
          u("span", null, "Add", -1)
        ]))
      ])
    ]));
  }
}), f2 = { class: "table table-striped table-hover table-sm border-top" }, p2 = ["onClick"], h2 = { key: 0 }, m2 = /* @__PURE__ */ ke({
  __name: "ResourcesTable",
  setup(e) {
    const t = $o(), n = Ot("draftResources"), s = re(() => n ? [
      ...n.selectedMappingResources.value,
      ...n.selectedCustomMappingResources.value
    ] : []);
    function o(r) {
      t.removeResource(r, r.type);
    }
    return (r, i) => (N(), P("table", f2, [
      i[2] || (i[2] = u("thead", null, [
        u("tr", null, [
          u("th", null, "Name"),
          u("th", null, "Type"),
          u("th", null, "Resource Specification"),
          u("th", null, "Actions")
        ])
      ], -1)),
      u("tbody", null, [
        (N(!0), P(Oe, null, Qe(s.value, (a) => (N(), P("tr", {
          key: `${a.type}-${a.name}`
        }, [
          u("td", null, z(a.name), 1),
          u("td", null, z(a.type), 1),
          u("td", null, z(a.resourceSpec || "-"), 1),
          u("td", null, [
            u("button", {
              type: "button",
              class: "btn btn-outline-danger btn-sm",
              onClick: (l) => o(a)
            }, i[0] || (i[0] = [
              u("i", { class: "fas fa-trash fa-fw" }, null, -1)
            ]), 8, p2)
          ])
        ]))), 128)),
        s.value.length === 0 ? (N(), P("tr", h2, i[1] || (i[1] = [
          u("td", {
            colspan: "4",
            class: "text-muted text-center"
          }, "No resources configured", -1)
        ]))) : Be("", !0)
      ])
    ]));
  }
}), g2 = { class: "mb-3" }, v2 = ["value"], _2 = ["disabled"], E2 = ["value"], y2 = ["value"], b2 = ["disabled"], po = Object.freeze({
  PREDEFINED: "PREDEFINED",
  CUSTOM: "CUSTOM"
}), w2 = /* @__PURE__ */ ke({
  __name: "ResourceForm",
  props: {
    modelValue: { default: () => ({}) },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = $o(), { settings: n } = Ea(t), s = re(() => n.value.mapping_resources), o = Dy(e, "modelValue");
    return (r, i) => (N(), P("div", null, [
      u("form", null, [
        u("div", g2, [
          i[5] || (i[5] = u("label", {
            class: "form-label",
            for: "display-name"
          }, "Display Name", -1)),
          ct(u("input", {
            "onUpdate:modelValue": i[0] || (i[0] = (a) => o.value.displayName = a),
            class: "form-control form-control-sm",
            type: "text",
            id: "display-name",
            placeholder: "E.g., Vital Signs, Social History, etc.",
            required: ""
          }, null, 512), [
            [Cr, o.value.displayName]
          ])
        ]),
        u("div", null, [
          ct(u("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-predefined",
            value: ie(po).PREDEFINED,
            "onUpdate:modelValue": i[1] || (i[1] = (a) => o.value.resourceType = a)
          }, null, 8, v2), [
            [zi, o.value.resourceType]
          ]),
          i[7] || (i[7] = u("label", {
            class: "form-label ms-2",
            for: "resource-type-predefined"
          }, "Predefined Resource", -1)),
          ct(u("select", {
            "onUpdate:modelValue": i[2] || (i[2] = (a) => o.value.predefinedResource = a),
            class: "form-select form-select-sm",
            id: "predefined-resource",
            disabled: o.value.resourceType !== ie(po).PREDEFINED
          }, [
            i[6] || (i[6] = u("option", {
              disabled: "",
              value: ""
            }, "Please Select...", -1)),
            (N(!0), P(Oe, null, Qe(s.value, (a) => (N(), P("option", {
              key: a.resourceSpec,
              value: a.resourceSpec
            }, z(a.name), 9, E2))), 128))
          ], 8, _2), [
            [_o, o.value.predefinedResource]
          ])
        ]),
        i[9] || (i[9] = u("div", { class: "d-flex justify-start-center my-2" }, [
          u("span", null, "—OR—")
        ], -1)),
        u("div", null, [
          ct(u("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-custom",
            value: ie(po).CUSTOM,
            "onUpdate:modelValue": i[3] || (i[3] = (a) => o.value.resourceType = a)
          }, null, 8, y2), [
            [zi, o.value.resourceType]
          ]),
          i[8] || (i[8] = u("label", {
            class: "form-label ms-2",
            for: "resource-type-custom"
          }, "Custom Resource", -1)),
          ct(u("input", {
            "onUpdate:modelValue": i[4] || (i[4] = (a) => o.value.customResourceSpec = a),
            class: "form-control form-control-sm",
            type: "text",
            id: "custom-resource",
            disabled: o.value.resourceType !== ie(po).CUSTOM,
            placeholder: "Observation?category=social-history"
          }, null, 8, b2), [
            [Cr, o.value.customResourceSpec]
          ])
        ])
      ])
    ]));
  }
}), A2 = { class: "d-flex flex-column gap-4" }, O2 = { class: "card" }, S2 = { class: "card-body px-0 py-2" }, C2 = { class: "p-2" }, T2 = { class: "d-flex gap-2 justify-content-end" }, N2 = ["disabled"], D2 = /* @__PURE__ */ ke({
  __name: "SetupPage",
  setup(e) {
    const t = $o(), { settings: n, loading: s, selectedMappingResources: o, selectedCustomMappingResources: r, selectedFhirSystem: i } = Ea(t);
    vo("settings", n), vo("draftResources", { selectedMappingResources: o, selectedCustomMappingResources: r, selectedFhirSystem: i });
    const a = re(() => s.value.fetch || s.value.save), l = VE("resourceModal"), f = () => ({
      displayName: "",
      customResourceSpec: "",
      predefinedResource: "",
      resourceType: po.PREDEFINED
    }), c = ee(f());
    async function d() {
      if (!l.value) return;
      if (c.value = f(), await l.value.show()) {
        if (!c.value.displayName.trim()) {
          alert("Display Name is required");
          return;
        }
        if (c.value.resourceType === po.PREDEFINED) {
          if (!c.value.predefinedResource) {
            alert("Please select a predefined resource");
            return;
          }
          t.addPredefinedResource(c.value.displayName, c.value.predefinedResource);
        } else {
          if (!c.value.customResourceSpec.trim()) {
            alert("Resource Specification is required for custom resources");
            return;
          }
          t.addCustomResource(c.value.displayName, c.value.customResourceSpec);
        }
      }
    }
    async function h() {
      try {
        await t.saveProjectSettings();
      } catch (p) {
        console.error("Failed to save settings:", p);
      }
    }
    return (p, m) => {
      const g = gt("b-modal");
      return N(), P("div", A2, [
        ge(l2),
        u("div", O2, [
          u("div", S2, [
            u("div", C2, [
              ge(d2, { onAdd: d })
            ]),
            ge(m2),
            (N(), ot(Vo, { to: "body" }, [
              ge(g, {
                ref_key: "resourceModal",
                ref: l
              }, {
                title: xe(() => m[1] || (m[1] = [
                  ae("Resource")
                ])),
                default: xe(() => [
                  ge(w2, {
                    modelValue: c.value,
                    "onUpdate:modelValue": m[0] || (m[0] = (v) => c.value = v)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 512)
            ]))
          ])
        ]),
        u("div", T2, [
          m[3] || (m[3] = u("button", {
            type: "button",
            class: "btn btn-secondary btn-sm"
          }, [
            u("i", { class: "fas fa-xmark fa-fw" }),
            u("span", null, "Cancel")
          ], -1)),
          u("button", {
            type: "button",
            class: "btn btn-primary btn-sm",
            onClick: h,
            disabled: a.value
          }, m[2] || (m[2] = [
            u("i", { class: "fas fa-save fa-fw" }, null, -1),
            u("span", null, "Save", -1)
          ]), 8, N2)
        ])
      ]);
    };
  }
}), _u = /* @__PURE__ */ $r("operations", () => {
  const e = ee(!1), t = ee(null), n = ee(!1), s = ee(!1), o = ee({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), r = (g) => {
    e.value = g;
  }, i = (g, v, E, b) => {
    t.value = {
      operation: g,
      success: v,
      message: E,
      data: b,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }, s.value = !0, setTimeout(() => {
      s.value = !1;
    }, 5e3);
  }, a = () => {
    s.value = !1;
  }, l = () => {
    n.value = !n.value;
  }, f = (g) => {
    o.value = {
      visible: !0,
      archiveType: "selected",
      selectedMrns: g
    };
  }, c = () => {
    o.value = {
      visible: !0,
      archiveType: "all",
      selectedMrns: []
    };
  }, d = () => {
    o.value.visible = !1;
  }, h = re(() => o.value.visible), p = re(() => o.value.archiveType), m = re(() => o.value.selectedMrns);
  return {
    // State
    loading: e,
    lastOperation: t,
    showSummary: n,
    showToast: s,
    // Actions
    setLoading: r,
    recordOperation: i,
    clearToast: a,
    toggleSummary: l,
    // Archive Modal
    archiveModalVisible: h,
    archiveModalType: p,
    archiveModalSelectedMrns: m,
    showArchiveModalSelected: f,
    showArchiveModalAll: c,
    hideArchiveModal: d
  };
}), x2 = { class: "mb-3" }, k2 = { class: "d-flex flex-wrap gap-2 align-items-center" }, R2 = {
  class: "btn-group",
  role: "group"
}, I2 = ["disabled"], P2 = { key: 0 }, V2 = { key: 1 }, L2 = {
  class: "btn-group",
  role: "group"
}, M2 = ["disabled"], F2 = { key: 0 }, B2 = { key: 1 }, j2 = ["disabled"], U2 = { key: 0 }, H2 = { key: 1 }, W2 = {
  class: "btn-group",
  role: "group"
}, $2 = ["disabled"], K2 = ["disabled"], z2 = {
  key: 0,
  class: "mt-2"
}, q2 = { class: "text-muted" }, X2 = { key: 0 }, Y2 = /* @__PURE__ */ ke({
  __name: "MonitorToolbar",
  emits: ["addMrn"],
  setup(e) {
    const t = Gs(), n = _u(), s = re(() => t.selectedMrns.length === 0), o = re(() => t.selectedMrns.length), r = re(() => t.operationLoading), i = re(() => t.loading), a = re(() => t.projectSummary), l = async () => {
      try {
        const m = await t.triggerFetchSelected();
        n.recordOperation(
          "fetch-selected",
          !0,
          `Fetch triggered for ${m.mrns?.length || 0} MRN(s). ${m.tasks_created || 0} tasks created.`,
          m
        );
      } catch (m) {
        console.error("Failed to trigger fetch for selected MRNs:", m), n.recordOperation("fetch-selected", !1, "Failed to trigger fetch for selected MRNs");
      }
    }, f = async () => {
      try {
        if (confirm("Are you sure you want to perform a full synchronization? This will analyze all MRNs and create missing resource instances.")) {
          const m = await t.performFullSync();
          n.recordOperation(
            "full-sync",
            !0,
            `Full sync completed. ${m.statistics?.missing_instances_created || 0} instances created, ${m.statistics?.orphaned_instances_cleaned || 0} cleaned.`,
            m
          );
        }
      } catch (m) {
        console.error("Failed to perform full sync:", m), n.recordOperation("full-sync", !1, "Failed to perform full synchronization");
      }
    }, c = async () => {
      try {
        if (confirm("Are you sure you want to retry all failed resources? This will mark them as pending for re-processing.")) {
          const m = await t.bulkRetryFailed();
          n.recordOperation(
            "bulk-retry",
            !0,
            `Bulk retry completed. ${m.retried_count || 0} failed resources marked for retry.`,
            m
          );
        }
      } catch (m) {
        console.error("Failed to bulk retry failed resources:", m), n.recordOperation("bulk-retry", !1, "Failed to bulk retry failed resources");
      }
    }, d = async () => {
      try {
        await Promise.all([
          t.fetchMrns(),
          t.getProjectSummary()
        ]), n.recordOperation("refresh", !0, "Data refreshed successfully.");
      } catch (m) {
        console.error("Failed to refresh data:", m), n.recordOperation("refresh", !1, "Failed to refresh data");
      }
    }, h = () => {
      if (s.value) {
        n.recordOperation("archive-selected", !1, "No MRNs selected for archive");
        return;
      }
      const m = t.mrns.filter((g) => t.selectedMrns.includes(g.id)).map((g) => g.mrn);
      n.showArchiveModalSelected(m);
    }, p = () => {
      n.showArchiveModalAll();
    };
    return (m, g) => (N(), P("div", x2, [
      u("div", k2, [
        u("div", R2, [
          u("button", {
            class: "btn btn-primary",
            onClick: g[0] || (g[0] = (v) => m.$emit("addMrn"))
          }, g[2] || (g[2] = [
            u("i", { class: "fas fa-plus-circle fa-fw" }, null, -1),
            ae(" Add MRN ")
          ])),
          u("button", {
            class: "btn btn-outline-primary",
            onClick: l,
            disabled: s.value || r.value,
            title: "Trigger fetch for selected MRNs"
          }, [
            g[4] || (g[4] = u("i", { class: "fas fa-rotate-right fa-fw" }, null, -1)),
            r.value ? (N(), P("span", V2, g[3] || (g[3] = [
              u("div", {
                class: "spinner-border spinner-border-sm",
                role: "status"
              }, [
                u("span", { class: "visually-hidden" }, "Loading...")
              ], -1)
            ]))) : (N(), P("span", P2, "Fetch Selected"))
          ], 8, I2)
        ]),
        u("div", L2, [
          u("button", {
            class: "btn btn-warning",
            onClick: f,
            disabled: r.value,
            title: "Synchronize all configured resources with existing MRNs"
          }, [
            g[5] || (g[5] = u("i", { class: "fas fa-arrows-rotate fa-fw" }, null, -1)),
            r.value ? (N(), P("span", B2, "Syncing...")) : (N(), P("span", F2, "Full Sync"))
          ], 8, M2),
          u("button", {
            class: "btn btn-outline-warning",
            onClick: c,
            disabled: r.value,
            title: "Retry all failed resources"
          }, [
            g[6] || (g[6] = u("i", { class: "fas fa-exclamation-triangle fa-fw" }, null, -1)),
            r.value ? (N(), P("span", H2, "Retrying...")) : (N(), P("span", U2, "Retry Failed"))
          ], 8, j2)
        ]),
        u("div", W2, [
          u("button", {
            class: "btn btn-success",
            onClick: h,
            disabled: s.value,
            title: "Create archive for selected completed MRNs"
          }, g[7] || (g[7] = [
            u("i", { class: "fas fa-archive fa-fw" }, null, -1),
            ae(" Create Archive ")
          ]), 8, $2),
          u("button", {
            class: "btn btn-outline-success",
            onClick: p,
            title: "Create archive for all completed resources"
          }, g[8] || (g[8] = [
            u("i", { class: "fas fa-archive fa-fw" }, null, -1),
            ae(" Archive All ")
          ]))
        ]),
        u("button", {
          class: "btn btn-outline-secondary",
          onClick: d,
          disabled: i.value,
          title: "Refresh data"
        }, [
          u("i", {
            class: me(["fas fa-rotate-right fa-fw", { "fa-spin": i.value }])
          }, null, 2)
        ], 8, K2),
        u("button", {
          class: "btn btn-outline-info",
          onClick: g[1] || (g[1] = (v) => ie(n).toggleSummary()),
          title: "Toggle project summary"
        }, g[9] || (g[9] = [
          u("i", { class: "fas fa-chart-bar fa-fw" }, null, -1),
          ae(" Summary ")
        ]))
      ]),
      a.value ? (N(), P("div", z2, [
        u("small", q2, [
          ae(" Total MRNs: " + z(a.value.total_mrns) + " | Queue: " + z(a.value.sync_status.pending_tasks) + " pending, " + z(a.value.sync_status.failed_tasks) + " failed tasks ", 1),
          o.value > 0 ? (N(), P("span", X2, " | Selected: " + z(o.value), 1)) : Be("", !0)
        ])
      ])) : Be("", !0)
    ]));
  }
}), G2 = { class: "align-middle" }, Q2 = { class: "d-flex flex-column" }, J2 = { class: "text-muted" }, Z2 = {
  key: 0,
  class: "d-block text-muted"
}, eI = {
  key: 0,
  class: "text-success"
}, tI = {
  key: 1,
  class: "text-muted"
}, nI = {
  key: 0,
  class: "text-danger"
}, sI = ["title"], oI = ["title"], rI = {
  key: 1,
  class: "text-muted"
}, iI = {
  class: "btn-group",
  role: "group"
}, aI = ["disabled"], lI = {
  key: 0,
  class: "table-warning"
}, cI = { colspan: "5" }, uI = { class: "p-2" }, dI = { class: "mb-0 mt-1" }, fI = /* @__PURE__ */ ke({
  __name: "MonitorResourceRow",
  props: {
    resource: {},
    mrn: {}
  },
  setup(e) {
    const t = e, n = Gs(), s = ee(!1), o = ee(!1), r = (c) => {
      const d = "badge";
      switch (c) {
        case Re.Pending:
          return `${d} bg-warning text-dark`;
        case Re.Fetching:
          return `${d} bg-info text-dark`;
        case Re.Completed:
          return `${d} bg-success`;
        case Re.Failed:
          return `${d} bg-danger`;
        case Re.Outdated:
          return `${d} bg-secondary`;
        case Re.Deleted:
          return `${d} bg-dark`;
        default:
          return `${d} bg-secondary`;
      }
    }, i = (c) => {
      if (!c) return "-";
      try {
        const d = new Date(c);
        return d.toLocaleDateString() + " " + d.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
      } catch {
        return c;
      }
    }, a = (c) => c ? c.length > 50 ? c.substring(0, 50) + "..." : c : "-", l = async () => {
      try {
        o.value = !0, await n.retryFailedResource(
          t.mrn,
          t.resource.name,
          t.resource.repeat_instance
        );
      } catch (c) {
        console.error("Failed to retry resource:", c);
      } finally {
        o.value = !1;
      }
    }, f = () => {
      console.log("View details for resource:", t.resource);
    };
    return (c, d) => (N(), P(Oe, null, [
      u("tr", G2, [
        u("td", null, [
          u("div", Q2, [
            u("strong", null, z(c.resource.name), 1),
            u("small", J2, z(c.resource.mapping_type) + " | " + z(c.resource.resource_spec), 1)
          ])
        ]),
        u("td", null, [
          u("span", {
            class: me(r(c.resource.status))
          }, z(c.resource.status), 3),
          c.resource.repeat_instance ? (N(), P("small", Z2, " Instance #" + z(c.resource.repeat_instance), 1)) : Be("", !0)
        ]),
        u("td", null, [
          c.resource.fetch_date ? (N(), P("div", eI, [
            d[1] || (d[1] = u("i", { class: "fas fa-check-circle fa-fw" }, null, -1)),
            ae(" " + z(i(c.resource.fetch_date)), 1)
          ])) : (N(), P("div", tI, "-"))
        ]),
        u("td", null, [
          c.resource.error_message ? (N(), P("div", nI, [
            d[2] || (d[2] = u("i", { class: "fas fa-exclamation-triangle fa-fw" }, null, -1)),
            u("span", {
              title: c.resource.error_message
            }, z(a(c.resource.error_message)), 9, sI),
            c.resource.error_message.length > 50 ? (N(), P("button", {
              key: 0,
              class: "btn btn-link btn-sm p-0 ms-1",
              onClick: d[0] || (d[0] = (h) => s.value = !s.value),
              title: s.value ? "Show less" : "Show more"
            }, [
              u("i", {
                class: me(`fas fa-chevron-${s.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, oI)) : Be("", !0)
          ])) : (N(), P("div", rI, "-"))
        ]),
        u("td", null, [
          u("div", iI, [
            c.resource.status === "Failed" ? (N(), P("button", {
              key: 0,
              class: "btn btn-sm btn-warning",
              onClick: l,
              disabled: o.value,
              title: "Retry this resource"
            }, d[3] || (d[3] = [
              u("i", { class: "fas fa-rotate-right fa-fw" }, null, -1)
            ]), 8, aI)) : Be("", !0),
            c.resource.status === "Completed" ? (N(), P("button", {
              key: 1,
              class: "btn btn-sm btn-outline-primary",
              onClick: f,
              title: "View resource details"
            }, d[4] || (d[4] = [
              u("i", { class: "fas fa-eye fa-fw" }, null, -1)
            ]))) : Be("", !0)
          ])
        ])
      ]),
      s.value && c.resource.error_message ? (N(), P("tr", lI, [
        u("td", cI, [
          u("div", uI, [
            d[5] || (d[5] = u("strong", null, "Error Details:", -1)),
            u("pre", dI, z(c.resource.error_message), 1)
          ])
        ])
      ])) : Be("", !0)
    ], 64));
  }
}), pI = { class: "align-middle" }, hI = ["checked"], mI = {
  key: 0,
  class: "status-display-smart"
}, gI = ["title"], vI = {
  key: 1,
  class: "status-display-progress"
}, _I = {
  class: "progress position-relative",
  style: { height: "20px" }
}, EI = ["title"], yI = { class: "text-muted" }, bI = {
  key: 2,
  class: "status-display-badges"
}, wI = ["title"], AI = {
  key: 3,
  class: "status-display-legacy"
}, OI = ["title"], SI = {
  key: 0,
  class: "position-absolute bg-dark text-white p-2 rounded shadow-lg",
  style: { "z-index": "1000", top: "100%", left: "0", width: "250px" }
}, CI = { class: "small" }, TI = { class: "d-flex justify-content-between" }, NI = { class: "d-flex justify-content-between" }, DI = { class: "d-flex align-items-center" }, xI = ["aria-expanded"], kI = {
  key: 0,
  class: "ms-2"
}, RI = {
  class: "btn-group",
  role: "group"
}, II = ["disabled"], PI = { key: 0 }, VI = { key: 1 }, LI = ["disabled", "title"], MI = {
  colspan: "5",
  class: "p-0"
}, FI = { class: "ps-3" }, BI = { class: "table table-sm table-bordered mb-0" }, jI = /* @__PURE__ */ ke({
  __name: "MonitorTableRow",
  props: {
    item: {},
    selected: { type: Boolean }
  },
  setup(e) {
    const t = Gs(), n = _u(), s = e, o = ee(!1), r = ee(!1), i = ee(!1), a = ee("smart"), l = ee(!1), f = () => {
      o.value = !o.value;
    }, c = re(() => {
      const b = s.item.resources.filter((L) => L.status !== Re.Deleted), y = b.length, A = b.filter((L) => L.status === Re.Completed).length, O = b.filter((L) => L.status === Re.Failed).length, T = b.filter((L) => L.status === Re.Pending).length, x = b.filter((L) => L.status === Re.Fetching).length;
      let j = `${A}/${y} completed`;
      return O > 0 && (j += `, ${O} failed`), x > 0 && (j += `, ${x} fetching`), T > 0 && (j += `, ${T} pending`), j;
    }), d = re(() => t.getProgressBarConfig(s.item)), h = re(() => t.getArchiveButtonConfig(s.item)), p = () => {
      const b = d.value;
      return b.segments.length === 0 ? "No resources" : `${b.segments.map((A) => `${A.status}: ${A.count}`).join(", ")} | ${Math.round(b.completion_percentage)}% complete`;
    }, m = () => p() + " (hover for details)", g = () => {
      const b = t.getStatusForStyling(s.item);
      return `badge bg-${t.getStatusColor(b)}`;
    }, v = async () => {
      try {
        r.value = !0, await t.triggerFetchMrns([s.item.mrn]);
      } catch (b) {
        console.error("Failed to trigger fetch for MRN:", b);
      } finally {
        r.value = !1;
      }
    }, E = async () => {
      try {
        n.showArchiveModalSelected([s.item.mrn]);
      } catch (b) {
        console.error("Failed to show archive modal:", b);
      }
    };
    return (b, y) => (N(), P(Oe, null, [
      u("tr", pI, [
        u("td", null, [
          u("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: b.selected,
            onChange: y[0] || (y[0] = (A) => ie(t).toggleSelection(b.item.id))
          }, null, 40, hI)
        ]),
        u("td", null, z(b.item.mrn), 1),
        u("td", null, [
          a.value === "smart" ? (N(), P("div", mI, [
            u("span", {
              class: me(g()),
              title: p()
            }, z(ie(t).getSmartStatusDisplay(b.item)), 11, gI)
          ])) : a.value === "progress" ? (N(), P("div", vI, [
            u("div", _I, [
              (N(!0), P(Oe, null, Qe(d.value.segments, (A) => (N(), P("div", {
                key: A.status,
                class: me(`progress-bar bg-${A.color}`),
                style: os({ width: A.percentage + "%" }),
                title: `${A.status}: ${A.count} (${A.percentage}%)`
              }, null, 14, EI))), 128))
            ]),
            u("small", yI, z(Math.round(d.value.completion_percentage)) + "% complete", 1)
          ])) : a.value === "badges" ? (N(), P("div", bI, [
            (N(!0), P(Oe, null, Qe(d.value.segments, (A) => (N(), P("span", {
              key: A.status,
              class: me(`badge bg-${A.color} me-1`),
              title: `${A.status}: ${A.count} resources`,
              style: { "font-size": "0.7em" }
            }, z(A.status.charAt(0).toUpperCase()) + ": " + z(A.count), 11, wI))), 128))
          ])) : (N(), P("div", AI, [
            u("span", {
              class: me(g()),
              title: m(),
              onMouseenter: y[1] || (y[1] = (A) => i.value = !0),
              onMouseleave: y[2] || (y[2] = (A) => i.value = !1)
            }, z(ie(t).getSmartStatusDisplay(b.item)), 43, OI),
            i.value ? (N(), P("div", SI, [
              y[7] || (y[7] = u("div", { class: "fw-bold mb-1" }, "Status Breakdown", -1)),
              u("div", CI, [
                (N(!0), P(Oe, null, Qe(d.value.segments, (A) => (N(), P("div", {
                  key: A.status,
                  class: "d-flex justify-content-between"
                }, [
                  u("span", null, z(A.status) + ":", 1),
                  u("span", null, z(A.count) + " (" + z(A.percentage) + "%)", 1)
                ]))), 128)),
                y[6] || (y[6] = u("hr", { class: "my-1" }, null, -1)),
                u("div", TI, [
                  y[4] || (y[4] = u("span", null, "Total Resources:", -1)),
                  u("span", null, z(d.value.total_resources), 1)
                ]),
                u("div", NI, [
                  y[5] || (y[5] = u("span", null, "Completion:", -1)),
                  u("span", null, z(Math.round(d.value.completion_percentage)) + "%", 1)
                ])
              ])
            ])) : Be("", !0)
          ]))
        ]),
        u("td", null, [
          u("div", DI, [
            u("span", null, z(c.value), 1),
            u("button", {
              class: "btn btn-sm btn-light ms-2",
              onClick: f,
              "aria-expanded": o.value
            }, [
              u("i", {
                class: me(`fas fa-chevron-${o.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, xI),
            l.value ? (N(), P("div", kI, [
              ct(u("select", {
                "onUpdate:modelValue": y[3] || (y[3] = (A) => a.value = A),
                class: "form-select form-select-sm",
                style: { width: "100px", "font-size": "0.75em" },
                title: "Status Display Mode (Dev)"
              }, y[8] || (y[8] = [
                u("option", { value: "smart" }, "Smart", -1),
                u("option", { value: "progress" }, "Progress", -1),
                u("option", { value: "badges" }, "Badges", -1),
                u("option", { value: "legacy" }, "Legacy", -1)
              ]), 512), [
                [_o, a.value]
              ])
            ])) : Be("", !0)
          ])
        ]),
        u("td", null, [
          u("div", RI, [
            u("button", {
              class: "btn btn-sm btn-primary",
              onClick: v,
              disabled: r.value,
              title: "Trigger fetch for this MRN"
            }, [
              y[10] || (y[10] = u("i", { class: "fas fa-rotate-right fa-fw" }, null, -1)),
              r.value ? (N(), P("span", VI, y[9] || (y[9] = [
                u("div", {
                  class: "spinner-border spinner-border-sm",
                  role: "status"
                }, [
                  u("span", { class: "visually-hidden" }, "Loading...")
                ], -1)
              ]))) : (N(), P("span", PI, "Fetch"))
            ], 8, II),
            u("button", {
              class: me(`btn btn-sm btn-${h.value.variant}`),
              disabled: h.value.disabled,
              onClick: E,
              title: h.value.tooltip
            }, y[11] || (y[11] = [
              u("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 10, LI)
          ])
        ])
      ]),
      ct(u("tr", null, [
        u("td", MI, [
          u("div", FI, [
            u("table", BI, [
              y[12] || (y[12] = u("thead", { class: "table-light" }, [
                u("tr", null, [
                  u("th", { scope: "col" }, "Resource"),
                  u("th", { scope: "col" }, "Status"),
                  u("th", { scope: "col" }, "Fetch Date"),
                  u("th", { scope: "col" }, "Error"),
                  u("th", { scope: "col" }, "Actions")
                ])
              ], -1)),
              u("tbody", null, [
                (N(!0), P(Oe, null, Qe(b.item.resources, (A) => (N(), ot(fI, {
                  key: `${A.name}-${A.repeat_instance}`,
                  resource: A,
                  mrn: b.item.mrn
                }, null, 8, ["resource", "mrn"]))), 128))
              ])
            ])
          ])
        ])
      ], 512), [
        [ym, o.value]
      ])
    ], 64));
  }
}), UI = /* @__PURE__ */ Fo(jI, [["__scopeId", "data-v-0c507c2e"]]), HI = {
  key: 0,
  class: "d-flex justify-content-center"
}, WI = {
  key: 1,
  class: "table table-striped table-hover"
}, $I = { class: "table-light" }, KI = { scope: "col" }, zI = ["checked", "indeterminate"], qI = { key: 0 }, XI = /* @__PURE__ */ ke({
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
    const t = e, n = ee(null);
    return Wt(() => t.indeterminate, (s) => {
      n.value && (n.value.indeterminate = s);
    }, { immediate: !0 }), (s, o) => (N(), P("div", null, [
      s.loading ? (N(), P("div", HI, o[1] || (o[1] = [
        u("div", {
          class: "spinner-border",
          role: "status"
        }, [
          u("span", { class: "visually-hidden" }, "Loading...")
        ], -1)
      ]))) : (N(), P("table", WI, [
        u("thead", $I, [
          u("tr", null, [
            u("th", KI, [
              u("input", {
                ref_key: "selectAllCheckbox",
                ref: n,
                class: "form-check-input",
                type: "checkbox",
                checked: s.allSelected,
                indeterminate: s.indeterminate,
                onChange: o[0] || (o[0] = (r) => s.$emit("toggle-select-all"))
              }, null, 40, zI)
            ]),
            o[2] || (o[2] = u("th", { scope: "col" }, "MRN", -1)),
            o[3] || (o[3] = u("th", { scope: "col" }, "Status", -1)),
            o[4] || (o[4] = u("th", { scope: "col" }, "Resources", -1)),
            o[5] || (o[5] = u("th", { scope: "col" }, "Actions", -1))
          ])
        ]),
        u("tbody", null, [
          s.items.length === 0 ? (N(), P("tr", qI, o[6] || (o[6] = [
            u("td", {
              colspan: "5",
              class: "text-center"
            }, "No MRNs to display.", -1)
          ]))) : (N(!0), P(Oe, { key: 1 }, Qe(s.items, (r) => (N(), ot(UI, {
            key: r.id,
            item: r,
            selected: s.selectedMrns.includes(r.id)
          }, null, 8, ["item", "selected"]))), 128))
        ])
      ]))
    ]));
  }
}), YI = { class: "mb-3" }, GI = { class: "d-flex gap-2 justify-content-end" }, QI = ["onClick"], JI = ["onClick", "disabled"], ZI = /* @__PURE__ */ ke({
  __name: "AddMrnModal",
  setup(e, { expose: t }) {
    const n = ee(null), s = ee(""), o = async () => (s.value = "", await n.value?.show() ? s.value : null), r = (a) => {
      s.value.trim() && a(!0);
    }, i = () => {
      s.value.trim() && n.value?.hide(!0);
    };
    return t({ show: o }), (a, l) => {
      const f = gt("b-modal");
      return N(), ot(f, {
        ref_key: "addMrnModal",
        ref: n
      }, {
        title: xe(() => l[1] || (l[1] = [
          ae("Add MRN")
        ])),
        footer: xe(({ hide: c }) => [
          u("div", GI, [
            u("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => c(!1)
            }, l[3] || (l[3] = [
              u("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              ae("Cancel ")
            ]), 8, QI),
            u("button", {
              type: "button",
              class: "btn btn-sm btn-primary",
              onClick: (d) => r(c),
              disabled: !s.value.trim()
            }, l[4] || (l[4] = [
              u("i", { class: "fas fa-plus fa-fw me-1" }, null, -1),
              ae("Add ")
            ]), 8, JI)
          ])
        ]),
        default: xe(() => [
          u("div", YI, [
            l[2] || (l[2] = u("label", {
              for: "mrn-input",
              class: "form-label"
            }, "MRN", -1)),
            ct(u("input", {
              type: "text",
              class: "form-control",
              id: "mrn-input",
              "onUpdate:modelValue": l[0] || (l[0] = (c) => s.value = c),
              onKeyup: Cb(i, ["enter"]),
              placeholder: "Enter MRN"
            }, null, 544), [
              [Cr, s.value]
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), eP = { class: "mb-3" }, tP = ["placeholder"], nP = { class: "mb-3" }, sP = {
  key: 0,
  class: "text-center text-muted py-3"
}, oP = {
  key: 1,
  class: "resource-type-list"
}, rP = ["value", "id", "disabled"], iP = ["for"], aP = { class: "mb-3" }, lP = { class: "form-check" }, cP = { class: "form-check" }, uP = { class: "d-flex align-items-center mb-2" }, dP = { key: 0 }, fP = { class: "mb-2" }, pP = { class: "small text-muted" }, hP = { key: 1 }, mP = { class: "small text-muted" }, gP = { key: 0 }, vP = { key: 1 }, _P = { class: "d-flex gap-2 justify-content-end" }, EP = ["onClick"], yP = ["onClick", "disabled"], bP = /* @__PURE__ */ ke({
  __name: "ArchiveOptionsModal",
  props: {
    selectedMrns: { default: () => [] },
    archiveType: {},
    estimatedResources: { default: 0 }
  },
  emits: ["create"],
  setup(e, { expose: t, emit: n }) {
    const s = e, o = Gs(), r = n, i = ee(null), a = ee({
      archive_name: "",
      resource_types: [],
      background_mode: !1
    }), l = re(() => {
      const g = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
      return (s.archiveType === "selected" ? o.mrns.filter((b) => s.selectedMrns.includes(b.mrn)) : o.mrns).forEach((b) => {
        b.status_summary ? Object.entries(b.status_summary.resource_type_statuses).forEach(([y, A]) => {
          g.add(y), A.is_archivable && v.add(y);
        }) : b.resources.forEach((y) => {
          y.status !== "Deleted" && (g.add(y.name), y.status === "Completed" && v.add(y.name));
        });
      }), Array.from(g).sort().map((b) => ({
        name: b,
        isAvailable: v.has(b)
      }));
    }), f = re(() => {
      const g = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_");
      return `fhir_archive_${s.archiveType === "selected" ? "selected" : "all"}_${g}`;
    }), c = re(() => {
      const g = a.value.resource_types || [], v = s.archiveType === "selected" ? o.mrns.filter((b) => s.selectedMrns.includes(b.mrn)) : o.mrns;
      let E = 0;
      return v.forEach((b) => {
        b.status_summary ? Object.entries(b.status_summary.resource_type_statuses).forEach(([y, A]) => {
          g.length === 0 ? A.is_archivable && (E += A.completed_count) : g.includes(y) && A.is_archivable && (E += A.completed_count);
        }) : b.resources.forEach((y) => {
          y.status === "Completed" && (g.length === 0 || g.includes(y.name)) && (E += 1);
        });
      }), E;
    }), d = re(() => {
      const g = l.value.filter((E) => E.isAvailable), v = l.value.length;
      return {
        availableTypes: g.length,
        totalTypes: v
      };
    }), h = re(() => !(a.value.archive_name && !/^[a-zA-Z0-9_-]+$/.test(a.value.archive_name.trim()) || s.archiveType === "selected" && s.selectedMrns.length === 0)), p = async () => (a.value = {
      archive_name: "",
      resource_types: [],
      background_mode: !1
      // Will be calculated dynamically
    }, a.value.background_mode = c.value > 50, await i.value?.show()), m = (g) => {
      if (!h.value) return;
      const v = { ...a.value };
      v.archive_name && (v.archive_name = v.archive_name.trim()), v.resource_types && v.resource_types.length === 0 && delete v.resource_types, r("create", v, s.archiveType, s.selectedMrns), g(!0);
    };
    return t({ show: p }), (g, v) => {
      const E = gt("b-modal");
      return N(), ot(E, {
        ref_key: "archiveOptionsModal",
        ref: i
      }, {
        title: xe(() => v[4] || (v[4] = [
          ae("Archive Options")
        ])),
        footer: xe(({ hide: b }) => [
          u("div", _P, [
            u("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (y) => b(!1)
            }, v[16] || (v[16] = [
              u("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              ae("Cancel ")
            ]), 8, EP),
            u("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (y) => m(b),
              disabled: !h.value
            }, v[17] || (v[17] = [
              u("i", { class: "fas fa-archive fa-fw me-1" }, null, -1),
              ae("Create Archive ")
            ]), 8, yP)
          ])
        ]),
        default: xe(() => [
          u("div", null, [
            u("div", eP, [
              v[5] || (v[5] = u("label", {
                for: "archive-name",
                class: "form-label"
              }, "Archive Name", -1)),
              ct(u("input", {
                type: "text",
                class: "form-control",
                id: "archive-name",
                "onUpdate:modelValue": v[0] || (v[0] = (b) => a.value.archive_name = b),
                placeholder: f.value,
                maxlength: "100"
              }, null, 8, tP), [
                [Cr, a.value.archive_name]
              ]),
              v[6] || (v[6] = u("div", { class: "form-text" }, "Optional custom name for the archive file (without extension)", -1))
            ]),
            u("div", nP, [
              v[8] || (v[8] = u("label", { class: "form-label" }, "Resource Types", -1)),
              v[9] || (v[9] = u("div", { class: "form-text mb-2" }, "Select which resource types to include", -1)),
              l.value.length === 0 ? (N(), P("div", sP, v[7] || (v[7] = [
                u("i", { class: "fas fa-info-circle me-2" }, null, -1),
                ae(" No resource types found ")
              ]))) : (N(), P("div", oP, [
                (N(!0), P(Oe, null, Qe(l.value, (b) => (N(), P("div", {
                  class: "form-check",
                  key: b.name
                }, [
                  ct(u("input", {
                    class: "form-check-input",
                    type: "checkbox",
                    value: b.name,
                    "onUpdate:modelValue": v[1] || (v[1] = (y) => a.value.resource_types = y),
                    id: `resource-${b.name}`,
                    disabled: !b.isAvailable
                  }, null, 8, rP), [
                    [wb, a.value.resource_types]
                  ]),
                  u("label", {
                    class: "form-check-label",
                    for: `resource-${b.name}`
                  }, z(b.name), 9, iP)
                ]))), 128))
              ]))
            ]),
            u("div", aP, [
              v[12] || (v[12] = u("label", { class: "form-label" }, "Processing Mode", -1)),
              u("div", lP, [
                ct(u("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "immediate-mode",
                  value: !1,
                  "onUpdate:modelValue": v[2] || (v[2] = (b) => a.value.background_mode = b)
                }, null, 512), [
                  [zi, a.value.background_mode]
                ]),
                v[10] || (v[10] = u("label", {
                  class: "form-check-label",
                  for: "immediate-mode"
                }, [
                  u("strong", null, "Immediate Processing"),
                  u("div", { class: "small text-muted" }, "Process archive immediately (recommended for small selections)")
                ], -1))
              ]),
              u("div", cP, [
                ct(u("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "background-mode",
                  value: !0,
                  "onUpdate:modelValue": v[3] || (v[3] = (b) => a.value.background_mode = b)
                }, null, 512), [
                  [zi, a.value.background_mode]
                ]),
                v[11] || (v[11] = u("label", {
                  class: "form-check-label",
                  for: "background-mode"
                }, [
                  u("strong", null, "Background Processing"),
                  u("div", { class: "small text-muted" }, "Process archive in background (recommended for large collections)")
                ], -1))
              ])
            ]),
            u("div", {
              class: me(["alert", c.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              u("div", uP, [
                u("i", {
                  class: me([c.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                v[13] || (v[13] = u("strong", null, "Archive Summary", -1))
              ]),
              c.value > 0 ? (N(), P("div", dP, [
                u("div", fP, [
                  u("strong", null, z(c.value), 1),
                  v[14] || (v[14] = ae(" completed resources will be included "))
                ]),
                u("div", pP, z(d.value.availableTypes) + " of " + z(d.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (N(), P("div", hP, [
                v[15] || (v[15] = u("div", { class: "mb-1" }, [
                  u("strong", null, "No resources available for archiving")
                ], -1)),
                u("div", mP, [
                  d.value.totalTypes === 0 ? (N(), P("span", gP, " No resource types found ")) : (N(), P("span", vP, z(d.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), wP = { key: 0 }, AP = { key: 1 }, OP = { class: "row" }, SP = { class: "col-md-6" }, CP = { class: "card" }, TP = { class: "card-body" }, NP = { class: "list-unstyled mb-0" }, DP = { key: 0 }, xP = { class: "col-md-6" }, kP = { class: "card" }, RP = { class: "card-body" }, IP = { key: 0 }, PP = { key: 1 }, VP = { key: 2 }, LP = { class: "alert alert-danger" }, MP = { class: "d-flex gap-2 justify-content-end" }, FP = ["onClick"], BP = ["onClick"], jP = ["onClick"], UP = /* @__PURE__ */ ke({
  __name: "ArchiveCreationModal",
  setup(e, { expose: t }) {
    const n = ee(null), s = ee(null), o = (a) => {
      s.value = a, n.value?.show();
    }, r = () => {
      if (s.value?.download_url) {
        const a = document.createElement("a");
        a.href = s.value.download_url, a.download = `archive_${s.value.archive_id}.zip`, document.body.appendChild(a), a.click(), document.body.removeChild(a);
      }
    }, i = (a) => {
      if (a === 0) return "0 Bytes";
      const l = 1024, f = ["Bytes", "KB", "MB", "GB"], c = Math.floor(Math.log(a) / Math.log(l));
      return parseFloat((a / Math.pow(l, c)).toFixed(2)) + " " + f[c];
    };
    return t({ show: o }), (a, l) => {
      const f = gt("b-modal");
      return N(), ot(f, {
        ref_key: "archiveCreationModal",
        ref: n,
        size: "lg",
        "hide-footer": ""
      }, {
        title: xe(() => l[0] || (l[0] = [
          ae("Archive Creation")
        ])),
        footer: xe(({ hide: c }) => [
          u("div", MP, [
            s.value ? s.value.success ? (N(), P(Oe, { key: 1 }, [
              s.value.processing_mode === "immediate" && s.value.download_url ? (N(), P("button", {
                key: 0,
                type: "button",
                class: "btn btn-sm btn-primary",
                onClick: r
              }, l[14] || (l[14] = [
                u("i", { class: "fas fa-download fa-fw me-1" }, null, -1),
                ae("Download Now ")
              ]))) : Be("", !0),
              u("button", {
                type: "button",
                class: "btn btn-sm btn-secondary",
                onClick: (d) => c(!0)
              }, l[15] || (l[15] = [
                u("i", { class: "fas fa-check fa-fw me-1" }, null, -1),
                ae("Done ")
              ]), 8, BP)
            ], 64)) : (N(), P("button", {
              key: 2,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => c(!1)
            }, l[16] || (l[16] = [
              u("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              ae("Close ")
            ]), 8, jP)) : (N(), P("button", {
              key: 0,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => c(!1)
            }, l[13] || (l[13] = [
              u("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              ae("Cancel ")
            ]), 8, FP))
          ])
        ]),
        default: xe(() => [
          s.value ? s.value.success ? (N(), P("div", AP, [
            l[10] || (l[10] = u("div", { class: "text-center mb-4" }, [
              u("i", {
                class: "fas fa-check-circle text-success",
                style: { "font-size": "3rem" }
              }),
              u("h6", { class: "mt-3 mb-0" }, "Archive Created Successfully")
            ], -1)),
            u("div", OP, [
              u("div", SP, [
                u("div", CP, [
                  u("div", TP, [
                    l[6] || (l[6] = u("h6", { class: "card-title" }, "Archive Details", -1)),
                    u("ul", NP, [
                      u("li", null, [
                        l[2] || (l[2] = u("strong", null, "Archive ID:", -1)),
                        ae(" " + z(s.value.archive_id), 1)
                      ]),
                      u("li", null, [
                        l[3] || (l[3] = u("strong", null, "Resources:", -1)),
                        ae(" " + z(s.value.total_resources), 1)
                      ]),
                      s.value.file_size ? (N(), P("li", DP, [
                        l[4] || (l[4] = u("strong", null, "Size:", -1)),
                        ae(" " + z(i(s.value.file_size)), 1)
                      ])) : Be("", !0),
                      u("li", null, [
                        l[5] || (l[5] = u("strong", null, "Mode:", -1)),
                        ae(" " + z(s.value.processing_mode), 1)
                      ])
                    ])
                  ])
                ])
              ]),
              u("div", xP, [
                u("div", kP, [
                  u("div", RP, [
                    l[9] || (l[9] = u("h6", { class: "card-title" }, "Status", -1)),
                    s.value.processing_mode === "immediate" ? (N(), P("div", IP, l[7] || (l[7] = [
                      u("span", { class: "badge bg-success" }, [
                        u("i", { class: "fas fa-check me-1" }),
                        ae("Ready for Download ")
                      ], -1),
                      u("p", { class: "mt-2 mb-0 small text-muted" }, "Archive is ready for immediate download.", -1)
                    ]))) : (N(), P("div", PP, l[8] || (l[8] = [
                      u("span", { class: "badge bg-info" }, [
                        u("i", { class: "fas fa-clock me-1" }),
                        ae("Processing in Background ")
                      ], -1),
                      u("p", { class: "mt-2 mb-0 small text-muted" }, "Archive is being processed. You'll be able to download it when complete.", -1)
                    ])))
                  ])
                ])
              ])
            ])
          ])) : (N(), P("div", VP, [
            l[12] || (l[12] = u("div", { class: "text-center mb-4" }, [
              u("i", {
                class: "fas fa-exclamation-triangle text-danger",
                style: { "font-size": "3rem" }
              }),
              u("h6", { class: "mt-3 mb-0" }, "Archive Creation Failed")
            ], -1)),
            u("div", LP, [
              l[11] || (l[11] = u("strong", null, "Error:", -1)),
              ae(" " + z(s.value.message), 1)
            ])
          ])) : (N(), P("div", wP, l[1] || (l[1] = [
            u("div", { class: "text-center" }, [
              u("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                u("span", { class: "visually-hidden" }, "Creating archive...")
              ]),
              u("p", { class: "mt-3 mb-0" }, "Creating archive, please wait...")
            ], -1)
          ])))
        ]),
        _: 1
      }, 512);
    };
  }
}), HP = { class: "card" }, WP = { class: "card-header d-flex justify-content-between align-items-center" }, $P = ["disabled"], KP = { class: "card-body" }, zP = {
  key: 0,
  class: "text-center"
}, qP = {
  key: 1,
  class: "row g-3"
}, XP = { class: "col-md-6" }, YP = { class: "border rounded p-3 h-100" }, GP = { class: "row g-2" }, QP = { class: "col-6" }, JP = { class: "text-center" }, ZP = { class: "h4 mb-1 text-primary" }, eV = { class: "col-6" }, tV = { class: "text-center" }, nV = { class: "h4 mb-1 text-info" }, sV = { class: "col-md-6" }, oV = { class: "border rounded p-3 h-100" }, rV = { class: "row g-2" }, iV = {
  key: 0,
  class: "text-center"
}, aV = { class: "text-muted" }, lV = { class: "col-12" }, cV = { class: "border rounded p-3" }, uV = { class: "row g-3" }, dV = { class: "col-md-4" }, fV = { class: "d-flex align-items-center" }, pV = { class: "fw-bold" }, hV = { class: "col-md-4" }, mV = { class: "d-flex align-items-center" }, gV = { class: "fw-bold" }, vV = { class: "col-md-4" }, _V = { class: "d-flex align-items-center" }, EV = { class: "fw-bold" }, yV = { class: "col-12" }, bV = { class: "border rounded p-3" }, wV = { class: "mb-2" }, AV = { class: "d-flex justify-content-between align-items-center mb-1" }, OV = { class: "text-muted" }, SV = {
  class: "progress",
  style: { height: "8px" }
}, CV = ["aria-valuenow"], TV = {
  key: 0,
  class: "mb-2"
}, NV = { class: "d-flex justify-content-between align-items-center mb-1" }, DV = { class: "text-muted" }, xV = {
  class: "progress",
  style: { height: "6px" }
}, kV = ["aria-valuenow"], RV = {
  key: 2,
  class: "text-center text-muted"
}, IV = /* @__PURE__ */ ke({
  __name: "ProjectSummaryWidget",
  setup(e) {
    const t = Gs(), n = ee(!1), s = re(() => t.projectSummary), o = re(() => s.value ? Object.values(s.value.overall_status_counts).reduce((d, h) => d + h, 0) : 0), r = re(() => {
      if (!s.value || o.value === 0) return 0;
      const d = s.value.overall_status_counts.completed || 0;
      return Math.round(d / o.value * 100);
    }), i = re(() => {
      if (!s.value || o.value === 0) return 0;
      const d = s.value.overall_status_counts.failed || 0;
      return Math.round(d / o.value * 100);
    }), a = re(() => {
      if (!s.value) return "Unknown";
      const d = s.value.sync_status.pending_tasks, h = s.value.sync_status.failed_tasks;
      return h > 5 ? "Poor" : d > 10 ? "Busy" : h > 0 || d > 0 ? "Active" : "Healthy";
    }), l = (d) => {
      switch (d.toLowerCase()) {
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
    }, f = (d) => d.charAt(0).toUpperCase() + d.slice(1), c = async () => {
      try {
        n.value = !0, await t.getProjectSummary();
      } catch (d) {
        console.error("Failed to refresh project summary:", d);
      } finally {
        n.value = !1;
      }
    };
    return cn(() => {
      c();
    }), (d, h) => (N(), P("div", HP, [
      u("div", WP, [
        h[0] || (h[0] = u("h6", { class: "mb-0" }, [
          u("i", { class: "fas fa-chart-bar fa-fw" }),
          ae(" Project Summary ")
        ], -1)),
        u("button", {
          class: "btn btn-sm btn-outline-secondary",
          onClick: c,
          disabled: n.value,
          title: "Refresh summary"
        }, [
          u("i", {
            class: me(["fas fa-rotate-right fa-fw", { "fa-spin": n.value }])
          }, null, 2)
        ], 8, $P)
      ]),
      u("div", KP, [
        n.value ? (N(), P("div", zP, h[1] || (h[1] = [
          u("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            u("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : s.value ? (N(), P("div", qP, [
          u("div", XP, [
            u("div", YP, [
              h[4] || (h[4] = u("h6", { class: "text-muted mb-3" }, "Overall Statistics", -1)),
              u("div", GP, [
                u("div", QP, [
                  u("div", JP, [
                    u("div", ZP, z(s.value.total_mrns), 1),
                    h[2] || (h[2] = u("small", { class: "text-muted" }, "Total MRNs", -1))
                  ])
                ]),
                u("div", eV, [
                  u("div", tV, [
                    u("div", nV, z(o.value), 1),
                    h[3] || (h[3] = u("small", { class: "text-muted" }, "Total Resources", -1))
                  ])
                ])
              ])
            ])
          ]),
          u("div", sV, [
            u("div", oV, [
              h[5] || (h[5] = u("h6", { class: "text-muted mb-3" }, "Resource Status", -1)),
              u("div", rV, [
                (N(!0), P(Oe, null, Qe(s.value.overall_status_counts, (p, m) => (N(), P("div", {
                  key: m,
                  class: "col-6"
                }, [
                  p > 0 ? (N(), P("div", iV, [
                    u("div", {
                      class: me(["h5 mb-1", l(m)])
                    }, z(p), 3),
                    u("small", aV, z(f(m)), 1)
                  ])) : Be("", !0)
                ]))), 128))
              ])
            ])
          ]),
          u("div", lV, [
            u("div", cV, [
              h[12] || (h[12] = u("h6", { class: "text-muted mb-3" }, [
                u("i", { class: "fas fa-clock-rotate-left fa-fw" }),
                ae(" Background Queue Status ")
              ], -1)),
              u("div", uV, [
                u("div", dV, [
                  u("div", fV, [
                    h[7] || (h[7] = u("i", { class: "fas fa-hourglass-half fa-fw text-warning me-2" }, null, -1)),
                    u("div", null, [
                      u("div", pV, z(s.value.sync_status.pending_tasks), 1),
                      h[6] || (h[6] = u("small", { class: "text-muted" }, "Pending Tasks", -1))
                    ])
                  ])
                ]),
                u("div", hV, [
                  u("div", mV, [
                    h[9] || (h[9] = u("i", { class: "fas fa-exclamation-triangle fa-fw text-danger me-2" }, null, -1)),
                    u("div", null, [
                      u("div", gV, z(s.value.sync_status.failed_tasks), 1),
                      h[8] || (h[8] = u("small", { class: "text-muted" }, "Failed Tasks", -1))
                    ])
                  ])
                ]),
                u("div", vV, [
                  u("div", _V, [
                    h[11] || (h[11] = u("i", { class: "fas fa-check-circle fa-fw text-success me-2" }, null, -1)),
                    u("div", null, [
                      u("div", EV, z(a.value), 1),
                      h[10] || (h[10] = u("small", { class: "text-muted" }, "Queue Health", -1))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          u("div", yV, [
            u("div", bV, [
              h[15] || (h[15] = u("h6", { class: "text-muted mb-3" }, "Completion Progress", -1)),
              u("div", wV, [
                u("div", AV, [
                  h[13] || (h[13] = u("small", { class: "text-muted" }, "Overall Completion", -1)),
                  u("small", OV, z(r.value) + "%", 1)
                ]),
                u("div", SV, [
                  u("div", {
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: os({ width: r.value + "%" }),
                    "aria-valuenow": r.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, CV)
                ])
              ]),
              i.value > 0 ? (N(), P("div", TV, [
                u("div", NV, [
                  h[14] || (h[14] = u("small", { class: "text-muted" }, "Error Rate", -1)),
                  u("small", DV, z(i.value) + "%", 1)
                ]),
                u("div", xV, [
                  u("div", {
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: os({ width: i.value + "%" }),
                    "aria-valuenow": i.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, kV)
                ])
              ])) : Be("", !0)
            ])
          ])
        ])) : (N(), P("div", RV, h[16] || (h[16] = [
          u("i", { class: "fas fa-info-circle fa-fw" }, null, -1),
          ae(" No summary data available ")
        ])))
      ])
    ]));
  }
}), PV = /* @__PURE__ */ Fo(IV, [["__scopeId", "data-v-b2ae2968"]]), m_ = /* @__PURE__ */ $r("archive", () => {
  const e = Na(), t = ee(!1), n = ee([]), s = ee(!1), o = ee({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: !1,
    hasPrevious: !1,
    perPageOptions: [10, 25, 50, 100]
  }), r = ee({
    status: "",
    searchQuery: "",
    processingMode: ""
  }), i = re(() => {
    let A = n.value;
    if (r.value.status && (A = A.filter((O) => O.status === r.value.status)), r.value.processingMode && (A = A.filter((O) => O.processing_mode === r.value.processingMode)), r.value.searchQuery) {
      const O = r.value.searchQuery.toLowerCase();
      A = A.filter(
        (T) => T.file_name.toLowerCase().includes(O) || T.archive_id.toLowerCase().includes(O)
      );
    }
    return A;
  }), a = re(() => {
    const A = (o.value.page - 1) * o.value.limit, O = A + o.value.limit, T = i.value;
    return o.value.total = T.length, o.value.totalPages = Math.ceil(T.length / o.value.limit), o.value.hasNext = o.value.page < o.value.totalPages, o.value.hasPrevious = o.value.page > 1, T.slice(A, O);
  }), l = re(
    () => n.value.filter(
      (A) => A.status === "pending" || A.status === "processing"
    )
  ), f = re(
    () => n.value.filter((A) => A.status === "completed")
  ), c = async () => {
    try {
      t.value = !0;
      const A = await yt.listArchives();
      A.data.success ? (n.value = A.data.archives || [], o.value.total = A.data.total_count || 0) : e.addError({
        message: A.data.message || "Failed to fetch archives",
        source: "ArchiveStore.fetchArchives",
        timestamp: /* @__PURE__ */ new Date()
      });
    } catch (A) {
      e.addError({
        message: `Failed to fetch archives: ${A}`,
        source: "ArchiveStore.fetchArchives",
        timestamp: /* @__PURE__ */ new Date()
      });
    } finally {
      t.value = !1;
    }
  };
  return {
    // State
    loading: t,
    archives: n,
    operationLoading: s,
    pagination: o,
    filters: r,
    // Computed
    filteredArchives: i,
    paginatedArchives: a,
    pendingArchives: l,
    completedArchives: f,
    // Actions
    fetchArchives: c,
    createArchiveSelected: async (A, O = {}) => {
      try {
        s.value = !0;
        const T = await yt.createArchiveSelected(A, O);
        return T.data.success ? (await c(), T.data) : (e.addError({
          message: T.data.message || "Failed to create archive for selected MRNs",
          source: "ArchiveStore.createArchiveSelected",
          timestamp: /* @__PURE__ */ new Date()
        }), T.data);
      } catch (T) {
        return e.addError({
          message: `Failed to create archive for selected MRNs: ${T}`,
          source: "ArchiveStore.createArchiveSelected",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        s.value = !1;
      }
    },
    createArchiveAll: async (A = {}) => {
      try {
        s.value = !0;
        const O = await yt.createArchiveAll(A);
        return O.data.success ? (await c(), O.data) : (e.addError({
          message: O.data.message || "Failed to create archive for all resources",
          source: "ArchiveStore.createArchiveAll",
          timestamp: /* @__PURE__ */ new Date()
        }), O.data);
      } catch (O) {
        return e.addError({
          message: `Failed to create archive for all resources: ${O}`,
          source: "ArchiveStore.createArchiveAll",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        s.value = !1;
      }
    },
    downloadArchive: async (A) => {
      try {
        const O = await yt.downloadArchive(A), T = new Blob([O.data], { type: "application/zip" }), x = window.URL.createObjectURL(T), j = document.createElement("a"), F = n.value.find((B) => B.archive_id === A)?.file_name || `archive_${A}.zip`;
        j.href = x, j.download = F, document.body.appendChild(j), j.click(), document.body.removeChild(j), window.URL.revokeObjectURL(x);
      } catch (O) {
        e.addError({
          message: `Failed to download archive: ${O}`,
          source: "ArchiveStore.downloadArchive",
          timestamp: /* @__PURE__ */ new Date()
        });
      }
    },
    deleteArchive: async (A) => {
      try {
        s.value = !0;
        const O = await yt.deleteArchive(A);
        if (O.data.success) {
          const T = n.value.findIndex((x) => x.archive_id === A);
          return T !== -1 && n.value.splice(T, 1), O.data;
        } else
          return e.addError({
            message: O.data.message || "Failed to delete archive",
            source: "ArchiveStore.deleteArchive",
            timestamp: /* @__PURE__ */ new Date()
          }), O.data;
      } catch (O) {
        return e.addError({
          message: `Failed to delete archive: ${O}`,
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        s.value = !1;
      }
    },
    refreshArchiveStatus: async (A) => {
      await c();
    },
    setPage: (A) => {
      A >= 1 && A <= o.value.totalPages && (o.value.page = A);
    },
    setLimit: (A) => {
      o.value.limit = A, o.value.page = 1;
    },
    setFilter: (A, O) => {
      r.value[A] = O, o.value.page = 1;
    },
    clearFilters: () => {
      r.value.status = "", r.value.searchQuery = "", r.value.processingMode = "", o.value.page = 1;
    }
  };
}), VV = { class: "p-3" }, LV = {
  key: 0,
  class: "mb-4"
}, MV = {
  key: 1,
  class: "d-flex justify-content-between align-items-center mt-3"
}, FV = { class: "text-muted" }, BV = { class: "d-flex gap-2" }, jV = {
  key: 2,
  class: "toast-container position-fixed bottom-0 end-0 p-3"
}, UV = { class: "d-flex" }, HV = { class: "toast-body text-white" }, WV = /* @__PURE__ */ ke({
  __name: "MonitorPage",
  setup(e) {
    const t = Gs(), n = _u(), s = m_(), o = ee(null), r = ee(null), i = ee(null);
    Wt(() => n.archiveModalVisible, async (m) => {
      m && (await r.value?.show(), n.hideArchiveModal());
    });
    const a = re({
      get: () => t.pagination.page,
      set: (m) => t.setPage(m)
    }), l = re({
      get: () => t.pagination.limit,
      set: (m) => t.setLimit(m)
    }), f = re(() => t.pagination.total), c = re(() => t.pagination.perPageOptions), d = re(() => {
      const m = t.pagination.total, g = t.pagination.page, v = t.pagination.limit, E = m === 0 ? 0 : (g - 1) * v + 1, b = Math.min(g * v, m);
      return { start: E, end: b, total: m };
    }), h = async () => {
      if (o.value) {
        const m = await o.value.show();
        if (m)
          try {
            await t.addMrn(m), n.recordOperation("add-mrn", !0, "MRN added successfully");
          } catch {
            n.recordOperation("add-mrn", !1, "Failed to add MRN");
          }
      }
    }, p = async (m, g, v) => {
      try {
        let E;
        g === "selected" && v ? E = await s.createArchiveSelected(v, m) : E = await s.createArchiveAll(m), E && (i.value?.show(E), n.recordOperation(
          "archive-create",
          E.success,
          E.message
        ));
      } catch (E) {
        console.error("Failed to create archive:", E), n.recordOperation("archive-create", !1, "Failed to create archive");
      }
    };
    return cn(async () => {
      try {
        await Promise.all([
          t.fetchMrns(),
          t.getProjectSummary()
        ]);
      } catch (m) {
        console.error("Failed to load initial data:", m), n.recordOperation("initial-load", !1, "Failed to load initial data");
      }
    }), (m, g) => {
      const v = gt("b-pagination"), E = gt("b-pagination-dropdown");
      return N(), P("div", VV, [
        ge(Y2, { onAddMrn: h }),
        ie(n).showSummary ? (N(), P("div", LV, [
          ge(PV)
        ])) : Be("", !0),
        ge(XI, {
          items: ie(t).mrns,
          loading: ie(t).loading,
          "selected-mrns": ie(t).selectedMrns,
          "all-selected": ie(t).allSelected,
          indeterminate: ie(t).indeterminate,
          onToggleSelectAll: ie(t).toggleSelectAll
        }, null, 8, ["items", "loading", "selected-mrns", "all-selected", "indeterminate", "onToggleSelectAll"]),
        ie(t).pagination.total > 0 ? (N(), P("div", MV, [
          u("small", FV, " Showing " + z(d.value.start) + "-" + z(d.value.end) + " of " + z(d.value.total) + " MRNs ", 1),
          u("div", BV, [
            ge(v, {
              size: "sm",
              perPage: l.value,
              totalItems: f.value,
              modelValue: a.value,
              "onUpdate:modelValue": g[0] || (g[0] = (b) => a.value = b)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            ge(E, {
              options: c.value,
              modelValue: l.value,
              "onUpdate:modelValue": g[1] || (g[1] = (b) => l.value = b)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : Be("", !0),
        ge(ZI, {
          ref_key: "addMrnModal",
          ref: o
        }, null, 512),
        (N(), ot(Vo, { to: "body" }, [
          ge(bP, {
            ref_key: "archiveOptionsModal",
            ref: r,
            "selected-mrns": ie(n).archiveModalSelectedMrns,
            "archive-type": ie(n).archiveModalType,
            onCreate: p
          }, null, 8, ["selected-mrns", "archive-type"]),
          ge(UP, {
            ref_key: "archiveCreationModal",
            ref: i
          }, null, 512)
        ])),
        ie(n).showToast && ie(n).lastOperation ? (N(), P("div", jV, [
          u("div", {
            class: me(["toast show", ie(n).lastOperation.success ? "bg-success" : "bg-danger"]),
            role: "alert"
          }, [
            u("div", UV, [
              u("div", HV, [
                u("i", {
                  class: me(ie(n).lastOperation.success ? "fas fa-check-circle fa-fw" : "fas fa-exclamation-triangle fa-fw")
                }, null, 2),
                ae(" " + z(ie(n).lastOperation.message), 1)
              ]),
              u("button", {
                type: "button",
                class: "btn-close btn-close-white me-2 m-auto",
                onClick: g[2] || (g[2] = (b) => ie(n).clearToast())
              })
            ])
          ], 2)
        ])) : Be("", !0)
      ]);
    };
  }
}), $V = { key: 0 }, KV = { class: "card" }, zV = { class: "card-body" }, qV = { class: "list-unstyled mb-0" }, XV = {
  key: 1,
  class: "text-center mt-3"
}, YV = { class: "d-flex gap-2 justify-content-end" }, GV = ["onClick", "disabled"], QV = ["onClick", "disabled"], JV = /* @__PURE__ */ ke({
  __name: "ArchiveDeleteModal",
  emits: ["deleted"],
  setup(e, { expose: t, emit: n }) {
    const s = n, o = ee(null), r = ee(null), i = ee(!1), a = async (p) => (r.value = p, i.value = !1, await o.value?.show()), l = async (p) => {
      if (!(!r.value || i.value)) {
        i.value = !0;
        try {
          s("deleted", r.value.archive_id), p(!0);
        } catch (m) {
          console.error("Delete confirmation failed:", m);
        } finally {
          i.value = !1;
        }
      }
    }, f = (p) => {
      if (!p) return "Unknown";
      try {
        return new Date(p).toLocaleString();
      } catch {
        return p;
      }
    }, c = (p) => {
      if (p === 0) return "0 Bytes";
      const m = 1024, g = ["Bytes", "KB", "MB", "GB"], v = Math.floor(Math.log(p) / Math.log(m));
      return parseFloat((p / Math.pow(m, v)).toFixed(2)) + " " + g[v];
    }, d = (p) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[p] || "badge bg-secondary", h = (p) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[p] || "fas fa-question-circle";
    return t({ show: a }), (p, m) => {
      const g = gt("b-modal");
      return N(), ot(g, {
        ref_key: "deleteModal",
        ref: o
      }, {
        title: xe(() => m[0] || (m[0] = [
          ae("Delete Archive")
        ])),
        footer: xe(({ hide: v }) => [
          u("div", YV, [
            u("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (E) => v(!1),
              disabled: i.value
            }, m[12] || (m[12] = [
              u("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              ae("Cancel ")
            ]), 8, GV),
            u("button", {
              class: "btn btn-sm btn-danger",
              type: "button",
              onClick: (E) => l(v),
              disabled: i.value
            }, [
              m[13] || (m[13] = u("i", { class: "fas fa-trash fa-fw me-1" }, null, -1)),
              ae(" " + z(i.value ? "Deleting..." : "Delete Archive"), 1)
            ], 8, QV)
          ])
        ]),
        default: xe(() => [
          r.value ? (N(), P("div", $V, [
            m[8] || (m[8] = u("div", { class: "alert alert-warning" }, [
              u("i", { class: "fas fa-exclamation-triangle me-2" }),
              u("strong", null, "Warning:"),
              ae(" This action cannot be undone. ")
            ], -1)),
            m[9] || (m[9] = u("p", null, "Are you sure you want to delete this archive?", -1)),
            u("div", KV, [
              u("div", zV, [
                m[7] || (m[7] = u("h6", { class: "card-title" }, "Archive Details", -1)),
                u("ul", qV, [
                  u("li", null, [
                    m[1] || (m[1] = u("strong", null, "Archive ID:", -1)),
                    ae(" " + z(r.value.archive_id), 1)
                  ]),
                  u("li", null, [
                    m[2] || (m[2] = u("strong", null, "File Name:", -1)),
                    ae(" " + z(r.value.file_name), 1)
                  ]),
                  u("li", null, [
                    m[3] || (m[3] = u("strong", null, "Created:", -1)),
                    ae(" " + z(f(r.value.created_at)), 1)
                  ]),
                  u("li", null, [
                    m[4] || (m[4] = u("strong", null, "Size:", -1)),
                    ae(" " + z(c(r.value.file_size)), 1)
                  ]),
                  u("li", null, [
                    m[5] || (m[5] = u("strong", null, "Resources:", -1)),
                    ae(" " + z(r.value.total_resources), 1)
                  ]),
                  u("li", null, [
                    m[6] || (m[6] = u("strong", null, "Status:", -1)),
                    u("span", {
                      class: me(d(r.value.status))
                    }, [
                      u("i", {
                        class: me([h(r.value.status), "me-1"])
                      }, null, 2),
                      ae(" " + z(r.value.status.charAt(0).toUpperCase() + r.value.status.slice(1)), 1)
                    ], 2)
                  ])
                ])
              ])
            ]),
            m[10] || (m[10] = u("div", { class: "mt-3" }, [
              u("p", { class: "mb-2" }, [
                u("strong", null, "This will:")
              ]),
              u("ul", { class: "mb-0" }, [
                u("li", null, "Remove the archive file from storage"),
                u("li", null, "Delete all archive metadata"),
                u("li", null, "Remove the archive from the archives list")
              ])
            ], -1))
          ])) : Be("", !0),
          i.value ? (N(), P("div", XV, m[11] || (m[11] = [
            u("div", {
              class: "spinner-border spinner-border-sm text-danger me-2",
              role: "status"
            }, [
              u("span", { class: "visually-hidden" }, "Deleting...")
            ], -1),
            u("span", null, "Deleting archive...", -1)
          ]))) : Be("", !0)
        ]),
        _: 1
      }, 512);
    };
  }
}), ZV = { class: "p-3" }, eL = { class: "d-flex justify-content-between align-items-center mb-4" }, tL = ["disabled"], nL = { class: "card mb-4" }, sL = { class: "card-body" }, oL = { class: "row g-3" }, rL = { class: "col-md-3" }, iL = { class: "col-md-3" }, aL = { class: "col-md-3" }, lL = { class: "col-md-3" }, cL = ["value"], uL = {
  key: 0,
  class: "row mt-3"
}, dL = { class: "row mb-4" }, fL = { class: "col-md-3" }, pL = { class: "card text-center" }, hL = { class: "card-body py-3" }, mL = { class: "card-title text-primary mb-1" }, gL = { class: "col-md-3" }, vL = { class: "card text-center" }, _L = { class: "card-body py-3" }, EL = { class: "card-title text-success mb-1" }, yL = { class: "col-md-3" }, bL = { class: "card text-center" }, wL = { class: "card-body py-3" }, AL = { class: "card-title text-warning mb-1" }, OL = { class: "col-md-3" }, SL = { class: "card text-center" }, CL = { class: "card-body py-3" }, TL = { class: "card-title text-info mb-1" }, NL = { class: "card" }, DL = { class: "card-body p-0" }, xL = {
  key: 0,
  class: "text-center py-5"
}, kL = {
  key: 1,
  class: "text-center py-5"
}, RL = { class: "mt-3 mb-2" }, IL = { class: "text-muted mb-0" }, PL = { key: 2 }, VL = { class: "table-responsive" }, LL = { class: "table table-hover mb-0" }, ML = { class: "d-flex flex-column" }, FL = { class: "fw-semibold" }, BL = { class: "text-muted" }, jL = ["title"], UL = { class: "d-flex flex-column" }, HL = {
  key: 0,
  class: "text-danger"
}, WL = { class: "text-end" }, $L = { class: "btn-group btn-group-sm" }, KL = ["onClick"], zL = ["onClick"], qL = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, XL = { class: "text-muted" }, YL = { class: "d-flex gap-2" }, GL = { "aria-label": "Archives pagination" }, QL = { class: "pagination pagination-sm mb-0" }, JL = ["disabled"], ZL = ["onClick"], eM = ["disabled"], tM = /* @__PURE__ */ ke({
  __name: "ArchivesPage",
  setup(e) {
    const t = m_(), n = ee(null), s = ee(""), o = ee(""), r = ee(""), i = ee(10);
    let a = null;
    cn(async () => {
      await h(), p();
    });
    const l = re(() => s.value || o.value || r.value), f = re(() => {
      const C = t.completedArchives.reduce((I, Y) => I + (Y.file_size || 0), 0);
      return x(C);
    }), c = re(() => {
      const C = t.filteredArchives.length, I = (t.pagination.page - 1) * t.pagination.limit + 1, Y = Math.min(I + t.pagination.limit - 1, C);
      return { start: I, end: Y, total: C };
    }), d = re(() => {
      const C = t.pagination.page, I = t.pagination.totalPages, Y = [], pe = Math.max(1, C - 2), D = Math.min(I, C + 2);
      for (let R = pe; R <= D; R++)
        Y.push(R);
      return Y;
    }), h = async () => {
      await t.fetchArchives();
    }, p = () => {
      a = setInterval(async () => {
        t.pendingArchives.length > 0 && await t.refreshArchiveStatus();
      }, 3e4);
    }, m = () => {
      t.setFilter("searchQuery", s.value);
    }, g = () => {
      t.setFilter("status", o.value);
    }, v = () => {
      t.setFilter("processingMode", r.value);
    }, E = () => {
      t.setLimit(i.value);
    }, b = () => {
      s.value = "", o.value = "", r.value = "", t.clearFilters();
    }, y = (C) => {
      t.setPage(C);
    }, A = async (C) => {
      await t.downloadArchive(C.archive_id);
    }, O = async (C) => {
      await n.value?.show(C);
    }, T = async (C) => {
      await t.deleteArchive(C);
    }, x = (C) => {
      if (C === 0) return "0 Bytes";
      const I = 1024, Y = ["Bytes", "KB", "MB", "GB"], pe = Math.floor(Math.log(C) / Math.log(I));
      return parseFloat((C / Math.pow(I, pe)).toFixed(2)) + " " + Y[pe];
    }, j = (C) => {
      if (!C) return "Unknown";
      try {
        const I = new Date(C), pe = (/* @__PURE__ */ new Date()).getTime() - I.getTime(), D = Math.floor(pe / 6e4), R = Math.floor(D / 60), H = Math.floor(R / 24);
        return D < 60 ? `${D}m ago` : R < 24 ? `${R}h ago` : H < 7 ? `${H}d ago` : I.toLocaleDateString();
      } catch {
        return C;
      }
    }, L = (C) => {
      if (!C) return "Unknown";
      try {
        return new Date(C).toLocaleString();
      } catch {
        return C;
      }
    }, F = (C) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[C] || "badge bg-secondary", B = (C) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[C] || "fas fa-question-circle";
    return Wt(() => t.filters, (C) => {
      s.value = C.searchQuery, o.value = C.status, r.value = C.processingMode;
    }, { deep: !0 }), ca(() => {
      a && clearInterval(a);
    }), (C, I) => (N(), P("div", ZV, [
      u("div", eL, [
        I[7] || (I[7] = u("div", null, [
          u("h4", { class: "mb-1" }, "Archive Management"),
          u("p", { class: "text-muted mb-0" }, "Manage and download your FHIR resource archives")
        ], -1)),
        u("div", null, [
          u("button", {
            class: "btn btn-primary btn-sm",
            onClick: h,
            disabled: ie(t).loading
          }, [
            u("i", {
              class: me(["fas fa-sync-alt fa-fw me-1", { "fa-spin": ie(t).loading }])
            }, null, 2),
            I[6] || (I[6] = ae(" Refresh "))
          ], 8, tL)
        ])
      ]),
      u("div", nL, [
        u("div", sL, [
          u("div", oL, [
            u("div", rL, [
              I[8] || (I[8] = u("label", { class: "form-label" }, "Search Archives", -1)),
              ct(u("input", {
                type: "text",
                class: "form-control form-control-sm",
                placeholder: "Search by name or ID...",
                "onUpdate:modelValue": I[0] || (I[0] = (Y) => s.value = Y),
                onInput: m
              }, null, 544), [
                [Cr, s.value]
              ])
            ]),
            u("div", iL, [
              I[10] || (I[10] = u("label", { class: "form-label" }, "Status", -1)),
              ct(u("select", {
                class: "form-select form-select-sm",
                "onUpdate:modelValue": I[1] || (I[1] = (Y) => o.value = Y),
                onChange: g
              }, I[9] || (I[9] = [
                Pl('<option value="">All Statuses</option><option value="completed">Completed</option><option value="processing">Processing</option><option value="pending">Pending</option><option value="failed">Failed</option>', 5)
              ]), 544), [
                [_o, o.value]
              ])
            ]),
            u("div", aL, [
              I[12] || (I[12] = u("label", { class: "form-label" }, "Processing Mode", -1)),
              ct(u("select", {
                class: "form-select form-select-sm",
                "onUpdate:modelValue": I[2] || (I[2] = (Y) => r.value = Y),
                onChange: v
              }, I[11] || (I[11] = [
                u("option", { value: "" }, "All Modes", -1),
                u("option", { value: "immediate" }, "Immediate", -1),
                u("option", { value: "background" }, "Background", -1)
              ]), 544), [
                [_o, r.value]
              ])
            ]),
            u("div", lL, [
              I[13] || (I[13] = u("label", { class: "form-label" }, "Per Page", -1)),
              ct(u("select", {
                class: "form-select form-select-sm",
                "onUpdate:modelValue": I[3] || (I[3] = (Y) => i.value = Y),
                onChange: E
              }, [
                (N(!0), P(Oe, null, Qe(ie(t).pagination.perPageOptions, (Y) => (N(), P("option", {
                  key: Y,
                  value: Y
                }, z(Y), 9, cL))), 128))
              ], 544), [
                [_o, i.value]
              ])
            ])
          ]),
          l.value ? (N(), P("div", uL, [
            u("div", { class: "col" }, [
              u("button", {
                class: "btn btn-outline-secondary btn-sm",
                onClick: b
              }, I[14] || (I[14] = [
                u("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                ae("Clear Filters ")
              ]))
            ])
          ])) : Be("", !0)
        ])
      ]),
      u("div", dL, [
        u("div", fL, [
          u("div", pL, [
            u("div", hL, [
              u("h5", mL, z(ie(t).archives.length), 1),
              I[15] || (I[15] = u("p", { class: "card-text small text-muted mb-0" }, "Total Archives", -1))
            ])
          ])
        ]),
        u("div", gL, [
          u("div", vL, [
            u("div", _L, [
              u("h5", EL, z(ie(t).completedArchives.length), 1),
              I[16] || (I[16] = u("p", { class: "card-text small text-muted mb-0" }, "Completed", -1))
            ])
          ])
        ]),
        u("div", yL, [
          u("div", bL, [
            u("div", wL, [
              u("h5", AL, z(ie(t).pendingArchives.length), 1),
              I[17] || (I[17] = u("p", { class: "card-text small text-muted mb-0" }, "In Progress", -1))
            ])
          ])
        ]),
        u("div", OL, [
          u("div", SL, [
            u("div", CL, [
              u("h5", TL, z(f.value), 1),
              I[18] || (I[18] = u("p", { class: "card-text small text-muted mb-0" }, "Total Size", -1))
            ])
          ])
        ])
      ]),
      u("div", NL, [
        u("div", DL, [
          ie(t).loading ? (N(), P("div", xL, I[19] || (I[19] = [
            u("div", {
              class: "spinner-border text-primary",
              role: "status"
            }, [
              u("span", { class: "visually-hidden" }, "Loading archives...")
            ], -1),
            u("p", { class: "mt-2 mb-0 text-muted" }, "Loading archives...", -1)
          ]))) : ie(t).paginatedArchives.length === 0 ? (N(), P("div", kL, [
            I[20] || (I[20] = u("i", {
              class: "fas fa-archive text-muted",
              style: { "font-size": "3rem" }
            }, null, -1)),
            u("h6", RL, z(l.value ? "No archives match your filters" : "No archives found"), 1),
            u("p", IL, z(l.value ? "Try adjusting your search criteria." : "Archives will appear here when created."), 1)
          ])) : (N(), P("div", PL, [
            u("div", VL, [
              u("table", LL, [
                I[23] || (I[23] = u("thead", { class: "table-light" }, [
                  u("tr", null, [
                    u("th", { scope: "col" }, "Archive"),
                    u("th", { scope: "col" }, "Status"),
                    u("th", { scope: "col" }, "Created"),
                    u("th", { scope: "col" }, "Size"),
                    u("th", { scope: "col" }, "Resources"),
                    u("th", { scope: "col" }, "Mode"),
                    u("th", {
                      scope: "col",
                      class: "text-end"
                    }, "Actions")
                  ])
                ], -1)),
                u("tbody", null, [
                  (N(!0), P(Oe, null, Qe(ie(t).paginatedArchives, (Y) => (N(), P("tr", {
                    key: Y.archive_id
                  }, [
                    u("td", null, [
                      u("div", ML, [
                        u("span", FL, z(Y.file_name), 1),
                        u("small", BL, z(Y.archive_id), 1)
                      ])
                    ]),
                    u("td", null, [
                      u("span", {
                        class: me(F(Y.status))
                      }, [
                        u("i", {
                          class: me([B(Y.status), "me-1"])
                        }, null, 2),
                        ae(" " + z(Y.status.charAt(0).toUpperCase() + Y.status.slice(1)), 1)
                      ], 2)
                    ]),
                    u("td", null, [
                      u("span", {
                        title: L(Y.created_at)
                      }, z(j(Y.created_at)), 9, jL)
                    ]),
                    u("td", null, z(x(Y.file_size)), 1),
                    u("td", null, [
                      u("div", UL, [
                        u("span", null, z(Y.total_resources), 1),
                        Y.failed_files > 0 ? (N(), P("small", HL, z(Y.failed_files) + " failed ", 1)) : Be("", !0)
                      ])
                    ]),
                    u("td", null, [
                      u("span", {
                        class: me(["badge", Y.processing_mode === "immediate" ? "bg-info" : "bg-secondary"])
                      }, z(Y.processing_mode), 3)
                    ]),
                    u("td", WL, [
                      u("div", $L, [
                        Y.status === "completed" && Y.download_url ? (N(), P("button", {
                          key: 0,
                          class: "btn btn-outline-primary",
                          onClick: (pe) => A(Y),
                          title: "Download Archive"
                        }, I[21] || (I[21] = [
                          u("i", { class: "fas fa-download" }, null, -1)
                        ]), 8, KL)) : Be("", !0),
                        u("button", {
                          class: "btn btn-outline-danger",
                          onClick: (pe) => O(Y),
                          title: "Delete Archive"
                        }, I[22] || (I[22] = [
                          u("i", { class: "fas fa-trash" }, null, -1)
                        ]), 8, zL)
                      ])
                    ])
                  ]))), 128))
                ])
              ])
            ])
          ]))
        ])
      ]),
      ie(t).filteredArchives.length > 0 ? (N(), P("div", qL, [
        u("small", XL, " Showing " + z(c.value.start) + "-" + z(c.value.end) + " of " + z(c.value.total) + " archives ", 1),
        u("div", YL, [
          u("nav", GL, [
            u("ul", QL, [
              u("li", {
                class: me(["page-item", { disabled: !ie(t).pagination.hasPrevious }])
              }, [
                u("button", {
                  class: "page-link",
                  onClick: I[4] || (I[4] = (Y) => y(ie(t).pagination.page - 1)),
                  disabled: !ie(t).pagination.hasPrevious
                }, " Previous ", 8, JL)
              ], 2),
              (N(!0), P(Oe, null, Qe(d.value, (Y) => (N(), P("li", {
                key: Y,
                class: me(["page-item", { active: Y === ie(t).pagination.page }])
              }, [
                u("button", {
                  class: "page-link",
                  onClick: (pe) => y(Y)
                }, z(Y), 9, ZL)
              ], 2))), 128)),
              u("li", {
                class: me(["page-item", { disabled: !ie(t).pagination.hasNext }])
              }, [
                u("button", {
                  class: "page-link",
                  onClick: I[5] || (I[5] = (Y) => y(ie(t).pagination.page + 1)),
                  disabled: !ie(t).pagination.hasNext
                }, " Next ", 8, eM)
              ], 2)
            ])
          ])
        ])
      ])) : Be("", !0),
      (N(), ot(Vo, { to: "body" }, [
        ge(JV, {
          ref_key: "deleteModal",
          ref: n,
          onDeleted: T
        }, null, 512)
      ]))
    ]));
  }
}), nM = {}, sM = { class: "error-wrapper" }, oM = { class: "mt-5" };
function rM(e, t) {
  const n = gt("router-link");
  return N(), P("div", sM, [
    Ne(e.$slots, "title", {}, () => [
      t[0] || (t[0] = u("span", { class: "error-title" }, "Error 404", -1))
    ], !0),
    Ne(e.$slots, "description", {}, () => [
      t[1] || (t[1] = u("span", { class: "error-description" }, "Sorry, we couldn't find this page.", -1))
    ], !0),
    Ne(e.$slots, "subdescription", {}, () => [
      t[2] || (t[2] = u("span", { class: "error-sub-description" }, "But dont worry, you can find plenty of other things on the homepage..", -1))
    ], !0),
    u("div", oM, [
      ge(n, {
        to: "/",
        class: "btn btn-sm btn-primary"
      }, {
        default: xe(() => t[3] || (t[3] = [
          u("i", { class: "fas fa-arrow-left fa-fw me-1" }, null, -1),
          u("span", null, "Back to Home", -1)
        ])),
        _: 1,
        __: [3]
      })
    ])
  ]);
}
const iM = /* @__PURE__ */ Fo(nM, [["render", rM], ["__scopeId", "data-v-d4f8fed2"]]), aM = { class: "card shadow-sm" }, lM = { class: "card-body" }, cM = { class: "text-center" }, uM = {
  key: 0,
  class: "lead text-danger"
}, dM = {
  key: 1,
  class: "text-muted"
}, fM = /* @__PURE__ */ ke({
  __name: "ErrorPage",
  setup(e) {
    const n = Pg().query.message;
    return (s, o) => {
      const r = gt("router-link");
      return N(), P("div", aM, [
        u("div", lM, [
          u("div", cM, [
            o[1] || (o[1] = u("h1", { class: "display-4" }, "Something went wrong", -1)),
            ie(n) ? (N(), P("p", uM, "Error: " + z(ie(n)), 1)) : (N(), P("p", dM, "We're sorry for the inconvenience. Please try again later.")),
            ge(r, {
              to: "/",
              class: "btn btn-primary mt-3"
            }, {
              default: xe(() => o[0] || (o[0] = [
                ae("Go back to Home")
              ])),
              _: 1,
              __: [0]
            })
          ])
        ])
      ]);
    };
  }
}), pM = [
  {
    path: "/",
    component: $A,
    children: [
      { path: "", name: "home", component: r2 },
      { path: "setup", name: "setup", component: D2 },
      { path: "monitor", name: "monitor", component: WV },
      { path: "archives", name: "archives", component: tM },
      { path: "error", name: "error", component: fM },
      { path: "/:pathMatch(.*)*", component: iM }
    ]
  }
];
let pi;
const Hp = () => pi || (pi = PA({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: $w(),
  routes: pM
}), pi), hM = {
  key: 0,
  class: "alert alert-danger"
}, mM = { style: { "word-break": "break-all" } }, gM = /* @__PURE__ */ ke({
  __name: "ErrorsVisualizer",
  setup(e) {
    const t = ee(), n = Na(), { errors: s } = Ea(n), o = (r) => JSON.stringify(r);
    return ua(async () => {
      if (s.value?.length === 0) return;
      const r = t.value;
      r && (await r.show(), n.resetErrors());
    }), (r, i) => {
      const a = gt("b-modal");
      return N(), ot(a, {
        ref_key: "modalRef",
        ref: t,
        "ok-only": "",
        size: "xl"
      }, {
        title: xe(() => i[0] || (i[0] = [
          u("span", null, "Error", -1)
        ])),
        default: xe(() => [
          (N(!0), P(Oe, null, Qe(ie(s), (l, f) => (N(), P(Oe, { key: f }, [
            l ? (N(), P("div", hM, [
              u("div", mM, z(o(l)), 1)
            ])) : Be("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 512);
    };
  }
}), vM = /* @__PURE__ */ ke({
  __name: "App",
  setup(e) {
    const t = $o();
    return cn(() => {
      t.fetchProjectSettings();
    }), (n, s) => {
      const o = gt("router-view");
      return N(), P("div", null, [
        ge(o),
        ge(gM)
      ]);
    };
  }
}), LM = (e) => {
  const t = ma(vM);
  t.config.errorHandler = (o, r, i) => {
    console.error("💥 Vue Error:", o), console.error("📍 Component:", r), console.error("ℹ️ Info:", i), t.runWithContext(() => {
      o instanceof Error ? Hp().push({ name: "error", query: { message: o.message } }) : console.error("Unhandled non-Error exception:", o);
    });
  };
  const n = nw();
  t.use(lR), t.use(n);
  const s = Hp();
  return t.use(s), t.mount(e), t;
};
export {
  LM as default
};
