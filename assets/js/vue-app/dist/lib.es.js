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
const Me = zp.NODE_ENV !== "production" ? Object.freeze({}) : {}, _o = zp.NODE_ENV !== "production" ? Object.freeze([]) : [], ct = () => {
}, w_ = () => !1, Lr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Li = (e) => e.startsWith("onUpdate:"), Qe = Object.assign, _c = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, A_ = Object.prototype.hasOwnProperty, Le = (e, t) => A_.call(e, t), de = Array.isArray, Rs = (e) => Fr(e) === "[object Map]", Lo = (e) => Fr(e) === "[object Set]", Su = (e) => Fr(e) === "[object Date]", ve = (e) => typeof e == "function", qe = (e) => typeof e == "string", rn = (e) => typeof e == "symbol", Fe = (e) => e !== null && typeof e == "object", yc = (e) => (Fe(e) || ve(e)) && ve(e.then) && ve(e.catch), qp = Object.prototype.toString, Fr = (e) => qp.call(e), bc = (e) => Fr(e).slice(8, -1), Yp = (e) => Fr(e) === "[object Object]", Ec = (e) => qe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, lr = /* @__PURE__ */ zn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), S_ = /* @__PURE__ */ zn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), aa = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, O_ = /-(\w)/g, vt = aa(
  (e) => e.replace(O_, (t, n) => n ? n.toUpperCase() : "")
), C_ = /\B([A-Z])/g, Tn = aa(
  (e) => e.replace(C_, "-$1").toLowerCase()
), js = aa((e) => e.charAt(0).toUpperCase() + e.slice(1)), As = aa(
  (e) => e ? `on${js(e)}` : ""
), xt = (e, t) => !Object.is(e, t), lo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, br = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Fi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, T_ = (e) => {
  const t = qe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ou;
const Br = () => Ou || (Ou = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vt(e) {
  if (de(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = qe(s) ? k_(s) : Vt(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (qe(e) || Fe(e))
    return e;
}
const N_ = /;(?![^(]*\))/g, D_ = /:([^]+)/, x_ = /\/\*[^]*?\*\//g;
function k_(e) {
  const t = {};
  return e.replace(x_, "").split(N_).forEach((n) => {
    if (n) {
      const s = n.split(D_);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function pe(e) {
  let t = "";
  if (qe(e))
    t = e;
  else if (de(e))
    for (let n = 0; n < e.length; n++) {
      const s = pe(e[n]);
      s && (t += s + " ");
    }
  else if (Fe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function st(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !qe(t) && (e.class = pe(t)), n && (e.style = Vt(n)), e;
}
const R_ = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", I_ = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", P_ = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", V_ = /* @__PURE__ */ zn(R_), M_ = /* @__PURE__ */ zn(I_), L_ = /* @__PURE__ */ zn(P_), F_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", B_ = /* @__PURE__ */ zn(F_);
function Xp(e) {
  return !!e || e === "";
}
function j_(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Us(e[s], t[s]);
  return n;
}
function Us(e, t) {
  if (e === t) return !0;
  let n = Su(e), s = Su(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = rn(e), s = rn(t), n || s)
    return e === t;
  if (n = de(e), s = de(t), n || s)
    return n && s ? j_(e, t) : !1;
  if (n = Fe(e), s = Fe(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (a && !c || !a && c || !Us(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function wc(e, t) {
  return e.findIndex((n) => Us(n, t));
}
const Gp = (e) => !!(e && e.__v_isRef === !0), j = (e) => qe(e) ? e : e == null ? "" : de(e) || Fe(e) && (e.toString === qp || !ve(e.toString)) ? Gp(e) ? j(e.value) : JSON.stringify(e, Qp, 2) : String(e), Qp = (e, t) => Gp(t) ? Qp(e, t.value) : Rs(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Ba(s, r) + " =>"] = o, n),
    {}
  )
} : Lo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ba(n))
} : rn(t) ? Ba(t) : Fe(t) && !de(t) && !Yp(t) ? String(t) : t, Ba = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    rn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var We = {};
function Yt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ht;
class Jp {
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
    } else We.NODE_ENV !== "production" && Yt("cannot run an inactive effect scope.");
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
function Zp(e) {
  return new Jp(e);
}
function eh() {
  return ht;
}
function U_(e, t = !1) {
  ht ? ht.cleanups.push(e) : We.NODE_ENV !== "production" && !t && Yt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let He;
const ja = /* @__PURE__ */ new WeakSet();
class th {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ht && ht.active && ht.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ja.has(this) && (ja.delete(this), this.trigger()));
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
    this.flags |= 2, Cu(this), oh(this);
    const t = He, n = sn;
    He = this, sn = !0;
    try {
      return this.fn();
    } finally {
      We.NODE_ENV !== "production" && He !== this && Yt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), rh(this), He = t, sn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Oc(t);
      this.deps = this.depsTail = void 0, Cu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ja.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Sl(this) && this.run();
  }
  get dirty() {
    return Sl(this);
  }
}
let nh = 0, cr, ur;
function sh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ur, ur = e;
    return;
  }
  e.next = cr, cr = e;
}
function Ac() {
  nh++;
}
function Sc() {
  if (--nh > 0)
    return;
  if (ur) {
    let t = ur;
    for (ur = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; cr; ) {
    let t = cr;
    for (cr = void 0; t; ) {
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
    s.version === -1 ? (s === n && (n = o), Oc(s), H_(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Sl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ih(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ih(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Er) || (e.globalVersion = Er, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Sl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = He, s = sn;
  He = e, sn = !0;
  try {
    oh(e);
    const o = e.fn(e._value);
    (t.version === 0 || xt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    He = n, sn = s, rh(e), e.flags &= -3;
  }
}
function Oc(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), We.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Oc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function H_(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let sn = !0;
const ah = [];
function an() {
  ah.push(sn), sn = !1;
}
function ln() {
  const e = ah.pop();
  sn = e === void 0 ? !0 : e;
}
function Cu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = He;
    He = void 0;
    try {
      t();
    } finally {
      He = n;
    }
  }
}
let Er = 0;
class $_ {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class la {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, We.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!He || !sn || He === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== He)
      n = this.activeLink = new $_(He, this), He.deps ? (n.prevDep = He.depsTail, He.depsTail.nextDep = n, He.depsTail = n) : He.deps = He.depsTail = n, lh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = He.depsTail, n.nextDep = void 0, He.depsTail.nextDep = n, He.depsTail = n, He.deps === n && (He.deps = s);
    }
    return We.NODE_ENV !== "production" && He.onTrack && He.onTrack(
      Qe(
        {
          effect: He
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Er++, this.notify(t);
  }
  notify(t) {
    Ac();
    try {
      if (We.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Qe(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Sc();
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
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), We.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Bi = /* @__PURE__ */ new WeakMap(), Is = Symbol(
  We.NODE_ENV !== "production" ? "Object iterate" : ""
), Ol = Symbol(
  We.NODE_ENV !== "production" ? "Map keys iterate" : ""
), wr = Symbol(
  We.NODE_ENV !== "production" ? "Array iterate" : ""
);
function lt(e, t, n) {
  if (sn && He) {
    let s = Bi.get(e);
    s || Bi.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new la()), o.map = s, o.key = n), We.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function bn(e, t, n, s, o, r) {
  const i = Bi.get(e);
  if (!i) {
    Er++;
    return;
  }
  const a = (c) => {
    c && (We.NODE_ENV !== "production" ? c.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: r
    }) : c.trigger());
  };
  if (Ac(), t === "clear")
    i.forEach(a);
  else {
    const c = de(e), f = c && Ec(n);
    if (c && n === "length") {
      const u = Number(s);
      i.forEach((d, m) => {
        (m === "length" || m === wr || !rn(m) && m >= u) && a(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(wr)), t) {
        case "add":
          c ? f && a(i.get("length")) : (a(i.get(Is)), Rs(e) && a(i.get(Ol)));
          break;
        case "delete":
          c || (a(i.get(Is)), Rs(e) && a(i.get(Ol)));
          break;
        case "set":
          Rs(e) && a(i.get(Is));
          break;
      }
  }
  Sc();
}
function W_(e, t) {
  const n = Bi.get(e);
  return n && n.get(t);
}
function to(e) {
  const t = ye(e);
  return t === e ? t : (lt(t, "iterate", wr), St(e) ? t : t.map(pt));
}
function ca(e) {
  return lt(e = ye(e), "iterate", wr), e;
}
const K_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ua(this, Symbol.iterator, pt);
  },
  concat(...e) {
    return to(this).concat(
      ...e.map((t) => de(t) ? to(t) : t)
    );
  },
  entries() {
    return Ua(this, "entries", (e) => (e[1] = pt(e[1]), e));
  },
  every(e, t) {
    return Pn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Pn(this, "filter", e, t, (n) => n.map(pt), arguments);
  },
  find(e, t) {
    return Pn(this, "find", e, t, pt, arguments);
  },
  findIndex(e, t) {
    return Pn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Pn(this, "findLast", e, t, pt, arguments);
  },
  findLastIndex(e, t) {
    return Pn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Pn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ha(this, "includes", e);
  },
  indexOf(...e) {
    return Ha(this, "indexOf", e);
  },
  join(e) {
    return to(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ha(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Pn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xo(this, "pop");
  },
  push(...e) {
    return Xo(this, "push", e);
  },
  reduce(e, ...t) {
    return Tu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Tu(this, "reduceRight", e, t);
  },
  shift() {
    return Xo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Pn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xo(this, "splice", e);
  },
  toReversed() {
    return to(this).toReversed();
  },
  toSorted(e) {
    return to(this).toSorted(e);
  },
  toSpliced(...e) {
    return to(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xo(this, "unshift", e);
  },
  values() {
    return Ua(this, "values", pt);
  }
};
function Ua(e, t, n) {
  const s = ca(e), o = s[t]();
  return s !== e && !St(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const z_ = Array.prototype;
function Pn(e, t, n, s, o, r) {
  const i = ca(e), a = i !== e && !St(e), c = i[t];
  if (c !== z_[t]) {
    const d = c.apply(e, r);
    return a ? pt(d) : d;
  }
  let f = n;
  i !== e && (a ? f = function(d, m) {
    return n.call(this, pt(d), m, e);
  } : n.length > 2 && (f = function(d, m) {
    return n.call(this, d, m, e);
  }));
  const u = c.call(i, f, s);
  return a && o ? o(u) : u;
}
function Tu(e, t, n, s) {
  const o = ca(e);
  let r = n;
  return o !== e && (St(e) ? n.length > 3 && (r = function(i, a, c) {
    return n.call(this, i, a, c, e);
  }) : r = function(i, a, c) {
    return n.call(this, i, pt(a), c, e);
  }), o[t](r, ...s);
}
function Ha(e, t, n) {
  const s = ye(e);
  lt(s, "iterate", wr);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Ar(n[0]) ? (n[0] = ye(n[0]), s[t](...n)) : o;
}
function Xo(e, t, n = []) {
  an(), Ac();
  const s = ye(e)[t].apply(e, n);
  return Sc(), ln(), s;
}
const q_ = /* @__PURE__ */ zn("__proto__,__v_isRef,__isVue"), ch = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rn)
);
function Y_(e) {
  rn(e) || (e = String(e));
  const t = ye(this);
  return lt(t, "has", e), t.hasOwnProperty(e);
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
    const i = de(t);
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
      Ke(t) ? t : s
    );
    return (rn(n) ? ch.has(n) : q_(n)) || (o || lt(t, "get", n), r) ? a : Ke(a) ? i && Ec(n) ? a : a.value : Fe(a) ? o ? Cc(a) : Hs(a) : a;
  }
}
class dh extends uh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const c = Nn(r);
      if (!St(s) && !Nn(s) && (r = ye(r), s = ye(s)), !de(t) && Ke(r) && !Ke(s))
        return c ? !1 : (r.value = s, !0);
    }
    const i = de(t) && Ec(n) ? Number(n) < t.length : Le(t, n), a = Reflect.set(
      t,
      n,
      s,
      Ke(t) ? t : o
    );
    return t === ye(o) && (i ? xt(s, r) && bn(t, "set", n, s, r) : bn(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = Le(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && bn(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!rn(n) || !ch.has(n)) && lt(t, "has", n), s;
  }
  ownKeys(t) {
    return lt(
      t,
      "iterate",
      de(t) ? "length" : Is
    ), Reflect.ownKeys(t);
  }
}
class fh extends uh {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return We.NODE_ENV !== "production" && Yt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return We.NODE_ENV !== "production" && Yt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const X_ = /* @__PURE__ */ new dh(), G_ = /* @__PURE__ */ new fh(), Q_ = /* @__PURE__ */ new dh(!0), J_ = /* @__PURE__ */ new fh(!0), Cl = (e) => e, ni = (e) => Reflect.getPrototypeOf(e);
function Z_(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = ye(o), i = Rs(r), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, f = o[e](...s), u = n ? Cl : t ? ji : pt;
    return !t && lt(
      r,
      "iterate",
      c ? Ol : Is
    ), {
      // iterator protocol
      next() {
        const { value: d, done: m } = f.next();
        return m ? { value: d, done: m } : {
          value: a ? [u(d[0]), u(d[1])] : u(d),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function si(e) {
  return function(...t) {
    if (We.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Yt(
        `${js(e)} operation ${n}failed: target is readonly.`,
        ye(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ey(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = ye(r), a = ye(o);
      e || (xt(o, a) && lt(i, "get", o), lt(i, "get", a));
      const { has: c } = ni(i), f = t ? Cl : e ? ji : pt;
      if (c.call(i, o))
        return f(r.get(o));
      if (c.call(i, a))
        return f(r.get(a));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && lt(ye(o), "iterate", Is), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = ye(r), a = ye(o);
      return e || (xt(o, a) && lt(i, "has", o), lt(i, "has", a)), o === a ? r.has(o) : r.has(o) || r.has(a);
    },
    forEach(o, r) {
      const i = this, a = i.__v_raw, c = ye(a), f = t ? Cl : e ? ji : pt;
      return !e && lt(c, "iterate", Is), a.forEach((u, d) => o.call(r, f(u), f(d), i));
    }
  };
  return Qe(
    n,
    e ? {
      add: si("add"),
      set: si("set"),
      delete: si("delete"),
      clear: si("clear")
    } : {
      add(o) {
        !t && !St(o) && !Nn(o) && (o = ye(o));
        const r = ye(this);
        return ni(r).has.call(r, o) || (r.add(o), bn(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !St(r) && !Nn(r) && (r = ye(r));
        const i = ye(this), { has: a, get: c } = ni(i);
        let f = a.call(i, o);
        f ? We.NODE_ENV !== "production" && Nu(i, a, o) : (o = ye(o), f = a.call(i, o));
        const u = c.call(i, o);
        return i.set(o, r), f ? xt(r, u) && bn(i, "set", o, r, u) : bn(i, "add", o, r), this;
      },
      delete(o) {
        const r = ye(this), { has: i, get: a } = ni(r);
        let c = i.call(r, o);
        c ? We.NODE_ENV !== "production" && Nu(r, i, o) : (o = ye(o), c = i.call(r, o));
        const f = a ? a.call(r, o) : void 0, u = r.delete(o);
        return c && bn(r, "delete", o, void 0, f), u;
      },
      clear() {
        const o = ye(this), r = o.size !== 0, i = We.NODE_ENV !== "production" ? Rs(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
        return r && bn(
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
function ua(e, t) {
  const n = ey(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    Le(n, o) && o in s ? n : s,
    o,
    r
  );
}
const ty = {
  get: /* @__PURE__ */ ua(!1, !1)
}, ny = {
  get: /* @__PURE__ */ ua(!1, !0)
}, sy = {
  get: /* @__PURE__ */ ua(!0, !1)
}, oy = {
  get: /* @__PURE__ */ ua(!0, !0)
};
function Nu(e, t, n) {
  const s = ye(n);
  if (s !== n && t.call(e, s)) {
    const o = bc(e);
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ry(bc(e));
}
function Hs(e) {
  return Nn(e) ? e : da(
    e,
    !1,
    X_,
    ty,
    ph
  );
}
function vh(e) {
  return da(
    e,
    !1,
    Q_,
    ny,
    hh
  );
}
function Cc(e) {
  return da(
    e,
    !0,
    G_,
    sy,
    mh
  );
}
function wn(e) {
  return da(
    e,
    !0,
    J_,
    oy,
    gh
  );
}
function da(e, t, n, s, o) {
  if (!Fe(e))
    return We.NODE_ENV !== "production" && Yt(
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
function on(e) {
  return Nn(e) ? on(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Nn(e) {
  return !!(e && e.__v_isReadonly);
}
function St(e) {
  return !!(e && e.__v_isShallow);
}
function Ar(e) {
  return e ? !!e.__v_raw : !1;
}
function ye(e) {
  const t = e && e.__v_raw;
  return t ? ye(t) : e;
}
function ss(e) {
  return !Le(e, "__v_skip") && Object.isExtensible(e) && br(e, "__v_skip", !0), e;
}
const pt = (e) => Fe(e) ? Hs(e) : e, ji = (e) => Fe(e) ? Cc(e) : e;
function Ke(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function G(e) {
  return yh(e, !1);
}
function _h(e) {
  return yh(e, !0);
}
function yh(e, t) {
  return Ke(e) ? e : new ay(e, t);
}
class ay {
  constructor(t, n) {
    this.dep = new la(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ye(t), this._value = n ? t : pt(t), this.__v_isShallow = n;
  }
  get value() {
    return We.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || St(t) || Nn(t);
    t = s ? t : ye(t), xt(t, n) && (this._rawValue = t, this._value = s ? t : pt(t), We.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ae(e) {
  return Ke(e) ? e.value : e;
}
const ly = {
  get: (e, t, n) => t === "__v_raw" ? e : ae(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Ke(o) && !Ke(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function bh(e) {
  return on(e) ? e : new Proxy(e, ly);
}
class cy {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new la(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function uy(e) {
  return new cy(e);
}
function cn(e) {
  We.NODE_ENV !== "production" && !Ar(e) && Yt("toRefs() expects a reactive object but received a plain one.");
  const t = de(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Eh(e, n);
  return t;
}
class dy {
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
    return W_(ye(this._object), this._key);
  }
}
class fy {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function _i(e, t, n) {
  return Ke(e) ? e : ve(e) ? new fy(e) : Fe(e) && arguments.length > 1 ? Eh(e, t, n) : G(e);
}
function Eh(e, t, n) {
  const s = e[t];
  return Ke(s) ? s : new dy(e, t, n);
}
class py {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new la(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Er - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    He !== this)
      return sh(this, !0), !0;
  }
  get value() {
    const t = We.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return ih(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : We.NODE_ENV !== "production" && Yt("Write operation failed: computed value is readonly");
  }
}
function hy(e, t, n = !1) {
  let s, o;
  return ve(e) ? s = e : (s = e.get, o = e.set), new py(s, o, n);
}
const oi = {}, Ui = /* @__PURE__ */ new WeakMap();
let Ss;
function my(e, t = !1, n = Ss) {
  if (n) {
    let s = Ui.get(n);
    s || Ui.set(n, s = []), s.push(e);
  } else We.NODE_ENV !== "production" && !t && Yt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function gy(e, t, n = Me) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: a, call: c } = n, f = (I) => {
    (n.onWarn || Yt)(
      "Invalid watch source: ",
      I,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (I) => o ? I : St(I) || o === !1 || o === 0 ? jn(I, 1) : jn(I);
  let d, m, p, h, v = !1, _ = !1;
  if (Ke(e) ? (m = () => e.value, v = St(e)) : on(e) ? (m = () => u(e), v = !0) : de(e) ? (_ = !0, v = e.some((I) => on(I) || St(I)), m = () => e.map((I) => {
    if (Ke(I))
      return I.value;
    if (on(I))
      return u(I);
    if (ve(I))
      return c ? c(I, 2) : I();
    We.NODE_ENV !== "production" && f(I);
  })) : ve(e) ? t ? m = c ? () => c(e, 2) : e : m = () => {
    if (p) {
      an();
      try {
        p();
      } finally {
        ln();
      }
    }
    const I = Ss;
    Ss = d;
    try {
      return c ? c(e, 3, [h]) : e(h);
    } finally {
      Ss = I;
    }
  } : (m = ct, We.NODE_ENV !== "production" && f(e)), t && o) {
    const I = m, C = o === !0 ? 1 / 0 : o;
    m = () => jn(I(), C);
  }
  const y = eh(), E = () => {
    d.stop(), y && y.active && _c(y.effects, d);
  };
  if (r && t) {
    const I = t;
    t = (...C) => {
      I(...C), E();
    };
  }
  let g = _ ? new Array(e.length).fill(oi) : oi;
  const T = (I) => {
    if (!(!(d.flags & 1) || !d.dirty && !I))
      if (t) {
        const C = d.run();
        if (o || v || (_ ? C.some((D, F) => xt(D, g[F])) : xt(C, g))) {
          p && p();
          const D = Ss;
          Ss = d;
          try {
            const F = [
              C,
              // pass undefined as the old value when it's changed for the first time
              g === oi ? void 0 : _ && g[0] === oi ? [] : g,
              h
            ];
            g = C, c ? c(t, 3, F) : (
              // @ts-expect-error
              t(...F)
            );
          } finally {
            Ss = D;
          }
        }
      } else
        d.run();
  };
  return a && a(T), d = new th(m), d.scheduler = i ? () => i(T, !1) : T, h = (I) => my(I, !1, d), p = d.onStop = () => {
    const I = Ui.get(d);
    if (I) {
      if (c)
        c(I, 4);
      else
        for (const C of I) C();
      Ui.delete(d);
    }
  }, We.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? s ? T(!0) : g = d.run() : i ? i(T.bind(null, !0), !0) : d.run(), E.pause = d.pause.bind(d), E.resume = d.resume.bind(d), E.stop = E, E;
}
function jn(e, t = 1 / 0, n) {
  if (t <= 0 || !Fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ke(e))
    jn(e.value, t, n);
  else if (de(e))
    for (let s = 0; s < e.length; s++)
      jn(e[s], t, n);
  else if (Lo(e) || Rs(e))
    e.forEach((s) => {
      jn(s, t, n);
    });
  else if (Yp(e)) {
    for (const s in e)
      jn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && jn(e[s], t, n);
  }
  return e;
}
var k = {};
const Ps = [];
function yi(e) {
  Ps.push(e);
}
function bi() {
  Ps.pop();
}
let $a = !1;
function Y(e, ...t) {
  if ($a) return;
  $a = !0, an();
  const n = Ps.length ? Ps[Ps.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = vy();
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
          ({ vnode: r }) => `at <${_a(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ..._y(o)), console.warn(...r);
  }
  ln(), $a = !1;
}
function vy() {
  let e = Ps[Ps.length - 1];
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
function _y(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...yy(n));
  }), t;
}
function yy({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${_a(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...by(e.props), r] : [o + r];
}
function by(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...wh(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function wh(e, t, n) {
  return qe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ke(t) ? (t = wh(e, ye(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ve(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ye(t), n ? t : [`${e}=`, t]);
}
function Ey(e, t) {
  k.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? Y(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && Y(`${t} is NaN - the duration expression might be incorrect.`));
}
const Tc = {
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
function un(e, t, n, s) {
  if (ve(e)) {
    const o = Fo(e, t, n, s);
    return o && yc(o) && o.catch((r) => {
      jr(r, t, n);
    }), o;
  }
  if (de(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(un(e[r], t, n, s));
    return o;
  } else k.NODE_ENV !== "production" && Y(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function jr(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Me;
  if (t) {
    let a = t.parent;
    const c = t.proxy, f = k.NODE_ENV !== "production" ? Tc[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      an(), Fo(r, null, 10, [
        e,
        c,
        f
      ]), ln();
      return;
    }
  }
  wy(e, n, o, s, i);
}
function wy(e, t, n, s = !0, o = !1) {
  if (k.NODE_ENV !== "production") {
    const r = Tc[t];
    if (n && yi(n), Y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && bi(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const wt = [];
let yn = -1;
const yo = [];
let Jn = null, co = 0;
const Ah = /* @__PURE__ */ Promise.resolve();
let Hi = null;
const Ay = 100;
function wo(e) {
  const t = Hi || Ah;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Sy(e) {
  let t = yn + 1, n = wt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = wt[s], r = Sr(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function fa(e) {
  if (!(e.flags & 1)) {
    const t = Sr(e), n = wt[wt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Sr(n) ? wt.push(e) : wt.splice(Sy(t), 0, e), e.flags |= 1, Sh();
  }
}
function Sh() {
  Hi || (Hi = Ah.then(Th));
}
function Oh(e) {
  de(e) ? yo.push(...e) : Jn && e.id === -1 ? Jn.splice(co + 1, 0, e) : e.flags & 1 || (yo.push(e), e.flags |= 1), Sh();
}
function Du(e, t, n = yn + 1) {
  for (k.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < wt.length; n++) {
    const s = wt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || k.NODE_ENV !== "production" && Nc(t, s))
        continue;
      wt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ch(e) {
  if (yo.length) {
    const t = [...new Set(yo)].sort(
      (n, s) => Sr(n) - Sr(s)
    );
    if (yo.length = 0, Jn) {
      Jn.push(...t);
      return;
    }
    for (Jn = t, k.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), co = 0; co < Jn.length; co++) {
      const n = Jn[co];
      k.NODE_ENV !== "production" && Nc(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Jn = null, co = 0;
  }
}
const Sr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Th(e) {
  k.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = k.NODE_ENV !== "production" ? (n) => Nc(e, n) : ct;
  try {
    for (yn = 0; yn < wt.length; yn++) {
      const n = wt[yn];
      if (n && !(n.flags & 8)) {
        if (k.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Fo(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; yn < wt.length; yn++) {
      const n = wt[yn];
      n && (n.flags &= -2);
    }
    yn = -1, wt.length = 0, Ch(e), Hi = null, (wt.length || yo.length) && Th(e);
  }
}
function Nc(e, t) {
  const n = e.get(t) || 0;
  if (n > Ay) {
    const s = t.i, o = s && Vc(s.type);
    return jr(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let tn = !1;
const Ei = /* @__PURE__ */ new Map();
k.NODE_ENV !== "production" && (Br().__VUE_HMR_RUNTIME__ = {
  createRecord: Wa(Nh),
  rerender: Wa(Ty),
  reload: Wa(Ny)
});
const $s = /* @__PURE__ */ new Map();
function Oy(e) {
  const t = e.type.__hmrId;
  let n = $s.get(t);
  n || (Nh(t, e.type), n = $s.get(t)), n.instances.add(e);
}
function Cy(e) {
  $s.get(e.type.__hmrId).instances.delete(e);
}
function Nh(e, t) {
  return $s.has(e) ? !1 : ($s.set(e, {
    initialDef: $i(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function $i(e) {
  return ym(e) ? e.__vccOpts : e;
}
function Ty(e, t) {
  const n = $s.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, $i(s.type).render = t), s.renderCache = [], tn = !0, s.update(), tn = !1;
  }));
}
function Ny(e, t) {
  const n = $s.get(e);
  if (!n) return;
  t = $i(t), xu(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = $i(r.type);
    let a = Ei.get(i);
    a || (i !== n.initialDef && xu(i, t), Ei.set(i, a = /* @__PURE__ */ new Set())), a.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (a.add(r), r.ceReload(t.styles), a.delete(r)) : r.parent ? fa(() => {
      tn = !0, r.parent.update(), tn = !1, a.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Oh(() => {
    Ei.clear();
  });
}
function xu(e, t) {
  Qe(e, t);
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
let En, or = [], Tl = !1;
function Ur(e, ...t) {
  En ? En.emit(e, ...t) : Tl || or.push({ event: e, args: t });
}
function Dh(e, t) {
  var n, s;
  En = e, En ? (En.enabled = !0, or.forEach(({ event: o, args: r }) => En.emit(o, ...r)), or = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Dh(r, t);
  }), setTimeout(() => {
    En || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Tl = !0, or = []);
  }, 3e3)) : (Tl = !0, or = []);
}
function Dy(e, t) {
  Ur("app:init", e, t, {
    Fragment: we,
    Text: Wr,
    Comment: ot,
    Static: pr
  });
}
function xy(e) {
  Ur("app:unmount", e);
}
const ky = /* @__PURE__ */ Dc(
  "component:added"
  /* COMPONENT_ADDED */
), xh = /* @__PURE__ */ Dc(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ry = /* @__PURE__ */ Dc(
  "component:removed"
  /* COMPONENT_REMOVED */
), Iy = (e) => {
  En && typeof En.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !En.cleanupBuffer(e) && Ry(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Dc(e) {
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
const Py = /* @__PURE__ */ kh(
  "perf:start"
  /* PERFORMANCE_START */
), Vy = /* @__PURE__ */ kh(
  "perf:end"
  /* PERFORMANCE_END */
);
function kh(e) {
  return (t, n, s) => {
    Ur(e, t.appContext.app, t.uid, t, n, s);
  };
}
function My(e, t, n) {
  Ur(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let tt = null, Rh = null;
function Wi(e) {
  const t = tt;
  return tt = e, Rh = e && e.type.__scopeId || null, t;
}
function be(e, t = tt, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && qu(-1);
    const r = Wi(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Wi(r), s._d && qu(1);
    }
    return k.NODE_ENV !== "production" && xh(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ih(e) {
  S_(e) && Y("Do not use built-in directive ids as custom directive id: " + e);
}
function et(e, t) {
  if (tt === null)
    return k.NODE_ENV !== "production" && Y("withDirectives can only be used inside render functions."), e;
  const n = va(tt), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, a, c = Me] = t[o];
    r && (ve(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && jn(i), s.push({
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
function ys(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    r && (a.oldValue = r[i].value);
    let c = a.dir[s];
    c && (an(), un(c, n, 8, [
      e.el,
      a,
      e,
      t
    ]), ln());
  }
}
const Ph = Symbol("_vte"), Vh = (e) => e.__isTeleport, Vs = (e) => e && (e.disabled || e.disabled === ""), ku = (e) => e && (e.defer || e.defer === ""), Ru = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Iu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Nl = (e, t) => {
  const n = e && e.to;
  if (qe(n))
    if (t) {
      const s = t(n);
      return k.NODE_ENV !== "production" && !s && !Vs(e) && Y(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return k.NODE_ENV !== "production" && Y(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return k.NODE_ENV !== "production" && !n && !Vs(e) && Y(`Invalid Teleport target: ${n}`), n;
}, Mh = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, a, c, f) {
    const {
      mc: u,
      pc: d,
      pbc: m,
      o: { insert: p, querySelector: h, createText: v, createComment: _ }
    } = f, y = Vs(t.props);
    let { shapeFlag: E, children: g, dynamicChildren: T } = t;
    if (k.NODE_ENV !== "production" && tn && (c = !1, T = null), e == null) {
      const I = t.el = k.NODE_ENV !== "production" ? _("teleport start") : v(""), C = t.anchor = k.NODE_ENV !== "production" ? _("teleport end") : v("");
      p(I, n, s), p(C, n, s);
      const D = (O, S) => {
        E & 16 && (o && o.isCE && (o.ce._teleportTarget = O), u(
          g,
          O,
          S,
          o,
          r,
          i,
          a,
          c
        ));
      }, F = () => {
        const O = t.target = Nl(t.props, h), S = Lh(O, t, v, p);
        O ? (i !== "svg" && Ru(O) ? i = "svg" : i !== "mathml" && Iu(O) && (i = "mathml"), y || (D(O, S), wi(t, !1))) : k.NODE_ENV !== "production" && !y && Y(
          "Invalid Teleport target on mount:",
          O,
          `(${typeof O})`
        );
      };
      y && (D(n, C), wi(t, !0)), ku(t.props) ? (t.el.__isMounted = !1, Et(() => {
        F(), delete t.el.__isMounted;
      }, r)) : F();
    } else {
      if (ku(t.props) && e.el.__isMounted === !1) {
        Et(() => {
          Mh.process(
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
      const I = t.anchor = e.anchor, C = t.target = e.target, D = t.targetAnchor = e.targetAnchor, F = Vs(e.props), O = F ? n : C, S = F ? I : D;
      if (i === "svg" || Ru(C) ? i = "svg" : (i === "mathml" || Iu(C)) && (i = "mathml"), T ? (m(
        e.dynamicChildren,
        T,
        O,
        o,
        r,
        i,
        a
      ), fr(e, t, k.NODE_ENV === "production")) : c || d(
        e,
        t,
        O,
        S,
        o,
        r,
        i,
        a,
        !1
      ), y)
        F ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ri(
          t,
          n,
          I,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const R = t.target = Nl(
          t.props,
          h
        );
        R ? ri(
          t,
          R,
          null,
          f,
          0
        ) : k.NODE_ENV !== "production" && Y(
          "Invalid Teleport target on update:",
          C,
          `(${typeof C})`
        );
      } else F && ri(
        t,
        C,
        D,
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
      anchor: c,
      targetStart: f,
      targetAnchor: u,
      target: d,
      props: m
    } = e;
    if (d && (o(f), o(u)), r && o(c), i & 16) {
      const p = r || !Vs(m);
      for (let h = 0; h < a.length; h++) {
        const v = a[h];
        s(
          v,
          t,
          n,
          p,
          !!v.dynamicChildren
        );
      }
    }
  },
  move: ri,
  hydrate: Ly
};
function ri(e, t, n, { o: { insert: s }, m: o }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: c, children: f, props: u } = e, d = r === 2;
  if (d && s(i, t, n), (!d || Vs(u)) && c & 16)
    for (let m = 0; m < f.length; m++)
      o(
        f[m],
        t,
        n,
        2
      );
  d && s(a, t, n);
}
function Ly(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: a, querySelector: c, insert: f, createText: u }
}, d) {
  const m = t.target = Nl(
    t.props,
    c
  );
  if (m) {
    const p = Vs(t.props), h = m._lpa || m.firstChild;
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
        ), t.targetStart = h, t.targetAnchor = h && i(h);
      else {
        t.anchor = i(e);
        let v = h;
        for (; v; ) {
          if (v && v.nodeType === 8) {
            if (v.data === "teleport start anchor")
              t.targetStart = v;
            else if (v.data === "teleport anchor") {
              t.targetAnchor = v, m._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          v = i(v);
        }
        t.targetAnchor || Lh(m, t, u, f), d(
          h && i(h),
          t,
          m,
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
const Bo = Mh;
function wi(e, t) {
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
  return o[Ph] = r, e && (s(o, e), s(r, e)), r;
}
const Zn = Symbol("_leaveCb"), ii = Symbol("_enterCb");
function Fy() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ht(() => {
    e.isMounted = !0;
  }), zh(() => {
    e.isUnmounting = !0;
  }), e;
}
const $t = [Function, Array], Fh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: $t,
  onEnter: $t,
  onAfterEnter: $t,
  onEnterCancelled: $t,
  // leave
  onBeforeLeave: $t,
  onLeave: $t,
  onAfterLeave: $t,
  onLeaveCancelled: $t,
  // appear
  onBeforeAppear: $t,
  onAppear: $t,
  onAfterAppear: $t,
  onAppearCancelled: $t
}, Bh = (e) => {
  const t = e.subTree;
  return t.component ? Bh(t.component) : t;
}, By = {
  name: "BaseTransition",
  props: Fh,
  setup(e, { slots: t }) {
    const n = Rn(), s = Fy();
    return () => {
      const o = t.default && Hh(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = jh(o), i = ye(e), { mode: a } = i;
      if (k.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && Y(`invalid <transition> mode: ${a}`), s.isLeaving)
        return Ka(r);
      const c = Pu(r);
      if (!c)
        return Ka(r);
      let f = Dl(
        c,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => f = d
      );
      c.type !== ot && Or(c, f);
      let u = n.subTree && Pu(n.subTree);
      if (u && u.type !== ot && !Ts(c, u) && Bh(n).type !== ot) {
        let d = Dl(
          u,
          i,
          s,
          n
        );
        if (Or(u, d), a === "out-in" && c.type !== ot)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, Ka(r);
        a === "in-out" && c.type !== ot ? d.delayLeave = (m, p, h) => {
          const v = Uh(
            s,
            u
          );
          v[String(u.key)] = u, m[Zn] = () => {
            p(), m[Zn] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            h(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function jh(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== ot) {
        if (k.NODE_ENV !== "production" && n) {
          Y(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, k.NODE_ENV === "production") break;
      }
  }
  return t;
}
const jy = By;
function Uh(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Dl(e, t, n, s, o) {
  const {
    appear: r,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: c,
    onEnter: f,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: m,
    onLeave: p,
    onAfterLeave: h,
    onLeaveCancelled: v,
    onBeforeAppear: _,
    onAppear: y,
    onAfterAppear: E,
    onAppearCancelled: g
  } = t, T = String(e.key), I = Uh(n, e), C = (O, S) => {
    O && un(
      O,
      s,
      9,
      S
    );
  }, D = (O, S) => {
    const R = S[1];
    C(O, S), de(O) ? O.every((w) => w.length <= 1) && R() : O.length <= 1 && R();
  }, F = {
    mode: i,
    persisted: a,
    beforeEnter(O) {
      let S = c;
      if (!n.isMounted)
        if (r)
          S = _ || c;
        else
          return;
      O[Zn] && O[Zn](
        !0
        /* cancelled */
      );
      const R = I[T];
      R && Ts(e, R) && R.el[Zn] && R.el[Zn](), C(S, [O]);
    },
    enter(O) {
      let S = f, R = u, w = d;
      if (!n.isMounted)
        if (r)
          S = y || f, R = E || u, w = g || d;
        else
          return;
      let x = !1;
      const ee = O[ii] = (ne) => {
        x || (x = !0, ne ? C(w, [O]) : C(R, [O]), F.delayedLeave && F.delayedLeave(), O[ii] = void 0);
      };
      S ? D(S, [O, ee]) : ee();
    },
    leave(O, S) {
      const R = String(e.key);
      if (O[ii] && O[ii](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return S();
      C(m, [O]);
      let w = !1;
      const x = O[Zn] = (ee) => {
        w || (w = !0, S(), ee ? C(v, [O]) : C(h, [O]), O[Zn] = void 0, I[R] === e && delete I[R]);
      };
      I[R] = e, p ? D(p, [O, x]) : x();
    },
    clone(O) {
      const S = Dl(
        O,
        t,
        n,
        s,
        o
      );
      return o && o(S), S;
    }
  };
  return F;
}
function Ka(e) {
  if (Hr(e))
    return e = Dn(e), e.children = null, e;
}
function Pu(e) {
  if (!Hr(e))
    return Vh(e.type) && e.children ? jh(e.children) : e;
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
function Or(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Or(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Hh(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === we ? (i.patchFlag & 128 && o++, s = s.concat(
      Hh(i.children, t, a)
    )) : (t || i.type !== ot) && s.push(a != null ? Dn(i, { key: a }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Te(e, t) {
  return ve(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Qe({ name: e.name }, t, { setup: e })
  ) : e;
}
function $h(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Wh = /* @__PURE__ */ new WeakSet();
function Uy(e) {
  const t = Rn(), n = _h(null);
  if (t) {
    const o = t.refs === Me ? t.refs = {} : t.refs;
    let r;
    k.NODE_ENV !== "production" && (r = Object.getOwnPropertyDescriptor(o, e)) && !r.configurable ? Y(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else k.NODE_ENV !== "production" && Y(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = k.NODE_ENV !== "production" ? Cc(n) : n;
  return k.NODE_ENV !== "production" && Wh.add(s), s;
}
function dr(e, t, n, s, o = !1) {
  if (de(e)) {
    e.forEach(
      (h, v) => dr(
        h,
        t && (de(t) ? t[v] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (bo(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && dr(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? va(s.component) : s.el, i = o ? null : r, { i: a, r: c } = e;
  if (k.NODE_ENV !== "production" && !a) {
    Y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = a.refs === Me ? a.refs = {} : a.refs, d = a.setupState, m = ye(d), p = d === Me ? () => !1 : (h) => k.NODE_ENV !== "production" && (Le(m, h) && !Ke(m[h]) && Y(
    `Template ref "${h}" used on a non-ref value. It will not work in the production build.`
  ), Wh.has(m[h])) ? !1 : Le(m, h);
  if (f != null && f !== c && (qe(f) ? (u[f] = null, p(f) && (d[f] = null)) : Ke(f) && (f.value = null)), ve(c))
    Fo(c, a, 12, [i, u]);
  else {
    const h = qe(c), v = Ke(c);
    if (h || v) {
      const _ = () => {
        if (e.f) {
          const y = h ? p(c) ? d[c] : u[c] : c.value;
          o ? de(y) && _c(y, r) : de(y) ? y.includes(r) || y.push(r) : h ? (u[c] = [r], p(c) && (d[c] = u[c])) : (c.value = [r], e.k && (u[e.k] = c.value));
        } else h ? (u[c] = i, p(c) && (d[c] = i)) : v ? (c.value = i, e.k && (u[e.k] = i)) : k.NODE_ENV !== "production" && Y("Invalid template ref type:", c, `(${typeof c})`);
      };
      i ? (_.id = -1, Et(_, n)) : _();
    } else k.NODE_ENV !== "production" && Y("Invalid template ref type:", c, `(${typeof c})`);
  }
}
Br().requestIdleCallback;
Br().cancelIdleCallback;
const bo = (e) => !!e.type.__asyncLoader, Hr = (e) => e.type.__isKeepAlive;
function Hy(e, t) {
  Kh(e, "a", t);
}
function $y(e, t) {
  Kh(e, "da", t);
}
function Kh(e, t, n = at) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (pa(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Hr(o.parent.vnode) && Wy(s, t, n, o), o = o.parent;
  }
}
function Wy(e, t, n, s) {
  const o = pa(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  $r(() => {
    _c(s[t], o);
  }, n);
}
function pa(e, t, n = at, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      an();
      const a = Kr(n), c = un(t, n, e, i);
      return a(), ln(), c;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (k.NODE_ENV !== "production") {
    const o = As(Tc[e].replace(/ hook$/, ""));
    Y(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const qn = (e) => (t, n = at) => {
  (!Tr || e === "sp") && pa(e, (...s) => t(...s), n);
}, Ky = qn("bm"), Ht = qn("m"), zy = qn(
  "bu"
), qy = qn("u"), zh = qn(
  "bum"
), $r = qn("um"), Yy = qn(
  "sp"
), Xy = qn("rtg"), Gy = qn("rtc");
function Qy(e, t = at) {
  pa("ec", e, t);
}
const xl = "components", Jy = "directives";
function Je(e, t) {
  return qh(xl, e, !0, t) || e;
}
const Zy = Symbol.for("v-ndc");
function eb(e) {
  return qh(Jy, e);
}
function qh(e, t, n = !0, s = !1) {
  const o = tt || at;
  if (o) {
    const r = o.type;
    if (e === xl) {
      const a = Vc(
        r,
        !1
      );
      if (a && (a === t || a === vt(t) || a === js(vt(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Vu(o[e] || r[e], t) || // global registration
      Vu(o.appContext[e], t)
    );
    if (!i && s)
      return r;
    if (k.NODE_ENV !== "production" && n && !i) {
      const a = e === xl ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      Y(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else k.NODE_ENV !== "production" && Y(
    `resolve${js(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Vu(e, t) {
  return e && (e[t] || e[vt(t)] || e[js(vt(t))]);
}
function Xe(e, t, n, s) {
  let o;
  const r = n, i = de(e);
  if (i || qe(e)) {
    const a = i && on(e);
    let c = !1, f = !1;
    a && (c = !St(e), f = Nn(e), e = ca(e)), o = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      o[u] = t(
        c ? f ? ji(pt(e[u])) : pt(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    k.NODE_ENV !== "production" && !Number.isInteger(e) && Y(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, r);
  } else if (Fe(e))
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
function Ie(e, t, n = {}, s, o) {
  if (tt.ce || tt.parent && bo(tt.parent) && tt.parent.ce)
    return t !== "default" && (n.name = t), N(), rt(
      we,
      null,
      [ce("slot", n, s && s())],
      64
    );
  let r = e[t];
  k.NODE_ENV !== "production" && r && r.length > 1 && (Y(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), N();
  const i = r && Yh(r(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, c = rt(
    we,
    {
      key: (a && !rn(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), r && r._c && (r._d = !0), c;
}
function Yh(e) {
  return e.some((t) => Ws(t) ? !(t.type === ot || t.type === we && !Yh(t.children)) : !0) ? e : null;
}
const kl = (e) => e ? vm(e) ? va(e) : kl(e.parent) : null, Ms = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Qe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => k.NODE_ENV !== "production" ? wn(e.props) : e.props,
    $attrs: (e) => k.NODE_ENV !== "production" ? wn(e.attrs) : e.attrs,
    $slots: (e) => k.NODE_ENV !== "production" ? wn(e.slots) : e.slots,
    $refs: (e) => k.NODE_ENV !== "production" ? wn(e.refs) : e.refs,
    $parent: (e) => kl(e.parent),
    $root: (e) => kl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Qh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      fa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wo.bind(e.proxy)),
    $watch: (e) => Pb.bind(e)
  })
), xc = (e) => e === "_" || e === "$", za = (e, t) => e !== Me && !e.__isScriptSetup && Le(e, t), Xh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: a, appContext: c } = e;
    if (k.NODE_ENV !== "production" && t === "__isVue")
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
        if (za(s, t))
          return i[t] = 1, s[t];
        if (o !== Me && Le(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && Le(f, t)
        )
          return i[t] = 3, r[t];
        if (n !== Me && Le(n, t))
          return i[t] = 4, n[t];
        Rl && (i[t] = 0);
      }
    }
    const u = Ms[t];
    let d, m;
    if (u)
      return t === "$attrs" ? (lt(e.attrs, "get", ""), k.NODE_ENV !== "production" && qi()) : k.NODE_ENV !== "production" && t === "$slots" && lt(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Me && Le(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      m = c.config.globalProperties, Le(m, t)
    )
      return m[t];
    k.NODE_ENV !== "production" && tt && (!qe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Me && xc(t[0]) && Le(o, t) ? Y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === tt && Y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return za(o, t) ? (o[t] = n, !0) : k.NODE_ENV !== "production" && o.__isScriptSetup && Le(o, t) ? (Y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== Me && Le(s, t) ? (s[t] = n, !0) : Le(e.props, t) ? (k.NODE_ENV !== "production" && Y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (k.NODE_ENV !== "production" && Y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (k.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let a;
    return !!n[i] || e !== Me && Le(e, i) || za(t, i) || (a = r[0]) && Le(a, i) || Le(s, i) || Le(Ms, i) || Le(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Le(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
k.NODE_ENV !== "production" && (Xh.ownKeys = (e) => (Y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function tb(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Ms).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Ms[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ct
    });
  }), t;
}
function nb(e) {
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
function sb(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ye(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (xc(s[0])) {
        Y(
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
function Mu(e) {
  return de(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ob() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? Y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Rl = !0;
function rb(e) {
  const t = Qh(e), n = e.proxy, s = e.ctx;
  Rl = !1, t.beforeCreate && Lu(t.beforeCreate, e, "bc");
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
    mounted: m,
    beforeUpdate: p,
    updated: h,
    activated: v,
    deactivated: _,
    beforeDestroy: y,
    beforeUnmount: E,
    destroyed: g,
    unmounted: T,
    render: I,
    renderTracked: C,
    renderTriggered: D,
    errorCaptured: F,
    serverPrefetch: O,
    // public API
    expose: S,
    inheritAttrs: R,
    // assets
    components: w,
    directives: x,
    filters: ee
  } = t, ne = k.NODE_ENV !== "production" ? ob() : null;
  if (k.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L)
      for (const $ in L)
        ne("Props", $);
  }
  if (f && ib(f, s, ne), i)
    for (const L in i) {
      const $ = i[L];
      ve($) ? (k.NODE_ENV !== "production" ? Object.defineProperty(s, L, {
        value: $.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[L] = $.bind(n), k.NODE_ENV !== "production" && ne("Methods", L)) : k.NODE_ENV !== "production" && Y(
        `Method "${L}" has type "${typeof $}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    k.NODE_ENV !== "production" && !ve(o) && Y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const L = o.call(n, n);
    if (k.NODE_ENV !== "production" && yc(L) && Y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Fe(L))
      k.NODE_ENV !== "production" && Y("data() should return an object.");
    else if (e.data = Hs(L), k.NODE_ENV !== "production")
      for (const $ in L)
        ne("Data", $), xc($[0]) || Object.defineProperty(s, $, {
          configurable: !0,
          enumerable: !0,
          get: () => L[$],
          set: ct
        });
  }
  if (Rl = !0, r)
    for (const L in r) {
      const $ = r[L], J = ve($) ? $.bind(n, n) : ve($.get) ? $.get.bind(n, n) : ct;
      k.NODE_ENV !== "production" && J === ct && Y(`Computed property "${L}" has no getter.`);
      const Oe = !ve($) && ve($.set) ? $.set.bind(n) : k.NODE_ENV !== "production" ? () => {
        Y(
          `Write operation failed: computed property "${L}" is readonly.`
        );
      } : ct, Re = W({
        get: J,
        set: Oe
      });
      Object.defineProperty(s, L, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (Ae) => Re.value = Ae
      }), k.NODE_ENV !== "production" && ne("Computed", L);
    }
  if (a)
    for (const L in a)
      Gh(a[L], s, n, L);
  if (c) {
    const L = ve(c) ? c.call(n) : c;
    Reflect.ownKeys(L).forEach(($) => {
      Eo($, L[$]);
    });
  }
  u && Lu(u, e, "c");
  function V(L, $) {
    de($) ? $.forEach((J) => L(J.bind(n))) : $ && L($.bind(n));
  }
  if (V(Ky, d), V(Ht, m), V(zy, p), V(qy, h), V(Hy, v), V($y, _), V(Qy, F), V(Gy, C), V(Xy, D), V(zh, E), V($r, T), V(Yy, O), de(S))
    if (S.length) {
      const L = e.exposed || (e.exposed = {});
      S.forEach(($) => {
        Object.defineProperty(L, $, {
          get: () => n[$],
          set: (J) => n[$] = J
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === ct && (e.render = I), R != null && (e.inheritAttrs = R), w && (e.components = w), x && (e.directives = x), O && $h(e);
}
function ib(e, t, n = ct) {
  de(e) && (e = Il(e));
  for (const s in e) {
    const o = e[s];
    let r;
    Fe(o) ? "default" in o ? r = _t(
      o.from || s,
      o.default,
      !0
    ) : r = _t(o.from || s) : r = _t(o), Ke(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, k.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Lu(e, t, n) {
  un(
    de(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Gh(e, t, n, s) {
  let o = s.includes(".") ? lm(n, s) : () => n[s];
  if (qe(e)) {
    const r = t[e];
    ve(r) ? Lt(o, r) : k.NODE_ENV !== "production" && Y(`Invalid watch handler specified by key "${e}"`, r);
  } else if (ve(e))
    Lt(o, e.bind(n));
  else if (Fe(e))
    if (de(e))
      e.forEach((r) => Gh(r, t, n, s));
    else {
      const r = ve(e.handler) ? e.handler.bind(n) : t[e.handler];
      ve(r) ? Lt(o, r, e) : k.NODE_ENV !== "production" && Y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else k.NODE_ENV !== "production" && Y(`Invalid watch option: "${s}"`, e);
}
function Qh(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = r.get(t);
  let c;
  return a ? c = a : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (f) => Ki(c, f, i, !0)
  ), Ki(c, t, i)), Fe(t) && r.set(t, c), c;
}
function Ki(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Ki(e, r, n, !0), o && o.forEach(
    (i) => Ki(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      k.NODE_ENV !== "production" && Y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = ab[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const ab = {
  data: Fu,
  props: Bu,
  emits: Bu,
  // objects
  methods: rr,
  computed: rr,
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
  components: rr,
  directives: rr,
  // watch
  watch: cb,
  // provide / inject
  provide: Fu,
  inject: lb
};
function Fu(e, t) {
  return t ? e ? function() {
    return Qe(
      ve(e) ? e.call(this, this) : e,
      ve(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function lb(e, t) {
  return rr(Il(e), Il(t));
}
function Il(e) {
  if (de(e)) {
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
function rr(e, t) {
  return e ? Qe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Bu(e, t) {
  return e ? de(e) && de(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Qe(
    /* @__PURE__ */ Object.create(null),
    Mu(e),
    Mu(t ?? {})
  ) : t;
}
function cb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Qe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = bt(e[s], t[s]);
  return n;
}
function Jh() {
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
let ub = 0;
function db(e, t) {
  return function(s, o = null) {
    ve(s) || (s = Qe({}, s)), o != null && !Fe(o) && (k.NODE_ENV !== "production" && Y("root props passed to app.mount() must be an object."), o = null);
    const r = Jh(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let c = !1;
    const f = r.app = {
      _uid: ub++,
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
        k.NODE_ENV !== "production" && Y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...d) {
        return i.has(u) ? k.NODE_ENV !== "production" && Y("Plugin has already been applied to target app.") : u && ve(u.install) ? (i.add(u), u.install(f, ...d)) : ve(u) ? (i.add(u), u(f, ...d)) : k.NODE_ENV !== "production" && Y(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return r.mixins.includes(u) ? k.NODE_ENV !== "production" && Y(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), f;
      },
      component(u, d) {
        return k.NODE_ENV !== "production" && Fl(u, r.config), d ? (k.NODE_ENV !== "production" && r.components[u] && Y(`Component "${u}" has already been registered in target app.`), r.components[u] = d, f) : r.components[u];
      },
      directive(u, d) {
        return k.NODE_ENV !== "production" && Ih(u), d ? (k.NODE_ENV !== "production" && r.directives[u] && Y(`Directive "${u}" has already been registered in target app.`), r.directives[u] = d, f) : r.directives[u];
      },
      mount(u, d, m) {
        if (c)
          k.NODE_ENV !== "production" && Y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          k.NODE_ENV !== "production" && u.__vue_app__ && Y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = f._ceVNode || ce(s, o);
          return p.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), k.NODE_ENV !== "production" && (r.reload = () => {
            const h = Dn(p);
            h.el = null, e(h, u, m);
          }), e(p, u, m), c = !0, f._container = u, u.__vue_app__ = f, k.NODE_ENV !== "production" && (f._instance = p.component, Dy(f, Qu)), va(p.component);
        }
      },
      onUnmount(u) {
        k.NODE_ENV !== "production" && typeof u != "function" && Y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        c ? (un(
          a,
          f._instance,
          16
        ), e(null, f._container), k.NODE_ENV !== "production" && (f._instance = null, xy(f)), delete f._container.__vue_app__) : k.NODE_ENV !== "production" && Y("Cannot unmount an app that is not mounted.");
      },
      provide(u, d) {
        return k.NODE_ENV !== "production" && u in r.provides && (Le(r.provides, u) ? Y(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : Y(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[u] = d, f;
      },
      runWithContext(u) {
        const d = Ls;
        Ls = f;
        try {
          return u();
        } finally {
          Ls = d;
        }
      }
    };
    return f;
  };
}
let Ls = null;
function Eo(e, t) {
  if (!at)
    k.NODE_ENV !== "production" && Y("provide() can only be used inside setup().");
  else {
    let n = at.provides;
    const s = at.parent && at.parent.provides;
    s === n && (n = at.provides = Object.create(s)), n[e] = t;
  }
}
function _t(e, t, n = !1) {
  const s = at || tt;
  if (s || Ls) {
    let o = Ls ? Ls._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ve(t) ? t.call(s && s.proxy) : t;
    k.NODE_ENV !== "production" && Y(`injection "${String(e)}" not found.`);
  } else k.NODE_ENV !== "production" && Y("inject() can only be used inside setup() or functional components.");
}
function fb() {
  return !!(at || tt || Ls);
}
const Zh = {}, em = () => Object.create(Zh), tm = (e) => Object.getPrototypeOf(e) === Zh;
function pb(e, t, n, s = !1) {
  const o = {}, r = em();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), nm(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  k.NODE_ENV !== "production" && om(t || {}, o, e), n ? e.props = s ? o : vh(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function hb(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function mb(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, a = ye(o), [c] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(k.NODE_ENV !== "production" && hb(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let m = u[d];
        if (ga(e.emitsOptions, m))
          continue;
        const p = t[m];
        if (c)
          if (Le(r, m))
            p !== r[m] && (r[m] = p, f = !0);
          else {
            const h = vt(m);
            o[h] = Pl(
              c,
              a,
              h,
              p,
              e,
              !1
            );
          }
        else
          p !== r[m] && (r[m] = p, f = !0);
      }
    }
  } else {
    nm(e, t, o, r) && (f = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !Le(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Tn(d)) === d || !Le(t, u))) && (c ? n && // for camelCase
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
        (!t || !Le(t, d)) && (delete r[d], f = !0);
  }
  f && bn(e.attrs, "set", ""), k.NODE_ENV !== "production" && om(t || {}, o, e);
}
function nm(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let c in t) {
      if (lr(c))
        continue;
      const f = t[c];
      let u;
      o && Le(o, u = vt(c)) ? !r || !r.includes(u) ? n[u] = f : (a || (a = {}))[u] = f : ga(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f, i = !0);
    }
  if (r) {
    const c = ye(n), f = a || Me;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = Pl(
        o,
        c,
        d,
        f[d],
        e,
        !Le(f, d)
      );
    }
  }
  return i;
}
function Pl(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const a = Le(i, "default");
    if (a && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && ve(c)) {
        const { propsDefaults: f } = o;
        if (n in f)
          s = f[n];
        else {
          const u = Kr(o);
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
    ] && (s === "" || s === Tn(n)) && (s = !0));
  }
  return s;
}
const gb = /* @__PURE__ */ new WeakMap();
function sm(e, t, n = !1) {
  const s = n ? gb : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, a = [];
  let c = !1;
  if (!ve(e)) {
    const u = (d) => {
      c = !0;
      const [m, p] = sm(d, t, !0);
      Qe(i, m), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return Fe(e) && s.set(e, _o), _o;
  if (de(r))
    for (let u = 0; u < r.length; u++) {
      k.NODE_ENV !== "production" && !qe(r[u]) && Y("props must be strings when using array syntax.", r[u]);
      const d = vt(r[u]);
      ju(d) && (i[d] = Me);
    }
  else if (r) {
    k.NODE_ENV !== "production" && !Fe(r) && Y("invalid props options", r);
    for (const u in r) {
      const d = vt(u);
      if (ju(d)) {
        const m = r[u], p = i[d] = de(m) || ve(m) ? { type: m } : Qe({}, m), h = p.type;
        let v = !1, _ = !0;
        if (de(h))
          for (let y = 0; y < h.length; ++y) {
            const E = h[y], g = ve(E) && E.name;
            if (g === "Boolean") {
              v = !0;
              break;
            } else g === "String" && (_ = !1);
          }
        else
          v = ve(h) && h.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = v, p[
          1
          /* shouldCastTrue */
        ] = _, (v || Le(p, "default")) && a.push(d);
      }
    }
  }
  const f = [i, a];
  return Fe(e) && s.set(e, f), f;
}
function ju(e) {
  return e[0] !== "$" && !lr(e) ? !0 : (k.NODE_ENV !== "production" && Y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function vb(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function om(e, t, n) {
  const s = ye(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => vt(i));
  for (const i in o) {
    let a = o[i];
    a != null && _b(
      i,
      s[i],
      a,
      k.NODE_ENV !== "production" ? wn(s) : s,
      !r.includes(i)
    );
  }
}
function _b(e, t, n, s, o) {
  const { type: r, required: i, validator: a, skipCheck: c } = n;
  if (i && o) {
    Y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !c) {
      let f = !1;
      const u = de(r) ? r : [r], d = [];
      for (let m = 0; m < u.length && !f; m++) {
        const { valid: p, expectedType: h } = bb(t, u[m]);
        d.push(h || ""), f = p;
      }
      if (!f) {
        Y(Eb(e, t, d));
        return;
      }
    }
    a && !a(t, s) && Y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const yb = /* @__PURE__ */ zn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function bb(e, t) {
  let n;
  const s = vb(t);
  if (s === "null")
    n = e === null;
  else if (yb(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = Fe(e) : s === "Array" ? n = de(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Eb(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(js).join(" | ")}`;
  const o = n[0], r = bc(t), i = Uu(t, o), a = Uu(t, r);
  return n.length === 1 && Hu(o) && !wb(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, Hu(r) && (s += `with value ${a}.`), s;
}
function Uu(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Hu(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function wb(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const kc = (e) => e[0] === "_" || e === "$stable", Rc = (e) => de(e) ? e.map(en) : [en(e)], Ab = (e, t, n) => {
  if (t._n)
    return t;
  const s = be((...o) => (k.NODE_ENV !== "production" && at && !(n === null && tt) && !(n && n.root !== at.root) && Y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Rc(t(...o))), n);
  return s._c = !1, s;
}, rm = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (kc(o)) continue;
    const r = e[o];
    if (ve(r))
      t[o] = Ab(o, r, s);
    else if (r != null) {
      k.NODE_ENV !== "production" && Y(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Rc(r);
      t[o] = () => i;
    }
  }
}, im = (e, t) => {
  k.NODE_ENV !== "production" && !Hr(e.vnode) && Y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Rc(t);
  e.slots.default = () => n;
}, Vl = (e, t, n) => {
  for (const s in t)
    (n || !kc(s)) && (e[s] = t[s]);
}, Sb = (e, t, n) => {
  const s = e.slots = em();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && br(s, "__", o, !0);
    const r = t._;
    r ? (Vl(s, t, n), n && br(s, "_", r, !0)) : rm(t, s);
  } else t && im(e, t);
}, Ob = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = Me;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? k.NODE_ENV !== "production" && tn ? (Vl(o, t, n), bn(e, "set", "$slots")) : n && a === 1 ? r = !1 : Vl(o, t, n) : (r = !t.$stable, rm(t, o)), i = t;
  } else t && (im(e, t), i = { default: 1 });
  if (r)
    for (const a in o)
      !kc(a) && i[a] == null && delete o[a];
};
let Go, ns;
function no(e, t) {
  e.appContext.config.performance && zi() && ns.mark(`vue-${t}-${e.uid}`), k.NODE_ENV !== "production" && Py(e, t, zi() ? ns.now() : Date.now());
}
function so(e, t) {
  if (e.appContext.config.performance && zi()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    ns.mark(s), ns.measure(
      `<${_a(e, e.type)}> ${t}`,
      n,
      s
    ), ns.clearMarks(n), ns.clearMarks(s);
  }
  k.NODE_ENV !== "production" && Vy(e, t, zi() ? ns.now() : Date.now());
}
function zi() {
  return Go !== void 0 || (typeof window < "u" && window.performance ? (Go = !0, ns = window.performance) : Go = !1), Go;
}
function Cb() {
  const e = [];
  if (k.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Et = Ub;
function Tb(e) {
  return Nb(e);
}
function Nb(e, t) {
  Cb();
  const n = Br();
  n.__VUE__ = !0, k.NODE_ENV !== "production" && Dh(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    nextSibling: m,
    setScopeId: p = ct,
    insertStaticContent: h
  } = e, v = (b, A, M, K = null, H = null, z = null, ie = void 0, te = null, se = k.NODE_ENV !== "production" && tn ? !1 : !!A.dynamicChildren) => {
    if (b === A)
      return;
    b && !Ts(b, A) && (K = re(b), Ne(b, H, z, !0), b = null), A.patchFlag === -2 && (se = !1, A.dynamicChildren = null);
    const { type: Q, ref: me, shapeFlag: oe } = A;
    switch (Q) {
      case Wr:
        _(b, A, M, K);
        break;
      case ot:
        y(b, A, M, K);
        break;
      case pr:
        b == null ? E(A, M, K, ie) : k.NODE_ENV !== "production" && g(b, A, M, ie);
        break;
      case we:
        x(
          b,
          A,
          M,
          K,
          H,
          z,
          ie,
          te,
          se
        );
        break;
      default:
        oe & 1 ? C(
          b,
          A,
          M,
          K,
          H,
          z,
          ie,
          te,
          se
        ) : oe & 6 ? ee(
          b,
          A,
          M,
          K,
          H,
          z,
          ie,
          te,
          se
        ) : oe & 64 || oe & 128 ? Q.process(
          b,
          A,
          M,
          K,
          H,
          z,
          ie,
          te,
          se,
          De
        ) : k.NODE_ENV !== "production" && Y("Invalid VNode type:", Q, `(${typeof Q})`);
    }
    me != null && H ? dr(me, b && b.ref, z, A || b, !A) : me == null && b && b.ref != null && dr(b.ref, null, z, b, !0);
  }, _ = (b, A, M, K) => {
    if (b == null)
      s(
        A.el = a(A.children),
        M,
        K
      );
    else {
      const H = A.el = b.el;
      A.children !== b.children && f(H, A.children);
    }
  }, y = (b, A, M, K) => {
    b == null ? s(
      A.el = c(A.children || ""),
      M,
      K
    ) : A.el = b.el;
  }, E = (b, A, M, K) => {
    [b.el, b.anchor] = h(
      b.children,
      A,
      M,
      K,
      b.el,
      b.anchor
    );
  }, g = (b, A, M, K) => {
    if (A.children !== b.children) {
      const H = m(b.anchor);
      I(b), [A.el, A.anchor] = h(
        A.children,
        M,
        H,
        K
      );
    } else
      A.el = b.el, A.anchor = b.anchor;
  }, T = ({ el: b, anchor: A }, M, K) => {
    let H;
    for (; b && b !== A; )
      H = m(b), s(b, M, K), b = H;
    s(A, M, K);
  }, I = ({ el: b, anchor: A }) => {
    let M;
    for (; b && b !== A; )
      M = m(b), o(b), b = M;
    o(A);
  }, C = (b, A, M, K, H, z, ie, te, se) => {
    A.type === "svg" ? ie = "svg" : A.type === "math" && (ie = "mathml"), b == null ? D(
      A,
      M,
      K,
      H,
      z,
      ie,
      te,
      se
    ) : S(
      b,
      A,
      H,
      z,
      ie,
      te,
      se
    );
  }, D = (b, A, M, K, H, z, ie, te) => {
    let se, Q;
    const { props: me, shapeFlag: oe, transition: he, dirs: _e } = b;
    if (se = b.el = i(
      b.type,
      z,
      me && me.is,
      me
    ), oe & 8 ? u(se, b.children) : oe & 16 && O(
      b.children,
      se,
      null,
      K,
      H,
      qa(b, z),
      ie,
      te
    ), _e && ys(b, null, K, "created"), F(se, b, b.scopeId, ie, K), me) {
      for (const je in me)
        je !== "value" && !lr(je) && r(se, je, null, me[je], z, K);
      "value" in me && r(se, "value", null, me.value, z), (Q = me.onVnodeBeforeMount) && gn(Q, K, b);
    }
    k.NODE_ENV !== "production" && (br(se, "__vnode", b, !0), br(se, "__vueParentComponent", K, !0)), _e && ys(b, null, K, "beforeMount");
    const Pe = Db(H, he);
    Pe && he.beforeEnter(se), s(se, A, M), ((Q = me && me.onVnodeMounted) || Pe || _e) && Et(() => {
      Q && gn(Q, K, b), Pe && he.enter(se), _e && ys(b, null, K, "mounted");
    }, H);
  }, F = (b, A, M, K, H) => {
    if (M && p(b, M), K)
      for (let z = 0; z < K.length; z++)
        p(b, K[z]);
    if (H) {
      let z = H.subTree;
      if (k.NODE_ENV !== "production" && z.patchFlag > 0 && z.patchFlag & 2048 && (z = Ic(z.children) || z), A === z || fm(z.type) && (z.ssContent === A || z.ssFallback === A)) {
        const ie = H.vnode;
        F(
          b,
          ie,
          ie.scopeId,
          ie.slotScopeIds,
          H.parent
        );
      }
    }
  }, O = (b, A, M, K, H, z, ie, te, se = 0) => {
    for (let Q = se; Q < b.length; Q++) {
      const me = b[Q] = te ? es(b[Q]) : en(b[Q]);
      v(
        null,
        me,
        A,
        M,
        K,
        H,
        z,
        ie,
        te
      );
    }
  }, S = (b, A, M, K, H, z, ie) => {
    const te = A.el = b.el;
    k.NODE_ENV !== "production" && (te.__vnode = A);
    let { patchFlag: se, dynamicChildren: Q, dirs: me } = A;
    se |= b.patchFlag & 16;
    const oe = b.props || Me, he = A.props || Me;
    let _e;
    if (M && bs(M, !1), (_e = he.onVnodeBeforeUpdate) && gn(_e, M, A, b), me && ys(A, b, M, "beforeUpdate"), M && bs(M, !0), k.NODE_ENV !== "production" && tn && (se = 0, ie = !1, Q = null), (oe.innerHTML && he.innerHTML == null || oe.textContent && he.textContent == null) && u(te, ""), Q ? (R(
      b.dynamicChildren,
      Q,
      te,
      M,
      K,
      qa(A, H),
      z
    ), k.NODE_ENV !== "production" && fr(b, A)) : ie || J(
      b,
      A,
      te,
      null,
      M,
      K,
      qa(A, H),
      z,
      !1
    ), se > 0) {
      if (se & 16)
        w(te, oe, he, M, H);
      else if (se & 2 && oe.class !== he.class && r(te, "class", null, he.class, H), se & 4 && r(te, "style", oe.style, he.style, H), se & 8) {
        const Pe = A.dynamicProps;
        for (let je = 0; je < Pe.length; je++) {
          const $e = Pe[je], Nt = oe[$e], Dt = he[$e];
          (Dt !== Nt || $e === "value") && r(te, $e, Nt, Dt, H, M);
        }
      }
      se & 1 && b.children !== A.children && u(te, A.children);
    } else !ie && Q == null && w(te, oe, he, M, H);
    ((_e = he.onVnodeUpdated) || me) && Et(() => {
      _e && gn(_e, M, A, b), me && ys(A, b, M, "updated");
    }, K);
  }, R = (b, A, M, K, H, z, ie) => {
    for (let te = 0; te < A.length; te++) {
      const se = b[te], Q = A[te], me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        se.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (se.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ts(se, Q) || // - In the case of a component, it could contain anything.
        se.shapeFlag & 198) ? d(se.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          M
        )
      );
      v(
        se,
        Q,
        me,
        null,
        K,
        H,
        z,
        ie,
        !0
      );
    }
  }, w = (b, A, M, K, H) => {
    if (A !== M) {
      if (A !== Me)
        for (const z in A)
          !lr(z) && !(z in M) && r(
            b,
            z,
            A[z],
            null,
            H,
            K
          );
      for (const z in M) {
        if (lr(z)) continue;
        const ie = M[z], te = A[z];
        ie !== te && z !== "value" && r(b, z, te, ie, H, K);
      }
      "value" in M && r(b, "value", A.value, M.value, H);
    }
  }, x = (b, A, M, K, H, z, ie, te, se) => {
    const Q = A.el = b ? b.el : a(""), me = A.anchor = b ? b.anchor : a("");
    let { patchFlag: oe, dynamicChildren: he, slotScopeIds: _e } = A;
    k.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (tn || oe & 2048) && (oe = 0, se = !1, he = null), _e && (te = te ? te.concat(_e) : _e), b == null ? (s(Q, M, K), s(me, M, K), O(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      A.children || [],
      M,
      me,
      H,
      z,
      ie,
      te,
      se
    )) : oe > 0 && oe & 64 && he && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren ? (R(
      b.dynamicChildren,
      he,
      M,
      H,
      z,
      ie,
      te
    ), k.NODE_ENV !== "production" ? fr(b, A) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (A.key != null || H && A === H.subTree) && fr(
        b,
        A,
        !0
        /* shallow */
      )
    )) : J(
      b,
      A,
      M,
      me,
      H,
      z,
      ie,
      te,
      se
    );
  }, ee = (b, A, M, K, H, z, ie, te, se) => {
    A.slotScopeIds = te, b == null ? A.shapeFlag & 512 ? H.ctx.activate(
      A,
      M,
      K,
      ie,
      se
    ) : ne(
      A,
      M,
      K,
      H,
      z,
      ie,
      se
    ) : V(b, A, se);
  }, ne = (b, A, M, K, H, z, ie) => {
    const te = b.component = zb(
      b,
      K,
      H
    );
    if (k.NODE_ENV !== "production" && te.type.__hmrId && Oy(te), k.NODE_ENV !== "production" && (yi(b), no(te, "mount")), Hr(b) && (te.ctx.renderer = De), k.NODE_ENV !== "production" && no(te, "init"), Yb(te, !1, ie), k.NODE_ENV !== "production" && so(te, "init"), k.NODE_ENV !== "production" && tn && (b.el = null), te.asyncDep) {
      if (H && H.registerDep(te, L, ie), !b.el) {
        const se = te.subTree = ce(ot);
        y(null, se, A, M);
      }
    } else
      L(
        te,
        b,
        A,
        M,
        H,
        z,
        ie
      );
    k.NODE_ENV !== "production" && (bi(), so(te, "mount"));
  }, V = (b, A, M) => {
    const K = A.component = b.component;
    if (Bb(b, A, M))
      if (K.asyncDep && !K.asyncResolved) {
        k.NODE_ENV !== "production" && yi(A), $(K, A, M), k.NODE_ENV !== "production" && bi();
        return;
      } else
        K.next = A, K.update();
    else
      A.el = b.el, K.vnode = A;
  }, L = (b, A, M, K, H, z, ie) => {
    const te = () => {
      if (b.isMounted) {
        let { next: oe, bu: he, u: _e, parent: Pe, vnode: je } = b;
        {
          const hn = am(b);
          if (hn) {
            oe && (oe.el = je.el, $(b, oe, ie)), hn.asyncDep.then(() => {
              b.isUnmounted || te();
            });
            return;
          }
        }
        let $e = oe, Nt;
        k.NODE_ENV !== "production" && yi(oe || b.vnode), bs(b, !1), oe ? (oe.el = je.el, $(b, oe, ie)) : oe = je, he && lo(he), (Nt = oe.props && oe.props.onVnodeBeforeUpdate) && gn(Nt, Pe, oe, je), bs(b, !0), k.NODE_ENV !== "production" && no(b, "render");
        const Dt = Wu(b);
        k.NODE_ENV !== "production" && so(b, "render");
        const pn = b.subTree;
        b.subTree = Dt, k.NODE_ENV !== "production" && no(b, "patch"), v(
          pn,
          Dt,
          // parent may have changed if it's in a teleport
          d(pn.el),
          // anchor may have changed if it's in a fragment
          re(pn),
          b,
          H,
          z
        ), k.NODE_ENV !== "production" && so(b, "patch"), oe.el = Dt.el, $e === null && jb(b, Dt.el), _e && Et(_e, H), (Nt = oe.props && oe.props.onVnodeUpdated) && Et(
          () => gn(Nt, Pe, oe, je),
          H
        ), k.NODE_ENV !== "production" && xh(b), k.NODE_ENV !== "production" && bi();
      } else {
        let oe;
        const { el: he, props: _e } = A, { bm: Pe, m: je, parent: $e, root: Nt, type: Dt } = b, pn = bo(A);
        bs(b, !1), Pe && lo(Pe), !pn && (oe = _e && _e.onVnodeBeforeMount) && gn(oe, $e, A), bs(b, !0);
        {
          Nt.ce && // @ts-expect-error _def is private
          Nt.ce._def.shadowRoot !== !1 && Nt.ce._injectChildStyle(Dt), k.NODE_ENV !== "production" && no(b, "render");
          const hn = b.subTree = Wu(b);
          k.NODE_ENV !== "production" && so(b, "render"), k.NODE_ENV !== "production" && no(b, "patch"), v(
            null,
            hn,
            M,
            K,
            b,
            H,
            z
          ), k.NODE_ENV !== "production" && so(b, "patch"), A.el = hn.el;
        }
        if (je && Et(je, H), !pn && (oe = _e && _e.onVnodeMounted)) {
          const hn = A;
          Et(
            () => gn(oe, $e, hn),
            H
          );
        }
        (A.shapeFlag & 256 || $e && bo($e.vnode) && $e.vnode.shapeFlag & 256) && b.a && Et(b.a, H), b.isMounted = !0, k.NODE_ENV !== "production" && ky(b), A = M = K = null;
      }
    };
    b.scope.on();
    const se = b.effect = new th(te);
    b.scope.off();
    const Q = b.update = se.run.bind(se), me = b.job = se.runIfDirty.bind(se);
    me.i = b, me.id = b.uid, se.scheduler = () => fa(me), bs(b, !0), k.NODE_ENV !== "production" && (se.onTrack = b.rtc ? (oe) => lo(b.rtc, oe) : void 0, se.onTrigger = b.rtg ? (oe) => lo(b.rtg, oe) : void 0), Q();
  }, $ = (b, A, M) => {
    A.component = b;
    const K = b.vnode.props;
    b.vnode = A, b.next = null, mb(b, A.props, K, M), Ob(b, A.children, M), an(), Du(b), ln();
  }, J = (b, A, M, K, H, z, ie, te, se = !1) => {
    const Q = b && b.children, me = b ? b.shapeFlag : 0, oe = A.children, { patchFlag: he, shapeFlag: _e } = A;
    if (he > 0) {
      if (he & 128) {
        Re(
          Q,
          oe,
          M,
          K,
          H,
          z,
          ie,
          te,
          se
        );
        return;
      } else if (he & 256) {
        Oe(
          Q,
          oe,
          M,
          K,
          H,
          z,
          ie,
          te,
          se
        );
        return;
      }
    }
    _e & 8 ? (me & 16 && U(Q, H, z), oe !== Q && u(M, oe)) : me & 16 ? _e & 16 ? Re(
      Q,
      oe,
      M,
      K,
      H,
      z,
      ie,
      te,
      se
    ) : U(Q, H, z, !0) : (me & 8 && u(M, ""), _e & 16 && O(
      oe,
      M,
      K,
      H,
      z,
      ie,
      te,
      se
    ));
  }, Oe = (b, A, M, K, H, z, ie, te, se) => {
    b = b || _o, A = A || _o;
    const Q = b.length, me = A.length, oe = Math.min(Q, me);
    let he;
    for (he = 0; he < oe; he++) {
      const _e = A[he] = se ? es(A[he]) : en(A[he]);
      v(
        b[he],
        _e,
        M,
        null,
        H,
        z,
        ie,
        te,
        se
      );
    }
    Q > me ? U(
      b,
      H,
      z,
      !0,
      !1,
      oe
    ) : O(
      A,
      M,
      K,
      H,
      z,
      ie,
      te,
      se,
      oe
    );
  }, Re = (b, A, M, K, H, z, ie, te, se) => {
    let Q = 0;
    const me = A.length;
    let oe = b.length - 1, he = me - 1;
    for (; Q <= oe && Q <= he; ) {
      const _e = b[Q], Pe = A[Q] = se ? es(A[Q]) : en(A[Q]);
      if (Ts(_e, Pe))
        v(
          _e,
          Pe,
          M,
          null,
          H,
          z,
          ie,
          te,
          se
        );
      else
        break;
      Q++;
    }
    for (; Q <= oe && Q <= he; ) {
      const _e = b[oe], Pe = A[he] = se ? es(A[he]) : en(A[he]);
      if (Ts(_e, Pe))
        v(
          _e,
          Pe,
          M,
          null,
          H,
          z,
          ie,
          te,
          se
        );
      else
        break;
      oe--, he--;
    }
    if (Q > oe) {
      if (Q <= he) {
        const _e = he + 1, Pe = _e < me ? A[_e].el : K;
        for (; Q <= he; )
          v(
            null,
            A[Q] = se ? es(A[Q]) : en(A[Q]),
            M,
            Pe,
            H,
            z,
            ie,
            te,
            se
          ), Q++;
      }
    } else if (Q > he)
      for (; Q <= oe; )
        Ne(b[Q], H, z, !0), Q++;
    else {
      const _e = Q, Pe = Q, je = /* @__PURE__ */ new Map();
      for (Q = Pe; Q <= he; Q++) {
        const yt = A[Q] = se ? es(A[Q]) : en(A[Q]);
        yt.key != null && (k.NODE_ENV !== "production" && je.has(yt.key) && Y(
          "Duplicate keys found during update:",
          JSON.stringify(yt.key),
          "Make sure keys are unique."
        ), je.set(yt.key, Q));
      }
      let $e, Nt = 0;
      const Dt = he - Pe + 1;
      let pn = !1, hn = 0;
      const Yo = new Array(Dt);
      for (Q = 0; Q < Dt; Q++) Yo[Q] = 0;
      for (Q = _e; Q <= oe; Q++) {
        const yt = b[Q];
        if (Nt >= Dt) {
          Ne(yt, H, z, !0);
          continue;
        }
        let mn;
        if (yt.key != null)
          mn = je.get(yt.key);
        else
          for ($e = Pe; $e <= he; $e++)
            if (Yo[$e - Pe] === 0 && Ts(yt, A[$e])) {
              mn = $e;
              break;
            }
        mn === void 0 ? Ne(yt, H, z, !0) : (Yo[mn - Pe] = Q + 1, mn >= hn ? hn = mn : pn = !0, v(
          yt,
          A[mn],
          M,
          null,
          H,
          z,
          ie,
          te,
          se
        ), Nt++);
      }
      const wu = pn ? xb(Yo) : _o;
      for ($e = wu.length - 1, Q = Dt - 1; Q >= 0; Q--) {
        const yt = Pe + Q, mn = A[yt], Au = yt + 1 < me ? A[yt + 1].el : K;
        Yo[Q] === 0 ? v(
          null,
          mn,
          M,
          Au,
          H,
          z,
          ie,
          te,
          se
        ) : pn && ($e < 0 || Q !== wu[$e] ? Ae(mn, M, Au, 2) : $e--);
      }
    }
  }, Ae = (b, A, M, K, H = null) => {
    const { el: z, type: ie, transition: te, children: se, shapeFlag: Q } = b;
    if (Q & 6) {
      Ae(b.component.subTree, A, M, K);
      return;
    }
    if (Q & 128) {
      b.suspense.move(A, M, K);
      return;
    }
    if (Q & 64) {
      ie.move(b, A, M, De);
      return;
    }
    if (ie === we) {
      s(z, A, M);
      for (let oe = 0; oe < se.length; oe++)
        Ae(se[oe], A, M, K);
      s(b.anchor, A, M);
      return;
    }
    if (ie === pr) {
      T(b, A, M);
      return;
    }
    if (K !== 2 && Q & 1 && te)
      if (K === 0)
        te.beforeEnter(z), s(z, A, M), Et(() => te.enter(z), H);
      else {
        const { leave: oe, delayLeave: he, afterLeave: _e } = te, Pe = () => {
          b.ctx.isUnmounted ? o(z) : s(z, A, M);
        }, je = () => {
          oe(z, () => {
            Pe(), _e && _e();
          });
        };
        he ? he(z, Pe, je) : je();
      }
    else
      s(z, A, M);
  }, Ne = (b, A, M, K = !1, H = !1) => {
    const {
      type: z,
      props: ie,
      ref: te,
      children: se,
      dynamicChildren: Q,
      shapeFlag: me,
      patchFlag: oe,
      dirs: he,
      cacheIndex: _e
    } = b;
    if (oe === -2 && (H = !1), te != null && (an(), dr(te, null, M, b, !0), ln()), _e != null && (A.renderCache[_e] = void 0), me & 256) {
      A.ctx.deactivate(b);
      return;
    }
    const Pe = me & 1 && he, je = !bo(b);
    let $e;
    if (je && ($e = ie && ie.onVnodeBeforeUnmount) && gn($e, A, b), me & 6)
      Tt(b.component, M, K);
    else {
      if (me & 128) {
        b.suspense.unmount(M, K);
        return;
      }
      Pe && ys(b, null, A, "beforeUnmount"), me & 64 ? b.type.remove(
        b,
        A,
        M,
        De,
        K
      ) : Q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== we || oe > 0 && oe & 64) ? U(
        Q,
        A,
        M,
        !1,
        !0
      ) : (z === we && oe & 384 || !H && me & 16) && U(se, A, M), K && nt(b);
    }
    (je && ($e = ie && ie.onVnodeUnmounted) || Pe) && Et(() => {
      $e && gn($e, A, b), Pe && ys(b, null, A, "unmounted");
    }, M);
  }, nt = (b) => {
    const { type: A, el: M, anchor: K, transition: H } = b;
    if (A === we) {
      k.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && H && !H.persisted ? b.children.forEach((ie) => {
        ie.type === ot ? o(ie.el) : nt(ie);
      }) : ft(M, K);
      return;
    }
    if (A === pr) {
      I(b);
      return;
    }
    const z = () => {
      o(M), H && !H.persisted && H.afterLeave && H.afterLeave();
    };
    if (b.shapeFlag & 1 && H && !H.persisted) {
      const { leave: ie, delayLeave: te } = H, se = () => ie(M, z);
      te ? te(b.el, z, se) : se();
    } else
      z();
  }, ft = (b, A) => {
    let M;
    for (; b !== A; )
      M = m(b), o(b), b = M;
    o(A);
  }, Tt = (b, A, M) => {
    k.NODE_ENV !== "production" && b.type.__hmrId && Cy(b);
    const {
      bum: K,
      scope: H,
      job: z,
      subTree: ie,
      um: te,
      m: se,
      a: Q,
      parent: me,
      slots: { __: oe }
    } = b;
    $u(se), $u(Q), K && lo(K), me && de(oe) && oe.forEach((he) => {
      me.renderCache[he] = void 0;
    }), H.stop(), z && (z.flags |= 8, Ne(ie, b, A, M)), te && Et(te, A), Et(() => {
      b.isUnmounted = !0;
    }, A), A && A.pendingBranch && !A.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === A.pendingId && (A.deps--, A.deps === 0 && A.resolve()), k.NODE_ENV !== "production" && Iy(b);
  }, U = (b, A, M, K = !1, H = !1, z = 0) => {
    for (let ie = z; ie < b.length; ie++)
      Ne(b[ie], A, M, K, H);
  }, re = (b) => {
    if (b.shapeFlag & 6)
      return re(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const A = m(b.anchor || b.el), M = A && A[Ph];
    return M ? m(M) : A;
  };
  let le = !1;
  const fe = (b, A, M) => {
    b == null ? A._vnode && Ne(A._vnode, null, null, !0) : v(
      A._vnode || null,
      b,
      A,
      null,
      null,
      null,
      M
    ), A._vnode = b, le || (le = !0, Du(), Ch(), le = !1);
  }, De = {
    p: v,
    um: Ne,
    m: Ae,
    r: nt,
    mt: ne,
    mc: O,
    pc: J,
    pbc: R,
    n: re,
    o: e
  };
  return {
    render: fe,
    hydrate: void 0,
    createApp: db(fe)
  };
}
function qa({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bs({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Db(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function fr(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (de(s) && de(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let a = o[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[r] = es(o[r]), a.el = i.el), !n && a.patchFlag !== -2 && fr(i, a)), a.type === Wr && (a.el = i.el), a.type === ot && !a.el && (a.el = i.el), k.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
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
function am(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : am(t);
}
function $u(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const kb = Symbol.for("v-scx"), Rb = () => {
  {
    const e = _t(kb);
    return e || k.NODE_ENV !== "production" && Y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ha(e, t) {
  return ma(e, null, t);
}
function Ib(e, t) {
  return ma(
    e,
    null,
    k.NODE_ENV !== "production" ? Qe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Lt(e, t, n) {
  return k.NODE_ENV !== "production" && !ve(t) && Y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ma(e, t, n);
}
function ma(e, t, n = Me) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  k.NODE_ENV !== "production" && !t && (s !== void 0 && Y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && Y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && Y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = Qe({}, n);
  k.NODE_ENV !== "production" && (a.onWarn = Y);
  const c = t && s || !t && r !== "post";
  let f;
  if (Tr) {
    if (r === "sync") {
      const p = Rb();
      f = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!c) {
      const p = () => {
      };
      return p.stop = ct, p.resume = ct, p.pause = ct, p;
    }
  }
  const u = at;
  a.call = (p, h, v) => un(p, u, h, v);
  let d = !1;
  r === "post" ? a.scheduler = (p) => {
    Et(p, u && u.suspense);
  } : r !== "sync" && (d = !0, a.scheduler = (p, h) => {
    h ? p() : fa(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), d && (p.flags |= 2, u && (p.id = u.uid, p.i = u));
  };
  const m = gy(e, t, a);
  return Tr && (f ? f.push(m) : c && m()), m;
}
function Pb(e, t, n) {
  const s = this.proxy, o = qe(e) ? e.includes(".") ? lm(s, e) : () => s[e] : e.bind(s, s);
  let r;
  ve(t) ? r = t : (r = t.handler, n = t);
  const i = Kr(this), a = ma(o, r.bind(s), n);
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
function Vb(e, t, n = Me) {
  const s = Rn();
  if (k.NODE_ENV !== "production" && !s)
    return Y("useModel() called without active instance."), G();
  const o = vt(t);
  if (k.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return Y(`useModel() called with prop "${t}" which is not declared.`), G();
  const r = Tn(t), i = cm(e, o), a = uy((c, f) => {
    let u, d = Me, m;
    return Ib(() => {
      const p = e[o];
      xt(u, p) && (u = p, f());
    }), {
      get() {
        return c(), n.get ? n.get(u) : u;
      },
      set(p) {
        const h = n.set ? n.set(p) : p;
        if (!xt(h, u) && !(d !== Me && xt(p, d)))
          return;
        const v = s.vnode.props;
        v && // check if parent has passed v-model
        (t in v || o in v || r in v) && (`onUpdate:${t}` in v || `onUpdate:${o}` in v || `onUpdate:${r}` in v) || (u = p, f()), s.emit(`update:${t}`, h), xt(p, h) && xt(p, d) && !xt(h, m) && f(), d = p, m = h;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? i || Me : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const cm = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${vt(t)}Modifiers`] || e[`${Tn(t)}Modifiers`];
function Mb(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Me;
  if (k.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(t in u))
        (!d || !(As(vt(t)) in d)) && Y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${As(vt(t))}" prop.`
        );
      else {
        const m = u[t];
        ve(m) && (m(...n) || Y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && cm(s, t.slice(7));
  if (i && (i.trim && (o = n.map((u) => qe(u) ? u.trim() : u)), i.number && (o = n.map(Fi))), k.NODE_ENV !== "production" && My(e, t, o), k.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && s[As(u)] && Y(
      `Event "${u}" is emitted in component ${_a(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Tn(
        t
      )}" instead of "${t}".`
    );
  }
  let a, c = s[a = As(t)] || // also try camelCase event handler (#2249)
  s[a = As(vt(t))];
  !c && r && (c = s[a = As(Tn(t))]), c && un(
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
    e.emitted[a] = !0, un(
      f,
      e,
      6,
      o
    );
  }
}
function um(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, a = !1;
  if (!ve(e)) {
    const c = (f) => {
      const u = um(f, t, !0);
      u && (a = !0, Qe(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !a ? (Fe(e) && s.set(e, null), null) : (de(r) ? r.forEach((c) => i[c] = null) : Qe(i, r), Fe(e) && s.set(e, i), i);
}
function ga(e, t) {
  return !e || !Lr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Le(e, t[0].toLowerCase() + t.slice(1)) || Le(e, Tn(t)) || Le(e, t));
}
let Ml = !1;
function qi() {
  Ml = !0;
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
    data: m,
    setupState: p,
    ctx: h,
    inheritAttrs: v
  } = e, _ = Wi(e);
  let y, E;
  k.NODE_ENV !== "production" && (Ml = !1);
  try {
    if (n.shapeFlag & 4) {
      const I = o || s, C = k.NODE_ENV !== "production" && p.__isScriptSetup ? new Proxy(I, {
        get(D, F, O) {
          return Y(
            `Property '${String(
              F
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(D, F, O);
        }
      }) : I;
      y = en(
        f.call(
          C,
          I,
          u,
          k.NODE_ENV !== "production" ? wn(d) : d,
          p,
          m,
          h
        )
      ), E = a;
    } else {
      const I = t;
      k.NODE_ENV !== "production" && a === d && qi(), y = en(
        I.length > 1 ? I(
          k.NODE_ENV !== "production" ? wn(d) : d,
          k.NODE_ENV !== "production" ? {
            get attrs() {
              return qi(), wn(a);
            },
            slots: i,
            emit: c
          } : { attrs: a, slots: i, emit: c }
        ) : I(
          k.NODE_ENV !== "production" ? wn(d) : d,
          null
        )
      ), E = t.props ? a : Lb(a);
    }
  } catch (I) {
    hr.length = 0, jr(I, e, 1), y = ce(ot);
  }
  let g = y, T;
  if (k.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([g, T] = dm(y)), E && v !== !1) {
    const I = Object.keys(E), { shapeFlag: C } = g;
    if (I.length) {
      if (C & 7)
        r && I.some(Li) && (E = Fb(
          E,
          r
        )), g = Dn(g, E, !1, !0);
      else if (k.NODE_ENV !== "production" && !Ml && g.type !== ot) {
        const D = Object.keys(a), F = [], O = [];
        for (let S = 0, R = D.length; S < R; S++) {
          const w = D[S];
          Lr(w) ? Li(w) || F.push(w[2].toLowerCase() + w.slice(3)) : O.push(w);
        }
        O.length && Y(
          `Extraneous non-props attributes (${O.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), F.length && Y(
          `Extraneous non-emits event listeners (${F.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (k.NODE_ENV !== "production" && !Ku(g) && Y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), g = Dn(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (k.NODE_ENV !== "production" && !Ku(g) && Y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Or(g, n.transition)), k.NODE_ENV !== "production" && T ? T(g) : y = g, Wi(_), y;
}
const dm = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Ic(t, !1);
  if (s) {
    if (k.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return dm(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (a) => {
    t[o] = a, n && (r > -1 ? n[r] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [en(s), i];
};
function Ic(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (Ws(o)) {
      if (o.type !== ot || o.children === "v-if") {
        if (n)
          return;
        if (n = o, k.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ic(n.children);
      }
    } else
      return;
  }
  return n;
}
const Lb = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Lr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Fb = (e, t) => {
  const n = {};
  for (const s in e)
    (!Li(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Ku = (e) => e.shapeFlag & 7 || e.type === ot;
function Bb(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: a, patchFlag: c } = t, f = r.emitsOptions;
  if (k.NODE_ENV !== "production" && (o || a) && tn || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? zu(s, i, f) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const m = u[d];
        if (i[m] !== s[m] && !ga(f, m))
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
    if (t[r] !== e[r] && !ga(n, r))
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
const fm = (e) => e.__isSuspense;
function Ub(e, t) {
  t && t.pendingBranch ? de(e) ? t.effects.push(...e) : t.effects.push(e) : Oh(e);
}
const we = Symbol.for("v-fgt"), Wr = Symbol.for("v-txt"), ot = Symbol.for("v-cmt"), pr = Symbol.for("v-stc"), hr = [];
let Mt = null;
function N(e = !1) {
  hr.push(Mt = e ? null : []);
}
function Hb() {
  hr.pop(), Mt = hr[hr.length - 1] || null;
}
let Cr = 1;
function qu(e, t = !1) {
  Cr += e, e < 0 && Mt && t && (Mt.hasOnce = !0);
}
function pm(e) {
  return e.dynamicChildren = Cr > 0 ? Mt || _o : null, Hb(), Cr > 0 && Mt && Mt.push(e), e;
}
function P(e, t, n, s, o, r) {
  return pm(
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
function rt(e, t, n, s, o) {
  return pm(
    ce(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Ws(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ts(e, t) {
  if (k.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Ei.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const $b = (...e) => mm(
  ...e
), hm = ({ key: e }) => e ?? null, Ai = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? qe(e) || Ke(e) || ve(e) ? { i: tt, r: e, k: t, f: !!n } : e : null);
function l(e, t = null, n = null, s = 0, o = null, r = e === we ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hm(t),
    ref: t && Ai(t),
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
    ctx: tt
  };
  return a ? (Pc(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= qe(n) ? 8 : 16), k.NODE_ENV !== "production" && c.key !== c.key && Y("VNode created with invalid key (NaN). VNode type:", c.type), Cr > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Mt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Mt.push(c), c;
}
const ce = k.NODE_ENV !== "production" ? $b : mm;
function mm(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === Zy) && (k.NODE_ENV !== "production" && !e && Y(`Invalid vnode type when creating vnode: ${e}.`), e = ot), Ws(e)) {
    const a = Dn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Pc(a, n), Cr > 0 && !r && Mt && (a.shapeFlag & 6 ? Mt[Mt.indexOf(e)] = a : Mt.push(a)), a.patchFlag = -2, a;
  }
  if (ym(e) && (e = e.__vccOpts), t) {
    t = Ze(t);
    let { class: a, style: c } = t;
    a && !qe(a) && (t.class = pe(a)), Fe(c) && (Ar(c) && !de(c) && (c = Qe({}, c)), t.style = Vt(c));
  }
  const i = qe(e) ? 1 : fm(e) ? 128 : Vh(e) ? 64 : Fe(e) ? 4 : ve(e) ? 2 : 0;
  return k.NODE_ENV !== "production" && i & 4 && Ar(e) && (e = ye(e), Y(
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
function Ze(e) {
  return e ? Ar(e) || tm(e) ? Qe({}, e) : e : null;
}
function Dn(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: a, transition: c } = e, f = t ? fs(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && hm(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? de(r) ? r.concat(Ai(t)) : [r, Ai(t)] : Ai(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: k.NODE_ENV !== "production" && i === -1 && de(a) ? a.map(gm) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== we ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Dn(e.ssContent),
    ssFallback: e.ssFallback && Dn(e.ssFallback),
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
function gm(e) {
  const t = Dn(e);
  return de(e.children) && (t.children = e.children.map(gm)), t;
}
function Z(e = " ", t = 0) {
  return ce(Wr, null, e, t);
}
function Yi(e, t) {
  const n = ce(pr, null, e);
  return n.staticCount = t, n;
}
function Ee(e = "", t = !1) {
  return t ? (N(), rt(ot, null, e)) : ce(ot, null, e);
}
function en(e) {
  return e == null || typeof e == "boolean" ? ce(ot) : de(e) ? ce(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ws(e) ? es(e) : ce(Wr, null, String(e));
}
function es(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Dn(e);
}
function Pc(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (de(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Pc(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !tm(t) ? t._ctx = tt : o === 3 && tt && (tt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ve(t) ? (t = { default: t, _ctx: tt }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Z(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function fs(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = pe([t.class, s.class]));
      else if (o === "style")
        t.style = Vt([t.style, s.style]);
      else if (Lr(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(de(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function gn(e, t, n, s = null) {
  un(e, t, 7, [
    n,
    s
  ]);
}
const Wb = Jh();
let Kb = 0;
function zb(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Wb, r = {
    uid: Kb++,
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
    propsOptions: sm(s, o),
    emitsOptions: um(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Me,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Me,
    data: Me,
    props: Me,
    attrs: Me,
    slots: Me,
    refs: Me,
    setupState: Me,
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
  return k.NODE_ENV !== "production" ? r.ctx = tb(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Mb.bind(null, r), e.ce && e.ce(r), r;
}
let at = null;
const Rn = () => at || tt;
let Xi, Ll;
{
  const e = Br(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Xi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => at = n
  ), Ll = t(
    "__VUE_SSR_SETTERS__",
    (n) => Tr = n
  );
}
const Kr = (e) => {
  const t = at;
  return Xi(e), e.scope.on(), () => {
    e.scope.off(), Xi(t);
  };
}, Yu = () => {
  at && at.scope.off(), Xi(null);
}, qb = /* @__PURE__ */ zn("slot,component");
function Fl(e, { isNativeTag: t }) {
  (qb(e) || t(e)) && Y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function vm(e) {
  return e.vnode.shapeFlag & 4;
}
let Tr = !1;
function Yb(e, t = !1, n = !1) {
  t && Ll(t);
  const { props: s, children: o } = e.vnode, r = vm(e);
  pb(e, s, r, t), Sb(e, o, n || t);
  const i = r ? Xb(e, t) : void 0;
  return t && Ll(!1), i;
}
function Xb(e, t) {
  var n;
  const s = e.type;
  if (k.NODE_ENV !== "production") {
    if (s.name && Fl(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        Fl(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        Ih(r[i]);
    }
    s.compilerOptions && Gb() && Y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Xh), k.NODE_ENV !== "production" && nb(e);
  const { setup: o } = s;
  if (o) {
    an();
    const r = e.setupContext = o.length > 1 ? Jb(e) : null, i = Kr(e), a = Fo(
      o,
      e,
      0,
      [
        k.NODE_ENV !== "production" ? wn(e.props) : e.props,
        r
      ]
    ), c = yc(a);
    if (ln(), i(), (c || e.sp) && !bo(e) && $h(e), c) {
      if (a.then(Yu, Yu), t)
        return a.then((f) => {
          Xu(e, f, t);
        }).catch((f) => {
          jr(f, e, 0);
        });
      if (e.asyncDep = a, k.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = s.name) != null ? n : "Anonymous";
        Y(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Xu(e, a, t);
  } else
    _m(e, t);
}
function Xu(e, t, n) {
  ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Fe(t) ? (k.NODE_ENV !== "production" && Ws(t) && Y(
    "setup() should not return VNodes directly - return a render function instead."
  ), k.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = bh(t), k.NODE_ENV !== "production" && sb(e)) : k.NODE_ENV !== "production" && t !== void 0 && Y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), _m(e, n);
}
const Gb = () => !0;
function _m(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ct);
  {
    const o = Kr(e);
    an();
    try {
      rb(e);
    } finally {
      ln(), o();
    }
  }
  k.NODE_ENV !== "production" && !s.render && e.render === ct && !t && (s.template ? Y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : Y("Component is missing template or render function: ", s));
}
const Gu = k.NODE_ENV !== "production" ? {
  get(e, t) {
    return qi(), lt(e, "get", ""), e[t];
  },
  set() {
    return Y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return Y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return lt(e, "get", ""), e[t];
  }
};
function Qb(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return lt(e, "get", "$slots"), t[n];
    }
  });
}
function Jb(e) {
  const t = (n) => {
    if (k.NODE_ENV !== "production" && (e.exposed && Y("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (de(n) ? s = "array" : Ke(n) && (s = "ref")), s !== "object" && Y(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (k.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Gu));
      },
      get slots() {
        return s || (s = Qb(e));
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
function va(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bh(ss(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ms)
        return Ms[n](e);
    },
    has(t, n) {
      return n in t || n in Ms;
    }
  })) : e.proxy;
}
const Zb = /(?:^|[-_])(\w)/g, eE = (e) => e.replace(Zb, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Vc(e, t = !0) {
  return ve(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function _a(e, t, n = !1) {
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
  return s ? eE(s) : n ? "App" : "Anonymous";
}
function ym(e) {
  return ve(e) && "__vccOpts" in e;
}
const W = (e, t) => {
  const n = hy(e, t, Tr);
  if (k.NODE_ENV !== "production") {
    const s = Rn();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Mc(e, t, n) {
  const s = arguments.length;
  return s === 2 ? Fe(t) && !de(t) ? Ws(t) ? ce(e, null, [t]) : ce(e, t) : ce(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Ws(n) && (n = [n]), ce(e, t, n));
}
function tE() {
  if (k.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!Fe(d))
        return null;
      if (d.__isVue)
        return ["div", e, "VueInstance"];
      if (Ke(d)) {
        an();
        const m = d.value;
        return ln(), [
          "div",
          {},
          ["span", e, u(d)],
          "<",
          a(m),
          ">"
        ];
      } else {
        if (on(d))
          return [
            "div",
            {},
            ["span", e, St(d) ? "ShallowReactive" : "Reactive"],
            "<",
            a(d),
            `>${Nn(d) ? " (readonly)" : ""}`
          ];
        if (Nn(d))
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
    const m = [];
    d.type.props && d.props && m.push(i("props", ye(d.props))), d.setupState !== Me && m.push(i("setup", d.setupState)), d.data !== Me && m.push(i("data", ye(d.data)));
    const p = c(d, "computed");
    p && m.push(i("computed", p));
    const h = c(d, "inject");
    return h && m.push(i("injected", h)), m.push([
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
    ]), m;
  }
  function i(d, m) {
    return m = Qe({}, m), Object.keys(m).length ? [
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
        ...Object.keys(m).map((p) => [
          "div",
          {},
          ["span", s, p + ": "],
          a(m[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(d, m = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : Fe(d) ? ["object", { object: m ? ye(d) : d }] : ["span", n, String(d)];
  }
  function c(d, m) {
    const p = d.type;
    if (ve(p))
      return;
    const h = {};
    for (const v in d.ctx)
      f(p, v, m) && (h[v] = d.ctx[v]);
    return h;
  }
  function f(d, m, p) {
    const h = d[p];
    if (de(h) && h.includes(m) || Fe(h) && m in h || d.extends && f(d.extends, m, p) || d.mixins && d.mixins.some((v) => f(v, m, p)))
      return !0;
  }
  function u(d) {
    return St(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Qu = "3.5.17", An = k.NODE_ENV !== "production" ? Y : ct;
var Xt = {};
let Bl;
const Ju = typeof window < "u" && window.trustedTypes;
if (Ju)
  try {
    Bl = /* @__PURE__ */ Ju.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Xt.NODE_ENV !== "production" && An(`Error creating trusted types policy: ${e}`);
  }
const bm = Bl ? (e) => Bl.createHTML(e) : (e) => e, nE = "http://www.w3.org/2000/svg", sE = "http://www.w3.org/1998/Math/MathML", Fn = typeof document < "u" ? document : null, Zu = Fn && /* @__PURE__ */ Fn.createElement("template"), oE = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Fn.createElementNS(nE, e) : t === "mathml" ? Fn.createElementNS(sE, e) : n ? Fn.createElement(e, { is: n }) : Fn.createElement(e);
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
      Zu.innerHTML = bm(
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
}, Xn = "transition", Qo = "animation", Nr = Symbol("_vtc"), Em = {
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
}, rE = /* @__PURE__ */ Qe(
  {},
  Fh,
  Em
), iE = (e) => (e.displayName = "Transition", e.props = rE, e), aE = /* @__PURE__ */ iE(
  (e, { slots: t }) => Mc(jy, lE(e), t)
), Es = (e, t = []) => {
  de(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ed = (e) => e ? de(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function lE(e) {
  const t = {};
  for (const w in e)
    w in Em || (t[w] = e[w]);
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
    leaveActiveClass: m = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, h = cE(o), v = h && h[0], _ = h && h[1], {
    onBeforeEnter: y,
    onEnter: E,
    onEnterCancelled: g,
    onLeave: T,
    onLeaveCancelled: I,
    onBeforeAppear: C = y,
    onAppear: D = E,
    onAppearCancelled: F = g
  } = t, O = (w, x, ee, ne) => {
    w._enterCancelled = ne, ws(w, x ? u : a), ws(w, x ? f : i), ee && ee();
  }, S = (w, x) => {
    w._isLeaving = !1, ws(w, d), ws(w, p), ws(w, m), x && x();
  }, R = (w) => (x, ee) => {
    const ne = w ? D : E, V = () => O(x, w, ee);
    Es(ne, [x, V]), td(() => {
      ws(x, w ? c : r), Vn(x, w ? u : a), ed(ne) || nd(x, s, v, V);
    });
  };
  return Qe(t, {
    onBeforeEnter(w) {
      Es(y, [w]), Vn(w, r), Vn(w, i);
    },
    onBeforeAppear(w) {
      Es(C, [w]), Vn(w, c), Vn(w, f);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(w, x) {
      w._isLeaving = !0;
      const ee = () => S(w, x);
      Vn(w, d), w._enterCancelled ? (Vn(w, m), rd()) : (rd(), Vn(w, m)), td(() => {
        w._isLeaving && (ws(w, d), Vn(w, p), ed(T) || nd(w, s, _, ee));
      }), Es(T, [w, ee]);
    },
    onEnterCancelled(w) {
      O(w, !1, void 0, !0), Es(g, [w]);
    },
    onAppearCancelled(w) {
      O(w, !0, void 0, !0), Es(F, [w]);
    },
    onLeaveCancelled(w) {
      S(w), Es(I, [w]);
    }
  });
}
function cE(e) {
  if (e == null)
    return null;
  if (Fe(e))
    return [Ya(e.enter), Ya(e.leave)];
  {
    const t = Ya(e);
    return [t, t];
  }
}
function Ya(e) {
  const t = T_(e);
  return Xt.NODE_ENV !== "production" && Ey(t, "<transition> explicit duration"), t;
}
function Vn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Nr] || (e[Nr] = /* @__PURE__ */ new Set())).add(t);
}
function ws(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Nr];
  n && (n.delete(t), n.size || (e[Nr] = void 0));
}
function td(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let uE = 0;
function nd(e, t, n, s) {
  const o = e._endId = ++uE, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: a, propCount: c } = dE(e, t);
  if (!i)
    return s();
  const f = i + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(f, m), r();
  }, m = (p) => {
    p.target === e && ++u >= c && d();
  };
  setTimeout(() => {
    u < c && d();
  }, a + 1), e.addEventListener(f, m);
}
function dE(e, t) {
  const n = window.getComputedStyle(e), s = (h) => (n[h] || "").split(", "), o = s(`${Xn}Delay`), r = s(`${Xn}Duration`), i = sd(o, r), a = s(`${Qo}Delay`), c = s(`${Qo}Duration`), f = sd(a, c);
  let u = null, d = 0, m = 0;
  t === Xn ? i > 0 && (u = Xn, d = i, m = r.length) : t === Qo ? f > 0 && (u = Qo, d = f, m = c.length) : (d = Math.max(i, f), u = d > 0 ? i > f ? Xn : Qo : null, m = u ? u === Xn ? r.length : c.length : 0);
  const p = u === Xn && /\b(transform|all)(,|$)/.test(
    s(`${Xn}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: m,
    hasTransform: p
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
function fE(e, t, n) {
  const s = e[Nr];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Gi = Symbol("_vod"), wm = Symbol("_vsh"), Am = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Gi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Jo(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Jo(e, !0), s.enter(e)) : s.leave(e, () => {
      Jo(e, !1);
    }) : Jo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Jo(e, t);
  }
};
Xt.NODE_ENV !== "production" && (Am.name = "show");
function Jo(e, t) {
  e.style.display = t ? e[Gi] : "none", e[wm] = !t;
}
const pE = Symbol(Xt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), hE = /(^|;)\s*display\s*:/;
function mE(e, t, n) {
  const s = e.style, o = qe(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (qe(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && Si(s, a, "");
        }
      else
        for (const i in t)
          n[i] == null && Si(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Si(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[pE];
      i && (n += ";" + i), s.cssText = n, r = hE.test(n);
    }
  } else t && e.removeAttribute("style");
  Gi in e && (e[Gi] = r ? s.display : "", e[wm] && (s.display = "none"));
}
const gE = /[^\\];\s*$/, id = /\s*!important$/;
function Si(e, t, n) {
  if (de(n))
    n.forEach((s) => Si(e, t, s));
  else if (n == null && (n = ""), Xt.NODE_ENV !== "production" && gE.test(n) && An(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = vE(e, t);
    id.test(n) ? e.setProperty(
      Tn(s),
      n.replace(id, ""),
      "important"
    ) : e[s] = n;
  }
}
const ad = ["Webkit", "Moz", "ms"], Xa = {};
function vE(e, t) {
  const n = Xa[t];
  if (n)
    return n;
  let s = vt(t);
  if (s !== "filter" && s in e)
    return Xa[t] = s;
  s = js(s);
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
    r ? "" : rn(n) ? String(n) : n
  );
}
function ud(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? bm(n) : n);
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
    Xt.NODE_ENV !== "production" && !i && An(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  i && e.removeAttribute(o || t);
}
function Un(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function _E(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const dd = Symbol("_vei");
function yE(e, t, n, s, o = null) {
  const r = e[dd] || (e[dd] = {}), i = r[t];
  if (s && i)
    i.value = Xt.NODE_ENV !== "production" ? pd(s, t) : s;
  else {
    const [a, c] = bE(t);
    if (s) {
      const f = r[t] = AE(
        Xt.NODE_ENV !== "production" ? pd(s, t) : s,
        o
      );
      Un(e, a, f, c);
    } else i && (_E(e, a, i, c), r[t] = void 0);
  }
}
const fd = /(?:Once|Passive|Capture)$/;
function bE(e) {
  let t;
  if (fd.test(e)) {
    t = {};
    let s;
    for (; s = e.match(fd); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Tn(e.slice(2)), t];
}
let Ga = 0;
const EE = /* @__PURE__ */ Promise.resolve(), wE = () => Ga || (EE.then(() => Ga = 0), Ga = Date.now());
function AE(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    un(
      SE(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = wE(), n;
}
function pd(e, t) {
  return ve(e) || de(e) ? e : (An(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ct);
}
function SE(e, t) {
  if (de(t)) {
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
  t === "class" ? fE(e, s, i) : t === "style" ? mE(e, n, s) : Lr(t) ? Li(t) || yE(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : CE(e, t, s, i)) ? (ud(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && cd(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !qe(s)) ? ud(e, vt(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), cd(e, t, s, i));
};
function CE(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && hd(t) && ve(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return hd(t) && qe(n) ? !1 : t in e;
}
const is = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return de(t) ? (n) => lo(t, n) : t;
};
function TE(e) {
  e.target.composing = !0;
}
function md(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const zt = Symbol("_assign"), Ao = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[zt] = is(o);
    const r = s || o.props && o.props.type === "number";
    Un(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), r && (a = Fi(a)), e[zt](a);
    }), n && Un(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Un(e, "compositionstart", TE), Un(e, "compositionend", md), Un(e, "change", md));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[zt] = is(i), e.composing) return;
    const a = (r || e.type === "number") && !/^0\d/.test(e.value) ? Fi(e.value) : e.value, c = t ?? "";
    a !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === c) || (e.value = c));
  }
}, NE = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[zt] = is(n), Un(e, "change", () => {
      const s = e._modelValue, o = So(e), r = e.checked, i = e[zt];
      if (de(s)) {
        const a = wc(s, o), c = a !== -1;
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
        i(Sm(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: gd,
  beforeUpdate(e, t, n) {
    e[zt] = is(n), gd(e, t, n);
  }
};
function gd(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (de(t))
    o = wc(t, s.props.value) > -1;
  else if (Lo(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = Us(t, Sm(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Qi = {
  created(e, { value: t }, n) {
    e.checked = Us(t, n.props.value), e[zt] = is(n), Un(e, "change", () => {
      e[zt](So(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[zt] = is(s), t !== n && (e.checked = Us(t, s.props.value));
  }
}, Hn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Lo(t);
    Un(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Fi(So(i)) : So(i)
      );
      e[zt](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, wo(() => {
        e._assigning = !1;
      });
    }), e[zt] = is(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    vd(e, t);
  },
  beforeUpdate(e, t, n) {
    e[zt] = is(n);
  },
  updated(e, { value: t }) {
    e._assigning || vd(e, t);
  }
};
function vd(e, t) {
  const n = e.multiple, s = de(t);
  if (n && !s && !Lo(t)) {
    Xt.NODE_ENV !== "production" && An(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], a = So(i);
    if (n)
      if (s) {
        const c = typeof a;
        c === "string" || c === "number" ? i.selected = t.some((f) => String(f) === String(a)) : i.selected = wc(t, a) > -1;
      } else
        i.selected = t.has(a);
    else if (Us(So(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function So(e) {
  return "_value" in e ? e._value : e.value;
}
function Sm(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const DE = ["ctrl", "shift", "alt", "meta"], xE = {
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
  exact: (e, t) => DE.some((n) => e[`${n}Key`] && !t.includes(n))
}, Om = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const a = xE[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...r);
  });
}, kE = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, RE = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const r = Tn(o.key);
    if (t.some(
      (i) => i === r || kE[i] === r
    ))
      return e(o);
  });
}, IE = /* @__PURE__ */ Qe({ patchProp: OE }, oE);
let _d;
function PE() {
  return _d || (_d = Tb(IE));
}
const ya = (...e) => {
  const t = PE().createApp(...e);
  Xt.NODE_ENV !== "production" && (ME(t), LE(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = FE(s);
    if (!o) return;
    const r = t._component;
    !ve(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, VE(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function VE(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ME(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => V_(t) || M_(t) || L_(t),
    writable: !1
  });
}
function LE(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        An(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return An(s), n;
      },
      set() {
        An(s);
      }
    });
  }
}
function FE(e) {
  if (qe(e)) {
    const t = document.querySelector(e);
    return Xt.NODE_ENV !== "production" && !t && An(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Xt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && An(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var BE = {};
function jE() {
  tE();
}
BE.NODE_ENV !== "production" && jE();
var UE = Object.create, Cm = Object.defineProperty, HE = Object.getOwnPropertyDescriptor, Lc = Object.getOwnPropertyNames, $E = Object.getPrototypeOf, WE = Object.prototype.hasOwnProperty, KE = (e, t) => function() {
  return e && (t = (0, e[Lc(e)[0]])(e = 0)), t;
}, zE = (e, t) => function() {
  return t || (0, e[Lc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, qE = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Lc(t))
      !WE.call(e, o) && o !== n && Cm(e, o, { get: () => t[o], enumerable: !(s = HE(t, o)) || s.enumerable });
  return e;
}, YE = (e, t, n) => (n = e != null ? UE($E(e)) : {}, qE(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Cm(n, "default", { value: e, enumerable: !0 }),
  e
)), zr = KE({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), XE = zE({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    zr(), t.exports = s;
    function n(r) {
      return r instanceof Buffer ? Buffer.from(r) : new r.constructor(r.buffer.slice(), r.byteOffset, r.length);
    }
    function s(r) {
      if (r = r || {}, r.circles) return o(r);
      const i = /* @__PURE__ */ new Map();
      if (i.set(Date, (d) => new Date(d)), i.set(Map, (d, m) => new Map(c(Array.from(d), m))), i.set(Set, (d, m) => new Set(c(Array.from(d), m))), r.constructorHandlers)
        for (const d of r.constructorHandlers)
          i.set(d[0], d[1]);
      let a = null;
      return r.proto ? u : f;
      function c(d, m) {
        const p = Object.keys(d), h = new Array(p.length);
        for (let v = 0; v < p.length; v++) {
          const _ = p[v], y = d[_];
          typeof y != "object" || y === null ? h[_] = y : y.constructor !== Object && (a = i.get(y.constructor)) ? h[_] = a(y, m) : ArrayBuffer.isView(y) ? h[_] = n(y) : h[_] = m(y);
        }
        return h;
      }
      function f(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return c(d, f);
        if (d.constructor !== Object && (a = i.get(d.constructor)))
          return a(d, f);
        const m = {};
        for (const p in d) {
          if (Object.hasOwnProperty.call(d, p) === !1) continue;
          const h = d[p];
          typeof h != "object" || h === null ? m[p] = h : h.constructor !== Object && (a = i.get(h.constructor)) ? m[p] = a(h, f) : ArrayBuffer.isView(h) ? m[p] = n(h) : m[p] = f(h);
        }
        return m;
      }
      function u(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return c(d, u);
        if (d.constructor !== Object && (a = i.get(d.constructor)))
          return a(d, u);
        const m = {};
        for (const p in d) {
          const h = d[p];
          typeof h != "object" || h === null ? m[p] = h : h.constructor !== Object && (a = i.get(h.constructor)) ? m[p] = a(h, u) : ArrayBuffer.isView(h) ? m[p] = n(h) : m[p] = u(h);
        }
        return m;
      }
    }
    function o(r) {
      const i = [], a = [], c = /* @__PURE__ */ new Map();
      if (c.set(Date, (p) => new Date(p)), c.set(Map, (p, h) => new Map(u(Array.from(p), h))), c.set(Set, (p, h) => new Set(u(Array.from(p), h))), r.constructorHandlers)
        for (const p of r.constructorHandlers)
          c.set(p[0], p[1]);
      let f = null;
      return r.proto ? m : d;
      function u(p, h) {
        const v = Object.keys(p), _ = new Array(v.length);
        for (let y = 0; y < v.length; y++) {
          const E = v[y], g = p[E];
          if (typeof g != "object" || g === null)
            _[E] = g;
          else if (g.constructor !== Object && (f = c.get(g.constructor)))
            _[E] = f(g, h);
          else if (ArrayBuffer.isView(g))
            _[E] = n(g);
          else {
            const T = i.indexOf(g);
            T !== -1 ? _[E] = a[T] : _[E] = h(g);
          }
        }
        return _;
      }
      function d(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return u(p, d);
        if (p.constructor !== Object && (f = c.get(p.constructor)))
          return f(p, d);
        const h = {};
        i.push(p), a.push(h);
        for (const v in p) {
          if (Object.hasOwnProperty.call(p, v) === !1) continue;
          const _ = p[v];
          if (typeof _ != "object" || _ === null)
            h[v] = _;
          else if (_.constructor !== Object && (f = c.get(_.constructor)))
            h[v] = f(_, d);
          else if (ArrayBuffer.isView(_))
            h[v] = n(_);
          else {
            const y = i.indexOf(_);
            y !== -1 ? h[v] = a[y] : h[v] = d(_);
          }
        }
        return i.pop(), a.pop(), h;
      }
      function m(p) {
        if (typeof p != "object" || p === null) return p;
        if (Array.isArray(p)) return u(p, m);
        if (p.constructor !== Object && (f = c.get(p.constructor)))
          return f(p, m);
        const h = {};
        i.push(p), a.push(h);
        for (const v in p) {
          const _ = p[v];
          if (typeof _ != "object" || _ === null)
            h[v] = _;
          else if (_.constructor !== Object && (f = c.get(_.constructor)))
            h[v] = f(_, m);
          else if (ArrayBuffer.isView(_))
            h[v] = n(_);
          else {
            const y = i.indexOf(_);
            y !== -1 ? h[v] = a[y] : h[v] = m(_);
          }
        }
        return i.pop(), a.pop(), h;
      }
    }
  }
});
zr();
zr();
zr();
var Tm = typeof navigator < "u", ue = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof ue.chrome < "u" && ue.chrome.devtools;
Tm && (ue.self, ue.top);
var yd;
typeof navigator < "u" && ((yd = navigator.userAgent) == null || yd.toLowerCase().includes("electron"));
zr();
var GE = YE(XE()), QE = /(?:^|[-_/])(\w)/g;
function JE(e, t) {
  return t ? t.toUpperCase() : "";
}
function ZE(e) {
  return e && `${e}`.replace(QE, JE);
}
function e1(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const s = n.lastIndexOf("/"), o = n.substring(s + 1);
  {
    const r = o.lastIndexOf(t);
    return o.substring(0, r);
  }
}
var bd = (0, GE.default)({ circles: !0 });
const t1 = {
  trailing: !0
};
function Oo(e, t = 25, n = {}) {
  if (n = { ...t1, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let s, o, r = [], i, a;
  const c = (f, u) => (i = n1(e, f, u), i.finally(() => {
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
        const m = n.leading ? s : c(this, f);
        for (const p of r)
          p(m);
        r = [];
      }, t), d ? (s = c(this, f), u(s)) : r.push(u);
    });
  };
}
async function n1(e, t, n) {
  return await e.apply(t, n);
}
function jl(e, t = {}, n) {
  for (const s in e) {
    const o = e[s], r = n ? `${n}:${s}` : s;
    typeof o == "object" && o !== null ? jl(o, t, r) : typeof o == "function" && (t[r] = o);
  }
  return t;
}
const s1 = { run: (e) => e() }, o1 = () => s1, Nm = typeof console.createTask < "u" ? console.createTask : o1;
function r1(e, t) {
  const n = t.shift(), s = Nm(n);
  return e.reduce(
    (o, r) => o.then(() => s.run(() => r(...t))),
    Promise.resolve()
  );
}
function i1(e, t) {
  const n = t.shift(), s = Nm(n);
  return Promise.all(e.map((o) => s.run(() => o(...t))));
}
function Qa(e, t) {
  for (const n of [...e])
    n(t);
}
class a1 {
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
    const n = jl(t), s = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of s.splice(0, s.length))
        o();
    };
  }
  removeHooks(t) {
    const n = jl(t);
    for (const s in n)
      this.removeHook(s, n[s]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(r1, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(i1, t, ...n);
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
function Dm() {
  return new a1();
}
var l1 = Object.create, xm = Object.defineProperty, c1 = Object.getOwnPropertyDescriptor, Fc = Object.getOwnPropertyNames, u1 = Object.getPrototypeOf, d1 = Object.prototype.hasOwnProperty, f1 = (e, t) => function() {
  return e && (t = (0, e[Fc(e)[0]])(e = 0)), t;
}, km = (e, t) => function() {
  return t || (0, e[Fc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, p1 = (e, t, n, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Fc(t))
      !d1.call(e, o) && o !== n && xm(e, o, { get: () => t[o], enumerable: !(s = c1(t, o)) || s.enumerable });
  return e;
}, h1 = (e, t, n) => (n = e != null ? l1(u1(e)) : {}, p1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  xm(n, "default", { value: e, enumerable: !0 }),
  e
)), q = f1({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), m1 = km({
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
      }, c = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), f = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), u = [".", "!", "~", "*", "'", "(", ")"].join(""), d = function(_, y) {
        var E = "-", g = "", T = "", I = !0, C = {}, D, F, O, S, R, w, x, ee, ne, V, L, $, J, Oe, Re = "";
        if (typeof _ != "string")
          return "";
        if (typeof y == "string" && (E = y), x = a.en, ee = i.en, typeof y == "object") {
          D = y.maintainCase || !1, C = y.custom && typeof y.custom == "object" ? y.custom : C, O = +y.truncate > 1 && y.truncate || !1, S = y.uric || !1, R = y.uricNoSlash || !1, w = y.mark || !1, I = !(y.symbols === !1 || y.lang === !1), E = y.separator || E, S && (Re += c), R && (Re += f), w && (Re += u), x = y.lang && a[y.lang] && I ? a[y.lang] : I ? a.en : {}, ee = y.lang && i[y.lang] ? i[y.lang] : y.lang === !1 || y.lang === !0 ? {} : i.en, y.titleCase && typeof y.titleCase.length == "number" && Array.prototype.toString.call(y.titleCase) ? (y.titleCase.forEach(function(Ae) {
            C[Ae + ""] = Ae + "";
          }), F = !0) : F = !!y.titleCase, y.custom && typeof y.custom.length == "number" && Array.prototype.toString.call(y.custom) && y.custom.forEach(function(Ae) {
            C[Ae + ""] = Ae + "";
          }), Object.keys(C).forEach(function(Ae) {
            var Ne;
            Ae.length > 1 ? Ne = new RegExp("\\b" + p(Ae) + "\\b", "gi") : Ne = new RegExp(p(Ae), "gi"), _ = _.replace(Ne, C[Ae]);
          });
          for (L in C)
            Re += L;
        }
        for (Re += E, Re = p(Re), _ = _.replace(/(^\s+|\s+$)/g, ""), J = !1, Oe = !1, V = 0, $ = _.length; V < $; V++)
          L = _[V], h(L, C) ? J = !1 : ee[L] ? (L = J && ee[L].match(/[A-Za-z0-9]/) ? " " + ee[L] : ee[L], J = !1) : L in s ? (V + 1 < $ && o.indexOf(_[V + 1]) >= 0 ? (T += L, L = "") : Oe === !0 ? (L = r[T] + s[L], T = "") : L = J && s[L].match(/[A-Za-z0-9]/) ? " " + s[L] : s[L], J = !1, Oe = !1) : L in r ? (T += L, L = "", V === $ - 1 && (L = r[T]), Oe = !0) : /* process symbol chars */ x[L] && !(S && c.indexOf(L) !== -1) && !(R && f.indexOf(L) !== -1) ? (L = J || g.substr(-1).match(/[A-Za-z0-9]/) ? E + x[L] : x[L], L += _[V + 1] !== void 0 && _[V + 1].match(/[A-Za-z0-9]/) ? E : "", J = !0) : (Oe === !0 ? (L = r[T] + L, T = "", Oe = !1) : J && (/[A-Za-z0-9]/.test(L) || g.substr(-1).match(/A-Za-z0-9]/)) && (L = " " + L), J = !1), g += L.replace(new RegExp("[^\\w\\s" + Re + "_-]", "g"), E);
        return F && (g = g.replace(/(\w)(\S*)/g, function(Ae, Ne, nt) {
          var ft = Ne.toUpperCase() + (nt !== null ? nt : "");
          return Object.keys(C).indexOf(ft.toLowerCase()) < 0 ? ft : ft.toLowerCase();
        })), g = g.replace(/\s+/g, E).replace(new RegExp("\\" + E + "+", "g"), E).replace(new RegExp("(^\\" + E + "+|\\" + E + "+$)", "g"), ""), O && g.length > O && (ne = g.charAt(O) === E, g = g.slice(0, O), ne || (g = g.slice(0, g.lastIndexOf(E)))), !D && !F && (g = g.toLowerCase()), g;
      }, m = function(_) {
        return function(E) {
          return d(E, _);
        };
      }, p = function(_) {
        return _.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, h = function(v, _) {
        for (var y in _)
          if (_[y] === v)
            return !0;
      };
      if (typeof t < "u" && t.exports)
        t.exports = d, t.exports.createSlug = m;
      else if (typeof define < "u" && define.amd)
        define([], function() {
          return d;
        });
      else
        try {
          if (n.getSlug || n.createSlug)
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          n.getSlug = d, n.createSlug = m;
        } catch {
        }
    }(e);
  }
}), g1 = km({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    q(), t.exports = m1();
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
function v1(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function _1(e) {
  const t = e.__file;
  if (t)
    return ZE(e1(t, ".vue"));
}
function Ed(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Bc(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Rm(e) {
  var t, n;
  const s = (t = e.subTree) == null ? void 0 : t.type, o = Bc(e);
  return o ? ((n = o?.types) == null ? void 0 : n.Fragment) === s : !1;
}
function ba(e) {
  var t, n, s;
  const o = v1(e?.type || {});
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
  const r = _1(e?.type || {});
  return r || "Anonymous Component";
}
function y1(e) {
  var t, n, s;
  const o = (s = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? s : 0, r = e === e?.root ? "root" : e.uid;
  return `${o}:${r}`;
}
function Ul(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function b1() {
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
var ai;
function E1(e) {
  return ai || (ai = document.createRange()), ai.selectNode(e), ai.getBoundingClientRect();
}
function w1(e) {
  const t = b1();
  if (!e.children)
    return t;
  for (let n = 0, s = e.children.length; n < s; n++) {
    const o = e.children[n];
    let r;
    if (o.component)
      r = Ks(o.component);
    else if (o.el) {
      const i = o.el;
      i.nodeType === 1 || i.getBoundingClientRect ? r = i.getBoundingClientRect() : i.nodeType === 3 && i.data.trim() && (r = E1(i));
    }
    r && A1(t, r);
  }
  return t;
}
function A1(e, t) {
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
function Ks(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? wd : Rm(e) ? w1(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? Ks(e.subTree.component) : wd;
}
q();
function jc(e) {
  return Rm(e) ? S1(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function S1(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...jc(n.component)) : n?.el && t.push(n.el);
  }), t;
}
var Im = "__vue-devtools-component-inspector__", Pm = "__vue-devtools-component-inspector__card__", Vm = "__vue-devtools-component-inspector__name__", Mm = "__vue-devtools-component-inspector__indicator__", Lm = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, O1 = {
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
function jo() {
  return document.getElementById(Im);
}
function T1() {
  return document.getElementById(Pm);
}
function N1() {
  return document.getElementById(Mm);
}
function D1() {
  return document.getElementById(Vm);
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
  n.id = (t = e.elementId) != null ? t : Im, Object.assign(n.style, {
    ...Lm,
    ...Uc(e.bounds),
    ...e.style
  });
  const s = document.createElement("span");
  s.id = Pm, Object.assign(s.style, {
    ...O1,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const o = document.createElement("span");
  o.id = Vm, o.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const r = document.createElement("i");
  return r.id = Mm, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(r.style, C1), s.appendChild(o), s.appendChild(r), n.appendChild(s), document.body.appendChild(n), n;
}
function $c(e) {
  const t = jo(), n = T1(), s = D1(), o = N1();
  t && (Object.assign(t.style, {
    ...Lm,
    ...Uc(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), s.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function x1(e) {
  const t = Ks(e);
  if (!t.width && !t.height)
    return;
  const n = ba(e);
  jo() ? $c({ bounds: t, name: n }) : Hc({ bounds: t, name: n });
}
function Fm() {
  const e = jo();
  e && (e.style.display = "none");
}
var Hl = null;
function $l(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (Hl = n, n.vnode.el)) {
      const o = Ks(n), r = ba(n);
      jo() ? $c({ bounds: o, name: r }) : Hc({ bounds: o, name: r });
    }
  }
}
function k1(e, t) {
  if (e.preventDefault(), e.stopPropagation(), Hl) {
    const n = y1(Hl);
    t(n);
  }
}
var Ji = null;
function R1() {
  Fm(), window.removeEventListener("mouseover", $l), window.removeEventListener("click", Ji, !0), Ji = null;
}
function I1() {
  return window.addEventListener("mouseover", $l), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), k1(n, (s) => {
        window.removeEventListener("click", t, !0), Ji = null, window.removeEventListener("mouseover", $l);
        const o = jo();
        o && (o.style.display = "none"), e(JSON.stringify({ id: s }));
      });
    }
    Ji = t, window.addEventListener("click", t, !0);
  });
}
function P1(e) {
  const t = Ul(At.value, e.id);
  if (t) {
    const [n] = jc(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const s = Ks(t), o = document.createElement("div"), r = {
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
      const s = Ks(t);
      if (s.width || s.height) {
        const o = ba(t), r = jo();
        r ? $c({ ...e, name: o, bounds: s }) : Hc({ ...e, name: o, bounds: s }), setTimeout(() => {
          r && (r.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
q();
var Ad, Sd;
(Sd = (Ad = ue).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (Ad.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function V1(e) {
  let t = 0;
  const n = setInterval(() => {
    ue.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function M1() {
  const e = ue.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function L1() {
  return new Promise((e) => {
    function t() {
      M1(), e(ue.__VUE_INSPECTOR__);
    }
    ue.__VUE_INSPECTOR__ ? t() : V1(() => {
      t();
    });
  });
}
q();
q();
function F1(e) {
  return !!(e && e.__v_isReadonly);
}
function Bm(e) {
  return F1(e) ? Bm(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ja(e) {
  return !!(e && e.__v_isRef === !0);
}
function ir(e) {
  const t = e && e.__v_raw;
  return t ? ir(t) : e;
}
var B1 = class {
  constructor() {
    this.refEditor = new j1();
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
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : ir(t) instanceof Map ? t.delete(n) : ir(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const o = t[e.newKey || n];
        this.refEditor.isRef(o) ? this.refEditor.set(o, s) : ir(t) instanceof Map ? t.set(e.newKey || n, s) : ir(t) instanceof Set ? t.add(s) : t[e.newKey || n] = s;
      }
    };
  }
}, j1 = class {
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
    return Ja(e) || Bm(e);
  }
};
q();
q();
q();
var U1 = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function H1() {
  if (!Tm || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem(U1);
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
var Od, Cd;
(Cd = (Od = ue).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Od.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var $1 = new Proxy(ue.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function W1(e, t) {
  ut.timelineLayersState[t.id] = !1, $1.push({
    ...e,
    descriptorId: t.id,
    appRecord: Bc(t.app)
  });
}
var Td, Nd;
(Nd = (Td = ue).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Td.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Wc = new Proxy(ue.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), jm = Oo(() => {
  Uo.hooks.callHook("sendInspectorToClient", Um());
});
function K1(e, t) {
  var n, s;
  Wc.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (s = e.stateFilterPlaceholder) != null ? s : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Bc(t.app)
  }), jm();
}
function Um() {
  return Wc.filter((e) => e.descriptor.app === At.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
function Oi(e, t) {
  return Wc.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function z1() {
  const e = Dm();
  e.hook("addInspector", ({ inspector: s, plugin: o }) => {
    K1(s, o.descriptor);
  });
  const t = Oo(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || ut.highPerfModeEnabled)
      return;
    const i = Oi(s, o.descriptor.app), a = {
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
  const n = Oo(async ({ inspectorId: s, plugin: o }) => {
    var r;
    if (!s || !((r = o?.descriptor) != null && r.app) || ut.highPerfModeEnabled)
      return;
    const i = Oi(s, o.descriptor.app), a = {
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
    const i = Oi(s, r.descriptor.app);
    i && (i.selectedNodeId = o);
  }), e.hook("timelineLayerAdded", ({ options: s, plugin: o }) => {
    W1(s, o.descriptor);
  }), e.hook("timelineEventAdded", ({ options: s, plugin: o }) => {
    var r;
    const i = ["performance", "component-event", "keyboard", "mouse"];
    ut.highPerfModeEnabled || !((r = ut.timelineLayersState) != null && r[o.descriptor.id]) && !i.includes(s.layerId) || e.callHookWith(
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
  }), e.hook("getComponentBounds", async ({ instance: s }) => Ks(s)), e.hook("getComponentName", ({ instance: s }) => ba(s)), e.hook("componentHighlight", ({ uid: s }) => {
    const o = At.value.instanceMap.get(s);
    o && x1(o);
  }), e.hook("componentUnhighlight", () => {
    Fm();
  }), e;
}
var Dd, xd;
(xd = (Dd = ue).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (Dd.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var kd, Rd;
(Rd = (kd = ue).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (kd.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var Id, Pd;
(Pd = (Id = ue).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (Id.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Vd, Md;
(Md = (Vd = ue).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Vd.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var Ld, Fd;
(Fd = (Ld = ue).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (Ld.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var Ns = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function q1() {
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
    timelineLayersState: H1()
  };
}
var Bd, jd;
(jd = (Bd = ue)[Ns]) != null || (Bd[Ns] = q1());
var Y1 = Oo((e) => {
  Uo.hooks.callHook("devtoolsStateUpdated", { state: e });
});
Oo((e, t) => {
  Uo.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var Ea = new Proxy(ue.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? ue.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : ue.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), At = new Proxy(ue.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? ue.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? ue.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : ue.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function Hm() {
  Y1({
    ...ue[Ns],
    appRecords: Ea.value,
    activeAppRecordId: At.id,
    tabs: ue.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: ue.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function X1(e) {
  ue.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Hm();
}
function G1(e) {
  ue.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Hm();
}
var ut = new Proxy(ue[Ns], {
  get(e, t) {
    return t === "appRecords" ? Ea : t === "activeAppRecordId" ? At.id : t === "tabs" ? ue.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? ue.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : ue[Ns][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...ue[Ns] }, e[t] = n, ue[Ns][t] = n, !0;
  }
});
function Q1(e = {}) {
  var t, n, s;
  const { file: o, host: r, baseUrl: i = window.location.origin, line: a = 0, column: c = 0 } = e;
  if (o) {
    if (r === "chrome-extension") {
      const f = o.replace(/\\/g, "\\\\"), u = (n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? n : "/";
      fetch(`${u}__open-in-editor?file=${encodeURI(o)}`).then((d) => {
        if (!d.ok) {
          const m = `Opening component ${f} failed`;
          console.log(`%c${m}`, "color:red");
        }
      });
    } else if (ut.vitePluginDetected) {
      const f = (s = ue.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? s : i;
      ue.__VUE_INSPECTOR__.openInEditor(f, o, a, c);
    }
  }
}
q();
q();
q();
q();
q();
var Ud, Hd;
(Hd = (Ud = ue).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (Ud.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var Kc = new Proxy(ue.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function Wl(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function zc(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function J1(e) {
  var t, n, s;
  const o = (n = (t = Kc.find((r) => {
    var i;
    return r[0].id === e && !!((i = r[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (s = o?.settings) != null ? s : null;
}
function $m(e, t) {
  var n, s, o;
  const r = zc(e);
  if (r) {
    const i = localStorage.getItem(r);
    if (i)
      return JSON.parse(i);
  }
  if (e) {
    const i = (s = (n = Kc.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? s : null;
    return Wl((o = i?.settings) != null ? o : {});
  }
  return Wl(t);
}
function Z1(e, t) {
  const n = zc(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Wl(t)));
}
function e0(e, t, n) {
  const s = zc(e), o = localStorage.getItem(s), r = JSON.parse(o || "{}"), i = {
    ...r,
    [t]: n
  };
  localStorage.setItem(s, JSON.stringify(i)), Uo.hooks.callHookWith(
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
var $d, Wd, Pt = (Wd = ($d = ue).__VUE_DEVTOOLS_HOOK) != null ? Wd : $d.__VUE_DEVTOOLS_HOOK = Dm(), t0 = {
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
}, Wm = {
  on: t0,
  setupDevToolsPlugin(e, t) {
    return Pt.callHook("devtools-plugin:setup", e, t);
  }
}, n0 = class {
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
    if (ut.highPerfModeEnabled)
      return;
    const n = Um().find((s) => s.packageName === this.plugin.descriptor.packageName);
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
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && Z1(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    ut.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    ut.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return ut.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    ut.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
  }
  // settings
  getSettings(e) {
    return $m(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
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
}, s0 = n0;
q();
q();
q();
q();
var o0 = "__vue_devtool_undefined__", r0 = "__vue_devtool_infinity__", i0 = "__vue_devtool_negative_infinity__", a0 = "__vue_devtool_nan__";
q();
q();
var l0 = {
  [o0]: "undefined",
  [a0]: "NaN",
  [r0]: "Infinity",
  [i0]: "-Infinity"
};
Object.entries(l0).reduce((e, [t, n]) => (e[n] = t, e), {});
q();
q();
q();
q();
q();
var Kd, zd;
(zd = (Kd = ue).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (Kd.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function Km(e, t) {
  return Wm.setupDevToolsPlugin(e, t);
}
function c0(e, t) {
  const [n, s] = e;
  if (n.app !== t)
    return;
  const o = new s0({
    plugin: {
      setupFn: s,
      descriptor: n
    },
    ctx: Uo
  });
  n.packageName === "vuex" && o.on.editInspectorState((r) => {
    o.sendInspectorState(r.inspectorId);
  }), s(o);
}
function zm(e, t) {
  ue.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || ut.highPerfModeEnabled && !t?.inspectingComponent || (ue.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Kc.forEach((n) => {
    c0(n, e);
  }));
}
q();
q();
var Dr = "__VUE_DEVTOOLS_ROUTER__", Co = "__VUE_DEVTOOLS_ROUTER_INFO__", qd, Yd;
(Yd = (qd = ue)[Co]) != null || (qd[Co] = {
  currentRoute: null,
  routes: []
});
var Xd, Gd;
(Gd = (Xd = ue)[Dr]) != null || (Xd[Dr] = {});
new Proxy(ue[Co], {
  get(e, t) {
    return ue[Co][t];
  }
});
new Proxy(ue[Dr], {
  get(e, t) {
    if (t === "value")
      return ue[Dr];
  }
});
function u0(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function qc(e) {
  return e.map((t) => {
    let { path: n, name: s, children: o, meta: r } = t;
    return o?.length && (o = qc(o)), {
      path: n,
      name: s,
      children: o,
      meta: r
    };
  });
}
function d0(e) {
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
      matched: qc(i)
    };
  }
  return e;
}
function f0(e, t) {
  function n() {
    var s;
    const o = (s = e.app) == null ? void 0 : s.config.globalProperties.$router, r = d0(o?.currentRoute.value), i = qc(u0(o)), a = console.warn;
    console.warn = () => {
    }, ue[Co] = {
      currentRoute: r ? bd(r) : {},
      routes: bd(i)
    }, ue[Dr] = o, console.warn = a;
  }
  n(), Wm.on.componentUpdated(Oo(() => {
    var s;
    ((s = t.value) == null ? void 0 : s.app) === e.app && (n(), !ut.highPerfModeEnabled && Uo.hooks.callHook("routerInfoUpdated", { state: ue[Co] }));
  }, 200));
}
function p0(e) {
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
      const n = new B1(), s = {
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
      const n = Oi(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return I1();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return R1();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = Ul(At.value, t);
      if (n)
        return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return P1({ id: t });
    },
    // open in editor
    openInEditor: Q1,
    // get vue inspector
    getVueInspector: L1,
    // toggle app
    toggleApp(t, n) {
      const s = Ea.value.find((o) => o.id === t);
      s && (G1(t), X1(s), f0(s, At), jm(), zm(s.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = Ul(At.value, t);
      if (n) {
        const [s] = jc(n);
        s && (ue.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = s);
      }
    },
    updatePluginSettings(t, n, s) {
      e0(t, n, s);
    },
    getPluginSettings(t) {
      return {
        options: J1(t),
        values: $m(t)
      };
    }
  };
}
q();
var Qd, Jd;
(Jd = (Qd = ue).__VUE_DEVTOOLS_ENV__) != null || (Qd.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var Zd = z1(), ef, tf;
(tf = (ef = ue).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (ef.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: Zd,
  get state() {
    return {
      ...ut,
      activeAppRecordId: At.id,
      activeAppRecord: At.value,
      appRecords: Ea.value
    };
  },
  api: p0(Zd)
});
var Uo = ue.__VUE_DEVTOOLS_KIT_CONTEXT__;
q();
h1(g1());
var nf, sf;
(sf = (nf = ue).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (nf.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
q();
q();
function h0(e) {
  ut.highPerfModeEnabled = e ?? !ut.highPerfModeEnabled, !e && At.value && zm(At.value.app);
}
q();
q();
q();
function m0(e) {
  ut.devtoolsClientDetected = {
    ...ut.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(ut.devtoolsClientDetected).some(Boolean);
  h0(!t);
}
var of, rf;
(rf = (of = ue).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (of.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = m0);
q();
q();
q();
q();
q();
q();
q();
var g0 = class {
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
}, qm = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new g0();
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
}, v0 = class extends qm {
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
function _0(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function y0(e, t) {
  const n = _0(e);
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
function Ci(e, t) {
  return e.indexOf(t) !== -1;
}
function af(e, t) {
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (t(s))
      return s;
  }
}
var b0 = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return y0(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
q();
q();
var E0 = (e) => Object.prototype.toString.call(e).slice(8, -1), Ym = (e) => typeof e > "u", w0 = (e) => e === null, xr = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Kl = (e) => xr(e) && Object.keys(e).length === 0, as = (e) => Array.isArray(e), A0 = (e) => typeof e == "string", S0 = (e) => typeof e == "number" && !isNaN(e), O0 = (e) => typeof e == "boolean", C0 = (e) => e instanceof RegExp, kr = (e) => e instanceof Map, Rr = (e) => e instanceof Set, Xm = (e) => E0(e) === "Symbol", T0 = (e) => e instanceof Date && !isNaN(e.valueOf()), N0 = (e) => e instanceof Error, lf = (e) => typeof e == "number" && isNaN(e), D0 = (e) => O0(e) || w0(e) || Ym(e) || S0(e) || A0(e) || Xm(e), x0 = (e) => typeof e == "bigint", k0 = (e) => e === 1 / 0 || e === -1 / 0, R0 = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), I0 = (e) => e instanceof URL;
q();
var Gm = (e) => e.replace(/\./g, "\\."), Za = (e) => e.map(String).map(Gm).join("."), mr = (e) => {
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
function vn(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Qm = [
  vn(Ym, "undefined", () => null, () => {
  }),
  vn(x0, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  vn(T0, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  vn(N0, "Error", (e, t) => {
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
  vn(C0, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  vn(
    Rr,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  vn(kr, "map", (e) => [...e.entries()], (e) => new Map(e)),
  vn((e) => lf(e) || k0(e), "number", (e) => lf(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  vn((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  vn(I0, "URL", (e) => e.toString(), (e) => new URL(e))
];
function wa(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Jm = wa((e, t) => Xm(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const s = n.symbolRegistry.getValue(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown symbol");
  return s;
}), P0 = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Zm = wa(R0, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = P0[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function eg(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var tg = wa(eg, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), ng = wa((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const s = n.customTransformerRegistry.findByName(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown custom value");
  return s.deserialize(e);
}), V0 = [tg, Jm, ng, Zm], cf = (e, t) => {
  const n = af(V0, (o) => o.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const s = af(Qm, (o) => o.isApplicable(e, t));
  if (s)
    return {
      value: s.transform(e, t),
      type: s.annotation
    };
}, sg = {};
Qm.forEach((e) => {
  sg[e.annotation] = e;
});
var M0 = (e, t, n) => {
  if (as(t))
    switch (t[0]) {
      case "symbol":
        return Jm.untransform(e, t, n);
      case "class":
        return tg.untransform(e, t, n);
      case "custom":
        return ng.untransform(e, t, n);
      case "typed-array":
        return Zm.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const s = sg[t];
    if (!s)
      throw new Error("Unknown transformation: " + t);
    return s.untransform(e, n);
  }
};
q();
var ho = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function og(e) {
  if (Ci(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Ci(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Ci(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var L0 = (e, t) => {
  og(t);
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (Rr(e))
      e = ho(e, +s);
    else if (kr(e)) {
      const o = +s, r = +t[++n] == 0 ? "key" : "value", i = ho(e, o);
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
}, zl = (e, t, n) => {
  if (og(t), t.length === 0)
    return n(e);
  let s = e;
  for (let r = 0; r < t.length - 1; r++) {
    const i = t[r];
    if (as(s)) {
      const a = +i;
      s = s[a];
    } else if (xr(s))
      s = s[i];
    else if (Rr(s)) {
      const a = +i;
      s = ho(s, a);
    } else if (kr(s)) {
      if (r === t.length - 2)
        break;
      const c = +i, f = +t[++r] == 0 ? "key" : "value", u = ho(s, c);
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
  if (as(s) ? s[+o] = n(s[+o]) : xr(s) && (s[o] = n(s[o])), Rr(s)) {
    const r = ho(s, +o), i = n(r);
    r !== i && (s.delete(r), s.add(i));
  }
  if (kr(s)) {
    const r = +t[t.length - 2], i = ho(s, r);
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
function ql(e, t, n = []) {
  if (!e)
    return;
  if (!as(e)) {
    To(e, (r, i) => ql(r, t, [...n, ...mr(i)]));
    return;
  }
  const [s, o] = e;
  o && To(o, (r, i) => {
    ql(r, t, [...n, ...mr(i)]);
  }), t(s, n);
}
function F0(e, t, n) {
  return ql(t, (s, o) => {
    e = zl(e, o, (r) => M0(r, s, n));
  }), e;
}
function B0(e, t) {
  function n(s, o) {
    const r = L0(e, mr(o));
    s.map(mr).forEach((i) => {
      e = zl(e, i, () => r);
    });
  }
  if (as(t)) {
    const [s, o] = t;
    s.forEach((r) => {
      e = zl(e, mr(r), () => e);
    }), o && To(o, n);
  } else
    To(t, n);
  return e;
}
var j0 = (e, t) => xr(e) || as(e) || kr(e) || Rr(e) || eg(e, t);
function U0(e, t, n) {
  const s = n.get(e);
  s ? s.push(t) : n.set(e, [t]);
}
function H0(e, t) {
  const n = {};
  let s;
  return e.forEach((o) => {
    if (o.length <= 1)
      return;
    t || (o = o.map((a) => a.map(String)).sort((a, c) => a.length - c.length));
    const [r, ...i] = o;
    r.length === 0 ? s = i.map(Za) : n[Za(r)] = i.map(Za);
  }), s ? Kl(n) ? [s] : [s, n] : Kl(n) ? void 0 : n;
}
var rg = (e, t, n, s, o = [], r = [], i = /* @__PURE__ */ new Map()) => {
  var a;
  const c = D0(e);
  if (!c) {
    U0(e, o, t);
    const h = i.get(e);
    if (h)
      return s ? {
        transformedValue: null
      } : h;
  }
  if (!j0(e, n)) {
    const h = cf(e, n), v = h ? {
      transformedValue: h.value,
      annotations: [h.type]
    } : {
      transformedValue: e
    };
    return c || i.set(e, v), v;
  }
  if (Ci(r, e))
    return {
      transformedValue: null
    };
  const f = cf(e, n), u = (a = f?.value) != null ? a : e, d = as(u) ? [] : {}, m = {};
  To(u, (h, v) => {
    if (v === "__proto__" || v === "constructor" || v === "prototype")
      throw new Error(`Detected property ${v}. This is a prototype pollution risk, please remove it from your object.`);
    const _ = rg(h, t, n, s, [...o, v], [...r, e], i);
    d[v] = _.transformedValue, as(_.annotations) ? m[v] = _.annotations : xr(_.annotations) && To(_.annotations, (y, E) => {
      m[Gm(v) + "." + E] = y;
    });
  });
  const p = Kl(m) ? {
    transformedValue: d,
    annotations: f ? [f.type] : void 0
  } : {
    transformedValue: d,
    annotations: f ? [f.type, m] : m
  };
  return c || i.set(e, p), p;
};
q();
q();
function ig(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function uf(e) {
  return ig(e) === "Array";
}
function $0(e) {
  if (ig(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function W0(e, t, n, s, o) {
  const r = {}.propertyIsEnumerable.call(s, t) ? "enumerable" : "nonenumerable";
  r === "enumerable" && (e[t] = n), o && r === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Yl(e, t = {}) {
  if (uf(e))
    return e.map((o) => Yl(o, t));
  if (!$0(e))
    return e;
  const n = Object.getOwnPropertyNames(e), s = Object.getOwnPropertySymbols(e);
  return [...n, ...s].reduce((o, r) => {
    if (uf(t.props) && !t.props.includes(r))
      return o;
    const i = e[r], a = Yl(i, t);
    return W0(o, r, a, e, t.nonenumerable), o;
  }, {});
}
var ze = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new v0(), this.symbolRegistry = new qm((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new b0(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = rg(e, t, this, this.dedupe), s = {
      json: n.transformedValue
    };
    n.annotations && (s.meta = {
      ...s.meta,
      values: n.annotations
    });
    const o = H0(t, this.dedupe);
    return o && (s.meta = {
      ...s.meta,
      referentialEqualities: o
    }), s;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let s = Yl(t);
    return n?.values && (s = F0(s, n.values, this)), n?.referentialEqualities && (s = B0(s, n.referentialEqualities)), s;
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
ze.defaultInstance = new ze();
ze.serialize = ze.defaultInstance.serialize.bind(ze.defaultInstance);
ze.deserialize = ze.defaultInstance.deserialize.bind(ze.defaultInstance);
ze.stringify = ze.defaultInstance.stringify.bind(ze.defaultInstance);
ze.parse = ze.defaultInstance.parse.bind(ze.defaultInstance);
ze.registerClass = ze.defaultInstance.registerClass.bind(ze.defaultInstance);
ze.registerSymbol = ze.defaultInstance.registerSymbol.bind(ze.defaultInstance);
ze.registerCustom = ze.defaultInstance.registerCustom.bind(ze.defaultInstance);
ze.allowErrorProps = ze.defaultInstance.allowErrorProps.bind(ze.defaultInstance);
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
var df, ff;
(ff = (df = ue).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (df.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var pf, hf;
(hf = (pf = ue).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (pf.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var mf, gf;
(gf = (mf = ue).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (mf.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var vf, _f;
(_f = (vf = ue).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (vf.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var yf, bf;
(bf = (yf = ue).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (yf.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var Ef, wf;
(wf = (Ef = ue).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (Ef.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
q();
q();
q();
q();
q();
q();
q();
var Ve = {};
let ar;
const Ir = (e) => ar = e, ag = Ve.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function zs(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Sn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Sn || (Sn = {}));
const os = typeof window < "u", Af = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function K0(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Yc(e, t, n) {
  const s = new XMLHttpRequest();
  s.open("GET", e), s.responseType = "blob", s.onload = function() {
    ug(s.response, t, n);
  }, s.onerror = function() {
    console.error("could not download file");
  }, s.send();
}
function lg(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Ti(e) {
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
const Ni = typeof navigator == "object" ? navigator : { userAgent: "" }, cg = /Macintosh/.test(Ni.userAgent) && /AppleWebKit/.test(Ni.userAgent) && !/Safari/.test(Ni.userAgent), ug = os ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !cg ? z0 : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Ni ? q0 : (
      // Fallback to using FileReader and a popup
      Y0
    )
  )
) : () => {
};
function z0(e, t = "download", n) {
  const s = document.createElement("a");
  s.download = t, s.rel = "noopener", typeof e == "string" ? (s.href = e, s.origin !== location.origin ? lg(s.href) ? Yc(e, t, n) : (s.target = "_blank", Ti(s)) : Ti(s)) : (s.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    Ti(s);
  }, 0));
}
function q0(e, t = "download", n) {
  if (typeof e == "string")
    if (lg(e))
      Yc(e, t, n);
    else {
      const s = document.createElement("a");
      s.href = e, s.target = "_blank", setTimeout(function() {
        Ti(s);
      });
    }
  else
    navigator.msSaveOrOpenBlob(K0(e, n), t);
}
function Y0(e, t, n, s) {
  if (s = s || open("", "_blank"), s && (s.document.title = s.document.body.innerText = "downloading..."), typeof e == "string")
    return Yc(e, t, n);
  const o = e.type === "application/octet-stream", r = /constructor/i.test(String(Af.HTMLElement)) || "safari" in Af, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || o && r || cg) && typeof FileReader < "u") {
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
function dt(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Xc(e) {
  return "_a" in e && "install" in e;
}
function dg() {
  if (!("clipboard" in navigator))
    return dt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function fg(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (dt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function X0(e) {
  if (!dg())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), dt("Global state copied to clipboard.");
    } catch (t) {
      if (fg(t))
        return;
      dt("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function G0(e) {
  if (!dg())
    try {
      pg(e, JSON.parse(await navigator.clipboard.readText())), dt("Global state pasted from clipboard.");
    } catch (t) {
      if (fg(t))
        return;
      dt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Q0(e) {
  try {
    ug(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    dt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Mn;
function J0() {
  Mn || (Mn = document.createElement("input"), Mn.type = "file", Mn.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Mn.onchange = async () => {
        const s = Mn.files;
        if (!s)
          return t(null);
        const o = s.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }, Mn.oncancel = () => t(null), Mn.onerror = n, Mn.click();
    });
  }
  return e;
}
async function Z0(e) {
  try {
    const n = await J0()();
    if (!n)
      return;
    const { text: s, file: o } = n;
    pg(e, JSON.parse(s)), dt(`Global state imported from "${o.name}".`);
  } catch (t) {
    dt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function pg(e, t) {
  for (const n in t) {
    const s = e.state.value[n];
    s ? Object.assign(s, t[n]) : e.state.value[n] = t[n];
  }
}
function Zt(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const hg = "🍍 Pinia (root)", Di = "_root";
function ew(e) {
  return Xc(e) ? {
    id: Di,
    label: hg
  } : {
    id: e.$id,
    label: e.$id
  };
}
function tw(e) {
  if (Xc(e)) {
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
function nw(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Zt(e.type),
    key: Zt(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function sw(e) {
  switch (e) {
    case Sn.direct:
      return "mutation";
    case Sn.patchFunction:
      return "$patch";
    case Sn.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let mo = !0;
const xi = [], Os = "pinia:mutations", mt = "pinia", { assign: ow } = Object, Zi = (e) => "🍍 " + e;
function rw(e, t) {
  Km({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: xi,
    app: e
  }, (n) => {
    typeof n.now != "function" && dt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Os,
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
            X0(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await G0(t), n.sendInspectorTree(mt), n.sendInspectorState(mt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Q0(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Z0(t), n.sendInspectorTree(mt), n.sendInspectorState(mt);
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
            o ? typeof o.$reset != "function" ? dt(`Cannot reset "${s}" store because it doesn't have a "$reset" method implemented.`, "warn") : (o.$reset(), dt(`Store "${s}" reset.`)) : dt(`Cannot reset "${s}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((s) => {
      const o = s.componentInstance && s.componentInstance.proxy;
      if (o && o._pStores) {
        const r = s.componentInstance.proxy._pStores;
        Object.values(r).forEach((i) => {
          s.instanceData.state.push({
            type: Zi(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: ye(i.$state),
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
            type: Zi(i.$id),
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
      if (s.app === e && s.inspectorId === mt) {
        let o = [t];
        o = o.concat(Array.from(t._s.values())), s.rootNodes = (s.filter ? o.filter((r) => "$id" in r ? r.$id.toLowerCase().includes(s.filter.toLowerCase()) : hg.toLowerCase().includes(s.filter.toLowerCase())) : o).map(ew);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((s) => {
      if (s.app === e && s.inspectorId === mt) {
        const o = s.nodeId === Di ? t : t._s.get(s.nodeId);
        if (!o)
          return;
        o && (s.nodeId !== Di && (globalThis.$store = ye(o)), s.state = tw(o));
      }
    }), n.on.editInspectorState((s) => {
      if (s.app === e && s.inspectorId === mt) {
        const o = s.nodeId === Di ? t : t._s.get(s.nodeId);
        if (!o)
          return dt(`store "${s.nodeId}" not found`, "error");
        const { path: r } = s;
        Xc(o) ? r.unshift("state") : (r.length !== 1 || !o._customProperties.has(r[0]) || r[0] in o.$state) && r.unshift("$state"), mo = !1, s.set(o, r, s.state.value), mo = !0;
      }
    }), n.on.editComponentState((s) => {
      if (s.type.startsWith("🍍")) {
        const o = s.type.replace(/^🍍\s*/, ""), r = t._s.get(o);
        if (!r)
          return dt(`store "${o}" not found`, "error");
        const { path: i } = s;
        if (i[0] !== "state")
          return dt(`Invalid path for store "${o}":
${i}
Only state can be modified.`);
        i[0] = "$state", mo = !1, s.set(r, i, s.state.value), mo = !0;
      }
    });
  });
}
function iw(e, t) {
  xi.includes(Zi(t.$id)) || xi.push(Zi(t.$id)), Km({
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
    t.$onAction(({ after: i, onError: a, name: c, args: f }) => {
      const u = mg++;
      n.addTimelineEvent({
        layerId: Os,
        event: {
          time: s(),
          title: "🛫 " + c,
          subtitle: "start",
          data: {
            store: Zt(t.$id),
            action: Zt(c),
            args: f
          },
          groupId: u
        }
      }), i((d) => {
        rs = void 0, n.addTimelineEvent({
          layerId: Os,
          event: {
            time: s(),
            title: "🛬 " + c,
            subtitle: "end",
            data: {
              store: Zt(t.$id),
              action: Zt(c),
              args: f,
              result: d
            },
            groupId: u
          }
        });
      }), a((d) => {
        rs = void 0, n.addTimelineEvent({
          layerId: Os,
          event: {
            time: s(),
            logType: "error",
            title: "💥 " + c,
            subtitle: "end",
            data: {
              store: Zt(t.$id),
              action: Zt(c),
              args: f,
              error: d
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((i) => {
      Lt(() => ae(t[i]), (a, c) => {
        n.notifyComponentUpdate(), n.sendInspectorState(mt), mo && n.addTimelineEvent({
          layerId: Os,
          event: {
            time: s(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: a,
              oldValue: c
            },
            groupId: rs
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: i, type: a }, c) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(mt), !mo)
        return;
      const f = {
        time: s(),
        title: sw(a),
        data: ow({ store: Zt(t.$id) }, nw(i)),
        groupId: rs
      };
      a === Sn.patchFunction ? f.subtitle = "⤵️" : a === Sn.patchObject ? f.subtitle = "🧩" : i && !Array.isArray(i) && (f.subtitle = i.type), i && (f.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: Os,
        event: f
      });
    }, { detached: !0, flush: "sync" });
    const o = t._hotUpdate;
    t._hotUpdate = ss((i) => {
      o(i), n.addTimelineEvent({
        layerId: Os,
        event: {
          time: s(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: Zt(t.$id),
            info: Zt("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(mt), n.sendInspectorState(mt);
    });
    const { $dispose: r } = t;
    t.$dispose = () => {
      r(), n.notifyComponentUpdate(), n.sendInspectorTree(mt), n.sendInspectorState(mt), n.getSettings().logStoreChanges && dt(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(mt), n.sendInspectorState(mt), n.getSettings().logStoreChanges && dt(`"${t.$id}" store installed 🆕`);
  });
}
let mg = 0, rs;
function Sf(e, t, n) {
  const s = t.reduce((o, r) => (o[r] = ye(e)[r], o), {});
  for (const o in s)
    e[o] = function() {
      const r = mg, i = n ? new Proxy(e, {
        get(...c) {
          return rs = r, Reflect.get(...c);
        },
        set(...c) {
          return rs = r, Reflect.set(...c);
        }
      }) : e;
      rs = r;
      const a = s[o].apply(i, arguments);
      return rs = void 0, a;
    };
}
function aw({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      Sf(t, Object.keys(n.actions), t._isOptionsAPI);
      const s = t._hotUpdate;
      ye(t)._hotUpdate = function(o) {
        s.apply(this, arguments), Sf(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    iw(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function lw() {
  const e = Zp(!0), t = e.run(() => G({}));
  let n = [], s = [];
  const o = ss({
    install(r) {
      Ir(o), o._a = r, r.provide(ag, o), r.config.globalProperties.$pinia = o, Ve.NODE_ENV !== "production" && Ve.NODE_ENV !== "test" && os && rw(r, o), s.forEach((i) => n.push(i)), s = [];
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
  return Ve.NODE_ENV !== "production" && Ve.NODE_ENV !== "test" && os && typeof Proxy < "u" && o.use(aw), o;
}
function gg(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    zs(o) && zs(s) && !Ke(s) && !on(s) ? e[n] = gg(o, s) : e[n] = s;
  }
  return e;
}
const vg = () => {
};
function Of(e, t, n, s = vg) {
  e.push(t);
  const o = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), s());
  };
  return !n && eh() && U_(o), o;
}
function oo(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const cw = (e) => e(), Cf = Symbol(), el = Symbol();
function Xl(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    zs(o) && zs(s) && e.hasOwnProperty(n) && !Ke(s) && !on(s) ? e[n] = Xl(o, s) : e[n] = s;
  }
  return e;
}
const uw = Ve.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function dw(e) {
  return !zs(e) || !Object.prototype.hasOwnProperty.call(e, uw);
}
const { assign: Kt } = Object;
function Tf(e) {
  return !!(Ke(e) && e.effect);
}
function Nf(e, t, n, s) {
  const { state: o, actions: r, getters: i } = t, a = n.state.value[e];
  let c;
  function f() {
    !a && (Ve.NODE_ENV === "production" || !s) && (n.state.value[e] = o ? o() : {});
    const u = Ve.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      cn(G(o ? o() : {}).value)
    ) : cn(n.state.value[e]);
    return Kt(u, r, Object.keys(i || {}).reduce((d, m) => (Ve.NODE_ENV !== "production" && m in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${m}" in store "${e}".`), d[m] = ss(W(() => {
      Ir(n);
      const p = n._s.get(e);
      return i[m].call(p, p);
    })), d), {}));
  }
  return c = Gl(e, f, t, n, s, !0), c;
}
function Gl(e, t, n = {}, s, o, r) {
  let i;
  const a = Kt({ actions: {} }, n);
  if (Ve.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const c = { deep: !0 };
  Ve.NODE_ENV !== "production" && (c.onTrigger = (S) => {
    f ? p = S : f == !1 && !D._hotUpdating && (Array.isArray(p) ? p.push(S) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let f, u, d = [], m = [], p;
  const h = s.state.value[e];
  !r && !h && (Ve.NODE_ENV === "production" || !o) && (s.state.value[e] = {});
  const v = G({});
  let _;
  function y(S) {
    let R;
    f = u = !1, Ve.NODE_ENV !== "production" && (p = []), typeof S == "function" ? (S(s.state.value[e]), R = {
      type: Sn.patchFunction,
      storeId: e,
      events: p
    }) : (Xl(s.state.value[e], S), R = {
      type: Sn.patchObject,
      payload: S,
      storeId: e,
      events: p
    });
    const w = _ = Symbol();
    wo().then(() => {
      _ === w && (f = !0);
    }), u = !0, oo(d, R, s.state.value[e]);
  }
  const E = r ? function() {
    const { state: R } = n, w = R ? R() : {};
    this.$patch((x) => {
      Kt(x, w);
    });
  } : (
    /* istanbul ignore next */
    Ve.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : vg
  );
  function g() {
    i.stop(), d = [], m = [], s._s.delete(e);
  }
  const T = (S, R = "") => {
    if (Cf in S)
      return S[el] = R, S;
    const w = function() {
      Ir(s);
      const x = Array.from(arguments), ee = [], ne = [];
      function V(J) {
        ee.push(J);
      }
      function L(J) {
        ne.push(J);
      }
      oo(m, {
        args: x,
        name: w[el],
        store: D,
        after: V,
        onError: L
      });
      let $;
      try {
        $ = S.apply(this && this.$id === e ? this : D, x);
      } catch (J) {
        throw oo(ne, J), J;
      }
      return $ instanceof Promise ? $.then((J) => (oo(ee, J), J)).catch((J) => (oo(ne, J), Promise.reject(J))) : (oo(ee, $), $);
    };
    return w[Cf] = !0, w[el] = R, w;
  }, I = /* @__PURE__ */ ss({
    actions: {},
    getters: {},
    state: [],
    hotState: v
  }), C = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Of.bind(null, m),
    $patch: y,
    $reset: E,
    $subscribe(S, R = {}) {
      const w = Of(d, S, R.detached, () => x()), x = i.run(() => Lt(() => s.state.value[e], (ee) => {
        (R.flush === "sync" ? u : f) && S({
          storeId: e,
          type: Sn.direct,
          events: p
        }, ee);
      }, Kt({}, c, R)));
      return w;
    },
    $dispose: g
  }, D = Hs(Ve.NODE_ENV !== "production" || Ve.NODE_ENV !== "production" && Ve.NODE_ENV !== "test" && os ? Kt(
    {
      _hmrPayload: I,
      _customProperties: ss(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    C
    // must be added later
    // setupStore
  ) : C);
  s._s.set(e, D);
  const O = (s._a && s._a.runWithContext || cw)(() => s._e.run(() => (i = Zp()).run(() => t({ action: T }))));
  for (const S in O) {
    const R = O[S];
    if (Ke(R) && !Tf(R) || on(R))
      Ve.NODE_ENV !== "production" && o ? v.value[S] = _i(O, S) : r || (h && dw(R) && (Ke(R) ? R.value = h[S] : Xl(R, h[S])), s.state.value[e][S] = R), Ve.NODE_ENV !== "production" && I.state.push(S);
    else if (typeof R == "function") {
      const w = Ve.NODE_ENV !== "production" && o ? R : T(R, S);
      O[S] = w, Ve.NODE_ENV !== "production" && (I.actions[S] = R), a.actions[S] = R;
    } else Ve.NODE_ENV !== "production" && Tf(R) && (I.getters[S] = r ? (
      // @ts-expect-error
      n.getters[S]
    ) : R, os && (O._getters || // @ts-expect-error: same
    (O._getters = ss([]))).push(S));
  }
  if (Kt(D, O), Kt(ye(D), O), Object.defineProperty(D, "$state", {
    get: () => Ve.NODE_ENV !== "production" && o ? v.value : s.state.value[e],
    set: (S) => {
      if (Ve.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      y((R) => {
        Kt(R, S);
      });
    }
  }), Ve.NODE_ENV !== "production" && (D._hotUpdate = ss((S) => {
    D._hotUpdating = !0, S._hmrPayload.state.forEach((R) => {
      if (R in D.$state) {
        const w = S.$state[R], x = D.$state[R];
        typeof w == "object" && zs(w) && zs(x) ? gg(w, x) : S.$state[R] = x;
      }
      D[R] = _i(S.$state, R);
    }), Object.keys(D.$state).forEach((R) => {
      R in S.$state || delete D[R];
    }), f = !1, u = !1, s.state.value[e] = _i(S._hmrPayload, "hotState"), u = !0, wo().then(() => {
      f = !0;
    });
    for (const R in S._hmrPayload.actions) {
      const w = S[R];
      D[R] = //
      T(w, R);
    }
    for (const R in S._hmrPayload.getters) {
      const w = S._hmrPayload.getters[R], x = r ? (
        // special handling of options api
        W(() => (Ir(s), w.call(D, D)))
      ) : w;
      D[R] = //
      x;
    }
    Object.keys(D._hmrPayload.getters).forEach((R) => {
      R in S._hmrPayload.getters || delete D[R];
    }), Object.keys(D._hmrPayload.actions).forEach((R) => {
      R in S._hmrPayload.actions || delete D[R];
    }), D._hmrPayload = S._hmrPayload, D._getters = S._getters, D._hotUpdating = !1;
  })), Ve.NODE_ENV !== "production" && Ve.NODE_ENV !== "test" && os) {
    const S = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((R) => {
      Object.defineProperty(D, R, Kt({ value: D[R] }, S));
    });
  }
  return s._p.forEach((S) => {
    if (Ve.NODE_ENV !== "production" && Ve.NODE_ENV !== "test" && os) {
      const R = i.run(() => S({
        store: D,
        app: s._a,
        pinia: s,
        options: a
      }));
      Object.keys(R || {}).forEach((w) => D._customProperties.add(w)), Kt(D, R);
    } else
      Kt(D, i.run(() => S({
        store: D,
        app: s._a,
        pinia: s,
        options: a
      })));
  }), Ve.NODE_ENV !== "production" && D.$state && typeof D.$state == "object" && typeof D.$state.constructor == "function" && !D.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${D.$id}".`), h && r && n.hydrate && n.hydrate(D.$state, h), f = !0, u = !0, D;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ps(e, t, n) {
  let s;
  const o = typeof t == "function";
  s = o ? n : t;
  function r(i, a) {
    const c = fb();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (Ve.NODE_ENV === "test" && ar && ar._testing ? null : i) || (c ? _t(ag, null) : null), i && Ir(i), Ve.NODE_ENV !== "production" && !ar)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = ar, i._s.has(e) || (o ? Gl(e, t, s, i) : Nf(e, s, i), Ve.NODE_ENV !== "production" && (r._pinia = i));
    const f = i._s.get(e);
    if (Ve.NODE_ENV !== "production" && a) {
      const u = "__hot:" + e, d = o ? Gl(u, t, s, i, !0) : Nf(u, Kt({}, s), i, !0);
      a._hotUpdate(d), delete i.state.value[u], i._s.delete(u);
    }
    if (Ve.NODE_ENV !== "production" && os) {
      const u = Rn();
      if (u && u.proxy && // avoid adding stores that are just built for hot module replacement
      !a) {
        const d = u.proxy, m = "_pStores" in d ? d._pStores : d._pStores = {};
        m[e] = f;
      }
    }
    return f;
  }
  return r.$id = e, r;
}
function Aa(e) {
  const t = ye(e), n = {};
  for (const s in t) {
    const o = t[s];
    o.effect ? n[s] = // ...
    W({
      get: () => e[s],
      set(r) {
        e[s] = r;
      }
    }) : (Ke(o) || on(o)) && (n[s] = // ---
    _i(e, s));
  }
  return n;
}
function fw() {
  return _g().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function _g() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const pw = typeof Proxy == "function", hw = "devtools-plugin:setup", mw = "plugin:settings:set";
let ro, Ql;
function gw() {
  var e;
  return ro !== void 0 || (typeof window < "u" && window.performance ? (ro = !0, Ql = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (ro = !0, Ql = globalThis.perf_hooks.performance) : ro = !1), ro;
}
function vw() {
  return gw() ? Ql.now() : Date.now();
}
class _w {
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
        return vw();
      }
    }, n && n.on(mw, (i, a) => {
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
function yw(e, t) {
  const n = e, s = _g(), o = fw(), r = pw && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r))
    o.emit(hw, e, t);
  else {
    const i = r ? new _w(n, o) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
var Se = {};
const Bn = typeof document < "u";
function yg(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function bw(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && yg(e.default);
}
const Be = Object.assign;
function tl(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = Ft(o) ? o.map(e) : e(o);
  }
  return n;
}
const gr = () => {
}, Ft = Array.isArray;
function ke(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const bg = /#/g, Ew = /&/g, ww = /\//g, Aw = /=/g, Sw = /\?/g, Eg = /\+/g, Ow = /%5B/g, Cw = /%5D/g, wg = /%5E/g, Tw = /%60/g, Ag = /%7B/g, Nw = /%7C/g, Sg = /%7D/g, Dw = /%20/g;
function Gc(e) {
  return encodeURI("" + e).replace(Nw, "|").replace(Ow, "[").replace(Cw, "]");
}
function xw(e) {
  return Gc(e).replace(Ag, "{").replace(Sg, "}").replace(wg, "^");
}
function Jl(e) {
  return Gc(e).replace(Eg, "%2B").replace(Dw, "+").replace(bg, "%23").replace(Ew, "%26").replace(Tw, "`").replace(Ag, "{").replace(Sg, "}").replace(wg, "^");
}
function kw(e) {
  return Jl(e).replace(Aw, "%3D");
}
function Rw(e) {
  return Gc(e).replace(bg, "%23").replace(Sw, "%3F");
}
function Iw(e) {
  return e == null ? "" : Rw(e).replace(ww, "%2F");
}
function No(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    Se.NODE_ENV !== "production" && ke(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const Pw = /\/$/, Vw = (e) => e.replace(Pw, "");
function nl(e, t, n = "/") {
  let s, o = {}, r = "", i = "";
  const a = t.indexOf("#");
  let c = t.indexOf("?");
  return a < c && a >= 0 && (c = -1), c > -1 && (s = t.slice(0, c), r = t.slice(c + 1, a > -1 ? a : t.length), o = e(r)), a > -1 && (s = s || t.slice(0, a), i = t.slice(a, t.length)), s = Fw(s ?? t, n), {
    fullPath: s + (r && "?") + r + i,
    path: s,
    query: o,
    hash: No(i)
  };
}
function Mw(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Df(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function xf(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && ls(t.matched[s], n.matched[o]) && Og(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ls(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Og(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Lw(e[n], t[n]))
      return !1;
  return !0;
}
function Lw(e, t) {
  return Ft(e) ? kf(e, t) : Ft(t) ? kf(t, e) : e === t;
}
function kf(e, t) {
  return Ft(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Fw(e, t) {
  if (e.startsWith("/"))
    return e;
  if (Se.NODE_ENV !== "production" && !t.startsWith("/"))
    return ke(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
const Gn = {
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
var vr;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(vr || (vr = {}));
function Bw(e) {
  if (!e)
    if (Bn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Vw(e);
}
const jw = /^[^#]+#/;
function Uw(e, t) {
  return e.replace(jw, "#") + t;
}
function Hw(e, t) {
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
function $w(e) {
  let t;
  if ("el" in e) {
    const n = e.el, s = typeof n == "string" && n.startsWith("#");
    if (Se.NODE_ENV !== "production" && typeof e.el == "string" && (!s || !document.getElementById(e.el.slice(1))))
      try {
        const r = document.querySelector(e.el);
        if (s && r) {
          ke(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        ke(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      Se.NODE_ENV !== "production" && ke(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Hw(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Rf(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Zl = /* @__PURE__ */ new Map();
function Ww(e, t) {
  Zl.set(e, t);
}
function Kw(e) {
  const t = Zl.get(e);
  return Zl.delete(e), t;
}
let zw = () => location.protocol + "//" + location.host;
function Cg(e, t) {
  const { pathname: n, search: s, hash: o } = t, r = e.indexOf("#");
  if (r > -1) {
    let a = o.includes(e.slice(r)) ? e.slice(r).length : 1, c = o.slice(a);
    return c[0] !== "/" && (c = "/" + c), Df(c, "");
  }
  return Df(n, e) + s + o;
}
function qw(e, t, n, s) {
  let o = [], r = [], i = null;
  const a = ({ state: m }) => {
    const p = Cg(e, location), h = n.value, v = t.value;
    let _ = 0;
    if (m) {
      if (n.value = p, t.value = m, i && i === h) {
        i = null;
        return;
      }
      _ = v ? m.position - v.position : 0;
    } else
      s(p);
    o.forEach((y) => {
      y(n.value, h, {
        delta: _,
        type: Pr.pop,
        direction: _ ? _ > 0 ? vr.forward : vr.back : vr.unknown
      });
    });
  };
  function c() {
    i = n.value;
  }
  function f(m) {
    o.push(m);
    const p = () => {
      const h = o.indexOf(m);
      h > -1 && o.splice(h, 1);
    };
    return r.push(p), p;
  }
  function u() {
    const { history: m } = window;
    m.state && m.replaceState(Be({}, m.state, { scroll: Sa() }), "");
  }
  function d() {
    for (const m of r)
      m();
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
function Yw(e) {
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
    const d = e.indexOf("#"), m = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : zw() + e + c;
    try {
      t[u ? "replaceState" : "pushState"](f, "", m), o.value = f;
    } catch (p) {
      Se.NODE_ENV !== "production" ? ke("Error with push/replace State", p) : console.error(p), n[u ? "replace" : "assign"](m);
    }
  }
  function i(c, f) {
    const u = Be({}, t.state, If(
      o.value.back,
      // keep back and forward entries but override current position
      c,
      o.value.forward,
      !0
    ), f, { position: o.value.position });
    r(c, u, !0), s.value = c;
  }
  function a(c, f) {
    const u = Be(
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
    Se.NODE_ENV !== "production" && !t.state && ke(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), r(u.current, u, !0);
    const d = Be({}, If(s.value, c, null), { position: u.position + 1 }, f);
    r(c, d, !1), s.value = c;
  }
  return {
    location: s,
    state: o,
    push: a,
    replace: i
  };
}
function Xw(e) {
  e = Bw(e);
  const t = Yw(e), n = qw(e, t.state, t.location, t.replace);
  function s(r, i = !0) {
    i || n.pauseListeners(), history.go(r);
  }
  const o = Be({
    // it's overridden right after
    location: "",
    base: e,
    go: s,
    createHref: Uw.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function Gw(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Se.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && ke(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Xw(e);
}
function ea(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Tg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const ec = Symbol(Se.NODE_ENV !== "production" ? "navigation failure" : "");
var Pf;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Pf || (Pf = {}));
const Qw = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Zw(t)}" via a navigation guard.`;
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
  return Se.NODE_ENV !== "production" ? Be(new Error(Qw[e](t)), {
    type: e,
    [ec]: !0
  }, t) : Be(new Error(), {
    type: e,
    [ec]: !0
  }, t);
}
function Ln(e, t) {
  return e instanceof Error && ec in e && (t == null || !!(e.type & t));
}
const Jw = ["params", "query", "hash"];
function Zw(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of Jw)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Vf = "[^/]+?", eA = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, tA = /[.+*?^${}()[\]/\\]/g;
function nA(e, t) {
  const n = Be({}, eA, t), s = [];
  let o = n.start ? "^" : "";
  const r = [];
  for (const f of e) {
    const u = f.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !f.length && (o += "/");
    for (let d = 0; d < f.length; d++) {
      const m = f[d];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (m.type === 0)
        d || (o += "/"), o += m.value.replace(tA, "\\$&"), p += 40;
      else if (m.type === 1) {
        const { value: h, repeatable: v, optional: _, regexp: y } = m;
        r.push({
          name: h,
          repeatable: v,
          optional: _
        });
        const E = y || Vf;
        if (E !== Vf) {
          p += 10;
          try {
            new RegExp(`(${E})`);
          } catch (T) {
            throw new Error(`Invalid custom RegExp for param "${h}" (${E}): ` + T.message);
          }
        }
        let g = v ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
        d || (g = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        _ && f.length < 2 ? `(?:/${g})` : "/" + g), _ && (g += "?"), o += g, p += 20, _ && (p += -8), v && (p += -20), E === ".*" && (p += -50);
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
    for (let m = 1; m < u.length; m++) {
      const p = u[m] || "", h = r[m - 1];
      d[h.name] = p && h.repeatable ? p.split("/") : p;
    }
    return d;
  }
  function c(f) {
    let u = "", d = !1;
    for (const m of e) {
      (!d || !u.endsWith("/")) && (u += "/"), d = !1;
      for (const p of m)
        if (p.type === 0)
          u += p.value;
        else if (p.type === 1) {
          const { value: h, repeatable: v, optional: _ } = p, y = h in f ? f[h] : "";
          if (Ft(y) && !v)
            throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
          const E = Ft(y) ? y.join("/") : y;
          if (!E)
            if (_)
              m.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${h}"`);
          u += E;
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
function sA(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s)
      return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Ng(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const r = sA(s[n], o[n]);
    if (r)
      return r;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (Mf(s))
      return 1;
    if (Mf(o))
      return -1;
  }
  return o.length - s.length;
}
function Mf(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const oA = {
  type: 0,
  value: ""
}, rA = /[a-zA-Z0-9_]/;
function iA(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[oA]];
  if (!e.startsWith("/"))
    throw new Error(Se.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${f}": ${p}`);
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
  function m() {
    f += c;
  }
  for (; a < e.length; ) {
    if (c = e[a++], c === "\\" && n !== 2) {
      s = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (f && d(), i()) : c === ":" ? (d(), n = 1) : m();
        break;
      case 4:
        m(), n = s;
        break;
      case 1:
        c === "(" ? n = 2 : rA.test(c) ? m() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && a--);
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
function aA(e, t, n) {
  const s = nA(iA(e.path), n);
  if (Se.NODE_ENV !== "production") {
    const r = /* @__PURE__ */ new Set();
    for (const i of s.keys)
      r.has(i.name) && ke(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), r.add(i.name);
  }
  const o = Be(s, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function lA(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = jf({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(d) {
    return s.get(d);
  }
  function r(d, m, p) {
    const h = !p, v = Ff(d);
    Se.NODE_ENV !== "production" && fA(v, m), v.aliasOf = p && p.record;
    const _ = jf(t, d), y = [v];
    if ("alias" in d) {
      const T = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const I of T)
        y.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          Ff(Be({}, v, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: p ? p.record.components : v.components,
            path: I,
            // we might be the child of an alias
            aliasOf: p ? p.record : v
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let E, g;
    for (const T of y) {
      const { path: I } = T;
      if (m && I[0] !== "/") {
        const C = m.record.path, D = C[C.length - 1] === "/" ? "" : "/";
        T.path = m.record.path + (I && D + I);
      }
      if (Se.NODE_ENV !== "production" && T.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (E = aA(T, m, _), Se.NODE_ENV !== "production" && m && I[0] === "/" && hA(E, m), p ? (p.alias.push(E), Se.NODE_ENV !== "production" && dA(p, E)) : (g = g || E, g !== E && g.alias.push(E), h && d.name && !Bf(E) && (Se.NODE_ENV !== "production" && pA(d, m), i(d.name))), Dg(E) && c(E), v.children) {
        const C = v.children;
        for (let D = 0; D < C.length; D++)
          r(C[D], E, p && p.children[D]);
      }
      p = p || E;
    }
    return g ? () => {
      i(g);
    } : gr;
  }
  function i(d) {
    if (Tg(d)) {
      const m = s.get(d);
      m && (s.delete(d), n.splice(n.indexOf(m), 1), m.children.forEach(i), m.alias.forEach(i));
    } else {
      const m = n.indexOf(d);
      m > -1 && (n.splice(m, 1), d.record.name && s.delete(d.record.name), d.children.forEach(i), d.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function c(d) {
    const m = mA(d, n);
    n.splice(m, 0, d), d.record.name && !Bf(d) && s.set(d.record.name, d);
  }
  function f(d, m) {
    let p, h = {}, v, _;
    if ("name" in d && d.name) {
      if (p = s.get(d.name), !p)
        throw Do(1, {
          location: d
        });
      if (Se.NODE_ENV !== "production") {
        const g = Object.keys(d.params || {}).filter((T) => !p.keys.find((I) => I.name === T));
        g.length && ke(`Discarded invalid param(s) "${g.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      _ = p.record.name, h = Be(
        // paramsFromLocation is a new object
        Lf(
          m.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          p.keys.filter((g) => !g.optional).concat(p.parent ? p.parent.keys.filter((g) => g.optional) : []).map((g) => g.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        d.params && Lf(d.params, p.keys.map((g) => g.name))
      ), v = p.stringify(h);
    } else if (d.path != null)
      v = d.path, Se.NODE_ENV !== "production" && !v.startsWith("/") && ke(`The Matcher cannot resolve relative paths but received "${v}". Unless you directly called \`matcher.resolve("${v}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), p = n.find((g) => g.re.test(v)), p && (h = p.parse(v), _ = p.record.name);
    else {
      if (p = m.name ? s.get(m.name) : n.find((g) => g.re.test(m.path)), !p)
        throw Do(1, {
          location: d,
          currentLocation: m
        });
      _ = p.record.name, h = Be({}, m.params, d.params), v = p.stringify(h);
    }
    const y = [];
    let E = p;
    for (; E; )
      y.unshift(E.record), E = E.parent;
    return {
      name: _,
      path: v,
      params: h,
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
    props: cA(e),
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
function cA(e) {
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
function uA(e) {
  return e.reduce((t, n) => Be(t, n.meta), {});
}
function jf(e, t) {
  const n = {};
  for (const s in e)
    n[s] = s in t ? t[s] : e[s];
  return n;
}
function tc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function dA(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(tc.bind(null, n)))
      return ke(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(tc.bind(null, n)))
      return ke(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function fA(e, t) {
  t && t.record.name && !e.name && !e.path && ke(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function pA(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function hA(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(tc.bind(null, n)))
      return ke(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function mA(e, t) {
  let n = 0, s = t.length;
  for (; n !== s; ) {
    const r = n + s >> 1;
    Ng(e, t[r]) < 0 ? s = r : n = r + 1;
  }
  const o = gA(e);
  return o && (s = t.lastIndexOf(o, s - 1), Se.NODE_ENV !== "production" && s < 0 && ke(`Finding ancestor route "${o.record.path}" failed for "${e.record.path}"`)), s;
}
function gA(e) {
  let t = e;
  for (; t = t.parent; )
    if (Dg(t) && Ng(e, t) === 0)
      return t;
}
function Dg({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function vA(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < s.length; ++o) {
    const r = s[o].replace(Eg, " "), i = r.indexOf("="), a = No(i < 0 ? r : r.slice(0, i)), c = i < 0 ? null : No(r.slice(i + 1));
    if (a in t) {
      let f = t[a];
      Ft(f) || (f = t[a] = [f]), f.push(c);
    } else
      t[a] = c;
  }
  return t;
}
function Uf(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = kw(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ft(s) ? s.map((r) => r && Jl(r)) : [s && Jl(s)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function _A(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = Ft(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const yA = Symbol(Se.NODE_ENV !== "production" ? "router view location matched" : ""), Hf = Symbol(Se.NODE_ENV !== "production" ? "router view depth" : ""), Qc = Symbol(Se.NODE_ENV !== "production" ? "router" : ""), Jc = Symbol(Se.NODE_ENV !== "production" ? "route location" : ""), nc = Symbol(Se.NODE_ENV !== "production" ? "router view location" : "");
function Zo() {
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
function ts(e, t, n, s, o, r = (i) => i()) {
  const i = s && // name is defined if record is because of the function overload
  (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
  return () => new Promise((a, c) => {
    const f = (m) => {
      m === !1 ? c(Do(4, {
        from: n,
        to: t
      })) : m instanceof Error ? c(m) : ea(m) ? c(Do(2, {
        from: t,
        to: m
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === i && typeof m == "function" && i.push(m), a());
    }, u = r(() => e.call(s && s.instances[o], t, n, Se.NODE_ENV !== "production" ? bA(f, t, n) : f));
    let d = Promise.resolve(u);
    if (e.length < 3 && (d = d.then(f)), Se.NODE_ENV !== "production" && e.length > 2) {
      const m = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        d = d.then((p) => f._called ? p : (ke(m), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !f._called) {
        ke(m), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    d.catch((m) => c(m));
  });
}
function bA(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && ke(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function sl(e, t, n, s, o = (r) => r()) {
  const r = [];
  for (const i of e) {
    Se.NODE_ENV !== "production" && !i.components && !i.children.length && ke(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in i.components) {
      let c = i.components[a];
      if (Se.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw ke(`Component "${a}" in record with path "${i.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          ke(`Component "${a}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const f = c;
          c = () => f;
        } else c.__asyncLoader && // warn only once per component
        !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, ke(`Component "${a}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (yg(c)) {
          const u = (c.__vccOpts || c)[t];
          u && r.push(ts(u, n, s, i, a, o));
        } else {
          let f = c();
          Se.NODE_ENV !== "production" && !("catch" in f) && (ke(`Component "${a}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), f = Promise.resolve(f)), r.push(() => f.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
            const d = bw(u) ? u.default : u;
            i.mods[a] = u, i.components[a] = d;
            const p = (d.__vccOpts || d)[t];
            return p && ts(p, n, s, i, a, o)();
          }));
        }
    }
  }
  return r;
}
function $f(e) {
  const t = _t(Qc), n = _t(Jc);
  let s = !1, o = null;
  const r = W(() => {
    const u = ae(e.to);
    return Se.NODE_ENV !== "production" && (!s || u !== o) && (ea(u) || (s ? ke(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, o, `
- props:`, e) : ke(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), o = u, s = !0), t.resolve(u);
  }), i = W(() => {
    const { matched: u } = r.value, { length: d } = u, m = u[d - 1], p = n.matched;
    if (!m || !p.length)
      return -1;
    const h = p.findIndex(ls.bind(null, m));
    if (h > -1)
      return h;
    const v = Wf(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Wf(m) === v && // avoid comparing the child with its parent
      p[p.length - 1].path !== v ? p.findIndex(ls.bind(null, u[d - 2])) : h
    );
  }), a = W(() => i.value > -1 && OA(n.params, r.value.params)), c = W(() => i.value > -1 && i.value === n.matched.length - 1 && Og(n.params, r.value.params));
  function f(u = {}) {
    if (SA(u)) {
      const d = t[ae(e.replace) ? "replace" : "push"](
        ae(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(gr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  if (Se.NODE_ENV !== "production" && Bn) {
    const u = Rn();
    if (u) {
      const d = {
        route: r.value,
        isActive: a.value,
        isExactActive: c.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), ha(() => {
        d.route = r.value, d.isActive = a.value, d.isExactActive = c.value, d.error = ea(ae(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: W(() => r.value.href),
    isActive: a,
    isExactActive: c,
    navigate: f
  };
}
function EA(e) {
  return e.length === 1 ? e[0] : e;
}
const wA = /* @__PURE__ */ Te({
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
  useLink: $f,
  setup(e, { slots: t }) {
    const n = Hs($f(e)), { options: s } = _t(Qc), o = W(() => ({
      [Kf(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Kf(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const r = t.default && EA(t.default(n));
      return e.custom ? r : Mc("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, r);
    };
  }
}), AA = wA;
function SA(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function OA(e, t) {
  for (const n in t) {
    const s = t[n], o = e[n];
    if (typeof s == "string") {
      if (s !== o)
        return !1;
    } else if (!Ft(o) || o.length !== s.length || s.some((r, i) => r !== o[i]))
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
    Se.NODE_ENV !== "production" && NA();
    const s = _t(nc), o = W(() => e.route || s.value), r = _t(Hf, 0), i = W(() => {
      let f = ae(r);
      const { matched: u } = o.value;
      let d;
      for (; (d = u[f]) && !d.components; )
        f++;
      return f;
    }), a = W(() => o.value.matched[i.value]);
    Eo(Hf, W(() => i.value + 1)), Eo(yA, a), Eo(nc, o);
    const c = G();
    return Lt(() => [c.value, a.value, e.name], ([f, u, d], [m, p, h]) => {
      u && (u.instances[d] = f, p && p !== u && f && f === m && (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards), u.updateGuards.size || (u.updateGuards = p.updateGuards))), f && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !ls(u, p) || !m) && (u.enterCallbacks[d] || []).forEach((v) => v(f));
    }, { flush: "post" }), () => {
      const f = o.value, u = e.name, d = a.value, m = d && d.components[u];
      if (!m)
        return zf(n.default, { Component: m, route: f });
      const p = d.props[u], h = p ? p === !0 ? f.params : typeof p == "function" ? p(f) : p : null, _ = Mc(m, Be({}, h, t, {
        onVnodeUnmounted: (y) => {
          y.component.isUnmounted && (d.instances[u] = null);
        },
        ref: c
      }));
      if (Se.NODE_ENV !== "production" && Bn && _.ref) {
        const y = {
          depth: i.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (Ft(_.ref) ? _.ref.map((g) => g.i) : [_.ref.i]).forEach((g) => {
          g.__vrv_devtools = y;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        zf(n.default, { Component: _, route: f }) || _
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
const TA = CA;
function NA() {
  const e = Rn(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const s = t === "KeepAlive" ? "keep-alive" : "transition";
    ke(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`);
  }
}
function er(e, t) {
  const n = Be({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((s) => BA(s, ["instances", "children", "aliasOf"]))
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
function li(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let DA = 0;
function xA(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const s = DA++;
  yw({
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
        value: er(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: u, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const m = d.__vrv_devtools;
        u.tags.push({
          label: (m.name ? `${m.name.toString()}: ` : "") + m.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: xg
        });
      }
      Ft(d.__vrl_devtools) && (d.__devtoolsApi = o, d.__vrl_devtools.forEach((m) => {
        let p = m.route.path, h = Ig, v = "", _ = 0;
        m.error ? (p = m.error, h = VA, _ = MA) : m.isExactActive ? (h = Rg, v = "This is exactly active") : m.isActive && (h = kg, v = "This link is active"), u.tags.push({
          label: p,
          textColor: _,
          tooltip: v,
          backgroundColor: h
        });
      }));
    }), Lt(t.currentRoute, () => {
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
      const m = {
        guard: li("beforeEach"),
        from: er(d, "Current Location during this navigation"),
        to: er(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: i++
      }), o.addTimelineEvent({
        layerId: r,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: m,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, d, m) => {
      const p = {
        guard: li("afterEach")
      };
      m ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: m ? m.message : "",
          tooltip: "Navigation Failure",
          value: m
        }
      }, p.status = li("❌")) : p.status = li("✅"), p.from = er(d, "Current Location during this navigation"), p.to = er(u, "Target location"), o.addTimelineEvent({
        layerId: r,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: o.now(),
          data: p,
          logType: m ? "warning" : "default",
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
      let d = n.getRoutes().filter((m) => !m.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !m.parent.record.components);
      d.forEach(Mg), u.filter && (d = d.filter((m) => (
        // save matches state based on the payload
        sc(m, u.filter.toLowerCase())
      ))), d.forEach((m) => Vg(m, t.currentRoute.value)), u.rootNodes = d.map(Pg);
    }
    let f;
    o.on.getInspectorTree((u) => {
      f = u, u.app === e && u.inspectorId === a && c();
    }), o.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === a) {
        const m = n.getRoutes().find((p) => p.record.__vd_id === u.nodeId);
        m && (u.state = {
          options: RA(m)
        });
      }
    }), o.sendInspectorTree(a), o.sendInspectorState(a);
  });
}
function kA(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function RA(e) {
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
const xg = 15485081, kg = 2450411, Rg = 8702998, IA = 2282478, Ig = 16486972, PA = 6710886, VA = 16704226, MA = 12131356;
function Pg(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: IA
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Ig
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: xg
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Rg
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: kg
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: PA
  });
  let s = n.__vd_id;
  return s == null && (s = String(LA++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(Pg)
  };
}
let LA = 0;
const FA = /^\/(.*)\/([a-z]*)$/;
function Vg(e, t) {
  const n = t.matched.length && ls(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => ls(s, e.record))), e.children.forEach((s) => Vg(s, t));
}
function Mg(e) {
  e.__vd_match = !1, e.children.forEach(Mg);
}
function sc(e, t) {
  const n = String(e.re).match(FA);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => sc(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), r = No(o);
  return !t.startsWith("/") && (r.includes(t) || o.includes(t)) || r.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => sc(i, t));
}
function BA(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function jA(e) {
  const t = lA(e.routes, e), n = e.parseQuery || vA, s = e.stringifyQuery || Uf, o = e.history;
  if (Se.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const r = Zo(), i = Zo(), a = Zo(), c = _h(Gn);
  let f = Gn;
  Bn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = tl.bind(null, (U) => "" + U), d = tl.bind(null, Iw), m = (
    // @ts-expect-error: intentionally avoid the type check
    tl.bind(null, No)
  );
  function p(U, re) {
    let le, fe;
    return Tg(U) ? (le = t.getRecordMatcher(U), Se.NODE_ENV !== "production" && !le && ke(`Parent route "${String(U)}" not found when adding child route`, re), fe = re) : fe = U, t.addRoute(fe, le);
  }
  function h(U) {
    const re = t.getRecordMatcher(U);
    re ? t.removeRoute(re) : Se.NODE_ENV !== "production" && ke(`Cannot remove non-existent route "${String(U)}"`);
  }
  function v() {
    return t.getRoutes().map((U) => U.record);
  }
  function _(U) {
    return !!t.getRecordMatcher(U);
  }
  function y(U, re) {
    if (re = Be({}, re || c.value), typeof U == "string") {
      const A = nl(n, U, re.path), M = t.resolve({ path: A.path }, re), K = o.createHref(A.fullPath);
      return Se.NODE_ENV !== "production" && (K.startsWith("//") ? ke(`Location "${U}" resolved to "${K}". A resolved location cannot start with multiple slashes.`) : M.matched.length || ke(`No match found for location with path "${U}"`)), Be(A, M, {
        params: m(M.params),
        hash: No(A.hash),
        redirectedFrom: void 0,
        href: K
      });
    }
    if (Se.NODE_ENV !== "production" && !ea(U))
      return ke(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, U), y({});
    let le;
    if (U.path != null)
      Se.NODE_ENV !== "production" && "params" in U && !("name" in U) && // @ts-expect-error: the type is never
      Object.keys(U.params).length && ke(`Path "${U.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), le = Be({}, U, {
        path: nl(n, U.path, re.path).path
      });
    else {
      const A = Be({}, U.params);
      for (const M in A)
        A[M] == null && delete A[M];
      le = Be({}, U, {
        params: d(A)
      }), re.params = d(re.params);
    }
    const fe = t.resolve(le, re), De = U.hash || "";
    Se.NODE_ENV !== "production" && De && !De.startsWith("#") && ke(`A \`hash\` should always start with the character "#". Replace "${De}" with "#${De}".`), fe.params = u(m(fe.params));
    const Ge = Mw(s, Be({}, U, {
      hash: xw(De),
      path: fe.path
    })), b = o.createHref(Ge);
    return Se.NODE_ENV !== "production" && (b.startsWith("//") ? ke(`Location "${U}" resolved to "${b}". A resolved location cannot start with multiple slashes.`) : fe.matched.length || ke(`No match found for location with path "${U.path != null ? U.path : U}"`)), Be({
      fullPath: Ge,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: De,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        s === Uf ? _A(U.query) : U.query || {}
      )
    }, fe, {
      redirectedFrom: void 0,
      href: b
    });
  }
  function E(U) {
    return typeof U == "string" ? nl(n, U, c.value.path) : Be({}, U);
  }
  function g(U, re) {
    if (f !== U)
      return Do(8, {
        from: re,
        to: U
      });
  }
  function T(U) {
    return D(U);
  }
  function I(U) {
    return T(Be(E(U), { replace: !0 }));
  }
  function C(U) {
    const re = U.matched[U.matched.length - 1];
    if (re && re.redirect) {
      const { redirect: le } = re;
      let fe = typeof le == "function" ? le(U) : le;
      if (typeof fe == "string" && (fe = fe.includes("?") || fe.includes("#") ? fe = E(fe) : (
        // force empty params
        { path: fe }
      ), fe.params = {}), Se.NODE_ENV !== "production" && fe.path == null && !("name" in fe))
        throw ke(`Invalid redirect found:
${JSON.stringify(fe, null, 2)}
 when navigating to "${U.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Be({
        query: U.query,
        hash: U.hash,
        // avoid transferring params if the redirect has a path
        params: fe.path != null ? {} : U.params
      }, fe);
    }
  }
  function D(U, re) {
    const le = f = y(U), fe = c.value, De = U.state, Ge = U.force, b = U.replace === !0, A = C(le);
    if (A)
      return D(
        Be(E(A), {
          state: typeof A == "object" ? Be({}, De, A.state) : De,
          force: Ge,
          replace: b
        }),
        // keep original redirectedFrom if it exists
        re || le
      );
    const M = le;
    M.redirectedFrom = re;
    let K;
    return !Ge && xf(s, fe, le) && (K = Do(16, { to: M, from: fe }), Re(
      fe,
      fe,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (K ? Promise.resolve(K) : S(M, fe)).catch((H) => Ln(H) ? (
      // navigation redirects still mark the router as ready
      Ln(
        H,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? H : Oe(H)
    ) : (
      // reject any unknown error
      $(H, M, fe)
    )).then((H) => {
      if (H) {
        if (Ln(
          H,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return Se.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          xf(s, y(H.to), M) && // and we have done it a couple of times
          re && // @ts-expect-error: added only in dev
          (re._count = re._count ? (
            // @ts-expect-error
            re._count + 1
          ) : 1) > 30 ? (ke(`Detected a possibly infinite redirection in a navigation guard when going from "${fe.fullPath}" to "${M.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : D(
            // keep options
            Be({
              // preserve an existing replacement but allow the redirect to override it
              replace: b
            }, E(H.to), {
              state: typeof H.to == "object" ? Be({}, De, H.to.state) : De,
              force: Ge
            }),
            // preserve the original redirectedFrom if any
            re || M
          );
      } else
        H = w(M, fe, !0, b, De);
      return R(M, fe, H), H;
    });
  }
  function F(U, re) {
    const le = g(U, re);
    return le ? Promise.reject(le) : Promise.resolve();
  }
  function O(U) {
    const re = nt.values().next().value;
    return re && typeof re.runWithContext == "function" ? re.runWithContext(U) : U();
  }
  function S(U, re) {
    let le;
    const [fe, De, Ge] = UA(U, re);
    le = sl(fe.reverse(), "beforeRouteLeave", U, re);
    for (const A of fe)
      A.leaveGuards.forEach((M) => {
        le.push(ts(M, U, re));
      });
    const b = F.bind(null, U, re);
    return le.push(b), Tt(le).then(() => {
      le = [];
      for (const A of r.list())
        le.push(ts(A, U, re));
      return le.push(b), Tt(le);
    }).then(() => {
      le = sl(De, "beforeRouteUpdate", U, re);
      for (const A of De)
        A.updateGuards.forEach((M) => {
          le.push(ts(M, U, re));
        });
      return le.push(b), Tt(le);
    }).then(() => {
      le = [];
      for (const A of Ge)
        if (A.beforeEnter)
          if (Ft(A.beforeEnter))
            for (const M of A.beforeEnter)
              le.push(ts(M, U, re));
          else
            le.push(ts(A.beforeEnter, U, re));
      return le.push(b), Tt(le);
    }).then(() => (U.matched.forEach((A) => A.enterCallbacks = {}), le = sl(Ge, "beforeRouteEnter", U, re, O), le.push(b), Tt(le))).then(() => {
      le = [];
      for (const A of i.list())
        le.push(ts(A, U, re));
      return le.push(b), Tt(le);
    }).catch((A) => Ln(
      A,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? A : Promise.reject(A));
  }
  function R(U, re, le) {
    a.list().forEach((fe) => O(() => fe(U, re, le)));
  }
  function w(U, re, le, fe, De) {
    const Ge = g(U, re);
    if (Ge)
      return Ge;
    const b = re === Gn, A = Bn ? history.state : {};
    le && (fe || b ? o.replace(U.fullPath, Be({
      scroll: b && A && A.scroll
    }, De)) : o.push(U.fullPath, De)), c.value = U, Re(U, re, le, b), Oe();
  }
  let x;
  function ee() {
    x || (x = o.listen((U, re, le) => {
      if (!ft.listening)
        return;
      const fe = y(U), De = C(fe);
      if (De) {
        D(Be(De, { replace: !0, force: !0 }), fe).catch(gr);
        return;
      }
      f = fe;
      const Ge = c.value;
      Bn && Ww(Rf(Ge.fullPath, le.delta), Sa()), S(fe, Ge).catch((b) => Ln(
        b,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? b : Ln(
        b,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (D(
        Be(E(b.to), {
          force: !0
        }),
        fe
        // avoid an uncaught rejection, let push call triggerError
      ).then((A) => {
        Ln(
          A,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !le.delta && le.type === Pr.pop && o.go(-1, !1);
      }).catch(gr), Promise.reject()) : (le.delta && o.go(-le.delta, !1), $(b, fe, Ge))).then((b) => {
        b = b || w(
          // after navigation, all matched components are resolved
          fe,
          Ge,
          !1
        ), b && (le.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Ln(
          b,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-le.delta, !1) : le.type === Pr.pop && Ln(
          b,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), R(fe, Ge, b);
      }).catch(gr);
    }));
  }
  let ne = Zo(), V = Zo(), L;
  function $(U, re, le) {
    Oe(U);
    const fe = V.list();
    return fe.length ? fe.forEach((De) => De(U, re, le)) : (Se.NODE_ENV !== "production" && ke("uncaught error during route navigation:"), console.error(U)), Promise.reject(U);
  }
  function J() {
    return L && c.value !== Gn ? Promise.resolve() : new Promise((U, re) => {
      ne.add([U, re]);
    });
  }
  function Oe(U) {
    return L || (L = !U, ee(), ne.list().forEach(([re, le]) => U ? le(U) : re()), ne.reset()), U;
  }
  function Re(U, re, le, fe) {
    const { scrollBehavior: De } = e;
    if (!Bn || !De)
      return Promise.resolve();
    const Ge = !le && Kw(Rf(U.fullPath, 0)) || (fe || !le) && history.state && history.state.scroll || null;
    return wo().then(() => De(U, re, Ge)).then((b) => b && $w(b)).catch((b) => $(b, U, re));
  }
  const Ae = (U) => o.go(U);
  let Ne;
  const nt = /* @__PURE__ */ new Set(), ft = {
    currentRoute: c,
    listening: !0,
    addRoute: p,
    removeRoute: h,
    clearRoutes: t.clearRoutes,
    hasRoute: _,
    getRoutes: v,
    resolve: y,
    options: e,
    push: T,
    replace: I,
    go: Ae,
    back: () => Ae(-1),
    forward: () => Ae(1),
    beforeEach: r.add,
    beforeResolve: i.add,
    afterEach: a.add,
    onError: V.add,
    isReady: J,
    install(U) {
      const re = this;
      U.component("RouterLink", AA), U.component("RouterView", TA), U.config.globalProperties.$router = re, Object.defineProperty(U.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ae(c)
      }), Bn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ne && c.value === Gn && (Ne = !0, T(o.location).catch((De) => {
        Se.NODE_ENV !== "production" && ke("Unexpected error when starting the router:", De);
      }));
      const le = {};
      for (const De in Gn)
        Object.defineProperty(le, De, {
          get: () => c.value[De],
          enumerable: !0
        });
      U.provide(Qc, re), U.provide(Jc, vh(le)), U.provide(nc, c);
      const fe = U.unmount;
      nt.add(U), U.unmount = function() {
        nt.delete(U), nt.size < 1 && (f = Gn, x && x(), x = null, c.value = Gn, Ne = !1, L = !1), fe();
      }, Se.NODE_ENV !== "production" && Bn && xA(U, re, t);
    }
  };
  function Tt(U) {
    return U.reduce((re, le) => re.then(() => O(le)), Promise.resolve());
  }
  return ft;
}
function UA(e, t) {
  const n = [], s = [], o = [], r = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < r; i++) {
    const a = t.matched[i];
    a && (e.matched.find((f) => ls(f, a)) ? s.push(a) : n.push(a));
    const c = e.matched[i];
    c && (t.matched.find((f) => ls(f, c)) || o.push(c));
  }
  return [n, s, o];
}
function Lg(e) {
  return _t(Jc);
}
const HA = { class: "nav nav-tabs mb-4" }, $A = { class: "nav-item" }, WA = { class: "nav-item" }, KA = { class: "nav-item" }, zA = { class: "nav-item" }, qA = { class: "nav-item" }, YA = /* @__PURE__ */ Te({
  __name: "NavigationMenu",
  setup(e) {
    const t = Lg();
    return (n, s) => {
      const o = Je("router-link");
      return N(), P("ul", HA, [
        l("li", $A, [
          ce(o, {
            to: "/",
            class: pe(["nav-link", { active: ae(t).name === "home" }]),
            "aria-current": ae(t).name === "home" ? "page" : void 0
          }, {
            default: be(() => s[0] || (s[0] = [
              l("i", { class: "fas fa-home me-2" }, null, -1),
              Z(" Home ")
            ])),
            _: 1,
            __: [0]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", WA, [
          ce(o, {
            to: "/setup",
            class: pe(["nav-link", { active: ae(t).name === "setup" }]),
            "aria-current": ae(t).name === "setup" ? "page" : void 0
          }, {
            default: be(() => s[1] || (s[1] = [
              l("i", { class: "fas fa-cogs me-2" }, null, -1),
              Z(" Setup ")
            ])),
            _: 1,
            __: [1]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", KA, [
          ce(o, {
            to: "/monitor",
            class: pe(["nav-link", { active: ae(t).name === "monitor" }]),
            "aria-current": ae(t).name === "monitor" ? "page" : void 0
          }, {
            default: be(() => s[2] || (s[2] = [
              l("i", { class: "fas fa-search me-2" }, null, -1),
              Z(" Monitor ")
            ])),
            _: 1,
            __: [2]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", zA, [
          ce(o, {
            to: "/tasks",
            class: pe(["nav-link", { active: ae(t).name === "tasks" }]),
            "aria-current": ae(t).name === "tasks" ? "page" : void 0
          }, {
            default: be(() => s[3] || (s[3] = [
              l("i", { class: "fas fa-tasks me-2" }, null, -1),
              Z(" Tasks ")
            ])),
            _: 1,
            __: [3]
          }, 8, ["class", "aria-current"])
        ]),
        l("li", qA, [
          ce(o, {
            to: "/archives",
            class: pe(["nav-link", { active: ae(t).name === "archives" }]),
            "aria-current": ae(t).name === "archives" ? "page" : void 0
          }, {
            default: be(() => s[4] || (s[4] = [
              l("i", { class: "fas fa-archive me-2" }, null, -1),
              Z(" Archives ")
            ])),
            _: 1,
            __: [4]
          }, 8, ["class", "aria-current"])
        ])
      ]);
    };
  }
}), Qs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, XA = /* @__PURE__ */ Qs(YA, [["__scopeId", "data-v-18016484"]]), GA = /* @__PURE__ */ Te({
  __name: "MainLayout",
  setup(e) {
    return (t, n) => {
      const s = Je("router-view");
      return N(), P("div", null, [
        l("main", null, [
          ce(XA),
          ce(s)
        ])
      ]);
    };
  }
}), QA = /* @__PURE__ */ Qs(GA, [["__scopeId", "data-v-a42a7003"]]);
function Fg(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: JA } = Object.prototype, { getPrototypeOf: Zc } = Object, { iterator: Oa, toStringTag: Bg } = Symbol, Ca = /* @__PURE__ */ ((e) => (t) => {
  const n = JA.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), dn = (e) => (e = e.toLowerCase(), (t) => Ca(t) === e), Ta = (e) => (t) => typeof t === e, { isArray: Ho } = Array, Vr = Ta("undefined");
function ZA(e) {
  return e !== null && !Vr(e) && e.constructor !== null && !Vr(e.constructor) && Rt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const jg = dn("ArrayBuffer");
function eS(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && jg(e.buffer), t;
}
const tS = Ta("string"), Rt = Ta("function"), Ug = Ta("number"), Na = (e) => e !== null && typeof e == "object", nS = (e) => e === !0 || e === !1, ki = (e) => {
  if (Ca(e) !== "object")
    return !1;
  const t = Zc(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Bg in e) && !(Oa in e);
}, sS = dn("Date"), oS = dn("File"), rS = dn("Blob"), iS = dn("FileList"), aS = (e) => Na(e) && Rt(e.pipe), lS = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Rt(e.append) && ((t = Ca(e)) === "formdata" || // detect form-data instance
  t === "object" && Rt(e.toString) && e.toString() === "[object FormData]"));
}, cS = dn("URLSearchParams"), [uS, dS, fS, pS] = ["ReadableStream", "Request", "Response", "Headers"].map(dn), hS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function qr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, o;
  if (typeof e != "object" && (e = [e]), Ho(e))
    for (s = 0, o = e.length; s < o; s++)
      t.call(null, e[s], s, e);
  else {
    const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = r.length;
    let a;
    for (s = 0; s < i; s++)
      a = r[s], t.call(null, e[a], a, e);
  }
}
function Hg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, o;
  for (; s-- > 0; )
    if (o = n[s], t === o.toLowerCase())
      return o;
  return null;
}
const Ds = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, $g = (e) => !Vr(e) && e !== Ds;
function oc() {
  const { caseless: e } = $g(this) && this || {}, t = {}, n = (s, o) => {
    const r = e && Hg(t, o) || o;
    ki(t[r]) && ki(s) ? t[r] = oc(t[r], s) : ki(s) ? t[r] = oc({}, s) : Ho(s) ? t[r] = s.slice() : t[r] = s;
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && qr(arguments[s], n);
  return t;
}
const mS = (e, t, n, { allOwnKeys: s } = {}) => (qr(t, (o, r) => {
  n && Rt(o) ? e[r] = Fg(o, n) : e[r] = o;
}, { allOwnKeys: s }), e), gS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), vS = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, _S = (e, t, n, s) => {
  let o, r, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), r = o.length; r-- > 0; )
      i = o[r], (!s || s(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Zc(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, yS = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, bS = (e) => {
  if (!e) return null;
  if (Ho(e)) return e;
  let t = e.length;
  if (!Ug(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ES = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Zc(Uint8Array)), wS = (e, t) => {
  const s = (e && e[Oa]).call(e);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const r = o.value;
    t.call(e, r[0], r[1]);
  }
}, AS = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, SS = dn("HTMLFormElement"), OS = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, o) {
    return s.toUpperCase() + o;
  }
), qf = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), CS = dn("RegExp"), Wg = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  qr(n, (o, r) => {
    let i;
    (i = t(o, r, e)) !== !1 && (s[r] = i || o);
  }), Object.defineProperties(e, s);
}, TS = (e) => {
  Wg(e, (t, n) => {
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
}, NS = (e, t) => {
  const n = {}, s = (o) => {
    o.forEach((r) => {
      n[r] = !0;
    });
  };
  return Ho(e) ? s(e) : s(String(e).split(t)), n;
}, DS = () => {
}, xS = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function kS(e) {
  return !!(e && Rt(e.append) && e[Bg] === "FormData" && e[Oa]);
}
const RS = (e) => {
  const t = new Array(10), n = (s, o) => {
    if (Na(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[o] = s;
        const r = Ho(s) ? [] : {};
        return qr(s, (i, a) => {
          const c = n(i, o + 1);
          !Vr(c) && (r[a] = c);
        }), t[o] = void 0, r;
      }
    }
    return s;
  };
  return n(e, 0);
}, IS = dn("AsyncFunction"), PS = (e) => e && (Na(e) || Rt(e)) && Rt(e.then) && Rt(e.catch), Kg = ((e, t) => e ? setImmediate : t ? ((n, s) => (Ds.addEventListener("message", ({ source: o, data: r }) => {
  o === Ds && r === n && s.length && s.shift()();
}, !1), (o) => {
  s.push(o), Ds.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Rt(Ds.postMessage)
), VS = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ds) : typeof process < "u" && process.nextTick || Kg, MS = (e) => e != null && Rt(e[Oa]), B = {
  isArray: Ho,
  isArrayBuffer: jg,
  isBuffer: ZA,
  isFormData: lS,
  isArrayBufferView: eS,
  isString: tS,
  isNumber: Ug,
  isBoolean: nS,
  isObject: Na,
  isPlainObject: ki,
  isReadableStream: uS,
  isRequest: dS,
  isResponse: fS,
  isHeaders: pS,
  isUndefined: Vr,
  isDate: sS,
  isFile: oS,
  isBlob: rS,
  isRegExp: CS,
  isFunction: Rt,
  isStream: aS,
  isURLSearchParams: cS,
  isTypedArray: ES,
  isFileList: iS,
  forEach: qr,
  merge: oc,
  extend: mS,
  trim: hS,
  stripBOM: gS,
  inherits: vS,
  toFlatObject: _S,
  kindOf: Ca,
  kindOfTest: dn,
  endsWith: yS,
  toArray: bS,
  forEachEntry: wS,
  matchAll: AS,
  isHTMLForm: SS,
  hasOwnProperty: qf,
  hasOwnProp: qf,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Wg,
  freezeMethods: TS,
  toObjectSet: NS,
  toCamelCase: OS,
  noop: DS,
  toFiniteNumber: xS,
  findKey: Hg,
  global: Ds,
  isContextDefined: $g,
  isSpecCompliantForm: kS,
  toJSONObject: RS,
  isAsyncFn: IS,
  isThenable: PS,
  setImmediate: Kg,
  asap: VS,
  isIterable: MS
};
function Ce(e, t, n, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), o && (this.response = o, this.status = o.status ? o.status : null);
}
B.inherits(Ce, Error, {
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
const zg = Ce.prototype, qg = {};
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
  qg[e] = { value: e };
});
Object.defineProperties(Ce, qg);
Object.defineProperty(zg, "isAxiosError", { value: !0 });
Ce.from = (e, t, n, s, o, r) => {
  const i = Object.create(zg);
  return B.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Ce.call(i, e.message, t, n, s, o), i.cause = e, i.name = e.name, r && Object.assign(i, r), i;
};
const LS = null;
function rc(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function Yg(e) {
  return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Yf(e, t, n) {
  return e ? e.concat(t).map(function(o, r) {
    return o = Yg(o), !n && r ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function FS(e) {
  return B.isArray(e) && !e.some(rc);
}
const BS = B.toFlatObject(B, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Da(e, t, n) {
  if (!B.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = B.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, _) {
    return !B.isUndefined(_[v]);
  });
  const s = n.metaTokens, o = n.visitor || u, r = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && B.isSpecCompliantForm(t);
  if (!B.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(h) {
    if (h === null) return "";
    if (B.isDate(h))
      return h.toISOString();
    if (B.isBoolean(h))
      return h.toString();
    if (!c && B.isBlob(h))
      throw new Ce("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(h) || B.isTypedArray(h) ? c && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, v, _) {
    let y = h;
    if (h && !_ && typeof h == "object") {
      if (B.endsWith(v, "{}"))
        v = s ? v : v.slice(0, -2), h = JSON.stringify(h);
      else if (B.isArray(h) && FS(h) || (B.isFileList(h) || B.endsWith(v, "[]")) && (y = B.toArray(h)))
        return v = Yg(v), y.forEach(function(g, T) {
          !(B.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Yf([v], T, r) : i === null ? v : v + "[]",
            f(g)
          );
        }), !1;
    }
    return rc(h) ? !0 : (t.append(Yf(_, v, r), f(h)), !1);
  }
  const d = [], m = Object.assign(BS, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: rc
  });
  function p(h, v) {
    if (!B.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(h), B.forEach(h, function(y, E) {
        (!(B.isUndefined(y) || y === null) && o.call(
          t,
          y,
          B.isString(E) ? E.trim() : E,
          v,
          m
        )) === !0 && p(y, v ? v.concat(E) : [E]);
      }), d.pop();
    }
  }
  if (!B.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
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
function eu(e, t) {
  this._pairs = [], e && Da(e, this, t);
}
const Xg = eu.prototype;
Xg.append = function(t, n) {
  this._pairs.push([t, n]);
};
Xg.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, Xf);
  } : Xf;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function jS(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Gg(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || jS;
  B.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let r;
  if (o ? r = o(t, n) : r = B.isURLSearchParams(t) ? t.toString() : new eu(t, n).toString(s), r) {
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
const Qg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, US = typeof URLSearchParams < "u" ? URLSearchParams : eu, HS = typeof FormData < "u" ? FormData : null, $S = typeof Blob < "u" ? Blob : null, WS = {
  isBrowser: !0,
  classes: {
    URLSearchParams: US,
    FormData: HS,
    Blob: $S
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, tu = typeof window < "u" && typeof document < "u", ic = typeof navigator == "object" && navigator || void 0, KS = tu && (!ic || ["ReactNative", "NativeScript", "NS"].indexOf(ic.product) < 0), zS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", qS = tu && window.location.href || "http://localhost", YS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: tu,
  hasStandardBrowserEnv: KS,
  hasStandardBrowserWebWorkerEnv: zS,
  navigator: ic,
  origin: qS
}, Symbol.toStringTag, { value: "Module" })), gt = {
  ...YS,
  ...WS
};
function XS(e, t) {
  return Da(e, new gt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, o, r) {
      return gt.isNode && B.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function GS(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function QS(e) {
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
    const a = Number.isFinite(+i), c = r >= n.length;
    return i = !i && B.isArray(o) ? o.length : i, c ? (B.hasOwnProp(o, i) ? o[i] = [o[i], s] : o[i] = s, !a) : ((!o[i] || !B.isObject(o[i])) && (o[i] = []), t(n, s, o[i], r) && B.isArray(o[i]) && (o[i] = QS(o[i])), !a);
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const n = {};
    return B.forEachEntry(e, (s, o) => {
      t(GS(s), o, n, 0);
    }), n;
  }
  return null;
}
function JS(e, t, n) {
  if (B.isString(e))
    try {
      return (t || JSON.parse)(e), B.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const Yr = {
  transitional: Qg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", o = s.indexOf("application/json") > -1, r = B.isObject(t);
    if (r && B.isHTMLForm(t) && (t = new FormData(t)), B.isFormData(t))
      return o ? JSON.stringify(Jg(t)) : t;
    if (B.isArrayBuffer(t) || B.isBuffer(t) || B.isStream(t) || B.isFile(t) || B.isBlob(t) || B.isReadableStream(t))
      return t;
    if (B.isArrayBufferView(t))
      return t.buffer;
    if (B.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (r) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return XS(t, this.formSerializer).toString();
      if ((a = B.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Da(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return r || o ? (n.setContentType("application/json", !1), JS(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Yr.transitional, s = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (B.isResponse(t) || B.isReadableStream(t))
      return t;
    if (t && B.isString(t) && (s && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? Ce.from(a, Ce.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
B.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Yr.headers[e] = {};
});
const ZS = B.toObjectSet([
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
]), eO = (e) => {
  const t = {};
  let n, s, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), s = i.substring(o + 1).trim(), !(!n || t[n] && ZS[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Qf = Symbol("internals");
function tr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ri(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(Ri) : String(e);
}
function tO(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const nO = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function sO(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function oO(e, t) {
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
let It = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const o = this;
    function r(a, c, f) {
      const u = tr(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = B.findKey(o, u);
      (!d || o[d] === void 0 || f === !0 || f === void 0 && o[d] !== !1) && (o[d || c] = Ri(a));
    }
    const i = (a, c) => B.forEach(a, (f, u) => r(f, u, c));
    if (B.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (B.isString(t) && (t = t.trim()) && !nO(t))
      i(eO(t), n);
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
    if (t = tr(t), t) {
      const s = B.findKey(this, t);
      if (s) {
        const o = this[s];
        if (!n)
          return o;
        if (n === !0)
          return tO(o);
        if (B.isFunction(n))
          return n.call(this, o, s);
        if (B.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = tr(t), t) {
      const s = B.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || ol(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let o = !1;
    function r(i) {
      if (i = tr(i), i) {
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
        n[i] = Ri(o), delete n[r];
        return;
      }
      const a = t ? sO(r) : String(r).trim();
      a !== r && delete n[r], n[a] = Ri(o), s[a] = !0;
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
      const a = tr(i);
      s[a] || (oO(o, i), s[a] = !0);
    }
    return B.isArray(t) ? t.forEach(r) : r(t), this;
  }
};
It.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
B.reduceDescriptors(It.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
B.freezeMethods(It);
function rl(e, t) {
  const n = this || Yr, s = t || n, o = It.from(s.headers);
  let r = s.data;
  return B.forEach(e, function(a) {
    r = a.call(n, r, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), r;
}
function Zg(e) {
  return !!(e && e.__CANCEL__);
}
function $o(e, t, n) {
  Ce.call(this, e ?? "canceled", Ce.ERR_CANCELED, t, n), this.name = "CanceledError";
}
B.inherits($o, Ce, {
  __CANCEL__: !0
});
function ev(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new Ce(
    "Request failed with status code " + n.status,
    [Ce.ERR_BAD_REQUEST, Ce.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function rO(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function iO(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let o = 0, r = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const f = Date.now(), u = s[r];
    i || (i = f), n[o] = c, s[o] = f;
    let d = r, m = 0;
    for (; d !== o; )
      m += n[d++], d = d % e;
    if (o = (o + 1) % e, o === r && (r = (r + 1) % e), f - i < t)
      return;
    const p = u && f - u;
    return p ? Math.round(m * 1e3 / p) : void 0;
  };
}
function aO(e, t) {
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
const ta = (e, t, n = 3) => {
  let s = 0;
  const o = iO(50, 250);
  return aO((r) => {
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
}, Zf = (e) => (...t) => B.asap(() => e(...t)), lO = gt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, gt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(gt.origin),
  gt.navigator && /(msie|trident)/i.test(gt.navigator.userAgent)
) : () => !0, cO = gt.hasStandardBrowserEnv ? (
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
function uO(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function dO(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function tv(e, t, n) {
  let s = !uO(t);
  return e && (s || n == !1) ? dO(e, t) : t;
}
const ep = (e) => e instanceof It ? { ...e } : e;
function qs(e, t) {
  t = t || {};
  const n = {};
  function s(f, u, d, m) {
    return B.isPlainObject(f) && B.isPlainObject(u) ? B.merge.call({ caseless: m }, f, u) : B.isPlainObject(u) ? B.merge({}, u) : B.isArray(u) ? u.slice() : u;
  }
  function o(f, u, d, m) {
    if (B.isUndefined(u)) {
      if (!B.isUndefined(f))
        return s(void 0, f, d, m);
    } else return s(f, u, d, m);
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
    const d = c[u] || o, m = d(e[u], t[u], u);
    B.isUndefined(m) && d !== a || (n[u] = m);
  }), n;
}
const nv = (e) => {
  const t = qs({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: r, headers: i, auth: a } = t;
  t.headers = i = It.from(i), t.url = Gg(tv(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (B.isFormData(n)) {
    if (gt.hasStandardBrowserEnv || gt.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [f, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...u].join("; "));
    }
  }
  if (gt.hasStandardBrowserEnv && (s && B.isFunction(s) && (s = s(t)), s || s !== !1 && lO(t.url))) {
    const f = o && r && cO.read(r);
    f && i.set(o, f);
  }
  return t;
}, fO = typeof XMLHttpRequest < "u", pO = fO && function(e) {
  return new Promise(function(n, s) {
    const o = nv(e);
    let r = o.data;
    const i = It.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: f } = o, u, d, m, p, h;
    function v() {
      p && p(), h && h(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let _ = new XMLHttpRequest();
    _.open(o.method.toUpperCase(), o.url, !0), _.timeout = o.timeout;
    function y() {
      if (!_)
        return;
      const g = It.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), I = {
        data: !a || a === "text" || a === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: g,
        config: e,
        request: _
      };
      ev(function(D) {
        n(D), v();
      }, function(D) {
        s(D), v();
      }, I), _ = null;
    }
    "onloadend" in _ ? _.onloadend = y : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, _.onabort = function() {
      _ && (s(new Ce("Request aborted", Ce.ECONNABORTED, e, _)), _ = null);
    }, _.onerror = function() {
      s(new Ce("Network Error", Ce.ERR_NETWORK, e, _)), _ = null;
    }, _.ontimeout = function() {
      let T = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const I = o.transitional || Qg;
      o.timeoutErrorMessage && (T = o.timeoutErrorMessage), s(new Ce(
        T,
        I.clarifyTimeoutError ? Ce.ETIMEDOUT : Ce.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, r === void 0 && i.setContentType(null), "setRequestHeader" in _ && B.forEach(i.toJSON(), function(T, I) {
      _.setRequestHeader(I, T);
    }), B.isUndefined(o.withCredentials) || (_.withCredentials = !!o.withCredentials), a && a !== "json" && (_.responseType = o.responseType), f && ([m, h] = ta(f, !0), _.addEventListener("progress", m)), c && _.upload && ([d, p] = ta(c), _.upload.addEventListener("progress", d), _.upload.addEventListener("loadend", p)), (o.cancelToken || o.signal) && (u = (g) => {
      _ && (s(!g || g.type ? new $o(null, e, _) : g), _.abort(), _ = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const E = rO(o.url);
    if (E && gt.protocols.indexOf(E) === -1) {
      s(new Ce("Unsupported protocol " + E + ":", Ce.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(r || null);
  });
}, hO = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let s = new AbortController(), o;
    const r = function(f) {
      if (!o) {
        o = !0, a();
        const u = f instanceof Error ? f : this.reason;
        s.abort(u instanceof Ce ? u : new $o(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, r(new Ce(`timeout ${t} of ms exceeded`, Ce.ETIMEDOUT));
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
}, mO = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, o;
  for (; s < n; )
    o = s + t, yield e.slice(s, o), s = o;
}, gO = async function* (e, t) {
  for await (const n of vO(e))
    yield* mO(n, t);
}, vO = async function* (e) {
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
  const o = gO(e, t);
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
          let m = r += d;
          n(m);
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
}, xa = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", sv = xa && typeof ReadableStream == "function", _O = xa && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), ov = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, yO = sv && ov(() => {
  let e = !1;
  const t = new Request(gt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), np = 64 * 1024, ac = sv && ov(() => B.isReadableStream(new Response("").body)), na = {
  stream: ac && ((e) => e.body)
};
xa && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !na[t] && (na[t] = B.isFunction(e[t]) ? (n) => n[t]() : (n, s) => {
      throw new Ce(`Response type '${t}' is not supported`, Ce.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const bO = async (e) => {
  if (e == null)
    return 0;
  if (B.isBlob(e))
    return e.size;
  if (B.isSpecCompliantForm(e))
    return (await new Request(gt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (B.isArrayBufferView(e) || B.isArrayBuffer(e))
    return e.byteLength;
  if (B.isURLSearchParams(e) && (e = e + ""), B.isString(e))
    return (await _O(e)).byteLength;
}, EO = async (e, t) => {
  const n = B.toFiniteNumber(e.getContentLength());
  return n ?? bO(t);
}, wO = xa && (async (e) => {
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
    fetchOptions: m
  } = nv(e);
  f = f ? (f + "").toLowerCase() : "text";
  let p = hO([o, r && r.toAbortSignal()], i), h;
  const v = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let _;
  try {
    if (c && yO && n !== "get" && n !== "head" && (_ = await EO(u, s)) !== 0) {
      let I = new Request(t, {
        method: "POST",
        body: s,
        duplex: "half"
      }), C;
      if (B.isFormData(s) && (C = I.headers.get("content-type")) && u.setContentType(C), I.body) {
        const [D, F] = Jf(
          _,
          ta(Zf(c))
        );
        s = tp(I.body, np, D, F);
      }
    }
    B.isString(d) || (d = d ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    h = new Request(t, {
      ...m,
      signal: p,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: s,
      duplex: "half",
      credentials: y ? d : void 0
    });
    let E = await fetch(h, m);
    const g = ac && (f === "stream" || f === "response");
    if (ac && (a || g && v)) {
      const I = {};
      ["status", "statusText", "headers"].forEach((O) => {
        I[O] = E[O];
      });
      const C = B.toFiniteNumber(E.headers.get("content-length")), [D, F] = a && Jf(
        C,
        ta(Zf(a), !0)
      ) || [];
      E = new Response(
        tp(E.body, np, D, () => {
          F && F(), v && v();
        }),
        I
      );
    }
    f = f || "text";
    let T = await na[B.findKey(na, f) || "text"](E, e);
    return !g && v && v(), await new Promise((I, C) => {
      ev(I, C, {
        data: T,
        headers: It.from(E.headers),
        status: E.status,
        statusText: E.statusText,
        config: e,
        request: h
      });
    });
  } catch (y) {
    throw v && v(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new Ce("Network Error", Ce.ERR_NETWORK, e, h),
      {
        cause: y.cause || y
      }
    ) : Ce.from(y, y && y.code, e, h);
  }
}), lc = {
  http: LS,
  xhr: pO,
  fetch: wO
};
B.forEach(lc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const sp = (e) => `- ${e}`, AO = (e) => B.isFunction(e) || e === null || e === !1, rv = {
  getAdapter: (e) => {
    e = B.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, s;
    const o = {};
    for (let r = 0; r < t; r++) {
      n = e[r];
      let i;
      if (s = n, !AO(n) && (s = lc[(i = String(n)).toLowerCase()], s === void 0))
        throw new Ce(`Unknown adapter '${i}'`);
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
      throw new Ce(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: lc
};
function il(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new $o(null, e);
}
function op(e) {
  return il(e), e.headers = It.from(e.headers), e.data = rl.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), rv.getAdapter(e.adapter || Yr.adapter)(e).then(function(s) {
    return il(e), s.data = rl.call(
      e,
      e.transformResponse,
      s
    ), s.headers = It.from(s.headers), s;
  }, function(s) {
    return Zg(s) || (il(e), s && s.response && (s.response.data = rl.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = It.from(s.response.headers))), Promise.reject(s);
  });
}
const iv = "1.10.0", ka = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ka[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const rp = {};
ka.transitional = function(t, n, s) {
  function o(r, i) {
    return "[Axios v" + iv + "] Transitional option '" + r + "'" + i + (s ? ". " + s : "");
  }
  return (r, i, a) => {
    if (t === !1)
      throw new Ce(
        o(i, " has been removed" + (n ? " in " + n : "")),
        Ce.ERR_DEPRECATED
      );
    return n && !rp[i] && (rp[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(r, i, a) : !0;
  };
};
ka.spelling = function(t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function SO(e, t, n) {
  if (typeof e != "object")
    throw new Ce("options must be an object", Ce.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let o = s.length;
  for (; o-- > 0; ) {
    const r = s[o], i = t[r];
    if (i) {
      const a = e[r], c = a === void 0 || i(a, r, e);
      if (c !== !0)
        throw new Ce("option " + r + " must be " + c, Ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Ce("Unknown option " + r, Ce.ERR_BAD_OPTION);
  }
}
const Ii = {
  assertOptions: SO,
  validators: ka
}, _n = Ii.validators;
let Fs = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = qs(this.defaults, n);
    const { transitional: s, paramsSerializer: o, headers: r } = n;
    s !== void 0 && Ii.assertOptions(s, {
      silentJSONParsing: _n.transitional(_n.boolean),
      forcedJSONParsing: _n.transitional(_n.boolean),
      clarifyTimeoutError: _n.transitional(_n.boolean)
    }, !1), o != null && (B.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Ii.assertOptions(o, {
      encode: _n.function,
      serialize: _n.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ii.assertOptions(n, {
      baseUrl: _n.spelling("baseURL"),
      withXsrfToken: _n.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = r && B.merge(
      r.common,
      r[n.method]
    );
    r && B.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete r[h];
      }
    ), n.headers = It.concat(i, r);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (c = c && v.synchronous, a.unshift(v.fulfilled, v.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(v) {
      f.push(v.fulfilled, v.rejected);
    });
    let u, d = 0, m;
    if (!c) {
      const h = [op.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, f), m = h.length, u = Promise.resolve(n); d < m; )
        u = u.then(h[d++], h[d++]);
      return u;
    }
    m = a.length;
    let p = n;
    for (d = 0; d < m; ) {
      const h = a[d++], v = a[d++];
      try {
        p = h(p);
      } catch (_) {
        v.call(this, _);
        break;
      }
    }
    try {
      u = op.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, m = f.length; d < m; )
      u = u.then(f[d++], f[d++]);
    return u;
  }
  getUri(t) {
    t = qs(this.defaults, t);
    const n = tv(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Gg(n, t.params, t.paramsSerializer);
  }
};
B.forEach(["delete", "get", "head", "options"], function(t) {
  Fs.prototype[t] = function(n, s) {
    return this.request(qs(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
B.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(r, i, a) {
      return this.request(qs(a || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: i
      }));
    };
  }
  Fs.prototype[t] = n(), Fs.prototype[t + "Form"] = n(!0);
});
let OO = class av {
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
      s.reason || (s.reason = new $o(r, i, a), n(s.reason));
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
      token: new av(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function CO(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function TO(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const cc = {
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
Object.entries(cc).forEach(([e, t]) => {
  cc[t] = e;
});
function lv(e) {
  const t = new Fs(e), n = Fg(Fs.prototype.request, t);
  return B.extend(n, Fs.prototype, t, { allOwnKeys: !0 }), B.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return lv(qs(e, o));
  }, n;
}
const it = lv(Yr);
it.Axios = Fs;
it.CanceledError = $o;
it.CancelToken = OO;
it.isCancel = Zg;
it.VERSION = iv;
it.toFormData = Da;
it.AxiosError = Ce;
it.Cancel = it.CanceledError;
it.all = function(t) {
  return Promise.all(t);
};
it.spread = CO;
it.isAxiosError = TO;
it.mergeConfig = qs;
it.AxiosHeaders = It;
it.formToJSON = (e) => Jg(B.isHTMLForm(e) ? new FormData(e) : e);
it.getAdapter = rv.getAdapter;
it.HttpStatusCode = cc;
it.default = it;
const {
  Axios: zF,
  AxiosError: qF,
  CanceledError: YF,
  isCancel: XF,
  CancelToken: GF,
  VERSION: QF,
  all: JF,
  Cancel: ZF,
  isAxiosError: e3,
  spread: t3,
  toFormData: n3,
  AxiosHeaders: s3,
  HttpStatusCode: o3,
  formToJSON: r3,
  getAdapter: i3,
  mergeConfig: a3
} = it, NO = "fhir_snapshot", DO = "api", xO = () => {
  let n = {
    pid: new URLSearchParams(location.search).get("pid"),
    page: DO,
    // content: "externalModule",
    type: "module",
    prefix: NO
  };
  return window.redcap_csrf_token && (n.redcap_csrf_token = window.redcap_csrf_token), n;
}, kO = () => {
  const e = it.create({
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
    const n = xO();
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
}, Ue = kO(), Ye = {
  getProjectSettings() {
    const e = { route: "project-settings" };
    return Ue.get("", { params: e });
  },
  updateProjectSettings(e) {
    const t = { route: "project-settings" };
    return Ue.put("", e, { params: t });
  },
  listMrns(e, t) {
    const n = { route: "mrns" };
    return e && (n._page = e), t && (n._per_page = t), Ue.get("", { params: n });
  },
  addMrn(e) {
    const t = { route: "mrns" };
    return Ue.post("", { mrn: e }, { params: t });
  },
  removeMrn(e) {
    const t = { route: `mrns/${e}` };
    return Ue.delete("", { params: t, data: e });
  },
  triggerFetch(e, t) {
    const n = { route: "trigger-fetch" };
    return Ue.post("", { mrns: e, resources: t }, { params: n });
  },
  getFetchStatus() {
    const e = { route: "fetch-status" };
    return Ue.get("", { params: e });
  },
  createZipArchive(e) {
    const t = { route: "create-zip-archive" };
    return Ue.post("", { mrns: e }, { params: t });
  },
  downloadZip(e) {
    const t = { route: "download-zip", zip_id: e };
    return Ue.get("", { params: t, responseType: "blob" });
  },
  // Archive management API methods
  listArchives() {
    const e = { route: "archives" };
    return Ue.get("", { params: e });
  },
  createArchiveSelected(e, t) {
    const n = { route: "archives/selected" }, s = { mrns: e };
    return t && Object.assign(s, t), Ue.post("", s, { params: n });
  },
  createArchiveAll(e) {
    const t = { route: "archives/all" }, n = e || {};
    return Ue.post("", n, { params: t });
  },
  downloadArchive(e) {
    const t = { route: `archives/${e}/download` };
    return Ue.get("", { params: t, responseType: "blob" });
  },
  deleteArchive(e) {
    const t = { route: `archives/${e}` };
    return Ue.delete("", { params: t });
  },
  // Enhanced MRN and resource management
  getMrnResources(e) {
    const t = { route: `mrns/${e}/resources` };
    return Ue.get("", { params: t });
  },
  getProjectSummary() {
    const e = { route: "project-summary" };
    return Ue.get("", { params: e });
  },
  triggerFetchMrns(e, t) {
    const n = { route: "trigger-fetch" }, s = { mrns: e };
    return t && t.length > 0 && (s.resources = t), Ue.post("", s, { params: n });
  },
  performFullSync() {
    const e = { route: "perform-full-sync" };
    return Ue.post("", {}, { params: e });
  },
  retryFailedResource(e, t, n) {
    const s = { route: "retry-failed" };
    return Ue.post("", {
      mrn: e,
      resource_type: t,
      repeat_instance: n,
      bulk: !1
    }, { params: s });
  },
  bulkRetryFailed(e) {
    const t = { route: "retry-failed" }, n = { bulk: !0 };
    return e && (n.resource_type = e), Ue.post("", n, { params: t });
  },
  retryFailed(e) {
    const t = { route: "retry-failed" };
    return Ue.post("", e, { params: t });
  },
  // Task management API methods
  listTasks(e, t, n) {
    const s = { route: "tasks" };
    return e && (s.page = e), t && (s.limit = t), n && Object.assign(s, n), Ue.get("", { params: s });
  },
  getTaskDetails(e) {
    const t = { route: `tasks/${e}` };
    return Ue.get("", { params: t });
  },
  performTaskFullSync() {
    const e = { route: "tasks/full-sync" };
    return Ue.post("", {}, { params: e });
  },
  retryFailedResources(e) {
    const t = { route: "tasks/retry-failed" }, n = e ? { filters: e } : {};
    return Ue.post("", n, { params: t });
  },
  deleteTask(e) {
    const t = { route: `tasks/${e}` };
    return Ue.delete("", { params: t });
  },
  getQueueStatistics() {
    const e = { route: "tasks/stats" };
    return Ue.get("", { params: e });
  },
  cleanupCompletedTasks() {
    const e = { route: "tasks/cleanup" };
    return Ue.post("", {}, { params: e });
  },
  // Streaming archive API methods
  streamSelectedArchive(e, t) {
    const n = { route: "archives/stream/selected" }, s = { mrns: e, ...t };
    return Ue.post("", s, {
      params: n,
      responseType: "blob",
      timeout: 0
      // No timeout for streaming
    });
  },
  streamAllArchive(e) {
    const t = { route: "archives/stream/all" };
    return Ue.post("", e || {}, {
      params: t,
      responseType: "blob",
      timeout: 0
    });
  }
}, Xr = /* @__PURE__ */ ps("errors", () => {
  const e = G([]);
  return {
    errors: e,
    addError: (s, o) => {
      const r = RO(s);
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
function RO(e) {
  return e instanceof Error ? e : typeof e == "string" ? new Error(e) : typeof e == "object" && e !== null && "message" in e ? new Error(String(e.message)) : new Error("Unknown error");
}
var Ot = "top", Bt = "bottom", jt = "right", Ct = "left", Ra = "auto", Wo = [Ot, Bt, jt, Ct], Ys = "start", xo = "end", cv = "clippingParents", nu = "viewport", uo = "popper", uv = "reference", uc = /* @__PURE__ */ Wo.reduce(function(e, t) {
  return e.concat([t + "-" + Ys, t + "-" + xo]);
}, []), su = /* @__PURE__ */ [].concat(Wo, [Ra]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ys, t + "-" + xo]);
}, []), dv = "beforeRead", fv = "read", pv = "afterRead", hv = "beforeMain", mv = "main", gv = "afterMain", vv = "beforeWrite", _v = "write", yv = "afterWrite", bv = [dv, fv, pv, hv, mv, gv, vv, _v, yv];
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
function Xs(e) {
  var t = Ut(e).Element;
  return e instanceof t || e instanceof Element;
}
function qt(e) {
  var t = Ut(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ou(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ut(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function IO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var s = t.styles[n] || {}, o = t.attributes[n] || {}, r = t.elements[n];
    !qt(r) || !xn(r) || (Object.assign(r.style, s), Object.keys(o).forEach(function(i) {
      var a = o[i];
      a === !1 ? r.removeAttribute(i) : r.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function PO(e) {
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
const ru = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: IO,
  effect: PO,
  requires: ["computeStyles"]
};
function On(e) {
  return e.split("-")[0];
}
var Bs = Math.max, sa = Math.min, ko = Math.round;
function dc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ev() {
  return !/^((?!chrome|android).)*safari/i.test(dc());
}
function Ro(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var s = e.getBoundingClientRect(), o = 1, r = 1;
  t && qt(e) && (o = e.offsetWidth > 0 && ko(s.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && ko(s.height) / e.offsetHeight || 1);
  var i = Xs(e) ? Ut(e) : window, a = i.visualViewport, c = !Ev() && n, f = (s.left + (c && a ? a.offsetLeft : 0)) / o, u = (s.top + (c && a ? a.offsetTop : 0)) / r, d = s.width / o, m = s.height / r;
  return {
    width: d,
    height: m,
    top: u,
    right: f + d,
    bottom: u + m,
    left: f,
    x: f,
    y: u
  };
}
function iu(e) {
  var t = Ro(e), n = e.offsetWidth, s = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: s
  };
}
function wv(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ou(n)) {
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
function VO(e) {
  return ["table", "td", "th"].indexOf(xn(e)) >= 0;
}
function hs(e) {
  return ((Xs(e) ? e.ownerDocument : (
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
    (ou(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    hs(e)
  );
}
function ip(e) {
  return !qt(e) || // https://github.com/popperjs/popper-core/issues/837
  Kn(e).position === "fixed" ? null : e.offsetParent;
}
function MO(e) {
  var t = /firefox/i.test(dc()), n = /Trident/i.test(dc());
  if (n && qt(e)) {
    var s = Kn(e);
    if (s.position === "fixed")
      return null;
  }
  var o = Ia(e);
  for (ou(o) && (o = o.host); qt(o) && ["html", "body"].indexOf(xn(o)) < 0; ) {
    var r = Kn(o);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Gr(e) {
  for (var t = Ut(e), n = ip(e); n && VO(n) && Kn(n).position === "static"; )
    n = ip(n);
  return n && (xn(n) === "html" || xn(n) === "body" && Kn(n).position === "static") ? t : n || MO(e) || t;
}
function au(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function _r(e, t, n) {
  return Bs(e, sa(t, n));
}
function LO(e, t, n) {
  var s = _r(e, t, n);
  return s > n ? n : s;
}
function Av() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Sv(e) {
  return Object.assign({}, Av(), e);
}
function Ov(e, t) {
  return t.reduce(function(n, s) {
    return n[s] = e, n;
  }, {});
}
var FO = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Sv(typeof t != "number" ? t : Ov(t, Wo));
};
function BO(e) {
  var t, n = e.state, s = e.name, o = e.options, r = n.elements.arrow, i = n.modifiersData.popperOffsets, a = On(n.placement), c = au(a), f = [Ct, jt].indexOf(a) >= 0, u = f ? "height" : "width";
  if (!(!r || !i)) {
    var d = FO(o.padding, n), m = iu(r), p = c === "y" ? Ot : Ct, h = c === "y" ? Bt : jt, v = n.rects.reference[u] + n.rects.reference[c] - i[c] - n.rects.popper[u], _ = i[c] - n.rects.reference[c], y = Gr(r), E = y ? c === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, g = v / 2 - _ / 2, T = d[p], I = E - m[u] - d[h], C = E / 2 - m[u] / 2 + g, D = _r(T, C, I), F = c;
    n.modifiersData[s] = (t = {}, t[F] = D, t.centerOffset = D - C, t);
  }
}
function jO(e) {
  var t = e.state, n = e.options, s = n.element, o = s === void 0 ? "[data-popper-arrow]" : s;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || wv(t.elements.popper, o) && (t.elements.arrow = o));
}
const Cv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: BO,
  effect: jO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Io(e) {
  return e.split("-")[1];
}
var UO = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function HO(e, t) {
  var n = e.x, s = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ko(n * o) / o || 0,
    y: ko(s * o) / o || 0
  };
}
function ap(e) {
  var t, n = e.popper, s = e.popperRect, o = e.placement, r = e.variation, i = e.offsets, a = e.position, c = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, d = e.isFixed, m = i.x, p = m === void 0 ? 0 : m, h = i.y, v = h === void 0 ? 0 : h, _ = typeof u == "function" ? u({
    x: p,
    y: v
  }) : {
    x: p,
    y: v
  };
  p = _.x, v = _.y;
  var y = i.hasOwnProperty("x"), E = i.hasOwnProperty("y"), g = Ct, T = Ot, I = window;
  if (f) {
    var C = Gr(n), D = "clientHeight", F = "clientWidth";
    if (C === Ut(n) && (C = hs(n), Kn(C).position !== "static" && a === "absolute" && (D = "scrollHeight", F = "scrollWidth")), C = C, o === Ot || (o === Ct || o === jt) && r === xo) {
      T = Bt;
      var O = d && C === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[D]
      );
      v -= O - s.height, v *= c ? 1 : -1;
    }
    if (o === Ct || (o === Ot || o === Bt) && r === xo) {
      g = jt;
      var S = d && C === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[F]
      );
      p -= S - s.width, p *= c ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: a
  }, f && UO), w = u === !0 ? HO({
    x: p,
    y: v
  }, Ut(n)) : {
    x: p,
    y: v
  };
  if (p = w.x, v = w.y, c) {
    var x;
    return Object.assign({}, R, (x = {}, x[T] = E ? "0" : "", x[g] = y ? "0" : "", x.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)" : "translate3d(" + p + "px, " + v + "px, 0)", x));
  }
  return Object.assign({}, R, (t = {}, t[T] = E ? v + "px" : "", t[g] = y ? p + "px" : "", t.transform = "", t));
}
function $O(e) {
  var t = e.state, n = e.options, s = n.gpuAcceleration, o = s === void 0 ? !0 : s, r = n.adaptive, i = r === void 0 ? !0 : r, a = n.roundOffsets, c = a === void 0 ? !0 : a, f = {
    placement: On(t.placement),
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
const lu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: $O,
  data: {}
};
var ci = {
  passive: !0
};
function WO(e) {
  var t = e.state, n = e.instance, s = e.options, o = s.scroll, r = o === void 0 ? !0 : o, i = s.resize, a = i === void 0 ? !0 : i, c = Ut(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && f.forEach(function(u) {
    u.addEventListener("scroll", n.update, ci);
  }), a && c.addEventListener("resize", n.update, ci), function() {
    r && f.forEach(function(u) {
      u.removeEventListener("scroll", n.update, ci);
    }), a && c.removeEventListener("resize", n.update, ci);
  };
}
const cu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: WO,
  data: {}
};
var KO = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return KO[t];
  });
}
var zO = {
  start: "end",
  end: "start"
};
function lp(e) {
  return e.replace(/start|end/g, function(t) {
    return zO[t];
  });
}
function uu(e) {
  var t = Ut(e), n = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: s
  };
}
function du(e) {
  return Ro(hs(e)).left + uu(e).scrollLeft;
}
function qO(e, t) {
  var n = Ut(e), s = hs(e), o = n.visualViewport, r = s.clientWidth, i = s.clientHeight, a = 0, c = 0;
  if (o) {
    r = o.width, i = o.height;
    var f = Ev();
    (f || !f && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: r,
    height: i,
    x: a + du(e),
    y: c
  };
}
function YO(e) {
  var t, n = hs(e), s = uu(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, r = Bs(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Bs(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -s.scrollLeft + du(e), c = -s.scrollTop;
  return Kn(o || n).direction === "rtl" && (a += Bs(n.clientWidth, o ? o.clientWidth : 0) - r), {
    width: r,
    height: i,
    x: a,
    y: c
  };
}
function fu(e) {
  var t = Kn(e), n = t.overflow, s = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + s);
}
function Tv(e) {
  return ["html", "body", "#document"].indexOf(xn(e)) >= 0 ? e.ownerDocument.body : qt(e) && fu(e) ? e : Tv(Ia(e));
}
function yr(e, t) {
  var n;
  t === void 0 && (t = []);
  var s = Tv(e), o = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Ut(s), i = o ? [r].concat(r.visualViewport || [], fu(s) ? s : []) : s, a = t.concat(i);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(yr(Ia(i)))
  );
}
function fc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function XO(e, t) {
  var n = Ro(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function cp(e, t, n) {
  return t === nu ? fc(qO(e, n)) : Xs(t) ? XO(t, n) : fc(YO(hs(e)));
}
function GO(e) {
  var t = yr(Ia(e)), n = ["absolute", "fixed"].indexOf(Kn(e).position) >= 0, s = n && qt(e) ? Gr(e) : e;
  return Xs(s) ? t.filter(function(o) {
    return Xs(o) && wv(o, s) && xn(o) !== "body";
  }) : [];
}
function QO(e, t, n, s) {
  var o = t === "clippingParents" ? GO(e) : [].concat(t), r = [].concat(o, [n]), i = r[0], a = r.reduce(function(c, f) {
    var u = cp(e, f, s);
    return c.top = Bs(u.top, c.top), c.right = sa(u.right, c.right), c.bottom = sa(u.bottom, c.bottom), c.left = Bs(u.left, c.left), c;
  }, cp(e, i, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Nv(e) {
  var t = e.reference, n = e.element, s = e.placement, o = s ? On(s) : null, r = s ? Io(s) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, c;
  switch (o) {
    case Ot:
      c = {
        x: i,
        y: t.y - n.height
      };
      break;
    case Bt:
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
    case Ct:
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
  var f = o ? au(o) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (r) {
      case Ys:
        c[f] = c[f] - (t[u] / 2 - n[u] / 2);
        break;
      case xo:
        c[f] = c[f] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return c;
}
function Po(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = s === void 0 ? e.placement : s, r = n.strategy, i = r === void 0 ? e.strategy : r, a = n.boundary, c = a === void 0 ? cv : a, f = n.rootBoundary, u = f === void 0 ? nu : f, d = n.elementContext, m = d === void 0 ? uo : d, p = n.altBoundary, h = p === void 0 ? !1 : p, v = n.padding, _ = v === void 0 ? 0 : v, y = Sv(typeof _ != "number" ? _ : Ov(_, Wo)), E = m === uo ? uv : uo, g = e.rects.popper, T = e.elements[h ? E : m], I = QO(Xs(T) ? T : T.contextElement || hs(e.elements.popper), c, u, i), C = Ro(e.elements.reference), D = Nv({
    reference: C,
    element: g,
    placement: o
  }), F = fc(Object.assign({}, g, D)), O = m === uo ? F : C, S = {
    top: I.top - O.top + y.top,
    bottom: O.bottom - I.bottom + y.bottom,
    left: I.left - O.left + y.left,
    right: O.right - I.right + y.right
  }, R = e.modifiersData.offset;
  if (m === uo && R) {
    var w = R[o];
    Object.keys(S).forEach(function(x) {
      var ee = [jt, Bt].indexOf(x) >= 0 ? 1 : -1, ne = [Ot, Bt].indexOf(x) >= 0 ? "y" : "x";
      S[x] += w[ne] * ee;
    });
  }
  return S;
}
function JO(e, t) {
  t === void 0 && (t = {});
  var n = t, s = n.placement, o = n.boundary, r = n.rootBoundary, i = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, f = c === void 0 ? su : c, u = Io(s), d = u ? a ? uc : uc.filter(function(h) {
    return Io(h) === u;
  }) : Wo, m = d.filter(function(h) {
    return f.indexOf(h) >= 0;
  });
  m.length === 0 && (m = d);
  var p = m.reduce(function(h, v) {
    return h[v] = Po(e, {
      placement: v,
      boundary: o,
      rootBoundary: r,
      padding: i
    })[On(v)], h;
  }, {});
  return Object.keys(p).sort(function(h, v) {
    return p[h] - p[v];
  });
}
function ZO(e) {
  if (On(e) === Ra)
    return [];
  var t = Pi(e);
  return [lp(e), t, lp(t)];
}
function eC(e) {
  var t = e.state, n = e.options, s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (var o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !0 : i, c = n.fallbackPlacements, f = n.padding, u = n.boundary, d = n.rootBoundary, m = n.altBoundary, p = n.flipVariations, h = p === void 0 ? !0 : p, v = n.allowedAutoPlacements, _ = t.options.placement, y = On(_), E = y === _, g = c || (E || !h ? [Pi(_)] : ZO(_)), T = [_].concat(g).reduce(function(nt, ft) {
      return nt.concat(On(ft) === Ra ? JO(t, {
        placement: ft,
        boundary: u,
        rootBoundary: d,
        padding: f,
        flipVariations: h,
        allowedAutoPlacements: v
      }) : ft);
    }, []), I = t.rects.reference, C = t.rects.popper, D = /* @__PURE__ */ new Map(), F = !0, O = T[0], S = 0; S < T.length; S++) {
      var R = T[S], w = On(R), x = Io(R) === Ys, ee = [Ot, Bt].indexOf(w) >= 0, ne = ee ? "width" : "height", V = Po(t, {
        placement: R,
        boundary: u,
        rootBoundary: d,
        altBoundary: m,
        padding: f
      }), L = ee ? x ? jt : Ct : x ? Bt : Ot;
      I[ne] > C[ne] && (L = Pi(L));
      var $ = Pi(L), J = [];
      if (r && J.push(V[w] <= 0), a && J.push(V[L] <= 0, V[$] <= 0), J.every(function(nt) {
        return nt;
      })) {
        O = R, F = !1;
        break;
      }
      D.set(R, J);
    }
    if (F)
      for (var Oe = h ? 3 : 1, Re = function(ft) {
        var Tt = T.find(function(U) {
          var re = D.get(U);
          if (re)
            return re.slice(0, ft).every(function(le) {
              return le;
            });
        });
        if (Tt)
          return O = Tt, "break";
      }, Ae = Oe; Ae > 0; Ae--) {
        var Ne = Re(Ae);
        if (Ne === "break") break;
      }
    t.placement !== O && (t.modifiersData[s]._skip = !0, t.placement = O, t.reset = !0);
  }
}
const Dv = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: eC,
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
  return [Ot, jt, Bt, Ct].some(function(t) {
    return e[t] >= 0;
  });
}
function tC(e) {
  var t = e.state, n = e.name, s = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, i = Po(t, {
    elementContext: "reference"
  }), a = Po(t, {
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
const xv = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: tC
};
function nC(e, t, n) {
  var s = On(e), o = [Ct, Ot].indexOf(s) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = r[0], a = r[1];
  return i = i || 0, a = (a || 0) * o, [Ct, jt].indexOf(s) >= 0 ? {
    x: a,
    y: i
  } : {
    x: i,
    y: a
  };
}
function sC(e) {
  var t = e.state, n = e.options, s = e.name, o = n.offset, r = o === void 0 ? [0, 0] : o, i = su.reduce(function(u, d) {
    return u[d] = nC(d, t.rects, r), u;
  }, {}), a = i[t.placement], c = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[s] = i;
}
const kv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: sC
};
function oC(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Nv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const pu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: oC,
  data: {}
};
function rC(e) {
  return e === "x" ? "y" : "x";
}
function iC(e) {
  var t = e.state, n = e.options, s = e.name, o = n.mainAxis, r = o === void 0 ? !0 : o, i = n.altAxis, a = i === void 0 ? !1 : i, c = n.boundary, f = n.rootBoundary, u = n.altBoundary, d = n.padding, m = n.tether, p = m === void 0 ? !0 : m, h = n.tetherOffset, v = h === void 0 ? 0 : h, _ = Po(t, {
    boundary: c,
    rootBoundary: f,
    padding: d,
    altBoundary: u
  }), y = On(t.placement), E = Io(t.placement), g = !E, T = au(y), I = rC(T), C = t.modifiersData.popperOffsets, D = t.rects.reference, F = t.rects.popper, O = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, S = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, w = {
    x: 0,
    y: 0
  };
  if (C) {
    if (r) {
      var x, ee = T === "y" ? Ot : Ct, ne = T === "y" ? Bt : jt, V = T === "y" ? "height" : "width", L = C[T], $ = L + _[ee], J = L - _[ne], Oe = p ? -F[V] / 2 : 0, Re = E === Ys ? D[V] : F[V], Ae = E === Ys ? -F[V] : -D[V], Ne = t.elements.arrow, nt = p && Ne ? iu(Ne) : {
        width: 0,
        height: 0
      }, ft = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Av(), Tt = ft[ee], U = ft[ne], re = _r(0, D[V], nt[V]), le = g ? D[V] / 2 - Oe - re - Tt - S.mainAxis : Re - re - Tt - S.mainAxis, fe = g ? -D[V] / 2 + Oe + re + U + S.mainAxis : Ae + re + U + S.mainAxis, De = t.elements.arrow && Gr(t.elements.arrow), Ge = De ? T === "y" ? De.clientTop || 0 : De.clientLeft || 0 : 0, b = (x = R?.[T]) != null ? x : 0, A = L + le - b - Ge, M = L + fe - b, K = _r(p ? sa($, A) : $, L, p ? Bs(J, M) : J);
      C[T] = K, w[T] = K - L;
    }
    if (a) {
      var H, z = T === "x" ? Ot : Ct, ie = T === "x" ? Bt : jt, te = C[I], se = I === "y" ? "height" : "width", Q = te + _[z], me = te - _[ie], oe = [Ot, Ct].indexOf(y) !== -1, he = (H = R?.[I]) != null ? H : 0, _e = oe ? Q : te - D[se] - F[se] - he + S.altAxis, Pe = oe ? te + D[se] + F[se] - he - S.altAxis : me, je = p && oe ? LO(_e, te, Pe) : _r(p ? _e : Q, te, p ? Pe : me);
      C[I] = je, w[I] = je - te;
    }
    t.modifiersData[s] = w;
  }
}
const Rv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: iC,
  requiresIfExists: ["offset"]
};
function aC(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function lC(e) {
  return e === Ut(e) || !qt(e) ? uu(e) : aC(e);
}
function cC(e) {
  var t = e.getBoundingClientRect(), n = ko(t.width) / e.offsetWidth || 1, s = ko(t.height) / e.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function uC(e, t, n) {
  n === void 0 && (n = !1);
  var s = qt(t), o = qt(t) && cC(t), r = hs(t), i = Ro(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (s || !s && !n) && ((xn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  fu(r)) && (a = lC(t)), qt(t) ? (c = Ro(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : r && (c.x = du(r))), {
    x: i.left + a.scrollLeft - c.x,
    y: i.top + a.scrollTop - c.y,
    width: i.width,
    height: i.height
  };
}
function dC(e) {
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
function fC(e) {
  var t = dC(e);
  return bv.reduce(function(n, s) {
    return n.concat(t.filter(function(o) {
      return o.phase === s;
    }));
  }, []);
}
function pC(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function hC(e) {
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
function Pa(e) {
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
    }, d = [], m = !1, p = {
      state: u,
      setOptions: function(y) {
        var E = typeof y == "function" ? y(u.options) : y;
        v(), u.options = Object.assign({}, r, u.options, E), u.scrollParents = {
          reference: Xs(a) ? yr(a) : a.contextElement ? yr(a.contextElement) : [],
          popper: yr(c)
        };
        var g = fC(hC([].concat(s, u.options.modifiers)));
        return u.orderedModifiers = g.filter(function(T) {
          return T.enabled;
        }), h(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var y = u.elements, E = y.reference, g = y.popper;
          if (pp(E, g)) {
            u.rects = {
              reference: uC(E, Gr(g), u.options.strategy === "fixed"),
              popper: iu(g)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(S) {
              return u.modifiersData[S.name] = Object.assign({}, S.data);
            });
            for (var T = 0; T < u.orderedModifiers.length; T++) {
              if (u.reset === !0) {
                u.reset = !1, T = -1;
                continue;
              }
              var I = u.orderedModifiers[T], C = I.fn, D = I.options, F = D === void 0 ? {} : D, O = I.name;
              typeof C == "function" && (u = C({
                state: u,
                options: F,
                name: O,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: pC(function() {
        return new Promise(function(_) {
          p.forceUpdate(), _(u);
        });
      }),
      destroy: function() {
        v(), m = !0;
      }
    };
    if (!pp(a, c))
      return p;
    p.setOptions(f).then(function(_) {
      !m && f.onFirstUpdate && f.onFirstUpdate(_);
    });
    function h() {
      u.orderedModifiers.forEach(function(_) {
        var y = _.name, E = _.options, g = E === void 0 ? {} : E, T = _.effect;
        if (typeof T == "function") {
          var I = T({
            state: u,
            name: y,
            instance: p,
            options: g
          }), C = function() {
          };
          d.push(I || C);
        }
      });
    }
    function v() {
      d.forEach(function(_) {
        return _();
      }), d = [];
    }
    return p;
  };
}
var mC = /* @__PURE__ */ Pa(), gC = [cu, pu, lu, ru], vC = /* @__PURE__ */ Pa({
  defaultModifiers: gC
}), _C = [cu, pu, lu, ru, kv, Dv, Rv, Cv, xv], hu = /* @__PURE__ */ Pa({
  defaultModifiers: _C
});
const Iv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: gv,
  afterRead: pv,
  afterWrite: yv,
  applyStyles: ru,
  arrow: Cv,
  auto: Ra,
  basePlacements: Wo,
  beforeMain: hv,
  beforeRead: dv,
  beforeWrite: vv,
  bottom: Bt,
  clippingParents: cv,
  computeStyles: lu,
  createPopper: hu,
  createPopperBase: mC,
  createPopperLite: vC,
  detectOverflow: Po,
  end: xo,
  eventListeners: cu,
  flip: Dv,
  hide: xv,
  left: Ct,
  main: mv,
  modifierPhases: bv,
  offset: kv,
  placements: su,
  popper: uo,
  popperGenerator: Pa,
  popperOffsets: pu,
  preventOverflow: Rv,
  read: fv,
  reference: uv,
  right: jt,
  start: Ys,
  top: Ot,
  variationPlacements: uc,
  viewport: nu,
  write: _v
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const Qn = /* @__PURE__ */ new Map(), al = {
  set(e, t, n) {
    Qn.has(e) || Qn.set(e, /* @__PURE__ */ new Map());
    const s = Qn.get(e);
    if (!s.has(t) && s.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
      return;
    }
    s.set(t, n);
  },
  get(e, t) {
    return Qn.has(e) && Qn.get(e).get(t) || null;
  },
  remove(e, t) {
    if (!Qn.has(e))
      return;
    const n = Qn.get(e);
    n.delete(t), n.size === 0 && Qn.delete(e);
  }
}, yC = 1e6, bC = 1e3, pc = "transitionend", Pv = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)), e), EC = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), wC = (e) => {
  do
    e += Math.floor(Math.random() * yC);
  while (document.getElementById(e));
  return e;
}, AC = (e) => {
  if (!e)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: n
  } = window.getComputedStyle(e);
  const s = Number.parseFloat(t), o = Number.parseFloat(n);
  return !s && !o ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * bC);
}, Vv = (e) => {
  e.dispatchEvent(new Event(pc));
}, $n = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), cs = (e) => $n(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(Pv(e)) : null, Ko = (e) => {
  if (!$n(e) || e.getClientRects().length === 0)
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
}, us = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Mv = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? Mv(e.parentNode) : null;
}, oa = () => {
}, Qr = (e) => {
  e.offsetHeight;
}, Lv = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, ll = [], SC = (e) => {
  document.readyState === "loading" ? (ll.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of ll)
      t();
  }), ll.push(e)) : e();
}, Gt = () => document.documentElement.dir === "rtl", Jt = (e) => {
  SC(() => {
    const t = Lv();
    if (t) {
      const n = e.NAME, s = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = s, e.jQueryInterface);
    }
  });
}, kt = (e, t = [], n = e) => typeof e == "function" ? e.call(...t) : n, Fv = (e, t, n = !0) => {
  if (!n) {
    kt(e);
    return;
  }
  const o = AC(t) + 5;
  let r = !1;
  const i = ({
    target: a
  }) => {
    a === t && (r = !0, t.removeEventListener(pc, i), kt(e));
  };
  t.addEventListener(pc, i), setTimeout(() => {
    r || Vv(t);
  }, o);
}, mu = (e, t, n, s) => {
  const o = e.length;
  let r = e.indexOf(t);
  return r === -1 ? !n && s ? e[o - 1] : e[0] : (r += n ? 1 : -1, s && (r = (r + o) % o), e[Math.max(0, Math.min(r, o - 1))]);
}, OC = /[^.]*(?=\..*)\.|.*/, CC = /\..*/, TC = /::\d+$/, cl = {};
let hp = 1;
const Bv = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, NC = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function jv(e, t) {
  return t && `${t}::${hp++}` || e.uidEvent || hp++;
}
function Uv(e) {
  const t = jv(e);
  return e.uidEvent = t, cl[t] = cl[t] || {}, cl[t];
}
function DC(e, t) {
  return function n(s) {
    return gu(s, {
      delegateTarget: e
    }), n.oneOff && X.off(e, s.type, t), t.apply(e, [s]);
  };
}
function xC(e, t, n) {
  return function s(o) {
    const r = e.querySelectorAll(t);
    for (let {
      target: i
    } = o; i && i !== this; i = i.parentNode)
      for (const a of r)
        if (a === i)
          return gu(o, {
            delegateTarget: i
          }), s.oneOff && X.off(e, o.type, t, n), n.apply(i, [o]);
  };
}
function Hv(e, t, n = null) {
  return Object.values(e).find((s) => s.callable === t && s.delegationSelector === n);
}
function $v(e, t, n) {
  const s = typeof t == "string", o = s ? n : t || n;
  let r = Wv(e);
  return NC.has(r) || (r = e), [s, o, r];
}
function mp(e, t, n, s, o) {
  if (typeof t != "string" || !e)
    return;
  let [r, i, a] = $v(t, n, s);
  t in Bv && (i = ((h) => function(v) {
    if (!v.relatedTarget || v.relatedTarget !== v.delegateTarget && !v.delegateTarget.contains(v.relatedTarget))
      return h.call(this, v);
  })(i));
  const c = Uv(e), f = c[a] || (c[a] = {}), u = Hv(f, i, r ? n : null);
  if (u) {
    u.oneOff = u.oneOff && o;
    return;
  }
  const d = jv(i, t.replace(OC, "")), m = r ? xC(e, n, i) : DC(e, i);
  m.delegationSelector = r ? n : null, m.callable = i, m.oneOff = o, m.uidEvent = d, f[d] = m, e.addEventListener(a, m, r);
}
function hc(e, t, n, s, o) {
  const r = Hv(t[n], s, o);
  r && (e.removeEventListener(n, r, !!o), delete t[n][r.uidEvent]);
}
function kC(e, t, n, s) {
  const o = t[n] || {};
  for (const [r, i] of Object.entries(o))
    r.includes(s) && hc(e, t, n, i.callable, i.delegationSelector);
}
function Wv(e) {
  return e = e.replace(CC, ""), Bv[e] || e;
}
const X = {
  on(e, t, n, s) {
    mp(e, t, n, s, !1);
  },
  one(e, t, n, s) {
    mp(e, t, n, s, !0);
  },
  off(e, t, n, s) {
    if (typeof t != "string" || !e)
      return;
    const [o, r, i] = $v(t, n, s), a = i !== t, c = Uv(e), f = c[i] || {}, u = t.startsWith(".");
    if (typeof r < "u") {
      if (!Object.keys(f).length)
        return;
      hc(e, c, i, r, o ? n : null);
      return;
    }
    if (u)
      for (const d of Object.keys(c))
        kC(e, c, d, t.slice(1));
    for (const [d, m] of Object.entries(f)) {
      const p = d.replace(TC, "");
      (!a || t.includes(p)) && hc(e, c, i, m.callable, m.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const s = Lv(), o = Wv(t), r = t !== o;
    let i = null, a = !0, c = !0, f = !1;
    r && s && (i = s.Event(t, n), s(e).trigger(i), a = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), f = i.isDefaultPrevented());
    const u = gu(new Event(t, {
      bubbles: a,
      cancelable: !0
    }), n);
    return f && u.preventDefault(), c && e.dispatchEvent(u), u.defaultPrevented && i && i.preventDefault(), u;
  }
};
function gu(e, t = {}) {
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
const Wn = {
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
    const s = $n(n) ? Wn.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof s == "object" ? s : {},
      ...$n(n) ? Wn.getDataAttributes(n) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [s, o] of Object.entries(n)) {
      const r = t[s], i = $n(r) ? "element" : EC(r);
      if (!new RegExp(o).test(i))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${i}" but expected type "${o}".`);
    }
  }
}
const RC = "5.3.7";
class fn extends Jr {
  constructor(t, n) {
    super(), t = cs(t), t && (this._element = t, this._config = this._getConfig(n), al.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    al.remove(this._element, this.constructor.DATA_KEY), X.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  // Private
  _queueCallback(t, n, s = !0) {
    Fv(t, n, s);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return al.get(cs(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return RC;
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
  return t ? t.split(",").map((n) => Pv(n)).join(",") : null;
}, ge = {
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
    return this.find(t, e).filter((n) => !us(n) && Ko(n));
  },
  getSelectorFromElement(e) {
    const t = dl(e);
    return t && ge.findOne(t) ? t : null;
  },
  getElementFromSelector(e) {
    const t = dl(e);
    return t ? ge.findOne(t) : null;
  },
  getMultipleElementsFromSelector(e) {
    const t = dl(e);
    return t ? ge.find(t) : [];
  }
}, Va = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, s = e.NAME;
  X.on(document, n, `[data-bs-dismiss="${s}"]`, function(o) {
    if (["A", "AREA"].includes(this.tagName) && o.preventDefault(), us(this))
      return;
    const r = ge.getElementFromSelector(this) || this.closest(`.${s}`);
    e.getOrCreateInstance(r)[t]();
  });
}, IC = "alert", PC = "bs.alert", Kv = `.${PC}`, VC = `close${Kv}`, MC = `closed${Kv}`, LC = "fade", FC = "show";
class Ma extends fn {
  // Getters
  static get NAME() {
    return IC;
  }
  // Public
  close() {
    if (X.trigger(this._element, VC).defaultPrevented)
      return;
    this._element.classList.remove(FC);
    const n = this._element.classList.contains(LC);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  // Private
  _destroyElement() {
    this._element.remove(), X.trigger(this._element, MC), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ma.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Va(Ma, "close");
Jt(Ma);
const BC = "button", jC = "bs.button", UC = `.${jC}`, HC = ".data-api", $C = "active", vp = '[data-bs-toggle="button"]', WC = `click${UC}${HC}`;
class La extends fn {
  // Getters
  static get NAME() {
    return BC;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle($C));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = La.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
X.on(document, WC, vp, (e) => {
  e.preventDefault();
  const t = e.target.closest(vp);
  La.getOrCreateInstance(t).toggle();
});
Jt(La);
const KC = "swipe", zo = ".bs.swipe", zC = `touchstart${zo}`, qC = `touchmove${zo}`, YC = `touchend${zo}`, XC = `pointerdown${zo}`, GC = `pointerup${zo}`, QC = "touch", JC = "pen", ZC = "pointer-event", eT = 40, tT = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, nT = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class ra extends Jr {
  constructor(t, n) {
    super(), this._element = t, !(!t || !ra.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return tT;
  }
  static get DefaultType() {
    return nT;
  }
  static get NAME() {
    return KC;
  }
  // Public
  dispose() {
    X.off(this._element, zo);
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
    if (t <= eT)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && kt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (X.on(this._element, XC, (t) => this._start(t)), X.on(this._element, GC, (t) => this._end(t)), this._element.classList.add(ZC)) : (X.on(this._element, zC, (t) => this._start(t)), X.on(this._element, qC, (t) => this._move(t)), X.on(this._element, YC, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === JC || t.pointerType === QC);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const sT = "carousel", oT = "bs.carousel", ms = `.${oT}`, zv = ".data-api", rT = "ArrowLeft", iT = "ArrowRight", aT = 500, nr = "next", io = "prev", fo = "left", Vi = "right", lT = `slide${ms}`, fl = `slid${ms}`, cT = `keydown${ms}`, uT = `mouseenter${ms}`, dT = `mouseleave${ms}`, fT = `dragstart${ms}`, pT = `load${ms}${zv}`, hT = `click${ms}${zv}`, qv = "carousel", ui = "active", mT = "slide", gT = "carousel-item-end", vT = "carousel-item-start", _T = "carousel-item-next", yT = "carousel-item-prev", Yv = ".active", Xv = ".carousel-item", bT = Yv + Xv, ET = ".carousel-item img", wT = ".carousel-indicators", AT = "[data-bs-slide], [data-bs-slide-to]", ST = '[data-bs-ride="carousel"]', OT = {
  [rT]: Vi,
  [iT]: fo
}, CT = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, TT = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class Zr extends fn {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = ge.findOne(wT, this._element), this._addEventListeners(), this._config.ride === qv && this.cycle();
  }
  // Getters
  static get Default() {
    return CT;
  }
  static get DefaultType() {
    return TT;
  }
  static get NAME() {
    return sT;
  }
  // Public
  next() {
    this._slide(nr);
  }
  nextWhenVisible() {
    !document.hidden && Ko(this._element) && this.next();
  }
  prev() {
    this._slide(io);
  }
  pause() {
    this._isSliding && Vv(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        X.one(this._element, fl, () => this.cycle());
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
      X.one(this._element, fl, () => this.to(t));
      return;
    }
    const s = this._getItemIndex(this._getActive());
    if (s === t)
      return;
    const o = t > s ? nr : io;
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
    this._config.keyboard && X.on(this._element, cT, (t) => this._keydown(t)), this._config.pause === "hover" && (X.on(this._element, uT, () => this.pause()), X.on(this._element, dT, () => this._maybeEnableCycle())), this._config.touch && ra.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const s of ge.find(ET, this._element))
      X.on(s, fT, (o) => o.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(fo)),
      rightCallback: () => this._slide(this._directionToOrder(Vi)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), aT + this._config.interval));
      }
    };
    this._swipeHelper = new ra(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const n = OT[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const n = ge.findOne(Yv, this._indicatorsElement);
    n.classList.remove(ui), n.removeAttribute("aria-current");
    const s = ge.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
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
    const s = this._getActive(), o = t === nr, r = n || mu(this._getItems(), s, o, this._config.wrap);
    if (r === s)
      return;
    const i = this._getItemIndex(r), a = (p) => X.trigger(this._element, p, {
      relatedTarget: r,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(s),
      to: i
    });
    if (a(lT).defaultPrevented || !s || !r)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(i), this._activeElement = r;
    const u = o ? vT : gT, d = o ? _T : yT;
    r.classList.add(d), Qr(r), s.classList.add(u), r.classList.add(u);
    const m = () => {
      r.classList.remove(u, d), r.classList.add(ui), s.classList.remove(ui, d, u), this._isSliding = !1, a(fl);
    };
    this._queueCallback(m, s, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(mT);
  }
  _getActive() {
    return ge.findOne(bT, this._element);
  }
  _getItems() {
    return ge.find(Xv, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Gt() ? t === fo ? io : nr : t === fo ? nr : io;
  }
  _orderToDirection(t) {
    return Gt() ? t === io ? fo : Vi : t === io ? Vi : fo;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Zr.getOrCreateInstance(this, t);
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
X.on(document, hT, AT, function(e) {
  const t = ge.getElementFromSelector(this);
  if (!t || !t.classList.contains(qv))
    return;
  e.preventDefault();
  const n = Zr.getOrCreateInstance(t), s = this.getAttribute("data-bs-slide-to");
  if (s) {
    n.to(s), n._maybeEnableCycle();
    return;
  }
  if (Wn.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
X.on(window, pT, () => {
  const e = ge.find(ST);
  for (const t of e)
    Zr.getOrCreateInstance(t);
});
Jt(Zr);
const NT = "collapse", DT = "bs.collapse", ei = `.${DT}`, xT = ".data-api", kT = `show${ei}`, RT = `shown${ei}`, IT = `hide${ei}`, PT = `hidden${ei}`, VT = `click${ei}${xT}`, pl = "show", go = "collapse", di = "collapsing", MT = "collapsed", LT = `:scope .${go} .${go}`, FT = "collapse-horizontal", BT = "width", jT = "height", UT = ".collapse.show, .collapse.collapsing", mc = '[data-bs-toggle="collapse"]', HT = {
  parent: null,
  toggle: !0
}, $T = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Mr extends fn {
  constructor(t, n) {
    super(t, n), this._isTransitioning = !1, this._triggerArray = [];
    const s = ge.find(mc);
    for (const o of s) {
      const r = ge.getSelectorFromElement(o), i = ge.find(r).filter((a) => a === this._element);
      r !== null && i.length && this._triggerArray.push(o);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return HT;
  }
  static get DefaultType() {
    return $T;
  }
  static get NAME() {
    return NT;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(UT).filter((a) => a !== this._element).map((a) => Mr.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || X.trigger(this._element, kT).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const s = this._getDimension();
    this._element.classList.remove(go), this._element.classList.add(di), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, this._element.classList.remove(di), this._element.classList.add(go, pl), this._element.style[s] = "", X.trigger(this._element, RT);
    }, i = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[s] = `${this._element[i]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || X.trigger(this._element, IT).defaultPrevented)
      return;
    const n = this._getDimension();
    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, Qr(this._element), this._element.classList.add(di), this._element.classList.remove(go, pl);
    for (const o of this._triggerArray) {
      const r = ge.getElementFromSelector(o);
      r && !this._isShown(r) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      this._isTransitioning = !1, this._element.classList.remove(di), this._element.classList.add(go), X.trigger(this._element, PT);
    };
    this._element.style[n] = "", this._queueCallback(s, this._element, !0);
  }
  // Private
  _isShown(t = this._element) {
    return t.classList.contains(pl);
  }
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = cs(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(FT) ? BT : jT;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(mc);
    for (const n of t) {
      const s = ge.getElementFromSelector(n);
      s && this._addAriaAndCollapsedClass([n], this._isShown(s));
    }
  }
  _getFirstLevelChildren(t) {
    const n = ge.find(LT, this._config.parent);
    return ge.find(t, this._config.parent).filter((s) => !n.includes(s));
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
      const s = Mr.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t]();
      }
    });
  }
}
X.on(document, VT, mc, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  for (const t of ge.getMultipleElementsFromSelector(this))
    Mr.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
Jt(Mr);
const _p = "dropdown", WT = "bs.dropdown", Js = `.${WT}`, vu = ".data-api", KT = "Escape", yp = "Tab", zT = "ArrowUp", bp = "ArrowDown", qT = 2, YT = `hide${Js}`, XT = `hidden${Js}`, GT = `show${Js}`, QT = `shown${Js}`, Gv = `click${Js}${vu}`, Qv = `keydown${Js}${vu}`, JT = `keyup${Js}${vu}`, po = "show", ZT = "dropup", eN = "dropend", tN = "dropstart", nN = "dropup-center", sN = "dropdown-center", xs = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', oN = `${xs}.${po}`, Mi = ".dropdown-menu", rN = ".navbar", iN = ".navbar-nav", aN = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", lN = Gt() ? "top-end" : "top-start", cN = Gt() ? "top-start" : "top-end", uN = Gt() ? "bottom-end" : "bottom-start", dN = Gt() ? "bottom-start" : "bottom-end", fN = Gt() ? "left-start" : "right-start", pN = Gt() ? "right-start" : "left-start", hN = "top", mN = "bottom", gN = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, vN = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class Cn extends fn {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = ge.next(this._element, Mi)[0] || ge.prev(this._element, Mi)[0] || ge.findOne(Mi, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return gN;
  }
  static get DefaultType() {
    return vN;
  }
  static get NAME() {
    return _p;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (us(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!X.trigger(this._element, GT, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(iN))
        for (const s of [].concat(...document.body.children))
          X.on(s, "mouseover", oa);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(po), this._element.classList.add(po), X.trigger(this._element, QT, t);
    }
  }
  hide() {
    if (us(this._element) || !this._isShown())
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
    if (!X.trigger(this._element, YT, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          X.off(s, "mouseover", oa);
      this._popper && this._popper.destroy(), this._menu.classList.remove(po), this._element.classList.remove(po), this._element.setAttribute("aria-expanded", "false"), Wn.removeDataAttribute(this._menu, "popper"), X.trigger(this._element, XT, t), this._element.focus();
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !$n(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${_p.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof Iv > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : $n(this._config.reference) ? t = cs(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = hu(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(po);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(eN))
      return fN;
    if (t.classList.contains(tN))
      return pN;
    if (t.classList.contains(nN))
      return hN;
    if (t.classList.contains(sN))
      return mN;
    const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(ZT) ? n ? cN : lN : n ? dN : uN;
  }
  _detectNavbar() {
    return this._element.closest(rN) !== null;
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
    return (this._inNavbar || this._config.display === "static") && (Wn.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
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
    const s = ge.find(aN, this._menu).filter((o) => Ko(o));
    s.length && mu(s, n, t === bp, !s.includes(n)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Cn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === qT || t.type === "keyup" && t.key !== yp)
      return;
    const n = ge.find(oN);
    for (const s of n) {
      const o = Cn.getInstance(s);
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
    const n = /input|textarea/i.test(t.target.tagName), s = t.key === KT, o = [zT, bp].includes(t.key);
    if (!o && !s || n && !s)
      return;
    t.preventDefault();
    const r = this.matches(xs) ? this : ge.prev(this, xs)[0] || ge.next(this, xs)[0] || ge.findOne(xs, t.delegateTarget.parentNode), i = Cn.getOrCreateInstance(r);
    if (o) {
      t.stopPropagation(), i.show(), i._selectMenuItem(t);
      return;
    }
    i._isShown() && (t.stopPropagation(), i.hide(), r.focus());
  }
}
X.on(document, Qv, xs, Cn.dataApiKeydownHandler);
X.on(document, Qv, Mi, Cn.dataApiKeydownHandler);
X.on(document, Gv, Cn.clearMenus);
X.on(document, JT, Cn.clearMenus);
X.on(document, Gv, xs, function(e) {
  e.preventDefault(), Cn.getOrCreateInstance(this).toggle();
});
Jt(Cn);
const Jv = "backdrop", _N = "fade", Ep = "show", wp = `mousedown.bs.${Jv}`, yN = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, bN = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Zv extends Jr {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return yN;
  }
  static get DefaultType() {
    return bN;
  }
  static get NAME() {
    return Jv;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      kt(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Qr(n), n.classList.add(Ep), this._emulateAnimation(() => {
      kt(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      kt(t);
      return;
    }
    this._getElement().classList.remove(Ep), this._emulateAnimation(() => {
      this.dispose(), kt(t);
    });
  }
  dispose() {
    this._isAppended && (X.off(this._element, wp), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(_N), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = cs(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), X.on(t, wp, () => {
      kt(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Fv(t, this._getElement(), this._config.isAnimated);
  }
}
const EN = "focustrap", wN = "bs.focustrap", ia = `.${wN}`, AN = `focusin${ia}`, SN = `keydown.tab${ia}`, ON = "Tab", CN = "forward", Ap = "backward", TN = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, NN = {
  autofocus: "boolean",
  trapElement: "element"
};
class e_ extends Jr {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return TN;
  }
  static get DefaultType() {
    return NN;
  }
  static get NAME() {
    return EN;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), X.off(document, ia), X.on(document, AN, (t) => this._handleFocusin(t)), X.on(document, SN, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, X.off(document, ia));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: n
    } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target))
      return;
    const s = ge.focusableChildren(n);
    s.length === 0 ? n.focus() : this._lastTabNavDirection === Ap ? s[s.length - 1].focus() : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === ON && (this._lastTabNavDirection = t.shiftKey ? Ap : CN);
  }
}
const Sp = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Op = ".sticky-top", fi = "padding-right", Cp = "margin-right";
class gc {
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
    this._disableOverFlow(), this._setElementAttributes(this._element, fi, (n) => n + t), this._setElementAttributes(Sp, fi, (n) => n + t), this._setElementAttributes(Op, Cp, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, fi), this._resetElementAttributes(Sp, fi), this._resetElementAttributes(Op, Cp);
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
    s && Wn.setDataAttribute(t, n, s);
  }
  _resetElementAttributes(t, n) {
    const s = (o) => {
      const r = Wn.getDataAttribute(o, n);
      if (r === null) {
        o.style.removeProperty(n);
        return;
      }
      Wn.removeDataAttribute(o, n), o.style.setProperty(n, r);
    };
    this._applyManipulationCallback(t, s);
  }
  _applyManipulationCallback(t, n) {
    if ($n(t)) {
      n(t);
      return;
    }
    for (const s of ge.find(t, this._element))
      n(s);
  }
}
const DN = "modal", xN = "bs.modal", Qt = `.${xN}`, kN = ".data-api", RN = "Escape", IN = `hide${Qt}`, PN = `hidePrevented${Qt}`, t_ = `hidden${Qt}`, n_ = `show${Qt}`, VN = `shown${Qt}`, MN = `resize${Qt}`, LN = `click.dismiss${Qt}`, FN = `mousedown.dismiss${Qt}`, BN = `keydown.dismiss${Qt}`, jN = `click${Qt}${kN}`, Tp = "modal-open", UN = "fade", Np = "show", hl = "modal-static", HN = ".modal.show", $N = ".modal-dialog", WN = ".modal-body", KN = '[data-bs-toggle="modal"]', zN = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, qN = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Gs extends fn {
  constructor(t, n) {
    super(t, n), this._dialog = ge.findOne($N, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new gc(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return zN;
  }
  static get DefaultType() {
    return qN;
  }
  static get NAME() {
    return DN;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || X.trigger(this._element, n_, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Tp), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || X.trigger(this._element, IN).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Np), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    X.off(window, Qt), X.off(this._dialog, Qt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Zv({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new e_({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const n = ge.findOne(WN, this._dialog);
    n && (n.scrollTop = 0), Qr(this._element), this._element.classList.add(Np);
    const s = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, X.trigger(this._element, VN, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    X.on(this._element, BN, (t) => {
      if (t.key === RN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), X.on(window, MN, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), X.on(this._element, FN, (t) => {
      X.one(this._element, LN, (n) => {
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
      document.body.classList.remove(Tp), this._resetAdjustments(), this._scrollBar.reset(), X.trigger(this._element, t_);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(UN);
  }
  _triggerBackdropTransition() {
    if (X.trigger(this._element, PN).defaultPrevented)
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
      const s = Gs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t](n);
      }
    });
  }
}
X.on(document, jN, KN, function(e) {
  const t = ge.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), X.one(t, n_, (o) => {
    o.defaultPrevented || X.one(t, t_, () => {
      Ko(this) && this.focus();
    });
  });
  const n = ge.findOne(HN);
  n && Gs.getInstance(n).hide(), Gs.getOrCreateInstance(t).toggle(this);
});
Va(Gs);
Jt(Gs);
const YN = "offcanvas", XN = "bs.offcanvas", Yn = `.${XN}`, s_ = ".data-api", GN = `load${Yn}${s_}`, QN = "Escape", Dp = "show", xp = "showing", kp = "hiding", JN = "offcanvas-backdrop", o_ = ".offcanvas.show", ZN = `show${Yn}`, eD = `shown${Yn}`, tD = `hide${Yn}`, Rp = `hidePrevented${Yn}`, r_ = `hidden${Yn}`, nD = `resize${Yn}`, sD = `click${Yn}${s_}`, oD = `keydown.dismiss${Yn}`, rD = '[data-bs-toggle="offcanvas"]', iD = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, aD = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class ds extends fn {
  constructor(t, n) {
    super(t, n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return iD;
  }
  static get DefaultType() {
    return aD;
  }
  static get NAME() {
    return YN;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || X.trigger(this._element, ZN, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new gc().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(xp);
    const s = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Dp), this._element.classList.remove(xp), X.trigger(this._element, eD, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || X.trigger(this._element, tD).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(kp), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(Dp, kp), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new gc().reset(), X.trigger(this._element, r_);
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
        X.trigger(this._element, Rp);
        return;
      }
      this.hide();
    }, n = !!this._config.backdrop;
    return new Zv({
      className: JN,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null
    });
  }
  _initializeFocusTrap() {
    return new e_({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    X.on(this._element, oD, (t) => {
      if (t.key === QN) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        X.trigger(this._element, Rp);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ds.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
X.on(document, sD, rD, function(e) {
  const t = ge.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), us(this))
    return;
  X.one(t, r_, () => {
    Ko(this) && this.focus();
  });
  const n = ge.findOne(o_);
  n && n !== t && ds.getInstance(n).hide(), ds.getOrCreateInstance(t).toggle(this);
});
X.on(window, GN, () => {
  for (const e of ge.find(o_))
    ds.getOrCreateInstance(e).show();
});
X.on(window, nD, () => {
  for (const e of ge.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && ds.getOrCreateInstance(e).hide();
});
Va(ds);
Jt(ds);
const lD = /^aria-[\w-]*$/i, i_ = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", lD],
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
}, cD = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), uD = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, dD = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? cD.has(n) ? !!uD.test(e.nodeValue) : !0 : t.filter((s) => s instanceof RegExp).some((s) => s.test(n));
};
function fD(e, t, n) {
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
      dD(u, f) || i.removeAttribute(u.nodeName);
  }
  return o.body.innerHTML;
}
const pD = "TemplateFactory", hD = {
  allowList: i_,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, mD = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, gD = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class vD extends Jr {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return hD;
  }
  static get DefaultType() {
    return mD;
  }
  static get NAME() {
    return pD;
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
      }, gD);
  }
  _setContent(t, n, s) {
    const o = ge.findOne(s, t);
    if (o) {
      if (n = this._resolvePossibleFunction(n), !n) {
        o.remove();
        return;
      }
      if ($n(n)) {
        this._putElementInTemplate(cs(n), o);
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
    return this._config.sanitize ? fD(t, this._config.allowList, this._config.sanitizeFn) : t;
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
const _D = "tooltip", yD = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ml = "fade", bD = "modal", pi = "show", ED = ".tooltip-inner", Ip = `.${bD}`, Pp = "hide.bs.modal", sr = "hover", gl = "focus", vl = "click", wD = "manual", AD = "hide", SD = "hidden", OD = "show", CD = "shown", TD = "inserted", ND = "click", DD = "focusin", xD = "focusout", kD = "mouseenter", RD = "mouseleave", ID = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Gt() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Gt() ? "right" : "left"
}, PD = {
  allowList: i_,
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
}, VD = {
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
class Zs extends fn {
  constructor(t, n) {
    if (typeof Iv > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
    super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return PD;
  }
  static get DefaultType() {
    return VD;
  }
  static get NAME() {
    return _D;
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
    clearTimeout(this._timeout), X.off(this._element.closest(Ip), Pp, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = X.trigger(this._element, this.constructor.eventName(OD)), s = (Mv(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !s)
      return;
    this._disposePopper();
    const o = this._getTipElement();
    this._element.setAttribute("aria-describedby", o.getAttribute("id"));
    const {
      container: r
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(o), X.trigger(this._element, this.constructor.eventName(TD))), this._popper = this._createPopper(o), o.classList.add(pi), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        X.on(a, "mouseover", oa);
    const i = () => {
      X.trigger(this._element, this.constructor.eventName(CD)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(i, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || X.trigger(this._element, this.constructor.eventName(AD)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(pi), "ontouchstart" in document.documentElement)
      for (const o of [].concat(...document.body.children))
        X.off(o, "mouseover", oa);
    this._activeTrigger[vl] = !1, this._activeTrigger[gl] = !1, this._activeTrigger[sr] = !1, this._isHovered = null;
    const s = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), X.trigger(this._element, this.constructor.eventName(SD)));
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
    n.classList.remove(ml, pi), n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const s = wC(this.constructor.NAME).toString();
    return n.setAttribute("id", s), this._isAnimated() && n.classList.add(ml), n;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new vD({
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
    return this._config.animation || this.tip && this.tip.classList.contains(ml);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(pi);
  }
  _createPopper(t) {
    const n = kt(this._config.placement, [this, t, this._element]), s = ID[n.toUpperCase()];
    return hu(this._element, t, this._getPopperConfig(s));
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
        X.on(this._element, this.constructor.eventName(ND), this._config.selector, (s) => {
          const o = this._initializeOnDelegatedTarget(s);
          o._activeTrigger[vl] = !(o._isShown() && o._activeTrigger[vl]), o.toggle();
        });
      else if (n !== wD) {
        const s = n === sr ? this.constructor.eventName(kD) : this.constructor.eventName(DD), o = n === sr ? this.constructor.eventName(RD) : this.constructor.eventName(xD);
        X.on(this._element, s, this._config.selector, (r) => {
          const i = this._initializeOnDelegatedTarget(r);
          i._activeTrigger[r.type === "focusin" ? gl : sr] = !0, i._enter();
        }), X.on(this._element, o, this._config.selector, (r) => {
          const i = this._initializeOnDelegatedTarget(r);
          i._activeTrigger[r.type === "focusout" ? gl : sr] = i._element.contains(r.relatedTarget), i._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, X.on(this._element.closest(Ip), Pp, this._hideModalHandler);
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
    const n = Wn.getDataAttributes(this._element);
    for (const s of Object.keys(n))
      yD.has(s) && delete n[s];
    return t = {
      ...n,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : cs(t.container), typeof t.delay == "number" && (t.delay = {
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
      const n = Zs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Jt(Zs);
const MD = "popover", LD = ".popover-header", FD = ".popover-body", BD = {
  ...Zs.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, jD = {
  ...Zs.DefaultType,
  content: "(null|string|element|function)"
};
class _u extends Zs {
  // Getters
  static get Default() {
    return BD;
  }
  static get DefaultType() {
    return jD;
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
      [LD]: this._getTitle(),
      [FD]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = _u.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Jt(_u);
const UD = "scrollspy", HD = "bs.scrollspy", yu = `.${HD}`, $D = ".data-api", WD = `activate${yu}`, Vp = `click${yu}`, KD = `load${yu}${$D}`, zD = "dropdown-item", ao = "active", qD = '[data-bs-spy="scroll"]', _l = "[href]", YD = ".nav, .list-group", Mp = ".nav-link", XD = ".nav-item", GD = ".list-group-item", QD = `${Mp}, ${XD} > ${Mp}, ${GD}`, JD = ".dropdown", ZD = ".dropdown-toggle", ex = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, tx = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class Fa extends fn {
  constructor(t, n) {
    super(t, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return ex;
  }
  static get DefaultType() {
    return tx;
  }
  static get NAME() {
    return UD;
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
    return t.target = cs(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (X.off(this._config.target, Vp), X.on(this._config.target, Vp, _l, (t) => {
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
    const t = ge.find(_l, this._config.target);
    for (const n of t) {
      if (!n.hash || us(n))
        continue;
      const s = ge.findOne(decodeURI(n.hash), this._element);
      Ko(s) && (this._targetLinks.set(decodeURI(n.hash), n), this._observableSections.set(n.hash, s));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(ao), this._activateParents(t), X.trigger(this._element, WD, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(zD)) {
      ge.findOne(ZD, t.closest(JD)).classList.add(ao);
      return;
    }
    for (const n of ge.parents(t, YD))
      for (const s of ge.prev(n, QD))
        s.classList.add(ao);
  }
  _clearActiveClass(t) {
    t.classList.remove(ao);
    const n = ge.find(`${_l}.${ao}`, t);
    for (const s of n)
      s.classList.remove(ao);
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
X.on(window, KD, () => {
  for (const e of ge.find(qD))
    Fa.getOrCreateInstance(e);
});
Jt(Fa);
const nx = "tab", sx = "bs.tab", eo = `.${sx}`, ox = `hide${eo}`, rx = `hidden${eo}`, ix = `show${eo}`, ax = `shown${eo}`, lx = `click${eo}`, cx = `keydown${eo}`, ux = `load${eo}`, dx = "ArrowLeft", Lp = "ArrowRight", fx = "ArrowUp", Fp = "ArrowDown", yl = "Home", Bp = "End", ks = "active", jp = "fade", bl = "show", px = "dropdown", a_ = ".dropdown-toggle", hx = ".dropdown-menu", El = `:not(${a_})`, mx = '.list-group, .nav, [role="tablist"]', gx = ".nav-item, .list-group-item", vx = `.nav-link${El}, .list-group-item${El}, [role="tab"]${El}`, l_ = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', wl = `${vx}, ${l_}`, _x = `.${ks}[data-bs-toggle="tab"], .${ks}[data-bs-toggle="pill"], .${ks}[data-bs-toggle="list"]`;
class Vo extends fn {
  constructor(t) {
    super(t), this._parent = this._element.closest(mx), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), X.on(this._element, cx, (n) => this._keydown(n)));
  }
  // Getters
  static get NAME() {
    return nx;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), s = n ? X.trigger(n, ox, {
      relatedTarget: t
    }) : null;
    X.trigger(t, ix, {
      relatedTarget: n
    }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(n, t), this._activate(t, n));
  }
  // Private
  _activate(t, n) {
    if (!t)
      return;
    t.classList.add(ks), this._activate(ge.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(bl);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), X.trigger(t, ax, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(jp));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(ks), t.blur(), this._deactivate(ge.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(bl);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), X.trigger(t, rx, {
        relatedTarget: n
      });
    };
    this._queueCallback(s, t, t.classList.contains(jp));
  }
  _keydown(t) {
    if (![dx, Lp, fx, Fp, yl, Bp].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((o) => !us(o));
    let s;
    if ([yl, Bp].includes(t.key))
      s = n[t.key === yl ? 0 : n.length - 1];
    else {
      const o = [Lp, Fp].includes(t.key);
      s = mu(n, t.target, o, !0);
    }
    s && (s.focus({
      preventScroll: !0
    }), Vo.getOrCreateInstance(s).show());
  }
  _getChildren() {
    return ge.find(wl, this._parent);
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
    const n = ge.getElementFromSelector(t);
    n && (this._setAttributeIfNotExists(n, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, n) {
    const s = this._getOuterElement(t);
    if (!s.classList.contains(px))
      return;
    const o = (r, i) => {
      const a = ge.findOne(r, s);
      a && a.classList.toggle(i, n);
    };
    o(a_, ks), o(hx, bl), s.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, s) {
    t.hasAttribute(n) || t.setAttribute(n, s);
  }
  _elemIsActive(t) {
    return t.classList.contains(ks);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(wl) ? t : ge.findOne(wl, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(gx) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Vo.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
X.on(document, lx, l_, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !us(this) && Vo.getOrCreateInstance(this).show();
});
X.on(window, ux, () => {
  for (const e of ge.find(_x))
    Vo.getOrCreateInstance(e);
});
Jt(Vo);
const yx = "toast", bx = "bs.toast", gs = `.${bx}`, Ex = `mouseover${gs}`, wx = `mouseout${gs}`, Ax = `focusin${gs}`, Sx = `focusout${gs}`, Ox = `hide${gs}`, Cx = `hidden${gs}`, Tx = `show${gs}`, Nx = `shown${gs}`, Dx = "fade", Up = "hide", hi = "show", mi = "showing", xx = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, kx = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class ti extends fn {
  constructor(t, n) {
    super(t, n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return kx;
  }
  static get DefaultType() {
    return xx;
  }
  static get NAME() {
    return yx;
  }
  // Public
  show() {
    if (X.trigger(this._element, Tx).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(Dx);
    const n = () => {
      this._element.classList.remove(mi), X.trigger(this._element, Nx), this._maybeScheduleHide();
    };
    this._element.classList.remove(Up), Qr(this._element), this._element.classList.add(hi, mi), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || X.trigger(this._element, Ox).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(Up), this._element.classList.remove(mi, hi), X.trigger(this._element, Cx);
    };
    this._element.classList.add(mi), this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(hi), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(hi);
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
    X.on(this._element, Ex, (t) => this._onInteraction(t, !0)), X.on(this._element, wx, (t) => this._onInteraction(t, !1)), X.on(this._element, Ax, (t) => this._onInteraction(t, !0)), X.on(this._element, Sx, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ti.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Va(ti);
Jt(ti);
var Rx = Object.defineProperty, Ix = (e, t, n) => t in e ? Rx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nn = (e, t, n) => Ix(e, typeof t != "symbol" ? t + "" : t, n);
const Px = { class: "toast-header" }, Vx = ["textContent"], Mx = ["textContent"], Lx = { class: "toast-body" }, Fx = ["textContent"], Bx = /* @__PURE__ */ Te({
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
    const s = e, o = n, { visible: r, animation: i, autohide: a, delay: c } = cn(s), f = G(), u = G();
    Lt(r, (D) => {
      y();
    }, { immediate: !0 });
    function d() {
      f.value.show();
    }
    function m() {
      f.value.hide();
    }
    function p() {
      f.value.dispose();
    }
    function h() {
      f.value.isShown();
    }
    function v() {
      f.value.getOrCreateInstance();
    }
    function _() {
      f.value.getInstance();
    }
    function y() {
      f.value && (r.value === !0 ? d() : m());
    }
    function E() {
      o("hide", f.value);
    }
    function g() {
      o("hidden", f.value);
    }
    function T() {
      o("show", f.value);
    }
    async function I() {
      o("shown", f.value);
    }
    const C = { show: d, hide: m, dispose: p, isShown: h, getOrCreateInstance: v, getInstance: _ };
    return t({ ...C }), Ht(() => {
      u.value.addEventListener("hide.bs.toast", E), u.value.addEventListener("hidden.bs.toast", g), u.value.addEventListener("show.bs.toast", T), u.value.addEventListener("shown.bs.toast", I), f.value = new ti(u.value, {
        animation: i.value,
        autohide: a.value,
        delay: c.value
      }), y();
    }), (D, F) => (N(), P("div", {
      ref_key: "toastRef",
      ref: u,
      class: pe(["toast", [D.variant ? `text-bg-${D.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      Ie(D.$slots, "header", st(Ze({ ...C })), () => [
        l("div", Px, [
          Ie(D.$slots, "title", st(Ze({ ...C })), () => [
            l("strong", {
              class: "me-auto",
              textContent: j(D.title)
            }, null, 8, Vx)
          ], !0),
          Ie(D.$slots, "subtitle", st(Ze({ ...C })), () => [
            l("small", {
              textContent: j(D.subtitle)
            }, null, 8, Mx)
          ], !0),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: m
          })
        ])
      ], !0),
      Ie(D.$slots, "body", st(Ze({ ...C })), () => [
        l("div", Lx, [
          Ie(D.$slots, "default", st(Ze({ ...C })), () => [
            l("span", {
              textContent: j(D.body)
            }, null, 8, Fx)
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
}, c_ = /* @__PURE__ */ In(Bx, [["__scopeId", "data-v-c0cdbae8"]]);
function jx() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16);
  });
}
const Ux = { id: "toast-wrapper" };
let Hp;
const Hx = /* @__PURE__ */ Te({
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
    }, s = G(/* @__PURE__ */ new Map());
    Hp = (r, i = "top right") => {
      const a = jx(), c = { ...n, ...r, id: a };
      let f = s.value.get(i);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(c), s.value.set(i, f);
    };
    function o(r, i) {
      const a = s.value.get(r);
      a?.delete(i);
    }
    return t({ toast: Hp }), (r, i) => (N(), rt(Bo, { to: "body" }, [
      l("div", Ux, [
        (N(!0), P(we, null, Xe(s.value, ([a, c]) => (N(), P("div", {
          key: a,
          class: pe(["toast-group", `${a}`])
        }, [
          (N(!0), P(we, null, Xe(c, (f, u) => (N(), rt(c_, fs({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (d) => o(a, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), $x = /* @__PURE__ */ In(Hx, [["__scopeId", "data-v-786d1c50"]]), u_ = () => {
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
var kn = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(kn || {});
const Mo = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(kn).includes(n) || n == "" ? "" : `${t}${n}`;
}, Wx = { class: "modal-content" }, Kx = { class: "modal-header" }, zx = ["innerHTML"], qx = { class: "modal-body" }, Yx = ["innerHTML"], Xx = { class: "modal-footer" }, Gx = ["innerHTML"], Qx = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const Jx = /* @__PURE__ */ Te({
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
    size: { default: kn.STANDARD },
    btnSize: { default: kn.SMALL },
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
    } = cn(s), u = n, d = W(() => Mo(c.value, "modal-")), m = W(() => Mo(f.value, "btn-")), p = G();
    let h;
    const v = Rn(), _ = () => document.querySelectorAll(".modal.show").length, y = () => typeof window < "u" && window._managedModals ? window._managedModals : [], E = 1055, g = G(E), T = () => {
      const V = _();
      g.value = E + V;
    };
    let I;
    const C = u_();
    function D() {
      return new Promise((V, L) => {
        if (!p.value) return;
        C.removeStickyElements(), T(), p.value.classList.add("managed-modal");
        const $ = y(), J = $.length + 1, Oe = {
          element: p.value,
          priority: J,
          instance: v
        };
        $.push(Oe), p.value.addEventListener("shown.bs.modal", () => {
          S();
        }, { once: !0 }), h?.show(), I = V, u("onShown", h);
      });
    }
    function F(V = !0) {
      if (!p.value) return;
      const L = y(), $ = L.findIndex((J) => J.element === p.value);
      $ > -1 && L.splice($, 1), p.value.addEventListener("hidden.bs.modal", () => {
        p.value && (p.value.style.display = ""), S();
      }, { once: !0 }), h?.hide(), typeof I == "function" && I(V), u("onHidden", h), C.restoreStickyElements();
    }
    function O() {
      h?.toggle();
    }
    const S = () => {
      const V = y();
      if (V.length === 0) return;
      V.sort(($, J) => $.priority - J.priority);
      const L = V[V.length - 1];
      V.forEach(($) => {
        $.element !== L.element ? $.element.style.opacity = "0" : $.element.style.opacity = "1";
      });
    };
    Ht(() => {
      h = new Gs(p.value, {
        backdrop: o?.value,
        keyboard: r.value,
        focus: i.value
      }), p.value.classList.add("managed-modal"), ha(() => {
        s?.visible === !0 ? h?.show() : h?.hide();
      });
    });
    function R(V) {
      o?.value !== "static" && F(!1);
    }
    function w() {
      F(!1);
    }
    function x() {
      F(!1);
    }
    function ee() {
      F(!0);
    }
    t({
      modal: h,
      show: D,
      hide: F,
      toggle: O,
      onHeaderCloseClicked: w,
      onCancelClicked: x,
      onOkCLicked: ee
    });
    const ne = { show: D, hide: F, toggle: O, modal: h };
    return (V, L) => (N(), P("div", fs({
      ref_key: "modalElement",
      ref: p,
      class: "modal fade",
      tabindex: "-1"
    }, { ...V.$attrs }, {
      onClick: Om(R, ["self"]),
      style: { zIndex: g.value }
    }), [
      l("div", {
        class: pe(["modal-dialog", d.value])
      }, [
        l("div", Wx, [
          Ie(V.$slots, "header", st(Ze({ ...ne })), () => [
            l("div", Kx, [
              Ie(V.$slots, "title", st(Ze({ ...ne })), () => [
                l("h5", {
                  class: "modal-title",
                  innerHTML: V.title
                }, null, 8, zx)
              ], !0),
              Ie(V.$slots, "header-close-button", st(Ze({ ...ne })), () => [
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: w
                })
              ], !0)
            ])
          ], !0),
          l("div", qx, [
            Ie(V.$slots, "default", st(Ze({ ...ne })), () => [
              l("span", { innerHTML: V.body }, null, 8, Yx)
            ], !0)
          ]),
          l("div", Xx, [
            Ie(V.$slots, "footer", st(Ze({ ...ne })), () => [
              V.okOnly ? Ee("", !0) : (N(), P("button", {
                key: 0,
                type: "button",
                class: pe(["btn btn-secondary", m.value]),
                onClick: x
              }, [
                Ie(V.$slots, "button-cancel", st(Ze({ ...ne })), () => [
                  l("span", { innerHTML: V.textCancel }, null, 8, Gx)
                ], !0)
              ], 2)),
              l("button", {
                type: "button",
                class: pe(["btn btn-primary", m.value]),
                onClick: ee
              }, [
                Ie(V.$slots, "button-ok", st(Ze({ ...ne })), () => [
                  l("span", { innerHTML: V.textOk }, null, 8, Qx)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), d_ = /* @__PURE__ */ In(Jx, [["__scopeId", "data-v-b8ba4eaa"]]), Zx = /* @__PURE__ */ Te({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = G(void 0), s = G({});
    function o(i = {}) {
      var a;
      return i.okOnly = !1, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: o, alert: r }), (i, a) => (N(), rt(Bo, { to: "body" }, [
      ce(d_, fs({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), ek = {
  "data-header": "",
  class: "border-bottom"
}, tk = { class: "d-flex gap-2 p-2" }, nk = { class: "p-2" }, sk = {
  "data-footer": "",
  class: "border-top p-2"
}, ok = { class: "buttons" }, rk = /* @__PURE__ */ Te({
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
    size: { default: kn.STANDARD },
    btnSize: { default: kn.SMALL },
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, { backdrop: s, disableOutsideClick: o, modal: r, size: i, btnSize: a } = cn(n), c = () => document.querySelectorAll("dialog[open]").length, f = 1056, u = G(f), d = G(!1), m = G(!1), p = G(!1), h = G(), v = G(!1), _ = W(() => Mo(i.value, "modal-")), y = W(() => Mo(a.value, "btn-")), E = W(() => ({
      opening: d.value,
      closing: m.value,
      "no-backdrop": s.value === !1,
      static: v.value
    }));
    let g = null;
    const T = () => {
      const w = c();
      u.value = f + w;
    }, I = u_(), C = async () => (T(), I.removeStickyElements(), d.value = !0, h.value.addEventListener(
      "animationend",
      () => {
        d.value = !1, p.value = !0;
      },
      { once: !0 }
    ), r.value === !0 ? h.value.showModal() : h.value.show(), new Promise((w, x) => {
      g = w;
    })), D = async (w = !1) => {
      m.value = !0, h.value.addEventListener(
        "animationend",
        () => {
          h.value.close(), m.value = !1, p.value = !1, typeof g == "function" && g(w), g = null, I.restoreStickyElements();
        },
        { once: !0 }
      );
    }, F = async () => {
      p.value === !0 ? D() : C();
    }, O = () => {
      v.value = !0, setTimeout(() => {
        v.value = !1;
      }, 200);
    }, S = () => {
      if (s.value === "static" || o.value === !0) {
        O();
        return;
      }
      D(!1);
    };
    if (r.value === !0) {
      let w = function(ee) {
        if (s.value === "static" || o.value === !0) {
          O();
          return;
        }
        ee.target === h.value && D(!1);
      };
      const x = new AbortController();
      Ht(() => {
        document.addEventListener("click", (ee) => {
          w(ee);
        }, { signal: x.signal });
      }), $r(() => {
        x.abort();
      });
    }
    const R = { show: C, hide: D, toggle: F, dialog: h };
    return t({
      show: C,
      hide: D,
      toggle: F
    }), (w, x) => (N(), P("div", {
      class: "dialog-wrapper",
      style: Vt({ zIndex: u.value })
    }, [
      l("div", {
        class: "backdrop",
        onClick: S
      }),
      l("dialog", {
        ref_key: "dialog",
        ref: h,
        class: pe(E.value)
      }, [
        l("div", {
          class: pe(["content", _.value])
        }, [
          Ie(w.$slots, "header", st(Ze({ ...R })), () => [
            l("div", ek, [
              l("div", tk, [
                Ie(w.$slots, "title", st(Ze({ ...R })), () => [
                  Z(j(w.title), 1)
                ], !0),
                Ie(w.$slots, "header-close-button", {}, () => [
                  l("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: x[0] || (x[0] = (ee) => D(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          l("div", nk, [
            Ie(w.$slots, "default", st(Ze({ ...R })), () => [
              Z(j(w.body), 1)
            ], !0)
          ]),
          Ie(w.$slots, "footer", st(Ze({ ...R })), () => [
            l("div", sk, [
              l("div", ok, [
                w.okOnly ? Ee("", !0) : (N(), P("button", {
                  key: 0,
                  type: "button",
                  class: pe(["btn btn-secondary", y.value]),
                  onClick: x[1] || (x[1] = (ee) => D(!1))
                }, [
                  Ie(w.$slots, "textCancel", st(Ze({ ...R })), () => [
                    Z(j(w.textCancel), 1)
                  ], !0)
                ], 2)),
                l("button", {
                  type: "button",
                  class: pe(["btn btn-primary", y.value]),
                  onClick: x[2] || (x[2] = (ee) => D(!0))
                }, [
                  Ie(w.$slots, "textOk", st(Ze({ ...R })), () => [
                    Z(j(w.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), f_ = /* @__PURE__ */ In(rk, [["__scopeId", "data-v-0990c791"]]), ik = /* @__PURE__ */ Te({
  __name: "DialogManager",
  setup(e, { expose: t }) {
    const n = G(void 0), s = G({});
    function o(i = {}) {
      var a;
      return i.okOnly = !1, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, s.value = i, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: o, alert: r }), (i, a) => (N(), rt(Bo, { to: "body" }, [
      ce(f_, fs({
        ref_key: "modalRef",
        ref: n
      }, { ...s.value }), null, 16)
    ]));
  }
}), ak = { "data-first": "" }, lk = ["disabled", "innerHTML"], ck = { "data-prev": "" }, uk = ["disabled", "innerHTML"], dk = { key: 0 }, fk = ["innerHTML"], pk = ["onClick"], hk = { "data-next": "" }, mk = ["disabled", "innerHTML"], gk = { "data-last": "" }, vk = ["disabled", "innerHTML"], _k = /* @__PURE__ */ Te({
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
    size: { default: kn.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    function n(g, T = 0) {
      return [...Array(g).keys()].map((I) => I + T);
    }
    const s = t, o = e, { modelValue: r, maxVisibleButtons: i, hideEllipsis: a } = cn(o), c = Math.floor(i.value / 2), f = W(() => {
      let g = i.value, T = r.value <= c ? 1 : r.value - c;
      return r.value >= m.value - c && (T = m.value - g + 1), T < 1 && (T = 1), m.value < g && (g = m.value), n(g, T);
    }), u = W(() => r.value <= 1), d = W(() => r.value >= m.value), m = W(() => {
      const { perPage: g, totalItems: T } = o;
      return Math.ceil(T / g);
    });
    ha(() => {
      m.value > 0 && r.value > m.value && s("update:modelValue", m.value);
    });
    function p(g) {
      const T = i.value - 1;
      return !(a.value === !0 || g === 0 && r.value - c - 1 <= 0 || g === T && r.value + c >= m.value || g > 0 && g < T);
    }
    function h(g) {
      g < 1 && (g = 1), g > m.value && (g = m.value), s("update:modelValue", g);
    }
    function v() {
      s("update:modelValue", 1);
    }
    function _() {
      s("update:modelValue", m.value);
    }
    function y() {
      let g = r.value - 1;
      g < 1 && (g = 1), s("update:modelValue", g);
    }
    function E() {
      let g = r.value + 1;
      g > m.value && (g = m.value), s("update:modelValue", g);
    }
    return (g, T) => (N(), P("ul", {
      class: pe(["pagination", g.size])
    }, [
      l("li", ak, [
        l("button", {
          class: "",
          disabled: u.value,
          innerHTML: g.firstText,
          onClick: v
        }, null, 8, lk)
      ]),
      l("li", ck, [
        l("button", {
          class: "",
          disabled: u.value,
          innerHTML: g.prevText,
          onClick: y
        }, null, 8, uk)
      ]),
      (N(!0), P(we, null, Xe(f.value, (I, C) => (N(), P(we, null, [
        p(C) ? (N(), P("li", dk, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: g.ellipsisText
          }, null, 8, fk)
        ])) : (N(), P("li", {
          key: 1,
          "data-prev": "",
          class: pe({ active: g.modelValue === I })
        }, [
          l("button", {
            class: "",
            onClick: (D) => h(I)
          }, j(I), 9, pk)
        ], 2))
      ], 64))), 256)),
      l("li", hk, [
        l("button", {
          class: "",
          disabled: d.value,
          innerHTML: g.nextText,
          onClick: E
        }, null, 8, mk)
      ]),
      l("li", gk, [
        l("button", {
          class: "",
          disabled: d.value,
          innerHTML: g.lastText,
          onClick: _
        }, null, 8, vk)
      ])
    ], 2));
  }
}), yk = /* @__PURE__ */ In(_k, [["__scopeId", "data-v-2bfd7085"]]), bk = { class: "d-inline" }, Ek = { class: "fw-bold" }, wk = /* @__PURE__ */ Te({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = cn(n), r = W({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => {
      const c = Je("b-dropdown-item"), f = Je("b-dropdown");
      return N(), rt(f, fs({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: be(() => [
          l("div", bk, [
            Ie(i.$slots, "default", { selected: r.value }, () => [
              a[0] || (a[0] = l("span", null, "Per page: ", -1)),
              l("span", Ek, j(r.value), 1)
            ])
          ])
        ]),
        default: be(() => [
          (N(!0), P(we, null, Xe(ae(o), (u, d) => (N(), rt(c, {
            key: u,
            onClick: (m) => r.value = u,
            active: u === i.modelValue
          }, {
            default: be(() => [
              Z(j(u), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), Ak = ["value"], Sk = /* @__PURE__ */ Te({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, { options: o } = cn(n), r = W({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, a) => et((N(), P("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (c) => r.value = c)
    }, [
      (N(!0), P(we, null, Xe(ae(o), (c, f) => (N(), P("option", {
        key: c,
        value: c
      }, j(c), 9, Ak))), 128))
    ], 512)), [
      [Hn, r.value]
    ]);
  }
});
var Cs = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(Cs || {});
class Ok {
  constructor(t, n = "ASC", s) {
    nn(this, "key"), nn(this, "direction"), nn(this, "sortFn"), this.key = t, this.direction = n, this.sortFn = s;
  }
}
const $p = (e, t) => {
  const n = (a, c) => {
    let f = typeof a, u = typeof c;
    return f == "number" && f == u;
  }, s = (a, c) => a - c, o = (a, c) => (a = a ?? "", c = c ?? "", a.localeCompare(c)), r = (a, c) => n(a, c) ? s : o, i = [...t];
  return i.sort((a, c) => {
    let f = 0;
    for (let u of e) {
      let { key: d, direction: m, sortFn: p } = u, h = m === "ASC" ? 1 : -1, v = a[d], _ = c[d];
      if (p = typeof p == "function" ? p : r(v, _), f = p(v, _, a, c, t, u, h) * h, f !== 0) return f;
    }
    return f;
  }), i;
}, Ck = ["onClick"], Tk = { class: "th-wrapper" }, Nk = {
  key: 0,
  "data-sort-indicator": ""
}, Dk = { class: "sort-index" }, xk = { class: "sort-direction" }, kk = ["onMouseover"], Rk = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Ik = ["colspan"], Pk = ["innerHTML"];
class Al {
  constructor(t = "", n = "", s = !1, o) {
    nn(this, "key"), nn(this, "label"), nn(this, "sortable"), nn(this, "sortFn"), this.key = t, this.label = n, this.sortable = s, this.sortFn = o;
  }
}
const Vk = /* @__PURE__ */ Te({
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
    const n = (v) => {
      let _ = [];
      for (const y of v)
        _ = _.concat(Object.keys(y));
      return _ = _.filter((y, E) => _.indexOf(y) == E), _;
    }, s = t, o = e, r = G([]), { fields: i, items: a } = cn(o), c = W(() => {
      if (o.externalSort || r.value.length == 0) return o.items;
      const v = [...o.items];
      return $p(r.value, v);
    }), f = W(() => {
      let v = i.value, _ = [];
      return v.length === 0 && (v = n([...a.value])), v.reduce((y, E, g) => {
        if (typeof E == "string")
          y.push(new Al(E, E));
        else if (E instanceof Al)
          y.push(E);
        else if (typeof E == "object") {
          const { key: T, label: I, sortable: C, sortFn: D } = E;
          y.push(new Al(T, I, C, D));
        }
        return y;
      }, _);
    });
    function u(v) {
      const _ = r.value.findIndex((y) => y.key === v.key);
      return _ < 0 ? "" : _ + 1;
    }
    function d(v) {
      const _ = r.value.findIndex((E) => E.key === v.key);
      if (_ < 0) return "fas fa-sort";
      const y = r.value[_];
      return y.direction === Cs.ASC ? "fas fa-sort-up" : y.direction === Cs.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function m(v) {
      const { key: _ } = v, y = r.value.findIndex((E) => E.key === _);
      if (y < 0) {
        const E = new Ok(_, Cs.ASC, v.sortFn);
        r.value.push(E);
      } else {
        const E = r.value[y], g = E.direction;
        g === Cs.ASC ? E.direction = Cs.DESC : g === Cs.DESC && r.value.splice(y, 1);
      }
      s("sort", r.value, $p);
    }
    function p(v, _, y, E) {
      s("onMouseOverCell", v, _, y, E);
    }
    let h = G(null);
    return Ht(() => {
      h.value = Rn();
    }), (v, _) => (N(), P("table", fs({ ...v.$attrs }, {
      class: { striped: v.striped, hover: v.hover }
    }), [
      l("thead", null, [
        (N(!0), P(we, null, Xe(f.value, (y) => (N(), P("th", {
          key: `thead-${y.key}`,
          class: pe({ sortable: y.sortable }),
          onClick: (E) => y.sortable && m(y)
        }, [
          l("span", Tk, [
            Ie(v.$slots, `head(${y.key})`, {
              field: y,
              data: ae(h),
              value: y.label
            }, () => [
              Z(j(y.label), 1)
            ], !0),
            y.sortable ? (N(), P("span", Nk, [
              l("span", Dk, j(u(y)), 1),
              l("span", xk, [
                l("i", {
                  class: pe(d(y))
                }, null, 2)
              ])
            ])) : Ee("", !0)
          ])
        ], 10, Ck))), 128))
      ]),
      l("tbody", null, [
        (N(!0), P(we, null, Xe(c.value, (y, E) => (N(), P(we, {
          key: `trow-${y?.id ?? E}`
        }, [
          Ie(v.$slots, "row", {
            item: y,
            index: E,
            colspan: f.value.length
          }, void 0, !0),
          l("tr", null, [
            (N(!0), P(we, null, Xe(f.value, (g) => (N(), P("td", {
              key: `tcell-${g.key + (y?.id ?? E)}`,
              class: pe({ [`tcell-${g?.key}`]: !0 }),
              onMouseover: (T) => p(T, y, E, g)
            }, [
              Ie(v.$slots, `cell(${g?.key})`, {
                data: ae(h),
                item: y,
                field: g,
                value: y[g?.key]
              }, () => [
                Z(j(y[g?.key]), 1)
              ], !0)
            ], 42, kk))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        Ie(v.$slots, "footer", { data: ae(h) }, void 0, !0)
      ]),
      v.showEmpty && c.value.length === 0 ? (N(), P("tr", Rk, [
        l("td", {
          colspan: f.value.length
        }, [
          Ie(v.$slots, "empty", {
            items: c.value,
            data: ae(h),
            fields: f.value
          }, () => [
            l("span", { innerHTML: v.emptyText }, null, 8, Pk)
          ], !0)
        ], 8, Ik)
      ])) : Ee("", !0)
    ], 16));
  }
}), Mk = /* @__PURE__ */ In(Vk, [["__scopeId", "data-v-b1e9b5de"]]);
var p_ = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(p_ || {});
const Lk = { class: "d-inline-block position-relative" }, Fk = ["disabled"], Wp = "data-prevent-close", Bk = /* @__PURE__ */ Te({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: p_.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    menuEnd: { type: Boolean, default: !1 },
    size: { default: kn.STANDARD },
    disabled: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: t, emit: n }) {
    const s = G(), o = e, r = G(), i = G(!1), a = G(o.variant), c = G(o.centered), f = G(o.dropup), u = G(o.dropend), d = G(o.dropstart), m = G(o.menuEnd), p = n, h = W(() => {
      const F = [];
      return a != null && a.value && F.push(`btn-${a.value}`), o.size && F.push(`btn-${o.size}`), F;
    }), v = W(() => {
      const F = [];
      return c != null && c.value && F.push("dropdown-center"), f != null && f.value && F.push("dropup"), d != null && d.value && F.push("dropstart"), !(d != null && d.value) && u != null && u.value && F.push("dropend"), F.length === 0 && F.push("dropdown"), F.unshift("btn-group"), F;
    }), _ = W(() => {
      const F = [];
      return i.value && F.push("show"), m.value && F.push("dropdown-menu-end"), F;
    }), y = () => {
      if (!i.value) return;
      const F = r.value.getBoundingClientRect(), O = s.value.getBoundingClientRect(), S = window.innerHeight - F.bottom, R = F.top, w = window.innerWidth - F.right, x = F.left;
      f.value = S < O.height && R >= O.height, m.value = w < O.width && x >= O.width;
    };
    async function E() {
      i.value = !0, await wo(), y();
    }
    function g() {
      i.value = !1;
    }
    function T(F) {
      i.value ? g() : E();
    }
    function I(F) {
      const { target: O } = F;
      O?.closest(`[${Wp}],[${Wp}=true]`) || g();
    }
    function C() {
      i.value && g();
    }
    Lt(i, (F, O) => {
      typeof O > "u" || F !== O && (p("toggle", { show: F }), F === !0 ? p("open", { show: F }) : p("close", { show: F }));
    }, { immediate: !0 });
    const D = {
      show: i,
      disabled: o.disabled,
      buttonClasses: h,
      onButtonClicked: T,
      onMenuClicked: I,
      onClickOutside: C,
      open: E,
      close: g
    };
    return t({
      ...D
    }), (F, O) => {
      const S = eb("click-outside");
      return N(), P("div", {
        ref_key: "dropDownRef",
        ref: r,
        class: pe([v.value, "dropdown-wrapper"])
      }, [
        et((N(), P("div", Lk, [
          Ie(F.$slots, "header", st(Ze({ ...D })), () => [
            l("button", {
              class: pe(["btn dropdown-toggle", h.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: T,
              disabled: F.disabled
            }, [
              Ie(F.$slots, "button", st(Ze({ ...D })), () => [
                Z(j(F.text), 1)
              ], !0)
            ], 10, Fk)
          ], !0),
          l("ul", {
            ref_key: "dropDownMenuRef",
            ref: s,
            class: pe(["dropdown-menu", _.value]),
            onClick: I
          }, [
            Ie(F.$slots, "default", st(Ze({ ...D })), void 0, !0)
          ], 2)
        ])), [
          [S, C]
        ])
      ], 2);
    };
  }
}), jk = /* @__PURE__ */ In(Bk, [["__scopeId", "data-v-4910c394"]]), Uk = ["data-prevent-close"], Hk = /* @__PURE__ */ Te({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = cn(t);
    return (s, o) => (N(), P("li", {
      "data-prevent-close": ae(n) ? "" : null
    }, [
      l("span", {
        class: pe(["dropdown-item", { active: s.active }]),
        role: "button",
        tabindex: "0"
      }, [
        Ie(s.$slots, "default")
      ], 2)
    ], 8, Uk));
  }
}), $k = {}, Wk = { "data-prevent-close": "" }, Kk = { class: "dropdown-header" };
function zk(e, t) {
  return N(), P("li", Wk, [
    l("h6", Kk, [
      Ie(e.$slots, "default")
    ])
  ]);
}
const qk = /* @__PURE__ */ In($k, [["render", zk]]), Yk = {};
function Xk(e, t) {
  return N(), P("li", null, t[0] || (t[0] = [
    l("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const Gk = /* @__PURE__ */ In(Yk, [["render", Xk]]), Qk = {
  mounted(e, t, n, s) {
    new Zs(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Jk = (e, t) => {
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
}, Zk = {
  mounted(e, t, n, s) {
    const o = t.value;
    Jk(e, o);
  }
};
class vc {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
nn(vc, "list", /* @__PURE__ */ new Set());
const eR = { class: "drawer-content" }, tR = { class: "drawer-header" }, nR = ["innerHTML"], sR = { class: "drawer-body" }, oR = ["innerHTML"], rR = { class: "drawer-footer" }, iR = ["innerHTML"], aR = ["innerHTML"], lR = /* @__PURE__ */ Te({
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
    size: { default: kn.STANDARD },
    btnSize: { default: kn.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: s,
      keyboard: o,
      focus: r,
      size: i,
      btnSize: a
    } = cn(n), c = W(() => Mo(i.value, "drawer-")), f = W(() => Mo(a.value, "btn-")), u = G(), d = G(!1), m = Rn();
    let p;
    async function h() {
      return d.value === !0 ? void 0 : new Promise((C, D) => {
        d.value = !0, p = C;
      });
    }
    function v(C = !0) {
      d.value = !1, typeof p == "function" && p(C);
    }
    function _() {
      d.value === !0 ? h() : v(!1);
    }
    function y(C) {
      s?.value !== "static" && v(!1);
    }
    function E() {
      v(!1);
    }
    function g() {
      v(!1);
    }
    function T() {
      v(!0);
    }
    function I() {
      d.value === !0 ? vc.add(m) : vc.delete(m);
    }
    return t({
      show: h,
      hide: v,
      toggle: _
    }), (C, D) => (N(), rt(aE, {
      onBeforeEnter: I,
      onAfterLeave: I
    }, {
      default: be(() => [
        d.value ? (N(), P("div", fs({
          key: 0,
          ref_key: "drawerElement",
          ref: u,
          class: "drawer",
          tabindex: "-1"
        }, { ...C.$attrs }, {
          onClick: Om(y, ["self"])
        }), [
          l("div", {
            class: pe(["drawer-dialog", c.value])
          }, [
            l("div", eR, [
              l("div", tR, [
                Ie(C.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: C.title
                  }, null, 8, nR)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: E
                })
              ]),
              l("div", sR, [
                Ie(C.$slots, "default", {}, () => [
                  l("span", { innerHTML: C.body }, null, 8, oR)
                ], !0)
              ]),
              l("div", rR, [
                Ie(C.$slots, "footer", {}, () => [
                  C.okOnly ? Ee("", !0) : (N(), P("button", {
                    key: 0,
                    type: "button",
                    class: pe(["ms-auto btn btn-secondary", f.value]),
                    onClick: g
                  }, [
                    Ie(C.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: C.textCancel }, null, 8, iR)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: pe(["btn btn-primary", f.value]),
                    onClick: T
                  }, [
                    Ie(C.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: C.textOk }, null, 8, aR)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : Ee("", !0)
      ]),
      _: 3
    }));
  }
}), cR = /* @__PURE__ */ In(lR, [["__scopeId", "data-v-2e49e8cb"]]), Wt = "b", h_ = "$toaster", m_ = "$modalManager", uR = "$dialogManager";
class g_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ya(Zx).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
nn(g_, "component");
class v_ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ya(ik).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
nn(v_, "component");
class __ {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ya($x).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
nn(__, "component");
function y_() {
  return _t(h_);
}
function dR() {
  return _t(m_);
}
function fR(e) {
  e.component(`${Wt}-drawer`, cR), e.component(`${Wt}-modal`, d_), e.component(`${Wt}-dialog`, f_), e.component(`${Wt}-pagination`, yk), e.component(`${Wt}-pagination-dropdown`, wk), e.component(`${Wt}-pagination-select`, Sk), e.component(`${Wt}-dropdown`, jk), e.component(`${Wt}-dropdown-item`, Hk), e.component(`${Wt}-dropdown-header`, qk), e.component(`${Wt}-dropdown-divider`, Gk), e.component(`${Wt}-table`, Mk), e.component(`${Wt}-toast`, c_);
}
function pR(e) {
  e.directive("tooltip", Qk), e.directive("click-outside", Zk);
}
const hR = {
  install(e) {
    fR(e), pR(e);
    const t = __.getComponent(), n = g_.getComponent(), s = v_.getComponent();
    e.provide(h_, t), e.provide(m_, n), e.provide(uR, s);
  }
}, qo = /* @__PURE__ */ ps("settings", () => {
  const e = Xr(), t = y_(), n = Hs({
    fhir_system: null,
    fhir_systems: [],
    mapping_resources: [],
    selected_mapping_resources: [],
    selected_custom_mapping_resources: []
  }), s = G(null), o = G([]), r = G([]), i = Hs({
    fetch: !1,
    save: !1
  }), a = async () => {
    try {
      i.fetch = !0;
      const v = (await Ye.getProjectSettings()).data ?? {};
      Object.assign(n, v), s.value = n.fhir_system, o.value = [...n.selected_mapping_resources], r.value = [...n.selected_custom_mapping_resources];
    } catch (h) {
      e.addError(h, "settingsStore"), console.error("Failed to load project settings:", h);
    } finally {
      i.fetch = !1;
    }
  }, c = (h, v) => {
    const _ = { name: h, resourceSpec: v, type: "predefined" };
    o.value.push(_);
  }, f = (h, v) => {
    const _ = {
      name: h,
      resourceSpec: v,
      type: "custom"
    };
    r.value.push(_);
  }, u = (h, v) => {
    if (v === "predefined") {
      const _ = o.value.findIndex((y) => y.name === h.name && y.resourceSpec === h.resourceSpec);
      _ > -1 && o.value.splice(_, 1);
    } else {
      const _ = r.value.findIndex((y) => y.name === h.name && y.resourceSpec === h.resourceSpec);
      _ > -1 && r.value.splice(_, 1);
    }
  }, d = (h) => {
    s.value = h;
  }, m = async () => {
    try {
      i.save = !0;
      const h = {
        fhir_system: s.value,
        selected_mapping_resources: o.value,
        selected_custom_mapping_resources: r.value
      }, v = await Ye.updateProjectSettings(h);
      v.data.sync_results && p(v.data.sync_results), await a();
    } catch (h) {
      throw e.addError(h, "settingsStore"), console.error("Failed to save project settings:", h), h;
    } finally {
      i.save = !1;
    }
  }, p = (h) => {
    const {
      resources_added: v,
      resources_modified: _,
      resources_removed: y,
      tasks_created: E,
      total_mrns: g,
      error: T
    } = h;
    if (T) {
      t.toast({
        title: "Sync Warning",
        body: `Settings saved but sync failed: ${T}`,
        variant: "warning",
        delay: 8e3
      });
      return;
    }
    if (v + _ + y === 0)
      return;
    const C = [];
    v > 0 && C.push(`${v} added`), _ > 0 && C.push(`${_} modified`), y > 0 && C.push(`${y} removed`);
    const D = "Resources Synchronized", F = `${C.join(", ")}. Created ${E} tasks for ${g} patients.`;
    t.toast({
      title: D,
      body: F,
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
    addPredefinedResource: c,
    addCustomResource: f,
    removeResource: u,
    updateSelectedFhirSystem: d,
    saveProjectSettings: m
  };
}), xe = {
  Pending: "Pending",
  Fetching: "Fetching",
  Completed: "Completed",
  Failed: "Failed",
  Outdated: "Outdated",
  Deleted: "Deleted"
}, vs = /* @__PURE__ */ ps("monitor", () => {
  const e = Xr(), t = G(!1), n = G([]), s = G([]), o = G(null), r = G(!1), i = G({
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
      const V = await Ye.listMrns(i.value.page, i.value.limit);
      V.data.data && V.data.pagination ? (n.value = V.data.data, i.value.total = V.data.pagination.total, i.value.totalPages = V.data.pagination.total_pages, i.value.hasNext = V.data.pagination.has_next, i.value.hasPrevious = V.data.pagination.has_previous, V.data.project_summary && (o.value = V.data.project_summary)) : n.value = V.data, s.value = [];
    } catch (V) {
      e.addError(V, "monitorStore"), console.error("Failed to load MRNs:", V), n.value = [];
    } finally {
      t.value = !1;
    }
  }, c = async (V) => {
    try {
      await Ye.addMrn(V), await a();
    } catch (L) {
      e.addError(L, "monitorStore"), console.error("Failed to add MRN:", L);
    }
  }, f = async (V) => {
  }, u = async () => {
    try {
      t.value = !0;
      for (const V of s.value)
        await f(V);
    } catch (V) {
      e.addError(V, "monitorStore"), console.error("Failed to fetch selected MRNs:", V);
    } finally {
      t.value = !1;
    }
  }, d = W(() => n.value.length > 0 && s.value.length === n.value.length), m = W(() => s.value.length > 0 && s.value.length < n.value.length), p = () => {
    d.value ? s.value = [] : s.value = n.value.map((V) => V.id);
  }, h = (V) => {
    const L = s.value.indexOf(V);
    L === -1 ? s.value.push(V) : s.value.splice(L, 1);
  }, v = (V) => {
    i.value.page = V, a();
  }, _ = (V) => {
    i.value.limit = V, i.value.page = 1, a();
  }, y = async (V) => {
    try {
      return (await Ye.getMrnResources(V)).data;
    } catch (L) {
      return e.addError(L, "monitorStore"), console.error(`Failed to get resource status for MRN ${V}:`, L), { mrn: V, resources: [], total_resources: 0 };
    }
  }, E = async () => {
    try {
      const V = await Ye.getProjectSummary();
      return o.value = V.data, V.data;
    } catch (V) {
      return e.addError(V, "monitorStore"), console.error("Failed to get project summary:", V), null;
    }
  }, g = async (V, L) => {
    try {
      r.value = !0;
      const $ = await Ye.triggerFetchMrns(V, L);
      return await a(), $.data;
    } catch ($) {
      throw e.addError($, "monitorStore"), console.error("Failed to trigger fetch:", $), $;
    } finally {
      r.value = !1;
    }
  }, T = async (V) => {
    const L = n.value.filter(($) => s.value.includes($.id)).map(($) => $.mrn);
    if (L.length === 0)
      throw new Error("No MRNs selected");
    return await g(L, V);
  }, I = async () => {
    try {
      r.value = !0;
      const V = await Ye.performFullSync();
      return await a(), await E(), V.data;
    } catch (V) {
      throw e.addError(V, "monitorStore"), console.error("Failed to perform full sync:", V), V;
    } finally {
      r.value = !1;
    }
  }, C = async (V, L, $) => {
    try {
      const J = await Ye.retryFailedResource(V, L, $);
      return await a(), J.data;
    } catch (J) {
      throw e.addError(J, "monitorStore"), console.error("Failed to retry resource:", J), J;
    }
  }, D = async (V) => {
    try {
      r.value = !0;
      const L = await Ye.bulkRetryFailed(V);
      return await a(), L.data;
    } catch (L) {
      throw e.addError(L, "monitorStore"), console.error("Failed to bulk retry failed resources:", L), L;
    } finally {
      r.value = !1;
    }
  }, F = (V) => {
    if (V.status_summary)
      return V.status_summary.smart_status_display;
    const L = V.resources.filter((Ne) => Ne.status !== xe.Deleted), $ = L.length, J = L.filter((Ne) => Ne.status === xe.Completed).length;
    if ($ === 0) return "No Resources";
    if (J === $) return "Completed";
    const Oe = J / $ * 100;
    if (Oe >= 75) return `Mostly Completed (${Math.round(Oe)}%)`;
    if (Oe >= 25) return `Mixed Progress (${Math.round(Oe)}%)`;
    if (Oe > 0) return `Starting (${Math.round(Oe)}%)`;
    const Re = {};
    return L.forEach((Ne) => {
      Re[Ne.status] = (Re[Ne.status] || 0) + 1;
    }), Object.keys(Re).reduce((Ne, nt) => Re[Ne] > Re[nt] ? Ne : nt, xe.Pending);
  }, O = (V) => {
    if (V.status_summary)
      return V.status_summary.overall_status;
    const L = V.resources.filter((J) => J.status !== xe.Deleted);
    if (L.length === 0) return xe.Pending;
    const $ = {};
    return L.forEach((J) => {
      $[J.status] = ($[J.status] || 0) + 1;
    }), Object.keys($).reduce((J, Oe) => $[J] > $[Oe] ? J : Oe, xe.Pending);
  }, S = (V) => {
    if (V.status_summary)
      return V.status_summary.archive_button_config;
    const L = V.resources.filter((Oe) => Oe.status !== xe.Deleted), $ = L.filter((Oe) => Oe.status === xe.Completed).length, J = L.length;
    return $ === 0 ? {
      variant: "secondary",
      disabled: !0,
      tooltip: "No completed resources to archive",
      text: "Archive"
    } : $ === J ? {
      variant: "success",
      disabled: !1,
      tooltip: `Archive all ${$} completed resources`,
      text: "Archive All"
    } : {
      variant: "outline-success",
      disabled: !1,
      tooltip: `Archive ${$} of ${J} completed resources`,
      text: "Archive Available"
    };
  }, R = (V) => V.status_summary ? V.status_summary.has_archivable_resources : V.resources.some((L) => L.status === xe.Completed), w = (V) => {
    if (V.status_summary)
      return V.status_summary.progress_bar_config;
    const L = V.resources.filter((Ae) => Ae.status !== xe.Deleted), $ = L.length;
    if ($ === 0)
      return { segments: [], completion_percentage: 0, total_resources: 0 };
    const J = {};
    L.forEach((Ae) => {
      J[Ae.status] = (J[Ae.status] || 0) + 1;
    });
    const Oe = Object.entries(J).map(([Ae, Ne]) => ({
      status: Ae,
      count: Ne,
      percentage: Math.round(Ne / $ * 100 * 10) / 10,
      color: ne(Ae)
    })), Re = J[xe.Completed] || 0;
    return {
      segments: Oe,
      completion_percentage: Math.round(Re / $ * 100 * 10) / 10,
      total_resources: $
    };
  }, x = (V) => {
    if (V.status_summary)
      return V.status_summary.available_resource_types;
    const L = /* @__PURE__ */ new Set();
    return V.resources.filter(($) => $.status === xe.Completed).forEach(($) => L.add($.name)), Array.from(L).sort();
  }, ee = (V, L) => {
    if (V.status_summary?.resource_type_statuses[L])
      return V.status_summary.resource_type_statuses[L];
    const $ = V.resources.filter(
      (Ae) => Ae.name === L && Ae.status !== xe.Deleted
    );
    if ($.length === 0) return null;
    const J = $.reduce((Ae, Ne) => (Ae[Ne.status] = (Ae[Ne.status] || 0) + 1, Ae), {}), Oe = J[xe.Completed] || 0, Re = $.length;
    return {
      total_count: Re,
      completed_count: Oe,
      failed_count: J[xe.Failed] || 0,
      pending_count: J[xe.Pending] || 0,
      fetching_count: J[xe.Fetching] || 0,
      outdated_count: J[xe.Outdated] || 0,
      has_completed: Oe > 0,
      completion_percentage: Re > 0 ? Oe / Re * 100 : 0,
      is_archivable: Oe > 0
    };
  }, ne = (V) => {
    switch (V) {
      case xe.Completed:
        return "success";
      case xe.Failed:
        return "danger";
      case xe.Fetching:
        return "info";
      case xe.Pending:
        return "warning";
      case xe.Outdated:
        return "secondary";
      case xe.Deleted:
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
    indeterminate: m,
    // Basic methods
    fetchMrns: a,
    addMrn: c,
    fetchMrn: f,
    fetchSelected: u,
    toggleSelectAll: p,
    toggleSelection: h,
    setPage: v,
    setLimit: _,
    // Enhanced resource management
    getResourceStatus: y,
    getProjectSummary: E,
    triggerFetchMrns: g,
    triggerFetchSelected: T,
    performFullSync: I,
    retryFailedResource: C,
    bulkRetryFailed: D,
    // Enhanced status methods
    getSmartStatusDisplay: F,
    getStatusForStyling: O,
    getArchiveButtonConfig: S,
    hasArchivableResources: R,
    getProgressBarConfig: w,
    getAvailableResourceTypesForArchive: x,
    getResourceTypeStatus: ee,
    getStatusColor: ne
  };
}), mR = "data:image/png;base64,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", gR = { class: "home-page" }, vR = { class: "hero-section text-center mb-5" }, _R = { class: "d-flex flex-column gap-2 align-items-center" }, yR = ["src"], bR = { class: "features-section mb-5" }, ER = { class: "row g-4" }, wR = { class: "col-md-6 col-lg-3" }, AR = { class: "card h-100 border-0 shadow-sm" }, SR = { class: "card-body text-center d-flex flex-column" }, OR = { class: "col-md-6 col-lg-3" }, CR = { class: "card h-100 border-0 shadow-sm" }, TR = { class: "card-body text-center d-flex flex-column" }, NR = { class: "col-md-6 col-lg-3" }, DR = { class: "card h-100 border-0 shadow-sm" }, xR = { class: "card-body text-center d-flex flex-column" }, kR = { class: "col-md-6 col-lg-3" }, RR = { class: "card h-100 border-0 shadow-sm" }, IR = { class: "card-body text-center d-flex flex-column" }, PR = { class: "getting-started-section mb-5" }, VR = { class: "row align-items-center" }, MR = { class: "col-lg-8 mx-auto" }, LR = { class: "workflow-steps" }, FR = { class: "step d-flex align-items-center mb-4" }, BR = { class: "step-content flex-grow-1" }, jR = { class: "step d-flex align-items-center mb-4" }, UR = { class: "step-content flex-grow-1" }, HR = { class: "step d-flex align-items-center mb-4" }, $R = { class: "step-content flex-grow-1" }, WR = { class: "step d-flex align-items-center mb-4" }, KR = { class: "step-content flex-grow-1" }, zR = { class: "step d-flex align-items-center" }, qR = { class: "step-content flex-grow-1" }, YR = {
  key: 0,
  class: "status-section"
}, XR = { class: "row g-4 mb-4" }, GR = { class: "col-md-3 col-sm-6" }, QR = { class: "stat-card card border-0 bg-primary text-white text-center h-100" }, JR = { class: "card-body" }, ZR = { class: "mb-1" }, e2 = { class: "col-md-3 col-sm-6" }, t2 = { class: "stat-card card border-0 bg-secondary text-white text-center h-100" }, n2 = { class: "card-body" }, s2 = { class: "mb-1" }, o2 = { class: "col-md-3 col-sm-6" }, r2 = { class: "stat-card card border-0 bg-dark text-white text-center h-100" }, i2 = { class: "card-body" }, a2 = { class: "mb-1" }, l2 = { class: "col-md-3 col-sm-6" }, c2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, u2 = { class: "card-body" }, d2 = { class: "mb-1" }, f2 = { class: "row g-4" }, p2 = { class: "col-md-3 col-sm-6" }, h2 = { class: "stat-card card border-0 bg-success text-white text-center h-100" }, m2 = { class: "card-body" }, g2 = { class: "mb-1" }, v2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, _2 = { class: "col-md-3 col-sm-6" }, y2 = { class: "stat-card card border-0 bg-danger text-white text-center h-100" }, b2 = { class: "card-body" }, E2 = { class: "mb-1" }, w2 = {
  key: 0,
  class: "mb-0",
  style: { "font-size": "0.8rem", opacity: "0.9" }
}, A2 = { class: "col-md-3 col-sm-6" }, S2 = { class: "stat-card card border-0 bg-info text-white text-center h-100" }, O2 = { class: "card-body" }, C2 = { class: "mb-1" }, T2 = { class: "col-md-3 col-sm-6" }, N2 = { class: "stat-card card border-0 bg-warning text-white text-center h-100" }, D2 = { class: "card-body" }, x2 = { class: "mb-1" }, k2 = {
  key: 0,
  class: "mt-4 text-center"
}, R2 = {
  class: "btn-group gap-2",
  role: "group"
}, I2 = {
  key: 1,
  class: "alert alert-info text-center"
}, P2 = /* @__PURE__ */ Te({
  __name: "HomePage",
  setup(e) {
    const t = qo(), n = vs(), {
      selectedFhirSystem: s,
      selectedMappingResources: o,
      selectedCustomMappingResources: r
    } = Aa(t);
    Ht(async () => {
      try {
        await Promise.all([
          t.fetchProjectSettings(),
          n.getProjectSummary()
        ]);
      } catch (E) {
        console.error("Failed to load dashboard data:", E);
      }
    });
    const i = W(() => s.value && (o.value?.length > 0 || r.value?.length > 0)), a = W(() => i.value && n.projectSummary), c = W(() => n.projectSummary?.total_mrns || 0), f = W(() => {
      const E = o.value?.length || 0, g = r.value?.length || 0;
      return E + g;
    }), u = W(() => n.projectSummary?.overall_status_counts?.completed || 0), d = W(() => n.projectSummary?.overall_status_counts?.pending || 0), m = W(() => n.projectSummary?.overall_status_counts?.fetching || 0), p = W(() => n.projectSummary?.overall_status_counts?.failed || 0), h = W(() => n.projectSummary ? Object.values(n.projectSummary.overall_status_counts).reduce((E, g) => E + g, 0) : 0), v = W(() => {
      if (!n.projectSummary) return 0;
      const E = n.projectSummary.overall_status_counts?.deleted || 0;
      return h.value - E;
    }), _ = W(() => {
      if (!v.value) return 0;
      const E = p.value;
      return Math.round(E / v.value * 100);
    }), y = W(() => {
      if (!v.value) return 0;
      const E = u.value;
      return Math.round(E / v.value * 100);
    });
    return (E, g) => {
      const T = Je("router-link");
      return N(), P("div", gR, [
        l("div", vR, [
          l("div", _R, [
            l("img", {
              src: ae(mR),
              title: "ALL FHIR",
              style: { height: "200px" }
            }, null, 8, yR),
            g[0] || (g[0] = l("p", { class: "text-muted mb-4" }, " Fetch, archive, and download FHIR resources from your configured healthcare systems ", -1))
          ]),
          g[1] || (g[1] = Yi('<div class="row justify-content-center" data-v-88a4c917><div class="col-md-8" data-v-88a4c917><div class="bg-light p-4 rounded" data-v-88a4c917><div class="row text-center" data-v-88a4c917><div class="col-md-4" data-v-88a4c917><div class="d-flex gap-2 align-items-start" data-v-88a4c917><i class="fas fa-cloud-download-alt fa-2x text-success mb-2" data-v-88a4c917></i><h6 data-v-88a4c917>Background Processing</h6></div><small class="text-muted" data-v-88a4c917>Reliable queue-based fetching</small></div><div class="col-md-4" data-v-88a4c917><div class="d-flex gap-2 align-items-start" data-v-88a4c917><i class="fas fa-shield-alt fa-2x text-info mb-2" data-v-88a4c917></i><h6 data-v-88a4c917>Secure Storage</h6></div><small class="text-muted" data-v-88a4c917>REDCap-native data security</small></div><div class="col-md-4" data-v-88a4c917><div class="d-flex gap-2 align-items-start" data-v-88a4c917><i class="fas fa-file-archive fa-2x text-warning mb-2" data-v-88a4c917></i><h6 data-v-88a4c917>Easy Downloads</h6></div><small class="text-muted" data-v-88a4c917>ZIP archives for research</small></div></div></div></div></div>', 1))
        ]),
        l("div", bR, [
          g[18] || (g[18] = l("h2", { class: "text-center mb-4" }, "Key Features", -1)),
          l("div", ER, [
            l("div", wR, [
              l("div", AR, [
                l("div", SR, [
                  g[3] || (g[3] = l("div", { class: "feature-icon mb-3" }, [
                    l("i", { class: "fas fa-cogs fa-3x text-primary" })
                  ], -1)),
                  g[4] || (g[4] = l("h5", { class: "card-title" }, "Setup & Configuration", -1)),
                  g[5] || (g[5] = l("p", { class: "card-text text-muted" }, " Select your FHIR system and configure which resource types to fetch from predefined options or custom queries. ", -1)),
                  ce(T, {
                    to: "/setup",
                    class: "btn btn-outline-primary btn-sm mt-auto"
                  }, {
                    default: be(() => g[2] || (g[2] = [
                      l("i", { class: "fas fa-arrow-right me-1" }, null, -1),
                      Z(" Configure ")
                    ])),
                    _: 1,
                    __: [2]
                  })
                ])
              ])
            ]),
            l("div", OR, [
              l("div", CR, [
                l("div", TR, [
                  g[7] || (g[7] = l("div", { class: "feature-icon mb-3" }, [
                    l("i", { class: "fas fa-search fa-3x text-success" })
                  ], -1)),
                  g[8] || (g[8] = l("h5", { class: "card-title" }, "Monitor & Track", -1)),
                  g[9] || (g[9] = l("p", { class: "card-text text-muted" }, " Add MRNs, trigger fetches, and monitor real-time status per resource with detailed progress tracking. ", -1)),
                  ce(T, {
                    to: "/monitor",
                    class: "btn btn-outline-success btn-sm mt-auto"
                  }, {
                    default: be(() => g[6] || (g[6] = [
                      l("i", { class: "fas fa-arrow-right me-1" }, null, -1),
                      Z(" Monitor ")
                    ])),
                    _: 1,
                    __: [6]
                  })
                ])
              ])
            ]),
            l("div", NR, [
              l("div", DR, [
                l("div", xR, [
                  g[11] || (g[11] = l("div", { class: "feature-icon mb-3" }, [
                    l("i", { class: "fas fa-tasks fa-3x text-info" })
                  ], -1)),
                  g[12] || (g[12] = l("h5", { class: "card-title" }, "Background Processing", -1)),
                  g[13] || (g[13] = l("p", { class: "card-text text-muted" }, " Robust queue-based system manages large-scale FHIR fetching with automatic retry, task monitoring, and resource management. ", -1)),
                  ce(T, {
                    to: "/tasks",
                    class: "btn btn-outline-info btn-sm mt-auto"
                  }, {
                    default: be(() => g[10] || (g[10] = [
                      l("i", { class: "fas fa-arrow-right me-1" }, null, -1),
                      Z(" View Tasks ")
                    ])),
                    _: 1,
                    __: [10]
                  })
                ])
              ])
            ]),
            l("div", kR, [
              l("div", RR, [
                l("div", IR, [
                  g[15] || (g[15] = l("div", { class: "feature-icon mb-3" }, [
                    l("i", { class: "fas fa-archive fa-3x text-warning" })
                  ], -1)),
                  g[16] || (g[16] = l("h5", { class: "card-title" }, "Archive & Download", -1)),
                  g[17] || (g[17] = l("p", { class: "card-text text-muted" }, " Create ZIP archives of completed FHIR resources with flexible filtering and background processing options. ", -1)),
                  ce(T, {
                    to: "/archives",
                    class: "btn btn-outline-warning btn-sm mt-auto"
                  }, {
                    default: be(() => g[14] || (g[14] = [
                      l("i", { class: "fas fa-arrow-right me-1" }, null, -1),
                      Z(" Archives ")
                    ])),
                    _: 1,
                    __: [14]
                  })
                ])
              ])
            ])
          ])
        ]),
        l("div", PR, [
          g[43] || (g[43] = l("div", { class: "text-center mb-4" }, [
            l("h2", null, "Getting Started"),
            l("p", { class: "text-muted" }, "Follow these simple steps to start fetching and archiving FHIR resources")
          ], -1)),
          l("div", VR, [
            l("div", MR, [
              l("div", LR, [
                l("div", FR, [
                  g[22] || (g[22] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "1")
                    ])
                  ], -1)),
                  l("div", BR, [
                    g[20] || (g[20] = l("h5", null, "Configure Your Setup", -1)),
                    g[21] || (g[21] = l("p", { class: "text-muted mb-2" }, "Select your FHIR system and choose which resource types to fetch", -1)),
                    ce(T, {
                      to: "/setup",
                      class: "btn btn-primary btn-sm"
                    }, {
                      default: be(() => g[19] || (g[19] = [
                        l("i", { class: "fas fa-cogs me-1" }, null, -1),
                        Z(" Go to Setup ")
                      ])),
                      _: 1,
                      __: [19]
                    })
                  ]),
                  g[23] || (g[23] = l("div", { class: "step-icon ms-3" }, [
                    l("i", { class: "fas fa-arrow-right text-muted fa-2x d-none d-md-block" })
                  ], -1))
                ]),
                l("div", jR, [
                  g[27] || (g[27] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-success text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "2")
                    ])
                  ], -1)),
                  l("div", UR, [
                    g[25] || (g[25] = l("h5", null, "Add Patient MRNs", -1)),
                    g[26] || (g[26] = l("p", { class: "text-muted mb-2" }, "Input the patient identifiers you want to fetch FHIR data for", -1)),
                    ce(T, {
                      to: "/monitor",
                      class: "btn btn-success btn-sm"
                    }, {
                      default: be(() => g[24] || (g[24] = [
                        l("i", { class: "fas fa-plus me-1" }, null, -1),
                        Z(" Add MRNs ")
                      ])),
                      _: 1,
                      __: [24]
                    })
                  ]),
                  g[28] || (g[28] = l("div", { class: "step-icon ms-3" }, [
                    l("i", { class: "fas fa-arrow-right text-muted fa-2x d-none d-md-block" })
                  ], -1))
                ]),
                l("div", HR, [
                  g[32] || (g[32] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-info text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "3")
                    ])
                  ], -1)),
                  l("div", $R, [
                    g[30] || (g[30] = l("h5", null, "Trigger Data Fetch", -1)),
                    g[31] || (g[31] = l("p", { class: "text-muted mb-2" }, "Start the background processing to retrieve FHIR resources", -1)),
                    ce(T, {
                      to: "/monitor",
                      class: "btn btn-info btn-sm"
                    }, {
                      default: be(() => g[29] || (g[29] = [
                        l("i", { class: "fas fa-play me-1" }, null, -1),
                        Z(" Start Fetch ")
                      ])),
                      _: 1,
                      __: [29]
                    })
                  ]),
                  g[33] || (g[33] = l("div", { class: "step-icon ms-3" }, [
                    l("i", { class: "fas fa-arrow-right text-muted fa-2x d-none d-md-block" })
                  ], -1))
                ]),
                l("div", WR, [
                  g[37] || (g[37] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "4")
                    ])
                  ], -1)),
                  l("div", KR, [
                    g[35] || (g[35] = l("h5", null, "Monitor Tasks", -1)),
                    g[36] || (g[36] = l("p", { class: "text-muted mb-2" }, "Track background processing and manage synchronization tasks", -1)),
                    ce(T, {
                      to: "/tasks",
                      class: "btn btn-secondary btn-sm"
                    }, {
                      default: be(() => g[34] || (g[34] = [
                        l("i", { class: "fas fa-tasks me-1" }, null, -1),
                        Z(" View Tasks ")
                      ])),
                      _: 1,
                      __: [34]
                    })
                  ]),
                  g[38] || (g[38] = l("div", { class: "step-icon ms-3" }, [
                    l("i", { class: "fas fa-arrow-right text-muted fa-2x d-none d-md-block" })
                  ], -1))
                ]),
                l("div", zR, [
                  g[42] || (g[42] = l("div", { class: "step-number me-4" }, [
                    l("div", { class: "bg-warning text-white rounded-circle d-flex align-items-center justify-content-center" }, [
                      l("span", { class: "fw-bold" }, "5")
                    ])
                  ], -1)),
                  l("div", qR, [
                    g[40] || (g[40] = l("h5", null, "Download Archives", -1)),
                    g[41] || (g[41] = l("p", { class: "text-muted mb-2" }, "Create and download ZIP files containing your FHIR resources", -1)),
                    ce(T, {
                      to: "/archives",
                      class: "btn btn-warning btn-sm"
                    }, {
                      default: be(() => g[39] || (g[39] = [
                        l("i", { class: "fas fa-download me-1" }, null, -1),
                        Z(" View Archives ")
                      ])),
                      _: 1,
                      __: [39]
                    })
                  ])
                ])
              ])
            ])
          ])
        ]),
        a.value ? (N(), P("div", YR, [
          g[65] || (g[65] = l("div", { class: "text-center mb-4" }, [
            l("h2", null, "Project Status"),
            l("p", { class: "text-muted" }, "Current overview of your FHIR snapshot project")
          ], -1)),
          l("div", XR, [
            l("div", GR, [
              l("div", QR, [
                l("div", JR, [
                  g[44] || (g[44] = l("i", { class: "fas fa-user-injured fa-2x mb-2" }, null, -1)),
                  l("h3", ZR, j(c.value), 1),
                  g[45] || (g[45] = l("p", { class: "mb-0 small" }, "Total MRNs", -1))
                ])
              ])
            ]),
            l("div", e2, [
              l("div", t2, [
                l("div", n2, [
                  g[46] || (g[46] = l("i", { class: "fas fa-database fa-2x mb-2" }, null, -1)),
                  l("h3", s2, j(h.value), 1),
                  g[47] || (g[47] = l("p", { class: "mb-0 small" }, "Total Resources", -1)),
                  g[48] || (g[48] = l("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "includes deleted", -1))
                ])
              ])
            ]),
            l("div", o2, [
              l("div", r2, [
                l("div", i2, [
                  g[49] || (g[49] = l("i", { class: "fas fa-play-circle fa-2x mb-2" }, null, -1)),
                  l("h3", a2, j(v.value), 1),
                  g[50] || (g[50] = l("p", { class: "mb-0 small" }, "Active Resources", -1)),
                  g[51] || (g[51] = l("p", {
                    class: "mb-0",
                    style: { "font-size": "0.8rem", opacity: "0.9" }
                  }, "excludes deleted", -1))
                ])
              ])
            ]),
            l("div", l2, [
              l("div", c2, [
                l("div", u2, [
                  g[52] || (g[52] = l("i", { class: "fas fa-file-medical fa-2x mb-2" }, null, -1)),
                  l("h3", d2, j(f.value), 1),
                  g[53] || (g[53] = l("p", { class: "mb-0 small" }, "Resource Types", -1))
                ])
              ])
            ])
          ]),
          l("div", f2, [
            l("div", p2, [
              l("div", h2, [
                l("div", m2, [
                  g[54] || (g[54] = l("i", { class: "fas fa-check-circle fa-2x mb-2" }, null, -1)),
                  l("h3", g2, j(u.value), 1),
                  g[55] || (g[55] = l("p", { class: "mb-0 small" }, "Completed", -1)),
                  y.value > 0 ? (N(), P("p", v2, j(y.value) + "% complete", 1)) : Ee("", !0)
                ])
              ])
            ]),
            l("div", _2, [
              l("div", y2, [
                l("div", b2, [
                  g[56] || (g[56] = l("i", { class: "fas fa-exclamation-circle fa-2x mb-2" }, null, -1)),
                  l("h3", E2, j(p.value), 1),
                  g[57] || (g[57] = l("p", { class: "mb-0 small" }, "Failed", -1)),
                  _.value > 0 ? (N(), P("p", w2, j(_.value) + "% error rate", 1)) : Ee("", !0)
                ])
              ])
            ]),
            l("div", A2, [
              l("div", S2, [
                l("div", O2, [
                  g[58] || (g[58] = l("i", { class: "fas fa-sync fa-2x mb-2" }, null, -1)),
                  l("h3", C2, j(m.value), 1),
                  g[59] || (g[59] = l("p", { class: "mb-0 small" }, "Fetching", -1))
                ])
              ])
            ]),
            l("div", T2, [
              l("div", N2, [
                l("div", D2, [
                  g[60] || (g[60] = l("i", { class: "fas fa-clock fa-2x mb-2" }, null, -1)),
                  l("h3", x2, j(d.value), 1),
                  g[61] || (g[61] = l("p", { class: "mb-0 small" }, "Pending", -1))
                ])
              ])
            ])
          ]),
          i.value ? (N(), P("div", k2, [
            l("div", R2, [
              ce(T, {
                to: "/monitor",
                class: "btn btn-primary"
              }, {
                default: be(() => g[62] || (g[62] = [
                  l("i", { class: "fas fa-plus me-1" }, null, -1),
                  Z(" Add MRNs ")
                ])),
                _: 1,
                __: [62]
              }),
              ce(T, {
                to: "/tasks",
                class: "btn btn-outline-secondary"
              }, {
                default: be(() => g[63] || (g[63] = [
                  l("i", { class: "fas fa-tasks me-1" }, null, -1),
                  Z(" View Tasks ")
                ])),
                _: 1,
                __: [63]
              }),
              ce(T, {
                to: "/archives",
                class: "btn btn-outline-primary"
              }, {
                default: be(() => g[64] || (g[64] = [
                  l("i", { class: "fas fa-archive me-1" }, null, -1),
                  Z(" View Archives ")
                ])),
                _: 1,
                __: [64]
              })
            ])
          ])) : Ee("", !0)
        ])) : (N(), P("div", I2, [
          g[67] || (g[67] = l("i", { class: "fas fa-info-circle fa-2x mb-3" }, null, -1)),
          g[68] || (g[68] = l("h4", null, "Get Started", -1)),
          g[69] || (g[69] = l("p", { class: "mb-3" }, "Configure your FHIR system and resource types to begin fetching data.", -1)),
          ce(T, {
            to: "/setup",
            class: "btn btn-primary"
          }, {
            default: be(() => g[66] || (g[66] = [
              l("i", { class: "fas fa-cogs me-1" }, null, -1),
              Z(" Configure Now ")
            ])),
            _: 1,
            __: [66]
          })
        ]))
      ]);
    };
  }
}), V2 = /* @__PURE__ */ Qs(P2, [["__scopeId", "data-v-88a4c917"]]), M2 = ["value"], L2 = ["value"], F2 = /* @__PURE__ */ Te({
  __name: "FhirSystemDropdown",
  setup(e) {
    const t = _t("settings"), n = _t("draftResources"), s = qo(), o = (r) => {
      const i = r.target, a = parseInt(i.value);
      s.updateSelectedFhirSystem(a);
    };
    return (r, i) => (N(), P("div", null, [
      i[1] || (i[1] = l("label", { for: "ehr-dropdown" }, "FHIR Systems", -1)),
      l("select", {
        class: "form-select form-select-sm",
        id: "ehr-dropdown",
        value: ae(n)?.selectedFhirSystem.value || "",
        onChange: o
      }, [
        i[0] || (i[0] = l("option", { value: "" }, "Select a FHIR System", -1)),
        (N(!0), P(we, null, Xe(ae(t).fhir_systems, (a) => (N(), P("option", {
          key: a.ehr_id,
          value: a.ehr_id
        }, j(a.ehr_name), 9, L2))), 128))
      ], 40, M2)
    ]));
  }
}), B2 = { class: "d-flex" }, j2 = { class: "d-flex gap-2" }, U2 = /* @__PURE__ */ Te({
  __name: "ResourcesToolbar",
  emits: ["import", "export", "add"],
  setup(e, { emit: t }) {
    const n = t;
    return (s, o) => (N(), P("div", B2, [
      o[6] || (o[6] = l("div", { class: "me-auto" }, [
        l("span", null, "Resources")
      ], -1)),
      l("div", j2, [
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: o[0] || (o[0] = (r) => n("import"))
        }, o[3] || (o[3] = [
          l("i", { class: "fas fa-upload fa-fw" }, null, -1),
          l("span", null, "Import", -1)
        ])),
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: o[1] || (o[1] = (r) => n("export"))
        }, o[4] || (o[4] = [
          l("i", { class: "fas fa-download fa-fw" }, null, -1),
          l("span", null, "Export", -1)
        ])),
        l("button", {
          class: "btn btn-sm btn-primary",
          onClick: o[2] || (o[2] = (r) => n("add"))
        }, o[5] || (o[5] = [
          l("i", { class: "fas fa-plus fa-fw" }, null, -1),
          l("span", null, "Add", -1)
        ]))
      ])
    ]));
  }
}), H2 = { class: "table table-striped table-hover table-sm border-top" }, $2 = ["onClick"], W2 = { key: 0 }, K2 = /* @__PURE__ */ Te({
  __name: "ResourcesTable",
  setup(e) {
    const t = qo(), n = _t("draftResources"), s = W(() => n ? [
      ...n.selectedMappingResources.value,
      ...n.selectedCustomMappingResources.value
    ] : []);
    function o(r) {
      t.removeResource(r, r.type);
    }
    return (r, i) => (N(), P("table", H2, [
      i[2] || (i[2] = l("thead", null, [
        l("tr", null, [
          l("th", null, "Name"),
          l("th", null, "Type"),
          l("th", null, "Resource Specification"),
          l("th", null, "Actions")
        ])
      ], -1)),
      l("tbody", null, [
        (N(!0), P(we, null, Xe(s.value, (a) => (N(), P("tr", {
          key: `${a.type}-${a.name}`
        }, [
          l("td", null, j(a.name), 1),
          l("td", null, j(a.type), 1),
          l("td", null, j(a.resourceSpec || "-"), 1),
          l("td", null, [
            l("button", {
              type: "button",
              class: "btn btn-outline-danger btn-sm",
              onClick: (c) => o(a)
            }, i[0] || (i[0] = [
              l("i", { class: "fas fa-trash fa-fw" }, null, -1)
            ]), 8, $2)
          ])
        ]))), 128)),
        s.value.length === 0 ? (N(), P("tr", W2, i[1] || (i[1] = [
          l("td", {
            colspan: "4",
            class: "text-muted text-center"
          }, "No resources configured", -1)
        ]))) : Ee("", !0)
      ])
    ]));
  }
}), z2 = { class: "mb-3" }, q2 = ["value"], Y2 = ["disabled"], X2 = ["value"], G2 = ["value"], Q2 = ["disabled"], vo = Object.freeze({
  PREDEFINED: "PREDEFINED",
  CUSTOM: "CUSTOM"
}), J2 = /* @__PURE__ */ Te({
  __name: "ResourceForm",
  props: {
    modelValue: { default: () => ({}) },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = qo(), { settings: n } = Aa(t), s = W(() => n.value.mapping_resources), o = Vb(e, "modelValue");
    return (r, i) => (N(), P("div", null, [
      l("form", null, [
        l("div", z2, [
          i[5] || (i[5] = l("label", {
            class: "form-label",
            for: "display-name"
          }, "Display Name", -1)),
          et(l("input", {
            "onUpdate:modelValue": i[0] || (i[0] = (a) => o.value.displayName = a),
            class: "form-control form-control-sm",
            type: "text",
            id: "display-name",
            placeholder: "E.g., Vital Signs, Social History, etc.",
            required: ""
          }, null, 512), [
            [Ao, o.value.displayName]
          ])
        ]),
        l("div", null, [
          et(l("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-predefined",
            value: ae(vo).PREDEFINED,
            "onUpdate:modelValue": i[1] || (i[1] = (a) => o.value.resourceType = a)
          }, null, 8, q2), [
            [Qi, o.value.resourceType]
          ]),
          i[7] || (i[7] = l("label", {
            class: "form-label ms-2",
            for: "resource-type-predefined"
          }, "Predefined Resource", -1)),
          et(l("select", {
            "onUpdate:modelValue": i[2] || (i[2] = (a) => o.value.predefinedResource = a),
            class: "form-select form-select-sm",
            id: "predefined-resource",
            disabled: o.value.resourceType !== ae(vo).PREDEFINED
          }, [
            i[6] || (i[6] = l("option", {
              disabled: "",
              value: ""
            }, "Please Select...", -1)),
            (N(!0), P(we, null, Xe(s.value, (a) => (N(), P("option", {
              key: a.resourceSpec,
              value: a.resourceSpec
            }, j(a.name), 9, X2))), 128))
          ], 8, Y2), [
            [Hn, o.value.predefinedResource]
          ])
        ]),
        i[9] || (i[9] = l("div", { class: "d-flex justify-start-center my-2" }, [
          l("span", null, "—OR—")
        ], -1)),
        l("div", null, [
          et(l("input", {
            type: "radio",
            name: "resource-type-radio",
            id: "resource-type-custom",
            value: ae(vo).CUSTOM,
            "onUpdate:modelValue": i[3] || (i[3] = (a) => o.value.resourceType = a)
          }, null, 8, G2), [
            [Qi, o.value.resourceType]
          ]),
          i[8] || (i[8] = l("label", {
            class: "form-label ms-2",
            for: "resource-type-custom"
          }, "Custom Resource", -1)),
          et(l("input", {
            "onUpdate:modelValue": i[4] || (i[4] = (a) => o.value.customResourceSpec = a),
            class: "form-control form-control-sm",
            type: "text",
            id: "custom-resource",
            disabled: o.value.resourceType !== ae(vo).CUSTOM,
            placeholder: "Observation?category=social-history"
          }, null, 8, Q2), [
            [Ao, o.value.customResourceSpec]
          ])
        ])
      ])
    ]));
  }
}), gi = {
  BOTTOM_RIGHT: "bottom right"
}, _s = /* @__PURE__ */ ps("notifications", () => {
  const e = dR(), t = y_();
  return {
    showSuccess: (c, f = "Success") => {
      t.toast({
        title: f,
        body: c,
        variant: "primary",
        delay: 4e3
      }, gi.BOTTOM_RIGHT);
    },
    showError: (c, f = "Error") => {
      t.toast({
        title: f,
        body: c,
        variant: "danger",
        delay: 6e3
      }, gi.BOTTOM_RIGHT);
    },
    showWarning: (c, f = "Warning") => {
      t.toast({
        title: f,
        body: c,
        variant: "warning",
        delay: 5e3
      }, gi.BOTTOM_RIGHT);
    },
    showInfo: (c, f = "Information") => {
      t.toast({
        title: f,
        body: c,
        variant: "info",
        delay: 4e3
      }, gi.BOTTOM_RIGHT);
    },
    confirmAction: async (c, f) => {
      try {
        return await e.confirm({
          title: c,
          body: f,
          textOk: "Yes",
          textCancel: "Cancel"
        }) === !0;
      } catch {
        return !1;
      }
    },
    alertUser: async (c, f) => {
      try {
        await e.alert({
          title: c,
          body: f,
          textOk: "OK"
        });
      } catch {
      }
    }
  };
}), Z2 = { class: "d-flex flex-column gap-4" }, eI = { class: "card" }, tI = { class: "card-body px-0 py-2" }, nI = { class: "p-2" }, sI = { class: "d-flex gap-2 justify-content-end" }, oI = ["disabled"], rI = /* @__PURE__ */ Te({
  __name: "SetupPage",
  setup(e) {
    const t = qo(), n = _s(), { settings: s, loading: o, selectedMappingResources: r, selectedCustomMappingResources: i, selectedFhirSystem: a } = Aa(t);
    Eo("settings", s), Eo("draftResources", { selectedMappingResources: r, selectedCustomMappingResources: i, selectedFhirSystem: a });
    const c = W(() => o.value.fetch || o.value.save), f = Uy("resourceModal"), u = () => ({
      displayName: "",
      customResourceSpec: "",
      predefinedResource: "",
      resourceType: vo.PREDEFINED
    }), d = G(u());
    async function m() {
      if (!f.value) return;
      if (d.value = u(), await f.value.show()) {
        if (!d.value.displayName.trim()) {
          n.showError("Display Name is required");
          return;
        }
        if (d.value.resourceType === vo.PREDEFINED) {
          if (!d.value.predefinedResource) {
            n.showError("Please select a predefined resource");
            return;
          }
          t.addPredefinedResource(d.value.displayName, d.value.predefinedResource);
        } else {
          if (!d.value.customResourceSpec.trim()) {
            n.showError("Resource Specification is required for custom resources");
            return;
          }
          t.addCustomResource(d.value.displayName, d.value.customResourceSpec);
        }
      }
    }
    async function p() {
      try {
        await t.saveProjectSettings(), n.showSuccess("Settings saved successfully");
      } catch (h) {
        console.error("Failed to save settings:", h), n.showError("Failed to save settings");
      }
    }
    return (h, v) => {
      const _ = Je("b-modal");
      return N(), P("div", Z2, [
        ce(F2),
        l("div", eI, [
          l("div", tI, [
            l("div", nI, [
              ce(U2, { onAdd: m })
            ]),
            ce(K2),
            (N(), rt(Bo, { to: "body" }, [
              ce(_, {
                ref_key: "resourceModal",
                ref: f
              }, {
                title: be(() => v[1] || (v[1] = [
                  Z("Resource")
                ])),
                default: be(() => [
                  ce(J2, {
                    modelValue: d.value,
                    "onUpdate:modelValue": v[0] || (v[0] = (y) => d.value = y)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }, 512)
            ]))
          ])
        ]),
        l("div", sI, [
          v[3] || (v[3] = l("button", {
            type: "button",
            class: "btn btn-secondary btn-sm"
          }, [
            l("i", { class: "fas fa-xmark fa-fw" }),
            l("span", null, "Cancel")
          ], -1)),
          l("button", {
            type: "button",
            class: "btn btn-primary btn-sm",
            onClick: p,
            disabled: c.value
          }, v[2] || (v[2] = [
            l("i", { class: "fas fa-save fa-fw" }, null, -1),
            l("span", null, "Save", -1)
          ]), 8, oI)
        ])
      ]);
    };
  }
}), bu = /* @__PURE__ */ ps("operations", () => {
  const e = G(!1), t = G(null), n = G(!1), s = G({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), o = G({
    visible: !1,
    archiveType: "selected",
    selectedMrns: []
  }), r = (T) => {
    e.value = T;
  }, i = (T, I, C, D) => {
    t.value = {
      operation: T,
      success: I,
      message: C,
      data: D,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  }, a = () => {
    n.value = !n.value;
  }, c = (T) => {
    s.value = {
      visible: !0,
      archiveType: "selected",
      selectedMrns: T
    };
  }, f = () => {
    s.value = {
      visible: !0,
      archiveType: "all",
      selectedMrns: []
    };
  }, u = () => {
    s.value.visible = !1;
  }, d = (T) => {
    o.value = {
      visible: !0,
      archiveType: "selected",
      selectedMrns: T
    };
  }, m = () => {
    o.value = {
      visible: !0,
      archiveType: "all",
      selectedMrns: []
    };
  }, p = () => {
    o.value.visible = !1;
  }, h = W(() => s.value.visible), v = W(() => s.value.archiveType), _ = W(() => s.value.selectedMrns), y = W(() => o.value.visible), E = W(() => o.value.archiveType), g = W(() => o.value.selectedMrns);
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
    archiveModalVisible: h,
    archiveModalType: v,
    archiveModalSelectedMrns: _,
    showArchiveModalSelected: c,
    showArchiveModalAll: f,
    hideArchiveModal: u,
    // Streaming Modal
    streamingModalVisible: y,
    streamingModalType: E,
    streamingModalSelectedMrns: g,
    showStreamingModalSelected: d,
    showStreamingModalAll: m,
    hideStreamingModal: p
  };
}), iI = { class: "mb-3" }, aI = { class: "d-flex flex-wrap gap-2 align-items-center" }, lI = {
  class: "btn-group",
  role: "group"
}, cI = ["disabled"], uI = { key: 0 }, dI = { key: 1 }, fI = {
  class: "btn-group",
  role: "group"
}, pI = ["disabled"], hI = ["disabled"], mI = /* @__PURE__ */ Te({
  __name: "MonitorToolbar",
  emits: ["addMrn"],
  setup(e) {
    const t = vs(), n = bu(), s = _s(), o = W(() => t.selectedMrns.length === 0), r = W(() => t.operationLoading), i = W(() => t.loading), a = async () => {
      try {
        const p = await t.triggerFetchSelected();
        s.showSuccess(`Fetch triggered for ${p.mrns?.length || 0} MRN(s). ${p.tasks_created || 0} tasks created.`);
      } catch (p) {
        console.error("Failed to trigger fetch for selected MRNs:", p), s.showError("Failed to trigger fetch for selected MRNs");
      }
    }, c = async () => {
      try {
        await Promise.all([
          t.fetchMrns(),
          t.getProjectSummary()
        ]), s.showSuccess("Data refreshed successfully");
      } catch (p) {
        console.error("Failed to refresh data:", p), s.showError("Failed to refresh data");
      }
    }, f = () => {
      if (o.value) {
        s.showWarning("No MRNs selected for archive");
        return;
      }
      const p = t.mrns.filter((h) => t.selectedMrns.includes(h.id)).map((h) => h.mrn);
      n.showArchiveModalSelected(p);
    }, u = () => {
      n.showArchiveModalAll();
    }, d = () => {
      if (o.value) {
        s.showWarning("No MRNs selected for streaming archive");
        return;
      }
      const p = t.mrns.filter((h) => t.selectedMrns.includes(h.id)).map((h) => h.mrn);
      n.showStreamingModalSelected(p);
    }, m = () => {
      n.showStreamingModalAll();
    };
    return (p, h) => {
      const v = Je("b-dropdown-item"), _ = Je("b-dropdown");
      return N(), P("div", iI, [
        l("div", aI, [
          l("div", lI, [
            l("button", {
              class: "btn btn-primary",
              onClick: h[0] || (h[0] = (y) => p.$emit("addMrn"))
            }, h[2] || (h[2] = [
              l("i", { class: "fas fa-plus-circle fa-fw" }, null, -1),
              Z(" Add MRN ")
            ])),
            l("button", {
              class: "btn btn-outline-primary",
              onClick: a,
              disabled: o.value || r.value,
              title: "Trigger fetch for selected MRNs"
            }, [
              r.value ? (N(), P("span", dI, h[4] || (h[4] = [
                l("span", null, [
                  l("i", { class: "fas fa-spinner fa-spin fa-fw" }),
                  Z(" Fetch Selected")
                ], -1)
              ]))) : (N(), P("span", uI, h[3] || (h[3] = [
                l("i", { class: "fas fa-cloud-arrow-down fa-fw" }, null, -1),
                Z(" Fetch Selected")
              ])))
            ], 8, cI)
          ]),
          l("div", fI, [
            l("button", {
              class: "btn btn-success",
              onClick: f,
              disabled: o.value,
              title: "Create archive for selected completed MRNs"
            }, h[5] || (h[5] = [
              l("i", { class: "fas fa-archive fa-fw" }, null, -1),
              Z(" Create Archive ")
            ]), 8, pI),
            l("button", {
              class: "btn btn-outline-success",
              onClick: u,
              title: "Create archive for all completed resources"
            }, h[6] || (h[6] = [
              l("i", { class: "fas fa-archive fa-fw" }, null, -1),
              Z(" Archive All ")
            ]))
          ]),
          ce(_, {
            text: "Stream Download",
            variant: "info",
            title: "Stream download archives"
          }, {
            button: be(() => h[7] || (h[7] = [
              l("i", { class: "fas fa-bolt fa-fw me-1" }, null, -1),
              Z("Stream Download ")
            ])),
            default: be(() => [
              ce(v, {
                onClick: d,
                class: pe({ disabled: o.value }),
                "prevent-close": !1
              }, {
                default: be(() => h[8] || (h[8] = [
                  l("i", { class: "fas fa-bolt me-2" }, null, -1),
                  Z("Stream Selected Records ")
                ])),
                _: 1,
                __: [8]
              }, 8, ["class"]),
              ce(v, {
                onClick: m,
                "prevent-close": !1
              }, {
                default: be(() => h[9] || (h[9] = [
                  l("i", { class: "fas fa-bolt me-2" }, null, -1),
                  Z("Stream All Records ")
                ])),
                _: 1,
                __: [9]
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
              class: pe(["fas fa-rotate-right fa-fw", { "fa-spin": i.value }])
            }, null, 2)
          ], 8, hI),
          l("button", {
            class: "btn btn-outline-info",
            onClick: h[1] || (h[1] = (y) => ae(n).toggleSummary()),
            title: "Toggle project summary"
          }, h[10] || (h[10] = [
            l("i", { class: "fas fa-chart-bar fa-fw" }, null, -1),
            Z(" Summary ")
          ]))
        ])
      ]);
    };
  }
}), Eu = /* @__PURE__ */ ps("streaming", () => {
  const e = G({
    active: !1,
    filename: "",
    startTime: null
  }), t = W(() => e.value.active), n = W(() => e.value.startTime ? Math.round((Date.now() - e.value.startTime.getTime()) / 1e3) : 0);
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
}), gI = { class: "align-middle" }, vI = { class: "d-flex flex-column" }, _I = { class: "text-muted" }, yI = {
  key: 0,
  class: "d-block text-muted"
}, bI = {
  key: 0,
  class: "text-success"
}, EI = {
  key: 1,
  class: "text-muted"
}, wI = {
  key: 0,
  class: "text-danger"
}, AI = ["title"], SI = ["title"], OI = {
  key: 1,
  class: "text-muted"
}, CI = {
  class: "btn-group",
  role: "group"
}, TI = ["disabled"], NI = ["disabled"], DI = {
  key: 0,
  class: "table-warning"
}, xI = { colspan: "5" }, kI = { class: "p-2" }, RI = { class: "mb-0 mt-1" }, II = /* @__PURE__ */ Te({
  __name: "MonitorResourceRow",
  props: {
    resource: {},
    mrn: {}
  },
  setup(e) {
    const t = e, n = vs(), s = Eu(), o = _s(), r = G(!1), i = G(!1), a = (p) => {
      const h = "badge";
      switch (p) {
        case xe.Pending:
          return `${h} bg-warning text-dark`;
        case xe.Fetching:
          return `${h} bg-info text-dark`;
        case xe.Completed:
          return `${h} bg-success`;
        case xe.Failed:
          return `${h} bg-danger`;
        case xe.Outdated:
          return `${h} bg-secondary`;
        case xe.Deleted:
          return `${h} bg-dark`;
        default:
          return `${h} bg-secondary`;
      }
    }, c = (p) => {
      if (!p) return "-";
      try {
        const h = new Date(p);
        return h.toLocaleDateString() + " " + h.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
      } catch {
        return p;
      }
    }, f = (p) => p ? p.length > 50 ? p.substring(0, 50) + "..." : p : "-", u = async () => {
      try {
        i.value = !0, await n.retryFailedResource(
          t.mrn,
          t.resource.name,
          t.resource.repeat_instance
        );
      } catch (p) {
        console.error("Failed to retry resource:", p);
      } finally {
        i.value = !1;
      }
    }, d = () => {
      console.log("View details for resource:", t.resource);
    }, m = async () => {
      try {
        i.value = !0;
        const p = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_"), h = `${t.mrn}_${t.resource.name}_${p}`;
        s.startStreaming(h), o.showInfo(`Started streaming download: ${h}`);
        const v = {
          mrns: [t.mrn],
          resource_types: [t.resource.name],
          archive_name: h
        }, _ = await Ye.streamSelectedArchive([t.mrn], v), y = new Blob([_.data]), E = window.URL.createObjectURL(y), g = document.createElement("a");
        g.href = E, g.download = `${h}.zip`, document.body.appendChild(g), g.click(), document.body.removeChild(g), window.URL.revokeObjectURL(E);
        const T = s.finishStreaming();
        o.showSuccess(`Download completed: ${h} (${T}s)`);
      } catch (p) {
        s.finishStreaming(), o.showError(`Streaming download failed: ${p.message}`), console.error("Failed to stream download resource:", p);
      } finally {
        i.value = !1;
      }
    };
    return (p, h) => (N(), P(we, null, [
      l("tr", gI, [
        l("td", null, [
          l("div", vI, [
            l("strong", null, j(p.resource.name), 1),
            l("small", _I, j(p.resource.mapping_type) + " | " + j(p.resource.resource_spec), 1)
          ])
        ]),
        l("td", null, [
          l("span", {
            class: pe(a(p.resource.status))
          }, j(p.resource.status), 3),
          p.resource.repeat_instance ? (N(), P("small", yI, " Instance #" + j(p.resource.repeat_instance), 1)) : Ee("", !0)
        ]),
        l("td", null, [
          p.resource.fetch_date ? (N(), P("div", bI, [
            h[1] || (h[1] = l("i", { class: "fas fa-check-circle fa-fw" }, null, -1)),
            Z(" " + j(c(p.resource.fetch_date)), 1)
          ])) : (N(), P("div", EI, "-"))
        ]),
        l("td", null, [
          p.resource.error_message ? (N(), P("div", wI, [
            h[2] || (h[2] = l("i", { class: "fas fa-exclamation-triangle fa-fw" }, null, -1)),
            l("span", {
              title: p.resource.error_message
            }, j(f(p.resource.error_message)), 9, AI),
            p.resource.error_message.length > 50 ? (N(), P("button", {
              key: 0,
              class: "btn btn-link btn-sm p-0 ms-1",
              onClick: h[0] || (h[0] = (v) => r.value = !r.value),
              title: r.value ? "Show less" : "Show more"
            }, [
              l("i", {
                class: pe(`fas fa-chevron-${r.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, SI)) : Ee("", !0)
          ])) : (N(), P("div", OI, "-"))
        ]),
        l("td", null, [
          l("div", CI, [
            p.resource.status === "Failed" ? (N(), P("button", {
              key: 0,
              class: "btn btn-sm btn-warning",
              onClick: u,
              disabled: i.value,
              title: "Retry this resource"
            }, h[3] || (h[3] = [
              l("i", { class: "fas fa-rotate-right fa-fw" }, null, -1)
            ]), 8, TI)) : Ee("", !0),
            p.resource.status === "Completed" ? (N(), P("button", {
              key: 1,
              class: "btn btn-sm btn-outline-primary",
              onClick: d,
              title: "View resource details"
            }, h[4] || (h[4] = [
              l("i", { class: "fas fa-eye fa-fw" }, null, -1)
            ]))) : Ee("", !0),
            p.resource.status === "Completed" ? (N(), P("button", {
              key: 2,
              class: "btn btn-sm btn-info",
              onClick: m,
              disabled: i.value || ae(s).isStreamingActive,
              title: "Stream download this resource"
            }, h[5] || (h[5] = [
              l("i", { class: "fas fa-bolt fa-fw" }, null, -1)
            ]), 8, NI)) : Ee("", !0)
          ])
        ])
      ]),
      r.value && p.resource.error_message ? (N(), P("tr", DI, [
        l("td", xI, [
          l("div", kI, [
            h[6] || (h[6] = l("strong", null, "Error Details:", -1)),
            l("pre", RI, j(p.resource.error_message), 1)
          ])
        ])
      ])) : Ee("", !0)
    ], 64));
  }
}), PI = { class: "align-middle" }, VI = ["checked"], MI = {
  key: 0,
  class: "status-display-smart"
}, LI = ["title"], FI = {
  key: 1,
  class: "status-display-progress"
}, BI = {
  class: "progress position-relative",
  style: { height: "20px" }
}, jI = ["title"], UI = { class: "text-muted" }, HI = {
  key: 2,
  class: "status-display-badges"
}, $I = ["title"], WI = {
  key: 3,
  class: "status-display-legacy"
}, KI = ["title"], zI = {
  key: 0,
  class: "position-absolute bg-dark text-white p-2 rounded shadow-lg",
  style: { "z-index": "1000", top: "100%", left: "0", width: "250px" }
}, qI = { class: "small" }, YI = { class: "d-flex justify-content-between" }, XI = { class: "d-flex justify-content-between" }, GI = { class: "d-flex align-items-center" }, QI = ["aria-expanded"], JI = {
  key: 0,
  class: "ms-2"
}, ZI = {
  class: "btn-group",
  role: "group"
}, eP = ["disabled"], tP = ["disabled", "title"], nP = ["disabled", "title"], sP = ["disabled", "title"], oP = {
  colspan: "5",
  class: "p-0"
}, rP = { class: "ps-3" }, iP = { class: "table table-sm table-bordered mb-0" }, aP = /* @__PURE__ */ Te({
  __name: "MonitorTableRow",
  props: {
    item: {},
    selected: { type: Boolean }
  },
  setup(e) {
    const t = vs(), n = bu(), s = Eu(), o = _s(), r = e, i = G(!1), a = G(!1), c = G(!1), f = G("smart"), u = G(!1), d = () => {
      i.value = !i.value;
    }, m = W(() => {
      const w = r.item.resources.filter((J) => J.status !== xe.Deleted), x = w.length, ee = w.filter((J) => J.status === xe.Completed).length, ne = w.filter((J) => J.status === xe.Failed).length, V = w.filter((J) => J.status === xe.Pending).length, L = w.filter((J) => J.status === xe.Fetching).length;
      let $ = `${ee}/${x} completed`;
      return ne > 0 && ($ += `, ${ne} failed`), L > 0 && ($ += `, ${L} fetching`), V > 0 && ($ += `, ${V} pending`), $;
    }), p = W(() => t.getProgressBarConfig(r.item)), h = W(() => t.getArchiveButtonConfig(r.item)), v = W(() => r.item.resources.some((w) => w.status === xe.Failed)), _ = W(() => !v.value), y = W(() => {
      if (v.value) {
        const w = r.item.resources.filter((x) => x.status === xe.Failed).length;
        return `Retry ${w} failed resource${w > 1 ? "s" : ""} for this record`;
      } else
        return "No failed resources to retry";
    }), E = W(() => r.item.resources.some((w) => w.status === xe.Completed)), g = W(() => !E.value), T = W(() => {
      if (E.value) {
        const w = r.item.resources.filter((x) => x.status === xe.Completed).length;
        return `Stream download ${w} completed resource${w > 1 ? "s" : ""} for MRN ${r.item.mrn}`;
      } else
        return "No completed resources to stream";
    }), I = () => {
      const w = p.value;
      return w.segments.length === 0 ? "No resources" : `${w.segments.map((ee) => `${ee.status}: ${ee.count}`).join(", ")} | ${Math.round(w.completion_percentage)}% complete`;
    }, C = () => I() + " (hover for details)", D = () => {
      const w = t.getStatusForStyling(r.item);
      return `badge bg-${t.getStatusColor(w)}`;
    }, F = async () => {
      try {
        a.value = !0, await t.triggerFetchMrns([r.item.mrn]);
      } catch (w) {
        console.error("Failed to trigger fetch for MRN:", w);
      } finally {
        a.value = !1;
      }
    }, O = async () => {
      try {
        n.showArchiveModalSelected([r.item.mrn]);
      } catch (w) {
        console.error("Failed to show archive modal:", w);
      }
    }, S = async () => {
      if (v.value)
        try {
          a.value = !0, await Ye.retryFailed({ record_ids: [r.item.id] }), await t.getProjectSummary();
        } catch (w) {
          console.error("Failed to retry failed resources:", w);
        } finally {
          a.value = !1;
        }
    }, R = async () => {
      if (E.value)
        try {
          a.value = !0;
          const w = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_"), x = `${r.item.mrn}_all_resources_${w}`;
          s.startStreaming(x), o.showInfo(`Started streaming download: ${x}`);
          const ee = r.item.resources.filter((Re) => Re.status === xe.Completed).map((Re) => Re.name).filter((Re, Ae, Ne) => Ne.indexOf(Re) === Ae), ne = {
            mrns: [r.item.mrn],
            resource_types: ee,
            archive_name: x
          }, V = await Ye.streamSelectedArchive([r.item.mrn], ne), L = new Blob([V.data]), $ = window.URL.createObjectURL(L), J = document.createElement("a");
          J.href = $, J.download = `${x}.zip`, document.body.appendChild(J), J.click(), document.body.removeChild(J), window.URL.revokeObjectURL($);
          const Oe = s.finishStreaming();
          o.showSuccess(`Download completed: ${x} (${Oe}s)`);
        } catch (w) {
          s.finishStreaming(), o.showError(`Streaming download failed: ${w.message}`), console.error("Failed to stream download MRN:", w);
        } finally {
          a.value = !1;
        }
    };
    return (w, x) => (N(), P(we, null, [
      l("tr", PI, [
        l("td", null, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: w.selected,
            onChange: x[0] || (x[0] = (ee) => ae(t).toggleSelection(w.item.id))
          }, null, 40, VI)
        ]),
        l("td", null, j(w.item.mrn), 1),
        l("td", null, [
          f.value === "smart" ? (N(), P("div", MI, [
            l("span", {
              class: pe(D()),
              title: I()
            }, j(ae(t).getSmartStatusDisplay(w.item)), 11, LI)
          ])) : f.value === "progress" ? (N(), P("div", FI, [
            l("div", BI, [
              (N(!0), P(we, null, Xe(p.value.segments, (ee) => (N(), P("div", {
                key: ee.status,
                class: pe(`progress-bar bg-${ee.color}`),
                style: Vt({ width: ee.percentage + "%" }),
                title: `${ee.status}: ${ee.count} (${ee.percentage}%)`
              }, null, 14, jI))), 128))
            ]),
            l("small", UI, j(Math.round(p.value.completion_percentage)) + "% complete", 1)
          ])) : f.value === "badges" ? (N(), P("div", HI, [
            (N(!0), P(we, null, Xe(p.value.segments, (ee) => (N(), P("span", {
              key: ee.status,
              class: pe(`badge bg-${ee.color} me-1`),
              title: `${ee.status}: ${ee.count} resources`,
              style: { "font-size": "0.7em" }
            }, j(ee.status.charAt(0).toUpperCase()) + ": " + j(ee.count), 11, $I))), 128))
          ])) : (N(), P("div", WI, [
            l("span", {
              class: pe(D()),
              title: C(),
              onMouseenter: x[1] || (x[1] = (ee) => c.value = !0),
              onMouseleave: x[2] || (x[2] = (ee) => c.value = !1)
            }, j(ae(t).getSmartStatusDisplay(w.item)), 43, KI),
            c.value ? (N(), P("div", zI, [
              x[7] || (x[7] = l("div", { class: "fw-bold mb-1" }, "Status Breakdown", -1)),
              l("div", qI, [
                (N(!0), P(we, null, Xe(p.value.segments, (ee) => (N(), P("div", {
                  key: ee.status,
                  class: "d-flex justify-content-between"
                }, [
                  l("span", null, j(ee.status) + ":", 1),
                  l("span", null, j(ee.count) + " (" + j(ee.percentage) + "%)", 1)
                ]))), 128)),
                x[6] || (x[6] = l("hr", { class: "my-1" }, null, -1)),
                l("div", YI, [
                  x[4] || (x[4] = l("span", null, "Total Resources:", -1)),
                  l("span", null, j(p.value.total_resources), 1)
                ]),
                l("div", XI, [
                  x[5] || (x[5] = l("span", null, "Completion:", -1)),
                  l("span", null, j(Math.round(p.value.completion_percentage)) + "%", 1)
                ])
              ])
            ])) : Ee("", !0)
          ]))
        ]),
        l("td", null, [
          l("div", GI, [
            l("span", null, j(m.value), 1),
            l("button", {
              class: "btn btn-sm btn-light ms-2",
              onClick: d,
              "aria-expanded": i.value
            }, [
              l("i", {
                class: pe(`fas fa-chevron-${i.value ? "up" : "down"} fa-fw`)
              }, null, 2)
            ], 8, QI),
            u.value ? (N(), P("div", JI, [
              et(l("select", {
                "onUpdate:modelValue": x[3] || (x[3] = (ee) => f.value = ee),
                class: "form-select form-select-sm",
                style: { width: "100px", "font-size": "0.75em" },
                title: "Status Display Mode (Dev)"
              }, x[8] || (x[8] = [
                l("option", { value: "smart" }, "Smart", -1),
                l("option", { value: "progress" }, "Progress", -1),
                l("option", { value: "badges" }, "Badges", -1),
                l("option", { value: "legacy" }, "Legacy", -1)
              ]), 512), [
                [Hn, f.value]
              ])
            ])) : Ee("", !0)
          ])
        ]),
        l("td", null, [
          l("div", ZI, [
            l("button", {
              class: "btn btn-sm btn-primary",
              onClick: F,
              disabled: a.value,
              title: "Trigger fetch for this MRN"
            }, [
              a.value ? (N(), P(we, { key: 1 }, [
                x[11] || (x[11] = l("i", { class: "fas fa-spinner fa-spin fa-fw" }, null, -1)),
                x[12] || (x[12] = Z(" Fetch "))
              ], 64)) : (N(), P(we, { key: 0 }, [
                x[9] || (x[9] = l("i", { class: "fas fa-cloud-arrow-down fa-fw" }, null, -1)),
                x[10] || (x[10] = Z(" Fetch "))
              ], 64))
            ], 8, eP),
            l("button", {
              class: "btn btn-sm btn-warning",
              onClick: S,
              disabled: _.value || a.value,
              title: y.value
            }, [
              a.value ? (N(), P(we, { key: 1 }, [
                x[15] || (x[15] = l("i", { class: "fas fa-spinner fa-spin fa-fw" }, null, -1)),
                x[16] || (x[16] = Z(" Retry "))
              ], 64)) : (N(), P(we, { key: 0 }, [
                x[13] || (x[13] = l("i", { class: "fas fa-redo fa-fw" }, null, -1)),
                x[14] || (x[14] = Z(" Retry "))
              ], 64))
            ], 8, tP),
            l("button", {
              class: pe(`btn btn-sm btn-${h.value.variant}`),
              disabled: h.value.disabled,
              onClick: O,
              title: h.value.tooltip
            }, x[17] || (x[17] = [
              l("i", { class: "fas fa-download fa-fw" }, null, -1)
            ]), 10, nP),
            l("button", {
              class: "btn btn-sm btn-info",
              disabled: g.value || a.value || ae(s).isStreamingActive,
              onClick: R,
              title: T.value
            }, x[18] || (x[18] = [
              l("i", { class: "fas fa-bolt fa-fw" }, null, -1)
            ]), 8, sP)
          ])
        ])
      ]),
      et(l("tr", null, [
        l("td", oP, [
          l("div", rP, [
            l("table", iP, [
              x[19] || (x[19] = l("thead", { class: "table-light" }, [
                l("tr", null, [
                  l("th", { scope: "col" }, "Resource"),
                  l("th", { scope: "col" }, "Status"),
                  l("th", { scope: "col" }, "Fetch Date"),
                  l("th", { scope: "col" }, "Error"),
                  l("th", { scope: "col" }, "Actions")
                ])
              ], -1)),
              l("tbody", null, [
                (N(!0), P(we, null, Xe(w.item.resources, (ee) => (N(), rt(II, {
                  key: `${ee.name}-${ee.repeat_instance}`,
                  resource: ee,
                  mrn: w.item.mrn
                }, null, 8, ["resource", "mrn"]))), 128))
              ])
            ])
          ])
        ])
      ], 512), [
        [Am, i.value]
      ])
    ], 64));
  }
}), lP = /* @__PURE__ */ Qs(aP, [["__scopeId", "data-v-084c86c5"]]), cP = {
  key: 0,
  class: "d-flex justify-content-center"
}, uP = {
  key: 1,
  class: "table table-striped table-hover"
}, dP = { class: "table-light" }, fP = { scope: "col" }, pP = ["checked", "indeterminate"], hP = { key: 0 }, mP = /* @__PURE__ */ Te({
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
    const t = e, n = G(null);
    return Lt(() => t.indeterminate, (s) => {
      n.value && (n.value.indeterminate = s);
    }, { immediate: !0 }), (s, o) => (N(), P("div", null, [
      s.loading ? (N(), P("div", cP, o[1] || (o[1] = [
        l("div", {
          class: "spinner-border",
          role: "status"
        }, [
          l("span", { class: "visually-hidden" }, "Loading...")
        ], -1)
      ]))) : (N(), P("table", uP, [
        l("thead", dP, [
          l("tr", null, [
            l("th", fP, [
              l("input", {
                ref_key: "selectAllCheckbox",
                ref: n,
                class: "form-check-input",
                type: "checkbox",
                checked: s.allSelected,
                indeterminate: s.indeterminate,
                onChange: o[0] || (o[0] = (r) => s.$emit("toggle-select-all"))
              }, null, 40, pP)
            ]),
            o[2] || (o[2] = l("th", { scope: "col" }, "MRN", -1)),
            o[3] || (o[3] = l("th", { scope: "col" }, "Status", -1)),
            o[4] || (o[4] = l("th", { scope: "col" }, "Resources", -1)),
            o[5] || (o[5] = l("th", { scope: "col" }, "Actions", -1))
          ])
        ]),
        l("tbody", null, [
          s.items.length === 0 ? (N(), P("tr", hP, o[6] || (o[6] = [
            l("td", {
              colspan: "5",
              class: "text-center"
            }, "No MRNs to display.", -1)
          ]))) : (N(!0), P(we, { key: 1 }, Xe(s.items, (r) => (N(), rt(lP, {
            key: r.id,
            item: r,
            selected: s.selectedMrns.includes(r.id)
          }, null, 8, ["item", "selected"]))), 128))
        ])
      ]))
    ]));
  }
}), gP = { class: "mb-3" }, vP = { class: "d-flex gap-2 justify-content-end" }, _P = ["onClick"], yP = ["onClick", "disabled"], bP = /* @__PURE__ */ Te({
  __name: "AddMrnModal",
  setup(e, { expose: t }) {
    const n = G(null), s = G(""), o = async () => (s.value = "", await n.value?.show() ? s.value : null), r = (a) => {
      s.value.trim() && a(!0);
    }, i = () => {
      s.value.trim() && n.value?.hide(!0);
    };
    return t({ show: o }), (a, c) => {
      const f = Je("b-modal");
      return N(), rt(f, {
        ref_key: "addMrnModal",
        ref: n
      }, {
        title: be(() => c[1] || (c[1] = [
          Z("Add MRN")
        ])),
        footer: be(({ hide: u }) => [
          l("div", vP, [
            l("button", {
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[3] || (c[3] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              Z("Cancel ")
            ]), 8, _P),
            l("button", {
              type: "button",
              class: "btn btn-sm btn-primary",
              onClick: (d) => r(u),
              disabled: !s.value.trim()
            }, c[4] || (c[4] = [
              l("i", { class: "fas fa-plus fa-fw me-1" }, null, -1),
              Z("Add ")
            ]), 8, yP)
          ])
        ]),
        default: be(() => [
          l("div", gP, [
            c[2] || (c[2] = l("label", {
              for: "mrn-input",
              class: "form-label"
            }, "MRN", -1)),
            et(l("input", {
              type: "text",
              class: "form-control",
              id: "mrn-input",
              "onUpdate:modelValue": c[0] || (c[0] = (u) => s.value = u),
              onKeyup: RE(i, ["enter"]),
              placeholder: "Enter MRN"
            }, null, 544), [
              [Ao, s.value]
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), EP = { class: "mb-3" }, wP = ["placeholder"], AP = { class: "mb-3" }, SP = {
  key: 0,
  class: "text-center text-muted py-3"
}, OP = {
  key: 1,
  class: "resource-type-list"
}, CP = ["value", "id", "disabled"], TP = ["for"], NP = { class: "mb-3" }, DP = { class: "form-check" }, xP = { class: "form-check" }, kP = { class: "d-flex align-items-center mb-2" }, RP = { key: 0 }, IP = { class: "mb-2" }, PP = { class: "small text-muted" }, VP = { key: 1 }, MP = { class: "small text-muted" }, LP = { key: 0 }, FP = { key: 1 }, BP = { class: "d-flex gap-2 justify-content-end" }, jP = ["onClick"], UP = ["onClick", "disabled"], HP = /* @__PURE__ */ Te({
  __name: "ArchiveOptionsModal",
  props: {
    selectedMrns: { default: () => [] },
    archiveType: {},
    estimatedResources: { default: 0 }
  },
  emits: ["create"],
  setup(e, { expose: t, emit: n }) {
    const s = e, o = vs(), r = n, i = G(null), a = G({
      archive_name: "",
      resource_types: [],
      background_mode: !1
    }), c = W(() => {
      const v = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
      return (s.archiveType === "selected" ? o.mrns.filter((E) => s.selectedMrns.includes(E.mrn)) : o.mrns).forEach((E) => {
        E.status_summary ? Object.entries(E.status_summary.resource_type_statuses).forEach(([g, T]) => {
          v.add(g), T.is_archivable && _.add(g);
        }) : E.resources.forEach((g) => {
          g.status !== "Deleted" && (v.add(g.name), g.status === "Completed" && _.add(g.name));
        });
      }), Array.from(v).sort().map((E) => ({
        name: E,
        isAvailable: _.has(E)
      }));
    }), f = W(() => {
      const v = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_");
      return `fhir_archive_${s.archiveType === "selected" ? "selected" : "all"}_${v}`;
    }), u = W(() => {
      const v = a.value.resource_types || [], _ = s.archiveType === "selected" ? o.mrns.filter((E) => s.selectedMrns.includes(E.mrn)) : o.mrns;
      let y = 0;
      return _.forEach((E) => {
        E.status_summary ? Object.entries(E.status_summary.resource_type_statuses).forEach(([g, T]) => {
          v.length === 0 ? T.is_archivable && (y += T.completed_count) : v.includes(g) && T.is_archivable && (y += T.completed_count);
        }) : E.resources.forEach((g) => {
          g.status === "Completed" && (v.length === 0 || v.includes(g.name)) && (y += 1);
        });
      }), y;
    }), d = W(() => {
      const v = c.value.filter((y) => y.isAvailable), _ = c.value.length;
      return {
        availableTypes: v.length,
        totalTypes: _
      };
    }), m = W(() => !(a.value.archive_name && !/^[a-zA-Z0-9_-]+$/.test(a.value.archive_name.trim()) || s.archiveType === "selected" && s.selectedMrns.length === 0)), p = async () => (a.value = {
      archive_name: "",
      resource_types: [],
      background_mode: !1
      // Will be calculated dynamically
    }, a.value.background_mode = u.value > 50, await i.value?.show()), h = (v) => {
      if (!m.value) return;
      const _ = { ...a.value };
      _.archive_name && (_.archive_name = _.archive_name.trim()), _.resource_types && _.resource_types.length === 0 && delete _.resource_types, r("create", _, s.archiveType, s.selectedMrns), v(!0);
    };
    return t({ show: p }), (v, _) => {
      const y = Je("b-modal");
      return N(), rt(y, {
        ref_key: "archiveOptionsModal",
        ref: i
      }, {
        title: be(() => _[4] || (_[4] = [
          Z("Archive Options")
        ])),
        footer: be(({ hide: E }) => [
          l("div", BP, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (g) => E(!1)
            }, _[16] || (_[16] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              Z("Cancel ")
            ]), 8, jP),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (g) => h(E),
              disabled: !m.value
            }, _[17] || (_[17] = [
              l("i", { class: "fas fa-archive fa-fw me-1" }, null, -1),
              Z("Create Archive ")
            ]), 8, UP)
          ])
        ]),
        default: be(() => [
          l("div", null, [
            l("div", EP, [
              _[5] || (_[5] = l("label", {
                for: "archive-name",
                class: "form-label"
              }, "Archive Name", -1)),
              et(l("input", {
                type: "text",
                class: "form-control",
                id: "archive-name",
                "onUpdate:modelValue": _[0] || (_[0] = (E) => a.value.archive_name = E),
                placeholder: f.value,
                maxlength: "100"
              }, null, 8, wP), [
                [Ao, a.value.archive_name]
              ]),
              _[6] || (_[6] = l("div", { class: "form-text" }, "Optional custom name for the archive file (without extension)", -1))
            ]),
            l("div", AP, [
              _[8] || (_[8] = l("label", { class: "form-label" }, "Resource Types", -1)),
              _[9] || (_[9] = l("div", { class: "form-text mb-2" }, "Select which resource types to include", -1)),
              c.value.length === 0 ? (N(), P("div", SP, _[7] || (_[7] = [
                l("i", { class: "fas fa-info-circle me-2" }, null, -1),
                Z(" No resource types found ")
              ]))) : (N(), P("div", OP, [
                (N(!0), P(we, null, Xe(c.value, (E) => (N(), P("div", {
                  class: "form-check",
                  key: E.name
                }, [
                  et(l("input", {
                    class: "form-check-input",
                    type: "checkbox",
                    value: E.name,
                    "onUpdate:modelValue": _[1] || (_[1] = (g) => a.value.resource_types = g),
                    id: `resource-${E.name}`,
                    disabled: !E.isAvailable
                  }, null, 8, CP), [
                    [NE, a.value.resource_types]
                  ]),
                  l("label", {
                    class: "form-check-label",
                    for: `resource-${E.name}`
                  }, j(E.name), 9, TP)
                ]))), 128))
              ]))
            ]),
            l("div", NP, [
              _[12] || (_[12] = l("label", { class: "form-label" }, "Processing Mode", -1)),
              l("div", DP, [
                et(l("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "immediate-mode",
                  value: !1,
                  "onUpdate:modelValue": _[2] || (_[2] = (E) => a.value.background_mode = E)
                }, null, 512), [
                  [Qi, a.value.background_mode]
                ]),
                _[10] || (_[10] = l("label", {
                  class: "form-check-label",
                  for: "immediate-mode"
                }, [
                  l("strong", null, "Immediate Processing"),
                  l("div", { class: "small text-muted" }, "Process archive immediately (recommended for small selections)")
                ], -1))
              ]),
              l("div", xP, [
                et(l("input", {
                  class: "form-check-input",
                  type: "radio",
                  name: "processing-mode",
                  id: "background-mode",
                  value: !0,
                  "onUpdate:modelValue": _[3] || (_[3] = (E) => a.value.background_mode = E)
                }, null, 512), [
                  [Qi, a.value.background_mode]
                ]),
                _[11] || (_[11] = l("label", {
                  class: "form-check-label",
                  for: "background-mode"
                }, [
                  l("strong", null, "Background Processing"),
                  l("div", { class: "small text-muted" }, "Process archive in background (recommended for large collections)")
                ], -1))
              ])
            ]),
            l("div", {
              class: pe(["alert", u.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              l("div", kP, [
                l("i", {
                  class: pe([u.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                _[13] || (_[13] = l("strong", null, "Archive Summary", -1))
              ]),
              u.value > 0 ? (N(), P("div", RP, [
                l("div", IP, [
                  l("strong", null, j(u.value), 1),
                  _[14] || (_[14] = Z(" completed resources will be included "))
                ]),
                l("div", PP, j(d.value.availableTypes) + " of " + j(d.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (N(), P("div", VP, [
                _[15] || (_[15] = l("div", { class: "mb-1" }, [
                  l("strong", null, "No resources available for archiving")
                ], -1)),
                l("div", MP, [
                  d.value.totalTypes === 0 ? (N(), P("span", LP, " No resource types found ")) : (N(), P("span", FP, j(d.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), $P = { key: 0 }, WP = { key: 1 }, KP = { class: "row" }, zP = { class: "col-md-6" }, qP = { class: "card" }, YP = { class: "card-body" }, XP = { class: "list-unstyled mb-0" }, GP = { key: 0 }, QP = { class: "col-md-6" }, JP = { class: "card" }, ZP = { class: "card-body" }, eV = { key: 0 }, tV = { key: 1 }, nV = { key: 2 }, sV = { class: "alert alert-danger" }, oV = { class: "d-flex gap-2 justify-content-end" }, rV = ["onClick"], iV = ["onClick"], aV = ["onClick"], lV = /* @__PURE__ */ Te({
  __name: "ArchiveCreationModal",
  setup(e, { expose: t }) {
    const n = G(null), s = G(null), o = (a) => {
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
      const f = Je("b-modal");
      return N(), rt(f, {
        ref_key: "archiveCreationModal",
        ref: n,
        size: "lg",
        "hide-footer": ""
      }, {
        title: be(() => c[0] || (c[0] = [
          Z("Archive Creation")
        ])),
        footer: be(({ hide: u }) => [
          l("div", oV, [
            s.value ? s.value.success ? (N(), P(we, { key: 1 }, [
              s.value.processing_mode === "immediate" && s.value.download_url ? (N(), P("button", {
                key: 0,
                type: "button",
                class: "btn btn-sm btn-primary",
                onClick: r
              }, c[14] || (c[14] = [
                l("i", { class: "fas fa-download fa-fw me-1" }, null, -1),
                Z("Download Now ")
              ]))) : Ee("", !0),
              l("button", {
                type: "button",
                class: "btn btn-sm btn-secondary",
                onClick: (d) => u(!0)
              }, c[15] || (c[15] = [
                l("i", { class: "fas fa-check fa-fw me-1" }, null, -1),
                Z("Done ")
              ]), 8, iV)
            ], 64)) : (N(), P("button", {
              key: 2,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[16] || (c[16] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              Z("Close ")
            ]), 8, aV)) : (N(), P("button", {
              key: 0,
              type: "button",
              class: "btn btn-sm btn-secondary",
              onClick: (d) => u(!1)
            }, c[13] || (c[13] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              Z("Cancel ")
            ]), 8, rV))
          ])
        ]),
        default: be(() => [
          s.value ? s.value.success ? (N(), P("div", WP, [
            c[10] || (c[10] = l("div", { class: "text-center mb-4" }, [
              l("i", {
                class: "fas fa-check-circle text-success",
                style: { "font-size": "3rem" }
              }),
              l("h6", { class: "mt-3 mb-0" }, "Archive Created Successfully")
            ], -1)),
            l("div", KP, [
              l("div", zP, [
                l("div", qP, [
                  l("div", YP, [
                    c[6] || (c[6] = l("h6", { class: "card-title" }, "Archive Details", -1)),
                    l("ul", XP, [
                      l("li", null, [
                        c[2] || (c[2] = l("strong", null, "Archive ID:", -1)),
                        Z(" " + j(s.value.archive_id), 1)
                      ]),
                      l("li", null, [
                        c[3] || (c[3] = l("strong", null, "Resources:", -1)),
                        Z(" " + j(s.value.total_resources), 1)
                      ]),
                      s.value.file_size ? (N(), P("li", GP, [
                        c[4] || (c[4] = l("strong", null, "Size:", -1)),
                        Z(" " + j(i(s.value.file_size)), 1)
                      ])) : Ee("", !0),
                      l("li", null, [
                        c[5] || (c[5] = l("strong", null, "Mode:", -1)),
                        Z(" " + j(s.value.processing_mode), 1)
                      ])
                    ])
                  ])
                ])
              ]),
              l("div", QP, [
                l("div", JP, [
                  l("div", ZP, [
                    c[9] || (c[9] = l("h6", { class: "card-title" }, "Status", -1)),
                    s.value.processing_mode === "immediate" ? (N(), P("div", eV, c[7] || (c[7] = [
                      l("span", { class: "badge bg-success" }, [
                        l("i", { class: "fas fa-check me-1" }),
                        Z("Ready for Download ")
                      ], -1),
                      l("p", { class: "mt-2 mb-0 small text-muted" }, "Archive is ready for immediate download.", -1)
                    ]))) : (N(), P("div", tV, c[8] || (c[8] = [
                      l("span", { class: "badge bg-info" }, [
                        l("i", { class: "fas fa-clock me-1" }),
                        Z("Processing in Background ")
                      ], -1),
                      l("p", { class: "mt-2 mb-0 small text-muted" }, "Archive is being processed. You'll be able to download it when complete.", -1)
                    ])))
                  ])
                ])
              ])
            ])
          ])) : (N(), P("div", nV, [
            c[12] || (c[12] = l("div", { class: "text-center mb-4" }, [
              l("i", {
                class: "fas fa-exclamation-triangle text-danger",
                style: { "font-size": "3rem" }
              }),
              l("h6", { class: "mt-3 mb-0" }, "Archive Creation Failed")
            ], -1)),
            l("div", sV, [
              c[11] || (c[11] = l("strong", null, "Error:", -1)),
              Z(" " + j(s.value.message), 1)
            ])
          ])) : (N(), P("div", $P, c[1] || (c[1] = [
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
}), cV = { class: "mb-3" }, uV = ["for"], dV = ["id", "value", "placeholder"], fV = {
  key: 0,
  class: "form-text"
}, pV = /* @__PURE__ */ Te({
  __name: "ArchiveNameInput",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "archive_name" },
    showHelp: { type: Boolean, default: !0 },
    helpText: { default: "Optional custom name for the archive file (without extension)" },
    inputId: { default: "archive-name" }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (N(), P("div", cV, [
      l("label", {
        for: t.inputId,
        class: "form-label"
      }, "Archive Name", 8, uV),
      l("input", {
        type: "text",
        class: "form-control",
        id: t.inputId,
        value: t.modelValue,
        onInput: n[0] || (n[0] = (s) => t.$emit("update:modelValue", s.target.value)),
        placeholder: t.placeholder,
        maxlength: "100"
      }, null, 40, dV),
      t.showHelp ? (N(), P("div", fV, j(t.helpText), 1)) : Ee("", !0)
    ]));
  }
}), hV = { class: "mb-3" }, mV = {
  key: 0,
  class: "text-center text-muted py-3"
}, gV = {
  key: 1,
  class: "resource-type-list"
}, vV = {
  key: 0,
  class: "form-check mb-2"
}, _V = ["checked"], yV = ["value", "checked", "id", "disabled"], bV = ["for"], EV = /* @__PURE__ */ Te({
  __name: "ResourceTypesSelector",
  props: {
    selectedTypes: {},
    availableTypes: {},
    showSelectAll: { type: Boolean, default: !0 }
  },
  emits: ["update:selectedTypes"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = W(() => {
      const a = n.availableTypes.filter((c) => c.isAvailable).map((c) => c.name);
      return a.length > 0 && a.every((c) => n.selectedTypes.includes(c));
    }), r = (a) => {
      if (a.target.checked) {
        const f = n.availableTypes.filter((u) => u.isAvailable).map((u) => u.name);
        s("update:selectedTypes", f);
      } else
        s("update:selectedTypes", []);
    }, i = (a) => {
      const c = a.target, f = c.value;
      let u = [...n.selectedTypes];
      c.checked ? u.includes(f) || u.push(f) : u = u.filter((d) => d !== f), s("update:selectedTypes", u);
    };
    return (a, c) => (N(), P("div", hV, [
      c[2] || (c[2] = l("label", { class: "form-label" }, "Resource Types", -1)),
      c[3] || (c[3] = l("div", { class: "form-text mb-2" }, "Select which resource types to include", -1)),
      a.availableTypes.length === 0 ? (N(), P("div", mV, c[0] || (c[0] = [
        l("i", { class: "fas fa-info-circle me-2" }, null, -1),
        Z(" No resource types found ")
      ]))) : (N(), P("div", gV, [
        a.showSelectAll ? (N(), P("div", vV, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            checked: o.value,
            onChange: r,
            id: "select-all-types"
          }, null, 40, _V),
          c[1] || (c[1] = l("label", {
            class: "form-check-label fw-bold",
            for: "select-all-types"
          }, " Select All ", -1))
        ])) : Ee("", !0),
        (N(!0), P(we, null, Xe(a.availableTypes, (f) => (N(), P("div", {
          class: "form-check",
          key: f.name
        }, [
          l("input", {
            class: "form-check-input",
            type: "checkbox",
            value: f.name,
            checked: a.selectedTypes.includes(f.name),
            onChange: i,
            id: `resource-${f.name}`,
            disabled: !f.isAvailable
          }, null, 40, yV),
          l("label", {
            class: "form-check-label",
            for: `resource-${f.name}`
          }, j(f.name), 9, bV)
        ]))), 128))
      ]))
    ]));
  }
}), wV = { class: "mb-3" }, AV = { class: "bg-light p-3 rounded" }, SV = { key: 0 }, OV = { class: "small text-muted" }, CV = { key: 0 }, TV = { key: 1 }, NV = { class: "d-flex align-items-center mb-2" }, DV = { key: 0 }, xV = { class: "mb-2" }, kV = { class: "small text-muted" }, RV = { key: 1 }, IV = { class: "small text-muted" }, PV = { key: 0 }, VV = { key: 1 }, MV = { class: "d-flex gap-2 justify-content-end" }, LV = ["onClick"], FV = ["onClick", "disabled"], BV = /* @__PURE__ */ Te({
  __name: "StreamingArchiveModal",
  props: {
    selectedMrns: { default: () => [] },
    archiveType: {}
  },
  setup(e, { expose: t }) {
    const n = e, s = vs(), o = Eu(), r = _s(), i = G(null), a = G({
      mrns: [],
      archive_name: "",
      resource_types: []
    }), c = W(() => {
      const y = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set();
      return (n.archiveType === "selected" ? s.mrns.filter((T) => n.selectedMrns.includes(T.mrn)) : s.mrns).forEach((T) => {
        T.status_summary ? Object.entries(T.status_summary.resource_type_statuses).forEach(([I, C]) => {
          y.add(I), C.is_archivable && E.add(I);
        }) : T.resources.forEach((I) => {
          I.status !== "Deleted" && (y.add(I.name), I.status === "Completed" && E.add(I.name));
        });
      }), Array.from(y).sort().map((T) => ({
        name: T,
        isAvailable: E.has(T)
      }));
    }), f = W(() => {
      const y = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[T:]/g, "_");
      return `streaming_archive_${n.archiveType === "selected" ? "selected" : "all"}_${y}`;
    }), u = W(() => {
      const y = a.value.resource_types || [], E = n.archiveType === "selected" ? s.mrns.filter((T) => n.selectedMrns.includes(T.mrn)) : s.mrns;
      let g = 0;
      return E.forEach((T) => {
        T.status_summary ? Object.entries(T.status_summary.resource_type_statuses).forEach(([I, C]) => {
          y.length === 0 ? C.is_archivable && (g += C.completed_count) : y.includes(I) && C.is_archivable && (g += C.completed_count);
        }) : T.resources.forEach((I) => {
          I.status === "Completed" && (y.length === 0 || y.includes(I.name)) && (g += 1);
        });
      }), g;
    }), d = W(() => {
      const y = c.value.filter((g) => g.isAvailable), E = c.value.length;
      return {
        availableTypes: y.length,
        totalTypes: E
      };
    }), m = W(() => !(a.value.archive_name && !/^[a-zA-Z0-9_-]+$/.test(a.value.archive_name.trim()) || n.archiveType === "selected" && n.selectedMrns.length === 0)), p = (y) => {
      a.value.resource_types = y;
    }, h = async () => (a.value = {
      mrns: n.archiveType === "selected" ? n.selectedMrns : [],
      archive_name: "",
      resource_types: []
    }, await i.value?.show()), v = () => a.value.archive_name || f.value, _ = async (y) => {
      if (!m.value) return;
      const E = v();
      try {
        o.startStreaming(E), r.showInfo(`Started streaming download: ${E}`), y(!0);
        const g = {
          ...a.value,
          mrns: n.archiveType === "selected" ? n.selectedMrns : []
        };
        g.archive_name || delete g.archive_name, g.resource_types?.length || delete g.resource_types;
        let T;
        n.archiveType === "selected" ? T = await Ye.streamSelectedArchive(n.selectedMrns, g) : T = await Ye.streamAllArchive(g);
        const I = new Blob([T.data]), C = window.URL.createObjectURL(I), D = document.createElement("a");
        D.href = C, D.download = `${E}.zip`, document.body.appendChild(D), D.click(), document.body.removeChild(D), window.URL.revokeObjectURL(C);
        const F = o.finishStreaming();
        r.showSuccess(`Download completed: ${E} (${F}s)`);
      } catch (g) {
        o.finishStreaming(), r.showError(`Streaming download failed: ${g.message}`);
      }
    };
    return t({ show: h }), (y, E) => {
      const g = Je("b-modal");
      return N(), rt(g, {
        ref_key: "streamingArchiveModal",
        ref: i,
        size: "lg"
      }, {
        title: be(() => E[1] || (E[1] = [
          l("i", { class: "fas fa-bolt text-primary me-2" }, null, -1),
          Z(" Streaming Archive Download ")
        ])),
        footer: be(({ hide: T }) => [
          l("div", MV, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (I) => T(!1)
            }, E[9] || (E[9] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              Z("Cancel ")
            ]), 8, LV),
            l("button", {
              class: "btn btn-sm btn-primary",
              type: "button",
              onClick: (I) => _(T),
              disabled: !m.value || ae(o).isStreamingActive
            }, [
              E[10] || (E[10] = l("i", { class: "fas fa-download fa-fw me-1" }, null, -1)),
              Z(" " + j(ae(o).isStreamingActive ? "Downloading..." : "Start Streaming Download"), 1)
            ], 8, FV)
          ])
        ]),
        default: be(() => [
          l("div", null, [
            E[8] || (E[8] = l("div", { class: "alert alert-info mb-4" }, [
              l("i", { class: "fas fa-info-circle me-2" }),
              l("strong", null, "Streaming Download"),
              l("div", { class: "small" }, " Your archive will be generated and downloaded immediately without storing on the server. Perfect for one-time downloads or when server storage is limited. ")
            ], -1)),
            ce(pV, {
              modelValue: a.value.archive_name,
              "onUpdate:modelValue": E[0] || (E[0] = (T) => a.value.archive_name = T),
              placeholder: f.value,
              "show-help": !0,
              "help-text": "Archive will be downloaded immediately as [name].zip",
              "input-id": "streaming-archive-name"
            }, null, 8, ["modelValue", "placeholder"]),
            ce(EV, {
              "selected-types": a.value.resource_types || [],
              "available-types": c.value,
              "onUpdate:selectedTypes": p,
              "show-select-all": !0
            }, null, 8, ["selected-types", "available-types"]),
            l("div", wV, [
              E[4] || (E[4] = l("label", { class: "form-label" }, "Selected Records", -1)),
              l("div", AV, [
                y.archiveType === "selected" ? (N(), P("div", SV, [
                  l("strong", null, j(y.selectedMrns.length), 1),
                  E[2] || (E[2] = Z(" selected MRNs ")),
                  l("div", OV, [
                    Z(j(y.selectedMrns.slice(0, 3).join(", ")) + " ", 1),
                    y.selectedMrns.length > 3 ? (N(), P("span", CV, " and " + j(y.selectedMrns.length - 3) + " more... ", 1)) : Ee("", !0)
                  ])
                ])) : (N(), P("div", TV, E[3] || (E[3] = [
                  l("strong", null, "All project records", -1),
                  l("div", { class: "small text-muted" }, "Complete project dataset", -1)
                ])))
              ])
            ]),
            l("div", {
              class: pe(["alert", u.value > 0 ? "alert-info" : "alert-warning"])
            }, [
              l("div", NV, [
                l("i", {
                  class: pe([u.value > 0 ? "fas fa-info-circle" : "fas fa-exclamation-triangle", "me-2"])
                }, null, 2),
                E[5] || (E[5] = l("strong", null, "Streaming Summary", -1))
              ]),
              u.value > 0 ? (N(), P("div", DV, [
                l("div", xV, [
                  l("strong", null, j(u.value), 1),
                  E[6] || (E[6] = Z(" completed resources will be streamed "))
                ]),
                l("div", kV, j(d.value.availableTypes) + " of " + j(d.value.totalTypes) + " resource types have completed data ", 1)
              ])) : (N(), P("div", RV, [
                E[7] || (E[7] = l("div", { class: "mb-1" }, [
                  l("strong", null, "No resources available for streaming")
                ], -1)),
                l("div", IV, [
                  d.value.totalTypes === 0 ? (N(), P("span", PV, " No resource types found ")) : (N(), P("span", VV, j(d.value.totalTypes) + " resource types found, but none have completed data ", 1))
                ])
              ]))
            ], 2)
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), jV = { class: "card" }, UV = { class: "card-header d-flex justify-content-between align-items-center" }, HV = ["disabled"], $V = { class: "card-body" }, WV = {
  key: 0,
  class: "text-center"
}, KV = {
  key: 1,
  class: "row g-3"
}, zV = { class: "col-md-6" }, qV = { class: "border rounded p-3 h-100" }, YV = { class: "row g-2" }, XV = { class: "col-6" }, GV = { class: "text-center" }, QV = { class: "h4 mb-1 text-primary" }, JV = { class: "col-6" }, ZV = { class: "text-center" }, eM = { class: "h4 mb-1 text-info" }, tM = { class: "col-md-6" }, nM = { class: "border rounded p-3 h-100" }, sM = { class: "row g-2" }, oM = { class: "text-center" }, rM = { class: "text-muted" }, iM = { class: "col-12" }, aM = { class: "border rounded p-3" }, lM = { class: "mb-2" }, cM = { class: "d-flex justify-content-between align-items-center mb-1" }, uM = { class: "text-muted" }, dM = {
  class: "progress",
  style: { height: "8px" }
}, fM = ["aria-valuenow"], pM = {
  key: 0,
  class: "mb-2"
}, hM = { class: "d-flex justify-content-between align-items-center mb-1" }, mM = { class: "text-muted" }, gM = {
  class: "progress",
  style: { height: "6px" }
}, vM = ["aria-valuenow"], _M = { class: "mb-2" }, yM = { class: "d-flex justify-content-between align-items-center mb-1" }, bM = { class: "text-muted" }, EM = {
  class: "progress",
  style: { height: "12px" }
}, wM = ["title"], AM = ["title"], SM = ["title"], OM = ["title"], CM = ["title"], TM = {
  class: "d-flex justify-content-start mt-1",
  style: { "font-size": "0.75rem" }
}, NM = {
  key: 0,
  class: "me-3"
}, DM = {
  key: 1,
  class: "me-3"
}, xM = {
  key: 2,
  class: "me-3"
}, kM = {
  key: 3,
  class: "me-3"
}, RM = {
  key: 4,
  class: "me-3"
}, IM = {
  key: 2,
  class: "text-center text-muted"
}, PM = /* @__PURE__ */ Te({
  __name: "ProjectSummaryWidget",
  setup(e) {
    const t = vs(), n = G(!1), s = W(() => t.projectSummary), o = W(() => s.value ? Object.values(s.value.overall_status_counts).reduce((m, p) => m + p, 0) : 0), r = W(() => {
      if (!s.value) return 0;
      const p = s.value.overall_status_counts.deleted || 0;
      return o.value - p;
    }), i = W(() => {
      if (!s.value || r.value === 0) return 0;
      const m = s.value.overall_status_counts.completed || 0;
      return Math.round(m / r.value * 100);
    }), a = W(() => {
      if (!s.value || r.value === 0) return 0;
      const m = s.value.overall_status_counts.failed || 0;
      return Math.round(m / r.value * 100);
    }), c = W(() => {
      if (!s.value || r.value === 0)
        return {
          completed: 0,
          failed: 0,
          fetching: 0,
          pending: 0,
          outdated: 0
        };
      const m = s.value.overall_status_counts;
      return {
        completed: Math.round((m.completed || 0) / r.value * 100),
        failed: Math.round((m.failed || 0) / r.value * 100),
        fetching: Math.round((m.fetching || 0) / r.value * 100),
        pending: Math.round((m.pending || 0) / r.value * 100),
        outdated: Math.round((m.outdated || 0) / r.value * 100)
      };
    }), f = (m) => {
      switch (m.toLowerCase()) {
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
    }, u = (m) => m.charAt(0).toUpperCase() + m.slice(1), d = async () => {
      try {
        n.value = !0, await t.getProjectSummary();
      } catch (m) {
        console.error("Failed to refresh project summary:", m);
      } finally {
        n.value = !1;
      }
    };
    return Ht(() => {
      d();
    }), (m, p) => (N(), P("div", jV, [
      l("div", UV, [
        p[0] || (p[0] = l("h6", { class: "mb-0" }, [
          l("i", { class: "fas fa-chart-bar fa-fw" }),
          Z(" Project Summary ")
        ], -1)),
        l("button", {
          class: "btn btn-sm btn-outline-secondary",
          onClick: d,
          disabled: n.value,
          title: "Refresh summary"
        }, [
          l("i", {
            class: pe(["fas fa-rotate-right fa-fw", { "fa-spin": n.value }])
          }, null, 2)
        ], 8, HV)
      ]),
      l("div", $V, [
        n.value ? (N(), P("div", WV, p[1] || (p[1] = [
          l("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            l("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : s.value ? (N(), P("div", KV, [
          l("div", zV, [
            l("div", qV, [
              p[4] || (p[4] = l("h6", { class: "text-muted mb-3" }, "Overall Statistics", -1)),
              l("div", YV, [
                l("div", XV, [
                  l("div", GV, [
                    l("div", QV, j(s.value.total_mrns), 1),
                    p[2] || (p[2] = l("small", { class: "text-muted" }, "Total MRNs", -1))
                  ])
                ]),
                l("div", JV, [
                  l("div", ZV, [
                    l("div", eM, j(o.value), 1),
                    p[3] || (p[3] = l("small", { class: "text-muted" }, "Total Resources", -1))
                  ])
                ])
              ])
            ])
          ]),
          l("div", tM, [
            l("div", nM, [
              p[5] || (p[5] = l("h6", { class: "text-muted mb-3" }, "Resource Status", -1)),
              l("div", sM, [
                (N(!0), P(we, null, Xe(s.value.overall_status_counts, (h, v) => (N(), P("div", {
                  key: v,
                  class: "col-6"
                }, [
                  l("div", oM, [
                    l("div", {
                      class: pe(["h5 mb-1", f(v)])
                    }, j(h), 3),
                    l("small", rM, j(u(v)), 1)
                  ])
                ]))), 128))
              ])
            ])
          ]),
          l("div", iM, [
            l("div", aM, [
              p[14] || (p[14] = l("h6", { class: "text-muted mb-3" }, "Completion Progress", -1)),
              l("div", lM, [
                l("div", cM, [
                  p[6] || (p[6] = l("small", { class: "text-muted" }, "Overall Completion", -1)),
                  l("small", uM, j(i.value) + "%", 1)
                ]),
                l("div", dM, [
                  l("div", {
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Vt({ width: i.value + "%" }),
                    "aria-valuenow": i.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, fM)
                ])
              ]),
              a.value > 0 ? (N(), P("div", pM, [
                l("div", hM, [
                  p[7] || (p[7] = l("small", { class: "text-muted" }, "Error Rate", -1)),
                  l("small", mM, j(a.value) + "%", 1)
                ]),
                l("div", gM, [
                  l("div", {
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Vt({ width: a.value + "%" }),
                    "aria-valuenow": a.value,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }, null, 12, vM)
                ])
              ])) : Ee("", !0),
              l("div", _M, [
                l("div", yM, [
                  p[8] || (p[8] = l("small", { class: "text-muted" }, "Resource States Breakdown", -1)),
                  l("small", bM, j(r.value) + " active resources", 1)
                ]),
                l("div", EM, [
                  c.value.completed > 0 ? (N(), P("div", {
                    key: 0,
                    class: "progress-bar bg-success",
                    role: "progressbar",
                    style: Vt({ width: c.value.completed + "%" }),
                    title: `Completed: ${s.value?.overall_status_counts.completed || 0} (${c.value.completed}%)`
                  }, null, 12, wM)) : Ee("", !0),
                  c.value.fetching > 0 ? (N(), P("div", {
                    key: 1,
                    class: "progress-bar bg-info",
                    role: "progressbar",
                    style: Vt({ width: c.value.fetching + "%" }),
                    title: `Fetching: ${s.value?.overall_status_counts.fetching || 0} (${c.value.fetching}%)`
                  }, null, 12, AM)) : Ee("", !0),
                  c.value.pending > 0 ? (N(), P("div", {
                    key: 2,
                    class: "progress-bar bg-warning",
                    role: "progressbar",
                    style: Vt({ width: c.value.pending + "%" }),
                    title: `Pending: ${s.value?.overall_status_counts.pending || 0} (${c.value.pending}%)`
                  }, null, 12, SM)) : Ee("", !0),
                  c.value.failed > 0 ? (N(), P("div", {
                    key: 3,
                    class: "progress-bar bg-danger",
                    role: "progressbar",
                    style: Vt({ width: c.value.failed + "%" }),
                    title: `Failed: ${s.value?.overall_status_counts.failed || 0} (${c.value.failed}%)`
                  }, null, 12, OM)) : Ee("", !0),
                  c.value.outdated > 0 ? (N(), P("div", {
                    key: 4,
                    class: "progress-bar bg-secondary",
                    role: "progressbar",
                    style: Vt({ width: c.value.outdated + "%" }),
                    title: `Outdated: ${s.value?.overall_status_counts.outdated || 0} (${c.value.outdated}%)`
                  }, null, 12, CM)) : Ee("", !0)
                ]),
                l("div", TM, [
                  c.value.completed > 0 ? (N(), P("div", NM, p[9] || (p[9] = [
                    l("span", { class: "badge bg-success me-1" }, "●", -1),
                    Z("Completed ")
                  ]))) : Ee("", !0),
                  c.value.fetching > 0 ? (N(), P("div", DM, p[10] || (p[10] = [
                    l("span", { class: "badge bg-info me-1" }, "●", -1),
                    Z("Fetching ")
                  ]))) : Ee("", !0),
                  c.value.pending > 0 ? (N(), P("div", xM, p[11] || (p[11] = [
                    l("span", { class: "badge bg-warning me-1" }, "●", -1),
                    Z("Pending ")
                  ]))) : Ee("", !0),
                  c.value.failed > 0 ? (N(), P("div", kM, p[12] || (p[12] = [
                    l("span", { class: "badge bg-danger me-1" }, "●", -1),
                    Z("Failed ")
                  ]))) : Ee("", !0),
                  c.value.outdated > 0 ? (N(), P("div", RM, p[13] || (p[13] = [
                    l("span", { class: "badge bg-secondary me-1" }, "●", -1),
                    Z("Outdated ")
                  ]))) : Ee("", !0)
                ])
              ])
            ])
          ])
        ])) : (N(), P("div", IM, p[15] || (p[15] = [
          l("i", { class: "fas fa-info-circle fa-fw" }, null, -1),
          Z(" No summary data available ")
        ])))
      ])
    ]));
  }
}), VM = /* @__PURE__ */ Qs(PM, [["__scopeId", "data-v-437ee7dd"]]), b_ = /* @__PURE__ */ ps("archive", () => {
  const e = Xr(), t = G(!1), n = G([]), s = G(!1), o = G(/* @__PURE__ */ new Set()), r = G({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: !1,
    hasPrevious: !1,
    perPageOptions: [10, 25, 50, 100]
  }), i = G({
    status: "",
    searchQuery: "",
    processingMode: ""
  }), a = W(() => {
    let C = n.value;
    if (i.value.status && (C = C.filter((D) => D.status === i.value.status)), i.value.processingMode && (C = C.filter((D) => D.processing_mode === i.value.processingMode)), i.value.searchQuery) {
      const D = i.value.searchQuery.toLowerCase();
      C = C.filter(
        (F) => F.file_name.toLowerCase().includes(D) || F.archive_id.toLowerCase().includes(D)
      );
    }
    return C;
  }), c = W(() => {
    const C = (r.value.page - 1) * r.value.limit, D = C + r.value.limit, F = a.value;
    return r.value.total = F.length, r.value.totalPages = Math.ceil(F.length / r.value.limit), r.value.hasNext = r.value.page < r.value.totalPages, r.value.hasPrevious = r.value.page > 1, F.slice(C, D);
  }), f = W(
    () => n.value.filter(
      (C) => C.status === "pending" || C.status === "processing"
    )
  ), u = W(
    () => n.value.filter((C) => C.status === "completed")
  ), d = async () => {
    try {
      t.value = !0;
      const C = await Ye.listArchives();
      C.data.success ? (n.value = C.data.archives || [], r.value.total = C.data.total_count || 0) : e.addError({
        message: C.data.message || "Failed to fetch archives",
        source: "ArchiveStore.fetchArchives",
        timestamp: /* @__PURE__ */ new Date()
      });
    } catch (C) {
      e.addError({
        message: `Failed to fetch archives: ${C}`,
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
    createArchiveSelected: async (C, D = {}) => {
      try {
        s.value = !0;
        const F = await Ye.createArchiveSelected(C, D);
        return F.data.success ? (await d(), F.data) : (e.addError({
          message: F.data.message || "Failed to create archive for selected MRNs",
          source: "ArchiveStore.createArchiveSelected",
          timestamp: /* @__PURE__ */ new Date()
        }), F.data);
      } catch (F) {
        return e.addError({
          message: `Failed to create archive for selected MRNs: ${F}`,
          source: "ArchiveStore.createArchiveSelected",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        s.value = !1;
      }
    },
    createArchiveAll: async (C = {}) => {
      try {
        s.value = !0;
        const D = await Ye.createArchiveAll(C);
        return D.data.success ? (await d(), D.data) : (e.addError({
          message: D.data.message || "Failed to create archive for all resources",
          source: "ArchiveStore.createArchiveAll",
          timestamp: /* @__PURE__ */ new Date()
        }), D.data);
      } catch (D) {
        return e.addError({
          message: `Failed to create archive for all resources: ${D}`,
          source: "ArchiveStore.createArchiveAll",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        s.value = !1;
      }
    },
    downloadArchive: async (C) => {
      try {
        const D = await Ye.downloadArchive(C), F = new Blob([D.data], { type: "application/zip" }), O = window.URL.createObjectURL(F), S = document.createElement("a"), w = n.value.find((x) => x.archive_id === C)?.file_name || `archive_${C}.zip`;
        S.href = O, S.download = w, document.body.appendChild(S), S.click(), document.body.removeChild(S), window.URL.revokeObjectURL(O);
      } catch (D) {
        e.addError({
          message: `Failed to download archive: ${D}`,
          source: "ArchiveStore.downloadArchive",
          timestamp: /* @__PURE__ */ new Date()
        });
      }
    },
    deleteArchive: async (C) => {
      const D = n.value.findIndex((O) => O.archive_id === C);
      if (D === -1)
        return e.addError({
          message: "Archive not found",
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      const F = n.value[D];
      try {
        o.value.add(C), n.value.splice(D, 1);
        const O = await Ye.deleteArchive(C);
        return O.data.success || (n.value.splice(D, 0, F), e.addError({
          message: O.data.message || "Failed to delete archive",
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        })), O.data;
      } catch (O) {
        return n.value.splice(D, 0, F), e.addError({
          message: `Failed to delete archive: ${O}`,
          source: "ArchiveStore.deleteArchive",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        o.value.delete(C);
      }
    },
    refreshArchiveStatus: async (C) => {
      await d();
    },
    setPage: (C) => {
      C >= 1 && C <= r.value.totalPages && (r.value.page = C);
    },
    setLimit: async (C) => {
      r.value.limit = C, r.value.page = 1, await d();
    },
    setFilter: (C, D) => {
      i.value[C] = D, r.value.page = 1;
    },
    clearFilters: () => {
      i.value.status = "", i.value.searchQuery = "", i.value.processingMode = "", r.value.page = 1;
    },
    isArchiveDeleting: (C) => o.value.has(C)
  };
}), MM = { class: "p-3" }, LM = {
  key: 0,
  class: "mb-4"
}, FM = {
  key: 1,
  class: "d-flex justify-content-between align-items-center mt-3"
}, BM = { class: "text-muted" }, jM = { class: "d-flex gap-2" }, UM = /* @__PURE__ */ Te({
  __name: "MonitorPage",
  setup(e) {
    const t = vs(), n = bu(), s = b_(), o = _s(), r = G(null), i = G(null), a = G(null), c = G(null);
    Lt(() => n.archiveModalVisible, async (_) => {
      _ && (await i.value?.show(), n.hideArchiveModal());
    }), Lt(() => n.streamingModalVisible, async (_) => {
      _ && (await c.value?.show(), n.hideStreamingModal());
    });
    const f = W({
      get: () => t.pagination.page,
      set: (_) => t.setPage(_)
    }), u = W({
      get: () => t.pagination.limit,
      set: (_) => t.setLimit(_)
    }), d = W(() => t.pagination.total), m = W(() => t.pagination.perPageOptions), p = W(() => {
      const _ = t.pagination.total, y = t.pagination.page, E = t.pagination.limit, g = _ === 0 ? 0 : (y - 1) * E + 1, T = Math.min(y * E, _);
      return { start: g, end: T, total: _ };
    }), h = async () => {
      if (r.value) {
        const _ = await r.value.show();
        if (_)
          try {
            await t.addMrn(_), o.showSuccess("MRN added successfully");
          } catch {
            o.showError("Failed to add MRN");
          }
      }
    }, v = async (_, y, E) => {
      try {
        let g;
        y === "selected" && E ? g = await s.createArchiveSelected(E, _) : g = await s.createArchiveAll(_), g && (a.value?.show(g), g.success ? o.showSuccess(g.message) : o.showError(g.message));
      } catch (g) {
        console.error("Failed to create archive:", g), o.showError("Failed to create archive");
      }
    };
    return Ht(async () => {
      try {
        await Promise.all([
          t.fetchMrns(),
          t.getProjectSummary()
        ]);
      } catch (_) {
        console.error("Failed to load initial data:", _), o.showError("Failed to load initial data");
      }
    }), (_, y) => {
      const E = Je("b-pagination"), g = Je("b-pagination-dropdown");
      return N(), P("div", MM, [
        ce(mI, { onAddMrn: h }),
        ae(n).showSummary ? (N(), P("div", LM, [
          ce(VM)
        ])) : Ee("", !0),
        ce(mP, {
          items: ae(t).mrns,
          loading: ae(t).loading,
          "selected-mrns": ae(t).selectedMrns,
          "all-selected": ae(t).allSelected,
          indeterminate: ae(t).indeterminate,
          onToggleSelectAll: ae(t).toggleSelectAll
        }, null, 8, ["items", "loading", "selected-mrns", "all-selected", "indeterminate", "onToggleSelectAll"]),
        ae(t).pagination.total > 0 ? (N(), P("div", FM, [
          l("small", BM, " Showing " + j(p.value.start) + "-" + j(p.value.end) + " of " + j(p.value.total) + " MRNs ", 1),
          l("div", jM, [
            ce(E, {
              size: "sm",
              perPage: u.value,
              totalItems: d.value,
              modelValue: f.value,
              "onUpdate:modelValue": y[0] || (y[0] = (T) => f.value = T)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            ce(g, {
              options: m.value,
              modelValue: u.value,
              "onUpdate:modelValue": y[1] || (y[1] = (T) => u.value = T)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : Ee("", !0),
        ce(bP, {
          ref_key: "addMrnModal",
          ref: r
        }, null, 512),
        (N(), rt(Bo, { to: "body" }, [
          ce(HP, {
            ref_key: "archiveOptionsModal",
            ref: i,
            "selected-mrns": ae(n).archiveModalSelectedMrns,
            "archive-type": ae(n).archiveModalType,
            onCreate: v
          }, null, 8, ["selected-mrns", "archive-type"]),
          ce(lV, {
            ref_key: "archiveCreationModal",
            ref: a
          }, null, 512),
          ce(BV, {
            ref_key: "streamingArchiveModal",
            ref: c,
            "selected-mrns": ae(n).streamingModalSelectedMrns,
            "archive-type": ae(n).streamingModalType
          }, null, 8, ["selected-mrns", "archive-type"])
        ]))
      ]);
    };
  }
}), E_ = /* @__PURE__ */ ps("task", () => {
  const e = Xr(), t = G(!1), n = G([]), s = G(!1), o = G(/* @__PURE__ */ new Set()), r = G({
    page: 1,
    limit: 25,
    total: 0,
    total_pages: 0,
    has_next: !1,
    has_previous: !1
  }), i = G({
    status: "",
    task_type: "",
    search_query: ""
  }), a = W(() => {
    let O = n.value;
    if (i.value.status && (O = O.filter((S) => S.status === i.value.status)), i.value.task_type && (O = O.filter((S) => S.key === i.value.task_type)), i.value.search_query) {
      const S = i.value.search_query.toLowerCase();
      O = O.filter(
        (R) => R.id.toLowerCase().includes(S) || R.key.toLowerCase().includes(S)
      );
    }
    return O;
  }), c = W(() => {
    const O = (r.value.page - 1) * r.value.limit, S = O + r.value.limit, R = a.value;
    return r.value.total = R.length, r.value.total_pages = Math.ceil(R.length / r.value.limit), r.value.has_next = r.value.page < r.value.total_pages, r.value.has_previous = r.value.page > 1, R.slice(O, S);
  }), f = W(
    () => n.value.filter((O) => O.status === "pending")
  ), u = W(
    () => n.value.filter((O) => O.status === "processing")
  ), d = W(
    () => n.value.filter((O) => O.status === "completed")
  ), m = W(
    () => n.value.filter((O) => O.status === "failed")
  ), p = W(() => ({
    total: n.value.length,
    pending: f.value.length,
    processing: u.value.length,
    completed: d.value.length,
    failed: m.value.length
  })), h = async () => {
    try {
      t.value = !0;
      const S = (await Ye.listTasks(
        r.value.page,
        r.value.limit,
        i.value
      )).data;
      S.success ? (n.value = S.tasks || [], S.pagination && (r.value = { ...r.value, ...S.pagination })) : e.addError({
        message: S.message || "Failed to fetch tasks",
        source: "TaskStore.fetchTasks",
        timestamp: /* @__PURE__ */ new Date()
      });
    } catch (O) {
      e.addError({
        message: `Failed to fetch tasks: ${O}`,
        source: "TaskStore.fetchTasks",
        timestamp: /* @__PURE__ */ new Date()
      });
    } finally {
      t.value = !1;
    }
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
    failedTasks: m,
    taskStatusCounts: p,
    // Actions
    fetchTasks: h,
    performFullSync: async () => {
      try {
        s.value = !0;
        const S = (await Ye.performTaskFullSync()).data;
        return S.success ? (await h(), S) : (e.addError({
          message: S.message || "Failed to perform full sync",
          source: "TaskStore.performFullSync",
          timestamp: /* @__PURE__ */ new Date()
        }), S);
      } catch (O) {
        return e.addError({
          message: `Failed to perform full sync: ${O}`,
          source: "TaskStore.performFullSync",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        s.value = !1;
      }
    },
    retryFailed: async () => {
      try {
        s.value = !0;
        const S = (await Ye.retryFailedResources()).data;
        return S.success ? (await h(), S) : (e.addError({
          message: S.message || "Failed to retry failed resources",
          source: "TaskStore.retryFailed",
          timestamp: /* @__PURE__ */ new Date()
        }), S);
      } catch (O) {
        return e.addError({
          message: `Failed to retry failed resources: ${O}`,
          source: "TaskStore.retryFailed",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      } finally {
        s.value = !1;
      }
    },
    getTaskDetails: async (O) => {
      try {
        const R = (await Ye.getTaskDetails(O)).data;
        return R.success || e.addError({
          message: R.message || "Failed to get task details",
          source: "TaskStore.getTaskDetails",
          timestamp: /* @__PURE__ */ new Date()
        }), R;
      } catch (S) {
        return e.addError({
          message: `Failed to get task details: ${S}`,
          source: "TaskStore.getTaskDetails",
          timestamp: /* @__PURE__ */ new Date()
        }), null;
      }
    },
    deleteTask: async (O) => {
      const S = n.value.findIndex((w) => w.id === O);
      if (S === -1)
        return e.addError({
          message: "Task not found",
          source: "TaskStore.deleteTask",
          timestamp: /* @__PURE__ */ new Date()
        }), !1;
      const R = n.value[S];
      try {
        o.value.add(O), n.value.splice(S, 1);
        const w = await Ye.deleteTask(O);
        return w.data.success ? !0 : (n.value.splice(S, 0, R), e.addError({
          message: w.data.message || "Failed to delete task",
          source: "TaskStore.deleteTask",
          timestamp: /* @__PURE__ */ new Date()
        }), !1);
      } catch (w) {
        return n.value.splice(S, 0, R), e.addError({
          message: `Failed to delete task: ${w}`,
          source: "TaskStore.deleteTask",
          timestamp: /* @__PURE__ */ new Date()
        }), !1;
      } finally {
        o.value.delete(O);
      }
    },
    refreshTaskStatus: async () => {
      await h();
    },
    setPage: (O) => {
      O >= 1 && O <= r.value.total_pages && (r.value.page = O);
    },
    setLimit: (O) => {
      r.value.limit = O, r.value.page = 1;
    },
    setFilter: (O, S) => {
      i.value[O] = S, r.value.page = 1;
    },
    clearFilters: () => {
      i.value.status = "", i.value.task_type = "", i.value.search_query = "", r.value.page = 1;
    },
    isTaskDeleting: (O) => o.value.has(O)
  };
}), HM = { class: "card" }, $M = { class: "card-header d-flex justify-content-between align-items-center" }, WM = ["disabled"], KM = { class: "card-body" }, zM = {
  key: 0,
  class: "text-center"
}, qM = {
  key: 1,
  class: "row g-3"
}, YM = { class: "col-md-4" }, XM = { class: "d-flex align-items-center" }, GM = { class: "fw-bold" }, QM = { class: "col-md-4" }, JM = { class: "d-flex align-items-center" }, ZM = { class: "fw-bold" }, eL = { class: "col-md-4" }, tL = { class: "d-flex align-items-center" }, nL = { class: "fw-bold" }, sL = { class: "col-12 mt-3" }, oL = { class: "border-top pt-3" }, rL = { class: "row g-3" }, iL = { class: "col-md-3" }, aL = { class: "d-flex align-items-center" }, lL = { class: "fw-bold" }, cL = { class: "col-md-3" }, uL = { class: "d-flex align-items-center" }, dL = { class: "fw-bold" }, fL = { class: "col-md-3" }, pL = { class: "d-flex align-items-center" }, hL = { class: "fw-bold" }, mL = { class: "col-md-3" }, gL = { class: "d-flex align-items-center" }, vL = { class: "fw-bold" }, _L = /* @__PURE__ */ Te({
  __name: "QueueStatusWidget",
  setup(e) {
    const t = E_(), n = G(!1), s = W(() => t.taskStatusCounts), o = W(() => {
      const { pending: a, failed: c, processing: f } = s.value;
      return c > 5 ? "Poor" : a + f > 10 ? "Busy" : c > 0 || a > 0 || f > 0 ? "Active" : "Healthy";
    }), r = W(() => {
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
    return Ht(async () => {
      await i();
    }), (a, c) => (N(), P("div", HM, [
      l("div", $M, [
        c[0] || (c[0] = l("h6", { class: "mb-0" }, [
          l("i", { class: "fas fa-clock-rotate-left fa-fw" }),
          Z(" Background Queue Status ")
        ], -1)),
        l("button", {
          class: "btn btn-sm btn-outline-secondary",
          onClick: i,
          disabled: n.value,
          title: "Refresh queue status"
        }, [
          l("i", {
            class: pe(["fas fa-rotate-right fa-fw", { "fa-spin": n.value }])
          }, null, 2)
        ], 8, WM)
      ]),
      l("div", KM, [
        n.value ? (N(), P("div", zM, c[1] || (c[1] = [
          l("div", {
            class: "spinner-border spinner-border-sm",
            role: "status"
          }, [
            l("span", { class: "visually-hidden" }, "Loading...")
          ], -1)
        ]))) : (N(), P("div", qM, [
          l("div", YM, [
            l("div", XM, [
              c[3] || (c[3] = l("i", { class: "fas fa-check-circle fa-fw text-success me-2" }, null, -1)),
              l("div", null, [
                l("div", GM, j(o.value), 1),
                c[2] || (c[2] = l("small", { class: "text-muted" }, "Queue Health", -1))
              ])
            ])
          ]),
          l("div", QM, [
            l("div", JM, [
              c[5] || (c[5] = l("i", { class: "fas fa-hourglass-half fa-fw text-warning me-2" }, null, -1)),
              l("div", null, [
                l("div", ZM, j(s.value.pending), 1),
                c[4] || (c[4] = l("small", { class: "text-muted" }, "Pending Tasks", -1))
              ])
            ])
          ]),
          l("div", eL, [
            l("div", tL, [
              c[7] || (c[7] = l("i", { class: "fas fa-exclamation-triangle fa-fw text-danger me-2" }, null, -1)),
              l("div", null, [
                l("div", nL, j(s.value.failed), 1),
                c[6] || (c[6] = l("small", { class: "text-muted" }, "Failed Tasks", -1))
              ])
            ])
          ]),
          l("div", sL, [
            l("div", oL, [
              l("div", rL, [
                l("div", iL, [
                  l("div", aL, [
                    c[9] || (c[9] = l("i", { class: "fas fa-list fa-fw text-primary me-2" }, null, -1)),
                    l("div", null, [
                      l("div", lL, j(s.value.total), 1),
                      c[8] || (c[8] = l("small", { class: "text-muted" }, "Total Tasks", -1))
                    ])
                  ])
                ]),
                l("div", cL, [
                  l("div", uL, [
                    c[11] || (c[11] = l("i", { class: "fas fa-play fa-fw text-info me-2" }, null, -1)),
                    l("div", null, [
                      l("div", dL, j(s.value.processing), 1),
                      c[10] || (c[10] = l("small", { class: "text-muted" }, "Processing", -1))
                    ])
                  ])
                ]),
                l("div", fL, [
                  l("div", pL, [
                    c[13] || (c[13] = l("i", { class: "fas fa-check fa-fw text-success me-2" }, null, -1)),
                    l("div", null, [
                      l("div", hL, j(s.value.completed), 1),
                      c[12] || (c[12] = l("small", { class: "text-muted" }, "Completed", -1))
                    ])
                  ])
                ]),
                l("div", mL, [
                  l("div", gL, [
                    c[15] || (c[15] = l("i", { class: "fas fa-percentage fa-fw text-secondary me-2" }, null, -1)),
                    l("div", null, [
                      l("div", vL, j(r.value) + "%", 1),
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
}), yL = /* @__PURE__ */ Qs(_L, [["__scopeId", "data-v-e7530d59"]]), bL = { class: "p-3" }, EL = { class: "d-flex justify-content-between align-items-center mb-4" }, wL = { class: "d-flex gap-2" }, AL = ["disabled"], SL = ["disabled"], OL = ["disabled"], CL = { class: "mb-4" }, TL = { class: "card mb-4" }, NL = { class: "card-body" }, DL = { class: "row g-3" }, xL = { class: "col-md-3" }, kL = { class: "col-md-3" }, RL = { class: "col-md-3" }, IL = { class: "col-md-3" }, PL = ["value"], VL = {
  key: 0,
  class: "row mt-3"
}, ML = { class: "card" }, LL = { class: "card-body p-0" }, FL = {
  key: 0,
  class: "text-center py-5"
}, BL = {
  key: 1,
  class: "d-flex flex-column gap-2 py-5 align-items-center"
}, jL = { class: "" }, UL = { class: "text-muted mb-0" }, HL = { key: 2 }, $L = { class: "table-responsive" }, WL = { class: "table table-hover mb-0" }, KL = { class: "d-flex flex-column" }, zL = { class: "fw-semibold" }, qL = {
  key: 0,
  class: "text-muted"
}, YL = { class: "badge bg-secondary" }, XL = ["title"], GL = ["title"], QL = { class: "text-end" }, JL = { class: "btn-group btn-group-sm" }, ZL = ["onClick"], e4 = ["disabled", "onClick"], t4 = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, n4 = { class: "text-muted" }, s4 = { class: "d-flex gap-2" }, o4 = { class: "modal-dialog modal-lg" }, r4 = { class: "modal-content" }, i4 = {
  key: 0,
  class: "modal-body"
}, a4 = { class: "row" }, l4 = { class: "col-md-6" }, c4 = { class: "row" }, u4 = { class: "col-sm-8" }, d4 = { class: "col-sm-8" }, f4 = { class: "col-sm-8" }, p4 = { class: "col-sm-8" }, h4 = { class: "col-sm-8" }, m4 = { class: "col-md-6" }, g4 = { class: "bg-light p-3 rounded small" }, v4 = {
  key: 0,
  class: "row mt-3"
}, _4 = { class: "col-12" }, y4 = { class: "bg-light p-3 rounded small" }, b4 = /* @__PURE__ */ Te({
  __name: "TasksPage",
  setup(e) {
    const t = E_(), n = _s(), s = G(""), o = G(""), r = G(""), i = G(null), a = G(null), c = [10, 25, 50, 100], f = W({
      get: () => t.pagination.page,
      set: (R) => t.setPage(R)
    }), u = W({
      get: () => t.pagination.limit,
      set: (R) => t.setLimit(R)
    }), d = W(() => s.value || o.value || r.value), m = W(() => {
      const R = t.filteredTasks.length, w = (t.pagination.page - 1) * t.pagination.limit + 1, x = Math.min(w + t.pagination.limit - 1, R);
      return { start: w, end: x, total: R };
    }), p = async () => {
      try {
        await t.fetchTasks(), n.showSuccess("Tasks refreshed successfully");
      } catch (R) {
        console.error("Failed to refresh tasks:", R), n.showError("Failed to refresh tasks");
      }
    }, h = async () => {
      if (await n.confirmAction(
        "Full Synchronization",
        "Are you sure you want to perform a full synchronization? This will analyze all MRNs and create missing resource instances."
      )) {
        const w = await t.performFullSync();
        w?.success && n.showSuccess(`Full sync initiated successfully. Task ID: ${w.task_id}`);
      }
    }, v = async () => {
      if (await n.confirmAction(
        "Retry Failed Tasks",
        "Are you sure you want to retry all failed tasks? This will mark them as pending for re-processing."
      )) {
        const w = await t.retryFailed();
        w?.success && n.showSuccess(`Retry operation completed. ${w.statistics?.tasks_created || 0} tasks marked for retry.`);
      }
    }, _ = () => {
      t.setFilter("search_query", s.value);
    }, y = () => {
      t.setFilter("status", o.value);
    }, E = () => {
      t.setFilter("task_type", r.value);
    }, g = () => {
      s.value = "", o.value = "", r.value = "", t.clearFilters();
    }, T = async (R) => {
      i.value = R, new window.bootstrap.Modal(a.value).show();
    }, I = async (R) => {
      await n.confirmAction(
        "Delete Task",
        `Are you sure you want to delete task ${R.id}? This action cannot be undone.`
      ) && await t.deleteTask(R.id) && n.showSuccess("Task deleted successfully.");
    }, C = (R) => {
      if (!R) return "Unknown";
      try {
        const w = new Date(R), ee = (/* @__PURE__ */ new Date()).getTime() - w.getTime(), ne = Math.floor(ee / 6e4), V = Math.floor(ne / 60), L = Math.floor(V / 24);
        return ne < 60 ? `${ne}m ago` : V < 24 ? `${V}h ago` : L < 7 ? `${L}d ago` : w.toLocaleDateString();
      } catch {
        return R;
      }
    }, D = (R) => {
      if (!R) return "Unknown";
      try {
        return new Date(R).toLocaleString();
      } catch {
        return R;
      }
    }, F = (R) => ({
      fhir_fetch: "FHIR Fetch",
      full_sync: "Full Sync",
      retry_failed: "Retry Failed",
      archive: "Archive",
      cleanup: "Cleanup"
    })[R] || R, O = (R) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[R] || "badge bg-secondary", S = (R) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[R] || "fas fa-question-circle";
    return Ht(async () => {
      await p();
    }), $r(() => {
    }), (R, w) => {
      const x = Je("b-pagination"), ee = Je("b-pagination-dropdown");
      return N(), P("div", bL, [
        l("div", EL, [
          w[9] || (w[9] = l("div", null, [
            l("h4", { class: "mb-1" }, "Task Management"),
            l("p", { class: "text-muted mb-0" }, "Monitor and manage background processing tasks")
          ], -1)),
          l("div", wL, [
            l("button", {
              class: "btn btn-warning btn-sm",
              onClick: h,
              disabled: ae(t).operationLoading
            }, [
              l("i", {
                class: pe(["fas fa-arrows-rotate fa-fw me-1", { "fa-spin": ae(t).operationLoading }])
              }, null, 2),
              w[6] || (w[6] = Z(" Full Sync "))
            ], 8, AL),
            l("button", {
              class: "btn btn-outline-warning btn-sm",
              onClick: v,
              disabled: ae(t).operationLoading
            }, w[7] || (w[7] = [
              l("i", { class: "fas fa-exclamation-triangle fa-fw me-1" }, null, -1),
              Z(" Retry Failed ")
            ]), 8, SL),
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: p,
              disabled: ae(t).loading
            }, [
              l("i", {
                class: pe(["fas fa-sync-alt fa-fw me-1", { "fa-spin": ae(t).loading }])
              }, null, 2),
              w[8] || (w[8] = Z(" Refresh "))
            ], 8, OL)
          ])
        ]),
        l("div", CL, [
          ce(yL)
        ]),
        l("div", TL, [
          l("div", NL, [
            l("div", DL, [
              l("div", xL, [
                w[10] || (w[10] = l("label", { class: "form-label" }, "Search Tasks", -1)),
                et(l("input", {
                  type: "text",
                  class: "form-control form-control-sm",
                  placeholder: "Search by ID or type...",
                  "onUpdate:modelValue": w[0] || (w[0] = (ne) => s.value = ne),
                  onInput: _
                }, null, 544), [
                  [Ao, s.value]
                ])
              ]),
              l("div", kL, [
                w[12] || (w[12] = l("label", { class: "form-label" }, "Status", -1)),
                et(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[1] || (w[1] = (ne) => o.value = ne),
                  onChange: y
                }, w[11] || (w[11] = [
                  Yi('<option value="">All Statuses</option><option value="pending">Pending</option><option value="processing">Processing</option><option value="completed">Completed</option><option value="failed">Failed</option>', 5)
                ]), 544), [
                  [Hn, o.value]
                ])
              ]),
              l("div", RL, [
                w[14] || (w[14] = l("label", { class: "form-label" }, "Task Type", -1)),
                et(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[2] || (w[2] = (ne) => r.value = ne),
                  onChange: E
                }, w[13] || (w[13] = [
                  Yi('<option value="">All Types</option><option value="fhir_fetch">FHIR Fetch</option><option value="full_sync">Full Sync</option><option value="retry_failed">Retry Failed</option><option value="archive">Archive</option><option value="cleanup">Cleanup</option>', 6)
                ]), 544), [
                  [Hn, r.value]
                ])
              ]),
              l("div", IL, [
                w[15] || (w[15] = l("label", { class: "form-label" }, "Per Page", -1)),
                et(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": w[3] || (w[3] = (ne) => u.value = ne)
                }, [
                  (N(), P(we, null, Xe(c, (ne) => l("option", {
                    key: ne,
                    value: ne
                  }, j(ne), 9, PL)), 64))
                ], 512), [
                  [Hn, u.value]
                ])
              ])
            ]),
            d.value ? (N(), P("div", VL, [
              l("div", { class: "col" }, [
                l("button", {
                  class: "btn btn-outline-secondary btn-sm",
                  onClick: g
                }, w[16] || (w[16] = [
                  l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                  Z("Clear Filters ")
                ]))
              ])
            ])) : Ee("", !0)
          ])
        ]),
        l("div", ML, [
          l("div", LL, [
            ae(t).loading ? (N(), P("div", FL, w[17] || (w[17] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading tasks...")
              ], -1),
              l("p", { class: "mt-2 mb-0 text-muted" }, "Loading tasks...", -1)
            ]))) : ae(t).paginatedTasks.length === 0 ? (N(), P("div", BL, [
              w[18] || (w[18] = l("i", {
                class: "fas fa-tasks text-muted",
                style: { "font-size": "3rem" }
              }, null, -1)),
              l("h6", jL, j(d.value ? "No tasks match your filters" : "No tasks found"), 1),
              l("span", UL, j(d.value ? "Try adjusting your search criteria." : "Tasks will appear here when created."), 1)
            ])) : (N(), P("div", HL, [
              l("div", $L, [
                l("table", WL, [
                  w[20] || (w[20] = l("thead", { class: "table-light" }, [
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
                    (N(!0), P(we, null, Xe(ae(t).paginatedTasks, (ne) => (N(), P("tr", {
                      key: ne.id
                    }, [
                      l("td", null, [
                        l("div", KL, [
                          l("span", zL, j(ne.id), 1),
                          ne.params.mrn ? (N(), P("small", qL, "MRN: " + j(ne.params.mrn), 1)) : Ee("", !0)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: pe(O(ne.status))
                        }, [
                          l("i", {
                            class: pe([S(ne.status), "me-1"])
                          }, null, 2),
                          Z(" " + j(ne.status.charAt(0).toUpperCase() + ne.status.slice(1)), 1)
                        ], 2)
                      ]),
                      l("td", null, [
                        l("span", YL, j(F(ne.key)), 1)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: D(ne.created_at)
                        }, j(C(ne.created_at)), 9, XL)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: D(ne.updated_at)
                        }, j(C(ne.updated_at)), 9, GL)
                      ]),
                      l("td", QL, [
                        l("div", JL, [
                          l("button", {
                            class: "btn btn-outline-info",
                            onClick: (V) => T(ne),
                            title: "View Details"
                          }, w[19] || (w[19] = [
                            l("i", { class: "fas fa-info-circle" }, null, -1)
                          ]), 8, ZL),
                          l("button", {
                            class: "btn btn-outline-danger",
                            title: "Delete Task",
                            disabled: ne.status === "processing" || ae(t).isTaskDeleting(ne.id),
                            onClick: (V) => I(ne)
                          }, [
                            l("i", {
                              class: pe(["fas", ae(t).isTaskDeleting(ne.id) ? "fa-spinner fa-spin" : "fa-trash"])
                            }, null, 2)
                          ], 8, e4)
                        ])
                      ])
                    ]))), 128))
                  ])
                ])
              ])
            ]))
          ])
        ]),
        ae(t).filteredTasks.length > 0 ? (N(), P("div", t4, [
          l("small", n4, " Showing " + j(m.value.start) + "-" + j(m.value.end) + " of " + j(m.value.total) + " tasks ", 1),
          l("div", s4, [
            ce(x, {
              size: "sm",
              perPage: u.value,
              totalItems: ae(t).filteredTasks.length,
              modelValue: f.value,
              "onUpdate:modelValue": w[4] || (w[4] = (ne) => f.value = ne)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            ce(ee, {
              options: c,
              modelValue: u.value,
              "onUpdate:modelValue": w[5] || (w[5] = (ne) => u.value = ne)
            }, null, 8, ["modelValue"])
          ])
        ])) : Ee("", !0),
        l("div", {
          class: "modal fade",
          id: "taskDetailsModal",
          tabindex: "-1",
          ref_key: "taskDetailsModal",
          ref: a
        }, [
          l("div", o4, [
            l("div", r4, [
              w[29] || (w[29] = l("div", { class: "modal-header" }, [
                l("h5", { class: "modal-title" }, "Task Details"),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "data-bs-dismiss": "modal"
                })
              ], -1)),
              i.value ? (N(), P("div", i4, [
                l("div", a4, [
                  l("div", l4, [
                    w[26] || (w[26] = l("h6", null, "Basic Information", -1)),
                    l("dl", c4, [
                      w[21] || (w[21] = l("dt", { class: "col-sm-4" }, "ID:", -1)),
                      l("dd", u4, [
                        l("code", null, j(i.value.id), 1)
                      ]),
                      w[22] || (w[22] = l("dt", { class: "col-sm-4" }, "Type:", -1)),
                      l("dd", d4, j(F(i.value.key)), 1),
                      w[23] || (w[23] = l("dt", { class: "col-sm-4" }, "Status:", -1)),
                      l("dd", f4, [
                        l("span", {
                          class: pe(O(i.value.status))
                        }, j(i.value.status.charAt(0).toUpperCase() + i.value.status.slice(1)), 3)
                      ]),
                      w[24] || (w[24] = l("dt", { class: "col-sm-4" }, "Created:", -1)),
                      l("dd", p4, j(D(i.value.created_at)), 1),
                      w[25] || (w[25] = l("dt", { class: "col-sm-4" }, "Updated:", -1)),
                      l("dd", h4, j(D(i.value.updated_at)), 1)
                    ])
                  ]),
                  l("div", m4, [
                    w[27] || (w[27] = l("h6", null, "Parameters", -1)),
                    l("pre", g4, j(JSON.stringify(i.value.params, null, 2)), 1)
                  ])
                ]),
                Object.keys(i.value.metadata).length > 0 ? (N(), P("div", v4, [
                  l("div", _4, [
                    w[28] || (w[28] = l("h6", null, "Metadata", -1)),
                    l("pre", y4, j(JSON.stringify(i.value.metadata, null, 2)), 1)
                  ])
                ])) : Ee("", !0)
              ])) : Ee("", !0),
              w[30] || (w[30] = l("div", { class: "modal-footer" }, [
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
}), E4 = { key: 0 }, w4 = { class: "card" }, A4 = { class: "card-body" }, S4 = { class: "list-unstyled mb-0" }, O4 = {
  key: 1,
  class: "text-center mt-3"
}, C4 = { class: "d-flex gap-2 justify-content-end" }, T4 = ["onClick", "disabled"], N4 = ["onClick", "disabled"], D4 = /* @__PURE__ */ Te({
  __name: "ArchiveDeleteModal",
  emits: ["deleted"],
  setup(e, { expose: t, emit: n }) {
    const s = n, o = G(null), r = G(null), i = G(!1), a = async (p) => (r.value = p, i.value = !1, await o.value?.show()), c = async (p) => {
      if (!(!r.value || i.value)) {
        i.value = !0;
        try {
          s("deleted", r.value.archive_id), p(!0);
        } catch (h) {
          console.error("Delete confirmation failed:", h);
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
    }, u = (p) => {
      if (p === 0) return "0 Bytes";
      const h = 1024, v = ["Bytes", "KB", "MB", "GB"], _ = Math.floor(Math.log(p) / Math.log(h));
      return parseFloat((p / Math.pow(h, _)).toFixed(2)) + " " + v[_];
    }, d = (p) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[p] || "badge bg-secondary", m = (p) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[p] || "fas fa-question-circle";
    return t({ show: a }), (p, h) => {
      const v = Je("b-modal");
      return N(), rt(v, {
        ref_key: "deleteModal",
        ref: o
      }, {
        title: be(() => h[0] || (h[0] = [
          Z("Delete Archive")
        ])),
        footer: be(({ hide: _ }) => [
          l("div", C4, [
            l("button", {
              class: "btn btn-sm btn-secondary",
              type: "button",
              onClick: (y) => _(!1),
              disabled: i.value
            }, h[12] || (h[12] = [
              l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
              Z("Cancel ")
            ]), 8, T4),
            l("button", {
              class: "btn btn-sm btn-danger",
              type: "button",
              onClick: (y) => c(_),
              disabled: i.value
            }, [
              h[13] || (h[13] = l("i", { class: "fas fa-trash fa-fw me-1" }, null, -1)),
              Z(" " + j(i.value ? "Deleting..." : "Delete Archive"), 1)
            ], 8, N4)
          ])
        ]),
        default: be(() => [
          r.value ? (N(), P("div", E4, [
            h[8] || (h[8] = l("div", { class: "alert alert-warning" }, [
              l("i", { class: "fas fa-exclamation-triangle me-2" }),
              l("strong", null, "Warning:"),
              Z(" This action cannot be undone. ")
            ], -1)),
            h[9] || (h[9] = l("p", null, "Are you sure you want to delete this archive?", -1)),
            l("div", w4, [
              l("div", A4, [
                h[7] || (h[7] = l("h6", { class: "card-title" }, "Archive Details", -1)),
                l("ul", S4, [
                  l("li", null, [
                    h[1] || (h[1] = l("strong", null, "Archive ID:", -1)),
                    Z(" " + j(r.value.archive_id), 1)
                  ]),
                  l("li", null, [
                    h[2] || (h[2] = l("strong", null, "File Name:", -1)),
                    Z(" " + j(r.value.file_name), 1)
                  ]),
                  l("li", null, [
                    h[3] || (h[3] = l("strong", null, "Created:", -1)),
                    Z(" " + j(f(r.value.created_at)), 1)
                  ]),
                  l("li", null, [
                    h[4] || (h[4] = l("strong", null, "Size:", -1)),
                    Z(" " + j(u(r.value.file_size)), 1)
                  ]),
                  l("li", null, [
                    h[5] || (h[5] = l("strong", null, "Resources:", -1)),
                    Z(" " + j(r.value.total_resources), 1)
                  ]),
                  l("li", null, [
                    h[6] || (h[6] = l("strong", null, "Status:", -1)),
                    l("span", {
                      class: pe(d(r.value.status))
                    }, [
                      l("i", {
                        class: pe([m(r.value.status), "me-1"])
                      }, null, 2),
                      Z(" " + j(r.value.status.charAt(0).toUpperCase() + r.value.status.slice(1)), 1)
                    ], 2)
                  ])
                ])
              ])
            ]),
            h[10] || (h[10] = l("div", { class: "mt-3" }, [
              l("p", { class: "mb-2" }, [
                l("strong", null, "This will:")
              ]),
              l("ul", { class: "mb-0" }, [
                l("li", null, "Remove the archive file from storage"),
                l("li", null, "Delete all archive metadata"),
                l("li", null, "Remove the archive from the archives list")
              ])
            ], -1))
          ])) : Ee("", !0),
          i.value ? (N(), P("div", O4, h[11] || (h[11] = [
            l("div", {
              class: "spinner-border spinner-border-sm text-danger me-2",
              role: "status"
            }, [
              l("span", { class: "visually-hidden" }, "Deleting...")
            ], -1),
            l("span", null, "Deleting archive...", -1)
          ]))) : Ee("", !0)
        ]),
        _: 1
      }, 512);
    };
  }
}), x4 = { class: "p-3" }, k4 = { class: "d-flex justify-content-between align-items-center mb-4" }, R4 = ["disabled"], I4 = { class: "card mb-4" }, P4 = { class: "card-body" }, V4 = { class: "row g-3" }, M4 = { class: "col-md-3" }, L4 = { class: "col-md-3" }, F4 = { class: "col-md-3" }, B4 = { class: "col-md-3" }, j4 = ["value"], U4 = {
  key: 0,
  class: "row mt-3"
}, H4 = { class: "row mb-4" }, $4 = { class: "col-md-3" }, W4 = { class: "card text-center" }, K4 = { class: "card-body py-3" }, z4 = { class: "card-title text-primary mb-1" }, q4 = { class: "col-md-3" }, Y4 = { class: "card text-center" }, X4 = { class: "card-body py-3" }, G4 = { class: "card-title text-success mb-1" }, Q4 = { class: "col-md-3" }, J4 = { class: "card text-center" }, Z4 = { class: "card-body py-3" }, eF = { class: "card-title text-warning mb-1" }, tF = { class: "col-md-3" }, nF = { class: "card text-center" }, sF = { class: "card-body py-3" }, oF = { class: "card-title text-info mb-1" }, rF = { class: "card" }, iF = { class: "card-body p-0" }, aF = {
  key: 0,
  class: "text-center py-5"
}, lF = {
  key: 1,
  class: "text-center py-5"
}, cF = { class: "mt-3 mb-2" }, uF = { class: "text-muted mb-0" }, dF = { key: 2 }, fF = { class: "table-responsive" }, pF = { class: "table table-hover mb-0" }, hF = { class: "d-flex flex-column" }, mF = { class: "fw-semibold" }, gF = { class: "text-muted" }, vF = ["title"], _F = { class: "d-flex flex-column" }, yF = {
  key: 0,
  class: "text-danger"
}, bF = { class: "text-end" }, EF = { class: "btn-group btn-group-sm" }, wF = ["onClick"], AF = ["onClick", "disabled"], SF = {
  key: 0,
  class: "d-flex justify-content-between align-items-center mt-3"
}, OF = { class: "text-muted" }, CF = { class: "d-flex gap-2" }, TF = /* @__PURE__ */ Te({
  __name: "ArchivesPage",
  setup(e) {
    const t = b_(), n = _s(), s = G(null), o = G(""), r = G(""), i = G(""), a = W({
      get: () => t.pagination.page,
      set: (O) => t.setPage(O)
    }), c = W({
      get: () => t.pagination.limit,
      set: (O) => t.setLimit(O)
    });
    Ht(async () => {
      await m();
    });
    const f = W(() => o.value || r.value || i.value), u = W(() => {
      const O = t.completedArchives.reduce((S, R) => S + (R.file_size || 0), 0);
      return T(O);
    }), d = W(() => {
      const O = t.filteredArchives.length, S = (t.pagination.page - 1) * t.pagination.limit + 1, R = Math.min(S + t.pagination.limit - 1, O);
      return { start: S, end: R, total: O };
    }), m = async () => {
      try {
        await t.fetchArchives(), n.showSuccess("Archives refreshed successfully");
      } catch (O) {
        console.error("Failed to refresh archives:", O), n.showError("Failed to refresh archives");
      }
    }, p = () => {
      t.setFilter("searchQuery", o.value);
    }, h = () => {
      t.setFilter("status", r.value);
    }, v = () => {
      t.setFilter("processingMode", i.value);
    }, _ = () => {
      o.value = "", r.value = "", i.value = "", t.clearFilters();
    }, y = async (O) => {
      try {
        await t.downloadArchive(O.archive_id), n.showSuccess(`Archive ${O.file_name} downloaded successfully`);
      } catch (S) {
        console.error("Failed to download archive:", S), n.showError(`Failed to download archive ${O.file_name}`);
      }
    }, E = async (O) => {
      await s.value?.show(O);
    }, g = async (O) => {
      try {
        await t.deleteArchive(O), n.showSuccess("Archive deleted successfully");
      } catch (S) {
        console.error("Failed to delete archive:", S), n.showError("Failed to delete archive");
      }
    }, T = (O) => {
      if (O === 0) return "0 Bytes";
      const S = 1024, R = ["Bytes", "KB", "MB", "GB"], w = Math.floor(Math.log(O) / Math.log(S));
      return parseFloat((O / Math.pow(S, w)).toFixed(2)) + " " + R[w];
    }, I = (O) => {
      if (!O) return "Unknown";
      try {
        const S = new Date(O), w = (/* @__PURE__ */ new Date()).getTime() - S.getTime(), x = Math.floor(w / 6e4), ee = Math.floor(x / 60), ne = Math.floor(ee / 24);
        return x < 60 ? `${x}m ago` : ee < 24 ? `${ee}h ago` : ne < 7 ? `${ne}d ago` : S.toLocaleDateString();
      } catch {
        return O;
      }
    }, C = (O) => {
      if (!O) return "Unknown";
      try {
        return new Date(O).toLocaleString();
      } catch {
        return O;
      }
    }, D = (O) => ({
      completed: "badge bg-success",
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info",
      failed: "badge bg-danger"
    })[O] || "badge bg-secondary", F = (O) => ({
      completed: "fas fa-check-circle",
      pending: "fas fa-clock",
      processing: "fas fa-spinner fa-spin",
      failed: "fas fa-exclamation-triangle"
    })[O] || "fas fa-question-circle";
    return Lt(() => t.filters, (O) => {
      o.value = O.searchQuery, r.value = O.status, i.value = O.processingMode;
    }, { deep: !0 }), $r(() => {
    }), (O, S) => {
      const R = Je("b-pagination"), w = Je("b-pagination-dropdown");
      return N(), P("div", x4, [
        l("div", k4, [
          S[7] || (S[7] = l("div", null, [
            l("h4", { class: "mb-1" }, "Archive Management"),
            l("p", { class: "text-muted mb-0" }, "Manage and download your FHIR resource archives")
          ], -1)),
          l("div", null, [
            l("button", {
              class: "btn btn-primary btn-sm",
              onClick: m,
              disabled: ae(t).loading
            }, [
              l("i", {
                class: pe(["fas fa-sync-alt fa-fw me-1", { "fa-spin": ae(t).loading }])
              }, null, 2),
              S[6] || (S[6] = Z(" Refresh "))
            ], 8, R4)
          ])
        ]),
        l("div", I4, [
          l("div", P4, [
            l("div", V4, [
              l("div", M4, [
                S[8] || (S[8] = l("label", { class: "form-label" }, "Search Archives", -1)),
                et(l("input", {
                  type: "text",
                  class: "form-control form-control-sm",
                  placeholder: "Search by name or ID...",
                  "onUpdate:modelValue": S[0] || (S[0] = (x) => o.value = x),
                  onInput: p
                }, null, 544), [
                  [Ao, o.value]
                ])
              ]),
              l("div", L4, [
                S[10] || (S[10] = l("label", { class: "form-label" }, "Status", -1)),
                et(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": S[1] || (S[1] = (x) => r.value = x),
                  onChange: h
                }, S[9] || (S[9] = [
                  Yi('<option value="">All Statuses</option><option value="completed">Completed</option><option value="processing">Processing</option><option value="pending">Pending</option><option value="failed">Failed</option>', 5)
                ]), 544), [
                  [Hn, r.value]
                ])
              ]),
              l("div", F4, [
                S[12] || (S[12] = l("label", { class: "form-label" }, "Processing Mode", -1)),
                et(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": S[2] || (S[2] = (x) => i.value = x),
                  onChange: v
                }, S[11] || (S[11] = [
                  l("option", { value: "" }, "All Modes", -1),
                  l("option", { value: "immediate" }, "Immediate", -1),
                  l("option", { value: "background" }, "Background", -1)
                ]), 544), [
                  [Hn, i.value]
                ])
              ]),
              l("div", B4, [
                S[13] || (S[13] = l("label", { class: "form-label" }, "Per Page", -1)),
                et(l("select", {
                  class: "form-select form-select-sm",
                  "onUpdate:modelValue": S[3] || (S[3] = (x) => c.value = x)
                }, [
                  (N(!0), P(we, null, Xe(ae(t).pagination.perPageOptions, (x) => (N(), P("option", {
                    key: x,
                    value: x
                  }, j(x), 9, j4))), 128))
                ], 512), [
                  [Hn, c.value]
                ])
              ])
            ]),
            f.value ? (N(), P("div", U4, [
              l("div", { class: "col" }, [
                l("button", {
                  class: "btn btn-outline-secondary btn-sm",
                  onClick: _
                }, S[14] || (S[14] = [
                  l("i", { class: "fas fa-times fa-fw me-1" }, null, -1),
                  Z("Clear Filters ")
                ]))
              ])
            ])) : Ee("", !0)
          ])
        ]),
        l("div", H4, [
          l("div", $4, [
            l("div", W4, [
              l("div", K4, [
                l("h5", z4, j(ae(t).archives.length), 1),
                S[15] || (S[15] = l("p", { class: "card-text small text-muted mb-0" }, "Total Archives", -1))
              ])
            ])
          ]),
          l("div", q4, [
            l("div", Y4, [
              l("div", X4, [
                l("h5", G4, j(ae(t).completedArchives.length), 1),
                S[16] || (S[16] = l("p", { class: "card-text small text-muted mb-0" }, "Completed", -1))
              ])
            ])
          ]),
          l("div", Q4, [
            l("div", J4, [
              l("div", Z4, [
                l("h5", eF, j(ae(t).pendingArchives.length), 1),
                S[17] || (S[17] = l("p", { class: "card-text small text-muted mb-0" }, "In Progress", -1))
              ])
            ])
          ]),
          l("div", tF, [
            l("div", nF, [
              l("div", sF, [
                l("h5", oF, j(u.value), 1),
                S[18] || (S[18] = l("p", { class: "card-text small text-muted mb-0" }, "Total Size", -1))
              ])
            ])
          ])
        ]),
        l("div", rF, [
          l("div", iF, [
            ae(t).loading ? (N(), P("div", aF, S[19] || (S[19] = [
              l("div", {
                class: "spinner-border text-primary",
                role: "status"
              }, [
                l("span", { class: "visually-hidden" }, "Loading archives...")
              ], -1),
              l("p", { class: "mt-2 mb-0 text-muted" }, "Loading archives...", -1)
            ]))) : ae(t).paginatedArchives.length === 0 ? (N(), P("div", lF, [
              S[20] || (S[20] = l("i", {
                class: "fas fa-archive text-muted",
                style: { "font-size": "3rem" }
              }, null, -1)),
              l("h6", cF, j(f.value ? "No archives match your filters" : "No archives found"), 1),
              l("p", uF, j(f.value ? "Try adjusting your search criteria." : "Archives will appear here when created."), 1)
            ])) : (N(), P("div", dF, [
              l("div", fF, [
                l("table", pF, [
                  S[22] || (S[22] = l("thead", { class: "table-light" }, [
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
                    (N(!0), P(we, null, Xe(ae(t).paginatedArchives, (x) => (N(), P("tr", {
                      key: x.archive_id
                    }, [
                      l("td", null, [
                        l("div", hF, [
                          l("span", mF, j(x.file_name), 1),
                          l("small", gF, j(x.archive_id), 1)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: pe(D(x.status))
                        }, [
                          l("i", {
                            class: pe([F(x.status), "me-1"])
                          }, null, 2),
                          Z(" " + j(x.status.charAt(0).toUpperCase() + x.status.slice(1)), 1)
                        ], 2)
                      ]),
                      l("td", null, [
                        l("span", {
                          title: C(x.created_at)
                        }, j(I(x.created_at)), 9, vF)
                      ]),
                      l("td", null, j(T(x.file_size)), 1),
                      l("td", null, [
                        l("div", _F, [
                          l("span", null, j(x.total_resources), 1),
                          x.failed_files > 0 ? (N(), P("small", yF, j(x.failed_files) + " failed ", 1)) : Ee("", !0)
                        ])
                      ]),
                      l("td", null, [
                        l("span", {
                          class: pe(["badge", x.processing_mode === "immediate" ? "bg-info" : "bg-secondary"])
                        }, j(x.processing_mode), 3)
                      ]),
                      l("td", bF, [
                        l("div", EF, [
                          x.status === "completed" && x.download_url ? (N(), P("button", {
                            key: 0,
                            class: "btn btn-outline-primary",
                            onClick: (ee) => y(x),
                            title: "Download Archive"
                          }, S[21] || (S[21] = [
                            l("i", { class: "fas fa-download" }, null, -1)
                          ]), 8, wF)) : Ee("", !0),
                          l("button", {
                            class: "btn btn-outline-danger",
                            onClick: (ee) => E(x),
                            title: "Delete Archive",
                            disabled: ae(t).isArchiveDeleting(x.archive_id)
                          }, [
                            l("i", {
                              class: pe(["fas", ae(t).isArchiveDeleting(x.archive_id) ? "fa-spinner fa-spin" : "fa-trash"])
                            }, null, 2)
                          ], 8, AF)
                        ])
                      ])
                    ]))), 128))
                  ])
                ])
              ])
            ]))
          ])
        ]),
        ae(t).filteredArchives.length > 0 ? (N(), P("div", SF, [
          l("small", OF, " Showing " + j(d.value.start) + "-" + j(d.value.end) + " of " + j(d.value.total) + " archives ", 1),
          l("div", CF, [
            ce(R, {
              size: "sm",
              perPage: c.value,
              totalItems: ae(t).filteredArchives.length,
              modelValue: a.value,
              "onUpdate:modelValue": S[4] || (S[4] = (x) => a.value = x)
            }, null, 8, ["perPage", "totalItems", "modelValue"]),
            ce(w, {
              options: ae(t).pagination.perPageOptions,
              modelValue: c.value,
              "onUpdate:modelValue": S[5] || (S[5] = (x) => c.value = x)
            }, null, 8, ["options", "modelValue"])
          ])
        ])) : Ee("", !0),
        (N(), rt(Bo, { to: "body" }, [
          ce(D4, {
            ref_key: "deleteModal",
            ref: s,
            onDeleted: g
          }, null, 512)
        ]))
      ]);
    };
  }
}), NF = {}, DF = { class: "error-wrapper" }, xF = { class: "mt-5" };
function kF(e, t) {
  const n = Je("router-link");
  return N(), P("div", DF, [
    Ie(e.$slots, "title", {}, () => [
      t[0] || (t[0] = l("span", { class: "error-title" }, "Error 404", -1))
    ], !0),
    Ie(e.$slots, "description", {}, () => [
      t[1] || (t[1] = l("span", { class: "error-description" }, "Sorry, we couldn't find this page.", -1))
    ], !0),
    Ie(e.$slots, "subdescription", {}, () => [
      t[2] || (t[2] = l("span", { class: "error-sub-description" }, "But dont worry, you can find plenty of other things on the homepage..", -1))
    ], !0),
    l("div", xF, [
      ce(n, {
        to: "/",
        class: "btn btn-sm btn-primary"
      }, {
        default: be(() => t[3] || (t[3] = [
          l("i", { class: "fas fa-arrow-left fa-fw me-1" }, null, -1),
          l("span", null, "Back to Home", -1)
        ])),
        _: 1,
        __: [3]
      })
    ])
  ]);
}
const RF = /* @__PURE__ */ Qs(NF, [["render", kF], ["__scopeId", "data-v-d4f8fed2"]]), IF = { class: "card shadow-sm" }, PF = { class: "card-body" }, VF = { class: "text-center" }, MF = {
  key: 0,
  class: "lead text-danger"
}, LF = {
  key: 1,
  class: "text-muted"
}, FF = /* @__PURE__ */ Te({
  __name: "ErrorPage",
  setup(e) {
    const n = Lg().query.message;
    return (s, o) => {
      const r = Je("router-link");
      return N(), P("div", IF, [
        l("div", PF, [
          l("div", VF, [
            o[1] || (o[1] = l("h1", { class: "display-4" }, "Something went wrong", -1)),
            ae(n) ? (N(), P("p", MF, "Error: " + j(ae(n)), 1)) : (N(), P("p", LF, "We're sorry for the inconvenience. Please try again later.")),
            ce(r, {
              to: "/",
              class: "btn btn-primary mt-3"
            }, {
              default: be(() => o[0] || (o[0] = [
                Z("Go back to Home")
              ])),
              _: 1,
              __: [0]
            })
          ])
        ])
      ]);
    };
  }
}), BF = [
  {
    path: "/",
    component: QA,
    children: [
      { path: "", name: "home", component: V2 },
      { path: "setup", name: "setup", component: rI },
      { path: "monitor", name: "monitor", component: UM },
      { path: "tasks", name: "tasks", component: b4 },
      { path: "archives", name: "archives", component: TF },
      { path: "error", name: "error", component: FF },
      { path: "/:pathMatch(.*)*", component: RF }
    ]
  }
];
let vi;
const Kp = () => vi || (vi = jA({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: Gw(),
  routes: BF
}), vi), jF = {
  key: 0,
  class: "alert alert-danger"
}, UF = { style: { "word-break": "break-all" } }, HF = /* @__PURE__ */ Te({
  __name: "ErrorsVisualizer",
  setup(e) {
    const t = G(), n = Xr(), { errors: s } = Aa(n), o = (r) => JSON.stringify(r);
    return ha(async () => {
      if (s.value?.length === 0) return;
      const r = t.value;
      r && (await r.show(), n.resetErrors());
    }), (r, i) => {
      const a = Je("b-modal");
      return N(), rt(a, {
        ref_key: "modalRef",
        ref: t,
        "ok-only": "",
        size: "xl"
      }, {
        title: be(() => i[0] || (i[0] = [
          l("span", null, "Error", -1)
        ])),
        default: be(() => [
          (N(!0), P(we, null, Xe(ae(s), (c, f) => (N(), P(we, { key: f }, [
            c ? (N(), P("div", jF, [
              l("div", UF, j(o(c)), 1)
            ])) : Ee("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 512);
    };
  }
}), $F = /* @__PURE__ */ Te({
  __name: "App",
  setup(e) {
    const t = qo();
    return Ht(() => {
      t.fetchProjectSettings();
    }), (n, s) => {
      const o = Je("router-view");
      return N(), P("div", null, [
        ce(o),
        ce(HF)
      ]);
    };
  }
}), l3 = (e) => {
  const t = ya($F);
  t.config.errorHandler = (o, r, i) => {
    console.error("💥 Vue Error:", o), console.error("📍 Component:", r), console.error("ℹ️ Info:", i), t.runWithContext(() => {
      o instanceof Error ? Kp().push({ name: "error", query: { message: o.message } }) : console.error("Unhandled non-Error exception:", o);
    });
  };
  const n = lw();
  t.use(hR), t.use(n);
  const s = Kp();
  return t.use(s), t.mount(e), t;
};
export {
  l3 as default
};
