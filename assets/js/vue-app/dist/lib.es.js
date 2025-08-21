var Mp = {};
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Un(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Oe = Mp.NODE_ENV !== "production" ? Object.freeze({}) : {}, ur = Mp.NODE_ENV !== "production" ? Object.freeze([]) : [], Qe = () => {
}, uE = () => !1, Ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ni = (e) => e.startsWith("onUpdate:"), He = Object.assign, uu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, cE = Object.prototype.hasOwnProperty, Se = (e, t) => cE.call(e, t), oe = Array.isArray, To = (e) => Ns(e) === "[object Map]", Yi = (e) => Ns(e) === "[object Set]", _c = (e) => Ns(e) === "[object Date]", ae = (e) => typeof e == "function", Fe = (e) => typeof e == "string", Yt = (e) => typeof e == "symbol", Ne = (e) => e !== null && typeof e == "object", cu = (e) => (Ne(e) || ae(e)) && ae(e.then) && ae(e.catch), Fp = Object.prototype.toString, Ns = (e) => Fp.call(e), fu = (e) => Ns(e).slice(8, -1), Bp = (e) => Ns(e) === "[object Object]", du = (e) => Fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xr = /* @__PURE__ */ Un(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), fE = /* @__PURE__ */ Un(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Xi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, dE = /-(\w)/g, lt = Xi(
  (e) => e.replace(dE, (t, n) => n ? n.toUpperCase() : "")
), pE = /\B([A-Z])/g, vn = Xi(
  (e) => e.replace(pE, "-$1").toLowerCase()
), Po = Xi((e) => e.charAt(0).toUpperCase() + e.slice(1)), Eo = Xi(
  (e) => e ? `on${Po(e)}` : ""
), bt = (e, t) => !Object.is(e, t), er = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, as = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Ti = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, hE = (e) => {
  const t = Fe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let gc;
const Ts = () => gc || (gc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cs(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = Fe(o) ? EE(o) : Cs(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Fe(e) || Ne(e))
    return e;
}
const mE = /;(?![^(]*\))/g, _E = /:([^]+)/, gE = /\/\*[^]*?\*\//g;
function EE(e) {
  const t = {};
  return e.replace(gE, "").split(mE).forEach((n) => {
    if (n) {
      const o = n.split(_E);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Ve(e) {
  let t = "";
  if (Fe(e))
    t = e;
  else if (oe(e))
    for (let n = 0; n < e.length; n++) {
      const o = Ve(e[n]);
      o && (t += o + " ");
    }
  else if (Ne(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function qe(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Fe(t) && (e.class = Ve(t)), n && (e.style = Cs(n)), e;
}
const vE = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", yE = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", bE = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", wE = /* @__PURE__ */ Un(vE), OE = /* @__PURE__ */ Un(yE), AE = /* @__PURE__ */ Un(bE), SE = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", NE = /* @__PURE__ */ Un(SE);
function Up(e) {
  return !!e || e === "";
}
function TE(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = pr(e[o], t[o]);
  return n;
}
function pr(e, t) {
  if (e === t) return !0;
  let n = _c(e), o = _c(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Yt(e), o = Yt(t), n || o)
    return e === t;
  if (n = oe(e), o = oe(t), n || o)
    return n && o ? TE(e, t) : !1;
  if (n = Ne(e), o = Ne(t), n || o) {
    if (!n || !o)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (a && !l || !a && l || !pr(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function CE(e, t) {
  return e.findIndex((n) => pr(n, t));
}
const Hp = (e) => !!(e && e.__v_isRef === !0), $e = (e) => Fe(e) ? e : e == null ? "" : oe(e) || Ne(e) && (e.toString === Fp || !ae(e.toString)) ? Hp(e) ? $e(e.value) : JSON.stringify(e, jp, 2) : String(e), jp = (e, t) => Hp(t) ? jp(e, t.value) : To(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[Da(o, s) + " =>"] = r, n),
    {}
  )
} : Yi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Da(n))
} : Yt(t) ? Da(t) : Ne(t) && !oe(t) && !Bp(t) ? String(t) : t, Da = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Ie = {};
function Mt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let st;
class Kp {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = st, !t && st && (this.index = (st.scopes || (st.scopes = [])).push(
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
      const n = st;
      try {
        return st = this, t();
      } finally {
        st = n;
      }
    } else Ie.NODE_ENV !== "production" && Mt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = st, st = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (st = this.prevScope, this.prevScope = void 0);
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
function Wp(e) {
  return new Kp(e);
}
function zp() {
  return st;
}
function DE(e, t = !1) {
  st ? st.cleanups.push(e) : Ie.NODE_ENV !== "production" && !t && Mt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let xe;
const xa = /* @__PURE__ */ new WeakSet();
class qp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, st && st.active && st.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, xa.has(this) && (xa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Yp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ec(this), Xp(this);
    const t = xe, n = qt;
    xe = this, qt = !0;
    try {
      return this.fn();
    } finally {
      Ie.NODE_ENV !== "production" && xe !== this && Mt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Jp(this), xe = t, qt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        mu(t);
      this.deps = this.depsTail = void 0, Ec(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? xa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    hl(this) && this.run();
  }
  get dirty() {
    return hl(this);
  }
}
let Gp = 0, Jr, Qr;
function Yp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Qr, Qr = e;
    return;
  }
  e.next = Jr, Jr = e;
}
function pu() {
  Gp++;
}
function hu() {
  if (--Gp > 0)
    return;
  if (Qr) {
    let t = Qr;
    for (Qr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Jr; ) {
    let t = Jr;
    for (Jr = void 0; t; ) {
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
function Xp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Jp(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === n && (n = r), mu(o), xE(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = t, e.depsTail = n;
}
function hl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Qp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Qp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ls) || (e.globalVersion = ls, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !hl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = xe, o = qt;
  xe = e, qt = !0;
  try {
    Xp(e);
    const r = e.fn(e._value);
    (t.version === 0 || bt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    xe = n, qt = o, Jp(e), e.flags &= -3;
  }
}
function mu(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), Ie.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      mu(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function xE(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let qt = !0;
const Zp = [];
function Xt() {
  Zp.push(qt), qt = !1;
}
function Jt() {
  const e = Zp.pop();
  qt = e === void 0 ? !0 : e;
}
function Ec(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = xe;
    xe = void 0;
    try {
      t();
    } finally {
      xe = n;
    }
  }
}
let ls = 0;
class RE {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ji {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, Ie.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!xe || !qt || xe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== xe)
      n = this.activeLink = new RE(xe, this), xe.deps ? (n.prevDep = xe.depsTail, xe.depsTail.nextDep = n, xe.depsTail = n) : xe.deps = xe.depsTail = n, eh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = xe.depsTail, n.nextDep = void 0, xe.depsTail.nextDep = n, xe.depsTail = n, xe.deps === n && (xe.deps = o);
    }
    return Ie.NODE_ENV !== "production" && xe.onTrack && xe.onTrack(
      He(
        {
          effect: xe
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, ls++, this.notify(t);
  }
  notify(t) {
    pu();
    try {
      if (Ie.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            He(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      hu();
    }
  }
}
function eh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        eh(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), Ie.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Ci = /* @__PURE__ */ new WeakMap(), Co = Symbol(
  Ie.NODE_ENV !== "production" ? "Object iterate" : ""
), ml = Symbol(
  Ie.NODE_ENV !== "production" ? "Map keys iterate" : ""
), us = Symbol(
  Ie.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Je(e, t, n) {
  if (qt && xe) {
    let o = Ci.get(e);
    o || Ci.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || (o.set(n, r = new Ji()), r.map = o, r.key = n), Ie.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function fn(e, t, n, o, r, s) {
  const i = Ci.get(e);
  if (!i) {
    ls++;
    return;
  }
  const a = (l) => {
    l && (Ie.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: r,
      oldTarget: s
    }) : l.trigger());
  };
  if (pu(), t === "clear")
    i.forEach(a);
  else {
    const l = oe(e), f = l && du(n);
    if (l && n === "length") {
      const u = Number(o);
      i.forEach((c, d) => {
        (d === "length" || d === us || !Yt(d) && d >= u) && a(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(us)), t) {
        case "add":
          l ? f && a(i.get("length")) : (a(i.get(Co)), To(e) && a(i.get(ml)));
          break;
        case "delete":
          l || (a(i.get(Co)), To(e) && a(i.get(ml)));
          break;
        case "set":
          To(e) && a(i.get(Co));
          break;
      }
  }
  hu();
}
function kE(e, t) {
  const n = Ci.get(e);
  return n && n.get(t);
}
function qo(e) {
  const t = de(e);
  return t === e ? t : (Je(t, "iterate", us), ht(e) ? t : t.map(rt));
}
function Qi(e) {
  return Je(e = de(e), "iterate", us), e;
}
const $E = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ra(this, Symbol.iterator, rt);
  },
  concat(...e) {
    return qo(this).concat(
      ...e.map((t) => oe(t) ? qo(t) : t)
    );
  },
  entries() {
    return Ra(this, "entries", (e) => (e[1] = rt(e[1]), e));
  },
  every(e, t) {
    return Nn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Nn(this, "filter", e, t, (n) => n.map(rt), arguments);
  },
  find(e, t) {
    return Nn(this, "find", e, t, rt, arguments);
  },
  findIndex(e, t) {
    return Nn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Nn(this, "findLast", e, t, rt, arguments);
  },
  findLastIndex(e, t) {
    return Nn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Nn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ka(this, "includes", e);
  },
  indexOf(...e) {
    return ka(this, "indexOf", e);
  },
  join(e) {
    return qo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ka(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Nn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Lr(this, "pop");
  },
  push(...e) {
    return Lr(this, "push", e);
  },
  reduce(e, ...t) {
    return vc(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return vc(this, "reduceRight", e, t);
  },
  shift() {
    return Lr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Nn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Lr(this, "splice", e);
  },
  toReversed() {
    return qo(this).toReversed();
  },
  toSorted(e) {
    return qo(this).toSorted(e);
  },
  toSpliced(...e) {
    return qo(this).toSpliced(...e);
  },
  unshift(...e) {
    return Lr(this, "unshift", e);
  },
  values() {
    return Ra(this, "values", rt);
  }
};
function Ra(e, t, n) {
  const o = Qi(e), r = o[t]();
  return o !== e && !ht(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.value && (s.value = n(s.value)), s;
  }), r;
}
const IE = Array.prototype;
function Nn(e, t, n, o, r, s) {
  const i = Qi(e), a = i !== e && !ht(e), l = i[t];
  if (l !== IE[t]) {
    const c = l.apply(e, s);
    return a ? rt(c) : c;
  }
  let f = n;
  i !== e && (a ? f = function(c, d) {
    return n.call(this, rt(c), d, e);
  } : n.length > 2 && (f = function(c, d) {
    return n.call(this, c, d, e);
  }));
  const u = l.call(i, f, o);
  return a && r ? r(u) : u;
}
function vc(e, t, n, o) {
  const r = Qi(e);
  let s = n;
  return r !== e && (ht(e) ? n.length > 3 && (s = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : s = function(i, a, l) {
    return n.call(this, i, rt(a), l, e);
  }), r[t](s, ...o);
}
function ka(e, t, n) {
  const o = de(e);
  Je(o, "iterate", us);
  const r = o[t](...n);
  return (r === -1 || r === !1) && cs(n[0]) ? (n[0] = de(n[0]), o[t](...n)) : r;
}
function Lr(e, t, n = []) {
  Xt(), pu();
  const o = de(e)[t].apply(e, n);
  return hu(), Jt(), o;
}
const PE = /* @__PURE__ */ Un("__proto__,__v_isRef,__isVue"), th = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Yt)
);
function VE(e) {
  Yt(e) || (e = String(e));
  const t = de(this);
  return Je(t, "has", e), t.hasOwnProperty(e);
}
class nh {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (r ? s ? lh : ah : s ? ih : sh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = oe(t);
    if (!r) {
      let l;
      if (i && (l = $E[n]))
        return l;
      if (n === "hasOwnProperty")
        return VE;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Le(t) ? t : o
    );
    return (Yt(n) ? th.has(n) : PE(n)) || (r || Je(t, "get", n), s) ? a : Le(a) ? i && du(n) ? a : a.value : Ne(a) ? r ? _u(a) : Vo(a) : a;
  }
}
class oh extends nh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._isShallow) {
      const l = yn(s);
      if (!ht(o) && !yn(o) && (s = de(s), o = de(o)), !oe(t) && Le(s) && !Le(o))
        return l ? !1 : (s.value = o, !0);
    }
    const i = oe(t) && du(n) ? Number(n) < t.length : Se(t, n), a = Reflect.set(
      t,
      n,
      o,
      Le(t) ? t : r
    );
    return t === de(r) && (i ? bt(o, s) && fn(t, "set", n, o, s) : fn(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = Se(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && fn(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Yt(n) || !th.has(n)) && Je(t, "has", n), o;
  }
  ownKeys(t) {
    return Je(
      t,
      "iterate",
      oe(t) ? "length" : Co
    ), Reflect.ownKeys(t);
  }
}
class rh extends nh {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Ie.NODE_ENV !== "production" && Mt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Ie.NODE_ENV !== "production" && Mt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const LE = /* @__PURE__ */ new oh(), ME = /* @__PURE__ */ new rh(), FE = /* @__PURE__ */ new oh(!0), BE = /* @__PURE__ */ new rh(!0), _l = (e) => e, Ws = (e) => Reflect.getPrototypeOf(e);
function UE(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = de(r), i = To(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, f = r[e](...o), u = n ? _l : t ? Di : rt;
    return !t && Je(
      s,
      "iterate",
      l ? ml : Co
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
function zs(e) {
  return function(...t) {
    if (Ie.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Mt(
        `${Po(e)} operation ${n}failed: target is readonly.`,
        de(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function HE(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, i = de(s), a = de(r);
      e || (bt(r, a) && Je(i, "get", r), Je(i, "get", a));
      const { has: l } = Ws(i), f = t ? _l : e ? Di : rt;
      if (l.call(i, r))
        return f(s.get(r));
      if (l.call(i, a))
        return f(s.get(a));
      s !== i && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Je(de(r), "iterate", Co), Reflect.get(r, "size", r);
    },
    has(r) {
      const s = this.__v_raw, i = de(s), a = de(r);
      return e || (bt(r, a) && Je(i, "has", r), Je(i, "has", a)), r === a ? s.has(r) : s.has(r) || s.has(a);
    },
    forEach(r, s) {
      const i = this, a = i.__v_raw, l = de(a), f = t ? _l : e ? Di : rt;
      return !e && Je(l, "iterate", Co), a.forEach((u, c) => r.call(s, f(u), f(c), i));
    }
  };
  return He(
    n,
    e ? {
      add: zs("add"),
      set: zs("set"),
      delete: zs("delete"),
      clear: zs("clear")
    } : {
      add(r) {
        !t && !ht(r) && !yn(r) && (r = de(r));
        const s = de(this);
        return Ws(s).has.call(s, r) || (s.add(r), fn(s, "add", r, r)), this;
      },
      set(r, s) {
        !t && !ht(s) && !yn(s) && (s = de(s));
        const i = de(this), { has: a, get: l } = Ws(i);
        let f = a.call(i, r);
        f ? Ie.NODE_ENV !== "production" && yc(i, a, r) : (r = de(r), f = a.call(i, r));
        const u = l.call(i, r);
        return i.set(r, s), f ? bt(s, u) && fn(i, "set", r, s, u) : fn(i, "add", r, s), this;
      },
      delete(r) {
        const s = de(this), { has: i, get: a } = Ws(s);
        let l = i.call(s, r);
        l ? Ie.NODE_ENV !== "production" && yc(s, i, r) : (r = de(r), l = i.call(s, r));
        const f = a ? a.call(s, r) : void 0, u = s.delete(r);
        return l && fn(s, "delete", r, void 0, f), u;
      },
      clear() {
        const r = de(this), s = r.size !== 0, i = Ie.NODE_ENV !== "production" ? To(r) ? new Map(r) : new Set(r) : void 0, a = r.clear();
        return s && fn(
          r,
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
  ].forEach((r) => {
    n[r] = UE(r, e, t);
  }), n;
}
function Zi(e, t) {
  const n = HE(e, t);
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    Se(n, r) && r in o ? n : o,
    r,
    s
  );
}
const jE = {
  get: /* @__PURE__ */ Zi(!1, !1)
}, KE = {
  get: /* @__PURE__ */ Zi(!1, !0)
}, WE = {
  get: /* @__PURE__ */ Zi(!0, !1)
}, zE = {
  get: /* @__PURE__ */ Zi(!0, !0)
};
function yc(e, t, n) {
  const o = de(n);
  if (o !== n && t.call(e, o)) {
    const r = fu(e);
    Mt(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const sh = /* @__PURE__ */ new WeakMap(), ih = /* @__PURE__ */ new WeakMap(), ah = /* @__PURE__ */ new WeakMap(), lh = /* @__PURE__ */ new WeakMap();
function qE(e) {
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
function GE(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : qE(fu(e));
}
function Vo(e) {
  return yn(e) ? e : ea(
    e,
    !1,
    LE,
    jE,
    sh
  );
}
function uh(e) {
  return ea(
    e,
    !1,
    FE,
    KE,
    ih
  );
}
function _u(e) {
  return ea(
    e,
    !0,
    ME,
    WE,
    ah
  );
}
function pn(e) {
  return ea(
    e,
    !0,
    BE,
    zE,
    lh
  );
}
function ea(e, t, n, o, r) {
  if (!Ne(e))
    return Ie.NODE_ENV !== "production" && Mt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = GE(e);
  if (s === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const a = new Proxy(
    e,
    s === 2 ? o : n
  );
  return r.set(e, a), a;
}
function Gt(e) {
  return yn(e) ? Gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function yn(e) {
  return !!(e && e.__v_isReadonly);
}
function ht(e) {
  return !!(e && e.__v_isShallow);
}
function cs(e) {
  return e ? !!e.__v_raw : !1;
}
function de(e) {
  const t = e && e.__v_raw;
  return t ? de(t) : e;
}
function eo(e) {
  return !Se(e, "__v_skip") && Object.isExtensible(e) && as(e, "__v_skip", !0), e;
}
const rt = (e) => Ne(e) ? Vo(e) : e, Di = (e) => Ne(e) ? _u(e) : e;
function Le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ue(e) {
  return fh(e, !1);
}
function ch(e) {
  return fh(e, !0);
}
function fh(e, t) {
  return Le(e) ? e : new YE(e, t);
}
class YE {
  constructor(t, n) {
    this.dep = new Ji(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : de(t), this._value = n ? t : rt(t), this.__v_isShallow = n;
  }
  get value() {
    return Ie.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || ht(t) || yn(t);
    t = o ? t : de(t), bt(t, n) && (this._rawValue = t, this._value = o ? t : rt(t), Ie.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ve(e) {
  return Le(e) ? e.value : e;
}
const XE = {
  get: (e, t, n) => t === "__v_raw" ? e : ve(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Le(r) && !Le(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function dh(e) {
  return Gt(e) ? e : new Proxy(e, XE);
}
class JE {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Ji(), { get: o, set: r } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = o, this._set = r;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function QE(e) {
  return new JE(e);
}
function Qt(e) {
  Ie.NODE_ENV !== "production" && !cs(e) && Mt("toRefs() expects a reactive object but received a plain one.");
  const t = oe(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ph(e, n);
  return t;
}
class ZE {
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
    return kE(de(this._object), this._key);
  }
}
class ev {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function ii(e, t, n) {
  return Le(e) ? e : ae(e) ? new ev(e) : Ne(e) && arguments.length > 1 ? ph(e, t, n) : ue(e);
}
function ph(e, t, n) {
  const o = e[t];
  return Le(o) ? o : new ZE(e, t, n);
}
class tv {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ji(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ls - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    xe !== this)
      return Yp(this, !0), !0;
  }
  get value() {
    const t = Ie.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Qp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Ie.NODE_ENV !== "production" && Mt("Write operation failed: computed value is readonly");
  }
}
function nv(e, t, n = !1) {
  let o, r;
  return ae(e) ? o = e : (o = e.get, r = e.set), new tv(o, r, n);
}
const qs = {}, xi = /* @__PURE__ */ new WeakMap();
let vo;
function ov(e, t = !1, n = vo) {
  if (n) {
    let o = xi.get(n);
    o || xi.set(n, o = []), o.push(e);
  } else Ie.NODE_ENV !== "production" && !t && Mt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function rv(e, t, n = Oe) {
  const { immediate: o, deep: r, once: s, scheduler: i, augmentJob: a, call: l } = n, f = (S) => {
    (n.onWarn || Mt)(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (S) => r ? S : ht(S) || r === !1 || r === 0 ? $n(S, 1) : $n(S);
  let c, d, p, h, m = !1, g = !1;
  if (Le(e) ? (d = () => e.value, m = ht(e)) : Gt(e) ? (d = () => u(e), m = !0) : oe(e) ? (g = !0, m = e.some((S) => Gt(S) || ht(S)), d = () => e.map((S) => {
    if (Le(S))
      return S.value;
    if (Gt(S))
      return u(S);
    if (ae(S))
      return l ? l(S, 2) : S();
    Ie.NODE_ENV !== "production" && f(S);
  })) : ae(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (p) {
      Xt();
      try {
        p();
      } finally {
        Jt();
      }
    }
    const S = vo;
    vo = c;
    try {
      return l ? l(e, 3, [h]) : e(h);
    } finally {
      vo = S;
    }
  } : (d = Qe, Ie.NODE_ENV !== "production" && f(e)), t && r) {
    const S = d, T = r === !0 ? 1 / 0 : r;
    d = () => $n(S(), T);
  }
  const E = zp(), O = () => {
    c.stop(), E && E.active && uu(E.effects, c);
  };
  if (s && t) {
    const S = t;
    t = (...T) => {
      S(...T), O();
    };
  }
  let y = g ? new Array(e.length).fill(qs) : qs;
  const R = (S) => {
    if (!(!(c.flags & 1) || !c.dirty && !S))
      if (t) {
        const T = c.run();
        if (r || m || (g ? T.some((N, V) => bt(N, y[V])) : bt(T, y))) {
          p && p();
          const N = vo;
          vo = c;
          try {
            const V = [
              T,
              // pass undefined as the old value when it's changed for the first time
              y === qs ? void 0 : g && y[0] === qs ? [] : y,
              h
            ];
            y = T, l ? l(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            );
          } finally {
            vo = N;
          }
        }
      } else
        c.run();
  };
  return a && a(R), c = new qp(d), c.scheduler = i ? () => i(R, !1) : R, h = (S) => ov(S, !1, c), p = c.onStop = () => {
    const S = xi.get(c);
    if (S) {
      if (l)
        l(S, 4);
      else
        for (const T of S) T();
      xi.delete(c);
    }
  }, Ie.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? o ? R(!0) : y = c.run() : i ? i(R.bind(null, !0), !0) : c.run(), O.pause = c.pause.bind(c), O.resume = c.resume.bind(c), O.stop = O, O;
}
function $n(e, t = 1 / 0, n) {
  if (t <= 0 || !Ne(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Le(e))
    $n(e.value, t, n);
  else if (oe(e))
    for (let o = 0; o < e.length; o++)
      $n(e[o], t, n);
  else if (Yi(e) || To(e))
    e.forEach((o) => {
      $n(o, t, n);
    });
  else if (Bp(e)) {
    for (const o in e)
      $n(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && $n(e[o], t, n);
  }
  return e;
}
var w = {};
const Do = [];
function ai(e) {
  Do.push(e);
}
function li() {
  Do.pop();
}
let $a = !1;
function B(e, ...t) {
  if ($a) return;
  $a = !0, Xt();
  const n = Do.length ? Do[Do.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = sv();
  if (o)
    Cr(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var i, a;
          return (a = (i = s.toString) == null ? void 0 : i.call(s)) != null ? a : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${ua(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...iv(r)), console.warn(...s);
  }
  Jt(), $a = !1;
}
function sv() {
  let e = Do[Do.length - 1];
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
function iv(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...av(n));
  }), t;
}
function av({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${ua(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...lv(e.props), s] : [r + s];
}
function lv(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...hh(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function hh(e, t, n) {
  return Fe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Le(t) ? (t = hh(e, de(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ae(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = de(t), n ? t : [`${e}=`, t]);
}
function uv(e, t) {
  w.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? B(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && B(`${t} is NaN - the duration expression might be incorrect.`));
}
const gu = {
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
function Cr(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Ds(r, t, n);
  }
}
function Zt(e, t, n, o) {
  if (ae(e)) {
    const r = Cr(e, t, n, o);
    return r && cu(r) && r.catch((s) => {
      Ds(s, t, n);
    }), r;
  }
  if (oe(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(Zt(e[s], t, n, o));
    return r;
  } else w.NODE_ENV !== "production" && B(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Ds(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Oe;
  if (t) {
    let a = t.parent;
    const l = t.proxy, f = w.NODE_ENV !== "production" ? gu[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let c = 0; c < u.length; c++)
          if (u[c](e, l, f) === !1)
            return;
      }
      a = a.parent;
    }
    if (s) {
      Xt(), Cr(s, null, 10, [
        e,
        l,
        f
      ]), Jt();
      return;
    }
  }
  cv(e, n, r, o, i);
}
function cv(e, t, n, o = !0, r = !1) {
  if (w.NODE_ENV !== "production") {
    const s = gu[t];
    if (n && ai(n), B(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && li(), o)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const dt = [];
let cn = -1;
const cr = [];
let Gn = null, tr = 0;
const mh = /* @__PURE__ */ Promise.resolve();
let Ri = null;
const fv = 100;
function hr(e) {
  const t = Ri || mh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dv(e) {
  let t = cn + 1, n = dt.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = dt[o], s = fs(r);
    s < e || s === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function ta(e) {
  if (!(e.flags & 1)) {
    const t = fs(e), n = dt[dt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= fs(n) ? dt.push(e) : dt.splice(dv(t), 0, e), e.flags |= 1, _h();
  }
}
function _h() {
  Ri || (Ri = mh.then(vh));
}
function gh(e) {
  oe(e) ? cr.push(...e) : Gn && e.id === -1 ? Gn.splice(tr + 1, 0, e) : e.flags & 1 || (cr.push(e), e.flags |= 1), _h();
}
function bc(e, t, n = cn + 1) {
  for (w.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < dt.length; n++) {
    const o = dt[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || w.NODE_ENV !== "production" && Eu(t, o))
        continue;
      dt.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Eh(e) {
  if (cr.length) {
    const t = [...new Set(cr)].sort(
      (n, o) => fs(n) - fs(o)
    );
    if (cr.length = 0, Gn) {
      Gn.push(...t);
      return;
    }
    for (Gn = t, w.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), tr = 0; tr < Gn.length; tr++) {
      const n = Gn[tr];
      w.NODE_ENV !== "production" && Eu(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Gn = null, tr = 0;
  }
}
const fs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function vh(e) {
  w.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = w.NODE_ENV !== "production" ? (n) => Eu(e, n) : Qe;
  try {
    for (cn = 0; cn < dt.length; cn++) {
      const n = dt[cn];
      if (n && !(n.flags & 8)) {
        if (w.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Cr(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; cn < dt.length; cn++) {
      const n = dt[cn];
      n && (n.flags &= -2);
    }
    cn = -1, dt.length = 0, Eh(e), Ri = null, (dt.length || cr.length) && vh(e);
  }
}
function Eu(e, t) {
  const n = e.get(t) || 0;
  if (n > fv) {
    const o = t.i, r = o && Su(o.type);
    return Ds(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Wt = !1;
const ui = /* @__PURE__ */ new Map();
w.NODE_ENV !== "production" && (Ts().__VUE_HMR_RUNTIME__ = {
  createRecord: Ia(yh),
  rerender: Ia(mv),
  reload: Ia(_v)
});
const Lo = /* @__PURE__ */ new Map();
function pv(e) {
  const t = e.type.__hmrId;
  let n = Lo.get(t);
  n || (yh(t, e.type), n = Lo.get(t)), n.instances.add(e);
}
function hv(e) {
  Lo.get(e.type.__hmrId).instances.delete(e);
}
function yh(e, t) {
  return Lo.has(e) ? !1 : (Lo.set(e, {
    initialDef: ki(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ki(e) {
  return fm(e) ? e.__vccOpts : e;
}
function mv(e, t) {
  const n = Lo.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, ki(o.type).render = t), o.renderCache = [], Wt = !0, o.update(), Wt = !1;
  }));
}
function _v(e, t) {
  const n = Lo.get(e);
  if (!n) return;
  t = ki(t), wc(n.initialDef, t);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const s = o[r], i = ki(s.type);
    let a = ui.get(i);
    a || (i !== n.initialDef && wc(i, t), ui.set(i, a = /* @__PURE__ */ new Set())), a.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (a.add(s), s.ceReload(t.styles), a.delete(s)) : s.parent ? ta(() => {
      Wt = !0, s.parent.update(), Wt = !1, a.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  gh(() => {
    ui.clear();
  });
}
function wc(e, t) {
  He(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ia(e) {
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
let dn, zr = [], gl = !1;
function xs(e, ...t) {
  dn ? dn.emit(e, ...t) : gl || zr.push({ event: e, args: t });
}
function bh(e, t) {
  var n, o;
  dn = e, dn ? (dn.enabled = !0, zr.forEach(({ event: r, args: s }) => dn.emit(r, ...s)), zr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    bh(s, t);
  }), setTimeout(() => {
    dn || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, gl = !0, zr = []);
  }, 3e3)) : (gl = !0, zr = []);
}
function gv(e, t) {
  xs("app:init", e, t, {
    Fragment: Ce,
    Text: ks,
    Comment: Ge,
    Static: fi
  });
}
function Ev(e) {
  xs("app:unmount", e);
}
const vv = /* @__PURE__ */ vu(
  "component:added"
  /* COMPONENT_ADDED */
), wh = /* @__PURE__ */ vu(
  "component:updated"
  /* COMPONENT_UPDATED */
), yv = /* @__PURE__ */ vu(
  "component:removed"
  /* COMPONENT_REMOVED */
), bv = (e) => {
  dn && typeof dn.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !dn.cleanupBuffer(e) && yv(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vu(e) {
  return (t) => {
    xs(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const wv = /* @__PURE__ */ Oh(
  "perf:start"
  /* PERFORMANCE_START */
), Ov = /* @__PURE__ */ Oh(
  "perf:end"
  /* PERFORMANCE_END */
);
function Oh(e) {
  return (t, n, o) => {
    xs(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Av(e, t, n) {
  xs(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ke = null, Ah = null;
function $i(e) {
  const t = Ke;
  return Ke = e, Ah = e && e.type.__scopeId || null, t;
}
function Ot(e, t = Ke, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Fc(-1);
    const s = $i(t);
    let i;
    try {
      i = e(...r);
    } finally {
      $i(s), o._d && Fc(1);
    }
    return w.NODE_ENV !== "production" && wh(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Sh(e) {
  fE(e) && B("Do not use built-in directive ids as custom directive id: " + e);
}
function In(e, t) {
  if (Ke === null)
    return w.NODE_ENV !== "production" && B("withDirectives can only be used inside render functions."), e;
  const n = la(Ke), o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [s, i, a, l = Oe] = t[r];
    s && (ae(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && $n(i), o.push({
      dir: s,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function ho(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    s && (a.oldValue = s[i].value);
    let l = a.dir[o];
    l && (Xt(), Zt(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Jt());
  }
}
const Nh = Symbol("_vte"), Th = (e) => e.__isTeleport, xo = (e) => e && (e.disabled || e.disabled === ""), Oc = (e) => e && (e.defer || e.defer === ""), Ac = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Sc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, El = (e, t) => {
  const n = e && e.to;
  if (Fe(n))
    if (t) {
      const o = t(n);
      return w.NODE_ENV !== "production" && !o && !xo(e) && B(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), o;
    } else
      return w.NODE_ENV !== "production" && B(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return w.NODE_ENV !== "production" && !n && !xo(e) && B(`Invalid Teleport target: ${n}`), n;
}, Ch = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, o, r, s, i, a, l, f) {
    const {
      mc: u,
      pc: c,
      pbc: d,
      o: { insert: p, querySelector: h, createText: m, createComment: g }
    } = f, E = xo(t.props);
    let { shapeFlag: O, children: y, dynamicChildren: R } = t;
    if (w.NODE_ENV !== "production" && Wt && (l = !1, R = null), e == null) {
      const S = t.el = w.NODE_ENV !== "production" ? g("teleport start") : m(""), T = t.anchor = w.NODE_ENV !== "production" ? g("teleport end") : m("");
      p(S, n, o), p(T, n, o);
      const N = (P, k) => {
        O & 16 && (r && r.isCE && (r.ce._teleportTarget = P), u(
          y,
          P,
          k,
          r,
          s,
          i,
          a,
          l
        ));
      }, V = () => {
        const P = t.target = El(t.props, h), k = Dh(P, t, m, p);
        P ? (i !== "svg" && Ac(P) ? i = "svg" : i !== "mathml" && Sc(P) && (i = "mathml"), E || (N(P, k), ci(t, !1))) : w.NODE_ENV !== "production" && !E && B(
          "Invalid Teleport target on mount:",
          P,
          `(${typeof P})`
        );
      };
      E && (N(n, T), ci(t, !0)), Oc(t.props) ? (t.el.__isMounted = !1, ft(() => {
        V(), delete t.el.__isMounted;
      }, s)) : V();
    } else {
      if (Oc(t.props) && e.el.__isMounted === !1) {
        ft(() => {
          Ch.process(
            e,
            t,
            n,
            o,
            r,
            s,
            i,
            a,
            l,
            f
          );
        }, s);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const S = t.anchor = e.anchor, T = t.target = e.target, N = t.targetAnchor = e.targetAnchor, V = xo(e.props), P = V ? n : T, k = V ? S : N;
      if (i === "svg" || Ac(T) ? i = "svg" : (i === "mathml" || Sc(T)) && (i = "mathml"), R ? (d(
        e.dynamicChildren,
        R,
        P,
        r,
        s,
        i,
        a
      ), es(e, t, w.NODE_ENV === "production")) : l || c(
        e,
        t,
        P,
        k,
        r,
        s,
        i,
        a,
        !1
      ), E)
        V ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Gs(
          t,
          n,
          S,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = t.target = El(
          t.props,
          h
        );
        $ ? Gs(
          t,
          $,
          null,
          f,
          0
        ) : w.NODE_ENV !== "production" && B(
          "Invalid Teleport target on update:",
          T,
          `(${typeof T})`
        );
      } else V && Gs(
        t,
        T,
        N,
        f,
        1
      );
      ci(t, E);
    }
  },
  remove(e, t, n, { um: o, o: { remove: r } }, s) {
    const {
      shapeFlag: i,
      children: a,
      anchor: l,
      targetStart: f,
      targetAnchor: u,
      target: c,
      props: d
    } = e;
    if (c && (r(f), r(u)), s && r(l), i & 16) {
      const p = s || !xo(d);
      for (let h = 0; h < a.length; h++) {
        const m = a[h];
        o(
          m,
          t,
          n,
          p,
          !!m.dynamicChildren
        );
      }
    }
  },
  move: Gs,
  hydrate: Sv
};
function Gs(e, t, n, { o: { insert: o }, m: r }, s = 2) {
  s === 0 && o(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: f, props: u } = e, c = s === 2;
  if (c && o(i, t, n), (!c || xo(u)) && l & 16)
    for (let d = 0; d < f.length; d++)
      r(
        f[d],
        t,
        n,
        2
      );
  c && o(a, t, n);
}
function Sv(e, t, n, o, r, s, {
  o: { nextSibling: i, parentNode: a, querySelector: l, insert: f, createText: u }
}, c) {
  const d = t.target = El(
    t.props,
    l
  );
  if (d) {
    const p = xo(t.props), h = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (p)
        t.anchor = c(
          i(e),
          t,
          a(e),
          n,
          o,
          r,
          s
        ), t.targetStart = h, t.targetAnchor = h && i(h);
      else {
        t.anchor = i(e);
        let m = h;
        for (; m; ) {
          if (m && m.nodeType === 8) {
            if (m.data === "teleport start anchor")
              t.targetStart = m;
            else if (m.data === "teleport anchor") {
              t.targetAnchor = m, d._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          m = i(m);
        }
        t.targetAnchor || Dh(d, t, u, f), c(
          h && i(h),
          t,
          d,
          n,
          o,
          r,
          s
        );
      }
    ci(t, p);
  }
  return t.anchor && i(t.anchor);
}
const na = Ch;
function ci(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let o, r;
    for (t ? (o = e.el, r = e.anchor) : (o = e.targetStart, r = e.targetAnchor); o && o !== r; )
      o.nodeType === 1 && o.setAttribute("data-v-owner", n.uid), o = o.nextSibling;
    n.ut();
  }
}
function Dh(e, t, n, o) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[Nh] = s, e && (o(r, e), o(s, e)), s;
}
const Yn = Symbol("_leaveCb"), Ys = Symbol("_enterCb");
function Nv() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return jn(() => {
    e.isMounted = !0;
  }), Mh(() => {
    e.isUnmounting = !0;
  }), e;
}
const It = [Function, Array], xh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: It,
  onEnter: It,
  onAfterEnter: It,
  onEnterCancelled: It,
  // leave
  onBeforeLeave: It,
  onLeave: It,
  onAfterLeave: It,
  onLeaveCancelled: It,
  // appear
  onBeforeAppear: It,
  onAppear: It,
  onAfterAppear: It,
  onAppearCancelled: It
}, Rh = (e) => {
  const t = e.subTree;
  return t.component ? Rh(t.component) : t;
}, Tv = {
  name: "BaseTransition",
  props: xh,
  setup(e, { slots: t }) {
    const n = An(), o = Nv();
    return () => {
      const r = t.default && Ih(t.default(), !0);
      if (!r || !r.length)
        return;
      const s = kh(r), i = de(e), { mode: a } = i;
      if (w.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && B(`invalid <transition> mode: ${a}`), o.isLeaving)
        return Pa(s);
      const l = Nc(s);
      if (!l)
        return Pa(s);
      let f = vl(
        l,
        i,
        o,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => f = c
      );
      l.type !== Ge && ds(l, f);
      let u = n.subTree && Nc(n.subTree);
      if (u && u.type !== Ge && !wo(l, u) && Rh(n).type !== Ge) {
        let c = vl(
          u,
          i,
          o,
          n
        );
        if (ds(u, c), a === "out-in" && l.type !== Ge)
          return o.isLeaving = !0, c.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, u = void 0;
          }, Pa(s);
        a === "in-out" && l.type !== Ge ? c.delayLeave = (d, p, h) => {
          const m = $h(
            o,
            u
          );
          m[String(u.key)] = u, d[Yn] = () => {
            p(), d[Yn] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            h(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return s;
    };
  }
};
function kh(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const o of e)
      if (o.type !== Ge) {
        if (w.NODE_ENV !== "production" && n) {
          B(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = o, n = !0, w.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Cv = Tv;
function $h(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function vl(e, t, n, o, r) {
  const {
    appear: s,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: f,
    onAfterEnter: u,
    onEnterCancelled: c,
    onBeforeLeave: d,
    onLeave: p,
    onAfterLeave: h,
    onLeaveCancelled: m,
    onBeforeAppear: g,
    onAppear: E,
    onAfterAppear: O,
    onAppearCancelled: y
  } = t, R = String(e.key), S = $h(n, e), T = (P, k) => {
    P && Zt(
      P,
      o,
      9,
      k
    );
  }, N = (P, k) => {
    const $ = k[1];
    T(P, k), oe(P) ? P.every((D) => D.length <= 1) && $() : P.length <= 1 && $();
  }, V = {
    mode: i,
    persisted: a,
    beforeEnter(P) {
      let k = l;
      if (!n.isMounted)
        if (s)
          k = g || l;
        else
          return;
      P[Yn] && P[Yn](
        !0
        /* cancelled */
      );
      const $ = S[R];
      $ && wo(e, $) && $.el[Yn] && $.el[Yn](), T(k, [P]);
    },
    enter(P) {
      let k = f, $ = u, D = c;
      if (!n.isMounted)
        if (s)
          k = E || f, $ = O || u, D = y || c;
        else
          return;
      let G = !1;
      const ce = P[Ys] = (me) => {
        G || (G = !0, me ? T(D, [P]) : T($, [P]), V.delayedLeave && V.delayedLeave(), P[Ys] = void 0);
      };
      k ? N(k, [P, ce]) : ce();
    },
    leave(P, k) {
      const $ = String(e.key);
      if (P[Ys] && P[Ys](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return k();
      T(d, [P]);
      let D = !1;
      const G = P[Yn] = (ce) => {
        D || (D = !0, k(), ce ? T(m, [P]) : T(h, [P]), P[Yn] = void 0, S[$] === e && delete S[$]);
      };
      S[$] = e, p ? N(p, [P, G]) : G();
    },
    clone(P) {
      const k = vl(
        P,
        t,
        n,
        o,
        r
      );
      return r && r(k), k;
    }
  };
  return V;
}
function Pa(e) {
  if (Rs(e))
    return e = bn(e), e.children = null, e;
}
function Nc(e) {
  if (!Rs(e))
    return Th(e.type) && e.children ? kh(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ae(n.default))
      return n.default();
  }
}
function ds(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ds(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ih(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Ce ? (i.patchFlag & 128 && r++, o = o.concat(
      Ih(i.children, t, a)
    )) : (t || i.type !== Ge) && o.push(a != null ? bn(i, { key: a }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  return ae(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    He({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ph(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Vh = /* @__PURE__ */ new WeakSet();
function Dv(e) {
  const t = An(), n = ch(null);
  if (t) {
    const r = t.refs === Oe ? t.refs = {} : t.refs;
    let s;
    w.NODE_ENV !== "production" && (s = Object.getOwnPropertyDescriptor(r, e)) && !s.configurable ? B(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(r, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else w.NODE_ENV !== "production" && B(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const o = w.NODE_ENV !== "production" ? _u(n) : n;
  return w.NODE_ENV !== "production" && Vh.add(o), o;
}
function Zr(e, t, n, o, r = !1) {
  if (oe(e)) {
    e.forEach(
      (h, m) => Zr(
        h,
        t && (oe(t) ? t[m] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (fr(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Zr(e, t, n, o.component.subTree);
    return;
  }
  const s = o.shapeFlag & 4 ? la(o.component) : o.el, i = r ? null : s, { i: a, r: l } = e;
  if (w.NODE_ENV !== "production" && !a) {
    B(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = a.refs === Oe ? a.refs = {} : a.refs, c = a.setupState, d = de(c), p = c === Oe ? () => !1 : (h) => w.NODE_ENV !== "production" && (Se(d, h) && !Le(d[h]) && B(
    `Template ref "${h}" used on a non-ref value. It will not work in the production build.`
  ), Vh.has(d[h])) ? !1 : Se(d, h);
  if (f != null && f !== l && (Fe(f) ? (u[f] = null, p(f) && (c[f] = null)) : Le(f) && (f.value = null)), ae(l))
    Cr(l, a, 12, [i, u]);
  else {
    const h = Fe(l), m = Le(l);
    if (h || m) {
      const g = () => {
        if (e.f) {
          const E = h ? p(l) ? c[l] : u[l] : l.value;
          r ? oe(E) && uu(E, s) : oe(E) ? E.includes(s) || E.push(s) : h ? (u[l] = [s], p(l) && (c[l] = u[l])) : (l.value = [s], e.k && (u[e.k] = l.value));
        } else h ? (u[l] = i, p(l) && (c[l] = i)) : m ? (l.value = i, e.k && (u[e.k] = i)) : w.NODE_ENV !== "production" && B("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (g.id = -1, ft(g, n)) : g();
    } else w.NODE_ENV !== "production" && B("Invalid template ref type:", l, `(${typeof l})`);
  }
}
Ts().requestIdleCallback;
Ts().cancelIdleCallback;
const fr = (e) => !!e.type.__asyncLoader, Rs = (e) => e.type.__isKeepAlive;
function xv(e, t) {
  Lh(e, "a", t);
}
function Rv(e, t) {
  Lh(e, "da", t);
}
function Lh(e, t, n = Xe) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (oa(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Rs(r.parent.vnode) && kv(o, t, n, r), r = r.parent;
  }
}
function kv(e, t, n, o) {
  const r = oa(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ra(() => {
    uu(o[t], r);
  }, n);
}
function oa(e, t, n = Xe, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      Xt();
      const a = $s(n), l = Zt(t, n, e, i);
      return a(), Jt(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (w.NODE_ENV !== "production") {
    const r = Eo(gu[e].replace(/ hook$/, ""));
    B(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Hn = (e) => (t, n = Xe) => {
  (!hs || e === "sp") && oa(e, (...o) => t(...o), n);
}, $v = Hn("bm"), jn = Hn("m"), Iv = Hn(
  "bu"
), Pv = Hn("u"), Mh = Hn(
  "bum"
), ra = Hn("um"), Vv = Hn(
  "sp"
), Lv = Hn("rtg"), Mv = Hn("rtc");
function Fv(e, t = Xe) {
  oa("ec", e, t);
}
const yl = "components", Bv = "directives";
function en(e, t) {
  return Fh(yl, e, !0, t) || e;
}
const Uv = Symbol.for("v-ndc");
function Hv(e) {
  return Fh(Bv, e);
}
function Fh(e, t, n = !0, o = !1) {
  const r = Ke || Xe;
  if (r) {
    const s = r.type;
    if (e === yl) {
      const a = Su(
        s,
        !1
      );
      if (a && (a === t || a === lt(t) || a === Po(lt(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Tc(r[e] || s[e], t) || // global registration
      Tc(r.appContext[e], t)
    );
    if (!i && o)
      return s;
    if (w.NODE_ENV !== "production" && n && !i) {
      const a = e === yl ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      B(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else w.NODE_ENV !== "production" && B(
    `resolve${Po(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Tc(e, t) {
  return e && (e[t] || e[lt(t)] || e[Po(lt(t))]);
}
function At(e, t, n, o) {
  let r;
  const s = n, i = oe(e);
  if (i || Fe(e)) {
    const a = i && Gt(e);
    let l = !1, f = !1;
    a && (l = !ht(e), f = yn(e), e = Qi(e)), r = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      r[u] = t(
        l ? f ? Di(rt(e[u])) : rt(e[u]) : e[u],
        u,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    w.NODE_ENV !== "production" && !Number.isInteger(e) && B(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let a = 0; a < e; a++)
      r[a] = t(a + 1, a, void 0, s);
  } else if (Ne(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (a, l) => t(a, l, void 0, s)
      );
    else {
      const a = Object.keys(e);
      r = new Array(a.length);
      for (let l = 0, f = a.length; l < f; l++) {
        const u = a[l];
        r[l] = t(e[u], u, l, s);
      }
    }
  else
    r = [];
  return r;
}
function ye(e, t, n = {}, o, r) {
  if (Ke.ce || Ke.parent && fr(Ke.parent) && Ke.parent.ce)
    return t !== "default" && (n.name = t), q(), Tt(
      Ce,
      null,
      [Ae("slot", n, o && o())],
      64
    );
  let s = e[t];
  w.NODE_ENV !== "production" && s && s.length > 1 && (B(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), q();
  const i = s && Bh(s(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = Tt(
    Ce,
    {
      key: (a && !Yt(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && o ? "_fb" : "")
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Bh(e) {
  return e.some((t) => Mo(t) ? !(t.type === Ge || t.type === Ce && !Bh(t.children)) : !0) ? e : null;
}
const bl = (e) => e ? um(e) ? la(e) : bl(e.parent) : null, Ro = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ He(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => w.NODE_ENV !== "production" ? pn(e.props) : e.props,
    $attrs: (e) => w.NODE_ENV !== "production" ? pn(e.attrs) : e.attrs,
    $slots: (e) => w.NODE_ENV !== "production" ? pn(e.slots) : e.slots,
    $refs: (e) => w.NODE_ENV !== "production" ? pn(e.refs) : e.refs,
    $parent: (e) => bl(e.parent),
    $root: (e) => bl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => jh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ta(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = hr.bind(e.proxy)),
    $watch: (e) => wy.bind(e)
  })
), yu = (e) => e === "_" || e === "$", Va = (e, t) => e !== Oe && !e.__isScriptSetup && Se(e, t), Uh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: a, appContext: l } = e;
    if (w.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const p = i[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Va(o, t))
          return i[t] = 1, o[t];
        if (r !== Oe && Se(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && Se(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== Oe && Se(n, t))
          return i[t] = 4, n[t];
        wl && (i[t] = 0);
      }
    }
    const u = Ro[t];
    let c, d;
    if (u)
      return t === "$attrs" ? (Je(e.attrs, "get", ""), w.NODE_ENV !== "production" && Vi()) : w.NODE_ENV !== "production" && t === "$slots" && Je(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Oe && Se(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, Se(d, t)
    )
      return d[t];
    w.NODE_ENV !== "production" && Ke && (!Fe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== Oe && yu(t[0]) && Se(r, t) ? B(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ke && B(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Va(r, t) ? (r[t] = n, !0) : w.NODE_ENV !== "production" && r.__isScriptSetup && Se(r, t) ? (B(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Oe && Se(o, t) ? (o[t] = n, !0) : Se(e.props, t) ? (w.NODE_ENV !== "production" && B(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (w.NODE_ENV !== "production" && B(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (w.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s }
  }, i) {
    let a;
    return !!n[i] || e !== Oe && Se(e, i) || Va(t, i) || (a = s[0]) && Se(a, i) || Se(o, i) || Se(Ro, i) || Se(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
w.NODE_ENV !== "production" && (Uh.ownKeys = (e) => (B(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function jv(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Ro).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Ro[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Qe
    });
  }), t;
}
function Kv(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Qe
    });
  });
}
function Wv(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(de(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (yu(o[0])) {
        B(
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
        set: Qe
      });
    }
  });
}
function Cc(e) {
  return oe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function zv() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? B(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let wl = !0;
function qv(e) {
  const t = jh(e), n = e.proxy, o = e.ctx;
  wl = !1, t.beforeCreate && Dc(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: i,
    watch: a,
    provide: l,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: c,
    mounted: d,
    beforeUpdate: p,
    updated: h,
    activated: m,
    deactivated: g,
    beforeDestroy: E,
    beforeUnmount: O,
    destroyed: y,
    unmounted: R,
    render: S,
    renderTracked: T,
    renderTriggered: N,
    errorCaptured: V,
    serverPrefetch: P,
    // public API
    expose: k,
    inheritAttrs: $,
    // assets
    components: D,
    directives: G,
    filters: ce
  } = t, me = w.NODE_ENV !== "production" ? zv() : null;
  if (w.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const ee in j)
        me("Props", ee);
  }
  if (f && Gv(f, o, me), i)
    for (const j in i) {
      const ee = i[j];
      ae(ee) ? (w.NODE_ENV !== "production" ? Object.defineProperty(o, j, {
        value: ee.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[j] = ee.bind(n), w.NODE_ENV !== "production" && me("Methods", j)) : w.NODE_ENV !== "production" && B(
        `Method "${j}" has type "${typeof ee}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    w.NODE_ENV !== "production" && !ae(r) && B(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const j = r.call(n, n);
    if (w.NODE_ENV !== "production" && cu(j) && B(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Ne(j))
      w.NODE_ENV !== "production" && B("data() should return an object.");
    else if (e.data = Vo(j), w.NODE_ENV !== "production")
      for (const ee in j)
        me("Data", ee), yu(ee[0]) || Object.defineProperty(o, ee, {
          configurable: !0,
          enumerable: !0,
          get: () => j[ee],
          set: Qe
        });
  }
  if (wl = !0, s)
    for (const j in s) {
      const ee = s[j], le = ae(ee) ? ee.bind(n, n) : ae(ee.get) ? ee.get.bind(n, n) : Qe;
      w.NODE_ENV !== "production" && le === Qe && B(`Computed property "${j}" has no getter.`);
      const We = !ae(ee) && ae(ee.set) ? ee.set.bind(n) : w.NODE_ENV !== "production" ? () => {
        B(
          `Write operation failed: computed property "${j}" is readonly.`
        );
      } : Qe, ze = he({
        get: le,
        set: We
      });
      Object.defineProperty(o, j, {
        enumerable: !0,
        configurable: !0,
        get: () => ze.value,
        set: (Pe) => ze.value = Pe
      }), w.NODE_ENV !== "production" && me("Computed", j);
    }
  if (a)
    for (const j in a)
      Hh(a[j], o, n, j);
  if (l) {
    const j = ae(l) ? l.call(n) : l;
    Reflect.ownKeys(j).forEach((ee) => {
      dr(ee, j[ee]);
    });
  }
  u && Dc(u, e, "c");
  function Q(j, ee) {
    oe(ee) ? ee.forEach((le) => j(le.bind(n))) : ee && j(ee.bind(n));
  }
  if (Q($v, c), Q(jn, d), Q(Iv, p), Q(Pv, h), Q(xv, m), Q(Rv, g), Q(Fv, V), Q(Mv, T), Q(Lv, N), Q(Mh, O), Q(ra, R), Q(Vv, P), oe(k))
    if (k.length) {
      const j = e.exposed || (e.exposed = {});
      k.forEach((ee) => {
        Object.defineProperty(j, ee, {
          get: () => n[ee],
          set: (le) => n[ee] = le
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === Qe && (e.render = S), $ != null && (e.inheritAttrs = $), D && (e.components = D), G && (e.directives = G), P && Ph(e);
}
function Gv(e, t, n = Qe) {
  oe(e) && (e = Ol(e));
  for (const o in e) {
    const r = e[o];
    let s;
    Ne(r) ? "default" in r ? s = mt(
      r.from || o,
      r.default,
      !0
    ) : s = mt(r.from || o) : s = mt(r), Le(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[o] = s, w.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Dc(e, t, n) {
  Zt(
    oe(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Hh(e, t, n, o) {
  let r = o.includes(".") ? em(n, o) : () => n[o];
  if (Fe(e)) {
    const s = t[e];
    ae(s) ? hn(r, s) : w.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e}"`, s);
  } else if (ae(e))
    hn(r, e.bind(n));
  else if (Ne(e))
    if (oe(e))
      e.forEach((s) => Hh(s, t, n, o));
    else {
      const s = ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      ae(s) ? hn(r, s, e) : w.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else w.NODE_ENV !== "production" && B(`Invalid watch option: "${o}"`, e);
}
function jh(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = s.get(t);
  let l;
  return a ? l = a : !r.length && !n && !o ? l = t : (l = {}, r.length && r.forEach(
    (f) => Ii(l, f, i, !0)
  ), Ii(l, t, i)), Ne(t) && s.set(t, l), l;
}
function Ii(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Ii(e, s, n, !0), r && r.forEach(
    (i) => Ii(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      w.NODE_ENV !== "production" && B(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Yv[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Yv = {
  data: xc,
  props: Rc,
  emits: Rc,
  // objects
  methods: qr,
  computed: qr,
  // lifecycle
  beforeCreate: ct,
  created: ct,
  beforeMount: ct,
  mounted: ct,
  beforeUpdate: ct,
  updated: ct,
  beforeDestroy: ct,
  beforeUnmount: ct,
  destroyed: ct,
  unmounted: ct,
  activated: ct,
  deactivated: ct,
  errorCaptured: ct,
  serverPrefetch: ct,
  // assets
  components: qr,
  directives: qr,
  // watch
  watch: Jv,
  // provide / inject
  provide: xc,
  inject: Xv
};
function xc(e, t) {
  return t ? e ? function() {
    return He(
      ae(e) ? e.call(this, this) : e,
      ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Xv(e, t) {
  return qr(Ol(e), Ol(t));
}
function Ol(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ct(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function qr(e, t) {
  return e ? He(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Rc(e, t) {
  return e ? oe(e) && oe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : He(
    /* @__PURE__ */ Object.create(null),
    Cc(e),
    Cc(t ?? {})
  ) : t;
}
function Jv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = He(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ct(e[o], t[o]);
  return n;
}
function Kh() {
  return {
    app: null,
    config: {
      isNativeTag: uE,
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
let Qv = 0;
function Zv(e, t) {
  return function(o, r = null) {
    ae(o) || (o = He({}, o)), r != null && !Ne(r) && (w.NODE_ENV !== "production" && B("root props passed to app.mount() must be an object."), r = null);
    const s = Kh(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const f = s.app = {
      _uid: Qv++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: jc,
      get config() {
        return s.config;
      },
      set config(u) {
        w.NODE_ENV !== "production" && B(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...c) {
        return i.has(u) ? w.NODE_ENV !== "production" && B("Plugin has already been applied to target app.") : u && ae(u.install) ? (i.add(u), u.install(f, ...c)) : ae(u) ? (i.add(u), u(f, ...c)) : w.NODE_ENV !== "production" && B(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return s.mixins.includes(u) ? w.NODE_ENV !== "production" && B(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : s.mixins.push(u), f;
      },
      component(u, c) {
        return w.NODE_ENV !== "production" && Cl(u, s.config), c ? (w.NODE_ENV !== "production" && s.components[u] && B(`Component "${u}" has already been registered in target app.`), s.components[u] = c, f) : s.components[u];
      },
      directive(u, c) {
        return w.NODE_ENV !== "production" && Sh(u), c ? (w.NODE_ENV !== "production" && s.directives[u] && B(`Directive "${u}" has already been registered in target app.`), s.directives[u] = c, f) : s.directives[u];
      },
      mount(u, c, d) {
        if (l)
          w.NODE_ENV !== "production" && B(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          w.NODE_ENV !== "production" && u.__vue_app__ && B(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = f._ceVNode || Ae(o, r);
          return p.appContext = s, d === !0 ? d = "svg" : d === !1 && (d = void 0), w.NODE_ENV !== "production" && (s.reload = () => {
            const h = bn(p);
            h.el = null, e(h, u, d);
          }), e(p, u, d), l = !0, f._container = u, u.__vue_app__ = f, w.NODE_ENV !== "production" && (f._instance = p.component, gv(f, jc)), la(p.component);
        }
      },
      onUnmount(u) {
        w.NODE_ENV !== "production" && typeof u != "function" && B(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        l ? (Zt(
          a,
          f._instance,
          16
        ), e(null, f._container), w.NODE_ENV !== "production" && (f._instance = null, Ev(f)), delete f._container.__vue_app__) : w.NODE_ENV !== "production" && B("Cannot unmount an app that is not mounted.");
      },
      provide(u, c) {
        return w.NODE_ENV !== "production" && u in s.provides && (Se(s.provides, u) ? B(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : B(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[u] = c, f;
      },
      runWithContext(u) {
        const c = ko;
        ko = f;
        try {
          return u();
        } finally {
          ko = c;
        }
      }
    };
    return f;
  };
}
let ko = null;
function dr(e, t) {
  if (!Xe)
    w.NODE_ENV !== "production" && B("provide() can only be used inside setup().");
  else {
    let n = Xe.provides;
    const o = Xe.parent && Xe.parent.provides;
    o === n && (n = Xe.provides = Object.create(o)), n[e] = t;
  }
}
function mt(e, t, n = !1) {
  const o = Xe || Ke;
  if (o || ko) {
    let r = ko ? ko._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ae(t) ? t.call(o && o.proxy) : t;
    w.NODE_ENV !== "production" && B(`injection "${String(e)}" not found.`);
  } else w.NODE_ENV !== "production" && B("inject() can only be used inside setup() or functional components.");
}
function ey() {
  return !!(Xe || Ke || ko);
}
const Wh = {}, zh = () => Object.create(Wh), qh = (e) => Object.getPrototypeOf(e) === Wh;
function ty(e, t, n, o = !1) {
  const r = {}, s = zh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Gh(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  w.NODE_ENV !== "production" && Xh(t || {}, r, e), n ? e.props = o ? r : uh(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function ny(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function oy(e, t, n, o) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, a = de(r), [l] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(w.NODE_ENV !== "production" && ny(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        let d = u[c];
        if (aa(e.emitsOptions, d))
          continue;
        const p = t[d];
        if (l)
          if (Se(s, d))
            p !== s[d] && (s[d] = p, f = !0);
          else {
            const h = lt(d);
            r[h] = Al(
              l,
              a,
              h,
              p,
              e,
              !1
            );
          }
        else
          p !== s[d] && (s[d] = p, f = !0);
      }
    }
  } else {
    Gh(e, t, r, s) && (f = !0);
    let u;
    for (const c in a)
      (!t || // for camelCase
      !Se(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = vn(c)) === c || !Se(t, u))) && (l ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[c] = Al(
        l,
        a,
        c,
        void 0,
        e,
        !0
      )) : delete r[c]);
    if (s !== a)
      for (const c in s)
        (!t || !Se(t, c)) && (delete s[c], f = !0);
  }
  f && fn(e.attrs, "set", ""), w.NODE_ENV !== "production" && Xh(t || {}, r, e);
}
function Gh(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (Xr(l))
        continue;
      const f = t[l];
      let u;
      r && Se(r, u = lt(l)) ? !s || !s.includes(u) ? n[u] = f : (a || (a = {}))[u] = f : aa(e.emitsOptions, l) || (!(l in o) || f !== o[l]) && (o[l] = f, i = !0);
    }
  if (s) {
    const l = de(n), f = a || Oe;
    for (let u = 0; u < s.length; u++) {
      const c = s[u];
      n[c] = Al(
        r,
        l,
        c,
        f[c],
        e,
        !Se(f, c)
      );
    }
  }
  return i;
}
function Al(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const a = Se(i, "default");
    if (a && o === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ae(l)) {
        const { propsDefaults: f } = r;
        if (n in f)
          o = f[n];
        else {
          const u = $s(r);
          o = f[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        o = l;
      r.ce && r.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (s && !a ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === vn(n)) && (o = !0));
  }
  return o;
}
const ry = /* @__PURE__ */ new WeakMap();
function Yh(e, t, n = !1) {
  const o = n ? ry : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, a = [];
  let l = !1;
  if (!ae(e)) {
    const u = (c) => {
      l = !0;
      const [d, p] = Yh(c, t, !0);
      He(i, d), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return Ne(e) && o.set(e, ur), ur;
  if (oe(s))
    for (let u = 0; u < s.length; u++) {
      w.NODE_ENV !== "production" && !Fe(s[u]) && B("props must be strings when using array syntax.", s[u]);
      const c = lt(s[u]);
      kc(c) && (i[c] = Oe);
    }
  else if (s) {
    w.NODE_ENV !== "production" && !Ne(s) && B("invalid props options", s);
    for (const u in s) {
      const c = lt(u);
      if (kc(c)) {
        const d = s[u], p = i[c] = oe(d) || ae(d) ? { type: d } : He({}, d), h = p.type;
        let m = !1, g = !0;
        if (oe(h))
          for (let E = 0; E < h.length; ++E) {
            const O = h[E], y = ae(O) && O.name;
            if (y === "Boolean") {
              m = !0;
              break;
            } else y === "String" && (g = !1);
          }
        else
          m = ae(h) && h.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = m, p[
          1
          /* shouldCastTrue */
        ] = g, (m || Se(p, "default")) && a.push(c);
      }
    }
  }
  const f = [i, a];
  return Ne(e) && o.set(e, f), f;
}
function kc(e) {
  return e[0] !== "$" && !Xr(e) ? !0 : (w.NODE_ENV !== "production" && B(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function sy(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Xh(e, t, n) {
  const o = de(t), r = n.propsOptions[0], s = Object.keys(e).map((i) => lt(i));
  for (const i in r) {
    let a = r[i];
    a != null && iy(
      i,
      o[i],
      a,
      w.NODE_ENV !== "production" ? pn(o) : o,
      !s.includes(i)
    );
  }
}
function iy(e, t, n, o, r) {
  const { type: s, required: i, validator: a, skipCheck: l } = n;
  if (i && r) {
    B('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !l) {
      let f = !1;
      const u = oe(s) ? s : [s], c = [];
      for (let d = 0; d < u.length && !f; d++) {
        const { valid: p, expectedType: h } = ly(t, u[d]);
        c.push(h || ""), f = p;
      }
      if (!f) {
        B(uy(e, t, c));
        return;
      }
    }
    a && !a(t, o) && B('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ay = /* @__PURE__ */ Un(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function ly(e, t) {
  let n;
  const o = sy(t);
  if (o === "null")
    n = e === null;
  else if (ay(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else o === "Object" ? n = Ne(e) : o === "Array" ? n = oe(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function uy(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Po).join(" | ")}`;
  const r = n[0], s = fu(t), i = $c(t, r), a = $c(t, s);
  return n.length === 1 && Ic(r) && !cy(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, Ic(s) && (o += `with value ${a}.`), o;
}
function $c(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ic(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function cy(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const bu = (e) => e[0] === "_" || e === "$stable", wu = (e) => oe(e) ? e.map(Kt) : [Kt(e)], fy = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ot((...r) => (w.NODE_ENV !== "production" && Xe && !(n === null && Ke) && !(n && n.root !== Xe.root) && B(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), wu(t(...r))), n);
  return o._c = !1, o;
}, Jh = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (bu(r)) continue;
    const s = e[r];
    if (ae(s))
      t[r] = fy(r, s, o);
    else if (s != null) {
      w.NODE_ENV !== "production" && B(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = wu(s);
      t[r] = () => i;
    }
  }
}, Qh = (e, t) => {
  w.NODE_ENV !== "production" && !Rs(e.vnode) && B(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = wu(t);
  e.slots.default = () => n;
}, Sl = (e, t, n) => {
  for (const o in t)
    (n || !bu(o)) && (e[o] = t[o]);
}, dy = (e, t, n) => {
  const o = e.slots = zh();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && as(o, "__", r, !0);
    const s = t._;
    s ? (Sl(o, t, n), n && as(o, "_", s, !0)) : Jh(t, o);
  } else t && Qh(e, t);
}, py = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = Oe;
  if (o.shapeFlag & 32) {
    const a = t._;
    a ? w.NODE_ENV !== "production" && Wt ? (Sl(r, t, n), fn(e, "set", "$slots")) : n && a === 1 ? s = !1 : Sl(r, t, n) : (s = !t.$stable, Jh(t, r)), i = t;
  } else t && (Qh(e, t), i = { default: 1 });
  if (s)
    for (const a in r)
      !bu(a) && i[a] == null && delete r[a];
};
let Mr, Qn;
function Go(e, t) {
  e.appContext.config.performance && Pi() && Qn.mark(`vue-${t}-${e.uid}`), w.NODE_ENV !== "production" && wv(e, t, Pi() ? Qn.now() : Date.now());
}
function Yo(e, t) {
  if (e.appContext.config.performance && Pi()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Qn.mark(o), Qn.measure(
      `<${ua(e, e.type)}> ${t}`,
      n,
      o
    ), Qn.clearMarks(n), Qn.clearMarks(o);
  }
  w.NODE_ENV !== "production" && Ov(e, t, Pi() ? Qn.now() : Date.now());
}
function Pi() {
  return Mr !== void 0 || (typeof window < "u" && window.performance ? (Mr = !0, Qn = window.performance) : Mr = !1), Mr;
}
function hy() {
  const e = [];
  if (w.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ft = Dy;
function my(e) {
  return _y(e);
}
function _y(e, t) {
  hy();
  const n = Ts();
  n.__VUE__ = !0, w.NODE_ENV !== "production" && bh(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: s,
    createElement: i,
    createText: a,
    createComment: l,
    setText: f,
    setElementText: u,
    parentNode: c,
    nextSibling: d,
    setScopeId: p = Qe,
    insertStaticContent: h
  } = e, m = (_, v, A, L = null, I = null, M = null, X = void 0, K = null, W = w.NODE_ENV !== "production" && Wt ? !1 : !!v.dynamicChildren) => {
    if (_ === v)
      return;
    _ && !wo(_, v) && (L = Y(_), Be(_, I, M, !0), _ = null), v.patchFlag === -2 && (W = !1, v.dynamicChildren = null);
    const { type: H, ref: se, shapeFlag: z } = v;
    switch (H) {
      case ks:
        g(_, v, A, L);
        break;
      case Ge:
        E(_, v, A, L);
        break;
      case fi:
        _ == null ? O(v, A, L, X) : w.NODE_ENV !== "production" && y(_, v, A, X);
        break;
      case Ce:
        G(
          _,
          v,
          A,
          L,
          I,
          M,
          X,
          K,
          W
        );
        break;
      default:
        z & 1 ? T(
          _,
          v,
          A,
          L,
          I,
          M,
          X,
          K,
          W
        ) : z & 6 ? ce(
          _,
          v,
          A,
          L,
          I,
          M,
          X,
          K,
          W
        ) : z & 64 || z & 128 ? H.process(
          _,
          v,
          A,
          L,
          I,
          M,
          X,
          K,
          W,
          ge
        ) : w.NODE_ENV !== "production" && B("Invalid VNode type:", H, `(${typeof H})`);
    }
    se != null && I ? Zr(se, _ && _.ref, M, v || _, !v) : se == null && _ && _.ref != null && Zr(_.ref, null, M, _, !0);
  }, g = (_, v, A, L) => {
    if (_ == null)
      o(
        v.el = a(v.children),
        A,
        L
      );
    else {
      const I = v.el = _.el;
      v.children !== _.children && f(I, v.children);
    }
  }, E = (_, v, A, L) => {
    _ == null ? o(
      v.el = l(v.children || ""),
      A,
      L
    ) : v.el = _.el;
  }, O = (_, v, A, L) => {
    [_.el, _.anchor] = h(
      _.children,
      v,
      A,
      L,
      _.el,
      _.anchor
    );
  }, y = (_, v, A, L) => {
    if (v.children !== _.children) {
      const I = d(_.anchor);
      S(_), [v.el, v.anchor] = h(
        v.children,
        A,
        I,
        L
      );
    } else
      v.el = _.el, v.anchor = _.anchor;
  }, R = ({ el: _, anchor: v }, A, L) => {
    let I;
    for (; _ && _ !== v; )
      I = d(_), o(_, A, L), _ = I;
    o(v, A, L);
  }, S = ({ el: _, anchor: v }) => {
    let A;
    for (; _ && _ !== v; )
      A = d(_), r(_), _ = A;
    r(v);
  }, T = (_, v, A, L, I, M, X, K, W) => {
    v.type === "svg" ? X = "svg" : v.type === "math" && (X = "mathml"), _ == null ? N(
      v,
      A,
      L,
      I,
      M,
      X,
      K,
      W
    ) : k(
      _,
      v,
      I,
      M,
      X,
      K,
      W
    );
  }, N = (_, v, A, L, I, M, X, K) => {
    let W, H;
    const { props: se, shapeFlag: z, transition: re, dirs: fe } = _;
    if (W = _.el = i(
      _.type,
      M,
      se && se.is,
      se
    ), z & 8 ? u(W, _.children) : z & 16 && P(
      _.children,
      W,
      null,
      L,
      I,
      La(_, M),
      X,
      K
    ), fe && ho(_, null, L, "created"), V(W, _, _.scopeId, X, L), se) {
      for (const De in se)
        De !== "value" && !Xr(De) && s(W, De, null, se[De], M, L);
      "value" in se && s(W, "value", null, se.value, M), (H = se.onVnodeBeforeMount) && an(H, L, _);
    }
    w.NODE_ENV !== "production" && (as(W, "__vnode", _, !0), as(W, "__vueParentComponent", L, !0)), fe && ho(_, null, L, "beforeMount");
    const be = gy(I, re);
    be && re.beforeEnter(W), o(W, v, A), ((H = se && se.onVnodeMounted) || be || fe) && ft(() => {
      H && an(H, L, _), be && re.enter(W), fe && ho(_, null, L, "mounted");
    }, I);
  }, V = (_, v, A, L, I) => {
    if (A && p(_, A), L)
      for (let M = 0; M < L.length; M++)
        p(_, L[M]);
    if (I) {
      let M = I.subTree;
      if (w.NODE_ENV !== "production" && M.patchFlag > 0 && M.patchFlag & 2048 && (M = Ou(M.children) || M), v === M || rm(M.type) && (M.ssContent === v || M.ssFallback === v)) {
        const X = I.vnode;
        V(
          _,
          X,
          X.scopeId,
          X.slotScopeIds,
          I.parent
        );
      }
    }
  }, P = (_, v, A, L, I, M, X, K, W = 0) => {
    for (let H = W; H < _.length; H++) {
      const se = _[H] = K ? Xn(_[H]) : Kt(_[H]);
      m(
        null,
        se,
        v,
        A,
        L,
        I,
        M,
        X,
        K
      );
    }
  }, k = (_, v, A, L, I, M, X) => {
    const K = v.el = _.el;
    w.NODE_ENV !== "production" && (K.__vnode = v);
    let { patchFlag: W, dynamicChildren: H, dirs: se } = v;
    W |= _.patchFlag & 16;
    const z = _.props || Oe, re = v.props || Oe;
    let fe;
    if (A && mo(A, !1), (fe = re.onVnodeBeforeUpdate) && an(fe, A, v, _), se && ho(v, _, A, "beforeUpdate"), A && mo(A, !0), w.NODE_ENV !== "production" && Wt && (W = 0, X = !1, H = null), (z.innerHTML && re.innerHTML == null || z.textContent && re.textContent == null) && u(K, ""), H ? ($(
      _.dynamicChildren,
      H,
      K,
      A,
      L,
      La(v, I),
      M
    ), w.NODE_ENV !== "production" && es(_, v)) : X || le(
      _,
      v,
      K,
      null,
      A,
      L,
      La(v, I),
      M,
      !1
    ), W > 0) {
      if (W & 16)
        D(K, z, re, A, I);
      else if (W & 2 && z.class !== re.class && s(K, "class", null, re.class, I), W & 4 && s(K, "style", z.style, re.style, I), W & 8) {
        const be = v.dynamicProps;
        for (let De = 0; De < be.length; De++) {
          const ke = be[De], vt = z[ke], yt = re[ke];
          (yt !== vt || ke === "value") && s(K, ke, vt, yt, I, A);
        }
      }
      W & 1 && _.children !== v.children && u(K, v.children);
    } else !X && H == null && D(K, z, re, A, I);
    ((fe = re.onVnodeUpdated) || se) && ft(() => {
      fe && an(fe, A, v, _), se && ho(v, _, A, "updated");
    }, L);
  }, $ = (_, v, A, L, I, M, X) => {
    for (let K = 0; K < v.length; K++) {
      const W = _[K], H = v[K], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        W.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (W.type === Ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !wo(W, H) || // - In the case of a component, it could contain anything.
        W.shapeFlag & 198) ? c(W.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      m(
        W,
        H,
        se,
        null,
        L,
        I,
        M,
        X,
        !0
      );
    }
  }, D = (_, v, A, L, I) => {
    if (v !== A) {
      if (v !== Oe)
        for (const M in v)
          !Xr(M) && !(M in A) && s(
            _,
            M,
            v[M],
            null,
            I,
            L
          );
      for (const M in A) {
        if (Xr(M)) continue;
        const X = A[M], K = v[M];
        X !== K && M !== "value" && s(_, M, K, X, I, L);
      }
      "value" in A && s(_, "value", v.value, A.value, I);
    }
  }, G = (_, v, A, L, I, M, X, K, W) => {
    const H = v.el = _ ? _.el : a(""), se = v.anchor = _ ? _.anchor : a("");
    let { patchFlag: z, dynamicChildren: re, slotScopeIds: fe } = v;
    w.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Wt || z & 2048) && (z = 0, W = !1, re = null), fe && (K = K ? K.concat(fe) : fe), _ == null ? (o(H, A, L), o(se, A, L), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      A,
      se,
      I,
      M,
      X,
      K,
      W
    )) : z > 0 && z & 64 && re && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren ? ($(
      _.dynamicChildren,
      re,
      A,
      I,
      M,
      X,
      K
    ), w.NODE_ENV !== "production" ? es(_, v) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (v.key != null || I && v === I.subTree) && es(
        _,
        v,
        !0
        /* shallow */
      )
    )) : le(
      _,
      v,
      A,
      se,
      I,
      M,
      X,
      K,
      W
    );
  }, ce = (_, v, A, L, I, M, X, K, W) => {
    v.slotScopeIds = K, _ == null ? v.shapeFlag & 512 ? I.ctx.activate(
      v,
      A,
      L,
      X,
      W
    ) : me(
      v,
      A,
      L,
      I,
      M,
      X,
      W
    ) : Q(_, v, W);
  }, me = (_, v, A, L, I, M, X) => {
    const K = _.component = Iy(
      _,
      L,
      I
    );
    if (w.NODE_ENV !== "production" && K.type.__hmrId && pv(K), w.NODE_ENV !== "production" && (ai(_), Go(K, "mount")), Rs(_) && (K.ctx.renderer = ge), w.NODE_ENV !== "production" && Go(K, "init"), Vy(K, !1, X), w.NODE_ENV !== "production" && Yo(K, "init"), w.NODE_ENV !== "production" && Wt && (_.el = null), K.asyncDep) {
      if (I && I.registerDep(K, j, X), !_.el) {
        const W = K.subTree = Ae(Ge);
        E(null, W, v, A);
      }
    } else
      j(
        K,
        _,
        v,
        A,
        I,
        M,
        X
      );
    w.NODE_ENV !== "production" && (li(), Yo(K, "mount"));
  }, Q = (_, v, A) => {
    const L = v.component = _.component;
    if (Ty(_, v, A))
      if (L.asyncDep && !L.asyncResolved) {
        w.NODE_ENV !== "production" && ai(v), ee(L, v, A), w.NODE_ENV !== "production" && li();
        return;
      } else
        L.next = v, L.update();
    else
      v.el = _.el, L.vnode = v;
  }, j = (_, v, A, L, I, M, X) => {
    const K = () => {
      if (_.isMounted) {
        let { next: z, bu: re, u: fe, parent: be, vnode: De } = _;
        {
          const rn = Zh(_);
          if (rn) {
            z && (z.el = De.el, ee(_, z, X)), rn.asyncDep.then(() => {
              _.isUnmounted || K();
            });
            return;
          }
        }
        let ke = z, vt;
        w.NODE_ENV !== "production" && ai(z || _.vnode), mo(_, !1), z ? (z.el = De.el, ee(_, z, X)) : z = De, re && er(re), (vt = z.props && z.props.onVnodeBeforeUpdate) && an(vt, be, z, De), mo(_, !0), w.NODE_ENV !== "production" && Go(_, "render");
        const yt = Vc(_);
        w.NODE_ENV !== "production" && Yo(_, "render");
        const on = _.subTree;
        _.subTree = yt, w.NODE_ENV !== "production" && Go(_, "patch"), m(
          on,
          yt,
          // parent may have changed if it's in a teleport
          c(on.el),
          // anchor may have changed if it's in a fragment
          Y(on),
          _,
          I,
          M
        ), w.NODE_ENV !== "production" && Yo(_, "patch"), z.el = yt.el, ke === null && Cy(_, yt.el), fe && ft(fe, I), (vt = z.props && z.props.onVnodeUpdated) && ft(
          () => an(vt, be, z, De),
          I
        ), w.NODE_ENV !== "production" && wh(_), w.NODE_ENV !== "production" && li();
      } else {
        let z;
        const { el: re, props: fe } = v, { bm: be, m: De, parent: ke, root: vt, type: yt } = _, on = fr(v);
        mo(_, !1), be && er(be), !on && (z = fe && fe.onVnodeBeforeMount) && an(z, ke, v), mo(_, !0);
        {
          vt.ce && // @ts-expect-error _def is private
          vt.ce._def.shadowRoot !== !1 && vt.ce._injectChildStyle(yt), w.NODE_ENV !== "production" && Go(_, "render");
          const rn = _.subTree = Vc(_);
          w.NODE_ENV !== "production" && Yo(_, "render"), w.NODE_ENV !== "production" && Go(_, "patch"), m(
            null,
            rn,
            A,
            L,
            _,
            I,
            M
          ), w.NODE_ENV !== "production" && Yo(_, "patch"), v.el = rn.el;
        }
        if (De && ft(De, I), !on && (z = fe && fe.onVnodeMounted)) {
          const rn = v;
          ft(
            () => an(z, ke, rn),
            I
          );
        }
        (v.shapeFlag & 256 || ke && fr(ke.vnode) && ke.vnode.shapeFlag & 256) && _.a && ft(_.a, I), _.isMounted = !0, w.NODE_ENV !== "production" && vv(_), v = A = L = null;
      }
    };
    _.scope.on();
    const W = _.effect = new qp(K);
    _.scope.off();
    const H = _.update = W.run.bind(W), se = _.job = W.runIfDirty.bind(W);
    se.i = _, se.id = _.uid, W.scheduler = () => ta(se), mo(_, !0), w.NODE_ENV !== "production" && (W.onTrack = _.rtc ? (z) => er(_.rtc, z) : void 0, W.onTrigger = _.rtg ? (z) => er(_.rtg, z) : void 0), H();
  }, ee = (_, v, A) => {
    v.component = _;
    const L = _.vnode.props;
    _.vnode = v, _.next = null, oy(_, v.props, L, A), py(_, v.children, A), Xt(), bc(_), Jt();
  }, le = (_, v, A, L, I, M, X, K, W = !1) => {
    const H = _ && _.children, se = _ ? _.shapeFlag : 0, z = v.children, { patchFlag: re, shapeFlag: fe } = v;
    if (re > 0) {
      if (re & 128) {
        ze(
          H,
          z,
          A,
          L,
          I,
          M,
          X,
          K,
          W
        );
        return;
      } else if (re & 256) {
        We(
          H,
          z,
          A,
          L,
          I,
          M,
          X,
          K,
          W
        );
        return;
      }
    }
    fe & 8 ? (se & 16 && x(H, I, M), z !== H && u(A, z)) : se & 16 ? fe & 16 ? ze(
      H,
      z,
      A,
      L,
      I,
      M,
      X,
      K,
      W
    ) : x(H, I, M, !0) : (se & 8 && u(A, ""), fe & 16 && P(
      z,
      A,
      L,
      I,
      M,
      X,
      K,
      W
    ));
  }, We = (_, v, A, L, I, M, X, K, W) => {
    _ = _ || ur, v = v || ur;
    const H = _.length, se = v.length, z = Math.min(H, se);
    let re;
    for (re = 0; re < z; re++) {
      const fe = v[re] = W ? Xn(v[re]) : Kt(v[re]);
      m(
        _[re],
        fe,
        A,
        null,
        I,
        M,
        X,
        K,
        W
      );
    }
    H > se ? x(
      _,
      I,
      M,
      !0,
      !1,
      z
    ) : P(
      v,
      A,
      L,
      I,
      M,
      X,
      K,
      W,
      z
    );
  }, ze = (_, v, A, L, I, M, X, K, W) => {
    let H = 0;
    const se = v.length;
    let z = _.length - 1, re = se - 1;
    for (; H <= z && H <= re; ) {
      const fe = _[H], be = v[H] = W ? Xn(v[H]) : Kt(v[H]);
      if (wo(fe, be))
        m(
          fe,
          be,
          A,
          null,
          I,
          M,
          X,
          K,
          W
        );
      else
        break;
      H++;
    }
    for (; H <= z && H <= re; ) {
      const fe = _[z], be = v[re] = W ? Xn(v[re]) : Kt(v[re]);
      if (wo(fe, be))
        m(
          fe,
          be,
          A,
          null,
          I,
          M,
          X,
          K,
          W
        );
      else
        break;
      z--, re--;
    }
    if (H > z) {
      if (H <= re) {
        const fe = re + 1, be = fe < se ? v[fe].el : L;
        for (; H <= re; )
          m(
            null,
            v[H] = W ? Xn(v[H]) : Kt(v[H]),
            A,
            be,
            I,
            M,
            X,
            K,
            W
          ), H++;
      }
    } else if (H > re)
      for (; H <= z; )
        Be(_[H], I, M, !0), H++;
    else {
      const fe = H, be = H, De = /* @__PURE__ */ new Map();
      for (H = be; H <= re; H++) {
        const ut = v[H] = W ? Xn(v[H]) : Kt(v[H]);
        ut.key != null && (w.NODE_ENV !== "production" && De.has(ut.key) && B(
          "Duplicate keys found during update:",
          JSON.stringify(ut.key),
          "Make sure keys are unique."
        ), De.set(ut.key, H));
      }
      let ke, vt = 0;
      const yt = re - be + 1;
      let on = !1, rn = 0;
      const Vr = new Array(yt);
      for (H = 0; H < yt; H++) Vr[H] = 0;
      for (H = fe; H <= z; H++) {
        const ut = _[H];
        if (vt >= yt) {
          Be(ut, I, M, !0);
          continue;
        }
        let sn;
        if (ut.key != null)
          sn = De.get(ut.key);
        else
          for (ke = be; ke <= re; ke++)
            if (Vr[ke - be] === 0 && wo(ut, v[ke])) {
              sn = ke;
              break;
            }
        sn === void 0 ? Be(ut, I, M, !0) : (Vr[sn - be] = H + 1, sn >= rn ? rn = sn : on = !0, m(
          ut,
          v[sn],
          A,
          null,
          I,
          M,
          X,
          K,
          W
        ), vt++);
      }
      const hc = on ? Ey(Vr) : ur;
      for (ke = hc.length - 1, H = yt - 1; H >= 0; H--) {
        const ut = be + H, sn = v[ut], mc = ut + 1 < se ? v[ut + 1].el : L;
        Vr[H] === 0 ? m(
          null,
          sn,
          A,
          mc,
          I,
          M,
          X,
          K,
          W
        ) : on && (ke < 0 || H !== hc[ke] ? Pe(sn, A, mc, 2) : ke--);
      }
    }
  }, Pe = (_, v, A, L, I = null) => {
    const { el: M, type: X, transition: K, children: W, shapeFlag: H } = _;
    if (H & 6) {
      Pe(_.component.subTree, v, A, L);
      return;
    }
    if (H & 128) {
      _.suspense.move(v, A, L);
      return;
    }
    if (H & 64) {
      X.move(_, v, A, ge);
      return;
    }
    if (X === Ce) {
      o(M, v, A);
      for (let z = 0; z < W.length; z++)
        Pe(W[z], v, A, L);
      o(_.anchor, v, A);
      return;
    }
    if (X === fi) {
      R(_, v, A);
      return;
    }
    if (L !== 2 && H & 1 && K)
      if (L === 0)
        K.beforeEnter(M), o(M, v, A), ft(() => K.enter(M), I);
      else {
        const { leave: z, delayLeave: re, afterLeave: fe } = K, be = () => {
          _.ctx.isUnmounted ? r(M) : o(M, v, A);
        }, De = () => {
          z(M, () => {
            be(), fe && fe();
          });
        };
        re ? re(M, be, De) : De();
      }
    else
      o(M, v, A);
  }, Be = (_, v, A, L = !1, I = !1) => {
    const {
      type: M,
      props: X,
      ref: K,
      children: W,
      dynamicChildren: H,
      shapeFlag: se,
      patchFlag: z,
      dirs: re,
      cacheIndex: fe
    } = _;
    if (z === -2 && (I = !1), K != null && (Xt(), Zr(K, null, A, _, !0), Jt()), fe != null && (v.renderCache[fe] = void 0), se & 256) {
      v.ctx.deactivate(_);
      return;
    }
    const be = se & 1 && re, De = !fr(_);
    let ke;
    if (De && (ke = X && X.onVnodeBeforeUnmount) && an(ke, v, _), se & 6)
      Et(_.component, A, L);
    else {
      if (se & 128) {
        _.suspense.unmount(A, L);
        return;
      }
      be && ho(_, null, v, "beforeUnmount"), se & 64 ? _.type.remove(
        _,
        v,
        A,
        ge,
        L
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== Ce || z > 0 && z & 64) ? x(
        H,
        v,
        A,
        !1,
        !0
      ) : (M === Ce && z & 384 || !I && se & 16) && x(W, v, A), L && tt(_);
    }
    (De && (ke = X && X.onVnodeUnmounted) || be) && ft(() => {
      ke && an(ke, v, _), be && ho(_, null, v, "unmounted");
    }, A);
  }, tt = (_) => {
    const { type: v, el: A, anchor: L, transition: I } = _;
    if (v === Ce) {
      w.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && I && !I.persisted ? _.children.forEach((X) => {
        X.type === Ge ? r(X.el) : tt(X);
      }) : ot(A, L);
      return;
    }
    if (v === fi) {
      S(_);
      return;
    }
    const M = () => {
      r(A), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (_.shapeFlag & 1 && I && !I.persisted) {
      const { leave: X, delayLeave: K } = I, W = () => X(A, M);
      K ? K(_.el, M, W) : W();
    } else
      M();
  }, ot = (_, v) => {
    let A;
    for (; _ !== v; )
      A = d(_), r(_), _ = A;
    r(v);
  }, Et = (_, v, A) => {
    w.NODE_ENV !== "production" && _.type.__hmrId && hv(_);
    const {
      bum: L,
      scope: I,
      job: M,
      subTree: X,
      um: K,
      m: W,
      a: H,
      parent: se,
      slots: { __: z }
    } = _;
    Pc(W), Pc(H), L && er(L), se && oe(z) && z.forEach((re) => {
      se.renderCache[re] = void 0;
    }), I.stop(), M && (M.flags |= 8, Be(X, _, v, A)), K && ft(K, v), ft(() => {
      _.isUnmounted = !0;
    }, v), v && v.pendingBranch && !v.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === v.pendingId && (v.deps--, v.deps === 0 && v.resolve()), w.NODE_ENV !== "production" && bv(_);
  }, x = (_, v, A, L = !1, I = !1, M = 0) => {
    for (let X = M; X < _.length; X++)
      Be(_[X], v, A, L, I);
  }, Y = (_) => {
    if (_.shapeFlag & 6)
      return Y(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const v = d(_.anchor || _.el), A = v && v[Nh];
    return A ? d(A) : v;
  };
  let J = !1;
  const ne = (_, v, A) => {
    _ == null ? v._vnode && Be(v._vnode, null, null, !0) : m(
      v._vnode || null,
      _,
      v,
      null,
      null,
      null,
      A
    ), v._vnode = _, J || (J = !0, bc(), Eh(), J = !1);
  }, ge = {
    p: m,
    um: Be,
    m: Pe,
    r: tt,
    mt: me,
    mc: P,
    pc: le,
    pbc: $,
    n: Y,
    o: e
  };
  return {
    render: ne,
    hydrate: void 0,
    createApp: Zv(ne)
  };
}
function La({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function mo({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gy(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function es(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (oe(o) && oe(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let a = r[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[s] = Xn(r[s]), a.el = i.el), !n && a.patchFlag !== -2 && es(i, a)), a.type === ks && (a.el = i.el), a.type === Ge && !a.el && (a.el = i.el), w.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function Ey(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, a;
  const l = e.length;
  for (o = 0; o < l; o++) {
    const f = e[o];
    if (f !== 0) {
      if (r = n[n.length - 1], e[r] < f) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        a = s + i >> 1, e[n[a]] < f ? s = a + 1 : i = a;
      f < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
function Zh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Zh(t);
}
function Pc(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const vy = Symbol.for("v-scx"), yy = () => {
  {
    const e = mt(vy);
    return e || w.NODE_ENV !== "production" && B(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function sa(e, t) {
  return ia(e, null, t);
}
function by(e, t) {
  return ia(
    e,
    null,
    w.NODE_ENV !== "production" ? He({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function hn(e, t, n) {
  return w.NODE_ENV !== "production" && !ae(t) && B(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ia(e, t, n);
}
function ia(e, t, n = Oe) {
  const { immediate: o, deep: r, flush: s, once: i } = n;
  w.NODE_ENV !== "production" && !t && (o !== void 0 && B(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && B(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && B(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = He({}, n);
  w.NODE_ENV !== "production" && (a.onWarn = B);
  const l = t && o || !t && s !== "post";
  let f;
  if (hs) {
    if (s === "sync") {
      const p = yy();
      f = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = Qe, p.resume = Qe, p.pause = Qe, p;
    }
  }
  const u = Xe;
  a.call = (p, h, m) => Zt(p, u, h, m);
  let c = !1;
  s === "post" ? a.scheduler = (p) => {
    ft(p, u && u.suspense);
  } : s !== "sync" && (c = !0, a.scheduler = (p, h) => {
    h ? p() : ta(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), c && (p.flags |= 2, u && (p.id = u.uid, p.i = u));
  };
  const d = rv(e, t, a);
  return hs && (f ? f.push(d) : l && d()), d;
}
function wy(e, t, n) {
  const o = this.proxy, r = Fe(e) ? e.includes(".") ? em(o, e) : () => o[e] : e.bind(o, o);
  let s;
  ae(t) ? s = t : (s = t.handler, n = t);
  const i = $s(this), a = ia(r, s.bind(o), n);
  return i(), a;
}
function em(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Oy(e, t, n = Oe) {
  const o = An();
  if (w.NODE_ENV !== "production" && !o)
    return B("useModel() called without active instance."), ue();
  const r = lt(t);
  if (w.NODE_ENV !== "production" && !o.propsOptions[0][r])
    return B(`useModel() called with prop "${t}" which is not declared.`), ue();
  const s = vn(t), i = tm(e, r), a = QE((l, f) => {
    let u, c = Oe, d;
    return by(() => {
      const p = e[r];
      bt(u, p) && (u = p, f());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(p) {
        const h = n.set ? n.set(p) : p;
        if (!bt(h, u) && !(c !== Oe && bt(p, c)))
          return;
        const m = o.vnode.props;
        m && // check if parent has passed v-model
        (t in m || r in m || s in m) && (`onUpdate:${t}` in m || `onUpdate:${r}` in m || `onUpdate:${s}` in m) || (u = p, f()), o.emit(`update:${t}`, h), bt(p, h) && bt(p, c) && !bt(h, d) && f(), c = p, d = h;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? i || Oe : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const tm = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${lt(t)}Modifiers`] || e[`${vn(t)}Modifiers`];
function Ay(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Oe;
  if (w.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [c]
    } = e;
    if (u)
      if (!(t in u))
        (!c || !(Eo(lt(t)) in c)) && B(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Eo(lt(t))}" prop.`
        );
      else {
        const d = u[t];
        ae(d) && (d(...n) || B(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && tm(o, t.slice(7));
  if (i && (i.trim && (r = n.map((u) => Fe(u) ? u.trim() : u)), i.number && (r = n.map(Ti))), w.NODE_ENV !== "production" && Av(e, t, r), w.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && o[Eo(u)] && B(
      `Event "${u}" is emitted in component ${ua(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${vn(
        t
      )}" instead of "${t}".`
    );
  }
  let a, l = o[a = Eo(t)] || // also try camelCase event handler (#2249)
  o[a = Eo(lt(t))];
  !l && s && (l = o[a = Eo(vn(t))]), l && Zt(
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
    e.emitted[a] = !0, Zt(
      f,
      e,
      6,
      r
    );
  }
}
function nm(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, a = !1;
  if (!ae(e)) {
    const l = (f) => {
      const u = nm(f, t, !0);
      u && (a = !0, He(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !a ? (Ne(e) && o.set(e, null), null) : (oe(s) ? s.forEach((l) => i[l] = null) : He(i, s), Ne(e) && o.set(e, i), i);
}
function aa(e, t) {
  return !e || !Ss(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, vn(t)) || Se(e, t));
}
let Nl = !1;
function Vi() {
  Nl = !0;
}
function Vc(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    propsOptions: [s],
    slots: i,
    attrs: a,
    emit: l,
    render: f,
    renderCache: u,
    props: c,
    data: d,
    setupState: p,
    ctx: h,
    inheritAttrs: m
  } = e, g = $i(e);
  let E, O;
  w.NODE_ENV !== "production" && (Nl = !1);
  try {
    if (n.shapeFlag & 4) {
      const S = r || o, T = w.NODE_ENV !== "production" && p.__isScriptSetup ? new Proxy(S, {
        get(N, V, P) {
          return B(
            `Property '${String(
              V
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(N, V, P);
        }
      }) : S;
      E = Kt(
        f.call(
          T,
          S,
          u,
          w.NODE_ENV !== "production" ? pn(c) : c,
          p,
          d,
          h
        )
      ), O = a;
    } else {
      const S = t;
      w.NODE_ENV !== "production" && a === c && Vi(), E = Kt(
        S.length > 1 ? S(
          w.NODE_ENV !== "production" ? pn(c) : c,
          w.NODE_ENV !== "production" ? {
            get attrs() {
              return Vi(), pn(a);
            },
            slots: i,
            emit: l
          } : { attrs: a, slots: i, emit: l }
        ) : S(
          w.NODE_ENV !== "production" ? pn(c) : c,
          null
        )
      ), O = t.props ? a : Sy(a);
    }
  } catch (S) {
    ts.length = 0, Ds(S, e, 1), E = Ae(Ge);
  }
  let y = E, R;
  if (w.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && ([y, R] = om(E)), O && m !== !1) {
    const S = Object.keys(O), { shapeFlag: T } = y;
    if (S.length) {
      if (T & 7)
        s && S.some(Ni) && (O = Ny(
          O,
          s
        )), y = bn(y, O, !1, !0);
      else if (w.NODE_ENV !== "production" && !Nl && y.type !== Ge) {
        const N = Object.keys(a), V = [], P = [];
        for (let k = 0, $ = N.length; k < $; k++) {
          const D = N[k];
          Ss(D) ? Ni(D) || V.push(D[2].toLowerCase() + D.slice(3)) : P.push(D);
        }
        P.length && B(
          `Extraneous non-props attributes (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), V.length && B(
          `Extraneous non-emits event listeners (${V.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (w.NODE_ENV !== "production" && !Lc(y) && B(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), y = bn(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && (w.NODE_ENV !== "production" && !Lc(y) && B(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), ds(y, n.transition)), w.NODE_ENV !== "production" && R ? R(y) : E = y, $i(g), E;
}
const om = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Ou(t, !1);
  if (o) {
    if (w.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return om(o);
  } else return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (a) => {
    t[r] = a, n && (s > -1 ? n[s] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [Kt(o), i];
};
function Ou(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (Mo(r)) {
      if (r.type !== Ge || r.children === "v-if") {
        if (n)
          return;
        if (n = r, w.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ou(n.children);
      }
    } else
      return;
  }
  return n;
}
const Sy = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ss(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ny = (e, t) => {
  const n = {};
  for (const o in e)
    (!Ni(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Lc = (e) => e.shapeFlag & 7 || e.type === Ge;
function Ty(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: a, patchFlag: l } = t, f = s.emitsOptions;
  if (w.NODE_ENV !== "production" && (r || a) && Wt || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return o ? Mc(o, i, f) : !!i;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        const d = u[c];
        if (i[d] !== o[d] && !aa(f, d))
          return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable) ? !0 : o === i ? !1 : o ? i ? Mc(o, i, f) : !0 : !!i;
  return !1;
}
function Mc(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !aa(n, s))
      return !0;
  }
  return !1;
}
function Cy({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const rm = (e) => e.__isSuspense;
function Dy(e, t) {
  t && t.pendingBranch ? oe(e) ? t.effects.push(...e) : t.effects.push(e) : gh(e);
}
const Ce = Symbol.for("v-fgt"), ks = Symbol.for("v-txt"), Ge = Symbol.for("v-cmt"), fi = Symbol.for("v-stc"), ts = [];
let Dt = null;
function q(e = !1) {
  ts.push(Dt = e ? null : []);
}
function xy() {
  ts.pop(), Dt = ts[ts.length - 1] || null;
}
let ps = 1;
function Fc(e, t = !1) {
  ps += e, e < 0 && Dt && t && (Dt.hasOnce = !0);
}
function sm(e) {
  return e.dynamicChildren = ps > 0 ? Dt || ur : null, xy(), ps > 0 && Dt && Dt.push(e), e;
}
function Z(e, t, n, o, r, s) {
  return sm(
    b(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
    )
  );
}
function Tt(e, t, n, o, r) {
  return sm(
    Ae(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function Mo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function wo(e, t) {
  if (w.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = ui.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Ry = (...e) => am(
  ...e
), im = ({ key: e }) => e ?? null, di = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Fe(e) || Le(e) || ae(e) ? { i: Ke, r: e, k: t, f: !!n } : e : null);
function b(e, t = null, n = null, o = 0, r = null, s = e === Ce ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && im(t),
    ref: t && di(t),
    scopeId: Ah,
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
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ke
  };
  return a ? (Au(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Fe(n) ? 8 : 16), w.NODE_ENV !== "production" && l.key !== l.key && B("VNode created with invalid key (NaN). VNode type:", l.type), ps > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Dt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Dt.push(l), l;
}
const Ae = w.NODE_ENV !== "production" ? Ry : am;
function am(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Uv) && (w.NODE_ENV !== "production" && !e && B(`Invalid vnode type when creating vnode: ${e}.`), e = Ge), Mo(e)) {
    const a = bn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Au(a, n), ps > 0 && !s && Dt && (a.shapeFlag & 6 ? Dt[Dt.indexOf(e)] = a : Dt.push(a)), a.patchFlag = -2, a;
  }
  if (fm(e) && (e = e.__vccOpts), t) {
    t = je(t);
    let { class: a, style: l } = t;
    a && !Fe(a) && (t.class = Ve(a)), Ne(l) && (cs(l) && !oe(l) && (l = He({}, l)), t.style = Cs(l));
  }
  const i = Fe(e) ? 1 : rm(e) ? 128 : Th(e) ? 64 : Ne(e) ? 4 : ae(e) ? 2 : 0;
  return w.NODE_ENV !== "production" && i & 4 && cs(e) && (e = de(e), B(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), b(
    e,
    t,
    n,
    o,
    r,
    i,
    s,
    !0
  );
}
function je(e) {
  return e ? cs(e) || qh(e) ? He({}, e) : e : null;
}
function bn(e, t, n = !1, o = !1) {
  const { props: r, ref: s, patchFlag: i, children: a, transition: l } = e, f = t ? uo(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && im(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? oe(s) ? s.concat(di(t)) : [s, di(t)] : di(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: w.NODE_ENV !== "production" && i === -1 && oe(a) ? a.map(lm) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ce ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && bn(e.ssContent),
    ssFallback: e.ssFallback && bn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && o && ds(
    u,
    l.clone(u)
  ), u;
}
function lm(e) {
  const t = bn(e);
  return oe(e.children) && (t.children = e.children.map(lm)), t;
}
function et(e = " ", t = 0) {
  return Ae(ks, null, e, t);
}
function Fn(e = "", t = !1) {
  return t ? (q(), Tt(Ge, null, e)) : Ae(Ge, null, e);
}
function Kt(e) {
  return e == null || typeof e == "boolean" ? Ae(Ge) : oe(e) ? Ae(
    Ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Mo(e) ? Xn(e) : Ae(ks, null, String(e));
}
function Xn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bn(e);
}
function Au(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (oe(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Au(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !qh(t) ? t._ctx = Ke : r === 3 && Ke && (Ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ae(t) ? (t = { default: t, _ctx: Ke }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [et(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function uo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Ve([t.class, o.class]));
      else if (r === "style")
        t.style = Cs([t.style, o.style]);
      else if (Ss(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(oe(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function an(e, t, n, o = null) {
  Zt(e, t, 7, [
    n,
    o
  ]);
}
const ky = Kh();
let $y = 0;
function Iy(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || ky, s = {
    uid: $y++,
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
    scope: new Kp(
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
    propsOptions: Yh(o, r),
    emitsOptions: nm(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Oe,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: Oe,
    data: Oe,
    props: Oe,
    attrs: Oe,
    slots: Oe,
    refs: Oe,
    setupState: Oe,
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
  return w.NODE_ENV !== "production" ? s.ctx = jv(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Ay.bind(null, s), e.ce && e.ce(s), s;
}
let Xe = null;
const An = () => Xe || Ke;
let Li, Tl;
{
  const e = Ts(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((i) => i(s)) : r[0](s);
    };
  };
  Li = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Xe = n
  ), Tl = t(
    "__VUE_SSR_SETTERS__",
    (n) => hs = n
  );
}
const $s = (e) => {
  const t = Xe;
  return Li(e), e.scope.on(), () => {
    e.scope.off(), Li(t);
  };
}, Bc = () => {
  Xe && Xe.scope.off(), Li(null);
}, Py = /* @__PURE__ */ Un("slot,component");
function Cl(e, { isNativeTag: t }) {
  (Py(e) || t(e)) && B(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function um(e) {
  return e.vnode.shapeFlag & 4;
}
let hs = !1;
function Vy(e, t = !1, n = !1) {
  t && Tl(t);
  const { props: o, children: r } = e.vnode, s = um(e);
  ty(e, o, s, t), dy(e, r, n || t);
  const i = s ? Ly(e, t) : void 0;
  return t && Tl(!1), i;
}
function Ly(e, t) {
  var n;
  const o = e.type;
  if (w.NODE_ENV !== "production") {
    if (o.name && Cl(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        Cl(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        Sh(s[i]);
    }
    o.compilerOptions && My() && B(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Uh), w.NODE_ENV !== "production" && Kv(e);
  const { setup: r } = o;
  if (r) {
    Xt();
    const s = e.setupContext = r.length > 1 ? By(e) : null, i = $s(e), a = Cr(
      r,
      e,
      0,
      [
        w.NODE_ENV !== "production" ? pn(e.props) : e.props,
        s
      ]
    ), l = cu(a);
    if (Jt(), i(), (l || e.sp) && !fr(e) && Ph(e), l) {
      if (a.then(Bc, Bc), t)
        return a.then((f) => {
          Uc(e, f, t);
        }).catch((f) => {
          Ds(f, e, 0);
        });
      if (e.asyncDep = a, w.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = o.name) != null ? n : "Anonymous";
        B(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Uc(e, a, t);
  } else
    cm(e, t);
}
function Uc(e, t, n) {
  ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ne(t) ? (w.NODE_ENV !== "production" && Mo(t) && B(
    "setup() should not return VNodes directly - return a render function instead."
  ), w.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = dh(t), w.NODE_ENV !== "production" && Wv(e)) : w.NODE_ENV !== "production" && t !== void 0 && B(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), cm(e, n);
}
const My = () => !0;
function cm(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || Qe);
  {
    const r = $s(e);
    Xt();
    try {
      qv(e);
    } finally {
      Jt(), r();
    }
  }
  w.NODE_ENV !== "production" && !o.render && e.render === Qe && !t && (o.template ? B(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : B("Component is missing template or render function: ", o));
}
const Hc = w.NODE_ENV !== "production" ? {
  get(e, t) {
    return Vi(), Je(e, "get", ""), e[t];
  },
  set() {
    return B("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return B("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Je(e, "get", ""), e[t];
  }
};
function Fy(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Je(e, "get", "$slots"), t[n];
    }
  });
}
function By(e) {
  const t = (n) => {
    if (w.NODE_ENV !== "production" && (e.exposed && B("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (oe(n) ? o = "array" : Le(n) && (o = "ref")), o !== "object" && B(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (w.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Hc));
      },
      get slots() {
        return o || (o = Fy(e));
      },
      get emit() {
        return (r, ...s) => e.emit(r, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Hc),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function la(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(dh(eo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ro)
        return Ro[n](e);
    },
    has(t, n) {
      return n in t || n in Ro;
    }
  })) : e.proxy;
}
const Uy = /(?:^|[-_])(\w)/g, Hy = (e) => e.replace(Uy, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Su(e, t = !0) {
  return ae(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ua(e, t, n = !1) {
  let o = Su(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? Hy(o) : n ? "App" : "Anonymous";
}
function fm(e) {
  return ae(e) && "__vccOpts" in e;
}
const he = (e, t) => {
  const n = nv(e, t, hs);
  if (w.NODE_ENV !== "production") {
    const o = An();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Nu(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Ne(t) && !oe(t) ? Mo(t) ? Ae(e, null, [t]) : Ae(e, t) : Ae(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Mo(n) && (n = [n]), Ae(e, t, n));
}
function jy() {
  if (w.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!Ne(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if (Le(c)) {
        Xt();
        const d = c.value;
        return Jt(), [
          "div",
          {},
          ["span", e, u(c)],
          "<",
          a(d),
          ">"
        ];
      } else {
        if (Gt(c))
          return [
            "div",
            {},
            ["span", e, ht(c) ? "ShallowReactive" : "Reactive"],
            "<",
            a(c),
            `>${yn(c) ? " (readonly)" : ""}`
          ];
        if (yn(c))
          return [
            "div",
            {},
            ["span", e, ht(c) ? "ShallowReadonly" : "Readonly"],
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
          ...s(c.$)
        ];
    }
  };
  function s(c) {
    const d = [];
    c.type.props && c.props && d.push(i("props", de(c.props))), c.setupState !== Oe && d.push(i("setup", c.setupState)), c.data !== Oe && d.push(i("data", de(c.data)));
    const p = l(c, "computed");
    p && d.push(i("computed", p));
    const h = l(c, "inject");
    return h && d.push(i("injected", h)), d.push([
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
  function i(c, d) {
    return d = He({}, d), Object.keys(d).length ? [
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
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", o, c] : Ne(c) ? ["object", { object: d ? de(c) : c }] : ["span", n, String(c)];
  }
  function l(c, d) {
    const p = c.type;
    if (ae(p))
      return;
    const h = {};
    for (const m in c.ctx)
      f(p, m, d) && (h[m] = c.ctx[m]);
    return h;
  }
  function f(c, d, p) {
    const h = c[p];
    if (oe(h) && h.includes(d) || Ne(h) && d in h || c.extends && f(c.extends, d, p) || c.mixins && c.mixins.some((m) => f(m, d, p)))
      return !0;
  }
  function u(c) {
    return ht(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const jc = "3.5.17", mn = w.NODE_ENV !== "production" ? B : Qe;
var Ft = {};
let Dl;
const Kc = typeof window < "u" && window.trustedTypes;
if (Kc)
  try {
    Dl = /* @__PURE__ */ Kc.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Ft.NODE_ENV !== "production" && mn(`Error creating trusted types policy: ${e}`);
  }
const dm = Dl ? (e) => Dl.createHTML(e) : (e) => e, Ky = "http://www.w3.org/2000/svg", Wy = "http://www.w3.org/1998/Math/MathML", Rn = typeof document < "u" ? document : null, Wc = Rn && /* @__PURE__ */ Rn.createElement("template"), zy = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? Rn.createElementNS(Ky, e) : t === "mathml" ? Rn.createElementNS(Wy, e) : n ? Rn.createElement(e, { is: n }) : Rn.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Rn.createTextNode(e),
  createComment: (e) => Rn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Rn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      Wc.innerHTML = dm(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Wc.content;
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
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Wn = "transition", Fr = "animation", ms = Symbol("_vtc"), pm = {
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
}, qy = /* @__PURE__ */ He(
  {},
  xh,
  pm
), Gy = (e) => (e.displayName = "Transition", e.props = qy, e), Yy = /* @__PURE__ */ Gy(
  (e, { slots: t }) => Nu(Cv, Xy(e), t)
), _o = (e, t = []) => {
  oe(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, zc = (e) => e ? oe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Xy(e) {
  const t = {};
  for (const D in e)
    D in pm || (t[D] = e[D]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: r,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: f = i,
    appearToClass: u = a,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, h = Jy(r), m = h && h[0], g = h && h[1], {
    onBeforeEnter: E,
    onEnter: O,
    onEnterCancelled: y,
    onLeave: R,
    onLeaveCancelled: S,
    onBeforeAppear: T = E,
    onAppear: N = O,
    onAppearCancelled: V = y
  } = t, P = (D, G, ce, me) => {
    D._enterCancelled = me, go(D, G ? u : a), go(D, G ? f : i), ce && ce();
  }, k = (D, G) => {
    D._isLeaving = !1, go(D, c), go(D, p), go(D, d), G && G();
  }, $ = (D) => (G, ce) => {
    const me = D ? N : O, Q = () => P(G, D, ce);
    _o(me, [G, Q]), qc(() => {
      go(G, D ? l : s), Tn(G, D ? u : a), zc(me) || Gc(G, o, m, Q);
    });
  };
  return He(t, {
    onBeforeEnter(D) {
      _o(E, [D]), Tn(D, s), Tn(D, i);
    },
    onBeforeAppear(D) {
      _o(T, [D]), Tn(D, l), Tn(D, f);
    },
    onEnter: $(!1),
    onAppear: $(!0),
    onLeave(D, G) {
      D._isLeaving = !0;
      const ce = () => k(D, G);
      Tn(D, c), D._enterCancelled ? (Tn(D, d), Jc()) : (Jc(), Tn(D, d)), qc(() => {
        D._isLeaving && (go(D, c), Tn(D, p), zc(R) || Gc(D, o, g, ce));
      }), _o(R, [D, ce]);
    },
    onEnterCancelled(D) {
      P(D, !1, void 0, !0), _o(y, [D]);
    },
    onAppearCancelled(D) {
      P(D, !0, void 0, !0), _o(V, [D]);
    },
    onLeaveCancelled(D) {
      k(D), _o(S, [D]);
    }
  });
}
function Jy(e) {
  if (e == null)
    return null;
  if (Ne(e))
    return [Ma(e.enter), Ma(e.leave)];
  {
    const t = Ma(e);
    return [t, t];
  }
}
function Ma(e) {
  const t = hE(e);
  return Ft.NODE_ENV !== "production" && uv(t, "<transition> explicit duration"), t;
}
function Tn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ms] || (e[ms] = /* @__PURE__ */ new Set())).add(t);
}
function go(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[ms];
  n && (n.delete(t), n.size || (e[ms] = void 0));
}
function qc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Qy = 0;
function Gc(e, t, n, o) {
  const r = e._endId = ++Qy, s = () => {
    r === e._endId && o();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: i, timeout: a, propCount: l } = Zy(e, t);
  if (!i)
    return o();
  const f = i + "end";
  let u = 0;
  const c = () => {
    e.removeEventListener(f, d), s();
  }, d = (p) => {
    p.target === e && ++u >= l && c();
  };
  setTimeout(() => {
    u < l && c();
  }, a + 1), e.addEventListener(f, d);
}
function Zy(e, t) {
  const n = window.getComputedStyle(e), o = (h) => (n[h] || "").split(", "), r = o(`${Wn}Delay`), s = o(`${Wn}Duration`), i = Yc(r, s), a = o(`${Fr}Delay`), l = o(`${Fr}Duration`), f = Yc(a, l);
  let u = null, c = 0, d = 0;
  t === Wn ? i > 0 && (u = Wn, c = i, d = s.length) : t === Fr ? f > 0 && (u = Fr, c = f, d = l.length) : (c = Math.max(i, f), u = c > 0 ? i > f ? Wn : Fr : null, d = u ? u === Wn ? s.length : l.length : 0);
  const p = u === Wn && /\b(transform|all)(,|$)/.test(
    o(`${Wn}Property`).toString()
  );
  return {
    type: u,
    timeout: c,
    propCount: d,
    hasTransform: p
  };
}
function Yc(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Xc(n) + Xc(e[o])));
}
function Xc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Jc() {
  return document.body.offsetHeight;
}
function eb(e, t, n) {
  const o = e[ms];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Mi = Symbol("_vod"), hm = Symbol("_vsh"), mm = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Mi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Br(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Br(e, !0), o.enter(e)) : o.leave(e, () => {
      Br(e, !1);
    }) : Br(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Br(e, t);
  }
};
Ft.NODE_ENV !== "production" && (mm.name = "show");
function Br(e, t) {
  e.style.display = t ? e[Mi] : "none", e[hm] = !t;
}
const tb = Symbol(Ft.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), nb = /(^|;)\s*display\s*:/;
function ob(e, t, n) {
  const o = e.style, r = Fe(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (Fe(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && pi(o, a, "");
        }
      else
        for (const i in t)
          n[i] == null && pi(o, i, "");
    for (const i in n)
      i === "display" && (s = !0), pi(o, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = o[tb];
      i && (n += ";" + i), o.cssText = n, s = nb.test(n);
    }
  } else t && e.removeAttribute("style");
  Mi in e && (e[Mi] = s ? o.display : "", e[hm] && (o.display = "none"));
}
const rb = /[^\\];\s*$/, Qc = /\s*!important$/;
function pi(e, t, n) {
  if (oe(n))
    n.forEach((o) => pi(e, t, o));
  else if (n == null && (n = ""), Ft.NODE_ENV !== "production" && rb.test(n) && mn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = sb(e, t);
    Qc.test(n) ? e.setProperty(
      vn(o),
      n.replace(Qc, ""),
      "important"
    ) : e[o] = n;
  }
}
const Zc = ["Webkit", "Moz", "ms"], Fa = {};
function sb(e, t) {
  const n = Fa[t];
  if (n)
    return n;
  let o = lt(t);
  if (o !== "filter" && o in e)
    return Fa[t] = o;
  o = Po(o);
  for (let r = 0; r < Zc.length; r++) {
    const s = Zc[r] + o;
    if (s in e)
      return Fa[t] = s;
  }
  return t;
}
const ef = "http://www.w3.org/1999/xlink";
function tf(e, t, n, o, r, s = NE(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ef, t.slice(6, t.length)) : e.setAttributeNS(ef, t, n) : n == null || s && !Up(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Yt(n) ? String(n) : n
  );
}
function nf(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? dm(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const a = s === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
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
    a === "boolean" ? n = Up(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    Ft.NODE_ENV !== "production" && !i && mn(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  i && e.removeAttribute(r || t);
}
function Zn(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ib(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const of = Symbol("_vei");
function ab(e, t, n, o, r = null) {
  const s = e[of] || (e[of] = {}), i = s[t];
  if (o && i)
    i.value = Ft.NODE_ENV !== "production" ? sf(o, t) : o;
  else {
    const [a, l] = lb(t);
    if (o) {
      const f = s[t] = fb(
        Ft.NODE_ENV !== "production" ? sf(o, t) : o,
        r
      );
      Zn(e, a, f, l);
    } else i && (ib(e, a, i, l), s[t] = void 0);
  }
}
const rf = /(?:Once|Passive|Capture)$/;
function lb(e) {
  let t;
  if (rf.test(e)) {
    t = {};
    let o;
    for (; o = e.match(rf); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : vn(e.slice(2)), t];
}
let Ba = 0;
const ub = /* @__PURE__ */ Promise.resolve(), cb = () => Ba || (ub.then(() => Ba = 0), Ba = Date.now());
function fb(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Zt(
      db(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = cb(), n;
}
function sf(e, t) {
  return ae(e) || oe(e) ? e : (mn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Qe);
}
function db(e, t) {
  if (oe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const af = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, pb = (e, t, n, o, r, s) => {
  const i = r === "svg";
  t === "class" ? eb(e, o, i) : t === "style" ? ob(e, n, o) : Ss(t) ? Ni(t) || ab(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hb(e, t, o, i)) ? (nf(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && tf(e, t, o, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Fe(o)) ? nf(e, lt(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), tf(e, t, o, i));
};
function hb(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && af(t) && ae(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return af(t) && Fe(n) ? !1 : t in e;
}
const mr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return oe(t) ? (n) => er(t, n) : t;
};
function mb(e) {
  e.target.composing = !0;
}
function lf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Vn = Symbol("_assign"), xl = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[Vn] = mr(r);
    const s = o || r.props && r.props.type === "number";
    Zn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), s && (a = Ti(a)), e[Vn](a);
    }), n && Zn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Zn(e, "compositionstart", mb), Zn(e, "compositionend", lf), Zn(e, "change", lf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: r, number: s } }, i) {
    if (e[Vn] = mr(i), e.composing) return;
    const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? Ti(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (o && t === n || r && e.value.trim() === l) || (e.value = l));
  }
}, uf = {
  created(e, { value: t }, n) {
    e.checked = pr(t, n.props.value), e[Vn] = mr(n), Zn(e, "change", () => {
      e[Vn](_s(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, o) {
    e[Vn] = mr(o), t !== n && (e.checked = pr(t, o.props.value));
  }
}, _m = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const r = Yi(t);
    Zn(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Ti(_s(i)) : _s(i)
      );
      e[Vn](
        e.multiple ? r ? new Set(s) : s : s[0]
      ), e._assigning = !0, hr(() => {
        e._assigning = !1;
      });
    }), e[Vn] = mr(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    cf(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Vn] = mr(n);
  },
  updated(e, { value: t }) {
    e._assigning || cf(e, t);
  }
};
function cf(e, t) {
  const n = e.multiple, o = oe(t);
  if (n && !o && !Yi(t)) {
    Ft.NODE_ENV !== "production" && mn(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, s = e.options.length; r < s; r++) {
    const i = e.options[r], a = _s(i);
    if (n)
      if (o) {
        const l = typeof a;
        l === "string" || l === "number" ? i.selected = t.some((f) => String(f) === String(a)) : i.selected = CE(t, a) > -1;
      } else
        i.selected = t.has(a);
    else if (pr(_s(i), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function _s(e) {
  return "_value" in e ? e._value : e.value;
}
const _b = ["ctrl", "shift", "alt", "meta"], gb = {
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
  exact: (e, t) => _b.some((n) => e[`${n}Key`] && !t.includes(n))
}, gm = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const a = gb[t[i]];
      if (a && a(r, t)) return;
    }
    return e(r, ...s);
  });
}, Eb = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, vb = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const s = vn(r.key);
    if (t.some(
      (i) => i === s || Eb[i] === s
    ))
      return e(r);
  });
}, yb = /* @__PURE__ */ He({ patchProp: pb }, zy);
let ff;
function bb() {
  return ff || (ff = my(yb));
}
const ca = (...e) => {
  const t = bb().createApp(...e);
  Ft.NODE_ENV !== "production" && (Ob(t), Ab(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Sb(o);
    if (!r) return;
    const s = t._component;
    !ae(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, wb(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function wb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ob(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => wE(t) || OE(t) || AE(t),
    writable: !1
  });
}
function Ab(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        mn(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return mn(o), n;
      },
      set() {
        mn(o);
      }
    });
  }
}
function Sb(e) {
  if (Fe(e)) {
    const t = document.querySelector(e);
    return Ft.NODE_ENV !== "production" && !t && mn(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Ft.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && mn(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Nb = {};
function Tb() {
  jy();
}
Nb.NODE_ENV !== "production" && Tb();
var Cb = Object.create, Em = Object.defineProperty, Db = Object.getOwnPropertyDescriptor, Tu = Object.getOwnPropertyNames, xb = Object.getPrototypeOf, Rb = Object.prototype.hasOwnProperty, kb = (e, t) => function() {
  return e && (t = (0, e[Tu(e)[0]])(e = 0)), t;
}, $b = (e, t) => function() {
  return t || (0, e[Tu(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Ib = (e, t, n, o) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of Tu(t))
      !Rb.call(e, r) && r !== n && Em(e, r, { get: () => t[r], enumerable: !(o = Db(t, r)) || o.enumerable });
  return e;
}, Pb = (e, t, n) => (n = e != null ? Cb(xb(e)) : {}, Ib(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Em(n, "default", { value: e, enumerable: !0 }),
  e
)), Is = kb({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Vb = $b({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    Is(), t.exports = o;
    function n(s) {
      return s instanceof Buffer ? Buffer.from(s) : new s.constructor(s.buffer.slice(), s.byteOffset, s.length);
    }
    function o(s) {
      if (s = s || {}, s.circles) return r(s);
      const i = /* @__PURE__ */ new Map();
      if (i.set(Date, (c) => new Date(c)), i.set(Map, (c, d) => new Map(l(Array.from(c), d))), i.set(Set, (c, d) => new Set(l(Array.from(c), d))), s.constructorHandlers)
        for (const c of s.constructorHandlers)
          i.set(c[0], c[1]);
      let a = null;
      return s.proto ? u : f;
      function l(c, d) {
        const p = Object.keys(c), h = new Array(p.length);
        for (let m = 0; m < p.length; m++) {
          const g = p[m], E = c[g];
          typeof E != "object" || E === null ? h[g] = E : E.constructor !== Object && (a = i.get(E.constructor)) ? h[g] = a(E, d) : ArrayBuffer.isView(E) ? h[g] = n(E) : h[g] = d(E);
        }
        return h;
      }
      function f(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return l(c, f);
        if (c.constructor !== Object && (a = i.get(c.constructor)))
          return a(c, f);
        const d = {};
        for (const p in c) {
          if (Object.hasOwnProperty.call(c, p) === !1) continue;
          const h = c[p];
          typeof h != "object" || h === null ? d[p] = h : h.constructor !== Object && (a = i.get(h.constructor)) ? d[p] = a(h, f) : ArrayBuffer.isView(h) ? d[p] = n(h) : d[p] = f(h);
        }
        return d;
      }
      function u(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return l(c, u);
        if (c.constructor !== Object && (a = i.get(c.constructor)))
          return a(c, u);
        const d = {};
        for (const p in c) {
          const h = c[p];
          typeof h != "object" || h === null ? d[p] = h : h.constructor !== Object && (a = i.get(h.constructor)) ? d[p] = a(h, u) : ArrayBuffer.isView(h) ? d[p] = n(h) : d[p] = u(h);
        }
        return d;
      }
    }
    function r(s) {
      const i = [], a = [], l = /* @__PURE__ */ new Map();
      if (l.set(Date, (p) => new Date(p)), l.set(Map, (p, h) => new Map(u(Array.from(p), h))), l.set(Set, (p, h) => new Set(u(Array.from(p), h))), s.constructorHandlers)
        for (const p of s.constructorHandlers)
          l.set(p[0], p[1]);
      let f = null;
      return s.proto ? d : c;
      function u(p, h) {
        const m = Object.keys(p), g = new Array(m.length);
        for (let E = 0; E < m.length; E++) {
          const O = m[E], y = p[O];
          if (typeof y != "object" || y === null)
            g[O] = y;
          else if (y.constructor !== Object && (f = l.get(y.constructor)))
            g[O] = f(y, h);
          else if (ArrayBuffer.isView(y))
            g[O] = n(y);
          else {
            const R = i.indexOf(y);
            R !== -1 ? g[O] = a[R] : g[O] = h(y);
          }
        }
        return g;
      }
      function c(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return u(p, c);
        if (p.constructor !== Object && (f = l.get(p.constructor)))
          return f(p, c);
        const h = {};
        i.push(p), a.push(h);
        for (const m in p) {
          if (Object.hasOwnProperty.call(p, m) === !1) continue;
          const g = p[m];
          if (typeof g != "object" || g === null)
            h[m] = g;
          else if (g.constructor !== Object && (f = l.get(g.constructor)))
            h[m] = f(g, c);
          else if (ArrayBuffer.isView(g))
            h[m] = n(g);
          else {
            const E = i.indexOf(g);
            E !== -1 ? h[m] = a[E] : h[m] = c(g);
          }
        }
        return i.pop(), a.pop(), h;
      }
      function d(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return u(p, d);
        if (p.constructor !== Object && (f = l.get(p.constructor)))
          return f(p, d);
        const h = {};
        i.push(p), a.push(h);
        for (const m in p) {
          const g = p[m];
          if (typeof g != "object" || g === null)
            h[m] = g;
          else if (g.constructor !== Object && (f = l.get(g.constructor)))
            h[m] = f(g, d);
          else if (ArrayBuffer.isView(g))
            h[m] = n(g);
          else {
            const E = i.indexOf(g);
            E !== -1 ? h[m] = a[E] : h[m] = d(g);
          }
        }
        return i.pop(), a.pop(), h;
      }
    }
  }
});
Is();
Is();
Is();
var vm = typeof navigator < "u", te = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof te.chrome < "u" && te.chrome.devtools;
vm && (te.self, te.top);
var df;
typeof navigator < "u" && ((df = navigator.userAgent) == null || df.toLowerCase().includes("electron"));
Is();
var Lb = Pb(Vb()), Mb = /(?:^|[-_/])(\w)/g;
function Fb(e, t) {
  return t ? t.toUpperCase() : "";
}
function Bb(e) {
  return e && `${e}`.replace(Mb, Fb);
}
function Ub(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const o = n.lastIndexOf("/"), r = n.substring(o + 1);
  {
    const s = r.lastIndexOf(t);
    return r.substring(0, s);
  }
}
var pf = (0, Lb.default)({ circles: !0 });
const Hb = {
  trailing: !0
};
function _r(e, t = 25, n = {}) {
  if (n = { ...Hb, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let o, r, s = [], i, a;
  const l = (f, u) => (i = jb(e, f, u), i.finally(() => {
    if (i = null, n.trailing && a && !r) {
      const c = l(f, a);
      return a = null, c;
    }
  }), i);
  return function(...f) {
    return i ? (n.trailing && (a = f), i) : new Promise((u) => {
      const c = !r && n.leading;
      clearTimeout(r), r = setTimeout(() => {
        r = null;
        const d = n.leading ? o : l(this, f);
        for (const p of s)
          p(d);
        s = [];
      }, t), c ? (o = l(this, f), u(o)) : s.push(u);
    });
  };
}
async function jb(e, t, n) {
  return await e.apply(t, n);
}
function Rl(e, t = {}, n) {
  for (const o in e) {
    const r = e[o], s = n ? `${n}:${o}` : o;
    typeof r == "object" && r !== null ? Rl(r, t, s) : typeof r == "function" && (t[s] = r);
  }
  return t;
}
const Kb = { run: (e) => e() }, Wb = () => Kb, ym = typeof console.createTask < "u" ? console.createTask : Wb;
function zb(e, t) {
  const n = t.shift(), o = ym(n);
  return e.reduce(
    (r, s) => r.then(() => o.run(() => s(...t))),
    Promise.resolve()
  );
}
function qb(e, t) {
  const n = t.shift(), o = ym(n);
  return Promise.all(e.map((r) => o.run(() => r(...t))));
}
function Ua(e, t) {
  for (const n of [...e])
    n(t);
}
class Gb {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(t, n, o = {}) {
    if (!t || typeof n != "function")
      return () => {
      };
    const r = t;
    let s;
    for (; this._deprecatedHooks[t]; )
      s = this._deprecatedHooks[t], t = s.to;
    if (s && !o.allowDeprecated) {
      let i = s.message;
      i || (i = `${r} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i));
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
    let o, r = (...s) => (typeof o == "function" && o(), o = void 0, r = void 0, n(...s));
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
    const n = Rl(t), o = Object.keys(n).map(
      (r) => this.hook(r, n[r])
    );
    return () => {
      for (const r of o.splice(0, o.length))
        r();
    };
  }
  removeHooks(t) {
    const n = Rl(t);
    for (const o in n)
      this.removeHook(o, n[o]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(zb, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(qb, t, ...n);
  }
  callHookWith(t, n, ...o) {
    const r = this._before || this._after ? { name: n, args: o, context: {} } : void 0;
    this._before && Ua(this._before, r);
    const s = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      o
    );
    return s instanceof Promise ? s.finally(() => {
      this._after && r && Ua(this._after, r);
    }) : (this._after && r && Ua(this._after, r), s);
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
function bm() {
  return new Gb();
}
var Yb = Object.create, wm = Object.defineProperty, Xb = Object.getOwnPropertyDescriptor, Cu = Object.getOwnPropertyNames, Jb = Object.getPrototypeOf, Qb = Object.prototype.hasOwnProperty, Zb = (e, t) => function() {
  return e && (t = (0, e[Cu(e)[0]])(e = 0)), t;
}, Om = (e, t) => function() {
  return t || (0, e[Cu(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, e0 = (e, t, n, o) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of Cu(t))
      !Qb.call(e, r) && r !== n && wm(e, r, { get: () => t[r], enumerable: !(o = Xb(t, r)) || o.enumerable });
  return e;
}, t0 = (e, t, n) => (n = e != null ? Yb(Jb(e)) : {}, e0(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  wm(n, "default", { value: e, enumerable: !0 }),
  e
)), F = Zb({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), n0 = Om({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
    F(), function(n) {
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
      ], s = {
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
      }, l = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), f = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), u = [".", "!", "~", "*", "'", "(", ")"].join(""), c = function(g, E) {
        var O = "-", y = "", R = "", S = !0, T = {}, N, V, P, k, $, D, G, ce, me, Q, j, ee, le, We, ze = "";
        if (typeof g != "string")
          return "";
        if (typeof E == "string" && (O = E), G = a.en, ce = i.en, typeof E == "object") {
          N = E.maintainCase || !1, T = E.custom && typeof E.custom == "object" ? E.custom : T, P = +E.truncate > 1 && E.truncate || !1, k = E.uric || !1, $ = E.uricNoSlash || !1, D = E.mark || !1, S = !(E.symbols === !1 || E.lang === !1), O = E.separator || O, k && (ze += l), $ && (ze += f), D && (ze += u), G = E.lang && a[E.lang] && S ? a[E.lang] : S ? a.en : {}, ce = E.lang && i[E.lang] ? i[E.lang] : E.lang === !1 || E.lang === !0 ? {} : i.en, E.titleCase && typeof E.titleCase.length == "number" && Array.prototype.toString.call(E.titleCase) ? (E.titleCase.forEach(function(Pe) {
            T[Pe + ""] = Pe + "";
          }), V = !0) : V = !!E.titleCase, E.custom && typeof E.custom.length == "number" && Array.prototype.toString.call(E.custom) && E.custom.forEach(function(Pe) {
            T[Pe + ""] = Pe + "";
          }), Object.keys(T).forEach(function(Pe) {
            var Be;
            Pe.length > 1 ? Be = new RegExp("\\b" + p(Pe) + "\\b", "gi") : Be = new RegExp(p(Pe), "gi"), g = g.replace(Be, T[Pe]);
          });
          for (j in T)
            ze += j;
        }
        for (ze += O, ze = p(ze), g = g.replace(/(^\s+|\s+$)/g, ""), le = !1, We = !1, Q = 0, ee = g.length; Q < ee; Q++)
          j = g[Q], h(j, T) ? le = !1 : ce[j] ? (j = le && ce[j].match(/[A-Za-z0-9]/) ? " " + ce[j] : ce[j], le = !1) : j in o ? (Q + 1 < ee && r.indexOf(g[Q + 1]) >= 0 ? (R += j, j = "") : We === !0 ? (j = s[R] + o[j], R = "") : j = le && o[j].match(/[A-Za-z0-9]/) ? " " + o[j] : o[j], le = !1, We = !1) : j in s ? (R += j, j = "", Q === ee - 1 && (j = s[R]), We = !0) : /* process symbol chars */ G[j] && !(k && l.indexOf(j) !== -1) && !($ && f.indexOf(j) !== -1) ? (j = le || y.substr(-1).match(/[A-Za-z0-9]/) ? O + G[j] : G[j], j += g[Q + 1] !== void 0 && g[Q + 1].match(/[A-Za-z0-9]/) ? O : "", le = !0) : (We === !0 ? (j = s[R] + j, R = "", We = !1) : le && (/[A-Za-z0-9]/.test(j) || y.substr(-1).match(/A-Za-z0-9]/)) && (j = " " + j), le = !1), y += j.replace(new RegExp("[^\\w\\s" + ze + "_-]", "g"), O);
        return V && (y = y.replace(/(\w)(\S*)/g, function(Pe, Be, tt) {
          var ot = Be.toUpperCase() + (tt !== null ? tt : "");
          return Object.keys(T).indexOf(ot.toLowerCase()) < 0 ? ot : ot.toLowerCase();
        })), y = y.replace(/\s+/g, O).replace(new RegExp("\\" + O + "+", "g"), O).replace(new RegExp("(^\\" + O + "+|\\" + O + "+$)", "g"), ""), P && y.length > P && (me = y.charAt(P) === O, y = y.slice(0, P), me || (y = y.slice(0, y.lastIndexOf(O)))), !N && !V && (y = y.toLowerCase()), y;
      }, d = function(g) {
        return function(O) {
          return c(O, g);
        };
      }, p = function(g) {
        return g.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, h = function(m, g) {
        for (var E in g)
          if (g[E] === m)
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
}), o0 = Om({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    F(), t.exports = n0();
  }
});
F();
F();
F();
F();
F();
F();
F();
F();
function r0(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function s0(e) {
  const t = e.__file;
  if (t)
    return Bb(Ub(t, ".vue"));
}
function hf(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Du(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Am(e) {
  var t, n;
  const o = (t = e.subTree) == null ? void 0 : t.type, r = Du(e);
  return r ? ((n = r?.types) == null ? void 0 : n.Fragment) === o : !1;
}
function fa(e) {
  var t, n, o;
  const r = r0(e?.type || {});
  if (r)
    return r;
  if (e?.root === e)
    return "Root";
  for (const i in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[i] === e?.type)
      return hf(e, i);
  for (const i in (o = e.appContext) == null ? void 0 : o.components)
    if (e.appContext.components[i] === e?.type)
      return hf(e, i);
  const s = s0(e?.type || {});
  return s || "Anonymous Component";
}
function i0(e) {
  var t, n, o;
  const r = (o = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? o : 0, s = e === e?.root ? "root" : e.uid;
  return `${r}:${s}`;
}
function kl(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function a0() {
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
var Xs;
function l0(e) {
  return Xs || (Xs = document.createRange()), Xs.selectNode(e), Xs.getBoundingClientRect();
}
function u0(e) {
  const t = a0();
  if (!e.children)
    return t;
  for (let n = 0, o = e.children.length; n < o; n++) {
    const r = e.children[n];
    let s;
    if (r.component)
      s = Fo(r.component);
    else if (r.el) {
      const i = r.el;
      i.nodeType === 1 || i.getBoundingClientRect ? s = i.getBoundingClientRect() : i.nodeType === 3 && i.data.trim() && (s = l0(i));
    }
    s && c0(t, s);
  }
  return t;
}
function c0(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var mf = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function Fo(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? mf : Am(e) ? u0(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? Fo(e.subTree.component) : mf;
}
F();
function xu(e) {
  return Am(e) ? f0(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function f0(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...xu(n.component)) : n?.el && t.push(n.el);
  }), t;
}
var Sm = "__vue-devtools-component-inspector__", Nm = "__vue-devtools-component-inspector__card__", Tm = "__vue-devtools-component-inspector__name__", Cm = "__vue-devtools-component-inspector__indicator__", Dm = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, d0 = {
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
}, p0 = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function Dr() {
  return document.getElementById(Sm);
}
function h0() {
  return document.getElementById(Nm);
}
function m0() {
  return document.getElementById(Cm);
}
function _0() {
  return document.getElementById(Tm);
}
function Ru(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function ku(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : Sm, Object.assign(n.style, {
    ...Dm,
    ...Ru(e.bounds),
    ...e.style
  });
  const o = document.createElement("span");
  o.id = Nm, Object.assign(o.style, {
    ...d0,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const r = document.createElement("span");
  r.id = Tm, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const s = document.createElement("i");
  return s.id = Cm, s.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(s.style, p0), o.appendChild(r), o.appendChild(s), n.appendChild(o), document.body.appendChild(n), n;
}
function $u(e) {
  const t = Dr(), n = h0(), o = _0(), r = m0();
  t && (Object.assign(t.style, {
    ...Dm,
    ...Ru(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), o.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function g0(e) {
  const t = Fo(e);
  if (!t.width && !t.height)
    return;
  const n = fa(e);
  Dr() ? $u({ bounds: t, name: n }) : ku({ bounds: t, name: n });
}
function xm() {
  const e = Dr();
  e && (e.style.display = "none");
}
var $l = null;
function Il(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && ($l = n, n.vnode.el)) {
      const r = Fo(n), s = fa(n);
      Dr() ? $u({ bounds: r, name: s }) : ku({ bounds: r, name: s });
    }
  }
}
function E0(e, t) {
  if (e.preventDefault(), e.stopPropagation(), $l) {
    const n = i0($l);
    t(n);
  }
}
var Fi = null;
function v0() {
  xm(), window.removeEventListener("mouseover", Il), window.removeEventListener("click", Fi, !0), Fi = null;
}
function y0() {
  return window.addEventListener("mouseover", Il), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), E0(n, (o) => {
        window.removeEventListener("click", t, !0), Fi = null, window.removeEventListener("mouseover", Il);
        const r = Dr();
        r && (r.style.display = "none"), e(JSON.stringify({ id: o }));
      });
    }
    Fi = t, window.addEventListener("click", t, !0);
  });
}
function b0(e) {
  const t = kl(pt.value, e.id);
  if (t) {
    const [n] = xu(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const o = Fo(t), r = document.createElement("div"), s = {
        ...Ru(o),
        position: "absolute"
      };
      Object.assign(r.style, s), document.body.appendChild(r), r.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(r);
      }, 2e3);
    }
    setTimeout(() => {
      const o = Fo(t);
      if (o.width || o.height) {
        const r = fa(t), s = Dr();
        s ? $u({ ...e, name: r, bounds: o }) : ku({ ...e, name: r, bounds: o }), setTimeout(() => {
          s && (s.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
F();
var _f, gf;
(gf = (_f = te).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (_f.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function w0(e) {
  let t = 0;
  const n = setInterval(() => {
    te.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function O0() {
  const e = te.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function A0() {
  return new Promise((e) => {
    function t() {
      O0(), e(te.__VUE_INSPECTOR__);
    }
    te.__VUE_INSPECTOR__ ? t() : w0(() => {
      t();
    });
  });
}
F();
F();
function S0(e) {
  return !!(e && e.__v_isReadonly);
}
function Rm(e) {
  return S0(e) ? Rm(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ha(e) {
  return !!(e && e.__v_isRef === !0);
}
function Gr(e) {
  const t = e && e.__v_raw;
  return t ? Gr(t) : e;
}
var N0 = class {
  constructor() {
    this.refEditor = new T0();
  }
  set(e, t, n, o) {
    const r = Array.isArray(t) ? t : t.split(".");
    for (; r.length > 1; ) {
      const a = r.shift();
      e instanceof Map ? e = e.get(a) : e instanceof Set ? e = Array.from(e.values())[a] : e = e[a], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    const s = r[0], i = this.refEditor.get(e)[s];
    o ? o(e, s, n) : this.refEditor.isRef(i) ? this.refEditor.set(i, n) : e[s] = n;
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
      const s = o.shift();
      e = e[s], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    return e != null && Object.prototype.hasOwnProperty.call(e, o[0]);
  }
  createDefaultSetCallback(e) {
    return (t, n, o) => {
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : Gr(t) instanceof Map ? t.delete(n) : Gr(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const r = t[e.newKey || n];
        this.refEditor.isRef(r) ? this.refEditor.set(r, o) : Gr(t) instanceof Map ? t.set(e.newKey || n, o) : Gr(t) instanceof Set ? t.add(o) : t[e.newKey || n] = o;
      }
    };
  }
}, T0 = class {
  set(e, t) {
    if (Ha(e))
      e.value = t;
    else {
      if (e instanceof Set && Array.isArray(t)) {
        e.clear(), t.forEach((r) => e.add(r));
        return;
      }
      const n = Object.keys(t);
      if (e instanceof Map) {
        const r = new Set(e.keys());
        n.forEach((s) => {
          e.set(s, Reflect.get(t, s)), r.delete(s);
        }), r.forEach((s) => e.delete(s));
        return;
      }
      const o = new Set(Object.keys(e));
      n.forEach((r) => {
        Reflect.set(e, r, Reflect.get(t, r)), o.delete(r);
      }), o.forEach((r) => Reflect.deleteProperty(e, r));
    }
  }
  get(e) {
    return Ha(e) ? e.value : e;
  }
  isRef(e) {
    return Ha(e) || Rm(e);
  }
};
F();
F();
F();
var C0 = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function D0() {
  if (!vm || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem(C0);
  return e ? JSON.parse(e) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
F();
F();
F();
var Ef, vf;
(vf = (Ef = te).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Ef.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var x0 = new Proxy(te.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function R0(e, t) {
  Ze.timelineLayersState[t.id] = !1, x0.push({
    ...e,
    descriptorId: t.id,
    appRecord: Du(t.app)
  });
}
var yf, bf;
(bf = (yf = te).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (yf.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Iu = new Proxy(te.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), km = _r(() => {
  xr.hooks.callHook("sendInspectorToClient", $m());
});
function k0(e, t) {
  var n, o;
  Iu.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (o = e.stateFilterPlaceholder) != null ? o : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Du(t.app)
  }), km();
}
function $m() {
  return Iu.filter((e) => e.descriptor.app === pt.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
function hi(e, t) {
  return Iu.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function $0() {
  const e = bm();
  e.hook("addInspector", ({ inspector: o, plugin: r }) => {
    k0(o, r.descriptor);
  });
  const t = _r(async ({ inspectorId: o, plugin: r }) => {
    var s;
    if (!o || !((s = r?.descriptor) != null && s.app) || Ze.highPerfModeEnabled)
      return;
    const i = hi(o, r.descriptor.app), a = {
      app: r.descriptor.app,
      inspectorId: o,
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
          inspectorId: o,
          rootNodes: a.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  e.hook("sendInspectorTree", t);
  const n = _r(async ({ inspectorId: o, plugin: r }) => {
    var s;
    if (!o || !((s = r?.descriptor) != null && s.app) || Ze.highPerfModeEnabled)
      return;
    const i = hi(o, r.descriptor.app), a = {
      app: r.descriptor.app,
      inspectorId: o,
      nodeId: i?.selectedNodeId || "",
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
  return e.hook("sendInspectorState", n), e.hook("customInspectorSelectNode", ({ inspectorId: o, nodeId: r, plugin: s }) => {
    const i = hi(o, s.descriptor.app);
    i && (i.selectedNodeId = r);
  }), e.hook("timelineLayerAdded", ({ options: o, plugin: r }) => {
    R0(o, r.descriptor);
  }), e.hook("timelineEventAdded", ({ options: o, plugin: r }) => {
    var s;
    const i = ["performance", "component-event", "keyboard", "mouse"];
    Ze.highPerfModeEnabled || !((s = Ze.timelineLayersState) != null && s[r.descriptor.id]) && !i.includes(o.layerId) || e.callHookWith(
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
    const s = r.id.toString();
    return [...r.instanceMap].filter(([a]) => a.split(":")[0] === s).map(([, a]) => a);
  }), e.hook("getComponentBounds", async ({ instance: o }) => Fo(o)), e.hook("getComponentName", ({ instance: o }) => fa(o)), e.hook("componentHighlight", ({ uid: o }) => {
    const r = pt.value.instanceMap.get(o);
    r && g0(r);
  }), e.hook("componentUnhighlight", () => {
    xm();
  }), e;
}
var wf, Of;
(Of = (wf = te).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (wf.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Af, Sf;
(Sf = (Af = te).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Af.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var Nf, Tf;
(Tf = (Nf = te).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (Nf.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Cf, Df;
(Df = (Cf = te).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Cf.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var xf, Rf;
(Rf = (xf = te).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (xf.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var Oo = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function I0() {
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
    timelineLayersState: D0()
  };
}
var kf, $f;
($f = (kf = te)[Oo]) != null || (kf[Oo] = I0());
var P0 = _r((e) => {
  xr.hooks.callHook("devtoolsStateUpdated", { state: e });
});
_r((e, t) => {
  xr.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var da = new Proxy(te.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? te.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : te.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), pt = new Proxy(te.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? te.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? te.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : te.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function Im() {
  P0({
    ...te[Oo],
    appRecords: da.value,
    activeAppRecordId: pt.id,
    tabs: te.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: te.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function V0(e) {
  te.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Im();
}
function L0(e) {
  te.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Im();
}
var Ze = new Proxy(te[Oo], {
  get(e, t) {
    return t === "appRecords" ? da : t === "activeAppRecordId" ? pt.id : t === "tabs" ? te.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? te.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : te[Oo][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...te[Oo] }, e[t] = n, te[Oo][t] = n, !0;
  }
});
function M0(e = {}) {
  var t, n, o;
  const { file: r, host: s, baseUrl: i = window.location.origin, line: a = 0, column: l = 0 } = e;
  if (r) {
    if (s === "chrome-extension") {
      const f = r.replace(/\\/g, "\\\\"), u = (n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? n : "/";
      fetch(`${u}__open-in-editor?file=${encodeURI(r)}`).then((c) => {
        if (!c.ok) {
          const d = `Opening component ${f} failed`;
          console.log(`%c${d}`, "color:red");
        }
      });
    } else if (Ze.vitePluginDetected) {
      const f = (o = te.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? o : i;
      te.__VUE_INSPECTOR__.openInEditor(f, r, a, l);
    }
  }
}
F();
F();
F();
F();
F();
var If, Pf;
(Pf = (If = te).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (If.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var Pu = new Proxy(te.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function Pl(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function Vu(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function F0(e) {
  var t, n, o;
  const r = (n = (t = Pu.find((s) => {
    var i;
    return s[0].id === e && !!((i = s[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (o = r?.settings) != null ? o : null;
}
function Pm(e, t) {
  var n, o, r;
  const s = Vu(e);
  if (s) {
    const i = localStorage.getItem(s);
    if (i)
      return JSON.parse(i);
  }
  if (e) {
    const i = (o = (n = Pu.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? o : null;
    return Pl((r = i?.settings) != null ? r : {});
  }
  return Pl(t);
}
function B0(e, t) {
  const n = Vu(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Pl(t)));
}
function U0(e, t, n) {
  const o = Vu(e), r = localStorage.getItem(o), s = JSON.parse(r || "{}"), i = {
    ...s,
    [t]: n
  };
  localStorage.setItem(o, JSON.stringify(i)), xr.hooks.callHookWith(
    (a) => {
      a.forEach((l) => l({
        pluginId: e,
        key: t,
        oldValue: s[t],
        newValue: n,
        settings: i
      }));
    },
    "setPluginSettings"
    /* SET_PLUGIN_SETTINGS */
  );
}
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
var Vf, Lf, Ct = (Lf = (Vf = te).__VUE_DEVTOOLS_HOOK) != null ? Lf : Vf.__VUE_DEVTOOLS_HOOK = bm(), H0 = {
  vueAppInit(e) {
    Ct.hook("app:init", e);
  },
  vueAppUnmount(e) {
    Ct.hook("app:unmount", e);
  },
  vueAppConnected(e) {
    Ct.hook("app:connected", e);
  },
  componentAdded(e) {
    return Ct.hook("component:added", e);
  },
  componentEmit(e) {
    return Ct.hook("component:emit", e);
  },
  componentUpdated(e) {
    return Ct.hook("component:updated", e);
  },
  componentRemoved(e) {
    return Ct.hook("component:removed", e);
  },
  setupDevtoolsPlugin(e) {
    Ct.hook("devtools-plugin:setup", e);
  },
  perfStart(e) {
    return Ct.hook("perf:start", e);
  },
  perfEnd(e) {
    return Ct.hook("perf:end", e);
  }
}, Vm = {
  on: H0,
  setupDevToolsPlugin(e, t) {
    return Ct.callHook("devtools-plugin:setup", e, t);
  }
}, j0 = class {
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
    if (Ze.highPerfModeEnabled)
      return;
    const n = $m().find((o) => o.packageName === this.plugin.descriptor.packageName);
    if (n?.id) {
      if (e) {
        const o = [
          e.appContext.app,
          e.uid,
          (t = e.parent) == null ? void 0 : t.uid,
          e
        ];
        Ct.callHook("component:updated", ...o);
      } else
        Ct.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: n.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(e) {
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && B0(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    Ze.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    Ze.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return Ze.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    Ze.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
  }
  // settings
  getSettings(e) {
    return Pm(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
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
}, K0 = j0;
F();
F();
F();
F();
var W0 = "__vue_devtool_undefined__", z0 = "__vue_devtool_infinity__", q0 = "__vue_devtool_negative_infinity__", G0 = "__vue_devtool_nan__";
F();
F();
var Y0 = {
  [W0]: "undefined",
  [G0]: "NaN",
  [z0]: "Infinity",
  [q0]: "-Infinity"
};
Object.entries(Y0).reduce((e, [t, n]) => (e[n] = t, e), {});
F();
F();
F();
F();
F();
var Mf, Ff;
(Ff = (Mf = te).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (Mf.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function Lm(e, t) {
  return Vm.setupDevToolsPlugin(e, t);
}
function X0(e, t) {
  const [n, o] = e;
  if (n.app !== t)
    return;
  const r = new K0({
    plugin: {
      setupFn: o,
      descriptor: n
    },
    ctx: xr
  });
  n.packageName === "vuex" && r.on.editInspectorState((s) => {
    r.sendInspectorState(s.inspectorId);
  }), o(r);
}
function Mm(e, t) {
  te.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || Ze.highPerfModeEnabled && !t?.inspectingComponent || (te.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Pu.forEach((n) => {
    X0(n, e);
  }));
}
F();
F();
var gs = "__VUE_DEVTOOLS_ROUTER__", gr = "__VUE_DEVTOOLS_ROUTER_INFO__", Bf, Uf;
(Uf = (Bf = te)[gr]) != null || (Bf[gr] = {
  currentRoute: null,
  routes: []
});
var Hf, jf;
(jf = (Hf = te)[gs]) != null || (Hf[gs] = {});
new Proxy(te[gr], {
  get(e, t) {
    return te[gr][t];
  }
});
new Proxy(te[gs], {
  get(e, t) {
    if (t === "value")
      return te[gs];
  }
});
function J0(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Lu(e) {
  return e.map((t) => {
    let { path: n, name: o, children: r, meta: s } = t;
    return r?.length && (r = Lu(r)), {
      path: n,
      name: o,
      children: r,
      meta: s
    };
  });
}
function Q0(e) {
  if (e) {
    const { fullPath: t, hash: n, href: o, path: r, name: s, matched: i, params: a, query: l } = e;
    return {
      fullPath: t,
      hash: n,
      href: o,
      path: r,
      name: s,
      params: a,
      query: l,
      matched: Lu(i)
    };
  }
  return e;
}
function Z0(e, t) {
  function n() {
    var o;
    const r = (o = e.app) == null ? void 0 : o.config.globalProperties.$router, s = Q0(r?.currentRoute.value), i = Lu(J0(r)), a = console.warn;
    console.warn = () => {
    }, te[gr] = {
      currentRoute: s ? pf(s) : {},
      routes: pf(i)
    }, te[gs] = r, console.warn = a;
  }
  n(), Vm.on.componentUpdated(_r(() => {
    var o;
    ((o = t.value) == null ? void 0 : o.app) === e.app && (n(), !Ze.highPerfModeEnabled && xr.hooks.callHook("routerInfoUpdated", { state: te[gr] }));
  }, 200));
}
function ew(e) {
  return {
    // get inspector tree
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: pt.value.app,
        rootNodes: []
      };
      return await new Promise((o) => {
        e.callHookWith(
          async (r) => {
            await Promise.all(r.map((s) => s(n))), o();
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
        app: pt.value.app,
        state: null
      }, o = {
        currentTab: `custom-inspector:${t.inspectorId}`
      };
      return await new Promise((r) => {
        e.callHookWith(
          async (s) => {
            await Promise.all(s.map((i) => i(n, o))), r();
          },
          "getInspectorState"
          /* GET_INSPECTOR_STATE */
        );
      }), n.state;
    },
    // edit inspector state
    editInspectorState(t) {
      const n = new N0(), o = {
        ...t,
        app: pt.value.app,
        set: (r, s = t.path, i = t.state.value, a) => {
          n.set(r, s, i, a || n.createDefaultSetCallback(t.state));
        }
      };
      e.callHookWith(
        (r) => {
          r.forEach((s) => s(o));
        },
        "editInspectorState"
        /* EDIT_INSPECTOR_STATE */
      );
    },
    // send inspector state
    sendInspectorState(t) {
      const n = hi(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return y0();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return v0();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = kl(pt.value, t);
      if (n)
        return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return b0({ id: t });
    },
    // open in editor
    openInEditor: M0,
    // get vue inspector
    getVueInspector: A0,
    // toggle app
    toggleApp(t, n) {
      const o = da.value.find((r) => r.id === t);
      o && (L0(t), V0(o), Z0(o, pt), km(), Mm(o.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = kl(pt.value, t);
      if (n) {
        const [o] = xu(n);
        o && (te.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = o);
      }
    },
    updatePluginSettings(t, n, o) {
      U0(t, n, o);
    },
    getPluginSettings(t) {
      return {
        options: F0(t),
        values: Pm(t)
      };
    }
  };
}
F();
var Kf, Wf;
(Wf = (Kf = te).__VUE_DEVTOOLS_ENV__) != null || (Kf.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var zf = $0(), qf, Gf;
(Gf = (qf = te).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (qf.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: zf,
  get state() {
    return {
      ...Ze,
      activeAppRecordId: pt.id,
      activeAppRecord: pt.value,
      appRecords: da.value
    };
  },
  api: ew(zf)
});
var xr = te.__VUE_DEVTOOLS_KIT_CONTEXT__;
F();
t0(o0());
var Yf, Xf;
(Xf = (Yf = te).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (Yf.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
F();
F();
function tw(e) {
  Ze.highPerfModeEnabled = e ?? !Ze.highPerfModeEnabled, !e && pt.value && Mm(pt.value.app);
}
F();
F();
F();
function nw(e) {
  Ze.devtoolsClientDetected = {
    ...Ze.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(Ze.devtoolsClientDetected).some(Boolean);
  tw(!t);
}
var Jf, Qf;
(Qf = (Jf = te).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (Jf.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = nw);
F();
F();
F();
F();
F();
F();
F();
var ow = class {
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
}, Fm = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new ow();
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
}, rw = class extends Fm {
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
F();
F();
function sw(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function iw(e, t) {
  const n = sw(e);
  if ("find" in n)
    return n.find(t);
  const o = n;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t(s))
      return s;
  }
}
function Er(e, t) {
  Object.entries(e).forEach(([n, o]) => t(o, n));
}
function mi(e, t) {
  return e.indexOf(t) !== -1;
}
function Zf(e, t) {
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (t(o))
      return o;
  }
}
var aw = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return iw(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
F();
F();
var lw = (e) => Object.prototype.toString.call(e).slice(8, -1), Bm = (e) => typeof e > "u", uw = (e) => e === null, Es = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Vl = (e) => Es(e) && Object.keys(e).length === 0, oo = (e) => Array.isArray(e), cw = (e) => typeof e == "string", fw = (e) => typeof e == "number" && !isNaN(e), dw = (e) => typeof e == "boolean", pw = (e) => e instanceof RegExp, vs = (e) => e instanceof Map, ys = (e) => e instanceof Set, Um = (e) => lw(e) === "Symbol", hw = (e) => e instanceof Date && !isNaN(e.valueOf()), mw = (e) => e instanceof Error, ed = (e) => typeof e == "number" && isNaN(e), _w = (e) => dw(e) || uw(e) || Bm(e) || fw(e) || cw(e) || Um(e), gw = (e) => typeof e == "bigint", Ew = (e) => e === 1 / 0 || e === -1 / 0, vw = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), yw = (e) => e instanceof URL;
F();
var Hm = (e) => e.replace(/\./g, "\\."), ja = (e) => e.map(String).map(Hm).join("."), ns = (e) => {
  const t = [];
  let n = "";
  for (let r = 0; r < e.length; r++) {
    let s = e.charAt(r);
    if (s === "\\" && e.charAt(r + 1) === ".") {
      n += ".", r++;
      continue;
    }
    if (s === ".") {
      t.push(n), n = "";
      continue;
    }
    n += s;
  }
  const o = n;
  return t.push(o), t;
};
F();
function ln(e, t, n, o) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: o
  };
}
var jm = [
  ln(Bm, "undefined", () => null, () => {
  }),
  ln(gw, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  ln(hw, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  ln(mw, "Error", (e, t) => {
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
  ln(pw, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  ln(
    ys,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  ln(vs, "map", (e) => [...e.entries()], (e) => new Map(e)),
  ln((e) => ed(e) || Ew(e), "number", (e) => ed(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  ln((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  ln(yw, "URL", (e) => e.toString(), (e) => new URL(e))
];
function pa(e, t, n, o) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: o
  };
}
var Km = pa((e, t) => Um(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const o = n.symbolRegistry.getValue(t[1]);
  if (!o)
    throw new Error("Trying to deserialize unknown symbol");
  return o;
}), bw = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Wm = pa(vw, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = bw[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function zm(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var qm = pa(zm, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), Gm = pa((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const o = n.customTransformerRegistry.findByName(t[1]);
  if (!o)
    throw new Error("Trying to deserialize unknown custom value");
  return o.deserialize(e);
}), ww = [qm, Km, Gm, Wm], td = (e, t) => {
  const n = Zf(ww, (r) => r.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const o = Zf(jm, (r) => r.isApplicable(e, t));
  if (o)
    return {
      value: o.transform(e, t),
      type: o.annotation
    };
}, Ym = {};
jm.forEach((e) => {
  Ym[e.annotation] = e;
});
var Ow = (e, t, n) => {
  if (oo(t))
    switch (t[0]) {
      case "symbol":
        return Km.untransform(e, t, n);
      case "class":
        return qm.untransform(e, t, n);
      case "custom":
        return Gm.untransform(e, t, n);
      case "typed-array":
        return Wm.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const o = Ym[t];
    if (!o)
      throw new Error("Unknown transformation: " + t);
    return o.untransform(e, n);
  }
};
F();
var sr = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function Xm(e) {
  if (mi(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (mi(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (mi(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var Aw = (e, t) => {
  Xm(t);
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (ys(e))
      e = sr(e, +o);
    else if (vs(e)) {
      const r = +o, s = +t[++n] == 0 ? "key" : "value", i = sr(e, r);
      switch (s) {
        case "key":
          e = i;
          break;
        case "value":
          e = e.get(i);
          break;
      }
    } else
      e = e[o];
  }
  return e;
}, Ll = (e, t, n) => {
  if (Xm(t), t.length === 0)
    return n(e);
  let o = e;
  for (let s = 0; s < t.length - 1; s++) {
    const i = t[s];
    if (oo(o)) {
      const a = +i;
      o = o[a];
    } else if (Es(o))
      o = o[i];
    else if (ys(o)) {
      const a = +i;
      o = sr(o, a);
    } else if (vs(o)) {
      if (s === t.length - 2)
        break;
      const l = +i, f = +t[++s] == 0 ? "key" : "value", u = sr(o, l);
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
  if (oo(o) ? o[+r] = n(o[+r]) : Es(o) && (o[r] = n(o[r])), ys(o)) {
    const s = sr(o, +r), i = n(s);
    s !== i && (o.delete(s), o.add(i));
  }
  if (vs(o)) {
    const s = +t[t.length - 2], i = sr(o, s);
    switch (+r == 0 ? "key" : "value") {
      case "key": {
        const l = n(i);
        o.set(l, o.get(i)), l !== i && o.delete(i);
        break;
      }
      case "value": {
        o.set(i, n(o.get(i)));
        break;
      }
    }
  }
  return e;
};
function Ml(e, t, n = []) {
  if (!e)
    return;
  if (!oo(e)) {
    Er(e, (s, i) => Ml(s, t, [...n, ...ns(i)]));
    return;
  }
  const [o, r] = e;
  r && Er(r, (s, i) => {
    Ml(s, t, [...n, ...ns(i)]);
  }), t(o, n);
}
function Sw(e, t, n) {
  return Ml(t, (o, r) => {
    e = Ll(e, r, (s) => Ow(s, o, n));
  }), e;
}
function Nw(e, t) {
  function n(o, r) {
    const s = Aw(e, ns(r));
    o.map(ns).forEach((i) => {
      e = Ll(e, i, () => s);
    });
  }
  if (oo(t)) {
    const [o, r] = t;
    o.forEach((s) => {
      e = Ll(e, ns(s), () => e);
    }), r && Er(r, n);
  } else
    Er(t, n);
  return e;
}
var Tw = (e, t) => Es(e) || oo(e) || vs(e) || ys(e) || zm(e, t);
function Cw(e, t, n) {
  const o = n.get(e);
  o ? o.push(t) : n.set(e, [t]);
}
function Dw(e, t) {
  const n = {};
  let o;
  return e.forEach((r) => {
    if (r.length <= 1)
      return;
    t || (r = r.map((a) => a.map(String)).sort((a, l) => a.length - l.length));
    const [s, ...i] = r;
    s.length === 0 ? o = i.map(ja) : n[ja(s)] = i.map(ja);
  }), o ? Vl(n) ? [o] : [o, n] : Vl(n) ? void 0 : n;
}
var Jm = (e, t, n, o, r = [], s = [], i = /* @__PURE__ */ new Map()) => {
  var a;
  const l = _w(e);
  if (!l) {
    Cw(e, r, t);
    const h = i.get(e);
    if (h)
      return o ? {
        transformedValue: null
      } : h;
  }
  if (!Tw(e, n)) {
    const h = td(e, n), m = h ? {
      transformedValue: h.value,
      annotations: [h.type]
    } : {
      transformedValue: e
    };
    return l || i.set(e, m), m;
  }
  if (mi(s, e))
    return {
      transformedValue: null
    };
  const f = td(e, n), u = (a = f?.value) != null ? a : e, c = oo(u) ? [] : {}, d = {};
  Er(u, (h, m) => {
    if (m === "__proto__" || m === "constructor" || m === "prototype")
      throw new Error(`Detected property ${m}. This is a prototype pollution risk, please remove it from your object.`);
    const g = Jm(h, t, n, o, [...r, m], [...s, e], i);
    c[m] = g.transformedValue, oo(g.annotations) ? d[m] = g.annotations : Es(g.annotations) && Er(g.annotations, (E, O) => {
      d[Hm(m) + "." + O] = E;
    });
  });
  const p = Vl(d) ? {
    transformedValue: c,
    annotations: f ? [f.type] : void 0
  } : {
    transformedValue: c,
    annotations: f ? [f.type, d] : d
  };
  return l || i.set(e, p), p;
};
F();
F();
function Qm(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function nd(e) {
  return Qm(e) === "Array";
}
function xw(e) {
  if (Qm(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function Rw(e, t, n, o, r) {
  const s = {}.propertyIsEnumerable.call(o, t) ? "enumerable" : "nonenumerable";
  s === "enumerable" && (e[t] = n), r && s === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Fl(e, t = {}) {
  if (nd(e))
    return e.map((r) => Fl(r, t));
  if (!xw(e))
    return e;
  const n = Object.getOwnPropertyNames(e), o = Object.getOwnPropertySymbols(e);
  return [...n, ...o].reduce((r, s) => {
    if (nd(t.props) && !t.props.includes(s))
      return r;
    const i = e[s], a = Fl(i, t);
    return Rw(r, s, a, e, t.nonenumerable), r;
  }, {});
}
var Me = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new rw(), this.symbolRegistry = new Fm((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new aw(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = Jm(e, t, this, this.dedupe), o = {
      json: n.transformedValue
    };
    n.annotations && (o.meta = {
      ...o.meta,
      values: n.annotations
    });
    const r = Dw(t, this.dedupe);
    return r && (o.meta = {
      ...o.meta,
      referentialEqualities: r
    }), o;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let o = Fl(t);
    return n?.values && (o = Sw(o, n.values, this)), n?.referentialEqualities && (o = Nw(o, n.referentialEqualities)), o;
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
Me.defaultInstance = new Me();
Me.serialize = Me.defaultInstance.serialize.bind(Me.defaultInstance);
Me.deserialize = Me.defaultInstance.deserialize.bind(Me.defaultInstance);
Me.stringify = Me.defaultInstance.stringify.bind(Me.defaultInstance);
Me.parse = Me.defaultInstance.parse.bind(Me.defaultInstance);
Me.registerClass = Me.defaultInstance.registerClass.bind(Me.defaultInstance);
Me.registerSymbol = Me.defaultInstance.registerSymbol.bind(Me.defaultInstance);
Me.registerCustom = Me.defaultInstance.registerCustom.bind(Me.defaultInstance);
Me.allowErrorProps = Me.defaultInstance.allowErrorProps.bind(Me.defaultInstance);
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
F();
var od, rd;
(rd = (od = te).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (od.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var sd, id;
(id = (sd = te).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (sd.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var ad, ld;
(ld = (ad = te).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (ad.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var ud, cd;
(cd = (ud = te).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (ud.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var fd, dd;
(dd = (fd = te).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (fd.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var pd, hd;
(hd = (pd = te).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (pd.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
F();
F();
F();
F();
F();
F();
F();
var we = {};
let Yr;
const bs = (e) => Yr = e, Zm = we.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Bo(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var _n;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(_n || (_n = {}));
const to = typeof window < "u", md = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function kw(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Mu(e, t, n) {
  const o = new XMLHttpRequest();
  o.open("GET", e), o.responseType = "blob", o.onload = function() {
    n_(o.response, t, n);
  }, o.onerror = function() {
    console.error("could not download file");
  }, o.send();
}
function e_(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function _i(e) {
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
const gi = typeof navigator == "object" ? navigator : { userAgent: "" }, t_ = /Macintosh/.test(gi.userAgent) && /AppleWebKit/.test(gi.userAgent) && !/Safari/.test(gi.userAgent), n_ = to ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !t_ ? $w : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in gi ? Iw : (
      // Fallback to using FileReader and a popup
      Pw
    )
  )
) : () => {
};
function $w(e, t = "download", n) {
  const o = document.createElement("a");
  o.download = t, o.rel = "noopener", typeof e == "string" ? (o.href = e, o.origin !== location.origin ? e_(o.href) ? Mu(e, t, n) : (o.target = "_blank", _i(o)) : _i(o)) : (o.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(o.href);
  }, 4e4), setTimeout(function() {
    _i(o);
  }, 0));
}
function Iw(e, t = "download", n) {
  if (typeof e == "string")
    if (e_(e))
      Mu(e, t, n);
    else {
      const o = document.createElement("a");
      o.href = e, o.target = "_blank", setTimeout(function() {
        _i(o);
      });
    }
  else
    navigator.msSaveOrOpenBlob(kw(e, n), t);
}
function Pw(e, t, n, o) {
  if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof e == "string")
    return Mu(e, t, n);
  const r = e.type === "application/octet-stream", s = /constructor/i.test(String(md.HTMLElement)) || "safari" in md, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || r && s || t_) && typeof FileReader < "u") {
    const a = new FileReader();
    a.onloadend = function() {
      let l = a.result;
      if (typeof l != "string")
        throw o = null, new Error("Wrong reader.result type");
      l = i ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = l : location.assign(l), o = null;
    }, a.readAsDataURL(e);
  } else {
    const a = URL.createObjectURL(e);
    o ? o.location.assign(a) : location.href = a, o = null, setTimeout(function() {
      URL.revokeObjectURL(a);
    }, 4e4);
  }
}
function nt(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Fu(e) {
  return "_a" in e && "install" in e;
}
function o_() {
  if (!("clipboard" in navigator))
    return nt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function r_(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (nt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Vw(e) {
  if (!o_())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), nt("Global state copied to clipboard.");
    } catch (t) {
      if (r_(t))
        return;
      nt("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Lw(e) {
  if (!o_())
    try {
      s_(e, JSON.parse(await navigator.clipboard.readText())), nt("Global state pasted from clipboard.");
    } catch (t) {
      if (r_(t))
        return;
      nt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Mw(e) {
  try {
    n_(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    nt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Cn;
function Fw() {
  Cn || (Cn = document.createElement("input"), Cn.type = "file", Cn.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Cn.onchange = async () => {
        const o = Cn.files;
        if (!o)
          return t(null);
        const r = o.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, Cn.oncancel = () => t(null), Cn.onerror = n, Cn.click();
    });
  }
  return e;
}
async function Bw(e) {
  try {
    const n = await Fw()();
    if (!n)
      return;
    const { text: o, file: r } = n;
    s_(e, JSON.parse(o)), nt(`Global state imported from "${r.name}".`);
  } catch (t) {
    nt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function s_(e, t) {
  for (const n in t) {
    const o = e.state.value[n];
    o ? Object.assign(o, t[n]) : e.state.value[n] = t[n];
  }
}
function jt(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const i_ = "🍍 Pinia (root)", Ei = "_root";
function Uw(e) {
  return Fu(e) ? {
    id: Ei,
    label: i_
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Hw(e) {
  if (Fu(e)) {
    const n = Array.from(e._s.keys()), o = e._s;
    return {
      state: n.map((s) => ({
        editable: !0,
        key: s,
        value: e.state.value[s]
      })),
      getters: n.filter((s) => o.get(s)._getters).map((s) => {
        const i = o.get(s);
        return {
          editable: !1,
          key: s,
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
function jw(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: jt(e.type),
    key: jt(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Kw(e) {
  switch (e) {
    case _n.direct:
      return "mutation";
    case _n.patchFunction:
      return "$patch";
    case _n.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let ir = !0;
const vi = [], yo = "pinia:mutations", it = "pinia", { assign: Ww } = Object, Bi = (e) => "🍍 " + e;
function zw(e, t) {
  Lm({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: vi,
    app: e
  }, (n) => {
    typeof n.now != "function" && nt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: yo,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: it,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Vw(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Lw(t), n.sendInspectorTree(it), n.sendInspectorState(it);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Mw(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Bw(t), n.sendInspectorTree(it), n.sendInspectorState(it);
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
            r ? typeof r.$reset != "function" ? nt(`Cannot reset "${o}" store because it doesn't have a "$reset" method implemented.`, "warn") : (r.$reset(), nt(`Store "${o}" reset.`)) : nt(`Cannot reset "${o}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((o) => {
      const r = o.componentInstance && o.componentInstance.proxy;
      if (r && r._pStores) {
        const s = o.componentInstance.proxy._pStores;
        Object.values(s).forEach((i) => {
          o.instanceData.state.push({
            type: Bi(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: de(i.$state),
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
          }), i._getters && i._getters.length && o.instanceData.state.push({
            type: Bi(i.$id),
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
    }), n.on.getInspectorTree((o) => {
      if (o.app === e && o.inspectorId === it) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), o.rootNodes = (o.filter ? r.filter((s) => "$id" in s ? s.$id.toLowerCase().includes(o.filter.toLowerCase()) : i_.toLowerCase().includes(o.filter.toLowerCase())) : r).map(Uw);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((o) => {
      if (o.app === e && o.inspectorId === it) {
        const r = o.nodeId === Ei ? t : t._s.get(o.nodeId);
        if (!r)
          return;
        r && (o.nodeId !== Ei && (globalThis.$store = de(r)), o.state = Hw(r));
      }
    }), n.on.editInspectorState((o) => {
      if (o.app === e && o.inspectorId === it) {
        const r = o.nodeId === Ei ? t : t._s.get(o.nodeId);
        if (!r)
          return nt(`store "${o.nodeId}" not found`, "error");
        const { path: s } = o;
        Fu(r) ? s.unshift("state") : (s.length !== 1 || !r._customProperties.has(s[0]) || s[0] in r.$state) && s.unshift("$state"), ir = !1, o.set(r, s, o.state.value), ir = !0;
      }
    }), n.on.editComponentState((o) => {
      if (o.type.startsWith("🍍")) {
        const r = o.type.replace(/^🍍\s*/, ""), s = t._s.get(r);
        if (!s)
          return nt(`store "${r}" not found`, "error");
        const { path: i } = o;
        if (i[0] !== "state")
          return nt(`Invalid path for store "${r}":
${i}
Only state can be modified.`);
        i[0] = "$state", ir = !1, o.set(s, i, o.state.value), ir = !0;
      }
    });
  });
}
function qw(e, t) {
  vi.includes(Bi(t.$id)) || vi.push(Bi(t.$id)), Lm({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: vi,
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
    t.$onAction(({ after: i, onError: a, name: l, args: f }) => {
      const u = a_++;
      n.addTimelineEvent({
        layerId: yo,
        event: {
          time: o(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: jt(t.$id),
            action: jt(l),
            args: f
          },
          groupId: u
        }
      }), i((c) => {
        no = void 0, n.addTimelineEvent({
          layerId: yo,
          event: {
            time: o(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: jt(t.$id),
              action: jt(l),
              args: f,
              result: c
            },
            groupId: u
          }
        });
      }), a((c) => {
        no = void 0, n.addTimelineEvent({
          layerId: yo,
          event: {
            time: o(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: jt(t.$id),
              action: jt(l),
              args: f,
              error: c
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((i) => {
      hn(() => ve(t[i]), (a, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(it), ir && n.addTimelineEvent({
          layerId: yo,
          event: {
            time: o(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: a,
              oldValue: l
            },
            groupId: no
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: i, type: a }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(it), !ir)
        return;
      const f = {
        time: o(),
        title: Kw(a),
        data: Ww({ store: jt(t.$id) }, jw(i)),
        groupId: no
      };
      a === _n.patchFunction ? f.subtitle = "⤵️" : a === _n.patchObject ? f.subtitle = "🧩" : i && !Array.isArray(i) && (f.subtitle = i.type), i && (f.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: yo,
        event: f
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = eo((i) => {
      r(i), n.addTimelineEvent({
        layerId: yo,
        event: {
          time: o(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: jt(t.$id),
            info: jt("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(it), n.sendInspectorState(it);
    });
    const { $dispose: s } = t;
    t.$dispose = () => {
      s(), n.notifyComponentUpdate(), n.sendInspectorTree(it), n.sendInspectorState(it), n.getSettings().logStoreChanges && nt(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(it), n.sendInspectorState(it), n.getSettings().logStoreChanges && nt(`"${t.$id}" store installed 🆕`);
  });
}
let a_ = 0, no;
function _d(e, t, n) {
  const o = t.reduce((r, s) => (r[s] = de(e)[s], r), {});
  for (const r in o)
    e[r] = function() {
      const s = a_, i = n ? new Proxy(e, {
        get(...l) {
          return no = s, Reflect.get(...l);
        },
        set(...l) {
          return no = s, Reflect.set(...l);
        }
      }) : e;
      no = s;
      const a = o[r].apply(i, arguments);
      return no = void 0, a;
    };
}
function Gw({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      _d(t, Object.keys(n.actions), t._isOptionsAPI);
      const o = t._hotUpdate;
      de(t)._hotUpdate = function(r) {
        o.apply(this, arguments), _d(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    qw(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function Yw() {
  const e = Wp(!0), t = e.run(() => ue({}));
  let n = [], o = [];
  const r = eo({
    install(s) {
      bs(r), r._a = s, s.provide(Zm, r), s.config.globalProperties.$pinia = r, we.NODE_ENV !== "production" && we.NODE_ENV !== "test" && to && zw(s, r), o.forEach((i) => n.push(i)), o = [];
    },
    use(s) {
      return this._a ? n.push(s) : o.push(s), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return we.NODE_ENV !== "production" && we.NODE_ENV !== "test" && to && typeof Proxy < "u" && r.use(Gw), r;
}
function l_(e, t) {
  for (const n in t) {
    const o = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    Bo(r) && Bo(o) && !Le(o) && !Gt(o) ? e[n] = l_(r, o) : e[n] = o;
  }
  return e;
}
const u_ = () => {
};
function gd(e, t, n, o = u_) {
  e.push(t);
  const r = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), o());
  };
  return !n && zp() && DE(r), r;
}
function Xo(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Xw = (e) => e(), Ed = Symbol(), Ka = Symbol();
function Bl(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, o) => e.set(o, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const o = t[n], r = e[n];
    Bo(r) && Bo(o) && e.hasOwnProperty(n) && !Le(o) && !Gt(o) ? e[n] = Bl(r, o) : e[n] = o;
  }
  return e;
}
const Jw = we.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Qw(e) {
  return !Bo(e) || !Object.prototype.hasOwnProperty.call(e, Jw);
}
const { assign: Vt } = Object;
function vd(e) {
  return !!(Le(e) && e.effect);
}
function yd(e, t, n, o) {
  const { state: r, actions: s, getters: i } = t, a = n.state.value[e];
  let l;
  function f() {
    !a && (we.NODE_ENV === "production" || !o) && (n.state.value[e] = r ? r() : {});
    const u = we.NODE_ENV !== "production" && o ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Qt(ue(r ? r() : {}).value)
    ) : Qt(n.state.value[e]);
    return Vt(u, s, Object.keys(i || {}).reduce((c, d) => (we.NODE_ENV !== "production" && d in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${e}".`), c[d] = eo(he(() => {
      bs(n);
      const p = n._s.get(e);
      return i[d].call(p, p);
    })), c), {}));
  }
  return l = Ul(e, f, t, n, o, !0), l;
}
function Ul(e, t, n = {}, o, r, s) {
  let i;
  const a = Vt({ actions: {} }, n);
  if (we.NODE_ENV !== "production" && !o._e.active)
    throw new Error("Pinia destroyed");
  const l = { deep: !0 };
  we.NODE_ENV !== "production" && (l.onTrigger = (k) => {
    f ? p = k : f == !1 && !N._hotUpdating && (Array.isArray(p) ? p.push(k) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let f, u, c = [], d = [], p;
  const h = o.state.value[e];
  !s && !h && (we.NODE_ENV === "production" || !r) && (o.state.value[e] = {});
  const m = ue({});
  let g;
  function E(k) {
    let $;
    f = u = !1, we.NODE_ENV !== "production" && (p = []), typeof k == "function" ? (k(o.state.value[e]), $ = {
      type: _n.patchFunction,
      storeId: e,
      events: p
    }) : (Bl(o.state.value[e], k), $ = {
      type: _n.patchObject,
      payload: k,
      storeId: e,
      events: p
    });
    const D = g = Symbol();
    hr().then(() => {
      g === D && (f = !0);
    }), u = !0, Xo(c, $, o.state.value[e]);
  }
  const O = s ? function() {
    const { state: $ } = n, D = $ ? $() : {};
    this.$patch((G) => {
      Vt(G, D);
    });
  } : (
    /* istanbul ignore next */
    we.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : u_
  );
  function y() {
    i.stop(), c = [], d = [], o._s.delete(e);
  }
  const R = (k, $ = "") => {
    if (Ed in k)
      return k[Ka] = $, k;
    const D = function() {
      bs(o);
      const G = Array.from(arguments), ce = [], me = [];
      function Q(le) {
        ce.push(le);
      }
      function j(le) {
        me.push(le);
      }
      Xo(d, {
        args: G,
        name: D[Ka],
        store: N,
        after: Q,
        onError: j
      });
      let ee;
      try {
        ee = k.apply(this && this.$id === e ? this : N, G);
      } catch (le) {
        throw Xo(me, le), le;
      }
      return ee instanceof Promise ? ee.then((le) => (Xo(ce, le), le)).catch((le) => (Xo(me, le), Promise.reject(le))) : (Xo(ce, ee), ee);
    };
    return D[Ed] = !0, D[Ka] = $, D;
  }, S = /* @__PURE__ */ eo({
    actions: {},
    getters: {},
    state: [],
    hotState: m
  }), T = {
    _p: o,
    // _s: scope,
    $id: e,
    $onAction: gd.bind(null, d),
    $patch: E,
    $reset: O,
    $subscribe(k, $ = {}) {
      const D = gd(c, k, $.detached, () => G()), G = i.run(() => hn(() => o.state.value[e], (ce) => {
        ($.flush === "sync" ? u : f) && k({
          storeId: e,
          type: _n.direct,
          events: p
        }, ce);
      }, Vt({}, l, $)));
      return D;
    },
    $dispose: y
  }, N = Vo(we.NODE_ENV !== "production" || we.NODE_ENV !== "production" && we.NODE_ENV !== "test" && to ? Vt(
    {
      _hmrPayload: S,
      _customProperties: eo(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    T
    // must be added later
    // setupStore
  ) : T);
  o._s.set(e, N);
  const P = (o._a && o._a.runWithContext || Xw)(() => o._e.run(() => (i = Wp()).run(() => t({ action: R }))));
  for (const k in P) {
    const $ = P[k];
    if (Le($) && !vd($) || Gt($))
      we.NODE_ENV !== "production" && r ? m.value[k] = ii(P, k) : s || (h && Qw($) && (Le($) ? $.value = h[k] : Bl($, h[k])), o.state.value[e][k] = $), we.NODE_ENV !== "production" && S.state.push(k);
    else if (typeof $ == "function") {
      const D = we.NODE_ENV !== "production" && r ? $ : R($, k);
      P[k] = D, we.NODE_ENV !== "production" && (S.actions[k] = $), a.actions[k] = $;
    } else we.NODE_ENV !== "production" && vd($) && (S.getters[k] = s ? (
      // @ts-expect-error
      n.getters[k]
    ) : $, to && (P._getters || // @ts-expect-error: same
    (P._getters = eo([]))).push(k));
  }
  if (Vt(N, P), Vt(de(N), P), Object.defineProperty(N, "$state", {
    get: () => we.NODE_ENV !== "production" && r ? m.value : o.state.value[e],
    set: (k) => {
      if (we.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      E(($) => {
        Vt($, k);
      });
    }
  }), we.NODE_ENV !== "production" && (N._hotUpdate = eo((k) => {
    N._hotUpdating = !0, k._hmrPayload.state.forEach(($) => {
      if ($ in N.$state) {
        const D = k.$state[$], G = N.$state[$];
        typeof D == "object" && Bo(D) && Bo(G) ? l_(D, G) : k.$state[$] = G;
      }
      N[$] = ii(k.$state, $);
    }), Object.keys(N.$state).forEach(($) => {
      $ in k.$state || delete N[$];
    }), f = !1, u = !1, o.state.value[e] = ii(k._hmrPayload, "hotState"), u = !0, hr().then(() => {
      f = !0;
    });
    for (const $ in k._hmrPayload.actions) {
      const D = k[$];
      N[$] = //
      R(D, $);
    }
    for (const $ in k._hmrPayload.getters) {
      const D = k._hmrPayload.getters[$], G = s ? (
        // special handling of options api
        he(() => (bs(o), D.call(N, N)))
      ) : D;
      N[$] = //
      G;
    }
    Object.keys(N._hmrPayload.getters).forEach(($) => {
      $ in k._hmrPayload.getters || delete N[$];
    }), Object.keys(N._hmrPayload.actions).forEach(($) => {
      $ in k._hmrPayload.actions || delete N[$];
    }), N._hmrPayload = k._hmrPayload, N._getters = k._getters, N._hotUpdating = !1;
  })), we.NODE_ENV !== "production" && we.NODE_ENV !== "test" && to) {
    const k = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach(($) => {
      Object.defineProperty(N, $, Vt({ value: N[$] }, k));
    });
  }
  return o._p.forEach((k) => {
    if (we.NODE_ENV !== "production" && we.NODE_ENV !== "test" && to) {
      const $ = i.run(() => k({
        store: N,
        app: o._a,
        pinia: o,
        options: a
      }));
      Object.keys($ || {}).forEach((D) => N._customProperties.add(D)), Vt(N, $);
    } else
      Vt(N, i.run(() => k({
        store: N,
        app: o._a,
        pinia: o,
        options: a
      })));
  }), we.NODE_ENV !== "production" && N.$state && typeof N.$state == "object" && typeof N.$state.constructor == "function" && !N.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${N.$id}".`), h && s && n.hydrate && n.hydrate(N.$state, h), f = !0, u = !0, N;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bu(e, t, n) {
  let o;
  const r = typeof t == "function";
  o = r ? n : t;
  function s(i, a) {
    const l = ey();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (we.NODE_ENV === "test" && Yr && Yr._testing ? null : i) || (l ? mt(Zm, null) : null), i && bs(i), we.NODE_ENV !== "production" && !Yr)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = Yr, i._s.has(e) || (r ? Ul(e, t, o, i) : yd(e, o, i), we.NODE_ENV !== "production" && (s._pinia = i));
    const f = i._s.get(e);
    if (we.NODE_ENV !== "production" && a) {
      const u = "__hot:" + e, c = r ? Ul(u, t, o, i, !0) : yd(u, Vt({}, o), i, !0);
      a._hotUpdate(c), delete i.state.value[u], i._s.delete(u);
    }
    if (we.NODE_ENV !== "production" && to) {
      const u = An();
      if (u && u.proxy && // avoid adding stores that are just built for hot module replacement
      !a) {
        const c = u.proxy, d = "_pStores" in c ? c._pStores : c._pStores = {};
        d[e] = f;
      }
    }
    return f;
  }
  return s.$id = e, s;
}
function Uu(e) {
  const t = de(e), n = {};
  for (const o in t) {
    const r = t[o];
    r.effect ? n[o] = // ...
    he({
      get: () => e[o],
      set(s) {
        e[o] = s;
      }
    }) : (Le(r) || Gt(r)) && (n[o] = // ---
    ii(e, o));
  }
  return n;
}
function Zw() {
  return c_().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function c_() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const eO = typeof Proxy == "function", tO = "devtools-plugin:setup", nO = "plugin:settings:set";
let Jo, Hl;
function oO() {
  var e;
  return Jo !== void 0 || (typeof window < "u" && window.performance ? (Jo = !0, Hl = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Jo = !0, Hl = globalThis.perf_hooks.performance) : Jo = !1), Jo;
}
function rO() {
  return oO() ? Hl.now() : Date.now();
}
class sO {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const a = t.settings[i];
        o[i] = a.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, o);
    try {
      const i = localStorage.getItem(r), a = JSON.parse(i);
      Object.assign(s, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(r, JSON.stringify(i));
        } catch {
        }
        s = i;
      },
      now() {
        return rO();
      }
    }, n && n.on(nO, (i, a) => {
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
function iO(e, t) {
  const n = e, o = c_(), r = Zw(), s = eO && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(tO, e, t);
  else {
    const i = s ? new sO(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
var pe = {};
const kn = typeof document < "u";
function f_(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function aO(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && f_(e.default);
}
const Te = Object.assign;
function Wa(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = xt(r) ? r.map(e) : e(r);
  }
  return n;
}
const os = () => {
}, xt = Array.isArray;
function Ee(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const d_ = /#/g, lO = /&/g, uO = /\//g, cO = /=/g, fO = /\?/g, p_ = /\+/g, dO = /%5B/g, pO = /%5D/g, h_ = /%5E/g, hO = /%60/g, m_ = /%7B/g, mO = /%7C/g, __ = /%7D/g, _O = /%20/g;
function Hu(e) {
  return encodeURI("" + e).replace(mO, "|").replace(dO, "[").replace(pO, "]");
}
function gO(e) {
  return Hu(e).replace(m_, "{").replace(__, "}").replace(h_, "^");
}
function jl(e) {
  return Hu(e).replace(p_, "%2B").replace(_O, "+").replace(d_, "%23").replace(lO, "%26").replace(hO, "`").replace(m_, "{").replace(__, "}").replace(h_, "^");
}
function EO(e) {
  return jl(e).replace(cO, "%3D");
}
function vO(e) {
  return Hu(e).replace(d_, "%23").replace(fO, "%3F");
}
function yO(e) {
  return e == null ? "" : vO(e).replace(uO, "%2F");
}
function vr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    pe.NODE_ENV !== "production" && Ee(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const bO = /\/$/, wO = (e) => e.replace(bO, "");
function za(e, t, n = "/") {
  let o, r = {}, s = "", i = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return a < l && a >= 0 && (l = -1), l > -1 && (o = t.slice(0, l), s = t.slice(l + 1, a > -1 ? a : t.length), r = e(s)), a > -1 && (o = o || t.slice(0, a), i = t.slice(a, t.length)), o = SO(o ?? t, n), {
    fullPath: o + (s && "?") + s + i,
    path: o,
    query: r,
    hash: vr(i)
  };
}
function OO(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function bd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function wd(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && ro(t.matched[o], n.matched[r]) && g_(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ro(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function g_(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!AO(e[n], t[n]))
      return !1;
  return !0;
}
function AO(e, t) {
  return xt(e) ? Od(e, t) : xt(t) ? Od(t, e) : e === t;
}
function Od(e, t) {
  return xt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function SO(e, t) {
  if (e.startsWith("/"))
    return e;
  if (pe.NODE_ENV !== "production" && !t.startsWith("/"))
    return Ee(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), r = o[o.length - 1];
  (r === ".." || r === ".") && o.push("");
  let s = n.length - 1, i, a;
  for (i = 0; i < o.length; i++)
    if (a = o[i], a !== ".")
      if (a === "..")
        s > 1 && s--;
      else
        break;
  return n.slice(0, s).join("/") + "/" + o.slice(i).join("/");
}
const zn = {
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
var ws;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ws || (ws = {}));
var rs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(rs || (rs = {}));
function NO(e) {
  if (!e)
    if (kn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), wO(e);
}
const TO = /^[^#]+#/;
function CO(e, t) {
  return e.replace(TO, "#") + t;
}
function DO(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const ha = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function xO(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if (pe.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const s = document.querySelector(e.el);
        if (o && s) {
          Ee(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        Ee(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) {
      pe.NODE_ENV !== "production" && Ee(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = DO(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Ad(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Kl = /* @__PURE__ */ new Map();
function RO(e, t) {
  Kl.set(e, t);
}
function kO(e) {
  const t = Kl.get(e);
  return Kl.delete(e), t;
}
let $O = () => location.protocol + "//" + location.host;
function E_(e, t) {
  const { pathname: n, search: o, hash: r } = t, s = e.indexOf("#");
  if (s > -1) {
    let a = r.includes(e.slice(s)) ? e.slice(s).length : 1, l = r.slice(a);
    return l[0] !== "/" && (l = "/" + l), bd(l, "");
  }
  return bd(n, e) + o + r;
}
function IO(e, t, n, o) {
  let r = [], s = [], i = null;
  const a = ({ state: d }) => {
    const p = E_(e, location), h = n.value, m = t.value;
    let g = 0;
    if (d) {
      if (n.value = p, t.value = d, i && i === h) {
        i = null;
        return;
      }
      g = m ? d.position - m.position : 0;
    } else
      o(p);
    r.forEach((E) => {
      E(n.value, h, {
        delta: g,
        type: ws.pop,
        direction: g ? g > 0 ? rs.forward : rs.back : rs.unknown
      });
    });
  };
  function l() {
    i = n.value;
  }
  function f(d) {
    r.push(d);
    const p = () => {
      const h = r.indexOf(d);
      h > -1 && r.splice(h, 1);
    };
    return s.push(p), p;
  }
  function u() {
    const { history: d } = window;
    d.state && d.replaceState(Te({}, d.state, { scroll: ha() }), "");
  }
  function c() {
    for (const d of s)
      d();
    s = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: f,
    destroy: c
  };
}
function Sd(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? ha() : null
  };
}
function PO(e) {
  const { history: t, location: n } = window, o = {
    value: E_(e, n)
  }, r = { value: t.state };
  r.value || s(o.value, {
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
  function s(l, f, u) {
    const c = e.indexOf("#"), d = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + l : $O() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](f, "", d), r.value = f;
    } catch (p) {
      pe.NODE_ENV !== "production" ? Ee("Error with push/replace State", p) : console.error(p), n[u ? "replace" : "assign"](d);
    }
  }
  function i(l, f) {
    const u = Te({}, t.state, Sd(
      r.value.back,
      // keep back and forward entries but override current position
      l,
      r.value.forward,
      !0
    ), f, { position: r.value.position });
    s(l, u, !0), o.value = l;
  }
  function a(l, f) {
    const u = Te(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      r.value,
      t.state,
      {
        forward: l,
        scroll: ha()
      }
    );
    pe.NODE_ENV !== "production" && !t.state && Ee(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), s(u.current, u, !0);
    const c = Te({}, Sd(o.value, l, null), { position: u.position + 1 }, f);
    s(l, c, !1), o.value = l;
  }
  return {
    location: o,
    state: r,
    push: a,
    replace: i
  };
}
function VO(e) {
  e = NO(e);
  const t = PO(e), n = IO(e, t.state, t.location, t.replace);
  function o(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const r = Te({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: CO.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function LO(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), pe.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Ee(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), VO(e);
}
function Ui(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function v_(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Wl = Symbol(pe.NODE_ENV !== "production" ? "navigation failure" : "");
var Nd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Nd || (Nd = {}));
const MO = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${BO(t)}" via a navigation guard.`;
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
function yr(e, t) {
  return pe.NODE_ENV !== "production" ? Te(new Error(MO[e](t)), {
    type: e,
    [Wl]: !0
  }, t) : Te(new Error(), {
    type: e,
    [Wl]: !0
  }, t);
}
function Dn(e, t) {
  return e instanceof Error && Wl in e && (t == null || !!(e.type & t));
}
const FO = ["params", "query", "hash"];
function BO(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of FO)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Td = "[^/]+?", UO = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, HO = /[.+*?^${}()[\]/\\]/g;
function jO(e, t) {
  const n = Te({}, UO, t), o = [];
  let r = n.start ? "^" : "";
  const s = [];
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
        c || (r += "/"), r += d.value.replace(HO, "\\$&"), p += 40;
      else if (d.type === 1) {
        const { value: h, repeatable: m, optional: g, regexp: E } = d;
        s.push({
          name: h,
          repeatable: m,
          optional: g
        });
        const O = E || Td;
        if (O !== Td) {
          p += 10;
          try {
            new RegExp(`(${O})`);
          } catch (R) {
            throw new Error(`Invalid custom RegExp for param "${h}" (${O}): ` + R.message);
          }
        }
        let y = m ? `((?:${O})(?:/(?:${O}))*)` : `(${O})`;
        c || (y = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        g && f.length < 2 ? `(?:/${y})` : "/" + y), g && (y += "?"), r += y, p += 20, g && (p += -8), m && (p += -20), O === ".*" && (p += -50);
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
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function a(f) {
    const u = f.match(i), c = {};
    if (!u)
      return null;
    for (let d = 1; d < u.length; d++) {
      const p = u[d] || "", h = s[d - 1];
      c[h.name] = p && h.repeatable ? p.split("/") : p;
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
          const { value: h, repeatable: m, optional: g } = p, E = h in f ? f[h] : "";
          if (xt(E) && !m)
            throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
          const O = xt(E) ? E.join("/") : E;
          if (!O)
            if (g)
              d.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : c = !0);
            else
              throw new Error(`Missing required param "${h}"`);
          u += O;
        }
    }
    return u || "/";
  }
  return {
    re: i,
    score: o,
    keys: s,
    parse: a,
    stringify: l
  };
}
function KO(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function y_(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const s = KO(o[n], r[n]);
    if (s)
      return s;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (Cd(o))
      return 1;
    if (Cd(r))
      return -1;
  }
  return r.length - o.length;
}
function Cd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const WO = {
  type: 0,
  value: ""
}, zO = /[a-zA-Z0-9_]/;
function qO(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[WO]];
  if (!e.startsWith("/"))
    throw new Error(pe.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${f}": ${p}`);
  }
  let n = 0, o = n;
  const r = [];
  let s;
  function i() {
    s && r.push(s), s = [];
  }
  let a = 0, l, f = "", u = "";
  function c() {
    f && (n === 0 ? s.push({
      type: 0,
      value: f
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), s.push({
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
        l === "/" ? (f && c(), i()) : l === ":" ? (c(), n = 1) : d();
        break;
      case 4:
        d(), n = o;
        break;
      case 1:
        l === "(" ? n = 2 : zO.test(l) ? d() : (c(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
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
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), c(), i(), r;
}
function GO(e, t, n) {
  const o = jO(qO(e.path), n);
  if (pe.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      s.has(i.name) && Ee(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(i.name);
  }
  const r = Te(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function YO(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = kd({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(c) {
    return o.get(c);
  }
  function s(c, d, p) {
    const h = !p, m = xd(c);
    pe.NODE_ENV !== "production" && ZO(m, d), m.aliasOf = p && p.record;
    const g = kd(t, c), E = [m];
    if ("alias" in c) {
      const R = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const S of R)
        E.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          xd(Te({}, m, {
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
    let O, y;
    for (const R of E) {
      const { path: S } = R;
      if (d && S[0] !== "/") {
        const T = d.record.path, N = T[T.length - 1] === "/" ? "" : "/";
        R.path = d.record.path + (S && N + S);
      }
      if (pe.NODE_ENV !== "production" && R.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (O = GO(R, d, g), pe.NODE_ENV !== "production" && d && S[0] === "/" && tA(O, d), p ? (p.alias.push(O), pe.NODE_ENV !== "production" && QO(p, O)) : (y = y || O, y !== O && y.alias.push(O), h && c.name && !Rd(O) && (pe.NODE_ENV !== "production" && eA(c, d), i(c.name))), b_(O) && l(O), m.children) {
        const T = m.children;
        for (let N = 0; N < T.length; N++)
          s(T[N], O, p && p.children[N]);
      }
      p = p || O;
    }
    return y ? () => {
      i(y);
    } : os;
  }
  function i(c) {
    if (v_(c)) {
      const d = o.get(c);
      d && (o.delete(c), n.splice(n.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i));
    } else {
      const d = n.indexOf(c);
      d > -1 && (n.splice(d, 1), c.record.name && o.delete(c.record.name), c.children.forEach(i), c.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(c) {
    const d = nA(c, n);
    n.splice(d, 0, c), c.record.name && !Rd(c) && o.set(c.record.name, c);
  }
  function f(c, d) {
    let p, h = {}, m, g;
    if ("name" in c && c.name) {
      if (p = o.get(c.name), !p)
        throw yr(1, {
          location: c
        });
      if (pe.NODE_ENV !== "production") {
        const y = Object.keys(c.params || {}).filter((R) => !p.keys.find((S) => S.name === R));
        y.length && Ee(`Discarded invalid param(s) "${y.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      g = p.record.name, h = Te(
        // paramsFromLocation is a new object
        Dd(
          d.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          p.keys.filter((y) => !y.optional).concat(p.parent ? p.parent.keys.filter((y) => y.optional) : []).map((y) => y.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        c.params && Dd(c.params, p.keys.map((y) => y.name))
      ), m = p.stringify(h);
    } else if (c.path != null)
      m = c.path, pe.NODE_ENV !== "production" && !m.startsWith("/") && Ee(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), p = n.find((y) => y.re.test(m)), p && (h = p.parse(m), g = p.record.name);
    else {
      if (p = d.name ? o.get(d.name) : n.find((y) => y.re.test(d.path)), !p)
        throw yr(1, {
          location: c,
          currentLocation: d
        });
      g = p.record.name, h = Te({}, d.params, c.params), m = p.stringify(h);
    }
    const E = [];
    let O = p;
    for (; O; )
      E.unshift(O.record), O = O.parent;
    return {
      name: g,
      path: m,
      params: h,
      matched: E,
      meta: JO(E)
    };
  }
  e.forEach((c) => s(c));
  function u() {
    n.length = 0, o.clear();
  }
  return {
    addRoute: s,
    resolve: f,
    removeRoute: i,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: r
  };
}
function Dd(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function xd(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: XO(e),
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
function XO(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Rd(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function JO(e) {
  return e.reduce((t, n) => Te(t, n.meta), {});
}
function kd(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function zl(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function QO(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(zl.bind(null, n)))
      return Ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(zl.bind(null, n)))
      return Ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function ZO(e, t) {
  t && t.record.name && !e.name && !e.path && Ee(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function eA(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function tA(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(zl.bind(null, n)))
      return Ee(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function nA(e, t) {
  let n = 0, o = t.length;
  for (; n !== o; ) {
    const s = n + o >> 1;
    y_(e, t[s]) < 0 ? o = s : n = s + 1;
  }
  const r = oA(e);
  return r && (o = t.lastIndexOf(r, o - 1), pe.NODE_ENV !== "production" && o < 0 && Ee(`Finding ancestor route "${r.record.path}" failed for "${e.record.path}"`)), o;
}
function oA(e) {
  let t = e;
  for (; t = t.parent; )
    if (b_(t) && y_(e, t) === 0)
      return t;
}
function b_({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function rA(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const s = o[r].replace(p_, " "), i = s.indexOf("="), a = vr(i < 0 ? s : s.slice(0, i)), l = i < 0 ? null : vr(s.slice(i + 1));
    if (a in t) {
      let f = t[a];
      xt(f) || (f = t[a] = [f]), f.push(l);
    } else
      t[a] = l;
  }
  return t;
}
function $d(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = EO(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (xt(o) ? o.map((s) => s && jl(s)) : [o && jl(o)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function sA(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = xt(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const iA = Symbol(pe.NODE_ENV !== "production" ? "router view location matched" : ""), Id = Symbol(pe.NODE_ENV !== "production" ? "router view depth" : ""), ju = Symbol(pe.NODE_ENV !== "production" ? "router" : ""), Ku = Symbol(pe.NODE_ENV !== "production" ? "route location" : ""), ql = Symbol(pe.NODE_ENV !== "production" ? "router view location" : "");
function Ur() {
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
function Jn(e, t, n, o, r, s = (i) => i()) {
  const i = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((a, l) => {
    const f = (d) => {
      d === !1 ? l(yr(4, {
        from: n,
        to: t
      })) : d instanceof Error ? l(d) : Ui(d) ? l(yr(2, {
        from: t,
        to: d
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[r] === i && typeof d == "function" && i.push(d), a());
    }, u = s(() => e.call(o && o.instances[r], t, n, pe.NODE_ENV !== "production" ? aA(f, t, n) : f));
    let c = Promise.resolve(u);
    if (e.length < 3 && (c = c.then(f)), pe.NODE_ENV !== "production" && e.length > 2) {
      const d = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        c = c.then((p) => f._called ? p : (Ee(d), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !f._called) {
        Ee(d), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    c.catch((d) => l(d));
  });
}
function aA(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && Ee(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function qa(e, t, n, o, r = (s) => s()) {
  const s = [];
  for (const i of e) {
    pe.NODE_ENV !== "production" && !i.components && !i.children.length && Ee(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in i.components) {
      let l = i.components[a];
      if (pe.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw Ee(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          Ee(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = l;
          l = () => f;
        } else l.__asyncLoader && // warn only once per component
        !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, Ee(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (f_(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(Jn(u, n, o, i, a, r));
        } else {
          let f = l();
          pe.NODE_ENV !== "production" && !("catch" in f) && (Ee(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), s.push(() => f.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
            const c = aO(u) ? u.default : u;
            i.mods[a] = u, i.components[a] = c;
            const p = (c.__vccOpts || c)[t];
            return p && Jn(p, n, o, i, a, r)();
          }));
        }
    }
  }
  return s;
}
function Pd(e) {
  const t = mt(ju), n = mt(Ku);
  let o = !1, r = null;
  const s = he(() => {
    const u = ve(e.to);
    return pe.NODE_ENV !== "production" && (!o || u !== r) && (Ui(u) || (o ? Ee(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, r, `
- props:`, e) : Ee(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), r = u, o = !0), t.resolve(u);
  }), i = he(() => {
    const { matched: u } = s.value, { length: c } = u, d = u[c - 1], p = n.matched;
    if (!d || !p.length)
      return -1;
    const h = p.findIndex(ro.bind(null, d));
    if (h > -1)
      return h;
    const m = Vd(u[c - 2]);
    return (
      // we are dealing with nested routes
      c > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Vd(d) === m && // avoid comparing the child with its parent
      p[p.length - 1].path !== m ? p.findIndex(ro.bind(null, u[c - 2])) : h
    );
  }), a = he(() => i.value > -1 && dA(n.params, s.value.params)), l = he(() => i.value > -1 && i.value === n.matched.length - 1 && g_(n.params, s.value.params));
  function f(u = {}) {
    if (fA(u)) {
      const c = t[ve(e.replace) ? "replace" : "push"](
        ve(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(os);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  if (pe.NODE_ENV !== "production" && kn) {
    const u = An();
    if (u) {
      const c = {
        route: s.value,
        isActive: a.value,
        isExactActive: l.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(c), sa(() => {
        c.route = s.value, c.isActive = a.value, c.isExactActive = l.value, c.error = Ui(ve(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: he(() => s.value.href),
    isActive: a,
    isExactActive: l,
    navigate: f
  };
}
function lA(e) {
  return e.length === 1 ? e[0] : e;
}
const uA = /* @__PURE__ */ Re({
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
  useLink: Pd,
  setup(e, { slots: t }) {
    const n = Vo(Pd(e)), { options: o } = mt(ju), r = he(() => ({
      [Ld(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Ld(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && lA(t.default(n));
      return e.custom ? s : Nu("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: r.value
      }, s);
    };
  }
}), cA = uA;
function fA(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function dA(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r)
        return !1;
    } else if (!xt(r) || r.length !== o.length || o.some((s, i) => s !== r[i]))
      return !1;
  }
  return !0;
}
function Vd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Ld = (e, t, n) => e ?? t ?? n, pA = /* @__PURE__ */ Re({
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
    pe.NODE_ENV !== "production" && mA();
    const o = mt(ql), r = he(() => e.route || o.value), s = mt(Id, 0), i = he(() => {
      let f = ve(s);
      const { matched: u } = r.value;
      let c;
      for (; (c = u[f]) && !c.components; )
        f++;
      return f;
    }), a = he(() => r.value.matched[i.value]);
    dr(Id, he(() => i.value + 1)), dr(iA, a), dr(ql, r);
    const l = ue();
    return hn(() => [l.value, a.value, e.name], ([f, u, c], [d, p, h]) => {
      u && (u.instances[c] = f, p && p !== u && f && f === d && (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards), u.updateGuards.size || (u.updateGuards = p.updateGuards))), f && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !ro(u, p) || !d) && (u.enterCallbacks[c] || []).forEach((m) => m(f));
    }, { flush: "post" }), () => {
      const f = r.value, u = e.name, c = a.value, d = c && c.components[u];
      if (!d)
        return Md(n.default, { Component: d, route: f });
      const p = c.props[u], h = p ? p === !0 ? f.params : typeof p == "function" ? p(f) : p : null, g = Nu(d, Te({}, h, t, {
        onVnodeUnmounted: (E) => {
          E.component.isUnmounted && (c.instances[u] = null);
        },
        ref: l
      }));
      if (pe.NODE_ENV !== "production" && kn && g.ref) {
        const E = {
          depth: i.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (xt(g.ref) ? g.ref.map((y) => y.i) : [g.ref.i]).forEach((y) => {
          y.__vrv_devtools = E;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Md(n.default, { Component: g, route: f }) || g
      );
    };
  }
});
function Md(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const hA = pA;
function mA() {
  const e = An(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    Ee(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Hr(e, t) {
  const n = Te({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => NA(o, ["instances", "children", "aliasOf"]))
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
function Js(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let _A = 0;
function gA(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = _A++;
  iO({
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
        value: Hr(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: u, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const d = c.__vrv_devtools;
        u.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: w_
        });
      }
      xt(c.__vrl_devtools) && (c.__devtoolsApi = r, c.__vrl_devtools.forEach((d) => {
        let p = d.route.path, h = S_, m = "", g = 0;
        d.error ? (p = d.error, h = wA, g = OA) : d.isExactActive ? (h = A_, m = "This is exactly active") : d.isActive && (h = O_, m = "This link is active"), u.tags.push({
          label: p,
          textColor: g,
          tooltip: m,
          backgroundColor: h
        });
      }));
    }), hn(t.currentRoute, () => {
      l(), r.notifyComponentUpdate(), r.sendInspectorTree(a), r.sendInspectorState(a);
    });
    const s = "router:navigations:" + o;
    r.addTimelineLayer({
      id: s,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((u, c) => {
      r.addTimelineEvent({
        layerId: s,
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
    let i = 0;
    t.beforeEach((u, c) => {
      const d = {
        guard: Js("beforeEach"),
        from: Hr(c, "Current Location during this navigation"),
        to: Hr(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: i++
      }), r.addTimelineEvent({
        layerId: s,
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
        guard: Js("afterEach")
      };
      d ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, p.status = Js("❌")) : p.status = Js("✅"), p.from = Hr(c, "Current Location during this navigation"), p.to = Hr(u, "Target location"), r.addTimelineEvent({
        layerId: s,
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
      c.forEach(C_), u.filter && (c = c.filter((d) => (
        // save matches state based on the payload
        Gl(d, u.filter.toLowerCase())
      ))), c.forEach((d) => T_(d, t.currentRoute.value)), u.rootNodes = c.map(N_);
    }
    let f;
    r.on.getInspectorTree((u) => {
      f = u, u.app === e && u.inspectorId === a && l();
    }), r.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === a) {
        const d = n.getRoutes().find((p) => p.record.__vd_id === u.nodeId);
        d && (u.state = {
          options: vA(d)
        });
      }
    }), r.sendInspectorTree(a), r.sendInspectorState(a);
  });
}
function EA(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function vA(e) {
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
        display: e.keys.map((o) => `${o.name}${EA(o)}`).join(" "),
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
const w_ = 15485081, O_ = 2450411, A_ = 8702998, yA = 2282478, S_ = 16486972, bA = 6710886, wA = 16704226, OA = 12131356;
function N_(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: yA
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: S_
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: w_
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: A_
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: O_
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: bA
  });
  let o = n.__vd_id;
  return o == null && (o = String(AA++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(N_)
  };
}
let AA = 0;
const SA = /^\/(.*)\/([a-z]*)$/;
function T_(e, t) {
  const n = t.matched.length && ro(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => ro(o, e.record))), e.children.forEach((o) => T_(o, t));
}
function C_(e) {
  e.__vd_match = !1, e.children.forEach(C_);
}
function Gl(e, t) {
  const n = String(e.re).match(SA);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => Gl(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), s = vr(r);
  return !t.startsWith("/") && (s.includes(t) || r.includes(t)) || s.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => Gl(i, t));
}
function NA(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function TA(e) {
  const t = YO(e.routes, e), n = e.parseQuery || rA, o = e.stringifyQuery || $d, r = e.history;
  if (pe.NODE_ENV !== "production" && !r)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const s = Ur(), i = Ur(), a = Ur(), l = ch(zn);
  let f = zn;
  kn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = Wa.bind(null, (x) => "" + x), c = Wa.bind(null, yO), d = (
    // @ts-expect-error: intentionally avoid the type check
    Wa.bind(null, vr)
  );
  function p(x, Y) {
    let J, ne;
    return v_(x) ? (J = t.getRecordMatcher(x), pe.NODE_ENV !== "production" && !J && Ee(`Parent route "${String(x)}" not found when adding child route`, Y), ne = Y) : ne = x, t.addRoute(ne, J);
  }
  function h(x) {
    const Y = t.getRecordMatcher(x);
    Y ? t.removeRoute(Y) : pe.NODE_ENV !== "production" && Ee(`Cannot remove non-existent route "${String(x)}"`);
  }
  function m() {
    return t.getRoutes().map((x) => x.record);
  }
  function g(x) {
    return !!t.getRecordMatcher(x);
  }
  function E(x, Y) {
    if (Y = Te({}, Y || l.value), typeof x == "string") {
      const v = za(n, x, Y.path), A = t.resolve({ path: v.path }, Y), L = r.createHref(v.fullPath);
      return pe.NODE_ENV !== "production" && (L.startsWith("//") ? Ee(`Location "${x}" resolved to "${L}". A resolved location cannot start with multiple slashes.`) : A.matched.length || Ee(`No match found for location with path "${x}"`)), Te(v, A, {
        params: d(A.params),
        hash: vr(v.hash),
        redirectedFrom: void 0,
        href: L
      });
    }
    if (pe.NODE_ENV !== "production" && !Ui(x))
      return Ee(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, x), E({});
    let J;
    if (x.path != null)
      pe.NODE_ENV !== "production" && "params" in x && !("name" in x) && // @ts-expect-error: the type is never
      Object.keys(x.params).length && Ee(`Path "${x.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), J = Te({}, x, {
        path: za(n, x.path, Y.path).path
      });
    else {
      const v = Te({}, x.params);
      for (const A in v)
        v[A] == null && delete v[A];
      J = Te({}, x, {
        params: c(v)
      }), Y.params = c(Y.params);
    }
    const ne = t.resolve(J, Y), ge = x.hash || "";
    pe.NODE_ENV !== "production" && ge && !ge.startsWith("#") && Ee(`A \`hash\` should always start with the character "#". Replace "${ge}" with "#${ge}".`), ne.params = u(d(ne.params));
    const Ue = OO(o, Te({}, x, {
      hash: gO(ge),
      path: ne.path
    })), _ = r.createHref(Ue);
    return pe.NODE_ENV !== "production" && (_.startsWith("//") ? Ee(`Location "${x}" resolved to "${_}". A resolved location cannot start with multiple slashes.`) : ne.matched.length || Ee(`No match found for location with path "${x.path != null ? x.path : x}"`)), Te({
      fullPath: Ue,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: ge,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === $d ? sA(x.query) : x.query || {}
      )
    }, ne, {
      redirectedFrom: void 0,
      href: _
    });
  }
  function O(x) {
    return typeof x == "string" ? za(n, x, l.value.path) : Te({}, x);
  }
  function y(x, Y) {
    if (f !== x)
      return yr(8, {
        from: Y,
        to: x
      });
  }
  function R(x) {
    return N(x);
  }
  function S(x) {
    return R(Te(O(x), { replace: !0 }));
  }
  function T(x) {
    const Y = x.matched[x.matched.length - 1];
    if (Y && Y.redirect) {
      const { redirect: J } = Y;
      let ne = typeof J == "function" ? J(x) : J;
      if (typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = O(ne) : (
        // force empty params
        { path: ne }
      ), ne.params = {}), pe.NODE_ENV !== "production" && ne.path == null && !("name" in ne))
        throw Ee(`Invalid redirect found:
${JSON.stringify(ne, null, 2)}
 when navigating to "${x.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Te({
        query: x.query,
        hash: x.hash,
        // avoid transferring params if the redirect has a path
        params: ne.path != null ? {} : x.params
      }, ne);
    }
  }
  function N(x, Y) {
    const J = f = E(x), ne = l.value, ge = x.state, Ue = x.force, _ = x.replace === !0, v = T(J);
    if (v)
      return N(
        Te(O(v), {
          state: typeof v == "object" ? Te({}, ge, v.state) : ge,
          force: Ue,
          replace: _
        }),
        // keep original redirectedFrom if it exists
        Y || J
      );
    const A = J;
    A.redirectedFrom = Y;
    let L;
    return !Ue && wd(o, ne, J) && (L = yr(16, { to: A, from: ne }), ze(
      ne,
      ne,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (L ? Promise.resolve(L) : k(A, ne)).catch((I) => Dn(I) ? (
      // navigation redirects still mark the router as ready
      Dn(
        I,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? I : We(I)
    ) : (
      // reject any unknown error
      ee(I, A, ne)
    )).then((I) => {
      if (I) {
        if (Dn(
          I,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return pe.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          wd(o, E(I.to), A) && // and we have done it a couple of times
          Y && // @ts-expect-error: added only in dev
          (Y._count = Y._count ? (
            // @ts-expect-error
            Y._count + 1
          ) : 1) > 30 ? (Ee(`Detected a possibly infinite redirection in a navigation guard when going from "${ne.fullPath}" to "${A.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : N(
            // keep options
            Te({
              // preserve an existing replacement but allow the redirect to override it
              replace: _
            }, O(I.to), {
              state: typeof I.to == "object" ? Te({}, ge, I.to.state) : ge,
              force: Ue
            }),
            // preserve the original redirectedFrom if any
            Y || A
          );
      } else
        I = D(A, ne, !0, _, ge);
      return $(A, ne, I), I;
    });
  }
  function V(x, Y) {
    const J = y(x, Y);
    return J ? Promise.reject(J) : Promise.resolve();
  }
  function P(x) {
    const Y = tt.values().next().value;
    return Y && typeof Y.runWithContext == "function" ? Y.runWithContext(x) : x();
  }
  function k(x, Y) {
    let J;
    const [ne, ge, Ue] = CA(x, Y);
    J = qa(ne.reverse(), "beforeRouteLeave", x, Y);
    for (const v of ne)
      v.leaveGuards.forEach((A) => {
        J.push(Jn(A, x, Y));
      });
    const _ = V.bind(null, x, Y);
    return J.push(_), Et(J).then(() => {
      J = [];
      for (const v of s.list())
        J.push(Jn(v, x, Y));
      return J.push(_), Et(J);
    }).then(() => {
      J = qa(ge, "beforeRouteUpdate", x, Y);
      for (const v of ge)
        v.updateGuards.forEach((A) => {
          J.push(Jn(A, x, Y));
        });
      return J.push(_), Et(J);
    }).then(() => {
      J = [];
      for (const v of Ue)
        if (v.beforeEnter)
          if (xt(v.beforeEnter))
            for (const A of v.beforeEnter)
              J.push(Jn(A, x, Y));
          else
            J.push(Jn(v.beforeEnter, x, Y));
      return J.push(_), Et(J);
    }).then(() => (x.matched.forEach((v) => v.enterCallbacks = {}), J = qa(Ue, "beforeRouteEnter", x, Y, P), J.push(_), Et(J))).then(() => {
      J = [];
      for (const v of i.list())
        J.push(Jn(v, x, Y));
      return J.push(_), Et(J);
    }).catch((v) => Dn(
      v,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? v : Promise.reject(v));
  }
  function $(x, Y, J) {
    a.list().forEach((ne) => P(() => ne(x, Y, J)));
  }
  function D(x, Y, J, ne, ge) {
    const Ue = y(x, Y);
    if (Ue)
      return Ue;
    const _ = Y === zn, v = kn ? history.state : {};
    J && (ne || _ ? r.replace(x.fullPath, Te({
      scroll: _ && v && v.scroll
    }, ge)) : r.push(x.fullPath, ge)), l.value = x, ze(x, Y, J, _), We();
  }
  let G;
  function ce() {
    G || (G = r.listen((x, Y, J) => {
      if (!ot.listening)
        return;
      const ne = E(x), ge = T(ne);
      if (ge) {
        N(Te(ge, { replace: !0, force: !0 }), ne).catch(os);
        return;
      }
      f = ne;
      const Ue = l.value;
      kn && RO(Ad(Ue.fullPath, J.delta), ha()), k(ne, Ue).catch((_) => Dn(
        _,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? _ : Dn(
        _,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (N(
        Te(O(_.to), {
          force: !0
        }),
        ne
        // avoid an uncaught rejection, let push call triggerError
      ).then((v) => {
        Dn(
          v,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !J.delta && J.type === ws.pop && r.go(-1, !1);
      }).catch(os), Promise.reject()) : (J.delta && r.go(-J.delta, !1), ee(_, ne, Ue))).then((_) => {
        _ = _ || D(
          // after navigation, all matched components are resolved
          ne,
          Ue,
          !1
        ), _ && (J.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Dn(
          _,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? r.go(-J.delta, !1) : J.type === ws.pop && Dn(
          _,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), $(ne, Ue, _);
      }).catch(os);
    }));
  }
  let me = Ur(), Q = Ur(), j;
  function ee(x, Y, J) {
    We(x);
    const ne = Q.list();
    return ne.length ? ne.forEach((ge) => ge(x, Y, J)) : (pe.NODE_ENV !== "production" && Ee("uncaught error during route navigation:"), console.error(x)), Promise.reject(x);
  }
  function le() {
    return j && l.value !== zn ? Promise.resolve() : new Promise((x, Y) => {
      me.add([x, Y]);
    });
  }
  function We(x) {
    return j || (j = !x, ce(), me.list().forEach(([Y, J]) => x ? J(x) : Y()), me.reset()), x;
  }
  function ze(x, Y, J, ne) {
    const { scrollBehavior: ge } = e;
    if (!kn || !ge)
      return Promise.resolve();
    const Ue = !J && kO(Ad(x.fullPath, 0)) || (ne || !J) && history.state && history.state.scroll || null;
    return hr().then(() => ge(x, Y, Ue)).then((_) => _ && xO(_)).catch((_) => ee(_, x, Y));
  }
  const Pe = (x) => r.go(x);
  let Be;
  const tt = /* @__PURE__ */ new Set(), ot = {
    currentRoute: l,
    listening: !0,
    addRoute: p,
    removeRoute: h,
    clearRoutes: t.clearRoutes,
    hasRoute: g,
    getRoutes: m,
    resolve: E,
    options: e,
    push: R,
    replace: S,
    go: Pe,
    back: () => Pe(-1),
    forward: () => Pe(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: a.add,
    onError: Q.add,
    isReady: le,
    install(x) {
      const Y = this;
      x.component("RouterLink", cA), x.component("RouterView", hA), x.config.globalProperties.$router = Y, Object.defineProperty(x.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ve(l)
      }), kn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Be && l.value === zn && (Be = !0, R(r.location).catch((ge) => {
        pe.NODE_ENV !== "production" && Ee("Unexpected error when starting the router:", ge);
      }));
      const J = {};
      for (const ge in zn)
        Object.defineProperty(J, ge, {
          get: () => l.value[ge],
          enumerable: !0
        });
      x.provide(ju, Y), x.provide(Ku, uh(J)), x.provide(ql, l);
      const ne = x.unmount;
      tt.add(x), x.unmount = function() {
        tt.delete(x), tt.size < 1 && (f = zn, G && G(), G = null, l.value = zn, Be = !1, j = !1), ne();
      }, pe.NODE_ENV !== "production" && kn && gA(x, Y, t);
    }
  };
  function Et(x) {
    return x.reduce((Y, J) => Y.then(() => P(J)), Promise.resolve());
  }
  return ot;
}
function CA(e, t) {
  const n = [], o = [], r = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => ro(f, a)) ? o.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((f) => ro(f, l)) || r.push(l));
  }
  return [n, o, r];
}
function DA(e) {
  return mt(Ku);
}
const Ps = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, xA = {}, RA = { class: "d-flex gap-2" };
function kA(e, t) {
  const n = en("router-link");
  return q(), Z("div", RA, [
    Ae(n, { to: "/" }, {
      default: Ot(() => t[0] || (t[0] = [
        et("Home")
      ])),
      _: 1,
      __: [0]
    }),
    Ae(n, { to: "/setup" }, {
      default: Ot(() => t[1] || (t[1] = [
        et("Setup")
      ])),
      _: 1,
      __: [1]
    }),
    Ae(n, { to: "/monitor" }, {
      default: Ot(() => t[2] || (t[2] = [
        et("Monitor")
      ])),
      _: 1,
      __: [2]
    })
  ]);
}
const $A = /* @__PURE__ */ Ps(xA, [["render", kA]]), IA = /* @__PURE__ */ Re({
  __name: "MainLayout",
  setup(e) {
    return (t, n) => {
      const o = en("router-view");
      return q(), Z("div", null, [
        b("main", null, [
          Ae($A),
          Ae(o)
        ])
      ]);
    };
  }
}), PA = /* @__PURE__ */ Ps(IA, [["__scopeId", "data-v-a42a7003"]]), VA = {};
function LA(e, t) {
  return q(), Z("div", null, " home ");
}
const MA = /* @__PURE__ */ Ps(VA, [["render", LA]]);
function D_(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: FA } = Object.prototype, { getPrototypeOf: Wu } = Object, { iterator: ma, toStringTag: x_ } = Symbol, _a = /* @__PURE__ */ ((e) => (t) => {
  const n = FA.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), tn = (e) => (e = e.toLowerCase(), (t) => _a(t) === e), ga = (e) => (t) => typeof t === e, { isArray: Rr } = Array, Os = ga("undefined");
function BA(e) {
  return e !== null && !Os(e) && e.constructor !== null && !Os(e.constructor) && St(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const R_ = tn("ArrayBuffer");
function UA(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && R_(e.buffer), t;
}
const HA = ga("string"), St = ga("function"), k_ = ga("number"), Ea = (e) => e !== null && typeof e == "object", jA = (e) => e === !0 || e === !1, yi = (e) => {
  if (_a(e) !== "object")
    return !1;
  const t = Wu(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(x_ in e) && !(ma in e);
}, KA = tn("Date"), WA = tn("File"), zA = tn("Blob"), qA = tn("FileList"), GA = (e) => Ea(e) && St(e.pipe), YA = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || St(e.append) && ((t = _a(e)) === "formdata" || // detect form-data instance
  t === "object" && St(e.toString) && e.toString() === "[object FormData]"));
}, XA = tn("URLSearchParams"), [JA, QA, ZA, eS] = ["ReadableStream", "Request", "Response", "Headers"].map(tn), tS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Vs(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, r;
  if (typeof e != "object" && (e = [e]), Rr(e))
    for (o = 0, r = e.length; o < r; o++)
      t.call(null, e[o], o, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (o = 0; o < i; o++)
      a = s[o], t.call(null, e[a], a, e);
  }
}
function $_(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let o = n.length, r;
  for (; o-- > 0; )
    if (r = n[o], t === r.toLowerCase())
      return r;
  return null;
}
const Ao = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, I_ = (e) => !Os(e) && e !== Ao;
function Yl() {
  const { caseless: e } = I_(this) && this || {}, t = {}, n = (o, r) => {
    const s = e && $_(t, r) || r;
    yi(t[s]) && yi(o) ? t[s] = Yl(t[s], o) : yi(o) ? t[s] = Yl({}, o) : Rr(o) ? t[s] = o.slice() : t[s] = o;
  };
  for (let o = 0, r = arguments.length; o < r; o++)
    arguments[o] && Vs(arguments[o], n);
  return t;
}
const nS = (e, t, n, { allOwnKeys: o } = {}) => (Vs(t, (r, s) => {
  n && St(r) ? e[s] = D_(r, n) : e[s] = r;
}, { allOwnKeys: o }), e), oS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), rS = (e, t, n, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, sS = (e, t, n, o) => {
  let r, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0; )
      i = r[s], (!o || o(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Wu(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, iS = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const o = e.indexOf(t, n);
  return o !== -1 && o === n;
}, aS = (e) => {
  if (!e) return null;
  if (Rr(e)) return e;
  let t = e.length;
  if (!k_(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, lS = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Wu(Uint8Array)), uS = (e, t) => {
  const o = (e && e[ma]).call(e);
  let r;
  for (; (r = o.next()) && !r.done; ) {
    const s = r.value;
    t.call(e, s[0], s[1]);
  }
}, cS = (e, t) => {
  let n;
  const o = [];
  for (; (n = e.exec(t)) !== null; )
    o.push(n);
  return o;
}, fS = tn("HTMLFormElement"), dS = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, o, r) {
    return o.toUpperCase() + r;
  }
), Fd = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), pS = tn("RegExp"), P_ = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), o = {};
  Vs(n, (r, s) => {
    let i;
    (i = t(r, s, e)) !== !1 && (o[s] = i || r);
  }), Object.defineProperties(e, o);
}, hS = (e) => {
  P_(e, (t, n) => {
    if (St(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const o = e[n];
    if (St(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, mS = (e, t) => {
  const n = {}, o = (r) => {
    r.forEach((s) => {
      n[s] = !0;
    });
  };
  return Rr(e) ? o(e) : o(String(e).split(t)), n;
}, _S = () => {
}, gS = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function ES(e) {
  return !!(e && St(e.append) && e[x_] === "FormData" && e[ma]);
}
const vS = (e) => {
  const t = new Array(10), n = (o, r) => {
    if (Ea(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[r] = o;
        const s = Rr(o) ? [] : {};
        return Vs(o, (i, a) => {
          const l = n(i, r + 1);
          !Os(l) && (s[a] = l);
        }), t[r] = void 0, s;
      }
    }
    return o;
  };
  return n(e, 0);
}, yS = tn("AsyncFunction"), bS = (e) => e && (Ea(e) || St(e)) && St(e.then) && St(e.catch), V_ = ((e, t) => e ? setImmediate : t ? ((n, o) => (Ao.addEventListener("message", ({ source: r, data: s }) => {
  r === Ao && s === n && o.length && o.shift()();
}, !1), (r) => {
  o.push(r), Ao.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  St(Ao.postMessage)
), wS = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ao) : typeof process < "u" && process.nextTick || V_, OS = (e) => e != null && St(e[ma]), C = {
  isArray: Rr,
  isArrayBuffer: R_,
  isBuffer: BA,
  isFormData: YA,
  isArrayBufferView: UA,
  isString: HA,
  isNumber: k_,
  isBoolean: jA,
  isObject: Ea,
  isPlainObject: yi,
  isReadableStream: JA,
  isRequest: QA,
  isResponse: ZA,
  isHeaders: eS,
  isUndefined: Os,
  isDate: KA,
  isFile: WA,
  isBlob: zA,
  isRegExp: pS,
  isFunction: St,
  isStream: GA,
  isURLSearchParams: XA,
  isTypedArray: lS,
  isFileList: qA,
  forEach: Vs,
  merge: Yl,
  extend: nS,
  trim: tS,
  stripBOM: oS,
  inherits: rS,
  toFlatObject: sS,
  kindOf: _a,
  kindOfTest: tn,
  endsWith: iS,
  toArray: aS,
  forEachEntry: uS,
  matchAll: cS,
  isHTMLForm: fS,
  hasOwnProperty: Fd,
  hasOwnProp: Fd,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: P_,
  freezeMethods: hS,
  toObjectSet: mS,
  toCamelCase: dS,
  noop: _S,
  toFiniteNumber: gS,
  findKey: $_,
  global: Ao,
  isContextDefined: I_,
  isSpecCompliantForm: ES,
  toJSONObject: vS,
  isAsyncFn: yS,
  isThenable: bS,
  setImmediate: V_,
  asap: wS,
  isIterable: OS
};
function _e(e, t, n, o, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), o && (this.request = o), r && (this.response = r, this.status = r.status ? r.status : null);
}
C.inherits(_e, Error, {
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
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const L_ = _e.prototype, M_ = {};
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
  M_[e] = { value: e };
});
Object.defineProperties(_e, M_);
Object.defineProperty(L_, "isAxiosError", { value: !0 });
_e.from = (e, t, n, o, r, s) => {
  const i = Object.create(L_);
  return C.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), _e.call(i, e.message, t, n, o, r), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const AS = null;
function Xl(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function F_(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Bd(e, t, n) {
  return e ? e.concat(t).map(function(r, s) {
    return r = F_(r), !n && s ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function SS(e) {
  return C.isArray(e) && !e.some(Xl);
}
const NS = C.toFlatObject(C, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function va(e, t, n) {
  if (!C.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = C.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, g) {
    return !C.isUndefined(g[m]);
  });
  const o = n.metaTokens, r = n.visitor || u, s = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(t);
  if (!C.isFunction(r))
    throw new TypeError("visitor must be a function");
  function f(h) {
    if (h === null) return "";
    if (C.isDate(h))
      return h.toISOString();
    if (C.isBoolean(h))
      return h.toString();
    if (!l && C.isBlob(h))
      throw new _e("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(h) || C.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, m, g) {
    let E = h;
    if (h && !g && typeof h == "object") {
      if (C.endsWith(m, "{}"))
        m = o ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (C.isArray(h) && SS(h) || (C.isFileList(h) || C.endsWith(m, "[]")) && (E = C.toArray(h)))
        return m = F_(m), E.forEach(function(y, R) {
          !(C.isUndefined(y) || y === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Bd([m], R, s) : i === null ? m : m + "[]",
            f(y)
          );
        }), !1;
    }
    return Xl(h) ? !0 : (t.append(Bd(g, m, s), f(h)), !1);
  }
  const c = [], d = Object.assign(NS, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: Xl
  });
  function p(h, m) {
    if (!C.isUndefined(h)) {
      if (c.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      c.push(h), C.forEach(h, function(E, O) {
        (!(C.isUndefined(E) || E === null) && r.call(
          t,
          E,
          C.isString(O) ? O.trim() : O,
          m,
          d
        )) === !0 && p(E, m ? m.concat(O) : [O]);
      }), c.pop();
    }
  }
  if (!C.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Ud(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
    return t[o];
  });
}
function zu(e, t) {
  this._pairs = [], e && va(e, this, t);
}
const B_ = zu.prototype;
B_.append = function(t, n) {
  this._pairs.push([t, n]);
};
B_.toString = function(t) {
  const n = t ? function(o) {
    return t.call(this, o, Ud);
  } : Ud;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function TS(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function U_(e, t, n) {
  if (!t)
    return e;
  const o = n && n.encode || TS;
  C.isFunction(n) && (n = {
    serialize: n
  });
  const r = n && n.serialize;
  let s;
  if (r ? s = r(t, n) : s = C.isURLSearchParams(t) ? t.toString() : new zu(t, n).toString(o), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Hd {
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
  use(t, n, o) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
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
    C.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const H_ = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, CS = typeof URLSearchParams < "u" ? URLSearchParams : zu, DS = typeof FormData < "u" ? FormData : null, xS = typeof Blob < "u" ? Blob : null, RS = {
  isBrowser: !0,
  classes: {
    URLSearchParams: CS,
    FormData: DS,
    Blob: xS
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, qu = typeof window < "u" && typeof document < "u", Jl = typeof navigator == "object" && navigator || void 0, kS = qu && (!Jl || ["ReactNative", "NativeScript", "NS"].indexOf(Jl.product) < 0), $S = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", IS = qu && window.location.href || "http://localhost", PS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: qu,
  hasStandardBrowserEnv: kS,
  hasStandardBrowserWebWorkerEnv: $S,
  navigator: Jl,
  origin: IS
}, Symbol.toStringTag, { value: "Module" })), at = {
  ...PS,
  ...RS
};
function VS(e, t) {
  return va(e, new at.classes.URLSearchParams(), Object.assign({
    visitor: function(n, o, r, s) {
      return at.isNode && C.isBuffer(n) ? (this.append(o, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function LS(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function MS(e) {
  const t = {}, n = Object.keys(e);
  let o;
  const r = n.length;
  let s;
  for (o = 0; o < r; o++)
    s = n[o], t[s] = e[s];
  return t;
}
function j_(e) {
  function t(n, o, r, s) {
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = s >= n.length;
    return i = !i && C.isArray(r) ? r.length : i, l ? (C.hasOwnProp(r, i) ? r[i] = [r[i], o] : r[i] = o, !a) : ((!r[i] || !C.isObject(r[i])) && (r[i] = []), t(n, o, r[i], s) && C.isArray(r[i]) && (r[i] = MS(r[i])), !a);
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return C.forEachEntry(e, (o, r) => {
      t(LS(o), r, n, 0);
    }), n;
  }
  return null;
}
function FS(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (n || JSON.stringify)(e);
}
const Ls = {
  transitional: H_,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const o = n.getContentType() || "", r = o.indexOf("application/json") > -1, s = C.isObject(t);
    if (s && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t))
      return r ? JSON.stringify(j_(t)) : t;
    if (C.isArrayBuffer(t) || C.isBuffer(t) || C.isStream(t) || C.isFile(t) || C.isBlob(t) || C.isReadableStream(t))
      return t;
    if (C.isArrayBufferView(t))
      return t.buffer;
    if (C.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return VS(t, this.formSerializer).toString();
      if ((a = C.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return va(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || r ? (n.setContentType("application/json", !1), FS(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ls.transitional, o = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (C.isResponse(t) || C.isReadableStream(t))
      return t;
    if (t && C.isString(t) && (o && !this.responseType || r)) {
      const i = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? _e.from(a, _e.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: at.classes.FormData,
    Blob: at.classes.Blob
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
C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ls.headers[e] = {};
});
const BS = C.toObjectSet([
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
]), US = (e) => {
  const t = {};
  let n, o, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), n = i.substring(0, r).trim().toLowerCase(), o = i.substring(r + 1).trim(), !(!n || t[n] && BS[n]) && (n === "set-cookie" ? t[n] ? t[n].push(o) : t[n] = [o] : t[n] = t[n] ? t[n] + ", " + o : o);
  }), t;
}, jd = Symbol("internals");
function jr(e) {
  return e && String(e).trim().toLowerCase();
}
function bi(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(bi) : String(e);
}
function HS(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = n.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const jS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ga(e, t, n, o, r) {
  if (C.isFunction(o))
    return o.call(this, t, n);
  if (r && (t = n), !!C.isString(t)) {
    if (C.isString(o))
      return t.indexOf(o) !== -1;
    if (C.isRegExp(o))
      return o.test(t);
  }
}
function KS(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, o) => n.toUpperCase() + o);
}
function WS(e, t) {
  const n = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + n, {
      value: function(r, s, i) {
        return this[o].call(this, t, r, s, i);
      },
      configurable: !0
    });
  });
}
let Nt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, o) {
    const r = this;
    function s(a, l, f) {
      const u = jr(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const c = C.findKey(r, u);
      (!c || r[c] === void 0 || f === !0 || f === void 0 && r[c] !== !1) && (r[c || l] = bi(a));
    }
    const i = (a, l) => C.forEach(a, (f, u) => s(f, u, l));
    if (C.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (C.isString(t) && (t = t.trim()) && !jS(t))
      i(US(t), n);
    else if (C.isObject(t) && C.isIterable(t)) {
      let a = {}, l, f;
      for (const u of t) {
        if (!C.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[f = u[0]] = (l = a[f]) ? C.isArray(l) ? [...l, u[1]] : [l, u[1]] : u[1];
      }
      i(a, n);
    } else
      t != null && s(n, t, o);
    return this;
  }
  get(t, n) {
    if (t = jr(t), t) {
      const o = C.findKey(this, t);
      if (o) {
        const r = this[o];
        if (!n)
          return r;
        if (n === !0)
          return HS(r);
        if (C.isFunction(n))
          return n.call(this, r, o);
        if (C.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = jr(t), t) {
      const o = C.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!n || Ga(this, this[o], o, n)));
    }
    return !1;
  }
  delete(t, n) {
    const o = this;
    let r = !1;
    function s(i) {
      if (i = jr(i), i) {
        const a = C.findKey(o, i);
        a && (!n || Ga(o, o[a], a, n)) && (delete o[a], r = !0);
      }
    }
    return C.isArray(t) ? t.forEach(s) : s(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let o = n.length, r = !1;
    for (; o--; ) {
      const s = n[o];
      (!t || Ga(this, this[s], s, t, !0)) && (delete this[s], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, o = {};
    return C.forEach(this, (r, s) => {
      const i = C.findKey(o, s);
      if (i) {
        n[i] = bi(r), delete n[s];
        return;
      }
      const a = t ? KS(s) : String(s).trim();
      a !== s && delete n[s], n[a] = bi(r), o[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return C.forEach(this, (o, r) => {
      o != null && o !== !1 && (n[r] = t && C.isArray(o) ? o.join(", ") : o);
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
    const o = new this(t);
    return n.forEach((r) => o.set(r)), o;
  }
  static accessor(t) {
    const o = (this[jd] = this[jd] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function s(i) {
      const a = jr(i);
      o[a] || (WS(r, i), o[a] = !0);
    }
    return C.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
Nt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(Nt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[n] = o;
    }
  };
});
C.freezeMethods(Nt);
function Ya(e, t) {
  const n = this || Ls, o = t || n, r = Nt.from(o.headers);
  let s = o.data;
  return C.forEach(e, function(a) {
    s = a.call(n, s, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), s;
}
function K_(e) {
  return !!(e && e.__CANCEL__);
}
function kr(e, t, n) {
  _e.call(this, e ?? "canceled", _e.ERR_CANCELED, t, n), this.name = "CanceledError";
}
C.inherits(kr, _e, {
  __CANCEL__: !0
});
function W_(e, t, n) {
  const o = n.config.validateStatus;
  !n.status || !o || o(n.status) ? e(n) : t(new _e(
    "Request failed with status code " + n.status,
    [_e.ERR_BAD_REQUEST, _e.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function zS(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function qS(e, t) {
  e = e || 10;
  const n = new Array(e), o = new Array(e);
  let r = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const f = Date.now(), u = o[s];
    i || (i = f), n[r] = l, o[r] = f;
    let c = s, d = 0;
    for (; c !== r; )
      d += n[c++], c = c % e;
    if (r = (r + 1) % e, r === s && (s = (s + 1) % e), f - i < t)
      return;
    const p = u && f - u;
    return p ? Math.round(d * 1e3 / p) : void 0;
  };
}
function GS(e, t) {
  let n = 0, o = 1e3 / t, r, s;
  const i = (f, u = Date.now()) => {
    n = u, r = null, s && (clearTimeout(s), s = null), e.apply(null, f);
  };
  return [(...f) => {
    const u = Date.now(), c = u - n;
    c >= o ? i(f, u) : (r = f, s || (s = setTimeout(() => {
      s = null, i(r);
    }, o - c)));
  }, () => r && i(r)];
}
const Hi = (e, t, n = 3) => {
  let o = 0;
  const r = qS(50, 250);
  return GS((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, l = i - o, f = r(l), u = i <= a;
    o = i;
    const c = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: f || void 0,
      estimated: f && a && u ? (a - i) / f : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(c);
  }, n);
}, Kd = (e, t) => {
  const n = e != null;
  return [(o) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: o
  }), t[1]];
}, Wd = (e) => (...t) => C.asap(() => e(...t)), YS = at.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, at.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(at.origin),
  at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
) : () => !0, XS = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, o, r, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      C.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), C.isString(o) && i.push("path=" + o), C.isString(r) && i.push("domain=" + r), s === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function JS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function QS(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function z_(e, t, n) {
  let o = !JS(t);
  return e && (o || n == !1) ? QS(e, t) : t;
}
const zd = (e) => e instanceof Nt ? { ...e } : e;
function Uo(e, t) {
  t = t || {};
  const n = {};
  function o(f, u, c, d) {
    return C.isPlainObject(f) && C.isPlainObject(u) ? C.merge.call({ caseless: d }, f, u) : C.isPlainObject(u) ? C.merge({}, u) : C.isArray(u) ? u.slice() : u;
  }
  function r(f, u, c, d) {
    if (C.isUndefined(u)) {
      if (!C.isUndefined(f))
        return o(void 0, f, c, d);
    } else return o(f, u, c, d);
  }
  function s(f, u) {
    if (!C.isUndefined(u))
      return o(void 0, u);
  }
  function i(f, u) {
    if (C.isUndefined(u)) {
      if (!C.isUndefined(f))
        return o(void 0, f);
    } else return o(void 0, u);
  }
  function a(f, u, c) {
    if (c in t)
      return o(f, u);
    if (c in e)
      return o(void 0, f);
  }
  const l = {
    url: s,
    method: s,
    data: s,
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
    headers: (f, u, c) => r(zd(f), zd(u), c, !0)
  };
  return C.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const c = l[u] || r, d = c(e[u], t[u], u);
    C.isUndefined(d) && c !== a || (n[u] = d);
  }), n;
}
const q_ = (e) => {
  const t = Uo({}, e);
  let { data: n, withXSRFToken: o, xsrfHeaderName: r, xsrfCookieName: s, headers: i, auth: a } = t;
  t.headers = i = Nt.from(i), t.url = U_(z_(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (C.isFormData(n)) {
    if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [f, ...u] = l ? l.split(";").map((c) => c.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...u].join("; "));
    }
  }
  if (at.hasStandardBrowserEnv && (o && C.isFunction(o) && (o = o(t)), o || o !== !1 && YS(t.url))) {
    const f = r && s && XS.read(s);
    f && i.set(r, f);
  }
  return t;
}, ZS = typeof XMLHttpRequest < "u", eN = ZS && function(e) {
  return new Promise(function(n, o) {
    const r = q_(e);
    let s = r.data;
    const i = Nt.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: f } = r, u, c, d, p, h;
    function m() {
      p && p(), h && h(), r.cancelToken && r.cancelToken.unsubscribe(u), r.signal && r.signal.removeEventListener("abort", u);
    }
    let g = new XMLHttpRequest();
    g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
    function E() {
      if (!g)
        return;
      const y = Nt.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), S = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: y,
        config: e,
        request: g
      };
      W_(function(N) {
        n(N), m();
      }, function(N) {
        o(N), m();
      }, S), g = null;
    }
    "onloadend" in g ? g.onloadend = E : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, g.onabort = function() {
      g && (o(new _e("Request aborted", _e.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      o(new _e("Network Error", _e.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let R = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const S = r.transitional || H_;
      r.timeoutErrorMessage && (R = r.timeoutErrorMessage), o(new _e(
        R,
        S.clarifyTimeoutError ? _e.ETIMEDOUT : _e.ECONNABORTED,
        e,
        g
      )), g = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in g && C.forEach(i.toJSON(), function(R, S) {
      g.setRequestHeader(S, R);
    }), C.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), a && a !== "json" && (g.responseType = r.responseType), f && ([d, h] = Hi(f, !0), g.addEventListener("progress", d)), l && g.upload && ([c, p] = Hi(l), g.upload.addEventListener("progress", c), g.upload.addEventListener("loadend", p)), (r.cancelToken || r.signal) && (u = (y) => {
      g && (o(!y || y.type ? new kr(null, e, g) : y), g.abort(), g = null);
    }, r.cancelToken && r.cancelToken.subscribe(u), r.signal && (r.signal.aborted ? u() : r.signal.addEventListener("abort", u)));
    const O = zS(r.url);
    if (O && at.protocols.indexOf(O) === -1) {
      o(new _e("Unsupported protocol " + O + ":", _e.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(s || null);
  });
}, tN = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let o = new AbortController(), r;
    const s = function(f) {
      if (!r) {
        r = !0, a();
        const u = f instanceof Error ? f : this.reason;
        o.abort(u instanceof _e ? u : new kr(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new _e(`timeout ${t} of ms exceeded`, _e.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(s) : f.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", s));
    const { signal: l } = o;
    return l.unsubscribe = () => C.asap(a), l;
  }
}, nN = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let o = 0, r;
  for (; o < n; )
    r = o + t, yield e.slice(o, r), o = r;
}, oN = async function* (e, t) {
  for await (const n of rN(e))
    yield* nN(n, t);
}, rN = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: o } = await t.read();
      if (n)
        break;
      yield o;
    }
  } finally {
    await t.cancel();
  }
}, qd = (e, t, n, o) => {
  const r = oN(e, t);
  let s = 0, i, a = (l) => {
    i || (i = !0, o && o(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: f, value: u } = await r.next();
        if (f) {
          a(), l.close();
          return;
        }
        let c = u.byteLength;
        if (n) {
          let d = s += c;
          n(d);
        }
        l.enqueue(new Uint8Array(u));
      } catch (f) {
        throw a(f), f;
      }
    },
    cancel(l) {
      return a(l), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, ya = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", G_ = ya && typeof ReadableStream == "function", sN = ya && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Y_ = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, iN = G_ && Y_(() => {
  let e = !1;
  const t = new Request(at.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Gd = 64 * 1024, Ql = G_ && Y_(() => C.isReadableStream(new Response("").body)), ji = {
  stream: Ql && ((e) => e.body)
};
ya && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ji[t] && (ji[t] = C.isFunction(e[t]) ? (n) => n[t]() : (n, o) => {
      throw new _e(`Response type '${t}' is not supported`, _e.ERR_NOT_SUPPORT, o);
    });
  });
})(new Response());
const aN = async (e) => {
  if (e == null)
    return 0;
  if (C.isBlob(e))
    return e.size;
  if (C.isSpecCompliantForm(e))
    return (await new Request(at.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (C.isArrayBufferView(e) || C.isArrayBuffer(e))
    return e.byteLength;
  if (C.isURLSearchParams(e) && (e = e + ""), C.isString(e))
    return (await sN(e)).byteLength;
}, lN = async (e, t) => {
  const n = C.toFiniteNumber(e.getContentLength());
  return n ?? aN(t);
}, uN = ya && (async (e) => {
  let {
    url: t,
    method: n,
    data: o,
    signal: r,
    cancelToken: s,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: l,
    responseType: f,
    headers: u,
    withCredentials: c = "same-origin",
    fetchOptions: d
  } = q_(e);
  f = f ? (f + "").toLowerCase() : "text";
  let p = tN([r, s && s.toAbortSignal()], i), h;
  const m = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let g;
  try {
    if (l && iN && n !== "get" && n !== "head" && (g = await lN(u, o)) !== 0) {
      let S = new Request(t, {
        method: "POST",
        body: o,
        duplex: "half"
      }), T;
      if (C.isFormData(o) && (T = S.headers.get("content-type")) && u.setContentType(T), S.body) {
        const [N, V] = Kd(
          g,
          Hi(Wd(l))
        );
        o = qd(S.body, Gd, N, V);
      }
    }
    C.isString(c) || (c = c ? "include" : "omit");
    const E = "credentials" in Request.prototype;
    h = new Request(t, {
      ...d,
      signal: p,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: o,
      duplex: "half",
      credentials: E ? c : void 0
    });
    let O = await fetch(h, d);
    const y = Ql && (f === "stream" || f === "response");
    if (Ql && (a || y && m)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((P) => {
        S[P] = O[P];
      });
      const T = C.toFiniteNumber(O.headers.get("content-length")), [N, V] = a && Kd(
        T,
        Hi(Wd(a), !0)
      ) || [];
      O = new Response(
        qd(O.body, Gd, N, () => {
          V && V(), m && m();
        }),
        S
      );
    }
    f = f || "text";
    let R = await ji[C.findKey(ji, f) || "text"](O, e);
    return !y && m && m(), await new Promise((S, T) => {
      W_(S, T, {
        data: R,
        headers: Nt.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: e,
        request: h
      });
    });
  } catch (E) {
    throw m && m(), E && E.name === "TypeError" && /Load failed|fetch/i.test(E.message) ? Object.assign(
      new _e("Network Error", _e.ERR_NETWORK, e, h),
      {
        cause: E.cause || E
      }
    ) : _e.from(E, E && E.code, e, h);
  }
}), Zl = {
  http: AS,
  xhr: eN,
  fetch: uN
};
C.forEach(Zl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Yd = (e) => `- ${e}`, cN = (e) => C.isFunction(e) || e === null || e === !1, X_ = {
  getAdapter: (e) => {
    e = C.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, o;
    const r = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let i;
      if (o = n, !cN(n) && (o = Zl[(i = String(n)).toLowerCase()], o === void 0))
        throw new _e(`Unknown adapter '${i}'`);
      if (o)
        break;
      r[i || "#" + s] = o;
    }
    if (!o) {
      const s = Object.entries(r).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(Yd).join(`
`) : " " + Yd(s[0]) : "as no adapter specified";
      throw new _e(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: Zl
};
function Xa(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new kr(null, e);
}
function Xd(e) {
  return Xa(e), e.headers = Nt.from(e.headers), e.data = Ya.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), X_.getAdapter(e.adapter || Ls.adapter)(e).then(function(o) {
    return Xa(e), o.data = Ya.call(
      e,
      e.transformResponse,
      o
    ), o.headers = Nt.from(o.headers), o;
  }, function(o) {
    return K_(o) || (Xa(e), o && o.response && (o.response.data = Ya.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = Nt.from(o.response.headers))), Promise.reject(o);
  });
}
const J_ = "1.10.0", ba = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ba[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Jd = {};
ba.transitional = function(t, n, o) {
  function r(s, i) {
    return "[Axios v" + J_ + "] Transitional option '" + s + "'" + i + (o ? ". " + o : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new _e(
        r(i, " has been removed" + (n ? " in " + n : "")),
        _e.ERR_DEPRECATED
      );
    return n && !Jd[i] && (Jd[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
ba.spelling = function(t) {
  return (n, o) => (console.warn(`${o} is likely a misspelling of ${t}`), !0);
};
function fN(e, t, n) {
  if (typeof e != "object")
    throw new _e("options must be an object", _e.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let r = o.length;
  for (; r-- > 0; ) {
    const s = o[r], i = t[s];
    if (i) {
      const a = e[s], l = a === void 0 || i(a, s, e);
      if (l !== !0)
        throw new _e("option " + s + " must be " + l, _e.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new _e("Unknown option " + s, _e.ERR_BAD_OPTION);
  }
}
const wi = {
  assertOptions: fN,
  validators: ba
}, un = wi.validators;
let $o = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Hd(),
      response: new Hd()
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
    } catch (o) {
      if (o instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const s = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? s && !String(o.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + s) : o.stack = s;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Uo(this.defaults, n);
    const { transitional: o, paramsSerializer: r, headers: s } = n;
    o !== void 0 && wi.assertOptions(o, {
      silentJSONParsing: un.transitional(un.boolean),
      forcedJSONParsing: un.transitional(un.boolean),
      clarifyTimeoutError: un.transitional(un.boolean)
    }, !1), r != null && (C.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : wi.assertOptions(r, {
      encode: un.function,
      serialize: un.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), wi.assertOptions(n, {
      baseUrl: un.spelling("baseURL"),
      withXsrfToken: un.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && C.merge(
      s.common,
      s[n.method]
    );
    s && C.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), n.headers = Nt.concat(i, s);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(m) {
      f.push(m.fulfilled, m.rejected);
    });
    let u, c = 0, d;
    if (!l) {
      const h = [Xd.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, f), d = h.length, u = Promise.resolve(n); c < d; )
        u = u.then(h[c++], h[c++]);
      return u;
    }
    d = a.length;
    let p = n;
    for (c = 0; c < d; ) {
      const h = a[c++], m = a[c++];
      try {
        p = h(p);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      u = Xd.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (c = 0, d = f.length; c < d; )
      u = u.then(f[c++], f[c++]);
    return u;
  }
  getUri(t) {
    t = Uo(this.defaults, t);
    const n = z_(t.baseURL, t.url, t.allowAbsoluteUrls);
    return U_(n, t.params, t.paramsSerializer);
  }
};
C.forEach(["delete", "get", "head", "options"], function(t) {
  $o.prototype[t] = function(n, o) {
    return this.request(Uo(o || {}, {
      method: t,
      url: n,
      data: (o || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(t) {
  function n(o) {
    return function(s, i, a) {
      return this.request(Uo(a || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  $o.prototype[t] = n(), $o.prototype[t + "Form"] = n(!0);
});
let dN = class Q_ {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const o = this;
    this.promise.then((r) => {
      if (!o._listeners) return;
      let s = o._listeners.length;
      for (; s-- > 0; )
        o._listeners[s](r);
      o._listeners = null;
    }), this.promise.then = (r) => {
      let s;
      const i = new Promise((a) => {
        o.subscribe(a), s = a;
      }).then(r);
      return i.cancel = function() {
        o.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      o.reason || (o.reason = new kr(s, i, a), n(o.reason));
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
    const t = new AbortController(), n = (o) => {
      t.abort(o);
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
      token: new Q_(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function pN(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function hN(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const eu = {
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
Object.entries(eu).forEach(([e, t]) => {
  eu[t] = e;
});
function Z_(e) {
  const t = new $o(e), n = D_($o.prototype.request, t);
  return C.extend(n, $o.prototype, t, { allOwnKeys: !0 }), C.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return Z_(Uo(e, r));
  }, n;
}
const Ye = Z_(Ls);
Ye.Axios = $o;
Ye.CanceledError = kr;
Ye.CancelToken = dN;
Ye.isCancel = K_;
Ye.VERSION = J_;
Ye.toFormData = va;
Ye.AxiosError = _e;
Ye.Cancel = Ye.CanceledError;
Ye.all = function(t) {
  return Promise.all(t);
};
Ye.spread = pN;
Ye.isAxiosError = hN;
Ye.mergeConfig = Uo;
Ye.AxiosHeaders = Nt;
Ye.formToJSON = (e) => j_(C.isHTMLForm(e) ? new FormData(e) : e);
Ye.getAdapter = X_.getAdapter;
Ye.HttpStatusCode = eu;
Ye.default = Ye;
const {
  Axios: b$,
  AxiosError: w$,
  CanceledError: O$,
  isCancel: A$,
  CancelToken: S$,
  VERSION: N$,
  all: T$,
  Cancel: C$,
  isAxiosError: D$,
  spread: x$,
  toFormData: R$,
  AxiosHeaders: k$,
  HttpStatusCode: $$,
  formToJSON: I$,
  getAdapter: P$,
  mergeConfig: V$
} = Ye, mN = "fhir_snapshot", _N = "api", gN = () => ({
  pid: new URLSearchParams(location.search).get("pid"),
  page: _N,
  // content: "externalModule",
  type: "module",
  prefix: mN,
  redcap_csrf_token: window.redcap_csrf_token ?? ""
}), EN = () => {
  const e = Ye.create({
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
    const n = gN();
    if (t.params = {
      ...t.params || {},
      ...n
    }, t.method?.toUpperCase() === "POST") {
      const o = window.redcap_csrf_token ?? "no csrf token";
      if (t.headers["Content-Type"] === "application/json")
        t.data = {
          ...t.data || {},
          redcap_csrf_token: o
        };
      else {
        const r = new URLSearchParams(t.data || {});
        r.set("redcap_csrf_token", o), t.data = r;
      }
    }
    return t;
  }), e;
}, xn = EN(), Ki = {
  getProjectSettings() {
    const e = { route: "project-settings" };
    return xn.get("", { params: e });
  },
  updateProjectSettings(e) {
    const t = { route: "project-settings" };
    return xn.put("", e, { params: t });
  },
  listMrns(e, t) {
    const n = { route: "mrns" };
    return e && (n._page = e), t && (n._per_page = t), xn.get("", { params: n });
  },
  addMrn(e) {
    const t = { route: "mrns" };
    return xn.post("", { mrn: e }, { params: t });
  },
  removeMrn(e) {
    const t = { route: `mrns/${e}` };
    return xn.delete("", { params: t, data: e });
  },
  triggerFetch(e, t) {
    const n = { route: "trigger-fetch" };
    return xn.post("", { mrns: e, resources: t }, { params: n });
  },
  getFetchStatus() {
    const e = { route: "fetch-status" };
    return xn.get("", { params: e });
  },
  createZipArchive(e) {
    const t = { route: "create-zip-archive" };
    return xn.post("", { mrns: e }, { params: t });
  },
  downloadZip(e) {
    const t = { route: "download-zip", zip_id: e };
    return xn.get("", { params: t, responseType: "blob" });
  }
}, Gu = /* @__PURE__ */ Bu("errors", () => {
  const e = ue([]);
  return {
    errors: e,
    addError: (o, r) => {
      const s = vN(o);
      e.value.push({
        message: s.message,
        source: r,
        timestamp: /* @__PURE__ */ new Date(),
        raw: o
      });
    },
    resetErrors: () => {
      e.value = [];
    }
  };
});
function vN(e) {
  return e instanceof Error ? e : typeof e == "string" ? new Error(e) : typeof e == "object" && e !== null && "message" in e ? new Error(String(e.message)) : new Error("Unknown error");
}
var _t = "top", Rt = "bottom", kt = "right", gt = "left", wa = "auto", $r = [_t, Rt, kt, gt], Ho = "start", br = "end", eg = "clippingParents", Yu = "viewport", nr = "popper", tg = "reference", tu = /* @__PURE__ */ $r.reduce(function(e, t) {
  return e.concat([t + "-" + Ho, t + "-" + br]);
}, []), Xu = /* @__PURE__ */ [].concat($r, [wa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ho, t + "-" + br]);
}, []), ng = "beforeRead", og = "read", rg = "afterRead", sg = "beforeMain", ig = "main", ag = "afterMain", lg = "beforeWrite", ug = "write", cg = "afterWrite", fg = [ng, og, rg, sg, ig, ag, lg, ug, cg];
function wn(e) {
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
function jo(e) {
  var t = $t(e).Element;
  return e instanceof t || e instanceof Element;
}
function Lt(e) {
  var t = $t(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ju(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = $t(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function yN(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !Lt(s) || !wn(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(i) {
      var a = r[i];
      a === !1 ? s.removeAttribute(i) : s.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function bN(e) {
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
      var r = t.elements[o], s = t.attributes[o] || {}, i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = i.reduce(function(l, f) {
        return l[f] = "", l;
      }, {});
      !Lt(r) || !wn(r) || (Object.assign(r.style, a), Object.keys(s).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
const Qu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: yN,
  effect: bN,
  requires: ["computeStyles"]
};
function gn(e) {
  return e.split("-")[0];
}
var Io = Math.max, Wi = Math.min, wr = Math.round;
function nu() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function dg() {
  return !/^((?!chrome|android).)*safari/i.test(nu());
}
function Or(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && Lt(e) && (r = e.offsetWidth > 0 && wr(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && wr(o.height) / e.offsetHeight || 1);
  var i = jo(e) ? $t(e) : window, a = i.visualViewport, l = !dg() && n, f = (o.left + (l && a ? a.offsetLeft : 0)) / r, u = (o.top + (l && a ? a.offsetTop : 0)) / s, c = o.width / r, d = o.height / s;
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
function Zu(e) {
  var t = Or(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function pg(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ju(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Bn(e) {
  return $t(e).getComputedStyle(e);
}
function wN(e) {
  return ["table", "td", "th"].indexOf(wn(e)) >= 0;
}
function co(e) {
  return ((jo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Oa(e) {
  return wn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ju(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    co(e)
  );
}
function Qd(e) {
  return !Lt(e) || // https://github.com/popperjs/popper-core/issues/837
  Bn(e).position === "fixed" ? null : e.offsetParent;
}
function ON(e) {
  var t = /firefox/i.test(nu()), n = /Trident/i.test(nu());
  if (n && Lt(e)) {
    var o = Bn(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Oa(e);
  for (Ju(r) && (r = r.host); Lt(r) && ["html", "body"].indexOf(wn(r)) < 0; ) {
    var s = Bn(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Ms(e) {
  for (var t = $t(e), n = Qd(e); n && wN(n) && Bn(n).position === "static"; )
    n = Qd(n);
  return n && (wn(n) === "html" || wn(n) === "body" && Bn(n).position === "static") ? t : n || ON(e) || t;
}
function ec(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ss(e, t, n) {
  return Io(e, Wi(t, n));
}
function AN(e, t, n) {
  var o = ss(e, t, n);
  return o > n ? n : o;
}
function hg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mg(e) {
  return Object.assign({}, hg(), e);
}
function _g(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var SN = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, mg(typeof t != "number" ? t : _g(t, $r));
};
function NN(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, a = gn(n.placement), l = ec(a), f = [gt, kt].indexOf(a) >= 0, u = f ? "height" : "width";
  if (!(!s || !i)) {
    var c = SN(r.padding, n), d = Zu(s), p = l === "y" ? _t : gt, h = l === "y" ? Rt : kt, m = n.rects.reference[u] + n.rects.reference[l] - i[l] - n.rects.popper[u], g = i[l] - n.rects.reference[l], E = Ms(s), O = E ? l === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, y = m / 2 - g / 2, R = c[p], S = O - d[u] - c[h], T = O / 2 - d[u] / 2 + y, N = ss(R, T, S), V = l;
    n.modifiersData[o] = (t = {}, t[V] = N, t.centerOffset = N - T, t);
  }
}
function TN(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || pg(t.elements.popper, r) && (t.elements.arrow = r));
}
const gg = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: NN,
  effect: TN,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ar(e) {
  return e.split("-")[1];
}
var CN = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function DN(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return {
    x: wr(n * r) / r || 0,
    y: wr(o * r) / r || 0
  };
}
function Zd(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, i = e.offsets, a = e.position, l = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, c = e.isFixed, d = i.x, p = d === void 0 ? 0 : d, h = i.y, m = h === void 0 ? 0 : h, g = typeof u == "function" ? u({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = g.x, m = g.y;
  var E = i.hasOwnProperty("x"), O = i.hasOwnProperty("y"), y = gt, R = _t, S = window;
  if (f) {
    var T = Ms(n), N = "clientHeight", V = "clientWidth";
    if (T === $t(n) && (T = co(n), Bn(T).position !== "static" && a === "absolute" && (N = "scrollHeight", V = "scrollWidth")), T = T, r === _t || (r === gt || r === kt) && s === br) {
      R = Rt;
      var P = c && T === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[N]
      );
      m -= P - o.height, m *= l ? 1 : -1;
    }
    if (r === gt || (r === _t || r === Rt) && s === br) {
      y = kt;
      var k = c && T === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[V]
      );
      p -= k - o.width, p *= l ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: a
  }, f && CN), D = u === !0 ? DN({
    x: p,
    y: m
  }, $t(n)) : {
    x: p,
    y: m
  };
  if (p = D.x, m = D.y, l) {
    var G;
    return Object.assign({}, $, (G = {}, G[R] = O ? "0" : "", G[y] = E ? "0" : "", G.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", G));
  }
  return Object.assign({}, $, (t = {}, t[R] = O ? m + "px" : "", t[y] = E ? p + "px" : "", t.transform = "", t));
}
function xN(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, i = s === void 0 ? !0 : s, a = n.roundOffsets, l = a === void 0 ? !0 : a, f = {
    placement: gn(t.placement),
    variation: Ar(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: r,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Zd(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Zd(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const tc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: xN,
  data: {}
};
var Qs = {
  passive: !0
};
function RN(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, i = o.resize, a = i === void 0 ? !0 : i, l = $t(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && f.forEach(function(u) {
    u.addEventListener("scroll", n.update, Qs);
  }), a && l.addEventListener("resize", n.update, Qs), function() {
    s && f.forEach(function(u) {
      u.removeEventListener("scroll", n.update, Qs);
    }), a && l.removeEventListener("resize", n.update, Qs);
  };
}
const nc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: RN,
  data: {}
};
var kN = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Oi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return kN[t];
  });
}
var $N = {
  start: "end",
  end: "start"
};
function ep(e) {
  return e.replace(/start|end/g, function(t) {
    return $N[t];
  });
}
function oc(e) {
  var t = $t(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function rc(e) {
  return Or(co(e)).left + oc(e).scrollLeft;
}
function IN(e, t) {
  var n = $t(e), o = co(e), r = n.visualViewport, s = o.clientWidth, i = o.clientHeight, a = 0, l = 0;
  if (r) {
    s = r.width, i = r.height;
    var f = dg();
    (f || !f && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a + rc(e),
    y: l
  };
}
function PN(e) {
  var t, n = co(e), o = oc(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = Io(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Io(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + rc(e), l = -o.scrollTop;
  return Bn(r || n).direction === "rtl" && (a += Io(n.clientWidth, r ? r.clientWidth : 0) - s), {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
function sc(e) {
  var t = Bn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Eg(e) {
  return ["html", "body", "#document"].indexOf(wn(e)) >= 0 ? e.ownerDocument.body : Lt(e) && sc(e) ? e : Eg(Oa(e));
}
function is(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Eg(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = $t(o), i = r ? [s].concat(s.visualViewport || [], sc(o) ? o : []) : o, a = t.concat(i);
  return r ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(is(Oa(i)))
  );
}
function ou(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function VN(e, t) {
  var n = Or(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function tp(e, t, n) {
  return t === Yu ? ou(IN(e, n)) : jo(t) ? VN(t, n) : ou(PN(co(e)));
}
function LN(e) {
  var t = is(Oa(e)), n = ["absolute", "fixed"].indexOf(Bn(e).position) >= 0, o = n && Lt(e) ? Ms(e) : e;
  return jo(o) ? t.filter(function(r) {
    return jo(r) && pg(r, o) && wn(r) !== "body";
  }) : [];
}
function MN(e, t, n, o) {
  var r = t === "clippingParents" ? LN(e) : [].concat(t), s = [].concat(r, [n]), i = s[0], a = s.reduce(function(l, f) {
    var u = tp(e, f, o);
    return l.top = Io(u.top, l.top), l.right = Wi(u.right, l.right), l.bottom = Wi(u.bottom, l.bottom), l.left = Io(u.left, l.left), l;
  }, tp(e, i, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function vg(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? gn(o) : null, s = o ? Ar(o) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case _t:
      l = {
        x: i,
        y: t.y - n.height
      };
      break;
    case Rt:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case kt:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case gt:
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
  var f = r ? ec(r) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (s) {
      case Ho:
        l[f] = l[f] - (t[u] / 2 - n[u] / 2);
        break;
      case br:
        l[f] = l[f] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Sr(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, i = s === void 0 ? e.strategy : s, a = n.boundary, l = a === void 0 ? eg : a, f = n.rootBoundary, u = f === void 0 ? Yu : f, c = n.elementContext, d = c === void 0 ? nr : c, p = n.altBoundary, h = p === void 0 ? !1 : p, m = n.padding, g = m === void 0 ? 0 : m, E = mg(typeof g != "number" ? g : _g(g, $r)), O = d === nr ? tg : nr, y = e.rects.popper, R = e.elements[h ? O : d], S = MN(jo(R) ? R : R.contextElement || co(e.elements.popper), l, u, i), T = Or(e.elements.reference), N = vg({
    reference: T,
    element: y,
    placement: r
  }), V = ou(Object.assign({}, y, N)), P = d === nr ? V : T, k = {
    top: S.top - P.top + E.top,
    bottom: P.bottom - S.bottom + E.bottom,
    left: S.left - P.left + E.left,
    right: P.right - S.right + E.right
  }, $ = e.modifiersData.offset;
  if (d === nr && $) {
    var D = $[r];
    Object.keys(k).forEach(function(G) {
      var ce = [kt, Rt].indexOf(G) >= 0 ? 1 : -1, me = [_t, Rt].indexOf(G) >= 0 ? "y" : "x";
      k[G] += D[me] * ce;
    });
  }
  return k;
}
function FN(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, i = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, f = l === void 0 ? Xu : l, u = Ar(o), c = u ? a ? tu : tu.filter(function(h) {
    return Ar(h) === u;
  }) : $r, d = c.filter(function(h) {
    return f.indexOf(h) >= 0;
  });
  d.length === 0 && (d = c);
  var p = d.reduce(function(h, m) {
    return h[m] = Sr(e, {
      placement: m,
      boundary: r,
      rootBoundary: s,
      padding: i
    })[gn(m)], h;
  }, {});
  return Object.keys(p).sort(function(h, m) {
    return p[h] - p[m];
  });
}
function BN(e) {
  if (gn(e) === wa)
    return [];
  var t = Oi(e);
  return [ep(e), t, ep(t)];
}
function UN(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, i = n.altAxis, a = i === void 0 ? !0 : i, l = n.fallbackPlacements, f = n.padding, u = n.boundary, c = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, h = p === void 0 ? !0 : p, m = n.allowedAutoPlacements, g = t.options.placement, E = gn(g), O = E === g, y = l || (O || !h ? [Oi(g)] : BN(g)), R = [g].concat(y).reduce(function(tt, ot) {
      return tt.concat(gn(ot) === wa ? FN(t, {
        placement: ot,
        boundary: u,
        rootBoundary: c,
        padding: f,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : ot);
    }, []), S = t.rects.reference, T = t.rects.popper, N = /* @__PURE__ */ new Map(), V = !0, P = R[0], k = 0; k < R.length; k++) {
      var $ = R[k], D = gn($), G = Ar($) === Ho, ce = [_t, Rt].indexOf(D) >= 0, me = ce ? "width" : "height", Q = Sr(t, {
        placement: $,
        boundary: u,
        rootBoundary: c,
        altBoundary: d,
        padding: f
      }), j = ce ? G ? kt : gt : G ? Rt : _t;
      S[me] > T[me] && (j = Oi(j));
      var ee = Oi(j), le = [];
      if (s && le.push(Q[D] <= 0), a && le.push(Q[j] <= 0, Q[ee] <= 0), le.every(function(tt) {
        return tt;
      })) {
        P = $, V = !1;
        break;
      }
      N.set($, le);
    }
    if (V)
      for (var We = h ? 3 : 1, ze = function(ot) {
        var Et = R.find(function(x) {
          var Y = N.get(x);
          if (Y)
            return Y.slice(0, ot).every(function(J) {
              return J;
            });
        });
        if (Et)
          return P = Et, "break";
      }, Pe = We; Pe > 0; Pe--) {
        var Be = ze(Pe);
        if (Be === "break") break;
      }
    t.placement !== P && (t.modifiersData[o]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const yg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: UN,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function np(e, t, n) {
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
function op(e) {
  return [_t, kt, Rt, gt].some(function(t) {
    return e[t] >= 0;
  });
}
function HN(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, i = Sr(t, {
    elementContext: "reference"
  }), a = Sr(t, {
    altBoundary: !0
  }), l = np(i, o), f = np(a, r, s), u = op(l), c = op(f);
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
const bg = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: HN
};
function jN(e, t, n) {
  var o = gn(e), r = [gt, _t].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = s[0], a = s[1];
  return i = i || 0, a = (a || 0) * r, [gt, kt].indexOf(o) >= 0 ? {
    x: a,
    y: i
  } : {
    x: i,
    y: a
  };
}
function KN(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, i = Xu.reduce(function(u, c) {
    return u[c] = jN(c, t.rects, s), u;
  }, {}), a = i[t.placement], l = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += f), t.modifiersData[o] = i;
}
const wg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: KN
};
function WN(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = vg({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const ic = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: WN,
  data: {}
};
function zN(e) {
  return e === "x" ? "y" : "x";
}
function qN(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, i = n.altAxis, a = i === void 0 ? !1 : i, l = n.boundary, f = n.rootBoundary, u = n.altBoundary, c = n.padding, d = n.tether, p = d === void 0 ? !0 : d, h = n.tetherOffset, m = h === void 0 ? 0 : h, g = Sr(t, {
    boundary: l,
    rootBoundary: f,
    padding: c,
    altBoundary: u
  }), E = gn(t.placement), O = Ar(t.placement), y = !O, R = ec(E), S = zN(R), T = t.modifiersData.popperOffsets, N = t.rects.reference, V = t.rects.popper, P = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, k = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (T) {
    if (s) {
      var G, ce = R === "y" ? _t : gt, me = R === "y" ? Rt : kt, Q = R === "y" ? "height" : "width", j = T[R], ee = j + g[ce], le = j - g[me], We = p ? -V[Q] / 2 : 0, ze = O === Ho ? N[Q] : V[Q], Pe = O === Ho ? -V[Q] : -N[Q], Be = t.elements.arrow, tt = p && Be ? Zu(Be) : {
        width: 0,
        height: 0
      }, ot = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : hg(), Et = ot[ce], x = ot[me], Y = ss(0, N[Q], tt[Q]), J = y ? N[Q] / 2 - We - Y - Et - k.mainAxis : ze - Y - Et - k.mainAxis, ne = y ? -N[Q] / 2 + We + Y + x + k.mainAxis : Pe + Y + x + k.mainAxis, ge = t.elements.arrow && Ms(t.elements.arrow), Ue = ge ? R === "y" ? ge.clientTop || 0 : ge.clientLeft || 0 : 0, _ = (G = $?.[R]) != null ? G : 0, v = j + J - _ - Ue, A = j + ne - _, L = ss(p ? Wi(ee, v) : ee, j, p ? Io(le, A) : le);
      T[R] = L, D[R] = L - j;
    }
    if (a) {
      var I, M = R === "x" ? _t : gt, X = R === "x" ? Rt : kt, K = T[S], W = S === "y" ? "height" : "width", H = K + g[M], se = K - g[X], z = [_t, gt].indexOf(E) !== -1, re = (I = $?.[S]) != null ? I : 0, fe = z ? H : K - N[W] - V[W] - re + k.altAxis, be = z ? K + N[W] + V[W] - re - k.altAxis : se, De = p && z ? AN(fe, K, be) : ss(p ? fe : H, K, p ? be : se);
      T[S] = De, D[S] = De - K;
    }
    t.modifiersData[o] = D;
  }
}
const Og = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: qN,
  requiresIfExists: ["offset"]
};
function GN(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function YN(e) {
  return e === $t(e) || !Lt(e) ? oc(e) : GN(e);
}
function XN(e) {
  var t = e.getBoundingClientRect(), n = wr(t.width) / e.offsetWidth || 1, o = wr(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function JN(e, t, n) {
  n === void 0 && (n = !1);
  var o = Lt(t), r = Lt(t) && XN(t), s = co(t), i = Or(e, r, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((wn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  sc(s)) && (a = YN(t)), Lt(t) ? (l = Or(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = rc(s))), {
    x: i.left + a.scrollLeft - l.x,
    y: i.top + a.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function QN(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var i = [].concat(s.requires || [], s.requiresIfExists || []);
    i.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && r(l);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || r(s);
  }), o;
}
function ZN(e) {
  var t = QN(e);
  return fg.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function e1(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function t1(e) {
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
var rp = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function sp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Aa(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? rp : r;
  return function(a, l, f) {
    f === void 0 && (f = s);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, rp, s),
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
        m(), u.options = Object.assign({}, s, u.options, O), u.scrollParents = {
          reference: jo(a) ? is(a) : a.contextElement ? is(a.contextElement) : [],
          popper: is(l)
        };
        var y = ZN(t1([].concat(o, u.options.modifiers)));
        return u.orderedModifiers = y.filter(function(R) {
          return R.enabled;
        }), h(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var E = u.elements, O = E.reference, y = E.popper;
          if (sp(O, y)) {
            u.rects = {
              reference: JN(O, Ms(y), u.options.strategy === "fixed"),
              popper: Zu(y)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(k) {
              return u.modifiersData[k.name] = Object.assign({}, k.data);
            });
            for (var R = 0; R < u.orderedModifiers.length; R++) {
              if (u.reset === !0) {
                u.reset = !1, R = -1;
                continue;
              }
              var S = u.orderedModifiers[R], T = S.fn, N = S.options, V = N === void 0 ? {} : N, P = S.name;
              typeof T == "function" && (u = T({
                state: u,
                options: V,
                name: P,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: e1(function() {
        return new Promise(function(g) {
          p.forceUpdate(), g(u);
        });
      }),
      destroy: function() {
        m(), d = !0;
      }
    };
    if (!sp(a, l))
      return p;
    p.setOptions(f).then(function(g) {
      !d && f.onFirstUpdate && f.onFirstUpdate(g);
    });
    function h() {
      u.orderedModifiers.forEach(function(g) {
        var E = g.name, O = g.options, y = O === void 0 ? {} : O, R = g.effect;
        if (typeof R == "function") {
          var S = R({
            state: u,
            name: E,
            instance: p,
            options: y
          }), T = function() {
          };
          c.push(S || T);
        }
      });
    }
    function m() {
      c.forEach(function(g) {
        return g();
      }), c = [];
    }
    return p;
  };
}
var n1 = /* @__PURE__ */ Aa(), o1 = [nc, ic, tc, Qu], r1 = /* @__PURE__ */ Aa({
  defaultModifiers: o1
}), s1 = [nc, ic, tc, Qu, wg, yg, Og, gg, bg], ac = /* @__PURE__ */ Aa({
  defaultModifiers: s1
});
const Ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: ag,
  afterRead: rg,
  afterWrite: cg,
  applyStyles: Qu,
  arrow: gg,
  auto: wa,
  basePlacements: $r,
  beforeMain: sg,
  beforeRead: ng,
  beforeWrite: lg,
  bottom: Rt,
  clippingParents: eg,
  computeStyles: tc,
  createPopper: ac,
  createPopperBase: n1,
  createPopperLite: r1,
  detectOverflow: Sr,
  end: br,
  eventListeners: nc,
  flip: yg,
  hide: bg,
  left: gt,
  main: ig,
  modifierPhases: fg,
  offset: wg,
  placements: Xu,
  popper: nr,
  popperGenerator: Aa,
  popperOffsets: ic,
  preventOverflow: Og,
  read: og,
  reference: tg,
  right: kt,
  start: Ho,
  top: _t,
  variationPlacements: tu,
  viewport: Yu,
  write: ug
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const qn = /* @__PURE__ */ new Map(), Ja = {
  set(e, t, n) {
    qn.has(e) || qn.set(e, /* @__PURE__ */ new Map());
    const o = qn.get(e);
    if (!o.has(t) && o.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);
      return;
    }
    o.set(t, n);
  },
  get(e, t) {
    return qn.has(e) && qn.get(e).get(t) || null;
  },
  remove(e, t) {
    if (!qn.has(e))
      return;
    const n = qn.get(e);
    n.delete(t), n.size === 0 && qn.delete(e);
  }
}, i1 = 1e6, a1 = 1e3, ru = "transitionend", Sg = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)), e), l1 = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), u1 = (e) => {
  do
    e += Math.floor(Math.random() * i1);
  while (document.getElementById(e));
  return e;
}, c1 = (e) => {
  if (!e)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: n
  } = window.getComputedStyle(e);
  const o = Number.parseFloat(t), r = Number.parseFloat(n);
  return !o && !r ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * a1);
}, Ng = (e) => {
  e.dispatchEvent(new Event(ru));
}, Ln = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), so = (e) => Ln(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(Sg(e)) : null, Ir = (e) => {
  if (!Ln(e) || e.getClientRects().length === 0)
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
}, io = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Tg = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? Tg(e.parentNode) : null;
}, zi = () => {
}, Fs = (e) => {
  e.offsetHeight;
}, Cg = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Qa = [], f1 = (e) => {
  document.readyState === "loading" ? (Qa.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of Qa)
      t();
  }), Qa.push(e)) : e();
}, Bt = () => document.documentElement.dir === "rtl", Ht = (e) => {
  f1(() => {
    const t = Cg();
    if (t) {
      const n = e.NAME, o = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = o, e.jQueryInterface);
    }
  });
}, wt = (e, t = [], n = e) => typeof e == "function" ? e.call(...t) : n, Dg = (e, t, n = !0) => {
  if (!n) {
    wt(e);
    return;
  }
  const r = c1(t) + 5;
  let s = !1;
  const i = ({
    target: a
  }) => {
    a === t && (s = !0, t.removeEventListener(ru, i), wt(e));
  };
  t.addEventListener(ru, i), setTimeout(() => {
    s || Ng(t);
  }, r);
}, lc = (e, t, n, o) => {
  const r = e.length;
  let s = e.indexOf(t);
  return s === -1 ? !n && o ? e[r - 1] : e[0] : (s += n ? 1 : -1, o && (s = (s + r) % r), e[Math.max(0, Math.min(s, r - 1))]);
}, d1 = /[^.]*(?=\..*)\.|.*/, p1 = /\..*/, h1 = /::\d+$/, Za = {};
let ip = 1;
const xg = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, m1 = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Rg(e, t) {
  return t && `${t}::${ip++}` || e.uidEvent || ip++;
}
function kg(e) {
  const t = Rg(e);
  return e.uidEvent = t, Za[t] = Za[t] || {}, Za[t];
}
function _1(e, t) {
  return function n(o) {
    return uc(o, {
      delegateTarget: e
    }), n.oneOff && U.off(e, o.type, t), t.apply(e, [o]);
  };
}
function g1(e, t, n) {
  return function o(r) {
    const s = e.querySelectorAll(t);
    for (let {
      target: i
    } = r; i && i !== this; i = i.parentNode)
      for (const a of s)
        if (a === i)
          return uc(r, {
            delegateTarget: i
          }), o.oneOff && U.off(e, r.type, t, n), n.apply(i, [r]);
  };
}
function $g(e, t, n = null) {
  return Object.values(e).find((o) => o.callable === t && o.delegationSelector === n);
}
function Ig(e, t, n) {
  const o = typeof t == "string", r = o ? n : t || n;
  let s = Pg(e);
  return m1.has(s) || (s = e), [o, r, s];
}
function ap(e, t, n, o, r) {
  if (typeof t != "string" || !e)
    return;
  let [s, i, a] = Ig(t, n, o);
  t in xg && (i = ((h) => function(m) {
    if (!m.relatedTarget || m.relatedTarget !== m.delegateTarget && !m.delegateTarget.contains(m.relatedTarget))
      return h.call(this, m);
  })(i));
  const l = kg(e), f = l[a] || (l[a] = {}), u = $g(f, i, s ? n : null);
  if (u) {
    u.oneOff = u.oneOff && r;
    return;
  }
  const c = Rg(i, t.replace(d1, "")), d = s ? g1(e, n, i) : _1(e, i);
  d.delegationSelector = s ? n : null, d.callable = i, d.oneOff = r, d.uidEvent = c, f[c] = d, e.addEventListener(a, d, s);
}
function su(e, t, n, o, r) {
  const s = $g(t[n], o, r);
  s && (e.removeEventListener(n, s, !!r), delete t[n][s.uidEvent]);
}
function E1(e, t, n, o) {
  const r = t[n] || {};
  for (const [s, i] of Object.entries(r))
    s.includes(o) && su(e, t, n, i.callable, i.delegationSelector);
}
function Pg(e) {
  return e = e.replace(p1, ""), xg[e] || e;
}
const U = {
  on(e, t, n, o) {
    ap(e, t, n, o, !1);
  },
  one(e, t, n, o) {
    ap(e, t, n, o, !0);
  },
  off(e, t, n, o) {
    if (typeof t != "string" || !e)
      return;
    const [r, s, i] = Ig(t, n, o), a = i !== t, l = kg(e), f = l[i] || {}, u = t.startsWith(".");
    if (typeof s < "u") {
      if (!Object.keys(f).length)
        return;
      su(e, l, i, s, r ? n : null);
      return;
    }
    if (u)
      for (const c of Object.keys(l))
        E1(e, l, c, t.slice(1));
    for (const [c, d] of Object.entries(f)) {
      const p = c.replace(h1, "");
      (!a || t.includes(p)) && su(e, l, i, d.callable, d.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const o = Cg(), r = Pg(t), s = t !== r;
    let i = null, a = !0, l = !0, f = !1;
    s && o && (i = o.Event(t, n), o(e).trigger(i), a = !i.isPropagationStopped(), l = !i.isImmediatePropagationStopped(), f = i.isDefaultPrevented());
    const u = uc(new Event(t, {
      bubbles: a,
      cancelable: !0
    }), n);
    return f && u.preventDefault(), l && e.dispatchEvent(u), u.defaultPrevented && i && i.preventDefault(), u;
  }
};
function uc(e, t = {}) {
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
function lp(e) {
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
function el(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Mn = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${el(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${el(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {}, n = Object.keys(e.dataset).filter((o) => o.startsWith("bs") && !o.startsWith("bsConfig"));
    for (const o of n) {
      let r = o.replace(/^bs/, "");
      r = r.charAt(0).toLowerCase() + r.slice(1), t[r] = lp(e.dataset[o]);
    }
    return t;
  },
  getDataAttribute(e, t) {
    return lp(e.getAttribute(`data-bs-${el(t)}`));
  }
};
class Bs {
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
    const o = Ln(n) ? Mn.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof o == "object" ? o : {},
      ...Ln(n) ? Mn.getDataAttributes(n) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [o, r] of Object.entries(n)) {
      const s = t[o], i = Ln(s) ? "element" : l1(s);
      if (!new RegExp(r).test(i))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${i}" but expected type "${r}".`);
    }
  }
}
const v1 = "5.3.7";
class nn extends Bs {
  constructor(t, n) {
    super(), t = so(t), t && (this._element = t, this._config = this._getConfig(n), Ja.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    Ja.remove(this._element, this.constructor.DATA_KEY), U.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  // Private
  _queueCallback(t, n, o = !0) {
    Dg(t, n, o);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return Ja.get(so(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return v1;
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
const tl = (e) => {
  let t = e.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith("."))
      return null;
    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
  }
  return t ? t.split(",").map((n) => Sg(n)).join(",") : null;
}, ie = {
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
    return this.find(t, e).filter((n) => !io(n) && Ir(n));
  },
  getSelectorFromElement(e) {
    const t = tl(e);
    return t && ie.findOne(t) ? t : null;
  },
  getElementFromSelector(e) {
    const t = tl(e);
    return t ? ie.findOne(t) : null;
  },
  getMultipleElementsFromSelector(e) {
    const t = tl(e);
    return t ? ie.find(t) : [];
  }
}, Sa = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, o = e.NAME;
  U.on(document, n, `[data-bs-dismiss="${o}"]`, function(r) {
    if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), io(this))
      return;
    const s = ie.getElementFromSelector(this) || this.closest(`.${o}`);
    e.getOrCreateInstance(s)[t]();
  });
}, y1 = "alert", b1 = "bs.alert", Vg = `.${b1}`, w1 = `close${Vg}`, O1 = `closed${Vg}`, A1 = "fade", S1 = "show";
class Na extends nn {
  // Getters
  static get NAME() {
    return y1;
  }
  // Public
  close() {
    if (U.trigger(this._element, w1).defaultPrevented)
      return;
    this._element.classList.remove(S1);
    const n = this._element.classList.contains(A1);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  // Private
  _destroyElement() {
    this._element.remove(), U.trigger(this._element, O1), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Na.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Sa(Na, "close");
Ht(Na);
const N1 = "button", T1 = "bs.button", C1 = `.${T1}`, D1 = ".data-api", x1 = "active", up = '[data-bs-toggle="button"]', R1 = `click${C1}${D1}`;
class Ta extends nn {
  // Getters
  static get NAME() {
    return N1;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(x1));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ta.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
U.on(document, R1, up, (e) => {
  e.preventDefault();
  const t = e.target.closest(up);
  Ta.getOrCreateInstance(t).toggle();
});
Ht(Ta);
const k1 = "swipe", Pr = ".bs.swipe", $1 = `touchstart${Pr}`, I1 = `touchmove${Pr}`, P1 = `touchend${Pr}`, V1 = `pointerdown${Pr}`, L1 = `pointerup${Pr}`, M1 = "touch", F1 = "pen", B1 = "pointer-event", U1 = 40, H1 = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, j1 = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class qi extends Bs {
  constructor(t, n) {
    super(), this._element = t, !(!t || !qi.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return H1;
  }
  static get DefaultType() {
    return j1;
  }
  static get NAME() {
    return k1;
  }
  // Public
  dispose() {
    U.off(this._element, Pr);
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
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), wt(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= U1)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && wt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (U.on(this._element, V1, (t) => this._start(t)), U.on(this._element, L1, (t) => this._end(t)), this._element.classList.add(B1)) : (U.on(this._element, $1, (t) => this._start(t)), U.on(this._element, I1, (t) => this._move(t)), U.on(this._element, P1, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === F1 || t.pointerType === M1);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const K1 = "carousel", W1 = "bs.carousel", fo = `.${W1}`, Lg = ".data-api", z1 = "ArrowLeft", q1 = "ArrowRight", G1 = 500, Kr = "next", Qo = "prev", or = "left", Ai = "right", Y1 = `slide${fo}`, nl = `slid${fo}`, X1 = `keydown${fo}`, J1 = `mouseenter${fo}`, Q1 = `mouseleave${fo}`, Z1 = `dragstart${fo}`, eT = `load${fo}${Lg}`, tT = `click${fo}${Lg}`, Mg = "carousel", Zs = "active", nT = "slide", oT = "carousel-item-end", rT = "carousel-item-start", sT = "carousel-item-next", iT = "carousel-item-prev", Fg = ".active", Bg = ".carousel-item", aT = Fg + Bg, lT = ".carousel-item img", uT = ".carousel-indicators", cT = "[data-bs-slide], [data-bs-slide-to]", fT = '[data-bs-ride="carousel"]', dT = {
  [z1]: Ai,
  [q1]: or
}, pT = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, hT = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class Us extends nn {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = ie.findOne(uT, this._element), this._addEventListeners(), this._config.ride === Mg && this.cycle();
  }
  // Getters
  static get Default() {
    return pT;
  }
  static get DefaultType() {
    return hT;
  }
  static get NAME() {
    return K1;
  }
  // Public
  next() {
    this._slide(Kr);
  }
  nextWhenVisible() {
    !document.hidden && Ir(this._element) && this.next();
  }
  prev() {
    this._slide(Qo);
  }
  pause() {
    this._isSliding && Ng(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        U.one(this._element, nl, () => this.cycle());
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
      U.one(this._element, nl, () => this.to(t));
      return;
    }
    const o = this._getItemIndex(this._getActive());
    if (o === t)
      return;
    const r = t > o ? Kr : Qo;
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
    this._config.keyboard && U.on(this._element, X1, (t) => this._keydown(t)), this._config.pause === "hover" && (U.on(this._element, J1, () => this.pause()), U.on(this._element, Q1, () => this._maybeEnableCycle())), this._config.touch && qi.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const o of ie.find(lT, this._element))
      U.on(o, Z1, (r) => r.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(or)),
      rightCallback: () => this._slide(this._directionToOrder(Ai)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), G1 + this._config.interval));
      }
    };
    this._swipeHelper = new qi(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const n = dT[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const n = ie.findOne(Fg, this._indicatorsElement);
    n.classList.remove(Zs), n.removeAttribute("aria-current");
    const o = ie.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    o && (o.classList.add(Zs), o.setAttribute("aria-current", "true"));
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
    const o = this._getActive(), r = t === Kr, s = n || lc(this._getItems(), o, r, this._config.wrap);
    if (s === o)
      return;
    const i = this._getItemIndex(s), a = (p) => U.trigger(this._element, p, {
      relatedTarget: s,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(o),
      to: i
    });
    if (a(Y1).defaultPrevented || !o || !s)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(i), this._activeElement = s;
    const u = r ? rT : oT, c = r ? sT : iT;
    s.classList.add(c), Fs(s), o.classList.add(u), s.classList.add(u);
    const d = () => {
      s.classList.remove(u, c), s.classList.add(Zs), o.classList.remove(Zs, c, u), this._isSliding = !1, a(nl);
    };
    this._queueCallback(d, o, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(nT);
  }
  _getActive() {
    return ie.findOne(aT, this._element);
  }
  _getItems() {
    return ie.find(Bg, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Bt() ? t === or ? Qo : Kr : t === or ? Kr : Qo;
  }
  _orderToDirection(t) {
    return Bt() ? t === Qo ? or : Ai : t === Qo ? Ai : or;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Us.getOrCreateInstance(this, t);
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
U.on(document, tT, cT, function(e) {
  const t = ie.getElementFromSelector(this);
  if (!t || !t.classList.contains(Mg))
    return;
  e.preventDefault();
  const n = Us.getOrCreateInstance(t), o = this.getAttribute("data-bs-slide-to");
  if (o) {
    n.to(o), n._maybeEnableCycle();
    return;
  }
  if (Mn.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
U.on(window, eT, () => {
  const e = ie.find(fT);
  for (const t of e)
    Us.getOrCreateInstance(t);
});
Ht(Us);
const mT = "collapse", _T = "bs.collapse", Hs = `.${_T}`, gT = ".data-api", ET = `show${Hs}`, vT = `shown${Hs}`, yT = `hide${Hs}`, bT = `hidden${Hs}`, wT = `click${Hs}${gT}`, ol = "show", ar = "collapse", ei = "collapsing", OT = "collapsed", AT = `:scope .${ar} .${ar}`, ST = "collapse-horizontal", NT = "width", TT = "height", CT = ".collapse.show, .collapse.collapsing", iu = '[data-bs-toggle="collapse"]', DT = {
  parent: null,
  toggle: !0
}, xT = {
  parent: "(null|element)",
  toggle: "boolean"
};
class As extends nn {
  constructor(t, n) {
    super(t, n), this._isTransitioning = !1, this._triggerArray = [];
    const o = ie.find(iu);
    for (const r of o) {
      const s = ie.getSelectorFromElement(r), i = ie.find(s).filter((a) => a === this._element);
      s !== null && i.length && this._triggerArray.push(r);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return DT;
  }
  static get DefaultType() {
    return xT;
  }
  static get NAME() {
    return mT;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(CT).filter((a) => a !== this._element).map((a) => As.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || U.trigger(this._element, ET).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const o = this._getDimension();
    this._element.classList.remove(ar), this._element.classList.add(ei), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const r = () => {
      this._isTransitioning = !1, this._element.classList.remove(ei), this._element.classList.add(ar, ol), this._element.style[o] = "", U.trigger(this._element, vT);
    }, i = `scroll${o[0].toUpperCase() + o.slice(1)}`;
    this._queueCallback(r, this._element, !0), this._element.style[o] = `${this._element[i]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || U.trigger(this._element, yT).defaultPrevented)
      return;
    const n = this._getDimension();
    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, Fs(this._element), this._element.classList.add(ei), this._element.classList.remove(ar, ol);
    for (const r of this._triggerArray) {
      const s = ie.getElementFromSelector(r);
      s && !this._isShown(s) && this._addAriaAndCollapsedClass([r], !1);
    }
    this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, this._element.classList.remove(ei), this._element.classList.add(ar), U.trigger(this._element, bT);
    };
    this._element.style[n] = "", this._queueCallback(o, this._element, !0);
  }
  // Private
  _isShown(t = this._element) {
    return t.classList.contains(ol);
  }
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = so(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(ST) ? NT : TT;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(iu);
    for (const n of t) {
      const o = ie.getElementFromSelector(n);
      o && this._addAriaAndCollapsedClass([n], this._isShown(o));
    }
  }
  _getFirstLevelChildren(t) {
    const n = ie.find(AT, this._config.parent);
    return ie.find(t, this._config.parent).filter((o) => !n.includes(o));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const o of t)
        o.classList.toggle(OT, !n), o.setAttribute("aria-expanded", n);
  }
  // Static
  static jQueryInterface(t) {
    const n = {};
    return typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
      const o = As.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof o[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        o[t]();
      }
    });
  }
}
U.on(document, wT, iu, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  for (const t of ie.getMultipleElementsFromSelector(this))
    As.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
Ht(As);
const cp = "dropdown", RT = "bs.dropdown", Ko = `.${RT}`, cc = ".data-api", kT = "Escape", fp = "Tab", $T = "ArrowUp", dp = "ArrowDown", IT = 2, PT = `hide${Ko}`, VT = `hidden${Ko}`, LT = `show${Ko}`, MT = `shown${Ko}`, Ug = `click${Ko}${cc}`, Hg = `keydown${Ko}${cc}`, FT = `keyup${Ko}${cc}`, rr = "show", BT = "dropup", UT = "dropend", HT = "dropstart", jT = "dropup-center", KT = "dropdown-center", So = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', WT = `${So}.${rr}`, Si = ".dropdown-menu", zT = ".navbar", qT = ".navbar-nav", GT = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", YT = Bt() ? "top-end" : "top-start", XT = Bt() ? "top-start" : "top-end", JT = Bt() ? "bottom-end" : "bottom-start", QT = Bt() ? "bottom-start" : "bottom-end", ZT = Bt() ? "left-start" : "right-start", eC = Bt() ? "right-start" : "left-start", tC = "top", nC = "bottom", oC = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, rC = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class En extends nn {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = ie.next(this._element, Si)[0] || ie.prev(this._element, Si)[0] || ie.findOne(Si, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return oC;
  }
  static get DefaultType() {
    return rC;
  }
  static get NAME() {
    return cp;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (io(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!U.trigger(this._element, LT, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(qT))
        for (const o of [].concat(...document.body.children))
          U.on(o, "mouseover", zi);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(rr), this._element.classList.add(rr), U.trigger(this._element, MT, t);
    }
  }
  hide() {
    if (io(this._element) || !this._isShown())
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
    if (!U.trigger(this._element, PT, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const o of [].concat(...document.body.children))
          U.off(o, "mouseover", zi);
      this._popper && this._popper.destroy(), this._menu.classList.remove(rr), this._element.classList.remove(rr), this._element.setAttribute("aria-expanded", "false"), Mn.removeDataAttribute(this._menu, "popper"), U.trigger(this._element, VT, t), this._element.focus();
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !Ln(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${cp.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof Ag > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : Ln(this._config.reference) ? t = so(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = ac(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(rr);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(UT))
      return ZT;
    if (t.classList.contains(HT))
      return eC;
    if (t.classList.contains(jT))
      return tC;
    if (t.classList.contains(KT))
      return nC;
    const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(BT) ? n ? XT : YT : n ? QT : JT;
  }
  _detectNavbar() {
    return this._element.closest(zT) !== null;
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
    return (this._inNavbar || this._config.display === "static") && (Mn.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...t,
      ...wt(this._config.popperConfig, [void 0, t])
    };
  }
  _selectMenuItem({
    key: t,
    target: n
  }) {
    const o = ie.find(GT, this._menu).filter((r) => Ir(r));
    o.length && lc(o, n, t === dp, !o.includes(n)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = En.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === IT || t.type === "keyup" && t.key !== fp)
      return;
    const n = ie.find(WT);
    for (const o of n) {
      const r = En.getInstance(o);
      if (!r || r._config.autoClose === !1)
        continue;
      const s = t.composedPath(), i = s.includes(r._menu);
      if (s.includes(r._element) || r._config.autoClose === "inside" && !i || r._config.autoClose === "outside" && i || r._menu.contains(t.target) && (t.type === "keyup" && t.key === fp || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const a = {
        relatedTarget: r._element
      };
      t.type === "click" && (a.clickEvent = t), r._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName), o = t.key === kT, r = [$T, dp].includes(t.key);
    if (!r && !o || n && !o)
      return;
    t.preventDefault();
    const s = this.matches(So) ? this : ie.prev(this, So)[0] || ie.next(this, So)[0] || ie.findOne(So, t.delegateTarget.parentNode), i = En.getOrCreateInstance(s);
    if (r) {
      t.stopPropagation(), i.show(), i._selectMenuItem(t);
      return;
    }
    i._isShown() && (t.stopPropagation(), i.hide(), s.focus());
  }
}
U.on(document, Hg, So, En.dataApiKeydownHandler);
U.on(document, Hg, Si, En.dataApiKeydownHandler);
U.on(document, Ug, En.clearMenus);
U.on(document, FT, En.clearMenus);
U.on(document, Ug, So, function(e) {
  e.preventDefault(), En.getOrCreateInstance(this).toggle();
});
Ht(En);
const jg = "backdrop", sC = "fade", pp = "show", hp = `mousedown.bs.${jg}`, iC = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, aC = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Kg extends Bs {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return iC;
  }
  static get DefaultType() {
    return aC;
  }
  static get NAME() {
    return jg;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      wt(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Fs(n), n.classList.add(pp), this._emulateAnimation(() => {
      wt(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      wt(t);
      return;
    }
    this._getElement().classList.remove(pp), this._emulateAnimation(() => {
      this.dispose(), wt(t);
    });
  }
  dispose() {
    this._isAppended && (U.off(this._element, hp), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(sC), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = so(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), U.on(t, hp, () => {
      wt(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Dg(t, this._getElement(), this._config.isAnimated);
  }
}
const lC = "focustrap", uC = "bs.focustrap", Gi = `.${uC}`, cC = `focusin${Gi}`, fC = `keydown.tab${Gi}`, dC = "Tab", pC = "forward", mp = "backward", hC = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, mC = {
  autofocus: "boolean",
  trapElement: "element"
};
class Wg extends Bs {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return hC;
  }
  static get DefaultType() {
    return mC;
  }
  static get NAME() {
    return lC;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), U.off(document, Gi), U.on(document, cC, (t) => this._handleFocusin(t)), U.on(document, fC, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, U.off(document, Gi));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: n
    } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target))
      return;
    const o = ie.focusableChildren(n);
    o.length === 0 ? n.focus() : this._lastTabNavDirection === mp ? o[o.length - 1].focus() : o[0].focus();
  }
  _handleKeydown(t) {
    t.key === dC && (this._lastTabNavDirection = t.shiftKey ? mp : pC);
  }
}
const _p = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", gp = ".sticky-top", ti = "padding-right", Ep = "margin-right";
class au {
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
    this._disableOverFlow(), this._setElementAttributes(this._element, ti, (n) => n + t), this._setElementAttributes(_p, ti, (n) => n + t), this._setElementAttributes(gp, Ep, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, ti), this._resetElementAttributes(_p, ti), this._resetElementAttributes(gp, Ep);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, n, o) {
    const r = this.getWidth(), s = (i) => {
      if (i !== this._element && window.innerWidth > i.clientWidth + r)
        return;
      this._saveInitialAttribute(i, n);
      const a = window.getComputedStyle(i).getPropertyValue(n);
      i.style.setProperty(n, `${o(Number.parseFloat(a))}px`);
    };
    this._applyManipulationCallback(t, s);
  }
  _saveInitialAttribute(t, n) {
    const o = t.style.getPropertyValue(n);
    o && Mn.setDataAttribute(t, n, o);
  }
  _resetElementAttributes(t, n) {
    const o = (r) => {
      const s = Mn.getDataAttribute(r, n);
      if (s === null) {
        r.style.removeProperty(n);
        return;
      }
      Mn.removeDataAttribute(r, n), r.style.setProperty(n, s);
    };
    this._applyManipulationCallback(t, o);
  }
  _applyManipulationCallback(t, n) {
    if (Ln(t)) {
      n(t);
      return;
    }
    for (const o of ie.find(t, this._element))
      n(o);
  }
}
const _C = "modal", gC = "bs.modal", Ut = `.${gC}`, EC = ".data-api", vC = "Escape", yC = `hide${Ut}`, bC = `hidePrevented${Ut}`, zg = `hidden${Ut}`, qg = `show${Ut}`, wC = `shown${Ut}`, OC = `resize${Ut}`, AC = `click.dismiss${Ut}`, SC = `mousedown.dismiss${Ut}`, NC = `keydown.dismiss${Ut}`, TC = `click${Ut}${EC}`, vp = "modal-open", CC = "fade", yp = "show", rl = "modal-static", DC = ".modal.show", xC = ".modal-dialog", RC = ".modal-body", kC = '[data-bs-toggle="modal"]', $C = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, IC = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class ao extends nn {
  constructor(t, n) {
    super(t, n), this._dialog = ie.findOne(xC, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new au(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return $C;
  }
  static get DefaultType() {
    return IC;
  }
  static get NAME() {
    return _C;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || U.trigger(this._element, qg, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(vp), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || U.trigger(this._element, yC).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(yp), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    U.off(window, Ut), U.off(this._dialog, Ut), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Kg({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new Wg({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const n = ie.findOne(RC, this._dialog);
    n && (n.scrollTop = 0), Fs(this._element), this._element.classList.add(yp);
    const o = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, U.trigger(this._element, wC, {
        relatedTarget: t
      });
    };
    this._queueCallback(o, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    U.on(this._element, NC, (t) => {
      if (t.key === vC) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), U.on(window, OC, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), U.on(this._element, SC, (t) => {
      U.one(this._element, AC, (n) => {
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
      document.body.classList.remove(vp), this._resetAdjustments(), this._scrollBar.reset(), U.trigger(this._element, zg);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(CC);
  }
  _triggerBackdropTransition() {
    if (U.trigger(this._element, bC).defaultPrevented)
      return;
    const n = this._element.scrollHeight > document.documentElement.clientHeight, o = this._element.style.overflowY;
    o === "hidden" || this._element.classList.contains(rl) || (n || (this._element.style.overflowY = "hidden"), this._element.classList.add(rl), this._queueCallback(() => {
      this._element.classList.remove(rl), this._queueCallback(() => {
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
      const r = Bt() ? "paddingLeft" : "paddingRight";
      this._element.style[r] = `${n}px`;
    }
    if (!o && t) {
      const r = Bt() ? "paddingRight" : "paddingLeft";
      this._element.style[r] = `${n}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, n) {
    return this.each(function() {
      const o = ao.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof o[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        o[t](n);
      }
    });
  }
}
U.on(document, TC, kC, function(e) {
  const t = ie.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), U.one(t, qg, (r) => {
    r.defaultPrevented || U.one(t, zg, () => {
      Ir(this) && this.focus();
    });
  });
  const n = ie.findOne(DC);
  n && ao.getInstance(n).hide(), ao.getOrCreateInstance(t).toggle(this);
});
Sa(ao);
Ht(ao);
const PC = "offcanvas", VC = "bs.offcanvas", Kn = `.${VC}`, Gg = ".data-api", LC = `load${Kn}${Gg}`, MC = "Escape", bp = "show", wp = "showing", Op = "hiding", FC = "offcanvas-backdrop", Yg = ".offcanvas.show", BC = `show${Kn}`, UC = `shown${Kn}`, HC = `hide${Kn}`, Ap = `hidePrevented${Kn}`, Xg = `hidden${Kn}`, jC = `resize${Kn}`, KC = `click${Kn}${Gg}`, WC = `keydown.dismiss${Kn}`, zC = '[data-bs-toggle="offcanvas"]', qC = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, GC = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class lo extends nn {
  constructor(t, n) {
    super(t, n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return qC;
  }
  static get DefaultType() {
    return GC;
  }
  static get NAME() {
    return PC;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || U.trigger(this._element, BC, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new au().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(wp);
    const o = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(bp), this._element.classList.remove(wp), U.trigger(this._element, UC, {
        relatedTarget: t
      });
    };
    this._queueCallback(o, this._element, !0);
  }
  hide() {
    if (!this._isShown || U.trigger(this._element, HC).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Op), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(bp, Op), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new au().reset(), U.trigger(this._element, Xg);
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
        U.trigger(this._element, Ap);
        return;
      }
      this.hide();
    }, n = !!this._config.backdrop;
    return new Kg({
      className: FC,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null
    });
  }
  _initializeFocusTrap() {
    return new Wg({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    U.on(this._element, WC, (t) => {
      if (t.key === MC) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        U.trigger(this._element, Ap);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = lo.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
U.on(document, KC, zC, function(e) {
  const t = ie.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), io(this))
    return;
  U.one(t, Xg, () => {
    Ir(this) && this.focus();
  });
  const n = ie.findOne(Yg);
  n && n !== t && lo.getInstance(n).hide(), lo.getOrCreateInstance(t).toggle(this);
});
U.on(window, LC, () => {
  for (const e of ie.find(Yg))
    lo.getOrCreateInstance(e).show();
});
U.on(window, jC, () => {
  for (const e of ie.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && lo.getOrCreateInstance(e).hide();
});
Sa(lo);
Ht(lo);
const YC = /^aria-[\w-]*$/i, Jg = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", YC],
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
}, XC = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), JC = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, QC = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? XC.has(n) ? !!JC.test(e.nodeValue) : !0 : t.filter((o) => o instanceof RegExp).some((o) => o.test(n));
};
function ZC(e, t, n) {
  if (!e.length)
    return e;
  if (n && typeof n == "function")
    return n(e);
  const r = new window.DOMParser().parseFromString(e, "text/html"), s = [].concat(...r.body.querySelectorAll("*"));
  for (const i of s) {
    const a = i.nodeName.toLowerCase();
    if (!Object.keys(t).includes(a)) {
      i.remove();
      continue;
    }
    const l = [].concat(...i.attributes), f = [].concat(t["*"] || [], t[a] || []);
    for (const u of l)
      QC(u, f) || i.removeAttribute(u.nodeName);
  }
  return r.body.innerHTML;
}
const eD = "TemplateFactory", tD = {
  allowList: Jg,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, nD = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, oD = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class rD extends Bs {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return tD;
  }
  static get DefaultType() {
    return nD;
  }
  static get NAME() {
    return eD;
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
    for (const [r, s] of Object.entries(this._config.content))
      this._setContent(t, s, r);
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
      }, oD);
  }
  _setContent(t, n, o) {
    const r = ie.findOne(o, t);
    if (r) {
      if (n = this._resolvePossibleFunction(n), !n) {
        r.remove();
        return;
      }
      if (Ln(n)) {
        this._putElementInTemplate(so(n), r);
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
    return this._config.sanitize ? ZC(t, this._config.allowList, this._config.sanitizeFn) : t;
  }
  _resolvePossibleFunction(t) {
    return wt(t, [void 0, this]);
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      n.innerHTML = "", n.append(t);
      return;
    }
    n.textContent = t.textContent;
  }
}
const sD = "tooltip", iD = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), sl = "fade", aD = "modal", ni = "show", lD = ".tooltip-inner", Sp = `.${aD}`, Np = "hide.bs.modal", Wr = "hover", il = "focus", al = "click", uD = "manual", cD = "hide", fD = "hidden", dD = "show", pD = "shown", hD = "inserted", mD = "click", _D = "focusin", gD = "focusout", ED = "mouseenter", vD = "mouseleave", yD = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Bt() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Bt() ? "right" : "left"
}, bD = {
  allowList: Jg,
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
}, wD = {
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
class Wo extends nn {
  constructor(t, n) {
    if (typeof Ag > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
    super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return bD;
  }
  static get DefaultType() {
    return wD;
  }
  static get NAME() {
    return sD;
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
    clearTimeout(this._timeout), U.off(this._element.closest(Sp), Np, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = U.trigger(this._element, this.constructor.eventName(dD)), o = (Tg(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !o)
      return;
    this._disposePopper();
    const r = this._getTipElement();
    this._element.setAttribute("aria-describedby", r.getAttribute("id"));
    const {
      container: s
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(r), U.trigger(this._element, this.constructor.eventName(hD))), this._popper = this._createPopper(r), r.classList.add(ni), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        U.on(a, "mouseover", zi);
    const i = () => {
      U.trigger(this._element, this.constructor.eventName(pD)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(i, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || U.trigger(this._element, this.constructor.eventName(cD)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(ni), "ontouchstart" in document.documentElement)
      for (const r of [].concat(...document.body.children))
        U.off(r, "mouseover", zi);
    this._activeTrigger[al] = !1, this._activeTrigger[il] = !1, this._activeTrigger[Wr] = !1, this._isHovered = null;
    const o = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), U.trigger(this._element, this.constructor.eventName(fD)));
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
    n.classList.remove(sl, ni), n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const o = u1(this.constructor.NAME).toString();
    return n.setAttribute("id", o), this._isAnimated() && n.classList.add(sl), n;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new rD({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [lD]: this._getTitle()
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
    return this._config.animation || this.tip && this.tip.classList.contains(sl);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(ni);
  }
  _createPopper(t) {
    const n = wt(this._config.placement, [this, t, this._element]), o = yD[n.toUpperCase()];
    return ac(this._element, t, this._getPopperConfig(o));
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((n) => Number.parseInt(n, 10)) : typeof t == "function" ? (n) => t(n, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return wt(t, [this._element, this._element]);
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
      ...wt(this._config.popperConfig, [void 0, n])
    };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const n of t)
      if (n === "click")
        U.on(this._element, this.constructor.eventName(mD), this._config.selector, (o) => {
          const r = this._initializeOnDelegatedTarget(o);
          r._activeTrigger[al] = !(r._isShown() && r._activeTrigger[al]), r.toggle();
        });
      else if (n !== uD) {
        const o = n === Wr ? this.constructor.eventName(ED) : this.constructor.eventName(_D), r = n === Wr ? this.constructor.eventName(vD) : this.constructor.eventName(gD);
        U.on(this._element, o, this._config.selector, (s) => {
          const i = this._initializeOnDelegatedTarget(s);
          i._activeTrigger[s.type === "focusin" ? il : Wr] = !0, i._enter();
        }), U.on(this._element, r, this._config.selector, (s) => {
          const i = this._initializeOnDelegatedTarget(s);
          i._activeTrigger[s.type === "focusout" ? il : Wr] = i._element.contains(s.relatedTarget), i._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, U.on(this._element.closest(Sp), Np, this._hideModalHandler);
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
    const n = Mn.getDataAttributes(this._element);
    for (const o of Object.keys(n))
      iD.has(o) && delete n[o];
    return t = {
      ...n,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : so(t.container), typeof t.delay == "number" && (t.delay = {
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
      const n = Wo.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Ht(Wo);
const OD = "popover", AD = ".popover-header", SD = ".popover-body", ND = {
  ...Wo.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, TD = {
  ...Wo.DefaultType,
  content: "(null|string|element|function)"
};
class fc extends Wo {
  // Getters
  static get Default() {
    return ND;
  }
  static get DefaultType() {
    return TD;
  }
  static get NAME() {
    return OD;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [AD]: this._getTitle(),
      [SD]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = fc.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Ht(fc);
const CD = "scrollspy", DD = "bs.scrollspy", dc = `.${DD}`, xD = ".data-api", RD = `activate${dc}`, Tp = `click${dc}`, kD = `load${dc}${xD}`, $D = "dropdown-item", Zo = "active", ID = '[data-bs-spy="scroll"]', ll = "[href]", PD = ".nav, .list-group", Cp = ".nav-link", VD = ".nav-item", LD = ".list-group-item", MD = `${Cp}, ${VD} > ${Cp}, ${LD}`, FD = ".dropdown", BD = ".dropdown-toggle", UD = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, HD = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class Ca extends nn {
  constructor(t, n) {
    super(t, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return UD;
  }
  static get DefaultType() {
    return HD;
  }
  static get NAME() {
    return CD;
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
    return t.target = so(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (U.off(this._config.target, Tp), U.on(this._config.target, Tp, ll, (t) => {
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
    const n = (i) => this._targetLinks.get(`#${i.target.id}`), o = (i) => {
      this._previousScrollData.visibleEntryTop = i.target.offsetTop, this._process(n(i));
    }, r = (this._rootElement || document.documentElement).scrollTop, s = r >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = r;
    for (const i of t) {
      if (!i.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(n(i));
        continue;
      }
      const a = i.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (s && a) {
        if (o(i), !r)
          return;
        continue;
      }
      !s && !a && o(i);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const t = ie.find(ll, this._config.target);
    for (const n of t) {
      if (!n.hash || io(n))
        continue;
      const o = ie.findOne(decodeURI(n.hash), this._element);
      Ir(o) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, o));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Zo), this._activateParents(t), U.trigger(this._element, RD, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains($D)) {
      ie.findOne(BD, t.closest(FD)).classList.add(Zo);
      return;
    }
    for (const n of ie.parents(t, PD))
      for (const o of ie.prev(n, MD))
        o.classList.add(Zo);
  }
  _clearActiveClass(t) {
    t.classList.remove(Zo);
    const n = ie.find(`${ll}.${Zo}`, t);
    for (const o of n)
      o.classList.remove(Zo);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ca.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
U.on(window, kD, () => {
  for (const e of ie.find(ID))
    Ca.getOrCreateInstance(e);
});
Ht(Ca);
const jD = "tab", KD = "bs.tab", zo = `.${KD}`, WD = `hide${zo}`, zD = `hidden${zo}`, qD = `show${zo}`, GD = `shown${zo}`, YD = `click${zo}`, XD = `keydown${zo}`, JD = `load${zo}`, QD = "ArrowLeft", Dp = "ArrowRight", ZD = "ArrowUp", xp = "ArrowDown", ul = "Home", Rp = "End", No = "active", kp = "fade", cl = "show", ex = "dropdown", Qg = ".dropdown-toggle", tx = ".dropdown-menu", fl = `:not(${Qg})`, nx = '.list-group, .nav, [role="tablist"]', ox = ".nav-item, .list-group-item", rx = `.nav-link${fl}, .list-group-item${fl}, [role="tab"]${fl}`, Zg = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', dl = `${rx}, ${Zg}`, sx = `.${No}[data-bs-toggle="tab"], .${No}[data-bs-toggle="pill"], .${No}[data-bs-toggle="list"]`;
class Nr extends nn {
  constructor(t) {
    super(t), this._parent = this._element.closest(nx), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), U.on(this._element, XD, (n) => this._keydown(n)));
  }
  // Getters
  static get NAME() {
    return jD;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), o = n ? U.trigger(n, WD, {
      relatedTarget: t
    }) : null;
    U.trigger(t, qD, {
      relatedTarget: n
    }).defaultPrevented || o && o.defaultPrevented || (this._deactivate(n, t), this._activate(t, n));
  }
  // Private
  _activate(t, n) {
    if (!t)
      return;
    t.classList.add(No), this._activate(ie.getElementFromSelector(t));
    const o = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(cl);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), U.trigger(t, GD, {
        relatedTarget: n
      });
    };
    this._queueCallback(o, t, t.classList.contains(kp));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(No), t.blur(), this._deactivate(ie.getElementFromSelector(t));
    const o = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(cl);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), U.trigger(t, zD, {
        relatedTarget: n
      });
    };
    this._queueCallback(o, t, t.classList.contains(kp));
  }
  _keydown(t) {
    if (![QD, Dp, ZD, xp, ul, Rp].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((r) => !io(r));
    let o;
    if ([ul, Rp].includes(t.key))
      o = n[t.key === ul ? 0 : n.length - 1];
    else {
      const r = [Dp, xp].includes(t.key);
      o = lc(n, t.target, r, !0);
    }
    o && (o.focus({
      preventScroll: !0
    }), Nr.getOrCreateInstance(o).show());
  }
  _getChildren() {
    return ie.find(dl, this._parent);
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
    const n = ie.getElementFromSelector(t);
    n && (this._setAttributeIfNotExists(n, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, n) {
    const o = this._getOuterElement(t);
    if (!o.classList.contains(ex))
      return;
    const r = (s, i) => {
      const a = ie.findOne(s, o);
      a && a.classList.toggle(i, n);
    };
    r(Qg, No), r(tx, cl), o.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, o) {
    t.hasAttribute(n) || t.setAttribute(n, o);
  }
  _elemIsActive(t) {
    return t.classList.contains(No);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(dl) ? t : ie.findOne(dl, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(ox) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Nr.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
U.on(document, YD, Zg, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !io(this) && Nr.getOrCreateInstance(this).show();
});
U.on(window, JD, () => {
  for (const e of ie.find(sx))
    Nr.getOrCreateInstance(e);
});
Ht(Nr);
const ix = "toast", ax = "bs.toast", po = `.${ax}`, lx = `mouseover${po}`, ux = `mouseout${po}`, cx = `focusin${po}`, fx = `focusout${po}`, dx = `hide${po}`, px = `hidden${po}`, hx = `show${po}`, mx = `shown${po}`, _x = "fade", $p = "hide", oi = "show", ri = "showing", gx = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Ex = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class js extends nn {
  constructor(t, n) {
    super(t, n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return Ex;
  }
  static get DefaultType() {
    return gx;
  }
  static get NAME() {
    return ix;
  }
  // Public
  show() {
    if (U.trigger(this._element, hx).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(_x);
    const n = () => {
      this._element.classList.remove(ri), U.trigger(this._element, mx), this._maybeScheduleHide();
    };
    this._element.classList.remove($p), Fs(this._element), this._element.classList.add(oi, ri), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || U.trigger(this._element, dx).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add($p), this._element.classList.remove(ri, oi), U.trigger(this._element, px);
    };
    this._element.classList.add(ri), this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(oi), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(oi);
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
    U.on(this._element, lx, (t) => this._onInteraction(t, !0)), U.on(this._element, ux, (t) => this._onInteraction(t, !1)), U.on(this._element, cx, (t) => this._onInteraction(t, !0)), U.on(this._element, fx, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = js.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Sa(js);
Ht(js);
var vx = Object.defineProperty, yx = (e, t, n) => t in e ? vx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, zt = (e, t, n) => yx(e, typeof t != "symbol" ? t + "" : t, n);
const bx = { class: "toast-header" }, wx = ["textContent"], Ox = ["textContent"], Ax = { class: "toast-body" }, Sx = ["textContent"], Nx = /* @__PURE__ */ Re({
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
    const o = e, r = n, { visible: s, animation: i, autohide: a, delay: l } = Qt(o), f = ue(), u = ue();
    hn(s, (N) => {
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
    function h() {
      f.value.isShown();
    }
    function m() {
      f.value.getOrCreateInstance();
    }
    function g() {
      f.value.getInstance();
    }
    function E() {
      f.value && (s.value === !0 ? c() : d());
    }
    function O() {
      r("hide", f.value);
    }
    function y() {
      r("hidden", f.value);
    }
    function R() {
      r("show", f.value);
    }
    async function S() {
      r("shown", f.value);
    }
    const T = { show: c, hide: d, dispose: p, isShown: h, getOrCreateInstance: m, getInstance: g };
    return t({ ...T }), jn(() => {
      u.value.addEventListener("hide.bs.toast", O), u.value.addEventListener("hidden.bs.toast", y), u.value.addEventListener("show.bs.toast", R), u.value.addEventListener("shown.bs.toast", S), f.value = new js(u.value, {
        animation: i.value,
        autohide: a.value,
        delay: l.value
      }), E();
    }), (N, V) => (q(), Z("div", {
      ref_key: "toastRef",
      ref: u,
      class: Ve(["toast", [N.variant ? `text-bg-${N.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      ye(N.$slots, "header", qe(je({ ...T })), () => [
        b("div", bx, [
          ye(N.$slots, "title", qe(je({ ...T })), () => [
            b("strong", {
              class: "me-auto",
              textContent: $e(N.title)
            }, null, 8, wx)
          ], !0),
          ye(N.$slots, "subtitle", qe(je({ ...T })), () => [
            b("small", {
              textContent: $e(N.subtitle)
            }, null, 8, Ox)
          ], !0),
          b("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: d
          })
        ])
      ], !0),
      ye(N.$slots, "body", qe(je({ ...T })), () => [
        b("div", Ax, [
          ye(N.$slots, "default", qe(je({ ...T })), () => [
            b("span", {
              textContent: $e(N.body)
            }, null, 8, Sx)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), Sn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, eE = /* @__PURE__ */ Sn(Nx, [["__scopeId", "data-v-c0cdbae8"]]);
function Tx() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16);
  });
}
const Cx = { id: "toast-wrapper" };
let Ip;
const Dx = /* @__PURE__ */ Re({
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
    }, o = ue(/* @__PURE__ */ new Map());
    Ip = (s, i = "top right") => {
      const a = Tx(), l = { ...n, ...s, id: a };
      let f = o.value.get(i);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(l), o.value.set(i, f);
    };
    function r(s, i) {
      const a = o.value.get(s);
      a?.delete(i);
    }
    return t({ toast: Ip }), (s, i) => (q(), Tt(na, { to: "body" }, [
      b("div", Cx, [
        (q(!0), Z(Ce, null, At(o.value, ([a, l]) => (q(), Z("div", {
          key: a,
          class: Ve(["toast-group", `${a}`])
        }, [
          (q(!0), Z(Ce, null, At(l, (f, u) => (q(), Tt(eE, uo({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (c) => r(a, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), xx = /* @__PURE__ */ Sn(Dx, [["__scopeId", "data-v-786d1c50"]]), tE = () => {
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
var On = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(On || {});
const Tr = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(On).includes(n) || n == "" ? "" : `${t}${n}`;
}, Rx = { class: "modal-content" }, kx = { class: "modal-header" }, $x = ["innerHTML"], Ix = { class: "modal-body" }, Px = ["innerHTML"], Vx = { class: "modal-footer" }, Lx = ["innerHTML"], Mx = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const Fx = /* @__PURE__ */ Re({
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
    size: { default: On.STANDARD },
    btnSize: { default: On.SMALL },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["onShown", "onHidden"],
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      backdrop: r,
      keyboard: s,
      focus: i,
      disableOutsideClick: a,
      size: l,
      btnSize: f
    } = Qt(o), u = n, c = he(() => Tr(l.value, "modal-")), d = he(() => Tr(f.value, "btn-")), p = ue();
    let h;
    const m = An(), g = () => document.querySelectorAll(".modal.show").length, E = () => typeof window < "u" && window._managedModals ? window._managedModals : [], O = 1055, y = ue(O), R = () => {
      const Q = g();
      y.value = O + Q;
    };
    let S;
    const T = tE();
    function N() {
      return new Promise((Q, j) => {
        if (!p.value) return;
        T.removeStickyElements(), R(), p.value.classList.add("managed-modal");
        const ee = E(), le = ee.length + 1, We = {
          element: p.value,
          priority: le,
          instance: m
        };
        ee.push(We), p.value.addEventListener("shown.bs.modal", () => {
          k();
        }, { once: !0 }), h?.show(), S = Q, u("onShown", h);
      });
    }
    function V(Q = !0) {
      if (!p.value) return;
      const j = E(), ee = j.findIndex((le) => le.element === p.value);
      ee > -1 && j.splice(ee, 1), p.value.addEventListener("hidden.bs.modal", () => {
        p.value && (p.value.style.display = ""), k();
      }, { once: !0 }), h?.hide(), typeof S == "function" && S(Q), u("onHidden", h), T.restoreStickyElements();
    }
    function P() {
      h?.toggle();
    }
    const k = () => {
      const Q = E();
      if (Q.length === 0) return;
      Q.sort((ee, le) => ee.priority - le.priority);
      const j = Q[Q.length - 1];
      Q.forEach((ee) => {
        ee.element !== j.element ? ee.element.style.opacity = "0" : ee.element.style.opacity = "1";
      });
    };
    jn(() => {
      h = new ao(p.value, {
        backdrop: r?.value,
        keyboard: s.value,
        focus: i.value
      }), p.value.classList.add("managed-modal"), sa(() => {
        o?.visible === !0 ? h?.show() : h?.hide();
      });
    });
    function $(Q) {
      r?.value !== "static" && V(!1);
    }
    function D() {
      V(!1);
    }
    function G() {
      V(!1);
    }
    function ce() {
      V(!0);
    }
    t({
      modal: h,
      show: N,
      hide: V,
      toggle: P,
      onHeaderCloseClicked: D,
      onCancelClicked: G,
      onOkCLicked: ce
    });
    const me = { show: N, hide: V, toggle: P, modal: h };
    return (Q, j) => (q(), Z("div", uo({
      ref_key: "modalElement",
      ref: p,
      class: "modal fade",
      tabindex: "-1"
    }, { ...Q.$attrs }, {
      onClick: gm($, ["self"]),
      style: { zIndex: y.value }
    }), [
      b("div", {
        class: Ve(["modal-dialog", c.value])
      }, [
        b("div", Rx, [
          ye(Q.$slots, "header", qe(je({ ...me })), () => [
            b("div", kx, [
              ye(Q.$slots, "title", qe(je({ ...me })), () => [
                b("h5", {
                  class: "modal-title",
                  innerHTML: Q.title
                }, null, 8, $x)
              ], !0),
              ye(Q.$slots, "header-close-button", qe(je({ ...me })), () => [
                b("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: D
                })
              ], !0)
            ])
          ], !0),
          b("div", Ix, [
            ye(Q.$slots, "default", qe(je({ ...me })), () => [
              b("span", { innerHTML: Q.body }, null, 8, Px)
            ], !0)
          ]),
          b("div", Vx, [
            ye(Q.$slots, "footer", qe(je({ ...me })), () => [
              Q.okOnly ? Fn("", !0) : (q(), Z("button", {
                key: 0,
                type: "button",
                class: Ve(["btn btn-secondary", d.value]),
                onClick: G
              }, [
                ye(Q.$slots, "button-cancel", qe(je({ ...me })), () => [
                  b("span", { innerHTML: Q.textCancel }, null, 8, Lx)
                ], !0)
              ], 2)),
              b("button", {
                type: "button",
                class: Ve(["btn btn-primary", d.value]),
                onClick: ce
              }, [
                ye(Q.$slots, "button-ok", qe(je({ ...me })), () => [
                  b("span", { innerHTML: Q.textOk }, null, 8, Mx)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), nE = /* @__PURE__ */ Sn(Fx, [["__scopeId", "data-v-b8ba4eaa"]]), Bx = /* @__PURE__ */ Re({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = ue(void 0), o = ue({});
    function r(i = {}) {
      var a;
      return i.okOnly = !1, o.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function s(i = {}) {
      var a;
      return i.okOnly = !0, o.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: r, alert: s }), (i, a) => (q(), Tt(na, { to: "body" }, [
      Ae(nE, uo({
        ref_key: "modalRef",
        ref: n
      }, { ...o.value }), null, 16)
    ]));
  }
}), Ux = {
  "data-header": "",
  class: "border-bottom"
}, Hx = { class: "d-flex gap-2 p-2" }, jx = { class: "p-2" }, Kx = {
  "data-footer": "",
  class: "border-top p-2"
}, Wx = { class: "buttons" }, zx = /* @__PURE__ */ Re({
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
    size: { default: On.STANDARD },
    btnSize: { default: On.SMALL },
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, { backdrop: o, disableOutsideClick: r, modal: s, size: i, btnSize: a } = Qt(n), l = () => document.querySelectorAll("dialog[open]").length, f = 1056, u = ue(f), c = ue(!1), d = ue(!1), p = ue(!1), h = ue(), m = ue(!1), g = he(() => Tr(i.value, "modal-")), E = he(() => Tr(a.value, "btn-")), O = he(() => ({
      opening: c.value,
      closing: d.value,
      "no-backdrop": o.value === !1,
      static: m.value
    }));
    let y = null;
    const R = () => {
      const D = l();
      u.value = f + D;
    }, S = tE(), T = async () => (R(), S.removeStickyElements(), c.value = !0, h.value.addEventListener(
      "animationend",
      () => {
        c.value = !1, p.value = !0;
      },
      { once: !0 }
    ), s.value === !0 ? h.value.showModal() : h.value.show(), new Promise((D, G) => {
      y = D;
    })), N = async (D = !1) => {
      d.value = !0, h.value.addEventListener(
        "animationend",
        () => {
          h.value.close(), d.value = !1, p.value = !1, typeof y == "function" && y(D), y = null, S.restoreStickyElements();
        },
        { once: !0 }
      );
    }, V = async () => {
      p.value === !0 ? N() : T();
    }, P = () => {
      m.value = !0, setTimeout(() => {
        m.value = !1;
      }, 200);
    }, k = () => {
      if (o.value === "static" || r.value === !0) {
        P();
        return;
      }
      N(!1);
    };
    if (s.value === !0) {
      let D = function(ce) {
        if (o.value === "static" || r.value === !0) {
          P();
          return;
        }
        ce.target === h.value && N(!1);
      };
      const G = new AbortController();
      jn(() => {
        document.addEventListener("click", (ce) => {
          D(ce);
        }, { signal: G.signal });
      }), ra(() => {
        G.abort();
      });
    }
    const $ = { show: T, hide: N, toggle: V, dialog: h };
    return t({
      show: T,
      hide: N,
      toggle: V
    }), (D, G) => (q(), Z("div", {
      class: "dialog-wrapper",
      style: Cs({ zIndex: u.value })
    }, [
      b("div", {
        class: "backdrop",
        onClick: k
      }),
      b("dialog", {
        ref_key: "dialog",
        ref: h,
        class: Ve(O.value)
      }, [
        b("div", {
          class: Ve(["content", g.value])
        }, [
          ye(D.$slots, "header", qe(je({ ...$ })), () => [
            b("div", Ux, [
              b("div", Hx, [
                ye(D.$slots, "title", qe(je({ ...$ })), () => [
                  et($e(D.title), 1)
                ], !0),
                ye(D.$slots, "header-close-button", {}, () => [
                  b("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: G[0] || (G[0] = (ce) => N(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          b("div", jx, [
            ye(D.$slots, "default", qe(je({ ...$ })), () => [
              et($e(D.body), 1)
            ], !0)
          ]),
          ye(D.$slots, "footer", qe(je({ ...$ })), () => [
            b("div", Kx, [
              b("div", Wx, [
                D.okOnly ? Fn("", !0) : (q(), Z("button", {
                  key: 0,
                  type: "button",
                  class: Ve(["btn btn-secondary", E.value]),
                  onClick: G[1] || (G[1] = (ce) => N(!1))
                }, [
                  ye(D.$slots, "textCancel", qe(je({ ...$ })), () => [
                    et($e(D.textCancel), 1)
                  ], !0)
                ], 2)),
                b("button", {
                  type: "button",
                  class: Ve(["btn btn-primary", E.value]),
                  onClick: G[2] || (G[2] = (ce) => N(!0))
                }, [
                  ye(D.$slots, "textOk", qe(je({ ...$ })), () => [
                    et($e(D.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), oE = /* @__PURE__ */ Sn(zx, [["__scopeId", "data-v-0990c791"]]), qx = /* @__PURE__ */ Re({
  __name: "DialogManager",
  setup(e, { expose: t }) {
    const n = ue(void 0), o = ue({});
    function r(i = {}) {
      var a;
      return i.okOnly = !1, o.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function s(i = {}) {
      var a;
      return i.okOnly = !0, o.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: r, alert: s }), (i, a) => (q(), Tt(na, { to: "body" }, [
      Ae(oE, uo({
        ref_key: "modalRef",
        ref: n
      }, { ...o.value }), null, 16)
    ]));
  }
}), Gx = { "data-first": "" }, Yx = ["disabled", "innerHTML"], Xx = { "data-prev": "" }, Jx = ["disabled", "innerHTML"], Qx = { key: 0 }, Zx = ["innerHTML"], eR = ["onClick"], tR = { "data-next": "" }, nR = ["disabled", "innerHTML"], oR = { "data-last": "" }, rR = ["disabled", "innerHTML"], sR = /* @__PURE__ */ Re({
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
    size: { default: On.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    function n(y, R = 0) {
      return [...Array(y).keys()].map((S) => S + R);
    }
    const o = t, r = e, { modelValue: s, maxVisibleButtons: i, hideEllipsis: a } = Qt(r), l = Math.floor(i.value / 2), f = he(() => {
      let y = i.value, R = s.value <= l ? 1 : s.value - l;
      return s.value >= d.value - l && (R = d.value - y + 1), R < 1 && (R = 1), d.value < y && (y = d.value), n(y, R);
    }), u = he(() => s.value <= 1), c = he(() => s.value >= d.value), d = he(() => {
      const { perPage: y, totalItems: R } = r;
      return Math.ceil(R / y);
    });
    sa(() => {
      d.value > 0 && s.value > d.value && o("update:modelValue", d.value);
    });
    function p(y) {
      const R = i.value - 1;
      return !(a.value === !0 || y === 0 && s.value - l - 1 <= 0 || y === R && s.value + l >= d.value || y > 0 && y < R);
    }
    function h(y) {
      y < 1 && (y = 1), y > d.value && (y = d.value), o("update:modelValue", y);
    }
    function m() {
      o("update:modelValue", 1);
    }
    function g() {
      o("update:modelValue", d.value);
    }
    function E() {
      let y = s.value - 1;
      y < 1 && (y = 1), o("update:modelValue", y);
    }
    function O() {
      let y = s.value + 1;
      y > d.value && (y = d.value), o("update:modelValue", y);
    }
    return (y, R) => (q(), Z("ul", {
      class: Ve(["pagination", y.size])
    }, [
      b("li", Gx, [
        b("button", {
          class: "",
          disabled: u.value,
          innerHTML: y.firstText,
          onClick: m
        }, null, 8, Yx)
      ]),
      b("li", Xx, [
        b("button", {
          class: "",
          disabled: u.value,
          innerHTML: y.prevText,
          onClick: E
        }, null, 8, Jx)
      ]),
      (q(!0), Z(Ce, null, At(f.value, (S, T) => (q(), Z(Ce, null, [
        p(T) ? (q(), Z("li", Qx, [
          b("button", {
            disabled: "",
            class: "",
            innerHTML: y.ellipsisText
          }, null, 8, Zx)
        ])) : (q(), Z("li", {
          key: 1,
          "data-prev": "",
          class: Ve({ active: y.modelValue === S })
        }, [
          b("button", {
            class: "",
            onClick: (N) => h(S)
          }, $e(S), 9, eR)
        ], 2))
      ], 64))), 256)),
      b("li", tR, [
        b("button", {
          class: "",
          disabled: c.value,
          innerHTML: y.nextText,
          onClick: O
        }, null, 8, nR)
      ]),
      b("li", oR, [
        b("button", {
          class: "",
          disabled: c.value,
          innerHTML: y.lastText,
          onClick: g
        }, null, 8, rR)
      ])
    ], 2));
  }
}), iR = /* @__PURE__ */ Sn(sR, [["__scopeId", "data-v-2bfd7085"]]), aR = { class: "d-inline" }, lR = { class: "fw-bold" }, uR = /* @__PURE__ */ Re({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { options: r } = Qt(n), s = he({
      get: () => n.modelValue,
      set: (i) => o("update:modelValue", i)
    });
    return (i, a) => {
      const l = en("b-dropdown-item"), f = en("b-dropdown");
      return q(), Tt(f, uo({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: Ot(() => [
          b("div", aR, [
            ye(i.$slots, "default", { selected: s.value }, () => [
              a[0] || (a[0] = b("span", null, "Per page: ", -1)),
              b("span", lR, $e(s.value), 1)
            ])
          ])
        ]),
        default: Ot(() => [
          (q(!0), Z(Ce, null, At(ve(r), (u, c) => (q(), Tt(l, {
            key: u,
            onClick: (d) => s.value = u,
            active: u === i.modelValue
          }, {
            default: Ot(() => [
              et($e(u), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), cR = ["value"], fR = /* @__PURE__ */ Re({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { options: r } = Qt(n), s = he({
      get: () => n.modelValue,
      set: (i) => o("update:modelValue", i)
    });
    return (i, a) => In((q(), Z("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (l) => s.value = l)
    }, [
      (q(!0), Z(Ce, null, At(ve(r), (l, f) => (q(), Z("option", {
        key: l,
        value: l
      }, $e(l), 9, cR))), 128))
    ], 512)), [
      [_m, s.value]
    ]);
  }
});
var bo = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(bo || {});
class dR {
  constructor(t, n = "ASC", o) {
    zt(this, "key"), zt(this, "direction"), zt(this, "sortFn"), this.key = t, this.direction = n, this.sortFn = o;
  }
}
const Pp = (e, t) => {
  const n = (a, l) => {
    let f = typeof a, u = typeof l;
    return f == "number" && f == u;
  }, o = (a, l) => a - l, r = (a, l) => (a = a ?? "", l = l ?? "", a.localeCompare(l)), s = (a, l) => n(a, l) ? o : r, i = [...t];
  return i.sort((a, l) => {
    let f = 0;
    for (let u of e) {
      let { key: c, direction: d, sortFn: p } = u, h = d === "ASC" ? 1 : -1, m = a[c], g = l[c];
      if (p = typeof p == "function" ? p : s(m, g), f = p(m, g, a, l, t, u, h) * h, f !== 0) return f;
    }
    return f;
  }), i;
}, pR = ["onClick"], hR = { class: "th-wrapper" }, mR = {
  key: 0,
  "data-sort-indicator": ""
}, _R = { class: "sort-index" }, gR = { class: "sort-direction" }, ER = ["onMouseover"], vR = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, yR = ["colspan"], bR = ["innerHTML"];
class pl {
  constructor(t = "", n = "", o = !1, r) {
    zt(this, "key"), zt(this, "label"), zt(this, "sortable"), zt(this, "sortFn"), this.key = t, this.label = n, this.sortable = o, this.sortFn = r;
  }
}
const wR = /* @__PURE__ */ Re({
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
      let g = [];
      for (const E of m)
        g = g.concat(Object.keys(E));
      return g = g.filter((E, O) => g.indexOf(E) == O), g;
    }, o = t, r = e, s = ue([]), { fields: i, items: a } = Qt(r), l = he(() => {
      if (r.externalSort || s.value.length == 0) return r.items;
      const m = [...r.items];
      return Pp(s.value, m);
    }), f = he(() => {
      let m = i.value, g = [];
      return m.length === 0 && (m = n([...a.value])), m.reduce((E, O, y) => {
        if (typeof O == "string")
          E.push(new pl(O, O));
        else if (O instanceof pl)
          E.push(O);
        else if (typeof O == "object") {
          const { key: R, label: S, sortable: T, sortFn: N } = O;
          E.push(new pl(R, S, T, N));
        }
        return E;
      }, g);
    });
    function u(m) {
      const g = s.value.findIndex((E) => E.key === m.key);
      return g < 0 ? "" : g + 1;
    }
    function c(m) {
      const g = s.value.findIndex((O) => O.key === m.key);
      if (g < 0) return "fas fa-sort";
      const E = s.value[g];
      return E.direction === bo.ASC ? "fas fa-sort-up" : E.direction === bo.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function d(m) {
      const { key: g } = m, E = s.value.findIndex((O) => O.key === g);
      if (E < 0) {
        const O = new dR(g, bo.ASC, m.sortFn);
        s.value.push(O);
      } else {
        const O = s.value[E], y = O.direction;
        y === bo.ASC ? O.direction = bo.DESC : y === bo.DESC && s.value.splice(E, 1);
      }
      o("sort", s.value, Pp);
    }
    function p(m, g, E, O) {
      o("onMouseOverCell", m, g, E, O);
    }
    let h = ue(null);
    return jn(() => {
      h.value = An();
    }), (m, g) => (q(), Z("table", uo({ ...m.$attrs }, {
      class: { striped: m.striped, hover: m.hover }
    }), [
      b("thead", null, [
        (q(!0), Z(Ce, null, At(f.value, (E) => (q(), Z("th", {
          key: `thead-${E.key}`,
          class: Ve({ sortable: E.sortable }),
          onClick: (O) => E.sortable && d(E)
        }, [
          b("span", hR, [
            ye(m.$slots, `head(${E.key})`, {
              field: E,
              data: ve(h),
              value: E.label
            }, () => [
              et($e(E.label), 1)
            ], !0),
            E.sortable ? (q(), Z("span", mR, [
              b("span", _R, $e(u(E)), 1),
              b("span", gR, [
                b("i", {
                  class: Ve(c(E))
                }, null, 2)
              ])
            ])) : Fn("", !0)
          ])
        ], 10, pR))), 128))
      ]),
      b("tbody", null, [
        (q(!0), Z(Ce, null, At(l.value, (E, O) => (q(), Z(Ce, {
          key: `trow-${E?.id ?? O}`
        }, [
          ye(m.$slots, "row", {
            item: E,
            index: O,
            colspan: f.value.length
          }, void 0, !0),
          b("tr", null, [
            (q(!0), Z(Ce, null, At(f.value, (y) => (q(), Z("td", {
              key: `tcell-${y.key + (E?.id ?? O)}`,
              class: Ve({ [`tcell-${y?.key}`]: !0 }),
              onMouseover: (R) => p(R, E, O, y)
            }, [
              ye(m.$slots, `cell(${y?.key})`, {
                data: ve(h),
                item: E,
                field: y,
                value: E[y?.key]
              }, () => [
                et($e(E[y?.key]), 1)
              ], !0)
            ], 42, ER))), 128))
          ])
        ], 64))), 128))
      ]),
      b("tfoot", null, [
        ye(m.$slots, "footer", { data: ve(h) }, void 0, !0)
      ]),
      m.showEmpty && l.value.length === 0 ? (q(), Z("tr", vR, [
        b("td", {
          colspan: f.value.length
        }, [
          ye(m.$slots, "empty", {
            items: l.value,
            data: ve(h),
            fields: f.value
          }, () => [
            b("span", { innerHTML: m.emptyText }, null, 8, bR)
          ], !0)
        ], 8, yR)
      ])) : Fn("", !0)
    ], 16));
  }
}), OR = /* @__PURE__ */ Sn(wR, [["__scopeId", "data-v-b1e9b5de"]]);
var rE = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(rE || {});
const AR = { class: "d-inline-block position-relative" }, SR = ["disabled"], Vp = "data-prevent-close", NR = /* @__PURE__ */ Re({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: rE.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    menuEnd: { type: Boolean, default: !1 },
    size: { default: On.STANDARD },
    disabled: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: t, emit: n }) {
    const o = ue(), r = e, s = ue(), i = ue(!1), a = ue(r.variant), l = ue(r.centered), f = ue(r.dropup), u = ue(r.dropend), c = ue(r.dropstart), d = ue(r.menuEnd), p = n, h = he(() => {
      const V = [];
      return a != null && a.value && V.push(`btn-${a.value}`), r.size && V.push(`btn-${r.size}`), V;
    }), m = he(() => {
      const V = [];
      return l != null && l.value && V.push("dropdown-center"), f != null && f.value && V.push("dropup"), c != null && c.value && V.push("dropstart"), !(c != null && c.value) && u != null && u.value && V.push("dropend"), V.length === 0 && V.push("dropdown"), V.unshift("btn-group"), V;
    }), g = he(() => {
      const V = [];
      return i.value && V.push("show"), d.value && V.push("dropdown-menu-end"), V;
    }), E = () => {
      if (!i.value) return;
      const V = s.value.getBoundingClientRect(), P = o.value.getBoundingClientRect(), k = window.innerHeight - V.bottom, $ = V.top, D = window.innerWidth - V.right, G = V.left;
      f.value = k < P.height && $ >= P.height, d.value = D < P.width && G >= P.width;
    };
    async function O() {
      i.value = !0, await hr(), E();
    }
    function y() {
      i.value = !1;
    }
    function R(V) {
      i.value ? y() : O();
    }
    function S(V) {
      const { target: P } = V;
      P?.closest(`[${Vp}],[${Vp}=true]`) || y();
    }
    function T() {
      i.value && y();
    }
    hn(i, (V, P) => {
      typeof P > "u" || V !== P && (p("toggle", { show: V }), V === !0 ? p("open", { show: V }) : p("close", { show: V }));
    }, { immediate: !0 });
    const N = {
      show: i,
      disabled: r.disabled,
      buttonClasses: h,
      onButtonClicked: R,
      onMenuClicked: S,
      onClickOutside: T,
      open: O,
      close: y
    };
    return t({
      ...N
    }), (V, P) => {
      const k = Hv("click-outside");
      return q(), Z("div", {
        ref_key: "dropDownRef",
        ref: s,
        class: Ve([m.value, "dropdown-wrapper"])
      }, [
        In((q(), Z("div", AR, [
          ye(V.$slots, "header", qe(je({ ...N })), () => [
            b("button", {
              class: Ve(["btn dropdown-toggle", h.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: R,
              disabled: V.disabled
            }, [
              ye(V.$slots, "button", qe(je({ ...N })), () => [
                et($e(V.text), 1)
              ], !0)
            ], 10, SR)
          ], !0),
          b("ul", {
            ref_key: "dropDownMenuRef",
            ref: o,
            class: Ve(["dropdown-menu", g.value]),
            onClick: S
          }, [
            ye(V.$slots, "default", qe(je({ ...N })), void 0, !0)
          ], 2)
        ])), [
          [k, T]
        ])
      ], 2);
    };
  }
}), TR = /* @__PURE__ */ Sn(NR, [["__scopeId", "data-v-4910c394"]]), CR = ["data-prevent-close"], DR = /* @__PURE__ */ Re({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = Qt(t);
    return (o, r) => (q(), Z("li", {
      "data-prevent-close": ve(n) ? "" : null
    }, [
      b("span", {
        class: Ve(["dropdown-item", { active: o.active }]),
        role: "button",
        tabindex: "0"
      }, [
        ye(o.$slots, "default")
      ], 2)
    ], 8, CR));
  }
}), xR = {}, RR = { "data-prevent-close": "" }, kR = { class: "dropdown-header" };
function $R(e, t) {
  return q(), Z("li", RR, [
    b("h6", kR, [
      ye(e.$slots, "default")
    ])
  ]);
}
const IR = /* @__PURE__ */ Sn(xR, [["render", $R]]), PR = {};
function VR(e, t) {
  return q(), Z("li", null, t[0] || (t[0] = [
    b("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const LR = /* @__PURE__ */ Sn(PR, [["render", VR]]), MR = {
  mounted(e, t, n, o) {
    new Wo(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, FR = (e, t) => {
  function n(s, i) {
    for (; s !== null; ) {
      if (s === i)
        return !0;
      s = s.parentNode;
    }
    return !1;
  }
  const o = new AbortController();
  function r(s, i) {
    document.addEventListener("click", function(a) {
      const l = a.target;
      s && (n(l, s) || i());
    }, { signal: o.signal });
  }
  return r(e, t), o;
}, BR = {
  mounted(e, t, n, o) {
    const r = t.value;
    FR(e, r);
  }
};
class lu {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
zt(lu, "list", /* @__PURE__ */ new Set());
const UR = { class: "drawer-content" }, HR = { class: "drawer-header" }, jR = ["innerHTML"], KR = { class: "drawer-body" }, WR = ["innerHTML"], zR = { class: "drawer-footer" }, qR = ["innerHTML"], GR = ["innerHTML"], YR = /* @__PURE__ */ Re({
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
    size: { default: On.STANDARD },
    btnSize: { default: On.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: o,
      keyboard: r,
      focus: s,
      size: i,
      btnSize: a
    } = Qt(n), l = he(() => Tr(i.value, "drawer-")), f = he(() => Tr(a.value, "btn-")), u = ue(), c = ue(!1), d = An();
    let p;
    async function h() {
      return c.value === !0 ? void 0 : new Promise((T, N) => {
        c.value = !0, p = T;
      });
    }
    function m(T = !0) {
      c.value = !1, typeof p == "function" && p(T);
    }
    function g() {
      c.value === !0 ? h() : m(!1);
    }
    function E(T) {
      o?.value !== "static" && m(!1);
    }
    function O() {
      m(!1);
    }
    function y() {
      m(!1);
    }
    function R() {
      m(!0);
    }
    function S() {
      c.value === !0 ? lu.add(d) : lu.delete(d);
    }
    return t({
      show: h,
      hide: m,
      toggle: g
    }), (T, N) => (q(), Tt(Yy, {
      onBeforeEnter: S,
      onAfterLeave: S
    }, {
      default: Ot(() => [
        c.value ? (q(), Z("div", uo({
          key: 0,
          ref_key: "drawerElement",
          ref: u,
          class: "drawer",
          tabindex: "-1"
        }, { ...T.$attrs }, {
          onClick: gm(E, ["self"])
        }), [
          b("div", {
            class: Ve(["drawer-dialog", l.value])
          }, [
            b("div", UR, [
              b("div", HR, [
                ye(T.$slots, "header", {}, () => [
                  b("h5", {
                    class: "drawer-title",
                    innerHTML: T.title
                  }, null, 8, jR)
                ], !0),
                b("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: O
                })
              ]),
              b("div", KR, [
                ye(T.$slots, "default", {}, () => [
                  b("span", { innerHTML: T.body }, null, 8, WR)
                ], !0)
              ]),
              b("div", zR, [
                ye(T.$slots, "footer", {}, () => [
                  T.okOnly ? Fn("", !0) : (q(), Z("button", {
                    key: 0,
                    type: "button",
                    class: Ve(["ms-auto btn btn-secondary", f.value]),
                    onClick: y
                  }, [
                    ye(T.$slots, "button-cancel", {}, () => [
                      b("span", { innerHTML: T.textCancel }, null, 8, qR)
                    ], !0)
                  ], 2)),
                  b("button", {
                    type: "button",
                    class: Ve(["btn btn-primary", f.value]),
                    onClick: R
                  }, [
                    ye(T.$slots, "button-ok", {}, () => [
                      b("span", { innerHTML: T.textOk }, null, 8, GR)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : Fn("", !0)
      ]),
      _: 3
    }));
  }
}), XR = /* @__PURE__ */ Sn(YR, [["__scopeId", "data-v-2e49e8cb"]]), Pt = "b", sE = "$toaster", JR = "$modalManager", QR = "$dialogManager";
class iE {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ca(Bx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
zt(iE, "component");
class aE {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ca(qx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
zt(aE, "component");
class lE {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ca(xx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
zt(lE, "component");
function ZR() {
  return mt(sE);
}
function ek(e) {
  e.component(`${Pt}-drawer`, XR), e.component(`${Pt}-modal`, nE), e.component(`${Pt}-dialog`, oE), e.component(`${Pt}-pagination`, iR), e.component(`${Pt}-pagination-dropdown`, uR), e.component(`${Pt}-pagination-select`, fR), e.component(`${Pt}-dropdown`, TR), e.component(`${Pt}-dropdown-item`, DR), e.component(`${Pt}-dropdown-header`, IR), e.component(`${Pt}-dropdown-divider`, LR), e.component(`${Pt}-table`, OR), e.component(`${Pt}-toast`, eE);
}
function tk(e) {
  e.directive("tooltip", MR), e.directive("click-outside", BR);
}
const nk = {
  install(e) {
    ek(e), tk(e);
    const t = lE.getComponent(), n = iE.getComponent(), o = aE.getComponent();
    e.provide(sE, t), e.provide(JR, n), e.provide(QR, o);
  }
}, Ks = /* @__PURE__ */ Bu("settings", () => {
  const e = Gu(), t = ZR(), n = Vo({
    fhir_system: null,
    fhir_systems: [],
    mapping_resources: [],
    selected_mapping_resources: [],
    selected_custom_mapping_resources: []
  }), o = ue(null), r = ue([]), s = ue([]), i = Vo({
    fetch: !1,
    save: !1
  }), a = async () => {
    try {
      i.fetch = !0;
      const m = (await Ki.getProjectSettings()).data ?? {};
      Object.assign(n, m), o.value = n.fhir_system, r.value = [...n.selected_mapping_resources], s.value = [...n.selected_custom_mapping_resources];
    } catch (h) {
      e.addError(h, "settingsStore"), console.error("Failed to load project settings:", h);
    } finally {
      i.fetch = !1;
    }
  }, l = (h, m) => {
    const g = { name: h, resourceSpec: m, type: "predefined" };
    r.value.push(g);
  }, f = (h, m) => {
    const g = {
      name: h,
      resourceSpec: m,
      type: "custom"
    };
    s.value.push(g);
  }, u = (h, m) => {
    if (m === "predefined") {
      const g = r.value.findIndex((E) => E.name === h.name && E.resourceSpec === h.resourceSpec);
      g > -1 && r.value.splice(g, 1);
    } else {
      const g = s.value.findIndex((E) => E.name === h.name && E.resourceSpec === h.resourceSpec);
      g > -1 && s.value.splice(g, 1);
    }
  }, c = (h) => {
    o.value = h;
  }, d = async () => {
    try {
      i.save = !0;
      const h = {
        fhir_system: o.value,
        selected_mapping_resources: r.value,
        selected_custom_mapping_resources: s.value
      }, m = await Ki.updateProjectSettings(h);
      m.data.sync_results && p(m.data.sync_results), await a();
    } catch (h) {
      throw e.addError(h, "settingsStore"), console.error("Failed to save project settings:", h), h;
    } finally {
      i.save = !1;
    }
  }, p = (h) => {
    const {
      resources_added: m,
      resources_modified: g,
      resources_removed: E,
      tasks_created: O,
      total_mrns: y,
      error: R
    } = h;
    if (R) {
      t.toast({
        title: "Sync Warning",
        body: `Settings saved but sync failed: ${R}`,
        variant: "warning",
        delay: 8e3
      });
      return;
    }
    if (m + g + E === 0)
      return;
    const T = [];
    m > 0 && T.push(`${m} added`), g > 0 && T.push(`${g} modified`), E > 0 && T.push(`${E} removed`);
    const N = "Resources Synchronized", V = `${T.join(", ")}. Created ${O} tasks for ${y} patients.`;
    t.toast({
      title: N,
      body: V,
      variant: "success",
      delay: 6e3
    });
  };
  return {
    loading: i,
    settings: n,
    selectedFhirSystem: o,
    selectedMappingResources: r,
    selectedCustomMappingResources: s,
    fetchProjectSettings: a,
    addPredefinedResource: l,
    addCustomResource: f,
    removeResource: u,
    updateSelectedFhirSystem: c,
    saveProjectSettings: d
  };
}), ok = ["value"], rk = ["value"], sk = /* @__PURE__ */ Re({
  __name: "FhirSystemDropdown",
  setup(e) {
    const t = mt("settings"), n = mt("draftResources"), o = Ks(), r = (s) => {
      const i = s.target, a = parseInt(i.value);
      o.updateSelectedFhirSystem(a);
    };
    return (s, i) => (q(), Z("div", null, [
      i[1] || (i[1] = b("label", { for: "ehr-dropdown" }, "FHIR Systems", -1)),
      b("select", {
        class: "form-select form-select-sm",
        id: "ehr-dropdown",
        value: ve(n)?.selectedFhirSystem.value || "",
        onChange: r
      }, [
        i[0] || (i[0] = b("option", { value: "" }, "Select a FHIR System", -1)),
        (q(!0), Z(Ce, null, At(ve(t).fhir_systems, (a) => (q(), Z("option", {
          key: a.ehr_id,
          value: a.ehr_id
        }, $e(a.ehr_name), 9, rk))), 128))
      ], 40, ok)
    ]));
  }
}), ik = { class: "d-flex" }, ak = { class: "d-flex gap-2" }, lk = /* @__PURE__ */ Re({
  __name: "ResourcesToolbar",
  emits: ["import", "export", "add"],
  setup(e, { emit: t }) {
    const n = t;
    return (o, r) => (q(), Z("div", ik, [
      r[6] || (r[6] = b("div", { class: "me-auto" }, [
        b("span", null, "Resources")
      ], -1)),
      b("div", ak, [
        b("button", {
          class: "btn btn-sm btn-primary",
          onClick: r[0] || (r[0] = (s) => n("import"))
        }, r[3] || (r[3] = [
          b("i", { class: "fas fa-upload fa-fw" }, null, -1),
          b("span", null, "Import", -1)
        ])),
        b("button", {
          class: "btn btn-sm btn-primary",
          onClick: r[1] || (r[1] = (s) => n("export"))
        }, r[4] || (r[4] = [
          b("i", { class: "fas fa-download fa-fw" }, null, -1),
          b("span", null, "Export", -1)
        ])),
        b("button", {
          class: "btn btn-sm btn-primary",
          onClick: r[2] || (r[2] = (s) => n("add"))
        }, r[5] || (r[5] = [
          b("i", { class: "fas fa-plus fa-fw" }, null, -1),
          b("span", null, "Add", -1)
        ]))
      ])
    ]));
  }
}), uk = { class: "table table-striped table-hover table-sm border-top" }, ck = ["onClick"], fk = { key: 0 }, dk = /* @__PURE__ */ Re({
  __name: "ResourcesTable",
  setup(e) {
    const t = Ks(), n = mt("draftResources"), o = he(() => n ? [
      ...n.selectedMappingResources.value,
      ...n.selectedCustomMappingResources.value
    ] : []);
    function r(s) {
      t.removeResource(s, s.type);
    }
    return (s, i) => (q(), Z("table", uk, [
      i[2] || (i[2] = b("thead", null, [
        b("tr", null, [
          b("th", null, "Name"),
          b("th", null, "Type"),
          b("th", null, "Resource Specification"),
          b("th", null, "Actions")
        ])
      ], -1)),
      b("tbody", null, [
        (q(!0), Z(Ce, null, At(o.value, (a) => (q(), Z("tr", {
          key: `${a.type}-${a.name}`
        }, [
          b("td", null, $e(a.name), 1),
          b("td", null, $e(a.type), 1),
          b("td", null, $e(a.resourceSpec || "-"), 1),
          b("td", null, [
            b("button", {
              type: "button",
              class: "btn btn-outline-danger btn-sm",
              onClick: (l) => r(a)
            }, i[0] || (i[0] = [
              b("i", { class: "fas fa-trash fa-fw" }, null, -1)
            ]), 8, ck)
          ])
        ]))), 128)),
        o.value.length === 0 ? (q(), Z("tr", fk, i[1] || (i[1] = [
          b("td", {
            colspan: "4",
            class: "text-muted text-center"
          }, "No resources configured", -1)
        ]))) : Fn("", !0)
      ])
    ]));
  }
}), pk = { class: "mb-3" }, hk = ["value"], mk = ["disabled"], _k = ["value"], gk = ["value"], Ek = ["disabled"], lr = Object.freeze({
  PREDEFINED: "PREDEFINED",
  CUSTOM: "CUSTOM"
}), vk = /* @__PURE__ */ Re({
  __name: "ResourceForm",
  props: {
    modelValue: { default: () => ({}) },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = Ks(), { settings: n } = Uu(t), o = he(() => n.value.mapping_resources), r = Oy(e, "modelValue");
    return (s, i) => (q(), Z("div", null, [
      b("form", null, [
        b("div", pk, [
          i[5] || (i[5] = b("label", {
            class: "form-label",
            for: "display-name"
          }, "Display Name", -1)),
          In(b("input", {
            "onUpdate:modelValue": i[0] || (i[0] = (a) => r.value.displayName = a),
            class: "form-control form-control-sm",
            type: "text",
            id: "display-name",
            placeholder: "E.g., Vital Signs, Social History, etc.",
            required: ""
          }, null, 512), [
            [xl, r.value.displayName]
          ])
        ]),
        b("div", null, [
          In(b("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-predefined",
            value: ve(lr).PREDEFINED,
            "onUpdate:modelValue": i[1] || (i[1] = (a) => r.value.resourceType = a)
          }, null, 8, hk), [
            [uf, r.value.resourceType]
          ]),
          i[7] || (i[7] = b("label", {
            class: "form-label ms-2",
            for: "resource-type-predefined"
          }, "Predefined Resource", -1)),
          In(b("select", {
            "onUpdate:modelValue": i[2] || (i[2] = (a) => r.value.predefinedResource = a),
            class: "form-select form-select-sm",
            id: "predefined-resource",
            disabled: r.value.resourceType !== ve(lr).PREDEFINED
          }, [
            i[6] || (i[6] = b("option", {
              disabled: "",
              value: ""
            }, "Please Select...", -1)),
            (q(!0), Z(Ce, null, At(o.value, (a) => (q(), Z("option", {
              key: a.resourceSpec,
              value: a.resourceSpec
            }, $e(a.name), 9, _k))), 128))
          ], 8, mk), [
            [_m, r.value.predefinedResource]
          ])
        ]),
        i[9] || (i[9] = b("div", { class: "d-flex justify-start-center my-2" }, [
          b("span", null, "—OR—")
        ], -1)),
        b("div", null, [
          In(b("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-custom",
            value: ve(lr).CUSTOM,
            "onUpdate:modelValue": i[3] || (i[3] = (a) => r.value.resourceType = a)
          }, null, 8, gk), [
            [uf, r.value.resourceType]
          ]),
          i[8] || (i[8] = b("label", {
            class: "form-label ms-2",
            for: "resource-type-custom"
          }, "Custom Resource", -1)),
          In(b("input", {
            "onUpdate:modelValue": i[4] || (i[4] = (a) => r.value.customResourceSpec = a),
            class: "form-control form-control-sm",
            type: "text",
            id: "custom-resource",
            disabled: r.value.resourceType !== ve(lr).CUSTOM,
            placeholder: "Observation?category=social-history"
          }, null, 8, Ek), [
            [xl, r.value.customResourceSpec]
          ])
        ])
      ])
    ]));
  }
}), yk = { class: "d-flex flex-column gap-4" }, bk = { class: "card" }, wk = { class: "card-body px-0 py-2" }, Ok = { class: "p-2" }, Ak = { class: "d-flex gap-2 justify-content-end" }, Sk = ["disabled"], Nk = /* @__PURE__ */ Re({
  __name: "SetupPage",
  setup(e) {
    const t = Ks(), { settings: n, loading: o, selectedMappingResources: r, selectedCustomMappingResources: s, selectedFhirSystem: i } = Uu(t);
    dr("settings", n), dr("draftResources", { selectedMappingResources: r, selectedCustomMappingResources: s, selectedFhirSystem: i });
    const a = he(() => o.value.fetch || o.value.save), l = Dv("resourceModal"), f = () => ({
      displayName: "",
      customResourceSpec: "",
      predefinedResource: "",
      resourceType: lr.PREDEFINED
    }), u = ue(f());
    async function c() {
      if (!l.value) return;
      if (u.value = f(), await l.value.show()) {
        if (!u.value.displayName.trim()) {
          alert("Display Name is required");
          return;
        }
        if (u.value.resourceType === lr.PREDEFINED) {
          if (!u.value.predefinedResource) {
            alert("Please select a predefined resource");
            return;
          }
          t.addPredefinedResource(u.value.displayName, u.value.predefinedResource);
        } else {
          if (!u.value.customResourceSpec.trim()) {
            alert("Resource Specification is required for custom resources");
            return;
          }
          t.addCustomResource(u.value.displayName, u.value.customResourceSpec);
        }
      }
    }
    async function d() {
      try {
        await t.saveProjectSettings();
      } catch (p) {
        console.error("Failed to save settings:", p);
      }
    }
    return (p, h) => {
      const m = en("b-modal");
      return q(), Z("div", yk, [
        Ae(sk),
        b("div", bk, [
          b("div", wk, [
            b("div", Ok, [
              Ae(lk, { onAdd: c })
            ]),
            Ae(dk),
            (q(), Tt(na, { to: "body" }, [
              Ae(m, {
                ref_key: "resourceModal",
                ref: l
              }, {
                title: Ot(() => h[1] || (h[1] = [
                  et("Resource")
                ])),
                default: Ot(() => [
                  Ae(vk, {
                    modelValue: u.value,
                    "onUpdate:modelValue": h[0] || (h[0] = (g) => u.value = g)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 512)
            ]))
          ])
        ]),
        b("div", Ak, [
          h[3] || (h[3] = b("button", {
            type: "button",
            class: "btn btn-secondary btn-sm"
          }, [
            b("i", { class: "fas fa-xmark fa-fw" }),
            b("span", null, "Cancel")
          ], -1)),
          b("button", {
            type: "button",
            class: "btn btn-primary btn-sm",
            onClick: d,
            disabled: a.value
          }, h[2] || (h[2] = [
            b("i", { class: "fas fa-save fa-fw" }, null, -1),
            b("span", null, "Save", -1)
          ]), 8, Sk)
        ])
      ]);
    };
  }
}), pc = /* @__PURE__ */ Bu("monitor", () => {
  const e = Gu(), t = ue(!1), n = ue([]), o = ue([]), r = ue({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: !1,
    hasPrevious: !1,
    perPageOptions: [10, 25, 50, 100, 250]
  }), s = async () => {
    try {
      t.value = !0;
      const g = await Ki.listMrns(r.value.page, r.value.limit);
      g.data.data && g.data.pagination ? (n.value = g.data.data, r.value.total = g.data.pagination.total, r.value.totalPages = g.data.pagination.total_pages, r.value.hasNext = g.data.pagination.has_next, r.value.hasPrevious = g.data.pagination.has_previous) : n.value = g.data, o.value = [];
    } catch (g) {
      e.addError(g, "monitorStore"), console.error("Failed to load MRNs:", g), n.value = [];
    } finally {
      t.value = !1;
    }
  }, i = async (g) => {
    try {
      await Ki.addMrn(g), await s();
    } catch (E) {
      e.addError(E, "monitorStore"), console.error("Failed to add MRN:", E);
    }
  }, a = async (g) => {
  }, l = async () => {
    try {
      t.value = !0;
      for (const g of o.value)
        await a(g);
    } catch (g) {
      e.addError(g, "monitorStore"), console.error("Failed to fetch selected MRNs:", g);
    } finally {
      t.value = !1;
    }
  }, f = async () => {
    console.log("Downloading selected MRNs:", o.value);
  }, u = he(() => n.value.length > 0 && o.value.length === n.value.length), c = he(() => o.value.length > 0 && o.value.length < n.value.length);
  return {
    loading: t,
    mrns: n,
    selectedMrns: o,
    pagination: r,
    allSelected: u,
    indeterminate: c,
    fetchMrns: s,
    addMrn: i,
    fetchMrn: a,
    fetchSelected: l,
    downloadSelected: f,
    toggleSelectAll: () => {
      u.value ? o.value = [] : o.value = n.value.map((g) => g.id);
    },
    toggleSelection: (g) => {
      const E = o.value.indexOf(g);
      E === -1 ? o.value.push(g) : o.value.splice(E, 1);
    },
    setPage: (g) => {
      r.value.page = g, s();
    },
    setLimit: (g) => {
      r.value.limit = g, r.value.page = 1, s();
    }
  };
}), Tk = { class: "mb-3" }, Ck = ["disabled"], Dk = ["disabled"], xk = /* @__PURE__ */ Re({
  __name: "MonitorToolbar",
  emits: ["add-mrn"],
  setup(e) {
    const t = pc(), n = he(() => t.selectedMrns.length === 0);
    return (o, r) => (q(), Z("div", Tk, [
      b("button", {
        class: "btn btn-sm btn-primary me-2",
        onClick: r[0] || (r[0] = (s) => o.$emit("add-mrn"))
      }, r[4] || (r[4] = [
        b("i", { class: "fas fa-plus fa-fw" }, null, -1),
        et(" Add MRN ")
      ])),
      b("button", {
        class: "btn btn-sm btn-secondary me-2",
        onClick: r[1] || (r[1] = //@ts-ignore
        (...s) => ve(t).fetchSelected && ve(t).fetchSelected(...s)),
        disabled: n.value
      }, r[5] || (r[5] = [
        b("i", { class: "fas fa-sync fa-fw" }, null, -1),
        et(" Fetch Selected ")
      ]), 8, Ck),
      b("button", {
        class: "btn btn-sm btn-success me-2",
        onClick: r[2] || (r[2] = //@ts-ignore
        (...s) => ve(t).downloadSelected && ve(t).downloadSelected(...s)),
        disabled: n.value
      }, r[6] || (r[6] = [
        b("i", { class: "fas fa-download fa-fw" }, null, -1),
        et(" Download Selected ")
      ]), 8, Dk),
      b("button", {
        class: "btn btn-sm btn-light",
        onClick: r[3] || (r[3] = //@ts-ignore
        (...s) => ve(t).fetchMrns && ve(t).fetchMrns(...s)),
        title: "Refresh list"
      }, r[7] || (r[7] = [
        b("i", { class: "fas fa-sync-alt fa-fw" }, null, -1)
      ]))
    ]));
  }
}), Pn = {
  Pending: "Pending",
  Fetching: "Fetching",
  Completed: "Completed",
  Failed: "Failed"
}, Rk = { class: "align-middle" }, kk = /* @__PURE__ */ Re({
  __name: "MonitorResourceRow",
  props: {
    resource: {}
  },
  setup(e) {
    const t = (n) => {
      const o = "badge";
      switch (n) {
        case Pn.Pending:
          return `${o} bg-warning text-dark`;
        case Pn.Fetching:
          return `${o} bg-info text-dark`;
        case Pn.Completed:
          return `${o} bg-success`;
        case Pn.Failed:
          return `${o} bg-danger`;
        default:
          return `${o} bg-secondary`;
      }
    };
    return (n, o) => (q(), Z("tr", Rk, [
      b("td", null, $e(n.resource.name), 1),
      b("td", null, [
        b("span", {
          class: Ve(t(n.resource.status))
        }, $e(n.resource.status), 3)
      ]),
      b("td", null, $e(n.resource.error), 1)
    ]));
  }
}), $k = { class: "align-middle" }, Ik = ["checked"], Pk = ["aria-expanded"], Vk = ["disabled"], Lk = {
  colspan: "5",
  class: "p-0"
}, Mk = { class: "ps-3" }, Fk = { class: "table table-sm table-bordered mb-0" }, Bk = /* @__PURE__ */ Re({
  __name: "MonitorTableRow",
  props: {
    item: {},
    selected: { type: Boolean }
  },
  emits: ["toggle-selection"],
  setup(e) {
    const t = pc(), n = e, o = ue(!1), r = () => {
      o.value = !o.value;
    }, s = he(() => {
      const a = n.item.resources.length;
      return `${n.item.resources.filter((f) => f.status === Pn.Completed).length} / ${a} resources completed`;
    }), i = (a) => {
      const l = "badge";
      switch (a) {
        case Pn.Pending:
          return `${l} bg-warning text-dark`;
        case Pn.Fetching:
          return `${l} bg-info text-dark`;
        case Pn.Completed:
          return `${l} bg-success`;
        case Pn.Failed:
          return `${l} bg-danger`;
        default:
          return `${l} bg-secondary`;
      }
    };
    return (a, l) => (q(), Z(Ce, null, [
      b("tr", $k, [
        b("td", null, [
          b("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: a.selected,
            onChange: l[0] || (l[0] = (f) => a.$emit("toggle-selection", a.item.id))
          }, null, 40, Ik)
        ]),
        b("td", null, $e(a.item.mrn), 1),
        b("td", null, [
          b("span", {
            class: Ve(i(a.item.status))
          }, $e(a.item.status), 3)
        ]),
        b("td", null, [
          b("span", null, $e(s.value), 1),
          b("button", {
            class: "btn btn-sm btn-light ms-2",
            onClick: r,
            "aria-expanded": o.value
          }, [
            b("i", {
              class: Ve(`bi bi-chevron-${o.value ? "up" : "down"}`)
            }, null, 2)
          ], 8, Pk)
        ]),
        b("td", null, [
          b("button", {
            class: "btn btn-sm btn-primary me-2",
            onClick: l[1] || (l[1] = (f) => ve(t).fetchMrn(a.item.id))
          }, l[2] || (l[2] = [
            b("i", { class: "fas fa-sync fa-fw" }, null, -1),
            et(" Fetch ")
          ])),
          b("button", {
            class: "btn btn-sm btn-success",
            disabled: a.item.status !== "Completed"
          }, l[3] || (l[3] = [
            b("i", { class: "fas fa-download fa-fw" }, null, -1),
            et(" Download ")
          ]), 8, Vk)
        ])
      ]),
      In(b("tr", null, [
        b("td", Lk, [
          b("div", Mk, [
            b("table", Fk, [
              l[4] || (l[4] = b("thead", { class: "table-light" }, [
                b("tr", null, [
                  b("th", { scope: "col" }, "Resource"),
                  b("th", { scope: "col" }, "Status"),
                  b("th", { scope: "col" }, "Error")
                ])
              ], -1)),
              b("tbody", null, [
                (q(!0), Z(Ce, null, At(a.item.resources, (f) => (q(), Tt(kk, {
                  key: f.name,
                  resource: f
                }, null, 8, ["resource"]))), 128))
              ])
            ])
          ])
        ])
      ], 512), [
        [mm, o.value]
      ])
    ], 64));
  }
}), Uk = /* @__PURE__ */ Ps(Bk, [["__scopeId", "data-v-05279239"]]), Hk = {
  key: 0,
  class: "d-flex justify-content-center"
}, jk = {
  key: 1,
  class: "table table-striped table-hover"
}, Kk = { class: "table-light" }, Wk = { scope: "col" }, zk = ["checked", "indeterminate"], qk = { key: 0 }, Gk = /* @__PURE__ */ Re({
  __name: "MonitorTable",
  props: {
    items: {},
    loading: { type: Boolean },
    selectedMrns: {},
    allSelected: { type: Boolean },
    indeterminate: { type: Boolean }
  },
  emits: ["toggle-selection", "toggle-select-all"],
  setup(e) {
    const t = e, n = ue(null);
    return hn(() => t.indeterminate, (o) => {
      n.value && (n.value.indeterminate = o);
    }, { immediate: !0 }), (o, r) => (q(), Z("div", null, [
      o.loading ? (q(), Z("div", Hk, r[1] || (r[1] = [
        b("div", {
          class: "spinner-border",
          role: "status"
        }, [
          b("span", { class: "visually-hidden" }, "Loading...")
        ], -1)
      ]))) : (q(), Z("table", jk, [
        b("thead", Kk, [
          b("tr", null, [
            b("th", Wk, [
              b("input", {
                ref_key: "selectAllCheckbox",
                ref: n,
                class: "form-check-input",
                type: "checkbox",
                checked: o.allSelected,
                indeterminate: o.indeterminate,
                onChange: r[0] || (r[0] = (s) => o.$emit("toggle-select-all"))
              }, null, 40, zk)
            ]),
            r[2] || (r[2] = b("th", { scope: "col" }, "MRN", -1)),
            r[3] || (r[3] = b("th", { scope: "col" }, "Status", -1)),
            r[4] || (r[4] = b("th", { scope: "col" }, "Resources", -1)),
            r[5] || (r[5] = b("th", { scope: "col" }, "Actions", -1))
          ])
        ]),
        b("tbody", null, [
          o.items.length === 0 ? (q(), Z("tr", qk, r[6] || (r[6] = [
            b("td", {
              colspan: "5",
              class: "text-center"
            }, "No MRNs to display.", -1)
          ]))) : (q(!0), Z(Ce, { key: 1 }, At(o.items, (s) => (q(), Tt(Uk, {
            key: s.id,
            item: s,
            selected: o.selectedMrns.includes(s.id),
            onToggleSelection: (i) => o.$emit("toggle-selection", s.id)
          }, null, 8, ["item", "selected", "onToggleSelection"]))), 128))
        ])
      ]))
    ]));
  }
}), Yk = { class: "modal-dialog" }, Xk = { class: "modal-content" }, Jk = { class: "modal-body" }, Qk = { class: "mb-3" }, Zk = /* @__PURE__ */ Re({
  __name: "AddMrnModal",
  setup(e, { expose: t }) {
    const n = ue(""), o = ue(null);
    let r = null, s = null;
    jn(() => {
      o.value && (r = new ao(o.value), o.value.addEventListener("hidden.bs.modal", () => {
        s && s(null);
      }));
    }), ra(() => {
      r && r.dispose();
    });
    const i = () => new Promise((f) => {
      s = f, r ? r.show() : f(null);
    }), a = () => {
      s && s(n.value), r && r.hide(), n.value = "";
    }, l = () => {
      r && r.hide();
    };
    return t({ show: i }), (f, u) => (q(), Z("div", {
      class: "modal fade",
      ref_key: "modal",
      ref: o,
      tabindex: "-1",
      "aria-labelledby": "addMrnModalLabel",
      "aria-hidden": "true"
    }, [
      b("div", Yk, [
        b("div", Xk, [
          u[2] || (u[2] = b("div", { class: "modal-header" }, [
            b("h5", {
              class: "modal-title",
              id: "addMrnModalLabel"
            }, "Add MRN"),
            b("button", {
              type: "button",
              class: "btn-close",
              "data-bs-dismiss": "modal",
              "aria-label": "Close"
            })
          ], -1)),
          b("div", Jk, [
            b("div", Qk, [
              u[1] || (u[1] = b("label", {
                for: "mrn-input",
                class: "form-label"
              }, "MRN", -1)),
              In(b("input", {
                type: "text",
                class: "form-control",
                id: "mrn-input",
                "onUpdate:modelValue": u[0] || (u[0] = (c) => n.value = c),
                onKeyup: vb(a, ["enter"])
              }, null, 544), [
                [xl, n.value]
              ])
            ])
          ]),
          b("div", { class: "modal-footer" }, [
            b("button", {
              type: "button",
              class: "btn btn-secondary",
              onClick: l
            }, "Cancel"),
            b("button", {
              type: "button",
              class: "btn btn-primary",
              onClick: a
            }, "Add")
          ])
        ])
      ])
    ], 512));
  }
}), e$ = { class: "p-3" }, t$ = {
  key: 0,
  class: "d-flex justify-content-end gap-2 mt-3"
}, n$ = /* @__PURE__ */ Re({
  __name: "MonitorPage",
  setup(e) {
    const t = pc(), n = ue(null), o = he({
      get: () => t.pagination.page,
      set: (l) => t.setPage(l)
    }), r = he({
      get: () => t.pagination.limit,
      set: (l) => t.setLimit(l)
    }), s = he(() => t.pagination.total), i = he(() => t.pagination.perPageOptions);
    jn(() => {
      t.fetchMrns();
    });
    const a = async () => {
      if (n.value) {
        const l = await n.value.show();
        l && t.addMrn(l);
      }
    };
    return (l, f) => {
      const u = en("b-pagination"), c = en("b-pagination-dropdown");
      return q(), Z("div", e$, [
        Ae(xk, { onAddMrn: a }),
        Ae(Gk, {
          items: ve(t).mrns,
          loading: ve(t).loading,
          "selected-mrns": ve(t).selectedMrns,
          "all-selected": ve(t).allSelected,
          indeterminate: ve(t).indeterminate,
          onToggleSelection: ve(t).toggleSelection,
          onToggleSelectAll: ve(t).toggleSelectAll
        }, null, 8, ["items", "loading", "selected-mrns", "all-selected", "indeterminate", "onToggleSelection", "onToggleSelectAll"]),
        ve(t).pagination.total > 0 ? (q(), Z("div", t$, [
          Ae(u, {
            size: "sm",
            perPage: r.value,
            totalItems: s.value,
            modelValue: o.value,
            "onUpdate:modelValue": f[0] || (f[0] = (d) => o.value = d)
          }, null, 8, ["perPage", "totalItems", "modelValue"]),
          Ae(c, {
            options: i.value,
            modelValue: r.value,
            "onUpdate:modelValue": f[1] || (f[1] = (d) => r.value = d)
          }, null, 8, ["options", "modelValue"])
        ])) : Fn("", !0),
        Ae(Zk, {
          ref_key: "addMrnModal",
          ref: n
        }, null, 512)
      ]);
    };
  }
}), o$ = {}, r$ = { class: "error-wrapper" }, s$ = { class: "mt-5" };
function i$(e, t) {
  const n = en("router-link");
  return q(), Z("div", r$, [
    ye(e.$slots, "title", {}, () => [
      t[0] || (t[0] = b("span", { class: "error-title" }, "Error 404", -1))
    ], !0),
    ye(e.$slots, "description", {}, () => [
      t[1] || (t[1] = b("span", { class: "error-description" }, "Sorry, we couldn't find this page.", -1))
    ], !0),
    ye(e.$slots, "subdescription", {}, () => [
      t[2] || (t[2] = b("span", { class: "error-sub-description" }, "But dont worry, you can find plenty of other things on the homepage..", -1))
    ], !0),
    b("div", s$, [
      Ae(n, {
        to: "/",
        class: "btn btn-sm btn-primary"
      }, {
        default: Ot(() => t[3] || (t[3] = [
          b("i", { class: "fas fa-arrow-left fa-fw me-1" }, null, -1),
          b("span", null, "Back to Home", -1)
        ])),
        _: 1,
        __: [3]
      })
    ])
  ]);
}
const a$ = /* @__PURE__ */ Ps(o$, [["render", i$], ["__scopeId", "data-v-d4f8fed2"]]), l$ = { class: "card shadow-sm" }, u$ = { class: "card-body" }, c$ = { class: "text-center" }, f$ = {
  key: 0,
  class: "lead text-danger"
}, d$ = {
  key: 1,
  class: "text-muted"
}, p$ = /* @__PURE__ */ Re({
  __name: "ErrorPage",
  setup(e) {
    const n = DA().query.message;
    return (o, r) => {
      const s = en("router-link");
      return q(), Z("div", l$, [
        b("div", u$, [
          b("div", c$, [
            r[1] || (r[1] = b("h1", { class: "display-4" }, "Something went wrong", -1)),
            ve(n) ? (q(), Z("p", f$, "Error: " + $e(ve(n)), 1)) : (q(), Z("p", d$, "We're sorry for the inconvenience. Please try again later.")),
            Ae(s, {
              to: "/",
              class: "btn btn-primary mt-3"
            }, {
              default: Ot(() => r[0] || (r[0] = [
                et("Go back to Home")
              ])),
              _: 1,
              __: [0]
            })
          ])
        ])
      ]);
    };
  }
}), h$ = [
  {
    path: "/",
    component: PA,
    children: [
      { path: "", name: "home", component: MA },
      { path: "setup", name: "setup", component: Nk },
      { path: "monitor", name: "monitor", component: n$ },
      { path: "error", name: "error", component: p$ },
      { path: "/:pathMatch(.*)*", component: a$ }
    ]
  }
];
let si;
const Lp = () => si || (si = TA({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: LO(),
  routes: h$
}), si), m$ = {
  key: 0,
  class: "alert alert-danger"
}, _$ = { style: { "word-break": "break-all" } }, g$ = /* @__PURE__ */ Re({
  __name: "ErrorsVisualizer",
  setup(e) {
    const t = ue(), n = Gu(), { errors: o } = Uu(n), r = (s) => JSON.stringify(s);
    return sa(async () => {
      if (o.value?.length === 0) return;
      const s = t.value;
      s && (await s.show(), n.resetErrors());
    }), (s, i) => {
      const a = en("b-modal");
      return q(), Tt(a, {
        ref_key: "modalRef",
        ref: t,
        "ok-only": "",
        size: "xl"
      }, {
        title: Ot(() => i[0] || (i[0] = [
          b("span", null, "Error", -1)
        ])),
        default: Ot(() => [
          (q(!0), Z(Ce, null, At(ve(o), (l, f) => (q(), Z(Ce, { key: f }, [
            l ? (q(), Z("div", m$, [
              b("div", _$, $e(r(l)), 1)
            ])) : Fn("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 512);
    };
  }
}), E$ = /* @__PURE__ */ Re({
  __name: "App",
  setup(e) {
    const t = Ks();
    return jn(() => {
      t.fetchProjectSettings();
    }), (n, o) => {
      const r = en("router-view");
      return q(), Z("div", null, [
        Ae(r),
        Ae(g$)
      ]);
    };
  }
}), L$ = (e) => {
  const t = ca(E$);
  t.config.errorHandler = (r, s, i) => {
    console.error("💥 Vue Error:", r), console.error("📍 Component:", s), console.error("ℹ️ Info:", i), t.runWithContext(() => {
      r instanceof Error ? Lp().push({ name: "error", query: { message: r.message } }) : console.error("Unhandled non-Error exception:", r);
    });
  };
  const n = Yw();
  t.use(nk), t.use(n);
  const o = Lp();
  return t.use(o), t.mount(e), t;
};
export {
  L$ as default
};
