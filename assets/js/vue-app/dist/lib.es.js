var zp = {};
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Be = zp.NODE_ENV !== "production" ? Object.freeze({}) : {}, yo = zp.NODE_ENV !== "production" ? Object.freeze([]) : [], dt = () => {
}, w_ = () => !1, Fr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $i = (e) => e.startsWith("onUpdate:"), st = Object.assign, bc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, A_ = Object.prototype.hasOwnProperty, Fe = (e, t) => A_.call(e, t), me = Array.isArray, Ps = (e) => Br(e) === "[object Map]", Lo = (e) => Br(e) === "[object Set]", Su = (e) => Br(e) === "[object Date]", Ae = (e) => typeof e == "function", Ge = (e) => typeof e == "string", an = (e) => typeof e == "symbol", $e = (e) => e !== null && typeof e == "object", Ec = (e) => ($e(e) || Ae(e)) && Ae(e.then) && Ae(e.catch), qp = Object.prototype.toString, Br = (e) => qp.call(e), wc = (e) => Br(e).slice(8, -1), Yp = (e) => Br(e) === "[object Object]", Ac = (e) => Ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, cr = /* @__PURE__ */ zn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), S_ = /* @__PURE__ */ zn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), la = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, C_ = /-(\w)/g, _t = la(
  (e) => e.replace(C_, (t, n) => n ? n.toUpperCase() : "")
), O_ = /\B([A-Z])/g, Wn = la(
  (e) => e.replace(O_, "-$1").toLowerCase()
), Hs = la((e) => e.charAt(0).toUpperCase() + e.slice(1)), Cs = la(
  (e) => e ? `on${Hs(e)}` : ""
), kt = (e, t) => !Object.is(e, t), uo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Er = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, ji = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, T_ = (e) => {
  const t = Ge(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Cu;
const $r = () => Cu || (Cu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vt(e) {
  if (me(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Ge(s) ? x_(s) : Vt(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (Ge(e) || $e(e))
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
function ce(e) {
  let t = "";
  if (Ge(e))
    t = e;
  else if (me(e))
    for (let n = 0; n < e.length; n++) {
      const s = ce(e[n]);
      s && (t += s + " ");
    }
  else if ($e(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function it(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ge(t) && (e.class = ce(t)), n && (e.style = Vt(n)), e;
}
const R_ = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", I_ = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", M_ = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", P_ = /* @__PURE__ */ zn(R_), V_ = /* @__PURE__ */ zn(I_), L_ = /* @__PURE__ */ zn(M_), F_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", B_ = /* @__PURE__ */ zn(F_);
function Xp(e) {
  return !!e || e === "";
}
function $_(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Ws(e[s], t[s]);
  return n;
}
function Ws(e, t) {
  if (e === t) return !0;
  let n = Su(e), s = Su(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = an(e), s = an(t), n || s)
    return e === t;
  if (n = me(e), s = me(t), n || s)
    return n && s ? $_(e, t) : !1;
  if (n = $e(e), s = $e(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (a && !c || !a && c || !Ws(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Sc(e, t) {
  return e.findIndex((n) => Ws(n, t));
}
const Gp = (e) => !!(e && e.__v_isRef === !0), P = (e) => Ge(e) ? e : e == null ? "" : me(e) || $e(e) && (e.toString === qp || !Ae(e.toString)) ? Gp(e) ? P(e.value) : JSON.stringify(e, Qp, 2) : String(e), Qp = (e, t) => Gp(t) ? Qp(e, t.value) : Ps(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Ba(s, r) + " =>"] = o, n),
    {}
  )
} : Lo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ba(n))
} : an(t) ? Ba(t) : $e(t) && !me(t) && !Yp(t) ? String(t) : t, Ba = (e, t = "") => {
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
let mt;
class Jp {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = mt, !t && mt && (this.index = (mt.scopes || (mt.scopes = [])).push(
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
      const n = mt;
      try {
        return mt = this, t();
      } finally {
        mt = n;
      }
    } else qe.NODE_ENV !== "production" && Yt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = mt, mt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (mt = this.prevScope, this.prevScope = void 0);
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
function Zp(e) {
  return new Jp(e);
}
function eh() {
  return mt;
}
function j_(e, t = !1) {
  mt ? mt.cleanups.push(e) : qe.NODE_ENV !== "production" && !t && Yt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Ke;
const $a = /* @__PURE__ */ new WeakSet();
class th {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, mt && mt.active && mt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, $a.has(this) && ($a.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || sh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ou(this), oh(this);
    const t = Ke, n = on;
    Ke = this, on = !0;
    try {
      return this.fn();
    } finally {
      qe.NODE_ENV !== "production" && Ke !== this && Yt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), rh(this), Ke = t, on = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Tc(t);
      this.deps = this.depsTail = void 0, Ou(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? $a.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Cl(this) && this.run();
  }
  get dirty() {
    return Cl(this);
  }
}
let nh = 0, ur, dr;
function sh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = dr, dr = e;
    return;
  }
  e.next = ur, ur = e;
}
function Cc() {
  nh++;
}
function Oc() {
  if (--nh > 0)
    return;
  if (dr) {
    let t = dr;
    for (dr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ur; ) {
    let t = ur;
    for (ur = void 0; t; ) {
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
function oh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function rh(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Tc(s), U_(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Cl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ih(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ih(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wr) || (e.globalVersion = wr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Cl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ke, s = on;
  Ke = e, on = !0;
  try {
    oh(e);
    const o = e.fn(e._value);
    (t.version === 0 || kt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Ke = n, on = s, rh(e), e.flags &= -3;
  }
}
function Tc(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), qe.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Tc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function U_(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let on = !0;
const ah = [];
function ln() {
  ah.push(on), on = !1;
}
function cn() {
  const e = ah.pop();
  on = e === void 0 ? !0 : e;
}
function Ou(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ke;
    Ke = void 0;
    try {
      t();
    } finally {
      Ke = n;
    }
  }
}
let wr = 0;
class H_ {
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
    if (!Ke || !on || Ke === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ke)
      n = this.activeLink = new H_(Ke, this), Ke.deps ? (n.prevDep = Ke.depsTail, Ke.depsTail.nextDep = n, Ke.depsTail = n) : Ke.deps = Ke.depsTail = n, lh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Ke.depsTail, n.nextDep = void 0, Ke.depsTail.nextDep = n, Ke.depsTail = n, Ke.deps === n && (Ke.deps = s);
    }
    return qe.NODE_ENV !== "production" && Ke.onTrack && Ke.onTrack(
      st(
        {
          effect: Ke
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, wr++, this.notify(t);
  }
  notify(t) {
    Cc();
    try {
      if (qe.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            st(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Oc();
    }
  }
}
function lh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        lh(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), qe.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Ui = /* @__PURE__ */ new WeakMap(), Vs = Symbol(
  qe.NODE_ENV !== "production" ? "Object iterate" : ""
), Ol = Symbol(
  qe.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ar = Symbol(
  qe.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ut(e, t, n) {
  if (on && Ke) {
    let s = Ui.get(e);
    s || Ui.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new ca()), o.map = s, o.key = n), qe.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function wn(e, t, n, s, o, r) {
  const i = Ui.get(e);
  if (!i) {
    wr++;
    return;
  }
  const a = (c) => {
    c && (qe.NODE_ENV !== "production" ? c.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: r
    }) : c.trigger());
  };
  if (Cc(), t === "clear")
    i.forEach(a);
  else {
    const c = me(e), f = c && Ac(n);
    if (c && n === "length") {
      const u = Number(s);
      i.forEach((d, p) => {
        (p === "length" || p === Ar || !an(p) && p >= u) && a(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(Ar)), t) {
        case "add":
          c ? f && a(i.get("length")) : (a(i.get(Vs)), Ps(e) && a(i.get(Ol)));
          break;
        case "delete":
          c || (a(i.get(Vs)), Ps(e) && a(i.get(Ol)));
          break;
        case "set":
          Ps(e) && a(i.get(Vs));
          break;
      }
  }
  Oc();
}
function W_(e, t) {
  const n = Ui.get(e);
  return n && n.get(t);
}
function so(e) {
  const t = Oe(e);
  return t === e ? t : (ut(t, "iterate", Ar), St(e) ? t : t.map(ht));
}
function ua(e) {
  return ut(e = Oe(e), "iterate", Ar), e;
}
const K_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return ja(this, Symbol.iterator, ht);
  },
  concat(...e) {
    return so(this).concat(
      ...e.map((t) => me(t) ? so(t) : t)
    );
  },
  entries() {
    return ja(this, "entries", (e) => (e[1] = ht(e[1]), e));
  },
  every(e, t) {
    return Mn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Mn(this, "filter", e, t, (n) => n.map(ht), arguments);
  },
  find(e, t) {
    return Mn(this, "find", e, t, ht, arguments);
  },
  findIndex(e, t) {
    return Mn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Mn(this, "findLast", e, t, ht, arguments);
  },
  findLastIndex(e, t) {
    return Mn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Mn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ua(this, "includes", e);
  },
  indexOf(...e) {
    return Ua(this, "indexOf", e);
  },
  join(e) {
    return so(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ua(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Mn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Go(this, "pop");
  },
  push(...e) {
    return Go(this, "push", e);
  },
  reduce(e, ...t) {
    return Tu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Tu(this, "reduceRight", e, t);
  },
  shift() {
    return Go(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Mn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Go(this, "splice", e);
  },
  toReversed() {
    return so(this).toReversed();
  },
  toSorted(e) {
    return so(this).toSorted(e);
  },
  toSpliced(...e) {
    return so(this).toSpliced(...e);
  },
  unshift(...e) {
    return Go(this, "unshift", e);
  },
  values() {
    return ja(this, "values", ht);
  }
};
function ja(e, t, n) {
  const s = ua(e), o = s[t]();
  return s !== e && !St(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const z_ = Array.prototype;
function Mn(e, t, n, s, o, r) {
  const i = ua(e), a = i !== e && !St(e), c = i[t];
  if (c !== z_[t]) {
    const d = c.apply(e, r);
    return a ? ht(d) : d;
  }
  let f = n;
  i !== e && (a ? f = function(d, p) {
    return n.call(this, ht(d), p, e);
  } : n.length > 2 && (f = function(d, p) {
    return n.call(this, d, p, e);
  }));
  const u = c.call(i, f, s);
  return a && o ? o(u) : u;
}
function Tu(e, t, n, s) {
  const o = ua(e);
  let r = n;
  return o !== e && (St(e) ? n.length > 3 && (r = function(i, a, c) {
    return n.call(this, i, a, c, e);
  }) : r = function(i, a, c) {
    return n.call(this, i, ht(a), c, e);
  }), o[t](r, ...s);
}
function Ua(e, t, n) {
  const s = Oe(e);
  ut(s, "iterate", Ar);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Sr(n[0]) ? (n[0] = Oe(n[0]), s[t](...n)) : o;
}
function Go(e, t, n = []) {
  ln(), Cc();
  const s = Oe(e)[t].apply(e, n);
  return Oc(), cn(), s;
}
const q_ = /* @__PURE__ */ zn("__proto__,__v_isRef,__isVue"), ch = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(an)
);
function Y_(e) {
  an(e) || (e = String(e));
  const t = Oe(this);
  return ut(t, "has", e), t.hasOwnProperty(e);
}
class uh {
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
      return s === (o ? r ? gh : mh : r ? hh : ph).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = me(t);
    if (!o) {
      let c;
      if (i && (c = K_[n]))
        return c;
      if (n === "hasOwnProperty")
        return Y_;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ye(t) ? t : s
    );
    return (an(n) ? ch.has(n) : q_(n)) || (o || ut(t, "get", n), r) ? a : Ye(a) ? i && Ac(n) ? a : a.value : $e(a) ? o ? _h(a) : us(a) : a;
  }
}
class dh extends uh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const c = Dn(r);
      if (!St(s) && !Dn(s) && (r = Oe(r), s = Oe(s)), !me(t) && Ye(r) && !Ye(s))
        return c ? !1 : (r.value = s, !0);
    }
    const i = me(t) && Ac(n) ? Number(n) < t.length : Fe(t, n), a = Reflect.set(
      t,
      n,
      s,
      Ye(t) ? t : o
    );
    return t === Oe(o) && (i ? kt(s, r) && wn(t, "set", n, s, r) : wn(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = Fe(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && wn(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!an(n) || !ch.has(n)) && ut(t, "has", n), s;
  }
  ownKeys(t) {
    return ut(
      t,
      "iterate",
      me(t) ? "length" : Vs
    ), Reflect.ownKeys(t);
  }
}
class fh extends uh {
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
const X_ = /* @__PURE__ */ new dh(), G_ = /* @__PURE__ */ new fh(), Q_ = /* @__PURE__ */ new dh(!0), J_ = /* @__PURE__ */ new fh(!0), Tl = (e) => e, si = (e) => Reflect.getPrototypeOf(e);
function Z_(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = Oe(o), i = Ps(r), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, f = o[e](...s), u = n ? Tl : t ? Hi : ht;
    return !t && ut(
      r,
      "iterate",
      c ? Ol : Vs
    ), {
      // iterator protocol
      next() {
        const { value: d, done: p } = f.next();
        return p ? { value: d, done: p } : {
          value: a ? [u(d[0]), u(d[1])] : u(d),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function oi(e) {
  return function(...t) {
    if (qe.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Yt(
        `${Hs(e)} operation ${n}failed: target is readonly.`,
        Oe(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ey(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = Oe(r), a = Oe(o);
      e || (kt(o, a) && ut(i, "get", o), ut(i, "get", a));
      const { has: c } = si(i), f = t ? Tl : e ? Hi : ht;
      if (c.call(i, o))
        return f(r.get(o));
      if (c.call(i, a))
        return f(r.get(a));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ut(Oe(o), "iterate", Vs), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = Oe(r), a = Oe(o);
      return e || (kt(o, a) && ut(i, "has", o), ut(i, "has", a)), o === a ? r.has(o) : r.has(o) || r.has(a);
    },
    forEach(o, r) {
      const i = this, a = i.__v_raw, c = Oe(a), f = t ? Tl : e ? Hi : ht;
      return !e && ut(c, "iterate", Vs), a.forEach((u, d) => o.call(r, f(u), f(d), i));
    }
  };
  return st(
    n,
    e ? {
      add: oi("add"),
      set: oi("set"),
      delete: oi("delete"),
      clear: oi("clear")
    } : {
      add(o) {
        !t && !St(o) && !Dn(o) && (o = Oe(o));
        const r = Oe(this);
        return si(r).has.call(r, o) || (r.add(o), wn(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !St(r) && !Dn(r) && (r = Oe(r));
        const i = Oe(this), { has: a, get: c } = si(i);
        let f = a.call(i, o);
        f ? qe.NODE_ENV !== "production" && Nu(i, a, o) : (o = Oe(o), f = a.call(i, o));
        const u = c.call(i, o);
        return i.set(o, r), f ? kt(r, u) && wn(i, "set", o, r, u) : wn(i, "add", o, r), this;
      },
      delete(o) {
        const r = Oe(this), { has: i, get: a } = si(r);
        let c = i.call(r, o);
        c ? qe.NODE_ENV !== "production" && Nu(r, i, o) : (o = Oe(o), c = i.call(r, o));
        const f = a ? a.call(r, o) : void 0, u = r.delete(o);
        return c && wn(r, "delete", o, void 0, f), u;
      },
      clear() {
        const o = Oe(this), r = o.size !== 0, i = qe.NODE_ENV !== "production" ? Ps(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
        return r && wn(
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
    n[o] = Z_(o, e, t);
  }), n;
}
function da(e, t) {
  const n = ey(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    Fe(n, o) && o in s ? n : s,
    o,
    r
  );
}
const ty = {
  get: /* @__PURE__ */ da(!1, !1)
}, ny = {
  get: /* @__PURE__ */ da(!1, !0)
}, sy = {
  get: /* @__PURE__ */ da(!0, !1)
}, oy = {
  get: /* @__PURE__ */ da(!0, !0)
};
function Nu(e, t, n) {
  const s = Oe(n);
  if (s !== n && t.call(e, s)) {
    const o = wc(e);
    Yt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ph = /* @__PURE__ */ new WeakMap(), hh = /* @__PURE__ */ new WeakMap(), mh = /* @__PURE__ */ new WeakMap(), gh = /* @__PURE__ */ new WeakMap();
function ry(e) {
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
function iy(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ry(wc(e));
}
function us(e) {
  return Dn(e) ? e : fa(
    e,
    !1,
    X_,
    ty,
    ph
  );
}
function vh(e) {
  return fa(
    e,
    !1,
    Q_,
    ny,
    hh
  );
}
function _h(e) {
  return fa(
    e,
    !0,
    G_,
    sy,
    mh
  );
}
function Sn(e) {
  return fa(
    e,
    !0,
    J_,
    oy,
    gh
  );
}
function fa(e, t, n, s, o) {
  if (!$e(e))
    return qe.NODE_ENV !== "production" && Yt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = iy(e);
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
  return Dn(e) ? rn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Dn(e) {
  return !!(e && e.__v_isReadonly);
}
function St(e) {
  return !!(e && e.__v_isShallow);
}
function Sr(e) {
  return e ? !!e.__v_raw : !1;
}
function Oe(e) {
  const t = e && e.__v_raw;
  return t ? Oe(t) : e;
}
function is(e) {
  return !Fe(e, "__v_skip") && Object.isExtensible(e) && Er(e, "__v_skip", !0), e;
}
const ht = (e) => $e(e) ? us(e) : e, Hi = (e) => $e(e) ? _h(e) : e;
function Ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function H(e) {
  return yh(e, !1);
}
function ay(e) {
  return yh(e, !0);
}
function yh(e, t) {
  return Ye(e) ? e : new ly(e, t);
}
class ly {
  constructor(t, n) {
    this.dep = new ca(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Oe(t), this._value = n ? t : ht(t), this.__v_isShallow = n;
  }
  get value() {
    return qe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || St(t) || Dn(t);
    t = s ? t : Oe(t), kt(t, n) && (this._rawValue = t, this._value = s ? t : ht(t), qe.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ne(e) {
  return Ye(e) ? e.value : e;
}
const cy = {
  get: (e, t, n) => t === "__v_raw" ? e : ne(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Ye(o) && !Ye(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function bh(e) {
  return rn(e) ? e : new Proxy(e, cy);
}
class uy {
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
function dy(e) {
  return new uy(e);
}
function un(e) {
  qe.NODE_ENV !== "production" && !Sr(e) && Yt("toRefs() expects a reactive object but received a plain one.");
  const t = me(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Eh(e, n);
  return t;
}
class fy {
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
    return W_(Oe(this._object), this._key);
  }
}
class py {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function bi(e, t, n) {
  return Ye(e) ? e : Ae(e) ? new py(e) : $e(e) && arguments.length > 1 ? Eh(e, t, n) : H(e);
}
function Eh(e, t, n) {
  const s = e[t];
  return Ye(s) ? s : new fy(e, t, n);
}
class hy {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ca(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ke !== this)
      return sh(this, !0), !0;
  }
  get value() {
    const t = qe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return ih(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : qe.NODE_ENV !== "production" && Yt("Write operation failed: computed value is readonly");
  }
}
function my(e, t, n = !1) {
  let s, o;
  return Ae(e) ? s = e : (s = e.get, o = e.set), new hy(s, o, n);
}
const ri = {}, Wi = /* @__PURE__ */ new WeakMap();
let Os;
function gy(e, t = !1, n = Os) {
  if (n) {
    let s = Wi.get(n);
    s || Wi.set(n, s = []), s.push(e);
  } else qe.NODE_ENV !== "production" && !t && Yt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function vy(e, t, n = Be) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: a, call: c } = n, f = (k) => {
    (n.onWarn || Yt)(
      "Invalid watch source: ",
      k,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (k) => o ? k : St(k) || o === !1 || o === 0 ? $n(k, 1) : $n(k);
  let d, p, h, m, g = !1, v = !1;
  if (Ye(e) ? (p = () => e.value, g = St(e)) : rn(e) ? (p = () => u(e), g = !0) : me(e) ? (v = !0, g = e.some((k) => rn(k) || St(k)), p = () => e.map((k) => {
    if (Ye(k))
      return k.value;
    if (rn(k))
      return u(k);
    if (Ae(k))
      return c ? c(k, 2) : k();
    qe.NODE_ENV !== "production" && f(k);
  })) : Ae(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
    if (h) {
      ln();
      try {
        h();
      } finally {
        cn();
      }
    }
    const k = Os;
    Os = d;
    try {
      return c ? c(e, 3, [m]) : e(m);
    } finally {
      Os = k;
    }
  } : (p = dt, qe.NODE_ENV !== "production" && f(e)), t && o) {
    const k = p, O = o === !0 ? 1 / 0 : o;
    p = () => $n(k(), O);
  }
  const y = eh(), b = () => {
    d.stop(), y && y.active && bc(y.effects, d);
  };
  if (r && t) {
    const k = t;
    t = (...O) => {
      k(...O), b();
    };
  }
  let _ = v ? new Array(e.length).fill(ri) : ri;
  const x = (k) => {
    if (!(!(d.flags & 1) || !d.dirty && !k))
      if (t) {
        const O = d.run();
        if (o || g || (v ? O.some((N, I) => kt(N, _[I])) : kt(O, _))) {
          h && h();
          const N = Os;
          Os = d;
          try {
            const I = [
              O,
              // pass undefined as the old value when it's changed for the first time
              _ === ri ? void 0 : v && _[0] === ri ? [] : _,
              m
            ];
            _ = O, c ? c(t, 3, I) : (
              // @ts-expect-error
              t(...I)
            );
          } finally {
            Os = N;
          }
        }
      } else
        d.run();
  };
  return a && a(x), d = new th(p), d.scheduler = i ? () => i(x, !1) : x, m = (k) => gy(k, !1, d), h = d.onStop = () => {
    const k = Wi.get(d);
    if (k) {
      if (c)
        c(k, 4);
      else
        for (const O of k) O();
      Wi.delete(d);
    }
  }, qe.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? s ? x(!0) : _ = d.run() : i ? i(x.bind(null, !0), !0) : d.run(), b.pause = d.pause.bind(d), b.resume = d.resume.bind(d), b.stop = b, b;
}
function $n(e, t = 1 / 0, n) {
  if (t <= 0 || !$e(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ye(e))
    $n(e.value, t, n);
  else if (me(e))
    for (let s = 0; s < e.length; s++)
      $n(e[s], t, n);
  else if (Lo(e) || Ps(e))
    e.forEach((s) => {
      $n(s, t, n);
    });
  else if (Yp(e)) {
    for (const s in e)
      $n(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && $n(e[s], t, n);
  }
  return e;
}
var M = {};
const Ls = [];
function Ei(e) {
  Ls.push(e);
}
function wi() {
  Ls.pop();
}
let Ha = !1;
function Z(e, ...t) {
  if (Ha) return;
  Ha = !0, ln();
  const n = Ls.length ? Ls[Ls.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = _y();
  if (s)
    Fo(
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
          ({ vnode: r }) => `at <${ya(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...yy(o)), console.warn(...r);
  }
  cn(), Ha = !1;
}
function _y() {
  let e = Ls[Ls.length - 1];
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
function yy(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...by(n));
  }), t;
}
function by({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${ya(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Ey(e.props), r] : [o + r];
}
function Ey(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...wh(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function wh(e, t, n) {
  return Ge(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ye(t) ? (t = wh(e, Oe(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Ae(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Oe(t), n ? t : [`${e}=`, t]);
}
function wy(e, t) {
  M.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? Z(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && Z(`${t} is NaN - the duration expression might be incorrect.`));
}
const Nc = {
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
function Fo(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    jr(o, t, n);
  }
}
function dn(e, t, n, s) {
  if (Ae(e)) {
    const o = Fo(e, t, n, s);
    return o && Ec(o) && o.catch((r) => {
      jr(r, t, n);
    }), o;
  }
  if (me(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(dn(e[r], t, n, s));
    return o;
  } else M.NODE_ENV !== "production" && Z(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function jr(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Be;
  if (t) {
    let a = t.parent;
    const c = t.proxy, f = M.NODE_ENV !== "production" ? Nc[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, c, f) === !1)
            return;
      }
      a = a.parent;
    }
    if (r) {
      ln(), Fo(r, null, 10, [
        e,
        c,
        f
      ]), cn();
      return;
    }
  }
  Ay(e, n, o, s, i);
}
function Ay(e, t, n, s = !0, o = !1) {
  if (M.NODE_ENV !== "production") {
    const r = Nc[t];
    if (n && Ei(n), Z(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && wi(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const wt = [];
let En = -1;
const bo = [];
let ts = null, fo = 0;
const Ah = /* @__PURE__ */ Promise.resolve();
let Ki = null;
const Sy = 100;
function Ks(e) {
  const t = Ki || Ah;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Cy(e) {
  let t = En + 1, n = wt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = wt[s], r = Cr(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function pa(e) {
  if (!(e.flags & 1)) {
    const t = Cr(e), n = wt[wt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Cr(n) ? wt.push(e) : wt.splice(Cy(t), 0, e), e.flags |= 1, Sh();
  }
}
function Sh() {
  Ki || (Ki = Ah.then(Th));
}
function Ch(e) {
  me(e) ? bo.push(...e) : ts && e.id === -1 ? ts.splice(fo + 1, 0, e) : e.flags & 1 || (bo.push(e), e.flags |= 1), Sh();
}
function Du(e, t, n = En + 1) {
  for (M.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < wt.length; n++) {
    const s = wt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || M.NODE_ENV !== "production" && Dc(t, s))
        continue;
      wt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Oh(e) {
  if (bo.length) {
    const t = [...new Set(bo)].sort(
      (n, s) => Cr(n) - Cr(s)
    );
    if (bo.length = 0, ts) {
      ts.push(...t);
      return;
    }
    for (ts = t, M.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), fo = 0; fo < ts.length; fo++) {
      const n = ts[fo];
      M.NODE_ENV !== "production" && Dc(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ts = null, fo = 0;
  }
}
const Cr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Th(e) {
  M.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = M.NODE_ENV !== "production" ? (n) => Dc(e, n) : dt;
  try {
    for (En = 0; En < wt.length; En++) {
      const n = wt[En];
      if (n && !(n.flags & 8)) {
        if (M.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Fo(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; En < wt.length; En++) {
      const n = wt[En];
      n && (n.flags &= -2);
    }
    En = -1, wt.length = 0, Oh(e), Ki = null, (wt.length || bo.length) && Th(e);
  }
}
function Dc(e, t) {
  const n = e.get(t) || 0;
  if (n > Sy) {
    const s = t.i, o = s && Vc(s.type);
    return jr(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let nn = !1;
const Ai = /* @__PURE__ */ new Map();
M.NODE_ENV !== "production" && ($r().__VUE_HMR_RUNTIME__ = {
  createRecord: Wa(Nh),
  rerender: Wa(Ny),
  reload: Wa(Dy)
});
const zs = /* @__PURE__ */ new Map();
function Oy(e) {
  const t = e.type.__hmrId;
  let n = zs.get(t);
  n || (Nh(t, e.type), n = zs.get(t)), n.instances.add(e);
}
function Ty(e) {
  zs.get(e.type.__hmrId).instances.delete(e);
}
function Nh(e, t) {
  return zs.has(e) ? !1 : (zs.set(e, {
    initialDef: zi(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function zi(e) {
  return _m(e) ? e.__vccOpts : e;
}
function Ny(e, t) {
  const n = zs.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, zi(s.type).render = t), s.renderCache = [], nn = !0, s.update(), nn = !1;
  }));
}
function Dy(e, t) {
  const n = zs.get(e);
  if (!n) return;
  t = zi(t), ku(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = zi(r.type);
    let a = Ai.get(i);
    a || (i !== n.initialDef && ku(i, t), Ai.set(i, a = /* @__PURE__ */ new Set())), a.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (a.add(r), r.ceReload(t.styles), a.delete(r)) : r.parent ? pa(() => {
      nn = !0, r.parent.update(), nn = !1, a.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Ch(() => {
    Ai.clear();
  });
}
function ku(e, t) {
  st(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Wa(e) {
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
let An, rr = [], Nl = !1;
function Ur(e, ...t) {
  An ? An.emit(e, ...t) : Nl || rr.push({ event: e, args: t });
}
function Dh(e, t) {
  var n, s;
  An = e, An ? (An.enabled = !0, rr.forEach(({ event: o, args: r }) => An.emit(o, ...r)), rr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Dh(r, t);
  }), setTimeout(() => {
    An || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Nl = !0, rr = []);
  }, 3e3)) : (Nl = !0, rr = []);
}
function ky(e, t) {
  Ur("app:init", e, t, {
    Fragment: Se,
    Text: zr,
    Comment: at,
    Static: hr
  });
}
function xy(e) {
  Ur("app:unmount", e);
}
const Ry = /* @__PURE__ */ kc(
  "component:added"
  /* COMPONENT_ADDED */
), kh = /* @__PURE__ */ kc(
  "component:updated"
  /* COMPONENT_UPDATED */
), Iy = /* @__PURE__ */ kc(
  "component:removed"
  /* COMPONENT_REMOVED */
), My = (e) => {
  An && typeof An.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !An.cleanupBuffer(e) && Iy(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function kc(e) {
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
const Py = /* @__PURE__ */ xh(
  "perf:start"
  /* PERFORMANCE_START */
), Vy = /* @__PURE__ */ xh(
  "perf:end"
  /* PERFORMANCE_END */
);
function xh(e) {
  return (t, n, s) => {
    Ur(e, t.appContext.app, t.uid, t, n, s);
  };
}
function Ly(e, t, n) {
  Ur(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let rt = null, Rh = null;
function qi(e) {
  const t = rt;
  return rt = e, Rh = e && e.type.__scopeId || null, t;
}
function fe(e, t = rt, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && qu(-1);
    const r = qi(t);
    let i;
    try {
      i = e(...o);
    } finally {
      qi(r), s._d && qu(1);
    }
    return M.NODE_ENV !== "production" && kh(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ih(e) {
  S_(e) && Z("Do not use built-in directive ids as custom directive id: " + e);
}
function nt(e, t) {
  if (rt === null)
    return M.NODE_ENV !== "production" && Z("withDirectives can only be used inside render functions."), e;
  const n = _a(rt), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, a, c = Be] = t[o];
    r && (Ae(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && $n(i), s.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }));
  }
  return e;
}
function Es(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    r && (a.oldValue = r[i].value);
    let c = a.dir[s];
    c && (ln(), dn(c, n, 8, [
      e.el,
      a,
      e,
      t
    ]), cn());
  }
}
const Mh = Symbol("_vte"), Ph = (e) => e.__isTeleport, Fs = (e) => e && (e.disabled || e.disabled === ""), xu = (e) => e && (e.defer || e.defer === ""), Ru = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Iu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Dl = (e, t) => {
  const n = e && e.to;
  if (Ge(n))
    if (t) {
      const s = t(n);
      return M.NODE_ENV !== "production" && !s && !Fs(e) && Z(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return M.NODE_ENV !== "production" && Z(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return M.NODE_ENV !== "production" && !n && !Fs(e) && Z(`Invalid Teleport target: ${n}`), n;
}, Vh = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, a, c, f) {
    const {
      mc: u,
      pc: d,
      pbc: p,
      o: { insert: h, querySelector: m, createText: g, createComment: v }
    } = f, y = Fs(t.props);
    let { shapeFlag: b, children: _, dynamicChildren: x } = t;
    if (M.NODE_ENV !== "production" && nn && (c = !1, x = null), e == null) {
      const k = t.el = M.NODE_ENV !== "production" ? v("teleport start") : g(""), O = t.anchor = M.NODE_ENV !== "production" ? v("teleport end") : g("");
      h(k, n, s), h(O, n, s);
      const N = (C, w) => {
        b & 16 && (o && o.isCE && (o.ce._teleportTarget = C), u(
          _,
          C,
          w,
          o,
          r,
          i,
          a,
          c
        ));
      }, I = () => {
        const C = t.target = Dl(t.props, m), w = Lh(C, t, g, h);
        C ? (i !== "svg" && Ru(C) ? i = "svg" : i !== "mathml" && Iu(C) && (i = "mathml"), y || (N(C, w), Si(t, !1))) : M.NODE_ENV !== "production" && !y && Z(
          "Invalid Teleport target on mount:",
          C,
          `(${typeof C})`
        );
      };
      y && (N(n, O), Si(t, !0)), xu(t.props) ? (t.el.__isMounted = !1, Et(() => {
        I(), delete t.el.__isMounted;
      }, r)) : I();
    } else {
      if (xu(t.props) && e.el.__isMounted === !1) {
        Et(() => {
          Vh.process(
            e,
            t,
            n,
            s,
            o,
            r,
            i,
            a,
            c,
            f
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const k = t.anchor = e.anchor, O = t.target = e.target, N = t.targetAnchor = e.targetAnchor, I = Fs(e.props), C = I ? n : O, w = I ? k : N;
      if (i === "svg" || Ru(O) ? i = "svg" : (i === "mathml" || Iu(O)) && (i = "mathml"), x ? (p(
        e.dynamicChildren,
        x,
        C,
        o,
        r,
        i,
        a
      ), pr(e, t, M.NODE_ENV === "production")) : c || d(
        e,
        t,
        C,
        w,
        o,
        r,
        i,
        a,
        !1
      ), y)
        I ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ii(
          t,
          n,
          k,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const D = t.target = Dl(
          t.props,
          m
        );
        D ? ii(
          t,
          D,
          null,
          f,
          0
        ) : M.NODE_ENV !== "production" && Z(
          "Invalid Teleport target on update:",
          O,
          `(${typeof O})`
        );
      } else I && ii(
        t,
        O,
        N,
        f,
        1
      );
      Si(t, y);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, r) {
    const {
      shapeFlag: i,
      children: a,
      anchor: c,
      targetStart: f,
      targetAnchor: u,
      target: d,
      props: p
    } = e;
    if (d && (o(f), o(u)), r && o(c), i & 16) {
      const h = r || !Fs(p);
      for (let m = 0; m < a.length; m++) {
        const g = a[m];
        s(
          g,
          t,
          n,
          h,
          !!g.dynamicChildren
        );
      }
    }
  },
  move: ii,
  hydrate: Fy
};
function ii(e, t, n, { o: { insert: s }, m: o }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: c, children: f, props: u } = e, d = r === 2;
  if (d && s(i, t, n), (!d || Fs(u)) && c & 16)
    for (let p = 0; p < f.length; p++)
      o(
        f[p],
        t,
        n,
        2
      );
  d && s(a, t, n);
}
function Fy(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: a, querySelector: c, insert: f, createText: u }
}, d) {
  const p = t.target = Dl(
    t.props,
    c
  );
  if (p) {
    const h = Fs(t.props), m = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (h)
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
              t.targetAnchor = g, p._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          g = i(g);
        }
        t.targetAnchor || Lh(p, t, u, f), d(
          m && i(m),
          t,
          p,
          n,
          s,
          o,
          r
        );
      }
    Si(t, h);
  }
  return t.anchor && i(t.anchor);
}
const Hr = Vh;
function Si(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Lh(e, t, n, s) {
  const o = t.targetStart = n(""), r = t.targetAnchor = n("");
  return o[Mh] = r, e && (s(o, e), s(r, e)), r;
}
const ns = Symbol("_leaveCb"), ai = Symbol("_enterCb");
function By() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Tt(() => {
    e.isMounted = !0;
  }), Kh(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ht = [Function, Array], Fh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ht,
  onEnter: Ht,
  onAfterEnter: Ht,
  onEnterCancelled: Ht,
  // leave
  onBeforeLeave: Ht,
  onLeave: Ht,
  onAfterLeave: Ht,
  onLeaveCancelled: Ht,
  // appear
  onBeforeAppear: Ht,
  onAppear: Ht,
  onAfterAppear: Ht,
  onAppearCancelled: Ht
}, Bh = (e) => {
  const t = e.subTree;
  return t.component ? Bh(t.component) : t;
}, $y = {
  name: "BaseTransition",
  props: Fh,
  setup(e, { slots: t }) {
    const n = Yn(), s = By();
    return () => {
      const o = t.default && Uh(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = $h(o), i = Oe(e), { mode: a } = i;
      if (M.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && Z(`invalid <transition> mode: ${a}`), s.isLeaving)
        return Ka(r);
      const c = Mu(r);
      if (!c)
        return Ka(r);
      let f = kl(
        c,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => f = d
      );
      c.type !== at && Or(c, f);
      let u = n.subTree && Mu(n.subTree);
      if (u && u.type !== at && !Ds(c, u) && Bh(n).type !== at) {
        let d = kl(
          u,
          i,
          s,
          n
        );
        if (Or(u, d), a === "out-in" && c.type !== at)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, Ka(r);
        a === "in-out" && c.type !== at ? d.delayLeave = (p, h, m) => {
          const g = jh(
            s,
            u
          );
          g[String(u.key)] = u, p[ns] = () => {
            h(), p[ns] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            m(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function $h(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== at) {
        if (M.NODE_ENV !== "production" && n) {
          Z(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, M.NODE_ENV === "production") break;
      }
  }
  return t;
}
const jy = $y;
function jh(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function kl(e, t, n, s, o) {
  const {
    appear: r,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: c,
    onEnter: f,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: p,
    onLeave: h,
    onAfterLeave: m,
    onLeaveCancelled: g,
    onBeforeAppear: v,
    onAppear: y,
    onAfterAppear: b,
    onAppearCancelled: _
  } = t, x = String(e.key), k = jh(n, e), O = (C, w) => {
    C && dn(
      C,
      s,
      9,
      w
    );
  }, N = (C, w) => {
    const D = w[1];
    O(C, w), me(C) ? C.every((A) => A.length <= 1) && D() : C.length <= 1 && D();
  }, I = {
    mode: i,
    persisted: a,
    beforeEnter(C) {
      let w = c;
      if (!n.isMounted)
        if (r)
          w = v || c;
        else
          return;
      C[ns] && C[ns](
        !0
        /* cancelled */
      );
      const D = k[x];
      D && Ds(e, D) && D.el[ns] && D.el[ns](), O(w, [C]);
    },
    enter(C) {
      let w = f, D = u, A = d;
      if (!n.isMounted)
        if (r)
          w = y || f, D = b || u, A = _ || d;
        else
          return;
      let F = !1;
      const de = C[ai] = (Y) => {
        F || (F = !0, Y ? O(A, [C]) : O(D, [C]), I.delayedLeave && I.delayedLeave(), C[ai] = void 0);
      };
      w ? N(w, [C, de]) : de();
    },
    leave(C, w) {
      const D = String(e.key);
      if (C[ai] && C[ai](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return w();
      O(p, [C]);
      let A = !1;
      const F = C[ns] = (de) => {
        A || (A = !0, w(), de ? O(g, [C]) : O(m, [C]), C[ns] = void 0, k[D] === e && delete k[D]);
      };
      k[D] = e, h ? N(h, [C, F]) : F();
    },
    clone(C) {
      const w = kl(
        C,
        t,
        n,
        s,
        o
      );
      return o && o(w), w;
    }
  };
  return I;
}
function Ka(e) {
  if (Wr(e))
    return e = kn(e), e.children = null, e;
}
function Mu(e) {
  if (!Wr(e))
    return Ph(e.type) && e.children ? $h(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Ae(n.default))
      return n.default();
  }
}
function Or(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Or(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Uh(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === Se ? (i.patchFlag & 128 && o++, s = s.concat(
      Uh(i.children, t, a)
    )) : (t || i.type !== at) && s.push(a != null ? kn(i, { key: a }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Te(e, t) {
  return Ae(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    st({ name: e.name }, t, { setup: e })
  ) : e;
}
function Hh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Uy = /* @__PURE__ */ new WeakSet();
function fr(e, t, n, s, o = !1) {
  if (me(e)) {
    e.forEach(
      (m, g) => fr(
        m,
        t && (me(t) ? t[g] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Eo(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && fr(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? _a(s.component) : s.el, i = o ? null : r, { i: a, r: c } = e;
  if (M.NODE_ENV !== "production" && !a) {
    Z(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = a.refs === Be ? a.refs = {} : a.refs, d = a.setupState, p = Oe(d), h = d === Be ? () => !1 : (m) => M.NODE_ENV !== "production" && (Fe(p, m) && !Ye(p[m]) && Z(
    `Template ref "${m}" used on a non-ref value. It will not work in the production build.`
  ), Uy.has(p[m])) ? !1 : Fe(p, m);
  if (f != null && f !== c && (Ge(f) ? (u[f] = null, h(f) && (d[f] = null)) : Ye(f) && (f.value = null)), Ae(c))
    Fo(c, a, 12, [i, u]);
  else {
    const m = Ge(c), g = Ye(c);
    if (m || g) {
      const v = () => {
        if (e.f) {
          const y = m ? h(c) ? d[c] : u[c] : c.value;
          o ? me(y) && bc(y, r) : me(y) ? y.includes(r) || y.push(r) : m ? (u[c] = [r], h(c) && (d[c] = u[c])) : (c.value = [r], e.k && (u[e.k] = c.value));
        } else m ? (u[c] = i, h(c) && (d[c] = i)) : g ? (c.value = i, e.k && (u[e.k] = i)) : M.NODE_ENV !== "production" && Z("Invalid template ref type:", c, `(${typeof c})`);
      };
      i ? (v.id = -1, Et(v, n)) : v();
    } else M.NODE_ENV !== "production" && Z("Invalid template ref type:", c, `(${typeof c})`);
  }
}
$r().requestIdleCallback;
$r().cancelIdleCallback;
const Eo = (e) => !!e.type.__asyncLoader, Wr = (e) => e.type.__isKeepAlive;
function Hy(e, t) {
  Wh(e, "a", t);
}
function Wy(e, t) {
  Wh(e, "da", t);
}
function Wh(e, t, n = ct) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ha(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Wr(o.parent.vnode) && Ky(s, t, n, o), o = o.parent;
  }
}
function Ky(e, t, n, s) {
  const o = ha(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Kr(() => {
    bc(s[t], o);
  }, n);
}
function ha(e, t, n = ct, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      ln();
      const a = qr(n), c = dn(t, n, e, i);
      return a(), cn(), c;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (M.NODE_ENV !== "production") {
    const o = Cs(Nc[e].replace(/ hook$/, ""));
    Z(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const qn = (e) => (t, n = ct) => {
  (!Nr || e === "sp") && ha(e, (...s) => t(...s), n);
}, zy = qn("bm"), Tt = qn("m"), qy = qn(
  "bu"
), Yy = qn("u"), Kh = qn(
  "bum"
), Kr = qn("um"), Xy = qn(
  "sp"
), Gy = qn("rtg"), Qy = qn("rtc");
function Jy(e, t = ct) {
  ha("ec", e, t);
}
const xl = "components", Zy = "directives";
function Qe(e, t) {
  return zh(xl, e, !0, t) || e;
}
const eb = Symbol.for("v-ndc");
function tb(e) {
  return zh(Zy, e);
}
function zh(e, t, n = !0, s = !1) {
  const o = rt || ct;
  if (o) {
    const r = o.type;
    if (e === xl) {
      const a = Vc(
        r,
        !1
      );
      if (a && (a === t || a === _t(t) || a === Hs(_t(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Pu(o[e] || r[e], t) || // global registration
      Pu(o.appContext[e], t)
    );
    if (!i && s)
      return r;
    if (M.NODE_ENV !== "production" && n && !i) {
      const a = e === xl ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      Z(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else M.NODE_ENV !== "production" && Z(
    `resolve${Hs(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Pu(e, t) {
  return e && (e[t] || e[_t(t)] || e[Hs(_t(t))]);
}
function Je(e, t, n, s) {
  let o;
  const r = n, i = me(e);
  if (i || Ge(e)) {
    const a = i && rn(e);
    let c = !1, f = !1;
    a && (c = !St(e), f = Dn(e), e = ua(e)), o = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      o[u] = t(
        c ? f ? Hi(ht(e[u])) : ht(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    M.NODE_ENV !== "production" && !Number.isInteger(e) && Z(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, r);
  } else if ($e(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (a, c) => t(a, c, void 0, r)
      );
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let c = 0, f = a.length; c < f; c++) {
        const u = a[c];
        o[c] = t(e[u], u, c, r);
      }
    }
  else
    o = [];
  return o;
}
function De(e, t, n = {}, s, o) {
  if (rt.ce || rt.parent && Eo(rt.parent) && rt.parent.ce)
    return t !== "default" && (n.name = t), T(), et(
      Se,
      null,
      [ue("slot", n, s && s())],
      64
    );
  let r = e[t];
  M.NODE_ENV !== "production" && r && r.length > 1 && (Z(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), T();
  const i = r && qh(r(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, c = et(
    Se,
    {
      key: (a && !an(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), r && r._c && (r._d = !0), c;
}
function qh(e) {
  return e.some((t) => qs(t) ? !(t.type === at || t.type === Se && !qh(t.children)) : !0) ? e : null;
}
const Rl = (e) => e ? gm(e) ? _a(e) : Rl(e.parent) : null, Bs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ st(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => M.NODE_ENV !== "production" ? Sn(e.props) : e.props,
    $attrs: (e) => M.NODE_ENV !== "production" ? Sn(e.attrs) : e.attrs,
    $slots: (e) => M.NODE_ENV !== "production" ? Sn(e.slots) : e.slots,
    $refs: (e) => M.NODE_ENV !== "production" ? Sn(e.refs) : e.refs,
    $parent: (e) => Rl(e.parent),
    $root: (e) => Rl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Gh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      pa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ks.bind(e.proxy)),
    $watch: (e) => Pb.bind(e)
  })
), xc = (e) => e === "_" || e === "$", za = (e, t) => e !== Be && !e.__isScriptSetup && Fe(e, t), Yh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: a, appContext: c } = e;
    if (M.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const h = i[t];
      if (h !== void 0)
        switch (h) {
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
        if (za(s, t))
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
        Il && (i[t] = 0);
      }
    }
    const u = Bs[t];
    let d, p;
    if (u)
      return t === "$attrs" ? (ut(e.attrs, "get", ""), M.NODE_ENV !== "production" && Gi()) : M.NODE_ENV !== "production" && t === "$slots" && ut(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Be && Fe(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, Fe(p, t)
    )
      return p[t];
    M.NODE_ENV !== "production" && rt && (!Ge(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Be && xc(t[0]) && Fe(o, t) ? Z(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === rt && Z(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return za(o, t) ? (o[t] = n, !0) : M.NODE_ENV !== "production" && o.__isScriptSetup && Fe(o, t) ? (Z(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== Be && Fe(s, t) ? (s[t] = n, !0) : Fe(e.props, t) ? (M.NODE_ENV !== "production" && Z(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (M.NODE_ENV !== "production" && Z(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (M.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let a;
    return !!n[i] || e !== Be && Fe(e, i) || za(t, i) || (a = r[0]) && Fe(a, i) || Fe(s, i) || Fe(Bs, i) || Fe(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Fe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
M.NODE_ENV !== "production" && (Yh.ownKeys = (e) => (Z(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function nb(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Bs).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Bs[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: dt
    });
  }), t;
}
function sb(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: dt
    });
  });
}
function ob(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Oe(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (xc(s[0])) {
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
        set: dt
      });
    }
  });
}
function Vu(e) {
  return me(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function rb() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? Z(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Il = !0;
function ib(e) {
  const t = Gh(e), n = e.proxy, s = e.ctx;
  Il = !1, t.beforeCreate && Lu(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: a,
    provide: c,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: p,
    beforeUpdate: h,
    updated: m,
    activated: g,
    deactivated: v,
    beforeDestroy: y,
    beforeUnmount: b,
    destroyed: _,
    unmounted: x,
    render: k,
    renderTracked: O,
    renderTriggered: N,
    errorCaptured: I,
    serverPrefetch: C,
    // public API
    expose: w,
    inheritAttrs: D,
    // assets
    components: A,
    directives: F,
    filters: de
  } = t, Y = M.NODE_ENV !== "production" ? rb() : null;
  if (M.NODE_ENV !== "production") {
    const [K] = e.propsOptions;
    if (K)
      for (const le in K)
        Y("Props", le);
  }
  if (f && ab(f, s, Y), i)
    for (const K in i) {
      const le = i[K];
      Ae(le) ? (M.NODE_ENV !== "production" ? Object.defineProperty(s, K, {
        value: le.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[K] = le.bind(n), M.NODE_ENV !== "production" && Y("Methods", K)) : M.NODE_ENV !== "production" && Z(
        `Method "${K}" has type "${typeof le}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    M.NODE_ENV !== "production" && !Ae(o) && Z(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const K = o.call(n, n);
    if (M.NODE_ENV !== "production" && Ec(K) && Z(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !$e(K))
      M.NODE_ENV !== "production" && Z("data() should return an object.");
    else if (e.data = us(K), M.NODE_ENV !== "production")
      for (const le in K)
        Y("Data", le), xc(le[0]) || Object.defineProperty(s, le, {
          configurable: !0,
          enumerable: !0,
          get: () => K[le],
          set: dt
        });
  }
  if (Il = !0, r)
    for (const K in r) {
      const le = r[K], be = Ae(le) ? le.bind(n, n) : Ae(le.get) ? le.get.bind(n, n) : dt;
      M.NODE_ENV !== "production" && be === dt && Z(`Computed property "${K}" has no getter.`);
      const Ze = !Ae(le) && Ae(le.set) ? le.set.bind(n) : M.NODE_ENV !== "production" ? () => {
        Z(
          `Write operation failed: computed property "${K}" is readonly.`
        );
      } : dt, W = j({
        get: be,
        set: Ze
      });
      Object.defineProperty(s, K, {
        enumerable: !0,
        configurable: !0,
        get: () => W.value,
        set: (oe) => W.value = oe
      }), M.NODE_ENV !== "production" && Y("Computed", K);
    }
  if (a)
    for (const K in a)
      Xh(a[K], s, n, K);
  if (c) {
    const K = Ae(c) ? c.call(n) : c;
    Reflect.ownKeys(K).forEach((le) => {
      Ci(le, K[le]);
    });
  }
  u && Lu(u, e, "c");
  function re(K, le) {
    me(le) ? le.forEach((be) => K(be.bind(n))) : le && K(le.bind(n));
  }
  if (re(zy, d), re(Tt, p), re(qy, h), re(Yy, m), re(Hy, g), re(Wy, v), re(Jy, I), re(Qy, O), re(Gy, N), re(Kh, b), re(Kr, x), re(Xy, C), me(w))
    if (w.length) {
      const K = e.exposed || (e.exposed = {});
      w.forEach((le) => {
        Object.defineProperty(K, le, {
          get: () => n[le],
          set: (be) => n[le] = be
        });
      });
    } else e.exposed || (e.exposed = {});
  k && e.render === dt && (e.render = k), D != null && (e.inheritAttrs = D), A && (e.components = A), F && (e.directives = F), C && Hh(e);
}
function ab(e, t, n = dt) {
  me(e) && (e = Ml(e));
  for (const s in e) {
    const o = e[s];
    let r;
    $e(o) ? "default" in o ? r = Ft(
      o.from || s,
      o.default,
      !0
    ) : r = Ft(o.from || s) : r = Ft(o), Ye(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, M.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Lu(e, t, n) {
  dn(
    me(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Xh(e, t, n, s) {
  let o = s.includes(".") ? am(n, s) : () => n[s];
  if (Ge(e)) {
    const r = t[e];
    Ae(r) ? Rt(o, r) : M.NODE_ENV !== "production" && Z(`Invalid watch handler specified by key "${e}"`, r);
  } else if (Ae(e))
    Rt(o, e.bind(n));
  else if ($e(e))
    if (me(e))
      e.forEach((r) => Xh(r, t, n, s));
    else {
      const r = Ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ae(r) ? Rt(o, r, e) : M.NODE_ENV !== "production" && Z(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else M.NODE_ENV !== "production" && Z(`Invalid watch option: "${s}"`, e);
}
function Gh(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = r.get(t);
  let c;
  return a ? c = a : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (f) => Yi(c, f, i, !0)
  ), Yi(c, t, i)), $e(t) && r.set(t, c), c;
}
function Yi(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Yi(e, r, n, !0), o && o.forEach(
    (i) => Yi(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      M.NODE_ENV !== "production" && Z(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = lb[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const lb = {
  data: Fu,
  props: Bu,
  emits: Bu,
  // objects
  methods: ir,
  computed: ir,
  // lifecycle
  beforeCreate: bt,
  created: bt,
  beforeMount: bt,
  mounted: bt,
  beforeUpdate: bt,
  updated: bt,
  beforeDestroy: bt,
  beforeUnmount: bt,
  destroyed: bt,
  unmounted: bt,
  activated: bt,
  deactivated: bt,
  errorCaptured: bt,
  serverPrefetch: bt,
  // assets
  components: ir,
  directives: ir,
  // watch
  watch: ub,
  // provide / inject
  provide: Fu,
  inject: cb
};
function Fu(e, t) {
  return t ? e ? function() {
    return st(
      Ae(e) ? e.call(this, this) : e,
      Ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cb(e, t) {
  return ir(Ml(e), Ml(t));
}
function Ml(e) {
  if (me(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function bt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ir(e, t) {
  return e ? st(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Bu(e, t) {
  return e ? me(e) && me(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : st(
    /* @__PURE__ */ Object.create(null),
    Vu(e),
    Vu(t ?? {})
  ) : t;
}
function ub(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = st(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = bt(e[s], t[s]);
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
let db = 0;
function fb(e, t) {
  return function(s, o = null) {
    Ae(s) || (s = st({}, s)), o != null && !$e(o) && (M.NODE_ENV !== "production" && Z("root props passed to app.mount() must be an object."), o = null);
    const r = Qh(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let c = !1;
    const f = r.app = {
      _uid: db++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Qu,
      get config() {
        return r.config;
      },
      set config(u) {
        M.NODE_ENV !== "production" && Z(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...d) {
        return i.has(u) ? M.NODE_ENV !== "production" && Z("Plugin has already been applied to target app.") : u && Ae(u.install) ? (i.add(u), u.install(f, ...d)) : Ae(u) ? (i.add(u), u(f, ...d)) : M.NODE_ENV !== "production" && Z(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return r.mixins.includes(u) ? M.NODE_ENV !== "production" && Z(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), f;
      },
      component(u, d) {
        return M.NODE_ENV !== "production" && $l(u, r.config), d ? (M.NODE_ENV !== "production" && r.components[u] && Z(`Component "${u}" has already been registered in target app.`), r.components[u] = d, f) : r.components[u];
      },
      directive(u, d) {
        return M.NODE_ENV !== "production" && Ih(u), d ? (M.NODE_ENV !== "production" && r.directives[u] && Z(`Directive "${u}" has already been registered in target app.`), r.directives[u] = d, f) : r.directives[u];
      },
      mount(u, d, p) {
        if (c)
          M.NODE_ENV !== "production" && Z(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          M.NODE_ENV !== "production" && u.__vue_app__ && Z(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = f._ceVNode || ue(s, o);
          return h.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), M.NODE_ENV !== "production" && (r.reload = () => {
            const m = kn(h);
            m.el = null, e(m, u, p);
          }), e(h, u, p), c = !0, f._container = u, u.__vue_app__ = f, M.NODE_ENV !== "production" && (f._instance = h.component, ky(f, Qu)), _a(h.component);
        }
      },
      onUnmount(u) {
        M.NODE_ENV !== "production" && typeof u != "function" && Z(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        c ? (dn(
          a,
          f._instance,
          16
        ), e(null, f._container), M.NODE_ENV !== "production" && (f._instance = null, xy(f)), delete f._container.__vue_app__) : M.NODE_ENV !== "production" && Z("Cannot unmount an app that is not mounted.");
      },
      provide(u, d) {
        return M.NODE_ENV !== "production" && u in r.provides && (Fe(r.provides, u) ? Z(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : Z(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[u] = d, f;
      },
      runWithContext(u) {
        const d = $s;
        $s = f;
        try {
          return u();
        } finally {
          $s = d;
        }
      }
    };
    return f;
  };
}
let $s = null;
function Ci(e, t) {
  if (!ct)
    M.NODE_ENV !== "production" && Z("provide() can only be used inside setup().");
  else {
    let n = ct.provides;
    const s = ct.parent && ct.parent.provides;
    s === n && (n = ct.provides = Object.create(s)), n[e] = t;
  }
}
function Ft(e, t, n = !1) {
  const s = ct || rt;
  if (s || $s) {
    let o = $s ? $s._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Ae(t) ? t.call(s && s.proxy) : t;
    M.NODE_ENV !== "production" && Z(`injection "${String(e)}" not found.`);
  } else M.NODE_ENV !== "production" && Z("inject() can only be used inside setup() or functional components.");
}
function pb() {
  return !!(ct || rt || $s);
}
const Jh = {}, Zh = () => Object.create(Jh), em = (e) => Object.getPrototypeOf(e) === Jh;
function hb(e, t, n, s = !1) {
  const o = {}, r = Zh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), tm(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  M.NODE_ENV !== "production" && sm(t || {}, o, e), n ? e.props = s ? o : vh(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function mb(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function gb(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, a = Oe(o), [c] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(M.NODE_ENV !== "production" && mb(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let p = u[d];
        if (va(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (c)
          if (Fe(r, p))
            h !== r[p] && (r[p] = h, f = !0);
          else {
            const m = _t(p);
            o[m] = Pl(
              c,
              a,
              m,
              h,
              e,
              !1
            );
          }
        else
          h !== r[p] && (r[p] = h, f = !0);
      }
    }
  } else {
    tm(e, t, o, r) && (f = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !Fe(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Wn(d)) === d || !Fe(t, u))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[d] = Pl(
        c,
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
  f && wn(e.attrs, "set", ""), M.NODE_ENV !== "production" && sm(t || {}, o, e);
}
function tm(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let c in t) {
      if (cr(c))
        continue;
      const f = t[c];
      let u;
      o && Fe(o, u = _t(c)) ? !r || !r.includes(u) ? n[u] = f : (a || (a = {}))[u] = f : va(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f, i = !0);
    }
  if (r) {
    const c = Oe(n), f = a || Be;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = Pl(
        o,
        c,
        d,
        f[d],
        e,
        !Fe(f, d)
      );
    }
  }
  return i;
}
function Pl(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const a = Fe(i, "default");
    if (a && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && Ae(c)) {
        const { propsDefaults: f } = o;
        if (n in f)
          s = f[n];
        else {
          const u = qr(o);
          s = f[n] = c.call(
            null,
            t
          ), u();
        }
      } else
        s = c;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !a ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Wn(n)) && (s = !0));
  }
  return s;
}
const vb = /* @__PURE__ */ new WeakMap();
function nm(e, t, n = !1) {
  const s = n ? vb : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, a = [];
  let c = !1;
  if (!Ae(e)) {
    const u = (d) => {
      c = !0;
      const [p, h] = nm(d, t, !0);
      st(i, p), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return $e(e) && s.set(e, yo), yo;
  if (me(r))
    for (let u = 0; u < r.length; u++) {
      M.NODE_ENV !== "production" && !Ge(r[u]) && Z("props must be strings when using array syntax.", r[u]);
      const d = _t(r[u]);
      $u(d) && (i[d] = Be);
    }
  else if (r) {
    M.NODE_ENV !== "production" && !$e(r) && Z("invalid props options", r);
    for (const u in r) {
      const d = _t(u);
      if ($u(d)) {
        const p = r[u], h = i[d] = me(p) || Ae(p) ? { type: p } : st({}, p), m = h.type;
        let g = !1, v = !0;
        if (me(m))
          for (let y = 0; y < m.length; ++y) {
            const b = m[y], _ = Ae(b) && b.name;
            if (_ === "Boolean") {
              g = !0;
              break;
            } else _ === "String" && (v = !1);
          }
        else
          g = Ae(m) && m.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = g, h[
          1
          /* shouldCastTrue */
        ] = v, (g || Fe(h, "default")) && a.push(d);
      }
    }
  }
  const f = [i, a];
  return $e(e) && s.set(e, f), f;
}
function $u(e) {
  return e[0] !== "$" && !cr(e) ? !0 : (M.NODE_ENV !== "production" && Z(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function _b(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function sm(e, t, n) {
  const s = Oe(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => _t(i));
  for (const i in o) {
    let a = o[i];
    a != null && yb(
      i,
      s[i],
      a,
      M.NODE_ENV !== "production" ? Sn(s) : s,
      !r.includes(i)
    );
  }
}
function yb(e, t, n, s, o) {
  const { type: r, required: i, validator: a, skipCheck: c } = n;
  if (i && o) {
    Z('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !c) {
      let f = !1;
      const u = me(r) ? r : [r], d = [];
      for (let p = 0; p < u.length && !f; p++) {
        const { valid: h, expectedType: m } = Eb(t, u[p]);
        d.push(m || ""), f = h;
      }
      if (!f) {
        Z(wb(e, t, d));
        return;
      }
    }
    a && !a(t, s) && Z('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const bb = /* @__PURE__ */ zn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Eb(e, t) {
  let n;
  const s = _b(t);
  if (s === "null")
    n = e === null;
  else if (bb(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = $e(e) : s === "Array" ? n = me(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function wb(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Hs).join(" | ")}`;
  const o = n[0], r = wc(t), i = ju(t, o), a = ju(t, r);
  return n.length === 1 && Uu(o) && !Ab(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, Uu(r) && (s += `with value ${a}.`), s;
}
function ju(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Uu(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Ab(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Rc = (e) => e[0] === "_" || e === "$stable", Ic = (e) => me(e) ? e.map(tn) : [tn(e)], Sb = (e, t, n) => {
  if (t._n)
    return t;
  const s = fe((...o) => (M.NODE_ENV !== "production" && ct && !(n === null && rt) && !(n && n.root !== ct.root) && Z(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ic(t(...o))), n);
  return s._c = !1, s;
}, om = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Rc(o)) continue;
    const r = e[o];
    if (Ae(r))
      t[o] = Sb(o, r, s);
    else if (r != null) {
      M.NODE_ENV !== "production" && Z(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Ic(r);
      t[o] = () => i;
    }
  }
}, rm = (e, t) => {
  M.NODE_ENV !== "production" && !Wr(e.vnode) && Z(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ic(t);
  e.slots.default = () => n;
}, Vl = (e, t, n) => {
  for (const s in t)
    (n || !Rc(s)) && (e[s] = t[s]);
}, Cb = (e, t, n) => {
  const s = e.slots = Zh();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && Er(s, "__", o, !0);
    const r = t._;
    r ? (Vl(s, t, n), n && Er(s, "_", r, !0)) : om(t, s);
  } else t && rm(e, t);
}, Ob = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = Be;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? M.NODE_ENV !== "production" && nn ? (Vl(o, t, n), wn(e, "set", "$slots")) : n && a === 1 ? r = !1 : Vl(o, t, n) : (r = !t.$stable, om(t, o)), i = t;
  } else t && (rm(e, t), i = { default: 1 });
  if (r)
    for (const a in o)
      !Rc(a) && i[a] == null && delete o[a];
};
let Qo, rs;
function oo(e, t) {
  e.appContext.config.performance && Xi() && rs.mark(`vue-${t}-${e.uid}`), M.NODE_ENV !== "production" && Py(e, t, Xi() ? rs.now() : Date.now());
}
function ro(e, t) {
  if (e.appContext.config.performance && Xi()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    rs.mark(s), rs.measure(
      `<${ya(e, e.type)}> ${t}`,
      n,
      s
    ), rs.clearMarks(n), rs.clearMarks(s);
  }
  M.NODE_ENV !== "production" && Vy(e, t, Xi() ? rs.now() : Date.now());
}
function Xi() {
  return Qo !== void 0 || (typeof window < "u" && window.performance ? (Qo = !0, rs = window.performance) : Qo = !1), Qo;
}
function Tb() {
  const e = [];
  if (M.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Et = Ub;
function Nb(e) {
  return Db(e);
}
function Db(e, t) {
  Tb();
  const n = $r();
  n.__VUE__ = !0, M.NODE_ENV !== "production" && Dh(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: a,
    createComment: c,
    setText: f,
    setElementText: u,
    parentNode: d,
    nextSibling: p,
    setScopeId: h = dt,
    insertStaticContent: m
  } = e, g = (E, S, V, z = null, $ = null, q = null, ae = void 0, ee = null, te = M.NODE_ENV !== "production" && nn ? !1 : !!S.dynamicChildren) => {
    if (E === S)
      return;
    E && !Ds(E, S) && (z = Q(E), pe(E, $, q, !0), E = null), S.patchFlag === -2 && (te = !1, S.dynamicChildren = null);
    const { type: J, ref: _e, shapeFlag: ie } = S;
    switch (J) {
      case zr:
        v(E, S, V, z);
        break;
      case at:
        y(E, S, V, z);
        break;
      case hr:
        E == null ? b(S, V, z, ae) : M.NODE_ENV !== "production" && _(E, S, V, ae);
        break;
      case Se:
        F(
          E,
          S,
          V,
          z,
          $,
          q,
          ae,
          ee,
          te
        );
        break;
      default:
        ie & 1 ? O(
          E,
          S,
          V,
          z,
          $,
          q,
          ae,
          ee,
          te
        ) : ie & 6 ? de(
          E,
          S,
          V,
          z,
          $,
          q,
          ae,
          ee,
          te
        ) : ie & 64 || ie & 128 ? J.process(
          E,
          S,
          V,
          z,
          $,
          q,
          ae,
          ee,
          te,
          Re
        ) : M.NODE_ENV !== "production" && Z("Invalid VNode type:", J, `(${typeof J})`);
    }
    _e != null && $ ? fr(_e, E && E.ref, q, S || E, !S) : _e == null && E && E.ref != null && fr(E.ref, null, q, E, !0);
  }, v = (E, S, V, z) => {
    if (E == null)
      s(
        S.el = a(S.children),
        V,
        z
      );
    else {
      const $ = S.el = E.el;
      S.children !== E.children && f($, S.children);
    }
  }, y = (E, S, V, z) => {
    E == null ? s(
      S.el = c(S.children || ""),
      V,
      z
    ) : S.el = E.el;
  }, b = (E, S, V, z) => {
    [E.el, E.anchor] = m(
      E.children,
      S,
      V,
      z,
      E.el,
      E.anchor
    );
  }, _ = (E, S, V, z) => {
    if (S.children !== E.children) {
      const $ = p(E.anchor);
      k(E), [S.el, S.anchor] = m(
        S.children,
        V,
        $,
        z
      );
    } else
      S.el = E.el, S.anchor = E.anchor;
  }, x = ({ el: E, anchor: S }, V, z) => {
    let $;
    for (; E && E !== S; )
      $ = p(E), s(E, V, z), E = $;
    s(S, V, z);
  }, k = ({ el: E, anchor: S }) => {
    let V;
    for (; E && E !== S; )
      V = p(E), o(E), E = V;
    o(S);
  }, O = (E, S, V, z, $, q, ae, ee, te) => {
    S.type === "svg" ? ae = "svg" : S.type === "math" && (ae = "mathml"), E == null ? N(
      S,
      V,
      z,
      $,
      q,
      ae,
      ee,
      te
    ) : w(
      E,
      S,
      $,
      q,
      ae,
      ee,
      te
    );
  }, N = (E, S, V, z, $, q, ae, ee) => {
    let te, J;
    const { props: _e, shapeFlag: ie, transition: ve, dirs: Ce } = E;
    if (te = E.el = i(
      E.type,
      q,
      _e && _e.is,
      _e
    ), ie & 8 ? u(te, E.children) : ie & 16 && C(
      E.children,
      te,
      null,
      z,
      $,
      qa(E, q),
      ae,
      ee
    ), Ce && Es(E, null, z, "created"), I(te, E, E.scopeId, ae, z), _e) {
      for (const We in _e)
        We !== "value" && !cr(We) && r(te, We, null, _e[We], q, z);
      "value" in _e && r(te, "value", null, _e.value, q), (J = _e.onVnodeBeforeMount) && _n(J, z, E);
    }
    M.NODE_ENV !== "production" && (Er(te, "__vnode", E, !0), Er(te, "__vueParentComponent", z, !0)), Ce && Es(E, null, z, "beforeMount");
    const Ve = kb($, ve);
    Ve && ve.beforeEnter(te), s(te, S, V), ((J = _e && _e.onVnodeMounted) || Ve || Ce) && Et(() => {
      J && _n(J, z, E), Ve && ve.enter(te), Ce && Es(E, null, z, "mounted");
    }, $);
  }, I = (E, S, V, z, $) => {
    if (V && h(E, V), z)
      for (let q = 0; q < z.length; q++)
        h(E, z[q]);
    if ($) {
      let q = $.subTree;
      if (M.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && (q = Mc(q.children) || q), S === q || dm(q.type) && (q.ssContent === S || q.ssFallback === S)) {
        const ae = $.vnode;
        I(
          E,
          ae,
          ae.scopeId,
          ae.slotScopeIds,
          $.parent
        );
      }
    }
  }, C = (E, S, V, z, $, q, ae, ee, te = 0) => {
    for (let J = te; J < E.length; J++) {
      const _e = E[J] = ee ? ss(E[J]) : tn(E[J]);
      g(
        null,
        _e,
        S,
        V,
        z,
        $,
        q,
        ae,
        ee
      );
    }
  }, w = (E, S, V, z, $, q, ae) => {
    const ee = S.el = E.el;
    M.NODE_ENV !== "production" && (ee.__vnode = S);
    let { patchFlag: te, dynamicChildren: J, dirs: _e } = S;
    te |= E.patchFlag & 16;
    const ie = E.props || Be, ve = S.props || Be;
    let Ce;
    if (V && ws(V, !1), (Ce = ve.onVnodeBeforeUpdate) && _n(Ce, V, S, E), _e && Es(S, E, V, "beforeUpdate"), V && ws(V, !0), M.NODE_ENV !== "production" && nn && (te = 0, ae = !1, J = null), (ie.innerHTML && ve.innerHTML == null || ie.textContent && ve.textContent == null) && u(ee, ""), J ? (D(
      E.dynamicChildren,
      J,
      ee,
      V,
      z,
      qa(S, $),
      q
    ), M.NODE_ENV !== "production" && pr(E, S)) : ae || be(
      E,
      S,
      ee,
      null,
      V,
      z,
      qa(S, $),
      q,
      !1
    ), te > 0) {
      if (te & 16)
        A(ee, ie, ve, V, $);
      else if (te & 2 && ie.class !== ve.class && r(ee, "class", null, ve.class, $), te & 4 && r(ee, "style", ie.style, ve.style, $), te & 8) {
        const Ve = S.dynamicProps;
        for (let We = 0; We < Ve.length; We++) {
          const ze = Ve[We], Nt = ie[ze], Dt = ve[ze];
          (Dt !== Nt || ze === "value") && r(ee, ze, Nt, Dt, $, V);
        }
      }
      te & 1 && E.children !== S.children && u(ee, S.children);
    } else !ae && J == null && A(ee, ie, ve, V, $);
    ((Ce = ve.onVnodeUpdated) || _e) && Et(() => {
      Ce && _n(Ce, V, S, E), _e && Es(S, E, V, "updated");
    }, z);
  }, D = (E, S, V, z, $, q, ae) => {
    for (let ee = 0; ee < S.length; ee++) {
      const te = E[ee], J = S[ee], _e = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        te.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (te.type === Se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ds(te, J) || // - In the case of a component, it could contain anything.
        te.shapeFlag & 198) ? d(te.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          V
        )
      );
      g(
        te,
        J,
        _e,
        null,
        z,
        $,
        q,
        ae,
        !0
      );
    }
  }, A = (E, S, V, z, $) => {
    if (S !== V) {
      if (S !== Be)
        for (const q in S)
          !cr(q) && !(q in V) && r(
            E,
            q,
            S[q],
            null,
            $,
            z
          );
      for (const q in V) {
        if (cr(q)) continue;
        const ae = V[q], ee = S[q];
        ae !== ee && q !== "value" && r(E, q, ee, ae, $, z);
      }
      "value" in V && r(E, "value", S.value, V.value, $);
    }
  }, F = (E, S, V, z, $, q, ae, ee, te) => {
    const J = S.el = E ? E.el : a(""), _e = S.anchor = E ? E.anchor : a("");
    let { patchFlag: ie, dynamicChildren: ve, slotScopeIds: Ce } = S;
    M.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (nn || ie & 2048) && (ie = 0, te = !1, ve = null), Ce && (ee = ee ? ee.concat(Ce) : Ce), E == null ? (s(J, V, z), s(_e, V, z), C(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      V,
      _e,
      $,
      q,
      ae,
      ee,
      te
    )) : ie > 0 && ie & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (D(
      E.dynamicChildren,
      ve,
      V,
      $,
      q,
      ae,
      ee
    ), M.NODE_ENV !== "production" ? pr(E, S) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (S.key != null || $ && S === $.subTree) && pr(
        E,
        S,
        !0
        /* shallow */
      )
    )) : be(
      E,
      S,
      V,
      _e,
      $,
      q,
      ae,
      ee,
      te
    );
  }, de = (E, S, V, z, $, q, ae, ee, te) => {
    S.slotScopeIds = ee, E == null ? S.shapeFlag & 512 ? $.ctx.activate(
      S,
      V,
      z,
      ae,
      te
    ) : Y(
      S,
      V,
      z,
      $,
      q,
      ae,
      te
    ) : re(E, S, te);
  }, Y = (E, S, V, z, $, q, ae) => {
    const ee = E.component = qb(
      E,
      z,
      $
    );
    if (M.NODE_ENV !== "production" && ee.type.__hmrId && Oy(ee), M.NODE_ENV !== "production" && (Ei(E), oo(ee, "mount")), Wr(E) && (ee.ctx.renderer = Re), M.NODE_ENV !== "production" && oo(ee, "init"), Xb(ee, !1, ae), M.NODE_ENV !== "production" && ro(ee, "init"), M.NODE_ENV !== "production" && nn && (E.el = null), ee.asyncDep) {
      if ($ && $.registerDep(ee, K, ae), !E.el) {
        const te = ee.subTree = ue(at);
        y(null, te, S, V);
      }
    } else
      K(
        ee,
        E,
        S,
        V,
        $,
        q,
        ae
      );
    M.NODE_ENV !== "production" && (wi(), ro(ee, "mount"));
  }, re = (E, S, V) => {
    const z = S.component = E.component;
    if ($b(E, S, V))
      if (z.asyncDep && !z.asyncResolved) {
        M.NODE_ENV !== "production" && Ei(S), le(z, S, V), M.NODE_ENV !== "production" && wi();
        return;
      } else
        z.next = S, z.update();
    else
      S.el = E.el, z.vnode = S;
  }, K = (E, S, V, z, $, q, ae) => {
    const ee = () => {
      if (E.isMounted) {
        let { next: ie, bu: ve, u: Ce, parent: Ve, vnode: We } = E;
        {
          const gn = im(E);
          if (gn) {
            ie && (ie.el = We.el, le(E, ie, ae)), gn.asyncDep.then(() => {
              E.isUnmounted || ee();
            });
            return;
          }
        }
        let ze = ie, Nt;
        M.NODE_ENV !== "production" && Ei(ie || E.vnode), ws(E, !1), ie ? (ie.el = We.el, le(E, ie, ae)) : ie = We, ve && uo(ve), (Nt = ie.props && ie.props.onVnodeBeforeUpdate) && _n(Nt, Ve, ie, We), ws(E, !0), M.NODE_ENV !== "production" && oo(E, "render");
        const Dt = Wu(E);
        M.NODE_ENV !== "production" && ro(E, "render");
        const mn = E.subTree;
        E.subTree = Dt, M.NODE_ENV !== "production" && oo(E, "patch"), g(
          mn,
          Dt,
          // parent may have changed if it's in a teleport
          d(mn.el),
          // anchor may have changed if it's in a fragment
          Q(mn),
          E,
          $,
          q
        ), M.NODE_ENV !== "production" && ro(E, "patch"), ie.el = Dt.el, ze === null && jb(E, Dt.el), Ce && Et(Ce, $), (Nt = ie.props && ie.props.onVnodeUpdated) && Et(
          () => _n(Nt, Ve, ie, We),
          $
        ), M.NODE_ENV !== "production" && kh(E), M.NODE_ENV !== "production" && wi();
      } else {
        let ie;
        const { el: ve, props: Ce } = S, { bm: Ve, m: We, parent: ze, root: Nt, type: Dt } = E, mn = Eo(S);
        ws(E, !1), Ve && uo(Ve), !mn && (ie = Ce && Ce.onVnodeBeforeMount) && _n(ie, ze, S), ws(E, !0);
        {
          Nt.ce && // @ts-expect-error _def is private
          Nt.ce._def.shadowRoot !== !1 && Nt.ce._injectChildStyle(Dt), M.NODE_ENV !== "production" && oo(E, "render");
          const gn = E.subTree = Wu(E);
          M.NODE_ENV !== "production" && ro(E, "render"), M.NODE_ENV !== "production" && oo(E, "patch"), g(
            null,
            gn,
            V,
            z,
            E,
            $,
            q
          ), M.NODE_ENV !== "production" && ro(E, "patch"), S.el = gn.el;
        }
        if (We && Et(We, $), !mn && (ie = Ce && Ce.onVnodeMounted)) {
          const gn = S;
          Et(
            () => _n(ie, ze, gn),
            $
          );
        }
        (S.shapeFlag & 256 || ze && Eo(ze.vnode) && ze.vnode.shapeFlag & 256) && E.a && Et(E.a, $), E.isMounted = !0, M.NODE_ENV !== "production" && Ry(E), S = V = z = null;
      }
    };
    E.scope.on();
    const te = E.effect = new th(ee);
    E.scope.off();
    const J = E.update = te.run.bind(te), _e = E.job = te.runIfDirty.bind(te);
    _e.i = E, _e.id = E.uid, te.scheduler = () => pa(_e), ws(E, !0), M.NODE_ENV !== "production" && (te.onTrack = E.rtc ? (ie) => uo(E.rtc, ie) : void 0, te.onTrigger = E.rtg ? (ie) => uo(E.rtg, ie) : void 0), J();
  }, le = (E, S, V) => {
    S.component = E;
    const z = E.vnode.props;
    E.vnode = S, E.next = null, gb(E, S.props, z, V), Ob(E, S.children, V), ln(), Du(E), cn();
  }, be = (E, S, V, z, $, q, ae, ee, te = !1) => {
    const J = E && E.children, _e = E ? E.shapeFlag : 0, ie = S.children, { patchFlag: ve, shapeFlag: Ce } = S;
    if (ve > 0) {
      if (ve & 128) {
        W(
          J,
          ie,
          V,
          z,
          $,
          q,
          ae,
          ee,
          te
        );
        return;
      } else if (ve & 256) {
        Ze(
          J,
          ie,
          V,
          z,
          $,
          q,
          ae,
          ee,
          te
        );
        return;
      }
    }
    Ce & 8 ? (_e & 16 && L(J, $, q), ie !== J && u(V, ie)) : _e & 16 ? Ce & 16 ? W(
      J,
      ie,
      V,
      z,
      $,
      q,
      ae,
      ee,
      te
    ) : L(J, $, q, !0) : (_e & 8 && u(V, ""), Ce & 16 && C(
      ie,
      V,
      z,
      $,
      q,
      ae,
      ee,
      te
    ));
  }, Ze = (E, S, V, z, $, q, ae, ee, te) => {
    E = E || yo, S = S || yo;
    const J = E.length, _e = S.length, ie = Math.min(J, _e);
    let ve;
    for (ve = 0; ve < ie; ve++) {
      const Ce = S[ve] = te ? ss(S[ve]) : tn(S[ve]);
      g(
        E[ve],
        Ce,
        V,
        null,
        $,
        q,
        ae,
        ee,
        te
      );
    }
    J > _e ? L(
      E,
      $,
      q,
      !0,
      !1,
      ie
    ) : C(
      S,
      V,
      z,
      $,
      q,
      ae,
      ee,
      te,
      ie
    );
  }, W = (E, S, V, z, $, q, ae, ee, te) => {
    let J = 0;
    const _e = S.length;
    let ie = E.length - 1, ve = _e - 1;
    for (; J <= ie && J <= ve; ) {
      const Ce = E[J], Ve = S[J] = te ? ss(S[J]) : tn(S[J]);
      if (Ds(Ce, Ve))
        g(
          Ce,
          Ve,
          V,
          null,
          $,
          q,
          ae,
          ee,
          te
        );
      else
        break;
      J++;
    }
    for (; J <= ie && J <= ve; ) {
      const Ce = E[ie], Ve = S[ve] = te ? ss(S[ve]) : tn(S[ve]);
      if (Ds(Ce, Ve))
        g(
          Ce,
          Ve,
          V,
          null,
          $,
          q,
          ae,
          ee,
          te
        );
      else
        break;
      ie--, ve--;
    }
    if (J > ie) {
      if (J <= ve) {
        const Ce = ve + 1, Ve = Ce < _e ? S[Ce].el : z;
        for (; J <= ve; )
          g(
            null,
            S[J] = te ? ss(S[J]) : tn(S[J]),
            V,
            Ve,
            $,
            q,
            ae,
            ee,
            te
          ), J++;
      }
    } else if (J > ve)
      for (; J <= ie; )
        pe(E[J], $, q, !0), J++;
    else {
      const Ce = J, Ve = J, We = /* @__PURE__ */ new Map();
      for (J = Ve; J <= ve; J++) {
        const yt = S[J] = te ? ss(S[J]) : tn(S[J]);
        yt.key != null && (M.NODE_ENV !== "production" && We.has(yt.key) && Z(
          "Duplicate keys found during update:",
          JSON.stringify(yt.key),
          "Make sure keys are unique."
        ), We.set(yt.key, J));
      }
      let ze, Nt = 0;
      const Dt = ve - Ve + 1;
      let mn = !1, gn = 0;
      const Xo = new Array(Dt);
      for (J = 0; J < Dt; J++) Xo[J] = 0;
      for (J = Ce; J <= ie; J++) {
        const yt = E[J];
        if (Nt >= Dt) {
          pe(yt, $, q, !0);
          continue;
        }
        let vn;
        if (yt.key != null)
          vn = We.get(yt.key);
        else
          for (ze = Ve; ze <= ve; ze++)
            if (Xo[ze - Ve] === 0 && Ds(yt, S[ze])) {
              vn = ze;
              break;
            }
        vn === void 0 ? pe(yt, $, q, !0) : (Xo[vn - Ve] = J + 1, vn >= gn ? gn = vn : mn = !0, g(
          yt,
          S[vn],
          V,
          null,
          $,
          q,
          ae,
          ee,
          te
        ), Nt++);
      }
      const wu = mn ? xb(Xo) : yo;
      for (ze = wu.length - 1, J = Dt - 1; J >= 0; J--) {
        const yt = Ve + J, vn = S[yt], Au = yt + 1 < _e ? S[yt + 1].el : z;
        Xo[J] === 0 ? g(
          null,
          vn,
          V,
          Au,
          $,
          q,
          ae,
          ee,
          te
        ) : mn && (ze < 0 || J !== wu[ze] ? oe(vn, V, Au, 2) : ze--);
      }
    }
  }, oe = (E, S, V, z, $ = null) => {
    const { el: q, type: ae, transition: ee, children: te, shapeFlag: J } = E;
    if (J & 6) {
      oe(E.component.subTree, S, V, z);
      return;
    }
    if (J & 128) {
      E.suspense.move(S, V, z);
      return;
    }
    if (J & 64) {
      ae.move(E, S, V, Re);
      return;
    }
    if (ae === Se) {
      s(q, S, V);
      for (let ie = 0; ie < te.length; ie++)
        oe(te[ie], S, V, z);
      s(E.anchor, S, V);
      return;
    }
    if (ae === hr) {
      x(E, S, V);
      return;
    }
    if (z !== 2 && J & 1 && ee)
      if (z === 0)
        ee.beforeEnter(q), s(q, S, V), Et(() => ee.enter(q), $);
      else {
        const { leave: ie, delayLeave: ve, afterLeave: Ce } = ee, Ve = () => {
          E.ctx.isUnmounted ? o(q) : s(q, S, V);
        }, We = () => {
          ie(q, () => {
            Ve(), Ce && Ce();
          });
        };
        ve ? ve(q, Ve, We) : We();
      }
    else
      s(q, S, V);
  }, pe = (E, S, V, z = !1, $ = !1) => {
    const {
      type: q,
      props: ae,
      ref: ee,
      children: te,
      dynamicChildren: J,
      shapeFlag: _e,
      patchFlag: ie,
      dirs: ve,
      cacheIndex: Ce
    } = E;
    if (ie === -2 && ($ = !1), ee != null && (ln(), fr(ee, null, V, E, !0), cn()), Ce != null && (S.renderCache[Ce] = void 0), _e & 256) {
      S.ctx.deactivate(E);
      return;
    }
    const Ve = _e & 1 && ve, We = !Eo(E);
    let ze;
    if (We && (ze = ae && ae.onVnodeBeforeUnmount) && _n(ze, S, E), _e & 6)
      He(E.component, V, z);
    else {
      if (_e & 128) {
        E.suspense.unmount(V, z);
        return;
      }
      Ve && Es(E, null, S, "beforeUnmount"), _e & 64 ? E.type.remove(
        E,
        S,
        V,
        Re,
        z
      ) : J && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !J.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (q !== Se || ie > 0 && ie & 64) ? L(
        J,
        S,
        V,
        !1,
        !0
      ) : (q === Se && ie & 384 || !$ && _e & 16) && L(te, S, V), z && we(E);
    }
    (We && (ze = ae && ae.onVnodeUnmounted) || Ve) && Et(() => {
      ze && _n(ze, S, E), Ve && Es(E, null, S, "unmounted");
    }, V);
  }, we = (E) => {
    const { type: S, el: V, anchor: z, transition: $ } = E;
    if (S === Se) {
      M.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && $ && !$.persisted ? E.children.forEach((ae) => {
        ae.type === at ? o(ae.el) : we(ae);
      }) : ke(V, z);
      return;
    }
    if (S === hr) {
      k(E);
      return;
    }
    const q = () => {
      o(V), $ && !$.persisted && $.afterLeave && $.afterLeave();
    };
    if (E.shapeFlag & 1 && $ && !$.persisted) {
      const { leave: ae, delayLeave: ee } = $, te = () => ae(V, q);
      ee ? ee(E.el, q, te) : te();
    } else
      q();
  }, ke = (E, S) => {
    let V;
    for (; E !== S; )
      V = p(E), o(E), E = V;
    o(S);
  }, He = (E, S, V) => {
    M.NODE_ENV !== "production" && E.type.__hmrId && Ty(E);
    const {
      bum: z,
      scope: $,
      job: q,
      subTree: ae,
      um: ee,
      m: te,
      a: J,
      parent: _e,
      slots: { __: ie }
    } = E;
    Hu(te), Hu(J), z && uo(z), _e && me(ie) && ie.forEach((ve) => {
      _e.renderCache[ve] = void 0;
    }), $.stop(), q && (q.flags |= 8, pe(ae, E, S, V)), ee && Et(ee, S), Et(() => {
      E.isUnmounted = !0;
    }, S), S && S.pendingBranch && !S.isUnmounted && E.asyncDep && !E.asyncResolved && E.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve()), M.NODE_ENV !== "production" && My(E);
  }, L = (E, S, V, z = !1, $ = !1, q = 0) => {
    for (let ae = q; ae < E.length; ae++)
      pe(E[ae], S, V, z, $);
  }, Q = (E) => {
    if (E.shapeFlag & 6)
      return Q(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const S = p(E.anchor || E.el), V = S && S[Mh];
    return V ? p(V) : S;
  };
  let se = !1;
  const ge = (E, S, V) => {
    E == null ? S._vnode && pe(S._vnode, null, null, !0) : g(
      S._vnode || null,
      E,
      S,
      null,
      null,
      null,
      V
    ), S._vnode = E, se || (se = !0, Du(), Oh(), se = !1);
  }, Re = {
    p: g,
    um: pe,
    m: oe,
    r: we,
    mt: Y,
    mc: C,
    pc: be,
    pbc: D,
    n: Q,
    o: e
  };
  return {
    render: ge,
    hydrate: void 0,
    createApp: fb(ge)
  };
}
function qa({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ws({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function kb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pr(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (me(s) && me(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let a = o[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[r] = ss(o[r]), a.el = i.el), !n && a.patchFlag !== -2 && pr(i, a)), a.type === zr && (a.el = i.el), a.type === at && !a.el && (a.el = i.el), M.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function xb(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, a;
  const c = e.length;
  for (s = 0; s < c; s++) {
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
function im(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : im(t);
}
function Hu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Rb = Symbol.for("v-scx"), Ib = () => {
  {
    const e = Ft(Rb);
    return e || M.NODE_ENV !== "production" && Z(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ma(e, t) {
  return ga(e, null, t);
}
function Mb(e, t) {
  return ga(
    e,
    null,
    M.NODE_ENV !== "production" ? st({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Rt(e, t, n) {
  return M.NODE_ENV !== "production" && !Ae(t) && Z(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ga(e, t, n);
}
function ga(e, t, n = Be) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  M.NODE_ENV !== "production" && !t && (s !== void 0 && Z(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && Z(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && Z(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = st({}, n);
  M.NODE_ENV !== "production" && (a.onWarn = Z);
  const c = t && s || !t && r !== "post";
  let f;
  if (Nr) {
    if (r === "sync") {
      const h = Ib();
      f = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!c) {
      const h = () => {
      };
      return h.stop = dt, h.resume = dt, h.pause = dt, h;
    }
  }
  const u = ct;
  a.call = (h, m, g) => dn(h, u, m, g);
  let d = !1;
  r === "post" ? a.scheduler = (h) => {
    Et(h, u && u.suspense);
  } : r !== "sync" && (d = !0, a.scheduler = (h, m) => {
    m ? h() : pa(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const p = vy(e, t, a);
  return Nr && (f ? f.push(p) : c && p()), p;
}
function Pb(e, t, n) {
  const s = this.proxy, o = Ge(e) ? e.includes(".") ? am(s, e) : () => s[e] : e.bind(s, s);
  let r;
  Ae(t) ? r = t : (r = t.handler, n = t);
  const i = qr(this), a = ga(o, r.bind(s), n);
  return i(), a;
}
function am(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Vb(e, t, n = Be) {
  const s = Yn();
  if (M.NODE_ENV !== "production" && !s)
    return Z("useModel() called without active instance."), H();
  const o = _t(t);
  if (M.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return Z(`useModel() called with prop "${t}" which is not declared.`), H();
  const r = Wn(t), i = lm(e, o), a = dy((c, f) => {
    let u, d = Be, p;
    return Mb(() => {
      const h = e[o];
      kt(u, h) && (u = h, f());
    }), {
      get() {
        return c(), n.get ? n.get(u) : u;
      },
      set(h) {
        const m = n.set ? n.set(h) : h;
        if (!kt(m, u) && !(d !== Be && kt(h, d)))
          return;
        const g = s.vnode.props;
        g && // check if parent has passed v-model
        (t in g || o in g || r in g) && (`onUpdate:${t}` in g || `onUpdate:${o}` in g || `onUpdate:${r}` in g) || (u = h, f()), s.emit(`update:${t}`, m), kt(h, m) && kt(h, d) && !kt(m, p) && f(), d = h, p = m;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? i || Be : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const lm = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_t(t)}Modifiers`] || e[`${Wn(t)}Modifiers`];
function Lb(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Be;
  if (M.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(t in u))
        (!d || !(Cs(_t(t)) in d)) && Z(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Cs(_t(t))}" prop.`
        );
      else {
        const p = u[t];
        Ae(p) && (p(...n) || Z(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && lm(s, t.slice(7));
  if (i && (i.trim && (o = n.map((u) => Ge(u) ? u.trim() : u)), i.number && (o = n.map(ji))), M.NODE_ENV !== "production" && Ly(e, t, o), M.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && s[Cs(u)] && Z(
      `Event "${u}" is emitted in component ${ya(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Wn(
        t
      )}" instead of "${t}".`
    );
  }
  let a, c = s[a = Cs(t)] || // also try camelCase event handler (#2249)
  s[a = Cs(_t(t))];
  !c && r && (c = s[a = Cs(Wn(t))]), c && dn(
    c,
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
  if (!Ae(e)) {
    const c = (f) => {
      const u = cm(f, t, !0);
      u && (a = !0, st(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !a ? ($e(e) && s.set(e, null), null) : (me(r) ? r.forEach((c) => i[c] = null) : st(i, r), $e(e) && s.set(e, i), i);
}
function va(e, t) {
  return !e || !Fr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Fe(e, t[0].toLowerCase() + t.slice(1)) || Fe(e, Wn(t)) || Fe(e, t));
}
let Ll = !1;
function Gi() {
  Ll = !0;
}
function Wu(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [r],
    slots: i,
    attrs: a,
    emit: c,
    render: f,
    renderCache: u,
    props: d,
    data: p,
    setupState: h,
    ctx: m,
    inheritAttrs: g
  } = e, v = qi(e);
  let y, b;
  M.NODE_ENV !== "production" && (Ll = !1);
  try {
    if (n.shapeFlag & 4) {
      const k = o || s, O = M.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(k, {
        get(N, I, C) {
          return Z(
            `Property '${String(
              I
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(N, I, C);
        }
      }) : k;
      y = tn(
        f.call(
          O,
          k,
          u,
          M.NODE_ENV !== "production" ? Sn(d) : d,
          h,
          p,
          m
        )
      ), b = a;
    } else {
      const k = t;
      M.NODE_ENV !== "production" && a === d && Gi(), y = tn(
        k.length > 1 ? k(
          M.NODE_ENV !== "production" ? Sn(d) : d,
          M.NODE_ENV !== "production" ? {
            get attrs() {
              return Gi(), Sn(a);
            },
            slots: i,
            emit: c
          } : { attrs: a, slots: i, emit: c }
        ) : k(
          M.NODE_ENV !== "production" ? Sn(d) : d,
          null
        )
      ), b = t.props ? a : Fb(a);
    }
  } catch (k) {
    mr.length = 0, jr(k, e, 1), y = ue(at);
  }
  let _ = y, x;
  if (M.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([_, x] = um(y)), b && g !== !1) {
    const k = Object.keys(b), { shapeFlag: O } = _;
    if (k.length) {
      if (O & 7)
        r && k.some($i) && (b = Bb(
          b,
          r
        )), _ = kn(_, b, !1, !0);
      else if (M.NODE_ENV !== "production" && !Ll && _.type !== at) {
        const N = Object.keys(a), I = [], C = [];
        for (let w = 0, D = N.length; w < D; w++) {
          const A = N[w];
          Fr(A) ? $i(A) || I.push(A[2].toLowerCase() + A.slice(3)) : C.push(A);
        }
        C.length && Z(
          `Extraneous non-props attributes (${C.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), I.length && Z(
          `Extraneous non-emits event listeners (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (M.NODE_ENV !== "production" && !Ku(_) && Z(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), _ = kn(_, null, !1, !0), _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs), n.transition && (M.NODE_ENV !== "production" && !Ku(_) && Z(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Or(_, n.transition)), M.NODE_ENV !== "production" && x ? x(_) : y = _, qi(v), y;
}
const um = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Mc(t, !1);
  if (s) {
    if (M.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return um(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (a) => {
    t[o] = a, n && (r > -1 ? n[r] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [tn(s), i];
};
function Mc(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (qs(o)) {
      if (o.type !== at || o.children === "v-if") {
        if (n)
          return;
        if (n = o, M.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Mc(n.children);
      }
    } else
      return;
  }
  return n;
}
const Fb = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Fr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Bb = (e, t) => {
  const n = {};
  for (const s in e)
    (!$i(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Ku = (e) => e.shapeFlag & 7 || e.type === at;
function $b(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: a, patchFlag: c } = t, f = r.emitsOptions;
  if (M.NODE_ENV !== "production" && (o || a) && nn || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? zu(s, i, f) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (i[p] !== s[p] && !va(f, p))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : s === i ? !1 : s ? i ? zu(s, i, f) : !0 : !!i;
  return !1;
}
function zu(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !va(n, r))
      return !0;
  }
  return !1;
}
function jb({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const dm = (e) => e.__isSuspense;
function Ub(e, t) {
  t && t.pendingBranch ? me(e) ? t.effects.push(...e) : t.effects.push(e) : Ch(e);
}
const Se = Symbol.for("v-fgt"), zr = Symbol.for("v-txt"), at = Symbol.for("v-cmt"), hr = Symbol.for("v-stc"), mr = [];
let Lt = null;
function T(e = !1) {
  mr.push(Lt = e ? null : []);
}
function Hb() {
  mr.pop(), Lt = mr[mr.length - 1] || null;
}
let Tr = 1;
function qu(e, t = !1) {
  Tr += e, e < 0 && Lt && t && (Lt.hasOnce = !0);
}
function fm(e) {
  return e.dynamicChildren = Tr > 0 ? Lt || yo : null, Hb(), Tr > 0 && Lt && Lt.push(e), e;
}
function R(e, t, n, s, o, r) {
  return fm(
    l(
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
function et(e, t, n, s, o) {
  return fm(
    ue(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function qs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ds(e, t) {
  if (M.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Ai.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Wb = (...e) => hm(
  ...e
), pm = ({ key: e }) => e ?? null, Oi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ge(e) || Ye(e) || Ae(e) ? { i: rt, r: e, k: t, f: !!n } : e : null);
function l(e, t = null, n = null, s = 0, o = null, r = e === Se ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && pm(t),
    ref: t && Oi(t),
    scopeId: Rh,
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
    ctx: rt
  };
  return a ? (Pc(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= Ge(n) ? 8 : 16), M.NODE_ENV !== "production" && c.key !== c.key && Z("VNode created with invalid key (NaN). VNode type:", c.type), Tr > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Lt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Lt.push(c), c;
}
const ue = M.NODE_ENV !== "production" ? Wb : hm;
function hm(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === eb) && (M.NODE_ENV !== "production" && !e && Z(`Invalid vnode type when creating vnode: ${e}.`), e = at), qs(e)) {
    const a = kn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Pc(a, n), Tr > 0 && !r && Lt && (a.shapeFlag & 6 ? Lt[Lt.indexOf(e)] = a : Lt.push(a)), a.patchFlag = -2, a;
  }
  if (_m(e) && (e = e.__vccOpts), t) {
    t = ot(t);
    let { class: a, style: c } = t;
    a && !Ge(a) && (t.class = ce(a)), $e(c) && (Sr(c) && !me(c) && (c = st({}, c)), t.style = Vt(c));
  }
  const i = Ge(e) ? 1 : dm(e) ? 128 : Ph(e) ? 64 : $e(e) ? 4 : Ae(e) ? 2 : 0;
  return M.NODE_ENV !== "production" && i & 4 && Sr(e) && (e = Oe(e), Z(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), l(
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
function ot(e) {
  return e ? Sr(e) || em(e) ? st({}, e) : e : null;
}
function kn(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: a, transition: c } = e, f = t ? vs(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && pm(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? me(r) ? r.concat(Oi(t)) : [r, Oi(t)] : Oi(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: M.NODE_ENV !== "production" && i === -1 && me(a) ? a.map(mm) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Se ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && kn(e.ssContent),
    ssFallback: e.ssFallback && kn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && Or(
    u,
    c.clone(u)
  ), u;
}
function mm(e) {
  const t = kn(e);
  return me(e.children) && (t.children = e.children.map(mm)), t;
}
function U(e = " ", t = 0) {
  return ue(zr, null, e, t);
}
function Fl(e, t) {
  const n = ue(hr, null, e);
  return n.staticCount = t, n;
}
function ye(e = "", t = !1) {
  return t ? (T(), et(at, null, e)) : ue(at, null, e);
}
function tn(e) {
  return e == null || typeof e == "boolean" ? ue(at) : me(e) ? ue(
    Se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qs(e) ? ss(e) : ue(zr, null, String(e));
}
function ss(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : kn(e);
}
function Pc(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (me(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Pc(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !em(t) ? t._ctx = rt : o === 3 && rt && (rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ae(t) ? (t = { default: t, _ctx: rt }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [U(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vs(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ce([t.class, s.class]));
      else if (o === "style")
        t.style = Vt([t.style, s.style]);
      else if (Fr(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(me(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function _n(e, t, n, s = null) {
  dn(e, t, 7, [
    n,
    s
  ]);
}
const Kb = Qh();
let zb = 0;
function qb(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Kb, r = {
    uid: zb++,
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
    scope: new Jp(
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
    propsOptions: nm(s, o),
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
  return M.NODE_ENV !== "production" ? r.ctx = nb(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Lb.bind(null, r), e.ce && e.ce(r), r;
}
let ct = null;
const Yn = () => ct || rt;
let Qi, Bl;
{
  const e = $r(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Qi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ct = n
  ), Bl = t(
    "__VUE_SSR_SETTERS__",
    (n) => Nr = n
  );
}
const qr = (e) => {
  const t = ct;
  return Qi(e), e.scope.on(), () => {
    e.scope.off(), Qi(t);
  };
}, Yu = () => {
  ct && ct.scope.off(), Qi(null);
}, Yb = /* @__PURE__ */ zn("slot,component");
function $l(e, { isNativeTag: t }) {
  (Yb(e) || t(e)) && Z(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function gm(e) {
  return e.vnode.shapeFlag & 4;
}
let Nr = !1;
function Xb(e, t = !1, n = !1) {
  t && Bl(t);
  const { props: s, children: o } = e.vnode, r = gm(e);
  hb(e, s, r, t), Cb(e, o, n || t);
  const i = r ? Gb(e, t) : void 0;
  return t && Bl(!1), i;
}
function Gb(e, t) {
  var n;
  const s = e.type;
  if (M.NODE_ENV !== "production") {
    if (s.name && $l(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        $l(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        Ih(r[i]);
    }
    s.compilerOptions && Qb() && Z(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yh), M.NODE_ENV !== "production" && sb(e);
  const { setup: o } = s;
  if (o) {
    ln();
    const r = e.setupContext = o.length > 1 ? Zb(e) : null, i = qr(e), a = Fo(
      o,
      e,
      0,
      [
        M.NODE_ENV !== "production" ? Sn(e.props) : e.props,
        r
      ]
    ), c = Ec(a);
    if (cn(), i(), (c || e.sp) && !Eo(e) && Hh(e), c) {
      if (a.then(Yu, Yu), t)
        return a.then((f) => {
          Xu(e, f, t);
        }).catch((f) => {
          jr(f, e, 0);
        });
      if (e.asyncDep = a, M.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = s.name) != null ? n : "Anonymous";
        Z(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Xu(e, a, t);
  } else
    vm(e, t);
}
function Xu(e, t, n) {
  Ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $e(t) ? (M.NODE_ENV !== "production" && qs(t) && Z(
    "setup() should not return VNodes directly - return a render function instead."
  ), M.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = bh(t), M.NODE_ENV !== "production" && ob(e)) : M.NODE_ENV !== "production" && t !== void 0 && Z(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), vm(e, n);
}
const Qb = () => !0;
function vm(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || dt);
  {
    const o = qr(e);
    ln();
    try {
      ib(e);
    } finally {
      cn(), o();
    }
  }
  M.NODE_ENV !== "production" && !s.render && e.render === dt && !t && (s.template ? Z(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : Z("Component is missing template or render function: ", s));
}
const Gu = M.NODE_ENV !== "production" ? {
  get(e, t) {
    return Gi(), ut(e, "get", ""), e[t];
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
function Jb(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ut(e, "get", "$slots"), t[n];
    }
  });
}
function Zb(e) {
  const t = (n) => {
    if (M.NODE_ENV !== "production" && (e.exposed && Z("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (me(n) ? s = "array" : Ye(n) && (s = "ref")), s !== "object" && Z(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (M.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Gu));
      },
      get slots() {
        return s || (s = Jb(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Gu),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function _a(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bh(is(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Bs)
        return Bs[n](e);
    },
    has(t, n) {
      return n in t || n in Bs;
    }
  })) : e.proxy;
}
const eE = /(?:^|[-_])(\w)/g, tE = (e) => e.replace(eE, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Vc(e, t = !0) {
  return Ae(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ya(e, t, n = !1) {
  let s = Vc(t);
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
  return s ? tE(s) : n ? "App" : "Anonymous";
}
function _m(e) {
  return Ae(e) && "__vccOpts" in e;
}
const j = (e, t) => {
  const n = my(e, t, Nr);
  if (M.NODE_ENV !== "production") {
    const s = Yn();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Lc(e, t, n) {
  const s = arguments.length;
  return s === 2 ? $e(t) && !me(t) ? qs(t) ? ue(e, null, [t]) : ue(e, t) : ue(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && qs(n) && (n = [n]), ue(e, t, n));
}
function nE() {
  if (M.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!$e(d))
        return null;
      if (d.__isVue)
        return ["div", e, "VueInstance"];
      if (Ye(d)) {
        ln();
        const p = d.value;
        return cn(), [
          "div",
          {},
          ["span", e, u(d)],
          "<",
          a(p),
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
            `>${Dn(d) ? " (readonly)" : ""}`
          ];
        if (Dn(d))
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
    const p = [];
    d.type.props && d.props && p.push(i("props", Oe(d.props))), d.setupState !== Be && p.push(i("setup", d.setupState)), d.data !== Be && p.push(i("data", Oe(d.data)));
    const h = c(d, "computed");
    h && p.push(i("computed", h));
    const m = c(d, "inject");
    return m && p.push(i("injected", m)), p.push([
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
    ]), p;
  }
  function i(d, p) {
    return p = st({}, p), Object.keys(p).length ? [
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
        ...Object.keys(p).map((h) => [
          "div",
          {},
          ["span", s, h + ": "],
          a(p[h], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(d, p = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : $e(d) ? ["object", { object: p ? Oe(d) : d }] : ["span", n, String(d)];
  }
  function c(d, p) {
    const h = d.type;
    if (Ae(h))
      return;
    const m = {};
    for (const g in d.ctx)
      f(h, g, p) && (m[g] = d.ctx[g]);
    return m;
  }
  function f(d, p, h) {
    const m = d[h];
    if (me(m) && m.includes(p) || $e(m) && p in m || d.extends && f(d.extends, p, h) || d.mixins && d.mixins.some((g) => f(g, p, h)))
      return !0;
  }
  function u(d) {
    return St(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Qu = "3.5.17", Cn = M.NODE_ENV !== "production" ? Z : dt;
var Xt = {};
let jl;
const Ju = typeof window < "u" && window.trustedTypes;
if (Ju)
  try {
    jl = /* @__PURE__ */ Ju.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Xt.NODE_ENV !== "production" && Cn(`Error creating trusted types policy: ${e}`);
  }
const ym = jl ? (e) => jl.createHTML(e) : (e) => e, sE = "http://www.w3.org/2000/svg", oE = "http://www.w3.org/1998/Math/MathML", Fn = typeof document < "u" ? document : null, Zu = Fn && /* @__PURE__ */ Fn.createElement("template"), rE = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Fn.createElementNS(sE, e) : t === "mathml" ? Fn.createElementNS(oE, e) : n ? Fn.createElement(e, { is: n }) : Fn.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Fn.createTextNode(e),
  createComment: (e) => Fn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Fn.querySelector(e),
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
      Zu.innerHTML = ym(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Zu.content;
      if (s === "svg" || s === "mathml") {
        const c = a.firstChild;
        for (; c.firstChild; )
          a.appendChild(c.firstChild);
        a.removeChild(c);
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
}, Jn = "transition", Jo = "animation", Dr = Symbol("_vtc"), bm = {
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
}, iE = /* @__PURE__ */ st(
  {},
  Fh,
  bm
), aE = (e) => (e.displayName = "Transition", e.props = iE, e), lE = /* @__PURE__ */ aE(
  (e, { slots: t }) => Lc(jy, cE(e), t)
), As = (e, t = []) => {
  me(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ed = (e) => e ? me(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function cE(e) {
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
    appearFromClass: c = r,
    appearActiveClass: f = i,
    appearToClass: u = a,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, m = uE(o), g = m && m[0], v = m && m[1], {
    onBeforeEnter: y,
    onEnter: b,
    onEnterCancelled: _,
    onLeave: x,
    onLeaveCancelled: k,
    onBeforeAppear: O = y,
    onAppear: N = b,
    onAppearCancelled: I = _
  } = t, C = (A, F, de, Y) => {
    A._enterCancelled = Y, Ss(A, F ? u : a), Ss(A, F ? f : i), de && de();
  }, w = (A, F) => {
    A._isLeaving = !1, Ss(A, d), Ss(A, h), Ss(A, p), F && F();
  }, D = (A) => (F, de) => {
    const Y = A ? N : b, re = () => C(F, A, de);
    As(Y, [F, re]), td(() => {
      Ss(F, A ? c : r), Pn(F, A ? u : a), ed(Y) || nd(F, s, g, re);
    });
  };
  return st(t, {
    onBeforeEnter(A) {
      As(y, [A]), Pn(A, r), Pn(A, i);
    },
    onBeforeAppear(A) {
      As(O, [A]), Pn(A, c), Pn(A, f);
    },
    onEnter: D(!1),
    onAppear: D(!0),
    onLeave(A, F) {
      A._isLeaving = !0;
      const de = () => w(A, F);
      Pn(A, d), A._enterCancelled ? (Pn(A, p), rd()) : (rd(), Pn(A, p)), td(() => {
        A._isLeaving && (Ss(A, d), Pn(A, h), ed(x) || nd(A, s, v, de));
      }), As(x, [A, de]);
    },
    onEnterCancelled(A) {
      C(A, !1, void 0, !0), As(_, [A]);
    },
    onAppearCancelled(A) {
      C(A, !0, void 0, !0), As(I, [A]);
    },
    onLeaveCancelled(A) {
      w(A), As(k, [A]);
    }
  });
}
function uE(e) {
  if (e == null)
    return null;
  if ($e(e))
    return [Ya(e.enter), Ya(e.leave)];
  {
    const t = Ya(e);
    return [t, t];
  }
}
function Ya(e) {
  const t = T_(e);
  return Xt.NODE_ENV !== "production" && wy(t, "<transition> explicit duration"), t;
}
function Pn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Dr] || (e[Dr] = /* @__PURE__ */ new Set())).add(t);
}
function Ss(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Dr];
  n && (n.delete(t), n.size || (e[Dr] = void 0));
}
function td(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let dE = 0;
function nd(e, t, n, s) {
  const o = e._endId = ++dE, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: a, propCount: c } = fE(e, t);
  if (!i)
    return s();
  const f = i + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(f, p), r();
  }, p = (h) => {
    h.target === e && ++u >= c && d();
  };
  setTimeout(() => {
    u < c && d();
  }, a + 1), e.addEventListener(f, p);
}
function fE(e, t) {
  const n = window.getComputedStyle(e), s = (m) => (n[m] || "").split(", "), o = s(`${Jn}Delay`), r = s(`${Jn}Duration`), i = sd(o, r), a = s(`${Jo}Delay`), c = s(`${Jo}Duration`), f = sd(a, c);
  let u = null, d = 0, p = 0;
  t === Jn ? i > 0 && (u = Jn, d = i, p = r.length) : t === Jo ? f > 0 && (u = Jo, d = f, p = c.length) : (d = Math.max(i, f), u = d > 0 ? i > f ? Jn : Jo : null, p = u ? u === Jn ? r.length : c.length : 0);
  const h = u === Jn && /\b(transform|all)(,|$)/.test(
    s(`${Jn}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: p,
    hasTransform: h
  };
}
function sd(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => od(n) + od(e[s])));
}
function od(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function rd() {
  return document.body.offsetHeight;
}
function pE(e, t, n) {
  const s = e[Dr];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ji = Symbol("_vod"), Em = Symbol("_vsh"), wm = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ji] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Zo(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Zo(e, !0), s.enter(e)) : s.leave(e, () => {
      Zo(e, !1);
    }) : Zo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Zo(e, t);
  }
};
Xt.NODE_ENV !== "production" && (wm.name = "show");
function Zo(e, t) {
  e.style.display = t ? e[Ji] : "none", e[Em] = !t;
}
const hE = Symbol(Xt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), mE = /(^|;)\s*display\s*:/;
function gE(e, t, n) {
  const s = e.style, o = Ge(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (Ge(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && Ti(s, a, "");
        }
      else
        for (const i in t)
          n[i] == null && Ti(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Ti(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[hE];
      i && (n += ";" + i), s.cssText = n, r = mE.test(n);
    }
  } else t && e.removeAttribute("style");
  Ji in e && (e[Ji] = r ? s.display : "", e[Em] && (s.display = "none"));
}
const vE = /[^\\];\s*$/, id = /\s*!important$/;
function Ti(e, t, n) {
  if (me(n))
    n.forEach((s) => Ti(e, t, s));
  else if (n == null && (n = ""), Xt.NODE_ENV !== "production" && vE.test(n) && Cn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = _E(e, t);
    id.test(n) ? e.setProperty(
      Wn(s),
      n.replace(id, ""),
      "important"
    ) : e[s] = n;
  }
}
const ad = ["Webkit", "Moz", "ms"], Xa = {};
function _E(e, t) {
  const n = Xa[t];
  if (n)
    return n;
  let s = _t(t);
  if (s !== "filter" && s in e)
    return Xa[t] = s;
  s = Hs(s);
  for (let o = 0; o < ad.length; o++) {
    const r = ad[o] + s;
    if (r in e)
      return Xa[t] = r;
  }
  return t;
}
const ld = "http://www.w3.org/1999/xlink";
function cd(e, t, n, s, o, r = B_(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ld, t.slice(6, t.length)) : e.setAttributeNS(ld, t, n) : n == null || r && !Xp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : an(n) ? String(n) : n
  );
}
function ud(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ym(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const a = r === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Xp(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
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
function jn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function yE(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const dd = Symbol("_vei");
function bE(e, t, n, s, o = null) {
  const r = e[dd] || (e[dd] = {}), i = r[t];
  if (s && i)
    i.value = Xt.NODE_ENV !== "production" ? pd(s, t) : s;
  else {
    const [a, c] = EE(t);
    if (s) {
      const f = r[t] = SE(
        Xt.NODE_ENV !== "production" ? pd(s, t) : s,
        o
      );
      jn(e, a, f, c);
    } else i && (yE(e, a, i, c), r[t] = void 0);
  }
}
const fd = /(?:Once|Passive|Capture)$/;
function EE(e) {
  let t;
  if (fd.test(e)) {
    t = {};
    let s;
    for (; s = e.match(fd); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Wn(e.slice(2)), t];
}
let Ga = 0;
const wE = /* @__PURE__ */ Promise.resolve(), AE = () => Ga || (wE.then(() => Ga = 0), Ga = Date.now());
function SE(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    dn(
      CE(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = AE(), n;
}
function pd(e, t) {
  return Ae(e) || me(e) ? e : (Cn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), dt);
}
function CE(e, t) {
  if (me(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const hd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, OE = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? pE(e, s, i) : t === "style" ? gE(e, n, s) : Fr(t) ? $i(t) || bE(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : TE(e, t, s, i)) ? (ud(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && cd(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ge(s)) ? ud(e, _t(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), cd(e, t, s, i));
};
function TE(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && hd(t) && Ae(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return hd(t) && Ge(n) ? !1 : t in e;
}
const ds = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return me(t) ? (n) => uo(t, n) : t;
};
function NE(e) {
  e.target.composing = !0;
}
function md(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const zt = Symbol("_assign"), wo = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[zt] = ds(o);
    const r = s || o.props && o.props.type === "number";
    jn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), r && (a = ji(a)), e[zt](a);
    }), n && jn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (jn(e, "compositionstart", NE), jn(e, "compositionend", md), jn(e, "change", md));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[zt] = ds(i), e.composing) return;
    const a = (r || e.type === "number") && !/^0\d/.test(e.value) ? ji(e.value) : e.value, c = t ?? "";
    a !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === c) || (e.value = c));
  }
}, DE = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[zt] = ds(n), jn(e, "change", () => {
      const s = e._modelValue, o = So(e), r = e.checked, i = e[zt];
      if (me(s)) {
        const a = Sc(s, o), c = a !== -1;
        if (r && !c)
          i(s.concat(o));
        else if (!r && c) {
          const f = [...s];
          f.splice(a, 1), i(f);
        }
      } else if (Lo(s)) {
        const a = new Set(s);
        r ? a.add(o) : a.delete(o), i(a);
      } else
        i(Am(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: gd,
  beforeUpdate(e, t, n) {
    e[zt] = ds(n), gd(e, t, n);
  }
};
function gd(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (me(t))
    o = Sc(t, s.props.value) > -1;
  else if (Lo(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = Ws(t, Am(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Ao = {
  created(e, { value: t }, n) {
    e.checked = Ws(t, n.props.value), e[zt] = ds(n), jn(e, "change", () => {
      e[zt](So(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[zt] = ds(s), t !== n && (e.checked = Ws(t, s.props.value));
  }
}, cs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Lo(t);
    jn(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? ji(So(i)) : So(i)
      );
      e[zt](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, Ks(() => {
        e._assigning = !1;
      });
    }), e[zt] = ds(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    vd(e, t);
  },
  beforeUpdate(e, t, n) {
    e[zt] = ds(n);
  },
  updated(e, { value: t }) {
    e._assigning || vd(e, t);
  }
};
function vd(e, t) {
  const n = e.multiple, s = me(t);
  if (n && !s && !Lo(t)) {
    Xt.NODE_ENV !== "production" && Cn(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], a = So(i);
    if (n)
      if (s) {
        const c = typeof a;
        c === "string" || c === "number" ? i.selected = t.some((f) => String(f) === String(a)) : i.selected = Sc(t, a) > -1;
      } else
        i.selected = t.has(a);
    else if (Ws(So(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function So(e) {
  return "_value" in e ? e._value : e.value;
}
function Am(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const kE = ["ctrl", "shift", "alt", "meta"], xE = {
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
  exact: (e, t) => kE.some((n) => e[`${n}Key`] && !t.includes(n))
}, Sm = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const a = xE[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...r);
  });
}, RE = /* @__PURE__ */ st({ patchProp: OE }, rE);
let _d;
function IE() {
  return _d || (_d = Nb(RE));
}
const ba = (...e) => {
  const t = IE().createApp(...e);
  Xt.NODE_ENV !== "production" && (PE(t), VE(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = LE(s);
    if (!o) return;
    const r = t._component;
    !Ae(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, ME(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function ME(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function PE(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => P_(t) || V_(t) || L_(t),
    writable: !1
  });
}
function VE(e) {
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
function LE(e) {
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
var FE = {};
function BE() {
  nE();
}
FE.NODE_ENV !== "production" && BE();
var $E = Object.create, Cm = Object.defineProperty, jE = Object.getOwnPropertyDescriptor, Fc = Object.getOwnPropertyNames, UE = Object.getPrototypeOf, HE = Object.prototype.hasOwnProperty, WE = (e, t) => function() {
  return e && (t = (0, e[Fc(e)[0]])(e = 0)), t;
}, KE = (e, t) => function() {
  return t || (0, e[Fc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, zE = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Fc(t))
      !HE.call(e, o) && o !== n && Cm(e, o, { get: () => t[o], enumerable: !(s = jE(t, o)) || s.enumerable });
  return e;
}, qE = (e, t, n) => (n = e != null ? $E(UE(e)) : {}, zE(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Cm(n, "default", { value: e, enumerable: !0 }),
  e
)), Yr = WE({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), YE = KE({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    Yr(), t.exports = s;
    function n(r) {
      return r instanceof Buffer ? Buffer.from(r) : new r.constructor(r.buffer.slice(), r.byteOffset, r.length);
    }
    function s(r) {
      if (r = r || {}, r.circles) return o(r);
      const i = /* @__PURE__ */ new Map();
      if (i.set(Date, (d) => new Date(d)), i.set(Map, (d, p) => new Map(c(Array.from(d), p))), i.set(Set, (d, p) => new Set(c(Array.from(d), p))), r.constructorHandlers)
        for (const d of r.constructorHandlers)
          i.set(d[0], d[1]);
      let a = null;
      return r.proto ? u : f;
      function c(d, p) {
        const h = Object.keys(d), m = new Array(h.length);
        for (let g = 0; g < h.length; g++) {
          const v = h[g], y = d[v];
          typeof y != "object" || y === null ? m[v] = y : y.constructor !== Object && (a = i.get(y.constructor)) ? m[v] = a(y, p) : ArrayBuffer.isView(y) ? m[v] = n(y) : m[v] = p(y);
        }
        return m;
      }
      function f(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return c(d, f);
        if (d.constructor !== Object && (a = i.get(d.constructor)))
          return a(d, f);
        const p = {};
        for (const h in d) {
          if (Object.hasOwnProperty.call(d, h) === !1) continue;
          const m = d[h];
          typeof m != "object" || m === null ? p[h] = m : m.constructor !== Object && (a = i.get(m.constructor)) ? p[h] = a(m, f) : ArrayBuffer.isView(m) ? p[h] = n(m) : p[h] = f(m);
        }
        return p;
      }
      function u(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return c(d, u);
        if (d.constructor !== Object && (a = i.get(d.constructor)))
          return a(d, u);
        const p = {};
        for (const h in d) {
          const m = d[h];
          typeof m != "object" || m === null ? p[h] = m : m.constructor !== Object && (a = i.get(m.constructor)) ? p[h] = a(m, u) : ArrayBuffer.isView(m) ? p[h] = n(m) : p[h] = u(m);
        }
        return p;
      }
    }
    function o(r) {
      const i = [], a = [], c = /* @__PURE__ */ new Map();
      if (c.set(Date, (h) => new Date(h)), c.set(Map, (h, m) => new Map(u(Array.from(h), m))), c.set(Set, (h, m) => new Set(u(Array.from(h), m))), r.constructorHandlers)
        for (const h of r.constructorHandlers)
          c.set(h[0], h[1]);
      let f = null;
      return r.proto ? p : d;
      function u(h, m) {
        const g = Object.keys(h), v = new Array(g.length);
        for (let y = 0; y < g.length; y++) {
          const b = g[y], _ = h[b];
          if (typeof _ != "object" || _ === null)
            v[b] = _;
          else if (_.constructor !== Object && (f = c.get(_.constructor)))
            v[b] = f(_, m);
          else if (ArrayBuffer.isView(_))
            v[b] = n(_);
          else {
            const x = i.indexOf(_);
            x !== -1 ? v[b] = a[x] : v[b] = m(_);
          }
        }
        return v;
      }
      function d(h) {
        if (typeof h != "object" || h === null) return h;
        if (Array.isArray(h)) return u(h, d);
        if (h.constructor !== Object && (f = c.get(h.constructor)))
          return f(h, d);
        const m = {};
        i.push(h), a.push(m);
        for (const g in h) {
          if (Object.hasOwnProperty.call(h, g) === !1) continue;
          const v = h[g];
          if (typeof v != "object" || v === null)
            m[g] = v;
          else if (v.constructor !== Object && (f = c.get(v.constructor)))
            m[g] = f(v, d);
          else if (ArrayBuffer.isView(v))
            m[g] = n(v);
          else {
            const y = i.indexOf(v);
            y !== -1 ? m[g] = a[y] : m[g] = d(v);
          }
        }
        return i.pop(), a.pop(), m;
      }
      function p(h) {
        if (typeof h != "object" || h === null) return h;
        if (Array.isArray(h)) return u(h, p);
        if (h.constructor !== Object && (f = c.get(h.constructor)))
          return f(h, p);
        const m = {};
        i.push(h), a.push(m);
        for (const g in h) {
          const v = h[g];
          if (typeof v != "object" || v === null)
            m[g] = v;
          else if (v.constructor !== Object && (f = c.get(v.constructor)))
            m[g] = f(v, p);
          else if (ArrayBuffer.isView(v))
            m[g] = n(v);
          else {
            const y = i.indexOf(v);
            y !== -1 ? m[g] = a[y] : m[g] = p(v);
          }
        }
        return i.pop(), a.pop(), m;
      }
    }
  }
});
Yr();
Yr();
Yr();
var Om = typeof navigator < "u", he = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof he.chrome < "u" && he.chrome.devtools;
Om && (he.self, he.top);
var yd;
typeof navigator < "u" && ((yd = navigator.userAgent) == null || yd.toLowerCase().includes("electron"));
Yr();
var XE = qE(YE()), GE = /(?:^|[-_/])(\w)/g;
function QE(e, t) {
  return t ? t.toUpperCase() : "";
}
function JE(e) {
  return e && `${e}`.replace(GE, QE);
}
function ZE(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const s = n.lastIndexOf("/"), o = n.substring(s + 1);
  {
    const r = o.lastIndexOf(t);
    return o.substring(0, r);
  }
}
var bd = (0, XE.default)({ circles: !0 });
const e1 = {
  trailing: !0
};
function Co(e, t = 25, n = {}) {
  if (n = { ...e1, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let s, o, r = [], i, a;
  const c = (f, u) => (i = t1(e, f, u), i.finally(() => {
    if (i = null, n.trailing && a && !o) {
      const d = c(f, a);
      return a = null, d;
    }
  }), i);
  return function(...f) {
    return i ? (n.trailing && (a = f), i) : new Promise((u) => {
      const d = !o && n.leading;
      clearTimeout(o), o = setTimeout(() => {
        o = null;
        const p = n.leading ? s : c(this, f);
        for (const h of r)
          h(p);
        r = [];
      }, t), d ? (s = c(this, f), u(s)) : r.push(u);
    });
  };
}
async function t1(e, t, n) {
  return await e.apply(t, n);
}
function Ul(e, t = {}, n) {
  for (const s in e) {
    const o = e[s], r = n ? `${n}:${s}` : s;
    typeof o == "object" && o !== null ? Ul(o, t, r) : typeof o == "function" && (t[r] = o);
  }
  return t;
}
const n1 = { run: (e) => e() }, s1 = () => n1, Tm = typeof console.createTask < "u" ? console.createTask : s1;
function o1(e, t) {
  const n = t.shift(), s = Tm(n);
  return e.reduce(
    (o, r) => o.then(() => s.run(() => r(...t))),
    Promise.resolve()
  );
}
function r1(e, t) {
  const n = t.shift(), s = Tm(n);
  return Promise.all(e.map((o) => s.run(() => o(...t))));
}
function Qa(e, t) {
  for (const n of [...e])
    n(t);
}
class i1 {
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
    const n = Ul(t), s = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of s.splice(0, s.length))
        o();
    };
  }
  removeHooks(t) {
    const n = Ul(t);
    for (const s in n)
      this.removeHook(s, n[s]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(o1, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(r1, t, ...n);
  }
  callHookWith(t, n, ...s) {
    const o = this._before || this._after ? { name: n, args: s, context: {} } : void 0;
    this._before && Qa(this._before, o);
    const r = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      s
    );
    return r instanceof Promise ? r.finally(() => {
      this._after && o && Qa(this._after, o);
    }) : (this._after && o && Qa(this._after, o), r);
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
  return new i1();
}
var a1 = Object.create, Dm = Object.defineProperty, l1 = Object.getOwnPropertyDescriptor, Bc = Object.getOwnPropertyNames, c1 = Object.getPrototypeOf, u1 = Object.prototype.hasOwnProperty, d1 = (e, t) => function() {
  return e && (t = (0, e[Bc(e)[0]])(e = 0)), t;
}, km = (e, t) => function() {
  return t || (0, e[Bc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, f1 = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Bc(t))
      !u1.call(e, o) && o !== n && Dm(e, o, { get: () => t[o], enumerable: !(s = l1(t, o)) || s.enumerable });
  return e;
}, p1 = (e, t, n) => (n = e != null ? a1(c1(e)) : {}, f1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Dm(n, "default", { value: e, enumerable: !0 }),
  e
)), X = d1({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), h1 = km({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
    X(), function(n) {
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
      }, c = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), f = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), u = [".", "!", "~", "*", "'", "(", ")"].join(""), d = function(v, y) {
        var b = "-", _ = "", x = "", k = !0, O = {}, N, I, C, w, D, A, F, de, Y, re, K, le, be, Ze, W = "";
        if (typeof v != "string")
          return "";
        if (typeof y == "string" && (b = y), F = a.en, de = i.en, typeof y == "object") {
          N = y.maintainCase || !1, O = y.custom && typeof y.custom == "object" ? y.custom : O, C = +y.truncate > 1 && y.truncate || !1, w = y.uric || !1, D = y.uricNoSlash || !1, A = y.mark || !1, k = !(y.symbols === !1 || y.lang === !1), b = y.separator || b, w && (W += c), D && (W += f), A && (W += u), F = y.lang && a[y.lang] && k ? a[y.lang] : k ? a.en : {}, de = y.lang && i[y.lang] ? i[y.lang] : y.lang === !1 || y.lang === !0 ? {} : i.en, y.titleCase && typeof y.titleCase.length == "number" && Array.prototype.toString.call(y.titleCase) ? (y.titleCase.forEach(function(oe) {
            O[oe + ""] = oe + "";
          }), I = !0) : I = !!y.titleCase, y.custom && typeof y.custom.length == "number" && Array.prototype.toString.call(y.custom) && y.custom.forEach(function(oe) {
            O[oe + ""] = oe + "";
          }), Object.keys(O).forEach(function(oe) {
            var pe;
            oe.length > 1 ? pe = new RegExp("\\b" + h(oe) + "\\b", "gi") : pe = new RegExp(h(oe), "gi"), v = v.replace(pe, O[oe]);
          });
          for (K in O)
            W += K;
        }
        for (W += b, W = h(W), v = v.replace(/(^\s+|\s+$)/g, ""), be = !1, Ze = !1, re = 0, le = v.length; re < le; re++)
          K = v[re], m(K, O) ? be = !1 : de[K] ? (K = be && de[K].match(/[A-Za-z0-9]/) ? " " + de[K] : de[K], be = !1) : K in s ? (re + 1 < le && o.indexOf(v[re + 1]) >= 0 ? (x += K, K = "") : Ze === !0 ? (K = r[x] + s[K], x = "") : K = be && s[K].match(/[A-Za-z0-9]/) ? " " + s[K] : s[K], be = !1, Ze = !1) : K in r ? (x += K, K = "", re === le - 1 && (K = r[x]), Ze = !0) : /* process symbol chars */ F[K] && !(w && c.indexOf(K) !== -1) && !(D && f.indexOf(K) !== -1) ? (K = be || _.substr(-1).match(/[A-Za-z0-9]/) ? b + F[K] : F[K], K += v[re + 1] !== void 0 && v[re + 1].match(/[A-Za-z0-9]/) ? b : "", be = !0) : (Ze === !0 ? (K = r[x] + K, x = "", Ze = !1) : be && (/[A-Za-z0-9]/.test(K) || _.substr(-1).match(/A-Za-z0-9]/)) && (K = " " + K), be = !1), _ += K.replace(new RegExp("[^\\w\\s" + W + "_-]", "g"), b);
        return I && (_ = _.replace(/(\w)(\S*)/g, function(oe, pe, we) {
          var ke = pe.toUpperCase() + (we !== null ? we : "");
          return Object.keys(O).indexOf(ke.toLowerCase()) < 0 ? ke : ke.toLowerCase();
        })), _ = _.replace(/\s+/g, b).replace(new RegExp("\\" + b + "+", "g"), b).replace(new RegExp("(^\\" + b + "+|\\" + b + "+$)", "g"), ""), C && _.length > C && (Y = _.charAt(C) === b, _ = _.slice(0, C), Y || (_ = _.slice(0, _.lastIndexOf(b)))), !N && !I && (_ = _.toLowerCase()), _;
      }, p = function(v) {
        return function(b) {
          return d(b, v);
        };
      }, h = function(v) {
        return v.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, m = function(g, v) {
        for (var y in v)
          if (v[y] === g)
            return !0;
      };
      if (typeof t < "u" && t.exports)
        t.exports = d, t.exports.createSlug = p;
      else if (typeof define < "u" && define.amd)
        define([], function() {
          return d;
        });
      else
        try {
          if (n.getSlug || n.createSlug)
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          n.getSlug = d, n.createSlug = p;
        } catch {
        }
    }(e);
  }
}), m1 = km({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    X(), t.exports = h1();
  }
});
X();
X();
X();
X();
X();
X();
X();
X();
function g1(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function v1(e) {
  const t = e.__file;
  if (t)
    return JE(ZE(t, ".vue"));
}
function Ed(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function $c(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function xm(e) {
  var t, n;
  const s = (t = e.subTree) == null ? void 0 : t.type, o = $c(e);
  return o ? ((n = o?.types) == null ? void 0 : n.Fragment) === s : !1;
}
function Ea(e) {
  var t, n, s;
  const o = g1(e?.type || {});
  if (o)
    return o;
  if (e?.root === e)
    return "Root";
  for (const i in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[i] === e?.type)
      return Ed(e, i);
  for (const i in (s = e.appContext) == null ? void 0 : s.components)
    if (e.appContext.components[i] === e?.type)
      return Ed(e, i);
  const r = v1(e?.type || {});
  return r || "Anonymous Component";
}
function _1(e) {
  var t, n, s;
  const o = (s = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? s : 0, r = e === e?.root ? "root" : e.uid;
  return `${o}:${r}`;
}
function Hl(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function y1() {
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
var li;
function b1(e) {
  return li || (li = document.createRange()), li.selectNode(e), li.getBoundingClientRect();
}
function E1(e) {
  const t = y1();
  if (!e.children)
    return t;
  for (let n = 0, s = e.children.length; n < s; n++) {
    const o = e.children[n];
    let r;
    if (o.component)
      r = Ys(o.component);
    else if (o.el) {
      const i = o.el;
      i.nodeType === 1 || i.getBoundingClientRect ? r = i.getBoundingClientRect() : i.nodeType === 3 && i.data.trim() && (r = b1(i));
    }
    r && w1(t, r);
  }
  return t;
}
function w1(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var wd = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function Ys(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? wd : xm(e) ? E1(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? Ys(e.subTree.component) : wd;
}
X();
function jc(e) {
  return xm(e) ? A1(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function A1(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...jc(n.component)) : n?.el && t.push(n.el);
  }), t;
}
var Rm = "__vue-devtools-component-inspector__", Im = "__vue-devtools-component-inspector__card__", Mm = "__vue-devtools-component-inspector__name__", Pm = "__vue-devtools-component-inspector__indicator__", Vm = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, S1 = {
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
}, C1 = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function Bo() {
  return document.getElementById(Rm);
}
function O1() {
  return document.getElementById(Im);
}
function T1() {
  return document.getElementById(Pm);
}
function N1() {
  return document.getElementById(Mm);
}
function Uc(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function Hc(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : Rm, Object.assign(n.style, {
    ...Vm,
    ...Uc(e.bounds),
    ...e.style
  });
  const s = document.createElement("span");
  s.id = Im, Object.assign(s.style, {
    ...S1,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const o = document.createElement("span");
  o.id = Mm, o.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const r = document.createElement("i");
  return r.id = Pm, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(r.style, C1), s.appendChild(o), s.appendChild(r), n.appendChild(s), document.body.appendChild(n), n;
}
function Wc(e) {
  const t = Bo(), n = O1(), s = N1(), o = T1();
  t && (Object.assign(t.style, {
    ...Vm,
    ...Uc(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), s.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function D1(e) {
  const t = Ys(e);
  if (!t.width && !t.height)
    return;
  const n = Ea(e);
  Bo() ? Wc({ bounds: t, name: n }) : Hc({ bounds: t, name: n });
}
function Lm() {
  const e = Bo();
  e && (e.style.display = "none");
}
var Wl = null;
function Kl(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (Wl = n, n.vnode.el)) {
      const o = Ys(n), r = Ea(n);
      Bo() ? Wc({ bounds: o, name: r }) : Hc({ bounds: o, name: r });
    }
  }
}
function k1(e, t) {
  if (e.preventDefault(), e.stopPropagation(), Wl) {
    const n = _1(Wl);
    t(n);
  }
}
var Zi = null;
function x1() {
  Lm(), window.removeEventListener("mouseover", Kl), window.removeEventListener("click", Zi, !0), Zi = null;
}
function R1() {
  return window.addEventListener("mouseover", Kl), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), k1(n, (s) => {
        window.removeEventListener("click", t, !0), Zi = null, window.removeEventListener("mouseover", Kl);
        const o = Bo();
        o && (o.style.display = "none"), e(JSON.stringify({ id: s }));
      });
    }
    Zi = t, window.addEventListener("click", t, !0);
  });
}
function I1(e) {
  const t = Hl(At.value, e.id);
  if (t) {
    const [n] = jc(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const s = Ys(t), o = document.createElement("div"), r = {
        ...Uc(s),
        position: "absolute"
      };
      Object.assign(o.style, r), document.body.appendChild(o), o.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(o);
      }, 2e3);
    }
    setTimeout(() => {
      const s = Ys(t);
      if (s.width || s.height) {
        const o = Ea(t), r = Bo();
        r ? Wc({ ...e, name: o, bounds: s }) : Hc({ ...e, name: o, bounds: s }), setTimeout(() => {
          r && (r.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
X();
var Ad, Sd;
(Sd = (Ad = he).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (Ad.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function M1(e) {
  let t = 0;
  const n = setInterval(() => {
    he.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function P1() {
  const e = he.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function V1() {
  return new Promise((e) => {
    function t() {
      P1(), e(he.__VUE_INSPECTOR__);
    }
    he.__VUE_INSPECTOR__ ? t() : M1(() => {
      t();
    });
  });
}
X();
X();
function L1(e) {
  return !!(e && e.__v_isReadonly);
}
function Fm(e) {
  return L1(e) ? Fm(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ja(e) {
  return !!(e && e.__v_isRef === !0);
}
function ar(e) {
  const t = e && e.__v_raw;
  return t ? ar(t) : e;
}
var F1 = class {
  constructor() {
    this.refEditor = new B1();
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
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : ar(t) instanceof Map ? t.delete(n) : ar(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const o = t[e.newKey || n];
        this.refEditor.isRef(o) ? this.refEditor.set(o, s) : ar(t) instanceof Map ? t.set(e.newKey || n, s) : ar(t) instanceof Set ? t.add(s) : t[e.newKey || n] = s;
      }
    };
  }
}, B1 = class {
  set(e, t) {
    if (Ja(e))
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
    return Ja(e) ? e.value : e;
  }
  isRef(e) {
    return Ja(e) || Fm(e);
  }
};
X();
X();
X();
var $1 = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function j1() {
  if (!Om || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem($1);
  return e ? JSON.parse(e) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
X();
X();
X();
var Cd, Od;
(Od = (Cd = he).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Cd.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var U1 = new Proxy(he.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function H1(e, t) {
  ft.timelineLayersState[t.id] = !1, U1.push({
    ...e,
    descriptorId: t.id,
    appRecord: $c(t.app)
  });
}
var Td, Nd;
(Nd = (Td = he).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Td.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Kc = new Proxy(he.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), Bm = Co(() => {
  $o.hooks.callHook("sendInspectorToClient", $m());
});
function W1(e, t) {
  var n, s;
  Kc.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (s = e.stateFilterPlaceholder) != null ? s : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: $c(t.app)
  }), Bm();
}
function $m() {
  return Kc.filter((e) => e.descriptor.app === At.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
function Ni(e, t) {
  return Kc.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function K1() {
  const e = Nm();
  e.hook("addInspector", ({ inspector: s, plugin: o }) => {
    W1(s, o.descriptor);
  });
  const t = Co(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || ft.highPerfModeEnabled)
      return;
    const i = Ni(s, o.descriptor.app), a = {
      app: o.descriptor.app,
      inspectorId: s,
      filter: i?.treeFilter || "",
      rootNodes: []
    };
    await new Promise((c) => {
      e.callHookWith(
        async (f) => {
          await Promise.all(f.map((u) => u(a))), c();
        },
        "getInspectorTree"
        /* GET_INSPECTOR_TREE */
      );
    }), e.callHookWith(
      async (c) => {
        await Promise.all(c.map((f) => f({
          inspectorId: s,
          rootNodes: a.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  e.hook("sendInspectorTree", t);
  const n = Co(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || ft.highPerfModeEnabled)
      return;
    const i = Ni(s, o.descriptor.app), a = {
      app: o.descriptor.app,
      inspectorId: s,
      nodeId: i?.selectedNodeId || "",
      state: null
    }, c = {
      currentTab: `custom-inspector:${s}`
    };
    a.nodeId && await new Promise((f) => {
      e.callHookWith(
        async (u) => {
          await Promise.all(u.map((d) => d(a, c))), f();
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
    const i = Ni(s, r.descriptor.app);
    i && (i.selectedNodeId = o);
  }), e.hook("timelineLayerAdded", ({ options: s, plugin: o }) => {
    H1(s, o.descriptor);
  }), e.hook("timelineEventAdded", ({ options: s, plugin: o }) => {
    var r;
    const i = ["performance", "component-event", "keyboard", "mouse"];
    ft.highPerfModeEnabled || !((r = ft.timelineLayersState) != null && r[o.descriptor.id]) && !i.includes(s.layerId) || e.callHookWith(
      async (a) => {
        await Promise.all(a.map((c) => c(s)));
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
  }), e.hook("getComponentBounds", async ({ instance: s }) => Ys(s)), e.hook("getComponentName", ({ instance: s }) => Ea(s)), e.hook("componentHighlight", ({ uid: s }) => {
    const o = At.value.instanceMap.get(s);
    o && D1(o);
  }), e.hook("componentUnhighlight", () => {
    Lm();
  }), e;
}
var Dd, kd;
(kd = (Dd = he).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (Dd.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var xd, Rd;
(Rd = (xd = he).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (xd.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var Id, Md;
(Md = (Id = he).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (Id.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Pd, Vd;
(Vd = (Pd = he).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Pd.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var Ld, Fd;
(Fd = (Ld = he).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (Ld.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var ks = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function z1() {
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
    timelineLayersState: j1()
  };
}
var Bd, $d;
($d = (Bd = he)[ks]) != null || (Bd[ks] = z1());
var q1 = Co((e) => {
  $o.hooks.callHook("devtoolsStateUpdated", { state: e });
});
Co((e, t) => {
  $o.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var wa = new Proxy(he.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? he.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : he.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), At = new Proxy(he.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? he.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? he.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : he.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function jm() {
  q1({
    ...he[ks],
    appRecords: wa.value,
    activeAppRecordId: At.id,
    tabs: he.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: he.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function Y1(e) {
  he.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, jm();
}
function X1(e) {
  he.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, jm();
}
var ft = new Proxy(he[ks], {
  get(e, t) {
    return t === "appRecords" ? wa : t === "activeAppRecordId" ? At.id : t === "tabs" ? he.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? he.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : he[ks][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...he[ks] }, e[t] = n, he[ks][t] = n, !0;
  }
});
function G1(e = {}) {
  var t, n, s;
  const { file: o, host: r, baseUrl: i = window.location.origin, line: a = 0, column: c = 0 } = e;
  if (o) {
    if (r === "chrome-extension") {
      const f = o.replace(/\\/g, "\\\\"), u = (n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? n : "/";
      fetch(`${u}__open-in-editor?file=${encodeURI(o)}`).then((d) => {
        if (!d.ok) {
          const p = `Opening component ${f} failed`;
          console.log(`%c${p}`, "color:red");
        }
      });
    } else if (ft.vitePluginDetected) {
      const f = (s = he.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? s : i;
      he.__VUE_INSPECTOR__.openInEditor(f, o, a, c);
    }
  }
}
X();
X();
X();
X();
X();
var jd, Ud;
(Ud = (jd = he).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (jd.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var zc = new Proxy(he.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function zl(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function qc(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Q1(e) {
  var t, n, s;
  const o = (n = (t = zc.find((r) => {
    var i;
    return r[0].id === e && !!((i = r[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (s = o?.settings) != null ? s : null;
}
function Um(e, t) {
  var n, s, o;
  const r = qc(e);
  if (r) {
    const i = localStorage.getItem(r);
    if (i)
      return JSON.parse(i);
  }
  if (e) {
    const i = (s = (n = zc.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? s : null;
    return zl((o = i?.settings) != null ? o : {});
  }
  return zl(t);
}
function J1(e, t) {
  const n = qc(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(zl(t)));
}
function Z1(e, t, n) {
  const s = qc(e), o = localStorage.getItem(s), r = JSON.parse(o || "{}"), i = {
    ...r,
    [t]: n
  };
  localStorage.setItem(s, JSON.stringify(i)), $o.hooks.callHookWith(
    (a) => {
      a.forEach((c) => c({
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
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
var Hd, Wd, Pt = (Wd = (Hd = he).__VUE_DEVTOOLS_HOOK) != null ? Wd : Hd.__VUE_DEVTOOLS_HOOK = Nm(), e0 = {
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
}, Hm = {
  on: e0,
  setupDevToolsPlugin(e, t) {
    return Pt.callHook("devtools-plugin:setup", e, t);
  }
}, t0 = class {
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
    if (ft.highPerfModeEnabled)
      return;
    const n = $m().find((s) => s.packageName === this.plugin.descriptor.packageName);
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
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && J1(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    ft.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    ft.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return ft.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    ft.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
  }
  // settings
  getSettings(e) {
    return Um(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
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
}, n0 = t0;
X();
X();
X();
X();
var s0 = "__vue_devtool_undefined__", o0 = "__vue_devtool_infinity__", r0 = "__vue_devtool_negative_infinity__", i0 = "__vue_devtool_nan__";
X();
X();
var a0 = {
  [s0]: "undefined",
  [i0]: "NaN",
  [o0]: "Infinity",
  [r0]: "-Infinity"
};
Object.entries(a0).reduce((e, [t, n]) => (e[n] = t, e), {});
X();
X();
X();
X();
X();
var Kd, zd;
(zd = (Kd = he).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (Kd.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function Wm(e, t) {
  return Hm.setupDevToolsPlugin(e, t);
}
function l0(e, t) {
  const [n, s] = e;
  if (n.app !== t)
    return;
  const o = new n0({
    plugin: {
      setupFn: s,
      descriptor: n
    },
    ctx: $o
  });
  n.packageName === "vuex" && o.on.editInspectorState((r) => {
    o.sendInspectorState(r.inspectorId);
  }), s(o);
}
function Km(e, t) {
  he.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || ft.highPerfModeEnabled && !t?.inspectingComponent || (he.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), zc.forEach((n) => {
    l0(n, e);
  }));
}
X();
X();
var kr = "__VUE_DEVTOOLS_ROUTER__", Oo = "__VUE_DEVTOOLS_ROUTER_INFO__", qd, Yd;
(Yd = (qd = he)[Oo]) != null || (qd[Oo] = {
  currentRoute: null,
  routes: []
});
var Xd, Gd;
(Gd = (Xd = he)[kr]) != null || (Xd[kr] = {});
new Proxy(he[Oo], {
  get(e, t) {
    return he[Oo][t];
  }
});
new Proxy(he[kr], {
  get(e, t) {
    if (t === "value")
      return he[kr];
  }
});
function c0(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Yc(e) {
  return e.map((t) => {
    let { path: n, name: s, children: o, meta: r } = t;
    return o?.length && (o = Yc(o)), {
      path: n,
      name: s,
      children: o,
      meta: r
    };
  });
}
function u0(e) {
  if (e) {
    const { fullPath: t, hash: n, href: s, path: o, name: r, matched: i, params: a, query: c } = e;
    return {
      fullPath: t,
      hash: n,
      href: s,
      path: o,
      name: r,
      params: a,
      query: c,
      matched: Yc(i)
    };
  }
  return e;
}
function d0(e, t) {
  function n() {
    var s;
    const o = (s = e.app) == null ? void 0 : s.config.globalProperties.$router, r = u0(o?.currentRoute.value), i = Yc(c0(o)), a = console.warn;
    console.warn = () => {
    }, he[Oo] = {
      currentRoute: r ? bd(r) : {},
      routes: bd(i)
    }, he[kr] = o, console.warn = a;
  }
  n(), Hm.on.componentUpdated(Co(() => {
    var s;
    ((s = t.value) == null ? void 0 : s.app) === e.app && (n(), !ft.highPerfModeEnabled && $o.hooks.callHook("routerInfoUpdated", { state: he[Oo] }));
  }, 200));
}
function f0(e) {
  return {
    // get inspector tree
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: At.value.app,
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
        app: At.value.app,
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
      const n = new F1(), s = {
        ...t,
        app: At.value.app,
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
      const n = Ni(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return R1();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return x1();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = Hl(At.value, t);
      if (n)
        return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return I1({ id: t });
    },
    // open in editor
    openInEditor: G1,
    // get vue inspector
    getVueInspector: V1,
    // toggle app
    toggleApp(t, n) {
      const s = wa.value.find((o) => o.id === t);
      s && (X1(t), Y1(s), d0(s, At), Bm(), Km(s.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = Hl(At.value, t);
      if (n) {
        const [s] = jc(n);
        s && (he.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = s);
      }
    },
    updatePluginSettings(t, n, s) {
      Z1(t, n, s);
    },
    getPluginSettings(t) {
      return {
        options: Q1(t),
        values: Um(t)
      };
    }
  };
}
X();
var Qd, Jd;
(Jd = (Qd = he).__VUE_DEVTOOLS_ENV__) != null || (Qd.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var Zd = K1(), ef, tf;
(tf = (ef = he).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (ef.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: Zd,
  get state() {
    return {
      ...ft,
      activeAppRecordId: At.id,
      activeAppRecord: At.value,
      appRecords: wa.value
    };
  },
  api: f0(Zd)
});
var $o = he.__VUE_DEVTOOLS_KIT_CONTEXT__;
X();
p1(m1());
var nf, sf;
(sf = (nf = he).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (nf.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
X();
X();
function p0(e) {
  ft.highPerfModeEnabled = e ?? !ft.highPerfModeEnabled, !e && At.value && Km(At.value.app);
}
X();
X();
X();
function h0(e) {
  ft.devtoolsClientDetected = {
    ...ft.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(ft.devtoolsClientDetected).some(Boolean);
  p0(!t);
}
var of, rf;
(rf = (of = he).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (of.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = h0);
X();
X();
X();
X();
X();
X();
X();
var m0 = class {
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
    this.generateIdentifier = e, this.kv = new m0();
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
}, g0 = class extends zm {
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
X();
X();
function v0(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function _0(e, t) {
  const n = v0(e);
  if ("find" in n)
    return n.find(t);
  const s = n;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t(r))
      return r;
  }
}
function To(e, t) {
  Object.entries(e).forEach(([n, s]) => t(s, n));
}
function Di(e, t) {
  return e.indexOf(t) !== -1;
}
function af(e, t) {
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (t(s))
      return s;
  }
}
var y0 = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return _0(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
X();
X();
var b0 = (e) => Object.prototype.toString.call(e).slice(8, -1), qm = (e) => typeof e > "u", E0 = (e) => e === null, xr = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, ql = (e) => xr(e) && Object.keys(e).length === 0, fs = (e) => Array.isArray(e), w0 = (e) => typeof e == "string", A0 = (e) => typeof e == "number" && !isNaN(e), S0 = (e) => typeof e == "boolean", C0 = (e) => e instanceof RegExp, Rr = (e) => e instanceof Map, Ir = (e) => e instanceof Set, Ym = (e) => b0(e) === "Symbol", O0 = (e) => e instanceof Date && !isNaN(e.valueOf()), T0 = (e) => e instanceof Error, lf = (e) => typeof e == "number" && isNaN(e), N0 = (e) => S0(e) || E0(e) || qm(e) || A0(e) || w0(e) || Ym(e), D0 = (e) => typeof e == "bigint", k0 = (e) => e === 1 / 0 || e === -1 / 0, x0 = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), R0 = (e) => e instanceof URL;
X();
var Xm = (e) => e.replace(/\./g, "\\."), Za = (e) => e.map(String).map(Xm).join("."), gr = (e) => {
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
X();
function yn(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Gm = [
  yn(qm, "undefined", () => null, () => {
  }),
  yn(D0, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  yn(O0, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  yn(T0, "Error", (e, t) => {
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
  yn(C0, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  yn(
    Ir,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  yn(Rr, "map", (e) => [...e.entries()], (e) => new Map(e)),
  yn((e) => lf(e) || k0(e), "number", (e) => lf(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  yn((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  yn(R0, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Aa(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Qm = Aa((e, t) => Ym(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const s = n.symbolRegistry.getValue(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown symbol");
  return s;
}), I0 = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Jm = Aa(x0, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = I0[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function Zm(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var eg = Aa(Zm, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), tg = Aa((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const s = n.customTransformerRegistry.findByName(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown custom value");
  return s.deserialize(e);
}), M0 = [eg, Qm, tg, Jm], cf = (e, t) => {
  const n = af(M0, (o) => o.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const s = af(Gm, (o) => o.isApplicable(e, t));
  if (s)
    return {
      value: s.transform(e, t),
      type: s.annotation
    };
}, ng = {};
Gm.forEach((e) => {
  ng[e.annotation] = e;
});
var P0 = (e, t, n) => {
  if (fs(t))
    switch (t[0]) {
      case "symbol":
        return Qm.untransform(e, t, n);
      case "class":
        return eg.untransform(e, t, n);
      case "custom":
        return tg.untransform(e, t, n);
      case "typed-array":
        return Jm.untransform(e, t, n);
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
X();
var go = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function sg(e) {
  if (Di(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Di(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Di(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var V0 = (e, t) => {
  sg(t);
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (Ir(e))
      e = go(e, +s);
    else if (Rr(e)) {
      const o = +s, r = +t[++n] == 0 ? "key" : "value", i = go(e, o);
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
}, Yl = (e, t, n) => {
  if (sg(t), t.length === 0)
    return n(e);
  let s = e;
  for (let r = 0; r < t.length - 1; r++) {
    const i = t[r];
    if (fs(s)) {
      const a = +i;
      s = s[a];
    } else if (xr(s))
      s = s[i];
    else if (Ir(s)) {
      const a = +i;
      s = go(s, a);
    } else if (Rr(s)) {
      if (r === t.length - 2)
        break;
      const c = +i, f = +t[++r] == 0 ? "key" : "value", u = go(s, c);
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
  if (fs(s) ? s[+o] = n(s[+o]) : xr(s) && (s[o] = n(s[o])), Ir(s)) {
    const r = go(s, +o), i = n(r);
    r !== i && (s.delete(r), s.add(i));
  }
  if (Rr(s)) {
    const r = +t[t.length - 2], i = go(s, r);
    switch (+o == 0 ? "key" : "value") {
      case "key": {
        const c = n(i);
        s.set(c, s.get(i)), c !== i && s.delete(i);
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
function Xl(e, t, n = []) {
  if (!e)
    return;
  if (!fs(e)) {
    To(e, (r, i) => Xl(r, t, [...n, ...gr(i)]));
    return;
  }
  const [s, o] = e;
  o && To(o, (r, i) => {
    Xl(r, t, [...n, ...gr(i)]);
  }), t(s, n);
}
function L0(e, t, n) {
  return Xl(t, (s, o) => {
    e = Yl(e, o, (r) => P0(r, s, n));
  }), e;
}
function F0(e, t) {
  function n(s, o) {
    const r = V0(e, gr(o));
    s.map(gr).forEach((i) => {
      e = Yl(e, i, () => r);
    });
  }
  if (fs(t)) {
    const [s, o] = t;
    s.forEach((r) => {
      e = Yl(e, gr(r), () => e);
    }), o && To(o, n);
  } else
    To(t, n);
  return e;
}
var B0 = (e, t) => xr(e) || fs(e) || Rr(e) || Ir(e) || Zm(e, t);
function $0(e, t, n) {
  const s = n.get(e);
  s ? s.push(t) : n.set(e, [t]);
}
function j0(e, t) {
  const n = {};
  let s;
  return e.forEach((o) => {
    if (o.length <= 1)
      return;
    t || (o = o.map((a) => a.map(String)).sort((a, c) => a.length - c.length));
    const [r, ...i] = o;
    r.length === 0 ? s = i.map(Za) : n[Za(r)] = i.map(Za);
  }), s ? ql(n) ? [s] : [s, n] : ql(n) ? void 0 : n;
}
var og = (e, t, n, s, o = [], r = [], i = /* @__PURE__ */ new Map()) => {
  var a;
  const c = N0(e);
  if (!c) {
    $0(e, o, t);
    const m = i.get(e);
    if (m)
      return s ? {
        transformedValue: null
      } : m;
  }
  if (!B0(e, n)) {
    const m = cf(e, n), g = m ? {
      transformedValue: m.value,
      annotations: [m.type]
    } : {
      transformedValue: e
    };
    return c || i.set(e, g), g;
  }
  if (Di(r, e))
    return {
      transformedValue: null
    };
  const f = cf(e, n), u = (a = f?.value) != null ? a : e, d = fs(u) ? [] : {}, p = {};
  To(u, (m, g) => {
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);
    const v = og(m, t, n, s, [...o, g], [...r, e], i);
    d[g] = v.transformedValue, fs(v.annotations) ? p[g] = v.annotations : xr(v.annotations) && To(v.annotations, (y, b) => {
      p[Xm(g) + "." + b] = y;
    });
  });
  const h = ql(p) ? {
    transformedValue: d,
    annotations: f ? [f.type] : void 0
  } : {
    transformedValue: d,
    annotations: f ? [f.type, p] : p
  };
  return c || i.set(e, h), h;
};
X();
X();
function rg(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function uf(e) {
  return rg(e) === "Array";
}
function U0(e) {
  if (rg(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function H0(e, t, n, s, o) {
  const r = {}.propertyIsEnumerable.call(s, t) ? "enumerable" : "nonenumerable";
  r === "enumerable" && (e[t] = n), o && r === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Gl(e, t = {}) {
  if (uf(e))
    return e.map((o) => Gl(o, t));
  if (!U0(e))
    return e;
  const n = Object.getOwnPropertyNames(e), s = Object.getOwnPropertySymbols(e);
  return [...n, ...s].reduce((o, r) => {
    if (uf(t.props) && !t.props.includes(r))
      return o;
    const i = e[r], a = Gl(i, t);
    return H0(o, r, a, e, t.nonenumerable), o;
  }, {});
}
var Xe = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new g0(), this.symbolRegistry = new zm((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new y0(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = og(e, t, this, this.dedupe), s = {
      json: n.transformedValue
    };
    n.annotations && (s.meta = {
      ...s.meta,
      values: n.annotations
    });
    const o = j0(t, this.dedupe);
    return o && (s.meta = {
      ...s.meta,
      referentialEqualities: o
    }), s;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let s = Gl(t);
    return n?.values && (s = L0(s, n.values, this)), n?.referentialEqualities && (s = F0(s, n.referentialEqualities)), s;
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
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
X();
var df, ff;
(ff = (df = he).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (df.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var pf, hf;
(hf = (pf = he).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (pf.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var mf, gf;
(gf = (mf = he).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (mf.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var vf, _f;
(_f = (vf = he).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (vf.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var yf, bf;
(bf = (yf = he).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (yf.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var Ef, wf;
(wf = (Ef = he).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (Ef.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
X();
X();
X();
X();
X();
X();
X();
var Le = {};
let lr;
const Mr = (e) => lr = e, ig = Le.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Xs(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var On;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(On || (On = {}));
const as = typeof window < "u", Af = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function W0(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Xc(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    cg(s.response, t, n);
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
function ki(e) {
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
const xi = typeof navigator == "object" ? navigator : { userAgent: "" }, lg = /Macintosh/.test(xi.userAgent) && /AppleWebKit/.test(xi.userAgent) && !/Safari/.test(xi.userAgent), cg = as ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !lg ? K0 : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in xi ? z0 : (
      // Fallback to using FileReader and a popup
      q0
    )
  )
) : () => {
};
function K0(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? ag(s.href) ? Xc(e, t, n) : (s.target = "_blank", ki(s)) : ki(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    ki(s);
  }, 0));
}
function z0(e, t = "download", n) {
  if (typeof e == "string")
    if (ag(e))
      Xc(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        ki(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(W0(e, n), t);
}
function q0(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return Xc(e, t, n);
  const o = e.type === "application/octet-stream", r = /constructor/i.test(String(Af.HTMLElement)) || "safari" in Af, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || o && r || lg) && typeof FileReader < "u") {
    const a = new FileReader();
    a.onloadend = function() {
      let c = a.result;
      if (typeof c != "string")
        throw s = null, new Error("Wrong reader.result type");
      c = i ? c : c.replace(/^data:[^;]*;/, "data:attachment/file;"), s ? s.location.href = c : location.assign(c), s = null;
    }, a.readAsDataURL(e);
  } else {
    const a = URL.createObjectURL(e);
    s ? s.location.assign(a) : location.href = a, s = null, setTimeout(function() {
      URL.revokeObjectURL(a);
    }, 4e4);
  }
}
function pt(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Gc(e) {
  return "_a" in e && "install" in e;
}
function ug() {
  if (!("clipboard" in navigator))
    return pt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function dg(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (pt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Y0(e) {
  if (!ug())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), pt("Global state copied to clipboard.");
    } catch (t) {
      if (dg(t))
        return;
      pt("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function X0(e) {
  if (!ug())
    try {
      fg(e, JSON.parse(await navigator.clipboard.readText())), pt("Global state pasted from clipboard.");
    } catch (t) {
      if (dg(t))
        return;
      pt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function G0(e) {
  try {
    cg(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    pt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Vn;
function Q0() {
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
async function J0(e) {
  try {
    const n = await Q0()();
    if (!n)
      return;
    const { text: s, file: o } = n;
    fg(e, JSON.parse(s)), pt(`Global state imported from "${o.name}".`);
  } catch (t) {
    pt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
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
const pg = "🍍 Pinia (root)", Ri = "_root";
function Z0(e) {
  return Gc(e) ? {
    id: Ri,
    label: pg
  } : {
    id: e.$id,
    label: e.$id
  };
}
function ew(e) {
  if (Gc(e)) {
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
          value: i._getters.reduce((a, c) => (a[c] = i[c], a), {})
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
    case On.direct:
      return "mutation";
    case On.patchFunction:
      return "$patch";
    case On.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let vo = !0;
const Ii = [], Ts = "pinia:mutations", gt = "pinia", { assign: sw } = Object, ea = (e) => "🍍 " + e;
function ow(e, t) {
  Wm({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Ii,
    app: e
  }, (n) => {
    typeof n.now != "function" && pt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Ts,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: gt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Y0(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await X0(t), n.sendInspectorTree(gt), n.sendInspectorState(gt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            G0(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await J0(t), n.sendInspectorTree(gt), n.sendInspectorState(gt);
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
            o ? typeof o.$reset != "function" ? pt(`Cannot reset "${s}" store because it doesn't have a "$reset" method implemented.`, "warn") : (o.$reset(), pt(`Store "${s}" reset.`)) : pt(`Cannot reset "${s}" store because it wasn't found.`, "warn");
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
                value: Oe(i.$state),
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
              Object.keys(i.$state).reduce((a, c) => (a[c] = i.$state[c], a), {})
            )
          }), i._getters && i._getters.length && s.instanceData.state.push({
            type: ea(i.$id),
            key: "getters",
            editable: !1,
            value: i._getters.reduce((a, c) => {
              try {
                a[c] = i[c];
              } catch (f) {
                a[c] = f;
              }
              return a;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((s) => {
      if (s.app === e && s.inspectorId === gt) {
        let o = [t];
        o = o.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? o.filter((r) => "$id" in r ? r.$id.toLowerCase().includes(s.filter.toLowerCase()) : pg.toLowerCase().includes(s.filter.toLowerCase())) : o).map(Z0);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === gt) {
        const o = s.nodeId === Ri ? t : t._s.get(s.nodeId);
        if (!o)
          return;
        o && (s.nodeId !== Ri && (globalThis.$store = Oe(o)), s.state = ew(o));
      }
    }), n.on.editInspectorState((s) => {
      if (s.app === e && s.inspectorId === gt) {
        const o = s.nodeId === Ri ? t : t._s.get(s.nodeId);
        if (!o)
          return pt(`store "${s.nodeId}" not found`, "error");
        const { path: r } = s;
        Gc(o) ? r.unshift("state") : (r.length !== 1 || !o._customProperties.has(r[0]) || r[0] in o.$state) && r.unshift("$state"), vo = !1, s.set(o, r, s.state.value), vo = !0;
      }
    }), n.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const o = s.type.replace(/^🍍\s*/, ""), r = t._s.get(o);
        if (!r)
          return pt(`store "${o}" not found`, "error");
        const { path: i } = s;
        if (i[0] !== "state")
          return pt(`Invalid path for store "${o}":
${i}
Only state can be modified.`);
        i[0] = "$state", vo = !1, s.set(r, i, s.state.value), vo = !0;
      }
    });
  });
}
function rw(e, t) {
  Ii.includes(ea(t.$id)) || Ii.push(ea(t.$id)), Wm({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Ii,
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
    t.$onAction(({ after: i, onError: a, name: c, args: f }) => {
      const u = hg++;
      n.addTimelineEvent({
        layerId: Ts,
        event: {
          time: s(),
          title: "🛫 " + c,
          subtitle: "start",
          data: {
            store: en(t.$id),
            action: en(c),
            args: f
          },
          groupId: u
        }
      }), i((d) => {
        ls = void 0, n.addTimelineEvent({
          layerId: Ts,
          event: {
            time: s(),
            title: "🛬 " + c,
            subtitle: "end",
            data: {
              store: en(t.$id),
              action: en(c),
              args: f,
              result: d
            },
            groupId: u
          }
        });
      }), a((d) => {
        ls = void 0, n.addTimelineEvent({
          layerId: Ts,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + c,
            subtitle: "end",
            data: {
              store: en(t.$id),
              action: en(c),
              args: f,
              error: d
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((i) => {
      Rt(() => ne(t[i]), (a, c) => {
        n.notifyComponentUpdate(), n.sendInspectorState(gt), vo && n.addTimelineEvent({
          layerId: Ts,
          event: {
            time: s(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: a,
              oldValue: c
            },
            groupId: ls
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: i, type: a }, c) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(gt), !vo)
        return;
      const f = {
        time: s(),
        title: nw(a),
        data: sw({ store: en(t.$id) }, tw(i)),
        groupId: ls
      };
      a === On.patchFunction ? f.subtitle = "⤵️" : a === On.patchObject ? f.subtitle = "🧩" : i && !Array.isArray(i) && (f.subtitle = i.type), i && (f.data["rawEvent(s)"] = {
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
    t._hotUpdate = is((i) => {
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
      }), n.notifyComponentUpdate(), n.sendInspectorTree(gt), n.sendInspectorState(gt);
    });
    const { $dispose: r } = t;
    t.$dispose = () => {
      r(), n.notifyComponentUpdate(), n.sendInspectorTree(gt), n.sendInspectorState(gt), n.getSettings().logStoreChanges && pt(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(gt), n.sendInspectorState(gt), n.getSettings().logStoreChanges && pt(`"${t.$id}" store installed 🆕`);
  });
}
let hg = 0, ls;
function Sf(e, t, n) {
  const s = t.reduce((o, r) => (o[r] = Oe(e)[r], o), {});
  for (const o in s)
    e[o] = function() {
      const r = hg, i = n ? new Proxy(e, {
        get(...c) {
          return ls = r, Reflect.get(...c);
        },
        set(...c) {
          return ls = r, Reflect.set(...c);
        }
      }) : e;
      ls = r;
      const a = s[o].apply(i, arguments);
      return ls = void 0, a;
    };
}
function iw({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      Sf(t, Object.keys(n.actions), t._isOptionsAPI);
      const s = t._hotUpdate;
      Oe(t)._hotUpdate = function(o) {
        s.apply(this, arguments), Sf(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
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
  const e = Zp(!0), t = e.run(() => H({}));
  let n = [], s = [];
  const o = is({
    install(r) {
      Mr(o), o._a = r, r.provide(ig, o), r.config.globalProperties.$pinia = o, Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && as && ow(r, o), s.forEach((i) => n.push(i)), s = [];
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
  return Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && as && typeof Proxy < "u" && o.use(iw), o;
}
function mg(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    Xs(o) && Xs(s) && !Ye(s) && !rn(s) ? e[n] = mg(o, s) : e[n] = s;
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
  return !n && eh() && j_(o), o;
}
function io(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const lw = (e) => e(), Of = Symbol(), el = Symbol();
function Ql(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    Xs(o) && Xs(s) && e.hasOwnProperty(n) && !Ye(s) && !rn(s) ? e[n] = Ql(o, s) : e[n] = s;
  }
  return e;
}
const cw = Le.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function uw(e) {
  return !Xs(e) || !Object.prototype.hasOwnProperty.call(e, cw);
}
const { assign: Kt } = Object;
function Tf(e) {
  return !!(Ye(e) && e.effect);
}
function Nf(e, t, n, s) {
  const { state: o, actions: r, getters: i } = t, a = n.state.value[e];
  let c;
  function f() {
    !a && (Le.NODE_ENV === "production" || !s) && (n.state.value[e] = o ? o() : {});
    const u = Le.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      un(H(o ? o() : {}).value)
    ) : un(n.state.value[e]);
    return Kt(u, r, Object.keys(i || {}).reduce((d, p) => (Le.NODE_ENV !== "production" && p in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${p}" in store "${e}".`), d[p] = is(j(() => {
      Mr(n);
      const h = n._s.get(e);
      return i[p].call(h, h);
    })), d), {}));
  }
  return c = Jl(e, f, t, n, s, !0), c;
}
function Jl(e, t, n = {}, s, o, r) {
  let i;
  const a = Kt({ actions: {} }, n);
  if (Le.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const c = { deep: !0 };
  Le.NODE_ENV !== "production" && (c.onTrigger = (w) => {
    f ? h = w : f == !1 && !N._hotUpdating && (Array.isArray(h) ? h.push(w) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let f, u, d = [], p = [], h;
  const m = s.state.value[e];
  !r && !m && (Le.NODE_ENV === "production" || !o) && (s.state.value[e] = {});
  const g = H({});
  let v;
  function y(w) {
    let D;
    f = u = !1, Le.NODE_ENV !== "production" && (h = []), typeof w == "function" ? (w(s.state.value[e]), D = {
      type: On.patchFunction,
      storeId: e,
      events: h
    }) : (Ql(s.state.value[e], w), D = {
      type: On.patchObject,
      payload: w,
      storeId: e,
      events: h
    });
    const A = v = Symbol();
    Ks().then(() => {
      v === A && (f = !0);
    }), u = !0, io(d, D, s.state.value[e]);
  }
  const b = r ? function() {
    const { state: D } = n, A = D ? D() : {};
    this.$patch((F) => {
      Kt(F, A);
    });
  } : (
    /* istanbul ignore next */
    Le.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : gg
  );
  function _() {
    i.stop(), d = [], p = [], s._s.delete(e);
  }
  const x = (w, D = "") => {
    if (Of in w)
      return w[el] = D, w;
    const A = function() {
      Mr(s);
      const F = Array.from(arguments), de = [], Y = [];
      function re(be) {
        de.push(be);
      }
      function K(be) {
        Y.push(be);
      }
      io(p, {
        args: F,
        name: A[el],
        store: N,
        after: re,
        onError: K
      });
      let le;
      try {
        le = w.apply(this && this.$id === e ? this : N, F);
      } catch (be) {
        throw io(Y, be), be;
      }
      return le instanceof Promise ? le.then((be) => (io(de, be), be)).catch((be) => (io(Y, be), Promise.reject(be))) : (io(de, le), le);
    };
    return A[Of] = !0, A[el] = D, A;
  }, k = /* @__PURE__ */ is({
    actions: {},
    getters: {},
    state: [],
    hotState: g
  }), O = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Cf.bind(null, p),
    $patch: y,
    $reset: b,
    $subscribe(w, D = {}) {
      const A = Cf(d, w, D.detached, () => F()), F = i.run(() => Rt(() => s.state.value[e], (de) => {
        (D.flush === "sync" ? u : f) && w({
          storeId: e,
          type: On.direct,
          events: h
        }, de);
      }, Kt({}, c, D)));
      return A;
    },
    $dispose: _
  }, N = us(Le.NODE_ENV !== "production" || Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && as ? Kt(
    {
      _hmrPayload: k,
      _customProperties: is(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    O
    // must be added later
    // setupStore
  ) : O);
  s._s.set(e, N);
  const C = (s._a && s._a.runWithContext || lw)(() => s._e.run(() => (i = Zp()).run(() => t({ action: x }))));
  for (const w in C) {
    const D = C[w];
    if (Ye(D) && !Tf(D) || rn(D))
      Le.NODE_ENV !== "production" && o ? g.value[w] = bi(C, w) : r || (m && uw(D) && (Ye(D) ? D.value = m[w] : Ql(D, m[w])), s.state.value[e][w] = D), Le.NODE_ENV !== "production" && k.state.push(w);
    else if (typeof D == "function") {
      const A = Le.NODE_ENV !== "production" && o ? D : x(D, w);
      C[w] = A, Le.NODE_ENV !== "production" && (k.actions[w] = D), a.actions[w] = D;
    } else Le.NODE_ENV !== "production" && Tf(D) && (k.getters[w] = r ? (
      // @ts-expect-error
      n.getters[w]
    ) : D, as && (C._getters || // @ts-expect-error: same
    (C._getters = is([]))).push(w));
  }
  if (Kt(N, C), Kt(Oe(N), C), Object.defineProperty(N, "$state", {
    get: () => Le.NODE_ENV !== "production" && o ? g.value : s.state.value[e],
    set: (w) => {
      if (Le.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      y((D) => {
        Kt(D, w);
      });
    }
  }), Le.NODE_ENV !== "production" && (N._hotUpdate = is((w) => {
    N._hotUpdating = !0, w._hmrPayload.state.forEach((D) => {
      if (D in N.$state) {
        const A = w.$state[D], F = N.$state[D];
        typeof A == "object" && Xs(A) && Xs(F) ? mg(A, F) : w.$state[D] = F;
      }
      N[D] = bi(w.$state, D);
    }), Object.keys(N.$state).forEach((D) => {
      D in w.$state || delete N[D];
    }), f = !1, u = !1, s.state.value[e] = bi(w._hmrPayload, "hotState"), u = !0, Ks().then(() => {
      f = !0;
    });
    for (const D in w._hmrPayload.actions) {
      const A = w[D];
      N[D] = //
      x(A, D);
    }
    for (const D in w._hmrPayload.getters) {
      const A = w._hmrPayload.getters[D], F = r ? (
        // special handling of options api
        j(() => (Mr(s), A.call(N, N)))
      ) : A;
      N[D] = //
      F;
    }
    Object.keys(N._hmrPayload.getters).forEach((D) => {
      D in w._hmrPayload.getters || delete N[D];
    }), Object.keys(N._hmrPayload.actions).forEach((D) => {
      D in w._hmrPayload.actions || delete N[D];
    }), N._hmrPayload = w._hmrPayload, N._getters = w._getters, N._hotUpdating = !1;
  })), Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && as) {
    const w = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((D) => {
      Object.defineProperty(N, D, Kt({ value: N[D] }, w));
    });
  }
  return s._p.forEach((w) => {
    if (Le.NODE_ENV !== "production" && Le.NODE_ENV !== "test" && as) {
      const D = i.run(() => w({
        store: N,
        app: s._a,
        pinia: s,
        options: a
      }));
      Object.keys(D || {}).forEach((A) => N._customProperties.add(A)), Kt(N, D);
    } else
      Kt(N, i.run(() => w({
        store: N,
        app: s._a,
        pinia: s,
        options: a
      })));
  }), Le.NODE_ENV !== "production" && N.$state && typeof N.$state == "object" && typeof N.$state.constructor == "function" && !N.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${N.$id}".`), m && r && n.hydrate && n.hydrate(N.$state, m), f = !0, u = !0, N;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Xn(e, t, n) {
  let s;
  const o = typeof t == "function";
  s = o ? n : t;
  function r(i, a) {
    const c = pb();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (Le.NODE_ENV === "test" && lr && lr._testing ? null : i) || (c ? Ft(ig, null) : null), i && Mr(i), Le.NODE_ENV !== "production" && !lr)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = lr, i._s.has(e) || (o ? Jl(e, t, s, i) : Nf(e, s, i), Le.NODE_ENV !== "production" && (r._pinia = i));
    const f = i._s.get(e);
    if (Le.NODE_ENV !== "production" && a) {
      const u = "__hot:" + e, d = o ? Jl(u, t, s, i, !0) : Nf(u, Kt({}, s), i, !0);
      a._hotUpdate(d), delete i.state.value[u], i._s.delete(u);
    }
    if (Le.NODE_ENV !== "production" && as) {
      const u = Yn();
      if (u && u.proxy && // avoid adding stores that are just built for hot module replacement
      !a) {
        const d = u.proxy, p = "_pStores" in d ? d._pStores : d._pStores = {};
        p[e] = f;
      }
    }
    return f;
  }
  return r.$id = e, r;
}
function jo(e) {
  const t = Oe(e), n = {};
  for (const s in t) {
    const o = t[s];
    o.effect ? n[s] = // ...
    j({
      get: () => e[s],
      set(r) {
        e[s] = r;
      }
    }) : (Ye(o) || rn(o)) && (n[s] = // ---
    bi(e, s));
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
let ao, Zl;
function mw() {
  var e;
  return ao !== void 0 || (typeof window < "u" && window.performance ? (ao = !0, Zl = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (ao = !0, Zl = globalThis.perf_hooks.performance) : ao = !1), ao;
}
function gw() {
  return mw() ? Zl.now() : Date.now();
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
      get: (i, a) => this.target ? this.target.on[a] : (...c) => {
        this.onQueue.push({
          method: a,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...c) => (this.targetQueue.push({
        method: a,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[a](...c)) : (...c) => new Promise((f) => {
        this.targetQueue.push({
          method: a,
          args: c,
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
var Ne = {};
const Bn = typeof document < "u";
function _g(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function yw(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && _g(e.default);
}
const je = Object.assign;
function tl(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = Bt(o) ? o.map(e) : e(o);
  }
  return n;
}
const vr = () => {
}, Bt = Array.isArray;
function Pe(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const yg = /#/g, bw = /&/g, Ew = /\//g, ww = /=/g, Aw = /\?/g, bg = /\+/g, Sw = /%5B/g, Cw = /%5D/g, Eg = /%5E/g, Ow = /%60/g, wg = /%7B/g, Tw = /%7C/g, Ag = /%7D/g, Nw = /%20/g;
function Qc(e) {
  return encodeURI("" + e).replace(Tw, "|").replace(Sw, "[").replace(Cw, "]");
}
function Dw(e) {
  return Qc(e).replace(wg, "{").replace(Ag, "}").replace(Eg, "^");
}
function ec(e) {
  return Qc(e).replace(bg, "%2B").replace(Nw, "+").replace(yg, "%23").replace(bw, "%26").replace(Ow, "`").replace(wg, "{").replace(Ag, "}").replace(Eg, "^");
}
function kw(e) {
  return ec(e).replace(ww, "%3D");
}
function xw(e) {
  return Qc(e).replace(yg, "%23").replace(Aw, "%3F");
}
function Rw(e) {
  return e == null ? "" : xw(e).replace(Ew, "%2F");
}
function No(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    Ne.NODE_ENV !== "production" && Pe(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const Iw = /\/$/, Mw = (e) => e.replace(Iw, "");
function nl(e, t, n = "/") {
  let s, o = {}, r = "", i = "";
  const a = t.indexOf("#");
  let c = t.indexOf("?");
  return a < c && a >= 0 && (c = -1), c > -1 && (s = t.slice(0, c), r = t.slice(c + 1, a > -1 ? a : t.length), o = e(r)), a > -1 && (s = s || t.slice(0, a), i = t.slice(a, t.length)), s = Lw(s ?? t, n), {
    fullPath: s + (r && "?") + r + i,
    path: s,
    query: o,
    hash: No(i)
  };
}
function Pw(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Df(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function kf(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && ps(t.matched[s], n.matched[o]) && Sg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ps(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Sg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Vw(e[n], t[n]))
      return !1;
  return !0;
}
function Vw(e, t) {
  return Bt(e) ? xf(e, t) : Bt(t) ? xf(t, e) : e === t;
}
function xf(e, t) {
  return Bt(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Lw(e, t) {
  if (e.startsWith("/"))
    return e;
  if (Ne.NODE_ENV !== "production" && !t.startsWith("/"))
    return Pe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var Pr;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Pr || (Pr = {}));
var _r;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(_r || (_r = {}));
function Fw(e) {
  if (!e)
    if (Bn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Mw(e);
}
const Bw = /^[^#]+#/;
function $w(e, t) {
  return e.replace(Bw, "#") + t;
}
function jw(e, t) {
  const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  };
}
const Sa = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Uw(e) {
  let t;
  if ("el" in e) {
    const n = e.el, s = typeof n == "string" && n.startsWith("#");
    if (Ne.NODE_ENV !== "production" && typeof e.el == "string" && (!s || !document.getElementById(e.el.slice(1))))
      try {
        const r = document.querySelector(e.el);
        if (s && r) {
          Pe(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        Pe(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      Ne.NODE_ENV !== "production" && Pe(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = jw(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Rf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const tc = /* @__PURE__ */ new Map();
function Hw(e, t) {
  tc.set(e, t);
}
function Ww(e) {
  const t = tc.get(e);
  return tc.delete(e), t;
}
let Kw = () => location.protocol + "//" + location.host;
function Cg(e, t) {
  const { pathname: n, search: s, hash: o } = t, r = e.indexOf("#");
  if (r > -1) {
    let a = o.includes(e.slice(r)) ? e.slice(r).length : 1, c = o.slice(a);
    return c[0] !== "/" && (c = "/" + c), Df(c, "");
  }
  return Df(n, e) + s + o;
}
function zw(e, t, n, s) {
  let o = [], r = [], i = null;
  const a = ({ state: p }) => {
    const h = Cg(e, location), m = n.value, g = t.value;
    let v = 0;
    if (p) {
      if (n.value = h, t.value = p, i && i === m) {
        i = null;
        return;
      }
      v = g ? p.position - g.position : 0;
    } else
      s(h);
    o.forEach((y) => {
      y(n.value, m, {
        delta: v,
        type: Pr.pop,
        direction: v ? v > 0 ? _r.forward : _r.back : _r.unknown
      });
    });
  };
  function c() {
    i = n.value;
  }
  function f(p) {
    o.push(p);
    const h = () => {
      const m = o.indexOf(p);
      m > -1 && o.splice(m, 1);
    };
    return r.push(h), h;
  }
  function u() {
    const { history: p } = window;
    p.state && p.replaceState(je({}, p.state, { scroll: Sa() }), "");
  }
  function d() {
    for (const p of r)
      p();
    r = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: c,
    listen: f,
    destroy: d
  };
}
function If(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? Sa() : null
  };
}
function qw(e) {
  const { history: t, location: n } = window, s = {
    value: Cg(e, n)
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
  function r(c, f, u) {
    const d = e.indexOf("#"), p = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : Kw() + e + c;
    try {
      t[u ? "replaceState" : "pushState"](f, "", p), o.value = f;
    } catch (h) {
      Ne.NODE_ENV !== "production" ? Pe("Error with push/replace State", h) : console.error(h), n[u ? "replace" : "assign"](p);
    }
  }
  function i(c, f) {
    const u = je({}, t.state, If(
      o.value.back,
      // keep back and forward entries but override current position
      c,
      o.value.forward,
      !0
    ), f, { position: o.value.position });
    r(c, u, !0), s.value = c;
  }
  function a(c, f) {
    const u = je(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: c,
        scroll: Sa()
      }
    );
    Ne.NODE_ENV !== "production" && !t.state && Pe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), r(u.current, u, !0);
    const d = je({}, If(s.value, c, null), { position: u.position + 1 }, f);
    r(c, d, !1), s.value = c;
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
  const o = je({
    // it's overridden right after
    location: "",
    base: e,
    go: s,
    createHref: $w.bind(null, e)
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
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Ne.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Pe(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Yw(e);
}
function ta(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Og(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const nc = Symbol(Ne.NODE_ENV !== "production" ? "navigation failure" : "");
var Mf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Mf || (Mf = {}));
const Gw = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Jw(t)}" via a navigation guard.`;
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
function Do(e, t) {
  return Ne.NODE_ENV !== "production" ? je(new Error(Gw[e](t)), {
    type: e,
    [nc]: !0
  }, t) : je(new Error(), {
    type: e,
    [nc]: !0
  }, t);
}
function Ln(e, t) {
  return e instanceof Error && nc in e && (t == null || !!(e.type & t));
}
const Qw = ["params", "query", "hash"];
function Jw(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of Qw)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Pf = "[^/]+?", Zw = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, eA = /[.+*?^${}()[\]/\\]/g;
function tA(e, t) {
  const n = je({}, Zw, t), s = [];
  let o = n.start ? "^" : "";
  const r = [];
  for (const f of e) {
    const u = f.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !f.length && (o += "/");
    for (let d = 0; d < f.length; d++) {
      const p = f[d];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        d || (o += "/"), o += p.value.replace(eA, "\\$&"), h += 40;
      else if (p.type === 1) {
        const { value: m, repeatable: g, optional: v, regexp: y } = p;
        r.push({
          name: m,
          repeatable: g,
          optional: v
        });
        const b = y || Pf;
        if (b !== Pf) {
          h += 10;
          try {
            new RegExp(`(${b})`);
          } catch (x) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${b}): ` + x.message);
          }
        }
        let _ = g ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        d || (_ = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        v && f.length < 2 ? `(?:/${_})` : "/" + _), v && (_ += "?"), o += _, h += 20, v && (h += -8), g && (h += -20), b === ".*" && (h += -50);
      }
      u.push(h);
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
    for (let p = 1; p < u.length; p++) {
      const h = u[p] || "", m = r[p - 1];
      d[m.name] = h && m.repeatable ? h.split("/") : h;
    }
    return d;
  }
  function c(f) {
    let u = "", d = !1;
    for (const p of e) {
      (!d || !u.endsWith("/")) && (u += "/"), d = !1;
      for (const h of p)
        if (h.type === 0)
          u += h.value;
        else if (h.type === 1) {
          const { value: m, repeatable: g, optional: v } = h, y = m in f ? f[m] : "";
          if (Bt(y) && !g)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const b = Bt(y) ? y.join("/") : y;
          if (!b)
            if (v)
              p.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${m}"`);
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
    stringify: c
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
    if (Vf(s))
      return 1;
    if (Vf(o))
      return -1;
  }
  return o.length - s.length;
}
function Vf(e) {
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
    throw new Error(Ne.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${f}": ${h}`);
  }
  let n = 0, s = n;
  const o = [];
  let r;
  function i() {
    r && o.push(r), r = [];
  }
  let a = 0, c, f = "", u = "";
  function d() {
    f && (n === 0 ? r.push({
      type: 0,
      value: f
    }) : n === 1 || n === 2 || n === 3 ? (r.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), r.push({
      type: 1,
      value: f,
      regexp: u,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), f = "");
  }
  function p() {
    f += c;
  }
  for (; a < e.length; ) {
    if (c = e[a++], c === "\\" && n !== 2) {
      s = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (f && d(), i()) : c === ":" ? (d(), n = 1) : p();
        break;
      case 4:
        p(), n = s;
        break;
      case 1:
        c === "(" ? n = 2 : oA.test(c) ? p() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && a--);
        break;
      case 2:
        c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = 3 : u += c;
        break;
      case 3:
        d(), n = 0, c !== "*" && c !== "?" && c !== "+" && a--, u = "";
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
  if (Ne.NODE_ENV !== "production") {
    const r = /* @__PURE__ */ new Set();
    for (const i of s.keys)
      r.has(i.name) && Pe(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), r.add(i.name);
  }
  const o = je(s, {
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
  t = $f({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(d) {
    return s.get(d);
  }
  function r(d, p, h) {
    const m = !h, g = Ff(d);
    Ne.NODE_ENV !== "production" && dA(g, p), g.aliasOf = h && h.record;
    const v = $f(t, d), y = [g];
    if ("alias" in d) {
      const x = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const k of x)
        y.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          Ff(je({}, g, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: h ? h.record.components : g.components,
            path: k,
            // we might be the child of an alias
            aliasOf: h ? h.record : g
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let b, _;
    for (const x of y) {
      const { path: k } = x;
      if (p && k[0] !== "/") {
        const O = p.record.path, N = O[O.length - 1] === "/" ? "" : "/";
        x.path = p.record.path + (k && N + k);
      }
      if (Ne.NODE_ENV !== "production" && x.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (b = iA(x, p, v), Ne.NODE_ENV !== "production" && p && k[0] === "/" && pA(b, p), h ? (h.alias.push(b), Ne.NODE_ENV !== "production" && uA(h, b)) : (_ = _ || b, _ !== b && _.alias.push(b), m && d.name && !Bf(b) && (Ne.NODE_ENV !== "production" && fA(d, p), i(d.name))), Ng(b) && c(b), g.children) {
        const O = g.children;
        for (let N = 0; N < O.length; N++)
          r(O[N], b, h && h.children[N]);
      }
      h = h || b;
    }
    return _ ? () => {
      i(_);
    } : vr;
  }
  function i(d) {
    if (Og(d)) {
      const p = s.get(d);
      p && (s.delete(d), n.splice(n.indexOf(p), 1), p.children.forEach(i), p.alias.forEach(i));
    } else {
      const p = n.indexOf(d);
      p > -1 && (n.splice(p, 1), d.record.name && s.delete(d.record.name), d.children.forEach(i), d.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function c(d) {
    const p = hA(d, n);
    n.splice(p, 0, d), d.record.name && !Bf(d) && s.set(d.record.name, d);
  }
  function f(d, p) {
    let h, m = {}, g, v;
    if ("name" in d && d.name) {
      if (h = s.get(d.name), !h)
        throw Do(1, {
          location: d
        });
      if (Ne.NODE_ENV !== "production") {
        const _ = Object.keys(d.params || {}).filter((x) => !h.keys.find((k) => k.name === x));
        _.length && Pe(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      v = h.record.name, m = je(
        // paramsFromLocation is a new object
        Lf(
          p.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          h.keys.filter((_) => !_.optional).concat(h.parent ? h.parent.keys.filter((_) => _.optional) : []).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        d.params && Lf(d.params, h.keys.map((_) => _.name))
      ), g = h.stringify(m);
    } else if (d.path != null)
      g = d.path, Ne.NODE_ENV !== "production" && !g.startsWith("/") && Pe(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), h = n.find((_) => _.re.test(g)), h && (m = h.parse(g), v = h.record.name);
    else {
      if (h = p.name ? s.get(p.name) : n.find((_) => _.re.test(p.path)), !h)
        throw Do(1, {
          location: d,
          currentLocation: p
        });
      v = h.record.name, m = je({}, p.params, d.params), g = h.stringify(m);
    }
    const y = [];
    let b = h;
    for (; b; )
      y.unshift(b.record), b = b.parent;
    return {
      name: v,
      path: g,
      params: m,
      matched: y,
      meta: cA(y)
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
function Lf(e, t) {
  const n = {};
  for (const s of t)
    s in e && (n[s] = e[s]);
  return n;
}
function Ff(e) {
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
function Bf(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function cA(e) {
  return e.reduce((t, n) => je(t, n.meta), {});
}
function $f(e, t) {
  const n = {};
  for (const s in e)
    n[s] = s in t ? t[s] : e[s];
  return n;
}
function sc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function uA(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(sc.bind(null, n)))
      return Pe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(sc.bind(null, n)))
      return Pe(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function dA(e, t) {
  t && t.record.name && !e.name && !e.path && Pe(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function fA(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function pA(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(sc.bind(null, n)))
      return Pe(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function hA(e, t) {
  let n = 0, s = t.length;
  for (; n !== s; ) {
    const r = n + s >> 1;
    Tg(e, t[r]) < 0 ? s = r : n = r + 1;
  }
  const o = mA(e);
  return o && (s = t.lastIndexOf(o, s - 1), Ne.NODE_ENV !== "production" && s < 0 && Pe(`Finding ancestor route "${o.record.path}" failed for "${e.record.path}"`)), s;
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
    const r = s[o].replace(bg, " "), i = r.indexOf("="), a = No(i < 0 ? r : r.slice(0, i)), c = i < 0 ? null : No(r.slice(i + 1));
    if (a in t) {
      let f = t[a];
      Bt(f) || (f = t[a] = [f]), f.push(c);
    } else
      t[a] = c;
  }
  return t;
}
function jf(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = kw(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Bt(s) ? s.map((r) => r && ec(r)) : [s && ec(s)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function vA(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = Bt(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const _A = Symbol(Ne.NODE_ENV !== "production" ? "router view location matched" : ""), Uf = Symbol(Ne.NODE_ENV !== "production" ? "router view depth" : ""), Jc = Symbol(Ne.NODE_ENV !== "production" ? "router" : ""), Zc = Symbol(Ne.NODE_ENV !== "production" ? "route location" : ""), oc = Symbol(Ne.NODE_ENV !== "production" ? "router view location" : "");
function er() {
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
  return () => new Promise((a, c) => {
    const f = (p) => {
      p === !1 ? c(Do(4, {
        from: n,
        to: t
      })) : p instanceof Error ? c(p) : ta(p) ? c(Do(2, {
        from: t,
        to: p
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === i && typeof p == "function" && i.push(p), a());
    }, u = r(() => e.call(s && s.instances[o], t, n, Ne.NODE_ENV !== "production" ? yA(f, t, n) : f));
    let d = Promise.resolve(u);
    if (e.length < 3 && (d = d.then(f)), Ne.NODE_ENV !== "production" && e.length > 2) {
      const p = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        d = d.then((h) => f._called ? h : (Pe(p), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !f._called) {
        Pe(p), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    d.catch((p) => c(p));
  });
}
function yA(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && Pe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function sl(e, t, n, s, o = (r) => r()) {
  const r = [];
  for (const i of e) {
    Ne.NODE_ENV !== "production" && !i.components && !i.children.length && Pe(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in i.components) {
      let c = i.components[a];
      if (Ne.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw Pe(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          Pe(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = c;
          c = () => f;
        } else c.__asyncLoader && // warn only once per component
        !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, Pe(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (_g(c)) {
          const u = (c.__vccOpts || c)[t];
          u && r.push(os(u, n, s, i, a, o));
        } else {
          let f = c();
          Ne.NODE_ENV !== "production" && !("catch" in f) && (Pe(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), r.push(() => f.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
            const d = yw(u) ? u.default : u;
            i.mods[a] = u, i.components[a] = d;
            const h = (d.__vccOpts || d)[t];
            return h && os(h, n, s, i, a, o)();
          }));
        }
    }
  }
  return r;
}
function Hf(e) {
  const t = Ft(Jc), n = Ft(Zc);
  let s = !1, o = null;
  const r = j(() => {
    const u = ne(e.to);
    return Ne.NODE_ENV !== "production" && (!s || u !== o) && (ta(u) || (s ? Pe(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, o, `
- props:`, e) : Pe(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), o = u, s = !0), t.resolve(u);
  }), i = j(() => {
    const { matched: u } = r.value, { length: d } = u, p = u[d - 1], h = n.matched;
    if (!p || !h.length)
      return -1;
    const m = h.findIndex(ps.bind(null, p));
    if (m > -1)
      return m;
    const g = Wf(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Wf(p) === g && // avoid comparing the child with its parent
      h[h.length - 1].path !== g ? h.findIndex(ps.bind(null, u[d - 2])) : m
    );
  }), a = j(() => i.value > -1 && SA(n.params, r.value.params)), c = j(() => i.value > -1 && i.value === n.matched.length - 1 && Sg(n.params, r.value.params));
  function f(u = {}) {
    if (AA(u)) {
      const d = t[ne(e.replace) ? "replace" : "push"](
        ne(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(vr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  if (Ne.NODE_ENV !== "production" && Bn) {
    const u = Yn();
    if (u) {
      const d = {
        route: r.value,
        isActive: a.value,
        isExactActive: c.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), ma(() => {
        d.route = r.value, d.isActive = a.value, d.isExactActive = c.value, d.error = ta(ne(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: j(() => r.value.href),
    isActive: a,
    isExactActive: c,
    navigate: f
  };
}
function bA(e) {
  return e.length === 1 ? e[0] : e;
}
const EA = /* @__PURE__ */ Te({
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
  useLink: Hf,
  setup(e, { slots: t }) {
    const n = us(Hf(e)), { options: s } = Ft(Jc), o = j(() => ({
      [Kf(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Kf(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const r = t.default && bA(t.default(n));
      return e.custom ? r : Lc("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, r);
    };
  }
}), wA = EA;
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
    } else if (!Bt(o) || o.length !== s.length || s.some((r, i) => r !== o[i]))
      return !1;
  }
  return !0;
}
function Wf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Kf = (e, t, n) => e ?? t ?? n, CA = /* @__PURE__ */ Te({
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
    Ne.NODE_ENV !== "production" && TA();
    const s = Ft(oc), o = j(() => e.route || s.value), r = Ft(Uf, 0), i = j(() => {
      let f = ne(r);
      const { matched: u } = o.value;
      let d;
      for (; (d = u[f]) && !d.components; )
        f++;
      return f;
    }), a = j(() => o.value.matched[i.value]);
    Ci(Uf, j(() => i.value + 1)), Ci(_A, a), Ci(oc, o);
    const c = H();
    return Rt(() => [c.value, a.value, e.name], ([f, u, d], [p, h, m]) => {
      u && (u.instances[d] = f, h && h !== u && f && f === p && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards), u.updateGuards.size || (u.updateGuards = h.updateGuards))), f && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!h || !ps(u, h) || !p) && (u.enterCallbacks[d] || []).forEach((g) => g(f));
    }, { flush: "post" }), () => {
      const f = o.value, u = e.name, d = a.value, p = d && d.components[u];
      if (!p)
        return zf(n.default, { Component: p, route: f });
      const h = d.props[u], m = h ? h === !0 ? f.params : typeof h == "function" ? h(f) : h : null, v = Lc(p, je({}, m, t, {
        onVnodeUnmounted: (y) => {
          y.component.isUnmounted && (d.instances[u] = null);
        },
        ref: c
      }));
      if (Ne.NODE_ENV !== "production" && Bn && v.ref) {
        const y = {
          depth: i.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (Bt(v.ref) ? v.ref.map((_) => _.i) : [v.ref.i]).forEach((_) => {
          _.__vrv_devtools = y;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        zf(n.default, { Component: v, route: f }) || v
      );
    };
  }
});
function zf(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const OA = CA;
function TA() {
  const e = Yn(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const s = t === "KeepAlive" ? "keep-alive" : "transition";
    Pe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`);
  }
}
function tr(e, t) {
  const n = je({}, e, {
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
function ci(e) {
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
        value: tr(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: u, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const p = d.__vrv_devtools;
        u.tags.push({
          label: (p.name ? `${p.name.toString()}: ` : "") + p.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Dg
        });
      }
      Bt(d.__vrl_devtools) && (d.__devtoolsApi = o, d.__vrl_devtools.forEach((p) => {
        let h = p.route.path, m = Rg, g = "", v = 0;
        p.error ? (h = p.error, m = MA, v = PA) : p.isExactActive ? (m = xg, g = "This is exactly active") : p.isActive && (m = kg, g = "This link is active"), u.tags.push({
          label: h,
          textColor: v,
          tooltip: g,
          backgroundColor: m
        });
      }));
    }), Rt(t.currentRoute, () => {
      c(), o.notifyComponentUpdate(), o.sendInspectorTree(a), o.sendInspectorState(a);
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
      const p = {
        guard: ci("beforeEach"),
        from: tr(d, "Current Location during this navigation"),
        to: tr(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: i++
      }), o.addTimelineEvent({
        layerId: r,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: p,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, d, p) => {
      const h = {
        guard: ci("afterEach")
      };
      p ? (h.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: p ? p.message : "",
          tooltip: "Navigation Failure",
          value: p
        }
      }, h.status = ci("❌")) : h.status = ci("✅"), h.from = tr(d, "Current Location during this navigation"), h.to = tr(u, "Target location"), o.addTimelineEvent({
        layerId: r,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: o.now(),
          data: h,
          logType: p ? "warning" : "default",
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
    function c() {
      if (!f)
        return;
      const u = f;
      let d = n.getRoutes().filter((p) => !p.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !p.parent.record.components);
      d.forEach(Pg), u.filter && (d = d.filter((p) => (
        // save matches state based on the payload
        rc(p, u.filter.toLowerCase())
      ))), d.forEach((p) => Mg(p, t.currentRoute.value)), u.rootNodes = d.map(Ig);
    }
    let f;
    o.on.getInspectorTree((u) => {
      f = u, u.app === e && u.inspectorId === a && c();
    }), o.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === a) {
        const p = n.getRoutes().find((h) => h.record.__vd_id === u.nodeId);
        p && (u.state = {
          options: xA(p)
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
const Dg = 15485081, kg = 2450411, xg = 8702998, RA = 2282478, Rg = 16486972, IA = 6710886, MA = 16704226, PA = 12131356;
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
  return s == null && (s = String(VA++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(Ig)
  };
}
let VA = 0;
const LA = /^\/(.*)\/([a-z]*)$/;
function Mg(e, t) {
  const n = t.matched.length && ps(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => ps(s, e.record))), e.children.forEach((s) => Mg(s, t));
}
function Pg(e) {
  e.__vd_match = !1, e.children.forEach(Pg);
}
function rc(e, t) {
  const n = String(e.re).match(LA);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => rc(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), r = No(o);
  return !t.startsWith("/") && (r.includes(t) || o.includes(t)) || r.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => rc(i, t));
}
function FA(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function BA(e) {
  const t = aA(e.routes, e), n = e.parseQuery || gA, s = e.stringifyQuery || jf, o = e.history;
  if (Ne.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const r = er(), i = er(), a = er(), c = ay(Zn);
  let f = Zn;
  Bn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = tl.bind(null, (L) => "" + L), d = tl.bind(null, Rw), p = (
    // @ts-expect-error: intentionally avoid the type check
    tl.bind(null, No)
  );
  function h(L, Q) {
    let se, ge;
    return Og(L) ? (se = t.getRecordMatcher(L), Ne.NODE_ENV !== "production" && !se && Pe(`Parent route "${String(L)}" not found when adding child route`, Q), ge = Q) : ge = L, t.addRoute(ge, se);
  }
  function m(L) {
    const Q = t.getRecordMatcher(L);
    Q ? t.removeRoute(Q) : Ne.NODE_ENV !== "production" && Pe(`Cannot remove non-existent route "${String(L)}"`);
  }
  function g() {
    return t.getRoutes().map((L) => L.record);
  }
  function v(L) {
    return !!t.getRecordMatcher(L);
  }
  function y(L, Q) {
    if (Q = je({}, Q || c.value), typeof L == "string") {
      const S = nl(n, L, Q.path), V = t.resolve({ path: S.path }, Q), z = o.createHref(S.fullPath);
      return Ne.NODE_ENV !== "production" && (z.startsWith("//") ? Pe(`Location "${L}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : V.matched.length || Pe(`No match found for location with path "${L}"`)), je(S, V, {
        params: p(V.params),
        hash: No(S.hash),
        redirectedFrom: void 0,
        href: z
      });
    }
    if (Ne.NODE_ENV !== "production" && !ta(L))
      return Pe(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, L), y({});
    let se;
    if (L.path != null)
      Ne.NODE_ENV !== "production" && "params" in L && !("name" in L) && // @ts-expect-error: the type is never
      Object.keys(L.params).length && Pe(`Path "${L.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), se = je({}, L, {
        path: nl(n, L.path, Q.path).path
      });
    else {
      const S = je({}, L.params);
      for (const V in S)
        S[V] == null && delete S[V];
      se = je({}, L, {
        params: d(S)
      }), Q.params = d(Q.params);
    }
    const ge = t.resolve(se, Q), Re = L.hash || "";
    Ne.NODE_ENV !== "production" && Re && !Re.startsWith("#") && Pe(`A \`hash\` should always start with the character "#". Replace "${Re}" with "#${Re}".`), ge.params = u(p(ge.params));
    const tt = Pw(s, je({}, L, {
      hash: Dw(Re),
      path: ge.path
    })), E = o.createHref(tt);
    return Ne.NODE_ENV !== "production" && (E.startsWith("//") ? Pe(`Location "${L}" resolved to "${E}". A resolved location cannot start with multiple slashes.`) : ge.matched.length || Pe(`No match found for location with path "${L.path != null ? L.path : L}"`)), je({
      fullPath: tt,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: Re,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        s === jf ? vA(L.query) : L.query || {}
      )
    }, ge, {
      redirectedFrom: void 0,
      href: E
    });
  }
  function b(L) {
    return typeof L == "string" ? nl(n, L, c.value.path) : je({}, L);
  }
  function _(L, Q) {
    if (f !== L)
      return Do(8, {
        from: Q,
        to: L
      });
  }
  function x(L) {
    return N(L);
  }
  function k(L) {
    return x(je(b(L), { replace: !0 }));
  }
  function O(L) {
    const Q = L.matched[L.matched.length - 1];
    if (Q && Q.redirect) {
      const { redirect: se } = Q;
      let ge = typeof se == "function" ? se(L) : se;
      if (typeof ge == "string" && (ge = ge.includes("?") || ge.includes("#") ? ge = b(ge) : (
        // force empty params
        { path: ge }
      ), ge.params = {}), Ne.NODE_ENV !== "production" && ge.path == null && !("name" in ge))
        throw Pe(`Invalid redirect found:
${JSON.stringify(ge, null, 2)}
 when navigating to "${L.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return je({
        query: L.query,
        hash: L.hash,
        // avoid transferring params if the redirect has a path
        params: ge.path != null ? {} : L.params
      }, ge);
    }
  }
  function N(L, Q) {
    const se = f = y(L), ge = c.value, Re = L.state, tt = L.force, E = L.replace === !0, S = O(se);
    if (S)
      return N(
        je(b(S), {
          state: typeof S == "object" ? je({}, Re, S.state) : Re,
          force: tt,
          replace: E
        }),
        // keep original redirectedFrom if it exists
        Q || se
      );
    const V = se;
    V.redirectedFrom = Q;
    let z;
    return !tt && kf(s, ge, se) && (z = Do(16, { to: V, from: ge }), W(
      ge,
      ge,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (z ? Promise.resolve(z) : w(V, ge)).catch(($) => Ln($) ? (
      // navigation redirects still mark the router as ready
      Ln(
        $,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? $ : Ze($)
    ) : (
      // reject any unknown error
      le($, V, ge)
    )).then(($) => {
      if ($) {
        if (Ln(
          $,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return Ne.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          kf(s, y($.to), V) && // and we have done it a couple of times
          Q && // @ts-expect-error: added only in dev
          (Q._count = Q._count ? (
            // @ts-expect-error
            Q._count + 1
          ) : 1) > 30 ? (Pe(`Detected a possibly infinite redirection in a navigation guard when going from "${ge.fullPath}" to "${V.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : N(
            // keep options
            je({
              // preserve an existing replacement but allow the redirect to override it
              replace: E
            }, b($.to), {
              state: typeof $.to == "object" ? je({}, Re, $.to.state) : Re,
              force: tt
            }),
            // preserve the original redirectedFrom if any
            Q || V
          );
      } else
        $ = A(V, ge, !0, E, Re);
      return D(V, ge, $), $;
    });
  }
  function I(L, Q) {
    const se = _(L, Q);
    return se ? Promise.reject(se) : Promise.resolve();
  }
  function C(L) {
    const Q = we.values().next().value;
    return Q && typeof Q.runWithContext == "function" ? Q.runWithContext(L) : L();
  }
  function w(L, Q) {
    let se;
    const [ge, Re, tt] = $A(L, Q);
    se = sl(ge.reverse(), "beforeRouteLeave", L, Q);
    for (const S of ge)
      S.leaveGuards.forEach((V) => {
        se.push(os(V, L, Q));
      });
    const E = I.bind(null, L, Q);
    return se.push(E), He(se).then(() => {
      se = [];
      for (const S of r.list())
        se.push(os(S, L, Q));
      return se.push(E), He(se);
    }).then(() => {
      se = sl(Re, "beforeRouteUpdate", L, Q);
      for (const S of Re)
        S.updateGuards.forEach((V) => {
          se.push(os(V, L, Q));
        });
      return se.push(E), He(se);
    }).then(() => {
      se = [];
      for (const S of tt)
        if (S.beforeEnter)
          if (Bt(S.beforeEnter))
            for (const V of S.beforeEnter)
              se.push(os(V, L, Q));
          else
            se.push(os(S.beforeEnter, L, Q));
      return se.push(E), He(se);
    }).then(() => (L.matched.forEach((S) => S.enterCallbacks = {}), se = sl(tt, "beforeRouteEnter", L, Q, C), se.push(E), He(se))).then(() => {
      se = [];
      for (const S of i.list())
        se.push(os(S, L, Q));
      return se.push(E), He(se);
    }).catch((S) => Ln(
      S,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? S : Promise.reject(S));
  }
  function D(L, Q, se) {
    a.list().forEach((ge) => C(() => ge(L, Q, se)));
  }
  function A(L, Q, se, ge, Re) {
    const tt = _(L, Q);
    if (tt)
      return tt;
    const E = Q === Zn, S = Bn ? history.state : {};
    se && (ge || E ? o.replace(L.fullPath, je({
      scroll: E && S && S.scroll
    }, Re)) : o.push(L.fullPath, Re)), c.value = L, W(L, Q, se, E), Ze();
  }
  let F;
  function de() {
    F || (F = o.listen((L, Q, se) => {
      if (!ke.listening)
        return;
      const ge = y(L), Re = O(ge);
      if (Re) {
        N(je(Re, { replace: !0, force: !0 }), ge).catch(vr);
        return;
      }
      f = ge;
      const tt = c.value;
      Bn && Hw(Rf(tt.fullPath, se.delta), Sa()), w(ge, tt).catch((E) => Ln(
        E,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? E : Ln(
        E,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (N(
        je(b(E.to), {
          force: !0
        }),
        ge
        // avoid an uncaught rejection, let push call triggerError
      ).then((S) => {
        Ln(
          S,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !se.delta && se.type === Pr.pop && o.go(-1, !1);
      }).catch(vr), Promise.reject()) : (se.delta && o.go(-se.delta, !1), le(E, ge, tt))).then((E) => {
        E = E || A(
          // after navigation, all matched components are resolved
          ge,
          tt,
          !1
        ), E && (se.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Ln(
          E,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-se.delta, !1) : se.type === Pr.pop && Ln(
          E,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), D(ge, tt, E);
      }).catch(vr);
    }));
  }
  let Y = er(), re = er(), K;
  function le(L, Q, se) {
    Ze(L);
    const ge = re.list();
    return ge.length ? ge.forEach((Re) => Re(L, Q, se)) : (Ne.NODE_ENV !== "production" && Pe("uncaught error during route navigation:"), console.error(L)), Promise.reject(L);
  }
  function be() {
    return K && c.value !== Zn ? Promise.resolve() : new Promise((L, Q) => {
      Y.add([L, Q]);
    });
  }
  function Ze(L) {
    return K || (K = !L, de(), Y.list().forEach(([Q, se]) => L ? se(L) : Q()), Y.reset()), L;
  }
  function W(L, Q, se, ge) {
    const { scrollBehavior: Re } = e;
    if (!Bn || !Re)
      return Promise.resolve();
    const tt = !se && Ww(Rf(L.fullPath, 0)) || (ge || !se) && history.state && history.state.scroll || null;
    return Ks().then(() => Re(L, Q, tt)).then((E) => E && Uw(E)).catch((E) => le(E, L, Q));
  }
  const oe = (L) => o.go(L);
  let pe;
  const we = /* @__PURE__ */ new Set(), ke = {
    currentRoute: c,
    listening: !0,
    addRoute: h,
    removeRoute: m,
    clearRoutes: t.clearRoutes,
    hasRoute: v,
    getRoutes: g,
    resolve: y,
    options: e,
    push: x,
    replace: k,
    go: oe,
    back: () => oe(-1),
    forward: () => oe(1),
    beforeEach: r.add,
    beforeResolve: i.add,
    afterEach: a.add,
    onError: re.add,
    isReady: be,
    install(L) {
      const Q = this;
      L.component("RouterLink", wA), L.component("RouterView", OA), L.config.globalProperties.$router = Q, Object.defineProperty(L.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ne(c)
      }), Bn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !pe && c.value === Zn && (pe = !0, x(o.location).catch((Re) => {
        Ne.NODE_ENV !== "production" && Pe("Unexpected error when starting the router:", Re);
      }));
      const se = {};
      for (const Re in Zn)
        Object.defineProperty(se, Re, {
          get: () => c.value[Re],
          enumerable: !0
        });
      L.provide(Jc, Q), L.provide(Zc, vh(se)), L.provide(oc, c);
      const ge = L.unmount;
      we.add(L), L.unmount = function() {
        we.delete(L), we.size < 1 && (f = Zn, F && F(), F = null, c.value = Zn, pe = !1, K = !1), ge();
      }, Ne.NODE_ENV !== "production" && Bn && DA(L, Q, t);
    }
  };
  function He(L) {
    return L.reduce((Q, se) => Q.then(() => C(se)), Promise.resolve());
  }
  return ke;
}
function $A(e, t) {
  const n = [], s = [], o = [], r = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < r; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => ps(f, a)) ? s.push(a) : n.push(a));
    const c = e.matched[i];
    c && (t.matched.find((f) => ps(f, c)) || o.push(c));
  }
  return [n, s, o];
}
function Vg(e) {
  return Ft(Zc);
}
const jA = { class: "nav nav-tabs mb-4" }, UA = { class: "nav-item" }, HA = { class: "nav-item" }, WA = { class: "nav-item" }, KA = { class: "nav-item" }, zA = /* @__PURE__ */ Te({
  __name: "NavigationMenu",
  setup(e) {
    const t = Vg();
    return (n, s) => {
      const o = Qe("router-link");
      return T(), R("ul", jA, [
        l("li", UA, [
          ue(o, {
            to: "/",
            class: ce(["nav-link", { active: ne(t).name === "home" }]),
            "aria-current": ne(t).name === "home" ? "page" : void 0
          }, {
            default: fe(() => s[0] || (s[0] = [
              l("i", { class: "fas fa-home me-2" }, null, -1),
              U(" Home ")
            ])),
            _: 1,
            __: [0]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", HA, [
          ue(o, {
            to: "/setup",
            class: ce(["nav-link", { active: ne(t).name === "setup" }]),
            "aria-current": ne(t).name === "setup" ? "page" : void 0
          }, {
            default: fe(() => s[1] || (s[1] = [
              l("i", { class: "fas fa-cogs me-2" }, null, -1),
              U(" Setup ")
            ])),
            _: 1,
            __: [1]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", WA, [
          ue(o, {
            to: "/resources",
            class: ce(["nav-link", { active: ne(t).name === "resources" }]),
            "aria-current": ne(t).name === "resources" ? "page" : void 0
          }, {
            default: fe(() => s[2] || (s[2] = [
              l("i", { class: "fas fa-database me-2" }, null, -1),
              U(" Resources ")
            ])),
            _: 1,
            __: [2]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", KA, [
          ue(o, {
            to: "/tasks",
            class: ce(["nav-link", { active: ne(t).name === "tasks" }]),
            "aria-current": ne(t).name === "tasks" ? "page" : void 0
          }, {
            default: fe(() => s[3] || (s[3] = [
              l("i", { class: "fas fa-tasks me-2" }, null, -1),
              U(" Tasks ")
            ])),
            _: 1,
            __: [3]
          }, 8, ["class", "aria-current"])
        ])
      ]);
    };
  }
}), fn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, qA = /* @__PURE__ */ fn(zA, [["__scopeId", "data-v-131175f8"]]), YA = /* @__PURE__ */ Te({
  __name: "MainLayout",
  setup(e) {
    return (t, n) => {
      const s = Qe("router-view");
      return T(), R("div", null, [
        l("main", null, [
          ue(qA),
          ue(s)
        ])
      ]);
    };
  }
}), XA = /* @__PURE__ */ fn(YA, [["__scopeId", "data-v-a42a7003"]]);
function Lg(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: GA } = Object.prototype, { getPrototypeOf: eu } = Object, { iterator: Ca, toStringTag: Fg } = Symbol, Oa = /* @__PURE__ */ ((e) => (t) => {
  const n = GA.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), pn = (e) => (e = e.toLowerCase(), (t) => Oa(t) === e), Ta = (e) => (t) => typeof t === e, { isArray: Uo } = Array, Vr = Ta("undefined");
function QA(e) {
  return e !== null && !Vr(e) && e.constructor !== null && !Vr(e.constructor) && It(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Bg = pn("ArrayBuffer");
function JA(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Bg(e.buffer), t;
}
const ZA = Ta("string"), It = Ta("function"), $g = Ta("number"), Na = (e) => e !== null && typeof e == "object", eS = (e) => e === !0 || e === !1, Mi = (e) => {
  if (Oa(e) !== "object")
    return !1;
  const t = eu(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Fg in e) && !(Ca in e);
}, tS = pn("Date"), nS = pn("File"), sS = pn("Blob"), oS = pn("FileList"), rS = (e) => Na(e) && It(e.pipe), iS = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || It(e.append) && ((t = Oa(e)) === "formdata" || // detect form-data instance
  t === "object" && It(e.toString) && e.toString() === "[object FormData]"));
}, aS = pn("URLSearchParams"), [lS, cS, uS, dS] = ["ReadableStream", "Request", "Response", "Headers"].map(pn), fS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Xr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, o;
  if (typeof e != "object" && (e = [e]), Uo(e))
    for (s = 0, o = e.length; s < o; s++)
      t.call(null, e[s], s, e);
  else {
    const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = r.length;
    let a;
    for (s = 0; s < i; s++)
      a = r[s], t.call(null, e[a], a, e);
  }
}
function jg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, o;
  for (; s-- > 0; )
    if (o = n[s], t === o.toLowerCase())
      return o;
  return null;
}
const xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ug = (e) => !Vr(e) && e !== xs;
function ic() {
  const { caseless: e } = Ug(this) && this || {}, t = {}, n = (s, o) => {
    const r = e && jg(t, o) || o;
    Mi(t[r]) && Mi(s) ? t[r] = ic(t[r], s) : Mi(s) ? t[r] = ic({}, s) : Uo(s) ? t[r] = s.slice() : t[r] = s;
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && Xr(arguments[s], n);
  return t;
}
const pS = (e, t, n, { allOwnKeys: s } = {}) => (Xr(t, (o, r) => {
  n && It(o) ? e[r] = Lg(o, n) : e[r] = o;
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
    e = n !== !1 && eu(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, vS = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, _S = (e) => {
  if (!e) return null;
  if (Uo(e)) return e;
  let t = e.length;
  if (!$g(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, yS = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && eu(Uint8Array)), bS = (e, t) => {
  const s = (e && e[Ca]).call(e);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const r = o.value;
    t.call(e, r[0], r[1]);
  }
}, ES = (e, t) => {
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
), qf = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), SS = pn("RegExp"), Hg = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  Xr(n, (o, r) => {
    let i;
    (i = t(o, r, e)) !== !1 && (s[r] = i || o);
  }), Object.defineProperties(e, s);
}, CS = (e) => {
  Hg(e, (t, n) => {
    if (It(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if (It(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, OS = (e, t) => {
  const n = {}, s = (o) => {
    o.forEach((r) => {
      n[r] = !0;
    });
  };
  return Uo(e) ? s(e) : s(String(e).split(t)), n;
}, TS = () => {
}, NS = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function DS(e) {
  return !!(e && It(e.append) && e[Fg] === "FormData" && e[Ca]);
}
const kS = (e) => {
  const t = new Array(10), n = (s, o) => {
    if (Na(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[o] = s;
        const r = Uo(s) ? [] : {};
        return Xr(s, (i, a) => {
          const c = n(i, o + 1);
          !Vr(c) && (r[a] = c);
        }), t[o] = void 0, r;
      }
    }
    return s;
  };
  return n(e, 0);
}, xS = pn("AsyncFunction"), RS = (e) => e && (Na(e) || It(e)) && It(e.then) && It(e.catch), Wg = ((e, t) => e ? setImmediate : t ? ((n, s) => (xs.addEventListener("message", ({ source: o, data: r }) => {
  o === xs && r === n && s.length && s.shift()();
}, !1), (o) => {
  s.push(o), xs.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  It(xs.postMessage)
), IS = typeof queueMicrotask < "u" ? queueMicrotask.bind(xs) : typeof process < "u" && process.nextTick || Wg, MS = (e) => e != null && It(e[Ca]), B = {
  isArray: Uo,
  isArrayBuffer: Bg,
  isBuffer: QA,
  isFormData: iS,
  isArrayBufferView: JA,
  isString: ZA,
  isNumber: $g,
  isBoolean: eS,
  isObject: Na,
  isPlainObject: Mi,
  isReadableStream: lS,
  isRequest: cS,
  isResponse: uS,
  isHeaders: dS,
  isUndefined: Vr,
  isDate: tS,
  isFile: nS,
  isBlob: sS,
  isRegExp: SS,
  isFunction: It,
  isStream: rS,
  isURLSearchParams: aS,
  isTypedArray: yS,
  isFileList: oS,
  forEach: Xr,
  merge: ic,
  extend: pS,
  trim: fS,
  stripBOM: hS,
  inherits: mS,
  toFlatObject: gS,
  kindOf: Oa,
  kindOfTest: pn,
  endsWith: vS,
  toArray: _S,
  forEachEntry: bS,
  matchAll: ES,
  isHTMLForm: wS,
  hasOwnProperty: qf,
  hasOwnProp: qf,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hg,
  freezeMethods: CS,
  toObjectSet: OS,
  toCamelCase: AS,
  noop: TS,
  toFiniteNumber: NS,
  findKey: jg,
  global: xs,
  isContextDefined: Ug,
  isSpecCompliantForm: DS,
  toJSONObject: kS,
  isAsyncFn: xS,
  isThenable: RS,
  setImmediate: Wg,
  asap: IS,
  isIterable: MS
};
function xe(e, t, n, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), o && (this.response = o, this.status = o.status ? o.status : null);
}
B.inherits(xe, Error, {
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
      config: B.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Kg = xe.prototype, zg = {};
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
Object.defineProperties(xe, zg);
Object.defineProperty(Kg, "isAxiosError", { value: !0 });
xe.from = (e, t, n, s, o, r) => {
  const i = Object.create(Kg);
  return B.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), xe.call(i, e.message, t, n, s, o), i.cause = e, i.name = e.name, r && Object.assign(i, r), i;
};
const PS = null;
function ac(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function qg(e) {
  return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Yf(e, t, n) {
  return e ? e.concat(t).map(function(o, r) {
    return o = qg(o), !n && r ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function VS(e) {
  return B.isArray(e) && !e.some(ac);
}
const LS = B.toFlatObject(B, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Da(e, t, n) {
  if (!B.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = B.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, v) {
    return !B.isUndefined(v[g]);
  });
  const s = n.metaTokens, o = n.visitor || u, r = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && B.isSpecCompliantForm(t);
  if (!B.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(m) {
    if (m === null) return "";
    if (B.isDate(m))
      return m.toISOString();
    if (B.isBoolean(m))
      return m.toString();
    if (!c && B.isBlob(m))
      throw new xe("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(m) || B.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, g, v) {
    let y = m;
    if (m && !v && typeof m == "object") {
      if (B.endsWith(g, "{}"))
        g = s ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (B.isArray(m) && VS(m) || (B.isFileList(m) || B.endsWith(g, "[]")) && (y = B.toArray(m)))
        return g = qg(g), y.forEach(function(_, x) {
          !(B.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Yf([g], x, r) : i === null ? g : g + "[]",
            f(_)
          );
        }), !1;
    }
    return ac(m) ? !0 : (t.append(Yf(v, g, r), f(m)), !1);
  }
  const d = [], p = Object.assign(LS, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: ac
  });
  function h(m, g) {
    if (!B.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(m), B.forEach(m, function(y, b) {
        (!(B.isUndefined(y) || y === null) && o.call(
          t,
          y,
          B.isString(b) ? b.trim() : b,
          g,
          p
        )) === !0 && h(y, g ? g.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!B.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Xf(e) {
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
function tu(e, t) {
  this._pairs = [], e && Da(e, this, t);
}
const Yg = tu.prototype;
Yg.append = function(t, n) {
  this._pairs.push([t, n]);
};
Yg.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, Xf);
  } : Xf;
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
  B.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let r;
  if (o ? r = o(t, n) : r = B.isURLSearchParams(t) ? t.toString() : new tu(t, n).toString(s), r) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return e;
}
class Gf {
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
    B.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const Gg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, BS = typeof URLSearchParams < "u" ? URLSearchParams : tu, $S = typeof FormData < "u" ? FormData : null, jS = typeof Blob < "u" ? Blob : null, US = {
  isBrowser: !0,
  classes: {
    URLSearchParams: BS,
    FormData: $S,
    Blob: jS
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, nu = typeof window < "u" && typeof document < "u", lc = typeof navigator == "object" && navigator || void 0, HS = nu && (!lc || ["ReactNative", "NativeScript", "NS"].indexOf(lc.product) < 0), WS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", KS = nu && window.location.href || "http://localhost", zS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: nu,
  hasStandardBrowserEnv: HS,
  hasStandardBrowserWebWorkerEnv: WS,
  navigator: lc,
  origin: KS
}, Symbol.toStringTag, { value: "Module" })), vt = {
  ...zS,
  ...US
};
function qS(e, t) {
  return Da(e, new vt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, o, r) {
      return vt.isNode && B.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function YS(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
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
function Qg(e) {
  function t(n, s, o, r) {
    let i = n[r++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), c = r >= n.length;
    return i = !i && B.isArray(o) ? o.length : i, c ? (B.hasOwnProp(o, i) ? o[i] = [o[i], s] : o[i] = s, !a) : ((!o[i] || !B.isObject(o[i])) && (o[i] = []), t(n, s, o[i], r) && B.isArray(o[i]) && (o[i] = XS(o[i])), !a);
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const n = {};
    return B.forEachEntry(e, (s, o) => {
      t(YS(s), o, n, 0);
    }), n;
  }
  return null;
}
function GS(e, t, n) {
  if (B.isString(e))
    try {
      return (t || JSON.parse)(e), B.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const Gr = {
  transitional: Gg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", o = s.indexOf("application/json") > -1, r = B.isObject(t);
    if (r && B.isHTMLForm(t) && (t = new FormData(t)), B.isFormData(t))
      return o ? JSON.stringify(Qg(t)) : t;
    if (B.isArrayBuffer(t) || B.isBuffer(t) || B.isStream(t) || B.isFile(t) || B.isBlob(t) || B.isReadableStream(t))
      return t;
    if (B.isArrayBufferView(t))
      return t.buffer;
    if (B.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (r) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return qS(t, this.formSerializer).toString();
      if ((a = B.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Da(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return r || o ? (n.setContentType("application/json", !1), GS(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Gr.transitional, s = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (B.isResponse(t) || B.isReadableStream(t))
      return t;
    if (t && B.isString(t) && (s && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? xe.from(a, xe.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: vt.classes.FormData,
    Blob: vt.classes.Blob
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
B.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Gr.headers[e] = {};
});
const QS = B.toObjectSet([
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
]), JS = (e) => {
  const t = {};
  let n, s, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), s = i.substring(o + 1).trim(), !(!n || t[n] && QS[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Qf = Symbol("internals");
function nr(e) {
  return e && String(e).trim().toLowerCase();
}
function Pi(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(Pi) : String(e);
}
function ZS(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const eC = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ol(e, t, n, s, o) {
  if (B.isFunction(s))
    return s.call(this, t, n);
  if (o && (t = n), !!B.isString(t)) {
    if (B.isString(s))
      return t.indexOf(s) !== -1;
    if (B.isRegExp(s))
      return s.test(t);
  }
}
function tC(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function nC(e, t) {
  const n = B.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function(o, r, i) {
        return this[s].call(this, t, o, r, i);
      },
      configurable: !0
    });
  });
}
let Mt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const o = this;
    function r(a, c, f) {
      const u = nr(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = B.findKey(o, u);
      (!d || o[d] === void 0 || f === !0 || f === void 0 && o[d] !== !1) && (o[d || c] = Pi(a));
    }
    const i = (a, c) => B.forEach(a, (f, u) => r(f, u, c));
    if (B.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (B.isString(t) && (t = t.trim()) && !eC(t))
      i(JS(t), n);
    else if (B.isObject(t) && B.isIterable(t)) {
      let a = {}, c, f;
      for (const u of t) {
        if (!B.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[f = u[0]] = (c = a[f]) ? B.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      i(a, n);
    } else
      t != null && r(n, t, s);
    return this;
  }
  get(t, n) {
    if (t = nr(t), t) {
      const s = B.findKey(this, t);
      if (s) {
        const o = this[s];
        if (!n)
          return o;
        if (n === !0)
          return ZS(o);
        if (B.isFunction(n))
          return n.call(this, o, s);
        if (B.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = nr(t), t) {
      const s = B.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || ol(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let o = !1;
    function r(i) {
      if (i = nr(i), i) {
        const a = B.findKey(s, i);
        a && (!n || ol(s, s[a], a, n)) && (delete s[a], o = !0);
      }
    }
    return B.isArray(t) ? t.forEach(r) : r(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, o = !1;
    for (; s--; ) {
      const r = n[s];
      (!t || ol(this, this[r], r, t, !0)) && (delete this[r], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, s = {};
    return B.forEach(this, (o, r) => {
      const i = B.findKey(s, r);
      if (i) {
        n[i] = Pi(o), delete n[r];
        return;
      }
      const a = t ? tC(r) : String(r).trim();
      a !== r && delete n[r], n[a] = Pi(o), s[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return B.forEach(this, (s, o) => {
      s != null && s !== !1 && (n[o] = t && B.isArray(s) ? s.join(", ") : s);
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
      const a = nr(i);
      s[a] || (nC(o, i), s[a] = !0);
    }
    return B.isArray(t) ? t.forEach(r) : r(t), this;
  }
};
Mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
B.reduceDescriptors(Mt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
B.freezeMethods(Mt);
function rl(e, t) {
  const n = this || Gr, s = t || n, o = Mt.from(s.headers);
  let r = s.data;
  return B.forEach(e, function(a) {
    r = a.call(n, r, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), r;
}
function Jg(e) {
  return !!(e && e.__CANCEL__);
}
function Ho(e, t, n) {
  xe.call(this, e ?? "canceled", xe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
B.inherits(Ho, xe, {
  __CANCEL__: !0
});
function Zg(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new xe(
    "Request failed with status code " + n.status,
    [xe.ERR_BAD_REQUEST, xe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function sC(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function oC(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let o = 0, r = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const f = Date.now(), u = s[r];
    i || (i = f), n[o] = c, s[o] = f;
    let d = r, p = 0;
    for (; d !== o; )
      p += n[d++], d = d % e;
    if (o = (o + 1) % e, o === r && (r = (r + 1) % e), f - i < t)
      return;
    const h = u && f - u;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function rC(e, t) {
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
  const o = oC(50, 250);
  return rC((r) => {
    const i = r.loaded, a = r.lengthComputable ? r.total : void 0, c = i - s, f = o(c), u = i <= a;
    s = i;
    const d = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: c,
      rate: f || void 0,
      estimated: f && a && u ? (a - i) / f : void 0,
      event: r,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, Jf = (e, t) => {
  const n = e != null;
  return [(s) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: s
  }), t[1]];
}, Zf = (e) => (...t) => B.asap(() => e(...t)), iC = vt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, vt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(vt.origin),
  vt.navigator && /(msie|trident)/i.test(vt.navigator.userAgent)
) : () => !0, aC = vt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, s, o, r) {
      const i = [e + "=" + encodeURIComponent(t)];
      B.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), B.isString(s) && i.push("path=" + s), B.isString(o) && i.push("domain=" + o), r === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function lC(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function cC(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ev(e, t, n) {
  let s = !lC(t);
  return e && (s || n == !1) ? cC(e, t) : t;
}
const ep = (e) => e instanceof Mt ? { ...e } : e;
function Gs(e, t) {
  t = t || {};
  const n = {};
  function s(f, u, d, p) {
    return B.isPlainObject(f) && B.isPlainObject(u) ? B.merge.call({ caseless: p }, f, u) : B.isPlainObject(u) ? B.merge({}, u) : B.isArray(u) ? u.slice() : u;
  }
  function o(f, u, d, p) {
    if (B.isUndefined(u)) {
      if (!B.isUndefined(f))
        return s(void 0, f, d, p);
    } else return s(f, u, d, p);
  }
  function r(f, u) {
    if (!B.isUndefined(u))
      return s(void 0, u);
  }
  function i(f, u) {
    if (B.isUndefined(u)) {
      if (!B.isUndefined(f))
        return s(void 0, f);
    } else return s(void 0, u);
  }
  function a(f, u, d) {
    if (d in t)
      return s(f, u);
    if (d in e)
      return s(void 0, f);
  }
  const c = {
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
    headers: (f, u, d) => o(ep(f), ep(u), d, !0)
  };
  return B.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, p = d(e[u], t[u], u);
    B.isUndefined(p) && d !== a || (n[u] = p);
  }), n;
}
const tv = (e) => {
  const t = Gs({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: r, headers: i, auth: a } = t;
  t.headers = i = Mt.from(i), t.url = Xg(ev(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (B.isFormData(n)) {
    if (vt.hasStandardBrowserEnv || vt.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [f, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...u].join("; "));
    }
  }
  if (vt.hasStandardBrowserEnv && (s && B.isFunction(s) && (s = s(t)), s || s !== !1 && iC(t.url))) {
    const f = o && r && aC.read(r);
    f && i.set(o, f);
  }
  return t;
}, uC = typeof XMLHttpRequest < "u", dC = uC && function(e) {
  return new Promise(function(n, s) {
    const o = tv(e);
    let r = o.data;
    const i = Mt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: f } = o, u, d, p, h, m;
    function g() {
      h && h(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let v = new XMLHttpRequest();
    v.open(o.method.toUpperCase(), o.url, !0), v.timeout = o.timeout;
    function y() {
      if (!v)
        return;
      const _ = Mt.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), k = {
        data: !a || a === "text" || a === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: _,
        config: e,
        request: v
      };
      Zg(function(N) {
        n(N), g();
      }, function(N) {
        s(N), g();
      }, k), v = null;
    }
    "onloadend" in v ? v.onloadend = y : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, v.onabort = function() {
      v && (s(new xe("Request aborted", xe.ECONNABORTED, e, v)), v = null);
    }, v.onerror = function() {
      s(new xe("Network Error", xe.ERR_NETWORK, e, v)), v = null;
    }, v.ontimeout = function() {
      let x = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const k = o.transitional || Gg;
      o.timeoutErrorMessage && (x = o.timeoutErrorMessage), s(new xe(
        x,
        k.clarifyTimeoutError ? xe.ETIMEDOUT : xe.ECONNABORTED,
        e,
        v
      )), v = null;
    }, r === void 0 && i.setContentType(null), "setRequestHeader" in v && B.forEach(i.toJSON(), function(x, k) {
      v.setRequestHeader(k, x);
    }), B.isUndefined(o.withCredentials) || (v.withCredentials = !!o.withCredentials), a && a !== "json" && (v.responseType = o.responseType), f && ([p, m] = na(f, !0), v.addEventListener("progress", p)), c && v.upload && ([d, h] = na(c), v.upload.addEventListener("progress", d), v.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (u = (_) => {
      v && (s(!_ || _.type ? new Ho(null, e, v) : _), v.abort(), v = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = sC(o.url);
    if (b && vt.protocols.indexOf(b) === -1) {
      s(new xe("Unsupported protocol " + b + ":", xe.ERR_BAD_REQUEST, e));
      return;
    }
    v.send(r || null);
  });
}, fC = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let s = new AbortController(), o;
    const r = function(f) {
      if (!o) {
        o = !0, a();
        const u = f instanceof Error ? f : this.reason;
        s.abort(u instanceof xe ? u : new Ho(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, r(new xe(`timeout ${t} of ms exceeded`, xe.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(r) : f.removeEventListener("abort", r);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", r));
    const { signal: c } = s;
    return c.unsubscribe = () => B.asap(a), c;
  }
}, pC = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, o;
  for (; s < n; )
    o = s + t, yield e.slice(s, o), s = o;
}, hC = async function* (e, t) {
  for await (const n of mC(e))
    yield* pC(n, t);
}, mC = async function* (e) {
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
}, tp = (e, t, n, s) => {
  const o = hC(e, t);
  let r = 0, i, a = (c) => {
    i || (i = !0, s && s(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: f, value: u } = await o.next();
        if (f) {
          a(), c.close();
          return;
        }
        let d = u.byteLength;
        if (n) {
          let p = r += d;
          n(p);
        }
        c.enqueue(new Uint8Array(u));
      } catch (f) {
        throw a(f), f;
      }
    },
    cancel(c) {
      return a(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, ka = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", nv = ka && typeof ReadableStream == "function", gC = ka && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), sv = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, vC = nv && sv(() => {
  let e = !1;
  const t = new Request(vt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), np = 64 * 1024, cc = nv && sv(() => B.isReadableStream(new Response("").body)), sa = {
  stream: cc && ((e) => e.body)
};
ka && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !sa[t] && (sa[t] = B.isFunction(e[t]) ? (n) => n[t]() : (n, s) => {
      throw new xe(`Response type '${t}' is not supported`, xe.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const _C = async (e) => {
  if (e == null)
    return 0;
  if (B.isBlob(e))
    return e.size;
  if (B.isSpecCompliantForm(e))
    return (await new Request(vt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (B.isArrayBufferView(e) || B.isArrayBuffer(e))
    return e.byteLength;
  if (B.isURLSearchParams(e) && (e = e + ""), B.isString(e))
    return (await gC(e)).byteLength;
}, yC = async (e, t) => {
  const n = B.toFiniteNumber(e.getContentLength());
  return n ?? _C(t);
}, bC = ka && (async (e) => {
  let {
    url: t,
    method: n,
    data: s,
    signal: o,
    cancelToken: r,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: f,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: p
  } = tv(e);
  f = f ? (f + "").toLowerCase() : "text";
  let h = fC([o, r && r.toAbortSignal()], i), m;
  const g = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let v;
  try {
    if (c && vC && n !== "get" && n !== "head" && (v = await yC(u, s)) !== 0) {
      let k = new Request(t, {
        method: "POST",
        body: s,
        duplex: "half"
      }), O;
      if (B.isFormData(s) && (O = k.headers.get("content-type")) && u.setContentType(O), k.body) {
        const [N, I] = Jf(
          v,
          na(Zf(c))
        );
        s = tp(k.body, np, N, I);
      }
    }
    B.isString(d) || (d = d ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    m = new Request(t, {
      ...p,
      signal: h,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: s,
      duplex: "half",
      credentials: y ? d : void 0
    });
    let b = await fetch(m, p);
    const _ = cc && (f === "stream" || f === "response");
    if (cc && (a || _ && g)) {
      const k = {};
      ["status", "statusText", "headers"].forEach((C) => {
        k[C] = b[C];
      });
      const O = B.toFiniteNumber(b.headers.get("content-length")), [N, I] = a && Jf(
        O,
        na(Zf(a), !0)
      ) || [];
      b = new Response(
        tp(b.body, np, N, () => {
          I && I(), g && g();
        }),
        k
      );
    }
    f = f || "text";
    let x = await sa[B.findKey(sa, f) || "text"](b, e);
    return !_ && g && g(), await new Promise((k, O) => {
      Zg(k, O, {
        data: x,
        headers: Mt.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: m
      });
    });
  } catch (y) {
    throw g && g(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new xe("Network Error", xe.ERR_NETWORK, e, m),
      {
        cause: y.cause || y
      }
    ) : xe.from(y, y && y.code, e, m);
  }
}), uc = {
  http: PS,
  xhr: dC,
  fetch: bC
};
B.forEach(uc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const sp = (e) => `- ${e}`, EC = (e) => B.isFunction(e) || e === null || e === !1, ov = {
  getAdapter: (e) => {
    e = B.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, s;
    const o = {};
    for (let r = 0; r < t; r++) {
      n = e[r];
      let i;
      if (s = n, !EC(n) && (s = uc[(i = String(n)).toLowerCase()], s === void 0))
        throw new xe(`Unknown adapter '${i}'`);
      if (s)
        break;
      o[i || "#" + r] = s;
    }
    if (!s) {
      const r = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? r.length > 1 ? `since :
` + r.map(sp).join(`
`) : " " + sp(r[0]) : "as no adapter specified";
      throw new xe(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: uc
};
function il(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ho(null, e);
}
function op(e) {
  return il(e), e.headers = Mt.from(e.headers), e.data = rl.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ov.getAdapter(e.adapter || Gr.adapter)(e).then(function(s) {
    return il(e), s.data = rl.call(
      e,
      e.transformResponse,
      s
    ), s.headers = Mt.from(s.headers), s;
  }, function(s) {
    return Jg(s) || (il(e), s && s.response && (s.response.data = rl.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = Mt.from(s.response.headers))), Promise.reject(s);
  });
}
const rv = "1.10.0", xa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  xa[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const rp = {};
xa.transitional = function(t, n, s) {
  function o(r, i) {
    return "[Axios v" + rv + "] Transitional option '" + r + "'" + i + (s ? ". " + s : "");
  }
  return (r, i, a) => {
    if (t === !1)
      throw new xe(
        o(i, " has been removed" + (n ? " in " + n : "")),
        xe.ERR_DEPRECATED
      );
    return n && !rp[i] && (rp[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(r, i, a) : !0;
  };
};
xa.spelling = function(t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function wC(e, t, n) {
  if (typeof e != "object")
    throw new xe("options must be an object", xe.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let o = s.length;
  for (; o-- > 0; ) {
    const r = s[o], i = t[r];
    if (i) {
      const a = e[r], c = a === void 0 || i(a, r, e);
      if (c !== !0)
        throw new xe("option " + r + " must be " + c, xe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new xe("Unknown option " + r, xe.ERR_BAD_OPTION);
  }
}
const Vi = {
  assertOptions: wC,
  validators: xa
}, bn = Vi.validators;
let js = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Gf(),
      response: new Gf()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Gs(this.defaults, n);
    const { transitional: s, paramsSerializer: o, headers: r } = n;
    s !== void 0 && Vi.assertOptions(s, {
      silentJSONParsing: bn.transitional(bn.boolean),
      forcedJSONParsing: bn.transitional(bn.boolean),
      clarifyTimeoutError: bn.transitional(bn.boolean)
    }, !1), o != null && (B.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Vi.assertOptions(o, {
      encode: bn.function,
      serialize: bn.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Vi.assertOptions(n, {
      baseUrl: bn.spelling("baseURL"),
      withXsrfToken: bn.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = r && B.merge(
      r.common,
      r[n.method]
    );
    r && B.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete r[m];
      }
    ), n.headers = Mt.concat(i, r);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (c = c && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(g) {
      f.push(g.fulfilled, g.rejected);
    });
    let u, d = 0, p;
    if (!c) {
      const m = [op.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, f), p = m.length, u = Promise.resolve(n); d < p; )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    p = a.length;
    let h = n;
    for (d = 0; d < p; ) {
      const m = a[d++], g = a[d++];
      try {
        h = m(h);
      } catch (v) {
        g.call(this, v);
        break;
      }
    }
    try {
      u = op.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, p = f.length; d < p; )
      u = u.then(f[d++], f[d++]);
    return u;
  }
  getUri(t) {
    t = Gs(this.defaults, t);
    const n = ev(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Xg(n, t.params, t.paramsSerializer);
  }
};
B.forEach(["delete", "get", "head", "options"], function(t) {
  js.prototype[t] = function(n, s) {
    return this.request(Gs(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
B.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(r, i, a) {
      return this.request(Gs(a || {}, {
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
let AC = class iv {
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
      s.reason || (s.reason = new Ho(r, i, a), n(s.reason));
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
function SC(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function CC(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const dc = {
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
Object.entries(dc).forEach(([e, t]) => {
  dc[t] = e;
});
function av(e) {
  const t = new js(e), n = Lg(js.prototype.request, t);
  return B.extend(n, js.prototype, t, { allOwnKeys: !0 }), B.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return av(Gs(e, o));
  }, n;
}
const lt = av(Gr);
lt.Axios = js;
lt.CanceledError = Ho;
lt.CancelToken = AC;
lt.isCancel = Jg;
lt.VERSION = rv;
lt.toFormData = Da;
lt.AxiosError = xe;
lt.Cancel = lt.CanceledError;
lt.all = function(t) {
  return Promise.all(t);
};
lt.spread = SC;
lt.isAxiosError = CC;
lt.mergeConfig = Gs;
lt.AxiosHeaders = Mt;
lt.formToJSON = (e) => Qg(B.isHTMLForm(e) ? new FormData(e) : e);
lt.getAdapter = ov.getAdapter;
lt.HttpStatusCode = dc;
lt.default = lt;
const {
  Axios: j3,
  AxiosError: U3,
  CanceledError: H3,
  isCancel: W3,
  CancelToken: K3,
  VERSION: z3,
  all: q3,
  Cancel: Y3,
  isAxiosError: X3,
  spread: G3,
  toFormData: Q3,
  AxiosHeaders: J3,
  HttpStatusCode: Z3,
  formToJSON: eB,
  getAdapter: tB,
  mergeConfig: nB
} = lt, OC = "fhir_snapshot", TC = "api", NC = () => {
  let n = {
    pid: new URLSearchParams(location.search).get("pid"),
    page: TC,
    // content: "externalModule",
    type: "module",
    prefix: OC
  };
  return window.redcap_csrf_token && (n.redcap_csrf_token = window.redcap_csrf_token), n;
}, DC = () => {
  const e = lt.create({
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
    const n = NC();
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
}, Ie = DC(), Ue = {
  getProjectSettings() {
    const e = { route: "project-settings" };
    return Ie.get("", { params: e });
  },
  updateFhirSystem(e) {
    const t = { route: "project-settings/fhir-system" };
    return Ie.put("", { fhir_system: e }, { params: t });
  },
  updateProjectSettings(e) {
    const t = { route: "project-settings" };
    return Ie.put("", e, { params: t });
  },
  listMrns(e, t) {
    const n = { route: "mrns" };
    return e && (n._page = e), t && (n._per_page = t), Ie.get("", { params: n });
  },
  addMrns(e) {
    const t = { route: "mrns" };
    return Ie.post("", { mrns: e }, { params: t });
  },
  addMrn(e) {
    const t = { route: "mrns" };
    return Ie.post("", { mrns: [e] }, { params: t });
  },
  removeMrn(e) {
    const t = { route: `mrns/${e}` };
    return Ie.delete("", { params: t, data: e });
  },
  triggerFetch(e, t) {
    const n = { route: "trigger-fetch" };
    return Ie.post("", { mrns: e, resources: t }, { params: n });
  },
  getFetchStatus() {
    const e = { route: "fetch-status" };
    return Ie.get("", { params: e });
  },
  createZipArchive(e) {
    const t = { route: "create-zip-archive" };
    return Ie.post("", { mrns: e }, { params: t });
  },
  downloadZip(e) {
    const t = { route: "download-zip", zip_id: e };
    return Ie.get("", { params: t, responseType: "blob" });
  },
  // Archive management API methods
  listArchives() {
    const e = { route: "archives" };
    return Ie.get("", { params: e });
  },
  createArchiveSelected(e, t) {
    const n = { route: "archives/selected" }, s = { mrns: e };
    return t && Object.assign(s, t), Ie.post("", s, { params: n });
  },
  createArchiveAll(e) {
    const t = { route: "archives/all" }, n = e || {};
    return Ie.post("", n, { params: t });
  },
  downloadArchive(e) {
    const t = { route: `archives/${e}/download` };
    return Ie.get("", { params: t, responseType: "blob" });
  },
  deleteArchive(e) {
    const t = { route: `archives/${e}` };
    return Ie.delete("", { params: t });
  },
  // Enhanced MRN and resource management
  getMrnResources(e) {
    const t = { route: `mrns/${e}/resources` };
    return Ie.get("", { params: t });
  },
  getProjectSummary() {
    const e = { route: "project-summary" };
    return Ie.get("", { params: e });
  },
  triggerFetchMrns(e, t) {
    const n = { route: "trigger-fetch" }, s = { mrns: e };
    return t && t.length > 0 && (s.resources = t), Ie.post("", s, { params: n });
  },
  performFullSync() {
    const e = { route: "perform-full-sync" };
    return Ie.post("", {}, { params: e });
  },
  retryFailedResource(e, t, n) {
    const s = { route: "retry-failed" };
    return Ie.post("", {
      mrn: e,
      resource_type: t,
      repeat_instance: n,
      bulk: !1
    }, { params: s });
  },
  bulkRetryFailed(e) {
    const t = { route: "retry-failed" }, n = { bulk: !0 };
    return e && (n.resource_type = e), Ie.post("", n, { params: t });
  },
  retryFailed(e) {
    const t = { route: "retry-failed" };
    return Ie.post("", e, { params: t });
  },
  // Task management API methods
  listTasks(e, t, n) {
    const s = { route: "tasks" };
    return e && (s.page = e), t && (s.limit = t), n && Object.assign(s, n), Ie.get("", { params: s });
  },
  getTaskDetails(e) {
    const t = { route: `tasks/${e}` };
    return Ie.get("", { params: t });
  },
  performTaskFullSync() {
    const e = { route: "tasks/full-sync" };
    return Ie.post("", {}, { params: e });
  },
  retryFailedResources(e) {
    const t = { route: "tasks/retry-failed" }, n = e ? { filters: e } : {};
    return Ie.post("", n, { params: t });
  },
  deleteTask(e) {
    const t = { route: `tasks/${e}` };
    return Ie.delete("", { params: t });
  },
  getQueueStatistics() {
    const e = { route: "tasks/stats" };
    return Ie.get("", { params: e });
  },
  cleanupCompletedTasks() {
    const e = { route: "tasks/cleanup" };
    return Ie.post("", {}, { params: e });
  },
  // Streaming archive API methods
  streamSelectedArchive(e, t) {
    const n = { route: "archives/stream/selected" }, s = { mrns: e, ...t };
    return Ie.post("", s, {
      params: n,
      responseType: "blob",
      timeout: 0
      // No timeout for streaming
    });
  },
  streamAllArchive(e) {
    const t = { route: "archives/stream/all" };
    return Ie.post("", e || {}, {
      params: t,
      responseType: "blob",
      timeout: 0
    });
  },
  // Resource content viewing API method
  getResourceContent(e, t, n, s) {
    const o = { route: `records/${e}/resources/${t}/content/${n}` };
    return s && (o.preview_limit = s), Ie.get("", { params: o });
  },
  // Mapping resources (route-based management)
  listMappingResources() {
    const e = { route: "mapping-resources" };
    return Ie.get("", { params: e });
  },
  createMappingResource(e) {
    const t = { route: "mapping-resources" };
    return Ie.post("", e, { params: t });
  },
  updateMappingResource(e, t) {
    const n = { route: `mapping-resources/${e}` };
    return Ie.put("", t, { params: n });
  },
  softDeleteMappingResource(e) {
    const t = { route: `mapping-resources/${e}/soft-delete` };
    return Ie.post("", {}, { params: t });
  },
  restoreMappingResource(e) {
    const t = { route: `mapping-resources/${e}/restore` };
    return Ie.post("", {}, { params: t });
  },
  purgeDeletedMappingResource(e) {
    const t = { route: `mapping-resources/${e}/purge-deleted` };
    return Ie.post("", {}, { params: t });
  },
  deleteMappingResource(e) {
    const t = { route: `mapping-resources/${e}` };
    return Ie.delete("", { params: t });
  }
}, Wo = /* @__PURE__ */ Xn("errors", () => {
  const e = H([]);
  return {
    errors: e,
    addError: (s, o) => {
      const r = kC(s);
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
function kC(e) {
  return e instanceof Error ? e : typeof e == "string" ? new Error(e) : typeof e == "object" && e !== null && "message" in e ? new Error(String(e.message)) : new Error("Unknown error");
}
var Ct = "top", $t = "bottom", jt = "right", Ot = "left", Ra = "auto", Ko = [Ct, $t, jt, Ot], Qs = "start", ko = "end", lv = "clippingParents", su = "viewport", po = "popper", cv = "reference", fc = /* @__PURE__ */ Ko.reduce(function(e, t) {
  return e.concat([t + "-" + Qs, t + "-" + ko]);
}, []), ou = /* @__PURE__ */ [].concat(Ko, [Ra]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qs, t + "-" + ko]);
}, []), uv = "beforeRead", dv = "read", fv = "afterRead", pv = "beforeMain", hv = "main", mv = "afterMain", gv = "beforeWrite", vv = "write", _v = "afterWrite", yv = [uv, dv, fv, pv, hv, mv, gv, vv, _v];
function xn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ut(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Js(e) {
  var t = Ut(e).Element;
  return e instanceof t || e instanceof Element;
}
function qt(e) {
  var t = Ut(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ru(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ut(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function xC(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var s = t.styles[n] || {}, o = t.attributes[n] || {}, r = t.elements[n];
    !qt(r) || !xn(r) || (Object.assign(r.style, s), Object.keys(o).forEach(function(i) {
      var a = o[i];
      a === !1 ? r.removeAttribute(i) : r.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function RC(e) {
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
      var o = t.elements[s], r = t.attributes[s] || {}, i = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : n[s]), a = i.reduce(function(c, f) {
        return c[f] = "", c;
      }, {});
      !qt(o) || !xn(o) || (Object.assign(o.style, a), Object.keys(r).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const iu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: xC,
  effect: RC,
  requires: ["computeStyles"]
};
function Tn(e) {
  return e.split("-")[0];
}
var Us = Math.max, oa = Math.min, xo = Math.round;
function pc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function bv() {
  return !/^((?!chrome|android).)*safari/i.test(pc());
}
function Ro(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var s = e.getBoundingClientRect(), o = 1, r = 1;
  t && qt(e) && (o = e.offsetWidth > 0 && xo(s.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && xo(s.height) / e.offsetHeight || 1);
  var i = Js(e) ? Ut(e) : window, a = i.visualViewport, c = !bv() && n, f = (s.left + (c && a ? a.offsetLeft : 0)) / o, u = (s.top + (c && a ? a.offsetTop : 0)) / r, d = s.width / o, p = s.height / r;
  return {
    width: d,
    height: p,
    top: u,
    right: f + d,
    bottom: u + p,
    left: f,
    x: f,
    y: u
  };
}
function au(e) {
  var t = Ro(e), n = e.offsetWidth, s = e.offsetHeight;
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
  if (n && ru(n)) {
    var s = t;
    do {
      if (s && e.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function Kn(e) {
  return Ut(e).getComputedStyle(e);
}
function IC(e) {
  return ["table", "td", "th"].indexOf(xn(e)) >= 0;
}
function _s(e) {
  return ((Js(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ia(e) {
  return xn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ru(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    _s(e)
  );
}
function ip(e) {
  return !qt(e) || // https://github.com/popperjs/popper-core/issues/837
  Kn(e).position === "fixed" ? null : e.offsetParent;
}
function MC(e) {
  var t = /firefox/i.test(pc()), n = /Trident/i.test(pc());
  if (n && qt(e)) {
    var s = Kn(e);
    if (s.position === "fixed")
      return null;
  }
  var o = Ia(e);
  for (ru(o) && (o = o.host); qt(o) && ["html", "body"].indexOf(xn(o)) < 0; ) {
    var r = Kn(o);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Qr(e) {
  for (var t = Ut(e), n = ip(e); n && IC(n) && Kn(n).position === "static"; )
    n = ip(n);
  return n && (xn(n) === "html" || xn(n) === "body" && Kn(n).position === "static") ? t : n || MC(e) || t;
}
function lu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yr(e, t, n) {
  return Us(e, oa(t, n));
}
function PC(e, t, n) {
  var s = yr(e, t, n);
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
var VC = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Av(typeof t != "number" ? t : Sv(t, Ko));
};
function LC(e) {
  var t, n = e.state, s = e.name, o = e.options, r = n.elements.arrow, i = n.modifiersData.popperOffsets, a = Tn(n.placement), c = lu(a), f = [Ot, jt].indexOf(a) >= 0, u = f ? "height" : "width";
  if (!(!r || !i)) {
    var d = VC(o.padding, n), p = au(r), h = c === "y" ? Ct : Ot, m = c === "y" ? $t : jt, g = n.rects.reference[u] + n.rects.reference[c] - i[c] - n.rects.popper[u], v = i[c] - n.rects.reference[c], y = Qr(r), b = y ? c === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, _ = g / 2 - v / 2, x = d[h], k = b - p[u] - d[m], O = b / 2 - p[u] / 2 + _, N = yr(x, O, k), I = c;
    n.modifiersData[s] = (t = {}, t[I] = N, t.centerOffset = N - O, t);
  }
}
function FC(e) {
  var t = e.state, n = e.options, s = n.element, o = s === void 0 ? "[data-popper-arrow]" : s;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ev(t.elements.popper, o) && (t.elements.arrow = o));
}
const Cv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: LC,
  effect: FC,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Io(e) {
  return e.split("-")[1];
}
var BC = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function $C(e, t) {
  var n = e.x, s = e.y, o = t.devicePixelRatio || 1;
  return {
    x: xo(n * o) / o || 0,
    y: xo(s * o) / o || 0
  };
}
function ap(e) {
  var t, n = e.popper, s = e.popperRect, o = e.placement, r = e.variation, i = e.offsets, a = e.position, c = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, d = e.isFixed, p = i.x, h = p === void 0 ? 0 : p, m = i.y, g = m === void 0 ? 0 : m, v = typeof u == "function" ? u({
    x: h,
    y: g
  }) : {
    x: h,
    y: g
  };
  h = v.x, g = v.y;
  var y = i.hasOwnProperty("x"), b = i.hasOwnProperty("y"), _ = Ot, x = Ct, k = window;
  if (f) {
    var O = Qr(n), N = "clientHeight", I = "clientWidth";
    if (O === Ut(n) && (O = _s(n), Kn(O).position !== "static" && a === "absolute" && (N = "scrollHeight", I = "scrollWidth")), O = O, o === Ct || (o === Ot || o === jt) && r === ko) {
      x = $t;
      var C = d && O === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[N]
      );
      g -= C - s.height, g *= c ? 1 : -1;
    }
    if (o === Ot || (o === Ct || o === $t) && r === ko) {
      _ = jt;
      var w = d && O === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[I]
      );
      h -= w - s.width, h *= c ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: a
  }, f && BC), A = u === !0 ? $C({
    x: h,
    y: g
  }, Ut(n)) : {
    x: h,
    y: g
  };
  if (h = A.x, g = A.y, c) {
    var F;
    return Object.assign({}, D, (F = {}, F[x] = b ? "0" : "", F[_] = y ? "0" : "", F.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", F));
  }
  return Object.assign({}, D, (t = {}, t[x] = b ? g + "px" : "", t[_] = y ? h + "px" : "", t.transform = "", t));
}
function jC(e) {
  var t = e.state, n = e.options, s = n.gpuAcceleration, o = s === void 0 ? !0 : s, r = n.adaptive, i = r === void 0 ? !0 : r, a = n.roundOffsets, c = a === void 0 ? !0 : a, f = {
    placement: Tn(t.placement),
    variation: Io(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ap(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ap(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const cu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: jC,
  data: {}
};
var ui = {
  passive: !0
};
function UC(e) {
  var t = e.state, n = e.instance, s = e.options, o = s.scroll, r = o === void 0 ? !0 : o, i = s.resize, a = i === void 0 ? !0 : i, c = Ut(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && f.forEach(function(u) {
    u.addEventListener("scroll", n.update, ui);
  }), a && c.addEventListener("resize", n.update, ui), function() {
    r && f.forEach(function(u) {
      u.removeEventListener("scroll", n.update, ui);
    }), a && c.removeEventListener("resize", n.update, ui);
  };
}
const uu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: UC,
  data: {}
};
var HC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Li(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return HC[t];
  });
}
var WC = {
  start: "end",
  end: "start"
};
function lp(e) {
  return e.replace(/start|end/g, function(t) {
    return WC[t];
  });
}
function du(e) {
  var t = Ut(e), n = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: s
  };
}
function fu(e) {
  return Ro(_s(e)).left + du(e).scrollLeft;
}
function KC(e, t) {
  var n = Ut(e), s = _s(e), o = n.visualViewport, r = s.clientWidth, i = s.clientHeight, a = 0, c = 0;
  if (o) {
    r = o.width, i = o.height;
    var f = bv();
    (f || !f && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: r,
    height: i,
    x: a + fu(e),
    y: c
  };
}
function zC(e) {
  var t, n = _s(e), s = du(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, r = Us(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Us(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -s.scrollLeft + fu(e), c = -s.scrollTop;
  return Kn(o || n).direction === "rtl" && (a += Us(n.clientWidth, o ? o.clientWidth : 0) - r), {
    width: r,
    height: i,
    x: a,
    y: c
  };
}
function pu(e) {
  var t = Kn(e), n = t.overflow, s = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + s);
}
function Ov(e) {
  return ["html", "body", "#document"].indexOf(xn(e)) >= 0 ? e.ownerDocument.body : qt(e) && pu(e) ? e : Ov(Ia(e));
}
function br(e, t) {
  var n;
  t === void 0 && (t = []);
  var s = Ov(e), o = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ut(s), i = o ? [r].concat(r.visualViewport || [], pu(s) ? s : []) : s, a = t.concat(i);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(br(Ia(i)))
  );
}
function hc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function qC(e, t) {
  var n = Ro(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function cp(e, t, n) {
  return t === su ? hc(KC(e, n)) : Js(t) ? qC(t, n) : hc(zC(_s(e)));
}
function YC(e) {
  var t = br(Ia(e)), n = ["absolute", "fixed"].indexOf(Kn(e).position) >= 0, s = n && qt(e) ? Qr(e) : e;
  return Js(s) ? t.filter(function(o) {
    return Js(o) && Ev(o, s) && xn(o) !== "body";
  }) : [];
}
function XC(e, t, n, s) {
  var o = t === "clippingParents" ? YC(e) : [].concat(t), r = [].concat(o, [n]), i = r[0], a = r.reduce(function(c, f) {
    var u = cp(e, f, s);
    return c.top = Us(u.top, c.top), c.right = oa(u.right, c.right), c.bottom = oa(u.bottom, c.bottom), c.left = Us(u.left, c.left), c;
  }, cp(e, i, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Tv(e) {
  var t = e.reference, n = e.element, s = e.placement, o = s ? Tn(s) : null, r = s ? Io(s) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, c;
  switch (o) {
    case Ct:
      c = {
        x: i,
        y: t.y - n.height
      };
      break;
    case $t:
      c = {
        x: i,
        y: t.y + t.height
      };
      break;
    case jt:
      c = {
        x: t.x + t.width,
        y: a
      };
      break;
    case Ot:
      c = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var f = o ? lu(o) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (r) {
      case Qs:
        c[f] = c[f] - (t[u] / 2 - n[u] / 2);
        break;
      case ko:
        c[f] = c[f] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return c;
}
function Mo(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = s === void 0 ? e.placement : s, r = n.strategy, i = r === void 0 ? e.strategy : r, a = n.boundary, c = a === void 0 ? lv : a, f = n.rootBoundary, u = f === void 0 ? su : f, d = n.elementContext, p = d === void 0 ? po : d, h = n.altBoundary, m = h === void 0 ? !1 : h, g = n.padding, v = g === void 0 ? 0 : g, y = Av(typeof v != "number" ? v : Sv(v, Ko)), b = p === po ? cv : po, _ = e.rects.popper, x = e.elements[m ? b : p], k = XC(Js(x) ? x : x.contextElement || _s(e.elements.popper), c, u, i), O = Ro(e.elements.reference), N = Tv({
    reference: O,
    element: _,
    placement: o
  }), I = hc(Object.assign({}, _, N)), C = p === po ? I : O, w = {
    top: k.top - C.top + y.top,
    bottom: C.bottom - k.bottom + y.bottom,
    left: k.left - C.left + y.left,
    right: C.right - k.right + y.right
  }, D = e.modifiersData.offset;
  if (p === po && D) {
    var A = D[o];
    Object.keys(w).forEach(function(F) {
      var de = [jt, $t].indexOf(F) >= 0 ? 1 : -1, Y = [Ct, $t].indexOf(F) >= 0 ? "y" : "x";
      w[F] += A[Y] * de;
    });
  }
  return w;
}
function GC(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = n.boundary, r = n.rootBoundary, i = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, f = c === void 0 ? ou : c, u = Io(s), d = u ? a ? fc : fc.filter(function(m) {
    return Io(m) === u;
  }) : Ko, p = d.filter(function(m) {
    return f.indexOf(m) >= 0;
  });
  p.length === 0 && (p = d);
  var h = p.reduce(function(m, g) {
    return m[g] = Mo(e, {
      placement: g,
      boundary: o,
      rootBoundary: r,
      padding: i
    })[Tn(g)], m;
  }, {});
  return Object.keys(h).sort(function(m, g) {
    return h[m] - h[g];
  });
}
function QC(e) {
  if (Tn(e) === Ra)
    return [];
  var t = Li(e);
  return [lp(e), t, lp(t)];
}
function JC(e) {
  var t = e.state, n = e.options, s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (var o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !0 : i, c = n.fallbackPlacements, f = n.padding, u = n.boundary, d = n.rootBoundary, p = n.altBoundary, h = n.flipVariations, m = h === void 0 ? !0 : h, g = n.allowedAutoPlacements, v = t.options.placement, y = Tn(v), b = y === v, _ = c || (b || !m ? [Li(v)] : QC(v)), x = [v].concat(_).reduce(function(we, ke) {
      return we.concat(Tn(ke) === Ra ? GC(t, {
        placement: ke,
        boundary: u,
        rootBoundary: d,
        padding: f,
        flipVariations: m,
        allowedAutoPlacements: g
      }) : ke);
    }, []), k = t.rects.reference, O = t.rects.popper, N = /* @__PURE__ */ new Map(), I = !0, C = x[0], w = 0; w < x.length; w++) {
      var D = x[w], A = Tn(D), F = Io(D) === Qs, de = [Ct, $t].indexOf(A) >= 0, Y = de ? "width" : "height", re = Mo(t, {
        placement: D,
        boundary: u,
        rootBoundary: d,
        altBoundary: p,
        padding: f
      }), K = de ? F ? jt : Ot : F ? $t : Ct;
      k[Y] > O[Y] && (K = Li(K));
      var le = Li(K), be = [];
      if (r && be.push(re[A] <= 0), a && be.push(re[K] <= 0, re[le] <= 0), be.every(function(we) {
        return we;
      })) {
        C = D, I = !1;
        break;
      }
      N.set(D, be);
    }
    if (I)
      for (var Ze = m ? 3 : 1, W = function(ke) {
        var He = x.find(function(L) {
          var Q = N.get(L);
          if (Q)
            return Q.slice(0, ke).every(function(se) {
              return se;
            });
        });
        if (He)
          return C = He, "break";
      }, oe = Ze; oe > 0; oe--) {
        var pe = W(oe);
        if (pe === "break") break;
      }
    t.placement !== C && (t.modifiersData[s]._skip = !0, t.placement = C, t.reset = !0);
  }
}
const Nv = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: JC,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function up(e, t, n) {
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
function dp(e) {
  return [Ct, jt, $t, Ot].some(function(t) {
    return e[t] >= 0;
  });
}
function ZC(e) {
  var t = e.state, n = e.name, s = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, i = Mo(t, {
    elementContext: "reference"
  }), a = Mo(t, {
    altBoundary: !0
  }), c = up(i, s), f = up(a, o, r), u = dp(c), d = dp(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
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
  fn: ZC
};
function eO(e, t, n) {
  var s = Tn(e), o = [Ot, Ct].indexOf(s) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = r[0], a = r[1];
  return i = i || 0, a = (a || 0) * o, [Ot, jt].indexOf(s) >= 0 ? {
    x: a,
    y: i
  } : {
    x: i,
    y: a
  };
}
function tO(e) {
  var t = e.state, n = e.options, s = e.name, o = n.offset, r = o === void 0 ? [0, 0] : o, i = ou.reduce(function(u, d) {
    return u[d] = eO(d, t.rects, r), u;
  }, {}), a = i[t.placement], c = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[s] = i;
}
const kv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: tO
};
function nO(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Tv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const hu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: nO,
  data: {}
};
function sO(e) {
  return e === "x" ? "y" : "x";
}
function oO(e) {
  var t = e.state, n = e.options, s = e.name, o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !1 : i, c = n.boundary, f = n.rootBoundary, u = n.altBoundary, d = n.padding, p = n.tether, h = p === void 0 ? !0 : p, m = n.tetherOffset, g = m === void 0 ? 0 : m, v = Mo(t, {
    boundary: c,
    rootBoundary: f,
    padding: d,
    altBoundary: u
  }), y = Tn(t.placement), b = Io(t.placement), _ = !b, x = lu(y), k = sO(x), O = t.modifiersData.popperOffsets, N = t.rects.reference, I = t.rects.popper, C = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, w = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (O) {
    if (r) {
      var F, de = x === "y" ? Ct : Ot, Y = x === "y" ? $t : jt, re = x === "y" ? "height" : "width", K = O[x], le = K + v[de], be = K - v[Y], Ze = h ? -I[re] / 2 : 0, W = b === Qs ? N[re] : I[re], oe = b === Qs ? -I[re] : -N[re], pe = t.elements.arrow, we = h && pe ? au(pe) : {
        width: 0,
        height: 0
      }, ke = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : wv(), He = ke[de], L = ke[Y], Q = yr(0, N[re], we[re]), se = _ ? N[re] / 2 - Ze - Q - He - w.mainAxis : W - Q - He - w.mainAxis, ge = _ ? -N[re] / 2 + Ze + Q + L + w.mainAxis : oe + Q + L + w.mainAxis, Re = t.elements.arrow && Qr(t.elements.arrow), tt = Re ? x === "y" ? Re.clientTop || 0 : Re.clientLeft || 0 : 0, E = (F = D?.[x]) != null ? F : 0, S = K + se - E - tt, V = K + ge - E, z = yr(h ? oa(le, S) : le, K, h ? Us(be, V) : be);
      O[x] = z, A[x] = z - K;
    }
    if (a) {
      var $, q = x === "x" ? Ct : Ot, ae = x === "x" ? $t : jt, ee = O[k], te = k === "y" ? "height" : "width", J = ee + v[q], _e = ee - v[ae], ie = [Ct, Ot].indexOf(y) !== -1, ve = ($ = D?.[k]) != null ? $ : 0, Ce = ie ? J : ee - N[te] - I[te] - ve + w.altAxis, Ve = ie ? ee + N[te] + I[te] - ve - w.altAxis : _e, We = h && ie ? PC(Ce, ee, Ve) : yr(h ? Ce : J, ee, h ? Ve : _e);
      O[k] = We, A[k] = We - ee;
    }
    t.modifiersData[s] = A;
  }
}
const xv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: oO,
  requiresIfExists: ["offset"]
};
function rO(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function iO(e) {
  return e === Ut(e) || !qt(e) ? du(e) : rO(e);
}
function aO(e) {
  var t = e.getBoundingClientRect(), n = xo(t.width) / e.offsetWidth || 1, s = xo(t.height) / e.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function lO(e, t, n) {
  n === void 0 && (n = !1);
  var s = qt(t), o = qt(t) && aO(t), r = _s(t), i = Ro(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (s || !s && !n) && ((xn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  pu(r)) && (a = iO(t)), qt(t) ? (c = Ro(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : r && (c.x = fu(r))), {
    x: i.left + a.scrollLeft - c.x,
    y: i.top + a.scrollTop - c.y,
    width: i.width,
    height: i.height
  };
}
function cO(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), s = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function o(r) {
    n.add(r.name);
    var i = [].concat(r.requires || [], r.requiresIfExists || []);
    i.forEach(function(a) {
      if (!n.has(a)) {
        var c = t.get(a);
        c && o(c);
      }
    }), s.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || o(r);
  }), s;
}
function uO(e) {
  var t = cO(e);
  return yv.reduce(function(n, s) {
    return n.concat(t.filter(function(o) {
      return o.phase === s;
    }));
  }, []);
}
function dO(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function fO(e) {
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
var fp = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function pp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function Ma(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, s = n === void 0 ? [] : n, o = t.defaultOptions, r = o === void 0 ? fp : o;
  return function(a, c, f) {
    f === void 0 && (f = r);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, fp, r),
      modifiersData: {},
      elements: {
        reference: a,
        popper: c
      },
      attributes: {},
      styles: {}
    }, d = [], p = !1, h = {
      state: u,
      setOptions: function(y) {
        var b = typeof y == "function" ? y(u.options) : y;
        g(), u.options = Object.assign({}, r, u.options, b), u.scrollParents = {
          reference: Js(a) ? br(a) : a.contextElement ? br(a.contextElement) : [],
          popper: br(c)
        };
        var _ = uO(fO([].concat(s, u.options.modifiers)));
        return u.orderedModifiers = _.filter(function(x) {
          return x.enabled;
        }), m(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var y = u.elements, b = y.reference, _ = y.popper;
          if (pp(b, _)) {
            u.rects = {
              reference: lO(b, Qr(_), u.options.strategy === "fixed"),
              popper: au(_)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(w) {
              return u.modifiersData[w.name] = Object.assign({}, w.data);
            });
            for (var x = 0; x < u.orderedModifiers.length; x++) {
              if (u.reset === !0) {
                u.reset = !1, x = -1;
                continue;
              }
              var k = u.orderedModifiers[x], O = k.fn, N = k.options, I = N === void 0 ? {} : N, C = k.name;
              typeof O == "function" && (u = O({
                state: u,
                options: I,
                name: C,
                instance: h
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: dO(function() {
        return new Promise(function(v) {
          h.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        g(), p = !0;
      }
    };
    if (!pp(a, c))
      return h;
    h.setOptions(f).then(function(v) {
      !p && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function m() {
      u.orderedModifiers.forEach(function(v) {
        var y = v.name, b = v.options, _ = b === void 0 ? {} : b, x = v.effect;
        if (typeof x == "function") {
          var k = x({
            state: u,
            name: y,
            instance: h,
            options: _
          }), O = function() {
          };
          d.push(k || O);
        }
      });
    }
    function g() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return h;
  };
}
var pO = /* @__PURE__ */ Ma(), hO = [uu, hu, cu, iu], mO = /* @__PURE__ */ Ma({
  defaultModifiers: hO
}), gO = [uu, hu, cu, iu, kv, Nv, xv, Cv, Dv], mu = /* @__PURE__ */ Ma({
  defaultModifiers: gO
});
const Rv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: mv,
  afterRead: fv,
  afterWrite: _v,
  applyStyles: iu,
  arrow: Cv,
  auto: Ra,
  basePlacements: Ko,
  beforeMain: pv,
  beforeRead: uv,
  beforeWrite: gv,
  bottom: $t,
  clippingParents: lv,
  computeStyles: cu,
  createPopper: mu,
  createPopperBase: pO,
  createPopperLite: mO,
  detectOverflow: Mo,
  end: ko,
  eventListeners: uu,
  flip: Nv,
  hide: Dv,
  left: Ot,
  main: hv,
  modifierPhases: yv,
  offset: kv,
  placements: ou,
  popper: po,
  popperGenerator: Ma,
  popperOffsets: hu,
  preventOverflow: xv,
  read: dv,
  reference: cv,
  right: jt,
  start: Qs,
  top: Ct,
  variationPlacements: fc,
  viewport: su,
  write: vv
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const es = /* @__PURE__ */ new Map(), al = {
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
}, vO = 1e6, _O = 1e3, mc = "transitionend", Iv = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)), e), yO = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), bO = (e) => {
  do
    e += Math.floor(Math.random() * vO);
  while (document.getElementById(e));
  return e;
}, EO = (e) => {
  if (!e)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: n
  } = window.getComputedStyle(e);
  const s = Number.parseFloat(t), o = Number.parseFloat(n);
  return !s && !o ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * _O);
}, Mv = (e) => {
  e.dispatchEvent(new Event(mc));
}, Un = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), hs = (e) => Un(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(Iv(e)) : null, zo = (e) => {
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
}, ms = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Pv = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? Pv(e.parentNode) : null;
}, ra = () => {
}, Jr = (e) => {
  e.offsetHeight;
}, Vv = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, ll = [], wO = (e) => {
  document.readyState === "loading" ? (ll.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of ll)
      t();
  }), ll.push(e)) : e();
}, Gt = () => document.documentElement.dir === "rtl", Jt = (e) => {
  wO(() => {
    const t = Vv();
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
  const o = EO(t) + 5;
  let r = !1;
  const i = ({
    target: a
  }) => {
    a === t && (r = !0, t.removeEventListener(mc, i), xt(e));
  };
  t.addEventListener(mc, i), setTimeout(() => {
    r || Mv(t);
  }, o);
}, gu = (e, t, n, s) => {
  const o = e.length;
  let r = e.indexOf(t);
  return r === -1 ? !n && s ? e[o - 1] : e[0] : (r += n ? 1 : -1, s && (r = (r + o) % o), e[Math.max(0, Math.min(r, o - 1))]);
}, AO = /[^.]*(?=\..*)\.|.*/, SO = /\..*/, CO = /::\d+$/, cl = {};
let hp = 1;
const Fv = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, OO = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Bv(e, t) {
  return t && `${t}::${hp++}` || e.uidEvent || hp++;
}
function $v(e) {
  const t = Bv(e);
  return e.uidEvent = t, cl[t] = cl[t] || {}, cl[t];
}
function TO(e, t) {
  return function n(s) {
    return vu(s, {
      delegateTarget: e
    }), n.oneOff && G.off(e, s.type, t), t.apply(e, [s]);
  };
}
function NO(e, t, n) {
  return function s(o) {
    const r = e.querySelectorAll(t);
    for (let {
      target: i
    } = o; i && i !== this; i = i.parentNode)
      for (const a of r)
        if (a === i)
          return vu(o, {
            delegateTarget: i
          }), s.oneOff && G.off(e, o.type, t, n), n.apply(i, [o]);
  };
}
function jv(e, t, n = null) {
  return Object.values(e).find((s) => s.callable === t && s.delegationSelector === n);
}
function Uv(e, t, n) {
  const s = typeof t == "string", o = s ? n : t || n;
  let r = Hv(e);
  return OO.has(r) || (r = e), [s, o, r];
}
function mp(e, t, n, s, o) {
  if (typeof t != "string" || !e)
    return;
  let [r, i, a] = Uv(t, n, s);
  t in Fv && (i = ((m) => function(g) {
    if (!g.relatedTarget || g.relatedTarget !== g.delegateTarget && !g.delegateTarget.contains(g.relatedTarget))
      return m.call(this, g);
  })(i));
  const c = $v(e), f = c[a] || (c[a] = {}), u = jv(f, i, r ? n : null);
  if (u) {
    u.oneOff = u.oneOff && o;
    return;
  }
  const d = Bv(i, t.replace(AO, "")), p = r ? NO(e, n, i) : TO(e, i);
  p.delegationSelector = r ? n : null, p.callable = i, p.oneOff = o, p.uidEvent = d, f[d] = p, e.addEventListener(a, p, r);
}
function gc(e, t, n, s, o) {
  const r = jv(t[n], s, o);
  r && (e.removeEventListener(n, r, !!o), delete t[n][r.uidEvent]);
}
function DO(e, t, n, s) {
  const o = t[n] || {};
  for (const [r, i] of Object.entries(o))
    r.includes(s) && gc(e, t, n, i.callable, i.delegationSelector);
}
function Hv(e) {
  return e = e.replace(SO, ""), Fv[e] || e;
}
const G = {
  on(e, t, n, s) {
    mp(e, t, n, s, !1);
  },
  one(e, t, n, s) {
    mp(e, t, n, s, !0);
  },
  off(e, t, n, s) {
    if (typeof t != "string" || !e)
      return;
    const [o, r, i] = Uv(t, n, s), a = i !== t, c = $v(e), f = c[i] || {}, u = t.startsWith(".");
    if (typeof r < "u") {
      if (!Object.keys(f).length)
        return;
      gc(e, c, i, r, o ? n : null);
      return;
    }
    if (u)
      for (const d of Object.keys(c))
        DO(e, c, d, t.slice(1));
    for (const [d, p] of Object.entries(f)) {
      const h = d.replace(CO, "");
      (!a || t.includes(h)) && gc(e, c, i, p.callable, p.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const s = Vv(), o = Hv(t), r = t !== o;
    let i = null, a = !0, c = !0, f = !1;
    r && s && (i = s.Event(t, n), s(e).trigger(i), a = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), f = i.isDefaultPrevented());
    const u = vu(new Event(t, {
      bubbles: a,
      cancelable: !0
    }), n);
    return f && u.preventDefault(), c && e.dispatchEvent(u), u.defaultPrevented && i && i.preventDefault(), u;
  }
};
function vu(e, t = {}) {
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
function gp(e) {
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
function ul(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Hn = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${ul(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${ul(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {}, n = Object.keys(e.dataset).filter((s) => s.startsWith("bs") && !s.startsWith("bsConfig"));
    for (const s of n) {
      let o = s.replace(/^bs/, "");
      o = o.charAt(0).toLowerCase() + o.slice(1), t[o] = gp(e.dataset[s]);
    }
    return t;
  },
  getDataAttribute(e, t) {
    return gp(e.getAttribute(`data-bs-${ul(t)}`));
  }
};
class Zr {
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
      const r = t[s], i = Un(r) ? "element" : yO(r);
      if (!new RegExp(o).test(i))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${i}" but expected type "${o}".`);
    }
  }
}
const kO = "5.3.7";
class hn extends Zr {
  constructor(t, n) {
    super(), t = hs(t), t && (this._element = t, this._config = this._getConfig(n), al.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    al.remove(this._element, this.constructor.DATA_KEY), G.off(this._element, this.constructor.EVENT_KEY);
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
    return al.get(hs(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return kO;
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
const dl = (e) => {
  let t = e.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith("."))
      return null;
    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
  }
  return t ? t.split(",").map((n) => Iv(n)).join(",") : null;
}, Ee = {
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
    return this.find(t, e).filter((n) => !ms(n) && zo(n));
  },
  getSelectorFromElement(e) {
    const t = dl(e);
    return t && Ee.findOne(t) ? t : null;
  },
  getElementFromSelector(e) {
    const t = dl(e);
    return t ? Ee.findOne(t) : null;
  },
  getMultipleElementsFromSelector(e) {
    const t = dl(e);
    return t ? Ee.find(t) : [];
  }
}, Pa = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, s = e.NAME;
  G.on(document, n, `[data-bs-dismiss="${s}"]`, function(o) {
    if (["A", "AREA"].includes(this.tagName) && o.preventDefault(), ms(this))
      return;
    const r = Ee.getElementFromSelector(this) || this.closest(`.${s}`);
    e.getOrCreateInstance(r)[t]();
  });
}, xO = "alert", RO = "bs.alert", Wv = `.${RO}`, IO = `close${Wv}`, MO = `closed${Wv}`, PO = "fade", VO = "show";
class Va extends hn {
  // Getters
  static get NAME() {
    return xO;
  }
  // Public
  close() {
    if (G.trigger(this._element, IO).defaultPrevented)
      return;
    this._element.classList.remove(VO);
    const n = this._element.classList.contains(PO);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  // Private
  _destroyElement() {
    this._element.remove(), G.trigger(this._element, MO), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Va.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Pa(Va, "close");
Jt(Va);
const LO = "button", FO = "bs.button", BO = `.${FO}`, $O = ".data-api", jO = "active", vp = '[data-bs-toggle="button"]', UO = `click${BO}${$O}`;
class La extends hn {
  // Getters
  static get NAME() {
    return LO;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(jO));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = La.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
G.on(document, UO, vp, (e) => {
  e.preventDefault();
  const t = e.target.closest(vp);
  La.getOrCreateInstance(t).toggle();
});
Jt(La);
const HO = "swipe", qo = ".bs.swipe", WO = `touchstart${qo}`, KO = `touchmove${qo}`, zO = `touchend${qo}`, qO = `pointerdown${qo}`, YO = `pointerup${qo}`, XO = "touch", GO = "pen", QO = "pointer-event", JO = 40, ZO = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, eT = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class ia extends Zr {
  constructor(t, n) {
    super(), this._element = t, !(!t || !ia.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return ZO;
  }
  static get DefaultType() {
    return eT;
  }
  static get NAME() {
    return HO;
  }
  // Public
  dispose() {
    G.off(this._element, qo);
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
    if (t <= JO)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && xt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (G.on(this._element, qO, (t) => this._start(t)), G.on(this._element, YO, (t) => this._end(t)), this._element.classList.add(QO)) : (G.on(this._element, WO, (t) => this._start(t)), G.on(this._element, KO, (t) => this._move(t)), G.on(this._element, zO, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === GO || t.pointerType === XO);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const tT = "carousel", nT = "bs.carousel", ys = `.${nT}`, Kv = ".data-api", sT = "ArrowLeft", oT = "ArrowRight", rT = 500, sr = "next", lo = "prev", ho = "left", Fi = "right", iT = `slide${ys}`, fl = `slid${ys}`, aT = `keydown${ys}`, lT = `mouseenter${ys}`, cT = `mouseleave${ys}`, uT = `dragstart${ys}`, dT = `load${ys}${Kv}`, fT = `click${ys}${Kv}`, zv = "carousel", di = "active", pT = "slide", hT = "carousel-item-end", mT = "carousel-item-start", gT = "carousel-item-next", vT = "carousel-item-prev", qv = ".active", Yv = ".carousel-item", _T = qv + Yv, yT = ".carousel-item img", bT = ".carousel-indicators", ET = "[data-bs-slide], [data-bs-slide-to]", wT = '[data-bs-ride="carousel"]', AT = {
  [sT]: Fi,
  [oT]: ho
}, ST = {
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
class ei extends hn {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Ee.findOne(bT, this._element), this._addEventListeners(), this._config.ride === zv && this.cycle();
  }
  // Getters
  static get Default() {
    return ST;
  }
  static get DefaultType() {
    return CT;
  }
  static get NAME() {
    return tT;
  }
  // Public
  next() {
    this._slide(sr);
  }
  nextWhenVisible() {
    !document.hidden && zo(this._element) && this.next();
  }
  prev() {
    this._slide(lo);
  }
  pause() {
    this._isSliding && Mv(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        G.one(this._element, fl, () => this.cycle());
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
      G.one(this._element, fl, () => this.to(t));
      return;
    }
    const s = this._getItemIndex(this._getActive());
    if (s === t)
      return;
    const o = t > s ? sr : lo;
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
    this._config.keyboard && G.on(this._element, aT, (t) => this._keydown(t)), this._config.pause === "hover" && (G.on(this._element, lT, () => this.pause()), G.on(this._element, cT, () => this._maybeEnableCycle())), this._config.touch && ia.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const s of Ee.find(yT, this._element))
      G.on(s, uT, (o) => o.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(ho)),
      rightCallback: () => this._slide(this._directionToOrder(Fi)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), rT + this._config.interval));
      }
    };
    this._swipeHelper = new ia(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const n = AT[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const n = Ee.findOne(qv, this._indicatorsElement);
    n.classList.remove(di), n.removeAttribute("aria-current");
    const s = Ee.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    s && (s.classList.add(di), s.setAttribute("aria-current", "true"));
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
    const s = this._getActive(), o = t === sr, r = n || gu(this._getItems(), s, o, this._config.wrap);
    if (r === s)
      return;
    const i = this._getItemIndex(r), a = (h) => G.trigger(this._element, h, {
      relatedTarget: r,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(s),
      to: i
    });
    if (a(iT).defaultPrevented || !s || !r)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(i), this._activeElement = r;
    const u = o ? mT : hT, d = o ? gT : vT;
    r.classList.add(d), Jr(r), s.classList.add(u), r.classList.add(u);
    const p = () => {
      r.classList.remove(u, d), r.classList.add(di), s.classList.remove(di, d, u), this._isSliding = !1, a(fl);
    };
    this._queueCallback(p, s, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(pT);
  }
  _getActive() {
    return Ee.findOne(_T, this._element);
  }
  _getItems() {
    return Ee.find(Yv, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Gt() ? t === ho ? lo : sr : t === ho ? sr : lo;
  }
  _orderToDirection(t) {
    return Gt() ? t === lo ? ho : Fi : t === lo ? Fi : ho;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ei.getOrCreateInstance(this, t);
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
G.on(document, fT, ET, function(e) {
  const t = Ee.getElementFromSelector(this);
  if (!t || !t.classList.contains(zv))
    return;
  e.preventDefault();
  const n = ei.getOrCreateInstance(t), s = this.getAttribute("data-bs-slide-to");
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
G.on(window, dT, () => {
  const e = Ee.find(wT);
  for (const t of e)
    ei.getOrCreateInstance(t);
});
Jt(ei);
const OT = "collapse", TT = "bs.collapse", ti = `.${TT}`, NT = ".data-api", DT = `show${ti}`, kT = `shown${ti}`, xT = `hide${ti}`, RT = `hidden${ti}`, IT = `click${ti}${NT}`, pl = "show", _o = "collapse", fi = "collapsing", MT = "collapsed", PT = `:scope .${_o} .${_o}`, VT = "collapse-horizontal", LT = "width", FT = "height", BT = ".collapse.show, .collapse.collapsing", vc = '[data-bs-toggle="collapse"]', $T = {
  parent: null,
  toggle: !0
}, jT = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Lr extends hn {
  constructor(t, n) {
    super(t, n), this._isTransitioning = !1, this._triggerArray = [];
    const s = Ee.find(vc);
    for (const o of s) {
      const r = Ee.getSelectorFromElement(o), i = Ee.find(r).filter((a) => a === this._element);
      r !== null && i.length && this._triggerArray.push(o);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return $T;
  }
  static get DefaultType() {
    return jT;
  }
  static get NAME() {
    return OT;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(BT).filter((a) => a !== this._element).map((a) => Lr.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || G.trigger(this._element, DT).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const s = this._getDimension();
    this._element.classList.remove(_o), this._element.classList.add(fi), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, this._element.classList.remove(fi), this._element.classList.add(_o, pl), this._element.style[s] = "", G.trigger(this._element, kT);
    }, i = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[s] = `${this._element[i]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || G.trigger(this._element, xT).defaultPrevented)
      return;
    const n = this._getDimension();
    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, Jr(this._element), this._element.classList.add(fi), this._element.classList.remove(_o, pl);
    for (const o of this._triggerArray) {
      const r = Ee.getElementFromSelector(o);
      r && !this._isShown(r) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      this._isTransitioning = !1, this._element.classList.remove(fi), this._element.classList.add(_o), G.trigger(this._element, RT);
    };
    this._element.style[n] = "", this._queueCallback(s, this._element, !0);
  }
  // Private
  _isShown(t = this._element) {
    return t.classList.contains(pl);
  }
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = hs(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(VT) ? LT : FT;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(vc);
    for (const n of t) {
      const s = Ee.getElementFromSelector(n);
      s && this._addAriaAndCollapsedClass([n], this._isShown(s));
    }
  }
  _getFirstLevelChildren(t) {
    const n = Ee.find(PT, this._config.parent);
    return Ee.find(t, this._config.parent).filter((s) => !n.includes(s));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const s of t)
        s.classList.toggle(MT, !n), s.setAttribute("aria-expanded", n);
  }
  // Static
  static jQueryInterface(t) {
    const n = {};
    return typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
      const s = Lr.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t]();
      }
    });
  }
}
G.on(document, IT, vc, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  for (const t of Ee.getMultipleElementsFromSelector(this))
    Lr.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
Jt(Lr);
const _p = "dropdown", UT = "bs.dropdown", eo = `.${UT}`, _u = ".data-api", HT = "Escape", yp = "Tab", WT = "ArrowUp", bp = "ArrowDown", KT = 2, zT = `hide${eo}`, qT = `hidden${eo}`, YT = `show${eo}`, XT = `shown${eo}`, Xv = `click${eo}${_u}`, Gv = `keydown${eo}${_u}`, GT = `keyup${eo}${_u}`, mo = "show", QT = "dropup", JT = "dropend", ZT = "dropstart", eN = "dropup-center", tN = "dropdown-center", Rs = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', nN = `${Rs}.${mo}`, Bi = ".dropdown-menu", sN = ".navbar", oN = ".navbar-nav", rN = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", iN = Gt() ? "top-end" : "top-start", aN = Gt() ? "top-start" : "top-end", lN = Gt() ? "bottom-end" : "bottom-start", cN = Gt() ? "bottom-start" : "bottom-end", uN = Gt() ? "left-start" : "right-start", dN = Gt() ? "right-start" : "left-start", fN = "top", pN = "bottom", hN = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, mN = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class Nn extends hn {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = Ee.next(this._element, Bi)[0] || Ee.prev(this._element, Bi)[0] || Ee.findOne(Bi, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return hN;
  }
  static get DefaultType() {
    return mN;
  }
  static get NAME() {
    return _p;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (ms(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!G.trigger(this._element, YT, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(oN))
        for (const s of [].concat(...document.body.children))
          G.on(s, "mouseover", ra);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(mo), this._element.classList.add(mo), G.trigger(this._element, XT, t);
    }
  }
  hide() {
    if (ms(this._element) || !this._isShown())
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
    if (!G.trigger(this._element, zT, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          G.off(s, "mouseover", ra);
      this._popper && this._popper.destroy(), this._menu.classList.remove(mo), this._element.classList.remove(mo), this._element.setAttribute("aria-expanded", "false"), Hn.removeDataAttribute(this._menu, "popper"), G.trigger(this._element, qT, t), this._element.focus();
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !Un(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${_p.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof Rv > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : Un(this._config.reference) ? t = hs(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = mu(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(mo);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(JT))
      return uN;
    if (t.classList.contains(ZT))
      return dN;
    if (t.classList.contains(eN))
      return fN;
    if (t.classList.contains(tN))
      return pN;
    const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(QT) ? n ? aN : iN : n ? cN : lN;
  }
  _detectNavbar() {
    return this._element.closest(sN) !== null;
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
      ...xt(this._config.popperConfig, [void 0, t])
    };
  }
  _selectMenuItem({
    key: t,
    target: n
  }) {
    const s = Ee.find(rN, this._menu).filter((o) => zo(o));
    s.length && gu(s, n, t === bp, !s.includes(n)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Nn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === KT || t.type === "keyup" && t.key !== yp)
      return;
    const n = Ee.find(nN);
    for (const s of n) {
      const o = Nn.getInstance(s);
      if (!o || o._config.autoClose === !1)
        continue;
      const r = t.composedPath(), i = r.includes(o._menu);
      if (r.includes(o._element) || o._config.autoClose === "inside" && !i || o._config.autoClose === "outside" && i || o._menu.contains(t.target) && (t.type === "keyup" && t.key === yp || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const a = {
        relatedTarget: o._element
      };
      t.type === "click" && (a.clickEvent = t), o._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName), s = t.key === HT, o = [WT, bp].includes(t.key);
    if (!o && !s || n && !s)
      return;
    t.preventDefault();
    const r = this.matches(Rs) ? this : Ee.prev(this, Rs)[0] || Ee.next(this, Rs)[0] || Ee.findOne(Rs, t.delegateTarget.parentNode), i = Nn.getOrCreateInstance(r);
    if (o) {
      t.stopPropagation(), i.show(), i._selectMenuItem(t);
      return;
    }
    i._isShown() && (t.stopPropagation(), i.hide(), r.focus());
  }
}
G.on(document, Gv, Rs, Nn.dataApiKeydownHandler);
G.on(document, Gv, Bi, Nn.dataApiKeydownHandler);
G.on(document, Xv, Nn.clearMenus);
G.on(document, GT, Nn.clearMenus);
G.on(document, Xv, Rs, function(e) {
  e.preventDefault(), Nn.getOrCreateInstance(this).toggle();
});
Jt(Nn);
const Qv = "backdrop", gN = "fade", Ep = "show", wp = `mousedown.bs.${Qv}`, vN = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, _N = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Jv extends Zr {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return vN;
  }
  static get DefaultType() {
    return _N;
  }
  static get NAME() {
    return Qv;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      xt(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Jr(n), n.classList.add(Ep), this._emulateAnimation(() => {
      xt(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      xt(t);
      return;
    }
    this._getElement().classList.remove(Ep), this._emulateAnimation(() => {
      this.dispose(), xt(t);
    });
  }
  dispose() {
    this._isAppended && (G.off(this._element, wp), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(gN), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = hs(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), G.on(t, wp, () => {
      xt(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Lv(t, this._getElement(), this._config.isAnimated);
  }
}
const yN = "focustrap", bN = "bs.focustrap", aa = `.${bN}`, EN = `focusin${aa}`, wN = `keydown.tab${aa}`, AN = "Tab", SN = "forward", Ap = "backward", CN = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, ON = {
  autofocus: "boolean",
  trapElement: "element"
};
class Zv extends Zr {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return CN;
  }
  static get DefaultType() {
    return ON;
  }
  static get NAME() {
    return yN;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), G.off(document, aa), G.on(document, EN, (t) => this._handleFocusin(t)), G.on(document, wN, (t) => this._handleKeydown(t)), this._isActive = !0);
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
    const s = Ee.focusableChildren(n);
    s.length === 0 ? n.focus() : this._lastTabNavDirection === Ap ? s[s.length - 1].focus() : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === AN && (this._lastTabNavDirection = t.shiftKey ? Ap : SN);
  }
}
const Sp = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Cp = ".sticky-top", pi = "padding-right", Op = "margin-right";
class _c {
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
    this._disableOverFlow(), this._setElementAttributes(this._element, pi, (n) => n + t), this._setElementAttributes(Sp, pi, (n) => n + t), this._setElementAttributes(Cp, Op, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, pi), this._resetElementAttributes(Sp, pi), this._resetElementAttributes(Cp, Op);
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
    for (const s of Ee.find(t, this._element))
      n(s);
  }
}
const TN = "modal", NN = "bs.modal", Qt = `.${NN}`, DN = ".data-api", kN = "Escape", xN = `hide${Qt}`, RN = `hidePrevented${Qt}`, e_ = `hidden${Qt}`, t_ = `show${Qt}`, IN = `shown${Qt}`, MN = `resize${Qt}`, PN = `click.dismiss${Qt}`, VN = `mousedown.dismiss${Qt}`, LN = `keydown.dismiss${Qt}`, FN = `click${Qt}${DN}`, Tp = "modal-open", BN = "fade", Np = "show", hl = "modal-static", $N = ".modal.show", jN = ".modal-dialog", UN = ".modal-body", HN = '[data-bs-toggle="modal"]', WN = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, KN = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Zs extends hn {
  constructor(t, n) {
    super(t, n), this._dialog = Ee.findOne(jN, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new _c(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return WN;
  }
  static get DefaultType() {
    return KN;
  }
  static get NAME() {
    return TN;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || G.trigger(this._element, t_, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Tp), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || G.trigger(this._element, xN).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Np), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    G.off(window, Qt), G.off(this._dialog, Qt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Jv({
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
    const n = Ee.findOne(UN, this._dialog);
    n && (n.scrollTop = 0), Jr(this._element), this._element.classList.add(Np);
    const s = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, G.trigger(this._element, IN, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    G.on(this._element, LN, (t) => {
      if (t.key === kN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), G.on(window, MN, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), G.on(this._element, VN, (t) => {
      G.one(this._element, PN, (n) => {
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
      document.body.classList.remove(Tp), this._resetAdjustments(), this._scrollBar.reset(), G.trigger(this._element, e_);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(BN);
  }
  _triggerBackdropTransition() {
    if (G.trigger(this._element, RN).defaultPrevented)
      return;
    const n = this._element.scrollHeight > document.documentElement.clientHeight, s = this._element.style.overflowY;
    s === "hidden" || this._element.classList.contains(hl) || (n || (this._element.style.overflowY = "hidden"), this._element.classList.add(hl), this._queueCallback(() => {
      this._element.classList.remove(hl), this._queueCallback(() => {
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
      const s = Zs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t](n);
      }
    });
  }
}
G.on(document, FN, HN, function(e) {
  const t = Ee.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), G.one(t, t_, (o) => {
    o.defaultPrevented || G.one(t, e_, () => {
      zo(this) && this.focus();
    });
  });
  const n = Ee.findOne($N);
  n && Zs.getInstance(n).hide(), Zs.getOrCreateInstance(t).toggle(this);
});
Pa(Zs);
Jt(Zs);
const zN = "offcanvas", qN = "bs.offcanvas", Gn = `.${qN}`, n_ = ".data-api", YN = `load${Gn}${n_}`, XN = "Escape", Dp = "show", kp = "showing", xp = "hiding", GN = "offcanvas-backdrop", s_ = ".offcanvas.show", QN = `show${Gn}`, JN = `shown${Gn}`, ZN = `hide${Gn}`, Rp = `hidePrevented${Gn}`, o_ = `hidden${Gn}`, eD = `resize${Gn}`, tD = `click${Gn}${n_}`, nD = `keydown.dismiss${Gn}`, sD = '[data-bs-toggle="offcanvas"]', oD = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, rD = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class gs extends hn {
  constructor(t, n) {
    super(t, n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return oD;
  }
  static get DefaultType() {
    return rD;
  }
  static get NAME() {
    return zN;
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
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new _c().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(kp);
    const s = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Dp), this._element.classList.remove(kp), G.trigger(this._element, JN, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || G.trigger(this._element, ZN).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(xp), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(Dp, xp), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new _c().reset(), G.trigger(this._element, o_);
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
        G.trigger(this._element, Rp);
        return;
      }
      this.hide();
    }, n = !!this._config.backdrop;
    return new Jv({
      className: GN,
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
    G.on(this._element, nD, (t) => {
      if (t.key === XN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        G.trigger(this._element, Rp);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = gs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
G.on(document, tD, sD, function(e) {
  const t = Ee.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), ms(this))
    return;
  G.one(t, o_, () => {
    zo(this) && this.focus();
  });
  const n = Ee.findOne(s_);
  n && n !== t && gs.getInstance(n).hide(), gs.getOrCreateInstance(t).toggle(this);
});
G.on(window, YN, () => {
  for (const e of Ee.find(s_))
    gs.getOrCreateInstance(e).show();
});
G.on(window, eD, () => {
  for (const e of Ee.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && gs.getOrCreateInstance(e).hide();
});
Pa(gs);
Jt(gs);
const iD = /^aria-[\w-]*$/i, r_ = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", iD],
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
}, aD = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), lD = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, cD = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? aD.has(n) ? !!lD.test(e.nodeValue) : !0 : t.filter((s) => s instanceof RegExp).some((s) => s.test(n));
};
function uD(e, t, n) {
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
    const c = [].concat(...i.attributes), f = [].concat(t["*"] || [], t[a] || []);
    for (const u of c)
      cD(u, f) || i.removeAttribute(u.nodeName);
  }
  return o.body.innerHTML;
}
const dD = "TemplateFactory", fD = {
  allowList: r_,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, pD = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, hD = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class mD extends Zr {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return fD;
  }
  static get DefaultType() {
    return pD;
  }
  static get NAME() {
    return dD;
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
      }, hD);
  }
  _setContent(t, n, s) {
    const o = Ee.findOne(s, t);
    if (o) {
      if (n = this._resolvePossibleFunction(n), !n) {
        o.remove();
        return;
      }
      if (Un(n)) {
        this._putElementInTemplate(hs(n), o);
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
    return this._config.sanitize ? uD(t, this._config.allowList, this._config.sanitizeFn) : t;
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
const gD = "tooltip", vD = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ml = "fade", _D = "modal", hi = "show", yD = ".tooltip-inner", Ip = `.${_D}`, Mp = "hide.bs.modal", or = "hover", gl = "focus", vl = "click", bD = "manual", ED = "hide", wD = "hidden", AD = "show", SD = "shown", CD = "inserted", OD = "click", TD = "focusin", ND = "focusout", DD = "mouseenter", kD = "mouseleave", xD = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Gt() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Gt() ? "right" : "left"
}, RD = {
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
}, ID = {
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
class to extends hn {
  constructor(t, n) {
    if (typeof Rv > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
    super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return RD;
  }
  static get DefaultType() {
    return ID;
  }
  static get NAME() {
    return gD;
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
    clearTimeout(this._timeout), G.off(this._element.closest(Ip), Mp, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = G.trigger(this._element, this.constructor.eventName(AD)), s = (Pv(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !s)
      return;
    this._disposePopper();
    const o = this._getTipElement();
    this._element.setAttribute("aria-describedby", o.getAttribute("id"));
    const {
      container: r
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(o), G.trigger(this._element, this.constructor.eventName(CD))), this._popper = this._createPopper(o), o.classList.add(hi), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        G.on(a, "mouseover", ra);
    const i = () => {
      G.trigger(this._element, this.constructor.eventName(SD)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(i, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || G.trigger(this._element, this.constructor.eventName(ED)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(hi), "ontouchstart" in document.documentElement)
      for (const o of [].concat(...document.body.children))
        G.off(o, "mouseover", ra);
    this._activeTrigger[vl] = !1, this._activeTrigger[gl] = !1, this._activeTrigger[or] = !1, this._isHovered = null;
    const s = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), G.trigger(this._element, this.constructor.eventName(wD)));
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
    n.classList.remove(ml, hi), n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const s = bO(this.constructor.NAME).toString();
    return n.setAttribute("id", s), this._isAnimated() && n.classList.add(ml), n;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new mD({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [yD]: this._getTitle()
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
    return this._config.animation || this.tip && this.tip.classList.contains(ml);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(hi);
  }
  _createPopper(t) {
    const n = xt(this._config.placement, [this, t, this._element]), s = xD[n.toUpperCase()];
    return mu(this._element, t, this._getPopperConfig(s));
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
        G.on(this._element, this.constructor.eventName(OD), this._config.selector, (s) => {
          const o = this._initializeOnDelegatedTarget(s);
          o._activeTrigger[vl] = !(o._isShown() && o._activeTrigger[vl]), o.toggle();
        });
      else if (n !== bD) {
        const s = n === or ? this.constructor.eventName(DD) : this.constructor.eventName(TD), o = n === or ? this.constructor.eventName(kD) : this.constructor.eventName(ND);
        G.on(this._element, s, this._config.selector, (r) => {
          const i = this._initializeOnDelegatedTarget(r);
          i._activeTrigger[r.type === "focusin" ? gl : or] = !0, i._enter();
        }), G.on(this._element, o, this._config.selector, (r) => {
          const i = this._initializeOnDelegatedTarget(r);
          i._activeTrigger[r.type === "focusout" ? gl : or] = i._element.contains(r.relatedTarget), i._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, G.on(this._element.closest(Ip), Mp, this._hideModalHandler);
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
      vD.has(s) && delete n[s];
    return t = {
      ...n,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : hs(t.container), typeof t.delay == "number" && (t.delay = {
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
      const n = to.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Jt(to);
const MD = "popover", PD = ".popover-header", VD = ".popover-body", LD = {
  ...to.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, FD = {
  ...to.DefaultType,
  content: "(null|string|element|function)"
};
class yu extends to {
  // Getters
  static get Default() {
    return LD;
  }
  static get DefaultType() {
    return FD;
  }
  static get NAME() {
    return MD;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [PD]: this._getTitle(),
      [VD]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = yu.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Jt(yu);
const BD = "scrollspy", $D = "bs.scrollspy", bu = `.${$D}`, jD = ".data-api", UD = `activate${bu}`, Pp = `click${bu}`, HD = `load${bu}${jD}`, WD = "dropdown-item", co = "active", KD = '[data-bs-spy="scroll"]', _l = "[href]", zD = ".nav, .list-group", Vp = ".nav-link", qD = ".nav-item", YD = ".list-group-item", XD = `${Vp}, ${qD} > ${Vp}, ${YD}`, GD = ".dropdown", QD = ".dropdown-toggle", JD = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, ZD = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class Fa extends hn {
  constructor(t, n) {
    super(t, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return JD;
  }
  static get DefaultType() {
    return ZD;
  }
  static get NAME() {
    return BD;
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
    return t.target = hs(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (G.off(this._config.target, Pp), G.on(this._config.target, Pp, _l, (t) => {
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
    const t = Ee.find(_l, this._config.target);
    for (const n of t) {
      if (!n.hash || ms(n))
        continue;
      const s = Ee.findOne(decodeURI(n.hash), this._element);
      zo(s) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, s));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(co), this._activateParents(t), G.trigger(this._element, UD, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(WD)) {
      Ee.findOne(QD, t.closest(GD)).classList.add(co);
      return;
    }
    for (const n of Ee.parents(t, zD))
      for (const s of Ee.prev(n, XD))
        s.classList.add(co);
  }
  _clearActiveClass(t) {
    t.classList.remove(co);
    const n = Ee.find(`${_l}.${co}`, t);
    for (const s of n)
      s.classList.remove(co);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Fa.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
G.on(window, HD, () => {
  for (const e of Ee.find(KD))
    Fa.getOrCreateInstance(e);
});
Jt(Fa);
const ek = "tab", tk = "bs.tab", no = `.${tk}`, nk = `hide${no}`, sk = `hidden${no}`, ok = `show${no}`, rk = `shown${no}`, ik = `click${no}`, ak = `keydown${no}`, lk = `load${no}`, ck = "ArrowLeft", Lp = "ArrowRight", uk = "ArrowUp", Fp = "ArrowDown", yl = "Home", Bp = "End", Is = "active", $p = "fade", bl = "show", dk = "dropdown", i_ = ".dropdown-toggle", fk = ".dropdown-menu", El = `:not(${i_})`, pk = '.list-group, .nav, [role="tablist"]', hk = ".nav-item, .list-group-item", mk = `.nav-link${El}, .list-group-item${El}, [role="tab"]${El}`, a_ = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', wl = `${mk}, ${a_}`, gk = `.${Is}[data-bs-toggle="tab"], .${Is}[data-bs-toggle="pill"], .${Is}[data-bs-toggle="list"]`;
class Po extends hn {
  constructor(t) {
    super(t), this._parent = this._element.closest(pk), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), G.on(this._element, ak, (n) => this._keydown(n)));
  }
  // Getters
  static get NAME() {
    return ek;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), s = n ? G.trigger(n, nk, {
      relatedTarget: t
    }) : null;
    G.trigger(t, ok, {
      relatedTarget: n
    }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(n, t), this._activate(t, n));
  }
  // Private
  _activate(t, n) {
    if (!t)
      return;
    t.classList.add(Is), this._activate(Ee.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(bl);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), G.trigger(t, rk, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains($p));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(Is), t.blur(), this._deactivate(Ee.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(bl);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), G.trigger(t, sk, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains($p));
  }
  _keydown(t) {
    if (![ck, Lp, uk, Fp, yl, Bp].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((o) => !ms(o));
    let s;
    if ([yl, Bp].includes(t.key))
      s = n[t.key === yl ? 0 : n.length - 1];
    else {
      const o = [Lp, Fp].includes(t.key);
      s = gu(n, t.target, o, !0);
    }
    s && (s.focus({
      preventScroll: !0
    }), Po.getOrCreateInstance(s).show());
  }
  _getChildren() {
    return Ee.find(wl, this._parent);
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
    const n = Ee.getElementFromSelector(t);
    n && (this._setAttributeIfNotExists(n, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, n) {
    const s = this._getOuterElement(t);
    if (!s.classList.contains(dk))
      return;
    const o = (r, i) => {
      const a = Ee.findOne(r, s);
      a && a.classList.toggle(i, n);
    };
    o(i_, Is), o(fk, bl), s.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, s) {
    t.hasAttribute(n) || t.setAttribute(n, s);
  }
  _elemIsActive(t) {
    return t.classList.contains(Is);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(wl) ? t : Ee.findOne(wl, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(hk) || t;
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
G.on(document, ik, a_, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !ms(this) && Po.getOrCreateInstance(this).show();
});
G.on(window, lk, () => {
  for (const e of Ee.find(gk))
    Po.getOrCreateInstance(e);
});
Jt(Po);
const vk = "toast", _k = "bs.toast", bs = `.${_k}`, yk = `mouseover${bs}`, bk = `mouseout${bs}`, Ek = `focusin${bs}`, wk = `focusout${bs}`, Ak = `hide${bs}`, Sk = `hidden${bs}`, Ck = `show${bs}`, Ok = `shown${bs}`, Tk = "fade", jp = "hide", mi = "show", gi = "showing", Nk = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Dk = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class ni extends hn {
  constructor(t, n) {
    super(t, n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return Dk;
  }
  static get DefaultType() {
    return Nk;
  }
  static get NAME() {
    return vk;
  }
  // Public
  show() {
    if (G.trigger(this._element, Ck).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(Tk);
    const n = () => {
      this._element.classList.remove(gi), G.trigger(this._element, Ok), this._maybeScheduleHide();
    };
    this._element.classList.remove(jp), Jr(this._element), this._element.classList.add(mi, gi), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || G.trigger(this._element, Ak).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(jp), this._element.classList.remove(gi, mi), G.trigger(this._element, Sk);
    };
    this._element.classList.add(gi), this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(mi), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(mi);
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
    G.on(this._element, yk, (t) => this._onInteraction(t, !0)), G.on(this._element, bk, (t) => this._onInteraction(t, !1)), G.on(this._element, Ek, (t) => this._onInteraction(t, !0)), G.on(this._element, wk, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ni.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Pa(ni);
Jt(ni);
var kk = Object.defineProperty, xk = (e, t, n) => t in e ? kk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, sn = (e, t, n) => xk(e, typeof t != "symbol" ? t + "" : t, n);
const Rk = { class: "toast-header" }, Ik = ["textContent"], Mk = ["textContent"], Pk = { class: "toast-body" }, Vk = ["textContent"], Lk = /* @__PURE__ */ Te({
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
    const s = e, o = n, { visible: r, animation: i, autohide: a, delay: c } = un(s), f = H(), u = H();
    Rt(r, (N) => {
      y();
    }, { immediate: !0 });
    function d() {
      f.value.show();
    }
    function p() {
      f.value.hide();
    }
    function h() {
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
    function y() {
      f.value && (r.value === !0 ? d() : p());
    }
    function b() {
      o("hide", f.value);
    }
    function _() {
      o("hidden", f.value);
    }
    function x() {
      o("show", f.value);
    }
    async function k() {
      o("shown", f.value);
    }
    const O = { show: d, hide: p, dispose: h, isShown: m, getOrCreateInstance: g, getInstance: v };
    return t({ ...O }), Tt(() => {
      u.value.addEventListener("hide.bs.toast", b), u.value.addEventListener("hidden.bs.toast", _), u.value.addEventListener("show.bs.toast", x), u.value.addEventListener("shown.bs.toast", k), f.value = new ni(u.value, {
        animation: i.value,
        autohide: a.value,
        delay: c.value
      }), y();
    }), (N, I) => (T(), R("div", {
      ref_key: "toastRef",
      ref: u,
      class: ce(["toast", [N.variant ? `text-bg-${N.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      De(N.$slots, "header", it(ot({ ...O })), () => [
        l("div", Rk, [
          De(N.$slots, "title", it(ot({ ...O })), () => [
            l("strong", {
              class: "me-auto",
              textContent: P(N.title)
            }, null, 8, Ik)
          ], !0),
          De(N.$slots, "subtitle", it(ot({ ...O })), () => [
            l("small", {
              textContent: P(N.subtitle)
            }, null, 8, Mk)
          ], !0),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: p
          })
        ])
      ], !0),
      De(N.$slots, "body", it(ot({ ...O })), () => [
        l("div", Pk, [
          De(N.$slots, "default", it(ot({ ...O })), () => [
            l("span", {
              textContent: P(N.body)
            }, null, 8, Vk)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), In = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, l_ = /* @__PURE__ */ In(Lk, [["__scopeId", "data-v-c0cdbae8"]]);
function Fk() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16);
  });
}
const Bk = { id: "toast-wrapper" };
let Up;
const $k = /* @__PURE__ */ Te({
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
    }, s = H(/* @__PURE__ */ new Map());
    Up = (r, i = "top right") => {
      const a = Fk(), c = { ...n, ...r, id: a };
      let f = s.value.get(i);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(c), s.value.set(i, f);
    };
    function o(r, i) {
      const a = s.value.get(r);
      a?.delete(i);
    }
    return t({ toast: Up }), (r, i) => (T(), et(Hr, { to: "body" }, [
      l("div", Bk, [
        (T(!0), R(Se, null, Je(s.value, ([a, c]) => (T(), R("div", {
          key: a,
          class: ce(["toast-group", `${a}`])
        }, [
          (T(!0), R(Se, null, Je(c, (f, u) => (T(), et(l_, vs({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (d) => o(a, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), jk = /* @__PURE__ */ In($k, [["__scopeId", "data-v-786d1c50"]]), c_ = () => {
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
var Rn = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(Rn || {});
const Vo = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(Rn).includes(n) || n == "" ? "" : `${t}${n}`;
}, Uk = { class: "modal-content" }, Hk = { class: "modal-header" }, Wk = ["innerHTML"], Kk = { class: "modal-body" }, zk = ["innerHTML"], qk = { class: "modal-footer" }, Yk = ["innerHTML"], Xk = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const Gk = /* @__PURE__ */ Te({
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
    size: { default: Rn.STANDARD },
    btnSize: { default: Rn.SMALL },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["onShown", "onHidden"],
  setup(e, { expose: t, emit: n }) {
    const s = e, {
      backdrop: o,
      keyboard: r,
      focus: i,
      disableOutsideClick: a,
      size: c,
      btnSize: f
    } = un(s), u = n, d = j(() => Vo(c.value, "modal-")), p = j(() => Vo(f.value, "btn-")), h = H();
    let m;
    const g = Yn(), v = () => document.querySelectorAll(".modal.show").length, y = () => typeof window < "u" && window._managedModals ? window._managedModals : [], b = 1055, _ = H(b), x = () => {
      const re = v();
      _.value = b + re;
    };
    let k;
    const O = c_();
    function N() {
      return new Promise((re, K) => {
        if (!h.value) return;
        O.removeStickyElements(), x(), h.value.classList.add("managed-modal");
        const le = y(), be = le.length + 1, Ze = {
          element: h.value,
          priority: be,
          instance: g
        };
        le.push(Ze), h.value.addEventListener("shown.bs.modal", () => {
          w();
        }, { once: !0 }), m?.show(), k = re, u("onShown", m);
      });
    }
    function I(re = !0) {
      if (!h.value) return;
      const K = y(), le = K.findIndex((be) => be.element === h.value);
      le > -1 && K.splice(le, 1), h.value.addEventListener("hidden.bs.modal", () => {
        h.value && (h.value.style.display = ""), w();
      }, { once: !0 }), m?.hide(), typeof k == "function" && k(re), u("onHidden", m), O.restoreStickyElements();
    }
    function C() {
      m?.toggle();
    }
    const w = () => {
      const re = y();
      if (re.length === 0) return;
      re.sort((le, be) => le.priority - be.priority);
      const K = re[re.length - 1];
      re.forEach((le) => {
        le.element !== K.element ? le.element.style.opacity = "0" : le.element.style.opacity = "1";
      });
    };
    Tt(() => {
      m = new Zs(h.value, {
        backdrop: o?.value,
        keyboard: r.value,
        focus: i.value
      }), h.value.classList.add("managed-modal"), ma(() => {
        s?.visible === !0 ? m?.show() : m?.hide();
      });
    });
    function D(re) {
      o?.value !== "static" && I(!1);
    }
    function A() {
      I(!1);
    }
    function F() {
      I(!1);
    }
    function de() {
      I(!0);
    }
    t({
      modal: m,
      show: N,
      hide: I,
      toggle: C,
      onHeaderCloseClicked: A,
      onCancelClicked: F,
      onOkCLicked: de
    });
    const Y = { show: N, hide: I, toggle: C, modal: m };
    return (re, K) => (T(), R("div", vs({
      ref_key: "modalElement",
      ref: h,
      class: "modal fade",
      tabindex: "-1"
    }, { ...re.$attrs }, {
      onClick: Sm(D, ["self"]),
      style: { zIndex: _.value }
    }), [
      l("div", {
        class: ce(["modal-dialog", d.value])
      }, [
        l("div", Uk, [
          De(re.$slots, "header", it(ot({ ...Y })), () => [
            l("div", Hk, [
              De(re.$slots, "title", it(ot({ ...Y })), () => [
                l("h5", {
                  class: "modal-title",
                  innerHTML: re.title
                }, null, 8, Wk)
              ], !0),
              De(re.$slots, "header-close-button", it(ot({ ...Y })), () => [
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: A
                })
              ], !0)
            ])
          ], !0),
          l("div", Kk, [
            De(re.$slots, "default", it(ot({ ...Y })), () => [
              l("span", { innerHTML: re.body }, null, 8, zk)
            ], !0)
          ]),
          l("div", qk, [
            De(re.$slots, "footer", it(ot({ ...Y })), () => [
              re.okOnly ? ye("", !0) : (T(), R("button", {
                key: 0,
                type: "button",
                class: ce(["btn btn-secondary", p.value]),
                onClick: F
              }, [
                De(re.$slots, "button-cancel", it(ot({ ...Y })), () => [
                  l("span", { innerHTML: re.textCancel }, null, 8, Yk)
                ], !0)
              ], 2)),
              l("button", {
                type: "button",
                class: ce(["btn btn-primary", p.value]),
                onClick: de
              }, [
                De(re.$slots, "button-ok", it(ot({ ...Y })), () => [
                  l("span", { innerHTML: re.textOk }, null, 8, Xk)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), u_ = /* @__PURE__ */ In(Gk, [["__scopeId", "data-v-b8ba4eaa"]]), Qk = /* @__PURE__ */ Te({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = H(void 0), s = H({});
    function o(i = {}) {
      var a;
      return i.okOnly = !1, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: o, alert: r }), (i, a) => (T(), et(Hr, { to: "body" }, [
      ue(u_, vs({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), Jk = {
  "data-header": "",
  class: "border-bottom"
}, Zk = { class: "d-flex gap-2 p-2" }, ex = { class: "p-2" }, tx = {
  "data-footer": "",
  class: "border-top p-2"
}, nx = { class: "buttons" }, sx = /* @__PURE__ */ Te({
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
    size: { default: Rn.STANDARD },
    btnSize: { default: Rn.SMALL },
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, { backdrop: s, disableOutsideClick: o, modal: r, size: i, btnSize: a } = un(n), c = () => document.querySelectorAll("dialog[open]").length, f = 1056, u = H(f), d = H(!1), p = H(!1), h = H(!1), m = H(), g = H(!1), v = j(() => Vo(i.value, "modal-")), y = j(() => Vo(a.value, "btn-")), b = j(() => ({
      opening: d.value,
      closing: p.value,
      "no-backdrop": s.value === !1,
      static: g.value
    }));
    let _ = null;
    const x = () => {
      const A = c();
      u.value = f + A;
    }, k = c_(), O = async () => (x(), k.removeStickyElements(), d.value = !0, m.value.addEventListener(
      "animationend",
      () => {
        d.value = !1, h.value = !0;
      },
      { once: !0 }
    ), r.value === !0 ? m.value.showModal() : m.value.show(), new Promise((A, F) => {
      _ = A;
    })), N = async (A = !1) => {
      p.value = !0, m.value.addEventListener(
        "animationend",
        () => {
          m.value.close(), p.value = !1, h.value = !1, typeof _ == "function" && _(A), _ = null, k.restoreStickyElements();
        },
        { once: !0 }
      );
    }, I = async () => {
      h.value === !0 ? N() : O();
    }, C = () => {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 200);
    }, w = () => {
      if (s.value === "static" || o.value === !0) {
        C();
        return;
      }
      N(!1);
    };
    if (r.value === !0) {
      let A = function(de) {
        if (s.value === "static" || o.value === !0) {
          C();
          return;
        }
        de.target === m.value && N(!1);
      };
      const F = new AbortController();
      Tt(() => {
        document.addEventListener("click", (de) => {
          A(de);
        }, { signal: F.signal });
      }), Kr(() => {
        F.abort();
      });
    }
    const D = { show: O, hide: N, toggle: I, dialog: m };
    return t({
      show: O,
      hide: N,
      toggle: I
    }), (A, F) => (T(), R("div", {
      class: "dialog-wrapper",
      style: Vt({ zIndex: u.value })
    }, [
      l("div", {
        class: "backdrop",
        onClick: w
      }),
      l("dialog", {
        ref_key: "dialog",
        ref: m,
        class: ce(b.value)
      }, [
        l("div", {
          class: ce(["content", v.value])
        }, [
          De(A.$slots, "header", it(ot({ ...D })), () => [
            l("div", Jk, [
              l("div", Zk, [
                De(A.$slots, "title", it(ot({ ...D })), () => [
                  U(P(A.title), 1)
                ], !0),
                De(A.$slots, "header-close-button", {}, () => [
                  l("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: F[0] || (F[0] = (de) => N(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          l("div", ex, [
            De(A.$slots, "default", it(ot({ ...D })), () => [
              U(P(A.body), 1)
            ], !0)
          ]),
          De(A.$slots, "footer", it(ot({ ...D })), () => [
            l("div", tx, [
              l("div", nx, [
                A.okOnly ? ye("", !0) : (T(), R("button", {
                  key: 0,
                  type: "button",
                  class: ce(["btn btn-secondary", y.value]),
                  onClick: F[1] || (F[1] = (de) => N(!1))
                }, [
                  De(A.$slots, "textCancel", it(ot({ ...D })), () => [
                    U(P(A.textCancel), 1)
                  ], !0)
                ], 2)),
                l("button", {
                  type: "button",
                  class: ce(["btn btn-primary", y.value]),
                  onClick: F[2] || (F[2] = (de) => N(!0))
                }, [
                  De(A.$slots, "textOk", it(ot({ ...D })), () => [
                    U(P(A.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), d_ = /* @__PURE__ */ In(sx, [["__scopeId", "data-v-0990c791"]]), ox = /* @__PURE__ */ Te({
  __name: "DialogManager",
  setup(e, { expose: t }) {
    const n = H(void 0), s = H({});
    function o(i = {}) {
      var a;
      return i.okOnly = !1, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: o, alert: r }), (i, a) => (T(), et(Hr, { to: "body" }, [
      ue(d_, vs({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), rx = { "data-first": "" }, ix = ["disabled", "innerHTML"], ax = { "data-prev": "" }, lx = ["disabled", "innerHTML"], cx = { key: 0 }, ux = ["innerHTML"], dx = ["onClick"], fx = { "data-next": "" }, px = ["disabled", "innerHTML"], hx = { "data-last": "" }, mx = ["disabled", "innerHTML"], gx = /* @__PURE__ */ Te({
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
    size: { default: Rn.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    function n(_, x = 0) {
      return [...Array(_).keys()].map((k) => k + x);
    }
    const s = t, o = e, { modelValue: r, maxVisibleButtons: i, hideEllipsis: a } = un(o), c = Math.floor(i.value / 2), f = j(() => {
      let _ = i.value, x = r.value <= c ? 1 : r.value - c;
      return r.value >= p.value - c && (x = p.value - _ + 1), x < 1 && (x = 1), p.value < _ && (_ = p.value), n(_, x);
    }), u = j(() => r.value <= 1), d = j(() => r.value >= p.value), p = j(() => {
      const { perPage: _, totalItems: x } = o;
      return Math.ceil(x / _);
    });
    ma(() => {
      p.value > 0 && r.value > p.value && s("update:modelValue", p.value);
    });
    function h(_) {
      const x = i.value - 1;
      return !(a.value === !0 || _ === 0 && r.value - c - 1 <= 0 || _ === x && r.value + c >= p.value || _ > 0 && _ < x);
    }
    function m(_) {
      _ < 1 && (_ = 1), _ > p.value && (_ = p.value), s("update:modelValue", _);
    }
    function g() {
      s("update:modelValue", 1);
    }
    function v() {
      s("update:modelValue", p.value);
    }
    function y() {
      let _ = r.value - 1;
      _ < 1 && (_ = 1), s("update:modelValue", _);
    }
    function b() {
      let _ = r.value + 1;
      _ > p.value && (_ = p.value), s("update:modelValue", _);
    }
    return (_, x) => (T(), R("ul", {
      class: ce(["pagination", _.size])
    }, [
      l("li", rx, [
        l("button", {
          class: "",
          disabled: u.value,
          innerHTML: _.firstText,
          onClick: g
        }, null, 8, ix)
      ]),
      l("li", ax, [
        l("button", {
          class: "",
          disabled: u.value,
          innerHTML: _.prevText,
          onClick: y
        }, null, 8, lx)
      ]),
      (T(!0), R(Se, null, Je(f.value, (k, O) => (T(), R(Se, null, [
        h(O) ? (T(), R("li", cx, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: _.ellipsisText
          }, null, 8, ux)
        ])) : (T(), R("li", {
          key: 1,
          "data-prev": "",
          class: ce({ active: _.modelValue === k })
        }, [
          l("button", {
            class: "",
            onClick: (N) => m(k)
          }, P(k), 9, dx)
        ], 2))
      ], 64))), 256)),
      l("li", fx, [
        l("button", {
          class: "",
          disabled: d.value,
          innerHTML: _.nextText,
          onClick: b
        }, null, 8, px)
      ]),
      l("li", hx, [
        l("button", {
          class: "",
          disabled: d.value,
          innerHTML: _.lastText,
          onClick: v
        }, null, 8, mx)
      ])
    ], 2));
  }
}), vx = /* @__PURE__ */ In(gx, [["__scopeId", "data-v-2bfd7085"]]), _x = { class: "d-inline" }, yx = { class: "fw-bold" }, bx = /* @__PURE__ */ Te({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = un(n), r = j({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => {
      const c = Qe("b-dropdown-item"), f = Qe("b-dropdown");
      return T(), et(f, vs({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: fe(() => [
          l("div", _x, [
            De(i.$slots, "default", { selected: r.value }, () => [
              a[0] || (a[0] = l("span", null, "Per page: ", -1)),
              l("span", yx, P(r.value), 1)
            ])
          ])
        ]),
        default: fe(() => [
          (T(!0), R(Se, null, Je(ne(o), (u, d) => (T(), et(c, {
            key: u,
            onClick: (p) => r.value = u,
            active: u === i.modelValue
          }, {
            default: fe(() => [
              U(P(u), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), Ex = ["value"], wx = /* @__PURE__ */ Te({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = un(n), r = j({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => nt((T(), R("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (c) => r.value = c)
    }, [
      (T(!0), R(Se, null, Je(ne(o), (c, f) => (T(), R("option", {
        key: c,
        value: c
      }, P(c), 9, Ex))), 128))
    ], 512)), [
      [cs, r.value]
    ]);
  }
});
var Ns = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(Ns || {});
class Ax {
  constructor(t, n = "ASC", s) {
    sn(this, "key"), sn(this, "direction"), sn(this, "sortFn"), this.key = t, this.direction = n, this.sortFn = s;
  }
}
const Hp = (e, t) => {
  const n = (a, c) => {
    let f = typeof a, u = typeof c;
    return f == "number" && f == u;
  }, s = (a, c) => a - c, o = (a, c) => (a = a ?? "", c = c ?? "", a.localeCompare(c)), r = (a, c) => n(a, c) ? s : o, i = [...t];
  return i.sort((a, c) => {
    let f = 0;
    for (let u of e) {
      let { key: d, direction: p, sortFn: h } = u, m = p === "ASC" ? 1 : -1, g = a[d], v = c[d];
      if (h = typeof h == "function" ? h : r(g, v), f = h(g, v, a, c, t, u, m) * m, f !== 0) return f;
    }
    return f;
  }), i;
}, Sx = ["onClick"], Cx = { class: "th-wrapper" }, Ox = {
  key: 0,
  "data-sort-indicator": ""
}, Tx = { class: "sort-index" }, Nx = { class: "sort-direction" }, Dx = ["onMouseover"], kx = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, xx = ["colspan"], Rx = ["innerHTML"];
class Al {
  constructor(t = "", n = "", s = !1, o) {
    sn(this, "key"), sn(this, "label"), sn(this, "sortable"), sn(this, "sortFn"), this.key = t, this.label = n, this.sortable = s, this.sortFn = o;
  }
}
const Ix = /* @__PURE__ */ Te({
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
      for (const y of g)
        v = v.concat(Object.keys(y));
      return v = v.filter((y, b) => v.indexOf(y) == b), v;
    }, s = t, o = e, r = H([]), { fields: i, items: a } = un(o), c = j(() => {
      if (o.externalSort || r.value.length == 0) return o.items;
      const g = [...o.items];
      return Hp(r.value, g);
    }), f = j(() => {
      let g = i.value, v = [];
      return g.length === 0 && (g = n([...a.value])), g.reduce((y, b, _) => {
        if (typeof b == "string")
          y.push(new Al(b, b));
        else if (b instanceof Al)
          y.push(b);
        else if (typeof b == "object") {
          const { key: x, label: k, sortable: O, sortFn: N } = b;
          y.push(new Al(x, k, O, N));
        }
        return y;
      }, v);
    });
    function u(g) {
      const v = r.value.findIndex((y) => y.key === g.key);
      return v < 0 ? "" : v + 1;
    }
    function d(g) {
      const v = r.value.findIndex((b) => b.key === g.key);
      if (v < 0) return "fas fa-sort";
      const y = r.value[v];
      return y.direction === Ns.ASC ? "fas fa-sort-up" : y.direction === Ns.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function p(g) {
      const { key: v } = g, y = r.value.findIndex((b) => b.key === v);
      if (y < 0) {
        const b = new Ax(v, Ns.ASC, g.sortFn);
        r.value.push(b);
      } else {
        const b = r.value[y], _ = b.direction;
        _ === Ns.ASC ? b.direction = Ns.DESC : _ === Ns.DESC && r.value.splice(y, 1);
      }
      s("sort", r.value, Hp);
    }
    function h(g, v, y, b) {
      s("onMouseOverCell", g, v, y, b);
    }
    let m = H(null);
    return Tt(() => {
      m.value = Yn();
    }), (g, v) => (T(), R("table", vs({ ...g.$attrs }, {
      class: { striped: g.striped, hover: g.hover }
    }), [
      l("thead", null, [
        (T(!0), R(Se, null, Je(f.value, (y) => (T(), R("th", {
          key: `thead-${y.key}`,
          class: ce({ sortable: y.sortable }),
          onClick: (b) => y.sortable && p(y)
        }, [
          l("span", Cx, [
            De(g.$slots, `head(${y.key})`, {
              field: y,
              data: ne(m),
              value: y.label
            }, () => [
              U(P(y.label), 1)
            ], !0),
            y.sortable ? (T(), R("span", Ox, [
              l("span", Tx, P(u(y)), 1),
              l("span", Nx, [
                l("i", {
                  class: ce(d(y))
                }, null, 2)
              ])
            ])) : ye("", !0)
          ])
        ], 10, Sx))), 128))
      ]),
      l("tbody", null, [
        (T(!0), R(Se, null, Je(c.value, (y, b) => (T(), R(Se, {
          key: `trow-${y?.id ?? b}`
        }, [
          De(g.$slots, "row", {
            item: y,
            index: b,
            colspan: f.value.length
          }, void 0, !0),
          l("tr", null, [
            (T(!0), R(Se, null, Je(f.value, (_) => (T(), R("td", {
              key: `tcell-${_.key + (y?.id ?? b)}`,
              class: ce({ [`tcell-${_?.key}`]: !0 }),
              onMouseover: (x) => h(x, y, b, _)
            }, [
              De(g.$slots, `cell(${_?.key})`, {
                data: ne(m),
                item: y,
                field: _,
                value: y[_?.key]
              }, () => [
                U(P(y[_?.key]), 1)
              ], !0)
            ], 42, Dx))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        De(g.$slots, "footer", { data: ne(m) }, void 0, !0)
      ]),
      g.showEmpty && c.value.length === 0 ? (T(), R("tr", kx, [
        l("td", {
          colspan: f.value.length
        }, [
          De(g.$slots, "empty", {
            items: c.value,
            data: ne(m),
            fields: f.value
          }, () => [
            l("span", { innerHTML: g.emptyText }, null, 8, Rx)
          ], !0)
        ], 8, xx)
      ])) : ye("", !0)
    ], 16));
  }
}), Mx = /* @__PURE__ */ In(Ix, [["__scopeId", "data-v-b1e9b5de"]]);
var f_ = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(f_ || {});
const Px = { class: "d-inline-block position-relative" }, Vx = ["disabled"], Wp = "data-prevent-close", Lx = /* @__PURE__ */ Te({
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
    size: { default: Rn.STANDARD },
    disabled: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: t, emit: n }) {
    const s = H(), o = e, r = H(), i = H(!1), a = H(o.variant), c = H(o.centered), f = H(o.dropup), u = H(o.dropend), d = H(o.dropstart), p = H(o.menuEnd), h = n, m = j(() => {
      const I = [];
      return a != null && a.value && I.push(`btn-${a.value}`), o.size && I.push(`btn-${o.size}`), I;
    }), g = j(() => {
      const I = [];
      return c != null && c.value && I.push("dropdown-center"), f != null && f.value && I.push("dropup"), d != null && d.value && I.push("dropstart"), !(d != null && d.value) && u != null && u.value && I.push("dropend"), I.length === 0 && I.push("dropdown"), I.unshift("btn-group"), I;
    }), v = j(() => {
      const I = [];
      return i.value && I.push("show"), p.value && I.push("dropdown-menu-end"), I;
    }), y = () => {
      if (!i.value) return;
      const I = r.value.getBoundingClientRect(), C = s.value.getBoundingClientRect(), w = window.innerHeight - I.bottom, D = I.top, A = window.innerWidth - I.right, F = I.left;
      f.value = w < C.height && D >= C.height, p.value = A < C.width && F >= C.width;
    };
    async function b() {
      i.value = !0, await Ks(), y();
    }
    function _() {
      i.value = !1;
    }
    function x(I) {
      i.value ? _() : b();
    }
    function k(I) {
      const { target: C } = I;
      C?.closest(`[${Wp}],[${Wp}=true]`) || _();
    }
    function O() {
      i.value && _();
    }
    Rt(i, (I, C) => {
      typeof C > "u" || I !== C && (h("toggle", { show: I }), I === !0 ? h("open", { show: I }) : h("close", { show: I }));
    }, { immediate: !0 });
    const N = {
      show: i,
      disabled: o.disabled,
      buttonClasses: m,
      onButtonClicked: x,
      onMenuClicked: k,
      onClickOutside: O,
      open: b,
      close: _
    };
    return t({
      ...N
    }), (I, C) => {
      const w = tb("click-outside");
      return T(), R("div", {
        ref_key: "dropDownRef",
        ref: r,
        class: ce([g.value, "dropdown-wrapper"])
      }, [
        nt((T(), R("div", Px, [
          De(I.$slots, "header", it(ot({ ...N })), () => [
            l("button", {
              class: ce(["btn dropdown-toggle", m.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: x,
              disabled: I.disabled
            }, [
              De(I.$slots, "button", it(ot({ ...N })), () => [
                U(P(I.text), 1)
              ], !0)
            ], 10, Vx)
          ], !0),
          l("ul", {
            ref_key: "dropDownMenuRef",
            ref: s,
            class: ce(["dropdown-menu", v.value]),
            onClick: k
          }, [
            De(I.$slots, "default", it(ot({ ...N })), void 0, !0)
          ], 2)
        ])), [
          [w, O]
        ])
      ], 2);
    };
  }
}), Fx = /* @__PURE__ */ In(Lx, [["__scopeId", "data-v-4910c394"]]), Bx = ["data-prevent-close"], $x = /* @__PURE__ */ Te({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = un(t);
    return (s, o) => (T(), R("li", {
      "data-prevent-close": ne(n) ? "" : null
    }, [
      l("span", {
        class: ce(["dropdown-item", { active: s.active }]),
        role: "button",
        tabindex: "0"
      }, [
        De(s.$slots, "default")
      ], 2)
    ], 8, Bx));
  }
}), jx = {}, Ux = { "data-prevent-close": "" }, Hx = { class: "dropdown-header" };
function Wx(e, t) {
  return T(), R("li", Ux, [
    l("h6", Hx, [
      De(e.$slots, "default")
    ])
  ]);
}
const Kx = /* @__PURE__ */ In(jx, [["render", Wx]]), zx = {};
function qx(e, t) {
  return T(), R("li", null, t[0] || (t[0] = [
    l("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const Yx = /* @__PURE__ */ In(zx, [["render", qx]]), Xx = {
  mounted(e, t, n, s) {
    new to(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Gx = (e, t) => {
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
      const c = a.target;
      r && (n(c, r) || i());
    }, { signal: s.signal });
  }
  return o(e, t), s;
}, Qx = {
  mounted(e, t, n, s) {
    const o = t.value;
    Gx(e, o);
  }
};
class yc {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
sn(yc, "list", /* @__PURE__ */ new Set());
const Jx = { class: "drawer-content" }, Zx = { class: "drawer-header" }, eR = ["innerHTML"], tR = { class: "drawer-body" }, nR = ["innerHTML"], sR = { class: "drawer-footer" }, oR = ["innerHTML"], rR = ["innerHTML"], iR = /* @__PURE__ */ Te({
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
    size: { default: Rn.STANDARD },
    btnSize: { default: Rn.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: s,
      keyboard: o,
      focus: r,
      size: i,
      btnSize: a
    } = un(n), c = j(() => Vo(i.value, "drawer-")), f = j(() => Vo(a.value, "btn-")), u = H(), d = H(!1), p = Yn();
    let h;
    async function m() {
      return d.value === !0 ? void 0 : new Promise((O, N) => {
        d.value = !0, h = O;
      });
    }
    function g(O = !0) {
      d.value = !1, typeof h == "function" && h(O);
    }
    function v() {
      d.value === !0 ? m() : g(!1);
    }
    function y(O) {
      s?.value !== "static" && g(!1);
    }
    function b() {
      g(!1);
    }
    function _() {
      g(!1);
    }
    function x() {
      g(!0);
    }
    function k() {
      d.value === !0 ? yc.add(p) : yc.delete(p);
    }
    return t({
      show: m,
      hide: g,
      toggle: v
    }), (O, N) => (T(), et(lE, {
      onBeforeEnter: k,
      onAfterLeave: k
    }, {
      default: fe(() => [
        d.value ? (T(), R("div", vs({
          key: 0,
          ref_key: "drawerElement",
          ref: u,
          class: "drawer",
          tabindex: "-1"
        }, { ...O.$attrs }, {
          onClick: Sm(y, ["self"])
        }), [
          l("div", {
            class: ce(["drawer-dialog", c.value])
          }, [
            l("div", Jx, [
              l("div", Zx, [
                De(O.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: O.title
                  }, null, 8, eR)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: b
                })
              ]),
              l("div", tR, [
                De(O.$slots, "default", {}, () => [
                  l("span", { innerHTML: O.body }, null, 8, nR)
                ], !0)
              ]),
              l("div", sR, [
                De(O.$slots, "footer", {}, () => [
                  O.okOnly ? ye("", !0) : (T(), R("button", {
                    key: 0,
                    type: "button",
                    class: ce(["ms-auto btn btn-secondary", f.value]),
                    onClick: _
                  }, [
                    De(O.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: O.textCancel }, null, 8, oR)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: ce(["btn btn-primary", f.value]),
                    onClick: x
                  }, [
                    De(O.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: O.textOk }, null, 8, rR)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : ye("", !0)
      ]),
      _: 3
    }));
  }
}), aR = /* @__PURE__ */ In(iR, [["__scopeId", "data-v-2e49e8cb"]]), Wt = "b", p_ = "$toaster", h_ = "$modalManager", lR = "$dialogManager";
class m_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ba(Qk).mount(t);
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
      const n = ba(ox).mount(t);
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
      const n = ba(jk).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
sn(v_, "component");
function cR() {
  return Ft(p_);
}
function uR() {
  return Ft(h_);
}
function dR(e) {
  e.component(`${Wt}-drawer`, aR), e.component(`${Wt}-modal`, u_), e.component(`${Wt}-dialog`, d_), e.component(`${Wt}-pagination`, vx), e.component(`${Wt}-pagination-dropdown`, bx), e.component(`${Wt}-pagination-select`, wx), e.component(`${Wt}-dropdown`, Fx), e.component(`${Wt}-dropdown-item`, $x), e.component(`${Wt}-dropdown-header`, Kx), e.component(`${Wt}-dropdown-divider`, Yx), e.component(`${Wt}-table`, Mx), e.component(`${Wt}-toast`, l_);
}
function fR(e) {
  e.directive("tooltip", Xx), e.directive("click-outside", Qx);
}
const pR = {
  install(e) {
    dR(e), fR(e);
    const t = v_.getComponent(), n = m_.getComponent(), s = g_.getComponent();
    e.provide(p_, t), e.provide(h_, n), e.provide(lR, s);
  }
}, vi = {
  BOTTOM_RIGHT: "bottom right"
}, Zt = /* @__PURE__ */ Xn("notifications", () => {
  const e = uR(), t = cR();
  return {
    showSuccess: (f, u = "Success") => {
      t.toast({
        title: u,
        body: f,
        variant: "primary",
        delay: 4e3
      }, vi.BOTTOM_RIGHT);
    },
    showError: (f, u = "Error") => {
      t.toast({
        title: u,
        body: f,
        variant: "danger",
        delay: 6e3
      }, vi.BOTTOM_RIGHT);
    },
    showWarning: (f, u = "Warning") => {
      t.toast({
        title: u,
        body: f,
        variant: "warning",
        delay: 5e3
      }, vi.BOTTOM_RIGHT);
    },
    showInfo: (f, u = "Information") => {
      t.toast({
        title: u,
        body: f,
        variant: "info",
        delay: 4e3
      }, vi.BOTTOM_RIGHT);
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
      const p = f.map((h) => `${h.mrn} — ${h.error}`).join(`
`);
      try {
        await e.alert({
          title: u,
          body: p,
          textOk: "OK"
        });
      } catch {
      }
    }
  };
}), Yo = /* @__PURE__ */ Xn("settings", () => {
  const e = Wo(), t = Zt(), n = "1", s = us({
    fhir_system: null,
    fhir_systems: [],
    mapping_resources: [],
    selected_mapping_resources: [],
    selected_custom_mapping_resources: []
  }), o = H(null), r = H([]), i = H([]), a = us({
    fetch: !1,
    save: !1
  }), c = async () => {
    try {
      a.fetch = !0;
      const y = (await Ue.getProjectSettings()).data ?? {};
      Object.assign(s, y), o.value = s.fhir_system, r.value = [...s.selected_mapping_resources], i.value = [...s.selected_custom_mapping_resources];
    } catch (v) {
      e.addError(v, "settingsStore"), console.error("Failed to load project settings:", v);
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
    fetchProjectSettings: c,
    addPredefinedResource: async (v, y) => {
      const b = await Ue.createMappingResource({ name: v, resourceSpec: y, type: "predefined" });
      return await c(), t.showSuccess(`${v} added`, "Resource Added"), b;
    },
    addCustomResource: async (v, y) => {
      const b = await Ue.createMappingResource({ name: v, resourceSpec: y, type: "custom" });
      return await c(), t.showSuccess(`${v} added`, "Resource Added"), b;
    },
    softDeleteResource: async (v) => {
      v.id && (await Ue.softDeleteMappingResource(v.id), await c(), t.showWarning(`${v.name} soft-deleted`, "Resource Deleted"));
    },
    restoreResource: async (v) => {
      v.id && (await Ue.restoreMappingResource(v.id), await c(), t.showSuccess(`${v.name} restored`, "Resource Restored"));
    },
    updateSelectedFhirSystem: async (v) => {
      await Ue.updateFhirSystem(v), o.value = v, s.fhir_system = v, t.showSuccess("FHIR system changed", "FHIR System Updated");
    },
    exportResources: () => {
      const v = [
        ...r.value,
        ...i.value
      ];
      return {
        version: n,
        exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
        items: v
      };
    },
    importResources: (v, y = {}) => {
      const b = y.mode ?? "merge";
      if (!v || typeof v != "object")
        throw new Error("Invalid JSON payload");
      const _ = v;
      if (!_.version || _.version !== n)
        throw new Error("Unsupported or missing version");
      if (!Array.isArray(_.items))
        throw new Error("Invalid payload: items must be an array");
      const x = (N) => N && typeof N.name == "string" && typeof N.resourceSpec == "string" && (N.type === "predefined" || N.type === "custom"), k = [];
      for (const N of _.items)
        x(N) && k.push({ name: N.name, resourceSpec: N.resourceSpec, type: N.type });
      const O = { added: 0, updated: 0, skipped: 0, total: k.length };
      if (b === "replace") {
        const N = k.filter((C) => C.type === "predefined"), I = k.filter((C) => C.type === "custom");
        return r.value = [...N], i.value = [...I], O.added = k.length, O;
      }
      for (const N of k) {
        const I = N.type === "predefined" ? r.value : i.value, C = I.findIndex((D) => D.resourceSpec === N.resourceSpec);
        if (C > -1) {
          const D = I[C];
          D.name !== N.name ? (I[C] = { ...D, name: N.name }, O.updated += 1) : O.skipped += 1;
          continue;
        }
        I.some((D) => D.name === N.name && D.resourceSpec === N.resourceSpec) ? O.skipped += 1 : (I.push(N), O.added += 1);
      }
      return O;
    }
  };
}), Me = {
  Pending: "Pending",
  Fetching: "Fetching",
  Completed: "Completed",
  Failed: "Failed",
  Outdated: "Outdated",
  Deleted: "Deleted"
}, Qn = /* @__PURE__ */ Xn("monitor", () => {
  const e = Wo(), t = H(!1), n = H([]), s = H([]), o = H(null), r = H(!1), i = 500, a = H({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: !1,
    hasPrevious: !1,
    perPageOptions: [10, 25, 50, 100, 250]
  }), c = async () => {
    try {
      t.value = !0;
      const W = await Ue.listMrns(a.value.page, a.value.limit);
      W.data.data && W.data.pagination ? (n.value = W.data.data, a.value.total = W.data.pagination.total, a.value.totalPages = W.data.pagination.total_pages, a.value.hasNext = W.data.pagination.has_next, a.value.hasPrevious = W.data.pagination.has_previous, W.data.project_summary && (o.value = W.data.project_summary)) : n.value = W.data, s.value = [];
    } catch (W) {
      e.addError(W, "monitorStore"), console.error("Failed to load MRNs:", W), n.value = [];
    } finally {
      t.value = !1;
    }
  }, f = (W) => Array.from(new Set(
    (W || "").split(/[\s,]+/).map((oe) => oe.trim()).filter(Boolean)
  )), u = (W) => {
    const oe = (W || "").length ? (W || "").split(/[\s,]+/) : [], pe = oe.map((se) => se.trim()), we = pe.filter((se) => !se).length, ke = f(W), He = ke.length, L = Math.max(0, pe.filter(Boolean).length - He), Q = ke.slice(0, 10);
    return {
      tokens: oe.length,
      unique: He,
      duplicates: L,
      empties: we,
      overLimit: He > i,
      limit: i,
      parsed: ke,
      sample: Q
    };
  }, d = async (W) => {
    try {
      r.value = !0;
      const oe = await Ue.addMrns(W);
      return await c(), oe.data;
    } catch (oe) {
      throw e.addError(oe, "monitorStore"), console.error("Failed to add MRNs:", oe), oe;
    } finally {
      r.value = !1;
    }
  }, p = async (W) => {
    const oe = f(W);
    if (oe.length === 0)
      throw new Error("No MRNs provided");
    return await d(oe);
  }, h = async (W) => await d([W]), m = async (W) => {
  }, g = async () => {
    try {
      t.value = !0;
      for (const W of s.value)
        await m(W);
    } catch (W) {
      e.addError(W, "monitorStore"), console.error("Failed to fetch selected MRNs:", W);
    } finally {
      t.value = !1;
    }
  }, v = j(() => n.value.length > 0 && s.value.length === n.value.length), y = j(() => s.value.length > 0 && s.value.length < n.value.length), b = () => {
    v.value ? s.value = [] : s.value = n.value.map((W) => W.id);
  }, _ = (W) => {
    const oe = s.value.indexOf(W);
    oe === -1 ? s.value.push(W) : s.value.splice(oe, 1);
  }, x = (W) => {
    a.value.page = W, c();
  }, k = (W) => {
    a.value.limit = W, a.value.page = 1, c();
  }, O = async (W) => {
    try {
      return (await Ue.getMrnResources(W)).data;
    } catch (oe) {
      return e.addError(oe, "monitorStore"), console.error(`Failed to get resource status for MRN ${W}:`, oe), { mrn: W, resources: [], total_resources: 0 };
    }
  }, N = async () => {
    try {
      const W = await Ue.getProjectSummary();
      return o.value = W.data, W.data;
    } catch (W) {
      return e.addError(W, "monitorStore"), console.error("Failed to get project summary:", W), null;
    }
  }, I = async (W, oe) => {
    try {
      r.value = !0;
      const pe = await Ue.triggerFetchMrns(W, oe);
      return await c(), pe.data;
    } catch (pe) {
      throw e.addError(pe, "monitorStore"), console.error("Failed to trigger fetch:", pe), pe;
    } finally {
      r.value = !1;
    }
  }, C = async (W) => {
    const oe = n.value.filter((pe) => s.value.includes(pe.id)).map((pe) => pe.mrn);
    if (oe.length === 0)
      throw new Error("No MRNs selected");
    return await I(oe, W);
  }, w = async () => {
    try {
      r.value = !0;
      const W = await Ue.performFullSync();
      return await c(), await N(), W.data;
    } catch (W) {
      throw e.addError(W, "monitorStore"), console.error("Failed to perform full sync:", W), W;
    } finally {
      r.value = !1;
    }
  }, D = async (W, oe, pe) => {
    try {
      const we = await Ue.retryFailedResource(W, oe, pe);
      return await c(), we.data;
    } catch (we) {
      throw e.addError(we, "monitorStore"), console.error("Failed to retry resource:", we), we;
    }
  }, A = async (W) => {
    try {
      r.value = !0;
      const oe = await Ue.bulkRetryFailed(W);
      return await c(), oe.data;
    } catch (oe) {
      throw e.addError(oe, "monitorStore"), console.error("Failed to bulk retry failed resources:", oe), oe;
    } finally {
      r.value = !1;
    }
  }, F = (W) => {
    if (W.status_summary)
      return W.status_summary.smart_status_display;
    const oe = W.resources.filter((Q) => Q.status !== Me.Deleted), pe = oe.length, we = oe.filter((Q) => Q.status === Me.Completed).length;
    if (pe === 0) return "No Resources";
    if (we === pe) return "Completed";
    const ke = we / pe * 100;
    if (ke >= 75) return `Mostly Completed (${Math.round(ke)}%)`;
    if (ke >= 25) return `Mixed Progress (${Math.round(ke)}%)`;
    if (ke > 0) return `Starting (${Math.round(ke)}%)`;
    const He = {};
    return oe.forEach((Q) => {
      He[Q.status] = (He[Q.status] || 0) + 1;
    }), Object.keys(He).reduce((Q, se) => He[Q] > He[se] ? Q : se, Me.Pending);
  }, de = (W) => {
    if (W.status_summary)
      return W.status_summary.overall_status;
    const oe = W.resources.filter((we) => we.status !== Me.Deleted);
    if (oe.length === 0) return Me.Pending;
    const pe = {};
    return oe.forEach((we) => {
      pe[we.status] = (pe[we.status] || 0) + 1;
    }), Object.keys(pe).reduce((we, ke) => pe[we] > pe[ke] ? we : ke, Me.Pending);
  }, Y = (W) => {
    if (W.status_summary)
      return W.status_summary.archive_button_config;
    const oe = W.resources.filter((ke) => ke.status !== Me.Deleted), pe = oe.filter((ke) => ke.status === Me.Completed).length, we = oe.length;
    return pe === 0 ? {
      variant: "secondary",
      disabled: !0,
      tooltip: "No completed resources to archive",
      text: "Archive"
    } : pe === we ? {
      variant: "success",
      disabled: !1,
      tooltip: `Archive all ${pe} completed resources`,
      text: "Archive All"
    } : {
      variant: "outline-success",
      disabled: !1,
      tooltip: `Archive ${pe} of ${we} completed resources`,
      text: "Archive Available"
    };
  }, re = (W) => W.status_summary ? W.status_summary.has_archivable_resources : W.resources.some((oe) => oe.status === Me.Completed), K = (W) => {
    if (W.status_summary)
      return W.status_summary.progress_bar_config;
    const oe = W.resources.filter((L) => L.status !== Me.Deleted), pe = oe.length;
    if (pe === 0)
      return { segments: [], completion_percentage: 0, total_resources: 0 };
    const we = {};
    oe.forEach((L) => {
      we[L.status] = (we[L.status] || 0) + 1;
    });
    const ke = Object.entries(we).map(([L, Q]) => ({
      status: L,
      count: Q,
      percentage: Math.round(Q / pe * 100 * 10) / 10,
      color: Ze(L)
    })), He = we[Me.Completed] || 0;
    return {
      segments: ke,
      completion_percentage: Math.round(He / pe * 100 * 10) / 10,
      total_resources: pe
    };
  }, le = (W) => {
    if (W.status_summary)
      return W.status_summary.available_resource_types;
    const oe = /* @__PURE__ */ new Set();
    return W.resources.filter((pe) => pe.status === Me.Completed).forEach((pe) => oe.add(pe.name)), Array.from(oe).sort();
  }, be = (W, oe) => {
    if (W.status_summary?.resource_type_statuses[oe])
      return W.status_summary.resource_type_statuses[oe];
    const pe = W.resources.filter(
      (L) => L.name === oe && L.status !== Me.Deleted
    );
    if (pe.length === 0) return null;
    const we = pe.reduce((L, Q) => (L[Q.status] = (L[Q.status] || 0) + 1, L), {}), ke = we[Me.Completed] || 0, He = pe.length;
    return {
      total_count: He,
      completed_count: ke,
      failed_count: we[Me.Failed] || 0,
      pending_count: we[Me.Pending] || 0,
      fetching_count: we[Me.Fetching] || 0,
      outdated_count: we[Me.Outdated] || 0,
      has_completed: ke > 0,
      completion_percentage: He > 0 ? ke / He * 100 : 0,
      is_archivable: ke > 0
    };
  }, Ze = (W) => {
    switch (W) {
      case Me.Completed:
        return "success";
      case Me.Failed:
        return "danger";
      case Me.Fetching:
        return "info";
      case Me.Pending:
        return "warning";
      case Me.Outdated:
        return "secondary";
      case Me.Deleted:
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
    allSelected: v,
    indeterminate: y,
    // Basic methods
    fetchMrns: c,
    addMrn: h,
    addMrns: d,
    addMrnsFromString: p,
    parseMrnsFromInput: f,
    analyzeMrnInput: u,
    fetchMrn: m,
    fetchSelected: g,
    toggleSelectAll: b,
    toggleSelection: _,
    setPage: x,
    setLimit: k,
    // Enhanced resource management
    getResourceStatus: O,
    getProjectSummary: N,
    triggerFetchMrns: I,
    triggerFetchSelected: C,
    performFullSync: w,
    retryFailedResource: D,
    bulkRetryFailed: A,
    // Enhanced status methods
    getSmartStatusDisplay: F,
    getStatusForStyling: de,
    getArchiveButtonConfig: Y,
    hasArchivableResources: re,
    getProgressBarConfig: K,
    getAvailableResourceTypesForArchive: le,
    getResourceTypeStatus: be,
    getStatusColor: Ze
  };
}), hR = "data:image/png;base64,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", mR = { class: "d-flex gap-3 align-items-start" }, gR = { class: "feature-icon d-flex align-items-start justify-content-center" }, vR = { class: "d-flex flex-column gap-2 align-items-start" }, _R = { class: "d-flex gap-2" }, yR = { class: "fs-6 fw-bold mb-1" }, bR = { class: "text-muted mb-0" }, ER = /* @__PURE__ */ Te({
  __name: "FeatureHighlight",
  setup(e) {
    return (t, n) => (T(), R("div", mR, [
      l("div", gR, [
        De(t.$slots, "icon", {}, void 0, !0)
      ]),
      l("div", vR, [
        l("div", _R, [
          l("span", yR, [
            De(t.$slots, "title", {}, void 0, !0)
          ])
        ]),
        l("p", bR, [
          De(t.$slots, "default", {}, void 0, !0)
        ])
      ])
    ]));
  }
}), Sl = /* @__PURE__ */ fn(ER, [["__scopeId", "data-v-ee9dd710"]]), wR = { class: "card h-100 border-0 shadow-sm bg-light rounded" }, AR = { class: "card-body d-flex align-items-center" }, SR = { class: "step-number me-4" }, CR = { class: "fw-bold" }, OR = { class: "step-content flex-grow-1" }, TR = { class: "mb-1" }, NR = { class: "text-muted mb-2" }, DR = /* @__PURE__ */ Te({
  __name: "StepCard",
  props: {
    number: {},
    title: {},
    variant: { default: "primary" }
  },
  setup(e) {
    const t = e, n = j(() => `bg-${t.variant}`);
    return (s, o) => (T(), R("div", wR, [
      l("div", AR, [
        l("div", SR, [
          l("div", {
            class: ce(["text-white rounded-circle d-flex align-items-center justify-content-center", n.value])
          }, [
            l("span", CR, P(s.number), 1)
          ], 2)
        ]),
        l("div", OR, [
          l("h5", TR, P(s.title), 1),
          l("p", NR, [
            De(s.$slots, "default", {}, void 0, !0)
          ]),
          l("div", null, [
            De(s.$slots, "actions", {}, void 0, !0)
          ])
        ])
      ])
    ]));
  }
}), _i = /* @__PURE__ */ fn(DR, [["__scopeId", "data-v-00ad78d0"]]), kR = { class: "home-page" }, xR = { class: "hero-section text-center mb-5" }, RR = { class: "d-flex flex-column gap-2 align-items-center" }, IR = ["src"], MR = { class: "row g-4 mt-2 text-start" }, PR = { class: "col-md-4" }, VR = { class: "card h-100 border-0 shadow-sm" }, LR = { class: "card-body" }, FR = { class: "col-md-4" }, BR = { class: "card h-100 border-0 shadow-sm" }, $R = { class: "card-body" }, jR = { class: "col-md-4" }, UR = { class: "card h-100 border-0 shadow-sm" }, HR = { class: "card-body" }, WR = { class: "getting-started-section mb-5" }, KR = { class: "row g-4 workflow-steps" }, zR = { class: "col-12 col-lg-6" }, qR = { class: "col-12 col-lg-6" }, YR = { class: "col-12 col-lg-6" }, XR = { class: "col-12 col-lg-6" }, GR = {
  key: 0,
  class: "status-section"
}, QR = { class: "row g-4 mb-4" }, JR = { class: "col-md-3 col-sm-6" }, ZR = { class: "stat-card card border-0 bg-primary text-white text-center h-100" }, e2 = { class: "card-body" }, t2 = { class: "mb-1" }, n2 = { class: "col-md-3 col-sm-6" }, s2 = { class: "stat-card card border-0 bg-secondary text-white text-center h-100" }, o2 = { class: "card-body" }, r2 = { class: "mb-1" }, i2 = { class: "col-md-3 col-sm-6" }, a2 = { class: "stat-card card border-0 bg-dark text-white text-center h-100" }, l2 = { class: "card-body" }, c2 = { class: "mb-1" }, u2 = { class: "col-md-3 col-sm-6" }, d2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, f2 = { class: "card-body" }, p2 = { class: "mb-1" }, h2 = { class: "row g-4" }, m2 = { class: "col-md-3 col-sm-6" }, g2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, v2 = { class: "card-body" }, _2 = { class: "mb-1" }, y2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, b2 = { class: "col-md-3 col-sm-6" }, E2 = { class: "stat-card card border-0 bg-danger text-white text-center h-100" }, w2 = { class: "card-body" }, A2 = { class: "mb-1" }, S2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, C2 = { class: "col-md-3 col-sm-6" }, O2 = { class: "stat-card card border-0 bg-info text-white text-center h-100" }, T2 = { class: "card-body" }, N2 = { class: "mb-1" }, D2 = { class: "col-md-3 col-sm-6" }, k2 = { class: "stat-card card border-0 bg-warning text-white text-center h-100" }, x2 = { class: "card-body" }, R2 = { class: "mb-1" }, I2 = {
  key: 0,
  class: "mt-4 text-center"
}, M2 = {
  class: "btn-group gap-2",
  role: "group"
}, P2 = {
  key: 1,
  class: "alert alert-info text-center"
}, V2 = /* @__PURE__ */ Te({
  __name: "HomePage",
  setup(e) {
    const t = Yo(), n = Qn(), {
      selectedFhirSystem: s,
      selectedMappingResources: o,
      selectedCustomMappingResources: r
    } = jo(t);
    Tt(async () => {
      try {
        await Promise.all([
          t.fetchProjectSettings(),
          n.getProjectSummary()
        ]);
      } catch (b) {
        console.error("Failed to load dashboard data:", b);
      }
    });
    const i = j(() => s.value && (o.value?.length > 0 || r.value?.length > 0)), a = j(() => i.value && n.projectSummary), c = j(() => n.projectSummary?.total_mrns || 0), f = j(() => {
      const b = o.value?.length || 0, _ = r.value?.length || 0;
      return b + _;
    }), u = j(() => n.projectSummary?.overall_status_counts?.completed || 0), d = j(() => n.projectSummary?.overall_status_counts?.pending || 0), p = j(() => n.projectSummary?.overall_status_counts?.fetching || 0), h = j(() => n.projectSummary?.overall_status_counts?.failed || 0), m = j(() => n.projectSummary ? Object.values(n.projectSummary.overall_status_counts).reduce((b, _) => b + _, 0) : 0), g = j(() => {
      if (!n.projectSummary) return 0;
      const b = n.projectSummary.overall_status_counts?.deleted || 0;
      return m.value - b;
    }), v = j(() => {
      if (!g.value) return 0;
      const b = h.value;
      return Math.round(b / g.value * 100);
    }), y = j(() => {
      if (!g.value) return 0;
      const b = u.value;
      return Math.round(b / g.value * 100);
    });
    return (b, _) => {
      const x = Qe("router-link");
      return T(), R("div", kR, [
        l("div", xR, [
          l("div", RR, [
            l("img", {
              src: ne(hR),
              title: "ALL FHIR",
              style: { height: "200px" }
            }, null, 8, IR),
            _[0] || (_[0] = l("p", { class: "text-muted mb-4" }, " With this module, FHIR resources for configured MRNs are retrieved in the background. It connects to your specified EHR systems, fetches the payload, and stores it in its original form. When data is ready, it assembles the requested mix of MRNs and resource types into a ZIP tailored to your needs. ", -1))
          ]),
          _[10] || (_[10] = l("div", { class: "text-center mb-2" }, [
            l("h2", null, "Key Features")
          ], -1)),
          l("div", MR, [
            l("div", PR, [
              l("div", VR, [
                l("div", LR, [
                  ue(Sl, null, {
                    icon: fe(() => _[1] || (_[1] = [
                      l("i", { class: "fas fa-database fa-4x text-success" }, null, -1)
                    ])),
                    title: fe(() => _[2] || (_[2] = [
                      U(" Resources Management ")
                    ])),
                    default: fe(() => [
                      _[3] || (_[3] = U(" Manage patient MRNs and monitor the status of each FHIR resource type as it progresses through pending, fetching, completed, or failed states — all from one place. "))
                    ]),
                    _: 1,
                    __: [3]
                  })
                ])
              ])
            ]),
            l("div", FR, [
              l("div", BR, [
                l("div", $R, [
                  ue(Sl, null, {
                    icon: fe(() => _[4] || (_[4] = [
                      l("i", { class: "fas fa-robot fa-4x text-primary" }, null, -1)
                    ])),
                    title: fe(() => _[5] || (_[5] = [
                      U(" Background Automation ")
                    ])),
                    default: fe(() => [
                      _[6] || (_[6] = U(" Resource collection runs automatically in the background. New and updated data are fetched on a schedule without manual steps, so downloads are ready on demand with minimal waiting. "))
                    ]),
                    _: 1,
                    __: [6]
                  })
                ])
              ])
            ]),
            l("div", jR, [
              l("div", UR, [
                l("div", HR, [
                  ue(Sl, null, {
                    icon: fe(() => _[7] || (_[7] = [
                      l("i", { class: "fas fa-file-archive fa-4x text-info" }, null, -1)
                    ])),
                    title: fe(() => _[8] || (_[8] = [
                      U(" Archive Creation ")
                    ])),
                    default: fe(() => [
                      _[9] || (_[9] = U(" Create archives by selecting any combination of MRNs and resource types. Build exactly the package you need as a ZIP file. "))
                    ]),
                    _: 1,
                    __: [9]
                  })
                ])
              ])
            ])
          ])
        ]),
        l("div", WR, [
          _[19] || (_[19] = l("div", { class: "text-center mb-4" }, [
            l("h2", null, "Getting Started"),
            l("p", { class: "text-muted" }, "Follow these steps to fetch and package FHIR resources")
          ], -1)),
          l("div", KR, [
            l("div", zR, [
              ue(_i, {
                number: 1,
                title: "Configure Your Setup",
                variant: "primary"
              }, {
                actions: fe(() => [
                  ue(x, {
                    to: "/setup",
                    class: "btn btn-primary btn-sm"
                  }, {
                    default: fe(() => _[11] || (_[11] = [
                      l("i", { class: "fas fa-cogs me-1" }, null, -1),
                      U(" Go to Setup ")
                    ])),
                    _: 1,
                    __: [11]
                  })
                ]),
                default: fe(() => [
                  _[12] || (_[12] = U(" Select FHIR system and resource types to fetch "))
                ]),
                _: 1,
                __: [12]
              })
            ]),
            l("div", qR, [
              ue(_i, {
                number: 2,
                title: "Add Patient MRNs",
                variant: "success"
              }, {
                actions: fe(() => [
                  ue(x, {
                    to: "/resources",
                    class: "btn btn-success btn-sm"
                  }, {
                    default: fe(() => _[13] || (_[13] = [
                      l("i", { class: "fas fa-database me-1" }, null, -1),
                      U(" Manage MRNs ")
                    ])),
                    _: 1,
                    __: [13]
                  })
                ]),
                default: fe(() => [
                  _[14] || (_[14] = U(" Add patient identifiers to fetch FHIR resources "))
                ]),
                _: 1,
                __: [14]
              })
            ]),
            l("div", YR, [
              ue(_i, {
                number: 3,
                title: "Background Fetching",
                variant: "info"
              }, {
                actions: fe(() => [
                  ue(x, {
                    to: "/tasks",
                    class: "btn btn-info btn-sm"
                  }, {
                    default: fe(() => _[15] || (_[15] = [
                      l("i", { class: "fas fa-tasks me-1" }, null, -1),
                      U(" View Progress ")
                    ])),
                    _: 1,
                    __: [15]
                  })
                ]),
                default: fe(() => [
                  _[16] || (_[16] = U(" Fetching runs automatically in the background. Monitor progress and, if needed, queue manual retries — no manual steps required for routine updates. "))
                ]),
                _: 1,
                __: [16]
              })
            ]),
            l("div", XR, [
              ue(_i, {
                number: 4,
                title: "Generate ZIP Archive",
                variant: "warning"
              }, {
                actions: fe(() => [
                  ue(x, {
                    to: "/resources",
                    class: "btn btn-warning btn-sm"
                  }, {
                    default: fe(() => _[17] || (_[17] = [
                      l("i", { class: "fas fa-download me-1" }, null, -1),
                      U(" Create ZIP ")
                    ])),
                    _: 1,
                    __: [17]
                  })
                ]),
                default: fe(() => [
                  _[18] || (_[18] = U(" Once resources are completed, generate a tailored ZIP file with exactly the MRNs and resource types you want. "))
                ]),
                _: 1,
                __: [18]
              })
            ])
          ])
        ]),
        a.value ? (T(), R("div", GR, [
          _[40] || (_[40] = l("div", { class: "text-center mb-4" }, [
            l("h2", null, "Project Status"),
            l("p", { class: "text-muted" }, "Current overview of your FHIR snapshot project")
          ], -1)),
          l("div", QR, [
            l("div", JR, [
              l("div", ZR, [
                l("div", e2, [
                  _[20] || (_[20] = l("i", { class: "fas fa-user-injured fa-2x mb-2" }, null, -1)),
                  l("h3", t2, P(c.value), 1),
                  _[21] || (_[21] = l("p", { class: "mb-0 small" }, "Total MRNs", -1))
                ])
              ])
            ]),
            l("div", n2, [
              l("div", s2, [
                l("div", o2, [
                  _[22] || (_[22] = l("i", { class: "fas fa-database fa-2x mb-2" }, null, -1)),
                  l("h3", r2, P(m.value), 1),
                  _[23] || (_[23] = l("p", { class: "mb-0 small" }, "Total Resources", -1)),
                  _[24] || (_[24] = l("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "includes deleted", -1))
                ])
              ])
            ]),
            l("div", i2, [
              l("div", a2, [
                l("div", l2, [
                  _[25] || (_[25] = l("i", { class: "fas fa-play-circle fa-2x mb-2" }, null, -1)),
                  l("h3", c2, P(g.value), 1),
                  _[26] || (_[26] = l("p", { class: "mb-0 small" }, "Active Resources", -1)),
                  _[27] || (_[27] = l("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "excludes deleted", -1))
                ])
              ])
            ]),
            l("div", u2, [
              l("div", d2, [
                l("div", f2, [
                  _[28] || (_[28] = l("i", { class: "fas fa-file-medical fa-2x mb-2" }, null, -1)),
                  l("h3", p2, P(f.value), 1),
                  _[29] || (_[29] = l("p", { class: "mb-0 small" }, "Resource Types", -1))
                ])
              ])
            ])
          ]),
          l("div", h2, [
            l("div", m2, [
              l("div", g2, [
                l("div", v2, [
                  _[30] || (_[30] = l("i", { class: "fas fa-check-circle fa-2x mb-2" }, null, -1)),
                  l("h3", _2, P(u.value), 1),
                  _[31] || (_[31] = l("p", { class: "mb-0 small" }, "Completed", -1)),
                  y.value > 0 ? (T(), R("p", y2, P(y.value) + "% complete", 1)) : ye("", !0)
                ])
              ])
            ]),
            l("div", b2, [
              l("div", E2, [
                l("div", w2, [
                  _[32] || (_[32] = l("i", { class: "fas fa-exclamation-circle fa-2x mb-2" }, null, -1)),
                  l("h3", A2, P(h.value), 1),
                  _[33] || (_[33] = l("p", { class: "mb-0 small" }, "Failed", -1)),
                  v.value > 0 ? (T(), R("p", S2, P(v.value) + "% error rate", 1)) : ye("", !0)
                ])
              ])
            ]),
            l("div", C2, [
              l("div", O2, [
                l("div", T2, [
                  _[34] || (_[34] = l("i", { class: "fas fa-sync fa-2x mb-2" }, null, -1)),
                  l("h3", N2, P(p.value), 1),
                  _[35] || (_[35] = l("p", { class: "mb-0 small" }, "Fetching", -1))
                ])
              ])
            ]),
            l("div", D2, [
              l("div", k2, [
                l("div", x2, [
                  _[36] || (_[36] = l("i", { class: "fas fa-clock fa-2x mb-2" }, null, -1)),
                  l("h3", R2, P(d.value), 1),
                  _[37] || (_[37] = l("p", { class: "mb-0 small" }, "Pending", -1))
                ])
              ])
            ])
          ]),
          i.value ? (T(), R("div", I2, [
            l("div", M2, [
              ue(x, {
                to: "/resources",
                class: "btn btn-primary"
              }, {
                default: fe(() => _[38] || (_[38] = [
                  l("i", { class: "fas fa-database me-1" }, null, -1),
                  U(" Manage Resources ")
                ])),
                _: 1,
                __: [38]
              }),
              ue(x, {
                to: "/tasks",
                class: "btn btn-outline-secondary"
              }, {
                default: fe(() => _[39] || (_[39] = [
                  l("i", { class: "fas fa-tasks me-1" }, null, -1),
                  U(" View Tasks ")
                ])),
                _: 1,
                __: [39]
              })
            ])
          ])) : ye("", !0)
        ])) : (T(), R("div", P2, [
          _[42] || (_[42] = l("i", { class: "fas fa-info-circle fa-2x mb-3" }, null, -1)),
          _[43] || (_[43] = l("h4", null, "Get Started", -1)),
          _[44] || (_[44] = l("p", { class: "mb-3" }, "Configure your FHIR system and resource types to begin fetching data.", -1)),
          ue(x, {
            to: "/setup",
            class: "btn btn-primary"
          }, {
            default: fe(() => _[41] || (_[41] = [
              l("i", { class: "fas fa-cogs me-1" }, null, -1),
              U(" Configure Now ")
            ])),
            _: 1,
            __: [41]
          })
        ]))
      ]);
    };
  }
}), L2 = /* @__PURE__ */ fn(V2, [["__scopeId", "data-v-cb32987b"]]), F2 = ["value"], B2 = ["value"], $2 = /* @__PURE__ */ Te({
  __name: "FhirSystemDropdown",
  setup(e) {
    const t = Yo(), n = Zt(), { settings: s, selectedFhirSystem: o } = jo(t), r = async (i) => {
      const a = i.target, c = a.value, f = c === "" ? null : parseInt(c), u = s.value.fhir_system;
      if (u === null) {
        f !== null && await t.updateSelectedFhirSystem(f);
        return;
      }
      if (f !== u) {
        if (!await n.confirmAction(
          "Change FHIR System",
          "Changing the FHIR system may affect future fetches. Continue?"
        )) {
          a.value = String(u);
          return;
        }
        f !== null && await t.updateSelectedFhirSystem(f);
      }
    };
    return (i, a) => (T(), R("div", null, [
      a[1] || (a[1] = l("label", { for: "ehr-dropdown" }, "FHIR Systems", -1)),
      l("select", {
        class: "form-select form-select-sm",
        id: "ehr-dropdown",
        value: ne(o) || "",
        onChange: r
      }, [
        a[0] || (a[0] = l("option", { value: "" }, "Select a FHIR System", -1)),
        (T(!0), R(Se, null, Je(ne(s).fhir_systems, (c) => (T(), R("option", {
          key: c.ehr_id,
          value: c.ehr_id
        }, P(c.ehr_name), 9, B2))), 128))
      ], 40, F2)
    ]));
  }
}), j2 = { class: "mb-3" }, U2 = { class: "form-check" }, H2 = { class: "form-check" }, W2 = { class: "d-flex gap-2 justify-content-end" }, K2 = ["onClick"], z2 = ["onClick"], q2 = /* @__PURE__ */ Te({
  __name: "ImportResourcesModal",
  setup(e, { expose: t }) {
    const n = H(null), s = H("merge"), o = async () => (s.value = "merge", await n.value?.show() ? s.value : null), r = (i) => {
      i(!0);
    };
    return t({ show: o }), (i, a) => {
      const c = Qe("b-modal");
      return T(), et(c, {
        ref_key: "importModal",
        ref: n
      }, {
        title: fe(() => a[2] || (a[2] = [
          U("Import Resources")
        ])),
        footer: fe(({ hide: f }) => [
          l("div", W2, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (u) => f(!1)
            }, a[5] || (a[5] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              U("Cancel ")
            ]), 8, K2),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (u) => r(f)
            }, a[6] || (a[6] = [
              l("i", { class: "fas fa-file-import fa-fw me-1" }, null, -1),
              U("Continue ")
            ]), 8, z2)
          ])
        ]),
        default: fe(() => [
          l("div", j2, [
            l("div", U2, [
              nt(l("input", {
                class: "form-check-input",
                type: "radio",
                name: "import-mode",
                id: "mode-merge",
                value: "merge",
                "onUpdate:modelValue": a[0] || (a[0] = (f) => s.value = f)
              }, null, 512), [
                [Ao, s.value]
              ]),
              a[3] || (a[3] = l("label", {
                class: "form-check-label",
                for: "mode-merge"
              }, [
                l("strong", null, "Merge"),
                l("div", { class: "small text-muted" }, "Adds new resources and updates names when resourceSpec matches. Keeps existing items.")
              ], -1))
            ]),
            l("div", H2, [
              nt(l("input", {
                class: "form-check-input",
                type: "radio",
                name: "import-mode",
                id: "mode-replace",
                value: "replace",
                "onUpdate:modelValue": a[1] || (a[1] = (f) => s.value = f)
              }, null, 512), [
                [Ao, s.value]
              ]),
              a[4] || (a[4] = l("label", {
                class: "form-check-label",
                for: "mode-replace"
              }, [
                l("strong", null, "Replace"),
                l("div", { class: "small text-muted" }, "Replaces current selection with the file contents. This will discard your current list.")
              ], -1))
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), Ms = Object.freeze({
  PREDEFINED: "PREDEFINED",
  CUSTOM: "CUSTOM"
}), Y2 = { class: "mb-3" }, X2 = ["value"], G2 = ["disabled"], Q2 = ["value"], J2 = ["value"], Z2 = ["disabled"], eI = /* @__PURE__ */ Te({
  __name: "ResourceForm",
  props: {
    modelValue: { default: () => ({}) },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = Yo(), { settings: n } = jo(t), s = j(() => n.value.mapping_resources), o = Vb(e, "modelValue");
    return (r, i) => (T(), R("div", null, [
      l("form", null, [
        l("div", Y2, [
          i[5] || (i[5] = l("label", {
            class: "form-label",
            for: "display-name"
          }, "Display Name", -1)),
          nt(l("input", {
            "onUpdate:modelValue": i[0] || (i[0] = (a) => o.value.displayName = a),
            class: "form-control form-control-sm",
            type: "text",
            id: "display-name",
            placeholder: "E.g., Vital Signs, Social History, etc.",
            required: ""
          }, null, 512), [
            [wo, o.value.displayName]
          ])
        ]),
        l("div", null, [
          nt(l("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-predefined",
            value: ne(Ms).PREDEFINED,
            "onUpdate:modelValue": i[1] || (i[1] = (a) => o.value.resourceType = a)
          }, null, 8, X2), [
            [Ao, o.value.resourceType]
          ]),
          i[7] || (i[7] = l("label", {
            class: "form-label ms-2",
            for: "resource-type-predefined"
          }, "Predefined Resource", -1)),
          nt(l("select", {
            "onUpdate:modelValue": i[2] || (i[2] = (a) => o.value.predefinedResource = a),
            class: "form-select form-select-sm",
            id: "predefined-resource",
            disabled: o.value.resourceType !== ne(Ms).PREDEFINED
          }, [
            i[6] || (i[6] = l("option", {
              disabled: "",
              value: ""
            }, "Please Select...", -1)),
            (T(!0), R(Se, null, Je(s.value, (a) => (T(), R("option", {
              key: a.resourceSpec,
              value: a.resourceSpec
            }, P(a.name), 9, Q2))), 128))
          ], 8, G2), [
            [cs, o.value.predefinedResource]
          ])
        ]),
        i[9] || (i[9] = l("div", { class: "d-flex justify-start-center my-2" }, [
          l("span", null, "—OR—")
        ], -1)),
        l("div", null, [
          nt(l("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-custom",
            value: ne(Ms).CUSTOM,
            "onUpdate:modelValue": i[3] || (i[3] = (a) => o.value.resourceType = a)
          }, null, 8, J2), [
            [Ao, o.value.resourceType]
          ]),
          i[8] || (i[8] = l("label", {
            class: "form-label ms-2",
            for: "resource-type-custom"
          }, "Custom Resource", -1)),
          nt(l("input", {
            "onUpdate:modelValue": i[4] || (i[4] = (a) => o.value.customResourceSpec = a),
            class: "form-control form-control-sm",
            type: "text",
            id: "custom-resource",
            disabled: o.value.resourceType !== ne(Ms).CUSTOM,
            placeholder: "Observation?category=social-history"
          }, null, 8, Z2), [
            [wo, o.value.customResourceSpec]
          ])
        ])
      ])
    ]));
  }
}), tI = { class: "d-flex gap-2 justify-content-end" }, nI = ["onClick"], sI = ["onClick", "disabled"], oI = /* @__PURE__ */ Te({
  __name: "ResourceFormModal",
  setup(e, { expose: t }) {
    const n = H(null), s = () => ({
      displayName: "",
      customResourceSpec: "",
      predefinedResource: "",
      resourceType: Ms.PREDEFINED
    }), o = H(s()), r = j(() => o.value.displayName.trim() ? o.value.resourceType === Ms.PREDEFINED ? !!o.value.predefinedResource : !!o.value.customResourceSpec.trim() : !1), i = async () => (o.value = s(), await n.value?.show() ? o.value : null), a = (c) => {
      r.value && c(!0);
    };
    return t({ show: i }), (c, f) => {
      const u = Qe("b-modal");
      return T(), et(u, {
        ref_key: "resourceFormModal",
        ref: n
      }, {
        title: fe(() => f[1] || (f[1] = [
          U("Resource")
        ])),
        footer: fe(({ hide: d }) => [
          l("div", tI, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (p) => d(!1)
            }, f[2] || (f[2] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              U("Cancel ")
            ]), 8, nI),
            l("button", {
              type: "button",
              class: "btn btn-sm btn-primary",
              onClick: (p) => a(d),
              disabled: !r.value
            }, f[3] || (f[3] = [
              l("i", { class: "fas fa-plus fa-fw me-1" }, null, -1),
              U("Add ")
            ]), 8, sI)
          ])
        ]),
        default: fe(() => [
          ue(eI, {
            modelValue: o.value,
            "onUpdate:modelValue": f[0] || (f[0] = (d) => o.value = d)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 512);
    };
  }
}), rI = { class: "d-flex align-items-center w-100" }, iI = { class: "ms-auto d-flex align-items-center gap-2" }, aI = ["disabled"], lI = "Import resources from JSON. Choose Merge to add/update or Replace to overwrite your current list.", cI = "Export current resources to a JSON file.", uI = "Manage the list of mapping resources. Import/Export uses JSON; Import supports Merge or Replace.", dI = /* @__PURE__ */ Te({
  __name: "ResourcesToolbar",
  setup(e) {
    const t = Yo(), n = Zt(), { loading: s } = jo(t), o = H(null), r = H(null), i = H(null), a = H("merge");
    async function c() {
      if (!o.value) return;
      const h = await o.value.show();
      h && (h.resourceType === Ms.PREDEFINED ? await t.addPredefinedResource(h.displayName, h.predefinedResource) : await t.addCustomResource(h.displayName, h.customResourceSpec));
    }
    async function f() {
      if (!r.value) return;
      const h = await r.value.show();
      h && (h === "replace" && !await n.confirmAction(
        "Replace Resources",
        "This will replace your current resources with the ones from the file. This action will discard your current list. Continue?"
      ) || (a.value = h, i.value?.click()));
    }
    async function u(h) {
      try {
        const m = h.target, g = m.files && m.files[0];
        if (!g) return;
        const v = await g.text(), y = JSON.parse(v), b = t.importResources(y, { mode: a.value });
        n.showSuccess(`Imported ${b.added} new, updated ${b.updated}, skipped ${b.skipped}.`);
      } catch (m) {
        console.error("Import failed:", m), n.showError("Failed to import resources. Please check the JSON file.");
      } finally {
        i.value && (i.value.value = ""), a.value = "merge";
      }
    }
    function d() {
      try {
        const h = t.exportResources(), m = new Blob([JSON.stringify(h, null, 2)], { type: "application/json" }), g = window.URL.createObjectURL(m), v = document.createElement("a"), y = /* @__PURE__ */ new Date(), b = `${y.getFullYear()}${String(y.getMonth() + 1).padStart(2, "0")}${String(y.getDate()).padStart(2, "0")}-${String(y.getHours()).padStart(2, "0")}${String(y.getMinutes()).padStart(2, "0")}`;
        v.href = g, v.download = `resources-${b}.json`, document.body.appendChild(v), v.click(), v.remove(), window.URL.revokeObjectURL(g), n.showSuccess("Exported resources successfully");
      } catch (h) {
        console.error("Export failed:", h), n.showError("Failed to export resources");
      }
    }
    async function p() {
      try {
        await t.fetchProjectSettings(), n.showSuccess("Resources refreshed successfully");
      } catch (h) {
        console.error("Failed to refresh resources:", h), n.showError("Failed to refresh resources");
      }
    }
    return (h, m) => (T(), R("div", rI, [
      l("div", { class: "d-flex align-items-center gap-2" }, [
        m[0] || (m[0] = l("span", null, "Resources", -1)),
        l("i", {
          class: "fas fa-info-circle text-muted",
          title: uI,
          "aria-label": "Resources help",
          role: "img"
        })
      ]),
      l("div", iI, [
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: f,
          title: lI
        }, m[1] || (m[1] = [
          l("i", { class: "fas fa-upload fa-fw" }, null, -1),
          l("span", null, "Import", -1)
        ])),
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: d,
          title: cI
        }, m[2] || (m[2] = [
          l("i", { class: "fas fa-download fa-fw" }, null, -1),
          l("span", null, "Export", -1)
        ])),
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: c
        }, m[3] || (m[3] = [
          l("i", { class: "fas fa-plus fa-fw" }, null, -1),
          l("span", null, "Add", -1)
        ])),
        l("button", {
          class: "btn btn-outline-secondary btn-sm",
          onClick: p,
          disabled: ne(s).fetch,
          title: "Refresh resources"
        }, [
          l("i", {
            class: ce(["fas fa-rotate-right fa-fw", { "fa-spin": ne(s).fetch }])
          }, null, 2)
        ], 8, aI)
      ]),
      l("input", {
        ref_key: "importInput",
        ref: i,
        type: "file",
        accept: "application/json",
        class: "d-none",
        onChange: u
      }, null, 544),
      ue(q2, {
        ref_key: "importModal",
        ref: r
      }, null, 512),
      ue(oI, {
        ref_key: "resourceFormModal",
        ref: o
      }, null, 512)
    ]));
  }
}), fI = { class: "table table-striped table-hover table-sm border-top" }, pI = { class: "d-flex gap-2" }, hI = ["onClick", "disabled"], mI = ["onClick", "disabled"], gI = ["onClick", "disabled"], vI = { key: 0 }, _I = /* @__PURE__ */ Te({
  __name: "ResourcesTable",
  setup(e) {
    const t = Yo(), n = Zt(), { selectedMappingResources: s, selectedCustomMappingResources: o } = jo(t), r = j(() => [
      ...s.value,
      ...o.value
    ]), i = us({}), a = (p) => p.id || `${p.type}::${p.name}::${p.resourceSpec}`, c = (p) => !!i[a(p)];
    async function f(p) {
      const h = a(p);
      i[h] = !0;
      try {
        await t.softDeleteResource(p);
      } finally {
        i[h] = !1;
      }
    }
    async function u(p) {
      const h = a(p);
      i[h] = !0;
      try {
        await t.restoreResource(p);
      } finally {
        i[h] = !1;
      }
    }
    async function d(p) {
      const h = a(p);
      i[h] = !0;
      try {
        if (!await n.confirmAction(
          "Delete Forever",
          "This will permanently delete all instances marked as Deleted for this resource. This action cannot be undone. Continue?"
        ) || !p.id) return;
        await Ue.deleteMappingResource(p.id), await t.fetchProjectSettings(), n.showSuccess("Resource removed and deleted items purged");
      } finally {
        i[h] = !1;
      }
    }
    return (p, h) => (T(), R("table", fI, [
      h[1] || (h[1] = l("thead", null, [
        l("tr", null, [
          l("th", null, "Name"),
          l("th", null, "Type"),
          l("th", null, "Resource Specification"),
          l("th", null, "Actions")
        ])
      ], -1)),
      l("tbody", null, [
        (T(!0), R(Se, null, Je(r.value, (m) => (T(), R("tr", {
          key: m.id || `${m.type}-${m.name}-${m.resourceSpec}`,
          class: ce({ "table-secondary": m.deleted })
        }, [
          l("td", null, [
            l("span", {
              class: ce({ "text-decoration-line-through text-muted": m.deleted })
            }, P(m.name), 3)
          ]),
          l("td", null, P(m.type), 1),
          l("td", null, [
            l("span", {
              class: ce({ "text-decoration-line-through text-muted": m.deleted })
            }, P(m.resourceSpec || "-"), 3)
          ]),
          l("td", null, [
            l("div", pI, [
              m.deleted ? (T(), R(Se, { key: 1 }, [
                l("button", {
                  type: "button",
                  class: "btn btn-outline-success btn-sm",
                  onClick: (g) => u(m),
                  disabled: c(m),
                  title: "Restore"
                }, [
                  l("i", {
                    class: ce(`fas fa-fw ${c(m) ? "fa-spinner fa-spin" : "fa-rotate-left"}`)
                  }, null, 2)
                ], 8, mI),
                l("button", {
                  type: "button",
                  class: "btn btn-danger btn-sm",
                  onClick: (g) => d(m),
                  disabled: c(m),
                  title: "Delete forever"
                }, [
                  l("i", {
                    class: ce(`fas fa-fw ${c(m) ? "fa-spinner fa-spin" : "fa-trash-can"}`)
                  }, null, 2)
                ], 8, gI)
              ], 64)) : (T(), R("button", {
                key: 0,
                type: "button",
                class: "btn btn-outline-danger btn-sm",
                onClick: (g) => f(m),
                disabled: c(m),
                title: "Soft delete"
              }, [
                l("i", {
                  class: ce(`fas fa-fw ${c(m) ? "fa-spinner fa-spin" : "fa-trash"}`)
                }, null, 2)
              ], 8, hI))
            ])
          ])
        ], 2))), 128)),
        r.value.length === 0 ? (T(), R("tr", vI, h[0] || (h[0] = [
          l("td", {
            colspan: "4",
            class: "text-muted text-center"
          }, "No resources configured", -1)
        ]))) : ye("", !0)
      ])
    ]));
  }
}), yI = { class: "d-flex flex-column gap-4" }, bI = { class: "card" }, EI = { class: "card-body px-0 py-0" }, wI = { class: "p-2" }, AI = /* @__PURE__ */ Te({
  __name: "SetupPage",
  setup(e) {
    return (t, n) => (T(), R("div", yI, [
      ue($2),
      l("div", bI, [
        l("div", EI, [
          l("div", wI, [
            ue(dI)
          ]),
          ue(_I)
        ])
      ])
    ]));
  }
}), __ = /* @__PURE__ */ Xn("operations", () => {
  const e = H(!1), t = H(null), n = H(!0), s = H({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), o = H({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), r = (x) => {
    e.value = x;
  }, i = (x, k, O, N) => {
    t.value = {
      operation: x,
      success: k,
      message: O,
      data: N,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  }, a = () => {
    n.value = !n.value;
  }, c = (x) => {
    s.value = {
      visible: !0,
      archiveType: "selected",
      selectedMrns: x
    };
  }, f = () => {
    s.value = {
      visible: !0,
      archiveType: "all",
      selectedMrns: []
    };
  }, u = () => {
    s.value.visible = !1;
  }, d = (x) => {
    o.value = {
      visible: !0,
      archiveType: "selected",
      selectedMrns: x
    };
  }, p = () => {
    o.value = {
      visible: !0,
      archiveType: "all",
      selectedMrns: []
    };
  }, h = () => {
    o.value.visible = !1;
  }, m = j(() => s.value.visible), g = j(() => s.value.archiveType), v = j(() => s.value.selectedMrns), y = j(() => o.value.visible), b = j(() => o.value.archiveType), _ = j(() => o.value.selectedMrns);
  return {
    // State
    loading: e,
    lastOperation: t,
    showSummary: n,
    // Actions
    setLoading: r,
    recordOperation: i,
    toggleSummary: a,
    // Archive Modal
    archiveModalVisible: m,
    archiveModalType: g,
    archiveModalSelectedMrns: v,
    showArchiveModalSelected: c,
    showArchiveModalAll: f,
    hideArchiveModal: u,
    // Streaming Modal
    streamingModalVisible: y,
    streamingModalType: b,
    streamingModalSelectedMrns: _,
    showStreamingModalSelected: d,
    showStreamingModalAll: p,
    hideStreamingModal: h
  };
}), SI = { class: "mb-3" }, CI = { class: "d-flex flex-wrap gap-2 align-items-center" }, OI = {
  class: "btn-group",
  role: "group"
}, TI = ["disabled"], NI = { key: 0 }, DI = { key: 1 }, kI = ["disabled"], xI = /* @__PURE__ */ Te({
  __name: "MonitorToolbar",
  emits: ["addMrn"],
  setup(e) {
    const t = Qn(), n = __(), s = Zt(), o = j(() => t.selectedMrns.length === 0), r = j(() => t.operationLoading), i = j(() => t.loading), a = async () => {
      try {
        const d = await t.triggerFetchSelected();
        s.showSuccess(`Fetch triggered for ${d.mrns?.length || 0} MRN(s). ${d.tasks_created || 0} tasks created.`);
      } catch (d) {
        console.error("Failed to trigger fetch for selected MRNs:", d), s.showError("Failed to trigger fetch for selected MRNs");
      }
    }, c = async () => {
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
      const d = t.mrns.filter((p) => t.selectedMrns.includes(p.id)).map((p) => p.mrn);
      n.showStreamingModalSelected(d);
    }, u = () => {
      n.showStreamingModalAll();
    };
    return (d, p) => {
      const h = Qe("b-dropdown-item"), m = Qe("b-dropdown");
      return T(), R("div", SI, [
        l("div", CI, [
          l("div", OI, [
            l("button", {
              class: "btn btn-primary",
              onClick: p[0] || (p[0] = (g) => d.$emit("addMrn"))
            }, p[1] || (p[1] = [
              l("i", { class: "fas fa-plus-circle fa-fw" }, null, -1),
              U(" Add MRN ")
            ])),
            l("button", {
              class: "btn btn-outline-primary",
              onClick: a,
              disabled: o.value || r.value,
              title: "Trigger fetch for selected MRNs"
            }, [
              r.value ? (T(), R("span", DI, p[3] || (p[3] = [
                l("span", null, [
                  l("i", { class: "fas fa-spinner fa-spin fa-fw" }),
                  U(" Fetch Selected")
                ], -1)
              ]))) : (T(), R("span", NI, p[2] || (p[2] = [
                l("i", { class: "fas fa-cloud-arrow-down fa-fw" }, null, -1),
                U(" Fetch Selected")
              ])))
            ], 8, TI)
          ]),
          ue(m, {
            variant: "success",
            title: "Stream download archives"
          }, {
            button: fe(() => p[4] || (p[4] = [
              l("i", { class: "fas fa-download fa-fw me-1" }, null, -1),
              U("Download ")
            ])),
            default: fe(() => [
              ue(h, {
                onClick: f,
                class: ce({ disabled: o.value }),
                "prevent-close": !1
              }, {
                default: fe(() => p[5] || (p[5] = [
                  l("i", { class: "fas fa-download me-2" }, null, -1),
                  U("Download Selected Records ")
                ])),
                _: 1,
                __: [5]
              }, 8, ["class"]),
              ue(h, {
                onClick: u,
                "prevent-close": !1
              }, {
                default: fe(() => p[6] || (p[6] = [
                  l("i", { class: "fas fa-download me-2" }, null, -1),
                  U("Download All Records ")
                ])),
                _: 1,
                __: [6]
              })
            ]),
            _: 1
          }),
          l("button", {
            class: "btn btn-outline-secondary",
            onClick: c,
            disabled: i.value,
            title: "Refresh data"
          }, [
            l("i", {
              class: ce(["fas fa-rotate-right fa-fw", { "fa-spin": i.value }])
            }, null, 2)
          ], 8, kI)
        ])
      ]);
    };
  }
}), Eu = /* @__PURE__ */ Xn("streaming", () => {
  const e = H({
    active: !1,
    filename: "",
    startTime: null
  }), t = j(() => e.value.active), n = j(() => e.value.startTime ? Math.round((Date.now() - e.value.startTime.getTime()) / 1e3) : 0);
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
}), y_ = /* @__PURE__ */ Xn("resourceContent", () => {
  const e = Wo(), t = H(!1), n = H(null), s = H(null), o = async (m, g, v, y) => {
    try {
      t.value = !0;
      const b = await Ue.getResourceContent(m, g, v, y);
      if (b.data.success)
        return n.value = b.data, b.data;
      throw new Error(b.data.error || "Failed to fetch resource content");
    } catch (b) {
      throw e.addError(b, "resourceContentStore"), console.error("Failed to fetch resource content:", b), b;
    } finally {
      t.value = !1;
    }
  }, r = async (m, g, v, y) => await o(m, g, v, y);
  return {
    // State
    loading: t,
    currentContent: n,
    // Actions
    fetchResourceContent: o,
    loadResourceContent: r,
    showResourceContent: async (m, g, v, y) => (await r(m, g, v, y), s.value?.show()),
    setModalRef: (m) => {
      s.value = m;
    },
    hideModal: () => {
      s.value?.hide();
    },
    clearContent: () => {
      n.value = null;
    },
    copyToClipboard: async (m) => {
      try {
        if (navigator.clipboard && window.isSecureContext)
          return await navigator.clipboard.writeText(m), !0;
        {
          const g = document.createElement("textarea");
          g.value = m, g.style.position = "fixed", g.style.left = "-999999px", g.style.top = "-999999px", document.body.appendChild(g), g.focus(), g.select();
          const v = document.execCommand("copy");
          return document.body.removeChild(g), v;
        }
      } catch (g) {
        return console.error("Failed to copy to clipboard:", g), !1;
      }
    },
    // Getters
    getContentStats: () => {
      if (!n.value) return null;
      const { content: m, metadata: g } = n.value, v = m.split(`
`).length, y = m.length;
      return {
        lines: v,
        characters: y,
        size_human: g.preview_size_human,
        is_truncated: g.is_truncated,
        full_size_human: g.full_size_human
      };
    },
    isJsonContent: () => n.value?.metadata.is_valid_json || !1,
    getDisplayTitle: () => {
      if (!n.value) return "Resource Content";
      const { mrn: m, resource_name: g, repeat_instance: v } = n.value;
      return `${g} - ${m} (Instance ${v})`;
    }
  };
}), RI = { class: "align-middle" }, II = { class: "d-flex flex-column" }, MI = { class: "text-muted" }, PI = {
  key: 0,
  class: "d-block text-muted"
}, VI = {
  key: 0,
  class: "text-success"
}, LI = {
  key: 1,
  class: "text-muted"
}, FI = {
  key: 0,
  class: "text-danger"
}, BI = ["title"], $I = ["title"], jI = {
  key: 1,
  class: "text-muted"
}, UI = {
  class: "btn-group",
  role: "group"
}, HI = ["disabled"], WI = ["disabled"], KI = ["disabled"], zI = {
  key: 0,
  class: "table-warning"
}, qI = { colspan: "5" }, YI = { class: "p-2" }, XI = { class: "mb-0 mt-1" }, GI = /* @__PURE__ */ Te({
  __name: "MonitorResourceRow",
  props: {
    resource: {},
    mrn: {},
    recordId: {}
  },
  setup(e) {
    const t = e, n = Qn(), s = Eu(), o = Zt(), r = y_(), i = H(!1), a = H(!1), c = H(!1), f = (g) => {
      const v = "badge";
      switch (g) {
        case Me.Pending:
          return `${v} bg-warning text-dark`;
        case Me.Fetching:
          return `${v} bg-info text-dark`;
        case Me.Completed:
          return `${v} bg-success`;
        case Me.Failed:
          return `${v} bg-danger`;
        case Me.Outdated:
          return `${v} bg-secondary`;
        case Me.Deleted:
          return `${v} bg-dark`;
        default:
          return `${v} bg-secondary`;
      }
    }, u = (g) => {
      if (!g) return "-";
      try {
        const v = new Date(g);
        return v.toLocaleDateString() + " " + v.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
      } catch {
        return g;
      }
    }, d = (g) => g ? g.length > 50 ? g.substring(0, 50) + "..." : g : "-", p = async () => {
      try {
        a.value = !0, await n.retryFailedResource(
          t.mrn,
          t.resource.name,
          t.resource.repeat_instance
        );
      } catch (g) {
        console.error("Failed to retry resource:", g);
      } finally {
        a.value = !1;
      }
    }, h = async () => {
      try {
        c.value = !0, await r.showResourceContent(
          t.recordId,
          t.resource.name,
          t.resource.repeat_instance || 1
        );
      } catch (g) {
        console.error("Failed to load resource content:", g), o.showError("Failed to load resource content");
      } finally {
        c.value = !1;
      }
    }, m = async () => {
      try {
        a.value = !0;
        const g = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_"), v = `${t.mrn}_${t.resource.name}_${g}`;
        s.startStreaming(v), o.showInfo(`Started streaming download: ${v}`);
        const y = {
          mrns: [t.mrn],
          resource_types: [t.resource.name],
          archive_name: v
        }, b = await Ue.streamSelectedArchive([t.mrn], y), _ = new Blob([b.data]), x = window.URL.createObjectURL(_), k = document.createElement("a");
        k.href = x, k.download = `${v}.zip`, document.body.appendChild(k), k.click(), document.body.removeChild(k), window.URL.revokeObjectURL(x);
        const O = s.finishStreaming();
        o.showSuccess(`Download completed: ${v} (${O}s)`);
      } catch (g) {
        s.finishStreaming(), o.showError(`Streaming download failed: ${g.message}`), console.error("Failed to stream download resource:", g);
      } finally {
        a.value = !1;
      }
    };
    return (g, v) => (T(), R(Se, null, [
      l("tr", RI, [
        l("td", null, [
          l("div", II, [
            l("strong", null, P(g.resource.name), 1),
            l("small", MI, P(g.resource.mapping_type) + " | " + P(g.resource.resource_spec), 1)
          ])
        ]),
        l("td", null, [
          l("span", {
            class: ce(f(g.resource.status))
          }, P(g.resource.status), 3),
          g.resource.repeat_instance ? (T(), R("small", PI, " Instance #" + P(g.resource.repeat_instance), 1)) : ye("", !0)
        ]),
        l("td", null, [
          g.resource.fetch_date ? (T(), R("div", VI, [
            v[1] || (v[1] = l("i", { class: "fas fa-check-circle fa-fw" }, null, -1)),
            U(" " + P(u(g.resource.fetch_date)), 1)
          ])) : (T(), R("div", LI, "-"))
        ]),
        l("td", null, [
          g.resource.error_message ? (T(), R("div", FI, [
            v[2] || (v[2] = l("i", { class: "fas fa-exclamation-triangle fa-fw" }, null, -1)),
            l("span", {
              title: g.resource.error_message
            }, P(d(g.resource.error_message)), 9, BI),
            g.resource.error_message.length > 50 ? (T(), R("button", {
              key: 0,
              class: "btn btn-link btn-sm p-0 ms-1",
              onClick: v[0] || (v[0] = (y) => i.value = !i.value),
              title: i.value ? "Show less" : "Show more"
            }, [
              l("i", {
                class: ce(`fas fa-chevron-${i.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, $I)) : ye("", !0)
          ])) : (T(), R("div", jI, "-"))
        ]),
        l("td", null, [
          l("div", UI, [
            g.resource.status === "Failed" ? (T(), R("button", {
              key: 0,
              class: "btn btn-sm btn-warning",
              onClick: p,
              disabled: a.value,
              title: "Retry this resource"
            }, v[3] || (v[3] = [
              l("i", { class: "fas fa-rotate-right fa-fw" }, null, -1)
            ]), 8, HI)) : ye("", !0),
            g.resource.status === "Completed" ? (T(), R("button", {
              key: 1,
              class: "btn btn-sm btn-outline-primary",
              onClick: h,
              disabled: c.value,
              title: "View resource details"
            }, [
              l("i", {
                class: ce(`fas fa-fw ${c.value ? "fa-spinner fa-spin" : "fa-eye"}`)
              }, null, 2)
            ], 8, WI)) : ye("", !0),
            g.resource.status === "Completed" ? (T(), R("button", {
              key: 2,
              class: "btn btn-sm btn-success",
              onClick: m,
              disabled: a.value || ne(s).isStreamingActive,
              title: "Stream download this resource"
            }, v[4] || (v[4] = [
              l("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 8, KI)) : ye("", !0)
          ])
        ])
      ]),
      i.value && g.resource.error_message ? (T(), R("tr", zI, [
        l("td", qI, [
          l("div", YI, [
            v[5] || (v[5] = l("strong", null, "Error Details:", -1)),
            l("pre", XI, P(g.resource.error_message), 1)
          ])
        ])
      ])) : ye("", !0)
    ], 64));
  }
}), QI = { class: "align-middle" }, JI = ["checked"], ZI = {
  key: 0,
  class: "status-display-smart"
}, eM = ["title"], tM = {
  key: 1,
  class: "status-display-progress"
}, nM = {
  class: "progress position-relative",
  style: { height: "20px" }
}, sM = ["title"], oM = { class: "text-muted" }, rM = {
  key: 2,
  class: "status-display-badges"
}, iM = ["title"], aM = {
  key: 3,
  class: "status-display-legacy"
}, lM = ["title"], cM = {
  key: 0,
  class: "position-absolute bg-dark text-white p-2 rounded shadow-lg",
  style: { "z-index": "1000", top: "100%", left: "0", width: "250px" }
}, uM = { class: "small" }, dM = { class: "d-flex justify-content-between" }, fM = { class: "d-flex justify-content-between" }, pM = { class: "d-flex align-items-center" }, hM = ["aria-expanded"], mM = {
  class: "btn-group",
  role: "group"
}, gM = ["disabled"], vM = ["disabled", "title"], _M = ["disabled", "title"], yM = {
  colspan: "5",
  class: "p-0"
}, bM = { class: "ps-3" }, EM = { class: "table table-sm table-bordered mb-0" }, wM = /* @__PURE__ */ Te({
  __name: "MonitorTableRow",
  props: {
    item: {},
    selected: { type: Boolean }
  },
  setup(e) {
    const t = Qn(), n = Eu(), s = Zt(), o = e, r = H(!1), i = H(!1), a = H(!1), c = H("progress"), f = () => {
      r.value = !r.value;
    }, u = j(() => {
      const I = o.item.resources.filter((Y) => Y.status !== Me.Deleted), C = I.length, w = I.filter((Y) => Y.status === Me.Completed).length, D = I.filter((Y) => Y.status === Me.Failed).length, A = I.filter((Y) => Y.status === Me.Pending).length, F = I.filter((Y) => Y.status === Me.Fetching).length;
      let de = `${w}/${C} completed`;
      return D > 0 && (de += `, ${D} failed`), F > 0 && (de += `, ${F} fetching`), A > 0 && (de += `, ${A} pending`), de;
    }), d = j(() => t.getProgressBarConfig(o.item)), p = j(() => o.item.resources.some((I) => I.status === Me.Failed)), h = j(() => !p.value), m = j(() => {
      if (p.value) {
        const I = o.item.resources.filter((C) => C.status === Me.Failed).length;
        return `Retry ${I} failed resource${I > 1 ? "s" : ""} for this record`;
      } else
        return "No failed resources to retry";
    }), g = j(() => o.item.resources.some((I) => I.status === Me.Completed)), v = j(() => !g.value), y = j(() => {
      if (g.value) {
        const I = o.item.resources.filter((C) => C.status === Me.Completed).length;
        return `Stream download ${I} completed resource${I > 1 ? "s" : ""} for MRN ${o.item.mrn}`;
      } else
        return "No completed resources to stream";
    }), b = () => {
      const I = d.value;
      return I.segments.length === 0 ? "No resources" : `${I.segments.map((w) => `${w.status}: ${w.count}`).join(", ")} | ${Math.round(I.completion_percentage)}% complete`;
    }, _ = () => b() + " (hover for details)", x = () => {
      const I = t.getStatusForStyling(o.item);
      return `badge bg-${t.getStatusColor(I)}`;
    }, k = async () => {
      try {
        i.value = !0, await t.triggerFetchMrns([o.item.mrn]);
      } catch (I) {
        console.error("Failed to trigger fetch for MRN:", I);
      } finally {
        i.value = !1;
      }
    }, O = async () => {
      if (p.value)
        try {
          i.value = !0, await Ue.retryFailed({ record_ids: [o.item.id] }), await t.getProjectSummary();
        } catch (I) {
          console.error("Failed to retry failed resources:", I);
        } finally {
          i.value = !1;
        }
    }, N = async () => {
      if (g.value)
        try {
          i.value = !0;
          const I = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_"), C = `${o.item.mrn}_all_resources_${I}`;
          n.startStreaming(C), s.showInfo(`Started streaming download: ${C}`);
          const w = o.item.resources.filter((K) => K.status === Me.Completed).map((K) => K.name).filter((K, le, be) => be.indexOf(K) === le), D = {
            mrns: [o.item.mrn],
            resource_types: w,
            archive_name: C
          }, A = await Ue.streamSelectedArchive([o.item.mrn], D), F = new Blob([A.data]), de = window.URL.createObjectURL(F), Y = document.createElement("a");
          Y.href = de, Y.download = `${C}.zip`, document.body.appendChild(Y), Y.click(), document.body.removeChild(Y), window.URL.revokeObjectURL(de);
          const re = n.finishStreaming();
          s.showSuccess(`Download completed: ${C} (${re}s)`);
        } catch (I) {
          n.finishStreaming(), s.showError(`Streaming download failed: ${I.message}`), console.error("Failed to stream download MRN:", I);
        } finally {
          i.value = !1;
        }
    };
    return (I, C) => (T(), R(Se, null, [
      l("tr", QI, [
        l("td", null, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: I.selected,
            onChange: C[0] || (C[0] = (w) => ne(t).toggleSelection(I.item.id))
          }, null, 40, JI)
        ]),
        l("td", null, P(I.item.mrn), 1),
        l("td", null, [
          c.value === "smart" ? (T(), R("div", ZI, [
            l("span", {
              class: ce(x()),
              title: b()
            }, P(ne(t).getSmartStatusDisplay(I.item)), 11, eM)
          ])) : c.value === "progress" ? (T(), R("div", tM, [
            l("div", nM, [
              (T(!0), R(Se, null, Je(d.value.segments, (w) => (T(), R("div", {
                key: w.status,
                class: ce(`progress-bar bg-${w.color}`),
                style: Vt({ width: w.percentage + "%" }),
                title: `${w.status}: ${w.count} (${w.percentage}%)`
              }, null, 14, sM))), 128))
            ]),
            l("small", oM, P(Math.round(d.value.completion_percentage)) + "% complete", 1)
          ])) : c.value === "badges" ? (T(), R("div", rM, [
            (T(!0), R(Se, null, Je(d.value.segments, (w) => (T(), R("span", {
              key: w.status,
              class: ce(`badge bg-${w.color} me-1`),
              title: `${w.status}: ${w.count} resources`,
              style: { "font-size": "0.7em" }
            }, P(w.status.charAt(0).toUpperCase()) + ": " + P(w.count), 11, iM))), 128))
          ])) : (T(), R("div", aM, [
            l("span", {
              class: ce(x()),
              title: _(),
              onMouseenter: C[1] || (C[1] = (w) => a.value = !0),
              onMouseleave: C[2] || (C[2] = (w) => a.value = !1)
            }, P(ne(t).getSmartStatusDisplay(I.item)), 43, lM),
            a.value ? (T(), R("div", cM, [
              C[6] || (C[6] = l("div", { class: "fw-bold mb-1" }, "Status Breakdown", -1)),
              l("div", uM, [
                (T(!0), R(Se, null, Je(d.value.segments, (w) => (T(), R("div", {
                  key: w.status,
                  class: "d-flex justify-content-between"
                }, [
                  l("span", null, P(w.status) + ":", 1),
                  l("span", null, P(w.count) + " (" + P(w.percentage) + "%)", 1)
                ]))), 128)),
                C[5] || (C[5] = l("hr", { class: "my-1" }, null, -1)),
                l("div", dM, [
                  C[3] || (C[3] = l("span", null, "Total Resources:", -1)),
                  l("span", null, P(d.value.total_resources), 1)
                ]),
                l("div", fM, [
                  C[4] || (C[4] = l("span", null, "Completion:", -1)),
                  l("span", null, P(Math.round(d.value.completion_percentage)) + "%", 1)
                ])
              ])
            ])) : ye("", !0)
          ]))
        ]),
        l("td", null, [
          l("div", pM, [
            l("span", null, P(u.value), 1),
            l("button", {
              class: "btn btn-sm btn-light ms-2",
              onClick: f,
              "aria-expanded": r.value
            }, [
              l("i", {
                class: ce(`fas fa-chevron-${r.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, hM)
          ])
        ]),
        l("td", null, [
          l("div", mM, [
            l("button", {
              class: "btn btn-sm btn-primary",
              onClick: k,
              disabled: i.value,
              title: "Trigger fetch for this MRN"
            }, [
              i.value ? (T(), R(Se, { key: 1 }, [
                C[9] || (C[9] = l("i", { class: "fas fa-spinner fa-spin fa-fw" }, null, -1)),
                C[10] || (C[10] = U(" Fetch "))
              ], 64)) : (T(), R(Se, { key: 0 }, [
                C[7] || (C[7] = l("i", { class: "fas fa-cloud-arrow-down fa-fw" }, null, -1)),
                C[8] || (C[8] = U(" Fetch "))
              ], 64))
            ], 8, gM),
            l("button", {
              class: "btn btn-sm btn-warning",
              onClick: O,
              disabled: h.value || i.value,
              title: m.value
            }, [
              i.value ? (T(), R(Se, { key: 1 }, [
                C[13] || (C[13] = l("i", { class: "fas fa-spinner fa-spin fa-fw" }, null, -1)),
                C[14] || (C[14] = U(" Retry "))
              ], 64)) : (T(), R(Se, { key: 0 }, [
                C[11] || (C[11] = l("i", { class: "fas fa-redo fa-fw" }, null, -1)),
                C[12] || (C[12] = U(" Retry "))
              ], 64))
            ], 8, vM),
            l("button", {
              class: "btn btn-sm btn-success",
              disabled: v.value || i.value || ne(n).isStreamingActive,
              onClick: N,
              title: y.value
            }, C[15] || (C[15] = [
              l("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 8, _M)
          ])
        ])
      ]),
      nt(l("tr", null, [
        l("td", yM, [
          l("div", bM, [
            l("table", EM, [
              C[16] || (C[16] = l("thead", { class: "table-light" }, [
                l("tr", null, [
                  l("th", { scope: "col" }, "Resource"),
                  l("th", { scope: "col" }, "Status"),
                  l("th", { scope: "col" }, "Fetch Date"),
                  l("th", { scope: "col" }, "Error"),
                  l("th", { scope: "col" }, "Actions")
                ])
              ], -1)),
              l("tbody", null, [
                (T(!0), R(Se, null, Je(I.item.resources, (w) => (T(), et(GI, {
                  key: `${w.name}-${w.repeat_instance}`,
                  resource: w,
                  mrn: I.item.mrn,
                  recordId: I.item.id.toString()
                }, null, 8, ["resource", "mrn", "recordId"]))), 128))
              ])
            ])
          ])
        ])
      ], 512), [
        [wm, r.value]
      ])
    ], 64));
  }
}), AM = /* @__PURE__ */ fn(wM, [["__scopeId", "data-v-bc76bd81"]]), SM = {
  key: 0,
  class: "d-flex justify-content-center"
}, CM = {
  key: 1,
  class: "table table-bordered table-striped table-hover"
}, OM = { class: "table-light" }, TM = { scope: "col" }, NM = ["checked", "indeterminate"], DM = { key: 0 }, kM = /* @__PURE__ */ Te({
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
    const t = e, n = H(null);
    return Rt(() => t.indeterminate, (s) => {
      n.value && (n.value.indeterminate = s);
    }, { immediate: !0 }), (s, o) => (T(), R("div", null, [
      s.loading ? (T(), R("div", SM, o[1] || (o[1] = [
        l("div", {
          class: "spinner-border",
          role: "status"
        }, [
          l("span", { class: "visually-hidden" }, "Loading...")
        ], -1)
      ]))) : (T(), R("table", CM, [
        l("thead", OM, [
          l("tr", null, [
            l("th", TM, [
              l("input", {
                ref_key: "selectAllCheckbox",
                ref: n,
                class: "form-check-input",
                type: "checkbox",
                checked: s.allSelected,
                indeterminate: s.indeterminate,
                onChange: o[0] || (o[0] = (r) => s.$emit("toggle-select-all"))
              }, null, 40, NM)
            ]),
            o[2] || (o[2] = l("th", { scope: "col" }, "MRN", -1)),
            o[3] || (o[3] = l("th", { scope: "col" }, "Status", -1)),
            o[4] || (o[4] = l("th", { scope: "col" }, "Resources", -1)),
            o[5] || (o[5] = l("th", { scope: "col" }, "Actions", -1))
          ])
        ]),
        l("tbody", null, [
          s.items.length === 0 ? (T(), R("tr", DM, o[6] || (o[6] = [
            l("td", {
              colspan: "5",
              class: "text-center"
            }, "No MRNs to display.", -1)
          ]))) : (T(!0), R(Se, { key: 1 }, Je(s.items, (r) => (T(), et(AM, {
            key: r.id,
            item: r,
            selected: s.selectedMrns.includes(r.id)
          }, null, 8, ["item", "selected"]))), 128))
        ])
      ]))
    ]));
  }
}), xM = { class: "mb-3" }, RM = { class: "mt-2 small" }, IM = { key: 0 }, MM = { key: 1 }, PM = {
  key: 0,
  class: "text-danger"
}, VM = {
  key: 1,
  class: "text-muted"
}, LM = { class: "d-flex gap-2 justify-content-end" }, FM = ["onClick"], BM = ["onClick", "disabled"], $M = /* @__PURE__ */ Te({
  __name: "AddMrnModal",
  setup(e, { expose: t }) {
    const n = H(null), s = H(""), o = Qn(), r = j(() => o.analyzeMrnInput(s.value)), i = j(() => r.value.unique === 0 || r.value.overLimit), a = j(() => r.value.unique > 0 ? `Add ${r.value.unique}` : "Add"), c = async () => (s.value = "", await n.value?.show() ? s.value : null), f = (u) => {
      i.value || u(!0);
    };
    return t({ show: c }), (u, d) => {
      const p = Qe("b-modal");
      return T(), et(p, {
        ref_key: "addMrnModal",
        ref: n
      }, {
        title: fe(() => d[1] || (d[1] = [
          U("Add MRN")
        ])),
        footer: fe(({ hide: h }) => [
          l("div", LM, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (m) => h(!1)
            }, d[11] || (d[11] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              U("Cancel ")
            ]), 8, FM),
            l("button", {
              type: "button",
              class: "btn btn-sm btn-primary",
              onClick: (m) => f(h),
              disabled: i.value
            }, [
              d[12] || (d[12] = l("i", { class: "fas fa-plus fa-fw me-1" }, null, -1)),
              U(P(a.value), 1)
            ], 8, BM)
          ])
        ]),
        default: fe(() => [
          l("div", xM, [
            d[9] || (d[9] = l("label", {
              for: "mrn-input",
              class: "form-label"
            }, "MRN(s)", -1)),
            nt(l("textarea", {
              class: "form-control",
              id: "mrn-input",
              "onUpdate:modelValue": d[0] || (d[0] = (h) => s.value = h),
              rows: "6",
              placeholder: "Enter MRNs separated by commas, spaces, or new lines"
            }, null, 512), [
              [wo, s.value]
            ]),
            d[10] || (d[10] = l("small", { class: "text-muted d-block" }, "Examples: 12345, 67890 or one per line", -1)),
            l("div", RM, [
              l("div", null, [
                d[6] || (d[6] = U(" Parsed: ")),
                l("strong", null, P(r.value.unique), 1),
                d[7] || (d[7] = U(" unique ")),
                r.value.duplicates > 0 ? (T(), R("span", IM, [
                  d[2] || (d[2] = U("(")),
                  l("strong", null, P(r.value.duplicates), 1),
                  d[3] || (d[3] = U(" duplicates ignored)"))
                ])) : ye("", !0),
                r.value.empties > 0 ? (T(), R("span", MM, [
                  d[4] || (d[4] = U(", ")),
                  l("strong", null, P(r.value.empties), 1),
                  d[5] || (d[5] = U(" empty tokens"))
                ])) : ye("", !0)
              ]),
              r.value.overLimit ? (T(), R("div", PM, " Limit exceeded: " + P(r.value.unique) + " › " + P(r.value.limit) + ". Please reduce the list. ", 1)) : ye("", !0),
              r.value.sample.length ? (T(), R("div", VM, [
                d[8] || (d[8] = U(" Sample: ")),
                l("code", null, P(r.value.sample.join(", ")), 1)
              ])) : ye("", !0)
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), jM = { class: "p-0" }, UM = {
  key: 0,
  class: "d-flex justify-content-center align-items-center py-5"
}, HM = {
  key: 1,
  class: "h-100"
}, WM = { class: "bg-light border-bottom p-3" }, KM = { class: "row align-items-center" }, zM = { class: "col-md-8" }, qM = { class: "d-flex flex-wrap gap-3" }, YM = { class: "d-flex align-items-center" }, XM = { class: "text-muted" }, GM = { class: "d-flex align-items-center" }, QM = { class: "text-muted" }, JM = {
  key: 0,
  class: "text-warning"
}, ZM = {
  key: 0,
  class: "d-flex align-items-center"
}, eP = { class: "col-md-4 text-end" }, tP = ["disabled"], nP = {
  key: 0,
  class: "alert alert-warning mt-2 mb-0 py-2"
}, sP = { class: "content-display" }, oP = {
  key: 2,
  class: "p-4 text-center"
}, rP = ["onClick"], iP = /* @__PURE__ */ Te({
  __name: "ResourceContentModal",
  setup(e) {
    const t = y_(), n = Zt(), s = H(null), o = H(!1), r = H(!1), i = j(() => t.getContentStats()), a = () => {
    };
    Tt(() => {
      s.value && t.setModalRef(s.value);
    });
    const c = async () => {
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
      const d = Qe("b-modal");
      return T(), et(d, {
        ref_key: "resourceContentModal",
        ref: s,
        size: "xl",
        onHidden: a
      }, {
        title: fe(() => [
          u[0] || (u[0] = l("i", { class: "fas fa-file-alt fa-fw me-2" }, null, -1)),
          U(" " + P(ne(t).getDisplayTitle()), 1)
        ]),
        footer: fe(({ hide: p }) => [
          l("button", {
            type: "button",
            class: "btn btn-secondary",
            onClick: (h) => p()
          }, " Close ", 8, rP)
        ]),
        default: fe(() => [
          l("div", jM, [
            ne(t).loading ? (T(), R("div", UM, u[1] || (u[1] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading content...")
              ], -1),
              l("span", { class: "ms-3" }, "Loading resource content...", -1)
            ]))) : ne(t).currentContent ? (T(), R("div", HM, [
              l("div", WM, [
                l("div", KM, [
                  l("div", zM, [
                    l("div", qM, [
                      l("div", YM, [
                        u[2] || (u[2] = l("i", { class: "fas fa-info-circle text-info me-1" }, null, -1)),
                        l("small", XM, P(i.value?.lines || 0) + " lines, " + P(i.value?.characters || 0) + " characters ", 1)
                      ]),
                      l("div", GM, [
                        u[3] || (u[3] = l("i", { class: "fas fa-hdd text-secondary me-1" }, null, -1)),
                        l("small", QM, [
                          U(P(i.value?.size_human) + " ", 1),
                          i.value?.is_truncated ? (T(), R("span", JM, " of " + P(i.value?.full_size_human) + " (truncated) ", 1)) : ye("", !0)
                        ])
                      ]),
                      ne(t).isJsonContent() ? (T(), R("div", ZM, u[4] || (u[4] = [
                        l("i", { class: "fas fa-check-circle text-success me-1" }, null, -1),
                        l("small", { class: "text-muted" }, "Valid JSON", -1)
                      ]))) : ye("", !0)
                    ])
                  ]),
                  l("div", eP, [
                    l("button", {
                      class: "btn btn-outline-secondary btn-sm",
                      onClick: c,
                      disabled: o.value,
                      title: "Copy content to clipboard"
                    }, [
                      l("i", {
                        class: ce(`fas ${o.value ? "fa-spinner fa-spin" : r.value ? "fa-check" : "fa-copy"} fa-fw`)
                      }, null, 2),
                      U(" " + P(o.value ? "Copying..." : r.value ? "Copied!" : "Copy"), 1)
                    ], 8, tP)
                  ])
                ]),
                i.value?.is_truncated ? (T(), R("div", nP, [
                  u[5] || (u[5] = l("i", { class: "fas fa-exclamation-triangle me-2" }, null, -1)),
                  u[6] || (u[6] = l("strong", null, "Content Truncated:", -1)),
                  U(" This file is " + P(i.value.full_size_human) + " but only the first " + P(i.value.size_human) + " are shown for performance. The full content is preserved in the system. ", 1)
                ])) : ye("", !0)
              ]),
              l("div", sP, [
                l("pre", {
                  class: ce(["content-pre", { "json-content": ne(t).isJsonContent() }])
                }, [
                  l("code", null, P(ne(t).currentContent.content), 1)
                ], 2)
              ])
            ])) : (T(), R("div", oP, u[7] || (u[7] = [
              l("div", { class: "alert alert-danger" }, [
                l("i", { class: "fas fa-exclamation-circle me-2" }),
                U(" No content available or failed to load. ")
              ], -1)
            ])))
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), aP = /* @__PURE__ */ fn(iP, [["__scopeId", "data-v-8148176a"]]), lP = { class: "mb-3" }, cP = ["placeholder"], uP = { class: "mb-3" }, dP = {
  key: 0,
  class: "text-center text-muted py-3"
}, fP = {
  key: 1,
  class: "resource-type-list"
}, pP = ["value", "id", "disabled"], hP = ["for"], mP = { class: "mb-3" }, gP = { class: "form-check" }, vP = { class: "form-check" }, _P = { class: "d-flex align-items-center mb-2" }, yP = { key: 0 }, bP = { class: "mb-2" }, EP = { class: "small text-muted" }, wP = { key: 1 }, AP = { class: "small text-muted" }, SP = { key: 0 }, CP = { key: 1 }, OP = { class: "d-flex gap-2 justify-content-end" }, TP = ["onClick"], NP = ["onClick", "disabled"], DP = /* @__PURE__ */ Te({
  __name: "ArchiveOptionsModal",
  props: {
    selectedMrns: { default: () => [] },
    archiveType: {},
    estimatedResources: { default: 0 }
  },
  emits: ["create"],
  setup(e, { expose: t, emit: n }) {
    const s = e, o = Qn(), r = n, i = H(null), a = H({
      archive_name: "",
      resource_types: [],
      background_mode: !1
    }), c = j(() => {
      const g = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
      return (s.archiveType === "selected" ? o.mrns.filter((b) => s.selectedMrns.includes(b.mrn)) : o.mrns).forEach((b) => {
        b.status_summary ? Object.entries(b.status_summary.resource_type_statuses).forEach(([_, x]) => {
          g.add(_), x.is_archivable && v.add(_);
        }) : b.resources.forEach((_) => {
          _.status !== "Deleted" && (g.add(_.name), _.status === "Completed" && v.add(_.name));
        });
      }), Array.from(g).sort().map((b) => ({
        name: b,
        isAvailable: v.has(b)
      }));
    }), f = j(() => {
      const g = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_");
      return `fhir_archive_${s.archiveType === "selected" ? "selected" : "all"}_${g}`;
    }), u = j(() => {
      const g = a.value.resource_types || [], v = s.archiveType === "selected" ? o.mrns.filter((b) => s.selectedMrns.includes(b.mrn)) : o.mrns;
      let y = 0;
      return v.forEach((b) => {
        b.status_summary ? Object.entries(b.status_summary.resource_type_statuses).forEach(([_, x]) => {
          g.length === 0 ? x.is_archivable && (y += x.completed_count) : g.includes(_) && x.is_archivable && (y += x.completed_count);
        }) : b.resources.forEach((_) => {
          _.status === "Completed" && (g.length === 0 || g.includes(_.name)) && (y += 1);
        });
      }), y;
    }), d = j(() => {
      const g = c.value.filter((y) => y.isAvailable), v = c.value.length;
      return {
        availableTypes: g.length,
        totalTypes: v
      };
    }), p = j(() => !(a.value.archive_name && !/^[a-zA-Z0-9_-]+$/.test(a.value.archive_name.trim()) || s.archiveType === "selected" && s.selectedMrns.length === 0)), h = async () => (a.value = {
      archive_name: "",
      resource_types: [],
      background_mode: !1
      // Will be calculated dynamically
    }, a.value.background_mode = u.value > 50, await i.value?.show() ?? !1), m = (g) => {
      if (!p.value) return;
      const v = { ...a.value };
      v.archive_name && (v.archive_name = v.archive_name.trim()), v.resource_types && v.resource_types.length === 0 && delete v.resource_types, r("create", v, s.archiveType, s.selectedMrns), g(!0);
    };
    return t({ show: h }), (g, v) => {
      const y = Qe("b-modal");
      return T(), et(y, {
        ref_key: "archiveOptionsModal",
        ref: i
      }, {
        title: fe(() => v[4] || (v[4] = [
          U("Archive Options")
        ])),
        footer: fe(({ hide: b }) => [
          l("div", OP, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (_) => b(!1)
            }, v[16] || (v[16] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              U("Cancel ")
            ]), 8, TP),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (_) => m(b),
              disabled: !p.value
            }, v[17] || (v[17] = [
              l("i", { class: "fas fa-archive fa-fw me-1" }, null, -1),
              U("Create Archive ")
            ]), 8, NP)
          ])
        ]),
        default: fe(() => [
          l("div", null, [
            l("div", lP, [
              v[5] || (v[5] = l("label", {
                for: "archive-name",
                class: "form-label"
              }, "Archive Name", -1)),
              nt(l("input", {
                type: "text",
                class: "form-control",
                id: "archive-name",
                "onUpdate:modelValue": v[0] || (v[0] = (b) => a.value.archive_name = b),
                placeholder: f.value,
                maxlength: "100"
              }, null, 8, cP), [
                [wo, a.value.archive_name]
              ]),
              v[6] || (v[6] = l("div", { class: "form-text" }, "Optional custom name for the archive file (without extension)", -1))
            ]),
            l("div", uP, [
              v[8] || (v[8] = l("label", { class: "form-label" }, "Resource Types", -1)),
              v[9] || (v[9] = l("div", { class: "form-text mb-2" }, "Select which resource types to include", -1)),
              c.value.length === 0 ? (T(), R("div", dP, v[7] || (v[7] = [
                l("i", { class: "fas fa-info-circle me-2" }, null, -1),
                U(" No resource types found ")
              ]))) : (T(), R("div", fP, [
                (T(!0), R(Se, null, Je(c.value, (b) => (T(), R("div", {
                  class: "form-check",
                  key: b.name
                }, [
                  nt(l("input", {
                    class: "form-check-input",
                    type: "checkbox",
                    value: b.name,
                    "onUpdate:modelValue": v[1] || (v[1] = (_) => a.value.resource_types = _),
                    id: `resource-${b.name}`,
                    disabled: !b.isAvailable
                  }, null, 8, pP), [
                    [DE, a.value.resource_types]
                  ]),
                  l("label", {
                    class: "form-check-label",
                    for: `resource-${b.name}`
                  }, P(b.name), 9, hP)
                ]))), 128))
              ]))
            ]),
            l("div", mP, [
              v[12] || (v[12] = l("label", { class: "form-label" }, "Processing Mode", -1)),
              l("div", gP, [
                nt(l("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "immediate-mode",
                  value: !1,
                  "onUpdate:modelValue": v[2] || (v[2] = (b) => a.value.background_mode = b)
                }, null, 512), [
                  [Ao, a.value.background_mode]
                ]),
                v[10] || (v[10] = l("label", {
                  class: "form-check-label",
                  for: "immediate-mode"
                }, [
                  l("strong", null, "Immediate Processing"),
                  l("div", { class: "small text-muted" }, "Process archive immediately (recommended for small selections)")
                ], -1))
              ]),
              l("div", vP, [
                nt(l("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "background-mode",
                  value: !0,
                  "onUpdate:modelValue": v[3] || (v[3] = (b) => a.value.background_mode = b)
                }, null, 512), [
                  [Ao, a.value.background_mode]
                ]),
                v[11] || (v[11] = l("label", {
                  class: "form-check-label",
                  for: "background-mode"
                }, [
                  l("strong", null, "Background Processing"),
                  l("div", { class: "small text-muted" }, "Process archive in background (recommended for large collections)")
                ], -1))
              ])
            ]),
            l("div", {
              class: ce(["alert", u.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              l("div", _P, [
                l("i", {
                  class: ce([u.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                v[13] || (v[13] = l("strong", null, "Archive Summary", -1))
              ]),
              u.value > 0 ? (T(), R("div", yP, [
                l("div", bP, [
                  l("strong", null, P(u.value), 1),
                  v[14] || (v[14] = U(" completed resources will be included "))
                ]),
                l("div", EP, P(d.value.availableTypes) + " of " + P(d.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (T(), R("div", wP, [
                v[15] || (v[15] = l("div", { class: "mb-1" }, [
                  l("strong", null, "No resources available for archiving")
                ], -1)),
                l("div", AP, [
                  d.value.totalTypes === 0 ? (T(), R("span", SP, " No resource types found ")) : (T(), R("span", CP, P(d.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), kP = { key: 0 }, xP = { key: 1 }, RP = { class: "row" }, IP = { class: "col-md-6" }, MP = { class: "card" }, PP = { class: "card-body" }, VP = { class: "list-unstyled mb-0" }, LP = { key: 0 }, FP = { class: "col-md-6" }, BP = { class: "card" }, $P = { class: "card-body" }, jP = { key: 0 }, UP = { key: 1 }, HP = { key: 2 }, WP = { class: "alert alert-danger" }, KP = { class: "d-flex gap-2 justify-content-end" }, zP = ["onClick"], qP = ["onClick"], YP = ["onClick"], XP = /* @__PURE__ */ Te({
  __name: "ArchiveCreationModal",
  setup(e, { expose: t }) {
    const n = H(null), s = H(null), o = (a) => {
      s.value = a, n.value?.show();
    }, r = () => {
      if (s.value?.download_url) {
        const a = document.createElement("a");
        a.href = s.value.download_url, a.download = `archive_${s.value.archive_id}.zip`, document.body.appendChild(a), a.click(), document.body.removeChild(a);
      }
    }, i = (a) => {
      if (a === 0) return "0 Bytes";
      const c = 1024, f = ["Bytes", "KB", "MB", "GB"], u = Math.floor(Math.log(a) / Math.log(c));
      return parseFloat((a / Math.pow(c, u)).toFixed(2)) + " " + f[u];
    };
    return t({ show: o }), (a, c) => {
      const f = Qe("b-modal");
      return T(), et(f, {
        ref_key: "archiveCreationModal",
        ref: n,
        size: "lg",
        "hide-footer": ""
      }, {
        title: fe(() => c[0] || (c[0] = [
          U("Archive Creation")
        ])),
        footer: fe(({ hide: u }) => [
          l("div", KP, [
            s.value ? s.value.success ? (T(), R(Se, { key: 1 }, [
              s.value.processing_mode === "immediate" && s.value.download_url ? (T(), R("button", {
                key: 0,
                type: "button",
                class: "btn btn-sm btn-primary",
                onClick: r
              }, c[14] || (c[14] = [
                l("i", { class: "fas fa-download fa-fw me-1" }, null, -1),
                U("Download Now ")
              ]))) : ye("", !0),
              l("button", {
                type: "button",
                class: "btn btn-sm btn-secondary",
                onClick: (d) => u(!0)
              }, c[15] || (c[15] = [
                l("i", { class: "fas fa-check fa-fw me-1" }, null, -1),
                U("Done ")
              ]), 8, qP)
            ], 64)) : (T(), R("button", {
              key: 2,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[16] || (c[16] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              U("Close ")
            ]), 8, YP)) : (T(), R("button", {
              key: 0,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[13] || (c[13] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              U("Cancel ")
            ]), 8, zP))
          ])
        ]),
        default: fe(() => [
          s.value ? s.value.success ? (T(), R("div", xP, [
            c[10] || (c[10] = l("div", { class: "text-center mb-4" }, [
              l("i", {
                class: "fas fa-check-circle text-success",
                style: { "font-size": "3rem" }
              }),
              l("h6", { class: "mt-3 mb-0" }, "Archive Created Successfully")
            ], -1)),
            l("div", RP, [
              l("div", IP, [
                l("div", MP, [
                  l("div", PP, [
                    c[6] || (c[6] = l("h6", { class: "card-title" }, "Archive Details", -1)),
                    l("ul", VP, [
                      l("li", null, [
                        c[2] || (c[2] = l("strong", null, "Archive ID:", -1)),
                        U(" " + P(s.value.archive_id), 1)
                      ]),
                      l("li", null, [
                        c[3] || (c[3] = l("strong", null, "Resources:", -1)),
                        U(" " + P(s.value.total_resources), 1)
                      ]),
                      s.value.file_size ? (T(), R("li", LP, [
                        c[4] || (c[4] = l("strong", null, "Size:", -1)),
                        U(" " + P(i(s.value.file_size)), 1)
                      ])) : ye("", !0),
                      l("li", null, [
                        c[5] || (c[5] = l("strong", null, "Mode:", -1)),
                        U(" " + P(s.value.processing_mode), 1)
                      ])
                    ])
                  ])
                ])
              ]),
              l("div", FP, [
                l("div", BP, [
                  l("div", $P, [
                    c[9] || (c[9] = l("h6", { class: "card-title" }, "Status", -1)),
                    s.value.processing_mode === "immediate" ? (T(), R("div", jP, c[7] || (c[7] = [
                      l("span", { class: "badge bg-success" }, [
                        l("i", { class: "fas fa-check me-1" }),
                        U("Ready for Download ")
                      ], -1),
                      l("p", { class: "mt-2 mb-0 small text-muted" }, "Archive is ready for immediate download.", -1)
                    ]))) : (T(), R("div", UP, c[8] || (c[8] = [
                      l("span", { class: "badge bg-info" }, [
                        l("i", { class: "fas fa-clock me-1" }),
                        U("Processing in Background ")
                      ], -1),
                      l("p", { class: "mt-2 mb-0 small text-muted" }, "Archive is being processed. You'll be able to download it when complete.", -1)
                    ])))
                  ])
                ])
              ])
            ])
          ])) : (T(), R("div", HP, [
            c[12] || (c[12] = l("div", { class: "text-center mb-4" }, [
              l("i", {
                class: "fas fa-exclamation-triangle text-danger",
                style: { "font-size": "3rem" }
              }),
              l("h6", { class: "mt-3 mb-0" }, "Archive Creation Failed")
            ], -1)),
            l("div", WP, [
              c[11] || (c[11] = l("strong", null, "Error:", -1)),
              U(" " + P(s.value.message), 1)
            ])
          ])) : (T(), R("div", kP, c[1] || (c[1] = [
            l("div", { class: "text-center" }, [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Creating archive...")
              ]),
              l("p", { class: "mt-3 mb-0" }, "Creating archive, please wait...")
            ], -1)
          ])))
        ]),
        _: 1
      }, 512);
    };
  }
}), GP = { class: "mb-3" }, QP = ["for"], JP = ["id", "value", "placeholder"], ZP = {
  key: 0,
  class: "invalid-feedback"
}, eV = {
  key: 1,
  class: "form-text"
}, tV = /* @__PURE__ */ Te({
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
    const t = e, n = j(() => t.errorMessage && t.errorMessage.trim().length > 0);
    return (s, o) => (T(), R("div", GP, [
      l("label", {
        for: s.inputId,
        class: "form-label"
      }, "Archive Name", 8, QP),
      l("input", {
        type: "text",
        class: ce(["form-control", { "is-invalid": n.value }]),
        id: s.inputId,
        value: s.modelValue,
        onInput: o[0] || (o[0] = (r) => s.$emit("update:modelValue", r.target.value)),
        placeholder: s.placeholder,
        maxlength: "100"
      }, null, 42, JP),
      n.value ? (T(), R("div", ZP, P(s.errorMessage), 1)) : ye("", !0),
      s.showHelp ? (T(), R("div", eV, P(s.helpText), 1)) : ye("", !0)
    ]));
  }
}), nV = { class: "mb-3" }, sV = {
  key: 0,
  class: "text-center text-muted py-3"
}, oV = {
  key: 1,
  class: "resource-type-list"
}, rV = {
  key: 0,
  class: "form-check mb-2"
}, iV = ["checked", "indeterminate"], aV = ["value", "checked", "id", "disabled"], lV = ["for"], cV = /* @__PURE__ */ Te({
  __name: "ResourceTypesSelector",
  props: {
    selectedTypes: {},
    availableTypes: {},
    showSelectAll: { type: Boolean, default: !0 }
  },
  emits: ["update:selectedTypes"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = H(null), r = j(() => {
      const c = n.availableTypes.filter((u) => u.isAvailable).map((u) => u.name);
      if (c.length === 0)
        return { checked: !1, indeterminate: !1 };
      const f = c.filter(
        (u) => n.selectedTypes.includes(u)
      );
      return f.length === 0 ? { checked: !1, indeterminate: !1 } : f.length === c.length ? { checked: !0, indeterminate: !1 } : { checked: !1, indeterminate: !0 };
    });
    Rt(r, (c) => {
      Ks(() => {
        o.value && (o.value.indeterminate = c.indeterminate);
      });
    }, { immediate: !0 });
    const i = (c) => {
      if (c.target.checked || r.value.indeterminate) {
        const u = n.availableTypes.filter((d) => d.isAvailable).map((d) => d.name);
        s("update:selectedTypes", u);
      } else
        s("update:selectedTypes", []);
    }, a = (c) => {
      const f = c.target, u = f.value;
      let d = [...n.selectedTypes];
      f.checked ? d.includes(u) || d.push(u) : d = d.filter((p) => p !== u), s("update:selectedTypes", d);
    };
    return Tt(() => {
      if (n.selectedTypes.length === 0 && n.availableTypes.length > 0) {
        const c = n.availableTypes.filter((f) => f.isAvailable).map((f) => f.name);
        c.length > 0 && s("update:selectedTypes", c);
      }
    }), (c, f) => (T(), R("div", nV, [
      f[2] || (f[2] = l("label", { class: "form-label" }, "Resource Types", -1)),
      f[3] || (f[3] = l("div", { class: "form-text mb-2" }, [
        U(" Select which resource types to include "),
        l("br"),
        l("small", { class: "text-muted" }, "Note: No selection will download all available resources")
      ], -1)),
      c.availableTypes.length === 0 ? (T(), R("div", sV, f[0] || (f[0] = [
        l("i", { class: "fas fa-info-circle me-2" }, null, -1),
        U(" No resource types found ")
      ]))) : (T(), R("div", oV, [
        c.showSelectAll ? (T(), R("div", rV, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: r.value.checked,
            indeterminate: r.value.indeterminate,
            onChange: i,
            id: "select-all-types",
            ref_key: "selectAllCheckbox",
            ref: o
          }, null, 40, iV),
          f[1] || (f[1] = l("label", {
            class: "form-check-label fw-bold",
            for: "select-all-types"
          }, " Select All ", -1))
        ])) : ye("", !0),
        (T(!0), R(Se, null, Je(c.availableTypes, (u) => (T(), R("div", {
          class: "form-check",
          key: u.name
        }, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            value: u.name,
            checked: c.selectedTypes.includes(u.name),
            onChange: a,
            id: `resource-${u.name}`,
            disabled: !u.isAvailable
          }, null, 40, aV),
          l("label", {
            class: "form-check-label",
            for: `resource-${u.name}`
          }, P(u.name), 9, lV)
        ]))), 128))
      ]))
    ]));
  }
}), uV = { class: "mb-3" }, dV = { class: "bg-light p-3 rounded" }, fV = { key: 0 }, pV = { class: "small text-muted" }, hV = { key: 0 }, mV = { key: 1 }, gV = { class: "d-flex align-items-center mb-2" }, vV = { key: 0 }, _V = { class: "mb-2" }, yV = { class: "small text-muted" }, bV = { key: 1 }, EV = { class: "small text-muted" }, wV = { key: 0 }, AV = { key: 1 }, SV = { class: "d-flex gap-2 justify-content-end" }, CV = ["onClick"], OV = ["onClick", "disabled"], TV = /* @__PURE__ */ Te({
  __name: "StreamingArchiveModal",
  props: {
    selectedMrns: { default: () => [] },
    archiveType: {}
  },
  setup(e, { expose: t }) {
    const n = e, s = Qn(), o = Eu(), r = Zt(), i = H(null), a = H({
      mrns: [],
      archive_name: "",
      resource_types: []
    }), c = j(() => {
      const b = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
      return (n.archiveType === "selected" ? s.mrns.filter((k) => n.selectedMrns.includes(k.mrn)) : s.mrns).forEach((k) => {
        k.status_summary ? Object.entries(k.status_summary.resource_type_statuses).forEach(([O, N]) => {
          b.add(O), N.is_archivable && _.add(O);
        }) : k.resources.forEach((O) => {
          O.status !== "Deleted" && (b.add(O.name), O.status === "Completed" && _.add(O.name));
        });
      }), Array.from(b).sort().map((k) => ({
        name: k,
        isAvailable: _.has(k)
      }));
    }), f = j(() => {
      const b = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_");
      return `streaming_archive_${n.archiveType === "selected" ? "selected" : "all"}_${b}`;
    }), u = j(() => {
      const b = a.value.resource_types || [], _ = n.archiveType === "selected" ? s.mrns.filter((k) => n.selectedMrns.includes(k.mrn)) : s.mrns;
      let x = 0;
      return _.forEach((k) => {
        k.status_summary ? Object.entries(k.status_summary.resource_type_statuses).forEach(([O, N]) => {
          b.length === 0 ? N.is_archivable && (x += N.completed_count) : b.includes(O) && N.is_archivable && (x += N.completed_count);
        }) : k.resources.forEach((O) => {
          O.status === "Completed" && (b.length === 0 || b.includes(O.name)) && (x += 1);
        });
      }), x;
    }), d = j(() => {
      const b = c.value.filter((x) => x.isAvailable), _ = c.value.length;
      return {
        availableTypes: b.length,
        totalTypes: _
      };
    }), p = j(() => {
      if (!a.value.archive_name)
        return "";
      const b = a.value.archive_name.trim();
      return b.length === 0 || /^[a-zA-Z0-9_-]+$/.test(b) ? "" : "Archive name contains invalid characters. Only letters, numbers, hyphens, and underscores are allowed.";
    }), h = j(() => !(p.value || n.archiveType === "selected" && n.selectedMrns.length === 0)), m = (b) => {
      a.value.resource_types = b;
    }, g = async () => (a.value = {
      mrns: n.archiveType === "selected" ? n.selectedMrns : [],
      archive_name: "",
      resource_types: []
    }, await i.value?.show() ?? !1), v = () => a.value.archive_name || f.value, y = async (b) => {
      if (!h.value) return;
      const _ = v();
      try {
        o.startStreaming(_), r.showInfo(`Started streaming download: ${_}`), b(!0);
        const x = {
          ...a.value,
          mrns: n.archiveType === "selected" ? n.selectedMrns : []
        };
        x.archive_name || delete x.archive_name, x.resource_types?.length || delete x.resource_types;
        let k;
        n.archiveType === "selected" ? k = await Ue.streamSelectedArchive(n.selectedMrns, x) : k = await Ue.streamAllArchive(x);
        const O = new Blob([k.data]), N = window.URL.createObjectURL(O), I = document.createElement("a");
        I.href = N, I.download = `${_}.zip`, document.body.appendChild(I), I.click(), document.body.removeChild(I), window.URL.revokeObjectURL(N);
        const C = o.finishStreaming();
        r.showSuccess(`Download completed: ${_} (${C}s)`);
      } catch (x) {
        o.finishStreaming(), r.showError(`Streaming download failed: ${x.message}`);
      }
    };
    return t({ show: g }), (b, _) => {
      const x = Qe("b-modal");
      return T(), et(x, {
        ref_key: "streamingArchiveModal",
        ref: i,
        size: "lg"
      }, {
        title: fe(() => _[1] || (_[1] = [
          l("i", { class: "fas fa-download text-primary me-2" }, null, -1),
          U(" Archive Download ")
        ])),
        footer: fe(({ hide: k }) => [
          l("div", SV, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (O) => k(!1)
            }, _[9] || (_[9] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              U("Cancel ")
            ]), 8, CV),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (O) => y(k),
              disabled: !h.value || ne(o).isStreamingActive
            }, [
              _[10] || (_[10] = l("i", { class: "fas fa-download fa-fw me-1" }, null, -1)),
              U(" " + P(ne(o).isStreamingActive ? "Downloading..." : "Download"), 1)
            ], 8, OV)
          ])
        ]),
        default: fe(() => [
          l("div", null, [
            _[8] || (_[8] = l("div", { class: "alert alert-info mb-4" }, [
              l("i", { class: "fas fa-info-circle me-2" }),
              l("strong", null, "Download"),
              l("div", { class: "small" }, " Your archive will be generated and downloaded immediately without storing on the server. ")
            ], -1)),
            ue(tV, {
              modelValue: a.value.archive_name,
              "onUpdate:modelValue": _[0] || (_[0] = (k) => a.value.archive_name = k),
              placeholder: f.value,
              "show-help": !0,
              "help-text": "Archive will be downloaded immediately as [name].zip",
              "input-id": "streaming-archive-name",
              "error-message": p.value
            }, null, 8, ["modelValue", "placeholder", "error-message"]),
            ue(cV, {
              "selected-types": a.value.resource_types || [],
              "available-types": c.value,
              "onUpdate:selectedTypes": m,
              "show-select-all": !0
            }, null, 8, ["selected-types", "available-types"]),
            l("div", uV, [
              _[4] || (_[4] = l("label", { class: "form-label" }, "Selected Records", -1)),
              l("div", dV, [
                b.archiveType === "selected" ? (T(), R("div", fV, [
                  l("strong", null, P(b.selectedMrns.length), 1),
                  _[2] || (_[2] = U(" selected MRNs ")),
                  l("div", pV, [
                    U(P(b.selectedMrns.slice(0, 3).join(", ")) + " ", 1),
                    b.selectedMrns.length > 3 ? (T(), R("span", hV, " and " + P(b.selectedMrns.length - 3) + " more... ", 1)) : ye("", !0)
                  ])
                ])) : (T(), R("div", mV, _[3] || (_[3] = [
                  l("strong", null, "All project records", -1),
                  l("div", { class: "small text-muted" }, "Complete project dataset", -1)
                ])))
              ])
            ]),
            l("div", {
              class: ce(["alert", u.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              l("div", gV, [
                l("i", {
                  class: ce([u.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                _[5] || (_[5] = l("strong", null, "Streaming Summary", -1))
              ]),
              u.value > 0 ? (T(), R("div", vV, [
                l("div", _V, [
                  l("strong", null, P(u.value), 1),
                  _[6] || (_[6] = U(" completed resources will be streamed "))
                ]),
                l("div", yV, P(d.value.availableTypes) + " of " + P(d.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (T(), R("div", bV, [
                _[7] || (_[7] = l("div", { class: "mb-1" }, [
                  l("strong", null, "No resources available for streaming")
                ], -1)),
                l("div", EV, [
                  d.value.totalTypes === 0 ? (T(), R("span", wV, " No resource types found ")) : (T(), R("span", AV, P(d.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), NV = {
  key: 0,
  class: "alert alert-warning"
}, DV = { class: "table-responsive" }, kV = { class: "table table-sm align-middle" }, xV = { class: "d-flex justify-content-end" }, RV = ["onClick"], IV = /* @__PURE__ */ Te({
  __name: "BulkMrnErrorsModal",
  setup(e, { expose: t }) {
    const n = H(null), s = H([]), o = H(null);
    return t({ show: (i, a, c) => {
      s.value = i, o.value = {
        added: a ?? 0,
        failed: c ?? i.length
      }, n.value?.show();
    } }), (i, a) => {
      const c = Qe("b-modal");
      return T(), et(c, {
        ref_key: "errorsModal",
        ref: n,
        size: "lg"
      }, {
        title: fe(() => a[0] || (a[0] = [
          U("Some MRNs Could Not Be Added")
        ])),
        footer: fe(({ hide: f }) => [
          l("div", xV, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (u) => f(!0)
            }, a[3] || (a[3] = [
              l("i", { class: "fas fa-check fa-fw me-1" }, null, -1),
              U("Close ")
            ]), 8, RV)
          ])
        ]),
        default: fe(() => [
          o.value ? (T(), R("div", NV, [
            a[1] || (a[1] = l("strong", null, "Summary:", -1)),
            U(" " + P(o.value.added) + " added, " + P(o.value.failed) + " failed ", 1)
          ])) : ye("", !0),
          l("div", DV, [
            l("table", kV, [
              a[2] || (a[2] = l("thead", null, [
                l("tr", null, [
                  l("th", { style: { width: "35%" } }, "MRN"),
                  l("th", null, "Error")
                ])
              ], -1)),
              l("tbody", null, [
                (T(!0), R(Se, null, Je(s.value, (f, u) => (T(), R("tr", { key: u }, [
                  l("td", null, [
                    l("code", null, P(f.mrn), 1)
                  ]),
                  l("td", null, P(f.error), 1)
                ]))), 128))
              ])
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), MV = /* @__PURE__ */ fn(IV, [["__scopeId", "data-v-40a75814"]]), PV = { class: "card" }, VV = { class: "card-header d-flex justify-content-between align-items-center" }, LV = ["disabled"], FV = { class: "card-body" }, BV = {
  key: 0,
  class: "text-center"
}, $V = {
  key: 1,
  class: "row g-3"
}, jV = { class: "col-md-6" }, UV = { class: "border rounded p-3 h-100" }, HV = { class: "row g-2" }, WV = { class: "col-6" }, KV = { class: "text-center" }, zV = { class: "h4 mb-1 text-primary" }, qV = { class: "col-6" }, YV = { class: "text-center" }, XV = { class: "h4 mb-1 text-info" }, GV = { class: "col-md-6" }, QV = { class: "border rounded p-3 h-100" }, JV = { class: "row g-2" }, ZV = { class: "text-center" }, eL = { class: "text-muted" }, tL = { class: "col-12" }, nL = { class: "border rounded p-3" }, sL = { class: "mb-2" }, oL = { class: "d-flex justify-content-between align-items-center mb-1" }, rL = { class: "text-muted" }, iL = {
  class: "progress",
  style: { height: "8px" }
}, aL = ["aria-valuenow"], lL = {
  key: 0,
  class: "mb-2"
}, cL = { class: "d-flex justify-content-between align-items-center mb-1" }, uL = { class: "text-muted" }, dL = {
  class: "progress",
  style: { height: "6px" }
}, fL = ["aria-valuenow"], pL = { class: "mb-2" }, hL = { class: "d-flex justify-content-between align-items-center mb-1" }, mL = { class: "text-muted" }, gL = {
  class: "progress",
  style: { height: "12px" }
}, vL = ["title"], _L = ["title"], yL = ["title"], bL = ["title"], EL = ["title"], wL = {
  class: "d-flex justify-content-start mt-1",
  style: { "font-size": "0.75rem" }
}, AL = {
  key: 0,
  class: "me-3"
}, SL = {
  key: 1,
  class: "me-3"
}, CL = {
  key: 2,
  class: "me-3"
}, OL = {
  key: 3,
  class: "me-3"
}, TL = {
  key: 4,
  class: "me-3"
}, NL = {
  key: 2,
  class: "text-center text-muted"
}, DL = /* @__PURE__ */ Te({
  __name: "ProjectSummaryWidget",
  setup(e) {
    const t = Qn(), n = H(!1), s = j(() => t.projectSummary), o = j(() => s.value ? Object.values(s.value.overall_status_counts).reduce((p, h) => p + h, 0) : 0), r = j(() => {
      if (!s.value) return 0;
      const h = s.value.overall_status_counts.deleted || 0;
      return o.value - h;
    }), i = j(() => {
      if (!s.value || r.value === 0) return 0;
      const p = s.value.overall_status_counts.completed || 0;
      return Math.round(p / r.value * 100);
    }), a = j(() => {
      if (!s.value || r.value === 0) return 0;
      const p = s.value.overall_status_counts.failed || 0;
      return Math.round(p / r.value * 100);
    }), c = j(() => {
      if (!s.value || r.value === 0)
        return {
          completed: 0,
          failed: 0,
          fetching: 0,
          pending: 0,
          outdated: 0
        };
      const p = s.value.overall_status_counts;
      return {
        completed: Math.round((p.completed || 0) / r.value * 100),
        failed: Math.round((p.failed || 0) / r.value * 100),
        fetching: Math.round((p.fetching || 0) / r.value * 100),
        pending: Math.round((p.pending || 0) / r.value * 100),
        outdated: Math.round((p.outdated || 0) / r.value * 100)
      };
    }), f = (p) => {
      switch (p.toLowerCase()) {
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
    }, u = (p) => p.charAt(0).toUpperCase() + p.slice(1), d = async () => {
      try {
        n.value = !0, await t.getProjectSummary();
      } catch (p) {
        console.error("Failed to refresh project summary:", p);
      } finally {
        n.value = !1;
      }
    };
    return Tt(() => {
      d();
    }), (p, h) => (T(), R("div", PV, [
      l("div", VV, [
        h[0] || (h[0] = l("h6", { class: "mb-0" }, [
          l("i", { class: "fas fa-chart-bar fa-fw" }),
          U(" Project Summary ")
        ], -1)),
        l("button", {
          class: "btn btn-sm btn-outline-secondary",
          onClick: d,
          disabled: n.value,
          title: "Refresh summary"
        }, [
          l("i", {
            class: ce(["fas fa-rotate-right fa-fw", { "fa-spin": n.value }])
          }, null, 2)
        ], 8, LV)
      ]),
      l("div", FV, [
        n.value ? (T(), R("div", BV, h[1] || (h[1] = [
          l("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            l("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : s.value ? (T(), R("div", $V, [
          l("div", jV, [
            l("div", UV, [
              h[4] || (h[4] = l("h6", { class: "text-muted mb-3" }, "Overall Statistics", -1)),
              l("div", HV, [
                l("div", WV, [
                  l("div", KV, [
                    l("div", zV, P(s.value.total_mrns), 1),
                    h[2] || (h[2] = l("small", { class: "text-muted" }, "Total MRNs", -1))
                  ])
                ]),
                l("div", qV, [
                  l("div", YV, [
                    l("div", XV, P(o.value), 1),
                    h[3] || (h[3] = l("small", { class: "text-muted" }, "Total Resources", -1))
                  ])
                ])
              ])
            ])
          ]),
          l("div", GV, [
            l("div", QV, [
              h[5] || (h[5] = l("h6", { class: "text-muted mb-3" }, "Resource Status", -1)),
              l("div", JV, [
                (T(!0), R(Se, null, Je(s.value.overall_status_counts, (m, g) => (T(), R("div", {
                  key: g,
                  class: "col-6"
                }, [
                  l("div", ZV, [
                    l("div", {
                      class: ce(["h5 mb-1", f(g)])
                    }, P(m), 3),
                    l("small", eL, P(u(g)), 1)
                  ])
                ]))), 128))
              ])
            ])
          ]),
          l("div", tL, [
            l("div", nL, [
              h[14] || (h[14] = l("h6", { class: "text-muted mb-3" }, "Completion Progress", -1)),
              l("div", sL, [
                l("div", oL, [
                  h[6] || (h[6] = l("small", { class: "text-muted" }, "Overall Completion", -1)),
                  l("small", rL, P(i.value) + "%", 1)
                ]),
                l("div", iL, [
                  l("div", {
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Vt({ width: i.value + "%" }),
                    "aria-valuenow": i.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, aL)
                ])
              ]),
              a.value > 0 ? (T(), R("div", lL, [
                l("div", cL, [
                  h[7] || (h[7] = l("small", { class: "text-muted" }, "Error Rate", -1)),
                  l("small", uL, P(a.value) + "%", 1)
                ]),
                l("div", dL, [
                  l("div", {
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Vt({ width: a.value + "%" }),
                    "aria-valuenow": a.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, fL)
                ])
              ])) : ye("", !0),
              l("div", pL, [
                l("div", hL, [
                  h[8] || (h[8] = l("small", { class: "text-muted" }, "Resource States Breakdown", -1)),
                  l("small", mL, P(r.value) + " active resources", 1)
                ]),
                l("div", gL, [
                  c.value.completed > 0 ? (T(), R("div", {
                    key: 0,
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Vt({ width: c.value.completed + "%" }),
                    title: `Completed: ${s.value?.overall_status_counts.completed || 0} (${c.value.completed}%)`
                  }, null, 12, vL)) : ye("", !0),
                  c.value.fetching > 0 ? (T(), R("div", {
                    key: 1,
                    class: "progress-bar bg-info",
                    role: "progressbar",
                    style: Vt({ width: c.value.fetching + "%" }),
                    title: `Fetching: ${s.value?.overall_status_counts.fetching || 0} (${c.value.fetching}%)`
                  }, null, 12, _L)) : ye("", !0),
                  c.value.pending > 0 ? (T(), R("div", {
                    key: 2,
                    class: "progress-bar bg-warning",
                    role: "progressbar",
                    style: Vt({ width: c.value.pending + "%" }),
                    title: `Pending: ${s.value?.overall_status_counts.pending || 0} (${c.value.pending}%)`
                  }, null, 12, yL)) : ye("", !0),
                  c.value.failed > 0 ? (T(), R("div", {
                    key: 3,
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Vt({ width: c.value.failed + "%" }),
                    title: `Failed: ${s.value?.overall_status_counts.failed || 0} (${c.value.failed}%)`
                  }, null, 12, bL)) : ye("", !0),
                  c.value.outdated > 0 ? (T(), R("div", {
                    key: 4,
                    class: "progress-bar bg-secondary",
                    role: "progressbar",
                    style: Vt({ width: c.value.outdated + "%" }),
                    title: `Outdated: ${s.value?.overall_status_counts.outdated || 0} (${c.value.outdated}%)`
                  }, null, 12, EL)) : ye("", !0)
                ]),
                l("div", wL, [
                  c.value.completed > 0 ? (T(), R("div", AL, h[9] || (h[9] = [
                    l("span", { class: "badge bg-success me-1" }, "●", -1),
                    U("Completed ")
                  ]))) : ye("", !0),
                  c.value.fetching > 0 ? (T(), R("div", SL, h[10] || (h[10] = [
                    l("span", { class: "badge bg-info me-1" }, "●", -1),
                    U("Fetching ")
                  ]))) : ye("", !0),
                  c.value.pending > 0 ? (T(), R("div", CL, h[11] || (h[11] = [
                    l("span", { class: "badge bg-warning me-1" }, "●", -1),
                    U("Pending ")
                  ]))) : ye("", !0),
                  c.value.failed > 0 ? (T(), R("div", OL, h[12] || (h[12] = [
                    l("span", { class: "badge bg-danger me-1" }, "●", -1),
                    U("Failed ")
                  ]))) : ye("", !0),
                  c.value.outdated > 0 ? (T(), R("div", TL, h[13] || (h[13] = [
                    l("span", { class: "badge bg-secondary me-1" }, "●", -1),
                    U("Outdated ")
                  ]))) : ye("", !0)
                ])
              ])
            ])
          ])
        ])) : (T(), R("div", NL, h[15] || (h[15] = [
          l("i", { class: "fas fa-info-circle fa-fw" }, null, -1),
          U(" No summary data available ")
        ])))
      ])
    ]));
  }
}), kL = /* @__PURE__ */ fn(DL, [["__scopeId", "data-v-437ee7dd"]]), b_ = /* @__PURE__ */ Xn("archive", () => {
  const e = Wo(), t = H(!1), n = H([]), s = H(!1), o = H(/* @__PURE__ */ new Set()), r = H({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: !1,
    hasPrevious: !1,
    perPageOptions: [10, 25, 50, 100]
  }), i = H({
    status: "",
    searchQuery: "",
    processingMode: ""
  }), a = j(() => {
    let O = n.value;
    if (i.value.status && (O = O.filter((N) => N.status === i.value.status)), i.value.processingMode && (O = O.filter((N) => N.processing_mode === i.value.processingMode)), i.value.searchQuery) {
      const N = i.value.searchQuery.toLowerCase();
      O = O.filter(
        (I) => I.file_name.toLowerCase().includes(N) || I.archive_id.toLowerCase().includes(N)
      );
    }
    return O;
  }), c = j(() => {
    const O = (r.value.page - 1) * r.value.limit, N = O + r.value.limit, I = a.value;
    return r.value.total = I.length, r.value.totalPages = Math.ceil(I.length / r.value.limit), r.value.hasNext = r.value.page < r.value.totalPages, r.value.hasPrevious = r.value.page > 1, I.slice(O, N);
  }), f = j(
    () => n.value.filter(
      (O) => O.status === "pending" || O.status === "processing"
    )
  ), u = j(
    () => n.value.filter((O) => O.status === "completed")
  ), d = async () => {
    try {
      t.value = !0;
      const O = await Ue.listArchives();
      O.data.success ? (n.value = O.data.archives || [], r.value.total = O.data.total_count || 0) : e.addError({
        message: O.data.message || "Failed to fetch archives",
        source: "ArchiveStore.fetchArchives",
        timestamp: /* @__PURE__ */ new Date()
      });
    } catch (O) {
      e.addError({
        message: `Failed to fetch archives: ${O}`,
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
    deletingArchives: o,
    pagination: r,
    filters: i,
    // Computed
    filteredArchives: a,
    paginatedArchives: c,
    pendingArchives: f,
    completedArchives: u,
    // Actions
    fetchArchives: d,
    createArchiveSelected: async (O, N = {}) => {
      try {
        s.value = !0;
        const I = await Ue.createArchiveSelected(O, N);
        return I.data.success ? (await d(), I.data) : (e.addError({
          message: I.data.message || "Failed to create archive for selected MRNs",
          source: "ArchiveStore.createArchiveSelected",
          timestamp: /* @__PURE__ */ new Date()
        }), I.data);
      } catch (I) {
        return e.addError({
          message: `Failed to create archive for selected MRNs: ${I}`,
          source: "ArchiveStore.createArchiveSelected",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        s.value = !1;
      }
    },
    createArchiveAll: async (O = {}) => {
      try {
        s.value = !0;
        const N = await Ue.createArchiveAll(O);
        return N.data.success ? (await d(), N.data) : (e.addError({
          message: N.data.message || "Failed to create archive for all resources",
          source: "ArchiveStore.createArchiveAll",
          timestamp: /* @__PURE__ */ new Date()
        }), N.data);
      } catch (N) {
        return e.addError({
          message: `Failed to create archive for all resources: ${N}`,
          source: "ArchiveStore.createArchiveAll",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        s.value = !1;
      }
    },
    downloadArchive: async (O) => {
      try {
        const N = await Ue.downloadArchive(O), I = new Blob([N.data], { type: "application/zip" }), C = window.URL.createObjectURL(I), w = document.createElement("a"), A = n.value.find((F) => F.archive_id === O)?.file_name || `archive_${O}.zip`;
        w.href = C, w.download = A, document.body.appendChild(w), w.click(), document.body.removeChild(w), window.URL.revokeObjectURL(C);
      } catch (N) {
        e.addError({
          message: `Failed to download archive: ${N}`,
          source: "ArchiveStore.downloadArchive",
          timestamp: /* @__PURE__ */ new Date()
        });
      }
    },
    deleteArchive: async (O) => {
      const N = n.value.findIndex((C) => C.archive_id === O);
      if (N === -1)
        return e.addError({
          message: "Archive not found",
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      const I = n.value[N];
      try {
        o.value.add(O), n.value.splice(N, 1);
        const C = await Ue.deleteArchive(O);
        return C.data.success || (n.value.splice(N, 0, I), e.addError({
          message: C.data.message || "Failed to delete archive",
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        })), C.data;
      } catch (C) {
        return n.value.splice(N, 0, I), e.addError({
          message: `Failed to delete archive: ${C}`,
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        o.value.delete(O);
      }
    },
    refreshArchiveStatus: async (O) => {
      await d();
    },
    setPage: (O) => {
      O >= 1 && O <= r.value.totalPages && (r.value.page = O);
    },
    setLimit: async (O) => {
      r.value.limit = O, r.value.page = 1, await d();
    },
    setFilter: (O, N) => {
      i.value[O] = N, r.value.page = 1;
    },
    clearFilters: () => {
      i.value.status = "", i.value.searchQuery = "", i.value.processingMode = "", r.value.page = 1;
    },
    isArchiveDeleting: (O) => o.value.has(O)
  };
}), xL = { class: "p-0" }, RL = {
  key: 0,
  class: "mb-4"
}, IL = {
  key: 1,
  class: "d-flex justify-content-between align-items-center mt-3"
}, ML = { class: "text-muted" }, PL = { class: "d-flex gap-2" }, VL = /* @__PURE__ */ Te({
  __name: "ResourcesPage",
  setup(e) {
    const t = Qn(), n = __(), s = b_(), o = Zt(), r = H(null), i = H(null), a = H(null), c = H(null), f = H(null);
    Rt(() => n.archiveModalVisible, async (y) => {
      y && (await i.value?.show(), n.hideArchiveModal());
    }), Rt(() => n.streamingModalVisible, async (y) => {
      y && (await c.value?.show(), n.hideStreamingModal());
    });
    const u = j({
      get: () => t.pagination.page,
      set: (y) => t.setPage(y)
    }), d = j({
      get: () => t.pagination.limit,
      set: (y) => t.setLimit(y)
    }), p = j(() => t.pagination.total), h = j(() => t.pagination.perPageOptions), m = j(() => {
      const y = t.pagination.total, b = t.pagination.page, _ = t.pagination.limit, x = y === 0 ? 0 : (b - 1) * _ + 1, k = Math.min(b * _, y);
      return { start: x, end: k, total: y };
    }), g = async () => {
      if (r.value) {
        const y = await r.value.show();
        if (y)
          try {
            const b = await t.addMrnsFromString(y), _ = b.added_count || 0, x = b.failed_count || 0;
            x === 0 ? o.showSuccess(`Added ${_} MRN(s).`) : f.value?.show(b.failures, _, x);
          } catch {
            o.showError("Failed to add MRNs");
          }
      }
    }, v = async (y, b, _) => {
      try {
        let x;
        b === "selected" && _ ? x = await s.createArchiveSelected(_, y) : x = await s.createArchiveAll(y), x && (a.value?.show(x), x.success ? o.showSuccess(x.message) : o.showError(x.message));
      } catch (x) {
        console.error("Failed to create archive:", x), o.showError("Failed to create archive");
      }
    };
    return Tt(async () => {
      try {
        await Promise.all([
          t.fetchMrns(),
          t.getProjectSummary()
        ]);
      } catch (y) {
        console.error("Failed to load initial data:", y), o.showError("Failed to load initial data");
      }
    }), (y, b) => {
      const _ = Qe("b-pagination"), x = Qe("b-pagination-dropdown");
      return T(), R("div", xL, [
        ne(n).showSummary ? (T(), R("div", RL, [
          ue(kL)
        ])) : ye("", !0),
        ue(xI, { onAddMrn: g }),
        ue(kM, {
          items: ne(t).mrns,
          loading: ne(t).loading,
          "selected-mrns": ne(t).selectedMrns,
          "all-selected": ne(t).allSelected,
          indeterminate: ne(t).indeterminate,
          onToggleSelectAll: ne(t).toggleSelectAll
        }, null, 8, ["items", "loading", "selected-mrns", "all-selected", "indeterminate", "onToggleSelectAll"]),
        ne(t).pagination.total > 0 ? (T(), R("div", IL, [
          l("small", ML, " Showing " + P(m.value.start) + "-" + P(m.value.end) + " of " + P(m.value.total) + " MRNs ", 1),
          l("div", PL, [
            ue(_, {
              size: "sm",
              perPage: d.value,
              totalItems: p.value,
              modelValue: u.value,
              "onUpdate:modelValue": b[0] || (b[0] = (k) => u.value = k)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            ue(x, {
              options: h.value,
              modelValue: d.value,
              "onUpdate:modelValue": b[1] || (b[1] = (k) => d.value = k)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : ye("", !0),
        ue($M, {
          ref_key: "addMrnModal",
          ref: r
        }, null, 512),
        ue(aP),
        (T(), et(Hr, { to: "body" }, [
          ue(DP, {
            ref_key: "archiveOptionsModal",
            ref: i,
            "selected-mrns": ne(n).archiveModalSelectedMrns,
            "archive-type": ne(n).archiveModalType,
            onCreate: v
          }, null, 8, ["selected-mrns", "archive-type"]),
          ue(XP, {
            ref_key: "archiveCreationModal",
            ref: a
          }, null, 512),
          ue(TV, {
            ref_key: "streamingArchiveModal",
            ref: c,
            "selected-mrns": ne(n).streamingModalSelectedMrns,
            "archive-type": ne(n).streamingModalType
          }, null, 8, ["selected-mrns", "archive-type"]),
          ue(MV, {
            ref_key: "bulkMrnErrorsModal",
            ref: f
          }, null, 512)
        ]))
      ]);
    };
  }
}), E_ = /* @__PURE__ */ Xn("task", () => {
  const e = Wo(), t = H(!1), n = H([]), s = H(!1), o = H(/* @__PURE__ */ new Set()), r = H({
    page: 1,
    limit: 25,
    total: 0,
    total_pages: 0,
    has_next: !1,
    has_previous: !1
  }), i = H({
    status: "",
    task_type: "",
    search_query: ""
  }), a = j(() => {
    let w = n.value;
    if (i.value.status && (w = w.filter((D) => D.status === i.value.status)), i.value.task_type && (w = w.filter((D) => D.key === i.value.task_type)), i.value.search_query) {
      const D = i.value.search_query.toLowerCase();
      w = w.filter(
        (A) => A.id.toLowerCase().includes(D) || A.key.toLowerCase().includes(D)
      );
    }
    return w;
  }), c = j(() => {
    const w = (r.value.page - 1) * r.value.limit, D = w + r.value.limit;
    return a.value.slice(w, D);
  }), f = j(
    () => n.value.filter((w) => w.status === "pending")
  ), u = j(
    () => n.value.filter((w) => w.status === "processing")
  ), d = j(
    () => n.value.filter((w) => w.status === "completed")
  ), p = j(
    () => n.value.filter((w) => w.status === "failed")
  ), h = j(() => ({
    total: n.value.length,
    pending: f.value.length,
    processing: u.value.length,
    completed: d.value.length,
    failed: p.value.length
  })), m = async () => {
    try {
      t.value = !0;
      const D = (await Ue.listTasks(
        r.value.page,
        r.value.limit,
        i.value
      )).data;
      D.success ? (n.value = D.tasks || [], D.pagination && (r.value = { ...r.value, ...D.pagination }), _()) : e.addError({
        message: D.message || "Failed to fetch tasks",
        source: "TaskStore.fetchTasks",
        timestamp: /* @__PURE__ */ new Date()
      });
    } catch (w) {
      e.addError({
        message: `Failed to fetch tasks: ${w}`,
        source: "TaskStore.fetchTasks",
        timestamp: /* @__PURE__ */ new Date()
      });
    } finally {
      t.value = !1;
    }
  }, g = async () => {
    try {
      s.value = !0;
      const D = (await Ue.performTaskFullSync()).data;
      return D.success ? (await m(), D) : (e.addError({
        message: D.message || "Failed to perform full sync",
        source: "TaskStore.performFullSync",
        timestamp: /* @__PURE__ */ new Date()
      }), D);
    } catch (w) {
      return e.addError({
        message: `Failed to perform full sync: ${w}`,
        source: "TaskStore.performFullSync",
        timestamp: /* @__PURE__ */ new Date()
      }), null;
    } finally {
      s.value = !1;
    }
  }, v = async () => {
    try {
      s.value = !0;
      const D = (await Ue.retryFailedResources()).data;
      return D.success ? (await m(), D) : (e.addError({
        message: D.message || "Failed to retry failed resources",
        source: "TaskStore.retryFailed",
        timestamp: /* @__PURE__ */ new Date()
      }), D);
    } catch (w) {
      return e.addError({
        message: `Failed to retry failed resources: ${w}`,
        source: "TaskStore.retryFailed",
        timestamp: /* @__PURE__ */ new Date()
      }), null;
    } finally {
      s.value = !1;
    }
  }, y = async (w) => {
    try {
      const A = (await Ue.getTaskDetails(w)).data;
      return A.success || e.addError({
        message: A.message || "Failed to get task details",
        source: "TaskStore.getTaskDetails",
        timestamp: /* @__PURE__ */ new Date()
      }), A;
    } catch (D) {
      return e.addError({
        message: `Failed to get task details: ${D}`,
        source: "TaskStore.getTaskDetails",
        timestamp: /* @__PURE__ */ new Date()
      }), null;
    }
  }, b = async (w) => {
    const D = n.value.findIndex((F) => F.id === w);
    if (D === -1)
      return e.addError({
        message: "Task not found",
        source: "TaskStore.deleteTask",
        timestamp: /* @__PURE__ */ new Date()
      }), !1;
    const A = n.value[D];
    try {
      o.value.add(w), n.value.splice(D, 1);
      const F = await Ue.deleteTask(w);
      return F.data.success ? !0 : (n.value.splice(D, 0, A), e.addError({
        message: F.data.message || "Failed to delete task",
        source: "TaskStore.deleteTask",
        timestamp: /* @__PURE__ */ new Date()
      }), !1);
    } catch (F) {
      return n.value.splice(D, 0, A), e.addError({
        message: `Failed to delete task: ${F}`,
        source: "TaskStore.deleteTask",
        timestamp: /* @__PURE__ */ new Date()
      }), !1;
    } finally {
      o.value.delete(w);
    }
  }, _ = () => {
    const w = a.value;
    r.value.total = w.length, r.value.total_pages = Math.ceil(w.length / r.value.limit), r.value.has_next = r.value.page < r.value.total_pages, r.value.has_previous = r.value.page > 1, r.value.page > r.value.total_pages && r.value.total_pages > 0 && (r.value.page = r.value.total_pages);
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
    paginatedTasks: c,
    pendingTasks: f,
    processingTasks: u,
    completedTasks: d,
    failedTasks: p,
    taskStatusCounts: h,
    // Actions
    fetchTasks: m,
    performFullSync: g,
    retryFailed: v,
    getTaskDetails: y,
    deleteTask: b,
    refreshTaskStatus: async () => {
      await m();
    },
    updatePagination: _,
    setPage: (w) => {
      w >= 1 && w <= r.value.total_pages && (r.value.page = w);
    },
    setLimit: (w) => {
      r.value.limit = w, r.value.page = 1, _();
    },
    setFilter: (w, D) => {
      i.value[w] = D, r.value.page = 1, _();
    },
    clearFilters: () => {
      i.value.status = "", i.value.task_type = "", i.value.search_query = "", r.value.page = 1, _();
    },
    isTaskDeleting: (w) => o.value.has(w)
  };
}), LL = { class: "card" }, FL = { class: "card-header d-flex justify-content-between align-items-center" }, BL = ["disabled"], $L = { class: "card-body" }, jL = {
  key: 0,
  class: "text-center"
}, UL = {
  key: 1,
  class: "row g-3"
}, HL = { class: "col-md-4" }, WL = { class: "d-flex align-items-center" }, KL = { class: "fw-bold" }, zL = { class: "col-md-4" }, qL = { class: "d-flex align-items-center" }, YL = { class: "fw-bold" }, XL = { class: "col-md-4" }, GL = { class: "d-flex align-items-center" }, QL = { class: "fw-bold" }, JL = { class: "col-12 mt-3" }, ZL = { class: "border-top pt-3" }, eF = { class: "row g-3" }, tF = { class: "col-md-3" }, nF = { class: "d-flex align-items-center" }, sF = { class: "fw-bold" }, oF = { class: "col-md-3" }, rF = { class: "d-flex align-items-center" }, iF = { class: "fw-bold" }, aF = { class: "col-md-3" }, lF = { class: "d-flex align-items-center" }, cF = { class: "fw-bold" }, uF = { class: "col-md-3" }, dF = { class: "d-flex align-items-center" }, fF = { class: "fw-bold" }, pF = /* @__PURE__ */ Te({
  __name: "QueueStatusWidget",
  setup(e) {
    const t = E_(), n = H(!1), s = j(() => t.taskStatusCounts), o = j(() => {
      const { pending: a, failed: c, processing: f } = s.value;
      return c > 5 ? "Poor" : a + f > 10 ? "Busy" : c > 0 || a > 0 || f > 0 ? "Active" : "Healthy";
    }), r = j(() => {
      const { total: a, completed: c, failed: f } = s.value;
      if (a === 0) return 100;
      const u = c + f;
      return Math.round(c / Math.max(u, 1) * 100);
    }), i = async () => {
      try {
        n.value = !0, await t.fetchTasks();
      } catch (a) {
        console.error("Failed to refresh queue status:", a);
      } finally {
        n.value = !1;
      }
    };
    return Tt(async () => {
      await i();
    }), (a, c) => (T(), R("div", LL, [
      l("div", FL, [
        c[0] || (c[0] = l("h6", { class: "mb-0" }, [
          l("i", { class: "fas fa-clock-rotate-left fa-fw" }),
          U(" Background Queue Status ")
        ], -1)),
        l("button", {
          class: "btn btn-sm btn-outline-secondary",
          onClick: i,
          disabled: n.value,
          title: "Refresh queue status"
        }, [
          l("i", {
            class: ce(["fas fa-rotate-right fa-fw", { "fa-spin": n.value }])
          }, null, 2)
        ], 8, BL)
      ]),
      l("div", $L, [
        n.value ? (T(), R("div", jL, c[1] || (c[1] = [
          l("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            l("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : (T(), R("div", UL, [
          l("div", HL, [
            l("div", WL, [
              c[3] || (c[3] = l("i", { class: "fas fa-check-circle fa-fw text-success me-2" }, null, -1)),
              l("div", null, [
                l("div", KL, P(o.value), 1),
                c[2] || (c[2] = l("small", { class: "text-muted" }, "Queue Health", -1))
              ])
            ])
          ]),
          l("div", zL, [
            l("div", qL, [
              c[5] || (c[5] = l("i", { class: "fas fa-hourglass-half fa-fw text-warning me-2" }, null, -1)),
              l("div", null, [
                l("div", YL, P(s.value.pending), 1),
                c[4] || (c[4] = l("small", { class: "text-muted" }, "Pending Tasks", -1))
              ])
            ])
          ]),
          l("div", XL, [
            l("div", GL, [
              c[7] || (c[7] = l("i", { class: "fas fa-exclamation-triangle fa-fw text-danger me-2" }, null, -1)),
              l("div", null, [
                l("div", QL, P(s.value.failed), 1),
                c[6] || (c[6] = l("small", { class: "text-muted" }, "Failed Tasks", -1))
              ])
            ])
          ]),
          l("div", JL, [
            l("div", ZL, [
              l("div", eF, [
                l("div", tF, [
                  l("div", nF, [
                    c[9] || (c[9] = l("i", { class: "fas fa-list fa-fw text-primary me-2" }, null, -1)),
                    l("div", null, [
                      l("div", sF, P(s.value.total), 1),
                      c[8] || (c[8] = l("small", { class: "text-muted" }, "Total Tasks", -1))
                    ])
                  ])
                ]),
                l("div", oF, [
                  l("div", rF, [
                    c[11] || (c[11] = l("i", { class: "fas fa-play fa-fw text-info me-2" }, null, -1)),
                    l("div", null, [
                      l("div", iF, P(s.value.processing), 1),
                      c[10] || (c[10] = l("small", { class: "text-muted" }, "Processing", -1))
                    ])
                  ])
                ]),
                l("div", aF, [
                  l("div", lF, [
                    c[13] || (c[13] = l("i", { class: "fas fa-check fa-fw text-success me-2" }, null, -1)),
                    l("div", null, [
                      l("div", cF, P(s.value.completed), 1),
                      c[12] || (c[12] = l("small", { class: "text-muted" }, "Completed", -1))
                    ])
                  ])
                ]),
                l("div", uF, [
                  l("div", dF, [
                    c[15] || (c[15] = l("i", { class: "fas fa-percentage fa-fw text-secondary me-2" }, null, -1)),
                    l("div", null, [
                      l("div", fF, P(r.value) + "%", 1),
                      c[14] || (c[14] = l("small", { class: "text-muted" }, "Success Rate", -1))
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
}), hF = /* @__PURE__ */ fn(pF, [["__scopeId", "data-v-e7530d59"]]), mF = { class: "p-3" }, gF = { class: "d-flex justify-content-between align-items-center mb-4" }, vF = { class: "d-flex gap-2" }, _F = ["disabled"], yF = ["disabled"], bF = ["disabled"], EF = { class: "mb-4" }, wF = { class: "card mb-4" }, AF = { class: "card-body" }, SF = { class: "row g-3" }, CF = { class: "col-md-3" }, OF = { class: "col-md-3" }, TF = { class: "col-md-3" }, NF = { class: "col-md-3" }, DF = ["value"], kF = {
  key: 0,
  class: "row mt-3"
}, xF = { class: "card" }, RF = { class: "card-body p-0" }, IF = {
  key: 0,
  class: "text-center py-5"
}, MF = {
  key: 1,
  class: "d-flex flex-column gap-2 py-5 align-items-center"
}, PF = { class: "" }, VF = { class: "text-muted mb-0" }, LF = { key: 2 }, FF = { class: "table-responsive" }, BF = { class: "table table-hover mb-0" }, $F = { class: "d-flex flex-column" }, jF = { class: "fw-semibold" }, UF = {
  key: 0,
  class: "text-muted"
}, HF = { class: "badge bg-secondary" }, WF = ["title"], KF = ["title"], zF = { class: "text-end" }, qF = { class: "btn-group btn-group-sm" }, YF = ["onClick"], XF = ["disabled", "onClick"], GF = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, QF = { class: "text-muted" }, JF = { class: "d-flex gap-2" }, ZF = { class: "modal-dialog modal-lg" }, e4 = { class: "modal-content" }, t4 = {
  key: 0,
  class: "modal-body"
}, n4 = { class: "row" }, s4 = { class: "col-md-6" }, o4 = { class: "row" }, r4 = { class: "col-sm-8" }, i4 = { class: "col-sm-8" }, a4 = { class: "col-sm-8" }, l4 = { class: "col-sm-8" }, c4 = { class: "col-sm-8" }, u4 = { class: "col-md-6" }, d4 = { class: "bg-light p-3 rounded small" }, f4 = {
  key: 0,
  class: "row mt-3"
}, p4 = { class: "col-12" }, h4 = { class: "bg-light p-3 rounded small" }, m4 = /* @__PURE__ */ Te({
  __name: "TasksPage",
  setup(e) {
    const t = E_(), n = Zt(), s = H(""), o = H(""), r = H(""), i = H(null), a = H(null), c = [10, 25, 50, 100], f = j({
      get: () => t.pagination.page,
      set: (D) => t.setPage(D)
    }), u = j({
      get: () => t.pagination.limit,
      set: (D) => t.setLimit(D)
    }), d = j(() => s.value || o.value || r.value), p = j(() => {
      const D = t.filteredTasks.length, A = (t.pagination.page - 1) * t.pagination.limit + 1, F = Math.min(A + t.pagination.limit - 1, D);
      return { start: A, end: F, total: D };
    }), h = async () => {
      try {
        await t.fetchTasks();
      } catch (D) {
        console.error("Failed to refresh tasks:", D), n.showError("Failed to refresh tasks");
      }
    }, m = async () => {
      if (await n.confirmAction(
        "Full Synchronization",
        "Are you sure you want to perform a full synchronization? This will analyze all MRNs and create missing resource instances."
      )) {
        const A = await t.performFullSync();
        A?.success && n.showSuccess(`Full sync initiated successfully. Task ID: ${A.task_id}`);
      }
    }, g = async () => {
      if (await n.confirmAction(
        "Retry Failed Tasks",
        "Are you sure you want to retry all failed tasks? This will mark them as pending for re-processing."
      )) {
        const A = await t.retryFailed();
        A?.success && n.showSuccess(`Retry operation completed. ${A.statistics?.tasks_created || 0} tasks marked for retry.`);
      }
    }, v = () => {
      t.setFilter("search_query", s.value);
    }, y = () => {
      t.setFilter("status", o.value);
    }, b = () => {
      t.setFilter("task_type", r.value);
    }, _ = () => {
      s.value = "", o.value = "", r.value = "", t.clearFilters();
    }, x = async (D) => {
      i.value = D, new window.bootstrap.Modal(a.value).show();
    }, k = async (D) => {
      await n.confirmAction(
        "Delete Task",
        `Are you sure you want to delete task ${D.id}? This action cannot be undone.`
      ) && await t.deleteTask(D.id) && n.showSuccess("Task deleted successfully.");
    }, O = (D) => {
      if (!D) return "Unknown";
      try {
        const A = new Date(D), de = (/* @__PURE__ */ new Date()).getTime() - A.getTime(), Y = Math.floor(de / 6e4), re = Math.floor(Y / 60), K = Math.floor(re / 24);
        return Y < 60 ? `${Y}m ago` : re < 24 ? `${re}h ago` : K < 7 ? `${K}d ago` : A.toLocaleDateString();
      } catch {
        return D;
      }
    }, N = (D) => {
      if (!D) return "Unknown";
      try {
        return new Date(D).toLocaleString();
      } catch {
        return D;
      }
    }, I = (D) => ({
      fhir_fetch: "FHIR Fetch",
      full_sync: "Full Sync",
      retry_failed: "Retry Failed",
      archive: "Archive",
      cleanup: "Cleanup"
    })[D] || D, C = (D) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[D] || "badge bg-secondary", w = (D) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[D] || "fas fa-question-circle";
    return Tt(async () => {
      await h();
    }), Kr(() => {
    }), (D, A) => {
      const F = Qe("b-pagination"), de = Qe("b-pagination-dropdown");
      return T(), R("div", mF, [
        l("div", gF, [
          A[9] || (A[9] = l("div", null, [
            l("h4", { class: "mb-1" }, "Task Management"),
            l("p", { class: "text-muted mb-0" }, "Monitor and manage background processing tasks")
          ], -1)),
          l("div", vF, [
            l("button", {
              class: "btn btn-warning btn-sm",
              onClick: m,
              disabled: ne(t).operationLoading
            }, [
              l("i", {
                class: ce(["fas fa-arrows-rotate fa-fw me-1", { "fa-spin": ne(t).operationLoading }])
              }, null, 2),
              A[6] || (A[6] = U(" Full Sync "))
            ], 8, _F),
            l("button", {
              class: "btn btn-outline-warning btn-sm",
              onClick: g,
              disabled: ne(t).operationLoading
            }, A[7] || (A[7] = [
              l("i", { class: "fas fa-exclamation-triangle fa-fw me-1" }, null, -1),
              U(" Retry Failed ")
            ]), 8, yF),
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: h,
              disabled: ne(t).loading
            }, [
              l("i", {
                class: ce(["fas fa-sync-alt fa-fw me-1", { "fa-spin": ne(t).loading }])
              }, null, 2),
              A[8] || (A[8] = U(" Refresh "))
            ], 8, bF)
          ])
        ]),
        l("div", EF, [
          ue(hF)
        ]),
        l("div", wF, [
          l("div", AF, [
            l("div", SF, [
              l("div", CF, [
                A[10] || (A[10] = l("label", { class: "form-label" }, "Search Tasks", -1)),
                nt(l("input", {
                  type: "text",
                  class: "form-control form-control-sm",
                  placeholder: "Search by ID or type...",
                  "onUpdate:modelValue": A[0] || (A[0] = (Y) => s.value = Y),
                  onInput: v
                }, null, 544), [
                  [wo, s.value]
                ])
              ]),
              l("div", OF, [
                A[12] || (A[12] = l("label", { class: "form-label" }, "Status", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": A[1] || (A[1] = (Y) => o.value = Y),
                  onChange: y
                }, A[11] || (A[11] = [
                  Fl('<option value="">All Statuses</option><option value="pending">Pending</option><option value="processing">Processing</option><option value="completed">Completed</option><option value="failed">Failed</option>', 5)
                ]), 544), [
                  [cs, o.value]
                ])
              ]),
              l("div", TF, [
                A[14] || (A[14] = l("label", { class: "form-label" }, "Task Type", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": A[2] || (A[2] = (Y) => r.value = Y),
                  onChange: b
                }, A[13] || (A[13] = [
                  Fl('<option value="">All Types</option><option value="fhir_fetch">FHIR Fetch</option><option value="full_sync">Full Sync</option><option value="retry_failed">Retry Failed</option><option value="archive">Archive</option><option value="cleanup">Cleanup</option>', 6)
                ]), 544), [
                  [cs, r.value]
                ])
              ]),
              l("div", NF, [
                A[15] || (A[15] = l("label", { class: "form-label" }, "Per Page", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": A[3] || (A[3] = (Y) => u.value = Y)
                }, [
                  (T(), R(Se, null, Je(c, (Y) => l("option", {
                    key: Y,
                    value: Y
                  }, P(Y), 9, DF)), 64))
                ], 512), [
                  [cs, u.value]
                ])
              ])
            ]),
            d.value ? (T(), R("div", kF, [
              l("div", { class: "col" }, [
                l("button", {
                  class: "btn btn-outline-secondary btn-sm",
                  onClick: _
                }, A[16] || (A[16] = [
                  l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                  U("Clear Filters ")
                ]))
              ])
            ])) : ye("", !0)
          ])
        ]),
        l("div", xF, [
          l("div", RF, [
            ne(t).loading ? (T(), R("div", IF, A[17] || (A[17] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading tasks...")
              ], -1),
              l("p", { class: "mt-2 mb-0 text-muted" }, "Loading tasks...", -1)
            ]))) : ne(t).paginatedTasks.length === 0 ? (T(), R("div", MF, [
              A[18] || (A[18] = l("i", {
                class: "fas fa-tasks text-muted",
                style: { "font-size": "3rem" }
              }, null, -1)),
              l("h6", PF, P(d.value ? "No tasks match your filters" : "No tasks found"), 1),
              l("span", VF, P(d.value ? "Try adjusting your search criteria." : "Tasks will appear here when created."), 1)
            ])) : (T(), R("div", LF, [
              l("div", FF, [
                l("table", BF, [
                  A[20] || (A[20] = l("thead", { class: "table-light" }, [
                    l("tr", null, [
                      l("th", { scope: "col" }, "Task"),
                      l("th", { scope: "col" }, "Status"),
                      l("th", { scope: "col" }, "Type"),
                      l("th", { scope: "col" }, "Created"),
                      l("th", { scope: "col" }, "Updated"),
                      l("th", {
                        scope: "col",
                        class: "text-end"
                      }, "Actions")
                    ])
                  ], -1)),
                  l("tbody", null, [
                    (T(!0), R(Se, null, Je(ne(t).paginatedTasks, (Y) => (T(), R("tr", {
                      key: Y.id
                    }, [
                      l("td", null, [
                        l("div", $F, [
                          l("span", jF, P(Y.id), 1),
                          Y.params.mrn ? (T(), R("small", UF, "MRN: " + P(Y.params.mrn), 1)) : ye("", !0)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: ce(C(Y.status))
                        }, [
                          l("i", {
                            class: ce([w(Y.status), "me-1"])
                          }, null, 2),
                          U(" " + P(Y.status.charAt(0).toUpperCase() + Y.status.slice(1)), 1)
                        ], 2)
                      ]),
                      l("td", null, [
                        l("span", HF, P(I(Y.key)), 1)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: N(Y.created_at)
                        }, P(O(Y.created_at)), 9, WF)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: N(Y.updated_at)
                        }, P(O(Y.updated_at)), 9, KF)
                      ]),
                      l("td", zF, [
                        l("div", qF, [
                          l("button", {
                            class: "btn btn-outline-info",
                            onClick: (re) => x(Y),
                            title: "View Details"
                          }, A[19] || (A[19] = [
                            l("i", { class: "fas fa-info-circle" }, null, -1)
                          ]), 8, YF),
                          l("button", {
                            class: "btn btn-outline-danger",
                            title: "Delete Task",
                            disabled: Y.status === "processing" || ne(t).isTaskDeleting(Y.id),
                            onClick: (re) => k(Y)
                          }, [
                            l("i", {
                              class: ce(["fas", ne(t).isTaskDeleting(Y.id) ? "fa-spinner fa-spin" : "fa-trash"])
                            }, null, 2)
                          ], 8, XF)
                        ])
                      ])
                    ]))), 128))
                  ])
                ])
              ])
            ]))
          ])
        ]),
        ne(t).filteredTasks.length > 0 ? (T(), R("div", GF, [
          l("small", QF, " Showing " + P(p.value.start) + "-" + P(p.value.end) + " of " + P(p.value.total) + " tasks ", 1),
          l("div", JF, [
            ue(F, {
              size: "sm",
              perPage: u.value,
              totalItems: ne(t).filteredTasks.length,
              modelValue: f.value,
              "onUpdate:modelValue": A[4] || (A[4] = (Y) => f.value = Y)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            ue(de, {
              options: c,
              modelValue: u.value,
              "onUpdate:modelValue": A[5] || (A[5] = (Y) => u.value = Y)
            }, null, 8, ["modelValue"])
          ])
        ])) : ye("", !0),
        l("div", {
          class: "modal fade",
          id: "taskDetailsModal",
          tabindex: "-1",
          ref_key: "taskDetailsModal",
          ref: a
        }, [
          l("div", ZF, [
            l("div", e4, [
              A[29] || (A[29] = l("div", { class: "modal-header" }, [
                l("h5", { class: "modal-title" }, "Task Details"),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "data-bs-dismiss": "modal"
                })
              ], -1)),
              i.value ? (T(), R("div", t4, [
                l("div", n4, [
                  l("div", s4, [
                    A[26] || (A[26] = l("h6", null, "Basic Information", -1)),
                    l("dl", o4, [
                      A[21] || (A[21] = l("dt", { class: "col-sm-4" }, "ID:", -1)),
                      l("dd", r4, [
                        l("code", null, P(i.value.id), 1)
                      ]),
                      A[22] || (A[22] = l("dt", { class: "col-sm-4" }, "Type:", -1)),
                      l("dd", i4, P(I(i.value.key)), 1),
                      A[23] || (A[23] = l("dt", { class: "col-sm-4" }, "Status:", -1)),
                      l("dd", a4, [
                        l("span", {
                          class: ce(C(i.value.status))
                        }, P(i.value.status.charAt(0).toUpperCase() + i.value.status.slice(1)), 3)
                      ]),
                      A[24] || (A[24] = l("dt", { class: "col-sm-4" }, "Created:", -1)),
                      l("dd", l4, P(N(i.value.created_at)), 1),
                      A[25] || (A[25] = l("dt", { class: "col-sm-4" }, "Updated:", -1)),
                      l("dd", c4, P(N(i.value.updated_at)), 1)
                    ])
                  ]),
                  l("div", u4, [
                    A[27] || (A[27] = l("h6", null, "Parameters", -1)),
                    l("pre", d4, P(JSON.stringify(i.value.params, null, 2)), 1)
                  ])
                ]),
                Object.keys(i.value.metadata).length > 0 ? (T(), R("div", f4, [
                  l("div", p4, [
                    A[28] || (A[28] = l("h6", null, "Metadata", -1)),
                    l("pre", h4, P(JSON.stringify(i.value.metadata, null, 2)), 1)
                  ])
                ])) : ye("", !0)
              ])) : ye("", !0),
              A[30] || (A[30] = l("div", { class: "modal-footer" }, [
                l("button", {
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
}), g4 = { key: 0 }, v4 = { class: "card" }, _4 = { class: "card-body" }, y4 = { class: "list-unstyled mb-0" }, b4 = {
  key: 1,
  class: "text-center mt-3"
}, E4 = { class: "d-flex gap-2 justify-content-end" }, w4 = ["onClick", "disabled"], A4 = ["onClick", "disabled"], S4 = /* @__PURE__ */ Te({
  __name: "ArchiveDeleteModal",
  emits: ["deleted"],
  setup(e, { expose: t, emit: n }) {
    const s = n, o = H(null), r = H(null), i = H(!1), a = async (h) => (r.value = h, i.value = !1, await o.value?.show() ?? !1), c = async (h) => {
      if (!(!r.value || i.value)) {
        i.value = !0;
        try {
          s("deleted", r.value.archive_id), h(!0);
        } catch (m) {
          console.error("Delete confirmation failed:", m);
        } finally {
          i.value = !1;
        }
      }
    }, f = (h) => {
      if (!h) return "Unknown";
      try {
        return new Date(h).toLocaleString();
      } catch {
        return h;
      }
    }, u = (h) => {
      if (h === 0) return "0 Bytes";
      const m = 1024, g = ["Bytes", "KB", "MB", "GB"], v = Math.floor(Math.log(h) / Math.log(m));
      return parseFloat((h / Math.pow(m, v)).toFixed(2)) + " " + g[v];
    }, d = (h) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[h] || "badge bg-secondary", p = (h) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[h] || "fas fa-question-circle";
    return t({ show: a }), (h, m) => {
      const g = Qe("b-modal");
      return T(), et(g, {
        ref_key: "deleteModal",
        ref: o
      }, {
        title: fe(() => m[0] || (m[0] = [
          U("Delete Archive")
        ])),
        footer: fe(({ hide: v }) => [
          l("div", E4, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (y) => v(!1),
              disabled: i.value
            }, m[12] || (m[12] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              U("Cancel ")
            ]), 8, w4),
            l("button", {
              class: "btn btn-sm btn-danger",
              type: "button",
              onClick: (y) => c(v),
              disabled: i.value
            }, [
              m[13] || (m[13] = l("i", { class: "fas fa-trash fa-fw me-1" }, null, -1)),
              U(" " + P(i.value ? "Deleting..." : "Delete Archive"), 1)
            ], 8, A4)
          ])
        ]),
        default: fe(() => [
          r.value ? (T(), R("div", g4, [
            m[8] || (m[8] = l("div", { class: "alert alert-warning" }, [
              l("i", { class: "fas fa-exclamation-triangle me-2" }),
              l("strong", null, "Warning:"),
              U(" This action cannot be undone. ")
            ], -1)),
            m[9] || (m[9] = l("p", null, "Are you sure you want to delete this archive?", -1)),
            l("div", v4, [
              l("div", _4, [
                m[7] || (m[7] = l("h6", { class: "card-title" }, "Archive Details", -1)),
                l("ul", y4, [
                  l("li", null, [
                    m[1] || (m[1] = l("strong", null, "Archive ID:", -1)),
                    U(" " + P(r.value.archive_id), 1)
                  ]),
                  l("li", null, [
                    m[2] || (m[2] = l("strong", null, "File Name:", -1)),
                    U(" " + P(r.value.file_name), 1)
                  ]),
                  l("li", null, [
                    m[3] || (m[3] = l("strong", null, "Created:", -1)),
                    U(" " + P(f(r.value.created_at)), 1)
                  ]),
                  l("li", null, [
                    m[4] || (m[4] = l("strong", null, "Size:", -1)),
                    U(" " + P(u(r.value.file_size)), 1)
                  ]),
                  l("li", null, [
                    m[5] || (m[5] = l("strong", null, "Resources:", -1)),
                    U(" " + P(r.value.total_resources), 1)
                  ]),
                  l("li", null, [
                    m[6] || (m[6] = l("strong", null, "Status:", -1)),
                    l("span", {
                      class: ce(d(r.value.status))
                    }, [
                      l("i", {
                        class: ce([p(r.value.status), "me-1"])
                      }, null, 2),
                      U(" " + P(r.value.status.charAt(0).toUpperCase() + r.value.status.slice(1)), 1)
                    ], 2)
                  ])
                ])
              ])
            ]),
            m[10] || (m[10] = l("div", { class: "mt-3" }, [
              l("p", { class: "mb-2" }, [
                l("strong", null, "This will:")
              ]),
              l("ul", { class: "mb-0" }, [
                l("li", null, "Remove the archive file from storage"),
                l("li", null, "Delete all archive metadata"),
                l("li", null, "Remove the archive from the archives list")
              ])
            ], -1))
          ])) : ye("", !0),
          i.value ? (T(), R("div", b4, m[11] || (m[11] = [
            l("div", {
              class: "spinner-border spinner-border-sm text-danger me-2",
              role: "status"
            }, [
              l("span", { class: "visually-hidden" }, "Deleting...")
            ], -1),
            l("span", null, "Deleting archive...", -1)
          ]))) : ye("", !0)
        ]),
        _: 1
      }, 512);
    };
  }
}), C4 = { class: "p-3" }, O4 = { class: "d-flex justify-content-between align-items-center mb-4" }, T4 = ["disabled"], N4 = { class: "card mb-4" }, D4 = { class: "card-body" }, k4 = { class: "row g-3" }, x4 = { class: "col-md-3" }, R4 = { class: "col-md-3" }, I4 = { class: "col-md-3" }, M4 = { class: "col-md-3" }, P4 = ["value"], V4 = {
  key: 0,
  class: "row mt-3"
}, L4 = { class: "row mb-4" }, F4 = { class: "col-md-3" }, B4 = { class: "card text-center" }, $4 = { class: "card-body py-3" }, j4 = { class: "card-title text-primary mb-1" }, U4 = { class: "col-md-3" }, H4 = { class: "card text-center" }, W4 = { class: "card-body py-3" }, K4 = { class: "card-title text-success mb-1" }, z4 = { class: "col-md-3" }, q4 = { class: "card text-center" }, Y4 = { class: "card-body py-3" }, X4 = { class: "card-title text-warning mb-1" }, G4 = { class: "col-md-3" }, Q4 = { class: "card text-center" }, J4 = { class: "card-body py-3" }, Z4 = { class: "card-title text-info mb-1" }, e3 = { class: "card" }, t3 = { class: "card-body p-0" }, n3 = {
  key: 0,
  class: "text-center py-5"
}, s3 = {
  key: 1,
  class: "text-center py-5"
}, o3 = { class: "mt-3 mb-2" }, r3 = { class: "text-muted mb-0" }, i3 = { key: 2 }, a3 = { class: "table-responsive" }, l3 = { class: "table table-hover mb-0" }, c3 = { class: "d-flex flex-column" }, u3 = { class: "fw-semibold" }, d3 = { class: "text-muted" }, f3 = ["title"], p3 = { class: "d-flex flex-column" }, h3 = {
  key: 0,
  class: "text-danger"
}, m3 = { class: "text-end" }, g3 = { class: "btn-group btn-group-sm" }, v3 = ["onClick"], _3 = ["onClick", "disabled"], y3 = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, b3 = { class: "text-muted" }, E3 = { class: "d-flex gap-2" }, w3 = /* @__PURE__ */ Te({
  __name: "ArchivesPage",
  setup(e) {
    const t = b_(), n = Zt(), s = H(null), o = H(""), r = H(""), i = H(""), a = j({
      get: () => t.pagination.page,
      set: (C) => t.setPage(C)
    }), c = j({
      get: () => t.pagination.limit,
      set: (C) => t.setLimit(C)
    });
    Tt(async () => {
      await p();
    });
    const f = j(() => o.value || r.value || i.value), u = j(() => {
      const C = t.completedArchives.reduce((w, D) => w + (D.file_size || 0), 0);
      return x(C);
    }), d = j(() => {
      const C = t.filteredArchives.length, w = (t.pagination.page - 1) * t.pagination.limit + 1, D = Math.min(w + t.pagination.limit - 1, C);
      return { start: w, end: D, total: C };
    }), p = async () => {
      try {
        await t.fetchArchives(), n.showSuccess("Archives refreshed successfully");
      } catch (C) {
        console.error("Failed to refresh archives:", C), n.showError("Failed to refresh archives");
      }
    }, h = () => {
      t.setFilter("searchQuery", o.value);
    }, m = () => {
      t.setFilter("status", r.value);
    }, g = () => {
      t.setFilter("processingMode", i.value);
    }, v = () => {
      o.value = "", r.value = "", i.value = "", t.clearFilters();
    }, y = async (C) => {
      try {
        await t.downloadArchive(C.archive_id), n.showSuccess(`Archive ${C.file_name} downloaded successfully`);
      } catch (w) {
        console.error("Failed to download archive:", w), n.showError(`Failed to download archive ${C.file_name}`);
      }
    }, b = async (C) => {
      await s.value?.show(C);
    }, _ = async (C) => {
      try {
        await t.deleteArchive(C), n.showSuccess("Archive deleted successfully");
      } catch (w) {
        console.error("Failed to delete archive:", w), n.showError("Failed to delete archive");
      }
    }, x = (C) => {
      if (C === 0) return "0 Bytes";
      const w = 1024, D = ["Bytes", "KB", "MB", "GB"], A = Math.floor(Math.log(C) / Math.log(w));
      return parseFloat((C / Math.pow(w, A)).toFixed(2)) + " " + D[A];
    }, k = (C) => {
      if (!C) return "Unknown";
      try {
        const w = new Date(C), A = (/* @__PURE__ */ new Date()).getTime() - w.getTime(), F = Math.floor(A / 6e4), de = Math.floor(F / 60), Y = Math.floor(de / 24);
        return F < 60 ? `${F}m ago` : de < 24 ? `${de}h ago` : Y < 7 ? `${Y}d ago` : w.toLocaleDateString();
      } catch {
        return C;
      }
    }, O = (C) => {
      if (!C) return "Unknown";
      try {
        return new Date(C).toLocaleString();
      } catch {
        return C;
      }
    }, N = (C) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[C] || "badge bg-secondary", I = (C) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[C] || "fas fa-question-circle";
    return Rt(() => t.filters, (C) => {
      o.value = C.searchQuery, r.value = C.status, i.value = C.processingMode;
    }, { deep: !0 }), Kr(() => {
    }), (C, w) => {
      const D = Qe("b-pagination"), A = Qe("b-pagination-dropdown");
      return T(), R("div", C4, [
        l("div", O4, [
          w[7] || (w[7] = l("div", null, [
            l("h4", { class: "mb-1" }, "Archive Management"),
            l("p", { class: "text-muted mb-0" }, "Manage and download your FHIR resource archives")
          ], -1)),
          l("div", null, [
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: p,
              disabled: ne(t).loading
            }, [
              l("i", {
                class: ce(["fas fa-sync-alt fa-fw me-1", { "fa-spin": ne(t).loading }])
              }, null, 2),
              w[6] || (w[6] = U(" Refresh "))
            ], 8, T4)
          ])
        ]),
        l("div", N4, [
          l("div", D4, [
            l("div", k4, [
              l("div", x4, [
                w[8] || (w[8] = l("label", { class: "form-label" }, "Search Archives", -1)),
                nt(l("input", {
                  type: "text",
                  class: "form-control form-control-sm",
                  placeholder: "Search by name or ID...",
                  "onUpdate:modelValue": w[0] || (w[0] = (F) => o.value = F),
                  onInput: h
                }, null, 544), [
                  [wo, o.value]
                ])
              ]),
              l("div", R4, [
                w[10] || (w[10] = l("label", { class: "form-label" }, "Status", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[1] || (w[1] = (F) => r.value = F),
                  onChange: m
                }, w[9] || (w[9] = [
                  Fl('<option value="">All Statuses</option><option value="completed">Completed</option><option value="processing">Processing</option><option value="pending">Pending</option><option value="failed">Failed</option>', 5)
                ]), 544), [
                  [cs, r.value]
                ])
              ]),
              l("div", I4, [
                w[12] || (w[12] = l("label", { class: "form-label" }, "Processing Mode", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[2] || (w[2] = (F) => i.value = F),
                  onChange: g
                }, w[11] || (w[11] = [
                  l("option", { value: "" }, "All Modes", -1),
                  l("option", { value: "immediate" }, "Immediate", -1),
                  l("option", { value: "background" }, "Background", -1)
                ]), 544), [
                  [cs, i.value]
                ])
              ]),
              l("div", M4, [
                w[13] || (w[13] = l("label", { class: "form-label" }, "Per Page", -1)),
                nt(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[3] || (w[3] = (F) => c.value = F)
                }, [
                  (T(!0), R(Se, null, Je(ne(t).pagination.perPageOptions, (F) => (T(), R("option", {
                    key: F,
                    value: F
                  }, P(F), 9, P4))), 128))
                ], 512), [
                  [cs, c.value]
                ])
              ])
            ]),
            f.value ? (T(), R("div", V4, [
              l("div", { class: "col" }, [
                l("button", {
                  class: "btn btn-outline-secondary btn-sm",
                  onClick: v
                }, w[14] || (w[14] = [
                  l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                  U("Clear Filters ")
                ]))
              ])
            ])) : ye("", !0)
          ])
        ]),
        l("div", L4, [
          l("div", F4, [
            l("div", B4, [
              l("div", $4, [
                l("h5", j4, P(ne(t).archives.length), 1),
                w[15] || (w[15] = l("p", { class: "card-text small text-muted mb-0" }, "Total Archives", -1))
              ])
            ])
          ]),
          l("div", U4, [
            l("div", H4, [
              l("div", W4, [
                l("h5", K4, P(ne(t).completedArchives.length), 1),
                w[16] || (w[16] = l("p", { class: "card-text small text-muted mb-0" }, "Completed", -1))
              ])
            ])
          ]),
          l("div", z4, [
            l("div", q4, [
              l("div", Y4, [
                l("h5", X4, P(ne(t).pendingArchives.length), 1),
                w[17] || (w[17] = l("p", { class: "card-text small text-muted mb-0" }, "In Progress", -1))
              ])
            ])
          ]),
          l("div", G4, [
            l("div", Q4, [
              l("div", J4, [
                l("h5", Z4, P(u.value), 1),
                w[18] || (w[18] = l("p", { class: "card-text small text-muted mb-0" }, "Total Size", -1))
              ])
            ])
          ])
        ]),
        l("div", e3, [
          l("div", t3, [
            ne(t).loading ? (T(), R("div", n3, w[19] || (w[19] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading archives...")
              ], -1),
              l("p", { class: "mt-2 mb-0 text-muted" }, "Loading archives...", -1)
            ]))) : ne(t).paginatedArchives.length === 0 ? (T(), R("div", s3, [
              w[20] || (w[20] = l("i", {
                class: "fas fa-archive text-muted",
                style: { "font-size": "3rem" }
              }, null, -1)),
              l("h6", o3, P(f.value ? "No archives match your filters" : "No archives found"), 1),
              l("p", r3, P(f.value ? "Try adjusting your search criteria." : "Archives will appear here when created."), 1)
            ])) : (T(), R("div", i3, [
              l("div", a3, [
                l("table", l3, [
                  w[22] || (w[22] = l("thead", { class: "table-light" }, [
                    l("tr", null, [
                      l("th", { scope: "col" }, "Archive"),
                      l("th", { scope: "col" }, "Status"),
                      l("th", { scope: "col" }, "Created"),
                      l("th", { scope: "col" }, "Size"),
                      l("th", { scope: "col" }, "Resources"),
                      l("th", { scope: "col" }, "Mode"),
                      l("th", {
                        scope: "col",
                        class: "text-end"
                      }, "Actions")
                    ])
                  ], -1)),
                  l("tbody", null, [
                    (T(!0), R(Se, null, Je(ne(t).paginatedArchives, (F) => (T(), R("tr", {
                      key: F.archive_id
                    }, [
                      l("td", null, [
                        l("div", c3, [
                          l("span", u3, P(F.file_name), 1),
                          l("small", d3, P(F.archive_id), 1)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: ce(N(F.status))
                        }, [
                          l("i", {
                            class: ce([I(F.status), "me-1"])
                          }, null, 2),
                          U(" " + P(F.status.charAt(0).toUpperCase() + F.status.slice(1)), 1)
                        ], 2)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: O(F.created_at)
                        }, P(k(F.created_at)), 9, f3)
                      ]),
                      l("td", null, P(x(F.file_size)), 1),
                      l("td", null, [
                        l("div", p3, [
                          l("span", null, P(F.total_resources), 1),
                          F.failed_files > 0 ? (T(), R("small", h3, P(F.failed_files) + " failed ", 1)) : ye("", !0)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: ce(["badge", F.processing_mode === "immediate" ? "bg-info" : "bg-secondary"])
                        }, P(F.processing_mode), 3)
                      ]),
                      l("td", m3, [
                        l("div", g3, [
                          F.status === "completed" && F.download_url ? (T(), R("button", {
                            key: 0,
                            class: "btn btn-outline-primary",
                            onClick: (de) => y(F),
                            title: "Download Archive"
                          }, w[21] || (w[21] = [
                            l("i", { class: "fas fa-download" }, null, -1)
                          ]), 8, v3)) : ye("", !0),
                          l("button", {
                            class: "btn btn-outline-danger",
                            onClick: (de) => b(F),
                            title: "Delete Archive",
                            disabled: ne(t).isArchiveDeleting(F.archive_id)
                          }, [
                            l("i", {
                              class: ce(["fas", ne(t).isArchiveDeleting(F.archive_id) ? "fa-spinner fa-spin" : "fa-trash"])
                            }, null, 2)
                          ], 8, _3)
                        ])
                      ])
                    ]))), 128))
                  ])
                ])
              ])
            ]))
          ])
        ]),
        ne(t).filteredArchives.length > 0 ? (T(), R("div", y3, [
          l("small", b3, " Showing " + P(d.value.start) + "-" + P(d.value.end) + " of " + P(d.value.total) + " archives ", 1),
          l("div", E3, [
            ue(D, {
              size: "sm",
              perPage: c.value,
              totalItems: ne(t).filteredArchives.length,
              modelValue: a.value,
              "onUpdate:modelValue": w[4] || (w[4] = (F) => a.value = F)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            ue(A, {
              options: ne(t).pagination.perPageOptions,
              modelValue: c.value,
              "onUpdate:modelValue": w[5] || (w[5] = (F) => c.value = F)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : ye("", !0),
        (T(), et(Hr, { to: "body" }, [
          ue(S4, {
            ref_key: "deleteModal",
            ref: s,
            onDeleted: _
          }, null, 512)
        ]))
      ]);
    };
  }
}), A3 = {}, S3 = { class: "error-wrapper" }, C3 = { class: "mt-5" };
function O3(e, t) {
  const n = Qe("router-link");
  return T(), R("div", S3, [
    De(e.$slots, "title", {}, () => [
      t[0] || (t[0] = l("span", { class: "error-title" }, "Error 404", -1))
    ], !0),
    De(e.$slots, "description", {}, () => [
      t[1] || (t[1] = l("span", { class: "error-description" }, "Sorry, we couldn't find this page.", -1))
    ], !0),
    De(e.$slots, "subdescription", {}, () => [
      t[2] || (t[2] = l("span", { class: "error-sub-description" }, "But dont worry, you can find plenty of other things on the homepage..", -1))
    ], !0),
    l("div", C3, [
      ue(n, {
        to: "/",
        class: "btn btn-sm btn-primary"
      }, {
        default: fe(() => t[3] || (t[3] = [
          l("i", { class: "fas fa-arrow-left fa-fw me-1" }, null, -1),
          l("span", null, "Back to Home", -1)
        ])),
        _: 1,
        __: [3]
      })
    ])
  ]);
}
const T3 = /* @__PURE__ */ fn(A3, [["render", O3], ["__scopeId", "data-v-d4f8fed2"]]), N3 = { class: "card shadow-sm" }, D3 = { class: "card-body" }, k3 = { class: "text-center" }, x3 = {
  key: 0,
  class: "lead text-danger"
}, R3 = {
  key: 1,
  class: "text-muted"
}, I3 = /* @__PURE__ */ Te({
  __name: "ErrorPage",
  setup(e) {
    const n = Vg().query.message;
    return (s, o) => {
      const r = Qe("router-link");
      return T(), R("div", N3, [
        l("div", D3, [
          l("div", k3, [
            o[1] || (o[1] = l("h1", { class: "display-4" }, "Something went wrong", -1)),
            ne(n) ? (T(), R("p", x3, "Error: " + P(ne(n)), 1)) : (T(), R("p", R3, "We're sorry for the inconvenience. Please try again later.")),
            ue(r, {
              to: "/",
              class: "btn btn-primary mt-3"
            }, {
              default: fe(() => o[0] || (o[0] = [
                U("Go back to Home")
              ])),
              _: 1,
              __: [0]
            })
          ])
        ])
      ]);
    };
  }
}), M3 = [
  {
    path: "/",
    component: XA,
    children: [
      { path: "", name: "home", component: L2 },
      { path: "setup", name: "setup", component: AI },
      { path: "resources", name: "resources", component: VL },
      { path: "tasks", name: "tasks", component: m4 },
      { path: "archives", name: "archives", component: w3 },
      { path: "error", name: "error", component: I3 },
      { path: "/:pathMatch(.*)*", component: T3 }
    ]
  }
];
let yi;
const Kp = () => yi || (yi = BA({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: Xw(),
  routes: M3
}), yi), P3 = {
  key: 0,
  class: "alert alert-danger"
}, V3 = { style: { "word-break": "break-all" } }, L3 = /* @__PURE__ */ Te({
  __name: "ErrorsVisualizer",
  setup(e) {
    const t = H(), n = Wo(), { errors: s } = jo(n), o = (r) => JSON.stringify(r);
    return ma(async () => {
      if (s.value?.length === 0) return;
      const r = t.value;
      r && (await r.show(), n.resetErrors());
    }), (r, i) => {
      const a = Qe("b-modal");
      return T(), et(a, {
        ref_key: "modalRef",
        ref: t,
        "ok-only": "",
        size: "xl"
      }, {
        title: fe(() => i[0] || (i[0] = [
          l("span", null, "Error", -1)
        ])),
        default: fe(() => [
          (T(!0), R(Se, null, Je(ne(s), (c, f) => (T(), R(Se, { key: f }, [
            c ? (T(), R("div", P3, [
              l("div", V3, P(o(c)), 1)
            ])) : ye("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 512);
    };
  }
}), F3 = /* @__PURE__ */ Te({
  __name: "App",
  setup(e) {
    const t = Yo();
    return Tt(() => {
      t.fetchProjectSettings();
    }), (n, s) => {
      const o = Qe("router-view");
      return T(), R("div", null, [
        ue(o),
        ue(L3)
      ]);
    };
  }
}), sB = (e) => {
  const t = ba(F3);
  t.config.errorHandler = (o, r, i) => {
    console.error("💥 Vue Error:", o), console.error("📍 Component:", r), console.error("ℹ️ Info:", i), t.runWithContext(() => {
      o instanceof Error ? Kp().push({ name: "error", query: { message: o.message } }) : console.error("Unhandled non-Error exception:", o);
    });
  };
  const n = aw();
  t.use(pR), t.use(n);
  const s = Kp();
  return t.use(s), t.mount(e), t;
};
export {
  sB as default
};
